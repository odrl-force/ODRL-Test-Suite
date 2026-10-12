# Any request to use results into no (Alice Request Sell).
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

<urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:sell ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to SELL resource X." ;
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

<urn:uuid:d2ddd6a9-1c15-49fa-8b9d-62201f84a111> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> ;
  report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:ruleReport <urn:uuid:66e93960-141b-405b-9610-9937e358708a> .

<urn:uuid:66e93960-141b-405b-9610-9937e358708a> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> ;
  report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:premiseReport <urn:uuid:47b2ba00-920b-4b03-a5c1-412c2c42d0dd> ;
  report:activationState report:Inactive .

<urn:uuid:47b2ba00-920b-4b03-a5c1-412c2c42d0dd> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
