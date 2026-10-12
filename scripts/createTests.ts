import { Quad } from "n3";
import * as path from "path";
import {
    loadTestSuite,
    TestCase
} from "../src";
import { prefixes } from "odrl-evaluator";
import { write } from "@jeswr/pretty-turtle/dist"
import { writeFileSync } from "fs";

const rootDir = path.join(__dirname, "..", "data");
// create tests that can be used within the ODRL Evaluator
// RDF JEST tests using the testcases

// created here as the tools are here
// tested at the odrl evaluator as we want to ensure odrl evaluator correctness


/**
 * Converts the official ODRL Test Suite into two generated artifacts:
 *
 * 1. Source.ts
 *    Contains all policies, requests, reports and SotWs as
 *    BasicRepresentation instances, together with lookup maps and
 *    a lightweight testcase index.
 *
 * 2. Test-Suite.test.ts
 *    An integration test that executes every supported testcase
 *    against all configured ODRL evaluator engines.
 *
 * The generated files are copied into the ODRL Evaluator repository
 * and serve as the bridge between the official test suite and the
 * evaluator's testing infrastructure.
 */
async function main() {
    // load test cases
    const testCaseMap = await loadTestSuite(rootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));


    // Long running tests: 62-64
    // unsupported tests (Duties): 59-61 and 65-68
    const unresolvedTestcases = ["urn:uuid:9c052f5d-0788-4352-b957-322b432b1bfa", "urn:uuid:8677b86e-4a09-421c-a75b-f50874c8ec58", "urn:uuid:32ac9d9d-dddf-434a-a309-14bb9224ef2e", "urn:uuid:1c47df55-a53d-4740-93a8-614fc3ea9a1b", "urn:uuid:211654bf-86e1-42f6-8f20-cd08e3c3992e", "urn:uuid:5b372c04-ceb8-48bd-b4b8-cb6380683374", "urn:uuid:5ab9d056-dcb8-47f6-a4af-dd5d9320f958", "urn:uuid:f9648615-bb2f-4d74-8f87-e2da0d327932", "urn:uuid:2c997aef-a337-4503-aec7-3a93675f7b1a", "urn:uuid:7844a3ce-40ec-4d6d-90f4-d0be27bba69c"]


    const policies: Map<string, Representation> = new Map();
    const sotws: Map<string, Representation> = new Map();
    const reports: Map<string, Representation> = new Map();
    const requests: Map<string, Representation> = new Map();

    const testCaseRepresentations: TestCaseRepresentation[] = []

    for (const testCase of testCases) {
        const report = prepareReport(testCase)
        const policy = preparePolicy(testCase)
        const sotw = prepareSotw(testCase)
        const request = prepareRequest(testCase)
        reports.set(report.identifier, report)
        policies.set(policy.identifier, policy)
        sotws.set(sotw.identifier, sotw)
        requests.set(request.identifier, request)

        testCaseRepresentations.push({
            variableName: path.parse(testCase.expectedReport.source).name.replace(/-/g, "_"),
            identifier: testCase.identifier,
            testCase: testCase,
            policyVariable: policy,
            requestVariable: request,
            sotwVariable: sotw,
            reportVariable: report
        })
    }
    const testCaseType = "RepresentationType.TestCase"

    const reportType = "RepresentationType.ComplianceReport"
    const policyType = "RepresentationType.Policy"
    const sotwType = "RepresentationType.StateOfTheWorld"
    const requestType = "RepresentationType.EvaluationRequest"

    const maps = [
        serializeRepresentationMap("reports", reports),
        serializeRepresentationMap("policies", policies),
        serializeRepresentationMap("sotws", sotws),
        serializeRepresentationMap("requests", requests),
    ].join("\n");

    const serializations = [
        await serializeRepresentations(reports, reportType),
        await serializeRepresentations(policies, policyType),
        await serializeRepresentations(sotws, sotwType),
        await serializeRepresentations(requests, requestType)
    ].join("\n");

//NOTE: could replace the identifier with the actual identifier, but that is worse readability
const testCasesString = `
export const testcases = [
${testCaseRepresentations.map(tc => `
    {
        identifier: "${tc.variableName}", 
        label: ${JSON.stringify(tc.testCase.title)},
        policyID: "${tc.policyVariable.identifier}",
        expectedReportIdentifier: "${tc.reportVariable.identifier}",
        requestIdentifier: "${tc.requestVariable.identifier}",
        sotwIdentifier: "${tc.sotwVariable.identifier}"
    }`
).join(",\n")}
];
`;
    const sourcesString = 
`import { Parser } from "n3"
import { BasicRepresentation, RepresentationType } from "./Interfaces"

${serializations}

${maps}

${testCasesString}
    `


    const jestString = 
`import { reports, testcases, policies, sotws, requests } from "../util/test-suite/Source"
import { EyelingReasoner, ODRLEngineMultipleSteps, ODRLEvaluator, blanknodeify } from "../../src";
import { Quad } from "n3";

const engines = [
    {
        name: 'Eyeling Reasoner',
        evaluator: new ODRLEvaluator(new ODRLEngineMultipleSteps({ reasoner: new EyelingReasoner() }))
    },
    {
        name: 'Default Engine',
        evaluator: new ODRLEvaluator(new ODRLEngineMultipleSteps())
    }
];

// Loop over the engines
engines.forEach(({ name, evaluator }) => {
    describe(\`The ODRL evaluator with \${name} succeeds following test case\`, () => {
        const odrlEvaluator = evaluator;
        
        // loop over test cases
        testcases.forEach(testCase => {
            it(testCase.label, async () => {
                const report = await odrlEvaluator.evaluate(
                    policies.get(testCase.policyID)!.data,
                    requests.get(testCase.requestIdentifier)!.data,
                    sotws.get(testCase.sotwIdentifier)!.data,
                );

                expect(blanknodeify(report as any as Quad[])).toBeRdfIsomorphic(
                    reports.get(testCase.expectedReportIdentifier)!.data
                );
            });
        });            
            
        }
    );
});`

writeFileSync("Source.ts", sourcesString) // to be placed in test util in the odrl evaluator: test/util/test-suite/Source.ts
writeFileSync("Test-Suite.test.ts", jestString) // to be placed under integration tests in odrl evaluator: test/integration/Test-Suite.test.ts


}
main()

/**
 * Serializes a collection of representations into TypeScript source.
 *
 * Each representation is emitted as:
 *
 *   export const someRepresentation = new BasicRepresentation(...)
 *
 * This function is generic and can be used for policies, requests,
 * reports and state-of-the-world resources.
 *
 * @param representations Representations to serialize.
 * @param type The corresponding RepresentationType enum value.
 * @returns Generated TypeScript source code.
 */
async function serializeRepresentations(representations: Map<string, Representation>, type: string): Promise<string> {
    const parts: string[] = [];

    for (const representation of Array.from(representations.values())) {
        parts.push(
            await serializeRepresentation(
                representation,
                type,
            ),
        );
    }

    return parts.join("\n");
}

/**
 * Generates a lookup map for previously serialized representations.
 *
 * The generated maps allow tests to resolve resources by their RDF
 * identifier instead of hard-coding variable names.
 *
 * @param variableName Name of the generated map.
 * @param representations Representations included in the map.
 */
function serializeRepresentationMap(variableName: string, representations: Map<string, Representation>,): string {
    return `
export const ${variableName} = new Map([
${Array.from(representations.values())
            .map(rep =>
                `["${rep.identifier}", ${rep.variableName}]`)
            .join(", ")}
]);`;
}

/**
 * Creates an internal representation model for a compliance report from a Test Case
 *
 * @param testCase Source testcase from the ODRL test suite.
 * @returns Internal representation descriptor.
 */
function prepareReport(testCase: TestCase): Representation {
    const normalizedName = `report_${path.parse(testCase.expectedReport.source).name.replace(/-/g, "_")}`;
    return {
        variableName: normalizedName,
        identifier: testCase.expectedReport.identifier,
        quads: testCase.expectedReport.quads,
    }
}

/**
 * Creates an internal representation model for a policy from a Test Case
 *
 * @param testCase Source testcase from the ODRL test suite.
 * @returns Internal representation descriptor.
 */
function preparePolicy(testCase: TestCase): Representation {
    const normalizedName = path.parse(testCase.policy.source).name.replace(/-/g, "_");
    return {
        variableName: normalizedName,
        identifier: testCase.policy.identifier,
        quads: testCase.policy.quads,
    }
}

/**
 * Creates an internal representation model for an evaluation request from a Test Case
 *
 * @param testCase Source testcase from the ODRL test suite.
 * @returns Internal representation descriptor.
 */
function prepareRequest(testCase: TestCase): Representation {
    const normalizedName = path.parse(testCase.request.source).name.replace(/-/g, "_");
    return {
        variableName: normalizedName,
        identifier: testCase.request.identifier,
        quads: testCase.request.quads,
    }
}

/**
 * Creates an internal representation model for a state of the world from a Test Case
 *
 * @param testCase Source testcase from the ODRL test suite.
 * @returns Internal representation descriptor.
 */
function prepareSotw(testCase: TestCase): Representation {
    const normalizedName = path.parse(testCase.stateOfTheWorld.source).name.replace(/-/g, "_");
    return {
        variableName: normalizedName,
        identifier: testCase.stateOfTheWorld.identifier,
        quads: testCase.stateOfTheWorld.quads,
    }
}

interface Representation {
    variableName: string;
    identifier: string;
    quads: Quad[];
}

interface TestCaseRepresentation {
    variableName: string;
    identifier: string;

    testCase: TestCase;
    policyVariable: Representation;
    requestVariable: Representation;
    sotwVariable: Representation;
    reportVariable: Representation;
}

/**
 * Serializes a single representation into a BasicRepresentation declaration.
 *
 * RDF quads are first converted to Turtle.
 *
 * @param representation Representation to serialize.
 * @param type RepresentationType enum value.
 * @returns Generated TypeScript source code.
 */
async function serializeRepresentation(representation: Representation, type: string): Promise<string> {
    return `
export const ${representation.variableName} = new BasicRepresentation(
    new Parser().parse(\`
${await write(representation.quads, { prefixes })}
    \`),
    ${type},
    { slug: "${representation.variableName}" }
)
    `
}


