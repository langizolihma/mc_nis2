# Backup és restore-teszt előkészítő csomag – A-017

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-008:p158,163-164,247,252-253,337,342-343", "data/inventory_register.json"],
  "assumptions": ["A mentések tényleges állapota és helyreállíthatósága még nem igazolt."],
  "confidence": "high",
  "proposed_changes": ["öt EIR backup scope", "RPO/RTO mátrix", "izolált restore teszt", "evidencia- és review-sablon"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Mire szolgál?

A csomag nem azt állítja, hogy a mentések rendben vannak. Azt készíti elő, hogy az öt EIR-re egységesen meg lehessen határozni:

- mely rendszerek és adatok tartoznak a mentésbe;
- mekkora adatvesztés fogadható el (RPO);
- mennyi idő alatt kell helyreállni (RTO);
- milyen mentési mód, megőrzés és elkülönített másolat szükséges;
- melyik kritikus mintán, milyen izolált környezetben próbálható ki biztonságosan a visszaállítás.

## Kötelező emberi input

Mind az öt EIR-nél ki kell jelölni az üzleti ownert, a rendszerlistát, az RPO/RTO célokat, a mentési és retention szabályt, valamint az elkülönített/offsite másolat elvárását. Az A-011 leltár kitöltése ezért közvetlen előfeltétel.

## Restore-teszt biztonsági modell

A teszt jelenleg `BLOCKED_PENDING_G3`. Kizárólag jóváhagyott, izolált vagy alternatív célhelyre tervezhető. Éles rendszer felülírása, adat vagy mentés törlése, illetve éles hálózati kapcsolat alapértelmezetten tiltott.

A végrehajtás előtt szükséges:

1. mintarendszer és izolált célkörnyezet kijelölése;
2. üzleti owner, rendszerowner és change approver G3 döntése;
3. adatminősítés és szükség esetén G2 review;
4. stop feltételek, időablak, kapacitás és rollback ellenőrzése;
5. jegyzőkönyv és evidenciahely előkészítése.

## Elvárt evidencia

Backup- és restore-job log, visszaállított objektum, integritásellenőrzés, eltelt idő, RPO/RTO összevetés, cleanup rekord és emberi review. Az eredeti logok védett tárba kerülnek; a Git csak metaadatot, URI-t és SHA-256 hash-t tartalmaz.

## Gépi ellenőrzés

```powershell
python -m nis2_harness validate-backup-restore --plan data\backup_restore_plan.json
```
