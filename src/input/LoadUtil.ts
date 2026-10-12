import { Store } from "n3";
import * as path from 'path';
import { Policy, RawTestCase, StateOfTheWorld, TestCase } from "../Interfaces";
import { extractGraph } from "../RDFUtil";
import { getExpectedReport } from "../test_cases/ComplianceReportUtil";
import { parseTestCase } from "../test_cases/TestCaseUtil";
import { parsePolicies, parseRequests, parseStateOfTheWorld, parseTestCases } from "./ParseInput";


export async function loadTestCases(policiesDirectory: string, requestsDirectory: string, testCasesDirectory: string, stateOfTheWorldDirectory: string): Promise<Map<string, TestCase>> {
    // load all policies, requests and test cases
    const policies: Map<string, Policy> = await parsePolicies(policiesDirectory);
    const requests: Map<string, Policy> = await parseRequests(requestsDirectory);
    const testCases: Map<string, RawTestCase> = await parseTestCases(testCasesDirectory);
    const stateOfTheWorldMap: Map<string, StateOfTheWorld> = await parseStateOfTheWorld(stateOfTheWorldDirectory);

    const cleanedTestCases: Map<string, TestCase> = new Map<string, TestCase>();

    // using all data, create tuples (of Quad[]) of the form (policy, request, SotW, expectedReport)
    testCases.forEach((rawTestCase, testCaseID) => {
        // this test case store contains the test case, expected report and the state of the world
        const testCaseStore = new Store(rawTestCase.quads);

        // Note: can fail
        const testCaseProperties = parseTestCase(testCaseStore.getQuads(null, null, null, null));

        const policy = policies.get(testCaseProperties.policyIdentifier);
        if (policy === undefined) {
            throw Error(`Policy with ID "${testCaseProperties.policyIdentifier}" not found.`);
        }
        const request = requests.get(testCaseProperties.requestIdentifier);
        if (request === undefined) {
            throw Error(`Request with ID "${testCaseProperties.requestIdentifier}" not found.`);
        }
        const stateOfTheWorld = stateOfTheWorldMap.get(testCaseProperties.stateOfTheWorldIdentifier)
        if (stateOfTheWorld === undefined) {
            throw Error(`State of the world with ID "${testCaseProperties.stateOfTheWorldIdentifier}" not found.`);
        }
        const expectedReport = getExpectedReport(testCaseStore, testCaseProperties.expectedReportIdentifier, rawTestCase.source)

        const stateOfTheWorldStore = new Store(testCaseStore.getQuads(null, null, null, null))
        stateOfTheWorldStore.removeQuads(expectedReport.quads)

        // also remove test case from sotw
        const onlyTestCaseQuads = extractGraph(testCaseID, stateOfTheWorldStore)
        stateOfTheWorldStore.removeQuads(onlyTestCaseQuads)


        cleanedTestCases.set(testCaseID, {
            identifier: testCaseID,
            policy: policy,
            request: request,
            stateOfTheWorld: stateOfTheWorld,
            expectedReport: expectedReport,
            title: testCaseProperties.title
        })
    })
    return cleanedTestCases
}

/**
 * Loads all testCases based on the root directory.
 * 
 * Note: this assumes a given directory structure
 * @param baseDir 
 * @returns 
 */
export async function loadTestSuite(baseDir):Promise<Map<string, TestCase>> {
    const policiesDir = path.join(baseDir, "policies");
    const requestsDir = path.join(baseDir, "requests");
    const testCasesDir = path.join(baseDir, "test_cases");
    const stateOfTheWorldDir = path.join(baseDir, "sotw");

    const testCaseMap = await loadTestCases(policiesDir, requestsDir, testCasesDir, stateOfTheWorldDir);
    return testCaseMap
}