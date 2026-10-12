# Read request from Alice to resource X returns into yes (Alice Request Read X).
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

<urn:uuid:13727869-5f02-4a2b-bc34-d081833b8642> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:d9f2106d-93fd-4084-a67e-8cf4bb530c81> .

<urn:uuid:d9f2106d-93fd-4084-a67e-8cf4bb530c81> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:8be1de65-b824-40e5-8688-a967e6125867>, <urn:uuid:9b664503-2217-41dc-9339-318c3fd8c5d4>, <urn:uuid:dda08273-b3ee-4431-9b84-db236222a9ac> ;
  report:activationState report:Active .

<urn:uuid:8be1de65-b824-40e5-8688-a967e6125867> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:9b664503-2217-41dc-9339-318c3fd8c5d4> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:dda08273-b3ee-4431-9b84-db236222a9ac> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
