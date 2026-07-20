# H-002 agent pilot – kezelői útmutató

## Mit csinál?

A pilot tíz mesterséges napló-, határidő- és kontrolleltérés-rekordot olvas. Ezekből felülvizsgálati javaslatot készít, hozzárendeli a szükséges emberi kaput, majd az eredményt jóváhagyásra váró sorba helyezi. Semmit nem fogad el és nem zár le.

## Hogyan futtatható?

```powershell
python -m nis2_harness run-h002-agent-pilot --job config/h002_agent_pilot.json --root . --output generated/h002_agent_pilot_output.json
```

Az eredmény a `generated/h002_agent_pilot_output.json` fájlban jelenik meg, és a helyi portál következő megnyitásakor automatikusan ezt mutatja az AI-javaslatok között.

## Biztonsági fékek

- kizárólag ismert, nem érzékeny fixture olvasható;
- a bemenet tartalmi hashének egyeznie kell;
- könyvtárból kilépő útvonal elutasításra kerül;
- hálózati vagy éles kapcsolat nincs;
- a futás csak a `generated/` könyvtárba írhat;
- a kill switch bekapcsolva nulla feldolgozást enged;
- a futási napló minden sora az előző sor hashéhez kötött;
- minden eredmény emberi review-ra vár és formális hatása nincs.

## Mit jelentenek a metrikák?

A `synthetic_eval.pass_rate` azt jelzi, hogy a tíz mesterséges eset a várt emberi kapura került-e. A `simulated_manual_steps_saved` csak folyamatbecslés. Egyik érték sem bizonyít valós auditmegfelelést vagy tényleges munkaidő-megtakarítást.

## Mi kell valós pilot előtt?

Emberileg jóváhagyott gold case-ek, adatminősítés, forrásgazdák, read-only jogosultsági terv, hitelesítés, védett evidenciatár, retention, monitoring, G1/G2 review és G3 pilotengedély. Ezek a pótlandó evidencia naplóban nyitva maradnak.
