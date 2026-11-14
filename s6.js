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
    'v6-h': 2154, 'v6-st': 1088, 'v6-hs': 2389, 'v6-sts': 1088, 'v7-h': 2382, 'v7-st': 1750, 'v7-v': 1013
  };
  function pic(name, cls, cap) {
    if (name === 'glass') return '<figure class="s6-glass"><canvas aria-label="иконка приложения: белый знак на переливающемся стекле"></canvas></figure>';
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
    { t: 'звезда-флаг', p: ['Синий сверху, красный снизу — отсылка к флагу России. Знак лучше ставить на белый фон.'],
      set: [['v5-h', 'wide'], ['v5-st'], ['v5-v']], flag: 1 },
    { t: 'шрифт ЦСКА', p: ['Дополнительный вариант для кобрендинга: тот же шрифт, что у ЦСКА, и цвета ЦСКА, звезды нет. «Армия» синяя, чтобы не было отсылки к Красной армии. В вертикальной версии при таком соотношении появляется ощущение триколора.'],
      set: [['v6-h', 'wide', 'без звезды'], ['v6-hs', 'wide', 'со звездой'], ['v6-st', '', 'без звезды'], ['v6-sts', '', 'со звездой']] },
    { t: 'касание и платформа', p: ['Альтернативный вариант, без привязки к ЦСКА и к нынешнему знаку. Символ — одновременно объединение и касание пальцем, тап на будущее приложение. Внизу буквально платформа: от нее можно оттолкнуться и лететь выше, к новым пьедесталам.'],
      font: 1, set: [['v7-h', 'wide'], ['v7-st', 'wide'], ['v7-v'], ['glass']] }
  ];
  // белый знак седьмого варианта — для стеклянной иконки
  var SYM = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="224 0 564 439"><path d="M308.064 227.797C268.225 209.266 240.97 185.562 229.763 159.701C218.557 133.84 223.907 106.991 245.133 82.5685C266.358 58.1463 302.5 37.2546 348.961 22.5509C395.423 7.84725 450.103 -0.00390625 506.048 -0.00390625C561.993 -0.00390625 616.673 7.84725 663.135 22.5509C709.596 37.2546 745.738 58.1463 766.963 82.5685C788.189 106.991 793.539 133.84 782.333 159.701C771.126 185.562 743.87 209.266 704.032 227.797C729.471 213.69 744.476 197.135 747.412 179.936C750.347 162.738 741.1 145.555 720.679 130.262C700.258 114.968 669.445 102.15 631.599 93.2034C593.753 84.2571 550.325 79.5263 506.048 79.5263C461.771 79.5263 418.343 84.2571 380.497 93.2034C342.651 102.15 311.838 114.968 291.417 130.262C270.996 145.555 261.749 162.738 264.684 179.936C267.62 197.135 282.625 213.69 308.064 227.797Z" fill="white"/><path d="M334.866 351.078C289.349 340.424 256.082 325.788 239.703 309.21C223.323 292.633 224.647 274.94 243.49 258.598C262.332 242.257 297.755 228.08 344.82 218.045C391.885 208.011 448.246 202.617 506.048 202.617C563.85 202.617 620.212 208.011 667.277 218.045C714.341 228.08 749.764 242.257 768.607 258.598C787.45 274.94 788.773 292.633 772.394 309.21C756.014 325.788 722.747 340.424 677.23 351.078C703.932 342.74 720.863 332.623 726.05 321.907C731.236 311.191 724.464 300.317 706.524 290.551C688.583 280.786 660.213 272.533 624.719 266.752C589.225 260.972 548.069 257.903 506.048 257.903C464.027 257.903 422.872 260.972 387.378 266.752C351.884 272.533 323.513 280.786 305.573 290.551C287.632 300.317 280.861 311.191 286.047 321.907C291.233 332.623 308.164 342.74 334.866 351.078Z" fill="white"/><path d="M506.048 438.978C642.223 438.978 752.615 422.961 752.615 403.204C752.615 383.446 642.223 367.43 506.048 367.43C369.872 367.43 259.48 383.446 259.48 403.204C259.48 422.961 369.872 438.978 506.048 438.978Z" fill="white"/></svg>';

  var h = [];
  var ICON_UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  h.push('<header class="as-top"><div class="as-wrap"><a class="home" href="#top">армия спорта, новые подходы</a><nav>' +
    '<a href="#top">сейчас</a>' + V.map(function (v, i) { return '<a href="#v' + (i + 1) + '" aria-label="вариант ' + (i + 1) + ': ' + esc(v.t) + '">' + (i + 1) + '</a>'; }).join('') + '<a href="#sum">все</a></nav></div></header>');
  h.push('<button type="button" class="as-up-btn" aria-label="наверх">' + ICON_UP + '</button>');

  // знак сейчас — от него отталкиваются все варианты
  h.push('<section class="as-sec s6-old" id="top" data-slide><div class="as-wrap"><div class="as-tx as-up"><h1 class="as-h2">новые подходы к&nbsp;знаку</h1>' +
    '<div><p class="as-p">' + T('Семь вариантов. Сначала — знак, который есть сейчас.') + '</p></div></div>' +
    '<div class="s6-now as-up"><figure><img src="' + IMG + 'old-logo.webp" alt="знак сейчас: буква А со звездой"><figcaption>знак сейчас</figcaption></figure></div></div></section>');

  V.forEach(function (v, i) {
    var n = i + 1;
    h.push('<section class="as-sec s6-var" id="v' + n + '" data-slide><div class="as-wrap">' +
      '<div class="as-tx as-up"><h2 class="as-h2"><span class="n">' + n + '</span>' + esc(v.t) + '</h2><div>' +
      v.p.map(function (p) { return '<p class="as-p">' + T(p) + '</p>'; }).join('') +
      (v.font ? '<p class="as-p">Шрифт — <a href="https://www.artlebedev.ru/type/enormous/" target="_blank" rel="noopener">Энормус</a>, полужирное начертание.</p>' : '') +
      (v.flag ? '<p class="s6-flag"><img src="' + IMG + 's6/v5-flag.webp" alt="флаг России" loading="lazy"></p>' : '') + '</div></div>' +
      '<div class="s6-set as-up">' + v.set.map(function (s) { return pic(s[0], s[1], s[2]); }).join('') + '</div></div></section>');
  });

  // итог: все варианты рядом, с номерами; нажатие — к варианту
  var SUM = ['v1-st', 'v2-st', 'v3-st', 'v4-st', 'v5-st', 'v6-st', 'v7-st'];
  h.push('<section class="as-sec s6-sum" id="sum" data-slide><div class="as-wrap"><div class="as-tx as-up"><h2 class="as-h2">все варианты</h2></div>' +
    '<div class="s6-grid as-up">' + V.map(function (v, i) {
      return '<a href="#v' + (i + 1) + '" aria-label="вариант ' + (i + 1) + ': ' + esc(v.t) + '"><span class="pic"><img src="' + IMG + 's6/' + SUM[i] + '.svg" alt="" style="--w:' + W[SUM[i]] + '" loading="lazy" decoding="async"></span>' +
        '<span class="cap"><b>' + (i + 1) + '</b></span></a>';
    }).join('') + '</div></div></section>');
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
    var ft = root.querySelector('.as-foot').getBoundingClientRect();
    upBtn.classList.toggle('on', scrollY > innerHeight && ft.top > innerHeight);
    upBtn.classList.toggle('light', light);
  }
  var upBtn = root.querySelector('.as-up-btn');
  upBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  addEventListener('scroll', onScroll, { passive: true });

  // стеклянная иконка седьмого варианта: шейдер из первой версии (as.js), внутри — белый знак; играет, пока видна
  (function () {
    var cv = root.querySelector('.s6-glass canvas'); if (!cv) return;
    var gl = cv.getContext('webgl', { antialias: false });
    if (!gl) { cv.closest('figure').style.display = 'none'; return; }
    var draw = glassShader(gl, cv), on = false, raf = 0;
    function loop(now) { if (!on) { raf = 0; return; } draw(now); raf = reduce ? 0 : requestAnimationFrame(loop); }
    new IntersectionObserver(function (es) { on = es[0].isIntersecting; if (on && !raf) raf = requestAnimationFrame(loop); }, { rootMargin: '100px' }).observe(cv);
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
      'const float SK=1.288;float starA(vec2 q,float bias){vec2 st=q/(2.*SK)+.5;if(st.x<0.||st.y<0.||st.x>1.||st.y>1.)return 0.;return texture2D(star,st,bias).a;}' +
      'void main(){vec2 uv=(gl_FragCoord.xy-.5*res)/min(res.x,res.y);float S=.30;vec2 q=uv/S;float d=sdf(q);vec3 inner=glass(q);float rim=smoothstep(.9,1.,d);inner=mix(inner,inner*1.5+.1,rim*.7);float line=exp(-pow((d-.982)/.012,2.));inner+=line*(inner*.8+.3);inner=1.-exp(-inner*1.7);float sa=starA(q,0.);float sg=starA(q,5.5);inner=mix(inner,vec3(1.),sa);inner+=sg*.18*(1.-sa);vec3 bg=bgGrad(gl_FragCoord.y/res.y);vec2 ep=q/max(d,1e-4);vec3 ec=pal(field(ep*.55));float g=max(d-1.,0.);float gw=max(length(q)-1.05,0.);vec3 glow=1.-exp(-ec*(exp(-g*14.)*.7+exp(-gw*3.2)*.3)*1.7);vec3 outer=1.-(1.-bg)*(1.-glow);float aa=1.6/(min(res.x,res.y)*S);float a=1.-smoothstep(1.-aa,1.+aa,d);vec3 col=mix(outer,inner,a);col+=(hash(gl_FragCoord.xy)-.5)*.012;gl_FragColor=vec4(col,1.);}';
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn('s6-glass', gl.getShaderInfoLog(s)); return s; }
    var prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(prog); gl.useProgram(prog);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var uRes = gl.getUniformLocation(prog, 'res'), uT = gl.getUniformLocation(prog, 't');
    var tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.uniform1i(gl.getUniformLocation(prog, 'star'), 0);
    var img = new Image();
    img.onload = function () {
      // знак 564 × 439 — по центру квадрата текстуры, с полями, как звезда в первой версии
      var N = 1024, pad = N * .22, c = document.createElement('canvas'); c.width = c.height = N;
      var x = c.getContext('2d'), w = N - pad * 2, hh = w * 439 / 564; x.drawImage(img, pad, (N - hh) / 2 - N * .035, w, hh);   // чуть выше центра: оптически знак стоит ровнее
      gl.bindTexture(gl.TEXTURE_2D, tex); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c); gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SYM);
    var t0 = performance.now();
    return function (now) {
      var dpr = Math.min(devicePixelRatio || 1, 1.5), w = Math.round(canvas.clientWidth * dpr), hgt = Math.round(canvas.clientHeight * dpr);
      if (w && (canvas.width !== w || canvas.height !== hgt)) { canvas.width = w; canvas.height = hgt; gl.viewport(0, 0, w, hgt); }
      gl.uniform2f(uRes, canvas.width, canvas.height); gl.uniform1f(uT, (((now || performance.now()) - t0) / 8000) % 1);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
  }
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
