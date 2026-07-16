# Fizikai védelmi bejárási csomag – A-020

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-008:p65-75", "DECISIONS.md:D-027"],
  "assumptions": ["Helyszíni tény nem állítható megfigyelés és evidencia nélkül."],
  "confidence": "high",
  "proposed_changes": ["telephelyi scope", "kilenc kontrollos bejárás", "gap-register", "B0 gyorsjavítások", "védett evidencia"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Cél

A csomag Német Péter vezetésével végrehajtható, egységes helyszíni bejárást készít elő. A kilenc vizsgálati pont a fizikai hozzáférést, belépésellenőrzést, naplózást, felügyeletet, környezeti veszélyeket, áramellátást, kábelezést, berendezésvédelmet és karbantartást fedi le.

Jelenleg minden ellenőrzési pont `NOT_ASSESSED`. Az üres gap-register nem azt jelenti, hogy nincs hiány; csak azt, hogy a helyszíni felmérés még nem történt meg.

## Javasolt végrehajtási rend

1. Német Péter és az IBF kijelöli a telephelyeket, védett területeket és kizárásokat.
2. Jóváhagyják a résztvevőket, időpontot, fotózást és személyesadat-kezelést.
3. A helyszínen minden kontrollhoz tényszerű megfigyelés, megfigyelő és időpont kerül.
4. Az eredeti fotó, belépési lista és tesztjegyzőkönyv védett tárba kerül.
5. Minden gap külön rekordot, kockázatot, felelőst, céldátumot és evidenciát kap.
6. A költségmentes gyorsjavítások külön jelölhetők, de végrehajtásuk és elfogadásuk emberi feladat.
7. Német Péter szakmai, Lángi Zoltán vagy kijelölt reviewer G2 felülvizsgálatot végez.

## Adatvédelmi korlát

Fotón vagy jegyzőkönyvben ne legyen szükségtelen személyes adat, belépőkártya, képernyőtartalom, kód, kulcsazonosító vagy részletes biztonsági gyengeség. Gitbe csak metaadat és hash kerülhet.

## Gépi ellenőrzés

```powershell
python -m nis2_harness validate-physical-security --plan data\physical_security_walkthrough.json
```
