const CACHE_NAME = 'v4';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  './scripts/theme.js',
  './scripts/menu.js',
  './common/categoryNavigator.js',
  './common/menuRenderer.js',
  './canteens/bbc/BbcMenu.js',
  './canteens/bbc/',
  './canteens/jc/JcMenu.js',
  './canteens/jc/',
  './canteens/moc/MocMenu.js',
  './canteens/moc/',
  './canteens/tc/TcMenu.js',
  './canteens/tc/',
  './canteens/devids/DevidsMenu.js',
  './canteens/devids/',
  './styles/common.css',
  './styles/theme.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => { 
  event.respondWith( fetch(event.request) .then((response) => {  
    const responseClone = response.clone();
    caches.open(CACHE_NAME).then((cache) => { 
      cache.put(event.request, responseClone); }); 
      return response; 
    }) 
    .catch(() => { 
      return caches.match(event.request); 
    }) 
  ); 
});
