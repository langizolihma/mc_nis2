# Következő végrehajtási sor – 2026-07-16

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": ["data/actions.csv", "COMPLETION_REPORT_A030.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["complete A-011 human input gate", "approve A-032 gold cases", "approve A-031 AI usage rule", "approve A-030 repeat-audit roadmap", "draft A-008 quarterly reporting kit"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "change_production", "submit_external", "purchase"]
}
```

## Javasolt sorrend

| Sorrend | Akció | Következő eredmény | Felelős | Jóváhagyó | Kapu |
|---|---|---|---|---|---|
| 1 – emberi | A-011 | Öt EIR owner, kilenc forrásrendszer/gazda, adatminősítés és read-only exportengedély | Pásztor András | Lángi Zoltán | G1 |
| 2 – emberi | A-032 | Tíz redaktált gold case, elvárt eredmény, reviewer és teljes eval/retest | Pásztor András | Lángi Zoltán | G1 |
| 3 – emberi | A-031 | AI-policy, környezet, adatminősítés, jogi/biztonsági review és megismertetés | Pásztor András | Lángi Zoltán; Dr. Berta Brigitta | G2 |
| 4 – emberi | A-030 | A köztes readiness dátumok, mock scope és auditor G5 döntési kapu jóváhagyása | Pásztor András | Lángi Zoltán | G4; G5 |
| 5 – agent | A-008 | Negyedéves beszámolási naptár, adatcut-off, sablon és dry-run workflow tervezete | Pásztor András | Lángi Zoltán | G4 |
| Kísérő | A-004; A-005 | 20 finding mintavétel és mapping owner review | Pásztor András | Lángi Zoltán | G1 |
| Kísérő | A-003; A-012 | Védett evidenciatár és emberi acceptance workflow próba | Pásztor András | Lángi Zoltán | G2 |

Az A-011 tényleges exportja csak jóváhagyott read-only forrásból, a nyers fájlok Git-kizárásával végezhető. Az A-032 tesztkerete jóváhagyott gold case nélkül nem használható agent-kimenet szakmai elfogadására. Az A-031 külső környezete és policy-ja G2 jóváhagyásig blokkolt. Az A-030 köztes dátumai és mock scope-ja G4 jóváhagyásra vár; auditormegrendeléshez G5 szükséges. Az A-008 csak tervezetet készíthet, külső benyújtást nem.
