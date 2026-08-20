# Completion report – teljes akcióütemezés (D-035)

Dátum: 2026-08-19
Státusz: **PROPOSAL – ütemezési baseline elkészült, végleges G4 jóváhagyás függőben**

```json
{
  "status": "PROPOSAL",
  "agent_role": "remediation_scheduler",
  "source_refs": ["DECISIONS.md:D-021", "DECISIONS.md:D-035", "data/actions.csv", "data/action_execution_details.csv"],
  "assumptions": ["A 2027-09-30-i repeat-audit céldátum változatlan.", "A 60 nap naptári napot jelent; a vasárnapra eső korlát előtti utolsó munkanap az operatív maximum."],
  "confidence": "high",
  "proposed_changes": ["127 akció belső céldátumának és W0–W8 végrehajtási hullámának rögzítése"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G3_PRODUCTION_CHANGE;G4_EXTERNAL_SUBMISSION;G5_PURCHASE",
  "forbidden_automatic_actions": ["approve_action", "accept_evidence", "close_action", "submit_external", "change_production", "purchase"]
}
```

## Eredmény

- A megismételt audit belső céldátuma: **2027-09-30**.
- A 60 napos naptári korlát: **2027-08-01**.
- Mivel ez vasárnap, az utolsó operatív teljesítési nap: **2027-07-30**.
- Mind a **127 akciónak** van céldátuma; egyetlen nyitott tétel sem nyúlik túl az operatív korláton.
- Az egyszerű dokumentációs és szervezési tételek kerültek előre; a komplex technikai és beszerzésfüggő feladatok későbbi hullámba kerültek.
- A függőségeket a számítás megtartja: egy előfeltétel céldátuma nem lehet későbbi a rá épülő feladaténál.
- Az A-002 történeti, már lezárt dátuma és az A-007 jogszabályi beadási határideje változatlan maradt.

## Hullámok

| Hullám | Céldátum | Jelleg | Akciók száma |
|---|---:|---|---:|
| HISTORICAL | 2026-06-27 | lezárt történeti tétel | 1 |
| W0 | 2026-08-31 | azonnali beadási előfeltételek | 4 |
| W1 | 2026-09-11 | cselekvési terv véglegesítési előfeltétel | 1 |
| W2 | 2026-09-24 | jogszabályi benyújtás | 1 |
| W3 | 2026-10-30 | gyors B0 dokumentáció és szervezés | 7 |
| W4 | 2026-12-15 | egyszerű kontrollok és gyors javítások | 6 |
| W5 | 2027-02-26 | közepes összetettségű működési feladatok | 27 |
| W6 | 2027-04-30 | komplex előkészítés és P0 technikai feladatok | 44 |
| W7 | 2027-06-30 | komplex technikai megvalósítás és teszt | 30 |
| W8 | 2027-07-30 | beszerzésfüggő és záró átalakítások | 6 |

## Fő kimenetek

- `data/actions.csv` – a kanonikus céldátumok.
- `data/action_execution_details.csv` – hullám és ütemezési indoklás.
- `data/action_schedule.csv` – áttekintő, rendezhető ütemezési nyilvántartás.
- `ACTION_SCHEDULE_2026-08-19.md` – közérthető ütemezési jelentés.
- `generated/action_plan.md` – frissített cselekvésiterv-tervezet.
- `submission_materials/NIS2_cselekvesi_terv_beadasra_elokeszitett_2026-08-19.docx` és `.pdf` – újragenerált beadási példányok.
- `portal_demo/data/demo_data.js` – a portál frissített pillanatképe.
- `portal_materials/DEF-039_lefedettsegpotlo_akciok_szakmai_es_hatarido_jovahagyasa.docx` – frissített emberi döntési lap.

## Ellenőrzések

- Ütemezési dry-run: **127 akció, legkésőbbi céldátum 2027-07-30**.
- Teljes regressziós tesztcsomag: **353 teszt, OK**.
- Akcióregiszter-validáció: **0 hard error**, 1 ismert kézbesítési evidencia-warning.
- Finding- és mapping-validáció: **0 hard error**, 2 ismert emberi review-warning.
- Beadási terv validációja: **0 hard error**, 6 nyitott emberi/forrás/benyújtási warning.
- Lejártakció-egyeztetés: **0 rekord, 0 hard error, 0 warning** a D-035 után.
- Beadási PDF: **135 oldal**, 0 üres oldal, 0 kilógó blokk, 0 hiányzó akcióazonosító.
- DEF-039: **4 oldal**, teljes vizuális ellenőrzés rendben.
- `git diff --check`: hiba nélkül lefutott.

## Nyitott emberi feladatok és kockázatok

- A dátumok irányítási baseline-t jelentenek; nem igazolják az akciók végrehajtását.
- Az új 85 lefedettségpótló akció G1 szakmai review-ja és az 52 technikai tétel G3 review-ja továbbra is szükséges.
- A még `TBD` kontrollgazdákat név szerint ki kell jelölni.
- A teljes cselekvési terv végleges G4 jóváhagyása és aláírása függőben van.
- A G5 tételeknél a beszerzési döntés, licenc/kapacitás-ellenőrzés és purchase gate nem kerülhető meg.
- Egyetlen akció sem lett automatikusan `DONE`, és evidencia sem lett automatikusan elfogadva.
