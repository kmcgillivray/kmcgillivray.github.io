'use strict';

(function() {

  var staticCacheName = 'static';
  var version = 'v1::';

  function updateStaticCache() {
    console.log(caches);
    return caches.open(version + staticCacheName)
      .then(function(cache) {
        console.log(cache);
        return cache.addAll([
          '/css/main.css',
          '/css/normalize.css',
          '/css/syntax.css',
          '/js/main.js',
          '/',
          '/offline'
        ]);
      });
  }

  self.addEventListener('install', function(event) {
    event.waitUntil(updateStaticCache());
    console.log("installed!");
  });

  self.addEventListener('activate', function(event) {
    console.log("activating...");
    event.waitUntil(
      caches.keys()
        .then(function(keys) {
          return Promise.all(keys
            .filter(function(key) {
              return key.indexOf(version) !== 0;
            })
            .map(function(key) {
              return caches.delete(key);
            })
          );
        })
    );
  });

  self.addEventListener('fetch', function(event) {
    var request = event.request;
    console.log(request);
    if (request.method !== 'GET') {
      event.respondWith(
        fetch(request)
          .catch(function() {
            return caches.match('/offline');
          })
      );
      return;
    }

    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
      event.respondWith(
        fetch(request, { credentials: 'include' })
          .then(function (response) {
            var copy = response.clone();
            caches.open(version + staticCacheName)
              .then(function(cache) {
                cache.put(request, copy);
              });
            return response;
          })
          .catch(function() {
            return caches.match(request)
              .then(function(response) {
                return response || caches.match('/offline');
              })
          })
      );
      return;
    }

    event.respondWith(
      caches.match(request)
        .then(function(response) {
          return response || fetch(request)
            .catch(function() {
              if (request.headers.get('Accept').indexOf('image') !== -1) {
                return new Response('<svg>...</svg>', { headers: { 'Content-Type': 'image/svg+xml' }});
              }
            })
        })
    );
  });

})();
