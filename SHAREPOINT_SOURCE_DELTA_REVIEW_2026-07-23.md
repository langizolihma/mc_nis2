# SharePoint-forráseltérések vizsgálata – 2026-07-23

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-001", "SRC-002", "SRC-008", "SP-DELTA-003", "SP-DELTA-004", "SP-DELTA-005"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "keep SRC-008 as canonical audit report",
    "keep SRC-002 as historical archive",
    "exclude unsigned duplicate plan, blank template and personal camera record from automatic evidence intake"
  ],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["accept_evidence", "submit_external", "close_action"]
}
```

## Miért készült ez a vizsgálat?

A `Dokumentumok Váraljai Csabától` SharePoint-mappában 187 fájl volt elérhető, míg a 2026-07-20-i helyi vizsgálati készlet 182 fájlt tartalmazott. Az öt eltérést külön ellenőriztük, hogy új bizonyíték, másolat, sablon vagy fokozottan védendő irat került-e a forrásmappába.

## Eredmény hétköznapi nyelven

Az öt eltérésből kettő már ismert auditjelentés, egy pedig ugyanannak az audittervnek az aláíratlan változata. A negyedik egy kitöltetlen kérdőívsablon, az ötödik pedig személy- és járműazonosító adatokat tartalmazó kameravizsgálati irat.

Három hivatalos vagy történetileg fontos dokumentum rendezett SharePoint-példánya létrejött. A többi három fájlt nem másoltuk automatikusan az evidenciatárba, mert vagy gyengébb/üres változat, vagy előzetes jogi és adatvédelmi döntést igényel.

## Tételes besorolás

| Azonosító | Dokumentum jellege | Döntés | Indok |
|---|---|---|---|
| SRC-001 | Aláírt hatósági döntés | Rendezett példány készült az `00_AUTHORITY/A-002` mappában | Elsődleges hatósági forrás. A másolat mérete megegyezik a forráséval. Nem helyettesíti a hiányzó címzetti kézbesítési igazolást. |
| SRC-008 | Aláírt, hatósághoz beadott auditjelentés | Kanonikus példány készült az `01_AUDIT_SOURCE/A-035` mappában | A D-025 szerinti irányadó auditjelentés. Az A-035 végleges lezárásához még G2 reviewer-rekord kell. |
| SRC-002 | Korábbi auditjelentés | Történeti példány készült a `99_ARCHIVE/A-035` mappában | Megőrzendő előzmény, de az SRC-008 felülírja mint irányadó forrást. Az elkülönített tárolás csökkenti a verziótévesztés kockázatát. |
| SP-DELTA-003 | Aláíratlan auditterv | Nem került az evidenciatárba | Az aláírt változat rendelkezésre áll, ezért ez gyengébb, könnyen összetéveszthető munkapéldány. Forráshelyen megőrizhető. |
| SP-DELTA-004 | Kameravizsgálati PDF személy- és járműazonosító adatokkal | Nem került az evidenciatárba | Lehet fizikai biztonsági háttéranyag, de a célhoz kötöttséget, adatminimalizálást, megőrzést és hozzáférést előbb G2 jogi/IBF review-n kell eldönteni. |
| SP-DELTA-005 | Kitöltetlen kontrolltestreszabási kérdőívsablon | Nem került az evidenciatárba | A kitöltött változat már EV-VC-017-ként nyilvántartott; az üres sablon nem bizonyít végrehajtott tevékenységet. |

## Létrehozott SharePoint-példányok

| Forrás | Célhely | Ellenőrzött méret |
|---|---|---:|
| SRC-001 | `NIS2_EVIDENCE/00_AUTHORITY/A-002/SRC-001__A-002__SIGNED-AUTHORITY-DECISION__v01__20260626.pdf` | 653 133 bájt |
| SRC-008 | `NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035/SRC-008__A-035__SIGNED-SUBMITTED-AUDIT-REPORT__v01__20260605.pdf` | 3 733 008 bájt |
| SRC-002 | `NIS2_EVIDENCE/99_ARCHIVE/A-035/SRC-002__A-035__HISTORICAL-AUDIT-REPORT__v01__20260504.pdf` | 4 975 703 bájt |

A pontos SharePoint-URL-ek a `data/source_register.json` fájlban szerepelnek. A másolás nem változtatta meg a forrásfájlokat, és önmagában nem jelent evidenciaelfogadást.

## Hátralévő emberi feladatok

1. Lángi Zoltán vagy a kijelölt G2 reviewer rögzítse az SRC-008 D-025 szerinti elfogadását.
2. A jogi/IBF reviewer döntsön a kameravizsgálati irat szükségességéről, minimálisan megtartandó adattartalmáról, hozzáféréséről és megőrzési idejéről.
3. A SharePoint evidenciatár tulajdonosi, jogosultsági, verziózási, naplózási, mentési és visszaállítási kontrolljait a DEF-035 szerint igazolni kell.
