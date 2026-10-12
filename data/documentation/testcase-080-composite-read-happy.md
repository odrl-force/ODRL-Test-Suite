# Read request from ALICE for resource X for composite rules (happy).
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

<urn:uuid:02957fe0-a1c6-46b8-a442-e0fe4f11e848> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:9c78fffb-81dc-45d0-a6ed-fa016cf480f5> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:06934310-5572-470c-a52e-9e52fdd95b13> .

<urn:uuid:06934310-5572-470c-a52e-9e52fdd95b13> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:5422211b-0456-4fb7-8ab9-deff4dceaaea> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:0003c3ee-9fc5-4723-b3b9-346a1fc77b2c>, <urn:uuid:42dae4be-a316-41b7-9b73-f11a760aeaaf>, <urn:uuid:cb0a68ca-145a-414b-8d10-cde7c8f87741> ;
  report:activationState report:Active .

<urn:uuid:0003c3ee-9fc5-4723-b3b9-346a1fc77b2c> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:42dae4be-a316-41b7-9b73-f11a760aeaaf> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:cb0a68ca-145a-414b-8d10-cde7c8f87741> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
