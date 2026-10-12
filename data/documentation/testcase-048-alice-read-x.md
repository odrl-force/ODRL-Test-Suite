# Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X between 2024-01-01T00:00:00Z and 2024-12-31T23:59:59Z.
## ODRL Policy
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix ex: <http://example.org/> .
@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da> a odrl:Set ;
  odrl:uid <urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da> ;
  dct:description "ALICE may READ resource X between 2024-01-01T00:00:00Z and 2024-12-31T23:59:59Z." ;
  dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/> ;
  odrl:permission <urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22> .

<urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22> a odrl:Permission ;
  odrl:assignee ex:alice ;
  odrl:action odrl:read ;
  odrl:target ex:x ;
  odrl:constraint <urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100> .

<urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100> a odrl:LogicalConstraint ;
  odrl:and <urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535>, <urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd> .

<urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535> a odrl:Constraint ;
  odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:gt ;
  odrl:rightOperand "2024-01-01T00:00:00Z"^^xsd:dateTime .

<urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd> a odrl:Constraint ;
  odrl:leftOperand odrl:dateTime ;
  odrl:operator odrl:lt ;
  odrl:rightOperand "2024-12-31T23:59:59Z"^^xsd:dateTime .
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

<urn:uuid:6ebb156b-0006-4da8-9d10-085c142b7a0e> a report:PolicyReport ;
  dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:policy <urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da> ;
  report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:ruleReport <urn:uuid:746b609b-e451-4f8d-b1e3-1593b86bd22d> .

<urn:uuid:746b609b-e451-4f8d-b1e3-1593b86bd22d> a report:PermissionReport ;
  report:premiseReport <urn:uuid:b73e8e0d-5e28-453f-a82c-9fe8e5129fa6>, <urn:uuid:22a4f05f-071c-4344-a4c1-4c1930f6f013>, <urn:uuid:b376228c-7b4e-4d3a-9c9a-406b978437c5>, <urn:uuid:b1e845d1-23b0-4e14-8817-1bfdfa41d036> ;
  report:attemptState report:Attempted ;
  report:rule <urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22> ;
  report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> ;
  report:activationState report:Active .

<urn:uuid:b73e8e0d-5e28-453f-a82c-9fe8e5129fa6> a report:ConstraintReport ;
  report:premiseReport <urn:uuid:7ff462da-ab7c-4eb4-a0e7-c157b2647a54>, <urn:uuid:a3f76709-5449-4bb8-a90a-8631b70459b6> ;
  report:constraint <urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLogicalOperand odrl:and .

<urn:uuid:22a4f05f-071c-4344-a4c1-4c1930f6f013> a report:TargetReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:b376228c-7b4e-4d3a-9c9a-406b978437c5> a report:PartyReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:b1e845d1-23b0-4e14-8817-1bfdfa41d036> a report:ActionReport ;
  report:satisfactionState report:Satisfied .

<urn:uuid:7ff462da-ab7c-4eb4-a0e7-c157b2647a54> a report:ConstraintReport ;
  report:constraint <urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:gt ;
  report:constraintRightOperand "2024-01-01T00:00:00Z"^^xsd:dateTime .

<urn:uuid:a3f76709-5449-4bb8-a90a-8631b70459b6> a report:ConstraintReport ;
  report:constraint <urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd> ;
  report:satisfactionState report:Satisfied ;
  report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime ;
  report:constraintOperator odrl:lt ;
  report:constraintRightOperand "2024-12-31T23:59:59Z"^^xsd:dateTime .
```
