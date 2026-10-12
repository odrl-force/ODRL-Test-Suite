# Read request from Alice to resource X returns into yes (temporal eq - future) (Alice Request Read X).
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

<urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
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

<urn:uuid:0d97f018-503b-4439-822b-f1199f37bff1> a report:PolicyReport ;
  dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:aa146278-f812-4957-9e25-318a83998cc4> ;
  report:policyRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:ruleReport <urn:uuid:3eed20de-163a-49d1-adaf-34040bcd22bd> .

<urn:uuid:3eed20de-163a-49d1-adaf-34040bcd22bd> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:6ed7ed9d-b9be-4756-9b44-1d2372ae943c> ;
  report:ruleRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:premiseReport <urn:uuid:187ab85d-5c5f-4b97-9b5a-e150b25d9600>, <urn:uuid:31957e00-6e8c-4f71-b0eb-e818078c1e44>, <urn:uuid:579400a5-3fdb-4743-bdb9-cae5ef596986>, <urn:uuid:75b73704-515f-4a04-94b5-89edf4f6976f> ;
  report:activationState report:Inactive .

<urn:uuid:187ab85d-5c5f-4b97-9b5a-e150b25d9600> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:31957e00-6e8c-4f71-b0eb-e818078c1e44> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:579400a5-3fdb-4743-bdb9-cae5ef596986> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:75b73704-515f-4a04-94b5-89edf4f6976f> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
