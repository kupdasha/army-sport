#!/usr/bin/env python3
# Вписывает в as.js и s2.js пропорции картинок и размеры знаков второго этапа.
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
