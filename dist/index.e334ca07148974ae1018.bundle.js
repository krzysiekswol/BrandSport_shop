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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar slider = document.querySelector(\".slider\");\nvar dotOne = document.querySelector(\".one\");\nvar dotTwo = document.querySelector(\".two\");\nvar dotThree = document.querySelector(\".three\");\ndotOne.addEventListener(\"click\", function () {\n  if (dotOne.classList.contains(\"active\") === false) {\n    dotOne.classList.add(\"active\");\n    slider.style.backgroundImage = \"url(\\\"./src/assets/img/banner1.jpg\\\")\";\n    dotTwo.classList.remove(\"active\");\n    dotThree.classList.remove(\"active\");\n  }\n});\ndotTwo.addEventListener(\"click\", function () {\n  if (dotTwo.classList.contains(\"active\") === false) {\n    dotTwo.classList.add(\"active\");\n    slider.style.backgroundImage = \"url(\\\"./src/assets/img/banner2.jpg\\\")\";\n    dotThree.classList.remove(\"active\");\n    dotOne.classList.remove(\"active\");\n  }\n});\ndotThree.addEventListener(\"click\", function () {\n  if (dotThree.classList.contains(\"active\") === false) {\n    dotThree.classList.add(\"active\");\n    slider.style.backgroundImage = \"url(\\\"./src/assets/img/banner3.jpg\\\")\";\n    dotTwo.classList.remove(\"active\");\n    dotOne.classList.remove(\"active\");\n  }\n}); // automaticSlider\n\nvar i = 1;\n\nvar automaticSlider = function automaticSlider() {\n  slider.style.backgroundImage = \"url('./src/assets/img/banner\".concat(i, \".jpg')\");\n\n  if (i === 1) {\n    dotThree.classList.remove(\"active\");\n    dotTwo.classList.remove(\"active\");\n    dotOne.classList.add(\"active\");\n  } else if (i === 2) {\n    dotOne.classList.remove(\"active\");\n    dotThree.classList.remove(\"active\");\n    dotTwo.classList.add(\"active\");\n  } else {\n    dotTwo.classList.remove(\"active\");\n    dotOne.classList.remove(\"active\");\n    dotThree.classList.add(\"active\");\n    i = 0;\n  }\n\n  i++;\n};\n\nsetInterval(automaticSlider, 5000); // modal\n\nvar imgModal = document.querySelector(\".modal__img\");\ndocument.querySelector(\".js-animateOne\").addEventListener(\"click\", function () {\n  document.querySelector(\".modal\").classList.add(\"modal__active\");\n  imgModal.src = \"./src/assets/img/promo1.jpg\";\n});\ndocument.querySelector(\".js-animateTwo\").addEventListener(\"click\", function () {\n  document.querySelector(\".modal\").classList.add(\"modal__active\");\n  imgModal.src = \"./src/assets/img/promo2.jpg\";\n});\ndocument.querySelector(\".js-animateThree\").addEventListener(\"click\", function () {\n  document.querySelector(\".modal\").classList.add(\"modal__active\");\n  imgModal.src = \"./src/assets/img/promo3.jpg\";\n});\nvar closeModal = document.querySelector(\".modal--cancel\");\ncloseModal.addEventListener(\"click\", function () {\n  document.querySelector(\".modal__active\").classList.remove(\"modal__active\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });