const staticDevCoffee = 'dev-coffee-site-v1';
const assets = [
  '/',
  '/index.html',
  '/indexg.html',
  '/s.html',
  '/style.css',
  '/script.js',
  '/bg4.jpeg',
  '/bg5.jpeg.jpg',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
