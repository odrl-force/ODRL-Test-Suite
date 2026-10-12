# Read request from Alice to resource X returns into yes (temporal gt - past) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is later than 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe> a odrl:Set ;
  odrl:uid <urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe> ;
  dct:description "ALICE may READ resource X when it is later than 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:641a79e0-0633-46c5-afe8-616e36701404> .

<urn:uuid:641a79e0-0633-46c5-afe8-616e36701404> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:gt ;
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

<urn:uuid:c59462a5-37b7-4072-9405-e49ff33c06f4> a report:PolicyReport ;
  dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe> ;
  report:policyRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:ruleReport <urn:uuid:489394a1-4330-4dce-9902-aa58e9198555> .

<urn:uuid:489394a1-4330-4dce-9902-aa58e9198555> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:641a79e0-0633-46c5-afe8-616e36701404> ;
  report:ruleRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:premiseReport <urn:uuid:8366655d-3de4-481c-8392-6baa4940d50d>, <urn:uuid:8301ee01-a511-422d-8d8a-f1e9ba921db4>, <urn:uuid:a068e7f2-5df4-4681-8081-56e62e1e4a9d>, <urn:uuid:8ed30993-ee36-4c32-a67e-2823ec59929a> ;
  report:activationState report:Inactive .

<urn:uuid:8366655d-3de4-481c-8392-6baa4940d50d> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:8301ee01-a511-422d-8d8a-f1e9ba921db4> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:a068e7f2-5df4-4681-8081-56e62e1e4a9d> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:8ed30993-ee36-4c32-a67e-2823ec59929a> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
