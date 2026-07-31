# Emberifeladat-kezelési pilot

## Mit old meg?

A résztvevőnek nem kell a teljes akcióregisztert, a Git repositoryt vagy
hosszú megfelelőségi dokumentumokat átnéznie. Az **Az én munkám** nézet
megmutatja:

- mi a feladat hétköznapi nyelven;
- ki végzi és ki review-zza;
- milyen három lépést kell elvégezni;
- melyik Word-munkalapot lehet letölteni és kinyomtatni;
- hol csatolható a kitöltött vagy aláírt munkapéldány;
- hol nyitható meg a kapcsolódó SharePoint-dokumentum;
- mi a következő engedélyezett munkalépés.

## Pilotkör

Az első kör öt valós W1 feladatot tartalmaz:

1. `DEF-002` – kanonikus auditjelentés szakmai elfogadása;
2. `DEF-004` – az angol auditigazolás olvashatósági ellenőrzése;
3. `DEF-005` – formális RACI- és IBF-kijelölési csomag;
4. `DEF-006` – IBF-alkalmasság jogi review-ja;
5. `DEF-007` – belső infrastruktúra-/incidenskontroll-gazda kijelölése.

## Életciklus

```text
Teendő
  ↓ munka megkezdése
Folyamatban
  ├─ előrehaladás mentése → Folyamatban
  └─ evidencia előterjesztése → Review-ra vár
                                      ↓ visszaküldés
                                  Javítandó
                                      ↓ újrakezdés
                                  Folyamatban
```

Review-ra előterjesztéshez a védett NIS2 SharePoint-hivatkozás és a fájl
SHA-256 hash-e kötelező. A reviewer elfogadása szándékosan nincs ebben a
hitelesítetlen pilotban.

## Hogyan próbálható ki?

1. Indítsd el: `python -m nis2_harness serve-portal`.
2. Nyisd meg: `http://127.0.0.1:8000`.
3. Válaszd az **Az én munkám** menüt.
4. Nyisd meg az első feladatot, rögzítsd a munka megkezdését.
5. A feladatkártyáról töltsd le a Word-munkalapot, töltsd ki, szükség
   szerint nyomtasd ki és írasd alá.
6. A **Fájl helyi csatolása és hash készítése** gombbal csatold a kitöltött
   vagy beszkennelt példányt. A portál kiszámítja az SHA-256 értéket.
7. Nyisd meg a feladathoz tartozó védett SharePoint-célt, töltsd fel oda a
   végleges fájlt, majd másold vissza a tényleges fájlhivatkozást.
8. SharePoint URI és SHA-256 megadásával terjeszd review-ra.

A munkanyom a Gitből kizárt
`portal_runtime/task_workflow_events.jsonl` fájlba kerül.
A helyi csatolmányok a szintén Gitből kizárt
`portal_runtime/attachments/` könyvtárba kerülnek.

## Elérhető nyomtatható munkalapok

- `DEF-002_kanonikus_auditjelentes_review.docx`;
- `DEF-004_auditigazolas_olvashatosagi_ellenorzes.docx`;
- `DEF-005_RACI_es_IBF_kijelolesi_csomag.docx`;
- `DEF-006_IBF_alkalmassagi_jogi_review.docx`;
- `DEF-007_kontrollgazda_es_partner_review.docx`.

Ezek üres munkasablonok, ezért Gitben tarthatók. A kitöltött, aláírt és
személyes vagy érzékeny adatot tartalmazó példányok nem kerülhetnek Gitbe.

## Mit kell mérni a pilot során?

- a feladat megértéséhez szükséges idő;
- a feladat rögzítéséhez szükséges idő;
- hiányos vagy visszaküldött előterjesztések száma;
- szükséges segítségkérések száma;
- résztvevőnkénti szubjektív használhatóság 1–5 skálán.

## Biztonsági korlát

Az események hash-láncolt, append-only munkatervezetek, de a rögzítő neve
még nem hitelesített. Ezért a pilot:

- nem fogad el evidenciát;
- nem zár le emberi feladatot vagy akciót;
- nem ír vissza SharePointba;
- nem hajt végre külső benyújtást, éles változtatást vagy költést.

Formális használat előtt Entra-bejelentkezés, NIS2 SharePoint-hozzáférés,
szerveroldali RBAC, TLS, G2 architektúra-review és G3 élesítési döntés
szükséges.
