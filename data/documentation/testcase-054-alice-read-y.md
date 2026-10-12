# Read request from Alice to resource in asset collection returns into yes (Alice Request Read Y).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ any resource from the Asset Collection.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> a odrl:Set ;
  odrl:uid <urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> ;
  dct:description "ALICE may READ any resource from the Asset Collection." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> .

<urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:assetCollection .

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

<urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:y ;
  dct:description "Requesting Party Alice requests to READ resource Y." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ] .
```
## State of the world
```ttl
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:f048231b-b932-4248-a47d-8653a390247b> a sotw:SotW ;
  sotw:context ex:x .

ex:x odrl:partOf ex:assetCollection .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:3a2f5c93-ee01-4856-833c-12be09978c0c> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> ;
  report:policyRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:ruleReport <urn:uuid:5692542e-a60d-447f-9f8a-3b4f6cadde29> .

<urn:uuid:5692542e-a60d-447f-9f8a-3b4f6cadde29> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> ;
  report:ruleRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:premiseReport <urn:uuid:c6267db4-c2da-4ed7-9382-0f307ce86635>, <urn:uuid:de0f3292-8665-4764-a2a7-c8d37aee9c2a>, <urn:uuid:c5446f77-fc33-4c89-8caa-94db0ee9b75e> ;
  report:activationState report:Inactive .

<urn:uuid:c6267db4-c2da-4ed7-9382-0f307ce86635> a report:TargetReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:de0f3292-8665-4764-a2a7-c8d37aee9c2a> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:c5446f77-fc33-4c89-8caa-94db0ee9b75e> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
