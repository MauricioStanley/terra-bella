/* ============================================================
   i18n ligero — Español (base) · English
   Sin dependencias. Traduce por coincidencia exacta de texto,
   guarda el original y reacciona al contenido que el JS
   del sitio renderiza después.
   ============================================================ */
(function () {
  "use strict";

  var LANGS = { es: "ES", en: "EN" };
  var STORE = "tb_lang";

  /* Clave = texto en español tal cual aparece en el HTML. */
  var EN = {
    /* --- Navegación y marca --- */
    "Habitaciones": "Rooms",
    "Restaurante": "Restaurant",
    "Restaurante y bar": "Restaurant & bar",
    "Experiencias": "Experiences",
    "Ofertas": "Offers",
    "Ubicación": "Location",
    "Reservar": "Book",
    "Reservar ahora": "Book now",
    "Hotel Boutique": "Boutique Hotel",
    "Saltar al contenido": "Skip to content",
    "Inicio": "Home",
    "Abrir menú": "Open menu",
    "Idioma": "Language",

    /* --- Home: hero --- */
    "Un jardín en medio de la ciudad": "A garden in the middle of the city",
    "Trece habitaciones alrededor de un jardín, en el barrio de los museos de San Salvador. Desayuno cocinado al momento, café salvadoreño y silencio a diez minutos de todo.":
      "Thirteen rooms around a garden, in San Salvador's museum district. Breakfast cooked to order, Salvadoran coffee and quiet, ten minutes from everything.",
    "Ver habitaciones": "View rooms",
    "Descubre": "Discover",

    /* --- Home: bienvenida --- */
    "El jardín": "The garden",
    "Una casa, no un lobby": "A house, not a lobby",
    "Terra Bella ocupa una casa de San Benito adaptada con cuidado: pisos originales, plantas de la región y un jardín interior que ordena la vida del hotel. Se llega como huésped y se sale conociendo al equipo por su nombre.":
      "Terra Bella occupies a carefully adapted house in San Benito: original floors, regional plants and an inner garden that anchors the life of the hotel. You arrive as a guest and leave knowing the team by name.",
    "Trece habitaciones, un jardín, un comedor donde el desayuno se prepara al momento y un bar de barrio. Lo justo para que nada se sienta industrial.":
      "Thirteen rooms, one garden, a dining room where breakfast is made to order and a neighbourhood bar. Just enough so nothing feels industrial.",
    "Conoce la casa": "See the house",
    "Habitaciones": "Rooms",
    "Huéspedes al año": "Guests per year",
    "Reseñas verificadas": "Verified reviews",

    /* --- Home: secciones --- */
    "Tres maneras de estar aquí": "Three ways to be here",
    "El jardín y la terraza": "The garden and terrace",
    "El punto de encuentro de la casa, para el desayuno o una copa al final del día.":
      "The gathering point of the house, for breakfast or a drink at the end of the day.",
    "El desayuno": "Breakfast",
    "Fruta de temporada, pan del día y café de origen salvadoreño, cocinado al momento.":
      "Seasonal fruit, bread of the day and single-origin Salvadoran coffee, cooked to order.",
    "El barrio": "The neighbourhood",
    "Museos, galerías y restaurantes de San Benito, a pie desde la puerta.":
      "Museums, galleries and restaurants of San Benito, on foot from the door.",

    "Tu habitación en San Benito": "Your room in San Benito",
    "Trece habitaciones alrededor del jardín, todas distintas. Ropa de cama de algodón, aire acondicionado silencioso, Wi-Fi de fibra y desayuno incluido en la tarifa flexible. Precios de referencia por noche, sin impuestos.":
      "Thirteen rooms around the garden, each one different. Cotton bedding, quiet air conditioning, fibre Wi-Fi and breakfast included in the flexible rate. Reference prices per night, taxes not included.",
    "Ver detalle": "View details",
    "Desde": "From",
    "Ver todas las habitaciones": "View all rooms",
    "Ver la carta y los horarios": "View the menu and hours",
    "Explorar el barrio": "Explore the neighbourhood",
    "Ver todas las ofertas": "View all offers",
    "Cómo llegar": "Directions",

    /* --- Barra de reserva --- */
    "Entrada": "Check-in",
    "Salida": "Check-out",
    "Huéspedes": "Guests",
    "2 adultos · 0 niños · 1 habitación": "2 adults · 0 children · 1 room",
    "Adultos": "Adults",
    "Niños": "Children",
    "Código / Tarifa": "Code / Rate",
    "Código promocional": "Promo code",
    "Opcional": "Optional",
    "Consultar": "Search",
    "Buscar disponibilidad": "Search availability",
    "2 adultos · 1 habitación": "2 adults · 1 room",
    "1 adulto · 1 habitación": "1 adult · 1 room",
    "2 adultos · 1 niño": "2 adults · 1 child",
    "2 adultos · 2 niños": "2 adults · 2 children",
    "4 adultos · 2 habitaciones": "4 adults · 2 rooms",

    /* --- Reserva directa / ventajas --- */
    "Reserva directa · desayuno incluido, sin comisiones y cancelación flexible.":
      "Book direct · breakfast included, no commissions and flexible cancellation.",
    "Ver ventajas": "See the benefits",
    "Cerrar aviso": "Close notice",
    "Reserva por WhatsApp": "Book via WhatsApp",
    "Escribir por WhatsApp": "Message us on WhatsApp",
    "Reserva directo con la casa": "Book direct with the house",
    "Lo que obtienes al reservar en este sitio y no en una agencia de viajes.":
      "What you get by booking on this site and not through a travel agency.",
    "Mejor precio garantizado": "Best price guaranteed",
    "Si encuentras una tarifa pública más baja, la igualamos.": "If you find a lower public rate, we match it.",
    "Desayuno incluido": "Breakfast included",
    "Cocinado al momento, en el comedor del jardín o en tu habitación.":
      "Cooked to order, in the garden dining room or in your room.",
    "Sin comisiones": "No commissions",
    "Pagas la tarifa de la casa, sin recargos de intermediarios.":
      "You pay the house rate, with no middleman surcharges.",
    "Cancelación flexible": "Flexible cancellation",
    "La tarifa flexible se cancela sin cargo hasta 48 h antes de llegar.":
      "The flexible rate can be cancelled free of charge up to 48 h before arrival.",
    "Salida tardía": "Late check-out",
    "Hasta las 14:00 sin costo cuando hay disponibilidad.": "Until 2:00 p.m. at no charge when available.",
    "Parqueo sin costo": "Free parking",
    "Estacionamiento privado dentro de la propiedad, mientras haya espacio.":
      "Private on-site parking, subject to availability.",
    "Comprobar disponibilidad": "Check availability",

    /* --- Confianza / reseñas --- */
    "Lo que dicen los huéspedes": "What guests say",
    "\"La ubicación es perfecta: se camina a los museos y a los mejores restaurantes. El desayuno, espectacular.\"":
      "\"The location is perfect: you can walk to the museums and the best restaurants. The breakfast, spectacular.\"",
    "Viaje de trabajo · Ciudad de Panamá": "Business trip · Panama City",
    "\"Un oasis silencioso. El jardín por la mañana con un café es lo que recordamos del viaje.\"":
      "\"A silent oasis. The garden in the morning with a coffee is what we remember from the trip.\"",
    "Fin de semana · San Salvador": "Weekend · San Salvador",
    "\"El equipo nos ayudó con todo: taxis, reservas, la ruta de las flores. Como quedarte con amigos.\"":
      "\"The team helped us with everything: taxis, reservations, the Ruta de las Flores. Like staying with friends.\"",
    "Primera visita a El Salvador": "First visit to El Salvador",

    /* --- FAQ --- */
    "Preguntas frecuentes": "Frequently asked questions",
    "¿A qué hora es el check-in y el check-out?": "What are the check-in and check-out times?",
    "Check-in a partir de las 3:00 p. m. y check-out hasta las 12:00 m. d. Si llegas antes, guardamos tu equipaje sin problema y puedes usar el jardín.":
      "Check-in from 3:00 p.m. and check-out until 12:00 noon. If you arrive earlier, we'll store your luggage and you can use the garden.",
    "¿El desayuno está incluido?": "Is breakfast included?",
    "Sí, en la tarifa flexible y en la mayoría de paquetes. Se cocina al momento entre las 6:30 y las 10:30 en el comedor del jardín.":
      "Yes, in the flexible rate and most packages. It's cooked to order between 6:30 and 10:30 in the garden dining room.",
    "¿Hay estacionamiento?": "Is there parking?",
    "Sí, estacionamiento privado dentro de la propiedad sin costo, sujeto al espacio disponible. Avísanos si llegas en auto.":
      "Yes, free private parking on the property, subject to available space. Let us know if you're arriving by car.",
    "¿Se puede llegar caminando a los museos?": "Can you walk to the museums?",
    "Sí. El MUNA está a 3 minutos a pie y el Museo de Arte (MARTE) a 6. La Zona Rosa y sus restaurantes quedan a 10 minutos caminando.":
      "Yes. The MUNA is a 3-minute walk and the Art Museum (MARTE) is 6. Zona Rosa and its restaurants are a 10-minute walk.",
    "¿Aceptan mascotas?": "Do you accept pets?",
    "Aceptamos perros de hasta 12 kg en dos habitaciones designadas, con aviso previo y un cargo de limpieza.":
      "We accept dogs up to 12 kg in two designated rooms, with prior notice and a cleaning fee.",
    "¿Organizan tours y traslados?": "Do you arrange tours and transfers?",
    "Sí. La recepción coordina traslados al aeropuerto, guías y excursiones a la Ruta de las Flores, los volcanes y la costa. Pídelo al reservar o a tu llegada.":
      "Yes. The front desk arranges airport transfers, guides and excursions to the Ruta de las Flores, the volcanoes and the coast. Ask when booking or on arrival.",

    /* --- CTA --- */
    "Tu estancia empieza aquí": "Your stay begins here",
    "Mejor tarifa garantizada, desayuno incluido y un equipo que te atiende por tu nombre.":
      "Best rate guaranteed, breakfast included and a team that greets you by name.",

    /* --- Footer --- */
    "Avenida La Revolución #175, Colonia San Benito, San Salvador, El Salvador.":
      "Avenida La Revolución #175, Colonia San Benito, San Salvador, El Salvador.",
    "Hotel": "Hotel",
    "Reservas": "Reservations",
    "Reservar en línea": "Book online",
    "Recepción:": "Front desk:",
    "WhatsApp:": "WhatsApp:",
    "Boletín": "Newsletter",
    "Suscríbete y recibe un 10 % de descuento en tu primera reserva directa.":
      "Subscribe and get 10% off your first direct booking.",
    "Tu correo electrónico": "Your email address",
    "Suscribirme": "Subscribe",
    "Terra Bella Hotel Boutique · San Salvador. Sitio de demostración.":
      "Terra Bella Hotel Boutique · San Salvador. Demonstration site.",
    "Privacidad": "Privacy",
    "Términos": "Terms",
    "Contacto": "Contact",

    /* --- Páginas interiores: encabezados comunes --- */
    "Nuestras habitaciones": "Our rooms",
    "Restaurante y bar": "Restaurant & bar",
    "El barrio y El Salvador": "The neighbourhood and El Salvador",
    "Ofertas y paquetes": "Offers and packages",
    "Ubicación y contacto": "Location and contact",
    "Reserva tu estancia": "Book your stay",

    /* --- Habitaciones --- */
    "Trece habitaciones alrededor del jardín. Elige por vista, cama y espacio; todas comparten el mismo estándar de descanso y el desayuno incluido en la tarifa flexible.":
      "Thirteen rooms around the garden. Choose by view, bed and space; they all share the same standard of rest and breakfast included in the flexible rate.",
    "Comparar todas las habitaciones": "Compare all rooms",
    "Ocultar comparación": "Hide comparison",
    "Desde (USD / noche)": "From (USD / night)",
    "Superficie": "Size",
    "Cama": "Bed",
    "Capacidad": "Capacity",
    "Vista": "View",
    "Terraza privada": "Private terrace",
    "Ver": "View",
    "Reservar esta habitación": "Book this room",
    "Lo que incluye": "What's included",

    /* --- Restaurante --- */
    "Comedor del Jardín": "Garden Dining Room",
    "Bar Revolución": "Bar Revolución",
    "El desayuno se cocina al momento; la cena es corta y de temporada. El bar abre al jardín desde las cuatro de la tarde.":
      "Breakfast is cooked to order; dinner is short and seasonal. The bar opens onto the garden from four in the afternoon.",
    "Horarios": "Hours",
    "Desayuno": "Breakfast",
    "Cena ligera": "Light dinner",
    "Bar": "Bar",
    "Una carta corta, productos locales": "A short menu, local produce",
    "Trabajamos con lo que hay en temporada y con productores salvadoreños. La carta cambia cada pocas semanas; esto es una muestra.":
      "We work with what's in season and with Salvadoran producers. The menu changes every few weeks; this is a sample.",

    /* --- Experiencias --- */
    "El Salvador cabe en un fin de semana": "El Salvador fits into a weekend",
    "Playas de surf por la mañana, un volcán y un lago de cráter por la tarde, pueblos de café al día siguiente. Desde San Benito, todo queda a menos de dos horas.":
      "Surf beaches in the morning, a volcano and a crater lake in the afternoon, coffee towns the next day. From San Benito, everything is under two hours away.",
    "A pie desde el hotel": "On foot from the hotel",
    "Naturaleza y aventura": "Nature and adventure",
    "Cultura y pueblos": "Culture and towns",
    "La recepción organiza traslados, guías y reservas para cada plan. Cuéntanos qué te interesa al reservar o cuando llegues.":
      "The front desk arranges transfers, guides and reservations for every plan. Tell us what you're interested in when booking or when you arrive.",
    "Museo Nacional de Antropología (MUNA)": "National Museum of Anthropology (MUNA)",
    "Museo de Arte de El Salvador (MARTE)": "El Salvador Art Museum (MARTE)",
    "Zona Rosa y San Benito": "Zona Rosa and San Benito",
    "Paseo El Carmen, Santa Tecla": "Paseo El Carmen, Santa Tecla",
    "Surf City: El Tunco y El Zonte": "Surf City: El Tunco and El Zonte",
    "Volcán de Santa Ana y Lago de Coatepeque": "Santa Ana Volcano and Lake Coatepeque",
    "Parque Nacional El Boquerón": "El Boquerón National Park",
    "Ruta de las Flores": "Ruta de las Flores",
    "Suchitoto": "Suchitoto",
    "Joya de Cerén, Patrimonio de la Humanidad": "Joya de Cerén, a World Heritage Site",
    "Ruta del Café": "The Coffee Route",
    "Centro histórico de San Salvador": "Historic centre of San Salvador",
    "Arma tu itinerario con nosotros": "Plan your itinerary with us",
    "Escríbenos y preparamos traslados, guías y reservas antes de que llegues.":
      "Write to us and we'll arrange transfers, guides and reservations before you arrive.",
    "Escribir a recepción": "Contact the front desk",

    /* --- Ofertas --- */
    "Tarifas y paquetes con la mejor condición al reservar directo. Los precios son de referencia, por noche y sin impuestos.":
      "Rates and packages with the best terms when you book direct. Prices are for reference, per night and without taxes.",
    "Reservar": "Book",

    /* --- Ubicación --- */
    "En el barrio de los museos, a diez minutos de todo. Aquí tienes cómo llegar y cómo contactarnos.":
      "In the museum district, ten minutes from everything. Here's how to get here and how to reach us.",
    "Dirección": "Address",
    "Coordenadas": "Coordinates",
    "Teléfono": "Phone",
    "Correo": "Email",
    "Check-in": "Check-in",
    "Cómo llegar en auto": "Driving directions",
    "Abrir en Waze": "Open in Waze",
    "A pie": "On foot",
    "En auto": "By car",
    "Museo Nacional de Antropología — 3 min": "National Museum of Anthropology — 3 min",
    "Museo de Arte (MARTE) — 6 min": "Art Museum (MARTE) — 6 min",
    "Zona Rosa y sus restaurantes — 10 min": "Zona Rosa and its restaurants — 10 min",
    "Aeropuerto Internacional (SAL) — 45 min": "International Airport (SAL) — 45 min",
    "Volcán de San Salvador (El Boquerón) — 35 min": "San Salvador Volcano (El Boquerón) — 35 min",
    "Escríbenos": "Write to us",
    "Para grupos, eventos pequeños y prensa. Para reservar, usa el ":
      "For groups, small events and press. To book, use the ",
    "motor en línea": "online booking engine",
    "Nombre": "Name",
    "Mensaje": "Message",
    "Enviar mensaje": "Send message",

    /* --- Motor de reservas --- */
    "Fechas y huéspedes": "Dates and guests",
    "Elegir habitación": "Choose room",
    "Elige tu habitación": "Choose your room",
    "Personaliza tu estancia": "Customise your stay",
    "Datos del huésped": "Guest details",
    "Revisar y confirmar": "Review and confirm",
    "Continuar": "Continue",
    "Volver": "Back",
    "Fechas": "Dates",
    "Habitación": "Room",
    "Extras": "Extras",
    "Datos": "Details",
    "Confirmación": "Confirmation",
    "Tu estancia": "Your stay",
    "Noches": "Nights",
    "Impuestos (IVA 13 %)": "Taxes (13% VAT)",
    "Total estimado": "Estimated total",
    "Mejor tarifa garantizada al reservar directo. Precios en USD; el IVA se calcula en el paso final.":
      "Best rate guaranteed when booking direct. Prices in USD; VAT is calculated in the final step.",
    "Apellido": "Last name",
    "Correo electrónico": "Email",
    "País de residencia": "Country of residence",
    "Hora estimada de llegada": "Estimated arrival time",
    "Selecciona…": "Select…",
    "Solicitudes especiales": "Special requests",
    "Habitación al jardín, celebración, alergias…": "Garden-facing room, celebration, allergies…",
    "No se requiere pago ahora. La reserva se garantiza con tus datos de contacto y se liquida en el hotel al hacer el check-in. Aplica la política de cancelación de la tarifa elegida.":
      "No payment required now. The booking is guaranteed with your contact details and settled at the hotel at check-in. The cancellation policy of the chosen rate applies.",
    "Reserva confirmada": "Booking confirmed",
    "Código de reserva": "Booking code",
    "Huésped": "Guest",
    "Tarifa": "Rate",
    "Volver al inicio": "Back to home",
    "Nueva reserva": "New booking",
    "Elige fechas, habitación y extras. No se procesa ningún pago: es una maqueta de demostración.":
      "Choose dates, room and extras. No payment is processed: this is a demonstration mock-up.",
    "Precio indicativo por noche, desde. Toca un día para fijar la entrada.":
      "Indicative price per night, from. Tap a day to set the check-in date.",
    "Mes anterior": "Previous month",
    "Mes siguiente": "Next month",

    /* --- Tarifas (rateTypes / addons visibles en el motor) --- */
    "Tarifa Flexible": "Flexible Rate",
    "Tarifa Amanecer": "Sunrise Rate",
    "Media Pensión": "Half Board",
    "Cancelación gratuita hasta 48 h antes · desayuno incluido": "Free cancellation up to 48 h before · breakfast included",
    "No reembolsable · ahorra 15 %": "Non-refundable · save 15%",
    "Desayuno y cena ligera en el Comedor del Jardín": "Breakfast and light dinner in the Garden Dining Room",
    "Traslado aeropuerto (ida)": "Airport transfer (one way)",
    "Sedán privado · SAL": "Private sedan · SAL",
    "Desayuno en la habitación": "Breakfast in your room",
    "Por persona, por día": "Per person, per day",
    "Botella de vino de bienvenida": "Welcome bottle of wine",
    "Tinto o blanco, a elección": "Red or white, your choice",
    "Tour Ruta de las Flores": "Ruta de las Flores tour",
    "Día completo con guía · por persona": "Full day with guide · per person",
    "Salida tardía 16:00": "Late check-out 4:00 p.m.",
    "Sujeta a disponibilidad": "Subject to availability"
  };

  var DICTS = { en: EN };
  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };

  function collectTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  var applying = false;

  function translateNode(n, dict) {
    if (n.__i18nBase === undefined) n.__i18nBase = n.nodeValue;
    var base = n.__i18nBase;
    var key = norm(base);
    if (!dict) { if (n.nodeValue !== base) n.nodeValue = base; return; }
    var t = dict[key];
    if (t == null) return;
    var lead = base.match(/^\s*/)[0];
    var trail = base.match(/\s*$/)[0];
    var next = lead + t + trail;
    if (n.nodeValue !== next) n.nodeValue = next;
  }

  function translateAttrs(dict) {
    var sel = "[placeholder], [aria-label], [title]";
    document.querySelectorAll(sel).forEach(function (el) {
      ["placeholder", "aria-label", "title"].forEach(function (attr) {
        if (!el.hasAttribute(attr)) return;
        var store = "__i18n_" + attr;
        if (el[store] === undefined) el[store] = el.getAttribute(attr);
        var base = el[store];
        var t = dict ? dict[norm(base)] : null;
        el.setAttribute(attr, t != null ? t : base);
      });
    });
  }

  function apply(lang) {
    var dict = DICTS[lang] || null;
    applying = true;
    try {
      collectTextNodes(document.body).forEach(function (n) { translateNode(n, dict); });
      translateAttrs(dict);
      if (!document.__i18nTitle) document.__i18nTitle = document.title;
      document.title = document.__i18nTitle.split(" · ").map(function (seg) {
        var k = norm(seg);
        return (dict && dict[k] != null) ? dict[k] : seg;
      }).join(" · ");
      document.documentElement.lang = lang;
    } finally { applying = false; }
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    window.TB_LANG = lang;
  }

  function currentLang() {
    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved && LANGS[saved]) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS[nav] ? nav : "es";
  }

  function buildSwitcher() {
    if (document.querySelector(".lang")) return;
    var nav = document.querySelector(".nav");
    if (!nav) return;
    var wrap = document.createElement("div");
    wrap.className = "lang";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Idioma");
    Object.keys(LANGS).forEach(function (code) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = LANGS[code];
      b.setAttribute("data-lang", code);
      b.setAttribute("lang", code);
      b.addEventListener("click", function () { apply(code); });
      wrap.appendChild(b);
    });
    var cta = nav.querySelector(".nav__cta");
    nav.insertBefore(wrap, cta || null);
  }

  function watchDynamic() {
    if (!("MutationObserver" in window)) return;
    var pending = null;
    var mo = new MutationObserver(function (muts) {
      if (applying) return;
      var relevant = muts.some(function (m) { return m.addedNodes && m.addedNodes.length; });
      if (!relevant) return;
      clearTimeout(pending);
      pending = setTimeout(function () { apply(window.TB_LANG || "es"); }, 40);
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    buildSwitcher();
    apply(currentLang());
    watchDynamic();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
