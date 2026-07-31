# Completion report – többfelhasználós portálpilot előkészítése

```json
{
  "status": "PROPOSAL",
  "agent_role": "local_portal_engineer",
  "source_refs": [
    "DECISIONS.md:D-029",
    "DECISIONS.md:D-032",
    "DECISIONS.md:D-033",
    "DECISIONS.md:D-034",
    "SECURITY_BOUNDARIES.md"
  ],
  "assumptions": [
    "A pilot Windows alapú belső kiszolgálón futhat.",
    "Az Entra és SharePoint adminisztrátori beállításokat jogosult ember végzi."
  ],
  "confidence": "high",
  "proposed_changes": [
    "SQLite WAL többfelhasználós tárolás",
    "párhuzamos módosítás elleni állapotvédelem",
    "csatolmány- és append-only auditnapló",
    "JSONL runtime idempotens migráció",
    "konzisztens, hash-ellenőrzött pilotmentés",
    "fail-closed Entra/RBAC/SharePoint konfiguráció",
    "telepítési, adminisztrátori, backup és UAT csomag"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW + G2_SECURITY_LEGAL + G3_PRODUCTION_CHANGE",
  "forbidden_automatic_actions": [
    "publish_network_service",
    "enable_authentication",
    "grant_sharepoint_permission",
    "accept_evidence",
    "close_action",
    "change_production"
  ]
}
```

## Elkészült

- `src/nis2_harness/pilot_storage.py`: tranzakciós esemény-, csatolmány- és
  audit-tárolás; korábbi runtime átvétele; mentés és ellenőrzés.
- `src/nis2_harness/multiuser_pilot.py`: fail-closed readiness-validátor.
- `config/multiuser_pilot.json`: alapállapotban blokkolt pilotkonfiguráció.
- `config/pilot_role_assignments.example.json`: Gitbe nem kerülő valós
  szerepkiosztás mintája.
- `deploy/windows/`: kapuellenőrző indító és ellenőrzött mentési segéd.
- `MULTIUSER_PILOT_DEPLOYMENT.md`, `BACKUP_RESTORE_RUNBOOK.md` és
  `PILOT_UAT_CHECKLIST.md`: átadási és emberi végrehajtási dokumentáció.
- `DEF-038`: minden adminisztrátori és emberi pótlandó feladat egy helyen.

## Ellenőrzés

- `python -m unittest`: **329 teszt, OK**.
- `python -m nis2_harness validate-multiuser-pilot`: **0 hard error,
  4 szándékos warning** a függő G1/G2/G3 kapuk és a blokkolt publikálás
  miatt.
- `git diff --check`: **OK**.
- A konkurenciateszt igazolja, hogy két azonos kiinduló állapotú írásból
  csak az egyik sikeres.
- A mentésteszt ellenőrzi a ZIP útvonalait, fájlméretét, SHA-256 értékeit és
  az SQLite `integrity_check` eredményét.

## Nyitott kockázat és emberi döntés

A fejlesztési előkészítés kész, de ettől a portál még nem adható oda
hálózaton felhasználóknak. Ehhez belső szerver, üzemeltető, HTTPS,
Entra-appregisztráció, támogatott auth-könyvtár, név szerinti
szerepkiosztás, legkisebb SharePoint-jog, G1/G2/G3 jóváhagyás és a 16 pontos
UAT emberi végrehajtása szükséges. Valós bejelentkezés, Graph-token,
SharePoint-feltöltés vagy deploy nem történt.
