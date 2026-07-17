# Technikai helyreállítási munkacsomagok

Ez a dokumentum az A-023, A-024, A-028, A-033 és A-034 feladatok végrehajtás előtti, proposal-only előkészítését foglalja össze. A gépi nyilvántartás a `data/technical_work_packages.json` fájl.

Az öt csomag közös szabálya, hogy az AI csak tervet, ellenőrzőlistát és döntés-előkészítő anyagot készíthet. Éles lekérdezés, scan, konfigurációmódosítás, VM-mozgatás, konszolidáció, törlés vagy vásárlás nem történt és nem engedélyezett.

Az emberi végrehajtás sorrendje:

1. nevezze meg a belső rendszer-/EIR-ownereket és a pontos scope-ot;
2. gyűjtse be a jóváhagyott read-only exportokat védett tárba, URI-val és SHA-256-tal;
3. végezze el a szakmai G1 review-t, érzékeny adatnál a G2 review-t;
4. bármely teszt vagy változtatás előtt szerezzen G3 jóváhagyást;
5. fizetős opció előtt dokumentálja a hét költséginputot és kérjen G5 döntést;
6. az eredményt, rollbacket és emberi elfogadást rögzítse.

Az `unverified_internal` forráshelyzetű állítások (A-024, A-028) nem válhatnak ténnyé a tényleges export és owner-review nélkül.
