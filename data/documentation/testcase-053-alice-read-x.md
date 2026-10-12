# Read request from Alice to resource in asset collection returns into yes (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ any resource from the Asset Collection.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> a odrl:Set ;
  odrl:uid <urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> ;
  dct:description "ALICE may READ any resource from the Asset Collection." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> .

<urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:assetCollection .

ex:assetCollection a odrl:AssetCollection ;
  odrl:source ex:assetIdentifier .
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
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:f048231b-b932-4248-a47d-8653a390247b> a sotw:SotW ;
  sotw:context ex:x .

ex:x odrl:partOf ex:assetCollection .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:32cc5602-588e-46df-9e9f-9b8da97891ef> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:e30bcd34-0d5c-43d1-b229-bf68afcae5ae> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:b77ce2ba-4a16-4db9-a357-e08708723a60> .

<urn:uuid:b77ce2ba-4a16-4db9-a357-e08708723a60> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f4cb5007-e834-4a9c-a62a-091891350c04> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:76c20eea-f7b2-4a04-897c-e1b3a6301dfc>, <urn:uuid:c71019a5-117f-4a53-b0dc-ba09b1dfb052>, <urn:uuid:f73b8683-2bb8-4d72-ad3b-bb4f97f51dcb> ;
  report:activationState report:Active .

<urn:uuid:76c20eea-f7b2-4a04-897c-e1b3a6301dfc> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:c71019a5-117f-4a53-b0dc-ba09b1dfb052> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:f73b8683-2bb8-4d72-ad3b-bb4f97f51dcb> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
