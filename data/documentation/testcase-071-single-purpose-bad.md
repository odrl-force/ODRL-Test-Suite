# Read request from ALICE for resource X for the purpose of Account Management.
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

<urn:uuid:b903bae1-e871-4419-a2f7-87ff15ee7e65> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:18a5175e-33e4-4f66-895d-97bcbd4e427b> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:8e9b7615-f968-4d6f-a043-017485173f38> .

<urn:uuid:8e9b7615-f968-4d6f-a043-017485173f38> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:1c63f3af-7c09-4748-9002-1868f6816b16> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:1194da81-e215-4a29-beba-8410d544aa3a>, <urn:uuid:7bde4952-0106-4c26-8d17-5d43056dae7e>, <urn:uuid:5108b1fe-2378-4430-8925-027f9f88d3be>, <urn:uuid:720e0cc4-a44c-4bd4-bc13-75e9a3312dc6> ;
  report:activationState report:Inactive .

<urn:uuid:1194da81-e215-4a29-beba-8410d544aa3a> a report:ConstraintReport ;
  report:constraint <urn:uuid:ccce2874-20f2-4281-a56c-ec2614282bda> ;
  report:satisfactionState report:Unsatisfied ;
  report:constraintLeftOperand "" .

<urn:uuid:7bde4952-0106-4c26-8d17-5d43056dae7e> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:5108b1fe-2378-4430-8925-027f9f88d3be> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:720e0cc4-a44c-4bd4-bc13-75e9a3312dc6> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
