// service-worker.js
self.addEventListener('install', (e) => {
  console.log('[SW] Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[SW] Activated');
});

self.addEventListener('fetch', (event) => {
  // Default fetch handler (for offline support, if needed later)
});
