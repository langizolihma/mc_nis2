# Következő végrehajtási sor – 2026-07-16

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": ["data/actions.csv", "COMPLETION_REPORT_A011.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["complete A-011 human input gate", "approve A-032 gold cases", "start A-031 AI usage rule draft"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "change_production", "submit_external", "purchase"]
}
```

## Javasolt sorrend

| Sorrend | Akció | Következő eredmény | Felelős | Jóváhagyó | Kapu |
|---|---|---|---|---|---|
| 1 – emberi | A-011 | Öt EIR owner, kilenc forrásrendszer/gazda, adatminősítés és read-only exportengedély | Pásztor András | Lángi Zoltán | G1 |
| 2 – emberi | A-032 | Tíz redaktált gold case, elvárt eredmény, reviewer és teljes eval/retest | Pásztor András | Lángi Zoltán | G1 |
| 3 – agent | A-031 | AI-adatminősítési, redakciós, forráshierarchia-, prompt-injection- és proposal-only szabály tervezete | Pásztor András | Lángi Zoltán | G2 |
| Kísérő | A-004; A-005 | 20 finding mintavétel és mapping owner review | Pásztor András | Lángi Zoltán | G1 |
| Kísérő | A-003; A-012 | Védett evidenciatár és emberi acceptance workflow próba | Pásztor András | Lángi Zoltán | G2 |

Az A-011 tényleges exportja csak jóváhagyott read-only forrásból, a nyers fájlok Git-kizárásával végezhető. Az A-032 tesztkerete elkészült, de jóváhagyott gold case nélkül nem használható agent-kimenet szakmai elfogadására. Az A-031 tervezete ettől függetlenül elkészíthető, de csak G2 jogi/biztonsági jóváhagyással hirdethető ki.
