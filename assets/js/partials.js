/* ============================================================
   Elementos compartidos en todas las páginas:
   barra de anuncio, barra fija de reserva, WhatsApp y footer.
   Terra Bella Hotel Boutique
   ============================================================ */
(function () {
  "use strict";
  var WA = "50321336900"; // recepción, formato internacional para wa.me
  var WA_MSG = encodeURIComponent(
    "Hola, quisiera información sobre una reserva en Terra Bella Hotel Boutique."
  );

  /* ---------- Barra de anuncio (descartable) ---------- */
  if (!document.querySelector(".announce")) {
    var a = document.createElement("div");
    a.className = "announce";
    a.innerHTML =
      '<span>Reserva directa &middot; desayuno incluido, sin comisiones y cancelaci&oacute;n flexible.</span> ' +
      '<a href="ofertas.html">Ver ventajas</a>' +
      '<button class="announce__x" type="button" aria-label="Cerrar aviso">&times;</button>';
    document.body.insertBefore(a, document.body.firstChild);
    a.querySelector(".announce__x").addEventListener("click", function () {
      document.body.classList.add("announce-off");
      try { localStorage.setItem("tb_announce", "off"); } catch (e) {}
    });
    try { if (localStorage.getItem("tb_announce") === "off") document.body.classList.add("announce-off"); } catch (e) {}
  }

  /* ---------- Barra fija de reserva (aparece al hacer scroll) ---------- */
  if (!document.querySelector(".stickybar")) {
    var fmt = function (d) { return d.toISOString().slice(0, 10); };
    var t1 = new Date(); t1.setDate(t1.getDate() + 1);
    var t2 = new Date(); t2.setDate(t2.getDate() + 2);
    var sb = document.createElement("div");
    sb.className = "stickybar";
    sb.innerHTML =
      '<div class="stickybar__in">' +
        '<span class="stickybar__brand">Terra&nbsp;Bella</span>' +
        '<form id="stickyform">' +
          '<div class="fld"><label for="sb-in">Entrada</label><input type="date" id="sb-in" value="' + fmt(t1) + '" min="' + fmt(new Date()) + '"></div>' +
          '<div class="fld"><label for="sb-out">Salida</label><input type="date" id="sb-out" value="' + fmt(t2) + '"></div>' +
          '<div class="fld fld--guests"><label for="sb-g">Huéspedes</label>' +
            '<select id="sb-g">' +
              '<option value="2|0|1">2 adultos · 1 habitación</option>' +
              '<option value="1|0|1">1 adulto · 1 habitación</option>' +
              '<option value="2|1|1">2 adultos · 1 niño</option>' +
              '<option value="2|2|1">2 adultos · 2 niños</option>' +
              '<option value="4|0|2">4 adultos · 2 habitaciones</option>' +
            '</select></div>' +
          '<button class="btn btn--primary" type="submit">Reservar</button>' +
        '</form>' +
      '</div>';
    document.body.insertBefore(sb, document.body.firstChild);

    var sin = sb.querySelector("#sb-in"), sout = sb.querySelector("#sb-out");
    sin.addEventListener("change", function () {
      var n = new Date(sin.value); n.setDate(n.getDate() + 1);
      if (new Date(sout.value) <= new Date(sin.value)) sout.value = fmt(n);
      sout.min = fmt(n);
    });
    sb.querySelector("#stickyform").addEventListener("submit", function (e) {
      e.preventDefault();
      var g = sb.querySelector("#sb-g").value.split("|");
      var p = new URLSearchParams({
        checkin: sin.value, checkout: sout.value,
        adults: g[0], children: g[1], rooms: g[2]
      });
      window.location.href = "reservar.html?" + p.toString();
    });

    var hero = document.querySelector(".hero, .pagehero");
    var onScroll = function () {
      var th = hero ? Math.max(240, hero.offsetHeight * 0.62) : 300;
      sb.classList.toggle("show", window.scrollY > th);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Botón flotante de WhatsApp ---------- */
  if (!document.querySelector(".wa-fab")) {
    var w = document.createElement("a");
    w.className = "wa-fab";
    w.href = "https://wa.me/" + WA + "?text=" + WA_MSG;
    w.target = "_blank";
    w.rel = "noopener";
    w.setAttribute("aria-label", "Escribir por WhatsApp");
    w.setAttribute("data-label", "Reserva por WhatsApp");
    w.innerHTML =
      '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4.1-.3-.4a10 10 0 0 1-1.6-5.6C5.6 9.7 10.3 5 16 5s10.4 4.7 10.4 10.5S21.7 25.8 16 25.8zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.3 5.2 4.6.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>';
    document.body.appendChild(w);
  }

  /* ---------- Footer ---------- */
  var el = document.querySelector("[data-footer]");
  if (el) el.innerHTML = '' +
  '<div class="wrap">' +
    '<div class="footer-grid">' +
      '<div>' +
        '<a class="brand" href="index.html">' +
          '<span class="brand__mark" aria-hidden="true"><svg viewBox="0 0 34 40"><path d="M17 4c-6 5-10 10-10 17a10 10 0 0 0 20 0c0-7-4-12-10-17Z" fill="#c98a5f"/><path d="M17 12c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9Z" fill="#43462b"/></svg></span>' +
          '<span class="brand__word"><b>Terra Bella</b><span>Hotel Boutique</span></span>' +
        '</a>' +
        '<p class="muted" style="margin-top:16px;max-width:34ch">Avenida La Revolución #175, Colonia San Benito, San Salvador, El Salvador.</p>' +
        '<div class="footer-social">' +
          '<a href="https://www.facebook.com/terrabellahotelboutique/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.5C22 1.4 20.6 1 19 1c-3 0-5 2-5 5v4h-3v4h3v8z"/></svg></a>' +
          '<a href="https://www.instagram.com/terrabellahotelboutique/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
          '<a href="https://wa.me/' + WA + '" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.9.9-.9 2.2 0 3.5a9 9 0 0 0 4.5 4c1.9.7 1.9.5 2.3.4.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1z"/></svg></a>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<h4>Hotel</h4>' +
        '<ul>' +
          '<li><a href="habitaciones.html">Habitaciones</a></li>' +
          '<li><a href="restaurante.html">Restaurante y bar</a></li>' +
          '<li><a href="experiencias.html">Experiencias</a></li>' +
          '<li><a href="ofertas.html">Ofertas</a></li>' +
          '<li><a href="ubicacion.html">Ubicación</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h4>Reservas</h4>' +
        '<ul>' +
          '<li><a href="reservar.html">Reservar en línea</a></li>' +
          '<li>Recepción: <a href="tel:+50321336900">+503 2133 6900</a></li>' +
          '<li>WhatsApp: <a href="https://wa.me/' + WA + '">+503 2133 6900</a></li>' +
          '<li><a href="mailto:reservas@terrabellahotel.com">reservas@terrabellahotel.com</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h4>Boletín</h4>' +
        '<p class="muted" style="margin-bottom:14px">Suscríbete y recibe un <strong>10&nbsp;% de descuento</strong> en tu primera reserva directa.</p>' +
        '<form data-demo class="stack" style="gap:10px">' +
          '<input style="width:100%;border:1px solid rgba(255,255,255,.2);background:transparent;padding:12px 14px;color:#fff" type="email" required placeholder="Tu correo electrónico" aria-label="Tu correo electrónico">' +
          '<button class="btn btn--primary btn--sm btn--block" type="submit">Suscribirme</button>' +
          '<small data-demo-msg hidden style="color:var(--gold-soft)"></small>' +
        '</form>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<p>© <span data-year>2026</span> Terra Bella Hotel Boutique · San Salvador. Sitio de demostración.</p>' +
      '<nav><a href="privacidad.html">Privacidad</a><a href="privacidad.html">Términos</a><a href="ubicacion.html">Contacto</a></nav>' +
    '</div>' +
  '</div>';
})();
