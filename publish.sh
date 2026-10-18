#!/bin/zsh
# ПУБЛИКАЦИЯ: собрать блок Тильды, отправить на GitHub и прогреть новую версию на jsDelivr.
# Блок в Тильде сам берет последнюю версию — перевставлять его не нужно.
cd "$(dirname "$0")" || exit 1
for f in as.js; do node --check "$f" || exit 1; done
python3 build.py
git add -A
git commit -q -m "${1:-Обновление}" || echo "нечего коммитить"
git push -q origin main || exit 1
sha=$(git rev-parse HEAD)
# по новому номеру jsDelivr первый раз собирает файлы несколько секунд — запрашиваем их заранее
{ echo as.css; echo as.js; ls fonts/*.woff2; ls img/*.svg; } | xargs -P 8 -I{} curl -s -o /dev/null --max-time 60 "https://cdn.jsdelivr.net/gh/kupdasha/army-sport@$sha/{}"
# запасной путь (main) — один сброс кеша на публикацию
for f in as.css as.js; do curl -s -o /dev/null "https://purge.jsdelivr.net/gh/kupdasha/army-sport@main/$f"; done
echo "опубликовано: ${sha:0:7}"
