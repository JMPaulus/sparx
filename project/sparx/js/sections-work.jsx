/* Sparx landing — Work (Realizacje), Audience, Partners */
const { Button, Input, Card, SectorCard } = window.SPARXDesignSystem_59b6c5;
const { L, Reveal, Arrow, Check } = window.SXKit;

function Work({ lang }) {
  const cards = [
    {
      tagpl: "Medyczna / farma · Produkt", tagen: "Medical / pharma · Product",
      tpl: <React.Fragment>Wygrywaj przetargi,<br />które przegapiają inni</React.Fragment>,
      ten: <React.Fragment>Win the tenders<br />your competitors miss</React.Fragment>,
      bpl: <span style={{lineHeight: 1.9}}><React.Fragment>Radar wyłapuje ogłoszenia z całego rynku, pokazuje kto wygrywał wcześniej: za ile i z jakim produktem.<br />Panel analityczny zamienia te dane w wiedzę: trendy cenowe, aktywność konkurencji, statystyki wygranych.<br />Porównywarka dopasowuje Twoją ofertę do wymagań — ofertujesz szybciej i pewniej.</React.Fragment></span>,
      ben: "The radar catches notices from across the market and shows who won before — for how much and with which product. An analytics panel turns that data into insight: price trends, competitor activity, win statistics. A comparator matches your offer to requirements so you bid faster and more confidently.",
      ppl: "Dowód: działający produkt dla branży medycznej. Od ogłoszenia, przez analitykę, aż po gotową ofertę. Dane z wielu źródeł, zgodność z RODO.",
      pen: "Proof: live product for the medical sector. From notice, through analytics, to a finished bid. Multi-source data, GDPR-compliant.",
      cpl: "Zobacz demo", cen: "See demo", href: "#kontakt",
      img: "[[ ZRZUT: Przetargi Radar — lista dopasowanych przetargów + panel analityki ]]",
    },
    {
      tagpl: "Ochrona zdrowia · Sektor publiczny · Na żywo", tagen: "Healthcare · Public sector · Live",
      tpl: "Radar kolejek w ochronie zdrowia. Dla całej Polski!",
      ten: "A waiting-list radar for all of Poland!",
      bpl: <span style={{lineHeight: 2}}>Radar monitoruje czasy oczekiwania na świadczenia w całym kraju na podstawie oficjalnych danych NFZ, a moduł predykcyjny, trenowany codziennie, prognozuje, jak zmienią się kolejki.<br /><br />To projekt, który wyszedł z naszych serc. Motywujemy go chęcią pomocy osobom najbardziej potrzebującym pomocy lekarza.</span>,
      ben: "The radar tracks treatment waiting times nationwide from official NFZ data, and a prediction module, retrained daily, forecasts how the lists will change. A project born from our hearts, driven by the desire to help those most in need of medical care.",
      ppl: "Dowód: narzędzie dostępne publicznie. Obejmuje wszystkie województwa. Potrafimy okiełznać dane w skali kraju.",
      pen: "Proof: publicly available tool, covering every region. We can tame data at national scale.",
      cpl: "nfz-radar.pl", cen: "nfz-radar.pl", href: "https://nfz-radar.pl",
      img: "[[ ZRZUT: NFZ Radar — mapa kolejek Polski z filtrami ]]",
    },
    {
      tagpl: "R&D · Sektor publiczny · Na żywo", tagen: "R&D · Public sector · Live",
      tpl: <React.Fragment>Znajdź granty, których<br />nie widać <br />w wyszukiwarce</React.Fragment>,
      ten: <React.Fragment>Find the grants<br />search can't see</React.Fragment>,
      bpl: <span style={{lineHeight: 1.9}}>Semantyczne przeszukiwanie projektów wspartych przez NCBR i fundusze UE: według znaczenia, a nie słów kluczowych. Filtruj po programie, beneficjencie, temacie i lokalizacji, a asystent AI odpowie na Twoje pytania.</span>,
      ben: "Semantic search across NCBR and EU-funded projects — by meaning, not keywords. Filter by programme, beneficiary, topic and location, and ask an AI assistant your questions.",
      ppl: "Dowód: narzędzie obywatelskie zwiększające przejrzystość wydatków na innowacje.",
      pen: "Proof: civic tool making innovation spending transparent.",
      cpl: "ncbr-radar.pl", cen: "ncbr-radar.pl", href: "https://ncbr-radar.pl",
      img: "[[ ZRZUT: NCBR Radar — wyniki semantycznego wyszukiwania grantów ]]",
    },
    {
      tagpl: "Biotech · Laboratorium · Instytucja", tagen: "Biotech · Laboratory · Institution",
      tpl: <React.Fragment>System klasy produkcyjnej<br />z pełną zgodnością</React.Fragment>,
      ten: <React.Fragment>A production-grade system<br />— fully compliant</React.Fragment>,
      bpl: <span style={{lineHeight: 1.9}}>Kompletny LIMS: od rejestracji próbki, przez algorytmy dopasowania DNA (pokrewieństwo, identyfikacja), po raporty i rozliczenia.</span>,
      ben: "Full LIMS: from sample registration, through DNA-matching algorithms (kinship, identification), to reports and billing.",
      ppl: "Dowód: wdrożenie dla Laboratorium UPP w Poznaniu. ISO 27001, RODO, pełny audyt.",
      pen: "Proof: deployed for the UPP Lab in Poznań. ISO 27001, GDPR, full audit.",
      cpl: "Porozmawiaj o systemie", cen: "Talk to us", href: "#kontakt",
      icon: "assets/icon-biotech.svg",
    },
    {
      tagpl: "Retail / kosmetyka · Demo na żądanie", tagen: "Retail / cosmetics · Demo on request",
      tpl: "AI podpowiada im Twoje produkty<br />w wyszukiwarkach.",
      ten: "AI recommends your products in search results.",
      bpl: <span style={{lineHeight: 1.9}}>Aplikacja zasilona Twoimi danymi (składniki, alergeny, parametry) — bezpieczna rekomendacja od Twojej marki, mierzalne KPI.<br /><br />Drugi moduł — ofertowy dla działów handlowych: [[ OPIS MODUŁU — treść od Michała ]]</span>,
      ben: <span style={{lineHeight: 1.9}}>An app fed your data (ingredients, allergens, specs) — a safe recommendation from your brand, with measurable KPIs.<br /><br />Second module — offer builder for sales teams: [[ MODULE DESCRIPTION — copy from Michał ]]</span>,
      ppl: "Dowód: zbudowany dla dużej sieci drogeryjnej (demo na żądanie).",
      pen: "Proof: built for a major drugstore chain (demo on request).",
      cpl: "Zobacz demo", cen: "See demo", href: "#kontakt",
      icon: "assets/icon-retail.svg",
    },
  ];

  return (
    <section id="realizacje" className="kit-section kit-section--forest">
      <div className="kit-container">
        <Reveal as="div" className="kit-overtitle" style={{ fontSize: "30px" }}>
          {L(lang, "Jeden silnik. Wiele branż. Twoje dane są bezpieczne.", "One engine. Many sectors. Your data stays safe.")}
        </Reveal>
        <Reveal as="p" className="kit-lead" style={{ marginTop: "var(--space-3)", marginBottom: "var(--space-7)", fontSize: "22px" }}>
          {L(lang,
            "Silnik Sparx działa już w ochronie zdrowia, sektorze publicznym, biotechnologii, retailu i przemyśle. Twoja branża może być następna.",
            "The Sparx engine already runs in healthcare, the public sector, biotech, retail and industry. Your sector could be next.")}
        </Reveal>
        <div className="kit-work-grid">
          {cards.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 80} style={{ height: "100%" }}>
              <SectorCard
                tag={L(lang, c.tagpl, c.tagen)}
                title={L(lang, c.tpl, c.ten)}
                body={L(lang, c.bpl, c.ben)}
                proof={L(lang, c.ppl, c.pen)}
                ctaLabel={L(lang, c.cpl, c.cen)}
                href={c.href}
                image={c.img}
                icon={c.icon} />
            </Reveal>
          ))}
        </div>
        <Reveal className="kit-retail-band">
          <span className="kit-retail-band__num">59%</span>
          <div>
            <div className="kit-retail-band__text">
              {L(lang,
                <React.Fragment>Konsumentów używa już AI do zakupów.<br />Zapytania zakupowe w ChatGPT w pół roku wzrosły o 200%</React.Fragment>,
                <React.Fragment>of consumers already use AI for shopping.<br />ChatGPT shopping queries doubled in six months.</React.Fragment>)}
            </div>
            <div className="kit-retail-band__src">Bain / Capital One Shopping, 2025</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Audience({ lang }) {
  return (
    <section id="dlakogo" className="kit-section kit-section--cloud">
      <div className="kit-container">
        <div className="kit-head">
          <Reveal as="div" className="kit-eyebrow">{L(lang, "Dla kogo", "Who it's for")}</Reveal>
          <Reveal as="h2" className="kit-h2" delay={60}>
            {L(lang, "Dla firm i instytucji publicznych", "For companies and public institutions")}
          </Reveal>
        </div>
        <div className="kit-audience">
          <Reveal className="kit-aud-col">
            <div className="kit-aud-col__mark" />
            <h3>{L(lang, "Firmy", "Companies")}</h3>
            <p>{L(lang,
              <React.Fragment>Własny Radar i system to przewaga rynkowa:<br />więcej trafnych decyzji, mniej ręcznej pracy,<br />dane zamienione w wiedzę.<br />Rozwiązanie jest Twoje. Rozwijasz je zgodnie<br />z celami firmy. Bez zależności od obcych licencji.</React.Fragment>,
              <React.Fragment>Your own radar and system are a market edge:<br />more accurate decisions, less manual work, data turned into knowledge.<br />The solution is yours. Develop it around your goals. No dependency on third-party licences.</React.Fragment>)}</p>
            <ul className="kit-aud-bullets">
              <li><Check /><span>{L(lang, <React.Fragment>Własny Radar lub system klasy produkcyjnej.<br />Pełna własność kodu i danych.</React.Fragment>, "Your own radar or production-grade system. Full ownership of code and data.")}</span></li>
              <li><Check /><span>{L(lang, "Test wartości, zanim zainwestujesz. Dowód, zanim wydasz złotówkę.", "A proof of value before you invest. Evidence before you spend.")}</span></li>
              <li><Check /><span>{L(lang, "Rozwijasz sam lub z nami. Zero uzależnienia od dostawcy.", "Develop it alone or with us. No vendor lock-in.")}</span></li>
            </ul>
          </Reveal>
          <Reveal className="kit-aud-col" delay={90}>
            <div className="kit-aud-col__mark" />
            <h3>{L(lang, "Instytucje publiczne", "Public institutions")}</h3>
            <p>{L(lang,
              <React.Fragment>Porządek w danych, przejrzystość i zgodność. Masz jasne podstawy do audytów, badań<br />i decyzji.<br />Twoja instytucja zyskuje więcej i lepiej służy ludziom, zgodnie z misją i wartościami.</React.Fragment>,
              <React.Fragment>Well-ordered data, transparency and compliance — a clear basis for audits, research and decisions.<br />Above all: your institution gains more and serves citizens better — true to its mission and values. Like NFZ Radar, which shortens patients’ path to a doctor.</React.Fragment>)}</p>
            <ul className="kit-aud-bullets">
              <li><Check /><span>{L(lang, "Porządek w danych i zgodność od pierwszego dnia. Gotowość na audyt.", "Well-ordered data and compliance from day one. Audit-ready.")}</span></li>
              <li><Check /><span>{L(lang, "Przejrzystość decyzji i wydatków. Jasne podstawy do raportów i badań.", "Transparent decisions and spending. A clear basis for reports and research.")}</span></li>
              <li><Check /><span>{L(lang, "Realna pomoc dla obywateli. Tak jak NFZ Radar, który skraca kolejki do lekarza.", "Real help for citizens. Like NFZ Radar, which shortens waiting lists.")}</span></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Partners({ lang }) {
  const SHOW_NEWSLETTER = false; /* T10: newsletter ukryty na prośbę Krzysztofa */
  return (
    <section id="partnerzy" className="kit-section kit-section--graphite">
      <div className="kit-container kit-partners">
        <Reveal>
          <div className="kit-eyebrow">{L(lang, "Jak pracujemy", "How we work")}</div>
          <h2 className="kit-h2">{L(lang, "Po partnersku: razem", "Partners: together")}</h2>
          <p className="kit-lead" style={{ marginTop: "var(--space-5)" }}>
            {L(lang,
              <React.Fragment>Sparx tworzą partnerzy, nie ma „dyrektorów".<br />Jeden filar prowadzi biznes i sprzedaż, drugi zawiaduje technologią; mamy znajomość wielu branż i kompetencje, które się nakładają.<br />Nie jesteśmy "andrzejkowymi expertami AI" z Linkedina.<br />Działamy partnersko, uczciwie i otwarcie.</React.Fragment>,
              <React.Fragment>Sparx is run by partners, not 'directors'.<br />One leads business and sales, the other technology — we bring cross-industry knowledge and overlapping skills. Not just AI buzzword experts.<br />We act as partners: honestly and openly.</React.Fragment>)}
          </p>
          <div className="kit-people">
            <div className="kit-person">
              <div className="kit-person__photo">
                [[ {L(lang, "ZDJĘCIE: Partner zarządzający", "PHOTO: Managing partner")} ]]
              </div>
              <div className="kit-person__role">{L(lang, "Partner zarządzający", "Managing partner")}</div>
            </div>
            <div className="kit-person">
              <div className="kit-person__photo">
                [[ {L(lang, "ZDJĘCIE: Partner technologiczny", "PHOTO: Technology partner")} ]]
              </div>
              <div className="kit-person__role">{L(lang, "Partner technologiczny", "Technology partner")}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* T10: box newslettera „Radar Report” ukryty (nie kasować) — przywróć zmieniając SHOW_NEWSLETTER na true */}
          {SHOW_NEWSLETTER && (
          <Card tone="graphite">
            <div className="kit-news__name">
              <span className="dot" />Radar Report
            </div>
            <p className="kit-news__desc">
              {L(lang, "Co miesiąc jeden sygnał wyłapany przez nasze Radary.", "One signal a month, caught by our radars.")}
            </p>
            <div className="kit-news__form">
              <span className="grow">
                <Input label="E-mail" name="newsletter" type="email" placeholder="marek@firma.pl" />
              </span>
              <Button variant="primary">{L(lang, "Zapisz się", "Subscribe")}</Button>
            </div>
          </Card>
          )}
          {!SHOW_NEWSLETTER && (
          <Card tone="graphite">
            <p className="kit-news__desc">
              {L(lang, "Porozmawiajmy o AI w Twojej firmie.", "Let\u2019s talk about AI in your company.")}
            </p>
            <Button variant="primary" as="a" href="#kontakt" iconRight={<Arrow />}>
              {L(lang, "Umów rozmowę", "Book a call")}
            </Button>
          </Card>
          )}
        </Reveal>
      </div>
    </section>
  );
}

window.SX = Object.assign(window.SX || {}, { Work, Audience, Partners });
