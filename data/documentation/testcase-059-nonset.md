# Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X - duty unknown).
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

<urn:uuid:8a6c8315-7a08-4f65-af4f-2bec2fd2f21d> a sotw:SotW ;
  sotw:context <urn:uuid:1cd011dc-810f-447a-b68f-d1533938cf46> .

<urn:uuid:1cd011dc-810f-447a-b68f-d1533938cf46> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:ruleReport <urn:uuid:77bd375c-7095-430a-87e1-6591bf666b75> .

<urn:uuid:77bd375c-7095-430a-87e1-6591bf666b75> a report:DutyReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> ;
  report:performanceState report:Unknown ;
  report:deonticState report:NonSet .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:58f1b205-1b18-4261-b4fc-bee6776f0031> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:2ba64a68-1e66-4a3c-ae53-52210b9e899d> .

<urn:uuid:2ba64a68-1e66-4a3c-ae53-52210b9e899d> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f21be2f2-5efd-46ca-ac4c-0b37d9b9a526> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:7a72fefc-5fd5-4be1-bb4f-360247f2fe75>, <urn:uuid:0c420867-f218-41ca-bd6d-dcabd48b956a>, <urn:uuid:032fa9f0-1496-402a-b6c8-34c91bb73a2a> ;
  report:conditionReport <urn:uuid:77bd375c-7095-430a-87e1-6591bf666b75> ;
  report:activationState report:Active .

<urn:uuid:7a72fefc-5fd5-4be1-bb4f-360247f2fe75> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:0c420867-f218-41ca-bd6d-dcabd48b956a> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:032fa9f0-1496-402a-b6c8-34c91bb73a2a> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
