# Any request results into yes (Alice Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Everybody can do everything.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78> a odrl:Set ;
  odrl:uid <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78> ;
  dct:description "Everybody can do everything." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c> .

<urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c> a odrl:Permission .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
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

<urn:uuid:75a52a92-5872-480e-9380-f7d9f2a53e94> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:070aa778-01c8-487b-b833-ccdfd4be836b> .

<urn:uuid:070aa778-01c8-487b-b833-ccdfd4be836b> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:activationState report:Active .
```
