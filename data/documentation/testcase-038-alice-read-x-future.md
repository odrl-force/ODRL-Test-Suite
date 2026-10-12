# Read request from Alice to resource X returns into yes (temporal lt - future) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is before 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d> a odrl:Set ;
  odrl:uid <urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d> ;
  dct:description "ALICE may READ resource X when it is before 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a> .

<urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:lt ;
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

<urn:uuid:14b3a2ee-66ef-4f98-b1c2-9df6017cab81> a report:PolicyReport ;
  dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d> ;
  report:policyRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:ruleReport <urn:uuid:969b1fc2-efa4-4288-bf13-f3d2339e840f> .

<urn:uuid:969b1fc2-efa4-4288-bf13-f3d2339e840f> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a> ;
  report:ruleRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:premiseReport <urn:uuid:d3dfa010-4f39-4aa5-8ed6-78bac90e28be>, <urn:uuid:ac19584b-d128-48f2-983b-7de3c89507e6>, <urn:uuid:1a8cc9fd-34d9-4c15-9c45-5921a8eb8746>, <urn:uuid:704c5961-40aa-469f-bdd3-d82b11e72ddd> ;
  report:activationState report:Inactive .

<urn:uuid:d3dfa010-4f39-4aa5-8ed6-78bac90e28be> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:ac19584b-d128-48f2-983b-7de3c89507e6> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:1a8cc9fd-34d9-4c15-9c45-5921a8eb8746> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:704c5961-40aa-469f-bdd3-d82b11e72ddd> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
