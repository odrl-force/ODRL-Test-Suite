# Read request from ALICE for resource X for the purpose of Account Management (happy - multiple purposes).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X for the purpose of dpv:AccountManagement or dpv:DataQualityManagement.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:b791d8a7-8e49-4428-be77-d4bb5aeffc20> a odrl:Set ;
  odrl:uid <urn:uuid:b791d8a7-8e49-4428-be77-d4bb5aeffc20> ;
  dct:description "ALICE may READ resource X for the purpose of dpv:AccountManagement or dpv:DataQualityManagement." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:79b34c79-b550-4ccf-9331-ef83c27f390f> .

<urn:uuid:79b34c79-b550-4ccf-9331-ef83c27f390f> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:7bffb023-24a9-4228-b767-e55b8341ef98> .

<urn:uuid:7bffb023-24a9-4228-b767-e55b8341ef98> a odrl:Constraint ;
  odrl:leftOperand odrl:purpose ;
  odrl:operator odrl:isAnyOf ;
  odrl:rightOperand dpv:AccountManagement, dpv:DataQualityManagement .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X for the purpose of Account Management." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ], [
    a sotw:RequestParameter ;
    sotw:value dpv:AccountManagement ;
    sotw:describesFeature sotw:Purpose
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
@prefix dpv: <https://w3id.org/dpv#> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:66ff4b1b-448f-45d0-86da-1ec0bf552de3> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:b791d8a7-8e49-4428-be77-d4bb5aeffc20> ;
  report:policyRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:ruleReport <urn:uuid:fc6337e7-4dd7-4cbc-8e36-8a194025a0b2> .

<urn:uuid:fc6337e7-4dd7-4cbc-8e36-8a194025a0b2> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:79b34c79-b550-4ccf-9331-ef83c27f390f> ;
  report:ruleRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:premiseReport <urn:uuid:588bca0b-27f8-4270-ac09-f4dbece8c73e>, <urn:uuid:f798ad18-fc62-4fba-8e9f-6defea3f9bc5>, <urn:uuid:c973f006-390f-4f9b-a07f-83a7a27018ee>, <urn:uuid:a06382ae-d121-4535-b922-75e45fee418a> ;
  report:activationState report:Active .

<urn:uuid:588bca0b-27f8-4270-ac09-f4dbece8c73e> a report:ConstraintReport ;
  report:constraint <urn:uuid:7bffb023-24a9-4228-b767-e55b8341ef98> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand dpv:AccountManagement ;
  report:constraintOperator odrl:isAnyOf ;
  report:constraintRightOperand dpv:AccountManagement, dpv:DataQualityManagement .

<urn:uuid:f798ad18-fc62-4fba-8e9f-6defea3f9bc5> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:c973f006-390f-4f9b-a07f-83a7a27018ee> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:a06382ae-d121-4535-b922-75e45fee418a> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
