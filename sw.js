const cacheName = 'financas-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Instalação: Armazena os arquivos no cache local [cite: 2]
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets de finanças');
      return cache.addAll(assets);
    })
  );
});

// Ativação: Remove caches antigos para evitar conflitos [cite: 3]
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch: Tenta carregar do cache primeiro; se não tiver, busca na rede [cite: 4]
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request);
    })
  );
});
