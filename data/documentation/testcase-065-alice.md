# Read request from people in party collection to resource X in 2024 returns into yes (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection can only read X, during 2024, given that eventually the duty is fulfilled.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c> a odrl:Set ;
  odrl:uid <urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c> ;
  dct:description "A party collection can only read X, during 2024, given that eventually the duty is fulfilled." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:38578227-70b7-4649-980d-661a57e91b72> .

<urn:uuid:38578227-70b7-4649-980d-661a57e91b72> a odrl:Permission ;
  odrl:assignee ex:partyCollection ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:duty <urn:uuid:4129123f-d8a8-481e-87fc-aba6dda5b6a5> ;
  odrl:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> .

ex:partyCollection a odrl:PartyCollection ;
  odrl:source ex:partyIdentifier .

<urn:uuid:4129123f-d8a8-481e-87fc-aba6dda5b6a5> a odrl:Duty ;
  odrl:action odrl:compensate .

<urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> a odrl:LogicalConstraint ;
  odrl:and <urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64>, <urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> .

<urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64> a odrl:Constraint ;
  odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:lt ;
  odrl:rightOperand "2024-12-31T23:59:59.000Z"^^xsd:dateTime .

<urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> a odrl:Constraint ;
  odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:gt ;
  odrl:rightOperand "2024-01-01T00:00:00.000Z"^^xsd:dateTime .
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
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:da98666e-e80d-429a-a839-1575f85a9b3c> a sotw:SotW ;
  sotw:context ex:partyCollection, <urn:uuid:17ced35e-39ff-427d-a9c8-cfa4c5f44d1b> .

<urn:uuid:17ced35e-39ff-427d-a9c8-cfa4c5f44d1b> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:ruleReport <urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec> .

<urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec> a report:DutyReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> ;
  report:performanceState report:Performed ;
  report:deonticState report:Fulfilled .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:f55af806-0b7a-49cd-8fe4-a29a3d5384fc> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:9aeea94d-8ddb-4fcd-8fe5-bed933460170> .

<urn:uuid:9aeea94d-8ddb-4fcd-8fe5-bed933460170> a report:PermissionReport ;
  report:premiseReport <urn:uuid:2c5709ac-fdc4-48d1-a89a-ec215f95fb71>, <urn:uuid:0c017c57-edeb-44b2-9347-2825050ecc14>, <urn:uuid:13a0c82c-1774-4397-be79-e7468dbd9caf>, <urn:uuid:c2b3c9bb-0bc1-4d31-8815-50134056fab0> ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:38578227-70b7-4649-980d-661a57e91b72> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:conditionReport <urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec> ;
  report:activationState report:Active .

<urn:uuid:2c5709ac-fdc4-48d1-a89a-ec215f95fb71> a report:ConstraintReport ;
  report:premiseReport <urn:uuid:a6440c0d-e5a3-4ff4-a1a1-e8b65334d5fe>, <urn:uuid:b31d5908-92fa-4e2f-8d6f-5b93674de929> ;
  report:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLogicalOperand odrl:and .
```
