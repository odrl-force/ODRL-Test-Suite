# Read request from Alice to resource X returns into yes (temporal neq) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may NOT READ resource X at 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915> a odrl:Set ;
  odrl:uid <urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915> ;
  dct:description "ALICE may NOT READ resource X at 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29> .

<urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:neq ;
  odrl:rightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime .
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
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:d63ea76e-0aed-4e4e-9a8c-0b7083ebc6e2> a sotw:SotW .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:5b348753-16e9-478c-8d8b-8553ba03f85d> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:2feb242d-75e3-46cd-a6aa-b4d948f34e81> .

<urn:uuid:2feb242d-75e3-46cd-a6aa-b4d948f34e81> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:d8a98025-b1b6-4d7b-962b-32a89cfb4bb6>, <urn:uuid:c3c5d146-7e4d-4824-9316-f9b4b9ba3a07>, <urn:uuid:5583bc6e-6ebc-4582-a012-ff2e5efebbc2>, <urn:uuid:9d081d3f-a9ee-47d9-8423-40eb4a0c53f0> ;
  report:activationState report:Inactive .

<urn:uuid:d8a98025-b1b6-4d7b-962b-32a89cfb4bb6> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:c3c5d146-7e4d-4824-9316-f9b4b9ba3a07> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:5583bc6e-6ebc-4582-a012-ff2e5efebbc2> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:9d081d3f-a9ee-47d9-8423-40eb4a0c53f0> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
