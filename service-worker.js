const CACHE_NAME = 'college-app-v1';
const files = ['index.html','css/style.css','js/app.js','js/firebase.js','manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(files)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
