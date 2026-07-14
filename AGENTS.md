# AGENTS.md – metALCOM NIS2 harness

Ez a fájl a repository teljes területére érvényes, kivéve, ha egy alkönyvtárban található szűkebb `AGENTS.md` kifejezetten felülírja.

## 1. Kötelező olvasási sorrend

Minden munka előtt olvasd el:

1. `PROJECT_BRIEF.md`
2. `DECISIONS.md`
3. `SECURITY_BOUNDARIES.md`
4. `CODEX_HANDOFF.md`
5. `ACCEPTANCE_CRITERIA.md`
6. `data/project_dates.json`
7. `data/actions.csv`

Eltérés esetén a prioritás:

1. aktuális emberi utasítás;
2. `SECURITY_BOUNDARIES.md`;
3. `DECISIONS.md` `APPROVED_BASELINE` és `MANDATORY_SOURCE` tételei;
4. `CODEX_HANDOFF.md` aktuális munkacsomagja;
5. `PROJECT_BRIEF.md`;
6. egyéb dokumentáció.

## 2. Projektcél

Készíts auditálható, local-first NIS2-helyreállítási harness-t, amely a lehető legtöbb elemző és dokumentáló munkát automatizálja, de nem ruház át jogi, vezetői, biztonsági vagy pénzügyi felelősséget AI-ra.

## 3. Nem alkuképes szabályok

- Minden AI-kimenet javaslat, nem jóváhagyás és nem evidencia.
- A kézhezvételi dátumhoz a `data/project_dates.json` kanonikus rekordját használd; ne találj ki vagy írj át dátumot, felelőst, jóváhagyót, rendszertényt vagy költséget emberi döntési rekord nélkül.
- `unverified_internal` forrás nem kezelhető auditált tényként.
- Ne módosíts éles rendszert, ne küldj külső üzenetet, ne vásárolj, ne deployolj.
- Ne tölts fel érzékeny adatot külső szolgáltatásba.
- Ne írj felül jóváhagyott döntést; javasolj új döntési rekordot.
- Ne jelölj akciót `DONE` státuszúra elfogadott evidencia és emberi reviewer nélkül.
- Ne commitolj és ne pusholj, hacsak az ember kifejezetten nem kéri.

## 4. Fejlesztési alapelvek

- Python 3.11+.
- Standard library-first; új dependency csak indoklással és jóváhagyással.
- UTF-8 minden fájlban; a magyar ékezetek megőrzendők.
- Determinisztikus kimenet, stabil rendezés, expliciten kezelt időzóna/dátum.
- Típusjelölés, rövid függvények, egyértelmű hibák és nem nulla exit code validációs hiba esetén.
- A forrásfájlokat ne módosítsd helyben; generált output külön könyvtárba kerüljön.
- Minden jelentős funkcióhoz teszt szükséges.
- Különítsd el a domainlogikát, fájl-I/O-t és CLI-t.

## 5. Forrás- és bizonytalanságkezelés

Minden generált állításnál tartsd meg:

- `source_ref` és oldalszám;
- `source_confidence`;
- az alkalmazott feltételezést;
- a human review státuszt.

Ha két forrás eltér:

1. ne válassz csendben;
2. rögzíts konfliktust;
3. a magasabb forráshierarchiát alkalmazd ideiglenesen;
4. hozz létre emberi döntési feladatot.

## 6. Munkamenet

1. Ellenőrizd a repository állapotát és az aktuális handoff-azonosítót.
2. Írj rövid végrehajtási tervet.
3. Készítsd el a legkisebb működő változtatást.
4. Futtasd a releváns teszteket és validációt.
5. Ellenőrizd, hogy nem került-e titok vagy érzékeny adat a diffbe.
6. Frissítsd a technikai dokumentációt, de ne változtasd meg önállóan a szakmai döntéseket.
7. Adj completion reportot: módosított fájlok, futtatott parancsok, teszteredmény, nyitott kockázat, emberi döntésigény.

## 7. Agent-kimeneti szerződés

A későbbi agent-kimenetek minimális szerkezete:

```json
{
  "status": "PROPOSAL",
  "agent_role": "...",
  "source_refs": ["SRC-002:p21"],
  "assumptions": [],
  "confidence": "high|medium|low",
  "proposed_changes": [],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": ["close_action", "submit_external", "change_production"]
}
```

## 8. Költségvédelmi szabály

Minden fizetős javaslat előtt dokumentáld:

- meglévő licenc/entitlement;
- meglévő kapacitás;
- B0 alternatíva;
- pilot;
- mérhető acceptance criterion;
- purchase trigger;
- halasztás kockázata.

Enélkül a javaslat státusza `BLOCKED_BY_COST_GATE`.

## 9. Kész definíciója

Egy munkacsomag csak akkor kész, ha:

- az `ACCEPTANCE_CRITERIA.md` releváns pontjai teljesülnek;
- a tesztek lefutottak;
- nincs ismert hard validation error;
- a biztonsági határok nem sérültek;
- a completion report elkészült;
- a hátralévő emberi döntések egyértelműen listázva vannak.
