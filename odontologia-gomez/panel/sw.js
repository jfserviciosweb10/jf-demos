/* RE-BOMBA Panel — Service Worker v1.1 — Odontología Gómez */
const CACHE_NAME = 'rebomba-panel-odontologia-gomez-v1';
const ASSETS = ['./index.html','./offline.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(() => c.add('./index.html'))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.hostname === 'script.google.com') { e.respondWith(fetch(e.request).catch(() => new Response(JSON.stringify({ error: 'offline', cached: true }), { headers: { 'Content-Type': 'application/json' } }))); return; }
  e.respondWith(caches.match(e.request).then(hit => { if (hit) return hit; return fetch(e.request).then(res => { if (res.ok && e.request.method === 'GET') caches.open(CACHE_NAME).then(c => c.put(e.request, res.clone())); return res; }).catch(() => e.request.mode === 'navigate' ? caches.match('./offline.html') : new Response('', { status: 408 })); }));
});
self.addEventListener('push', e => { const d = e.data ? e.data.json() : {}; e.waitUntil(self.registration.showNotification(d.title || '🔥 RE-BOMBA', { body: d.body || 'Nuevo lead HOT en tu panel', icon: './icons/icon-192.png', badge: './icons/icon-192.png', vibrate: [200,100,200], tag: d.tag || 'rebomba', renotify: true, data: { url: d.url || './index.html#negocios' }, actions: [{ action:'ver', title:'Ver ahora' },{ action:'cerrar', title:'Cerrar' }] })); });
self.addEventListener('notificationclick', e => { e.notification.close(); if (e.action === 'cerrar') return; e.waitUntil(clients.matchAll({ type:'window' }).then(list => { for (const c of list) if ('focus' in c) return c.focus(); return clients.openWindow(e.notification.data.url); })); });