# Any request from Alice to use returns into yes (Bob Request).
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

<urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:bob ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party BOB requests to READ resource X." ;
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

<urn:uuid:273bae0e-5716-4fd5-82b9-7569cb93b755> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> ;
  report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:ruleReport <urn:uuid:a9bc031d-c846-442e-bb72-25951c7939c0> .

<urn:uuid:a9bc031d-c846-442e-bb72-25951c7939c0> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> ;
  report:ruleRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:premiseReport <urn:uuid:2e67d261-bac2-4bb6-adae-24aa006f255e>, <urn:uuid:d812ee1d-30e0-49a7-87d4-919e557656c4> ;
  report:activationState report:Inactive .

<urn:uuid:2e67d261-bac2-4bb6-adae-24aa006f255e> a report:PartyReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:d812ee1d-30e0-49a7-87d4-919e557656c4> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
