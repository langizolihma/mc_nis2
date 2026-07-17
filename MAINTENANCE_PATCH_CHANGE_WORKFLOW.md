# A-019 – baseline-, patch-, karbantartási- és változáskezelési workflow

## Cél és állapot

Az A-019 egységes, auditálható folyamatot készít a konfigurációs baseline-ok, patchek, karbantartások és egyéb éles változások tervezésére, jóváhagyására, végrehajtására és visszaellenőrzésére.

A csomag kizárólag workflow. Nem olvas éles konfigurációt, nem telepít frissítést, nem nyit távoli karbantartási kapcsolatot és nem hajt végre változtatást.

## Kötelező életciklus

1. Kérés és üzleti/műszaki indoklás.
2. Kockázat-, hatás-, függőség- és kieséselemzés.
3. Rendszer- és üzleti owner jóváhagyása.
4. G3 változáskezelési jóváhagyás.
5. Használható backup és rollback bizonyítása.
6. Jóváhagyott karbantartási ablak és értesítési terv.
7. Végrehajtás jogosult emberrel; eltérésnél stop és rollback.
8. Pre/post ellenőrzés, szolgáltatás- és biztonsági teszt.
9. Evidencia review védett URI-val és SHA-256-tal.
10. Emberi lezárás vagy kivétel/hiba/rollback továbbvezetése.

## Naptár és workstreamek

A négy workstream gazdája és scope-ja emberileg töltendő ki:

- konfigurációs baseline rendszeres és eseményvezérelt review-ja;
- patch-inventory, alkalmazhatóság, pilot/teszt, telepítés és kivétel;
- tervszerű és rendkívüli karbantartás;
- teljes változáskezelési workflow.

A naptárban minden elemhez időzónás ablak, owner, érintett scope és döntési hivatkozás szükséges. A repository nem találhat ki karbantartási ablakot.

## Kivétel és rollback

Kivétel csak dokumentált indokkal, kockázattal, kompenzáló kontrollal, ownerrel, approverrel, lejárattal és review-státusszal létezhet. Automatikus és lejárat nélküli kivétel tilos.

A rollback nem egy üres szövegmező: végrehajtás előtt terv, előfeltétel, backup-bizonyíték és lehetőség szerint teszt vagy korábbi végrehajtási bizonyíték szükséges. Sikertelen post-validation esetén a jogosult ember dönt a rollbackről és az incidens-/problémafolyamatról.

Az emberi feladatokat a `DEFERRED_EVIDENCE_LOG.md` DEF-022 tétele tartalmazza.
