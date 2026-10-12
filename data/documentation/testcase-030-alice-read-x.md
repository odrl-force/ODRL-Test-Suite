# Read request from Alice to resource X returns into yes (temporal eq) (Alice Request Read X).
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
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:b5c925fe-7b3b-4370-b5ce-e3fe81a0b472> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:aa146278-f812-4957-9e25-318a83998cc4> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:0eac903b-0177-459a-b380-5ea5f2d30a2a> .

<urn:uuid:0eac903b-0177-459a-b380-5ea5f2d30a2a> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:6ed7ed9d-b9be-4756-9b44-1d2372ae943c> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:902e4ac0-514a-45b8-aa88-bff23668ab82>, <urn:uuid:ba0bf101-32fd-4381-aae9-600b70d79b7c>, <urn:uuid:12fa7ab7-9d92-4f7e-8fbd-485030da2099>, <urn:uuid:4129b67c-3a29-4cfc-9ec5-b37affed48e8> ;
  report:activationState report:Active .

<urn:uuid:902e4ac0-514a-45b8-aa88-bff23668ab82> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:eq ;
  report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Satisfied .

<urn:uuid:ba0bf101-32fd-4381-aae9-600b70d79b7c> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:12fa7ab7-9d92-4f7e-8fbd-485030da2099> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:4129b67c-3a29-4cfc-9ec5-b37affed48e8> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
