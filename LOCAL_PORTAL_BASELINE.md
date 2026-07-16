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
