/* Sparx landing — shared helpers & icons. Loaded first. */
const { useState, useEffect, useRef } = React;

/* bilingual pick */
const L = (lang, pl, en) => lang === "en" ? en : pl;

/* Reveal-on-scroll. Default: visible. Only arms below-the-fold elements.
   Always strips the class after entering so content can never stay trapped
   at opacity 0 in contexts where CSS transitions don't tick. */
function Reveal({ children, as = "div", delay = 0, className = "", style = {}, ...rest }) {
  const ref = useRef(null);
  const [cls, setCls] = useState("");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    const belowFold = el.getBoundingClientRect().top >= vh * 0.92;
    if (reduce || typeof IntersectionObserver === "undefined" || !belowFold) return;
    setCls("armed");
    let done = false;
    let strip = 0;
    const reveal = () => {
      if (done) return;done = true;
      setCls("armed in");
      strip = setTimeout(() => setCls(""), 760);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {reveal();io.disconnect();}});
    }, { threshold: 0.15 });
    io.observe(el);
    const fallback = setTimeout(reveal, 1600);
    return () => {io.disconnect();clearTimeout(fallback);clearTimeout(strip);};
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={["reveal", cls, className].filter(Boolean).join(" ")}
    style={{ transitionDelay: delay && cls === "armed in" ? `${delay}ms` : undefined, ...style }} {...rest}>
      {children}
    </Tag>);

}

/* Icon set — thin line, currentColor (Lucide-weight) */
const I = (p) => ({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", ...p });
const Arrow = (p) => <svg {...I(p)} strokeWidth="2.1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const ChevR = (p) => <svg {...I(p)} strokeWidth="2.1"><path d="m9 6 6 6-6 6" /></svg>;
const Check = (p) => <svg {...I(p)} strokeWidth="2.3"><path d="M20 6 9 17l-5-5" /></svg>;
const Phone = (p) => <svg {...I(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
const Mail = (p) => <svg {...I(p)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>;
const Cal = (p) => <svg {...I(p)}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
const LinkedIn = (p) => <svg {...I(p)}><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-9h4v1.5" /><rect x="2" y="9" width="4" height="11" /><circle cx="4" cy="4" r="2" /></svg>;
const Menu = (p) => <svg {...I(p)} strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>;
const Close = (p) => <svg {...I(p)} strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>;
const Info = (p) => <svg {...I(p)}><circle cx="12" cy="12" r="10" style={{ strokeWidth: "2px" }} /><path d="M12 16v-4M12 8h.01" /></svg>;

window.SXKit = { L, Reveal, Arrow, ChevR, Check, Phone, Mail, Cal, LinkedIn, Menu, Close, Info };