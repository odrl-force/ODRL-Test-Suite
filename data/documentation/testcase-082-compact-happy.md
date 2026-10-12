# Read request from ALICE for resource X (compact policy - happy).
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

<urn:uuid:0e019aaf-5fcb-495d-989f-d3b663d48807> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:e2dac584-cdb6-4160-a1c1-6ef368d19f8d> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:19edb1a4-bf89-4814-adc4-0eb4c590a3e7> .

<urn:uuid:19edb1a4-bf89-4814-adc4-0eb4c590a3e7> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:dccfa253-1a01-4ed6-926f-1f2f75d4df9d> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:8753abc6-091e-4eb4-b534-2cdc32a2d721>, <urn:uuid:49dd55b9-4e44-4e64-b094-da05efe95114>, <urn:uuid:691e11c5-65de-4807-9c54-893821663b93> ;
  report:activationState report:Active .

<urn:uuid:8753abc6-091e-4eb4-b534-2cdc32a2d721> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:49dd55b9-4e44-4e64-b094-da05efe95114> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:691e11c5-65de-4807-9c54-893821663b93> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
