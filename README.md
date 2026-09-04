# Terra Bella Hotel Boutique — sitio web (maqueta)

Sitio de demostración para **Terra Bella Hotel Boutique**, Colonia San Benito, San Salvador.
HTML, CSS y JavaScript *vanilla*. Sin framework, sin paso de compilación, sin dependencias.

## Cómo verlo

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python -m http.server 4321
```

Y entra a `http://localhost:4321`.

## Estructura

```
index.html            Portada
habitaciones.html     Las 5 categorías + tabla comparativa
restaurante.html      Comedor del Jardín y Bar Revolución
experiencias.html     El barrio a pie + El Salvador a menos de 2 h
ofertas.html          Paquetes y tarifas
ubicacion.html        Mapa, distancias y formulario de contacto
reservar.html         Motor de reservas (maqueta, 5 pasos)
privacidad.html       Aviso de privacidad y términos
assets/css/styles.css Sistema de diseño (tokens, componentes)
assets/js/
  data.js             Datos del hotel: habitaciones, tarifas, ofertas, extras
  partials.js          Footer, barra de anuncio, barra fija de reserva, WhatsApp
  main.js              Interacciones (scroll, menú, reveal, lightbox, FAQ, comparador)
  booking.js           Motor de reservas
  i18n.js              Traducción cliente ES ⇄ EN
manifest.json / sw.js  PWA: instalable y con carga sin conexión
```

## Identidad

- **Color:** arena cálida de fondo, tarjetas de marfil, dos acentos —arcilla (`#a9542f`, acción) y olivo (`#5c5f3c`, secciones profundas)—, dorado tostado para detalles.
- **Tipografía:** Spectral (serif de titulares) + Hanken Grotesk (texto e interfaz), ambas de Google Fonts.
- **Movimiento:** una sola animación de entrada al hacer scroll; hover con elevación y barrido de luz en botones; todo respeta `prefers-reduced-motion`.

## Funcionalidades

- Motor de reservas de 5 pasos con calendario de precios indicativos, extras y cálculo de IVA. **No procesa pagos.**
- Selector de idioma **ES / EN** (traducción por texto, sin recarga; recuerda la preferencia).
- Barra de reserva fija que aparece al hacer scroll en todas las páginas.
- PWA instalable con service worker (carga instantánea / offline).
- Botón flotante de WhatsApp y barra de reserva móvil.
- Tabla comparativa de habitaciones, acordeón de preguntas frecuentes, galería con lightbox.
- Datos estructurados (`Hotel`, `FAQPage`) y Open Graph para compartir.

## Antes de publicarlo como sitio oficial

- **Imágenes:** las de `assets/img/hotel/` son **provisionales** (bloques de color etiquetados). Sustituir por fotografía real del hotel: fachada, jardín, terraza, cada categoría de habitación, comedor y bar.
- **Datos a confirmar con el hotel:** número exacto de habitaciones (la maqueta usa 13), nombres y conceptos del restaurante y el bar (aquí "Comedor del Jardín" y "Bar Revolución" son propuestas), tarifas, horarios, política de mascotas, coordenadas exactas del mapa, teléfono y correo.
- **Reseñas y calificación** de la portada son de ejemplo.
- El **calendario de precios** del motor de reservas se calcula (temporada / fin de semana); no refleja disponibilidad real.
- Falta un **aviso de cookies** solo si se añade analítica o píxeles de terceros (ahora no hay ninguno).
- Los formularios (contacto, boletín, reserva) **no envían nada**: conectar a un backend o a un servicio de correo.
