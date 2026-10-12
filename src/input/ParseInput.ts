import { getAbsoluteFilePaths } from "../FileUtil";
import { Policy, RawTestCase, StateOfTheWorld } from "../Interfaces";
import { fileAsStore } from "../RDFUtil";
import { getPolicyIdentifier, getRequestIdentifier } from "../test_cases/ODRLUtil";
import { getTestCaseIdentifier } from "../test_cases/TestCaseUtil";
import {getStateOfTheWorldIdentifier, getStateOfTheWorld} from "../test_cases/SotwUtil";

/**
 * Function that fetches all ODRL policies from a directory and puts them into a map.
 * The map has as key a policyID (an IRI) and as a value a {@link Policy}, which is a tuple of the form (identifier, quads, source).
 * @param policiesDir
 * @returns
 */
export async function parsePolicies(policiesDir: string): Promise<Map<string, Policy>> {
    const policies: Map<string, Policy> = new Map<string, Policy>();
    for (const file of getAbsoluteFilePaths(policiesDir)) {
        const store = await fileAsStore(file);
        let policyID: string | undefined
        try {
            policyID = getPolicyIdentifier(store.getQuads(null, null, null, null));
        } catch {
            console.log(`${file} contains no policy`);
        }
        if (policyID === undefined) break;

        if (policies.has(policyID)) {
            // Note: [Potentially dangerous] no check is performed whether the ID already exists.
            console.log(`Warning: Trying to add multiple policies to policy Map with the same Identifier`);
            console.log(`   ID: ${policyID}`);
            console.log(`   original file: ${policies.get(policyID)!.source}`);
            console.log(`        new file: ${file}`);
        }
        policies.set(policyID, {
            identifier: policyID,
            quads: store.getQuads(null, null, null, null),
            source: file
        });
    }
    return policies;
}


/**
 * Function that fetches all ODRL requests from a directory and puts them into a map.
 * The map has as key a requestID (an IRI) and as a value a {@link Policy}, which is a tuple of the form (identifier, quads, source).
 * @param requestsDir
 * @returns
 */
export async function parseRequests(requestsDir: string): Promise<Map<string, Policy>> {
    const requests: Map<string, Policy> = new Map<string, Policy>();
    for (const file of getAbsoluteFilePaths(requestsDir)) {
        const store = await fileAsStore(file);
        let requestID: string | undefined
        try {
            requestID = getRequestIdentifier(store.getQuads(null, null, null, null));
        } catch {
            console.log(`${file} contains no request`);
        }
        if (requestID === undefined) break;

        if (requests.has(requestID)) {
            // Note: [Potentially dangerous] no check is performed whether the ID already exists.
            console.log(`Warning: Trying to add multiple requests to requests Map with the same Identifier`);
            console.log(`   ID: ${requestID}`);
            console.log(`   original file: ${requests.get(requestID)!.source}`);
            console.log(`        new file: ${file}`);

        }
        requests.set(requestID, {
            identifier: requestID,
            quads: store.getQuads(null, null, null, null),
            source: file
        });
    }
    return requests;
}

/**
 * Function that fetches all Test cases from a directory and puts them into a map.
 * The map has as key the test case ID (an iri) and as value a {@link RawTestCase}, which is a tuple of the form (identifier, quads, source).
 * @param testCasesDir
 * @returns
 */
export async function parseTestCases(testCasesDir: string): Promise<Map<string, RawTestCase>> {
    const testCases: Map<string, RawTestCase> = new Map<string, RawTestCase>();
    for (const file of getAbsoluteFilePaths(testCasesDir)) {
        const store = await fileAsStore(file);
        let testCaseID: string | undefined
        try {
            testCaseID = getTestCaseIdentifier(store.getQuads(null, null, null, null));
        } catch {
            console.log(`${file} contains no test case`);
        }
        if (testCaseID === undefined) break;

        if (testCases.has(testCaseID)) {
            // Note: [Potentially dangerous] no check is performed whether the ID already exists.
            console.log(`Warning: Trying to add multiple test cases to (raw) test cases Map with the same Identifier`);
            console.log(`   ID: ${testCaseID}`);
            console.log(`   original file: ${testCases.get(testCaseID)!.source}`);
            console.log(`        new file: ${file}`);

        }
        testCases.set(testCaseID, {
            identifier: testCaseID,
            quads: store.getQuads(null, null, null, null),
            source: file
        });
    }
    return testCases;
}

export async function parseStateOfTheWorld(stateOfTheWorldDir: string): Promise<Map<string, StateOfTheWorld>> {
    const stateOfTheWorldMap: Map<string, StateOfTheWorld> = new Map();
    for (const file of getAbsoluteFilePaths(stateOfTheWorldDir)) {
        const store = await fileAsStore(file);
        let stateOfTheWorldID: string | undefined;
        try {
            stateOfTheWorldID = getStateOfTheWorldIdentifier(store.getQuads(null, null, null, null));
        } catch {
            console.log(`${file} contains no state of the world`);
        }
        if (stateOfTheWorldID === undefined) break;

        if (stateOfTheWorldMap.has(stateOfTheWorldID)) {
            // Note: [Potentially dangerous] no check is performed whether the ID already exists.
            console.log(`Warning: Trying to add multiple requests to requests Map with the same Identifier`);
            console.log(`   ID: ${stateOfTheWorldID}`);
            console.log(`   original file: ${stateOfTheWorldMap.get(stateOfTheWorldID)!.source}`);
            console.log(`        new file: ${file}`);
        }
        stateOfTheWorldMap.set(stateOfTheWorldID, getStateOfTheWorld(store, stateOfTheWorldID, file));
    }
    return stateOfTheWorldMap
}
