# Read request from Alice returns into yes (Alice Request Write X).
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

<urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:write ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to WRITE resource X." ;
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

<urn:uuid:c0a9957f-0c38-40d9-8a9c-fad5ca29cb31> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> ;
  report:policyRequest <urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d> ;
  report:ruleReport <urn:uuid:50f11768-3dd7-4cbb-a129-3c4310fff848> .

<urn:uuid:50f11768-3dd7-4cbb-a129-3c4310fff848> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> ;
  report:ruleRequest <urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d> ;
  report:premiseReport <urn:uuid:7382ada1-d7ef-4c3e-8f3d-f7bbb66d36b7>, <urn:uuid:7e994fa3-df3e-49ba-96f6-746e398df3a5> ;
  report:activationState report:Inactive .

<urn:uuid:7382ada1-d7ef-4c3e-8f3d-f7bbb66d36b7> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:7e994fa3-df3e-49ba-96f6-746e398df3a5> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
