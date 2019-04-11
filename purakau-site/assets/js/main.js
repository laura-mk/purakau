/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global__ = __webpack_require__(2);
// Define globally exposed module objects
/* eslint-disable */
// Define dependency imports
// import popper from 'popper.js/dist/esm/popper';
//import transition from 'bootstrap/assets/javascripts/bootstrap/transition';
// import collapse from 'bootstrap/js/dist/collapse';
// import dropdown from 'bootstrap/js/dist/dropdown';
// import util from 'bootstrap/js/dist/util';
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"
// import bootstrap from "bootstrap/dist/js/bootstrap.min.js"
// import carousel from 'bootstrap/js/dist/carousel';
// import tooltip from 'bootstrap/js/dist/tooltip';
// import popover from 'bootstrap/js/dist/popover';
// import modal from 'bootstrap/js/dist/modal';
// import tab from 'bootstrap/js/dist/tab';
// import highlight from 'jquery-highlight/jquery.highlight';

// Define local components
// import navigation from './components/navigation';
// import content from './components/content';
// import sitemap from './components/sitemap';
// import search from './components/search';
// import form from './components/form';
// import img from './components/img';
//
// navigation();
// content();
// sitemap();
// search();
// form();
// img();


// local components


Object(__WEBPACK_IMPORTED_MODULE_0__components_global__["a" /* default */])();

$('.collapse').collapse();

/* eslint-enable */

$(function () {
  $('[data-toggle="popover"]').popover();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {

  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('html').removeClass('no-js').addClass('js');
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);