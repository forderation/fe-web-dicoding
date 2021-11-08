import CacheManager from '../utils/cache-manager';
import $ from 'jquery';
const { assets } = global.serviceWorkerOption;

$(self).on('install', function (event) {
  event.waitUntil(CacheManager.cachingAppShell([...assets, './']));
});

$(self).on('activate', function (event) {
  event.waitUntil(CacheManager.deleteOldCache());
});

$(self).on('fetch', function (event) {
  event.respondWith(CacheManager.revalidateCache(event.request));
});
