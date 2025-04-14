const staticCacheName = "site-static-v1";
const assets = ["/", "/index.html", "/main.js", "/main.css", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching shell assets");
      return cache.addAll(assets);
    }),
  );
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== dynamicCacheName)
          .map((key) => caches.delete(key)),
      );
    }),
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(evt.request).then((fetchRes) => {
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(evt.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    }),
  );
});
