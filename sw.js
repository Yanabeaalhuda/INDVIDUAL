const CACHE_NAME='yanabea-individual-quote-v28';
const APP_FILES=['./','./index.html','./404.html','./vendor/html2canvas.min.js?v=27','./vendor/jspdf.umd.min.js?v=27','./app.js?v=28','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo.png','./fonts/ExpoArabic-SemiBold.ttf','./fonts/GE-SS-Two-Bold.otf','./fonts/Helvetica-Bold.ttf','./fonts/Helvetica-Rounded-Bold.otf'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_FILES))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith(
    fetch(request)
      .then(response=>{
        if(response.ok){
          const copy=response.clone();
          event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{}));
        }
        return response;
      })
      .catch(()=>caches.match(request).then(cached=>{
        if(cached)return cached;
        if(request.mode==='navigate')return caches.match('./index.html');
        return Response.error();
      }))
  );
});
