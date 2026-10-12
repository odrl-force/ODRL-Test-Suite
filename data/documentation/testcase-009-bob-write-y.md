# Any request to use results into yes (Bob Request Write).
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

<urn:uuid:e582b7bc-5acf-43a9-aec4-a48e3a1f3c6a> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> ;
  report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:ruleReport <urn:uuid:c46d16b6-7c43-419a-88f5-17908467095e> .

<urn:uuid:c46d16b6-7c43-419a-88f5-17908467095e> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> ;
  report:ruleRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:premiseReport <urn:uuid:395706e8-bf06-431a-a9ad-acb70314382b> ;
  report:activationState report:Active .

<urn:uuid:395706e8-bf06-431a-a9ad-acb70314382b> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
