'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c467485b4ffad30f8e7fd1a9a7519217",
".git/config": "f249c85c57c984a51e0721895164cf16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f5100e32cc113ff40ca0aae4387f0be3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ee5e63652d6e36f2a6bed586893b933",
".git/logs/refs/heads/master": "0ee5e63652d6e36f2a6bed586893b933",
".git/logs/refs/remotes/origin/master": "a7780b8dbd2a0f7ea62d80ba0c72370c",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/10/61f41a375412deae190ab967be64065c55d6af": "f237f1cdb1abaf7b07602e5421e4e486",
".git/objects/1d/13fc7f8a69b0a7eb49c0ee9c673e492df5640e": "4e834ffdd76d0db7313a1e66ce5985d6",
".git/objects/21/bd5cea58a3d442666be82ea5e9934b40f38269": "0f7a629a9b0e7c03ee60dceba53c7b3d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3e/8f15a1cde246b27ebe3eb82b27dc03ce81909d": "1ab871083d56d758fc50e19c98b60495",
".git/objects/44/19d7bb134bdf6a310b866626244ab4a3f356ad": "2bd8c2a25cebd79bd3de7526a3a8ab1c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/e26bc3a95549145804b84523cc917e319bb1d0": "889f214a0d97c70a000dbe354ec3cacd",
".git/objects/5f/51c06f94f0a7bed55740224b33489f97227b54": "9cf86e0c96783f1dbed7632015c00d1a",
".git/objects/69/74bb56248c58fe826a8fe01d9326b74193db78": "bb9d9adc4e05fd453cb8aa7a25f89dab",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6e/11fd4ba9be32059d95388ad0810769976a969f": "1bbbbb93e89cb07dda495226a724d14f",
".git/objects/6e/9ce8d4c40ad1116cb1c179fc7004cfe11531fe": "17f050ef38e777a2364dde511986a831",
".git/objects/75/8acb50a864703bff7b362b2ea3055d58a66654": "2d512e24617c5f398c5a39304548bfb5",
".git/objects/77/0a597038386e5cb2bacb61ef924e0747050be7": "d44e1feda15bf5e04ac49ecb600eeeb0",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/78/95a2c71d22a9da69b3a5deea63c06cc5003eaf": "0d049875723925d54e6387d4c5c193a2",
".git/objects/7a/5b1cae8186b12c448670c1c01661795410b3d0": "a4821448763226974b5afd3e0a438552",
".git/objects/7e/31d9124863bae6dde012f9b4e9507e5eca838e": "c18ef8c8da49e98423feeb779379e2d6",
".git/objects/81/233fecd4d03e55c95a833327e83e42b9178a4b": "41818938d22c4785f2bba34f94113f19",
".git/objects/82/479f2e3560767371dac23e21482b5c93481e2c": "aaea41d60a440d6b9d1a142d37f7b195",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6ee1c784bf00771ef4d03ce43d49fe1d867c39": "4dfb2fcec86f1b5f710fe2986464cd59",
".git/objects/96/f816d29577ac469c61c137ea313c27998ce75b": "9e92bff6d4541a85e753956b273ed26b",
".git/objects/99/bbb747ca20a7338a724ad2cb0c7370ea7994bd": "d542a93f016f657a80ba492195d37ab3",
".git/objects/9f/66abff8e1e072bbecb0a3a3a8f3d392b801531": "e37f178a5cdd50eba07272d65d3b2c03",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/9c43caa042c73230d8673dbe1509cc88e5f687": "f27880654929fc3bf9f84a74b53406fe",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/c1/68cbc103d56e2d77f43ce9628287463a346530": "735aec086d51d8b2f0a261570ef94a74",
".git/objects/c8/b07c48d743046f8bf6cc93b3d57fbab4c9f937": "67689505aa59c671b04246091e9ff3b4",
".git/objects/cc/6bf664790bb5c80d6bef684d0fbe1680bb03a6": "829645450399525dddb9baec2ce0f54c",
".git/objects/cd/6221692685aafb75da16dd23f47562c2451313": "2b3447a34557ff8ea191ecc774037c3f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/8f58970d6711c4ccb4cae2e987e9c2200e78c2": "f045c37e734f326a1e0677ea580f7092",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e3/f1a3422e3a73cc5bd1ff856332e171b3cefb26": "50624a10196d2b9ccf16712e7b39ed32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/4c8f18644d1f30f8aec2e04a790d544f72a869": "96036e5d1568b34ca422cd470c5a6f04",
".git/objects/ea/7e047b7cf840ba3f35c33fab10fa0bf842df4f": "bcd5451b66dbc9c5bb34d80f8cf230c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/f9ee9679c0c31f0dd8a5305f0b13b3e89a5562": "cd5dc996ef49e8d87dd610d87f84c007",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "c99b959acc33534c9fe85ae87e09dc61",
".git/refs/remotes/origin/master": "c99b959acc33534c9fe85ae87e09dc61",
"assets/AssetManifest.bin": "738cbb69768457cf56599fb4f6f0664a",
"assets/AssetManifest.json": "a277586a79bbea6b9c9d413f8c925177",
"assets/assets/BackBtn.png": "ecb62cd442303a58c787e930a355d3c4",
"assets/assets/closebtn.png": "f140328c880bfb58610056cfd9d8c46c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/image1.png": "953cbdf4cc59adc16830a3d741711166",
"assets/assets/image2.png": "381ee10c1c0dfbdea241ec065cdeb545",
"assets/assets/image3.png": "df09cf240459eeab24232dc7b2eb9cfa",
"assets/assets/image4.png": "c33179d8943aa8cf8efeeb7c8272a2ca",
"assets/assets/left.png": "c442b891f4b31f23178219da4483d63b",
"assets/assets/logo.png": "267b3ce5d29869bba227b37be9a6c3d9",
"assets/assets/nextbtn.png": "0d9ed96d1c0b4e68d8ac2532467923a6",
"assets/assets/puzzle1.png": "f9666fe2ed4503003740d341a700716e",
"assets/assets/right.png": "ea4c942b2d98859f9766f7c5e1567796",
"assets/FontManifest.json": "a83b3759f6a974990df933e12335ed73",
"assets/fonts/MaterialIcons-Regular.otf": "65e5537d8cecaf05f3faaf7877d42c74",
"assets/NOTICES": "095210a7e44958f52837b56a0573cea9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4f331064507a7742f0a876b84d13cbe3",
"/": "4f331064507a7742f0a876b84d13cbe3",
"main.dart.js": "c33047ad6d931d916d053c218b264c0d",
"manifest.json": "5e8c01ffebee14a1f126656a39fe99cb",
"version.json": "f89a1c608e8f9100e93771cd6f65ecf2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
