const casheSw = 'v1';
const filepath = [
    '/',
    'index.html',
    'hw2.html',
    'hw3.html',
    'hw4.html',
    'style.css',
    'logo.png',
    'app.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(casheSw).then(cache => cache.addAll(filepath))
  );
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== casheSw && caches.delete(key)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
