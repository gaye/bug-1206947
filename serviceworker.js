let debug = console.log.bind(console, '[serviceworker]');

self.addEventListener('install', (event) => {
  debug('install');
  return event.waitUntil(
    self.caches.open('v1').then(() => {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  debug('activate');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  let req = event.request;
  debug('fetch', req);
  return event.respondWith(makeRequest(req));
});

function makeRequest(req) {
  return fetch(req)
  .then(res => {
    return res.text();
  })
  .then(body => {
    let modified = body.replace('bar', 'baz');
    return new Response(new Blob([modified]), {
      status: 200,
      statusText: 'OK'
    });
  });
}
