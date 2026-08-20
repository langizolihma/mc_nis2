# Lejárt NIS2-akciók státusz-egyeztetési lapja

- Állapot dátuma: `2026-07-29`
- Státusz: `PROPOSAL_PENDING_HUMAN_RECONCILIATION`
- A lap kitöltése önmagában nem módosítja az akciók státuszát vagy céldátumát.

## Kitöltési lehetőségek

- `NOT_STARTED` – a munka nem kezdődött el.
- `IN_PROGRESS` – a munka folyamatban van.
- `COMPLETED_EVIDENCE_PENDING` – elkészült, de a bizonyíték vagy reviewer hiányzik.
- `COMPLETED_READY_FOR_REVIEW` – elkészült, védett evidencia és hash rendelkezésre áll.
- `RESCHEDULE_REQUESTED` – új céldátum emberi jóváhagyása szükséges.

## Kötelező korlát

Az egyeztetés eredményét külön, ellenőrzött változtatással lehet átvezetni az `actions.csv` fájlba. Az AI nem zárhat le akciót, nem fogadhat el evidenciát és nem írhat át céldátumot emberi döntési rekord nélkül.
