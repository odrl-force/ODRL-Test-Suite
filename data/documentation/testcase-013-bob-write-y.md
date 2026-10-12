# Any request to use results into no (Bob Request Write).
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

<urn:uuid:b00eed8a-d5fa-476a-9558-c839e9ebf262> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> ;
  report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:ruleReport <urn:uuid:d0216f8e-2281-48db-a846-ff5d6a485664> .

<urn:uuid:d0216f8e-2281-48db-a846-ff5d6a485664> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> ;
  report:ruleRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:premiseReport <urn:uuid:37c4b16c-6f15-4594-bc57-13a5c65877f7> ;
  report:activationState report:Active .

<urn:uuid:37c4b16c-6f15-4594-bc57-13a5c65877f7> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
