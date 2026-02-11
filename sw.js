const cacheName = 'financas-v56'; // Incrementei para v50 para forçar a limpeza do cache antigo
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Instalação: Cacheia os arquivos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('SW: Cacheando novos assets (v50)');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); 
});

// Ativação: O momento da "faxina". Remove versões v44, v45, etc.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim(); 
});

// Estratégia: Network First
// Ele tenta buscar a planilha e o script novo na rede. 
// Se você estiver no metrô sem sinal, ele mostra o que estiver no cache.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});