/* BARRY Service Worker – Netzwerk zuerst, Cache nur als Offline-Ersatz.
   Damit bekommt jede/r nach dem Hochladen einer neuen index.html sofort die neue Version,
   und BARRY bleibt trotzdem offline nutzbar. */
const CACHE_PREFIX = 'barry-shell-';
const CACHE = CACHE_PREFIX + 'v8-2.8';   // bei jeder Veröffentlichung hochzählen (BARRY 2.8)
const SHELL = ['./', './index.html', './manifest.webmanifest', './rhs-apple-touch-icon.png', './rhs-favicon-32.png'];   // Icons für die Startseite auch offline

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL).catch(()=>{})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE)   /* nur eigene Caches löschen – andere Apps unter mwhog-hue.github.io (z. B. BARRY · TEST) bleiben unberührt */.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  // Nur eigene Dateien behandeln; fremde Hosts (z. B. Kartenkacheln) unverändert durchlassen.
  if (new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(req).then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
