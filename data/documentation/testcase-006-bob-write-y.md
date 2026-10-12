# Any request results into no (Bob Request Write).
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

<urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:write ;
  sotw:evaluatedParty ex:bob ;
  sotw:evaluatedTarget ex:y ;
  dct:description "Requesting Party BOB requests to WRITE resource Y." ;
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

<urn:uuid:a8d22539-246e-4818-b9e3-b0bb07f41bd0> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05> ;
  report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:ruleReport <urn:uuid:9552f918-2d2b-4b51-85ea-c4003f689ca0> .

<urn:uuid:9552f918-2d2b-4b51-85ea-c4003f689ca0> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee> ;
  report:ruleRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:activationState report:Active .
```
