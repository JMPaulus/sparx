/* ============================================================
   Sparx landing — behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Language (PL default, persisted) ---------- */
  var STORE_KEY = "sparx-lang";
  var root = document.documentElement;

  function setLang(lang) {
    lang = lang === "en" ? "en" : "pl";
    root.classList.remove("lang-pl", "lang-en");
    root.classList.add("lang-" + lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
    });
    // swap attributes that can't use dual-spans (placeholder, aria-label, alt)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr"); // e.g. "placeholder|aria-label"
      spec.split("|").forEach(function (attr) {
        var v = el.getAttribute("data-" + attr + "-" + lang);
        if (v !== null) el.setAttribute(attr, v);
      });
    });
  }

  var saved = "pl";
  try { saved = localStorage.getItem(STORE_KEY) || "pl"; } catch (e) {}
  setLang(saved);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) { setLang(btn.getAttribute("data-lang-btn")); }
  });

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".nav__burger");
  var menu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Scroll reveal (rect-based, IO-independent) ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (reduce) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealCheck = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = revealEls.length - 1; i >= 0; i--) {
        var el = revealEls[i];
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("is-visible");
          revealEls.splice(i, 1);
        }
      }
    };
    revealCheck();
    requestAnimationFrame(revealCheck);
    window.addEventListener("scroll", revealCheck, { passive: true });
    window.addEventListener("resize", revealCheck, { passive: true });
    window.addEventListener("load", revealCheck);
  }

  /* ---------- Count-up on stats ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1600, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  var stats = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  if (stats.length) {
    if (reduce) {
      stats.forEach(countUp);
    } else {
      var statCheck = function () {
        var vh = window.innerHeight || document.documentElement.clientHeight;
        for (var i = stats.length - 1; i >= 0; i--) {
          var r = stats[i].getBoundingClientRect();
          if (r.top < vh * 0.85 && r.bottom > 0) {
            countUp(stats[i]);
            stats.splice(i, 1);
          }
        }
      };
      statCheck();
      window.addEventListener("scroll", statCheck, { passive: true });
      window.addEventListener("resize", statCheck, { passive: true });
    }
  }

  /* ---------- Contact form (demo) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector("[data-form-ok]");
      if (ok) { ok.hidden = false; }
      form.querySelectorAll("input, textarea, button").forEach(function (c) {
        if (c.type !== "button") c.disabled = true;
      });
    });
  }

  /* ---------- Cookie banner ---------- */
  var COOKIE_KEY = "sparx-cookie";
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var decided = null;
    try { decided = localStorage.getItem(COOKIE_KEY); } catch (e) {}
    if (!decided) { banner.hidden = false; }
    banner.addEventListener("click", function (e) {
      if (e.target.closest("[data-cookie]")) {
        try { localStorage.setItem(COOKIE_KEY, e.target.getAttribute("data-cookie")); } catch (e) {}
        banner.hidden = true;
      }
    });
  }
})();
