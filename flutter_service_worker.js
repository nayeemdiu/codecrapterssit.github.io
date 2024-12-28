'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dcaf255461a995b8e497d9758b9fbb8d",
"assets/AssetManifest.bin.json": "d3c596ee5fc1d9ee043776496c0ab482",
"assets/AssetManifest.json": "124122ba0b78844f2de30e44aa7ec93a",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/app.png": "97437492d79aa09e44bf8c7e0f85a1a7",
"assets/assets/images/appdev.png": "6c799b857cd4c9bec799f713d02ea150",
"assets/assets/images/bac.png": "bb85e76faba0075b0c3260f31c91f84e",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/coding1.png": "29bdbdf4af9822653d6a00d8bb7739b0",
"assets/assets/images/course.jpg": "324936f3ba4fe40adc44239724227ee3",
"assets/assets/images/coursee.png": "601982bced1a4b851e66dbe199bbc45d",
"assets/assets/images/e1.png": "331c00c7fcf6a797c11ff3cac9439559",
"assets/assets/images/ecom.png": "65d32c602604c1452d7841f5ee770b8b",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/fitness.jpg": "bd36cf962724add191a4b672830047fe",
"assets/assets/images/fitness.png": "1347023b28821cfb3d9124efa91c2dbd",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/hotel.jpg": "c2a3a83d24893c38ae896d5df4aa6e03",
"assets/assets/images/hotel1.png": "8ddd66b50b1d6b2782d168fc30a98532",
"assets/assets/images/hotell.png": "6d0021778be8f05251b6527ba161ad3c",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/logo.png": "33ed2418692c00b6ba8dfa74dda44f32",
"assets/assets/images/map.png": "e90e9b490337f7f7bae5a70667f71094",
"assets/assets/images/nayeem2.png": "2dbe1984f0f7a7e9fc007e270561d725",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/soft.png": "cc45d9ce33d7e4ff7f720051f594cfdb",
"assets/assets/images/todo.jpg": "58ababba7c39ddf82d183bb747c3e52b",
"assets/assets/images/todo.png": "e0cef12e0734e91b8ba02c87d55359b3",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/web.png": "1d9da5dce2c74d01bff74e41f621eee5",
"assets/assets/images/whatsapp.png": "c4f4fe41e99283c55eb2aa68a6f7c05f",
"assets/assets/images/Whatsappp.png": "811316a8c26e3777b1544b42049dd848",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "222417c02b29a2b1bc783db4650882c0",
"assets/NOTICES": "6db50b3788371c3bcc537bee436a24cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8c547060dbeb679fc519789ea4bd3ccc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10c51bd695d7cb807b45481fa2e51c86",
"/": "10c51bd695d7cb807b45481fa2e51c86",
"main.dart.js": "7ee67bc9cc85ecb81d15d6aa40d5d0d0",
"manifest.json": "3fbd4a80679ba2018dd2ffb1e1ae2563",
"version.json": "ca539b1c94030ba4c9dd365ef0866529"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
