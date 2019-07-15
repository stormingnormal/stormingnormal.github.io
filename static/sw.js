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
    "revision": "a47e225fb4b5667983fe03e911b9af41"
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
    "revision": "0af31c77b46fd92eea7b2f3c2413da30"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "a1f38f8ab48796a9648d25b91f44fc8e"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "e1240034a36faa2ac92d247b5267e6c8"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "026ef1d9a07b0963d4f20f41355e4387"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "079b7c08ad59d8fb9022b780818a8167"
  },
  {
    "url": "apple-touch-icon-167x167.png",
    "revision": "a96773d3f1cd8d64223c55e0295b9ce5"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "7a72b773da06e4b8228fdf7ed1338689"
  },
  {
    "url": "apple-touch-icon-57x57.png",
    "revision": "cc38b6c8c1f2755e8f1dad03399079c3"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "3bf8452e9b9e444030143c01e7e789fd"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "fad1db2dfda59599f844ce23bf43d29b"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "76de3e3610c070cc8538ef06a724dd0d"
  },
  {
    "url": "apple-touch-icon-precomposed.png",
    "revision": "7a72b773da06e4b8228fdf7ed1338689"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "7a72b773da06e4b8228fdf7ed1338689"
  },
  {
    "url": "apple-touch-startup-image-1182x2208.png",
    "revision": "993d1a35b41de978cef6b5386784fbf6"
  },
  {
    "url": "apple-touch-startup-image-1242x2148.png",
    "revision": "e3da3333bdec1bc7cc7baadd7ef39bcb"
  },
  {
    "url": "apple-touch-startup-image-1496x2048.png",
    "revision": "5b213d49a55e51b2bbcb4aed6970db80"
  },
  {
    "url": "apple-touch-startup-image-1536x2008.png",
    "revision": "770b6f3c4836b7df569398cba0e6a607"
  },
  {
    "url": "apple-touch-startup-image-320x460.png",
    "revision": "d338bc8826fd96d0f94803c71cd4056b"
  },
  {
    "url": "apple-touch-startup-image-640x1096.png",
    "revision": "1eeea5456cac24bbe7bf8c7b08ffa0c6"
  },
  {
    "url": "apple-touch-startup-image-640x920.png",
    "revision": "c71b70a956c6c8308600c51ad465bb79"
  },
  {
    "url": "apple-touch-startup-image-748x1024.png",
    "revision": "67dc48c572dde580b4173cf095b2f541"
  },
  {
    "url": "apple-touch-startup-image-750x1294.png",
    "revision": "a53b885aa14c516a25fcc2b1b89575f6"
  },
  {
    "url": "apple-touch-startup-image-768x1004.png",
    "revision": "76625e25b10c86b48d8d298f118d038e"
  },
  {
    "url": "articles/check-1-2/index.html",
    "revision": "85e927b0dcc5cd44998df404ac427c5f"
  },
  {
    "url": "articles/first/index.html",
    "revision": "d332a3ea08d80ac7fcca13011502fe2d"
  },
  {
    "url": "articles/hi-there-tom/index.html",
    "revision": "fa1ed163491424ac1ad45a32873d0e67"
  },
  {
    "url": "articles/index.html",
    "revision": "1862e52a722b5f09caea97d257e8fb83"
  },
  {
    "url": "articles/index.xml",
    "revision": "8fc8e42f20f05ae10ad971395c46192e"
  },
  {
    "url": "articles/test2/index.html",
    "revision": "c8c723fecf0d84292f0490b222183809"
  },
  {
    "url": "articles/this-has-meta/index.html",
    "revision": "2cd89d6792052d8c6a7c30617f04b027"
  },
  {
    "url": "articles/this-is-a-second-test/index.html",
    "revision": "efd78b9e08bfd42d50925737cf5f542a"
  },
  {
    "url": "articles/wekeith-curle/index.html",
    "revision": "4be343632156a943dbb317b5782862f8"
  },
  {
    "url": "browserconfig.xml",
    "revision": "4869d254f26a3c9552655bd8e512e5b6"
  },
  {
    "url": "coast-228x228.png",
    "revision": "823e9e3e1c318a21bec7243ec266d2ca"
  },
  {
    "url": "contact/index.html",
    "revision": "bd50f90657d125776cb1657522197cf4"
  },
  {
    "url": "contact/index.xml",
    "revision": "c6ec542c01a745a4ef86d9fd132ae888"
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
    "revision": "27501d852d0eae2711ada7c394be9602"
  },
  {
    "url": "firefox_app_128x128.png",
    "revision": "05751fde79f6b65c06ad5c790fac957e"
  },
  {
    "url": "firefox_app_512x512.png",
    "revision": "eacbdf48069d685cdae54762023fe5ed"
  },
  {
    "url": "firefox_app_60x60.png",
    "revision": "c1424dcfe9e93635772003825d4c5b3f"
  },
  {
    "url": "index.html",
    "revision": "2eb977eeb050d4869522de3c53261a09"
  },
  {
    "url": "index.xml",
    "revision": "15a8cfb1dee498de3e66d5873533aa78"
  },
  {
    "url": "js/app.js",
    "revision": "b8bdbcfd63cbbed697e4ff234f622d70"
  },
  {
    "url": "js/public.js",
    "revision": "dc99cbe5d8c0d7b97dd4d0083a0389aa"
  },
  {
    "url": "manifest.json",
    "revision": "492681e35c7212ae2eea83bf82a309a3"
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
    "revision": "7986ac7ff309939ac55aee694f3a5b5d"
  },
  {
    "url": "sitemap.xml",
    "revision": "64dfda0e27187ebf56b5f13dc776b0ce"
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
    "revision": "7c167de3e5ff36af5d61de0131471e1c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
