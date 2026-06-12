/* Sparx landing — App root: language state, cookie banner, assembly */
const { Button } = window.SPARXDesignSystem_59b6c5;
const { L } = window.SXKit;
const { Nav, Hero, MobileBar } = window.SX;
const { Problem, Solution, How } = window.SX;
const { Work, Audience, Partners } = window.SX;
const { Contact, Footer } = window.SX;

const COOKIE_KEY = "sparx-cookie";
const LANG_KEY   = "sparx-lang";

function CookieBanner({ lang }) {
  const [visible, setVisible] = React.useState(() => {
    try { return !localStorage.getItem(COOKIE_KEY); } catch { return true; }
  });
  const decide = (v) => {
    try { localStorage.setItem(COOKIE_KEY, v); } catch {}
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className="kit-cookie" role="region" aria-label={L(lang, "Cookies", "Cookies")}>
      <p className="kit-cookie__text">
        {L(lang,
          <>Używamy plików cookie do analityki — ładujemy ją dopiero po Twojej zgodzie. <a href="#">Polityka prywatności</a>.</>,
          <>We use cookies for analytics — loaded only after you agree. <a href="#">Privacy policy</a>.</>)}
      </p>
      <div className="kit-cookie__btns">
        <Button variant="ghost" size="sm" onClick={() => decide("declined")}>
          {L(lang, "Tylko niezbędne", "Essential only")}
        </Button>
        <Button variant="primary" size="sm" onClick={() => decide("accepted")}>
          {L(lang, "Akceptuję", "Accept")}
        </Button>
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem(LANG_KEY) || "pl"; } catch { return "pl"; }
  });
  const update = (l) => {
    setLang(l);
    try { localStorage.setItem(LANG_KEY, l); } catch {}
    document.documentElement.lang = l;
  };
  React.useEffect(() => { document.documentElement.lang = lang; }, []);

  return (
    <div className="kit">
      <Nav lang={lang} setLang={update} />
      <main>
        <Hero lang={lang} />
        <Problem lang={lang} />
        <Solution lang={lang} />
        <How lang={lang} />
        <Work lang={lang} />
        <Audience lang={lang} />
        <Partners lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <MobileBar lang={lang} />
      <CookieBanner lang={lang} />
    </div>
  );
}

/* Re-use the root the bundle already created to avoid the createRoot() warning */
if (window.__sparxRoot) {
  window.__sparxRoot.render(React.createElement(App));
} else {
  window.__sparxRoot = ReactDOM.createRoot(document.getElementById("root"));
  window.__sparxRoot.render(React.createElement(App));
}
