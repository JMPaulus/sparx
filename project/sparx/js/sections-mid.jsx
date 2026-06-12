/* Sparx landing — Problem, Solution, How it works */
const { Button, Badge, Card, StatBlock, StepItem, ContrastRow } = window.SPARXDesignSystem_59b6c5;
const { L, Reveal, ChevR, Info } = window.SXKit;

function Problem({ lang }) {
  const stats = [
    {
      v: "95%",
      pl: <React.Fragment>Pilotażowych projektów AI<br />nie przynosi mierzalnego zwrotu</React.Fragment>,
      en: "of AI pilots deliver no measurable return",
      s: "MIT, \u201EThe GenAI Divide\u201D, 2025"
    },
    {
      v: "38%",
      anchor: "31511f14bd-span",
      pl: <React.Fragment>Prezesów w USA i Europie wskazuje<br />na AI jako największe zewnętrzne zagrożenie dla biznesu</React.Fragment>,
      en: "of CEOs in the US and Europe name AI their biggest external business threat",
      s: "The Conference Board, 2026"
    },
    {
      v: "42%",
      pl: <React.Fragment>Firm porzuciło większość projektów AI, zanim trafiły na produkcję<br />(rok wcześniej było to tylko 17%)</React.Fragment>,
      en: "of companies abandoned most AI projects before production (up from 17% a year earlier)",
      s: "S&P Global, Voice of the Enterprise, 2025"
    },
  ];

  return (
    <section id="problem" className="kit-section kit-section--cloud">
      <div className="kit-container">
        <div className="kit-head">
          <Reveal as="div" className="kit-eyebrow">{L(lang, "Problem", "The problem")}</Reveal>
          <Reveal as="h2" className="kit-h2" delay={60} data-comment-anchor="b4d1c9f62f-span">
            {L(lang,
              <React.Fragment>Gdy wszyscy wdrażają AI…<br />Większość na tym traci!</React.Fragment>,
              "Everyone's deploying AI. Most are losing money on it.")}
          </Reveal>
          <Reveal as="p" className="kit-problem-lead" delay={100} data-comment-anchor="51697f1f4b-span">
            {L(lang,
              <React.Fragment>80% prezesów planuje w&nbsp;2026 zwiększyć nakłady na AI<br />(EY,&nbsp;2026). Kierunek jest słuszny. Gorzej z&nbsp;wykonaniem:</React.Fragment>,
              <>80% of CEOs plan to increase their AI investment in 2026 (EY,&nbsp;2026). The direction is right. It's the execution that stumbles:</>)}
          </Reveal>
        </div>

        <div className="kit-stats3">
          {stats.map((st, i) => (
            <Reveal key={i} delay={i * 90} data-comment-anchor={st.anchor}>
              <StatBlock value={st.v} tone="light" label={L(lang, st.pl, st.en)} source={st.s} />
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="kit-punch" delay={60}>
          {L(lang, "Problemem nie jest AI. ", "AI isn't the problem. ")}
          <b>{L(lang,
            <React.Fragment>Wyzwanie to wdrażanie technologii intuicyjnie,<br />bez dowodu w zysku</React.Fragment>,
            <React.Fragment>The challenge is deploying tech intuitively,<br />without proof of return</React.Fragment>)}</b>
          {L(lang, ", bez kontekstu Twoich danych i bez planu na produkcję.", ", without your data context and without a plan for production.")}
        </Reveal>
      </div>
    </section>
  );
}

function Solution({ lang }) {
  const cards = [
    {
      pl: <React.Fragment>Najpierw dowód,<br />potem inwestycja</React.Fragment>,
      en: <React.Fragment>Proof first,<br />investment second</React.Fragment>,
      bpl: <React.Fragment>Większość projektów AI pada na przejściu z pilotażu na produkcję (MIT, 2025). Dlatego zanim zainwestujesz, sprawdzamy<br />na Twoich danych, czy rozwiązanie naprawdę przyniesie wartość.<br />Masz dowód → pewnie skalujesz.<br />Nie ma dowodu → nie ryzykujesz.</React.Fragment>,
      ben: <React.Fragment>Most AI projects fail moving from pilot to production (MIT, 2025). So before you invest, we test on your data whether the solution will truly deliver value.<br />Proof in hand — you scale confidently. No proof — you risk nothing.</React.Fragment>
    },
    {
      pl: "Twoje AI", en: "Your AI",
      bpl: <React.Fragment>Kod i dane na Twojej chmurze.<br />To oznacza pełną własność,<br />bez licencji, z której nie wyjdziesz.<br />Zmieniasz dostawcę, rozwijasz produkt samodzielnie lub z nami.<br />Zbudowana przewaga zostaje<br />z Tobą i Twoją firmą.</React.Fragment>,
      ben: <React.Fragment>Code and data on your cloud — fully yours, no licence you can’t exit.<br />Switch vendors, build alone or with us. The advantage you build stays yours.</React.Fragment>
    },
    {
      pl: "Zgodność", en: "Compliance",
      bpl: <React.Fragment>Skoro AI bywa „największym ryzykiem”, budujemy je jak system o znaczeniu krytycznym.<br />Zgodność jest od pierwszego dnia, nie po audycie.</React.Fragment>,
      ben: <React.Fragment>If AI can be your biggest risk, we build it like a critical system.<br />Compliant from day one — not after the audit.</React.Fragment>,
      badges: ["RODO / GDPR", "ISO 27001"]
    },
  ];

  return (
    <section id="rozwiazanie" className="kit-section kit-section--graphite">
      <div className="kit-container">
        <div className="kit-head">
          <Reveal as="div" className="kit-eyebrow">{L(lang, "Rozwiązanie", "Solution")}</Reveal>
          <Reveal as="h2" className="kit-h2" delay={60} style={{ width: "1110px", maxWidth: "100%", textAlign: "left" }}>
            {L(lang, <React.Fragment>Metoda Sparx: działajmy razem,<br />budujmy na faktach</React.Fragment>, <React.Fragment>Sparx method: let{"\u2019"}s act together,<br />build on facts</React.Fragment>)}
          </Reveal>
        </div>
        <div className="kit-sol-grid">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 90} style={{ height: "100%" }}>
              <Card tone="graphite" className="kit-sol-card" style={{ height: "100%" }}>
                <h3>{L(lang, c.pl, c.en)}</h3>
                <p>{L(lang, c.bpl, c.ben)}</p>
                {c.badges && (
                  <div className="kit-badges">
                    {c.badges.map((b) => <Badge key={b} variant="onink">{b}</Badge>)}
                    <Badge variant="onink">{L(lang, "Hosting UE", "EU hosting")}</Badge>
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="kit-contrast-wrap">
          <ContrastRow
            themLabel={L(lang, "Typowy dostawca", "Typical vendor")}
            usLabel="Sparx"
            them={L(lang, "Sprzedaje Ci gotowy system na swojej licencji.", "Sells you a ready-made system on their licence.")}
            us={L(lang, "Wdrażamy AI, które jest Twoją własnością. Razem budujemy Twoją przewagę rynkową.", "We deploy AI you own — together we build your competitive advantage.")} />
        </Reveal>
      </div>
    </section>
  );
}

function How({ lang }) {
  const steps = [
    { n: 1, pl: "Doświadczenie",   en: "Experience",      dpl: <React.Fragment>Radary i realizacje:<br />zobacz, co już działa</React.Fragment>, den: <React.Fragment>Radars & live projects:<br />see what already works</React.Fragment> },
    { n: 2, pl: "Warsztat",        en: "Workshop",        dpl: "Diagnoza potrzeb",   den: "Needs diagnosis" },
    { n: 3, pl: "Test",            en: "Test",             dpl: "Dowód wartości",     den: "Proof of value" },
    { n: 4, pl: "Budowa",          en: "Build",            dpl: "Trzy modele",        den: "Three models" },
    { n: 5, pl: "Własność",        en: "Ownership",        dpl: "Kod i dane Twoje",   den: "Code & data yours" },
  ];
  const modelCards = [
    {
      label: L(lang, "Projekt + kod", "Project + code"),
      desc:  L(lang,
        <React.Fragment>Budujemy razem i przekazujemy Ci kod źródłowy. Rozwijasz go sam<br />lub z nami.</React.Fragment>,
        "We build together and hand you the source code. You develop it yourself or with us."),
    },
    {
      label: L(lang, "Model SaaS-owy", "SaaS model"),
      desc:  L(lang,
        <React.Fragment>Budujemy, utrzymujemy<br />i rozwijamy.<br />Ty jesteś jedynym właścicielem.</React.Fragment>,
        "We build, maintain and develop it. You remain the sole owner."),
    },
    {
      label: L(lang, <React.Fragment>Dedykowany zespół<br />(Try & Hire)</React.Fragment>, <React.Fragment>Dedicated team<br />(Try & Hire)</React.Fragment>),
      desc:  L(lang,
        <React.Fragment>Budujemy system i rekrutujemy dedykowany zespół,<br />który go utrzymuje.<br />Gdy zechcesz, przejmujesz ludzi<br />i kompetencje na swój pokład.</React.Fragment>,
        <React.Fragment>We build the system and recruit a dedicated team to run it.<br />When you{"\u2019"}re ready, you take the people and the know-how on board.</React.Fragment>),
    },
  ];

  return (
    <section id="jak" className="kit-section kit-section--cloud">
      <div className="kit-container">
        <div className="kit-head">
          <Reveal as="div" className="kit-eyebrow" style={{ fontWeight: 800, fontSize: "20px" }}>{L(lang, "Jak to działa", "How it works")}</Reveal>
          <Reveal as="h2" className="kit-h2" delay={60}>
            {L(lang, "Pięć małych kroków do działającego AI", "Five small steps to working AI")}
          </Reveal>
        </div>
        <Reveal className="kit-steps">
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="kit-steps__item">
                <StepItem n={s.n} title={L(lang, s.pl, s.en)} desc={L(lang, s.dpl, s.den)} />
              </div>
              {i < steps.length - 1 && <span className="kit-steps__arrow"><ChevR /></span>}
            </React.Fragment>
          ))}
        </Reveal>
        <div className="kit-model-grid">
          {modelCards.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <Card style={{ height: "100%" }}>
                <div className="kit-model-card__label">{m.label}</div>
                <p className="kit-model-card__desc">{m.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="kit-note" style={{ fontWeight: 900, display: "flex", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-7)" }}>
          <Info style={{ flex: "0 0 auto", width: "28px", height: "28px", color: "var(--accent)" }} />
          <span>
          {L(lang,
            <React.Fragment>Wchodzisz na dowolnym kroku i płynnie przechodzisz dalej.<br />Nie stosujemy zasady „wszystko albo nic”.</React.Fragment>,
            <React.Fragment>Start at any step and move on smoothly.<br />We never do all-or-nothing.</React.Fragment>)}
          </span>
        </Reveal>
      </div>
    </section>
  );
}

window.SX = Object.assign(window.SX || {}, { Problem, Solution, How });
