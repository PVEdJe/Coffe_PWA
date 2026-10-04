const CACHE_NAME = 'cafeteria-v1';

// 1. Incluimos imágenes, íconos y todas las rutas necesarias
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './detalle.html',
    './css/style.css',
    './css/detalle.css',
    './js/app.js',
    './js/detalle.js',
    './manifest.json',
    // Íconos para la PWA
    './imgs/icons/icon-192.png',
    './imgs/icons/icon-512.png',
    // Imágenes de los cafés
    './imgs/coffe1.jpg',
    './imgs/coffe2.jpg',
    './imgs/coffe3.jpg',
    './imgs/coffe4.jpg',
    './imgs/coffe5.jpg',
    './imgs/coffe6.jpg',
    './imgs/coffe7.jpg',
    './imgs/coffe8.jpg',
    './imgs/coffe9.jpg',
    './imgs/coffe10.jpg'
];

// Evento de instalación: guarda todos los recursos en caché
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Precaching de archivos completado');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // Fuerza al nuevo SW a tomar el control inmediatamente
    self.skipWaiting();
});

// Evento de activación: limpia las cachés antiguas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Eliminando caché antigua:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Evento fetch: responde con caché o red (con tolerancia a parámetros URL en detalle.html)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: false }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            // Si la consulta es a detalle.html con parámetros (ej. detalle.html?id=2)
            // y no está cacheada la URL exacta, respondemos con el archivo base detalle.html
            const url = new URL(event.request.url);
            if (url.pathname.endsWith('detalle.html')) {
                return caches.match('./detalle.html');
            }

            return fetch(event.request);
        })
    );
});