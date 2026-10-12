# Read request from Alice to resource X returns into yes (temporal lteq - past) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is before or equal to 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272> a odrl:Set ;
  odrl:uid <urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272> ;
  dct:description "ALICE may READ resource X when it is before or equal to 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd> .

<urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:lteq ;
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
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:05d0eaa3-762a-4d41-bacc-0deba5c4d036> a report:PolicyReport ;
  dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272> ;
  report:policyRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:ruleReport <urn:uuid:99b97183-cb78-4e6e-84d8-5f3d42722ae4> .

<urn:uuid:99b97183-cb78-4e6e-84d8-5f3d42722ae4> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd> ;
  report:ruleRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:premiseReport <urn:uuid:276a6377-ba41-43bd-aaa9-7c75063022cd>, <urn:uuid:2d5b7e02-2dc2-4bfe-89f7-2236573845ee>, <urn:uuid:a785178f-07c5-4077-8e0e-0e6ea493d882>, <urn:uuid:90ed99d0-c834-4e59-bb1a-981fad89a2df> ;
  report:activationState report:Active .

<urn:uuid:276a6377-ba41-43bd-aaa9-7c75063022cd> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:lteq ;
  report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Satisfied .

<urn:uuid:2d5b7e02-2dc2-4bfe-89f7-2236573845ee> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:a785178f-07c5-4077-8e0e-0e6ea493d882> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:90ed99d0-c834-4e59-bb1a-981fad89a2df> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
