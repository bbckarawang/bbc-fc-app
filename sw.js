self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Melewati cache agar tidak mengganggu otentikasi Google Apps Script
  event.respondWith(fetch(event.request));
});
