# Sparx Design System

> **Sparx — partner technologiczny AI.** *"Budujemy rozwiązania, które należą do Ciebie."*
> A premium, bilingual (PL/EN) brand system for an AI technology partner whose pitch is the **voice of reason** on an overheated AI market — no hype, no crypto aesthetics. The flagship surface is a lead-generation landing page with one dominant CTA: **"Umów rozmowę"** (Book a call).

This project is the design system itself. The compiler reads it on every turn and regenerates `_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` — **never edit those by hand.** Consumers link the single root `styles.css`.

---

## 1. Company & product context

Sparx builds **bespoke AI that the client owns** — code and data on the client's own cloud, validated with a cheap proof-of-value before any large investment. The brand is deliberately **universal** (every industry); healthcare was only the first wedge into the market, not a specialization. The same engine powers many sectors.

**Live products (the "Radars"):**
- **NFZ Radar** — `nfz-radar.pl` — public waiting-time radar across Poland (healthcare).
- **NCBR Radar** — `ncbr-radar.pl` — semantic search across NCBR & EU-funded grants (R&D).
- **Przetargi Radar** — `przetargi-radar.pl` — public-tender catcher & analytics.

**Differentiators:** It's yours · Proof first, investment second · Partner not vendor · Production-grade & compliant (RODO/GDPR, ISO 27001, EU hosting).

**Audience:** universal decision-maker (CEO / board member) in a 200–2000-person, data-heavy or regulated company. Working persona: *"Marek", 47.*

### Sources this system was built from
- **Spec:** `uploads/Sparx-strona-spec.json` (v2.1, 2026-06-08) — the source of truth for palette, copy, sections, SEO, compliance.
- **GitHub repo:** `https://github.com/JMPaulus/sparx` — *currently an empty repo (no commits).* Re-check it later; if the team pushes the real site code, lift exact values from there. The earlier brief `Sparx-PROMPT-v2-brief-wizualny.md` referenced an outdated "Ink & Spark" amber palette — **superseded** by the green spec below.

> **Caveat / open items:** real contact details (email, phone, Calendly, LinkedIn) and product screenshots are **placeholders** — swap them in. Fonts load from Google Fonts CDN (see §4). The repo being empty means visuals here are built from the JSON spec, not from production code.

---

## 2. Content fundamentals (voice & copy)

- **Tone:** premium, credible, calm authority — "głos rozsądku". Confident, never breathless. No buzzword soup, no exclamation hype, no crypto/Web3 vibe.
- **Person:** speaks **to "Ty/Ciebie"** (you), about **"my"** (we, the partners). Direct and personal: *"Zbuduj własne AI"*, *"rozwiązania, które należą do Ciebie"*.
- **Casing:** sentence case for headings and body. UPPERCASE only for short eyebrows/labels (tracked +0.16em). Product names keep their form (NFZ Radar).
- **Numbers always carry a source** in small print (MIT 2025, EY 2026, …). **Never invent statistics or testimonials. Never fabricate client logos.** The "94% lock-in" stat is deliberately omitted; the retail client is only ever *"duża sieć drogeryjna"* (never named).
- **Sentence shape:** short, declarative, contrast-driven — *"Inni sprzedają Ci system na swojej licencji. My budujemy przewagę, która zostaje Twoja."*
- **No emoji.** Polish typography uses proper quotes „ ".
- **Bilingual:** PL is default; EN is a faithful, equally terse translation. Every string ships in both.

---

## 3. Visual foundations

**Palette — "Sparx Green".** Three section backgrounds, green leads everywhere.
- **Forest** `#0C1A12` — deep green-black, primary dark sections & strong text on light. `forest-2 #14271C` cards, `forest-3 #1C3527` raised.
- **Cloud** `#F3F7F3` — greenish-white light sections; `white` cards.
- **Graphite** `#21262A` — *neutral* dark, the third background tone (added per brand direction) for rhythm against forest; `graphite-2 #2B3136` cards.
- **Green** `#109B24` — brand accent (icons, underlines, step numbers). **Green-cta** `#0C7D1C` — the single dominant CTA fill (white text, AA) + links on light. Hover `#0A6817`.
- **Lime** `#5CC76C` — the **pop**: big numbers / accent **on dark sections only**. Never as text on light.
- **Mist** `#5B6B60` secondary text on light · **mist-dark** `#9DB0A2` on dark · **text-light** `#E7F0E9` body on dark · **line** `#E3EAE4` borders on light.
- **Trust:** compliance badges (RODO/ISO) use green-cta on a 12% green tint.

**Typography.** **Inter** system-wide — matching the live site (sparx.wtf: `Inter, system-ui, sans-serif`). Headings differentiate by weight + tight tracking (Inter 600–700, tracking −0.015 to −0.03em) rather than a separate display face; body is Inter 400–500. Scale: h1 62 / h2 40 / h3 22 / body 17–18 / stat 64–96px. Line-height 1.1 headings, 1.6 body. Eyebrows are UPPERCASE +0.16em.

**Sections & rhythm.** Alternating tone: cloud (light) ↔ forest/graphite (dark), with the green CTA pulling the eye. Dark sections carry a **subtle lime dot-grid** texture, faded with a mask. Generous vertical rhythm (`--section-y`, clamp 4–8rem).

**Logo.** Use the **provided brand logo** (`assets/sparx-logo-onlight.png` on light surfaces; `assets/sparx-logo-ondark.png` — wordmark recolored light, green mark kept — on forest/graphite; add `filter: brightness(0) invert(1)` for all-white on the green CTA section). `assets/sparx-mark.png` is the mark alone. **Do not recreate the logo** — these are processed from the original the client supplied (white background removed). The green hexagonal mark + "SPARX" wordmark + "Go beyond the limit" tagline.

**Imagery & motifs.** Everything else is **light SVG/CSS**, never heavy raster or stock clichés.
- **Rising peaks / chevrons** — decorative hero graphic echoing the logo's "go beyond the limit" idea: ascending green→lime peaks. (`assets/hero-peaks.svg`.)
- **Dot grid** on dark backgrounds.
- Product screenshots are **labelled dashed placeholders** until real shots arrive.

**Shape & elevation.** Cards: **16px radius**, soft low green-tinted shadow on light, **border-only (no shadow, no neon glow)** on dark. Buttons & badges are **pills** (999px). Borders: `line` on light, 10% white on dark.

**Motion.** Restrained. Gentle **fade-up** on scroll (reveal), **count-up** on stats, a subtle entrance on the hero peaks. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`; entrances use a soft ease-out. **Always respects `prefers-reduced-motion`.** No bounce, no infinite loops.

**Interaction states.** Hover: CTA darkens (green-cta → hover); secondary/outline gains green border + text; cards lift 3px (light) or brighten their border (dark); links nudge their arrow. Press: CTA → press green. Focus: 2px green outline / 3px green ring. Touch targets ≥ 44px.

**Layout fixtures.** Sticky blurred forest nav (desktop). On mobile: hamburger + full-screen menu, single column, hero graphic hidden, and a **fixed bottom bar** with "Umów rozmowę" + a phone-tap icon.

---

## 4. Iconography

- **UI icons** are thin **line icons, Lucide weight** (`stroke-width ~1.8`, round caps/joins, 24px viewBox, `currentColor`). They are authored inline in components/kits (calendar, mail, phone, LinkedIn, arrow, check, menu, close) — substitute the real **Lucide** set 1:1 in production if you prefer a CDN.
- **Sector icons** live in `assets/` as stroke SVGs: `icon-health`, `icon-research`, `icon-tender`, `icon-biotech` (DNA), `icon-retail` (basket). Because `<img>` can't inherit `currentColor`, tint them with the CSS **mask** technique: `background: var(--accent); -webkit-mask: url(icon.svg) center/contain no-repeat;`.
- **No emoji.** No unicode pictographs as icons. The only "decorative glyph" is the brand peaks mark.

---

## 5. Index / manifest

**Root**
- `styles.css` — entry point (imports only). `tokens/` — `colors · typography · spacing · radius · shadows · motion · base`. `fonts/fonts.css` — Google Fonts import. `assets/` — logos, peaks mark, hero peaks, dot grid, sector icons.
- `SKILL.md` — Agent-Skill front-matter for downstream use.

**Components** (`window.SPARXDesignSystem_59b6c5.*`) — call `check_design_system` for the live namespace.
- `components/core/` — **Button**, **IconButton**, **Badge**
- `components/forms/` — **Input**, **Textarea**
- `components/surfaces/` — **Card**, **StatBlock** (count-up), **StepItem**, **SectorCard**, **ContrastRow**
- `components/navigation/` — **LangToggle** (PL/EN)

**UI kit**
- `ui_kits/landing/` — the full bilingual landing page (`index.html`), assembled from the components: Nav · Hero · Problem · Solution · How · Work (Realizacje) · Audience · Partners · Contact · Footer + mobile sticky bar. Sections split across `helpers.jsx`, `nav-hero.jsx`, `sections-mid.jsx`, `sections-work.jsx`, `sections-end.jsx`, `app.jsx`; layout in `kit.css`.

**Slides** (`slides/`, 1280×720) — `TitleSlide`, `StatSlide`, `ProcessSlide`, `CaseStudySlide`, `ClosingSlide`.

**Foundation cards** (`guidelines/`) — color, type, spacing, brand specimen cards rendered in the Design System tab.

> Explore the GitHub repo `https://github.com/JMPaulus/sparx` for any production code the team adds later — building from real source beats rebuilding from this spec.
