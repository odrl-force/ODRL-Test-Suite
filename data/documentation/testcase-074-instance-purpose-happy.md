# Read request from ALICE for resource X for a purpose for the instance of dpv:AccountManagement (happy).
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
@prefix dpv: <https://w3id.org/dpv#> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:480915ba-6784-4596-be02-34b35899d000> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X for the purpose of dpv:AccountManagement." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ], [
    a sotw:RequestParameter ;
    sotw:value ex:purpose ;
    sotw:describesFeature sotw:Purpose
  ] .

ex:purpose a dpv:AccountManagement .
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
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:84a7fefa-0223-4b66-ac5b-4785e29dc624> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:6a1153c1-aca7-496a-aba1-0b2561d4555e> ;
  report:policyRequest <urn:uuid:480915ba-6784-4596-be02-34b35899d000> ;
  report:ruleReport <urn:uuid:8a6aaba5-731a-42c5-9019-8d21eaa469f1> .

<urn:uuid:8a6aaba5-731a-42c5-9019-8d21eaa469f1> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f0ce2b23-d35c-483c-909a-17c986db5e68> ;
  report:ruleRequest <urn:uuid:480915ba-6784-4596-be02-34b35899d000> ;
  report:premiseReport <urn:uuid:30a180d1-4e4f-4fe5-b1d2-79182cb154b8>, <urn:uuid:92c4b4ac-140c-4ccf-b725-2d815954474a>, <urn:uuid:efcda907-afd7-4cd4-b8d2-5150d051ad57>, <urn:uuid:a5415c1a-f91a-4561-9887-26dd65e157c2> ;
  report:activationState report:Active .

<urn:uuid:30a180d1-4e4f-4fe5-b1d2-79182cb154b8> a report:ConstraintReport ;
  report:constraint <urn:uuid:2899cef7-fb9e-49b1-b4fb-cc28a8fae75f> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand ex:purpose ;
  report:constraintOperator odrl:isA ;
  report:constraintRightOperand dpv:AccountManagement .

<urn:uuid:92c4b4ac-140c-4ccf-b725-2d815954474a> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:efcda907-afd7-4cd4-b8d2-5150d051ad57> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:a5415c1a-f91a-4561-9887-26dd65e157c2> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
