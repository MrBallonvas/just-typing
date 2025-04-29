const dynamicCacheName = "site-dynamic-v1";

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
  if (evt.request.method !== "GET") return;

  evt.respondWith(
    caches.open(dynamicCacheName).then((cache) => {
      return cache.match(evt.request).then((cachedResponse) => {
        const fetchPromise = fetch(evt.request)
          .then((networkResponse) => {
            cache.put(evt.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => {
            return cachedResponse;
          });

        return cachedResponse || fetchPromise;
      });
    }),
  );
});
