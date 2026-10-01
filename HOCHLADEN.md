# BARRY · TEST – Icon-Update (GitHub Pages)

## Inhalt
index.html (nur Icon-Verweise im head geändert) · manifest.webmanifest · sw.js · favicon.ico · icons/ (9 PNG) · .nojekyll

## Hochladen (Repository Testbarry)
1. Vorab eine Datensicherung in BARRY exportieren.
2. ZIP entpacken. Im Repository „Add file → Upload files“ wählen und den gesamten Inhalt des Ordners
   „Testbarry“ hineinziehen, einschließlich Ordner „icons“. Vorhandene index.html, sw.js und ggf.
   manifest.webmanifest werden dabei ersetzt.
3. Die Datei „.nojekyll“ ist evtl. unsichtbar (Punkt am Anfang). Fehlt sie, ist das unkritisch.
4. „Commit changes“. Nach 1–3 Minuten ist die Seite aktualisiert.
5. Eine alte Datei icon-192.png (falls vorhanden) wird nicht mehr verwendet und kann gelöscht werden.

## Auf dem Handy
- App öffnen und den Hinweis „Eine neue BARRY-Version ist verfügbar …“ bestätigen.
- Ein bereits angelegtes Startbildschirm-Symbol mit „G“ übernimmt das neue Icon in der Regel nicht
  von selbst: Symbol entfernen, BARRY im Browser öffnen, „App installieren“ bzw.
  „Zum Startbildschirm hinzufügen“ wählen.

## Für spätere Veröffentlichungen
In sw.js die Zeile CACHE_VERSION hochzählen (z. B. '2.1-icons-2'), damit alle Geräte die neue Fassung laden.
