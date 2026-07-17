# A-029 – licenc-, entitlement- és supportaudit terve

## Cél

Az A-029 célja a tényleges használat, a meglévő szerződéses/licencjogosultság és a gyártói támogatási életciklus összevetése Windows Server, RDS, M365, Defender, virtualizáció és releváns üzleti alkalmazások körében.

A mostani csomag üres adatfelvételi és döntési keret. Nem állít licenchiányt, jogszerűséget, támogatottságot vagy beszerzési szükségletet. Nem lép be gyártói portálra, nem olvas éles rendszert, és nem indít vásárlást.

## Emberi adatgyűjtés

1. A belső infrastruktúra-kontrollgazda kijelöli a scope-ot és az alkalmazásgazdákat.
2. Pénzügy/beszerzés vagy szerződésgazda összegyűjti a szerződéseket, számlákat, licenckimutatásokat és gyártói portál-exportokat a védett tárba.
3. Kollár Csaba és a belső owner jóváhagyott, lehetőleg read-only forrásból rögzíti a telepítési/használati mennyiséget és a licencelési mértékegységet.
4. A reviewer hivatalos gyártói forrás alapján, az ellenőrzés dátumával rögzíti a support-életciklust.
5. A felhasználó-, eszköz-, kulcs-, szerződés- és portálrészletek a védett tárban maradnak; Gitbe csak védett URI, hash és összesített metaadat kerül.

## Költségvédelmi döntési sorrend

Minden eltérésnél először a meglévő entitlement, meglévő kapacitás és a B0 alternatíva vizsgálandó. Fizetős B1–B3 javaslat csak akkor írható le, ha dokumentált:

- a meglévő entitlement és kapacitás;
- a B0 alternatíva;
- a pilot;
- a mérhető acceptance criterion;
- a purchase trigger;
- a halasztás kockázata.

Hiányos csomag státusza `BLOCKED_BY_COST_GATE`. A G5 döntés sem automatikus vásárlás: megrendelést kizárólag jogosult ember végezhet a vállalati beszerzési folyamatban.

## Kimenet

- emberileg review-zott entitlement- és supportmátrix;
- igazolt shortfall/surplus/EOL lista;
- B0/no-action vagy G5-köteles költségdöntési rekord;
- A-016, A-024, A-028 és A-041 részére hivatkozható döntési input.

Az összes pótlási teendőt a `DEFERRED_EVIDENCE_LOG.md` DEF-019 tétele követi.
