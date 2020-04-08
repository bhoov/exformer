/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ts/main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "exBERT.html";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html":
/*!***************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./ts/api/demoAPI.ts":
/*!***************************!*\
  !*** ./ts/api/demoAPI.ts ***!
  \***************************/
/*! exports provided: DemoAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAPI", function() { return DemoAPI; });
const DemoAPI = {
    "527fdac4404bf9ba5412646ad457950d4482762c": "527fdac4404bf9ba5412646ad457950d4482762c.json",
    "59b4acc05f1d80ecbef1c23eaf2fda10222cb257": "59b4acc05f1d80ecbef1c23eaf2fda10222cb257.json",
    "354992f2ee236604c874a3a627e4042bc68586f8": "354992f2ee236604c874a3a627e4042bc68586f8.json",
    "5015e5a318605cea6808538db14d8af16887b076": "5015e5a318605cea6808538db14d8af16887b076.json",
    "3c9aa152ac894306040703c5095599b199cad1a9": "3c9aa152ac894306040703c5095599b199cad1a9.json",
    "0fece0c87203e83afd1674b5aeebaed0f5fa0562": "0fece0c87203e83afd1674b5aeebaed0f5fa0562.json",
    "d3a0e4045ea48a275ce51a6af0280406060f47cf": "d3a0e4045ea48a275ce51a6af0280406060f47cf.json",
    "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7": "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7.json",
    "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6": "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6.json",
    "6de053b3b8a4d904780c9a6545a0a63cbbb2b144": "6de053b3b8a4d904780c9a6545a0a63cbbb2b144.json",
    "f68df23365faf02f9c01439345bed66936ed85f7": "f68df23365faf02f9c01439345bed66936ed85f7.json",
    "4608cb4fc00b43fff68098e85676fad57c940f02": "4608cb4fc00b43fff68098e85676fad57c940f02.json",
    "dfcd50146da8d8122a5a57c2a3c0abce503ba94b": "dfcd50146da8d8122a5a57c2a3c0abce503ba94b.json",
    "34c8629d4265d7f3ede3add42f3613b205d94c1c": "34c8629d4265d7f3ede3add42f3613b205d94c1c.json",
    "db2dc252a786650f64395a0f5d181c0831019cbf": "db2dc252a786650f64395a0f5d181c0831019cbf.json",
    "da4597d73d444757bde9176395bf31aad3334131": "da4597d73d444757bde9176395bf31aad3334131.json",
    "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0": "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0.json",
    "bc419238c20dd1c5cfe1cc427ab3d1e31353436a": "bc419238c20dd1c5cfe1cc427ab3d1e31353436a.json",
    "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787": "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787.json",
    "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3": "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3.json",
    "c185a9349ba5a325acf8514e9b50de71280488aa": "c185a9349ba5a325acf8514e9b50de71280488aa.json",
    "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6": "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6.json",
    "f63e14e935d98948b4a0ebc9663400dbe4263348": "f63e14e935d98948b4a0ebc9663400dbe4263348.json",
    "79b964d1a5c854deaeace26813f96994bb82aef2": "79b964d1a5c854deaeace26813f96994bb82aef2.json",
    "3b1168ec96af00c4e887341e92a878f8752e1d17": "3b1168ec96af00c4e887341e92a878f8752e1d17.json",
    "8c462bc298e3183efa8d9e863e25ea5d89806b03": "8c462bc298e3183efa8d9e863e25ea5d89806b03.json",
    "9939698edaa25bbae9ee1d27864e698f13963f06": "9939698edaa25bbae9ee1d27864e698f13963f06.json",
    "73f1ee497b3e7b6394e55726b18dbf9d514dcea6": "73f1ee497b3e7b6394e55726b18dbf9d514dcea6.json",
    "c7cdb80bf813e1de241260aede6cd28ea65ccfae": "c7cdb80bf813e1de241260aede6cd28ea65ccfae.json",
    "a96fed16eab1bf6d08e4001c02894d9c549df627": "a96fed16eab1bf6d08e4001c02894d9c549df627.json",
    "a8eaf10da8dc75b42e72bdc7091776247fff9657": "a8eaf10da8dc75b42e72bdc7091776247fff9657.json",
    "a8194f2309e1c71e977ef8d3be572ae00b0e91f2": "a8194f2309e1c71e977ef8d3be572ae00b0e91f2.json",
    "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa": "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa.json",
    "06095cef4a7f49b18f153e67e33fddb831a15b46": "06095cef4a7f49b18f153e67e33fddb831a15b46.json",
    "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5": "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5.json",
    "f8c40c67c851a0489f7480c99b31b4f606c0184b": "f8c40c67c851a0489f7480c99b31b4f606c0184b.json",
    "e4e71f6ea57be2e05d62af0825a80f144421e02d": "e4e71f6ea57be2e05d62af0825a80f144421e02d.json",
    "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c": "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c.json",
    "4aa4eb10ead44a0a3c2dd95407017a928138b32b": "4aa4eb10ead44a0a3c2dd95407017a928138b32b.json",
    "da31d55ee8cb01bcdb29572cb902b8e799685be2": "da31d55ee8cb01bcdb29572cb902b8e799685be2.json",
    "e427181fb02bbf19f7bbb65c9d9389d2d9a41812": "e427181fb02bbf19f7bbb65c9d9389d2d9a41812.json",
    "bbcab9e1ca60a851fd7ecfda80de470afa740936": "bbcab9e1ca60a851fd7ecfda80de470afa740936.json",
    "4de96aa205076863c9fb4ea99e2ba86fa131ff76": "4de96aa205076863c9fb4ea99e2ba86fa131ff76.json",
    "e4c6d1b3004e3cdd0c879a59639b5ce993207a99": "e4c6d1b3004e3cdd0c879a59639b5ce993207a99.json",
    "fbc9da79b8bf39dc9998408526741f811a13e6aa": "fbc9da79b8bf39dc9998408526741f811a13e6aa.json",
    "528554ee4e615c61287c40ed9a2aea69b91af6c9": "528554ee4e615c61287c40ed9a2aea69b91af6c9.json",
    "5e7073c03c37d19826b2fb4a6599ccaedde492e4": "5e7073c03c37d19826b2fb4a6599ccaedde492e4.json",
    "71c4a886cdee58a371ae2115311b150e84e555f6": "71c4a886cdee58a371ae2115311b150e84e555f6.json",
    "4bce0970a465fe9b96305e06af19c5d9c97d7cc3": "4bce0970a465fe9b96305e06af19c5d9c97d7cc3.json",
    "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7": "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7.json",
    "174c6f786d139ce111381045d60d25682a168b99": "174c6f786d139ce111381045d60d25682a168b99.json",
    "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4": "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4.json",
    "f6949c28752de35a870efde308585acd46a25278": "f6949c28752de35a870efde308585acd46a25278.json",
    "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a": "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a.json",
    "2b81a8f602251cf40b4682c8cedb3966b912d7c6": "2b81a8f602251cf40b4682c8cedb3966b912d7c6.json",
    "8f94e843d2510047fd1af46f249afe87ff49cc2f": "8f94e843d2510047fd1af46f249afe87ff49cc2f.json",
    "4e3ddb51550c03c64fdbe5592526665100d32930": "4e3ddb51550c03c64fdbe5592526665100d32930.json",
    "f816b23af9aa4312c80e668a66a156c934cb330c": "f816b23af9aa4312c80e668a66a156c934cb330c.json",
    "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d": "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d.json",
    "5c71496726395aaa4d0a65373fd1651b5a0e6b1f": "5c71496726395aaa4d0a65373fd1651b5a0e6b1f.json",
};


/***/ }),

/***/ "./ts/api/mainApi.ts":
/*!***************************!*\
  !*** ./ts/api/mainApi.ts ***!
  \***************************/
/*! exports provided: emptyTokenDisplay, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyTokenDisplay", function() { return emptyTokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _demoAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoAPI */ "./ts/api/demoAPI.ts");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etc/apiHelpers */ "./ts/etc/apiHelpers.ts");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etc/URLHandler */ "./ts/etc/URLHandler.ts");







const emptyTokenDisplay = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__["TokenDisplay"]();
const baseurl = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__["URLHandler"].basicURL();
/**
 * A rewrite of `d3-fetch`'s `d3.json` callback. If an api call fails, make a backup call to specified url and payload, if specified.
 *
 * @param response Object expected at time of callback
 * @param backupUrl Backup url in the event of fail
 * @param backupPayload Backup payload if making a post request
 */
function responseJson(response, backupUrl = null, backupPayload = null) {
    if (!response.ok) {
        if (backupUrl != null) {
            console.log("STATIC FILE NOT FOUND");
            return fetch(backupUrl, backupPayload).then(responseJson);
        }
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
}
/**
 * Check first if the information being sent exists in a static demo file. If it does, send that. Otherwise, make a normal call to the server.
 *
 * @param toSend The packet of information to send to an API endpoint
 * @param backupUrl Backup url in the event that the demo file is not found
 * @param backupPayload Backup payload if demo file not found, for POST requests only
 */
function checkDemoAPI(toSend, backupUrl = null, backupPayload = null) {
    const hsh = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
    console.log("CHECKING DEMOAPI: " + hsh);
    if (_demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"].hasOwnProperty(hsh)) {
        // Relies on a symbolic link being present in the dist folder to the demo folder
        const path = './demo/' + _demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"][hsh];
        console.log("TRYING TO SENDING STATIC: ", path);
        const follow = (response) => responseJson(response, backupUrl, backupPayload);
        return fetch(path).then(follow);
    }
    return d3__WEBPACK_IMPORTED_MODULE_0__["json"](backupUrl, backupPayload);
}
class API {
    constructor(baseURL = null) {
        this.baseURL = baseURL;
        if (this.baseURL == null) {
            this.baseURL = baseurl + '/api';
        }
    }
    getModelDetails(model, hashObj = null) {
        const toSend = {
            model: model
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/get-model-details", toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getMetaAttentions(model, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
            sentence: sentence,
            layer: layer
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/attend-with-meta", toSend);
        console.log("--- GET " + url);
        // Add hash and value to hashObj
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    /**
     * Update the display based on the information that was already parsed from the passed sentence.
     *
     * @param a The displayed tokens in the columns
     * @param sentenceA The original sentence that led to the tokenized information in `a`
     * @param layer Which layer to search at
     * @param hashObj If not null, store the information of the responses into the passed object. Used for creating demos.
     */
    updateMaskedAttentions(model, tokens, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
            tokens: ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('text'), tokens.tokenData),
            sentence: sentence,
            // Empty masks need to be sent as a number, unfortunately. Choosing -1 for this
            mask: tokens.maskInds.length ? tokens.maskInds : [-1],
            layer: layer,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/update-mask');
        const payload = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["toPayload"])(toSend);
        if (hashObj != null) {
            // Add hash and value to hashObj for demo purposes
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url, payload).then(r => {
                hashObj[key] = r;
            });
        }
        console.log("--- POST " + url, payload);
        return checkDemoAPI(toSend, url, payload);
    }
}
;


/***/ }),

/***/ "./ts/data/AttentionCapsule.ts":
/*!*************************************!*\
  !*** ./ts/data/AttentionCapsule.ts ***!
  \*************************************/
/*! exports provided: makeFromMetaResponse, AttentionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFromMetaResponse", function() { return makeFromMetaResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionWrapper", function() { return AttentionWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");



/**
 * Notes:
 *
 * - Also encapsulate the CLS/SEP info vs. no CLS/SEP info
 * - When layer format changes from list, drop the index into conf.layer
 */
const bpeTokens = ["[CLS]", "[SEP]", "<s>", "</s>", "<|endoftext|>"];
const findBadIndexes = (x) => _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](x.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
function makeFromMetaResponse(r, isZeroed) {
    const key = 'aa'; // Change this if backend response changes to be simpler
    const currPair = r[key];
    const left = currPair.left;
    const right = currPair.right;
    const leftZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](left.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    const rightZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](right.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    return new AttentionWrapper(currPair.att, [leftZero, rightZero], isZeroed);
}
class AttentionWrapper {
    constructor(att, badToks = [[], []], isZeroed = true) {
        this.init(att, badToks, isZeroed);
    }
    init(att, badToks = [[], []], isZeroed) {
        this.isZeroed = isZeroed;
        this._att = att;
        this._zeroedAttTensor = zeroRowCol(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att), badToks[0], badToks[1]);
        this._attTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att); // If I put this first, buffer modifications change this too.
        this.badToks = badToks;
    }
    updateFromNormal(r, isZeroed) {
        const key = 'aa'; // Change this if backend response changes to be simpler
        const currPair = r[key];
        const left = currPair.left;
        const right = currPair.right;
        const leftZero = findBadIndexes(left);
        const rightZero = findBadIndexes(right);
        this.init(currPair.att, [leftZero, rightZero], isZeroed);
    }
    get attTensor() {
        const tens = this.isZeroed ? this._zeroedAttTensor : this._attTensor;
        return tens;
    }
    get att() {
        return this.attTensor.arraySync();
    }
    zeroed(val) {
        if (val == null)
            return this.isZeroed;
        this.isZeroed = val;
        return this;
    }
    toggleZeroing() {
        this.zeroed(!this.zeroed());
    }
    _byHeads(heads) {
        if (heads.length == 0) {
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["zerosLike"](this._byHead(0));
        }
        return this.attTensor.gather(heads, 0).sum(0);
    }
    _byHead(head) {
        return this.attTensor.gather([head], 0).squeeze([0]);
    }
    byHeads(heads) {
        return this._byHeads(heads).arraySync();
    }
    byHead(head) {
        return this._byHead(head).arraySync();
    }
}
function zeroRowCol(tens, rows, cols) {
    let outTens = tens.clone();
    let atb = outTens.bufferSync();
    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[0]).forEach((head) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
            // Set rows to 0
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](rows, i)) {
                lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                    atb.set(0, head, i, j);
                });
            }
            // Set cols to 0
            lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](cols, j))
                    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
                        atb.set(0, head, i, j);
                    });
            });
        });
    });
    return outTens;
}


/***/ }),

/***/ "./ts/data/TokenWrapper.ts":
/*!*********************************!*\
  !*** ./ts/data/TokenWrapper.ts ***!
  \*********************************/
/*! exports provided: TokenDisplay, TokenWrapper, sideToLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDisplay", function() { return TokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenWrapper", function() { return TokenWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideToLetter", function() { return sideToLetter; });
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



/**
 * The original tokens, and the indexes that need to be masked
 */
const emptyFullResponse = [{
        text: '[SEP]',
        topk_words: [],
        topk_probs: []
    }];
class TokenDisplay {
    constructor(tokens = emptyFullResponse, maskInds = []) {
        this.tokenData = tokens;
        this.maskInds = maskInds;
    }
    /**
     * Push idx to the mask idx list in order from smallest to largest
     */
    mask(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            _etc_Tools__WEBPACK_IMPORTED_MODULE_0__["orderedInsert_"](this.maskInds, val);
        }
        else {
            console.log(`${val} already in maskInds!`);
            console.log(this.maskInds);
        }
    }
    toggle(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            console.log(`Masking ${val}`);
            this.mask(val);
        }
        else {
            console.log(`Unmasking ${val}`);
            this.unmask(val);
        }
    }
    unmask(val) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["pull"](this.maskInds, val);
    }
    resetMask() {
        this.maskInds = [];
    }
    length() {
        return this.tokenData.length;
    }
    concat(other) {
        const newTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.tokenData, other.tokenData);
        const newMask = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.maskInds, other.maskInds.map(x => x + this.length()));
        return new TokenDisplay(newTokens, newMask);
    }
}
class TokenWrapper {
    constructor(r) {
        this.updateFromResponse(r);
    }
    updateFromResponse(r) {
        const tokensA = r.aa.left;
        this.updateFromComponents(tokensA, []);
    }
    updateFromComponents(a, maskA) {
        this.a = new TokenDisplay(a, maskA);
    }
    updateTokens(r) {
        const desiredKeys = ['contexts', 'embeddings', 'topk_probs', 'topk_words'];
        const newTokens = r.aa.left.map(v => ramda__WEBPACK_IMPORTED_MODULE_2__["pick"](desiredKeys, v));
        const pairs = ramda__WEBPACK_IMPORTED_MODULE_2__["zip"](this.a.tokenData, newTokens);
        pairs.forEach((d, i) => {
            Object.keys(d[1]).map(k => {
                d[0][k] = d[1][k];
            });
        });
    }
    /**
     * Mask the appropriate sentence at the index indicated
     */
    mask(sID, idx) {
        this[sID].mask(idx);
        const opts = ["a", "b"];
        const Na = this.a.length();
    }
}
function sideToLetter(side, atype) {
    // const atype = conf.attType;
    if (atype == "all") {
        return "all";
    }
    const out = side == "left" ? atype[0] : atype[1]; // No type checking?
    return out;
}


/***/ }),

/***/ "./ts/etc/SVGplus.ts":
/*!***************************!*\
  !*** ./ts/etc/SVGplus.ts ***!
  \***************************/
/*! exports provided: SVG, SVGMeasurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMeasurements", function() { return SVGMeasurements; });
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");

/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SVG {
    static translate({ x, y }) {
        return "translate(" + x + "," + y + ")";
    }
    static rotate(deg) {
        return `rotate(${deg})`;
    }
    static group(parent, classes, pos = { x: 0, y: 0 }) {
        return parent.append('g').attrs({
            class: classes,
            "transform": SVG.translate(pos)
        });
    }
}
class SVGMeasurements {
    constructor(baseElement, classes = '') {
        this.measureElement = baseElement.append('text')
            .attrs({ x: 0, y: -20, class: classes });
    }
    textLength(text, style = null) {
        this.measureElement.attr('style', style);
        this.measureElement.text(text);
        const tl = this.measureElement.node().getComputedTextLength();
        this.measureElement.text('');
        return tl;
    }
}


/***/ }),

/***/ "./ts/etc/SimpleEventHandler.ts":
/*!**************************************!*\
  !*** ./ts/etc/SimpleEventHandler.ts ***!
  \**************************************/
/*! exports provided: SimpleEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventHandler", function() { return SimpleEventHandler; });
/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SimpleEventHandler {
    constructor(element) {
        this.element = element;
        this.eventListeners = [];
    }
    bind(eventNames, eventFunction) {
        for (const eventName of eventNames.split(' ')) {
            this.eventListeners.push({ eventName, eventFunction });
            const eventFunctionWrap = e => eventFunction(e.detail, e);
            this.element.addEventListener(eventName, eventFunctionWrap, false);
        }
    }
    getListeners() {
        return this.eventListeners;
    }
    trigger(eventName, detail) {
        this.element.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}


/***/ }),

/***/ "./ts/etc/URLHandler.ts":
/*!******************************!*\
  !*** ./ts/etc/URLHandler.ts ***!
  \******************************/
/*! exports provided: URLHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHandler", function() { return URLHandler; });
/**
 * Created by hen on 5/15/17.
 */
class URLHandler {
    static basicURL() {
        const url_path = window.location.pathname.split('/').slice(0, -2).join('/');
        return window.location.origin + (url_path.length ? url_path : '');
    }
    /**
     * Read all URL parameters into a map.
     * @returns {Map} the url parameters as a key-value store (ES6 map)
     */
    static get parameters() {
        // Adapted from:  http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        console.log(vars, "--- vars");
        const urlParameters = {};
        const isInt = x => (/^[0-9]+$/).test(x);
        const isFloat = x => (/^[0-9]+\.[0-9]*$/).test(x);
        const typeCast = val => {
            if (isInt(val)) {
                return Number.parseInt(val, 10);
            }
            else if (isFloat(val)) {
                return Number.parseFloat(val);
            }
            // else:
            return val;
        };
        vars.forEach(v => {
            if (v.length > 0) {
                const splits = v.split('=');
                const key = decodeURIComponent(splits[0]);
                let raw_value = decodeURIComponent(splits[1]);
                const isArray = raw_value.startsWith('..');
                if (isArray) {
                    raw_value = raw_value.slice(2);
                }
                if (raw_value.length < 1) {
                    urlParameters[key] = isArray ? [] : '';
                }
                else if (isArray) {
                    urlParameters[key] = raw_value.split(',')
                        .map(val => typeCast(val));
                }
                else {
                    urlParameters[key] = typeCast(raw_value);
                }
            }
        });
        return urlParameters;
    }
    /**
     * Generates an URL string from a map of url parameters
     * @param {{}} urlParameters - the map of parameters
     * @returns {string} - an URI string
     */
    static urlString(urlParameters) {
        const attr = [];
        Object.keys(urlParameters).forEach(k => {
            const v = urlParameters[k];
            if (v !== undefined) {
                let value = v;
                if (Array.isArray(v))
                    value = '..' + v.join(',');
                attr.push(encodeURI(k + '=' + value));
            }
        });
        const url = window.location.pathname;
        let res = url.substring(url.lastIndexOf('/') + 1);
        if (attr.length > 0) {
            res += '?' + attr.join('&');
        }
        return res;
    }
    static updateURLParam(key, value, addToBrowserHistory = true) {
        const currentParams = URLHandler.parameters;
        currentParams[key] = value;
        URLHandler.updateUrl(currentParams, addToBrowserHistory);
    }
    // /**
    //  * Generates a key-value map of all URL params and replaces replaceKeys
    //  * @param updateKeys
    //  */
    // static updateURLParams(updateKeys) {
    //     const currentParams = URLHandler.parameters;
    //     Object.keys(updateKeys).forEach((k) => currentParams[k] = updateKeys[k])
    //     return currentParams;
    // }
    static updateUrl(urlParameters, addToBrowserHistory = true) {
        if (addToBrowserHistory) {
            window.history.pushState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
        else {
            window.history.replaceState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
    }
}


/***/ }),

/***/ "./ts/etc/Util.ts":
/*!************************!*\
  !*** ./ts/etc/Util.ts ***!
  \************************/
/*! exports provided: Util, Sel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sel", function() { return Sel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

/**
 * Created by hen on 5/15/17.
 * Modifyed by hoo on 4/16/19.
 */
let the_unique_id_counter = 0;
class Util {
    static simpleUId({ prefix = '' }) {
        the_unique_id_counter += 1;
        return prefix + the_unique_id_counter;
    }
}
/**
 * Selection utility functions should be static methods in the below class
 */
class Sel {
}
Sel.setSelVisible = (x) => x.attr("visibility", "visible");
Sel.setSelHidden = (x) => x.attr("visibility", "hidden");
Sel.setVisible = (x) => Sel.setSelVisible(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));
Sel.setHidden = (x) => Sel.setSelHidden(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));
Sel.hideElement = (hE) => hE.transition().styles({
    'opacity': 0,
    'pointer-events': 'none',
    'display': 'none'
});
Sel.unhideElement = (hE) => hE.transition().styles({
    'opacity': 1,
    'pointer-events': null,
    'display': null
});


/***/ }),

/***/ "./ts/etc/_Tools.ts":
/*!**************************!*\
  !*** ./ts/etc/_Tools.ts ***!
  \**************************/
/*! exports provided: findAllIndexes, insertAt_, orderedInsert_, set2SortedArray, makeRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllIndexes", function() { return findAllIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAt_", function() { return insertAt_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderedInsert_", function() { return orderedInsert_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set2SortedArray", function() { return set2SortedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRandom", function() { return makeRandom; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function ascOrder(n1, n2) {
    if (n1 < n2) {
        return -1;
    }
    else if (n1 > n2) {
        return 1;
    }
    return 0;
}

/**
 * Find all indexes that match a particular predicate
 */
function findAllIndexes(array, predicate) {
    let fromIndex = 0;
    let results = [];
    let i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, fromIndex);
    while (i != -1) {
        results.push(i);
        i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, i + 1);
    }
    return results;
}
;
function insertAt_(array, val, ind) {
    array.splice(ind, 0, val);
    return array;
}
/**
 * Convert a set to an ordered array
 */
function set2SortedArray(input) {
    return Array.from(input).sort(ascOrder);
}
/**
 * Insert a value into array in sorted order IN PLACE
 *
 * WARNING: Only handles numbers, sorted from least to greatest
 * - Assumes already sorted array
 */
function orderedInsert_(array, val, coldstart = false) {
    // Resort array if desired
    if (coldstart) {
        array.sort(ascOrder);
    }
    const ind = lodash__WEBPACK_IMPORTED_MODULE_0__["sortedIndex"](array, val);
    return insertAt_(array, val, ind);
}
function makeRandom(len) {
    const a = new Array(len).fill(0);
    return a.map((x) => { return lodash__WEBPACK_IMPORTED_MODULE_0__["random"](-5, 5, true); });
}


/***/ }),

/***/ "./ts/etc/apiHelpers.ts":
/*!******************************!*\
  !*** ./ts/etc/apiHelpers.ts ***!
  \******************************/
/*! exports provided: makeUrl, toPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
/**
 * Convert a JS object into GET URL parameters
 *
 * @param base Base URL atop which to add GET parameters
 * @param params Object to insert into a URL string
 */
function makeUrl(base, params) {
    if (params) {
        let out = base + "?";
        Object.keys(params).forEach(k => {
            out += k;
            out += '=';
            out += params[k];
            out += "&";
        });
        return out.replace(/&$/g, "");
    }
    else {
        return base;
    }
}
;
/**
 * Convert information in GET request into the message for a POST request
 */
const toPayload = (toSend) => {
    return {
        method: "POST",
        body: JSON.stringify(toSend),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
};


/***/ }),

/***/ "./ts/etc/arrayUtils.ts":
/*!******************************!*\
  !*** ./ts/etc/arrayUtils.ts ***!
  \******************************/
/*! exports provided: sortWithIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWithIndices", function() { return sortWithIndices; });
/**
 * Copies and sorts an array while keeping track of the indices. Currently only supports sorting max -> min.
 *
 * @param arr - Array to be copied and sorted
 */
function sortWithIndices(arr, fn) {
    // If fn is not provided, default to sorting by max value
    if (!fn) {
        fn = function (left, right) {
            return left[0] > right[0] ? -1 : 1;
        };
    }
    let out = {
        arr: [],
        sortIndices: []
    };
    let idxTracker = [];
    for (let i = 0; i < arr.length; i++) {
        idxTracker[i] = [arr[i], i];
    }
    idxTracker.sort(function (left, right) {
        return left[0] > right[0] ? -1 : 1;
    });
    for (var j = 0; j < arr.length; j++) {
        out.sortIndices.push(idxTracker[j][1]);
        out.arr[j] = idxTracker[j][0];
    }
    return out;
}


/***/ }),

/***/ "./ts/etc/types.ts":
/*!*************************!*\
  !*** ./ts/etc/types.ts ***!
  \*************************/
/*! exports provided: Toggled, NormBy, ModelKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggled", function() { return Toggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormBy", function() { return NormBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return ModelKind; });
var Toggled;
(function (Toggled) {
    Toggled[Toggled["ADDED"] = 0] = "ADDED";
    Toggled[Toggled["REMOVED"] = 1] = "REMOVED";
})(Toggled || (Toggled = {}));
var NormBy;
(function (NormBy) {
    NormBy[NormBy["ROW"] = 0] = "ROW";
    NormBy[NormBy["COL"] = 1] = "COL";
    NormBy[NormBy["ALL"] = 2] = "ALL";
})(NormBy || (NormBy = {}));
var ModelKind;
(function (ModelKind) {
    ModelKind["Bidirectional"] = "bidirectional";
    ModelKind["Autoregressive"] = "autoregressive";
})(ModelKind || (ModelKind = {}));


/***/ }),

/***/ "./ts/etc/xd3.ts":
/*!***********************!*\
  !*** ./ts/etc/xd3.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.clear = function () {
    this.selectAll('*').remove();
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggleClass = function (className) {
    this.classed(className, !this.classed(className));
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.show = function () {
    this.style('display', 'initial');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.hide = function () {
    this.style('display', 'none');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggle = function () {
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.after = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this.nextSibling);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.before = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};


/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_attentionVis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis/attentionVis */ "./ts/vis/attentionVis.ts");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-loader?name=exBERT.html!../exBERT.html */ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-loader?name=index.html!../index.html */ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html");
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_3__);




window.onload = () => {
    const base = document.getElementById('attention-vis');
    //@ts-ignore
    const mainVis = new _vis_attentionVis__WEBPACK_IMPORTED_MODULE_0__["MainGraphic"](base);
    console.log("Done loading window");
};


/***/ }),

/***/ "./ts/uiConfig.ts":
/*!************************!*\
  !*** ./ts/uiConfig.ts ***!
  \************************/
/*! exports provided: UIConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfig", function() { return UIConfig; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./etc/URLHandler */ "./ts/etc/URLHandler.ts");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hjson */ "./node_modules/hjson/lib/hjson.js");
/* harmony import */ var hjson__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hjson__WEBPACK_IMPORTED_MODULE_6__);







const falsey = val => (new Set(['false', 0, "no", false, null, ""])).has(val);
const truthy = val => !falsey(val);
const toNumber = x => +x;
class UIConfig {
    constructor() {
        this._conf = {};
        this._nHeads = 12;
        this._nLayers = null;
        this.attType = 'aa';
        this.fromURL();
        this.toURL(false);
        const self = this;
        d3__WEBPACK_IMPORTED_MODULE_0__["text"]("conf/supportedModels.hjson").then(txt => {
            console.log(txt);
            const out = hjson__WEBPACK_IMPORTED_MODULE_6__["parse"](txt);
            console.log("Config HJSON: ", out);
            self.supportedModels = out.models;
            return out.models;
        });
    }
    toURL(updateHistory = false) {
        _etc_URLHandler__WEBPACK_IMPORTED_MODULE_5__["URLHandler"].updateUrl(this._conf, updateHistory);
    }
    fromURL() {
        const params = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_5__["URLHandler"].parameters;
        this._conf = {
            model: params['model'] || 'bert-base-cased',
            modelKind: params['modelKind'] || _etc_types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].Bidirectional,
            sentence: params['sentence'] || "The girl ran to a local pub to escape the din of her city.",
            layer: params['layer'] || 0,
            heads: this._initHeads(params['heads']),
            threshold: params['threshold'] || 0.7,
            tokenInd: params['tokenInd'] || null,
            tokenSide: params['tokenSide'] || null,
            maskInds: params['maskInds'] || [9],
            hideClsSep: truthy(params['hideClsSep']) || true,
        };
        this._token = { side: this._conf.tokenSide, ind: this._conf.tokenInd };
    }
    _initHeads(v) {
        if (v == null || v.length < 1) {
            this.selectAllHeads();
        }
        else {
            console.log(this.headSet(new Set(v))._conf.heads);
        }
        return this.heads();
    }
    nHeads(val) {
        if (val == null)
            return this._nHeads;
        this._nHeads = val;
        return this;
    }
    nLayers(val) {
        if (val == null)
            return this._nLayers;
        this._nLayers = val;
        return this;
    }
    toggleSelectAllHeads() {
        if (this.heads().length == 0) {
            this.selectAllHeads();
        }
        else {
            this.selectNoHeads();
        }
    }
    selectAllHeads() {
        this.headSet(new Set(lodash__WEBPACK_IMPORTED_MODULE_3__["range"](0, this._nHeads)));
    }
    selectNoHeads() {
        this.headSet(new Set([]));
    }
    toggleHead(head) {
        let out;
        if (this.headSet().has(head)) {
            this.headSet().delete(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_1__["Toggled"].REMOVED;
        }
        else {
            this.headSet().add(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_1__["Toggled"].ADDED;
        }
        // Set through setter function to ensure url is updated
        this.headSet(this.headSet()); // I hate mutable datastructures... This is confusing.
        return out;
    }
    toggleToken(e) {
        const picker = ramda__WEBPACK_IMPORTED_MODULE_4__["pick"](['ind', 'side']);
        const compareEvent = picker(e);
        const compareToken = picker(this.token());
        if (ramda__WEBPACK_IMPORTED_MODULE_4__["equals"](compareToken, compareEvent)) {
            this.rmToken();
        }
        else {
            this.token(e);
        }
        return this;
    }
    token(val) {
        if (val == null)
            return this._token;
        this._token = val;
        this._conf.tokenInd = val.ind;
        this._conf.tokenSide = val.side;
        this.toURL();
        return this;
    }
    hasToken() {
        const conf = this._conf;
        const actuallyNull = ((conf.tokenInd == null) && (conf.tokenSide == null));
        const strNull = (conf.tokenInd == "null");
        return (!actuallyNull) && (!strNull);
    }
    rmToken() {
        this.token({ ind: null, side: null });
        return this;
    }
    sentence(val) {
        if (val == null)
            return this._conf.sentence;
        this._conf.sentence = val;
        this.toURL(true);
        return this;
    }
    threshold(val) {
        if (val == null)
            return this._conf.threshold;
        this._conf.threshold = val;
        this.toURL();
        return this;
    }
    heads() {
        return this._conf.heads;
    }
    layer(val) {
        if (val == null)
            return this._conf.layer;
        this._conf.layer = val;
        this.toURL();
        return this;
    }
    headSet(val) {
        if (val == null) {
            return this._headSet;
        }
        this._headSet = val;
        this._conf.heads = _etc_Tools__WEBPACK_IMPORTED_MODULE_2__["set2SortedArray"](this._headSet);
        this.toURL();
        return this;
    }
    maskInds(val) {
        if (val == null)
            return this._conf.maskInds;
        this._conf.maskInds = val;
        this.toURL();
        return this;
    }
    hideClsSep(val) {
        if (val == null)
            return this._conf.hideClsSep;
        this._conf.hideClsSep = truthy(val);
        this.toURL();
        return this;
    }
    model(val) {
        if (val == null)
            return this._conf.model;
        this._conf.model = val;
        this.toURL();
        return this;
    }
    modelKind(val) {
        if (val == null)
            return this._conf.modelKind;
        this._conf.modelKind = val;
        this.toURL();
        return this;
    }
    /**
     * Return the offset needed for the modelKind in the configuration
     */
    get offset() {
        switch (this.modelKind()) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].Bidirectional: {
                return 0;
            }
            case _etc_types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].Autoregressive: {
                return 0;
            }
            default: {
                return 0;
            }
        }
    }
    get showNext() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].Autoregressive ? true : false;
    }
    get matchHistogramDescription() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_1__["ModelKind"].Autoregressive ? "Next" : "Matched";
    }
}


/***/ }),

/***/ "./ts/vis/AttentionConnector.ts":
/*!**************************************!*\
  !*** ./ts/vis/AttentionConnector.ts ***!
  \**************************************/
/*! exports provided: scaleLinearWidth, AttentionGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinearWidth", function() { return scaleLinearWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionGraph", function() { return AttentionGraph; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeConnector */ "./ts/vis/EdgeConnector.ts");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");





const scaleLinearWidth = opacity => 5 * opacity ^ 0.33;
class AttentionGraph extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        // OPTIONS WITH DEFAULTS
        this._threshold = 0.7; // Accumulation threshold. Between 0-1
        this.options = {
            boxheight: 26,
            height: 500,
            width: 200,
            offset: 0,
        };
        /**
         * Scale the opacity according to the values of the data, from 0 to max of contained data
         * Normalize by each source target, or across the whole
         */
        this.createScales = () => {
            this.opacityScales = [];
            let arr = [];
            // Group normalization
            switch (this.normBy) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].ROW:
                    arr = this.edgeData.extent(1);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].COL:
                    arr = this.edgeData.extent(0);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].ALL:
                    const maxIn = d3__WEBPACK_IMPORTED_MODULE_0__["max"](this.plotData.map((d) => d.v));
                    for (let i = 0; i < this._data.length; i++) {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, maxIn])
                            .range([0, 1]));
                    }
                    break;
                default:
                    console.log("Nor norming specified");
                    break;
            }
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.svg = this.parent;
        this.graph = this.svg.selectAll(`.atn-curve`);
        this.linkGen = d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]()
            .x(d => d[0])
            .y(d => d[1]);
    }
    // Define whether to use the 'j' or 'i' attribute to calculate opacities
    scaleIdx() {
        switch (this.normBy) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].COL:
                return 'j';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].ROW:
                return 'i';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].ALL:
                return 'i';
        }
    }
    /**
     * Create connections between locations of the SVG using D3's linkGen
     */
    createConnections() {
        const self = this;
        const op = this.options;
        if (this.paths) {
            this.paths.attrs({
                'd': (d, i) => {
                    const data = {
                        source: [0, op.boxheight * (d.i + 0.5 + op.offset)],
                        target: [op.width, op.boxheight * (d.j + 0.5)] // + 2 allows small offset
                    };
                    return this.linkGen(data);
                },
                'class': 'atn-curve'
            })
                .attr("src-idx", (d, i) => d.i)
                .attr("target-idx", (d, i) => d.j);
        }
    }
    /**
     * Change the height of the SVG
     */
    updateHeight() {
        const op = this.options;
        if (this.svg != null) {
            this.svg.attr("height", this.options.height + (op.offset * this.options.boxheight));
        }
        return this;
    }
    /**
     * Change the width of the SVG
     */
    updateWidth() {
        if (this.svg != null) {
            this.svg.attr("width", this.options.width);
        }
        return this;
    }
    /**
     * Change the Opacity of the lines according to the value of the data
     */
    updateOpacity() {
        const self = this;
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return val;
            });
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return scaleLinearWidth(val); //5 * val^0.33;
            });
        }
        return this;
    }
    /**
     * Rerender the graph in the event that the data changes
     */
    updateData() {
        if (this.graph != null) {
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](".atn-curve").remove();
            const data = this.plotData;
            this.paths = this.graph
                .data(data)
                .join('path');
            this.createConnections();
            this.updateOpacity();
            return this;
        }
    }
    data(value) {
        if (value == null) {
            return this._data;
        }
        this._data = value;
        this.edgeData = new _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__["EdgeData"](value);
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    height(value) {
        if (value == null) {
            return this.options.height;
        }
        this.options.height = value;
        this.updateHeight();
        return this;
    }
    width(value) {
        if (value == null) {
            return this.options.width;
        }
        this.options.width = value;
        this.updateWidth();
        return this;
    }
    threshold(value) {
        if (value == null) {
            return this._threshold;
        }
        this._threshold = value;
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    _wrangle(data) {
        return data;
    }
    _render(data) {
        this.svg.html('');
        this.updateHeight();
        this.updateWidth();
        this.updateData();
        return this;
    }
}
AttentionGraph.events = {}; // No events needed for this one


/***/ }),

/***/ "./ts/vis/AttentionHeadBox.ts":
/*!************************************!*\
  !*** ./ts/vis/AttentionHeadBox.ts ***!
  \************************************/
/*! exports provided: getAttentionInfo, AttentionHeadBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttentionInfo", function() { return getAttentionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionHeadBox", function() { return AttentionHeadBox; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _DivHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DivHover */ "./ts/vis/DivHover.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");





/**
 * From an attention matrix selected by layer, show a summary of the attentions belonging to each head.
 *
 * @param headMat The matrix representing all the attentions by head (layer already selected) <head, from, to>
 * @param headList The heads that are selected
 * @param side Is this the right or the left display?
 * @param tokenInd If not null, select just the information from a single token across heads
 * @returns Information needed to label the headbox
 */
function getAttentionInfo(headMat, headList, side = "left", token = null) {
    // Collect only from headlist, average each head, transpose to ease iteration
    if (headList.length == 0) {
        return {
            rows: [[]],
            labels: [],
            max: 0,
        };
    }
    let dim = null;
    // Only change the attention graph opposite selected token
    if (token != null && (token.side != side)) {
        dim = token.side == "left" ? -2 : -1; // Assign to "from" direction if "left" 
    }
    let axis = side == "left" ? 2 : 1;
    // average across the axis representing the attentions.
    let gatheredMat = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_4__["tensor3d"](headMat);
    if (dim != null) {
        gatheredMat = gatheredMat.gather([token.ind], dim);
    }
    let newMat = gatheredMat.gather(headList, 0).mean([axis]).transpose();
    const rowInfo = newMat.arraySync();
    const out = {
        rows: rowInfo,
        labels: headList,
        max: newMat.max().arraySync(),
    };
    return out;
}
;
class AttentionHeadBox extends _VisComponent__WEBPACK_IMPORTED_MODULE_1__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        this.rowCssName = 'att-head';
        this.boxCssName = 'att-rect';
        this._current = {};
        this.options = {
            boxDim: 26,
            yscale: 1,
            xscale: 0.5,
            side: "left",
            maxWidth: 200,
            offset: 0,
        };
        this.hoverOps = {
            height: 30,
            width: 70,
            pointsTo: _DivHover__WEBPACK_IMPORTED_MODULE_2__["PointsTo"].BottomRight,
            autoVisibility: false
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.headRows = this.base.selectAll(`.${this.rowCssName}`);
        this.headCells = this.headRows.selectAll(`${this.boxCssName}`);
        this.opacityScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 1]);
        this.divHover = new _DivHover__WEBPACK_IMPORTED_MODULE_2__["DivHover"](d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.parent.node().parentNode), this.eventHandler, this.hoverOps); // Because the parent is an SVG, we need to get the containing div
    }
    updateCurrent() {
        const op = this.options;
        const cur = this._current;
        const nHeads = this._data.rows[0].length;
        const baseHeadWidth = op.boxDim * op.xscale;
        // Scale headwidth according to maximum width
        const getHeadScale = (nH) => (Math.min(op.maxWidth / nH, baseHeadWidth) / baseHeadWidth) * op.xscale;
        cur.headHeight = op.boxDim * op.yscale;
        cur.headWidth = getHeadScale(nHeads) * op.boxDim;
        cur.xPad = cur.headWidth;
        cur.yPad = (op.boxDim - cur.headHeight) / 2;
        const getBoxWidth = (headWidth) => {
            const maxBwidth = 100;
            const bwidth = this._data.rows[0].length * cur.headWidth;
            const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"];
            if (bwidth > maxBwidth) {
                return;
            }
        };
        cur.boxWidth = (this._data.rows[0].length * cur.headWidth);
        cur.totalWidth = (2 * cur.xPad) + cur.boxWidth;
        cur.totalHeight = (op.boxDim * (this._data.rows.length + op.offset));
        return this._current;
    }
    makeHtmlForPopup(h) {
        const out = `<b>Head:</b> ${h}`; // Increment by 1 for display
        console.log(out);
        return out;
    }
    updateData() {
        const op = this.options;
        const self = this;
        const boxEvent = (i) => { return { ind: i, side: op.side, head: self._data.labels[i] }; };
        const cur = this.updateCurrent();
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        this.base.html('');
        this.parent
            .attr("width", cur.totalWidth)
            .attr("height", cur.totalHeight);
        this.headRows = this.base.selectAll(`.${self.rowCssName}`)
            .data(self._data.rows)
            .join("g")
            .attrs({
            class: (d, i) => `${self.rowCssName} ${self.rowCssName}-${i}`,
            transform: (d, i) => {
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate({
                    x: cur.xPad,
                    y: (op.boxDim * (i + op.offset)) + cur.yPad,
                });
            },
            width: cur.boxWidth,
            height: cur.headHeight,
        })
            .on("mouseover", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOver, { ind: i, side: op.side });
        })
            .on("mouseout", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOut, { ind: i, side: op.side });
        });
        this.headCells = this.headRows
            .selectAll(`${this.boxCssName}`)
            .data(d => d)
            .join('rect')
            .attrs({
            x: (d, i) => i * cur.headWidth,
            y: 0,
            class: this.boxCssName,
            head: (d, i) => self._data.labels[i],
            width: cur.headWidth,
            height: cur.headHeight,
            opacity: (d) => this.opacityScale(d),
            fill: "blue"
        })
            .on("mouseover", (d, i) => {
            self.divHover.html(self.makeHtmlForPopup(i + 1));
            self.divHover.show();
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOver, boxEvent(i));
        })
            .on("mouseout", (d, i) => {
            self.divHover.hide();
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOut, boxEvent(i));
        })
            .on("click", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxClick, boxEvent(i));
        })
            .on("mousemove", function (d, i) {
            const op = self.options;
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseMove, { ind: i, side: op.side, baseX: getBaseX(), baseY: getBaseY(), mouse: mouse });
        })
            .append("svg:title")
            .text((d, i) => "Head " + (self._data.labels[i] + 1));
    }
    _wrangle(data) {
        this._data = data;
        this.opacityScale = this.opacityScale.domain([0, data.max]);
        return data;
    }
    _render(data) {
        this.updateData();
    }
}
AttentionHeadBox.events = {
    rowMouseOver: "AttentionHeadBox_RowMouseOver",
    rowMouseOut: "AttentionHeadBox_RowMouseOut",
    boxMouseOver: "AttentionHeadBox_BoxMouseOver",
    boxMouseOut: "AttentionHeadBox_BoxMouseOut",
    boxMouseMove: "AttentionHeadBox_BoxMouseMove",
    boxClick: "AttentionHeadBox_BoxClick",
};


/***/ }),

/***/ "./ts/vis/DivHover.ts":
/*!****************************!*\
  !*** ./ts/vis/DivHover.ts ***!
  \****************************/
/*! exports provided: PointsTo, DivHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsTo", function() { return PointsTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivHover", function() { return DivHover; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");


var PointsTo;
(function (PointsTo) {
    PointsTo[PointsTo["TopLeft"] = 0] = "TopLeft";
    PointsTo[PointsTo["TopRight"] = 1] = "TopRight";
    PointsTo[PointsTo["BottomRight"] = 2] = "BottomRight";
    PointsTo[PointsTo["BottomLeft"] = 3] = "BottomLeft";
    PointsTo[PointsTo["TopMid"] = 4] = "TopMid";
    PointsTo[PointsTo["RightMid"] = 5] = "RightMid";
    PointsTo[PointsTo["BottomMid"] = 6] = "BottomMid";
    PointsTo[PointsTo["LeftMid"] = 7] = "LeftMid";
})(PointsTo || (PointsTo = {}));
const PointsToSides = {
    x: {
        left: new Set([PointsTo.BottomLeft, PointsTo.LeftMid, PointsTo.TopLeft]),
        mid: new Set([PointsTo.BottomMid, PointsTo.TopMid]),
        right: new Set([PointsTo.RightMid, PointsTo.BottomRight, PointsTo.TopRight])
    },
    y: {
        top: new Set([PointsTo.TopLeft, PointsTo.TopMid, PointsTo.TopRight]),
        mid: new Set([PointsTo.RightMid, PointsTo.LeftMid]),
        bottom: new Set([PointsTo.BottomRight, PointsTo.BottomMid, PointsTo.BottomLeft]),
    }
};
const getViewTop = () => window.pageYOffset || document.documentElement.scrollTop;
const getViewLeft = () => window.pageXOffset || document.documentElement.scrollLeft;
const EVENTS = {};
// A hover box that can be added to the base of any class and customized to fit the text desired
class DivHover extends _VisComponent__WEBPACK_IMPORTED_MODULE_1__["VComponent"] {
    constructor(parent, eventHandler, options = {}) {
        super(parent, eventHandler);
        this.css_name = "mat-hover-display";
        this.options = {
            width: 80,
            height: 60,
            maxRadius: 8,
            minRadius: 1,
            pointsTo: PointsTo.TopLeft,
            backgroundColor: 'rgba(200, 200, 200, 0.93)',
            fontSize: 14,
            title: "",
            autoVisibility: true,
        };
        this._current = {
            html: ""
        };
        this.sels = {};
        // Set default options
        this.superInitHTML(options);
        this._init();
    }
    get radiusEdges() {
        const op = this.options;
        const b = op.maxRadius;
        const s = op.minRadius;
        // let borderRadius = "8px 8px 1px 8px" // topleft, topright, bottomright, bottomleft
        let borderRadius;
        switch (this.options.pointsTo) {
            case PointsTo.TopLeft: {
                borderRadius = [s, b, b, b];
                break;
            }
            case PointsTo.TopRight: {
                borderRadius = [b, s, b, b];
                break;
            }
            case PointsTo.BottomRight: {
                borderRadius = [b, b, s, b];
                break;
            }
            case PointsTo.BottomLeft: {
                borderRadius = [b, b, b, s];
                break;
            }
            default: {
                borderRadius = [b, b, b, b];
            }
        }
        return borderRadius.map(v => `${v}px`).join(' ');
    }
    getBaseX(mouse) {
        const op = this.options;
        const dir = op.pointsTo;
        const edges = PointsToSides.x;
        const mouseOffset = edges.right.has(dir) ? mouse[0] - op.width
            : edges.mid.has(dir) ? mouse[0] - (op.width / 2)
                : mouse[0];
        const baseX = this.parent.node().getBoundingClientRect().left;
        const scrollX = getViewLeft();
        return baseX + scrollX + mouseOffset;
    }
    getBaseY(mouse) {
        const op = this.options;
        const dir = op.pointsTo;
        const edges = PointsToSides.y;
        const mouseOffset = edges.mid.has(dir) ? mouse[1] - (op.height / 2)
            : edges.bottom.has(dir) ? mouse[1] - (op.height)
                : mouse[1];
        const baseY = this.parent.node().getBoundingClientRect().top;
        const scrollY = getViewTop();
        return baseY + scrollY + mouseOffset;
    }
    html(val) {
        if (val == null) {
            return this._current.html;
        }
        this._current.html = val;
        this.sels.content.html(val);
        return this;
    }
    hide() {
        this.base.style('visibility', 'hidden');
    }
    show() {
        this.base.style('visibility', 'visible');
    }
    _init() {
        const op = this.options;
        const sels = this.sels;
        const self = this;
        sels.parent = this.parent;
        this.base.style('pointer-events', 'none')
            .style('display', 'block')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background-color', op.backgroundColor)
            .style('left', '0px')
            .style('top', '0px')
            .style('border-radius', this.radiusEdges)
            .style('font-size', `${op.fontSize}px`);
        sels.title = this.base.append('p')
            .html(op.title)
            .style('margin-left', '4px')
            .style('margin-bottom', '2px');
        sels.content = this.base.append('div')
            .style('margin-left', '8px');
        sels.parent.on('mousemove', function () {
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.parent.node());
            self.base.style('left', `${self.getBaseX(mouse)}px`)
                .style('top', `${self.getBaseY(mouse)}px`)
                .style('width', `${op.width}px`)
                .style('height', `${op.height}px`);
        });
        sels.parent.on('mouseout', function () {
            op.autoVisibility && self.base.style('visibility', 'hidden');
        });
        sels.parent.on('mouseover', function () {
            op.autoVisibility && self.base.style('visibility', 'visible');
        });
        // pointer-events: none;
        // display: block;
        // pbsition: absolute;
        // visibility: hidden;
        // background-color: rgba(200, 200, 200, 0.93);
        // font-size: 14px;
        // p {
        //   margin: 4px 1px 1px 4px;
        //   // margin: auto;
        // }
    }
    _wrangle() { }
    _render(data) {
        this.base.selectAll('p')
            .data(data)
            .join('p')
            .text(d => d);
    }
    title(val) {
        if (val == null) {
            return this.options.title;
        }
        this.options.title = val;
        this.sels.title.html(val);
        return this;
    }
}
DivHover.events = EVENTS;


/***/ }),

/***/ "./ts/vis/EdgeConnector.ts":
/*!*********************************!*\
  !*** ./ts/vis/EdgeConnector.ts ***!
  \*********************************/
/*! exports provided: toEdges, EdgeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEdges", function() { return toEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeData", function() { return EdgeData; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/arrayUtils */ "./ts/etc/arrayUtils.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




/**
 * Convert data matrix to necessary data array to pass to SVG connections
 */
function toEdges(data, cutoffAmt = 1) {
    let outArr = [];
    let cutoff;
    data.forEach((row, i) => {
        cutoff = cutoffAmt * d3__WEBPACK_IMPORTED_MODULE_0__["sum"](row);
        let counter = 0;
        const sortedArr = _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__["sortWithIndices"](row);
        sortedArr.arr.forEach((v, j) => {
            if (counter < cutoff) {
                const obj = {
                    i: i,
                    j: sortedArr.sortIndices[j],
                    v: v,
                };
                outArr.push(obj);
                counter += v;
            }
        });
    });
    return outArr;
}
/**
 * Class for implementing operations on AttentionGraph implementation.
 * Closely tied to [[AttentionConnector]]
 */
class EdgeData {
    constructor(data) {
        this.data = data;
        this.tensData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor"](data);
    }
    min(axis) {
        return this.tensData.min(axis).dataSync();
    }
    max(axis) {
        return this.tensData.max(axis).dataSync();
    }
    extent(axis) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["zip"](this.min(axis), this.max(axis));
    }
    /**
     * Format the data to send to SVG chart.
     *
     * @param accumulateThresh - A float between 0 and 1, indicating the amount of weight to display. Defaults to 0.7.
     */
    format(accumulateThresh = 0.7) {
        return toEdges(this.data, accumulateThresh);
    }
}


/***/ }),

/***/ "./ts/vis/TextToken.ts":
/*!*****************************!*\
  !*** ./ts/vis/TextToken.ts ***!
  \*****************************/
/*! exports provided: TextTokens, LeftTextToken, RightTextToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTokens", function() { return TextTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTextToken", function() { return LeftTextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTextToken", function() { return RightTextToken; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _DivHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DivHover */ "./ts/vis/DivHover.ts");





class TextTokens extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.eInfo = (sel, i) => { return { sel: sel, side: this.side, ind: i }; };
        this.eEmbedding = (sel, i, embed) => { return { sel: sel, side: this.side, ind: i, embeddings: embed }; };
        this.divOps = {
            width: 150,
            height: 150,
            offset: [3, 3],
            title: "Would predict...",
            pointsTo: _DivHover__WEBPACK_IMPORTED_MODULE_4__["PointsTo"].TopRight,
        };
        this.options = {
            boxheight: 26,
            offset: 0,
        };
        this.superInitHTML(options);
    }
    mask(maskInds) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            sel.classed("masked-token", lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](maskInds, i));
        });
    }
    getEmbedding(ind) {
        return this._data[ind];
    }
    _init() { }
    _wrangle(data) {
        this.data = this._data;
        return this._data;
    }
    makePopup() {
        const divOps = this.divOps;
        this.divHover = new _DivHover__WEBPACK_IMPORTED_MODULE_4__["DivHover"](this.parent, this.eventHandler, divOps);
    }
    makeHtmlForPopup(token) {
        const out = ramda__WEBPACK_IMPORTED_MODULE_1__["zip"](token.topk_words, token.topk_probs).map(w => {
            const name = w[0].replace(/\u0120/g, " ").replace(/\u010A/g, "\\n");
            const prob = w[1].toFixed(2);
            return `<b>${name}</b>:    ${prob}`;
        }).map(v => `${v}<br>`).join('');
        return out;
    }
    _render(data) {
        const op = this.options;
        const self = this;
        // Reset token display
        this.base.selectAll("*").remove();
        // Add blank divs
        console.log(`Internal offset (${this.side}): `, op.offset);
        const blankDivs = this.base.selectAll(`.blank-text-box`);
        blankDivs.data(ramda__WEBPACK_IMPORTED_MODULE_1__["range"](0, op.offset))
            .join("div")
            .classed("blank-text-box", true)
            .classed("token", true)
            .style("height", op.boxheight + 'px')
            .text((d) => "  ");
        // Render normal text box data
        self.textBoxes = this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
            return d.text.replace("\u0120", " ").replace("\u010A", "\\n");
        })
            .on('mouseover', function (d, i) {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 'lightblue');
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i));
            self.divHover.html(self.makeHtmlForPopup(d));
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i));
        });
        self.addClick(self.textBoxes);
    }
    addClick(textboxes) {
        const self = this;
        self.textBoxes = textboxes
            .on('click', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(sel, i, d.embeddings));
        })
            .on('dblclick', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(sel, i));
        });
    }
}
TextTokens.events = {
    tokenMouseOver: "TextToken_TokenMouseOver",
    tokenMouseOut: "TextToken_TokenMouseOut",
    tokenClick: "TextToken_TokenClick",
    tokenDblClick: "TextToken_TokenDblClick",
};
class LeftTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'left-token';
        this.hover_css_name = 'left-token-hover';
        this.side = 'left';
        this.offset = 1;
        this.makePopup();
    }
}
class RightTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'right-token';
        this.hover_css_name = 'right-token-hover';
        this.side = 'right';
        this.offset = 0;
        this.divOps = {
            width: 150,
            height: 150,
            offset: [3, 3],
            title: "Would predict...",
            pointsTo: _DivHover__WEBPACK_IMPORTED_MODULE_4__["PointsTo"].TopLeft,
        };
        this.makePopup();
    }
}


/***/ }),

/***/ "./ts/vis/VisComponent.ts":
/*!********************************!*\
  !*** ./ts/vis/VisComponent.ts ***!
  \********************************/
/*! exports provided: VComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VComponent", function() { return VComponent; });
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");



/**
 * Should have VComponentHTML and VComponentSVG
 *
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram)
 *
 * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */
class VComponent {
    // CONSTRUCTOR ============================================================
    /**
     * Simple constructor. Subclasses should call @superInit(options) as well.
     * see why here: https://stackoverflow.com/questions/43595943/why-are-derived-class-property-values-not-seen-in-the-base-class-constructor
     *
     * template:
     constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        // -- access to subclass params:
        this.superInit(options);
     }
     *
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    constructor(d3parent, eventHandler) {
        this.id = _etc_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].simpleUId({});
        this.parent = d3parent;
        // If not further specified - create a local event handler bound to the bas element
        this.eventHandler = eventHandler ||
            new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__["SimpleEventHandler"](this.parent.node());
        // Object for storing internal states and variables
        this._visibility = { hidden: false };
    }
    superInitHTML(options = {}) {
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.base = this.parent.append('div')
            .classed(this.css_name, true);
    }
    /**
     * Has to be called as last call in subclass constructor.
     *
     * @param {{}} options
     * @param defaultLayers -- create the default <g> layers: bg -> main -> fg
     */
    superInitSVG(options = {}, defaultLayers = ['bg', 'main', 'fg']) {
        // Set default options if not specified in constructor call
        // const defaults = this.defaultOptions;
        // this.options = {};
        // const keys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
        // keys.forEach(key => this.options[key] = (key in options) ? options[key] : defaults[key]);
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.layers = {};
        // Create the base group element
        const svg = this.parent;
        this.base = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(svg, this.css_name + ' ID' + this.id, this.options.pos);
        // create default layers: background, main, foreground
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer => {
                this.layers[layer] = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(this.base, layer);
            });
        }
    }
    // DATA UPDATE & RENDER ============================================================
    /**
     * Every time data has changed, update is called and
     * triggers wrangling and re-rendering
     * @param {Object} data data object
     * @return {*} ---
     */
    update(data) {
        this._data = data;
        if (this._visibility.hidden)
            return;
        this.renderData = this._wrangle(data);
        this._render(this.renderData);
    }
    // UPDATE OPTIONS ============================================================
    /**
     * Updates instance options
     * @param {Object} options only the options that should be updated
     * @param {Boolean} reRender if option change requires a re-rendering (default:false)
     * @returns {*} ---
     */
    updateOptions({ options, reRender = false }) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
        if (reRender)
            this._render(this.renderData);
    }
    // === CONVENIENCE ====
    redraw() {
        this._render(this.renderData);
    }
    setHideElement(hE) {
        this._visibility.hideElement = hE;
    }
    hideView() {
        if (!this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 0,
                'pointer-events': 'none'
            }).style('display', 'none');
            this._visibility.hidden = true;
        }
    }
    unhideView() {
        if (this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 1,
                'pointer-events': null,
                'display': null
            });
            this._visibility.hidden = false;
            // this.update(this.data);
        }
    }
    destroy() {
        this.base.remove();
    }
    clear() {
        this.base.html('');
    }
}
// STATIC FIELDS ============================================================
/**
 * The static property that contains all class related events.
 * Should be overwritten and event strings have to be unique!!
 */
VComponent.events = { noEvent: 'VComponent_noEvent' };


/***/ }),

/***/ "./ts/vis/attentionVis.ts":
/*!********************************!*\
  !*** ./ts/vis/attentionVis.ts ***!
  \********************************/
/*! exports provided: MainGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGraphic", function() { return MainGraphic; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");
/* harmony import */ var _api_mainApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/mainApi */ "./ts/api/mainApi.ts");
/* harmony import */ var _uiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uiConfig */ "./ts/uiConfig.ts");
/* harmony import */ var _TextToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextToken */ "./ts/vis/TextToken.ts");
/* harmony import */ var _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttentionHeadBox */ "./ts/vis/AttentionHeadBox.ts");
/* harmony import */ var _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttentionConnector */ "./ts/vis/AttentionConnector.ts");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var _data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/AttentionCapsule */ "./ts/data/AttentionCapsule.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _staticLayout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staticLayout */ "./ts/vis/staticLayout.ts");
/**
 * Showing the top left part of exBERT, no information from the embeddings or the contexts
 */

















function isNullToken(tok) {
    const isSomeNull = x => {
        return (x == null) || (x == "null");
    };
    const tokIsNull = tok == null;
    const tokHasNull = isSomeNull(tok.side) || isSomeNull(tok.ind);
    return tokIsNull || tokHasNull;
}
function showBySide(e) {
    // Check if saved token in uiConf is null
    if (!isNullToken(e)) {
        const classSelector = e.side == "left" ? "src-idx" : "target-idx";
        _etc_Util__WEBPACK_IMPORTED_MODULE_13__["Sel"].setHidden(".atn-curve");
        _etc_Util__WEBPACK_IMPORTED_MODULE_13__["Sel"].setVisible(`.atn-curve[${classSelector}='${e.ind}']`);
    }
}
function chooseShowBySide(savedEvent, newEvent) {
    if (isNullToken(savedEvent)) {
        showBySide(newEvent);
    }
}
function chooseShowAll(savedEvent) {
    if (isNullToken(savedEvent))
        _etc_Util__WEBPACK_IMPORTED_MODULE_13__["Sel"].setVisible(".atn-curve");
}
function unselectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", true);
}
function selectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", false);
}
function setSelDisabled(attr, sel) {
    const val = attr ? true : null;
    sel.attr('disabled', val);
}
class MainGraphic {
    /**
     *
     * @param base 'div' html element into which everything below will be rendered
     */
    constructor(baseDiv) {
        this.base = d3__WEBPACK_IMPORTED_MODULE_0__["select"](baseDiv);
        this.api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_5__["API"]();
        this.uiConf = new _uiConfig__WEBPACK_IMPORTED_MODULE_6__["UIConfig"]();
        this.sels = Object(_staticLayout__WEBPACK_IMPORTED_MODULE_16__["createStaticSkeleton"])(this.base);
        this.eventHandler = new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_12__["SimpleEventHandler"](this.base.node());
        this.vizs = {
            leftHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.left, this.eventHandler, { side: "left", }),
            rightHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.right, this.eventHandler, { side: "right" }),
            tokens: {
                left: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["LeftTextToken"](this.sels.tokens.left, this.eventHandler),
                right: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["RightTextToken"](this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__["AttentionGraph"](this.sels.atnDisplay, this.eventHandler),
        };
        this._bindEventHandler();
        this.mainInit();
    }
    mainInit() {
        const self = this;
        this.sels.body.style("cursor", "progress");
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            const val = md.payload;
            // If changing to model with fewer layers, cap accordingly
            this.uiConf.nLayers(val.nlayers).nHeads(val.nheads);
            const currLayer = this.uiConf.layer();
            const maxLayer = this.uiConf.nLayers() - 1;
            this.uiConf.layer(Math.min(currLayer, maxLayer));
            this.initLayers(this.uiConf.nLayers());
            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                const att = attention.payload;
                this.initFromResponse(att);
                // Wrap postInit into function so asynchronous call does not mess with necessary inits
                const postResponseDisplayCleanup = () => {
                    this._toggleTokenSel();
                };
                let normBy;
                if ((this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) && (!this.uiConf.hideClsSep())) {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].COL;
                }
                else {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].ALL;
                }
                this.vizs.attentionSvg.normBy = normBy;
                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds();
                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateTokens(r);
                        this.update();
                        postResponseDisplayCleanup();
                    });
                }
                else {
                    this.update();
                    postResponseDisplayCleanup();
                }
                let predictHoverTitle = this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive ? "Would predict next..." : "Would predict here...";
                self.vizs.tokens.left.divHover.title(predictHoverTitle);
                self.vizs.tokens.right.divHover.title(predictHoverTitle);
                if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(this.uiConf.token().ind);
                    }
                }
                this.sels.body.style("cursor", "default");
            });
        });
    }
    initFromResponse(attention) {
        this.attCapsule = Object(_data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_11__["makeFromMetaResponse"])(attention, this.uiConf.hideClsSep());
        this.tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_10__["TokenWrapper"](attention);
        this._staticInits();
    }
    leaveCorpusMsg(msg) {
        this.vizs.corpusInspector.hideView();
        this.vizs.corpusMatManager.hideView();
        console.log("Running leave msg");
        _etc_Util__WEBPACK_IMPORTED_MODULE_13__["Sel"].unhideElement(this.sels.corpusMsgBox);
        this.sels.corpusMsgBox.text(msg);
    }
    _bindEventHandler() {
        const self = this;
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenDblClick, (e) => {
            switch (self.uiConf.modelKind()) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional: {
                    e.sel.classed("masked-token", !e.sel.classed("masked-token"));
                    const letter = Object(_data_TokenWrapper__WEBPACK_IMPORTED_MODULE_10__["sideToLetter"])(e.side, this.uiConf.attType);
                    self.tokCapsule[letter].toggle(e.ind);
                    self.sels.body.style("cursor", "progress");
                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((resp) => {
                        const r = resp.payload;
                        self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        self.tokCapsule.updateTokens(r);
                        self.uiConf.maskInds(this.tokCapsule.a.maskInds);
                        self.update();
                        self.sels.body.style("cursor", "default");
                    });
                    break;
                }
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive: {
                    console.log("Autoregressive model doesn't do masking");
                    break;
                }
                default: {
                    console.log("What kind of model is this?");
                    break;
                }
            }
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOver, (e) => {
            chooseShowBySide(this.uiConf.token(), e);
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token());
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenClick, (e) => {
            const tokToggle = () => {
                this.uiConf.toggleToken(e);
                this._toggleTokenSel();
                showBySide(e);
            };
            tokToggle();
            this.renderAttHead();
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOver, (e) => { });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOut, () => { });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOver, (e) => {
            const updateMat = this.attCapsule.byHead(e.head);
            this.vizs.attentionSvg.data(updateMat);
            this.vizs.attentionSvg.update(updateMat);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOut, () => {
            const att = this.attCapsule.byHeads(this.uiConf.heads());
            this.vizs.attentionSvg.data(att);
            this.vizs.attentionSvg.update(att);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseMove, (e) => { });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxClick, (e) => {
            const result = this.uiConf.toggleHead(e.head);
            if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].ADDED) {
                selectHead(e.head);
            }
            else if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].REMOVED) {
                unselectHead(e.head);
            }
            this._renderHeadSummary();
            this.renderSvg();
        });
    }
    _toggleTokenSel() {
        const e = this.uiConf.token();
        const alreadySelected = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('.selected-token');
        // If no token should be selected, unselect all tokens
        if (!this.uiConf.hasToken()) {
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.selected-token');
            if (!newSel.empty())
                newSel.classed('selected-token', false);
        }
        // Otherwise, select the indicated token
        else {
            const token2String = (e) => `#${e.side}-token-${e.ind}`;
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](token2String(e));
            // Check that selection exists
            if (!newSel.empty())
                newSel.classed('selected-token', true);
        }
        // Remove previous token selection, if any
        if (!alreadySelected.empty()) {
            alreadySelected.classed('selected-token', false);
        }
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            this.grayToggle(+e.ind);
            this.markNextToggle(+e.ind, this.tokCapsule.a.length());
        }
    }
    /** Gray all tokens that have index greater than ind */
    grayBadToks(ind) {
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            const grayToks = function (d, i) {
                const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
                s.classed("masked-token", i > ind);
            };
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(grayToks);
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.left-token').each(grayToks);
        }
    }
    grayToggle(ind) {
        if (this.uiConf.hasToken())
            this.grayBadToks(ind);
        else
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.token').classed('masked-token', false);
    }
    markNextWordToks(ind, N) {
        const markToks = function (d, i) {
            const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            s.classed("next-token", i == Math.min(ind + 1, N));
        };
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(markToks);
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.left-token').each(markToks);
    }
    markNextToggle(ind, N) {
        if (this.uiConf.hasToken())
            this.markNextWordToks(ind, N);
        else
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.token').classed('next-token', false);
    }
    _staticInits() {
        this._initSentenceForm();
        this._initModelSelection();
        this._renderHeadSummary();
        this._initToggle();
        this.renderAttHead();
        this.renderTokens();
    }
    _initSentenceForm() {
        const self = this;
        this.sels.form.sentenceA.attr('placeholder', "Enter new sentence to analyze");
        this.sels.form.sentenceA.attr('value', this.uiConf.sentence());
        const submitNewSentence = () => {
            // replace all occurences of '#' in sentence as this causes the API to break
            const sentence_a = this.sels.form.sentenceA.property("value").replace(/\#/g, '');
            // Only update if the form is filled correctly
            if (sentence_a.length) {
                this.sels.body.style("cursor", "progress");
                this.api.getMetaAttentions(this.uiConf.model(), sentence_a, this.uiConf.layer())
                    .then((resp) => {
                    const r = resp.payload;
                    this.uiConf.sentence(sentence_a);
                    this.uiConf.rmToken();
                    this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                    this.tokCapsule.updateFromResponse(r);
                    this._toggleTokenSel();
                    this.update();
                    this.sels.body.style("cursor", "default");
                });
            }
        };
        const onEnter = ramda__WEBPACK_IMPORTED_MODULE_2__["curry"]((keyCode, f, event) => {
            const e = event || window.event;
            if (e.keyCode !== keyCode)
                return;
            e.preventDefault();
            f();
        });
        const onEnterSubmit = onEnter(13, submitNewSentence);
        const btn = this.sels.form.button;
        const inputBox = this.sels.form.sentenceA;
        btn.on("click", submitNewSentence);
        inputBox.on('keypress', onEnterSubmit);
    }
    _renderHeadSummary() {
        this.sels.selectedHeads
            .html(ramda__WEBPACK_IMPORTED_MODULE_2__["join"](', ', this.uiConf.heads().map(h => h + 1)));
    }
    initLayers(nLayers) {
        const self = this;
        let hasActive = false;
        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
            // Assign to largest layer available if uiConf.layer() > new nLayers
            if (d == self.uiConf.layer()) { // Javascript is 0 indexed!
                hasActive = true;
                return true;
            }
            if (!hasActive && d == nLayers) {
                self.uiConf.layer(d);
                hasActive = true;
                return true;
            }
            return false;
        })
            .text((d) => d + 1)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i);
        // .text((d, i) => d + " ")
        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["fromEvent"])(checkboxes.nodes(), 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])((e) => {
            const myData = d3__WEBPACK_IMPORTED_MODULE_0__["select"](e.target).datum();
            console.log(myData, "--- myData");
            this.sels.layerCheckboxes.selectAll(".layerCheckbox")
                .classed('active', d => d === myData);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])((v) => +d3__WEBPACK_IMPORTED_MODULE_0__["select"](v.target).datum()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["tap"])(v => {
            console.log("New layer: ", v);
            self.uiConf.layer(v);
            self.sels.body.style("cursor", "progress");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])((v) => Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v)))).subscribe({
            next: (resp) => {
                const r = resp.payload;
                self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateTokens(r);
                self.uiConf.maskInds(self.tokCapsule.a.maskInds);
                self.update();
                self.sels.body.style("cursor", "default");
                self._toggleTokenSel();
            }
        });
        const layerId = `#layerCheckbox${this.uiConf.layer()}`;
        console.log("Layer ID: ", layerId);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](layerId).attr("checked", "checked");
        // Init threshold stuff
        const dispThresh = (thresh) => Math.round(thresh * 100);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
        this.sels.threshSlider.on("input", lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
            const node = this;
            self.uiConf.threshold(+node.value / 100);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
            self.vizs.attentionSvg.threshold(self.uiConf.threshold());
        }, 100));
        this.sels.headSelectAll.on("click", function () {
            self.uiConf.selectAllHeads();
            self.renderSvg();
            self.renderAttHead();
        });
        this.sels.headSelectNone.on("click", function () {
            self.uiConf.selectNoHeads();
            self.renderSvg();
            self.renderAttHead();
            _etc_Util__WEBPACK_IMPORTED_MODULE_13__["Sel"].setHidden(".atn-curve");
        });
    }
    _initToggle() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["fromEvent"])(this.sels.clsToggle.node(), 'input').pipe(
        // @ts-ignore -- TODO: FIX !
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(e => e.srcElement.checked)).subscribe({
            next: v => {
                this.uiConf.hideClsSep(v);
                this.attCapsule.zeroed(v);
                this.renderSvg();
                this.renderAttHead();
            }
        });
    }
    _initModelSelection() {
        const self = this;
        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = this.uiConf.supportedModels;
        const names = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('name'))(data);
        const kinds = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('kind'))(data);
        const kindmap = ramda__WEBPACK_IMPORTED_MODULE_2__["zipObj"](names, kinds);
        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .attr("modelkind", d => d.kind)
            .text(d => d.name);
        this.sels.modelSelector.property('value', this.uiConf.model());
        this.sels.modelSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            const mname = me.property('value');
            self.uiConf.model(mname);
            self.uiConf.modelKind(kindmap[mname]);
            if (kindmap[mname] == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                console.log("RESETTING MASK INDS");
                self.uiConf.maskInds([]);
            }
            self.mainInit();
        });
    }
    renderAttHead() {
        const heads = lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, this.uiConf._nHeads);
        const focusAtt = this.attCapsule.att;
        const token = this.uiConf.hasToken() ? this.uiConf.token() : null;
        //@ts-ignore
        const leftAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "left", token);
        //@ts-ignore
        const rightAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "right", token);
        this.vizs.leftHeads.update(leftAttInfo);
        this.vizs.rightHeads.update(rightAttInfo);
        this._renderHeadSummary();
        // Make sure
        heads.forEach((h) => {
            if (this.uiConf.headSet().has(h)) {
                selectHead(h);
            }
            else {
                unselectHead(h);
            }
        });
    }
    ;
    renderTokens() {
        const left = this.tokCapsule[this.uiConf.attType[0]];
        const right = this.tokCapsule[this.uiConf.attType[1]];
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }
    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads());
        const svg = this.vizs.attentionSvg.data(att);
        svg.update(att);
        const maxTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["max"]([this.tokCapsule.a.length()]);
        const newHeight = svg.options.boxheight * maxTokens;
        svg.height(newHeight);
        // Don't redisplay everything if one token is selected
        showBySide(this.uiConf.token());
    }
    ;
    render() {
        this.renderTokens();
        this.renderSvg();
        this.renderAttHead();
    }
    update() {
        this.render();
    }
}


/***/ }),

/***/ "./ts/vis/staticLayout.ts":
/*!********************************!*\
  !*** ./ts/vis/staticLayout.ts ***!
  \********************************/
/*! exports provided: createStaticSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStaticSkeleton", function() { return createStaticSkeleton; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

function createStaticSkeleton(base) {
    // ---- TEMPLATE -----
    // language=HTML
    function template() {
        return `
            <!--        <div id="attention-vis">-->
            <div>
                <div id="model-selection">
                    <label for="model-options"
                           style="width:150px;margin-bottom: 5px;">Select
                        model</label><select id="model-option-selector"
                                             name="model-options">

                </select>
                </div>
            </div>
            <div id="sentence-input">
                <form>
                    <div class="form-group">
                        <label for="form-sentence-a"
                               style="width: 150px; display: inline-block;vertical-align: middle;">Input
                            Sentence</label>
                        <input id="form-sentence-a" type="text"
                               name="sent-a-input"
                               placeholder="Enter new sentence to analyze"
                               value="The girl ran to a local pub to escape the din of her city."
                               style="width: calc(100% - 240px); display: inline-block;vertical-align: middle;"
                        >
                        <button class="btn btn-primary" id="update-sentence"
                                type="button"
                                style="width:70px;display: inline-block;padding: 3px 3px;">
                            Update
                        </button>
                    </div>
                </form>
                <!--                <div class="padding"></div>-->

            </div>

            <div>
                <div style="display: inline-block; width:150px;"><b>Filters</b>
                </div>
                <div id="cls-toggle" style="display: inline-block;">
                    <!--                    <div class="input-description">-->
                    Hide Special Tokens
                    <!--                    </div>-->
                    <label class="switch" style="vertical-align: middle;">
                        <input type="checkbox" checked="checked">
                        <span class="short-slider round"></span>
                    </label>
                </div>
                <div style="margin-left: 25px;display: inline-block;">
                    Show top <span id="my-range-value">70</span>% of att:
                </div>

                <div class="slide-container"
                     style="display: inline-block;margin-left: 5px;width:calc(100% - 550px);">
                    <!--                    <label for="my-range">-->

                    <!--                    </label>-->
                    <input
                            type="range" min="0" max="100" value="70"
                            class="slider" id="my-range"
                            style="vertical-align: middle;display: inline-block;">
                </div>
            </div>

            <div id="layer-selection" style="margin-top: 10px;">
                <div class="input-description"
                     style="display: inline-block; width: 150px;vertical-align: top;">
                    Layer
                </div>
                <div class="layer-select btn-group btn-group-toggle"
                     data-toggle="buttons" id="layer-select"
                     style="vertical-align: top;">

                </div>
            </div>

            <div id="selected-head-display">
                <div class="input-description" style="display: inline-block; width: 150px;vertical-align: top;">
                    Selected heads:
                </div>
                <div id="selected-heads" style="display:inline-block;vertical-align: top;">

                </div>
            </div>

            <div id="connector-container">
                <div id="connector-controls">
                    <div class="left-control-half">


                        <!--                        <div id="layer-selection">-->
                        <!--                            <div class="input-description">-->
                        <!--                                Layer:-->
                        <!--                            </div>-->
                        <!--                            <div class="layer-select btn-group btn-group-toggle"-->
                        <!--                                 data-toggle="buttons" id="layer-select">-->

                        <!--                            </div>-->
                        <!--                        </div>-->

                    </div>
                    <div class="right-control-half head-control">
<!--                        <div id="selected-head-display">-->
<!--                            <div class="input-description">-->
<!--                                Selected heads:-->
<!--                            </div>-->
<!--                            <div id="selected-heads">-->

<!--                            </div>-->
<!--                        </div>-->
                        <div class="select-input" id="head-all-or-none">
                            <button id="select-all-heads">Select all heads
                            </button>
                            <button id="select-no-heads">Unselect all heads
                            </button>
                        </div>
                        <div id="usage-info">
                            <p>
                                You focus on one token by <b>click</b>.
                                You can mask any token by <b>double click</b>.
                            </p>
                            <p>
                                You can select and de-select a head by a
                                <b>click</b>
                                on the heatmap columns
                            </p>
                        </div>
                    </div>
                </div>
                <div id="atn-container" class="text-center">
                    <div id="left-att-head-div">
                    <svg id="left-att-heads" width="182" height="442"></svg>
                    </div>
                    <div id="left-tokens"></div>
                    <svg id="atn-display" height="442" width="200"></svg>
                    <div id="right-tokens"></div>
                    <div id="right-att-head-div">
                    <svg id="right-att-heads" width="182" height="442"></svg>
                    </div>
                </div>
                <div id="vis-break"></div>
            </div>
            <!--        </div>-->
        `;
    }
    base.html(template);
    // ---- TEMPLATE.end -----
    /**
     * Top level sections
     */
    const sentenceInput = base.select("#sentence-input");
    const connectorContainer = base.select('#connector-container');
    const atnControls = base.select('#connector-controls');
    const atnContainer = base.select('#atn-container');
    /**
     * Sentence Input
     */
    const sentenceA = base.select('#form-sentence-a');
    const formButton = base.select('#update-sentence');
    /**
     * Connector Controls
     */
    const modelSelector = base.select('#model-option-selector');
    const threshSlider = base.select('#my-range');
    const layerCheckboxes = base.select('#layer-select');
    const clsToggle = base.select('#cls-toggle');
    const selectedHeads = base.select('#selected-heads');
    const headSelectAll = base.select('#select-all-heads');
    const headSelectNone = base.select('#select-no-heads');
    /**
     * For main attention vis
     */
    const headBoxLeft = base.select('#left-att-heads');
    const tokensLeft = base.select('#left-tokens');
    const atnDisplay = base.select('#atn-display');
    const tokensRight = base.select('#right-tokens');
    const headBoxRight = base.select('#right-att-heads');
    /**
     * Return an object that provides handles to the important parts here
     */
    return {
        body: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body'),
        atnContainer: atnContainer,
        atnDisplay: atnDisplay,
        atnHeads: {
            left: headBoxLeft,
            right: headBoxRight,
        },
        form: {
            sentenceA: sentenceA,
            button: formButton
        },
        tokens: {
            left: tokensLeft,
            right: tokensRight
        },
        modelSelector: modelSelector,
        clsToggle: clsToggle,
        layerCheckboxes: layerCheckboxes,
        selectedHeads: selectedHeads,
        headSelectAll: headSelectAll,
        headSelectNone: headSelectNone,
        threshSlider: threshSlider,
    };
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9VUkxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9VdGlsLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9fVG9vbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL2FwaUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL2FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9EaXZIb3Zlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL2F0dGVudGlvblZpcy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvc3RhdGljTGF5b3V0LnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy9ub2RlLWZldGNoIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCk/ZGQ5YSIsIndlYnBhY2s6Ly8vc3RyaW5nX2RlY29kZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy9mcyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFPLE1BQU0sT0FBTyxHQUFHO0lBQ3RCLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiww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Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdHMvbWFpbi50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZXhCRVJULmh0bWxcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGNvbnN0IERlbW9BUEkgPSB7XG5cdFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyY1wiOiBcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmMuanNvblwiLFxuXHRcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTdcIjogXCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3Lmpzb25cIixcblx0XCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4XCI6IFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOC5qc29uXCIsXG5cdFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3NlwiOiBcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzYuanNvblwiLFxuXHRcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTlcIjogXCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5Lmpzb25cIixcblx0XCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyXCI6IFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2Mi5qc29uXCIsXG5cdFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZlwiOiBcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2YuanNvblwiLFxuXHRcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTdcIjogXCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3Lmpzb25cIixcblx0XCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2XCI6IFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNi5qc29uXCIsXG5cdFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NFwiOiBcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDQuanNvblwiLFxuXHRcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjdcIjogXCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3Lmpzb25cIixcblx0XCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyXCI6IFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMi5qc29uXCIsXG5cdFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0YlwiOiBcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGIuanNvblwiLFxuXHRcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWNcIjogXCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjLmpzb25cIixcblx0XCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmXCI6IFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZi5qc29uXCIsXG5cdFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMVwiOiBcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzEuanNvblwiLFxuXHRcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTBcIjogXCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwLmpzb25cIixcblx0XCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhXCI6IFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YS5qc29uXCIsXG5cdFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4N1wiOiBcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODcuanNvblwiLFxuXHRcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzNcIjogXCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzLmpzb25cIixcblx0XCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhXCI6IFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYS5qc29uXCIsXG5cdFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNlwiOiBcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDYuanNvblwiLFxuXHRcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDhcIjogXCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4Lmpzb25cIixcblx0XCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyXCI6IFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMi5qc29uXCIsXG5cdFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxN1wiOiBcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTcuanNvblwiLFxuXHRcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDNcIjogXCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzLmpzb25cIixcblx0XCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2XCI6IFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNi5qc29uXCIsXG5cdFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNlwiOiBcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTYuanNvblwiLFxuXHRcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWVcIjogXCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlLmpzb25cIixcblx0XCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3XCI6IFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyNy5qc29uXCIsXG5cdFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1N1wiOiBcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTcuanNvblwiLFxuXHRcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjJcIjogXCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyLmpzb25cIixcblx0XCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhXCI6IFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYS5qc29uXCIsXG5cdFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0NlwiOiBcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDYuanNvblwiLFxuXHRcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTVcIjogXCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1Lmpzb25cIixcblx0XCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiXCI6IFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0Yi5qc29uXCIsXG5cdFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZFwiOiBcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmQuanNvblwiLFxuXHRcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2NcIjogXCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjLmpzb25cIixcblx0XCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiXCI6IFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYi5qc29uXCIsXG5cdFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMlwiOiBcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTIuanNvblwiLFxuXHRcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTJcIjogXCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyLmpzb25cIixcblx0XCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2XCI6IFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNi5qc29uXCIsXG5cdFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3NlwiOiBcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzYuanNvblwiLFxuXHRcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTlcIjogXCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5Lmpzb25cIixcblx0XCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhXCI6IFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYS5qc29uXCIsXG5cdFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOVwiOiBcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzkuanNvblwiLFxuXHRcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTRcIjogXCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0Lmpzb25cIixcblx0XCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2XCI6IFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNi5qc29uXCIsXG5cdFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjM1wiOiBcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzMuanNvblwiLFxuXHRcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjdcIjogXCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3Lmpzb25cIixcblx0XCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5XCI6IFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OS5qc29uXCIsXG5cdFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNFwiOiBcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTQuanNvblwiLFxuXHRcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzhcIjogXCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4Lmpzb25cIixcblx0XCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhXCI6IFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YS5qc29uXCIsXG5cdFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNlwiOiBcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzYuanNvblwiLFxuXHRcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmZcIjogXCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmLmpzb25cIixcblx0XCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwXCI6IFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMC5qc29uXCIsXG5cdFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwY1wiOiBcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGMuanNvblwiLFxuXHRcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmRcIjogXCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkLmpzb25cIixcblx0XCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmXCI6IFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZi5qc29uXCIsXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFRva2VuRGlzcGxheSB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4vcmVzcG9uc2VzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IERlbW9BUEkgfSBmcm9tICcuL2RlbW9BUEknXG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ29iamVjdC1oYXNoJ1xuaW1wb3J0IHsgbWFrZVVybCwgdG9QYXlsb2FkIH0gZnJvbSAnLi4vZXRjL2FwaUhlbHBlcnMnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1VSTEhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUb2tlbkRpc3BsYXkgPSBuZXcgVG9rZW5EaXNwbGF5KClcblxuY29uc3QgYmFzZXVybCA9IFVSTEhhbmRsZXIuYmFzaWNVUkwoKVxuXG4vKipcbiAqIEEgcmV3cml0ZSBvZiBgZDMtZmV0Y2hgJ3MgYGQzLmpzb25gIGNhbGxiYWNrLiBJZiBhbiBhcGkgY2FsbCBmYWlscywgbWFrZSBhIGJhY2t1cCBjYWxsIHRvIHNwZWNpZmllZCB1cmwgYW5kIHBheWxvYWQsIGlmIHNwZWNpZmllZC5cbiAqIFxuICogQHBhcmFtIHJlc3BvbnNlIE9iamVjdCBleHBlY3RlZCBhdCB0aW1lIG9mIGNhbGxiYWNrXG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IG9mIGZhaWxcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIG1ha2luZyBhIHBvc3QgcmVxdWVzdFxuICovXG5mdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBpZiAoYmFja3VwVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1RBVElDIEZJTEUgTk9UIEZPVU5EXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZCkudGhlbihyZXNwb25zZUpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbn1cblxuLyoqXG4gKiBDaGVjayBmaXJzdCBpZiB0aGUgaW5mb3JtYXRpb24gYmVpbmcgc2VudCBleGlzdHMgaW4gYSBzdGF0aWMgZGVtbyBmaWxlLiBJZiBpdCBkb2VzLCBzZW5kIHRoYXQuIE90aGVyd2lzZSwgbWFrZSBhIG5vcm1hbCBjYWxsIHRvIHRoZSBzZXJ2ZXIuXG4gKiBcbiAqIEBwYXJhbSB0b1NlbmQgVGhlIHBhY2tldCBvZiBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIGFuIEFQSSBlbmRwb2ludFxuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCB0aGF0IHRoZSBkZW1vIGZpbGUgaXMgbm90IGZvdW5kXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBkZW1vIGZpbGUgbm90IGZvdW5kLCBmb3IgUE9TVCByZXF1ZXN0cyBvbmx5XG4gKi9cbmZ1bmN0aW9uIGNoZWNrRGVtb0FQSSh0b1NlbmQsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgY29uc3QgaHNoID0gaGFzaC5zaGExKHRvU2VuZCk7XG4gICAgY29uc29sZS5sb2coXCJDSEVDS0lORyBERU1PQVBJOiBcIiArIGhzaCk7XG4gICAgaWYgKERlbW9BUEkuaGFzT3duUHJvcGVydHkoaHNoKSkge1xuICAgICAgICAvLyBSZWxpZXMgb24gYSBzeW1ib2xpYyBsaW5rIGJlaW5nIHByZXNlbnQgaW4gdGhlIGRpc3QgZm9sZGVyIHRvIHRoZSBkZW1vIGZvbGRlclxuICAgICAgICBjb25zdCBwYXRoID0gJy4vZGVtby8nICsgRGVtb0FQSVtoc2hdXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIFNFTkRJTkcgU1RBVElDOiBcIiwgcGF0aCk7XG4gICAgICAgIGNvbnN0IGZvbGxvdyA9IChyZXNwb25zZSkgPT4gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG4gICAgICAgIHJldHVybiBmZXRjaChwYXRoKS50aGVuKGZvbGxvdylcbiAgICB9XG4gICAgcmV0dXJuIGQzLmpzb24oYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VVUkwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZXVybCArICcvYXBpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsRGV0YWlscyhtb2RlbDogc3RyaW5nLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTW9kZWxEZXRhaWxSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvZ2V0LW1vZGVsLWRldGFpbHNcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TWV0YUF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2F0dGVuZC13aXRoLW1ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgdG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgdG9rZW5zOiBSLm1hcChSLnByb3AoJ3RleHQnKSwgdG9rZW5zLnRva2VuRGF0YSksXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmogZm9yIGRlbW8gcHVycG9zZXNcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCwgcGF5bG9hZCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFBPU1QgXCIgKyB1cmwsIHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwsIHBheWxvYWQpXG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vKipcbiAqIE5vdGVzOlxuICogXG4gKiAtIEFsc28gZW5jYXBzdWxhdGUgdGhlIENMUy9TRVAgaW5mbyB2cy4gbm8gQ0xTL1NFUCBpbmZvXG4gKiAtIFdoZW4gbGF5ZXIgZm9ybWF0IGNoYW5nZXMgZnJvbSBsaXN0LCBkcm9wIHRoZSBpbmRleCBpbnRvIGNvbmYubGF5ZXJcbiAqL1xuXG5jb25zdCBicGVUb2tlbnMgPSBbXCJbQ0xTXVwiLCBcIltTRVBdXCIsIFwiPHM+XCIsIFwiPC9zPlwiLCBcIjx8ZW5kb2Z0ZXh0fD5cIl1cbmNvbnN0IGZpbmRCYWRJbmRleGVzID0gKHg6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkgPT4geF8uZmluZEFsbEluZGV4ZXMoeC5tYXAodCA9PiB0LnRleHQpLCAoYSkgPT4gXy5pbmNsdWRlcyhicGVUb2tlbnMsIGEpKVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZyb21NZXRhUmVzcG9uc2Uocjp0cC5BdHRlbnRpb25SZXNwb25zZSwgaXNaZXJvZWQpe1xuICAgIGNvbnN0IGtleSA9ICdhYScgLy8gQ2hhbmdlIHRoaXMgaWYgYmFja2VuZCByZXNwb25zZSBjaGFuZ2VzIHRvIGJlIHNpbXBsZXJcbiAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgIGNvbnN0IGxlZnQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLmxlZnRcbiAgICBjb25zdCByaWdodCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIucmlnaHRcbiAgICBjb25zdCBsZWZ0WmVybyA9IHhfLmZpbmRBbGxJbmRleGVzKGxlZnQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICBjb25zdCByaWdodFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhyaWdodC5tYXAodCA9PiB0LnRleHQpLCAoYSkgPT4gXy5pbmNsdWRlcyhicGVUb2tlbnMsIGEpKVxuICAgIHJldHVybiBuZXcgQXR0ZW50aW9uV3JhcHBlcihjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG59XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25XcmFwcGVyIHtcbiAgICBwcm90ZWN0ZWQgX2F0dDpudW1iZXJbXVtdW11cbiAgICBwcm90ZWN0ZWQgX2F0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuICAgIHByb3RlY3RlZCBfemVyb2VkQXR0VGVuc29yOnRmLlRlbnNvcjNEXG5cbiAgICBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dIC8vIEluZGV4ZXMgZm9yIHRoZSBDTFMgYW5kIFNFUCB0b2tlbnNcbiAgICBpc1plcm9lZDogYm9vbGVhblxuXG4gICAgY29uc3RydWN0b3IoYXR0Om51bWJlcltdW11bXSwgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXT1bW10sW11dLCBpc1plcm9lZD10cnVlKXtcbiAgICAgICAgdGhpcy5pbml0KGF0dCwgYmFkVG9rcywgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgaW5pdChhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkKSB7XG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSBpc1plcm9lZFxuICAgICAgICB0aGlzLl9hdHQgPSBhdHQ7XG4gICAgICAgIHRoaXMuX3plcm9lZEF0dFRlbnNvciA9IHplcm9Sb3dDb2wodGYudGVuc29yM2QoYXR0KSwgYmFkVG9rc1swXSwgYmFkVG9rc1sxXSlcbiAgICAgICAgdGhpcy5fYXR0VGVuc29yID0gdGYudGVuc29yM2QoYXR0KSAvLyBJZiBJIHB1dCB0aGlzIGZpcnN0LCBidWZmZXIgbW9kaWZpY2F0aW9ucyBjaGFuZ2UgdGhpcyB0b28uXG4gICAgICAgIHRoaXMuYmFkVG9rcyA9IGJhZFRva3M7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbU5vcm1hbChyOnRwLkF0dGVudGlvblJlc3BvbnNlLCBpc1plcm9lZCl7XG4gICAgICAgIGNvbnN0IGtleSA9ICdhYScgLy8gQ2hhbmdlIHRoaXMgaWYgYmFja2VuZCByZXNwb25zZSBjaGFuZ2VzIHRvIGJlIHNpbXBsZXJcbiAgICAgICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICAgICAgY29uc3QgbGVmdCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIubGVmdFxuICAgICAgICBjb25zdCByaWdodCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIucmlnaHRcblxuICAgICAgICBjb25zdCBsZWZ0WmVybyA9IGZpbmRCYWRJbmRleGVzKGxlZnQpXG4gICAgICAgIGNvbnN0IHJpZ2h0WmVybyA9IGZpbmRCYWRJbmRleGVzKHJpZ2h0KVxuICAgICAgICB0aGlzLmluaXQoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxuICAgIH1cblxuICAgIGdldCBhdHRUZW5zb3IoKSB7XG4gICAgICAgIGNvbnN0IHRlbnMgPSB0aGlzLmlzWmVyb2VkID8gdGhpcy5femVyb2VkQXR0VGVuc29yIDogdGhpcy5fYXR0VGVuc29yXG4gICAgICAgIHJldHVybiB0ZW5zXG4gICAgfVxuXG4gICAgZ2V0IGF0dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0VGVuc29yLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgemVyb2VkKCk6IGJvb2xlYW5cbiAgICB6ZXJvZWQodmFsOmJvb2xlYW4pOiB0aGlzXG4gICAgemVyb2VkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5pc1plcm9lZFxuICAgICAgICB0aGlzLmlzWmVyb2VkID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlWmVyb2luZygpIHtcbiAgICAgICAgdGhpcy56ZXJvZWQoIXRoaXMuemVyb2VkKCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9ieUhlYWRzKGhlYWRzOm51bWJlcltdKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIGlmIChoZWFkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRmLnplcm9zTGlrZSh0aGlzLl9ieUhlYWQoMCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoaGVhZHMsIDApLnN1bSgwKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZChoZWFkOm51bWJlcik6dGYuVGVuc29yMkQge1xuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoW2hlYWRdLCAwKS5zcXVlZXplKFswXSkpXG4gICAgfVxuXG4gICAgYnlIZWFkcyhoZWFkczpudW1iZXJbXSk6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWRzKGhlYWRzKS5hcnJheVN5bmMoKVxuICAgIH1cblxuICAgIGJ5SGVhZChoZWFkOm51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWQoaGVhZCkuYXJyYXlTeW5jKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHplcm9Sb3dDb2wodGVuczp0Zi5UZW5zb3IzRCwgcm93czpudW1iZXJbXSwgY29sczpudW1iZXJbXSk6dGYuVGVuc29yM0Qge1xuICAgIGxldCBvdXRUZW5zID0gdGVucy5jbG9uZSgpXG4gICAgbGV0IGF0YiA9IG91dFRlbnMuYnVmZmVyU3luYygpXG4gICAgXy5yYW5nZShhdGIuc2hhcGVbMF0pLmZvckVhY2goKGhlYWQpID0+IHtcbiAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCByb3dzIHRvIDBcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHJvd3MsIGkpKSB7XG4gICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXRiLnNldCgwLCBoZWFkLCBpLCBqKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBjb2xzIHRvIDBcbiAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzJdKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY29scywgaikpXG4gICAgICAgICAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzFdKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0VGVuc1xufSIsImltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogVGhlIG9yaWdpbmFsIHRva2VucywgYW5kIHRoZSBpbmRleGVzIHRoYXQgbmVlZCB0byBiZSBtYXNrZWRcbiAqL1xuIGNvbnN0IGVtcHR5RnVsbFJlc3BvbnNlOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10gPSBbe1xuICAgICB0ZXh0OiAnW1NFUF0nLFxuICAgICB0b3BrX3dvcmRzOiBbXSxcbiAgICAgdG9wa19wcm9iczogW11cbiB9XVxuXG5leHBvcnQgY2xhc3MgVG9rZW5EaXNwbGF5ICB7XG4gICAgdG9rZW5EYXRhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXVxuICAgIG1hc2tJbmRzOm51bWJlcltdXG5cbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnM9ZW1wdHlGdWxsUmVzcG9uc2UsIG1hc2tJbmRzPVtdKXtcbiAgICAgICAgdGhpcy50b2tlbkRhdGEgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBtYXNrSW5kcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGlkeCB0byB0aGUgbWFzayBpZHggbGlzdCBpbiBvcmRlciBmcm9tIHNtYWxsZXN0IHRvIGxhcmdlc3RcbiAgICAgKi9cbiAgICBtYXNrKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIHhfLm9yZGVyZWRJbnNlcnRfKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZhbH0gYWxyZWFkeSBpbiBtYXNrSW5kcyFgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFza0luZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbm1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLnVubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bm1hc2sodmFsKSB7XG4gICAgICAgIF8ucHVsbCh0aGlzLm1hc2tJbmRzLCB2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0TWFzaygpIHtcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IFtdO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5EYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25jYXQob3RoZXI6IFRva2VuRGlzcGxheSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSBfLmNvbmNhdCh0aGlzLnRva2VuRGF0YSwgb3RoZXIudG9rZW5EYXRhKTtcbiAgICAgICAgY29uc3QgbmV3TWFzayA9IF8uY29uY2F0KHRoaXMubWFza0luZHMsIG90aGVyLm1hc2tJbmRzLm1hcCh4ID0+IHggKyB0aGlzLmxlbmd0aCgpKSk7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5EaXNwbGF5KG5ld1Rva2VucywgbmV3TWFzayk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5XcmFwcGVyIHtcbiAgICBhOiBUb2tlbkRpc3BsYXlcblxuICAgIGNvbnN0cnVjdG9yKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2Upe1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tUmVzcG9uc2Uocjp0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCB0b2tlbnNBID0gci5hYS5sZWZ0O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21Db21wb25lbnRzKHRva2Vuc0EsIFtdKVxuICAgIH1cblxuICAgIHVwZGF0ZUZyb21Db21wb25lbnRzKGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdLCBtYXNrQTpudW1iZXJbXSl7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBUb2tlbkRpc3BsYXkoYSwgbWFza0EpXG4gICAgfVxuXG4gICAgdXBkYXRlVG9rZW5zKHI6IHRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGRlc2lyZWRLZXlzID0gWydjb250ZXh0cycsICdlbWJlZGRpbmdzJywgJ3RvcGtfcHJvYnMnLCAndG9wa193b3JkcyddXG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IHIuYWEubGVmdC5tYXAodiA9PiBSLnBpY2soZGVzaXJlZEtleXMsIHYpKVxuXG4gICAgICAgIGNvbnN0IHBhaXJzID0gUi56aXAodGhpcy5hLnRva2VuRGF0YSwgbmV3VG9rZW5zKVxuXG4gICAgICAgIHBhaXJzLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRbMV0pLm1hcChrID0+IHtcbiAgICAgICAgICAgICAgICBkWzBdW2tdID0gZFsxXVtrXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hc2sgdGhlIGFwcHJvcHJpYXRlIHNlbnRlbmNlIGF0IHRoZSBpbmRleCBpbmRpY2F0ZWRcbiAgICAgKi9cbiAgICBtYXNrKHNJRDp0cC5Ub2tlbk9wdGlvbnMsIGlkeDpudW1iZXIpe1xuICAgICAgICB0aGlzW3NJRF0ubWFzayhpZHgpXG4gICAgICAgIGNvbnN0IG9wdHMgPSBbXCJhXCIsIFwiYlwiXVxuICAgICAgICBjb25zdCBOYSA9IHRoaXMuYS5sZW5ndGgoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWRlVG9MZXR0ZXIoc2lkZTp0cC5TaWRlT3B0aW9ucywgYXR5cGU6dHAuU2VudGVuY2VPcHRpb25zKXtcbiAgICAvLyBjb25zdCBhdHlwZSA9IGNvbmYuYXR0VHlwZTtcbiAgICBpZiAoYXR5cGUgPT0gXCJhbGxcIikge1xuICAgICAgICByZXR1cm4gXCJhbGxcIlxuICAgIH1cbiAgICBjb25zdCBvdXQgPSBzaWRlID09IFwibGVmdFwiID8gYXR5cGVbMF0gOiBhdHlwZVsxXSAvLyBObyB0eXBlIGNoZWNraW5nP1xuICAgIHJldHVybiBvdXRcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiXG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5cbi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHIHtcbiAgICBzdGF0aWMgdHJhbnNsYXRlKHt4LCB5fSk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgeCArIFwiLFwiICsgeSArIFwiKVwiXG4gICAgfVxuXG4gICAgc3RhdGljIHJvdGF0ZShkZWcpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBgcm90YXRlKCR7ZGVnfSlgXG4gICAgfVxuXG4gICAgc3RhdGljIGdyb3VwKHBhcmVudCwgY2xhc3NlcywgcG9zID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cnMoe1xuICAgICAgICAgICAgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBTVkcudHJhbnNsYXRlKHBvcylcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNWR01lYXN1cmVtZW50cyB7XG5cbiAgICBwcml2YXRlIG1lYXN1cmVFbGVtZW50OiBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VFbGVtZW50LCBjbGFzc2VzID0gJycpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudCA9IGJhc2VFbGVtZW50LmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cnMoe3g6IDAsIHk6IC0yMCwgY2xhc3M6IGNsYXNzZXN9KVxuXG4gICAgfVxuXG4gICAgdGV4dExlbmd0aCh0ZXh0LCBzdHlsZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC5hdHRyKCdzdHlsZScsIHN0eWxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB0bCA9ICg8U1ZHVGV4dEVsZW1lbnQ+IHRoaXMubWVhc3VyZUVsZW1lbnQubm9kZSgpKS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlRWxlbWVudC50ZXh0KCcnKTtcblxuICAgICAgICByZXR1cm4gdGw7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmaWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5leHBvcnQgY2xhc3MgU2ltcGxlRXZlbnRIYW5kbGVyIHtcblxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgZXZlbnRMaXN0ZW5lcnM6IG9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW11cbiAgICB9XG5cbiAgICBiaW5kKGV2ZW50TmFtZXM6IHN0cmluZywgZXZlbnRGdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcy5zcGxpdCgnICcpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goe2V2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbn0pO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGdW5jdGlvbldyYXAgPSBlID0+IGV2ZW50RnVuY3Rpb24oZS5kZXRhaWwsIGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEZ1bmN0aW9uV3JhcCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCBkZXRhaWw6IG9iamVjdCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7ZGV0YWlsfSkpO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFVSTEhhbmRsZXIge1xuXG4gICAgc3RhdGljIGJhc2ljVVJMKCkge1xuICAgICAgICBjb25zdCB1cmxfcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKDAsIC0yKS5qb2luKCcvJyk7XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAodXJsX3BhdGgubGVuZ3RoID8gdXJsX3BhdGggOiAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhZCBhbGwgVVJMIHBhcmFtZXRlcnMgaW50byBhIG1hcC5cbiAgICAgKiBAcmV0dXJucyB7TWFwfSB0aGUgdXJsIHBhcmFtZXRlcnMgYXMgYSBrZXktdmFsdWUgc3RvcmUgKEVTNiBtYXApXG4gICAgICovXG4gICAgc3RhdGljIGdldCBwYXJhbWV0ZXJzKCk6IG9iamVjdCB7XG4gICAgICAgIC8vIEFkYXB0ZWQgZnJvbTogIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjA5MDU1MS9wYXJzZS1xdWVyeS1zdHJpbmctaW4tamF2YXNjcmlwdFxuICAgICAgICBjb25zdCBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgICAgICBjb25zdCB2YXJzID0gcXVlcnkuc3BsaXQoJyYnKTtcbiAgICAgICAgY29uc29sZS5sb2codmFycywgXCItLS0gdmFyc1wiKTtcblxuICAgICAgICBjb25zdCB1cmxQYXJhbWV0ZXJzID0ge307XG5cbiAgICAgICAgY29uc3QgaXNJbnQgPSB4ID0+ICgvXlswLTldKyQvKS50ZXN0KHgpO1xuICAgICAgICBjb25zdCBpc0Zsb2F0ID0geCA9PiAoL15bMC05XStcXC5bMC05XSokLykudGVzdCh4KTtcblxuICAgICAgICBjb25zdCB0eXBlQ2FzdCA9IHZhbCA9PiB7XG4gICAgICAgICAgICBpZiAoaXNJbnQodmFsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRmxvYXQodmFsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZTpcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhcnMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdHMgPSB2LnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1swXSk7XG4gICAgICAgICAgICAgICAgbGV0IHJhd192YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHNbMV0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IHJhd192YWx1ZS5zdGFydHNXaXRoKCcuLicpO1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJhd192YWx1ZSA9IHJhd192YWx1ZS5zbGljZSgyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmF3X3ZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gaXNBcnJheSA/IFtdIDogJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHJhd192YWx1ZS5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiB0eXBlQ2FzdCh2YWwpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSB0eXBlQ2FzdChyYXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVybFBhcmFtZXRlcnM7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBVUkwgc3RyaW5nIGZyb20gYSBtYXAgb2YgdXJsIHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3t9fSB1cmxQYXJhbWV0ZXJzIC0gdGhlIG1hcCBvZiBwYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBhbiBVUkkgc3RyaW5nXG4gICAgICovXG4gICAgc3RhdGljIHVybFN0cmluZyh1cmxQYXJhbWV0ZXJzOiBvYmplY3QpIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyh1cmxQYXJhbWV0ZXJzKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgY29uc3QgdiA9IHVybFBhcmFtZXRlcnNba107XG4gICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdjtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSkgdmFsdWUgPSAnLi4nICsgdi5qb2luKCcsJyk7XG4gICAgICAgICAgICAgICAgYXR0ci5wdXNoKGVuY29kZVVSSShrICsgJz0nICsgdmFsdWUpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgbGV0IHJlcyA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICAgICAgaWYgKGF0dHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzICs9ICc/JyArIGF0dHIuam9pbignJicpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVVUkxQYXJhbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGFueVtdLCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50UGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzO1xuICAgICAgICBjdXJyZW50UGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgVVJMSGFuZGxlci51cGRhdGVVcmwoY3VycmVudFBhcmFtcywgYWRkVG9Ccm93c2VySGlzdG9yeSk7XG4gICAgfVxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogR2VuZXJhdGVzIGEga2V5LXZhbHVlIG1hcCBvZiBhbGwgVVJMIHBhcmFtcyBhbmQgcmVwbGFjZXMgcmVwbGFjZUtleXNcbiAgICAvLyAgKiBAcGFyYW0gdXBkYXRlS2V5c1xuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyB1cGRhdGVVUkxQYXJhbXModXBkYXRlS2V5cykge1xuICAgIC8vICAgICBjb25zdCBjdXJyZW50UGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzO1xuICAgIC8vICAgICBPYmplY3Qua2V5cyh1cGRhdGVLZXlzKS5mb3JFYWNoKChrKSA9PiBjdXJyZW50UGFyYW1zW2tdID0gdXBkYXRlS2V5c1trXSlcbiAgICAvLyAgICAgcmV0dXJuIGN1cnJlbnRQYXJhbXM7XG4gICAgLy8gfVxuXG5cbiAgICBzdGF0aWMgdXBkYXRlVXJsKHVybFBhcmFtZXRlcnM6IG9iamVjdCwgYWRkVG9Ccm93c2VySGlzdG9yeSA9IHRydWUpIHtcbiAgICAgICAgaWYgKGFkZFRvQnJvd3Nlckhpc3RvcnkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh1cmxQYXJhbWV0ZXJzLCAnJyxcbiAgICAgICAgICAgICAgICBVUkxIYW5kbGVyLnVybFN0cmluZyh1cmxQYXJhbWV0ZXJzKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1cmxQYXJhbWV0ZXJzLCAnJyxcbiAgICAgICAgICAgICAgICBVUkxIYW5kbGVyLnVybFN0cmluZyh1cmxQYXJhbWV0ZXJzKSlcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZ5ZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmxldCB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgVXRpbCB7XG4gICAgc3RhdGljIHNpbXBsZVVJZCh7IHByZWZpeCA9ICcnIH0pOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9pZF9jb3VudGVyO1xuICAgIH1cbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuXG4vKipcbiAqIFNlbGVjdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBzaG91bGQgYmUgc3RhdGljIG1ldGhvZHMgaW4gdGhlIGJlbG93IGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWwge1xuICAgIHN0YXRpYyBzZXRTZWxWaXNpYmxlID0gKHg6IEQzU2VsKSA9PiB4LmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKVxuICAgIHN0YXRpYyBzZXRTZWxIaWRkZW4gPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICBzdGF0aWMgc2V0VmlzaWJsZSA9ICh4OiBzdHJpbmcpID0+IFNlbC5zZXRTZWxWaXNpYmxlKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgc2V0SGlkZGVuID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbEhpZGRlbihkMy5zZWxlY3RBbGwoeCkpXG4gICAgc3RhdGljIGhpZGVFbGVtZW50ID0gKGhFOiBEM1NlbCkgPT4gaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdub25lJ30pXG4gICAgc3RhdGljIHVuaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBudWxsfSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5mdW5jdGlvbiBhc2NPcmRlcihuMSwgbjIpIHtcbiAgICBpZiAobjEgPCBuMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG4xID4gbjIpIHsgXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IHtmaW5kQWxsSW5kZXhlcywgaW5zZXJ0QXRfLCBvcmRlcmVkSW5zZXJ0Xywgc2V0MlNvcnRlZEFycmF5fVxuXG4vKipcbiAqIEZpbmQgYWxsIGluZGV4ZXMgdGhhdCBtYXRjaCBhIHBhcnRpY3VsYXIgcHJlZGljYXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmRBbGxJbmRleGVzPFQ+KGFycmF5OkFycmF5PFQ+LCBwcmVkaWNhdGU6KGE6VCkgPT4gYm9vbGVhbik6IG51bWJlcltdIHtcbiAgICBsZXQgZnJvbUluZGV4PTA7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgIGxldCBpID0gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KTtcbiAgICB3aGlsZSAoaSAhPSAtMSkge1xuICAgICAgICByZXN1bHRzLnB1c2goaSk7XG4gICAgICAgIGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBpKzEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5mdW5jdGlvbiBpbnNlcnRBdF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBpbmQ6bnVtYmVyKTpBcnJheTxUPiB7XG4gICAgYXJyYXkuc3BsaWNlKGluZCwgMCwgdmFsKTtcbiAgICByZXR1cm4gYXJyYXlcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc2V0IHRvIGFuIG9yZGVyZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gc2V0MlNvcnRlZEFycmF5PFQ+KGlucHV0OlNldDxUPik6QXJyYXk8VD4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGlucHV0KS5zb3J0KGFzY09yZGVyKVxufVxuXG4vKipcbiAqIEluc2VydCBhIHZhbHVlIGludG8gYXJyYXkgaW4gc29ydGVkIG9yZGVyIElOIFBMQUNFXG4gKiBcbiAqIFdBUk5JTkc6IE9ubHkgaGFuZGxlcyBudW1iZXJzLCBzb3J0ZWQgZnJvbSBsZWFzdCB0byBncmVhdGVzdFxuICogLSBBc3N1bWVzIGFscmVhZHkgc29ydGVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRJbnNlcnRfPFQ+KGFycmF5OkFycmF5PFQ+LCB2YWw6VCwgY29sZHN0YXJ0PWZhbHNlKTpBcnJheTxUPiB7XG4gICAgLy8gUmVzb3J0IGFycmF5IGlmIGRlc2lyZWRcbiAgICBpZiAoY29sZHN0YXJ0KSB7XG4gICAgICAgIGFycmF5LnNvcnQoYXNjT3JkZXIpXG4gICAgfVxuXG4gICAgY29uc3QgaW5kID0gXy5zb3J0ZWRJbmRleChhcnJheSwgdmFsKTtcbiAgICByZXR1cm4gaW5zZXJ0QXRfKGFycmF5LCB2YWwsIGluZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYW5kb20obGVuOm51bWJlcil7XG4gIGNvbnN0IGE6bnVtYmVyW10gPSBuZXcgQXJyYXkobGVuKS5maWxsKDApXG5cbiAgcmV0dXJuIGEubWFwKCh4KSA9PiB7cmV0dXJuIF8ucmFuZG9tKC01LCA1LCB0cnVlKX0pXG59IiwiLyoqXG4gKiBDb252ZXJ0IGEgSlMgb2JqZWN0IGludG8gR0VUIFVSTCBwYXJhbWV0ZXJzXG4gKiBcbiAqIEBwYXJhbSBiYXNlIEJhc2UgVVJMIGF0b3Agd2hpY2ggdG8gYWRkIEdFVCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB0byBpbnNlcnQgaW50byBhIFVSTCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVcmwoYmFzZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpOnN0cmluZyB7XG4gICAgaWYgKHBhcmFtcyl7XG4gICAgICAgIGxldCBvdXQ6IHN0cmluZyA9IGJhc2UgKyBcIj9cIjtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goIGsgPT4ge1xuICAgICAgICAgICAgb3V0ICs9IGs7XG4gICAgICAgICAgICBvdXQgKz0gJz0nO1xuICAgICAgICAgICAgb3V0ICs9IHBhcmFtc1trXTtcbiAgICAgICAgICAgIG91dCArPSBcIiZcIjtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG91dC5yZXBsYWNlKC8mJC9nLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBpbmZvcm1hdGlvbiBpbiBHRVQgcmVxdWVzdCBpbnRvIHRoZSBtZXNzYWdlIGZvciBhIFBPU1QgcmVxdWVzdCAgICBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUGF5bG9hZCA9ICh0b1NlbmQpID0+IHtyZXR1cm4ge1xuICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KHRvU2VuZCksXG4gICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxufX0iLCIvLyBbW3ZhbCwgaW5kXSwgW3ZhbCwgaW5kXS4uLl1cbnR5cGUgQ29tcEZuSW5kID0gKGE6bnVtYmVyW10sIGI6bnVtYmVyW10pID0+IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0QXJyYXkge1xuICAgIGFycjogbnVtYmVyW10sXG4gICAgc29ydEluZGljZXM6IG51bWJlcltdLFxufVxuXG4vKipcbiAqIENvcGllcyBhbmQgc29ydHMgYW4gYXJyYXkgd2hpbGUga2VlcGluZyB0cmFjayBvZiB0aGUgaW5kaWNlcy4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc29ydGluZyBtYXggLT4gbWluLlxuICogXG4gKiBAcGFyYW0gYXJyIC0gQXJyYXkgdG8gYmUgY29waWVkIGFuZCBzb3J0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXaXRoSW5kaWNlcyhhcnI6bnVtYmVyW10sIGZuPzpDb21wRm5JbmQpOiBTb3J0QXJyYXkge1xuICAgIC8vIElmIGZuIGlzIG5vdCBwcm92aWRlZCwgZGVmYXVsdCB0byBzb3J0aW5nIGJ5IG1heCB2YWx1ZVxuICAgIGlmICghZm4pIHtcbiAgICAgICAgZm4gPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxldCBvdXQ6U29ydEFycmF5ID0ge1xuICAgICAgICBhcnI6IFtdLFxuICAgICAgICBzb3J0SW5kaWNlczogW11cbiAgICB9O1xuXG4gICAgbGV0IGlkeFRyYWNrZXI6IG51bWJlcltdW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZHhUcmFja2VyW2ldID0gW2FycltpXSwgaV07XG4gICAgfVxuXG4gICAgaWR4VHJhY2tlci5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dC5zb3J0SW5kaWNlcy5wdXNoKGlkeFRyYWNrZXJbal1bMV0pO1xuICAgICAgb3V0LmFycltqXSA9IGlkeFRyYWNrZXJbal1bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4vVXRpbFwiXG5cbi8qKlxuICogQVRURU5USU9OIFJFU1BPTlNFUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBDb250YWluIHRoZSBhdHRlbnRpb25zIGFuZCBlbWJlZGRpbmdzIGZvciBhbGwgY29tYmluYXRpb25zIG9mIHJldHVybnMgZnJvbSB0aGUgYmFja2VuZFxuICovXG5cbmV4cG9ydCB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICBubGF5ZXJzOiBudW1iZXJcbiAgICBuaGVhZHM6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBNb2RlbENvbmZpZyA9IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBraW5kOiBNb2RlbEtpbmRcbn1cblxuXG4vKipcbiAqIEFUVEVOVElPTiBSRVNVTFRTIEZST00gQkFDS0VORFxuICpcbiAqIFRoZXNlIGFyZSB0aGUgcmVzdWx0cyB0aGF0IGFyZSBlbmNhc2VkIGluIHRoZSAnYWEnIGFuZCAnYWInIGtleXMgcmV0dXJuZWRcbiAqL1xudHlwZSBBYnN0cmFjdEF0dGVudGlvblJlc3BvbnNlPFQ+ID0ge1xuICAgIGFhOiBUXG59XG5cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuZXhwb3J0IHR5cGUgRnVsbFNpbmdsZVRva2VuSW5mbyA9IHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgdG9wa193b3Jkczogc3RyaW5nW10sXG4gICAgdG9wa19wcm9iczogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PFQ+IHtcbiAgICBhdHQ6IG51bWJlcltdW11bXSxcbiAgICBsZWZ0OiBULFxuICAgIHJpZ2h0OiBULFxufVxuXG4vKipcbiAqIFNFQVJDSCBSRVNVTFQgVFlQRVNcbiAqL1xuXG5pbnRlcmZhY2UgTWF0Y2hlZFRva0F0dCB7XG4gICAgYXR0OiBudW1iZXJbXVxuICAgIG9mZnNldF90b19tYXg6IG51bWJlclxuICAgIGxvY19vZl9tYXg6IG51bWJlclxufVxuXG5cbmludGVyZmFjZSBNYXRjaGVkQXR0ZW50aW9ucyB7XG4gICAgaW46IE1hdGNoZWRUb2tBdHQsXG4gICAgb3V0OiBNYXRjaGVkVG9rQXR0LFxufVxuXG4vKipcbiAqIEVWRU5UIFRZUEVTXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FdmVudCB7XG4gICAgc2VsPzogRDNTZWwsXG4gICAgc2lkZTogU2lkZU9wdGlvbnMsXG4gICAgaW5kOiBudW1iZXIgfCBcIm51bGxcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkVtYmVkZGluZ0V2ZW50IGV4dGVuZHMgVG9rZW5FdmVudCB7XG4gICAgZW1iZWRkaW5nczogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgSGVhZEJveEV2ZW50ID0ge1xuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyLFxuICAgIGhlYWQ6IG51bWJlcixcbn1cblxuLyoqXG4gKiBNSVNDRUxMQU5FT1VTIFRZUEVTXG4gKi9cblxuZXhwb3J0IHR5cGUgU2lkZU9wdGlvbnMgPSBcImxlZnRcIiB8IFwicmlnaHRcIlxuXG5leHBvcnQgZW51bSBUb2dnbGVkIHtcbiAgICBBRERFRCA9IDAsXG4gICAgUkVNT1ZFRCxcbn1cblxuZXhwb3J0IGVudW0gTm9ybUJ5IHtcbiAgICBST1cgPSAwLFxuICAgIENPTCxcbiAgICBBTExcbn1cblxuZXhwb3J0IGVudW0gTW9kZWxLaW5kIHtcbiAgICBCaWRpcmVjdGlvbmFsID0gXCJiaWRpcmVjdGlvbmFsXCIsXG4gICAgQXV0b3JlZ3Jlc3NpdmUgPSBcImF1dG9yZWdyZXNzaXZlXCJcbn1cbmV4cG9ydCB0eXBlIFRva2VuT3B0aW9ucyA9IFwiYVwiIHwgXCJiXCIgfCBcImFsbFwiXG5leHBvcnQgdHlwZSBTZW50ZW5jZU9wdGlvbnMgPSBcImFiXCIgfCBcImJhXCIgfCBcImFhXCIgfCBcImJiXCIgfCBcImFsbFwiOyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCB7IE1haW5HcmFwaGljIH0gZnJvbSAnLi92aXMvYXR0ZW50aW9uVmlzJ1xuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBiYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGVudGlvbi12aXMnKVxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IG1haW5WaXMgPSBuZXcgTWFpbkdyYXBoaWMoYmFzZSlcbiAgICBjb25zb2xlLmxvZyhcIkRvbmUgbG9hZGluZyB3aW5kb3dcIik7XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuL2V0Yy90eXBlc1wiXG5pbXBvcnQgKiBhcyB4XyBmcm9tIFwiLi9ldGMvX1Rvb2xzXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gXCIuL2V0Yy9VUkxIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyBoanNvbiBmcm9tICdoanNvbidcblxuY29uc3QgZmFsc2V5ID0gdmFsID0+IChuZXcgU2V0KFsnZmFsc2UnLCAwLCBcIm5vXCIsIGZhbHNlLCBudWxsLCBcIlwiXSkpLmhhcyh2YWwpXG5jb25zdCB0cnV0aHkgPSB2YWwgPT4gIWZhbHNleSh2YWwpXG5jb25zdCB0b051bWJlciA9IHggPT4gK3g7XG5cbi8vIE11c3QgYmUgb3B0aW9uYWwgcGFyYW1zIGZvciBpbml0aWFsaXphdGlvbnNcbmludGVyZmFjZSBVUkxQYXJhbWV0ZXJzIHtcbiAgICBzZW50ZW5jZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgbW9kZWxLaW5kPzogc3RyaW5nXG4gICAgbGF5ZXI/OiBudW1iZXJcbiAgICBoZWFkcz86IG51bWJlcltdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgdG9rZW5JbmQ/OiBudW1iZXIgfCAnbnVsbCdcbiAgICB0b2tlblNpZGU/OiB0cC5TaWRlT3B0aW9uc1xuICAgIG1hc2tJbmRzPzogbnVtYmVyW11cbiAgICBoaWRlQ2xzU2VwPzogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgVUlDb25maWcge1xuXG4gICAgcHJpdmF0ZSBfY29uZjogVVJMUGFyYW1ldGVycyA9IHt9XG4gICAgcHJpdmF0ZSBfaGVhZFNldDogU2V0PG51bWJlcj47XG4gICAgYXR0VHlwZTogXCJhYVwiXG4gICAgX25IZWFkczogbnVtYmVyIHwgbnVsbDtcbiAgICBfbkxheWVyczogbnVtYmVyIHwgbnVsbDtcbiAgICBwcml2YXRlIF90b2tlbjogdHAuVG9rZW5FdmVudDtcbiAgICBzdXBwb3J0ZWRNb2RlbHM6dHAuTW9kZWxDb25maWdbXVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX25IZWFkcyA9IDEyO1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRUeXBlID0gJ2FhJ1xuICAgICAgICB0aGlzLmZyb21VUkwoKVxuICAgICAgICB0aGlzLnRvVVJMKGZhbHNlKVxuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGQzLnRleHQoXCJjb25mL3N1cHBvcnRlZE1vZGVscy5oanNvblwiKS50aGVuKHR4dCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eHQpO1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0gaGpzb24ucGFyc2UodHh0KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25maWcgSEpTT046IFwiLCBvdXQpO1xuICAgICAgICAgICAgc2VsZi5zdXBwb3J0ZWRNb2RlbHMgPSBvdXQubW9kZWxzXG4gICAgICAgICAgICByZXR1cm4gb3V0Lm1vZGVsc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvVVJMKHVwZGF0ZUhpc3RvcnkgPSBmYWxzZSkge1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybCh0aGlzLl9jb25mLCB1cGRhdGVIaXN0b3J5KVxuICAgIH1cblxuXG4gICAgZnJvbVVSTCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZiA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBwYXJhbXNbJ21vZGVsJ10gfHwgJ2JlcnQtYmFzZS1jYXNlZCcsXG4gICAgICAgICAgICBtb2RlbEtpbmQ6IHBhcmFtc1snbW9kZWxLaW5kJ10gfHwgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogcGFyYW1zWydzZW50ZW5jZSddIHx8IFwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiLFxuICAgICAgICAgICAgbGF5ZXI6IHBhcmFtc1snbGF5ZXInXSB8fCAwLFxuICAgICAgICAgICAgaGVhZHM6IHRoaXMuX2luaXRIZWFkcyhwYXJhbXNbJ2hlYWRzJ10pLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBwYXJhbXNbJ3RocmVzaG9sZCddIHx8IDAuNyxcbiAgICAgICAgICAgIHRva2VuSW5kOiBwYXJhbXNbJ3Rva2VuSW5kJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIHRva2VuU2lkZTogcGFyYW1zWyd0b2tlblNpZGUnXSB8fCBudWxsLFxuICAgICAgICAgICAgbWFza0luZHM6IHBhcmFtc1snbWFza0luZHMnXSB8fCBbOV0sXG4gICAgICAgICAgICBoaWRlQ2xzU2VwOiB0cnV0aHkocGFyYW1zWydoaWRlQ2xzU2VwJ10pIHx8IHRydWUsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlbiA9IHsgc2lkZTogdGhpcy5fY29uZi50b2tlblNpZGUsIGluZDogdGhpcy5fY29uZi50b2tlbkluZCB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0SGVhZHModjogbnVtYmVyW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwgfHwgdi5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEhlYWRzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZFNldChuZXcgU2V0KHYpKS5fY29uZi5oZWFkcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkcygpXG4gICAgfVxuXG4gICAgbkhlYWRzKCk6IG51bWJlclxuICAgIG5IZWFkcyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuSGVhZHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uSGVhZHNcbiAgICAgICAgdGhpcy5fbkhlYWRzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbkxheWVycygpOiBudW1iZXJcbiAgICBuTGF5ZXJzKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIG5MYXllcnModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uTGF5ZXJzXG4gICAgICAgIHRoaXMuX25MYXllcnMgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vSGVhZHMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KF8ucmFuZ2UoMCwgdGhpcy5fbkhlYWRzKSkpXG4gICAgfVxuXG4gICAgc2VsZWN0Tm9IZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoW10pKVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYWQoaGVhZDogbnVtYmVyKTogdHAuVG9nZ2xlZCB7XG4gICAgICAgIGxldCBvdXQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWRTZXQoKS5oYXMoaGVhZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmRlbGV0ZShoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuUkVNT1ZFRFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KCkuYWRkKGhlYWQpO1xuICAgICAgICAgICAgb3V0ID0gdHAuVG9nZ2xlZC5BRERFRFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRocm91Z2ggc2V0dGVyIGZ1bmN0aW9uIHRvIGVuc3VyZSB1cmwgaXMgdXBkYXRlZFxuICAgICAgICB0aGlzLmhlYWRTZXQodGhpcy5oZWFkU2V0KCkpOyAvLyBJIGhhdGUgbXV0YWJsZSBkYXRhc3RydWN0dXJlcy4uLiBUaGlzIGlzIGNvbmZ1c2luZy5cblxuICAgICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9rZW4oZTogdHAuVG9rZW5FdmVudCk6IHRoaXMge1xuICAgICAgICBjb25zdCBwaWNrZXIgPSBSLnBpY2soWydpbmQnLCAnc2lkZSddKVxuICAgICAgICBjb25zdCBjb21wYXJlRXZlbnQgPSBwaWNrZXIoZSlcbiAgICAgICAgY29uc3QgY29tcGFyZVRva2VuID0gcGlja2VyKHRoaXMudG9rZW4oKSlcblxuICAgICAgICBpZiAoUi5lcXVhbHMoY29tcGFyZVRva2VuLCBjb21wYXJlRXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnJtVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4oZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9rZW4oKTogdHAuVG9rZW5FdmVudDtcbiAgICB0b2tlbih2YWw6IHRwLlRva2VuRXZlbnQpOiB0aGlzO1xuICAgIHRva2VuKHZhbD86IHRwLlRva2VuRXZlbnQpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuXG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWw7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5JbmQgPSB2YWwuaW5kO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuU2lkZSA9IHZhbC5zaWRlO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoYXNUb2tlbigpIHtcbiAgICAgICAgY29uc3QgY29uZiA9IHRoaXMuX2NvbmZcbiAgICAgICAgY29uc3QgYWN0dWFsbHlOdWxsID0gKChjb25mLnRva2VuSW5kID09IG51bGwpICYmIChjb25mLnRva2VuU2lkZSA9PSBudWxsKSlcbiAgICAgICAgY29uc3Qgc3RyTnVsbCA9IChjb25mLnRva2VuSW5kID09IFwibnVsbFwiKVxuICAgICAgICByZXR1cm4gKCFhY3R1YWxseU51bGwpICYmICghc3RyTnVsbClcbiAgICB9XG5cbiAgICBybVRva2VuKCkge1xuICAgICAgICB0aGlzLnRva2VuKHsgaW5kOiBudWxsLCBzaWRlOiBudWxsIH0pO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHNlbnRlbmNlKCk6IHN0cmluZztcbiAgICBzZW50ZW5jZSh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgc2VudGVuY2UodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5zZW50ZW5jZVxuXG4gICAgICAgIHRoaXMuX2NvbmYuc2VudGVuY2UgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCh0cnVlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRocmVzaG9sZCgpOiBudW1iZXI7XG4gICAgdGhyZXNob2xkKHZhbDogbnVtYmVyKTogdGhpcztcbiAgICB0aHJlc2hvbGQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLnRocmVzaG9sZDtcblxuICAgICAgICB0aGlzLl9jb25mLnRocmVzaG9sZCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkcygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25mLmhlYWRzXG4gICAgfVxuXG4gICAgbGF5ZXIoKTogbnVtYmVyXG4gICAgbGF5ZXIodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbGF5ZXIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5sYXllclxuXG4gICAgICAgIHRoaXMuX2NvbmYubGF5ZXIgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoZWFkU2V0KCk6IFNldDxudW1iZXI+O1xuICAgIGhlYWRTZXQodmFsOiBTZXQ8bnVtYmVyPik6IHRoaXM7XG4gICAgaGVhZFNldCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRTZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oZWFkU2V0ID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLmhlYWRzID0geF8uc2V0MlNvcnRlZEFycmF5KHRoaXMuX2hlYWRTZXQpXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoaWRlQ2xzU2VwKCk6IGJvb2xlYW47XG4gICAgaGlkZUNsc1NlcCh2YWw6IGJvb2xlYW4pOiB0aGlzO1xuICAgIGhpZGVDbHNTZXAodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmhpZGVDbHNTZXA7XG5cbiAgICAgICAgdGhpcy5fY29uZi5oaWRlQ2xzU2VwID0gdHJ1dGh5KHZhbCk7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbW9kZWwoKTogc3RyaW5nO1xuICAgIG1vZGVsKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBtb2RlbCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubW9kZWxcbiAgICAgICAgdGhpcy5fY29uZi5tb2RlbCA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbW9kZWxLaW5kKCk6IHN0cmluZztcbiAgICBtb2RlbEtpbmQodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsS2luZCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubW9kZWxLaW5kXG4gICAgICAgIHRoaXMuX2NvbmYubW9kZWxLaW5kID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIG9mZnNldCBuZWVkZWQgZm9yIHRoZSBtb2RlbEtpbmQgaW4gdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZWxLaW5kKCkpIHtcbiAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWw6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmU6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2hvd05leHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuICAgIGdldCBtYXRjaEhpc3RvZ3JhbURlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgPyBcIk5leHRcIiA6IFwiTWF0Y2hlZFwiXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBFZGdlLCBFZGdlRGF0YSB9IGZyb20gXCIuL0VkZ2VDb25uZWN0b3JcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG5leHBvcnQgdHlwZSBBdHRlbnRpb25EYXRhID0gbnVtYmVyW11bXVxuXG5leHBvcnQgY29uc3Qgc2NhbGVMaW5lYXJXaWR0aCA9IG9wYWNpdHkgPT4gNSAqIG9wYWNpdHleMC4zMztcblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbkdyYXBoIGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25EYXRhPntcbiAgICBjc3NfbmFtZSA9ICcnO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25EYXRhOyAvLyBUaGUgcGFzc2VkIGRhdGFcbiAgICBlZGdlRGF0YTogRWRnZURhdGE7IC8vIEEgd3JhcHBlciBhcm91bmQgX2RhdGEuIFVzZXIgc2hvdWxkIG5vdCBtaW5kXG4gICAgcGxvdERhdGE6IEVkZ2VbXTsgLy8gTmVlZGVkIGZvciBwbG90dGluZ1xuXG4gICAgLyoqIENPTVBPTkVOVFNcbiAgICAgKiBFeHBvc2UgdGhlIGNvbXBvbmVudHMgYmVsb25naW5nIHRvIHRoZSBjbGFzcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzcy4gXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY3JlYXRlIG1ldGhvZHMgdGhhdCBzcGVjaWZpY2FsbHkgbW9kaWZ5IGEgc2luZ2xlIHBhcnQgb3IgY29tcG9uZW50IHdpdGhvdXQgaGF2aW5nIHRvIHJlc2VsZWN0IGl0LiBcbiAgICAgKiBNYWtlcyBmb3IgbW9yZSByZXNwb25zaXZlIGFwcGxpY2F0aW9uc1xuICAgICAqICovXG4gICAgc3ZnOiBEM1NlbDtcbiAgICBncmFwaDogRDNTZWw7XG5cbiAgICAvLyBUaGUgYmVsb3cgY29tcG9uZW50cyByZXF1aXJlIGRhdGFcbiAgICBwYXRoczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlczogZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W107XG4gICAgbGlua0dlbjogZDMuTGluazxhbnksIGFueSwgYW55PlxuXG4gICAgLy8gT1BUSU9OUyBXSVRIIERFRkFVTFRTXG4gICAgX3RocmVzaG9sZCA9IDAuNzsgLy8gQWNjdW11bGF0aW9uIHRocmVzaG9sZC4gQmV0d2VlbiAwLTFcbiAgICBub3JtQnk6IHRwLk5vcm1CeVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHt9IC8vIE5vIGV2ZW50cyBuZWVkZWQgZm9yIHRoaXMgb25lXG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LCAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBkaXYgYm94ZXMgYXJvdW5kIHRoZSBTVkcgZWxlbWVudFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyBTaG91bGQgSSBvZmZzZXQgdGhlIGxlZnQgc2lkZSBieSAxIG9yIG5vdD9cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5ncmFwaCA9IHRoaXMuc3ZnLnNlbGVjdEFsbChgLmF0bi1jdXJ2ZWApO1xuICAgICAgICB0aGlzLmxpbmtHZW4gPSBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAueChkID0+IGRbMF0pXG4gICAgICAgICAgICAueShkID0+IGRbMV0pO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB3aGV0aGVyIHRvIHVzZSB0aGUgJ2onIG9yICdpJyBhdHRyaWJ1dGUgdG8gY2FsY3VsYXRlIG9wYWNpdGllc1xuICAgIHByaXZhdGUgc2NhbGVJZHgoKTogXCJpXCIgfCBcImpcIiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub3JtQnkpIHtcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkNPTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2onXG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5ST1c6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpJ1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQUxMOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaSdcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY29ubmVjdGlvbnMgYmV0d2VlbiBsb2NhdGlvbnMgb2YgdGhlIFNWRyB1c2luZyBEMydzIGxpbmtHZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUNvbm5lY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHJzKHtcbiAgICAgICAgICAgICAgICAnZCc6IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgc291cmNlOiBbbnVtYmVyLCBudW1iZXJdLCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gfSA9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogWzAsIG9wLmJveGhlaWdodCAqIChkLmkgKyAwLjUgKyBvcC5vZmZzZXQpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW29wLndpZHRoLCBvcC5ib3hoZWlnaHQgKiAoZC5qICsgMC41KV0gLy8gKyAyIGFsbG93cyBzbWFsbCBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0dlbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdhdG4tY3VydmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjLWlkeFwiLCAoZCwgaSkgPT4gZC5pKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGFyZ2V0LWlkeFwiLCAoZCwgaSkgPT4gZC5qKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgaGVpZ2h0IG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMub3B0aW9ucy5oZWlnaHQgKyAob3Aub2Zmc2V0ICogdGhpcy5vcHRpb25zLmJveGhlaWdodCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ZnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLm9wdGlvbnMud2lkdGgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBPcGFjaXR5IG9mIHRoZSBsaW5lcyBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlIG9mIHRoZSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVPcGFjaXR5KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGF0aHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gcGF0aHMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkW3NlbGYuc2NhbGVJZHgoKV1dKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2Rbc2VsZi5zY2FsZUlkeCgpXV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVMaW5lYXJXaWR0aCh2YWwpIC8vNSAqIHZhbF4wLjMzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXJlbmRlciB0aGUgZ3JhcGggaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRhdGEgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGggIT0gbnVsbCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmF0bi1jdXJ2ZVwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucGxvdERhdGFcblxuICAgICAgICAgICAgdGhpcy5wYXRocyA9IHRoaXMuZ3JhcGhcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIC5qb2luKCdwYXRoJyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBvcGFjaXR5IGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhLCBmcm9tIDAgdG8gbWF4IG9mIGNvbnRhaW5lZCBkYXRhXG4gICAgICogTm9ybWFsaXplIGJ5IGVhY2ggc291cmNlIHRhcmdldCwgb3IgYWNyb3NzIHRoZSB3aG9sZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2NhbGVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcbiAgICAgICAgbGV0IGFyciA9IFtdXG5cbiAgICAgICAgLy8gR3JvdXAgbm9ybWFsaXphdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMubm9ybUJ5KXtcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LlJPVzpcbiAgICAgICAgICAgICAgICBhcnIgPSB0aGlzLmVkZ2VEYXRhLmV4dGVudCgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5vcGFjaXR5U2NhbGVzIGFzIGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHZbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMC45XSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5DT0w6XG4gICAgICAgICAgICAgICAgYXJyID0gdGhpcy5lZGdlRGF0YS5leHRlbnQoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDAuOV0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQUxMOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heEluID0gZDMubWF4KHRoaXMucGxvdERhdGEubWFwKChkKSA9PiBkLnYpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMucHVzaChkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBtYXhJbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDFdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vciBub3JtaW5nIHNwZWNpZmllZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgZGF0YSBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgZGF0YSgpOiBBdHRlbnRpb25EYXRhXG4gICAgZGF0YSh2YWx1ZTogQXR0ZW50aW9uRGF0YSk6IHRoaXNcbiAgICBkYXRhKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZWRnZURhdGEgPSBuZXcgRWRnZURhdGEodmFsdWUpO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgaGVpZ2h0IGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBoZWlnaHQoKTogbnVtYmVyXG4gICAgaGVpZ2h0KHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgaGVpZ2h0KHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgd2lkdGggaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHdpZHRoKCk6IG51bWJlclxuICAgIHdpZHRoKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgd2lkdGgodmFsdWU/OiBudW1iZXIpOiB0aGlzIHwgbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSB0aHJlc2hvbGQgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHRocmVzaG9sZCgpOiBudW1iZXJcbiAgICB0aHJlc2hvbGQodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICB0aHJlc2hvbGQodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5zdmcuaHRtbCgnJylcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRGl2SG92ZXIsIERpdkhvdmVyT3B0cywgUG9pbnRzVG8gfSBmcm9tIFwiLi9EaXZIb3ZlclwiXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCJcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUZW5zb3IzRCB9IGZyb20gXCJAdGVuc29yZmxvdy90ZmpzXCI7XG5cbi8vIFRoZSBiZWxvdyB0d28gKGludGVyZmFjZSBhbmQgZnVuY3Rpb24pIGNhbiBiZWNvbWUgYSBjbGFzc1xuZXhwb3J0IHR5cGUgQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgcm93czogbnVtYmVyW11bXSxcbiAgICBsYWJlbHM6IG51bWJlcltdLFxuICAgIG1heDogbnVtYmVyLFxufVxuXG4vKipcbiAqIEZyb20gYW4gYXR0ZW50aW9uIG1hdHJpeCBzZWxlY3RlZCBieSBsYXllciwgc2hvdyBhIHN1bW1hcnkgb2YgdGhlIGF0dGVudGlvbnMgYmVsb25naW5nIHRvIGVhY2ggaGVhZC5cbiAqIFxuICogQHBhcmFtIGhlYWRNYXQgVGhlIG1hdHJpeCByZXByZXNlbnRpbmcgYWxsIHRoZSBhdHRlbnRpb25zIGJ5IGhlYWQgKGxheWVyIGFscmVhZHkgc2VsZWN0ZWQpIDxoZWFkLCBmcm9tLCB0bz5cbiAqIEBwYXJhbSBoZWFkTGlzdCBUaGUgaGVhZHMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAqIEBwYXJhbSBzaWRlIElzIHRoaXMgdGhlIHJpZ2h0IG9yIHRoZSBsZWZ0IGRpc3BsYXk/XG4gKiBAcGFyYW0gdG9rZW5JbmQgSWYgbm90IG51bGwsIHNlbGVjdCBqdXN0IHRoZSBpbmZvcm1hdGlvbiBmcm9tIGEgc2luZ2xlIHRva2VuIGFjcm9zcyBoZWFkc1xuICogQHJldHVybnMgSW5mb3JtYXRpb24gbmVlZGVkIHRvIGxhYmVsIHRoZSBoZWFkYm94XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRlbnRpb25JbmZvKGhlYWRNYXQ6IG51bWJlcltdW11bXSwgaGVhZExpc3Q6IG51bWJlcltdLCBzaWRlOiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9IFwibGVmdFwiLCB0b2tlbjogbnVsbCB8IHtpbmQ6IG51bWJlciwgc2lkZTogXCJsZWZ0XCIgfCBcInJpZ2h0XCJ9PW51bGwpOiBBdHRlbnRpb25IZWFkQm94SSB7XG4gICAgLy8gQ29sbGVjdCBvbmx5IGZyb20gaGVhZGxpc3QsIGF2ZXJhZ2UgZWFjaCBoZWFkLCB0cmFuc3Bvc2UgdG8gZWFzZSBpdGVyYXRpb25cbiAgICBpZiAoaGVhZExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IFtbXV0sXG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGRpbSA9IG51bGxcbiAgICAvLyBPbmx5IGNoYW5nZSB0aGUgYXR0ZW50aW9uIGdyYXBoIG9wcG9zaXRlIHNlbGVjdGVkIHRva2VuXG4gICAgaWYgKHRva2VuICE9IG51bGwgJiYgKHRva2VuLnNpZGUgIT0gc2lkZSkpIHtcbiAgICAgICAgZGltID0gdG9rZW4uc2lkZSA9PSBcImxlZnRcIiA/IC0yIDogLTEgLy8gQXNzaWduIHRvIFwiZnJvbVwiIGRpcmVjdGlvbiBpZiBcImxlZnRcIiBcbiAgICB9XG5cbiAgICBsZXQgYXhpczogbnVtYmVyID0gc2lkZSA9PSBcImxlZnRcIiA/IDIgOiAxO1xuXG4gICAgLy8gYXZlcmFnZSBhY3Jvc3MgdGhlIGF4aXMgcmVwcmVzZW50aW5nIHRoZSBhdHRlbnRpb25zLlxuICAgIGxldCBnYXRoZXJlZE1hdCA9IHRmLnRlbnNvcjNkKGhlYWRNYXQpXG4gICAgaWYgKGRpbSAhPSBudWxsKSB7XG4gICAgICAgIGdhdGhlcmVkTWF0ID0gZ2F0aGVyZWRNYXQuZ2F0aGVyKFt0b2tlbi5pbmRdLCBkaW0pXG4gICAgfVxuICAgIGxldCBuZXdNYXQgPSBnYXRoZXJlZE1hdC5nYXRoZXIoaGVhZExpc3QsIDApLm1lYW4oW2F4aXNdKS50cmFuc3Bvc2UoKTtcblxuICAgIGNvbnN0IHJvd0luZm8gPSA8bnVtYmVyW11bXT5uZXdNYXQuYXJyYXlTeW5jKCk7XG5cbiAgICBjb25zdCBvdXQ6IEF0dGVudGlvbkhlYWRCb3hJID0ge1xuICAgICAgICByb3dzOiByb3dJbmZvLFxuICAgICAgICBsYWJlbHM6IGhlYWRMaXN0LFxuICAgICAgICBtYXg6IDxudW1iZXI+bmV3TWF0Lm1heCgpLmFycmF5U3luYygpLFxuICAgIH1cblxuICAgIHJldHVybiBvdXRcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnRPcHRpb25zIHtcbiAgICBoZWFkSGVpZ2h0OiBudW1iZXJcbiAgICBoZWFkV2lkdGg6IG51bWJlclxuICAgIHhQYWQ6IG51bWJlclxuICAgIHlQYWQ6IG51bWJlclxuICAgIGJveFdpZHRoOiBudW1iZXJcbiAgICB0b3RhbFdpZHRoOiBudW1iZXJcbiAgICB0b3RhbEhlaWdodDogbnVtYmVyXG59O1xuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uSGVhZEJveCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uSGVhZEJveEk+e1xuICAgIGNzc19uYW1lID0gJyc7XG4gICAgcm93Q3NzTmFtZSA9ICdhdHQtaGVhZCc7XG4gICAgYm94Q3NzTmFtZSA9ICdhdHQtcmVjdCc7XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU92ZXJcIixcbiAgICAgICAgcm93TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU91dFwiLFxuICAgICAgICBib3hNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU92ZXJcIixcbiAgICAgICAgYm94TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU91dFwiLFxuICAgICAgICBib3hNb3VzZU1vdmU6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU1vdmVcIixcbiAgICAgICAgYm94Q2xpY2s6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hDbGlja1wiLFxuICAgIH07XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uSGVhZEJveEk7XG5cbiAgICBfY3VycmVudDogUGFydGlhbDxDdXJyZW50T3B0aW9ucz4gPSB7fVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94RGltOiAyNixcbiAgICAgICAgeXNjYWxlOiAxLCAvLyBBbW91bnQgdG8gc2NhbGUgYm94aGVpZ2h0IHRvIGdldCBpbmRpdmlkdWFsIGhlYWRzXG4gICAgICAgIHhzY2FsZTogMC41LCAvLyBBbW91bnQgdG8gc2NhbGUgYm94d2lkdGggdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgc2lkZTogXCJsZWZ0XCIsXG4gICAgICAgIG1heFdpZHRoOiAyMDAsIC8vIE1heGltdW0gd2lkdGggb2YgU1ZHXG4gICAgICAgIG9mZnNldDogMCwgLy8gQ2hhbmdlIHRvIDEgaWYgeW91IGRlc2lyZSB0aGUgb2Zmc2V0IHZpc3VhbGl6YXRpb24gZm9yIEF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgIH07XG5cbiAgICAvLyBEMyBDb21wb25lbnRzXG4gICAgaGVhZFJvd3M6IEQzU2VsO1xuICAgIGhlYWRDZWxsczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT47XG5cbiAgICBob3Zlck9wczogUGFydGlhbDxEaXZIb3Zlck9wdHM+ID0geyBcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgd2lkdGg6IDcwLFxuICAgICAgICBwb2ludHNUbzogUG9pbnRzVG8uQm90dG9tUmlnaHQsXG4gICAgICAgIGF1dG9WaXNpYmlsaXR5OiBmYWxzZVxuICAgIH1cblxuICAgIGRpdkhvdmVyOiBEaXZIb3ZlclxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5oZWFkUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3Muc2VsZWN0QWxsKGAke3RoaXMuYm94Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDFdKTtcbiAgICAgICAgdGhpcy5kaXZIb3ZlciA9IG5ldyBEaXZIb3ZlcihkMy5zZWxlY3QodGhpcy5wYXJlbnQubm9kZSgpLnBhcmVudE5vZGUpLCB0aGlzLmV2ZW50SGFuZGxlciwgdGhpcy5ob3Zlck9wcykgLy8gQmVjYXVzZSB0aGUgcGFyZW50IGlzIGFuIFNWRywgd2UgbmVlZCB0byBnZXQgdGhlIGNvbnRhaW5pbmcgZGl2XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+IHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5fY3VycmVudFxuXG4gICAgICAgIGNvbnN0IG5IZWFkcyA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGhcbiAgICAgICAgY29uc3QgYmFzZUhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZVxuXG4gICAgICAgIC8vIFNjYWxlIGhlYWR3aWR0aCBhY2NvcmRpbmcgdG8gbWF4aW11bSB3aWR0aFxuICAgICAgICBjb25zdCBnZXRIZWFkU2NhbGUgPSAobkgpID0+IChNYXRoLm1pbihvcC5tYXhXaWR0aCAvIG5ILCBiYXNlSGVhZFdpZHRoKSAvIGJhc2VIZWFkV2lkdGgpICogb3AueHNjYWxlO1xuXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gZ2V0SGVhZFNjYWxlKG5IZWFkcykgKiBvcC5ib3hEaW07XG4gICAgICAgIGN1ci54UGFkID0gY3VyLmhlYWRXaWR0aDtcbiAgICAgICAgY3VyLnlQYWQgPSAob3AuYm94RGltIC0gY3VyLmhlYWRIZWlnaHQpIC8gMjtcblxuICAgICAgICBjb25zdCBnZXRCb3hXaWR0aCA9IChoZWFkV2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heEJ3aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ3aWR0aCA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlTGluZWFyXG4gICAgICAgICAgICBpZiAoYndpZHRoID4gbWF4QndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiAodGhpcy5fZGF0YS5yb3dzLmxlbmd0aCArIG9wLm9mZnNldCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XG4gICAgfVxuICAgIFxuICAgIG1ha2VIdG1sRm9yUG9wdXAoaDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGA8Yj5IZWFkOjwvYj4gJHtofWAgLy8gSW5jcmVtZW50IGJ5IDEgZm9yIGRpc3BsYXlcbiAgICAgICAgY29uc29sZS5sb2cob3V0KTtcbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBib3hFdmVudCA9IChpKSA9PiB7IHJldHVybiB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgaGVhZDogc2VsZi5fZGF0YS5sYWJlbHNbaV0gfSB9XG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudXBkYXRlQ3VycmVudCgpXG5cbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcblxuICAgICAgICB0aGlzLnBhcmVudFxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBjdXIudG90YWxXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGN1ci50b3RhbEhlaWdodClcblxuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShzZWxmLl9kYXRhLnJvd3MpXG4gICAgICAgICAgICAuam9pbihcImdcIilcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgY2xhc3M6IChkLCBpKSA9PiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1ci54UGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IChvcC5ib3hEaW0gKiAoaSArIG9wLm9mZnNldCkpICsgY3VyLnlQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5ib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGN1ci5oZWFkSGVpZ2h0LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3NcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHg6IChkLCBpKSA9PiBpICogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB0aGlzLmJveENzc05hbWUsXG4gICAgICAgICAgICAgICAgaGVhZDogKGQsIGkpID0+IHNlbGYuX2RhdGEubGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogKGQ6IG51bWJlcikgPT4gdGhpcy5vcGFjaXR5U2NhbGUoZCksXG4gICAgICAgICAgICAgICAgZmlsbDogXCJibHVlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQ6bnVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5odG1sKHNlbGYubWFrZUh0bWxGb3JQb3B1cChpICsgMSkpXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zaG93KClcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLmhpZGUoKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IHNlbGYub3B0aW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcblxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgYmFzZVg6IGdldEJhc2VYKCksIGJhc2VZOiBnZXRCYXNlWSgpLCBtb3VzZTogbW91c2UgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyAoc2VsZi5fZGF0YS5sYWJlbHNbaV0gKyAxKSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcidcblxuZXhwb3J0IGVudW0gUG9pbnRzVG8ge1xuICAgIFRvcExlZnQgPSAwLFxuICAgIFRvcFJpZ2h0LFxuICAgIEJvdHRvbVJpZ2h0LFxuICAgIEJvdHRvbUxlZnQsXG4gICAgVG9wTWlkLFxuICAgIFJpZ2h0TWlkLFxuICAgIEJvdHRvbU1pZCxcbiAgICBMZWZ0TWlkLFxufVxuXG5jb25zdCBQb2ludHNUb1NpZGVzID0ge1xuICAgIHggOiB7XG4gICAgICAgIGxlZnQ6IG5ldyBTZXQoW1BvaW50c1RvLkJvdHRvbUxlZnQsIFBvaW50c1RvLkxlZnRNaWQsIFBvaW50c1RvLlRvcExlZnRdKSxcbiAgICAgICAgbWlkOiBuZXcgU2V0KFtQb2ludHNUby5Cb3R0b21NaWQsIFBvaW50c1RvLlRvcE1pZF0pLFxuICAgICAgICByaWdodDogbmV3IFNldChbUG9pbnRzVG8uUmlnaHRNaWQsIFBvaW50c1RvLkJvdHRvbVJpZ2h0LCBQb2ludHNUby5Ub3BSaWdodF0pXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICAgIHRvcDogbmV3IFNldChbUG9pbnRzVG8uVG9wTGVmdCwgUG9pbnRzVG8uVG9wTWlkLCBQb2ludHNUby5Ub3BSaWdodF0pLFxuICAgICAgICBtaWQ6IG5ldyBTZXQoW1BvaW50c1RvLlJpZ2h0TWlkLCBQb2ludHNUby5MZWZ0TWlkXSksXG4gICAgICAgIGJvdHRvbTogbmV3IFNldChbUG9pbnRzVG8uQm90dG9tUmlnaHQsIFBvaW50c1RvLkJvdHRvbU1pZCwgUG9pbnRzVG8uQm90dG9tTGVmdF0pLFxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXZIb3Zlck9wdHMge1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIG1heFJhZGl1czogbnVtYmVyIC8vIFJhZGl1cyBvZiB0aGUgbm9uLXBvaW50aW5nIGNvcm5lcnNcbiAgICBtaW5SYWRpdXM6IG51bWJlciAvLyBSYWRpdXMgb2YgdGhlIHBvaW50aW5nIGNvcm5lclxuICAgIHBvaW50c1RvOiBQb2ludHNUb1xuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nXG4gICAgZm9udFNpemU6IG51bWJlclxuICAgIHRpdGxlOiBzdHJpbmdcbiAgICBhdXRvVmlzaWJpbGl0eTogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpdkhvdmVyU2VscyB7XG4gICAgcGFyZW50OiBEM1NlbFxuICAgIHRpdGxlOiBEM1NlbFxuICAgIGNvbnRlbnQ6IEQzU2VsXG59XG5cbmNvbnN0IGdldFZpZXdUb3AgPSAoKSA9PiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbmNvbnN0IGdldFZpZXdMZWZ0ID0gKCkgPT4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXG5jb25zdCBFVkVOVFMgPSB7fVxuXG50eXBlIERJID0gc3RyaW5nW11cblxuLy8gQSBob3ZlciBib3ggdGhhdCBjYW4gYmUgYWRkZWQgdG8gdGhlIGJhc2Ugb2YgYW55IGNsYXNzIGFuZCBjdXN0b21pemVkIHRvIGZpdCB0aGUgdGV4dCBkZXNpcmVkXG5leHBvcnQgY2xhc3MgRGl2SG92ZXIgZXh0ZW5kcyBWQ29tcG9uZW50PERJPntcbiAgICBjc3NfbmFtZSA9IFwibWF0LWhvdmVyLWRpc3BsYXlcIlxuXG4gICAgb3B0aW9uczogRGl2SG92ZXJPcHRzID0ge1xuICAgICAgICB3aWR0aDogODAsXG4gICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgIG1heFJhZGl1czogOCxcbiAgICAgICAgbWluUmFkaXVzOiAxLFxuICAgICAgICBwb2ludHNUbzogUG9pbnRzVG8uVG9wTGVmdCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMDAsIDIwMCwgMjAwLCAwLjkzKScsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgdGl0bGU6IFwiXCIsIC8vIEhUTUwgc3RyaW5nIHRvIHNlcnZlIGFzIGEgdGl0bGUgZm9yIHRoZSBkaXZcbiAgICAgICAgYXV0b1Zpc2liaWxpdHk6IHRydWUsIC8vIFVzZSBhIGZ1bmN0aW9uIHRvIHRyaWdnZXIgdmlzaWJsZSBhbmQgaGlkZGVuIHJhdGhlciBiYXNlZCBvbiBwYXJlbnRcbiAgICB9XG5cbiAgICBfY3VycmVudCA9IHtcbiAgICAgICAgaHRtbDogXCJcIlxuICAgIH1cblxuICAgIHNlbHM6IFBhcnRpYWw8RGl2SG92ZXJTZWxzPiA9IHt9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0gRVZFTlRTXG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgb3B0aW9uc1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIGdldCByYWRpdXNFZGdlcygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgYiA9IG9wLm1heFJhZGl1cztcbiAgICAgICAgY29uc3QgcyA9IG9wLm1pblJhZGl1c1xuICAgICAgICAvLyBsZXQgYm9yZGVyUmFkaXVzID0gXCI4cHggOHB4IDFweCA4cHhcIiAvLyB0b3BsZWZ0LCB0b3ByaWdodCwgYm90dG9tcmlnaHQsIGJvdHRvbWxlZnRcbiAgICAgICAgbGV0IGJvcmRlclJhZGl1czogbnVtYmVyW11cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucG9pbnRzVG8pIHtcbiAgICAgICAgICAgIGNhc2UgUG9pbnRzVG8uVG9wTGVmdDoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9IFtzLCBiLCBiLCBiXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBvaW50c1RvLlRvcFJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gW2IsIHMsIGIsIGJdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgUG9pbnRzVG8uQm90dG9tUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBbYiwgYiwgcywgYl1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBQb2ludHNUby5Cb3R0b21MZWZ0OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gW2IsIGIsIGIsIHNdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBbYiwgYiwgYiwgYl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9yZGVyUmFkaXVzLm1hcCh2ID0+IGAke3Z9cHhgKS5qb2luICgnICcpXG4gICAgfVxuXG4gICAgZ2V0QmFzZVgobW91c2U6IFtudW1iZXIsIG51bWJlcl0pOiBudW1iZXIge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBkaXIgPSBvcC5wb2ludHNUb1xuICAgICAgICBjb25zdCBlZGdlcyA9IFBvaW50c1RvU2lkZXMueFxuICAgICAgICBjb25zdCBtb3VzZU9mZnNldCA9IGVkZ2VzLnJpZ2h0LmhhcyhkaXIpID8gbW91c2VbMF0gLSBvcC53aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVkZ2VzLm1pZC5oYXMoZGlyKSA/IG1vdXNlWzBdIC0gKG9wLndpZHRoIC8gMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb3VzZVswXSBcblxuICAgICAgICBjb25zdCBiYXNlWCA9IHRoaXMucGFyZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IHNjcm9sbFggPSBnZXRWaWV3TGVmdCgpXG4gICAgICAgIHJldHVybiBiYXNlWCArIHNjcm9sbFggKyBtb3VzZU9mZnNldFxuICAgIH1cblxuICAgIGdldEJhc2VZKG1vdXNlOiBbbnVtYmVyLCBudW1iZXJdKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgZGlyID0gb3AucG9pbnRzVG9cbiAgICAgICAgY29uc3QgZWRnZXMgPSBQb2ludHNUb1NpZGVzLnlcbiAgICAgICAgY29uc3QgbW91c2VPZmZzZXQgPSBlZGdlcy5taWQuaGFzKGRpcikgPyBtb3VzZVsxXSAtIChvcC5oZWlnaHQgLyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVkZ2VzLmJvdHRvbS5oYXMoZGlyKSA/IG1vdXNlWzFdIC0gKG9wLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtb3VzZVsxXVxuXG4gICAgICAgIGNvbnN0IGJhc2VZID0gdGhpcy5wYXJlbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICBjb25zdCBzY3JvbGxZID0gZ2V0Vmlld1RvcCgpXG4gICAgICAgIHJldHVybiBiYXNlWSArIHNjcm9sbFkgKyBtb3VzZU9mZnNldFxuICAgIH1cblxuICAgIGh0bWwoKTogc3RyaW5nXG4gICAgaHRtbCh2YWw6c3RyaW5nKTogdGhpc1xuICAgIGh0bWwodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Lmh0bWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuaHRtbCA9IHZhbFxuICAgICAgICB0aGlzLnNlbHMuY29udGVudC5odG1sKHZhbClcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHNlbHMucGFyZW50ID0gdGhpcy5wYXJlbnRcblxuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBvcC5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCAnMHB4JylcbiAgICAgICAgICAgIC5zdHlsZSgndG9wJywgJzBweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCB0aGlzLnJhZGl1c0VkZ2VzKVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBgJHtvcC5mb250U2l6ZX1weGApXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgLmh0bWwob3AudGl0bGUpXG4gICAgICAgICAgICAuc3R5bGUoJ21hcmdpbi1sZWZ0JywgJzRweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ21hcmdpbi1ib3R0b20nLCAnMnB4JylcblxuICAgICAgICBzZWxzLmNvbnRlbnQgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLnN0eWxlKCdtYXJnaW4tbGVmdCcsICc4cHgnKVxuXG4gICAgICAgIHNlbHMucGFyZW50Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5wYXJlbnQubm9kZSgpKVxuICAgICAgICAgICAgc2VsZi5iYXNlLnN0eWxlKCdsZWZ0JywgYCR7c2VsZi5nZXRCYXNlWChtb3VzZSl9cHhgKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgYCR7c2VsZi5nZXRCYXNlWShtb3VzZSl9cHhgKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHtvcC53aWR0aH1weGApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBgJHtvcC5oZWlnaHR9cHhgKVxuICAgICAgICB9KVxuICAgICAgICBzZWxzLnBhcmVudC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9wLmF1dG9WaXNpYmlsaXR5ICYmIHNlbGYuYmFzZS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICB9KVxuICAgICAgICBzZWxzLnBhcmVudC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvcC5hdXRvVmlzaWJpbGl0eSAmJiBzZWxmLmJhc2Uuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgIH0pXG5cbiAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBwYnNpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC45Myk7XG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xuICAgIC8vIHAge1xuICAgIC8vICAgbWFyZ2luOiA0cHggMXB4IDFweCA0cHg7XG4gICAgLy8gICAvLyBtYXJnaW46IGF1dG87XG4gICAgLy8gfVxuICAgIH1cbiAgICBcbiAgICBfd3JhbmdsZSgpIHt9XG5cbiAgICBfcmVuZGVyKGRhdGE6IERJKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJ3AnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdwJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZClcbiAgICB9XG5cbiAgICB0aXRsZSgpOiBzdHJpbmdcbiAgICB0aXRsZSh2YWw6c3RyaW5nKTogdGhpc1xuICAgIHRpdGxlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlID0gdmFsXG4gICAgICAgIHRoaXMuc2Vscy50aXRsZS5odG1sKHZhbClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgYXUgZnJvbSAnLi4vZXRjL2FycmF5VXRpbHMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuaW1wb3J0IHsgVHlwZWRBcnJheSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGdlIHtcbiAgICBpOiBudW1iZXIsIC8vIFNvdXJjZSBpbmRleFxuICAgIGo6IG51bWJlciwgLy8gVGFyZ2V0IGluZGV4XG4gICAgdjogbnVtYmVyLCAvLyBWYWx1ZVxufVxuXG4vKipcbiAqIENvbnZlcnQgZGF0YSBtYXRyaXggdG8gbmVjZXNzYXJ5IGRhdGEgYXJyYXkgdG8gcGFzcyB0byBTVkcgY29ubmVjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRWRnZXMgKGRhdGE6bnVtYmVyW11bXSwgY3V0b2ZmQW10PTEpIDogRWRnZVtdIHtcbiAgICBsZXQgb3V0QXJyOiBFZGdlW10gPSBbXTtcbiAgICBsZXQgY3V0b2ZmOiBudW1iZXI7XG4gICAgZGF0YS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgY3V0b2ZmID0gY3V0b2ZmQW10ICogZDMuc3VtKHJvdyk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyOmF1LlNvcnRBcnJheSA9IGF1LnNvcnRXaXRoSW5kaWNlcyhyb3cpO1xuXG4gICAgICAgIHNvcnRlZEFyci5hcnIuZm9yRWFjaCgodixqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iajogRWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaTogaSxcbiAgICAgICAgICAgICAgICAgICAgajogc29ydGVkQXJyLnNvcnRJbmRpY2VzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2OiB2LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRBcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gb3V0QXJyO1xufVxuLyoqXG4gKiBDbGFzcyBmb3IgaW1wbGVtZW50aW5nIG9wZXJhdGlvbnMgb24gQXR0ZW50aW9uR3JhcGggaW1wbGVtZW50YXRpb24uIFxuICogQ2xvc2VseSB0aWVkIHRvIFtbQXR0ZW50aW9uQ29ubmVjdG9yXV1cbiAqL1xuZXhwb3J0IGNsYXNzIEVkZ2VEYXRhIHtcbiAgICByZWFkb25seSB0ZW5zRGF0YTp0Zi5UZW5zb3I7XG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGRhdGE6bnVtYmVyW11bXSl7XG4gICAgICAgIHRoaXMudGVuc0RhdGEgPSB0Zi50ZW5zb3IoZGF0YSk7XG4gICAgfVxuXG4gICAgbWluKGF4aXM/Om51bWJlcik6VHlwZWRBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1pbihheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIG1heChheGlzPzpudW1iZXIpOlR5cGVkQXJyYXl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1heChheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIGV4dGVudChheGlzPzpudW1iZXIpOm51bWJlcltdW10ge1xuICAgICAgICByZXR1cm4gZDMuemlwKHRoaXMubWluKGF4aXMpLCB0aGlzLm1heChheGlzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIGRhdGEgdG8gc2VuZCB0byBTVkcgY2hhcnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGFjY3VtdWxhdGVUaHJlc2ggLSBBIGZsb2F0IGJldHdlZW4gMCBhbmQgMSwgaW5kaWNhdGluZyB0aGUgYW1vdW50IG9mIHdlaWdodCB0byBkaXNwbGF5LiBEZWZhdWx0cyB0byAwLjcuXG4gICAgICovXG4gICAgZm9ybWF0IChhY2N1bXVsYXRlVGhyZXNoPTAuNyk6RWRnZVtdIHtcbiAgICAgICAgcmV0dXJuIHRvRWRnZXModGhpcy5kYXRhLCBhY2N1bXVsYXRlVGhyZXNoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGl2SG92ZXIsIFBvaW50c1RvIH0gZnJvbSBcIi4vRGl2SG92ZXJcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxudHlwZSBpbmZvRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIpID0+IHRwLlRva2VuRXZlbnRcbnR5cGUgaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsOiBEM1NlbCwgaTogbnVtYmVyLCBlbWJlZDogbnVtYmVyW10pID0+IHRwLlRva2VuRW1iZWRkaW5nRXZlbnRcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRleHRUb2tlbnMgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT57XG5cbiAgICBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3QgaG92ZXJfY3NzX25hbWU6IHN0cmluZ1xuICAgIGFic3RyYWN0IHNpZGU6IHRwLlNpZGVPcHRpb25zXG4gICAgZUluZm86IGluZm9FdmVudEZyb21JID0gKHNlbCwgaSkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGkgfSB9XG4gICAgZUVtYmVkZGluZzogaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsLCBpLCBlbWJlZCkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGksIGVtYmVkZGluZ3M6IGVtYmVkIH0gfVxuICAgIGRpdkhvdmVyOiBEaXZIb3ZlclxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgdG9rZW5Nb3VzZU92ZXI6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdmVyXCIsXG4gICAgICAgIHRva2VuTW91c2VPdXQ6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdXRcIixcbiAgICAgICAgdG9rZW5DbGljazogXCJUZXh0VG9rZW5fVG9rZW5DbGlja1wiLFxuICAgICAgICB0b2tlbkRibENsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkRibENsaWNrXCIsXG4gICAgfTtcblxuICAgIGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXTtcblxuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIGRpdk9wcyA9IHtcbiAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIG9mZnNldDogWzMsIDNdLFxuICAgICAgICB0aXRsZTogXCJXb3VsZCBwcmVkaWN0Li4uXCIsXG4gICAgICAgIHBvaW50c1RvOiBQb2ludHNUby5Ub3BSaWdodCxcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgfTtcblxuICAgIHRleHRCb3hlczogRDNTZWxcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbWFzayhtYXNrSW5kczogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2VsZWN0QWxsKGAuJHt0aGlzLmNzc19uYW1lfWApXG4gICAgICAgICAgICAuZWFjaCgoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgICAgICAgIHNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsIF8uaW5jbHVkZXMobWFza0luZHMsIGkpKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRFbWJlZGRpbmcoaW5kOiBudW1iZXIpOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaW5kXVxuICAgIH1cblxuICAgIF9pbml0KCkgeyB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgbWFrZVBvcHVwKCkge1xuICAgICAgICBjb25zdCBkaXZPcHMgPSB0aGlzLmRpdk9wc1xuICAgICAgICB0aGlzLmRpdkhvdmVyID0gbmV3IERpdkhvdmVyKHRoaXMucGFyZW50LCB0aGlzLmV2ZW50SGFuZGxlciwgZGl2T3BzKVxuICAgIH1cblxuICAgIG1ha2VIdG1sRm9yUG9wdXAodG9rZW46IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm8pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBvdXQgPSBSLnppcCh0b2tlbi50b3BrX3dvcmRzLCB0b2tlbi50b3BrX3Byb2JzKS5tYXAodyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gd1swXS5yZXBsYWNlKC9cXHUwMTIwL2csIFwiIFwiKS5yZXBsYWNlKC9cXHUwMTBBL2csIFwiXFxcXG5cIilcbiAgICAgICAgICAgIGNvbnN0IHByb2IgPSB3WzFdLnRvRml4ZWQoMilcbiAgICAgICAgICAgIHJldHVybiBgPGI+JHtuYW1lfTwvYj46ICAgICR7cHJvYn1gXG4gICAgICAgIH0pLm1hcCh2ID0+IGAke3Z9PGJyPmApLmpvaW4oJycpXG4gICAgICAgIHJldHVybiBvdXRcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIFJlc2V0IHRva2VuIGRpc3BsYXlcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKClcblxuICAgICAgICAvLyBBZGQgYmxhbmsgZGl2c1xuICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgb2Zmc2V0ICgke3RoaXMuc2lkZX0pOiBgLCBvcC5vZmZzZXQpO1xuICAgICAgICBjb25zdCBibGFua0RpdnMgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuYmxhbmstdGV4dC1ib3hgKVxuXG4gICAgICAgIGJsYW5rRGl2cy5kYXRhKFIucmFuZ2UoMCwgb3Aub2Zmc2V0KSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImJsYW5rLXRleHQtYm94XCIsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChcInRva2VuXCIsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBcIiAgXCIpXG5cbiAgICAgICAgLy8gUmVuZGVyIG5vcm1hbCB0ZXh0IGJveCBkYXRhXG4gICAgICAgIHNlbGYudGV4dEJveGVzID0gPEQzU2VsPnRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbihcImRpdlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4gYHRva2VuICR7dGhpcy5jc3NfbmFtZX0gdG9rZW4tJHtpfWApXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBgJHt0aGlzLmNzc19uYW1lfS0ke2l9YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0Jywgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudGV4dC5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIikucmVwbGFjZShcIlxcdTAxMEFcIiwgXCJcXFxcblwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsLnN0eWxlKCdiYWNrZ3JvdW5kJywgJ2xpZ2h0Ymx1ZScpO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLmh0bWwoc2VsZi5tYWtlSHRtbEZvclBvcHVwKGQpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGxldCBzZWwgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsLnN0eWxlKCdiYWNrZ3JvdW5kJywgMClcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdXQsIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5hZGRDbGljayhzZWxmLnRleHRCb3hlcylcbiAgICB9XG5cbiAgICBhZGRDbGljayh0ZXh0Ym94ZXM6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYudGV4dEJveGVzID0gdGV4dGJveGVzXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCBzZWxmLmVFbWJlZGRpbmcoc2VsLCBpLCBkLmVtYmVkZGluZ3MpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZGJsY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcblxuICAgIGNzc19uYW1lID0gJ2xlZnQtdG9rZW4nO1xuICAgIGhvdmVyX2Nzc19uYW1lID0gJ2xlZnQtdG9rZW4taG92ZXInXG4gICAgc2lkZTogdHAuU2lkZU9wdGlvbnMgPSAnbGVmdCc7XG4gICAgb2Zmc2V0OiBudW1iZXIgPSAxO1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMubWFrZVBvcHVwKClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaWdodFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuICAgIGNzc19uYW1lID0gJ3JpZ2h0LXRva2VuJztcbiAgICBob3Zlcl9jc3NfbmFtZSA9ICdyaWdodC10b2tlbi1ob3ZlcidcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdyaWdodCdcbiAgICBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBkaXZPcHMgPSB7XG4gICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICBvZmZzZXQ6IFszLCAzXSxcbiAgICAgICAgdGl0bGU6IFwiV291bGQgcHJlZGljdC4uLlwiLFxuICAgICAgICBwb2ludHNUbzogUG9pbnRzVG8uVG9wTGVmdCxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5tYWtlUG9wdXAoKVxuICAgIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtEM1NlbCwgVXRpbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7U1ZHfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICogXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKVxuICogXG4gKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG5cbiAgICAvLyBTVEFUSUMgRklFTERTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuXG4gICAgc3RhdGljIGV2ZW50czoge30gPSB7bm9FdmVudDogJ1ZDb21wb25lbnRfbm9FdmVudCd9O1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGF5ZXJzIGluIFNWRyAgZm9yIGJnLG1haW4sZmcsLi4uXG4gICAgICovXG4gICAgLy8gcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGxheW91dDogeyBuYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyW10gfVtdID0gW3tuYW1lOiAnbWFpbicsIHBvczogWzAsIDBdfV07XG5cbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZzsgLy8gTW9zdGx5IG9ic29sZXRlLCBuaWNlIHRvIGhhdmUgc2ltcGxlIElEIHRvIGFzc2lnbiBpbiBDU1NcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBEM1NlbDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcm90ZWN0ZWQgYmFzZTogRDNTZWw7IC8vIE1vc3RseSBvYnNvbGV0ZSwgcmVwcmVzZW50cyA8Zz4gaW4gc3ZnXG4gICAgcHJvdGVjdGVkIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07IC8vIFN0aWxsIHVzZWZ1bFxuICAgIHByb3RlY3RlZCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlcjtcbiAgICBwcm90ZWN0ZWQgX3Zpc2liaWxpdHk6IHsgaGlkZGVuOiBib29sZWFuLCBoaWRlRWxlbWVudD86IEQzU2VsIHwgbnVsbDsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIEVuYWJsZXMgdHJhbnNpdGlvbnMgZnJvbSB2aXNpYmxlIHRvIGludmlzaWJsZS4gTW9zdGx5IG9ic29sZXRlLlxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogYW55OyAvLyBVbm5lY2Vzc2FyeVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nOyAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jdXJyZW50OiB7fTsgLy8gUHJpdmF0ZSBzdGF0ZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhlIG9iamVjdCBpdHNlbGYuXG5cbiAgICAvLyBDT05TVFJVQ1RPUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBjb25zdHJ1Y3Rvci4gU3ViY2xhc3NlcyBzaG91bGQgY2FsbCBAc3VwZXJJbml0KG9wdGlvbnMpIGFzIHdlbGwuXG4gICAgICogc2VlIHdoeSBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MzU5NTk0My93aHktYXJlLWRlcml2ZWQtY2xhc3MtcHJvcGVydHktdmFsdWVzLW5vdC1zZWVuLWluLXRoZS1iYXNlLWNsYXNzLWNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiB0ZW1wbGF0ZTpcbiAgICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIC0tIGFjY2VzcyB0byBzdWJjbGFzcyBwYXJhbXM6XG4gICAgICAgIHRoaXMuc3VwZXJJbml0KG9wdGlvbnMpO1xuICAgICB9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmlkID0gVXRpbC5zaW1wbGVVSWQoe30pO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG5cbiAgICAgICAgLy8gSWYgbm90IGZ1cnRoZXIgc3BlY2lmaWVkIC0gY3JlYXRlIGEgbG9jYWwgZXZlbnQgaGFuZGxlciBib3VuZCB0byB0aGUgYmFzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXIgfHxcbiAgICAgICAgICAgIG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcblxuICAgICAgICAvLyBPYmplY3QgZm9yIHN0b3JpbmcgaW50ZXJuYWwgc3RhdGVzIGFuZCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9IHtoaWRkZW46IGZhbHNlfTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdXBlckluaXRIVE1MKG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCh0aGlzLmNzc19uYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyB0byBiZSBjYWxsZWQgYXMgbGFzdCBjYWxsIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7e319IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gZGVmYXVsdExheWVycyAtLSBjcmVhdGUgdGhlIGRlZmF1bHQgPGc+IGxheWVyczogYmcgLT4gbWFpbiAtPiBmZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdXBlckluaXRTVkcob3B0aW9uczoge30gPSB7fSwgZGVmYXVsdExheWVycyA9IFsnYmcnLCAnbWFpbicsICdmZyddKSB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnMgaWYgbm90IHNwZWNpZmllZCBpbiBjb25zdHJ1Y3RvciBjYWxsXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIC8vIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhkZWZhdWx0cyksIC4uLk9iamVjdC5rZXlzKG9wdGlvbnMpXSk7XG4gICAgICAgIC8vIGtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSAoa2V5IGluIG9wdGlvbnMpID8gb3B0aW9uc1trZXldIDogZGVmYXVsdHNba2V5XSk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcblxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBncm91cCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAoc3ZnLFxuICAgICAgICAgICAgdGhpcy5jc3NfbmFtZSArICcgSUQnICsgdGhpcy5pZCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3MpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGxheWVyczogYmFja2dyb3VuZCwgbWFpbiwgZm9yZWdyb3VuZFxuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgdGhlIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2luaXQoKTtcblxuICAgIC8vIERBVEEgVVBEQVRFICYgUkVOREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgdGltZSBkYXRhIGhhcyBjaGFuZ2VkLCB1cGRhdGUgaXMgY2FsbGVkIGFuZFxuICAgICAqIHRyaWdnZXJzIHdyYW5nbGluZyBhbmQgcmUtcmVuZGVyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSA9IHRoaXMuX3dyYW5nbGUoZGF0YSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGEgd3JhbmdsaW5nIG1ldGhvZCAtLSBpbXBsZW1lbnQgaW4gc3ViY2xhc3MuIFJldHVybnMgdGhpcy5yZW5kZXJEYXRhLlxuICAgICAqIFNpbXBsZXN0IGltcGxlbWVudGF0aW9uOiBgcmV0dXJuIGRhdGE7YFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0gZGF0YSBpbiByZW5kZXIgZm9ybWF0XG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF93cmFuZ2xlKGRhdGEpO1xuXG5cbiAgICAvKipcbiAgICAgKiBJcyByZXNwb25zaWJsZSBmb3IgbWFwcGluZyBkYXRhIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW5kZXJEYXRhIHByZS1wcm9jZXNzZWQgKHdyYW5nbGVkKSBkYXRhXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfcmVuZGVyKHJlbmRlckRhdGEpOiB2b2lkO1xuXG5cbiAgICAvLyBVUERBVEUgT1BUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGluc3RhbmNlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvbmx5IHRoZSBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlUmVuZGVyIGlmIG9wdGlvbiBjaGFuZ2UgcmVxdWlyZXMgYSByZS1yZW5kZXJpbmcgKGRlZmF1bHQ6ZmFsc2UpXG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMoe29wdGlvbnMsIHJlUmVuZGVyID0gZmFsc2V9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyKSB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIC8vID09PSBDT05WRU5JRU5DRSA9PT09XG4gICAgcmVkcmF3KCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIHNldEhpZGVFbGVtZW50KGhFOiBEM1NlbCkge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50ID0gaEU7XG4gICAgfVxuXG4gICAgaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgICAgICAgICAgIH0pLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcbiAgICB9XG5cbn0iLCIvKipcbiAqIFNob3dpbmcgdGhlIHRvcCBsZWZ0IHBhcnQgb2YgZXhCRVJULCBubyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBlbWJlZGRpbmdzIG9yIHRoZSBjb250ZXh0c1xuICovXG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJztcbmltcG9ydCAqIGFzIHJzcCBmcm9tICcuLi9hcGkvcmVzcG9uc2VzJztcbmltcG9ydCAnLi4vZXRjL3hkMydcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2FwaS9tYWluQXBpJ1xuaW1wb3J0IHsgVUlDb25maWcgfSBmcm9tICcuLi91aUNvbmZpZydcbmltcG9ydCB7IFRleHRUb2tlbnMsIExlZnRUZXh0VG9rZW4sIFJpZ2h0VGV4dFRva2VuIH0gZnJvbSAnLi9UZXh0VG9rZW4nXG5pbXBvcnQgeyBBdHRlbnRpb25IZWFkQm94LCBnZXRBdHRlbnRpb25JbmZvIH0gZnJvbSAnLi9BdHRlbnRpb25IZWFkQm94J1xuaW1wb3J0IHsgQXR0ZW50aW9uR3JhcGggfSBmcm9tICcuL0F0dGVudGlvbkNvbm5lY3RvcidcbmltcG9ydCB7IFRva2VuV3JhcHBlciwgc2lkZVRvTGV0dGVyIH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgeyBBdHRlbnRpb25XcmFwcGVyLCBtYWtlRnJvbU1ldGFSZXNwb25zZSB9IGZyb20gJy4uL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBEM1NlbCwgU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcydcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQge2NyZWF0ZVN0YXRpY1NrZWxldG9ufSBmcm9tIFwiLi9zdGF0aWNMYXlvdXRcIjtcblxuXG5mdW5jdGlvbiBpc051bGxUb2tlbih0b2s6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBjb25zdCBpc1NvbWVOdWxsID0geCA9PiB7XG4gICAgICAgIHJldHVybiAoeCA9PSBudWxsKSB8fCAoeCA9PSBcIm51bGxcIilcbiAgICB9XG4gICAgY29uc3QgdG9rSXNOdWxsID0gdG9rID09IG51bGw7XG4gICAgY29uc3QgdG9rSGFzTnVsbCA9IGlzU29tZU51bGwodG9rLnNpZGUpIHx8IGlzU29tZU51bGwodG9rLmluZClcbiAgICByZXR1cm4gdG9rSXNOdWxsIHx8IHRva0hhc051bGxcbn1cblxuZnVuY3Rpb24gc2hvd0J5U2lkZShlOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgc2F2ZWQgdG9rZW4gaW4gdWlDb25mIGlzIG51bGxcbiAgICBpZiAoIWlzTnVsbFRva2VuKGUpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBlLnNpZGUgPT0gXCJsZWZ0XCIgPyBcInNyYy1pZHhcIiA6IFwidGFyZ2V0LWlkeFwiO1xuXG4gICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKGAuYXRuLWN1cnZlWyR7Y2xhc3NTZWxlY3Rvcn09JyR7ZS5pbmR9J11gKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0J5U2lkZShzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50LCBuZXdFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSkge1xuICAgICAgICBzaG93QnlTaWRlKG5ld0V2ZW50KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0FsbChzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShcIi5hdG4tY3VydmVcIilcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIHNldFNlbERpc2FibGVkKGF0dHI6IGJvb2xlYW4sIHNlbDogRDNTZWwpIHtcbiAgICBjb25zdCB2YWwgPSBhdHRyID8gdHJ1ZSA6IG51bGxcbiAgICBzZWwuYXR0cignZGlzYWJsZWQnLCB2YWwpXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluR3JhcGhpYyB7XG4gICAgYmFzZTogRDNTZWxcbiAgICBhcGk6IEFQSVxuICAgIHVpQ29uZjogVUlDb25maWdcbiAgICBhdHRDYXBzdWxlOiBBdHRlbnRpb25XcmFwcGVyXG4gICAgdG9rQ2Fwc3VsZTogVG9rZW5XcmFwcGVyXG4gICAgc2VsczogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgaW5pdGlhbCBkMyBzZWxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICB2aXpzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyB2aXMgY29tcG9uZW50cyB3cmFwcGVkIGFyb3VuZCBwYXJlbnQgc2VsXG4gICAgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXIgICAgLy8gT3JjaGVzdHJhdGVzIGV2ZW50cyByYWlzZWQgZnJvbSBjb21wb25lbnRzXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNlICdkaXYnIGh0bWwgZWxlbWVudCBpbnRvIHdoaWNoIGV2ZXJ5dGhpbmcgYmVsb3cgd2lsbCBiZSByZW5kZXJlZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJhc2VEaXY6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5iYXNlID0gZDMuc2VsZWN0KGJhc2VEaXYpXG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFQSSgpXG4gICAgICAgIHRoaXMudWlDb25mID0gbmV3IFVJQ29uZmlnKClcbiAgICAgICAgdGhpcy5zZWxzID0gY3JlYXRlU3RhdGljU2tlbGV0b24odGhpcy5iYXNlKVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD50aGlzLmJhc2Uubm9kZSgpKTtcblxuICAgICAgICB0aGlzLnZpenMgPSB7XG4gICAgICAgICAgICBsZWZ0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcImxlZnRcIiwgfSksXG4gICAgICAgICAgICByaWdodEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ldyBMZWZ0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBuZXcgUmlnaHRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGVudGlvblN2ZzogbmV3IEF0dGVudGlvbkdyYXBoKHRoaXMuc2Vscy5hdG5EaXNwbGF5LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRIYW5kbGVyKClcblxuICAgICAgICB0aGlzLm1haW5Jbml0KClcbiAgICB9XG5cbiAgICBwcml2YXRlIG1haW5Jbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICB0aGlzLmFwaS5nZXRNb2RlbERldGFpbHModGhpcy51aUNvbmYubW9kZWwoKSkudGhlbihtZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBtZC5wYXlsb2FkXG5cbiAgICAgICAgICAgIC8vIElmIGNoYW5naW5nIHRvIG1vZGVsIHdpdGggZmV3ZXIgbGF5ZXJzLCBjYXAgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIHRoaXMudWlDb25mLm5MYXllcnModmFsLm5sYXllcnMpLm5IZWFkcyh2YWwubmhlYWRzKVxuICAgICAgICAgICAgY29uc3QgY3VyckxheWVyID0gdGhpcy51aUNvbmYubGF5ZXIoKVxuICAgICAgICAgICAgY29uc3QgbWF4TGF5ZXIgPSB0aGlzLnVpQ29uZi5uTGF5ZXJzKCkgLSAxXG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5sYXllcihNYXRoLm1pbihjdXJyTGF5ZXIsIG1heExheWVyKSlcbiAgICAgICAgICAgIHRoaXMuaW5pdExheWVycyh0aGlzLnVpQ29uZi5uTGF5ZXJzKCkpXG5cbiAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oYXR0ZW50aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBhdHRlbnRpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGcm9tUmVzcG9uc2UoYXR0KVxuXG4gICAgICAgICAgICAgICAgLy8gV3JhcCBwb3N0SW5pdCBpbnRvIGZ1bmN0aW9uIHNvIGFzeW5jaHJvbm91cyBjYWxsIGRvZXMgbm90IG1lc3Mgd2l0aCBuZWNlc3NhcnkgaW5pdHNcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBub3JtQnlcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkgJiYgKCF0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5DT0xcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5BTExcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5ub3JtQnkgPSBub3JtQnlcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tYXNrSW5kcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMgPSB0aGlzLnVpQ29uZi5tYXNrSW5kcygpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0SG92ZXJUaXRsZSA9IHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSA/IFwiV291bGQgcHJlZGljdCBuZXh0Li4uXCIgOiBcIldvdWxkIHByZWRpY3QgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5sZWZ0LmRpdkhvdmVyLnRpdGxlKHByZWRpY3RIb3ZlclRpdGxlKVxuICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMucmlnaHQuZGl2SG92ZXIudGl0bGUocHJlZGljdEhvdmVyVGl0bGUpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgb25seSAxIG1hc2sgaW5kIGlzIHByZXNlbnQgZm9yIGF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF5VG9nZ2xlKDxudW1iZXI+dGhpcy51aUNvbmYudG9rZW4oKS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RnJvbVJlc3BvbnNlKGF0dGVudGlvbjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5hdHRDYXBzdWxlID0gbWFrZUZyb21NZXRhUmVzcG9uc2UoYXR0ZW50aW9uLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpXG4gICAgICAgIHRoaXMudG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIoYXR0ZW50aW9uKTtcbiAgICAgICAgdGhpcy5fc3RhdGljSW5pdHMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbGVhdmVDb3JwdXNNc2cobXNnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c0luc3BlY3Rvci5oaWRlVmlldygpXG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmhpZGVWaWV3KClcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGxlYXZlIG1zZ1wiKTtcbiAgICAgICAgU2VsLnVuaGlkZUVsZW1lbnQodGhpcy5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgdGhpcy5zZWxzLmNvcnB1c01zZ0JveC50ZXh0KG1zZylcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iaW5kRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkRibENsaWNrLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChzZWxmLnVpQ29uZi5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiLCAhZS5zZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IHNpZGVUb0xldHRlcihlLnNpZGUsIHRoaXMudWlDb25mLmF0dFR5cGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZVtsZXR0ZXJdLnRvZ2dsZShlLmluZClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy50b2tDYXBzdWxlLmEsIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHModGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b3JlZ3Jlc3NpdmUgbW9kZWwgZG9lc24ndCBkbyBtYXNraW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldoYXQga2luZCBvZiBtb2RlbCBpcyB0aGlzP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCksIGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0FsbCh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5DbGljaywgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva1RvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi50b2dnbGVUb2tlbihlKVxuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKClcbiAgICAgICAgICAgICAgICBzaG93QnlTaWRlKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tUb2dnbGUoKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4geyB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsICgpID0+IHsgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU1vdmUsIChlKSA9PiB7IH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgKGU6IHsgaGVhZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVpQ29uZi50b2dnbGVIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5BRERFRCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9nZ2xlVG9rZW5TZWwoKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLnVpQ29uZi50b2tlbigpXG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IGQzLnNlbGVjdCgnLnNlbGVjdGVkLXRva2VuJylcblxuICAgICAgICAvLyBJZiBubyB0b2tlbiBzaG91bGQgYmUgc2VsZWN0ZWQsIHVuc2VsZWN0IGFsbCB0b2tlbnNcbiAgICAgICAgaWYgKCF0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTZWw6IGQzLlNlbGVjdGlvbjxCYXNlVHlwZSwgYW55LCBCYXNlVHlwZSwgYW55PiA9IGQzLnNlbGVjdEFsbCgnLnNlbGVjdGVkLXRva2VuJylcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZWxlY3QgdGhlIGluZGljYXRlZCB0b2tlblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuMlN0cmluZyA9IChlOiB0cC5Ub2tlbkV2ZW50KSA9PiBgIyR7ZS5zaWRlfS10b2tlbi0ke2UuaW5kfWBcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbCA9IGQzLnNlbGVjdCh0b2tlbjJTdHJpbmcoZSkpXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgdG9rZW4gc2VsZWN0aW9uLCBpZiBhbnlcbiAgICAgICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQuZW1wdHkoKSkge1xuICAgICAgICAgICAgYWxyZWFkeVNlbGVjdGVkLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXlUb2dnbGUoK2UuaW5kKVxuICAgICAgICAgICAgdGhpcy5tYXJrTmV4dFRvZ2dsZSgrZS5pbmQsIHRoaXMudG9rQ2Fwc3VsZS5hLmxlbmd0aCgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncmF5VG9nZ2xlKGluZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKVxuICAgICAgICAgICAgdGhpcy5ncmF5QmFkVG9rcyhpbmQpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbWFza2VkLXRva2VuJywgZmFsc2UpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG1hcmtOZXh0V29yZFRva3MoaW5kOiBudW1iZXIsIE46IG51bWJlcikge1xuICAgICAgICBjb25zdCBtYXJrVG9rcyA9IGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICBzLmNsYXNzZWQoXCJuZXh0LXRva2VuXCIsIGkgPT0gTWF0aC5taW4oaW5kICsgMSwgTikpXG4gICAgICAgIH1cbiAgICAgICAgZDMuc2VsZWN0QWxsKCcucmlnaHQtdG9rZW4nKS5lYWNoKG1hcmtUb2tzKVxuICAgICAgICBkMy5zZWxlY3RBbGwoJy5sZWZ0LXRva2VuJykuZWFjaChtYXJrVG9rcylcbiAgICB9XG5cbiAgICBwcml2YXRlIG1hcmtOZXh0VG9nZ2xlKGluZDogbnVtYmVyLCBOOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgICAgICAgICB0aGlzLm1hcmtOZXh0V29yZFRva3MoaW5kLCBOKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy50b2tlbicpLmNsYXNzZWQoJ25leHQtdG9rZW4nLCBmYWxzZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGF0aWNJbml0cygpIHtcbiAgICAgICAgdGhpcy5faW5pdFNlbnRlbmNlRm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0TW9kZWxTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U2VudGVuY2VGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigncGxhY2Vob2xkZXInLCBcIkVudGVyIG5ldyBzZW50ZW5jZSB0byBhbmFseXplXCIpXG4gICAgICAgIHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5hdHRyKCd2YWx1ZScsIHRoaXMudWlDb25mLnNlbnRlbmNlKCkpXG5cbiAgICAgICAgY29uc3Qgc3VibWl0TmV3U2VudGVuY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGFsbCBvY2N1cmVuY2VzIG9mICcjJyBpbiBzZW50ZW5jZSBhcyB0aGlzIGNhdXNlcyB0aGUgQVBJIHRvIGJyZWFrXG4gICAgICAgICAgICBjb25zdCBzZW50ZW5jZV9hOiBzdHJpbmcgPSB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEucHJvcGVydHkoXCJ2YWx1ZVwiKS5yZXBsYWNlKC9cXCMvZywgJycpXG5cbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSBmb3JtIGlzIGZpbGxlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgIGlmIChzZW50ZW5jZV9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcbiAgICAgICAgICAgICAgICB0aGlzLmFwaS5nZXRNZXRhQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCBzZW50ZW5jZV9hLCB0aGlzLnVpQ29uZi5sYXllcigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcDogcnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbmYuc2VudGVuY2Uoc2VudGVuY2VfYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnJtVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXIgPSBSLmN1cnJ5KChrZXlDb2RlLCBmLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT09IGtleUNvZGUpIHJldHVybjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbkVudGVyU3VibWl0ID0gb25FbnRlcigxMywgc3VibWl0TmV3U2VudGVuY2UpXG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5zZWxzLmZvcm0uYnV0dG9uO1xuICAgICAgICBjb25zdCBpbnB1dEJveCA9IHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQTtcblxuICAgICAgICBidG4ub24oXCJjbGlja1wiLCBzdWJtaXROZXdTZW50ZW5jZSlcbiAgICAgICAgaW5wdXRCb3gub24oJ2tleXByZXNzJywgb25FbnRlclN1Ym1pdClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW5kZXJIZWFkU3VtbWFyeSgpIHtcbiAgICAgICAgdGhpcy5zZWxzLnNlbGVjdGVkSGVhZHNcbiAgICAgICAgICAgIC5odG1sKFIuam9pbignLCAnLCB0aGlzLnVpQ29uZi5oZWFkcygpLm1hcChoID0+IGggKyAxKSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0TGF5ZXJzKG5MYXllcnM6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGhhc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBzZWxmLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAuZGF0YShfLnJhbmdlKDAsIG5MYXllcnMpKVxuICAgICAgICAgICAgLmpvaW4oXCJsYWJlbFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJ0biBidXR0b24gbGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIHRvIGxhcmdlc3QgbGF5ZXIgYXZhaWxhYmxlIGlmIHVpQ29uZi5sYXllcigpID4gbmV3IG5MYXllcnNcbiAgICAgICAgICAgICAgICBpZiAoZCA9PSBzZWxmLnVpQ29uZi5sYXllcigpKSB7IC8vIEphdmFzY3JpcHQgaXMgMCBpbmRleGVkIVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzQWN0aXZlICYmIGQgPT0gbkxheWVycykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcihkKVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4gZCArIDEpXG4gICAgICAgICAgICAuYXBwZW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInJhZGlvXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hlY2tib3gtaW5saW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIm5hbWVcIiwgXCJsYXllcmJveFwiKVxuICAgICAgICAgICAgLy8gLmF0dHIoXCJoZWFkXCIsIGQgPT4gZClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IFwibGF5ZXJDaGVja2JveFwiICsgaSlcbiAgICAgICAgLy8gLnRleHQoKGQsIGkpID0+IGQgKyBcIiBcIilcblxuICAgICAgICBmcm9tRXZlbnQoY2hlY2tib3hlcy5ub2RlcygpLCAnY2hhbmdlJykucGlwZShcbiAgICAgICAgICAgIHRhcCgoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBteURhdGEgPSBkMy5zZWxlY3QoPEJhc2VUeXBlPmUudGFyZ2V0KS5kYXR1bSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15RGF0YSwgXCItLS0gbXlEYXRhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5sYXllckNoZWNrYm94ZXMuc2VsZWN0QWxsKFwiLmxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIGQgPT4gZCA9PT0gbXlEYXRhKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKHY6IEV2ZW50KSA9PiArZDMuc2VsZWN0KDxCYXNlVHlwZT52LnRhcmdldCkuZGF0dW0oKSksXG4gICAgICAgICAgICB0YXAodiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgbGF5ZXI6IFwiLCB2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcih2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHYpID0+IGZyb20oc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnRva0NhcHN1bGUuYSwgc2VsZi51aUNvbmYuc2VudGVuY2UoKSwgdikpKVxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocmVzcDogcnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHNlbGYudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgc2VsZi5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllcklkID0gYCNsYXllckNoZWNrYm94JHt0aGlzLnVpQ29uZi5sYXllcigpfWBcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXllciBJRDogXCIsIGxheWVySWQpO1xuICAgICAgICBkMy5zZWxlY3QobGF5ZXJJZCkuYXR0cihcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpXG5cbiAgICAgICAgLy8gSW5pdCB0aHJlc2hvbGQgc3R1ZmZcbiAgICAgICAgY29uc3QgZGlzcFRocmVzaCA9ICh0aHJlc2gpID0+IE1hdGgucm91bmQodGhyZXNoICogMTAwKVxuICAgICAgICBkMy5zZWxlY3QoJyNteS1yYW5nZS12YWx1ZScpLnRleHQoZGlzcFRocmVzaChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSkpXG5cbiAgICAgICAgdGhpcy5zZWxzLnRocmVzaFNsaWRlci5vbihcImlucHV0XCIsIF8udGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXM7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi50aHJlc2hvbGQoK25vZGUudmFsdWUgLyAxMDApO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuICAgICAgICAgICAgc2VsZi52aXpzLmF0dGVudGlvblN2Zy50aHJlc2hvbGQoc2VsZi51aUNvbmYudGhyZXNob2xkKCkpXG4gICAgICAgIH0sIDEwMCkpXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3RBbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3RBbGxIZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuaGVhZFNlbGVjdE5vbmUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3ROb0hlYWRzKCk7XG4gICAgICAgICAgICBzZWxmLnJlbmRlclN2ZygpXG4gICAgICAgICAgICBzZWxmLnJlbmRlckF0dEhlYWQoKVxuICAgICAgICAgICAgU2VsLnNldEhpZGRlbihcIi5hdG4tY3VydmVcIilcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIF9pbml0VG9nZ2xlKCkge1xuICAgICAgICBmcm9tRXZlbnQodGhpcy5zZWxzLmNsc1RvZ2dsZS5ub2RlKCksICdpbnB1dCcpLnBpcGUoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0tIFRPRE86IEZJWCAhXG4gICAgICAgICAgICBtYXAoZSA9PiBlLnNyY0VsZW1lbnQuY2hlY2tlZCksXG4gICAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLmhpZGVDbHNTZXAodilcbiAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUuemVyb2VkKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TW9kZWxTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgLy8gQmVsb3cgYXJlIHRoZSBhdmFpbGFibGUgbW9kZWxzLiBXaWxsIG5lZWQgdG8gY2hvb3NlIDMgdG8gYmUgYXZhaWxhYmxlIE9OTFlcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMudWlDb25mLnN1cHBvcnRlZE1vZGVsc1xuICAgICAgICBjb25zdCBuYW1lcyA9IFIubWFwKFIucHJvcCgnbmFtZScpKShkYXRhKVxuICAgICAgICBjb25zdCBraW5kcyA9IFIubWFwKFIucHJvcCgna2luZCcpKShkYXRhKVxuICAgICAgICBjb25zdCBraW5kbWFwID0gUi56aXBPYmoobmFtZXMsIGtpbmRzKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnNlbGVjdEFsbCgnLm1vZGVsLW9wdGlvbicpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ29wdGlvbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbW9kZWwtb3B0aW9uJywgdHJ1ZSlcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQubmFtZSlcbiAgICAgICAgICAgIC5hdHRyKFwibW9kZWxraW5kXCIsIGQgPT4gZC5raW5kKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLm5hbWUpXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3IucHJvcGVydHkoJ3ZhbHVlJywgdGhpcy51aUNvbmYubW9kZWwoKSk7XG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICBjb25zdCBtbmFtZSA9IG1lLnByb3BlcnR5KCd2YWx1ZScpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tb2RlbChtbmFtZSk7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tb2RlbEtpbmQoa2luZG1hcFttbmFtZV0pO1xuICAgICAgICAgICAgaWYgKGtpbmRtYXBbbW5hbWVdID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTRVRUSU5HIE1BU0sgSU5EU1wiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyhbXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubWFpbkluaXQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJBdHRIZWFkKCkge1xuICAgICAgICBjb25zdCBoZWFkcyA9IF8ucmFuZ2UoMCwgdGhpcy51aUNvbmYuX25IZWFkcylcbiAgICAgICAgY29uc3QgZm9jdXNBdHQgPSB0aGlzLmF0dENhcHN1bGUuYXR0XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy51aUNvbmYuaGFzVG9rZW4oKSA/IHRoaXMudWlDb25mLnRva2VuKCkgOiBudWxsXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBsZWZ0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcImxlZnRcIiwgdG9rZW4pO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmlnaHRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwicmlnaHRcIiwgdG9rZW4pO1xuICAgICAgICB0aGlzLnZpenMubGVmdEhlYWRzLnVwZGF0ZShsZWZ0QXR0SW5mbylcbiAgICAgICAgdGhpcy52aXpzLnJpZ2h0SGVhZHMudXBkYXRlKHJpZ2h0QXR0SW5mbylcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmVcbiAgICAgICAgaGVhZHMuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLmhlYWRTZXQoKS5oYXMoaCkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXJUb2tlbnMoKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRva0NhcHN1bGVbdGhpcy51aUNvbmYuYXR0VHlwZVswXV1cbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRva0NhcHN1bGVbdGhpcy51aUNvbmYuYXR0VHlwZVsxXV1cblxuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQudXBkYXRlKGxlZnQudG9rZW5EYXRhKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0Lm1hc2sobGVmdC5tYXNrSW5kcyk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMucmlnaHQudXBkYXRlKHJpZ2h0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMucmlnaHQubWFzayhyaWdodC5tYXNrSW5kcyk7XG4gICAgICAgIC8vIGRpc3BsYXlTZWxlY3RlZFRva2VuXG4gICAgfVxuXG4gICAgcmVuZGVyU3ZnKCkge1xuICAgICAgICBjb25zdCBhdHQgPSB0aGlzLmF0dENhcHN1bGUuYnlIZWFkcyh0aGlzLnVpQ29uZi5oZWFkcygpKVxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7RDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTa2VsZXRvbihiYXNlOiBEM1NlbCkge1xuXG4gICAgLy8gLS0tLSBURU1QTEFURSAtLS0tLVxuICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDwhLS0gICAgICAgIDxkaXYgaWQ9XCJhdHRlbnRpb24tdmlzXCI+LS0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RlbC1zZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vZGVsLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxNTBweDttYXJnaW4tYm90dG9tOiA1cHg7XCI+U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDwvbGFiZWw+PHNlbGVjdCBpZD1cIm1vZGVsLW9wdGlvbi1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9kZWwtb3B0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZW50ZW5jZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm0tc2VudGVuY2UtYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTUwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VudGVuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZm9ybS1zZW50ZW5jZS1hXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZW50LWEtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHNlbnRlbmNlIHRvIGFuYWx5emVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwidXBkYXRlLXNlbnRlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6NzBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDNweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ1wiPjwvZGl2Pi0tPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDoxNTBweDtcIj48Yj5GaWx0ZXJzPC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbHMtdG9nZ2xlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiPi0tPlxuICAgICAgICAgICAgICAgICAgICBIaWRlIFNwZWNpYWwgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cImNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hvcnQtc2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjVweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3cgdG9wIDxzcGFuIGlkPVwibXktcmFuZ2UtdmFsdWVcIj43MDwvc3Bhbj4lIG9mIGF0dDpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6IDVweDt3aWR0aDpjYWxjKDEwMCUgLSA1NTBweCk7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJteS1yYW5nZVwiPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNsaWRlclwiIGlkPVwibXktcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXNlbGVjdGlvblwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxNTBweDt2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuICAgICAgICAgICAgICAgICAgICBMYXllclxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllci1zZWxlY3QgYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgaWQ9XCJsYXllci1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLWhlYWQtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTUwcHg7dmVydGljYWwtYWxpZ246IHRvcDtcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQgaGVhZHM6XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLWhlYWRzXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbm5lY3Rvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29ubmVjdG9yLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRyb2wtaGFsZlwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItc2VsZWN0aW9uXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5ZXI6LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXItc2VsZWN0IGJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIiBpZD1cImxheWVyLXNlbGVjdFwiPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udHJvbC1oYWxmIGhlYWQtY29udHJvbFwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWxlY3RlZC1oZWFkLWRpc3BsYXlcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWRlc2NyaXB0aW9uXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3RlZCBoZWFkczotLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWxlY3RlZC1oZWFkc1wiPi0tPlxuXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1pbnB1dFwiIGlkPVwiaGVhZC1hbGwtb3Itbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3QtYWxsLWhlYWRzXCI+U2VsZWN0IGFsbCBoZWFkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Qtbm8taGVhZHNcIj5VbnNlbGVjdCBhbGwgaGVhZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVzYWdlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGZvY3VzIG9uIG9uZSB0b2tlbiBieSA8Yj5jbGljazwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gbWFzayBhbnkgdG9rZW4gYnkgPGI+ZG91YmxlIGNsaWNrPC9iPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gc2VsZWN0IGFuZCBkZS1zZWxlY3QgYSBoZWFkIGJ5IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Y2xpY2s8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoZSBoZWF0bWFwIGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImF0bi1jb250YWluZXJcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsZWZ0LWF0dC1oZWFkLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibGVmdC1hdHQtaGVhZHNcIiB3aWR0aD1cIjE4MlwiIGhlaWdodD1cIjQ0MlwiPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxlZnQtdG9rZW5zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJhdG4tZGlzcGxheVwiIGhlaWdodD1cIjQ0MlwiIHdpZHRoPVwiMjAwXCI+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyaWdodC10b2tlbnNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJpZ2h0LWF0dC1oZWFkLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwicmlnaHQtYXR0LWhlYWRzXCIgd2lkdGg9XCIxODJcIiBoZWlnaHQ9XCI0NDJcIj48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInZpcy1icmVha1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIGJhc2UuaHRtbCh0ZW1wbGF0ZSk7XG5cbiAgICAvLyAtLS0tIFRFTVBMQVRFLmVuZCAtLS0tLVxuXG5cbiAgICAvKipcbiAgICAgKiBUb3AgbGV2ZWwgc2VjdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdCBzZW50ZW5jZUlucHV0ID0gYmFzZS5zZWxlY3QoXCIjc2VudGVuY2UtaW5wdXRcIik7XG4gICAgY29uc3QgY29ubmVjdG9yQ29udGFpbmVyID0gYmFzZS5zZWxlY3QoJyNjb25uZWN0b3ItY29udGFpbmVyJyk7XG4gICAgY29uc3QgYXRuQ29udHJvbHMgPSBiYXNlLnNlbGVjdCgnI2Nvbm5lY3Rvci1jb250cm9scycpO1xuICAgIGNvbnN0IGF0bkNvbnRhaW5lciA9IGJhc2Uuc2VsZWN0KCcjYXRuLWNvbnRhaW5lcicpO1xuXG4gICAgLyoqXG4gICAgICogU2VudGVuY2UgSW5wdXRcbiAgICAgKi9cblxuICAgIGNvbnN0IHNlbnRlbmNlQSA9IGJhc2Uuc2VsZWN0KCcjZm9ybS1zZW50ZW5jZS1hJyk7XG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGJhc2Uuc2VsZWN0KCcjdXBkYXRlLXNlbnRlbmNlJyk7XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0b3IgQ29udHJvbHNcbiAgICAgKi9cblxuICAgIGNvbnN0IG1vZGVsU2VsZWN0b3IgPSBiYXNlLnNlbGVjdCgnI21vZGVsLW9wdGlvbi1zZWxlY3RvcicpXG4gICAgY29uc3QgdGhyZXNoU2xpZGVyID0gYmFzZS5zZWxlY3QoJyNteS1yYW5nZScpO1xuICAgIGNvbnN0IGxheWVyQ2hlY2tib3hlcyA9IGJhc2Uuc2VsZWN0KCcjbGF5ZXItc2VsZWN0Jyk7XG4gICAgY29uc3QgY2xzVG9nZ2xlID0gYmFzZS5zZWxlY3QoJyNjbHMtdG9nZ2xlJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZWFkcyA9IGJhc2Uuc2VsZWN0KCcjc2VsZWN0ZWQtaGVhZHMnKTtcbiAgICBjb25zdCBoZWFkU2VsZWN0QWxsID0gYmFzZS5zZWxlY3QoJyNzZWxlY3QtYWxsLWhlYWRzJyk7XG4gICAgY29uc3QgaGVhZFNlbGVjdE5vbmUgPSBiYXNlLnNlbGVjdCgnI3NlbGVjdC1uby1oZWFkcycpO1xuXG4gICAgLyoqXG4gICAgICogRm9yIG1haW4gYXR0ZW50aW9uIHZpc1xuICAgICAqL1xuXG4gICAgY29uc3QgaGVhZEJveExlZnQgPSBiYXNlLnNlbGVjdCgnI2xlZnQtYXR0LWhlYWRzJyk7XG4gICAgY29uc3QgdG9rZW5zTGVmdCA9IGJhc2Uuc2VsZWN0KCcjbGVmdC10b2tlbnMnKTtcbiAgICBjb25zdCBhdG5EaXNwbGF5ID0gYmFzZS5zZWxlY3QoJyNhdG4tZGlzcGxheScpO1xuICAgIGNvbnN0IHRva2Vuc1JpZ2h0ID0gYmFzZS5zZWxlY3QoJyNyaWdodC10b2tlbnMnKTtcbiAgICBjb25zdCBoZWFkQm94UmlnaHQgPSBiYXNlLnNlbGVjdCgnI3JpZ2h0LWF0dC1oZWFkcycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGhhbmRsZXMgdG8gdGhlIGltcG9ydGFudCBwYXJ0cyBoZXJlXG4gICAgICovXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2R5OiBkMy5zZWxlY3QoJ2JvZHknKSxcbiAgICAgICAgYXRuQ29udGFpbmVyOiBhdG5Db250YWluZXIsXG4gICAgICAgIGF0bkRpc3BsYXk6IGF0bkRpc3BsYXksXG4gICAgICAgIGF0bkhlYWRzOiB7XG4gICAgICAgICAgICBsZWZ0OiBoZWFkQm94TGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiBoZWFkQm94UmlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgIHNlbnRlbmNlQTogc2VudGVuY2VBLFxuICAgICAgICAgICAgYnV0dG9uOiBmb3JtQnV0dG9uXG4gICAgICAgIH0sXG4gICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgbGVmdDogdG9rZW5zTGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiB0b2tlbnNSaWdodFxuICAgICAgICB9LFxuICAgICAgICBtb2RlbFNlbGVjdG9yOiBtb2RlbFNlbGVjdG9yLFxuICAgICAgICBjbHNUb2dnbGU6IGNsc1RvZ2dsZSxcbiAgICAgICAgbGF5ZXJDaGVja2JveGVzOiBsYXllckNoZWNrYm94ZXMsXG4gICAgICAgIHNlbGVjdGVkSGVhZHM6IHNlbGVjdGVkSGVhZHMsXG4gICAgICAgIGhlYWRTZWxlY3RBbGw6IGhlYWRTZWxlY3RBbGwsXG4gICAgICAgIGhlYWRTZWxlY3ROb25lOiBoZWFkU2VsZWN0Tm9uZSxcbiAgICAgICAgdGhyZXNoU2xpZGVyOiB0aHJlc2hTbGlkZXIsXG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==