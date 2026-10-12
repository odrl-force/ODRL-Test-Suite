# Read request from ALICE to READ resource X for the purpose of Account Management.
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X for the purpose of dpv:AccountManagement.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:18a5175e-33e4-4f66-895d-97bcbd4e427b> a odrl:Set ;
  odrl:uid <urn:uuid:18a5175e-33e4-4f66-895d-97bcbd4e427b> ;
  dct:description "ALICE may READ resource X for the purpose of dpv:AccountManagement." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:1c63f3af-7c09-4748-9002-1868f6816b16> .

<urn:uuid:1c63f3af-7c09-4748-9002-1868f6816b16> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:ccce2874-20f2-4281-a56c-ec2614282bda> .

<urn:uuid:ccce2874-20f2-4281-a56c-ec2614282bda> a odrl:Constraint ;
  odrl:leftOperand odrl:purpose ;
  odrl:operator odrl:eq ;
  odrl:rightOperand dpv:AccountManagement .
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

<urn:uuid:a8f77e09-117f-4044-a8d4-768ecc5aeb43> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:18a5175e-33e4-4f66-895d-97bcbd4e427b> ;
  report:policyRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:ruleReport <urn:uuid:d34fc225-f547-4239-821e-d639f73d4cc9> .

<urn:uuid:d34fc225-f547-4239-821e-d639f73d4cc9> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:1c63f3af-7c09-4748-9002-1868f6816b16> ;
  report:ruleRequest <urn:uuid:ce9fc20e-7c79-474e-8afe-7605accccee8> ;
  report:premiseReport <urn:uuid:ceee3728-ee68-4971-bf20-64892e8eee69>, <urn:uuid:d1e9b76b-a785-49fa-90d1-68bc457d346d>, <urn:uuid:0abaec0b-c686-4b89-b37f-99fb9beef569>, <urn:uuid:f6d64365-7252-48f9-abde-188cf1746401> ;
  report:activationState report:Active .

<urn:uuid:ceee3728-ee68-4971-bf20-64892e8eee69> a report:ConstraintReport ;
  report:constraint <urn:uuid:ccce2874-20f2-4281-a56c-ec2614282bda> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand dpv:AccountManagement ;
  report:constraintOperator odrl:eq ;
  report:constraintRightOperand dpv:AccountManagement .

<urn:uuid:d1e9b76b-a785-49fa-90d1-68bc457d346d> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:0abaec0b-c686-4b89-b37f-99fb9beef569> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:f6d64365-7252-48f9-abde-188cf1746401> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
