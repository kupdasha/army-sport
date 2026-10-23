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
# у знаков второго этапа — еще и размер в пикселях макета: логотипы одного шрифта выводятся в одном масштабе
def sizes():
    out = {}
    d = os.path.join(HERE, 'img')
    for f in sorted(os.listdir(d)):
        if f.startswith('s2-') and f.endswith('.svg'):
            m = re.search(r'width="([\d.]+)" height="([\d.]+)"', open(os.path.join(d, f), encoding='utf-8').read(2000))
            if m: out[f[3:-4]] = [round(float(m.group(1))), round(float(m.group(2)))]
    return out
s2_path = os.path.join(HERE, 's2.js')
if os.path.exists(s2_path):
    s2 = open(s2_path, encoding='utf-8').read()
    s2 = re.sub(r'/\*RATIOS\*/.*?/\*/RATIOS\*/', lambda m: '/*RATIOS*/' + json.dumps({k[3:]: v for k, v in ratios().items() if k.startswith('s2-')}, separators=(',', ':')) + '/*/RATIOS*/', s2, flags=re.S)
    s2 = re.sub(r'/\*SIZES\*/.*?/\*/SIZES\*/', lambda m: '/*SIZES*/' + json.dumps(sizes(), separators=(',', ':')) + '/*/SIZES*/', s2, flags=re.S)
    open(s2_path, 'w', encoding='utf-8').write(s2)
js_path = os.path.join(HERE, 'as.js')
js = open(js_path, encoding='utf-8').read()
js = re.sub(r'/\*RATIOS\*/.*?/\*/RATIOS\*/', lambda m: '/*RATIOS*/' + json.dumps({k: v for k, v in ratios().items() if not k.startswith('s2-')}, separators=(',', ':')) + '/*/RATIOS*/', js, flags=re.S)
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
    "var R='https://cdn.jsdelivr.net/gh/kupdasha/army-sport@',got=0,left=3;\n"
    # стили, шрифт и код — по номеру версии; код подключается после стилей, чтобы страница не мигнула без оформления
    "function load(s){if(got)return;got=1;var b=R+(s||'main')+'/';window.AS_BASE=b;\n"
    "var f=document.createElement('link');f.rel='preload';f.as='font';f.type='font/woff2';f.crossOrigin='';f.href=b+'fonts/GolosText-500-cyrillic.woff2';document.head.appendChild(f);\n"
    "var l=document.createElement('link');l.rel='stylesheet';l.href=b+'as.css';\n"
    "l.onload=l.onerror=function(){var j=document.createElement('script');j.src=b+'as.js';document.head.appendChild(j)};document.head.appendChild(l)}\n"
    # номер свежей версии спрашиваем сразу у трех источников, берем первый ответ: воркер kup-version (читает git напрямую,
    # без лимита), служебная ветка version на GitHub (пишет publish.sh) и GitHub API (60 запросов в час с адреса).
    # Никто не ответил за 3 с — берем main с jsDelivr (его кеш publish.sh сбрасывает). Запомненный номер не используем:
    # так страница не застревает на старой версии
    "function sha(t){t=(t||'').trim();return /^[0-9a-f]{40}$/.test(t)?t:''}\n"
    "function done(s){left--;if(got)return;if(s)load(s);else if(!left)load('')}\n"
    "function ask(u,h){var x=new XMLHttpRequest();x.open('GET',u);if(h)x.setRequestHeader('Accept',h);x.timeout=3000;\n"
    "x.onload=function(){done(x.status==200?sha(x.responseText):'')};x.onerror=x.ontimeout=function(){done('')};x.send()}\n"
    "ask('https://kup-version.kupdaria26.workers.dev/?repo=army-sport');\n"
    "ask('https://raw.githubusercontent.com/kupdasha/army-sport/version/version.txt?t='+Date.now());\n"
    "ask('https://api.github.com/repos/kupdasha/army-sport/commits/main','application/vnd.github.sha')})()</script>")

with open(os.path.join(HERE, 'tilda-block.txt'), 'w', encoding='utf-8') as f:
    f.write(block + '\n')
print(f'tilda-block.txt  {len(block.encode("utf-8")) / 1024:.0f} КБ')

# второй этап: тот же загрузчик, свои файлы (as.css — общее оформление, s2.css и s2.js — второй этап)
src2 = open(os.path.join(HERE, 'stage2.html'), encoding='utf-8').read()
skel2 = src2.split('<!-- скелет -->')[1].split('<!-- /скелет -->')[0].strip()
block2 = (block.replace('АРМИЯ СПОРТА, ПЕРВЫЙ ЭТАП', 'АРМИЯ СПОРТА, ВТОРОЙ ЭТАП').replace(skel, skel2)
    .replace("l.href=b+'as.css';", "l.href=b+'as.css';var l2=document.createElement('link');l2.rel='stylesheet';l2.href=b+'s2.css';document.head.appendChild(l2);")
    .replace("j.src=b+'as.js'", "j.src=b+'s2.js'").replace('AS_LOADING', 'AS2_LOADING'))
with open(os.path.join(HERE, 'tilda-block-2.txt'), 'w', encoding='utf-8') as f:
    f.write(block2 + '\n')
print(f'tilda-block-2.txt  {len(block2.encode("utf-8")) / 1024:.0f} КБ')
