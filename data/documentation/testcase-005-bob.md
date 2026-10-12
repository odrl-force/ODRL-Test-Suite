# Any request results into no (Bob Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Nobody can do anything.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05> a odrl:Set ;
  odrl:uid <urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05> ;
  dct:description "Nobody can do anything." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:prohibition <urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee> .

<urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee> a odrl:Prohibition .
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

<urn:uuid:6a0d84bd-0144-4367-9d2f-e790dba3ef9c> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05> ;
  report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:ruleReport <urn:uuid:6bfa4b0a-5b04-466e-9807-165c159d4d91> .

<urn:uuid:6bfa4b0a-5b04-466e-9807-165c159d4d91> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee> ;
  report:ruleRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:activationState report:Active .
```
