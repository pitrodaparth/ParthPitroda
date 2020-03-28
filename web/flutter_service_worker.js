'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0b68748a4f5599ed99eb47e543fb93c6",
"assets/assets/fonts/Lato-Black.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Lato-Bold.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Lato-Regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Lato-Thin.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/ReemKufi-Regular.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "81eeeace68e31704e812fd9202d2a13a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b765041baa1b0a3a45b82907230eb6d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "880d6190af7e8deb4240cc215ce21aff",
"main.dart.js": "e02a7dc9dec84e6bf0a6fdea2a28093e",
"manifest.json": "4b136d82f239bd9690fb17b9fd4771bc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
