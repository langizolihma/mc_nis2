---
version: "0.5"
status: DRAFT_FOR_APPROVAL
updated: "2026-07-23"
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

Az EIR-en belül szükség szerint az `ACTION-ID` szerinti almappa használható. A struktúra csak taxonómiajavaslat; a tényleges védett gyökér-URI-t és a vállalati csoportokat embernek kell kijelölnie a `config/evidence_store.example.json` alapján.

## 4.1 Jelenlegi SharePoint-megvalósítás

- Jelölt védett gyökér: `https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE`
- Tárhely: a `NIS2 – Belső megfelelőség` SharePoint-webhely `Dokumentumok` dokumentumtára.
- Írási próba: 2026-07-23-án egy ideiglenes tesztmappa létrehozása, visszaolvasása és törlése sikeres volt.
- Migrációs próba: 19 `EV-VC-*` rekordhoz készült névszabály szerinti másolat; a célmappákból visszaolvasott fájlméret minden tételnél egyezett a 2026-07-20-i helyi átvételi jegyzékkel.
- Forrásvédelem: a `Dokumentumok Váraljai Csabától` forrásmappából csak másolat készült; forrásfájl nem lett átnevezve, mozgatva vagy törölve.
- Állapot: a tár és a 19 rekord továbbra is `DRAFT_FOR_APPROVAL` / `DRAFT`. A másolás nem bizonyítja a tartalom helyességét és nem jelent emberi elfogadást.
- Nyitott kapuk: név szerinti store owner és backup owner; szerepkör- és mappaszintű legkisebb jogosultság; verziózás és auditnapló ellenőrzése; backup/restore-próba; retention és bizalmassági G2 döntés; G1 szakmai review; negyedéves hozzáférési és hash-mintavételi review.

### Fájlnévszabály

```text
{EVIDENCE-ID}__{ACTION-ID}__{EIR}__{TYPE}__v{NN}__{YYYYMMDD}.{ext}
```

Példa kizárólag formátumként: `EV-0001__A-017__EIR-IRODAI__RESTORE-TEST__v01__20260715.pdf`.

- az `EVIDENCE-ID` egyedi és új verziónál is változatlan marad, ha ugyanazon bizonyíték új fájlváltozatáról van szó;
- az elfogadott fájl nem írható felül: új fájl, új verzió és új SHA-256 szükséges;
- személynév, jelszó, token, ügyféladat vagy titok nem kerülhet a fájlnévbe;
- az `EIR` és `TYPE` értékekhez később jóváhagyott rövid kódtár készítendő.

## 5. Kötelező evidencia-metaadat

`evidence_id`, `action_id`, `requirement_family`, `control_ref`, `eir`, `title`, `evidence_type`, `source_ref`, `source_page`, `source_confidence`, `assumption`, `internal_uri`, `sha256`, `created_at`, `created_by`, `submitted_at`, `reviewed_at`, `reviewed_by`, `review_status`, `review_decision_ref`, `rejection_reason`, `retention_class`, `confidentiality`, `superseded_by`, `notes`.

A kanonikus metaadatfájl: `data/evidence_register.csv`. Ez csak metaadatot tartalmazhat; eredeti vagy érzékeny evidencia nem kerülhet bele. Minden időbélyeg időzónás ISO-8601 alakú, például `2026-07-15T10:30:00+02:00`.

## 6. Emberi elfogadási workflow

```text
DRAFT
  ↓ készítő feltölti a védett tárba, hash-t és metaadatot rögzít
SUBMITTED
  ├─→ NEEDS_CHANGES ─→ javított DRAFT
  └─→ ACCEPTED
          ↓ új elfogadott verzió készült
       SUPERSEDED
```

| Státusz | Kötelező minimum | Ki állíthatja be |
|---|---|---|
| `DRAFT` | azonosító, akció, forrás, készítő, időbélyeg, besorolási mezők | készítő vagy evidence curator |
| `SUBMITTED` | valós védett URI, SHA-256, benyújtási idő | készítő vagy evidence curator |
| `NEEDS_CHANGES` | reviewer, review-időpont és konkrét visszautasítási ok | emberi reviewer |
| `ACCEPTED` | reviewer, review-időpont, döntési hivatkozás; nincs ellenőrizetlen forrásállapot | emberi reviewer |
| `SUPERSEDED` | minden elfogadási adat és az új evidencia `superseded_by` hivatkozása | emberi reviewer |

Az AI legfeljebb DRAFT-metaadatot és review-javaslatot készíthet. Nem állíthat be `ACCEPTED`, `NEEDS_CHANGES` vagy `SUPERSEDED` státuszt, nem fogadhat el hash nélküli vagy `TBD` URI-jú rekordot, és nem zárhatja le a kapcsolódó akciót.

## 7. Hozzáférési szerepek

| Logikai szerep | Minimumjog | Korlát |
|---|---|---|
| Store owner | jogosultság- és megőrzési döntés | név szerint kijelölendő |
| Administrator | tárhely-adminisztráció | evidencia szakmai elfogadására önmagában nem jogosít |
| Contributor | új fájl/verzió feltöltése, saját draft kezelése | elfogadott fájlt nem írhat felül vagy törölhet |
| Reviewer | olvasás, review és döntési rekord | saját evidencia esetén szerepelválasztási kivétel dokumentálandó |
| Reader/Auditor | csak olvasás | export csak jóváhagyott célra |

Külső partner kizárólag a szükséges mappára, időben korlátozott és név szerinti jogosultságot kaphat. A tényleges csoportnevek, store owner és backup owner `TBD-HUMAN`; ezeket nem találjuk ki.

## 8. Tiltások

- Titok, jelszó, token vagy privát kulcs nem kerülhet Gitbe.
- Az eredeti auditjelentés és érzékeny bináris bizonyíték nem kerülhet Gitbe.
- AI nem fogadhat el vagy törölhet evidenciát.
- Elfogadott fájl felülírása helyett új verziót és új hash-t kell rögzíteni.

## 9. Kiválasztási sorrend

1. meglévő SharePoint tár alkalmasságának ellenőrzése;
2. meglévő védett fájlmegosztás alkalmasságának ellenőrzése;
3. hiányzó kontrollok B0/B1 szintű pótlása;
4. új platform csak dokumentált elégtelenség és G5 jóváhagyás esetén.

## 10. Aktiválási és elfogadási checklist

Az A-003/A-012 csak akkor zárható le, ha az alábbiakhoz tényleges evidencia és emberi G2 review tartozik:

1. védett gyökér-URI és tárhelytípus kijelölve;
2. store owner, backup owner és név szerinti/csoportalapú jogosultságok rögzítve;
3. verziózás, auditnapló és elfogadott fájl felülírásának tiltása igazolva;
4. mentés és legalább egy visszaállítási próba dokumentálva;
5. vállalati megőrzési és bizalmassági taxonómia hivatkozása megadva;
6. legalább egy DRAFT → SUBMITTED → ACCEPTED és egy NEEDS_CHANGES teszteset emberileg végrehajtva;
7. a CSV-regiszter hard hiba nélkül validálható;
8. negyedéves teljességi, hozzáférési és hash-mintavételi review gazdája és üteme jóváhagyva.

## 11. Helyi validáció

```powershell
python -m nis2_harness validate-evidence --evidence data/evidence_register.csv --actions data/actions.csv
```

Az üres induló regiszter warningot ad, mert még nincs benne tényleges evidencia, de nem okoz hard hibát. `ACCEPTED` státusz csak valós URI, érvényes SHA-256 és emberi review-metaadat mellett validálható.
