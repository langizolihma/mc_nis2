---
version: "0.3"
status: DRAFT_FOR_APPROVAL
updated: "2026-07-14"
---

# Termékfüggetlen evidenciatárolási szabály

## 1. Cél

A NIS2-helyreállítás során keletkező bizonyítékok megőrzése konkrét dokumentumkezelő termék nélkül, a meglévő vállalati infrastruktúra használatával.

## 2. Alapértelmezett tárolási modell

- **Privát Git:** kód, konfigurációs sémák, döntések, handoffok, szöveges szabályzattervezetek, CSV/JSON regiszterek, hash-manifeszt.
- **Védett evidenciatár:** meglévő SharePoint dokumentumtár vagy védett hálózati fájlmegosztás az eredeti és bináris bizonyítékokhoz.
- **Hivatalos benyújtás:** ember által jóváhagyott, lezárt PDF vagy a hatóság által elfogadott formátum.

## 3. Kötelező kontrollok a védett evidenciatárhoz

1. szerepköralapú hozzáférés;
2. név szerinti tulajdonos és reviewer;
3. napi mentés és dokumentált visszaállítási próba;
4. verziózás vagy írásvédett lezárt példány;
5. naplózható létrehozás, módosítás és törlés;
6. egységes mappastruktúra és fájlnév;
7. SHA-256 integritásellenőrzés;
8. megőrzési idő és selejtezési jóváhagyás;
9. üzletmenet-folytonossági hozzáférés;
10. negyedéves teljességi és hozzáférési felülvizsgálat.

## 4. Minimális mappastruktúra

```text
NIS2_EVIDENCE/
  00_AUTHORITY/
  01_AUDIT_SOURCE/
  02_GOVERNANCE/
  03_POLICIES/
  04_TECHNICAL/
    EIR-VEZETESTAMOGATO/
    EIR-IRODAI/
    EIR-TERMELES/
  05_PHYSICAL/
  06_TRAINING/
  07_INCIDENTS_TESTS/
  08_BACKUP_RESTORE/
  09_SUPPLIERS/
  10_QUARTERLY_REPORTS/
  99_ARCHIVE/
```

## 5. Kötelező evidencia-metaadat

`evidence_id`, `action_id`, `control_ref`, `eir`, `title`, `source_type`, `internal_uri`, `sha256`, `created_at`, `created_by`, `reviewed_by`, `review_status`, `retention_class`, `confidentiality`, `notes`.

## 6. Tiltások

- Titok, jelszó, token vagy privát kulcs nem kerülhet Gitbe.
- Az eredeti auditjelentés és érzékeny bináris bizonyíték nem kerülhet Gitbe.
- AI nem fogadhat el vagy törölhet evidenciát.
- Elfogadott fájl felülírása helyett új verziót és új hash-t kell rögzíteni.

## 7. Kiválasztási sorrend

1. meglévő SharePoint tár alkalmasságának ellenőrzése;
2. meglévő védett fájlmegosztás alkalmasságának ellenőrzése;
3. hiányzó kontrollok B0/B1 szintű pótlása;
4. új platform csak dokumentált elégtelenség és G5 jóváhagyás esetén.
