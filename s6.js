/* «Армия спорта», шестая страница — новые подходы к знаку: сначала знак сейчас, потом варианты с номерами.
   Знаки — из Фигмы «новые.fig» (своя отрисовка в SVG: img/s6/v<номер>-<компоновка>.svg), подписи к вариантам — тексты оттуда же.
   Оформление — as.css, свое — s6.css. Размер картинок общий: ширина = ширина в Фигме × --k, поэтому надписи во всех вариантах одного кегля. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = new URL(BASE + 'img/', document.baseURI).href;
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as', 's6');
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

  // ширина каждой компоновки в Фигме — от нее считается размер на странице
  var W = {
    'v1-h': 2294, 'v1-st': 1333, 'v1-v': 851, 'v2-h': 2122, 'v2-st': 1285, 'v2-v': 851, 'v3-h': 2309, 'v3-st': 1278, 'v3-v': 851,
    'v4-h': 2231, 'v4-st': 1347, 'v4-v': 851, 'v4-color': 1347, 'v5-h': 2341, 'v5-st': 1556, 'v5-v': 851,
    'v6-h': 2154, 'v6-st': 1088, 'v6-hs': 2389, 'v6-sts': 1088
  };
  function pic(name, cls, cap) {
    var src = IMG + 's6/' + name + (W[name] ? '.svg' : '.webp');
    return '<figure class="' + (cls || '') + '"><img src="' + src + '" alt="" style="--w:' + (W[name] || 512) + '" loading="lazy" decoding="async">' +
      (cap ? '<figcaption>' + T(cap) + '</figcaption>' : '') + '</figure>';
  }

  var V = [
    { t: 'буква А и звезда', p: ['Ближе по символике к спортивному бренду. Есть ассоциации с горой или щитом.'], set: [['v1-h', 'wide'], ['v1-st'], ['v1-v']] },
    { t: 'буква А и звезда в одном цвете', p: ['Работает в черно-белом варианте: здесь нет разделения на две части, а красный цвет рядом со словом «армия» отсылал бы к Красной армии.', 'Хорошо сочетается со шрифтом: в знаке есть и скругленные, и острые углы.'], set: [['v2-h', 'wide'], ['v2-st'], ['v2-v']] },
    { t: 'только буква', p: ['Уходим от звезды и сосредотачиваемся на букве. Из прежнего знака сохраняем разделение на две части и угол.'], set: [['v3-h', 'wide'], ['v3-st'], ['v3-v']] },
    { t: 'звезда', p: ['Черно-белая — как преемственность стилистики Nike. В цвете звезда в таком виде слишком напоминала бы Спортмастер.', 'За счет динамичной формы знак хорошо передает движение.'],
      set: [['v4-h', 'wide'], ['v4-st'], ['v4-v'], ['v4-color', 'ref', 'в цвете'], ['v4-sm', 'ref sm', 'знак Спортмастера, для сравнения']] },
    { t: 'звезда-флаг', p: ['Синий сверху, красный снизу — отсылка к флагу России. Знак лучше ставить на белый фон.', 'Надпись взята из готового шрифта, но буквы адаптированы под наклоны звезды.'],
      set: [['v5-h', 'wide'], ['v5-st'], ['v5-v']], flag: 1 },
    { t: 'шрифт ЦСКА', p: ['Дополнительный вариант для кобрендинга: тот же шрифт, что у ЦСКА, и цвета ЦСКА, звезды нет. «Армия» синяя, чтобы не было отсылки к Красной армии. В вертикальной версии при таком соотношении появляется ощущение триколора.', 'Со звездой и цветным текстом знак похож на заставку супергеройского фильма — если сохранять звезду, текст лучше делать черным.'],
      set: [['v6-h', 'wide', 'без звезды'], ['v6-hs', 'wide', 'со звездой'], ['v6-st', '', 'без звезды'], ['v6-sts', '', 'со звездой']] }
  ];

  var h = [];
  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, новые подходы</a><nav>' +
    '<a href="#top">сейчас</a>' + V.map(function (v, i) { return '<a href="#v' + (i + 1) + '">' + (i + 1) + '</a>'; }).join('') + '</nav></div></header>');

  // знак сейчас — от него отталкиваются все варианты
  h.push('<section class="as-sec s6-old" id="top" data-slide><div class="as-wrap"><div class="as-tx as-up"><h1 class="as-h2">новые подходы к&nbsp;знаку</h1>' +
    '<div><p class="as-p">' + T('Шесть вариантов. Сначала — знак, который есть сейчас.') + '</p></div></div>' +
    '<div class="s6-now as-up"><figure><img src="' + IMG + 'old-logo.webp" alt="знак сейчас: буква А со звездой"><figcaption>знак сейчас</figcaption></figure></div></div></section>');

  V.forEach(function (v, i) {
    var n = i + 1;
    h.push('<section class="as-sec s6-var" id="v' + n + '" data-slide><div class="as-wrap">' +
      '<div class="as-tx as-up"><h2 class="as-h2"><span class="n">' + n + '</span>' + esc(v.t) + '</h2><div>' +
      v.p.map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') +
      (v.flag ? '<p class="s6-flag"><img src="' + IMG + 's6/v5-flag.webp" alt="флаг России" loading="lazy"></p>' : '') + '</div></div>' +
      '<div class="s6-set as-up">' + v.set.map(function (s) { return pic(s[0], s[1], s[2]); }).join('') + '</div></div></section>');
  });

  h.push('<section class="as-thanks" data-slide><div class="as-wrap"><h2>спасибо<br>за просмотр</h2></div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><div class="in"><span>армия спорта, новые подходы к знаку</span></div></div></footer>');
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
  var top = root.querySelector('.as-top'), links = $$('.as-top nav a'), darks = $$('.as-thanks'),
    marks = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  function onScroll() {
    var cur = -1;
    marks.forEach(function (m, i) { if (m && m.getBoundingClientRect().top < innerHeight * .45) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    var light = false;
    darks.forEach(function (d) { var r = d.getBoundingClientRect(); if (r.top <= 32 && r.bottom > 32) light = true; });
    top.classList.toggle('light', light);
  }
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
