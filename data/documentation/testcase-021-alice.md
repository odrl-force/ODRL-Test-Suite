# Read request from Alice returns into yes (Alice Request).
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

<urn:uuid:98c7e0b4-c589-4916-a4c3-5162423d4942> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:80906b36-deb4-4b02-bff6-d27b09bff240> .

<urn:uuid:80906b36-deb4-4b02-bff6-d27b09bff240> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:6e7b3c94-ed81-4d79-ae51-912df497c2f8>, <urn:uuid:f626e3cd-53d4-4408-938c-3a4ce69dc394> ;
  report:activationState report:Active .

<urn:uuid:6e7b3c94-ed81-4d79-ae51-912df497c2f8> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:f626e3cd-53d4-4408-938c-3a4ce69dc394> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
