# Read request from Alice to resource X returns into yes (Alice Request Read Y).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Alice can only read x.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1> a odrl:Set ;
  odrl:uid <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1> ;
  dct:description "Alice can only read x." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e> .

<urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:y ;
  dct:description "Requesting Party Alice requests to READ resource Y." ;
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

<urn:uuid:2e5b4bf4-ff6e-4fc3-9aa1-b9452139171b> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1> ;
  report:policyRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:ruleReport <urn:uuid:d31e8708-d175-4358-aa71-97f28c549f58> .

<urn:uuid:d31e8708-d175-4358-aa71-97f28c549f58> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e> ;
  report:ruleRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:premiseReport <urn:uuid:14c953af-960d-4210-88c5-080e97246854>, <urn:uuid:2469a759-8f5a-40b2-89f4-f41826a8ae3e>, <urn:uuid:e3bf126f-404b-45a0-ba15-226de603aa87> ;
  report:activationState report:Inactive .

<urn:uuid:14c953af-960d-4210-88c5-080e97246854> a report:TargetReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:2469a759-8f5a-40b2-89f4-f41826a8ae3e> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:e3bf126f-404b-45a0-ba15-226de603aa87> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
