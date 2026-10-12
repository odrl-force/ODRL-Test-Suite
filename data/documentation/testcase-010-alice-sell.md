# Any request to use results into yes (Alice Request Sell).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Everybody can do use.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> a odrl:Set ;
  odrl:uid <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> ;
  dct:description "Everybody can do use." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> .

<urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> a odrl:Permission ;
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

<urn:uuid:7b715f6e-23f1-402e-8dd6-89df8cff0cf7> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> ;
  report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:ruleReport <urn:uuid:373dfcf5-c27b-4ab7-9a66-a3ba931f1493> .

<urn:uuid:373dfcf5-c27b-4ab7-9a66-a3ba931f1493> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> ;
  report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:premiseReport <urn:uuid:7a230308-3b1d-45e8-898c-cf401a9380e9> ;
  report:activationState report:Inactive .

<urn:uuid:7a230308-3b1d-45e8-898c-cf401a9380e9> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
