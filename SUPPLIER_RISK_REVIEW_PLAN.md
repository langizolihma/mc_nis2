# A-021 – Beszállítói kockázati nyilvántartás és review-terv

## Cél

Az A-021 célja, hogy a beszállítók, alvállalkozók és kapcsolódó szolgáltatások kockázata egységesen, visszakereshetően és emberileg jóváhagyva legyen nyilvántartva. A csomag a 19.1 és 19.4 kontrollhoz, valamint az F-0072 és F-0074 auditmegállapításhoz kapcsolódik.

Ez a repository csak módszertant és üres nyilvántartási sémát tartalmaz. Beszállítónév, szerződés, kapcsolattartó, ár, személyes adat vagy tényleges minősítés nem kerül Gitbe.

## Emberi végrehajtási sorrend

1. A beszerzés/szerződésgazda állítsa össze a beszállítói és szerződéses leltárt a védett tárban.
2. Az üzleti és EIR-ownerek jelöljék meg, mely szolgáltatás mely EIR-t és üzleti folyamatot támogatja.
3. A hat kritikalitási dimenziót 0–3 ponttal, indoklással értékeljék.
4. A tíz szerződéses kontrollt `PRESENT`, `PARTIAL`, `MISSING` vagy indokolt `NOT_APPLICABLE` státusszal vizsgálják át.
5. A hiányokhoz emberi kockázati döntés, felelős, határidő és védett evidencia készüljön.
6. Kritikalitás és változási trigger alapján jóváhagyott felülvizsgálati naptár készüljön.
7. Lángi Zoltán vagy kijelölt domain reviewer végezze el a G1 felülvizsgálatot. Szerződésértelmezéshez vagy módosításhoz Dr. Berta Brigitta jogi review-ja szükséges.

## Tiltott automatikus műveletek

- beszállító megkeresése vagy kérdőív kiküldése;
- szerződés feltöltése Gitbe vagy külső AI-szolgáltatásba;
- szerződésmódosítás, költés vagy beszerzés kezdeményezése;
- kockázat automatikus elfogadása;
- beszállító automatikus végleges minősítése.

## Bizonyíték

Az elfogadható csomag legalább a védett szerződéslistára, kérdőívre, kritikalitási indoklásra, kontrollonkénti gapre, kockázati döntésre és review-jegyzőkönyvre hivatkozik. Minden bináris evidenciához védett URI, SHA-256 és emberi reviewer tartozik.
