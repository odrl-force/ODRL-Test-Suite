# Read request from Alice to resource X returns into yes (temporal gteq - future) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is later than or equal to 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> a odrl:Set ;
  odrl:uid <urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> ;
  dct:description "ALICE may READ resource X when it is later than or equal to 2024-02-12T11:20:10.999Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> .

<urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> .

<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:gteq ;
  odrl:rightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "Requesting Party ALICE requests to READ resource X." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
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
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:a216b953-0c02-4fe0-9282-120b99d44312> a report:PolicyReport ;
  dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> ;
  report:policyRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:ruleReport <urn:uuid:c87192bd-09aa-455b-8b86-a5e633a83868> .

<urn:uuid:c87192bd-09aa-455b-8b86-a5e633a83868> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> ;
  report:ruleRequest <urn:uuid:fb95f8d3-8c5a-453f-9c3f-6870bb434f5d> ;
  report:premiseReport <urn:uuid:24cf4d9f-c5dd-4587-a661-90f4878fc7bc>, <urn:uuid:118be187-5a8a-4fa4-b82d-99038f2a34b3>, <urn:uuid:ada63569-4853-4800-954f-f9fad33e8b74>, <urn:uuid:9c5659da-9686-4738-bb4e-e2ee38fd2d87> ;
  report:activationState report:Active .

<urn:uuid:24cf4d9f-c5dd-4587-a661-90f4878fc7bc> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:gteq ;
  report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Satisfied .

<urn:uuid:118be187-5a8a-4fa4-b82d-99038f2a34b3> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:ada63569-4853-4800-954f-f9fad33e8b74> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:9c5659da-9686-4738-bb4e-e2ee38fd2d87> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
