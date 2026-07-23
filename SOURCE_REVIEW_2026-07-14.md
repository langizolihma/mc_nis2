# Helyi forrás-review – 2026-07-14

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-001:p1-4", "SRC-002:p1-386", "SRC-007:embedded-email-2026-06-26", "SRC-008:p1-388"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "keep receipt evidence warning open",
    "keep G2/G4 deadline review warning open",
    "keep audit source version conflict open"
  ],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["accept_evidence", "submit_external", "close_action"]
}
```

## Vizsgált helyi források

| Forrás | Fájl | SHA-256 | Vizsgálat |
|---|---|---|---|
| SRC-001 | `06-26-Audit_elrendelese_es_kapcsolodo_intezkedesek_20260626_06512779_alairt.pdf` | `9ecc9ac1761dc9a02c61a8b015b83b215312053c76194f088bea8ee89e1109f3` | 4 oldal; metaadat-, teljes szöveg- és vizuális oldalellenőrzés |
| SRC-002 | `ALVERAD_Audit_metALCOM Zrt._20260504_jelentes.pdf` | `f0d48aa53c07330d5a9088aec5479ca1c1675c5ec33d4a0726df76d77588f5a6` | 386 oldal; metaadat-, teljes dátum/verziókeresés és borító-vizuálellenőrzés |
| SRC-007 | `Re Cégkapura érkezett.msg` | `007ac14c724f4293e662d7580c952c14b52035db76f67a392bbc3d050a348a9d` | Outlook read-only metaadat- és levéllánc-vizsgálat |
| SRC-008 | `Audit_Cert_metLACOM Zrt._20260603_signed.pdf` | `c347dc3139dd433ace098b6145f1ea5d043614dcfcbf7ed46f71e1b405c5058f` | 388 oldal; teljes szöveg-, oldalankénti verzió- és célzott vizuális/aláírásstruktúra-vizsgálat |

Az eredeti PDF-ek a Gitből kizárt `alapadatok/` könyvtárban maradtak. A review nem módosította őket.

## Megállapítások

### Kézbesítési evidencia

Az SRC-001 első oldalán elektronikus aláírási időpont látható: **2026-06-26 07:46:54**. A PDF metaadata szerint a módosítás időpontja 2026-06-26 06:51:27. Ezek a hatósági dokumentum kiadmányozására/aláírására utalnak, nem tartalmaznak címzetti átvételi vagy kézbesítési igazolást. A helyi fájlleltárban külön kézbesítési igazolás nem található.

Az SRC-007 legkorábbi beágyazott üzenete **2026. június 26. 12:16** időponttal, `Cégkapura érkezett` tárggyal szerepel; szövege a cégkapus érkezést jelzi, és a hatósági határozat PDF-jét csatolmányként nevezi meg. Ez belső levelezési alátámasztás, nem a cégkapu által kiállított kézbesítési bizonylat.

**Következtetés:** a `receipt_date = 2026-06-26` a D-022 alapján elfogadott projektbaseline, amelyet az SRC-007 érdemben alátámaszt. A `receipt_evidence_reference` warning azonban nem zárható le, mert sem az aláírt határozat, sem a belső levelezés nem elsődleges címzetti kézbesítési igazolás.

### G2/G4 határidő-review

Az SRC-001 1. oldala a kézhezvételtől számított 90 napos cselekvésiterv-kötelezettséget, a 2. oldal a terv minimális tartalmát rögzíti. A repository számítása 2026-06-26 + 90 naptári nap = 2026-09-24. A helyi fájlok között nem található külön IBF/jogi G2 és külső benyújtási G4 jóváhagyási rekord.

**Következtetés:** a számítás reprodukálható, de a `deadline_review_status` nem állítható jóváhagyottra a kijelölt emberi review nélkül.

### Auditjelentés-verziókonfliktus – feloldva 2026-07-15

- Az SRC-001 1. oldala **2026.06.05. napján kelt auditjelentésre** hivatkozik.
- Az elérhető SRC-002 borítója **Budapest, 2026. május 4.** dátumot tartalmaz.
- Az SRC-002 PDF létrehozási és módosítási metaadata 2026-05-04 11:49:30.
- Az SRC-002 nem tartalmaz PDF-formmezőt vagy beágyazott mellékletet.
- A teljes 386 oldalas szövegkeresés nem talált 2026-06-05-i dátumot vagy a későbbi kiadást igazoló verzió-/aláírási rekordot.

2026-07-15-én bekerült az SRC-008, amelyet a projektgazda a hatóság felé beadott példányként azonosított. A fájl borítója, metaadata és aláírásmezője 2026.06.05-i. Az első 386 oldal összevetése 381 pontos, lábléc-semlegesített szövegegyezést adott; a fennmaradó öt oldal eltérése dátum- és tördelési változás, megváltozott auditmegállapítás nélkül. A 387–388. oldal magyar és angol auditigazolás.

**Következtetés:** a D-025 alapján az SRC-008 a kanonikus auditjelentés, az SRC-002 történeti előzmény. Az A-035 forrásverzió-konfliktus feloldható. A PDF aláírásstruktúrája jelen van, és a projektgazda 2026-07-15-én az aláírást emberi PDF-megjelenítőben érvényesnek erősítette meg; automatizált tanúsítványlánc-validáció külön nem történt.

## Szükséges emberi intézkedések

1. A D-022 szerinti emberi elfogadást és az SRC-007 belső alátámasztását tartsák fenn a hiányzó elsődleges kézbesítési igazolás egyértelmű jelölésével.
2. Az IBF/jogi reviewer és a külső benyújtás jóváhagyója írja alá a 2026-09-24-i határidő G2/G4 felülvizsgálatára előkészített nyilatkozatot.
3. Az SRC-008 D-025 szerinti G2 emberi review-ját rögzítsék; külön auditor-megerősítési levél már nem szükséges.

## SharePoint-kiegészítés – 2026-07-23

Az SRC-001, SRC-002 és SRC-008 rendezett, védett SharePoint-példánya létrejött, és a pontos `internal_uri` bekerült a `data/source_register.json` nyilvántartásba.

- SRC-001: `NIS2_EVIDENCE/00_AUTHORITY/A-002`
- SRC-008: `NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035`
- SRC-002: `NIS2_EVIDENCE/99_ARCHIVE/A-035`

Az SRC-002 külön archív mappába került, ezért nem téveszthető össze a kanonikus SRC-008 jelentéssel. A tárhivatkozások megléte nem jelent evidenciaelfogadást: az A-035 lezárásához továbbra is szükséges a G2 reviewer D-025-höz kapcsolt elfogadási rekordja.
