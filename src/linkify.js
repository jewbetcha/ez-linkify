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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Links have the notation: [[<link text>, <link target>]]
// linkify takes in an element containing text with a link
// and replaces it with a built <a> tag

function Linkify(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Get the text from the element and isolate the link string, also split
  // into an array.
  var tb = options.targetBlank || false;
  var classNames = [].concat(_toConsumableArray(options.classNames)) || [];

  var startingText = el.innerText;
  var reg = startingText.match(/\[\[(.*?)\]\]/g);
  if (reg === null) {
    throw new Error('There are no matching strings in your element');
  } else {
    reg = reg.map(function (v) {
      return v.replace(/\[+|\]+/g, '');
    });
  }
  var count = 0;
  reg.forEach(function (i) {
    var arr = i.split(',');
    var link = document.createElement('a');
    link.setAttribute('href', arr[1]);
    var linkText = arr[0];
    link.innerHTML = linkText;
    if (tb) {
      link.setAttribute('target', '_blank');
    }
    if (classNames.length === 0) {
      classNames = [];
    } else {
      var _link$classList;

      (_link$classList = link.classList).add.apply(_link$classList, _toConsumableArray(classNames));
    }

    var element = el;
    var replaceText = '[[' + i + ']]';
    if (count === 0) {
      var newText = startingText.replace(replaceText, link.outerHTML);
      element.innerHTML = newText;
    } else {
      var midwayText = el.innerHTML;
      var _newText = midwayText.replace(replaceText, link.outerHTML);
      element.innerHTML = _newText;
    }
    count += 1;
  });
}

module.exports = Linkify;

/***/ })
/******/ ]);