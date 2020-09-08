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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
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
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

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
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
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
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
  throw new TypeError("Invalid attempt to spread non-iterable instance");
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
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
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
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
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
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ "./node_modules/array-move/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-move/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const arrayMoveMutate = (array, from, to) => {
	const startIndex = from < 0 ? array.length + from : from;

	if (startIndex >= 0 && startIndex < array.length) {
		const endIndex = to < 0 ? array.length + to : to;

		const [item] = array.splice(from, 1);
		array.splice(endIndex, 0, item);
	}
};

const arrayMove = (array, from, to) => {
	array = [...array];
	arrayMoveMutate(array, from, to);
	return array;
};

module.exports = arrayMove;
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
/** @license React v16.9.0
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

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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

/***/ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-visibility-sensor/dist/visibility-sensor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-dom */ "react-dom"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Tell whether the rect is visible, given an offset
//
// return: boolean
module.exports = function (offset, rect, containmentRect) {
  var offsetDir = offset.direction;
  var offsetVal = offset.value; // Rules for checking different kind of offsets. In example if the element is
  // 90px below viewport and offsetTop is 100, it is considered visible.

  switch (offsetDir) {
    case 'top':
      return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;

    case 'left':
      return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;

    case 'bottom':
      return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;

    case 'right':
      return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VisibilitySensor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function normalizeRect(rect) {
  if (rect.width === undefined) {
    rect.width = rect.right - rect.left;
  }

  if (rect.height === undefined) {
    rect.height = rect.bottom - rect.top;
  }

  return rect;
}

var VisibilitySensor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VisibilitySensor, _React$Component);

  function VisibilitySensor(props) {
    var _this;

    _classCallCheck(this, VisibilitySensor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return _this.props.containment || window;
    });

    _defineProperty(_assertThisInitialized(_this), "addEventListener", function (target, event, delay, throttle) {
      if (!_this.debounceCheck) {
        _this.debounceCheck = {};
      }

      var timeout;
      var func;

      var later = function later() {
        timeout = null;

        _this.check();
      };

      if (throttle > -1) {
        func = function func() {
          if (!timeout) {
            timeout = setTimeout(later, throttle || 0);
          }
        };
      } else {
        func = function func() {
          clearTimeout(timeout);
          timeout = setTimeout(later, delay || 0);
        };
      }

      var info = {
        target: target,
        fn: func,
        getLastTimeout: function getLastTimeout() {
          return timeout;
        }
      };
      target.addEventListener(event, info.fn);
      _this.debounceCheck[event] = info;
    });

    _defineProperty(_assertThisInitialized(_this), "startWatching", function () {
      if (_this.debounceCheck || _this.interval) {
        return;
      }

      if (_this.props.intervalCheck) {
        _this.interval = setInterval(_this.check, _this.props.intervalDelay);
      }

      if (_this.props.scrollCheck) {
        _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
      }

      if (_this.props.resizeCheck) {
        _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
      } // if dont need delayed call, check on load ( before the first interval fires )


      !_this.props.delayedCall && _this.check();
    });

    _defineProperty(_assertThisInitialized(_this), "stopWatching", function () {
      if (_this.debounceCheck) {
        // clean up event listeners and their debounce callers
        for (var debounceEvent in _this.debounceCheck) {
          if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
            var debounceInfo = _this.debounceCheck[debounceEvent];
            clearTimeout(debounceInfo.getLastTimeout());
            debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
            _this.debounceCheck[debounceEvent] = null;
          }
        }
      }

      _this.debounceCheck = null;

      if (_this.interval) {
        _this.interval = clearInterval(_this.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "check", function () {
      var el = _this.node;
      var rect;
      var containmentRect; // if the component has rendered to null, dont update visibility

      if (!el) {
        return _this.state;
      }

      rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));

      if (_this.props.containment) {
        var containmentDOMRect = _this.props.containment.getBoundingClientRect();

        containmentRect = {
          top: containmentDOMRect.top,
          left: containmentDOMRect.left,
          bottom: containmentDOMRect.bottom,
          right: containmentDOMRect.right
        };
      } else {
        containmentRect = {
          top: 0,
          left: 0,
          bottom: window.innerHeight || document.documentElement.clientHeight,
          right: window.innerWidth || document.documentElement.clientWidth
        };
      } // Check if visibility is wanted via offset?


      var offset = _this.props.offset || {};
      var hasValidOffset = _typeof(offset) === "object";

      if (hasValidOffset) {
        containmentRect.top += offset.top || 0;
        containmentRect.left += offset.left || 0;
        containmentRect.bottom -= offset.bottom || 0;
        containmentRect.right -= offset.right || 0;
      }

      var visibilityRect = {
        top: rect.top >= containmentRect.top,
        left: rect.left >= containmentRect.left,
        bottom: rect.bottom <= containmentRect.bottom,
        right: rect.right <= containmentRect.right
      }; // https://github.com/joshwnj/react-visibility-sensor/pull/114

      var hasSize = rect.height > 0 && rect.width > 0;
      var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right; // check for partial visibility

      if (hasSize && _this.props.partialVisibility) {
        var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left; // account for partial visibility on a single edge

        if (typeof _this.props.partialVisibility === "string") {
          partialVisible = visibilityRect[_this.props.partialVisibility];
        } // if we have minimum top visibility set by props, lets check, if it meets the passed value
        // so if for instance element is at least 200px in viewport, then show it.


        isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
      } // Deprecated options for calculating offset.


      if (typeof offset.direction === "string" && typeof offset.value === "number") {
        console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
        isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
      }

      var state = _this.state; // notify the parent when the value changes

      if (_this.state.isVisible !== isVisible) {
        state = {
          isVisible: isVisible,
          visibilityRect: visibilityRect
        };

        _this.setState(state);

        if (_this.props.onChange) _this.props.onChange(isVisible);
      }

      return state;
    });

    _this.state = {
      isVisible: null,
      visibilityRect: {}
    };
    return _this;
  }

  _createClass(VisibilitySensor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active) {
        this.startWatching();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopWatching();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // re-register node in componentDidUpdate if children diffs [#103]
      this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);

      if (this.props.active && !prevProps.active) {
        this.setState({
          isVisible: null,
          visibilityRect: {}
        });
        this.startWatching();
      } else if (!this.props.active) {
        this.stopWatching();
      }
    }
  }, {
    key: "roundRectDown",
    value: function roundRectDown(rect) {
      return {
        top: Math.floor(rect.top),
        left: Math.floor(rect.left),
        bottom: Math.floor(rect.bottom),
        right: Math.floor(rect.right)
      };
    }
    /**
     * Check if the element is within the visible viewport
     */

  }, {
    key: "render",
    value: function render() {
      if (this.props.children instanceof Function) {
        return this.props.children({
          isVisible: this.state.isVisible,
          visibilityRect: this.state.visibilityRect
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
    }
  }]);

  return VisibilitySensor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(VisibilitySensor, "defaultProps", {
  active: true,
  partialVisibility: false,
  minTopValue: 0,
  scrollCheck: false,
  scrollDelay: 250,
  scrollThrottle: -1,
  resizeCheck: false,
  resizeDelay: 250,
  resizeThrottle: -1,
  intervalCheck: true,
  intervalDelay: 100,
  delayedCall: false,
  offset: {},
  containment: null,
  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
});

_defineProperty(VisibilitySensor, "propTypes", {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
  delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }), // deprecated offset property
  prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  })]),
  scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
  minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
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


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/background/BackgroundComponent.js":
/*!***********************************************!*\
  !*** ./src/background/BackgroundComponent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ColorControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ColorControl */ "./src/common/ColorControl.js");
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

/* jshint esversion: 6 */

/* global wp */


var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var MediaUpload = wp.blockEditor.MediaUpload;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    RangeControl = _wp$components.RangeControl,
    FocalPointPicker = _wp$components.FocalPointPicker,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    Placeholder = _wp$components.Placeholder;

var BackgroundComponent = /*#__PURE__*/function (_Component) {
  _inherits(BackgroundComponent, _Component);

  var _super = _createSuper(BackgroundComponent);

  function BackgroundComponent(props) {
    var _this;

    _classCallCheck(this, BackgroundComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    _this.state = {
      type: value.type || 'color',
      imageUrl: value.imageUrl || '',
      focusPoint: value.focusPoint || {
        x: 0.5,
        y: 0.5
      },
      colorValue: value.colorValue || '#ffffff',
      overlayColorValue: value.overlayColorValue || '',
      overlayOpacity: value.overlayOpacity || 50,
      fixed: value.fixed || false,
      useFeatured: value.useFeatured || false
    };
    return _this;
  }

  _createClass(BackgroundComponent, [{
    key: "getButtons",
    value: function getButtons() {
      var types = ['color', 'image'];
      var labels = {
        color: __('Color', 'neve'),
        image: __('Image', 'neve')
      };
      var buttons = [];
      var self = this;
      types.map(function (type, index) {
        buttons.push( /*#__PURE__*/React.createElement(Button, {
          key: index,
          isPrimary: self.state.type === type,
          isSecondary: self.state.type !== type,
          onClick: function onClick(e) {
            self.updateSetting({
              type: type
            });
          }
        }, labels[type]));
      });
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      return /*#__PURE__*/React.createElement(Fragment, null, this.props.control.params.label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, this.props.control.params.label), /*#__PURE__*/React.createElement("div", {
        className: "control--top-toolbar"
      }, /*#__PURE__*/React.createElement(ButtonGroup, {
        className: "neve-background-type-control"
      }, this.getButtons())), /*#__PURE__*/React.createElement("div", {
        className: "control--body"
      }, this.state.type === 'color' && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_common_ColorControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(colorValue) {
          self.updateSetting({
            colorValue: colorValue
          });
        },
        selectedColor: this.state.colorValue,
        label: __('Color', 'neve')
      }), /*#__PURE__*/React.createElement("div", {
        className: "neve-color-preview",
        style: {
          backgroundColor: this.state.colorValue
        }
      })), this.state.type === 'image' && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Use Featured Image', 'neve'),
        checked: this.state.useFeatured,
        onChange: function onChange(useFeatured) {
          _this2.updateSetting({
            useFeatured: useFeatured
          });
        }
      }), !this.state.imageUrl ? /*#__PURE__*/React.createElement(Placeholder, {
        icon: "format-image",
        label: this.state.useFeatured ? __('Fallback Image', 'neve') : __('Image', 'neve')
      }, /*#__PURE__*/React.createElement("p", null, __('Select from the Media Library or upload a new image', 'neve')), /*#__PURE__*/React.createElement(MediaUpload, {
        onSelect: function onSelect(imageData) {
          _this2.updateSetting({
            imageUrl: imageData.url
          });
        },
        allowedTypes: ['image'],
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement(Button, {
            isSecondary: true,
            onClick: open
          }, __('Add Image', 'neve'));
        }
      })) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Button, {
        className: "remove-image",
        isDestructive: true,
        isLink: true,
        onClick: function onClick() {
          _this2.updateSetting({
            imageUrl: ''
          });
        }
      }, /*#__PURE__*/React.createElement(Dashicon, {
        icon: "no"
      }), this.state.useFeatured ? __('Remove Fallback Image', 'neve') : __('Remove Image', 'neve')), /*#__PURE__*/React.createElement(FocalPointPicker, {
        url: this.state.imageUrl,
        value: this.state.focusPoint,
        onChange: function onChange(val) {
          var newPoint = {
            x: parseFloat(val.x).toFixed(2),
            y: parseFloat(val.y).toFixed(2)
          };

          _this2.updateSetting({
            focusPoint: newPoint
          });
        }
      })), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Fixed Background', 'neve'),
        checked: this.state.fixed,
        onChange: function onChange(fixed) {
          _this2.updateSetting({
            fixed: fixed
          });
        }
      }), /*#__PURE__*/React.createElement(_common_ColorControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selectedColor: this.state.overlayColorValue,
        onChange: function onChange(overlayColorValue) {
          self.updateSetting({
            overlayColorValue: overlayColorValue
          });
        },
        label: __('Overlay Color', 'neve')
      }), /*#__PURE__*/React.createElement("div", {
        className: "neve-color-preview",
        style: {
          backgroundColor: this.state.overlayColorValue
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __('Overlay Opacity', 'neve'),
        value: this.state.overlayOpacity,
        onChange: function onChange(overlayOpacity) {
          _this2.updateSetting({
            overlayOpacity: overlayOpacity
          });
        },
        min: "0",
        max: "100"
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this3.updateSetting(e.detail.value);
      });
    }
  }, {
    key: "updateSetting",
    value: function updateSetting(newValues) {
      this.setState(newValues);
      this.props.control.setting.set(_objectSpread(_objectSpread({}, this.props.control.setting.get()), newValues));
    }
  }]);

  return BackgroundComponent;
}(Component);

BackgroundComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundComponent);

/***/ }),

/***/ "./src/background/Control.js":
/*!***********************************!*\
  !*** ./src/background/Control.js ***!
  \***********************************/
/*! exports provided: BackgroundControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundControl", function() { return BackgroundControl; });
/* harmony import */ var _BackgroundComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundComponent.js */ "./src/background/BackgroundComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var BackgroundControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_BackgroundComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/button-appearance/ButtonAppearanceComponent.js":
/*!************************************************************!*\
  !*** ./src/button-appearance/ButtonAppearanceComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_RadioIcons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/RadioIcons.js */ "./src/common/RadioIcons.js");
/* harmony import */ var _common_Sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Sizing.js */ "./src/common/Sizing.js");
/* harmony import */ var _common_ColorControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ColorControl */ "./src/common/ColorControl.js");
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

/* global wp, lodash */

/* jshint esversion: 6 */




var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _lodash = lodash,
    mapValues = _lodash.mapValues;

var ButtonAppearanceComponent = /*#__PURE__*/function (_Component) {
  _inherits(ButtonAppearanceComponent, _Component);

  var _super = _createSuper(ButtonAppearanceComponent);

  function ButtonAppearanceComponent(props) {
    var _this;

    _classCallCheck(this, ButtonAppearanceComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    var defaultsFromControl = {
      borderRadius: {
        top: 3,
        right: 3,
        bottom: 3,
        left: 3
      },
      borderWidth: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      }
    }; // If this is the old, non-array version of radius, we convert.

    if (typeof value.borderRadius === 'number') {
      value.borderRadius = {
        top: value.borderRadius,
        right: value.borderRadius,
        bottom: value.borderRadius,
        left: value.borderRadius
      };
    } // If this is the old, non-array version of radius, we convert.


    if (typeof value.borderWidth === 'number') {
      value.borderWidth = {
        top: value.borderWidth,
        right: value.borderWidth,
        bottom: value.borderWidth,
        left: value.borderWidth
      };
    }

    _this.defaultVals = props.control.params.defaultVals ? _objectSpread(_objectSpread({}, props.control.params.defaultVals), defaultsFromControl) : defaultsFromControl;
    _this.state = {
      type: value.type || 'filled',
      background: value.background || '',
      backgroundHover: value.backgroundHover || '',
      text: value.text || '',
      textHover: value.textHover || '',
      borderRadius: value.borderRadius || _this.defaultVals.borderRadius,
      borderWidth: value.borderWidth || _this.defaultVals.borderWidth,
      radiusLinked: false,
      widthLinked: false
    }; // Set linking.

    _this.state.radiusLinked = _this.isLinked(_this.state.borderRadius);
    _this.state.widthLinked = _this.isLinked(_this.state.borderWidth); // this.updateValues(this.state)

    _this.renderBorderControls = _this.renderBorderControls.bind(_assertThisInitialized(_this));
    _this.renderTypeControls = _this.renderTypeControls.bind(_assertThisInitialized(_this));
    _this.renderColors = _this.renderColors.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonAppearanceComponent, [{
    key: "renderBorderControls",
    value: function renderBorderControls() {
      var _this2 = this;

      var radiusOptions = [{
        type: 'top',
        value: this.state.borderRadius.top
      }, {
        type: 'right',
        value: this.state.borderRadius.right
      }, {
        type: 'bottom',
        value: this.state.borderRadius.bottom
      }, {
        type: 'left',
        value: this.state.borderRadius.left
      }];
      var widthOptions = [{
        type: 'top',
        value: this.state.borderWidth.top
      }, {
        type: 'right',
        value: this.state.borderWidth.right
      }, {
        type: 'bottom',
        value: this.state.borderWidth.bottom
      }, {
        type: 'left',
        value: this.state.borderWidth.left
      }];
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Border Radius', 'neve')), /*#__PURE__*/React.createElement(_common_Sizing_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        min: 0,
        max: 100,
        step: 1,
        options: radiusOptions,
        defaults: this.defaultVals.borderRadius,
        linked: this.state.radiusLinked,
        onLinked: function onLinked() {
          return _this2.setState({
            radiusLinked: !_this2.state.radiusLinked
          });
        },
        onChange: function onChange(optionType, numericValue) {
          var newVal;

          if (_this2.state.radiusLinked) {
            newVal = mapValues(_this2.state.borderRadius, function () {
              return numericValue;
            });
          } else {
            newVal = _objectSpread(_objectSpread({}, _this2.state.borderRadius), {}, _defineProperty({}, optionType, numericValue));
          }

          _this2.setState({
            borderRadius: newVal
          });

          _this2.updateValues({
            borderRadius: newVal
          });
        },
        onReset: function onReset() {
          _this2.setState({
            borderRadius: _this2.defaultVals.borderRadius
          });

          _this2.updateValues({
            borderRadius: _this2.defaultVals.borderRadius
          });
        }
      }), this.state.type === 'outline' && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Border Width', 'neve')), /*#__PURE__*/React.createElement(_common_Sizing_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        min: 0,
        max: 100,
        step: 1,
        options: widthOptions,
        defaults: this.defaultVals.borderWidth,
        linked: this.state.widthLinked,
        onLinked: function onLinked() {
          return _this2.setState({
            widthLinked: !_this2.state.widthLinked
          });
        },
        onChange: function onChange(optionType, numericValue) {
          var newVal;

          if (_this2.state.widthLinked) {
            newVal = mapValues(_this2.state.borderWidth, function () {
              return numericValue;
            });
          } else {
            newVal = _objectSpread(_objectSpread({}, _this2.state.borderWidth), {}, _defineProperty({}, optionType, numericValue));
          }

          _this2.setState({
            borderWidth: newVal
          });

          _this2.updateValues({
            borderWidth: newVal
          });
        },
        onReset: function onReset() {
          _this2.setState({
            borderWidth: _this2.defaultVals.borderWidth
          });

          _this2.updateValues({
            borderWidth: _this2.defaultVals.borderWidth
          });
        }
      })));
    }
  }, {
    key: "oldBorder",
    value: function oldBorder() {}
  }, {
    key: "renderColors",
    value: function renderColors() {
      var _this3 = this;

      var settings = {
        normal: {
          label: __('Normal', 'neve'),
          controls: {
            background: __('Background', 'neve'),
            text: this.state.type === 'fill' ? __('Text', 'neve') : __('Text and Border', 'neve')
          }
        },
        hover: {
          label: __('Hover', 'neve'),
          controls: {
            backgroundHover: __('Background', 'neve'),
            textHover: this.state.type === 'fill' ? __('Text', 'neve') : __('Text and Border', 'neve')
          }
        }
      };
      var self = this;

      if (this.props.control.params.no_hover) {
        delete settings.hover;
      }

      return /*#__PURE__*/React.createElement(Panel, null, Object.keys(settings).map(function (type, index) {
        return /*#__PURE__*/React.createElement(PanelBody, {
          key: index,
          title: _this3.props.control.params.no_hover ? '' : settings[type].label,
          initialOpen: type === 'normal'
        }, Object.keys(settings[type].controls).map(function (controlSlug, index) {
          return /*#__PURE__*/React.createElement(Fragment, {
            key: index
          }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(_common_ColorControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: settings[type].controls[controlSlug],
            selectedColor: self.state[controlSlug],
            onChange: function onChange(value) {
              self.setState(_defineProperty({}, controlSlug, value || ''), self.updateValues(_defineProperty({}, controlSlug, value || '')));
            }
          })));
        }));
      }));
    }
  }, {
    key: "renderTypeControls",
    value: function renderTypeControls() {
      var _this4 = this;

      var types = {
        fill: {
          label: 'fill',
          tooltip: __('Filled', 'neve'),
          icon: 'text'
        },
        outline: {
          label: 'outline',
          tooltip: __('Outline', 'neve'),
          icon: 'text'
        }
      };
      return /*#__PURE__*/React.createElement(_common_RadioIcons_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        options: types,
        onChange: function onChange(type) {
          _this4.setState({
            type: type
          }, _this4.updateValues({
            type: type
          }));
        },
        value: this.state.type
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-button-appearance-control"
      }, this.props.control.params.label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, this.props.control.params.label), /*#__PURE__*/React.createElement("div", {
        className: "neve-white-background-control"
      }, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Style', 'neve')), this.renderTypeControls(), this.renderBorderControls(), this.renderColors()));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false; // Migrate border-radius and border-width

        var r = e.detail.value.borderRadius;

        if (r && (typeof r === 'string' || typeof r === 'number')) {
          e.detail.value.borderRadius = {
            top: r,
            bottom: r,
            right: r,
            left: r
          };
        }

        var w = e.detail.value.borderWidth;

        if (w && (typeof w === 'string' || typeof w === 'number')) {
          e.detail.value.borderWidth = {
            top: w,
            bottom: w,
            right: w,
            left: w
          };
        }

        _this5.setState(_objectSpread(_objectSpread({}, _this5.state), e.detail.value));

        _this5.updateValues(e.detail.value);
      });
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      this.props.control.setting.set(_objectSpread(_objectSpread({}, this.props.control.setting.get()), value));
    }
  }, {
    key: "isLinked",
    value: function isLinked(object) {
      // eslint-disable-next-line eqeqeq
      return Object.values(object).every(function (value) {
        return value == Object.values(object)[0];
      });
    }
  }]);

  return ButtonAppearanceComponent;
}(Component);

ButtonAppearanceComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonAppearanceComponent);

/***/ }),

/***/ "./src/button-appearance/Control.js":
/*!******************************************!*\
  !*** ./src/button-appearance/Control.js ***!
  \******************************************/
/*! exports provided: ButtonAppearanceControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAppearanceControl", function() { return ButtonAppearanceControl; });
/* harmony import */ var _ButtonAppearanceComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonAppearanceComponent.js */ "./src/button-appearance/ButtonAppearanceComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ButtonAppearanceControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ButtonAppearanceComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/color/ColorComponent.js":
/*!*************************************!*\
  !*** ./src/color/ColorComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ColorControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/ColorControl.js */ "./src/common/ColorControl.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */


var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var ColorComponent = function ColorComponent(_ref) {
  var control = _ref.control;

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var updateValues = function updateValues(newVal) {
    setValue(newVal);
    control.setting.set(newVal);
  };

  useEffect(function () {
    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false;
      updateValues(e.detail.value);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control neve-color-control"
  }, /*#__PURE__*/React.createElement(_common_ColorControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: control.params.label,
    selectedColor: value,
    defaultValue: control.params["default"],
    alphaDisabled: control.params.disableAlpha,
    onChange: updateValues
  }));
};

ColorComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ColorComponent);

/***/ }),

/***/ "./src/color/Control.js":
/*!******************************!*\
  !*** ./src/color/Control.js ***!
  \******************************/
/*! exports provided: ColorControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorControl", function() { return ColorControl; });
/* harmony import */ var _ColorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorComponent */ "./src/color/ColorComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ColorControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ColorComponent__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/common/ColorControl.js":
/*!************************************!*\
  !*** ./src/common/ColorControl.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* global wp */

var _wp$components = wp.components,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown;
var __ = wp.i18n.__;

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      selectedColor = _ref.selectedColor,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue;
  var toggle = null;

  var handleChange = function handleChange(value) {
    var _value$rgb = value.rgb,
        r = _value$rgb.r,
        g = _value$rgb.g,
        b = _value$rgb.b,
        a = _value$rgb.a;

    if (a < 1) {
      onChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
      return false;
    }

    onChange(value.hex);
  };

  var handleClear = function handleClear() {
    onChange(defaultValue || '');
    toggle();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-control-header neve-color-component"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "customize-control-title"
  }, label), /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      toggle = onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSecondary: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement("span", {
        className: "color",
        style: {
          backgroundColor: selectedColor
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "gradient"
      }));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
        href: "#"
      }), /*#__PURE__*/React.createElement(ColorPicker, {
        color: selectedColor,
        onChangeComplete: handleChange
      }), selectedColor && /*#__PURE__*/React.createElement(Button, {
        className: "clear",
        isPrimary: true,
        onClick: handleClear
      }, __('Clear', 'neve')));
    }
  }));
};

ColorControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/common/NumberControl.js":
/*!*************************************!*\
  !*** ./src/common/NumberControl.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Sizing.js */ "./src/common/Sizing.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Responsive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Responsive.js */ "./src/common/Responsive.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp */




var Button = wp.components.Button;
var Component = wp.element.Component;

var NumberControl = /*#__PURE__*/function (_Component) {
  _inherits(NumberControl, _Component);

  var _super = _createSuper(NumberControl);

  function NumberControl() {
    _classCallCheck(this, NumberControl);

    return _super.apply(this, arguments);
  }

  _createClass(NumberControl, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          label = _this$props.label,
          units = _this$props.units,
          value = _this$props.value,
          className = _this$props.className,
          hasResponsive = _this$props.hasResponsive;
      return /*#__PURE__*/React.createElement("div", {
        className: className + ' neve-number-control-wrap'
      }, /*#__PURE__*/React.createElement("div", {
        className: "neve-control-header"
      }, label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, label), hasResponsive && /*#__PURE__*/React.createElement(_common_Responsive_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onChange: function onChange(currentDevice) {
          return _this.props.onChangedDevice(currentDevice);
        }
      }), units && /*#__PURE__*/React.createElement("div", {
        className: "neve-units"
      }, this.getButtons())), /*#__PURE__*/React.createElement(_common_Sizing_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noLinking: true,
        noRange: true,
        options: [{
          value: value
        }],
        onChange: function onChange(type, value) {
          _this.props.onChange(value);
        },
        max: this.props.max || 100,
        min: this.props.min || 0,
        step: this.props.step || 1,
        defaults: this.props["default"],
        onReset: function onReset() {
          _this.props.onReset();
        }
      }));
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      var self = this;
      var units = this.props.units;
      if (!units) return '';

      if (units.length === 1) {
        return /*#__PURE__*/React.createElement(Button, {
          className: "alone active",
          isSmall: true,
          disabled: true
        }, units[0]);
      }

      return units.map(function (unit, index) {
        var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          active: self.props.activeUnit === unit
        });
        return /*#__PURE__*/React.createElement(Button, {
          key: index,
          isSmall: true,
          onClick: function onClick() {
            self.props.onUnitChange(unit);
          },
          className: buttonClass
        }, unit);
      });
    }
  }]);

  return NumberControl;
}(Component);

NumberControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onReset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  units: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array || prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  "default": prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  hasResponsive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onChangedDevice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (NumberControl);

/***/ }),

/***/ "./src/common/RadioIcons.js":
/*!**********************************!*\
  !*** ./src/common/RadioIcons.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* global wp */

/* jshint esversion: 6 */


var Button = wp.components.Button;

var RadioIcons = function RadioIcons(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      value = _ref.value,
      showLabels = _ref.showLabels;

  var getButtons = function getButtons() {
    return Object.keys(options).map(function (type, index) {
      if (options[type].icon === 'text') {
        return /*#__PURE__*/React.createElement(Button, {
          key: index,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([{
            active: value === type
          }, 'is-text']),
          onClick: function onClick() {
            onChange(type);
          }
        }, options[type].tooltip);
      }

      return /*#__PURE__*/React.createElement("span", {
        key: index
      }, /*#__PURE__*/React.createElement(Button, {
        "aria-label": options[type].tooltip,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          active: value === type
        }),
        icon: options[type].icon,
        onClick: function onClick() {
          onChange(type);
        }
      }), showLabels && /*#__PURE__*/React.createElement("label", null, options[type].tooltip));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-radio-icons"
  }, getButtons());
};

RadioIcons.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  showLabels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (RadioIcons);

/***/ }),

/***/ "./src/common/Responsive.js":
/*!**********************************!*\
  !*** ./src/common/Responsive.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    Tooltip = _wp$components.Tooltip,
    ButtonGroup = _wp$components.ButtonGroup;

var ResponsiveControl = /*#__PURE__*/function (_Component) {
  _inherits(ResponsiveControl, _Component);

  var _super = _createSuper(ResponsiveControl);

  function ResponsiveControl(props) {
    var _this;

    _classCallCheck(this, ResponsiveControl);

    _this = _super.call(this, props);
    _this.state = {
      view: 'desktop'
    };

    _this.linkResponsiveButtons();

    return _this;
  }

  _createClass(ResponsiveControl, [{
    key: "render",
    value: function render() {
      var view = this.state.view;
      var devices = {
        desktop: {
          tooltip: __('Desktop', 'neve'),
          icon: 'desktop'
        },
        tablet: {
          tooltip: __('Tablet', 'neve'),
          icon: 'tablet'
        },
        mobile: {
          tooltip: __('Mobile', 'neve'),
          icon: 'smartphone'
        }
      };
      var excluded = this.props.excluded;
      var deviceMap = {};
      Object.keys(devices).map(function (key) {
        if (excluded) {
          if (excluded.includes(key)) {
            return false;
          }
        }

        deviceMap[key] = devices[key];
      });
      var _this$props = this.props,
          controlLabel = _this$props.controlLabel,
          hideResponsive = _this$props.hideResponsive;
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "neve-responsive-control-bar"
      }, controlLabel && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, controlLabel), !hideResponsive && /*#__PURE__*/React.createElement("div", {
        className: "floating-controls"
      }, /*#__PURE__*/React.createElement(ButtonGroup, null, Object.keys(deviceMap).map(function (device, index) {
        var _deviceMap$device = deviceMap[device],
            tooltip = _deviceMap$device.tooltip,
            icon = _deviceMap$device.icon;
        return /*#__PURE__*/React.createElement(Tooltip, {
          text: tooltip,
          key: index
        }, /*#__PURE__*/React.createElement(Button, {
          className: (device === view ? 'active-device ' : '') + device,
          onClick: function onClick() {
            var event = new CustomEvent('neveChangedRepsonsivePreview', {
              detail: device
            });
            document.dispatchEvent(event);
          }
        }, /*#__PURE__*/React.createElement(Dashicon, {
          icon: icon
        })));
      })))), this.props.children && /*#__PURE__*/React.createElement("div", {
        className: "neve-responsive-controls-content"
      }, this.props.children));
    }
  }, {
    key: "changeViewType",
    value: function changeViewType(device) {
      this.setState({
        view: device
      });
      wp.customize.previewedDevice(device);
      this.props.onChange(device);
    }
  }, {
    key: "linkResponsiveButtons",
    value: function linkResponsiveButtons() {
      var self = this;
      document.addEventListener('neveChangedRepsonsivePreview', function (e) {
        self.changeViewType(e.detail);
      });
    }
  }]);

  return ResponsiveControl;
}(Component);

ResponsiveControl.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  controlLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  hideResponsive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  excluded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveControl);

/***/ }),

/***/ "./src/common/SingleSizingInput.js":
/*!*****************************************!*\
  !*** ./src/common/SingleSizingInput.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp */

var Component = wp.element.Component;

var SingleSizingInput = /*#__PURE__*/function (_Component) {
  _inherits(SingleSizingInput, _Component);

  var _super = _createSuper(SingleSizingInput);

  function SingleSizingInput(props) {
    var _this;

    _classCallCheck(this, SingleSizingInput);

    _this = _super.call(this, props);
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(SingleSizingInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "nv-sizing-item"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        className: this.props.type ? this.props.type + '-input' : '',
        value: this.props.value,
        min: this.props.min,
        max: this.props.max,
        step: this.props.step,
        onChange: function onChange(e) {
          return _this2.props.onChange(_this2.props.type, e.target.value === '' ? 0 : e.target.value);
        }
      }), this.props.type && /*#__PURE__*/React.createElement("label", {
        className: "label",
        htmlFor: this.props.type + '-input'
      }, this.props.type));
    }
  }]);

  return SingleSizingInput;
}(Component);

SingleSizingInput.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SingleSizingInput);

/***/ }),

/***/ "./src/common/Sizing.js":
/*!******************************!*\
  !*** ./src/common/Sizing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_SingleSizingInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/SingleSizingInput.js */ "./src/common/SingleSizingInput.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp */



var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;
var Component = wp.element.Component;

var SizingControl = /*#__PURE__*/function (_Component) {
  _inherits(SizingControl, _Component);

  var _super = _createSuper(SizingControl);

  function SizingControl(props) {
    var _this;

    _classCallCheck(this, SizingControl);

    _this = _super.call(this, props);
    _this.hasSetValues = _this.hasSetValues.bind(_assertThisInitialized(_this));
    _this.linkButton = _this.linkButton.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SizingControl, [{
    key: "linkButton",
    value: function linkButton() {
      var _this2 = this;

      if (this.props.noLinking) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "tooltip-link",
        text: this.props.linked ? __('Unlink Values', 'neve') : __('Link Values', 'neve')
      }, /*#__PURE__*/React.createElement(Button, {
        key: "link-icon",
        icon: this.props.linked ? 'admin-links' : 'editor-unlink',
        onClick: function onClick() {
          return _this2.props.onLinked();
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([{
          active: this.props.linked
        }, 'link'])
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['neve-responsive-sizing', {
        'single-input': this.props.options.length === 1
      }]);
      return /*#__PURE__*/React.createElement("div", {
        className: wrapClasses
      }, this.linkButton(), this.props.options.map(function (i, n) {
        return /*#__PURE__*/React.createElement(_common_SingleSizingInput_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: n,
          onChange: function onChange(type, value) {
            return _this3.props.onChange(type, value);
          },
          value: i.value,
          className: i.type ? i.type + '-input' : '',
          type: i.type,
          max: _this3.props.max,
          min: _this3.props.min,
          step: _this3.props.step
        });
      }), this.hasSetValues() && /*#__PURE__*/React.createElement(Tooltip, {
        key: "tooltip-reset",
        text: this.props.options.length > 1 ? __('Reset all Values', 'neve') : __('Reset Value', 'neve')
      }, /*#__PURE__*/React.createElement(Button, {
        key: "reset-icon",
        icon: "image-rotate",
        className: "reset",
        onClick: function onClick() {
          return _this3.props.onReset();
        }
      })));
    }
  }, {
    key: "hasSetValues",
    value: function hasSetValues() {
      var _this$props = this.props,
          defaults = _this$props.defaults,
          options = _this$props.options;

      if (_typeof(defaults) !== 'object') {
        // eslint-disable-next-line eqeqeq
        return parseFloat(defaults) != parseFloat(options[0].value);
      }

      return options.filter( // eslint-disable-next-line eqeqeq
      function (option) {
        return option.value != defaults[option.type];
      }).length > 0;
    }
  }]);

  return SizingControl;
}(Component);

SizingControl.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  defaults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  onLinked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  linked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onReset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  noLinking: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (SizingControl);

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/*! exports provided: maybeParseJson, isObject, mergeDeep, getIntValAsResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeParseJson", function() { return maybeParseJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntValAsResponsive", function() { return getIntValAsResponsive; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var maybeParseJson = function maybeParseJson(input) {
  if (typeof input !== 'string') {
    return input;
  }

  try {
    JSON.parse(input);
  } catch (error) {
    return input;
  }

  return JSON.parse(input);
};
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */

var isObject = function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
};
/**
 * Deep merge two objects.
 */

var mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target; // Use first object we want to merge with and remove it from the start.

  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    // Loop over each key in one source.
    for (var key in source) {
      if (isObject(source[key])) {
        // Merge inside keys if we have an object.
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        // Reassign with source.
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  } // Run recursively for multiple.


  return mergeDeep.apply(void 0, [target].concat(sources));
};
var getIntValAsResponsive = function getIntValAsResponsive(value) {
  value = maybeParseJson(value);

  if (_typeof(value) === 'object' && Object.prototype.hasOwnProperty.call(value, 'desktop') && Object.prototype.hasOwnProperty.call(value, 'tablet') && Object.prototype.hasOwnProperty.call(value, 'mobile')) {
    return value;
  }

  if (typeof value === 'number') {
    value = {
      desktop: value,
      tablet: value,
      mobile: value
    };
    return value;
  }

  return value;
};

/***/ }),

/***/ "./src/common/svg.js":
/*!***************************!*\
  !*** ./src/common/svg.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
var SVG = {
  logoOnly: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.29",
    height: "17.29",
    viewBox: "0 0 17.29 17.29"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.76,14.76A8.61,8.61,0,0,1,12,16.6a8.42,8.42,0,0,1-3.36.69,8.66,8.66,0,0,1-2.72-.44,8.14,8.14,0,0,1-2.38-1.23,9.74,9.74,0,0,1-1.87-1.87A8.27,8.27,0,0,1,.44,11.37,8.67,8.67,0,0,1,0,8.64,8.54,8.54,0,0,1,.68,5.29,8.72,8.72,0,0,1,2.52,2.53,8.71,8.71,0,0,1,5.29.69,8.5,8.5,0,0,1,12,.69a8.78,8.78,0,0,1,2.76,1.84A8.72,8.72,0,0,1,16.6,5.29a8.5,8.5,0,0,1,0,6.71A8.72,8.72,0,0,1,14.76,14.76ZM1.58,5.54A7.66,7.66,0,0,0,1,8.64,7.68,7.68,0,0,0,2.14,12.8a7.51,7.51,0,0,0,3.13,2.84ZM8.29,8.25,7.2,5.3l-.79-.07c-.14,0-.24-.1-.28-.28a.84.84,0,0,1,0-.52c.07-.18.17-.26.31-.26l.33,0,.84,0,.84,0c.54,0,1.23,0,2.06-.11a.31.31,0,0,1,.3.25.92.92,0,0,1,0,.52c0,.18-.14.28-.28.29l-.07,0a.85.85,0,0,1-.25.07,2.3,2.3,0,0,1-.39,0l2.62,7.23.3-.79a19,19,0,0,0,.61-1.88,6.73,6.73,0,0,0,.3-1.65,4.33,4.33,0,0,0-.47-2.13,2.38,2.38,0,0,1-.19-.3l-.2-.32s-.07-.14-.14-.27A1.82,1.82,0,0,1,12.56,5a2.83,2.83,0,0,1-.07-.28,1.22,1.22,0,0,1,0-.32,1.3,1.3,0,0,1,.46-1.08,1.23,1.23,0,0,1,1-.29,7.63,7.63,0,0,0-2.4-1.49A7.49,7.49,0,0,0,8.64,1a7.61,7.61,0,0,0-3.7.93A7.47,7.47,0,0,0,2.19,4.43h.5c.53,0,1.21,0,2.05-.09a.29.29,0,0,1,.3.22.75.75,0,0,1,0,.47.34.34,0,0,1-.28.27l-1,.07,3,7.91ZM7.64,13.2c-.49,1.42-.81,2.36-1,2.84a6.7,6.7,0,0,0,2,.29A7.28,7.28,0,0,0,11,15.94l-2.23-6C8.5,10.68,8.12,11.77,7.64,13.2Zm4.89,2.17a7.4,7.4,0,0,0,2.77-2.81,7.71,7.71,0,0,0,1-3.92A7.51,7.51,0,0,0,15.42,5,9,9,0,0,1,15.5,6.1c0,.36,0,.65,0,.88a4.17,4.17,0,0,1-.13.73c-.06.27-.11.44-.14.53l-.15.4Q14.66,9.66,12.53,15.37Z"
  })),
  logoTopTitle: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.04",
    height: "17.33",
    viewBox: "0 0 14.04 17.33"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.13,7.51a4.39,4.39,0,0,1-1.4.93A4.32,4.32,0,0,1,7,8.8a4.64,4.64,0,0,1-1.39-.22A4.22,4.22,0,0,1,4.43,8a4.5,4.5,0,0,1-.95-1,3.77,3.77,0,0,1-.63-1.21A4.37,4.37,0,0,1,3,2.7,4.58,4.58,0,0,1,3.9,1.29,4.59,4.59,0,0,1,5.3.35,4.32,4.32,0,0,1,7,0,4.22,4.22,0,0,1,8.72.35a4.39,4.39,0,0,1,1.4.93,4.26,4.26,0,0,1,.94,1.4,4.2,4.2,0,0,1,.36,1.71,4.48,4.48,0,0,1-1.29,3.12ZM3.42,2.83a3.84,3.84,0,0,0-.31,1.58,3.92,3.92,0,0,0,.6,2.11A3.83,3.83,0,0,0,5.31,8C5,7.24,4.41,5.52,3.42,2.83ZM6.84,4.2,6.28,2.7l-.4,0c-.07,0-.12-.05-.15-.14a.5.5,0,0,1,0-.27c0-.08.08-.13.15-.12h.17l.43,0,.43,0c.27,0,.62,0,1-.06.07,0,.12,0,.16.13a.46.46,0,0,1,0,.26A.17.17,0,0,1,8,2.66l0,0-.12,0-.2,0L9,6.41,9.13,6c.1-.27.21-.59.31-1a3.38,3.38,0,0,0,.15-.84,2.16,2.16,0,0,0-.24-1.08L9.25,3l-.1-.17a1.11,1.11,0,0,1-.07-.13A.85.85,0,0,1,9,2.52a1.55,1.55,0,0,1,0-.15.88.88,0,0,1,0-.16.69.69,0,0,1,.23-.55.66.66,0,0,1,.49-.15A3.75,3.75,0,0,0,8.45.75,4.08,4.08,0,0,0,7,.49,3.81,3.81,0,0,0,5.13,1a3.78,3.78,0,0,0-1.4,1.29H4c.27,0,.62,0,1.05,0,.07,0,.12,0,.15.11a.33.33,0,0,1,0,.24.15.15,0,0,1-.14.13l-.51,0,1.51,4ZM6.51,6.71,6,8.16a3.33,3.33,0,0,0,1,.15,3.76,3.76,0,0,0,1.19-.2L7.08,5C7,5.43,6.76,6,6.51,6.71ZM9,7.82a3.87,3.87,0,0,0,1.41-1.43,4,4,0,0,0,.52-2,3.85,3.85,0,0,0-.47-1.87,3.86,3.86,0,0,1,0,.58c0,.18,0,.33,0,.44a3,3,0,0,1-.06.38c0,.13-.06.22-.08.26s0,.12-.07.21C10.15,4.73,9.72,5.88,9,7.82Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.06,10.54v.7H2v2.95H1.14V11.24H0v-.7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.59,10.54h.82v3.65H3.59Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8,10.54v.7H6.86v2.95H6V11.24H4.94v-.7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.93,13.48v.71H8.49V10.54h.82v2.94Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.45,14.19V10.54h2.47v.69H12.27v.71h1.46v.68H12.27v.88H14v.69Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2,14.93v.46H1.24v1.89H.71V15.39H0v-.46Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.58,17.28c0-.08-.05-.16-.08-.25l-.09-.26H2.49L2.4,17c0,.09-.06.17-.08.25H1.77l.25-.7L2.25,16l.23-.54c.07-.17.15-.33.23-.5h.5l.23.5.22.54c.08.19.16.4.24.61l.25.7ZM3,15.47l-.06.14-.07.2-.1.25-.11.29h.67c0-.1-.07-.19-.1-.29s-.07-.18-.1-.25S3,15.66,3,15.6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.51,15.34a.62.62,0,0,0-.53.21.85.85,0,0,0-.17.56,1.46,1.46,0,0,0,0,.31.77.77,0,0,0,.12.24.65.65,0,0,0,.21.16.61.61,0,0,0,.28.06h.26V16h.53v1.17a1.68,1.68,0,0,1-.3.07,2.54,2.54,0,0,1-.52,0A1.42,1.42,0,0,1,5,17.25,1.18,1.18,0,0,1,4.58,17a1,1,0,0,1-.23-.38,1.46,1.46,0,0,1-.09-.52,1.38,1.38,0,0,1,.09-.52,1.21,1.21,0,0,1,.26-.39A1.18,1.18,0,0,1,5,15a1.39,1.39,0,0,1,.46-.08l.3,0L6,15l.16.06.09.05-.15.42-.25-.1A1.55,1.55,0,0,0,5.51,15.34Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.31,16.83v.45H6.74V14.93h.53v1.9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.65,14.93h.53v2.35H8.65Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.3,17.28c-.15-.27-.32-.53-.49-.79a8.69,8.69,0,0,0-.57-.75v1.54H9.72V14.93h.43l.25.28.28.35.28.38c.09.13.17.26.26.38V14.93h.52v2.35Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.28,17.28V14.93h1.59v.45H12.81v.46h.94v.43h-.94v.57H14v.44Z"
  })),
  logoTitle: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "51.83",
    height: "17.29",
    viewBox: "0 0 51.83 17.29"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.76,14.76A8.61,8.61,0,0,1,12,16.6a8.42,8.42,0,0,1-3.36.69,8.66,8.66,0,0,1-2.72-.44,8.14,8.14,0,0,1-2.38-1.23,9.74,9.74,0,0,1-1.87-1.87A8.27,8.27,0,0,1,.44,11.37,8.67,8.67,0,0,1,0,8.64,8.54,8.54,0,0,1,.68,5.29,8.72,8.72,0,0,1,2.52,2.53,8.88,8.88,0,0,1,5.29.69,8.5,8.5,0,0,1,12,.69a9,9,0,0,1,2.76,1.84A8.72,8.72,0,0,1,16.6,5.29a8.5,8.5,0,0,1,0,6.71A8.72,8.72,0,0,1,14.76,14.76ZM1.58,5.54A7.66,7.66,0,0,0,1,8.64,7.68,7.68,0,0,0,2.14,12.8a7.51,7.51,0,0,0,3.13,2.84ZM8.29,8.25,7.2,5.3l-.79-.07c-.14,0-.24-.1-.28-.28a.84.84,0,0,1,0-.52c.07-.18.17-.26.31-.26l.33,0,.84,0,.84,0c.54,0,1.23,0,2.06-.11a.31.31,0,0,1,.3.25.92.92,0,0,1,0,.52c0,.18-.14.28-.28.29l-.07,0a.85.85,0,0,1-.25.07,2.3,2.3,0,0,1-.39,0l2.62,7.23.3-.79a19,19,0,0,0,.61-1.88,6.73,6.73,0,0,0,.3-1.65,4.36,4.36,0,0,0-.47-2.13,2.38,2.38,0,0,1-.19-.3l-.2-.32s-.07-.14-.14-.27A1.82,1.82,0,0,1,12.56,5a2.83,2.83,0,0,1-.07-.28,1.22,1.22,0,0,1,0-.32,1.3,1.3,0,0,1,.46-1.08,1.23,1.23,0,0,1,1-.29A7.74,7.74,0,0,0,8.64,1,7.65,7.65,0,0,0,2.19,4.43h.5c.53,0,1.21,0,2.05-.09a.29.29,0,0,1,.3.22.75.75,0,0,1,0,.47.34.34,0,0,1-.28.27l-1,.07,3,7.91ZM7.64,13.2c-.49,1.42-.81,2.36-1,2.84a6.7,6.7,0,0,0,2,.29A7.28,7.28,0,0,0,11,15.94l-2.23-6C8.5,10.68,8.12,11.77,7.64,13.2Zm4.89,2.17a7.4,7.4,0,0,0,2.77-2.81,7.71,7.71,0,0,0,1-3.92A7.51,7.51,0,0,0,15.42,5,9,9,0,0,1,15.5,6.1c0,.36,0,.65,0,.88a4.17,4.17,0,0,1-.13.73c-.06.27-.11.44-.14.53l-.15.4Q14.66,9.66,12.53,15.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.82.91v1.6h-2.5V9.23H22.44V2.51h-2.5V.91Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28,.91H29.9V9.23H28Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38,.91v1.6h-2.5V9.23H33.6V2.51H31.1V.91Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.74,7.62V9.23H39.18V.91h1.88V7.62Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.94,9.23V.91h5.62V2.48H47.81V4.12h3.33V5.65H47.81v2h4V9.23Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.28,10.93v1H22.67v4.33H21.46V12H19.85v-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28,16.28c-.06-.19-.12-.38-.19-.58l-.21-.58H25.52c-.06.19-.13.39-.2.59s-.13.38-.19.57H23.88c.2-.58.39-1.11.57-1.6s.36-.95.53-1.38.35-.85.52-1.23.34-.77.52-1.14h1.14c.17.37.35.75.52,1.14s.34.79.52,1.23.34.89.53,1.38.37,1,.57,1.6Zm-1.45-4.14c0,.08-.06.18-.11.32a4.45,4.45,0,0,0-.18.46c-.07.17-.14.37-.22.58s-.17.43-.25.66h1.53q-.12-.35-.24-.66c-.08-.22-.15-.41-.22-.58l-.18-.47A2.65,2.65,0,0,0,26.56,12.14Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.4,11.85a1.46,1.46,0,0,0-1.21.47,2,2,0,0,0-.38,1.28,2.26,2.26,0,0,0,.1.71,1.49,1.49,0,0,0,.27.55,1.19,1.19,0,0,0,.47.36,1.45,1.45,0,0,0,.65.13h.34a1,1,0,0,0,.25,0V13.45h1.2V16.1a3.61,3.61,0,0,1-.69.18,6.41,6.41,0,0,1-1.18.1,3.11,3.11,0,0,1-1.09-.19,2.17,2.17,0,0,1-.84-.54,2.56,2.56,0,0,1-.54-.87,3.6,3.6,0,0,1-.19-1.18,3.12,3.12,0,0,1,.21-1.19,2.57,2.57,0,0,1,.57-.88A2.33,2.33,0,0,1,31.2,11a2.75,2.75,0,0,1,1-.19,4.61,4.61,0,0,1,.68,0l.53.12a2.37,2.37,0,0,1,.36.13l.21.11-.35,1A2.71,2.71,0,0,0,33.1,12,2.52,2.52,0,0,0,32.4,11.85Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38.79,15.24v1H35.21V10.93h1.21v4.31Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39.56,10.93h1.2v5.35h-1.2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45.59,16.28c-.35-.62-.72-1.22-1.12-1.82a19.7,19.7,0,0,0-1.28-1.69v3.51H42V10.93h1a7.39,7.39,0,0,1,.56.62c.21.25.42.51.63.79s.43.57.64.88l.59.86V10.93h1.2v5.35Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M47.83,16.28V10.93h3.62v1H49V13h2.14v1H49v1.29h2.59v1Z"
  })),
  titleLogo: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "51.65",
    height: "17.29",
    viewBox: "0 0 51.65 17.29"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M49.12,14.76a8.69,8.69,0,0,1-2.76,1.85,8.57,8.57,0,0,1-3.35.68,8.67,8.67,0,0,1-2.73-.44,8.27,8.27,0,0,1-2.38-1.23A9.74,9.74,0,0,1,36,13.75a8.27,8.27,0,0,1-1.23-2.38,8.67,8.67,0,0,1-.44-2.73,8.69,8.69,0,0,1,2.53-6.11A8.72,8.72,0,0,1,39.65.69a8.5,8.5,0,0,1,6.71,0,8.83,8.83,0,0,1,2.76,1.84A8.72,8.72,0,0,1,51,5.29,8.5,8.5,0,0,1,51,12,8.72,8.72,0,0,1,49.12,14.76ZM35.94,5.54a7.66,7.66,0,0,0-.62,3.1A7.68,7.68,0,0,0,36.5,12.8a7.51,7.51,0,0,0,3.13,2.84Zm6.71,2.71L41.56,5.3l-.79-.07c-.14,0-.23-.1-.28-.28a.77.77,0,0,1,0-.52c.06-.18.16-.26.3-.26l.34,0,.83,0,.84,0c.54,0,1.23,0,2.06-.11a.31.31,0,0,1,.3.25.84.84,0,0,1,0,.52c0,.18-.14.28-.28.29l-.07,0a.77.77,0,0,1-.25.07,2.3,2.3,0,0,1-.39,0l2.62,7.23.3-.79a19,19,0,0,0,.61-1.88,6.73,6.73,0,0,0,.3-1.65,4.36,4.36,0,0,0-.47-2.13,2.38,2.38,0,0,1-.19-.3l-.19-.32s-.08-.14-.15-.27A1.82,1.82,0,0,1,46.92,5a2.83,2.83,0,0,1-.07-.28,1.22,1.22,0,0,1,0-.32,1.3,1.3,0,0,1,.46-1.08,1.24,1.24,0,0,1,1-.29,7.86,7.86,0,0,0-2.4-1.49A7.73,7.73,0,0,0,43,1a7.65,7.65,0,0,0-6.46,3.47h.5c.53,0,1.21,0,2.05-.09a.29.29,0,0,1,.3.22.75.75,0,0,1,0,.47.34.34,0,0,1-.28.27l-1,.07,3,7.91ZM42,13.2c-.49,1.42-.81,2.37-1,2.84a6.72,6.72,0,0,0,2,.29,7.27,7.27,0,0,0,2.34-.39l-2.23-6Zm4.89,2.17a7.33,7.33,0,0,0,2.77-2.81,7.71,7.71,0,0,0,1-3.92A7.51,7.51,0,0,0,49.78,5a9,9,0,0,1,.08,1.13c0,.36,0,.65,0,.88a4.17,4.17,0,0,1-.13.73c-.06.27-.11.44-.14.53l-.15.4Q49,9.66,46.89,15.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7,.91v1.6H4.47V9.23H2.59V2.51H.09V.91Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.17.91h1.88V9.23H8.17Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.13.91v1.6h-2.5V9.23H13.75V2.51h-2.5V.91Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.89,7.62V9.23H19.33V.91h1.88V7.62Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.09,9.23V.91h5.62V2.48H28V4.12h3.33V5.65H28v2h4V9.23Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.43,10.93v1H2.82v4.33H1.61V12H0v-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.16,16.28C8.1,16.09,8,15.9,8,15.7l-.21-.58H5.67c-.06.19-.13.39-.2.59s-.13.38-.19.57H4c.2-.58.39-1.11.57-1.6s.36-.95.53-1.38l.51-1.23c.17-.39.35-.77.53-1.14H7.31c.17.37.35.75.52,1.14s.34.79.51,1.23.35.89.54,1.38.37,1,.57,1.6ZM6.71,12.14a2.32,2.32,0,0,1-.12.32c0,.13-.11.28-.17.46s-.14.37-.22.58-.17.43-.25.66H7.48l-.24-.66c-.08-.22-.15-.41-.22-.58l-.18-.47A2.65,2.65,0,0,0,6.71,12.14Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.55,11.85a1.46,1.46,0,0,0-1.21.47A2,2,0,0,0,11,13.6a2.26,2.26,0,0,0,.1.71,1.49,1.49,0,0,0,.27.55,1.19,1.19,0,0,0,.47.36,1.45,1.45,0,0,0,.65.13h.34a1,1,0,0,0,.25,0V13.45h1.2V16.1a3.61,3.61,0,0,1-.69.18,6.41,6.41,0,0,1-1.18.1,3.11,3.11,0,0,1-1.09-.19,2.17,2.17,0,0,1-.84-.54,2.56,2.56,0,0,1-.54-.87,3.6,3.6,0,0,1-.19-1.18,3.12,3.12,0,0,1,.21-1.19,2.57,2.57,0,0,1,.57-.88,2.37,2.37,0,0,1,.85-.54,2.84,2.84,0,0,1,1.05-.19,4.61,4.61,0,0,1,.68,0l.53.12a2.37,2.37,0,0,1,.36.13l.21.11-.35,1a3,3,0,0,0-.57-.23A2.57,2.57,0,0,0,12.55,11.85Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.94,15.24v1H15.36V10.93h1.21v4.31Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.71,10.93h1.2v5.35h-1.2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.74,16.28c-.35-.62-.72-1.22-1.12-1.82a19.7,19.7,0,0,0-1.28-1.69v3.51H22.15V10.93h1a7.39,7.39,0,0,1,.56.62c.21.25.42.51.63.79s.43.57.64.88l.59.86V10.93h1.2v5.35Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28,16.28V10.93H31.6v1H29.19V13h2.14v1H29.19v1.29h2.59v1Z"
  })),
  px: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M10,10.71a5.32,5.32,0,0,1-.2,1.49,3.53,3.53,0,0,1-.59,1.16,2.67,2.67,0,0,1-1,.75,3.1,3.1,0,0,1-1.33.27,3.89,3.89,0,0,1-.78-.08,4,4,0,0,1-.69-.23v2.66h-2V7.42l.62-.15.73-.13.78-.09.76,0a4.48,4.48,0,0,1,1.56.26A3.26,3.26,0,0,1,9,8a3,3,0,0,1,.72,1.16A4.39,4.39,0,0,1,10,10.71Zm-2,.06a2.42,2.42,0,0,0-.42-1.49,1.44,1.44,0,0,0-1.23-.56l-.5,0-.37,0V12.4a1.51,1.51,0,0,0,.49.2,2.1,2.1,0,0,0,.61.09C7.48,12.69,8,12.05,8,10.77Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.1,9.16l1.41-2h2.06l-2.45,3.43a22.48,22.48,0,0,1,1.5,1.93c.43.64.78,1.2,1.05,1.7H15.52l-.27-.5-.36-.63a3.88,3.88,0,0,0-.42-.56L14,12.13l-.42.39a2.43,2.43,0,0,0-.39.52c-.13.21-.25.42-.37.63s-.23.39-.33.57h-2c.11-.22.26-.48.44-.79s.39-.62.61-.95.46-.64.71-.95.51-.59.76-.86c-.44-.63-.86-1.23-1.27-1.8l-1.2-1.71h2.16Z"
  }))),
  em: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M.9,10.72a4.18,4.18,0,0,1,.29-1.64A3.62,3.62,0,0,1,1.94,7.9,3.26,3.26,0,0,1,3,7.19,3.35,3.35,0,0,1,4.28,7a3.14,3.14,0,0,1,2.38.92,3.78,3.78,0,0,1,.87,2.7c0,.12,0,.25,0,.39s0,.26,0,.37H3a1.37,1.37,0,0,0,.58,1,2.34,2.34,0,0,0,1.37.36A6.38,6.38,0,0,0,6,12.57a4.38,4.38,0,0,0,.87-.25l.26,1.62a2.39,2.39,0,0,1-.43.17c-.18.05-.37.1-.59.14l-.71.1c-.25,0-.5,0-.75,0A4.61,4.61,0,0,1,3,14.11a3.25,3.25,0,0,1-1.17-.78,3,3,0,0,1-.68-1.16A4.54,4.54,0,0,1,.9,10.72ZM5.6,10a2.1,2.1,0,0,0-.09-.5A1.37,1.37,0,0,0,5.28,9a1.22,1.22,0,0,0-.39-.31,1.28,1.28,0,0,0-.58-.12,1.43,1.43,0,0,0-.58.11,1.13,1.13,0,0,0-.4.31,1.31,1.31,0,0,0-.25.43A3.18,3.18,0,0,0,3,10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13,10.45a2.84,2.84,0,0,0-.25-1.37,1,1,0,0,0-.86-.4l-.39,0-.38.05V14.2h-2V7.38c.17,0,.37-.09.6-.14l.73-.14q.38-.06.78-.09L12,7a3.35,3.35,0,0,1,1.25.19,3,3,0,0,1,.78.46,3.79,3.79,0,0,1,1-.48A3.31,3.31,0,0,1,16,7a3.51,3.51,0,0,1,1.39.23,2.07,2.07,0,0,1,.86.67,2.37,2.37,0,0,1,.44,1,5.87,5.87,0,0,1,.13,1.31v4h-2V10.45a2.86,2.86,0,0,0-.24-1.37,1,1,0,0,0-.86-.4,2.13,2.13,0,0,0-.45.08,1.89,1.89,0,0,0-.47.2,3.55,3.55,0,0,1,.12.65c0,.23,0,.48,0,.74V14.2H13Z"
  }))),
  percent: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M9.1,7.7c0,0.8-0.2,1.5-0.6,1.9s-1,0.7-1.7,0.7S5.4,10.1,5,9.7S4.3,8.6,4.3,7.7S4.5,6.3,5,5.8s1-0.7,1.7-0.7     S8,5.4,8.4,5.8S9.1,6.9,9.1,7.7z M7.5,7.7c0-0.5-0.1-0.8-0.2-1C7.1,6.5,6.9,6.4,6.7,6.4c-0.3,0-0.5,0.1-0.6,0.3s-0.2,0.5-0.2,1     s0.1,0.8,0.2,1C6.2,9,6.4,9.1,6.7,9.1c0.2,0,0.5-0.1,0.6-0.3C7.5,8.5,7.5,8.2,7.5,7.7z M11.7,5.4h1.9l-5.2,9.3H6.4L11.7,5.4z      M15.7,12.3c0,0.8-0.2,1.5-0.6,1.9c-0.4,0.4-1,0.7-1.7,0.7s-1.3-0.2-1.7-0.7s-0.6-1.1-0.6-1.9c0-0.8,0.2-1.5,0.6-1.9     c0.4-0.4,1-0.7,1.7-0.7s1.3,0.2,1.7,0.7C15.5,10.8,15.7,11.4,15.7,12.3z M14.2,12.3c0-0.5-0.1-0.8-0.2-1     c-0.2-0.2-0.4-0.3-0.6-0.3c-0.3,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.2,0.5-0.2,1s0.1,0.8,0.2,1s0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.6-0.3     C14.1,13,14.2,12.7,14.2,12.3z"
  }))),
  buttonFill: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32.58 11.01",
    className: "button-filled-svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32.58",
    height: "11.01",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5,7.93V3.07H8.22V4H6.06V5H8v.91H6.06v2Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9,3.07h1.09V7.93H9Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.45,7v.94H11.21V3.07H12.3V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.4,7v.94H15.16V3.07h1.09V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.11,7.93V3.07h3.28V4H20.2v1h1.94v.9H20.2V7h2.35v.92Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.62,5.5a2.88,2.88,0,0,1-.2,1.1,2.11,2.11,0,0,1-.56.78,2.38,2.38,0,0,1-.88.46A4.13,4.13,0,0,1,24.82,8c-.2,0-.43,0-.69,0a6.48,6.48,0,0,1-.77-.1V3.13A6.35,6.35,0,0,1,24.15,3l.7,0A4.45,4.45,0,0,1,26,3.15a2.32,2.32,0,0,1,.87.45,1.92,1.92,0,0,1,.56.77A2.93,2.93,0,0,1,27.62,5.5ZM24.45,7h.42a1.59,1.59,0,0,0,1.22-.41,1.61,1.61,0,0,0,.4-1.14,1.62,1.62,0,0,0-.38-1.16A1.6,1.6,0,0,0,24.91,4h-.23l-.23,0Z"
  })),
  buttonOutline: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 39.01 12.01",
    className: "button-outline-svg"
  }, /*#__PURE__*/React.createElement("rect", {
    className: "a",
    x: "0.5",
    y: "0.5",
    width: "38.01",
    height: "11.01",
    rx: "1.08"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.38,6A2.83,2.83,0,0,1,9.19,7.1a2.12,2.12,0,0,1-.51.8,2.14,2.14,0,0,1-.76.48,2.76,2.76,0,0,1-1,.16A2.65,2.65,0,0,1,6,8.38a2.18,2.18,0,0,1-.77-.48,2.14,2.14,0,0,1-.52-.8A2.83,2.83,0,0,1,4.54,6a2.88,2.88,0,0,1,.19-1.1,2.54,2.54,0,0,1,.53-.8A2.32,2.32,0,0,1,6,3.63,2.58,2.58,0,0,1,7,3.47a2.69,2.69,0,0,1,.94.16,2.27,2.27,0,0,1,.77.48,2.36,2.36,0,0,1,.52.8A2.88,2.88,0,0,1,9.38,6ZM5.67,6a2.11,2.11,0,0,0,.09.64,1.38,1.38,0,0,0,.25.5,1.13,1.13,0,0,0,.4.32A1.35,1.35,0,0,0,7,7.58a1.33,1.33,0,0,0,.54-.11,1.17,1.17,0,0,0,.41-.32,1.56,1.56,0,0,0,.25-.5A2.11,2.11,0,0,0,8.25,6a2.17,2.17,0,0,0-.09-.65,1.47,1.47,0,0,0-.25-.5,1.17,1.17,0,0,0-.41-.32A1.33,1.33,0,0,0,7,4.43a1.35,1.35,0,0,0-.55.11,1.16,1.16,0,0,0-.4.33,1.31,1.31,0,0,0-.25.5A2.11,2.11,0,0,0,5.67,6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.19,8.54a2.58,2.58,0,0,1-.88-.14,1.79,1.79,0,0,1-.62-.4,1.55,1.55,0,0,1-.35-.61,2.47,2.47,0,0,1-.12-.79v-3h1.1V6.51a1.75,1.75,0,0,0,.06.5,1.2,1.2,0,0,0,.18.34.73.73,0,0,0,.28.19,1.44,1.44,0,0,0,.37,0,.92.92,0,0,0,.65-.24,1.19,1.19,0,0,0,.24-.84V3.58h1.1v3a2.47,2.47,0,0,1-.12.79,1.62,1.62,0,0,1-.36.61,1.7,1.7,0,0,1-.63.4A2.66,2.66,0,0,1,12.19,8.54Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.86,3.58v.93H17.39V8.44H16.3V4.51H14.83V3.58Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.81,7.5v.94H19.56V3.58h1.09V7.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.51,3.58H24.6V8.44H23.51Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29,8.44q-.46-.82-1-1.65a16.16,16.16,0,0,0-1.16-1.53V8.44H25.73V3.58h.89q.22.22.51.57t.57.72c.2.25.39.52.58.79l.54.79V3.58h1.09V8.44Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31,8.44V3.58h3.28V4.5H32.13v1h1.94v.9H32.13V7.52h2.35v.92Z"
  })),
  menuPlain: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.03 8.48"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.45,0c.14.26.31.59.5,1s.38.81.59,1.26.4.91.6,1.38L4.71,5l.57-1.34q.3-.7.6-1.38c.21-.45.4-.87.59-1.26S6.83.26,7,0H8.68c.08.55.15,1.17.22,1.85S9,3.25,9.08,4s.1,1.48.14,2.23.08,1.44.12,2.1H7.51q0-1.22-.09-2.64T7.24,2.8L6.75,3.91,6.23,5.14l-.5,1.17-.41,1H4c-.11-.26-.24-.58-.41-1L3.11,5.14,2.58,3.91Q2.33,3.3,2.1,2.8,2,4.24,1.92,5.68c0,1-.07,1.83-.1,2.64H0C0,7.66.07,7,.11,6.22L.26,4c0-.74.11-1.45.18-2.14S.58.55.66,0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11,8.32V0h5.62V1.57H12.88V3.2H16.2V4.74H12.88v2h4V8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.86,8.32q-.81-1.44-1.74-2.82a28,28,0,0,0-2-2.63V8.32H18.28V0H19.8c.26.26.56.59.88,1s.64.8,1,1.23.67.89,1,1.36l.93,1.35V0h1.86V8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30.6,8.48a4.27,4.27,0,0,1-1.51-.24A2.71,2.71,0,0,1,28,7.55a2.65,2.65,0,0,1-.61-1,4.05,4.05,0,0,1-.2-1.34V0H29.1V5a3,3,0,0,0,.11.85,1.54,1.54,0,0,0,.32.58,1.13,1.13,0,0,0,.48.32,2,2,0,0,0,.61.09,1.5,1.5,0,0,0,1.11-.42A1.91,1.91,0,0,0,32.16,5V0H34V5.17a4.45,4.45,0,0,1-.2,1.35,3,3,0,0,1-.63,1.05,2.79,2.79,0,0,1-1.06.67A4.49,4.49,0,0,1,30.6,8.48Z"
  })),
  menuFilled: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 42.56 13.01"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "42.56",
    height: "13.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.71,2.26c.15.27.31.59.5,1s.39.81.59,1.26.41.92.61,1.39L9,7.22c.18-.41.37-.86.57-1.33s.4-.94.61-1.39.4-.87.59-1.26.35-.71.5-1h1.7c.08.56.15,1.17.22,1.86s.13,1.39.18,2.13l.15,2.23c0,.74.08,1.45.11,2.1H11.78c0-.81-.06-1.69-.1-2.64S11.58,6,11.5,5.06c-.14.34-.3.71-.48,1.12s-.35.81-.53,1.22-.33.8-.5,1.17l-.4.95H8.28c-.12-.26-.25-.58-.41-.95s-.33-.76-.5-1.17S7,6.58,6.85,6.18L6.36,5.06q-.12,1.46-.18,2.88t-.09,2.64H4.26c0-.65.07-1.36.12-2.1S4.47,7,4.52,6.25s.11-1.45.18-2.13.14-1.3.22-1.86Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.27,10.58V2.26h5.61V3.84H17.14V5.47h3.32V7H17.14V9h4v1.57Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.12,10.58q-.81-1.42-1.74-2.82a29.23,29.23,0,0,0-2-2.63v5.45H22.54V2.26h1.52c.27.27.56.59.88,1s.65.79,1,1.23.66.88,1,1.35.63.92.92,1.35V2.26h1.86v8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.86,10.75a4.08,4.08,0,0,1-1.51-.25,2.85,2.85,0,0,1-1.05-.68,2.74,2.74,0,0,1-.61-1.05,4.27,4.27,0,0,1-.2-1.33V2.26h1.87v5a2.7,2.7,0,0,0,.12.86,1.48,1.48,0,0,0,.31.57,1,1,0,0,0,.48.32,1.75,1.75,0,0,0,.62.1A1.53,1.53,0,0,0,36,8.71a2,2,0,0,0,.42-1.43v-5h1.87V7.44a4.1,4.1,0,0,1-.2,1.34,2.76,2.76,0,0,1-.62,1.05,2.85,2.85,0,0,1-1.07.68A4.45,4.45,0,0,1,34.86,10.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "svg-text",
    d: "M6.71,2.26c.15.27.31.59.5,1s.39.81.59,1.26.41.92.61,1.39S8.8,6.8,9,7.22l.57-1.33c.2-.47.4-.94.61-1.39s.4-.87.59-1.26.35-.71.5-1h1.7c.08.56.15,1.17.22,1.86s.13,1.39.18,2.13l.15,2.23c0,.74.08,1.44.11,2.1H11.78c0-.81-.06-1.69-.1-2.64S11.58,6,11.5,5.06c-.14.34-.3.71-.48,1.12s-.35.81-.53,1.22-.33.8-.5,1.17l-.4.95H8.28c-.12-.26-.25-.58-.41-.95s-.33-.76-.5-1.17S7,6.58,6.85,6.18L6.36,5.06q-.12,1.46-.18,2.88t-.09,2.64H4.26c0-.66.07-1.36.12-2.1S4.47,7,4.52,6.25s.11-1.45.18-2.13.14-1.3.22-1.86Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "svg-text",
    d: "M15.27,10.58V2.26h5.61V3.84H17.14V5.47h3.32V7H17.14V9h4v1.57Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "svg-text",
    d: "M28.12,10.58q-.81-1.42-1.74-2.82a29.23,29.23,0,0,0-2-2.63v5.45H22.54V2.26h1.52c.27.27.56.59.88,1s.65.79,1,1.23.66.88,1,1.35.63.92.92,1.35V2.26h1.86v8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "svg-text",
    d: "M34.86,10.75a4.08,4.08,0,0,1-1.51-.25,2.85,2.85,0,0,1-1.05-.68,2.74,2.74,0,0,1-.61-1.05,4.31,4.31,0,0,1-.2-1.33V2.26h1.87v5a2.7,2.7,0,0,0,.12.86,1.48,1.48,0,0,0,.31.57,1,1,0,0,0,.48.32,1.75,1.75,0,0,0,.62.1A1.53,1.53,0,0,0,36,8.71a2,2,0,0,0,.42-1.43v-5h1.87V7.44a4.14,4.14,0,0,1-.2,1.34,2.76,2.76,0,0,1-.62,1.05,2.85,2.85,0,0,1-1.07.68A4.45,4.45,0,0,1,34.86,10.75Z"
  })),
  menuUnderline: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.03 10.75"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.45,0c.14.26.31.59.5,1s.38.81.59,1.26.4.91.6,1.38L4.71,5l.57-1.34q.3-.7.6-1.38c.21-.45.4-.87.59-1.26S6.83.26,7,0H8.68c.08.55.15,1.17.22,1.85S9,3.25,9.08,4s.1,1.48.14,2.23.08,1.44.12,2.1H7.51q0-1.22-.09-2.64T7.24,2.8L6.75,3.91,6.23,5.14l-.5,1.17-.41,1H4c-.11-.26-.24-.58-.41-1L3.11,5.14,2.58,3.91Q2.33,3.3,2.1,2.8,2,4.24,1.92,5.68c0,1-.07,1.83-.1,2.64H0C0,7.66.07,7,.11,6.22L.26,4c0-.74.11-1.45.18-2.14S.58.55.66,0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11,8.32V0h5.62V1.57H12.88V3.2H16.2V4.74H12.88v2h4V8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.86,8.32q-.81-1.44-1.74-2.82a28,28,0,0,0-2-2.63V8.32H18.28V0H19.8c.26.26.56.59.88,1s.64.8,1,1.23.67.89,1,1.36l.93,1.35V0h1.86V8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30.6,8.48a4.27,4.27,0,0,1-1.51-.24A2.71,2.71,0,0,1,28,7.55a2.65,2.65,0,0,1-.61-1,4.05,4.05,0,0,1-.2-1.34V0H29.1V5a3,3,0,0,0,.11.85,1.54,1.54,0,0,0,.32.58,1.13,1.13,0,0,0,.48.32,2,2,0,0,0,.61.09,1.5,1.5,0,0,0,1.11-.42A1.91,1.91,0,0,0,32.16,5V0H34V5.17a4.45,4.45,0,0,1-.2,1.35,3,3,0,0,1-.63,1.05,2.79,2.79,0,0,1-1.06.67A4.49,4.49,0,0,1,30.6,8.48Z"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "9.32",
    width: "34.03",
    height: "1.43"
  })),
  menuOverline: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.03 10.92"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.45,2.43c.14.27.31.59.5,1s.38.81.59,1.26.4.91.6,1.39l.57,1.33.57-1.33c.2-.48.4-.94.6-1.39s.4-.87.59-1.26.36-.71.5-1H8.68c.08.56.15,1.17.22,1.86S9,5.68,9.08,6.42s.1,1.49.14,2.23.08,1.44.12,2.1H7.51q0-1.21-.09-2.64T7.24,5.23L6.75,6.35c-.17.4-.35.81-.52,1.22s-.34.8-.5,1.17l-.41.95H4c-.11-.26-.24-.58-.41-.95S3.28,8,3.11,7.57s-.35-.82-.53-1.22-.33-.78-.48-1.12Q2,6.69,1.92,8.11c0,1-.07,1.83-.1,2.64H0c0-.66.07-1.36.11-2.1L.26,6.42Q.34,5.31.44,4.29C.51,3.6.58,3,.66,2.43Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11,10.75V2.43h5.62V4H12.88V5.64H16.2V7.17H12.88v2h4v1.57Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.86,10.75q-.81-1.42-1.74-2.82a28,28,0,0,0-2-2.63v5.45H18.28V2.43H19.8c.26.27.56.59.88,1s.64.79,1,1.23.67.88,1,1.35l.93,1.35V2.43h1.86v8.32Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30.6,10.92a4.26,4.26,0,0,1-1.51-.25A2.69,2.69,0,0,1,28,10a2.62,2.62,0,0,1-.61-1.05,4,4,0,0,1-.2-1.33V2.43H29.1v5a3,3,0,0,0,.11.86,1.49,1.49,0,0,0,.32.57A1,1,0,0,0,30,9.2a1.7,1.7,0,0,0,.61.1,1.5,1.5,0,0,0,1.11-.42,1.94,1.94,0,0,0,.43-1.43v-5H34V7.61A4.43,4.43,0,0,1,33.83,9a2.72,2.72,0,0,1-1.69,1.73A4.49,4.49,0,0,1,30.6,10.92Z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "34.03",
    height: "1.43"
  })),
  myAccountUsersSolid: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
  })),
  myAccountUsersFirendsSolid: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
  })),
  myAccountUserSolid: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
  })),
  myAccountUserRegular: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
  })),
  myAccountUserTagSolid: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M630.6 364.9l-90.3-90.2c-12-12-28.3-18.7-45.3-18.7h-79.3c-17.7 0-32 14.3-32 32v79.2c0 17 6.7 33.2 18.7 45.2l90.3 90.2c12.5 12.5 32.8 12.5 45.3 0l92.5-92.5c12.6-12.5 12.6-32.7.1-45.2zm-182.8-21c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24c0 13.2-10.7 24-24 24zm-223.8-88c70.7 0 128-57.3 128-128C352 57.3 294.7 0 224 0S96 57.3 96 128c0 70.6 57.3 127.9 128 127.9zm127.8 111.2V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 287.9 0 348.1 0 422.3v41.6c0 26.5 21.5 48 48 48h352c15.5 0 29.1-7.5 37.9-18.9l-58-58c-18.1-18.1-28.1-42.2-28.1-67.9z"
  })),
  myAccountUserAltSolid: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
  })),
  myAccountUserAvatar: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"
  })),
  myAccountNone: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 352 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
  })),
  cartIconStyle1: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1792 1792"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M704 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm896 0q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm128-1088v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"
  })),
  cartIconStyle2: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"
  })),
  cartIconStyle3: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"
  })),
  cartIconStyle4: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"
  })),
  cartIconStyle5: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"
  })),
  cartIconStyle6: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 616 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"
  })),
  mediaAlignLeft: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "16.75",
    width: "10",
    height: "6",
    transform: "rotate(-90 5 16.75)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 8.75L13.5 8.75L13.5 7.25L20.5 7.25L20.5 8.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 12.75L13.5 12.75L13.5 11.25L20.5 11.25L20.5 12.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 16.75L13.5 16.75L13.5 15.25L20.5 15.25L20.5 16.75Z"
  })),
  mediaAlignRight: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "7.75",
    width: "10",
    height: "6",
    transform: "rotate(90 20 7.75)"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.5 15.75H11.5V17.25H4.5V15.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.5 11.75H11.5V13.25H4.5V11.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.5 7.75H11.5V9.25H4.5V7.75Z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (SVG);

/***/ }),

/***/ "./src/dynamic-fields/dynamic-field-inserter.js":
/*!******************************************************!*\
  !*** ./src/dynamic-fields/dynamic-field-inserter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* jshint esversion: 6 */

/* global wp, NeveReactCustomize */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    DropdownMenu = _wp$components.DropdownMenu,
    MenuGroup = _wp$components.MenuGroup,
    MenuItem = _wp$components.MenuItem;

var DynamicFieldInserter = /*#__PURE__*/function (_Component) {
  _inherits(DynamicFieldInserter, _Component);

  var _super = _createSuper(DynamicFieldInserter);

  function DynamicFieldInserter(props) {
    var _this;

    _classCallCheck(this, DynamicFieldInserter);

    _this = _super.call(this, props);
    _this.getOptions = _this.getOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DynamicFieldInserter, [{
    key: "getOptions",
    value: function getOptions() {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          allowedOptionsTypes = _this$props.allowedOptionsTypes;
      var allOptions = NeveReactCustomize.dynamicTags.options;
      var options = [];
      allOptions.forEach(function (optionGroup, index) {
        var children = [];
        Object.keys(optionGroup.controls).forEach(function (slug, index) {
          if (!allowedOptionsTypes.includes(optionGroup.controls[slug].type)) {
            return false;
          }

          children.push( /*#__PURE__*/React.createElement(MenuItem, {
            onClick: function onClick() {
              onSelect(slug, optionGroup.controls[slug].type);
            }
          }, optionGroup.controls[slug].label));
        });
        options.push( /*#__PURE__*/React.createElement(MenuGroup, {
          label: optionGroup.label
        }, children));
      });
      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(DropdownMenu, {
        icon: "image-filter",
        label: __('Insert Dynamic Tag', 'neve')
      }, function () {
        return /*#__PURE__*/React.createElement(Fragment, null, _this2.getOptions());
      });
    }
  }]);

  return DynamicFieldInserter;
}(Component);

DynamicFieldInserter.propTypes = {
  allowedOptionsTypes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicFieldInserter);

/***/ }),

/***/ "./src/dynamic-fields/index.js":
/*!*************************************!*\
  !*** ./src/dynamic-fields/index.js ***!
  \*************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _dynamic_field_inserter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-field-inserter.js */ "./src/dynamic-fields/dynamic-field-inserter.js");
/* global NeveReactCustomize */

/* global wp */

var render = wp.element.render;
/**
 * Initialize the dynamic tag buttons.
 *
 * @returns {boolean}|{void}
 */

var init = function init() {
  if (!NeveReactCustomize.dynamicTags) {
    return false;
  }

  var controls = NeveReactCustomize.dynamicTags.controls;
  NeveReactCustomize.fieldSelection = {};
  Object.keys(controls).forEach(function (controlId, index) {
    var control = wp.customize.control(controlId);
    var container = control.container[0];
    var dynamicControlWrap = document.createElement('div');
    dynamicControlWrap.setAttribute('id', "dynamic-".concat(controlId));
    dynamicControlWrap.classList.add('neve-dynamic-tag-selector');
    container.classList.add('neve-has-dynamic-tag-selector');
    container.appendChild(dynamicControlWrap);
    var input = document.querySelector("[data-customize-setting-link=\"".concat(control.id, "\"]"));
    input.addEventListener('focusout', function (e) {
      NeveReactCustomize.fieldSelection[controlId] = {
        start: e.target.selectionStart,
        end: e.target.selectionEnd
      };
    });
    render( /*#__PURE__*/React.createElement(_dynamic_field_inserter_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      allowedOptionsTypes: controls[controlId],
      onSelect: function onSelect(magicTag, group) {
        return addToField(magicTag, control, group);
      }
    }), dynamicControlWrap);
  });
};
/**
 * Add dynamic tag to input field.
 * @param magicTag
 * @param control
 * @param optionType
 */

var addToField = function addToField(magicTag, control, optionType) {
  var tag;
  var input = document.querySelector("[data-customize-setting-link=\"".concat(control.id, "\"]"));

  if (optionType === 'url' && control.params.type === 'textarea') {
    tag = "<a href=\"{".concat(magicTag, "}\">Link</a>");
  } else {
    tag = "{".concat(magicTag, "}");
  }

  if (optionType === 'url' && input.value === '#') {
    input.value = tag;
  } else if (NeveReactCustomize.fieldSelection[control.id]) {
    var _NeveReactCustomize$f = NeveReactCustomize.fieldSelection[control.id],
        start = _NeveReactCustomize$f.start,
        end = _NeveReactCustomize$f.end;
    var length = input.value.length;
    input.value = input.value.substring(0, start) + tag + input.value.substring(end, length);
  } else {
    input.value += tag;
  }

  NeveReactCustomize.fieldSelection[control.id] = false;
  input.focus();
  input.dispatchEvent(new Event('change'));
};

/***/ }),

/***/ "./src/font-family/Control.js":
/*!************************************!*\
  !*** ./src/font-family/Control.js ***!
  \************************************/
/*! exports provided: FontFamilyControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFamilyControl", function() { return FontFamilyControl; });
/* harmony import */ var _FontFamilyComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FontFamilyComponent.js */ "./src/font-family/FontFamilyComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var FontFamilyControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_FontFamilyComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/font-family/FontFamilyComponent.js":
/*!************************************************!*\
  !*** ./src/font-family/FontFamilyComponent.js ***!
  \************************************************/
/*! exports provided: TypefaceComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypefaceComponent", function() { return TypefaceComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FontFamilySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontFamilySelector.js */ "./src/font-family/FontFamilySelector.js");
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

/* jshint esversion: 6 */

/* global wp, NeveReactCustomize */


var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var TypefaceComponent = /*#__PURE__*/function (_Component) {
  _inherits(TypefaceComponent, _Component);

  var _super = _createSuper(TypefaceComponent);

  function TypefaceComponent(props) {
    var _this;

    _classCallCheck(this, TypefaceComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    _this.state = {
      fontFamily: value,
      fontFamilySource: null
    };
    var defaultParams = {
      default_is_inherit: false
    };
    _this.controlParams = props.control.params.input_attrs ? _objectSpread(_objectSpread({}, defaultParams), JSON.parse(props.control.params.input_attrs)) : defaultParams;
    return _this;
  }

  _createClass(TypefaceComponent, [{
    key: "maybe_get_typekit_font",
    value: function maybe_get_typekit_font(font) {
      if (Object.prototype.hasOwnProperty.call(NeveReactCustomize, 'typekitSlugs') === false) {
        return font;
      }

      var typekitSlugs = NeveReactCustomize.typekitSlugs;

      if (Object.prototype.hasOwnProperty.call(typekitSlugs, font)) {
        return typekitSlugs[font];
      }

      return font;
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return /*#__PURE__*/React.createElement(Fragment, null, this.props.control.params.label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, this.props.control.params.label), /*#__PURE__*/React.createElement("div", {
        className: "neve-typeface-control neve-white-background-control"
      }, /*#__PURE__*/React.createElement(_FontFamilySelector_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        selected: this.state.fontFamily,
        onFontChoice: function onFontChoice(fontFamilySource, fontFamily) {
          self.setState({
            fontFamily: fontFamily,
            fontFamilySource: fontFamilySource
          });
          self.updateControl();
        },
        inheritDefault: this.controlParams.default_is_inherit,
        maybeGetTypekit: this.maybe_get_typekit_font
      })));
    }
  }, {
    key: "updateControl",
    value: function updateControl() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.control.setting.set(_this2.maybe_get_typekit_font(_this2.state.fontFamily));

        wp.customize.previewer.send('font-selection', {
          value: _this2.maybe_get_typekit_font(_this2.state.fontFamily),
          source: _this2.state.fontFamilySource,
          controlId: _this2.props.control.id,
          type: '\\Neve\\Customizer\\Controls\\React\\Font_Family',
          inherit: _this2.controlParams.default_is_inherit
        });
      }, 100);
    }
  }]);

  return TypefaceComponent;
}(Component);
TypefaceComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TypefaceComponent);

/***/ }),

/***/ "./src/font-family/FontFamilySelector.js":
/*!***********************************************!*\
  !*** ./src/font-family/FontFamilySelector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FontPreviewLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FontPreviewLink.js */ "./src/font-family/FontPreviewLink.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp, NeveReactCustomize */



var __ = wp.i18n.__;
var _wp$components = wp.components,
    Popover = _wp$components.Popover,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    Dashicon = _wp$components.Dashicon;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var FontFamilySelector = /*#__PURE__*/function (_Component) {
  _inherits(FontFamilySelector, _Component);

  var _super = _createSuper(FontFamilySelector);

  function FontFamilySelector(props) {
    var _this;

    _classCallCheck(this, FontFamilySelector);

    _this = _super.call(this, props);
    _this.state = {
      fonts: NeveReactCustomize.fonts,
      isVisible: false,
      search: '',
      loadUntil: 20,
      delayFontInclusion: true
    };
    return _this;
  }

  _createClass(FontFamilySelector, [{
    key: "getFonts",
    value: function getFonts() {
      var fontGroups = this.state.fonts;
      var self = this;
      var result = {};
      Object.keys(fontGroups).map(function (key) {
        result[key] = fontGroups[key].filter(function (value) {
          return value.toLowerCase().includes(self.state.search.toLowerCase());
        });
      });
      return result;
    }
  }, {
    key: "getFontList",
    value: function getFontList() {
      var _this2 = this;

      var fontGroups = this.getFonts();
      var options = [];
      var self = this;
      options.push( /*#__PURE__*/React.createElement("li", {
        key: "default",
        className:  true ? 'selected' : undefined
      }, /*#__PURE__*/React.createElement(_FontPreviewLink_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
        fontFace: "default",
        delayLoad: false,
        label: this.props.inheritDefault ? __('Inherit', 'neve') : __('Default', 'neve'),
        onClick: function onClick() {
          _this2.setState({
            isVisible: false
          });

          _this2.props.onFontChoice('system', false);
        }
      })));
      Object.keys(fontGroups).map(function (key) {
        fontGroups[key].length > 0 && options.push( /*#__PURE__*/React.createElement("li", {
          className: "font-group-header",
          key: key
        }, key));
        fontGroups[key].map(function (font, index) {
          if (index < self.state.loadUntil) {
            options.push( /*#__PURE__*/React.createElement("li", {
              key: font,
              className: font === _this2.props.selected ? 'selected' : ''
            }, /*#__PURE__*/React.createElement(_FontPreviewLink_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
              delayLoad: _this2.state.delayFontInclusion,
              label: font,
              fontFace: _this2.props.maybeGetTypekit(font),
              onClick: function onClick() {
                _this2.setState({
                  isVisible: false
                });

                _this2.props.onFontChoice(key, font);
              }
            })));
          }
        });
      });

      if (this.state.loadUntil < options.length && this.state.search === '') {
        options.push( /*#__PURE__*/React.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: "load-more",
          onChange: function onChange(isVisible) {
            if (isVisible) {
              _this2.setState({
                loadUntil: self.state.loadUntil + 5,
                delayFontInclusion: false
              });
            }
          }
        }, /*#__PURE__*/React.createElement("li", {
          className: "load-more"
        }, /*#__PURE__*/React.createElement(Dashicon, {
          icon: "image-filter"
        }))));
      }

      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "popover-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "popover-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "search"
      }, /*#__PURE__*/React.createElement(TextControl, {
        placeholder: __('Search', 'neve') + '...',
        value: this.state.search,
        onChange: function onChange(e) {
          _this2.setState({
            search: e,
            loadUntil: 20
          });
        }
      }), /*#__PURE__*/React.createElement("a", {
        className: "close-font-selector",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();

          _this2.setState({
            isVisible: false
          });
        }
      }, /*#__PURE__*/React.createElement(Dashicon, {
        icon: "no"
      })))), /*#__PURE__*/React.createElement("ul", {
        className: "neve-fonts-list"
      }, options.length ? options : /*#__PURE__*/React.createElement("li", {
        className: "no-result",
        key: "no-results"
      }, __('No results.', 'neve')))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // eslint-disable-next-line max-len
      var defaultFontface = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
      var font = this.props.maybeGetTypekit(this.props.selected);
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-font-family-control"
      }, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Font Family', 'neve')), /*#__PURE__*/React.createElement(Button, {
        className: "font-family-selector-toggle",
        isSecondary: true,
        onClick: function onClick() {
          _this3.setState({
            isVisible: true
          });
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ff-name"
      }, this.props.selected || (this.props.inheritDefault ? __('Inherit', 'neve') : __('Default', 'neve'))), /*#__PURE__*/React.createElement("span", {
        className: "ff-preview",
        style: {
          fontFamily: font || defaultFontface
        }
      }, "Abc"), this.state.isVisible && /*#__PURE__*/React.createElement(Popover, {
        position: "bottom left",
        onFocusOutside: function onFocusOutside() {
          return _this3.setState({
            isVisible: false
          });
        }
      }, this.state.fonts ? this.getFontList() : __('Loading...', 'neve'))));
    }
  }]);

  return FontFamilySelector;
}(Component);

FontFamilySelector.propTypes = {
  onFontChoice: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  maybeGetTypekit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  inheritDefault: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool])
};
/* harmony default export */ __webpack_exports__["default"] = (FontFamilySelector);

/***/ }),

/***/ "./src/font-family/FontPreviewLink.js":
/*!********************************************!*\
  !*** ./src/font-family/FontPreviewLink.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* global wp */


var Component = wp.element.Component;

var FontPreviewLink = /*#__PURE__*/function (_Component) {
  _inherits(FontPreviewLink, _Component);

  var _super = _createSuper(FontPreviewLink);

  function FontPreviewLink(props) {
    var _this;

    _classCallCheck(this, FontPreviewLink);

    _this = _super.call(this, props);
    _this.state = {
      previewWasRendered: false
    };
    return _this;
  }

  _createClass(FontPreviewLink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        fontFamily: this.props.fontFace + ', sans-serif'
      };
      return /*#__PURE__*/React.createElement("a", {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this2.props.onClick();
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "neve-font-family"
      }, this.props.label || this.props.fontFace), /*#__PURE__*/React.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: function onChange(isVisible) {
          if (isVisible) {
            _this2.setState({
              previewWasRendered: true
            });
          }
        }
      }, this.state.previewWasRendered || this.props.delayLoad === false ? /*#__PURE__*/React.createElement("span", {
        className: "neve-font-preview",
        style: style
      }, "Abc") : /*#__PURE__*/React.createElement("span", {
        className: "neve-font-preview "
      }, "...")));
    }
  }]);

  return FontPreviewLink;
}(Component);

FontPreviewLink.propTypes = {
  fontFace: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  delayLoad: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FontPreviewLink);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dynamic_fields_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-fields/index.js */ "./src/dynamic-fields/index.js");
/* harmony import */ var _toggle_Control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle/Control.js */ "./src/toggle/Control.js");
/* harmony import */ var _responsive_toggle_Control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive-toggle/Control.js */ "./src/responsive-toggle/Control.js");
/* harmony import */ var _background_Control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/Control.js */ "./src/background/Control.js");
/* harmony import */ var _spacing_Control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing/Control.js */ "./src/spacing/Control.js");
/* harmony import */ var _typeface_Control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeface/Control.js */ "./src/typeface/Control.js");
/* harmony import */ var _font_family_Control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./font-family/Control.js */ "./src/font-family/Control.js");
/* harmony import */ var _radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio-buttons/Control.js */ "./src/radio-buttons/Control.js");
/* harmony import */ var _button_appearance_Control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-appearance/Control.js */ "./src/button-appearance/Control.js");
/* harmony import */ var _range_Control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./range/Control.js */ "./src/range/Control.js");
/* harmony import */ var _responsive_range_Control_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./responsive-range/Control.js */ "./src/responsive-range/Control.js");
/* harmony import */ var _color_Control_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./color/Control.js */ "./src/color/Control.js");
/* harmony import */ var _presets_selector_Control_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presets-selector/Control.js */ "./src/presets-selector/Control.js");
/* harmony import */ var _multiselect_Control_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./multiselect/Control.js */ "./src/multiselect/Control.js");
/* harmony import */ var _responsive_radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./responsive-radio-buttons/Control.js */ "./src/responsive-radio-buttons/Control.js");
/* harmony import */ var _radio_image_Control_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./radio-image/Control.js */ "./src/radio-image/Control.js");
/* harmony import */ var _ordering_Control_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ordering/Control.js */ "./src/ordering/Control.js");
/* jshint esversion: 6 */

/* global NeveReactCustomize, wp */

















var controlConstructor = wp.customize.controlConstructor;
controlConstructor.neve_toggle_control = _toggle_Control_js__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"];
controlConstructor.neve_responsive_toggle_control = _responsive_toggle_Control_js__WEBPACK_IMPORTED_MODULE_2__["ResponsiveToggleControl"];
controlConstructor.neve_background_control = _background_Control_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundControl"];
controlConstructor.neve_spacing = _spacing_Control_js__WEBPACK_IMPORTED_MODULE_4__["SpacingControl"];
controlConstructor.neve_typeface_control = _typeface_Control_js__WEBPACK_IMPORTED_MODULE_5__["TypefaceControl"];
controlConstructor.neve_font_family_control = _font_family_Control_js__WEBPACK_IMPORTED_MODULE_6__["FontFamilyControl"];
controlConstructor.neve_radio_buttons_control = _radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_7__["RadioButtonsControl"];
controlConstructor.neve_button_appearance = _button_appearance_Control_js__WEBPACK_IMPORTED_MODULE_8__["ButtonAppearanceControl"];
controlConstructor.neve_range_control = _range_Control_js__WEBPACK_IMPORTED_MODULE_9__["RangeControl"];
controlConstructor.neve_responsive_range_control = _responsive_range_Control_js__WEBPACK_IMPORTED_MODULE_10__["ResponsiveRangeControl"];
controlConstructor.neve_color_control = _color_Control_js__WEBPACK_IMPORTED_MODULE_11__["ColorControl"];
controlConstructor.neve_presets_selector = _presets_selector_Control_js__WEBPACK_IMPORTED_MODULE_12__["PresetsSelectorControl"];
controlConstructor.neve_multiselect = _multiselect_Control_js__WEBPACK_IMPORTED_MODULE_13__["MultiSelectControl"];
controlConstructor.neve_responsive_radio_buttons_control = _responsive_radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_14__["ResponsiveRadioButtonsControl"];
controlConstructor.neve_radio_image_control = _radio_image_Control_js__WEBPACK_IMPORTED_MODULE_15__["RadioImageControl"];
controlConstructor.neve_ordering_control = _ordering_Control_js__WEBPACK_IMPORTED_MODULE_16__["OrderingControl"];
window.addEventListener('load', function () {
  // Todo: delete this.
  wp.customize.section('neve_blog_archive_layout').focus();
  var deviceButtons = document.querySelector('#customize-footer-actions .devices, .hfg--cb-devices-switcher a.switch-to');
  deviceButtons.addEventListener('click', function (e) {
    var event = new CustomEvent('neveChangedRepsonsivePreview', {
      detail: e.target.dataset.device
    });
    document.dispatchEvent(event);
  });
  Object(_dynamic_fields_index_js__WEBPACK_IMPORTED_MODULE_0__["init"])();
});
window.HFG = {
  getSettings: function getSettings() {
    var usedSettings = {};
    NeveReactCustomize.headerControls.map(function (item) {
      if (!wp.customize.control(item)) return false;
      usedSettings[item] = wp.customize.control(item).setting.get();
    });
    return JSON.stringify(usedSettings);
  }
};

/***/ }),

/***/ "./src/multiselect/Control.js":
/*!************************************!*\
  !*** ./src/multiselect/Control.js ***!
  \************************************/
/*! exports provided: MultiSelectControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectControl", function() { return MultiSelectControl; });
/* harmony import */ var _MultiSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiSelect */ "./src/multiselect/MultiSelect.js");
/* global wp */

var render = wp.element.render;
var MultiSelectControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    render( /*#__PURE__*/React.createElement(_MultiSelect__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: this
    }), this.container[0]);
  }
});

/***/ }),

/***/ "./src/multiselect/MultiSelect.js":
/*!****************************************!*\
  !*** ./src/multiselect/MultiSelect.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global wp */

var _wp$components = wp.components,
    Tooltip = _wp$components.Tooltip,
    Dashicon = _wp$components.Dashicon;
var useState = wp.element.useState;
var __ = wp.i18n.__;

var MultiSelect = function MultiSelect(_ref) {
  var control = _ref.control;
  var choices = control.params.choices;

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var addable = Object.keys(choices).filter(function (choice) {
    return !value.includes(choice);
  }).map(function (slug) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      key: slug,
      text: __('Add item', 'neve')
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "token",
      onClick: function onClick() {
        var newVal = [].concat(_toConsumableArray(value), [slug]);
        setValue(newVal);
        control.setting.set(newVal);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, choices[slug]), /*#__PURE__*/React.createElement(Dashicon, {
      icon: "plus-alt"
    })));
  });
  var values = value.filter(function (slug) {
    return choices[slug];
  }).map(function (slug) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      key: slug,
      text: __('Remove Item', 'neve')
    }, /*#__PURE__*/React.createElement("button", {
      className: "token",
      type: "button",
      onClick: function onClick() {
        var newVal = _toConsumableArray(value).filter(function (v) {
          return v !== slug;
        });

        setValue(newVal);
        control.setting.set(newVal);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, choices[slug]), /*#__PURE__*/React.createElement(Dashicon, {
      icon: "dismiss"
    })));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control neve-multiselect"
  }, /*#__PURE__*/React.createElement("span", {
    className: "customize-control-title"
  }, control.params.label), /*#__PURE__*/React.createElement("div", {
    className: "selected-options"
  }, values.length ? values : /*#__PURE__*/React.createElement("span", {
    className: "placeholder"
  }, __('Add items by clicking the ones below.', 'neve'))), /*#__PURE__*/React.createElement("div", {
    className: "available-options"
  }, addable.length > 0 ? addable : /*#__PURE__*/React.createElement("span", {
    className: "placeholder"
  }, __('All items are already selected.', 'neve'))));
};

MultiSelect.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);

/***/ }),

/***/ "./src/ordering/Control.js":
/*!*********************************!*\
  !*** ./src/ordering/Control.js ***!
  \*********************************/
/*! exports provided: OrderingControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderingControl", function() { return OrderingControl; });
/* harmony import */ var _OrderingComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderingComponent.js */ "./src/ordering/OrderingComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var OrderingControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_OrderingComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/ordering/OrderingComponent.js":
/*!*******************************************!*\
  !*** ./src/ordering/OrderingComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */




var __ = wp.i18n.__;
var useState = wp.element.useState;
var _wp$components = wp.components,
    Tooltip = _wp$components.Tooltip,
    Icon = _wp$components.Icon;
var List = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["SortableContainer"])(function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "items-list"
  }, children);
});
var Handle = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["SortableHandle"])(function () {
  return /*#__PURE__*/React.createElement(Tooltip, {
    text: __('Drag to Reorder', 'neve')
  }, /*#__PURE__*/React.createElement("button", {
    className: "handle",
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "menu"
  })));
});

var Item = function Item(_ref2) {
  var label = _ref2.label,
      slug = _ref2.slug,
      onToggle = _ref2.onToggle,
      className = _ref2.className,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['neve-sortable-item', className])
  }, /*#__PURE__*/React.createElement(Tooltip, {
    text: __('Toggle Visibility', 'neve')
  }, /*#__PURE__*/React.createElement("button", {
    className: "toggle",
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onToggle(slug);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "visibility"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label), !disabled && /*#__PURE__*/React.createElement(Handle, null));
};

var SortableItem = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_0__["SortableElement"])(Item);

var OrderingComponent = function OrderingComponent(_ref3) {
  var control = _ref3.control;

  var _useState = useState(JSON.parse(control.setting.get())),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _control$params = control.params,
      components = _control$params.components,
      label = _control$params.label;
  var disabled = Object.keys(components).filter(function (item) {
    return !value.includes(item);
  });

  var updateValue = function updateValue(newVal) {
    setValue(newVal);
    control.setting.set(JSON.stringify(newVal));
  };

  var handleSortEnd = function handleSortEnd(_ref4) {
    var newIndex = _ref4.newIndex,
        oldIndex = _ref4.oldIndex;
    var newOrder = array_move__WEBPACK_IMPORTED_MODULE_3___default()(value, oldIndex, newIndex);
    updateValue(newOrder);
  };

  var handleToggle = function handleToggle(slug) {
    var newValue = _toConsumableArray(value);

    if (newValue.includes(slug)) {
      newValue = newValue.filter(function (item) {
        return item !== slug;
      });
    } else {
      newValue.push(slug);
    }

    updateValue(newValue);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement("label", {
    className: "customize-control-title"
  }, label), /*#__PURE__*/React.createElement(List, {
    items: value,
    lockAxis: "y",
    useDragHandle: true,
    onSortEnd: handleSortEnd
  }, value.map(function (slug, index) {
    return /*#__PURE__*/React.createElement(SortableItem, {
      key: index,
      label: components[slug],
      index: index,
      slug: slug,
      onToggle: handleToggle
    });
  }), disabled.map(function (slug, index) {
    return /*#__PURE__*/React.createElement(Item, {
      className: "disabled",
      key: index,
      slug: slug,
      label: components[slug],
      index: index,
      onToggle: handleToggle,
      disabled: true
    });
  })));
};

OrderingComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
Item.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  slug: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (OrderingComponent);

/***/ }),

/***/ "./src/presets-selector/Control.js":
/*!*****************************************!*\
  !*** ./src/presets-selector/Control.js ***!
  \*****************************************/
/*! exports provided: PresetsSelectorControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetsSelectorControl", function() { return PresetsSelectorControl; });
/* harmony import */ var _PresetsSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PresetsSelector */ "./src/presets-selector/PresetsSelector.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var PresetsSelectorControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    render( /*#__PURE__*/React.createElement(_PresetsSelector__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: this
    }), this.container[0]);
  }
});

/***/ }),

/***/ "./src/presets-selector/PresetsSelector.js":
/*!*************************************************!*\
  !*** ./src/presets-selector/PresetsSelector.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* jshint esversion: 6 */

/* global wp */


var Component = wp.element.Component;
var Tooltip = wp.components.Tooltip;
var __ = wp.i18n.__;

var PresetsSelector = /*#__PURE__*/function (_Component) {
  _inherits(PresetsSelector, _Component);

  var _super = _createSuper(PresetsSelector);

  function PresetsSelector(props) {
    var _this;

    _classCallCheck(this, PresetsSelector);

    _this = _super.call(this, props);
    _this.state = {
      search: ''
    };
    _this.replaceSettings = _this.replaceSettings.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * You can get the value in the console with this command:
   *
   * copy(HFG.getSettings());
   *
   * @returns {*}
   */


  _createClass(PresetsSelector, [{
    key: "getPresets",
    value: function getPresets() {
      var _this2 = this;

      var presets = this.props.control.params.presets;
      return presets.filter(function (preset) {
        return preset.label.toLowerCase().includes(_this2.state.search.toLowerCase());
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var presets = this.getPresets();
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-preset-selector"
      }, /*#__PURE__*/React.createElement("div", {
        className: "search"
      }, /*#__PURE__*/React.createElement("input", {
        type: "search",
        placeholder: __('Search Header Presets...'),
        onChange: function onChange(e) {
          _this3.setState({
            search: e.target.value
          });
        }
      })), presets.length > 0 ? presets.map(function (preset, index) {
        return /*#__PURE__*/React.createElement(Tooltip, {
          key: index,
          text: preset.label
        }, /*#__PURE__*/React.createElement("button", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this3.replaceSettings(preset.setup);
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: preset.image,
          alt: preset.label
        })));
      }) : /*#__PURE__*/React.createElement("p", null, __('No header presets found', 'neve')));
    }
  }, {
    key: "replaceSettings",
    value: function replaceSettings(setup) {
      setup = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["maybeParseJson"])(setup);

      if (typeof NeveProReactCustomize === 'undefined') {
        Object.keys(setup).map(function (themeMod) {
          if (themeMod === 'hfg_header_layout') {
            wp.customize.control(themeMod).setting.set(setup[themeMod]);
            document.dispatchEvent(new CustomEvent('neve-changed-builder-value', {
              detail: {
                value: Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["maybeParseJson"])(setup[themeMod]),
                id: 'header'
              }
            }));
            return false;
          } else {
            if (!wp.customize.control(themeMod)) return false;

            if (['text', 'textarea', 'select'].includes(wp.customize.control(themeMod).params.type)) {
              wp.customize.control(themeMod).setting.set(setup[themeMod]);
              return false;
            }

            document.dispatchEvent(new CustomEvent('neve-changed-customizer-value', {
              detail: {
                value: setup[themeMod] || '',
                id: themeMod
              }
            }));
          }
        });
        return false;
      }

      document.dispatchEvent(new CustomEvent('neve-preset-changed', {
        detail: {
          themeMods: setup
        }
      }));
    }
  }]);

  return PresetsSelector;
}(Component);

PresetsSelector.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PresetsSelector);

/***/ }),

/***/ "./src/radio-buttons/Control.js":
/*!**************************************!*\
  !*** ./src/radio-buttons/Control.js ***!
  \**************************************/
/*! exports provided: RadioButtonsControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsControl", function() { return RadioButtonsControl; });
/* harmony import */ var _RadioButtonsComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioButtonsComponent.js */ "./src/radio-buttons/RadioButtonsComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var RadioButtonsControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_RadioButtonsComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/radio-buttons/RadioButtonsComponent.js":
/*!****************************************************!*\
  !*** ./src/radio-buttons/RadioButtonsComponent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_RadioIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/RadioIcons */ "./src/common/RadioIcons.js");
/* harmony import */ var _common_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/svg.js */ "./src/common/svg.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */




var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var RadioButtonsComponent = function RadioButtonsComponent(_ref) {
  var control = _ref.control;

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useEffect(function () {
    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false;

      _this.updateValue(e.detail.value);
    });
  }, []);

  var updateValue = function updateValue(newVal) {
    setValue(newVal);
    control.setting.set(newVal);
  };

  var getChoices = function getChoices() {
    var _control$params = control.params,
        is_for = _control$params.is_for,
        choices = _control$params.choices;

    if (!is_for) {
      return choices;
    }

    switch (is_for) {
      case 'logo':
        return {
          "default": {
            tooltip: __('Logo Only', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].logoOnly
          },
          logoTitle: {
            tooltip: __('Logo - Title & Tagline', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].logoTitle
          },
          titleLogo: {
            tooltip: __('Title & Tagline - Logo', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].titleLogo
          },
          logoTopTitle: {
            tooltip: __('Logo on Top', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].logoTopTitle
          }
        };

      case 'menu':
        return {
          'style-plain': {
            tooltip: __('Plain', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuPlain
          },
          'style-full-height': {
            tooltip: __('Background', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuFilled
          },
          'style-border-bottom': {
            tooltip: __('Bottom Border', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuUnderline
          },
          'style-border-top': {
            tooltip: __('Top Border', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].menuOverline
          }
        };

      case 'account_component':
        return {
          user_icon_style1: {
            tooltip: __('Icon Style 2', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUserSolid
          },
          user_icon_style2: {
            tooltip: __('Icon Style 1', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUserRegular
          },
          user_icon_style3: {
            tooltip: __('Icon Style 3', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUserTagSolid
          },
          user_icon_style4: {
            tooltip: __('Icon Style 4', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUserAltSolid
          },
          user_icon_style5: {
            tooltip: __('Icon Style 5', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUsersSolid
          },
          user_icon_style6: {
            tooltip: __('Icon Style 6', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUsersFirendsSolid
          },
          user_avatar: {
            tooltip: __('WordPress Avatar', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountUserAvatar
          },
          none: {
            tooltip: __('No Icon', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].myAccountNone
          }
        };

      case 'cart_component':
        return {
          'cart-icon-style1': {
            tooltip: __('Style 1', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle1
          },
          'cart-icon-style2': {
            tooltip: __('Style 2', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle2
          },
          'cart-icon-style3': {
            tooltip: __('Style 3', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle3
          },
          'cart-icon-style4': {
            tooltip: __('Style 4', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle4
          },
          'cart-icon-style5': {
            tooltip: __('Style 5', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle5
          },
          'cart-icon-style6': {
            tooltip: __('Style 6', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle6
          }
        };

      case 'blog_image_position':
        return {
          left: {
            tooltip: __('Left', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].mediaAlignLeft
          },
          no: {
            tooltip: __('No image', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].cartIconStyle5
          },
          right: {
            tooltip: __('Right', 'neve'),
            icon: _common_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"].mediaAlignRight
          }
        };
    }
  };

  var _control$params2 = control.params,
      label = _control$params2.label,
      large_buttons = _control$params2.large_buttons,
      showLabels = _control$params2.showLabels;
  var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(['neve-white-background-control', {
    'large-buttons': large_buttons === true
  }]);
  return /*#__PURE__*/React.createElement("div", {
    className: wrapClasses
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "customize-control-title"
  }, label), /*#__PURE__*/React.createElement(_common_RadioIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showLabels: showLabels,
    value: value,
    options: getChoices(),
    onChange: updateValue
  }));
};

RadioButtonsComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RadioButtonsComponent);

/***/ }),

/***/ "./src/radio-image/Control.js":
/*!************************************!*\
  !*** ./src/radio-image/Control.js ***!
  \************************************/
/*! exports provided: RadioImageControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioImageControl", function() { return RadioImageControl; });
/* harmony import */ var _RadioImageComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioImageComponent.js */ "./src/radio-image/RadioImageComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var RadioImageControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_RadioImageComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/radio-image/RadioImageComponent.js":
/*!************************************************!*\
  !*** ./src/radio-image/RadioImageComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */


var useState = wp.element.useState;

var RadioImageComponent = function RadioImageComponent(_ref) {
  var control = _ref.control;

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var choices = control.params.choices;

  var updateValue = function updateValue(newVal) {
    setValue(newVal);
    control.setting.set(newVal);
  };

  var renderOptions = function renderOptions() {
    return Object.keys(choices).map(function (choice, index) {
      var _choices$choice = choices[choice],
          name = _choices$choice.name,
          image = _choices$choice.image;
      var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()([{
        active: choice === value
      }]);
      return /*#__PURE__*/React.createElement("div", {
        className: "option",
        key: index
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("button", {
        className: buttonClass,
        onClick: function onClick(e) {
          e.preventDefault();
          updateValue(choice);
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: image,
        alt: name || "Option ".concat(choice)
      })), name && /*#__PURE__*/React.createElement("span", null, name)));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-radio-image"
  }, renderOptions());
};

RadioImageComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RadioImageComponent);

/***/ }),

/***/ "./src/range/Control.js":
/*!******************************!*\
  !*** ./src/range/Control.js ***!
  \******************************/
/*! exports provided: RangeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeControl", function() { return RangeControl; });
/* harmony import */ var _RangeComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RangeComponent.js */ "./src/range/RangeComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var RangeControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_RangeComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/range/RangeComponent.js":
/*!*************************************!*\
  !*** ./src/range/RangeComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */

var RangeControl = wp.components.RangeControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var RangeComponent = function RangeComponent(_ref) {
  var control = _ref.control;
  useEffect(function () {
    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false;
      updateValues(e.detail.value);
    });
  }, []);

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var defaults = {
    min: 0,
    max: 100,
    defaultVal: 15,
    step: 1
  };

  var controlProps = _objectSpread(_objectSpread({}, defaults), control.params.input_attrs || {});

  var label = control.params.label;
  var defaultVal = controlProps.defaultVal,
      min = controlProps.min,
      max = controlProps.max,
      step = controlProps.step;

  var updateValues = function updateValues(newVal) {
    setValue(newVal);
    control.setting.set(newVal);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control neve-range-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "neve-control-header"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "customize-control-title"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "range-wrap"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    resetFallbackValue: defaultVal || '',
    value: value,
    min: min < 0 ? min : 0,
    max: max || 100,
    step: step || 1,
    allowReset: true,
    onChange: updateValues
  })));
};

RangeComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RangeComponent);

/***/ }),

/***/ "./src/responsive-radio-buttons/Control.js":
/*!*************************************************!*\
  !*** ./src/responsive-radio-buttons/Control.js ***!
  \*************************************************/
/*! exports provided: ResponsiveRadioButtonsControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveRadioButtonsControl", function() { return ResponsiveRadioButtonsControl; });
/* harmony import */ var _ResponsiveRadioButtonsComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveRadioButtonsComponent.js */ "./src/responsive-radio-buttons/ResponsiveRadioButtonsComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ResponsiveRadioButtonsControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ResponsiveRadioButtonsComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/responsive-radio-buttons/ResponsiveRadioButtonsComponent.js":
/*!*************************************************************************!*\
  !*** ./src/responsive-radio-buttons/ResponsiveRadioButtonsComponent.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_RadioIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/RadioIcons */ "./src/common/RadioIcons.js");
/* harmony import */ var _common_Responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Responsive */ "./src/common/Responsive.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */



var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var ResponsiveRadioButtonsComponent = function ResponsiveRadioButtonsComponent(_ref) {
  var control = _ref.control;
  var _control$params = control.params,
      choices = _control$params.choices,
      label = _control$params.label;

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState('desktop'),
      _useState4 = _slicedToArray(_useState3, 2),
      device = _useState4[0],
      setDevice = _useState4[1];

  var updateValue = function updateValue(newValue) {
    setValue(newValue);
    control.setting.set(newValue);
  };

  useEffect(function () {
    var isMenuAlignment = control.id.indexOf('primary-menu') > -1 || control.id.indexOf('secondary-menu') > -1; // Migrate previously string value into responsive.

    if (typeof value === 'string') {
      setValue({
        mobile: isMenuAlignment ? 'left' : value,
        tablet: isMenuAlignment ? 'left' : value,
        desktop: value
      });
    }

    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false;
      var recievedValue = e.detail.value; // Migrate previously string value into responsive.

      if (typeof recievedValue === 'string') {
        recievedValue = {
          mobile: isMenuAlignment ? 'left' : recievedValue,
          tablet: isMenuAlignment ? 'left' : recievedValue,
          desktop: recievedValue
        };
        setValue(recievedValue);
      }
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "neve-control-header"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "customize-control-title"
  }, label), /*#__PURE__*/React.createElement(_common_Responsive__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: function onChange(device) {
      return setDevice(device);
    }
  })), /*#__PURE__*/React.createElement(_common_RadioIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: value[device],
    options: choices,
    onChange: function onChange(newVal) {
      updateValue(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, device, newVal)));
    }
  }));
};

ResponsiveRadioButtonsComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRadioButtonsComponent);

/***/ }),

/***/ "./src/responsive-range/Control.js":
/*!*****************************************!*\
  !*** ./src/responsive-range/Control.js ***!
  \*****************************************/
/*! exports provided: ResponsiveRangeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveRangeControl", function() { return ResponsiveRangeControl; });
/* harmony import */ var _ResponsiveRangeComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveRangeComponent.js */ "./src/responsive-range/ResponsiveRangeComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ResponsiveRangeControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ResponsiveRangeComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/responsive-range/ResponsiveRangeComponent.js":
/*!**********************************************************!*\
  !*** ./src/responsive-range/ResponsiveRangeComponent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Responsive */ "./src/common/Responsive.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp, mapValues */




var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var ResponsiveRangeComponent = function ResponsiveRangeComponent(_ref) {
  var control = _ref.control;
  var parsedValue = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["maybeParseJson"])(control.setting.get());

  var _useState = useState('desktop'),
      _useState2 = _slicedToArray(_useState, 2),
      currentDevice = _useState2[0],
      setCurrentDevice = _useState2[1];

  var _useState3 = useState(parsedValue),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  useEffect(function () {
    // If a value is int, make it responsive.
    var responsiveConverted = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["getIntValAsResponsive"])(control.setting.get());

    if (value !== responsiveConverted) {
      setValue(responsiveConverted);
    }

    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false; // Make sure we translate int values to responsive values.

      var incomingValue = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["getIntValAsResponsive"])(e.detail.value);
      setValue(Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["maybeParseJson"])(incomingValue));
      control.setting.set(JSON.stringify(incomingValue));
    });
  }, []);
  var label = control.params.label;
  var _control$params$input = control.params.input_attrs,
      hideResponsive = _control$params$input.hideResponsive,
      units = _control$params$input.units,
      defaultVal = _control$params$input.defaultVal,
      step = _control$params$input.step,
      min = _control$params$input.min,
      max = _control$params$input.max;

  var unitButtons = function unitButtons() {
    if (!units) {
      return null;
    }

    if (units.length === 1) {
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        disabled: true,
        className: "active alone"
      }, units[0]);
    }

    return units.map(function (unit, index) {
      var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        active: value[self.state.currentDevice + '-unit'] === unit
      });
      return /*#__PURE__*/React.createElement(Button, {
        key: index,
        isSmall: true,
        className: buttonClass,
        onClick: function onClick() {
          var nextValue = _objectSpread({}, value);

          nextValue[currentDevice + '-unit'] = unit;

          if (unit !== 'em') {
            nextValue[currentDevice] = mapValues(nextValue[currentDevice], function (value) {
              return value ? parseInt(value) : value;
            });
          }

          setValue(nextValue);
          control.setting.set(nextValue);
        }
      }, unit);
    });
  };

  var controlHeader = function controlHeader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "neve-control-header"
    }, label && /*#__PURE__*/React.createElement("span", {
      className: "customize-control-title"
    }, label), /*#__PURE__*/React.createElement(_common_Responsive__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: function onChange(device) {
        return setCurrentDevice(device);
      },
      hideResponsive: hideResponsive || false
    }), /*#__PURE__*/React.createElement("div", {
      className: "neve-units"
    }, unitButtons()));
  };

  var updateValues = function updateValues(newValue) {
    var nextValue = _objectSpread({}, value);

    nextValue[currentDevice] = newValue;
    setValue(nextValue);
    control.setting.set(JSON.stringify(nextValue));
  };

  var displayValue = parseInt(value[currentDevice]);
  displayValue = displayValue === 0 ? 0 : displayValue || '';

  if (control.id === 'neve_blog_covers_min_height') {
    console.log('VAL:', control.setting.get());
    console.log('PARSED:', parsedValue);
    console.log('==========================');
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control neve-range-control"
  }, controlHeader(), /*#__PURE__*/React.createElement("div", {
    className: "range-wrap"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    resetFallbackValue: defaultVal[currentDevice],
    value: displayValue,
    min: min < 0 ? min : 0,
    max: max || 100,
    step: step || 1,
    allowReset: true,
    onChange: function onChange(nextValue) {
      updateValues(nextValue);
    }
  })));
};

ResponsiveRangeComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveRangeComponent);

/***/ }),

/***/ "./src/responsive-toggle/Control.js":
/*!******************************************!*\
  !*** ./src/responsive-toggle/Control.js ***!
  \******************************************/
/*! exports provided: ResponsiveToggleControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveToggleControl", function() { return ResponsiveToggleControl; });
/* harmony import */ var _ResponsiveToggleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveToggleComponent.js */ "./src/responsive-toggle/ResponsiveToggleComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ResponsiveToggleControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ResponsiveToggleComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/responsive-toggle/ResponsiveToggleComponent.js":
/*!************************************************************!*\
  !*** ./src/responsive-toggle/ResponsiveToggleComponent.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Responsive */ "./src/common/Responsive.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */


var ToggleControl = wp.components.ToggleControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var ResponsiveToggleComponent = function ResponsiveToggleComponent(_ref) {
  var control = _ref.control;
  useEffect(function () {
    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) {
        return false;
      }

      if (e.detail.id !== control.id) {
        return false;
      }

      setValue(e.detail.value);
    });
  }, []);

  var _useState = useState(control.setting.get()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState('desktop'),
      _useState4 = _slicedToArray(_useState3, 2),
      device = _useState4[0],
      setDevice = _useState4[1];

  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control flex-contents"
  }, /*#__PURE__*/React.createElement(ToggleControl, {
    className: "neve-toggle-control",
    checked: value[device],
    label: control.params.label,
    onChange: function onChange(newValue) {
      var nextValue = _objectSpread({}, value);

      nextValue[device] = newValue;
      setValue(nextValue);
      control.setting.set(nextValue);
    }
  }), /*#__PURE__*/React.createElement(_common_Responsive__WEBPACK_IMPORTED_MODULE_1__["default"], {
    excluded: control.params.excluded || [],
    onChange: function onChange(device) {
      setDevice(device);
    }
  }));
};

ResponsiveToggleComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveToggleComponent);

/***/ }),

/***/ "./src/spacing/Control.js":
/*!********************************!*\
  !*** ./src/spacing/Control.js ***!
  \********************************/
/*! exports provided: SpacingControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacingControl", function() { return SpacingControl; });
/* harmony import */ var _SpacingComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpacingComponent.js */ "./src/spacing/SpacingComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var SpacingControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_SpacingComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/spacing/SpacingComponent.js":
/*!*****************************************!*\
  !*** ./src/spacing/SpacingComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Responsive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Responsive.js */ "./src/common/Responsive.js");
/* harmony import */ var _common_Sizing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Sizing.js */ "./src/common/Sizing.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
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

/* jshint esversion: 6 */

/* global wp, lodash */





var Component = wp.element.Component;
var Button = wp.components.Button;
var _lodash = lodash,
    mapValues = _lodash.mapValues;

var SpacingComponent = /*#__PURE__*/function (_Component) {
  _inherits(SpacingComponent, _Component);

  var _super = _createSuper(SpacingComponent);

  function SpacingComponent(props) {
    var _this;

    _classCallCheck(this, SpacingComponent);

    _this = _super.call(this, props);
    var defaultParams = {
      min: -300,
      max: 300,
      hideResponsiveButtons: false,
      units: ['px', 'em', '%']
    };
    _this.controlParams = props.control.params.input_attrs ? _objectSpread(_objectSpread({}, defaultParams), props.control.params.input_attrs) : defaultParams;
    var baseDefault = {
      mobile: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      tablet: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      desktop: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      'mobile-unit': 'px',
      'tablet-unit': 'px',
      'desktop-unit': 'px'
    };
    _this.defaultValue = props.control.params["default"] ? _objectSpread(_objectSpread({}, baseDefault), props.control.params["default"]) : baseDefault;
    var dbVal = props.control.setting.get();
    var value = Object(_common_common__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(_this.defaultValue, dbVal);
    _this.state = {
      value: value,
      linked: true,
      currentDevice: 'desktop'
    };

    if (!_this.shouldValuesBeLinked()) {
      _this.state.linked = false;
    }

    _this.shouldValuesBeLinked = _this.shouldValuesBeLinked.bind(_assertThisInitialized(_this));
    _this.getButtons = _this.getButtons.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SpacingComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = [{
        type: 'top',
        value: this.state.value[this.state.currentDevice].top
      }, {
        type: 'right',
        value: this.state.value[this.state.currentDevice].right
      }, {
        type: 'bottom',
        value: this.state.value[this.state.currentDevice].bottom
      }, {
        type: 'left',
        value: this.state.value[this.state.currentDevice].left
      }];
      var hideResponsiveButtons = this.controlParams.hideResponsiveButtons;
      var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['neve-white-background-control', 'neve-sizing']);
      return /*#__PURE__*/React.createElement("div", {
        className: wrapClasses
      }, /*#__PURE__*/React.createElement("div", {
        className: "neve-control-header"
      }, this.props.control.params.label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, this.props.control.params.label), /*#__PURE__*/React.createElement(_common_Responsive_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hideResponsive: hideResponsiveButtons,
        onChange: function onChange(currentDevice) {
          _this2.setState({
            currentDevice: currentDevice
          });

          _this2.setState({
            linked: _this2.shouldValuesBeLinked()
          });
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "neve-units"
      }, this.getButtons())), /*#__PURE__*/React.createElement(_common_Sizing_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        min: this.controlParams.min,
        max: this.controlParams.max,
        step: this.state.value[this.state.currentDevice + '-unit'] === 'em' ? 0.1 : 1,
        options: options,
        defaults: this.defaultValue[this.state.currentDevice],
        linked: this.state.linked,
        onLinked: function onLinked() {
          return _this2.setState({
            linked: !_this2.state.linked
          });
        },
        onChange: function onChange(optionType, numericValue) {
          _this2.setValue(optionType, numericValue);
        },
        onReset: function onReset() {
          _this2.setState({
            value: _this2.defaultValue
          });

          _this2.props.control.setting.set(_this2.defaultValue);
        }
      }));
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      var self = this;
      var units = this.controlParams.units;

      if (units.length === 1) {
        return /*#__PURE__*/React.createElement(Button, {
          isSmall: true,
          disabled: true,
          className: "active alone"
        }, units[0]);
      }

      return units.map(function (unit, index) {
        var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          active: self.state.value[self.state.currentDevice + '-unit'] === unit
        });
        return /*#__PURE__*/React.createElement(Button, {
          key: index,
          isSmall: true,
          className: buttonClass,
          onClick: function onClick() {
            var value = _objectSpread({}, self.state.value);

            value[self.state.currentDevice + '-unit'] = unit;

            if (unit !== 'em') {
              value[self.state.currentDevice] = mapValues(value[self.state.currentDevice], function (value) {
                return value ? parseInt(value) : value;
              });
            }

            self.setState({
              value: value
            });
            self.props.control.setting.set(value);
          }
        }, unit);
      });
    }
  }, {
    key: "setValue",
    value: function setValue(optionType, numericValue) {
      var value = _objectSpread({}, this.state.value);

      if (this.state.linked) {
        value[this.state.currentDevice] = mapValues(value[this.state.currentDevice], function () {
          return numericValue;
        });
      } else {
        value[this.state.currentDevice] = _objectSpread(_objectSpread({}, value[this.state.currentDevice]), {}, _defineProperty({}, optionType, numericValue));
      }

      this.updateValue(value);
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {
      this.setState({
        value: value
      });
      this.props.control.setting.set(value);
    }
  }, {
    key: "shouldValuesBeLinked",
    value: function shouldValuesBeLinked() {
      var values = [this.state.value[this.state.currentDevice].top, this.state.value[this.state.currentDevice].right, this.state.value[this.state.currentDevice].bottom, this.state.value[this.state.currentDevice].left]; // eslint-disable-next-line eqeqeq

      return values.every(function (value) {
        return value == values[0];
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this3.updateValue(e.detail.value || _this3.defaultValue);
      });
    }
  }]);

  return SpacingComponent;
}(Component);

SpacingComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SpacingComponent);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "controls.css";

/***/ }),

/***/ "./src/toggle/Control.js":
/*!*******************************!*\
  !*** ./src/toggle/Control.js ***!
  \*******************************/
/*! exports provided: ToggleControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleControl", function() { return ToggleControl; });
/* harmony import */ var _ToggleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleComponent.js */ "./src/toggle/ToggleComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var ToggleControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_ToggleComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/toggle/ToggleComponent.js":
/*!***************************************!*\
  !*** ./src/toggle/ToggleComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* jshint esversion: 6 */

/* global wp */

var Component = wp.element.Component;
var ToggleControl = wp.components.ToggleControl;

var ToggleComponent = /*#__PURE__*/function (_Component) {
  _inherits(ToggleComponent, _Component);

  var _super = _createSuper(ToggleComponent);

  function ToggleComponent(props) {
    var _this;

    _classCallCheck(this, ToggleComponent);

    _this = _super.call(this, props);
    _this.state = {
      value: props.control.setting.get()
    };
    return _this;
  }

  _createClass(ToggleComponent, [{
    key: "toggleValue",
    value: function toggleValue(newValue) {
      this.setState({
        value: newValue
      });
      this.props.control.setting.set(newValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "neve-white-background-control"
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        className: "neve-toggle-control",
        checked: this.state.value,
        label: this.props.control.params.label,
        onChange: function onChange(value) {
          return _this2.toggleValue(value);
        }
      }), this.props.control.params.description && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-description",
        dangerouslySetInnerHTML: {
          __html: this.props.control.params.description
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this3.toggleValue(e.detail.value);
      });
    }
  }]);

  return ToggleComponent;
}(Component);

ToggleComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ToggleComponent);

/***/ }),

/***/ "./src/typeface/Control.js":
/*!*********************************!*\
  !*** ./src/typeface/Control.js ***!
  \*********************************/
/*! exports provided: TypefaceControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypefaceControl", function() { return TypefaceControl; });
/* harmony import */ var _TypefaceComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypefaceComponent.js */ "./src/typeface/TypefaceComponent.js");
/* jshint esversion: 6 */

/* global wp */

var render = wp.element.render;
var TypefaceControl = wp.customize.Control.extend({
  renderContent: function renderContent() {
    var control = this;
    render( /*#__PURE__*/React.createElement(_TypefaceComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      control: control
    }), control.container[0]);
  }
});

/***/ }),

/***/ "./src/typeface/TypefaceComponent.js":
/*!*******************************************!*\
  !*** ./src/typeface/TypefaceComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_NumberControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/NumberControl.js */ "./src/common/NumberControl.js");
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

/* jshint esversion: 6 */

/* global wp */


var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var SelectControl = wp.components.SelectControl;

var TypefaceComponent = /*#__PURE__*/function (_Component) {
  _inherits(TypefaceComponent, _Component);

  var _super = _createSuper(TypefaceComponent);

  function TypefaceComponent(props) {
    var _this;

    _classCallCheck(this, TypefaceComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    var defaultParams = {
      size_units: ['em', 'px'],
      line_height_units: ['em', 'px'],
      weight_default: 400,
      text_transform: 'none',
      size_default: {
        suffix: {
          mobile: 'px',
          tablet: 'px',
          desktop: 'px'
        },
        mobile: 15,
        tablet: 15,
        desktop: 15
      },
      line_height_default: {
        suffix: {
          mobile: 'em',
          tablet: 'em',
          desktop: 'em'
        },
        mobile: 1.6,
        tablet: 1.6,
        desktop: 1.6
      },
      letter_spacing_default: {
        mobile: 0,
        tablet: 0,
        desktop: 0
      }
    };

    if (!value) {
      value = _this.getEmptyValue();
    }

    if (props.control.params.input_attrs.length) {
      var input_attrs = JSON.parse(props.control.params.input_attrs);

      if (input_attrs.default_is_empty) {
        defaultParams = _this.getEmptyDefault();
      }
    } // Added Later. Make sure we have a default value if none is selected.


    value.lineHeight = value.lineHeight || defaultParams.line_height_default;
    value.lineHeight.suffix = value.lineHeight.suffix || defaultParams.line_height_default.suffix;
    _this.controlParams = props.control.params.input_attrs ? _objectSpread(_objectSpread({}, defaultParams), JSON.parse(props.control.params.input_attrs)) : defaultParams; // Added Later. Make sure we have a suffix for line height.

    _this.controlParams.line_height_default.suffix = _this.controlParams.line_height_default.suffix || defaultParams.line_height_default.suffix;
    _this.state = {
      currentDevice: 'desktop',
      fontSize: value.fontSize,
      lineHeight: value.lineHeight,
      letterSpacing: value.letterSpacing,
      fontWeight: value.fontWeight,
      textTransform: value.textTransform,
      flag: false
    };
    _this.renderFontWeight = _this.renderFontWeight.bind(_assertThisInitialized(_this));
    _this.renderTextTransform = _this.renderTextTransform.bind(_assertThisInitialized(_this));
    _this.renderFontSize = _this.renderFontSize.bind(_assertThisInitialized(_this));
    _this.renderLineHeight = _this.renderLineHeight.bind(_assertThisInitialized(_this));
    _this.renderLetterSpacing = _this.renderLetterSpacing.bind(_assertThisInitialized(_this));
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TypefaceComponent, [{
    key: "getEmptyValue",
    value: function getEmptyValue() {
      var prop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var emptyValue = {
        currentDevice: 'desktop',
        fontSize: {
          suffix: {
            mobile: 'px',
            tablet: 'px',
            desktop: 'px'
          },
          mobile: '',
          tablet: '',
          desktop: ''
        },
        lineHeight: {
          suffix: {
            mobile: 'em',
            tablet: 'em',
            desktop: 'em'
          },
          mobile: '',
          tablet: '',
          desktop: ''
        },
        letterSpacing: {
          mobile: '',
          tablet: '',
          desktop: ''
        },
        fontWeight: 'none',
        textTransform: 'none',
        flag: false
      };

      if (prop && emptyValue[prop]) {
        return emptyValue[prop];
      }

      return emptyValue;
    }
  }, {
    key: "getEmptyDefault",
    value: function getEmptyDefault() {
      return {
        size_units: ['em', 'px'],
        line_height_units: ['em', 'px'],
        weight_default: 'none',
        text_transform: 'none',
        size_default: {
          suffix: {
            mobile: 'px',
            tablet: 'px',
            desktop: 'px'
          },
          mobile: '',
          tablet: '',
          desktop: ''
        },
        line_height_default: {
          suffix: {
            mobile: 'em',
            tablet: 'em',
            desktop: 'em'
          },
          mobile: '',
          tablet: '',
          desktop: ''
        },
        letter_spacing_default: {
          mobile: '',
          tablet: '',
          desktop: ''
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Fragment, null, this.props.control.params.label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, this.props.control.params.label), /*#__PURE__*/React.createElement("div", {
        className: "neve-typeface-control neve-white-background-control"
      }, this.renderTextTransform(), this.renderFontWeight(), this.renderFontSize(), this.renderLineHeight(), this.renderLetterSpacing()));
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      this.props.control.setting.set(_objectSpread(_objectSpread(_objectSpread({}, this.props.control.setting.get()), value), {}, {
        flag: !this.props.control.setting.get().flag
      }));
    }
  }, {
    key: "renderFontWeight",
    value: function renderFontWeight() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "select-inline font-weight"
      }, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Weight', 'neve')), /*#__PURE__*/React.createElement(SelectControl, {
        value: this.state.fontWeight,
        options: [{
          value: 'none',
          label: __('None', 'neve')
        }, {
          value: 100,
          label: '100'
        }, {
          value: 200,
          label: '200'
        }, {
          value: 300,
          label: '300'
        }, {
          value: 400,
          label: '400'
        }, {
          value: 500,
          label: '500'
        }, {
          value: 600,
          label: '600'
        }, {
          value: 700,
          label: '700'
        }, {
          value: 800,
          label: '800'
        }, {
          value: 900,
          label: '900'
        }],
        onChange: function onChange(fontWeight) {
          _this2.setState({
            fontWeight: fontWeight
          });

          _this2.updateValues({
            fontWeight: fontWeight
          });

          if (fontWeight === 'none' && _this2.props.control.params.refresh_on_reset) {
            wp.customize.previewer.refresh();
          }
        }
      }));
    }
  }, {
    key: "renderTextTransform",
    value: function renderTextTransform() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "select-inline text-transform"
      }, /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, __('Transform', 'neve')), /*#__PURE__*/React.createElement(SelectControl, {
        value: this.state.textTransform,
        options: [{
          value: 'none',
          label: __('None', 'neve')
        }, {
          value: 'capitalize',
          label: __('Capitalize', 'neve')
        }, {
          value: 'lowercase',
          label: __('Lowercase', 'neve')
        }, {
          value: 'uppercase',
          label: __('Uppercase', 'neve')
        }],
        onChange: function onChange(textTransform) {
          _this3.setState({
            textTransform: textTransform
          });

          _this3.updateValues({
            textTransform: textTransform
          });
        }
      }));
    }
  }, {
    key: "renderFontSize",
    value: function renderFontSize() {
      var _this4 = this;

      var fontSize = this.state.fontSize;
      var currentDevice = this.state.currentDevice;
      var _this$controlParams = this.controlParams,
          size_default = _this$controlParams.size_default,
          size_units = _this$controlParams.size_units;

      if (!fontSize) {
        fontSize = this.getEmptyValue('fontSize');
      }

      return /*#__PURE__*/React.createElement(_common_NumberControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "font-size",
        label: __('Font Size', 'neve'),
        "default": size_default[currentDevice],
        value: fontSize[currentDevice],
        step: fontSize.suffix[currentDevice] === 'em' ? 0.1 : 1,
        units: size_units,
        activeUnit: fontSize.suffix[currentDevice],
        hasResponsive: true,
        onChange: function onChange(val) {
          var value = fontSize;
          value[currentDevice] = val;

          _this4.setState({
            fontSize: value
          });

          _this4.updateValues({
            fontSize: value
          });
        },
        onUnitChange: function onUnitChange(val) {
          var value = fontSize;
          value.suffix[currentDevice] = val;

          _this4.setState({
            fontSize: value
          });

          _this4.updateValues({
            fontSize: value
          });
        },
        onReset: function onReset() {
          var value = fontSize;
          value.suffix[currentDevice] = size_default.suffix[currentDevice];
          value[currentDevice] = size_default[currentDevice];

          _this4.setState({
            fontSize: value
          });

          _this4.updateValues({
            fontSize: value
          });

          if (_this4.props.control.params.refresh_on_reset) {
            wp.customize.previewer.refresh();
          }
        },
        onChangedDevice: function onChangedDevice(currentDevice) {
          return _this4.setState({
            currentDevice: currentDevice
          });
        }
      });
    }
  }, {
    key: "renderLineHeight",
    value: function renderLineHeight() {
      var _this5 = this;

      var _this$controlParams2 = this.controlParams,
          line_height_default = _this$controlParams2.line_height_default,
          line_height_units = _this$controlParams2.line_height_units;
      var currentDevice = this.state.currentDevice;
      var lineHeight = this.state.lineHeight;

      if (!lineHeight) {
        lineHeight = this.getEmptyValue('lineHeight');
      }

      return /*#__PURE__*/React.createElement(_common_NumberControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "line-height",
        label: __('Line Height', 'neve'),
        step: lineHeight.suffix[currentDevice] === 'em' ? 0.1 : 1,
        "default": line_height_default[currentDevice],
        value: lineHeight[currentDevice],
        units: line_height_units,
        activeUnit: lineHeight.suffix[currentDevice],
        max: lineHeight.suffix[currentDevice] === 'em' ? 4 : 200,
        min: lineHeight.suffix[currentDevice] === 'em' ? 0.5 : 1,
        hasResponsive: true,
        onChange: function onChange(val) {
          var value = lineHeight;
          value[currentDevice] = val;

          _this5.setState({
            lineHeight: value
          });

          _this5.updateValues({
            lineHeight: value
          });
        },
        onReset: function onReset() {
          var value = lineHeight;
          value.suffix = value.suffix || line_height_default.suffix;
          value.suffix[currentDevice] = line_height_default.suffix[currentDevice];
          value[currentDevice] = line_height_default[currentDevice];

          _this5.setState({
            lineHeight: value
          });

          _this5.updateValues({
            lineHeight: value
          });

          if (_this5.props.control.params.refresh_on_reset) {
            wp.customize.previewer.refresh();
          }
        },
        onUnitChange: function onUnitChange(val) {
          var value = lineHeight;
          value.suffix[currentDevice] = val;

          _this5.setState({
            lineHeight: value
          });

          _this5.updateValues({
            lineHeight: value
          });
        },
        onChangedDevice: function onChangedDevice(currentDevice) {
          return _this5.setState({
            currentDevice: currentDevice
          });
        }
      });
    }
  }, {
    key: "renderLetterSpacing",
    value: function renderLetterSpacing() {
      var _this6 = this;

      var letter_spacing_default = this.controlParams.letter_spacing_default;
      var currentDevice = this.state.currentDevice;
      var letterSpacing = this.state.letterSpacing;

      if (!letterSpacing) {
        letterSpacing = this.getEmptyValue('letterSpacing');
      }

      return /*#__PURE__*/React.createElement(_common_NumberControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "letter-spacing",
        label: __('Letter Spacing', 'neve'),
        step: 0.1,
        "default": letter_spacing_default[currentDevice],
        value: letterSpacing && letterSpacing[currentDevice] ? letterSpacing[currentDevice] : '',
        max: 20,
        min: -5,
        units: ['px'],
        hasResponsive: true,
        onChange: function onChange(val) {
          var value = letterSpacing;
          value[currentDevice] = val;

          _this6.setState({
            letterSpacing: value
          });

          _this6.updateValues({
            letterSpacing: value
          });
        },
        onReset: function onReset() {
          var value = letterSpacing;
          value[currentDevice] = letter_spacing_default[currentDevice];

          _this6.setState({
            letterSpacing: value
          });

          _this6.updateValues({
            letterSpacing: value
          });

          if (_this6.props.control.params.refresh_on_reset) {
            wp.customize.previewer.refresh();
          }
        },
        onChangedDevice: function onChangedDevice(currentDevice) {
          return _this6.setState({
            currentDevice: currentDevice
          });
        }
      });
    }
  }]);

  return TypefaceComponent;
}(Component);

TypefaceComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TypefaceComponent);

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/style.scss */"./src/style.scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5LW1vdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc29ydGFibGUtaG9jL2Rpc3QvcmVhY3Qtc29ydGFibGUtaG9jLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi1hcHBlYXJhbmNlL0J1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi1hcHBlYXJhbmNlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yL0NvbG9yQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xvci9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vQ29sb3JDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vTnVtYmVyQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1JhZGlvSWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9SZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vU2luZ2xlU2l6aW5nSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9TaXppbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bmFtaWMtZmllbGRzL2R5bmFtaWMtZmllbGQtaW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2R5bmFtaWMtZmllbGRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mb250LWZhbWlseS9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9mb250LWZhbWlseS9Gb250RmFtaWx5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9mb250LWZhbWlseS9Gb250RmFtaWx5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRQcmV2aWV3TGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL211bHRpc2VsZWN0L0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL211bHRpc2VsZWN0L011bHRpU2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9vcmRlcmluZy9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmRlcmluZy9PcmRlcmluZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy1zZWxlY3Rvci9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzLXNlbGVjdG9yL1ByZXNldHNTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9ucy9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9yYWRpby1idXR0b25zL1JhZGlvQnV0dG9uc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8taW1hZ2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8taW1hZ2UvUmFkaW9JbWFnZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZ2UvUmFuZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtcmFkaW8tYnV0dG9ucy9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXJhZGlvLWJ1dHRvbnMvUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS1yYW5nZS9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXJhbmdlL1Jlc3BvbnNpdmVSYW5nZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS10b2dnbGUvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS10b2dnbGUvUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhY2luZy9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9zcGFjaW5nL1NwYWNpbmdDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZS9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUvVG9nZ2xlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlZmFjZS9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlZmFjZS9UeXBlZmFjZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJlbGVtZW50IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJNZWRpYVVwbG9hZCIsImJsb2NrRWRpdG9yIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiUmFuZ2VDb250cm9sIiwiRm9jYWxQb2ludFBpY2tlciIsIkRhc2hpY29uIiwiVG9nZ2xlQ29udHJvbCIsIlBsYWNlaG9sZGVyIiwiQmFja2dyb3VuZENvbXBvbmVudCIsInByb3BzIiwidmFsdWUiLCJjb250cm9sIiwic2V0dGluZyIsImdldCIsInN0YXRlIiwidHlwZSIsImltYWdlVXJsIiwiZm9jdXNQb2ludCIsIngiLCJ5IiwiY29sb3JWYWx1ZSIsIm92ZXJsYXlDb2xvclZhbHVlIiwib3ZlcmxheU9wYWNpdHkiLCJmaXhlZCIsInVzZUZlYXR1cmVkIiwidHlwZXMiLCJsYWJlbHMiLCJjb2xvciIsImltYWdlIiwiYnV0dG9ucyIsInNlbGYiLCJtYXAiLCJpbmRleCIsInB1c2giLCJlIiwidXBkYXRlU2V0dGluZyIsInBhcmFtcyIsImxhYmVsIiwiZ2V0QnV0dG9ucyIsImJhY2tncm91bmRDb2xvciIsImltYWdlRGF0YSIsInVybCIsIm9wZW4iLCJ2YWwiLCJuZXdQb2ludCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWlsIiwiaWQiLCJuZXdWYWx1ZXMiLCJzZXRTdGF0ZSIsInNldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJyZW5kZXIiLCJCYWNrZ3JvdW5kQ29udHJvbCIsImN1c3RvbWl6ZSIsIkNvbnRyb2wiLCJleHRlbmQiLCJyZW5kZXJDb250ZW50IiwiY29udGFpbmVyIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsImxvZGFzaCIsIm1hcFZhbHVlcyIsIkJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQiLCJkZWZhdWx0c0Zyb21Db250cm9sIiwiYm9yZGVyUmFkaXVzIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiYm9yZGVyV2lkdGgiLCJkZWZhdWx0VmFscyIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSG92ZXIiLCJ0ZXh0IiwidGV4dEhvdmVyIiwicmFkaXVzTGlua2VkIiwid2lkdGhMaW5rZWQiLCJpc0xpbmtlZCIsInJlbmRlckJvcmRlckNvbnRyb2xzIiwiYmluZCIsInJlbmRlclR5cGVDb250cm9scyIsInJlbmRlckNvbG9ycyIsInJhZGl1c09wdGlvbnMiLCJ3aWR0aE9wdGlvbnMiLCJvcHRpb25UeXBlIiwibnVtZXJpY1ZhbHVlIiwibmV3VmFsIiwidXBkYXRlVmFsdWVzIiwic2V0dGluZ3MiLCJub3JtYWwiLCJjb250cm9scyIsImhvdmVyIiwibm9faG92ZXIiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbFNsdWciLCJmaWxsIiwidG9vbHRpcCIsImljb24iLCJvdXRsaW5lIiwiciIsInciLCJ2YWx1ZXMiLCJldmVyeSIsIkJ1dHRvbkFwcGVhcmFuY2VDb250cm9sIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2xvckNvbXBvbmVudCIsInNldFZhbHVlIiwiZGlzYWJsZUFscGhhIiwiQ29sb3JDb250cm9sIiwiQ29sb3JQaWNrZXIiLCJEcm9wZG93biIsInNlbGVjdGVkQ29sb3IiLCJvbkNoYW5nZSIsImRlZmF1bHRWYWx1ZSIsInRvZ2dsZSIsImhhbmRsZUNoYW5nZSIsInJnYiIsImciLCJiIiwiYSIsImhleCIsImhhbmRsZUNsZWFyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJzdHJpbmciLCJmdW5jIiwiTnVtYmVyQ29udHJvbCIsInVuaXRzIiwiY2xhc3NOYW1lIiwiaGFzUmVzcG9uc2l2ZSIsImN1cnJlbnREZXZpY2UiLCJvbkNoYW5nZWREZXZpY2UiLCJtYXgiLCJtaW4iLCJzdGVwIiwib25SZXNldCIsImxlbmd0aCIsInVuaXQiLCJidXR0b25DbGFzcyIsImNsYXNzbmFtZXMiLCJhY3RpdmUiLCJhY3RpdmVVbml0Iiwib25Vbml0Q2hhbmdlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJib29sIiwiUmFkaW9JY29ucyIsIm9wdGlvbnMiLCJzaG93TGFiZWxzIiwiVG9vbHRpcCIsIlJlc3BvbnNpdmVDb250cm9sIiwidmlldyIsImxpbmtSZXNwb25zaXZlQnV0dG9ucyIsImRldmljZXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiZXhjbHVkZWQiLCJkZXZpY2VNYXAiLCJrZXkiLCJpbmNsdWRlcyIsImNvbnRyb2xMYWJlbCIsImhpZGVSZXNwb25zaXZlIiwiZGV2aWNlIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGlsZHJlbiIsInByZXZpZXdlZERldmljZSIsImNoYW5nZVZpZXdUeXBlIiwiYW55IiwiU2luZ2xlU2l6aW5nSW5wdXQiLCJ0YXJnZXQiLCJTaXppbmdDb250cm9sIiwiaGFzU2V0VmFsdWVzIiwibGlua0J1dHRvbiIsIm5vTGlua2luZyIsImxpbmtlZCIsIm9uTGlua2VkIiwid3JhcENsYXNzZXMiLCJpIiwibiIsImRlZmF1bHRzIiwiZmlsdGVyIiwib3B0aW9uIiwibWF5YmVQYXJzZUpzb24iLCJpbnB1dCIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiaXNPYmplY3QiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWVyZ2VEZWVwIiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiZ2V0SW50VmFsQXNSZXNwb25zaXZlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU1ZHIiwibG9nb09ubHkiLCJsb2dvVG9wVGl0bGUiLCJsb2dvVGl0bGUiLCJ0aXRsZUxvZ28iLCJweCIsImVtIiwicGVyY2VudCIsImJ1dHRvbkZpbGwiLCJidXR0b25PdXRsaW5lIiwibWVudVBsYWluIiwibWVudUZpbGxlZCIsIm1lbnVVbmRlcmxpbmUiLCJtZW51T3ZlcmxpbmUiLCJteUFjY291bnRVc2Vyc1NvbGlkIiwibXlBY2NvdW50VXNlcnNGaXJlbmRzU29saWQiLCJteUFjY291bnRVc2VyU29saWQiLCJteUFjY291bnRVc2VyUmVndWxhciIsIm15QWNjb3VudFVzZXJUYWdTb2xpZCIsIm15QWNjb3VudFVzZXJBbHRTb2xpZCIsIm15QWNjb3VudFVzZXJBdmF0YXIiLCJteUFjY291bnROb25lIiwiY2FydEljb25TdHlsZTEiLCJjYXJ0SWNvblN0eWxlMiIsImNhcnRJY29uU3R5bGUzIiwiY2FydEljb25TdHlsZTQiLCJjYXJ0SWNvblN0eWxlNSIsImNhcnRJY29uU3R5bGU2IiwibWVkaWFBbGlnbkxlZnQiLCJtZWRpYUFsaWduUmlnaHQiLCJEcm9wZG93bk1lbnUiLCJNZW51R3JvdXAiLCJNZW51SXRlbSIsIkR5bmFtaWNGaWVsZEluc2VydGVyIiwiZ2V0T3B0aW9ucyIsIm9uU2VsZWN0IiwiYWxsb3dlZE9wdGlvbnNUeXBlcyIsImFsbE9wdGlvbnMiLCJOZXZlUmVhY3RDdXN0b21pemUiLCJkeW5hbWljVGFncyIsImZvckVhY2giLCJvcHRpb25Hcm91cCIsInNsdWciLCJpbml0IiwiZmllbGRTZWxlY3Rpb24iLCJjb250cm9sSWQiLCJkeW5hbWljQ29udHJvbFdyYXAiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsIm1hZ2ljVGFnIiwiZ3JvdXAiLCJhZGRUb0ZpZWxkIiwidGFnIiwic3Vic3RyaW5nIiwiZm9jdXMiLCJFdmVudCIsIkZvbnRGYW1pbHlDb250cm9sIiwiVHlwZWZhY2VDb21wb25lbnQiLCJmb250RmFtaWx5IiwiZm9udEZhbWlseVNvdXJjZSIsImRlZmF1bHRQYXJhbXMiLCJkZWZhdWx0X2lzX2luaGVyaXQiLCJjb250cm9sUGFyYW1zIiwiaW5wdXRfYXR0cnMiLCJmb250IiwidHlwZWtpdFNsdWdzIiwidXBkYXRlQ29udHJvbCIsIm1heWJlX2dldF90eXBla2l0X2ZvbnQiLCJzZXRUaW1lb3V0IiwicHJldmlld2VyIiwic2VuZCIsImluaGVyaXQiLCJQb3BvdmVyIiwiVGV4dENvbnRyb2wiLCJGb250RmFtaWx5U2VsZWN0b3IiLCJmb250cyIsImlzVmlzaWJsZSIsInNlYXJjaCIsImxvYWRVbnRpbCIsImRlbGF5Rm9udEluY2x1c2lvbiIsImZvbnRHcm91cHMiLCJyZXN1bHQiLCJ0b0xvd2VyQ2FzZSIsImdldEZvbnRzIiwiaW5oZXJpdERlZmF1bHQiLCJvbkZvbnRDaG9pY2UiLCJzZWxlY3RlZCIsIm1heWJlR2V0VHlwZWtpdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdEZvbnRmYWNlIiwiZ2V0Rm9udExpc3QiLCJGb250UHJldmlld0xpbmsiLCJwcmV2aWV3V2FzUmVuZGVyZWQiLCJzdHlsZSIsImZvbnRGYWNlIiwib25DbGljayIsImRlbGF5TG9hZCIsImNvbnRyb2xDb25zdHJ1Y3RvciIsIm5ldmVfdG9nZ2xlX2NvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfdG9nZ2xlX2NvbnRyb2wiLCJSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCIsIm5ldmVfYmFja2dyb3VuZF9jb250cm9sIiwibmV2ZV9zcGFjaW5nIiwiU3BhY2luZ0NvbnRyb2wiLCJuZXZlX3R5cGVmYWNlX2NvbnRyb2wiLCJUeXBlZmFjZUNvbnRyb2wiLCJuZXZlX2ZvbnRfZmFtaWx5X2NvbnRyb2wiLCJuZXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCIsIlJhZGlvQnV0dG9uc0NvbnRyb2wiLCJuZXZlX2J1dHRvbl9hcHBlYXJhbmNlIiwibmV2ZV9yYW5nZV9jb250cm9sIiwibmV2ZV9yZXNwb25zaXZlX3JhbmdlX2NvbnRyb2wiLCJSZXNwb25zaXZlUmFuZ2VDb250cm9sIiwibmV2ZV9jb2xvcl9jb250cm9sIiwibmV2ZV9wcmVzZXRzX3NlbGVjdG9yIiwiUHJlc2V0c1NlbGVjdG9yQ29udHJvbCIsIm5ldmVfbXVsdGlzZWxlY3QiLCJNdWx0aVNlbGVjdENvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfcmFkaW9fYnV0dG9uc19jb250cm9sIiwiUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2wiLCJuZXZlX3JhZGlvX2ltYWdlX2NvbnRyb2wiLCJSYWRpb0ltYWdlQ29udHJvbCIsIm5ldmVfb3JkZXJpbmdfY29udHJvbCIsIk9yZGVyaW5nQ29udHJvbCIsIndpbmRvdyIsInNlY3Rpb24iLCJkZXZpY2VCdXR0b25zIiwiZGF0YXNldCIsImluaXREeW5hbWljRmllbGRzIiwiSEZHIiwiZ2V0U2V0dGluZ3MiLCJ1c2VkU2V0dGluZ3MiLCJoZWFkZXJDb250cm9scyIsInN0cmluZ2lmeSIsIk11bHRpU2VsZWN0IiwiY2hvaWNlcyIsImFkZGFibGUiLCJjaG9pY2UiLCJ2IiwiSWNvbiIsIkxpc3QiLCJTb3J0YWJsZUNvbnRhaW5lciIsIkhhbmRsZSIsIlNvcnRhYmxlSGFuZGxlIiwiSXRlbSIsImRpc2FibGVkIiwiU29ydGFibGVJdGVtIiwiU29ydGFibGVFbGVtZW50IiwiT3JkZXJpbmdDb21wb25lbnQiLCJ1cGRhdGVWYWx1ZSIsImhhbmRsZVNvcnRFbmQiLCJuZXdJbmRleCIsIm9sZEluZGV4IiwibmV3T3JkZXIiLCJhcnJheU1vdmUiLCJoYW5kbGVUb2dnbGUiLCJuZXdWYWx1ZSIsIlByZXNldHNTZWxlY3RvciIsInJlcGxhY2VTZXR0aW5ncyIsInByZXNldHMiLCJwcmVzZXQiLCJnZXRQcmVzZXRzIiwic2V0dXAiLCJOZXZlUHJvUmVhY3RDdXN0b21pemUiLCJ0aGVtZU1vZCIsInRoZW1lTW9kcyIsIlJhZGlvQnV0dG9uc0NvbXBvbmVudCIsImdldENob2ljZXMiLCJpc19mb3IiLCJ1c2VyX2ljb25fc3R5bGUxIiwidXNlcl9pY29uX3N0eWxlMiIsInVzZXJfaWNvbl9zdHlsZTMiLCJ1c2VyX2ljb25fc3R5bGU0IiwidXNlcl9pY29uX3N0eWxlNSIsInVzZXJfaWNvbl9zdHlsZTYiLCJ1c2VyX2F2YXRhciIsIm5vbmUiLCJubyIsImxhcmdlX2J1dHRvbnMiLCJSYWRpb0ltYWdlQ29tcG9uZW50IiwicmVuZGVyT3B0aW9ucyIsIm5hbWUiLCJSYW5nZUNvbXBvbmVudCIsImRlZmF1bHRWYWwiLCJjb250cm9sUHJvcHMiLCJSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50Iiwic2V0RGV2aWNlIiwiaXNNZW51QWxpZ25tZW50IiwiaW5kZXhPZiIsInJlY2lldmVkVmFsdWUiLCJSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQiLCJwYXJzZWRWYWx1ZSIsInNldEN1cnJlbnREZXZpY2UiLCJyZXNwb25zaXZlQ29udmVydGVkIiwiaW5jb21pbmdWYWx1ZSIsInVuaXRCdXR0b25zIiwibmV4dFZhbHVlIiwicGFyc2VJbnQiLCJjb250cm9sSGVhZGVyIiwiZGlzcGxheVZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQiLCJTcGFjaW5nQ29tcG9uZW50IiwiaGlkZVJlc3BvbnNpdmVCdXR0b25zIiwiYmFzZURlZmF1bHQiLCJkYlZhbCIsInNob3VsZFZhbHVlc0JlTGlua2VkIiwiVG9nZ2xlQ29tcG9uZW50IiwidG9nZ2xlVmFsdWUiLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsIlNlbGVjdENvbnRyb2wiLCJzaXplX3VuaXRzIiwibGluZV9oZWlnaHRfdW5pdHMiLCJ3ZWlnaHRfZGVmYXVsdCIsInRleHRfdHJhbnNmb3JtIiwic2l6ZV9kZWZhdWx0Iiwic3VmZml4IiwibGluZV9oZWlnaHRfZGVmYXVsdCIsImxldHRlcl9zcGFjaW5nX2RlZmF1bHQiLCJnZXRFbXB0eVZhbHVlIiwiZGVmYXVsdF9pc19lbXB0eSIsImdldEVtcHR5RGVmYXVsdCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImZsYWciLCJyZW5kZXJGb250V2VpZ2h0IiwicmVuZGVyVGV4dFRyYW5zZm9ybSIsInJlbmRlckZvbnRTaXplIiwicmVuZGVyTGluZUhlaWdodCIsInJlbmRlckxldHRlclNwYWNpbmciLCJwcm9wIiwiZW1wdHlWYWx1ZSIsInJlZnJlc2hfb25fcmVzZXQiLCJyZWZyZXNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdk9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDBGQUErQjtBQUMxRDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNZO0FBQ0Y7QUFDSTtBQUNOO0FBQzRCO0FBQ3RCO0FBQ1o7QUFDMEI7QUFDZDtBQUN2QjtBQUNkO0FBQ0s7QUFDTjtBQUM0Qzs7QUFFOUU7QUFDQTtBQUNBLElBQUkseUZBQWU7O0FBRW5CLElBQUkseUZBQWUsaUJBQWlCO0FBQ3BDOztBQUVBLEVBQUUsc0ZBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlEQUFTOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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WSx5QkFBYSxFQUFFdmI7QUFBakIsV0FBZDs7QUFDQSxnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQjtBQUFFa1cseUJBQWEsRUFBRXZiO0FBQWpCLFdBQWxCO0FBQ0QsU0FmSDtBQWdCRSxlQUFPLEVBQUUsbUJBQU07QUFDYixjQUFNQSxLQUFLLEdBQUd1YixhQUFkO0FBQ0F2YixlQUFLLENBQUNrSSxhQUFELENBQUwsR0FBdUIrUyxzQkFBc0IsQ0FBQy9TLGFBQUQsQ0FBN0M7O0FBQ0EsZ0JBQUksQ0FBQ3hGLFFBQUwsQ0FBYztBQUFFNlkseUJBQWEsRUFBRXZiO0FBQWpCLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ3FGLFlBQUwsQ0FBa0I7QUFBRWtXLHlCQUFhLEVBQUV2YjtBQUFqQixXQUFsQjs7QUFDQSxjQUFLLE1BQUksQ0FBQ0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEJ3YSxnQkFBL0IsRUFBa0Q7QUFDaERuZCxjQUFFLENBQUNtRSxTQUFILENBQWF1TyxTQUFiLENBQXVCMEssT0FBdkI7QUFDRDtBQUNGLFNBeEJIO0FBeUJFLHVCQUFlLEVBQUUseUJBQUNqVSxhQUFEO0FBQUEsaUJBQW1CLE1BQUksQ0FBQ3hGLFFBQUwsQ0FBYztBQUFFd0YseUJBQWEsRUFBYkE7QUFBRixXQUFkLENBQW5CO0FBQUE7QUF6Qm5CLFFBREY7QUE2QkQ7Ozs7RUF0VzZCaEosUzs7QUF5V2hDMlIsaUJBQWlCLENBQUNqTyxTQUFsQixHQUE4QjtBQUM1QjNDLFNBQU8sRUFBRTRDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREUsQ0FBOUI7QUFJZThOLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVYQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJjb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZlwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gT2JqZWN0KGFyZ3VtZW50c1tpXSkgOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlNb3ZlTXV0YXRlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuXHRjb25zdCBzdGFydEluZGV4ID0gZnJvbSA8IDAgPyBhcnJheS5sZW5ndGggKyBmcm9tIDogZnJvbTtcblxuXHRpZiAoc3RhcnRJbmRleCA+PSAwICYmIHN0YXJ0SW5kZXggPCBhcnJheS5sZW5ndGgpIHtcblx0XHRjb25zdCBlbmRJbmRleCA9IHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG87XG5cblx0XHRjb25zdCBbaXRlbV0gPSBhcnJheS5zcGxpY2UoZnJvbSwgMSk7XG5cdFx0YXJyYXkuc3BsaWNlKGVuZEluZGV4LCAwLCBpdGVtKTtcblx0fVxufTtcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuXHRhcnJheSA9IFsuLi5hcnJheV07XG5cdGFycmF5TW92ZU11dGF0ZShhcnJheSwgZnJvbSwgdG8pO1xuXHRyZXR1cm4gYXJyYXk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TW92ZTtcbm1vZHVsZS5leHBvcnRzLm11dGF0ZSA9IGFycmF5TW92ZU11dGF0ZTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXknO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFuYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFuYWdlcik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWZzXCIsIHt9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGNvbGxlY3Rpb24sIHJlZikge1xuICAgICAgaWYgKCF0aGlzLnJlZnNbY29sbGVjdGlvbl0pIHtcbiAgICAgICAgdGhpcy5yZWZzW2NvbGxlY3Rpb25dID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVmc1tjb2xsZWN0aW9uXS5wdXNoKHJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoY29sbGVjdGlvbiwgcmVmKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4KGNvbGxlY3Rpb24sIHJlZik7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5yZWZzW2NvbGxlY3Rpb25dLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBY3RpdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aXZlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMucmVmc1t0aGlzLmFjdGl2ZS5jb2xsZWN0aW9uXS5maW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBub2RlID0gX3JlZi5ub2RlO1xuICAgICAgICByZXR1cm4gbm9kZS5zb3J0YWJsZUluZm8uaW5kZXggPT0gX3RoaXMuYWN0aXZlLmluZGV4O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEluZGV4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV4KGNvbGxlY3Rpb24sIHJlZikge1xuICAgICAgcmV0dXJuIHRoaXMucmVmc1tjb2xsZWN0aW9uXS5pbmRleE9mKHJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE9yZGVyZWRSZWZzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9yZGVyZWRSZWZzKCkge1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuYWN0aXZlLmNvbGxlY3Rpb247XG4gICAgICByZXR1cm4gdGhpcy5yZWZzW2NvbGxlY3Rpb25dLnNvcnQoc29ydEJ5SW5kZXgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYW5hZ2VyO1xufSgpO1xuXG5mdW5jdGlvbiBzb3J0QnlJbmRleChfcmVmMiwgX3JlZjMpIHtcbiAgdmFyIGluZGV4MSA9IF9yZWYyLm5vZGUuc29ydGFibGVJbmZvLmluZGV4O1xuICB2YXIgaW5kZXgyID0gX3JlZjMubm9kZS5zb3J0YWJsZUluZm8uaW5kZXg7XG4gIHJldHVybiBpbmRleDEgLSBpbmRleDI7XG59XG5cbmZ1bmN0aW9uIGFycmF5TW92ZShhcnJheSwgZnJvbSwgdG8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJEZXByZWNhdGlvbiB3YXJuaW5nOiBhcnJheU1vdmUgd2lsbCBubyBsb25nZXIgYmUgZXhwb3J0ZWQgYnkgJ3JlYWN0LXNvcnRhYmxlLWhvYycgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIGluc3RhbGwgdGhlIGBhcnJheS1tb3ZlYCBwYWNrYWdlIGxvY2FsbHkgaW5zdGVhZC4gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXJyYXktbW92ZVwiKTtcbiAgICB9XG4gIH1cblxuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBvbWl0KG9iaiwga2V5c1RvT21pdCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgaWYgKGtleXNUb09taXQuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG52YXIgZXZlbnRzID0ge1xuICBlbmQ6IFsndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAnbW91c2V1cCddLFxuICBtb3ZlOiBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXSxcbiAgc3RhcnQ6IFsndG91Y2hzdGFydCcsICdtb3VzZWRvd24nXVxufTtcbnZhciB2ZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJycpIHx8IFsnLW1vei1oaWRkZW4taWZyYW1lJ107XG4gIHZhciBwcmUgPSAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc3R5bGVzKS5qb2luKCcnKS5tYXRjaCgvLShtb3p8d2Via2l0fG1zKS0vKSB8fCBzdHlsZXMuT0xpbmsgPT09ICcnICYmIFsnJywgJ28nXSlbMV07XG5cbiAgc3dpdGNoIChwcmUpIHtcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gJ21zJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJlICYmIHByZS5sZW5ndGggPyBwcmVbMF0udG9VcHBlckNhc2UoKSArIHByZS5zdWJzdHIoMSkgOiAnJztcbiAgfVxufSgpO1xuZnVuY3Rpb24gc2V0SW5saW5lU3R5bGVzKG5vZGUsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5vZGUuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZTNkKG5vZGUsIHRyYW5zbGF0ZSkge1xuICBub2RlLnN0eWxlW1wiXCIuY29uY2F0KHZlbmRvclByZWZpeCwgXCJUcmFuc2Zvcm1cIildID0gdHJhbnNsYXRlID09IG51bGwgPyAnJyA6IFwidHJhbnNsYXRlM2QoXCIuY29uY2F0KHRyYW5zbGF0ZS54LCBcInB4LFwiKS5jb25jYXQodHJhbnNsYXRlLnksIFwicHgsMClcIik7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24obm9kZSwgZHVyYXRpb24pIHtcbiAgbm9kZS5zdHlsZVtcIlwiLmNvbmNhdCh2ZW5kb3JQcmVmaXgsIFwiVHJhbnNpdGlvbkR1cmF0aW9uXCIpXSA9IGR1cmF0aW9uID09IG51bGwgPyAnJyA6IFwiXCIuY29uY2F0KGR1cmF0aW9uLCBcIm1zXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VzdChlbCwgZm4pIHtcbiAgd2hpbGUgKGVsKSB7XG4gICAgaWYgKGZuKGVsKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gbGltaXQobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGl4ZWxWYWx1ZShzdHJpbmdWYWx1ZSkge1xuICBpZiAoc3RyaW5nVmFsdWUuc3Vic3RyKC0yKSA9PT0gJ3B4Jykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50TWFyZ2luKGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiB7XG4gICAgYm90dG9tOiBnZXRQaXhlbFZhbHVlKHN0eWxlLm1hcmdpbkJvdHRvbSksXG4gICAgbGVmdDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5tYXJnaW5MZWZ0KSxcbiAgICByaWdodDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5tYXJnaW5SaWdodCksXG4gICAgdG9wOiBnZXRQaXhlbFZhbHVlKHN0eWxlLm1hcmdpblRvcClcbiAgfTtcbn1cbmZ1bmN0aW9uIHByb3ZpZGVEaXNwbGF5TmFtZShwcmVmaXgsIENvbXBvbmVudCQkMSkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQkJDEubmFtZTtcbiAgcmV0dXJuIGNvbXBvbmVudE5hbWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiKFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIpXCIpIDogcHJlZml4O1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsQWRqdXN0ZWRCb3VuZGluZ0NsaWVudFJlY3Qobm9kZSwgc2Nyb2xsRGVsdGEpIHtcbiAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgc2Nyb2xsRGVsdGEudG9wLFxuICAgIGxlZnQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgc2Nyb2xsRGVsdGEubGVmdFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcbiAgICB9O1xuICB9IGVsc2UgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQucGFnZVgsXG4gICAgICB5OiBldmVudC5wYWdlWVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCB8fCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7XG59XG5mdW5jdGlvbiBnZXRFZGdlT2Zmc2V0KG5vZGUsIHBhcmVudCkge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDBcbiAgfTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdmFyIG5vZGVPZmZzZXQgPSB7XG4gICAgbGVmdDogb2Zmc2V0LmxlZnQgKyBub2RlLm9mZnNldExlZnQsXG4gICAgdG9wOiBvZmZzZXQudG9wICsgbm9kZS5vZmZzZXRUb3BcbiAgfTtcblxuICBpZiAobm9kZS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcbiAgICByZXR1cm4gbm9kZU9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBnZXRFZGdlT2Zmc2V0KG5vZGUucGFyZW50Tm9kZSwgcGFyZW50LCBub2RlT2Zmc2V0KTtcbn1cbmZ1bmN0aW9uIGdldFRhcmdldEluZGV4KG5ld0luZGV4LCBwcmV2SW5kZXgsIG9sZEluZGV4KSB7XG4gIGlmIChuZXdJbmRleCA8IG9sZEluZGV4ICYmIG5ld0luZGV4ID4gcHJldkluZGV4KSB7XG4gICAgcmV0dXJuIG5ld0luZGV4IC0gMTtcbiAgfSBlbHNlIGlmIChuZXdJbmRleCA+IG9sZEluZGV4ICYmIG5ld0luZGV4IDwgcHJldkluZGV4KSB7XG4gICAgcmV0dXJuIG5ld0luZGV4ICsgMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3SW5kZXg7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldExvY2tQaXhlbE9mZnNldChfcmVmKSB7XG4gIHZhciBsb2NrT2Zmc2V0ID0gX3JlZi5sb2NrT2Zmc2V0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG4gIHZhciBvZmZzZXRYID0gbG9ja09mZnNldDtcbiAgdmFyIG9mZnNldFkgPSBsb2NrT2Zmc2V0O1xuICB2YXIgdW5pdCA9ICdweCc7XG5cbiAgaWYgKHR5cGVvZiBsb2NrT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtYXRjaCA9IC9eWystXT9cXGQqKD86XFwuXFxkKik/KHB4fCUpJC8uZXhlYyhsb2NrT2Zmc2V0KTtcbiAgICBpbnZhcmlhbnQobWF0Y2ggIT09IG51bGwsICdsb2NrT2Zmc2V0IHZhbHVlIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBvZiBhICcgKyAnbnVtYmVyIGZvbGxvd2VkIGJ5IFwicHhcIiBvciBcIiVcIi4gR2l2ZW4gJXMnLCBsb2NrT2Zmc2V0KTtcbiAgICBvZmZzZXRYID0gcGFyc2VGbG9hdChsb2NrT2Zmc2V0KTtcbiAgICBvZmZzZXRZID0gcGFyc2VGbG9hdChsb2NrT2Zmc2V0KTtcbiAgICB1bml0ID0gbWF0Y2hbMV07XG4gIH1cblxuICBpbnZhcmlhbnQoaXNGaW5pdGUob2Zmc2V0WCkgJiYgaXNGaW5pdGUob2Zmc2V0WSksICdsb2NrT2Zmc2V0IHZhbHVlIHNob3VsZCBiZSBhIGZpbml0ZS4gR2l2ZW4gJXMnLCBsb2NrT2Zmc2V0KTtcblxuICBpZiAodW5pdCA9PT0gJyUnKSB7XG4gICAgb2Zmc2V0WCA9IG9mZnNldFggKiB3aWR0aCAvIDEwMDtcbiAgICBvZmZzZXRZID0gb2Zmc2V0WSAqIGhlaWdodCAvIDEwMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogb2Zmc2V0WCxcbiAgICB5OiBvZmZzZXRZXG4gIH07XG59XG5mdW5jdGlvbiBnZXRMb2NrUGl4ZWxPZmZzZXRzKF9yZWYyKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgbG9ja09mZnNldCA9IF9yZWYyLmxvY2tPZmZzZXQ7XG4gIHZhciBvZmZzZXRzID0gQXJyYXkuaXNBcnJheShsb2NrT2Zmc2V0KSA/IGxvY2tPZmZzZXQgOiBbbG9ja09mZnNldCwgbG9ja09mZnNldF07XG4gIGludmFyaWFudChvZmZzZXRzLmxlbmd0aCA9PT0gMiwgJ2xvY2tPZmZzZXQgcHJvcCBvZiBTb3J0YWJsZUNvbnRhaW5lciBzaG91bGQgYmUgYSBzaW5nbGUgJyArICd2YWx1ZSBvciBhbiBhcnJheSBvZiBleGFjdGx5IHR3byB2YWx1ZXMuIEdpdmVuICVzJywgbG9ja09mZnNldCk7XG5cbiAgdmFyIF9vZmZzZXRzID0gX3NsaWNlZFRvQXJyYXkob2Zmc2V0cywgMiksXG4gICAgICBtaW5Mb2NrT2Zmc2V0ID0gX29mZnNldHNbMF0sXG4gICAgICBtYXhMb2NrT2Zmc2V0ID0gX29mZnNldHNbMV07XG5cbiAgcmV0dXJuIFtnZXRMb2NrUGl4ZWxPZmZzZXQoe1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGxvY2tPZmZzZXQ6IG1pbkxvY2tPZmZzZXQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0pLCBnZXRMb2NrUGl4ZWxPZmZzZXQoe1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGxvY2tPZmZzZXQ6IG1heExvY2tPZmZzZXQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0pXTtcbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgb3ZlcmZsb3dSZWdleCA9IC8oYXV0b3xzY3JvbGwpLztcbiAgdmFyIHByb3BlcnRpZXMgPSBbJ292ZXJmbG93JywgJ292ZXJmbG93WCcsICdvdmVyZmxvd1knXTtcbiAgcmV0dXJuIHByb3BlcnRpZXMuZmluZChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dSZWdleC50ZXN0KGNvbXB1dGVkU3R5bGVbcHJvcGVydHldKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGluZ1BhcmVudChlbCkge1xuICBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKGlzU2Nyb2xsYWJsZShlbCkpIHtcbiAgICByZXR1cm4gZWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbGluZ1BhcmVudChlbC5wYXJlbnROb2RlKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyR3JpZEdhcChlbGVtZW50KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnZ3JpZCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZ2V0UGl4ZWxWYWx1ZShzdHlsZS5ncmlkQ29sdW1uR2FwKSxcbiAgICAgIHk6IGdldFBpeGVsVmFsdWUoc3R5bGUuZ3JpZFJvd0dhcClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbn1cbnZhciBLRVlDT0RFID0ge1xuICBUQUI6IDksXG4gIEVTQzogMjcsXG4gIFNQQUNFOiAzMixcbiAgTEVGVDogMzcsXG4gIFVQOiAzOCxcbiAgUklHSFQ6IDM5LFxuICBET1dOOiA0MFxufTtcbnZhciBOb2RlVHlwZSA9IHtcbiAgQW5jaG9yOiAnQScsXG4gIEJ1dHRvbjogJ0JVVFRPTicsXG4gIENhbnZhczogJ0NBTlZBUycsXG4gIElucHV0OiAnSU5QVVQnLFxuICBPcHRpb246ICdPUFRJT04nLFxuICBUZXh0YXJlYTogJ1RFWFRBUkVBJyxcbiAgU2VsZWN0OiAnU0VMRUNUJ1xufTtcbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gIHZhciBzZWxlY3RvciA9ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgY2FudmFzLCBbY29udGVudGVkaXRhYmxlXSc7XG4gIHZhciBmaWVsZHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB2YXIgY2xvbmVkTm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gIHZhciBjbG9uZWRGaWVsZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoY2xvbmVkTm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgY2xvbmVkRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkLCBpKSB7XG4gICAgaWYgKGZpZWxkLnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgZmllbGQudmFsdWUgPSBmaWVsZHNbaV0udmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycgJiYgZmllbGQubmFtZSkge1xuICAgICAgZmllbGQubmFtZSA9IFwiX19zb3J0YWJsZUNsb25lX19cIi5jb25jYXQoZmllbGQubmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnRhZ05hbWUgPT09IE5vZGVUeXBlLkNhbnZhcyAmJiBmaWVsZHNbaV0ud2lkdGggPiAwICYmIGZpZWxkc1tpXS5oZWlnaHQgPiAwKSB7XG4gICAgICB2YXIgZGVzdEN0eCA9IGZpZWxkLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBkZXN0Q3R4LmRyYXdJbWFnZShmaWVsZHNbaV0sIDAsIDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjbG9uZWROb2RlO1xufVxuXG5mdW5jdGlvbiBzb3J0YWJsZUhhbmRsZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVIYW5kbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2l0aFNvcnRhYmxlSGFuZGxlKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpdGhTb3J0YWJsZUhhbmRsZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2l0aFNvcnRhYmxlSGFuZGxlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2l0aFNvcnRhYmxlSGFuZGxlLCBbe1xuICAgICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIG5vZGUuc29ydGFibGVIYW5kbGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRXcmFwcGVkSW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgIGludmFyaWFudChjb25maWcud2l0aFJlZiwgJ1RvIGFjY2VzcyB0aGUgd3JhcHBlZCBpbnN0YW5jZSwgeW91IG5lZWQgdG8gcGFzcyBpbiB7d2l0aFJlZjogdHJ1ZX0gYXMgdGhlIHNlY29uZCBhcmd1bWVudCBvZiB0aGUgU29ydGFibGVIYW5kbGUoKSBjYWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWYgPSBjb25maWcud2l0aFJlZiA/ICd3cmFwcGVkSW5zdGFuY2UnIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0sIHRoaXMucHJvcHMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV2l0aFNvcnRhYmxlSGFuZGxlO1xuICB9KENvbXBvbmVudCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3MsIFwiZGlzcGxheU5hbWVcIiwgcHJvdmlkZURpc3BsYXlOYW1lKCdzb3J0YWJsZUhhbmRsZScsIFdyYXBwZWRDb21wb25lbnQpKSwgX3RlbXA7XG59XG5mdW5jdGlvbiBpc1NvcnRhYmxlSGFuZGxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc29ydGFibGVIYW5kbGUgIT0gbnVsbDtcbn1cblxudmFyIEF1dG9TY3JvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXV0b1Njcm9sbGVyKGNvbnRhaW5lciwgb25TY3JvbGxDYWxsYmFjaykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvU2Nyb2xsZXIpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5vblNjcm9sbENhbGxiYWNrID0gb25TY3JvbGxDYWxsYmFjaztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBdXRvU2Nyb2xsZXIsIFt7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZShfcmVmKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJhbnNsYXRlID0gX3JlZi50cmFuc2xhdGUsXG4gICAgICAgICAgbWluVHJhbnNsYXRlID0gX3JlZi5taW5UcmFuc2xhdGUsXG4gICAgICAgICAgbWF4VHJhbnNsYXRlID0gX3JlZi5tYXhUcmFuc2xhdGUsXG4gICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICAgIHZhciBzcGVlZCA9IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeTogMVxuICAgICAgfTtcbiAgICAgIHZhciBhY2NlbGVyYXRpb24gPSB7XG4gICAgICAgIHg6IDEwLFxuICAgICAgICB5OiAxMFxuICAgICAgfTtcbiAgICAgIHZhciBfdGhpcyRjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBfdGhpcyRjb250YWluZXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gX3RoaXMkY29udGFpbmVyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IF90aGlzJGNvbnRhaW5lci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgY2xpZW50V2lkdGggPSBfdGhpcyRjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICB2YXIgaXNUb3AgPSBzY3JvbGxUb3AgPT09IDA7XG4gICAgICB2YXIgaXNCb3R0b20gPSBzY3JvbGxIZWlnaHQgLSBzY3JvbGxUb3AgLSBjbGllbnRIZWlnaHQgPT09IDA7XG4gICAgICB2YXIgaXNMZWZ0ID0gc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICAgIHZhciBpc1JpZ2h0ID0gc2Nyb2xsV2lkdGggLSBzY3JvbGxMZWZ0IC0gY2xpZW50V2lkdGggPT09IDA7XG5cbiAgICAgIGlmICh0cmFuc2xhdGUueSA+PSBtYXhUcmFuc2xhdGUueSAtIGhlaWdodCAvIDIgJiYgIWlzQm90dG9tKSB7XG4gICAgICAgIGRpcmVjdGlvbi55ID0gMTtcbiAgICAgICAgc3BlZWQueSA9IGFjY2VsZXJhdGlvbi55ICogTWF0aC5hYnMoKG1heFRyYW5zbGF0ZS55IC0gaGVpZ2h0IC8gMiAtIHRyYW5zbGF0ZS55KSAvIGhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZS54ID49IG1heFRyYW5zbGF0ZS54IC0gd2lkdGggLyAyICYmICFpc1JpZ2h0KSB7XG4gICAgICAgIGRpcmVjdGlvbi54ID0gMTtcbiAgICAgICAgc3BlZWQueCA9IGFjY2VsZXJhdGlvbi54ICogTWF0aC5hYnMoKG1heFRyYW5zbGF0ZS54IC0gd2lkdGggLyAyIC0gdHJhbnNsYXRlLngpIC8gd2lkdGgpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUueSA8PSBtaW5UcmFuc2xhdGUueSArIGhlaWdodCAvIDIgJiYgIWlzVG9wKSB7XG4gICAgICAgIGRpcmVjdGlvbi55ID0gLTE7XG4gICAgICAgIHNwZWVkLnkgPSBhY2NlbGVyYXRpb24ueSAqIE1hdGguYWJzKCh0cmFuc2xhdGUueSAtIGhlaWdodCAvIDIgLSBtaW5UcmFuc2xhdGUueSkgLyBoZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUueCA8PSBtaW5UcmFuc2xhdGUueCArIHdpZHRoIC8gMiAmJiAhaXNMZWZ0KSB7XG4gICAgICAgIGRpcmVjdGlvbi54ID0gLTE7XG4gICAgICAgIHNwZWVkLnggPSBhY2NlbGVyYXRpb24ueCAqIE1hdGguYWJzKCh0cmFuc2xhdGUueCAtIHdpZHRoIC8gMiAtIG1pblRyYW5zbGF0ZS54KSAvIHdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmlzQXV0b1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uLnggIT09IDAgfHwgZGlyZWN0aW9uLnkgIT09IDApIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5pc0F1dG9TY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICAgICAgICBsZWZ0OiBzcGVlZC54ICogZGlyZWN0aW9uLngsXG4gICAgICAgICAgICB0b3A6IHNwZWVkLnkgKiBkaXJlY3Rpb24ueVxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMuY29udGFpbmVyLnNjcm9sbFRvcCArPSBvZmZzZXQudG9wO1xuICAgICAgICAgIF90aGlzLmNvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IG9mZnNldC5sZWZ0O1xuXG4gICAgICAgICAgX3RoaXMub25TY3JvbGxDYWxsYmFjayhvZmZzZXQpO1xuICAgICAgICB9LCA1KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXV0b1Njcm9sbGVyO1xufSgpO1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SGVscGVyRGltZW5zaW9ucyhfcmVmKSB7XG4gIHZhciBub2RlID0gX3JlZi5ub2RlO1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHQsXG4gICAgd2lkdGg6IG5vZGUub2Zmc2V0V2lkdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFNob3VsZENhbmNlbFN0YXJ0KGV2ZW50KSB7XG4gIHZhciBpbnRlcmFjdGl2ZUVsZW1lbnRzID0gW05vZGVUeXBlLklucHV0LCBOb2RlVHlwZS5UZXh0YXJlYSwgTm9kZVR5cGUuU2VsZWN0LCBOb2RlVHlwZS5PcHRpb24sIE5vZGVUeXBlLkJ1dHRvbl07XG5cbiAgaWYgKGludGVyYWN0aXZlRWxlbWVudHMuaW5kZXhPZihldmVudC50YXJnZXQudGFnTmFtZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbiAgfSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgYXhpczogUHJvcFR5cGVzLm9uZU9mKFsneCcsICd5JywgJ3h5J10pLFxuICBjb250ZW50V2luZG93OiBQcm9wVHlwZXMuYW55LFxuICBkaXNhYmxlQXV0b3Njcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc3RhbmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRIZWxwZXJEaW1lbnNpb25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVscGVyQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlbHBlckNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBQcm9wVHlwZXMuYW55IDogUHJvcFR5cGVzLmluc3RhbmNlT2YoSFRNTEVsZW1lbnQpXSksXG4gIGhpZGVTb3J0YWJsZUdob3N0OiBQcm9wVHlwZXMuYm9vbCxcbiAga2V5Ym9hcmRTb3J0aW5nVHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2NrQXhpczogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9ja09mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pKV0pLFxuICBsb2NrVG9Db250YWluZXJFZGdlczogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU29ydEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU29ydE1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnRPdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Tb3J0U3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBwcmVzc0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwcmVzc1RocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlcixcbiAga2V5Q29kZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGlmdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgZHJvcDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICB1cDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgZG93bjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgfSksXG4gIHNob3VsZENhbmNlbFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB1cGRhdGVCZWZvcmVTb3J0U3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICB1c2VEcmFnSGFuZGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlV2luZG93QXNTY3JvbGxDb250YWluZXI6IFByb3BUeXBlcy5ib29sXG59O1xudmFyIGRlZmF1bHRLZXlDb2RlcyA9IHtcbiAgbGlmdDogW0tFWUNPREUuU1BBQ0VdLFxuICBkcm9wOiBbS0VZQ09ERS5TUEFDRV0sXG4gIGNhbmNlbDogW0tFWUNPREUuRVNDXSxcbiAgdXA6IFtLRVlDT0RFLlVQLCBLRVlDT0RFLkxFRlRdLFxuICBkb3duOiBbS0VZQ09ERS5ET1dOLCBLRVlDT0RFLlJJR0hUXVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGF4aXM6ICd5JyxcbiAgZGlzYWJsZUF1dG9zY3JvbGw6IGZhbHNlLFxuICBkaXN0YW5jZTogMCxcbiAgZ2V0SGVscGVyRGltZW5zaW9uczogZGVmYXVsdEdldEhlbHBlckRpbWVuc2lvbnMsXG4gIGhpZGVTb3J0YWJsZUdob3N0OiB0cnVlLFxuICBsb2NrT2Zmc2V0OiAnNTAlJyxcbiAgbG9ja1RvQ29udGFpbmVyRWRnZXM6IGZhbHNlLFxuICBwcmVzc0RlbGF5OiAwLFxuICBwcmVzc1RocmVzaG9sZDogNSxcbiAga2V5Q29kZXM6IGRlZmF1bHRLZXlDb2RlcyxcbiAgc2hvdWxkQ2FuY2VsU3RhcnQ6IGRlZmF1bHRTaG91bGRDYW5jZWxTdGFydCxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDAsXG4gIHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyOiBmYWxzZVxufTtcbnZhciBvbWl0dGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMpO1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhwcm9wcykge1xuICBpbnZhcmlhbnQoIShwcm9wcy5kaXN0YW5jZSAmJiBwcm9wcy5wcmVzc0RlbGF5KSwgJ0F0dGVtcHRlZCB0byBzZXQgYm90aCBgcHJlc3NEZWxheWAgYW5kIGBkaXN0YW5jZWAgb24gU29ydGFibGVDb250YWluZXIsIHlvdSBtYXkgb25seSB1c2Ugb25lIG9yIHRoZSBvdGhlciwgbm90IGJvdGggYXQgdGhlIHNhbWUgdGltZS4nKTtcbn1cblxuZnVuY3Rpb24gX2ZpbmFsbHlSZXRocm93cyhib2R5LCBmaW5hbGl6ZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcmVzdWx0ID0gYm9keSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZpbmFsaXplcih0cnVlLCBlKTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG4gIH1cblxuICByZXR1cm4gZmluYWxpemVyKGZhbHNlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzb3J0YWJsZUNvbnRhaW5lcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVDb250YWluZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV2l0aFNvcnRhYmxlQ29udGFpbmVyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaXRoU29ydGFibGVDb250YWluZXIpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihXaXRoU29ydGFibGVDb250YWluZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHt9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZVN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gX3RoaXMkcHJvcHMuZGlzdGFuY2UsXG4gICAgICAgICAgICBzaG91bGRDYW5jZWxTdGFydCA9IF90aGlzJHByb3BzLnNob3VsZENhbmNlbFN0YXJ0O1xuXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIgfHwgc2hvdWxkQ2FuY2VsU3RhcnQoZXZlbnQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uID0gZ2V0UG9zaXRpb24oZXZlbnQpO1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuc29ydGFibGVJbmZvICYmIF90aGlzLm5vZGVJc0NoaWxkKG5vZGUpICYmICFfdGhpcy5zdGF0ZS5zb3J0aW5nKSB7XG4gICAgICAgICAgdmFyIHVzZURyYWdIYW5kbGUgPSBfdGhpcy5wcm9wcy51c2VEcmFnSGFuZGxlO1xuICAgICAgICAgIHZhciBfbm9kZSRzb3J0YWJsZUluZm8gPSBub2RlLnNvcnRhYmxlSW5mbyxcbiAgICAgICAgICAgICAgaW5kZXggPSBfbm9kZSRzb3J0YWJsZUluZm8uaW5kZXgsXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBfbm9kZSRzb3J0YWJsZUluZm8uY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfbm9kZSRzb3J0YWJsZUluZm8uZGlzYWJsZWQ7XG5cbiAgICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXNlRHJhZ0hhbmRsZSAmJiAhY2xvc2VzdChldmVudC50YXJnZXQsIGlzU29ydGFibGVIYW5kbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMubWFuYWdlci5hY3RpdmUgPSB7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICghaXNUb3VjaEV2ZW50KGV2ZW50KSAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gTm9kZVR5cGUuQW5jaG9yKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5wcmVzc0RlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICAgIF90aGlzLmhhbmRsZVByZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLnByZXNzVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlUHJlc3MoZXZlbnQpO1xuICAgICAgICAgICAgICB9LCBfdGhpcy5wcm9wcy5wcmVzc0RlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwibm9kZUlzQ2hpbGRcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuc29ydGFibGVJbmZvLm1hbmFnZXIgPT09IF90aGlzLm1hbmFnZXI7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZU1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gX3RoaXMkcHJvcHMyLmRpc3RhbmNlLFxuICAgICAgICAgICAgcHJlc3NUaHJlc2hvbGQgPSBfdGhpcyRwcm9wczIucHJlc3NUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5zb3J0aW5nICYmIF90aGlzLnRvdWNoZWQgJiYgIV90aGlzLl9hd2FpdGluZ1VwZGF0ZUJlZm9yZVNvcnRTdGFydCkge1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKGV2ZW50KTtcbiAgICAgICAgICB2YXIgZGVsdGEgPSB7XG4gICAgICAgICAgICB4OiBfdGhpcy5wb3NpdGlvbi54IC0gcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IF90aGlzLnBvc2l0aW9uLnkgLSBwb3NpdGlvbi55XG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgY29tYmluZWREZWx0YSA9IE1hdGguYWJzKGRlbHRhLngpICsgTWF0aC5hYnMoZGVsdGEueSk7XG4gICAgICAgICAgX3RoaXMuZGVsdGEgPSBkZWx0YTtcblxuICAgICAgICAgIGlmICghZGlzdGFuY2UgJiYgKCFwcmVzc1RocmVzaG9sZCB8fCBjb21iaW5lZERlbHRhID49IHByZXNzVGhyZXNob2xkKSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNhbmNlbFRpbWVyKTtcbiAgICAgICAgICAgIF90aGlzLmNhbmNlbFRpbWVyID0gc2V0VGltZW91dChfdGhpcy5jYW5jZWwsIDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgJiYgY29tYmluZWREZWx0YSA+PSBkaXN0YW5jZSAmJiBfdGhpcy5tYW5hZ2VyLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVByZXNzKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlRW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgIF90aGlzLmNhbmNlbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJjYW5jZWxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBfdGhpcy5wcm9wcy5kaXN0YW5jZTtcbiAgICAgICAgdmFyIHNvcnRpbmcgPSBfdGhpcy5zdGF0ZS5zb3J0aW5nO1xuXG4gICAgICAgIGlmICghc29ydGluZykge1xuICAgICAgICAgIGlmICghZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5wcmVzc1RpbWVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5tYW5hZ2VyLmFjdGl2ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlUHJlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGFjdGl2ZSA9IF90aGlzLm1hbmFnZXIuZ2V0QWN0aXZlKCk7XG5cbiAgICAgICAgICB2YXIgX3RlbXA2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgICB2YXIgX3RlbXA3ID0gZnVuY3Rpb24gX3RlbXA3KCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF9ub2RlLnNvcnRhYmxlSW5mby5pbmRleDtcbiAgICAgICAgICAgICAgICB2YXIgbWFyZ2luID0gZ2V0RWxlbWVudE1hcmdpbihfbm9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGdyaWRHYXAgPSBnZXRDb250YWluZXJHcmlkR2FwKF90aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQm91bmRpbmdSZWN0ID0gX3RoaXMuc2Nyb2xsQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBfZ2V0SGVscGVyRGltZW5zaW9ucyh7XG4gICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBub2RlOiBfbm9kZSxcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IF9jb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5ub2RlID0gX25vZGU7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgICAgICAgICAgICAgIF90aGlzLmdyaWRHYXAgPSBncmlkR2FwO1xuICAgICAgICAgICAgICAgIF90aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICBfdGhpcy5oZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYXJnaW5PZmZzZXQgPSB7XG4gICAgICAgICAgICAgICAgICB4OiBfdGhpcy5tYXJnaW4ubGVmdCArIF90aGlzLm1hcmdpbi5yaWdodCArIF90aGlzLmdyaWRHYXAueCxcbiAgICAgICAgICAgICAgICAgIHk6IE1hdGgubWF4KF90aGlzLm1hcmdpbi50b3AsIF90aGlzLm1hcmdpbi5ib3R0b20sIF90aGlzLmdyaWRHYXAueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IF9ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbnRhaW5lckJvdW5kaW5nUmVjdCA9IGNvbnRhaW5lckJvdW5kaW5nUmVjdDtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIF90aGlzLm5ld0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXhpcyA9IHtcbiAgICAgICAgICAgICAgICAgIHg6IF9heGlzLmluZGV4T2YoJ3gnKSA+PSAwLFxuICAgICAgICAgICAgICAgICAgeTogX2F4aXMuaW5kZXhPZigneScpID49IDBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLm9mZnNldEVkZ2UgPSBnZXRFZGdlT2Zmc2V0KF9ub2RlLCBfdGhpcy5jb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0tleVNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRpYWxPZmZzZXQgPSBnZXRQb3NpdGlvbihfb2JqZWN0U3ByZWFkKHt9LCBldmVudCwge1xuICAgICAgICAgICAgICAgICAgICBwYWdlWDogX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VZOiBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wXG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRpYWxPZmZzZXQgPSBnZXRQb3NpdGlvbihldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdGlhbFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IF90aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgdG9wOiBfdGhpcy5zY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmhlbHBlciA9IF90aGlzLmhlbHBlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZU5vZGUoX25vZGUpKTtcbiAgICAgICAgICAgICAgICBzZXRJbmxpbmVTdHlsZXMoX3RoaXMuaGVscGVyLCB7XG4gICAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJcIi5jb25jYXQoX3RoaXMuaGVpZ2h0LCBcInB4XCIpLFxuICAgICAgICAgICAgICAgICAgbGVmdDogXCJcIi5jb25jYXQoX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgLSBtYXJnaW4ubGVmdCwgXCJweFwiKSxcbiAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgdG9wOiBcIlwiLmNvbmNhdChfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wIC0gbWFyZ2luLnRvcCwgXCJweFwiKSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIlwiLmNvbmNhdChfdGhpcy53aWR0aCwgXCJweFwiKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9pc0tleVNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLmhlbHBlci5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfaGlkZVNvcnRhYmxlR2hvc3QpIHtcbiAgICAgICAgICAgICAgICAgIF90aGlzLnNvcnRhYmxlR2hvc3QgPSBfbm9kZTtcbiAgICAgICAgICAgICAgICAgIHNldElubGluZVN0eWxlcyhfbm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMubWluVHJhbnNsYXRlID0ge307XG4gICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IF90aGlzLmNvbnRlbnRXaW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdGhpcy5jb250ZW50V2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgICAgICAgICAgICB9IDogX3RoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclRvcCA9IF9yZWYudG9wLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckxlZnQgPSBfcmVmLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQm90dG9tID0gY29udGFpbmVyVG9wICsgY29udGFpbmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclJpZ2h0ID0gY29udGFpbmVyTGVmdCArIGNvbnRhaW5lcldpZHRoO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXhpcy54KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pblRyYW5zbGF0ZS54ID0gY29udGFpbmVyTGVmdCAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYXhUcmFuc2xhdGUueCA9IGNvbnRhaW5lclJpZ2h0IC0gKF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgX3RoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXhpcy55KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pblRyYW5zbGF0ZS55ID0gY29udGFpbmVyVG9wIC0gX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlLnkgPSBjb250YWluZXJCb3R0b20gLSAoX3RoaXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIF90aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWluVHJhbnNsYXRlLnggPSAoX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gMCA6IGNvbnRhaW5lckJvdW5kaW5nUmVjdC5sZWZ0KSAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0IC0gX3RoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYXhUcmFuc2xhdGUueCA9IChfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyBfdGhpcy5jb250ZW50V2luZG93LmlubmVyV2lkdGggOiBjb250YWluZXJCb3VuZGluZ1JlY3QubGVmdCArIGNvbnRhaW5lckJvdW5kaW5nUmVjdC53aWR0aCkgLSBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCAtIF90aGlzLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5taW5UcmFuc2xhdGUueSA9IChfdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPyAwIDogY29udGFpbmVyQm91bmRpbmdSZWN0LnRvcCkgLSBfdGhpcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wIC0gX3RoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWF4VHJhbnNsYXRlLnkgPSAoX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gX3RoaXMuY29udGVudFdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckJvdW5kaW5nUmVjdC50b3AgKyBjb250YWluZXJCb3VuZGluZ1JlY3QuaGVpZ2h0KSAtIF90aGlzLmJvdW5kaW5nQ2xpZW50UmVjdC50b3AgLSBfdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfaGVscGVyQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgIF9oZWxwZXJDbGFzcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGVscGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmVyTm9kZSA9IGV2ZW50LnRvdWNoZXMgPyBfbm9kZSA6IF90aGlzLmNvbnRlbnRXaW5kb3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgX3RoaXMuaGFuZGxlS2V5RW5kLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIF90aGlzLmhhbmRsZUtleUVuZCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzLmxpc3RlbmVyTm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50cy5tb3ZlLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpcy5oYW5kbGVTb3J0TW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBldmVudHMuZW5kLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGlzdGVuZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpcy5oYW5kbGVTb3J0RW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc29ydGluZ0luZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9vblNvcnRTdGFydCkge1xuICAgICAgICAgICAgICAgICAgX29uU29ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogX25vZGUsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbjogX2NvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGlzS2V5U29ydGluZzogX2lzS2V5U29ydGluZyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IF90aGlzLm1hbmFnZXIuZ2V0T3JkZXJlZFJlZnMoKSxcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyOiBfdGhpcy5oZWxwZXJcbiAgICAgICAgICAgICAgICAgIH0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX2lzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMua2V5TW92ZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgX2F4aXMgPSBfdGhpcyRwcm9wczMuYXhpcyxcbiAgICAgICAgICAgICAgICAgIF9nZXRIZWxwZXJEaW1lbnNpb25zID0gX3RoaXMkcHJvcHMzLmdldEhlbHBlckRpbWVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICBfaGVscGVyQ2xhc3MgPSBfdGhpcyRwcm9wczMuaGVscGVyQ2xhc3MsXG4gICAgICAgICAgICAgICAgICBfaGlkZVNvcnRhYmxlR2hvc3QgPSBfdGhpcyRwcm9wczMuaGlkZVNvcnRhYmxlR2hvc3QsXG4gICAgICAgICAgICAgICAgICB1cGRhdGVCZWZvcmVTb3J0U3RhcnQgPSBfdGhpcyRwcm9wczMudXBkYXRlQmVmb3JlU29ydFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgX29uU29ydFN0YXJ0ID0gX3RoaXMkcHJvcHMzLm9uU29ydFN0YXJ0LFxuICAgICAgICAgICAgICAgICAgX3VzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID0gX3RoaXMkcHJvcHMzLnVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICAgICAgICB2YXIgX25vZGUgPSBhY3RpdmUubm9kZSxcbiAgICAgICAgICAgICAgICAgIF9jb2xsZWN0aW9uID0gYWN0aXZlLmNvbGxlY3Rpb247XG4gICAgICAgICAgICAgIHZhciBfaXNLZXlTb3J0aW5nID0gX3RoaXMubWFuYWdlci5pc0tleVNvcnRpbmc7XG5cbiAgICAgICAgICAgICAgdmFyIF90ZW1wOCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZUJlZm9yZVNvcnRTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuX2F3YWl0aW5nVXBkYXRlQmVmb3JlU29ydFN0YXJ0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgdmFyIF90ZW1wOSA9IF9maW5hbGx5UmV0aHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfbm9kZS5zb3J0YWJsZUluZm8uaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXBkYXRlQmVmb3JlU29ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBfY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZTogX25vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBfaXNLZXlTb3J0aW5nXG4gICAgICAgICAgICAgICAgICAgIH0sIGV2ZW50KSkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoX3dhc1Rocm93biwgX3Jlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fYXdhaXRpbmdVcGRhdGVCZWZvcmVTb3J0U3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF93YXNUaHJvd24pIHRocm93IF9yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChfdGVtcDkgJiYgX3RlbXA5LnRoZW4pIHJldHVybiBfdGVtcDkudGhlbihmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF90ZW1wOCAmJiBfdGVtcDgudGhlbiA/IF90ZW1wOC50aGVuKF90ZW1wNykgOiBfdGVtcDcoX3RlbXA4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90ZW1wNiAmJiBfdGVtcDYudGhlbiA/IF90ZW1wNi50aGVuKGZ1bmN0aW9uICgpIHt9KSA6IHZvaWQgMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlU29ydE1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBvblNvcnRNb3ZlID0gX3RoaXMucHJvcHMub25Tb3J0TW92ZTtcblxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnByZXZlbnREZWZhdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnVwZGF0ZUhlbHBlclBvc2l0aW9uKGV2ZW50KTtcblxuICAgICAgICBfdGhpcy5hbmltYXRlTm9kZXMoKTtcblxuICAgICAgICBfdGhpcy5hdXRvc2Nyb2xsKCk7XG5cbiAgICAgICAgaWYgKG9uU29ydE1vdmUpIHtcbiAgICAgICAgICBvblNvcnRNb3ZlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJoYW5kbGVTb3J0RW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBoaWRlU29ydGFibGVHaG9zdCA9IF90aGlzJHByb3BzNC5oaWRlU29ydGFibGVHaG9zdCxcbiAgICAgICAgICAgIG9uU29ydEVuZCA9IF90aGlzJHByb3BzNC5vblNvcnRFbmQ7XG4gICAgICAgIHZhciBfdGhpcyRtYW5hZ2VyID0gX3RoaXMubWFuYWdlcixcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBfdGhpcyRtYW5hZ2VyLmFjdGl2ZS5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nID0gX3RoaXMkbWFuYWdlci5pc0tleVNvcnRpbmc7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gX3RoaXMubWFuYWdlci5nZXRPcmRlcmVkUmVmcygpO1xuXG4gICAgICAgIGlmIChfdGhpcy5saXN0ZW5lck5vZGUpIHtcbiAgICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBfdGhpcy5oYW5kbGVLZXlFbmQsIHRydWUpO1xuXG4gICAgICAgICAgICBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgX3RoaXMuaGFuZGxlS2V5RW5kLCB0cnVlKTtcblxuICAgICAgICAgICAgX3RoaXMubGlzdGVuZXJOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzLm1vdmUuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5saXN0ZW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIF90aGlzLmhhbmRsZVNvcnRNb3ZlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRzLmVuZC5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxpc3RlbmVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgX3RoaXMuaGFuZGxlU29ydEVuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5oZWxwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5oZWxwZXIpO1xuXG4gICAgICAgIGlmIChoaWRlU29ydGFibGVHaG9zdCAmJiBfdGhpcy5zb3J0YWJsZUdob3N0KSB7XG4gICAgICAgICAgc2V0SW5saW5lU3R5bGVzKF90aGlzLnNvcnRhYmxlR2hvc3QsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICcnLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBfbm9kZTIgPSBub2Rlc1tpXTtcbiAgICAgICAgICB2YXIgZWwgPSBfbm9kZTIubm9kZTtcbiAgICAgICAgICBfbm9kZTIuZWRnZU9mZnNldCA9IG51bGw7XG4gICAgICAgICAgX25vZGUyLmJvdW5kaW5nQ2xpZW50UmVjdCA9IG51bGw7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlM2QoZWwsIG51bGwpO1xuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihlbCwgbnVsbCk7XG4gICAgICAgICAgX25vZGUyLnRyYW5zbGF0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5hdXRvU2Nyb2xsZXIuY2xlYXIoKTtcblxuICAgICAgICBfdGhpcy5tYW5hZ2VyLmFjdGl2ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNvcnRpbmc6IGZhbHNlLFxuICAgICAgICAgIHNvcnRpbmdJbmRleDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uU29ydEVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uU29ydEVuZCh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgbmV3SW5kZXg6IF90aGlzLm5ld0luZGV4LFxuICAgICAgICAgICAgb2xkSW5kZXg6IF90aGlzLmluZGV4LFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBpc0tleVNvcnRpbmcsXG4gICAgICAgICAgICBub2Rlczogbm9kZXNcbiAgICAgICAgICB9LCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy50b3VjaGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImF1dG9zY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzYWJsZUF1dG9zY3JvbGwgPSBfdGhpcy5wcm9wcy5kaXNhYmxlQXV0b3Njcm9sbDtcbiAgICAgICAgdmFyIGlzS2V5U29ydGluZyA9IF90aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nO1xuXG4gICAgICAgIGlmIChkaXNhYmxlQXV0b3Njcm9sbCkge1xuICAgICAgICAgIF90aGlzLmF1dG9TY3JvbGxlci5jbGVhcigpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzS2V5U29ydGluZykge1xuICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy50cmFuc2xhdGUpO1xuXG4gICAgICAgICAgdmFyIHNjcm9sbFggPSAwO1xuICAgICAgICAgIHZhciBzY3JvbGxZID0gMDtcblxuICAgICAgICAgIGlmIChfdGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZS54ID0gTWF0aC5taW4oX3RoaXMubWF4VHJhbnNsYXRlLngsIE1hdGgubWF4KF90aGlzLm1pblRyYW5zbGF0ZS54LCBfdGhpcy50cmFuc2xhdGUueCkpO1xuICAgICAgICAgICAgc2Nyb2xsWCA9IF90aGlzLnRyYW5zbGF0ZS54IC0gdHJhbnNsYXRlLng7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSBNYXRoLm1pbihfdGhpcy5tYXhUcmFuc2xhdGUueSwgTWF0aC5tYXgoX3RoaXMubWluVHJhbnNsYXRlLnksIF90aGlzLnRyYW5zbGF0ZS55KSk7XG4gICAgICAgICAgICBzY3JvbGxZID0gX3RoaXMudHJhbnNsYXRlLnkgLSB0cmFuc2xhdGUueTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgICAgc2V0VHJhbnNsYXRlM2QoX3RoaXMuaGVscGVyLCBfdGhpcy50cmFuc2xhdGUpO1xuICAgICAgICAgIF90aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IHNjcm9sbFg7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCArPSBzY3JvbGxZO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmF1dG9TY3JvbGxlci51cGRhdGUoe1xuICAgICAgICAgIGhlaWdodDogX3RoaXMuaGVpZ2h0LFxuICAgICAgICAgIG1heFRyYW5zbGF0ZTogX3RoaXMubWF4VHJhbnNsYXRlLFxuICAgICAgICAgIG1pblRyYW5zbGF0ZTogX3RoaXMubWluVHJhbnNsYXRlLFxuICAgICAgICAgIHRyYW5zbGF0ZTogX3RoaXMudHJhbnNsYXRlLFxuICAgICAgICAgIHdpZHRoOiBfdGhpcy53aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25BdXRvU2Nyb2xsXCIsIGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICAgX3RoaXMudHJhbnNsYXRlLnggKz0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIF90aGlzLnRyYW5zbGF0ZS55ICs9IG9mZnNldC50b3A7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0ZU5vZGVzKCk7XG4gICAgICB9KTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZUtleURvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgc2hvdWxkQ2FuY2VsU3RhcnQgPSBfdGhpcyRwcm9wczUuc2hvdWxkQ2FuY2VsU3RhcnQsXG4gICAgICAgICAgICBfdGhpcyRwcm9wczUka2V5Q29kZXMgPSBfdGhpcyRwcm9wczUua2V5Q29kZXMsXG4gICAgICAgICAgICBjdXN0b21LZXlDb2RlcyA9IF90aGlzJHByb3BzNSRrZXlDb2RlcyA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wczUka2V5Q29kZXM7XG5cbiAgICAgICAgdmFyIGtleUNvZGVzID0gX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdEtleUNvZGVzLCBjdXN0b21LZXlDb2Rlcyk7XG5cbiAgICAgICAgaWYgKF90aGlzLm1hbmFnZXIuYWN0aXZlICYmICFfdGhpcy5tYW5hZ2VyLmlzS2V5U29ydGluZyB8fCAhX3RoaXMubWFuYWdlci5hY3RpdmUgJiYgKCFrZXlDb2Rlcy5saWZ0LmluY2x1ZGVzKGtleUNvZGUpIHx8IHNob3VsZENhbmNlbFN0YXJ0KGV2ZW50KSB8fCAhX3RoaXMuaXNWYWxpZFNvcnRpbmdUYXJnZXQoZXZlbnQpKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChrZXlDb2Rlcy5saWZ0LmluY2x1ZGVzKGtleUNvZGUpICYmICFfdGhpcy5tYW5hZ2VyLmFjdGl2ZSkge1xuICAgICAgICAgIF90aGlzLmtleUxpZnQoZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGVzLmRyb3AuaW5jbHVkZXMoa2V5Q29kZSkgJiYgX3RoaXMubWFuYWdlci5hY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy5rZXlEcm9wKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5jYW5jZWwuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgICBfdGhpcy5uZXdJbmRleCA9IF90aGlzLm1hbmFnZXIuYWN0aXZlLmluZGV4O1xuXG4gICAgICAgICAgX3RoaXMua2V5RHJvcChldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMudXAuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgICBfdGhpcy5rZXlNb3ZlKC0xKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5kb3duLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgICAgX3RoaXMua2V5TW92ZSgxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlMaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QodGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX25vZGUkc29ydGFibGVJbmZvMiA9IG5vZGUuc29ydGFibGVJbmZvLFxuICAgICAgICAgICAgaW5kZXggPSBfbm9kZSRzb3J0YWJsZUluZm8yLmluZGV4LFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IF9ub2RlJHNvcnRhYmxlSW5mbzIuY29sbGVjdGlvbjtcbiAgICAgICAgX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlID0gdGFyZ2V0O1xuICAgICAgICBfdGhpcy5tYW5hZ2VyLmlzS2V5U29ydGluZyA9IHRydWU7XG4gICAgICAgIF90aGlzLm1hbmFnZXIuYWN0aXZlID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uXG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlUHJlc3MoZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlNb3ZlXCIsIGZ1bmN0aW9uIChzaGlmdCkge1xuICAgICAgICB2YXIgbm9kZXMgPSBfdGhpcy5tYW5hZ2VyLmdldE9yZGVyZWRSZWZzKCk7XG5cbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLm5vZGUuc29ydGFibGVJbmZvLmluZGV4O1xuICAgICAgICB2YXIgbmV3SW5kZXggPSBfdGhpcy5uZXdJbmRleCArIHNoaWZ0O1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gX3RoaXMubmV3SW5kZXg7XG5cbiAgICAgICAgaWYgKG5ld0luZGV4IDwgMCB8fCBuZXdJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnByZXZJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgX3RoaXMubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgdmFyIHRhcmdldEluZGV4ID0gZ2V0VGFyZ2V0SW5kZXgoX3RoaXMubmV3SW5kZXgsIF90aGlzLnByZXZJbmRleCwgX3RoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gbm9kZXMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgbm9kZSA9IF9yZWYyLm5vZGU7XG4gICAgICAgICAgcmV0dXJuIG5vZGUuc29ydGFibGVJbmZvLmluZGV4ID09PSB0YXJnZXRJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0YXJnZXROb2RlID0gdGFyZ2V0Lm5vZGU7XG4gICAgICAgIHZhciBzY3JvbGxEZWx0YSA9IF90aGlzLmNvbnRhaW5lclNjcm9sbERlbHRhO1xuICAgICAgICB2YXIgdGFyZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gdGFyZ2V0LmJvdW5kaW5nQ2xpZW50UmVjdCB8fCBnZXRTY3JvbGxBZGp1c3RlZEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXROb2RlLCBzY3JvbGxEZWx0YSk7XG4gICAgICAgIHZhciB0YXJnZXRUcmFuc2xhdGUgPSB0YXJnZXQudHJhbnNsYXRlIHx8IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgICAgIHRvcDogdGFyZ2V0Qm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHRhcmdldFRyYW5zbGF0ZS55IC0gc2Nyb2xsRGVsdGEudG9wLFxuICAgICAgICAgIGxlZnQ6IHRhcmdldEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgdGFyZ2V0VHJhbnNsYXRlLnggLSBzY3JvbGxEZWx0YS5sZWZ0XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzaG91bGRBZGp1c3RGb3JTaXplID0gcHJldkluZGV4IDwgbmV3SW5kZXg7XG4gICAgICAgIHZhciBzaXplQWRqdXN0bWVudCA9IHtcbiAgICAgICAgICB4OiBzaG91bGRBZGp1c3RGb3JTaXplICYmIF90aGlzLmF4aXMueCA/IHRhcmdldE5vZGUub2Zmc2V0V2lkdGggLSBfdGhpcy53aWR0aCA6IDAsXG4gICAgICAgICAgeTogc2hvdWxkQWRqdXN0Rm9yU2l6ZSAmJiBfdGhpcy5heGlzLnkgPyB0YXJnZXROb2RlLm9mZnNldEhlaWdodCAtIF90aGlzLmhlaWdodCA6IDBcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVTb3J0TW92ZSh7XG4gICAgICAgICAgcGFnZVg6IHRhcmdldFBvc2l0aW9uLmxlZnQgKyBzaXplQWRqdXN0bWVudC54LFxuICAgICAgICAgIHBhZ2VZOiB0YXJnZXRQb3NpdGlvbi50b3AgKyBzaXplQWRqdXN0bWVudC55LFxuICAgICAgICAgIGlnbm9yZVRyYW5zaXRpb246IHNoaWZ0ID09PSAwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJrZXlEcm9wXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5oYW5kbGVTb3J0RW5kKGV2ZW50KTtcblxuICAgICAgICBpZiAoX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlKSB7XG4gICAgICAgICAgX3RoaXMuaW5pdGlhbEZvY3VzZWROb2RlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiaGFuZGxlS2V5RW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoX3RoaXMubWFuYWdlci5hY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy5rZXlEcm9wKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJpc1ZhbGlkU29ydGluZ1RhcmdldFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHVzZURyYWdIYW5kbGUgPSBfdGhpcy5wcm9wcy51c2VEcmFnSGFuZGxlO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgbm9kZSA9IGNsb3Nlc3QodGFyZ2V0LCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gZWwuc29ydGFibGVJbmZvICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnNvcnRhYmxlSW5mbyAmJiAhbm9kZS5zb3J0YWJsZUluZm8uZGlzYWJsZWQgJiYgKHVzZURyYWdIYW5kbGUgPyBpc1NvcnRhYmxlSGFuZGxlKHRhcmdldCkgOiB0YXJnZXQuc29ydGFibGVJbmZvKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZVByb3BzKHByb3BzKTtcbiAgICAgIF90aGlzLm1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xuICAgICAgX3RoaXMuZXZlbnRzID0ge1xuICAgICAgICBlbmQ6IF90aGlzLmhhbmRsZUVuZCxcbiAgICAgICAgbW92ZTogX3RoaXMuaGFuZGxlTW92ZSxcbiAgICAgICAgc3RhcnQ6IF90aGlzLmhhbmRsZVN0YXJ0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhXaXRoU29ydGFibGVDb250YWluZXIsIFt7XG4gICAgICBrZXk6IFwiZ2V0Q2hpbGRDb250ZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hbmFnZXI6IHRoaXMubWFuYWdlclxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgdXNlV2luZG93QXNTY3JvbGxDb250YWluZXIgPSB0aGlzLnByb3BzLnVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgIF90aGlzMi5jb250YWluZXIgPSBjb250YWluZXJOb2RlO1xuICAgICAgICAgIF90aGlzMi5kb2N1bWVudCA9IF90aGlzMi5jb250YWluZXIub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgICAgICAgICB2YXIgY29udGVudFdpbmRvdyA9IF90aGlzMi5wcm9wcy5jb250ZW50V2luZG93IHx8IF90aGlzMi5kb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gICAgICAgICAgX3RoaXMyLmNvbnRlbnRXaW5kb3cgPSB0eXBlb2YgY29udGVudFdpbmRvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnRlbnRXaW5kb3coKSA6IGNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgX3RoaXMyLnNjcm9sbENvbnRhaW5lciA9IHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID8gX3RoaXMyLmRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgX3RoaXMyLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGdldFNjcm9sbGluZ1BhcmVudChfdGhpczIuY29udGFpbmVyKSB8fCBfdGhpczIuY29udGFpbmVyO1xuICAgICAgICAgIF90aGlzMi5hdXRvU2Nyb2xsZXIgPSBuZXcgQXV0b1Njcm9sbGVyKF90aGlzMi5zY3JvbGxDb250YWluZXIsIF90aGlzMi5vbkF1dG9TY3JvbGwpO1xuICAgICAgICAgIE9iamVjdC5rZXlzKF90aGlzMi5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50c1trZXldLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgX3RoaXMyLmV2ZW50c1trZXldLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMi5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzMi5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmhlbHBlciAmJiB0aGlzLmhlbHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgdGhpcy5oZWxwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmhlbHBlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldHVybiBldmVudHNba2V5XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfdGhpczMuZXZlbnRzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZUhlbHBlclBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSGVscGVyUG9zaXRpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBsb2NrQXhpcyA9IF90aGlzJHByb3BzNi5sb2NrQXhpcyxcbiAgICAgICAgICAgIGxvY2tPZmZzZXQgPSBfdGhpcyRwcm9wczYubG9ja09mZnNldCxcbiAgICAgICAgICAgIGxvY2tUb0NvbnRhaW5lckVkZ2VzID0gX3RoaXMkcHJvcHM2LmxvY2tUb0NvbnRhaW5lckVkZ2VzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3RoaXMkcHJvcHM2LnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIF90aGlzJHByb3BzNiRrZXlib2FyZCA9IF90aGlzJHByb3BzNi5rZXlib2FyZFNvcnRpbmdUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICBrZXlib2FyZFNvcnRpbmdUcmFuc2l0aW9uRHVyYXRpb24gPSBfdGhpcyRwcm9wczYka2V5Ym9hcmQgPT09IHZvaWQgMCA/IHRyYW5zaXRpb25EdXJhdGlvbiA6IF90aGlzJHByb3BzNiRrZXlib2FyZDtcbiAgICAgICAgdmFyIGlzS2V5U29ydGluZyA9IHRoaXMubWFuYWdlci5pc0tleVNvcnRpbmc7XG4gICAgICAgIHZhciBpZ25vcmVUcmFuc2l0aW9uID0gZXZlbnQuaWdub3JlVHJhbnNpdGlvbjtcbiAgICAgICAgdmFyIG9mZnNldCA9IGdldFBvc2l0aW9uKGV2ZW50KTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZSA9IHtcbiAgICAgICAgICB4OiBvZmZzZXQueCAtIHRoaXMuaW5pdGlhbE9mZnNldC54LFxuICAgICAgICAgIHk6IG9mZnNldC55IC0gdGhpcy5pbml0aWFsT2Zmc2V0LnlcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNsYXRlLnkgLT0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLnRvcDtcbiAgICAgICAgdHJhbnNsYXRlLnggLT0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLmxlZnQ7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuXG4gICAgICAgIGlmIChsb2NrVG9Db250YWluZXJFZGdlcykge1xuICAgICAgICAgIHZhciBfZ2V0TG9ja1BpeGVsT2Zmc2V0cyA9IGdldExvY2tQaXhlbE9mZnNldHMoe1xuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIGxvY2tPZmZzZXQ6IGxvY2tPZmZzZXQsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aFxuICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfZ2V0TG9ja1BpeGVsT2Zmc2V0czIgPSBfc2xpY2VkVG9BcnJheShfZ2V0TG9ja1BpeGVsT2Zmc2V0cywgMiksXG4gICAgICAgICAgICAgIG1pbkxvY2tPZmZzZXQgPSBfZ2V0TG9ja1BpeGVsT2Zmc2V0czJbMF0sXG4gICAgICAgICAgICAgIG1heExvY2tPZmZzZXQgPSBfZ2V0TG9ja1BpeGVsT2Zmc2V0czJbMV07XG5cbiAgICAgICAgICB2YXIgbWluT2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSBtaW5Mb2NrT2Zmc2V0LngsXG4gICAgICAgICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSBtaW5Mb2NrT2Zmc2V0LnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBtYXhPZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIG1heExvY2tPZmZzZXQueCxcbiAgICAgICAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIG1heExvY2tPZmZzZXQueVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJhbnNsYXRlLnggPSBsaW1pdCh0aGlzLm1pblRyYW5zbGF0ZS54ICsgbWluT2Zmc2V0LngsIHRoaXMubWF4VHJhbnNsYXRlLnggLSBtYXhPZmZzZXQueCwgdHJhbnNsYXRlLngpO1xuICAgICAgICAgIHRyYW5zbGF0ZS55ID0gbGltaXQodGhpcy5taW5UcmFuc2xhdGUueSArIG1pbk9mZnNldC55LCB0aGlzLm1heFRyYW5zbGF0ZS55IC0gbWF4T2Zmc2V0LnksIHRyYW5zbGF0ZS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NrQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgdHJhbnNsYXRlLnkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGxvY2tBeGlzID09PSAneScpIHtcbiAgICAgICAgICB0cmFuc2xhdGUueCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlTb3J0aW5nICYmIGtleWJvYXJkU29ydGluZ1RyYW5zaXRpb25EdXJhdGlvbiAmJiAhaWdub3JlVHJhbnNpdGlvbikge1xuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0aGlzLmhlbHBlciwga2V5Ym9hcmRTb3J0aW5nVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRyYW5zbGF0ZTNkKHRoaXMuaGVscGVyLCB0cmFuc2xhdGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhbmltYXRlTm9kZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlTm9kZXMoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX3RoaXMkcHJvcHM3LnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIGhpZGVTb3J0YWJsZUdob3N0ID0gX3RoaXMkcHJvcHM3LmhpZGVTb3J0YWJsZUdob3N0LFxuICAgICAgICAgICAgb25Tb3J0T3ZlciA9IF90aGlzJHByb3BzNy5vblNvcnRPdmVyO1xuICAgICAgICB2YXIgY29udGFpbmVyU2Nyb2xsRGVsdGEgPSB0aGlzLmNvbnRhaW5lclNjcm9sbERlbHRhLFxuICAgICAgICAgICAgd2luZG93U2Nyb2xsRGVsdGEgPSB0aGlzLndpbmRvd1Njcm9sbERlbHRhO1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLm1hbmFnZXIuZ2V0T3JkZXJlZFJlZnMoKTtcbiAgICAgICAgdmFyIHNvcnRpbmdPZmZzZXQgPSB7XG4gICAgICAgICAgbGVmdDogdGhpcy5vZmZzZXRFZGdlLmxlZnQgKyB0aGlzLnRyYW5zbGF0ZS54ICsgY29udGFpbmVyU2Nyb2xsRGVsdGEubGVmdCxcbiAgICAgICAgICB0b3A6IHRoaXMub2Zmc2V0RWRnZS50b3AgKyB0aGlzLnRyYW5zbGF0ZS55ICsgY29udGFpbmVyU2Nyb2xsRGVsdGEudG9wXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc0tleVNvcnRpbmcgPSB0aGlzLm1hbmFnZXIuaXNLZXlTb3J0aW5nO1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5uZXdJbmRleDtcbiAgICAgICAgdGhpcy5uZXdJbmRleCA9IG51bGw7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIF9ub2RlMyA9IG5vZGVzW2ldLm5vZGU7XG4gICAgICAgICAgdmFyIGluZGV4ID0gX25vZGUzLnNvcnRhYmxlSW5mby5pbmRleDtcbiAgICAgICAgICB2YXIgd2lkdGggPSBfbm9kZTMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgdmFyIGhlaWdodCA9IF9ub2RlMy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQgPiBoZWlnaHQgPyBoZWlnaHQgLyAyIDogdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggPiB3aWR0aCA/IHdpZHRoIC8gMiA6IHRoaXMud2lkdGggLyAyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgbXVzdFNoaWZ0QmFja3dhcmQgPSBpc0tleVNvcnRpbmcgJiYgaW5kZXggPiB0aGlzLmluZGV4ICYmIGluZGV4IDw9IHByZXZJbmRleDtcbiAgICAgICAgICB2YXIgbXVzdFNoaWZ0Rm9yd2FyZCA9IGlzS2V5U29ydGluZyAmJiBpbmRleCA8IHRoaXMuaW5kZXggJiYgaW5kZXggPj0gcHJldkluZGV4O1xuICAgICAgICAgIHZhciB0cmFuc2xhdGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGVkZ2VPZmZzZXQgPSBub2Rlc1tpXS5lZGdlT2Zmc2V0O1xuXG4gICAgICAgICAgaWYgKCFlZGdlT2Zmc2V0KSB7XG4gICAgICAgICAgICBlZGdlT2Zmc2V0ID0gZ2V0RWRnZU9mZnNldChfbm9kZTMsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIG5vZGVzW2ldLmVkZ2VPZmZzZXQgPSBlZGdlT2Zmc2V0O1xuXG4gICAgICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgICAgIG5vZGVzW2ldLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGdldFNjcm9sbEFkanVzdGVkQm91bmRpbmdDbGllbnRSZWN0KF9ub2RlMywgY29udGFpbmVyU2Nyb2xsRGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBuZXh0Tm9kZSA9IGkgPCBub2Rlcy5sZW5ndGggLSAxICYmIG5vZGVzW2kgKyAxXTtcbiAgICAgICAgICB2YXIgcHJldk5vZGUgPSBpID4gMCAmJiBub2Rlc1tpIC0gMV07XG5cbiAgICAgICAgICBpZiAobmV4dE5vZGUgJiYgIW5leHROb2RlLmVkZ2VPZmZzZXQpIHtcbiAgICAgICAgICAgIG5leHROb2RlLmVkZ2VPZmZzZXQgPSBnZXRFZGdlT2Zmc2V0KG5leHROb2RlLm5vZGUsIHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgaWYgKGlzS2V5U29ydGluZykge1xuICAgICAgICAgICAgICBuZXh0Tm9kZS5ib3VuZGluZ0NsaWVudFJlY3QgPSBnZXRTY3JvbGxBZGp1c3RlZEJvdW5kaW5nQ2xpZW50UmVjdChuZXh0Tm9kZS5ub2RlLCBjb250YWluZXJTY3JvbGxEZWx0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaGlkZVNvcnRhYmxlR2hvc3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5zb3J0YWJsZUdob3N0ID0gX25vZGUzO1xuICAgICAgICAgICAgICBzZXRJbmxpbmVTdHlsZXMoX25vZGUzLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKF9ub2RlMywgdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5heGlzLngpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF4aXMueSkge1xuICAgICAgICAgICAgICBpZiAobXVzdFNoaWZ0Rm9yd2FyZCB8fCBpbmRleCA8IHRoaXMuaW5kZXggJiYgKHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgLSBvZmZzZXQud2lkdGggPD0gZWRnZU9mZnNldC5sZWZ0ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wIDw9IGVkZ2VPZmZzZXQudG9wICsgb2Zmc2V0LmhlaWdodCB8fCBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCArIG9mZnNldC5oZWlnaHQgPD0gZWRnZU9mZnNldC50b3ApKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueDtcblxuICAgICAgICAgICAgICAgIGlmIChlZGdlT2Zmc2V0LmxlZnQgKyB0cmFuc2xhdGUueCA+IHRoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LndpZHRoIC0gb2Zmc2V0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSBuZXh0Tm9kZS5lZGdlT2Zmc2V0LmxlZnQgLSBlZGdlT2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS55ID0gbmV4dE5vZGUuZWRnZU9mZnNldC50b3AgLSBlZGdlT2Zmc2V0LnRvcDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtdXN0U2hpZnRCYWNrd2FyZCB8fCBpbmRleCA+IHRoaXMuaW5kZXggJiYgKHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgKyBvZmZzZXQud2lkdGggPj0gZWRnZU9mZnNldC5sZWZ0ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wICsgb2Zmc2V0LmhlaWdodCA+PSBlZGdlT2Zmc2V0LnRvcCB8fCBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCArIG9mZnNldC5oZWlnaHQgPj0gZWRnZU9mZnNldC50b3AgKyBoZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSAtKHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbk9mZnNldC54KTtcblxuICAgICAgICAgICAgICAgIGlmIChlZGdlT2Zmc2V0LmxlZnQgKyB0cmFuc2xhdGUueCA8IHRoaXMuY29udGFpbmVyQm91bmRpbmdSZWN0LmxlZnQgKyBvZmZzZXQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUueCA9IHByZXZOb2RlLmVkZ2VPZmZzZXQubGVmdCAtIGVkZ2VPZmZzZXQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSBwcmV2Tm9kZS5lZGdlT2Zmc2V0LnRvcCAtIGVkZ2VPZmZzZXQudG9wO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKG11c3RTaGlmdEJhY2t3YXJkIHx8IGluZGV4ID4gdGhpcy5pbmRleCAmJiBzb3J0aW5nT2Zmc2V0LmxlZnQgKyB3aW5kb3dTY3JvbGxEZWx0YS5sZWZ0ICsgb2Zmc2V0LndpZHRoID49IGVkZ2VPZmZzZXQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZS54ID0gLSh0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG11c3RTaGlmdEZvcndhcmQgfHwgaW5kZXggPCB0aGlzLmluZGV4ICYmIHNvcnRpbmdPZmZzZXQubGVmdCArIHdpbmRvd1Njcm9sbERlbHRhLmxlZnQgPD0gZWRnZU9mZnNldC5sZWZ0ICsgb2Zmc2V0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlLnggPSB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW5PZmZzZXQueDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5ld0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXhpcy55KSB7XG4gICAgICAgICAgICBpZiAobXVzdFNoaWZ0QmFja3dhcmQgfHwgaW5kZXggPiB0aGlzLmluZGV4ICYmIHNvcnRpbmdPZmZzZXQudG9wICsgd2luZG93U2Nyb2xsRGVsdGEudG9wICsgb2Zmc2V0LmhlaWdodCA+PSBlZGdlT2Zmc2V0LnRvcCkge1xuICAgICAgICAgICAgICB0cmFuc2xhdGUueSA9IC0odGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbk9mZnNldC55KTtcbiAgICAgICAgICAgICAgdGhpcy5uZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtdXN0U2hpZnRGb3J3YXJkIHx8IGluZGV4IDwgdGhpcy5pbmRleCAmJiBzb3J0aW5nT2Zmc2V0LnRvcCArIHdpbmRvd1Njcm9sbERlbHRhLnRvcCA8PSBlZGdlT2Zmc2V0LnRvcCArIG9mZnNldC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRlLnkgPSB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luT2Zmc2V0Lnk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMubmV3SW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRyYW5zbGF0ZTNkKF9ub2RlMywgdHJhbnNsYXRlKTtcbiAgICAgICAgICBub2Rlc1tpXS50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZXdJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5uZXdJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlTb3J0aW5nKSB7XG4gICAgICAgICAgdGhpcy5uZXdJbmRleCA9IHByZXZJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvbGRJbmRleCA9IGlzS2V5U29ydGluZyA/IHRoaXMucHJldkluZGV4IDogcHJldkluZGV4O1xuXG4gICAgICAgIGlmIChvblNvcnRPdmVyICYmIHRoaXMubmV3SW5kZXggIT09IG9sZEluZGV4KSB7XG4gICAgICAgICAgb25Tb3J0T3Zlcih7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB0aGlzLm1hbmFnZXIuYWN0aXZlLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgIG5ld0luZGV4OiB0aGlzLm5ld0luZGV4LFxuICAgICAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgICAgICAgICAgaXNLZXlTb3J0aW5nOiBpc0tleVNvcnRpbmcsXG4gICAgICAgICAgICBub2Rlczogbm9kZXMsXG4gICAgICAgICAgICBoZWxwZXI6IHRoaXMuaGVscGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0V3JhcHBlZEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgICBpbnZhcmlhbnQoY29uZmlnLndpdGhSZWYsICdUbyBhY2Nlc3MgdGhlIHdyYXBwZWQgaW5zdGFuY2UsIHlvdSBuZWVkIHRvIHBhc3MgaW4ge3dpdGhSZWY6IHRydWV9IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgb2YgdGhlIFNvcnRhYmxlQ29udGFpbmVyKCkgY2FsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZzLndyYXBwZWRJbnN0YW5jZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0Q29udGFpbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgICAgICB2YXIgZ2V0Q29udGFpbmVyID0gdGhpcy5wcm9wcy5nZXRDb250YWluZXI7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBnZXRDb250YWluZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29udGFpbmVyKGNvbmZpZy53aXRoUmVmID8gdGhpcy5nZXRXcmFwcGVkSW5zdGFuY2UoKSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbmZpZy53aXRoUmVmID8gJ3dyYXBwZWRJbnN0YW5jZScgOiBudWxsO1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcmVmOiByZWZcbiAgICAgICAgfSwgb21pdCh0aGlzLnByb3BzLCBvbWl0dGVkUHJvcHMpKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImhlbHBlckNvbnRhaW5lclwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHZhciBoZWxwZXJDb250YWluZXIgPSB0aGlzLnByb3BzLmhlbHBlckNvbnRhaW5lcjtcblxuICAgICAgICBpZiAodHlwZW9mIGhlbHBlckNvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBoZWxwZXJDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhlbHBlckNvbnRhaW5lciB8fCB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbnRhaW5lclNjcm9sbERlbHRhXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdmFyIHVzZVdpbmRvd0FzU2Nyb2xsQ29udGFpbmVyID0gdGhpcy5wcm9wcy51c2VXaW5kb3dBc1Njcm9sbENvbnRhaW5lcjtcblxuICAgICAgICBpZiAodXNlV2luZG93QXNTY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQgLSB0aGlzLmluaXRpYWxTY3JvbGwubGVmdCxcbiAgICAgICAgICB0b3A6IHRoaXMuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuaW5pdGlhbFNjcm9sbC50b3BcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwid2luZG93U2Nyb2xsRGVsdGFcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHRoaXMuY29udGVudFdpbmRvdy5wYWdlWE9mZnNldCAtIHRoaXMuaW5pdGlhbFdpbmRvd1Njcm9sbC5sZWZ0LFxuICAgICAgICAgIHRvcDogdGhpcy5jb250ZW50V2luZG93LnBhZ2VZT2Zmc2V0IC0gdGhpcy5pbml0aWFsV2luZG93U2Nyb2xsLnRvcFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBXaXRoU29ydGFibGVDb250YWluZXI7XG4gIH0oQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkaXNwbGF5TmFtZVwiLCBwcm92aWRlRGlzcGxheU5hbWUoJ3NvcnRhYmxlTGlzdCcsIFdyYXBwZWRDb21wb25lbnQpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJjaGlsZENvbnRleHRUeXBlc1wiLCB7XG4gICAgbWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0pLCBfdGVtcDtcbn1cblxudmFyIHByb3BUeXBlcyQxID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjb2xsZWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcbnZhciBvbWl0dGVkUHJvcHMkMSA9IE9iamVjdC5rZXlzKHByb3BUeXBlcyQxKTtcbmZ1bmN0aW9uIHNvcnRhYmxlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICB3aXRoUmVmOiBmYWxzZVxuICB9O1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhXaXRoU29ydGFibGVFbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFdpdGhTb3J0YWJsZUVsZW1lbnQoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2l0aFNvcnRhYmxlRWxlbWVudCk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2l0aFNvcnRhYmxlRWxlbWVudCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdpdGhTb3J0YWJsZUVsZW1lbnQsIFt7XG4gICAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICBpZiAocHJldlByb3BzLmluZGV4ICE9PSB0aGlzLnByb3BzLmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc29ydGFibGVJbmZvLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc29ydGFibGVJbmZvLmRpc2FibGVkID0gdGhpcy5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldlByb3BzLmNvbGxlY3Rpb24gIT09IHRoaXMucHJvcHMuY29sbGVjdGlvbikge1xuICAgICAgICAgIHRoaXMudW5yZWdpc3RlcihwcmV2UHJvcHMuY29sbGVjdGlvbik7XG4gICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZWdpc3RlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IF90aGlzJHByb3BzLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wcy5pbmRleDtcbiAgICAgICAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgbm9kZS5zb3J0YWJsZUluZm8gPSB7XG4gICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbixcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG1hbmFnZXI6IHRoaXMuY29udGV4dC5tYW5hZ2VyXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMucmVmID0ge1xuICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1hbmFnZXIuYWRkKGNvbGxlY3Rpb24sIHRoaXMucmVmKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidW5yZWdpc3RlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIHZhciBjb2xsZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLnByb3BzLmNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuY29udGV4dC5tYW5hZ2VyLnJlbW92ZShjb2xsZWN0aW9uLCB0aGlzLnJlZik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFdyYXBwZWRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFdyYXBwZWRJbnN0YW5jZSgpIHtcbiAgICAgICAgaW52YXJpYW50KGNvbmZpZy53aXRoUmVmLCAnVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB5b3UgbmVlZCB0byBwYXNzIGluIHt3aXRoUmVmOiB0cnVlfSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IG9mIHRoZSBTb3J0YWJsZUVsZW1lbnQoKSBjYWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciByZWYgPSBjb25maWcud2l0aFJlZiA/ICd3cmFwcGVkSW5zdGFuY2UnIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdHRlZFByb3BzJDEpKSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdpdGhTb3J0YWJsZUVsZW1lbnQ7XG4gIH0oQ29tcG9uZW50KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJkaXNwbGF5TmFtZVwiLCBwcm92aWRlRGlzcGxheU5hbWUoJ3NvcnRhYmxlRWxlbWVudCcsIFdyYXBwZWRDb21wb25lbnQpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJjb250ZXh0VHlwZXNcIiwge1xuICAgIG1hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzcywgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzJDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gICAgY29sbGVjdGlvbjogMFxuICB9KSwgX3RlbXA7XG59XG5cbmV4cG9ydCB7IHNvcnRhYmxlQ29udGFpbmVyIGFzIFNvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50IGFzIFNvcnRhYmxlRWxlbWVudCwgc29ydGFibGVFbGVtZW50LCBzb3J0YWJsZUhhbmRsZSBhcyBTb3J0YWJsZUhhbmRsZSwgc29ydGFibGVIYW5kbGUsIGFycmF5TW92ZSB9O1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChmYWxzZSkgeyB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcywgUmVhY3RJczsgfSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSkoKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRlbGwgd2hldGhlciB0aGUgcmVjdCBpcyB2aXNpYmxlLCBnaXZlbiBhbiBvZmZzZXRcbi8vXG4vLyByZXR1cm46IGJvb2xlYW5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KSB7XG4gIHZhciBvZmZzZXREaXIgPSBvZmZzZXQuZGlyZWN0aW9uO1xuICB2YXIgb2Zmc2V0VmFsID0gb2Zmc2V0LnZhbHVlOyAvLyBSdWxlcyBmb3IgY2hlY2tpbmcgZGlmZmVyZW50IGtpbmQgb2Ygb2Zmc2V0cy4gSW4gZXhhbXBsZSBpZiB0aGUgZWxlbWVudCBpc1xuICAvLyA5MHB4IGJlbG93IHZpZXdwb3J0IGFuZCBvZmZzZXRUb3AgaXMgMTAwLCBpdCBpcyBjb25zaWRlcmVkIHZpc2libGUuXG5cbiAgc3dpdGNoIChvZmZzZXREaXIpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC50b3AgKyBvZmZzZXRWYWwgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICsgb2Zmc2V0VmFsIDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIG9mZnNldFZhbCA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wO1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtIG9mZnNldFZhbCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBWaXNpYmlsaXR5U2Vuc29yOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjdChyZWN0KSB7XG4gIGlmIChyZWN0LndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChyZWN0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbnZhciBWaXNpYmlsaXR5U2Vuc29yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaXNpYmlsaXR5U2Vuc29yLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXNpYmlsaXR5U2Vuc29yKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTZW5zb3IpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVmlzaWJpbGl0eVNlbnNvcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuY29udGFpbm1lbnQgfHwgd2luZG93O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIGRlbGF5LCB0aHJvdHRsZSkge1xuICAgICAgaWYgKCFfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICB2YXIgZnVuYztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLmNoZWNrKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhyb3R0bGUgPiAtMSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB0aHJvdHRsZSB8fCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIGRlbGF5IHx8IDApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGZuOiBmdW5jLFxuICAgICAgICBnZXRMYXN0VGltZW91dDogZnVuY3Rpb24gZ2V0TGFzdFRpbWVvdXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaW5mby5mbik7XG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2V2ZW50XSA9IGluZm87XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjayB8fCBfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbnRlcnZhbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoX3RoaXMuY2hlY2ssIF90aGlzLnByb3BzLmludGVydmFsRGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihfdGhpcy5nZXRDb250YWluZXIoKSwgXCJzY3JvbGxcIiwgX3RoaXMucHJvcHMuc2Nyb2xsRGVsYXksIF90aGlzLnByb3BzLnNjcm9sbFRocm90dGxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnJlc2l6ZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBfdGhpcy5wcm9wcy5yZXNpemVEZWxheSwgX3RoaXMucHJvcHMucmVzaXplVGhyb3R0bGUpO1xuICAgICAgfSAvLyBpZiBkb250IG5lZWQgZGVsYXllZCBjYWxsLCBjaGVjayBvbiBsb2FkICggYmVmb3JlIHRoZSBmaXJzdCBpbnRlcnZhbCBmaXJlcyApXG5cblxuICAgICAgIV90aGlzLnByb3BzLmRlbGF5ZWRDYWxsICYmIF90aGlzLmNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgZGVib3VuY2UgY2FsbGVyc1xuICAgICAgICBmb3IgKHZhciBkZWJvdW5jZUV2ZW50IGluIF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjay5oYXNPd25Qcm9wZXJ0eShkZWJvdW5jZUV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGRlYm91bmNlSW5mbyA9IF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VJbmZvLmdldExhc3RUaW1lb3V0KCkpO1xuICAgICAgICAgICAgZGVib3VuY2VJbmZvLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGRlYm91bmNlRXZlbnQsIGRlYm91bmNlSW5mby5mbik7XG4gICAgICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IG51bGw7XG5cbiAgICAgIGlmIChfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoX3RoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLm5vZGU7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciBjb250YWlubWVudFJlY3Q7IC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIHJlbmRlcmVkIHRvIG51bGwsIGRvbnQgdXBkYXRlIHZpc2liaWxpdHlcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJlY3QgPSBub3JtYWxpemVSZWN0KF90aGlzLnJvdW5kUmVjdERvd24oZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIHZhciBjb250YWlubWVudERPTVJlY3QgPSBfdGhpcy5wcm9wcy5jb250YWlubWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiBjb250YWlubWVudERPTVJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IGNvbnRhaW5tZW50RE9NUmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbTogY29udGFpbm1lbnRET01SZWN0LmJvdHRvbSxcbiAgICAgICAgICByaWdodDogY29udGFpbm1lbnRET01SZWN0LnJpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9IC8vIENoZWNrIGlmIHZpc2liaWxpdHkgaXMgd2FudGVkIHZpYSBvZmZzZXQ/XG5cblxuICAgICAgdmFyIG9mZnNldCA9IF90aGlzLnByb3BzLm9mZnNldCB8fCB7fTtcbiAgICAgIHZhciBoYXNWYWxpZE9mZnNldCA9IF90eXBlb2Yob2Zmc2V0KSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgaWYgKGhhc1ZhbGlkT2Zmc2V0KSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC50b3AgKz0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QubGVmdCArPSBvZmZzZXQubGVmdCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QuYm90dG9tIC09IG9mZnNldC5ib3R0b20gfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnJpZ2h0IC09IG9mZnNldC5yaWdodCB8fCAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaWJpbGl0eVJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgPj0gY29udGFpbm1lbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20sXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodFxuICAgICAgfTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3bmovcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvcHVsbC8xMTRcblxuICAgICAgdmFyIGhhc1NpemUgPSByZWN0LmhlaWdodCA+IDAgJiYgcmVjdC53aWR0aCA+IDA7XG4gICAgICB2YXIgaXNWaXNpYmxlID0gaGFzU2l6ZSAmJiB2aXNpYmlsaXR5UmVjdC50b3AgJiYgdmlzaWJpbGl0eVJlY3QubGVmdCAmJiB2aXNpYmlsaXR5UmVjdC5ib3R0b20gJiYgdmlzaWJpbGl0eVJlY3QucmlnaHQ7IC8vIGNoZWNrIGZvciBwYXJ0aWFsIHZpc2liaWxpdHlcblxuICAgICAgaWYgKGhhc1NpemUgJiYgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxWaXNpYmxlID0gcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+PSBjb250YWlubWVudFJlY3QudG9wICYmIHJlY3QubGVmdCA8PSBjb250YWlubWVudFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+PSBjb250YWlubWVudFJlY3QubGVmdDsgLy8gYWNjb3VudCBmb3IgcGFydGlhbCB2aXNpYmlsaXR5IG9uIGEgc2luZ2xlIGVkZ2VcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcGFydGlhbFZpc2libGUgPSB2aXNpYmlsaXR5UmVjdFtfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eV07XG4gICAgICAgIH0gLy8gaWYgd2UgaGF2ZSBtaW5pbXVtIHRvcCB2aXNpYmlsaXR5IHNldCBieSBwcm9wcywgbGV0cyBjaGVjaywgaWYgaXQgbWVldHMgdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAvLyBzbyBpZiBmb3IgaW5zdGFuY2UgZWxlbWVudCBpcyBhdCBsZWFzdCAyMDBweCBpbiB2aWV3cG9ydCwgdGhlbiBzaG93IGl0LlxuXG5cbiAgICAgICAgaXNWaXNpYmxlID0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgPyBwYXJ0aWFsVmlzaWJsZSAmJiByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tIC0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgOiBwYXJ0aWFsVmlzaWJsZTtcbiAgICAgIH0gLy8gRGVwcmVjYXRlZCBvcHRpb25zIGZvciBjYWxjdWxhdGluZyBvZmZzZXQuXG5cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQuZGlyZWN0aW9uID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvZmZzZXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW25vdGljZV0gb2Zmc2V0LmRpcmVjdGlvbiBhbmQgb2Zmc2V0LnZhbHVlIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBUaGV5IHN0aWxsIHdvcmsgZm9yIG5vdywgYnV0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBuZXcgc3ludGF4OiB7ICVzOiAlZCB9XCIsIG9mZnNldC5kaXJlY3Rpb24sIG9mZnNldC52YWx1ZSk7XG4gICAgICAgIGlzVmlzaWJsZSA9IF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKShvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlOyAvLyBub3RpZnkgdGhlIHBhcmVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSBfdGhpcy5wcm9wcy5vbkNoYW5nZShpc1Zpc2libGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTZW5zb3IsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIC8vIHJlLXJlZ2lzdGVyIG5vZGUgaW4gY29tcG9uZW50RGlkVXBkYXRlIGlmIGNoaWxkcmVuIGRpZmZzIFsjMTAzXVxuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgIXByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3VuZFJlY3REb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kUmVjdERvd24ocmVjdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLmZsb29yKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5mbG9vcihyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5mbG9vcihyZWN0LnJpZ2h0KVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdGhpcy5zdGF0ZS52aXNpYmlsaXR5UmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7XG59KHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcGFydGlhbFZpc2liaWxpdHk6IGZhbHNlLFxuICBtaW5Ub3BWYWx1ZTogMCxcbiAgc2Nyb2xsQ2hlY2s6IGZhbHNlLFxuICBzY3JvbGxEZWxheTogMjUwLFxuICBzY3JvbGxUaHJvdHRsZTogLTEsXG4gIHJlc2l6ZUNoZWNrOiBmYWxzZSxcbiAgcmVzaXplRGVsYXk6IDI1MCxcbiAgcmVzaXplVGhyb3R0bGU6IC0xLFxuICBpbnRlcnZhbENoZWNrOiB0cnVlLFxuICBpbnRlcnZhbERlbGF5OiAxMDAsXG4gIGRlbGF5ZWRDYWxsOiBmYWxzZSxcbiAgb2Zmc2V0OiB7fSxcbiAgY29udGFpbm1lbnQ6IG51bGwsXG4gIGNoaWxkcmVuOiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcInByb3BUeXBlc1wiLCB7XG4gIG9uQ2hhbmdlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmMsXG4gIGFjdGl2ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pXSksXG4gIGRlbGF5ZWRDYWxsOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIG9mZnNldDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIHRvcDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgbGVmdDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgYm90dG9tOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICByaWdodDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSksIC8vIGRlcHJlY2F0ZWQgb2Zmc2V0IHByb3BlcnR5XG4gIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIGRpcmVjdGlvbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAgIHZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KV0pLFxuICBzY3JvbGxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBzY3JvbGxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHNjcm9sbFRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcmVzaXplRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGludGVydmFsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGNvbnRhaW5tZW50OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5pbnN0YW5jZU9mKHdpbmRvdy5FbGVtZW50KSA6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYW55LFxuICBjaGlsZHJlbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZWxlbWVudCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jXSksXG4gIG1pblRvcFZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxufSk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29sb3JDb250cm9sIGZyb20gJy4uL2NvbW1vbi9Db2xvckNvbnRyb2wnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcbmNvbnN0IHtcbiAgTWVkaWFVcGxvYWRcbn0gPSB3cC5ibG9ja0VkaXRvclxuXG5jb25zdCB7XG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIFJhbmdlQ29udHJvbCxcbiAgRm9jYWxQb2ludFBpY2tlcixcbiAgRGFzaGljb24sXG4gIFRvZ2dsZUNvbnRyb2wsXG4gIFBsYWNlaG9sZGVyXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBCYWNrZ3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2NvbG9yJyxcbiAgICAgIGltYWdlVXJsOiB2YWx1ZS5pbWFnZVVybCB8fCAnJyxcbiAgICAgIGZvY3VzUG9pbnQ6IHZhbHVlLmZvY3VzUG9pbnQgfHwgeyB4OiAwLjUsIHk6IDAuNSB9LFxuICAgICAgY29sb3JWYWx1ZTogdmFsdWUuY29sb3JWYWx1ZSB8fCAnI2ZmZmZmZicsXG4gICAgICBvdmVybGF5Q29sb3JWYWx1ZTogdmFsdWUub3ZlcmxheUNvbG9yVmFsdWUgfHwgJycsXG4gICAgICBvdmVybGF5T3BhY2l0eTogdmFsdWUub3ZlcmxheU9wYWNpdHkgfHwgNTAsXG4gICAgICBmaXhlZDogdmFsdWUuZml4ZWQgfHwgZmFsc2UsXG4gICAgICB1c2VGZWF0dXJlZDogdmFsdWUudXNlRmVhdHVyZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydjb2xvcicsICdpbWFnZSddXG4gICAgY29uc3QgbGFiZWxzID0ge1xuICAgICAgY29sb3I6IF9fKCdDb2xvcicsICduZXZlJyksXG4gICAgICBpbWFnZTogX18oJ0ltYWdlJywgJ25ldmUnKVxuICAgIH1cbiAgICBjb25zdCBidXR0b25zID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcbiAgICAgIGJ1dHRvbnMucHVzaChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNQcmltYXJ5PXtzZWxmLnN0YXRlLnR5cGUgPT09IHR5cGV9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9e3NlbGYuc3RhdGUudHlwZSAhPT0gdHlwZX1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVTZXR0aW5nKHsgdHlwZTogdHlwZSB9KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxzW3R5cGVdfVxuICAgICAgICA8L0J1dHRvbj4pXG4gICAgfSlcblxuICAgIHJldHVybiBidXR0b25zXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC0tdG9wLXRvb2xiYXInPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J25ldmUtYmFja2dyb3VuZC10eXBlLWNvbnRyb2wnPlxuICAgICAgICAgICAge3RoaXMuZ2V0QnV0dG9ucygpfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC0tYm9keSc+XG4gICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gJ2NvbG9yJyAmJlxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb2xvclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoeyBjb2xvclZhbHVlOiBjb2xvclZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXt0aGlzLnN0YXRlLmNvbG9yVmFsdWV9XG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCAnQ29sb3InLCAnbmV2ZScgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmV2ZS1jb2xvci1wcmV2aWV3J1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvclZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50Pn1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlID09PSAnaW1hZ2UnICYmXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdVc2UgRmVhdHVyZWQgSW1hZ2UnLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudXNlRmVhdHVyZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh1c2VGZWF0dXJlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgdXNlRmVhdHVyZWQ6IHVzZUZlYXR1cmVkIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmltYWdlVXJsID9cbiAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgIGljb249J2Zvcm1hdC1pbWFnZSdcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgID8gX18oJ0ZhbGxiYWNrIEltYWdlJywgJ25ldmUnKVxuICAgICAgICAgICAgICAgICAgICA6IF9fKCdJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHtfXygnU2VsZWN0IGZyb20gdGhlIE1lZGlhIExpYnJhcnkgb3IgdXBsb2FkIGEgbmV3IGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnbmV2ZScpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoaW1hZ2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgaW1hZ2VVcmw6IGltYWdlRGF0YS51cmwgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc1NlY29uZGFyeSBvbkNsaWNrPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnQWRkIEltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj4gOlxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZW1vdmUtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgIGlzRGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlVXJsOiAnJyB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj0nbm8nIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfXygnUmVtb3ZlIEZhbGxiYWNrIEltYWdlJywgJ25ldmUnKVxuICAgICAgICAgICAgICAgICAgICAgIDogX18oJ1JlbW92ZSBJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxGb2NhbFBvaW50UGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9jdXNQb2ludH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBhcnNlRmxvYXQodmFsLngpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBwYXJzZUZsb2F0KHZhbC55KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IGZvY3VzUG9pbnQ6IG5ld1BvaW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRml4ZWQgQmFja2dyb3VuZCcsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5maXhlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpeGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyBmaXhlZDogZml4ZWQgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17dGhpcy5zdGF0ZS5vdmVybGF5Q29sb3JWYWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG92ZXJsYXlDb2xvclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgIHsgb3ZlcmxheUNvbG9yVmFsdWU6IG92ZXJsYXlDb2xvclZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgQ29sb3InLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSduZXZlLWNvbG9yLXByZXZpZXcnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLm92ZXJsYXlDb2xvclZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgT3BhY2l0eScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3ZlcmxheU9wYWNpdHl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdmVybGF5T3BhY2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgb3ZlcmxheU9wYWNpdHk6IG92ZXJsYXlPcGFjaXR5IH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtaW49JzAnXG4gICAgICAgICAgICAgICAgbWF4PScxMDAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTZXR0aW5nKG5ld1ZhbHVlcykge1xuICAgIHRoaXMuc2V0U3RhdGUobmV3VmFsdWVzKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLm5ld1ZhbHVlc1xuICAgIH0pXG4gIH1cbn1cblxuQmFja2dyb3VuZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi9CYWNrZ3JvdW5kQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxCYWNrZ3JvdW5kQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBnbG9iYWwgd3AsIGxvZGFzaCAqL1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMuanMnXG5pbXBvcnQgU2l6aW5nQ29udHJvbCBmcm9tICcuLi9jb21tb24vU2l6aW5nLmpzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgUGFuZWwsIFBhbmVsQm9keSwgUGFuZWxSb3cgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgbWFwVmFsdWVzIH0gPSBsb2Rhc2hcblxuY2xhc3MgQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCBkZWZhdWx0c0Zyb21Db250cm9sID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIHRvcDogMyxcbiAgICAgICAgcmlnaHQ6IDMsXG4gICAgICAgIGJvdHRvbTogMyxcbiAgICAgICAgbGVmdDogM1xuICAgICAgfSxcbiAgICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICAgIHRvcDogMSxcbiAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgbGVmdDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgdGhlIG9sZCwgbm9uLWFycmF5IHZlcnNpb24gb2YgcmFkaXVzLCB3ZSBjb252ZXJ0LlxuICAgIGlmICh0eXBlb2YgdmFsdWUuYm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyUmFkaXVzID0ge1xuICAgICAgICB0b3A6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgcmlnaHQ6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGxlZnQ6IHZhbHVlLmJvcmRlclJhZGl1c1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBvbGQsIG5vbi1hcnJheSB2ZXJzaW9uIG9mIHJhZGl1cywgd2UgY29udmVydC5cbiAgICBpZiAodHlwZW9mIHZhbHVlLmJvcmRlcldpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyV2lkdGggPSB7XG4gICAgICAgIHRvcDogdmFsdWUuYm9yZGVyV2lkdGgsXG4gICAgICAgIHJpZ2h0OiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgbGVmdDogdmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRWYWxzID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFZhbHMgPyB7XG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0VmFscyxcbiAgICAgIC4uLmRlZmF1bHRzRnJvbUNvbnRyb2xcbiAgICB9IDogZGVmYXVsdHNGcm9tQ29udHJvbFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2ZpbGxlZCcsXG4gICAgICBiYWNrZ3JvdW5kOiB2YWx1ZS5iYWNrZ3JvdW5kIHx8ICcnLFxuICAgICAgYmFja2dyb3VuZEhvdmVyOiB2YWx1ZS5iYWNrZ3JvdW5kSG92ZXIgfHwgJycsXG4gICAgICB0ZXh0OiB2YWx1ZS50ZXh0IHx8ICcnLFxuICAgICAgdGV4dEhvdmVyOiB2YWx1ZS50ZXh0SG92ZXIgfHwgJycsXG4gICAgICBib3JkZXJSYWRpdXM6IHZhbHVlLmJvcmRlclJhZGl1cyB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyxcbiAgICAgIGJvcmRlcldpZHRoOiB2YWx1ZS5ib3JkZXJXaWR0aCB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoLFxuICAgICAgcmFkaXVzTGlua2VkOiBmYWxzZSxcbiAgICAgIHdpZHRoTGlua2VkOiBmYWxzZVxuICAgIH1cbiAgICAvLyBTZXQgbGlua2luZy5cbiAgICB0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMpXG4gICAgdGhpcy5zdGF0ZS53aWR0aExpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJXaWR0aClcblxuICAgIC8vIHRoaXMudXBkYXRlVmFsdWVzKHRoaXMuc3RhdGUpXG5cbiAgICB0aGlzLnJlbmRlckJvcmRlckNvbnRyb2xzID0gdGhpcy5yZW5kZXJCb3JkZXJDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJUeXBlQ29udHJvbHMgPSB0aGlzLnJlbmRlclR5cGVDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJDb2xvcnMgPSB0aGlzLnJlbmRlckNvbG9ycy5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXJCb3JkZXJDb250cm9scygpIHtcbiAgICBjb25zdCByYWRpdXNPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndG9wJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnRvcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3JpZ2h0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLmJvdHRvbVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xlZnQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMubGVmdFxuICAgICAgfVxuICAgIF1cbiAgICBjb25zdCB3aWR0aE9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0b3AnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJXaWR0aC50b3BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyaWdodCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyV2lkdGguYm90dG9tXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGVmdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLmxlZnRcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57X18oJ0JvcmRlciBSYWRpdXMnLCAnbmV2ZScpfTwvc3Bhbj5cbiAgICAgICAgPFNpemluZ0NvbnRyb2xcbiAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICBvcHRpb25zPXtyYWRpdXNPcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1c31cbiAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUucmFkaXVzTGlua2VkfVxuICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzTGlua2VkOiAhdGhpcy5zdGF0ZS5yYWRpdXNMaW5rZWQgfSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCkge1xuICAgICAgICAgICAgICBuZXdWYWwgPSBtYXBWYWx1ZXModGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1ZhbCA9IHsgLi4udGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsIFtvcHRpb25UeXBlXTogbnVtZXJpY1ZhbHVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvcmRlclJhZGl1czogdGhpcy5kZWZhdWx0VmFscy5ib3JkZXJSYWRpdXMgfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgYm9yZGVyUmFkaXVzOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09ICdvdXRsaW5lJyAmJlxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntfXygnQm9yZGVyIFdpZHRoJywgJ25ldmUnKX08L3NwYW4+XG4gICAgICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICBvcHRpb25zPXt3aWR0aE9wdGlvbnN9XG4gICAgICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRofVxuICAgICAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUud2lkdGhMaW5rZWR9XG4gICAgICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGhMaW5rZWQ6ICF0aGlzLnN0YXRlLndpZHRoTGlua2VkIH0pfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aExpbmtlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0gbWFwVmFsdWVzKHRoaXMuc3RhdGUuYm9yZGVyV2lkdGgsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0geyAuLi50aGlzLnN0YXRlLmJvcmRlcldpZHRoLCBbb3B0aW9uVHlwZV06IG51bWVyaWNWYWx1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uUmVzZXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9yZGVyV2lkdGg6IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGggfSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGJvcmRlcldpZHRoOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBvbGRCb3JkZXIoKSB7XG4gIH1cblxuICByZW5kZXJDb2xvcnMoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBub3JtYWw6IHtcbiAgICAgICAgbGFiZWw6IF9fKCdOb3JtYWwnLCAnbmV2ZScpLFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnR5cGUgPT09ICdmaWxsJyA/IF9fKCdUZXh0JywgJ25ldmUnKSA6IF9fKCdUZXh0IGFuZCBCb3JkZXInLCAnbmV2ZScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBsYWJlbDogX18oJ0hvdmVyJywgJ25ldmUnKSxcbiAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSG92ZXI6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0SG92ZXI6IHRoaXMuc3RhdGUudHlwZSA9PT0gJ2ZpbGwnID8gX18oJ1RleHQnLCAnbmV2ZScpIDogX18oJ1RleHQgYW5kIEJvcmRlcicsICduZXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5ub19ob3Zlcikge1xuICAgICAgZGVsZXRlIHNldHRpbmdzLmhvdmVyXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWw+XG4gICAgICAgIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykubWFwKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubm9faG92ZXIgPyAnJyA6IHNldHRpbmdzW3R5cGVdLmxhYmVsfVxuICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXt0eXBlID09PSAnbm9ybWFsJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzW3R5cGVdLmNvbnRyb2xzKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChjb250cm9sU2x1ZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NldHRpbmdzW3R5cGVdLmNvbnRyb2xzW2NvbnRyb2xTbHVnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3NlbGYuc3RhdGVbY29udHJvbFNsdWddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2NvbnRyb2xTbHVnXTogdmFsdWUgfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udHJvbFNsdWddOiB2YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1BhbmVsPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclR5cGVDb250cm9scygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgbGFiZWw6ICdmaWxsJyxcbiAgICAgICAgdG9vbHRpcDogX18oJ0ZpbGxlZCcsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuXG4gICAgICB9LFxuICAgICAgb3V0bGluZToge1xuICAgICAgICBsYWJlbDogJ291dGxpbmUnLFxuICAgICAgICB0b29sdGlwOiBfXygnT3V0bGluZScsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmFkaW9JY29uc1xuICAgICAgICBvcHRpb25zPXt0eXBlc30gb25DaGFuZ2U9eyh0eXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGUgfSwgdGhpcy51cGRhdGVWYWx1ZXMoeyB0eXBlIH0pKVxuICAgICAgICB9fSB2YWx1ZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWJ1dHRvbi1hcHBlYXJhbmNlLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e1xuICAgICAgICAgICAgX18oJ1N0eWxlJywgJ25ldmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3RoaXMucmVuZGVyVHlwZUNvbnRyb2xzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyQm9yZGVyQ29udHJvbHMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xvcnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIC8vIE1pZ3JhdGUgYm9yZGVyLXJhZGl1cyBhbmQgYm9yZGVyLXdpZHRoXG4gICAgICBjb25zdCByID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyUmFkaXVzXG4gICAgICBpZiAoIHIgJiYgKCB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInICkgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlclJhZGl1cyA9IHtcbiAgICAgICAgICB0b3A6IHIsXG4gICAgICAgICAgYm90dG9tOiByLFxuICAgICAgICAgIHJpZ2h0OiByLFxuICAgICAgICAgIGxlZnQ6IHJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3ID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIGlmICggdyAmJiAodHlwZW9mIHcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB3ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlcldpZHRoID0ge1xuICAgICAgICAgIHRvcDogdyxcbiAgICAgICAgICBib3R0b206IHcsXG4gICAgICAgICAgcmlnaHQ6IHcsXG4gICAgICAgICAgbGVmdDogd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IC4uLnRoaXMuc3RhdGUsIC4uLmUuZGV0YWlsLnZhbHVlIH0gKVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGlzTGlua2VkKG9iamVjdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvYmplY3QpLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IE9iamVjdC52YWx1ZXMob2JqZWN0KVswXSlcbiAgfVxufVxuXG5CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQgZnJvbSAnLi9CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkFwcGVhcmFuY2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8QnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sLmpzJ1xuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgQ29sb3JDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG5cbiAgY29uc3QgdXBkYXRlVmFsdWVzID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgdXBkYXRlVmFsdWVzKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtY29sb3ItY29udHJvbCc+XG4gICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgIGxhYmVsPXtjb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgc2VsZWN0ZWRDb2xvcj17dmFsdWV9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17Y29udHJvbC5wYXJhbXMuZGVmYXVsdH1cbiAgICAgICAgYWxwaGFEaXNhYmxlZD17Y29udHJvbC5wYXJhbXMuZGlzYWJsZUFscGhhfVxuICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWVzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Db2xvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBDb2xvckNvbXBvbmVudCBmcm9tICcuL0NvbG9yQ29tcG9uZW50J1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IENvbG9yQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPENvbG9yQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgQ29sb3JQaWNrZXIsIEJ1dHRvbiwgRHJvcGRvd24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY29uc3QgQ29sb3JDb250cm9sID0gKHsgbGFiZWwsIHNlbGVjdGVkQ29sb3IsIG9uQ2hhbmdlLCBkZWZhdWx0VmFsdWUgfSkgPT4ge1xuICBsZXQgdG9nZ2xlID0gbnVsbFxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gdmFsdWUucmdiXG4gICAgaWYgKGEgPCAxKSB7XG4gICAgICBvbkNoYW5nZShgcmdiYSgke3J9LCAke2d9LCAke2J9LCAke2F9KWApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgb25DaGFuZ2UodmFsdWUuaGV4KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgb25DaGFuZ2UoZGVmYXVsdFZhbHVlIHx8ICcnKVxuICAgIHRvZ2dsZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWNvbnRyb2wtaGVhZGVyIG5ldmUtY29sb3ItY29tcG9uZW50Jz5cbiAgICAgIHtcbiAgICAgICAgbGFiZWwgJiZcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICB9XG5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICByZW5kZXJUb2dnbGU9eyh7IGlzT3Blbiwgb25Ub2dnbGUgfSkgPT4ge1xuICAgICAgICAgIHRvZ2dsZSA9IG9uVG9nZ2xlXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaXNTZWNvbmRhcnlcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb2xvcicgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZENvbG9yIH19IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JhZGllbnQnIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICAgIHJlbmRlckNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGEgaHJlZj0nIycgLz5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17c2VsZWN0ZWRDb2xvcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtzZWxlY3RlZENvbG9yICYmXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NsZWFyJ1xuICAgICAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge19fKCdDbGVhcicsICduZXZlJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ29sb3JDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFNpemluZ0NvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1NpemluZy5qcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUuanMnXG5cbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBOdW1iZXJDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHVuaXRzLCB2YWx1ZSwgY2xhc3NOYW1lLCBoYXNSZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyAnIG5ldmUtbnVtYmVyLWNvbnRyb2wtd3JhcCd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICAgIHtoYXNSZXNwb25zaXZlICYmXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRyb2xcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlZERldmljZShjdXJyZW50RGV2aWNlKX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIHt1bml0cyAmJiA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+e3RoaXMuZ2V0QnV0dG9ucygpfTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaXppbmdDb250cm9sXG4gICAgICAgICAgbm9MaW5raW5nXG4gICAgICAgICAgbm9SYW5nZVxuICAgICAgICAgIG9wdGlvbnM9e1t7IHZhbHVlOiB2YWx1ZSB9XX1cbiAgICAgICAgICBvbkNoYW5nZT17KHR5cGUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heCB8fCAxMDB9XG4gICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbiB8fCAwfVxuICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcCB8fCAxfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLnByb3BzLmRlZmF1bHR9XG4gICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHsgdW5pdHMgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIXVuaXRzKSByZXR1cm4gJydcbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdhbG9uZSBhY3RpdmUnXG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgID57dW5pdHNbMF19XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgYWN0aXZlOiBzZWxmLnByb3BzLmFjdGl2ZVVuaXQgPT09IHVuaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpc1NtYWxsXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wcm9wcy5vblVuaXRDaGFuZ2UodW5pdClcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxufVxuXG5OdW1iZXJDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblJlc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1bml0czogUHJvcFR5cGVzLmFycmF5IHx8IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoYXNSZXNwb25zaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2VkRGV2aWNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHNcblxuY29uc3QgUmFkaW9JY29ucyA9ICh7IG9wdGlvbnMsIG9uQ2hhbmdlLCB2YWx1ZSwgc2hvd0xhYmVscyB9KSA9PiB7XG4gIGNvbnN0IGdldEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChvcHRpb25zW3R5cGVdLmljb24gPT09ICd0ZXh0Jykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoW3sgYWN0aXZlOiB2YWx1ZSA9PT0gdHlwZSB9LCAnaXMtdGV4dCddKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UodHlwZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbnNbdHlwZV0udG9vbHRpcH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD17b3B0aW9uc1t0eXBlXS50b29sdGlwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsgYWN0aXZlOiB2YWx1ZSA9PT0gdHlwZSB9KX1cbiAgICAgICAgICAgIGljb249e29wdGlvbnNbdHlwZV0uaWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UodHlwZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd0xhYmVscyAmJiA8bGFiZWw+e29wdGlvbnNbdHlwZV0udG9vbHRpcH08L2xhYmVsPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJhZGlvLWljb25zJz5cbiAgICAgIHtnZXRCdXR0b25zKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmFkaW9JY29ucy5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNob3dMYWJlbHM6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvSWNvbnNcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5jb25zdCB7XG4gIEJ1dHRvbixcbiAgRGFzaGljb24sXG4gIFRvb2x0aXAsXG4gIEJ1dHRvbkdyb3VwXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBSZXNwb25zaXZlQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZXc6ICdkZXNrdG9wJ1xuICAgIH1cbiAgICB0aGlzLmxpbmtSZXNwb25zaXZlQnV0dG9ucygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGV2aWNlcyA9IHtcbiAgICAgIGRlc2t0b3A6IHtcbiAgICAgICAgdG9vbHRpcDogX18oJ0Rlc2t0b3AnLCAnbmV2ZScpLFxuICAgICAgICBpY29uOiAnZGVza3RvcCdcbiAgICAgIH0sXG4gICAgICB0YWJsZXQ6IHtcbiAgICAgICAgdG9vbHRpcDogX18oJ1RhYmxldCcsICduZXZlJyksXG4gICAgICAgIGljb246ICd0YWJsZXQnXG4gICAgICB9LFxuICAgICAgbW9iaWxlOiB7XG4gICAgICAgIHRvb2x0aXA6IF9fKCdNb2JpbGUnLCAnbmV2ZScpLFxuICAgICAgICBpY29uOiAnc21hcnRwaG9uZSdcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeyBleGNsdWRlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGRldmljZU1hcCA9IHt9XG4gICAgT2JqZWN0LmtleXMoZGV2aWNlcykubWFwKGtleSA9PiB7XG4gICAgICBpZiAoZXhjbHVkZWQpIHtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGV2aWNlTWFwW2tleV0gPSBkZXZpY2VzW2tleV1cbiAgICB9KVxuXG4gICAgY29uc3QgeyBjb250cm9sTGFiZWwsIGhpZGVSZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1yZXNwb25zaXZlLWNvbnRyb2wtYmFyJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb250cm9sTGFiZWwgJiZcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbnRyb2xMYWJlbH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IWhpZGVSZXNwb25zaXZlICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxvYXRpbmctY29udHJvbHMnPlxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRldmljZU1hcCkubWFwKChkZXZpY2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHRvb2x0aXAsIGljb24gfSA9IGRldmljZU1hcFtkZXZpY2VdXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PXt0b29sdGlwfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhkZXZpY2UgPT09IHZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYWN0aXZlLWRldmljZSAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJycpICsgZGV2aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmV2ZUNoYW5nZWRSZXBzb25zaXZlUHJldmlldycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZGV2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hpY29uIGljb249e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtcmVzcG9uc2l2ZS1jb250cm9scy1jb250ZW50Jz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgY2hhbmdlVmlld1R5cGUoZGV2aWNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZpZXc6IGRldmljZSB9KVxuICAgIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZWREZXZpY2UoZGV2aWNlKVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGV2aWNlKVxuICB9XG5cbiAgbGlua1Jlc3BvbnNpdmVCdXR0b25zKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZUNoYW5nZWRSZXBzb25zaXZlUHJldmlldycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZWxmLmNoYW5nZVZpZXdUeXBlKGUuZGV0YWlsKVxuICAgIH0pXG4gIH1cbn1cblxuUmVzcG9uc2l2ZUNvbnRyb2wucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbnRyb2xMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZVJlc3BvbnNpdmU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZXhjbHVkZWQ6IFByb3BUeXBlcy5hcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zaXZlQ29udHJvbFxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIFNpbmdsZVNpemluZ0lucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdudi1zaXppbmctaXRlbSc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMudHlwZSA/IHRoaXMucHJvcHMudHlwZSArICctaW5wdXQnIDogJyd9XG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn1cbiAgICAgICAgICBtYXg9e3RoaXMucHJvcHMubWF4fVxuICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcH1cbiAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICBlID0+IHRoaXMucHJvcHMub25DaGFuZ2UoIHRoaXMucHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT09ICcnID8gMCA6IGUudGFyZ2V0LnZhbHVlIClcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLnR5cGUgJiYgKFxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJyBodG1sRm9yPXt0aGlzLnByb3BzLnR5cGUgKyAnLWlucHV0J30+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuU2luZ2xlU2l6aW5nSW5wdXQucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZSggW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdICksXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2l6aW5nSW5wdXRcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFNpbmdsZVNpemluZ0lucHV0IGZyb20gJy4uL2NvbW1vbi9TaW5nbGVTaXppbmdJbnB1dC5qcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQnV0dG9uLFxuICBUb29sdGlwXG59ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgU2l6aW5nQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYXNTZXRWYWx1ZXMgPSB0aGlzLmhhc1NldFZhbHVlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5saW5rQnV0dG9uID0gdGhpcy5saW5rQnV0dG9uLmJpbmQodGhpcylcbiAgfVxuXG4gIGxpbmtCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubm9MaW5raW5nKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLWxpbmsnXG4gICAgICAgIHRleHQ9e3RoaXMucHJvcHMubGlua2VkID8gX18oJ1VubGluayBWYWx1ZXMnLCAnbmV2ZScpIDogX18oJ0xpbmsgVmFsdWVzJywgJ25ldmUnKX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT0nbGluay1pY29uJ1xuICAgICAgICAgIGljb249e3RoaXMucHJvcHMubGlua2VkID8gJ2FkbWluLWxpbmtzJyA6ICdlZGl0b3ItdW5saW5rJ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uTGlua2VkKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgW3sgYWN0aXZlOiB0aGlzLnByb3BzLmxpbmtlZCB9LCAnbGluayddKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFtcbiAgICAgICduZXZlLXJlc3BvbnNpdmUtc2l6aW5nJyxcbiAgICAgIHsgJ3NpbmdsZS1pbnB1dCc6IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPT09IDEgfVxuICAgIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAge3RoaXMubGlua0J1dHRvbigpfVxuICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaSwgbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2luZ2xlU2l6aW5nSW5wdXRcbiAgICAgICAgICAgICAga2V5PXtufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHR5cGUsIHZhbHVlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKHR5cGUsXG4gICAgICAgICAgICAgICAgdmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17aS52YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpLnR5cGUgPyBpLnR5cGUgKyAnLWlucHV0JyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPXtpLnR5cGV9XG4gICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXh9XG4gICAgICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59XG4gICAgICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAge3RoaXMuaGFzU2V0VmFsdWVzKCkgJiZcbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyBfXygnUmVzZXQgYWxsIFZhbHVlcycsICduZXZlJykgOiBfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9J3Jlc2V0LWljb24nXG4gICAgICAgICAgICAgIGljb249J2ltYWdlLXJvdGF0ZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldCdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblJlc2V0KCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG9vbHRpcD59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBoYXNTZXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0cywgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgZGVmYXVsdHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkZWZhdWx0cykgIT0gcGFyc2VGbG9hdChvcHRpb25zWzBdLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICBvcHRpb24gPT4gb3B0aW9uLnZhbHVlICE9IGRlZmF1bHRzW29wdGlvbi50eXBlXVxuICAgICkubGVuZ3RoID4gMFxuICB9XG59XG5cblNpemluZ0NvbnRyb2wucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgb25MaW5rZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGlua2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25SZXNldDogUHJvcFR5cGVzLmZ1bmMsXG4gIG5vTGlua2luZzogUHJvcFR5cGVzLmJvb2wsXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpemluZ0NvbnRyb2xcbiIsImV4cG9ydCBjb25zdCBtYXliZVBhcnNlSnNvbiA9IChpbnB1dCkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBpbnB1dFxuICB9XG4gIHRyeSB7XG4gICAgSlNPTi5wYXJzZShpbnB1dClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuICByZXR1cm4gSlNPTi5wYXJzZShpbnB1dClcbn1cblxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKVxufVxuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBtZXJnZURlZXAgPSAodGFyZ2V0LCAuLi5zb3VyY2VzKSA9PiB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgLy8gVXNlIGZpcnN0IG9iamVjdCB3ZSB3YW50IHRvIG1lcmdlIHdpdGggYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBzdGFydC5cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpXG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIC8vIExvb3Agb3ZlciBlYWNoIGtleSBpbiBvbmUgc291cmNlLlxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAvLyBNZXJnZSBpbnNpZGUga2V5cyBpZiB3ZSBoYXZlIGFuIG9iamVjdC5cbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pXG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZWFzc2lnbiB3aXRoIHNvdXJjZS5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFJ1biByZWN1cnNpdmVseSBmb3IgbXVsdGlwbGUuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SW50VmFsQXNSZXNwb25zaXZlID0gKHZhbHVlKSA9PiB7XG4gIHZhbHVlID0gbWF5YmVQYXJzZUpzb24odmFsdWUpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnZGVza3RvcCcpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAndGFibGV0JykgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdtb2JpbGUnKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFsdWUgPSB7XG4gICAgICBkZXNrdG9wOiB2YWx1ZSxcbiAgICAgIHRhYmxldDogdmFsdWUsXG4gICAgICBtb2JpbGU6IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3QgU1ZHID0ge1xuICBsb2dvT25seTogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNy4yOSdcblx0aGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDE3LjI5IDE3LjI5J1xuICA+XG5cdDxwYXRoXG5cdCAgZD0nTTE0Ljc2LDE0Ljc2QTguNjEsOC42MSwwLDAsMSwxMiwxNi42YTguNDIsOC40MiwwLDAsMS0zLjM2LjY5LDguNjYsOC42NiwwLDAsMS0yLjcyLS40NCw4LjE0LDguMTQsMCwwLDEtMi4zOC0xLjIzLDkuNzQsOS43NCwwLDAsMS0xLjg3LTEuODdBOC4yNyw4LjI3LDAsMCwxLC40NCwxMS4zNyw4LjY3LDguNjcsMCwwLDEsMCw4LjY0LDguNTQsOC41NCwwLDAsMSwuNjgsNS4yOSw4LjcyLDguNzIsMCwwLDEsMi41MiwyLjUzLDguNzEsOC43MSwwLDAsMSw1LjI5LjY5LDguNSw4LjUsMCwwLDEsMTIsLjY5YTguNzgsOC43OCwwLDAsMSwyLjc2LDEuODRBOC43Miw4LjcyLDAsMCwxLDE2LjYsNS4yOWE4LjUsOC41LDAsMCwxLDAsNi43MUE4LjcyLDguNzIsMCwwLDEsMTQuNzYsMTQuNzZaTTEuNTgsNS41NEE3LjY2LDcuNjYsMCwwLDAsMSw4LjY0LDcuNjgsNy42OCwwLDAsMCwyLjE0LDEyLjhhNy41MSw3LjUxLDAsMCwwLDMuMTMsMi44NFpNOC4yOSw4LjI1LDcuMiw1LjNsLS43OS0uMDdjLS4xNCwwLS4yNC0uMS0uMjgtLjI4YS44NC44NCwwLDAsMSwwLS41MmMuMDctLjE4LjE3LS4yNi4zMS0uMjZsLjMzLDAsLjg0LDAsLjg0LDBjLjU0LDAsMS4yMywwLDIuMDYtLjExYS4zMS4zMSwwLDAsMSwuMy4yNS45Mi45MiwwLDAsMSwwLC41MmMwLC4xOC0uMTQuMjgtLjI4LjI5bC0uMDcsMGEuODUuODUsMCwwLDEtLjI1LjA3LDIuMywyLjMsMCwwLDEtLjM5LDBsMi42Miw3LjIzLjMtLjc5YTE5LDE5LDAsMCwwLC42MS0xLjg4LDYuNzMsNi43MywwLDAsMCwuMy0xLjY1LDQuMzMsNC4zMywwLDAsMC0uNDctMi4xMywyLjM4LDIuMzgsMCwwLDEtLjE5LS4zbC0uMi0uMzJzLS4wNy0uMTQtLjE0LS4yN0ExLjgyLDEuODIsMCwwLDEsMTIuNTYsNWEyLjgzLDIuODMsMCwwLDEtLjA3LS4yOCwxLjIyLDEuMjIsMCwwLDEsMC0uMzIsMS4zLDEuMywwLDAsMSwuNDYtMS4wOCwxLjIzLDEuMjMsMCwwLDEsMS0uMjksNy42Myw3LjYzLDAsMCwwLTIuNC0xLjQ5QTcuNDksNy40OSwwLDAsMCw4LjY0LDFhNy42MSw3LjYxLDAsMCwwLTMuNy45M0E3LjQ3LDcuNDcsMCwwLDAsMi4xOSw0LjQzaC41Yy41MywwLDEuMjEsMCwyLjA1LS4wOWEuMjkuMjksMCwwLDEsLjMuMjIuNzUuNzUsMCwwLDEsMCwuNDcuMzQuMzQsMCwwLDEtLjI4LjI3bC0xLC4wNywzLDcuOTFaTTcuNjQsMTMuMmMtLjQ5LDEuNDItLjgxLDIuMzYtMSwyLjg0YTYuNyw2LjcsMCwwLDAsMiwuMjlBNy4yOCw3LjI4LDAsMCwwLDExLDE1Ljk0bC0yLjIzLTZDOC41LDEwLjY4LDguMTIsMTEuNzcsNy42NCwxMy4yWm00Ljg5LDIuMTdhNy40LDcuNCwwLDAsMCwyLjc3LTIuODEsNy43MSw3LjcxLDAsMCwwLDEtMy45MkE3LjUxLDcuNTEsMCwwLDAsMTUuNDIsNSw5LDksMCwwLDEsMTUuNSw2LjFjMCwuMzYsMCwuNjUsMCwuODhhNC4xNyw0LjE3LDAsMCwxLS4xMy43M2MtLjA2LjI3LS4xMS40NC0uMTQuNTNsLS4xNS40UTE0LjY2LDkuNjYsMTIuNTMsMTUuMzdaJ1xuXHQvPlxuICA8L3N2Zz4sXG4gIGxvZ29Ub3BUaXRsZTogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNC4wNCdcblx0aGVpZ2h0PScxNy4zMycgdmlld0JveD0nMCAwIDE0LjA0IDE3LjMzJ1xuICA+XG5cdDxwYXRoXG5cdCAgZD0nTTEwLjEzLDcuNTFhNC4zOSw0LjM5LDAsMCwxLTEuNC45M0E0LjMyLDQuMzIsMCwwLDEsNyw4LjhhNC42NCw0LjY0LDAsMCwxLTEuMzktLjIyQTQuMjIsNC4yMiwwLDAsMSw0LjQzLDhhNC41LDQuNSwwLDAsMS0uOTUtMSwzLjc3LDMuNzcsMCwwLDEtLjYzLTEuMjFBNC4zNyw0LjM3LDAsMCwxLDMsMi43LDQuNTgsNC41OCwwLDAsMSwzLjksMS4yOSw0LjU5LDQuNTksMCwwLDEsNS4zLjM1LDQuMzIsNC4zMiwwLDAsMSw3LDAsNC4yMiw0LjIyLDAsMCwxLDguNzIuMzVhNC4zOSw0LjM5LDAsMCwxLDEuNC45Myw0LjI2LDQuMjYsMCwwLDEsLjk0LDEuNCw0LjIsNC4yLDAsMCwxLC4zNiwxLjcxLDQuNDgsNC40OCwwLDAsMS0xLjI5LDMuMTJaTTMuNDIsMi44M2EzLjg0LDMuODQsMCwwLDAtLjMxLDEuNTgsMy45MiwzLjkyLDAsMCwwLC42LDIuMTFBMy44MywzLjgzLDAsMCwwLDUuMzEsOEM1LDcuMjQsNC40MSw1LjUyLDMuNDIsMi44M1pNNi44NCw0LjIsNi4yOCwyLjdsLS40LDBjLS4wNywwLS4xMi0uMDUtLjE1LS4xNGEuNS41LDAsMCwxLDAtLjI3YzAtLjA4LjA4LS4xMy4xNS0uMTJoLjE3bC40MywwLC40MywwYy4yNywwLC42MiwwLDEtLjA2LjA3LDAsLjEyLDAsLjE2LjEzYS40Ni40NiwwLDAsMSwwLC4yNkEuMTcuMTcsMCwwLDEsOCwyLjY2bDAsMC0uMTIsMC0uMiwwTDksNi40MSw5LjEzLDZjLjEtLjI3LjIxLS41OS4zMS0xYTMuMzgsMy4zOCwwLDAsMCwuMTUtLjg0LDIuMTYsMi4xNiwwLDAsMC0uMjQtMS4wOEw5LjI1LDNsLS4xLS4xN2ExLjExLDEuMTEsMCwwLDEtLjA3LS4xM0EuODUuODUsMCwwLDEsOSwyLjUyYTEuNTUsMS41NSwwLDAsMSwwLS4xNS44OC44OCwwLDAsMSwwLS4xNi42OS42OSwwLDAsMSwuMjMtLjU1LjY2LjY2LDAsMCwxLC40OS0uMTVBMy43NSwzLjc1LDAsMCwwLDguNDUuNzUsNC4wOCw0LjA4LDAsMCwwLDcsLjQ5LDMuODEsMy44MSwwLDAsMCw1LjEzLDFhMy43OCwzLjc4LDAsMCwwLTEuNCwxLjI5SDRjLjI3LDAsLjYyLDAsMS4wNSwwLC4wNywwLC4xMiwwLC4xNS4xMWEuMzMuMzMsMCwwLDEsMCwuMjQuMTUuMTUsMCwwLDEtLjE0LjEzbC0uNTEsMCwxLjUxLDRaTTYuNTEsNi43MSw2LDguMTZhMy4zMywzLjMzLDAsMCwwLDEsLjE1LDMuNzYsMy43NiwwLDAsMCwxLjE5LS4yTDcuMDgsNUM3LDUuNDMsNi43Niw2LDYuNTEsNi43MVpNOSw3LjgyYTMuODcsMy44NywwLDAsMCwxLjQxLTEuNDMsNCw0LDAsMCwwLC41Mi0yLDMuODUsMy44NSwwLDAsMC0uNDctMS44NywzLjg2LDMuODYsMCwwLDEsMCwuNThjMCwuMTgsMCwuMzMsMCwuNDRhMywzLDAsMCwxLS4wNi4zOGMwLC4xMy0uMDYuMjItLjA4LjI2czAsLjEyLS4wNy4yMUMxMC4xNSw0LjczLDkuNzIsNS44OCw5LDcuODJaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMy4wNiwxMC41NHYuN0gydjIuOTVIMS4xNFYxMS4yNEgwdi0uN1onLz5cblx0PHBhdGggZD0nTTMuNTksMTAuNTRoLjgydjMuNjVIMy41OVonLz5cblx0PHBhdGggZD0nTTgsMTAuNTR2LjdINi44NnYyLjk1SDZWMTEuMjRINC45NHYtLjdaJy8+XG5cdDxwYXRoIGQ9J00xMC45MywxMy40OHYuNzFIOC40OVYxMC41NGguODJ2Mi45NFonLz5cblx0PHBhdGggZD0nTTExLjQ1LDE0LjE5VjEwLjU0aDIuNDd2LjY5SDEyLjI3di43MWgxLjQ2di42OEgxMi4yN3YuODhIMTR2LjY5WicvPlxuXHQ8cGF0aCBkPSdNMiwxNC45M3YuNDZIMS4yNHYxLjg5SC43MVYxNS4zOUgwdi0uNDZaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTMuNTgsMTcuMjhjMC0uMDgtLjA1LS4xNi0uMDgtLjI1bC0uMDktLjI2SDIuNDlMMi40LDE3YzAsLjA5LS4wNi4xNy0uMDguMjVIMS43N2wuMjUtLjdMMi4yNSwxNmwuMjMtLjU0Yy4wNy0uMTcuMTUtLjMzLjIzLS41aC41bC4yMy41LjIyLjU0Yy4wOC4xOS4xNi40LjI0LjYxbC4yNS43Wk0zLDE1LjQ3bC0uMDYuMTQtLjA3LjItLjEuMjUtLjExLjI5aC42N2MwLS4xLS4wNy0uMTktLjEtLjI5cy0uMDctLjE4LS4xLS4yNVMzLDE1LjY2LDMsMTUuNlonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTUuNTEsMTUuMzRhLjYyLjYyLDAsMCwwLS41My4yMS44NS44NSwwLDAsMC0uMTcuNTYsMS40NiwxLjQ2LDAsMCwwLDAsLjMxLjc3Ljc3LDAsMCwwLC4xMi4yNC42NS42NSwwLDAsMCwuMjEuMTYuNjEuNjEsMCwwLDAsLjI4LjA2aC4yNlYxNmguNTN2MS4xN2ExLjY4LDEuNjgsMCwwLDEtLjMuMDcsMi41NCwyLjU0LDAsMCwxLS41MiwwQTEuNDIsMS40MiwwLDAsMSw1LDE3LjI1LDEuMTgsMS4xOCwwLDAsMSw0LjU4LDE3YTEsMSwwLDAsMS0uMjMtLjM4LDEuNDYsMS40NiwwLDAsMS0uMDktLjUyLDEuMzgsMS4zOCwwLDAsMSwuMDktLjUyLDEuMjEsMS4yMSwwLDAsMSwuMjYtLjM5QTEuMTgsMS4xOCwwLDAsMSw1LDE1YTEuMzksMS4zOSwwLDAsMSwuNDYtLjA4bC4zLDBMNiwxNWwuMTYuMDYuMDkuMDUtLjE1LjQyLS4yNS0uMUExLjU1LDEuNTUsMCwwLDAsNS41MSwxNS4zNFonXG5cdC8+XG5cdDxwYXRoIGQ9J004LjMxLDE2Ljgzdi40NUg2Ljc0VjE0LjkzaC41M3YxLjlaJy8+XG5cdDxwYXRoIGQ9J004LjY1LDE0LjkzaC41M3YyLjM1SDguNjVaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTExLjMsMTcuMjhjLS4xNS0uMjctLjMyLS41My0uNDktLjc5YTguNjksOC42OSwwLDAsMC0uNTctLjc1djEuNTRIOS43MlYxNC45M2guNDNsLjI1LjI4LjI4LjM1LjI4LjM4Yy4wOS4xMy4xNy4yNi4yNi4zOFYxNC45M2guNTJ2Mi4zNVonXG5cdC8+XG5cdDxwYXRoIGQ9J00xMi4yOCwxNy4yOFYxNC45M2gxLjU5di40NUgxMi44MXYuNDZoLjk0di40M2gtLjk0di41N0gxNHYuNDRaJy8+XG4gIDwvc3ZnPixcbiAgbG9nb1RpdGxlOiA8c3ZnXG5cdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzUxLjgzJ1xuXHRoZWlnaHQ9JzE3LjI5JyB2aWV3Qm94PScwIDAgNTEuODMgMTcuMjknXG4gID5cblx0PHBhdGhcblx0ICBkPSdNMTQuNzYsMTQuNzZBOC42MSw4LjYxLDAsMCwxLDEyLDE2LjZhOC40Miw4LjQyLDAsMCwxLTMuMzYuNjksOC42Niw4LjY2LDAsMCwxLTIuNzItLjQ0LDguMTQsOC4xNCwwLDAsMS0yLjM4LTEuMjMsOS43NCw5Ljc0LDAsMCwxLTEuODctMS44N0E4LjI3LDguMjcsMCwwLDEsLjQ0LDExLjM3LDguNjcsOC42NywwLDAsMSwwLDguNjQsOC41NCw4LjU0LDAsMCwxLC42OCw1LjI5LDguNzIsOC43MiwwLDAsMSwyLjUyLDIuNTMsOC44OCw4Ljg4LDAsMCwxLDUuMjkuNjksOC41LDguNSwwLDAsMSwxMiwuNjlhOSw5LDAsMCwxLDIuNzYsMS44NEE4LjcyLDguNzIsMCwwLDEsMTYuNiw1LjI5YTguNSw4LjUsMCwwLDEsMCw2LjcxQTguNzIsOC43MiwwLDAsMSwxNC43NiwxNC43NlpNMS41OCw1LjU0QTcuNjYsNy42NiwwLDAsMCwxLDguNjQsNy42OCw3LjY4LDAsMCwwLDIuMTQsMTIuOGE3LjUxLDcuNTEsMCwwLDAsMy4xMywyLjg0Wk04LjI5LDguMjUsNy4yLDUuM2wtLjc5LS4wN2MtLjE0LDAtLjI0LS4xLS4yOC0uMjhhLjg0Ljg0LDAsMCwxLDAtLjUyYy4wNy0uMTguMTctLjI2LjMxLS4yNmwuMzMsMCwuODQsMCwuODQsMGMuNTQsMCwxLjIzLDAsMi4wNi0uMTFhLjMxLjMxLDAsMCwxLC4zLjI1LjkyLjkyLDAsMCwxLDAsLjUyYzAsLjE4LS4xNC4yOC0uMjguMjlsLS4wNywwYS44NS44NSwwLDAsMS0uMjUuMDcsMi4zLDIuMywwLDAsMS0uMzksMGwyLjYyLDcuMjMuMy0uNzlhMTksMTksMCwwLDAsLjYxLTEuODgsNi43Myw2LjczLDAsMCwwLC4zLTEuNjUsNC4zNiw0LjM2LDAsMCwwLS40Ny0yLjEzLDIuMzgsMi4zOCwwLDAsMS0uMTktLjNsLS4yLS4zMnMtLjA3LS4xNC0uMTQtLjI3QTEuODIsMS44MiwwLDAsMSwxMi41Niw1YTIuODMsMi44MywwLDAsMS0uMDctLjI4LDEuMjIsMS4yMiwwLDAsMSwwLS4zMiwxLjMsMS4zLDAsMCwxLC40Ni0xLjA4LDEuMjMsMS4yMywwLDAsMSwxLS4yOUE3Ljc0LDcuNzQsMCwwLDAsOC42NCwxLDcuNjUsNy42NSwwLDAsMCwyLjE5LDQuNDNoLjVjLjUzLDAsMS4yMSwwLDIuMDUtLjA5YS4yOS4yOSwwLDAsMSwuMy4yMi43NS43NSwwLDAsMSwwLC40Ny4zNC4zNCwwLDAsMS0uMjguMjdsLTEsLjA3LDMsNy45MVpNNy42NCwxMy4yYy0uNDksMS40Mi0uODEsMi4zNi0xLDIuODRhNi43LDYuNywwLDAsMCwyLC4yOUE3LjI4LDcuMjgsMCwwLDAsMTEsMTUuOTRsLTIuMjMtNkM4LjUsMTAuNjgsOC4xMiwxMS43Nyw3LjY0LDEzLjJabTQuODksMi4xN2E3LjQsNy40LDAsMCwwLDIuNzctMi44MSw3LjcxLDcuNzEsMCwwLDAsMS0zLjkyQTcuNTEsNy41MSwwLDAsMCwxNS40Miw1LDksOSwwLDAsMSwxNS41LDYuMWMwLC4zNiwwLC42NSwwLC44OGE0LjE3LDQuMTcsMCwwLDEtLjEzLjczYy0uMDYuMjctLjExLjQ0LS4xNC41M2wtLjE1LjRRMTQuNjYsOS42NiwxMi41MywxNS4zN1onXG5cdC8+XG5cdDxwYXRoIGQ9J00yNi44Mi45MXYxLjZoLTIuNVY5LjIzSDIyLjQ0VjIuNTFoLTIuNVYuOTFaJy8+XG5cdDxwYXRoIGQ9J00yOCwuOTFIMjkuOVY5LjIzSDI4WicvPlxuXHQ8cGF0aCBkPSdNMzgsLjkxdjEuNmgtMi41VjkuMjNIMzMuNlYyLjUxSDMxLjFWLjkxWicvPlxuXHQ8cGF0aCBkPSdNNDQuNzQsNy42MlY5LjIzSDM5LjE4Vi45MWgxLjg4VjcuNjJaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTQ1Ljk0LDkuMjNWLjkxaDUuNjJWMi40OEg0Ny44MVY0LjEyaDMuMzNWNS42NUg0Ny44MXYyaDRWOS4yM1onXG5cdC8+XG5cdDxwYXRoIGQ9J00yNC4yOCwxMC45M3YxSDIyLjY3djQuMzNIMjEuNDZWMTJIMTkuODV2LTFaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTI4LDE2LjI4Yy0uMDYtLjE5LS4xMi0uMzgtLjE5LS41OGwtLjIxLS41OEgyNS41MmMtLjA2LjE5LS4xMy4zOS0uMi41OXMtLjEzLjM4LS4xOS41N0gyMy44OGMuMi0uNTguMzktMS4xMS41Ny0xLjZzLjM2LS45NS41My0xLjM4LjM1LS44NS41Mi0xLjIzLjM0LS43Ny41Mi0xLjE0aDEuMTRjLjE3LjM3LjM1Ljc1LjUyLDEuMTRzLjM0Ljc5LjUyLDEuMjMuMzQuODkuNTMsMS4zOC4zNywxLC41NywxLjZabS0xLjQ1LTQuMTRjMCwuMDgtLjA2LjE4LS4xMS4zMmE0LjQ1LDQuNDUsMCwwLDAtLjE4LjQ2Yy0uMDcuMTctLjE0LjM3LS4yMi41OHMtLjE3LjQzLS4yNS42NmgxLjUzcS0uMTItLjM1LS4yNC0uNjZjLS4wOC0uMjItLjE1LS40MS0uMjItLjU4bC0uMTgtLjQ3QTIuNjUsMi42NSwwLDAsMCwyNi41NiwxMi4xNFonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTMyLjQsMTEuODVhMS40NiwxLjQ2LDAsMCwwLTEuMjEuNDcsMiwyLDAsMCwwLS4zOCwxLjI4LDIuMjYsMi4yNiwwLDAsMCwuMS43MSwxLjQ5LDEuNDksMCwwLDAsLjI3LjU1LDEuMTksMS4xOSwwLDAsMCwuNDcuMzYsMS40NSwxLjQ1LDAsMCwwLC42NS4xM2guMzRhMSwxLDAsMCwwLC4yNSwwVjEzLjQ1aDEuMlYxNi4xYTMuNjEsMy42MSwwLDAsMS0uNjkuMTgsNi40MSw2LjQxLDAsMCwxLTEuMTguMSwzLjExLDMuMTEsMCwwLDEtMS4wOS0uMTksMi4xNywyLjE3LDAsMCwxLS44NC0uNTQsMi41NiwyLjU2LDAsMCwxLS41NC0uODcsMy42LDMuNiwwLDAsMS0uMTktMS4xOCwzLjEyLDMuMTIsMCwwLDEsLjIxLTEuMTksMi41NywyLjU3LDAsMCwxLC41Ny0uODhBMi4zMywyLjMzLDAsMCwxLDMxLjIsMTFhMi43NSwyLjc1LDAsMCwxLDEtLjE5LDQuNjEsNC42MSwwLDAsMSwuNjgsMGwuNTMuMTJhMi4zNywyLjM3LDAsMCwxLC4zNi4xM2wuMjEuMTEtLjM1LDFBMi43MSwyLjcxLDAsMCwwLDMzLjEsMTIsMi41MiwyLjUyLDAsMCwwLDMyLjQsMTEuODVaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMzguNzksMTUuMjR2MUgzNS4yMVYxMC45M2gxLjIxdjQuMzFaJy8+XG5cdDxwYXRoIGQ9J00zOS41NiwxMC45M2gxLjJ2NS4zNWgtMS4yWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J000NS41OSwxNi4yOGMtLjM1LS42Mi0uNzItMS4yMi0xLjEyLTEuODJhMTkuNywxOS43LDAsMCwwLTEuMjgtMS42OXYzLjUxSDQyVjEwLjkzaDFhNy4zOSw3LjM5LDAsMCwxLC41Ni42MmMuMjEuMjUuNDIuNTEuNjMuNzlzLjQzLjU3LjY0Ljg4bC41OS44NlYxMC45M2gxLjJ2NS4zNVonXG5cdC8+XG5cdDxwYXRoIGQ9J000Ny44MywxNi4yOFYxMC45M2gzLjYydjFINDlWMTNoMi4xNHYxSDQ5djEuMjloMi41OXYxWicvPlxuICA8L3N2Zz4sXG4gIHRpdGxlTG9nbzogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MS42NSdcblx0aGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDUxLjY1IDE3LjI5J1xuICA+XG5cdDxwYXRoXG5cdCAgZD0nTTQ5LjEyLDE0Ljc2YTguNjksOC42OSwwLDAsMS0yLjc2LDEuODUsOC41Nyw4LjU3LDAsMCwxLTMuMzUuNjgsOC42Nyw4LjY3LDAsMCwxLTIuNzMtLjQ0LDguMjcsOC4yNywwLDAsMS0yLjM4LTEuMjNBOS43NCw5Ljc0LDAsMCwxLDM2LDEzLjc1YTguMjcsOC4yNywwLDAsMS0xLjIzLTIuMzgsOC42Nyw4LjY3LDAsMCwxLS40NC0yLjczLDguNjksOC42OSwwLDAsMSwyLjUzLTYuMTFBOC43Miw4LjcyLDAsMCwxLDM5LjY1LjY5YTguNSw4LjUsMCwwLDEsNi43MSwwLDguODMsOC44MywwLDAsMSwyLjc2LDEuODRBOC43Miw4LjcyLDAsMCwxLDUxLDUuMjksOC41LDguNSwwLDAsMSw1MSwxMiw4LjcyLDguNzIsMCwwLDEsNDkuMTIsMTQuNzZaTTM1Ljk0LDUuNTRhNy42Niw3LjY2LDAsMCwwLS42MiwzLjFBNy42OCw3LjY4LDAsMCwwLDM2LjUsMTIuOGE3LjUxLDcuNTEsMCwwLDAsMy4xMywyLjg0Wm02LjcxLDIuNzFMNDEuNTYsNS4zbC0uNzktLjA3Yy0uMTQsMC0uMjMtLjEtLjI4LS4yOGEuNzcuNzcsMCwwLDEsMC0uNTJjLjA2LS4xOC4xNi0uMjYuMy0uMjZsLjM0LDAsLjgzLDAsLjg0LDBjLjU0LDAsMS4yMywwLDIuMDYtLjExYS4zMS4zMSwwLDAsMSwuMy4yNS44NC44NCwwLDAsMSwwLC41MmMwLC4xOC0uMTQuMjgtLjI4LjI5bC0uMDcsMGEuNzcuNzcsMCwwLDEtLjI1LjA3LDIuMywyLjMsMCwwLDEtLjM5LDBsMi42Miw3LjIzLjMtLjc5YTE5LDE5LDAsMCwwLC42MS0xLjg4LDYuNzMsNi43MywwLDAsMCwuMy0xLjY1LDQuMzYsNC4zNiwwLDAsMC0uNDctMi4xMywyLjM4LDIuMzgsMCwwLDEtLjE5LS4zbC0uMTktLjMycy0uMDgtLjE0LS4xNS0uMjdBMS44MiwxLjgyLDAsMCwxLDQ2LjkyLDVhMi44MywyLjgzLDAsMCwxLS4wNy0uMjgsMS4yMiwxLjIyLDAsMCwxLDAtLjMyLDEuMywxLjMsMCwwLDEsLjQ2LTEuMDgsMS4yNCwxLjI0LDAsMCwxLDEtLjI5LDcuODYsNy44NiwwLDAsMC0yLjQtMS40OUE3LjczLDcuNzMsMCwwLDAsNDMsMWE3LjY1LDcuNjUsMCwwLDAtNi40NiwzLjQ3aC41Yy41MywwLDEuMjEsMCwyLjA1LS4wOWEuMjkuMjksMCwwLDEsLjMuMjIuNzUuNzUsMCwwLDEsMCwuNDcuMzQuMzQsMCwwLDEtLjI4LjI3bC0xLC4wNywzLDcuOTFaTTQyLDEzLjJjLS40OSwxLjQyLS44MSwyLjM3LTEsMi44NGE2LjcyLDYuNzIsMCwwLDAsMiwuMjksNy4yNyw3LjI3LDAsMCwwLDIuMzQtLjM5bC0yLjIzLTZabTQuODksMi4xN2E3LjMzLDcuMzMsMCwwLDAsMi43Ny0yLjgxLDcuNzEsNy43MSwwLDAsMCwxLTMuOTJBNy41MSw3LjUxLDAsMCwwLDQ5Ljc4LDVhOSw5LDAsMCwxLC4wOCwxLjEzYzAsLjM2LDAsLjY1LDAsLjg4YTQuMTcsNC4xNywwLDAsMS0uMTMuNzNjLS4wNi4yNy0uMTEuNDQtLjE0LjUzbC0uMTUuNFE0OSw5LjY2LDQ2Ljg5LDE1LjM3Widcblx0Lz5cblx0PHBhdGggZD0nTTcsLjkxdjEuNkg0LjQ3VjkuMjNIMi41OVYyLjUxSC4wOVYuOTFaJy8+XG5cdDxwYXRoIGQ9J004LjE3LjkxaDEuODhWOS4yM0g4LjE3WicvPlxuXHQ8cGF0aCBkPSdNMTguMTMuOTF2MS42aC0yLjVWOS4yM0gxMy43NVYyLjUxaC0yLjVWLjkxWicvPlxuXHQ8cGF0aCBkPSdNMjQuODksNy42MlY5LjIzSDE5LjMzVi45MWgxLjg4VjcuNjJaJy8+XG5cdDxwYXRoIGQ9J00yNi4wOSw5LjIzVi45MWg1LjYyVjIuNDhIMjhWNC4xMmgzLjMzVjUuNjVIMjh2Mmg0VjkuMjNaJy8+XG5cdDxwYXRoIGQ9J000LjQzLDEwLjkzdjFIMi44MnY0LjMzSDEuNjFWMTJIMHYtMVonLz5cblx0PHBhdGhcblx0ICBkPSdNOC4xNiwxNi4yOEM4LjEsMTYuMDksOCwxNS45LDgsMTUuN2wtLjIxLS41OEg1LjY3Yy0uMDYuMTktLjEzLjM5LS4yLjU5cy0uMTMuMzgtLjE5LjU3SDRjLjItLjU4LjM5LTEuMTEuNTctMS42cy4zNi0uOTUuNTMtMS4zOGwuNTEtMS4yM2MuMTctLjM5LjM1LS43Ny41My0xLjE0SDcuMzFjLjE3LjM3LjM1Ljc1LjUyLDEuMTRzLjM0Ljc5LjUxLDEuMjMuMzUuODkuNTQsMS4zOC4zNywxLC41NywxLjZaTTYuNzEsMTIuMTRhMi4zMiwyLjMyLDAsMCwxLS4xMi4zMmMwLC4xMy0uMTEuMjgtLjE3LjQ2cy0uMTQuMzctLjIyLjU4LS4xNy40My0uMjUuNjZINy40OGwtLjI0LS42NmMtLjA4LS4yMi0uMTUtLjQxLS4yMi0uNThsLS4xOC0uNDdBMi42NSwyLjY1LDAsMCwwLDYuNzEsMTIuMTRaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J00xMi41NSwxMS44NWExLjQ2LDEuNDYsMCwwLDAtMS4yMS40N0EyLDIsMCwwLDAsMTEsMTMuNmEyLjI2LDIuMjYsMCwwLDAsLjEuNzEsMS40OSwxLjQ5LDAsMCwwLC4yNy41NSwxLjE5LDEuMTksMCwwLDAsLjQ3LjM2LDEuNDUsMS40NSwwLDAsMCwuNjUuMTNoLjM0YTEsMSwwLDAsMCwuMjUsMFYxMy40NWgxLjJWMTYuMWEzLjYxLDMuNjEsMCwwLDEtLjY5LjE4LDYuNDEsNi40MSwwLDAsMS0xLjE4LjEsMy4xMSwzLjExLDAsMCwxLTEuMDktLjE5LDIuMTcsMi4xNywwLDAsMS0uODQtLjU0LDIuNTYsMi41NiwwLDAsMS0uNTQtLjg3LDMuNiwzLjYsMCwwLDEtLjE5LTEuMTgsMy4xMiwzLjEyLDAsMCwxLC4yMS0xLjE5LDIuNTcsMi41NywwLDAsMSwuNTctLjg4LDIuMzcsMi4zNywwLDAsMSwuODUtLjU0LDIuODQsMi44NCwwLDAsMSwxLjA1LS4xOSw0LjYxLDQuNjEsMCwwLDEsLjY4LDBsLjUzLjEyYTIuMzcsMi4zNywwLDAsMSwuMzYuMTNsLjIxLjExLS4zNSwxYTMsMywwLDAsMC0uNTctLjIzQTIuNTcsMi41NywwLDAsMCwxMi41NSwxMS44NVonXG5cdC8+XG5cdDxwYXRoIGQ9J00xOC45NCwxNS4yNHYxSDE1LjM2VjEwLjkzaDEuMjF2NC4zMVonLz5cblx0PHBhdGggZD0nTTE5LjcxLDEwLjkzaDEuMnY1LjM1aC0xLjJaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTI1Ljc0LDE2LjI4Yy0uMzUtLjYyLS43Mi0xLjIyLTEuMTItMS44MmExOS43LDE5LjcsMCwwLDAtMS4yOC0xLjY5djMuNTFIMjIuMTVWMTAuOTNoMWE3LjM5LDcuMzksMCwwLDEsLjU2LjYyYy4yMS4yNS40Mi41MS42My43OXMuNDMuNTcuNjQuODhsLjU5Ljg2VjEwLjkzaDEuMnY1LjM1Widcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMjgsMTYuMjhWMTAuOTNIMzEuNnYxSDI5LjE5VjEzaDIuMTR2MUgyOS4xOXYxLjI5aDIuNTl2MVonXG5cdC8+XG4gIDwvc3ZnPixcbiAgcHg6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuXHQ8Zz5cblx0ICA8cGF0aFxuXHRcdGQ9J00xMCwxMC43MWE1LjMyLDUuMzIsMCwwLDEtLjIsMS40OSwzLjUzLDMuNTMsMCwwLDEtLjU5LDEuMTYsMi42NywyLjY3LDAsMCwxLTEsLjc1LDMuMSwzLjEsMCwwLDEtMS4zMy4yNywzLjg5LDMuODksMCwwLDEtLjc4LS4wOCw0LDQsMCwwLDEtLjY5LS4yM3YyLjY2aC0yVjcuNDJsLjYyLS4xNS43My0uMTMuNzgtLjA5Ljc2LDBhNC40OCw0LjQ4LDAsMCwxLDEuNTYuMjZBMy4yNiwzLjI2LDAsMCwxLDksOGEzLDMsMCwwLDEsLjcyLDEuMTZBNC4zOSw0LjM5LDAsMCwxLDEwLDEwLjcxWm0tMiwuMDZhMi40MiwyLjQyLDAsMCwwLS40Mi0xLjQ5LDEuNDQsMS40NCwwLDAsMC0xLjIzLS41NmwtLjUsMC0uMzcsMFYxMi40YTEuNTEsMS41MSwwLDAsMCwuNDkuMiwyLjEsMi4xLDAsMCwwLC42MS4wOUM3LjQ4LDEyLjY5LDgsMTIuMDUsOCwxMC43N1onXG5cdCAgLz5cblx0ICA8cGF0aFxuXHRcdGQ9J00xNC4xLDkuMTZsMS40MS0yaDIuMDZsLTIuNDUsMy40M2EyMi40OCwyMi40OCwwLDAsMSwxLjUsMS45M2MuNDMuNjQuNzgsMS4yLDEuMDUsMS43SDE1LjUybC0uMjctLjUtLjM2LS42M2EzLjg4LDMuODgsMCwwLDAtLjQyLS41NkwxNCwxMi4xM2wtLjQyLjM5YTIuNDMsMi40MywwLDAsMC0uMzkuNTJjLS4xMy4yMS0uMjUuNDItLjM3LjYzcy0uMjMuMzktLjMzLjU3aC0yYy4xMS0uMjIuMjYtLjQ4LjQ0LS43OXMuMzktLjYyLjYxLS45NS40Ni0uNjQuNzEtLjk1LjUxLS41OS43Ni0uODZjLS40NC0uNjMtLjg2LTEuMjMtMS4yNy0xLjhsLTEuMi0xLjcxaDIuMTZaJ1xuXHQgIC8+XG5cdDwvZz5cbiAgPC9zdmc+LFxuICBlbTogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+XG5cdDxnPlxuXHQgIDxwYXRoXG5cdFx0ZD0nTS45LDEwLjcyYTQuMTgsNC4xOCwwLDAsMSwuMjktMS42NEEzLjYyLDMuNjIsMCwwLDEsMS45NCw3LjksMy4yNiwzLjI2LDAsMCwxLDMsNy4xOSwzLjM1LDMuMzUsMCwwLDEsNC4yOCw3YTMuMTQsMy4xNCwwLDAsMSwyLjM4LjkyLDMuNzgsMy43OCwwLDAsMSwuODcsMi43YzAsLjEyLDAsLjI1LDAsLjM5czAsLjI2LDAsLjM3SDNhMS4zNywxLjM3LDAsMCwwLC41OCwxLDIuMzQsMi4zNCwwLDAsMCwxLjM3LjM2QTYuMzgsNi4zOCwwLDAsMCw2LDEyLjU3YTQuMzgsNC4zOCwwLDAsMCwuODctLjI1bC4yNiwxLjYyYTIuMzksMi4zOSwwLDAsMS0uNDMuMTdjLS4xOC4wNS0uMzcuMS0uNTkuMTRsLS43MS4xYy0uMjUsMC0uNSwwLS43NSwwQTQuNjEsNC42MSwwLDAsMSwzLDE0LjExYTMuMjUsMy4yNSwwLDAsMS0xLjE3LS43OCwzLDMsMCwwLDEtLjY4LTEuMTZBNC41NCw0LjU0LDAsMCwxLC45LDEwLjcyWk01LjYsMTBhMi4xLDIuMSwwLDAsMC0uMDktLjVBMS4zNywxLjM3LDAsMCwwLDUuMjgsOWExLjIyLDEuMjIsMCwwLDAtLjM5LS4zMSwxLjI4LDEuMjgsMCwwLDAtLjU4LS4xMiwxLjQzLDEuNDMsMCwwLDAtLjU4LjExLDEuMTMsMS4xMywwLDAsMC0uNC4zMSwxLjMxLDEuMzEsMCwwLDAtLjI1LjQzQTMuMTgsMy4xOCwwLDAsMCwzLDEwWidcblx0ICAvPlxuXHQgIDxwYXRoXG5cdFx0ZD0nTTEzLDEwLjQ1YTIuODQsMi44NCwwLDAsMC0uMjUtMS4zNywxLDEsMCwwLDAtLjg2LS40bC0uMzksMC0uMzguMDVWMTQuMmgtMlY3LjM4Yy4xNywwLC4zNy0uMDkuNi0uMTRsLjczLS4xNHEuMzgtLjA2Ljc4LS4wOUwxMiw3YTMuMzUsMy4zNSwwLDAsMSwxLjI1LjE5LDMsMywwLDAsMSwuNzguNDYsMy43OSwzLjc5LDAsMCwxLDEtLjQ4QTMuMzEsMy4zMSwwLDAsMSwxNiw3YTMuNTEsMy41MSwwLDAsMSwxLjM5LjIzLDIuMDcsMi4wNywwLDAsMSwuODYuNjcsMi4zNywyLjM3LDAsMCwxLC40NCwxLDUuODcsNS44NywwLDAsMSwuMTMsMS4zMXY0aC0yVjEwLjQ1YTIuODYsMi44NiwwLDAsMC0uMjQtMS4zNywxLDEsMCwwLDAtLjg2LS40LDIuMTMsMi4xMywwLDAsMC0uNDUuMDgsMS44OSwxLjg5LDAsMCwwLS40Ny4yLDMuNTUsMy41NSwwLDAsMSwuMTIuNjVjMCwuMjMsMCwuNDgsMCwuNzRWMTQuMkgxM1onXG5cdCAgLz5cblx0PC9nPlxuICA8L3N2Zz4sXG4gIHBlcmNlbnQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuXHQ8Zz5cblx0ICA8cGF0aFxuXHRcdGQ9J005LjEsNy43YzAsMC44LTAuMiwxLjUtMC42LDEuOXMtMSwwLjctMS43LDAuN1M1LjQsMTAuMSw1LDkuN1M0LjMsOC42LDQuMyw3LjdTNC41LDYuMyw1LDUuOHMxLTAuNywxLjctMC43ICAgICBTOCw1LjQsOC40LDUuOFM5LjEsNi45LDkuMSw3Ljd6IE03LjUsNy43YzAtMC41LTAuMS0wLjgtMC4yLTFDNy4xLDYuNSw2LjksNi40LDYuNyw2LjRjLTAuMywwLTAuNSwwLjEtMC42LDAuM3MtMC4yLDAuNS0wLjIsMSAgICAgczAuMSwwLjgsMC4yLDFDNi4yLDksNi40LDkuMSw2LjcsOS4xYzAuMiwwLDAuNS0wLjEsMC42LTAuM0M3LjUsOC41LDcuNSw4LjIsNy41LDcuN3ogTTExLjcsNS40aDEuOWwtNS4yLDkuM0g2LjRMMTEuNyw1LjR6ICAgICAgTTE1LjcsMTIuM2MwLDAuOC0wLjIsMS41LTAuNiwxLjljLTAuNCwwLjQtMSwwLjctMS43LDAuN3MtMS4zLTAuMi0xLjctMC43cy0wLjYtMS4xLTAuNi0xLjljMC0wLjgsMC4yLTEuNSwwLjYtMS45ICAgICBjMC40LTAuNCwxLTAuNywxLjctMC43czEuMywwLjIsMS43LDAuN0MxNS41LDEwLjgsMTUuNywxMS40LDE1LjcsMTIuM3ogTTE0LjIsMTIuM2MwLTAuNS0wLjEtMC44LTAuMi0xICAgICBjLTAuMi0wLjItMC40LTAuMy0wLjYtMC4zYy0wLjMsMC0wLjUsMC4xLTAuNiwwLjNjLTAuMiwwLjItMC4yLDAuNS0wLjIsMXMwLjEsMC44LDAuMiwxczAuNCwwLjMsMC42LDAuM2MwLjIsMCwwLjUtMC4xLDAuNi0wLjMgICAgIEMxNC4xLDEzLDE0LjIsMTIuNywxNC4yLDEyLjN6J1xuXHQgIC8+XG5cdDwvZz5cbiAgPC9zdmc+LFxuICBidXR0b25GaWxsOiA8c3ZnXG5cdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyLjU4IDExLjAxJ1xuXHRjbGFzc05hbWU9J2J1dHRvbi1maWxsZWQtc3ZnJ1xuICA+XG5cdDxyZWN0IHdpZHRoPSczMi41OCcgaGVpZ2h0PScxMS4wMScgcng9JzEnLz5cblx0PHBhdGggZD0nTTUsNy45M1YzLjA3SDguMjJWNEg2LjA2VjVIOHYuOTFINi4wNnYyWicvPlxuXHQ8cGF0aCBkPSdNOSwzLjA3aDEuMDlWNy45M0g5WicvPlxuXHQ8cGF0aCBkPSdNMTQuNDUsN3YuOTRIMTEuMjFWMy4wN0gxMi4zVjdaJy8+XG5cdDxwYXRoIGQ9J00xOC40LDd2Ljk0SDE1LjE2VjMuMDdoMS4wOVY3WicvPlxuXHQ8cGF0aCBkPSdNMTkuMTEsNy45M1YzLjA3aDMuMjhWNEgyMC4ydjFoMS45NHYuOUgyMC4yVjdoMi4zNXYuOTJaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTI3LjYyLDUuNWEyLjg4LDIuODgsMCwwLDEtLjIsMS4xLDIuMTEsMi4xMSwwLDAsMS0uNTYuNzgsMi4zOCwyLjM4LDAsMCwxLS44OC40NkE0LjEzLDQuMTMsMCwwLDEsMjQuODIsOGMtLjIsMC0uNDMsMC0uNjksMGE2LjQ4LDYuNDgsMCwwLDEtLjc3LS4xVjMuMTNBNi4zNSw2LjM1LDAsMCwxLDI0LjE1LDNsLjcsMEE0LjQ1LDQuNDUsMCwwLDEsMjYsMy4xNWEyLjMyLDIuMzIsMCwwLDEsLjg3LjQ1LDEuOTIsMS45MiwwLDAsMSwuNTYuNzdBMi45MywyLjkzLDAsMCwxLDI3LjYyLDUuNVpNMjQuNDUsN2guNDJhMS41OSwxLjU5LDAsMCwwLDEuMjItLjQxLDEuNjEsMS42MSwwLDAsMCwuNC0xLjE0LDEuNjIsMS42MiwwLDAsMC0uMzgtMS4xNkExLjYsMS42LDAsMCwwLDI0LjkxLDRoLS4yM2wtLjIzLDBaJ1xuXHQvPlxuICA8L3N2Zz4sXG4gIGJ1dHRvbk91dGxpbmU6IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHR2aWV3Qm94PScwIDAgMzkuMDEgMTIuMDEnXG5cdGNsYXNzTmFtZT0nYnV0dG9uLW91dGxpbmUtc3ZnJ1xuICA+XG5cdDxyZWN0XG5cdCAgY2xhc3NOYW1lPSdhJyB4PScwLjUnIHk9JzAuNScgd2lkdGg9JzM4LjAxJyBoZWlnaHQ9JzExLjAxJ1xuXHQgIHJ4PScxLjA4J1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J005LjM4LDZBMi44MywyLjgzLDAsMCwxLDkuMTksNy4xYTIuMTIsMi4xMiwwLDAsMS0uNTEuOCwyLjE0LDIuMTQsMCwwLDEtLjc2LjQ4LDIuNzYsMi43NiwwLDAsMS0xLC4xNkEyLjY1LDIuNjUsMCwwLDEsNiw4LjM4YTIuMTgsMi4xOCwwLDAsMS0uNzctLjQ4LDIuMTQsMi4xNCwwLDAsMS0uNTItLjhBMi44MywyLjgzLDAsMCwxLDQuNTQsNmEyLjg4LDIuODgsMCwwLDEsLjE5LTEuMSwyLjU0LDIuNTQsMCwwLDEsLjUzLS44QTIuMzIsMi4zMiwwLDAsMSw2LDMuNjMsMi41OCwyLjU4LDAsMCwxLDcsMy40N2EyLjY5LDIuNjksMCwwLDEsLjk0LjE2LDIuMjcsMi4yNywwLDAsMSwuNzcuNDgsMi4zNiwyLjM2LDAsMCwxLC41Mi44QTIuODgsMi44OCwwLDAsMSw5LjM4LDZaTTUuNjcsNmEyLjExLDIuMTEsMCwwLDAsLjA5LjY0LDEuMzgsMS4zOCwwLDAsMCwuMjUuNSwxLjEzLDEuMTMsMCwwLDAsLjQuMzJBMS4zNSwxLjM1LDAsMCwwLDcsNy41OGExLjMzLDEuMzMsMCwwLDAsLjU0LS4xMSwxLjE3LDEuMTcsMCwwLDAsLjQxLS4zMiwxLjU2LDEuNTYsMCwwLDAsLjI1LS41QTIuMTEsMi4xMSwwLDAsMCw4LjI1LDZhMi4xNywyLjE3LDAsMCwwLS4wOS0uNjUsMS40NywxLjQ3LDAsMCwwLS4yNS0uNSwxLjE3LDEuMTcsMCwwLDAtLjQxLS4zMkExLjMzLDEuMzMsMCwwLDAsNyw0LjQzYTEuMzUsMS4zNSwwLDAsMC0uNTUuMTEsMS4xNiwxLjE2LDAsMCwwLS40LjMzLDEuMzEsMS4zMSwwLDAsMC0uMjUuNUEyLjExLDIuMTEsMCwwLDAsNS42Nyw2Widcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMTIuMTksOC41NGEyLjU4LDIuNTgsMCwwLDEtLjg4LS4xNCwxLjc5LDEuNzksMCwwLDEtLjYyLS40LDEuNTUsMS41NSwwLDAsMS0uMzUtLjYxLDIuNDcsMi40NywwLDAsMS0uMTItLjc5di0zaDEuMVY2LjUxYTEuNzUsMS43NSwwLDAsMCwuMDYuNSwxLjIsMS4yLDAsMCwwLC4xOC4zNC43My43MywwLDAsMCwuMjguMTksMS40NCwxLjQ0LDAsMCwwLC4zNywwLC45Mi45MiwwLDAsMCwuNjUtLjI0LDEuMTksMS4xOSwwLDAsMCwuMjQtLjg0VjMuNThoMS4xdjNhMi40NywyLjQ3LDAsMCwxLS4xMi43OSwxLjYyLDEuNjIsMCwwLDEtLjM2LjYxLDEuNywxLjcsMCwwLDEtLjYzLjRBMi42NiwyLjY2LDAsMCwxLDEyLjE5LDguNTRaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTguODYsMy41OHYuOTNIMTcuMzlWOC40NEgxNi4zVjQuNTFIMTQuODNWMy41OFonLz5cblx0PHBhdGggZD0nTTIyLjgxLDcuNXYuOTRIMTkuNTZWMy41OGgxLjA5VjcuNVonLz5cblx0PHBhdGggZD0nTTIzLjUxLDMuNThIMjQuNlY4LjQ0SDIzLjUxWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yOSw4LjQ0cS0uNDYtLjgyLTEtMS42NWExNi4xNiwxNi4xNiwwLDAsMC0xLjE2LTEuNTNWOC40NEgyNS43M1YzLjU4aC44OXEuMjIuMjIuNTEuNTd0LjU3LjcyYy4yLjI1LjM5LjUyLjU4Ljc5bC41NC43OVYzLjU4aDEuMDlWOC40NFonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTMxLDguNDRWMy41OGgzLjI4VjQuNUgzMi4xM3YxaDEuOTR2LjlIMzIuMTNWNy41MmgyLjM1di45MlonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbWVudVBsYWluOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM0LjAzIDguNDgnPlxuXHQ8cGF0aFxuXHQgIGQ9J00yLjQ1LDBjLjE0LjI2LjMxLjU5LjUsMXMuMzguODEuNTksMS4yNi40LjkxLjYsMS4zOEw0LjcxLDVsLjU3LTEuMzRxLjMtLjcuNi0xLjM4Yy4yMS0uNDUuNC0uODcuNTktMS4yNlM2LjgzLjI2LDcsMEg4LjY4Yy4wOC41NS4xNSwxLjE3LjIyLDEuODVTOSwzLjI1LDkuMDgsNHMuMSwxLjQ4LjE0LDIuMjMuMDgsMS40NC4xMiwyLjFINy41MXEwLTEuMjItLjA5LTIuNjRUNy4yNCwyLjhMNi43NSwzLjkxLDYuMjMsNS4xNGwtLjUsMS4xNy0uNDEsMUg0Yy0uMTEtLjI2LS4yNC0uNTgtLjQxLTFMMy4xMSw1LjE0LDIuNTgsMy45MVEyLjMzLDMuMywyLjEsMi44LDIsNC4yNCwxLjkyLDUuNjhjMCwxLS4wNywxLjgzLS4xLDIuNjRIMEMwLDcuNjYuMDcsNywuMTEsNi4yMkwuMjYsNGMwLS43NC4xMS0xLjQ1LjE4LTIuMTRTLjU4LjU1LjY2LDBaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTEsOC4zMlYwaDUuNjJWMS41N0gxMi44OFYzLjJIMTYuMlY0Ljc0SDEyLjg4djJoNFY4LjMyWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yMy44Niw4LjMycS0uODEtMS40NC0xLjc0LTIuODJhMjgsMjgsMCwwLDAtMi0yLjYzVjguMzJIMTguMjhWMEgxOS44Yy4yNi4yNi41Ni41OS44OCwxcy42NC44LDEsMS4yMy42Ny44OSwxLDEuMzZsLjkzLDEuMzVWMGgxLjg2VjguMzJaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J00zMC42LDguNDhhNC4yNyw0LjI3LDAsMCwxLTEuNTEtLjI0QTIuNzEsMi43MSwwLDAsMSwyOCw3LjU1YTIuNjUsMi42NSwwLDAsMS0uNjEtMSw0LjA1LDQuMDUsMCwwLDEtLjItMS4zNFYwSDI5LjFWNWEzLDMsMCwwLDAsLjExLjg1LDEuNTQsMS41NCwwLDAsMCwuMzIuNTgsMS4xMywxLjEzLDAsMCwwLC40OC4zMiwyLDIsMCwwLDAsLjYxLjA5LDEuNSwxLjUsMCwwLDAsMS4xMS0uNDJBMS45MSwxLjkxLDAsMCwwLDMyLjE2LDVWMEgzNFY1LjE3YTQuNDUsNC40NSwwLDAsMS0uMiwxLjM1LDMsMywwLDAsMS0uNjMsMS4wNSwyLjc5LDIuNzksMCwwLDEtMS4wNi42N0E0LjQ5LDQuNDksMCwwLDEsMzAuNiw4LjQ4Widcblx0Lz5cbiAgPC9zdmc+LFxuICBtZW51RmlsbGVkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQyLjU2IDEzLjAxJz5cblx0PHJlY3Qgd2lkdGg9JzQyLjU2JyBoZWlnaHQ9JzEzLjAxJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTYuNzEsMi4yNmMuMTUuMjcuMzEuNTkuNSwxcy4zOS44MS41OSwxLjI2LjQxLjkyLjYxLDEuMzlMOSw3LjIyYy4xOC0uNDEuMzctLjg2LjU3LTEuMzNzLjQtLjk0LjYxLTEuMzkuNC0uODcuNTktMS4yNi4zNS0uNzEuNS0xaDEuN2MuMDguNTYuMTUsMS4xNy4yMiwxLjg2cy4xMywxLjM5LjE4LDIuMTNsLjE1LDIuMjNjMCwuNzQuMDgsMS40NS4xMSwyLjFIMTEuNzhjMC0uODEtLjA2LTEuNjktLjEtMi42NFMxMS41OCw2LDExLjUsNS4wNmMtLjE0LjM0LS4zLjcxLS40OCwxLjEycy0uMzUuODEtLjUzLDEuMjItLjMzLjgtLjUsMS4xN2wtLjQuOTVIOC4yOGMtLjEyLS4yNi0uMjUtLjU4LS40MS0uOTVzLS4zMy0uNzYtLjUtMS4xN1M3LDYuNTgsNi44NSw2LjE4TDYuMzYsNS4wNnEtLjEyLDEuNDYtLjE4LDIuODh0LS4wOSwyLjY0SDQuMjZjMC0uNjUuMDctMS4zNi4xMi0yLjFTNC40Nyw3LDQuNTIsNi4yNXMuMTEtMS40NS4xOC0yLjEzLjE0LTEuMy4yMi0xLjg2Widcblx0Lz5cblx0PHBhdGggZD0nTTE1LjI3LDEwLjU4VjIuMjZoNS42MVYzLjg0SDE3LjE0VjUuNDdoMy4zMlY3SDE3LjE0VjloNHYxLjU3WicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yOC4xMiwxMC41OHEtLjgxLTEuNDItMS43NC0yLjgyYTI5LjIzLDI5LjIzLDAsMCwwLTItMi42M3Y1LjQ1SDIyLjU0VjIuMjZoMS41MmMuMjcuMjcuNTYuNTkuODgsMXMuNjUuNzksMSwxLjIzLjY2Ljg4LDEsMS4zNS42My45Mi45MiwxLjM1VjIuMjZoMS44NnY4LjMyWidcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMzQuODYsMTAuNzVhNC4wOCw0LjA4LDAsMCwxLTEuNTEtLjI1LDIuODUsMi44NSwwLDAsMS0xLjA1LS42OCwyLjc0LDIuNzQsMCwwLDEtLjYxLTEuMDUsNC4yNyw0LjI3LDAsMCwxLS4yLTEuMzNWMi4yNmgxLjg3djVhMi43LDIuNywwLDAsMCwuMTIuODYsMS40OCwxLjQ4LDAsMCwwLC4zMS41NywxLDEsMCwwLDAsLjQ4LjMyLDEuNzUsMS43NSwwLDAsMCwuNjIuMUExLjUzLDEuNTMsMCwwLDAsMzYsOC43MWEyLDIsMCwwLDAsLjQyLTEuNDN2LTVoMS44N1Y3LjQ0YTQuMSw0LjEsMCwwLDEtLjIsMS4zNCwyLjc2LDIuNzYsMCwwLDEtLjYyLDEuMDUsMi44NSwyLjg1LDAsMCwxLTEuMDcuNjhBNC40NSw0LjQ1LDAsMCwxLDM0Ljg2LDEwLjc1Widcblx0Lz5cblx0PHBhdGhcblx0ICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuXHQgIGQ9J002LjcxLDIuMjZjLjE1LjI3LjMxLjU5LjUsMXMuMzkuODEuNTksMS4yNi40MS45Mi42MSwxLjM5UzguOCw2LjgsOSw3LjIybC41Ny0xLjMzYy4yLS40Ny40LS45NC42MS0xLjM5cy40LS44Ny41OS0xLjI2LjM1LS43MS41LTFoMS43Yy4wOC41Ni4xNSwxLjE3LjIyLDEuODZzLjEzLDEuMzkuMTgsMi4xM2wuMTUsMi4yM2MwLC43NC4wOCwxLjQ0LjExLDIuMUgxMS43OGMwLS44MS0uMDYtMS42OS0uMS0yLjY0UzExLjU4LDYsMTEuNSw1LjA2Yy0uMTQuMzQtLjMuNzEtLjQ4LDEuMTJzLS4zNS44MS0uNTMsMS4yMi0uMzMuOC0uNSwxLjE3bC0uNC45NUg4LjI4Yy0uMTItLjI2LS4yNS0uNTgtLjQxLS45NXMtLjMzLS43Ni0uNS0xLjE3UzcsNi41OCw2Ljg1LDYuMThMNi4zNiw1LjA2cS0uMTIsMS40Ni0uMTgsMi44OHQtLjA5LDIuNjRINC4yNmMwLS42Ni4wNy0xLjM2LjEyLTIuMVM0LjQ3LDcsNC41Miw2LjI1cy4xMS0xLjQ1LjE4LTIuMTMuMTQtMS4zLjIyLTEuODZaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGNsYXNzTmFtZT0nc3ZnLXRleHQnXG5cdCAgZD0nTTE1LjI3LDEwLjU4VjIuMjZoNS42MVYzLjg0SDE3LjE0VjUuNDdoMy4zMlY3SDE3LjE0VjloNHYxLjU3Widcblx0Lz5cblx0PHBhdGhcblx0ICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuXHQgIGQ9J00yOC4xMiwxMC41OHEtLjgxLTEuNDItMS43NC0yLjgyYTI5LjIzLDI5LjIzLDAsMCwwLTItMi42M3Y1LjQ1SDIyLjU0VjIuMjZoMS41MmMuMjcuMjcuNTYuNTkuODgsMXMuNjUuNzksMSwxLjIzLjY2Ljg4LDEsMS4zNS42My45Mi45MiwxLjM1VjIuMjZoMS44NnY4LjMyWidcblx0Lz5cblx0PHBhdGhcblx0ICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuXHQgIGQ9J00zNC44NiwxMC43NWE0LjA4LDQuMDgsMCwwLDEtMS41MS0uMjUsMi44NSwyLjg1LDAsMCwxLTEuMDUtLjY4LDIuNzQsMi43NCwwLDAsMS0uNjEtMS4wNSw0LjMxLDQuMzEsMCwwLDEtLjItMS4zM1YyLjI2aDEuODd2NWEyLjcsMi43LDAsMCwwLC4xMi44NiwxLjQ4LDEuNDgsMCwwLDAsLjMxLjU3LDEsMSwwLDAsMCwuNDguMzIsMS43NSwxLjc1LDAsMCwwLC42Mi4xQTEuNTMsMS41MywwLDAsMCwzNiw4LjcxYTIsMiwwLDAsMCwuNDItMS40M3YtNWgxLjg3VjcuNDRhNC4xNCw0LjE0LDAsMCwxLS4yLDEuMzQsMi43NiwyLjc2LDAsMCwxLS42MiwxLjA1LDIuODUsMi44NSwwLDAsMS0xLjA3LjY4QTQuNDUsNC40NSwwLDAsMSwzNC44NiwxMC43NVonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbWVudVVuZGVybGluZTogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5cdHZpZXdCb3g9JzAgMCAzNC4wMyAxMC43NSdcbiAgPlxuXHQ8cGF0aFxuXHQgIGQ9J00yLjQ1LDBjLjE0LjI2LjMxLjU5LjUsMXMuMzguODEuNTksMS4yNi40LjkxLjYsMS4zOEw0LjcxLDVsLjU3LTEuMzRxLjMtLjcuNi0xLjM4Yy4yMS0uNDUuNC0uODcuNTktMS4yNlM2LjgzLjI2LDcsMEg4LjY4Yy4wOC41NS4xNSwxLjE3LjIyLDEuODVTOSwzLjI1LDkuMDgsNHMuMSwxLjQ4LjE0LDIuMjMuMDgsMS40NC4xMiwyLjFINy41MXEwLTEuMjItLjA5LTIuNjRUNy4yNCwyLjhMNi43NSwzLjkxLDYuMjMsNS4xNGwtLjUsMS4xNy0uNDEsMUg0Yy0uMTEtLjI2LS4yNC0uNTgtLjQxLTFMMy4xMSw1LjE0LDIuNTgsMy45MVEyLjMzLDMuMywyLjEsMi44LDIsNC4yNCwxLjkyLDUuNjhjMCwxLS4wNywxLjgzLS4xLDIuNjRIMEMwLDcuNjYuMDcsNywuMTEsNi4yMkwuMjYsNGMwLS43NC4xMS0xLjQ1LjE4LTIuMTRTLjU4LjU1LjY2LDBaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTEsOC4zMlYwaDUuNjJWMS41N0gxMi44OFYzLjJIMTYuMlY0Ljc0SDEyLjg4djJoNFY4LjMyWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yMy44Niw4LjMycS0uODEtMS40NC0xLjc0LTIuODJhMjgsMjgsMCwwLDAtMi0yLjYzVjguMzJIMTguMjhWMEgxOS44Yy4yNi4yNi41Ni41OS44OCwxcy42NC44LDEsMS4yMy42Ny44OSwxLDEuMzZsLjkzLDEuMzVWMGgxLjg2VjguMzJaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J00zMC42LDguNDhhNC4yNyw0LjI3LDAsMCwxLTEuNTEtLjI0QTIuNzEsMi43MSwwLDAsMSwyOCw3LjU1YTIuNjUsMi42NSwwLDAsMS0uNjEtMSw0LjA1LDQuMDUsMCwwLDEtLjItMS4zNFYwSDI5LjFWNWEzLDMsMCwwLDAsLjExLjg1LDEuNTQsMS41NCwwLDAsMCwuMzIuNTgsMS4xMywxLjEzLDAsMCwwLC40OC4zMiwyLDIsMCwwLDAsLjYxLjA5LDEuNSwxLjUsMCwwLDAsMS4xMS0uNDJBMS45MSwxLjkxLDAsMCwwLDMyLjE2LDVWMEgzNFY1LjE3YTQuNDUsNC40NSwwLDAsMS0uMiwxLjM1LDMsMywwLDAsMS0uNjMsMS4wNSwyLjc5LDIuNzksMCwwLDEtMS4wNi42N0E0LjQ5LDQuNDksMCwwLDEsMzAuNiw4LjQ4Widcblx0Lz5cblx0PHJlY3QgeT0nOS4zMicgd2lkdGg9JzM0LjAzJyBoZWlnaHQ9JzEuNDMnLz5cbiAgPC9zdmc+LFxuICBtZW51T3ZlcmxpbmU6IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHR2aWV3Qm94PScwIDAgMzQuMDMgMTAuOTInXG4gID5cblx0PHBhdGhcblx0ICBkPSdNMi40NSwyLjQzYy4xNC4yNy4zMS41OS41LDFzLjM4LjgxLjU5LDEuMjYuNC45MS42LDEuMzlsLjU3LDEuMzMuNTctMS4zM2MuMi0uNDguNC0uOTQuNi0xLjM5cy40LS44Ny41OS0xLjI2LjM2LS43MS41LTFIOC42OGMuMDguNTYuMTUsMS4xNy4yMiwxLjg2UzksNS42OCw5LjA4LDYuNDJzLjEsMS40OS4xNCwyLjIzLjA4LDEuNDQuMTIsMi4xSDcuNTFxMC0xLjIxLS4wOS0yLjY0VDcuMjQsNS4yM0w2Ljc1LDYuMzVjLS4xNy40LS4zNS44MS0uNTIsMS4yMnMtLjM0LjgtLjUsMS4xN2wtLjQxLjk1SDRjLS4xMS0uMjYtLjI0LS41OC0uNDEtLjk1UzMuMjgsOCwzLjExLDcuNTdzLS4zNS0uODItLjUzLTEuMjItLjMzLS43OC0uNDgtMS4xMlEyLDYuNjksMS45Miw4LjExYzAsMS0uMDcsMS44My0uMSwyLjY0SDBjMC0uNjYuMDctMS4zNi4xMS0yLjFMLjI2LDYuNDJRLjM0LDUuMzEuNDQsNC4yOUMuNTEsMy42LjU4LDMsLjY2LDIuNDNaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTEsMTAuNzVWMi40M2g1LjYyVjRIMTIuODhWNS42NEgxNi4yVjcuMTdIMTIuODh2Mmg0djEuNTdaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTIzLjg2LDEwLjc1cS0uODEtMS40Mi0xLjc0LTIuODJhMjgsMjgsMCwwLDAtMi0yLjYzdjUuNDVIMTguMjhWMi40M0gxOS44Yy4yNi4yNy41Ni41OS44OCwxcy42NC43OSwxLDEuMjMuNjcuODgsMSwxLjM1bC45MywxLjM1VjIuNDNoMS44NnY4LjMyWidcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMzAuNiwxMC45MmE0LjI2LDQuMjYsMCwwLDEtMS41MS0uMjVBMi42OSwyLjY5LDAsMCwxLDI4LDEwYTIuNjIsMi42MiwwLDAsMS0uNjEtMS4wNSw0LDQsMCwwLDEtLjItMS4zM1YyLjQzSDI5LjF2NWEzLDMsMCwwLDAsLjExLjg2LDEuNDksMS40OSwwLDAsMCwuMzIuNTdBMSwxLDAsMCwwLDMwLDkuMmExLjcsMS43LDAsMCwwLC42MS4xLDEuNSwxLjUsMCwwLDAsMS4xMS0uNDIsMS45NCwxLjk0LDAsMCwwLC40My0xLjQzdi01SDM0VjcuNjFBNC40Myw0LjQzLDAsMCwxLDMzLjgzLDlhMi43MiwyLjcyLDAsMCwxLTEuNjksMS43M0E0LjQ5LDQuNDksMCwwLDEsMzAuNiwxMC45MlonXG5cdC8+XG5cdDxyZWN0IHdpZHRoPSczNC4wMycgaGVpZ2h0PScxLjQzJy8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlcnNTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNOTYgMjI0YzM1LjMgMCA2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0LTY0IDI4LjctNjQgNjQgMjguNyA2NCA2NCA2NHptNDQ4IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRzLTI4LjctNjQtNjQtNjQtNjQgMjguNy02NCA2NCAyOC43IDY0IDY0IDY0em0zMiAzMmgtNjRjLTE3LjYgMC0zMy41IDcuMS00NS4xIDE4LjYgNDAuMyAyMi4xIDY4LjkgNjIgNzUuMSAxMDkuNGg2NmMxNy43IDAgMzItMTQuMyAzMi0zMnYtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjR6bS0yNTYgMGM2MS45IDAgMTEyLTUwLjEgMTEyLTExMlMzODEuOSAzMiAzMjAgMzIgMjA4IDgyLjEgMjA4IDE0NHM1MC4xIDExMiAxMTIgMTEyem03Ni44IDMyaC04LjNjLTIwLjggMTAtNDMuOSAxNi02OC41IDE2cy00Ny42LTYtNjguNS0xNmgtOC4zQzE3OS42IDI4OCAxMjggMzM5LjYgMTI4IDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6bS0yMjMuNy0xMy40QzE2MS41IDI2My4xIDE0NS42IDI1NiAxMjggMjU2SDY0Yy0zNS4zIDAtNjQgMjguNy02NCA2NHYzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NS45YzYuMy00Ny40IDM0LjktODcuMyA3NS4yLTEwOS40eidcblx0Lz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNMTkyIDI1NmM2MS45IDAgMTEyLTUwLjEgMTEyLTExMlMyNTMuOSAzMiAxOTIgMzIgODAgODIuMSA4MCAxNDRzNTAuMSAxMTIgMTEyIDExMnptNzYuOCAzMmgtOC4zYy0yMC44IDEwLTQzLjkgMTYtNjguNSAxNnMtNDcuNi02LTY4LjUtMTZoLTguM0M1MS42IDI4OCAwIDMzOS42IDAgNDAzLjJWNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDI4OGMyNi41IDAgNDgtMjEuNSA0OC00OHYtMjguOGMwLTYzLjYtNTEuNi0xMTUuMi0xMTUuMi0xMTUuMnpNNDgwIDI1NmM1MyAwIDk2LTQzIDk2LTk2cy00My05Ni05Ni05Ni05NiA0My05NiA5NiA0MyA5NiA5NiA5NnptNDggMzJoLTMuOGMtMTMuOSA0LjgtMjguNiA4LTQ0LjIgOHMtMzAuMy0zLjItNDQuMi04SDQzMmMtMjAuNCAwLTM5LjIgNS45LTU1LjcgMTUuNCAyNC40IDI2LjMgMzkuNyA2MS4yIDM5LjcgOTkuOHYzOC40YzAgMi4yLS41IDQuMy0uNiA2LjRINTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4IDAtNjEuOS01MC4xLTExMi0xMTItMTEyeidcblx0Lz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhTMjk0LjcgMCAyMjQgMCA5NiA1Ny4zIDk2IDEyOHM1Ny4zIDEyOCAxMjggMTI4em04OS42IDMyaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg4IDAgMzQ4LjIgMCA0MjIuNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00MS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40eidcblx0Lz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyUmVndWxhcjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNMzEzLjYgMzA0Yy0yOC43IDAtNDIuNSAxNi04OS42IDE2LTQ3LjEgMC02MC44LTE2LTg5LjYtMTZDNjAuMiAzMDQgMCAzNjQuMiAwIDQzOC40VjQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI1LjZjMC03NC4yLTYwLjItMTM0LjQtMTM0LjQtMTM0LjR6TTQwMCA0NjRINDh2LTI1LjZjMC00Ny42IDM4LjgtODYuNCA4Ni40LTg2LjQgMTQuNiAwIDM4LjMgMTYgODkuNiAxNiA1MS43IDAgNzQuOS0xNiA4OS42LTE2IDQ3LjYgMCA4Ni40IDM4LjggODYuNCA4Ni40VjQ2NHpNMjI0IDI4OGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NFMzMDMuNSAwIDIyNCAwIDgwIDY0LjUgODAgMTQ0czY0LjUgMTQ0IDE0NCAxNDR6bTAtMjQwYzUyLjkgMCA5NiA0My4xIDk2IDk2cy00My4xIDk2LTk2IDk2LTk2LTQzLjEtOTYtOTYgNDMuMS05NiA5Ni05NnonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclRhZ1NvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J002MzAuNiAzNjQuOWwtOTAuMy05MC4yYy0xMi0xMi0yOC4zLTE4LjctNDUuMy0xOC43aC03OS4zYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY3OS4yYzAgMTcgNi43IDMzLjIgMTguNyA0NS4ybDkwLjMgOTAuMmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGw5Mi41LTkyLjVjMTIuNi0xMi41IDEyLjYtMzIuNy4xLTQ1LjJ6bS0xODIuOC0yMWMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNCAyNCAxMC43IDI0IDI0YzAgMTMuMi0xMC43IDI0LTI0IDI0em0tMjIzLjgtODhjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhDMzUyIDU3LjMgMjk0LjcgMCAyMjQgMFM5NiA1Ny4zIDk2IDEyOGMwIDcwLjYgNTcuMyAxMjcuOSAxMjggMTI3Ljl6bTEyNy44IDExMS4yVjI5NGMtMTIuMi0zLjYtMjQuOS02LjItMzguMi02LjJoLTE2LjdjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZoLTE2LjdDNjAuMiAyODcuOSAwIDM0OC4xIDAgNDIyLjN2NDEuNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMTUuNSAwIDI5LjEtNy41IDM3LjktMTguOWwtNTgtNThjLTE4LjEtMTguMS0yOC4xLTQyLjItMjguMS02Ny45eidcblx0Lz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyQWx0U29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTI1NiAyODhjNzkuNSAwIDE0NC02NC41IDE0NC0xNDRTMzM1LjUgMCAyNTYgMCAxMTIgNjQuNSAxMTIgMTQ0czY0LjUgMTQ0IDE0NCAxNDR6bTEyOCAzMmgtNTUuMWMtMjIuMiAxMC4yLTQ2LjkgMTYtNzIuOSAxNnMtNTAuNi01LjgtNzIuOS0xNkgxMjhDNTcuMyAzMjAgMCAzNzcuMyAwIDQ0OHYxNmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg0MTZjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTE2YzAtNzAuNy01Ny4zLTEyOC0xMjgtMTI4eidcblx0Lz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyQXZhdGFyOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J00yNTYgOEMxMTkuMyA4IDggMTE5LjIgOCAyNTZjMCAxMzYuNyAxMTEuMyAyNDggMjQ4IDI0OHMyNDgtMTExLjMgMjQ4LTI0OEM1MDQgMTE5LjIgMzkyLjcgOCAyNTYgOHpNMzMgMjU2YzAtMzIuMyA2LjktNjMgMTkuMy05MC43bDEwNi40IDI5MS40Qzg0LjMgNDIwLjUgMzMgMzQ0LjIgMzMgMjU2em0yMjMgMjIzYy0yMS45IDAtNDMtMy4yLTYzLTkuMWw2Ni45LTE5NC40IDY4LjUgMTg3LjhjLjUgMS4xIDEgMi4xIDEuNiAzLjEtMjMuMSA4LjEtNDggMTIuNi03NCAxMi42em0zMC43LTMyNy41YzEzLjQtLjcgMjUuNS0yLjEgMjUuNS0yLjEgMTItMS40IDEwLjYtMTkuMS0xLjQtMTguNCAwIDAtMzYuMSAyLjgtNTkuNCAyLjgtMjEuOSAwLTU4LjctMi44LTU4LjctMi44LTEyLS43LTEzLjQgMTcuNy0xLjQgMTguNCAwIDAgMTEuNCAxLjQgMjMuNCAyLjFsMzQuNyA5NS4yTDIwMC42IDM5M2wtODEuMi0yNDEuNWMxMy40LS43IDI1LjUtMi4xIDI1LjUtMi4xIDEyLTEuNCAxMC42LTE5LjEtMS40LTE4LjQgMCAwLTM2LjEgMi44LTU5LjQgMi44LTQuMiAwLTkuMS0uMS0xNC40LS4zQzEwOS42IDczIDE3OC4xIDMzIDI1NiAzM2M1OCAwIDExMC45IDIyLjIgMTUwLjYgNTguNS0xLS4xLTEuOS0uMi0yLjktLjItMjEuOSAwLTM3LjQgMTkuMS0zNy40IDM5LjYgMCAxOC40IDEwLjYgMzMuOSAyMS45IDUyLjMgOC41IDE0LjggMTguNCAzMy45IDE4LjQgNjEuNSAwIDE5LjEtNy4zIDQxLjItMTcgNzIuMWwtMjIuMiA3NC4zLTgwLjctMjM5LjZ6bTgxLjQgMjk3LjJsNjguMS0xOTYuOWMxMi43LTMxLjggMTctNTcuMiAxNy03OS45IDAtOC4yLS41LTE1LjgtMS41LTIyLjkgMTcuNCAzMS44IDI3LjMgNjguMiAyNy4zIDEwNyAwIDgyLjMtNDQuNiAxNTQuMS0xMTAuOSAxOTIuN3onLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnROb25lOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM1MiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonXG5cdC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTE6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTc5MiAxNzkyJz5cblx0PHBhdGhcblx0ICBkPSdNNzA0IDE1MzZxMCA1Mi0zOCA5MHQtOTAgMzgtOTAtMzgtMzgtOTAgMzgtOTAgOTAtMzggOTAgMzggMzggOTB6bTg5NiAwcTAgNTItMzggOTB0LTkwIDM4LTkwLTM4LTM4LTkwIDM4LTkwIDkwLTM4IDkwIDM4IDM4IDkwem0xMjgtMTA4OHY1MTJxMCAyNC0xNi41IDQyLjV0LTQwLjUgMjEuNWwtMTA0NCAxMjJxMTMgNjAgMTMgNzAgMCAxNi0yNCA2NGg5MjBxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NS00NSAxOWgtMTAyNHEtMjYgMC00NS0xOXQtMTktNDVxMC0xMSA4LTMxLjV0MTYtMzYgMjEuNS00MCAxNS41LTI5LjVsLTE3Ny04MjNoLTIwNHEtMjYgMC00NS0xOXQtMTktNDUgMTktNDUgNDUtMTloMjU2cTE2IDAgMjguNSA2LjV0MTkuNSAxNS41IDEzIDI0LjUgOCAyNiA1LjUgMjkuNSA0LjUgMjZoMTIwMXEyNiAwIDQ1IDE5dDE5IDQ1eidcblx0Lz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlMjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNNTA0LjcxNyAzMjBIMjExLjU3Mmw2LjU0NSAzMmgyNjguNDE4YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNS41MTcgMjQuMjc2QzUyMy4xMTIgNDE0LjY2OCA1MzYgNDMzLjgyOCA1MzYgNDU2YzAgMzEuMjAyLTI1LjUxOSA1Ni40NDQtNTYuODI0IDU1Ljk5NC0yOS44MjMtLjQyOS01NC4zNS0yNC42MzEtNTUuMTU1LTU0LjQ0Ny0uNDQtMTYuMjg3IDYuMDg1LTMxLjA0OSAxNi44MDMtNDEuNTQ4SDIzMS4xNzZDMjQxLjU1MyA0MjYuMTY1IDI0OCA0NDAuMzI2IDI0OCA0NTZjMCAzMS44MTMtMjYuNTI4IDU3LjQzMS01OC42NyA1NS45MzgtMjguNTQtMS4zMjUtNTEuNzUxLTI0LjM4NS01My4yNTEtNTIuOTE3LTEuMTU4LTIyLjAzNCAxMC40MzYtNDEuNDU1IDI4LjA1MS01MS41ODZMOTMuODgzIDY0SDI0QzEwLjc0NSA2NCAwIDUzLjI1NSAwIDQwVjI0QzAgMTAuNzQ1IDEwLjc0NSAwIDI0IDBoMTAyLjUyOWMxMS40MDEgMCAyMS4yMjggOC4wMjEgMjMuNTEzIDE5LjE5TDE1OS4yMDggNjRINTUxLjk5YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNDcuMjczIDIwOEM1MjUuNjM3IDMxMi4yNDYgNTE1LjkyMyAzMjAgNTA0LjcxNyAzMjB6TTQwOCAxNjhoLTQ4di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2aC0xNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGgtNDhjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2MTZjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmg0OHY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwaDQ4YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTE2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZ6J1xuXHQvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGUzOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J001MDQuNzE3IDMyMEgyMTEuNTcybDYuNTQ1IDMyaDI2OC40MThjMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC01LjUxNyAyNC4yNzZDNTIzLjExMiA0MTQuNjY4IDUzNiA0MzMuODI4IDUzNiA0NTZjMCAzMS4yMDItMjUuNTE5IDU2LjQ0NC01Ni44MjQgNTUuOTk0LTI5LjgyMy0uNDI5LTU0LjM1LTI0LjYzMS01NS4xNTUtNTQuNDQ3LS40NC0xNi4yODcgNi4wODUtMzEuMDQ5IDE2LjgwMy00MS41NDhIMjMxLjE3NkMyNDEuNTUzIDQyNi4xNjUgMjQ4IDQ0MC4zMjYgMjQ4IDQ1NmMwIDMxLjgxMy0yNi41MjggNTcuNDMxLTU4LjY3IDU1LjkzOC0yOC41NC0xLjMyNS01MS43NTEtMjQuMzg1LTUzLjI1MS01Mi45MTctMS4xNTgtMjIuMDM0IDEwLjQzNi00MS40NTUgMjguMDUxLTUxLjU4Nkw5My44ODMgNjRIMjRDMTAuNzQ1IDY0IDAgNTMuMjU1IDAgNDBWMjRDMCAxMC43NDUgMTAuNzQ1IDAgMjQgMGgxMDIuNTI5YzExLjQwMSAwIDIxLjIyOCA4LjAyMSAyMy41MTMgMTkuMTlMMTU5LjIwOCA2NEg1NTEuOTljMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC00Ny4yNzMgMjA4QzUyNS42MzcgMzEyLjI0NiA1MTUuOTIzIDMyMCA1MDQuNzE3IDMyMHpNNDAzLjAyOSAxOTJIMzYwdi02MGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC0yNGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnY2MGgtNDMuMDI5Yy0xMC42OTEgMC0xNi4wNDUgMTIuOTI2LTguNDg1IDIwLjQ4NWw2Ny4wMjkgNjcuMDI5YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGw2Ny4wMjktNjcuMDI5YzcuNTU5LTcuNTU5IDIuMjA1LTIwLjQ4NS04LjQ4Ni0yMC40ODV6J1xuXHQvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGU0OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J001NzYgMjE2djE2YzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNGgtOGwtMjYuMTEzIDE4Mi43ODhDNTE0LjUwOSA0NjIuNDM1IDQ5NC4yNTcgNDgwIDQ3MC4zNyA0ODBIMTA1LjYzYy0yMy44ODcgMC00NC4xMzktMTcuNTY1LTQ3LjUxOC00MS4yMTJMMzIgMjU2aC04Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjR2LTE2YzAtMTMuMjU1IDEwLjc0NS0yNCAyNC0yNGg2Ny4zNDFsMTA2Ljc4LTE0Ni44MjFjMTAuMzk1LTE0LjI5MiAzMC40MDctMTcuNDUzIDQ0LjcwMS03LjA1OCAxNC4yOTMgMTAuMzk1IDE3LjQ1MyAzMC40MDggNy4wNTggNDQuNzAxTDE3MC40NzcgMTkyaDIzNS4wNDZMMzI2LjEyIDgyLjgyMWMtMTAuMzk1LTE0LjI5Mi03LjIzNC0zNC4zMDYgNy4wNTktNDQuNzAxIDE0LjI5MS0xMC4zOTUgMzQuMzA2LTcuMjM1IDQ0LjcwMSA3LjA1OEw0ODQuNjU5IDE5Mkg1NTJjMTMuMjU1IDAgMjQgMTAuNzQ1IDI0IDI0ek0zMTIgMzkyVjI4MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRzLTI0IDEwLjc0NS0yNCAyNHYxMTJjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0czI0LTEwLjc0NSAyNC0yNHptMTEyIDBWMjgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRzMjQtMTAuNzQ1IDI0LTI0em0tMjI0IDBWMjgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRzMjQtMTAuNzQ1IDI0LTI0eidcblx0Lz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlNTogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNMzIwIDM4NEgxMjhWMjI0SDY0djI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmgyNTZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMjI0aC02NHYxNjB6bTMxNC42LTI0MS44bC04NS4zLTEyOGMtNi04LjktMTYtMTQuMi0yNi43LTE0LjJIMTE3LjRjLTEwLjcgMC0yMC43IDUuMy0yNi42IDE0LjJsLTg1LjMgMTI4Yy0xNC4yIDIxLjMgMSA0OS44IDI2LjYgNDkuOEg2MDhjMjUuNSAwIDQwLjctMjguNSAyNi42LTQ5Ljh6TTUxMiA0OTZjMCA4LjggNy4yIDE2IDE2IDE2aDMyYzguOCAwIDE2LTcuMiAxNi0xNlYyMjRoLTY0djI3MnonXG5cdC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTY6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjE2IDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTYwMiAxMTguNkw1MzcuMSAxNUM1MzEuMyA1LjcgNTIxIDAgNTEwIDBIMTA2Qzk1IDAgODQuNyA1LjcgNzguOSAxNUwxNCAxMTguNmMtMzMuNSA1My41LTMuOCAxMjcuOSA1OC44IDEzNi40IDQuNS42IDkuMS45IDEzLjcuOSAyOS42IDAgNTUuOC0xMyA3My44LTMzLjEgMTggMjAuMSA0NC4zIDMzLjEgNzMuOCAzMy4xIDI5LjYgMCA1NS44LTEzIDczLjgtMzMuMSAxOCAyMC4xIDQ0LjMgMzMuMSA3My44IDMzLjEgMjkuNiAwIDU1LjgtMTMgNzMuOC0zMy4xIDE4LjEgMjAuMSA0NC4zIDMzLjEgNzMuOCAzMy4xIDQuNyAwIDkuMi0uMyAxMy43LS45IDYyLjgtOC40IDkyLjYtODIuOCA1OS0xMzYuNHpNNTI5LjUgMjg4Yy0xMCAwLTE5LjktMS41LTI5LjUtMy44VjM4NEgxMTZ2LTk5LjhjLTkuNiAyLjItMTkuNSAzLjgtMjkuNSAzLjgtNiAwLTEyLjEtLjQtMTgtMS4yLTUuNi0uOC0xMS4xLTIuMS0xNi40LTMuNlY0ODBjMCAxNy43IDE0LjMgMzIgMzIgMzJoNDQ4YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjI4My4yYy01LjQgMS42LTEwLjggMi45LTE2LjQgMy42LTYuMS44LTEyLjEgMS4yLTE4LjIgMS4yeidcblx0Lz5cbiAgPC9zdmc+LFxuICBtZWRpYUFsaWduTGVmdDogPHN2ZyB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdDxyZWN0IHg9XCI1XCIgeT1cIjE2Ljc1XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjZcIiB0cmFuc2Zvcm09XCJyb3RhdGUoLTkwIDUgMTYuNzUpXCIvPlxuXHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjUgOC43NUwxMy41IDguNzVMMTMuNSA3LjI1TDIwLjUgNy4yNUwyMC41IDguNzVaXCIvPlxuXHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjUgMTIuNzVMMTMuNSAxMi43NUwxMy41IDExLjI1TDIwLjUgMTEuMjVMMjAuNSAxMi43NVpcIi8+XG5cdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAuNSAxNi43NUwxMy41IDE2Ljc1TDEzLjUgMTUuMjVMMjAuNSAxNS4yNUwyMC41IDE2Ljc1WlwiLz5cbiAgPC9zdmc+LFxuICBtZWRpYUFsaWduUmlnaHQ6IDxzdmcgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHQ8cmVjdCB4PVwiMjBcIiB5PVwiNy43NVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI2XCIgdHJhbnNmb3JtPVwicm90YXRlKDkwIDIwIDcuNzUpXCIvPlxuXHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuNSAxNS43NUgxMS41VjE3LjI1SDQuNVYxNS43NVpcIi8+XG5cdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC41IDExLjc1SDExLjVWMTMuMjVINC41VjExLjc1WlwiLz5cblx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjUgNy43NUgxMS41VjkuMjVINC41VjcuNzVaXCIvPlxuICA8L3N2Zz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgRHJvcGRvd25NZW51LCBNZW51R3JvdXAsIE1lbnVJdGVtIH0gPSB3cC5jb21wb25lbnRzXG5cbmNsYXNzIER5bmFtaWNGaWVsZEluc2VydGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmdldE9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCBhbGxvd2VkT3B0aW9uc1R5cGVzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IE5ldmVSZWFjdEN1c3RvbWl6ZS5keW5hbWljVGFncy5vcHRpb25zXG5cbiAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICBhbGxPcHRpb25zLmZvckVhY2goKG9wdGlvbkdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICAgICAgT2JqZWN0LmtleXMob3B0aW9uR3JvdXAuY29udHJvbHMpXG4gICAgICAgIC5mb3JFYWNoKChzbHVnLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICghYWxsb3dlZE9wdGlvbnNUeXBlcy5pbmNsdWRlcyhcbiAgICAgICAgICAgIG9wdGlvbkdyb3VwLmNvbnRyb2xzW3NsdWddLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3Qoc2x1Zywgb3B0aW9uR3JvdXAuY29udHJvbHNbc2x1Z10udHlwZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wdGlvbkdyb3VwLmNvbnRyb2xzW3NsdWddLmxhYmVsfVxuICAgICAgICAgICAgPC9NZW51SXRlbT4pXG4gICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgIDxNZW51R3JvdXAgbGFiZWw9e29wdGlvbkdyb3VwLmxhYmVsfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTWVudUdyb3VwPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICBpY29uPSdpbWFnZS1maWx0ZXInXG4gICAgICAgIGxhYmVsPXtfXygnSW5zZXJ0IER5bmFtaWMgVGFnJywgJ25ldmUnKX1cbiAgICAgID5cbiAgICAgICAgeygpID0+IChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGhpcy5nZXRPcHRpb25zKCl9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgIClcbiAgfVxufVxuXG5EeW5hbWljRmllbGRJbnNlcnRlci5wcm9wVHlwZXMgPSB7XG4gIGFsbG93ZWRPcHRpb25zVHlwZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRmllbGRJbnNlcnRlclxuIiwiLyogZ2xvYmFsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgRHluYW1pY0ZpZWxkSW5zZXJ0ZXIgZnJvbSAnLi9keW5hbWljLWZpZWxkLWluc2VydGVyLmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBkeW5hbWljIHRhZyBidXR0b25zLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufXx7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghTmV2ZVJlYWN0Q3VzdG9taXplLmR5bmFtaWNUYWdzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgY29udHJvbHMgPSBOZXZlUmVhY3RDdXN0b21pemUuZHluYW1pY1RhZ3MuY29udHJvbHNcbiAgTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uID0ge31cbiAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xJZCwgaW5kZXgpIHtcbiAgICBjb25zdCBjb250cm9sID0gd3AuY3VzdG9taXplLmNvbnRyb2woY29udHJvbElkKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgY29uc3QgZHluYW1pY0NvbnRyb2xXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGR5bmFtaWNDb250cm9sV3JhcC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGR5bmFtaWMtJHtjb250cm9sSWR9YClcbiAgICBkeW5hbWljQ29udHJvbFdyYXAuY2xhc3NMaXN0LmFkZCgnbmV2ZS1keW5hbWljLXRhZy1zZWxlY3RvcicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldmUtaGFzLWR5bmFtaWMtdGFnLXNlbGVjdG9yJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRyb2xXcmFwKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWN1c3RvbWl6ZS1zZXR0aW5nLWxpbms9XCIke2NvbnRyb2wuaWR9XCJdYClcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sSWRdID0ge1xuICAgICAgICBzdGFydDogZS50YXJnZXQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogZS50YXJnZXQuc2VsZWN0aW9uRW5kXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJlbmRlcihcbiAgICAgIDxEeW5hbWljRmllbGRJbnNlcnRlclxuICAgICAgICBhbGxvd2VkT3B0aW9uc1R5cGVzPXtcbiAgICAgICAgICBjb250cm9sc1tjb250cm9sSWRdXG4gICAgICAgIH1cbiAgICAgICAgb25TZWxlY3Q9e1xuICAgICAgICAgIChtYWdpY1RhZywgZ3JvdXApID0+IGFkZFRvRmllbGQobWFnaWNUYWcsIGNvbnRyb2wsIGdyb3VwKVxuICAgICAgICB9XG4gICAgICAvPixcbiAgICAgIGR5bmFtaWNDb250cm9sV3JhcFxuICAgIClcbiAgfSlcbn1cblxuLyoqXG4gKiBBZGQgZHluYW1pYyB0YWcgdG8gaW5wdXQgZmllbGQuXG4gKiBAcGFyYW0gbWFnaWNUYWdcbiAqIEBwYXJhbSBjb250cm9sXG4gKiBAcGFyYW0gb3B0aW9uVHlwZVxuICovXG5jb25zdCBhZGRUb0ZpZWxkID0gZnVuY3Rpb24gKG1hZ2ljVGFnLCBjb250cm9sLCBvcHRpb25UeXBlKSB7XG4gIGxldCB0YWdcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1jdXN0b21pemUtc2V0dGluZy1saW5rPVwiJHtjb250cm9sLmlkfVwiXWApXG5cbiAgaWYgKG9wdGlvblR5cGUgPT09ICd1cmwnICYmIGNvbnRyb2wucGFyYW1zLnR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICB0YWcgPSBgPGEgaHJlZj1cInske21hZ2ljVGFnfX1cIj5MaW5rPC9hPmBcbiAgfSBlbHNlIHtcbiAgICB0YWcgPSBgeyR7bWFnaWNUYWd9fWBcbiAgfVxuXG4gIGlmIChvcHRpb25UeXBlID09PSAndXJsJyAmJiBpbnB1dC52YWx1ZSA9PT0gJyMnKSB7XG4gICAgaW5wdXQudmFsdWUgPSB0YWdcbiAgfSBlbHNlIGlmIChOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb25bY29udHJvbC5pZF0pIHtcbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sLmlkXVxuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0LnZhbHVlLmxlbmd0aFxuICAgIGlucHV0LnZhbHVlID1cbiAgICAgIGlucHV0LnZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyB0YWcgK1xuICAgICAgaW5wdXQudmFsdWUuc3Vic3RyaW5nKGVuZCwgbGVuZ3RoKVxuICB9IGVsc2Uge1xuICAgIGlucHV0LnZhbHVlICs9IHRhZ1xuICB9XG4gIE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sLmlkXSA9IGZhbHNlXG4gIGlucHV0LmZvY3VzKClcbiAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKVxufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBGb250RmFtaWx5Q29tcG9uZW50IGZyb20gJy4vRm9udEZhbWlseUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBGb250RmFtaWx5Q29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8Rm9udEZhbWlseUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59KVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwLCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBGb250RmFtaWx5U2VsZWN0b3IgZnJvbSAnLi9Gb250RmFtaWx5U2VsZWN0b3IuanMnXG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNsYXNzIFR5cGVmYWNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvbnRGYW1pbHk6IHZhbHVlLFxuICAgICAgZm9udEZhbWlseVNvdXJjZTogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBkZWZhdWx0X2lzX2luaGVyaXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zID0gcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgPyB7XG4gICAgICAuLi5kZWZhdWx0UGFyYW1zLFxuICAgICAgLi4uSlNPTi5wYXJzZSggcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgKVxuICAgIH0gOiBkZWZhdWx0UGFyYW1zXG4gIH1cblxuICBtYXliZV9nZXRfdHlwZWtpdF9mb250KGZvbnQpIHtcbiAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggTmV2ZVJlYWN0Q3VzdG9taXplLCAndHlwZWtpdFNsdWdzJyApID09PSBmYWxzZSApIHtcbiAgICAgIHJldHVybiBmb250XG4gICAgfVxuICAgIGNvbnN0IHR5cGVraXRTbHVncyA9IE5ldmVSZWFjdEN1c3RvbWl6ZS50eXBla2l0U2x1Z3NcbiAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggdHlwZWtpdFNsdWdzLCBmb250ICkgKSB7XG4gICAgICByZXR1cm4gdHlwZWtpdFNsdWdzW2ZvbnRdXG4gICAgfVxuICAgIHJldHVybiBmb250XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdHlwZWZhY2UtY29udHJvbCBuZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAgPEZvbnRGYW1pbHlTZWxlY3RvclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZm9udEZhbWlseX1cbiAgICAgICAgICAgIG9uRm9udENob2ljZT17KGZvbnRGYW1pbHlTb3VyY2UsIGZvbnRGYW1pbHkpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSggeyBmb250RmFtaWx5LCBmb250RmFtaWx5U291cmNlIH0gKVxuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2woKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGluaGVyaXREZWZhdWx0PXt0aGlzLmNvbnRyb2xQYXJhbXMuZGVmYXVsdF9pc19pbmhlcml0fVxuICAgICAgICAgICAgbWF5YmVHZXRUeXBla2l0PXt0aGlzLm1heWJlX2dldF90eXBla2l0X2ZvbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KCB0aGlzLm1heWJlX2dldF90eXBla2l0X2ZvbnQodGhpcy5zdGF0ZS5mb250RmFtaWx5KSApXG4gICAgICB3cC5jdXN0b21pemUucHJldmlld2VyLnNlbmQoICdmb250LXNlbGVjdGlvbicsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMubWF5YmVfZ2V0X3R5cGVraXRfZm9udCh0aGlzLnN0YXRlLmZvbnRGYW1pbHkpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuZm9udEZhbWlseVNvdXJjZSxcbiAgICAgICAgY29udHJvbElkOiB0aGlzLnByb3BzLmNvbnRyb2wuaWQsXG4gICAgICAgIHR5cGU6ICdcXFxcTmV2ZVxcXFxDdXN0b21pemVyXFxcXENvbnRyb2xzXFxcXFJlYWN0XFxcXEZvbnRfRmFtaWx5JyxcbiAgICAgICAgaW5oZXJpdDogdGhpcy5jb250cm9sUGFyYW1zLmRlZmF1bHRfaXNfaW5oZXJpdFxuICAgICAgfSApXG4gICAgfSwgMTAwIClcbiAgfVxufVxuXG5UeXBlZmFjZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlZmFjZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIHdwLCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbmltcG9ydCBGb250UHJldmlld0xpbmsgZnJvbSAnLi9Gb250UHJldmlld0xpbmsuanMnXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCB7XG4gIFBvcG92ZXIsXG4gIEJ1dHRvbixcbiAgVGV4dENvbnRyb2wsXG4gIERhc2hpY29uXG59ID0gd3AuY29tcG9uZW50c1xuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIEZvbnRGYW1pbHlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvbnRzOiBOZXZlUmVhY3RDdXN0b21pemUuZm9udHMsXG4gICAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIGxvYWRVbnRpbDogMjAsXG4gICAgICBkZWxheUZvbnRJbmNsdXNpb246IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRGb250cygpIHtcbiAgICBjb25zdCBmb250R3JvdXBzID0gdGhpcy5zdGF0ZS5mb250c1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgcmVzdWx0ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGZvbnRHcm91cHMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXN1bHRba2V5XSA9IGZvbnRHcm91cHNba2V5XS5maWx0ZXIodmFsdWUgPT4gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5jbHVkZXMoc2VsZi5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBnZXRGb250TGlzdCgpIHtcbiAgICBjb25zdCBmb250R3JvdXBzID0gdGhpcy5nZXRGb250cygpXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIG9wdGlvbnMucHVzaChcbiAgICAgIDxsaVxuICAgICAgICBrZXk9J2RlZmF1bHQnIGNsYXNzTmFtZT17J2RlZmF1bHQtdmFsdWUgJyArICF0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICAgICAgPyAnc2VsZWN0ZWQnXG4gICAgICAgICAgOiAnJ31cbiAgICAgID5cbiAgICAgICAgPEZvbnRQcmV2aWV3TGlua1xuICAgICAgICAgIGZvbnRGYWNlPSdkZWZhdWx0J1xuICAgICAgICAgIGRlbGF5TG9hZD17ZmFsc2V9XG4gICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMuaW5oZXJpdERlZmF1bHRcbiAgICAgICAgICAgID8gX18oJ0luaGVyaXQnLCAnbmV2ZScpXG4gICAgICAgICAgICA6IF9fKCdEZWZhdWx0JywgJ25ldmUnKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvbnRDaG9pY2UoJ3N5c3RlbScsIGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2xpPlxuICAgIClcbiAgICBPYmplY3Qua2V5cyhmb250R3JvdXBzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgZm9udEdyb3Vwc1trZXldLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy5wdXNoKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdmb250LWdyb3VwLWhlYWRlcicga2V5PXtrZXl9PlxuICAgICAgICAgIHtrZXl9XG4gICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgICBmb250R3JvdXBzW2tleV0ubWFwKChmb250LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCBzZWxmLnN0YXRlLmxvYWRVbnRpbCkge1xuICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2ZvbnR9IGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgZm9udCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICkgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udFByZXZpZXdMaW5rXG4gICAgICAgICAgICAgICAgZGVsYXlMb2FkPXt0aGlzLnN0YXRlLmRlbGF5Rm9udEluY2x1c2lvbn1cbiAgICAgICAgICAgICAgICBsYWJlbD17Zm9udH1cbiAgICAgICAgICAgICAgICBmb250RmFjZT17dGhpcy5wcm9wcy5tYXliZUdldFR5cGVraXQoZm9udCl9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9udENob2ljZShrZXksIGZvbnQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZFVudGlsIDwgb3B0aW9ucy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zZWFyY2ggPT09ICcnKSB7XG4gICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXG4gICAgICAgICAga2V5PSdsb2FkLW1vcmUnXG4gICAgICAgICAgb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZFVudGlsOiAoc2VsZi5zdGF0ZS5sb2FkVW50aWwgKyA1KSxcbiAgICAgICAgICAgICAgICBkZWxheUZvbnRJbmNsdXNpb246IGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xvYWQtbW9yZSc+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj0naW1hZ2UtZmlsdGVyJyAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wb3Zlci1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wb3Zlci1oZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnU2VhcmNoJywgJ25ldmUnKSArICcuLi4nfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkVW50aWw6IDIwXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbG9zZS1mb250LXNlbGVjdG9yJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPjxEYXNoaWNvbiBpY29uPSdubycgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmV2ZS1mb250cy1saXN0Jz5cbiAgICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA/IG9wdGlvbnNcbiAgICAgICAgICAgICAgOiA8bGkgY2xhc3NOYW1lPSduby1yZXN1bHQnIGtleT0nbm8tcmVzdWx0cyc+e19fKCdObyByZXN1bHRzLicsICduZXZlJyl9PC9saT59XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGNvbnN0IGRlZmF1bHRGb250ZmFjZSA9ICctYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWYnXG4gICAgY29uc3QgZm9udCA9IHRoaXMucHJvcHMubWF5YmVHZXRUeXBla2l0KCB0aGlzLnByb3BzLnNlbGVjdGVkIClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtZm9udC1mYW1pbHktY29udHJvbCc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgIHtfXygnRm9udCBGYW1pbHknLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtZmFtaWx5LXNlbGVjdG9yLXRvZ2dsZSdcbiAgICAgICAgICBpc1NlY29uZGFyeVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IHRydWUgfSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmZi1uYW1lJz57XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkIHx8XG4gICAgICAgICAgICAodGhpcy5wcm9wcy5pbmhlcml0RGVmYXVsdFxuICAgICAgICAgICAgICA/IF9fKCdJbmhlcml0JywgJ25ldmUnKVxuICAgICAgICAgICAgICA6IF9fKCdEZWZhdWx0JywgJ25ldmUnKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZmLXByZXZpZXcnXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250RmFtaWx5OiBmb250IHx8IGRlZmF1bHRGb250ZmFjZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+QWJjXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBwb3NpdGlvbj0nYm90dG9tIGxlZnQnXG4gICAgICAgICAgICAgIG9uRm9jdXNPdXRzaWRlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9udHMgPyB0aGlzLmdldEZvbnRMaXN0KClcbiAgICAgICAgICAgICAgICA6IF9fKCdMb2FkaW5nLi4uJywgJ25ldmUnKX1cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Gb250RmFtaWx5U2VsZWN0b3IucHJvcFR5cGVzID0ge1xuICBvbkZvbnRDaG9pY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1heWJlR2V0VHlwZWtpdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5oZXJpdERlZmF1bHQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRGYW1pbHlTZWxlY3RvclxuIiwiLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgRm9udFByZXZpZXdMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmV2aWV3V2FzUmVuZGVyZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0geyBmb250RmFtaWx5OiB0aGlzLnByb3BzLmZvbnRGYWNlICsgJywgc2Fucy1zZXJpZicgfVxuICAgIHJldHVybiAoXG4gICAgICA8YSBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpXG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25ldmUtZm9udC1mYW1pbHknPnt0aGlzLnByb3BzLmxhYmVsIHx8IHRoaXMucHJvcHMuZm9udEZhY2V9PC9zcGFuPlxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmV2aWV3V2FzUmVuZGVyZWQ6IHRydWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5wcmV2aWV3V2FzUmVuZGVyZWQgfHwgdGhpcy5wcm9wcy5kZWxheUxvYWQgPT09XG4gICAgICAgICAgICAgIGZhbHNlKVxuICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT0nbmV2ZS1mb250LXByZXZpZXcnIHN0eWxlPXtzdHlsZX0+QWJjPC9zcGFuPlxuICAgICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT0nbmV2ZS1mb250LXByZXZpZXcgJz4uLi48L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG4gICAgICA8L2E+XG4gICAgKVxuICB9XG59XG5cbkZvbnRQcmV2aWV3TGluay5wcm9wVHlwZXMgPSB7XG4gIGZvbnRGYWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlbGF5TG9hZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9udFByZXZpZXdMaW5rXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgTmV2ZVJlYWN0Q3VzdG9taXplLCB3cCAqL1xuaW1wb3J0IHsgaW5pdCBhcyBpbml0RHluYW1pY0ZpZWxkcyB9IGZyb20gJy4vZHluYW1pYy1maWVsZHMvaW5kZXguanMnXG5pbXBvcnQgeyBUb2dnbGVDb250cm9sIH0gZnJvbSAnLi90b2dnbGUvQ29udHJvbC5qcydcbmltcG9ydCB7IFJlc3BvbnNpdmVUb2dnbGVDb250cm9sIH0gZnJvbSAnLi9yZXNwb25zaXZlLXRvZ2dsZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgQmFja2dyb3VuZENvbnRyb2wgfSBmcm9tICcuL2JhY2tncm91bmQvQ29udHJvbC5qcydcbmltcG9ydCB7IFNwYWNpbmdDb250cm9sIH0gZnJvbSAnLi9zcGFjaW5nL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBUeXBlZmFjZUNvbnRyb2wgfSBmcm9tICcuL3R5cGVmYWNlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBGb250RmFtaWx5Q29udHJvbCB9IGZyb20gJy4vZm9udC1mYW1pbHkvQ29udHJvbC5qcydcbmltcG9ydCB7IFJhZGlvQnV0dG9uc0NvbnRyb2wgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcydcbmltcG9ydCB7IEJ1dHRvbkFwcGVhcmFuY2VDb250cm9sIH0gZnJvbSAnLi9idXR0b24tYXBwZWFyYW5jZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmFuZ2VDb250cm9sIH0gZnJvbSAnLi9yYW5nZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVJhbmdlQ29udHJvbCB9IGZyb20gJy4vcmVzcG9uc2l2ZS1yYW5nZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgQ29sb3JDb250cm9sIH0gZnJvbSAnLi9jb2xvci9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUHJlc2V0c1NlbGVjdG9yQ29udHJvbCB9IGZyb20gJy4vcHJlc2V0cy1zZWxlY3Rvci9Db250cm9sLmpzJ1xuaW1wb3J0IHsgTXVsdGlTZWxlY3RDb250cm9sIH0gZnJvbSAnLi9tdWx0aXNlbGVjdC9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2wgfSBmcm9tICcuL3Jlc3BvbnNpdmUtcmFkaW8tYnV0dG9ucy9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmFkaW9JbWFnZUNvbnRyb2wgfSBmcm9tICcuL3JhZGlvLWltYWdlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBPcmRlcmluZ0NvbnRyb2wgfSBmcm9tICcuL29yZGVyaW5nL0NvbnRyb2wuanMnXG5cbmNvbnN0IHsgY29udHJvbENvbnN0cnVjdG9yIH0gPSB3cC5jdXN0b21pemVcblxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfdG9nZ2xlX2NvbnRyb2wgPSBUb2dnbGVDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yZXNwb25zaXZlX3RvZ2dsZV9jb250cm9sID0gUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2JhY2tncm91bmRfY29udHJvbCA9IEJhY2tncm91bmRDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9zcGFjaW5nID0gU3BhY2luZ0NvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3R5cGVmYWNlX2NvbnRyb2wgPSBUeXBlZmFjZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2ZvbnRfZmFtaWx5X2NvbnRyb2wgPSBGb250RmFtaWx5Q29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmFkaW9fYnV0dG9uc19jb250cm9sID0gUmFkaW9CdXR0b25zQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfYnV0dG9uX2FwcGVhcmFuY2UgPSBCdXR0b25BcHBlYXJhbmNlQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmFuZ2VfY29udHJvbCA9IFJhbmdlQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmVzcG9uc2l2ZV9yYW5nZV9jb250cm9sID0gUmVzcG9uc2l2ZVJhbmdlQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfY29sb3JfY29udHJvbCA9IENvbG9yQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcHJlc2V0c19zZWxlY3RvciA9IFByZXNldHNTZWxlY3RvckNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX211bHRpc2VsZWN0ID0gTXVsdGlTZWxlY3RDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yZXNwb25zaXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCA9IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yYWRpb19pbWFnZV9jb250cm9sID0gUmFkaW9JbWFnZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX29yZGVyaW5nX2NvbnRyb2wgPSBPcmRlcmluZ0NvbnRyb2xcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuICAvLyBUb2RvOiBkZWxldGUgdGhpcy5cbiAgd3AuY3VzdG9taXplLnNlY3Rpb24oJ25ldmVfYmxvZ19hcmNoaXZlX2xheW91dCcpLmZvY3VzKClcblxuICBjb25zdCBkZXZpY2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2N1c3RvbWl6ZS1mb290ZXItYWN0aW9ucyAuZGV2aWNlcywgLmhmZy0tY2ItZGV2aWNlcy1zd2l0Y2hlciBhLnN3aXRjaC10bycgKVxuICBkZXZpY2VCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCggJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IGUudGFyZ2V0LmRhdGFzZXQuZGV2aWNlXG4gICAgfSApXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKVxuICB9IClcbiAgaW5pdER5bmFtaWNGaWVsZHMoKVxufSApXG5cbndpbmRvdy5IRkcgPSB7XG4gIGdldFNldHRpbmdzOiAoKSA9PiB7XG4gICAgY29uc3QgdXNlZFNldHRpbmdzID0ge31cbiAgICBOZXZlUmVhY3RDdXN0b21pemUuaGVhZGVyQ29udHJvbHMubWFwKCAoaXRlbSkgPT4ge1xuICAgICAgaWYgKCAhd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKSApIHJldHVybiBmYWxzZVxuICAgICAgdXNlZFNldHRpbmdzW2l0ZW1dID0gd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKS5zZXR0aW5nLmdldCgpXG4gICAgfSApXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCB1c2VkU2V0dGluZ3MgKVxuICB9XG59XG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuL011bHRpU2VsZWN0J1xuXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuZXhwb3J0IGNvbnN0IE11bHRpU2VsZWN0Q29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyKFxuICAgICAgPE11bHRpU2VsZWN0IGNvbnRyb2w9e3RoaXN9IC8+XG4gICAgICAsIHRoaXMuY29udGFpbmVyWzBdKVxuICB9XG59KVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgVG9vbHRpcCwgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY29uc3QgTXVsdGlTZWxlY3QgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcblxuICBjb25zdCBhZGRhYmxlID0gT2JqZWN0LmtleXMoY2hvaWNlcykuZmlsdGVyKGNob2ljZSA9PiAhdmFsdWUuaW5jbHVkZXMoY2hvaWNlKSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdBZGQgaXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndG9rZW4nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlLCBzbHVnXVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0ncGx1cy1hbHQnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgfSlcbiAgY29uc3QgdmFsdWVzID0gdmFsdWUuZmlsdGVyKHNsdWcgPT4gY2hvaWNlc1tzbHVnXSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdSZW1vdmUgSXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSd0b2tlbidcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlXS5maWx0ZXIodiA9PiB2ICE9PSBzbHVnKVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0nZGlzbWlzcycgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtbXVsdGlzZWxlY3QnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2NvbnRyb2wucGFyYW1zLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1vcHRpb25zJz5cbiAgICAgICAge3ZhbHVlcy5sZW5ndGggP1xuICAgICAgICAgIHZhbHVlcyA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+XG4gICAgICAgICAgICB7X18oJ0FkZCBpdGVtcyBieSBjbGlja2luZyB0aGUgb25lcyBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdmFpbGFibGUtb3B0aW9ucyc+XG4gICAgICAgIHthZGRhYmxlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgIGFkZGFibGUgOlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlxuICAgICAgICAgICAge19fKCdBbGwgaXRlbXMgYXJlIGFscmVhZHkgc2VsZWN0ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTXVsdGlTZWxlY3QucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3RcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IE9yZGVyaW5nQ29tcG9uZW50IGZyb20gJy4vT3JkZXJpbmdDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgT3JkZXJpbmdDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8T3JkZXJpbmdDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCB7IFNvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUVsZW1lbnQsIFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBhcnJheU1vdmUgZnJvbSAnYXJyYXktbW92ZSdcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBUb29sdGlwLCBJY29uIH0gPSB3cC5jb21wb25lbnRzXG5cbmNvbnN0IExpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoeyBjaGlsZHJlbiB9KSA9PiA8ZGl2IGNsYXNzTmFtZT0naXRlbXMtbGlzdCc+e2NoaWxkcmVufTwvZGl2PilcbmNvbnN0IEhhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKFxuICAoKSA9PiAoXG4gICAgPFRvb2x0aXAgdGV4dD17X18oJ0RyYWcgdG8gUmVvcmRlcicsICduZXZlJyl9PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2hhbmRsZScgb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpIH19PlxuICAgICAgICA8SWNvbiBpY29uPSdtZW51JyAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9Ub29sdGlwPlxuICApXG4pXG5jb25zdCBJdGVtID0gKHsgbGFiZWwsIHNsdWcsIG9uVG9nZ2xlLCBjbGFzc05hbWUsIGRpc2FibGVkID0gZmFsc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnbmV2ZS1zb3J0YWJsZS1pdGVtJywgY2xhc3NOYW1lXSl9PlxuICAgICAgPFRvb2x0aXAgdGV4dD17X18oJ1RvZ2dsZSBWaXNpYmlsaXR5JywgJ25ldmUnKX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J3RvZ2dsZSdcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgb25Ub2dnbGUoc2x1ZylcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj0ndmlzaWJpbGl0eScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2xhYmVsJz57bGFiZWx9PC9zcGFuPlxuICAgICAgeyFkaXNhYmxlZCAmJiA8SGFuZGxlIC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFNvcnRhYmxlSXRlbSA9IFNvcnRhYmxlRWxlbWVudChJdGVtKVxuXG5jb25zdCBPcmRlcmluZ0NvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKEpTT04ucGFyc2UoY29udHJvbC5zZXR0aW5nLmdldCgpKSlcbiAgY29uc3QgeyBjb21wb25lbnRzLCBsYWJlbCB9ID0gY29udHJvbC5wYXJhbXNcbiAgY29uc3QgZGlzYWJsZWQgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5maWx0ZXIoaXRlbSA9PiAhdmFsdWUuaW5jbHVkZXMoaXRlbSkpXG5cbiAgY29uc3QgdXBkYXRlVmFsdWUgPSBuZXdWYWwgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KEpTT04uc3RyaW5naWZ5KG5ld1ZhbCkpXG4gIH1cbiAgY29uc3QgaGFuZGxlU29ydEVuZCA9ICh7IG5ld0luZGV4LCBvbGRJbmRleCB9KSA9PiB7XG4gICAgY29uc3QgbmV3T3JkZXIgPSBhcnJheU1vdmUodmFsdWUsIG9sZEluZGV4LCBuZXdJbmRleClcbiAgICB1cGRhdGVWYWx1ZShuZXdPcmRlcilcbiAgfVxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSBzbHVnID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBbLi4udmFsdWVdXG4gICAgaWYgKG5ld1ZhbHVlLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHNsdWcpXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlLnB1c2goc2x1ZylcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShuZXdWYWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCAmJlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2xhYmVsPn1cbiAgICAgIDxMaXN0XG4gICAgICAgIGl0ZW1zPXt2YWx1ZX1cbiAgICAgICAgbG9ja0F4aXM9J3knXG4gICAgICAgIHVzZURyYWdIYW5kbGVcbiAgICAgICAgb25Tb3J0RW5kPXtoYW5kbGVTb3J0RW5kfVxuICAgICAgPlxuICAgICAgICB7dmFsdWUubWFwKChzbHVnLCBpbmRleCkgPT5cbiAgICAgICAgICA8U29ydGFibGVJdGVtXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgbGFiZWw9e2NvbXBvbmVudHNbc2x1Z119XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgb25Ub2dnbGU9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtkaXNhYmxlZC5tYXAoKHNsdWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGlzYWJsZWQnXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICAgIGxhYmVsPXtjb21wb25lbnRzW3NsdWddfVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgb25Ub2dnbGU9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgPC8+XG4gIClcbn1cblxuT3JkZXJpbmdDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlcmluZ0NvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJlc2V0c1NlbGVjdG9yIGZyb20gJy4vUHJlc2V0c1NlbGVjdG9yJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcbmV4cG9ydCBjb25zdCBQcmVzZXRzU2VsZWN0b3JDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyKFxuICAgICAgPFByZXNldHNTZWxlY3RvciBjb250cm9sPXt0aGlzfSAvPlxuICAgICAgLCB0aGlzLmNvbnRhaW5lclswXSApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBtYXliZVBhcnNlSnNvbiB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IFRvb2x0aXAgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY2xhc3MgUHJlc2V0c1NlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogJydcbiAgICB9XG5cbiAgICB0aGlzLnJlcGxhY2VTZXR0aW5ncyA9IHRoaXMucmVwbGFjZVNldHRpbmdzLmJpbmQoIHRoaXMgKVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSB2YWx1ZSBpbiB0aGUgY29uc29sZSB3aXRoIHRoaXMgY29tbWFuZDpcbiAgICpcbiAgICogY29weShIRkcuZ2V0U2V0dGluZ3MoKSk7XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0UHJlc2V0cygpIHtcbiAgICBjb25zdCB7IHByZXNldHMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcblxuICAgIHJldHVybiBwcmVzZXRzLmZpbHRlciggKHByZXNldCkgPT4ge1xuICAgICAgcmV0dXJuIHByZXNldC5sYWJlbC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyggdGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSApXG4gICAgfSApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJlc2V0cyA9IHRoaXMuZ2V0UHJlc2V0cygpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXByZXNldC1zZWxlY3Rvcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nc2VhcmNoJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCAnU2VhcmNoIEhlYWRlciBQcmVzZXRzLi4uJyApfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoIHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9ICkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHByZXNldHMubGVuZ3RoID4gMCA/IHByZXNldHMubWFwKCAocHJlc2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGV4dD17cHJlc2V0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlU2V0dGluZ3MoIHByZXNldC5zZXR1cCApXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmVzZXQuaW1hZ2V9IGFsdD17cHJlc2V0LmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSApXG4gICAgICAgICAgICA6IDxwPntfXyggJ05vIGhlYWRlciBwcmVzZXRzIGZvdW5kJywgJ25ldmUnICl9PC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXBsYWNlU2V0dGluZ3Moc2V0dXApIHtcbiAgICBzZXR1cCA9IG1heWJlUGFyc2VKc29uKCBzZXR1cCApXG4gICAgaWYgKCB0eXBlb2YgTmV2ZVByb1JlYWN0Q3VzdG9taXplID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgIE9iamVjdC5rZXlzKCBzZXR1cCApLm1hcCggKHRoZW1lTW9kKSA9PiB7XG4gICAgICAgIGlmICggdGhlbWVNb2QgPT09ICdoZmdfaGVhZGVyX2xheW91dCcgKSB7XG4gICAgICAgICAgd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kIClcbiAgICAgICAgICAgIC5zZXR0aW5nXG4gICAgICAgICAgICAuc2V0KCBzZXR1cFt0aGVtZU1vZF0gKVxuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLWNoYW5nZWQtYnVpbGRlci12YWx1ZScsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG1heWJlUGFyc2VKc29uKCBzZXR1cFt0aGVtZU1vZF0gKSxcbiAgICAgICAgICAgICAgICBpZDogJ2hlYWRlcidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApIClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoICF3cC5jdXN0b21pemUuY29udHJvbCggdGhlbWVNb2QgKSApIHJldHVybiBmYWxzZVxuICAgICAgICAgIGlmICggWyd0ZXh0JywgJ3RleHRhcmVhJywgJ3NlbGVjdCddLmluY2x1ZGVzKFxuICAgICAgICAgICAgd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kICkucGFyYW1zLnR5cGUgKSApIHtcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApLnNldHRpbmcuc2V0KCBzZXR1cFt0aGVtZU1vZF0gKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCggJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywge1xuICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2V0dXBbdGhlbWVNb2RdIHx8ICcnLFxuICAgICAgICAgICAgICAgIGlkOiB0aGVtZU1vZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICkgKVxuICAgICAgICB9XG4gICAgICB9IClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLXByZXNldC1jaGFuZ2VkJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHRoZW1lTW9kczogc2V0dXBcbiAgICAgIH1cbiAgICB9ICkgKVxuICB9XG59XG5cblByZXNldHNTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVzZXRzU2VsZWN0b3JcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFJhZGlvQnV0dG9uc0NvbXBvbmVudCBmcm9tICcuL1JhZGlvQnV0dG9uc0NvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbnNDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFkaW9CdXR0b25zQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmFkaW9JY29ucyBmcm9tICcuLi9jb21tb24vUmFkaW9JY29ucydcbmltcG9ydCBTVkcgZnJvbSAnLi4vY29tbW9uL3N2Zy5qcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudFxuXG5jb25zdCBSYWRpb0J1dHRvbnNDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIGNvbnN0IGdldENob2ljZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc19mb3IsIGNob2ljZXMgfSA9IGNvbnRyb2wucGFyYW1zXG5cbiAgICBpZiAoIWlzX2Zvcikge1xuICAgICAgcmV0dXJuIGNob2ljZXNcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGlzX2Zvcikge1xuICAgICAgY2FzZSAnbG9nbyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0xvZ28gT25seScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubG9nb09ubHlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ29UaXRsZToge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0xvZ28gLSBUaXRsZSAmIFRhZ2xpbmUnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmxvZ29UaXRsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGVMb2dvOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnVGl0bGUgJiBUYWdsaW5lIC0gTG9nbycsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcudGl0bGVMb2dvXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2dvVG9wVGl0bGU6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdMb2dvIG9uIFRvcCcsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubG9nb1RvcFRpdGxlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnc3R5bGUtcGxhaW4nOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnUGxhaW4nLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVQbGFpblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3N0eWxlLWZ1bGwtaGVpZ2h0Jzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVGaWxsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgICdzdHlsZS1ib3JkZXItYm90dG9tJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0JvdHRvbSBCb3JkZXInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVVbmRlcmxpbmVcbiAgICAgICAgICB9LFxuICAgICAgICAgICdzdHlsZS1ib3JkZXItdG9wJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1RvcCBCb3JkZXInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVPdmVybGluZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAnYWNjb3VudF9jb21wb25lbnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXJfaWNvbl9zdHlsZTE6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9pY29uX3N0eWxlMjoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgMScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlclJlZ3VsYXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXJfaWNvbl9zdHlsZTM6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDMnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJUYWdTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9pY29uX3N0eWxlNDoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlckFsdFNvbGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyX2ljb25fc3R5bGU1OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnSWNvbiBTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc1NvbGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyX2ljb25fc3R5bGU2OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnSWNvbiBTdHlsZSA2JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9hdmF0YXI6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdXb3JkUHJlc3MgQXZhdGFyJywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyQXZhdGFyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub25lOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnTm8gSWNvbicsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50Tm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAnY2FydF9jb21wb25lbnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICdjYXJ0LWljb24tc3R5bGUxJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDEnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGUxXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnY2FydC1pY29uLXN0eWxlMic6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSAyJywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTMnOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgMycsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTNcbiAgICAgICAgICB9LFxuICAgICAgICAgICdjYXJ0LWljb24tc3R5bGU0Jzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGU0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnY2FydC1pY29uLXN0eWxlNSc6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTYnOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgNicsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2Jsb2dfaW1hZ2VfcG9zaXRpb24nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdMZWZ0JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5tZWRpYUFsaWduTGVmdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbm86IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdObyBpbWFnZScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnUmlnaHQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lZGlhQWxpZ25SaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB7IGxhYmVsLCBsYXJnZV9idXR0b25zLCBzaG93TGFiZWxzIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCB3cmFwQ2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgWyduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCcsIHsgJ2xhcmdlLWJ1dHRvbnMnOiBsYXJnZV9idXR0b25zID09PSB0cnVlIH1dXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwQ2xhc3Nlc30+XG4gICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICA8UmFkaW9JY29uc1xuICAgICAgICBzaG93TGFiZWxzPXtzaG93TGFiZWxzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9wdGlvbnM9e2dldENob2ljZXMoKX1cbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25zQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBSYWRpb0ltYWdlQ29tcG9uZW50IGZyb20gJy4vUmFkaW9JbWFnZUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSYWRpb0ltYWdlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJhZGlvSW1hZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmFkaW9JbWFnZUNvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBjb250cm9sLnBhcmFtc1xuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlck9wdGlvbnMgPSAoKSA9PiBPYmplY3Qua2V5cyhjaG9pY2VzKS5tYXAoKGNob2ljZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIGltYWdlIH0gPSBjaG9pY2VzW2Nob2ljZV1cbiAgICBjb25zdCBidXR0b25DbGFzcyA9IGNsYXNzbmFtZXMoW3sgYWN0aXZlOiBjaG9pY2UgPT09IHZhbHVlIH1dKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uJyBrZXk9e2luZGV4fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoY2hvaWNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17bmFtZSB8fCBgT3B0aW9uICR7Y2hvaWNlfWB9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge25hbWUgJiYgPHNwYW4+e25hbWV9PC9zcGFuPn1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJhZGlvLWltYWdlJz5cbiAgICAgIHtyZW5kZXJPcHRpb25zKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmFkaW9JbWFnZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ltYWdlQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFJhbmdlQ29tcG9uZW50IGZyb20gJy4vUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFuZ2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFuZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmNvbnN0IHsgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmFuZ2VDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB1cGRhdGVWYWx1ZXMoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSggY29udHJvbC5zZXR0aW5nLmdldCgpIClcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIGRlZmF1bHRWYWw6IDE1LFxuICAgIHN0ZXA6IDFcbiAgfVxuICBjb25zdCBjb250cm9sUHJvcHMgPSB7IC4uLmRlZmF1bHRzLCAuLi4oY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgfHwge30pIH1cbiAgY29uc3QgeyBsYWJlbCB9ID0gY29udHJvbC5wYXJhbXNcbiAgY29uc3QgeyBkZWZhdWx0VmFsLCBtaW4sIG1heCwgc3RlcCB9ID0gY29udHJvbFByb3BzXG5cbiAgY29uc3QgdXBkYXRlVmFsdWVzID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtcmFuZ2UtY29udHJvbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgcmVzZXRGYWxsYmFja1ZhbHVlPXtkZWZhdWx0VmFsIHx8ICcnfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBtaW49e21pbiA8IDAgPyBtaW4gOiAwfVxuICAgICAgICAgIG1heD17bWF4IHx8IDEwMH1cbiAgICAgICAgICBzdGVwPXtzdGVwIHx8IDF9XG4gICAgICAgICAgYWxsb3dSZXNldFxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SYW5nZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmFkaW9JY29ucyBmcm9tICcuLi9jb21tb24vUmFkaW9JY29ucydcbmltcG9ydCBSZXNwb25zaXZlQ29udHJvbCBmcm9tICcuLi9jb21tb24vUmVzcG9uc2l2ZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgeyBjaG9pY2VzLCBsYWJlbCB9ID0gY29udHJvbC5wYXJhbXNcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSgnZGVza3RvcCcpXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWx1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNNZW51QWxpZ25tZW50ID1cbiAgICAgIGNvbnRyb2wuaWQuaW5kZXhPZigncHJpbWFyeS1tZW51JykgPiAtMSB8fFxuICAgICAgY29udHJvbC5pZC5pbmRleE9mKCdzZWNvbmRhcnktbWVudScpID4gLTFcbiAgICAvLyBNaWdyYXRlIHByZXZpb3VzbHkgc3RyaW5nIHZhbHVlIGludG8gcmVzcG9uc2l2ZS5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgc2V0VmFsdWUoe1xuICAgICAgICBtb2JpbGU6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHZhbHVlLFxuICAgICAgICB0YWJsZXQ6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHZhbHVlLFxuICAgICAgICBkZXNrdG9wOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGxldCByZWNpZXZlZFZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIE1pZ3JhdGUgcHJldmlvdXNseSBzdHJpbmcgdmFsdWUgaW50byByZXNwb25zaXZlLlxuICAgICAgaWYgKHR5cGVvZiByZWNpZXZlZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZWNpZXZlZFZhbHVlID0ge1xuICAgICAgICAgIG1vYmlsZTogaXNNZW51QWxpZ25tZW50ID8gJ2xlZnQnIDogcmVjaWV2ZWRWYWx1ZSxcbiAgICAgICAgICB0YWJsZXQ6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHJlY2lldmVkVmFsdWUsXG4gICAgICAgICAgZGVza3RvcDogcmVjaWV2ZWRWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIHNldFZhbHVlKHJlY2lldmVkVmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICAgIDxSZXNwb25zaXZlQ29udHJvbCBvbkNoYW5nZT17KGRldmljZSkgPT4gc2V0RGV2aWNlKGRldmljZSl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSYWRpb0ljb25zXG4gICAgICAgIHZhbHVlPXt2YWx1ZVtkZXZpY2VdfVxuICAgICAgICBvcHRpb25zPXtjaG9pY2VzfVxuICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgW2RldmljZV06IG5ld1ZhbFxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQgZnJvbSAnLi9SZXNwb25zaXZlUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVJhbmdlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgbWFwVmFsdWVzICovXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5pbXBvcnQgeyBtYXliZVBhcnNlSnNvbiwgZ2V0SW50VmFsQXNSZXNwb25zaXZlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbidcblxuY29uc3QgeyBSYW5nZUNvbnRyb2wsIEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCBwYXJzZWRWYWx1ZSA9IG1heWJlUGFyc2VKc29uKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgY29uc3QgW2N1cnJlbnREZXZpY2UsIHNldEN1cnJlbnREZXZpY2VdID0gdXNlU3RhdGUoJ2Rlc2t0b3AnKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHBhcnNlZFZhbHVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSWYgYSB2YWx1ZSBpcyBpbnQsIG1ha2UgaXQgcmVzcG9uc2l2ZS5cbiAgICBjb25zdCByZXNwb25zaXZlQ29udmVydGVkID0gZ2V0SW50VmFsQXNSZXNwb25zaXZlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgICBpZiAodmFsdWUgIT09IHJlc3BvbnNpdmVDb252ZXJ0ZWQpIHtcbiAgICAgIHNldFZhbHVlKHJlc3BvbnNpdmVDb252ZXJ0ZWQpXG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSB0cmFuc2xhdGUgaW50IHZhbHVlcyB0byByZXNwb25zaXZlIHZhbHVlcy5cbiAgICAgIGNvbnN0IGluY29taW5nVmFsdWUgPSBnZXRJbnRWYWxBc1Jlc3BvbnNpdmUoZS5kZXRhaWwudmFsdWUpXG5cbiAgICAgIHNldFZhbHVlKG1heWJlUGFyc2VKc29uKGluY29taW5nVmFsdWUpKVxuICAgICAgY29udHJvbC5zZXR0aW5nLnNldChKU09OLnN0cmluZ2lmeShpbmNvbWluZ1ZhbHVlKSlcbiAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCB7IGxhYmVsIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCB7IGhpZGVSZXNwb25zaXZlLCB1bml0cywgZGVmYXVsdFZhbCwgc3RlcCwgbWluLCBtYXggfSA9IGNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzXG5cbiAgY29uc3QgdW5pdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgaWYgKCF1bml0cykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gPEJ1dHRvbiBpc1NtYWxsIGRpc2FibGVkIGNsYXNzTmFtZT0nYWN0aXZlIGFsb25lJz57dW5pdHNbMF19PC9CdXR0b24+XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXRzLm1hcCgodW5pdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyh7IGFjdGl2ZTogdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlICsgJy11bml0J10gPT09IHVuaXQgfSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHsgLi4udmFsdWUgfVxuICAgICAgICAgICAgbmV4dFZhbHVlW2N1cnJlbnREZXZpY2UgKyAnLXVuaXQnXSA9IHVuaXRcbiAgICAgICAgICAgIGlmICh1bml0ICE9PSAnZW0nKSB7XG4gICAgICAgICAgICAgIG5leHRWYWx1ZVtjdXJyZW50RGV2aWNlXSA9IG1hcFZhbHVlcyhcbiAgICAgICAgICAgICAgICBuZXh0VmFsdWVbY3VycmVudERldmljZV0sXG4gICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IHZhbHVlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFZhbHVlKG5leHRWYWx1ZSlcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0dGluZy5zZXQobmV4dFZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWNvbnRyb2wtaGVhZGVyJz5cbiAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICA8UmVzcG9uc2l2ZUNvbnRyb2xcbiAgICAgICAgICBvbkNoYW5nZT17KGRldmljZSkgPT4gc2V0Q3VycmVudERldmljZShkZXZpY2UpfVxuICAgICAgICAgIGhpZGVSZXNwb25zaXZlPXtoaWRlUmVzcG9uc2l2ZSB8fCBmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdW5pdHMnPlxuICAgICAgICAgIHt1bml0QnV0dG9ucygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlcyA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHsgLi4udmFsdWUgfVxuICAgIG5leHRWYWx1ZVtjdXJyZW50RGV2aWNlXSA9IG5ld1ZhbHVlXG4gICAgc2V0VmFsdWUobmV4dFZhbHVlKVxuICAgIGNvbnRyb2wuc2V0dGluZy5zZXQoSlNPTi5zdHJpbmdpZnkobmV4dFZhbHVlKSlcbiAgfVxuXG4gIGxldCBkaXNwbGF5VmFsdWUgPSBwYXJzZUludCh2YWx1ZVtjdXJyZW50RGV2aWNlXSlcbiAgZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlID09PSAwID8gMCA6IChkaXNwbGF5VmFsdWUgfHwgJycpXG4gIGlmIChjb250cm9sLmlkID09PSAnbmV2ZV9ibG9nX2NvdmVyc19taW5faGVpZ2h0Jykge1xuICAgIGNvbnNvbGUubG9nKCdWQUw6JywgY29udHJvbC5zZXR0aW5nLmdldCgpKVxuICAgIGNvbnNvbGUubG9nKCdQQVJTRUQ6JywgcGFyc2VkVmFsdWUpXG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtcmFuZ2UtY29udHJvbCc+XG4gICAgICB7Y29udHJvbEhlYWRlcigpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgcmVzZXRGYWxsYmFja1ZhbHVlPXtkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdfVxuICAgICAgICAgIHZhbHVlPXtkaXNwbGF5VmFsdWV9XG4gICAgICAgICAgbWluPXttaW4gPCAwID8gbWluIDogMH1cbiAgICAgICAgICBtYXg9e21heCB8fCAxMDB9XG4gICAgICAgICAgc3RlcD17c3RlcCB8fCAxfVxuICAgICAgICAgIGFsbG93UmVzZXRcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVmFsdWVzKG5leHRWYWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgc2V0VmFsdWUoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSgnZGVza3RvcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wgZmxleC1jb250ZW50cyc+XG4gICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9J25ldmUtdG9nZ2xlLWNvbnRyb2wnXG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlW2RldmljZV19XG4gICAgICAgIGxhYmVsPXtjb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHsgLi4udmFsdWUgfVxuICAgICAgICAgIG5leHRWYWx1ZVtkZXZpY2VdID0gbmV3VmFsdWVcbiAgICAgICAgICBzZXRWYWx1ZShuZXh0VmFsdWUpXG4gICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXh0VmFsdWUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgIGV4Y2x1ZGVkPXtjb250cm9sLnBhcmFtcy5leGNsdWRlZCB8fCBbXX1cbiAgICAgICAgb25DaGFuZ2U9eyhkZXZpY2UpID0+IHtcbiAgICAgICAgICBzZXREZXZpY2UoZGV2aWNlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFNwYWNpbmdDb21wb25lbnQgZnJvbSAnLi9TcGFjaW5nQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFNwYWNpbmdDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8U3BhY2luZ0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgbG9kYXNoICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlc3BvbnNpdmVDb250cm9sIGZyb20gJy4uL2NvbW1vbi9SZXNwb25zaXZlLmpzJ1xuaW1wb3J0IFNpemluZ0NvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1NpemluZy5qcydcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBtYXBWYWx1ZXMgfSA9IGxvZGFzaFxuXG5jbGFzcyBTcGFjaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBtaW46IC0zMDAsXG4gICAgICBtYXg6IDMwMCxcbiAgICAgIGhpZGVSZXNwb25zaXZlQnV0dG9uczogZmFsc2UsXG4gICAgICB1bml0czogWydweCcsICdlbScsICclJ11cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQYXJhbXMgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycyA/IHtcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRyc1xuICAgIH0gOiBkZWZhdWx0UGFyYW1zXG5cbiAgICBjb25zdCBiYXNlRGVmYXVsdCA9IHtcbiAgICAgIG1vYmlsZTogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIHRhYmxldDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIGRlc2t0b3A6IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAnbW9iaWxlLXVuaXQnOiAncHgnLFxuICAgICAgJ3RhYmxldC11bml0JzogJ3B4JyxcbiAgICAgICdkZXNrdG9wLXVuaXQnOiAncHgnXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdCA/IHtcbiAgICAgIC4uLmJhc2VEZWZhdWx0LFxuICAgICAgLi4ucHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFxuICAgIH0gOiBiYXNlRGVmYXVsdFxuXG4gICAgY29uc3QgZGJWYWwgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCB2YWx1ZSA9IG1lcmdlRGVlcCh0aGlzLmRlZmF1bHRWYWx1ZSwgZGJWYWwpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBsaW5rZWQ6IHRydWUsXG4gICAgICBjdXJyZW50RGV2aWNlOiAnZGVza3RvcCdcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQoKSkge1xuICAgICAgdGhpcy5zdGF0ZS5saW5rZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQgPSB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkLmJpbmQodGhpcylcbiAgICB0aGlzLmdldEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB0aGlzLnVwZGF0ZVZhbHVlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZS5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RvcCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmlnaHQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5ib3R0b21cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsZWZ0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgICB9XG4gICAgXVxuICAgIGNvbnN0IHsgaGlkZVJlc3BvbnNpdmVCdXR0b25zIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICAnbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnLFxuICAgICAgJ25ldmUtc2l6aW5nJ1xuICAgIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udHJvbFxuICAgICAgICAgICAgaGlkZVJlc3BvbnNpdmU9e2hpZGVSZXNwb25zaXZlQnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudERldmljZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlua2VkOiB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkKCkgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+XG4gICAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgIG1pbj17dGhpcy5jb250cm9sUGFyYW1zLm1pbn1cbiAgICAgICAgICBtYXg9e3RoaXMuY29udHJvbFBhcmFtcy5tYXh9XG4gICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2UgKyAnLXVuaXQnXSA9PT1cbiAgICAgICAgICAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdfVxuICAgICAgICAgIGxpbmtlZD17dGhpcy5zdGF0ZS5saW5rZWR9XG4gICAgICAgICAgb25MaW5rZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsaW5rZWQ6ICF0aGlzLnN0YXRlLmxpbmtlZCB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodGhpcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7IHVuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG4gICAgcmV0dXJuIHVuaXRzLm1hcCgodW5pdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZTogc2VsZi5zdGF0ZS52YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2UgK1xuICAgICAgICAgICctdW5pdCddID09PSB1bml0XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0geyAuLi5zZWxmLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArICctdW5pdCddID0gdW5pdFxuICAgICAgICAgICAgaWYgKHVuaXQgIT09ICdlbScpIHtcbiAgICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IG1hcFZhbHVlcyhcbiAgICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdLFxuICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgID57dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHNldFZhbHVlKG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0geyAuLi50aGlzLnN0YXRlLnZhbHVlIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5saW5rZWQpIHtcbiAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0gPSBtYXBWYWx1ZXMoXG4gICAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0sICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IHtcbiAgICAgICAgLi4udmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSxcbiAgICAgICAgW29wdGlvblR5cGVdOiBudW1lcmljVmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gIH1cblxuICBzaG91bGRWYWx1ZXNCZUxpbmtlZCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wLFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0LFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmJvdHRvbSxcbiAgICAgIHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgXVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IHZhbHVlc1swXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGUuZGV0YWlsLnZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuU3BhY2luZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGFjaW5nQ29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250cm9scy5jc3NcIjsiLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBUb2dnbGVDb21wb25lbnQgZnJvbSAnLi9Ub2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgVG9nZ2xlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFRvZ2dsZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY29uc3Qge1xuICBUb2dnbGVDb250cm9sXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgIH0gKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCggbmV3VmFsdWUgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgIGNsYXNzTmFtZT0nbmV2ZS10b2dnbGUtY29udHJvbCdcbiAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMudG9nZ2xlVmFsdWUoIHZhbHVlICl9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLWRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoICFlLmRldGFpbCApIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCBlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCApIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy50b2dnbGVWYWx1ZSggZS5kZXRhaWwudmFsdWUgKVxuICAgIH0gKVxuICB9XG59XG5cblRvZ2dsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFR5cGVmYWNlQ29tcG9uZW50IGZyb20gJy4vVHlwZWZhY2VDb21wb25lbnQuanMnXG5cbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBUeXBlZmFjZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoe1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFR5cGVmYWNlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOdW1iZXJDb250cm9sIGZyb20gJy4uL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IHtcbiAgU2VsZWN0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgVHlwZWZhY2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIGxldCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiA0MDAsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6IDE1LFxuICAgICAgICB0YWJsZXQ6IDE1LFxuICAgICAgICBkZXNrdG9wOiAxNVxuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogMS42LFxuICAgICAgICB0YWJsZXQ6IDEuNixcbiAgICAgICAgZGVza3RvcDogMS42XG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6IDAsXG4gICAgICAgIHRhYmxldDogMCxcbiAgICAgICAgZGVza3RvcDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIXZhbHVlICkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldEVtcHR5VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICggcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMubGVuZ3RoICkge1xuICAgICAgY29uc3QgaW5wdXRfYXR0cnMgPSBKU09OLnBhcnNlKHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzKVxuICAgICAgaWYgKCBpbnB1dF9hdHRycy5kZWZhdWx0X2lzX2VtcHR5ICkge1xuICAgICAgICBkZWZhdWx0UGFyYW1zID0gdGhpcy5nZXRFbXB0eURlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBpcyBzZWxlY3RlZC5cbiAgICB2YWx1ZS5saW5lSGVpZ2h0ID0gdmFsdWUubGluZUhlaWdodCB8fCBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHRcbiAgICB2YWx1ZS5saW5lSGVpZ2h0LnN1ZmZpeCA9IHZhbHVlLmxpbmVIZWlnaHQuc3VmZml4IHx8IGRlZmF1bHRQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhcblxuICAgIHRoaXMuY29udHJvbFBhcmFtcyA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzID8ge1xuICAgICAgLi4uZGVmYXVsdFBhcmFtcyxcbiAgICAgIC4uLkpTT04ucGFyc2UocHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMpXG4gICAgfSA6IGRlZmF1bHRQYXJhbXNcblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN1ZmZpeCBmb3IgbGluZSBoZWlnaHQuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4ID0gdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4IHx8XG4gICAgICBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudERldmljZTogJ2Rlc2t0b3AnLFxuICAgICAgZm9udFNpemU6IHZhbHVlLmZvbnRTaXplLFxuICAgICAgbGluZUhlaWdodDogdmFsdWUubGluZUhlaWdodCxcbiAgICAgIGxldHRlclNwYWNpbmc6IHZhbHVlLmxldHRlclNwYWNpbmcsXG4gICAgICBmb250V2VpZ2h0OiB2YWx1ZS5mb250V2VpZ2h0LFxuICAgICAgdGV4dFRyYW5zZm9ybTogdmFsdWUudGV4dFRyYW5zZm9ybSxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGb250V2VpZ2h0ID0gdGhpcy5yZW5kZXJGb250V2VpZ2h0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0gPSB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRm9udFNpemUgPSB0aGlzLnJlbmRlckZvbnRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlckxpbmVIZWlnaHQgPSB0aGlzLnJlbmRlckxpbmVIZWlnaHQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZyA9IHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZy5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVWYWx1ZXMgPSB0aGlzLnVwZGF0ZVZhbHVlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRFbXB0eVZhbHVlKCBwcm9wID0gJycgKSB7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9IHtcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJyxcbiAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVIZWlnaHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyU3BhY2luZzoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub25lJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuICAgIGlmICggcHJvcCAmJiBlbXB0eVZhbHVlW3Byb3BdICkge1xuICAgICAgcmV0dXJuIGVtcHR5VmFsdWVbcHJvcF1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VmFsdWVcbiAgfVxuXG4gIGdldEVtcHR5RGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiAnbm9uZScsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdHlwZWZhY2UtY29udHJvbCBuZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAge3RoaXMucmVuZGVyVGV4dFRyYW5zZm9ybSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvbnRXZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb250U2l6ZSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckxpbmVIZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMZXR0ZXJTcGFjaW5nKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoe1xuICAgICAgLi4udGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KCksXG4gICAgICAuLi52YWx1ZSxcbiAgICAgIGZsYWc6ICF0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKS5mbGFnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckZvbnRXZWlnaHQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtaW5saW5lIGZvbnQtd2VpZ2h0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAge19fKCdXZWlnaHQnLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9udFdlaWdodH1cbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnbm9uZScsIGxhYmVsOiBfXyggJ05vbmUnLCAnbmV2ZScgKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDIwMCwgbGFiZWw6ICcyMDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAzMDAsIGxhYmVsOiAnMzAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNDAwLCBsYWJlbDogJzQwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDUwMCwgbGFiZWw6ICc1MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA2MDAsIGxhYmVsOiAnNjAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNzAwLCBsYWJlbDogJzcwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDgwMCwgbGFiZWw6ICc4MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA5MDAsIGxhYmVsOiAnOTAwJyB9XG4gICAgICAgICAgXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGZvbnRXZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250V2VpZ2h0IH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRXZWlnaHQgfSlcbiAgICAgICAgICAgIGlmICggZm9udFdlaWdodCA9PT0gJ25vbmUnICYmIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMucmVmcmVzaF9vbl9yZXNldCApIHtcbiAgICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGV4dFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1pbmxpbmUgdGV4dC10cmFuc2Zvcm0nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ1RyYW5zZm9ybScsICduZXZlJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0VHJhbnNmb3JtfVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHsgdmFsdWU6ICdub25lJywgbGFiZWw6IF9fKCdOb25lJywgJ25ldmUnKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2NhcGl0YWxpemUnLCBsYWJlbDogX18oJ0NhcGl0YWxpemUnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnbG93ZXJjYXNlJywgbGFiZWw6IF9fKCdMb3dlcmNhc2UnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAndXBwZXJjYXNlJywgbGFiZWw6IF9fKCdVcHBlcmNhc2UnLCAnbmV2ZScpIH1cbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodGV4dFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRUcmFuc2Zvcm0gfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgdGV4dFRyYW5zZm9ybSB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb250U2l6ZSgpIHtcbiAgICBsZXQgeyBmb250U2l6ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgc2l6ZV9kZWZhdWx0LCBzaXplX3VuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcbiAgICBpZiAoICFmb250U2l6ZSApIHtcbiAgICAgIGZvbnRTaXplID0gdGhpcy5nZXRFbXB0eVZhbHVlKCdmb250U2l6ZScgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdmb250LXNpemUnXG4gICAgICAgIGxhYmVsPXtfXygnRm9udCBTaXplJywgJ25ldmUnKX1cbiAgICAgICAgZGVmYXVsdD17c2l6ZV9kZWZhdWx0W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICB2YWx1ZT17Zm9udFNpemVbY3VycmVudERldmljZV19XG4gICAgICAgIHN0ZXA9e2ZvbnRTaXplLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9PT0gJ2VtJyA/IDAuMSA6IDF9XG4gICAgICAgIHVuaXRzPXtzaXplX3VuaXRzfVxuICAgICAgICBhY3RpdmVVbml0PXtmb250U2l6ZS5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIGhhc1Jlc3BvbnNpdmVcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvbnRTaXplXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSB2YWxcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdFtjdXJyZW50RGV2aWNlXVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJMaW5lSGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgbGluZV9oZWlnaHRfZGVmYXVsdCwgbGluZV9oZWlnaHRfdW5pdHMgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxpbmVIZWlnaHQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsaW5lSGVpZ2h0ICkge1xuICAgICAgbGluZUhlaWdodCA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGluZUhlaWdodCcgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsaW5lLWhlaWdodCdcbiAgICAgICAgbGFiZWw9e19fKCdMaW5lIEhlaWdodCcsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgZGVmYXVsdD17bGluZV9oZWlnaHRfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xpbmVIZWlnaHRbY3VycmVudERldmljZV19XG4gICAgICAgIHVuaXRzPXtsaW5lX2hlaWdodF91bml0c31cbiAgICAgICAgYWN0aXZlVW5pdD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIG1heD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV0gPT09ICdlbScgPyA0IDogMjAwfVxuICAgICAgICBtaW49e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC41IDogMX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZUhlaWdodFxuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4ID0gdmFsdWUuc3VmZml4IHx8IGxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gbGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IGxpbmVfaGVpZ2h0X2RlZmF1bHRbY3VycmVudERldmljZV1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGluZUhlaWdodDogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgaWYgKCB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLnJlZnJlc2hfb25fcmVzZXQgKSB7XG4gICAgICAgICAgICB3cC5jdXN0b21pemUucHJldmlld2VyLnJlZnJlc2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZWREZXZpY2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTGV0dGVyU3BhY2luZygpIHtcbiAgICBjb25zdCB7IGxldHRlcl9zcGFjaW5nX2RlZmF1bHQgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxldHRlclNwYWNpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsZXR0ZXJTcGFjaW5nICkge1xuICAgICAgbGV0dGVyU3BhY2luZyA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGV0dGVyU3BhY2luZycgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsZXR0ZXItc3BhY2luZydcbiAgICAgICAgbGFiZWw9e19fKCdMZXR0ZXIgU3BhY2luZycsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgZGVmYXVsdD17bGV0dGVyX3NwYWNpbmdfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xldHRlclNwYWNpbmcgJiYgbGV0dGVyU3BhY2luZ1tjdXJyZW50RGV2aWNlXSA/IGxldHRlclNwYWNpbmdbY3VycmVudERldmljZV0gOiAnJ31cbiAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgbWluPXstNX1cbiAgICAgICAgdW5pdHM9e1sncHgnXX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGV0dGVyU3BhY2luZ1xuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsZXR0ZXJTcGFjaW5nXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuVHlwZWZhY2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZWZhY2VDb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9