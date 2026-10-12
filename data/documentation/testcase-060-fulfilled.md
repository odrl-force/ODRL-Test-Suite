# Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X- duty fulfilled).
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

<urn:uuid:45625fcf-3563-4559-a901-a2b1b14bf94a> a sotw:SotW ;
  sotw:context <urn:uuid:4300c24e-c837-4cc2-b4c9-fc3950e9aa9b> .

<urn:uuid:4300c24e-c837-4cc2-b4c9-fc3950e9aa9b> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:ruleReport <urn:uuid:e3ac1162-7b26-4a3b-856a-56a651f7a91b> .

<urn:uuid:e3ac1162-7b26-4a3b-856a-56a651f7a91b> a report:DutyReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2> ;
  report:performanceState report:Performed ;
  report:deonticState report:Fulfilled .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:ed1df440-58e9-426f-9dbc-45f8995b776a> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:5671a567-1728-4797-a094-c5b93dc9bd85> .

<urn:uuid:5671a567-1728-4797-a094-c5b93dc9bd85> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f21be2f2-5efd-46ca-ac4c-0b37d9b9a526> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:5bc35e40-dcc2-4184-9857-ade73efc5384>, <urn:uuid:dde3a895-2b5b-48f8-9918-93f68b0754ab>, <urn:uuid:cb33abd4-527b-4784-bafd-c8d032d227db> ;
  report:conditionReport <urn:uuid:e3ac1162-7b26-4a3b-856a-56a651f7a91b> ;
  report:activationState report:Active .

<urn:uuid:5bc35e40-dcc2-4184-9857-ade73efc5384> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:dde3a895-2b5b-48f8-9918-93f68b0754ab> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:cb33abd4-527b-4784-bafd-c8d032d227db> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
