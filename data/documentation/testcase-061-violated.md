# Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X - duty violated).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Alice can only read X, given that eventually the duty is fulfilled.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> a odrl:Set ;
  odrl:uid <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  dct:description "Alice can only read X, given that eventually the duty is fulfilled." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f21be2f2-5efd-46ca-ac4c-0b37d9b9a526> .

<urn:uuid:f21be2f2-5efd-46ca-ac4c-0b37d9b9a526> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:duty <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> .

<urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> a odrl:Duty ;
  odrl:action odrl:compensate .
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
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:9187bb05-519d-497c-8f4d-83492678b3e4> a sotw:SotW ;
  sotw:context <urn:uuid:517d1bd4-fcae-46f9-a2a3-414da2cf4fe1> .

<urn:uuid:517d1bd4-fcae-46f9-a2a3-414da2cf4fe1> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:ruleReport <urn:uuid:6122101e-a4d6-4e1a-9e35-a3ed124a09b8> .

<urn:uuid:6122101e-a4d6-4e1a-9e35-a3ed124a09b8> a report:DutyReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> ;
  report:performanceState report:Unperformed ;
  report:deonticState report:Violated .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:e001b361-9f6e-4e05-84bd-510d2870c83d> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:ac38b6ef-fd36-4b6c-ac14-d27e8475f499> .

<urn:uuid:ac38b6ef-fd36-4b6c-ac14-d27e8475f499> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f21be2f2-5efd-46ca-ac4c-0b37d9b9a526> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:9cb53011-6794-4e44-bb4c-b0e585be276b>, <urn:uuid:fdea884d-bd8c-499b-89dc-9c7784a7a6f0>, <urn:uuid:8eaf15bf-b0d1-4cee-bf0f-ffac9bb3fb14> ;
  report:conditionReport <urn:uuid:6122101e-a4d6-4e1a-9e35-a3ed124a09b8> ;
  report:activationState report:Inactive .

<urn:uuid:9cb53011-6794-4e44-bb4c-b0e585be276b> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:fdea884d-bd8c-499b-89dc-9c7784a7a6f0> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:8eaf15bf-b0d1-4cee-bf0f-ffac9bb3fb14> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
