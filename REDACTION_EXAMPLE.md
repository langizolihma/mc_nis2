# Redakciós példa – kizárólag szintetikus adat

## Redakció előtt

```text
Felhasználó: Teszt Elek
E-mail: teszt.elek@example.invalid
Gépnév: DEMO-SRV-01
IP-cím: 192.0.2.10
Belső útvonal: \\demo.invalid\sensitive\example
Hitelesítő adat: [SZINTETIKUS-TILTOTT-MEZŐ]
```

## Redakció után

```text
Felhasználó: [PERSON-001]
E-mail: [CONTACT-REDACTED]
Gépnév: [HOST-001]
IP-cím: [IP-001]
Belső útvonal: [PATH-001]
Hitelesítő adat: [REMOVED-NOT-PROCESSED]
```

## Redakciós rekordminimum

- forrás: `SYNTHETIC-EXAMPLE`;
- kezelési osztály: `AI-2` demonstráció;
- eltávolított mezőtípusok: személy, elérhetőség, host, IP, útvonal, hitelesítő adat;
- redaktált fájl hash-e;
- redaktáló és reviewer;
- időzónás időpont;
- döntés: feldolgozható / további redakció szükséges / tiltott.

A példa nem tartalmaz valós metALCOM-, munkavállalói vagy infrastruktúra-adatot.
