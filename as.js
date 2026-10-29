/* «Армия спорта», первый этап — презентация ребрендинга для клиента.
   Вся страница собирается здесь: тексты, главы трех путей и живые блоки.
   Первая концепция — красная, вторая («рассвет») — черная с синим, альтернатива — черно-белая.
   Картинки, знаки, модели и ролик — img/ (у картинок -s — легкая копия для телефона).
   Адрес файлов — window.AS_BASE (на Тильде загрузчик ставит адрес jsDelivr по номеру версии), локально — та же папка. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = new URL(BASE + 'img/', document.baseURI).href;
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as');
  root.setAttribute('lang', 'ru');

  // пропорции картинок — место занято сразу, страница не прыгает (заполняет build.py)
  var R = /*RATIOS*/{"c1-art-a":1.7752,"c1-art-b":1.777,"c1-art-c":1.7787,"c1-award-man":1.7778,"c1-award-row":2.5862,"c1-award-stack":0.9992,"c1-co":0.7456,"c1-coin-a":1.4684,"c1-coin-b":1.4684,"c1-coin-side":1.1118,"c1-coin":1.0033,"c1-dark-2":2.9049,"c1-dark-h":7.932,"c1-dark-mid":7.8027,"c1-dark-v":0.7475,"c1-desc-2":5.2016,"c1-desc-2b":1.964,"c1-desc-h":10.8435,"c1-desc-v":0.6534,"c1-fighter":1.0,"c1-font":2.6762,"c1-icon":1.0,"c1-keys-a":1.7769,"c1-keys-b":1.7769,"c1-keys-flat":1.5598,"c1-labels":1.6667,"c1-logo-2":2.9049,"c1-logo-h":7.932,"c1-logo-mid":7.8027,"c1-logo-v":0.7475,"c1-mono-2":2.9049,"c1-mono-h":7.932,"c1-mono-mid":7.8027,"c1-mono-v":0.7551,"c1-over":1.6,"c1-polo-a":0.8,"c1-polo-b":0.8005,"c1-polo-c":1.0678,"c1-print-1":0.8286,"c1-print-2":0.825,"c1-print-3":0.825,"c1-print-4":0.8286,"c1-print-5":0.8286,"c1-print-6":0.825,"c1-print-7":0.825,"c1-print-8":0.8286,"c1-slides-2":1.0,"c1-slides":1.0,"c1-star":0.7475,"c1-tee-back":0.8,"c1-tee-front":0.8,"c1-under":1.6,"c1-wall-a":1.7778,"c1-wall-b":1.7778,"c1-wear-a":1.0,"c1-wear-b":1.0,"c1-wear-c":1.0008,"c1-word":0.7475,"c2-award-man":1.7778,"c2-award-row":2.5862,"c2-award-stack":1.075,"c2-co":0.9138,"c2-coin-a":1.0,"c2-coin-b":1.0,"c2-coin-c":1.0,"c2-font":3.6588,"c2-icon":1.0,"c2-keys-a":1.0,"c2-keys-b":1.0,"c2-keys-flat":1.5598,"c2-logo-2":3.1256,"c2-logo-h":5.8524,"c2-logo-top":2.5947,"c2-logo-v":0.9142,"c2-mirror-a":0.96,"c2-mirror-b":0.96,"c2-mono-2":3.1256,"c2-mono-h":5.8524,"c2-mono-top":2.5947,"c2-mono-v":0.9142,"c2-over":1.6,"c2-poster-a":1.0,"c2-poster-b":1.0,"c2-poster-c":1.0,"c2-poster-d":1.0,"c2-poster-e":1.0016,"c2-reflect":1.7699,"c2-silver":1.5,"c2-slides-2":1.0,"c2-slides":1.0,"c2-star":1.0228,"c2-tag-1":0.9976,"c2-tag-2":0.9976,"c2-tag-3":1.0,"c2-tag-4":0.3224,"c2-tag-5":0.3934,"c2-tag-6":0.3934,"c2-tag-7":2.1548,"c2-tee-a":1.2303,"c2-tee-b":0.7504,"c2-under":1.6,"c2-wall":1.7715,"c2-wear-a":1.0,"c2-wear-b":1.0,"c2-wear-c":1.0,"c2-wear-d":1.0,"c3-co":1.9478,"c3-icon":1.0,"c3-logo-2":1.9469,"c3-logo-h":8.5786,"c3-over":1.6,"c3-tee-back":0.7998,"c3-tee-front":0.7998,"c3-under":1.6,"key1":1.0,"key2":1.0,"key3":1.0,"key4":0.327,"key5":0.3793,"key6":0.3793,"key7":2.2143,"old-icon":1.0,"old-ig-grid":1.4988,"old-ig-profile":1.6738,"old-logo":1.0292,"old-site2":1.7442,"old-story2":0.5622,"old-vk-hl":1.3268,"old-vk2":1.4305,"old-yt2":1.4646,"p-cska-fight":0.5972,"p-cska":0.6731,"p-dynamo":0.655,"p-fsbr":1.8599,"p-sa":1.2579,"promo":1.7778,"s3-f-chr-raw-caps-center":7.6997,"s3-f-chr-raw-caps-horizontal":7.8607,"s3-f-chr-raw-caps-stacked":3.6432,"s3-f-chr-raw-lower-center":6.8399,"s3-f-chr-raw-lower-horizontal":7.0097,"s3-f-chr-raw-lower-stacked":3.3129,"s3-f-chr-raw-sentence-center":6.9087,"s3-f-chr-raw-sentence-horizontal":7.0788,"s3-f-chr-raw-sentence-stacked":3.0178,"s3-f-gol-raw-caps-center":7.9002,"s3-f-gol-raw-caps-horizontal":8.1455,"s3-f-gol-raw-caps-stacked":3.661,"s3-f-gol-raw-lower-center":6.558,"s3-f-gol-raw-lower-horizontal":6.7897,"s3-f-gol-raw-lower-stacked":3.1909,"s3-f-gol-raw-sentence-center":6.6728,"s3-f-gol-raw-sentence-horizontal":6.9049,"s3-f-gol-raw-sentence-stacked":2.9066}/*/RATIOS*/;

  // ---------- типограф: короткие слова держатся за следующим, тире — за предыдущим ----------
  function nb(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    t = t.replace(/(^|[\s(«>])(без|для|про|под|над|при|обо|или|что|как|его|все|еще|уже|это|был|так)\s/gi, '$1$2 ');
    // дефис не рвет короткие слова вроде «из-за»
    return t.replace(/\s—/g, ' —').replace(/(\S)-(?=\S)/g, '$1-⁠');
  }
  function nbh(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    return t.replace(/\s—/g, ' —').replace(/\s(\S+)$/, ' $1');
  }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function T(t) { return esc(nb(t)).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>'); }
  function svg(n) { return IMG + n + '.svg'; }

  // ---------- картинка: место под нее сразу, скелет, пока грузится ----------
  function ph(name, o) {
    o = o || {};
    var r = o.ratio || R[name] || 1, big = IMG + name + '.webp', small = IMG + name + '-s.webp';
    return '<div class="as-ph' + (o.zoom === false ? '' : ' zoom') + (o.cls ? ' ' + o.cls : '') + '" style="aspect-ratio:' + r + (o.style ? ';' + o.style : '') + '" data-big="' + big + '">' +
      '<img src="' + small + '" srcset="' + small + ' 820w, ' + big + ' 1800w" sizes="' + (o.sizes || '(max-width:640px) 100vw, 70vw') + '" alt="' + esc(o.alt || '') + '" loading="lazy" decoding="async"></div>';
  }
  function cell(span, name, o) { return '<div class="' + span + '">' + ph(name, o) + '</div>'; }
  function tx(title, ps) {
    return '<div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">' + esc(nbh(title)) + '</h2><div>' +
      [].concat(ps || []).map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') + '</div></div></div>';
  }
  function sec(id, title, ps, vis, bleed) {
    return '<section class="as-sec" id="' + id + '" data-slide>' + tx(title, ps) +
      (vis ? (bleed ? '<div class="as-vis as-up">' + vis + '</div>' : '<div class="as-wrap as-vis as-up">' + vis + '</div>') : '') + '</section>';
  }
  var ICON = {
    hand: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 26V11a3 3 0 0 1 6 0v12M25 22v-3a3 3 0 0 1 6 0v6M31 25v-1a3 3 0 0 1 6 0v9a11 11 0 0 1-11 11h-3a9 9 0 0 1-7-3.4l-6-7.8a2.6 2.6 0 0 1 4-3.3l3 3.5"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>'
  };

  // ---------- данные ----------
  var C = {
    c1: { name: 'преемственность', bg: '#fff', mark: 'c1-logo-v', main: 'c1-logo-v', icon: IMG + 'c1-icon.webp', label: 'Армия спорта' },
    c2: { name: 'рассвет', bg: 'linear-gradient(180deg,#080000,#07003F 50%,#0044FF)', mark: 'c2-mono-v', main: 'c2-logo-v', icon: svg('c2-icon'), label: 'Армия спорта' },
    c3: { name: 'только слово', bg: 'var(--soft)', mark: 'c3-logo-2', icon: svg('c3-icon'), label: 'армия спорта' }
  };
  var PARTNERS = function (own) { return ['p-sa', 'p-cska-fight', own, 'p-cska', 'p-fsbr', 'p-dynamo']; };
  var APPS = [['tcatch', 'T Catch'], ['online', 'Онлайн'], ['mifit', 'Mi Fitness'], ['sportmaster', 'Спортмастер'], ['sportsru', 'Sports.ru'], ['max', 'Макс'], ['gosuslugi', 'Госуслуги'], ['shazam', 'Shazam']];
  var FONTS = { arc: ['Арк', 'c1-font', 'https://www.artlebedev.ru/type/arc/drive/'], chromius: ['Хромиус', 'c2-font', 'https://www.artlebedev.ru/type/chromius/#drive'], engine: ['Энджин', 'c3-logo-h', 'https://www.artlebedev.ru/type/engine/#drive'] };

  // ---------- блоки ----------
  function cover(id, lead) {
    var c = C[id];
    if (!lead) return '<section class="as-cover ' + id + '" data-slide><div class="as-wrap mark"><img src="' + svg(c.mark) + '" alt=""></div></section>';
    return '<section class="as-cover ' + id + '" data-slide><div class="as-wrap mark"><img src="' + svg(c.mark) + '" alt=""></div>' +
      '<div class="as-wrap"><div class="foot as-up' + (Array.isArray(lead) ? ' two' : '') + '"><span></span>' + [].concat(lead).map(function (l) { return '<p class="as-lead">' + T(l) + '</p>'; }).join('') + '</div></div></section>';
  }
  // сейчас → предлагаем
  function wasNow(id) {
    return '<div class="as-wasnow' + (id === 'c1' ? ' fly' : '') + '"><div><img class="old" src="' + IMG + 'old-logo.webp" alt="Знак сейчас"' + (id === 'c1' ? '' : ' loading="lazy"') + '><b>сейчас</b></div>' +
      (id === 'c1' ? '<div><img class="word" src="' + svg('c1-word') + '" alt="Новый знак"><img class="star" src="' + svg('c1-star') + '" alt=""><b>новый</b></div>' : '<div><img src="' + svg(C[id].main) + '" alt="Новый знак" loading="lazy"><b>новый</b></div>') + '</div>';
  }
  // откуда звезда и прописные: эмблема ЦСКА с отметками → наш знак с теми же отметками
  function heritage(id, caps, fromOld) {
    var marks = function (star, text) {
      return '<svg class="marks" viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse class="m" cx="' + star[0] + '" cy="' + star[1] + '" rx="' + star[2] + '" ry="' + star[3] + '"/>' +
        (text ? '<line class="m" x1="' + text[0] + '" y1="' + text[1] + '" x2="' + text[2] + '" y2="' + text[3] + '"/>' : '') + '</svg>';
    };
    var left = fromOld ? '<img class="old" src="' + IMG + 'old-logo.webp" alt="Знак сейчас" loading="lazy">' : '<img src="' + svg('p-cska-fight') + '" alt="Эмблема ЦСКА Единоборства" loading="lazy">' + marks([50, 11, 19, 14], caps ? [20, 50, 80, 50] : null);
    return '<div class="as-herit"><div class="side">' + left + '</div>' +
      '<div class="arrow" aria-hidden="true"></div>' +
      '<div class="side"><img src="' + svg(C[id].main) + '" alt="" loading="lazy">' + (fromOld ? '' : marks(id === 'c1' ? [50, 26, 44, 32] : [50, 26, 36, 31], caps ? [4, 102, 96, 102] : null)) + '</div></div>';
  }
  // все версии знака разом
  function sys(bands) {
    return '<div class="as-sys">' + bands.map(function (b) {
      var cols = b.files.map(function (f) { return Math.pow(R[f] || 1, .62).toFixed(3) + 'fr'; }).join(' ');
      return '<div class="band' + (b.bg ? ' dark' : '') + '" style="background:' + (b.bg || '#fff') + ';grid-template-columns:' + cols + '">' +
        b.files.map(function (f) { return '<img src="' + svg(f) + '" alt="" loading="lazy">'; }).join('') + '</div>';
    }).join('') + '</div>';
  }
  // тот же набор версий на разных фонах — в одном блоке, фон меняется сам
  function sysSwitch(bands) {
    return '<div class="as-sw"><div class="as-sw-tabs">' + bands.map(function (b, i) { return '<button type="button"' + (i ? '' : ' class="on"') + '>' + T(b.label) + '<i></i></button>'; }).join('') + '</div>' +
      '<div class="as-sys as-sw-stage">' + bands.map(function (b, i) {
        var cols = b.files.map(function (f) { return Math.pow(R[f] || 1, .62).toFixed(3) + 'fr'; }).join(' ');
        return '<div class="band' + (b.bg ? ' dark' : '') + (i ? '' : ' on') + '" style="background:' + (b.bg || '#fff') + ';grid-template-columns:' + cols + '">' +
          b.files.map(function (f) { return '<img src="' + svg(f) + '" alt="" loading="lazy">'; }).join('') + '</div>';
      }).join('') + '</div></div>';
  }
  function palette(parts) {
    return '<div class="as-pal">' + parts.map(function (p) {
      var cl = (p[4] || '') + (/^#FFF/i.test(p[0]) ? ' light' : '');
      return '<div class="' + cl.trim() + '" style="--f:' + p[1] + ';' + (p[4] ? '' : 'background:' + p[0] + ';') + 'color:' + (p[3] || '#fff') + '"><span>' + p[2] + '</span></div>';
    }).join('') + '</div>';
  }
  function cobrand(own) {
    return '<div class="as-row">' + PARTNERS(own).map(function (f) { return '<img src="' + svg(f) + '" alt="" loading="lazy">'; }).join('') + '</div>' +
      '<div class="as-wall" data-own="' + own + '"></div>';
  }
  function typeBlock(key) {
    var f = FONTS[key];
    return '<div class="as-type ' + key + '"><div><div class="name">' + esc(f[0]) + '</div><a class="as-btn" href="' + f[2] + '" target="_blank" rel="noopener">посмотреть шрифт' + ICON.out + '</a></div>' +
      (key === 'engine' ? '' : '<img src="' + svg(f[1]) + '" alt="Образец шрифта ' + esc(f[0]) + '" loading="lazy">') + '</div>';
  }
  function phone(id, glass) {
    var c = C[id];
    return '<div class="as-phone"><div class="as-screen"><div class="isl"></div><div class="time">21:58</div><div class="as-apps">' +
      '<div class="as-a me' + (glass ? ' slot' : '') + '"><i><img src="' + c.icon + '" alt="" loading="lazy"></i><span>' + c.label + '</span></div>' +
      APPS.map(function (a) { return '<div class="as-a"><i style="background-image:url(' + IMG + 'app-' + a[0] + '.webp)"></i><span>' + a[1] + '</span></div>'; }).join('') +
      '</div></div></div>';
  }
  function tabBox(id) {
    var c = C[id];
    return '<div class="as-tabbox"><div class="as-bigicon"><img src="' + c.icon + '" alt="иконка приложения" loading="lazy"></div>' +
      '<div class="as-browser"><div class="tab"><img src="' + c.icon + '" alt="" loading="lazy"><span>' + c.label + '</span></div><div class="url">armiya-sporta.ru</div></div></div>';
  }
  function app(id) { return '<div class="as-app"><div class="as-phonebox">' + phone(id) + '</div>' + tabBox(id) + '</div>'; }
  // 3D сразу, рядом рендеры; рука подсказывает, что модель можно покрутить
  function pair3d(model, poster, orbit, renders, big) {
    return '<div class="as-3dpair' + (big ? ' big' : '') + '"><div class="as-3d" data-model="' + model + '" data-orbit="' + (orbit || '') + '"><div class="sk"></div>' +
      '<div class="hand" aria-hidden="true">' + ICON.hand + '</div></div>' +
      '<div class="as-renders">' + renders + '</div></div>';
  }
  // смена фокуса: взгляд переходит с монеты на отражение и обратно
  function focus(names) {
    return '<div class="as-focus">' + names.map(function (n, k) { return ph(n, { cls: 'contain' + (k ? '' : ' cur'), zoom: false }); }).join('') + '</div>';
  }
  function loupe(name) { return '<div class="as-flipper" data-loupe="1">' + ph(name, { cls: 'contain cur', zoom: false }) + '</div>'; }
  // брелоки: векторы из макета как пластиковые бирки — белый, прозрачный и черный пластик
  function keyTags(silver) {
    var tags = [['key1', 'white', 1], ['key2', 'white', 1], ['key7', 'clear', 2.2], ['key4', 'black tall', .33], ['key5', 'black', .38], ['key6', 'black', .38], ['key3', 'white', 1]];
    return '<div class="as-keys' + (silver ? ' silver' : '') + '">' + tags.map(function (t) {
      var src = silver ? IMG + 'c2-tag-' + t[0].slice(3) + '.webp' : svg(t[0]);
      return '<div class="tag ' + (silver ? (t[1].indexOf('tall') >= 0 ? 'tall' : '') : t[1]) + '" style="--r:' + t[2] + '"><div class="tg"><img src="' + src + '" alt="" loading="lazy">' +
        (silver ? '<i class="sh" style="-webkit-mask-image:url(' + src + ');mask-image:url(' + src + ')"></i>' : '') + '</div></div>';
    }).join('') + '</div>';
  }

  // экраны сайта: подложка и верхний слой из макета, в месте фото — промо-ролик с обрезкой как в Фигме
  var SITES = { c1: { v: [0, 72, 1440, 568], gray: 1 }, c2: { v: [92, 20, 1350, 993], m: [640, 36, 923.6, 903] }, c3: { v: [0, 64, 1440, 836], gray: 1 } };
  function pct(v, W) { return (v / W * 100).toFixed(3) + '%'; }
  function video(cls) { return '<video muted loop playsinline preload="none" poster="' + IMG + 'promo.webp"' + (cls ? ' class="' + cls + '"' : '') + '></video>'; }
  function site(id) {
    var d = SITES[id], v = d.v, vid;
    if (d.m) {
      var m = d.m;
      vid = '<div class="vid star" style="left:' + pct(m[0], 1440) + ';top:' + pct(m[1], 900) + ';width:' + pct(m[2], 1440) + ';height:' + pct(m[3], 900) + ';-webkit-mask-image:url(' + svg('c2-star') + ');mask-image:url(' + svg('c2-star') + ')">' +
        '<div style="position:absolute;left:' + pct(v[0] - m[0], m[2]) + ';top:' + pct(v[1] - m[1], m[3]) + ';width:' + pct(v[2], m[2]) + ';height:' + pct(v[3], m[3]) + '">' + video() + '</div></div>';
    } else vid = '<div class="vid" style="left:' + pct(v[0], 1440) + ';top:' + pct(v[1], 900) + ';width:' + pct(v[2], 1440) + ';height:' + pct(v[3], 900) + '">' + video(d.gray ? 'gray' : '') + '</div>';
    function lay(p, alt) { return '<img class="lay" src="' + IMG + id + '-' + p + '-s.webp" srcset="' + IMG + id + '-' + p + '-s.webp 1080w, ' + IMG + id + '-' + p + '.webp 2160w" sizes="(max-width:640px) 100vw, 90vw" alt="' + alt + '" loading="lazy">'; }
    return '<div class="as-site"><div class="chrome"><i></i><i></i><i></i><span><img class="fav" src="' + C[id].icon + '" alt="">armiya-sporta.ru</span></div><div class="as-scr">' + lay('under', '') + vid + lay('over', 'Первый экран сайта') + '</div></div>';
  }
  // разделитель между идеями: черная полоса во всю ширину
  function divide(id, n) {
    return '<section class="as-divide" id="' + id + '" data-slide style="--sb:' + ({ c1: .065, c2: .065, c3: .015 })[id] + '"><div class="as-wrap"><span>' + n + '</span><h2 class="as-h1">' + T(C[id].name) + '</h2></div></section>';
  }
  // картинки в ряд одной высоты: ширина по пропорциям
  function fit(items) {
    return '<div class="as-fit">' + items.map(function (it) { return '<div style="flex:' + (it[2] || R[it[0]] || 1) + ' 1 0">' + it[1] + '</div>'; }).join('') + '</div>';
  }
  function mirror(html) { return '<div class="as-mirror">' + html + '<i class="sheen"></i></div>'; }

  // ====================================================================================
  var h = [];

  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, первый этап</a><nav>' +
    '<a href="#brief">задача</a><a href="#c1">преемственность</a><a href="#c2">рассвет</a><a href="#c3">только слово</a><a href="#sum">итог</a></nav></div></header>');
  h.push('<button type="button" class="as-up-btn" aria-label="наверх">' + ICON.up + '</button>');

  // ---------- первый экран: без знаков, они впереди ----------
  h.push('<section class="as-hero" id="top" data-slide><div class="as-wrap"><div class="row">' +
    '<h1 class="as-disp">армия спорта</h1>' +
    '<p class="as-lead">' + T('Ребрендинг: две концепции и альтернатива, каждая — на носителях.') + '</p></div></div>' +
    '<div class="as-herovid">' + video() + '</div></section>');

  // ---------- задача: кнопка, раскрывается и читается заново; внутри — бриф целиком ----------
  function bl(title, items) {
    return '<div class="as-tx as-vis as-up"><h3 class="as-h2">' + esc(nbh(title)) + '</h3><div></div></div><ul class="as-list as-up">' +
      items.map(function (x) { return '<li><b>' + T(x[0]) + '</b><span>' + T(x[1]) + '</span></li>'; }).join('') + '</ul>';
  }
  h.push('<section class="as-sec" id="brief" data-slide><div class="as-wrap"><div class="as-task as-up"><div class="t"><h2 class="as-h2">задача</h2>' +
    '<p class="as-p">' + T('«Армия спорта» — цифровая платформа, которая объединяет спорт России. Сейчас фокус — единоборства, дальше другие виды спорта, включая «эстетические», и детские направления. «Армия» здесь про объединение людей, а не про военную тему.') + '</p>' +
    '<p class="as-p">' + T('Задача первого этапа — две концепции логотипа с подходом по шрифтам, показанные на носителях и в связке с партнерскими логотипами.') + '</p>' +
    '<button type="button" class="as-btn as-toggle" aria-expanded="false" data-open="свернуть бриф">раскрыть бриф</button></div>' +
    '<div class="as-was">' + fit([['old-site2', ph('old-site2')], ['old-story2', ph('old-story2')]]) + fit([['old-yt2', ph('old-yt2')], ['old-vk2', ph('old-vk2')], ['old-vk-hl', ph('old-vk-hl')]]) + fit([['old-ig-profile', ph('old-ig-profile')], ['old-ig-grid', ph('old-ig-grid')], ['old-icon', ph('old-icon')]]) + '</div></div>' +
    '<div class="as-brief" hidden>' +
    '<p class="as-army as-vis as-up">' + T('«армия» — это не') + ' <s>' + T('военная тема') + '</s>, ' + T('а объединение людей') + '</p>' +
    bl('логотип: основа', [
      ['Старый логотип уходит', 'Заказчику он не нравится, его и просят поменять'],
      ['Звезда остается', 'Концепт совмещения звезды и буквы «А»: в нем читаются сразу три смысла — армия, звезда, свет и движение'],
      ['Работает в связке с другими логотипами', 'Это важнее, чем кобрендинг с какой-то одной организацией']
    ]) +
    bl('характер и цвета', [
      ['Модно и молодежно', 'Сейчас стиль слишком «госушный» и смахивает на ВГТРК — от этого уходим'],
      ['Но без «креативного креатива»', 'Главный партнер — ЦСКА, логотип и стиль должны выглядеть уместно рядом с ним'],
      ['Унисекс', 'Дизайн адаптируется под другие категории и виды спорта'],
      ['Латиница', 'У платформы есть международное отделение Sport Alliance, поэтому знак и шрифт должны работать и в английской версии']
    ]) +
    '<div class="as-tx as-vis as-up"><h3 class="as-h2">аудитория</h3><div><p class="as-p">' + T('Ядро сейчас — борцы-единоборцы со всей России, особенно с Кавказа: именно они носят логотип. Стиль проверяется на четырех персонажах и должен «жить и откликаться» у каждого.') + '</p></div></div>' +
    '<ul class="as-who as-vis as-up">' + [
      ['борец из Дагестана', 'Носит логотип на форме и мерче'],
      ['спортивный функционер', 'Ставит знак рядом с партнерами'],
      ['бегунья', 'Образ будущего масштабирования на «эстетические» виды спорта'],
      ['ребенок или родитель', 'Из детской спортсекции']
    ].map(function (p) { return '<li><b>' + T(p[0]) + '</b><span>' + T(p[1]) + '</span></li>'; }).join('') + '</ul>' +
    bl('кобрендинг', [
      ['ЦСКА Единоборства', 'Партнер первого этапа. На мокапах — связка именно с ним, а не с ФАУ ЦСКА'],
      ['ФСБР', 'Федерация спортивной борьбы России — тестовая связка для проверки'],
      ['Динамо', 'Тестовая связка для проверки'],
      ['Минобороны, SA Media Group, академия РССА', 'Дальнейшие партнеры']
    ]) +
    bl('носители по этапам', [
      ['Первый этап', 'Монета, широкая стена зала, иконка приложения, футболка и штаны, кубок или медаль, брелок — в идеале больше; связки с партнерскими логотипами на мокапах'],
      ['Третий этап', 'Стенды или стелы, большие сертификаты для фото на пенокартоне, бутылочки, брелоки, простые белые футболки для стаффа, ринг, татами, флажки — список уточнит заказчик'],
      ['Шаблонные решения', 'В команде заказчика есть дизайнеры для поддержки, но они перегружены, поэтому решения нужны универсальные и шаблонные']
    ]) +
    bl('шрифты и награды', [
      ['Шрифты', 'Смотрим обязательно, можно платные. Для видео отдельно предусмотреть бесплатные'],
      ['Награды', 'Мощное основание, фундамент — а сверху что-то воздушное. Текущие награды в руках у мужчин выглядят слишком элегантно']
    ]) +
    bl('формат работы', [
      ['Презентация', 'Удаленная, без защиты, в формате сайта — удобно смотреть и на компьютере, и на телефоне'],
      ['Обратная связь', 'Одним документом, списком; возможен созвон для показа']
    ]) +
    '</div></div></section>');

  // ---------- первая: красная ----------
  h.push(divide('c1', 'идея первая'));
  h.push(sec('c1-was', 'знак сейчас и новый знак', ['Звезда остается, лишние детали уходят.'], wasNow('c1')));
  h.push(cover('c1', ''));
  h.push(sec('c1-logo', 'красный сверху, синий снизу', ['Основная версия — на белом. На темно-синем — белый знак с контурной звездой, на черном — цветная звезда и белая надпись.'], sysSwitch([
    { files: ['c1-logo-h', 'c1-logo-mid', 'c1-logo-2', 'c1-logo-v'], label: 'на белом' },
    { files: ['c1-mono-h', 'c1-mono-mid', 'c1-mono-2', 'c1-mono-v'], bg: '#001857', label: 'на темно-синем' },
    { files: ['c1-dark-h', 'c1-dark-mid', 'c1-dark-2', 'c1-dark-v'], bg: '#080000', label: 'на черном' }
  ])));
  h.push(sec('c1-desc', 'версия с дескриптором', ['Для партнерских материалов — знак с подписью «при партнерстве ФАУ ЦСКА».'], sys([
    { files: ['c1-desc-h', 'c1-desc-2', 'c1-desc-2b', 'c1-desc-v'] }
  ])));
  h.push(sec('c1-color', 'белый и красный', ['Основа — белый фон, красный по возможности стоит сверху. Синий и черный — акценты.'],
    palette([['#FFFFFF', 2.2, 'белый', '#121314'], ['#E71E26', 2.2, 'красный E71E26'], ['#1B43B2', .7, 'синий 1B43B2'], ['#080000', .7, 'черный']])));
  h.push(sec('c1-co', 'рядом с партнерами не теряется', ['Знак проверен рядом с ЦСКА Единоборства, ФСБР и Динамо. У большинства названия набраны прописными — этот прием перешел в новый знак.'], cobrand('c1-co')));
  h.push(sec('c1-font', 'шрифт', [], typeBlock('arc')));
  h.push(sec('c1-app', 'иконка и фавикон', [], app('c1')));
  h.push(sec('c1-site', 'пример экрана сайта', [], site('c1')));
  h.push(sec('c1-coin', 'все виды спорта на одной монете', ['На обороте — дисциплины, которые объединит платформа: от борьбы и бокса до гимнастики и парусного спорта. Название идет по гурту.'],
    pair3d('coin_gold', 'c1-coin', '20deg 80deg auto', '<div class="as-grid as-g2">' + ph('c1-coin', { cls: 'contain soft' }) + ph('c1-coin-side', { cls: 'contain soft' }) + '</div>' + '<div class="as-grid as-g2">' + ph('c1-coin-a', { cls: 'contain soft', zoom: false }) + ph('c1-coin-b', { cls: 'contain soft', zoom: false }) + '</div>')));
  h.push(sec('c1-wall', 'у каждого зала свой сюжет', ['На стенах — иллюстрации под вид спорта, которым занимаются в этом зале.'],
    '<div class="as-col">' + cell('s12', 'c1-wall-a') + cell('s4', 'c1-art-a') + cell('s4', 'c1-art-b') + cell('s4', 'c1-art-c') + cell('s12', 'c1-wall-b') + '</div>'));
  h.push(sec('c1-award', 'награда', ['Ступени из слоев пластика с зеркальным напылением: на видео они играют светом, на фото выглядят мощно, в руке остаются легкими.'],
    pair3d('cubok', 'c1-award-stack', '', ph('c1-award-man') + ph('c1-award-row', { cls: 'soft' }))));
  h.push(sec('c1-wear', 'форма и экипировка', ['Основной фон стиля белый, но белая форма непрактична. Шлепанцы с логотипом носят все борцы в зале и раздевалке, их стоит брендировать.'],
    '<div class="as-col">' + cell('s6', 'c1-fighter') + cell('s6', 'c1-wear-c') + cell('s4', 'c1-wear-a') + cell('s4', 'c1-wear-b') + cell('s4', 'c1-slides') + '</div>'));
  h.push(sec('c1-polo', 'поло для тренеров', ['Силиконовый логотип и надписи. Красный заливкой встречается редко, чтобы не было ассоциаций с Красной армией, — но тренеров в зале должно быть видно сразу. Поэтому цвет яркий, а логотип и название — тихие.'],
    '<div class="as-col">' + cell('s4', 'c1-polo-a') + cell('s4', 'c1-polo-b') + cell('s4', 'c1-polo-c') + '</div>'));
  h.push(sec('c1-tee', 'турнирный мерч', ['Футболка конкретного турнира с датой и городом. Ее берут «потому что был там» — это самый продаваемый формат у единоборств. Фирменный шрифт еще предстоит приобрести, поэтому концепты пока на стандартных шрифтах.'],
    '<div class="as-col">' + cell('s6', 'c1-tee-back') + cell('s6', 'c1-tee-front') + '</div><div class="as-prints">' + [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return ph('c1-print-' + i); }).join('') + '</div>'));
  h.push(sec('c1-keys', 'брелоки под любой турнир', ['Белый, прозрачный и черный пластик — под разные слоганы, линейки и события.'],
    keyTags() + '<div class="as-grid as-g2" style="margin-top:clamp(8px,1vw,16px)">' + ph('c1-keys-a') + ph('c1-keys-b') + '</div>'));

  // ---------- вторая: рассвет ----------
  h.push(divide('c2', 'идея вторая'));
  h.push(sec('c2-was', 'знак сейчас и новый знак', ['Красный цвет отсылает к Красной армии, поэтому здесь от него уходим. Знак — звезда или солнце, которое на рассвете поднимается из-за горизонта.'], wasNow('c2')));
  h.push(cover('c2', ['Яркий синий — про цифровое и современное.', 'Светлое внизу, как небо на рассвете.']));
  h.push(sec('c2-logo', 'одноцветный знак', ['Основная версия — на белом, на синем градиенте знак белый.'], sysSwitch([
    { files: ['c2-logo-h', 'c2-logo-top', 'c2-logo-2', 'c2-logo-v'], label: 'на белом' },
    { files: ['c2-mono-h', 'c2-mono-top', 'c2-mono-2', 'c2-mono-v'], bg: 'linear-gradient(180deg,#080000,#07003F 50%,#0044FF)', label: 'на рассвете' }
  ])));
  h.push(sec('c2-color', 'синий рассвет', ['Чтобы отличиться от Спортмастера: нет красного и нет сплошной синей заливки — синий только градиентом.'],
    palette([['', 3, 'рассвет', '#fff', 'dawn'], ['#FFFFFF', 2, 'белый', '#121314'], ['#E71E26', .7, 'акценты']])));
  h.push(sec('c2-co', 'рядом с партнерами', ['Звезду узнают по нынешнему знаку. Шрифт рубленый, как в эмблеме ЦСКА Единоборства, — рядом с партнером знак выглядит своим.'], cobrand('c2-co')));
  h.push(sec('c2-font', 'шрифт', [], typeBlock('chromius')));
  // иконка во весь экран: стеклянная звезда, прокрутка сажает ее на место в телефоне
  h.push('<section class="as-glass" id="c2-app" data-slide><div class="stick"><canvas></canvas>' +
    '<div class="say"><div class="as-wrap"><h2 class="as-h2">' + T('иконка и фавикон') + '</h2></div></div>' +
    '<div class="ph">' + phone('c2', true) + '</div></div></section>');
  h.push(sec('c2-app-tx', 'иконка приложения', [], '<div class="d-only">' + tabBox('c2') + '</div><div class="m-only">' + app('c2') + '</div>'));
  h.push(sec('c2-site', 'пример экрана сайта', [], site('c2')));
  h.push(sec('c2-coin', 'в спорте есть место каждому', ['На лицевой стороне — руки спортсменов, которые поддерживают друг друга: спорт объединяет людей. На обороте знак-зеркало — в нем видишь себя вместе с теми, кто стоит рядом, независимо от ранга. «Армия спорта» ждет новые лица. Название — на ребре монеты.'],
    pair3d('coin_mirror', 'c2-coin-a', '20deg 80deg auto', focus(['c2-coin-a', 'c2-coin-b', 'c2-coin-c']), true)));
  h.push(sec('c2-wall', 'брендинг стен', ['В зале — зеркала со знаком: человек понимает, что речь о нем. Зеркало само становится фотозоной.', 'Стены собираются из динамичных паттернов вместе с серебром.'],
    '<div class="as-col">' + '<div class="s12"><div class="as-mtext">' + ph('c2-wall') + '</div></div>' +
    ['c2-poster-e', 'c2-poster-c', 'c2-poster-d'].map(function (p) { return '<div class="s4">' + ph(p) + '</div>'; }).join('') +
    ['c2-poster-a', 'c2-poster-b'].map(function (p) { return '<div class="s6">' + mirror(ph(p)) + '</div>'; }).join('') +
    '<div class="s6">' + ph('c2-mirror-a') + '</div><div class="s6">' + ph('c2-mirror-b') + '</div><p class="s12 as-p as-cap">' + T('Фотозона в зеркале и стена — черновые концепты.') + '</p></div>'));
  h.push(sec('c2-award', 'победитель в отражении', [],
    pair3d('stela', 'c2-award-stack', '', ph('c2-award-man') + ph('c2-award-row', { cls: 'soft' }))));
  h.push(sec('c2-wear', 'форма и экипировка', [],
    '<div class="as-col">' + cell('s6', 'c2-wear-a') + cell('s6', 'c2-wear-c') + cell('s3', 'c2-wear-b') + cell('s3', 'c2-wear-d') + cell('s3', 'c2-slides') + cell('s3', 'c2-slides-2') + '</div>'));
  h.push(sec('c2-tee', 'турнирный мерч', [],
    fit([['c2-tee-a', ph('c2-tee-a')], ['c2-tee-b', ph('c2-tee-b')]])));
  h.push(sec('c2-keys', 'брелки', ['Тот же материал, что у монеты, — под любые слоганы и турниры.'],
    keyTags(true) + '<div class="as-grid as-g2" style="margin-top:clamp(8px,1vw,16px)">' + ph('c2-keys-a') + ph('c2-keys-b') + '</div>'));

  // ---------- альтернатива: черно-белая ----------
  h.push(divide('c3', 'идея третья, альтернатива'));
  h.push('<section class="as-cover c3" data-slide><div class="as-wrap mark"><img src="' + svg('c3-logo-2') + '" alt=""></div></section>');
  h.push(sec('c3-logo', 'название строчными', ['Черное и белое, без привязки к ЦСКА. Берем современный гротеск и пишем все строчными буквами — так выглядят цифровые продукты. Это же правило переносим на заголовки и короткие надписи во всех носителях. Графический знак убираем, как это сделал Nike. Звезда остается отсылкой к истории бренда и появляется в мелких деталях: на значках, футболках, брелоках, носках.'],
    '<div class="as-word">' + fit([['c3-logo-h', '<img src="' + svg('c3-logo-h') + '" alt="армия спорта" loading="lazy">'], ['c3-logo-2', '<img src="' + svg('c3-logo-2') + '" alt="" loading="lazy">', R['c3-logo-2'] * 2.1]]) + '</div>'));
  h.push(sec('c3-co', 'выделяется тем, что без звезды', ['У трех логотипов из пяти есть звезды, поэтому слово без знака сразу заметно.'], cobrand('c3-co')));
  h.push(sec('c3-color', 'черное и белое', ['Красный и синий — только для акцентов.'],
    palette([['#FFFFFF', 2, 'белый', '#121314'], ['#000000', 2, 'черный'], ['#E71E26', .7, 'акценты'], ['#0044FF', .7, ' ']])));
  h.push(sec('c3-font', 'шрифт', [], typeBlock('engine')));
  h.push(sec('c3-app', 'звезда остается в иконке', ['Слово мелко не читается, поэтому в иконке и во вкладке браузера — звезда (отсылка к прежнему знаку ради преемственности; в остальном она только мелкий штрих).'], app('c3')));
  h.push(sec('c3-site', 'пример экрана сайта', [], site('c3')));
  h.push(sec('c3-tokens', 'жетоны вместо монеты', ['В этой концепции вместо монеты сувениром становятся жетоны из переработанного пластика с переливами.'],
    '<div class="as-tokens">' + [['token_white', 'ink'], ['token_black', 'paper']].map(function (t) {
      return '<div class="as-3d ' + t[1] + '" data-model="' + t[0] + '" data-orbit="15deg 80deg 4.6m"><div class="sk"></div><div class="hand" aria-hidden="true">' + ICON.hand + '</div></div>';
    }).join('') + '</div>'));
  h.push(sec('c3-tee', 'футболка турнира', [],
    '<div class="as-grid as-g2">' + ph('c3-tee-front') + ph('c3-tee-back') + '</div>'));

  // ---------- итог ----------
  h.push('<section class="as-sec" id="sum" data-slide>' + tx('саммари: три пути', []) +
    '<div class="as-wrap as-vis as-up"><div class="as-cmp">' + ['c1', 'c2', 'c3'].map(function (id) {
      var c = C[id];
      return '<a href="#' + id + '" style="background:' + (id === 'c1' ? 'var(--soft)' : c.bg) + ';color:' + (id === 'c2' ? '#fff' : 'var(--ink)') + '"><span><img src="' + svg(c.mark) + '" alt="" loading="lazy"></span><b>' + c.name + '</b></a>';
    }).join('') + '</div></div>' +
    '<div class="as-wrap as-vis"><div class="as-tx as-up"><h2 class="as-h2">что дальше</h2><div><p class="as-p">' + T('Обратная связь — одним документом: все замечания и правки списком. Дальше — выбор концепции и ее раскрытие на носителях следующего этапа.') + '</p></div></div></div></section>');
  h.push('<section class="as-thanks" data-slide><div class="as-wrap"><h2>спасибо<br>за просмотр</h2></div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><div class="in"><span>армия спорта, ребрендинг, первый этап</span><span>Даша Купцова, <a href="https://kupdasha.ru/full">kupdasha.ru</a></span></div></div></footer>');
  h.push('<div class="as-lb" role="dialog" aria-label="картинка крупно"><img alt=""></div>');

  root.innerHTML = h.join('');

  // ====================================================================================
  //   ЖИЗНЬ
  // ====================================================================================
  var $ = function (s, el) { return (el || root).querySelector(s); };
  var $$ = function (s, el) { return [].slice.call((el || root).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function watchImg(img) {
    var box = img.closest('.as-ph'); if (!box) return;
    function ok() { box.classList.add('ok'); }
    if (img.complete && img.naturalWidth) ok(); else { img.addEventListener('load', ok); img.addEventListener('error', ok); }
  }
  $$('.as-ph img').forEach(watchImg);

  // скелет страницы уходит, когда готовы шрифты
  (function () {
    var sk = document.getElementById('as-skel'); if (!sk) return;
    var done = false;
    function off() { if (done) return; done = true; sk.classList.add('off'); setTimeout(function () { sk.remove(); }, 600); }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(off);
    setTimeout(off, 1800);
  })();

  // появление
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.as-up,.as-army,.as-herit,.as-divide').forEach(function (el) { io.observe(el); });
  // обложки с новым знаком: анимация, когда обложка видна почти целиком
  var ioCover = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var c = e.target;
      if (e.intersectionRatio >= .2 && !c.classList.contains('in')) { if (c.prep) c.prep(); void c.offsetWidth; c.classList.add('in'); }
      else if (!e.isIntersecting) c.classList.remove('in');
    });
  }, { threshold: [0, .2, .4] });
  $$('.as-cover.c2,.as-cover.c3').forEach(function (el) { ioCover.observe(el); });
  $$('.as-cover.c3 .mark img').forEach(function (img) {
    // просвет буквы «о» в «спорта»: центр 41,35 % × 71,2 %, ширина 9,9 % знака
    function prep() {
      var ew = img.clientWidth, eh = img.clientHeight, k = (img.naturalWidth / img.naturalHeight) || 1.947, cw = Math.min(ew, eh * k), ch = cw / k;
      img.style.transformOrigin = ((ew - cw) / 2 + cw * .4135).toFixed(1) + 'px ' + ((eh - ch) / 2 + ch * .712).toFixed(1) + 'px';
      img.style.setProperty('--s', Math.min(innerWidth < 700 ? 6 : 9, Math.max(innerWidth, innerHeight) * 1.2 / (cw * .099)).toFixed(1));
    }
    img.closest('.as-cover').prep = prep;
    if (img.complete) prep(); else img.addEventListener('load', prep);
    addEventListener('resize', function () { if (!img.closest('.as-cover').classList.contains('in')) prep(); });
  });

  // задача: раскрыть и свернуть
  $$('.as-toggle').forEach(function (b) {
    var panel = b.closest('.as-sec').querySelector('.as-brief'), label = b.textContent;
    b.addEventListener('click', function () {
      var open = panel.hidden;
      panel.hidden = !open;
      b.setAttribute('aria-expanded', open);
      b.textContent = open ? b.dataset.open : label;
      if (open) $$('.as-up,.as-army', panel).forEach(function (el) { io.observe(el); });
      else window.scrollTo({ top: b.closest('.as-sec').getBoundingClientRect().top + scrollY, behavior: 'smooth' });
    });
  });

  // шапка: текущий раздел, цвет под фон; кнопка наверх
  var top = $('.as-top'), upBtn = $('.as-up-btn'), darks = $$('.as-cover.c2,.as-divide,.as-glass,.as-thanks'), links = $$('.as-top nav a'), marks = ['brief', 'c1', 'c2', 'c3', 'sum'].map(function (id) { return document.getElementById(id); });
  var navCur = -2;
  function onScroll() {
    var cur = -1;
    marks.forEach(function (m, i) { if (m && m.getBoundingClientRect().top < innerHeight * .45) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    // на телефоне и планшете меню прокручивается: текущий раздел встает первым
    if (cur !== navCur) {
      navCur = cur;
      var nav = links[0] && links[0].parentNode;
      if (nav && nav.scrollWidth > nav.clientWidth + 2) {
        var x = cur < 0 ? 0 : links[cur].getBoundingClientRect().left - nav.getBoundingClientRect().left + nav.scrollLeft;
        nav.scrollTo({ left: x, behavior: 'smooth' });
      }
    }
    var light = false;
    darks.forEach(function (d) { var r = d.getBoundingClientRect(); if (r.top <= 32 && r.bottom > 32) light = true; });
    top.classList.toggle('light', light);
    var ft = $('.as-foot').getBoundingClientRect();
    upBtn.classList.toggle('on', scrollY > innerHeight && ft.top > innerHeight);
    upBtn.classList.toggle('light', light);
    if (G) G();
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', function () { if (G) G(); });
  upBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  // якоря — кодом (на Тильде ссылки с # перехватываются)
  function go(id) { var el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + scrollY, behavior: reduce ? 'auto' : 'smooth' }); }
  root.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    e.preventDefault(); e.stopPropagation(); go(a.getAttribute('href').slice(1));
  }, true);

  // стрелки ← → — к следующей главе, как в презентации
  var slides = $$('[data-slide]');
  addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if ($('.as-lb.on')) { if (e.key === 'Escape') closeLb(); return; }
    var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!dir) return;
    e.preventDefault();
    var y = scrollY + 2, i;
    if (dir > 0) { for (i = 0; i < slides.length; i++) if (slides[i].getBoundingClientRect().top + scrollY > y + 10) break; }
    else { for (i = slides.length - 1; i >= 0; i--) if (slides[i].getBoundingClientRect().top + scrollY < y - 10) break; }
    if (slides[i]) window.scrollTo({ top: slides[i].getBoundingClientRect().top + scrollY, behavior: 'smooth' });
  });

  function whileVisible(el, fn, ms) {
    var t = null;
    new IntersectionObserver(function (es) { es.forEach(function (e) {
      if (e.isIntersecting && !t) t = setInterval(fn, ms); else if (!e.isIntersecting && t) { clearInterval(t); t = null; }
    }); }).observe(el);
  }

  // ---------- пресс-волл: все логотипы разом, ряды со сдвигом, стена медленно едет ----------
  $$('.as-wall').forEach(function (wall) {
    var list = PARTNERS(wall.dataset.own);
    function build() {
      var W = wall.clientWidth || 1000, n = innerWidth < 640 ? 3 : 6, cw = W / n, ch = cw * .7, cols = n + 6, rows = Math.max(2, Math.floor((innerWidth < 640 ? 440 : Math.min(820, W * .58)) / ch)), s = '';
      wall.style.height = (rows * ch) + 'px';
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) s += '<img src="' + svg(list[(c + r * 3) % list.length]) + '" alt="" loading="lazy">';
      wall.innerHTML = '<div class="tile" style="--n:' + cols + ';--cw:' + cw + 'px;--ch:' + ch + 'px">' + s + '</div>';
    }
    build();
    var w0 = innerWidth; addEventListener('resize', function () { if (Math.abs(innerWidth - w0) > 40) { w0 = innerWidth; build(); } });
  });

  // ---------- 3D: грузится заранее, показывается сразу; рука уходит после первого касания ----------
  var MV_SRC = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js', mvLoading = null;
  function loadMV() {
    if (window.customElements && customElements.get('model-viewer')) return Promise.resolve();
    if (mvLoading) return mvLoading;
    mvLoading = new Promise(function (ok, no) { var s = document.createElement('script'); s.type = 'module'; s.src = MV_SRC; s.onload = ok; s.onerror = no; document.head.appendChild(s); })
      .then(function () { return customElements.whenDefined('model-viewer'); });
    return mvLoading;
  }
  var io3d = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var box = e.target; io3d.unobserve(box);
      loadMV().then(function () {
        box.insertAdjacentHTML('beforeend', '<model-viewer src="' + IMG + box.dataset.model + '.glb" environment-image="' + IMG + 'studio.hdr" camera-controls auto-rotate auto-rotate-delay="0" rotation-per-second="18deg" interaction-prompt="none" touch-action="pan-y" tone-mapping="neutral" exposure="1" shadow-intensity="0.7" shadow-softness="0.9"' + (box.dataset.orbit ? ' camera-orbit="' + box.dataset.orbit + '"' : '') + ' disable-zoom alt="3D-модель"></model-viewer>');
        var mv = $('model-viewer', box), hand = $('.hand', box);
        mv.addEventListener('load', function () {
          box.classList.add('ready');
          if (box.dataset.model === 'coin_mirror' && mv.model) mv.model.materials.forEach(function (m) {
            if (m.name !== 'Grid_web') return;
            var p = m.pbrMetallicRoughness;
            if (p.metallicRoughnessTexture) p.metallicRoughnessTexture.setTexture(null);
            p.setMetallicFactor(1); p.setRoughnessFactor(.5);
          });
          if (box.dataset.model === 'stela' && mv.model) mv.model.materials.forEach(function (m) {
            var p = m.pbrMetallicRoughness, c = p.baseColorFactor;
            if (c[0] < .05) { p.setBaseColorFactor([.035, .036, .04, 1]); p.setRoughnessFactor(.32); p.setMetallicFactor(.15); }
          });
        });
        mv.addEventListener('error', function () { hand.classList.add('off'); box.classList.add('fail'); });
        mv.addEventListener('pointerdown', function () { hand.classList.add('off'); }, { once: true });
      }).catch(function () {});
    });
  }, { rootMargin: '900px 0px' });
  $$('.as-3d').forEach(function (b) { io3d.observe(b); });

  // ---------- смена фокуса: монета ⇄ отражение, с размытием, как объектив ----------
  $$('.as-focus').forEach(function (f) {
    var it = $$('.as-ph', f), k = 0;
    function show(j) { k = j; it.forEach(function (x, i) { x.classList.toggle('cur', i === j); }); }
    f.addEventListener('click', function () { show((k + 1) % it.length); });
    if (!reduce) whileVisible(f, function () { show((k + 1) % it.length); }, 3000);
  });

  // лупа над рельефом
  $$('.as-flipper[data-loupe]').forEach(function (f) {
    var it = $('.as-ph', f), lp = document.createElement('div'); lp.className = 'as-loupe'; f.appendChild(lp);
    f.addEventListener('pointermove', function (e) {
      var r = f.getBoundingClientRect(), img = $('img', it), src = img && (img.currentSrc || img.src); if (!src) return;
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height, Z = 2.6, L = lp.offsetWidth, fw = r.width * .88 * Z;
      lp.style.left = (e.clientX - r.left - L / 2) + 'px'; lp.style.top = (e.clientY - r.top - L / 2) + 'px';
      lp.style.backgroundImage = 'url(' + src.replace('-s.webp', '.webp') + ')';
      lp.style.backgroundSize = fw + 'px ' + fw + 'px';
      lp.style.backgroundPosition = (L / 2 - (px - .06) / .88 * fw) + 'px ' + (L / 2 - (py - .06) / .88 * fw) + 'px';
      lp.classList.add('on');
    });
    f.addEventListener('pointerleave', function () { lp.classList.remove('on'); });
  });

  // знак на разных фонах: фон меняется сам, нажатие — к нужному
  $$('.as-sw').forEach(function (w) {
    var tabs = $$('.as-sw-tabs button', w), bands = $$('.band', w), k = 0, t = null;
    function show(j) {
      k = j;
      tabs.forEach(function (b, i) { b.classList.toggle('on', i === j); b.classList.remove('run'); });
      bands.forEach(function (b, i) { b.classList.toggle('on', i === j); });
      if (t) { void tabs[j].offsetWidth; tabs[j].classList.add('run'); }
    }
    function start() { if (t || reduce) return; t = setInterval(function () { show((k + 1) % bands.length); }, 2200); show(k); }
    function stop() { clearInterval(t); t = null; tabs.forEach(function (b) { b.classList.remove('run'); }); }
    tabs.forEach(function (b, i) { b.addEventListener('click', function () { stop(); show(i); start(); }); });
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) start(); else stop(); }); }, { threshold: .3 }).observe(w);
  });

  // новая звезда вылетает из звезды внутри нынешней «А» и встает на место; повторяется при каждом возвращении к блоку
  $$('.as-wasnow.fly').forEach(function (w) {
    var old = $('.old', w), star = $('.star', w), word = $('.word', w), up = w.closest('.as-up'), busy = false, timer = 0;
    if (reduce || !star.animate) return;
    w.classList.add('wait');
    function play() {
      var a = old.getBoundingClientRect(), b = star.getBoundingClientRect();
      if (!a.width || !b.width) { timer = setTimeout(play, 200); return; }
      busy = true;
      // звезда в старом знаке: центр 63 % × 45 %, ширина 34 %; в новом знаке: центр 55,5 % × 26 %, ширина 78 %
      var dx = a.left + a.width * .63 - (b.left + b.width * .555), dy = a.top + a.height * .45 - (b.top + b.height * .26), s0 = a.width * .34 / (b.width * .78);
      star.style.transformOrigin = '55.5% 26%';
      w.classList.remove('wait');
      var from = 'translate(' + dx + 'px,' + dy + 'px) scale(' + s0 + ') rotate(-12deg)';
      var an = star.animate([
        { transform: from, opacity: 0 },
        { transform: from, opacity: 1, offset: .18 },
        { transform: from + ' scale(1.08)', opacity: 1, offset: .3 },
        { transform: 'none', opacity: 1 }
      ], { duration: 2200, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'backwards' });
      word.animate([{ opacity: 0, transform: 'translateY(4%)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: 1800, easing: 'ease-out', fill: 'backwards' });
      an.onfinish = function () { busy = false; };
    }
    function arm() {
      clearTimeout(timer);
      var tries = 0;
      (function wait() { if ((up && !up.classList.contains('in')) && tries++ < 40) { timer = setTimeout(wait, 100); return; } timer = setTimeout(play, 500); })();
    }
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { if (!busy) arm(); }
        else if (!busy) { clearTimeout(timer); w.classList.add('wait'); }
      });
    }, { threshold: .35 }).observe(w);
  });

  // зеркальный текст на стене: серебро переливается от курсора, прокрутки и наклона телефона
  $$('.as-mtext').forEach(function (box) {
    fetch(IMG + 'c2-wall-text.svg').then(function (r) { return r.text(); }).then(function (txt) {
      var paths = (txt.match(/<path [^>]*\/>/g) || []).join('');
      box.insertAdjacentHTML('beforeend', '<svg class="mt" viewBox="0 0 2720 1536" preserveAspectRatio="none" aria-hidden="true"><defs>' +
        '<linearGradient id="mtChrome" gradientUnits="userSpaceOnUse" x1="760" y1="420" x2="1260" y2="900" spreadMethod="reflect">' +
        [[0, '#2e3238'], [.14, '#f4f6f9'], [.26, '#6f767f'], [.4, '#ffffff'], [.5, '#a9b0b9'], [.64, '#23272c'], [.8, '#e6eaef'], [1, '#4a5058']].map(function (s) { return '<stop offset="' + s[0] + '" stop-color="' + s[1] + '"/>'; }).join('') + '</linearGradient>' +
        '<pattern id="mtRoom" patternUnits="userSpaceOnUse" x="700" y="-60" width="1300" height="734"><image href="' + IMG + 'c2-reflect.webp" width="1300" height="734" preserveAspectRatio="none"/></pattern>' +
        '<mask id="mtMask" maskUnits="userSpaceOnUse" x="0" y="0" width="2720" height="1536"><g fill="#fff">' + paths + '</g></mask></defs>' +
        '<g mask="url(#mtMask)"><rect x="0" y="0" width="2720" height="1536" fill="url(#mtRoom)"/><rect class="sheen" x="0" y="0" width="2720" height="1536" fill="url(#mtChrome)"/></g></svg>');
      var grad = $('#mtChrome', box), room = $('#mtRoom', box), cur = 0, goal = 0, raf = 0, seen = false;
      function set(p) { goal = Math.max(-1.2, Math.min(1.2, p)); }
      // отражение зала плывет само (легкая волна) и быстро догоняет курсор, прокрутку или наклон телефона
      function step(now) {
        raf = 0; if (!seen) return;
        var drift = reduce ? 0 : Math.sin(now / 1400) * .35 + Math.sin(now / 610) * .12;
        cur += (goal - cur) * .22;
        var v = cur + drift;
        room.setAttribute('x', 700 - v * 260); room.setAttribute('y', -60 - v * 90);
        grad.setAttribute('gradientTransform', 'translate(' + (v * 520) + ' ' + (v * -70) + ')');
        raf = requestAnimationFrame(step);
      }
      new IntersectionObserver(function (es) { seen = es[0].isIntersecting; if (seen && !raf) raf = requestAnimationFrame(step); }).observe(box);
      function onScroll() { var r = box.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; set(((r.top + r.height / 2) / innerHeight - .5) * -2.4); }
      box.addEventListener('pointermove', function (e) { var r = box.getBoundingClientRect(); set(((e.clientX - r.left) / r.width - .5) * 2.2); });
      addEventListener('scroll', onScroll, { passive: true });
      addEventListener('deviceorientation', function (e) { if (e.gamma != null) set(e.gamma / 25); });
      onScroll();
    }).catch(function () {});
  });

  // брелоки: микроповороты за курсором или пальцем, блик на серебре
  $$('.as-keys').forEach(function (box) {
    var tags = $$('.tag', box);
    function move(x, y) {
      tags.forEach(function (t) {
        var r = t.getBoundingClientRect(), dx = Math.max(-1, Math.min(1, (x - r.left - r.width / 2) / r.width)), dy = Math.max(-1, Math.min(1, (y - r.top - r.height / 2) / r.height));
        t.style.setProperty('--ry', (dx * 18).toFixed(1) + 'deg'); t.style.setProperty('--rx', (-dy * 14).toFixed(1) + 'deg'); t.style.setProperty('--sx', (50 + dx * 60).toFixed(0) + '%');
      });
    }
    box.addEventListener('pointermove', function (e) { box.classList.add('live'); move(e.clientX, e.clientY); });
    box.addEventListener('pointerleave', function () { box.classList.remove('live'); tags.forEach(function (t) { t.style.removeProperty('--ry'); t.style.removeProperty('--rx'); t.style.removeProperty('--sx'); }); });
    // на телефоне и планшете курсора нет — брелоки поворачиваются при прокрутке
    if (matchMedia('(hover: none)').matches && !reduce) {
      var raf = 0;
      function tilt() {
        raf = 0;
        var r0 = box.getBoundingClientRect(); if (r0.bottom < 0 || r0.top > innerHeight) return;
        tags.forEach(function (t, i) {
          var r = t.getBoundingClientRect(), p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / (innerHeight / 2)));
          t.style.setProperty('--rx', (p * -16).toFixed(1) + 'deg');
          t.style.setProperty('--ry', (Math.sin(i * 1.7 + p * 3) * 16).toFixed(1) + 'deg');
          t.style.setProperty('--sx', (50 + p * 70).toFixed(0) + '%');
        });
      }
      box.classList.add('live');
      addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(tilt); }, { passive: true });
      tilt();
    }
  });

  // бесконечные анимации играют только на экране
  var ioLoop = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('off', !e.isIntersecting); }); }, { rootMargin: '100px 0px' });
  $$('.as-wall,.as-mirror,.as-keys,.as-3d,.as-pal').forEach(function (el) { el.classList.add('off'); ioLoop.observe(el); });

  // постеры в зале
  $$('.as-posters').forEach(function (box) {
    var it = $$('.as-ph', box), k = 0;
    function show(j) { k = j; it.forEach(function (x, i) { x.classList.toggle('cur', i === j); }); }
    box.addEventListener('click', function () { show((k + 1) % it.length); });
    if (!reduce) whileVisible(box, function () { show((k + 1) % it.length); }, 2400);
  });

  // зеркало: блик идет за курсором, без курсора — медленно ходит сам
  $$('.as-mirror').forEach(function (m) {
    m.addEventListener('pointermove', function (e) {
      var r = m.getBoundingClientRect();
      m.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      m.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      m.classList.add('hover');
    });
    m.addEventListener('pointerleave', function () { m.classList.remove('hover'); });
  });

  // иконка появляется в телефоне
  $$('.as-phonebox').forEach(function (box) {
    var me = $('.as-a.me', box);
    new IntersectionObserver(function (es, o) { es.forEach(function (e) { if (e.isIntersecting) { setTimeout(function () { me.classList.add('on'); }, 250); o.disconnect(); } }); }, { threshold: .4 }).observe(box);
  });

  // промо-ролик — играет, только когда на экране; на телефоне легкая версия
  var vio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v.src) v.src = IMG + (innerWidth < 700 ? 'promo-s.mp4' : 'promo.mp4'); var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else if (v.src) v.pause();
    });
  }, { rootMargin: '200px 0px' });
  if (!reduce) $$('video').forEach(function (v) { vio.observe(v); });

  // ---------- стеклянная звезда во весь экран: прокрутка сажает ее на место иконки в телефоне ----------
  var G = (function () {
    var sec = $('.as-glass'); if (!sec) return null;
    var cv = $('canvas', sec), say = $('.say', sec), ph = $('.ph', sec), slot = $('.as-a.slot i', sec), slotImg = $('img', slot);
    var gl = cv.getContext('webgl', { antialias: false });
    if (!gl) { sec.style.display = 'none'; return null; }
    var draw = glassShader(gl, cv), visible = false, raf = 0;
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(loop); }, { rootMargin: '100px' }).observe(sec);
    function loop(now) { if (!visible) { raf = 0; return; } draw(now); raf = requestAnimationFrame(loop); }
    function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    return function () {
      var r = sec.getBoundingClientRect(), vh = innerHeight, vw = innerWidth;
      if (r.bottom < 0 || r.top > vh) return;
      var p = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
      var t = ease(Math.min(1, Math.max(0, (p - .25) / .6)));
      say.style.opacity = Math.max(0, 1 - p / .2);
      // телефон поднимается снизу и встает так, что видны два ряда иконок
      var Hp = ph.offsetHeight, ty0 = Hp * 1.05, ty1 = Hp * .615;
      ph.style.transform = 'translate(-50%,' + (ty0 + (ty1 - ty0) * t) + 'px)';
      // стекло уменьшается до иконки и на последних процентах становится нарисованной иконкой
      var s = slot.getBoundingClientRect(), icon = Math.min(vh, vw) * .6, cx = vw / 2, cy = vh / 2;
      var k = 1 + (s.width / icon - 1) * t;
      var tX = cx + (s.left + s.width / 2 - cx) * t - cx * k, tY = cy + (s.top + s.height / 2 - cy) * t - cy * k;
      var inX = (vw - icon) / 2 * t, inY = (vh - icon) / 2 * t, rad = icon * .23 * t;
      cv.style.transform = 'translate(' + tX + 'px,' + tY + 'px) scale(' + k + ')';
      cv.style.clipPath = 'inset(' + inY + 'px ' + inX + 'px ' + inY + 'px ' + inX + 'px round ' + rad + 'px)';
      var swap = Math.min(1, Math.max(0, (p - .9) / .08));
      cv.style.opacity = 1 - swap; slotImg.style.opacity = swap;
    };
  })();

  function glassShader(gl, canvas) {
    var vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
    var fs = 'precision highp float;uniform vec2 res;uniform float t;uniform sampler2D star;\n#define TAU 6.28318530718\n' +
      'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}' +
      'vec3 pal(float x){vec3 c[6];c[0]=vec3(.03,.16,1.);c[1]=vec3(.35,.6,1.);c[2]=vec3(1.);c[3]=vec3(1.,.22,.12);c[4]=vec3(.8,.02,.1);c[5]=vec3(.1,.05,.38);x=fract(x)*6.;float f=smoothstep(0.,1.,fract(x));int i=int(floor(x));vec3 a=c[0],b=c[1];for(int k=0;k<6;k++){if(k==i){a=c[k];b=c[k==5?0:k+1];}}return mix(a,b,f);}' +
      'float field(vec2 sp){float T=TAU*t;float w1=sin(sp.x*1.5+T+.6*sin(sp.y*1.1-T));float w2=sin(sp.y*1.2-sp.x*.7+2.*T+1.3);return sp.y*.2+sp.x*.05+w1*.13+w2*.07-t;}' +
      'const float NP=4.6;float sdf(vec2 q){return pow(pow(abs(q.x),NP)+pow(abs(q.y),NP),1./NP);}' +
      'vec3 glass(vec2 q){float d=sdf(q);vec2 g=vec2(sign(q.x)*pow(abs(q.x),NP-1.),sign(q.y)*pow(abs(q.y),NP-1.));vec2 nd=normalize(g+1e-6);float B=.52;float s=clamp((d-(1.-B))/B,0.,.99);float slope=s/sqrt(1.-s*s);float m=min(.75*slope,2.8);vec2 base=q*mix(.8,1.,d);vec3 c;c.r=pal(field(base-nd*m)).r;c.g=pal(field(base-nd*m*1.08)).g;c.b=pal(field(base-nd*m*1.16)).b;c*=1.-.22*smoothstep(.35,.75,s)*(1.-smoothstep(.8,.97,s));return c;}' +
      'vec3 hx(float r,float g,float b){return vec3(r,g,b)/255.;}' +
      'vec3 bgGrad(float y){vec3 c0=hx(26.,66.,244.),c1=hx(19.,50.,184.),c2=hx(12.,33.,123.),c3=hx(8.,18.,62.),c4=hx(7.,7.,26.),c5=hx(6.,0.,1.);if(y<.25)return mix(c0,c1,y/.25);if(y<.5)return mix(c1,c2,(y-.25)/.25);if(y<.75)return mix(c2,c3,(y-.5)/.25);if(y<.9)return mix(c3,c4,(y-.75)/.15);return mix(c4,c5,(y-.9)/.1);}' +
      'const float SK=1.288;const vec2 SOFF=vec2(.012,.002);float starA(vec2 q,float bias){vec2 st=(q-SOFF)/(2.*SK)+.5;if(st.x<0.||st.y<0.||st.x>1.||st.y>1.)return 0.;return texture2D(star,st,bias).a;}' +
      'void main(){vec2 uv=(gl_FragCoord.xy-.5*res)/min(res.x,res.y);float S=.30;vec2 q=uv/S;float d=sdf(q);vec3 inner=glass(q);float rim=smoothstep(.9,1.,d);inner=mix(inner,inner*1.5+.1,rim*.7);float line=exp(-pow((d-.982)/.012,2.));inner+=line*(inner*.8+.3);inner=1.-exp(-inner*1.7);float sa=starA(q,0.);float sg=starA(q,5.5);inner=mix(inner,vec3(1.),sa);inner+=sg*.18*(1.-sa);vec3 bg=bgGrad(gl_FragCoord.y/res.y);vec2 ep=q/max(d,1e-4);vec3 ec=pal(field(ep*.55));float g=max(d-1.,0.);float gw=max(length(q)-1.05,0.);vec3 glow=1.-exp(-ec*(exp(-g*14.)*.7+exp(-gw*3.2)*.3)*1.7);vec3 outer=1.-(1.-bg)*(1.-glow);float aa=1.6/(min(res.x,res.y)*S);float a=1.-smoothstep(1.-aa,1.+aa,d);vec3 col=mix(outer,inner,a);col+=(hash(gl_FragCoord.xy)-.5)*.012;gl_FragColor=vec4(col,1.);}';
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn('as-glass', gl.getShaderInfoLog(s)); return s; }
    var prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog); gl.useProgram(prog);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var uRes = gl.getUniformLocation(prog, 'res'), uT = gl.getUniformLocation(prog, 't');
    var tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.uniform1i(gl.getUniformLocation(prog, 'star'), 0);
    var STAR = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 664"><path d="M679.14 246H461.98L414.16 0L266.35 246H0L193.64 367L15.19 664L166.52 605.91L300.46 383L355.23 533.47L506.56 475.38L485.5 367L679.14 246Z" fill="white"/></svg>';
    var img = new Image();
    img.onload = function () {
      var N = 1024, pad = N * .2, c = document.createElement('canvas'); c.width = c.height = N;
      var x = c.getContext('2d'), w = N - pad * 2, hh = w * 664 / 680; x.drawImage(img, pad, (N - hh) / 2, w, hh);
      gl.bindTexture(gl.TEXTURE_2D, tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(STAR);
    var t0 = performance.now();
    return function (now) {
      var dpr = Math.min(devicePixelRatio || 1, 1.5), w = Math.round(canvas.clientWidth * dpr), hgt = Math.round(canvas.clientHeight * dpr);
      if (w && (canvas.width !== w || canvas.height !== hgt)) { canvas.width = w; canvas.height = hgt; gl.viewport(0, 0, w, hgt); }
      gl.uniform2f(uRes, canvas.width, canvas.height); gl.uniform1f(uT, (((now || performance.now()) - t0) / 8000) % 1);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
  }

  onScroll();

  // ---------- крупно по нажатию ----------
  var lb = $('.as-lb'), lbImg = $('img', lb);
  function closeLb() { lb.classList.remove('on'); lbImg.removeAttribute('src'); document.documentElement.style.overflow = ''; }
  root.addEventListener('click', function (e) {
    var z = e.target.closest('.as-ph.zoom');
    if (z) { lbImg.src = z.dataset.big; lb.classList.add('on'); document.documentElement.style.overflow = 'hidden'; }
  });
  lb.addEventListener('click', closeLb);
})();
