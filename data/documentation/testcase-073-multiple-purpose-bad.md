# Read request from ALICE for resource X for the purpose of Account Management (bad - multiple purposes).
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

<urn:uuid:ce17a05c-5788-47b7-88c9-9eee46e46966> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:b791d8a7-8e49-4428-be77-d4bb5aeffc20> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:325abb97-662e-4876-8fe3-c1aa5cc34e08> .

<urn:uuid:325abb97-662e-4876-8fe3-c1aa5cc34e08> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:79b34c79-b550-4ccf-9331-ef83c27f390f> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:9ff0f434-b9d8-49ee-830f-f14bcdb42e84>, <urn:uuid:eef8edbd-bbf7-49af-9fdb-bd4c7fce82e3>, <urn:uuid:56b091db-336b-4a52-95a8-a9b9360afd18>, <urn:uuid:615c55d2-4970-4f16-940f-af858549eb3c> ;
  report:activationState report:Inactive .

<urn:uuid:9ff0f434-b9d8-49ee-830f-f14bcdb42e84> a report:ConstraintReport ;
  report:constraint <urn:uuid:7bffb023-24a9-4228-b767-e55b8341ef98> ;
  report:constraintLeftOperand "" ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:eef8edbd-bbf7-49af-9fdb-bd4c7fce82e3> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:56b091db-336b-4a52-95a8-a9b9360afd18> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:615c55d2-4970-4f16-940f-af858549eb3c> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
