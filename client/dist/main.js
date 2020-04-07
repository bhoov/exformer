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
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/attend+meta", toSend);
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
        this.nLayers = 12;
        this.nHeads = 12;
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
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./etc/URLHandler */ "./ts/etc/URLHandler.ts");





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
    }
    toURL(updateHistory = false) {
        _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].updateUrl(this._conf, updateHistory);
    }
    fromURL() {
        const params = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].parameters;
        this._conf = {
            model: params['model'] || 'bert-base-cased',
            modelKind: params['modelKind'] || _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional,
            sentence: params['sentence'] || "The girl ran to a local pub to escape the din of her city.",
            layer: params['layer'] || 1,
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
        this.headSet(new Set(lodash__WEBPACK_IMPORTED_MODULE_2__["range"](0, this._nHeads)));
    }
    selectNoHeads() {
        this.headSet(new Set([]));
    }
    toggleHead(head) {
        let out;
        if (this.headSet().has(head)) {
            this.headSet().delete(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].REMOVED;
        }
        else {
            this.headSet().add(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].ADDED;
        }
        // Set through setter function to ensure url is updated
        this.headSet(this.headSet()); // I hate mutable datastructures... This is confusing.
        return out;
    }
    toggleToken(e) {
        const picker = ramda__WEBPACK_IMPORTED_MODULE_3__["pick"](['ind', 'side']);
        const compareEvent = picker(e);
        const compareToken = picker(this.token());
        if (ramda__WEBPACK_IMPORTED_MODULE_3__["equals"](compareToken, compareEvent)) {
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
        this._conf.heads = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["set2SortedArray"](this._headSet);
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
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional: {
                return 0;
            }
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive: {
                return 0;
            }
            default: {
                return 0;
            }
        }
    }
    get showNext() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive ? true : false;
    }
    get matchHistogramDescription() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive ? "Next" : "Matched";
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
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




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
    let gatheredMat = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor3d"](headMat);
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
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.headRows = this.base.selectAll(`.${this.rowCssName}`);
        this.headCells = this.headRows.selectAll(`${this.boxCssName}`);
        this.opacityScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 1]);
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
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({
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
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOver, boxEvent(i));
        })
            .on("mouseout", (d, i) => {
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
            self.base.style('visibility', 'hidden');
        });
        sels.parent.on('mouseover', function () {
            self.base.style('visibility', 'visible');
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
        console.log("Calling divhover");
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
                if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(this.uiConf.token().ind);
                    }
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict next...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict next...";
                }
                else {
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict here...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict here...";
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
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOver, (e) => {
            self.sels.atnHeads.headInfo.style('visibility', 'visible');
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOut, () => {
            self.sels.atnHeads.headInfo.style('visibility', 'hidden');
            // Don't do anything special on row mouse out
        });
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
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseMove, (e) => {
            const headInfo = self.sels.atnHeads.headInfo;
            let left, top, borderRadius;
            if (e.side == "left") {
                const divOffset = [12, 3];
                left = e.mouse[0] + e.baseX - (+headInfo.style('width').replace('px', '') + divOffset[0]);
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 1px 8px";
            }
            else {
                const divOffset = [-13, 3];
                left = e.mouse[0] + e.baseX + divOffset[0];
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 8px 1px";
            }
            headInfo
                .style('visibility', 'visible')
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .style('border-radius', borderRadius)
                .text(`Head: ${e.ind + 1}`);
            // Don't do anything special on row mouse over
        });
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
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "bert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "bert-base-german-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "xlm-mlm-en-2048", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilbert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilroberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "albert-base-v1", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "albert-xxlarge-v2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "xlm-roberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "t5-small", kind: tp.ModelKind.Autoregressive },
            { name: "roberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
            { name: "distilgpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
        ];
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
        this.vizs.leftHeads.options.offset = this.uiConf.offset;
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
        console.log("now: ", this.uiConf.offset);
        this.vizs.tokens.left.options.offset = this.uiConf.offset;
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }
    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads());
        this.vizs.attentionSvg.options.offset = this.uiConf.offset;
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
                    <div id="head-info-box"
                         class="mat-hover-display text-center"
                         style="width: 70px; height: 30px; visibility: hidden; left: 929px; top: 670px; border-radius: 8px 8px 8px 1px;">
                    </div>
                    <svg id="left-att-heads" width="182" height="442"></svg>
                    <div id="left-tokens"></div>
                    <svg id="atn-display" height="442" width="200"></svg>
                    <div id="right-tokens"></div>
                    <svg id="right-att-heads" width="182" height="442"></svg>
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
    const headInfoBox = base.select('#head-info-box');
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
            headInfo: headInfoBox
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9VUkxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9VdGlsLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9fVG9vbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL2FwaUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL2FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94ZDMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9EaXZIb3Zlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL2F0dGVudGlvblZpcy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvc3RhdGljTGF5b3V0LnRzIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy9ub2RlLWZldGNoIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCk/ZGQ5YSIsIndlYnBhY2s6Ly8vc3RyaW5nX2RlY29kZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy9mcyAoaWdub3JlZCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIscUJBQXVCLGlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFPLE1BQU0sT0FBTyxHQUFHO0lBQ3RCLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiww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QUM7SUFDL0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFckQ7O09BRUc7SUFFSCxPQUFPO1FBQ0gsSUFBSSxFQUFFLHlDQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxZQUFZO1FBQzFCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxZQUFZO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1NBQ3hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLFVBQVU7U0FDckI7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsV0FBVztTQUNyQjtRQUNELGFBQWEsRUFBRSxhQUFhO1FBQzVCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGNBQWMsRUFBRSxjQUFjO1FBQzlCLFlBQVksRUFBRSxZQUFZO0tBQzdCO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7O0FDak9ELGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdHMvbWFpbi50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZXhCRVJULmh0bWxcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGNvbnN0IERlbW9BUEkgPSB7XG5cdFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyY1wiOiBcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmMuanNvblwiLFxuXHRcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTdcIjogXCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3Lmpzb25cIixcblx0XCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4XCI6IFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOC5qc29uXCIsXG5cdFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3NlwiOiBcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzYuanNvblwiLFxuXHRcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTlcIjogXCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5Lmpzb25cIixcblx0XCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyXCI6IFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2Mi5qc29uXCIsXG5cdFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZlwiOiBcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2YuanNvblwiLFxuXHRcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTdcIjogXCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3Lmpzb25cIixcblx0XCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2XCI6IFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNi5qc29uXCIsXG5cdFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NFwiOiBcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDQuanNvblwiLFxuXHRcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjdcIjogXCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3Lmpzb25cIixcblx0XCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyXCI6IFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMi5qc29uXCIsXG5cdFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0YlwiOiBcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGIuanNvblwiLFxuXHRcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWNcIjogXCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjLmpzb25cIixcblx0XCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmXCI6IFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZi5qc29uXCIsXG5cdFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMVwiOiBcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzEuanNvblwiLFxuXHRcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTBcIjogXCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwLmpzb25cIixcblx0XCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhXCI6IFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YS5qc29uXCIsXG5cdFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4N1wiOiBcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODcuanNvblwiLFxuXHRcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzNcIjogXCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzLmpzb25cIixcblx0XCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhXCI6IFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYS5qc29uXCIsXG5cdFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNlwiOiBcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDYuanNvblwiLFxuXHRcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDhcIjogXCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4Lmpzb25cIixcblx0XCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyXCI6IFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMi5qc29uXCIsXG5cdFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxN1wiOiBcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTcuanNvblwiLFxuXHRcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDNcIjogXCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzLmpzb25cIixcblx0XCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2XCI6IFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNi5qc29uXCIsXG5cdFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNlwiOiBcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTYuanNvblwiLFxuXHRcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWVcIjogXCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlLmpzb25cIixcblx0XCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3XCI6IFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyNy5qc29uXCIsXG5cdFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1N1wiOiBcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTcuanNvblwiLFxuXHRcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjJcIjogXCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyLmpzb25cIixcblx0XCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhXCI6IFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYS5qc29uXCIsXG5cdFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0NlwiOiBcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDYuanNvblwiLFxuXHRcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTVcIjogXCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1Lmpzb25cIixcblx0XCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiXCI6IFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0Yi5qc29uXCIsXG5cdFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZFwiOiBcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmQuanNvblwiLFxuXHRcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2NcIjogXCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjLmpzb25cIixcblx0XCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiXCI6IFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYi5qc29uXCIsXG5cdFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMlwiOiBcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTIuanNvblwiLFxuXHRcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTJcIjogXCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyLmpzb25cIixcblx0XCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2XCI6IFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNi5qc29uXCIsXG5cdFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3NlwiOiBcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzYuanNvblwiLFxuXHRcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTlcIjogXCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5Lmpzb25cIixcblx0XCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhXCI6IFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYS5qc29uXCIsXG5cdFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOVwiOiBcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzkuanNvblwiLFxuXHRcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTRcIjogXCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0Lmpzb25cIixcblx0XCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2XCI6IFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNi5qc29uXCIsXG5cdFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjM1wiOiBcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzMuanNvblwiLFxuXHRcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjdcIjogXCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3Lmpzb25cIixcblx0XCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5XCI6IFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OS5qc29uXCIsXG5cdFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNFwiOiBcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTQuanNvblwiLFxuXHRcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzhcIjogXCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4Lmpzb25cIixcblx0XCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhXCI6IFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YS5qc29uXCIsXG5cdFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNlwiOiBcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzYuanNvblwiLFxuXHRcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmZcIjogXCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmLmpzb25cIixcblx0XCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwXCI6IFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMC5qc29uXCIsXG5cdFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwY1wiOiBcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGMuanNvblwiLFxuXHRcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmRcIjogXCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkLmpzb25cIixcblx0XCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmXCI6IFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZi5qc29uXCIsXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFRva2VuRGlzcGxheSB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4vcmVzcG9uc2VzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IERlbW9BUEkgfSBmcm9tICcuL2RlbW9BUEknXG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ29iamVjdC1oYXNoJ1xuaW1wb3J0IHsgbWFrZVVybCwgdG9QYXlsb2FkIH0gZnJvbSAnLi4vZXRjL2FwaUhlbHBlcnMnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1VSTEhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUb2tlbkRpc3BsYXkgPSBuZXcgVG9rZW5EaXNwbGF5KClcblxuY29uc3QgYmFzZXVybCA9IFVSTEhhbmRsZXIuYmFzaWNVUkwoKVxuXG4vKipcbiAqIEEgcmV3cml0ZSBvZiBgZDMtZmV0Y2hgJ3MgYGQzLmpzb25gIGNhbGxiYWNrLiBJZiBhbiBhcGkgY2FsbCBmYWlscywgbWFrZSBhIGJhY2t1cCBjYWxsIHRvIHNwZWNpZmllZCB1cmwgYW5kIHBheWxvYWQsIGlmIHNwZWNpZmllZC5cbiAqIFxuICogQHBhcmFtIHJlc3BvbnNlIE9iamVjdCBleHBlY3RlZCBhdCB0aW1lIG9mIGNhbGxiYWNrXG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IG9mIGZhaWxcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIG1ha2luZyBhIHBvc3QgcmVxdWVzdFxuICovXG5mdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBpZiAoYmFja3VwVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1RBVElDIEZJTEUgTk9UIEZPVU5EXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZCkudGhlbihyZXNwb25zZUpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbn1cblxuLyoqXG4gKiBDaGVjayBmaXJzdCBpZiB0aGUgaW5mb3JtYXRpb24gYmVpbmcgc2VudCBleGlzdHMgaW4gYSBzdGF0aWMgZGVtbyBmaWxlLiBJZiBpdCBkb2VzLCBzZW5kIHRoYXQuIE90aGVyd2lzZSwgbWFrZSBhIG5vcm1hbCBjYWxsIHRvIHRoZSBzZXJ2ZXIuXG4gKiBcbiAqIEBwYXJhbSB0b1NlbmQgVGhlIHBhY2tldCBvZiBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIGFuIEFQSSBlbmRwb2ludFxuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCB0aGF0IHRoZSBkZW1vIGZpbGUgaXMgbm90IGZvdW5kXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBkZW1vIGZpbGUgbm90IGZvdW5kLCBmb3IgUE9TVCByZXF1ZXN0cyBvbmx5XG4gKi9cbmZ1bmN0aW9uIGNoZWNrRGVtb0FQSSh0b1NlbmQsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgY29uc3QgaHNoID0gaGFzaC5zaGExKHRvU2VuZCk7XG4gICAgY29uc29sZS5sb2coXCJDSEVDS0lORyBERU1PQVBJOiBcIiArIGhzaCk7XG4gICAgaWYgKERlbW9BUEkuaGFzT3duUHJvcGVydHkoaHNoKSkge1xuICAgICAgICAvLyBSZWxpZXMgb24gYSBzeW1ib2xpYyBsaW5rIGJlaW5nIHByZXNlbnQgaW4gdGhlIGRpc3QgZm9sZGVyIHRvIHRoZSBkZW1vIGZvbGRlclxuICAgICAgICBjb25zdCBwYXRoID0gJy4vZGVtby8nICsgRGVtb0FQSVtoc2hdXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIFNFTkRJTkcgU1RBVElDOiBcIiwgcGF0aCk7XG4gICAgICAgIGNvbnN0IGZvbGxvdyA9IChyZXNwb25zZSkgPT4gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG4gICAgICAgIHJldHVybiBmZXRjaChwYXRoKS50aGVuKGZvbGxvdylcbiAgICB9XG4gICAgcmV0dXJuIGQzLmpzb24oYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VVUkwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZXVybCArICcvYXBpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsRGV0YWlscyhtb2RlbDogc3RyaW5nLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTW9kZWxEZXRhaWxSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvZ2V0LW1vZGVsLWRldGFpbHNcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TWV0YUF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2F0dGVuZCttZXRhXCIsIHRvU2VuZClcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICAvLyBBZGQgaGFzaCBhbmQgdmFsdWUgdG8gaGFzaE9ialxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgZGlzcGxheSBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gdGhhdCB3YXMgYWxyZWFkeSBwYXJzZWQgZnJvbSB0aGUgcGFzc2VkIHNlbnRlbmNlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhIFRoZSBkaXNwbGF5ZWQgdG9rZW5zIGluIHRoZSBjb2x1bW5zIFxuICAgICAqIEBwYXJhbSBzZW50ZW5jZUEgVGhlIG9yaWdpbmFsIHNlbnRlbmNlIHRoYXQgbGVkIHRvIHRoZSB0b2tlbml6ZWQgaW5mb3JtYXRpb24gaW4gYGFgXG4gICAgICogQHBhcmFtIGxheWVyIFdoaWNoIGxheWVyIHRvIHNlYXJjaCBhdFxuICAgICAqIEBwYXJhbSBoYXNoT2JqIElmIG5vdCBudWxsLCBzdG9yZSB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHJlc3BvbnNlcyBpbnRvIHRoZSBwYXNzZWQgb2JqZWN0LiBVc2VkIGZvciBjcmVhdGluZyBkZW1vcy5cbiAgICAgKi9cbiAgICB1cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsOiBzdHJpbmcsIHRva2VuczogVG9rZW5EaXNwbGF5LCBzZW50ZW5jZTogc3RyaW5nLCBsYXllcjogbnVtYmVyLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHRva2VuczogUi5tYXAoUi5wcm9wKCd0ZXh0JyksIHRva2Vucy50b2tlbkRhdGEpLFxuICAgICAgICAgICAgc2VudGVuY2U6IHNlbnRlbmNlLFxuXG4gICAgICAgICAgICAvLyBFbXB0eSBtYXNrcyBuZWVkIHRvIGJlIHNlbnQgYXMgYSBudW1iZXIsIHVuZm9ydHVuYXRlbHkuIENob29zaW5nIC0xIGZvciB0aGlzXG4gICAgICAgICAgICBtYXNrOiB0b2tlbnMubWFza0luZHMubGVuZ3RoID8gdG9rZW5zLm1hc2tJbmRzIDogWy0xXSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy91cGRhdGUtbWFzaycpO1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gdG9QYXlsb2FkKHRvU2VuZClcblxuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwsIHBheWxvYWQpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBQT1NUIFwiICsgdXJsLCBwYXlsb2FkKTtcblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsLCBwYXlsb2FkKVxuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyB4XyBmcm9tICcuLi9ldGMvX1Rvb2xzJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLyoqXG4gKiBOb3RlczpcbiAqIFxuICogLSBBbHNvIGVuY2Fwc3VsYXRlIHRoZSBDTFMvU0VQIGluZm8gdnMuIG5vIENMUy9TRVAgaW5mb1xuICogLSBXaGVuIGxheWVyIGZvcm1hdCBjaGFuZ2VzIGZyb20gbGlzdCwgZHJvcCB0aGUgaW5kZXggaW50byBjb25mLmxheWVyXG4gKi9cblxuY29uc3QgYnBlVG9rZW5zID0gW1wiW0NMU11cIiwgXCJbU0VQXVwiLCBcIjxzPlwiLCBcIjwvcz5cIiwgXCI8fGVuZG9mdGV4dHw+XCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBUaGUgb3JpZ2luYWwgdG9rZW5zLCBhbmQgdGhlIGluZGV4ZXMgdGhhdCBuZWVkIHRvIGJlIG1hc2tlZFxuICovXG4gY29uc3QgZW1wdHlGdWxsUmVzcG9uc2U6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSA9IFt7XG4gICAgIHRleHQ6ICdbU0VQXScsXG4gICAgIHRvcGtfd29yZHM6IFtdLFxuICAgICB0b3BrX3Byb2JzOiBbXVxuIH1dXG5cbmV4cG9ydCBjbGFzcyBUb2tlbkRpc3BsYXkgIHtcbiAgICB0b2tlbkRhdGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdXG4gICAgbWFza0luZHM6bnVtYmVyW11cblxuICAgIGNvbnN0cnVjdG9yKHRva2Vucz1lbXB0eUZ1bGxSZXNwb25zZSwgbWFza0luZHM9W10pe1xuICAgICAgICB0aGlzLnRva2VuRGF0YSA9IHRva2VucztcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IG1hc2tJbmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggaWR4IHRvIHRoZSBtYXNrIGlkeCBsaXN0IGluIG9yZGVyIGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdFxuICAgICAqL1xuICAgIG1hc2sodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgeF8ub3JkZXJlZEluc2VydF8odGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsfSBhbHJlYWR5IGluIG1hc2tJbmRzIWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXNrSW5kcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVubWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMudW5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFzayh2YWwpIHtcbiAgICAgICAgXy5wdWxsKHRoaXMubWFza0luZHMsIHZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRNYXNrKCkge1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gW107XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbmNhdChvdGhlcjogVG9rZW5EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IF8uY29uY2F0KHRoaXMudG9rZW5EYXRhLCBvdGhlci50b2tlbkRhdGEpO1xuICAgICAgICBjb25zdCBuZXdNYXNrID0gXy5jb25jYXQodGhpcy5tYXNrSW5kcywgb3RoZXIubWFza0luZHMubWFwKHggPT4geCArIHRoaXMubGVuZ3RoKCkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbkRpc3BsYXkobmV3VG9rZW5zLCBuZXdNYXNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbldyYXBwZXIge1xuICAgIGE6IFRva2VuRGlzcGxheVxuXG4gICAgY29uc3RydWN0b3Iocjp0cC5BdHRlbnRpb25SZXNwb25zZSl7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZyb21SZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc0EgPSByLmFhLmxlZnQ7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUNvbXBvbmVudHModG9rZW5zQSwgW10pXG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbUNvbXBvbmVudHMoYTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10sIG1hc2tBOm51bWJlcltdKXtcbiAgICAgICAgdGhpcy5hID0gbmV3IFRva2VuRGlzcGxheShhLCBtYXNrQSlcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbnMocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZGVzaXJlZEtleXMgPSBbJ2NvbnRleHRzJywgJ2VtYmVkZGluZ3MnLCAndG9wa19wcm9icycsICd0b3BrX3dvcmRzJ11cbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gci5hYS5sZWZ0Lm1hcCh2ID0+IFIucGljayhkZXNpcmVkS2V5cywgdikpXG5cbiAgICAgICAgY29uc3QgcGFpcnMgPSBSLnppcCh0aGlzLmEudG9rZW5EYXRhLCBuZXdUb2tlbnMpXG5cbiAgICAgICAgcGFpcnMuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZFsxXSkubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgIGRbMF1ba10gPSBkWzFdW2tdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFzayB0aGUgYXBwcm9wcmlhdGUgc2VudGVuY2UgYXQgdGhlIGluZGV4IGluZGljYXRlZFxuICAgICAqL1xuICAgIG1hc2soc0lEOnRwLlRva2VuT3B0aW9ucywgaWR4Om51bWJlcil7XG4gICAgICAgIHRoaXNbc0lEXS5tYXNrKGlkeClcbiAgICAgICAgY29uc3Qgb3B0cyA9IFtcImFcIiwgXCJiXCJdXG4gICAgICAgIGNvbnN0IE5hID0gdGhpcy5hLmxlbmd0aCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVUb0xldHRlcihzaWRlOnRwLlNpZGVPcHRpb25zLCBhdHlwZTp0cC5TZW50ZW5jZU9wdGlvbnMpe1xuICAgIC8vIGNvbnN0IGF0eXBlID0gY29uZi5hdHRUeXBlO1xuICAgIGlmIChhdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcImFsbFwiXG4gICAgfVxuICAgIGNvbnN0IG91dCA9IHNpZGUgPT0gXCJsZWZ0XCIgPyBhdHlwZVswXSA6IGF0eXBlWzFdIC8vIE5vIHR5cGUgY2hlY2tpbmc/XG4gICAgcmV0dXJuIG91dFxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIHN0YXRpYyB0cmFuc2xhdGUoe3gsIHl9KTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRycyh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NlcyxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFNWRy50cmFuc2xhdGUocG9zKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRycyh7eDogMCwgeTogLTIwLCBjbGFzczogY2xhc3Nlc30pXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVVJMSGFuZGxlciB7XG5cbiAgICBzdGF0aWMgYmFzaWNVUkwoKSB7XG4gICAgICAgIGNvbnN0IHVybF9wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTIpLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICh1cmxfcGF0aC5sZW5ndGggPyB1cmxfcGF0aCA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGFsbCBVUkwgcGFyYW1ldGVycyBpbnRvIGEgbWFwLlxuICAgICAqIEByZXR1cm5zIHtNYXB9IHRoZSB1cmwgcGFyYW1ldGVycyBhcyBhIGtleS12YWx1ZSBzdG9yZSAoRVM2IG1hcClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tOiAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDkwNTUxL3BhcnNlLXF1ZXJ5LXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJzLCBcIi0tLSB2YXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSB7fTtcblxuICAgICAgICBjb25zdCBpc0ludCA9IHggPT4gKC9eWzAtOV0rJC8pLnRlc3QoeCk7XG4gICAgICAgIGNvbnN0IGlzRmxvYXQgPSB4ID0+ICgvXlswLTldK1xcLlswLTldKiQvKS50ZXN0KHgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVDYXN0ID0gdmFsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFycy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3X3ZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1sxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcmF3X3ZhbHVlLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3X3ZhbHVlID0gcmF3X3ZhbHVlLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYXdfdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSBpc0FycmF5ID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gcmF3X3ZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHR5cGVDYXN0KHZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHR5cGVDYXN0KHJhd192YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsUGFyYW1ldGVycztcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFVSTCBzdHJpbmcgZnJvbSBhIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7e319IHVybFBhcmFtZXRlcnMgLSB0aGUgbWFwIG9mIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFVSSSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsU3RyaW5nKHVybFBhcmFtZXRlcnM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBhdHRyID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtZXRlcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdXJsUGFyYW1ldGVyc1trXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB2YWx1ZSA9ICcuLicgKyB2LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBhdHRyLnB1c2goZW5jb2RlVVJJKGsgKyAnPScgKyB2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcmVzID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXMgKz0gJz8nICsgYXR0ci5qb2luKCcmJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVSTFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYW55W10sIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybChjdXJyZW50UGFyYW1zLCBhZGRUb0Jyb3dzZXJIaXN0b3J5KTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBHZW5lcmF0ZXMgYSBrZXktdmFsdWUgbWFwIG9mIGFsbCBVUkwgcGFyYW1zIGFuZCByZXBsYWNlcyByZXBsYWNlS2V5c1xuICAgIC8vICAqIEBwYXJhbSB1cGRhdGVLZXlzXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHVwZGF0ZVVSTFBhcmFtcyh1cGRhdGVLZXlzKSB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgLy8gICAgIE9iamVjdC5rZXlzKHVwZGF0ZUtleXMpLmZvckVhY2goKGspID0+IGN1cnJlbnRQYXJhbXNba10gPSB1cGRhdGVLZXlzW2tdKVxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFBhcmFtcztcbiAgICAvLyB9XG5cblxuICAgIHN0YXRpYyB1cGRhdGVVcmwodXJsUGFyYW1ldGVyczogb2JqZWN0LCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoYWRkVG9Ccm93c2VySGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHsgcHJlZml4ID0gJycgfSk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX2lkX2NvdW50ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5cbi8qKlxuICogU2VsZWN0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIHNob3VsZCBiZSBzdGF0aWMgbWV0aG9kcyBpbiB0aGUgYmVsb3cgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbCB7XG4gICAgc3RhdGljIHNldFNlbFZpc2libGUgPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIHN0YXRpYyBzZXRWaXNpYmxlID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbFZpc2libGUoZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBzZXRIaWRkZW4gPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnfSlcbiAgICBzdGF0aWMgdW5oaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGx9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvb3NlT2JqZWN0IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGFzY09yZGVyKG4xLCBuMikge1xuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikgeyBcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQge2ZpbmRBbGxJbmRleGVzLCBpbnNlcnRBdF8sIG9yZGVyZWRJbnNlcnRfLCBzZXQyU29ydGVkQXJyYXl9XG5cbi8qKlxuICogRmluZCBhbGwgaW5kZXhlcyB0aGF0IG1hdGNoIGEgcGFydGljdWxhciBwcmVkaWNhdGVcbiAqL1xuZnVuY3Rpb24gZmluZEFsbEluZGV4ZXM8VD4oYXJyYXk6QXJyYXk8VD4sIHByZWRpY2F0ZTooYTpUKSA9PiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGxldCBmcm9tSW5kZXg9MDtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHdoaWxlIChpICE9IC0xKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICAgICAgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGkrMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGluc2VydEF0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGluZDpudW1iZXIpOkFycmF5PFQ+IHtcbiAgICBhcnJheS5zcGxpY2UoaW5kLCAwLCB2YWwpO1xuICAgIHJldHVybiBhcnJheVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzZXQgdG8gYW4gb3JkZXJlZCBhcnJheVxuICovXG5mdW5jdGlvbiBzZXQyU29ydGVkQXJyYXk8VD4oaW5wdXQ6U2V0PFQ+KTpBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoYXNjT3JkZXIpXG59XG5cbi8qKlxuICogSW5zZXJ0IGEgdmFsdWUgaW50byBhcnJheSBpbiBzb3J0ZWQgb3JkZXIgSU4gUExBQ0VcbiAqIFxuICogV0FSTklORzogT25seSBoYW5kbGVzIG51bWJlcnMsIHNvcnRlZCBmcm9tIGxlYXN0IHRvIGdyZWF0ZXN0XG4gKiAtIEFzc3VtZXMgYWxyZWFkeSBzb3J0ZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZEluc2VydF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBjb2xkc3RhcnQ9ZmFsc2UpOkFycmF5PFQ+IHtcbiAgICAvLyBSZXNvcnQgYXJyYXkgaWYgZGVzaXJlZFxuICAgIGlmIChjb2xkc3RhcnQpIHtcbiAgICAgICAgYXJyYXkuc29ydChhc2NPcmRlcilcbiAgICB9XG5cbiAgICBjb25zdCBpbmQgPSBfLnNvcnRlZEluZGV4KGFycmF5LCB2YWwpO1xuICAgIHJldHVybiBpbnNlcnRBdF8oYXJyYXksIHZhbCwgaW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmRvbShsZW46bnVtYmVyKXtcbiAgY29uc3QgYTpudW1iZXJbXSA9IG5ldyBBcnJheShsZW4pLmZpbGwoMClcblxuICByZXR1cm4gYS5tYXAoKHgpID0+IHtyZXR1cm4gXy5yYW5kb20oLTUsIDUsIHRydWUpfSlcbn0iLCIvKipcbiAqIENvbnZlcnQgYSBKUyBvYmplY3QgaW50byBHRVQgVVJMIHBhcmFtZXRlcnNcbiAqIFxuICogQHBhcmFtIGJhc2UgQmFzZSBVUkwgYXRvcCB3aGljaCB0byBhZGQgR0VUIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHRvIGluc2VydCBpbnRvIGEgVVJMIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVybChiYXNlOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6c3RyaW5nIHtcbiAgICBpZiAocGFyYW1zKXtcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gYmFzZSArIFwiP1wiO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCggayA9PiB7XG4gICAgICAgICAgICBvdXQgKz0gaztcbiAgICAgICAgICAgIG91dCArPSAnPSc7XG4gICAgICAgICAgICBvdXQgKz0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgb3V0ICs9IFwiJlwiO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0LnJlcGxhY2UoLyYkL2csIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGluZm9ybWF0aW9uIGluIEdFVCByZXF1ZXN0IGludG8gdGhlIG1lc3NhZ2UgZm9yIGEgUE9TVCByZXF1ZXN0ICAgIFxuICovXG5leHBvcnQgY29uc3QgdG9QYXlsb2FkID0gKHRvU2VuZCkgPT4ge3JldHVybiB7XG4gICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodG9TZW5kKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG59fSIsIi8vIFtbdmFsLCBpbmRdLCBbdmFsLCBpbmRdLi4uXVxudHlwZSBDb21wRm5JbmQgPSAoYTpudW1iZXJbXSwgYjpudW1iZXJbXSkgPT4gbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRBcnJheSB7XG4gICAgYXJyOiBudW1iZXJbXSxcbiAgICBzb3J0SW5kaWNlczogbnVtYmVyW10sXG59XG5cbi8qKlxuICogQ29waWVzIGFuZCBzb3J0cyBhbiBhcnJheSB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHRoZSBpbmRpY2VzLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzb3J0aW5nIG1heCAtPiBtaW4uXG4gKiBcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byBiZSBjb3BpZWQgYW5kIHNvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdpdGhJbmRpY2VzKGFycjpudW1iZXJbXSwgZm4/OkNvbXBGbkluZCk6IFNvcnRBcnJheSB7XG4gICAgLy8gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHNvcnRpbmcgYnkgbWF4IHZhbHVlXG4gICAgaWYgKCFmbikge1xuICAgICAgICBmbiA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV0IG91dDpTb3J0QXJyYXkgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIHNvcnRJbmRpY2VzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgaWR4VHJhY2tlcjogbnVtYmVyW11bXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkeFRyYWNrZXJbaV0gPSBbYXJyW2ldLCBpXTtcbiAgICB9XG5cbiAgICBpZHhUcmFja2VyLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgb3V0LnNvcnRJbmRpY2VzLnB1c2goaWR4VHJhY2tlcltqXVsxXSk7XG4gICAgICBvdXQuYXJyW2pdID0gaWR4VHJhY2tlcltqXVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9IiwiaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi9VdGlsXCJcblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTUE9OU0VTIEZST00gQkFDS0VORFxuICpcbiAqIENvbnRhaW4gdGhlIGF0dGVudGlvbnMgYW5kIGVtYmVkZGluZ3MgZm9yIGFsbCBjb21iaW5hdGlvbnMgb2YgcmV0dXJucyBmcm9tIHRoZSBiYWNrZW5kXG4gKi9cblxuZXhwb3J0IHR5cGUgTW9kZWxJbmZvID0ge1xuICAgIG5sYXllcnM6IG51bWJlclxuICAgIG5oZWFkczogbnVtYmVyXG59XG5cblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTVUxUUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHJlc3VsdHMgdGhhdCBhcmUgZW5jYXNlZCBpbiB0aGUgJ2FhJyBhbmQgJ2FiJyBrZXlzIHJldHVybmVkXG4gKi9cbnR5cGUgQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxUPiA9IHtcbiAgICBhYTogVFxufVxuXG5leHBvcnQgdHlwZSBBdHRlbnRpb25SZXNwb25zZSA9IEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8QXR0ZW50aW9uTWV0YVJlc3VsdD5cbmV4cG9ydCB0eXBlIEF0dGVudGlvbk1ldGFSZXN1bHQgPSBBYnN0cmFjdEF0dGVudGlvblJlc3VsdDxGdWxsU2luZ2xlVG9rZW5JbmZvW10+XG5cbmV4cG9ydCB0eXBlIEZ1bGxTaW5nbGVUb2tlbkluZm8gPSB7XG4gICAgdGV4dDogc3RyaW5nLFxuICAgIHRvcGtfd29yZHM6IHN0cmluZ1tdLFxuICAgIHRvcGtfcHJvYnM6IG51bWJlcltdXG59XG5cbmludGVyZmFjZSBBYnN0cmFjdEF0dGVudGlvblJlc3VsdDxUPiB7XG4gICAgYXR0OiBudW1iZXJbXVtdW10sXG4gICAgbGVmdDogVCxcbiAgICByaWdodDogVCxcbn1cblxuLyoqXG4gKiBTRUFSQ0ggUkVTVUxUIFRZUEVTXG4gKi9cblxuaW50ZXJmYWNlIE1hdGNoZWRUb2tBdHQge1xuICAgIGF0dDogbnVtYmVyW11cbiAgICBvZmZzZXRfdG9fbWF4OiBudW1iZXJcbiAgICBsb2Nfb2ZfbWF4OiBudW1iZXJcbn1cblxuXG5pbnRlcmZhY2UgTWF0Y2hlZEF0dGVudGlvbnMge1xuICAgIGluOiBNYXRjaGVkVG9rQXR0LFxuICAgIG91dDogTWF0Y2hlZFRva0F0dCxcbn1cblxuLyoqXG4gKiBFVkVOVCBUWVBFU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRXZlbnQge1xuICAgIHNlbD86IEQzU2VsLFxuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyIHwgXCJudWxsXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FbWJlZGRpbmdFdmVudCBleHRlbmRzIFRva2VuRXZlbnQge1xuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIEhlYWRCb3hFdmVudCA9IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlcixcbiAgICBoZWFkOiBudW1iZXIsXG59XG5cbi8qKlxuICogTUlTQ0VMTEFORU9VUyBUWVBFU1xuICovXG5cbmV4cG9ydCB0eXBlIFNpZGVPcHRpb25zID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCJcblxuZXhwb3J0IGVudW0gVG9nZ2xlZCB7XG4gICAgQURERUQgPSAwLFxuICAgIFJFTU9WRUQsXG59XG5cbmV4cG9ydCBlbnVtIE5vcm1CeSB7XG4gICAgUk9XID0gMCxcbiAgICBDT0wsXG4gICAgQUxMXG59XG5cbmV4cG9ydCBlbnVtIE1vZGVsS2luZCB7XG4gICAgQmlkaXJlY3Rpb25hbCA9IFwiYmlkaXJlY3Rpb25hbFwiLFxuICAgIEF1dG9yZWdyZXNzaXZlID0gXCJhdXRvcmVncmVzc2l2ZVwiXG59XG5leHBvcnQgdHlwZSBUb2tlbk9wdGlvbnMgPSBcImFcIiB8IFwiYlwiIHwgXCJhbGxcIlxuZXhwb3J0IHR5cGUgU2VudGVuY2VPcHRpb25zID0gXCJhYlwiIHwgXCJiYVwiIHwgXCJhYVwiIHwgXCJiYlwiIHwgXCJhbGxcIjsiLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyAgXG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ2luaXRpYWwnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xuICB9XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24odGFnTmFtZSkgeyAgXG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gIFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn0iLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL2F0dGVudGlvblZpcydcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9ZXhCRVJULmh0bWwhLi4vZXhCRVJULmh0bWxcIjtcbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi4vaW5kZXguaHRtbFwiO1xuaW1wb3J0IFwiLi4vY3NzL21haW4uc2Nzc1wiXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbnRpb24tdmlzJylcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBjb25zdCBtYWluVmlzID0gbmV3IE1haW5HcmFwaGljKGJhc2UpXG4gICAgY29uc29sZS5sb2coXCJEb25lIGxvYWRpbmcgd2luZG93XCIpO1xufVxuIiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vZXRjL3R5cGVzXCJcbmltcG9ydCAqIGFzIHhfIGZyb20gXCIuL2V0Yy9fVG9vbHNcIlxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSBcIi4vZXRjL1VSTEhhbmRsZXJcIjtcblxuY29uc3QgZmFsc2V5ID0gdmFsID0+IChuZXcgU2V0KFsnZmFsc2UnLCAwLCBcIm5vXCIsIGZhbHNlLCBudWxsLCBcIlwiXSkpLmhhcyh2YWwpXG5jb25zdCB0cnV0aHkgPSB2YWwgPT4gIWZhbHNleSh2YWwpXG5jb25zdCB0b051bWJlciA9IHggPT4gK3g7XG5cblxudHlwZSBJbnNwZWN0b3JPcHRpb25zID0gXCJjb250ZXh0XCIgfCBcImVtYmVkZGluZ3NcIiB8IG51bGxcblxuLy8gTXVzdCBiZSBvcHRpb25hbCBwYXJhbXMgZm9yIGluaXRpYWxpemF0aW9uc1xuaW50ZXJmYWNlIFVSTFBhcmFtZXRlcnMge1xuICAgIHNlbnRlbmNlPzogc3RyaW5nXG4gICAgbW9kZWw/OiBzdHJpbmdcbiAgICBtb2RlbEtpbmQ/OiBzdHJpbmdcbiAgICBsYXllcj86IG51bWJlclxuICAgIGhlYWRzPzogbnVtYmVyW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICB0b2tlbkluZD86IG51bWJlciB8ICdudWxsJ1xuICAgIHRva2VuU2lkZT86IHRwLlNpZGVPcHRpb25zXG4gICAgbWFza0luZHM/OiBudW1iZXJbXVxuICAgIGhpZGVDbHNTZXA/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBVSUNvbmZpZyB7XG5cbiAgICBwcml2YXRlIF9jb25mOiBVUkxQYXJhbWV0ZXJzID0ge31cbiAgICBwcml2YXRlIF9oZWFkU2V0OiBTZXQ8bnVtYmVyPjtcbiAgICBhdHRUeXBlOiBcImFhXCJcbiAgICBfbkhlYWRzOiBudW1iZXIgfCBudWxsO1xuICAgIF9uTGF5ZXJzOiBudW1iZXIgfCBudWxsO1xuICAgIHByaXZhdGUgX3Rva2VuOiB0cC5Ub2tlbkV2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX25IZWFkcyA9IDEyOyBcbiAgICAgICAgdGhpcy5fbkxheWVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuYXR0VHlwZSA9ICdhYSdcbiAgICAgICAgdGhpcy5mcm9tVVJMKClcbiAgICAgICAgdGhpcy50b1VSTChmYWxzZSlcbiAgICB9XG5cbiAgICB0b1VSTCh1cGRhdGVIaXN0b3J5ID0gZmFsc2UpIHtcbiAgICAgICAgVVJMSGFuZGxlci51cGRhdGVVcmwodGhpcy5fY29uZiwgdXBkYXRlSGlzdG9yeSlcbiAgICB9XG5cblxuICAgIGZyb21VUkwoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYgPSB7XG4gICAgICAgICAgICBtb2RlbDogcGFyYW1zWydtb2RlbCddIHx8ICdiZXJ0LWJhc2UtY2FzZWQnLFxuICAgICAgICAgICAgbW9kZWxLaW5kOiBwYXJhbXNbJ21vZGVsS2luZCddIHx8IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHBhcmFtc1snc2VudGVuY2UnXSB8fCBcIlRoZSBnaXJsIHJhbiB0byBhIGxvY2FsIHB1YiB0byBlc2NhcGUgdGhlIGRpbiBvZiBoZXIgY2l0eS5cIixcbiAgICAgICAgICAgIGxheWVyOiBwYXJhbXNbJ2xheWVyJ10gfHwgMSxcbiAgICAgICAgICAgIGhlYWRzOiB0aGlzLl9pbml0SGVhZHMocGFyYW1zWydoZWFkcyddKSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcGFyYW1zWyd0aHJlc2hvbGQnXSB8fCAwLjcsXG4gICAgICAgICAgICB0b2tlbkluZDogcGFyYW1zWyd0b2tlbkluZCddIHx8IG51bGwsXG4gICAgICAgICAgICB0b2tlblNpZGU6IHBhcmFtc1sndG9rZW5TaWRlJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbmRzOiBwYXJhbXNbJ21hc2tJbmRzJ10gfHwgWzldLFxuICAgICAgICAgICAgaGlkZUNsc1NlcDogdHJ1dGh5KHBhcmFtc1snaGlkZUNsc1NlcCddKSB8fCB0cnVlLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB7IHNpZGU6IHRoaXMuX2NvbmYudG9rZW5TaWRlLCBpbmQ6IHRoaXMuX2NvbmYudG9rZW5JbmQgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEhlYWRzKHY6IG51bWJlcltdIHwgbnVsbCkge1xuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHYubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRTZXQobmV3IFNldCh2KSkuX2NvbmYuaGVhZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZHMoKVxuICAgIH1cblxuICAgIG5IZWFkcygpOiBudW1iZXJcbiAgICBuSGVhZHModmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbkhlYWRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkhlYWRzXG4gICAgICAgIHRoaXMuX25IZWFkcyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG5MYXllcnMoKTogbnVtYmVyXG4gICAgbkxheWVycyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuTGF5ZXJzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkxheWVyc1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb0hlYWRzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICB0aGlzLmhlYWRTZXQobmV3IFNldChfLnJhbmdlKDAsIHRoaXMuX25IZWFkcykpKVxuICAgIH1cblxuICAgIHNlbGVjdE5vSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KFtdKSlcbiAgICB9XG5cbiAgICB0b2dnbGVIZWFkKGhlYWQ6IG51bWJlcik6IHRwLlRvZ2dsZWQge1xuICAgICAgICBsZXQgb3V0O1xuICAgICAgICBpZiAodGhpcy5oZWFkU2V0KCkuaGFzKGhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5kZWxldGUoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLlJFTU9WRURcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmFkZChoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuQURERURcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aHJvdWdoIHNldHRlciBmdW5jdGlvbiB0byBlbnN1cmUgdXJsIGlzIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5oZWFkU2V0KHRoaXMuaGVhZFNldCgpKTsgLy8gSSBoYXRlIG11dGFibGUgZGF0YXN0cnVjdHVyZXMuLi4gVGhpcyBpcyBjb25mdXNpbmcuXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHRvZ2dsZVRva2VuKGU6IHRwLlRva2VuRXZlbnQpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgcGlja2VyID0gUi5waWNrKFsnaW5kJywgJ3NpZGUnXSlcbiAgICAgICAgY29uc3QgY29tcGFyZUV2ZW50ID0gcGlja2VyKGUpXG4gICAgICAgIGNvbnN0IGNvbXBhcmVUb2tlbiA9IHBpY2tlcih0aGlzLnRva2VuKCkpXG5cbiAgICAgICAgaWYgKFIuZXF1YWxzKGNvbXBhcmVUb2tlbiwgY29tcGFyZUV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ybVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRva2VuKCk6IHRwLlRva2VuRXZlbnQ7XG4gICAgdG9rZW4odmFsOiB0cC5Ub2tlbkV2ZW50KTogdGhpcztcbiAgICB0b2tlbih2YWw/OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlblxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuSW5kID0gdmFsLmluZDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlblNpZGUgPSB2YWwuc2lkZTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGFzVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLl9jb25mXG4gICAgICAgIGNvbnN0IGFjdHVhbGx5TnVsbCA9ICgoY29uZi50b2tlbkluZCA9PSBudWxsKSAmJiAoY29uZi50b2tlblNpZGUgPT0gbnVsbCkpXG4gICAgICAgIGNvbnN0IHN0ck51bGwgPSAoY29uZi50b2tlbkluZCA9PSBcIm51bGxcIilcbiAgICAgICAgcmV0dXJuICghYWN0dWFsbHlOdWxsKSAmJiAoIXN0ck51bGwpXG4gICAgfVxuXG4gICAgcm1Ub2tlbigpIHtcbiAgICAgICAgdGhpcy50b2tlbih7IGluZDogbnVsbCwgc2lkZTogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWFza0luZHMoKTogbnVtYmVyW107XG4gICAgbWFza0luZHModmFsOiBudW1iZXJbXSk6IHRoaXM7XG4gICAgbWFza0luZHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1hc2tJbmRzO1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWFza0luZHMgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZUNsc1NlcCgpOiBib29sZWFuO1xuICAgIGhpZGVDbHNTZXAodmFsOiBib29sZWFuKTogdGhpcztcbiAgICBoaWRlQ2xzU2VwKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5oaWRlQ2xzU2VwO1xuXG4gICAgICAgIHRoaXMuX2NvbmYuaGlkZUNsc1NlcCA9IHRydXRoeSh2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1vZGVsKCk6IHN0cmluZztcbiAgICBtb2RlbCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWwodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsXG4gICAgICAgIHRoaXMuX2NvbmYubW9kZWwgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG1vZGVsS2luZCgpOiBzdHJpbmc7XG4gICAgbW9kZWxLaW5kKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBtb2RlbEtpbmQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsS2luZFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsS2luZCA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBvZmZzZXQgbmVlZGVkIGZvciB0aGUgbW9kZWxLaW5kIGluIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNob3dOZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICBnZXQgbWF0Y2hIaXN0b2dyYW1EZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlID8gXCJOZXh0XCIgOiBcIk1hdGNoZWRcIlxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgRWRnZSwgRWRnZURhdGEgfSBmcm9tIFwiLi9FZGdlQ29ubmVjdG9yXCJcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uRGF0YSA9IG51bWJlcltdW11cblxuZXhwb3J0IGNvbnN0IHNjYWxlTGluZWFyV2lkdGggPSBvcGFjaXR5ID0+IDUgKiBvcGFjaXR5XjAuMzM7XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25HcmFwaCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uRGF0YT57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uRGF0YTsgLy8gVGhlIHBhc3NlZCBkYXRhXG4gICAgZWRnZURhdGE6IEVkZ2VEYXRhOyAvLyBBIHdyYXBwZXIgYXJvdW5kIF9kYXRhLiBVc2VyIHNob3VsZCBub3QgbWluZFxuICAgIHBsb3REYXRhOiBFZGdlW107IC8vIE5lZWRlZCBmb3IgcGxvdHRpbmdcblxuICAgIC8qKiBDT01QT05FTlRTXG4gICAgICogRXhwb3NlIHRoZSBjb21wb25lbnRzIGJlbG9uZ2luZyB0byB0aGUgY2xhc3MgYXMgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MuIFxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBtZXRob2RzIHRoYXQgc3BlY2lmaWNhbGx5IG1vZGlmeSBhIHNpbmdsZSBwYXJ0IG9yIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byByZXNlbGVjdCBpdC4gXG4gICAgICogTWFrZXMgZm9yIG1vcmUgcmVzcG9uc2l2ZSBhcHBsaWNhdGlvbnNcbiAgICAgKiAqL1xuICAgIHN2ZzogRDNTZWw7XG4gICAgZ3JhcGg6IEQzU2VsO1xuXG4gICAgLy8gVGhlIGJlbG93IGNvbXBvbmVudHMgcmVxdWlyZSBkYXRhXG4gICAgcGF0aHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZXM6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdO1xuICAgIGxpbmtHZW46IGQzLkxpbms8YW55LCBhbnksIGFueT5cblxuICAgIC8vIE9QVElPTlMgV0lUSCBERUZBVUxUU1xuICAgIF90aHJlc2hvbGQgPSAwLjc7IC8vIEFjY3VtdWxhdGlvbiB0aHJlc2hvbGQuIEJldHdlZW4gMC0xXG4gICAgbm9ybUJ5OiB0cC5Ob3JtQnlcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fSAvLyBObyBldmVudHMgbmVlZGVkIGZvciB0aGlzIG9uZVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNiwgLy8gVGhlIGhlaWdodCBvZiB0aGUgZGl2IGJveGVzIGFyb3VuZCB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIG9mZnNldDogMCwgLy8gU2hvdWxkIEkgb2Zmc2V0IHRoZSBsZWZ0IHNpZGUgYnkgMSBvciBub3Q/XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuZ3JhcGggPSB0aGlzLnN2Zy5zZWxlY3RBbGwoYC5hdG4tY3VydmVgKTtcbiAgICAgICAgdGhpcy5saW5rR2VuID0gZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgLngoZCA9PiBkWzBdKVxuICAgICAgICAgICAgLnkoZCA9PiBkWzFdKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgd2hldGhlciB0byB1c2UgdGhlICdqJyBvciAnaScgYXR0cmlidXRlIHRvIGNhbGN1bGF0ZSBvcGFjaXRpZXNcbiAgICBwcml2YXRlIHNjYWxlSWR4KCk6IFwiaVwiIHwgXCJqXCIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm9ybUJ5KSB7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5DT0w6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdqJ1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuUk9XOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaSdcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFMTDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2knXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gbG9jYXRpb25zIG9mIHRoZSBTVkcgdXNpbmcgRDMncyBsaW5rR2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25uZWN0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5wYXRocykge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRycyh7XG4gICAgICAgICAgICAgICAgJ2QnOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiB7IHNvdXJjZTogW251bWJlciwgbnVtYmVyXSwgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdIH0gPVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFswLCBvcC5ib3hoZWlnaHQgKiAoZC5pICsgMC41ICsgb3Aub2Zmc2V0KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtvcC53aWR0aCwgb3AuYm94aGVpZ2h0ICogKGQuaiArIDAuNSldIC8vICsgMiBhbGxvd3Mgc21hbGwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtHZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYXRuLWN1cnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyYy1pZHhcIiwgKGQsIGkpID0+IGQuaSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRhcmdldC1pZHhcIiwgKGQsIGkpID0+IGQuaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGhlaWdodCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcImhlaWdodFwiLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICsgKG9wLm9mZnNldCAqIHRoaXMub3B0aW9ucy5ib3hoZWlnaHQpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2lkdGggb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwid2lkdGhcIiwgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgT3BhY2l0eSBvZiB0aGUgbGluZXMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZFtzZWxmLnNjYWxlSWR4KCldXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkW3NlbGYuc2NhbGVJZHgoKV1dKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlTGluZWFyV2lkdGgodmFsKSAvLzUgKiB2YWxeMC4zMztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVyZW5kZXIgdGhlIGdyYXBoIGluIHRoZSBldmVudCB0aGF0IHRoZSBkYXRhIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hdG4tY3VydmVcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBsb3REYXRhXG5cbiAgICAgICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLmdyYXBoXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAuam9pbigncGF0aCcpO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgb3BhY2l0eSBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlcyBvZiB0aGUgZGF0YSwgZnJvbSAwIHRvIG1heCBvZiBjb250YWluZWQgZGF0YVxuICAgICAqIE5vcm1hbGl6ZSBieSBlYWNoIHNvdXJjZSB0YXJnZXQsIG9yIGFjcm9zcyB0aGUgd2hvbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNjYWxlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgIGxldCBhcnIgPSBbXVxuXG4gICAgICAgIC8vIEdyb3VwIG5vcm1hbGl6YXRpb25cbiAgICAgICAgc3dpdGNoICh0aGlzLm5vcm1CeSl7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5ST1c6XG4gICAgICAgICAgICAgICAgYXJyID0gdGhpcy5lZGdlRGF0YS5leHRlbnQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDAuOV0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQ09MOlxuICAgICAgICAgICAgICAgIGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDApO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgdlsxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAwLjldKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFMTDpcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhJbiA9IGQzLm1heCh0aGlzLnBsb3REYXRhLm1hcCgoZCkgPT4gZC52KSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzLnB1c2goZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SW5dKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3Igbm9ybWluZyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGRhdGEgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGRhdGEoKTogQXR0ZW50aW9uRGF0YVxuICAgIGRhdGEodmFsdWU6IEF0dGVudGlvbkRhdGEpOiB0aGlzXG4gICAgZGF0YSh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVkZ2VEYXRhID0gbmV3IEVkZ2VEYXRhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGhlaWdodCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlclxuICAgIGhlaWdodCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIGhlaWdodCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHdpZHRoIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB3aWR0aCgpOiBudW1iZXJcbiAgICB3aWR0aCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHdpZHRoKHZhbHVlPzogbnVtYmVyKTogdGhpcyB8IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgdGhyZXNob2xkIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyXG4gICAgdGhyZXNob2xkKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgdGhyZXNob2xkKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IFRlbnNvcjNEIH0gZnJvbSBcIkB0ZW5zb3JmbG93L3RmanNcIjtcblxuLy8gVGhlIGJlbG93IHR3byAoaW50ZXJmYWNlIGFuZCBmdW5jdGlvbikgY2FuIGJlY29tZSBhIGNsYXNzXG5leHBvcnQgdHlwZSBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICByb3dzOiBudW1iZXJbXVtdLFxuICAgIGxhYmVsczogbnVtYmVyW10sXG4gICAgbWF4OiBudW1iZXIsXG59XG5cbi8qKlxuICogRnJvbSBhbiBhdHRlbnRpb24gbWF0cml4IHNlbGVjdGVkIGJ5IGxheWVyLCBzaG93IGEgc3VtbWFyeSBvZiB0aGUgYXR0ZW50aW9ucyBiZWxvbmdpbmcgdG8gZWFjaCBoZWFkLlxuICogXG4gKiBAcGFyYW0gaGVhZE1hdCBUaGUgbWF0cml4IHJlcHJlc2VudGluZyBhbGwgdGhlIGF0dGVudGlvbnMgYnkgaGVhZCAobGF5ZXIgYWxyZWFkeSBzZWxlY3RlZCkgPGhlYWQsIGZyb20sIHRvPlxuICogQHBhcmFtIGhlYWRMaXN0IFRoZSBoZWFkcyB0aGF0IGFyZSBzZWxlY3RlZFxuICogQHBhcmFtIHNpZGUgSXMgdGhpcyB0aGUgcmlnaHQgb3IgdGhlIGxlZnQgZGlzcGxheT9cbiAqIEBwYXJhbSB0b2tlbkluZCBJZiBub3QgbnVsbCwgc2VsZWN0IGp1c3QgdGhlIGluZm9ybWF0aW9uIGZyb20gYSBzaW5nbGUgdG9rZW4gYWNyb3NzIGhlYWRzXG4gKiBAcmV0dXJucyBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gbGFiZWwgdGhlIGhlYWRib3hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGVudGlvbkluZm8oaGVhZE1hdDogbnVtYmVyW11bXVtdLCBoZWFkTGlzdDogbnVtYmVyW10sIHNpZGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJsZWZ0XCIsIHRva2VuOiBudWxsIHwge2luZDogbnVtYmVyLCBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIn09bnVsbCk6IEF0dGVudGlvbkhlYWRCb3hJIHtcbiAgICAvLyBDb2xsZWN0IG9ubHkgZnJvbSBoZWFkbGlzdCwgYXZlcmFnZSBlYWNoIGhlYWQsIHRyYW5zcG9zZSB0byBlYXNlIGl0ZXJhdGlvblxuICAgIGlmIChoZWFkTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogW1tdXSxcbiAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGltID0gbnVsbFxuICAgIC8vIE9ubHkgY2hhbmdlIHRoZSBhdHRlbnRpb24gZ3JhcGggb3Bwb3NpdGUgc2VsZWN0ZWQgdG9rZW5cbiAgICBpZiAodG9rZW4gIT0gbnVsbCAmJiAodG9rZW4uc2lkZSAhPSBzaWRlKSkge1xuICAgICAgICBkaW0gPSB0b2tlbi5zaWRlID09IFwibGVmdFwiID8gLTIgOiAtMSAvLyBBc3NpZ24gdG8gXCJmcm9tXCIgZGlyZWN0aW9uIGlmIFwibGVmdFwiIFxuICAgIH1cblxuICAgIGxldCBheGlzOiBudW1iZXIgPSBzaWRlID09IFwibGVmdFwiID8gMiA6IDE7XG5cbiAgICAvLyBhdmVyYWdlIGFjcm9zcyB0aGUgYXhpcyByZXByZXNlbnRpbmcgdGhlIGF0dGVudGlvbnMuXG4gICAgbGV0IGdhdGhlcmVkTWF0ID0gdGYudGVuc29yM2QoaGVhZE1hdClcbiAgICBpZiAoZGltICE9IG51bGwpIHtcbiAgICAgICAgZ2F0aGVyZWRNYXQgPSBnYXRoZXJlZE1hdC5nYXRoZXIoW3Rva2VuLmluZF0sIGRpbSlcbiAgICB9XG4gICAgbGV0IG5ld01hdCA9IGdhdGhlcmVkTWF0LmdhdGhlcihoZWFkTGlzdCwgMCkubWVhbihbYXhpc10pLnRyYW5zcG9zZSgpO1xuXG4gICAgY29uc3Qgcm93SW5mbyA9IDxudW1iZXJbXVtdPm5ld01hdC5hcnJheVN5bmMoKTtcblxuICAgIGNvbnN0IG91dDogQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgICAgIHJvd3M6IHJvd0luZm8sXG4gICAgICAgIGxhYmVsczogaGVhZExpc3QsXG4gICAgICAgIG1heDogPG51bWJlcj5uZXdNYXQubWF4KCkuYXJyYXlTeW5jKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudE9wdGlvbnMge1xuICAgIGhlYWRIZWlnaHQ6IG51bWJlclxuICAgIGhlYWRXaWR0aDogbnVtYmVyXG4gICAgeFBhZDogbnVtYmVyXG4gICAgeVBhZDogbnVtYmVyXG4gICAgYm94V2lkdGg6IG51bWJlclxuICAgIHRvdGFsV2lkdGg6IG51bWJlclxuICAgIHRvdGFsSGVpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25IZWFkQm94IGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25IZWFkQm94ST57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICByb3dDc3NOYW1lID0gJ2F0dC1oZWFkJztcbiAgICBib3hDc3NOYW1lID0gJ2F0dC1yZWN0JztcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3ZlclwiLFxuICAgICAgICBib3hNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlTW92ZTogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlTW92ZVwiLFxuICAgICAgICBib3hDbGljazogXCJBdHRlbnRpb25IZWFkQm94X0JveENsaWNrXCIsXG4gICAgfTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25IZWFkQm94STtcblxuICAgIF9jdXJyZW50OiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiA9IHt9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hEaW06IDI2LFxuICAgICAgICB5c2NhbGU6IDEsIC8vIEFtb3VudCB0byBzY2FsZSBib3hoZWlnaHQgdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgeHNjYWxlOiAwLjUsIC8vIEFtb3VudCB0byBzY2FsZSBib3h3aWR0aCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICBzaWRlOiBcImxlZnRcIixcbiAgICAgICAgbWF4V2lkdGg6IDIwMCwgLy8gTWF4aW11bSB3aWR0aCBvZiBTVkdcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyBDaGFuZ2UgdG8gMSBpZiB5b3UgZGVzaXJlIHRoZSBvZmZzZXQgdmlzdWFsaXphdGlvbiBmb3IgQXV0b3JlZ3Jlc3NpdmUgbW9kZWxzXG4gICAgfTtcblxuICAgIC8vIEQzIENvbXBvbmVudHNcbiAgICBoZWFkUm93czogRDNTZWw7XG4gICAgaGVhZENlbGxzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGU6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+IHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5fY3VycmVudFxuXG4gICAgICAgIGNvbnN0IG5IZWFkcyA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGhcbiAgICAgICAgY29uc3QgYmFzZUhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZVxuXG4gICAgICAgIC8vIFNjYWxlIGhlYWR3aWR0aCBhY2NvcmRpbmcgdG8gbWF4aW11bSB3aWR0aFxuICAgICAgICBjb25zdCBnZXRIZWFkU2NhbGUgPSAobkgpID0+IChNYXRoLm1pbihvcC5tYXhXaWR0aCAvIG5ILCBiYXNlSGVhZFdpZHRoKSAvIGJhc2VIZWFkV2lkdGgpICogb3AueHNjYWxlO1xuXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gZ2V0SGVhZFNjYWxlKG5IZWFkcykgKiBvcC5ib3hEaW07XG4gICAgICAgIGN1ci54UGFkID0gY3VyLmhlYWRXaWR0aDtcbiAgICAgICAgY3VyLnlQYWQgPSAob3AuYm94RGltIC0gY3VyLmhlYWRIZWlnaHQpIC8gMjtcblxuICAgICAgICBjb25zdCBnZXRCb3hXaWR0aCA9IChoZWFkV2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heEJ3aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ3aWR0aCA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlTGluZWFyXG4gICAgICAgICAgICBpZiAoYndpZHRoID4gbWF4QndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiAodGhpcy5fZGF0YS5yb3dzLmxlbmd0aCArIG9wLm9mZnNldCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJveEV2ZW50ID0gKGkpID0+IHsgcmV0dXJuIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlLCBoZWFkOiBzZWxmLl9kYXRhLmxhYmVsc1tpXSB9IH1cbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy51cGRhdGVDdXJyZW50KClcblxuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuXG4gICAgICAgIHRoaXMucGFyZW50XG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGN1ci50b3RhbFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY3VyLnRvdGFsSGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKHNlbGYuX2RhdGEucm93cylcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBjbGFzczogKGQsIGkpID0+IGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VyLnhQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKG9wLmJveERpbSAqIChpICsgb3Aub2Zmc2V0KSkgKyBjdXIueVBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93c1xuICAgICAgICAgICAgLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gZClcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgeDogKGQsIGkpID0+IGkgKiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuYm94Q3NzTmFtZSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZCwgaSkgPT4gc2VsZi5fZGF0YS5sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAoZDogbnVtYmVyKSA9PiB0aGlzLm9wYWNpdHlTY2FsZShkKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IHNlbGYub3B0aW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcblxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgYmFzZVg6IGdldEJhc2VYKCksIGJhc2VZOiBnZXRCYXNlWSgpLCBtb3VzZTogbW91c2UgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyAoc2VsZi5fZGF0YS5sYWJlbHNbaV0gKyAxKSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcidcblxuZXhwb3J0IGVudW0gUG9pbnRzVG8ge1xuICAgIFRvcExlZnQgPSAwLFxuICAgIFRvcFJpZ2h0LFxuICAgIEJvdHRvbVJpZ2h0LFxuICAgIEJvdHRvbUxlZnQsXG4gICAgVG9wTWlkLFxuICAgIFJpZ2h0TWlkLFxuICAgIEJvdHRvbU1pZCxcbiAgICBMZWZ0TWlkLFxufVxuXG5jb25zdCBQb2ludHNUb1NpZGVzID0ge1xuICAgIHggOiB7XG4gICAgICAgIGxlZnQ6IG5ldyBTZXQoW1BvaW50c1RvLkJvdHRvbUxlZnQsIFBvaW50c1RvLkxlZnRNaWQsIFBvaW50c1RvLlRvcExlZnRdKSxcbiAgICAgICAgbWlkOiBuZXcgU2V0KFtQb2ludHNUby5Cb3R0b21NaWQsIFBvaW50c1RvLlRvcE1pZF0pLFxuICAgICAgICByaWdodDogbmV3IFNldChbUG9pbnRzVG8uUmlnaHRNaWQsIFBvaW50c1RvLkJvdHRvbVJpZ2h0LCBQb2ludHNUby5Ub3BSaWdodF0pXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICAgIHRvcDogbmV3IFNldChbUG9pbnRzVG8uVG9wTGVmdCwgUG9pbnRzVG8uVG9wTWlkLCBQb2ludHNUby5Ub3BSaWdodF0pLFxuICAgICAgICBtaWQ6IG5ldyBTZXQoW1BvaW50c1RvLlJpZ2h0TWlkLCBQb2ludHNUby5MZWZ0TWlkXSksXG4gICAgICAgIGJvdHRvbTogbmV3IFNldChbUG9pbnRzVG8uQm90dG9tUmlnaHQsIFBvaW50c1RvLkJvdHRvbU1pZCwgUG9pbnRzVG8uQm90dG9tTGVmdF0pLFxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXZIb3Zlck9wdHMge1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIG1heFJhZGl1czogbnVtYmVyIC8vIFJhZGl1cyBvZiB0aGUgbm9uLXBvaW50aW5nIGNvcm5lcnNcbiAgICBtaW5SYWRpdXM6IG51bWJlciAvLyBSYWRpdXMgb2YgdGhlIHBvaW50aW5nIGNvcm5lclxuICAgIHBvaW50c1RvOiBQb2ludHNUb1xuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nXG4gICAgZm9udFNpemU6IG51bWJlclxuICAgIHRpdGxlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXZIb3ZlclNlbHMge1xuICAgIHBhcmVudDogRDNTZWxcbiAgICB0aXRsZTogRDNTZWxcbiAgICBjb250ZW50OiBEM1NlbFxufVxuXG5jb25zdCBnZXRWaWV3VG9wID0gKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5jb25zdCBnZXRWaWV3TGVmdCA9ICgpID0+IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcblxuY29uc3QgRVZFTlRTID0ge31cblxudHlwZSBESSA9IHN0cmluZ1tdXG5cbi8vIEEgaG92ZXIgYm94IHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBiYXNlIG9mIGFueSBjbGFzcyBhbmQgY3VzdG9taXplZCB0byBmaXQgdGhlIHRleHQgZGVzaXJlZFxuZXhwb3J0IGNsYXNzIERpdkhvdmVyIGV4dGVuZHMgVkNvbXBvbmVudDxEST57XG4gICAgY3NzX25hbWUgPSBcIm1hdC1ob3Zlci1kaXNwbGF5XCJcblxuICAgIG9wdGlvbnM6IERpdkhvdmVyT3B0cyA9IHtcbiAgICAgICAgd2lkdGg6IDgwLFxuICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICBtYXhSYWRpdXM6IDgsXG4gICAgICAgIG1pblJhZGl1czogMSxcbiAgICAgICAgcG9pbnRzVG86IFBvaW50c1RvLlRvcExlZnQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC45MyknLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIHRpdGxlOiBcIlwiLCAvLyBIVE1MIHN0cmluZyB0byBzZXJ2ZSBhcyBhIHRpdGxlIGZvciB0aGUgZGl2XG4gICAgfVxuXG4gICAgX2N1cnJlbnQgPSB7XG4gICAgICAgIGh0bWw6IFwiXCJcbiAgICB9XG5cbiAgICBzZWxzOiBQYXJ0aWFsPERpdkhvdmVyU2Vscz4gPSB7fVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IEVWRU5UU1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBnZXQgcmFkaXVzRWRnZXMoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IGIgPSBvcC5tYXhSYWRpdXM7XG4gICAgICAgIGNvbnN0IHMgPSBvcC5taW5SYWRpdXNcbiAgICAgICAgLy8gbGV0IGJvcmRlclJhZGl1cyA9IFwiOHB4IDhweCAxcHggOHB4XCIgLy8gdG9wbGVmdCwgdG9wcmlnaHQsIGJvdHRvbXJpZ2h0LCBib3R0b21sZWZ0XG4gICAgICAgIGxldCBib3JkZXJSYWRpdXM6IG51bWJlcltdXG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnBvaW50c1RvKSB7XG4gICAgICAgICAgICBjYXNlIFBvaW50c1RvLlRvcExlZnQ6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBbcywgYiwgYiwgYl1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBQb2ludHNUby5Ub3BSaWdodDoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9IFtiLCBzLCBiLCBiXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFBvaW50c1RvLkJvdHRvbVJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gW2IsIGIsIHMsIGJdXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgUG9pbnRzVG8uQm90dG9tTGVmdDoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9IFtiLCBiLCBiLCBzXVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gW2IsIGIsIGIsIGJdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvcmRlclJhZGl1cy5tYXAodiA9PiBgJHt2fXB4YCkuam9pbiAoJyAnKVxuICAgIH1cblxuICAgIGdldEJhc2VYKG1vdXNlOiBbbnVtYmVyLCBudW1iZXJdKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgZGlyID0gb3AucG9pbnRzVG9cbiAgICAgICAgY29uc3QgZWRnZXMgPSBQb2ludHNUb1NpZGVzLnhcbiAgICAgICAgY29uc3QgbW91c2VPZmZzZXQgPSBlZGdlcy5yaWdodC5oYXMoZGlyKSA/IG1vdXNlWzBdIC0gb3Aud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlZGdlcy5taWQuaGFzKGRpcikgPyBtb3VzZVswXSAtIChvcC53aWR0aCAvIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW91c2VbMF0gXG5cbiAgICAgICAgY29uc3QgYmFzZVggPSB0aGlzLnBhcmVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBzY3JvbGxYID0gZ2V0Vmlld0xlZnQoKVxuICAgICAgICByZXR1cm4gYmFzZVggKyBzY3JvbGxYICsgbW91c2VPZmZzZXRcbiAgICB9XG5cbiAgICBnZXRCYXNlWShtb3VzZTogW251bWJlciwgbnVtYmVyXSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IGRpciA9IG9wLnBvaW50c1RvXG4gICAgICAgIGNvbnN0IGVkZ2VzID0gUG9pbnRzVG9TaWRlcy55XG4gICAgICAgIGNvbnN0IG1vdXNlT2Zmc2V0ID0gZWRnZXMubWlkLmhhcyhkaXIpID8gbW91c2VbMV0gLSAob3AuaGVpZ2h0IC8gMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlZGdlcy5ib3R0b20uaGFzKGRpcikgPyBtb3VzZVsxXSAtIChvcC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbW91c2VbMV1cblxuICAgICAgICBjb25zdCBiYXNlWSA9IHRoaXMucGFyZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IGdldFZpZXdUb3AoKVxuICAgICAgICByZXR1cm4gYmFzZVkgKyBzY3JvbGxZICsgbW91c2VPZmZzZXRcbiAgICB9XG5cbiAgICBodG1sKCk6IHN0cmluZ1xuICAgIGh0bWwodmFsOnN0cmluZyk6IHRoaXNcbiAgICBodG1sKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudC5odG1sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jdXJyZW50Lmh0bWwgPSB2YWxcbiAgICAgICAgdGhpcy5zZWxzLmNvbnRlbnQuaHRtbCh2YWwpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3Qgc2VscyA9IHRoaXMuc2Vsc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHNlbHMucGFyZW50ID0gdGhpcy5wYXJlbnRcblxuICAgICAgICB0aGlzLmJhc2Uuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuICAgICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQtY29sb3InLCBvcC5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCAnMHB4JylcbiAgICAgICAgICAgIC5zdHlsZSgndG9wJywgJzBweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2JvcmRlci1yYWRpdXMnLCB0aGlzLnJhZGl1c0VkZ2VzKVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBgJHtvcC5mb250U2l6ZX1weGApXG5cbiAgICAgICAgc2Vscy50aXRsZSA9IHRoaXMuYmFzZS5hcHBlbmQoJ3AnKVxuICAgICAgICAgICAgLmh0bWwob3AudGl0bGUpXG4gICAgICAgICAgICAuc3R5bGUoJ21hcmdpbi1sZWZ0JywgJzRweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ21hcmdpbi1ib3R0b20nLCAnMnB4JylcblxuICAgICAgICBzZWxzLmNvbnRlbnQgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLnN0eWxlKCdtYXJnaW4tbGVmdCcsICc4cHgnKVxuXG4gICAgICAgIHNlbHMucGFyZW50Lm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5wYXJlbnQubm9kZSgpKVxuICAgICAgICAgICAgc2VsZi5iYXNlLnN0eWxlKCdsZWZ0JywgYCR7c2VsZi5nZXRCYXNlWChtb3VzZSl9cHhgKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgYCR7c2VsZi5nZXRCYXNlWShtb3VzZSl9cHhgKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBgJHtvcC53aWR0aH1weGApXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBgJHtvcC5oZWlnaHR9cHhgKVxuICAgICAgICB9KVxuICAgICAgICBzZWxzLnBhcmVudC5vbignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuYmFzZS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICB9KVxuICAgICAgICBzZWxzLnBhcmVudC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmJhc2Uuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgIH0pXG5cbiAgICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBwYnNpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC45Myk7XG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xuICAgIC8vIHAge1xuICAgIC8vICAgbWFyZ2luOiA0cHggMXB4IDFweCA0cHg7XG4gICAgLy8gICAvLyBtYXJnaW46IGF1dG87XG4gICAgLy8gfVxuICAgIH1cbiAgICBcbiAgICBfd3JhbmdsZSgpIHt9XG5cbiAgICBfcmVuZGVyKGRhdGE6IERJKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJ3AnKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdwJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZClcbiAgICB9XG5cbiAgICB0aXRsZSgpOiBzdHJpbmdcbiAgICB0aXRsZSh2YWw6c3RyaW5nKTogdGhpc1xuICAgIHRpdGxlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlID0gdmFsXG4gICAgICAgIHRoaXMuc2Vscy50aXRsZS5odG1sKHZhbClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgYXUgZnJvbSAnLi4vZXRjL2FycmF5VXRpbHMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuaW1wb3J0IHsgVHlwZWRBcnJheSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGdlIHtcbiAgICBpOiBudW1iZXIsIC8vIFNvdXJjZSBpbmRleFxuICAgIGo6IG51bWJlciwgLy8gVGFyZ2V0IGluZGV4XG4gICAgdjogbnVtYmVyLCAvLyBWYWx1ZVxufVxuXG4vKipcbiAqIENvbnZlcnQgZGF0YSBtYXRyaXggdG8gbmVjZXNzYXJ5IGRhdGEgYXJyYXkgdG8gcGFzcyB0byBTVkcgY29ubmVjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRWRnZXMgKGRhdGE6bnVtYmVyW11bXSwgY3V0b2ZmQW10PTEpIDogRWRnZVtdIHtcbiAgICBsZXQgb3V0QXJyOiBFZGdlW10gPSBbXTtcbiAgICBsZXQgY3V0b2ZmOiBudW1iZXI7XG4gICAgZGF0YS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgY3V0b2ZmID0gY3V0b2ZmQW10ICogZDMuc3VtKHJvdyk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyOmF1LlNvcnRBcnJheSA9IGF1LnNvcnRXaXRoSW5kaWNlcyhyb3cpO1xuXG4gICAgICAgIHNvcnRlZEFyci5hcnIuZm9yRWFjaCgodixqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iajogRWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaTogaSxcbiAgICAgICAgICAgICAgICAgICAgajogc29ydGVkQXJyLnNvcnRJbmRpY2VzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2OiB2LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRBcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gb3V0QXJyO1xufVxuLyoqXG4gKiBDbGFzcyBmb3IgaW1wbGVtZW50aW5nIG9wZXJhdGlvbnMgb24gQXR0ZW50aW9uR3JhcGggaW1wbGVtZW50YXRpb24uIFxuICogQ2xvc2VseSB0aWVkIHRvIFtbQXR0ZW50aW9uQ29ubmVjdG9yXV1cbiAqL1xuZXhwb3J0IGNsYXNzIEVkZ2VEYXRhIHtcbiAgICByZWFkb25seSB0ZW5zRGF0YTp0Zi5UZW5zb3I7XG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGRhdGE6bnVtYmVyW11bXSl7XG4gICAgICAgIHRoaXMudGVuc0RhdGEgPSB0Zi50ZW5zb3IoZGF0YSk7XG4gICAgfVxuXG4gICAgbWluKGF4aXM/Om51bWJlcik6VHlwZWRBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1pbihheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIG1heChheGlzPzpudW1iZXIpOlR5cGVkQXJyYXl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1heChheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIGV4dGVudChheGlzPzpudW1iZXIpOm51bWJlcltdW10ge1xuICAgICAgICByZXR1cm4gZDMuemlwKHRoaXMubWluKGF4aXMpLCB0aGlzLm1heChheGlzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIGRhdGEgdG8gc2VuZCB0byBTVkcgY2hhcnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGFjY3VtdWxhdGVUaHJlc2ggLSBBIGZsb2F0IGJldHdlZW4gMCBhbmQgMSwgaW5kaWNhdGluZyB0aGUgYW1vdW50IG9mIHdlaWdodCB0byBkaXNwbGF5LiBEZWZhdWx0cyB0byAwLjcuXG4gICAgICovXG4gICAgZm9ybWF0IChhY2N1bXVsYXRlVGhyZXNoPTAuNyk6RWRnZVtdIHtcbiAgICAgICAgcmV0dXJuIHRvRWRnZXModGhpcy5kYXRhLCBhY2N1bXVsYXRlVGhyZXNoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGl2SG92ZXIsIFBvaW50c1RvIH0gZnJvbSBcIi4vRGl2SG92ZXJcIlxuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxudHlwZSBpbmZvRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIpID0+IHRwLlRva2VuRXZlbnRcbnR5cGUgaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsOiBEM1NlbCwgaTogbnVtYmVyLCBlbWJlZDogbnVtYmVyW10pID0+IHRwLlRva2VuRW1iZWRkaW5nRXZlbnRcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRleHRUb2tlbnMgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT57XG5cbiAgICBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3QgaG92ZXJfY3NzX25hbWU6IHN0cmluZ1xuICAgIGFic3RyYWN0IHNpZGU6IHRwLlNpZGVPcHRpb25zXG4gICAgZUluZm86IGluZm9FdmVudEZyb21JID0gKHNlbCwgaSkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGkgfSB9XG4gICAgZUVtYmVkZGluZzogaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsLCBpLCBlbWJlZCkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGksIGVtYmVkZGluZ3M6IGVtYmVkIH0gfVxuICAgIGRpdkhvdmVyOiBEaXZIb3ZlclxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgdG9rZW5Nb3VzZU92ZXI6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdmVyXCIsXG4gICAgICAgIHRva2VuTW91c2VPdXQ6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdXRcIixcbiAgICAgICAgdG9rZW5DbGljazogXCJUZXh0VG9rZW5fVG9rZW5DbGlja1wiLFxuICAgICAgICB0b2tlbkRibENsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkRibENsaWNrXCIsXG4gICAgfTtcblxuICAgIGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXTtcblxuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIGRpdk9wcyA9IHtcbiAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIG9mZnNldDogWzMsIDNdLFxuICAgICAgICB0aXRsZTogXCJXb3VsZCBwcmVkaWN0Li4uXCIsXG4gICAgICAgIHBvaW50c1RvOiBQb2ludHNUby5Ub3BSaWdodCxcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgfTtcblxuICAgIHRleHRCb3hlczogRDNTZWxcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbWFzayhtYXNrSW5kczogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2VsZWN0QWxsKGAuJHt0aGlzLmNzc19uYW1lfWApXG4gICAgICAgICAgICAuZWFjaCgoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgICAgICAgIHNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsIF8uaW5jbHVkZXMobWFza0luZHMsIGkpKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRFbWJlZGRpbmcoaW5kOiBudW1iZXIpOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaW5kXVxuICAgIH1cblxuICAgIF9pbml0KCkgeyB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgbWFrZVBvcHVwKCkge1xuICAgICAgICBjb25zdCBkaXZPcHMgPSB0aGlzLmRpdk9wc1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGxpbmcgZGl2aG92ZXJcIik7XG4gICAgICAgIHRoaXMuZGl2SG92ZXIgPSBuZXcgRGl2SG92ZXIodGhpcy5wYXJlbnQsIHRoaXMuZXZlbnRIYW5kbGVyLCBkaXZPcHMpXG4gICAgfVxuXG4gICAgbWFrZUh0bWxGb3JQb3B1cCh0b2tlbjogdHAuRnVsbFNpbmdsZVRva2VuSW5mbyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG91dCA9IFIuemlwKHRva2VuLnRvcGtfd29yZHMsIHRva2VuLnRvcGtfcHJvYnMpLm1hcCh3ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB3WzBdLnJlcGxhY2UoL1xcdTAxMjAvZywgXCIgXCIpLnJlcGxhY2UoL1xcdTAxMEEvZywgXCJcXFxcblwiKVxuICAgICAgICAgICAgY29uc3QgcHJvYiA9IHdbMV0udG9GaXhlZCgyKVxuICAgICAgICAgICAgcmV0dXJuIGA8Yj4ke25hbWV9PC9iPjogICAgJHtwcm9ifWBcbiAgICAgICAgfSkubWFwKHYgPT4gYCR7dn08YnI+YCkuam9pbignJylcbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gUmVzZXQgdG9rZW4gZGlzcGxheVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKVxuXG4gICAgICAgIC8vIEFkZCBibGFuayBkaXZzXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBvZmZzZXQgKCR7dGhpcy5zaWRlfSk6IGAsIG9wLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGJsYW5rRGl2cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5ibGFuay10ZXh0LWJveGApXG5cbiAgICAgICAgYmxhbmtEaXZzLmRhdGEoUi5yYW5nZSgwLCBvcC5vZmZzZXQpKVxuICAgICAgICAgICAgLmpvaW4oXCJkaXZcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmxhbmstdGV4dC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwidG9rZW5cIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZShcImhlaWdodFwiLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IFwiICBcIilcblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IGAke3RoaXMuY3NzX25hbWV9LSR7aX1gKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC50ZXh0LnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKS5yZXBsYWNlKFwiXFx1MDEwQVwiLCBcIlxcXFxuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAnbGlnaHRibHVlJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3Zlciwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuaHRtbChzZWxmLm1ha2VIdG1sRm9yUG9wdXAoZCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLmFkZENsaWNrKHNlbGYudGV4dEJveGVzKVxuICAgIH1cblxuICAgIGFkZENsaWNrKHRleHRib3hlczogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSB0ZXh0Ym94ZXNcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIHNlbGYuZUVtYmVkZGluZyhzZWwsIGksIGQuZW1iZWRkaW5ncykpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuXG4gICAgY3NzX25hbWUgPSAnbGVmdC10b2tlbic7XG4gICAgaG92ZXJfY3NzX25hbWUgPSAnbGVmdC10b2tlbi1ob3ZlcidcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdsZWZ0JztcbiAgICBvZmZzZXQ6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5tYWtlUG9wdXAoKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpZ2h0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG4gICAgY3NzX25hbWUgPSAncmlnaHQtdG9rZW4nO1xuICAgIGhvdmVyX2Nzc19uYW1lID0gJ3JpZ2h0LXRva2VuLWhvdmVyJ1xuICAgIHNpZGU6IHRwLlNpZGVPcHRpb25zID0gJ3JpZ2h0J1xuICAgIG9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIGRpdk9wcyA9IHtcbiAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgIG9mZnNldDogWzMsIDNdLFxuICAgICAgICB0aXRsZTogXCJXb3VsZCBwcmVkaWN0Li4uXCIsXG4gICAgICAgIHBvaW50c1RvOiBQb2ludHNUby5Ub3BMZWZ0LFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLm1ha2VQb3B1cCgpXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhlbmRyaWsgU3Ryb2JlbHQgKGhlbmRyaWsuc3Ryb2JlbHQuY29tKSBvbiAxMi8zLzE2LlxuICogTW9kaWZpZWQgYnkgQmVuIEhvb3ZlciBvbiA0LzE2LzIwMTlcbiAqL1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQge0QzU2VsLCBVdGlsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7U2ltcGxlRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHtTVkd9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiO1xuXG4vKipcbiAqIFNob3VsZCBoYXZlIFZDb21wb25lbnRIVE1MIGFuZCBWQ29tcG9uZW50U1ZHXG4gKiBcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pXG4gKiBcbiAqIENvbW1vbiBNZXRob2RzOlxuICogLSBjb25zdHJ1Y3RvclxuICogLSBfcmVuZGVyKCkgICAgICBDb25zaWRlciByZXBsYWNpbmcgd2l0aCBgX3VwZGF0ZURhdGEoKWAgdGhhdCB1cGRhdGVzIGFsbCBkYXRhIGF0IG9uY2VcbiAqIC0gdXBkYXRlKCkgICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHRoaXMgd2l0aCBgZGF0YSgpYCB0aGF0IGF1dG8gdXBkYXRlcyBkYXRhXG4gKiAtIHJlZHJhdygpXG4gKiAtIGRlc3Ryb3koKVxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcblxuICAgIC8vIFNUQVRJQyBGSUVMRFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGljIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYWxsIGNsYXNzIHJlbGF0ZWQgZXZlbnRzLlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBhbmQgZXZlbnQgc3RyaW5ncyBoYXZlIHRvIGJlIHVuaXF1ZSEhXG4gICAgICovXG5cbiAgICBzdGF0aWMgZXZlbnRzOiB7fSA9IHtub0V2ZW50OiAnVkNvbXBvbmVudF9ub0V2ZW50J307XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsYXllcnMgaW4gU1ZHICBmb3IgYmcsbWFpbixmZywuLi5cbiAgICAgKi9cbiAgICAvLyBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgbGF5b3V0OiB7IG5hbWU6IHN0cmluZywgcG9zOiBudW1iZXJbXSB9W10gPSBbe25hbWU6ICdtYWluJywgcG9zOiBbMCwgMF19XTtcblxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nOyAvLyBNb3N0bHkgb2Jzb2xldGUsIG5pY2UgdG8gaGF2ZSBzaW1wbGUgSUQgdG8gYXNzaWduIGluIENTU1xuICAgIHByb3RlY3RlZCBwYXJlbnQ6IEQzU2VsO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgIHByb3RlY3RlZCBiYXNlOiBEM1NlbDsgLy8gTW9zdGx5IG9ic29sZXRlLCByZXByZXNlbnRzIDxnPiBpbiBzdmdcbiAgICBwcm90ZWN0ZWQgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTsgLy8gU3RpbGwgdXNlZnVsXG4gICAgcHJvdGVjdGVkIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyO1xuICAgIHByb3RlY3RlZCBfdmlzaWJpbGl0eTogeyBoaWRkZW46IGJvb2xlYW4sIGhpZGVFbGVtZW50PzogRDNTZWwgfCBudWxsOyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gRW5hYmxlcyB0cmFuc2l0aW9ucyBmcm9tIHZpc2libGUgdG8gaW52aXNpYmxlLiBNb3N0bHkgb2Jzb2xldGUuXG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiBhbnk7IC8vIFVubmVjZXNzYXJ5XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmc7IC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2N1cnJlbnQ6IHt9OyAvLyBQcml2YXRlIHN0YXRlIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBpbiB0aGUgb2JqZWN0IGl0c2VsZi5cblxuICAgIC8vIENPTlNUUlVDVE9SID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogU2ltcGxlIGNvbnN0cnVjdG9yLiBTdWJjbGFzc2VzIHNob3VsZCBjYWxsIEBzdXBlckluaXQob3B0aW9ucykgYXMgd2VsbC5cbiAgICAgKiBzZWUgd2h5IGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQzNTk1OTQzL3doeS1hcmUtZGVyaXZlZC1jbGFzcy1wcm9wZXJ0eS12YWx1ZXMtbm90LXNlZW4taW4tdGhlLWJhc2UtY2xhc3MtY29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIHRlbXBsYXRlOlxuICAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgLy8gLS0gYWNjZXNzIHRvIHN1YmNsYXNzIHBhcmFtczpcbiAgICAgICAgdGhpcy5zdXBlckluaXQob3B0aW9ucyk7XG4gICAgIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RDNTZWx9IGQzcGFyZW50ICBEMyBzZWxlY3Rpb24gb2YgcGFyZW50IFNWRyBET00gRWxlbWVudFxuICAgICAqIEBwYXJhbSB7U2ltcGxlRXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXIgYSBnbG9iYWwgZXZlbnQgaGFuZGxlciBvYmplY3Qgb3IgJ251bGwnIGZvciBsb2NhbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBVdGlsLnNpbXBsZVVJZCh7fSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkM3BhcmVudDtcblxuICAgICAgICAvLyBJZiBub3QgZnVydGhlciBzcGVjaWZpZWQgLSBjcmVhdGUgYSBsb2NhbCBldmVudCBoYW5kbGVyIGJvdW5kIHRvIHRoZSBiYXMgZWxlbWVudFxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlciB8fFxuICAgICAgICAgICAgbmV3IFNpbXBsZUV2ZW50SGFuZGxlcih0aGlzLnBhcmVudC5ub2RlKCkpO1xuXG4gICAgICAgIC8vIE9iamVjdCBmb3Igc3RvcmluZyBpbnRlcm5hbCBzdGF0ZXMgYW5kIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5ID0ge2hpZGRlbjogZmFsc2V9O1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1cGVySW5pdEhUTUwob3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG4gICAgICAgIHRoaXMuYmFzZSA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKHRoaXMuY3NzX25hbWUsIHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIHRvIGJlIGNhbGxlZCBhcyBsYXN0IGNhbGwgaW4gc3ViY2xhc3MgY29uc3RydWN0b3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIHt7fX0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSBkZWZhdWx0TGF5ZXJzIC0tIGNyZWF0ZSB0aGUgZGVmYXVsdCA8Zz4gbGF5ZXJzOiBiZyAtPiBtYWluIC0+IGZnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN1cGVySW5pdFNWRyhvcHRpb25zOiB7fSA9IHt9LCBkZWZhdWx0TGF5ZXJzID0gWydiZycsICdtYWluJywgJ2ZnJ10pIHtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgb3B0aW9ucyBpZiBub3Qgc3BlY2lmaWVkIGluIGNvbnN0cnVjdG9yIGNhbGxcbiAgICAgICAgLy8gY29uc3QgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgLy8gY29uc3Qga2V5cyA9IG5ldyBTZXQoWy4uLk9iamVjdC5rZXlzKGRlZmF1bHRzKSwgLi4uT2JqZWN0LmtleXMob3B0aW9ucyldKTtcbiAgICAgICAgLy8ga2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IChrZXkgaW4gb3B0aW9ucykgPyBvcHRpb25zW2tleV0gOiBkZWZhdWx0c1trZXldKTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGdyb3VwIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuYmFzZSA9IFNWRy5ncm91cChzdmcsXG4gICAgICAgICAgICB0aGlzLmNzc19uYW1lICsgJyBJRCcgKyB0aGlzLmlkLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgbGF5ZXJzOiBiYWNrZ3JvdW5kLCBtYWluLCBmb3JlZ3JvdW5kXG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBTVkcuZ3JvdXAodGhpcy5iYXNlLCBsYXllcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIHRvIGNyZWF0ZSB0aGUgc3RhdGljIERPTSBlbGVtZW50c1xuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm4geyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfaW5pdCgpO1xuXG4gICAgLy8gREFUQSBVUERBVEUgJiBSRU5ERVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSB0aW1lIGRhdGEgaGFzIGNoYW5nZWQsIHVwZGF0ZSBpcyBjYWxsZWQgYW5kXG4gICAgICogdHJpZ2dlcnMgd3JhbmdsaW5nIGFuZCByZS1yZW5kZXJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4geyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhID0gdGhpcy5fd3JhbmdsZShkYXRhKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGF0YSB3cmFuZ2xpbmcgbWV0aG9kIC0tIGltcGxlbWVudCBpbiBzdWJjbGFzcy4gUmV0dXJucyB0aGlzLnJlbmRlckRhdGEuXG4gICAgICogU2ltcGxlc3QgaW1wbGVtZW50YXRpb246IGByZXR1cm4gZGF0YTtgXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YVxuICAgICAqIEByZXR1cm5zIHsqfSAtLSBkYXRhIGluIHJlbmRlciBmb3JtYXRcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3dyYW5nbGUoZGF0YSk7XG5cblxuICAgIC8qKlxuICAgICAqIElzIHJlc3BvbnNpYmxlIGZvciBtYXBwaW5nIGRhdGEgdG8gRE9NIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbmRlckRhdGEgcHJlLXByb2Nlc3NlZCAod3JhbmdsZWQpIGRhdGFcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9yZW5kZXIocmVuZGVyRGF0YSk6IHZvaWQ7XG5cblxuICAgIC8vIFVQREFURSBPUFRJT05TID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgaW5zdGFuY2Ugb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9ubHkgdGhlIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVSZW5kZXIgaWYgb3B0aW9uIGNoYW5nZSByZXF1aXJlcyBhIHJlLXJlbmRlcmluZyAoZGVmYXVsdDpmYWxzZSlcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyh7b3B0aW9ucywgcmVSZW5kZXIgPSBmYWxzZX0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgICAgICBpZiAocmVSZW5kZXIpIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuXG4gICAgLy8gPT09IENPTlZFTklFTkNFID09PT1cbiAgICByZWRyYXcoKXtcbiAgICAgICAgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SGlkZUVsZW1lbnQoaEU6IEQzU2VsKSB7XG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgPSBoRTtcbiAgICB9XG5cbiAgICBoaWRlVmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgICAgICAgICAgfSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5oaWRlVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogbnVsbCxcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlKHRoaXMuZGF0YSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuICAgIH1cblxufSIsIi8qKlxuICogU2hvd2luZyB0aGUgdG9wIGxlZnQgcGFydCBvZiBleEJFUlQsIG5vIGluZm9ybWF0aW9uIGZyb20gdGhlIGVtYmVkZGluZ3Mgb3IgdGhlIGNvbnRleHRzXG4gKi9cblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnO1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4uL2FwaS9yZXNwb25zZXMnO1xuaW1wb3J0ICcuLi9ldGMveGQzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vYXBpL21haW5BcGknXG5pbXBvcnQgeyBVSUNvbmZpZyB9IGZyb20gJy4uL3VpQ29uZmlnJ1xuaW1wb3J0IHsgVGV4dFRva2VucywgTGVmdFRleHRUb2tlbiwgUmlnaHRUZXh0VG9rZW4gfSBmcm9tICcuL1RleHRUb2tlbidcbmltcG9ydCB7IEF0dGVudGlvbkhlYWRCb3gsIGdldEF0dGVudGlvbkluZm8gfSBmcm9tICcuL0F0dGVudGlvbkhlYWRCb3gnXG5pbXBvcnQgeyBBdHRlbnRpb25HcmFwaCB9IGZyb20gJy4vQXR0ZW50aW9uQ29ubmVjdG9yJ1xuaW1wb3J0IHsgVG9rZW5XcmFwcGVyLCBzaWRlVG9MZXR0ZXIgfSBmcm9tICcuLi9kYXRhL1Rva2VuV3JhcHBlcidcbmltcG9ydCB7IEF0dGVudGlvbldyYXBwZXIsIG1ha2VGcm9tTWV0YVJlc3BvbnNlIH0gZnJvbSAnLi4vZGF0YS9BdHRlbnRpb25DYXBzdWxlJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IEQzU2VsLCBTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7Y3JlYXRlU3RhdGljU2tlbGV0b259IGZyb20gXCIuL3N0YXRpY0xheW91dFwiO1xuXG5cbmZ1bmN0aW9uIGlzTnVsbFRva2VuKHRvazogdHAuVG9rZW5FdmVudCkge1xuICAgIGNvbnN0IGlzU29tZU51bGwgPSB4ID0+IHtcbiAgICAgICAgcmV0dXJuICh4ID09IG51bGwpIHx8ICh4ID09IFwibnVsbFwiKVxuICAgIH1cbiAgICBjb25zdCB0b2tJc051bGwgPSB0b2sgPT0gbnVsbDtcbiAgICBjb25zdCB0b2tIYXNOdWxsID0gaXNTb21lTnVsbCh0b2suc2lkZSkgfHwgaXNTb21lTnVsbCh0b2suaW5kKVxuICAgIHJldHVybiB0b2tJc051bGwgfHwgdG9rSGFzTnVsbFxufVxuXG5mdW5jdGlvbiBzaG93QnlTaWRlKGU6IHRwLlRva2VuRXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiBzYXZlZCB0b2tlbiBpbiB1aUNvbmYgaXMgbnVsbFxuICAgIGlmICghaXNOdWxsVG9rZW4oZSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NTZWxlY3RvciA9IGUuc2lkZSA9PSBcImxlZnRcIiA/IFwic3JjLWlkeFwiIDogXCJ0YXJnZXQtaWR4XCI7XG5cbiAgICAgICAgU2VsLnNldEhpZGRlbihcIi5hdG4tY3VydmVcIilcbiAgICAgICAgU2VsLnNldFZpc2libGUoYC5hdG4tY3VydmVbJHtjbGFzc1NlbGVjdG9yfT0nJHtlLmluZH0nXWApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaG9vc2VTaG93QnlTaWRlKHNhdmVkRXZlbnQ6IHRwLlRva2VuRXZlbnQsIG5ld0V2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKSB7XG4gICAgICAgIHNob3dCeVNpZGUobmV3RXZlbnQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaG9vc2VTaG93QWxsKHNhdmVkRXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKFwiLmF0bi1jdXJ2ZVwiKVxufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gc2V0U2VsRGlzYWJsZWQoYXR0cjogYm9vbGVhbiwgc2VsOiBEM1NlbCkge1xuICAgIGNvbnN0IHZhbCA9IGF0dHIgPyB0cnVlIDogbnVsbFxuICAgIHNlbC5hdHRyKCdkaXNhYmxlZCcsIHZhbClcbn1cblxuZXhwb3J0IGNsYXNzIE1haW5HcmFwaGljIHtcbiAgICBiYXNlOiBEM1NlbFxuICAgIGFwaTogQVBJXG4gICAgdWlDb25mOiBVSUNvbmZpZ1xuICAgIGF0dENhcHN1bGU6IEF0dGVudGlvbldyYXBwZXJcbiAgICB0b2tDYXBzdWxlOiBUb2tlbldyYXBwZXJcbiAgICBzZWxzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyBpbml0aWFsIGQzIHNlbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgIHZpenM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIHZpcyBjb21wb25lbnRzIHdyYXBwZWQgYXJvdW5kIHBhcmVudCBzZWxcbiAgICBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlciAgICAvLyBPcmNoZXN0cmF0ZXMgZXZlbnRzIHJhaXNlZCBmcm9tIGNvbXBvbmVudHNcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGJhc2UgJ2RpdicgaHRtbCBlbGVtZW50IGludG8gd2hpY2ggZXZlcnl0aGluZyBiZWxvdyB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYmFzZURpdjogRWxlbWVudCkge1xuICAgICAgICB0aGlzLmJhc2UgPSBkMy5zZWxlY3QoYmFzZURpdilcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQVBJKClcbiAgICAgICAgdGhpcy51aUNvbmYgPSBuZXcgVUlDb25maWcoKVxuICAgICAgICB0aGlzLnNlbHMgPSBjcmVhdGVTdGF0aWNTa2VsZXRvbih0aGlzLmJhc2UpXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnRoaXMuYmFzZS5ub2RlKCkpO1xuXG4gICAgICAgIHRoaXMudml6cyA9IHtcbiAgICAgICAgICAgIGxlZnRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwibGVmdFwiLCB9KSxcbiAgICAgICAgICAgIHJpZ2h0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIsIHsgc2lkZTogXCJyaWdodFwiIH0pLFxuICAgICAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbmV3IExlZnRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG5ldyBSaWdodFRleHRUb2tlbih0aGlzLnNlbHMudG9rZW5zLnJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0ZW50aW9uU3ZnOiBuZXcgQXR0ZW50aW9uR3JhcGgodGhpcy5zZWxzLmF0bkRpc3BsYXksIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudEhhbmRsZXIoKVxuXG4gICAgICAgIHRoaXMubWFpbkluaXQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFpbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHRoaXMuYXBpLmdldE1vZGVsRGV0YWlscyh0aGlzLnVpQ29uZi5tb2RlbCgpKS50aGVuKG1kID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1kLnBheWxvYWRcblxuICAgICAgICAgICAgLy8gSWYgY2hhbmdpbmcgdG8gbW9kZWwgd2l0aCBmZXdlciBsYXllcnMsIGNhcCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgdGhpcy51aUNvbmYubkxheWVycyh2YWwubmxheWVycykubkhlYWRzKHZhbC5uaGVhZHMpXG4gICAgICAgICAgICBjb25zdCBjdXJyTGF5ZXIgPSB0aGlzLnVpQ29uZi5sYXllcigpXG4gICAgICAgICAgICBjb25zdCBtYXhMYXllciA9IHRoaXMudWlDb25mLm5MYXllcnMoKSAtIDFcbiAgICAgICAgICAgIHRoaXMudWlDb25mLmxheWVyKE1hdGgubWluKGN1cnJMYXllciwgbWF4TGF5ZXIpKVxuICAgICAgICAgICAgdGhpcy5pbml0TGF5ZXJzKHRoaXMudWlDb25mLm5MYXllcnMoKSlcblxuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihhdHRlbnRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGF0dGVudGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZyb21SZXNwb25zZShhdHQpXG5cbiAgICAgICAgICAgICAgICAvLyBXcmFwIHBvc3RJbml0IGludG8gZnVuY3Rpb24gc28gYXN5bmNocm9ub3VzIGNhbGwgZG9lcyBub3QgbWVzcyB3aXRoIG5lY2Vzc2FyeSBpbml0c1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5vcm1CeVxuICAgICAgICAgICAgICAgIGlmICgodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSAmJiAoIXRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybUJ5ID0gdHAuTm9ybUJ5LkNPTFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybUJ5ID0gdHAuTm9ybUJ5LkFMTFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLm5vcm1CeSA9IG5vcm1CeVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1hc2tJbmRzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcyA9IHRoaXMudWlDb25mLm1hc2tJbmRzKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgb25seSAxIG1hc2sgaW5kIGlzIHByZXNlbnQgZm9yIGF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmF5VG9nZ2xlKDxudW1iZXI+dGhpcy51aUNvbmYudG9rZW4oKS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5sZWZ0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgbmV4dC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMucmlnaHQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBuZXh0Li4uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMubGVmdC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLnJpZ2h0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEZyb21SZXNwb25zZShhdHRlbnRpb246IHRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuYXR0Q2Fwc3VsZSA9IG1ha2VGcm9tTWV0YVJlc3BvbnNlKGF0dGVudGlvbiwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKVxuICAgICAgICB0aGlzLnRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKGF0dGVudGlvbik7XG4gICAgICAgIHRoaXMuX3N0YXRpY0luaXRzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGxlYXZlQ29ycHVzTXNnKG1zZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNJbnNwZWN0b3IuaGlkZVZpZXcoKVxuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5oaWRlVmlldygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBsZWF2ZSBtc2dcIik7XG4gICAgICAgIFNlbC51bmhpZGVFbGVtZW50KHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gpXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gudGV4dChtc2cpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi51aUNvbmYubW9kZWxLaW5kKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgIWUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBzaWRlVG9MZXR0ZXIoZS5zaWRlLCB0aGlzLnVpQ29uZi5hdHRUeXBlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGVbbGV0dGVyXS50b2dnbGUoZS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKChyZXNwOiByc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVUb2tlbnMocik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dG9yZWdyZXNzaXZlIG1vZGVsIGRvZXNuJ3QgZG8gbWFza2luZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXaGF0IGtpbmQgb2YgbW9kZWwgaXMgdGhpcz9cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpLCBlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgKGUpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dBbGwodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbmYudG9nZ2xlVG9rZW4oZSlcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG4gICAgICAgICAgICAgICAgc2hvd0J5U2lkZShlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rVG9nZ2xlKClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zZWxzLmF0bkhlYWRzLmhlYWRJbmZvLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zZWxzLmF0bkhlYWRzLmhlYWRJbmZvLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdXRcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU1vdmUsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoZWFkSW5mbyA9IHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mb1xuICAgICAgICAgICAgbGV0IGxlZnQsIHRvcCwgYm9yZGVyUmFkaXVzXG5cbiAgICAgICAgICAgIGlmIChlLnNpZGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMTIsIDNdXG4gICAgICAgICAgICAgICAgbGVmdCA9IGUubW91c2VbMF0gKyBlLmJhc2VYIC0gKCtoZWFkSW5mby5zdHlsZSgnd2lkdGgnKS5yZXBsYWNlKCdweCcsICcnKSArIGRpdk9mZnNldFswXSlcbiAgICAgICAgICAgICAgICB0b3AgPSBlLm1vdXNlWzFdICsgZS5iYXNlWSAtICgraGVhZEluZm8uc3R5bGUoJ2hlaWdodCcpLnJlcGxhY2UoJ3B4JywgJycpICsgZGl2T2Zmc2V0WzFdKVxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA9IFwiOHB4IDhweCAxcHggOHB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFstMTMsIDNdXG4gICAgICAgICAgICAgICAgbGVmdCA9IGUubW91c2VbMF0gKyBlLmJhc2VYICsgZGl2T2Zmc2V0WzBdXG4gICAgICAgICAgICAgICAgdG9wID0gZS5tb3VzZVsxXSArIGUuYmFzZVkgLSAoK2hlYWRJbmZvLnN0eWxlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsICcnKSArIGRpdk9mZnNldFsxXSlcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBcIjhweCA4cHggOHB4IDFweFwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRJbmZvXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIFN0cmluZyhsZWZ0KSArICdweCcpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdib3JkZXItcmFkaXVzJywgYm9yZGVyUmFkaXVzKVxuICAgICAgICAgICAgICAgIC50ZXh0KGBIZWFkOiAke2UuaW5kICsgMX1gKVxuXG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdmVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgKGU6IHsgaGVhZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVpQ29uZi50b2dnbGVIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5BRERFRCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9nZ2xlVG9rZW5TZWwoKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLnVpQ29uZi50b2tlbigpXG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IGQzLnNlbGVjdCgnLnNlbGVjdGVkLXRva2VuJylcblxuICAgICAgICAvLyBJZiBubyB0b2tlbiBzaG91bGQgYmUgc2VsZWN0ZWQsIHVuc2VsZWN0IGFsbCB0b2tlbnNcbiAgICAgICAgaWYgKCF0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTZWw6IGQzLlNlbGVjdGlvbjxCYXNlVHlwZSwgYW55LCBCYXNlVHlwZSwgYW55PiA9IGQzLnNlbGVjdEFsbCgnLnNlbGVjdGVkLXRva2VuJylcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZWxlY3QgdGhlIGluZGljYXRlZCB0b2tlblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuMlN0cmluZyA9IChlOiB0cC5Ub2tlbkV2ZW50KSA9PiBgIyR7ZS5zaWRlfS10b2tlbi0ke2UuaW5kfWBcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbCA9IGQzLnNlbGVjdCh0b2tlbjJTdHJpbmcoZSkpXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgdG9rZW4gc2VsZWN0aW9uLCBpZiBhbnlcbiAgICAgICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQuZW1wdHkoKSkge1xuICAgICAgICAgICAgYWxyZWFkeVNlbGVjdGVkLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdyYXlUb2dnbGUoK2UuaW5kKVxuICAgICAgICAgICAgdGhpcy5tYXJrTmV4dFRvZ2dsZSgrZS5pbmQsIHRoaXMudG9rQ2Fwc3VsZS5hLmxlbmd0aCgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdyYXlUb2dnbGUoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgICAgICAgICB0aGlzLmdyYXlCYWRUb2tzKGluZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcudG9rZW4nKS5jbGFzc2VkKCdtYXNrZWQtdG9rZW4nLCBmYWxzZSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRXb3JkVG9rcyhpbmQ6IG51bWJlciwgTjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmtUb2tzID0gZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHMuY2xhc3NlZChcIm5leHQtdG9rZW5cIiwgaSA9PSBNYXRoLm1pbihpbmQgKyAxLCBOKSlcbiAgICAgICAgfVxuICAgICAgICBkMy5zZWxlY3RBbGwoJy5yaWdodC10b2tlbicpLmVhY2gobWFya1Rva3MpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKG1hcmtUb2tzKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRUb2dnbGUoaW5kOiBudW1iZXIsIE46IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSlcbiAgICAgICAgICAgIHRoaXMubWFya05leHRXb3JkVG9rcyhpbmQsIE4pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbmV4dC10b2tlbicsIGZhbHNlKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgIHRoaXMuX2luaXRUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbkVudGVyID0gUi5jdXJyeSgoa2V5Q29kZSwgZiwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlICE9PSBrZXlDb2RlKSByZXR1cm47XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgb25FbnRlclN1Ym1pdCA9IG9uRW50ZXIoMTMsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuc2Vscy5mb3JtLmJ1dHRvbjtcbiAgICAgICAgY29uc3QgaW5wdXRCb3ggPSB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUE7XG5cbiAgICAgICAgYnRuLm9uKFwiY2xpY2tcIiwgc3VibWl0TmV3U2VudGVuY2UpXG4gICAgICAgIGlucHV0Qm94Lm9uKCdrZXlwcmVzcycsIG9uRW50ZXJTdWJtaXQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVuZGVySGVhZFN1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc2Vscy5zZWxlY3RlZEhlYWRzXG4gICAgICAgICAgICAuaHRtbChSLmpvaW4oJywgJywgdGhpcy51aUNvbmYuaGVhZHMoKS5tYXAoaCA9PiBoICsgMSkpKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCBuTGF5ZXJzKSlcbiAgICAgICAgICAgIC5qb2luKFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnV0dG9uIGxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBsYXJnZXN0IGxheWVyIGF2YWlsYWJsZSBpZiB1aUNvbmYubGF5ZXIoKSA+IG5ldyBuTGF5ZXJzXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gc2VsZi51aUNvbmYubGF5ZXIoKSkgeyAvLyBKYXZhc2NyaXB0IGlzIDAgaW5kZXhlZCFcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkID09IG5MYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIoZClcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IGQgKyAxKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKCh2OiBFdmVudCkgPT4gK2QzLnNlbGVjdCg8QmFzZVR5cGU+di50YXJnZXQpLmRhdHVtKCkpLFxuICAgICAgICAgICAgdGFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGxheWVyOiBcIiwgdik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIodik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2KSA9PiBmcm9tKHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi50b2tDYXBzdWxlLmEsIHNlbGYudWlDb25mLnNlbnRlbmNlKCksIHYpKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyhzZWxmLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIHNlbGYuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGAjbGF5ZXJDaGVja2JveCR7dGhpcy51aUNvbmYubGF5ZXIoKX1gXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF5ZXIgSUQ6IFwiLCBsYXllcklkKTtcbiAgICAgICAgZDMuc2VsZWN0KGxheWVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxuXG4gICAgICAgIC8vIEluaXQgdGhyZXNob2xkIHN0dWZmXG4gICAgICAgIGNvbnN0IGRpc3BUaHJlc2ggPSAodGhyZXNoKSA9PiBNYXRoLnJvdW5kKHRocmVzaCAqIDEwMClcbiAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuXG4gICAgICAgIHRoaXMuc2Vscy50aHJlc2hTbGlkZXIub24oXCJpbnB1dFwiLCBfLnRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYudGhyZXNob2xkKCtub2RlLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcbiAgICAgICAgICAgIHNlbGYudml6cy5hdHRlbnRpb25TdmcudGhyZXNob2xkKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKVxuICAgICAgICB9LCAxMDApKVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0QWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0QWxsSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3ROb25lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0Tm9IZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBfaW5pdFRvZ2dsZSgpIHtcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuc2Vscy5jbHNUb2dnbGUubm9kZSgpLCAnaW5wdXQnKS5waXBlKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBGSVggIVxuICAgICAgICAgICAgbWFwKGUgPT4gZS5zcmNFbGVtZW50LmNoZWNrZWQpLFxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnplcm9lZCh2KVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1vZGVsU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIC8vIEJlbG93IGFyZSB0aGUgYXZhaWxhYmxlIG1vZGVscy4gV2lsbCBuZWVkIHRvIGNob29zZSAzIHRvIGJlIGF2YWlsYWJsZSBPTkxZXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLXVuY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJiZXJ0LWJhc2UtZ2VybWFuLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwieGxtLW1sbS1lbi0yMDQ4XCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlsYmVydC1iYXNlLXVuY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxyb2JlcnRhLWJhc2VcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJhbGJlcnQtYmFzZS12MVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImFsYmVydC14eGxhcmdlLXYyXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwieGxtLXJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcInQ1LXNtYWxsXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImdwdDJcIiwga2luZDogdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlsZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIGNvbnN0IG5hbWVzID0gUi5tYXAoUi5wcm9wKCduYW1lJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRzID0gUi5tYXAoUi5wcm9wKCdraW5kJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRtYXAgPSBSLnppcE9iaihuYW1lcywga2luZHMpXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iuc2VsZWN0QWxsKCcubW9kZWwtb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb2RlbC1vcHRpb24nLCB0cnVlKVxuICAgICAgICAgICAgLnByb3BlcnR5KCd2YWx1ZScsIGQgPT4gZC5uYW1lKVxuICAgICAgICAgICAgLmF0dHIoXCJtb2RlbGtpbmRcIiwgZCA9PiBkLmtpbmQpXG4gICAgICAgICAgICAudGV4dChkID0+IGQubmFtZSlcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCB0aGlzLnVpQ29uZi5tb2RlbCgpKTtcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIGNvbnN0IG1uYW1lID0gbWUucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsKG1uYW1lKTtcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsS2luZChraW5kbWFwW21uYW1lXSk7XG4gICAgICAgICAgICBpZiAoa2luZG1hcFttbmFtZV0gPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNFVFRJTkcgTUFTSyBJTkRTXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKFtdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5tYWluSW5pdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckF0dEhlYWQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRzID0gXy5yYW5nZSgwLCB0aGlzLnVpQ29uZi5fbkhlYWRzKVxuICAgICAgICBjb25zdCBmb2N1c0F0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5hdHRcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnVpQ29uZi5oYXNUb2tlbigpID8gdGhpcy51aUNvbmYudG9rZW4oKSA6IG51bGxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxlZnRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwibGVmdFwiLCB0b2tlbik7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByaWdodEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJyaWdodFwiLCB0b2tlbik7XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJub3c6IFwiLCB0aGlzLnVpQ29uZi5vZmZzZXQpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5vcHRpb25zLm9mZnNldCA9IHRoaXMudWlDb25mLm9mZnNldFxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7RDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTa2VsZXRvbihiYXNlOiBEM1NlbCkge1xuXG4gICAgLy8gLS0tLSBURU1QTEFURSAtLS0tLVxuICAgIC8vIGxhbmd1YWdlPUhUTUxcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDwhLS0gICAgICAgIDxkaXYgaWQ9XCJhdHRlbnRpb24tdmlzXCI+LS0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb2RlbC1zZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vZGVsLW9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxNTBweDttYXJnaW4tYm90dG9tOiA1cHg7XCI+U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDwvbGFiZWw+PHNlbGVjdCBpZD1cIm1vZGVsLW9wdGlvbi1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9kZWwtb3B0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZW50ZW5jZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZvcm0tc2VudGVuY2UtYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTUwcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VudGVuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZm9ybS1zZW50ZW5jZS1hXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZW50LWEtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHNlbnRlbmNlIHRvIGFuYWx5emVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogY2FsYygxMDAlIC0gMjQwcHgpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwidXBkYXRlLXNlbnRlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6NzBweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogM3B4IDNweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ1wiPjwvZGl2Pi0tPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDoxNTBweDtcIj48Yj5GaWx0ZXJzPC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjbHMtdG9nZ2xlXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiPi0tPlxuICAgICAgICAgICAgICAgICAgICBIaWRlIFNwZWNpYWwgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzd2l0Y2hcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD1cImNoZWNrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2hvcnQtc2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMjVweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3cgdG9wIDxzcGFuIGlkPVwibXktcmFuZ2UtdmFsdWVcIj43MDwvc3Bhbj4lIG9mIGF0dDpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWFyZ2luLWxlZnQ6IDVweDt3aWR0aDpjYWxjKDEwMCUgLSA1NTBweCk7XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJteS1yYW5nZVwiPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjcwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNsaWRlclwiIGlkPVwibXktcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImxheWVyLXNlbGVjdGlvblwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAxNTBweDt2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuICAgICAgICAgICAgICAgICAgICBMYXllclxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllci1zZWxlY3QgYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJidXR0b25zXCIgaWQ9XCJsYXllci1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLWhlYWQtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTUwcHg7dmVydGljYWwtYWxpZ246IHRvcDtcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQgaGVhZHM6XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlbGVjdGVkLWhlYWRzXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjogdG9wO1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbm5lY3Rvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29ubmVjdG9yLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbnRyb2wtaGFsZlwiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGF5ZXItc2VsZWN0aW9uXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kZXNjcmlwdGlvblwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5ZXI6LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXItc2VsZWN0IGJ0bi1ncm91cCBidG4tZ3JvdXAtdG9nZ2xlXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIiBpZD1cImxheWVyLXNlbGVjdFwiPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udHJvbC1oYWxmIGhlYWQtY29udHJvbFwiPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWxlY3RlZC1oZWFkLWRpc3BsYXlcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWRlc2NyaXB0aW9uXCI+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3RlZCBoZWFkczotLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWxlY3RlZC1oZWFkc1wiPi0tPlxuXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdC1pbnB1dFwiIGlkPVwiaGVhZC1hbGwtb3Itbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3QtYWxsLWhlYWRzXCI+U2VsZWN0IGFsbCBoZWFkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZWxlY3Qtbm8taGVhZHNcIj5VbnNlbGVjdCBhbGwgaGVhZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVzYWdlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGZvY3VzIG9uIG9uZSB0b2tlbiBieSA8Yj5jbGljazwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gbWFzayBhbnkgdG9rZW4gYnkgPGI+ZG91YmxlIGNsaWNrPC9iPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gc2VsZWN0IGFuZCBkZS1zZWxlY3QgYSBoZWFkIGJ5IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Y2xpY2s8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoZSBoZWF0bWFwIGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImF0bi1jb250YWluZXJcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkLWluZm8tYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1ob3Zlci1kaXNwbGF5IHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA3MHB4OyBoZWlnaHQ6IDMwcHg7IHZpc2liaWxpdHk6IGhpZGRlbjsgbGVmdDogOTI5cHg7IHRvcDogNjcwcHg7IGJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDFweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJsZWZ0LWF0dC1oZWFkc1wiIHdpZHRoPVwiMTgyXCIgaGVpZ2h0PVwiNDQyXCI+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsZWZ0LXRva2Vuc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwiYXRuLWRpc3BsYXlcIiBoZWlnaHQ9XCI0NDJcIiB3aWR0aD1cIjIwMFwiPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicmlnaHQtdG9rZW5zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJyaWdodC1hdHQtaGVhZHNcIiB3aWR0aD1cIjE4MlwiIGhlaWdodD1cIjQ0MlwiPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aXMtYnJlYWtcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgIGBcbiAgICB9XG5cbiAgICBiYXNlLmh0bWwodGVtcGxhdGUpO1xuXG4gICAgLy8gLS0tLSBURU1QTEFURS5lbmQgLS0tLS1cblxuXG4gICAgLyoqXG4gICAgICogVG9wIGxldmVsIHNlY3Rpb25zXG4gICAgICovXG4gICAgY29uc3Qgc2VudGVuY2VJbnB1dCA9IGJhc2Uuc2VsZWN0KFwiI3NlbnRlbmNlLWlucHV0XCIpO1xuICAgIGNvbnN0IGNvbm5lY3RvckNvbnRhaW5lciA9IGJhc2Uuc2VsZWN0KCcjY29ubmVjdG9yLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGF0bkNvbnRyb2xzID0gYmFzZS5zZWxlY3QoJyNjb25uZWN0b3ItY29udHJvbHMnKTtcbiAgICBjb25zdCBhdG5Db250YWluZXIgPSBiYXNlLnNlbGVjdCgnI2F0bi1jb250YWluZXInKTtcblxuICAgIC8qKlxuICAgICAqIFNlbnRlbmNlIElucHV0XG4gICAgICovXG5cbiAgICBjb25zdCBzZW50ZW5jZUEgPSBiYXNlLnNlbGVjdCgnI2Zvcm0tc2VudGVuY2UtYScpO1xuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBiYXNlLnNlbGVjdCgnI3VwZGF0ZS1zZW50ZW5jZScpO1xuXG4gICAgLyoqXG4gICAgICogQ29ubmVjdG9yIENvbnRyb2xzXG4gICAgICovXG5cbiAgICBjb25zdCBtb2RlbFNlbGVjdG9yID0gYmFzZS5zZWxlY3QoJyNtb2RlbC1vcHRpb24tc2VsZWN0b3InKVxuICAgIGNvbnN0IHRocmVzaFNsaWRlciA9IGJhc2Uuc2VsZWN0KCcjbXktcmFuZ2UnKTtcbiAgICBjb25zdCBsYXllckNoZWNrYm94ZXMgPSBiYXNlLnNlbGVjdCgnI2xheWVyLXNlbGVjdCcpO1xuICAgIGNvbnN0IGNsc1RvZ2dsZSA9IGJhc2Uuc2VsZWN0KCcjY2xzLXRvZ2dsZScpO1xuICAgIGNvbnN0IHNlbGVjdGVkSGVhZHMgPSBiYXNlLnNlbGVjdCgnI3NlbGVjdGVkLWhlYWRzJyk7XG4gICAgY29uc3QgaGVhZFNlbGVjdEFsbCA9IGJhc2Uuc2VsZWN0KCcjc2VsZWN0LWFsbC1oZWFkcycpO1xuICAgIGNvbnN0IGhlYWRTZWxlY3ROb25lID0gYmFzZS5zZWxlY3QoJyNzZWxlY3Qtbm8taGVhZHMnKTtcblxuICAgIC8qKlxuICAgICAqIEZvciBtYWluIGF0dGVudGlvbiB2aXNcbiAgICAgKi9cblxuICAgIGNvbnN0IGhlYWRJbmZvQm94ID0gYmFzZS5zZWxlY3QoJyNoZWFkLWluZm8tYm94Jyk7XG4gICAgY29uc3QgaGVhZEJveExlZnQgPSBiYXNlLnNlbGVjdCgnI2xlZnQtYXR0LWhlYWRzJyk7XG4gICAgY29uc3QgdG9rZW5zTGVmdCA9IGJhc2Uuc2VsZWN0KCcjbGVmdC10b2tlbnMnKTtcbiAgICBjb25zdCBhdG5EaXNwbGF5ID0gYmFzZS5zZWxlY3QoJyNhdG4tZGlzcGxheScpO1xuICAgIGNvbnN0IHRva2Vuc1JpZ2h0ID0gYmFzZS5zZWxlY3QoJyNyaWdodC10b2tlbnMnKTtcbiAgICBjb25zdCBoZWFkQm94UmlnaHQgPSBiYXNlLnNlbGVjdCgnI3JpZ2h0LWF0dC1oZWFkcycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGhhbmRsZXMgdG8gdGhlIGltcG9ydGFudCBwYXJ0cyBoZXJlXG4gICAgICovXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBib2R5OiBkMy5zZWxlY3QoJ2JvZHknKSxcbiAgICAgICAgYXRuQ29udGFpbmVyOiBhdG5Db250YWluZXIsXG4gICAgICAgIGF0bkRpc3BsYXk6IGF0bkRpc3BsYXksXG4gICAgICAgIGF0bkhlYWRzOiB7XG4gICAgICAgICAgICBsZWZ0OiBoZWFkQm94TGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiBoZWFkQm94UmlnaHQsXG4gICAgICAgICAgICBoZWFkSW5mbzogaGVhZEluZm9Cb3hcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgc2VudGVuY2VBOiBzZW50ZW5jZUEsXG4gICAgICAgICAgICBidXR0b246IGZvcm1CdXR0b25cbiAgICAgICAgfSxcbiAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICBsZWZ0OiB0b2tlbnNMZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IHRva2Vuc1JpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsU2VsZWN0b3I6IG1vZGVsU2VsZWN0b3IsXG4gICAgICAgIGNsc1RvZ2dsZTogY2xzVG9nZ2xlLFxuICAgICAgICBsYXllckNoZWNrYm94ZXM6IGxheWVyQ2hlY2tib3hlcyxcbiAgICAgICAgc2VsZWN0ZWRIZWFkczogc2VsZWN0ZWRIZWFkcyxcbiAgICAgICAgaGVhZFNlbGVjdEFsbDogaGVhZFNlbGVjdEFsbCxcbiAgICAgICAgaGVhZFNlbGVjdE5vbmU6IGhlYWRTZWxlY3ROb25lLFxuICAgICAgICB0aHJlc2hTbGlkZXI6IHRocmVzaFNsaWRlcixcbiAgICB9XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9