import 'regenerator-runtime';
import CacheManager from './utils/cache-manager';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', function (event) {
  event.waitUntil(CacheManager.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(CacheManager.deleteOldCache());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(CacheManager.revalidateCache(event.request));
});
