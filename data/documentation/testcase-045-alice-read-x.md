# Read request from Alice to resource X returns into yes (temporal gteq) (Alice Request Read X).
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
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix report: <https://w3id.org/force/compliance-report#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:72f0d66a-3887-4ddc-986a-02914589ac9d> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:dfd89db7-7a03-4457-80ae-2f4b92c8e1ad> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:41ede2c2-859b-4e7a-bbbb-b180f85197e7> .

<urn:uuid:41ede2c2-859b-4e7a-bbbb-b180f85197e7> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:8e8bdcbd-3b76-485a-a279-fb3df060aa06> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:premiseReport <urn:uuid:511bbfa3-e310-47e5-a797-ee64b433bd3c>, <urn:uuid:059711e2-e58a-43de-b54d-04115e66d57a>, <urn:uuid:24bbb845-1021-4698-8ba2-126040cac3f0>, <urn:uuid:16554e2c-48fb-4c34-bd81-cf9a2e0d48e0> ;
  report:activationState report:Active .

<urn:uuid:511bbfa3-e310-47e5-a797-ee64b433bd3c> a report:ConstraintReport ;
  report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> ;
  report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:gteq ;
  report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:satisfactionState report:Satisfied .

<urn:uuid:059711e2-e58a-43de-b54d-04115e66d57a> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:24bbb845-1021-4698-8ba2-126040cac3f0> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:16554e2c-48fb-4c34-bd81-cf9a2e0d48e0> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
