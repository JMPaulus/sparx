# Przetargi Radar — layout w systemie Sparx

Prompt/brief layoutu dla **Claude Design**: nowa wersja strony produktowej
[przetargi-radar.pl](https://www.przetargi-radar.pl/) w **kolorystyce i narracji Sparx**
(paleta „Sparx Green", **bez neonu**), z zachowaniem realnych funkcji i haseł produktu
oraz wplecioną narracją marki: *najpierw dowód, potem inwestycja · Twoje dane bezpieczne ·
partner, nie dostawca · zgodność · „jeden silnik, wiele branż"*.

**Plik:** `Sparx-PROMPT-przetargi-radar-layout-v1.2.json`

Zawiera m.in.:
- sekcje: hero (+ animowany radar-pipeline), problem, jak działa, funkcje, **analityka + RPWDL**,
  **dla kogo (firmy + instytucje publiczne)**, dlaczego Sparx, kontakt, stopka;
- sekcję `animacje` (6 typów, każda z wariantem `prefers-reduced-motion`);
- mapowanie kolorów neon → Sparx Green, zasady spójności, ton i copy w pełnej polszczyźnie.

**v1.2 (debugging):** usunięto duplikat listy kroków pipeline (hero → odsyła do `animacje`),
ujednolicono format liczb na polski (94,7% · 0,94), dodano brakujący token `graphite`,
ujednolicono token tła Kontakt (`green-cta`), zsynchronizowano metryki w zasadach.

Wygenerowane na podstawie strony Sparx, prezentacji Przetargi Radar i przeglądu przetargi-radar.pl.
