# Read request from ALICE for resource X over a delivery channel (happy).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X if the deliveryChannel is podpro.dev/id.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .

<urn:uuid:0bfcef9d-c0a0-4834-945d-99058b763e5b> a odrl:Set ;
  odrl:uid <urn:uuid:0bfcef9d-c0a0-4834-945d-99058b763e5b> ;
  dct:description "ALICE may READ resource X if the deliveryChannel is podpro.dev/id." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:e51a43e4-616f-4f32-906b-2359955228e5> .

<urn:uuid:e51a43e4-616f-4f32-906b-2359955228e5> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:963698fe-3b44-4b88-8527-501b6c5765a6> .

<urn:uuid:963698fe-3b44-4b88-8527-501b6c5765a6> a odrl:Constraint ;
  odrl:leftOperand odrl:deliveryChannel ;
  odrl:operator odrl:eq ;
  odrl:rightOperand <https://podpro.dev/id> .
```
## ODRL Request
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:7433f876-38e9-4e46-9a8e-12b1d4dda622> a sotw:EvaluationRequest ;
  sotw:evaluatedAction odrl:read ;
  sotw:evaluatedParty ex:alice ;
  sotw:evaluatedTarget ex:x ;
  dct:description "ALICE wants to READ resource X given the context of deliver channel podpro.dev/id." ;
  sotw:requestParameter [
    a sotw:RequestParameter ;
    sotw:value "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
    sotw:describesFeature sotw:TemporalData
  ], [
    a sotw:RequestParameter ;
    sotw:value <https://podpro.dev/id> ;
    sotw:describesFeature sotw:DeliveryChannel
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

<urn:uuid:8eeb073c-8225-40e0-89b4-82be829673af> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:0bfcef9d-c0a0-4834-945d-99058b763e5b> ;
  report:policyRequest <urn:uuid:7433f876-38e9-4e46-9a8e-12b1d4dda622> ;
  report:ruleReport <urn:uuid:4dd6802a-56b9-4eef-a4aa-54294ddf1acf> .

<urn:uuid:4dd6802a-56b9-4eef-a4aa-54294ddf1acf> a report:PermissionReport ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:e51a43e4-616f-4f32-906b-2359955228e5> ;
  report:ruleRequest <urn:uuid:7433f876-38e9-4e46-9a8e-12b1d4dda622> ;
  report:premiseReport <urn:uuid:30cd0522-6195-4223-b16f-3a9f722b1988>, <urn:uuid:7475680f-e1a0-4a26-9675-a6fbddf827a9>, <urn:uuid:7e4914f8-13a8-447f-b8b1-17fc9f70f9a7>, <urn:uuid:46465d0a-23c6-4d8a-948f-e2e1e05c21fc> ;
  report:activationState report:Active .

<urn:uuid:30cd0522-6195-4223-b16f-3a9f722b1988> a report:ConstraintReport ;
  report:constraint <urn:uuid:963698fe-3b44-4b88-8527-501b6c5765a6> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand <https://podpro.dev/id> ;
  report:constraintOperator odrl:eq ;
  report:constraintRightOperand <https://podpro.dev/id> .

<urn:uuid:7475680f-e1a0-4a26-9675-a6fbddf827a9> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:7e4914f8-13a8-447f-b8b1-17fc9f70f9a7> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:46465d0a-23c6-4d8a-948f-e2e1e05c21fc> a report:ActionReport ;
  report:satisfactionState report:Satisfied .
```
