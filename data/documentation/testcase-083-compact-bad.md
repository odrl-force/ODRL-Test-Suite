# Read request from ALICE for resource X (compact policy - bad).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X (compact policy).
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:e2dac584-cdb6-4160-a1c1-6ef368d19f8d> a odrl:Set ;
  dct:description "ALICE may READ resource X (compact policy)." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:action odrl:read ;
  odrl:permission <urn:uuid:dccfa253-1a01-4ed6-926f-1f2f75d4df9d> .

<urn:uuid:dccfa253-1a01-4ed6-926f-1f2f75d4df9d> a odrl:Permission ;
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

<urn:uuid:7217ab6d-898d-4b03-baad-e0e278c17db8> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:e2dac584-cdb6-4160-a1c1-6ef368d19f8d> ;
  report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:ruleReport <urn:uuid:2ba69227-4aa9-4815-8b51-de7672a63a3a> .

<urn:uuid:2ba69227-4aa9-4815-8b51-de7672a63a3a> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:dccfa253-1a01-4ed6-926f-1f2f75d4df9d> ;
  report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:premiseReport <urn:uuid:967fd61a-ef5e-49f7-a508-10d99303655c>, <urn:uuid:b87c3ec8-025b-420c-8bbd-529ffa5263be>, <urn:uuid:4c76e782-ed05-4b4d-8ed0-d59f442c479b> ;
  report:activationState report:Inactive .

<urn:uuid:967fd61a-ef5e-49f7-a508-10d99303655c> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:b87c3ec8-025b-420c-8bbd-529ffa5263be> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:4c76e782-ed05-4b4d-8ed0-d59f442c479b> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
