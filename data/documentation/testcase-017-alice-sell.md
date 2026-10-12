# Any request from Alice to use returns into yes (Alice Request Sell).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Only Alice can use everything.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> a odrl:Set ;
  odrl:uid <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> ;
  dct:description "Only Alice can use everything." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> .

<urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:use .
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

<urn:uuid:ace9b76b-6e8e-464f-b229-c91722aa3c6c> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> ;
  report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:ruleReport <urn:uuid:606f7860-e453-476d-a927-014135d28984> .

<urn:uuid:606f7860-e453-476d-a927-014135d28984> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> ;
  report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> ;
  report:premiseReport <urn:uuid:6af2437a-dab9-4811-979d-a8e4cc796fc9>, <urn:uuid:a3930a85-a3a3-40de-924b-971557cecc78> ;
  report:activationState report:Inactive .

<urn:uuid:6af2437a-dab9-4811-979d-a8e4cc796fc9> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:a3930a85-a3a3-40de-924b-971557cecc78> a report:ActionReport ;
  report:satisfactionState report:Unsatisfied .
```
