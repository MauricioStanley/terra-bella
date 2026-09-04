/* ============================================================
   Terra Bella Hotel Boutique — interacciones
   Vanilla JS. Sin dependencias.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Header: estado sólido al hacer scroll ---------- */
  var header = $(".site-header");
  if (header && !header.classList.contains("site-header--inner")) {
    var onHeaderScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    onHeaderScroll();
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
  }

  /* ---------- Menú móvil ---------- */
  var burger = $(".burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = $$(".reveal, .reveal-img");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Parallax suave (hero) ---------- */
  var parallaxEls = $$("[data-parallax]");
  if (parallaxEls.length && !reduceMotion) {
    var ticking = false;
    var applyParallax = function () {
      var y = window.scrollY;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        el.style.transform = "translate3d(0," + (y * speed).toFixed(2) + "px,0)";
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(applyParallax); ticking = true; }
    }, { passive: true });
    applyParallax();
  }

  /* ---------- Contadores ---------- */
  var counters = $$("[data-count]");
  if (counters.length) {
    var runCount = function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var dec = (el.getAttribute("data-decimals") | 0);
      var dur = 1400, start = performance.now();
      var step = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec);
      };
      requestAnimationFrame(step);
    };
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) { el.textContent = parseFloat(el.getAttribute("data-count")).toFixed(el.getAttribute("data-decimals") | 0); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---------- Barra de reserva (hero) ---------- */
  var bookbar = $("#bookbar");
  if (bookbar) {
    var ci = $("#bb-checkin"), co = $("#bb-checkout");
    var fmt = function (d) { return d.toISOString().slice(0, 10); };
    var today = new Date();
    var tmr = new Date(); tmr.setDate(tmr.getDate() + 1);
    var dayAfter = new Date(); dayAfter.setDate(dayAfter.getDate() + 2);
    if (ci && !ci.value) { ci.value = fmt(tmr); ci.min = fmt(today); }
    if (co && !co.value) { co.value = fmt(dayAfter); co.min = fmt(dayAfter); }
    if (ci && co) {
      ci.addEventListener("change", function () {
        var next = new Date(ci.value); next.setDate(next.getDate() + 1);
        co.min = fmt(next);
        if (new Date(co.value) <= new Date(ci.value)) co.value = fmt(next);
      });
    }

    var guestsField = $("#bb-guests");
    var pop = $("#guests-pop");
    if (guestsField && pop) {
      var state = { adults: 2, children: 0, rooms: 1 };
      var display = $("#bb-guests-display");
      var sync = function () {
        display.textContent = state.adults + " adultos · " + state.children + " niños · " + state.rooms + (state.rooms > 1 ? " habitaciones" : " habitación");
        $$("[data-step]").forEach(function (b) {
          var k = b.getAttribute("data-step").split(":")[0];
          $("#val-" + k).textContent = state[k];
        });
      };
      guestsField.addEventListener("click", function (e) {
        e.stopPropagation();
        pop.classList.toggle("open");
      });
      pop.addEventListener("click", function (e) { e.stopPropagation(); });
      document.addEventListener("click", function () { pop.classList.remove("open"); });
      $$("[data-step]", pop).forEach(function (b) {
        b.addEventListener("click", function () {
          var parts = b.getAttribute("data-step").split(":");
          var k = parts[0], dir = parts[1] === "up" ? 1 : -1;
          var min = k === "adults" || k === "rooms" ? 1 : 0;
          state[k] = Math.max(min, Math.min(9, state[k] + dir));
          if (state.rooms > state.adults) state.rooms = state.adults;
          sync();
        });
      });
      sync();
      bookbar._guests = state;
    }

    bookbar.addEventListener("submit", function (e) {
      e.preventDefault();
      var g = bookbar._guests || { adults: 2, children: 0, rooms: 1 };
      var params = new URLSearchParams({
        checkin: ci ? ci.value : "",
        checkout: co ? co.value : "",
        adults: g.adults, children: g.children, rooms: g.rooms,
        promo: ($("#bb-promo") && $("#bb-promo").value) || "",
      });
      window.location.href = "reservar.html?" + params.toString();
    });
  }

  /* ---------- Lightbox de galería ---------- */
  var lbTriggers = $$("[data-lightbox]");
  if (lbTriggers.length) {
    var items = lbTriggers.map(function (t) {
      return { src: t.getAttribute("data-lightbox"), cap: t.getAttribute("data-caption") || "" };
    });
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Cerrar">&times;</button>' +
      '<button class="lightbox__nav lightbox__nav--prev" aria-label="Anterior">&#8249;</button>' +
      '<button class="lightbox__nav lightbox__nav--next" aria-label="Siguiente">&#8250;</button>' +
      '<img alt="">' +
      '<div class="lightbox__caption"></div>';
    document.body.appendChild(lb);
    var lbImg = $("img", lb), lbCap = $(".lightbox__caption", lb), idx = 0;
    var show = function (i) {
      idx = (i + items.length) % items.length;
      lbImg.src = items[idx].src;
      lbImg.alt = items[idx].cap;
      lbCap.textContent = items[idx].cap;
    };
    var open = function (i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    var close = function () { lb.classList.remove("open"); document.body.style.overflow = ""; };
    lbTriggers.forEach(function (t, i) {
      t.addEventListener("click", function () { open(i); });
    });
    $(".lightbox__close", lb).addEventListener("click", close);
    $(".lightbox__nav--prev", lb).addEventListener("click", function () { show(idx - 1); });
    $(".lightbox__nav--next", lb).addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---------- FAQ (acordeón) ---------- */
  $$(".faq__item").forEach(function (item) {
    var q = item.querySelector(".faq__q");
    if (!q) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- Comparador de habitaciones (mostrar / ocultar) ---------- */
  var cmpBtn = $("[data-compare-toggle]");
  var cmp = $("#compare-panel");
  if (cmpBtn && cmp) {
    cmp.hidden = true;
    cmpBtn.addEventListener("click", function () {
      cmp.hidden = !cmp.hidden;
      cmpBtn.textContent = cmp.hidden ? cmpBtn.getAttribute("data-show") : cmpBtn.getAttribute("data-hide");
      if (!cmp.hidden) cmp.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Año en el footer ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Formularios (demo) ---------- */
  $$("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector("[data-demo-msg]");
      if (msg) {
        msg.hidden = false;
        msg.textContent = "Gracias. Hemos recibido tu mensaje; el equipo de Terra Bella te responderá dentro de las próximas 24 horas.";
      }
      form.reset();
    });
  });

  /* ---------- Service worker (carga instantánea / offline) ---------- */
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
