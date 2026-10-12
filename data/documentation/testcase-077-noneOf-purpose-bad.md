# Read request from ALICE for resource X (noneOf purpose - bad)
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X if the purpose is not dpv:AccountManagement or dpv:DataQualityManagement.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:5ee1a7dd-ccba-49a4-92e8-6cc375509efd> a odrl:Set ;
  odrl:uid <urn:uuid:5ee1a7dd-ccba-49a4-92e8-6cc375509efd> ;
  dct:description "ALICE may READ resource X if the purpose is not dpv:AccountManagement or dpv:DataQualityManagement." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:8b64ba6c-015b-41cf-9f06-2f942edcf1db> .

<urn:uuid:8b64ba6c-015b-41cf-9f06-2f942edcf1db> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:52d3b046-52b6-419f-95b4-93bb557cdf97> .

<urn:uuid:52d3b046-52b6-419f-95b4-93bb557cdf97> a odrl:Constraint ;
  odrl:leftOperand odrl:purpose ;
  odrl:operator odrl:isNoneOf ;
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
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:cb100fb1-cadf-4f04-9dfc-93625a1906d9> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5ee1a7dd-ccba-49a4-92e8-6cc375509efd> ;
  report:policyRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:ruleReport <urn:uuid:7bd00627-3a00-4d46-972d-f940cfbedaf1> .

<urn:uuid:7bd00627-3a00-4d46-972d-f940cfbedaf1> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8b64ba6c-015b-41cf-9f06-2f942edcf1db> ;
  report:ruleRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:premiseReport <urn:uuid:319655f5-407c-4b59-8b5b-9b60c2bae847>, <urn:uuid:c2aafaac-474d-4f82-b344-c8f2ffcac8f1>, <urn:uuid:4b90d56d-ee2b-4d71-a239-47ac3ad83855>, <urn:uuid:1be11a13-2245-449e-8a49-c052a12a5981> ;
  report:activationState report:Inactive .

<urn:uuid:319655f5-407c-4b59-8b5b-9b60c2bae847> a report:ConstraintReport ;
  report:constraint <urn:uuid:52d3b046-52b6-419f-95b4-93bb557cdf97> ;
  report:constraintLeftOperand dpv:AccountManagement ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:c2aafaac-474d-4f82-b344-c8f2ffcac8f1> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:4b90d56d-ee2b-4d71-a239-47ac3ad83855> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:1be11a13-2245-449e-8a49-c052a12a5981> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
