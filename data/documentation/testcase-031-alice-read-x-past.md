# Read request from Alice to resource X returns into yes (temporal eq - past) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X at 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:aa146278-f812-4957-9e25-318a83998cc4> a odrl:Set ;
  odrl:uid <urn:uuid:aa146278-f812-4957-9e25-318a83998cc4> ;
  dct:description "ALICE may READ resource X at 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:6ed7ed9d-b9be-4756-9b44-1d2372ae943c> .

<urn:uuid:6ed7ed9d-b9be-4756-9b44-1d2372ae943c> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:eq ;
  odrl:rightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ] .
```
## State of the world
```ttl
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:d63ea76e-0aed-4e4e-9a8c-0b7083ebc6e2> a sotw:SotW .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:01dfd00b-6851-41d2-800f-c9e17f30e1a5> a report:PolicyReport ;
  dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:aa146278-f812-4957-9e25-318a83998cc4> ;
  report:policyRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:ruleReport <urn:uuid:ddfb407a-42ed-4a74-ba1d-fb2a2e4a3526> .

<urn:uuid:ddfb407a-42ed-4a74-ba1d-fb2a2e4a3526> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:6ed7ed9d-b9be-4756-9b44-1d2372ae943c> ;
  report:ruleRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:premiseReport <urn:uuid:9d1d8c56-e2ac-467f-a368-3913b7aad001>, <urn:uuid:b62c94c2-0481-4387-81c6-0bcd4be6eaef>, <urn:uuid:e7106ef9-051c-4582-9fec-62c44dc3c1fd>, <urn:uuid:fce85c0c-47d3-4c41-9e06-5d01a01c910a> ;
  report:activationState report:Inactive .

<urn:uuid:9d1d8c56-e2ac-467f-a368-3913b7aad001> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:b62c94c2-0481-4387-81c6-0bcd4be6eaef> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e7106ef9-051c-4582-9fec-62c44dc3c1fd> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:fce85c0c-47d3-4c41-9e06-5d01a01c910a> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
