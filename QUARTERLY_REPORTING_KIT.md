# Negyedéves beszámolási csomag – A-008

```json
{
  "status": "PROPOSAL",
  "agent_role": "report_writer",
  "source_refs": ["SRC-001:p1-2", "data/project_dates.json", "data/actions.csv:A-008"],
  "assumptions": ["A 2026-09-24 dátum tervezési horgony, nem igazolt tényleges benyújtás."],
  "confidence": "medium",
  "proposed_changes": ["riportnaptár", "adat-cut-off", "dry run", "sablon", "G1/G2/G4 workflow"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G4_EXTERNAL_SUBMISSION",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Mit készít elő a csomag?

A hatósági döntés a cselekvési terv benyújtása után, a megismételt auditig negyedéves beszámolást ír elő. A tényleges benyújtási dátum még nem áll rendelkezésre, ezért a naptár a 2026-09-24-i határidőt csak tervezési horgonyként használja.

| Riport | Javasolt adat-cut-off | Tervezet | Owner review | Javasolt határnap |
|---|---|---|---|---|
| QR-001 | 2026-12-14 | 2026-12-17 | 2026-12-21 | 2026-12-24 |
| QR-002 | 2027-03-14 | 2027-03-17 | 2027-03-21 | 2027-03-24 |
| QR-003 | 2027-06-14 | 2027-06-17 | 2027-06-21 | 2027-06-24 |
| QR-004 | 2027-09-14 | 2027-09-17 | 2027-09-21 | 2027-09-24 |

Minden dátum `PROPOSED`. A tényleges cselekvésiterv-benyújtás rögzítésekor a teljes naptárt újra kell számítani, majd jogi/IBF reviewerrel jóváhagyatni.

## Működési workflow

1. Az adat-cut-off napján zárolni kell a riport inputlistáját, nem az éles rendszereket.
2. A harness csak forráshivatkozott tervezetet állíthat elő.
3. Pásztor András ellenőrzi a teljességet és a kontrollgazdák inputját.
4. A jogi/IBF reviewer ellenőrzi az ütemezést, scope-ot és állításokat.
5. Lángi Zoltán G4 döntést rögzít.
6. A benyújtást jogosult ember végzi; a visszaigazolás védett tárba, hash-e a metaadat-regiszterbe kerül.

## Dry run

A javasolt dry run 2026-11-30. Célja a sablon, forrásjegyzék, akcióstátusz, evidenciahiány és approval workflow kipróbálása külső küldés nélkül. Az eredmény G1 review-jegyzőkönyv.

## Gépi ellenőrzés

```powershell
python -m nis2_harness validate-quarterly-reporting --plan data\quarterly_reporting_plan.json
```
