import * as path from "path";
import {
    loadTestSuite, 
    storeTestCase,
    TestCase,
} from "../src";
import 'dotenv/config';

// Note: this can give problems -> need proper cli functionality with default current rootDir
const rootDir = path.join(__dirname, "..", "data");
const documentationDir = path.join(rootDir, "documentation");


async function main() {
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestSuite(rootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));
    console.log(`Test cases loaded.`);

    console.log(`Creating documentation of test cases (${testCaseMap.size}) in: ${documentationDir}`);

    // create documentation for all test cases
    for (const testCase of testCases) {
        // I deliberately run these. If they make changes in the documentation (which should always be correct), then it means either a policy, request state of the world or expected compliance report has changed.
        // If this was not desireable action MUST be undertaken by the repository owner(s)!!
        storeTestCase(testCase, documentationDir);
    }
    console.log(`Documentation created.`);
}
main()