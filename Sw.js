// Nome do cache. Altere a versão (ex: 'v2') se atualizar os arquivos para forçar um novo cache.
const CACHE_NAME = 'km-calculado-v1';

// Lista de todos os arquivos que precisam ser salvos no cache para o app funcionar offline.
// Certifique-se de que os nomes dos arquivos estão corretos!
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Evento de Instalação: Salva todos os arquivos essenciais no cache.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Arquivos em cache com sucesso');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Evento de Ativação: Limpa caches antigos para liberar espaço.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Se o nome do cache não for o atual, deleta-o.
          if (cacheName !== CACHE_NAME) {
            console.log('Cache antigo deletado:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de Fetch: Intercepta as requisições de rede para servir os arquivos do cache primeiro.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se o arquivo estiver no cache, retorna-o.
        if (response) {
          return response;
        }
        // Se não estiver no cache, busca na rede.
        return fetch(event.request);
      }
    )
  );
});
