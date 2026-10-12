# Read request from ALICE to READ resource X at 12 february 2024 works when the temporal constraint uses xsd:date.
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X at 2024-02-12.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:7e7a4e8a-e389-41ac-94fc-78e266cec31b> a odrl:Set ;
  odrl:uid <urn:uuid:7e7a4e8a-e389-41ac-94fc-78e266cec31b> ;
  dct:description "ALICE may READ resource X at 2024-02-12." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:a6a16de7-7975-45f9-a15d-5e1f474de7b7> .

<urn:uuid:a6a16de7-7975-45f9-a15d-5e1f474de7b7> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:5d83f959-9103-4413-ac98-a5167d1118c8> .

<urn:uuid:5d83f959-9103-4413-ac98-a5167d1118c8> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:eq ;
  odrl:rightOperand "2024-02-12"^^xsd:date .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:8a14c96a-8f45-45ef-a349-7aebf5eb4408> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T00:00:00Z"^^xsd:dateTime ;
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

<urn:uuid:b3d04120-04b4-4176-b0d7-c813fa654ab8> a report:PolicyReport ;
  dct:created "2024-02-12T00:00:00Z"^^xsd:dateTime ;
  report:policy <urn:uuid:7e7a4e8a-e389-41ac-94fc-78e266cec31b> ;
  report:policyRequest <urn:uuid:8a14c96a-8f45-45ef-a349-7aebf5eb4408> ;
  report:ruleReport <urn:uuid:98c43141-6ded-4b6c-ad7a-d46e94126761> .

<urn:uuid:98c43141-6ded-4b6c-ad7a-d46e94126761> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a6a16de7-7975-45f9-a15d-5e1f474de7b7> ;
  report:ruleRequest <urn:uuid:8a14c96a-8f45-45ef-a349-7aebf5eb4408> ;
  report:premiseReport <urn:uuid:2d5225c0-0151-49f3-a5ab-72b91f8622f6>, <urn:uuid:e5e8650b-d72a-4783-bf88-5adb75272cdd>, <urn:uuid:0821bb62-8ce1-4cde-9834-093274bd79b3>, <urn:uuid:1678415c-8576-4627-a787-5f273e5ac01a> ;
  report:activationState report:Active .

<urn:uuid:2d5225c0-0151-49f3-a5ab-72b91f8622f6> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e5e8650b-d72a-4783-bf88-5adb75272cdd> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:0821bb62-8ce1-4cde-9834-093274bd79b3> a report:ActionReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:1678415c-8576-4627-a787-5f273e5ac01a> a report:ConstraintReport ;
  report:satisfactionState report:Satisfied ;
  report:constraint <urn:uuid:5d83f959-9103-4413-ac98-a5167d1118c8> ;
  report:constraintLeftOperand "2024-02-12T00:00:00Z"^^xsd:dateTime ;
  report:constraintOperator odrl:eq ;
  report:constraintRightOperand "2024-02-12"^^xsd:date .
```
