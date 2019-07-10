/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "230e630ff173d3175f3f14d70be0671d"
  },
  {
    "url": "android-chrome-144x144.png",
    "revision": "d4e2b8128ec00bcb2263a4eaa27b1840"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "de020741e19e0f78592cfc0f62db0745"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "7278ca6e538dfbda40a0da80906ae228"
  },
  {
    "url": "android-chrome-36x36.png",
    "revision": "ea5cb9d13655d9ec6b55013952635e2f"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "170eccb2cf429b4f31426b7762ea9471"
  },
  {
    "url": "android-chrome-48x48.png",
    "revision": "0e28afcb646e56aeb8ae8df7bb7caf61"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "30ff8d17a67a9ed5ac4882c268e4b248"
  },
  {
    "url": "android-chrome-72x72.png",
    "revision": "ac914f57ce1f979102f5f6f736daeb06"
  },
  {
    "url": "android-chrome-96x96.png",
    "revision": "e22478505f94e8d10af87cc28c391d6e"
  },
  {
    "url": "apple-touch-icon-1024x1024.png",
    "revision": "c7eb069ae76816b1ed4b9eefebbfb2a9"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "b69605b76fba1abc0b0c9f12d3d2331c"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "924e92c303b4466ab3120980cb542275"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "e2b3023f780f6026215be25ff5816cd5"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "eeec44e2b1561d48cdd0ba352ac04037"
  },
  {
    "url": "apple-touch-icon-167x167.png",
    "revision": "5d3301458658538d9abac3119f99bdb6"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "999b955304324304bc02fdba922957b6"
  },
  {
    "url": "apple-touch-icon-57x57.png",
    "revision": "d96254355063d58eaff8154153c1b94d"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "c3192ad7945d201170b8ca08de94037e"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "3e27197d35416ae29849c17c43cd9429"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "085272442a3dacd9317b8e09fcc6328b"
  },
  {
    "url": "apple-touch-icon-precomposed.png",
    "revision": "999b955304324304bc02fdba922957b6"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "999b955304324304bc02fdba922957b6"
  },
  {
    "url": "apple-touch-startup-image-1182x2208.png",
    "revision": "0f752d1f370b39a3196a0061d4738cc2"
  },
  {
    "url": "apple-touch-startup-image-1242x2148.png",
    "revision": "b31cdd7717b526e9d5e17e538119b272"
  },
  {
    "url": "apple-touch-startup-image-1496x2048.png",
    "revision": "6b6ad7950ad144ff03f70586a57cd197"
  },
  {
    "url": "apple-touch-startup-image-1536x2008.png",
    "revision": "69dd14e5ca15b2ba31e91c300f1c6c0b"
  },
  {
    "url": "apple-touch-startup-image-320x460.png",
    "revision": "8d306fd4fd85fbdd660f1759fa7e2a5f"
  },
  {
    "url": "apple-touch-startup-image-640x1096.png",
    "revision": "bfeb31fd76d175ca58fd63b94e1a4c5f"
  },
  {
    "url": "apple-touch-startup-image-640x920.png",
    "revision": "4408db343f25177d4ba4cd405b02d370"
  },
  {
    "url": "apple-touch-startup-image-748x1024.png",
    "revision": "b4ef3048159857cfbcd3cbc472f43349"
  },
  {
    "url": "apple-touch-startup-image-750x1294.png",
    "revision": "1d96908a818b0a5b54f9b1361ff50239"
  },
  {
    "url": "apple-touch-startup-image-768x1004.png",
    "revision": "141ff2dd4ec98756dac6fd57e3c735b2"
  },
  {
    "url": "articles/check-1-2/index.html",
    "revision": "7ab612bfda773bd29e48dbd74d6532ec"
  },
  {
    "url": "articles/first/index.html",
    "revision": "1bc623f54f83250d4433cc4a5fddd40c"
  },
  {
    "url": "articles/hi-there-tom/index.html",
    "revision": "1cb463e2f475fd091bbfc642f2f2184e"
  },
  {
    "url": "articles/index.html",
    "revision": "f2883669275e7ff738838d317f93ca4e"
  },
  {
    "url": "articles/index.xml",
    "revision": "8b557a7f7699c569e7a01b75f6acf9da"
  },
  {
    "url": "articles/test2/index.html",
    "revision": "6b514eada9ffbb3a45582c6b70daf2cf"
  },
  {
    "url": "articles/this-is-a-second-test/index.html",
    "revision": "c90745b8bf078493291e57e261a4251b"
  },
  {
    "url": "articles/wekeith-curle/index.html",
    "revision": "b57fc8330f9635a9cb90813d2ba2798a"
  },
  {
    "url": "browserconfig.xml",
    "revision": "54c990abc2b40d3b19b4cb7fd36e07cd"
  },
  {
    "url": "coast-228x228.png",
    "revision": "db172d4e1537ac358be851008a3e9af4"
  },
  {
    "url": "contact/contact/index.html",
    "revision": "17b6c12542466543921de06c2d9e3893"
  },
  {
    "url": "contact/index.html",
    "revision": "587b467fbd1afc26c6d0a630d2a7543b"
  },
  {
    "url": "contact/index.xml",
    "revision": "5fb69d02b89e6ecd358a5edb261c2b41"
  },
  {
    "url": "css/styles-3429f293.css",
    "revision": "ac707bde8f7495ac6ee9947b21232710"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d7df1975767b78de4ebf725b92b5f486"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "67e6776c3b17690d2a0db385d2d53cee"
  },
  {
    "url": "favicon.ico",
    "revision": "fa474ff3ef6165bf8384b436ff43c82a"
  },
  {
    "url": "favicons.html",
    "revision": "bde825e9a9b3a759e9838824e3f99ad1"
  },
  {
    "url": "firefox_app_128x128.png",
    "revision": "8bede63c61f1822a9db4d331d12323f4"
  },
  {
    "url": "firefox_app_512x512.png",
    "revision": "6d54530552737a253ba37801328ce11d"
  },
  {
    "url": "firefox_app_60x60.png",
    "revision": "355ba6c481d10d67aa5feb2dd8d35a2b"
  },
  {
    "url": "index.html",
    "revision": "0d2e4ac3ef1fbdf754c4ae8add048d32"
  },
  {
    "url": "index.xml",
    "revision": "67012a6751b2bc11c67cae3ebba7596c"
  },
  {
    "url": "js/app.js",
    "revision": "21487a353c8e40b5b066ca45bdb8c7a6"
  },
  {
    "url": "manifest.json",
    "revision": "82a075fcf7dbf1ffc24bbf4b11fc749b"
  },
  {
    "url": "manifest.webapp",
    "revision": "43881285923b7822e6fc79ac6da63d99"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "d4e2b8128ec00bcb2263a4eaa27b1840"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "8873786389086781fe4d8db882b76f70"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "3b2815bef4dac0a4dee3085f4c5c99ac"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "6c809c4d3a6f17753ccae50604abbf23"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "c7ca13507299ca7a63c7c20b795d37d6"
  },
  {
    "url": "robots.txt",
    "revision": "f5f637e686e36465a2f6defe8103b290"
  },
  {
    "url": "sitemap.xml",
    "revision": "cd83e9bb004d1879d933c3691a83fe38"
  },
  {
    "url": "uploads/molly.png",
    "revision": "dc961df6743dfb7ca9ba376fc94aee1a"
  },
  {
    "url": "uploads/road.jpg",
    "revision": "d54f3c8a81d72b3ba4c4ea4aafd2b53a"
  },
  {
    "url": "yandex-browser-50x50.png",
    "revision": "b70b0991db9055f85bd3552fd7f6f778"
  },
  {
    "url": "yandex-browser-manifest.json",
    "revision": "4eaff1e71af4a7303af756c0a364a65a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
