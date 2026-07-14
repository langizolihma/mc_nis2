# TERVEZET – auditor-megerősítési kérés

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-001:p1", "SRC-002:p1"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["request canonical audit report version confirmation"],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["send_external", "replace_canonical_source", "close_action"]
}
```

**Tárgy:** A metALCOM Zrt. NIS2 auditjelentés kanonikus változatának megerősítése

Tisztelt Alverad Technology Focus Kft.!

A metALCOM Zrt. részére rendelkezésre álló auditjelentés az alábbi:

- fájlnév: `ALVERAD_Audit_metALCOM Zrt._20260504_jelentes.pdf`;
- borítón szereplő dátum: 2026. május 4.;
- terjedelem: 386 oldal;
- SHA-256: `f0d48aa53c07330d5a9088aec5479ca1c1675c5ec33d4a0726df76d77588f5a6`.

Az SZTFH `SZTFH-KIBER/6377-3/2026` iktatószámú határozatának 1. oldala ugyanakkor a Szervezet vonatkozásában elkészített, **2026.06.05. napján kelt auditjelentésre** hivatkozik.

Kérjük írásban megerősíteni az alábbiak egyikét:

1. a rendelkezésünkre álló, 2026. május 4-i borítójú és a fenti SHA-256 értékű PDF azonos a határozatban hivatkozott kanonikus auditjelentéssel; vagy
2. a határozat egy későbbi vagy eltérő, 2026. június 5-i változatra hivatkozik.

Amennyiben eltérő változatról van szó, kérjük annak biztonságos csatornán történő rendelkezésre bocsátását, valamint a dokumentumazonosító, verzió, keltezés és SHA-256 ellenőrzőösszeg megadását.

Kérjük továbbá jelezni, hogy a két eltérő dátum dokumentumverziót, auditfolyamat-mérföldkövet vagy esetleges adminisztratív dátumeltérést jelent-e.

Köszönettel:

Pásztor András

felelős

Jóváhagyta küldésre:

Lángi Zoltán

jóváhagyó

**Megjegyzés:** ezt a tervezetet embernek kell felülvizsgálnia és elküldenie; a harness nem küld külső üzenetet.
