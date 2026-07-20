# Helyi belső portál – jóváhagyott baseline

```json
{
  "status": "APPROVED_BASELINE",
  "agent_role": "solution_architect",
  "source_refs": ["DECISIONS.md:D-028", "DECISIONS.md:D-024", "SECURITY_BOUNDARIES.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["local-only browser portal", "task and approval queue", "AI proposal interface"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Rendeltetés

A helyi belső portál lesz a hétköznapi résztvevők közös munkafelülete. A felhasználó böngészőben láthatja saját feladatait, határidőit, döntési igényeit, riporttervezeteit és az AI által előkészített javaslatokat.

## Első kiadás minimális funkciói

- bejelentkezés és szerepköralapú hozzáférés;
- saját feladatok, határidők és blokkolók;
- jóváhagyási sor G1–G5 kapukkal;
- dokumentum- és evidencia-metaadat rögzítése, az eredeti védett tárhivatkozásával;
- AI-kérés és jól láthatóan `PROPOSAL` válasz;
- auditnapló minden emberi és AI-műveletről;
- vezetői státusz- és lejárati összefoglaló;
- kill switch és helyreállítási eljárás.

## Nem része az automatikus működésnek

A portál nem fogadhat el evidenciát, nem zárhat le akciót, nem küldhet külső dokumentumot, nem vásárolhat és nem módosíthat éles rendszert emberi kapu nélkül. Az első implementáció nem jelent éles telepítési engedélyt.

## Következő tervezési kapu

A technikai architektúra előtt fel kell mérni a rendelkezésre álló belső szervert, hitelesítést, hálózati zónát, mentést, TLS/tanúsítványkezelést és üzemeltetői felelőst. Ezek nélkül a portál nem deployolható.

## Prezentációs prototípus – 2026-07-17

A `portal_demo/` könyvtárban elkészült a célállapot dependency-free, helyben futó vizuális prototípusa. A dashboard, feladatlista, G1–G5 jóváhagyási sor, evidenciahiányok és AI-javaslatok kizárólag nem érzékeny repository-metaadatot mutatnak. A felület nem ír vissza adatot, nincs hitelesítése vagy éles integrációja, ezért nem minősül az első kiadás megvalósításának vagy deployengedélynek. A továbblépési feladatokat a DEF-015 és DEF-020 tartja nyitva.

## Helyi MVP – 2026-07-20

Az első működő MVP a Python standard library alapú `serve-portal` paranccsal indul. A 42 akciót, a projekt határidőit, a teljes pótlandóevidencia-naplót és az A-042 szintetikus pilotját minden kéréskor a repository aktuális állapotából olvassa.

Az egyetlen írható funkció az append-only `DRAFT_REVIEW_NOTE`, amely a Gitből kizárt `portal_runtime/review_drafts.jsonl` fájlba kerül időponttal és SHA-256 auditazonosítóval. A megadott felhasználónév nincs hitelesítve, ezért a rekordnak nincs formális hatása: nem fogad el evidenciát, nem hagy jóvá kaput és nem módosít akcióstátuszt.

Az MVP kizárólag `127.0.0.1`, `localhost` vagy `::1` címre köthető. Biztonsági fejléceket küld, külső függőséget nem használ, 16 KiB-ra korlátozza az írható kérést, ismeretlen akciót/kaput visszautasít, és bekapcsolt vagy hibás kill switch esetén fail-closed módon letiltja az írást.

A hitelesítés, RBAC, TLS, védett evidenciatár-integráció, mentési/retention döntés, belső szerver és hálózati publikálás továbbra is emberi G2/G3 kapus feladat; részletek DEF-032.
