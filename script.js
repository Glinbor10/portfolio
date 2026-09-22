(function () {
  "use strict";

  var STORAGE_LANG = "glb-portfolio-lang";
  var STORAGE_THEME = "glb-portfolio-theme";

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.es;
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll(".lang-opt").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });
    safeSet(STORAGE_LANG, lang);
  }

  function currentLang() {
    return safeGet(STORAGE_LANG) === "en" ? "en" : "es";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    safeSet(STORAGE_THEME, theme);
  }

  function initTheme() {
    var stored = safeGet(STORAGE_THEME);
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      return;
    }
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    applyLang(currentLang());

    var langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        applyLang(currentLang() === "es" ? "en" : "es");
      });
    }

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }

    var mobileBtn = document.getElementById("mobileMenuBtn");
    var mobileNav = document.getElementById("mobileNav");
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
        mobileBtn.classList.toggle("open");
      });
      mobileNav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          mobileNav.classList.remove("open");
          mobileBtn.classList.remove("open");
        });
      });
    }

    // Reveal-on-scroll for sections
    var sections = document.querySelectorAll(".section, .hero");
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      sections.forEach(function (s) { observer.observe(s); });
    } else {
      sections.forEach(function (s) { s.classList.add("in-view"); });
    }
  });
})();
