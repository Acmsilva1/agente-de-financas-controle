const cacheName = 'financas-v31'; 
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
      console.log('SW: Cacheando assets');
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); // Força o novo SW a assumir o controle imediatamente
});

// Ativação: Limpa caches antigos de versões anteriores (v15, v14, etc.)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim(); // Garante que o SW controle a página atual imediatamente
});

// Estratégia: Network First (Tenta rede, se falhar usa cache)
// Ideal para o seu Dashboard que precisa de dados atualizados da planilha
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
