# Megismételt audit roadmap – A-030

```json
{
  "status": "PROPOSAL",
  "agent_role": "repeat_audit_planner",
  "source_refs": ["SRC-001:p1-2", "DECISIONS.md:D-021"],
  "assumptions": ["A köztes dátumok G4 jóváhagyásig tervezési javaslatok."],
  "confidence": "high",
  "proposed_changes": ["negyedéves readiness gate-ek", "mock audit", "javítási buffer", "auditor-procurement döntési kapu"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G4_EXTERNAL_SUBMISSION;G5_PURCHASE",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Cél és dátumminősítés

A D-021 alapján jóváhagyott belső céldátum **2027-09-30**. A hatósági végső időpont **2027-12-31**. Ezeket a harness validátora rögzített baseline-ként ellenőrzi.

A roadmap minden más dátuma `PROPOSED`: ütemezési javaslat, nem jóváhagyott vállalás. Jóváhagyásukhoz a kijelölt emberi reviewer döntési rekordja szükséges.

## Javasolt végrehajtási sor

| Dátum | Mérföldkő | Elvárt eredmény | Kapu | Minősítés |
|---|---|---|---|---|
| 2026-09-30 | Q3 readiness | Akció-, evidencia- és döntési backlog review | G1 | PROPOSED |
| 2026-12-31 | Q4 readiness | Kontrollcsaládonkénti readiness review | G1 | PROPOSED |
| 2027-03-31 | Q1 readiness | Evidenciaminta és kockázatok review-ja | G1 | PROPOSED |
| 2027-03-31 | Auditor döntési kapu | Költségvédelmi csomag és G5 döntés | G5 | PROPOSED |
| 2027-06-30 | Q2 readiness | Scope-, kontroll- és evidenciakészültség | G1 | PROPOSED |
| 2027-07-31 | Mock audit | Jegyzőkönyv, findingok, felelősök és dátumok | G1 | PROPOSED |
| 2027-08-31 | Javítási buffer vége | Javítások és evidenciák review-ja | G1 | PROPOSED |
| 2027-09-30 | Megismételt audit | Audit és emberileg jóváhagyott eredmény | G4 | APPROVED_BASELINE (D-021) |

## Kötelező emberi döntések

- Lángi Zoltán hagyja jóvá vagy módosítsa a köztes dátumokat és a mock audit scope-ját.
- A mock scope az A-034 döntésével együtt fedje le a jóváhagyott NIS2 scope-ot; az AI ezt nem rögzítheti tényként.
- Auditor megrendelése, költségvállalás vagy fizetős pilot kizárólag dokumentált költségvédelmi csomag és G5 döntés után történhet.
- Külső auditorral vagy hatósággal történő kommunikáció, illetve benyújtás G4 nélkül nem végezhető.

## Gépi ellenőrzés

```powershell
python -m nis2_harness validate-repeat-audit --roadmap data\repeat_audit_roadmap.json
```
