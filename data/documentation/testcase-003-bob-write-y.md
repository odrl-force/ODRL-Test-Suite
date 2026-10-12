# Any request results into yes (Bob Request Write).
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

<urn:uuid:00f32161-8dcf-470c-b419-681e7344697b> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78> ;
  report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:ruleReport <urn:uuid:e1116cdc-bbc4-4f9a-8287-b6a6e878bf70> .

<urn:uuid:e1116cdc-bbc4-4f9a-8287-b6a6e878bf70> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c> ;
  report:ruleRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> ;
  report:activationState report:Active .
```
