# Projektirányítási RACI és szerepkijelölési baseline

```json
{
  "status": "HUMAN_APPROVED_PROCESS_BASELINE",
  "agent_role": "governance_recorder",
  "source_refs": ["DECISIONS.md:D-027", "data/actions.csv:A-001", "data/actions.csv:A-036"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["accept_evidence", "close_action", "submit_external", "change_production", "purchase"]
}
```

## Jóváhagyott folyamatszerepek

| Terület | Kijelölt személy | Jogviszony / pozíció | RACI-szerep | Kontrollkorlát |
|---|---|---|---|---|
| Elektronikus információs rendszer biztonságáért felelős személy (IBF) | Lángi Zoltán | metALCOM Zrt. igazgatósági tag, TBT biztonsági vezető | Accountable / szakmai felügyelet | A jogszabályi alkalmasság és a formális kijelölés evidenciája pótlandó. Saját maga által készített vagy ellenőrzött evidencia egyedüli elfogadója nem lehet. |
| Jogi reviewer | Dr. Berta Brigitta | metALCOM Zrt. munkavállaló, jogász | Consulted / G2 jogi review | Saját készítésű jogi dokumentumánál külön vezetői jóváhagyás szükséges. |
| Projektvezető | Kóczán Mónika | metALCOM Zrt. munkavállaló, felsővezető | Responsible / koordináció | A projektvezetői szerep nem jelenti automatikusan a vezetői szponzori szerepet. |
| Infrastruktúra és incidenskezelés – technikai végrehajtó | Kollár Csaba | Serversystem Kft., szerződéses partner | Responsible / technikai végrehajtás | Nem lehet egyedüli elszámoltatható kontrollgazda; belső szerződés- és kontrollgazda kijelölése szükséges. |
| HR-kontrollgazda | Koncz Erika | metALCOM Zrt. munkavállaló, HR-vezető | Accountable / Responsible | HR- és személyi biztonsági kontrollok szakmai gazdája. |
| Fizikai védelmi kontrollgazda | Német Péter | metALCOM Zrt. munkavállaló, telephelyi és logisztikai vezető | Accountable / Responsible | Fizikai és környezeti védelmi kontrollok szakmai gazdája. |

## Még kijelölendő vagy igazolandó

1. **Vezetői szponzor:** név szerint még nincs megadva; a projektvezetőből nem következtethető automatikusan.
2. **Belső infrastruktúra- és incidenskezelési kontrollgazda:** olyan metALCOM-vezető vagy munkavállaló szükséges, aki jogosult a Serversystem Kft. teljesítését számon kérni, intézkedést elrendelni és a technikai evidenciát elfogadásra előterjeszteni.
3. **IBF alkalmassági jogalap:** a metALCOM Kiberbiztonsági tv. 1. § (1) szerinti besorolási jogcímét hatósági vagy vállalati jogi rekordból meg kell erősíteni.
4. **IBF alkalmassági evidencia:** a besorolási jogcímtől függően felsőfokú végzettség, elfogadott szakképzettség vagy a jogszabály szerinti szakmai tapasztalat igazolása, továbbá a továbbképzési kötelezettség nyilvántartása szükséges. A személyes okirat nem kerülhet Gitbe; csak védett URI, hash és reviewer-rekord.
5. **Formális iratok:** aláírt IBF-kijelölés, feladat- és hatáskör, helyettesítés, kihirdetési nyom, aláírt RACI és – ha alkalmazandó – hatósági bejelentési/nyilvántartási rekord.
6. **Beszállítói kontrollok:** a Serversystem Kft.-vel fennálló szerződésben vagy kiegészítésében ellenőrizendő az incidensjelzési határidő, elérhetőség, napló- és evidenciaszolgáltatás, hozzáférés, titoktartás, helyettesítés és auditálhatóság.

## Státuszértelmezés

Ez a dokumentum a 2026-07-15-i emberi utasítás alapján a projekt további tervezéséhez használható szerepkiosztási baseline. Nem helyettesíti az aláírt kinevezést, a munkaköri vagy szerződéses felhatalmazást, a hatósági bejelentést, illetve az alkalmasságot igazoló dokumentumokat. Emiatt az A-001 és A-036 akció `IN_PROGRESS`, nem `DONE`.
