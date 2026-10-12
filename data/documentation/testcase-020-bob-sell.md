# Any request from Bob to use returns into no (Bob Request Sell).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Bob explicitely use nothing.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40> a odrl:Set ;
  odrl:uid <urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40> ;
  dct:description "Bob explicitely use nothing." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:prohibition <urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0> .

<urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0> a odrl:Prohibition ;
  odrl:assignee ex:bob ;
  odrl:action odrl:use .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:sell ;
  sotw:evaluatedParty ex:bob ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party BOB requests to SELL resource X." ;
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

<urn:uuid:1e4beeee-a180-4e16-8a00-0cd70150292e> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40> ;
  report:policyRequest <urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9> ;
  report:ruleReport <urn:uuid:874a30f9-ba8e-4d3d-bf9e-df1c1c151837> .

<urn:uuid:874a30f9-ba8e-4d3d-bf9e-df1c1c151837> a report:ProhibitionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0> ;
  report:ruleRequest <urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9> ;
  report:premiseReport <urn:uuid:7157a374-e1d8-4de5-a434-96f1e2600bc6>, <urn:uuid:c244fb96-d80f-4b90-bbfc-7b9caec6062c> ;
  report:activationState report:Inactive .

<urn:uuid:7157a374-e1d8-4de5-a434-96f1e2600bc6> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:c244fb96-d80f-4b90-bbfc-7b9caec6062c> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
