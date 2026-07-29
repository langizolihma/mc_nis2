# Következő végrehajtási sor – frissítve 2026-07-29

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": ["data/actions.csv", "DEFERRED_EVIDENCE_LOG.md", "PREPARATION_COVERAGE_REPORT_2026-07-17.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["collect protected evidence", "perform human reviews", "approve controlled pilots", "prepare human G4 submission"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE;G4_EXTERNAL_SUBMISSION;G5_PURCHASE",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "change_production", "submit_external", "purchase"]
}
```

## Állapot

Mind a 42 akció előkészítő csomagja elkészült. A következő sor kizárólag emberi adatgyűjtést, döntést és kontrollált végrehajtást tartalmaz; az AI dokumentálhat és javasolhat, de nem helyettesíti a kapukat.

A napi operatív munkasorrend a
`generated/daily_execution_brief_2026-07-29.md` fájlban található. A
2026-07-29-i nyilvántartási állapot szerint 17 akciónak lejárt a céldátuma,
9 akció 8–30 napon belül esedékes, 9 akció pedig még konkrét emberi ütemezést
igényel. A „lejárt” megjelölés státuszellenőrzést kér; nem jelenti
automatikusan azt, hogy a munka nem történt meg.

A 17 lejárt tétel egységes emberi egyeztetőlapja:
`DEADLINE_RECONCILIATION_FORM_2026-07-29.md`. A gépi, proposal-only
nyilvántartás a `data/deadline_reconciliation.json`; mind a 17 rekord
`PENDING_HUMAN` állapotú, ezért ebből még sem státusz-, sem céldátumváltozás
nem vezethető át.

A helyi portál Jóváhagyások nézete a 17 tételhez append-only
státusz-egyeztetési tervezetet tud rögzíteni. Ez gyorsítja az adatbekérést, de
a rögzítő neve az MVP-ben nem hitelesített, a tervezet nem formális döntés és
nem ír vissza sem az akcióregiszterbe, sem a SharePointba. A lenti emberi
review- és evidenciakövetelmények ezért változatlanok.

A tervezetekből a `build-reconciliation-review-package` parancs hash-ellenőrzött
emberi review-csomagot készít. A 2026-07-29-i baseline kimenet a
`generated/deadline_reconciliation_review_package_2026-07-29.md`; jelenleg
0 beérkezett tervezetet és 17 még adatot igénylő akciót tartalmaz. A generált
review-kimenet helyi és Gitből kizárt, mert később emberi megjegyzést vagy
védett evidenciahivatkozást tartalmazhat.

| Sorrend | Emberi munkablokk | Érintett fő akciók | Következő elfogadható eredmény | Kötelező kapu |
|---|---|---|---|---|
| 1 | Irányítási aláírások és felelősök | A-001; A-002; A-035; A-036 | IBF/RACI/G2-G4 és kanonikus forrás védett, aláírt review-rekordja | G2 |
| 2 | EIR-, asset-, forrás- és owner-baseline | A-005; A-011; A-034 | Öt EIR és a két nem auditált EIR jóváhagyott scope-ja, owner- és forráslistája | G1 |
| 3 | Read-only technikai baseline | A-018; A-022; A-024; A-025; A-026; A-027; A-028; A-029; A-033 | Jóváhagyott exportok védett URI/SHA-256-tal, emberi értékelés és döntési csomag | G1; G2; szükség szerint G3/G5 |
| 4 | Szervezeti kontrollok | A-009; A-010; A-013; A-014; A-015; A-016; A-037–A-041 | Kijelölt gazdák, kitöltött szabályozások, review és első működési minta | G1; G2; szükség szerint G3/G5 |
| 5 | Kontrollált gyakorlatok és tesztek | A-017; A-020; A-032; A-042 | Restore, fizikai bejárás, gold case és local-only agent pilot emberileg elfogadott evidenciája | G1; G2; G3 |
| 6 | Külső cselekvési terv | A-006; A-007 | Végleges, aláírt, G4-jóváhagyott csomag; emberi benyújtás és átvételi igazolás | G1; G2; G4 |
| 7 | Folyamatos jelentés és újraaudit | A-008; A-030 | Tényleges benyújtási dátumra épülő naptár és 2027-09-30 roadmap jóváhagyása | G2; G4; feltételes G5 |

## Működési szabály

Minden végrehajtott emberi feladatnál előbb a tényleges dokumentumot vagy exportot kell védett tárba helyezni, majd URI-t, SHA-256 értéket, reviewert, időzónás időpontot és döntési hivatkozást rögzíteni. Csak ezután frissíthető a kapcsolódó akció státusza. A `DEFERRED_EVIDENCE_LOG.md` tételei nem zárhatók le pusztán szóbeli megerősítéssel.

A napi összefoglaló újragenerálása:

```powershell
python -m nis2_harness daily-execution-brief `
  --actions data/actions.csv `
  --project-dates data/project_dates.json `
  --as-of ÉÉÉÉ-HH-NN `
  --output generated/daily_execution_brief_ÉÉÉÉ-HH-NN.md
```
