# Any request to use results into yes (Bob Request).
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

<urn:uuid:db6c0265-0997-44a6-87fb-f241e334f1c4> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> ;
  report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:ruleReport <urn:uuid:6870285f-579e-4400-bb97-768ed786f58e> .

<urn:uuid:6870285f-579e-4400-bb97-768ed786f58e> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> ;
  report:ruleRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:premiseReport <urn:uuid:ca08a6ea-2a50-41c6-ac7e-7793c43b01f1> ;
  report:activationState report:Active .

<urn:uuid:ca08a6ea-2a50-41c6-ac7e-7793c43b01f1> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
