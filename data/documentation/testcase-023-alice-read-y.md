# Read request from Alice returns into yes (Alice Request Read Y).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Alice can only read everything.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> a odrl:Set ;
  odrl:uid <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> ;
  dct:description "Alice can only read everything." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> .

<urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read .
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

<urn:uuid:7ce1df83-59cb-4b0b-b80f-c029f603e43d> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> ;
  report:policyRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:ruleReport <urn:uuid:94f48e3e-d77e-4ef8-9fab-f8bcd37e3488> .

<urn:uuid:94f48e3e-d77e-4ef8-9fab-f8bcd37e3488> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> ;
  report:ruleRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> ;
  report:premiseReport <urn:uuid:fcf260a5-1923-4b15-a16f-3bafb915647b>, <urn:uuid:f1f63cf1-9615-414c-a61d-42563c6dbc54> ;
  report:activationState report:Active .

<urn:uuid:fcf260a5-1923-4b15-a16f-3bafb915647b> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:f1f63cf1-9615-414c-a61d-42563c6dbc54> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
