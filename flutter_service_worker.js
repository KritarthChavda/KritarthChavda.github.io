'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "f38a01f7bbc04699f9363780e201f155",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d5b6b5533eb962bc87ea5100860345f8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e39c20e717e86d53121c2a9d97eb4088",
".git/logs/refs/heads/main": "dab8b7292ab0cc5896a7b492987484ad",
".git/logs/refs/remotes/origin/main": "c08cd437e37e2cc5dd6771458bbb7414",
".git/objects/02/ecfc4c100b83fa5d669cc21b88d67945ea79a6": "520b45143ef83d1d5dd18ee3ea9c8daa",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/4b133c3698cf49af40c02c11da127dc808d6f6": "c62a1626bf45e785f3f3bb08c420088b",
".git/objects/08/23ad817deeb3ea13aa3794c938c2b4764cfed9": "45056b3ca9f90d11791b5c70bde95670",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/a057af2cec43e47bb5300e594b39d28bb53ca7": "07880c28bd81864cf4d3851079c77074",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/e3cb4d756dc7ed2ecd3362df8e65d8621704d8": "016b8c5923c4859338fd1a644918a4eb",
".git/objects/1b/df6e6d660fbc76e95276e612e54da2aa453fd5": "9685d2555f90137ec9a5acb237d82cfb",
".git/objects/1f/ed0634cdaa963c824956fb10f8804a231b34b1": "61e7789283183b6d31e9107ee109eba5",
".git/objects/20/05c5e4efb396550d9cf1e4e0b68b26eb7992cc": "b9ca31f5231856180eebdd328ce13cd6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/2660fb1231b3c99778dc039a09e32d00862da2": "35540aeb85d2fc9beb266b961f6e0728",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ebf119ad9d5279f3bf97cda8974b1d4fccef93": "5415f476634eed8ebbc3f38ecf3bcb98",
".git/objects/28/ec451826c2fe105f107cf616cbba467be3a8d0": "0295802d5c5f3e7be2c8bb315825dbc5",
".git/objects/2b/2832a57ea7bc078b77ac58067c90cc7d62da8b": "8aa766671da588fdb350f2d2dfc75525",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/2ddad70ed49e768fb2f151fe54692991eab6e0": "9f1f0727c9398771cfc9eec31906b20f",
".git/objects/2d/8c8828cc456010761ef50d7025bc8ced6ca9c4": "1efff857e56956bbfd7ade6cc1884cd8",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/37/ea16764a16e8819414b5e3d3c8835f68732171": "9c7f9c82ac7ae8166eb9e4e01115ec49",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/a33d6adfb8c78cbad717fd82ea5d85d918d8e0": "ebdc726a7fb1558f950840135a38c606",
".git/objects/3b/b86e9d4d2cd8209d95ce24fb4b3c0989ae74c3": "85aea581c0cc9b5aa54be0986fad347d",
".git/objects/3e/291d4df540152025040c228da9b2e863ef051d": "98bd69e29bab284ca4e97f9d0f962617",
".git/objects/40/1b562d36cc92d0e4e8b6b6736619ee305f575c": "1260bc52b105d73e875864eb3f493635",
".git/objects/42/d1262bee5cd49599369aba79435e530f6ed8a4": "d0b9b86c0c5cc58b9d8a126637ce55f9",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/55abb86f1022c549fe476699c63e306440c9e1": "43fd3e741a8a7e8b3dd2dfdc270eb394",
".git/objects/47/183761b3c4b2b745957e4d291566cae93db692": "4c74d72f0d35e9206ce1e13cd0351bfc",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/59bdbb33cccef03cb6587edc92563c1d289dd5": "bd220e40bf0bb0d8b7e5d83e5914ae09",
".git/objects/4c/cb5049578e87033354307d4cca339a8c998e8e": "c7c56dafb230396eed2f7153ae359b7c",
".git/objects/4e/541058b95fb464e27e9a67d222a2c7541d1cdc": "916b8cd9f5c54465770caef1f2498ec2",
".git/objects/51/8ea3286e6f2fdc2566110c43c281ce33c75661": "b9f32178c370de862e1d215290bb96ee",
".git/objects/52/e93e2fa34e1f10b0ee720bfaf3ecc84be52af0": "801e1ffb06237eb0bfa8b24cba82434e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/9fe437c856c1d23bf932b8a6002930ddc55890": "17e2434ef5937eaa035d012ed53c8a7b",
".git/objects/55/df775f3e0311b1b9f7867f724a66fe3f77696a": "eb07ab9f61173eee965c26a265b059e7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/edd41175cc7b19a79a8da71ff0bd63dd8e0333": "fdd57949398a2adc353fb7795a2071f6",
".git/objects/60/20b1240cc898c72252f747a433d41476bd58d9": "13857bd38e04b6b9fdf78ca545b89244",
".git/objects/65/180aa31ca74575643fbfa0d19d715466d77f5c": "be9216f9f77c0c9c525a41d54dc5b28e",
".git/objects/65/2f49fe91c79cb2d9c462640f1f022ccbdfcc70": "75c02e3109b3624d7e2349af48510630",
".git/objects/6b/f1aebdd9c4ad324e1413cfa2abc6b2f125341f": "289161dc262690f2e0608d014726e7f6",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/78/56bdba4a3c06a111424cb63700a0f8edde4f3a": "b381243359c7fa3c29ca198727737228",
".git/objects/7d/e55001750e49720ab529fcd14a99df8babadd2": "8eca4b28abb95f5eb8d5bd3076944b5a",
".git/objects/7e/5b8453808c5050500160b74a85e3f83aa10553": "8bba7ca48ccb3714281519c8f894ef62",
".git/objects/80/a3e651ebb3d4fd6ab0613e36984966a8d92307": "927948a60c7b6f2b81d4b3343e2bbd6a",
".git/objects/81/2ce04c5fc4113fd86b001bdaf216396082c0e0": "9310c8668415fad1b0b61b52c076befb",
".git/objects/81/8c43627f57cfc7c0880f027534832d37da2bba": "f322344a121ef6c353d0c44beb3e3deb",
".git/objects/84/29d2ad8cf0a9a192fe7e8e853d179bb1ddc410": "98dd39ca2c5af5487e8e4c4bb76b4a9b",
".git/objects/85/f58950b5cd517a9fe8b7212ddf355c949886d0": "d7374aa459d7597abeaea2fcb7e9dc25",
".git/objects/87/fa9941c479869200dda1885f3afa3e8c63ef78": "780c98791c4f1d62fb65adc721552aaf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8426b9b408ad34d5f1b29ec0d7b1fed0e0aacd": "29974f0c8043ed7f846dd2e9a14624ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a1b032cb5d08efd241698ef93d694eb4c81994": "92d479fb1f129e266b6806c5e4585a7f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/e4404f80bb32fd4cd513cab116279f3b61c919": "0ef122b5230c02999f652b81efba81ed",
".git/objects/99/794b9ada2ac9bf1dedf9b92628a7fb3b160285": "1eeb5d122a52be1658532d50f7c1c244",
".git/objects/9d/bbe72490ec59605cf23849fc08569ca9569985": "7fe90d5770cd1d59ee645eafe49d4a40",
".git/objects/9f/58b18f3dbf8aab4cf65441a2cec0bc61e39dd9": "89ac34802e75c71b9299e917519728f7",
".git/objects/a1/01346ef2217cdef6f7e9cd38fb5c643983c309": "74a6139acdf076f29110d4a768f4763b",
".git/objects/a5/be171d674d436e4029cd8a40463bb4b7ebaaf7": "979d2c1318cb5a9e244fe045ddf5eca0",
".git/objects/a7/ec316af22503fb6ad27eddee636b942f577ff8": "94f229e4be54153d68f5011e3d527f4b",
".git/objects/a9/b2b63f31e774ca819923860796899c0e4f99f9": "c4c1e179be61d3be353e1632b1fe4f5c",
".git/objects/ab/d3dfe0dbbede7577d74e05ece27084c05f5f82": "55c08e9295dd61a7dc5c004be7768f4a",
".git/objects/ae/501f7949221272a96a7db4937f0bd8c884e92a": "d7272f1b24d27547d20641a8459b9bdc",
".git/objects/ae/ca6ecbc4a5297d7c123bc0ff3a44e8e7bc55cc": "856ef1e8c5893aa383dd7a061d804dfb",
".git/objects/b6/31b5c9542e99ed16c84a8ddc993f36ea82c038": "c39e25588ecf805916373eb6d024f9b4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/7518daa88adab85c73aa208856310def981496": "84e94170113e47ceb6dd6b30dfbc4bc5",
".git/objects/c5/e1a8e5f5a227b6ea9f94c879bd4c304ac42bc1": "674370e88c951fc2f2e54c3acebb8d9c",
".git/objects/ca/9efdd2a58756cec69b49b6af88d9fa5aab1a40": "b59c1ad1d189cbd8586115148d8bfbc4",
".git/objects/d0/93ad9578c76cf87a77bfc1d762d57a10a56959": "a397a4d971e131ca4258069cd712e50c",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/b4daf1315c7cee4a6d27d82d996111b3ffdc6c": "0757ed23e0267c8365392a30d6b99f53",
".git/objects/de/2c08e1a90a469ecc2718503e820900ab4f7136": "88550977f30e23633756e4d7dc4d8b87",
".git/objects/e3/9682418d1917f7c4a09cf3b0c9b2ce65b14acb": "83a8f4eba9a2db8c2a671d0d6f99aa6c",
".git/objects/e4/1f3634b3caaf15965e95c785526577ab0b613f": "9b3bb6113fdd879d576da27e61b5306b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/bac757ce155d7d084280c64900c8bbd6763d85": "9cef86ad7a7913a5d22250ff9c85bc55",
".git/objects/eb/34bff38f2573311ca243882e83416aad9cb6b8": "ba3664dc11887eec0c5b60e645882a13",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/01373c66e1f15db08254ddba05eee509a9b089": "6b7634f48186ed9e3c0731928cdfe788",
".git/objects/ee/83b41afea2d2bab506a8dfe242a6765cb619b2": "7c69a06cd22abe6e9b62245d2c3ef76a",
".git/objects/f0/09c9cf1ad894667947e86bb6201ed9fb742675": "a662dbec211157a4d07246c0f4c2b42d",
".git/objects/f8/e0d212d64ef3066ad77cedba63374c2a855ee4": "0b213c04d4bc9c0ba5983a5dfcaf72d1",
".git/objects/fd/de5edf4db4889797a42a433e6ae0a2314cbe41": "8660e6101bf26489660087006c67de21",
".git/objects/pack/pack-bd704b151ba02466d36ded89d75794568660e3b7.idx": "a1140a697a503ec3c3f12c99b2e21474",
".git/objects/pack/pack-bd704b151ba02466d36ded89d75794568660e3b7.pack": "0e52c457526c4db8c1b62a019f89f9c9",
".git/objects/pack/pack-bd704b151ba02466d36ded89d75794568660e3b7.rev": "a2a85b5efada1498a4771b20b9321c9c",
".git/refs/heads/main": "5ce3f7f072a5c0d933498b43f618c6e2",
".git/refs/remotes/origin/main": "5ce3f7f072a5c0d933498b43f618c6e2",
"assets/AssetManifest.bin": "3723c05b60e6f1013c1134723d51b903",
"assets/AssetManifest.bin.json": "e5091f63a7baa166dc142c367c22e500",
"assets/AssetManifest.json": "97574826dc57c6755afb0d33c0c6705e",
"assets/assets/images/bur12.jpg": "f4a742b03d6a73cc1e9b2b7c396014b5",
"assets/assets/images/email.png": "e80301f7f01ec12efc18e2869a267537",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/github1.png": "857e66cc18fc68e997d7dd6706793b3f",
"assets/assets/images/k.png": "2642725c42f58812554a4bd034c4bf11",
"assets/assets/images/linkedin.png": "db258b08e73a8f7bd99442aa0901c794",
"assets/assets/images/logo.png": "75a6c7e9dd9444ca7234b765dfc21065",
"assets/assets/images/medium.png": "06a9d45d45a453773f7f1a88d75fed94",
"assets/assets/images/medium1.png": "060f8ee86180717a0a3a9abec31d5db9",
"assets/assets/images/resume.png": "8d542751ce1d8d91b50cc1ccf137dfdd",
"assets/assets/images/social.png": "8bada8f5234b0fdc0cd90df42af7a943",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "da0f40a346c48371fc286c6aad8b2870",
"assets/NOTICES": "354b42e764c72828205fd512893881c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "24972083b690d340b0be733606834712",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "912a93577a915b9a4757a9eeba72e890",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "918a29c5a8cb09adf5274b14021f282b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c22ee8ad5aad10c1f44f9b913f981c2d",
"/": "c22ee8ad5aad10c1f44f9b913f981c2d",
"main.dart.js": "7e6f862d5544724f9e3c998f13c06706",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
