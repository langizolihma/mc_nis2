# Következő végrehajtási sor – 2026-07-16

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": ["data/actions.csv", "COMPLETION_REPORT_A018.md", "DECISIONS.md:D-028"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["complete A-011 human input gate", "approve A-032 gold cases", "approve A-031 AI usage rule", "approve A-030 repeat-audit roadmap", "approve A-008 quarterly reporting kit", "approve A-006 action-plan submission package", "approve A-017 backup and restore inputs", "perform A-020 physical security walkthrough", "approve and perform A-022 read-only infrastructure health snapshot", "complete A-029 license and support evidence collection", "approve and pilot A-018 logging and review baseline", "prepare A-019 maintenance patch and change workflow", "design D-028 local portal after G2 architecture inputs"],
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
| 5 – emberi | A-008 | Tényleges submission anchor, naptárlogika, sablon és dry-run workflow jóváhagyása | Pásztor András | Lángi Zoltán; jogi/IBF reviewer | G2; G4 |
| 6 – emberi | A-006 | Finding/mapping review, fix dátumok, SRC-004 validáció, G2/G4 jóváhagyás | Pásztor András | Lángi Zoltán; jogi/IBF reviewer | G1; G2; G4 |
| 7 – emberi | A-017 | EIR owner/scope, RPO/RTO, mentési/retention szabály, izolált minta és G2/G3 jóváhagyás | Pásztor András | Lángi Zoltán; rendszerowner | G1; G2; G3 |
| 8 – emberi | A-020 | Telephelyi scope, G2 adatkezelés, helyszíni bejárás, gap-ek és evidencia review | Pásztor András; Német Péter | Lángi Zoltán | G1; G2 |
| 9 – emberi | A-022 | Belső owner, célpontok, módszer, jogosultság, időablak, G2/G3 és tényleges snapshot review | Pásztor András; Kollár Csaba | Lángi Zoltán | G1; G2; G3 |
| 10 – emberi | A-029 | Szerződés-, használat-, entitlement- és lifecycle-evidencia; B0/G5 döntések | Pásztor András; Kollár Csaba | Lángi Zoltán; költségkeret-gazda | G1; G5 |
| 11 – emberi | A-018 | Konkrét források, retention, öt alert teszt, napi/heti reviewer és első review-run | Pásztor András; Kollár Csaba | Lángi Zoltán | G1; G2; G3 |
| 12 – agent | A-019 | Baseline-, patch-, karbantartási- és változásnaptár, kivétel- és rollback-workflow | Pásztor András | Lángi Zoltán | G1; G3 |
| Későbbi | A-042; D-028 | Helyi belső portál architektúra és pilot a DEF-015 inputjai után | Pásztor András | Lángi Zoltán | G1; G2; G3 |
| Kísérő | A-004; A-005 | 20 finding mintavétel és mapping owner review | Pásztor András | Lángi Zoltán | G1 |
| Kísérő | A-003; A-012 | Védett evidenciatár és emberi acceptance workflow próba | Pásztor András | Lángi Zoltán | G2 |

Az A-011 tényleges exportja csak jóváhagyott read-only forrásból, a nyers fájlok Git-kizárásával végezhető. Az A-032 tesztkerete jóváhagyott gold case nélkül nem használható agent-kimenet szakmai elfogadására. Az A-031 külső környezete és policy-ja G2 jóváhagyásig blokkolt. Az A-030 köztes dátumai és mock scope-ja G4 jóváhagyásra vár; auditormegrendeléshez G5 szükséges. Az A-008 2026-09-24-i anchorja nem tényleges benyújtási tény, és riportot nem küldhet ki. Az A-006 0 hard hibája nem G4 jóváhagyás; benyújtás jogosult ember feladata. Az A-017 restore-ja G3-ig blokkolt. Az A-020 minden kontrollja NOT_ASSESSED a helyszíni evidencia elkészültéig. Az A-022 módszertana elkészült, de éles adatgyűjtése a DEF-018 G2/G3 tételeiig blokkolt. Az A-029 kerete elkészült, de minden státusza UNKNOWN a DEF-019 evidenciáiig; vásárlást nem kezdeményezhet, minden fizetős javaslat G5-köteles. Az A-018 kerete elkészült, de konkrét logforrás, retention, alertteszt és review-run nélkül nem igazol működést; éles kapcsolat G2/G3-köteles. A D-028 portál nem deployolható a DEF-015/DEF-020 inputjai nélkül.
