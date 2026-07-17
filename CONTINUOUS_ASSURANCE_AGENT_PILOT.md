# Folyamatos auditfelkészültségi ügynök – helyi pilot

Az A-042 pilot egy determinisztikus, Python standard library-alapú, hálózat nélküli feldolgozó. A bemeneti metaadatból javaslatot, emberi jóváhagyási sort, forrásnyomot és futási auditlogot készít.

## Amit a pilot már bizonyít

- csak allowlistelt, szintetikus és nem érzékeny inputot fogad;
- stabil sorrendben, reprodukálható azonosítókkal állít elő javaslatokat;
- minden javaslat `PROPOSAL` és `PENDING_HUMAN`;
- forrásreferenciát, confidence-t, feltételezést és szükséges emberi kaput őriz;
- a kill switch bekapcsolva nulla eseményt dolgoz fel;
- hálózat, éles kapcsolat, evidenciaelfogadás, akciózárás, vásárlás, külső benyújtás és éles változtatás tiltott.

## Amit még nem bizonyít

Nincs éles log- vagy nyilvántartáskapcsolat, hitelesítés, belső portálintegráció, védett evidenciatár, tényleges gold-case review vagy mérhető valós emberimunka-csökkenés. A riportban szereplő lépésszám kizárólag szimulált workflow-becslés.

## Helyi futtatás

```powershell
python -m nis2_harness run-continuous-assurance-pilot --config config/continuous_assurance_pilot.json --input tests/fixtures/continuous_assurance_events.json --output generated/continuous_assurance_pilot_output.json
```

Éles forrás csatlakoztatása előtt G1 funkcionális, G2 biztonsági/jogi és G3 pilot/deploy döntés szükséges. A portál csak jóváhagyott API-n és szerepköralapú hozzáféréssel veheti át a proposal/approval-queue rekordokat.
