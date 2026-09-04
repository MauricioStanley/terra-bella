/* ============================================================
   Datos del hotel — Terra Bella Hotel Boutique, San Salvador
   Maqueta de demostración. Los precios son de referencia en
   USD y alimentan el motor de reservas; la disponibilidad y
   las tarifas reales se confirman con el hotel.
   ============================================================ */

window.TB_DATA = {
  hotel: {
    name: "Terra Bella Hotel Boutique",
    shortName: "Terra Bella",
    tagline: "Un jardín en medio de la ciudad",
    address: "Avenida La Revolución #175, Colonia San Benito, San Salvador, El Salvador",
    coords: { lat: 13.69749, lng: -89.24177 },
    phone: "+503 2133 6900",
    whatsapp: "50321336900",
    email: "reservas@terrabellahotel.com",
    checkIn: "3:00 p. m.",
    checkOut: "12:00 m. d.",
    rooms: 13,
    rating: 4.7,
    reviews: 384,
    taxRate: 0.13,      // IVA
    tourismFee: 0,      // el boutique no aplica tasa por noche
  },

  rooms: [
    {
      id: "jardin",
      name: "Habitación Jardín",
      from: 84,
      size: "22 m²",
      occupancy: "2 huéspedes",
      bed: "1 Queen",
      view: "Jardín interior",
      img: "assets/img/hotel/room-garden.jpg",
      gallery: ["assets/img/hotel/room-garden.jpg", "assets/img/hotel/room-double.jpg", "assets/img/hotel/room-bath.jpg"],
      short: "La más tranquila de la casa: ventana al jardín, cama Queen y desayuno cocinado al momento.",
      desc: "Una habitación serena que da al jardín interior. Cama Queen con ropa de cama de algodón, escritorio, aire acondicionado silencioso y baño privado con amenidades naturales. El desayuno se prepara al momento y se sirve en el comedor del jardín.",
      amenities: ["Wi-Fi de fibra", "Aire acondicionado", "Escritorio", "Baño privado con ducha", "Amenidades naturales", "Caja de seguridad"],
    },
    {
      id: "superior",
      name: "Habitación Superior",
      from: 99,
      size: "26 m²",
      occupancy: "2 huéspedes",
      bed: "1 King",
      view: "Calle arbolada",
      img: "assets/img/hotel/room-superior.jpg",
      gallery: ["assets/img/hotel/room-superior.jpg", "assets/img/hotel/room-garden.jpg", "assets/img/hotel/room-bath.jpg"],
      short: "En el nivel alto, con más luz, cama King y un sillón para leer al final del día.",
      desc: "Ubicada en el segundo nivel, con más luz natural y vista a la calle arbolada de San Benito. Cama King, sillón de lectura, estación de trabajo y baño con ducha de lluvia. Ideal para el viajero que se queda varias noches.",
      amenities: ["Wi-Fi de fibra", "Cama King", "Sillón de lectura", "Ducha de lluvia", "Aire acondicionado", "Minibar"],
    },
    {
      id: "doble",
      name: "Habitación Doble",
      from: 95,
      size: "24 m²",
      occupancy: "2 huéspedes",
      bed: "2 individuales",
      view: "Jardín o calle",
      img: "assets/img/hotel/room-double.jpg",
      gallery: ["assets/img/hotel/room-double.jpg", "assets/img/hotel/room-garden.jpg", "assets/img/hotel/room-bath.jpg"],
      short: "Dos camas individuales para quienes viajan por trabajo o entre amigos.",
      desc: "Dos camas individuales de buen tamaño, pensada para colegas de viaje o amistades. Mismo estándar de ropa de cama, baño privado y desayuno cocinado al momento incluido en la tarifa.",
      amenities: ["Wi-Fi de fibra", "Dos camas individuales", "Aire acondicionado", "Baño privado", "Escritorio", "Caja de seguridad"],
    },
    {
      id: "familiar",
      name: "Habitación Familiar",
      from: 128,
      size: "32 m²",
      occupancy: "4 huéspedes",
      bed: "1 Queen + 1 sofá cama",
      view: "Jardín",
      img: "assets/img/hotel/room-family.jpg",
      gallery: ["assets/img/hotel/room-family.jpg", "assets/img/hotel/room-garden.jpg", "assets/img/hotel/room-bath.jpg"],
      short: "Espacio para cuatro, con cama Queen, sofá cama y cuna sin costo.",
      desc: "La habitación más amplia del primer nivel. Cama Queen, sofá cama para dos y espacio de guardado generoso. Cuna disponible sin costo y menú de desayuno para niños. A pasos del Museo de Arte y del parque del Bicentenario.",
      amenities: ["Wi-Fi de fibra", "Cama Queen + sofá cama", "Cuna sin costo", "Aire acondicionado", "Baño con tina", "Menú infantil en el desayuno"],
    },
    {
      id: "suite",
      name: "Suite Terra",
      from: 165,
      size: "40 m²",
      occupancy: "3 huéspedes",
      bed: "1 King + sala de estar",
      view: "Terraza privada al jardín",
      img: "assets/img/hotel/suite-terra.jpg",
      gallery: ["assets/img/hotel/suite-terra.jpg", "assets/img/hotel/terrace.jpg", "assets/img/hotel/room-bath.jpg"],
      short: "Dormitorio y sala separados, con terraza privada abierta al jardín.",
      desc: "Nuestra habitación insignia: dormitorio King, sala de estar independiente y una terraza privada de obra abierta al jardín, con desayuno servido allí si lo prefieres. Incluye botella de bienvenida y salida tardía sujeta a disponibilidad.",
      amenities: ["Wi-Fi de fibra", "Sala de estar independiente", "Terraza privada", "Botella de bienvenida", "Ducha de lluvia y tina", "Salida tardía sujeta a disponibilidad"],
    },
  ],

  /* Espacios de comida y bebida (concepto de la maqueta) */
  dining: [
    {
      id: "comedor",
      name: "Comedor del Jardín",
      kind: "Desayuno y cena ligera",
      hours: "Desayuno 6:30 – 10:30 · Cena ligera 18:30 – 22:00",
      img: "assets/img/hotel/breakfast.jpg",
      short: "Desayuno cocinado al momento con fruta de temporada, pan del día y café de origen salvadoreño.",
      desc: "El corazón social de la casa. Por la mañana, un desayuno a la carta —huevos al gusto, casamiento, plátano, fruta de temporada y pan horneado ese día—. Por la noche, una carta corta de platos ligeros y de temporada para no tener que salir.",
    },
    {
      id: "bar",
      name: "Bar Revolución",
      kind: "Coctelería de autor",
      hours: "Todos los días · 16:00 – 24:00",
      img: "assets/img/hotel/bar.jpg",
      short: "Cócteles con destilados de la región y una pequeña carta de vinos, en el jardín o bajo techo.",
      desc: "Un bar de barrio dentro del hotel. Clásicos bien hechos, cócteles de autor con aguardiente y ron salvadoreño, cervezas artesanales locales y vinos por copa. Se puede pedir en el jardín, en la terraza o en la sala.",
    },
  ],

  offers: [
    {
      id: "amanecer",
      name: "Tarifa Amanecer",
      img: "assets/img/hotel/room-superior.jpg",
      pitch: "Reserva con antelación y paga menos. La tarifa más baja disponible, no reembolsable.",
      perks: [
        "15 % de descuento sobre la tarifa flexible",
        "Desayuno cocinado al momento incluido",
        "Wi-Fi de fibra y parqueo sin costo",
      ],
      from: 71,
      unit: "por noche · impuestos no incluidos",
    },
    {
      id: "cama-desayuno",
      name: "Cama y Desayuno",
      img: "assets/img/hotel/breakfast.jpg",
      pitch: "La tarifa flexible de la casa: cancela sin cargo y empieza el día con un buen desayuno.",
      perks: [
        "Desayuno a la carta para dos",
        "Cancelación sin cargo hasta 48 h antes",
        "Salida tardía sujeta a disponibilidad",
      ],
      from: 84,
      unit: "por noche · impuestos no incluidos",
    },
    {
      id: "cultural",
      name: "Escapada Cultural",
      img: "assets/img/hotel/museum-muna.jpg",
      pitch: "Dos noches en el distrito de los museos, con entradas y un café de bienvenida.",
      perks: [
        "Entradas al MUNA y al Museo de Arte (MARTE)",
        "Café de bienvenida y mapa curado del barrio",
        "Estancia mínima de 2 noches",
      ],
      from: 89,
      unit: "por noche · mínimo 2 noches",
    },
    {
      id: "larga-estancia",
      name: "Larga Estancia",
      img: "assets/img/hotel/suite-terra.jpg",
      pitch: "A partir de la séptima noche, la casa se siente como propia y la tarifa baja.",
      perks: [
        "20 % de descuento desde la 7.ª noche",
        "Una lavandería de cortesía a la semana",
        "Escritorio ampliado y té e infusiones en la habitación",
      ],
      from: 68,
      unit: "por noche · estancias de 7+ noches",
    },
  ],

  /* Tipos de tarifa sobre el precio base de cada habitación */
  rateTypes: [
    { id: "flex", name: "Tarifa Flexible", note: "Cancelación gratuita hasta 48 h antes · desayuno incluido", factor: 1.0 },
    { id: "advance", name: "Tarifa Amanecer", note: "No reembolsable · ahorra 15 %", factor: 0.85 },
    { id: "media", name: "Media Pensión", note: "Desayuno y cena ligera en el Comedor del Jardín", factor: 1.2 },
  ],

  addons: [
    { id: "transfer", name: "Traslado aeropuerto (ida)", note: "Sedán privado · SAL", price: 40, per: "once" },
    { id: "roombreakfast", name: "Desayuno en la habitación", note: "Por persona, por día", price: 10, per: "pppn" },
    { id: "wine", name: "Botella de vino de bienvenida", note: "Tinto o blanco, a elección", price: 26, per: "once" },
    { id: "flores", name: "Tour Ruta de las Flores", note: "Día completo con guía · por persona", price: 62, per: "once" },
    { id: "late", name: "Salida tardía 16:00", note: "Sujeta a disponibilidad", price: 20, per: "once" },
  ],
};
