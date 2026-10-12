import { DataFactory, Quad, Store } from "n3";
import { isomorphic } from "rdf-isomorphic";
import { ComplianceReport, TestCase, TestCaseEvaluation, TestCaseProperties } from "../Interfaces";
import { blanknodeify, resourceToOptimisedTurtle, storeToString } from "../RDFUtil";
import { DCT, RDF, TEST } from "../Vocabularies";
import { getReportIdentifier } from "./ComplianceReportUtil";
import { Evaluator } from "odrl-evaluator";
import { write } from "@jeswr/pretty-turtle/dist"

const namedNode = DataFactory.namedNode;


/**
 * Get the identifier of a test case.
 * The expectation is that there is only one present.
 * @param quads
 * @returns
 */
export function getTestCaseIdentifier(quads: Quad[]): string {
    const store = new Store(quads);
    const testCaseNodes = store.getQuads(null, RDF.terms.type, TEST.terms.TestCase, null);

    if (testCaseNodes.length !== 1) {
        throw Error(`Expected one test case identifier. Found ${testCaseNodes.length}`);
    }
    return testCaseNodes[0].subject.id;
}

/**
 * Extract the properties of a test case.
 * This will only succeed when there is only one test case present in the array of quads.
 * @param quads
 * @returns
 */
export function parseTestCase(quads: Quad[]): TestCaseProperties {
    const store = new Store(quads);
    const identifier = getTestCaseIdentifier(quads);
    const title: string = store.getObjects(namedNode(identifier), DCT.terms.title, null)[0]?.value ?? "";

    if (store.getObjects(namedNode(identifier), TEST.terms.policy, null).length !== 1) {
        throw Error(`Test Case ${identifier} does not contain one policy.`);
    }

    if (store.getObjects(namedNode(identifier), TEST.terms.request, null).length !== 1) {
        throw Error(`Test Case ${identifier} does not contain one request.`);
    }

    if (store.getObjects(namedNode(identifier), TEST.terms.expectedReport, null).length !== 1) {
        throw Error(`Test Case ${identifier} does not contain one expected report.`);
    }

    if (store.getObjects(namedNode(identifier), TEST.terms.sotw, null).length !== 1) {
        throw Error(`Test Case ${identifier} does not contain a state of the world.`);
    }

    return {
        testCaseIdentifier: identifier,
        title: title,
        policyIdentifier: store.getObjects(namedNode(identifier), TEST.terms.policy, null)[0].id,
        requestIdentifier: store.getObjects(namedNode(identifier), TEST.terms.request, null)[0].id,
        expectedReportIdentifier: store.getObjects(namedNode(identifier), TEST.terms.expectedReport, null)[0].id,
        stateOfTheWorldIdentifier: store.getObjects(namedNode(identifier), TEST.terms.sotw, null)[0].id,
    };
}


/**
 * Creates a human-readable form for the test case.
 * Useful for debugging and documentation.
 * @param testCase
 */
export async function testCaseDocumentation(testCase: TestCase): Promise<string> {
    const prefixes = {
        'dct': 'http://purl.org/dc/terms/',
        'dpv': "https://w3id.org/dpv#",
        'ex': 'http://example.org/',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'odrl': 'http://www.w3.org/ns/odrl/2/',
        'report': 'https://w3id.org/force/compliance-report#',
        'schema': "https://schema.org/",
        'sotw': "https://w3id.org/force/sotw#",
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
    }
    let output = ""


    // if there is no triple with `dct:source` in the ODRL policy graph, then this will error.
    const source = new Store(testCase.policy.quads).getQuads(namedNode(testCase.policy.identifier), DCT.terms.source, null, null)[0].object.id;
    // if there is no triple with `dct:description` in the ODRL policy graph, then this will error.
    const description = new Store(testCase.policy.quads).getQuads(namedNode(testCase.policy.identifier), DCT.terms.description, null, null)[0].object.value;

    // title:
    output += `# ${testCase.title}\n`
    // original source
    output += `**Source**: ${source}\n`
    // description
    output += `> ${description}\n`
    // ODRL Policy
    output += "## ODRL Policy\n"
    output += "```ttl\n"
    output += await write(testCase.policy.quads, {prefixes})
    output += "```\n"
    // ODRL Request
    output += "## ODRL Request\n"
    output += "```ttl\n"
    output += await write(testCase.request.quads, {prefixes})
    output += "```\n"
    // State of the World
    output += "## State of the world\n"
    output += "```ttl\n"
    output += await write(testCase.stateOfTheWorld.quads, {prefixes})
    output += "```\n"
    // Evaluation result: Compliance Report
    output += "## Evaluation result: Compliance Report\n"
    output += "```ttl\n"
    output += await write(testCase.expectedReport.quads, {prefixes})
    output += "```\n"

    return output
}
