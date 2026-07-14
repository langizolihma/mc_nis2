---
handoff_id: H-001
version: "0.3"
status: READY_AFTER_HUMAN_APPROVAL
created: "2026-07-13"
updated: "2026-07-14"
receipt_date: "2026-06-26"
action_plan_deadline: "2026-09-24"
deadline_review_status: PENDING_G2_G4_REVIEW
requested_executor: VS_CODE_CODEX
---

# H-001 – Determinisztikus helyi NIS2 core

# 1. Cél

Hozd létre a legkisebb, helyben futó, tesztelt Python core-t, amely a `data/actions.csv` regisztert validálja, összesíti, határidőt számít és emberi jóváhagyásra szánt cselekvési tervtervezetet generál.

**Ebben a munkacsomagban nincs LLM/API, Agents SDK, dokumentumtár-integráció, éles rendszerkapcsolat, web UI vagy deploy.**

# 2. Kötelező bemenet

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DECISIONS.md`
- `SECURITY_BOUNDARIES.md`
- `ACCEPTANCE_CRITERIA.md`
- `data/actions.csv`
- `data/project_dates.json`

A forrásdokumentumok nem szükségesek a repositoryba; a handoffban rögzített forráshivatkozásokat kezeld metaadatként.

# 3. Elvárt repository-szerkezet

```text
.
├── AGENTS.md
├── PROJECT_BRIEF.md
├── DECISIONS.md
├── CODEX_HANDOFF.md
├── SECURITY_BOUNDARIES.md
├── ACCEPTANCE_CRITERIA.md
├── README.md
├── pyproject.toml
├── .gitignore
├── config/
│   └── project.example.json
├── data/
│   ├── actions.csv
│   └── project_dates.json
├── generated/
│   └── .gitkeep
├── src/
│   └── nis2_harness/
│       ├── __init__.py
│       ├── __main__.py
│       ├── cli.py
│       ├── deadlines.py
│       ├── registry.py
│       ├── reports.py
│       └── validation.py
└── tests/
    ├── fixtures/
    ├── test_deadlines.py
    ├── test_registry.py
    ├── test_reports.py
    └── test_validation.py
```

# 4. Kötelező CLI

```text
python -m nis2_harness validate --actions data/actions.csv
python -m nis2_harness status --actions data/actions.csv
python -m nis2_harness deadlines --received 2026-06-26
python -m nis2_harness draft-action-plan --actions data/actions.csv --output generated/action_plan.md
```

## `validate`

Hard error legalább:

- hiányzó kötelező mező;
- duplikált `action_id`;
- ismeretlen priority/status/source_confidence/ai_eligibility/human_gate;
- P0 tételnél hiányzó deliverable vagy evidence;
- külső submission G4 nélkül;
- purchase trigger G5 nélkül;
- production change G3 nélkül;
- `unverified_internal` tétel `DONE`/külső-kész állapotban;
- hibás dátum vagy nem egész offset.

Warning legalább:

- `TBD-HUMAN` owner/approver;
- hiányzó project receipt date;
- `PROPOSED` döntésre támaszkodó akció;
- source version konfliktus;
- üres target date olyan tételnél, amely receipt date-re vár.

## `status`

Mutassa:

- összes akció;
- P0/P1/P2/P3 darabszám;
- státuszok;
- `TBD-HUMAN` owner/approver darabszám;
- authority/audited/strategy/unverified forrásmegoszlás;
- human gate szerinti darabszám;
- aktuális hard error és warning;
- a `data/project_dates.json` szerinti kézhezvételi dátum és számított tervhatáridő;
- legfontosabb blokkolók.

## `deadlines`

- ISO-dátumot fogadjon;
- számítsa ki a receipt + 90 naptári nap tervhatáridőt; a `2026-06-26` bemenetre kötelező eredmény `2026-09-24`;
- jelenítse meg a 2027.12.31-i végső auditdátumot;
- negyedéves dátumokat csak `DRAFT_SCHEDULE` jelöléssel generáljon, mert a pontos jogi/eljárási ütemezés emberi jóváhagyást igényel;
- ne módosítson fájlt.

## `draft-action-plan`

- fejléc: `TERVEZET – EMBERI JÓVÁHAGYÁS NÉLKÜL NEM NYÚJTHATÓ BE`;
- követelménycsalád szerinti csoportosítás;
- legalább: ID, feladat, felelős, határidő/határidőalap, prioritás, deliverable, elvárt evidencia, source_ref, human gate;
- külön függelék a `unverified_internal` és `PROPOSED` elemekről;
- stabil, determinisztikus rendezés.

# 5. Adatséma és engedélyezett enumok

A `human_gate` mező pontosvesszővel elválasztott kapulista lehet.

- `priority`: `P0`, `P1`, `P2`, `P3`
- `status`: `NEW`, `PLANNED`, `IN_PROGRESS`, `BLOCKED`, `READY_FOR_REVIEW`, `DONE`, `DEFERRED`, `CANCELLED`
- `source_confidence`: `authority`, `audited`, `strategy_input`, `unverified_internal`, `derived`, `conditional`, `conflict`, `machine_unvalidated`
- `ai_eligibility`: `yes`, `partial`, `no`
- `human_gate`: `G1_DOMAIN_REVIEW`, `G2_SECURITY_LEGAL`, `G3_PRODUCTION_CHANGE`, `G4_EXTERNAL_SUBMISSION`, `G5_PURCHASE`
- `cost_band`: `B0`, `B1`, `B2`, `B3`
- `external_submission`: `yes`, `no`

Ha a `purchase_trigger` nem üres vagy a `cost_band` nem `B0`, a kapulistának tartalmaznia kell a `G5_PURCHASE` értéket.

# 6. Technikai korlátok

- Python 3.11+.
- Standard library only ebben a munkacsomagban.
- `argparse`, `csv`, `dataclasses`, `datetime`, `pathlib`, `json`, `hashlib`, `unittest` használható.
- Nincs hálózati hívás.
- Nincs adatbázis.
- Nincs fájlmódosítás explicit parancs nélkül; H-001 nem tartalmaz apply parancsot.
- Windows és Linux útvonalakon működjön.
- UTF-8 és ékezetes magyar szöveg teljes körű megőrzése.

# 7. Tesztmátrix

Készíts legalább 12 tesztet:

1. érvényes teljes regiszter;
2. duplikált ID;
3. hiányzó kötelező mező;
4. hibás enum;
5. hiányzó G4;
6. hiányzó G5;
7. hiányzó G3;
8. unverified_internal lezárási tiltás;
9. a kanonikus `2026-06-26 + 90 nap = 2026-09-24` eset, továbbá hónap-/évváltásos teszteset;
10. hibás dátum;
11. magyar UTF-8 round-trip;
12. determinisztikus report;
13. TBD owner warning;
14. source conflict warning.

# 8. Dokumentáció

Frissítsd a repository `README.md` fájlját az alábbiakkal:

- cél és nem-cél;
- futtatási parancsok;
- mintakimenet;
- adatmezők rövid leírása;
- hard error vs warning;
- biztonsági korlát;
- hogyan következik a H-002 agent job packaging.

## Kötelező H-002+ programirány

A H-002 agent job packaging ne csak egyszeri feladatcsomagokat készítsen elő. A D-024 és a `PR-001`–`PR-005` alapján készítse elő egy folyamatos auditfelkészültségi ügynök fokozatos, pilot-alapú megvalósítását is. Az ügynök jóváhagyott, lehetőleg read-only logokat és exportokat dolgozzon fel, tartsa karban a nyilvántartásokat, készítsen jegyzőkönyv- és intézkedéstervezeteket, és csak a szükséges döntéseket terjessze ember elé.

A H-002-ben még nem engedélyezett éles integráció. Először fájlalapú fixture-ökkel, gold case-ekkel, negatív tesztekkel, emberimunka-csökkentési mérőszámokkal, jogosultsági tervvel és leállítási mechanizmussal kell igazolni a működést.

# 9. Kifejezetten nem végezhető el

- OpenAI API vagy más LLM-hívás;
- Agents SDK hozzáadása;
- dokumentumtár/AD/M365/Exchange/Hyper-V csatlakozás;
- éles export feldolgozása;
- új licenc vagy szolgáltatás kiválasztása;
- külső benyújtás;
- Git commit/push emberi kérés nélkül;
- a `DECISIONS.md` jóváhagyott tételeinek átírása.

# 10. Kimenet

Hozd létre:

- működő kód és tesztek;
- `generated/action_plan.md` minta;
- `COMPLETION_REPORT_H001.md`, amely tartalmazza:
  - módosított/létrehozott fájlok;
  - futtatott parancsok;
  - teszteredmény;
  - ismert korlátok;
  - biztonsági ellenőrzés;
  - nyitott emberi döntések;
  - javasolt H-002, de implementáció nélkül.

# 11. Indító prompt a VS Code Codexhez

```text
Olvasd el az AGENTS.md, PROJECT_BRIEF.md, DECISIONS.md,
SECURITY_BOUNDARIES.md, CODEX_HANDOFF.md és ACCEPTANCE_CRITERIA.md
fájlokat, majd vizsgáld meg a data/actions.csv szerkezetét.

Hajtsd végre kizárólag a CODEX_HANDOFF.md H-001 munkacsomagját.
Ne használj hálózatot, külső API-t, LLM-et vagy éles rendszerkapcsolatot.
Python 3.11+ standard library megoldást készíts, unit tesztekkel.

A munka végén futtasd az elfogadási parancsokat, készíts
COMPLETION_REPORT_H001.md fájlt, és mutasd be a diffet.
Ne commitolj és ne pusholj külön emberi utasítás nélkül.
```
