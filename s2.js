/* «Армия спорта», второй этап — развитие выбранного направления: знак, шрифт и носители.
   Страница собирается здесь; общее оформление — as.css (первый этап), свое — s2.css.
   Картинки и знаки второго этапа — img/s2-… (у картинок -s — легкая копия для телефона, -gold — маска золота для блика).
   Адрес файлов — window.AS_BASE (на Тильде загрузчик ставит адрес jsDelivr по номеру версии), локально — та же папка. */
(function () {
  'use strict';
  var BASE = window.AS_BASE || '';
  var IMG = new URL(BASE + 'img/', document.baseURI).href;
  var root = document.getElementById('as');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = '1';
  root.classList.add('as', 's2');
  root.setAttribute('lang', 'ru');

  // пропорции картинок второго этапа (заполняет build.py)
  var R = /*RATIOS*/{"a-cap":1.0,"a-merch-43":2.0785,"a-merch-45":1.0,"a-pens":1.7804,"a-site":1.6,"a-small-1":6.5429,"a-small-2":6.5429,"aw-1-full":0.7317,"aw-1-gold":0.7317,"aw-1-top":0.7317,"aw-1":0.7317,"aw-2-full":0.7317,"aw-2-gold":0.7317,"aw-2-top":0.7317,"aw-2":0.7317,"aw-3-full":0.7317,"aw-3-gold":0.7317,"aw-3-top":0.7317,"aw-3":0.7317,"aw-4-full":0.7317,"aw-4-gold":0.7317,"aw-4":0.7317,"aw-man":1.7769,"clip":1.7778,"coin-1-gold":1.0,"coin-1":1.0,"coin-2-gold":1.0,"coin-2":1.0,"coin-3-gold":1.0,"coin-3":1.0,"coin-4-gold":1.0,"coin-4":1.0,"coin-5-gold":1.0,"coin-5":1.0,"coin-6-gold":1.0,"coin-6":1.0,"f-chr-caps-center":7.6997,"f-chr-caps-horizontal":7.8607,"f-chr-caps-stacked":3.6432,"f-chr-lower-center":6.8399,"f-chr-lower-horizontal":7.0097,"f-chr-lower-stacked":3.3129,"f-chr-sentence-center":6.9087,"f-chr-sentence-horizontal":7.0788,"f-chr-sentence-stacked":3.0178,"f-eng-caps-center":7.5709,"f-eng-caps-horizontal":7.7446,"f-eng-caps-stacked":3.5171,"f-eng-lower-center":6.3618,"f-eng-lower-horizontal":6.5429,"f-eng-lower-stacked":3.1009,"f-eng-sentence-center":6.5246,"f-eng-sentence-horizontal":6.7063,"f-eng-sentence-stacked":2.807,"f-gol-caps-center":7.9002,"f-gol-caps-horizontal":8.1455,"f-gol-caps-stacked":3.661,"f-gol-lower-center":6.558,"f-gol-lower-horizontal":6.7897,"f-gol-lower-stacked":3.1909,"f-gol-sentence-center":6.6728,"f-gol-sentence-horizontal":6.9049,"f-gol-sentence-stacked":2.9066,"fav":1.1276,"fm-1":1.0,"fm-2":1.0,"fm-3":1.0,"i-2":1.7768,"i-3":1.7768,"i-4":1.7768,"i-5":1.7787,"i-6":1.7768,"icon":1.0,"k-38":1.0,"k-46":1.0,"k-48":1.0,"k-55":1.0,"m-pattern":0.7464,"medal":1.7769,"mk-chr-caps-center":7.6997,"mk-chr-caps-horizontal":7.8607,"mk-chr-caps-stacked":3.6432,"mk-chr-lower-center":6.8399,"mk-chr-lower-horizontal":7.0097,"mk-chr-lower-stacked":3.3129,"mk-chr-sentence-center":6.9087,"mk-chr-sentence-horizontal":7.0788,"mk-chr-sentence-stacked":3.0178,"mk-eng-caps-center":7.5709,"mk-eng-caps-horizontal":7.7446,"mk-eng-caps-stacked":3.5173,"mk-eng-lower-center":6.3618,"mk-eng-lower-horizontal":6.5429,"mk-eng-lower-stacked":3.1009,"mk-eng-sentence-center":6.5246,"mk-eng-sentence-horizontal":6.7063,"mk-eng-sentence-stacked":2.807,"mk-gol-caps-center":7.8977,"mk-gol-caps-horizontal":8.1434,"mk-gol-caps-stacked":3.6615,"mk-gol-lower-center":6.5574,"mk-gol-lower-horizontal":6.7893,"mk-gol-lower-stacked":3.1915,"mk-gol-sentence-center":6.6724,"mk-gol-sentence-horizontal":6.9043,"mk-gol-sentence-stacked":2.9063,"mw-chr-caps-center":7.6997,"mw-chr-caps-horizontal":7.8607,"mw-chr-caps-stacked":3.6432,"mw-chr-lower-center":6.8399,"mw-chr-lower-horizontal":7.0097,"mw-chr-lower-stacked":3.3129,"mw-chr-sentence-center":6.9087,"mw-chr-sentence-horizontal":7.0788,"mw-chr-sentence-stacked":3.0178,"mw-eng-caps-center":7.5709,"mw-eng-caps-horizontal":7.7446,"mw-eng-caps-stacked":3.5173,"mw-eng-lower-center":6.3618,"mw-eng-lower-horizontal":6.5429,"mw-eng-lower-stacked":3.1009,"mw-eng-sentence-center":6.5246,"mw-eng-sentence-horizontal":6.7063,"mw-eng-sentence-stacked":2.807,"mw-gol-caps-center":7.8977,"mw-gol-caps-horizontal":8.1434,"mw-gol-caps-stacked":3.6615,"mw-gol-lower-center":6.5574,"mw-gol-lower-horizontal":6.7893,"mw-gol-lower-stacked":3.1915,"mw-gol-sentence-center":6.6724,"mw-gol-sentence-horizontal":6.9043,"mw-gol-sentence-stacked":2.9063,"p-51":0.75,"p-52":0.75,"p-53":0.75,"pt-1":1.0,"pt-2":1.0,"pt-3":1.0,"pt-4":1.0,"pt-5":1.0,"pt-6":1.0,"pt-7":1.0,"pt-8":1.0,"pt-9":1.0,"site-over":1.6,"tee-navy":1.0,"tee-red":1.0,"tee-stripe":1.0,"tee-white":1.0,"vc-chr-caps":0.7848,"vc-chr-lower":0.7715,"vc-chr-sentence":0.745,"vc-eng-caps":0.7664,"vc-eng-lower":0.7381,"vc-eng-sentence":0.7098,"vc-gol-caps":0.7872,"vc-gol-lower":0.7533,"vc-gol-sentence":0.7269,"vid-half":6.548,"vid-line":7.0089,"vid-solid":6.548,"vm-chr-caps":0.7848,"vm-chr-lower":0.7715,"vm-chr-sentence":0.745,"vm-eng-caps":0.7664,"vm-eng-lower":0.7381,"vm-eng-sentence":0.7098,"vm-gol-caps":0.7872,"vm-gol-lower":0.7533,"vm-gol-sentence":0.7269,"w-ball":1.7768,"w-fence":1.7787,"w-gym-a":1.7769,"w-gym-b":1.7769,"w-swim":1.7769,"w-win":1.7769,"wl-ball":1.7804,"wl-box":1.7804,"wl-gym":1.7804,"wl-hall-box":1.7769,"wl-hall-judo":1.7769,"wl-judo":2.3529,"wl-run":1.7804,"wl-ski":1.7804}/*/RATIOS*/;
  var STAGE1 = 'https://kup-version.kupdaria26.workers.dev/armysport';

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
    var r = o.ratio || R[name] || 1, big = IMG + 's2-' + name + '.webp', small = IMG + 's2-' + name + '-s.webp';
    return '<div class="as-ph' + (o.zoom === false ? '' : ' zoom') + (o.cls ? ' ' + o.cls : '') + '" style="aspect-ratio:' + r + '" data-big="' + big + '">' +
      '<img src="' + small + '" srcset="' + small + ' 820w, ' + big + ' 1800w" sizes="' + (o.sizes || '(max-width:640px) 100vw, 60vw') + '" alt="' + esc(o.alt || '') + '" loading="lazy" decoding="async">' +
      (o.gold ? '<i class="glint" style="-webkit-mask-image:url(' + IMG + 's2-' + name + '-gold.webp);mask-image:url(' + IMG + 's2-' + name + '-gold.webp)"></i>' + (o.gloss ? '<i class="gloss"></i>' : '') : '') + '</div>';
  }
  function tx(title, ps) {
    return '<div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">' + esc(nbh(title)) + '</h2><div>' +
      [].concat(ps || []).map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') + '</div></div></div>';
  }
  function sec(id, title, ps, vis) {
    return '<section class="as-sec" id="' + id + '" data-slide>' + tx(title, ps) + (vis ? '<div class="as-wrap as-vis as-up">' + vis + '</div>' : '') + '</section>';
  }
  function sub(title, ps, vis) {
    return '<div class="s2-sub">' + tx(title, ps) + (vis ? '<div class="as-wrap as-vis as-up">' + vis + '</div>' : '') + '</div>';
  }
  // картинки в ряд одной высоты: ширина по пропорциям
  function fit(items) {
    return '<div class="s2-fit">' + items.map(function (it) { return '<div style="flex:' + (R[it[0]] || 1) + ' 1 0">' + ph(it[0], it[1]) + '</div>'; }).join('') + '</div>';
  }
  function tabs(labels) {
    return '<div class="as-sw-tabs">' + labels.map(function (l, i) { return '<button type="button"' + (i ? '' : ' class="on"') + '>' + T(l) + '<i></i></button>'; }).join('') + '</div>';
  }
  var ICON = {
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    hand: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 26V11a3 3 0 0 1 6 0v12M25 22v-3a3 3 0 0 1 6 0v6M31 25v-1a3 3 0 0 1 6 0v9a11 11 0 0 1-11 11h-3a9 9 0 0 1-7-3.4l-6-7.8a2.6 2.6 0 0 1 4-3.3l3 3.5"/></svg>'
  };

  // ---------- данные ----------
  var FONTS = [
    ['eng', 'Энджин', 'https://www.artlebedev.ru/type/engine/#drive'],
    ['chr', 'Хромиус', 'https://www.artlebedev.ru/type/chromius/#drive'],
    ['gol', 'Golos Text', 'https://fonts.google.com/specimen/Golos+Text', 'Шрифт заголовков этого сайта. Для знака не рекомендуется: у него бесплатная лицензия, и проекту он дает меньше уникальности, чем платный шрифт. Подойдет, например, для видеоматериалов.']
  ];
  var CASES = [['lower', 'строчные'], ['sentence', 'с заглавной'], ['caps', 'заглавные']];
  var LAYS = ['horizontal', 'stacked', 'center'];
  var PARTNERS = ['p-sa', 'p-cska-fight', null, 'p-cska', 'p-fsbr', 'p-dynamo'];

  // строки одного шрифта: регистр × три компоновки
  function fontRows(prefix, f) {
    return CASES.map(function (c) {
      return '<div class="row" tabindex="0" aria-label="' + esc(f[1] + ', ' + c[1]) + '">' + LAYS.map(function (l) {
        return '<span class="' + l + '"><img src="' + svg(prefix + f[0] + '-' + c[0] + '-' + l) + '" alt="" fetchpriority="low" decoding="async"></span>';
      }).join('') + '</div>';
    }).join('');
  }
  // один шрифт крупно (вкладка)
  function fontTable(prefix, f) { return '<div class="s2-fonts one">' + fontRows(prefix, f) + '</div>'; }
  // все три шрифта разом (монохром)
  function monoTable(prefix, cls) {
    return '<div class="s2-fonts ' + cls + '">' + FONTS.map(function (f) {
      return '<div class="grp"><span class="name">' + esc(f[1]) + '</span>' + fontRows(prefix, f) + '</div>';
    }).join('') + '</div>';
  }
  // телефон с иконкой среди привычных приложений
  var APPS = [['tcatch', 'T Catch'], ['online', 'Онлайн'], ['mifit', 'Mi Fitness'], ['sportmaster', 'Спортмастер'], ['sportsru', 'Sports.ru'], ['max', 'Макс'], ['gosuslugi', 'Госуслуги'], ['shazam', 'Shazam']];
  function phone() {
    return '<div class="as-phone"><div class="as-screen"><div class="isl"></div><div class="time">21:58</div><div class="as-apps">' +
      '<div class="as-a me on"><i><img src="' + IMG + 's2-icon.webp" alt="" loading="lazy"></i><span>Армия Спорта</span></div>' +
      APPS.map(function (a) { return '<div class="as-a"><i style="background-image:url(' + IMG + 'app-' + a[0] + '.webp)"></i><span>' + a[1] + '</span></div>'; }).join('') +
      '</div></div></div>';
  }
  function cobrand() {
    return '<div class="s2-co">' + FONTS.map(function (f) {
      return '<div class="strip"><span class="name">' + esc(f[1]) + '</span><div class="logos">' + PARTNERS.map(function (p) {
        return p ? '<img src="' + svg(p) + '" alt="" fetchpriority="low" decoding="async">' : '<img class="own" data-font="' + f[0] + '" src="' + svg('s2-vc-' + f[0] + '-lower') + '" alt="армия спорта" fetchpriority="low" decoding="async">';
      }).join('') + '</div></div>';
    }).join('') + '</div>';
  }

  // ====================================================================================
  var h = [];

  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, второй этап</a><nav>' +
    '<a href="#mark">знак</a><a href="#mono">монохром</a><a href="#small">малые размеры</a><a href="#film">ролик</a><a href="#merch">мерч</a><a href="#walls">стены</a><a href="#award">награда</a><a href="#coins">монеты</a><a href="#wear">одежда</a></nav></div></header>');
  h.push('<button type="button" class="as-up-btn" aria-label="наверх">' + ICON.up + '</button>');

  // ---------- первый экран: звезда, рядом фраза и кнопка — одной композицией ----------
  h.push('<section class="as-hero s2-hero" id="top" data-slide><div class="as-wrap"><div class="s2-heroin">' +
    '<div class="s2-heromark"><div class="star"><img src="' + svg('s2-vc-eng-lower') + '" alt="армия спорта"></div></div>' +
    '<div class="s2-herotx"><h1 class="as-h1">доработка первого этапа</h1><p class="as-lead">' + T('Выбранная звезда в работе — шрифт, версии знака и носители.') + '</p>' +
    '<a class="s2-back" href="' + STAGE1 + '">стартовая презентация</a></div></div></div></section>');

  // ---------- основная версия: цветная звезда, три шрифта во вкладках ----------
  h.push(sec('mark', 'основная версия', [
    'Звезда между словами гармонична, только когда оба слова набраны строчными или оба — заглавными. Шрифт в логотипах подогнан под углы звезды, кое-где буквы подрезаны — в наборе текста этого не видно.'
  ], '<div class="s2-fontsw">' + tabs(FONTS.map(function (f) { return f[1]; })) + '<div class="stage">' + FONTS.map(function (f, i) {
    return '<div class="pane' + (i ? '' : ' on') + '">' + fontTable('s2-f-', f) + '<p class="note">' + (f[3] ? T(f[3]) + ' ' : '') + '<a href="' + f[2] + '" target="_blank" rel="noopener">посмотреть шрифт целиком</a></p></div>';
  }).join('') + '</div></div>'));

  h.push('<div class="s2-sub" id="co">' + tx('в кобрендинге', ['Вертикальная версия рядом с партнерами — в каждом из трех шрифтов.']) +
    '<div class="as-wrap as-vis as-up">' + tabs(CASES.map(function (c) { return c[1]; })) + cobrand() + '</div></div>');

  // ---------- дополнительная: монохромная звезда ----------
  h.push(sec('mono', 'монохромная звезда', [
    'Звезда всегда одноцветная: белая, черная или с вырубкой вместо синего. Фирменные красный и синий уходят с нее и появляются вокруг логотипа — в фоне, графике, паттерне, плашке.'
  ], '<div class="s2-fontsw s2-mono">' + tabs(FONTS.map(function (f) { return f[1]; })) +
    '<div class="row2"><div class="bgic" role="group" aria-label="фон">' + [['k', 'на черном'], ['w', 'на белом'], ['p', 'на узоре']].map(function (b, i) {
      return '<button type="button" class="' + b[0] + (i ? '' : ' on') + '" aria-label="' + b[1] + '" title="' + b[1] + '"><i' + (b[0] === 'p' ? ' style="background-image:url(' + svg('s2-m-pattern') + ')"' : '') + '></i></button>';
    }).join('') + '</div>' +
    '<div class="stage k" style="--pat:url(' + svg('s2-m-pattern') + ')">' + FONTS.map(function (f, i) {
      return '<div class="pane' + (i ? '' : ' on') + '">' + fontTable('s2-mw-', f).replace('s2-fonts one', 's2-fonts one w') + fontTable('s2-mk-', f).replace('s2-fonts one', 's2-fonts one k') + '</div>';
    }).join('') + '</div></div></div>' +
    '<div class="s2-pal"><div class="cols"><p class="as-p">' + T('Красный преобладает и по возможности стоит сверху. Основной фон — белый.') + '</p><p class="as-p">' + T('Синий в знаке сделан ярче, чтобы сочетаться с узорами и выглядеть цифровым и современным.') + '</p></div><div class="as-pal">' +
    [['белый', '#FFFFFF', 3, 'light'], ['красный', '#E71E26', 3], ['синий', '#002FFF', 1.5], ['черный', '#080000', 1.5]].map(function (c) {
      return '<div class="' + (c[3] || '') + '" style="--f:' + c[2] + ';background:' + c[1] + ';color:' + (c[3] ? '#121314' : '#fff') + '"><span>' + c[0] + '<br>' + c[1] + '</span></div>';
    }).join('') + '</div></div>'));

  // ---------- малые размеры: иконка, фавикон и сайт в макетах, правила — в картинках ----------
  h.push(sec('small', 'малые размеры', ['Иконка приложения, фавикон и сайт — в макетах телефона и браузера. Ниже — как знак ведет себя в мелком размере и в техническом нанесении.'],
    '<div class="as-app s2-app"><div class="as-phonebox">' + phone() + '</div>' +
    '<div class="as-tabbox"><div class="as-bigicon"><img src="' + IMG + 's2-icon.webp" alt="иконка приложения" loading="lazy"></div>' +
    '<div class="as-browser"><div class="tab"><img class="fav" src="' + svg('s2-fav') + '" alt="" loading="lazy"><span>Армия Спорта</span></div><div class="url">armiya-sporta.ru</div></div></div></div>' +
    // сайт: ролик под слоем страницы, как на живом сайте
    '<div class="as-site s2-site"><div class="chrome"><i></i><i></i><i></i><span><img class="fav" src="' + svg('s2-fav') + '" alt="">armiya-sporta.ru</span></div>' +
    '<div class="scr"><video muted loop playsinline preload="none" poster="' + IMG + 'promo.webp"></video>' +
    '<img class="over" src="' + IMG + 's2-site-over-s.webp" srcset="' + IMG + 's2-site-over-s.webp 900w, ' + IMG + 's2-site-over.webp 1800w" sizes="(max-width:640px) 100vw, 70vw" alt="первый экран сайта" loading="lazy"></div></div>').replace('class="as-sec"', 'class="as-sec s2-tint"'));
  // дальше — на белом: правила мелкого размера и носители
  h.push('<div class="s2-after"><div class="as-wrap as-vis as-up">' +
    '<div class="s2-rules">' +
    '<figure class="s2-ruler"><figcaption class="as-p">' + T('Меньше 0,5 см — логотип одного цвета: два цвета звезды в мелком размере сливаются.') + '</figcaption>' +
    '<div class="box"><div class="lg"><img class="c" src="' + svg('s2-f-eng-lower-horizontal') + '" alt=""><img class="m" src="' + svg('s2-a-small-1') + '" alt=""></div>' +
    '<div class="scale"><span>0,5 см</span></div><b class="cm">2 см</b></div></figure>' +
    '<figure class="s2-engrave"><figcaption class="as-p">' + T('Если лак, гравировка или другие технические особенности макета невозможны — вариант с обводкой.') + '</figcaption>' +
    '<div class="box"><div class="plate print"><img src="' + svg('s2-f-eng-lower-horizontal') + '" alt=""><span>лак, печать</span></div>' +
    '<div class="plate metal"><img src="' + svg('s2-a-small-2') + '" alt=""><span>гравировка, тиснение</span></div></div></figure></div>' +
    '<div class="as-col">' +
    '<div class="s8">' + ph('a-pens') + '</div><div class="s4">' + ph('a-cap') + '</div>' +
    '<div class="s8">' + ph('a-merch-43') + '</div><div class="s4">' + ph('a-merch-45') + '</div></div></div></div>');

  // ---------- угол ролика: ролик целиком на экране ----------
  h.push(sec('film', 'в углу ролика', ['Версия для угла ролика: читается в маленьком размере в левом верхнем углу, на контрастном и меняющемся фоне.'],
    '<div class="s2-filmbox">' + tabs(['полупрозрачный знак', 'с обводкой', 'монолитный знак']) +
    '<div class="s2-film"><video muted loop playsinline preload="none" poster="' + IMG + 's2-clip.webp"><source src="' + IMG + 's2-clip.mp4" type="video/mp4"></video>' +
    ['half', 'line', 'solid'].map(function (v, i) { return '<img class="corner' + (i ? '' : ' on') + '" src="' + svg('s2-vid-' + v) + '" alt="">'; }).join('') + '</div></div>'));

  // ---------- брелоки и мелкий мерч ----------
  h.push(sec('merch', 'брелоки и мелкий мерч', [],
    '<div class="as-grid s2-g4">' + ['k-46', 'k-55', 'k-48', 'k-38'].map(function (k) { return ph(k); }).join('') + '</div>'));

  // ---------- с графикой и фотографиями ----------
  h.push(sec('posters', 'с графикой и фото', [
    'Логотип в паре с фирменной графикой, паттерном и реальными фотографиями схваток и борцов.',
    'Это не финальные макеты, а пример, чтобы посмотреть именно логотип.'
  ], '<div class="as-grid as-g3 s2-posters">' + ['p-51', 'p-52', 'p-53'].map(function (p) { return ph(p); }).join('') + '</div>'));

  // ---------- стены и иллюстрации ----------
  // правила комиксной стилистики: иконка у заголовка, пункты — текстом; новый вид спорта — схемой
  var IC = {
    yes: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    no: '<path d="M7 7l10 10M17 7L7 17"/>',
    lib: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    prompt: '<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M7.5 10l2.5 2-2.5 2M12.5 14.5h4"/>',
    refs: '<rect x="3.5" y="7.5" width="12" height="10" rx="2"/><path d="M8.5 4.5h10a2 2 0 0 1 2 2v8"/><path d="M5.5 15.5l3-3 2.5 2.5 1.5-1.5 2 2"/>',
    trace: '<path d="M5 18C7 9 17 15 19 6"/><rect x="3" y="16" width="4" height="4" rx="1"/><rect x="17" y="4" width="4" height="4" rx="1"/>',
    book: '<path d="M5 4.5h10.5a3 3 0 0 1 3 3v12H8a3 3 0 0 1-3-3z"/><path d="M5 16.5a3 3 0 0 1 3-3h10.5M9 8.5h6"/>',
    layout: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M3.5 9h17M9.5 9v11.5"/>'
  };
  function ic(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>'; }
  function items(list) { return '<ul class="pts">' + list.map(function (x) { return '<li>' + T(x) + '</li>'; }).join('') + '</ul>'; }
  function head(icon, t) { return '<h4>' + ic(icon) + '<span>' + T(t) + '</span></h4>'; }
  var RULES = '<div class="s2-howto">' +
    '<div class="yes">' + head('yes', 'где уместно') + items(['афиши и обложки турниров', 'баннеры и промо', 'первые экраны сайта', 'мерч', 'стены и навигация в залах', 'анонсы крупных событий']) +
      '<p class="hint">' + T('Одна иллюстрация на носитель — акцент, а не фон') + '</p></div>' +
    '<div class="no">' + head('no', 'где неуместно') + items(['расписания и таблицы', 'документы и договоры', 'личный кабинет и формы', 'карточки спортсменов — там фото', 'иконки, аватарки, мелкие превью', 'рядом с другой графикой']) + '</div>' +
    '<div class="lib">' + head('lib', 'библиотека вместо генераций') + '<ul class="pts"><li>' + T('сцены по видам спорта, широкие и вертикальные') + '</li><li>' + T('элементы без фона: фигуры, предметы, вспышки, лучи') + '</li>' +
      '<li>' + T('четыре цвета и правила фона') + '<div class="pal"><i style="background:#E71E26"></i><i style="background:#0A1033"></i><i style="background:#002FFF"></i><i style="background:#FFFFFF"></i></div></li>' +
      '<li>' + T('все в векторе после трассировки') + '</li></ul></div>' +
    '<div class="new">' + head('plus', 'новый вид спорта') + '<ol class="flow">' + [['prompt', 'промт стиля'], ['refs', '2–3 референса из библиотеки'], ['trace', 'трассировка'], ['book', 'в библиотеку'], ['layout', 'в макет']].map(function (x) {
      return '<li><b>' + ic(x[0]) + '</b><span>' + T(x[1]) + '</span></li>';
    }).join('') + '</ol></div></div>';
  var PROMPT = ['[The swimmer is swimming in the pool] — описание сцены',
    'Look and feel: a sharp, flat vector piece in the spirit of a contemporary sports poster drawn in Illustrator. Everything is built from solid single-color shapes with razor-clean edges and smooth, assured curves. The moment of contact is marked with pointed geometric starbursts, there are broad rays opening out like a fan, and the motion is carried by solid vector speed lines and shapes. The camera angle is bold, with heavy foreshortening, so the main object (the glove, the ball, the blade, the plates) is blown up in scale and thrust toward the viewer. The figures are pared down and stylized, faces left blank, but their poses are full of energy and you can feel the speed and the force of the hit.',
    'Keep it free of any pencil, crayon or brush marks, scribbles, grain, noise, paper texture or hand-drawn unevenness.',
    'Colors are limited to saturated red, deep navy, bright cobalt blue and off-white, nothing beyond that: no green, no yellow, no gradients and no shading.',
    'The image is a wide horizontal panorama in 21:9, with the scene spread over the full width. Leave out any text, letters, numbers, logos, signatures or watermarks.'];
  h.push(sec('walls', 'стены и иллюстрации', [
    'Масштабирование решают готовые библиотеки иллюстраций под разные виды спорта и коллажи из объектов без фона. Плюс — универсальные иллюстрации на спортивную тему без конкретного вида спорта.',
    'Графика сочетается с фотографиями реальных спортсменов или работает сама, как иллюстрация.'
  ], '<p class="s2-lbl">с фотографией</p><div class="as-grid as-g2">' + ph('i-2') + ph('i-4') + '</div>' +
    '<p class="s2-lbl">только иллюстрация</p><div class="as-grid as-g3">' + ph('i-5') + ph('i-3') + ph('i-6') + '</div>'));
  h.push('<div class="s2-sub" id="walls-how">' + tx('пояснения к оформлению стен', ['Стены залов в комиксной стилистике. Правила и промт для генераций — по кнопкам.']) +
    '<div class="as-wrap as-vis as-up"><div class="s2-more"><button type="button" class="as-btn" data-open="rules" aria-expanded="false">правила использования</button>' +
    '<button type="button" class="as-btn" data-open="prompt" aria-expanded="false">промт</button></div>' +
    '<div class="s2-panel" id="s2-rules" hidden>' + RULES + '</div>' +
    '<div class="s2-panel" id="s2-prompt" hidden><p class="s2-model">' + T('Модель генерации — GPT Image 2.') + '</p><div class="pr"><div class="code" lang="en">' + PROMPT.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
    '<button type="button" class="as-btn copy">скопировать промт</button></div>' + ph('w-swim') + '</div></div>' +
    '<div class="s2-walls">' + fit([['wl-hall-judo'], ['wl-hall-box']]) + fit([['wl-ski'], ['wl-gym'], ['wl-run']]) + fit([['wl-ball'], ['wl-box'], ['wl-judo']]) + '</div></div></div>');

  // ---------- награда ----------
  h.push(sec('award', 'награда', [
    'Награда «победитель в отражении» развивается дальше: зеркальная поверхность, вырубка логотипа, соразмерность атлету. Теперь на нее переносится вся информация с текущей стелы: логотип «Армии спорта», герб ЦСКА, знак вида спорта, «1 место», формулировка зачета, название чемпионата, год и строка «При поддержке ЦСКА Единоборства».',
    'Задача — проверить, выдержит ли форма такую нагрузку, и не перегрузить ее. Основание — фундаментальнее, но не тяжелее.'
  ], '<div class="s2-awards">' + [['aw-1', 'цветные логотипы на пьедестале'], ['aw-2', 'надписи сбоку'], ['aw-3', 'черные аккуратные логотипы'], ['aw-4', 'черная накладка сверху']].map(function (a, i) {
    return '<figure class="s2-shine s2-aw">' + ph(a[0], { cls: 'contain soft' }).replace(IMG + 's2-' + a[0] + '.webp"', IMG + 's2-' + a[0] + '-full.webp"').replace('</div>', '<i class="flow" style="-webkit-mask-image:url(' + IMG + 's2-' + a[0] + '-gold.webp);mask-image:url(' + IMG + 's2-' + a[0] + '-gold.webp)"></i>' +
      (i < 3 ? '<i class="flow top" style="-webkit-mask-image:url(' + IMG + 's2-' + a[0] + '-top.webp);mask-image:url(' + IMG + 's2-' + a[0] + '-top.webp)"></i>' : '') + '</div>') +
      '<figcaption><b>' + (i + 1) + '</b>' + T(a[1]) + '</figcaption></figure>';
  }).join('') + '</div><div class="s2-man">' + ph('aw-man') + '</div>'));

  // ---------- монеты ----------
  h.push(sec('coins', 'монеты', ['Монета поворачивается в объеме — ее можно покрутить. Ниже — варианты лицевой стороны.'],
    '<div class="s2-coin3d"><div class="words" aria-hidden="true">' + ['спорт победа борьба', 'победа борьба спорт', 'борьба спорт победа'].map(function (r) { var t = (r + ' ').repeat(4); return '<b><span>' + t + '</span><span>' + t + '</span></b>'; }).join('') + '</div><div class="sk" aria-hidden="true"></div><div class="cv"></div><div class="hand">' + ICON.hand + '</div></div>' +
    '<div class="s2-coins">' + [1, 2, 3, 4, 5, 6].map(function (i) { return '<figure class="s2-shine">' + ph('coin-' + i, { cls: 'contain soft', gold: true }) + '<figcaption><b>' + i + '</b></figcaption></figure>'; }).join('') + '</div>' +
    '<div class="s2-medal"><p class="as-p">' + T('Этот же стиль продолжается на медалях — награды, монеты и медали выглядят одинаково, с одной сквозной идеей.') + '</p>' + ph('medal') + '</div>'));

  // ---------- форма ----------
  h.push(sec('form', 'форма', ['С линиями — мышечными волокнами.'],
    '<div class="as-grid as-g3">' + ph('fm-1') + ph('fm-2') + ph('fm-3') + '</div>'));

  // ---------- на одежде ----------
  h.push(sec('wear', 'на одежде', ['Варианты фирменной графики.'],
    '<div class="s2-pt">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return '<div class="as-ph zoom' + (i === 7 || i === 9 ? ' light' : '') + '" data-big="' + svg('s2-pt-' + i) + '"><img src="' + svg('s2-pt-' + i) + '" alt="" loading="lazy"></div>'; }).join('') + '</div>' +
    '<div class="as-grid as-g2 s2-tees">' + ['tee-red', 'tee-stripe', 'tee-navy', 'tee-white'].map(function (t) { return ph(t); }).join('') + '</div>'));

  h.push('<section class="as-thanks" data-slide><div class="as-wrap"><h2>спасибо<br>за просмотр</h2></div></section>');
  h.push('<footer class="as-foot"><div class="as-wrap"><div class="in"><span>армия спорта, второй этап. <a href="' + STAGE1 + '">Первый этап</a></span><span>Даша Купцова, <a href="https://kupdasha.ru/full">kupdasha.ru</a></span></div></div></footer>');
  h.push('<div class="as-lb" role="dialog" aria-label="картинка крупно"><img alt=""></div>');

  root.innerHTML = h.join('');

  // ====================================================================================
  //   ЖИЗНЬ
  // ====================================================================================
  var $ = function (s, el) { return (el || root).querySelector(s); };
  var $$ = function (s, el) { return [].slice.call((el || root).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch = matchMedia('(hover: none)').matches;

  function watchImg(img) {
    var box = img.closest('.as-ph'); if (!box) return;
    function ok() { box.classList.add('ok'); }
    if (img.complete && img.naturalWidth) ok(); else { img.addEventListener('load', ok); img.addEventListener('error', ok); }
  }
  $$('.as-ph img').forEach(watchImg);
  // свой запас для ленивых картинок: за полтора экрана до показа грузим сами, не полагаясь на браузер
  var ioImg = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.loading = 'eager'; ioImg.unobserve(e.target); } });
  }, { rootMargin: '1500px 0px' });
  $$('img[loading="lazy"]').forEach(function (i) { ioImg.observe(i); });

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
  $$('.as-up,.s2-heromark').forEach(function (el) { io.observe(el); });

  // бесконечное — только пока видно
  function whileVisible(el, on, off) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) on(); else off(); }); }, { rootMargin: '100px 0px' }).observe(el);
  }
  function every(el, fn, ms) {
    var t = null;
    whileVisible(el, function () { if (!t) t = setInterval(fn, ms); }, function () { clearInterval(t); t = null; });
  }

  // шапка: текущий раздел, цвет под фон; кнопка наверх
  var top = $('.as-top'), upBtn = $('.as-up-btn'), darks = $$('.as-thanks'), links = $$('.as-top nav a'),
    marks = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
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
    shineScroll();
  }
  addEventListener('scroll', onScroll, { passive: true });
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

  // ---------- шрифты: наведенная строка ярче, остальные полупрозрачные ----------
  $$('.s2-fonts').forEach(function (t) {
    var rows = $$('.row', t);
    function pick(r) { t.classList.toggle('hov', !!r); rows.forEach(function (x) { x.classList.toggle('on', x === r); }); }
    rows.forEach(function (r) {
      r.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') pick(r); });
      r.addEventListener('focus', function () { pick(r); });
      // на телефоне — нажатием, второе нажатие снимает выделение
      r.addEventListener('click', function () { if (touch) pick(r.classList.contains('on') ? null : r); });
    });
    t.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') pick(null); });
    t.addEventListener('focusout', function (e) { if (!t.contains(e.relatedTarget)) pick(null); });
  });

  // ---------- переключатели: идут сами, пока не тронули ----------
  function switcher(box, n, apply, ms, row) {
    var btns = $$('button', row || $('.as-sw-tabs', box)), k = 0, user = false;
    function show(j) {
      k = j;
      btns.forEach(function (b, i) { b.classList.toggle('on', i === j); b.classList.remove('run'); });
      if (!user && !reduce) { void btns[j].offsetWidth; btns[j].classList.add('run'); }
      apply(j);
    }
    btns.forEach(function (b, i) { b.addEventListener('click', function () { user = true; show(i); }); });
    btns.forEach(function (b) { b.querySelector('i').style.setProperty('--d', ms + 'ms'); });
    if (!reduce) every(box, function () { if (!user) show((k + 1) % n); }, ms);
    show(0);
  }
  // шрифты: вкладка на каждый
  $$('.s2-fontsw').forEach(function (fsw) {
    switcher(fsw, 3, function (j) { $$('.pane', fsw).forEach(function (p, i) { p.classList.toggle('on', i === j); }); }, 5000, $('.as-sw-tabs', fsw));
  });
  // кобрендинг: регистр вертикального знака
  var co = $('#co');
  // все регистры вертикального знака — заранее, чтобы при смене не было пустоты
  FONTS.forEach(function (f) { CASES.forEach(function (c) { new Image().src = svg('s2-vc-' + f[0] + '-' + c[0]); }); });
  switcher(co, 3, function (j) {
    $$('.own', co).forEach(function (img) { img.src = svg('s2-vc-' + img.dataset.font + '-' + CASES[j][0]); });
  }, 3200);
  // монохром: фон
  var mono = $('.s2-mono'), stage = $('.stage', mono);
  switcher(mono, 3, function (j) { stage.className = 'stage ' + ['k', 'w', 'p'][j]; }, 3200, $('.bgic', mono));
  // ролик: версия знака в углу
  var film = $('#film');
  switcher(film, 3, function (j) { $$('.corner', film).forEach(function (c, i) { c.classList.toggle('on', i === j); }); }, 4000);
  // ролик на сайте в малых размерах — тот же промо, что в первом этапе
  (function () {
    var v = $('.s2-site video');
    whileVisible(v, function () { if (!v.src) v.src = IMG + (innerWidth < 700 ? 'promo-s.mp4' : 'promo.mp4'); var p = v.play(); if (p && p.catch) p.catch(function () {}); }, function () { v.pause(); });
  })();
  // ролик играет, только пока виден
  (function () {
    var v = $('video', film);
    whileVisible(v, function () { if (v.preload === 'none') v.preload = 'auto'; var p = v.play(); if (p && p.catch) p.catch(function () {}); }, function () { v.pause(); });
  })();

  // ---------- линейка: знак уменьшается от 2 до 0,3 см и обратно ----------
  (function () {
    var f = $('.s2-ruler'), lg = $('.lg', f), cm = $('.cm', f), t0 = 0, raf = 0, on = false;
    function set(h) {
      lg.style.setProperty('--lh', h.toFixed(2) + 'cm');
      cm.textContent = h.toFixed(1).replace('.', ',') + ' см';
      f.classList.toggle('small', h < .5);
    }
    function loop(t) {
      if (!t0) t0 = t;
      var k = ((t - t0) / 9000) % 1, e = .5 - .5 * Math.cos(k * Math.PI * 2); // 0 → 1 → 0
      var top = Math.min(2, f.clientWidth * .82 / 6.54 / 37.8); // знак не шире блока: 1 см ≈ 37,8 px
      set(top - (top - .3) * e);
      raf = on ? requestAnimationFrame(loop) : 0;
    }
    set(reduce ? .4 : Math.min(2, f.clientWidth * .82 / 6.54 / 37.8));
    if (!reduce) whileVisible(f, function () { on = true; if (!raf) raf = requestAnimationFrame(loop); }, function () { on = false; });
  })();

  // ---------- правила и промт: раскрываются по кнопке ----------
  $$('[data-open]').forEach(function (b) {
    var p = document.getElementById('s2-' + b.dataset.open), label = b.textContent;
    b.addEventListener('click', function () {
      var open = p.hidden;
      $$('[data-open]').forEach(function (o) { var q = document.getElementById('s2-' + o.dataset.open); if (o !== b && !q.hidden) { q.hidden = true; o.classList.remove('on'); o.setAttribute('aria-expanded', 'false'); } });
      p.hidden = !open; b.classList.toggle('on', open); b.setAttribute('aria-expanded', open);
      if (open) $$('.as-ph img', p).forEach(watchImg);
    });
  });
  $$('.s2-panel .copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = $$('.code p', b.closest('.s2-panel')).map(function (p) { return p.textContent; }).join('\n\n').replace(/ — описание сцены$/m, '');
      var done = function () { b.textContent = 'скопировано'; setTimeout(function () { b.textContent = 'скопировать промт'; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () {}); else done();
    });
  });

  // ---------- блеск золота: за курсором, без курсора — от прокрутки ----------
  var shines = $$('.s2-shine');
  function setShine(el, x, y) { el.style.setProperty('--gx', x.toFixed(3)); el.style.setProperty('--gy', y.toFixed(3)); }
  var hovered = null;
  shines.forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      var r = el.getBoundingClientRect(); hovered = el;
      setShine(el, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    });
    el.addEventListener('pointerleave', function () { hovered = null; shineScroll(); });
  });
  function shineScroll() {
    shines.forEach(function (el) {
      if (el === hovered) return;
      var r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      var t = 1 - (r.top + r.height / 2) / innerHeight; // 0 — внизу экрана, 1 — вверху
      setShine(el, -.2 + t * 1.4, .5);
    });
  }
  shineScroll();

  // ---------- монета в 3D на фоне слов ----------
  (function () {
    var box = $('.s2-coin3d'), cv = $('.cv', box), hand = $('.hand', box), started = false;
    var T3 = 'https://cdn.jsdelivr.net/npm/three@0.147.0/';
    function load(src) { return new Promise(function (ok, no) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }
    function start() {
      if (started) return; started = true;
      (window.THREE ? Promise.resolve() : load(T3 + 'build/three.min.js'))
        .then(function () { return Promise.all([load(T3 + 'examples/js/loaders/GLTFLoader.js'), load(T3 + 'examples/js/environments/RoomEnvironment.js')]); })
        .then(run).catch(function () { box.classList.add('fail'); });
    }
    new IntersectionObserver(function (es) { if (es[0].isIntersecting) start(); }, { rootMargin: '2000px 0px' }).observe(box);
    // модель тяжелая — начинаем грузить сразу, как страница открылась, не дожидаясь прокрутки
    if (document.readyState === 'complete') setTimeout(start, 1200); else addEventListener('load', function () { setTimeout(start, 1200); });

    function run() {
      var THREE = window.THREE;
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
      renderer.physicallyCorrectLights = true;
      cv.appendChild(renderer.domElement);
      var scene = new THREE.Scene();
      var pmrem = new THREE.PMREMGenerator(renderer);
      // окружение — те же слова, что на фоне: золото отражает типографику
      var room = pmrem.fromScene(new THREE.RoomEnvironment(), .03).texture;
      function wordsEnv() {
        var c = document.createElement('canvas'); c.width = 2048; c.height = 1024;
        var g = c.getContext('2d'), rows = ['спорт победа борьба', 'победа борьба спорт', 'борьба спорт победа'];
        // светлая студия: блик сверху, серый фон, черные строки слов — их и отражает золото
        var gr = g.createLinearGradient(0, 0, 0, 1024);
        gr.addColorStop(0, '#ffffff'); gr.addColorStop(.28, '#d9d6cf'); gr.addColorStop(.5, '#a9a59d'); gr.addColorStop(.75, '#77736c'); gr.addColorStop(1, '#3a3834');
        g.fillStyle = gr; g.fillRect(0, 0, 2048, 1024);
        g.fillStyle = '#0d0d0e'; g.font = '500 74px "Golos Text", sans-serif'; g.textBaseline = 'middle';
        for (var y = 0; y < 9; y++) { var t = rows[y % 3]; t = t + '  ' + t + '  ' + t + '  ' + t; g.fillText(t, -((y * 170) % 600), 300 + y * 64); }
        var tex = new THREE.CanvasTexture(c); tex.mapping = THREE.EquirectangularReflectionMapping; tex.encoding = THREE.sRGBEncoding;
        return pmrem.fromEquirectangular(tex).texture;
      }
      scene.environment = room;
      (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { scene.environment = wordsEnv(); });
      var key = new THREE.DirectionalLight(0xfff1d8, 2.2); key.position.set(-3, 4, 5); scene.add(key);
      var rim = new THREE.DirectionalLight(0xffe2b0, 1.6); rim.position.set(4, 1, -3); scene.add(rim);
      var cam = new THREE.PerspectiveCamera(30, 1, .05, 100); cam.position.set(0, 0, 4.9);
      var spin = new THREE.Group(); scene.add(spin);
      function size() {
        var w = cv.clientWidth, hh = cv.clientHeight; if (!w || !hh) return;
        renderer.setSize(w, hh, false); cam.aspect = w / hh; cam.position.z = 4.9 * Math.max(1, 1.25 / cam.aspect); cam.updateProjectionMatrix();
      }
      addEventListener('resize', size); size();
      new THREE.GLTFLoader().load(IMG + 'coin2.glb', function (g) {
        var m = g.scene;
        m.traverse(function (o) {
          if (!o.isMesh) return;
          o.material.envMapIntensity = 1.35;
          // золото — глянцевое, как зеркало
          if (o.material.name === 'gold') { o.material.roughness = .06; o.material.metalness = 1; }
          if (o.material.name === 'gold_matte') o.material.roughness = .3;
          if (o.material.name === 'black_matte') { o.material.metalness = 0; o.material.roughness = .75; o.material.envMapIntensity = .25; o.material.color.setRGB(.008, .008, .009); }
          o.material.side = THREE.DoubleSide;
        });
        var b = new THREE.Box3().setFromObject(m); m.position.sub(b.getCenter(new THREE.Vector3()));
        spin.add(m); box.classList.add('ready');
      }, null, function () { box.classList.add('fail'); });

      // вращение: само по кругу, тянуть — повернуть (страница при этом листается пальцем по вертикали)
      var ry = 0, vy = reduce ? 0 : .012, drag = null, tilt = .18, visible = true, raf = 0;
      cv.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, ry: ry, t: performance.now() }; hand.classList.add('off'); cv.setPointerCapture(e.pointerId); });
      cv.addEventListener('pointermove', function (e) {
        if (drag) { var nr = drag.ry + (e.clientX - drag.x) * .012; vy = (nr - ry) * .6; ry = nr; }
        else if (e.pointerType === 'mouse') { var r = cv.getBoundingClientRect(); tilt = .18 + ((e.clientY - r.top) / r.height - .5) * .5; }
      });
      function up() { if (!drag) return; drag = null; if (Math.abs(vy) < .012) vy = vy < 0 ? -.012 : .012; }
      cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
      function loop() {
        raf = 0; if (!visible) return;
        if (!drag) { ry += vy; vy += ((vy < 0 ? -.012 : .012) - vy) * .02; }
        spin.rotation.y = ry; spin.rotation.x += (tilt - spin.rotation.x) * .06;
        renderer.render(scene, cam);
        raf = requestAnimationFrame(loop);
      }
      whileVisible(box, function () { visible = true; if (!raf) raf = requestAnimationFrame(loop); box.classList.remove('off'); },
        function () { visible = false; box.classList.add('off'); });
      if (!reduce) loop(); else { visible = true; loop(); }
    }
  })();

  // лупа: картинка крупно
  var lb = $('.as-lb'), lbImg = $('img', lb);
  function closeLb() { lb.classList.remove('on'); lbImg.removeAttribute('src'); document.documentElement.style.overflow = ''; }
  root.addEventListener('click', function (e) {
    var z = e.target.closest('.as-ph.zoom');
    if (z) { lbImg.src = z.dataset.big; lb.classList.add('on'); document.documentElement.style.overflow = 'hidden'; }
  });
  lb.addEventListener('click', closeLb);
  onScroll();
})();
