globalThis.addEventListener('install', event => {
  event.waitUntil(
    (async function () {
      const cache = await caches.open('static');
      await cache.addAll([
        'dist/app.bundle.js',

        'img/menu/appleMangoAde.png',
        'img/menu/chaPpong.png',
        'img/menu/cornCheesePizza.png',
        'img/menu/creamBulgogiRisotto.png',
        'img/menu/grapefruitAde.png',
        'img/menu/greengrapeAde.png',
        'img/menu/hotChicRisotto.png',
        'img/menu/ilPpong.png',
        'img/menu/keuPpong.png',
        'img/menu/naePizza.png',
        'img/menu/niPizza.png',
        'img/menu/orangeAde.png',
        'img/menu/pepperoniTripleCheesePizza.png',
        'img/menu/potaconPizza.png',
        'img/menu/rojeRisotto.png',
        'img/menu/roPpong.png',
        'img/menu/spicyKeuPpong.png',
        'img/menu/spicyRojeRisotto.png',
        'img/menu/taeppong.png',
        'img/menu/toPpong.png',
        'img/menu/truffleMeatJjajang.png',
        'img/menu/vongolePpong.png',

        'img/logo/favicon.ico',
        'img/logo/logo.png'
      ]);
    })()
  );
});

// 데이터 캐싱 & 오프라인 지원
globalThis.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
