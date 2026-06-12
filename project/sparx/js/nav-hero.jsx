/* Sparx landing — Nav, Hero, MobileBar */
const { Button, IconButton, LangToggle } = window.SPARXDesignSystem_59b6c5;
const { L, Reveal, Arrow, Phone, Menu, Close } = window.SXKit;

const NAV_ITEMS = [
  { id: "problem",    pl: "Problem",     en: "Problem" },
  { id: "rozwiazanie",pl: "Rozwiązanie", en: "Solution" },
  { id: "realizacje", pl: "Realizacje",  en: "Work" },
  { id: "dlakogo",    pl: "Dla kogo",    en: "Who it's for" },
  { id: "kontakt",    pl: "Kontakt",     en: "Contact" },
];

function Nav({ lang, setLang }) {
  const [open, setOpen] = React.useState(false);
  const cta = L(lang, "Umów rozmowę", "Book a call");
  return (
    <React.Fragment>
      <nav className="kit-nav">
        <div className="kit-nav__inner">
          <a href="#top" aria-label="Sparx">
            <img className="kit-nav__logo" src="assets/sparx-logo-ondark.png" alt="Sparx" />
          </a>
          <div className="kit-nav__links">
            {NAV_ITEMS.map((it) => (
              <a key={it.id} className="kit-nav__link" href={`#${it.id}`}>{L(lang, it.pl, it.en)}</a>
            ))}
          </div>
          <div className="kit-nav__right">
            <LangToggle value={lang} onChange={setLang} tone="dark" />
            <Button variant="primary" size="sm" as="a" href="#kontakt" iconRight={<Arrow />}>{cta}</Button>
          </div>
          <span className="kit-nav__burger">
            <IconButton label={L(lang, "Menu", "Menu")} variant="dark" icon={<Menu />} onClick={() => setOpen(true)} />
          </span>
        </div>
      </nav>

      <div className={`kit-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="kit-menu__top">
          <img className="kit-nav__logo" src="assets/sparx-logo-ondark.png" alt="Sparx" />
          <IconButton label={L(lang, "Zamknij", "Close")} variant="dark" icon={<Close />} onClick={() => setOpen(false)} />
        </div>
        <div className="kit-menu__links">
          {NAV_ITEMS.map((it) => (
            <a key={it.id} className="kit-menu__link" href={`#${it.id}`} onClick={() => setOpen(false)}>
              {L(lang, it.pl, it.en)}
            </a>
          ))}
        </div>
        <div className="kit-menu__foot">
          <LangToggle value={lang} onChange={setLang} tone="dark" />
          <Button variant="primary" size="lg" fullWidth as="a" href="#kontakt" onClick={() => setOpen(false)} iconRight={<Arrow />}>
            {cta}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

function Hero({ lang }) {
  return (
    <header id="top" className="kit-section kit-section--forest kit-hero">
      <div className="kit-container kit-hero__grid">
        <div>
          <Reveal as="p" className="kit-eyebrow">
            {L(lang, "Partner technologiczny AI", "Your technology partner for AI")}
          </Reveal>
          <Reveal as="h1" className="kit-h1" delay={60}>
            {L(lang, <React.Fragment>Zbuduj własne AI<br />i </React.Fragment>, "Build your own AI and ")}
            <span className="kit-accent" data-comment-anchor="95c7107d98-span">{L(lang, "zyskaj miliony.", "save millions.")}</span>
          </Reveal>
          <Reveal as="p" className="kit-lead" delay={120} style={{ marginTop: "var(--space-5)", fontWeight: 700 }} data-comment-anchor="1480fb5ea5-span">
            {L(lang,
              <React.Fragment>Sparx tworzy test wartości.<br /> Najpierw dowód, potem inwestycja.<br />Zyskaj rynkową przewagę.</React.Fragment>,
              <React.Fragment>Sparx builds a proof of value. Proof first, investment second.<br />Gain a market advantage.</React.Fragment>)}
          </Reveal>
          <Reveal className="kit-hero__cta-row" delay={180}>
            <Button variant="primary" size="lg" as="a" href="#kontakt" iconRight={<Arrow />}>
              {L(lang, "Umów rozmowę", "Book a call")}
            </Button>
            <Button variant="dark" size="lg" as="a" href="#realizacje">
              {L(lang, "Zobacz realizacje", "See our work")}
            </Button>
          </Reveal>
          <Reveal className="kit-hero__proof" delay={240}>
            <span className="kit-hero__pulse" aria-hidden="true"></span>
            <span>{L(lang, "Działające produkty:", "Live products:")}</span>
            <b>NFZ Radar · NCBR Radar · Przetargi Radar</b>
          </Reveal>
        </div>
        <div>
          <img className="kit-hero__peaks" src="assets/hero-peaks.svg"
            alt={L(lang, "Wznoszące się szczyty Sparx", "Sparx ascending peaks")} />
        </div>
      </div>
    </header>
  );
}

function MobileBar({ lang }) {
  return (
    <div className="kit-mobilebar">
      <span className="grow">
        <Button variant="primary" size="lg" fullWidth as="a" href="#kontakt" iconRight={<Arrow />}>
          {L(lang, "Umów rozmowę", "Book a call")}
        </Button>
      </span>
      <IconButton label={L(lang, "Zadzwoń", "Call")} variant="outline" size="lg" as="a" href="tel:+48000000000" icon={<Phone />} />
    </div>
  );
}

window.SX = Object.assign(window.SX || {}, { Nav, Hero, MobileBar });
