import { Quad, Store } from "n3";
import { RDF, ODRL, SOTW } from "../Vocabularies";
import { Policy } from "../Interfaces";
import { extractGraph } from "../RDFUtil";

/**
 * Get the identifier of an ODRL policy.
 * The expectation is that there is only one present.
 * 
 * Classes of policies that are taken into account: Policy, Offer, Set and Agreement.
 * As disccused in issue 5 (https://github.com/woutslabbinck/UCR-test-suite/issues/5)
 * Context:
 * The policy must either be a Set or an Agreement (see Formal Semantics §2).
 * But, it should still be possible to evaluate an Offer.
 * Note: if you use policy, you use the default which is Set (ODRL Information model  §2.1)
 * 
 * @param quads 
 * @returns 
 */
export function getPolicyIdentifier(quads: Quad[]): string {
    const store = new Store(quads);
    const policyNodes: Quad[] = [];
    policyNodes.push(
        ...store.getQuads(null, RDF.terms.type, ODRL.terms.Set, null),
        ...store.getQuads(null, RDF.terms.type, ODRL.terms.Agreement, null),
        ...store.getQuads(null, RDF.terms.type, ODRL.terms.Policy, null),
        ...store.getQuads(null, RDF.terms.type, ODRL.terms.Offer, null)
    );
    const policyIdentifiers: Set<string> = new Set(policyNodes.map(quad => quad.subject.id));

    if (policyIdentifiers.size !== 1) {
        throw Error(`Expected one ODRL policy. Found ${policyIdentifiers.size}`);
    }

    return Array.from(policyIdentifiers)[0];
}

/**
 * Get the identifier of an ODRL request.
 * The expectation is that there is only one present.
 * @param quads 
 * @returns 
 */
export function getRequestIdentifier(quads: Quad[]): string {
    const store = new Store(quads);
    const requestNodes = store.getQuads(null, RDF.terms.type, SOTW.terms.EvaluationRequest, null);

    if (requestNodes.length !== 1) {
        throw Error(`Expected one ODRL request identifier. Found ${requestNodes.length}`);
    }
    return requestNodes[0].subject.id;
}

/**
 * Create a {@link Policy} given a {@link Store}.
 * This will only succeed when there is only one ODRL policy present in the store.
 * 
 * @param store 
 * @param policyID 
 * @param sourceFileName 
 * @returns 
 */
export function getPolicy(store: Store, policyID?: string, sourceFileName?: string): Policy {
    const policyIDinStore = getPolicyIdentifier(store.getQuads(null, null, null, null));
    if (policyID !== undefined && policyID !== policyIDinStore) {
        throw Error("Policy ID extracted from graph does not match provided");
    }
    const policyQuads = extractGraph(policyIDinStore, store);
    return {
        identifier: policyIDinStore,
        source: sourceFileName ?? "None",
        quads: policyQuads
    };
}

/**
 * Create a {@link Policy} given a {@link Store}.
 * This will only succeed when there is only one ODRL request present in the store.
 * 
 * @param store 
 * @param requestID 
 * @param sourceFileName 
 * @returns 
 */
export function getRequest(store: Store, requestID?: string, sourceFileName?: string): Policy {
    const requestIDinStore = getRequestIdentifier(store.getQuads(null, null, null, null));
    if (requestID !== undefined && requestID !== requestIDinStore) {
        throw Error("Request ID extracted from graph does not match provided");
    }
    const requestQuads = extractGraph(requestIDinStore, store);
    return {
        identifier: requestIDinStore,
        source: sourceFileName ?? "None",
        quads: requestQuads
    };
}

