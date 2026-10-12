# Read request from people in party collection to resource in asset collection returns into yes (Bob Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection may READ any resource from the Asset Collection.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> a odrl:Set ;
  odrl:uid <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> ;
  dct:description "A party collection may READ any resource from the Asset Collection." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> .

<urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> a odrl:Permission ;
  odrl:assignee ex:partyCollection ;
  odrl:action odrl:read ;
  odrl:target ex:assetCollection .

ex:partyCollection a odrl:PartyCollection ;
  odrl:source ex:partyIdentifier .

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

<urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:bob ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party BOB requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ] .
```
## State of the world
```ttl
@prefix ex: <http://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .

<urn:uuid:116a8435-a356-45f5-a20f-a1e593d4a55d> a sotw:SotW ;
  sotw:context ex:alice, ex:x .

ex:alice a foaf:Person ;
  odrl:partOf ex:partyCollection .

ex:x odrl:partOf ex:assetCollection .
```
## Evaluation result: Compliance Report
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:b3275c42-0f6d-4a0d-a33c-da27d5359ae0> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> ;
  report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:ruleReport <urn:uuid:bd5db87a-71da-4948-846c-d089d3bc66f7> .

<urn:uuid:bd5db87a-71da-4948-846c-d089d3bc66f7> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> ;
  report:ruleRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> ;
  report:premiseReport <urn:uuid:4e74ee91-31be-400a-9366-502a445b2408>, <urn:uuid:fcf80e43-dd91-41de-9ced-70f8b87074de>, <urn:uuid:522f781e-5c7a-487e-a266-83cb6f0484ad> ;
  report:activationState report:Inactive .

<urn:uuid:4e74ee91-31be-400a-9366-502a445b2408> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:fcf80e43-dd91-41de-9ced-70f8b87074de> a report:PartyReport ;
  report:satisfactionState report:Unsatisfied .

<urn:uuid:522f781e-5c7a-487e-a266-83cb6f0484ad> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
