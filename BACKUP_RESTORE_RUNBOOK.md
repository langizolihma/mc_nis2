# Portálpilot mentési és visszaállítási eljárás

## Mentés

1. Hozz létre csak az üzemeltető által írható, a portálszervertől lehetőleg
   elkülönített mentési célkönyvtárat.
2. Futtasd:

   ```powershell
   .\deploy\windows\Backup-Nis2Pilot.ps1 -OutputDirectory D:\NIS2PilotBackup
   ```

3. A parancs konzisztens SQLite-snapshotot készít, becsomagolja a
   csatolmányokat, majd ellenőrzi az összes fájl méretét, SHA-256 értékét és
   az adatbázis integritását.
4. Rögzítsd a ZIP nevét, SHA-256 értékét, időpontját, kezelőjét és védett
   tárolási helyét.

## Visszaállítási próba

A repository jelenleg szándékosan nem tartalmaz automatikus, felülíró
restore-parancsot. A visszaállítás adatvesztést okozhat, ezért csak
elkülönített próbakönyvtárban és jóváhagyott change alatt végezhető.

1. Állítsd le a próba-portált.
2. Ellenőrizd a mentést:

   ```powershell
   python -m nis2_harness verify-pilot-backup --input D:\NIS2PilotBackup\mentes.zip
   ```

3. Bontsd ki új, üres, elkülönített könyvtárba.
4. A `pilot.db` fájlt és az `attachments/` könyvtárat másold az elkülönített
   próba `portal_runtime/` könyvtárába.
5. Indítsd a portált másik loopback porton, és ellenőrizd a feladatok,
   események és csatolmányok darabszámát, letölthetőségét és hash-eit.
6. Rögzítsd a kezdő- és záróidőt, eredményt, eltérést, reviewert és az
   evidencia védett URI-ját.
7. A próbakönyvtár törlése csak a retention- és change-szabály szerint
   történhet.
