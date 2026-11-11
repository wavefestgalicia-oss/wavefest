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
  if (lista) {
    get(LINEUP_CSV).then(function (rows) {
      rows = rows.filter(function (o) { return o.nombre || o.estado; });
      if (!rows.length) return;
      var ok = rows.filter(function (o) { return norm(o.estado).indexOf('confirm') === 0 && o.nombre; });
      var pend = rows.length - ok.length;
      lista.innerHTML = ok.map(function (o) { return '<li>' + esc(o.nombre) + '</li>'; }).join('') +
        (pend > 0 ? '<li class="more">+' + pend + ' por anunciar</li>' : '');
    }).catch(function () {});
  }

  var filas = document.querySelectorAll('tr[data-entrada]');
  var tramo = document.getElementById('tramo-actual');
  if (filas.length || tramo) {
    get(TICKETS_CSV).then(function (rows) {
      filas.forEach(function (tr) {
        var r = rows.filter(function (o) { return norm(o.entrada) === norm(tr.getAttribute('data-entrada')); })[0];
        var cel = tr.querySelector('.precio');
        if (!r || !cel) return;
        if (/agotad/.test(norm(r.estado))) { cel.textContent = GL ? 'Esgotada' : 'Agotada'; return; }
        var p = String(r.precio || '').replace(/\s/g, '');
        if (p) cel.textContent = /€/.test(p) ? p.replace('€', ' €') : p + ' €';
      });
      var t = rows.filter(function (o) { return norm(o.entrada) === 'tramo'; })[0];
      if (tramo && t) {
        var n = String(t.precio || '').trim();
        if (!n || n === '0') tramo.style.display = 'none';
        else tramo.innerHTML = GL ? '<strong>Agora: tramo ' + esc(n) + '.</strong> O prezo sobe no seguinte tramo.'
          : '<strong>Ahora: tramo ' + esc(n) + '.</strong> ' + esc(t.estado || 'El precio sube en el siguiente tramo.');
      }
    }).catch(function () {});
  }
})();
