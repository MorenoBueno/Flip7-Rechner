// Service Worker für Flip 7 Rechner (Offline-Nutzung).
// Bei jeder Änderung an den Dateien die Versionsnummer erhöhen, damit Geräte das Update holen.
const VERSION = 'v1.3';
const CACHE = 'flip7-rechner-' + VERSION;
const FILES = [
  './',
  'index.html',
  'css/style.css',
  'js/app.js',
  'manifest.webmanifest',
  'img/favicon.svg',
  'img/favicon-32.png',
  'img/apple-touch-icon.png',
  'img/icon-192.png',
  'img/icon-512.png',
  'img/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('flip7-rechner-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // Seite: zuerst Netz (damit Updates ankommen), ohne Netz aus dem Cache
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('index.html', copy));
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }
  // Rest (Icons usw.): zuerst Cache
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
