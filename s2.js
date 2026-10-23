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
  var R = /*RATIOS*/{"a-cap":1.0,"a-icon":3.4549,"a-merch-43":2.0785,"a-merch-45":1.0,"a-pens":1.7804,"a-site":1.6,"a-small-1":6.5429,"a-small-2":6.5429,"aw-1-gold":0.7311,"aw-1":0.7317,"aw-2-gold":0.7311,"aw-2":0.7317,"aw-3-gold":0.7311,"aw-3":0.7317,"aw-4-gold":0.7311,"aw-4":0.7317,"aw-man-gold":1.7751,"aw-man":1.7769,"coin-1-gold":1.0,"coin-1":1.0,"coin-2-gold":1.0,"coin-2":1.0,"coin-3-gold":1.0,"coin-3":1.0,"coin-4-gold":1.0,"coin-4":1.0,"coin-5-gold":1.0,"coin-5":1.0,"coin-6-gold":1.0,"coin-6":1.0,"f-chr-caps-center":7.6997,"f-chr-caps-horizontal":7.8607,"f-chr-caps-stacked":3.6432,"f-chr-lower-center":6.8399,"f-chr-lower-horizontal":7.0097,"f-chr-lower-stacked":3.3129,"f-chr-sentence-center":6.9087,"f-chr-sentence-horizontal":7.0788,"f-chr-sentence-stacked":3.0178,"f-eng-caps-center":7.5709,"f-eng-caps-horizontal":7.7446,"f-eng-caps-stacked":3.5171,"f-eng-lower-center":6.3618,"f-eng-lower-horizontal":6.5429,"f-eng-lower-stacked":3.1009,"f-eng-sentence-center":6.5246,"f-eng-sentence-horizontal":6.7063,"f-eng-sentence-stacked":2.807,"f-gol-caps-center":7.9002,"f-gol-caps-horizontal":8.1455,"f-gol-caps-stacked":3.661,"f-gol-lower-center":6.558,"f-gol-lower-horizontal":6.7897,"f-gol-lower-stacked":3.1909,"f-gol-sentence-center":6.6728,"f-gol-sentence-horizontal":6.9049,"f-gol-sentence-stacked":2.9066,"fm-1":1.0,"fm-2":1.0,"fm-3":1.0,"i-2":1.7768,"i-3":1.7768,"i-4":1.7768,"i-5":1.7787,"i-6":1.7768,"k-38":1.0,"k-46":1.0,"k-48":1.0,"k-55":1.0,"m-pattern":0.7461,"mk-chr-caps-center":7.6997,"mk-chr-caps-horizontal":7.8607,"mk-chr-caps-stacked":3.6432,"mk-chr-lower-center":6.8399,"mk-chr-lower-horizontal":7.0097,"mk-chr-lower-stacked":3.3129,"mk-chr-sentence-center":6.9087,"mk-chr-sentence-horizontal":7.0788,"mk-chr-sentence-stacked":3.0178,"mk-eng-caps-center":7.5709,"mk-eng-caps-horizontal":7.7446,"mk-eng-caps-stacked":3.5173,"mk-eng-lower-center":6.3618,"mk-eng-lower-horizontal":6.5429,"mk-eng-lower-stacked":3.1009,"mk-eng-sentence-center":6.5246,"mk-eng-sentence-horizontal":6.7063,"mk-eng-sentence-stacked":2.807,"mk-gol-caps-center":7.8977,"mk-gol-caps-horizontal":8.1434,"mk-gol-caps-stacked":3.6615,"mk-gol-lower-center":6.5574,"mk-gol-lower-horizontal":6.7893,"mk-gol-lower-stacked":3.1915,"mk-gol-sentence-center":6.6724,"mk-gol-sentence-horizontal":6.9043,"mk-gol-sentence-stacked":2.9063,"mw-chr-caps-center":7.6997,"mw-chr-caps-horizontal":7.8607,"mw-chr-caps-stacked":3.6432,"mw-chr-lower-center":6.8399,"mw-chr-lower-horizontal":7.0097,"mw-chr-lower-stacked":3.3129,"mw-chr-sentence-center":6.9087,"mw-chr-sentence-horizontal":7.0788,"mw-chr-sentence-stacked":3.0178,"mw-eng-caps-center":7.5709,"mw-eng-caps-horizontal":7.7446,"mw-eng-caps-stacked":3.5173,"mw-eng-lower-center":6.3618,"mw-eng-lower-horizontal":6.5429,"mw-eng-lower-stacked":3.1009,"mw-eng-sentence-center":6.5246,"mw-eng-sentence-horizontal":6.7063,"mw-eng-sentence-stacked":2.807,"mw-gol-caps-center":7.8977,"mw-gol-caps-horizontal":8.1434,"mw-gol-caps-stacked":3.6615,"mw-gol-lower-center":6.5574,"mw-gol-lower-horizontal":6.7893,"mw-gol-lower-stacked":3.1915,"mw-gol-sentence-center":6.6724,"mw-gol-sentence-horizontal":6.9043,"mw-gol-sentence-stacked":2.9063,"p-51":0.75,"p-52":0.75,"p-53":0.75,"pt-1":1.0,"pt-2":1.0,"pt-3":1.0,"pt-4":1.0,"pt-5":1.0,"pt-6":1.0,"pt-7":1.0,"pt-8":1.0,"pt-9":1.0,"tee-navy":1.0,"tee-red":1.0,"tee-stripe":1.0,"tee-white":1.0,"vc-chr-caps":0.7848,"vc-chr-lower":0.7715,"vc-chr-sentence":0.745,"vc-eng-caps":0.7664,"vc-eng-lower":0.7381,"vc-eng-sentence":0.7098,"vc-gol-caps":0.7872,"vc-gol-lower":0.7533,"vc-gol-sentence":0.7269,"vid-half":6.548,"vid-line":7.0089,"vid-solid":6.548,"vm-chr-caps":0.7848,"vm-chr-lower":0.7715,"vm-chr-sentence":0.745,"vm-eng-caps":0.7664,"vm-eng-lower":0.7381,"vm-eng-sentence":0.7098,"vm-gol-caps":0.7872,"vm-gol-lower":0.7533,"vm-gol-sentence":0.7269,"w-ball":1.7768,"w-fence":1.7787,"w-gym-a":1.7769,"w-gym-b":1.7769,"w-swim":1.7769,"w-win":1.7769}/*/RATIOS*/;
  var STAGE1 = 'https://kupdasha.ru/armysport';
  var FILM = 'hHNnUFhs7lU'; // ролик, со 2-й минуты без звука

  // ---------- типограф: короткие слова держатся за следующим, тире — за предыдущим ----------
  function nb(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    t = t.replace(/(^|[\s(«>])(без|для|про|под|над|при|обо|или|что|как|его|все|еще|уже|это|был|так)\s/gi, '$1$2 ');
    return t.replace(/\s—/g, ' —').replace(/(\S)-(?=\S)/g, '$1-⁠');
  }
  function nbh(t) {
    t = String(t);
    for (var i = 0; i < 2; i++) t = t.replace(/(^|[\s(«>])([А-Яа-яЁёA-Za-z]{1,2})\s/g, '$1$2 ');
    return t.replace(/\s—/g, ' —').replace(/\s(\S+)$/, ' $1');
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
    ['gol', 'Golos Text', 'https://fonts.google.com/specimen/Golos+Text']
  ];
  var CASES = [['lower', 'строчные'], ['sentence', 'с заглавной'], ['caps', 'заглавные']];
  var LAYS = ['horizontal', 'stacked', 'center'];
  var PARTNERS = ['p-sa', 'p-cska-fight', null, 'p-cska', 'p-fsbr', 'p-dynamo'];

  // все три шрифта на одном экране: строка — шрифт и регистр, столбцы — три компоновки
  function fontTable(prefix, note) {
    return '<div class="s2-fonts">' + FONTS.map(function (f) {
      return '<div class="grp"><a class="name" href="' + f[2] + '" target="_blank" rel="noopener">' + esc(f[1]) + '</a>' +
        CASES.map(function (c) {
          return '<div class="row" tabindex="0" aria-label="' + esc(f[1] + ', ' + c[1]) + '">' + LAYS.map(function (l) {
            return '<span class="' + l + '"><img src="' + svg(prefix + f[0] + '-' + c[0] + '-' + l) + '" alt="" loading="lazy"></span>';
          }).join('') + '</div>';
        }).join('') + (note && note[f[0]] ? '<p class="note">' + T(note[f[0]]) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function cobrand() {
    return '<div class="s2-co">' + FONTS.map(function (f) {
      return '<div class="strip"><span class="name">' + esc(f[1]) + '</span><div class="logos">' + PARTNERS.map(function (p) {
        return p ? '<img src="' + svg(p) + '" alt="" loading="lazy">' : '<img class="own" data-font="' + f[0] + '" src="' + svg('s2-vc-' + f[0] + '-lower') + '" alt="армия спорта" loading="lazy">';
      }).join('') + '</div></div>';
    }).join('') + '</div>';
  }

  // ====================================================================================
  var h = [];

  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, второй этап</a><nav>' +
    '<a href="#mark">знак</a><a href="#mono">монохром</a><a href="#small">малые размеры</a><a href="#film">ролик</a><a href="#merch">мерч</a><a href="#walls">стены</a><a href="#award">награда</a><a href="#coins">монеты</a><a href="#wear">одежда</a></nav></div></header>');
  h.push('<button type="button" class="as-up-btn" aria-label="наверх">' + ICON.up + '</button>');

  // ---------- первый экран ----------
  h.push('<section class="as-hero s2-hero" id="top" data-slide><div class="as-wrap"><div class="row">' +
    '<h1 class="as-disp">армия спорта</h1>' +
    '<div><p class="as-lead">' + T('Второй этап: выбранная звезда в работе — шрифт, версии знака и носители.') + '</p>' +
    '<a class="s2-back" href="' + STAGE1 + '">первый этап</a></div></div></div>' +
    '<div class="as-wrap s2-heromark"><div class="star"><img src="' + svg('s2-vc-eng-lower') + '" alt=""></div></div></section>');

  // ---------- основная версия: цветная звезда, три шрифта ----------
  h.push(sec('mark', 'цветная звезда — основная', [
    'Основная версия знака — цветная звезда, к ней зафиксированы черно-белые версии. Версия с фавиконом в центре понравилась, но не как единственная.',
    'Три шрифта на выбор — каждый в трех регистрах и трех компоновках. Наведите на строку, чтобы рассмотреть ее отдельно.'
  ], fontTable('s2-f-', {
    gol: 'Шрифт заголовков этого сайта. Для знака не рекомендуется: у него бесплатная лицензия, и проекту он дает меньше уникальности, чем платный шрифт. Подойдет, например, для видеоматериалов.'
  }) + '<p class="s2-aside">' + T('Звезда между словами гармонична, только когда оба слова набраны строчными или оба — заглавными. Шрифт в логотипах подогнан под углы звезды, кое-где буквы подрезаны — в наборе текста этого не видно.') + '</p>'));

  h.push('<div class="s2-sub" id="co">' + tx('в кобрендинге', ['Вертикальная версия рядом с партнерами — в каждом из трех шрифтов.']) +
    '<div class="as-wrap as-vis as-up">' + tabs(CASES.map(function (c) { return c[1]; })) + cobrand() + '</div></div>');

  // ---------- дополнительная: монохромная звезда ----------
  h.push(sec('mono', 'монохромная звезда', [
    'Звезда всегда одноцветная: белая, черная или с вырубкой вместо синего. Фирменные красный и синий уходят с нее и появляются вокруг логотипа — в фоне, графике, паттерне, плашке.'
  ], '<div class="s2-mono">' + tabs(['на черном', 'на белом', 'на узоре']) +
    '<div class="stage k" style="--pat:url(' + IMG + 's2-m-pattern.webp)">' + fontTable('s2-mw-').replace('s2-fonts', 's2-fonts w') + fontTable('s2-mk-').replace('s2-fonts', 's2-fonts k') + '</div></div>' +
    '<div class="s2-pal"><p class="as-p">' + T('Красный преобладает и по возможности стоит сверху. Основной фон — белый.') + '</p><div class="as-pal">' +
    [['белый', '#FFFFFF', 3, 'light'], ['красный', '#E71E26', 3], ['синий', '#1B43B2', 1.5], ['черный', '#080000', 1.5]].map(function (c) {
      return '<div class="' + (c[3] || '') + '" style="--f:' + c[2] + ';background:' + c[1] + ';color:' + (c[3] ? '#121314' : '#fff') + '"><span>' + c[0] + '<br>' + c[1] + '</span></div>';
    }).join('') + '</div></div>'));

  // ---------- малые размеры ----------
  h.push(sec('small', 'малые размеры', ['Версии знака для иконки приложения, фавикона, сайта и мелких носителей.'],
    fit([['a-icon'], ['a-site']]) +
    '<div class="s2-smalls">' +
    '<figure><div class="m"><img src="' + svg('s2-a-small-1') + '" alt=""></div><figcaption class="as-p">' + T('Меньше 0,5 см — логотип одного цвета.') + '</figcaption></figure>' +
    '<figure><div class="m"><img src="' + svg('s2-a-small-2') + '" alt=""></div><figcaption class="as-p">' + T('Если лак, гравировка или другие технические особенности макета невозможны — вариант с обводкой.') + '</figcaption></figure></div>' +
    '<div class="as-col">' +
    '<div class="s8">' + ph('a-pens') + '</div><div class="s4">' + ph('a-cap') + '</div>' +
    '<div class="s8">' + ph('a-merch-43') + '</div><div class="s4">' + ph('a-merch-45') + '</div></div>'));

  // ---------- угол ролика ----------
  h.push(sec('film', 'в углу ролика', ['Версия для угла ролика: читается в маленьком размере в левом верхнем углу, на контрастном и меняющемся фоне.'],
    tabs(['полупрозрачный знак', 'с обводкой', 'монолитный знак']) +
    '<div class="s2-film"><iframe data-src="https://www.youtube-nocookie.com/embed/' + FILM + '?start=120&autoplay=1&mute=1&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1" title="ролик" allow="autoplay; encrypted-media; picture-in-picture" tabindex="-1"></iframe>' +
    ['half', 'line', 'solid'].map(function (v, i) { return '<img class="corner' + (i ? '' : ' on') + '" src="' + svg('s2-vid-' + v) + '" alt="">'; }).join('') + '</div>'));

  // ---------- мерч: знак без текста ----------
  h.push(sec('merch', 'знак без текста', ['Для брелоков и мелкого мерча.'],
    '<div class="as-grid s2-g4">' + ['k-46', 'k-55', 'k-48', 'k-38'].map(function (k) { return ph(k); }).join('') + '</div>'));

  // ---------- с графикой и фотографиями ----------
  h.push(sec('posters', 'с графикой и фото', [
    'Логотип в паре с фирменной графикой, паттерном и реальными фотографиями схваток и борцов.',
    'Это не финальные макеты, а пример, чтобы посмотреть именно логотип.'
  ], '<div class="as-grid as-g3 s2-posters">' + ['p-51', 'p-52', 'p-53'].map(function (p) { return ph(p); }).join('') + '</div>'));

  // ====================================================================================
  //   НОСИТЕЛИ
  // ====================================================================================
  h.push('<section class="as-divide" id="carriers" data-slide><div class="as-wrap"><span>второй этап</span><h2 class="as-h1">носители</h2></div></section>');

  // ---------- стены и иллюстрации ----------
  var RULES = [
    ['где стиль уместен', 'Там, где нужна эмоция и внимание, а не информация: обложки, афиши турниров, баннеры и промо, первые экраны сайта и лендингов, мерч, стены и навигация в залах, обложки соцсетей и анонсы крупных событий. Это акцентный слой бренда: одна иллюстрация на носитель, а не фон для всего подряд.'],
    ['где неуместен', 'В информационных и служебных материалах: расписания, таблицы, документы, договоры, личный кабинет, интерфейсы с формами и списками. В материалах с реальными людьми — карточки спортсменов, тренеров, отчеты с турниров: там работает фото. На мелких форматах, где иллюстрация превращается в пятно, — иконки, аватарки, превью меньше ладони. И рядом с другой графикой: на одном носителе иллюстрация не соседствует с фотоколлажем или другим стилем рисунка.'],
    ['как не генерировать заново', 'Библиотека разрабатывается один раз, дальше макеты собираются из нее. В библиотеку входят:', [
      'набор готовых сцен по всем видам спорта платформы, по одной-две на каждый, в двух форматах — широком горизонтальном и вертикальном;',
      'отдельные элементы без фона: фигуры, крупные предметы (перчатка, мяч, клинок, штанга), вспышки, лучи, линии скорости — из них собираются новые композиции под формат без генерации;',
      'фиксированная палитра из четырех цветов и правила фона: какой цвет фона под какую фигуру;',
      'все в векторе после трассировки, чтобы элементы масштабировались и перекрашивались.'
    ]],
    ['новый вид спорта', 'Новая генерация — только для вида спорта, которого нет в библиотеке. Сцена делается по сохраненному промту стиля, с двумя-тремя готовыми иллюстрациями из библиотеки как референсом, проходит трассировку и попадает в библиотеку, прежде чем пойти в макет.']
  ];
  var PROMPT = ['[The swimmer is swimming in the pool] — описание сцены',
    'Look and feel: a sharp, flat vector piece in the spirit of a contemporary sports poster drawn in Illustrator. Everything is built from solid single-color shapes with razor-clean edges and smooth, assured curves. The moment of contact is marked with pointed geometric starbursts, there are broad rays opening out like a fan, and the motion is carried by solid vector speed lines and shapes. The camera angle is bold, with heavy foreshortening, so the main object (the glove, the ball, the blade, the plates) is blown up in scale and thrust toward the viewer. The figures are pared down and stylized, faces left blank, but their poses are full of energy and you can feel the speed and the force of the hit.',
    'Keep it free of any pencil, crayon or brush marks, scribbles, grain, noise, paper texture or hand-drawn unevenness.',
    'Colors are limited to saturated red, deep navy, bright cobalt blue and off-white, nothing beyond that: no green, no yellow, no gradients and no shading.',
    'The image is a wide horizontal panorama in 21:9, with the scene spread over the full width. Leave out any text, letters, numbers, logos, signatures or watermarks.'];
  h.push(sec('walls', 'стены и иллюстрации', [
    'Масштабирование решают готовые библиотеки иллюстраций под разные виды спорта и коллажи из объектов без фона. Плюс — универсальные иллюстрации на спортивную тему без конкретного вида спорта.'
  ], '<div class="as-col">' +
    '<div class="s6">' + ph('w-gym-a') + '</div><div class="s6">' + ph('w-gym-b') + '</div>' +
    '<div class="s4">' + ph('w-ball') + '</div><div class="s4">' + ph('w-fence') + '</div><div class="s4">' + ph('w-win') + '</div></div>'));
  h.push(sub('с фото и без', ['Графика сочетается с фотографиями реальных спортсменов или работает сама, как иллюстрация.'],
    '<p class="s2-lbl">с фотографией</p><div class="as-grid as-g2">' + ph('i-2') + ph('i-4') + '</div>' +
    '<p class="s2-lbl">только иллюстрация</p><div class="as-grid as-g3">' + ph('i-5') + ph('i-3') + ph('i-6') + '</div>' +
    '<div class="s2-more"><button type="button" class="as-btn" data-open="rules" aria-expanded="false">правила использования</button>' +
    '<button type="button" class="as-btn" data-open="prompt" aria-expanded="false">промт</button></div>' +
    '<div class="s2-panel" id="s2-rules" hidden><h3 class="as-h2">правила комиксной стилистики</h3><div class="cols">' + RULES.map(function (r) {
      return '<div><h4>' + T(r[0]) + '</h4><p class="as-p">' + T(r[1]) + '</p>' + (r[2] ? '<ul>' + r[2].map(function (li) { return '<li class="as-p">' + T(li) + '</li>'; }).join('') + '</ul>' : '') + '</div>';
    }).join('') + '</div></div>' +
    '<div class="s2-panel" id="s2-prompt" hidden><h3 class="as-h2">универсальный промт</h3><div class="pr"><div class="code" lang="en">' + PROMPT.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
    '<button type="button" class="as-btn copy">скопировать промт</button></div>' + ph('w-swim') + '</div></div>'));

  // ---------- награда ----------
  h.push(sec('award', 'награда', [
    'Награда «победитель в отражении» развивается дальше: зеркальная поверхность, вырубка логотипа, соразмерность атлету. Теперь на нее переносится вся информация с текущей стелы: логотип «Армии спорта», герб ЦСКА, знак вида спорта, «1 место», формулировка зачета, название чемпионата, год и строка «При поддержке ЦСКА Единоборства».',
    'Задача — проверить, выдержит ли форма такую нагрузку, и не перегрузить ее. Основание — фундаментальнее, но не тяжелее.'
  ], '<div class="s2-awards">' + [['aw-1', 'цветные логотипы на пьедестале'], ['aw-2', 'надписи сбоку'], ['aw-3', 'черные аккуратные логотипы'], ['aw-4', 'черная накладка сверху']].map(function (a, i) {
    return '<figure class="s2-shine">' + ph(a[0], { cls: 'contain soft', gold: true, gloss: true }) + '<figcaption><b>' + (i + 1) + '</b>' + T(a[1]) + '</figcaption></figure>';
  }).join('') + '</div><div class="s2-shine s2-man">' + ph('aw-man', { gold: true }) + '</div>'));

  // ---------- монеты ----------
  h.push(sec('coins', 'монеты', ['Монета поворачивается в объеме — ее можно покрутить. Ниже — варианты лицевой стороны.'],
    '<div class="s2-coin3d"><div class="words" aria-hidden="true"><b>спорт</b><b>победа</b><b>борьба</b></div><div class="cv"></div><div class="hand">' + ICON.hand + '</div></div>' +
    '<div class="s2-coins">' + [1, 2, 3, 4, 5, 6].map(function (i) { return '<div class="s2-shine">' + ph('coin-' + i, { cls: 'contain soft', gold: true }) + '</div>'; }).join('') + '</div>'));

  // ---------- форма ----------
  h.push(sec('form', 'форма', ['С линиями — мышечными волокнами.'],
    '<div class="as-grid as-g3">' + ph('fm-1') + ph('fm-2') + ph('fm-3') + '</div>'));

  // ---------- на одежде ----------
  h.push(sec('wear', 'на одежде', ['Варианты фирменной графики.'],
    '<div class="s2-pt">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return ph('pt-' + i); }).join('') + '</div>' +
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
  $$('.as-up,.as-divide,.s2-heromark').forEach(function (el) { io.observe(el); });

  // бесконечное — только пока видно
  function whileVisible(el, on, off) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) on(); else off(); }); }, { rootMargin: '100px 0px' }).observe(el);
  }
  function every(el, fn, ms) {
    var t = null;
    whileVisible(el, function () { if (!t) t = setInterval(fn, ms); }, function () { clearInterval(t); t = null; });
  }

  // шапка: текущий раздел, цвет под фон; кнопка наверх
  var top = $('.as-top'), upBtn = $('.as-up-btn'), darks = $$('.as-divide,.as-thanks'), links = $$('.as-top nav a'),
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
  function switcher(box, n, apply, ms) {
    var btns = $$('.as-sw-tabs button', box), k = 0, user = false;
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
  // кобрендинг: регистр вертикального знака
  var co = $('#co');
  switcher(co, 3, function (j) {
    $$('.own', co).forEach(function (img) { img.src = svg('s2-vc-' + img.dataset.font + '-' + CASES[j][0]); });
  }, 3200);
  // монохром: фон
  var mono = $('.s2-mono'), stage = $('.stage', mono);
  switcher(mono, 3, function (j) { stage.className = 'stage ' + ['k', 'w', 'p'][j]; }, 3200);
  // ролик: версия знака в углу
  var film = $('#film');
  switcher(film, 3, function (j) { $$('.corner', film).forEach(function (c, i) { c.classList.toggle('on', i === j); }); }, 4000);
  // плеер грузится, когда ролик близко
  (function () {
    var f = $('iframe', film);
    new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { f.src = f.dataset.src; o.disconnect(); } }, { rootMargin: '600px 0px' }).observe(f);
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
    new IntersectionObserver(function (es) { if (es[0].isIntersecting) start(); }, { rootMargin: '800px 0px' }).observe(box);

    function run() {
      var THREE = window.THREE;
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.25;
      renderer.physicallyCorrectLights = true;
      cv.appendChild(renderer.domElement);
      var scene = new THREE.Scene();
      var pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new THREE.RoomEnvironment(), .03).texture;
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
          o.material.envMapIntensity = 2.2;
          if (o.material.name === 'gold' && o.material.roughness < .3) o.material.roughness = .24;
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
