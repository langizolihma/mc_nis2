# A-031 végrehajtási jelentés

```json
{
  "status": "PROPOSAL",
  "agent_role": "orchestrator",
  "source_refs": ["DECISIONS.md:D-004", "DECISIONS.md:D-010", "DECISIONS.md:D-014", "DECISIONS.md:D-017", "SECURITY_BOUNDARIES.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["AI usage policy draft", "deny-by-default environment control", "redaction and prompt-injection rules"],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Eredmény

Elkészült az A-031 AI-használati szabálytervezete, gépileg validálható policy-konfigurációja, felhasználói visszaigazolási sablonja, környezet-jóváhagyási lapja és szintetikus redakciós példája.

A policy biztonságos alapállapota `BLOCKED_PENDING_G2`: jóváhagyott környezet nélkül minden külső AI-feldolgozás tiltott. Az AI-3 osztály helyi és külső AI-feldolgozásból is kizárt. Az A-031 nem kész és nem hirdethető ki biztonsági/jogi jóváhagyás, környezetdöntés és megismertetési evidencia nélkül.

## Fájlok

- `AI_USAGE_POLICY_DRAFT.md`: ember számára olvasható szabálytervezet.
- `config/ai_usage_policy.json`: gépi policy és deny-by-default állapot.
- `AI_USAGE_ACKNOWLEDGEMENT.md`: felhasználói visszaigazolási sablon.
- `AI_ENVIRONMENT_APPROVAL.md`: G2 környezet-jóváhagyási lap.
- `REDACTION_EXAMPLE.md`: kizárólag szintetikus redakciós példa.
- `src/nis2_harness/ai_policy.py`: policy-, környezet-, osztály-, kapu- és approval-validáció.
- `tests/test_ai_policy.py`: hét pozitív/negatív biztonsági teszt.

## Ellenőrzés

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate-ai-policy --policy config/ai_usage_policy.json
```

- Unit teszt: **59/59 sikeres**.
- Policy-validáció: **0 hard error, 2 elvárt warning**.
- Warningok: külső környezet nincs G2-ben jóváhagyva; policy nincs G2-ben jóváhagyva.
- Külső feltöltés, AI API-hívás vagy éles művelet: **nem történt**.

## Nyitott emberi feladat

1. Lángi Zoltán biztonsági és Dr. Berta Brigitta jogi review-ja.
2. Engedélyezett AI-környezet vagy local-only döntés, környezetreferenciával.
3. Vállalati adatminősítési szabályhoz való illesztés.
4. Policy verzió/hash jóváhagyása és kihirdetése.
5. Minden érintett felhasználó megismertetése és védett acknowledgement-evidenciája.
6. Felülvizsgálati ciklus és incidensjelzési csatorna rögzítése.

Ezek nélkül az A-031 nem jelölhető `DONE` státuszúra.
