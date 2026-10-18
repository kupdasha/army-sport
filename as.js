/* «Армия спорта», первый этап — презентация ребрендинга для клиента.
   Вся страница собирается здесь: тексты, главы трех путей и живые блоки.
   Первая концепция — красная, вторая — черная с синим, альтернатива — черно-белая.
   Картинки, знаки, модели и ролик — img/ (у картинок -s — легкая копия для телефона).
   Адрес файлов — window.AS_BASE (на Тильде загрузчик ставит адрес jsDelivr по номеру версии), локально — та же папка. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = BASE + 'img/';
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as');
  root.setAttribute('lang', 'ru');

  // пропорции картинок — место занято сразу, страница не прыгает (заполняет build.py)
  var R = /*RATIOS*/{"c1-art-a":1.7752,"c1-art-b":1.777,"c1-art-c":1.7801,"c1-award-man":1.7778,"c1-award-row":2.5862,"c1-award-stack":0.9992,"c1-co":0.7573,"c1-coin-a":1.4684,"c1-coin-b":1.4684,"c1-coin-side":1.0034,"c1-coin":1.0,"c1-dark-2":2.7082,"c1-dark-h":6.2505,"c1-dark-mid":6.1905,"c1-dark-v":0.7572,"c1-desc-2":4.467,"c1-desc-2b":1.8977,"c1-desc-h":7.8791,"c1-desc-v":0.6674,"c1-fighter":1.0,"c1-font":2.6762,"c1-icon":1.0,"c1-keys-b":1.7786,"c1-keys-flat":1.5598,"c1-labels":3.334,"c1-logo-2":2.7082,"c1-logo-h":6.2505,"c1-logo-mid":6.1905,"c1-logo-v":0.7572,"c1-mono-2":2.7082,"c1-mono-h":6.2505,"c1-mono-mid":6.1617,"c1-mono-v":0.7651,"c1-over":1.6,"c1-polo-a":0.7998,"c1-polo-b":0.8005,"c1-polo-c":1.0678,"c1-slides-2":1.0,"c1-slides":1.0,"c1-tee-back":0.7998,"c1-tee-front":0.7998,"c1-under":1.6,"c1-wall-a":1.7778,"c1-wall-b":1.7778,"c1-wear-a":1.0,"c1-wear-b":1.0,"c1-wear-c":1.0008,"c2-award-man":1.7778,"c2-award-row":2.5862,"c2-award-stack":1.075,"c2-co":0.9181,"c2-coin-a":0.9174,"c2-coin-b":0.9174,"c2-coin-c":0.9174,"c2-coin":0.9819,"c2-font":3.6588,"c2-icon":1.0,"c2-keys-a":1.0,"c2-keys-b":0.9992,"c2-keys-flat":1.5598,"c2-logo-2":2.8954,"c2-logo-h":4.9242,"c2-logo-top":2.4436,"c2-logo-v":0.9178,"c2-mirror-a":0.9609,"c2-mirror-b":0.9593,"c2-mono-2":2.8954,"c2-mono-h":4.9242,"c2-mono-top":2.4436,"c2-mono-v":0.9178,"c2-over":1.6,"c2-poster-a":0.9984,"c2-poster-b":1.0016,"c2-poster-c":1.0,"c2-poster-d":1.0016,"c2-poster-e":1.0016,"c2-slides-2":1.0,"c2-slides":1.0,"c2-star":1.0228,"c2-tee-b":0.7504,"c2-under":1.6,"c2-wall":1.772,"c2-wear-a":1.0,"c2-wear-b":1.0,"c2-wear-c":1.0,"c2-wear-d":1.0,"c3-co":1.8756,"c3-icon":0.8934,"c3-logo-2":1.8758,"c3-logo-h":6.6327,"c3-over":1.6,"c3-tee-back":0.7998,"c3-tee-front":0.7998,"c3-under":1.6,"old-site":1.7181,"old-story":0.5619,"old-tg":1.526,"old-vk":1.4671,"old-yt":1.6994,"p-cska-fight":0.6127,"p-cska":0.6857,"p-dynamo":0.6668,"p-fsbr":1.8019,"p-sa":1.2489,"promo":1.7778}/*/RATIOS*/;

  // ---------- типограф: короткие слова держатся за следующим, тире — за предыдущим ----------
  function nb(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    return t.replace(/\s—/g, ' —');
  }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function T(t) { return esc(nb(t)); }
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
    return '<div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">' + T(title) + '</h2><div>' +
      [].concat(ps).map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') + '</div></div></div>';
  }
  function sec(id, title, ps, vis, bleed) {
    return '<section class="as-sec" id="' + id + '" data-slide>' + tx(title, ps) +
      (vis ? (bleed ? '<div class="as-vis as-up">' + vis + '</div>' : '<div class="as-wrap as-vis as-up">' + vis + '</div>') : '') + '</section>';
  }

  // ---------- данные ----------
  var C = {
    c1: { name: 'преемственность', bg: 'var(--red)', mark: 'c1-mono-v', icon: IMG + 'c1-icon.webp', label: 'Армия спорта' },
    c2: { name: 'движение', bg: 'linear-gradient(180deg,#080000,#07003F 50%,#0044FF)', mark: 'c2-mono-v', icon: svg('c2-icon'), label: 'Армия спорта' },
    c3: { name: 'только слово', bg: '#fff', mark: 'c3-logo-2', icon: svg('c3-icon'), label: 'армия спорта' }
  };
  var PARTNERS = function (own) { return ['p-sa', 'p-cska-fight', own, 'p-cska', 'p-fsbr', 'p-dynamo']; };
  var APPS = [['tcatch', 'T Catch'], ['online', 'Онлайн'], ['mifit', 'Mi Fitness'], ['sportmaster', 'Спортмастер'], ['sportsru', 'Sports.ru'], ['max', 'Макс'], ['gosuslugi', 'Госуслуги'], ['shazam', 'Shazam']];

  // ---------- блоки ----------
  function cover(id, lead) {
    var c = C[id];
    return '<section class="as-cover ' + id + '" id="' + id + '" data-slide><div class="as-wrap mark"><img src="' + svg(c.mark) + '" alt="" loading="lazy"></div>' +
      '<div class="as-wrap"><div class="foot as-up"><h2 class="as-h1">' + T(c.name) + '</h2><p class="as-lead">' + T(lead) + '</p></div></div></section>';
  }
  // все версии знака разом: полосы на своих фонах, в полосе — компоновки одной высоты
  function sys(bands) {
    return '<div class="as-sys">' + bands.map(function (b) {
      var cols = b.files.map(function (f) { return Math.pow(R[f] || 1, .62).toFixed(3) + 'fr'; }).join(' ');
      return '<div class="band' + (b.white ? ' white' : '') + '" style="background:' + (b.bg || '#fff') + ';grid-template-columns:' + cols + '">' +
        b.files.map(function (f) { return '<img src="' + svg(f) + '" alt="" loading="lazy">'; }).join('') + '</div>';
    }).join('') + '</div>';
  }
  function palette(parts) {
    return '<div class="as-pal">' + parts.map(function (p) {
      var cl = (p[4] || '') + (/^#FFF/i.test(p[0]) ? ' light' : '');
      return '<div style="--f:' + p[1] + ';background:' + p[0] + ';color:' + (p[3] || '#fff') + '"' + (cl.trim() ? ' class="' + cl.trim() + '"' : '') + '><span>' + p[2] + '</span></div>';
    }).join('') + '</div>';
  }
  function cobrand(own) {
    return '<div class="as-row">' + PARTNERS(own).map(function (f) { return '<img src="' + svg(f) + '" alt="" loading="lazy">'; }).join('') + '</div>' +
      '<div class="as-wall" data-own="' + own + '"></div>';
  }
  function typeBlock(name, file) {
    return '<div class="as-type"><div class="name">' + esc(name) + '</div><img src="' + svg(file) + '" alt="Спорт объединяет. Ты часть большего. Вместе можем больше" loading="lazy"></div>';
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
  // 3D сразу, рядом рендеры
  function pair3d(model, poster, orbit, renders) {
    return '<div class="as-3dpair"><div class="as-3d" data-model="' + model + '" data-orbit="' + (orbit || '') + '"><div class="poster">' + ph(poster, { cls: 'contain', zoom: false }) + '</div></div>' +
      '<div class="as-renders">' + renders + '</div></div>';
  }
  function flipper(names, loupe) {
    return '<div class="as-flipper"' + (loupe ? ' data-loupe="1"' : '') + '>' + names.map(function (n, k) { return ph(n, { cls: 'contain' + (k ? '' : ' cur'), zoom: false }); }).join('') + '</div>';
  }

  // экраны сайта: подложка и верхний слой из макета, в месте фото — промо-ролик с обрезкой как в Фигме
  var SITES = { c1: { v: [0, 72, 1440, 568], gray: 1 }, c2: { v: [92, 20, 1350, 993], m: [640, 36, 923.6, 903] }, c3: { v: [0, 64, 1440, 836], gray: 1 } };
  function pct(v, W) { return (v / W * 100).toFixed(3) + '%'; }
  function site(id) {
    var d = SITES[id], v = d.v, vid;
    var video = '<video muted loop playsinline preload="none" poster="' + IMG + 'promo.webp"' + (d.gray ? ' class="gray"' : '') + '></video>';
    if (d.m) {
      var m = d.m;
      vid = '<div class="vid star" style="left:' + pct(m[0], 1440) + ';top:' + pct(m[1], 900) + ';width:' + pct(m[2], 1440) + ';height:' + pct(m[3], 900) + ';-webkit-mask-image:url(' + svg('c2-star') + ');mask-image:url(' + svg('c2-star') + ')">' +
        '<div style="position:absolute;left:' + pct(v[0] - m[0], m[2]) + ';top:' + pct(v[1] - m[1], m[3]) + ';width:' + pct(v[2], m[2]) + ';height:' + pct(v[3], m[3]) + '">' + video + '</div></div>';
    } else vid = '<div class="vid" style="left:' + pct(v[0], 1440) + ';top:' + pct(v[1], 900) + ';width:' + pct(v[2], 1440) + ';height:' + pct(v[3], 900) + '">' + video + '</div>';
    function lay(p, alt) { return '<img class="lay" src="' + IMG + id + '-' + p + '-s.webp" srcset="' + IMG + id + '-' + p + '-s.webp 1080w, ' + IMG + id + '-' + p + '.webp 2160w" sizes="(max-width:640px) 100vw, 90vw" alt="' + alt + '" loading="lazy">'; }
    return '<div class="as-site"><div class="chrome"><i></i><i></i><i></i><span>armiya-sporta.ru</span></div><div class="as-scr">' + lay('under', '') + vid + lay('over', 'Первый экран сайта') + '</div></div>';
  }

  // ====================================================================================
  var h = [];

  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта</a><nav>' +
    '<a href="#brief">задача</a><a href="#c1">первая</a><a href="#c2">вторая</a><a href="#c3">альтернатива</a><a href="#sum">итог</a></nav></div></header>');

  // ---------- первый экран ----------
  h.push('<section class="as-hero" id="top" data-slide><div class="as-wrap"><div class="row">' +
    '<h1 class="as-disp">армия спорта</h1>' +
    '<p class="as-lead">' + T('Ребрендинг цифровой платформы, которая объединяет спорт России. Первый этап: две концепции и альтернатива, каждая — на носителях') + '</p></div></div>' +
    '<div class="as-trio">' + ['c1', 'c2', 'c3'].map(function (id) {
      var c = C[id];
      return '<a href="#' + id + '" style="background:' + c.bg + ';color:' + (id === 'c3' ? 'var(--ink)' : '#fff') + (id === 'c3' ? ';box-shadow:inset 0 0 0 1px var(--line)' : '') + '"><span><img src="' + svg(c.mark) + '" alt=""></span><b>' + c.name + '</b></a>';
    }).join('') + '</div></section>');

  // ---------- задача ----------
  h.push(sec('brief', 'сейчас стиль выглядит государственным', [
    'Платформа объединяет спорт России. Сейчас это единоборства, дальше — другие виды спорта, включая «эстетические», и детские секции.',
    'Знак уже знают, поэтому звезду и букву «А» сохраняем. А стиль делаем спортивным и молодым — но таким, чтобы он уместно стоял рядом с ЦСКА.'
  ], '<div class="as-was">' + ph('old-site', { cls: 'tall', ratio: 1.12 }) + ph('old-vk') + ph('old-tg') + ph('old-yt') + ph('old-story', { ratio: 1.47 }) + '</div>'));
  h.push('<section class="as-sec" data-slide><div class="as-wrap"><p class="as-army as-up">' + T('«армия» — это не') + ' <s>' + T('военная тема') + '</s>, ' + T('а объединение людей') + '</p></div></section>');
  h.push('<section class="as-sec" data-slide><div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">по чему проверяем каждый путь</h2><div><p class="as-p">' +
    T('Шесть требований из брифа. Каждая концепция ниже отвечает на все шесть.') + '</p></div></div>' +
    '<ul class="as-list as-vis as-up">' + [
      ['Стоит рядом с чужими логотипами', 'Не теряется и не спорит, особенно рядом с ЦСКА Единоборства'],
      ['Звезда остается', 'В ней читаются армия, звезда, свет и движение'],
      ['Модно и молодежно', 'Без «госушности», но и без «креативного креатива»'],
      ['Без военной эстетики', 'Армия здесь — это люди'],
      ['Растет вместе с платформой', 'Подходит и единоборствам, и «эстетическим» видам, и детским секциям'],
      ['Живет на всех носителях', 'От иконки приложения и монеты до стены зала и формы']
    ].map(function (x) { return '<li><b>' + T(x[0]) + '</b><span>' + T(x[1]) + '</span></li>'; }).join('') + '</ul></div></section>');
  h.push(sec('who', 'стиль должен откликаться у каждого', ['Сейчас логотип носят борцы со всей России, особенно с Кавказа. Но проверяем стиль на четырех людях — и он должен нравиться всем.'],
    '<ul class="as-who">' + [
      ['борец из Дагестана', 'Носит логотип на форме и мерче'],
      ['спортивный функционер', 'Ставит знак рядом с партнерами'],
      ['бегунья', 'Будущие «эстетические» виды спорта'],
      ['ребенок и родитель', 'Детские секции и первые соревнования']
    ].map(function (p) { return '<li><b>' + T(p[0]) + '</b><span>' + T(p[1]) + '</span></li>'; }).join('') + '</ul>' +
    '<div class="as-latin"><b>Sport Alliance</b><p class="as-p">' + T('У платформы есть международное отделение, поэтому знак и шрифт нужно проверить и в латинице. Предлагаем добавить это в требования брифа.') + '</p></div>'));

  // ---------- первая: красная ----------
  h.push(cover('c1', 'Красный — главный цвет. Звезда и «А» остаются узнаваемыми, но становятся собраннее и спортивнее.'));
  h.push(sec('c1-logo', 'красный сверху, синий снизу', [
    'Цвета пришли из прошлого знака и эмблем ЦСКА, поэтому знак сразу считывается как свой. Надпись прописными: так она ровно встает рядом с ЦСКА. Буквы взяты из готового шрифта, но мы подогнали их под наклоны звезды.',
    'Ниже все версии сразу: на белом, на темно-синем, на черном и с подписью о партнерстве. На темно-синем знак белый, потому что синий низ звезды сливается с фоном.'
  ], sys([
    { files: ['c1-logo-h', 'c1-logo-mid', 'c1-logo-2', 'c1-logo-v'], white: 1 },
    { files: ['c1-mono-h', 'c1-mono-mid', 'c1-mono-2', 'c1-mono-v'], bg: '#001857' },
    { files: ['c1-dark-h', 'c1-dark-mid', 'c1-dark-2', 'c1-dark-v'], bg: '#080000' },
    { files: ['c1-desc-h', 'c1-desc-2', 'c1-desc-2b', 'c1-desc-v'], white: 1 }
  ])));
  h.push(sec('c1-color', 'красного больше всего', ['Красный ведет и по возможности стоит сверху. Фон белый, синий и черный — в поддержку.'],
    palette([['#FFFFFF', 2, 'белый', '#121314'], ['#E71E26', 2, 'красный E71E26'], ['#1B43B2', 1, 'синий 1B43B2'], ['#080000', 1, 'черный']]), true));
  h.push(sec('c1-co', 'рядом с партнерами не теряется', ['Главная связка — с ЦСКА Единоборства, для проверки — с ФСБР и Динамо. На пресс-волле знак повторяется десятки раз и остается читаемым.'], cobrand('c1-co')));
  h.push(sec('c1-font', 'шрифт для заголовков', ['Арк — широкий и плотный, уверенно держит короткие заголовки и слоганы.'], typeBlock('Арк', 'c1-font')));
  h.push(sec('c1-app', 'звезда без надписи', ['В маленьком размере работает одна звезда: ее видно среди чужих иконок на телефоне и во вкладке браузера.'], app('c1')));
  h.push(sec('c1-coin', 'все виды спорта на одной монете', [
    'На обороте гравируем все виды, которые объединит платформа: от борьбы и бокса до гимнастики и парусного спорта. Название идет по гурту.',
    'Монету можно покрутить, а рельеф — рассмотреть, наведя на него курсор.'
  ], pair3d('coin_gold', 'c1-coin', '20deg 80deg auto', flipper(['c1-coin-side'], 1) + '<div class="as-grid as-g2">' + ph('c1-coin-a', { cls: 'contain', style: 'background:#fff' }) + ph('c1-coin-b', { cls: 'contain', style: 'background:#fff' }) + '</div>')));
  h.push(sec('c1-wall', 'у каждого зала свой сюжет', ['Для стен — динамичные иллюстрации под вид спорта, который в этом зале. Одна система, много форматов.'],
    '<div class="as-col">' + cell('s12', 'c1-wall-a') + cell('s4', 'c1-art-a') + cell('s4', 'c1-art-b') + cell('s4', 'c1-art-c') + cell('s12', 'c1-wall-b') + '</div>'));
  h.push(sec('c1-award', 'тяжелое основание, легкая звезда', ['Ступени собраны из слоев пластика с зеркальным напылением: на видео они красиво преломляют свет, на фото выглядят мощно, а в руке остаются легкими.'],
    pair3d('cubok', 'c1-award-stack', '', ph('c1-award-man') + ph('c1-award-row', { style: 'background:#fff' }))));
  h.push(sec('c1-wear', 'белый стиль, черная форма', [
    'Фон стиля белый, но белая форма непрактична — поэтому форма черная. Тренеры в красных поло: их сразу видно в зале, а логотип на поло тихий.',
    'Футболку турнира с городом и датой покупают, «потому что был там», — в единоборствах это самый продаваемый мерч. Пока она набрана стандартным шрифтом: фирменный нужно купить. Шлепанцы — для зала и раздевалки.'
  ], '<div class="as-col">' + cell('s6', 'c1-fighter') + cell('s6', 'c1-wear-c') + cell('s4', 'c1-polo-a') + cell('s4', 'c1-polo-b') + cell('s4', 'c1-polo-c', { ratio: .8 }) +
    cell('s6', 'c1-tee-back') + cell('s6', 'c1-tee-front') + cell('s4', 'c1-wear-a') + cell('s4', 'c1-wear-b') + cell('s4', 'c1-slides') + cell('s12', 'c1-labels') + '</div>'));
  h.push(sec('c1-keys', 'брелоки под любой турнир', ['Белый, прозрачный и черный пластик. Надписи меняются под слоган, линию или турнир.'],
    '<div class="as-col">' + cell('s12', 'c1-keys-flat', { style: 'background:#fff' }) + cell('s12', 'c1-keys-b') + '</div>'));
  h.push(sec('c1-site', 'первый экран сайта', ['Знак в центре шапки, под роликом — слоган в цветах знака.'], site('c1')));

  // ---------- вторая: черная с синим ----------
  h.push(cover('c2', 'Черный и синий. Без красного — значит, без отсылки к Красной армии. Острый шрифт и зеркало, в котором каждый видит себя.'));
  h.push(sec('c2-logo', 'монохромный знак', [
    'Звезда и «А» остаются, а цвет уходит: красная звезда слишком напоминает Красную армию. Подход ближе к Nike — знак работает сам по себе, в том числе на одежде. Острые формы шрифта дают резкость и бесстрашие.',
    'Ниже все версии сразу: на белом и на синем рассвете.'
  ], sys([
    { files: ['c2-logo-h', 'c2-logo-top', 'c2-logo-2', 'c2-logo-v'], white: 1 },
    { files: ['c2-mono-h', 'c2-mono-top', 'c2-mono-2', 'c2-mono-v'], bg: 'linear-gradient(180deg,#080000,#07003F 50%,#0044FF)' }
  ])));
  h.push(sec('c2-color', 'синий рассвет', ['Яркий синий выглядит цифровым и современным. Мы даем его градиентом, светлым снизу, как рассвет, — так он не путается со Спортмастером. Основа — черный и синий, красный только в мелких акцентах. На монетах и наградах — золото, потому что это про первое место.'],
    palette([['#080000', 3, 'рассвет', '#fff', 'dawn'], ['#FFFFFF', 2, 'белый', '#121314'], ['#E71E26', .4, ' ']]), true));
  h.push(sec('c2-co', 'рядом с партнерами — спокойно', ['Монохромный знак не спорит с гербами ЦСКА, ФСБР и Динамо и не теряется среди них — ни в ряд, ни на пресс-волле.'], cobrand('c2-co')));
  h.push(sec('c2-font', 'шрифт для заголовков', ['Хромиус — острые формы держат динамику даже в коротких слоганах.'], typeBlock('Хромиус', 'c2-font')));
  // иконка во весь экран: стеклянная звезда, прокрутка уменьшает ее до места в телефоне
  h.push('<section class="as-glass" id="c2-app" data-slide><div class="stick"><canvas></canvas>' +
    '<div class="say"><div class="as-wrap"><h2 class="as-h2">' + T('стеклянная звезда') + '</h2></div></div>' +
    '<div class="ph">' + phone('c2', true) + '</div></div></section>');
  h.push(sec('c2-app-tx', 'иконка во весь экран', ['Белая звезда в толстом стекле, за ним переливаются синий, белый и красный. Сначала иконка занимает весь экран, потом встает на свое место среди приложений. Во вкладке браузера — та же звезда.'], tabBox('c2')));
  h.push(sec('c2-coin', 'в спорте есть место каждому', [
    'На лицевой стороне — руки спортсменов, которые держат друг друга. На обороте — зеркало: внутри знака человек видит себя. Так монета говорит, что платформа ждет новые лица, в том числе тебя.',
    'Зеркало лучше всего работает на серебре, но можно и золото. Название — на гурте. Руки можно сделать и женские, и детские. Кадры справа меняются так, будто взгляд переходит с монеты на отражение.'
  ], pair3d('coin_mirror', 'c2-coin-a', '20deg 80deg auto', flipper(['c2-coin-a', 'c2-coin-b', 'c2-coin-c']) + ph('c2-coin', { cls: 'contain', style: 'background:#fff' }))));
  h.push(sec('c2-wall', 'каждый может больше', ['В зале продолжаем историю с зеркалом: человек видит в отражении себя и понимает, что речь о нем. Серебро здесь не второе место — зеркало показывает каждого без отбора и оценки и само становится фотозоной.'],
    '<div class="as-col">' + cell('s12', 'c2-wall') + '<div class="s4 m12"><div class="as-posters">' + ['c2-poster-e', 'c2-poster-c', 'c2-poster-d', 'c2-poster-a', 'c2-poster-b'].map(function (p, k) { return ph(p, { cls: k ? '' : 'cur', zoom: false }); }).join('') + '</div></div>' +
    cell('s4', 'c2-mirror-a') + cell('s4', 'c2-mirror-b') + '</div>'));
  h.push(sec('c2-award', 'победитель в отражении', ['Места остаются привычными, а зеркальная деталь отражает победителя. Выемка слева — награду удобно держать и наклонять для фото. Наклон вправо вверх — про рост.'],
    pair3d('stela', 'c2-award-stack', '', ph('c2-award-man') + ph('c2-award-row', { style: 'background:#fff' }))));
  h.push(sec('c2-wear', 'синий снизу, как рассвет', ['Форма уходит в синий к низу, знак на ней белый. На поло и мерче логотип тихий.'],
    '<div class="as-col">' + cell('s6', 'c2-wear-a') + cell('s6', 'c2-wear-c') + cell('s4', 'c2-wear-b') + cell('s4', 'c2-tee-b', { ratio: 1 }) + cell('s4', 'c2-wear-d') + cell('s6', 'c2-slides') + cell('s6', 'c2-slides-2') + '</div>'));
  h.push(sec('c2-keys', 'зеркальное серебро', ['Брелоки из зеркального серебра. Надписи меняются под слоган, линию или турнир.'],
    '<div class="as-col">' + cell('s6', 'c2-keys-a') + cell('s6', 'c2-keys-b') + cell('s12', 'c2-keys-flat', { style: 'background:#fff' }) + '</div>'));
  h.push(sec('c2-site', 'первый экран сайта', ['Рассвет на весь экран, ролик — внутри звезды.'], site('c2')));

  // ---------- альтернатива: черно-белая ----------
  h.push(cover('c3', 'Черное и белое. Альтернатива без привязки к ЦСКА: только название, строчными, как у цифровых продуктов.'));
  h.push(sec('c3-logo', 'строчными, как в цифре', [
    'Берем современный шрифт Энджин и убираем заглавные. Этот прием потом идет во все короткие слова и заголовки. Графический знак уходит целиком, как у Nike.',
    'Звезда остается мелкой отсылкой к прошлому: на значках, футболках, брелоках и носках.'
  ], '<div class="as-word"><img src="' + svg('c3-logo-h') + '" alt="армия спорта" loading="lazy"><img class="two" src="' + svg('c3-logo-2') + '" alt="" loading="lazy"></div>'));
  h.push(sec('c3-co', 'выделяется тем, что без звезды', ['У трех логотипов из пяти есть звезды, поэтому слово без знака сразу заметно.'], cobrand('c3-co')));
  h.push(sec('c3-color', 'черное и белое', ['Основа — белый и черный. Красный и синий — только для акцентов.'],
    palette([['#FFFFFF', 2, 'белый', '#121314'], ['#000000', 2, 'черный'], ['#E71E26', .4, ' '], ['#0044FF', .4, ' ']]), true));
  h.push(sec('c3-wear', 'тихо и современно', ['Название мелко на груди, звезда у воротника, на спине — принт турнира.'],
    '<div class="as-grid as-g2">' + ph('c3-tee-front') + ph('c3-tee-back') + '</div>'));
  h.push(sec('c3-app', 'звезда остается в иконке', ['Слово в маленьком размере не читается, поэтому в иконке и во вкладке браузера — звезда.'], app('c3')));
  h.push(sec('c3-site', 'первый экран сайта', ['Ролик на весь экран, слоган строчными.'], site('c3')));

  // ---------- итог ----------
  h.push('<section class="as-sec" id="sum" data-slide>' + tx('три пути рядом', ['Первая — красная и узнаваемая. Вторая — черная с синим, про движение и зеркало. Альтернатива — черно-белая, только слово.']) +
    '<div class="as-wrap as-vis as-up"><div class="as-cmp">' + ['c1', 'c2', 'c3'].map(function (id) {
      var c = C[id];
      return '<a href="#' + id + '" style="background:' + c.bg + ';color:' + (id === 'c3' ? 'var(--ink)' : '#fff') + (id === 'c3' ? ';box-shadow:inset 0 0 0 1px var(--line)' : '') + '"><span><img src="' + svg(c.mark) + '" alt="" loading="lazy"></span><b>' + c.name + '</b></a>';
    }).join('') + '</div></div>' +
    '<div class="as-wrap as-vis"><div class="as-tx as-up"><h2 class="as-h2">что дальше</h2><div><p class="as-p">' + T('Выбираем путь и раскрываем его на носителях следующего этапа. Список носителей подготовит команда заказчика.') + '</p></div></div>' +
    '<ul class="as-next as-vis as-up">' + [
      ['Стенды и стелы', 'Для площадок и турниров'], ['Сертификаты для фото', 'Большие, на пенокартоне'], ['Ринг, татами, флажки', 'А еще бутылки и футболки стаффа'], ['Шаблоны', 'Чтобы дизайнеры команды поддерживали стиль сами']
    ].map(function (x) { return '<li><b>' + T(x[0]) + '</b><span>' + T(x[1]) + '</span></li>'; }).join('') + '</ul></div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><div class="in"><span>Армия спорта, ребрендинг, первый этап</span><span>Даша Купцова, <a href="https://kupdasha.ru">kupdasha.ru</a></span></div></div></footer>');
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

  // скелет страницы уходит, когда готов первый экран
  (function () {
    var sk = document.getElementById('as-skel'); if (!sk) return;
    var first = $('.as-trio img'), done = false;
    function off() { if (done) return; done = true; sk.classList.add('off'); setTimeout(function () { sk.remove(); }, 600); }
    if (first.complete) off(); else { first.addEventListener('load', off); first.addEventListener('error', off); }
    setTimeout(off, 2500);
  })();

  // появление
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.as-up,.as-army').forEach(function (el) { io.observe(el); });

  // шапка: текущий раздел
  var top = $('.as-top'), darks = $$('.as-cover.c1,.as-cover.c2,.as-glass'), links = $$('.as-top nav a'), marks = ['brief', 'c1', 'c2', 'c3', 'sum'].map(function (id) { return document.getElementById(id); });
  function onScroll() {
    var cur = -1;
    marks.forEach(function (m, i) { if (m && m.getBoundingClientRect().top < innerHeight * .45) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    // шапка белая поверх красной и синей обложек и стеклянной звезды
    var light = false;
    darks.forEach(function (d) { var r = d.getBoundingClientRect(); if (r.top <= 32 && r.bottom > 32) light = true; });
    top.classList.toggle('light', light);
    if (G) G();
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', function () { if (G) G(); });

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
      var W = wall.clientWidth || 1000, n = innerWidth < 640 ? 3 : 6, cw = W / n, ch = cw * .7, cols = n + 6, rows = Math.ceil(wall.clientHeight / ch) + 1, s = '';
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) s += '<img src="' + svg(list[(c + r * 3) % list.length]) + '" alt="" loading="lazy">';
      wall.innerHTML = '<div class="tile" style="--n:' + cols + ';--cw:' + cw + 'px;--ch:' + ch + 'px">' + s + '</div>';
    }
    build();
    var w0 = innerWidth; addEventListener('resize', function () { if (Math.abs(innerWidth - w0) > 40) { w0 = innerWidth; build(); } });
  });

  // ---------- 3D: грузится заранее, показывается сразу ----------
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
        var mv = $('model-viewer', box);
        mv.addEventListener('load', function () { box.classList.add('ready'); });
      }).catch(function () {});
    });
  }, { rootMargin: '900px 0px' });
  $$('.as-3d').forEach(function (b) { io3d.observe(b); });

  // ---------- рендеры: кадры сменяются сами, лупа над рельефом ----------
  $$('.as-flipper').forEach(function (f) {
    var it = $$('.as-ph', f), k = 0;
    function show(j) { k = j; it.forEach(function (x, i) { x.classList.toggle('cur', i === j); }); }
    if (it.length > 1) {
      f.addEventListener('click', function () { show((k + 1) % it.length); });
      if (!reduce) whileVisible(f, function () { show((k + 1) % it.length); }, 2600);
    }
    if (f.dataset.loupe) {
      var lp = document.createElement('div'); lp.className = 'as-loupe'; f.appendChild(lp);
      f.addEventListener('pointermove', function (e) {
        var r = f.getBoundingClientRect(), img = $('img', it[k]), src = img && (img.currentSrc || img.src); if (!src) return;
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height, Z = 2.6, L = lp.offsetWidth, fw = r.width * .88 * Z;
        lp.style.left = (e.clientX - r.left - L / 2) + 'px'; lp.style.top = (e.clientY - r.top - L / 2) + 'px';
        lp.style.backgroundImage = 'url(' + src.replace('-s.webp', '.webp') + ')';
        lp.style.backgroundSize = fw + 'px ' + fw + 'px';
        lp.style.backgroundPosition = (L / 2 - (px - .06) / .88 * fw) + 'px ' + (L / 2 - (py - .06) / .88 * fw) + 'px';
        lp.classList.add('on');
      });
      f.addEventListener('pointerleave', function () { lp.classList.remove('on'); });
    }
  });

  // постеры в зале
  $$('.as-posters').forEach(function (box) {
    var it = $$('.as-ph', box), k = 0;
    function show(j) { k = j; it.forEach(function (x, i) { x.classList.toggle('cur', i === j); }); }
    box.addEventListener('click', function () { show((k + 1) % it.length); });
    if (!reduce) whileVisible(box, function () { show((k + 1) % it.length); }, 2400);
  });

  // иконка появляется в телефоне
  $$('.as-phonebox').forEach(function (box) {
    var me = $('.as-a.me', box);
    new IntersectionObserver(function (es, o) { es.forEach(function (e) { if (e.isIntersecting) { setTimeout(function () { me.classList.add('on'); }, 250); o.disconnect(); } }); }, { threshold: .4 }).observe(box);
  });

  // промо-ролик в экранах сайта — играет, только когда на экране; на телефоне легкая версия
  var vio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (!v.src) v.src = IMG + (innerWidth < 700 ? 'promo-s.mp4' : 'promo.mp4'); var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else if (v.src) v.pause();
    });
  }, { rootMargin: '200px 0px' });
  if (!reduce) $$('.as-scr video').forEach(function (v) { vio.observe(v); });

  // ---------- стеклянная звезда во весь экран: прокрутка сажает ее на место иконки в телефоне ----------
  var G = (function () {
    var sec = $('.as-glass'); if (!sec) return null;
    var cv = $('canvas', sec), say = $('.say', sec), ph = $('.ph', sec), slot = $('.as-a.slot i', sec);
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
      var t = ease(Math.min(1, Math.max(0, (p - .3) / .62)));
      say.style.opacity = Math.max(0, 1 - p / .22);
      // телефон поднимается снизу
      var Hp = ph.offsetHeight, ty0 = Hp * 1.05, ty1 = vh * .16 - (vh - Hp);
      ph.style.transform = 'translate(-50%,' + (ty0 + (ty1 - ty0) * t) + 'px)';
      // звезда уменьшается и садится на место иконки
      var s = slot.getBoundingClientRect(), icon = vh * .6, cx = vw / 2, cy = vh / 2;
      var k = 1 + (s.width / icon - 1) * t;
      var tX = cx + (s.left + s.width / 2 - cx) * t - cx * k, tY = cy + (s.top + s.height / 2 - cy) * t - cy * k;
      var inX = (vw - icon) / 2 * t, inY = (vh - icon) / 2 * t, rad = icon * .23 * t;
      cv.style.transform = 'translate(' + tX + 'px,' + tY + 'px) scale(' + k + ')';
      cv.style.clipPath = 'inset(' + inY + 'px ' + inX + 'px ' + inY + 'px ' + inX + 'px round ' + rad + 'px)';
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
