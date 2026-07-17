# A-018 – naplózás és felügyelet minimumterv

## Cél és korlát

Az A-018 célja annak bizonyíthatóvá tétele, hogy a lényeges biztonsági és működési események naplózhatók, a napló tartalma használható, a tárkapacitás és megőrzés tervezett, a naplózási hibák riasztanak, és napi/heti emberi review történik.

A mostani csomag követelmény- és adatfelvételi keret. Nem állítja, hogy bármely konkrét rendszer naplózása működik. Nem kapcsolódik éles forráshoz, nem aktivál riasztást és nem továbbít logot külső szolgáltatásba.

## Minimum forráskategóriák

A tíz kategória az identitás- és privilegizált eseményektől az endpoint-, szerver-, hálózati-, e-mail-, üzleti alkalmazás-, backup- és virtualizációs/storage eseményekig biztosít induló lefedettséget. Minden kategóriához embernek kell kijelölnie:

- a konkrét forrásrendszert és gazdáját;
- az érintett EIR-eket;
- a jóváhagyott read-only adatfelvételi módszert;
- a mintalog védett URI-ját és SHA-256 értékét;
- a forrás megfelelőségét elfogadó reviewert.

A nyers log Gitbe nem kerülhet.

## Tartalom és retention

Minden naplóbejegyzés minimumkövetelménye: időzónás időpont, forrás, alany/végrehajtó, eseménytípus, eredmény és korrelációs vagy rekordazonosító. A `SECURITY_CRITICAL`, `OPERATIONAL` és `DIAGNOSTIC` megőrzési osztály napértéke szándékosan `TBD-HUMAN`: jogi/IBF döntés, üzleti igény, forráskapacitás és védett tárolási költség nélkül nem található ki.

## Hibariasztás és teszt

Az alábbi öt hibát kell legalább észlelni és emberhez irányítani:

1. egy naplóforrás elnémul;
2. a gyűjtés meghibásodik;
3. a tárkapacitás küszöböt ér el;
4. az időszinkronizáció hibás;
5. a napló törlésének vagy manipulációjának jele észlelhető.

A tesztet előre jóváhagyott, nem destruktív módszerrel kell végrehajtani. Riasztás beállítása vagy éles konfigurációváltozás G3-köteles; érzékeny log kezelése G2-köteles.

## Napi és heti review

A napi review a kritikus riasztásokra, forráskiesésre, privilegizált/sikertelen belépésekre, védelmi változásra, backup- és kapacitáshibára fókuszál. A heti review a lefedettséget, trendet, retentiont, kivételeket, ticketeket és a vezetői összefoglalót vizsgálja.

Minden futás eredménye lehet `NO_EXCEPTION`, `EXCEPTION_RAISED` vagy `INCOMPLETE`. Az AI később összefoglalót és ticket-javaslatot készíthet, de a találat elfogadása, incidensminősítés és akciólezárás emberi döntés marad.

Az összes végrehajtási feladat a `DEFERRED_EVIDENCE_LOG.md` DEF-021 tétele alatt található.
