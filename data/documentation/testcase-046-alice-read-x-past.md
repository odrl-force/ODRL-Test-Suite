# Read request from Alice to resource X returns into yes (temporal gteq - past) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is later than or equal to 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> a odrl:Set ;
  odrl:uid <urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> ;
  dct:description "ALICE may READ resource X when it is later than or equal to 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> .

<urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:gteq ;
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

<urn:uuid:f1bf5215-3fd9-48e7-826d-ab170b9df1d6> a report:PolicyReport ;
  dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> ;
  report:policyRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:ruleReport <urn:uuid:a90f8d6d-9e53-4e5c-b9a8-105dd7b10f0d> .

<urn:uuid:a90f8d6d-9e53-4e5c-b9a8-105dd7b10f0d> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> ;
  report:ruleRequest <urn:uuid:0da1b571-254b-4fa5-8e46-2e881dca5c5c> ;
  report:premiseReport <urn:uuid:38788fb5-64ba-47c6-a1fc-d17336c411d1>, <urn:uuid:95243527-9c85-4df7-9e3c-80da4a1a277c>, <urn:uuid:e3dcaf92-530d-418d-b3b3-e758f64a746d>, <urn:uuid:464196b7-6e25-453c-a452-dcac89fe9f37> ;
  report:activationState report:Inactive .

<urn:uuid:38788fb5-64ba-47c6-a1fc-d17336c411d1> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:95243527-9c85-4df7-9e3c-80da4a1a277c> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e3dcaf92-530d-418d-b3b3-e758f64a746d> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:464196b7-6e25-453c-a452-dcac89fe9f37> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
