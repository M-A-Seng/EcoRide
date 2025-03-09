self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          'style/styles.css',
          'style/pages.css',
          'style/responsive.css',
          'style/form.css',
          'style/admin.css',
          'script/script.js',
          'script/form.js',
          'script/login.js',
          'script/signup.js',
          'script/modo.js',
          'img/logo/app-icon-192x192.png',
          'img/logo/app-icon-512x512.png',
          'img/logo/logo-without-slogan.svg',
          'img/logo/logo-with-slogan.svg',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  