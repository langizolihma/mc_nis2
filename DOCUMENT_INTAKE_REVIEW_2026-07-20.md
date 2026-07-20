# Váraljai-dokumentumcsomag evidenciaátvételi feljegyzése

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["INTAKE-VC-20260720", "data/evidence_register.csv", "DEFERRED_EVIDENCE_LOG.md:DEF-034"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["human review", "protected evidence-store placement", "metadata completion"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["accept_evidence", "close_action", "submit_external", "change_production"]
}
```

## 1. Eredmény

A 2026. július 20-án átvett dokumentumcsomag 182 forrásállományát olvasási módban leltároztuk és tartalmi csoportba soroltuk. A forrásfájlok változatlanok maradtak. Bináris vagy érzékeny tartalom nem került a Git repositoryba.

| Átvételi osztály | Darab | Jelentés |
|---|---:|---|
| `DIRECT_OR_SAMPLE_CANDIDATE` | 11 | Elsődleges forrás vagy konkrét működési minta lehet; emberi review és védett tár szükséges. |
| `CONDITIONAL_CANDIDATE` | 87 | Érdemi tartalommal rendelkező munkapéldány; aktualitás vagy jóváhagyás igazolandó. |
| `SUPPORTING_ONLY` | 69 | Képernyőkép, fotó, oktatási vagy más támogató anyag; önmagában nem zár kontrollt. |
| `DRAFT_OR_TEMPLATE` | 10 | Kitöltetlen, helyőrzős vagy tervezet jellegű állomány. |
| `SUPERSEDED_OR_OLDER` | 3 | Későbbi változat mellett csak történeti előzmény. |
| `NOT_SEPARATE_DUPLICATE` | 2 | SHA-256 alapján pontos duplikátum; külön evidenciaként nem számolható. |

## 2. Helyi teljes jegyzék

A pontos fájlnevet, relatív elérési utat, méretet, helyi módosítási időt, SHA-256 értéket, átvételi osztályt és duplikátumhivatkozást a forrásmappában maradó `_NIS2_HELYI_ATVETELI_JEGYZEK_20260720.csv` tartalmazza.

- jegyzék SHA-256: `1024a3ed5866575d787bc012368776af05cb9bb6668fcf09e2b673df50a554c2`
- Git-státusz: a jegyzék és a forrásbinarisok ignorált helyi adatok;
- emberi review-státusz: `PENDING`;
- védett evidenciatár URI: még nincs kijelölve.

A helyi jegyzék személyes és műszaki részletet hordozó fájlneveket is tartalmazhat, ezért nem másolható Gitbe és nem tekinthető jóváhagyott védett tárnak.

## 3. Kanonikus evidenciajelöltek

A `data/evidence_register.csv` fájlba 19 magas értékű jelölt került `DRAFT` státusszal:

| Terület | Jelöltek | Kapcsolódó akció |
|---|---:|---|
| EIR- és eszközleltár | 1 | A-011 |
| Kockázatkezelés | 1 | A-039 |
| Beszállítói értékelés és kérdőív | 3 | A-021 |
| Sérülékenységvizsgálat és javítási munkadokumentum | 3 | A-033 |
| Üzletmenet-folytonosság és DRP | 2 | A-017 |
| Incidenskezelési terv | 1 | A-013 |
| Képzési terv és oktatási anyag | 2 | A-014 |
| Hálózati műszaki baseline | 1 | A-022 |
| Szervezeti ábra | 1 | A-036 |
| Önértékelés és kontrolltestreszabás | 2 | A-005 |
| Feladat- és evidencia-munkalista | 1 | A-012 |
| Licencigazolás | 1 | A-029 |

Egyik rekord sem `SUBMITTED` vagy `ACCEPTED`. A hash rögzítése az integritást biztosítja, de nem igazolja a dokumentum helyességét, aktualitását vagy végrehajtását.

## 4. Kötelező emberi feladatok

1. A tárgazda jelölje ki a jóváhagyott védett evidenciatár gyökér-URI-ját és hozzáférési csoportjait.
2. A forrásgazdák azonosítsák a 19 draft tényleges készítőjét, dokumentumgazdáját, EIR-scope-ját és létrehozási dátumát.
3. Lángi Zoltán és szükség szerint Dr. Berta Brigitta hagyja jóvá a bizalmassági és megőrzési besorolást.
4. A szakmai kontrollgazdák ellenőrizzék az EIR-, kockázati, beszállítói, hálózati és önértékelési adatok aktualitását.
5. A szabályzatcsomagnál történjen verzió-, aláírás-, jóváhagyás-, kihirdetés- és megismerési review. Az üres aláíráshely vagy fájlnévben szereplő „aláírásra kész” állapot nem elfogadás.
6. A három rendszerbiztonsági terv helyőrzőit ki kell tölteni és az EIR-ownerrel valamint az IBF-fel jóvá kell hagyatni.
7. A régi képernyőképek mellé 2026-os read-only export vagy owner-attestation szükséges; a fotókhoz helyszín-, dátum- és megfigyelő-metaadat kell.
8. A személyügyi, hálózati, licenc- és sérülékenységi állományok csak a szükséges legkisebb hozzáférési körrel helyezhetők védett tárba.
9. Az elfogadott jelölteknél rögzíteni kell a valós URI-t, benyújtási időt, reviewert, review-időt és döntési hivatkozást; státuszt kizárólag ember módosíthat.

## 5. Ismert minőségi korlátok

- két sérülékenységvizsgálati riportnak pontos duplikátuma van;
- két EIR-munkafüzet cellaértékei azonosak, de a fájlok belső metaadata és hash-e eltér;
- több Word-dokumentumban követett módosítás maradt;
- több szabályzat üres kiadói vagy jóváhagyói helyet tartalmaz;
- három rendszerbiztonsági tervben kitöltetlen helyőrzők vannak;
- az eseménynyilvántartás „incidens” lapja az üres alaplappal azonos;
- az eltérés- és helyettesítőintézkedés-melléklet nincs érdemben kitöltve;
- egy dokumentumkezelésinek nevezett fájl belső címe más szabályzattípust jelöl;
- a makrós beszállítói kérdőív makróját nem futtattuk;
- a legtöbb képernyőkép történeti minta és nem 2026-os aktuális állapotigazolás.

## 6. Következtetés

A csomag jelentősen csökkenti az új dokumentumkészítési igényt, de elsősorban review- és bizonyíték-előkészítési input. Az A-011, A-012, A-013, A-014, A-017, A-021, A-022, A-029, A-033, A-036 és A-039 feladatokhoz már van konkrét, hash-sel rögzített draft jelölt. Akció csak védett tárolás és emberi elfogadás után közelíthet `DONE` státuszhoz.
