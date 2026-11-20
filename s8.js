/* «Армия спорта», восьмая страница — доработка финалистов по правкам клиента (20.11).
   Номера — клиентские, с его сводной картинки: 7 без изменений, 4 — острая вершина, 5 — в цвете, с ровной гранью и острой вершиной, и 5 «острее» — без грани, скругления выпрямлены.
   Вариант 1 живет отдельно, на пятой странице. Знаки собирает исходники-s3/gen8.py из компоновок шестой страницы (img/s8/*.svg; -d — с белой надписью для темного фона).
   Оформление — as.css и s6.css (сетка компоновок, общий масштаб --k), свое — s8.css. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = new URL(BASE + 'img/', document.baseURI).href;
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as', 's6', 's8');
  root.setAttribute('lang', 'ru');

  // ---------- типограф: короткие слова держатся за следующим, тире — за предыдущим ----------
  function nb(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    t = t.replace(/(^|[\s(«>])(без|для|про|под|над|при|обо|или|что|как|его|все|еще|уже|это|был|так)\s/gi, '$1$2 ');
    return t.replace(/\s—/g, ' —').replace(/\s(\S+)$/, ' $1');
  }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function T(t) { return esc(nb(t)); }

  // ширина каждой компоновки в единицах Фигмы — от нее считается размер на странице (надписи везде одного кегля)
  var W = {
    'v7-h': 2309, 'v7-st': 1278, 'v7-v': 851, 'v4-h': 2248, 'v4-st': 1289, 'v4-v': 851,
    'v5-h': 2110, 'v5-st': 1264, 'v5-v': 851, 'v5s-h': 2110, 'v5s-st': 1264, 'v5s-v': 851,
    'old4': 1333, 'old5': 1285
  };
  var IMGV = '?v=4';   // после пересборки знаков увеличить: браузер держит старые картинки в кеше
  var OLD = { old4: 's6/v1-st', old5: 's6/v2-st' };
  function pic(name, cls, cap) {
    var key = name.replace(/-d$/, ''), src = IMG + (OLD[key] || 's8/' + name) + '.svg' + (OLD[key] ? '' : IMGV);
    return '<figure class="' + (cls || '') + '"><img src="' + src + '" alt="" style="--w:' + W[key] + '" loading="lazy" decoding="async">' +
      (cap ? '<figcaption>' + T(cap) + '</figcaption>' : '') + '</figure>';
  }
  function full(k) { return [[k + '-h', 'wide'], [k + '-v'], [k + '-st-d', 'dark']]; }

  var V = [
    { id: 'v7', n: '7', nav: '7', t: 'только буква', p: ['Без изменений.'],
      set: [['v7-h', 'wide'], ['v7-st'], ['v7-v'], ['v7-st-d', 'dark wide']] },
    { id: 'v4', n: '4', nav: '4', t: 'буква А и звезда', p: ['Вершина теперь острая: края буквы продолжены до пересечения, срез убран.'],
      set: [['old4', 'was', 'было'], ['v4-st', '', 'стало']].concat(full('v4')) },
    { id: 'v5', n: '5', nav: '5', t: 'буква А и звезда, в цвете', p: ['Знак стал красно-синим: верх красный, нога синяя. Между ногой и остальной частью — ровная грань. Вершина острая, без скругления.'],
      set: [['old5', 'was', 'было'], ['v5-st', '', 'стало']].concat(full('v5')) },
    { id: 'v5s', n: '5', nav: '5 острее', t: 'тот же знак, острее', p: ['Красно-синий, с острой вершиной и без грани. Скругления выпрямлены: дуги стали прямыми линиями, верхние края лучей звезды — одна горизонталь, углы лучей одинаковые.'],
      set: [['old5', 'was', 'было'], ['v5s-st', '', 'стало']].concat(full('v5s')) }
  ];

  var h = [];
  var ICON_UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, финалисты</a><nav>' +
    V.map(function (v) { return '<a href="#' + v.id + '" aria-label="вариант ' + esc(v.nav) + ': ' + esc(v.t) + '">' + esc(v.nav) + '</a>'; }).join('') + '<a href="#sum">все</a></nav></div></header>');
  h.push('<button type="button" class="as-up-btn" aria-label="наверх">' + ICON_UP + '</button>');

  h.push('<section class="as-sec s8-intro" id="top" data-slide><div class="as-wrap"><div class="as-tx as-up"><h1 class="as-h2">доработка финалистов</h1>' +
    '<div><p class="as-p">' + T('Вариант 7 остается как был. Варианты 4 и 5 доработаны: острые вершины, пятый — в цвете и во второй версии с прямыми линиями.') + '</p>' +
    '<div class="s8-links"><a class="as-btn" href="https://armysport.pages.dev/5">вариант 1, знак со звездой</a>' +
    '<a class="as-btn" href="https://armysport.pages.dev/6">прошлые варианты</a></div></div></div></div></section>');

  V.forEach(function (v) {
    h.push('<section class="as-sec s6-var" id="' + v.id + '" data-slide><div class="as-wrap">' +
      '<div class="as-tx as-up"><h2 class="as-h2"><span class="n">' + v.n + '</span>' + esc(v.t) + '</h2><div>' +
      v.p.map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') + '</div></div>' +
      '<div class="s6-set as-up">' + v.set.map(function (s) { return pic(s[0], s[1], s[2]); }).join('') + '</div></div></section>');
  });

  // итог, как на сводной картинке клиента: каждый знак на белом и на темном
  h.push('<section class="as-sec s8-sum" id="sum" data-slide><div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">все варианты</h2></div>' +
    '<div class="s8-grid as-up">' + V.map(function (v) {
      var k = v.id + '-st';
      return '<a href="#' + v.id + '" aria-label="вариант ' + esc(v.nav) + ': ' + esc(v.t) + '">' +
        '<span class="cap">' + esc(v.nav) + '</span>' +
        '<span class="pic"><img src="' + IMG + 's8/' + k + '.svg' + IMGV + '" alt="" style="--w:' + W[k] + '" loading="lazy" decoding="async"></span>' +
        '<span class="pic dark"><img src="' + IMG + 's8/' + k + '-d.svg' + IMGV + '" alt="" style="--w:' + W[k] + '" loading="lazy" decoding="async"></span></a>';
    }).join('') + '</div></div></section>');
  h.push('<section class="as-thanks" data-slide><div class="as-wrap"><h2>спасибо<br>за просмотр</h2></div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><div class="in"><span>армия спорта, доработка финалистов</span></div></div></footer>');
  root.innerHTML = h.join('');

  // ====================================================================================
  var $$ = function (s) { return [].slice.call(root.querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // скелет уходит, когда готовы шрифты; дольше 6 с не держим
  (function () {
    var sk = document.getElementById('as-skel'); if (!sk) return;
    var done = false;
    function off() { if (done) return; done = true; sk.classList.add('off'); setTimeout(function () { sk.remove(); }, 600); }
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(off);
    setTimeout(off, 6000);
  })();

  // появление по ходу рассказа
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.as-up').forEach(function (el) { io.observe(el); });

  // шапка: текущий раздел; на черном «спасибо» — светлая
  var top = root.querySelector('.as-top'), links = $$('.as-top nav a'), darks = $$('.as-thanks'), upBtn = root.querySelector('.as-up-btn'),
    marks = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  function onScroll() {
    var cur = -1;
    marks.forEach(function (m, i) { if (m && m.getBoundingClientRect().top < innerHeight * .45) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    var light = false;
    darks.forEach(function (d) { var r = d.getBoundingClientRect(); if (r.top <= 32 && r.bottom > 32) light = true; });
    top.classList.toggle('light', light);
    var ft = root.querySelector('.as-foot').getBoundingClientRect();
    upBtn.classList.toggle('on', scrollY > innerHeight && ft.top > innerHeight);
    upBtn.classList.toggle('light', light);
  }
  upBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  addEventListener('scroll', onScroll, { passive: true });
  function go(id) { var el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + scrollY, behavior: reduce ? 'auto' : 'smooth' }); }
  root.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    e.preventDefault(); go(a.getAttribute('href').slice(1));
  }, true);

  // стрелки ← → — к следующему варианту, как в презентации
  var slides = $$('[data-slide]');
  addEventListener('keydown', function (e) {
    var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!dir) return;
    e.preventDefault();
    var y = scrollY + 2, i;
    if (dir > 0) { for (i = 0; i < slides.length; i++) if (slides[i].getBoundingClientRect().top + scrollY > y + 10) break; }
    else { for (i = slides.length - 1; i >= 0; i--) if (slides[i].getBoundingClientRect().top + scrollY < y - 10) break; }
    if (slides[i]) window.scrollTo({ top: slides[i].getBoundingClientRect().top + scrollY, behavior: 'smooth' });
  });
  onScroll();
})();
