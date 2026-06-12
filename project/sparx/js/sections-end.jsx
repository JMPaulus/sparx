/* Sparx landing — Contact + Footer */
const { Button, Input, Textarea, Card } = window.SPARXDesignSystem_59b6c5;
const { L, Reveal, Arrow, Check, Phone, Mail, Cal, LinkedIn } = window.SXKit;

function Contact({ lang }) {
  const [sent, setSent] = React.useState(false);
  const [topics, setTopics] = React.useState([]);
  const topicOptions = [
    { pl: "Test wartości", en: "Proof of value" },
    { pl: "Budowa systemu", en: "System build" },
    { pl: "Przetargi / granty", en: "Tenders / grants" },
    { pl: "Partnerstwo", en: "Partnership" },
    { pl: "Inne", en: "Other" },
  ];
  const toggleTopic = (t) =>
    setTopics((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
  const channels = [
    { icon: <Cal />, main: L(lang, "Wybierz termin rozmowy", "Pick a call time"), sub: "calendly.com/sparx/30min", href: "https://calendly.com/sparx/30min" },
    { icon: <Mail />, main: "kontakt@sparx.ai", sub: L(lang, "Napisz do nas", "Email us"), href: "mailto:kontakt@sparx.ai" },
    { icon: <Phone />, main: "+48 000 000 000", sub: L(lang, "Zadzwoń", "Call us"), href: "tel:+48000000000" },
    { icon: <LinkedIn />, main: "LinkedIn", sub: "linkedin.com/company/sparx", href: "https://www.linkedin.com/company/sparx" },
  ];

  return (
    <section id="kontakt" className="kit-section kit-section--cta">
      <div className="kit-container kit-contact__grid">
        <div className="kit-contact__head">
          <Reveal as="h2" className="kit-h2">
            {L(lang, "Porozmawiajmy o Twojej firmie.", "Let’s talk about your company.")}
          </Reveal>
          <Reveal as="p" className="kit-lead">
            {L(lang,
              <React.Fragment>30-minutowa rozmowa: poznajemy potrzebę<br />i podpowiadamy, czy i jak AI ma u Ciebie sens. Wyjdziesz z jasną odpowiedzią. Nawet jeśli zabrzmi ona „jeszcze nie teraz”, to podpowiemy Ci jak przyspieszyć wdrożenie i co zrobić dokładnie.<br />Bez nachalnej sprzedaży.</React.Fragment>,
              "A 30-minute call: we understand your need and advise whether and how AI makes sense for you. You'll come away with a clear answer — even if it's 'not yet'. No obligation, no hard sell.")}
          </Reveal>
          <div className="kit-channels">
            {channels.map((c, i) => (
              <Reveal key={i} as="a" delay={i * 60} className="kit-channel" href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <span className="kit-channel__ic">{c.icon}</span>
                <span>
                  <span className="kit-channel__main">{c.main}</span>
                  <span className="kit-channel__sub">{c.sub}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <Card>
            {sent ? (
              <div className="kit-form__ok">
                <div className="kit-form__ok-mark"><Check /></div>
                <h3>{L(lang, "Dziękujemy!", "Thank you!")}</h3>
                <p style={{ color: "var(--text-muted)", marginTop: "var(--space-2)" }}>
                  {L(lang, "Odezwiemy się w ciągu 24 godzin.", "We'll get back to you within 24 hours.")}
                </p>
              </div>
            ) : (
              <form className="kit-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="kit-form__row">
                  <Input label={L(lang, "Imię", "Name")} name="imie" required
                    placeholder={L(lang, "Jak się zwracać?", "Your name")} />
                  <Input label={L(lang, "Firma", "Company")} name="firma"
                    placeholder={L(lang, "Nazwa firmy", "Company name")} />
                </div>
                <Input label="E-mail" name="email" type="email" required placeholder="marek@firma.pl" />
                <div className="kit-topics">
                  <div className="kit-topics__label">{L(lang, "Temat rozmowy. Możesz wybrać kilka.", "Topic. You can pick several.")}</div>
                  <div className="kit-topics__row">
                    {topicOptions.map((t) => {
                      const active = topics.includes(t.pl);
                      return (
                        <button key={t.pl} type="button" aria-pressed={active}
                          className={"kit-topic-pill" + (active ? " is-active" : "")}
                          onClick={() => toggleTopic(t.pl)}>
                          {L(lang, t.pl, t.en)}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {topics.length > 0 && (
                <Textarea label={L(lang, "Wiadomość", "Message")} name="wiadomosc" rows={3}
                  placeholder={L(lang, "W czym możemy pomóc?", "How can we help?")} />
                )}
                <Button type="submit" variant="primary" size="lg" fullWidth iconRight={<Arrow />}>
                  {L(lang, "Umów rozmowę", "Book a call")}
                </Button>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ lang }) {
  return (
    <footer className="kit-footer">
      <div className="kit-container">
        <div className="kit-footer__grid">
          <div>
            <img className="kit-footer__logo" src="assets/sparx-logo-ondark.png" alt="Sparx" />
            <p className="kit-footer__tag">
              {L(lang, <React.Fragment>Partner technologiczny AI.<br />Budujemy Twoją przewagę rynkową.</React.Fragment>, <React.Fragment>Your AI technology partner.<br />We build your competitive advantage.</React.Fragment>)}
            </p>
          </div>
          <div className="kit-footer__col">
            <h4>{L(lang, "Nawigacja", "Navigation")}</h4>
            <a href="#problem">{L(lang, "Problem", "Problem")}</a>
            <a href="#rozwiazanie">{L(lang, "Rozwiązanie", "Solution")}</a>
            <a href="#realizacje">{L(lang, "Realizacje", "Work")}</a>
            <a href="#dlakogo">{L(lang, "Dla kogo", "Who it's for")}</a>
            <a href="#kontakt">{L(lang, "Kontakt", "Contact")}</a>
          </div>
          <div className="kit-footer__col">
            <h4>{L(lang, "Realizacje", "Work")}</h4>
            <a href="https://nfz-radar.pl" target="_blank" rel="noopener noreferrer">NFZ Radar</a>
            <a href="https://ncbr-radar.pl" target="_blank" rel="noopener noreferrer">NCBR Radar</a>
            <a href="https://przetargi-radar.pl" target="_blank" rel="noopener noreferrer">Przetargi Radar</a>
          </div>
          <div className="kit-footer__col">
            <h4>{L(lang, "Kontakt", "Contact")}</h4>
            <a href="mailto:kontakt@sparx.ai">kontakt@sparx.ai</a>
            <a href="tel:+48000000000">+48 000 000 000</a>
            <span>{L(lang, "Polska · NIP 7792229459", "Poland · VAT PL7792229459")}</span>
          </div>
        </div>
        <div className="kit-footer__bottom">
          {L(lang,
            "Źródła: MIT 2025 · S&P Global 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.",
            "Sources: MIT 2025 · S&P Global 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.")}
        </div>
      </div>
    </footer>
  );
}

window.SX = Object.assign(window.SX || {}, { Contact, Footer });
