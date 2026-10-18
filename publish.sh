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
{ echo as.css; echo as.js; ls fonts/*.woff2; ls img/*.svg img/*-under*.webp img/*-over*.webp img/promo*; } | xargs -P 8 -I{} curl -s -o /dev/null --max-time 60 "https://cdn.jsdelivr.net/gh/kupdasha/army-sport@$sha/{}"
# запасной путь (main) — один сброс кеша на публикацию
for f in as.css as.js; do curl -s -o /dev/null "https://purge.jsdelivr.net/gh/kupdasha/army-sport@main/$f"; done
# номер версии — в служебную ветку version (version.txt): страница на Тильде читает его с raw.githubusercontent,
# когда воркер kup-version недоступен; main при этом не трогается
blob=$(print -n "$sha" | git hash-object -w --stdin)
tree=$(print "100644 blob $blob\tversion.txt" | git mktree)
commit=$(git commit-tree "$tree" -m "версия: $sha")
git push -q -f origin "${commit}:refs/heads/version" 2>/dev/null || echo "НЕ УДАЛОСЬ записать ветку version"
echo "опубликовано: ${sha:0:7}"
