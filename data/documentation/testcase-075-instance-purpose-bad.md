# Read request from ALICE for resource X for a purpose for the instance of dpv:AccountManagement (bad).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X for an instance of purpose of dpv:AccountManagement.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:6a1153c1-aca7-496a-aba1-0b2561d4555e> a odrl:Set ;
  odrl:uid <urn:uuid:6a1153c1-aca7-496a-aba1-0b2561d4555e> ;
  dct:description "ALICE may READ resource X for an instance of purpose of dpv:AccountManagement." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f0ce2b23-d35c-483c-909a-17c986db5e68> .

<urn:uuid:f0ce2b23-d35c-483c-909a-17c986db5e68> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:2899cef7-fb9e-49b1-b4fb-cc28a8fae75f> .

<urn:uuid:2899cef7-fb9e-49b1-b4fb-cc28a8fae75f> a odrl:Constraint ;
  odrl:leftOperand odrl:purpose ;
  odrl:operator odrl:isA ;
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

<urn:uuid:a169722a-2927-4e76-bf35-e550db765218> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:6a1153c1-aca7-496a-aba1-0b2561d4555e> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:fb4b8bc1-105c-4a1c-8548-a26d522cdf42> .

<urn:uuid:fb4b8bc1-105c-4a1c-8548-a26d522cdf42> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f0ce2b23-d35c-483c-909a-17c986db5e68> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:efdac20e-6fc3-48d9-94c2-1fbb958832f4>, <urn:uuid:ffb12ff4-748c-417b-af76-e8eb9a9d6893>, <urn:uuid:e136df31-12b9-40f3-b478-951d11661607>, <urn:uuid:93281e9f-714e-4f0d-ae9c-8c37c5e77354> ;
  report:activationState report:Inactive .

<urn:uuid:efdac20e-6fc3-48d9-94c2-1fbb958832f4> a report:ConstraintReport ;
  report:constraint <urn:uuid:2899cef7-fb9e-49b1-b4fb-cc28a8fae75f> ;
  report:constraintLeftOperand "" ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:ffb12ff4-748c-417b-af76-e8eb9a9d6893> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e136df31-12b9-40f3-b478-951d11661607> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:93281e9f-714e-4f0d-ae9c-8c37c5e77354> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
