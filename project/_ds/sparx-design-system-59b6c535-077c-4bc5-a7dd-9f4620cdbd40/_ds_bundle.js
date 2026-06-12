/* @ds-bundle: {"format":3,"namespace":"SPARXDesignSystem_59b6c5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"LangToggle","sourcePath":"components/navigation/LangToggle.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ContrastRow","sourcePath":"components/surfaces/ContrastRow.jsx"},{"name":"SectorCard","sourcePath":"components/surfaces/SectorCard.jsx"},{"name":"StatBlock","sourcePath":"components/surfaces/StatBlock.jsx"},{"name":"StepItem","sourcePath":"components/surfaces/StepItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"503953ede696","components/core/Button.jsx":"31b0e6ffb4b5","components/core/IconButton.jsx":"8913ebd4fb1b","components/forms/Input.jsx":"2c3e0f3353e0","components/forms/Textarea.jsx":"1b1fd9fd0c93","components/navigation/LangToggle.jsx":"7f8ec61e46e8","components/surfaces/Card.jsx":"0adaedd9a249","components/surfaces/ContrastRow.jsx":"e4742cf075e7","components/surfaces/SectorCard.jsx":"b781c1ebaa0d","components/surfaces/StatBlock.jsx":"6e7ca8a49f9c","components/surfaces/StepItem.jsx":"efe7320ec80e","site/js/app.jsx":"f8f9721735d8","site/js/config.js":"723a7054450b","site/js/consent.js":"69d0efb73b53","site/js/ds-bundle.js":"bded1dc703f8","site/js/helpers.jsx":"5601e3c92d34","site/js/nav-hero.jsx":"456f06812c8c","site/js/sections-end.jsx":"f3f6f3f845f2","site/js/sections-mid.jsx":"b2b0c387fd8a","site/js/sections-work.jsx":"f6642b943bd3","ui_kits/landing/app.jsx":"3a491aca857d","ui_kits/landing/helpers.jsx":"63891dd20260","ui_kits/landing/nav-hero.jsx":"30ad551a306f","ui_kits/landing/sections-end.jsx":"68c48f7e13b1","ui_kits/landing/sections-mid.jsx":"b2b0c387fd8a","ui_kits/landing/sections-work.jsx":"7318328c441c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SPARXDesignSystem_59b6c5 = window.SPARXDesignSystem_59b6c5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-badge-css")) {
  const s = document.createElement("style");
  s.id = "sx-badge-css";
  s.textContent = `
  .sx-badge{
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-body); font-weight: var(--fw-semibold);
    font-size: var(--fs-xs); line-height: 1; letter-spacing: 0.01em;
    padding: 6px 11px; border-radius: var(--radius-pill);
    border: 1px solid transparent; white-space: nowrap;
  }
  .sx-badge--neutral{ background: var(--surface-subtle); color: var(--green-cta); }
  .sx-badge--trust{ background: var(--trust-bg); color: var(--trust-fg); }
  .sx-badge--sector{ background: transparent; color: var(--text-muted); border-color: var(--border-strong); }
  .sx-badge--live{ background: var(--trust-bg); color: var(--green-cta); }
  .sx-badge--onink{ background: rgba(255,255,255,0.08); color: var(--text-on-ink-muted); border-color: var(--border-ink); }
  .sx-badge__dot{ width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
  .sx-badge--live .sx-badge__dot{ background: var(--green); box-shadow: 0 0 0 3px rgba(16,155,36,0.18); }
  `;
  document.head.appendChild(s);
}

/**
 * Small pill badge — sector tags and compliance/trust markers
 * (RODO, ISO 27001), plus a "live" state with a pulse dot.
 */
function Badge({
  variant = "neutral",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["sx-badge", `sx-badge--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot || variant === "live" ? /*#__PURE__*/React.createElement("span", {
    className: "sx-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. */
if (typeof document !== "undefined" && !document.getElementById("sx-button-css")) {
  const s = document.createElement("style");
  s.id = "sx-button-css";
  s.textContent = `
  .sx-btn{
    font-family: var(--font-body);
    font-weight: var(--fw-semibold);
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    border-radius: var(--radius-pill); border: 1px solid transparent;
    cursor: pointer; text-decoration: none; white-space: nowrap;
    transition: background var(--dur-base) var(--ease-standard),
                color var(--dur-base) var(--ease-standard),
                border-color var(--dur-base) var(--ease-standard),
                box-shadow var(--dur-base) var(--ease-standard),
                transform var(--dur-fast) var(--ease-standard);
  }
  .sx-btn:active{ transform: translateY(1px); }
  .sx-btn--sm{ padding: 8px 16px; font-size: var(--fs-sm); }
  .sx-btn--md{ padding: 12px 22px; font-size: 15px; }
  .sx-btn--lg{ padding: 15px 28px; font-size: var(--fs-body); }
  .sx-btn--full{ width: 100%; }

  .sx-btn--primary{ background: var(--accent-cta); color: var(--on-accent); box-shadow: var(--shadow-cta); }
  .sx-btn--primary:hover{ background: var(--accent-cta-hover); }
  .sx-btn--primary:active{ background: var(--accent-cta-press); }

  .sx-btn--secondary{ background: transparent; color: var(--text-strong); border-color: var(--border-strong); }
  .sx-btn--secondary:hover{ color: var(--accent); border-color: var(--accent); }

  .sx-btn--ghost{ background: transparent; color: var(--text-body); }
  .sx-btn--ghost:hover{ background: var(--surface-subtle); color: var(--text-strong); }

  .sx-btn--dark{ background: rgba(255,255,255,0.08); color: var(--text-on-ink); border-color: var(--border-ink); }
  .sx-btn--dark:hover{ background: rgba(255,255,255,0.14); border-color: var(--border-ink-strong); }

  .sx-btn[disabled], .sx-btn[aria-disabled="true"]{ opacity: 0.45; pointer-events: none; box-shadow: none; }
  .sx-btn__icon{ display: inline-flex; width: 1.1em; height: 1.1em; }
  .sx-btn__icon svg{ width: 100%; height: 100%; }
  `;
  document.head.appendChild(s);
}

/**
 * SPARX primary action button. One dominant primary per view ("Umów rozmowę").
 */
function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["sx-btn", `sx-btn--${variant}`, `sx-btn--${size}`, fullWidth ? "sx-btn--full" : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "sx-btn__icon"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "sx-btn__icon"
  }, iconRight) : null);
  if (as === "a") {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      "aria-disabled": disabled || undefined
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "sx-iconbtn-css";
  s.textContent = `
  .sx-iconbtn{
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill); border: 1px solid transparent;
    cursor: pointer; background: transparent; color: var(--text-strong);
    transition: background var(--dur-base) var(--ease-standard),
                color var(--dur-base) var(--ease-standard),
                border-color var(--dur-base) var(--ease-standard);
  }
  .sx-iconbtn svg, .sx-iconbtn img{ width: 55%; height: 55%; display: block; }
  .sx-iconbtn--md{ width: 44px; height: 44px; }      /* 44px min touch target */
  .sx-iconbtn--lg{ width: 52px; height: 52px; }
  .sx-iconbtn--ghost:hover{ background: var(--surface-subtle); }
  .sx-iconbtn--solid{ background: var(--accent-cta); color: var(--on-accent); }
  .sx-iconbtn--solid:hover{ background: var(--accent-cta-hover); }
  .sx-iconbtn--outline{ border-color: var(--border-strong); }
  .sx-iconbtn--outline:hover{ border-color: var(--accent); color: var(--accent); }
  .sx-iconbtn--dark{ color: var(--text-on-ink); border-color: var(--border-ink); }
  .sx-iconbtn--dark:hover{ background: rgba(255,255,255,0.10); }
  `;
  document.head.appendChild(s);
}

/**
 * Square-ish icon-only button. Always pass `label` for a11y.
 * 44px default keeps the mobile touch target compliant.
 */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  as = "button",
  href,
  className = "",
  ...rest
}) {
  const cls = ["sx-iconbtn", `sx-iconbtn--${variant}`, `sx-iconbtn--${size}`, className].filter(Boolean).join(" ");
  if (as === "a") {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      "aria-label": label
    }, rest), icon);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-field-css")) {
  const s = document.createElement("style");
  s.id = "sx-field-css";
  s.textContent = `
  .sx-field{ display: flex; flex-direction: column; gap: 7px; }
  .sx-field__label{ font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--text-strong); }
  .sx-field__req{ color: var(--accent); margin-left: 2px; }
  .sx-field__opt{ color: var(--text-faint); font-weight: var(--fw-regular); margin-left: 6px; font-size: var(--fs-xs); }
  .sx-control{
    width: 100%; box-sizing: border-box; font-family: var(--font-body); font-size: var(--fs-body);
    color: var(--text-strong); background: var(--white);
    border: 1px solid var(--border-strong); border-radius: var(--radius-sm);
    transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
  }
  .sx-control::placeholder{ color: var(--text-faint); }
  .sx-control:hover{ border-color: var(--mist); }
  .sx-control:focus{ outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--ring); }
  .sx-input{ height: 50px; padding: 0 14px; }   /* high touch target */
  .sx-textarea{ min-height: 120px; padding: 12px 14px; line-height: 1.5; resize: vertical; }
  .sx-field__hint{ font-size: var(--fs-xs); color: var(--text-muted); }
  .sx-field--error .sx-control{ border-color: var(--danger); }
  .sx-field--error .sx-field__hint{ color: var(--danger); }
  `;
  document.head.appendChild(s);
}

/** Labelled text input. Keep contact forms minimal: name + email required. */
function Input({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || name;
  return /*#__PURE__*/React.createElement("div", {
    className: ["sx-field", error ? "sx-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sx-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__opt"
  }, "opcjonalne") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    name: name,
    type: type,
    required: required,
    className: "sx-control sx-input"
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__hint"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multiline text field. Shares field styling with Input. */
function Textarea({
  label,
  name,
  required = false,
  optional = false,
  hint,
  error,
  rows = 4,
  id,
  className = "",
  ...rest
}) {
  const fieldId = id || name;
  return /*#__PURE__*/React.createElement("div", {
    className: ["sx-field", error ? "sx-field--error" : "", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sx-field__label",
    htmlFor: fieldId
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__opt"
  }, "opcjonalne") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    name: name,
    required: required,
    rows: rows,
    className: "sx-control sx-textarea"
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__hint"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LangToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-lang-css")) {
  const s = document.createElement("style");
  s.id = "sx-lang-css";
  s.textContent = `
  .sx-lang{ display: inline-flex; align-items: center; gap: 2px; padding: 3px;
    border-radius: var(--radius-pill); border: 1px solid var(--border-strong); background: var(--white); }
  .sx-lang__opt{ font-family: var(--font-body); font-weight: var(--fw-semibold); font-size: var(--fs-xs);
    letter-spacing: 0.04em; color: var(--text-muted); background: transparent; border: none; cursor: pointer;
    padding: 5px 11px; border-radius: var(--radius-pill); transition: background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard); }
  .sx-lang__opt[aria-pressed="true"]{ background: var(--green-cta); color: #fff; }
  .sx-lang--dark{ background: rgba(255,255,255,0.06); border-color: var(--border-ink); }
  .sx-lang--dark .sx-lang__opt{ color: var(--text-on-ink-muted); }
  .sx-lang--dark .sx-lang__opt[aria-pressed="true"]{ background: var(--green); color: #fff; }
  `;
  document.head.appendChild(s);
}

/** PL / EN segmented toggle. Default PL; persist the choice in the host app. */
function LangToggle({
  value = "pl",
  onChange,
  options = ["pl", "en"],
  tone = "light",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sx-lang", tone === "dark" ? "sx-lang--dark" : "", className].filter(Boolean).join(" "),
    role: "group",
    "aria-label": "J\u0119zyk / Language"
  }, rest), options.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt,
    type: "button",
    className: "sx-lang__opt",
    "aria-pressed": value === opt,
    onClick: () => onChange && onChange(opt)
  }, opt.toUpperCase())));
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-card-css")) {
  const s = document.createElement("style");
  s.id = "sx-card-css";
  s.textContent = `
  .sx-card{
    border-radius: var(--radius-lg);           /* 16px per spec */
    border: 1px solid var(--border);
    background: var(--surface-card);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);               /* soft low shadow, no glow */
  }
  .sx-card--ink{ background: var(--surface-card-ink); border-color: var(--border-ink); box-shadow: none; color: var(--text-on-ink); }
  .sx-card--graphite{ background: var(--surface-card-graphite); border-color: var(--border-ink); box-shadow: none; color: var(--text-on-ink); }
  .sx-card--flush{ padding: 0; overflow: hidden; }
  .sx-card--interactive{ transition: transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard); }
  .sx-card--interactive:hover{ transform: translateY(-3px); box-shadow: var(--shadow-md); }
  .sx-card--ink.sx-card--interactive:hover, .sx-card--graphite.sx-card--interactive:hover{ box-shadow: none; border-color: var(--border-ink-strong); }
  `;
  document.head.appendChild(s);
}

/** Surface container. 16px radius, soft shadow on light; border-only on dark. */
function Card({
  tone = "light",
  flush = false,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["sx-card", tone === "ink" ? "sx-card--ink" : "", tone === "graphite" ? "sx-card--graphite" : "", flush ? "sx-card--flush" : "", interactive ? "sx-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ContrastRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-contrast-css")) {
  const s = document.createElement("style");
  s.id = "sx-contrast-css";
  s.textContent = `
  .sx-contrast{ display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
  .sx-contrast__col{ border-radius: var(--radius-md); padding: var(--space-5); border: 1px solid var(--border-ink); }
  .sx-contrast__tag{ font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.08em; text-transform: uppercase; }
  .sx-contrast__text{ margin-top: var(--space-2); font-size: var(--fs-h4); font-weight: var(--fw-medium); line-height: 1.3; }
  .sx-contrast__col--them{ background: transparent; }
  .sx-contrast__col--them .sx-contrast__tag{ color: var(--text-on-ink-faint); }
  .sx-contrast__col--them .sx-contrast__text{ color: var(--text-on-ink-muted); }
  .sx-contrast__col--us{ background: rgba(92,199,108,0.10); border-color: rgba(92,199,108,0.35); }
  .sx-contrast__col--us .sx-contrast__tag{ color: var(--lime); }
  .sx-contrast__col--us .sx-contrast__text{ color: var(--text-on-ink); }
  @media (max-width: 640px){ .sx-contrast{ grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(s);
}

/** "Others vs us" two-column contrast. Designed for forest/graphite sections. */
function ContrastRow({
  themLabel = "Inni",
  usLabel = "My",
  them,
  us,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["sx-contrast", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__col sx-contrast__col--them"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__tag"
  }, themLabel), /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__text"
  }, them)), /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__col sx-contrast__col--us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__tag"
  }, usLabel), /*#__PURE__*/React.createElement("div", {
    className: "sx-contrast__text"
  }, us)));
}
Object.assign(__ds_scope, { ContrastRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ContrastRow.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/SectorCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-sector-css")) {
  const s = document.createElement("style");
  s.id = "sx-sector-css";
  s.textContent = `
  .sx-sector{
    display: flex; flex-direction: column; gap: var(--space-3);
    background: var(--surface-card-ink); border: 1px solid var(--border-ink);
    border-radius: var(--radius-lg); padding: var(--space-5); height: 100%; box-sizing: border-box;
    transition: border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
  }
  .sx-sector:hover{ border-color: var(--border-ink-strong); transform: translateY(-3px); }
  .sx-sector--graphite{ background: var(--surface-card-graphite); }
  .sx-sector__media{
    border-radius: var(--radius-md); margin-bottom: var(--space-2);
    aspect-ratio: 16 / 9; overflow: hidden;
    background: var(--bg-ink-deep);
    border: 1px dashed var(--border-ink-strong);
    display: flex; align-items: center; justify-content: center; text-align: center;
    color: var(--text-on-ink-faint); font-size: var(--fs-xs); padding: var(--space-4);
  }
  .sx-sector__media img{ width: 100%; height: 100%; object-fit: cover; }
  .sx-sector__icon{ width: 34px; height: 34px; background: var(--lime);
    -webkit-mask: var(--ic) center / contain no-repeat; mask: var(--ic) center / contain no-repeat; }
  .sx-sector__tag{ font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.04em; color: var(--lime); text-transform: uppercase; }
  .sx-sector__title{ font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h3); line-height: 1.18; color: var(--text-on-ink); }
  .sx-sector__body{ font-size: var(--fs-sm); line-height: 1.55; color: var(--text-on-ink-muted); }
  .sx-sector__proof{ display: flex; gap: 8px; font-size: var(--fs-xs); color: var(--mist-dark); line-height: 1.45; margin-top: auto; padding-top: var(--space-3); }
  .sx-sector__proof svg{ width: 15px; height: 15px; color: var(--lime); flex: none; margin-top: 1px; }
  .sx-sector__cta{ display: inline-flex; align-items: center; gap: 6px; font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--lime); }
  .sx-sector__cta:hover{ gap: 9px; }
  .sx-sector__cta svg{ width: 16px; height: 16px; transition: transform var(--dur-base) var(--ease-standard); }
  `;
  document.head.appendChild(s);
}
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));

/**
 * Case-study card for the "Realizacje" grid. Lives on forest/graphite.
 * Provide either an `image` (screenshot placeholder text or node) or an `icon` src.
 */
function SectorCard({
  tag,
  title,
  body,
  proof,
  ctaLabel,
  href = "#kontakt",
  icon,
  image,
  tone = "ink",
  className = "",
  ...rest
}) {
  const cls = ["sx-sector", tone === "graphite" ? "sx-sector--graphite" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), image !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: "sx-sector__media"
  }, typeof image === "string" ? image : image) : icon ? /*#__PURE__*/React.createElement("div", {
    className: "sx-sector__icon",
    style: {
      "--ic": `url(${icon})`
    }
  }) : null, tag ? /*#__PURE__*/React.createElement("div", {
    className: "sx-sector__tag"
  }, tag) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "sx-sector__title"
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    className: "sx-sector__body"
  }, body) : null, proof ? /*#__PURE__*/React.createElement("div", {
    className: "sx-sector__proof"
  }, /*#__PURE__*/React.createElement(Check, null), proof) : null, ctaLabel ? /*#__PURE__*/React.createElement("a", {
    className: "sx-sector__cta",
    href: href
  }, ctaLabel, " ", /*#__PURE__*/React.createElement(Arrow, null)) : null);
}
Object.assign(__ds_scope, { SectorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/SectorCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-stat-css")) {
  const s = document.createElement("style");
  s.id = "sx-stat-css";
  s.textContent = `
  .sx-stat__num{
    font-family: var(--font-display); font-weight: var(--fw-bold);
    font-size: clamp(3.5rem, 7vw, var(--fs-stat)); line-height: 1; letter-spacing: -0.03em;
    color: var(--stat-on-light); display: block;
  }
  .sx-stat--dark .sx-stat__num{ color: var(--stat-on-dark); }   /* lime on forest/graphite */
  .sx-stat__label{ display: block; margin-top: var(--space-4); font-size: var(--fs-body); line-height: 1.5; color: var(--text-body); max-width: 30ch; }
  .sx-stat--dark .sx-stat__label{ color: var(--text-on-ink); }
  .sx-stat__source{ display: block; margin-top: var(--space-3); font-size: var(--fs-xs); color: var(--text-faint); }
  .sx-stat--dark .sx-stat__source{ color: var(--text-on-ink-faint); }
  `;
  document.head.appendChild(s);
}
const prefersReduced = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Big stat: huge number (count-up on scroll) + short label + small source.
 * Light → green-cta number; dark → lime number.
 */
function StatBlock({
  value,
  label,
  source,
  tone = "light",
  animate = true,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const m = String(value).match(/^(\D*)(\d[\d.,]*)(.*)$/);
  const prefix = m ? m[1] : "";
  const target = m ? parseFloat(m[2].replace(",", ".")) : 0;
  const decimals = m && m[2].includes(".") ? (m[2].split(".")[1] || "").length : 0;
  const suffix = m ? m[3] : "";
  const [shown, setShown] = React.useState(animate && m ? 0 : target);
  React.useEffect(() => {
    if (!animate || !m || prefersReduced()) {
      setShown(target);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let started = false,
      raf = 0,
      guard = 0,
      io = null;
    const run = () => {
      if (started) return;
      started = true;
      const dur = 1500,
        t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        setShown(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // Guarantee the final value even if rAF is throttled/paused.
      guard = setTimeout(() => setShown(target), dur + 400);
    };
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    if (el.getBoundingClientRect().top < vh * 0.92) {
      run();
    } else if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !started) {
            run();
            io.disconnect();
          }
        });
      }, {
        threshold: 0.4
      });
      io.observe(el);
    } else {
      run();
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(guard);
      if (io) io.disconnect();
    };
  }, [animate, target]);
  const display = m ? prefix + shown.toFixed(decimals) + suffix : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: ["sx-stat", tone === "dark" ? "sx-stat--dark" : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sx-stat__num"
  }, display), label ? /*#__PURE__*/React.createElement("span", {
    className: "sx-stat__label"
  }, label) : null, source ? /*#__PURE__*/React.createElement("span", {
    className: "sx-stat__source"
  }, source) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== "undefined" && !document.getElementById("sx-step-css")) {
  const s = document.createElement("style");
  s.id = "sx-step-css";
  s.textContent = `
  .sx-step{ display: flex; flex-direction: column; gap: var(--space-3); }
  .sx-step__n{
    width: 40px; height: 40px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-display); font-weight: var(--fw-bold); font-size: 18px;
    background: var(--green); color: #fff;
  }
  .sx-step__title{ font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h3); color: var(--text-strong); }
  .sx-step__desc{ font-size: var(--fs-sm); color: var(--text-muted); }
  .sx-step--dark .sx-step__title{ color: var(--text-on-ink); }
  .sx-step--dark .sx-step__desc{ color: var(--text-on-ink-muted); }
  .sx-step--ghost .sx-step__n{ background: var(--surface-subtle); color: var(--green-cta); }
  `;
  document.head.appendChild(s);
}

/** One numbered step in the "how it works" sequence. */
function StepItem({
  n,
  title,
  desc,
  tone = "light",
  ghostNumber = false,
  className = "",
  ...rest
}) {
  const cls = ["sx-step", tone === "dark" ? "sx-step--dark" : "", ghostNumber ? "sx-step--ghost" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sx-step__n"
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "sx-step__title"
  }, title), desc ? /*#__PURE__*/React.createElement("span", {
    className: "sx-step__desc"
  }, desc) : null);
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StepItem.jsx", error: String((e && e.message) || e) }); }

// site/js/app.jsx
try { (() => {
/* Sparx site — app root: per-page language + assembly.
   Language is fixed per page (/pl/ or /en/) for SEO; the toggle navigates. */
const {
  Nav,
  Hero,
  Problem,
  Solution,
  How,
  Work,
  Audience,
  Partners,
  Contact,
  Footer,
  MobileBar
} = window.SX;
function App() {
  const lang = window.__SPARX_LANG === "en" ? "en" : "pl";
  const langUrls = window.__SPARX_LANGS || {
    pl: "../pl/",
    en: "../en/"
  };
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, []);
  const setLang = l => {
    if (l !== lang && langUrls[l]) window.location.href = langUrls[l];
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kit"
  }, /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Problem, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Solution, {
    lang: lang
  }), /*#__PURE__*/React.createElement(How, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Work, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Audience, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Partners, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Contact, {
    lang: lang
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }), /*#__PURE__*/React.createElement(MobileBar, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/app.jsx", error: String((e && e.message) || e) }); }

// site/js/config.js
try { (() => {
/* ============================================================
   Sparx — konfiguracja strony.
   PODMIEŃ wartości oznaczone jako placeholder na realne dane.
   Plik ładowany na każdej stronie PRZED komponentami.
   ============================================================ */
window.SPARX_CONFIG = {
  /* === Dane kontaktowe (PLACEHOLDER — podmień) === */
  email: "kontakt@sparx.ai",
  emailHref: "mailto:kontakt@sparx.ai",
  phone: "+48 000 000 000",
  phoneHref: "tel:+48000000000",
  calendly: "https://calendly.com/sparx/30min",
  linkedin: "https://www.linkedin.com/company/sparx",
  nip: "7792229459",
  /* === Produkty (Radary) === */
  products: {
    nfz: "https://nfz-radar.pl",
    ncbr: "https://ncbr-radar.pl",
    przetargi: "https://przetargi-radar.pl"
  },
  /* === Backend formularzy ===
     Zostaw puste ("") = tryb demo (pokaże potwierdzenie bez wysyłki).
     Podaj URL = POST JSON na ten endpoint.
       Lead:       { imie, firma, email, wiadomosc, lang, source:"contact" }
       Newsletter: { email, lang, source:"newsletter" }                       */
  formEndpoint: "",
  // np. "https://api.sparx.ai/lead"
  newsletterEndpoint: "",
  // np. "https://api.sparx.ai/newsletter"

  /* === Analityka === wczytywana DOPIERO po zgodzie w banerze cookies. */
  analytics: {
    provider: "",
    // "plausible" | "ga" | "" (wyłączone)
    plausibleDomain: "sparx.ai",
    gaId: "G-XXXXXXXXXX"
  },
  /* === Domena kanoniczna === używana w meta/sitemap. PODMIEŃ. */
  domain: "https://www.sparx.ai"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/config.js", error: String((e && e.message) || e) }); }

// site/js/consent.js
try { (() => {
/* ============================================================
   Sparx — baner zgody na cookies / analitykę.
   Analityka (Plausible / GA) wczytywana TYLKO po akceptacji.
   Konfiguracja w config.js → SPARX_CONFIG.analytics.
   ============================================================ */
(function () {
  var KEY = "sparx-consent";
  var lang = window.__SPARX_LANG === "en" ? "en" : "pl";
  var CFG = window.SPARX_CONFIG && window.SPARX_CONFIG.analytics || {};
  var T = {
    pl: {
      text: "Używamy plików cookie do analityki, aby ulepszać stronę. Możesz zaakceptować lub korzystać tylko z niezbędnych.",
      accept: "Akceptuję",
      reject: "Tylko niezbędne",
      more: "Polityka prywatności",
      privacy: "../pl/prywatnosc.html"
    },
    en: {
      text: "We use cookies for analytics to improve the site. You can accept, or use necessary cookies only.",
      accept: "Accept",
      reject: "Necessary only",
      more: "Privacy policy",
      privacy: "../en/privacy.html"
    }
  }[lang];
  var analyticsLoaded = false;
  function loadAnalytics() {
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    var p = (CFG.provider || "").toLowerCase();
    if (p === "plausible" && CFG.plausibleDomain) {
      var s = document.createElement("script");
      s.defer = true;
      s.setAttribute("data-domain", CFG.plausibleDomain);
      s.src = "https://plausible.io/js/script.js";
      document.head.appendChild(s);
    } else if (p === "ga" && CFG.gaId) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://www.googletagmanager.com/gtag/js?id=" + CFG.gaId;
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", CFG.gaId, {
        anonymize_ip: true
      });
    }
    /* provider === "" → analityka wyłączona (placeholder). */
  }
  var bannerEl = null;
  function build() {
    if (bannerEl && bannerEl.isConnected) {
      bannerEl.classList.add("show");
      return;
    }
    var el = document.createElement("div");
    el.className = "sx-consent";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", lang === "en" ? "Cookie consent" : "Zgoda na cookies");
    el.innerHTML = '<p class="sx-consent__text">' + T.text + ' <a href="' + T.privacy + '">' + T.more + '</a>.</p>' + '<div class="sx-consent__btns">' + '<button type="button" class="sx-consent__btn sx-consent__btn--ghost" data-act="reject">' + T.reject + '</button>' + '<button type="button" class="sx-consent__btn sx-consent__btn--primary" data-act="accept">' + T.accept + '</button>' + '</div>';
    document.body.appendChild(el);
    el.addEventListener("click", function (e) {
      var act = e.target && e.target.getAttribute("data-act");
      if (!act) return;
      try {
        localStorage.setItem(KEY, act === "accept" ? "accepted" : "rejected");
      } catch (x) {}
      el.classList.remove("show");
      if (act === "accept") loadAnalytics();
    });
    void el.offsetWidth; /* wymuś reflow, by zadziałała animacja wejścia */
    el.classList.add("show");
    bannerEl = el;
  }
  var stored = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch (x) {}
  if (stored === "accepted") {
    loadAnalytics();
  } else if (stored !== "rejected") {
    if (document.body) build();else document.addEventListener("DOMContentLoaded", build);
  }

  /* Reopen from footer "Cookie settings". */
  window.sparxOpenConsent = function () {
    build();
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/consent.js", error: String((e && e.message) || e) }); }

// site/js/ds-bundle.js
try { (() => {
/* @ds-bundle: {"format":3,"namespace":"SPARXDesignSystem_59b6c5","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"LangToggle","sourcePath":"components/navigation/LangToggle.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ContrastRow","sourcePath":"components/surfaces/ContrastRow.jsx"},{"name":"SectorCard","sourcePath":"components/surfaces/SectorCard.jsx"},{"name":"StatBlock","sourcePath":"components/surfaces/StatBlock.jsx"},{"name":"StepItem","sourcePath":"components/surfaces/StepItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"503953ede696","components/core/Button.jsx":"31b0e6ffb4b5","components/core/IconButton.jsx":"8913ebd4fb1b","components/forms/Input.jsx":"2c3e0f3353e0","components/forms/Textarea.jsx":"1b1fd9fd0c93","components/navigation/LangToggle.jsx":"7f8ec61e46e8","components/surfaces/Card.jsx":"0adaedd9a249","components/surfaces/ContrastRow.jsx":"e4742cf075e7","components/surfaces/SectorCard.jsx":"b781c1ebaa0d","components/surfaces/StatBlock.jsx":"6e7ca8a49f9c","components/surfaces/StepItem.jsx":"efe7320ec80e","ui_kits/landing/app.jsx":"3a491aca857d","ui_kits/landing/helpers.jsx":"63891dd20260","ui_kits/landing/nav-hero.jsx":"30ad551a306f","ui_kits/landing/sections-end.jsx":"68c48f7e13b1","ui_kits/landing/sections-mid.jsx":"b2b0c387fd8a","ui_kits/landing/sections-work.jsx":"7318328c441c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.SPARXDesignSystem_59b6c5 = window.SPARXDesignSystem_59b6c5 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/core/Badge.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-badge-css")) {
        const s = document.createElement("style");
        s.id = "sx-badge-css";
        s.textContent = `
  .sx-badge{
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--font-body); font-weight: var(--fw-semibold);
    font-size: var(--fs-xs); line-height: 1; letter-spacing: 0.01em;
    padding: 6px 11px; border-radius: var(--radius-pill);
    border: 1px solid transparent; white-space: nowrap;
  }
  .sx-badge--neutral{ background: var(--surface-subtle); color: var(--green-cta); }
  .sx-badge--trust{ background: var(--trust-bg); color: var(--trust-fg); }
  .sx-badge--sector{ background: transparent; color: var(--text-muted); border-color: var(--border-strong); }
  .sx-badge--live{ background: var(--trust-bg); color: var(--green-cta); }
  .sx-badge--onink{ background: rgba(255,255,255,0.08); color: var(--text-on-ink-muted); border-color: var(--border-ink); }
  .sx-badge__dot{ width: 7px; height: 7px; border-radius: 50%; background: currentColor; }
  .sx-badge--live .sx-badge__dot{ background: var(--green); box-shadow: 0 0 0 3px rgba(16,155,36,0.18); }
  `;
        document.head.appendChild(s);
      }

      /**
       * Small pill badge — sector tags and compliance/trust markers
       * (RODO, ISO 27001), plus a "live" state with a pulse dot.
       */
      function Badge({
        variant = "neutral",
        dot = false,
        className = "",
        children,
        ...rest
      }) {
        const cls = ["sx-badge", `sx-badge--${variant}`, className].filter(Boolean).join(" ");
        return /*#__PURE__*/React.createElement("span", _extends({
          className: cls
        }, rest), dot || variant === "live" ? /*#__PURE__*/React.createElement("span", {
          className: "sx-badge__dot"
        }) : null, children);
      }
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /* Inject component CSS once. */
      if (typeof document !== "undefined" && !document.getElementById("sx-button-css")) {
        const s = document.createElement("style");
        s.id = "sx-button-css";
        s.textContent = `
  .sx-btn{
    font-family: var(--font-body);
    font-weight: var(--fw-semibold);
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    border-radius: var(--radius-pill); border: 1px solid transparent;
    cursor: pointer; text-decoration: none; white-space: nowrap;
    transition: background var(--dur-base) var(--ease-standard),
                color var(--dur-base) var(--ease-standard),
                border-color var(--dur-base) var(--ease-standard),
                box-shadow var(--dur-base) var(--ease-standard),
                transform var(--dur-fast) var(--ease-standard);
  }
  .sx-btn:active{ transform: translateY(1px); }
  .sx-btn--sm{ padding: 8px 16px; font-size: var(--fs-sm); }
  .sx-btn--md{ padding: 12px 22px; font-size: 15px; }
  .sx-btn--lg{ padding: 15px 28px; font-size: var(--fs-body); }
  .sx-btn--full{ width: 100%; }

  .sx-btn--primary{ background: var(--accent-cta); color: var(--on-accent); box-shadow: var(--shadow-cta); }
  .sx-btn--primary:hover{ background: var(--accent-cta-hover); }
  .sx-btn--primary:active{ background: var(--accent-cta-press); }

  .sx-btn--secondary{ background: transparent; color: var(--text-strong); border-color: var(--border-strong); }
  .sx-btn--secondary:hover{ color: var(--accent); border-color: var(--accent); }

  .sx-btn--ghost{ background: transparent; color: var(--text-body); }
  .sx-btn--ghost:hover{ background: var(--surface-subtle); color: var(--text-strong); }

  .sx-btn--dark{ background: rgba(255,255,255,0.08); color: var(--text-on-ink); border-color: var(--border-ink); }
  .sx-btn--dark:hover{ background: rgba(255,255,255,0.14); border-color: var(--border-ink-strong); }

  .sx-btn[disabled], .sx-btn[aria-disabled="true"]{ opacity: 0.45; pointer-events: none; box-shadow: none; }
  .sx-btn__icon{ display: inline-flex; width: 1.1em; height: 1.1em; }
  .sx-btn__icon svg{ width: 100%; height: 100%; }
  `;
        document.head.appendChild(s);
      }

      /**
       * SPARX primary action button. One dominant primary per view ("Umów rozmowę").
       */
      function Button({
        variant = "primary",
        size = "md",
        as = "button",
        href,
        iconLeft,
        iconRight,
        fullWidth = false,
        disabled = false,
        className = "",
        children,
        ...rest
      }) {
        const cls = ["sx-btn", `sx-btn--${variant}`, `sx-btn--${size}`, fullWidth ? "sx-btn--full" : "", className].filter(Boolean).join(" ");
        const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
          className: "sx-btn__icon"
        }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
          className: "sx-btn__icon"
        }, iconRight) : null);
        if (as === "a") {
          return /*#__PURE__*/React.createElement("a", _extends({
            className: cls,
            href: href,
            "aria-disabled": disabled || undefined
          }, rest), content);
        }
        return /*#__PURE__*/React.createElement("button", _extends({
          className: cls,
          disabled: disabled
        }, rest), content);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/IconButton.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-iconbtn-css")) {
        const s = document.createElement("style");
        s.id = "sx-iconbtn-css";
        s.textContent = `
  .sx-iconbtn{
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill); border: 1px solid transparent;
    cursor: pointer; background: transparent; color: var(--text-strong);
    transition: background var(--dur-base) var(--ease-standard),
                color var(--dur-base) var(--ease-standard),
                border-color var(--dur-base) var(--ease-standard);
  }
  .sx-iconbtn svg, .sx-iconbtn img{ width: 55%; height: 55%; display: block; }
  .sx-iconbtn--md{ width: 44px; height: 44px; }      /* 44px min touch target */
  .sx-iconbtn--lg{ width: 52px; height: 52px; }
  .sx-iconbtn--ghost:hover{ background: var(--surface-subtle); }
  .sx-iconbtn--solid{ background: var(--accent-cta); color: var(--on-accent); }
  .sx-iconbtn--solid:hover{ background: var(--accent-cta-hover); }
  .sx-iconbtn--outline{ border-color: var(--border-strong); }
  .sx-iconbtn--outline:hover{ border-color: var(--accent); color: var(--accent); }
  .sx-iconbtn--dark{ color: var(--text-on-ink); border-color: var(--border-ink); }
  .sx-iconbtn--dark:hover{ background: rgba(255,255,255,0.10); }
  `;
        document.head.appendChild(s);
      }

      /**
       * Square-ish icon-only button. Always pass `label` for a11y.
       * 44px default keeps the mobile touch target compliant.
       */
      function IconButton({
        icon,
        label,
        variant = "ghost",
        size = "md",
        as = "button",
        href,
        className = "",
        ...rest
      }) {
        const cls = ["sx-iconbtn", `sx-iconbtn--${variant}`, `sx-iconbtn--${size}`, className].filter(Boolean).join(" ");
        if (as === "a") {
          return /*#__PURE__*/React.createElement("a", _extends({
            className: cls,
            href: href,
            "aria-label": label
          }, rest), icon);
        }
        return /*#__PURE__*/React.createElement("button", _extends({
          className: cls,
          "aria-label": label
        }, rest), icon);
      }
      Object.assign(__ds_scope, {
        IconButton
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/IconButton.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-field-css")) {
        const s = document.createElement("style");
        s.id = "sx-field-css";
        s.textContent = `
  .sx-field{ display: flex; flex-direction: column; gap: 7px; }
  .sx-field__label{ font-size: var(--fs-sm); font-weight: var(--fw-semibold); color: var(--text-strong); }
  .sx-field__req{ color: var(--accent); margin-left: 2px; }
  .sx-field__opt{ color: var(--text-faint); font-weight: var(--fw-regular); margin-left: 6px; font-size: var(--fs-xs); }
  .sx-control{
    width: 100%; box-sizing: border-box; font-family: var(--font-body); font-size: var(--fs-body);
    color: var(--text-strong); background: var(--white);
    border: 1px solid var(--border-strong); border-radius: var(--radius-sm);
    transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
  }
  .sx-control::placeholder{ color: var(--text-faint); }
  .sx-control:hover{ border-color: var(--mist); }
  .sx-control:focus{ outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--ring); }
  .sx-input{ height: 50px; padding: 0 14px; }   /* high touch target */
  .sx-textarea{ min-height: 120px; padding: 12px 14px; line-height: 1.5; resize: vertical; }
  .sx-field__hint{ font-size: var(--fs-xs); color: var(--text-muted); }
  .sx-field--error .sx-control{ border-color: var(--danger); }
  .sx-field--error .sx-field__hint{ color: var(--danger); }
  `;
        document.head.appendChild(s);
      }

      /** Labelled text input. Keep contact forms minimal: name + email required. */
      function Input({
        label,
        name,
        type = "text",
        required = false,
        optional = false,
        hint,
        error,
        id,
        className = "",
        ...rest
      }) {
        const fieldId = id || name;
        return /*#__PURE__*/React.createElement("div", {
          className: ["sx-field", error ? "sx-field--error" : "", className].filter(Boolean).join(" ")
        }, label ? /*#__PURE__*/React.createElement("label", {
          className: "sx-field__label",
          htmlFor: fieldId
        }, label, required ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__req",
          "aria-hidden": "true"
        }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__opt"
        }, "opcjonalne") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
          id: fieldId,
          name: name,
          type: type,
          required: required,
          className: "sx-control sx-input"
        }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__hint"
        }, error || hint) : null);
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Textarea.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /** Multiline text field. Shares field styling with Input. */
      function Textarea({
        label,
        name,
        required = false,
        optional = false,
        hint,
        error,
        rows = 4,
        id,
        className = "",
        ...rest
      }) {
        const fieldId = id || name;
        return /*#__PURE__*/React.createElement("div", {
          className: ["sx-field", error ? "sx-field--error" : "", className].filter(Boolean).join(" ")
        }, label ? /*#__PURE__*/React.createElement("label", {
          className: "sx-field__label",
          htmlFor: fieldId
        }, label, required ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__req",
          "aria-hidden": "true"
        }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__opt"
        }, "opcjonalne") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
          id: fieldId,
          name: name,
          required: required,
          rows: rows,
          className: "sx-control sx-textarea"
        }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
          className: "sx-field__hint"
        }, error || hint) : null);
      }
      Object.assign(__ds_scope, {
        Textarea
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Textarea.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/LangToggle.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-lang-css")) {
        const s = document.createElement("style");
        s.id = "sx-lang-css";
        s.textContent = `
  .sx-lang{ display: inline-flex; align-items: center; gap: 2px; padding: 3px;
    border-radius: var(--radius-pill); border: 1px solid var(--border-strong); background: var(--white); }
  .sx-lang__opt{ font-family: var(--font-body); font-weight: var(--fw-semibold); font-size: var(--fs-xs);
    letter-spacing: 0.04em; color: var(--text-muted); background: transparent; border: none; cursor: pointer;
    padding: 5px 11px; border-radius: var(--radius-pill); transition: background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard); }
  .sx-lang__opt[aria-pressed="true"]{ background: var(--green-cta); color: #fff; }
  .sx-lang--dark{ background: rgba(255,255,255,0.06); border-color: var(--border-ink); }
  .sx-lang--dark .sx-lang__opt{ color: var(--text-on-ink-muted); }
  .sx-lang--dark .sx-lang__opt[aria-pressed="true"]{ background: var(--green); color: #fff; }
  `;
        document.head.appendChild(s);
      }

      /** PL / EN segmented toggle. Default PL; persist the choice in the host app. */
      function LangToggle({
        value = "pl",
        onChange,
        options = ["pl", "en"],
        tone = "light",
        className = "",
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: ["sx-lang", tone === "dark" ? "sx-lang--dark" : "", className].filter(Boolean).join(" "),
          role: "group",
          "aria-label": "J\u0119zyk / Language"
        }, rest), options.map(opt => /*#__PURE__*/React.createElement("button", {
          key: opt,
          type: "button",
          className: "sx-lang__opt",
          "aria-pressed": value === opt,
          onClick: () => onChange && onChange(opt)
        }, opt.toUpperCase())));
      }
      Object.assign(__ds_scope, {
        LangToggle
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/LangToggle.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surfaces/Card.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-card-css")) {
        const s = document.createElement("style");
        s.id = "sx-card-css";
        s.textContent = `
  .sx-card{
    border-radius: var(--radius-lg);           /* 16px per spec */
    border: 1px solid var(--border);
    background: var(--surface-card);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);               /* soft low shadow, no glow */
  }
  .sx-card--ink{ background: var(--surface-card-ink); border-color: var(--border-ink); box-shadow: none; color: var(--text-on-ink); }
  .sx-card--graphite{ background: var(--surface-card-graphite); border-color: var(--border-ink); box-shadow: none; color: var(--text-on-ink); }
  .sx-card--flush{ padding: 0; overflow: hidden; }
  .sx-card--interactive{ transition: transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard); }
  .sx-card--interactive:hover{ transform: translateY(-3px); box-shadow: var(--shadow-md); }
  .sx-card--ink.sx-card--interactive:hover, .sx-card--graphite.sx-card--interactive:hover{ box-shadow: none; border-color: var(--border-ink-strong); }
  `;
        document.head.appendChild(s);
      }

      /** Surface container. 16px radius, soft shadow on light; border-only on dark. */
      function Card({
        tone = "light",
        flush = false,
        interactive = false,
        className = "",
        children,
        ...rest
      }) {
        const cls = ["sx-card", tone === "ink" ? "sx-card--ink" : "", tone === "graphite" ? "sx-card--graphite" : "", flush ? "sx-card--flush" : "", interactive ? "sx-card--interactive" : "", className].filter(Boolean).join(" ");
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, rest), children);
      }
      Object.assign(__ds_scope, {
        Card
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surfaces/Card.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surfaces/ContrastRow.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-contrast-css")) {
        const s = document.createElement("style");
        s.id = "sx-contrast-css";
        s.textContent = `
  .sx-contrast{ display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
  .sx-contrast__col{ border-radius: var(--radius-md); padding: var(--space-5); border: 1px solid var(--border-ink); }
  .sx-contrast__tag{ font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.08em; text-transform: uppercase; }
  .sx-contrast__text{ margin-top: var(--space-2); font-size: var(--fs-h4); font-weight: var(--fw-medium); line-height: 1.3; }
  .sx-contrast__col--them{ background: transparent; }
  .sx-contrast__col--them .sx-contrast__tag{ color: var(--text-on-ink-faint); }
  .sx-contrast__col--them .sx-contrast__text{ color: var(--text-on-ink-muted); }
  .sx-contrast__col--us{ background: rgba(92,199,108,0.10); border-color: rgba(92,199,108,0.35); }
  .sx-contrast__col--us .sx-contrast__tag{ color: var(--lime); }
  .sx-contrast__col--us .sx-contrast__text{ color: var(--text-on-ink); }
  @media (max-width: 640px){ .sx-contrast{ grid-template-columns: 1fr; } }
  `;
        document.head.appendChild(s);
      }

      /** "Others vs us" two-column contrast. Designed for forest/graphite sections. */
      function ContrastRow({
        themLabel = "Inni",
        usLabel = "My",
        them,
        us,
        className = "",
        ...rest
      }) {
        return /*#__PURE__*/React.createElement("div", _extends({
          className: ["sx-contrast", className].filter(Boolean).join(" ")
        }, rest), /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__col sx-contrast__col--them"
        }, /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__tag"
        }, themLabel), /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__text"
        }, them)), /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__col sx-contrast__col--us"
        }, /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__tag"
        }, usLabel), /*#__PURE__*/React.createElement("div", {
          className: "sx-contrast__text"
        }, us)));
      }
      Object.assign(__ds_scope, {
        ContrastRow
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surfaces/ContrastRow.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surfaces/SectorCard.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-sector-css")) {
        const s = document.createElement("style");
        s.id = "sx-sector-css";
        s.textContent = `
  .sx-sector{
    display: flex; flex-direction: column; gap: var(--space-3);
    background: var(--surface-card-ink); border: 1px solid var(--border-ink);
    border-radius: var(--radius-lg); padding: var(--space-5); height: 100%; box-sizing: border-box;
    transition: border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
  }
  .sx-sector:hover{ border-color: var(--border-ink-strong); transform: translateY(-3px); }
  .sx-sector--graphite{ background: var(--surface-card-graphite); }
  .sx-sector__media{
    border-radius: var(--radius-md); margin-bottom: var(--space-2);
    aspect-ratio: 16 / 9; overflow: hidden;
    background: var(--bg-ink-deep);
    border: 1px dashed var(--border-ink-strong);
    display: flex; align-items: center; justify-content: center; text-align: center;
    color: var(--text-on-ink-faint); font-size: var(--fs-xs); padding: var(--space-4);
  }
  .sx-sector__media img{ width: 100%; height: 100%; object-fit: cover; }
  .sx-sector__icon{ width: 34px; height: 34px; background: var(--lime);
    -webkit-mask: var(--ic) center / contain no-repeat; mask: var(--ic) center / contain no-repeat; }
  .sx-sector__tag{ font-size: var(--fs-xs); font-weight: var(--fw-semibold); letter-spacing: 0.04em; color: var(--lime); text-transform: uppercase; }
  .sx-sector__title{ font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h3); line-height: 1.18; color: var(--text-on-ink); }
  .sx-sector__body{ font-size: var(--fs-sm); line-height: 1.55; color: var(--text-on-ink-muted); }
  .sx-sector__proof{ display: flex; gap: 8px; font-size: var(--fs-xs); color: var(--mist-dark); line-height: 1.45; margin-top: auto; padding-top: var(--space-3); }
  .sx-sector__proof svg{ width: 15px; height: 15px; color: var(--lime); flex: none; margin-top: 1px; }
  .sx-sector__cta{ display: inline-flex; align-items: center; gap: 6px; font-weight: var(--fw-semibold); font-size: var(--fs-sm); color: var(--lime); }
  .sx-sector__cta:hover{ gap: 9px; }
  .sx-sector__cta svg{ width: 16px; height: 16px; transition: transform var(--dur-base) var(--ease-standard); }
  `;
        document.head.appendChild(s);
      }
      const Check = () => /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M20 6 9 17l-5-5"
      }));
      const Arrow = () => /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));

      /**
       * Case-study card for the "Realizacje" grid. Lives on forest/graphite.
       * Provide either an `image` (screenshot placeholder text or node) or an `icon` src.
       */
      function SectorCard({
        tag,
        title,
        body,
        proof,
        ctaLabel,
        href = "#kontakt",
        icon,
        image,
        tone = "ink",
        className = "",
        ...rest
      }) {
        const cls = ["sx-sector", tone === "graphite" ? "sx-sector--graphite" : "", className].filter(Boolean).join(" ");
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, rest), image !== undefined ? /*#__PURE__*/React.createElement("div", {
          className: "sx-sector__media"
        }, typeof image === "string" ? image : image) : icon ? /*#__PURE__*/React.createElement("div", {
          className: "sx-sector__icon",
          style: {
            "--ic": `url(${icon})`
          }
        }) : null, tag ? /*#__PURE__*/React.createElement("div", {
          className: "sx-sector__tag"
        }, tag) : null, title ? /*#__PURE__*/React.createElement("h3", {
          className: "sx-sector__title"
        }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
          className: "sx-sector__body"
        }, body) : null, proof ? /*#__PURE__*/React.createElement("div", {
          className: "sx-sector__proof"
        }, /*#__PURE__*/React.createElement(Check, null), proof) : null, ctaLabel ? /*#__PURE__*/React.createElement("a", {
          className: "sx-sector__cta",
          href: href
        }, ctaLabel, " ", /*#__PURE__*/React.createElement(Arrow, null)) : null);
      }
      Object.assign(__ds_scope, {
        SectorCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surfaces/SectorCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surfaces/StatBlock.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-stat-css")) {
        const s = document.createElement("style");
        s.id = "sx-stat-css";
        s.textContent = `
  .sx-stat__num{
    font-family: var(--font-display); font-weight: var(--fw-bold);
    font-size: clamp(3.5rem, 7vw, var(--fs-stat)); line-height: 1; letter-spacing: -0.03em;
    color: var(--stat-on-light); display: block;
  }
  .sx-stat--dark .sx-stat__num{ color: var(--stat-on-dark); }   /* lime on forest/graphite */
  .sx-stat__label{ display: block; margin-top: var(--space-4); font-size: var(--fs-body); line-height: 1.5; color: var(--text-body); max-width: 30ch; }
  .sx-stat--dark .sx-stat__label{ color: var(--text-on-ink); }
  .sx-stat__source{ display: block; margin-top: var(--space-3); font-size: var(--fs-xs); color: var(--text-faint); }
  .sx-stat--dark .sx-stat__source{ color: var(--text-on-ink-faint); }
  `;
        document.head.appendChild(s);
      }
      const prefersReduced = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /**
       * Big stat: huge number (count-up on scroll) + short label + small source.
       * Light → green-cta number; dark → lime number.
       */
      function StatBlock({
        value,
        label,
        source,
        tone = "light",
        animate = true,
        className = "",
        ...rest
      }) {
        const ref = React.useRef(null);
        const m = String(value).match(/^(\D*)(\d[\d.,]*)(.*)$/);
        const prefix = m ? m[1] : "";
        const target = m ? parseFloat(m[2].replace(",", ".")) : 0;
        const decimals = m && m[2].includes(".") ? (m[2].split(".")[1] || "").length : 0;
        const suffix = m ? m[3] : "";
        const [shown, setShown] = React.useState(animate && m ? 0 : target);
        React.useEffect(() => {
          if (!animate || !m || prefersReduced()) {
            setShown(target);
            return;
          }
          const el = ref.current;
          if (!el) return;
          let started = false,
            raf = 0,
            guard = 0,
            io = null;
          const run = () => {
            if (started) return;
            started = true;
            const dur = 1500,
              t0 = performance.now();
            const tick = now => {
              const p = Math.min(1, (now - t0) / dur);
              setShown(target * (1 - Math.pow(1 - p, 3)));
              if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            // Guarantee the final value even if rAF is throttled/paused.
            guard = setTimeout(() => setShown(target), dur + 400);
          };
          const vh = window.innerHeight || document.documentElement.clientHeight || 800;
          if (el.getBoundingClientRect().top < vh * 0.92) {
            run();
          } else if (typeof IntersectionObserver !== "undefined") {
            io = new IntersectionObserver(entries => {
              entries.forEach(e => {
                if (e.isIntersecting && !started) {
                  run();
                  io.disconnect();
                }
              });
            }, {
              threshold: 0.4
            });
            io.observe(el);
          } else {
            run();
          }
          return () => {
            cancelAnimationFrame(raf);
            clearTimeout(guard);
            if (io) io.disconnect();
          };
        }, [animate, target]);
        const display = m ? prefix + shown.toFixed(decimals) + suffix : value;
        return /*#__PURE__*/React.createElement("div", _extends({
          ref: ref,
          className: ["sx-stat", tone === "dark" ? "sx-stat--dark" : "", className].filter(Boolean).join(" ")
        }, rest), /*#__PURE__*/React.createElement("span", {
          className: "sx-stat__num"
        }, display), label ? /*#__PURE__*/React.createElement("span", {
          className: "sx-stat__label"
        }, label) : null, source ? /*#__PURE__*/React.createElement("span", {
          className: "sx-stat__source"
        }, source) : null);
      }
      Object.assign(__ds_scope, {
        StatBlock
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surfaces/StatBlock.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surfaces/StepItem.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      if (typeof document !== "undefined" && !document.getElementById("sx-step-css")) {
        const s = document.createElement("style");
        s.id = "sx-step-css";
        s.textContent = `
  .sx-step{ display: flex; flex-direction: column; gap: var(--space-3); }
  .sx-step__n{
    width: 40px; height: 40px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-display); font-weight: var(--fw-bold); font-size: 18px;
    background: var(--green); color: #fff;
  }
  .sx-step__title{ font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h3); color: var(--text-strong); }
  .sx-step__desc{ font-size: var(--fs-sm); color: var(--text-muted); }
  .sx-step--dark .sx-step__title{ color: var(--text-on-ink); }
  .sx-step--dark .sx-step__desc{ color: var(--text-on-ink-muted); }
  .sx-step--ghost .sx-step__n{ background: var(--surface-subtle); color: var(--green-cta); }
  `;
        document.head.appendChild(s);
      }

      /** One numbered step in the "how it works" sequence. */
      function StepItem({
        n,
        title,
        desc,
        tone = "light",
        ghostNumber = false,
        className = "",
        ...rest
      }) {
        const cls = ["sx-step", tone === "dark" ? "sx-step--dark" : "", ghostNumber ? "sx-step--ghost" : "", className].filter(Boolean).join(" ");
        return /*#__PURE__*/React.createElement("div", _extends({
          className: cls
        }, rest), /*#__PURE__*/React.createElement("span", {
          className: "sx-step__n"
        }, n), /*#__PURE__*/React.createElement("span", {
          className: "sx-step__title"
        }, title), desc ? /*#__PURE__*/React.createElement("span", {
          className: "sx-step__desc"
        }, desc) : null);
      }
      Object.assign(__ds_scope, {
        StepItem
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surfaces/StepItem.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/app.jsx
  try {
    (() => {
      /* Sparx landing — app root: language state + assembly */
      const {
        Nav,
        Hero,
        Problem,
        Solution,
        How,
        Work,
        Audience,
        Partners,
        Contact,
        Footer,
        MobileBar
      } = window.SX;
      function App() {
        const [lang, setLang] = React.useState(() => {
          try {
            return localStorage.getItem("sparx-lang") || "pl";
          } catch (e) {
            return "pl";
          }
        });
        const update = l => {
          setLang(l);
          try {
            localStorage.setItem("sparx-lang", l);
          } catch (e) {}
          ;
          document.documentElement.lang = l;
        };
        React.useEffect(() => {
          document.documentElement.lang = lang;
        }, []);
        return /*#__PURE__*/React.createElement("div", {
          className: "kit"
        }, /*#__PURE__*/React.createElement(Nav, {
          lang: lang,
          setLang: update
        }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Problem, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Solution, {
          lang: lang
        }), /*#__PURE__*/React.createElement(How, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Work, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Audience, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Partners, {
          lang: lang
        }), /*#__PURE__*/React.createElement(Contact, {
          lang: lang
        })), /*#__PURE__*/React.createElement(Footer, {
          lang: lang
        }), /*#__PURE__*/React.createElement(MobileBar, {
          lang: lang
        }));
      }
      ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/app.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/helpers.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
      /* Shared helpers for the Sparx landing kit. Loaded before sections. */
      const {
        useState,
        useEffect,
        useRef
      } = React;

      /* bilingual pick */
      const L = (lang, pl, en) => lang === "en" ? en : pl;

      /* Reveal-on-scroll wrapper. Default state is VISIBLE; we only "arm"
         (hide + animate) below-the-fold elements, and always strip the armed
         class after entering so content can never stay trapped at opacity 0
         in contexts where CSS transitions don't tick. */
      function Reveal({
        children,
        as = "div",
        delay = 0,
        className = "",
        style = {},
        ...rest
      }) {
        const ref = useRef(null);
        const [cls, setCls] = useState(""); // "" | "armed" | "armed in"
        useEffect(() => {
          const el = ref.current;
          if (!el) return;
          const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const vh = window.innerHeight || document.documentElement.clientHeight || 800;
          const belowFold = el.getBoundingClientRect().top >= vh * 0.92;
          // Above the fold / reduced-motion / no IO support → stay visible, never arm.
          if (reduce || typeof IntersectionObserver === "undefined" || !belowFold) return;
          setCls("armed");
          let done = false;
          let strip = 0;
          const reveal = () => {
            if (done) return;
            done = true;
            setCls("armed in"); // fade in where transitions run
            strip = setTimeout(() => setCls(""), 760); // …and guarantee final visible state
          };
          const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
              if (e.isIntersecting) {
                reveal();
                io.disconnect();
              }
            });
          }, {
            threshold: 0.15
          });
          io.observe(el);
          const fallback = setTimeout(reveal, 1600); // reveal even if IO never fires
          return () => {
            io.disconnect();
            clearTimeout(fallback);
            clearTimeout(strip);
          };
        }, []);
        const Tag = as;
        return /*#__PURE__*/React.createElement(Tag, _extends({
          ref: ref,
          className: ["reveal", cls, className].filter(Boolean).join(" "),
          style: {
            transitionDelay: delay && cls === "armed in" ? `${delay}ms` : undefined,
            ...style
          }
        }, rest), children);
      }

      /* Icon set — thin line, currentColor (Lucide-weight) */
      const I = p => ({
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p
      });
      const Arrow = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
        strokeWidth: "2.1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
      const ChevR = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
        strokeWidth: "2.1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 6 6 6-6 6"
      }));
      const Check = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
        strokeWidth: "2.3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M20 6 9 17l-5-5"
      }));
      const Phone = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
        d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
      }));
      const Mail = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m2 7 10 6 10-6"
      }));
      const Cal = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16 2v4M8 2v4M3 10h18"
      }));
      const LinkedIn = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
        d: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-9h4v1.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "9",
        width: "4",
        height: "11"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "4",
        cy: "4",
        r: "2"
      }));
      const Menu = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 6h18M3 12h18M3 18h18"
      }));
      const Close = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M18 6 6 18M6 6l12 12"
      }));
      const Shield = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
      window.SXKit = {
        L,
        Reveal,
        Arrow,
        ChevR,
        Check,
        Phone,
        Mail,
        Cal,
        LinkedIn,
        Menu,
        Close,
        Shield
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/helpers.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/nav-hero.jsx
  try {
    (() => {
      /* Sparx landing — Nav, Hero, MobileBar */
      const {
        Button,
        IconButton,
        LangToggle
      } = window.SPARXDesignSystem_59b6c5;
      const {
        L,
        Reveal,
        Arrow,
        Phone,
        Menu,
        Close
      } = window.SXKit;
      const NAV_ITEMS = [{
        id: "problem",
        pl: "Problem",
        en: "Problem"
      }, {
        id: "rozwiazanie",
        pl: "Rozwiązanie",
        en: "Solution"
      }, {
        id: "realizacje",
        pl: "Realizacje",
        en: "Work"
      }, {
        id: "dlakogo",
        pl: "Dla kogo",
        en: "Who it's for"
      }, {
        id: "kontakt",
        pl: "Kontakt",
        en: "Contact"
      }];
      function Nav({
        lang,
        setLang
      }) {
        const [open, setOpen] = React.useState(false);
        const cta = L(lang, "Umów rozmowę", "Book a call");
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
          className: "kit-nav"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-nav__inner"
        }, /*#__PURE__*/React.createElement("a", {
          href: "#top",
          "aria-label": "Sparx"
        }, /*#__PURE__*/React.createElement("img", {
          className: "kit-nav__logo",
          src: "../../assets/sparx-logo-ondark.png",
          alt: "Sparx"
        })), /*#__PURE__*/React.createElement("div", {
          className: "kit-nav__links"
        }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
          key: it.id,
          className: "kit-nav__link",
          href: `#${it.id}`
        }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
          className: "kit-nav__right"
        }, /*#__PURE__*/React.createElement(LangToggle, {
          value: lang,
          onChange: setLang,
          tone: "dark"
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "sm",
          as: "a",
          href: "#kontakt",
          iconRight: /*#__PURE__*/React.createElement(Arrow, null)
        }, cta)), /*#__PURE__*/React.createElement("span", {
          className: "kit-nav__burger"
        }, /*#__PURE__*/React.createElement(IconButton, {
          label: L(lang, "Menu", "Menu"),
          variant: "dark",
          icon: /*#__PURE__*/React.createElement(Menu, null),
          onClick: () => setOpen(true)
        })))), /*#__PURE__*/React.createElement("div", {
          className: `kit-menu ${open ? "open" : ""}`,
          "aria-hidden": !open
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-menu__top"
        }, /*#__PURE__*/React.createElement("img", {
          className: "kit-nav__logo",
          src: "../../assets/sparx-logo-ondark.png",
          alt: "Sparx"
        }), /*#__PURE__*/React.createElement(IconButton, {
          label: L(lang, "Zamknij", "Close"),
          variant: "dark",
          icon: /*#__PURE__*/React.createElement(Close, null),
          onClick: () => setOpen(false)
        })), /*#__PURE__*/React.createElement("div", {
          className: "kit-menu__links"
        }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
          key: it.id,
          className: "kit-menu__link",
          href: `#${it.id}`,
          onClick: () => setOpen(false)
        }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
          className: "kit-menu__foot"
        }, /*#__PURE__*/React.createElement(LangToggle, {
          value: lang,
          onChange: setLang,
          tone: "dark"
        }), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          fullWidth: true,
          as: "a",
          href: "#kontakt",
          onClick: () => setOpen(false),
          iconRight: /*#__PURE__*/React.createElement(Arrow, null)
        }, cta))));
      }
      function Hero({
        lang
      }) {
        return /*#__PURE__*/React.createElement("header", {
          id: "top",
          className: "kit-section kit-section--forest kit-hero"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container kit-hero__grid"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
          as: "h1",
          className: "kit-h1"
        }, L(lang, "Zbuduj własne AI i ", "Build your own AI and "), /*#__PURE__*/React.createElement("span", {
          className: "kit-accent"
        }, L(lang, "zaoszczędź miliony.", "save millions."))), /*#__PURE__*/React.createElement(Reveal, {
          as: "p",
          className: "kit-lead",
          delay: 80,
          style: {
            marginTop: "var(--space-5)"
          }
        }, L(lang, "Sparx buduje AI, które należy do Ciebie. Najpierw szybki, tani test wartości — płacisz dopiero za to, co naprawdę działa.", "Sparx builds AI that belongs to you. A fast, low-cost proof of value first — you pay only for what actually works.")), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-hero__cta-row",
          delay: 160
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          as: "a",
          href: "#kontakt",
          iconRight: /*#__PURE__*/React.createElement(Arrow, null)
        }, L(lang, "Umów rozmowę", "Book a call")), /*#__PURE__*/React.createElement(Button, {
          variant: "dark",
          size: "lg",
          as: "a",
          href: "#realizacje"
        }, L(lang, "Zobacz realizacje", "See our work"))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-hero__proof",
          delay: 240
        }, /*#__PURE__*/React.createElement("span", null, L(lang, "Działające produkty:", "Live products:")), /*#__PURE__*/React.createElement("b", null, "NFZ Radar \xB7 NCBR Radar \xB7 Przetargi Radar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
          className: "kit-hero__peaks",
          src: "../../assets/hero-peaks.svg",
          alt: L(lang, "Wznoszące się szczyty Sparx", "Sparx ascending peaks")
        }))));
      }
      function MobileBar({
        lang
      }) {
        return /*#__PURE__*/React.createElement("div", {
          className: "kit-mobilebar"
        }, /*#__PURE__*/React.createElement("span", {
          className: "grow"
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          size: "lg",
          fullWidth: true,
          as: "a",
          href: "#kontakt",
          iconRight: /*#__PURE__*/React.createElement(Arrow, null)
        }, L(lang, "Umów rozmowę", "Book a call"))), /*#__PURE__*/React.createElement(IconButton, {
          label: L(lang, "Zadzwoń", "Call"),
          variant: "outline",
          size: "lg",
          as: "a",
          href: "tel:+48000000000",
          icon: /*#__PURE__*/React.createElement(Phone, null)
        }));
      }
      window.SX = Object.assign(window.SX || {}, {
        Nav,
        Hero,
        MobileBar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/nav-hero.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/sections-end.jsx
  try {
    (() => {
      /* Sparx landing — Contact + Footer */
      const {
        Button,
        Input,
        Textarea,
        Card
      } = window.SPARXDesignSystem_59b6c5;
      const {
        L,
        Reveal,
        Arrow,
        Check,
        Phone,
        Mail,
        Cal,
        LinkedIn
      } = window.SXKit;
      function Contact({
        lang
      }) {
        const [sent, setSent] = React.useState(false);
        const channels = [{
          icon: /*#__PURE__*/React.createElement(Cal, null),
          main: L(lang, "Wybierz termin rozmowy", "Pick a call time"),
          sub: "calendly.com/sparx/30min",
          href: "https://calendly.com/sparx/30min"
        }, {
          icon: /*#__PURE__*/React.createElement(Mail, null),
          main: "kontakt@sparx.ai",
          sub: L(lang, "Napisz do nas", "Email us"),
          href: "mailto:kontakt@sparx.ai"
        }, {
          icon: /*#__PURE__*/React.createElement(Phone, null),
          main: "+48 000 000 000",
          sub: L(lang, "Zadzwoń", "Call us"),
          href: "tel:+48000000000"
        }, {
          icon: /*#__PURE__*/React.createElement(LinkedIn, null),
          main: "LinkedIn",
          sub: "linkedin.com/company/sparx",
          href: "https://www.linkedin.com/company/sparx"
        }];
        return /*#__PURE__*/React.createElement("section", {
          id: "kontakt",
          className: "kit-section kit-section--cta"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container kit-contact__grid"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-contact__head"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "h2",
          className: "kit-h2"
        }, L(lang, "Porozmawiajmy o Twoim przypadku.", "Let's talk about your case.")), /*#__PURE__*/React.createElement(Reveal, {
          as: "p",
          className: "kit-lead"
        }, L(lang, "30-minutowa rozmowa: rozumiemy potrzebę i podpowiadamy, czy i jak AI ma u Ciebie sens. Bez zobowiązań.", "A 30-minute call: we understand the need and advise whether and how AI makes sense for you. No strings attached.")), /*#__PURE__*/React.createElement("div", {
          className: "kit-channels"
        }, channels.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
          key: i,
          as: "a",
          delay: i * 60,
          className: "kit-channel",
          href: c.href
        }, /*#__PURE__*/React.createElement("span", {
          className: "kit-channel__ic"
        }, c.icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
          className: "kit-channel__main"
        }, c.main), /*#__PURE__*/React.createElement("span", {
          className: "kit-channel__sub"
        }, c.sub)))))), /*#__PURE__*/React.createElement(Reveal, {
          delay: 120
        }, /*#__PURE__*/React.createElement(Card, null, sent ? /*#__PURE__*/React.createElement("div", {
          className: "kit-form__ok"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-form__ok-mark"
        }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("h3", null, L(lang, "Dziękujemy!", "Thank you!")), /*#__PURE__*/React.createElement("p", {
          style: {
            color: "var(--text-muted)",
            marginTop: "var(--space-2)"
          }
        }, L(lang, "Odezwiemy się w 24h.", "We'll get back within 24h."))) : /*#__PURE__*/React.createElement("form", {
          className: "kit-form",
          onSubmit: e => {
            e.preventDefault();
            setSent(true);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-form__row"
        }, /*#__PURE__*/React.createElement(Input, {
          label: L(lang, "Imię", "Name"),
          name: "imie",
          required: true,
          placeholder: L(lang, "Jak się zwracać?", "Your name")
        }), /*#__PURE__*/React.createElement(Input, {
          label: L(lang, "Firma", "Company"),
          name: "firma",
          optional: true,
          placeholder: L(lang, "Nazwa firmy", "Company")
        })), /*#__PURE__*/React.createElement(Input, {
          label: "E-mail",
          name: "email",
          type: "email",
          required: true,
          placeholder: "marek@firma.pl"
        }), /*#__PURE__*/React.createElement(Textarea, {
          label: L(lang, "Wiadomość", "Message"),
          name: "wiadomosc",
          optional: true,
          rows: 3,
          placeholder: L(lang, "W czym możemy pomóc?", "How can we help?")
        }), /*#__PURE__*/React.createElement(Button, {
          type: "submit",
          variant: "primary",
          size: "lg",
          fullWidth: true,
          iconRight: /*#__PURE__*/React.createElement(Arrow, null)
        }, L(lang, "Umów rozmowę", "Book a call")))))));
      }
      function Footer({
        lang
      }) {
        return /*#__PURE__*/React.createElement("footer", {
          className: "kit-footer"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-footer__grid"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
          className: "kit-footer__logo",
          src: "../../assets/sparx-logo-ondark.png",
          alt: "Sparx"
        }), /*#__PURE__*/React.createElement("p", {
          className: "kit-footer__tag"
        }, L(lang, "Partner technologiczny AI. Budujemy rozwiązania, które są Twoje.", "A technology partner in AI. We build solutions that are yours."))), /*#__PURE__*/React.createElement("div", {
          className: "kit-footer__col"
        }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Nawigacja", "Navigation")), /*#__PURE__*/React.createElement("a", {
          href: "#problem"
        }, L(lang, "Problem", "Problem")), /*#__PURE__*/React.createElement("a", {
          href: "#rozwiazanie"
        }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement("a", {
          href: "#realizacje"
        }, L(lang, "Realizacje", "Work"))), /*#__PURE__*/React.createElement("div", {
          className: "kit-footer__col"
        }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Realizacje", "Work")), /*#__PURE__*/React.createElement("a", {
          href: "https://nfz-radar.pl"
        }, "NFZ Radar"), /*#__PURE__*/React.createElement("a", {
          href: "https://ncbr-radar.pl"
        }, "NCBR Radar"), /*#__PURE__*/React.createElement("a", {
          href: "https://przetargi-radar.pl"
        }, "Przetargi Radar")), /*#__PURE__*/React.createElement("div", {
          className: "kit-footer__col"
        }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Kontakt", "Contact")), /*#__PURE__*/React.createElement("a", {
          href: "mailto:kontakt@sparx.ai"
        }, "kontakt@sparx.ai"), /*#__PURE__*/React.createElement("a", {
          href: "tel:+48000000000"
        }, "+48 000 000 000"), /*#__PURE__*/React.createElement("span", null, "Polska \xB7 NIP 7792229459"))), /*#__PURE__*/React.createElement("div", {
          className: "kit-footer__bottom"
        }, L(lang, "Źródła: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.", "Sources: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx."))));
      }
      window.SX = Object.assign(window.SX || {}, {
        Contact,
        Footer
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/sections-end.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/sections-mid.jsx
  try {
    (() => {
      /* Sparx landing — Problem, Solution, How it works */
      const {
        Button,
        Badge,
        Card,
        StatBlock,
        StepItem,
        ContrastRow
      } = window.SPARXDesignSystem_59b6c5;
      const {
        L,
        Reveal,
        ChevR
      } = window.SXKit;
      function Problem({
        lang
      }) {
        const stats = [{
          v: "95%",
          pl: "pilotaży AI nie przynosi mierzalnego zwrotu",
          en: "of AI pilots deliver no measurable return",
          s: "MIT, „The GenAI Divide”, 2025"
        }, {
          v: "38%",
          pl: "prezesów wskazuje AI jako największe zewnętrzne zagrożenie",
          en: "of CEOs name AI their biggest external threat",
          s: "The Conference Board, 2026"
        }, {
          v: "60%",
          pl: "liderów świadomie spowolniło wdrożenia AI",
          en: "of leaders deliberately slowed AI deployment",
          s: "EY, 2026"
        }];
        return /*#__PURE__*/React.createElement("section", {
          id: "problem",
          className: "kit-section kit-section--cloud"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-head"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "div",
          className: "kit-eyebrow"
        }, L(lang, "Problem", "The problem")), /*#__PURE__*/React.createElement(Reveal, {
          as: "h2",
          className: "kit-h2"
        }, L(lang, "Wszyscy wdrażają AI. Większość traci na tym pieniądze.", "Everyone's deploying AI. Most are losing money on it."))), /*#__PURE__*/React.createElement("div", {
          className: "kit-stats3"
        }, stats.map((st, i) => /*#__PURE__*/React.createElement(Reveal, {
          key: i,
          delay: i * 90
        }, /*#__PURE__*/React.createElement(StatBlock, {
          value: st.v,
          tone: "light",
          label: L(lang, st.pl, st.en),
          source: st.s
        })))), /*#__PURE__*/React.createElement(Reveal, {
          as: "p",
          className: "kit-punch"
        }, L(lang, "Problemem nie jest AI. ", "AI isn't the problem. "), /*#__PURE__*/React.createElement("b", null, L(lang, "Problemem jest wdrażanie AI bez dowodu", "Deploying it without proof")), L(lang, ", bez kontekstu Twoich danych i bez planu na produkcję.", ", without your data's context, and without a plan for production — that's the problem."))));
      }
      function Solution({
        lang
      }) {
        const cards = [{
          pl: "Najpierw dowód, potem inwestycja",
          en: "Proof first, investment second",
          bpl: "Większość projektów pada na przejściu z pilotażu na produkcję (MIT, 2025). Zaczynamy od taniego testu — jeśli nie działa, nic nie ryzykujesz.",
          ben: "Most projects fail moving from pilot to production (MIT, 2025). We start with a low-cost test — if it doesn't work, you risk nothing."
        }, {
          pl: "Jest Twoje",
          en: "It's yours",
          bpl: "Kod i dane na Twojej chmurze. Żadnej licencji za miliony, z której nie da się wyjść.",
          ben: "Code and data on your cloud. No million-dollar license you can't exit."
        }, {
          pl: "Klasy produkcyjnej i zgodne",
          en: "Production-grade & compliant",
          bpl: "Zbudowane jak system krytyczny.",
          ben: "Built like a critical system.",
          badges: ["RODO / GDPR", "ISO 27001", L(lang, "Hosting UE", "EU hosting")]
        }];
        return /*#__PURE__*/React.createElement("section", {
          id: "rozwiazanie",
          className: "kit-section kit-section--graphite"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-head"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "div",
          className: "kit-eyebrow"
        }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement(Reveal, {
          as: "h2",
          className: "kit-h2"
        }, L(lang, "Nasza odpowiedź: wdrażaj mądrze.", "Our answer: deploy smart."))), /*#__PURE__*/React.createElement("div", {
          className: "kit-sol-grid"
        }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
          key: i,
          delay: i * 90,
          style: {
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement(Card, {
          tone: "graphite",
          className: "kit-sol-card",
          style: {
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement("h3", null, L(lang, c.pl, c.en)), /*#__PURE__*/React.createElement("p", null, L(lang, c.bpl, c.ben)), c.badges ? /*#__PURE__*/React.createElement("div", {
          className: "kit-badges"
        }, c.badges.map(b => /*#__PURE__*/React.createElement(Badge, {
          key: b,
          variant: "onink"
        }, b))) : null)))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-contrast-wrap"
        }, /*#__PURE__*/React.createElement(ContrastRow, {
          themLabel: L(lang, "Inni", "Others"),
          usLabel: L(lang, "My", "Us"),
          them: L(lang, "Sprzedają Ci system na swojej licencji.", "Sell you a system on their license."),
          us: L(lang, "Budujemy przewagę, która zostaje Twoja.", "Build an advantage that stays yours.")
        }))));
      }
      function How({
        lang
      }) {
        const steps = [{
          n: 1,
          pl: "Uwaga",
          en: "Attention",
          dpl: "Radary + edukacja",
          den: "Radars + education"
        }, {
          n: 2,
          pl: "Warsztat",
          en: "Workshop",
          dpl: "Diagnoza potrzeb",
          den: "Needs diagnosis"
        }, {
          n: 3,
          pl: "Tani test",
          en: "Low-cost test",
          dpl: "Dowód wartości",
          den: "Proof of value"
        }, {
          n: 4,
          pl: "Budowa",
          en: "Build",
          dpl: "Trzy modele",
          den: "Three models"
        }, {
          n: 5,
          pl: "Własność",
          en: "Ownership",
          dpl: "Kod i dane Twoje",
          den: "Code & data yours"
        }];
        const models = [L(lang, "Projekt + kod", "Project + code"), L(lang, "Model SaaS-owy", "SaaS-style"), "Body-leasing (Try & Hire)"];
        return /*#__PURE__*/React.createElement("section", {
          id: "jak",
          className: "kit-section kit-section--cloud"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-head"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "div",
          className: "kit-eyebrow"
        }, L(lang, "Jak to działa", "How it works")), /*#__PURE__*/React.createElement(Reveal, {
          as: "h2",
          className: "kit-h2"
        }, L(lang, "Pięć małych kroków zamiast jednego wielkiego kontraktu.", "Five small steps instead of one big contract."))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-steps"
        }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
          key: s.n
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-steps__item"
        }, /*#__PURE__*/React.createElement(StepItem, {
          n: s.n,
          title: L(lang, s.pl, s.en),
          desc: L(lang, s.dpl, s.den)
        })), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
          className: "kit-steps__arrow"
        }, /*#__PURE__*/React.createElement(ChevR, null)) : null))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-models"
        }, /*#__PURE__*/React.createElement("span", {
          className: "kit-models__lbl"
        }, L(lang, "Trzy modele:", "Three models:")), models.map(m => /*#__PURE__*/React.createElement("span", {
          key: m,
          className: "kit-pill"
        }, m))), /*#__PURE__*/React.createElement(Reveal, {
          as: "p",
          className: "kit-note"
        }, L(lang, "Wchodzisz na dowolnym kroku i płynnie przechodzisz dalej — bez „wszystko albo nic”.", "Enter at any step and move on smoothly — no all-or-nothing."))));
      }
      window.SX = Object.assign(window.SX || {}, {
        Problem,
        Solution,
        How
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/sections-mid.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/landing/sections-work.jsx
  try {
    (() => {
      /* Sparx landing — Work (Realizacje), Audience (Dla kogo), Partners */
      const {
        Button,
        Input,
        Card,
        SectorCard
      } = window.SPARXDesignSystem_59b6c5;
      const {
        L,
        Reveal,
        Arrow
      } = window.SXKit;
      function Work({
        lang
      }) {
        const cards = [{
          tagpl: "Medyczna / farma · Produkt",
          tagen: "Medical / pharma · Product",
          tpl: "Wygrywaj przetargi, które konkurencja przegapia",
          ten: "Win the tenders your competitors miss",
          bpl: "Wyłapanie ogłoszeń z rynku, analityka kto wygrał i za ile, porównywarka Twoich produktów.",
          ben: "Catch notices from the market, analyze who won and for how much, compare your products.",
          ppl: "Dowód: działający produkt, dane z wielu źródeł, RODO.",
          pen: "Proof: live product, multi-source data, GDPR.",
          cpl: "Zobacz demo",
          cen: "See demo",
          href: "#kontakt",
          img: "[[ ZRZUT: Przetargi Radar — lista dopasowanych przetargów + panel analityki ]]"
        }, {
          tagpl: "Ochrona zdrowia · Sektor publiczny · Na żywo",
          tagen: "Healthcare · Public · Live",
          tpl: "Radar kolejek dla całej Polski",
          ten: "A queue radar for the whole country",
          bpl: "Monitoring czasów oczekiwania + predykcja na danych NFZ.",
          ben: "Waiting-time monitoring + prediction on NFZ data.",
          ppl: "Dowód: publiczne narzędzie, wszystkie województwa.",
          pen: "Proof: public tool, every region.",
          cpl: "nfz-radar.pl",
          cen: "nfz-radar.pl",
          href: "https://nfz-radar.pl",
          img: "[[ ZRZUT: NFZ Radar — mapa kolejek Polski z filtrami ]]"
        }, {
          tagpl: "R&D · Sektor publiczny · Na żywo",
          tagen: "R&D · Public · Live",
          tpl: "Znajdź granty, których nie widać w wyszukiwarce",
          ten: "Find the grants search can't see",
          bpl: "Semantyczne przeszukiwanie projektów NCBR i funduszy UE.",
          ben: "Semantic search across NCBR and EU-funded projects.",
          ppl: "Dowód: narzędzie obywatelskie, transparentność wydatków.",
          pen: "Proof: civic tool, spending transparency.",
          cpl: "ncbr-radar.pl",
          cen: "ncbr-radar.pl",
          href: "https://ncbr-radar.pl",
          img: "[[ ZRZUT: NCBR Radar — wyniki semantycznego wyszukiwania grantów ]]"
        }, {
          tagpl: "Biotech · Instytucja",
          tagen: "Biotech · Institution",
          tpl: "System klasy produkcyjnej — z pełną zgodnością",
          ten: "Production-grade systems — fully compliant",
          bpl: "Pełny LIMS + algorytmy dopasowań DNA.",
          ben: "Full LIMS + DNA matching algorithms.",
          ppl: "Dowód: wdrożenie dla laboratorium UPP, ISO 27001, RODO, ślad audytowy.",
          pen: "Proof: deployed for the UPP lab, ISO 27001, GDPR, audit trail.",
          cpl: "Porozmawiaj o systemie",
          cen: "Talk to us",
          href: "#kontakt",
          icon: "../../assets/icon-biotech.svg"
        }, {
          tagpl: "Retail / kosmetyka · Demo na żądanie",
          tagen: "Retail / cosmetics · Demo on request",
          tpl: "Twoi klienci pytają AI o Twoje produkty — niech odpowiada Twoimi danymi",
          ten: "Your customers already ask AI about your products",
          bpl: "Aplikacja karmiona Twoimi danymi: składniki, alergeny, parametry.",
          ben: "An app fed with your data: ingredients, allergens, specs.",
          ppl: "Dowód: zbudowany dla dużej sieci drogeryjnej (demo na żądanie).",
          pen: "Proof: built for a major drugstore chain (demo on request).",
          cpl: "Poproś o demo",
          cen: "Request a demo",
          href: "#kontakt",
          icon: "../../assets/icon-retail.svg"
        }];
        return /*#__PURE__*/React.createElement("section", {
          id: "realizacje",
          className: "kit-section kit-section--forest"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "div",
          className: "kit-overtitle"
        }, L(lang, "Jeden silnik. Wiele branż. Twoje dane.", "One engine. Many industries. Your data.")), /*#__PURE__*/React.createElement("div", {
          className: "kit-work-grid"
        }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
          key: i,
          delay: i % 3 * 80,
          style: {
            height: "100%"
          }
        }, /*#__PURE__*/React.createElement(SectorCard, {
          tag: L(lang, c.tagpl, c.tagen),
          title: L(lang, c.tpl, c.ten),
          body: L(lang, c.bpl, c.ben),
          proof: L(lang, c.ppl, c.pen),
          ctaLabel: L(lang, c.cpl, c.cen),
          href: c.href,
          image: c.img,
          icon: c.icon
        })))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-retail-band"
        }, /*#__PURE__*/React.createElement("span", {
          className: "kit-retail-band__num"
        }, "59%"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "kit-retail-band__text"
        }, L(lang, "konsumentów używa już AI do zakupów, a zapytania zakupowe na ChatGPT podwoiły się w pół roku.", "of consumers already shop with AI; ChatGPT shopping queries doubled in six months.")), /*#__PURE__*/React.createElement("div", {
          className: "kit-retail-band__src"
        }, "Bain / Capital One Shopping, 2025")))));
      }
      function Audience({
        lang
      }) {
        return /*#__PURE__*/React.createElement("section", {
          id: "dlakogo",
          className: "kit-section kit-section--cloud"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-head"
        }, /*#__PURE__*/React.createElement(Reveal, {
          as: "div",
          className: "kit-eyebrow"
        }, L(lang, "Dla kogo", "Who it's for")), /*#__PURE__*/React.createElement(Reveal, {
          as: "h2",
          className: "kit-h2"
        }, L(lang, "Dla firm i dla instytucji.", "For companies and institutions."))), /*#__PURE__*/React.createElement("div", {
          className: "kit-audience"
        }, /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-aud-col"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-aud-col__mark"
        }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Firmy", "Companies")), /*#__PURE__*/React.createElement("p", null, L(lang, "Własny Radar lub system = przewaga. Więcej trafień, mniej ręcznej pracy, rozwiązanie na Twojej własności.", "Your own radar or system = an edge. More hits, less manual work, a solution you own."))), /*#__PURE__*/React.createElement(Reveal, {
          className: "kit-aud-col",
          delay: 90
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-aud-col__mark"
        }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Instytucje", "Institutions")), /*#__PURE__*/React.createElement("p", null, L(lang, "Porządek w danych, transparentność, zgodność i pełny ślad audytowy.", "Order in data, transparency, compliance and a full audit trail."))))));
      }
      function Partners({
        lang
      }) {
        return /*#__PURE__*/React.createElement("section", {
          id: "partnerzy",
          className: "kit-section kit-section--graphite"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-container kit-partners"
        }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
          className: "kit-eyebrow"
        }, L(lang, "Jak pracujemy", "How we work")), /*#__PURE__*/React.createElement("h2", {
          className: "kit-h2"
        }, L(lang, "Partnersko — z Tobą i w zespole.", "Partners — with you and within the team.")), /*#__PURE__*/React.createElement("p", {
          className: "kit-lead",
          style: {
            marginTop: "var(--space-5)"
          }
        }, L(lang, "Sparx tworzą partnerzy, nie „dyrektorzy”. Jeden trzon prowadzi biznes i sprzedaż, drugi technologię — kompetencje, które się nie nakładają. Tak samo partnersko, obiektywnie i transparentnie traktujemy klientów.", "Sparx is built by partners, not 'directors'. One side leads business and sales, the other technology — skills that don't overlap. We treat clients the same way: as partners, objectively and transparently.")), /*#__PURE__*/React.createElement("div", {
          className: "kit-people"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-person"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-person__photo"
        }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner biznesowy", "Business partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
          className: "kit-person__role"
        }, L(lang, "Partner — biznes i sprzedaż", "Partner — business & sales"))), /*#__PURE__*/React.createElement("div", {
          className: "kit-person"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-person__photo"
        }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner technologiczny", "Technology partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
          className: "kit-person__role"
        }, L(lang, "Partner — technologia", "Partner — technology"))))), /*#__PURE__*/React.createElement(Reveal, {
          delay: 120
        }, /*#__PURE__*/React.createElement(Card, {
          tone: "graphite"
        }, /*#__PURE__*/React.createElement("div", {
          className: "kit-news__name"
        }, /*#__PURE__*/React.createElement("span", {
          className: "dot"
        }), "Radar Report"), /*#__PURE__*/React.createElement("p", {
          className: "kit-news__desc"
        }, L(lang, "Co miesiąc jeden sygnał wyłapany przez nasze Radary.", "One signal a month, caught by our radars.")), /*#__PURE__*/React.createElement("div", {
          className: "kit-news__form"
        }, /*#__PURE__*/React.createElement("span", {
          className: "grow"
        }, /*#__PURE__*/React.createElement(Input, {
          label: "E-mail",
          name: "newsletter",
          type: "email",
          placeholder: "marek@firma.pl"
        })), /*#__PURE__*/React.createElement(Button, {
          variant: "primary"
        }, L(lang, "Zapisz się", "Subscribe")))))));
      }
      window.SX = Object.assign(window.SX || {}, {
        Work,
        Audience,
        Partners
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/landing/sections-work.jsx",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Badge = __ds_scope.Badge;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.IconButton = __ds_scope.IconButton;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.Textarea = __ds_scope.Textarea;
  __ds_ns.LangToggle = __ds_scope.LangToggle;
  __ds_ns.Card = __ds_scope.Card;
  __ds_ns.ContrastRow = __ds_scope.ContrastRow;
  __ds_ns.SectorCard = __ds_scope.SectorCard;
  __ds_ns.StatBlock = __ds_scope.StatBlock;
  __ds_ns.StepItem = __ds_scope.StepItem;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/ds-bundle.js", error: String((e && e.message) || e) }); }

// site/js/helpers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared helpers for the Sparx landing site. Loaded before sections. */
const {
  useState,
  useEffect,
  useRef
} = React;

/* bilingual pick */
const L = (lang, pl, en) => lang === "en" ? en : pl;

/* POST a form payload to a configured endpoint.
   Returns {ok:true} in demo mode (no endpoint set) so the UI still confirms. */
async function postJSON(endpoint, payload) {
  if (!endpoint) {
    await new Promise(r => setTimeout(r, 500));
    return {
      ok: true,
      demo: true
    };
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Request failed: " + res.status);
  return {
    ok: true
  };
}

/* Reveal-on-scroll wrapper. Default state is VISIBLE; we only "arm"
   (hide + animate) below-the-fold elements, and always strip the armed
   class after entering so content can never stay trapped at opacity 0. */
function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  style = {},
  ...rest
}) {
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
      if (done) return;
      done = true;
      setCls("armed in");
      strip = setTimeout(() => setCls(""), 760);
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal();
          io.disconnect();
        }
      });
    }, {
      threshold: 0.15
    });
    io.observe(el);
    const fallback = setTimeout(reveal, 1600);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
      clearTimeout(strip);
    };
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: ["reveal", cls, className].filter(Boolean).join(" "),
    style: {
      transitionDelay: delay && cls === "armed in" ? `${delay}ms` : undefined,
      ...style
    }
  }, rest), children);
}

/* Icon set — thin line, currentColor (Lucide-weight) */
const I = p => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...p
});
const Arrow = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const ChevR = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 6 6 6-6 6"
}));
const Check = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Phone = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
}));
const Mail = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m2 7 10 6 10-6"
}));
const Cal = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4M8 2v4M3 10h18"
}));
const LinkedIn = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-9h4v1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "11"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));
const Menu = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const Close = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const Shield = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 12 2 2 4-4"
}));
window.SXKit = {
  L,
  postJSON,
  Reveal,
  Arrow,
  ChevR,
  Check,
  Phone,
  Mail,
  Cal,
  LinkedIn,
  Menu,
  Close,
  Shield
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/helpers.jsx", error: String((e && e.message) || e) }); }

// site/js/nav-hero.jsx
try { (() => {
/* Sparx site — Nav, Hero, MobileBar */
const {
  Button,
  IconButton,
  LangToggle
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow,
  Phone,
  Menu,
  Close
} = window.SXKit;
const CFG = window.SPARX_CONFIG;
const NAV_ITEMS = [{
  id: "problem",
  pl: "Problem",
  en: "Problem"
}, {
  id: "rozwiazanie",
  pl: "Rozwiązanie",
  en: "Solution"
}, {
  id: "realizacje",
  pl: "Realizacje",
  en: "Work"
}, {
  id: "dlakogo",
  pl: "Dla kogo",
  en: "Who it's for"
}, {
  id: "kontakt",
  pl: "Kontakt",
  en: "Contact"
}];
function Nav({
  lang,
  setLang
}) {
  const [open, setOpen] = React.useState(false);
  const cta = L(lang, "Umów rozmowę", "Book a call");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "kit-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Sparx"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kit-nav__logo",
    src: "../assets/sparx-logo-ondark.svg",
    alt: "Sparx"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__links"
  }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "kit-nav__link",
    href: `#${it.id}`
  }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__right"
  }, /*#__PURE__*/React.createElement(LangToggle, {
    value: lang,
    onChange: setLang,
    tone: "dark"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, cta)), /*#__PURE__*/React.createElement("span", {
    className: "kit-nav__burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Menu", "Menu"),
    variant: "dark",
    icon: /*#__PURE__*/React.createElement(Menu, null),
    onClick: () => setOpen(true)
  })))), /*#__PURE__*/React.createElement("div", {
    className: `kit-menu ${open ? "open" : ""}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kit-nav__logo",
    src: "../assets/sparx-logo-ondark.svg",
    alt: "Sparx"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Zamknij", "Close"),
    variant: "dark",
    icon: /*#__PURE__*/React.createElement(Close, null),
    onClick: () => setOpen(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__links"
  }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "kit-menu__link",
    href: `#${it.id}`,
    onClick: () => setOpen(false)
  }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__foot"
  }, /*#__PURE__*/React.createElement(LangToggle, {
    value: lang,
    onChange: setLang,
    tone: "dark"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "a",
    href: "#kontakt",
    onClick: () => setOpen(false),
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, cta))));
}
function Hero({
  lang
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "kit-section kit-section--forest kit-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    as: "h1",
    className: "kit-h1"
  }, L(lang, "Zbuduj własne AI i ", "Build your own AI and "), /*#__PURE__*/React.createElement("span", {
    className: "kit-accent"
  }, L(lang, "zaoszczędź miliony.", "save millions."))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-lead",
    delay: 80,
    style: {
      marginTop: "var(--space-5)"
    }
  }, L(lang, "Sparx buduje AI, które należy do Ciebie. Najpierw szybki, tani test wartości — płacisz dopiero za to, co naprawdę działa.", "Sparx builds AI that belongs to you. A fast, low-cost proof of value first — you pay only for what actually works.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-hero__cta-row",
    delay: 160
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, L(lang, "Umów rozmowę", "Book a call")), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    as: "a",
    href: "#realizacje"
  }, L(lang, "Zobacz realizacje", "See our work"))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-hero__proof",
    delay: 240
  }, /*#__PURE__*/React.createElement("span", null, L(lang, "Działające produkty:", "Live products:")), /*#__PURE__*/React.createElement("b", null, "NFZ Radar \xB7 NCBR Radar \xB7 Przetargi Radar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "kit-hero__peaks",
    src: "../assets/hero-peaks.svg",
    alt: L(lang, "Wznoszące się szczyty Sparx", "Sparx ascending peaks")
  }))));
}
function MobileBar({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-mobilebar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, L(lang, "Umów rozmowę", "Book a call"))), /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Zadzwoń", "Call"),
    variant: "outline",
    size: "lg",
    as: "a",
    href: CFG.phoneHref,
    icon: /*#__PURE__*/React.createElement(Phone, null)
  }));
}
window.SX = Object.assign(window.SX || {}, {
  Nav,
  Hero,
  MobileBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/nav-hero.jsx", error: String((e && e.message) || e) }); }

// site/js/sections-end.jsx
try { (() => {
/* Sparx site — Contact + Footer */
const {
  Button,
  Input,
  Textarea,
  Card
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow,
  Check,
  Phone,
  Mail,
  Cal,
  LinkedIn,
  postJSON
} = window.SXKit;
const CFG = window.SPARX_CONFIG;
function Contact({
  lang
}) {
  const [state, setState] = React.useState("idle"); // idle | sending | ok | error
  const channels = [{
    icon: /*#__PURE__*/React.createElement(Cal, null),
    main: L(lang, "Wybierz termin rozmowy", "Pick a call time"),
    sub: CFG.calendly.replace(/^https?:\/\//, ""),
    href: CFG.calendly
  }, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    main: CFG.email,
    sub: L(lang, "Napisz do nas", "Email us"),
    href: CFG.emailHref
  }, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    main: CFG.phone,
    sub: L(lang, "Zadzwoń", "Call us"),
    href: CFG.phoneHref
  }, {
    icon: /*#__PURE__*/React.createElement(LinkedIn, null),
    main: "LinkedIn",
    sub: CFG.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
    href: CFG.linkedin
  }];
  const submit = async e => {
    e.preventDefault();
    const f = e.target;
    const payload = {
      imie: f.imie.value,
      firma: f.firma.value,
      email: f.email.value,
      wiadomosc: f.wiadomosc.value,
      lang,
      source: "contact"
    };
    setState("sending");
    try {
      await postJSON(CFG.formEndpoint, payload);
      setState("ok");
    } catch (err) {
      setState("error");
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    className: "kit-section kit-section--cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-contact__head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Porozmawiajmy o Twoim przypadku.", "Let's talk about your case.")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-lead"
  }, L(lang, "30-minutowa rozmowa: rozumiemy potrzebę i podpowiadamy, czy i jak AI ma u Ciebie sens. Bez zobowiązań.", "A 30-minute call: we understand the need and advise whether and how AI makes sense for you. No strings attached.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-channels"
  }, channels.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    as: "a",
    delay: i * 60,
    className: "kit-channel",
    href: c.href
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__ic"
  }, c.icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__main"
  }, c.main), /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__sub"
  }, c.sub)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, null, state === "ok" ? /*#__PURE__*/React.createElement("div", {
    className: "kit-form__ok"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-form__ok-mark"
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("h3", null, L(lang, "Dziękujemy!", "Thank you!")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, L(lang, "Odezwiemy się w 24h.", "We'll get back within 24h."))) : /*#__PURE__*/React.createElement("form", {
    className: "kit-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: L(lang, "Imię", "Name"),
    name: "imie",
    required: true,
    placeholder: L(lang, "Jak się zwracać?", "Your name")
  }), /*#__PURE__*/React.createElement(Input, {
    label: L(lang, "Firma", "Company"),
    name: "firma",
    optional: true,
    placeholder: L(lang, "Nazwa firmy", "Company")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    name: "email",
    type: "email",
    required: true,
    placeholder: "marek@firma.pl"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: L(lang, "Wiadomość", "Message"),
    name: "wiadomosc",
    optional: true,
    rows: 3,
    placeholder: L(lang, "W czym możemy pomóc?", "How can we help?")
  }), state === "error" ? /*#__PURE__*/React.createElement("p", {
    className: "kit-form__err"
  }, L(lang, "Coś poszło nie tak. Napisz na ", "Something went wrong. Email "), /*#__PURE__*/React.createElement("a", {
    href: CFG.emailHref
  }, CFG.email), ".") : null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    disabled: state === "sending"
  }, state === "sending" ? L(lang, "Wysyłanie…", "Sending…") : L(lang, "Umów rozmowę", "Book a call")))))));
}
function Footer({
  lang
}) {
  const privacyHref = L(lang, "../pl/prywatnosc.html", "../en/privacy.html");
  return /*#__PURE__*/React.createElement("footer", {
    className: "kit-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "kit-footer__logo",
    src: "../assets/sparx-logo-ondark.svg",
    alt: "Sparx"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-footer__tag"
  }, L(lang, "Partner technologiczny AI. Budujemy rozwiązania, które są Twoje.", "A technology partner in AI. We build solutions that are yours."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Nawigacja", "Navigation")), /*#__PURE__*/React.createElement("a", {
    href: "#problem"
  }, L(lang, "Problem", "Problem")), /*#__PURE__*/React.createElement("a", {
    href: "#rozwiazanie"
  }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement("a", {
    href: "#realizacje"
  }, L(lang, "Realizacje", "Work"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Realizacje", "Work")), /*#__PURE__*/React.createElement("a", {
    href: CFG.products.nfz
  }, "NFZ Radar"), /*#__PURE__*/React.createElement("a", {
    href: CFG.products.ncbr
  }, "NCBR Radar"), /*#__PURE__*/React.createElement("a", {
    href: CFG.products.przetargi
  }, "Przetargi Radar")), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Kontakt", "Contact")), /*#__PURE__*/React.createElement("a", {
    href: CFG.emailHref
  }, CFG.email), /*#__PURE__*/React.createElement("a", {
    href: CFG.phoneHref
  }, CFG.phone), /*#__PURE__*/React.createElement("span", null, L(lang, "Polska", "Poland"), " \xB7 NIP ", CFG.nip))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, L(lang, "Źródła: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.", "Sources: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.")), /*#__PURE__*/React.createElement("span", {
    className: "kit-footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: privacyHref
  }, L(lang, "Polityka prywatności", "Privacy policy")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (window.sparxOpenConsent) window.sparxOpenConsent();
    }
  }, L(lang, "Ustawienia cookies", "Cookie settings"))))));
}
window.SX = Object.assign(window.SX || {}, {
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/sections-end.jsx", error: String((e && e.message) || e) }); }

// site/js/sections-mid.jsx
try { (() => {
/* Sparx landing — Problem, Solution, How it works */
const {
  Button,
  Badge,
  Card,
  StatBlock,
  StepItem,
  ContrastRow
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  ChevR
} = window.SXKit;
function Problem({
  lang
}) {
  const stats = [{
    v: "95%",
    pl: "pilotaży AI nie przynosi mierzalnego zwrotu",
    en: "of AI pilots deliver no measurable return",
    s: "MIT, „The GenAI Divide”, 2025"
  }, {
    v: "38%",
    pl: "prezesów wskazuje AI jako największe zewnętrzne zagrożenie",
    en: "of CEOs name AI their biggest external threat",
    s: "The Conference Board, 2026"
  }, {
    v: "60%",
    pl: "liderów świadomie spowolniło wdrożenia AI",
    en: "of leaders deliberately slowed AI deployment",
    s: "EY, 2026"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "problem",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Problem", "The problem")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Wszyscy wdrażają AI. Większość traci na tym pieniądze.", "Everyone's deploying AI. Most are losing money on it."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-stats3"
  }, stats.map((st, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: st.v,
    tone: "light",
    label: L(lang, st.pl, st.en),
    source: st.s
  })))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-punch"
  }, L(lang, "Problemem nie jest AI. ", "AI isn't the problem. "), /*#__PURE__*/React.createElement("b", null, L(lang, "Problemem jest wdrażanie AI bez dowodu", "Deploying it without proof")), L(lang, ", bez kontekstu Twoich danych i bez planu na produkcję.", ", without your data's context, and without a plan for production — that's the problem."))));
}
function Solution({
  lang
}) {
  const cards = [{
    pl: "Najpierw dowód, potem inwestycja",
    en: "Proof first, investment second",
    bpl: "Większość projektów pada na przejściu z pilotażu na produkcję (MIT, 2025). Zaczynamy od taniego testu — jeśli nie działa, nic nie ryzykujesz.",
    ben: "Most projects fail moving from pilot to production (MIT, 2025). We start with a low-cost test — if it doesn't work, you risk nothing."
  }, {
    pl: "Jest Twoje",
    en: "It's yours",
    bpl: "Kod i dane na Twojej chmurze. Żadnej licencji za miliony, z której nie da się wyjść.",
    ben: "Code and data on your cloud. No million-dollar license you can't exit."
  }, {
    pl: "Klasy produkcyjnej i zgodne",
    en: "Production-grade & compliant",
    bpl: "Zbudowane jak system krytyczny.",
    ben: "Built like a critical system.",
    badges: ["RODO / GDPR", "ISO 27001", L(lang, "Hosting UE", "EU hosting")]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "rozwiazanie",
    className: "kit-section kit-section--graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Nasza odpowiedź: wdrażaj mądrze.", "Our answer: deploy smart."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-sol-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "graphite",
    className: "kit-sol-card",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", null, L(lang, c.pl, c.en)), /*#__PURE__*/React.createElement("p", null, L(lang, c.bpl, c.ben)), c.badges ? /*#__PURE__*/React.createElement("div", {
    className: "kit-badges"
  }, c.badges.map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b,
    variant: "onink"
  }, b))) : null)))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-contrast-wrap"
  }, /*#__PURE__*/React.createElement(ContrastRow, {
    themLabel: L(lang, "Inni", "Others"),
    usLabel: L(lang, "My", "Us"),
    them: L(lang, "Sprzedają Ci system na swojej licencji.", "Sell you a system on their license."),
    us: L(lang, "Budujemy przewagę, która zostaje Twoja.", "Build an advantage that stays yours.")
  }))));
}
function How({
  lang
}) {
  const steps = [{
    n: 1,
    pl: "Uwaga",
    en: "Attention",
    dpl: "Radary + edukacja",
    den: "Radars + education"
  }, {
    n: 2,
    pl: "Warsztat",
    en: "Workshop",
    dpl: "Diagnoza potrzeb",
    den: "Needs diagnosis"
  }, {
    n: 3,
    pl: "Tani test",
    en: "Low-cost test",
    dpl: "Dowód wartości",
    den: "Proof of value"
  }, {
    n: 4,
    pl: "Budowa",
    en: "Build",
    dpl: "Trzy modele",
    den: "Three models"
  }, {
    n: 5,
    pl: "Własność",
    en: "Ownership",
    dpl: "Kod i dane Twoje",
    den: "Code & data yours"
  }];
  const models = [L(lang, "Projekt + kod", "Project + code"), L(lang, "Model SaaS-owy", "SaaS-style"), "Body-leasing (Try & Hire)"];
  return /*#__PURE__*/React.createElement("section", {
    id: "jak",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Jak to działa", "How it works")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Pięć małych kroków zamiast jednego wielkiego kontraktu.", "Five small steps instead of one big contract."))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-steps__item"
  }, /*#__PURE__*/React.createElement(StepItem, {
    n: s.n,
    title: L(lang, s.pl, s.en),
    desc: L(lang, s.dpl, s.den)
  })), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "kit-steps__arrow"
  }, /*#__PURE__*/React.createElement(ChevR, null)) : null))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-models"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-models__lbl"
  }, L(lang, "Trzy modele:", "Three models:")), models.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    className: "kit-pill"
  }, m))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-note"
  }, L(lang, "Wchodzisz na dowolnym kroku i płynnie przechodzisz dalej — bez „wszystko albo nic”.", "Enter at any step and move on smoothly — no all-or-nothing."))));
}
window.SX = Object.assign(window.SX || {}, {
  Problem,
  Solution,
  How
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/sections-mid.jsx", error: String((e && e.message) || e) }); }

// site/js/sections-work.jsx
try { (() => {
/* Sparx site — Work (Realizacje), Audience (Dla kogo), Partners */
const {
  Button,
  Input,
  Card,
  SectorCard
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow,
  postJSON
} = window.SXKit;
const CFG = window.SPARX_CONFIG;
function Work({
  lang
}) {
  const cards = [{
    tagpl: "Medyczna / farma · Produkt",
    tagen: "Medical / pharma · Product",
    tpl: "Wygrywaj przetargi, które konkurencja przegapia",
    ten: "Win the tenders your competitors miss",
    bpl: "Wyłapanie ogłoszeń z rynku, analityka kto wygrał i za ile, porównywarka Twoich produktów.",
    ben: "Catch notices from the market, analyze who won and for how much, compare your products.",
    ppl: "Dowód: działający produkt, dane z wielu źródeł, RODO.",
    pen: "Proof: live product, multi-source data, GDPR.",
    cpl: "Zobacz demo",
    cen: "See demo",
    href: "#kontakt",
    img: "[[ ZRZUT: Przetargi Radar — lista dopasowanych przetargów + panel analityki ]]"
  }, {
    tagpl: "Ochrona zdrowia · Sektor publiczny · Na żywo",
    tagen: "Healthcare · Public · Live",
    tpl: "Radar kolejek dla całej Polski",
    ten: "A queue radar for the whole country",
    bpl: "Monitoring czasów oczekiwania + predykcja na danych NFZ.",
    ben: "Waiting-time monitoring + prediction on NFZ data.",
    ppl: "Dowód: publiczne narzędzie, wszystkie województwa.",
    pen: "Proof: public tool, every region.",
    cpl: "nfz-radar.pl",
    cen: "nfz-radar.pl",
    href: CFG.products.nfz,
    img: "[[ ZRZUT: NFZ Radar — mapa kolejek Polski z filtrami ]]"
  }, {
    tagpl: "R&D · Sektor publiczny · Na żywo",
    tagen: "R&D · Public · Live",
    tpl: "Znajdź granty, których nie widać w wyszukiwarce",
    ten: "Find the grants search can't see",
    bpl: "Semantyczne przeszukiwanie projektów NCBR i funduszy UE.",
    ben: "Semantic search across NCBR and EU-funded projects.",
    ppl: "Dowód: narzędzie obywatelskie, transparentność wydatków.",
    pen: "Proof: civic tool, spending transparency.",
    cpl: "ncbr-radar.pl",
    cen: "ncbr-radar.pl",
    href: CFG.products.ncbr,
    img: "[[ ZRZUT: NCBR Radar — wyniki semantycznego wyszukiwania grantów ]]"
  }, {
    tagpl: "Biotech · Instytucja",
    tagen: "Biotech · Institution",
    tpl: "System klasy produkcyjnej — z pełną zgodnością",
    ten: "Production-grade systems — fully compliant",
    bpl: "Pełny LIMS + algorytmy dopasowań DNA.",
    ben: "Full LIMS + DNA matching algorithms.",
    ppl: "Dowód: wdrożenie dla laboratorium UPP, ISO 27001, RODO, ślad audytowy.",
    pen: "Proof: deployed for the UPP lab, ISO 27001, GDPR, audit trail.",
    cpl: "Porozmawiaj o systemie",
    cen: "Talk to us",
    href: "#kontakt",
    icon: "../assets/icon-biotech.svg"
  }, {
    tagpl: "Retail / kosmetyka · Demo na żądanie",
    tagen: "Retail / cosmetics · Demo on request",
    tpl: "Twoi klienci pytają AI o Twoje produkty — niech odpowiada Twoimi danymi",
    ten: "Your customers already ask AI about your products",
    bpl: "Aplikacja karmiona Twoimi danymi: składniki, alergeny, parametry.",
    ben: "An app fed with your data: ingredients, allergens, specs.",
    ppl: "Dowód: zbudowany dla dużej sieci drogeryjnej (demo na żądanie).",
    pen: "Proof: built for a major drugstore chain (demo on request).",
    cpl: "Poproś o demo",
    cen: "Request a demo",
    href: "#kontakt",
    icon: "../assets/icon-retail.svg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "realizacje",
    className: "kit-section kit-section--forest"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-overtitle"
  }, L(lang, "Jeden silnik. Wiele branż. Twoje dane.", "One engine. Many industries. Your data.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-work-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i % 3 * 80,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(SectorCard, {
    tag: L(lang, c.tagpl, c.tagen),
    title: L(lang, c.tpl, c.ten),
    body: L(lang, c.bpl, c.ben),
    proof: L(lang, c.ppl, c.pen),
    ctaLabel: L(lang, c.cpl, c.cen),
    href: c.href,
    image: c.img,
    icon: c.icon
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-retail-band"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-retail-band__num"
  }, "59%"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kit-retail-band__text"
  }, L(lang, "konsumentów używa już AI do zakupów, a zapytania zakupowe na ChatGPT podwoiły się w pół roku.", "of consumers already shop with AI; ChatGPT shopping queries doubled in six months.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-retail-band__src"
  }, "Bain / Capital One Shopping, 2025")))));
}
function Audience({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "dlakogo",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Dla kogo", "Who it's for")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Dla firm i dla instytucji.", "For companies and institutions."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-audience"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-aud-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-aud-col__mark"
  }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Firmy", "Companies")), /*#__PURE__*/React.createElement("p", null, L(lang, "Własny Radar lub system = przewaga. Więcej trafień, mniej ręcznej pracy, rozwiązanie na Twojej własności.", "Your own radar or system = an edge. More hits, less manual work, a solution you own."))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-aud-col",
    delay: 90
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-aud-col__mark"
  }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Instytucje", "Institutions")), /*#__PURE__*/React.createElement("p", null, L(lang, "Porządek w danych, transparentność, zgodność i pełny ślad audytowy.", "Order in data, transparency, compliance and a full audit trail."))))));
}
function NewsletterForm({
  lang
}) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | sending | ok | error
  const submit = async e => {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    try {
      await postJSON(CFG.newsletterEndpoint, {
        email,
        lang,
        source: "newsletter"
      });
      setState("ok");
    } catch (err) {
      setState("error");
    }
  };
  if (state === "ok") {
    return /*#__PURE__*/React.createElement("p", {
      className: "kit-news__ok"
    }, L(lang, "Zapisano! Dziękujemy.", "You're in! Thank you."));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "kit-news__form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("span", {
    className: "grow"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    name: "newsletter",
    type: "email",
    required: true,
    placeholder: "marek@firma.pl",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    disabled: state === "sending"
  }, state === "sending" ? L(lang, "…", "…") : L(lang, "Zapisz się", "Subscribe")), state === "error" ? /*#__PURE__*/React.createElement("span", {
    className: "kit-news__err"
  }, L(lang, "Spróbuj ponownie.", "Please try again.")) : null);
}
function Partners({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "partnerzy",
    className: "kit-section kit-section--graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-partners"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "kit-eyebrow"
  }, L(lang, "Jak pracujemy", "How we work")), /*#__PURE__*/React.createElement("h2", {
    className: "kit-h2"
  }, L(lang, "Partnersko — z Tobą i w zespole.", "Partners — with you and within the team.")), /*#__PURE__*/React.createElement("p", {
    className: "kit-lead",
    style: {
      marginTop: "var(--space-5)"
    }
  }, L(lang, "Sparx tworzą partnerzy, nie „dyrektorzy”. Jeden trzon prowadzi biznes i sprzedaż, drugi technologię — kompetencje, które się nie nakładają. Tak samo partnersko, obiektywnie i transparentnie traktujemy klientów.", "Sparx is built by partners, not 'directors'. One side leads business and sales, the other technology — skills that don't overlap. We treat clients the same way: as partners, objectively and transparently.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-people"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person__photo"
  }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner biznesowy", "Business partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
    className: "kit-person__role"
  }, L(lang, "Partner — biznes i sprzedaż", "Partner — business & sales"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person__photo"
  }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner technologiczny", "Technology partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
    className: "kit-person__role"
  }, L(lang, "Partner — technologia", "Partner — technology"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-news__name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Radar Report"), /*#__PURE__*/React.createElement("p", {
    className: "kit-news__desc"
  }, L(lang, "Co miesiąc jeden sygnał wyłapany przez nasze Radary.", "One signal a month, caught by our radars.")), /*#__PURE__*/React.createElement(NewsletterForm, {
    lang: lang
  })))));
}
window.SX = Object.assign(window.SX || {}, {
  Work,
  Audience,
  Partners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/js/sections-work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* Sparx landing — app root: language state + assembly */
const {
  Nav,
  Hero,
  Problem,
  Solution,
  How,
  Work,
  Audience,
  Partners,
  Contact,
  Footer,
  MobileBar
} = window.SX;
function App() {
  const [lang, setLang] = React.useState(() => {
    try {
      return localStorage.getItem("sparx-lang") || "pl";
    } catch (e) {
      return "pl";
    }
  });
  const update = l => {
    setLang(l);
    try {
      localStorage.setItem("sparx-lang", l);
    } catch (e) {}
    ;
    document.documentElement.lang = l;
  };
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "kit"
  }, /*#__PURE__*/React.createElement(Nav, {
    lang: lang,
    setLang: update
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Problem, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Solution, {
    lang: lang
  }), /*#__PURE__*/React.createElement(How, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Work, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Audience, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Partners, {
    lang: lang
  }), /*#__PURE__*/React.createElement(Contact, {
    lang: lang
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }), /*#__PURE__*/React.createElement(MobileBar, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/helpers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared helpers for the Sparx landing kit. Loaded before sections. */
const {
  useState,
  useEffect,
  useRef
} = React;

/* bilingual pick */
const L = (lang, pl, en) => lang === "en" ? en : pl;

/* Reveal-on-scroll wrapper. Default state is VISIBLE; we only "arm"
   (hide + animate) below-the-fold elements, and always strip the armed
   class after entering so content can never stay trapped at opacity 0
   in contexts where CSS transitions don't tick. */
function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  const [cls, setCls] = useState(""); // "" | "armed" | "armed in"
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    const belowFold = el.getBoundingClientRect().top >= vh * 0.92;
    // Above the fold / reduced-motion / no IO support → stay visible, never arm.
    if (reduce || typeof IntersectionObserver === "undefined" || !belowFold) return;
    setCls("armed");
    let done = false;
    let strip = 0;
    const reveal = () => {
      if (done) return;
      done = true;
      setCls("armed in"); // fade in where transitions run
      strip = setTimeout(() => setCls(""), 760); // …and guarantee final visible state
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal();
          io.disconnect();
        }
      });
    }, {
      threshold: 0.15
    });
    io.observe(el);
    const fallback = setTimeout(reveal, 1600); // reveal even if IO never fires
    return () => {
      io.disconnect();
      clearTimeout(fallback);
      clearTimeout(strip);
    };
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: ["reveal", cls, className].filter(Boolean).join(" "),
    style: {
      transitionDelay: delay && cls === "armed in" ? `${delay}ms` : undefined,
      ...style
    }
  }, rest), children);
}

/* Icon set — thin line, currentColor (Lucide-weight) */
const I = p => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...p
});
const Arrow = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const ChevR = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 6 6 6-6 6"
}));
const Check = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2.3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Phone = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
}));
const Mail = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m2 7 10 6 10-6"
}));
const Cal = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4M8 2v4M3 10h18"
}));
const LinkedIn = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-9h4v1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "11"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));
const Menu = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M3 12h18M3 18h18"
}));
const Close = p => /*#__PURE__*/React.createElement("svg", _extends({}, I(p), {
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const Shield = p => /*#__PURE__*/React.createElement("svg", I(p), /*#__PURE__*/React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m9 12 2 2 4-4"
}));
window.SXKit = {
  L,
  Reveal,
  Arrow,
  ChevR,
  Check,
  Phone,
  Mail,
  Cal,
  LinkedIn,
  Menu,
  Close,
  Shield
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/helpers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/nav-hero.jsx
try { (() => {
/* Sparx landing — Nav, Hero, MobileBar */
const {
  Button,
  IconButton,
  LangToggle
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow,
  Phone,
  Menu,
  Close
} = window.SXKit;
const NAV_ITEMS = [{
  id: "problem",
  pl: "Problem",
  en: "Problem"
}, {
  id: "rozwiazanie",
  pl: "Rozwiązanie",
  en: "Solution"
}, {
  id: "realizacje",
  pl: "Realizacje",
  en: "Work"
}, {
  id: "dlakogo",
  pl: "Dla kogo",
  en: "Who it's for"
}, {
  id: "kontakt",
  pl: "Kontakt",
  en: "Contact"
}];
function Nav({
  lang,
  setLang
}) {
  const [open, setOpen] = React.useState(false);
  const cta = L(lang, "Umów rozmowę", "Book a call");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "kit-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Sparx"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kit-nav__logo",
    src: "../../assets/sparx-logo-ondark.png",
    alt: "Sparx"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__links"
  }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "kit-nav__link",
    href: `#${it.id}`
  }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
    className: "kit-nav__right"
  }, /*#__PURE__*/React.createElement(LangToggle, {
    value: lang,
    onChange: setLang,
    tone: "dark"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, cta)), /*#__PURE__*/React.createElement("span", {
    className: "kit-nav__burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Menu", "Menu"),
    variant: "dark",
    icon: /*#__PURE__*/React.createElement(Menu, null),
    onClick: () => setOpen(true)
  })))), /*#__PURE__*/React.createElement("div", {
    className: `kit-menu ${open ? "open" : ""}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__top"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kit-nav__logo",
    src: "../../assets/sparx-logo-ondark.png",
    alt: "Sparx"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Zamknij", "Close"),
    variant: "dark",
    icon: /*#__PURE__*/React.createElement(Close, null),
    onClick: () => setOpen(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__links"
  }, NAV_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    className: "kit-menu__link",
    href: `#${it.id}`,
    onClick: () => setOpen(false)
  }, L(lang, it.pl, it.en)))), /*#__PURE__*/React.createElement("div", {
    className: "kit-menu__foot"
  }, /*#__PURE__*/React.createElement(LangToggle, {
    value: lang,
    onChange: setLang,
    tone: "dark"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "a",
    href: "#kontakt",
    onClick: () => setOpen(false),
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, cta))));
}
function Hero({
  lang
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "kit-section kit-section--forest kit-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, {
    as: "h1",
    className: "kit-h1"
  }, L(lang, "Zbuduj własne AI i ", "Build your own AI and "), /*#__PURE__*/React.createElement("span", {
    className: "kit-accent"
  }, L(lang, "zaoszczędź miliony.", "save millions."))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-lead",
    delay: 80,
    style: {
      marginTop: "var(--space-5)"
    }
  }, L(lang, "Sparx buduje AI, które należy do Ciebie. Najpierw szybki, tani test wartości — płacisz dopiero za to, co naprawdę działa.", "Sparx builds AI that belongs to you. A fast, low-cost proof of value first — you pay only for what actually works.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-hero__cta-row",
    delay: 160
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, L(lang, "Umów rozmowę", "Book a call")), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    as: "a",
    href: "#realizacje"
  }, L(lang, "Zobacz realizacje", "See our work"))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-hero__proof",
    delay: 240
  }, /*#__PURE__*/React.createElement("span", null, L(lang, "Działające produkty:", "Live products:")), /*#__PURE__*/React.createElement("b", null, "NFZ Radar \xB7 NCBR Radar \xB7 Przetargi Radar"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "kit-hero__peaks",
    src: "../../assets/hero-peaks.svg",
    alt: L(lang, "Wznoszące się szczyty Sparx", "Sparx ascending peaks")
  }))));
}
function MobileBar({
  lang
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-mobilebar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, L(lang, "Umów rozmowę", "Book a call"))), /*#__PURE__*/React.createElement(IconButton, {
    label: L(lang, "Zadzwoń", "Call"),
    variant: "outline",
    size: "lg",
    as: "a",
    href: "tel:+48000000000",
    icon: /*#__PURE__*/React.createElement(Phone, null)
  }));
}
window.SX = Object.assign(window.SX || {}, {
  Nav,
  Hero,
  MobileBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/nav-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-end.jsx
try { (() => {
/* Sparx landing — Contact + Footer */
const {
  Button,
  Input,
  Textarea,
  Card
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow,
  Check,
  Phone,
  Mail,
  Cal,
  LinkedIn
} = window.SXKit;
function Contact({
  lang
}) {
  const [sent, setSent] = React.useState(false);
  const channels = [{
    icon: /*#__PURE__*/React.createElement(Cal, null),
    main: L(lang, "Wybierz termin rozmowy", "Pick a call time"),
    sub: "calendly.com/sparx/30min",
    href: "https://calendly.com/sparx/30min"
  }, {
    icon: /*#__PURE__*/React.createElement(Mail, null),
    main: "kontakt@sparx.ai",
    sub: L(lang, "Napisz do nas", "Email us"),
    href: "mailto:kontakt@sparx.ai"
  }, {
    icon: /*#__PURE__*/React.createElement(Phone, null),
    main: "+48 000 000 000",
    sub: L(lang, "Zadzwoń", "Call us"),
    href: "tel:+48000000000"
  }, {
    icon: /*#__PURE__*/React.createElement(LinkedIn, null),
    main: "LinkedIn",
    sub: "linkedin.com/company/sparx",
    href: "https://www.linkedin.com/company/sparx"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    className: "kit-section kit-section--cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-contact__head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Porozmawiajmy o Twoim przypadku.", "Let's talk about your case.")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-lead"
  }, L(lang, "30-minutowa rozmowa: rozumiemy potrzebę i podpowiadamy, czy i jak AI ma u Ciebie sens. Bez zobowiązań.", "A 30-minute call: we understand the need and advise whether and how AI makes sense for you. No strings attached.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-channels"
  }, channels.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    as: "a",
    delay: i * 60,
    className: "kit-channel",
    href: c.href
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__ic"
  }, c.icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__main"
  }, c.main), /*#__PURE__*/React.createElement("span", {
    className: "kit-channel__sub"
  }, c.sub)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, null, sent ? /*#__PURE__*/React.createElement("div", {
    className: "kit-form__ok"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-form__ok-mark"
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("h3", null, L(lang, "Dziękujemy!", "Thank you!")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginTop: "var(--space-2)"
    }
  }, L(lang, "Odezwiemy się w 24h.", "We'll get back within 24h."))) : /*#__PURE__*/React.createElement("form", {
    className: "kit-form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: L(lang, "Imię", "Name"),
    name: "imie",
    required: true,
    placeholder: L(lang, "Jak się zwracać?", "Your name")
  }), /*#__PURE__*/React.createElement(Input, {
    label: L(lang, "Firma", "Company"),
    name: "firma",
    optional: true,
    placeholder: L(lang, "Nazwa firmy", "Company")
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    name: "email",
    type: "email",
    required: true,
    placeholder: "marek@firma.pl"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: L(lang, "Wiadomość", "Message"),
    name: "wiadomosc",
    optional: true,
    rows: 3,
    placeholder: L(lang, "W czym możemy pomóc?", "How can we help?")
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, L(lang, "Umów rozmowę", "Book a call")))))));
}
function Footer({
  lang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "kit-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "kit-footer__logo",
    src: "../../assets/sparx-logo-ondark.png",
    alt: "Sparx"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-footer__tag"
  }, L(lang, "Partner technologiczny AI. Budujemy rozwiązania, które są Twoje.", "A technology partner in AI. We build solutions that are yours."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Nawigacja", "Navigation")), /*#__PURE__*/React.createElement("a", {
    href: "#problem"
  }, L(lang, "Problem", "Problem")), /*#__PURE__*/React.createElement("a", {
    href: "#rozwiazanie"
  }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement("a", {
    href: "#realizacje"
  }, L(lang, "Realizacje", "Work"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Realizacje", "Work")), /*#__PURE__*/React.createElement("a", {
    href: "https://nfz-radar.pl"
  }, "NFZ Radar"), /*#__PURE__*/React.createElement("a", {
    href: "https://ncbr-radar.pl"
  }, "NCBR Radar"), /*#__PURE__*/React.createElement("a", {
    href: "https://przetargi-radar.pl"
  }, "Przetargi Radar")), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, L(lang, "Kontakt", "Contact")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kontakt@sparx.ai"
  }, "kontakt@sparx.ai"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+48000000000"
  }, "+48 000 000 000"), /*#__PURE__*/React.createElement("span", null, "Polska \xB7 NIP 7792229459"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer__bottom"
  }, L(lang, "Źródła: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx.", "Sources: MIT 2025 · EY 2026 · The Conference Board 2026 · Bain / Capital One 2025.  © 2026 Sparx."))));
}
window.SX = Object.assign(window.SX || {}, {
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-end.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-mid.jsx
try { (() => {
/* Sparx landing — Problem, Solution, How it works */
const {
  Button,
  Badge,
  Card,
  StatBlock,
  StepItem,
  ContrastRow
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  ChevR
} = window.SXKit;
function Problem({
  lang
}) {
  const stats = [{
    v: "95%",
    pl: "pilotaży AI nie przynosi mierzalnego zwrotu",
    en: "of AI pilots deliver no measurable return",
    s: "MIT, „The GenAI Divide”, 2025"
  }, {
    v: "38%",
    pl: "prezesów wskazuje AI jako największe zewnętrzne zagrożenie",
    en: "of CEOs name AI their biggest external threat",
    s: "The Conference Board, 2026"
  }, {
    v: "60%",
    pl: "liderów świadomie spowolniło wdrożenia AI",
    en: "of leaders deliberately slowed AI deployment",
    s: "EY, 2026"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "problem",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Problem", "The problem")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Wszyscy wdrażają AI. Większość traci na tym pieniądze.", "Everyone's deploying AI. Most are losing money on it."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-stats3"
  }, stats.map((st, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: st.v,
    tone: "light",
    label: L(lang, st.pl, st.en),
    source: st.s
  })))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-punch"
  }, L(lang, "Problemem nie jest AI. ", "AI isn't the problem. "), /*#__PURE__*/React.createElement("b", null, L(lang, "Problemem jest wdrażanie AI bez dowodu", "Deploying it without proof")), L(lang, ", bez kontekstu Twoich danych i bez planu na produkcję.", ", without your data's context, and without a plan for production — that's the problem."))));
}
function Solution({
  lang
}) {
  const cards = [{
    pl: "Najpierw dowód, potem inwestycja",
    en: "Proof first, investment second",
    bpl: "Większość projektów pada na przejściu z pilotażu na produkcję (MIT, 2025). Zaczynamy od taniego testu — jeśli nie działa, nic nie ryzykujesz.",
    ben: "Most projects fail moving from pilot to production (MIT, 2025). We start with a low-cost test — if it doesn't work, you risk nothing."
  }, {
    pl: "Jest Twoje",
    en: "It's yours",
    bpl: "Kod i dane na Twojej chmurze. Żadnej licencji za miliony, z której nie da się wyjść.",
    ben: "Code and data on your cloud. No million-dollar license you can't exit."
  }, {
    pl: "Klasy produkcyjnej i zgodne",
    en: "Production-grade & compliant",
    bpl: "Zbudowane jak system krytyczny.",
    ben: "Built like a critical system.",
    badges: ["RODO / GDPR", "ISO 27001", L(lang, "Hosting UE", "EU hosting")]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "rozwiazanie",
    className: "kit-section kit-section--graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Rozwiązanie", "Solution")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Nasza odpowiedź: wdrażaj mądrze.", "Our answer: deploy smart."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-sol-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 90,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "graphite",
    className: "kit-sol-card",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", null, L(lang, c.pl, c.en)), /*#__PURE__*/React.createElement("p", null, L(lang, c.bpl, c.ben)), c.badges ? /*#__PURE__*/React.createElement("div", {
    className: "kit-badges"
  }, c.badges.map(b => /*#__PURE__*/React.createElement(Badge, {
    key: b,
    variant: "onink"
  }, b))) : null)))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-contrast-wrap"
  }, /*#__PURE__*/React.createElement(ContrastRow, {
    themLabel: L(lang, "Inni", "Others"),
    usLabel: L(lang, "My", "Us"),
    them: L(lang, "Sprzedają Ci system na swojej licencji.", "Sell you a system on their license."),
    us: L(lang, "Budujemy przewagę, która zostaje Twoja.", "Build an advantage that stays yours.")
  }))));
}
function How({
  lang
}) {
  const steps = [{
    n: 1,
    pl: "Uwaga",
    en: "Attention",
    dpl: "Radary + edukacja",
    den: "Radars + education"
  }, {
    n: 2,
    pl: "Warsztat",
    en: "Workshop",
    dpl: "Diagnoza potrzeb",
    den: "Needs diagnosis"
  }, {
    n: 3,
    pl: "Tani test",
    en: "Low-cost test",
    dpl: "Dowód wartości",
    den: "Proof of value"
  }, {
    n: 4,
    pl: "Budowa",
    en: "Build",
    dpl: "Trzy modele",
    den: "Three models"
  }, {
    n: 5,
    pl: "Własność",
    en: "Ownership",
    dpl: "Kod i dane Twoje",
    den: "Code & data yours"
  }];
  const models = [L(lang, "Projekt + kod", "Project + code"), L(lang, "Model SaaS-owy", "SaaS-style"), "Body-leasing (Try & Hire)"];
  return /*#__PURE__*/React.createElement("section", {
    id: "jak",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Jak to działa", "How it works")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Pięć małych kroków zamiast jednego wielkiego kontraktu.", "Five small steps instead of one big contract."))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-steps__item"
  }, /*#__PURE__*/React.createElement(StepItem, {
    n: s.n,
    title: L(lang, s.pl, s.en),
    desc: L(lang, s.dpl, s.den)
  })), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "kit-steps__arrow"
  }, /*#__PURE__*/React.createElement(ChevR, null)) : null))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-models"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-models__lbl"
  }, L(lang, "Trzy modele:", "Three models:")), models.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    className: "kit-pill"
  }, m))), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "kit-note"
  }, L(lang, "Wchodzisz na dowolnym kroku i płynnie przechodzisz dalej — bez „wszystko albo nic”.", "Enter at any step and move on smoothly — no all-or-nothing."))));
}
window.SX = Object.assign(window.SX || {}, {
  Problem,
  Solution,
  How
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-work.jsx
try { (() => {
/* Sparx landing — Work (Realizacje), Audience (Dla kogo), Partners */
const {
  Button,
  Input,
  Card,
  SectorCard
} = window.SPARXDesignSystem_59b6c5;
const {
  L,
  Reveal,
  Arrow
} = window.SXKit;
function Work({
  lang
}) {
  const cards = [{
    tagpl: "Medyczna / farma · Produkt",
    tagen: "Medical / pharma · Product",
    tpl: "Wygrywaj przetargi, które konkurencja przegapia",
    ten: "Win the tenders your competitors miss",
    bpl: "Wyłapanie ogłoszeń z rynku, analityka kto wygrał i za ile, porównywarka Twoich produktów.",
    ben: "Catch notices from the market, analyze who won and for how much, compare your products.",
    ppl: "Dowód: działający produkt, dane z wielu źródeł, RODO.",
    pen: "Proof: live product, multi-source data, GDPR.",
    cpl: "Zobacz demo",
    cen: "See demo",
    href: "#kontakt",
    img: "[[ ZRZUT: Przetargi Radar — lista dopasowanych przetargów + panel analityki ]]"
  }, {
    tagpl: "Ochrona zdrowia · Sektor publiczny · Na żywo",
    tagen: "Healthcare · Public · Live",
    tpl: "Radar kolejek dla całej Polski",
    ten: "A queue radar for the whole country",
    bpl: "Monitoring czasów oczekiwania + predykcja na danych NFZ.",
    ben: "Waiting-time monitoring + prediction on NFZ data.",
    ppl: "Dowód: publiczne narzędzie, wszystkie województwa.",
    pen: "Proof: public tool, every region.",
    cpl: "nfz-radar.pl",
    cen: "nfz-radar.pl",
    href: "https://nfz-radar.pl",
    img: "[[ ZRZUT: NFZ Radar — mapa kolejek Polski z filtrami ]]"
  }, {
    tagpl: "R&D · Sektor publiczny · Na żywo",
    tagen: "R&D · Public · Live",
    tpl: "Znajdź granty, których nie widać w wyszukiwarce",
    ten: "Find the grants search can't see",
    bpl: "Semantyczne przeszukiwanie projektów NCBR i funduszy UE.",
    ben: "Semantic search across NCBR and EU-funded projects.",
    ppl: "Dowód: narzędzie obywatelskie, transparentność wydatków.",
    pen: "Proof: civic tool, spending transparency.",
    cpl: "ncbr-radar.pl",
    cen: "ncbr-radar.pl",
    href: "https://ncbr-radar.pl",
    img: "[[ ZRZUT: NCBR Radar — wyniki semantycznego wyszukiwania grantów ]]"
  }, {
    tagpl: "Biotech · Instytucja",
    tagen: "Biotech · Institution",
    tpl: "System klasy produkcyjnej — z pełną zgodnością",
    ten: "Production-grade systems — fully compliant",
    bpl: "Pełny LIMS + algorytmy dopasowań DNA.",
    ben: "Full LIMS + DNA matching algorithms.",
    ppl: "Dowód: wdrożenie dla laboratorium UPP, ISO 27001, RODO, ślad audytowy.",
    pen: "Proof: deployed for the UPP lab, ISO 27001, GDPR, audit trail.",
    cpl: "Porozmawiaj o systemie",
    cen: "Talk to us",
    href: "#kontakt",
    icon: "../../assets/icon-biotech.svg"
  }, {
    tagpl: "Retail / kosmetyka · Demo na żądanie",
    tagen: "Retail / cosmetics · Demo on request",
    tpl: "Twoi klienci pytają AI o Twoje produkty — niech odpowiada Twoimi danymi",
    ten: "Your customers already ask AI about your products",
    bpl: "Aplikacja karmiona Twoimi danymi: składniki, alergeny, parametry.",
    ben: "An app fed with your data: ingredients, allergens, specs.",
    ppl: "Dowód: zbudowany dla dużej sieci drogeryjnej (demo na żądanie).",
    pen: "Proof: built for a major drugstore chain (demo on request).",
    cpl: "Poproś o demo",
    cen: "Request a demo",
    href: "#kontakt",
    icon: "../../assets/icon-retail.svg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "realizacje",
    className: "kit-section kit-section--forest"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-overtitle"
  }, L(lang, "Jeden silnik. Wiele branż. Twoje dane.", "One engine. Many industries. Your data.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-work-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i % 3 * 80,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(SectorCard, {
    tag: L(lang, c.tagpl, c.tagen),
    title: L(lang, c.tpl, c.ten),
    body: L(lang, c.bpl, c.ben),
    proof: L(lang, c.ppl, c.pen),
    ctaLabel: L(lang, c.cpl, c.cen),
    href: c.href,
    image: c.img,
    icon: c.icon
  })))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-retail-band"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-retail-band__num"
  }, "59%"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kit-retail-band__text"
  }, L(lang, "konsumentów używa już AI do zakupów, a zapytania zakupowe na ChatGPT podwoiły się w pół roku.", "of consumers already shop with AI; ChatGPT shopping queries doubled in six months.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-retail-band__src"
  }, "Bain / Capital One Shopping, 2025")))));
}
function Audience({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "dlakogo",
    className: "kit-section kit-section--cloud"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "div",
    className: "kit-eyebrow"
  }, L(lang, "Dla kogo", "Who it's for")), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "kit-h2"
  }, L(lang, "Dla firm i dla instytucji.", "For companies and institutions."))), /*#__PURE__*/React.createElement("div", {
    className: "kit-audience"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-aud-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-aud-col__mark"
  }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Firmy", "Companies")), /*#__PURE__*/React.createElement("p", null, L(lang, "Własny Radar lub system = przewaga. Więcej trafień, mniej ręcznej pracy, rozwiązanie na Twojej własności.", "Your own radar or system = an edge. More hits, less manual work, a solution you own."))), /*#__PURE__*/React.createElement(Reveal, {
    className: "kit-aud-col",
    delay: 90
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-aud-col__mark"
  }), /*#__PURE__*/React.createElement("h3", null, L(lang, "Instytucje", "Institutions")), /*#__PURE__*/React.createElement("p", null, L(lang, "Porządek w danych, transparentność, zgodność i pełny ślad audytowy.", "Order in data, transparency, compliance and a full audit trail."))))));
}
function Partners({
  lang
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "partnerzy",
    className: "kit-section kit-section--graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container kit-partners"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "kit-eyebrow"
  }, L(lang, "Jak pracujemy", "How we work")), /*#__PURE__*/React.createElement("h2", {
    className: "kit-h2"
  }, L(lang, "Partnersko — z Tobą i w zespole.", "Partners — with you and within the team.")), /*#__PURE__*/React.createElement("p", {
    className: "kit-lead",
    style: {
      marginTop: "var(--space-5)"
    }
  }, L(lang, "Sparx tworzą partnerzy, nie „dyrektorzy”. Jeden trzon prowadzi biznes i sprzedaż, drugi technologię — kompetencje, które się nie nakładają. Tak samo partnersko, obiektywnie i transparentnie traktujemy klientów.", "Sparx is built by partners, not 'directors'. One side leads business and sales, the other technology — skills that don't overlap. We treat clients the same way: as partners, objectively and transparently.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-people"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person__photo"
  }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner biznesowy", "Business partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
    className: "kit-person__role"
  }, L(lang, "Partner — biznes i sprzedaż", "Partner — business & sales"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-person__photo"
  }, "[[ ZDJ\u0118CIE: ", L(lang, "Partner technologiczny", "Technology partner"), " ]]"), /*#__PURE__*/React.createElement("div", {
    className: "kit-person__role"
  }, L(lang, "Partner — technologia", "Partner — technology"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "graphite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-news__name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Radar Report"), /*#__PURE__*/React.createElement("p", {
    className: "kit-news__desc"
  }, L(lang, "Co miesiąc jeden sygnał wyłapany przez nasze Radary.", "One signal a month, caught by our radars.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-news__form"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grow"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    name: "newsletter",
    type: "email",
    placeholder: "marek@firma.pl"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, L(lang, "Zapisz się", "Subscribe")))))));
}
window.SX = Object.assign(window.SX || {}, {
  Work,
  Audience,
  Partners
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContrastRow = __ds_scope.ContrastRow;

__ds_ns.SectorCard = __ds_scope.SectorCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepItem = __ds_scope.StepItem;

})();
