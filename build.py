#!/usr/bin/env python3
# Собирает блок «HTML-код» для Тильды: tilda-block.txt.
# В блоке — скелет загрузки (виден сразу, кусок берется из index.html между <!-- скелет --> и <!-- /скелет -->)
# и загрузчик: узнает номер последней версии у GitHub и подключает as.css и as.js с jsDelivr по этому номеру.
# Блок вставляется в Тильду один раз: тексты, картинки и код потом обновляются через ./publish.sh, без перевставки.
import os, re, json
HERE = os.path.dirname(os.path.abspath(__file__))

# пропорции картинок и знаков (ширина к высоте) — в as.js между /*RATIOS*/ и /*/RATIOS*/
def ratios():
    from PIL import Image
    out = {}
    d = os.path.join(HERE, 'img')
    for f in sorted(os.listdir(d)):
        n, ext = os.path.splitext(f)
        if n.endswith('-s') or n.startswith('app-'):
            continue
        if ext == '.webp':
            w, h = Image.open(os.path.join(d, f)).size
        elif ext == '.svg':
            m = re.search(r'width="([\d.]+)" height="([\d.]+)"', open(os.path.join(d, f), encoding='utf-8').read(2000))
            if not m: continue
            w, h = float(m.group(1)), float(m.group(2))
        else:
            continue
        out[n] = round(w / h, 4)
    return out
js_path = os.path.join(HERE, 'as.js')
js = open(js_path, encoding='utf-8').read()
js = re.sub(r'/\*RATIOS\*/.*?/\*/RATIOS\*/', lambda m: '/*RATIOS*/' + json.dumps(ratios(), separators=(',', ':')) + '/*/RATIOS*/', js, flags=re.S)
open(js_path, 'w', encoding='utf-8').write(js)
src = open(os.path.join(HERE, 'index.html'), encoding='utf-8').read()
skel = src.split('<!-- скелет -->')[1].split('<!-- /скелет -->')[0].strip()

block = ('<!-- АРМИЯ СПОРТА, ПЕРВЫЙ ЭТАП. Страница целиком приходит с GitHub (kupdasha/army-sport). Блок не трогать. -->\n'
    # Тильда прячет страницу и проявляет ее через 0,4 с — здесь свой скелет, это не нужно
    '<style>#allrecords.t-records{opacity:1!important;transition:none!important}body{background:#fff}</style>\n'
    '<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>\n'
    + skel + '\n'
    '<div id="as"></div>\n'
    "<script>(function(){if(window.AS_LOADING)return;window.AS_LOADING=1;\n"
    "var R='https://cdn.jsdelivr.net/gh/kupdasha/army-sport@',K='as-sha',got=0,last='';\n"
    "try{last=localStorage.getItem(K)||''}catch(e){}\n"
    # стили, шрифт и код — по номеру версии; код подключается после стилей, чтобы страница не мигнула без оформления
    "function load(s){if(got)return;got=1;var b=R+(s||'main')+'/';window.AS_BASE=b;if(s)try{localStorage.setItem(K,s)}catch(e){}\n"
    "var f=document.createElement('link');f.rel='preload';f.as='font';f.type='font/woff2';f.crossOrigin='';f.href=b+'fonts/GolosText-500-cyrillic.woff2';document.head.appendChild(f);\n"
    "var l=document.createElement('link');l.rel='stylesheet';l.href=b+'as.css';\n"
    "l.onload=l.onerror=function(){var j=document.createElement('script');j.src=b+'as.js';document.head.appendChild(j)};document.head.appendChild(l)}\n"
    # номер свежей версии — у GitHub; не ответил за 2,5 с — номер, который помнит браузер, иначе main
    "var x=new XMLHttpRequest();x.open('GET','https://api.github.com/repos/kupdasha/army-sport/commits/main');x.setRequestHeader('Accept','application/vnd.github.sha');x.timeout=2500;\n"
    "x.onload=function(){var s=(x.status==200&&x.responseText||'').trim();load(/^[0-9a-f]{40}$/.test(s)?s:last)};x.onerror=x.ontimeout=function(){load(last)};x.send()})()</script>")

with open(os.path.join(HERE, 'tilda-block.txt'), 'w', encoding='utf-8') as f:
    f.write(block + '\n')
print(f'tilda-block.txt  {len(block.encode("utf-8")) / 1024:.0f} КБ')
