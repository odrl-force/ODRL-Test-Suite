# Sell request from ALICE for resource X for composite rules (bad).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ or MODIFY resource X.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:9c78fffb-81dc-45d0-a6ed-fa016cf480f5> a odrl:Set ;
  dct:description "ALICE may READ or MODIFY resource X." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:5422211b-0456-4fb7-8ab9-deff4dceaaea> .

<urn:uuid:5422211b-0456-4fb7-8ab9-deff4dceaaea> a odrl:Permission ;
  odrl:action odrl:modify, odrl:read ;
  odrl:target ex:x ;
  odrl:assignee ex:alice .
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

<urn:uuid:453e2bf7-a015-4b1f-be5c-515d6f9982e9> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:9c78fffb-81dc-45d0-a6ed-fa016cf480f5> ;
  report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:ruleReport <urn:uuid:5bfcd10e-9ace-409a-8552-b064944e9a70> .

<urn:uuid:5bfcd10e-9ace-409a-8552-b064944e9a70> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:5422211b-0456-4fb7-8ab9-deff4dceaaea> ;
  report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:premiseReport <urn:uuid:d18cf34e-ec14-45a5-9643-d3b1ee95ac8b>, <urn:uuid:0a12a088-d321-410e-bcc7-f20140344f94>, <urn:uuid:54b33642-1639-4889-83ed-a8115641689d> ;
  report:activationState report:Inactive .

<urn:uuid:d18cf34e-ec14-45a5-9643-d3b1ee95ac8b> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:0a12a088-d321-410e-bcc7-f20140344f94> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:54b33642-1639-4889-83ed-a8115641689d> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
