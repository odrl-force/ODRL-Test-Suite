# Read request from people in party collection to resource in asset collection returns into yes (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection may READ any resource from the Asset Collection.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> a odrl:Set ;
  odrl:uid <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> ;
  dct:description "A party collection may READ any resource from the Asset Collection." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> .

<urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> a odrl:Permission ;
  odrl:assignee ex:partyCollection ;
  odrl:action odrl:read ;
  odrl:target ex:assetCollection .

ex:partyCollection a odrl:PartyCollection ;
  odrl:source ex:partyIdentifier .

ex:assetCollection a odrl:AssetCollection ;
  odrl:source ex:assetIdentifier .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ] .
```
## State of the world
```ttl
@prefix ex: <http://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:116a8435-a356-45f5-a20f-a1e593d4a55d> a sotw:SotW ;
  sotw:context ex:alice, ex:x .

ex:alice a foaf:Person ;
  odrl:partOf ex:partyCollection .

ex:x odrl:partOf ex:assetCollection .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:43dd3176-0d8e-4498-afeb-1aaf3a481371> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:503ee670-1cd8-42c5-8e39-913589934546> .

<urn:uuid:503ee670-1cd8-42c5-8e39-913589934546> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:4be0248a-e3ea-498b-8cad-fc2288e6620a>, <urn:uuid:aca3b71f-e01e-4362-ba2c-88cbde548ef1>, <urn:uuid:824ea31c-5855-46aa-957f-fc970333987a> ;
  report:activationState report:Active .

<urn:uuid:4be0248a-e3ea-498b-8cad-fc2288e6620a> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:aca3b71f-e01e-4362-ba2c-88cbde548ef1> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:824ea31c-5855-46aa-957f-fc970333987a> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
