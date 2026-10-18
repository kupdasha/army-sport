/* «Армия спорта», первый этап — презентация-сайт.
   Вся страница собирается здесь: тексты, картинки, живые главы. Разметки в Тильде — только корень #as и скелет загрузки.
   Картинки — img (у каждой -s — легкая копия 820 px для телефона), модели наград — img/*.glb.
   Адрес файлов: window.AS_BASE (на Тильде загрузчик ставит адрес jsDelivr по номеру версии), локально — та же папка. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = BASE + 'img/';
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as');
  root.setAttribute('lang', 'ru');

  // пропорции картинок (ширина к высоте) — место под картинку занято сразу, страница не прыгает при загрузке
  var R = {'c1-art-a':1.7752,'c1-art-b':1.777,'c1-art-c':1.7801,'c1-award-man':1.7778,'c1-award-row':2.5862,'c1-award-stack':0.9992,'c1-coin-a':1.4684,'c1-coin-b':1.4684,'c1-coin-side':1.0034,'c1-coin':1,'c1-fighter':1,'c1-keys-b':1.7786,'c1-keys-flat':1.5598,'c1-labels':3.334,'c1-polo-a':0.7998,'c1-polo-b':0.8005,'c1-polo-c':1.0678,'c1-slides-2':1,'c1-slides':1,'c1-tee-back':0.7998,'c1-tee-front':0.7998,'c1-wall-a':1.7778,'c1-wall-b':1.7778,'c1-wear-a':1,'c1-wear-b':1,'c1-wear-c':1.0008,'c2-award-man':1.7778,'c2-award-row':2.5862,'c2-award-stack':1.075,'c2-coin-a':0.9174,'c2-coin-b':0.9174,'c2-coin-c':0.9174,'c2-coin':0.9819,'c2-keys-a':1,'c2-keys-b':0.9992,'c2-keys-flat':1.5598,'c2-mirror-a':0.9609,'c2-mirror-b':0.9593,'c2-poster-a':1,'c2-poster-b':1,'c2-poster-c':1,'c2-poster-d':1,'c2-poster-e':1,'c2-slides-2':1,'c2-slides':1,'c2-tee-b':0.7504,'c2-wall':1.772,'c2-wear-a':1,'c2-wear-b':1,'c2-wear-c':1,'c2-wear-d':1,'c3-tee-back':0.7998,'c3-tee-front':0.7998,'old-site':1.7181,'old-story':0.5619,'old-tg':1.526,'old-vk':1.4671,'old-yt':1.6994};

  // ---------- типограф: короткие слова держатся за следующим, тире — за предыдущим ----------
  function nb(t) {
    return String(t).replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ').replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ').replace(/\s—/g, ' —');
  }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function T(t) { return esc(nb(t)); }

  // ---------- картинка с местом под себя и скелетом ----------
  function ph(name, o) {
    o = o || {};
    var r = o.ratio || R[name] || 1;
    var big = IMG + name + '.webp', small = IMG + name + '-s.webp';
    return '<div class="as-ph' + (o.zoom === false ? '' : ' zoom') + (o.cls ? ' ' + o.cls : '') + '" style="aspect-ratio:' + r + (o.style ? ';' + o.style : '') + '" data-big="' + big + '">' +
      '<img src="' + small + '" srcset="' + small + ' 820w, ' + big + ' 1800w" sizes="' + (o.sizes || '(max-width:640px) 100vw, 60vw') + '" alt="' + esc(o.alt || '') + '"' + (o.eager ? '' : ' loading="lazy"') + ' decoding="async"></div>';
  }
  function svg(name) { return IMG + name + '.svg'; }
  function fig(name, cap, o) { return '<figure class="' + ((o && o.cls) || '') + '">' + ph(name, o) + (cap ? '<figcaption class="as-cap">' + T(cap) + '</figcaption>' : '') + '</figure>'; }
  function side(kicker, title, text, extra) {
    return '<div class="as-side as-up">' + (kicker ? '<p class="as-kicker">' + T(kicker) + '</p>' : '') + '<h3 class="as-h3">' + T(title) + '</h3>' +
      (text ? [].concat(text).map(function (p) { return '<p class="as-txt">' + T(p) + '</p>'; }).join('') : '') + (extra || '') + '</div>';
  }
  function chapter(id, s, v, wide) { return '<div class="as-ch' + (wide ? ' wide' : '') + '" id="' + id + '" data-slide>' + s + '<div class="as-vis as-up">' + v + '</div></div>'; }

  // ---------- пиктограммы (линия 1,6 px, без заливки) ----------
  var ICON = {
    partners: '<svg viewBox="0 0 44 44"><rect x="3" y="12" width="17" height="20" rx="3"/><rect x="24" y="12" width="17" height="20" rx="3"/><path d="M11.5 18v8M32.5 18v8"/></svg>',
    star: '<svg viewBox="0 0 44 44"><path d="M22 4l5.2 11.6 12.6 1.3-9.4 8.5 2.6 12.4L22 31.5l-11 6.3 2.6-12.4-9.4-8.5 12.6-1.3z"/></svg>',
    fresh: '<svg viewBox="0 0 44 44"><path d="M8 34L34 8M16 8h18v18"/></svg>',
    people: '<svg viewBox="0 0 44 44"><circle cx="11" cy="15" r="4.5"/><circle cx="22" cy="12" r="4.5"/><circle cx="33" cy="15" r="4.5"/><path d="M3 34c1-6 4.5-9 8-9s5 1.5 6.5 3.5M41 34c-1-6-4.5-9-8-9s-5 1.5-6.5 3.5M14 36c1-7 4.5-10.5 8-10.5S29 29 30 36"/></svg>',
    sports: '<svg viewBox="0 0 44 44"><circle cx="13" cy="13" r="8"/><circle cx="31" cy="13" r="8"/><circle cx="13" cy="31" r="8"/><circle cx="31" cy="31" r="8"/><path d="M5 13h16M31 5v16M7.5 25.5l11 11M23 31h16"/></svg>',
    carriers: '<svg viewBox="0 0 44 44"><rect x="4" y="6" width="14" height="26" rx="3"/><circle cx="32" cy="16" r="9"/><path d="M24 38h16M8 27h6"/></svg>',
    fighter: '<svg viewBox="0 0 56 56"><circle cx="28" cy="10" r="5.5"/><path d="M28 16v17M14 22l14 4 14-4M18 50l10-17 10 17"/></svg>',
    boss: '<svg viewBox="0 0 56 56"><circle cx="28" cy="11" r="6"/><path d="M15 50V30c0-6 5-10 13-10s13 4 13 10v20M28 20l-3 6 3 14 3-14-3-6"/></svg>',
    runner: '<svg viewBox="0 0 56 56"><circle cx="34" cy="9" r="5.5"/><path d="M31 17l-7 14 9 5-3 14M24 31l-10 2M30 18l9 7 8-3M33 36l9 4"/></svg>',
    family: '<svg viewBox="0 0 56 56"><circle cx="19" cy="10" r="5.5"/><path d="M19 17v17M9 26l10-4 10 4M12 50l7-16 7 16"/><circle cx="39" cy="26" r="4"/><path d="M39 31v10M32 36l7-2 7 2M34 50l5-9 5 9M29 26l6 6"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7z M3 7l9 5 9-5 M12 12v10"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>'
  };

  var SPORTS = [
    ['единоборства', 'вольная борьба, греко-римская борьба, дзюдо, бокс, кикбоксинг, тхэквондо, фехтование, грэпплинг'],
    ['игровые', 'футбол, мини-футбол, баскетбол, волейбол, регби, теннис, бадминтон'],
    ['циклические и сила', 'легкая атлетика, плавание, гребля на байдарках и каноэ, академическая гребля, тяжелая атлетика, современное пятиборье'],
    ['«эстетические»', 'спортивная гимнастика, художественная гимнастика, фигурное катание, прыжки в воду'],
    ['природа и точность', 'горные лыжи, парусный спорт, стрельба из лука']
  ];

  // ---------- концепции ----------
  var C = [
    { id: 'c1', tab: 'первая', dot: 'var(--red)', name: 'преемственность',
      lead: 'Звезда и «А», которые уже знают, в собранном виде: красный сверху, синий снизу',
      band: { bg: '#F4F4F5', logo: 'c1-logo-v' }, co: 'c1-co', icon: IMG + 'c1-icon.webp',
      font: 'Арк' },
    { id: 'c2', tab: 'вторая', dot: 'var(--blue2)', name: 'движение',
      lead: 'Звезда и «А» без красного. Острый шрифт, синий рассвет и зеркало, в котором каждый видит себя',
      band: { bg: 'linear-gradient(180deg,#080000,#0044FF)', logo: 'c2-mono-v' }, co: 'c2-co', icon: svg('c2-icon'),
      font: 'Хромиус' },
    { id: 'c3', tab: 'альтернатива', dot: 'var(--ink)', name: 'только слово',
      lead: 'Без знака и без привязки к ЦСКА: название строчными, как у цифровых продуктов',
      band: { bg: '#F4F4F5', logo: 'c3-logo-2' }, co: 'c3-co', icon: svg('c3-icon'),
      font: 'Энджин' }
  ];

  // ====================================================================================
  //   РАЗМЕТКА
  // ====================================================================================
  var h = [];

  // верхняя полоса
  h.push('<header class="as-top"><div class="as-wrap"><div class="as-brand">армия спорта <span>первый этап</span></div><nav class="as-tabs">' +
    '<a href="#brief">задача</a>' + C.map(function (c) { return '<a href="#' + c.id + '"><i style="background:' + c.dot + '"></i>' + c.tab + '</a>'; }).join('') +
    '<a href="#sum">рядом</a></nav></div><div class="as-bar"></div></header>');

  // первый экран
  h.push('<section class="as-hero" id="top" data-slide><div class="as-wrap"><div>' +
    '<p class="as-kicker">«Армия спорта», первый этап</p>' +
    '<h1 class="as-h1">новый знак: три пути</h1>' +
    '<p class="as-lead">' + T('Две концепции и альтернатива. Каждая показана на носителях: от иконки приложения до стены зала') + '</p>' +
    '<div class="as-ctrl"><a class="as-btn" href="#brief">смотреть ' + ICON.down + '</a><span class="as-hint as-keys">← → листают главы</span></div></div>' +
    '<div class="as-stage" id="heroStage">' + C.map(function (c, i) {
      return '<div class="lg' + (i ? '' : ' on') + '"><img src="' + svg(c.id === 'c3' ? 'c3-logo-2' : c.id + '-logo-v') + '" alt="концепция «' + c.name + '»"' + (i ? ' loading="lazy"' : '') + '></div>';
    }).join('') +
    '<div class="as-picker">' + C.map(function (c, i) { return '<button type="button" data-i="' + i + '"' + (i ? '' : ' class="on"') + '>' + c.tab + '<b></b></button>'; }).join('') + '</div></div>' +
    '</div></section>');

  // ---------- задача ----------
  h.push('<section class="as-sec" id="brief"><div class="as-wrap">' +
    chapter('was', side('как сейчас', 'стиль слишком «государственный»', ['Уходим к спортивному и современному, но без «креативного креатива»: рядом с ЦСКА знак должен смотреться уместно']),
      '<div class="as-was">' + ph('old-site', { cls: 'tall', ratio: 1.15 }) + ph('old-vk') + ph('old-tg') + '</div>') +
    '<div class="as-ch wide" data-slide><div class="as-side as-up" style="grid-column:1/-1"><p class="as-army">' + T('«армия» — про') + ' <s>военную тему</s> ' + T('объединение людей') + '</p></div></div>' +
    chapter('filters', side('фильтры', 'по чему проверяем каждый путь', null),
      '<div class="as-filters">' + [
        ['partners', 'Стоит рядом с чужими логотипами', 'не теряется и не спорит, особенно рядом с ЦСКА Единоборства'],
        ['star', 'Звезда остается', 'в ней читаются армия, звезда, свет и движение'],
        ['fresh', 'Модно и молодежно', 'без «госушности», но и без «креативного креатива»'],
        ['people', 'Без военной эстетики', 'армия здесь — это люди'],
        ['sports', 'Растет вместе с платформой', 'сейчас единоборства, дальше «эстетические» виды и детские секции'],
        ['carriers', 'Живет на всех носителях', 'от иконки приложения и монеты до стены зала и формы']
      ].map(function (f) { return '<div class="as-filter">' + ICON[f[0]] + '<p>' + T(f[1]) + '<small>' + T(f[2]) + '</small></p></div>'; }).join('') + '</div>') +
    chapter('who', side('для кого', 'стиль должен откликаться у каждого', ['Ядро — борцы со всей России, особенно с Кавказа: именно они носят логотип']),
      '<ul class="as-who">' + [
        ['fighter', 'борец из Дагестана', 'носит логотип'],
        ['boss', 'спортивный функционер', 'ставит рядом с партнерами'],
        ['runner', 'бегунья', 'будущие «эстетические» виды'],
        ['family', 'ребенок и родитель', 'детская секция']
      ].map(function (p) { return '<li>' + ICON[p[0]] + '<b>' + T(p[1]) + '</b><span>' + T(p[2]) + '</span></li>'; }).join('') + '</ul>' +
      '<div class="as-latin"><b>Sport Alliance</b><p>' + T('У платформы есть международное отделение, поэтому знак и шрифт проверяем и в латинице. Предлагаем добавить это в фильтры брифа') + '</p></div>') +
    '</div></section>');

  // ---------- концепции ----------
  var INDEX = { c1: [['logo', 'знак'], ['color', 'цвет'], ['co', 'с партнерами'], ['font', 'шрифт'], ['app', 'иконка'], ['coin', 'монета'], ['wall', 'зал'], ['award', 'награды'], ['wear', 'одежда'], ['keys', 'брелоки'], ['site', 'сайт']] };
  INDEX.c2 = INDEX.c1;
  INDEX.c3 = [['logo', 'знак'], ['co', 'с партнерами'], ['color', 'цвет'], ['wear', 'футболки'], ['app', 'иконка'], ['site', 'сайт']];

  function cover(c, i) {
    return '<section class="as-cover" id="' + c.id + '" data-slide><div class="as-wrap"><div class="as-up">' +
      '<p class="num"><i style="background:' + c.dot + '"></i>' + (i < 2 ? (i ? 'вторая концепция' : 'первая концепция') : 'дополнительная альтернатива') + '</p>' +
      '<h2 class="as-h1">' + T(c.name) + '</h2><p class="as-lead">' + T(c.lead) + '</p>' +
      '<div class="as-index">' + INDEX[c.id].map(function (x) { return '<a href="#' + c.id + '-' + x[0] + '"><span class="as-tag">' + x[1] + '</span></a>'; }).join('') + '</div></div>' +
      '<div class="as-band as-up" style="background:' + c.band.bg + '"><div class="in"><img src="' + svg(c.band.logo) + '" alt="" loading="lazy"></div></div>' +
      '</div></section>';
  }

  // знак: варианты компоновки и фон
  function logoStage(c, sets, variants, firstWhy) {
    var opts = sets.map(function (s, k) { return '<button type="button" data-bg="' + k + '" aria-pressed="' + (k ? 'false' : 'true') + '">' + s.label + '</button>'; }).join('');
    var vars = variants.map(function (v, k) { return '<button type="button" data-v="' + k + '" aria-pressed="' + (k ? 'false' : 'true') + '">' + v + '</button>'; }).join('');
    return '<div class="as-logostage" data-sets=\'' + JSON.stringify(sets) + '\'>' +
      '<div class="as-logo" style="background:' + sets[0].bg + ';box-shadow:inset 0 0 0 1px var(--line)">' +
      sets[0].files.map(function (f, k) { return '<div class="v' + (k ? '' : ' on') + '"><img src="' + svg(f) + '" alt=""></div>'; }).join('') +
      '<p class="why">' + T(firstWhy || '') + '</p></div>' +
      '<div class="as-ctrl"><div class="as-seg" data-role="v">' + vars + '</div><div class="as-seg" data-role="bg">' + opts + '</div></div></div>';
  }

  function coRow(c) {
    var row = ['p-sa', 'p-cska-fight', c.co, 'p-cska', 'p-fsbr', 'p-dynamo'];
    return '<div class="as-costage"><div class="as-co"><div class="as-row">' + row.map(function (f) {
      return '<div' + (f === c.co ? ' class="me"' : '') + '><img src="' + svg(f) + '" alt="" loading="lazy"></div>';
    }).join('') + '</div><div class="as-wall" data-me="' + c.co + '"></div></div>' +
      '<div class="as-ctrl"><div class="as-seg" data-role="co"><button type="button" data-m="row" aria-pressed="true">в ряд</button><button type="button" data-m="wall" aria-pressed="false">пресс-волл</button></div>' +
      '<div class="as-seg" data-role="pair" hidden><button type="button" data-p="p-cska-fight" aria-pressed="true">ЦСКА</button><button type="button" data-p="p-fsbr" aria-pressed="false">ФСБР</button><button type="button" data-p="p-dynamo" aria-pressed="false">Динамо</button></div></div></div>';
  }

  function palette(parts) {
    return '<div class="as-pal">' + parts.map(function (p) {
      var cl = (p[4] || '') + (/^#FFF/i.test(p[0]) ? ' light' : '');
      return '<div style="--f:' + p[1] + ';background:' + p[0] + ';color:' + (p[3] || '#fff') + '"' + (cl ? ' class="' + cl.trim() + '"' : '') + '><span>' + p[2] + '</span></div>';
    }).join('') + '</div>';
  }

  var APPS = [['tcatch', 'T Catch'], ['online', 'Онлайн'], ['mifit', 'Mi Fitness'], ['sportmaster', 'Спортмастер'], ['sportsru', 'Sports.ru'], ['max', 'Макс'], ['gosuslugi', 'Госуслуги'], ['shazam', 'Shazam']];
  function phone(c) {
    return '<div class="as-phone"><div class="as-screen"><div class="isl"></div><div class="time">21:58</div><div class="as-grid-apps">' +
      '<div class="as-a me"><i><img src="' + c.icon + '" alt="" loading="lazy"></i><span>' + (c.id === 'c3' ? 'армия спорта' : 'Армия спорта') + '</span></div>' +
      APPS.map(function (a) { return '<div class="as-a"><i style="background-image:url(' + IMG + 'app-' + a[0] + '.webp)"></i><span>' + a[1] + '</span></div>'; }).join('') +
      '</div><div class="as-search">Поиск</div><div class="as-dock">' + ['phone', 'yandex', 'messages', 'vk'].map(function (a) { return '<i style="background-image:url(' + IMG + 'app-' + a + '.webp)"></i>'; }).join('') + '</div></div></div>';
  }
  function appChapter(c, title, text) {
    return chapter(c.id + '-app', side('иконка и фавикон', title, text),
      '<div class="as-app"><div class="as-phonebox" data-glass="' + (c.id === 'c2' ? '1' : '') + '">' + phone(c) + '</div>' +
      '<div class="as-tabbox"><div class="as-big-icon"><img src="' + c.icon + '" alt="иконка приложения" loading="lazy"></div>' +
      '<div class="as-browser"><div class="tab"><img src="' + c.icon + '" alt="" loading="lazy"><span>' + (c.id === 'c3' ? 'армия спорта' : 'Армия спорта') + '</span></div><div class="url">armiya-sporta.ru</div></div></div></div>');
  }

  // экраны сайта: подложка и верхние слои — из макета, в месте фото играет промо-ролик с той же обрезкой, что в Фигме
  // (у первой и альтернативы — полоса и фон, черно-белые, как фото в макете; у второй — внутри звезды, в цвете)
  var SITES = {
    c1: { v: [0, 72, 1440, 568], gray: 1, t: [['Секции', 80.3, 25.6, 59, 16, 0, 'rgba(10,10,10,1)', 'L'], ['Турниры', 171.4, 25.6, 69, 16, 0, 'rgba(10,10,10,1)', 'L'], ['Трансляции', 273.3, 25.6, 95, 16, 0, 'rgba(10,10,10,1)', 'L'], ['Новости', 400.3, 25.6, 67, 16, 0, 'rgba(10,10,10,1)', 'L'], ['Войти', 1313.3, 25.6, 47, 16, 0, 'rgba(10,10,10,1)', 'R'], ['Секции и турниры по единоборствам рядом с домом', 482.3, 773.6, 476, 18, 0, 'rgba(92,92,92,1)', 'C'], ['Найти секцию', 556.1, 833.6, 115, 16, 1, '#fff', 'C'], ['Смотреть ролик', 752.8, 833.6, 133, 16, 1, 'rgba(10,10,10,1)', 'L']] },
    c2: { v: [92, 20, 1350, 993], m: [640, 36, 923.6, 903], t: [['Секции', 514.4, 22, 59, 16, 0, '#fff', 'L'], ['Турниры', 613.6, 22, 69, 16, 0, '#fff', 'L'], ['Трансляции', 723.4, 22, 95, 16, 0, '#fff', 'L'], ['Новости', 858.5, 22, 67, 16, 0, '#fff', 'L'], ['Войти', 1313, 22, 47, 16, 0, '#fff', 'R'], ['Секции и турниры по единоборствам рядом с домом', 80, 754, 476, 18, 0, 'rgba(255,255,255,.85)', 'L'], ['Найти секцию', 103.7, 822, 115, 16, 1, 'rgba(7,1,1,1)', 'C'], ['Смотреть ролик', 302.5, 822, 133, 16, 1, '#fff', 'L']] },
    c3: { v: [0, 64, 1440, 836], gray: 1, t: [['секции', 514.4, 22, 57, 16, 0, 'rgba(10,10,10,1)', 'L'], ['турниры', 613.6, 22, 68, 16, 0, 'rgba(10,10,10,1)', 'L'], ['трансляции', 723.4, 22, 94, 16, 0, 'rgba(10,10,10,1)', 'L'], ['новости', 858.5, 22, 65, 16, 0, 'rgba(10,10,10,1)', 'L'], ['войти', 1314, 22, 46, 16, 0, 'rgba(10,10,10,1)', 'R'], ['секции и турниры по единоборствам рядом с домом', 80, 750, 473, 18, 0, 'rgba(255,255,255,.85)', 'L'], ['найти секцию', 133.2, 813, 113, 16, 1, '#fff', 'C'], ['смотреть ролик', 333, 813, 131, 16, 1, '#fff', 'L']] }
  };
  function pct(v, W) { return (v / W * 100).toFixed(3) + '%'; }
  function site(c, text) {
    var d = SITES[c.id], v = d.v, box, vid;
    var video = '<video muted loop playsinline preload="none" poster="' + IMG + 'promo.webp"' + (d.gray ? ' class="gray"' : '') + '></video>';
    if (d.m) {
      var m = d.m;
      vid = '<div class="vid star" style="left:' + pct(m[0], 1440) + ';top:' + pct(m[1], 900) + ';width:' + pct(m[2], 1440) + ';height:' + pct(m[3], 900) + ';-webkit-mask-image:url(' + svg('c2-star') + ');mask-image:url(' + svg('c2-star') + ')">' +
        '<div style="position:absolute;left:' + pct(v[0] - m[0], m[2]) + ';top:' + pct(v[1] - m[1], m[3]) + ';width:' + pct(v[2], m[2]) + ';height:' + pct(v[3], m[3]) + '">' + video + '</div></div>';
    } else vid = '<div class="vid" style="left:' + pct(v[0], 1440) + ';top:' + pct(v[1], 900) + ';width:' + pct(v[2], 1440) + ';height:' + pct(v[3], 900) + '">' + video + '</div>';
    var txt = d.t.map(function (t) {
      var st = 'top:' + pct(t[2], 900) + ';font-size:' + (t[4] / 14.4).toFixed(3) + 'cqw;color:' + t[6] + (t[5] ? ';font-weight:500' : '');
      if (t[7] === 'R') st += ';right:' + pct(1440 - t[1] - t[3], 1440) + ';text-align:right';
      else if (t[7] === 'C') st += ';left:' + pct(t[1], 1440) + ';width:' + pct(t[3], 1440) + ';text-align:center';
      else st += ';left:' + pct(t[1], 1440);
      return '<span style="' + st + '">' + esc(t[0]) + '</span>';
    }).join('');
    box = '<div class="as-scr">' + '<img class="lay" src="' + IMG + c.id + '-under-s.webp" srcset="' + IMG + c.id + '-under-s.webp 1080w, ' + IMG + c.id + '-under.webp 2160w" sizes="(max-width:640px) 100vw, 66vw" alt="" loading="lazy">' +
      vid + '<img class="lay" src="' + IMG + c.id + '-over-s.webp" srcset="' + IMG + c.id + '-over-s.webp 1080w, ' + IMG + c.id + '-over.webp 2160w" sizes="(max-width:640px) 100vw, 66vw" alt="Первый экран сайта" loading="lazy">' +
      '<div class="txt">' + txt + '</div></div>';
    return chapter(c.id + '-site', side('сайт', 'первый экран', text),
      '<div class="as-site"><div class="chrome"><i></i><i></i><i></i><span>armiya-sporta.ru</span></div>' + box + '</div>');
  }

  function award3d(poster, model, alt) {
    return '<div class="as-3d" data-model="' + model + '"><div class="poster">' + ph(poster, { cls: 'contain', zoom: false, alt: alt }) + '</div>' +
      '<button type="button" class="as-btn go">' + ICON.cube + 'покрутить в 3D</button></div>';
  }

  // ---------- первая ----------
  var c1 = C[0], c2 = C[1], c3 = C[2];
  var V4 = ['в строку', 'в центре', 'в две строки', 'столбиком'];
  h.push(cover(c1, 0));
  h.push('<section class="as-sec"><div class="as-wrap">' +
    chapter('c1-logo', side('знак', 'красный сверху, синий снизу', ['Цвета — от прошлого знака и эмблем ЦСКА. Капс органично стоит рядом с ЦСКА.', 'Надпись — из готового шрифта, но буквы подогнаны под наклоны звезды']),
      logoStage(c1, [
        { label: 'на белом', bg: '#FFFFFF', files: ['c1-logo-h', 'c1-logo-mid', 'c1-logo-2', 'c1-logo-v'] },
        { label: 'на синем', bg: '#001857', files: ['c1-mono-h', 'c1-mono-mid', 'c1-mono-2', 'c1-mono-v'], why: 'На темно-синем знак белый: синий низ звезды слился бы с фоном' },
        { label: 'на черном', bg: '#080000', files: ['c1-dark-h', 'c1-dark-mid', 'c1-dark-2', 'c1-dark-v'] },
        { label: 'с партнером', bg: '#FFFFFF', files: ['c1-desc-2', 'c1-desc-h', 'c1-desc-2b', 'c1-desc-v'], why: '' }
      ], V4)) +
    chapter('c1-color', side('цвет', 'красный ведет', ['Красный преобладает и по возможности стоит сверху. Основной фон — белый']),
      palette([['#FFFFFF', 2, 'белый', '#1D222A'], ['#E71E26', 2, 'красный #E71E26'], ['#1B43B2', 1, 'синий #1B43B2'], ['#080000', 1, 'черный']])) +
    chapter('c1-co', side('с партнерами', 'не теряется и не спорит', ['Главная связка — с ЦСКА Единоборства, проверочные — с ФСБР и Динамо. На пресс-волле знак повторяется десятки раз']), coRow(c1)) +
    chapter('c1-font', side('шрифт', 'Арк', ['Широкий и устойчивый — для заголовков и слоганов']),
      '<div class="as-font"><img src="' + svg('c1-font') + '" alt="Спорт объединяет. Ты часть большего. Вместе можем больше" loading="lazy"></div>') +
    appChapter(c1, 'звезда на белом', ['Одна звезда без надписи: узнается в ряду чужих иконок']) +
    chapter('c1-coin', side('монета', 'все виды спорта на одной монете', ['На обороте гравируем все виды, которые объединит платформа. Наведите на монету, чтобы рассмотреть ближе'],
      '<div class="as-sports">' + SPORTS.map(function (s, k) { return '<button type="button" class="as-tag' + (k ? '' : ' hot') + '" data-k="' + k + '">' + s[0] + '</button>'; }).join('') + '</div><p class="as-note as-sportlist">' + T(SPORTS[0][1]) + '</p>'),
      '<div class="as-coin" data-ring="1" data-model="coin_gold" data-orbit="20deg 80deg 5m"><div class="face" data-face="c1-coin-side">' + ph('c1-coin-side', { cls: 'contain', zoom: false, alt: 'Оборот монеты: все виды спорта' }) + '</div></div>' +
      '<div class="as-ctrl"><div class="as-seg" data-role="face"><button type="button" data-f="c1-coin-side" aria-pressed="true">оборот</button><button type="button" data-f="c1-coin" aria-pressed="false">лицо</button><button type="button" data-f="c1-coin-a" aria-pressed="false">гурт</button></div>' +
      '<button type="button" class="as-btn soft as-go3d">' + ICON.cube + 'покрутить в 3D</button></div>') +
    chapter('c1-wall', side('стена зала', 'у каждого зала — свой вид спорта', ['Динамичные иллюстрации под контекст зала: одна система, много форматов']),
      '<div class="as-col">' + fig('c1-wall-a', '', { cls: 'c6' }) + fig('c1-art-a', '', { cls: 'c2' }) + fig('c1-art-b', '', { cls: 'c2' }) + fig('c1-art-c', '', { cls: 'c2' }) + fig('c1-wall-b', '', { cls: 'c6' }) + '</div>') +
    chapter('c1-award', side('награды', 'тяжелое основание, воздушная звезда', ['Ступени — слои пластика с зеркальным напылением: на видео красиво преломляют свет, в руке легкие, на фото выглядят мощно']),
      '<div class="as-award">' + award3d('c1-award-stack', 'cubok', 'Кубки за первое, второе и третье место') + ph('c1-award-man', { ratio: 1, style: 'height:100%' }) + '<div class="row">' + ph('c1-award-row') + '</div></div>') +
    chapter('c1-wear', side('одежда и мерч', 'белый стиль, черная форма', ['Белая форма непрактична, поэтому форма черная. У тренеров — красное поло: их сразу видно в зале, а логотип тихий']),
      '<div class="as-col">' + fig('c1-fighter', '', { cls: 'c3' }) + fig('c1-wear-c', '', { cls: 'c3' }) +
      fig('c1-polo-a', '', { cls: 'c2' }) + fig('c1-polo-b', '', { cls: 'c2' }) + fig('c1-polo-c', '', { cls: 'c2', ratio: 0.8 }) +
      fig('c1-tee-back', '', { cls: 'c2' }) + '<div class="as-quote c2"><b>' + T('«я был там»') + '</b><p>' + T('Футболка турнира с городом и датой — самый продаваемый мерч в единоборствах. Пока на стандартных шрифтах: фирменный нужно купить') + '</p></div>' + fig('c1-tee-front', '', { cls: 'c2' }) +
      fig('c1-wear-a', '', { cls: 'c2' }) + fig('c1-wear-b', 'шлепанцы для зала и раздевалки', { cls: 'c2' }) + fig('c1-slides', '', { cls: 'c2' }) +
      fig('c1-labels', '', { cls: 'c6' }) + '</div>') +
    chapter('c1-keys', side('брелоки', 'под любой турнир', ['Белый, прозрачный и черный пластик. Надписи меняются под слоган, линию или турнир']),
      '<div class="as-col">' + fig('c1-keys-flat', '', { cls: 'c6', style: 'background:#fff' }) + fig('c1-keys-b', '', { cls: 'c6' }) + '</div>') +
    site(c1, ['Знак в центре шапки, под роликом — слоган в цветах знака']) +
    '</div></section>');

  // ---------- вторая ----------
  h.push(cover(c2, 1));
  h.push('<section class="as-sec"><div class="as-wrap">' +
    chapter('c2-logo', side('знак', 'без красного — без Красной армии', ['Звезда и «А» остаются, цвет уходит: красная звезда сразу отсылает к Красной армии. Подход ближе к Nike: знак монохромный, на одежде он работает сам по себе. Золото на монетах и наградах — про первое место и победу.', 'Острые формы шрифта — резкость и бесстрашие']),
      logoStage(c2, [
        { label: 'на белом', bg: '#FFFFFF', files: ['c2-logo-h', 'c2-logo-top', 'c2-logo-2', 'c2-logo-v'] },
        { label: 'на рассвете', bg: 'linear-gradient(180deg,#080000,#0044FF)', files: ['c2-mono-h', 'c2-mono-top', 'c2-mono-2', 'c2-mono-v'] }
      ], ['в строку', 'звезда сверху', 'в две строки', 'столбиком'])) +
    chapter('c2-color', side('цвет', 'синий рассвет', ['Яркий синий — цифровой и современный. Градиентом, светлым снизу, как рассвет: так он не склеивается со Спортмастером. Красный — только для мелких акцентов']),
      palette([['#080000', 3, 'рассвет', '#fff', 'dawn'], ['#FFFFFF', 2, 'белый', '#1D222A'], ['#E71E26', .45, ' ']])) +
    chapter('c2-co', side('с партнерами', 'выделяется без цвета', ['Синий знак в строку стоит рядом с ЦСКА, ФСБР и Динамо и не спорит с их гербами']), coRow(c2)) +
    chapter('c2-font', side('шрифт', 'Хромиус', ['Острые засечки дают динамику даже в коротких слоганах']),
      '<div class="as-font"><img src="' + svg('c2-font') + '" alt="Спорт объединяет. Ты часть большего. Вместе можем больше" loading="lazy"></div>') +
    appChapter(c2, 'стеклянная звезда', ['Сначала иконка во весь экран: белая звезда в толстом стекле, за ним переливаются синий, белый и красный. Потом она встает на свое место среди приложений']) +
    chapter('c2-coin', side('монета', 'в спорте есть место каждому', ['На лицевой стороне — руки спортсменов, которые держат друг друга. На обороте — зеркало: внутри знака видишь себя.', 'Зеркало играет на серебре, но можно и золото. «Армия спорта» — на гурте. Руки можно сделать и женские, и детские']),
      '<div class="as-coin" data-model="coin_mirror" data-orbit="20deg 80deg 5m" data-auto="c2-coin-a,c2-coin-b,c2-coin-c"><div class="face" data-face="c2-coin-a">' + ph('c2-coin-a', { cls: 'contain', zoom: false, alt: 'Серебряная монета' }) + '</div></div>' +
      '<div class="as-ctrl"><div class="as-seg" data-role="face"><button type="button" data-f="c2-coin-a" aria-pressed="true">монета</button><button type="button" data-f="c2-coin-b" aria-pressed="false">отражение</button><button type="button" data-f="c2-coin-c" aria-pressed="false">ближе</button><button type="button" data-f="c2-coin" aria-pressed="false">золото</button></div>' +
      '<button type="button" class="as-btn soft as-go3d">' + ICON.cube + 'покрутить в 3D</button></div>' +
      '<p class="as-note">' + T('Глубина резкости на рендерах разная, поэтому смена кадров выглядит так, будто смотришь то на монету, то на отражение') + '</p>') +
    chapter('c2-wall', side('стена зала', 'каждый может больше', ['История с зеркалом продолжается в зале: в отражении человек понимает, что речь о нем. Серебро здесь не второе место — зеркало отражает каждого, без отбора и оценки, и само становится фотозоной']),
      '<div class="as-col">' + fig('c2-wall', '', { cls: 'c6' }) +
      '<div class="c3"><div class="as-posters">' + ['c2-poster-e', 'c2-poster-c', 'c2-poster-d', 'c2-poster-a', 'c2-poster-b'].map(function (p, k) { return ph(p, { cls: k ? '' : 'cur' }); }).join('') + '</div><div class="as-dots"></div></div>' +
      '<div class="c3 as-quote"><b>' + T('паттерны, серебро и зеркало') + '</b><p>' + T('Черновые эскизы: стены можно собирать из динамичных паттернов вместе с серебром и зеркальной пленкой') + '</p></div>' +
      fig('c2-mirror-a', 'фотозона в зеркале', { cls: 'c3' }) + fig('c2-mirror-b', '', { cls: 'c3' }) + '</div>') +
    chapter('c2-award', side('награды', 'победитель в отражении', ['Места остаются привычными, зеркальная деталь отражает победителя. Выемка слева — награду удобно держать и наклонять для фото; наклон вправо вверх — про рост']),
      '<div class="as-award">' + award3d('c2-award-stack', 'stela', 'Стелы за первое, второе и третье место') + ph('c2-award-man', { ratio: 1, style: 'height:100%' }) + '<div class="row">' + ph('c2-award-row') + '</div></div>') +
    chapter('c2-wear', side('одежда и мерч', 'синий снизу, как рассвет', ['Форма уходит в синий к низу, знак белый. Логотип на поло и мерче тихий']),
      '<div class="as-col">' + fig('c2-wear-a', '', { cls: 'c3' }) + fig('c2-wear-c', '', { cls: 'c3' }) +
      fig('c2-wear-b', '', { cls: 'c2' }) + fig('c2-tee-b', 'футболка турнира', { cls: 'c2', ratio: 0.8 }) + fig('c2-wear-d', 'шлепанцы для зала', { cls: 'c2' }) +
      fig('c2-slides', '', { cls: 'c3' }) + fig('c2-slides-2', '', { cls: 'c3' }) + '</div>') +
    chapter('c2-keys', side('брелоки', 'зеркальное серебро', ['Брелоки из зеркального серебра, надписи — под слоган, линию или турнир']),
      '<div class="as-col">' + fig('c2-keys-a', '', { cls: 'c3' }) + fig('c2-keys-b', '', { cls: 'c3' }) + fig('c2-keys-flat', '', { cls: 'c6', style: 'background:#fff' }) + '</div>') +
    site(c2, ['Рассвет на весь экран, ролик — внутри звезды']) +
    '</div></section>');

  // ---------- альтернатива ----------
  h.push(cover(c3, 2));
  h.push('<section class="as-sec"><div class="as-wrap">' +
    chapter('c3-logo', side('знак', 'строчными, как в цифре', ['Современный шрифт, без заглавных: этот прием потом идет во все короткие слова и заголовки. Подход как у Nike: графический знак уходит целиком.', 'Звезда остается отсылкой к прошлому в мелочах: значки, футболки, брелоки, носки']),
      '<div class="as-word"><div class="as-logo" style="background:#fff;box-shadow:inset 0 0 0 1px var(--line)"><div class="v on"><img src="' + svg('c3-logo-h') + '" alt="армия спорта"></div><div class="v"><img src="' + svg('c3-logo-2') + '" alt=""></div></div>' +
      '<div class="as-ctrl"><div class="as-seg" data-role="w"><button type="button" data-v="0" aria-pressed="true">в строку</button><button type="button" data-v="1" aria-pressed="false">в две строки</button></div></div></div>') +
    chapter('c3-co', side('с партнерами', 'выделяется тем, что без звезды', ['У трех логотипов из пяти есть звезды, поэтому слово без знака сразу заметно']), coRow(c3)) +
    chapter('c3-color', side('цвет', 'черное и белое', ['Основа — белый и черный, красный и синий — только акценты']),
      palette([['#FFFFFF', 2, 'белый', '#1D222A'], ['#000000', 2, 'черный'], ['#E71E26', .45, ' '], ['#0044FF', .45, ' ']])) +
    chapter('c3-wear', side('футболки', 'тихо и современно', ['Название мелко на груди, звезда — у воротника']),
      '<div class="as-grid as-g2">' + ph('c3-tee-front') + ph('c3-tee-back') + '</div>') +
    appChapter(c3, 'звезда остается в иконке', ['В маленьком размере слово не читается, поэтому в иконке и фавиконе — звезда']) +
    site(c3, ['Ролик на весь экран, слоган строчными']) +
    '</div></section>');

  // ---------- три пути рядом ----------
  h.push('<section class="as-sec" id="sum" data-slide><div class="as-wrap"><div class="as-up"><p class="as-kicker">рядом</p><h2 class="as-h2">три пути на одном экране</h2></div>' +
    '<div class="as-cmp as-up" style="margin-top:40px">' + C.map(function (c, i) {
      return '<a href="#' + c.id + '"><div class="lg" style="background:' + (i === 1 ? 'linear-gradient(180deg,#080000,#0044FF)' : '#fff') + ';border-radius:6px"><span><img src="' + svg(i === 1 ? 'c2-mono-v' : i === 2 ? 'c3-logo-2' : 'c1-logo-v') + '" alt="" loading="lazy"></span></div>' +
        '<div class="ic"><i style="background-image:url(' + c.icon + ')"></i><span class="as-tag">шрифт ' + c.font + '</span></div><b>' + T(c.name) + '</b><p>' + T(c.lead) + '</p></a>';
    }).join('') + '</div>' +
    '<div class="as-up" style="margin-top:clamp(72px,9vw,120px)"><p class="as-kicker">дальше</p><h2 class="as-h2">выбираем путь и раскрываем</h2></div>' +
    '<ul class="as-next as-up" style="margin-top:32px">' + [
      ['стенды и стелы', 'для площадок и турниров'], ['сертификаты для фото', 'большие, на пенокартоне'], ['ринг, татами, флажки', 'бутылочки и форма стаффа'], ['шаблоны', 'чтобы команда заказчика поддерживала стиль сама']
    ].map(function (x) { return '<li>' + T(x[0]) + '<span>' + T(x[1]) + '</span></li>'; }).join('') + '</ul>' +
    '</div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><span>«Армия спорта», первый этап</span><span>Даша Купцова, <a href="https://kupdasha.ru">kupdasha.ru</a></span></div></footer>');
  h.push('<div class="as-lb" role="dialog" aria-label="картинка крупно"><img alt=""><button type="button" class="x" aria-label="закрыть">' + ICON.close + '</button></div>');

  root.innerHTML = h.join('');

  // ====================================================================================
  //   ЖИЗНЬ
  // ====================================================================================
  var $ = function (s, el) { return (el || root).querySelector(s); };
  var $$ = function (s, el) { return [].slice.call((el || root).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // картинки: скелет пропадает, когда картинка загрузилась
  function watchImg(img) {
    var box = img.closest('.as-ph');
    if (!box) return;
    function ok() { box.classList.add('ok'); }
    if (img.complete && img.naturalWidth) ok(); else { img.addEventListener('load', ok); img.addEventListener('error', ok); }
  }
  $$('.as-ph img').forEach(watchImg);

  // скелет всей страницы уходит, когда готов первый экран
  (function () {
    var sk = document.getElementById('as-skel');
    if (!sk) return;
    var first = $('#heroStage img');
    var done = false;
    function off() { if (done) return; done = true; sk.classList.add('off'); setTimeout(function () { sk.remove(); }, 600); }
    if (first.complete) off(); else { first.addEventListener('load', off); first.addEventListener('error', off); }
    setTimeout(off, 2500);
  })();

  // появление при прокрутке
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.as-up,.as-army,.as-co').forEach(function (el) { io.observe(el); });

  // верхняя полоса: прогресс и текущая вкладка
  var top = $('.as-top'), bar = $('.as-bar'), tabs = $$('.as-tabs a');
  var marks = ['brief', 'c1', 'c2', 'c3', 'sum'].map(function (id) { return document.getElementById(id); });
  function onScroll() {
    var y = window.scrollY, H = document.documentElement.scrollHeight - innerHeight;
    top.classList.toggle('on', y > 10);
    bar.style.width = (H > 0 ? Math.min(100, y / H * 100) : 0) + '%';
    var cur = -1;
    marks.forEach(function (m, i) { if (m && m.getBoundingClientRect().top < innerHeight * .4) cur = i; });
    tabs.forEach(function (a, i) {
      var on = i === cur;
      if (on !== a.classList.contains('on')) { a.classList.toggle('on', on); if (on && a.scrollIntoView && innerWidth < 640) a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' }); }
    });
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ссылки по якорям — плавно и с учетом шапки (на Тильде ссылки с # перехватываются, поэтому кодом)
  function go(id) { var el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - (innerWidth < 640 ? 56 : 64) + 1, behavior: reduce ? 'auto' : 'smooth' }); }
  root.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    go(a.getAttribute('href').slice(1));
  }, true);

  // стрелки ← → — к следующей главе, как в презентации
  var slides = $$('[data-slide]');
  if (matchMedia('(hover:none)').matches) $$('.as-keys').forEach(function (k) { k.remove(); });
  addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea|select/i.test((e.target.tagName || ''))) return;
    if ($('.as-lb.on')) { if (e.key === 'Escape') closeLb(); return; }
    var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    var y = scrollY + 80, i;
    if (dir > 0) { for (i = 0; i < slides.length; i++) if (slides[i].getBoundingClientRect().top + scrollY > y + 10) break; }
    else { for (i = slides.length - 1; i >= 0; i--) if (slides[i].getBoundingClientRect().top + scrollY < y - 10) break; }
    var t = slides[i];
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
  });

  // повторяющийся таймер, который работает, только пока блок на экране
  function whileVisible(el, fn, ms) {
    var t = null;
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !t) t = setInterval(fn, ms);
        else if (!e.isIntersecting && t) { clearInterval(t); t = null; }
      });
    }).observe(el);
  }

  // ---------- первый экран: три знака сменяются сами ----------
  (function () {
    var st = $('#heroStage'), lg = $$('.lg', st), bt = $$('.as-picker button', st), i = 0, timer;
    function show(k) {
      i = k;
      lg.forEach(function (l, j) { l.classList.toggle('on', j === k); });
      bt.forEach(function (b, j) { b.classList.remove('on'); if (j === k) { void b.offsetWidth; b.classList.add('on'); } });
    }
    function next() { show((i + 1) % lg.length); }
    function start() { clearInterval(timer); timer = setInterval(next, 3200); }
    bt.forEach(function (b, j) { b.addEventListener('click', function () { show(j); start(); }); });
    if (!reduce) start();
  })();

  // ---------- знак: компоновки и фон ----------
  $$('.as-logostage').forEach(function (box) {
    var sets = JSON.parse(box.dataset.sets), stage = $('.as-logo', box), why = $('.why', stage), v = 0, b = 0, touched = false;
    var slots = $$('.v', stage);
    function paint() {
      var s = sets[b];
      stage.style.background = s.bg;
      stage.style.boxShadow = s.bg === '#FFFFFF' ? 'inset 0 0 0 1px var(--line)' : 'none';
      slots.forEach(function (sl, k) { var im = $('img', sl); var f = svg(s.files[k]); if (im.getAttribute('src') !== f) im.src = f; sl.classList.toggle('on', k === v); });
      why.textContent = nb(s.why || '');
      why.classList.toggle('on', !!s.why);
      $$('[data-role="v"] button', box).forEach(function (x, k) { x.setAttribute('aria-pressed', k === v); });
      $$('[data-role="bg"] button', box).forEach(function (x, k) { x.setAttribute('aria-pressed', k === b); });
    }
    box.addEventListener('click', function (e) {
      var x = e.target.closest('button'); if (!x) return;
      touched = true;
      if (x.dataset.v != null) v = +x.dataset.v;
      if (x.dataset.bg != null) b = +x.dataset.bg;
      paint();
    });
    // пока не трогали — компоновки перебираются сами
    if (!reduce) whileVisible(box, function () { if (touched) return; v = (v + 1) % slots.length; if (!v) b = (b + 1) % sets.length; paint(); }, 2200);
  });

  // альтернатива: строка ⇄ две строки
  $$('.as-word').forEach(function (box) {
    var sl = $$('.v', box), touched = false, v = 0;
    function show(k) { v = k; sl.forEach(function (s, j) { s.classList.toggle('on', j === k); }); $$('button', box).forEach(function (x, j) { x.setAttribute('aria-pressed', j === k); }); }
    box.addEventListener('click', function (e) { var x = e.target.closest('button'); if (!x) return; touched = true; show(+x.dataset.v); });
    if (!reduce) whileVisible(box, function () { if (!touched) show(1 - v); }, 2600);
  });

  // ---------- партнеры: в ряд и пресс-волл ----------
  $$('.as-costage').forEach(function (box) {
    var co = $('.as-co', box), wall = $('.as-wall', co), pair = $('[data-role="pair"]', box), partner = 'p-cska-fight';
    function build() {
      var W = co.clientWidth || 800, n = innerWidth < 640 ? 4 : 6, cw = W / n * 1.0, ch = cw * .62, cols = n + 4, rows = Math.ceil(co.clientHeight / ch) + 3, s = '';
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) s += '<img src="' + svg((r + c) % 2 ? partner : wall.dataset.me) + '" alt="" loading="lazy">';
      wall.innerHTML = '<div class="tile" style="--n:' + cols + ';--cw:' + cw + 'px;--ch:' + ch + 'px">' + s + '</div>';
    }
    box.addEventListener('click', function (e) {
      var x = e.target.closest('button'); if (!x) return;
      if (x.dataset.m) {
        var w = x.dataset.m === 'wall';
        if (w) build();
        co.classList.toggle('wall', w); pair.hidden = !w;
        $$('[data-role="co"] button', box).forEach(function (y) { y.setAttribute('aria-pressed', y === x); });
      }
      if (x.dataset.p) { partner = x.dataset.p; build(); $$('[data-role="pair"] button', box).forEach(function (y) { y.setAttribute('aria-pressed', y === x); }); }
    });
  });

  // ---------- монета ----------
  var MV_SRC = 'https://cdn.jsdelivr.net/npm/@google/model-viewer@4.0.0/dist/model-viewer.min.js', mvLoading = null;
  function loadMV() {
    if (window.customElements && customElements.get('model-viewer')) return Promise.resolve();
    if (mvLoading) return mvLoading;
    mvLoading = new Promise(function (ok, no) { var s = document.createElement('script'); s.type = 'module'; s.src = MV_SRC; s.onload = ok; s.onerror = no; document.head.appendChild(s); })
      .then(function () { return customElements.whenDefined('model-viewer'); });
    return mvLoading;
  }
  function modelViewer(model, orbit) {
    return '<model-viewer src="' + IMG + model + '.glb" environment-image="' + IMG + 'studio.hdr" camera-controls auto-rotate auto-rotate-delay="1500" rotation-per-second="20deg" interaction-prompt="none" touch-action="pan-y" tone-mapping="neutral" exposure="1" shadow-intensity="0.7" shadow-softness="0.9" camera-orbit="' + (orbit || '0deg 82deg auto') + '" alt="3D-модель"></model-viewer>';
  }

  $$('.as-coin').forEach(function (coin) {
    var face = $('.face', coin), wrap = coin.closest('.as-vis'), seg = $('[data-role="face"]', wrap), auto = coin.dataset.auto ? coin.dataset.auto.split(',') : null, touched = false, k = 0;
    function set(name) {
      if (face.dataset.face === name) return;
      face.dataset.face = name;
      var n = document.createElement('div'); n.className = 'face'; n.style.opacity = 0; n.dataset.face = name;
      n.innerHTML = ph(name, { cls: 'contain', zoom: false });
      coin.appendChild(n); watchImg($('img', n));
      var old = face; face = n;
      requestAnimationFrame(function () { requestAnimationFrame(function () { n.style.opacity = 1; old.style.opacity = 0; setTimeout(function () { old.remove(); }, 1300); }); });
      $$('button', seg).forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.f === name); });
    }
    seg.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; touched = true; set(b.dataset.f); });
    // вторая: монета и отражение сменяют друг друга сами — как перевод фокуса
    if (auto && !reduce) whileVisible(coin, function () { if (touched || $('.as-mv.on', coin)) return; k = (k + 1) % auto.length; set(auto[k]); }, 2600);

    if (coin.dataset.ring) {
      // лупа: рассмотреть рельеф
      var lp = document.createElement('div'); lp.className = 'as-loupe'; coin.appendChild(lp);
      function move(x, y) {
        var r = coin.getBoundingClientRect(), img = $('img', face), src = img && (img.currentSrc || img.src);
        if (!src) return;
        var px = (x - r.left) / r.width, py = (y - r.top) / r.height, Z = 2.6, L = lp.offsetWidth;
        lp.style.left = (x - r.left - L / 2) + 'px'; lp.style.top = (y - r.top - L / 2) + 'px';
        lp.style.backgroundImage = 'url(' + src.replace('-s.webp', '.webp') + ')';
        var fw = r.width * .78 * Z;
        lp.style.backgroundSize = fw + 'px ' + fw + 'px';
        lp.style.backgroundPosition = (L / 2 - (px - .11) / .78 * fw) + 'px ' + (L / 2 - (py - .11) / .78 * fw) + 'px';
        lp.classList.add('on');
      }
      coin.addEventListener('pointermove', function (e) { if (!$('.as-mv.on', coin)) move(e.clientX, e.clientY); });
      coin.addEventListener('pointerleave', function () { lp.classList.remove('on'); });
    }

    // 3D
    var btn = $('.as-go3d', wrap);
    btn.addEventListener('click', function () {
      var mv = $('.as-mv', coin);
      if (!mv) {
        coin.insertAdjacentHTML('beforeend', '<div class="as-mv"><button type="button" class="as-btn soft close">' + ICON.close + 'закрыть</button><span class="as-3d-hint">тяните, чтобы повернуть</span></div>');
        mv = $('.as-mv', coin);
        $('.close', mv).addEventListener('click', function () { mv.classList.remove('on'); });
      }
      mv.classList.add('on');
      if (!$('model-viewer', mv)) {
        btn.disabled = true;
        loadMV().then(function () { mv.insertAdjacentHTML('afterbegin', modelViewer(coin.dataset.model, coin.dataset.orbit)); btn.disabled = false; })
          .catch(function () { btn.disabled = false; mv.classList.remove('on'); });
      }
    });
  });

  // виды спорта на монете: группа — список
  $$('.as-sports').forEach(function (box) {
    var out = box.nextElementSibling, bt = $$('button', box), k = 0, touched = false;
    function show(j) { k = j; bt.forEach(function (b, i) { b.classList.toggle('hot', i === j); }); out.textContent = nb(SPORTS[j][1]); }
    box.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; touched = true; show(+b.dataset.k); });
    box.addEventListener('mouseover', function (e) { var b = e.target.closest('button'); if (b) { touched = true; show(+b.dataset.k); } });
    if (!reduce) whileVisible(box, function () { if (!touched) show((k + 1) % bt.length); }, 2200);
  });

  // награды в 3D
  $$('.as-3d').forEach(function (box) {
    var go = $('.go', box);
    go.addEventListener('click', function () {
      go.textContent = 'загружаю…';
      loadMV().then(function () {
        box.insertAdjacentHTML('beforeend', modelViewer(box.dataset.model));
        var mv = $('model-viewer', box);
        mv.addEventListener('load', function () { var p = $('.poster', box); if (p) p.remove(); if (go.parentNode) go.remove(); });
        setTimeout(function () { if (go.parentNode) { var p = $('.poster', box); if (p) p.remove(); go.remove(); } }, 6000);
      }).catch(function () { go.textContent = 'не загрузилось'; });
    });
  });

  // ---------- постеры в зале сменяются сами ----------
  $$('.as-posters').forEach(function (box) {
    var it = $$('.as-ph', box), dots = box.parentNode.querySelector('.as-dots'), k = 0;
    dots.innerHTML = it.map(function (_, j) { return '<button type="button" aria-label="кадр ' + (j + 1) + '"' + (j ? '' : ' class="on"') + '></button>'; }).join('');
    var db = $$('button', dots);
    function show(j) { k = j; it.forEach(function (x, i) { x.classList.toggle('cur', i === j); }); db.forEach(function (x, i) { x.classList.toggle('on', i === j); }); }
    db.forEach(function (b, j) { b.addEventListener('click', function () { show(j); }); });
    if (!reduce) whileVisible(box, function () { show((k + 1) % it.length); }, 2400);
  });

  // ---------- иконка появляется в телефоне ----------
  $$('.as-phonebox').forEach(function (box) {
    var me = $('.as-a.me', box);
    var glass = box.dataset.glass === '1' && !reduce;
    var started = false;
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting || started) return;
        started = true;
        if (glass) glassIntro(box, me); else setTimeout(function () { me.classList.add('on'); }, 300);
      });
    }, { threshold: .5 }).observe(box);
  });

  // стеклянная звезда (шейдер из макета иконки): во весь блок, потом улетает на место иконки
  function glassIntro(box, me) {
    var layer = document.createElement('div'); layer.className = 'as-glass';
    var cv = document.createElement('canvas'); layer.appendChild(cv); box.appendChild(layer);
    var gl = cv.getContext('webgl', { antialias: false });
    if (!gl) { layer.remove(); me.classList.add('on'); return; }
    var stop = glassShader(gl, cv);
    var W = box.clientWidth, H = box.clientHeight, S = Math.min(W, H);
    layer.style.cssText = 'left:' + (W - S) / 2 + 'px;top:' + (H - S) / 2 + 'px;width:' + S + 'px;height:' + S + 'px;right:auto;bottom:auto';
    var bg = document.createElement('div'); bg.className = 'as-glass'; bg.style.zIndex = 2; box.insertBefore(bg, layer);
    setTimeout(function () {
      var bi = box.getBoundingClientRect(), ti = $('i', me).getBoundingClientRect(), li = layer.getBoundingClientRect();
      // иконка в шейдере занимает 60% кадра — подгоняем так, чтобы стекло легло ровно в квадрат иконки
      var sc = ti.width / (li.width * .6);
      var dx = ti.left + ti.width / 2 - (li.left + li.width / 2), dy = ti.top + ti.height / 2 - (li.top + li.height / 2);
      layer.classList.add('fly');
      layer.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + sc + ')';
      layer.style.opacity = 0;
      bg.style.opacity = 0;
      setTimeout(function () { me.classList.add('on'); }, 650);
      setTimeout(function () { stop(); layer.remove(); bg.remove(); addReplay(); }, 1500);
    }, 2600);
    function addReplay() {
      if ($('.as-replay', box)) return;
      var b = document.createElement('button'); b.type = 'button'; b.className = 'as-btn soft as-replay'; b.innerHTML = ICON.replay + 'еще раз';
      b.addEventListener('click', function () { b.remove(); me.classList.remove('on'); glassIntro(box, me); });
      box.appendChild(b);
    }
  }

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
      'const float SK=.57/.6;const vec2 SOFF=vec2(.026,.018);float starA(vec2 q,float bias){vec2 st=(q-SOFF)/(2.*SK)+.5;if(st.x<0.||st.y<0.||st.x>1.||st.y>1.)return 0.;return texture2D(star,st,bias).a;}' +
      'void main(){vec2 uv=(gl_FragCoord.xy-.5*res)/res.y;float S=.30;vec2 q=uv/S;float d=sdf(q);vec3 inner=glass(q);float rim=smoothstep(.9,1.,d);inner=mix(inner,inner*1.5+.1,rim*.7);float line=exp(-pow((d-.982)/.012,2.));inner+=line*(inner*.8+.3);inner=1.-exp(-inner*1.7);float sa=starA(q,0.);float sg=starA(q,5.5);inner=mix(inner,vec3(1.),sa);inner+=sg*.18*(1.-sa);vec3 bg=bgGrad(gl_FragCoord.y/res.y);vec2 ep=q/max(d,1e-4);vec3 ec=pal(field(ep*.55));float g=max(d-1.,0.);float gw=max(length(q)-1.05,0.);vec3 glow=1.-exp(-ec*(exp(-g*14.)*.7+exp(-gw*3.2)*.3)*1.7);vec3 outer=1.-(1.-bg)*(1.-glow);float aa=1.6/(res.y*S);float a=1.-smoothstep(1.-aa,1.+aa,d);vec3 col=mix(outer,inner,a);col+=(hash(gl_FragCoord.xy)-.5)*.012;gl_FragColor=vec4(col,1.);}';
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
      var N = 512, pad = N * .2, c = document.createElement('canvas'); c.width = c.height = N;
      var x = c.getContext('2d'), w = N - pad * 2, hh = w * 664 / 680; x.drawImage(img, pad, (N - hh) / 2, w, hh);
      gl.bindTexture(gl.TEXTURE_2D, tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(STAR);
    var run = true, t0 = performance.now();
    (function frame(now) {
      if (!run) return;
      var dpr = Math.min(devicePixelRatio || 1, 2), s = Math.round(canvas.clientWidth * dpr);
      if (s && canvas.width !== s) { canvas.width = canvas.height = s; gl.viewport(0, 0, s, s); }
      gl.uniform2f(uRes, canvas.width, canvas.height); gl.uniform1f(uT, ((now - t0) / 8000) % 1);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(frame);
    })(t0);
    return function () { run = false; var e = gl.getExtension('WEBGL_lose_context'); if (e) e.loseContext(); };
  }

  // ---------- промо-ролик в экранах сайта ----------
  var vio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        if (!v.src) v.src = IMG + (innerWidth < 700 ? 'promo-s.mp4' : 'promo.mp4');
        var p = v.play(); if (p && p.catch) p.catch(function () {});
      } else if (v.src) v.pause();
    });
  }, { rootMargin: '200px 0px' });
  $$('.as-scr video').forEach(function (v) { if (!reduce) vio.observe(v); });

  // ---------- крупно по нажатию ----------
  var lb = $('.as-lb'), lbImg = $('img', lb);
  function closeLb() { lb.classList.remove('on'); lbImg.removeAttribute('src'); document.documentElement.style.overflow = ''; }
  root.addEventListener('click', function (e) {
    var z = e.target.closest('.as-ph.zoom');
    if (z && !e.target.closest('button')) { lbImg.src = z.dataset.big; lb.classList.add('on'); document.documentElement.style.overflow = 'hidden'; }
  });
  lb.addEventListener('click', closeLb);
})();
