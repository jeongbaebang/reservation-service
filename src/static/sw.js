globalThis.addEventListener('install', e =>
  e.waitUntil(
    caches
      .open('static')
      .then(cache =>
        cache.addAll([
          './',

          'manifest.json',

          'css/index.css',
          'css/reset.css',

          'font/Jua-Regular.ttf',

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
          '/img/logo/main_brand_logo.png',
          'img/logo/logo.png',

          'js/controller/confirm.js',
          'js/controller/menu.js',
          'js/controller/user.js',
          'js/controller/admin.js',

          'js/router/index.js',
          'js/router/router.js',

          'js/tools/firebase.js',
          'js/tools/index.js',

          'js/views/AbstractView.js',
          'js/views/Admin.js',
          'js/views/Confirm.js',
          'js/views/Home.js',
          'js/views/Menu.js',
          'js/views/MenuReservation.js',
          'js/views/UserReservation.js'
        ])
      )
  )
);

globalThis.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
