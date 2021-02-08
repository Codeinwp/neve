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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const arrayMoveMutate = (array, from, to) => {
	const startIndex = to < 0 ? array.length + to : to;
	const item = array.splice(from, 1)[0];
	array.splice(startIndex, 0, item);
};

const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
// TODO: Remove this for the next major release
module.exports.default = arrayMove;

module.exports.mutate = arrayMoveMutate;


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js ***!
  \************************************************************************/
/*! exports provided: SortableContainer, sortableContainer, SortableElement, sortableElement, SortableHandle, sortableHandle, arrayMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableContainer", function() { return sortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableElement", function() { return sortableElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableHandle", function() { return sortableHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return arrayMove; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
















var Manager = function () {
  function Manager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Manager);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "refs", {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }

      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);

      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);

  return Manager;
}();

function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  if (true) {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }

  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }

  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];

  switch (pre) {
    case 'ms':
      return 'ms';

    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}

function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }

  return 0;
}

function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };

  if (!node) {
    return undefined;
  }

  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };

  if (node.parentNode === parent) {
    return nodeOffset;
  }

  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
      width = _ref.width,
      height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';

  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant__WEBPACK_IMPORTED_MODULE_13___default()(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }

  invariant__WEBPACK_IMPORTED_MODULE_13___default()(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);

  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }

  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
      width = _ref2.width,
      lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);

  var _offsets = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(offsets, 2),
      minLockOffset = _offsets[0],
      maxLockOffset = _offsets[1];

  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}

function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}

function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);

  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);

  var clonedFields = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_14__["default"])(clonedNode.querySelectorAll(selector));

  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }

    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }

    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}

function sortableHandle(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableHandle, _React$Component);

    function WithSortableHandle() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableHandle);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableHandle).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, this.props));
      }
    }]);

    return WithSortableHandle;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}

var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AutoScroller);

    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }

      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;

      var translate = _ref.translate,
          minTranslate = _ref.minTranslate,
          maxTranslate = _ref.maxTranslate,
          width = _ref.width,
          height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
          scrollTop = _this$container.scrollTop,
          scrollLeft = _this$container.scrollLeft,
          scrollHeight = _this$container.scrollHeight,
          scrollWidth = _this$container.scrollWidth,
          clientHeight = _this$container.clientHeight,
          clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;

      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }

      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }

      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;

          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);

  return AutoScroller;
}();

function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}

function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];

  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }

  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }

  return false;
}

var propTypes = {
  axis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(['x', 'y', 'xy']),
  contentWindow: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  disableAutoscroll: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  distance: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  getHelperDimensions: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  helperClass: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  helperContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, typeof HTMLElement === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(HTMLElement)]),
  hideSortableGhost: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  keyboardSortingTransitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  lockAxis: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  lockOffset: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]))]),
  lockToContainerEdges: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  onSortEnd: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortMove: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortOver: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pressDelay: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  pressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  keyCodes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    lift: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    drop: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    cancel: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    up: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number),
    down: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number)
  }),
  shouldCancelStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  updateBeforeSortStart: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  useDragHandle: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  useWindowAsScrollContainer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  invariant__WEBPACK_IMPORTED_MODULE_13___default()(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, value);
}
function sortableContainer(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableContainer, _React$Component);

    function WithSortableContainer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableContainer);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableContainer).call(this, props));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "state", {});

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;

        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }

        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });

        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection,
              disabled = _node$sortableInfo.disabled;

          if (disabled) {
            return;
          }

          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }

          _this.manager.active = {
            collection: collection,
            index: index
          };

          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }

          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;

        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;

          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleEnd", function () {
        _this.touched = false;

        _this.cancel();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;

        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }

          _this.manager.active = null;
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();

          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);

                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();

                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });

                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);

                if (_isKeySorting) {
                  _this.initialOffset = getPosition(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }

                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });

                if (_isKeySorting) {
                  _this.helper.focus();
                }

                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }

                _this.minTranslate = {};
                _this.maxTranslate = {};

                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight
                  } : _this.containerBoundingRect,
                      containerTop = _ref.top,
                      containerLeft = _ref.left,
                      containerWidth = _ref.width,
                      containerHeight = _ref.height;

                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;

                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }

                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }

                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }

                _this.listenerNode = event.touches ? _node : _this.contentWindow;

                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);

                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }

                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });

                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }

                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };

              var _this$props3 = _this.props,
                  _axis = _this$props3.axis,
                  _getHelperDimensions = _this$props3.getHelperDimensions,
                  _helperClass = _this$props3.helperClass,
                  _hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  _onSortStart = _this$props3.onSortStart,
                  _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                  _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;

              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;

                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });

                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();

              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();

          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;

        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }

        _this.updateHelperPosition(event);

        _this.animateNodes();

        _this.autoscroll();

        if (onSortMove) {
          onSortMove(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
            collection = _this$manager.active.collection,
            isKeySorting = _this$manager.isKeySorting;

        var nodes = _this.manager.getOrderedRefs();

        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);

            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }

        _this.helper.parentNode.removeChild(_this.helper);

        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }

        _this.autoScroller.clear();

        _this.manager.active = null;
        _this.manager.isKeySorting = false;

        _this.setState({
          sorting: false,
          sortingIndex: null
        });

        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }

        _this.touched = false;
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;

        if (disableAutoscroll) {
          _this.autoScroller.clear();

          return;
        }

        if (isKeySorting) {
          var translate = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this.translate);

          var scrollX = 0;
          var scrollY = 0;

          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }

          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }

          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }

        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;

        _this.animateNodes();
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
            shouldCancelStart = _this$props5.shouldCancelStart,
            _this$props5$keyCodes = _this$props5.keyCodes,
            customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;

        var keyCodes = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, defaultKeyCodes, customKeyCodes);

        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }

        event.stopPropagation();
        event.preventDefault();

        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;

          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
            index = _node$sortableInfo2.index,
            collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };

        _this.handlePress(event);
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();

        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;

        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }

        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };

        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);

        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });

      validateProps(props);
      _this.manager = new Manager();
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableContainer, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });

          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }

        if (!this.container) {
          return;
        }

        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
            lockAxis = _this$props6.lockAxis,
            lockOffset = _this$props6.lockOffset,
            lockToContainerEdges = _this$props6.lockToContainerEdges,
            transitionDuration = _this$props6.transitionDuration,
            _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
            keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;

        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
            height: this.height,
            lockOffset: lockOffset,
            width: this.width
          }),
              _getLockPixelOffsets2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_getLockPixelOffsets, 2),
              minLockOffset = _getLockPixelOffsets2[0],
              maxLockOffset = _getLockPixelOffsets2[1];

          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }

        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }

        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }

        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
            transitionDuration = _this$props7.transitionDuration,
            hideSortableGhost = _this$props7.hideSortableGhost,
            onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
            windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;

        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;

          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;

            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }

          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];

          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);

            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }

          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }

            continue;
          }

          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }

          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;

                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);

                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }

                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;

                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;

              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }

          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }

        if (this.newIndex == null) {
          this.newIndex = this.index;
        }

        if (isKeySorting) {
          this.newIndex = prevIndex;
        }

        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;

        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;

        if (typeof getContainer !== 'function') {
          return Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        }

        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps)));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;

        if (typeof helperContainer === 'function') {
          return helperContainer();
        }

        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;

        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }

        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);

    return WithSortableContainer;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", defaultProps), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "childContextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), _temp;
}

var propTypes$1 = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number.isRequired,
  collection: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(WithSortableElement, _React$Component);

    function WithSortableElement() {
      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WithSortableElement);

      return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(WithSortableElement).apply(this, arguments));
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }

          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }

        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
            collection = _this$props.collection,
            disabled = _this$props.disabled,
            index = _this$props.index;
        var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_12__["findDOMNode"])(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        invariant__WEBPACK_IMPORTED_MODULE_13___default()(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return Object(react__WEBPACK_IMPORTED_MODULE_10__["createElement"])(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);

    return WithSortableElement;
  }(react__WEBPACK_IMPORTED_MODULE_10__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "contextTypes", {
    manager: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "propTypes", propTypes$1), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_class, "defaultProps", {
    collection: 0
  }), _temp;
}




/***/ }),

/***/ "./src/components/MetaFieldsManager.js":
/*!*********************************************!*\
  !*** ./src/components/MetaFieldsManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_SortableItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/SortableItems */ "./src/components/controls/SortableItems.js");
/* harmony import */ var _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/icons.js */ "./src/helpers/icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global metaSidebar */


var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var Component = wp.element.Component;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl,
    ButtonGroup = _wp$components.ButtonGroup,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;
var __ = wp.i18n.__;

var MetaFieldsManager = /*#__PURE__*/function (_Component) {
  _inherits(MetaFieldsManager, _Component);

  var _super = _createSuper(MetaFieldsManager);

  function MetaFieldsManager(props) {
    var _this;

    _classCallCheck(this, MetaFieldsManager);

    _this = _super.call(this, props);
    var metaData = wp.data.select('core/editor').getEditedPostAttribute('meta');

    var omitEmpty = function omitEmpty(obj) {
      Object.keys(obj).filter(function (k) {
        return '' === obj[k] || 0 === obj[k];
      }).forEach(function (k) {
        return delete obj[k];
      });
      return obj;
    };

    _this.defaultState = {
      'neve_meta_sidebar': 'default',
      'neve_meta_container': 'default',
      'neve_meta_enable_content_width': 'off',
      'neve_meta_content_width': 70,
      'neve_meta_title_alignment': 'left',
      'neve_meta_author_avatar': 'off',
      'neve_meta_reading_time': 'off',
      'neve_post_elements_order': JSON.stringify(['title', 'meta', 'thumbnail', 'content', 'tags', 'comments', 'post-navigation']),
      'neve_meta_disable_header': 'off',
      'neve_meta_disable_footer': 'off',
      'neve_meta_disable_title': 'off'
    };

    var result = _objectSpread(_objectSpread({}, omitEmpty(_this.defaultState)), omitEmpty(metaData)); // Do not use any keys that are not in the sidebar for meta.


    for (var k in result) {
      if (!Object.keys(_this.defaultState).includes(k)) {
        delete result[k];
      }
    }

    _this.state = _objectSpread({}, result);
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    _this.updateBlockWidth = _this.updateBlockWidth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MetaFieldsManager, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapShot) {
      this.updateBlockWidth();
    }
  }, {
    key: "updateValues",
    value: function updateValues(id, value) {
      var state = this.state;
      state[id] = value;
      this.setState(state);
      this.props.setMetaValue(id, value);
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      var state = this.state;

      var allMeta = _objectSpread({}, this.props.allMeta);

      var emptiedMeta = {};
      Object.keys(state).map(function (control) {
        var emptyValue = '';

        if ('neve_meta_content_width' === control) {
          emptyValue = 0;
        }

        emptiedMeta[control] = emptyValue;
      }); // Don't send meta that wasn't there already.

      for (var k in emptiedMeta) {
        if (!Object.keys(allMeta).includes(k)) {
          delete emptiedMeta[k];
        }
      } // Merge old meta with the empty meta.


      this.props.setAllMetas(_objectSpread(_objectSpread({}, allMeta), emptiedMeta));
      this.setState(this.defaultState);
    }
  }, {
    key: "updateBlockWidth",
    value: function updateBlockWidth() {
      var isCustomContentWidth = this.state['neve_meta_enable_content_width'];
      var containerType = this.state['neve_meta_container'];

      if ('default' === containerType) {
        containerType = metaSidebar.actions['neve_meta_content_width'].container;
      }

      var contentWidth = this.state['neve_meta_content_width'];
      var contentWidthDefault = metaSidebar.actions['neve_meta_content_width'].content;
      var blockWidthDefault = contentWidthDefault + '%';
      var blocKWidth = contentWidth + '%';

      if ('contained' === containerType) {
        blockWidthDefault = Math.round(contentWidthDefault / 100 * metaSidebar.actions['neve_meta_content_width'].editor) + 'px';
        blocKWidth = Math.round(contentWidth / 100 * metaSidebar.actions['neve_meta_content_width'].editor) + 'px';
      }

      if (document.contains(document.getElementById('neve-meta-editor-style'))) {
        document.getElementById('neve-meta-editor-style').remove();
      }

      var css = '.wp-block:not([data-align="full"]) { max-width: ' + ('on' === isCustomContentWidth ? blocKWidth : blockWidthDefault) + '; }';
      var head = document.head;
      var style = document.createElement('style');
      style.setAttribute('id', 'neve-meta-editor-style');
      style.innerHTML = css;
      head.appendChild(style);
    }
  }, {
    key: "renderPageLayoutGroup",
    value: function renderPageLayoutGroup() {
      var _this2 = this;

      var template = wp.data.select('core/editor').getEditedPostAttribute('template');

      if ('elementor_header_footer' === template) {
        return false;
      }

      return wp.element.createElement("div", {
        className: "nv-option-category"
      }, wp.element.createElement(PanelBody, {
        title: __('Page Layout', 'neve'),
        intialOpen: true
      }, wp.element.createElement(BaseControl, {
        id: "neve_meta_sidebar",
        label: __('Sidebar', 'neve'),
        className: "neve-meta-control neve-meta-radio-image neve_meta_sidebar"
      }, wp.element.createElement(RadioControl, {
        selected: this.state['neve_meta_sidebar'],
        options: [{
          label: wp.element.createElement(React.Fragment, null, wp.element.createElement("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABXCAYAAAC9UeOHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7ZrfThpREMZn1SgUWiwkFi6gtol3mnjhi/QJmj5C36SP1gsvTGir0Rb/Baop20UL3fJtugaH3QXKzlLj90s2G5Rlc37MmTNnFqfreW/9weCDiLMujxjHkSPx/TdO13UPfV82hUDKxyXKuMf6kpB7UIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgpRUIiCQhQrsgAGg4F0Om3peZ54wwOvwerqqiwvL8uzUkmKxafB66zJVEi325Xzs9PgHMXt7W1wvr6+Ds7lclleVGuZinF+dF1fjEEEQMTl5aX8C9VqNRBjDX4jYi4E3/rR4ZdgasxDsViUzVevgyllBYSYJlVExudPzbllAEwzfFaYb6wwFdL69vUuL6QBxGLqWWImBKtIp9OZ6Zq1tTVZWUnO88hDcUk5DcyEnJ+dyazs7OzI9vb2xPdZRonJsovoSJoqiIJCoTD2dyy3GxsbsrW1Jc1mM/Z6RAgOJNq0MRHyPWGq1Ot1aTQakgSkXFxc3NUjUUD6gxESt6ogR0BGu92W09PxsK/ValKpVOTk5CRRBnCN8kjqQkZLcU34jUJG1IARGZBxfHwsk8CUxH3SrktSF5JUJ4QluOu6kf8fzRvIMyjdIe7m5ib2XmkLyXS3iwFggP1+f+J7MVAk19JwoxdHmjVOSKabOyRKHCHhShMVMblcLjjHRQewKONTj5Bpd6aQgZoDURAFkivo9Xoy771mIfUICXsaSbkklBFWpXt7e2PvwYqEaIqLkHw+bxIhJlMGDZ6kWmQ0hyCnRMmDiKTVJjcUYoGJkHK5kigEg93f35fd3d0gSg4ODmRWqkb9ERMhqDdwJG3CkEixzE7azEXxfLgcW3XRzJbdaTpcyBGtVktmpWrYPTMTggixaPtZ91hNCzP0QlFtpgVk4DMtMa9U642XqURKFjJAJpUqBoIwR2Nn1nIb10GqxVY/ikweQ4yCtuI0YgpDAaXSejDlLDvto2TyGCIO7+9TO8/7eVeYYeD5/JMgGhbx1G6hQv5HzJ/LPEQoREEhCgpRUIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgi5EhLg+3K15P/23/viHMkjBzL6v/x3fwDAqWHdPm8hRQAAAABJRU5ErkJggg=="
          }), wp.element.createElement("span", {
            className: "option-label"
          }, __('Inherit', 'neve'))),
          value: 'default'
        }, {
          label: wp.element.createElement(React.Fragment, null, wp.element.createElement("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABYCAYAAACjxTpsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dWxSsNgGEbht6UEgnGpg3HrUGf1DrxTL0yFutXBToFAsK3WoYtnMIVgW84zZwiHl/8btW07i/bKslxMPtfrp2T0GP1ot9vZOPrFKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKGCSnpqmyevLc07JRVVlPr/98/cuBfReSvVd/e7+IefMpQCjAKMAowBPMnApwJMMXAowCjAKMArwJAOXAjzJwKUAowCjAKMATzJwKcCTDFwKMAowCuj9pnRdl9XqI0OYTq9SFEX+20FR3pfLDKGqLk8zyu6nr+s6QziGIDsHRanrm5wzH1pgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBQw2WzyNhpnEe19AbO4NutQ2DJ9AAAAAElFTkSuQmCC"
          }), wp.element.createElement("span", {
            className: "option-label"
          }, __('None', 'neve'))),
          value: 'full-width'
        }, {
          label: wp.element.createElement(React.Fragment, null, wp.element.createElement("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABXCAYAAABSk4i5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7dUtT8NQFIfxM0ouYkWwUBLMMEMAiu/v+A6AQLH5+jVr9qL3iCZNTrPl+emrnuSe/+zrb7uPET6fd3FN7uv57CZ0xijAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjgNhL8/nzH1B6bJprmadDblChd18XU+r4f/DYlytv7R0ytqqrBb1OilFLiknhogVGAUYCTDJxk4CQDJxl4aIFRgFGAkwycZOAkAycZeGiBUYBRgJMMnGTgJAMnGXhogVFAyvdp2zbGOH2/uq4jS0qUzfo/xpgfg6xWr5ElJcrDYhFjlHIXmVKiLJcvcUk8tMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAo4ABQ0jKnFSWXOgAAAABJRU5ErkJggg=="
          }), wp.element.createElement("span", {
            className: "option-label"
          }, __('Left', 'neve'))),
          value: 'left'
        }, {
          label: wp.element.createElement(React.Fragment, null, wp.element.createElement("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABXCAYAAAC5pDO6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dlBSsNQFEbhWyORSCDYFajYgboH9z9zDerAOrMYCQSCmo498MqjCW3PB9nAIbn/IIv489V+/8QReX4/jxxPq4vFWehfhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgHJ/zLbto2315eY2/XNbVRVFfu200/evu9jbsMwxBSSw9R1HfcPjzG3oihiCju9MWVZxqnw+ALDAMMA5xo418C5Bs418PgCwwDDAOcaONfAuQbONfD4AsMAwwDnGjjXwLkGzjXw+ALDgORPqeu67ZOjaZrJbkSu5DCbzWd8rNeRo7xbbY/4IUgOU1WXcbVcRo5DeVtGyWHGz2B8ToXHFxgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgG/AIdeUYQlOqQ4AAAAABJRU5ErkJggg=="
          }), wp.element.createElement("span", {
            className: "option-label"
          }, __('Right', 'neve'))),
          value: 'right'
        }],
        onChange: function onChange(value) {
          _this2.updateValues('neve_meta_sidebar', value);
        }
      })), wp.element.createElement(BaseControl, {
        label: __('Container', 'neve'),
        id: "neve_meta_container",
        className: "neve-meta-control neve-meta-button-group neve_meta_container"
      }, wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {
        isPrimary: 'default' === this.state['neve_meta_container'],
        isSecondary: 'default' !== this.state['neve_meta_container'],
        onClick: function onClick() {
          _this2.updateValues('neve_meta_container', 'default');
        }
      }, " ", __('Default', 'neve'), " "), wp.element.createElement(Button, {
        isPrimary: 'contained' === this.state['neve_meta_container'],
        isSecondary: 'contained' !== this.state['neve_meta_container'],
        onClick: function onClick() {
          _this2.updateValues('neve_meta_container', 'contained');
        }
      }, " ", __('Contained', 'neve'), " "), wp.element.createElement(Button, {
        isPrimary: 'full-width' === this.state['neve_meta_container'],
        isSecondary: 'full-width' !== this.state['neve_meta_container'],
        onClick: function onClick() {
          _this2.updateValues('neve_meta_container', 'full-width');
        }
      }, " ", __('Full Width', 'neve'), " "))), wp.element.createElement(BaseControl, {
        id: "neve_meta_enable_content_width",
        className: "neve-meta-control neve-meta-checkbox neve_meta_enable_content_width"
      }, wp.element.createElement(ToggleControl, {
        label: __('Custom Content Width (%)', 'neve'),
        checked: 'on' === this.state['neve_meta_enable_content_width'],
        onChange: function onChange(value) {
          _this2.updateValues('neve_meta_enable_content_width', value ? 'on' : 'off');

          _this2.updateValues('neve_meta_content_width', _this2.state['neve_meta_content_width']);
        }
      })), 'on' === this.state.neve_meta_enable_content_width ? wp.element.createElement(BaseControl, {
        id: "neve_meta_content_width",
        className: "neve-meta-control neve-meta-range neve_meta_content_width"
      }, wp.element.createElement(RangeControl, {
        value: this.state['neve_meta_content_width'],
        onChange: function onChange(value) {
          _this2.updateValues('neve_meta_content_width', value);
        },
        min: 0,
        max: 100,
        step: "1"
      })) : ''));
    }
  }, {
    key: "renderPageTitleGroup",
    value: function renderPageTitleGroup() {
      var _this3 = this;

      var template = wp.data.select('core/editor').getEditedPostAttribute('template');

      if ('elementor_header_footer' === template) {
        return false;
      }

      var showMetaElements = JSON.parse(this.state.neve_post_elements_order).includes('meta');
      var postType = wp.data.select('core/editor').getCurrentPostType();
      return wp.element.createElement("div", {
        className: "nv-option-category"
      }, wp.element.createElement(PanelBody, {
        title: __('Page Title', 'neve'),
        intialOpen: true
      }, wp.element.createElement(BaseControl, {
        label: __('Title alignment', 'neve'),
        id: "neve_meta_title_alignment",
        className: "neve-meta-control neve-meta-button-group neve_meta_title_alignment"
      }, wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {
        icon: _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__["alignLeftIcon"],
        className: "nv-align-left",
        isPrimary: 'left' === this.state['neve_meta_title_alignment'],
        isSecondary: 'left' !== this.state['neve_meta_title_alignment'],
        onClick: function onClick() {
          _this3.updateValues('neve_meta_title_alignment', 'left');
        }
      }), wp.element.createElement(Button, {
        icon: _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__["alignCenterIcon"],
        className: "nv-align-center",
        isPrimary: 'center' === this.state['neve_meta_title_alignment'],
        isSecondary: 'center' !== this.state['neve_meta_title_alignment'],
        onClick: function onClick() {
          _this3.updateValues('neve_meta_title_alignment', 'center');
        }
      }), wp.element.createElement(Button, {
        icon: _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__["alignRightIcon"],
        className: "nv-align-right",
        isPrimary: 'right' === this.state['neve_meta_title_alignment'],
        isSecondary: 'right' !== this.state['neve_meta_title_alignment'],
        onClick: function onClick() {
          _this3.updateValues('neve_meta_title_alignment', 'right');
        }
      }))), showMetaElements && 'post' === postType ? wp.element.createElement(BaseControl, {
        id: "neve_meta_author_avatar",
        className: "neve-meta-control neve-meta-checkbox neve_meta_author_avatar"
      }, wp.element.createElement(ToggleControl, {
        label: __('Author Avatar', 'neve'),
        checked: 'on' === this.state['neve_meta_author_avatar'],
        onChange: function onChange(value) {
          _this3.updateValues('neve_meta_author_avatar', value ? 'on' : 'off');
        }
      })) : '', metaSidebar.enable_pro && showMetaElements && 'post' === postType ? wp.element.createElement(BaseControl, {
        id: "neve_meta_reading_time",
        className: "neve-meta-control neve-meta-checkbox neve_meta_reading_time"
      }, wp.element.createElement(ToggleControl, {
        label: __('Reading Time', 'neve'),
        checked: 'on' === this.state['neve_meta_reading_time'],
        onChange: function onChange(value) {
          _this3.updateValues('neve_meta_reading_time', value ? 'on' : 'off');
        }
      })) : ''));
    }
  }, {
    key: "renderElementsGroup",
    value: function renderElementsGroup() {
      var _this4 = this;

      var settings = {
        elements: {
          'title': __('Post Title', 'neve'),
          'meta': __('Post Meta', 'neve'),
          'thumbnail': __('Featured Image', 'neve'),
          'content': __('Content', 'neve'),
          'tags': __('Tags', 'neve'),
          'comments': __('Comments', 'neve'),
          'post-navigation': __('Post Navigation', 'neve')
        },
        "default": metaSidebar.elementsDefaultOrder
      };

      if (metaSidebar.enable_pro) {
        settings.elements['author-biography'] = __('Author Biography', 'neve');
        settings.elements['related-posts'] = __('Related Posts', 'neve');
        settings.elements['sharing-icons'] = __('Sharing Icons', 'neve');
      }

      var template = wp.data.select('core/editor').getEditedPostAttribute('template');
      var postType = wp.data.select('core/editor').getCurrentPostType();
      return wp.element.createElement("div", {
        className: "nv-option-category"
      }, wp.element.createElement(PanelBody, {
        title: __('Elements', 'neve'),
        intialOpen: true
      }, 'elementor_header_footer' !== template && 'post' === postType ? wp.element.createElement(BaseControl, {
        id: "neve_post_elements_order",
        className: "neve-meta-control neve-meta-sortable"
      }, wp.element.createElement(_controls_SortableItems__WEBPACK_IMPORTED_MODULE_0__["default"], {
        stateUpdate: this.updateValues,
        id: "neve_post_elements_order",
        data: settings
      })) : '', wp.element.createElement(BaseControl, {
        id: "neve_meta_disable_header",
        className: "neve-meta-control neve-meta-checkbox neve_meta_disable_header"
      }, wp.element.createElement(ToggleControl, {
        label: __('Disable Header', 'neve'),
        checked: 'on' === this.props.metaValue('neve_meta_disable_header'),
        onChange: function onChange(value) {
          _this4.updateValues('neve_meta_disable_header', value ? 'on' : 'off');
        }
      })), wp.element.createElement(BaseControl, {
        id: "neve_meta_disable_footer",
        className: "neve-meta-control neve-meta-checkbox neve_meta_disable_footer"
      }, wp.element.createElement(ToggleControl, {
        label: __('Disable Footer', 'neve'),
        checked: 'on' === this.props.metaValue('neve_meta_disable_footer'),
        onChange: function onChange(value) {
          _this4.updateValues('neve_meta_disable_footer', value ? 'on' : 'off');
        }
      })), 'elementor_header_footer' !== template && 'page' === postType ? wp.element.createElement(BaseControl, {
        id: "neve_meta_disable_title",
        className: "neve-meta-control neve-meta-checkbox neve_meta_disable_title"
      }, wp.element.createElement(ToggleControl, {
        label: __('Disable Title', 'neve'),
        checked: 'on' === this.props.metaValue('neve_meta_disable_title'),
        onChange: function onChange(value) {
          _this4.updateValues('neve_meta_disable_title', value ? 'on' : 'off');
        }
      })) : ''));
    }
  }, {
    key: "renderResetButton",
    value: function renderResetButton() {
      var _this5 = this;

      return wp.element.createElement(BaseControl, {
        label: __('Reset all options to default', 'neve'),
        id: "neve_reset_all",
        className: "nv-reset-all components-panel__body is-opened"
      }, wp.element.createElement(Button, {
        icon: "image-rotate",
        className: "nv-reset-meta",
        onClick: function onClick() {
          _this5.resetAll();
        },
        label: __('Return to customizer settings', 'neve'),
        showTooltip: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement(React.Fragment, null, this.renderPageLayoutGroup(), this.renderPageTitleGroup(), this.renderElementsGroup(), this.renderResetButton());
    }
  }]);

  return MetaFieldsManager;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(id, value) {
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, id, value)
      });
    },
    setAllMetas: function setAllMetas(value) {
      dispatch('core/editor').editPost({
        meta: value
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: function metaValue(id) {
      return select('core/editor').getEditedPostAttribute('meta')[id];
    },
    allMeta: select('core/editor').getEditedPostAttribute('meta')
  };
})])(MetaFieldsManager));

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MetaFieldsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaFieldsManager */ "./src/components/MetaFieldsManager.js");
/* global metaSidebar */
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var __ = wp.i18n.__;

var useShortcut = wp.keyboardShortcuts.useShortcut;
var useCallback = wp.element.useCallback;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var Sidebar = compose(withDispatch(function (dispatch) {
  dispatch('core/keyboard-shortcuts').registerShortcut({
    name: 'neve/open-meta-sidebar',
    category: 'block',
    description: __('Open Neve meta sidebar', 'neve'),
    keyCombination: {
      modifier: 'access',
      character: 's'
    }
  });
}), withSelect(function (select) {
  return {
    template: select('core/editor').getEditedPostAttribute('template')
  };
}))(function (templateData) {
  useShortcut('neve/open-meta-sidebar', useCallback(function () {
    var currentActiveSidebar = wp.data.select('core/edit-post').getActiveGeneralSidebarName();

    if (currentActiveSidebar) {
      wp.data.dispatch('core/edit-post').closeGeneralSidebar(currentActiveSidebar);

      if ('meta-sidebar/neve-meta-sidebar' !== currentActiveSidebar) {
        wp.data.dispatch('core/edit-post').openGeneralSidebar('meta-sidebar/neve-meta-sidebar');
      }
    } else {
      wp.data.dispatch('core/edit-post').openGeneralSidebar('meta-sidebar/neve-meta-sidebar');
    }
  }, []));

  if ('elementor_canvas' === templateData.template) {
    document.getElementById('neve-page-settings-notice').style.display = 'none';
    return false;
  }

  document.getElementById('neve-page-settings-notice').style.display = 'block';

  var sidebarLabel = __('Neve Options', 'neve');

  if (metaSidebar.whiteLabeled) {
    sidebarLabel = metaSidebar.whiteLabelThemeName ? metaSidebar.whiteLabelThemeName + ' ' + __('Options', 'neve') : __('Options', 'neve');
  }

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(PluginSidebarMoreMenuItem, {
    target: "neve-meta-sidebar"
  }, sidebarLabel), wp.element.createElement(PluginSidebar, {
    name: "neve-meta-sidebar",
    title: sidebarLabel
  }, wp.element.createElement(_MetaFieldsManager__WEBPACK_IMPORTED_MODULE_0__["default"], null)));
});
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/controls/SortableItems.js":
/*!**************************************************!*\
  !*** ./src/components/controls/SortableItems.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var Component = wp.element.Component;
var Button = wp.components.Button;
var __ = wp.i18n.__;
var DragHandle = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["sortableHandle"])(function () {
  return wp.element.createElement("div", {
    className: "ti-sortable-handle"
  }, wp.element.createElement(Button, {
    isTertiary: true,
    icon: "menu"
  }));
});
var SortableItem = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["sortableElement"])(function (_ref) {
  var value = _ref.value,
      label = _ref.label,
      toggle = _ref.toggle;
  var icon = 'visibility';
  return wp.element.createElement("div", {
    className: "ti-sortable-item-area ti-sortable-item-area-".concat(value)
  }, wp.element.createElement("div", {
    key: value,
    className: "ti-sortable-item"
  }, wp.element.createElement(Button, {
    isTertiary: true,
    icon: icon,
    label: __('Toggle', 'neve'),
    showTooltip: true,
    className: "ti-sortable-item-toggle",
    onClick: function onClick() {
      toggle(value);
    }
  }), wp.element.createElement("div", {
    className: "ti-sortable-item-label"
  }, label), wp.element.createElement(DragHandle, null)));
});
var SortableList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["sortableContainer"])(function (_ref2) {
  var children = _ref2.children;
  return wp.element.createElement("div", {
    className: "neve-meta-control neve-meta-sortable-items"
  }, children);
});

var SortableItems = /*#__PURE__*/function (_Component) {
  _inherits(SortableItems, _Component);

  var _super = _createSuper(SortableItems);

  function SortableItems(props) {
    _classCallCheck(this, SortableItems);

    return _super.call(this, props);
  }

  _createClass(SortableItems, [{
    key: "render",
    value: function render() {
      var _this = this;

      var elements = this.props.data.elements;
      var currentValues = JSON.parse(this.props.metaFieldValue);
      return wp.element.createElement("div", null, wp.element.createElement(SortableList, {
        onSortEnd: this.props.onSortEnd,
        lockAxis: "y",
        useDragHandle: true,
        hideSortableGhost: false,
        onSortStart: this.props.onSortStart
      }, currentValues.map(function (value, index) {
        if (undefined === elements[value]) {
          return false;
        }

        return wp.element.createElement(SortableItem, {
          key: "item-".concat(value),
          index: index,
          value: value,
          label: elements[value],
          toggle: _this.props.toggle
        });
      })), wp.element.createElement("div", {
        className: "disabled-items neve-meta-control"
      }, Object.keys(elements).map(function (value, index) {
        if (currentValues.includes(value)) {
          return false;
        }

        return wp.element.createElement("div", {
          className: "ti-sortable-item-area",
          key: index
        }, wp.element.createElement("div", {
          className: "ti-sortable-item hidden"
        }, wp.element.createElement(Button, {
          isTertiary: true,
          icon: "hidden",
          label: __('Toggle', 'neve'),
          showTooltip: true,
          className: "ti-sortable-item-toggle",
          onClick: function onClick() {
            _this.props.toggle(value);
          }
        }), wp.element.createElement("div", {
          className: "ti-sortable-item-label"
        }, elements[value])));
      })));
    }
  }]);

  return SortableItems;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(function (dispatch, props, _ref3) {
  var select = _ref3.select;
  return {
    onSortStart: function onSortStart(_ref4) {
      var index = _ref4.index;
      document.querySelector('.ti-sortable-item-area:nth-of-type(' + (index + 1) + ')').style.color = '#ccc';
    },
    onSortEnd: function onSortEnd(_ref5) {
      var oldIndex = _ref5.oldIndex,
          newIndex = _ref5.newIndex;
      var metaValue = JSON.parse(select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data["default"]);
      var newElements = array_move__WEBPACK_IMPORTED_MODULE_1___default()(metaValue, oldIndex, newIndex);
      props.stateUpdate(props.id, JSON.stringify(newElements));
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, props.id, JSON.stringify(newElements))
      });
      document.querySelector('.ti-sortable-item-area:nth-of-type(' + (newIndex + 1) + ')').style.color = null;
    },
    toggle: function toggle(value) {
      var metaValue = JSON.parse(select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data["default"]);

      if (metaValue.includes(value)) {
        metaValue = metaValue.filter(function (e) {
          return e !== value;
        });
      } else {
        metaValue.push(value);
      }

      props.stateUpdate(props.id, JSON.stringify(metaValue));
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, props.id, JSON.stringify(metaValue))
      });
    }
  };
}), withSelect(function (select, props) {
  var metaValue = select('core/editor').getEditedPostAttribute('meta')[props.id];
  return {
    metaFieldValue: metaValue || props.data["default"]
  };
})])(SortableItems));

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers/icons.js":
/*!******************************!*\
  !*** ./src/helpers/icons.js ***!
  \******************************/
/*! exports provided: neveIcon, alignRightIcon, alignCenterIcon, alignLeftIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neveIcon", function() { return neveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignRightIcon", function() { return alignRightIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCenterIcon", function() { return alignCenterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignLeftIcon", function() { return alignLeftIcon; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    Path = _wp$components.Path,
    Rect = _wp$components.Rect,
    SVG = _wp$components.SVG;

var neveIcon = function neveIcon(_ref) {
  var className = _ref.className;
  return wp.element.createElement(SVG, {
    width: "17",
    height: "24",
    viewBox: "0 0 17 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['neve-icon', className])
  }, wp.element.createElement(Path, {
    d: "M4.77822 10.2133V19.3287H0.118347V0.802224C0.118347 0.712594 0.145598 0.649854 0.200099 0.614002C0.254601 0.578149 0.354519 0.622964 0.499857 0.748446L12.1359 10.2133V1.04422H16.7958V19.5976C16.7958 19.7051 16.7685 19.7724 16.714 19.7992C16.6595 19.8261 16.5596 19.7768 16.4143 19.6514L4.77822 10.2133Z"
  }), wp.element.createElement(Rect, {
    x: "0.118347",
    y: "22.3334",
    width: "16.6774",
    height: "1.51613"
  }));
};
var alignRightIcon = function alignRightIcon() {
  return wp.element.createElement(SVG, {
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: "M16.5 1.25H7.61111M16.5 9H0.5M16.5 16.75H7.61111",
    strokeWidth: "1.5"
  }));
};
var alignCenterIcon = function alignCenterIcon() {
  return wp.element.createElement(SVG, {
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: "M12.9444 1.25H4.05556M16.5 9H0.5M12.9444 16.75H4.05556",
    strokeWidth: "1.5"
  }));
};
var alignLeftIcon = function alignLeftIcon() {
  return wp.element.createElement(SVG, {
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: "M0.5 1.25H9.38889M0.5 9H16.5M0.5 16.75H9.38889",
    strokeWidth: "1.5"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/icons.js */ "./src/helpers/icons.js");
/* global metaSidebar */

/**
 * Internal dependencies
 */
var registerPlugin = wp.plugins.registerPlugin;
var Icon = wp.components.Icon;


var icon = metaSidebar.whiteLabeled ? 'hammer' : _helpers_icons_js__WEBPACK_IMPORTED_MODULE_1__["neveIcon"];
registerPlugin('meta-sidebar', {
  icon: wp.element.createElement(Icon, {
    icon: icon
  }),
  render: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/index.js ./src/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/editor.scss */"./src/editor.scss");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnJheS1tb3ZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNvcnRhYmxlLWhvYy9kaXN0L3JlYWN0LXNvcnRhYmxlLWhvYy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YUZpZWxkc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9Tb3J0YWJsZUl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Iuc2Nzcz9iOWNlIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiY29tcG9zZSIsIndwIiwiZGF0YSIsIndpdGhEaXNwYXRjaCIsIndpdGhTZWxlY3QiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIkJ1dHRvbiIsIkJhc2VDb250cm9sIiwiUmFkaW9Db250cm9sIiwiQnV0dG9uR3JvdXAiLCJUb2dnbGVDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiX18iLCJpMThuIiwiTWV0YUZpZWxkc01hbmFnZXIiLCJwcm9wcyIsIm1ldGFEYXRhIiwic2VsZWN0IiwiZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSIsIm9taXRFbXB0eSIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrIiwiZm9yRWFjaCIsImRlZmF1bHRTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJpbmNsdWRlcyIsInN0YXRlIiwidXBkYXRlVmFsdWVzIiwiYmluZCIsInVwZGF0ZUJsb2NrV2lkdGgiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwU2hvdCIsImlkIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNldE1ldGFWYWx1ZSIsImFsbE1ldGEiLCJlbXB0aWVkTWV0YSIsIm1hcCIsImNvbnRyb2wiLCJlbXB0eVZhbHVlIiwic2V0QWxsTWV0YXMiLCJpc0N1c3RvbUNvbnRlbnRXaWR0aCIsImNvbnRhaW5lclR5cGUiLCJtZXRhU2lkZWJhciIsImFjdGlvbnMiLCJjb250YWluZXIiLCJjb250ZW50V2lkdGgiLCJjb250ZW50V2lkdGhEZWZhdWx0IiwiY29udGVudCIsImJsb2NrV2lkdGhEZWZhdWx0IiwiYmxvY0tXaWR0aCIsIk1hdGgiLCJyb3VuZCIsImVkaXRvciIsImRvY3VtZW50IiwiY29udGFpbnMiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNzcyIsImhlYWQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInRlbXBsYXRlIiwibGFiZWwiLCJuZXZlX21ldGFfZW5hYmxlX2NvbnRlbnRfd2lkdGgiLCJzaG93TWV0YUVsZW1lbnRzIiwicGFyc2UiLCJuZXZlX3Bvc3RfZWxlbWVudHNfb3JkZXIiLCJwb3N0VHlwZSIsImdldEN1cnJlbnRQb3N0VHlwZSIsImFsaWduTGVmdEljb24iLCJhbGlnbkNlbnRlckljb24iLCJhbGlnblJpZ2h0SWNvbiIsImVuYWJsZV9wcm8iLCJzZXR0aW5ncyIsImVsZW1lbnRzIiwiZWxlbWVudHNEZWZhdWx0T3JkZXIiLCJtZXRhVmFsdWUiLCJyZXNldEFsbCIsInJlbmRlclBhZ2VMYXlvdXRHcm91cCIsInJlbmRlclBhZ2VUaXRsZUdyb3VwIiwicmVuZGVyRWxlbWVudHNHcm91cCIsInJlbmRlclJlc2V0QnV0dG9uIiwiZGlzcGF0Y2giLCJlZGl0UG9zdCIsIm1ldGEiLCJQbHVnaW5TaWRlYmFyIiwiUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSIsInVzZVNob3J0Y3V0Iiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJ1c2VDYWxsYmFjayIsIlNpZGViYXIiLCJyZWdpc3RlclNob3J0Y3V0IiwibmFtZSIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJrZXlDb21iaW5hdGlvbiIsIm1vZGlmaWVyIiwiY2hhcmFjdGVyIiwidGVtcGxhdGVEYXRhIiwiY3VycmVudEFjdGl2ZVNpZGViYXIiLCJnZXRBY3RpdmVHZW5lcmFsU2lkZWJhck5hbWUiLCJjbG9zZUdlbmVyYWxTaWRlYmFyIiwib3BlbkdlbmVyYWxTaWRlYmFyIiwiZGlzcGxheSIsInNpZGViYXJMYWJlbCIsIndoaXRlTGFiZWxlZCIsIndoaXRlTGFiZWxUaGVtZU5hbWUiLCJEcmFnSGFuZGxlIiwic29ydGFibGVIYW5kbGUiLCJTb3J0YWJsZUl0ZW0iLCJzb3J0YWJsZUVsZW1lbnQiLCJ0b2dnbGUiLCJpY29uIiwiU29ydGFibGVMaXN0Iiwic29ydGFibGVDb250YWluZXIiLCJjaGlsZHJlbiIsIlNvcnRhYmxlSXRlbXMiLCJjdXJyZW50VmFsdWVzIiwibWV0YUZpZWxkVmFsdWUiLCJvblNvcnRFbmQiLCJvblNvcnRTdGFydCIsImluZGV4IiwidW5kZWZpbmVkIiwicXVlcnlTZWxlY3RvciIsImNvbG9yIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm5ld0VsZW1lbnRzIiwiYXJyYXlNb3ZlIiwic3RhdGVVcGRhdGUiLCJlIiwicHVzaCIsIlBhdGgiLCJSZWN0IiwiU1ZHIiwibmV2ZUljb24iLCJjbGFzc05hbWUiLCJjbGFzc25hbWVzIiwicmVnaXN0ZXJQbHVnaW4iLCJwbHVnaW5zIiwiSWNvbiIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBMkU7QUFDNUQ7QUFDZixpQ0FBaUMsMkZBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBUzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVM7O0FBRVgsaUJBQWlCLHdGQUFjO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw2RkFBa0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1GQUFTOztBQUViO0FBQ0EsTUFBTSx5RkFBZTs7QUFFckIsYUFBYSxvR0FBMEIsT0FBTyx5RkFBZTtBQUM3RDs7QUFFQSxJQUFJLHNGQUFZO0FBQ2hCO0FBQ0E7QUFDQSxtQkFBbUIsOERBQVc7QUFDOUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxpREFBUyx1RUFBdUUsY0FBYztBQUN0RztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQWEsbUJBQW1CLGtGQUFRO0FBQ3ZEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUcsQ0FBQyxnREFBUyxHQUFHLHlGQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlGQUFlOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzRkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrREFBUztBQUNqQixpQkFBaUIsa0RBQVM7QUFDMUIscUJBQXFCLGtEQUFTO0FBQzlCLFlBQVksa0RBQVM7QUFDckIsZ0JBQWdCLGtEQUFTO0FBQ3pCLHVCQUF1QixrREFBUztBQUNoQyxlQUFlLGtEQUFTO0FBQ3hCLG1CQUFtQixrREFBUyxZQUFZLGtEQUFTLDRDQUE0QyxrREFBUyxPQUFPLGtEQUFTO0FBQ3RILHFCQUFxQixrREFBUztBQUM5QixxQ0FBcUMsa0RBQVM7QUFDOUMsWUFBWSxrREFBUztBQUNyQixjQUFjLGtEQUFTLFlBQVksa0RBQVMsU0FBUyxrREFBUyxTQUFTLGtEQUFTLFNBQVMsa0RBQVMsWUFBWSxrREFBUyxTQUFTLGtEQUFTO0FBQ3pJLHdCQUF3QixrREFBUztBQUNqQyxhQUFhLGtEQUFTO0FBQ3RCLGNBQWMsa0RBQVM7QUFDdkIsY0FBYyxrREFBUztBQUN2QixlQUFlLGtEQUFTO0FBQ3hCLGNBQWMsa0RBQVM7QUFDdkIsa0JBQWtCLGtEQUFTO0FBQzNCLFlBQVksa0RBQVM7QUFDckIsVUFBVSxrREFBUyxTQUFTLGtEQUFTO0FBQ3JDLFVBQVUsa0RBQVMsU0FBUyxrREFBUztBQUNyQyxZQUFZLGtEQUFTLFNBQVMsa0RBQVM7QUFDdkMsUUFBUSxrREFBUyxTQUFTLGtEQUFTO0FBQ25DLFVBQVUsa0RBQVMsU0FBUyxrREFBUztBQUNyQyxHQUFHO0FBQ0gscUJBQXFCLGtEQUFTO0FBQzlCLHNCQUFzQixrREFBUztBQUMvQix5QkFBeUIsa0RBQVM7QUFDbEMsaUJBQWlCLGtEQUFTO0FBQzFCLDhCQUE4QixrREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVM7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1GQUFTOztBQUViO0FBQ0E7O0FBRUEsTUFBTSx5RkFBZTs7QUFFckIsY0FBYyxvR0FBMEIsT0FBTyx5RkFBZTs7QUFFOUQsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQixxQkFBcUI7O0FBRXhGLE1BQU0seUZBQWUsQ0FBQyxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxNQUFNLHlGQUFlLENBQUMsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ25FOztBQUVBO0FBQ0EsT0FBTzs7QUFFUCxNQUFNLHlGQUFlLENBQUMsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHVGQUFhLEdBQUc7QUFDcEU7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkIsOEVBQThFO0FBQzlFO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxtRkFBbUY7QUFDbkYsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE1BQU0seUZBQWUsQ0FBQyxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTzs7QUFFUCxNQUFNLHlGQUFlLENBQUMsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVGQUFhLEdBQUc7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQLE1BQU0seUZBQWUsQ0FBQyxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDbkU7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTs7QUFFbEUsdUJBQXVCLHVGQUFhLEdBQUc7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUCxNQUFNLHlGQUFlLENBQUMsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVAsTUFBTSx5RkFBZSxDQUFDLGdHQUFzQixDQUFDLGdHQUFzQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLE1BQU0seUZBQWUsQ0FBQyxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxNQUFNLHlGQUFlLENBQUMsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzRkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXOztBQUVYO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHNDQUFzQyx3RkFBYztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7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TTVCLElBQUksR0FBR3pFLFdBQVcsQ0FBQ2tFLFlBQVosR0FBMkIsUUFBM0IsR0FBc0M4QiwwREFBbkQ7QUFFQUcsY0FBYyxDQUFFLGNBQUYsRUFBa0I7QUFDL0IxQixNQUFJLEVBQUUseUJBQUMsSUFBRDtBQUFNLFFBQUksRUFBR0E7QUFBYixJQUR5QjtBQUUvQjZCLFFBQU0sRUFBRW5ELDJEQUFPQTtBQUZnQixDQUFsQixDQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6Ii4vYnVpbGQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBPYmplY3QoYXJndW1lbnRzW2ldKSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5TW92ZU11dGF0ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcblx0Y29uc3Qgc3RhcnRJbmRleCA9IHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG87XG5cdGNvbnN0IGl0ZW0gPSBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF07XG5cdGFycmF5LnNwbGljZShzdGFydEluZGV4LCAwLCBpdGVtKTtcbn07XG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcblx0YXJyYXkgPSBhcnJheS5zbGljZSgpO1xuXHRhcnJheU1vdmVNdXRhdGUoYXJyYXksIGZyb20sIHRvKTtcblx0cmV0dXJuIGFycmF5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1vdmU7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBmb3IgdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGFycmF5TW92ZTtcblxubW9kdWxlLmV4cG9ydHMubXV0YXRlID0gYXJyYXlNb3ZlTXV0YXRlO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFuYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuYWdlcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWZzXCIsIHt9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGNvbGxlY3Rpb24sIHJlZikge1xuICAgICAgaWYgKCF0aGlzLnJlZnNbY29sbGVjdGlvbl0pIHtcbiAgICAgICAgdGhpcy5yZWZzW2NvbGxlY3Rpb25dID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVmc1tjb2xsZWN0aW9uXS5wdXNoKHJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoY29sbGVjdGlvbiwgcmVmKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KGNvbGxlY3Rpb24sIHJlZik7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5yZWZzW2NvbGxlY3Rpb25dLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBY3RpdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMucmVmc1t0aGlzLmFjdGl2ZS5jb2xsZWN0aW9uXS5maW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBub2RlID0gX3JlZi5ub2RlO1xuICAgICAgICByZXR1cm4gbm9kZS5zb3J0YWJsZUluZm8uaW5kZXggPT0gX3RoaXMuYWN0aXZlLmluZGV4O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV4KGNvbGxlY3Rpb24sIHJlZikge1xuICAgICAgcmV0dXJuIHRoaXMucmVmc1tjb2xsZWN0aW9uXS5pbmRleE9mKHJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE9yZGVyZWRSZWZzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9yZGVyZWRSZWZzKCkge1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuYWN0aXZlLmNvbGxlY3Rpb247XG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbGxlY3Rpb25dLnNvcnQoc29ydEJ5SW5kZXgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYW5hZ2VyO1xufSgpO1xuXG5mdW5jdGlvbiBzb3J0QnlJbmRleChfcmVmMiwgX3JlZjMpIHtcbiAgdmFyIGluZGV4MSA9IF9yZWYyLm5vZGUuc29ydGFibGVJbmZvLmluZGV4O1xuICB2YXIgaW5kZXgyID0gX3JlZjMubm9kZS5zb3J0YWJsZUluZm8uaW5kZXg7XG4gIHJldHVybiBpbmRleDEgLSBpbmRleDI7XG59XG5cbmZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbSwgdG8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJEZXByZWNhdGlvbiB3YXJuaW5nOiBhcnJheU1vdmUgd2lsbCBubyBsb25nZXIgYmUgZXhwb3J0ZWQgYnkgJ3JlYWN0LXNvcnRhYmxlLWhvYycgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIGluc3RhbGwgdGhlIGBhcnJheS1tb3ZlYCBwYWNrYWdlIGxvY2FsbHkgaW5zdGVhZC4gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXJyYXktbW92ZVwiKTtcbiAgICB9XG4gIH1cblxuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBvbWl0KG9iaiwga2V5c1RvT21pdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgaWYgKGtleXNUb09taXQuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG52YXIgZXZlbnRzID0ge1xuICBlbmQ6IFsndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAnbW91c2V1cCddLFxuICBtb3ZlOiBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXSxcbiAgc3RhcnQ6IFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nXVxufTtcbnZhciB2ZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJycpIHx8IFsnLW1vei1oaWRkZW4taWZyYW1lJ107XG4gIHZhciBwcmUgPSAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc3R5bGVzKS5qb2luKCcnKS5tYXRjaCgvLShtb3p8d2Via2l0fG1zKS0vKSB8fCBzdHlsZXMuT0xpbmsgPT09ICcnICYmIFsnJywgJ28nXSlbMV07XG5cbiAgc3dpdGNoIChwcmUpIHtcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gJ21zJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJlICYmIHByZS5sZW5ndGggPyBwcmVbMF0udG9VcHBlckNhc2UoKSArIHByZS5zdWJzdHIoMSkgOiAnJztcbiAgfVxufSgpO1xuZnVuY3Rpb24gc2V0SW5saW5lU3R5bGVzKG5vZGUsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5vZGUuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkKG5vZGUsIHRyYW5zbGF0ZSkge1xuICBub2RlLnN0eWxlW1wiXCIuY29uY2F0KHZlbmRvclByZWZpeCwgXCJUcmFuc2Zvcm1cIildID0gdHJhbnNsYXRlID09IG51bGwgPyAnJyA6IFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHRyYW5zbGF0ZS54LCBcInB4LFwiKS5jb25jYXQodHJhbnNsYXRlLnksIFwicHgsMClcIik7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24obm9kZSwgZHVyYXRpb24pIHtcbiAgbm9kZS5zdHlsZVtcIlwiLmNvbmNhdCh2ZW5kb3JQcmVmaXgsIFwiVHJhbnNpdGlvbkR1cmF0aW9uXCIpXSA9IGR1cmF0aW9uID09IG51bGwgPyAnJyA6IFwiXCIuY29uY2F0KGR1cmF0aW9uLCBcIm1zXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VzdChlbCwgZm4pIHtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKGZuKGVsKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gbGltaXQobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGl4ZWxWYWx1ZShzdHJpbmdWYWx1ZSkge1xuICBpZiAoc3RyaW5nVmFsdWUuc3Vic3RyKC0yKSA9PT0gJ3B4Jykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50TWFyZ2luKGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiB7XG4gICAgYm90dG9tOiBnZXRQaXhlbFZhbHVlKHN0eWxlLm1hcmdpbkJvdHRvbSksXG4gICAgbGVmdDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5tYXJnaW5MZWZ0KSxcbiAgICByaWdodDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5tYXJnaW5SaWdodCksXG4gICAgdG9wOiBnZXRQaXhlbFZhbHVlKHN0eWxlLm1hcmdpblRvcClcbiAgfTtcbn1cbmZ1bmN0aW9uIHByb3ZpZGVEaXNwbGF5TmFtZShwcmVmaXgsIENvbXBvbmVudCQkMSkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQkJDEubmFtZTtcbiAgcmV0dXJuIGNvbXBvbmVudE5hbWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiKFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIpXCIpIDogcHJlZml4O1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsQWRqdXN0ZWRCb3VuZGluZ0NsaWVudFJlY3Qobm9kZSwgc2Nyb2xsRGVsdGEpIHtcbiAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgc2Nyb2xsRGVsdGEudG9wLFxuICAgIGxlZnQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgc2Nyb2xsRGVsdGEubGVmdFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgICB9O1xuICB9IGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCB8fCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7XG59XG5mdW5jdGlvbiBnZXRFZGdlT2Zmc2V0KG5vZGUsIHBhcmVudCkge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDBcbiAgfTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIG5vZGVPZmZzZXQgPSB7XG4gICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBub2RlLm9mZnNldExlZnQsXG4gICAgdG9wOiBvZmZzZXQudG9wICsgbm9kZS5vZmZzZXRUb3BcbiAgfTtcblxuICBpZiAobm9kZS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcbiAgICByZXR1cm4gbm9kZU9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBnZXRFZGdlT2Zmc2V0KG5vZGUucGFyZW50Tm9kZSwgcGFyZW50LCBub2RlT2Zmc2V0KTtcbn1cbmZ1bmN0aW9uIGdldFRhcmdldEluZGV4KG5ld0luZGV4LCBwcmV2SW5kZXgsIG9sZEluZGV4KSB7XG4gIGlmIChuZXdJbmRleCA8IG9sZEluZGV4ICYmIG5ld0luZGV4ID4gcHJldkluZGV4KSB7XG4gICAgcmV0dXJuIG5ld0luZGV4IC0gMTtcbiAgfSBlbHNlIGlmIChuZXdJbmRleCA+IG9sZEluZGV4ICYmIG5ld0luZGV4IDwgcHJldkluZGV4KSB7XG4gICAgcmV0dXJuIG5ld0luZGV4ICsgMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3SW5kZXg7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldExvY2tQaXhlbE9mZnNldChfcmVmKSB7XG4gIHZhciBsb2NrT2Zmc2V0ID0gX3JlZi5sb2NrT2Zmc2V0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG4gIHZhciBvZmZzZXRYID0gbG9ja09mZnNldDtcbiAgdmFyIG9mZnNldFkgPSBsb2NrT2Zmc2V0O1xuICB2YXIgdW5pdCA9ICdweCc7XG5cbiAgaWYgKHR5cGVvZiBsb2NrT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtYXRjaCA9IC9eWystXT9cXGQqKD86XFwuXFxkKik/KHB4fCUpJC8uZXhlYyhsb2NrT2Zmc2V0KTtcbiAgICBpbnZhcmlhbnQobWF0Y2ggIT09IG51bGwsICdsb2NrT2Zmc2V0IHZhbHVlIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBvZiBhICcgKyAnbnVtYmVyIGZvbGxvd2VkIGJ5IFwicHhcIiBvciBcIiVcIi4gR2l2ZW4gJXMnLCBsb2NrT2Zmc2V0KTtcbiAgICBvZmZzZXRYID0gcGFyc2VGbG9hdChsb2NrT2Zmc2V0KTtcbiAgICBvZmZzZXRZID0gcGFyc2VGbG9hdChsb2NrT2Zmc2V0KTtcbiAgICB1bml0ID0gbWF0Y2hbMV07XG4gIH1cblxuICBpbnZhcmlhbnQoaXNGaW5pdGUob2Zmc2V0WCkgJiYgaXNGaW5pdGUob2Zmc2V0WSksICdsb2NrT2Zmc2V0IHZhbHVlIHNob3VsZCBiZSBhIGZpbml0ZS4gR2l2ZW4gJXMnLCBsb2NrT2Zmc2V0KTtcblxuICBpZiAodW5pdCA9PT0gJyUnKSB7XG4gICAgb2Zmc2V0WCA9IG9mZnNldFggKiB3aWR0aCAvIDEwMDtcbiAgICBvZmZzZXRZID0gb2Zmc2V0WSAqIGhlaWdodCAvIDEwMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogb2Zmc2V0WCxcbiAgICB5OiBvZmZzZXRZXG4gIH07XG59XG5mdW5jdGlvbiBnZXRMb2NrUGl4ZWxPZmZzZXRzKF9yZWYyKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgbG9ja09mZnNldCA9IF9yZWYyLmxvY2tPZmZzZXQ7XG4gIHZhciBvZmZzZXRzID0gQXJyYXkuaXNBcnJheShsb2NrT2Zmc2V0KSA/IGxvY2tPZmZzZXQgOiBbbG9ja09mZnNldCwgbG9ja09mZnNldF07XG4gIGludmFyaWFudChvZmZzZXRzLmxlbmd0aCA9PT0gMiwgJ2xvY2tPZmZzZXQgcHJvcCBvZiBTb3J0YWJsZUNvbnRhaW5lciBzaG91bGQgYmUgYSBzaW5nbGUgJyArICd2YWx1ZSBvciBhbiBhcnJheSBvZiBleGFjdGx5IHR3byB2YWx1ZXMuIEdpdmVuICVzJywgbG9ja09mZnNldCk7XG5cbiAgdmFyIF9vZmZzZXRzID0gX3NsaWNlZFRvQXJyYXkob2Zmc2V0cywgMiksXG4gICAgICBtaW5Mb2NrT2Zmc2V0ID0gX29mZnNldHNbMF0sXG4gICAgICBtYXhMb2NrT2Zmc2V0ID0gX29mZnNldHNbMV07XG5cbiAgcmV0dXJuIFtnZXRMb2NrUGl4ZWxPZmZzZXQoe1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGxvY2tPZmZzZXQ6IG1pbkxvY2tPZmZzZXQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0pLCBnZXRMb2NrUGl4ZWxPZmZzZXQoe1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGxvY2tPZmZzZXQ6IG1heExvY2tPZmZzZXQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0pXTtcbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgdmFyIHByb3BlcnRpZXMgPSBbJ292ZXJmbG93JywgJ292ZXJmbG93WCcsICdvdmVyZmxvd1knXTtcbiAgcmV0dXJuIHByb3BlcnRpZXMuZmluZChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dSZWdleC50ZXN0KGNvbXB1dGVkU3R5bGVbcHJvcGVydHldKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGluZ1BhcmVudChlbCkge1xuICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKGlzU2Nyb2xsYWJsZShlbCkpIHtcbiAgICByZXR1cm4gZWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbGluZ1BhcmVudChlbC5wYXJlbnROb2RlKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyR3JpZEdhcChlbGVtZW50KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnZ3JpZCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5ncmlkQ29sdW1uR2FwKSxcbiAgICAgIHk6IGdldFBpeGVsVmFsdWUoc3R5bGUuZ3JpZFJvd0dhcClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cbnZhciBLRVlDT0RFID0ge1xuICBUQUI6IDksXG4gIEVTQzogMjcsXG4gIFNQQUNFOiAzMixcbiAgTEVGVDogMzcsXG4gIFVQOiAzOCxcbiAgUklHSFQ6IDM5LFxuICBET1dOOiA0MFxufTtcbnZhciBOb2RlVHlwZSA9IHtcbiAgQW5jaG9yOiAnQScsXG4gIEJ1dHRvbjogJ0JVVFRPTicsXG4gIENhbnZhczogJ0NBTlZBUycsXG4gIElucHV0OiAnSU5QVVQnLFxuICBPcHRpb246ICdPUFRJT04nLFxuICBUZXh0YXJlYTogJ1RFWFRBUkVBJyxcbiAgU2VsZWN0OiAnU0VMRUNUJ1xufTtcbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgY2FudmFzLCBbY29udGVudGVkaXRhYmxlXSc7XG4gIHZhciBmaWVsZHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB2YXIgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIHZhciBjbG9uZWRGaWVsZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoY2xvbmVkTm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgY2xvbmVkRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkLCBpKSB7XG4gICAgaWYgKGZpZWxkLnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgZmllbGQudmFsdWUgPSBmaWVsZHNbaV0udmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycgJiYgZmllbGQubmFtZSkge1xuICAgICAgZmllbGQubmFtZSA9IFwiX19zb3J0YWJsZUNsb25lX19cIi5jb25jYXQoZmllbGQubmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnRhZ05hbWUgPT09IE5vZGVUeXBlLkNhbnZhcyAmJiBmaWVsZHNbaV0ud2lkdGggPiAwICYmIGZpZWxkc1tpXS5oZWlnaHQgPiAwKSB7XG4gICAgICB2YXIgZGVzdEN0eCA9IGZpZWxkLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBkZXN0Q3R4LmRyYXdJbWFnZShmaWVsZHNbaV0sIDAsIDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjbG9uZWROb2RlO1xufVxuXG5mdW5jdGlvbiBzb3J0YWJsZUhhbmRsZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVIYW5kbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2l0aFNvcnRhYmxlSGFuZGxlKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpdGhTb3J0YWJsZUhhbmRsZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2l0aFNvcnRhYmxlSGFuZGxlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2l0aFNvcnRhYmxlSGFuZGxlLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIG5vZGUuc29ydGFibGVIYW5kbGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRXcmFwcGVkSW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgIGludmFyaWFudChjb25maWcud2l0aFJlZiwgJ1RvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgeW91IG5lZWQgdG8gcGFzcyBpbiB7d2l0aFJlZjogdHJ1ZX0gYXMgdGhlIHNlY29uZCBhcmd1bWVudCBvZiB0aGUgU29ydGFibGVIYW5kbGUoKSBjYWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWYgPSBjb25maWcud2l0aFJlZiA/ICd3cmFwcGVkSW5zdGFuY2UnIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0sIHRoaXMucHJvcHMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV2l0aFNvcnRhYmxlSGFuZGxlO1xuICB9KENvbXBvbmVudCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwiZGlzcGxheU5hbWVcIiwgcHJvdmlkZURpc3BsYXlOYW1lKCdzb3J0YWJsZUhhbmRsZScsIFdyYXBwZWRDb21wb25lbnQpKSwgX3RlbXA7XG59XG5mdW5jdGlvbiBpc1NvcnRhYmxlSGFuZGxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc29ydGFibGVIYW5kbGUgIT0gbnVsbDtcbn1cblxudmFyIEF1dG9TY3JvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXV0b1Njcm9sbGVyKGNvbnRhaW5lciwgb25TY3JvbGxDYWxsYmFjaykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvU2Nyb2xsZXIpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5vblNjcm9sbENhbGxiYWNrID0gb25TY3JvbGxDYWxsYmFjaztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBdXRvU2Nyb2xsZXIsIFt7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJhbnNsYXRlID0gX3JlZi50cmFuc2xhdGUsXG4gICAgICAgICAgbWluVHJhbnNsYXRlID0gX3JlZi5taW5UcmFuc2xhdGUsXG4gICAgICAgICAgbWF4VHJhbnNsYXRlID0gX3JlZi5tYXhUcmFuc2xhdGUsXG4gICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICAgIHZhciBzcGVlZCA9IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeTogMVxuICAgICAgfTtcbiAgICAgIHZhciBhY2NlbGVyYXRpb24gPSB7XG4gICAgICAgIHg6IDEwLFxuICAgICAgICB5OiAxMFxuICAgICAgfTtcbiAgICAgIHZhciBfdGhpcyRjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gX3RoaXMkY29udGFpbmVyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90aGlzJGNvbnRhaW5lci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2xpZW50V2lkdGggPSBfdGhpcyRjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgaXNUb3AgPSBzY3JvbGxUb3AgPT09IDA7XG4gICAgICB2YXIgaXNCb3R0b20gPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBjbGllbnRIZWlnaHQgPT09IDA7XG4gICAgICB2YXIgaXNMZWZ0ID0gc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICAgIHZhciBpc1JpZ2h0ID0gc2Nyb2xsV2lkdGggLSBzY3JvbGxMZWZ0IC0gY2xpZW50V2lkdGggPT09IDA7XG5cbiAgICAgIGlmICh0cmFuc2xhdGUueSA+PSBtYXhUcmFuc2xhdGUueSAtIGhlaWdodCAvIDIgJiYgIWlzQm90dG9tKSB7XG4gICAgICAgIGRpcmVjdGlvbi55ID0gMTtcbiAgICAgICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbi55ICogTWF0aC5hYnMoKG1heFRyYW5zbGF0ZS55IC0gaGVpZ2h0IC8gMiAtIHRyYW5zbGF0ZS55KSAvIGhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZS54ID49IG1heFRyYW5zbGF0ZS54IC0gd2lkdGggLyAyICYmICFpc1JpZ2h0KSB7XG4gICAgICAgIGRpcmVjdGlvbi54ID0gMTtcbiAgICAgICAgc3BlZWQueCA9IGFjY2VsZXJhdGlvbi54ICogTWF0aC5hYnMoKG1heFRyYW5zbGF0ZS54IC0gd2lkdGggLyAyIC0gdHJhbnNsYXRlLngpIC8gd2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUueSA8PSBtaW5UcmFuc2xhdGUueSArIGhlaWdodCAvIDIgJiYgIWlzVG9wKSB7XG4gICAgICAgIGRpcmVjdGlvbi55ID0gLTE7XG4gICAgICAgIHNwZWVkLnkgPSBhY2NlbGVyYXRpb24ueSAqIE1hdGguYWJzKCh0cmFuc2xhdGUueSAtIGhlaWdodCAvIDIgLSBtaW5UcmFuc2xhdGUueSkgLyBoZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUueCA8PSBtaW5UcmFuc2xhdGUueCArIHdpZHRoIC8gMiAmJiAhaXNMZWZ0KSB7XG4gICAgICAgIGRpcmVjdGlvbi54ID0gLTE7XG4gICAgICAgIHNwZWVkLnggPSBhY2NlbGVyYXRpb24ueCAqIE1hdGguYWJzKCh0cmFuc2xhdGUueCAtIHdpZHRoIC8gMiAtIG1pblRyYW5zbGF0ZS54KSAvIHdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmlzQXV0b1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uLnggIT09IDAgfHwgZGlyZWN0aW9uLnkgIT09IDApIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5pc0F1dG9TY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICAgICAgICBsZWZ0OiBzcGVlZC54ICogZGlyZWN0aW9uLngsXG4gICAgICAgICAgICB0b3A6IHNwZWVkLnkgKiBkaXJlY3Rpb24ueVxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMuY29udGFpbmVyLnNjcm9sbFRvcCArPSBvZmZzZXQudG9wO1xuICAgICAgICAgIF90aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IG9mZnNldC5sZWZ0O1xuXG4gICAgICAgICAgX3RoaXMub25TY3JvbGxDYWxsYmFjayhvZmZzZXQpO1xuICAgICAgICB9LCA1KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXV0b1Njcm9sbGVyO1xufSgpO1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SGVscGVyRGltZW5zaW9ucyhfcmVmKSB7XG4gIHZhciBub2RlID0gX3JlZi5ub2RlO1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHQsXG4gICAgd2lkdGg6IG5vZGUub2Zmc2V0V2lkdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZENhbmNlbFN0YXJ0KGV2ZW50KSB7XG4gIHZhciBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gW05vZGVUeXBlLklucHV0LCBOb2RlVHlwZS5UZXh0YXJlYSwgTm9kZVR5cGUuU2VsZWN0LCBOb2RlVHlwZS5PcHRpb24sIE5vZGVUeXBlLkJ1dHRvbl07XG5cbiAgaWYgKGludGVyYWN0aXZlRWxlbWVudHMuaW5kZXhPZihldmVudC50YXJnZXQudGFnTmFtZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbiAgfSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgYXhpczogUHJvcFR5cGVzLm9uZU9mKFsneCcsICd5JywgJ3h5J10pLFxuICBjb250ZW50V2luZG93OiBQcm9wVHlwZXMuYW55LFxuICBkaXNhYmxlQXV0b3Njcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRIZWxwZXJEaW1lbnNpb25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVscGVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlbHBlckNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBQcm9wVHlwZXMuYW55IDogUHJvcFR5cGVzLmluc3RhbmNlT2YoSFRNTEVsZW1lbnQpXSksXG4gIGhpZGVTb3J0YWJsZUdob3N0OiBQcm9wVHlwZXMuYm9vbCxcbiAga2V5Ym9hcmRTb3J0aW5nVHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2NrQXhpczogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9ja09mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKV0pLFxuICBsb2NrVG9Db250YWluZXJFZGdlczogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU29ydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnRPdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0U3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBwcmVzc0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwcmVzc1RocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlcixcbiAga2V5Q29kZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGlmdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgZHJvcDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICB1cDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgZG93bjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgfSksXG4gIHNob3VsZENhbmNlbFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB1cGRhdGVCZWZvcmVTb3J0U3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICB1c2VEcmFnSGFuZGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlV2luZG93QXNTY3JvbGxDb250YWluZXI6IFByb3BUeXBlcy5ib29sXG59O1xudmFyIGRlZmF1bHRLZXlDb2RlcyA9IHtcbiAgbGlmdDogW0tFWUNPREUuU1BBQ0VdLFxuICBkcm9wOiBbS0VZQ09ERS5TUEFDRV0sXG4gIGNhbmNlbDogW0tFWUNPREUuRVNDXSxcbiAgdXA6IFtLRVlDT0RFLlVQLCBLRVlDT0RFLkxFRlRdLFxuICBkb3duOiBbS0VZQ09ERS5ET1dOLCBLRVlDT0RFLlJJR0hUXVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGF4aXM6ICd5JyxcbiAgZGlzYWJsZUF1dG9zY3JvbGw6IGZhbHNlLFxuICBkaXN0YW5jZTogMCxcbiAgZ2V0SGVscGVyRGltZW5zaW9uczogZGVmYXVsdEdldEhlbHBlckRpbWVuc2lvbnMsXG4gIGhpZGVTb3J0YWJsZUdob3N0OiB0cnVlLFxuICBsb2NrT2Zmc2V0OiAnNTAlJyxcbiAgbG9ja1RvQ29udGFpbmVyRWRnZXM6IGZhbHNlLFxuICBwcmVzc0RlbGF5OiAwLFxuICBwcmVzc1RocmVzaG9sZDogNSxcbiAga2V5Q29kZXM6IGRlZmF1bHRLZXlDb2RlcyxcbiAgc2hvdWxkQ2FuY2VsU3RhcnQ6IGRlZmF1bHRTaG91bGRDYW5jZWxTdGFydCxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDAsXG4gIHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyOiBmYWxzZVxufTtcbnZhciBvbWl0dGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMpO1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhwcm9wcykge1xuICBpbnZhcmlhbnQoIShwcm9wcy5kaXN0YW5jZSAmJiBwcm9wcy5wcmVzc0RlbGF5KSwgJ0F0dGVtcHRlZCB0byBzZXQgYm90aCBgcHJlc3NEZWxheWAgYW5kIGBkaXN0YW5jZWAgb24gU29ydGFibGVDb250YWluZXIsIHlvdSBtYXkgb25seSB1c2Ugb25lIG9yIHRoZSBvdGhlciwgbm90IGJvdGggYXQgdGhlIHNhbWUgdGltZS4nKTtcbn1cblxuZnVuY3Rpb24gX2ZpbmFsbHlSZXRocm93cyhib2R5LCBmaW5hbGl6ZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gYm9keSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZpbmFsaXplcih0cnVlLCBlKTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG4gIH1cblxuICByZXR1cm4gZmluYWxpemVyKGZhbHNlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzb3J0YWJsZUNvbnRhaW5lcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVDb250YWluZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2l0aFNvcnRhYmxlQ29udGFpbmVyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaXRoU29ydGFibGVDb250YWluZXIpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihXaXRoU29ydGFibGVDb250YWluZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHt9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZVN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gX3RoaXMkcHJvcHMuZGlzdGFuY2UsXG4gICAgICAgICAgICBzaG91bGRDYW5jZWxTdGFydCA9IF90aGlzJHByb3BzLnNob3VsZENhbmNlbFN0YXJ0O1xuXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIgfHwgc2hvdWxkQ2FuY2VsU3RhcnQoZXZlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uID0gZ2V0UG9zaXRpb24oZXZlbnQpO1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuc29ydGFibGVJbmZvICYmIF90aGlzLm5vZGVJc0NoaWxkKG5vZGUpICYmICFfdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgdmFyIHVzZURyYWdIYW5kbGUgPSBfdGhpcy5wcm9wcy51c2VEcmFnSGFuZGxlO1xuICAgICAgICAgIHZhciBfbm9kZSRzb3J0YWJsZUluZm8gPSBub2RlLnNvcnRhYmxlSW5mbyxcbiAgICAgICAgICAgICAgaW5kZXggPSBfbm9kZSRzb3J0YWJsZUluZm8uaW5kZXgsXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBfbm9kZSRzb3J0YWJsZUluZm8uY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfbm9kZSRzb3J0YWJsZUluZm8uZGlzYWJsZWQ7XG5cbiAgICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXNlRHJhZ0hhbmRsZSAmJiAhY2xvc2VzdChldmVudC50YXJnZXQsIGlzU29ydGFibGVIYW5kbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMubWFuYWdlci5hY3RpdmUgPSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghaXNUb3VjaEV2ZW50KGV2ZW50KSAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gTm9kZVR5cGUuQW5jaG9yKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5wcmVzc0RlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgIF90aGlzLmhhbmRsZVByZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLnByZXNzVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlUHJlc3MoZXZlbnQpO1xuICAgICAgICAgICAgICB9LCBfdGhpcy5wcm9wcy5wcmVzc0RlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwibm9kZUlzQ2hpbGRcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuc29ydGFibGVJbmZvLm1hbmFnZXIgPT09IF90aGlzLm1hbmFnZXI7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZU1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gX3RoaXMkcHJvcHMyLmRpc3RhbmNlLFxuICAgICAgICAgICAgcHJlc3NUaHJlc2hvbGQgPSBfdGhpcyRwcm9wczIucHJlc3NUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5zb3J0aW5nICYmIF90aGlzLnRvdWNoZWQgJiYgIV90aGlzLl9hd2FpdGluZ1VwZGF0ZUJlZm9yZVNvcnRTdGFydCkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKGV2ZW50KTtcbiAgICAgICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgICAgICB4OiBfdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IF90aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55XG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgY29tYmluZWREZWx0YSA9IE1hdGguYWJzKGRlbHRhLngpICsgTWF0aC5hYnMoZGVsdGEueSk7XG4gICAgICAgICAgX3RoaXMuZGVsdGEgPSBkZWx0YTtcblxuICAgICAgICAgIGlmICghZGlzdGFuY2UgJiYgKCFwcmVzc1RocmVzaG9sZCB8fCBjb21iaW5lZERlbHRhID49IHByZXNzVGhyZXNob2xkKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNhbmNlbFRpbWVyKTtcbiAgICAgICAgICAgIF90aGlzLmNhbmNlbFRpbWVyID0gc2V0VGltZW91dChfdGhpcy5jYW5jZWwsIDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgJiYgY29tYmluZWREZWx0YSA+PSBkaXN0YW5jZSAmJiBfdGhpcy5tYW5hZ2VyLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVByZXNzKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlRW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIF90aGlzLmNhbmNlbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJjYW5jZWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBfdGhpcy5wcm9wcy5kaXN0YW5jZTtcbiAgICAgICAgdmFyIHNvcnRpbmcgPSBfdGhpcy5zdGF0ZS5zb3J0aW5nO1xuXG4gICAgICAgIGlmICghc29ydGluZykge1xuICAgICAgICAgIGlmICghZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wcmVzc1RpbWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5tYW5hZ2VyLmFjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlUHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGFjdGl2ZSA9IF90aGlzLm1hbmFnZXIuZ2V0QWN0aXZlKCk7XG5cbiAgICAgICAgICB2YXIgX3RlbXA2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICB2YXIgX3RlbXA3ID0gZnVuY3Rpb24gX3RlbXA3KCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF9ub2RlLnNvcnRhYmxlSW5mby5pbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luID0gZ2V0RWxlbWVudE1hcmdpbihfbm9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGdyaWRHYXAgPSBnZXRDb250YWluZXJHcmlkR2FwKF90aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQm91bmRpbmdSZWN0ID0gX3RoaXMuc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBfZ2V0SGVscGVyRGltZW5zaW9ucyh7XG4gICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBub2RlOiBfbm9kZSxcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IF9jb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5ub2RlID0gX25vZGU7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRHYXAgPSBncmlkR2FwO1xuICAgICAgICAgICAgICAgIF90aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXJnaW5PZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgICB4OiBfdGhpcy5tYXJnaW4ubGVmdCArIF90aGlzLm1hcmdpbi5yaWdodCArIF90aGlzLmdyaWRHYXAueCxcbiAgICAgICAgICAgICAgICAgIHk6IE1hdGgubWF4KF90aGlzLm1hcmdpbi50b3AsIF90aGlzLm1hcmdpbi5ib3R0b20sIF90aGlzLmdyaWRHYXAueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IF9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRhaW5lckJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lckJvdW5kaW5nUmVjdDtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIF90aGlzLm5ld0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXhpcyA9IHtcbiAgICAgICAgICAgICAgICAgIHg6IF9heGlzLmluZGV4T2YoJ3gnKSA+PSAwLFxuICAgICAgICAgICAgICAgICAgeTogX2F4aXMuaW5kZXhPZigneScpID49IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLm9mZnNldEVkZ2UgPSBnZXRFZGdlT2Zmc2V0KF9ub2RlLCBfdGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0tleVNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRpYWxPZmZzZXQgPSBnZXRQb3NpdGlvbihfb2JqZWN0U3ByZWFkKHt9LCBldmVudCwge1xuICAgICAgICAgICAgICAgICAgICBwYWdlWDogX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZOiBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wXG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRpYWxPZmZzZXQgPSBnZXRQb3NpdGlvbihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdGlhbFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IF90aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgdG9wOiBfdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmhlbHBlciA9IF90aGlzLmhlbHBlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZU5vZGUoX25vZGUpKTtcbiAgICAgICAgICAgICAgICBzZXRJbmxpbmVTdHlsZXMoX3RoaXMuaGVscGVyLCB7XG4gICAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJcIi5jb25jYXQoX3RoaXMuaGVpZ2h0LCBcInB4XCIpLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCJcIi5jb25jYXQoX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgLSBtYXJnaW4ubGVmdCwgXCJweFwiKSxcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIlwiLmNvbmNhdChfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wIC0gbWFyZ2luLnRvcCwgXCJweFwiKSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdChfdGhpcy53aWR0aCwgXCJweFwiKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0tleVNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmhlbHBlci5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfaGlkZVNvcnRhYmxlR2hvc3QpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLnNvcnRhYmxlR2hvc3QgPSBfbm9kZTtcbiAgICAgICAgICAgICAgICAgIHNldElubGluZVN0eWxlcyhfbm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMubWluVHJhbnNsYXRlID0ge307XG4gICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IF90aGlzLmNvbnRlbnRXaW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdGhpcy5jb250ZW50V2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgICAgICAgICAgICB9IDogX3RoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclRvcCA9IF9yZWYudG9wLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQm90dG9tID0gY29udGFpbmVyVG9wICsgY29udGFpbmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclJpZ2h0ID0gY29udGFpbmVyTGVmdCArIGNvbnRhaW5lcldpZHRoO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXhpcy54KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pblRyYW5zbGF0ZS54ID0gY29udGFpbmVyTGVmdCAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYXhUcmFuc2xhdGUueCA9IGNvbnRhaW5lclJpZ2h0IC0gKF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgX3RoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXhpcy55KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pblRyYW5zbGF0ZS55ID0gY29udGFpbmVyVG9wIC0gX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlLnkgPSBjb250YWluZXJCb3R0b20gLSAoX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIF90aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWluVHJhbnNsYXRlLnggPSAoX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gMCA6IGNvbnRhaW5lckJvdW5kaW5nUmVjdC5sZWZ0KSAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0IC0gX3RoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYXhUcmFuc2xhdGUueCA9IChfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyBfdGhpcy5jb250ZW50V2luZG93LmlubmVyV2lkdGggOiBjb250YWluZXJCb3VuZGluZ1JlY3QubGVmdCArIGNvbnRhaW5lckJvdW5kaW5nUmVjdC53aWR0aCkgLSBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCAtIF90aGlzLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5taW5UcmFuc2xhdGUueSA9IChfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyAwIDogY29udGFpbmVyQm91bmRpbmdSZWN0LnRvcCkgLSBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wIC0gX3RoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlLnkgPSAoX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gX3RoaXMuY29udGVudFdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckJvdW5kaW5nUmVjdC50b3AgKyBjb250YWluZXJCb3VuZGluZ1JlY3QuaGVpZ2h0KSAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgLSBfdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfaGVscGVyQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgIF9oZWxwZXJDbGFzcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGVscGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmVyTm9kZSA9IGV2ZW50LnRvdWNoZXMgPyBfbm9kZSA6IF90aGlzLmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgX3RoaXMuaGFuZGxlS2V5RW5kLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF90aGlzLmhhbmRsZUtleUVuZCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmVyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50cy5tb3ZlLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpcy5oYW5kbGVTb3J0TW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBldmVudHMuZW5kLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpcy5oYW5kbGVTb3J0RW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc29ydGluZ0luZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9vblNvcnRTdGFydCkge1xuICAgICAgICAgICAgICAgICAgX29uU29ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogX25vZGUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogX2NvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzS2V5U29ydGluZzogX2lzS2V5U29ydGluZyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IF90aGlzLm1hbmFnZXIuZ2V0T3JkZXJlZFJlZnMoKSxcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyOiBfdGhpcy5oZWxwZXJcbiAgICAgICAgICAgICAgICAgIH0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMua2V5TW92ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgX2F4aXMgPSBfdGhpcyRwcm9wczMuYXhpcyxcbiAgICAgICAgICAgICAgICAgIF9nZXRIZWxwZXJEaW1lbnNpb25zID0gX3RoaXMkcHJvcHMzLmdldEhlbHBlckRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICBfaGVscGVyQ2xhc3MgPSBfdGhpcyRwcm9wczMuaGVscGVyQ2xhc3MsXG4gICAgICAgICAgICAgICAgICBfaGlkZVNvcnRhYmxlR2hvc3QgPSBfdGhpcyRwcm9wczMuaGlkZVNvcnRhYmxlR2hvc3QsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVCZWZvcmVTb3J0U3RhcnQgPSBfdGhpcyRwcm9wczMudXBkYXRlQmVmb3JlU29ydFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgX29uU29ydFN0YXJ0ID0gX3RoaXMkcHJvcHMzLm9uU29ydFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID0gX3RoaXMkcHJvcHMzLnVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICAgICAgICB2YXIgX25vZGUgPSBhY3RpdmUubm9kZSxcbiAgICAgICAgICAgICAgICAgIF9jb2xsZWN0aW9uID0gYWN0aXZlLmNvbGxlY3Rpb247XG4gICAgICAgICAgICAgIHZhciBfaXNLZXlTb3J0aW5nID0gX3RoaXMubWFuYWdlci5pc0tleVNvcnRpbmc7XG5cbiAgICAgICAgICAgICAgdmFyIF90ZW1wOCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZUJlZm9yZVNvcnRTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuX2F3YWl0aW5nVXBkYXRlQmVmb3JlU29ydFN0YXJ0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgdmFyIF90ZW1wOSA9IF9maW5hbGx5UmV0aHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfbm9kZS5zb3J0YWJsZUluZm8uaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXBkYXRlQmVmb3JlU29ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBfY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZTogX25vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBfaXNLZXlTb3J0aW5nXG4gICAgICAgICAgICAgICAgICAgIH0sIGV2ZW50KSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoX3dhc1Rocm93biwgX3Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fYXdhaXRpbmdVcGRhdGVCZWZvcmVTb3J0U3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF93YXNUaHJvd24pIHRocm93IF9yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChfdGVtcDkgJiYgX3RlbXA5LnRoZW4pIHJldHVybiBfdGVtcDkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wOCAmJiBfdGVtcDgudGhlbiA/IF90ZW1wOC50aGVuKF90ZW1wNykgOiBfdGVtcDcoX3RlbXA4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90ZW1wNiAmJiBfdGVtcDYudGhlbiA/IF90ZW1wNi50aGVuKGZ1bmN0aW9uICgpIHt9KSA6IHZvaWQgMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlU29ydE1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBvblNvcnRNb3ZlID0gX3RoaXMucHJvcHMub25Tb3J0TW92ZTtcblxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnByZXZlbnREZWZhdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnVwZGF0ZUhlbHBlclBvc2l0aW9uKGV2ZW50KTtcblxuICAgICAgICBfdGhpcy5hbmltYXRlTm9kZXMoKTtcblxuICAgICAgICBfdGhpcy5hdXRvc2Nyb2xsKCk7XG5cbiAgICAgICAgaWYgKG9uU29ydE1vdmUpIHtcbiAgICAgICAgICBvblNvcnRNb3ZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJoYW5kbGVTb3J0RW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBoaWRlU29ydGFibGVHaG9zdCA9IF90aGlzJHByb3BzNC5oaWRlU29ydGFibGVHaG9zdCxcbiAgICAgICAgICAgIG9uU29ydEVuZCA9IF90aGlzJHByb3BzNC5vblNvcnRFbmQ7XG4gICAgICAgIHZhciBfdGhpcyRtYW5hZ2VyID0gX3RoaXMubWFuYWdlcixcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBfdGhpcyRtYW5hZ2VyLmFjdGl2ZS5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nID0gX3RoaXMkbWFuYWdlci5pc0tleVNvcnRpbmc7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gX3RoaXMubWFuYWdlci5nZXRPcmRlcmVkUmVmcygpO1xuXG4gICAgICAgIGlmIChfdGhpcy5saXN0ZW5lck5vZGUpIHtcbiAgICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBfdGhpcy5oYW5kbGVLZXlFbmQsIHRydWUpO1xuXG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgX3RoaXMuaGFuZGxlS2V5RW5kLCB0cnVlKTtcblxuICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzLm1vdmUuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIF90aGlzLmhhbmRsZVNvcnRNb3ZlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRzLmVuZC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxpc3RlbmVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgX3RoaXMuaGFuZGxlU29ydEVuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5oZWxwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5oZWxwZXIpO1xuXG4gICAgICAgIGlmIChoaWRlU29ydGFibGVHaG9zdCAmJiBfdGhpcy5zb3J0YWJsZUdob3N0KSB7XG4gICAgICAgICAgc2V0SW5saW5lU3R5bGVzKF90aGlzLnNvcnRhYmxlR2hvc3QsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcnLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBfbm9kZTIgPSBub2Rlc1tpXTtcbiAgICAgICAgICB2YXIgZWwgPSBfbm9kZTIubm9kZTtcbiAgICAgICAgICBfbm9kZTIuZWRnZU9mZnNldCA9IG51bGw7XG4gICAgICAgICAgX25vZGUyLmJvdW5kaW5nQ2xpZW50UmVjdCA9IG51bGw7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlM2QoZWwsIG51bGwpO1xuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihlbCwgbnVsbCk7XG4gICAgICAgICAgX25vZGUyLnRyYW5zbGF0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5hdXRvU2Nyb2xsZXIuY2xlYXIoKTtcblxuICAgICAgICBfdGhpcy5tYW5hZ2VyLmFjdGl2ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNvcnRpbmc6IGZhbHNlLFxuICAgICAgICAgIHNvcnRpbmdJbmRleDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uU29ydEVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uU29ydEVuZCh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgbmV3SW5kZXg6IF90aGlzLm5ld0luZGV4LFxuICAgICAgICAgICAgb2xkSW5kZXg6IF90aGlzLmluZGV4LFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBpc0tleVNvcnRpbmcsXG4gICAgICAgICAgICBub2Rlczogbm9kZXNcbiAgICAgICAgICB9LCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy50b3VjaGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImF1dG9zY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzYWJsZUF1dG9zY3JvbGwgPSBfdGhpcy5wcm9wcy5kaXNhYmxlQXV0b3Njcm9sbDtcbiAgICAgICAgdmFyIGlzS2V5U29ydGluZyA9IF90aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nO1xuXG4gICAgICAgIGlmIChkaXNhYmxlQXV0b3Njcm9sbCkge1xuICAgICAgICAgIF90aGlzLmF1dG9TY3JvbGxlci5jbGVhcigpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzS2V5U29ydGluZykge1xuICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy50cmFuc2xhdGUpO1xuXG4gICAgICAgICAgdmFyIHNjcm9sbFggPSAwO1xuICAgICAgICAgIHZhciBzY3JvbGxZID0gMDtcblxuICAgICAgICAgIGlmIChfdGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54ID0gTWF0aC5taW4oX3RoaXMubWF4VHJhbnNsYXRlLngsIE1hdGgubWF4KF90aGlzLm1pblRyYW5zbGF0ZS54LCBfdGhpcy50cmFuc2xhdGUueCkpO1xuICAgICAgICAgICAgc2Nyb2xsWCA9IF90aGlzLnRyYW5zbGF0ZS54IC0gdHJhbnNsYXRlLng7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSBNYXRoLm1pbihfdGhpcy5tYXhUcmFuc2xhdGUueSwgTWF0aC5tYXgoX3RoaXMubWluVHJhbnNsYXRlLnksIF90aGlzLnRyYW5zbGF0ZS55KSk7XG4gICAgICAgICAgICBzY3JvbGxZID0gX3RoaXMudHJhbnNsYXRlLnkgLSB0cmFuc2xhdGUueTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlM2QoX3RoaXMuaGVscGVyLCBfdGhpcy50cmFuc2xhdGUpO1xuICAgICAgICAgIF90aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IHNjcm9sbFg7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCArPSBzY3JvbGxZO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmF1dG9TY3JvbGxlci51cGRhdGUoe1xuICAgICAgICAgIGhlaWdodDogX3RoaXMuaGVpZ2h0LFxuICAgICAgICAgIG1heFRyYW5zbGF0ZTogX3RoaXMubWF4VHJhbnNsYXRlLFxuICAgICAgICAgIG1pblRyYW5zbGF0ZTogX3RoaXMubWluVHJhbnNsYXRlLFxuICAgICAgICAgIHRyYW5zbGF0ZTogX3RoaXMudHJhbnNsYXRlLFxuICAgICAgICAgIHdpZHRoOiBfdGhpcy53aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25BdXRvU2Nyb2xsXCIsIGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgX3RoaXMudHJhbnNsYXRlLnggKz0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZS55ICs9IG9mZnNldC50b3A7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0ZU5vZGVzKCk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZUtleURvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgc2hvdWxkQ2FuY2VsU3RhcnQgPSBfdGhpcyRwcm9wczUuc2hvdWxkQ2FuY2VsU3RhcnQsXG4gICAgICAgICAgICBfdGhpcyRwcm9wczUka2V5Q29kZXMgPSBfdGhpcyRwcm9wczUua2V5Q29kZXMsXG4gICAgICAgICAgICBjdXN0b21LZXlDb2RlcyA9IF90aGlzJHByb3BzNSRrZXlDb2RlcyA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wczUka2V5Q29kZXM7XG5cbiAgICAgICAgdmFyIGtleUNvZGVzID0gX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdEtleUNvZGVzLCBjdXN0b21LZXlDb2Rlcyk7XG5cbiAgICAgICAgaWYgKF90aGlzLm1hbmFnZXIuYWN0aXZlICYmICFfdGhpcy5tYW5hZ2VyLmlzS2V5U29ydGluZyB8fCAhX3RoaXMubWFuYWdlci5hY3RpdmUgJiYgKCFrZXlDb2Rlcy5saWZ0LmluY2x1ZGVzKGtleUNvZGUpIHx8IHNob3VsZENhbmNlbFN0YXJ0KGV2ZW50KSB8fCAhX3RoaXMuaXNWYWxpZFNvcnRpbmdUYXJnZXQoZXZlbnQpKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChrZXlDb2Rlcy5saWZ0LmluY2x1ZGVzKGtleUNvZGUpICYmICFfdGhpcy5tYW5hZ2VyLmFjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLmtleUxpZnQoZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmRyb3AuaW5jbHVkZXMoa2V5Q29kZSkgJiYgX3RoaXMubWFuYWdlci5hY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy5rZXlEcm9wKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5jYW5jZWwuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgICBfdGhpcy5uZXdJbmRleCA9IF90aGlzLm1hbmFnZXIuYWN0aXZlLmluZGV4O1xuXG4gICAgICAgICAgX3RoaXMua2V5RHJvcChldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMudXAuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgICBfdGhpcy5rZXlNb3ZlKC0xKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5kb3duLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgICAgX3RoaXMua2V5TW92ZSgxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlMaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QodGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX25vZGUkc29ydGFibGVJbmZvMiA9IG5vZGUuc29ydGFibGVJbmZvLFxuICAgICAgICAgICAgaW5kZXggPSBfbm9kZSRzb3J0YWJsZUluZm8yLmluZGV4LFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IF9ub2RlJHNvcnRhYmxlSW5mbzIuY29sbGVjdGlvbjtcbiAgICAgICAgX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgICBfdGhpcy5tYW5hZ2VyLmlzS2V5U29ydGluZyA9IHRydWU7XG4gICAgICAgIF90aGlzLm1hbmFnZXIuYWN0aXZlID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uXG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlUHJlc3MoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlNb3ZlXCIsIGZ1bmN0aW9uIChzaGlmdCkge1xuICAgICAgICB2YXIgbm9kZXMgPSBfdGhpcy5tYW5hZ2VyLmdldE9yZGVyZWRSZWZzKCk7XG5cbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLm5vZGUuc29ydGFibGVJbmZvLmluZGV4O1xuICAgICAgICB2YXIgbmV3SW5kZXggPSBfdGhpcy5uZXdJbmRleCArIHNoaWZ0O1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gX3RoaXMubmV3SW5kZXg7XG5cbiAgICAgICAgaWYgKG5ld0luZGV4IDwgMCB8fCBuZXdJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnByZXZJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgX3RoaXMubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgdmFyIHRhcmdldEluZGV4ID0gZ2V0VGFyZ2V0SW5kZXgoX3RoaXMubmV3SW5kZXgsIF90aGlzLnByZXZJbmRleCwgX3RoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gbm9kZXMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IF9yZWYyLm5vZGU7XG4gICAgICAgICAgcmV0dXJuIG5vZGUuc29ydGFibGVJbmZvLmluZGV4ID09PSB0YXJnZXRJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0YXJnZXROb2RlID0gdGFyZ2V0Lm5vZGU7XG4gICAgICAgIHZhciBzY3JvbGxEZWx0YSA9IF90aGlzLmNvbnRhaW5lclNjcm9sbERlbHRhO1xuICAgICAgICB2YXIgdGFyZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gdGFyZ2V0LmJvdW5kaW5nQ2xpZW50UmVjdCB8fCBnZXRTY3JvbGxBZGp1c3RlZEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXROb2RlLCBzY3JvbGxEZWx0YSk7XG4gICAgICAgIHZhciB0YXJnZXRUcmFuc2xhdGUgPSB0YXJnZXQudHJhbnNsYXRlIHx8IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcDogdGFyZ2V0Qm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHRhcmdldFRyYW5zbGF0ZS55IC0gc2Nyb2xsRGVsdGEudG9wLFxuICAgICAgICAgIGxlZnQ6IHRhcmdldEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgdGFyZ2V0VHJhbnNsYXRlLnggLSBzY3JvbGxEZWx0YS5sZWZ0XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzaG91bGRBZGp1c3RGb3JTaXplID0gcHJldkluZGV4IDwgbmV3SW5kZXg7XG4gICAgICAgIHZhciBzaXplQWRqdXN0bWVudCA9IHtcbiAgICAgICAgICB4OiBzaG91bGRBZGp1c3RGb3JTaXplICYmIF90aGlzLmF4aXMueCA/IHRhcmdldE5vZGUub2Zmc2V0V2lkdGggLSBfdGhpcy53aWR0aCA6IDAsXG4gICAgICAgICAgeTogc2hvdWxkQWRqdXN0Rm9yU2l6ZSAmJiBfdGhpcy5heGlzLnkgPyB0YXJnZXROb2RlLm9mZnNldEhlaWdodCAtIF90aGlzLmhlaWdodCA6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVTb3J0TW92ZSh7XG4gICAgICAgICAgcGFnZVg6IHRhcmdldFBvc2l0aW9uLmxlZnQgKyBzaXplQWRqdXN0bWVudC54LFxuICAgICAgICAgIHBhZ2VZOiB0YXJnZXRQb3NpdGlvbi50b3AgKyBzaXplQWRqdXN0bWVudC55LFxuICAgICAgICAgIGlnbm9yZVRyYW5zaXRpb246IHNoaWZ0ID09PSAwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlEcm9wXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5oYW5kbGVTb3J0RW5kKGV2ZW50KTtcblxuICAgICAgICBpZiAoX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlKSB7XG4gICAgICAgICAgX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlS2V5RW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMubWFuYWdlci5hY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy5rZXlEcm9wKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJpc1ZhbGlkU29ydGluZ1RhcmdldFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHVzZURyYWdIYW5kbGUgPSBfdGhpcy5wcm9wcy51c2VEcmFnSGFuZGxlO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QodGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnNvcnRhYmxlSW5mbyAmJiAhbm9kZS5zb3J0YWJsZUluZm8uZGlzYWJsZWQgJiYgKHVzZURyYWdIYW5kbGUgPyBpc1NvcnRhYmxlSGFuZGxlKHRhcmdldCkgOiB0YXJnZXQuc29ydGFibGVJbmZvKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZVByb3BzKHByb3BzKTtcbiAgICAgIF90aGlzLm1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xuICAgICAgX3RoaXMuZXZlbnRzID0ge1xuICAgICAgICBlbmQ6IF90aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgbW92ZTogX3RoaXMuaGFuZGxlTW92ZSxcbiAgICAgICAgc3RhcnQ6IF90aGlzLmhhbmRsZVN0YXJ0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXaXRoU29ydGFibGVDb250YWluZXIsIFt7XG4gICAgICBrZXk6IFwiZ2V0Q2hpbGRDb250ZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hbmFnZXI6IHRoaXMubWFuYWdlclxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPSB0aGlzLnByb3BzLnVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgIF90aGlzMi5jb250YWluZXIgPSBjb250YWluZXJOb2RlO1xuICAgICAgICAgIF90aGlzMi5kb2N1bWVudCA9IF90aGlzMi5jb250YWluZXIub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgICAgICAgICB2YXIgY29udGVudFdpbmRvdyA9IF90aGlzMi5wcm9wcy5jb250ZW50V2luZG93IHx8IF90aGlzMi5kb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gICAgICAgICAgX3RoaXMyLmNvbnRlbnRXaW5kb3cgPSB0eXBlb2YgY29udGVudFdpbmRvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnRlbnRXaW5kb3coKSA6IGNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgX3RoaXMyLnNjcm9sbENvbnRhaW5lciA9IHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gX3RoaXMyLmRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgX3RoaXMyLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGdldFNjcm9sbGluZ1BhcmVudChfdGhpczIuY29udGFpbmVyKSB8fCBfdGhpczIuY29udGFpbmVyO1xuICAgICAgICAgIF90aGlzMi5hdXRvU2Nyb2xsZXIgPSBuZXcgQXV0b1Njcm9sbGVyKF90aGlzMi5zY3JvbGxDb250YWluZXIsIF90aGlzMi5vbkF1dG9TY3JvbGwpO1xuICAgICAgICAgIE9iamVjdC5rZXlzKF90aGlzMi5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50c1trZXldLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgX3RoaXMyLmV2ZW50c1trZXldLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMi5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzMi5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmhlbHBlciAmJiB0aGlzLmhlbHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGhpcy5oZWxwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmhlbHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBldmVudHNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpczMuZXZlbnRzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUhlbHBlclBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSGVscGVyUG9zaXRpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBsb2NrQXhpcyA9IF90aGlzJHByb3BzNi5sb2NrQXhpcyxcbiAgICAgICAgICAgIGxvY2tPZmZzZXQgPSBfdGhpcyRwcm9wczYubG9ja09mZnNldCxcbiAgICAgICAgICAgIGxvY2tUb0NvbnRhaW5lckVkZ2VzID0gX3RoaXMkcHJvcHM2LmxvY2tUb0NvbnRhaW5lckVkZ2VzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3RoaXMkcHJvcHM2LnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIF90aGlzJHByb3BzNiRrZXlib2FyZCA9IF90aGlzJHByb3BzNi5rZXlib2FyZFNvcnRpbmdUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBrZXlib2FyZFNvcnRpbmdUcmFuc2l0aW9uRHVyYXRpb24gPSBfdGhpcyRwcm9wczYka2V5Ym9hcmQgPT09IHZvaWQgMCA/IHRyYW5zaXRpb25EdXJhdGlvbiA6IF90aGlzJHByb3BzNiRrZXlib2FyZDtcbiAgICAgICAgdmFyIGlzS2V5U29ydGluZyA9IHRoaXMubWFuYWdlci5pc0tleVNvcnRpbmc7XG4gICAgICAgIHZhciBpZ25vcmVUcmFuc2l0aW9uID0gZXZlbnQuaWdub3JlVHJhbnNpdGlvbjtcbiAgICAgICAgdmFyIG9mZnNldCA9IGdldFBvc2l0aW9uKGV2ZW50KTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICB4OiBvZmZzZXQueCAtIHRoaXMuaW5pdGlhbE9mZnNldC54LFxuICAgICAgICAgIHk6IG9mZnNldC55IC0gdGhpcy5pbml0aWFsT2Zmc2V0LnlcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNsYXRlLnkgLT0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLnRvcDtcbiAgICAgICAgdHJhbnNsYXRlLnggLT0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLmxlZnQ7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuXG4gICAgICAgIGlmIChsb2NrVG9Db250YWluZXJFZGdlcykge1xuICAgICAgICAgIHZhciBfZ2V0TG9ja1BpeGVsT2Zmc2V0cyA9IGdldExvY2tQaXhlbE9mZnNldHMoe1xuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIGxvY2tPZmZzZXQ6IGxvY2tPZmZzZXQsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aFxuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfZ2V0TG9ja1BpeGVsT2Zmc2V0czIgPSBfc2xpY2VkVG9BcnJheShfZ2V0TG9ja1BpeGVsT2Zmc2V0cywgMiksXG4gICAgICAgICAgICAgIG1pbkxvY2tPZmZzZXQgPSBfZ2V0TG9ja1BpeGVsT2Zmc2V0czJbMF0sXG4gICAgICAgICAgICAgIG1heExvY2tPZmZzZXQgPSBfZ2V0TG9ja1BpeGVsT2Zmc2V0czJbMV07XG5cbiAgICAgICAgICB2YXIgbWluT2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSBtaW5Mb2NrT2Zmc2V0LngsXG4gICAgICAgICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSBtaW5Mb2NrT2Zmc2V0LnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBtYXhPZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIG1heExvY2tPZmZzZXQueCxcbiAgICAgICAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIG1heExvY2tPZmZzZXQueVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJhbnNsYXRlLnggPSBsaW1pdCh0aGlzLm1pblRyYW5zbGF0ZS54ICsgbWluT2Zmc2V0LngsIHRoaXMubWF4VHJhbnNsYXRlLnggLSBtYXhPZmZzZXQueCwgdHJhbnNsYXRlLngpO1xuICAgICAgICAgIHRyYW5zbGF0ZS55ID0gbGltaXQodGhpcy5taW5UcmFuc2xhdGUueSArIG1pbk9mZnNldC55LCB0aGlzLm1heFRyYW5zbGF0ZS55IC0gbWF4T2Zmc2V0LnksIHRyYW5zbGF0ZS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NrQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgdHJhbnNsYXRlLnkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY2tBeGlzID09PSAneScpIHtcbiAgICAgICAgICB0cmFuc2xhdGUueCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlTb3J0aW5nICYmIGtleWJvYXJkU29ydGluZ1RyYW5zaXRpb25EdXJhdGlvbiAmJiAhaWdub3JlVHJhbnNpdGlvbikge1xuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0aGlzLmhlbHBlciwga2V5Ym9hcmRTb3J0aW5nVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRyYW5zbGF0ZTNkKHRoaXMuaGVscGVyLCB0cmFuc2xhdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhbmltYXRlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlTm9kZXMoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3RoaXMkcHJvcHM3LnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIGhpZGVTb3J0YWJsZUdob3N0ID0gX3RoaXMkcHJvcHM3LmhpZGVTb3J0YWJsZUdob3N0LFxuICAgICAgICAgICAgb25Tb3J0T3ZlciA9IF90aGlzJHByb3BzNy5vblNvcnRPdmVyO1xuICAgICAgICB2YXIgY29udGFpbmVyU2Nyb2xsRGVsdGEgPSB0aGlzLmNvbnRhaW5lclNjcm9sbERlbHRhLFxuICAgICAgICAgICAgd2luZG93U2Nyb2xsRGVsdGEgPSB0aGlzLndpbmRvd1Njcm9sbERlbHRhO1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1hbmFnZXIuZ2V0T3JkZXJlZFJlZnMoKTtcbiAgICAgICAgdmFyIHNvcnRpbmdPZmZzZXQgPSB7XG4gICAgICAgICAgbGVmdDogdGhpcy5vZmZzZXRFZGdlLmxlZnQgKyB0aGlzLnRyYW5zbGF0ZS54ICsgY29udGFpbmVyU2Nyb2xsRGVsdGEubGVmdCxcbiAgICAgICAgICB0b3A6IHRoaXMub2Zmc2V0RWRnZS50b3AgKyB0aGlzLnRyYW5zbGF0ZS55ICsgY29udGFpbmVyU2Nyb2xsRGVsdGEudG9wXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc0tleVNvcnRpbmcgPSB0aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nO1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5uZXdJbmRleDtcbiAgICAgICAgdGhpcy5uZXdJbmRleCA9IG51bGw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIF9ub2RlMyA9IG5vZGVzW2ldLm5vZGU7XG4gICAgICAgICAgdmFyIGluZGV4ID0gX25vZGUzLnNvcnRhYmxlSW5mby5pbmRleDtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfbm9kZTMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgdmFyIGhlaWdodCA9IF9ub2RlMy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQgPiBoZWlnaHQgPyBoZWlnaHQgLyAyIDogdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggPiB3aWR0aCA/IHdpZHRoIC8gMiA6IHRoaXMud2lkdGggLyAyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgbXVzdFNoaWZ0QmFja3dhcmQgPSBpc0tleVNvcnRpbmcgJiYgaW5kZXggPiB0aGlzLmluZGV4ICYmIGluZGV4IDw9IHByZXZJbmRleDtcbiAgICAgICAgICB2YXIgbXVzdFNoaWZ0Rm9yd2FyZCA9IGlzS2V5U29ydGluZyAmJiBpbmRleCA8IHRoaXMuaW5kZXggJiYgaW5kZXggPj0gcHJldkluZGV4O1xuICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGVkZ2VPZmZzZXQgPSBub2Rlc1tpXS5lZGdlT2Zmc2V0O1xuXG4gICAgICAgICAgaWYgKCFlZGdlT2Zmc2V0KSB7XG4gICAgICAgICAgICBlZGdlT2Zmc2V0ID0gZ2V0RWRnZU9mZnNldChfbm9kZTMsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIG5vZGVzW2ldLmVkZ2VPZmZzZXQgPSBlZGdlT2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgICAgIG5vZGVzW2ldLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGdldFNjcm9sbEFkanVzdGVkQm91bmRpbmdDbGllbnRSZWN0KF9ub2RlMywgY29udGFpbmVyU2Nyb2xsRGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IGkgPCBub2Rlcy5sZW5ndGggLSAxICYmIG5vZGVzW2kgKyAxXTtcbiAgICAgICAgICB2YXIgcHJldk5vZGUgPSBpID4gMCAmJiBub2Rlc1tpIC0gMV07XG5cbiAgICAgICAgICBpZiAobmV4dE5vZGUgJiYgIW5leHROb2RlLmVkZ2VPZmZzZXQpIHtcbiAgICAgICAgICAgIG5leHROb2RlLmVkZ2VPZmZzZXQgPSBnZXRFZGdlT2Zmc2V0KG5leHROb2RlLm5vZGUsIHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgaWYgKGlzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICBuZXh0Tm9kZS5ib3VuZGluZ0NsaWVudFJlY3QgPSBnZXRTY3JvbGxBZGp1c3RlZEJvdW5kaW5nQ2xpZW50UmVjdChuZXh0Tm9kZS5ub2RlLCBjb250YWluZXJTY3JvbGxEZWx0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaGlkZVNvcnRhYmxlR2hvc3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUdob3N0ID0gX25vZGUzO1xuICAgICAgICAgICAgICBzZXRJbmxpbmVTdHlsZXMoX25vZGUzLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKF9ub2RlMywgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgICBpZiAobXVzdFNoaWZ0Rm9yd2FyZCB8fCBpbmRleCA8IHRoaXMuaW5kZXggJiYgKHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgLSBvZmZzZXQud2lkdGggPD0gZWRnZU9mZnNldC5sZWZ0ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wIDw9IGVkZ2VPZmZzZXQudG9wICsgb2Zmc2V0LmhlaWdodCB8fCBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCArIG9mZnNldC5oZWlnaHQgPD0gZWRnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueDtcblxuICAgICAgICAgICAgICAgIGlmIChlZGdlT2Zmc2V0LmxlZnQgKyB0cmFuc2xhdGUueCA+IHRoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LndpZHRoIC0gb2Zmc2V0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSBuZXh0Tm9kZS5lZGdlT2Zmc2V0LmxlZnQgLSBlZGdlT2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS55ID0gbmV4dE5vZGUuZWRnZU9mZnNldC50b3AgLSBlZGdlT2Zmc2V0LnRvcDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtdXN0U2hpZnRCYWNrd2FyZCB8fCBpbmRleCA+IHRoaXMuaW5kZXggJiYgKHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgKyBvZmZzZXQud2lkdGggPj0gZWRnZU9mZnNldC5sZWZ0ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wICsgb2Zmc2V0LmhlaWdodCA+PSBlZGdlT2Zmc2V0LnRvcCB8fCBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCArIG9mZnNldC5oZWlnaHQgPj0gZWRnZU9mZnNldC50b3AgKyBoZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSAtKHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbk9mZnNldC54KTtcblxuICAgICAgICAgICAgICAgIGlmIChlZGdlT2Zmc2V0LmxlZnQgKyB0cmFuc2xhdGUueCA8IHRoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LmxlZnQgKyBvZmZzZXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUueCA9IHByZXZOb2RlLmVkZ2VPZmZzZXQubGVmdCAtIGVkZ2VPZmZzZXQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSBwcmV2Tm9kZS5lZGdlT2Zmc2V0LnRvcCAtIGVkZ2VPZmZzZXQudG9wO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKG11c3RTaGlmdEJhY2t3YXJkIHx8IGluZGV4ID4gdGhpcy5pbmRleCAmJiBzb3J0aW5nT2Zmc2V0LmxlZnQgKyB3aW5kb3dTY3JvbGxEZWx0YS5sZWZ0ICsgb2Zmc2V0LndpZHRoID49IGVkZ2VPZmZzZXQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS54ID0gLSh0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG11c3RTaGlmdEZvcndhcmQgfHwgaW5kZXggPCB0aGlzLmluZGV4ICYmIHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgPD0gZWRnZU9mZnNldC5sZWZ0ICsgb2Zmc2V0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXhpcy55KSB7XG4gICAgICAgICAgICBpZiAobXVzdFNoaWZ0QmFja3dhcmQgfHwgaW5kZXggPiB0aGlzLmluZGV4ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wICsgb2Zmc2V0LmhlaWdodCA+PSBlZGdlT2Zmc2V0LnRvcCkge1xuICAgICAgICAgICAgICB0cmFuc2xhdGUueSA9IC0odGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbk9mZnNldC55KTtcbiAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtdXN0U2hpZnRGb3J3YXJkIHx8IGluZGV4IDwgdGhpcy5pbmRleCAmJiBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCA8PSBlZGdlT2Zmc2V0LnRvcCArIG9mZnNldC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luT2Zmc2V0Lnk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubmV3SW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRyYW5zbGF0ZTNkKF9ub2RlMywgdHJhbnNsYXRlKTtcbiAgICAgICAgICBub2Rlc1tpXS50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZXdJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5uZXdJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgdGhpcy5uZXdJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvbGRJbmRleCA9IGlzS2V5U29ydGluZyA/IHRoaXMucHJldkluZGV4IDogcHJldkluZGV4O1xuXG4gICAgICAgIGlmIChvblNvcnRPdmVyICYmIHRoaXMubmV3SW5kZXggIT09IG9sZEluZGV4KSB7XG4gICAgICAgICAgb25Tb3J0T3Zlcih7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm1hbmFnZXIuYWN0aXZlLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIG5ld0luZGV4OiB0aGlzLm5ld0luZGV4LFxuICAgICAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBpc0tleVNvcnRpbmcsXG4gICAgICAgICAgICBub2Rlczogbm9kZXMsXG4gICAgICAgICAgICBoZWxwZXI6IHRoaXMuaGVscGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0V3JhcHBlZEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgICBpbnZhcmlhbnQoY29uZmlnLndpdGhSZWYsICdUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHlvdSBuZWVkIHRvIHBhc3MgaW4ge3dpdGhSZWY6IHRydWV9IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgb2YgdGhlIFNvcnRhYmxlQ29udGFpbmVyKCkgY2FsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWRJbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Q29udGFpbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgICAgICB2YXIgZ2V0Q29udGFpbmVyID0gdGhpcy5wcm9wcy5nZXRDb250YWluZXI7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBnZXRDb250YWluZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29udGFpbmVyKGNvbmZpZy53aXRoUmVmID8gdGhpcy5nZXRXcmFwcGVkSW5zdGFuY2UoKSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbmZpZy53aXRoUmVmID8gJ3dyYXBwZWRJbnN0YW5jZScgOiBudWxsO1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcmVmOiByZWZcbiAgICAgICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0dGVkUHJvcHMpKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImhlbHBlckNvbnRhaW5lclwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBoZWxwZXJDb250YWluZXIgPSB0aGlzLnByb3BzLmhlbHBlckNvbnRhaW5lcjtcblxuICAgICAgICBpZiAodHlwZW9mIGhlbHBlckNvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBoZWxwZXJDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhlbHBlckNvbnRhaW5lciB8fCB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbnRhaW5lclNjcm9sbERlbHRhXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdmFyIHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5wcm9wcy51c2VXaW5kb3dBc1Njcm9sbENvbnRhaW5lcjtcblxuICAgICAgICBpZiAodXNlV2luZG93QXNTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLSB0aGlzLmluaXRpYWxTY3JvbGwubGVmdCxcbiAgICAgICAgICB0b3A6IHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuaW5pdGlhbFNjcm9sbC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwid2luZG93U2Nyb2xsRGVsdGFcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHRoaXMuY29udGVudFdpbmRvdy5wYWdlWE9mZnNldCAtIHRoaXMuaW5pdGlhbFdpbmRvd1Njcm9sbC5sZWZ0LFxuICAgICAgICAgIHRvcDogdGhpcy5jb250ZW50V2luZG93LnBhZ2VZT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXaXRoU29ydGFibGVDb250YWluZXI7XG4gIH0oQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkaXNwbGF5TmFtZVwiLCBwcm92aWRlRGlzcGxheU5hbWUoJ3NvcnRhYmxlTGlzdCcsIFdyYXBwZWRDb21wb25lbnQpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJjaGlsZENvbnRleHRUeXBlc1wiLCB7XG4gICAgbWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0pLCBfdGVtcDtcbn1cblxudmFyIHByb3BUeXBlcyQxID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2xsZWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcbnZhciBvbWl0dGVkUHJvcHMkMSA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyQxKTtcbmZ1bmN0aW9uIHNvcnRhYmxlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVFbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFdpdGhTb3J0YWJsZUVsZW1lbnQoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2l0aFNvcnRhYmxlRWxlbWVudCk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2l0aFNvcnRhYmxlRWxlbWVudCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdpdGhTb3J0YWJsZUVsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICBpZiAocHJldlByb3BzLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc29ydGFibGVJbmZvLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc29ydGFibGVJbmZvLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlByb3BzLmNvbGxlY3Rpb24gIT09IHRoaXMucHJvcHMuY29sbGVjdGlvbikge1xuICAgICAgICAgIHRoaXMudW5yZWdpc3RlcihwcmV2UHJvcHMuY29sbGVjdGlvbik7XG4gICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZWdpc3RlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IF90aGlzJHByb3BzLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wcy5pbmRleDtcbiAgICAgICAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgbm9kZS5zb3J0YWJsZUluZm8gPSB7XG4gICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG1hbmFnZXI6IHRoaXMuY29udGV4dC5tYW5hZ2VyXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMucmVmID0ge1xuICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1hbmFnZXIuYWRkKGNvbGxlY3Rpb24sIHRoaXMucmVmKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5yZWdpc3RlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzLmNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuY29udGV4dC5tYW5hZ2VyLnJlbW92ZShjb2xsZWN0aW9uLCB0aGlzLnJlZik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFdyYXBwZWRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdyYXBwZWRJbnN0YW5jZSgpIHtcbiAgICAgICAgaW52YXJpYW50KGNvbmZpZy53aXRoUmVmLCAnVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB5b3UgbmVlZCB0byBwYXNzIGluIHt3aXRoUmVmOiB0cnVlfSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9mIHRoZSBTb3J0YWJsZUVsZW1lbnQoKSBjYWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWYgPSBjb25maWcud2l0aFJlZiA/ICd3cmFwcGVkSW5zdGFuY2UnIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdHRlZFByb3BzJDEpKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdpdGhTb3J0YWJsZUVsZW1lbnQ7XG4gIH0oQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkaXNwbGF5TmFtZVwiLCBwcm92aWRlRGlzcGxheU5hbWUoJ3NvcnRhYmxlRWxlbWVudCcsIFdyYXBwZWRDb21wb25lbnQpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJjb250ZXh0VHlwZXNcIiwge1xuICAgIG1hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzJDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgY29sbGVjdGlvbjogMFxuICB9KSwgX3RlbXA7XG59XG5cbmV4cG9ydCB7IHNvcnRhYmxlQ29udGFpbmVyIGFzIFNvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50IGFzIFNvcnRhYmxlRWxlbWVudCwgc29ydGFibGVFbGVtZW50LCBzb3J0YWJsZUhhbmRsZSBhcyBTb3J0YWJsZUhhbmRsZSwgc29ydGFibGVIYW5kbGUsIGFycmF5TW92ZSB9O1xuIiwiLyogZ2xvYmFsIG1ldGFTaWRlYmFyICovXG5pbXBvcnQgU29ydGFibGVJdGVtcyBmcm9tICcuL2NvbnRyb2xzL1NvcnRhYmxlSXRlbXMnO1xuaW1wb3J0IHthbGlnbkNlbnRlckljb24sIGFsaWduTGVmdEljb24sIGFsaWduUmlnaHRJY29ufSBmcm9tICcuLi9oZWxwZXJzL2ljb25zLmpzJztcblxuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUGFuZWxCb2R5LCBCdXR0b24sIEJhc2VDb250cm9sLCBSYWRpb0NvbnRyb2wsIEJ1dHRvbkdyb3VwLCBUb2dnbGVDb250cm9sLCBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jbGFzcyBNZXRhRmllbGRzTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc3QgbWV0YURhdGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApO1xuXG5cdFx0bGV0IG9taXRFbXB0eSA9IG9iaiA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyhvYmopLmZpbHRlcihrID0+ICcnID09PSBvYmpba10gfHwgMCA9PT0gb2JqW2tdICkuZm9yRWFjaChrID0+IGRlbGV0ZSAob2JqW2tdKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH07XG5cblx0XHR0aGlzLmRlZmF1bHRTdGF0ZSA9IHtcblx0XHRcdCduZXZlX21ldGFfc2lkZWJhcic6ICdkZWZhdWx0Jyxcblx0XHRcdCduZXZlX21ldGFfY29udGFpbmVyJzogJ2RlZmF1bHQnLFxuXHRcdFx0J25ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aCc6ICdvZmYnLFxuXHRcdFx0J25ldmVfbWV0YV9jb250ZW50X3dpZHRoJzogNzAsXG5cdFx0XHQnbmV2ZV9tZXRhX3RpdGxlX2FsaWdubWVudCc6ICdsZWZ0Jyxcblx0XHRcdCduZXZlX21ldGFfYXV0aG9yX2F2YXRhcic6ICdvZmYnLFxuXHRcdFx0J25ldmVfbWV0YV9yZWFkaW5nX3RpbWUnOiAnb2ZmJyxcblx0XHRcdCduZXZlX3Bvc3RfZWxlbWVudHNfb3JkZXInOiBKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdCd0aXRsZScsXG5cdFx0XHRcdFx0J21ldGEnLFxuXHRcdFx0XHRcdCd0aHVtYm5haWwnLFxuXHRcdFx0XHRcdCdjb250ZW50Jyxcblx0XHRcdFx0XHQndGFncycsXG5cdFx0XHRcdFx0J2NvbW1lbnRzJyxcblx0XHRcdFx0XHQncG9zdC1uYXZpZ2F0aW9uJ1xuXHRcdFx0XHRdXG5cdFx0XHQpLFxuXHRcdFx0J25ldmVfbWV0YV9kaXNhYmxlX2hlYWRlcic6ICdvZmYnLFxuXHRcdFx0J25ldmVfbWV0YV9kaXNhYmxlX2Zvb3Rlcic6ICdvZmYnLFxuXHRcdFx0J25ldmVfbWV0YV9kaXNhYmxlX3RpdGxlJzogJ29mZidcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IHsgLi4ub21pdEVtcHR5KHRoaXMuZGVmYXVsdFN0YXRlKSwgLi4ub21pdEVtcHR5KG1ldGFEYXRhKSB9O1xuXG5cdFx0Ly8gRG8gbm90IHVzZSBhbnkga2V5cyB0aGF0IGFyZSBub3QgaW4gdGhlIHNpZGViYXIgZm9yIG1ldGEuXG5cdFx0Zm9yICggbGV0IGsgaW4gcmVzdWx0ICkge1xuXHRcdFx0aWYgKCAhIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFN0YXRlKS5pbmNsdWRlcyhrKSApIHtcblx0XHRcdFx0ZGVsZXRlIChyZXN1bHRba10pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUgPSB7IC4uLnJlc3VsdCB9O1xuXHRcdHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCggdGhpcyApO1xuXHRcdHRoaXMudXBkYXRlQmxvY2tXaWR0aCA9IHRoaXMudXBkYXRlQmxvY2tXaWR0aC5iaW5kKCB0aGlzICk7XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBTaG90KSB7XG5cdFx0dGhpcy51cGRhdGVCbG9ja1dpZHRoKCk7XG5cdH1cblxuXHR1cGRhdGVWYWx1ZXMoaWQsIHZhbHVlKSB7XG5cdFx0bGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRzdGF0ZVtpZF0gPSB2YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKCBzdGF0ZSApO1xuXHRcdHRoaXMucHJvcHMuc2V0TWV0YVZhbHVlKCBpZCwgdmFsdWUgKTtcblx0fVxuXG5cdHJlc2V0QWxsKCkge1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBhbGxNZXRhID0gey4uLnRoaXMucHJvcHMuYWxsTWV0YX07XG5cdFx0Y29uc3QgZW1wdGllZE1ldGEgPSB7fTtcblxuXHRcdE9iamVjdC5rZXlzKCBzdGF0ZSApLm1hcCggKCBjb250cm9sICkgPT4ge1xuXHRcdFx0bGV0IGVtcHR5VmFsdWUgPSAnJztcblx0XHRcdGlmICggJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJyA9PT0gY29udHJvbCApIHtcblx0XHRcdFx0ZW1wdHlWYWx1ZSA9IDA7XG5cdFx0XHR9XG5cdFx0XHRlbXB0aWVkTWV0YVtjb250cm9sXSA9IGVtcHR5VmFsdWU7XG5cdFx0fSk7XG5cblx0XHQvLyBEb24ndCBzZW5kIG1ldGEgdGhhdCB3YXNuJ3QgdGhlcmUgYWxyZWFkeS5cblx0XHRmb3IgKCBsZXQgayBpbiBlbXB0aWVkTWV0YSApIHtcblx0XHRcdGlmICggISBPYmplY3Qua2V5cyhhbGxNZXRhKS5pbmNsdWRlcyhrKSApIHtcblx0XHRcdFx0ZGVsZXRlIGVtcHRpZWRNZXRhW2tdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE1lcmdlIG9sZCBtZXRhIHdpdGggdGhlIGVtcHR5IG1ldGEuXG5cdFx0dGhpcy5wcm9wcy5zZXRBbGxNZXRhcyh7XG5cdFx0XHQuLi5hbGxNZXRhLFxuXHRcdFx0Li4uZW1wdGllZE1ldGFcblx0XHR9ICk7XG5cblx0XHR0aGlzLnNldFN0YXRlKCB0aGlzLmRlZmF1bHRTdGF0ZSApO1xuXHR9XG5cblx0dXBkYXRlQmxvY2tXaWR0aCgpIHtcblx0XHRjb25zdCBpc0N1c3RvbUNvbnRlbnRXaWR0aCA9IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aCddO1xuXHRcdGxldCBjb250YWluZXJUeXBlID0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2NvbnRhaW5lciddO1xuXHRcdGlmICggJ2RlZmF1bHQnID09PSBjb250YWluZXJUeXBlICkge1xuXHRcdFx0Y29udGFpbmVyVHlwZSA9IG1ldGFTaWRlYmFyLmFjdGlvbnNbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10uY29udGFpbmVyO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ107XG5cdFx0bGV0IGNvbnRlbnRXaWR0aERlZmF1bHQgPSBtZXRhU2lkZWJhci5hY3Rpb25zWyduZXZlX21ldGFfY29udGVudF93aWR0aCddLmNvbnRlbnQ7XG5cdFx0bGV0IGJsb2NrV2lkdGhEZWZhdWx0ID0gY29udGVudFdpZHRoRGVmYXVsdCArICclJztcblx0XHRsZXQgYmxvY0tXaWR0aCA9IGNvbnRlbnRXaWR0aCArICclJztcblx0XHRpZiAoICdjb250YWluZWQnID09PSBjb250YWluZXJUeXBlICkge1xuXHRcdFx0YmxvY2tXaWR0aERlZmF1bHQgPSBNYXRoLnJvdW5kKChjb250ZW50V2lkdGhEZWZhdWx0IC8gMTAwKSAqIG1ldGFTaWRlYmFyLmFjdGlvbnNbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10uZWRpdG9yKSArICdweCc7XG5cdFx0XHRibG9jS1dpZHRoID0gTWF0aC5yb3VuZCggKCBjb250ZW50V2lkdGggLyAxMDAgKSAqIG1ldGFTaWRlYmFyLmFjdGlvbnNbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10uZWRpdG9yICkgKyAncHgnO1xuXHRcdH1cblxuXHRcdGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV2ZS1tZXRhLWVkaXRvci1zdHlsZScpKSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldmUtbWV0YS1lZGl0b3Itc3R5bGUnKS5yZW1vdmUoKTtcblx0XHR9XG5cdFx0bGV0IGNzcyA9ICcud3AtYmxvY2s6bm90KFtkYXRhLWFsaWduPVwiZnVsbFwiXSkgeyBtYXgtd2lkdGg6ICcgKyAoJ29uJyA9PT0gaXNDdXN0b21Db250ZW50V2lkdGggPyBibG9jS1dpZHRoIDogYmxvY2tXaWR0aERlZmF1bHQpICsgJzsgfSc7XG5cblx0XHRjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZDtcblx0XHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICduZXZlLW1ldGEtZWRpdG9yLXN0eWxlJyApO1xuXHRcdHN0eWxlLmlubmVySFRNTCA9IGNzcztcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fVxuXG5cdHJlbmRlclBhZ2VMYXlvdXRHcm91cCgpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ3RlbXBsYXRlJyk7XG5cdFx0aWYgKCAnZWxlbWVudG9yX2hlYWRlcl9mb290ZXInID09PSB0ZW1wbGF0ZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJudi1vcHRpb24tY2F0ZWdvcnlcIj5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnUGFnZSBMYXlvdXQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGludGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfc2lkZWJhclwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NpZGViYXInLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLXJhZGlvLWltYWdlIG5ldmVfbWV0YV9zaWRlYmFyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXt0aGlzLnN0YXRlWyduZXZlX21ldGFfc2lkZWJhciddfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFiZWw6IDw+PGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVRQUFBQlhDQVlBQUFDOVVlT0hBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBTjZTVVJCVkhnQjdacmZUaHBSRU1abjFTZ1VXaXdrRmk2Z3RvbDNtbmpoaS9RSm1qNUMzNlNQMWdzdlRHaXIwUmIvQmFvcDIwVUwzZkp0dWdhSDNRWEt6bExqOTBzMkc1UmxjMzdNbVRObkZxZnJlVy85d2VDRGlMTXVqeGpIa1NQeC9UZE8xM1VQZlY4MmhVREt4eVhLdU1mNmtwQjdVSWlDUWhRVW9xQVFCWVVvS0VSQklRb0tVVkNJZ2tJVUZLS2dFQVdGS0NoRVFTRUtDbEZRaUlKQ0ZCU2lvQkFGaFNnb1JFRWhDZ3BSVUlpQ1FoUXJzZ0FHZzRGME9tM3BlWjU0d3dPdndlcnFxaXd2TDh1elVrbUt4YWZCNjZ6SlZFaTMyNVh6czlQZ0hNWHQ3VzF3dnI2K0RzN2xjbGxlVkd1WmluRitkRjFmakVFRVFNVGw1YVg4QzlWcU5SQmpEWDRqWWk0RTMvclI0WmRnYXN4RHNWaVV6VmV2Z3lsbEJZU1lKbFZFeHVkUHpibGxBRXd6ZkZhWWI2d3dGZEw2OXZVdUw2UUJ4R0xxV1dJbUJLdElwOU9aNlpxMXRUVlpXVW5PODhoRGNVazVEY3lFbkorZHlhenM3T3pJOXZiMnhQZFpSb25Kc292b1NKb3FpSUpDb1REMmR5eTNHeHNic3JXMUpjMW1NL1o2UkFnT0pOcTBNUkh5UFdHcTFPdDFhVFFha2dTa1hGeGMzTlVqVVVENmd4RVN0Nm9nUjBCR3U5MlcwOVB4c0svVmFsS3BWT1RrNUNSUkJuQ044a2pxUWtaTGNVMzRqVUpHMUlBUkdaQnhmSHdzazhDVXhIM1Nya3RTRjVKVUo0UWx1T3U2a2Y4ZnpSdklNeWpkSWU3bTVpYjJYbWtMeVhTM2l3RmdnUDErZitKN01WQWsxOUp3b3hkSG1qVk9TS2FiT3lSS0hDSGhTaE1WTWJsY0xqakhSUWV3S09OVGo1QnBkNmFRZ1pvRFVSQUZraXZvOVhveTc3MW1JZlVJQ1hzYVNia2tsQkZXcFh0N2UyUHZ3WXFFYUlxTGtIdytieEloSmxNR0RaNmtXbVEwaHlDblJNbURpS1RWSmpjVVlvR0prSEs1a2lnRWc5M2YzNWZkM2QwZ1NnNE9EbVJXcWtiOUVSTWhxRGR3SkczQ2tFaXh6RTdhekVYeGZMZ2NXM1hSekpiZGFUcGN5Qkd0Vmt0bXBXcllQVE1UZ2dpeGFQdFo5MWhOQ3pQMFFsRnRwZ1ZrNERNdE1hOVU2NDJYcVVSS0ZqSkFKcFVxQm9Jd1IyTm4xbkliMTBHcXhWWS9pa3dlUTR5Q3R1STBZZ3BEQWFYU2VqRGxMRHZ0bzJUeUdDSU83KzlUTzgvN2VWZVlZZUQ1L0pNZ0doYngxRzZoUXY1SHpKL0xQRVFvUkVFaENncFJVSWlDUWhRVW9xQVFCWVVvS0VSQklRb0tVVkNJZ2tJVUZLS2dFQVdGS0NoRVFTRUtDbEZRaUlKQ0ZCU2lvQkFGaFNnb1JFRWhDZ2k1RWhMZyszSzE1UC8yMy92aUhNa2pCekw2di94M2Z3REFxV0hkUG04aFJRQUFBQUJKUlU1RXJrSmdnZz09XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib3B0aW9uLWxhYmVsXCI+e19fKCAnSW5oZXJpdCcsICduZXZlJyApfTwvc3Bhbj48Lz4sIHZhbHVlOiAnZGVmYXVsdCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbDogPD48aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVVBQUFCWUNBWUFBQUNqeFRwc0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGSVNVUkJWSGdCN2RXeFNzTmdHRWJodDZVRWduR3BnM0hyVUdmMURyeFRMMHlGdXRYQlRvRkFzSzNXb1l0bk1JVmdXODR6WndpSGwvOGJ0VzA3aS9iS3NseE1QdGZycDJUMEdQMW90OXZaT1ByRktNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLR0NTbnBxbXlldkxjMDdKUlZWbFByLzk4L2N1QmZSZVN2VmQvZTcrSWVmTXBRQ2pBS01Bb3dCUE1uQXB3Sk1NWEFvd0NqQUtNQXJ3SkFPWEFqekp3S1VBb3dDakFLTUFUekp3S2NDVERGd0tNQW93Q3VqOXBuUmRsOVhxSTBPWVRxOVNGRVgrMjBGUjNwZkxES0dxTGs4enl1Nm5yK3M2UXppR0lEc0hSYW5ybTV3ekgxcGdGR0FVWUJSZ0ZHQVVZQlJnRkdBVVlCUmdGR0FVWUJSZ0ZHQVVZQlJnRkdBVVlCUmdGR0FVWUJSZ0ZHQVVZQlJnRkdBVVlCUXcyV3p5TmhwbkVlMTlBYk80TnV0UTJESjlBQUFBQUVsRlRrU3VRbUNDXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwib3B0aW9uLWxhYmVsXCI+e19fKCAnTm9uZScsICduZXZlJyApfTwvc3Bhbj48Lz4sIHZhbHVlOiAnZnVsbC13aWR0aCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbDogPD48aW1nIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVVBQUFCWENBWUFBQUJTazRpNUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFGRFNVUkJWSGdCN2RVdFQ4TlFGSWZ4TTBvdVlrV3dVQkxNTUVNQWl1L3YrQTZBUUxINStqVnI5cUwzaUNaTlRyUGwrZW1ybnVTZS8renJiN3VQRVQ2ZmQzRk43dXY1N0NaMHhpakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pnTmhMOC9uekgxQjZiSnBybWFkRGJsQ2hkMThYVStyNGYvRFlseXR2N1IweXRxcXJCYjFPaWxGTGlrbmhvZ1ZHQVVZQ1RESnhrNENRREp4bDRhSUZSZ0ZHQWt3eWNaT0FrQXljWmVHaUJVWUJSZ0pNTW5HVGdKQU1uR1hob2dWRkF5dmRwMnpiR09IMi91cTRqUzBxVXpmby94cGdmZzZ4V3I1RWxKY3JEWWhGamxISVhtVktpTEpjdmNVazh0TUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvd0NqQUtNQW93Q2pBS01Bb3dDakFLTUFvNEFCUTBqS25GU1dYT2dBQUFBQkpSVTVFcmtKZ2dnPT1cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tbGFiZWxcIj57X18oICdMZWZ0JywgJ25ldmUnICl9PC9zcGFuPjwvPiwgdmFsdWU6ICdsZWZ0JyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhYmVsOiA8PjxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJYQ0FZQUFBQzVwRE82QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUZWU1VSQlZIZ0I3ZGxCU3NOUUZFYmhXeU9SU0NEWUZhallnYm9IOXo5ekRlckFPck1ZQ1FTQ21vNDk4TXFqQ1czUEI5bkFJYm4vSUl2NDg5VisvOFFSZVg0L2p4eFBxNHZGV2VoZmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0hKL3pMYnRvMjMxNWVZMi9YTmJWUlZGZnUyMDAvZXZ1OWpic013eEJTU3c5UjFIZmNQanpHM29paGlDanU5TVdWWnhxbncrQUxEQU1NQTV4bzQxOEM1QnM0MThQZ0N3d0REQU9jYU9OZkF1UWJPTmZENEFzTUF3d0RuR2pqWHdMa0d6alh3K0FMRGdPUlBxZXU2N1pPamFackpia1N1NURDYnpXZDhyTmVSbzd4YmJZLzRJVWdPVTFXWGNiVmNSbzVEZVZ0R3lXSEd6MkI4VG9YSEZ4Z0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0dHQVlZQmhnR0dBWVlCaGdHR0FZWUJoZ0cvQUlkZVVZUWxPcVE0QUFBQUFCSlJVNUVya0pnZ2c9PVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm9wdGlvbi1sYWJlbFwiPntfXyggJ1JpZ2h0JywgJ25ldmUnICl9PC9zcGFuPjwvPiwgdmFsdWU6ICdyaWdodCcgfVxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVWYWx1ZXMoICduZXZlX21ldGFfc2lkZWJhcicsIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCdDb250YWluZXInLCAnbmV2ZScgKSB9XG5cdFx0XHRcdFx0XHRpZD1cIm5ldmVfbWV0YV9jb250YWluZXJcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLWJ1dHRvbi1ncm91cCBuZXZlX21ldGFfY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyAnZGVmYXVsdCcgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250YWluZXInXSB9XG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyAnZGVmYXVsdCcgIT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250YWluZXInXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX2NvbnRhaW5lcicsICdkZWZhdWx0JyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQ+IHsgX18oICdEZWZhdWx0JywgJ25ldmUnICkgfSA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeT17ICdjb250YWluZWQnID09PSB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGFpbmVyJ10gfVxuXHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsgJ2NvbnRhaW5lZCcgIT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250YWluZXInXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX2NvbnRhaW5lcicsICdjb250YWluZWQnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD4geyBfXyggJ0NvbnRhaW5lZCcsICduZXZlJyApIH0gPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyAnZnVsbC13aWR0aCcgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250YWluZXInXSB9XG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyAnZnVsbC13aWR0aCcgIT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250YWluZXInXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX2NvbnRhaW5lcicsICdmdWxsLXdpZHRoJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQ+IHsgX18oICdGdWxsIFdpZHRoJywgJ25ldmUnICkgfSA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfZW5hYmxlX2NvbnRlbnRfd2lkdGhcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLWNoZWNrYm94IG5ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aFwiID5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDdXN0b20gQ29udGVudCBXaWR0aCAoJSknLCAnbmV2ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAoICdvbicgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aCddICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX2VuYWJsZV9jb250ZW50X3dpZHRoJywgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVWYWx1ZXMoICduZXZlX21ldGFfY29udGVudF93aWR0aCcsIHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnb24nID09PSB0aGlzLnN0YXRlLm5ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aCA/XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1yYW5nZSBuZXZlX21ldGFfY29udGVudF93aWR0aFwiID5cblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVWYWx1ZXMoICduZXZlX21ldGFfY29udGVudF93aWR0aCcsIHZhbHVlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRcdG1heD17MTAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3RlcD1cIjFcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+IDpcblx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlclBhZ2VUaXRsZUdyb3VwKCkge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgndGVtcGxhdGUnKTtcblx0XHRpZiAoICdlbGVtZW50b3JfaGVhZGVyX2Zvb3RlcicgPT09IHRlbXBsYXRlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzaG93TWV0YUVsZW1lbnRzID0gSlNPTi5wYXJzZSggdGhpcy5zdGF0ZS5uZXZlX3Bvc3RfZWxlbWVudHNfb3JkZXIgKS5pbmNsdWRlcygnbWV0YScpO1xuXHRcdGNvbnN0IHBvc3RUeXBlID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0Q3VycmVudFBvc3RUeXBlKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibnYtb3B0aW9uLWNhdGVnb3J5XCI+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17X18oJ1BhZ2UgVGl0bGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGludGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXygnVGl0bGUgYWxpZ25tZW50JywgJ25ldmUnICkgfVxuXHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfdGl0bGVfYWxpZ25tZW50XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1idXR0b24tZ3JvdXAgbmV2ZV9tZXRhX3RpdGxlX2FsaWdubWVudFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbkdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17YWxpZ25MZWZ0SWNvbn1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJudi1hbGlnbi1sZWZ0XCJcblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyAnbGVmdCcgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV90aXRsZV9hbGlnbm1lbnQnXSB9XG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyAnbGVmdCcgIT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV90aXRsZV9hbGlnbm1lbnQnXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX3RpdGxlX2FsaWdubWVudCcsICdsZWZ0JyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17YWxpZ25DZW50ZXJJY29ufVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm52LWFsaWduLWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsgJ2NlbnRlcicgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV90aXRsZV9hbGlnbm1lbnQnXSB9XG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyAnY2VudGVyJyAhPT0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX3RpdGxlX2FsaWdubWVudCddIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVWYWx1ZXMoICduZXZlX21ldGFfdGl0bGVfYWxpZ25tZW50JywgJ2NlbnRlcicgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGljb249e2FsaWduUmlnaHRJY29ufVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm52LWFsaWduLXJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyAncmlnaHQnID09PSB0aGlzLnN0YXRlWyduZXZlX21ldGFfdGl0bGVfYWxpZ25tZW50J10gfVxuXHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsgJ3JpZ2h0JyAhPT0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX3RpdGxlX2FsaWdubWVudCddIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVWYWx1ZXMoICduZXZlX21ldGFfdGl0bGVfYWxpZ25tZW50JywgJ3JpZ2h0JyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0c2hvd01ldGFFbGVtZW50cyAmJiAncG9zdCcgPT09IHBvc3RUeXBlID9cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfYXV0aG9yX2F2YXRhclwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLWNoZWNrYm94IG5ldmVfbWV0YV9hdXRob3JfYXZhdGFyXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQXV0aG9yIEF2YXRhcicsICduZXZlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAoICdvbicgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9hdXRob3JfYXZhdGFyJ10gKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVZhbHVlcyggJ25ldmVfbWV0YV9hdXRob3JfYXZhdGFyJywgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPiA6XG5cdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1ldGFTaWRlYmFyLmVuYWJsZV9wcm8gJiYgc2hvd01ldGFFbGVtZW50cyAmJiAncG9zdCcgPT09IHBvc3RUeXBlID9cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfcmVhZGluZ190aW1lXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtY2hlY2tib3ggbmV2ZV9tZXRhX3JlYWRpbmdfdGltZVwiID5cblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1JlYWRpbmcgVGltZScsICduZXZlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAoICdvbicgPT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9yZWFkaW5nX3RpbWUnXSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX3JlYWRpbmdfdGltZScsICggdmFsdWUgPyAnb24nIDogJ29mZicgKSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD4gOlxuXHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyRWxlbWVudHNHcm91cCgpIHtcblx0XHRsZXQgc2V0dGluZ3MgPSB7XG5cdFx0XHRlbGVtZW50czoge1xuXHRcdFx0XHQndGl0bGUnOiBfXyggJ1Bvc3QgVGl0bGUnLCAnbmV2ZScgKSxcblx0XHRcdFx0J21ldGEnOiBfXyggJ1Bvc3QgTWV0YScsICduZXZlJyksXG5cdFx0XHRcdCd0aHVtYm5haWwnOiBfXyggJ0ZlYXR1cmVkIEltYWdlJywgJ25ldmUnKSxcblx0XHRcdFx0J2NvbnRlbnQnOiBfXyggJ0NvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0XHQndGFncyc6IF9fKCAnVGFncycsICduZXZlJyksXG5cdFx0XHRcdCdjb21tZW50cyc6IF9fKCdDb21tZW50cycsICduZXZlJyApLFxuXHRcdFx0XHQncG9zdC1uYXZpZ2F0aW9uJzogX18oICdQb3N0IE5hdmlnYXRpb24nLCAnbmV2ZScpXG5cdFx0XHR9LFxuXHRcdFx0ZGVmYXVsdDogbWV0YVNpZGViYXIuZWxlbWVudHNEZWZhdWx0T3JkZXJcblx0XHR9O1xuXG5cdFx0aWYgKCBtZXRhU2lkZWJhci5lbmFibGVfcHJvICkge1xuXHRcdFx0c2V0dGluZ3MuZWxlbWVudHNbJ2F1dGhvci1iaW9ncmFwaHknXSA9IF9fKCAnQXV0aG9yIEJpb2dyYXBoeScsICduZXZlJyApO1xuXHRcdFx0c2V0dGluZ3MuZWxlbWVudHNbJ3JlbGF0ZWQtcG9zdHMnXSAgICA9IF9fKCAnUmVsYXRlZCBQb3N0cycsICduZXZlJyApO1xuXHRcdFx0c2V0dGluZ3MuZWxlbWVudHNbJ3NoYXJpbmctaWNvbnMnXSAgICA9IF9fKCAnU2hhcmluZyBJY29ucycsICduZXZlJyApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgndGVtcGxhdGUnKTtcblx0XHRjb25zdCBwb3N0VHlwZSA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEN1cnJlbnRQb3N0VHlwZSgpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm52LW9wdGlvbi1jYXRlZ29yeVwiPlxuXHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdFbGVtZW50cycsICduZXZlJyl9XG5cdFx0XHRcdFx0aW50aWFsT3Blbj17IHRydWUgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2VsZW1lbnRvcl9oZWFkZXJfZm9vdGVyJyAhPT0gdGVtcGxhdGUgJiYgJ3Bvc3QnID09PSBwb3N0VHlwZSA/XG5cdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmV2ZV9wb3N0X2VsZW1lbnRzX29yZGVyXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtc29ydGFibGVcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PFNvcnRhYmxlSXRlbXMgc3RhdGVVcGRhdGU9e3RoaXMudXBkYXRlVmFsdWVzfSBpZD1cIm5ldmVfcG9zdF9lbGVtZW50c19vcmRlclwiIGRhdGE9e3NldHRpbmdzfS8+XG5cdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+IDpcblx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGlkPVwibmV2ZV9tZXRhX2Rpc2FibGVfaGVhZGVyXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1jaGVja2JveCBuZXZlX21ldGFfZGlzYWJsZV9oZWFkZXJcIiA+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGlzYWJsZSBIZWFkZXInLCAnbmV2ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAoICdvbicgPT09IHRoaXMucHJvcHMubWV0YVZhbHVlKCduZXZlX21ldGFfZGlzYWJsZV9oZWFkZXInKSApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVZhbHVlcyggJ25ldmVfbWV0YV9kaXNhYmxlX2hlYWRlcicsICggdmFsdWUgPyAnb24nIDogJ29mZicgKSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9XCJuZXZlX21ldGFfZGlzYWJsZV9mb290ZXJcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLWNoZWNrYm94IG5ldmVfbWV0YV9kaXNhYmxlX2Zvb3RlclwiID5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlIEZvb3RlcicsICduZXZlJyApIH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICggJ29uJyA9PT0gdGhpcy5wcm9wcy5tZXRhVmFsdWUoJ25ldmVfbWV0YV9kaXNhYmxlX2Zvb3RlcicpICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVmFsdWVzKCAnbmV2ZV9tZXRhX2Rpc2FibGVfZm9vdGVyJywgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2VsZW1lbnRvcl9oZWFkZXJfZm9vdGVyJyAhPT0gdGVtcGxhdGUgJiYgICdwYWdlJyA9PT0gcG9zdFR5cGUgP1xuXHRcdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRpZD1cIm5ldmVfbWV0YV9kaXNhYmxlX3RpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtY2hlY2tib3ggbmV2ZV9tZXRhX2Rpc2FibGVfdGl0bGVcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlIFRpdGxlJywgJ25ldmUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICggJ29uJyA9PT0gdGhpcy5wcm9wcy5tZXRhVmFsdWUoJ25ldmVfbWV0YV9kaXNhYmxlX3RpdGxlJykgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZVZhbHVlcyggJ25ldmVfbWV0YV9kaXNhYmxlX3RpdGxlJywgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPiA6XG5cdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlclJlc2V0QnV0dG9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9e19fKCdSZXNldCBhbGwgb3B0aW9ucyB0byBkZWZhdWx0JywgJ25ldmUnKX1cblx0XHRcdFx0aWQ9XCJuZXZlX3Jlc2V0X2FsbFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm52LXJlc2V0LWFsbCBjb21wb25lbnRzLXBhbmVsX19ib2R5IGlzLW9wZW5lZFwiID5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGljb249XCJpbWFnZS1yb3RhdGVcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm52LXJlc2V0LW1ldGFcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlc2V0QWxsKCk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1JldHVybiB0byBjdXN0b21pemVyIHNldHRpbmdzJywgJ25ldmUnICkgfVxuXHRcdFx0XHRcdHNob3dUb29sdGlwPXsgdHJ1ZSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdHt0aGlzLnJlbmRlclBhZ2VMYXlvdXRHcm91cCgpfVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJQYWdlVGl0bGVHcm91cCgpfVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJFbGVtZW50c0dyb3VwKCl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlclJlc2V0QnV0dG9uKCl9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoW1xuXG5cdHdpdGhEaXNwYXRjaCgoIGRpc3BhdGNoLCBwcm9wcyApID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0TWV0YVZhbHVlOiAoIGlkLCB2YWx1ZSApID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe21ldGE6IHtbaWRdOiB2YWx1ZX19KTtcblx0XHRcdH0sXG5cdFx0XHRzZXRBbGxNZXRhczogKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe21ldGE6IHZhbHVlfSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKCBzZWxlY3QsIHByb3BzICkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZXRhVmFsdWU6IChpZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVtpZF07XG5cdFx0XHR9LFxuXHRcdFx0YWxsTWV0YTogc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVxuXHRcdH07XG5cdH0pXG5cbl0pKCBNZXRhRmllbGRzTWFuYWdlciApO1xuIiwiLyogZ2xvYmFsIG1ldGFTaWRlYmFyICovXG5jb25zdCB7IFBsdWdpblNpZGViYXIsIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gfSA9IHdwLmVkaXRQb3N0O1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IE1ldGFGaWVsZHNNYW5hZ2VyIGZyb20gJy4vTWV0YUZpZWxkc01hbmFnZXInO1xuY29uc3QgeyB1c2VTaG9ydGN1dCB9ID0gd3Aua2V5Ym9hcmRTaG9ydGN1dHM7XG5jb25zdCB7IHVzZUNhbGxiYWNrIH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuY29uc3QgU2lkZWJhciA9IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRkaXNwYXRjaCggJ2NvcmUva2V5Ym9hcmQtc2hvcnRjdXRzJyApLnJlZ2lzdGVyU2hvcnRjdXQoIHtcblx0XHRcdG5hbWU6ICduZXZlL29wZW4tbWV0YS1zaWRlYmFyJyxcblx0XHRcdGNhdGVnb3J5OiAnYmxvY2snLFxuXHRcdFx0ZGVzY3JpcHRpb246IF9fKCAnT3BlbiBOZXZlIG1ldGEgc2lkZWJhcicsICduZXZlJyApLFxuXHRcdFx0a2V5Q29tYmluYXRpb246IHtcblx0XHRcdFx0bW9kaWZpZXI6ICdhY2Nlc3MnLFxuXHRcdFx0XHRjaGFyYWN0ZXI6ICdzJ1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGVtcGxhdGU6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCd0ZW1wbGF0ZScpXG5cdFx0fTtcblx0fSApICkoIGZ1bmN0aW9uKCB0ZW1wbGF0ZURhdGEgKSB7XG5cblx0dXNlU2hvcnRjdXQoXG5cdFx0J25ldmUvb3Blbi1tZXRhLXNpZGViYXInLFxuXHRcdHVzZUNhbGxiYWNrKFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50QWN0aXZlU2lkZWJhciA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0LXBvc3QnICkuZ2V0QWN0aXZlR2VuZXJhbFNpZGViYXJOYW1lKCk7XG5cdFx0XHRcdGlmICggY3VycmVudEFjdGl2ZVNpZGViYXIgKSB7XG5cdFx0XHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvZWRpdC1wb3N0JyApLmNsb3NlR2VuZXJhbFNpZGViYXIoIGN1cnJlbnRBY3RpdmVTaWRlYmFyICk7XG5cdFx0XHRcdFx0aWYgKCAnbWV0YS1zaWRlYmFyL25ldmUtbWV0YS1zaWRlYmFyJyAhPT0gY3VycmVudEFjdGl2ZVNpZGViYXIgKSB7XG5cdFx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9lZGl0LXBvc3QnICkub3BlbkdlbmVyYWxTaWRlYmFyKCAnbWV0YS1zaWRlYmFyL25ldmUtbWV0YS1zaWRlYmFyJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9lZGl0LXBvc3QnICkub3BlbkdlbmVyYWxTaWRlYmFyKCAnbWV0YS1zaWRlYmFyL25ldmUtbWV0YS1zaWRlYmFyJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0W11cblx0XHQpXG5cdCk7XG5cblx0aWYgKCAnZWxlbWVudG9yX2NhbnZhcycgPT09IHRlbXBsYXRlRGF0YS50ZW1wbGF0ZSApIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV2ZS1wYWdlLXNldHRpbmdzLW5vdGljZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLXBhZ2Utc2V0dGluZ3Mtbm90aWNlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0bGV0IHNpZGViYXJMYWJlbCA9IF9fKCAnTmV2ZSBPcHRpb25zJywgJ25ldmUnICk7XG5cdGlmICggbWV0YVNpZGViYXIud2hpdGVMYWJlbGVkICkge1xuXHRcdHNpZGViYXJMYWJlbCA9IG1ldGFTaWRlYmFyLndoaXRlTGFiZWxUaGVtZU5hbWUgPyBtZXRhU2lkZWJhci53aGl0ZUxhYmVsVGhlbWVOYW1lICsgJyAnICsgX18oICdPcHRpb25zJywgJ25ldmUnICkgOiBfXyggJ09wdGlvbnMnLCAnbmV2ZScgKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtXG5cdFx0XHRcdHRhcmdldD1cIm5ldmUtbWV0YS1zaWRlYmFyXCJcblx0XHRcdD5cblx0XHRcdFx0eyBzaWRlYmFyTGFiZWwgfVxuXHRcdFx0PC9QbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtPlxuXHRcdFx0PFBsdWdpblNpZGViYXJcblx0XHRcdFx0bmFtZT1cIm5ldmUtbWV0YS1zaWRlYmFyXCJcblx0XHRcdFx0dGl0bGU9eyBzaWRlYmFyTGFiZWwgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TWV0YUZpZWxkc01hbmFnZXIvPlxuXHRcdFx0PC9QbHVnaW5TaWRlYmFyPlxuXHRcdDwvPlxuXHQpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiaW1wb3J0IHtzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50LCBzb3J0YWJsZUhhbmRsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBhcnJheU1vdmUgZnJvbSAnYXJyYXktbW92ZSc7XG5cbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBzb3J0YWJsZUhhbmRsZSggKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGktc29ydGFibGUtaGFuZGxlXCI+XG5cdFx0XHQ8QnV0dG9uIGlzVGVydGlhcnkgaWNvbj1cIm1lbnVcIi8+XG5cdFx0PC9kaXY+XG5cdCk7XG59KTtcblxuY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KCAoe3ZhbHVlLCBsYWJlbCwgdG9nZ2xlfSkgPT4ge1xuXHRjb25zdCBpY29uID0gJ3Zpc2liaWxpdHknO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgdGktc29ydGFibGUtaXRlbS1hcmVhIHRpLXNvcnRhYmxlLWl0ZW0tYXJlYS0ke3ZhbHVlfWB9ID5cblx0XHQ8ZGl2IGtleT17dmFsdWV9IGNsYXNzTmFtZT0ndGktc29ydGFibGUtaXRlbSc+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGlzVGVydGlhcnlcblx0XHRcdFx0aWNvbj17IGljb24gfVxuXHRcdFx0XHRsYWJlbD17IF9fKCAnVG9nZ2xlJywgJ25ldmUnICkgfVxuXHRcdFx0XHRzaG93VG9vbHRpcD17IHRydWUgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJ0aS1zb3J0YWJsZS1pdGVtLXRvZ2dsZVwiXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0dG9nZ2xlKHZhbHVlKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aS1zb3J0YWJsZS1pdGVtLWxhYmVsXCI+e2xhYmVsfTwvZGl2PlxuXHRcdFx0PERyYWdIYW5kbGUgLz5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn0gKTtcblxuY29uc3QgU29ydGFibGVMaXN0ID0gc29ydGFibGVDb250YWluZXIoXG5cdCh7Y2hpbGRyZW59KSA9PiB7XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLXNvcnRhYmxlLWl0ZW1zXCI+e2NoaWxkcmVufTwvZGl2Pjtcblx0fVxuKTtcblxuY2xhc3MgU29ydGFibGVJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLnByb3BzLmRhdGEuZWxlbWVudHM7XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlcyA9IEpTT04ucGFyc2UoIHRoaXMucHJvcHMubWV0YUZpZWxkVmFsdWUgKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNvcnRhYmxlTGlzdFxuXHRcdFx0XHRcdG9uU29ydEVuZD17dGhpcy5wcm9wcy5vblNvcnRFbmR9XG5cdFx0XHRcdFx0bG9ja0F4aXM9J3knXG5cdFx0XHRcdFx0dXNlRHJhZ0hhbmRsZVxuXHRcdFx0XHRcdGhpZGVTb3J0YWJsZUdob3N0PXtmYWxzZX1cblx0XHRcdFx0XHRvblNvcnRTdGFydD17dGhpcy5wcm9wcy5vblNvcnRTdGFydH1cblx0XHRcdFx0PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y3VycmVudFZhbHVlcy5tYXAoXG5cdFx0XHRcdFx0XHQodmFsdWUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICggdW5kZWZpbmVkID09PSBlbGVtZW50c1t2YWx1ZV0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PFNvcnRhYmxlSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke3ZhbHVlfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17ZWxlbWVudHNbdmFsdWVdfVxuXHRcdFx0XHRcdFx0XHRcdFx0dG9nZ2xlPXt0aGlzLnByb3BzLnRvZ2dsZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8L1NvcnRhYmxlTGlzdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaXNhYmxlZC1pdGVtcyBuZXZlLW1ldGEtY29udHJvbFwiPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZWxlbWVudHMpLm1hcChcblx0XHRcdFx0XHRcdCh2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKCBjdXJyZW50VmFsdWVzLmluY2x1ZGVzKCB2YWx1ZSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aS1zb3J0YWJsZS1pdGVtLWFyZWEnIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aS1zb3J0YWJsZS1pdGVtIGhpZGRlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzVGVydGlhcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj0naGlkZGVuJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVG9nZ2xlJywgJ25ldmUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17IHRydWUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aS1zb3J0YWJsZS1pdGVtLXRvZ2dsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50b2dnbGUodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpLXNvcnRhYmxlLWl0ZW0tbGFiZWxcIj57ZWxlbWVudHNbdmFsdWVdfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShbXG5cdHdpdGhEaXNwYXRjaCgoIGRpc3BhdGNoLCBwcm9wcywge3NlbGVjdH0gKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG9uU29ydFN0YXJ0OiBmdW5jdGlvbigge2luZGV4fSApIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpLXNvcnRhYmxlLWl0ZW0tYXJlYTpudGgtb2YtdHlwZSgnICsgKCBpbmRleCArIDEgKSArICcpJyApLnN0eWxlLmNvbG9yID0gJyNjY2MnO1xuXHRcdFx0fSxcblx0XHRcdG9uU29ydEVuZDogZnVuY3Rpb24oIHtvbGRJbmRleCwgbmV3SW5kZXh9ICkge1xuXHRcdFx0XHRjb25zdCBtZXRhVmFsdWUgPSBKU09OLnBhcnNlKCBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpW3Byb3BzLmlkXSB8fCBwcm9wcy5kYXRhLmRlZmF1bHQgKTtcblx0XHRcdFx0Y29uc3QgbmV3RWxlbWVudHMgPSBhcnJheU1vdmUobWV0YVZhbHVlLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xuXHRcdFx0XHRwcm9wcy5zdGF0ZVVwZGF0ZSggcHJvcHMuaWQsIEpTT04uc3RyaW5naWZ5KCBuZXdFbGVtZW50cyApICk7XG5cdFx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHttZXRhOiB7W3Byb3BzLmlkXTogSlNPTi5zdHJpbmdpZnkoIG5ld0VsZW1lbnRzICkgfX0pO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGktc29ydGFibGUtaXRlbS1hcmVhOm50aC1vZi10eXBlKCcgKyAoIG5ld0luZGV4ICsgMSApICsgJyknICkuc3R5bGUuY29sb3IgPSBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHRvZ2dsZTogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRcdFx0bGV0IG1ldGFWYWx1ZSA9IEpTT04ucGFyc2UoIHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbcHJvcHMuaWRdIHx8IHByb3BzLmRhdGEuZGVmYXVsdCApO1xuXHRcdFx0XHRpZiAoIG1ldGFWYWx1ZS5pbmNsdWRlcyggdmFsdWUgKSApIHtcblx0XHRcdFx0XHRtZXRhVmFsdWUgPSBtZXRhVmFsdWUuZmlsdGVyKCBlID0+IGUgIT09IHZhbHVlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWV0YVZhbHVlLnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvcHMuc3RhdGVVcGRhdGUoIHByb3BzLmlkLCBKU09OLnN0cmluZ2lmeSggbWV0YVZhbHVlICkgKTtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe21ldGE6IHtbcHJvcHMuaWRdOiBKU09OLnN0cmluZ2lmeShtZXRhVmFsdWUpIH19KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QsIHByb3BzKSA9PiB7XG5cdFx0bGV0IG1ldGFWYWx1ZSAgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpW3Byb3BzLmlkXTtcblx0XHRyZXR1cm4geyBtZXRhRmllbGRWYWx1ZTogKCBtZXRhVmFsdWUgfHwgcHJvcHMuZGF0YS5kZWZhdWx0ICkgfTtcblx0fSlcblxuXSkoIFNvcnRhYmxlSXRlbXMgKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFBhdGgsXG5cdFJlY3QsXG5cdFNWR1xufSA9IHdwLmNvbXBvbmVudHM7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGNvbnN0IG5ldmVJY29uID0gKHtjbGFzc05hbWV9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFNWRyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDE3IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ25ldmUtaWNvbicsIGNsYXNzTmFtZSBdKX0+XG5cdFx0XHQ8UGF0aCBkPVwiTTQuNzc4MjIgMTAuMjEzM1YxOS4zMjg3SDAuMTE4MzQ3VjAuODAyMjI0QzAuMTE4MzQ3IDAuNzEyNTk0IDAuMTQ1NTk4IDAuNjQ5ODU0IDAuMjAwMDk5IDAuNjE0MDAyQzAuMjU0NjAxIDAuNTc4MTQ5IDAuMzU0NTE5IDAuNjIyOTY0IDAuNDk5ODU3IDAuNzQ4NDQ2TDEyLjEzNTkgMTAuMjEzM1YxLjA0NDIySDE2Ljc5NThWMTkuNTk3NkMxNi43OTU4IDE5LjcwNTEgMTYuNzY4NSAxOS43NzI0IDE2LjcxNCAxOS43OTkyQzE2LjY1OTUgMTkuODI2MSAxNi41NTk2IDE5Ljc3NjggMTYuNDE0MyAxOS42NTE0TDQuNzc4MjIgMTAuMjEzM1pcIi8+XG5cdFx0XHQ8UmVjdCB4PVwiMC4xMTgzNDdcIiB5PVwiMjIuMzMzNFwiIHdpZHRoPVwiMTYuNjc3NFwiIGhlaWdodD1cIjEuNTE2MTNcIi8+XG5cdFx0PC9TVkc+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWxpZ25SaWdodEljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFNWRyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE3IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8UGF0aCBkPVwiTTE2LjUgMS4yNUg3LjYxMTExTTE2LjUgOUgwLjVNMTYuNSAxNi43NUg3LjYxMTExXCIgc3Ryb2tlV2lkdGg9XCIxLjVcIi8+XG5cdFx0PC9TVkc+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWxpZ25DZW50ZXJJY29uID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTVkcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxNyAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PFBhdGggZD1cIk0xMi45NDQ0IDEuMjVINC4wNTU1Nk0xNi41IDlIMC41TTEyLjk0NDQgMTYuNzVINC4wNTU1NlwiIHN0cm9rZVdpZHRoPVwiMS41XCIvPlxuXHRcdDwvU1ZHPlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFsaWduTGVmdEljb24gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFNWRyB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE3IDE4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8UGF0aCBkPVwiTTAuNSAxLjI1SDkuMzg4ODlNMC41IDlIMTYuNU0wLjUgMTYuNzVIOS4zODg4OVwiIHN0cm9rZVdpZHRoPVwiMS41XCIvPlxuXHRcdDwvU1ZHPlxuXHQpO1xufTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyUGx1Z2luIH0gPSB3cC5wbHVnaW5zO1xuY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgeyBuZXZlSWNvbiB9IGZyb20gJy4vaGVscGVycy9pY29ucy5qcyc7XG5cbmNvbnN0IGljb24gPSBtZXRhU2lkZWJhci53aGl0ZUxhYmVsZWQgPyAnaGFtbWVyJyA6IG5ldmVJY29uO1xuXG5yZWdpc3RlclBsdWdpbiggJ21ldGEtc2lkZWJhcicsIHtcblx0aWNvbjogPEljb24gaWNvbj17IGljb24gfSAvPixcblx0cmVuZGVyOiBTaWRlYmFyXG59ICk7XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9