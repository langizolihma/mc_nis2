# A-004/A-005 finding- és mapping-review

```json
{
  "status": "PROPOSAL",
  "agent_role": "audit_extractor_and_control_mapper",
  "source_refs": ["SRC-008:p19-381", "data/actions.csv:A-004", "data/actions.csv:A-005"],
  "assumptions": [
    "A családszintű kapcsolat csak keresési segítség, nem bizonyítja a finding kezelését."
  ],
  "confidence": "medium",
  "proposed_changes": [
    "328 rekordos finding-regiszter emberi mintavétele",
    "189 soros control-action-evidence mapping owner review-ja",
    "85 lefedettségpótló kontrollszintű akció szakmai, felelősi és határidő-review-ja"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production"]
}
```

## Elkészült gépi alap

- Forrás: a kanonikus SRC-008 aláírt auditjelentés 19–381. oldala.
- Kivonat: 328 szakasz, környezetenként 82 rekord (`Szervezet`, `Vezetéstámogató`, `Irodai`, `Termelés`).
- Értékelések: 187 kiemelt, 93 kis, 30 elhanyagolható eltérés és 18 megfelelt.
- Minden rekord `machine_unvalidated`, `human_validated=no`; nincs beírt reviewer vagy hallgatólagos jóváhagyás.
- A forrásban felsorolt nyers bizonyítékfájlnevek nem kerültek a Gitben tárolt regiszterbe.

## Strukturális QA és parser-kivétellista

A 19., 21., 113., 202., 292. és 381. oldal helyi képi ellenőrzése megerősítette a négy környezet kezdő- és végpontját, a szakaszfejléceket, az értékelést, a vizsgálati módszert és a feltárt állapot mezőit. Ez technikai QA, nem G1 szakmai review.

| Azonosító | Hiba | Hatás | Kezelés | Állapot |
|---|---|---|---|---|
| PX-001 | A PDF szövegréteg több értékelésben `ű` helyett `û` karaktert adott. | Az enum-validáció hibát jelzett. | Csak az ismert `mértékû` szó normalizálása `mértékű` alakra. | Javítva, újragenerálva |
| PX-002 | Oldalváltásnál a helyi `[[PAGE:n]] n | 388` technikai marker bekerült egyes mezőkbe. | Szennyezett értékelés vagy összefoglaló. | A pontos technikai marker eltávolítása a whitespace-normalizálás előtt. | Javítva, újragenerálva |
| PX-003 | A PDF tördelése szavakon belüli szóközt adhat, például `inform áció`. | Olvashatósági hiba; a tartalmi jelentés jellemzően megmarad. | Nincs automatikus szótári javítás; a G1 reviewer a mintában jelölje és az exception logban rögzítse. | Nyitott |

## Kötelező emberi mintavétel

Pásztor András vagy kijelölt szakmai reviewer hasonlítsa össze legalább az alábbi 20 rekordot a hivatkozott PDF-oldalakkal:

- Szervezet: `F-0001`, `F-0002`, `F-0021`, `F-0041`, `F-0082`.
- Vezetéstámogató: `F-0083`, `F-0084`, `F-0123`, `F-0163`, `F-0164`.
- Irodai: `F-0165`, `F-0166`, `F-0205`, `F-0245`, `F-0246`.
- Termelés: `F-0247`, `F-0248`, `F-0287`, `F-0327`, `F-0328`.

Rekordonként ellenőrizendő: `section_ref`, környezet, kontroll, cím, értékelés, vizsgálati módszer, feltárt állapot és oldalhatár. Hibánál ne csak a mintát javítsák: rögzítsék a hibamintát, keressék meg az összes érintett rekordot, majd futtassák újra a validációt. Csak tényleges összevetés után állítható `human_validated=yes`, név szerinti reviewerrel és Europe/Budapest időzónás ISO-8601 időbélyeggel.

## Mapping-lefedettség

| Kapcsolat | Finding | Jelentés |
|---|---:|---|
| `DIRECT` | 310 | Mind a 310 eltéréshez legalább egy pontos `control_ref` alapú akciójavaslat kapcsolódik. Ez nem jelent megvalósítást vagy lezárást. |
| `FAMILY_ONLY` | 5 | Mind az öt rekord `Megfelelt`; családszintű projektkapcsolatuk megmaradt. |
| `UNMAPPED` | 13 | Mind a tizenhárom rekord `Megfelelt`; javító akció nem szükséges pusztán a mapping teljességéért. |

A 2026-08-18-i lefedettségpótlás 85 új, kontrollszintű `NEW/PROPOSAL` akciót (`A-043`–`A-127`) és 85 pontos mapping-sort adott hozzá. A mapping így 189 sort és mind a 127 akcióhoz legalább egy javasolt sort tartalmaz. A korábbi 85 kontrollszintű és 189 finding-szintű közvetlen hiány gépileg megszűnt. A részletes emberi review-csomag a `COVERAGE_EXPANSION_G1_REVIEW_2026-08-18.md` fájlban található.

Tizenegy korábbi mapping-sorhoz továbbra sem tartozik finding, mert az akció hatóköre (`Infrastruktúra`, illetve `Hálózat-kommunikációs;Biztonsági`) nem azonos a jelentés négy auditált környezetnevével. Ezek: `M-0048`–`M-0054`, `M-0061`, `M-0062`, `M-0070`, `M-0071`. Ez nem adatvesztés, hanem explicit scope-illesztési hiány.

Duplikált `mapping_id` nincs. Egy akció több családhoz vagy kontrollhoz tartozhat, ezért az ismétlődő `action_id` elvárt. A 189 `PROPOSED` mapping-sor csak Lángi Zoltán G1/G2 owner sign-offja után minősíthető jóváhagyottnak. Az új akciók konkrét céldátuma és tényleges kontrollgazdája szintén emberi döntésre vár.

## Jóváhagyási blokk

- Szakmai mintavételt végezte: ____________________
- Mintavétel dátuma és időzónája: ____________________
- Talált kivételek / hibajegyek: ____________________
- Mapping owner review: ____________________
- Döntés: `APPROVED / NEEDS_CHANGES`
- Döntési hivatkozás: ____________________

Aláírás nélkül az A-004 és A-005 állapota `IN_PROGRESS` marad.
