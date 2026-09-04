/* Service worker — caché básico para carga instantánea y uso sin conexión.
   Estrategia: "stale-while-revalidate" para todo lo del mismo origen. */
var CACHE = "terrabella-v1";
var CORE = [
  "index.html", "habitaciones.html", "restaurante.html", "experiencias.html",
  "ofertas.html", "ubicacion.html", "reservar.html", "privacidad.html",
  "assets/css/styles.css",
  "assets/js/data.js", "assets/js/partials.js", "assets/js/main.js",
  "assets/js/booking.js", "assets/js/i18n.js",
  "favicon.svg", "manifest.json"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(CORE).catch(function () {}); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return; // no interceptar Google Maps/Fonts
  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req).then(function (cached) {
        var network = fetch(req).then(function (res) {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
