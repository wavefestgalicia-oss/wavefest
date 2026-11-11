/* WAVE FEST · Estadísticas propias sin cookies
 * Apunta cada visita y los clics importantes en la pestaña "Visitas" de la hoja
 * "Registros WAVE FEST" (mismo script de Google que el registro de emails).
 * No usa cookies ni guarda datos que identifiquen a nadie.
 * Para medir un botón nuevo, añádele el atributo  data-track="nombre-del-boton"
 */
(function () {
  'use strict';
  var URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbylc_k_yiAn8R8uzJP_0viiNqW5fX-utcN2GO_gQaJL8ykqcYGQFZiQr3rTkzbydP4v/exec';
  var ua = navigator.userAgent || '';
  if (navigator.webdriver || /bot|crawl|spider|slurp|lighthouse|preview|headless/i.test(ua)) return;
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;

  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }
  var qs = new URLSearchParams(location.search);
  var ref = document.referrer && host(document.referrer) !== location.hostname ? host(document.referrer) : '';
  var origen = qs.get('utm_source') || (function () {
    if (!ref) return 'directo';
    if (/instagram/.test(ref)) return 'instagram';
    if (/tiktok/.test(ref)) return 'tiktok';
    if (/facebook|fb\./.test(ref)) return 'facebook';
    if (/google\./.test(ref)) return 'google';
    if (/bing\.|duckduckgo|yahoo/.test(ref)) return 'buscador';
    if (/whatsapp|wa\.me/.test(ref)) return 'whatsapp';
    if (/t\.co|twitter|x\.com/.test(ref)) return 'x';
    if (/youtube/.test(ref)) return 'youtube';
    return ref;
  })();
  var dispositivo = /Mobi|Android|iPhone/i.test(ua) ? 'móvil' : (/iPad|Tablet/i.test(ua) ? 'tablet' : 'ordenador');

  function send(accion, evento) {
    try {
      var fd = new FormData();
      fd.append('tipo', 'visita');
      fd.append('accion', accion);
      fd.append('evento', evento || '');
      fd.append('pagina', location.pathname.replace(/^\/wavefest/, '') || '/');
      fd.append('origen', origen);
      fd.append('referencia', ref);
      fd.append('campana', qs.get('utm_campaign') || '');
      fd.append('idioma', (document.documentElement.lang || '') + ' / ' + (navigator.language || ''));
      fd.append('dispositivo', dispositivo);
      fd.append('web', location.hostname);
      if (navigator.sendBeacon && navigator.sendBeacon(URL_SCRIPT, fd)) return;
      fetch(URL_SCRIPT, { method: 'POST', mode: 'no-cors', body: fd, keepalive: true });
    } catch (e) {}
  }

  send('visita', '');
  window.waveTrack = function (evento) { send('clic', evento); };

  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-track], a[href$="#entradas"]');
    if (!el) return;
    var name = el.getAttribute('data-track');
    if (!name) name = 'comprar-' + ((el.closest('header') && 'menu') || (el.closest('.sticky-buy') && 'barra-movil') || (el.closest('.hero') && 'portada') || (el.closest('main') && 'pagina') || 'otro');
    send('clic', name);
  }, true);
})();
