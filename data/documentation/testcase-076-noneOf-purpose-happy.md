# Read request from ALICE for resource X (noneOf purpose - happy)
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
@prefix dpv: <https://w3id.org/dpv#> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:da9d5323-16bb-4e8c-b152-b8fe30e47142> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5ee1a7dd-ccba-49a4-92e8-6cc375509efd> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:2c3bd873-1515-44e5-bb02-ba3265f66b87> .

<urn:uuid:2c3bd873-1515-44e5-bb02-ba3265f66b87> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8b64ba6c-015b-41cf-9f06-2f942edcf1db> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:518a39ec-8057-4a43-8d20-116ae6ceb2ba>, <urn:uuid:c814b019-92ea-4ad5-b9cd-63a7586ac538>, <urn:uuid:e02f3572-928d-4490-a144-64eb72637e17>, <urn:uuid:5805df21-6b3b-45f5-b901-b29e00c70ff2> ;
  report:activationState report:Active .

<urn:uuid:518a39ec-8057-4a43-8d20-116ae6ceb2ba> a report:ConstraintReport ;
  report:constraint <urn:uuid:52d3b046-52b6-419f-95b4-93bb557cdf97> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand "" ;
  report:constraintOperator odrl:isNoneOf ;
  report:constraintRightOperand dpv:AccountManagement, dpv:DataQualityManagement .

<urn:uuid:c814b019-92ea-4ad5-b9cd-63a7586ac538> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e02f3572-928d-4490-a144-64eb72637e17> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:5805df21-6b3b-45f5-b901-b29e00c70ff2> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
