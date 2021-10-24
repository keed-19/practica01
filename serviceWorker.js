const TICsPWA = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
];

self.addEventListener("install", installEvent=> {
    installEvent.waitUntil(
        caches.open(TICsPWA).then(cache =>{
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request);
        })
    );
});