# Any request to use results into no (Bob Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Nobody can do use.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> a odrl:Set ;
  odrl:uid <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> ;
  dct:description "Nobody can do use." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:prohibition <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> .

<urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> a odrl:Prohibition ;
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

<urn:uuid:1c18a891-f525-43ed-b9a1-45552b87dede> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> ;
  report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:ruleReport <urn:uuid:cc5eab66-cac7-4ecd-abd4-7f0dba5eda20> .

<urn:uuid:cc5eab66-cac7-4ecd-abd4-7f0dba5eda20> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> ;
  report:ruleRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:premiseReport <urn:uuid:b9ce17f7-b286-4d02-92b3-ea7c77455f21> ;
  report:activationState report:Active .

<urn:uuid:b9ce17f7-b286-4d02-92b3-ea7c77455f21> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
