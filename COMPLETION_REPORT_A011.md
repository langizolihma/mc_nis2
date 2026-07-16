# A-011 végrehajtási jelentés

```json
{
  "status": "PROPOSAL",
  "agent_role": "control_mapper",
  "source_refs": ["SRC-008:p6", "SRC-008:p25", "SRC-008:p153-154", "SRC-008:p242-243", "SRC-008:p332-333"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "five-EIR proposal baseline",
    "nine-source read-only collection plan",
    "inventory reference and human-approval validation"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": ["close_action", "change_production", "upload_external", "collect_secrets"]
}
```

## Eredmény

Elkészült az öt ismert EIR proposal-only baseline-ja, a kilenc adatforrás-kategóriás read-only exportterv, a hivatkozásokat és emberi jóváhagyást ellenőrző CLI, valamint a végrehajtási runbook. Valós eszköz-, adat-, helyszín- vagy függőségi rekord nem került kitalálásra.

Az A-011 nem kész és nem zárható le. Az EIR ownerek, forrásrendszerek, adatminősítés, exportengedélyek és tényleges exportok hiányoznak. A kanonikus `data/actions.csv` státusza ezért változatlanul `NEW`.

## Létrehozott vagy módosított elemek

- `data/inventory_register.json`: öt EIR baseline, üres asset/data/location/dependency listák.
- `config/inventory_export_plan.json`: kilenc jóváhagyandó read-only forráskategória.
- `A011_READONLY_INVENTORY_PLAN.md`: indítási kapu, gyűjtési sorrend, mezők és minőségkapuk.
- `src/nis2_harness/registry.py`: általános, UTF-8 JSON-object loader.
- `src/nis2_harness/validation.py`: inventory-, hivatkozás-, duplikáció- és exportengedély-validáció.
- `src/nis2_harness/cli.py`: `validate-inventory` parancs.
- `tests/test_inventory.py`: pozitív és negatív inventory-biztonsági tesztek.

## Ellenőrzések

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate-inventory --inventory data/inventory_register.json --export-plan config/inventory_export_plan.json
```

- Unit teszt: **41/41 sikeres**.
- Inventory-validáció: **0 hard error, 8 elvárt warning** az üres listák, TBD ownerek/rendszerek és függő G1 jóváhagyás miatt.
- Éles rendszerkapcsolat, aktív scan, külső feltöltés vagy adatgyűjtés: **nem történt**.

## Nyitott emberi és technikai feladatok

1. Öt EIR ownerének és helyettesének kijelölése.
2. Kilenc tényleges forrásrendszer és forrásgazda megnevezése.
3. Adatminősítés és védett exporttár kijelölése.
4. A read-only exportok G1 jóváhagyása és végrehajtása a rendszergazdák által.
5. A normalizált leltár feltöltése, exception review és owner sign-off.
6. A táblázatos `.xlsx`/CSV nézet előállítása olyan munkamenetben, ahol a Spreadsheets artifact runtime elérhető.
