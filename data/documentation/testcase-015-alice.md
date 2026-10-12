# Any request from Alice to use returns into yes (Alice Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Only Alice can use everything.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> a odrl:Set ;
  odrl:uid <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> ;
  dct:description "Only Alice can use everything." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> .

<urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:use .
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

<urn:uuid:9b5bb511-9729-48f0-8dd1-09f4cb395101> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:95df7483-d3af-41df-8c02-80a1fff848ee> .

<urn:uuid:95df7483-d3af-41df-8c02-80a1fff848ee> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:ef9132bd-a400-4f27-acff-f00b19e37c47>, <urn:uuid:3ca13acb-ebe6-4020-97f6-9daf0b4295c5> ;
  report:activationState report:Active .

<urn:uuid:ef9132bd-a400-4f27-acff-f00b19e37c47> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:3ca13acb-ebe6-4020-97f6-9daf0b4295c5> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
