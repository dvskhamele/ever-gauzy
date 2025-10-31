/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 2076 ? "common" : chunkId) + "." + {"48":"130fdd31944f357a","165":"65102993d5cb407f","166":"06d898b9855324bd","170":"c3e1f446df2b47a1","236":"f1243e66aa7d040b","391":"7aba6b5740d7a47f","402":"8807fa1bd2fcc581","427":"3dc137971123880e","478":"ba0be689692c7b37","543":"6e820416257d33ad","588":"3b7f96bde7400774","600":"b668bdca175e1f7a","620":"040a3913002b7ba1","804":"210eccc1c62b263b","835":"f42e0b2da97eccb1","836":"9778254e29083639","921":"dc0eb87811e0bc6a","1078":"aa67b314a9c6b052","1094":"b7fafffc59860647","1232":"67224dd41d20150e","1297":"ee3b46a17ea04f41","1458":"de5ec65dfa04f82c","1526":"6670a5dbd665ac88","1588":"f63f1c23fcaada00","1648":"66f1d62f7ba882c5","1707":"dfdb227a84775c78","1745":"d1d624654d491dea","1750":"ed6f95e1b1b0c903","1760":"051636eee74a16e1","1928":"01bd26e0dea08f73","1938":"4f1f1d4dcba861b7","2076":"15c058bfb5bd6025","2168":"b58b66f8b2db8fba","2177":"2bedded4cb180ece","2180":"1c80294d18acdf21","2202":"00d79aba42761be2","2271":"b4f8b27065a6da63","2345":"7f58cad455d5383b","2427":"f1cfc1dd406497d9","2514":"e50a39581543393c","2665":"0a8f17a45a1ba84d","2759":"db0faf22e9214080","2780":"682548a1e6115457","2808":"eda8bba931cd2d67","2825":"d30b73298f2141aa","2888":"8dd25a1e0a423b44","3213":"69d05d0da9553232","3242":"b1c9a90b6012a6b0","3251":"6fabaa80f605c1e2","3380":"9eca2da5b9ccc2ca","3391":"699eeb06b9c6ad9a","3507":"c6b8f47d31a1bfb9","3726":"acab873bdc80c887","3734":"d50c0aac01c9c1e6","3795":"044ba4b62dd75c31","3812":"c6f3b2b86b21e07c","3829":"dd4608ff4a12f9e1","3861":"a15590d193886c44","3922":"524746747add47c9","4102":"f893c0ab6f6d3ffd","4154":"54e9ad24fb84e91f","4232":"591ec159a5314ab2","4243":"270123c784245df9","4323":"022e171a2a2e9a97","4373":"f985520e7d9f63fa","4392":"08196920fcf6d51c","4445":"db26a5032107ee51","4575":"b30cb6b0c0f15086","4729":"c4375691bc173405","4782":"16ad5bbd2642b083","4916":"cb067a0fef53663c","4946":"281619dbeab6958d","5014":"9e9484246fb748f2","5110":"e68202d9956fcf78","5118":"25e26d55306c7782","5176":"2453eaf224819759","5318":"756b29bfab0017c1","5350":"5c0fc23c4bc8e172","5379":"5dcf35ff3686cec2","5398":"e18c9ca7fc9d9e65","5433":"42022aef35555ffe","5467":"a82869018499e7f9","5558":"5b47bef80c4b58f3","5608":"065fe256a6a2a2d3","5683":"ab53bc39d6017cf8","5684":"c2c42dfc34e95a8a","5774":"66c7d620b4dad115","5916":"cf239f5b0b2bd782","6076":"a37695e3ee274ed4","6089":"3a169db543934c51","6096":"8972092b1197d044","6118":"2251c8b2913dee19","6161":"bc622f4b6ff73769","6167":"b1c0f64eef0a6837","6171":"e884738f04e2740a","6234":"14d8961ea973b19d","6235":"6bf5bae32ae4d7a4","6375":"9b8a48a961bc1de6","6382":"aa0c4cf0c57c98e3","6489":"965b7e6b18873667","6588":"7e55179dcc3ed0c1","6622":"4f7e2fe91df2e214","6747":"a0c6dced4f2e5e95","6754":"d50a283020fd6a6a","6831":"359e4315a6237511","6915":"bedb4a6654785c80","7007":"da4598630902e37d","7051":"c86bcadde755217c","7088":"92a95d2a90928112","7089":"66a53c13e047294e","7140":"24e4263596b6c085","7178":"40bcc38caf3ef801","7204":"774faf1e360720ba","7256":"7c1a12c55e3f36f1","7288":"1b51e198726fd97a","7439":"a967e4b8aa85f7ac","7460":"af1292aa7f25bd49","7478":"b94227a33e1e87c9","7483":"77494fa82c4355be","7607":"29700dabb96247a8","7622":"73986b561e4c351d","7642":"301aa2317520e08d","7793":"436b01c9c7155b01","7898":"2feb099cb6d3ec0c","8042":"878cdbee68d2d589","8116":"538b1f4403369204","8180":"bb8093f8fa8c35ff","8184":"06264f7da98da570","8235":"7164ba3f54a5554c","8264":"f889c828f9023089","8332":"338c665928d8e2af","8334":"f18c15a4e6fd6bd4","8388":"9c4e54d28d04e47d","8402":"4a964a41bc22b888","8420":"deab3eeaf4ac7dcb","8471":"e72aedbbe175b96f","8539":"26892d79b3991bf6","8626":"b34cf660bb19279f","8672":"322374e4270cd6bb","8722":"119c7ecaa0cd0654","8760":"6d764688d6384f70","8843":"a7f8cea71b124aff","8859":"5ad68d01d66f2ab9","8870":"d1a3d635ff5a9db9","8927":"dc22311c230300b0","8955":"6d5d4ed2a2985ab9","8956":"76d946ce2630009a","8984":"be6f4ab1759a897b","9084":"f808d809d9ffc675","9099":"d2c7d9b819e2eb3a","9171":"26ea3cda43d8629f","9237":"3faf34328c7a1369","9327":"f29e900d699c899c","9335":"71d7d32b587c2b12","9379":"3044a2ea4d79b43f","9467":"c13433fecce860c6","9554":"f79c889384a9b81f","9569":"542fafc2a5c21264","9664":"5257f16d55d11c80","9669":"df851426fb59bc6e","9702":"f65132459474211b","9706":"43f58ea4eaac9362","9781":"6fba9a4a387f48cf","9792":"d81d1a3fa09d782e","9812":"44c61fa882428292","9838":"2b222803d312549d","9860":"9a3c7f321e6c9d3c","9867":"8e9ea6a3269cfedb","9882":"959c05dd2697e81e","9888":"0ac31510fd9acce3","9993":"52c7858f9eda53dd"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "gauzy:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 				script.type = "module";
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = __webpack_require__.tu(url);
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			9121: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(9121 != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	
/******/ })()
;