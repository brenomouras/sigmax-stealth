
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sigmax-store').then(function(cache) {
      return cache.addAll([
        '/SIGMAX_APP_STEALTH_TERMINAL.html',
        '/manifest.json',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
