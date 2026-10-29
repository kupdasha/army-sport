#!/bin/zsh
# ПУБЛИКАЦИЯ: проверить код, вписать пропорции картинок, отправить на GitHub и прогреть новую версию на jsDelivr.
# Страницы отдает воркер kup-version (/armysport и /armysport2) — он сам берет последний коммит main.
cd "$(dirname "$0")" || exit 1
for f in as.js s2.js s3.js s4.js; do node --check "$f" || exit 1; done
python3 build.py
git add -A
git commit -q -m "${1:-Обновление}" || echo "нечего коммитить"
git push -q origin main || exit 1
sha=$(git rev-parse HEAD)
# по новому номеру jsDelivr первый раз собирает файлы несколько секунд — запрашиваем их заранее
{ echo as.css; echo as.js; echo s2.css; echo s2.js; echo s3.css; echo s3.js; echo s4.css; echo s4.js; echo stage2.html; echo stage3.html; echo stage4.html; echo fonts/Bounded-var.woff2; ls fonts/*.woff2; ls img/*.svg img/*-under*.webp img/*-over*.webp img/promo*; } | xargs -P 8 -I{} curl -s -o /dev/null --max-time 60 "https://cdn.jsdelivr.net/gh/kupdasha/army-sport@$sha/{}"
echo "опубликовано: ${sha:0:7}"
