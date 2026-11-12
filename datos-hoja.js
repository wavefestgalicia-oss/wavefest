/* WAVE FEST · Datos de la hoja de Google en las páginas de Artistas y Entradas
 * Lee las mismas pestañas que la portada ("cartel" y "entradas"). Si la hoja no carga,
 * se queda el texto que ya trae la página.
 */
(function () {
  'use strict';
  var LINEUP_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdODD2SlTcJr78gKTbij1H4oN48Dhrkqtb7faC75i_O6GuuIao2Pl82JunSTTJzq9-mnCD03XGmVN6/pub?gid=935534751&single=true&output=csv';
  var TICKETS_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdODD2SlTcJr78gKTbij1H4oN48Dhrkqtb7faC75i_O6GuuIao2Pl82JunSTTJzq9-mnCD03XGmVN6/pub?gid=703769537&single=true&output=csv';

  function parseCSV(t) {
    var rows = [], row = [], f = '', q = false;
    for (var i = 0; i < t.length; i++) {
      var c = t[i];
      if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
      else if (c === '"') q = true;
      else if (c === ',') { row.push(f); f = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
      else f += c;
    }
    if (f || row.length) { row.push(f); rows.push(row); }
    var h = (rows.shift() || []).map(function (x) { return norm(x); });
    return rows.map(function (r) { var o = {}; h.forEach(function (k, i) { o[k] = (r[i] || '').trim(); }); return o; });
  }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); }
  function get(url) { return fetch(url, { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(parseCSV); }
  var GL = document.documentElement.lang === 'gl';
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var lista = document.getElementById('lista-artistas');
  // Fotos que ya están en la web (si la hoja no trae foto)
  var FOTOS = { 'collazo': 'img/artista-collazo.webp', '9collazo9': 'img/artista-collazo.webp', 'jesus gamez dj': 'img/artista-jesus-gamez.webp', 'diego maquieira': 'img/artista-diego-maquieira.webp' };
  var BASE = (document.querySelector('script[src$="datos-hoja.js"]') || {}).getAttribute ? document.querySelector('script[src$="datos-hoja.js"]').getAttribute('src').replace('datos-hoja.js', '') : '../';
  function foto(o) {
    var u = String(o.foto || '').trim(), m = u.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]+)/);
    if (m) return 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w640';
    if (/^https?:\/\//.test(u)) return u;
    if (/^img\//.test(u)) return BASE + u;
    var f = FOTOS[norm(o.nombre)]; return f ? BASE + f : '';
  }
  if (lista) {
    get(LINEUP_CSV).then(function (rows) {
      rows = rows.filter(function (o) { return o.nombre || o.estado; });
      if (!rows.length) return;
      var ok = rows.filter(function (o) { return norm(o.estado).indexOf('confirm') === 0 && o.nombre; });
      var pend = rows.length - ok.length;
      var more = lista.querySelector('.more'), href = more ? more.getAttribute('href') : '../#registro';
      lista.innerHTML = ok.map(function (o, i) {
        var f = foto(o), ini = o.nombre.split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase();
        var media = f ? '<img src="' + esc(f) + '" alt="' + esc(o.nombre) + ' en WAVE FEST Galicia 2027" loading="lazy">' : '<span class="ph">' + esc(ini) + '</span>';
        var ig = /^https:\/\/(www\.)?instagram\.com\//.test(o.instagram || '') ? o.instagram : '';
        var tag = ig ? 'a' : 'div', at = ig ? ' href="' + esc(ig) + '" target="_blank" rel="noopener"' : '';
        return '<' + tag + ' class="acard"' + at + ' style="--d:' + (i * 0.06).toFixed(2) + 's">' + media + '<span class="an">' + esc(o.nombre) + '</span><span class="st">Confirmado</span></' + tag + '>';
      }).join('') + (pend > 0 ? '<a class="acard more" href="' + esc(href) + '"><b>+' + pend + '</b><span>por anunciar</span></a>' : '');
    }).catch(function () {});
  }

  var filas = document.querySelectorAll('[data-entrada]');
  var tramo = document.getElementById('tramo-actual');
  if (filas.length || tramo) {
    get(TICKETS_CSV).then(function (rows) {
      filas.forEach(function (tr) {
        var r = rows.filter(function (o) { return norm(o.entrada) === norm(tr.getAttribute('data-entrada')); })[0];
        var cel = tr.querySelector('.precio');
        if (!r || !cel) return;
        if (/agotad/.test(norm(r.estado))) { cel.textContent = GL ? 'Esgotada' : 'Agotada'; var q = tr.querySelector('.pp'); if (q) q.style.display = 'none'; return; }
        var p = String(r.precio || '').replace(/\s/g, '');
        if (p) cel.textContent = /€/.test(p) ? p.replace('€', ' €') : p + ' €';
        var pp = tr.querySelector('.pp'), num = parseFloat(p.replace(',', '.'));
        if (pp && num) { var x = num / 4; pp.innerHTML = (GL ? 'Sae a ' : 'Sale a ') + '<b>' + (x % 1 ? x.toFixed(2).replace('.', ',') : x) + ' €</b> ' + (GL ? 'por persoa' : 'por persona'); }
      });
      var t = rows.filter(function (o) { return norm(o.entrada) === 'tramo'; })[0];
      if (t) {
        var nn = String(t.precio || '').trim();
        if (nn && nn !== '0') document.querySelectorAll('[data-entrada] .tier').forEach(function (el) { el.textContent = (GL ? 'Prezo tramo ' : 'Precio tramo ') + nn; });
      }
      if (tramo && t) {
        var n = String(t.precio || '').trim();
        if (!n || n === '0') tramo.style.display = 'none';
        else tramo.innerHTML = GL ? '<strong>Agora: tramo ' + esc(n) + '.</strong> O prezo sobe no seguinte tramo.'
          : '<strong>Ahora: tramo ' + esc(n) + '.</strong> ' + esc(t.estado || 'El precio sube en el siguiente tramo.');
      }
    }).catch(function () {});
  }
})();
