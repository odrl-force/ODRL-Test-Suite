# Read request from people in party collection to resource X in 2024 returns into yes (Bob Request Write Y - past).
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

<urn:uuid:f544eea6-98e7-473f-b1bf-1127f34af6c8> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:write ;
  sotw:evaluatedParty ex:bob ;
  sotw:evaluatedTarget ex:y ;
  dct:description "Requesting Party BOB requests to WRITE resource Y." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2023-02-12T11:20:10.999Z"^^xsd:dateTime ;
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

<urn:uuid:501d4167-8c83-458b-91d9-701a14361323> a report:PolicyReport ;
  dct:created "2023-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c> ;
  report:policyRequest <urn:uuid:f544eea6-98e7-473f-b1bf-1127f34af6c8> ;
  report:ruleReport <urn:uuid:2043e0e2-ed8a-447b-9474-c402a84753e7> .

<urn:uuid:2043e0e2-ed8a-447b-9474-c402a84753e7> a report:PermissionReport ;
  report:premiseReport <urn:uuid:011b652c-7c23-43d4-9836-ce0783465eb9>, <urn:uuid:4d05f868-a4b0-479b-96a7-1f83a6f5c915>, <urn:uuid:a8eddcd4-66be-46b7-b538-5d3371939579>, <urn:uuid:b98f5863-d809-4779-9fd4-7d31bebc7ea7> ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:38578227-70b7-4649-980d-661a57e91b72> ;
  report:ruleRequest <urn:uuid:f544eea6-98e7-473f-b1bf-1127f34af6c8> ;
  report:conditionReport <urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec> ;
  report:activationState report:Inactive .

<urn:uuid:011b652c-7c23-43d4-9836-ce0783465eb9> a report:ConstraintReport ;
  report:premiseReport <urn:uuid:fb5fa796-31f8-4d8a-ad19-b7798ef25944>, <urn:uuid:78583fd4-ed8b-4af0-b986-d1e5ae003026> ;
  report:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> ;
  report:satisfactionState report:Unsatisfied ;
  report:constraintLogicalOperand odrl:and .

<urn:uuid:4d05f868-a4b0-479b-96a7-1f83a6f5c915> a report:TargetReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:a8eddcd4-66be-46b7-b538-5d3371939579> a report:PartyReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:b98f5863-d809-4779-9fd4-7d31bebc7ea7> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:fb5fa796-31f8-4d8a-ad19-b7798ef25944> a report:ConstraintReport ;
  report:constraint <urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand "2023-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:lt ;
  report:constraintRightOperand "2024-12-31T23:59:59.000Z"^^xsd:dateTime .

<urn:uuid:78583fd4-ed8b-4af0-b986-d1e5ae003026> a report:ConstraintReport ;
  report:constraint <urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> ;
  report:satisfactionState report:Unsatisfied ;
  report:constraintLeftOperand "2023-02-12T11:20:10.999Z"^^xsd:dateTime .
```
