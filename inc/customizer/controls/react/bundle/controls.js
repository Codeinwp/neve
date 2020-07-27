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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          isDefault: self.state.type !== type,
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
            isDefault: true,
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
      this.props.control.setting.set(_objectSpread({}, this.props.control.setting.get(), {}, newValues));
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    _this.defaultVals = props.control.params.defaultVals ? _objectSpread({}, props.control.params.defaultVals, {}, defaultsFromControl) : defaultsFromControl;
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
            newVal = _objectSpread({}, _this2.state.borderRadius, _defineProperty({}, optionType, numericValue));
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
            newVal = _objectSpread({}, _this2.state.borderWidth, _defineProperty({}, optionType, numericValue));
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

        _this5.setState(_objectSpread({}, _this5.state, {}, e.detail.value));

        _this5.updateValues(e.detail.value);
      });
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      this.props.control.setting.set(_objectSpread({}, this.props.control.setting.get(), {}, value));
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* jshint esversion: 6 */

/* global wp */


var Component = wp.element.Component;

var ColorComponent = /*#__PURE__*/function (_Component) {
  _inherits(ColorComponent, _Component);

  var _super = _createSuper(ColorComponent);

  function ColorComponent(props) {
    var _this;

    _classCallCheck(this, ColorComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    _this.state = {
      value: value,
      popoverOpen: false
    };
    _this.defaultValue = props.control.params["default"] || '';
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColorComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this2.updateValues(e.detail.value);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: "neve-white-background-control neve-color-control"
      }, /*#__PURE__*/React.createElement(_common_ColorControl_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: this.props.control.params.label,
        selectedColor: this.state.value,
        onChange: function onChange(value) {
          _this3.updateValues(value);
        }
      }));
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      this.setState({
        value: value
      });
      this.props.control.setting.set(value);
    }
  }]);

  return ColorComponent;
}(Component);

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global wp */


var _wp$components = wp.components,
    ColorPicker = _wp$components.ColorPicker,
    Button = _wp$components.Button,
    Dropdown = _wp$components.Dropdown;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;

var ColorControl = /*#__PURE__*/function (_Component) {
  _inherits(ColorControl, _Component);

  var _super = _createSuper(ColorControl);

  function ColorControl() {
    _classCallCheck(this, ColorControl);

    return _super.apply(this, arguments);
  }

  _createClass(ColorControl, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          label = _this$props.label,
          selectedColor = _this$props.selectedColor;
      var toggle = null;
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-control-header neve-color-component"
      }, label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, label), /*#__PURE__*/React.createElement(Dropdown, {
        renderToggle: function renderToggle(_ref) {
          var isOpen = _ref.isOpen,
              onToggle = _ref.onToggle;
          toggle = onToggle;
          return /*#__PURE__*/React.createElement(Button, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['is-secondary is-button', {
              'is-empty': !selectedColor
            }]),
            onClick: onToggle,
            "aria-expanded": isOpen,
            style: {
              backgroundColor: selectedColor
            }
          });
        },
        renderContent: function renderContent() {
          return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(ColorPicker, {
            color: selectedColor,
            onChangeComplete: function onChangeComplete(value) {
              _this.props.onChange(value.hex);
            },
            disableAlpha: true
          }), selectedColor && /*#__PURE__*/React.createElement(Button, {
            className: "clear",
            isPrimary: true,
            onClick: function onClick() {
              _this.props.onChange('');

              toggle();
            }
          }, __('Clear', 'neve')));
        }
      }));
    }
  }]);

  return ColorControl;
}(Component);

ColorControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global wp */

/* jshint esversion: 6 */


var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Tooltip = _wp$components.Tooltip,
    IconButton = _wp$components.IconButton,
    Button = _wp$components.Button;

var RadioIcons = /*#__PURE__*/function (_Component) {
  _inherits(RadioIcons, _Component);

  var _super = _createSuper(RadioIcons);

  function RadioIcons(props) {
    var _this;

    _classCallCheck(this, RadioIcons);

    _this = _super.call(this, props);
    _this.state = {
      value: 'none'
    };
    _this.getButtons = _this.getButtons.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioIcons, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-radio-icons"
      }, this.getButtons());
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      var _this2 = this;

      var options = this.props.options;
      return Object.keys(options).map(function (type, index) {
        return /*#__PURE__*/React.createElement(Fragment, {
          key: index
        }, options[type].icon === 'text' && /*#__PURE__*/React.createElement(Button, {
          key: index,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([{
            active: _this2.props.value === type
          }, 'is-text']),
          onClick: function onClick() {
            _this2.props.onChange(type);
          }
        }, options[type].tooltip), options[type].icon !== 'text' && /*#__PURE__*/React.createElement(Tooltip, {
          text: options[type].tooltip,
          key: index
        }, /*#__PURE__*/React.createElement(IconButton, {
          "aria-label": options[type].tooltip,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            active: _this2.props.value === type
          }),
          icon: options[type].icon,
          onClick: function onClick() {
            _this2.props.onChange(type);
          }
        })));
      });
    }
  }]);

  return RadioIcons;
}(Component);

RadioIcons.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global wp */



var __ = wp.i18n.__;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
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
      }, /*#__PURE__*/React.createElement(IconButton, {
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
      }, /*#__PURE__*/React.createElement(IconButton, {
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    _this.controlParams = props.control.params.input_attrs ? _objectSpread({}, defaultParams, {}, JSON.parse(props.control.params.input_attrs)) : defaultParams;
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
          className: "font-group-header"
        }, key));
        fontGroups[key].map(function (font, index) {
          if (index < self.state.loadUntil) {
            options.push( /*#__PURE__*/React.createElement("li", {
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
        options.push( /*#__PURE__*/React.createElement("li", {
          className: "load-more"
        }, /*#__PURE__*/React.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default.a, {
          onChange: function onChange(isVisible) {
            if (isVisible) {
              _this2.setState({
                loadUntil: self.state.loadUntil + 5,
                delayFontInclusion: false
              });
            }
          }
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
      }), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick(e) {
          e.stopPropagation();

          _this2.setState({
            isVisible: false
          });
        },
        isLink: true,
        isDestructive: true
      }, /*#__PURE__*/React.createElement(Dashicon, {
        icon: "no"
      })))), /*#__PURE__*/React.createElement("ul", {
        className: "neve-fonts-list"
      }, options.length ? options : /*#__PURE__*/React.createElement("li", {
        className: "no-result"
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
        isDefault: true,
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
        onClickOutside: function onClickOutside() {
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
  selected: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
/* jshint esversion: 6 */

/* global NeveReactCustomize, wp */















wp.customize.controlConstructor.neve_toggle_control = _toggle_Control_js__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"];
wp.customize.controlConstructor.neve_responsive_toggle_control = _responsive_toggle_Control_js__WEBPACK_IMPORTED_MODULE_2__["ResponsiveToggleControl"];
wp.customize.controlConstructor.neve_background_control = _background_Control_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundControl"];
wp.customize.controlConstructor.neve_spacing = _spacing_Control_js__WEBPACK_IMPORTED_MODULE_4__["SpacingControl"];
wp.customize.controlConstructor.neve_typeface_control = _typeface_Control_js__WEBPACK_IMPORTED_MODULE_5__["TypefaceControl"];
wp.customize.controlConstructor.neve_font_family_control = _font_family_Control_js__WEBPACK_IMPORTED_MODULE_6__["FontFamilyControl"];
wp.customize.controlConstructor.neve_radio_buttons_control = _radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_7__["RadioButtonsControl"];
wp.customize.controlConstructor.neve_button_appearance = _button_appearance_Control_js__WEBPACK_IMPORTED_MODULE_8__["ButtonAppearanceControl"];
wp.customize.controlConstructor.neve_range_control = _range_Control_js__WEBPACK_IMPORTED_MODULE_9__["RangeControl"];
wp.customize.controlConstructor.neve_responsive_range_control = _responsive_range_Control_js__WEBPACK_IMPORTED_MODULE_10__["ResponsiveRangeControl"];
wp.customize.controlConstructor.neve_color_control = _color_Control_js__WEBPACK_IMPORTED_MODULE_11__["ColorControl"];
wp.customize.controlConstructor.neve_presets_selector = _presets_selector_Control_js__WEBPACK_IMPORTED_MODULE_12__["PresetsSelectorControl"];
wp.customize.controlConstructor.neve_multiselect = _multiselect_Control_js__WEBPACK_IMPORTED_MODULE_13__["MultiSelectControl"];
wp.customize.controlConstructor.neve_responsive_radio_buttons_control = _responsive_radio_buttons_Control_js__WEBPACK_IMPORTED_MODULE_14__["ResponsiveRadioButtonsControl"];
window.addEventListener('load', function () {
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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* jshint esversion: 6 */

/* global wp */




var __ = wp.i18n.__;
var Component = wp.element.Component;

var RadioButtonsComponent = /*#__PURE__*/function (_Component) {
  _inherits(RadioButtonsComponent, _Component);

  var _super = _createSuper(RadioButtonsComponent);

  function RadioButtonsComponent(props) {
    var _this;

    _classCallCheck(this, RadioButtonsComponent);

    _this = _super.call(this, props);
    _this.state = {
      value: props.control.setting.get()
    };
    _this.getChoices = _this.getChoices.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioButtonsComponent, [{
    key: "getChoices",
    value: function getChoices() {
      var _this$props$control$p = this.props.control.params,
          is_for = _this$props$control$p.is_for,
          choices = _this$props$control$p.choices;

      if (!is_for) {
        return choices;
      }

      if (is_for === 'logo') {
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
      }

      if (is_for === 'menu') {
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
      }

      if (is_for === 'account_component') {
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
      }

      if (is_for === 'cart_component') {
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
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$control$p2 = this.props.control.params,
          label = _this$props$control$p2.label,
          large_buttons = _this$props$control$p2.large_buttons;
      var value = this.state.value;
      var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(['neve-white-background-control', {
        'large-buttons': large_buttons === true
      }]);
      return /*#__PURE__*/React.createElement("div", {
        className: wrapClasses
      }, label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, label), /*#__PURE__*/React.createElement(_common_RadioIcons__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: value,
        options: this.getChoices(),
        onChange: function onChange(value) {
          _this2.updateValue(value);
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

        _this3.updateValue(e.detail.value);
      });
    }
  }, {
    key: "updateValue",
    value: function updateValue(newVal) {
      this.setState({
        value: newVal
      });
      this.props.control.setting.set(newVal);
    }
  }]);

  return RadioButtonsComponent;
}(Component);

RadioButtonsComponent.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RadioButtonsComponent);

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* jshint esversion: 6 */

/* global wp */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    Tooltip = _wp$components.Tooltip,
    IconButton = _wp$components.IconButton;
var Component = wp.element.Component;

var RangeComponent = /*#__PURE__*/function (_Component) {
  _inherits(RangeComponent, _Component);

  var _super = _createSuper(RangeComponent);

  function RangeComponent(props) {
    var _this;

    _classCallCheck(this, RangeComponent);

    _this = _super.call(this, props);
    var value = props.control.setting.get();
    _this.state = {
      value: value
    };
    var defaults = {
      min: 0,
      max: 100,
      defaultVal: 15,
      step: 1
    };
    _this.controlProps = _objectSpread({}, defaults, {}, props.control.params.input_attrs || {});
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    _this.renderReset = _this.renderReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RangeComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var label = this.props.control.params.label;
      var _this$controlProps = this.controlProps,
          defaultVal = _this$controlProps.defaultVal,
          min = _this$controlProps.min,
          max = _this$controlProps.max,
          step = _this$controlProps.step;
      var value = this.state.value;
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-white-background-control neve-range-control"
      }, /*#__PURE__*/React.createElement("div", {
        className: "neve-control-header"
      }, label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, label)), /*#__PURE__*/React.createElement("div", {
        className: "range-wrap"
      }, /*#__PURE__*/React.createElement(RangeControl, {
        value: value,
        initialPosition: defaultVal,
        onChange: function onChange(value) {
          _this2.updateValues(value);
        },
        min: min,
        max: max,
        step: step
      }), this.renderReset()));
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      this.setState({
        value: value
      });
      this.props.control.setting.set(value);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this3.updateValues(e.detail.value);
      });
    }
  }, {
    key: "renderReset",
    value: function renderReset() {
      var _this4 = this;

      var defaultVal = this.controlProps.defaultVal;
      var value = this.state.value;

      if (!defaultVal && defaultVal !== 0) {
        return null;
      }

      if (defaultVal === value) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "tooltip-reset",
        text: __('Reset Value', 'neve')
      }, /*#__PURE__*/React.createElement(IconButton, {
        key: "reset-icon",
        icon: "image-rotate",
        className: "reset",
        onClick: function onClick() {
          return _this4.updateValues(defaultVal);
        }
      }));
    }
  }]);

  return RangeComponent;
}(Component);

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
/* harmony import */ var _common_svg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/svg.js */ "./src/common/svg.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* jshint esversion: 6 */

/* global wp */





var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var ResponsiveRadioButtonsComponent = function ResponsiveRadioButtonsComponent(_ref) {
  var control = _ref.control;
  var _control$params = control.params,
      choices = _control$params.choices,
      label = _control$params.label;

  var _control$setting$get = control.setting.get(),
      _control$setting$get2 = _slicedToArray(_control$setting$get, 2),
      value = _control$setting$get2[0],
      setValue = _control$setting$get2[1];

  var _useState = useState('desktop'),
      _useState2 = _slicedToArray(_useState, 2),
      device = _useState2[0],
      setDevice = _useState2[1];

  var updateValue = function updateValue(newValue) {
    setValue(newValue);
    control.setting.set(newValue);
  };

  useEffect(function () {
    if (typeof value === 'string') {
      console.log('Old Value:', value);
      setValue({
        mobile: value,
        desktop: value,
        tablet: value
      });
    }

    document.addEventListener('neve-changed-customizer-value', function (e) {
      if (!e.detail) return false;
      if (e.detail.id !== control.id) return false;
      updateValue(e.detail.value);
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
    onChange: function onChange(value) {
      updateValue(value);
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
/* harmony import */ var _common_Responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Responsive */ "./src/common/Responsive.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "./src/common/common.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* jshint esversion: 6 */

/* global wp, mapValues */




var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip,
    IconButton = _wp$components.IconButton;
var Component = wp.element.Component;

var ResponsiveRangeComponent = /*#__PURE__*/function (_Component) {
  _inherits(ResponsiveRangeComponent, _Component);

  var _super = _createSuper(ResponsiveRangeComponent);

  function ResponsiveRangeComponent(props) {
    var _this;

    _classCallCheck(this, ResponsiveRangeComponent);

    _this = _super.call(this, props);
    _this.state = {
      value: Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["maybeParseJson"])(props.control.setting.get()),
      currentDevice: 'desktop'
    };
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    _this.renderControlHeader = _this.renderControlHeader.bind(_assertThisInitialized(_this));
    _this.getButtons = _this.getButtons.bind(_assertThisInitialized(_this));
    _this.renderReset = _this.renderReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResponsiveRangeComponent, [{
    key: "getButtons",
    value: function getButtons() {
      var units = this.props.control.params.input_attrs.units;

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
        var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
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
    key: "renderControlHeader",
    value: function renderControlHeader() {
      var _this2 = this;

      var label = this.props.control.params.label;
      var hideResponsive = this.props.control.params.input_attrs.hideResponsive;
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-control-header"
      }, label && /*#__PURE__*/React.createElement("span", {
        className: "customize-control-title"
      }, label), /*#__PURE__*/React.createElement(_common_Responsive__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(currentDevice) {
          return _this2.setState({
            currentDevice: currentDevice
          });
        },
        hideResponsive: hideResponsive || false
      }), /*#__PURE__*/React.createElement("div", {
        className: "neve-units"
      }, this.getButtons()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          currentDevice = _this$state.currentDevice,
          value = _this$state.value;
      var _this$props$control$p = this.props.control.params.input_attrs,
          step = _this$props$control$p.step,
          min = _this$props$control$p.min,
          max = _this$props$control$p.max;
      return /*#__PURE__*/React.createElement("div", {
        className: "neve-white-background-control neve-range-control"
      }, this.renderControlHeader(), /*#__PURE__*/React.createElement("div", {
        className: "range-wrap"
      }, /*#__PURE__*/React.createElement(RangeControl, {
        value: parseInt(value[currentDevice]),
        initialPosition: 0,
        onChange: function onChange(value) {
          _this3.updateValues(value);
        },
        min: min || 0,
        step: step || 1,
        max: max || 100
      }), this.renderReset()));
    }
  }, {
    key: "renderReset",
    value: function renderReset() {
      var _this4 = this;

      var defaultVal = this.props.control.params.input_attrs.defaultVal;
      var _this$state2 = this.state,
          currentDevice = _this$state2.currentDevice,
          value = _this$state2.value;

      if (!defaultVal) {
        return null;
      }

      if (defaultVal[currentDevice] === value[currentDevice]) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Tooltip, {
        key: "tooltip-reset",
        text: __('Reset Value', 'neve')
      }, /*#__PURE__*/React.createElement(IconButton, {
        key: "reset-icon",
        icon: "image-rotate",
        className: "reset",
        onClick: function onClick() {
          return _this4.updateValues(defaultVal[currentDevice]);
        }
      }));
    }
  }, {
    key: "updateValues",
    value: function updateValues(value) {
      var currentDevice = this.state.currentDevice;
      this.setState({
        value: _objectSpread({}, this.state.value, _defineProperty({}, currentDevice, value))
      });
      this.props.control.setting.set(JSON.stringify(_objectSpread({}, Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["maybeParseJson"])(this.props.control.setting.get()), _defineProperty({}, currentDevice, value))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      var control = this.props.control; // If a value is int, make it responsive.

      var value = Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["getIntValAsResponsive"])(control.setting.get());

      if (this.state.value !== value) {
        this.setState({
          value: value
        });
      }

      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false; // Make sure we translate int values to responsive values.

        var incomingValue = Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["getIntValAsResponsive"])(e.detail.value);

        _this5.setState({
          value: incomingValue
        });

        _this5.props.control.setting.set(JSON.stringify(incomingValue));
      });
    }
  }]);

  return ResponsiveRangeComponent;
}(Component);

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    _this.controlParams = props.control.params.input_attrs ? _objectSpread({}, defaultParams, {}, props.control.params.input_attrs) : defaultParams;
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
    _this.defaultValue = props.control.params["default"] ? _objectSpread({}, baseDefault, {}, props.control.params["default"]) : baseDefault;
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
        value[this.state.currentDevice] = _objectSpread({}, value[this.state.currentDevice], _defineProperty({}, optionType, numericValue));
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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    _this.controlParams = props.control.params.input_attrs ? _objectSpread({}, defaultParams, {}, JSON.parse(props.control.params.input_attrs)) : defaultParams; // Added Later. Make sure we have a suffix for line height.

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
      this.props.control.setting.set(_objectSpread({}, this.props.control.setting.get(), {}, value, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC12aXNpYmlsaXR5LXNlbnNvci9kaXN0L3Zpc2liaWxpdHktc2Vuc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL0JhY2tncm91bmRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IvQ29sb3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvckNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUmFkaW9JY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9TaW5nbGVTaXppbmdJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZC1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC1mYW1pbHkvRm9udFByZXZpZXdMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvTXVsdGlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMtc2VsZWN0b3IvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy1zZWxlY3Rvci9QcmVzZXRzU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9ucy9SYWRpb0J1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL1JhbmdlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXJhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS1yYWRpby1idXR0b25zL1Jlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtcmFuZ2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS1yYW5nZS9SZXNwb25zaXZlUmFuZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtdG9nZ2xlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtdG9nZ2xlL1Jlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYWNpbmcvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhY2luZy9TcGFjaW5nQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlL1RvZ2dsZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZWZhY2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZWZhY2UvVHlwZWZhY2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiTWVkaWFVcGxvYWQiLCJibG9ja0VkaXRvciIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlJhbmdlQ29udHJvbCIsIkZvY2FsUG9pbnRQaWNrZXIiLCJEYXNoaWNvbiIsIlRvZ2dsZUNvbnRyb2wiLCJQbGFjZWhvbGRlciIsIkJhY2tncm91bmRDb21wb25lbnQiLCJwcm9wcyIsInZhbHVlIiwiY29udHJvbCIsInNldHRpbmciLCJnZXQiLCJzdGF0ZSIsInR5cGUiLCJpbWFnZVVybCIsImZvY3VzUG9pbnQiLCJ4IiwieSIsImNvbG9yVmFsdWUiLCJvdmVybGF5Q29sb3JWYWx1ZSIsIm92ZXJsYXlPcGFjaXR5IiwiZml4ZWQiLCJ1c2VGZWF0dXJlZCIsInR5cGVzIiwibGFiZWxzIiwiY29sb3IiLCJpbWFnZSIsImJ1dHRvbnMiLCJzZWxmIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiZSIsInVwZGF0ZVNldHRpbmciLCJwYXJhbXMiLCJsYWJlbCIsImdldEJ1dHRvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZURhdGEiLCJ1cmwiLCJvcGVuIiwidmFsIiwibmV3UG9pbnQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldGFpbCIsImlkIiwibmV3VmFsdWVzIiwic2V0U3RhdGUiLCJzZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicmVuZGVyIiwiQmFja2dyb3VuZENvbnRyb2wiLCJjdXN0b21pemUiLCJDb250cm9sIiwiZXh0ZW5kIiwicmVuZGVyQ29udGVudCIsImNvbnRhaW5lciIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJsb2Rhc2giLCJtYXBWYWx1ZXMiLCJCdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50IiwiZGVmYXVsdHNGcm9tQ29udHJvbCIsImJvcmRlclJhZGl1cyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImJvcmRlcldpZHRoIiwiZGVmYXVsdFZhbHMiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEhvdmVyIiwidGV4dCIsInRleHRIb3ZlciIsInJhZGl1c0xpbmtlZCIsIndpZHRoTGlua2VkIiwiaXNMaW5rZWQiLCJyZW5kZXJCb3JkZXJDb250cm9scyIsImJpbmQiLCJyZW5kZXJUeXBlQ29udHJvbHMiLCJyZW5kZXJDb2xvcnMiLCJyYWRpdXNPcHRpb25zIiwid2lkdGhPcHRpb25zIiwib3B0aW9uVHlwZSIsIm51bWVyaWNWYWx1ZSIsIm5ld1ZhbCIsInVwZGF0ZVZhbHVlcyIsInNldHRpbmdzIiwibm9ybWFsIiwiY29udHJvbHMiLCJob3ZlciIsIm5vX2hvdmVyIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xTbHVnIiwiZmlsbCIsInRvb2x0aXAiLCJpY29uIiwib3V0bGluZSIsInIiLCJ3IiwidmFsdWVzIiwiZXZlcnkiLCJCdXR0b25BcHBlYXJhbmNlQ29udHJvbCIsIkNvbG9yQ29tcG9uZW50IiwicG9wb3Zlck9wZW4iLCJkZWZhdWx0VmFsdWUiLCJDb2xvckNvbnRyb2wiLCJDb2xvclBpY2tlciIsIkRyb3Bkb3duIiwic2VsZWN0ZWRDb2xvciIsInRvZ2dsZSIsImlzT3BlbiIsIm9uVG9nZ2xlIiwiY2xhc3NuYW1lcyIsIm9uQ2hhbmdlIiwiaGV4Iiwic3RyaW5nIiwiZnVuYyIsIk51bWJlckNvbnRyb2wiLCJ1bml0cyIsImNsYXNzTmFtZSIsImhhc1Jlc3BvbnNpdmUiLCJjdXJyZW50RGV2aWNlIiwib25DaGFuZ2VkRGV2aWNlIiwibWF4IiwibWluIiwic3RlcCIsIm9uUmVzZXQiLCJsZW5ndGgiLCJ1bml0IiwiYnV0dG9uQ2xhc3MiLCJhY3RpdmUiLCJhY3RpdmVVbml0Iiwib25Vbml0Q2hhbmdlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJib29sIiwiVG9vbHRpcCIsIkljb25CdXR0b24iLCJSYWRpb0ljb25zIiwib3B0aW9ucyIsIlJlc3BvbnNpdmVDb250cm9sIiwidmlldyIsImxpbmtSZXNwb25zaXZlQnV0dG9ucyIsImRldmljZXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiZXhjbHVkZWQiLCJkZXZpY2VNYXAiLCJrZXkiLCJpbmNsdWRlcyIsImNvbnRyb2xMYWJlbCIsImhpZGVSZXNwb25zaXZlIiwiZGV2aWNlIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGlsZHJlbiIsInByZXZpZXdlZERldmljZSIsImNoYW5nZVZpZXdUeXBlIiwiYW55IiwiU2luZ2xlU2l6aW5nSW5wdXQiLCJ0YXJnZXQiLCJTaXppbmdDb250cm9sIiwiaGFzU2V0VmFsdWVzIiwibGlua0J1dHRvbiIsIm5vTGlua2luZyIsImxpbmtlZCIsIm9uTGlua2VkIiwid3JhcENsYXNzZXMiLCJpIiwibiIsImRlZmF1bHRzIiwiZmlsdGVyIiwib3B0aW9uIiwibWF5YmVQYXJzZUpzb24iLCJpbnB1dCIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiaXNPYmplY3QiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWVyZ2VEZWVwIiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiZ2V0SW50VmFsQXNSZXNwb25zaXZlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU1ZHIiwibG9nb09ubHkiLCJsb2dvVG9wVGl0bGUiLCJsb2dvVGl0bGUiLCJ0aXRsZUxvZ28iLCJweCIsImVtIiwicGVyY2VudCIsImJ1dHRvbkZpbGwiLCJidXR0b25PdXRsaW5lIiwibWVudVBsYWluIiwibWVudUZpbGxlZCIsIm1lbnVVbmRlcmxpbmUiLCJtZW51T3ZlcmxpbmUiLCJteUFjY291bnRVc2Vyc1NvbGlkIiwibXlBY2NvdW50VXNlcnNGaXJlbmRzU29saWQiLCJteUFjY291bnRVc2VyU29saWQiLCJteUFjY291bnRVc2VyUmVndWxhciIsIm15QWNjb3VudFVzZXJUYWdTb2xpZCIsIm15QWNjb3VudFVzZXJBbHRTb2xpZCIsIm15QWNjb3VudFVzZXJBdmF0YXIiLCJteUFjY291bnROb25lIiwiY2FydEljb25TdHlsZTEiLCJjYXJ0SWNvblN0eWxlMiIsImNhcnRJY29uU3R5bGUzIiwiY2FydEljb25TdHlsZTQiLCJjYXJ0SWNvblN0eWxlNSIsImNhcnRJY29uU3R5bGU2IiwiRHJvcGRvd25NZW51IiwiTWVudUdyb3VwIiwiTWVudUl0ZW0iLCJEeW5hbWljRmllbGRJbnNlcnRlciIsImdldE9wdGlvbnMiLCJvblNlbGVjdCIsImFsbG93ZWRPcHRpb25zVHlwZXMiLCJhbGxPcHRpb25zIiwiTmV2ZVJlYWN0Q3VzdG9taXplIiwiZHluYW1pY1RhZ3MiLCJmb3JFYWNoIiwib3B0aW9uR3JvdXAiLCJzbHVnIiwiaW5pdCIsImZpZWxkU2VsZWN0aW9uIiwiY29udHJvbElkIiwiZHluYW1pY0NvbnRyb2xXcmFwIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsInN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25FbmQiLCJtYWdpY1RhZyIsImdyb3VwIiwiYWRkVG9GaWVsZCIsInRhZyIsInN1YnN0cmluZyIsImZvY3VzIiwiRXZlbnQiLCJGb250RmFtaWx5Q29udHJvbCIsIlR5cGVmYWNlQ29tcG9uZW50IiwiZm9udEZhbWlseSIsImZvbnRGYW1pbHlTb3VyY2UiLCJkZWZhdWx0UGFyYW1zIiwiZGVmYXVsdF9pc19pbmhlcml0IiwiY29udHJvbFBhcmFtcyIsImlucHV0X2F0dHJzIiwiZm9udCIsInR5cGVraXRTbHVncyIsInVwZGF0ZUNvbnRyb2wiLCJtYXliZV9nZXRfdHlwZWtpdF9mb250Iiwic2V0VGltZW91dCIsInByZXZpZXdlciIsInNlbmQiLCJpbmhlcml0IiwiUG9wb3ZlciIsIlRleHRDb250cm9sIiwiRm9udEZhbWlseVNlbGVjdG9yIiwiZm9udHMiLCJpc1Zpc2libGUiLCJzZWFyY2giLCJsb2FkVW50aWwiLCJkZWxheUZvbnRJbmNsdXNpb24iLCJmb250R3JvdXBzIiwicmVzdWx0IiwidG9Mb3dlckNhc2UiLCJnZXRGb250cyIsImluaGVyaXREZWZhdWx0Iiwib25Gb250Q2hvaWNlIiwic2VsZWN0ZWQiLCJtYXliZUdldFR5cGVraXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWZhdWx0Rm9udGZhY2UiLCJnZXRGb250TGlzdCIsIkZvbnRQcmV2aWV3TGluayIsInByZXZpZXdXYXNSZW5kZXJlZCIsInN0eWxlIiwiZm9udEZhY2UiLCJvbkNsaWNrIiwiZGVsYXlMb2FkIiwiY29udHJvbENvbnN0cnVjdG9yIiwibmV2ZV90b2dnbGVfY29udHJvbCIsIm5ldmVfcmVzcG9uc2l2ZV90b2dnbGVfY29udHJvbCIsIlJlc3BvbnNpdmVUb2dnbGVDb250cm9sIiwibmV2ZV9iYWNrZ3JvdW5kX2NvbnRyb2wiLCJuZXZlX3NwYWNpbmciLCJTcGFjaW5nQ29udHJvbCIsIm5ldmVfdHlwZWZhY2VfY29udHJvbCIsIlR5cGVmYWNlQ29udHJvbCIsIm5ldmVfZm9udF9mYW1pbHlfY29udHJvbCIsIm5ldmVfcmFkaW9fYnV0dG9uc19jb250cm9sIiwiUmFkaW9CdXR0b25zQ29udHJvbCIsIm5ldmVfYnV0dG9uX2FwcGVhcmFuY2UiLCJuZXZlX3JhbmdlX2NvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfcmFuZ2VfY29udHJvbCIsIlJlc3BvbnNpdmVSYW5nZUNvbnRyb2wiLCJuZXZlX2NvbG9yX2NvbnRyb2wiLCJuZXZlX3ByZXNldHNfc2VsZWN0b3IiLCJQcmVzZXRzU2VsZWN0b3JDb250cm9sIiwibmV2ZV9tdWx0aXNlbGVjdCIsIk11bHRpU2VsZWN0Q29udHJvbCIsIm5ldmVfcmVzcG9uc2l2ZV9yYWRpb19idXR0b25zX2NvbnRyb2wiLCJSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29udHJvbCIsIndpbmRvdyIsImRldmljZUJ1dHRvbnMiLCJkYXRhc2V0IiwiaW5pdER5bmFtaWNGaWVsZHMiLCJIRkciLCJnZXRTZXR0aW5ncyIsInVzZWRTZXR0aW5ncyIsImhlYWRlckNvbnRyb2xzIiwic3RyaW5naWZ5IiwidXNlU3RhdGUiLCJNdWx0aVNlbGVjdCIsImNob2ljZXMiLCJzZXRWYWx1ZSIsImFkZGFibGUiLCJjaG9pY2UiLCJ2IiwiUHJlc2V0c1NlbGVjdG9yIiwicmVwbGFjZVNldHRpbmdzIiwicHJlc2V0cyIsInByZXNldCIsImdldFByZXNldHMiLCJwcmV2ZW50RGVmYXVsdCIsInNldHVwIiwiTmV2ZVByb1JlYWN0Q3VzdG9taXplIiwidGhlbWVNb2QiLCJ0aGVtZU1vZHMiLCJSYWRpb0J1dHRvbnNDb21wb25lbnQiLCJnZXRDaG9pY2VzIiwidXBkYXRlVmFsdWUiLCJpc19mb3IiLCJ1c2VyX2ljb25fc3R5bGUxIiwidXNlcl9pY29uX3N0eWxlMiIsInVzZXJfaWNvbl9zdHlsZTMiLCJ1c2VyX2ljb25fc3R5bGU0IiwidXNlcl9pY29uX3N0eWxlNSIsInVzZXJfaWNvbl9zdHlsZTYiLCJ1c2VyX2F2YXRhciIsIm5vbmUiLCJsYXJnZV9idXR0b25zIiwiUmFuZ2VDb21wb25lbnQiLCJkZWZhdWx0VmFsIiwiY29udHJvbFByb3BzIiwicmVuZGVyUmVzZXQiLCJ1c2VFZmZlY3QiLCJSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50Iiwic2V0RGV2aWNlIiwibmV3VmFsdWUiLCJjb25zb2xlIiwibG9nIiwiUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50IiwicmVuZGVyQ29udHJvbEhlYWRlciIsInBhcnNlSW50IiwiaW5jb21pbmdWYWx1ZSIsIlJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQiLCJuZXh0VmFsdWUiLCJTcGFjaW5nQ29tcG9uZW50IiwiaGlkZVJlc3BvbnNpdmVCdXR0b25zIiwiYmFzZURlZmF1bHQiLCJkYlZhbCIsInNob3VsZFZhbHVlc0JlTGlua2VkIiwiVG9nZ2xlQ29tcG9uZW50IiwidG9nZ2xlVmFsdWUiLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsIlNlbGVjdENvbnRyb2wiLCJzaXplX3VuaXRzIiwibGluZV9oZWlnaHRfdW5pdHMiLCJ3ZWlnaHRfZGVmYXVsdCIsInRleHRfdHJhbnNmb3JtIiwic2l6ZV9kZWZhdWx0Iiwic3VmZml4IiwibGluZV9oZWlnaHRfZGVmYXVsdCIsImxldHRlcl9zcGFjaW5nX2RlZmF1bHQiLCJnZXRFbXB0eVZhbHVlIiwiZGVmYXVsdF9pc19lbXB0eSIsImdldEVtcHR5RGVmYXVsdCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImZsYWciLCJyZW5kZXJGb250V2VpZ2h0IiwicmVuZGVyVGV4dFRyYW5zZm9ybSIsInJlbmRlckZvbnRTaXplIiwicmVuZGVyTGluZUhlaWdodCIsInJlbmRlckxldHRlclNwYWNpbmciLCJwcm9wIiwiZW1wdHlWYWx1ZSIsInJlZnJlc2hfb25fcmVzZXQiLCJyZWZyZXNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixlQUFlO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN2T2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsb0JBQU8sR0FBRyxtQkFBTyxDQUFDLDRCQUFXO0FBQ2hFLE1BQU0sRUFLdUU7QUFDN0UsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHFDQUFxQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcseUJBQXlCLEVBQUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSywwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SywyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7Ozs7OztBQU8vTTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsNEhBQTRIOztBQUU1SDtBQUNBLGtMQUFrTDs7QUFFbEw7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDhMQUE4TCxTQUFTO0FBQ3ZNO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsbEJEOztBQUNBO0FBQ0E7QUFDQTtJQUVRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO2tCQUlKQyxFQUFFLENBQUNFLE87SUFGTEMsUyxlQUFBQSxTO0lBQ0FDLFEsZUFBQUEsUTtJQUdBQyxXLEdBQ0VMLEVBQUUsQ0FBQ00sVyxDQURMRCxXO3FCQVdFTCxFQUFFLENBQUNPLFU7SUFQTEMsTSxrQkFBQUEsTTtJQUNBQyxXLGtCQUFBQSxXO0lBQ0FDLFksa0JBQUFBLFk7SUFDQUMsZ0Isa0JBQUFBLGdCO0lBQ0FDLFEsa0JBQUFBLFE7SUFDQUMsYSxrQkFBQUEsYTtJQUNBQyxXLGtCQUFBQSxXOztJQUdJQyxtQjs7Ozs7QUFDSiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEdBQXRCLEVBQWQ7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFTCxLQUFLLENBQUNLLElBQU4sSUFBYyxPQURUO0FBRVhDLGNBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUFOLElBQWtCLEVBRmpCO0FBR1hDLGdCQUFVLEVBQUVQLEtBQUssQ0FBQ08sVUFBTixJQUFvQjtBQUFFQyxTQUFDLEVBQUUsR0FBTDtBQUFVQyxTQUFDLEVBQUU7QUFBYixPQUhyQjtBQUlYQyxnQkFBVSxFQUFFVixLQUFLLENBQUNVLFVBQU4sSUFBb0IsU0FKckI7QUFLWEMsdUJBQWlCLEVBQUVYLEtBQUssQ0FBQ1csaUJBQU4sSUFBMkIsRUFMbkM7QUFNWEMsb0JBQWMsRUFBRVosS0FBSyxDQUFDWSxjQUFOLElBQXdCLEVBTjdCO0FBT1hDLFdBQUssRUFBRWIsS0FBSyxDQUFDYSxLQUFOLElBQWUsS0FQWDtBQVFYQyxpQkFBVyxFQUFFZCxLQUFLLENBQUNjLFdBQU4sSUFBcUI7QUFSdkIsS0FBYjtBQUppQjtBQWNsQjs7OztpQ0FFWTtBQUNYLFVBQU1DLEtBQUssR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWQ7QUFDQSxVQUFNQyxNQUFNLEdBQUc7QUFDYkMsYUFBSyxFQUFFbkMsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBREk7QUFFYm9DLGFBQUssRUFBRXBDLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVjtBQUZJLE9BQWY7QUFJQSxVQUFNcUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFDQUwsV0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBVWhCLElBQVYsRUFBZ0JpQixLQUFoQixFQUF1QjtBQUMvQkgsZUFBTyxDQUFDSSxJQUFSLGVBQ0Usb0JBQUMsTUFBRDtBQUNFLGFBQUcsRUFBRUQsS0FEUDtBQUVFLG1CQUFTLEVBQUVGLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV0MsSUFBWCxLQUFvQkEsSUFGakM7QUFHRSxtQkFBUyxFQUFFZSxJQUFJLENBQUNoQixLQUFMLENBQVdDLElBQVgsS0FBb0JBLElBSGpDO0FBSUUsaUJBQU8sRUFBRSxpQkFBQ21CLENBQUQsRUFBTztBQUNkSixnQkFBSSxDQUFDSyxhQUFMLENBQW1CO0FBQUVwQixrQkFBSSxFQUFFQTtBQUFSLGFBQW5CO0FBQ0Q7QUFOSCxXQVFHVyxNQUFNLENBQUNYLElBQUQsQ0FSVCxDQURGO0FBV0QsT0FaRDtBQWNBLGFBQU9jLE9BQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFFQSwwQkFDRSxvQkFBQyxRQUFELFFBQ0csS0FBS3JCLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCQyxLQUExQixpQkFDQztBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDRyxLQUFLNUIsS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEJDLEtBRDdCLENBRkosZUFLRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxvQkFBQyxXQUFEO0FBQWEsaUJBQVMsRUFBQztBQUF2QixTQUNHLEtBQUtDLFVBQUwsRUFESCxDQURGLENBTEYsZUFVRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUt4QixLQUFMLENBQVdDLElBQVgsS0FBb0IsT0FBcEIsaUJBQ0Msb0JBQUMsUUFBRCxxQkFDRSxvQkFBQyw0REFBRDtBQUNFLGdCQUFRLEVBQUUsa0JBQUNLLFVBQUQsRUFBZ0I7QUFDeEJVLGNBQUksQ0FBQ0ssYUFBTCxDQUFtQjtBQUFFZixzQkFBVSxFQUFFQTtBQUFkLFdBQW5CO0FBQ0QsU0FISDtBQUlFLHFCQUFhLEVBQUUsS0FBS04sS0FBTCxDQUFXTSxVQUo1QjtBQUtFLGFBQUssRUFBRTVCLEVBQUUsQ0FBRSxPQUFGLEVBQVcsTUFBWDtBQUxYLFFBREYsZUFRRTtBQUNFLGlCQUFTLEVBQUMsb0JBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRStDLHlCQUFlLEVBQUUsS0FBS3pCLEtBQUwsQ0FBV007QUFBOUI7QUFGVCxRQVJGLENBRkosRUFlRyxLQUFLTixLQUFMLENBQVdDLElBQVgsS0FBb0IsT0FBcEIsaUJBQ0Msb0JBQUMsUUFBRCxxQkFDRSxvQkFBQyxhQUFEO0FBQ0UsYUFBSyxFQUFFdkIsRUFBRSxDQUFDLG9CQUFELEVBQXVCLE1BQXZCLENBRFg7QUFFRSxlQUFPLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV1UsV0FGdEI7QUFHRSxnQkFBUSxFQUFFLGtCQUFDQSxXQUFELEVBQWlCO0FBQ3pCLGdCQUFJLENBQUNXLGFBQUwsQ0FBbUI7QUFBRVgsdUJBQVcsRUFBRUE7QUFBZixXQUFuQjtBQUNEO0FBTEgsUUFERixFQVFHLENBQUMsS0FBS1YsS0FBTCxDQUFXRSxRQUFaLGdCQUNDLG9CQUFDLFdBQUQ7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRSxLQUFLRixLQUFMLENBQVdVLFdBQVgsR0FDSGhDLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQURDLEdBRUhBLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVjtBQUpSLHNCQU1FLCtCQUNHQSxFQUFFLENBQUMscURBQUQsRUFDRCxNQURDLENBREwsQ0FORixlQVVFLG9CQUFDLFdBQUQ7QUFDRSxnQkFBUSxFQUFFLGtCQUFDZ0QsU0FBRCxFQUFlO0FBQ3ZCLGdCQUFJLENBQUNMLGFBQUwsQ0FBbUI7QUFBRW5CLG9CQUFRLEVBQUV3QixTQUFTLENBQUNDO0FBQXRCLFdBQW5CO0FBQ0QsU0FISDtBQUlFLG9CQUFZLEVBQUUsQ0FBQyxPQUFELENBSmhCO0FBS0UsY0FBTSxFQUFFO0FBQUEsY0FBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsOEJBQ04sb0JBQUMsTUFBRDtBQUFRLHFCQUFTLE1BQWpCO0FBQWtCLG1CQUFPLEVBQUVBO0FBQTNCLGFBQ0dsRCxFQUFFLENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FETCxDQURNO0FBQUE7QUFMVixRQVZGLENBREQsZ0JBdUJDLG9CQUFDLFFBQUQscUJBQ0Usb0JBQUMsTUFBRDtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLHFCQUFhLE1BRmY7QUFHRSxjQUFNLE1BSFI7QUFJRSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDMkMsYUFBTCxDQUNFO0FBQUVuQixvQkFBUSxFQUFFO0FBQVosV0FERjtBQUVEO0FBUEgsc0JBU0Usb0JBQUMsUUFBRDtBQUFVLFlBQUksRUFBQztBQUFmLFFBVEYsRUFVRyxLQUFLRixLQUFMLENBQVdVLFdBQVgsR0FDR2hDLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQixNQUExQixDQURMLEdBRUdBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBWlIsQ0FERixlQWVFLG9CQUFDLGdCQUFEO0FBQ0UsV0FBRyxFQUFFLEtBQUtzQixLQUFMLENBQVdFLFFBRGxCO0FBRUUsYUFBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csVUFGcEI7QUFHRSxnQkFBUSxFQUFFLGtCQUFDMEIsR0FBRCxFQUFTO0FBQ2pCLGNBQU1DLFFBQVEsR0FBRztBQUNmMUIsYUFBQyxFQUFFMkIsVUFBVSxDQUFDRixHQUFHLENBQUN6QixDQUFMLENBQVYsQ0FBa0I0QixPQUFsQixDQUEwQixDQUExQixDQURZO0FBRWYzQixhQUFDLEVBQUUwQixVQUFVLENBQUNGLEdBQUcsQ0FBQ3hCLENBQUwsQ0FBVixDQUFrQjJCLE9BQWxCLENBQTBCLENBQTFCO0FBRlksV0FBakI7O0FBSUEsZ0JBQUksQ0FBQ1gsYUFBTCxDQUFtQjtBQUFFbEIsc0JBQVUsRUFBRTJCO0FBQWQsV0FBbkI7QUFDRDtBQVRILFFBZkYsQ0EvQkosZUEwREUsb0JBQUMsYUFBRDtBQUNFLGFBQUssRUFBRXBELEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixNQUFyQixDQURYO0FBRUUsZUFBTyxFQUFFLEtBQUtzQixLQUFMLENBQVdTLEtBRnRCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0EsS0FBRCxFQUFXO0FBQ25CLGdCQUFJLENBQUNZLGFBQUwsQ0FBbUI7QUFBRVosaUJBQUssRUFBRUE7QUFBVCxXQUFuQjtBQUNEO0FBTEgsUUExREYsZUFpRUUsb0JBQUMsNERBQUQ7QUFDRSxxQkFBYSxFQUFFLEtBQUtULEtBQUwsQ0FBV08saUJBRDVCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ0EsaUJBQUQsRUFBdUI7QUFDL0JTLGNBQUksQ0FBQ0ssYUFBTCxDQUNFO0FBQUVkLDZCQUFpQixFQUFFQTtBQUFyQixXQURGO0FBRUQsU0FMSDtBQU1FLGFBQUssRUFBRTdCLEVBQUUsQ0FBQyxlQUFELEVBQWtCLE1BQWxCO0FBTlgsUUFqRUYsZUF5RUU7QUFDRSxpQkFBUyxFQUFDLG9CQURaO0FBRUUsYUFBSyxFQUFFO0FBQUUrQyx5QkFBZSxFQUFFLEtBQUt6QixLQUFMLENBQVdPO0FBQTlCO0FBRlQsUUF6RUYsZUE2RUUsb0JBQUMsWUFBRDtBQUNFLGFBQUssRUFBRTdCLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixNQUFwQixDQURYO0FBRUUsYUFBSyxFQUFFLEtBQUtzQixLQUFMLENBQVdRLGNBRnBCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0EsY0FBRCxFQUFvQjtBQUM1QixnQkFBSSxDQUFDYSxhQUFMLENBQW1CO0FBQUViLDBCQUFjLEVBQUVBO0FBQWxCLFdBQW5CO0FBQ0QsU0FMSDtBQU1FLFdBQUcsRUFBQyxHQU5OO0FBT0UsV0FBRyxFQUFDO0FBUE4sUUE3RUYsQ0FoQkosQ0FWRixDQURGO0FBcUhEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDVlgsT0FEVSxHQUNFLEtBQUtGLEtBRFAsQ0FDVkUsT0FEVTtBQUdsQm9DLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsK0JBQTFCLEVBQTJELFVBQUNkLENBQUQsRUFBTztBQUNoRSxZQUFJLENBQUNBLENBQUMsQ0FBQ2UsTUFBUCxFQUFlLE9BQU8sS0FBUDtBQUNmLFlBQUlmLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxFQUFULEtBQWdCdkMsT0FBTyxDQUFDdUMsRUFBNUIsRUFBZ0MsT0FBTyxLQUFQOztBQUNoQyxjQUFJLENBQUNmLGFBQUwsQ0FBbUJELENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBNUI7QUFDRCxPQUpEO0FBS0Q7OztrQ0FFYXlDLFMsRUFBVztBQUN2QixXQUFLQyxRQUFMLENBQWNELFNBQWQ7QUFDQSxXQUFLMUMsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQnlDLEdBQTNCLG1CQUNLLEtBQUs1QyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixFQURMLE1BRUtzQyxTQUZMO0FBSUQ7Ozs7RUFwTCtCdkQsUzs7QUF1TGxDWSxtQkFBbUIsQ0FBQzhDLFNBQXBCLEdBQWdDO0FBQzlCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESSxDQUFoQztBQUllakQsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbk5BO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7SUFDUWtELE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU1DLGlCQUFpQixHQUFHbEUsRUFBRSxDQUFDbUUsU0FBSCxDQUFhQyxPQUFiLENBQXFCQyxNQUFyQixDQUE0QjtBQUMzREMsZUFBYSxFQUFFLFNBQVNBLGFBQVQsR0FBeUI7QUFDdEMsUUFBTXBELE9BQU8sR0FBRyxJQUFoQjtBQUNBK0MsVUFBTSxlQUNKLG9CQUFDLCtEQUFEO0FBQXFCLGFBQU8sRUFBRS9DO0FBQTlCLE1BREksRUFFSkEsT0FBTyxDQUFDcUQsU0FBUixDQUFrQixDQUFsQixDQUZJLENBQU47QUFJRDtBQVAwRCxDQUE1QixDQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVReEUsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtrQkFDd0JDLEVBQUUsQ0FBQ0UsTztJQUEzQkMsUyxlQUFBQSxTO0lBQVdDLFEsZUFBQUEsUTtxQkFDb0JKLEVBQUUsQ0FBQ08sVTtJQUFsQ2lFLEssa0JBQUFBLEs7SUFBT0MsUyxrQkFBQUEsUztJQUFXQyxRLGtCQUFBQSxRO2NBQ0pDLE07SUFBZEMsUyxXQUFBQSxTOztJQUVGQyx5Qjs7Ozs7QUFDSixxQ0FBWTdELEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixFQUFkO0FBQ0EsUUFBTTBELG1CQUFtQixHQUFHO0FBQzFCQyxrQkFBWSxFQUFFO0FBQ1pDLFdBQUcsRUFBRSxDQURPO0FBRVpDLGFBQUssRUFBRSxDQUZLO0FBR1pDLGNBQU0sRUFBRSxDQUhJO0FBSVpDLFlBQUksRUFBRTtBQUpNLE9BRFk7QUFPMUJDLGlCQUFXLEVBQUU7QUFDWEosV0FBRyxFQUFFLENBRE07QUFFWEMsYUFBSyxFQUFFLENBRkk7QUFHWEMsY0FBTSxFQUFFLENBSEc7QUFJWEMsWUFBSSxFQUFFO0FBSks7QUFQYSxLQUE1QixDQUhpQixDQWtCakI7O0FBQ0EsUUFBSSxPQUFPbEUsS0FBSyxDQUFDOEQsWUFBYixLQUE4QixRQUFsQyxFQUE0QztBQUMxQzlELFdBQUssQ0FBQzhELFlBQU4sR0FBcUI7QUFDbkJDLFdBQUcsRUFBRS9ELEtBQUssQ0FBQzhELFlBRFE7QUFFbkJFLGFBQUssRUFBRWhFLEtBQUssQ0FBQzhELFlBRk07QUFHbkJHLGNBQU0sRUFBRWpFLEtBQUssQ0FBQzhELFlBSEs7QUFJbkJJLFlBQUksRUFBRWxFLEtBQUssQ0FBQzhEO0FBSk8sT0FBckI7QUFNRCxLQTFCZ0IsQ0EyQmpCOzs7QUFDQSxRQUFJLE9BQU85RCxLQUFLLENBQUNtRSxXQUFiLEtBQTZCLFFBQWpDLEVBQTJDO0FBQ3pDbkUsV0FBSyxDQUFDbUUsV0FBTixHQUFvQjtBQUNsQkosV0FBRyxFQUFFL0QsS0FBSyxDQUFDbUUsV0FETztBQUVsQkgsYUFBSyxFQUFFaEUsS0FBSyxDQUFDbUUsV0FGSztBQUdsQkYsY0FBTSxFQUFFakUsS0FBSyxDQUFDbUUsV0FISTtBQUlsQkQsWUFBSSxFQUFFbEUsS0FBSyxDQUFDbUU7QUFKTSxPQUFwQjtBQU1EOztBQUVELFVBQUtDLFdBQUwsR0FBbUJyRSxLQUFLLENBQUNFLE9BQU4sQ0FBY3lCLE1BQWQsQ0FBcUIwQyxXQUFyQixxQkFDZHJFLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjBDLFdBRFAsTUFFZFAsbUJBRmMsSUFHZkEsbUJBSEo7QUFLQSxVQUFLekQsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRUwsS0FBSyxDQUFDSyxJQUFOLElBQWMsUUFEVDtBQUVYZ0UsZ0JBQVUsRUFBRXJFLEtBQUssQ0FBQ3FFLFVBQU4sSUFBb0IsRUFGckI7QUFHWEMscUJBQWUsRUFBRXRFLEtBQUssQ0FBQ3NFLGVBQU4sSUFBeUIsRUFIL0I7QUFJWEMsVUFBSSxFQUFFdkUsS0FBSyxDQUFDdUUsSUFBTixJQUFjLEVBSlQ7QUFLWEMsZUFBUyxFQUFFeEUsS0FBSyxDQUFDd0UsU0FBTixJQUFtQixFQUxuQjtBQU1YVixrQkFBWSxFQUFFOUQsS0FBSyxDQUFDOEQsWUFBTixJQUFzQixNQUFLTSxXQUFMLENBQWlCTixZQU4xQztBQU9YSyxpQkFBVyxFQUFFbkUsS0FBSyxDQUFDbUUsV0FBTixJQUFxQixNQUFLQyxXQUFMLENBQWlCRCxXQVB4QztBQVFYTSxrQkFBWSxFQUFFLEtBUkg7QUFTWEMsaUJBQVcsRUFBRTtBQVRGLEtBQWIsQ0ExQ2lCLENBcURqQjs7QUFDQSxVQUFLdEUsS0FBTCxDQUFXcUUsWUFBWCxHQUEwQixNQUFLRSxRQUFMLENBQWMsTUFBS3ZFLEtBQUwsQ0FBVzBELFlBQXpCLENBQTFCO0FBQ0EsVUFBSzFELEtBQUwsQ0FBV3NFLFdBQVgsR0FBeUIsTUFBS0MsUUFBTCxDQUFjLE1BQUt2RSxLQUFMLENBQVcrRCxXQUF6QixDQUF6QixDQXZEaUIsQ0F5RGpCOztBQUVBLFVBQUtTLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCQyxJQUExQiwrQkFBNUI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsK0JBQTFCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQiwrQkFBcEI7QUE3RGlCO0FBOERsQjs7OzsyQ0FFc0I7QUFBQTs7QUFDckIsVUFBTUcsYUFBYSxHQUFHLENBQ3BCO0FBQ0UzRSxZQUFJLEVBQUUsS0FEUjtBQUVFTCxhQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXMEQsWUFBWCxDQUF3QkM7QUFGakMsT0FEb0IsRUFLcEI7QUFDRTFELFlBQUksRUFBRSxPQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVcwRCxZQUFYLENBQXdCRTtBQUZqQyxPQUxvQixFQVNwQjtBQUNFM0QsWUFBSSxFQUFFLFFBRFI7QUFFRUwsYUFBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBVzBELFlBQVgsQ0FBd0JHO0FBRmpDLE9BVG9CLEVBYXBCO0FBQ0U1RCxZQUFJLEVBQUUsTUFEUjtBQUVFTCxhQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXMEQsWUFBWCxDQUF3Qkk7QUFGakMsT0Fib0IsQ0FBdEI7QUFrQkEsVUFBTWUsWUFBWSxHQUFHLENBQ25CO0FBQ0U1RSxZQUFJLEVBQUUsS0FEUjtBQUVFTCxhQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXK0QsV0FBWCxDQUF1Qko7QUFGaEMsT0FEbUIsRUFLbkI7QUFDRTFELFlBQUksRUFBRSxPQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVcrRCxXQUFYLENBQXVCSDtBQUZoQyxPQUxtQixFQVNuQjtBQUNFM0QsWUFBSSxFQUFFLFFBRFI7QUFFRUwsYUFBSyxFQUFFLEtBQUtJLEtBQUwsQ0FBVytELFdBQVgsQ0FBdUJGO0FBRmhDLE9BVG1CLEVBYW5CO0FBQ0U1RCxZQUFJLEVBQUUsTUFEUjtBQUVFTCxhQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXK0QsV0FBWCxDQUF1QkQ7QUFGaEMsT0FibUIsQ0FBckI7QUFtQkEsMEJBQ0Usb0JBQUMsUUFBRCxxQkFDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBMkNwRixFQUFFLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQUE3QyxDQURGLGVBRUUsb0JBQUMseURBQUQ7QUFDRSxXQUFHLEVBQUUsQ0FEUDtBQUVFLFdBQUcsRUFBRSxHQUZQO0FBR0UsWUFBSSxFQUFFLENBSFI7QUFJRSxlQUFPLEVBQUVrRyxhQUpYO0FBS0UsZ0JBQVEsRUFBRSxLQUFLWixXQUFMLENBQWlCTixZQUw3QjtBQU1FLGNBQU0sRUFBRSxLQUFLMUQsS0FBTCxDQUFXcUUsWUFOckI7QUFPRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDL0IsUUFBTCxDQUFjO0FBQUUrQix3QkFBWSxFQUFFLENBQUMsTUFBSSxDQUFDckUsS0FBTCxDQUFXcUU7QUFBNUIsV0FBZCxDQUFOO0FBQUEsU0FQWjtBQVFFLGdCQUFRLEVBQUUsa0JBQUNTLFVBQUQsRUFBYUMsWUFBYixFQUE4QjtBQUN0QyxjQUFJQyxNQUFKOztBQUNBLGNBQUksTUFBSSxDQUFDaEYsS0FBTCxDQUFXcUUsWUFBZixFQUE2QjtBQUMzQlcsa0JBQU0sR0FBR3pCLFNBQVMsQ0FBQyxNQUFJLENBQUN2RCxLQUFMLENBQVcwRCxZQUFaLEVBQTBCO0FBQUEscUJBQU1xQixZQUFOO0FBQUEsYUFBMUIsQ0FBbEI7QUFDRCxXQUZELE1BRU87QUFDTEMsa0JBQU0scUJBQVEsTUFBSSxDQUFDaEYsS0FBTCxDQUFXMEQsWUFBbkIsc0JBQWtDb0IsVUFBbEMsRUFBK0NDLFlBQS9DLEVBQU47QUFDRDs7QUFDRCxnQkFBSSxDQUFDekMsUUFBTCxDQUFjO0FBQUVvQix3QkFBWSxFQUFFc0I7QUFBaEIsV0FBZDs7QUFDQSxnQkFBSSxDQUFDQyxZQUFMLENBQWtCO0FBQUV2Qix3QkFBWSxFQUFFc0I7QUFBaEIsV0FBbEI7QUFDRCxTQWpCSDtBQWtCRSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDMUMsUUFBTCxDQUFjO0FBQUVvQix3QkFBWSxFQUFFLE1BQUksQ0FBQ00sV0FBTCxDQUFpQk47QUFBakMsV0FBZDs7QUFDQSxnQkFBSSxDQUFDdUIsWUFBTCxDQUFrQjtBQUFFdkIsd0JBQVksRUFBRSxNQUFJLENBQUNNLFdBQUwsQ0FBaUJOO0FBQWpDLFdBQWxCO0FBQ0Q7QUFyQkgsUUFGRixFQXlCRyxLQUFLMUQsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFNBQXBCLGlCQUNDLG9CQUFDLFFBQUQscUJBQ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQTJDdkIsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FBN0MsQ0FERixlQUVFLG9CQUFDLHlEQUFEO0FBQ0UsV0FBRyxFQUFFLENBRFA7QUFFRSxXQUFHLEVBQUUsR0FGUDtBQUdFLFlBQUksRUFBRSxDQUhSO0FBSUUsZUFBTyxFQUFFbUcsWUFKWDtBQUtFLGdCQUFRLEVBQUUsS0FBS2IsV0FBTCxDQUFpQkQsV0FMN0I7QUFNRSxjQUFNLEVBQUUsS0FBSy9ELEtBQUwsQ0FBV3NFLFdBTnJCO0FBT0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2hDLFFBQUwsQ0FBYztBQUFFZ0MsdUJBQVcsRUFBRSxDQUFDLE1BQUksQ0FBQ3RFLEtBQUwsQ0FBV3NFO0FBQTNCLFdBQWQsQ0FBTjtBQUFBLFNBUFo7QUFRRSxnQkFBUSxFQUFFLGtCQUFDUSxVQUFELEVBQWFDLFlBQWIsRUFBOEI7QUFDdEMsY0FBSUMsTUFBSjs7QUFDQSxjQUFJLE1BQUksQ0FBQ2hGLEtBQUwsQ0FBV3NFLFdBQWYsRUFBNEI7QUFDMUJVLGtCQUFNLEdBQUd6QixTQUFTLENBQUMsTUFBSSxDQUFDdkQsS0FBTCxDQUFXK0QsV0FBWixFQUF5QjtBQUFBLHFCQUFNZ0IsWUFBTjtBQUFBLGFBQXpCLENBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xDLGtCQUFNLHFCQUFRLE1BQUksQ0FBQ2hGLEtBQUwsQ0FBVytELFdBQW5CLHNCQUFpQ2UsVUFBakMsRUFBOENDLFlBQTlDLEVBQU47QUFDRDs7QUFDRCxnQkFBSSxDQUFDekMsUUFBTCxDQUFjO0FBQUV5Qix1QkFBVyxFQUFFaUI7QUFBZixXQUFkOztBQUNBLGdCQUFJLENBQUNDLFlBQUwsQ0FBa0I7QUFBRWxCLHVCQUFXLEVBQUVpQjtBQUFmLFdBQWxCO0FBQ0QsU0FqQkg7QUFrQkUsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQUksQ0FBQzFDLFFBQUwsQ0FBYztBQUFFeUIsdUJBQVcsRUFBRSxNQUFJLENBQUNDLFdBQUwsQ0FBaUJEO0FBQWhDLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ2tCLFlBQUwsQ0FBa0I7QUFBRWxCLHVCQUFXLEVBQUUsTUFBSSxDQUFDQyxXQUFMLENBQWlCRDtBQUFoQyxXQUFsQjtBQUNEO0FBckJILFFBRkYsQ0ExQkosQ0FERjtBQXVERDs7O2dDQUVXLENBQ1g7OzttQ0FFYztBQUFBOztBQUNiLFVBQU1tQixRQUFRLEdBQUc7QUFDZkMsY0FBTSxFQUFFO0FBQ041RCxlQUFLLEVBQUU3QyxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FESDtBQUVOMEcsa0JBQVEsRUFBRTtBQUNSbkIsc0JBQVUsRUFBRXZGLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixDQUROO0FBRVJ5RixnQkFBSSxFQUFFLEtBQUtuRSxLQUFMLENBQVdDLElBQVgsS0FBb0IsTUFBcEIsR0FBNkJ2QixFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBL0IsR0FBa0RBLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixNQUFwQjtBQUZsRDtBQUZKLFNBRE87QUFRZjJHLGFBQUssRUFBRTtBQUNMOUQsZUFBSyxFQUFFN0MsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBREo7QUFFTDBHLGtCQUFRLEVBQUU7QUFDUmxCLDJCQUFlLEVBQUV4RixFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FEWDtBQUVSMEYscUJBQVMsRUFBRSxLQUFLcEUsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLE1BQXBCLEdBQTZCdkIsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQS9CLEdBQWtEQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsTUFBcEI7QUFGdkQ7QUFGTDtBQVJRLE9BQWpCO0FBaUJBLFVBQU1zQyxJQUFJLEdBQUcsSUFBYjs7QUFFQSxVQUFJLEtBQUtyQixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQmdFLFFBQTlCLEVBQXdDO0FBQ3RDLGVBQU9KLFFBQVEsQ0FBQ0csS0FBaEI7QUFDRDs7QUFDRCwwQkFDRSxvQkFBQyxLQUFELFFBRUlFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixRQUFaLEVBQXNCakUsR0FBdEIsQ0FBMEIsVUFBQ2hCLElBQUQsRUFBT2lCLEtBQVAsRUFBaUI7QUFDekMsNEJBQ0Usb0JBQUMsU0FBRDtBQUNFLGFBQUcsRUFBRUEsS0FEUDtBQUVFLGVBQUssRUFBRSxNQUFJLENBQUN2QixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQmdFLFFBQTFCLEdBQXFDLEVBQXJDLEdBQTBDSixRQUFRLENBQUNqRixJQUFELENBQVIsQ0FBZXNCLEtBRmxFO0FBR0UscUJBQVcsRUFBRXRCLElBQUksS0FBSztBQUh4QixXQU1Jc0YsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFFBQVEsQ0FBQ2pGLElBQUQsQ0FBUixDQUFlbUYsUUFBM0IsRUFDR25FLEdBREgsQ0FDTyxVQUFDd0UsV0FBRCxFQUFjdkUsS0FBZCxFQUF3QjtBQUMzQiw4QkFDRSxvQkFBQyxRQUFEO0FBQVUsZUFBRyxFQUFFQTtBQUFmLDBCQUNFLG9CQUFDLFFBQUQscUJBQ0Usb0JBQUMsNERBQUQ7QUFDRSxpQkFBSyxFQUFFZ0UsUUFBUSxDQUFDakYsSUFBRCxDQUFSLENBQWVtRixRQUFmLENBQXdCSyxXQUF4QixDQURUO0FBRUUseUJBQWEsRUFBRXpFLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV3lGLFdBQVgsQ0FGakI7QUFHRSxvQkFBUSxFQUFFLGtCQUFDN0YsS0FBRCxFQUFXO0FBQ25Cb0Isa0JBQUksQ0FBQ3NCLFFBQUwscUJBQ0ttRCxXQURMLEVBQ21CN0YsS0FBSyxJQUFJLEVBRDVCLEdBRUVvQixJQUFJLENBQUNpRSxZQUFMLHFCQUNHUSxXQURILEVBQ2lCN0YsS0FBSyxJQUFJLEVBRDFCLEVBRkY7QUFLRDtBQVRILFlBREYsQ0FERixDQURGO0FBaUJELFNBbkJILENBTkosQ0FERjtBQThCRCxPQS9CRCxDQUZKLENBREY7QUFzQ0Q7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTWUsS0FBSyxHQUFHO0FBQ1orRSxZQUFJLEVBQUU7QUFDSm5FLGVBQUssRUFBRSxNQURIO0FBRUpvRSxpQkFBTyxFQUFFakgsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBRlA7QUFHSmtILGNBQUksRUFBRTtBQUhGLFNBRE07QUFPWkMsZUFBTyxFQUFFO0FBQ1B0RSxlQUFLLEVBQUUsU0FEQTtBQUVQb0UsaUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixDQUZKO0FBR1BrSCxjQUFJLEVBQUU7QUFIQztBQVBHLE9BQWQ7QUFjQSwwQkFDRSxvQkFBQyw2REFBRDtBQUNFLGVBQU8sRUFBRWpGLEtBRFg7QUFDa0IsZ0JBQVEsRUFBRSxrQkFBQ1YsSUFBRCxFQUFVO0FBQ2xDLGdCQUFJLENBQUNxQyxRQUFMLENBQWM7QUFBRXJDLGdCQUFJLEVBQUpBO0FBQUYsV0FBZCxFQUF3QixNQUFJLENBQUNnRixZQUFMLENBQWtCO0FBQUVoRixnQkFBSSxFQUFKQTtBQUFGLFdBQWxCLENBQXhCO0FBQ0QsU0FISDtBQUdLLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBSHZCLFFBREY7QUFPRDs7OzZCQUVRO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLTixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQkMsS0FBMUIsaUJBQ0M7QUFDRSxpQkFBUyxFQUFDO0FBRFosU0FHRyxLQUFLNUIsS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEJDLEtBSDdCLENBRkosZUFPRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDRTdDLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixDQURKLENBREYsRUFLRyxLQUFLZ0csa0JBQUwsRUFMSCxFQU1HLEtBQUtGLG9CQUFMLEVBTkgsRUFPRyxLQUFLRyxZQUFMLEVBUEgsQ0FQRixDQURGO0FBbUJEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDVjlFLE9BRFUsR0FDRSxLQUFLRixLQURQLENBQ1ZFLE9BRFU7QUFHbEJvQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLCtCQUExQixFQUEyRCxVQUFDZCxDQUFELEVBQU87QUFDaEUsWUFBSSxDQUFDQSxDQUFDLENBQUNlLE1BQVAsRUFBZSxPQUFPLEtBQVA7QUFDZixZQUFJZixDQUFDLENBQUNlLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQnZDLE9BQU8sQ0FBQ3VDLEVBQTVCLEVBQWdDLE9BQU8sS0FBUCxDQUZnQyxDQUdoRTs7QUFDQSxZQUFNMEQsQ0FBQyxHQUFHMUUsQ0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUFULENBQWU4RCxZQUF6Qjs7QUFDQSxZQUFLb0MsQ0FBQyxLQUFNLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCLE9BQU9BLENBQVAsS0FBYSxRQUE1QyxDQUFOLEVBQStEO0FBQzdEMUUsV0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUFULENBQWU4RCxZQUFmLEdBQThCO0FBQzVCQyxlQUFHLEVBQUVtQyxDQUR1QjtBQUU1QmpDLGtCQUFNLEVBQUVpQyxDQUZvQjtBQUc1QmxDLGlCQUFLLEVBQUVrQyxDQUhxQjtBQUk1QmhDLGdCQUFJLEVBQUVnQztBQUpzQixXQUE5QjtBQU1EOztBQUVELFlBQU1DLENBQUMsR0FBRzNFLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBVCxDQUFlbUUsV0FBekI7O0FBQ0EsWUFBS2dDLENBQUMsS0FBSyxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QixPQUFPQSxDQUFQLEtBQWEsUUFBM0MsQ0FBTixFQUE2RDtBQUMzRDNFLFdBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBVCxDQUFlbUUsV0FBZixHQUE2QjtBQUMzQkosZUFBRyxFQUFFb0MsQ0FEc0I7QUFFM0JsQyxrQkFBTSxFQUFFa0MsQ0FGbUI7QUFHM0JuQyxpQkFBSyxFQUFFbUMsQ0FIb0I7QUFJM0JqQyxnQkFBSSxFQUFFaUM7QUFKcUIsV0FBN0I7QUFNRDs7QUFDRCxjQUFJLENBQUN6RCxRQUFMLG1CQUFvQixNQUFJLENBQUN0QyxLQUF6QixNQUFtQ29CLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBNUM7O0FBQ0EsY0FBSSxDQUFDcUYsWUFBTCxDQUFrQjdELENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBM0I7QUFDRCxPQXpCRDtBQTBCRDs7O2lDQUVZQSxLLEVBQU87QUFDbEIsV0FBS0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQnlDLEdBQTNCLG1CQUNLLEtBQUs1QyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixFQURMLE1BRUtILEtBRkw7QUFJRDs7OzZCQUVROEMsTSxFQUFRO0FBQ2Y7QUFDQSxhQUFPNkMsTUFBTSxDQUFDUyxNQUFQLENBQWN0RCxNQUFkLEVBQXNCdUQsS0FBdEIsQ0FBNEIsVUFBQXJHLEtBQUs7QUFBQSxlQUFJQSxLQUFLLElBQUkyRixNQUFNLENBQUNTLE1BQVAsQ0FBY3RELE1BQWQsRUFBc0IsQ0FBdEIsQ0FBYjtBQUFBLE9BQWpDLENBQVA7QUFDRDs7OztFQXpUcUM1RCxTOztBQTRUeEMwRSx5QkFBeUIsQ0FBQ2hCLFNBQTFCLEdBQXNDO0FBQ3BDM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEVSxDQUF0QztBQUllYSx3RkFBZixFOzs7Ozs7Ozs7Ozs7QUM1VUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtJQUNRWixNLEdBQVdqRSxFQUFFLENBQUNFLE8sQ0FBZCtELE07QUFFRCxJQUFNc0QsdUJBQXVCLEdBQUd2SCxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTZCO0FBQ2xFQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMscUVBQUQ7QUFBMkIsYUFBTyxFQUFFL0M7QUFBcEMsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUGlFLENBQTdCLENBQWhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7O0FBQ0E7QUFDQTtBQUNBO0lBRVFwRSxTLEdBQWNILEVBQUUsQ0FBQ0UsTyxDQUFqQkMsUzs7SUFFRnFILGM7Ozs7O0FBQ0osMEJBQVl4RyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsR0FBdEIsRUFBZDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYSixXQUFLLEVBQUxBLEtBRFc7QUFFWHdHLGlCQUFXLEVBQUU7QUFGRixLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQjFHLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxlQUFnQyxFQUFwRDtBQUVBLFVBQUsyRCxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JSLElBQWxCLCtCQUFwQjtBQVRpQjtBQVVsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFBQSxVQUNWNUUsT0FEVSxHQUNFLEtBQUtGLEtBRFAsQ0FDVkUsT0FEVTtBQUdsQm9DLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkIsK0JBQTNCLEVBQTRELFVBQUNkLENBQUQsRUFBTztBQUNqRSxZQUFLLENBQUNBLENBQUMsQ0FBQ2UsTUFBUixFQUFpQixPQUFPLEtBQVA7QUFDakIsWUFBS2YsQ0FBQyxDQUFDZSxNQUFGLENBQVNDLEVBQVQsS0FBZ0J2QyxPQUFPLENBQUN1QyxFQUE3QixFQUFrQyxPQUFPLEtBQVA7O0FBQ2xDLGNBQUksQ0FBQzZDLFlBQUwsQ0FBbUI3RCxDQUFDLENBQUNlLE1BQUYsQ0FBU3ZDLEtBQTVCO0FBQ0QsT0FKRDtBQUtEOzs7NkJBRVE7QUFBQTs7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxvQkFBQywrREFBRDtBQUNFLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQkMsS0FEbkM7QUFFRSxxQkFBYSxFQUFFLEtBQUt2QixLQUFMLENBQVdKLEtBRjVCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0EsS0FBRCxFQUFXO0FBQ25CLGdCQUFJLENBQUNxRixZQUFMLENBQWtCckYsS0FBbEI7QUFDRDtBQUxILFFBREYsQ0FERjtBQVdEOzs7aUNBRVlBLEssRUFBTztBQUNsQixXQUFLMEMsUUFBTCxDQUFlO0FBQUUxQyxhQUFLLEVBQUVBO0FBQVQsT0FBZjtBQUNBLFdBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkJ5QyxHQUEzQixDQUFnQzNDLEtBQWhDO0FBQ0Q7Ozs7RUF4QzBCZCxTOztBQTJDN0JxSCxjQUFjLENBQUMzRCxTQUFmLEdBQTJCO0FBQ3pCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERCxDQUEzQjtBQUlld0QsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7SUFDUXZELE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU0wRCxZQUFZLEdBQUczSCxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTZCO0FBQ3ZEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMsdURBQUQ7QUFBZ0IsYUFBTyxFQUFFL0M7QUFBekIsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUHNELENBQTdCLENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTtxQkFFMEN2RSxFQUFFLENBQUNPLFU7SUFBckNxSCxXLGtCQUFBQSxXO0lBQWFwSCxNLGtCQUFBQSxNO0lBQVFxSCxRLGtCQUFBQSxRO2tCQUNHN0gsRUFBRSxDQUFDRSxPO0lBQTNCQyxTLGVBQUFBLFM7SUFBV0MsUSxlQUFBQSxRO0lBQ1hMLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7O0lBRUY0SCxZOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQUEsd0JBQzBCLEtBQUszRyxLQUQvQjtBQUFBLFVBQ0M0QixLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRa0YsYUFEUixlQUNRQSxhQURSO0FBRVAsVUFBSUMsTUFBTSxHQUFHLElBQWI7QUFDQSwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVJbkYsS0FBSyxpQkFDSDtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FDR0EsS0FESCxDQUhOLGVBUUUsb0JBQUMsUUFBRDtBQUNFLG9CQUFZLEVBQUUsNEJBQTRCO0FBQUEsY0FBeEJvRixNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxjQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCO0FBQ3hDRixnQkFBTSxHQUFHRSxRQUFUO0FBQ0EsOEJBQ0Usb0JBQUMsTUFBRDtBQUNFLHFCQUFTLEVBQUVDLGlEQUFVLENBQUMsQ0FBQyx3QkFBRCxFQUEyQjtBQUFFLDBCQUFZLENBQUNKO0FBQWYsYUFBM0IsQ0FBRCxDQUR2QjtBQUVFLG1CQUFPLEVBQUVHLFFBRlg7QUFHRSw2QkFBZUQsTUFIakI7QUFJRSxpQkFBSyxFQUFFO0FBQUVsRiw2QkFBZSxFQUFFZ0Y7QUFBbkI7QUFKVCxZQURGO0FBUUQsU0FYSDtBQVlFLHFCQUFhLEVBQUU7QUFBQSw4QkFDYixvQkFBQyxRQUFELHFCQUNFLG9CQUFDLFdBQUQ7QUFDRSxpQkFBSyxFQUFFQSxhQURUO0FBRUUsNEJBQWdCLEVBQUUsMEJBQUU3RyxLQUFGLEVBQWE7QUFBRSxtQkFBSSxDQUFDRCxLQUFMLENBQVdtSCxRQUFYLENBQW9CbEgsS0FBSyxDQUFDbUgsR0FBMUI7QUFBZ0MsYUFGbkU7QUFHRSx3QkFBWTtBQUhkLFlBREYsRUFNR04sYUFBYSxpQkFDWixvQkFBQyxNQUFEO0FBQ0UscUJBQVMsRUFBQyxPQURaO0FBRUUscUJBQVMsTUFGWDtBQUdFLG1CQUFPLEVBQUUsbUJBQU07QUFDYixtQkFBSSxDQUFDOUcsS0FBTCxDQUFXbUgsUUFBWCxDQUFvQixFQUFwQjs7QUFDQUosb0JBQU07QUFDUDtBQU5ILGFBUUdoSSxFQUFFLENBQUUsT0FBRixFQUFXLE1BQVgsQ0FSTCxDQVBKLENBRGE7QUFBQTtBQVpqQixRQVJGLENBREY7QUE0Q0Q7Ozs7RUFoRHdCSSxTOztBQW1EM0J3SCxZQUFZLENBQUM5RCxTQUFiLEdBQXlCO0FBQ3ZCakIsT0FBSyxFQUFFa0IsaURBQVMsQ0FBQ3VFLE1BRE07QUFFdkJGLFVBQVEsRUFBRXJFLGlEQUFTLENBQUN3RSxJQUFWLENBQWV0RSxVQUZGO0FBR3ZCOEQsZUFBYSxFQUFFaEUsaURBQVMsQ0FBQ3VFLE1BQVYsQ0FBaUJyRTtBQUhULENBQXpCO0FBTWUyRCwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFuSCxNLEdBQVdSLEVBQUUsQ0FBQ08sVSxDQUFkQyxNO0lBQ0FMLFMsR0FBY0gsRUFBRSxDQUFDRSxPLENBQWpCQyxTOztJQUVGb0ksYTs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBOztBQUFBLHdCQUNtRCxLQUFLdkgsS0FEeEQ7QUFBQSxVQUNDNEIsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUTRGLEtBRFIsZUFDUUEsS0FEUjtBQUFBLFVBQ2V2SCxLQURmLGVBQ2VBLEtBRGY7QUFBQSxVQUNzQndILFNBRHRCLGVBQ3NCQSxTQUR0QjtBQUFBLFVBQ2lDQyxhQURqQyxlQUNpQ0EsYUFEakM7QUFFUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUVELFNBQVMsR0FBRztBQUE1QixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHN0YsS0FBSyxpQkFBSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBMkNBLEtBQTNDLENBRFosRUFFRzhGLGFBQWEsaUJBQ1osb0JBQUMsNkRBQUQ7QUFDRSxnQkFBUSxFQUFFLGtCQUFDQyxhQUFEO0FBQUEsaUJBQW1CLEtBQUksQ0FBQzNILEtBQUwsQ0FBVzRILGVBQVgsQ0FBMkJELGFBQTNCLENBQW5CO0FBQUE7QUFEWixRQUhKLEVBTUdILEtBQUssaUJBQUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNkIsS0FBSzNGLFVBQUwsRUFBN0IsQ0FOWixDQURGLGVBU0Usb0JBQUMseURBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsZUFBTyxNQUZUO0FBR0UsZUFBTyxFQUFFLENBQUM7QUFBRTVCLGVBQUssRUFBRUE7QUFBVCxTQUFELENBSFg7QUFJRSxnQkFBUSxFQUFFLGtCQUFDSyxJQUFELEVBQU9MLEtBQVAsRUFBaUI7QUFDekIsZUFBSSxDQUFDRCxLQUFMLENBQVdtSCxRQUFYLENBQW9CbEgsS0FBcEI7QUFDRCxTQU5IO0FBT0UsV0FBRyxFQUFFLEtBQUtELEtBQUwsQ0FBVzZILEdBQVgsSUFBa0IsR0FQekI7QUFRRSxXQUFHLEVBQUUsS0FBSzdILEtBQUwsQ0FBVzhILEdBQVgsSUFBa0IsQ0FSekI7QUFTRSxZQUFJLEVBQUUsS0FBSzlILEtBQUwsQ0FBVytILElBQVgsSUFBbUIsQ0FUM0I7QUFVRSxnQkFBUSxFQUFFLEtBQUsvSCxLQUFMLFdBVlo7QUFXRSxlQUFPLEVBQUUsbUJBQU07QUFDYixlQUFJLENBQUNBLEtBQUwsQ0FBV2dJLE9BQVg7QUFDRDtBQWJILFFBVEYsQ0FERjtBQTJCRDs7O2lDQUVZO0FBQ1gsVUFBTTNHLElBQUksR0FBRyxJQUFiO0FBRFcsVUFFSG1HLEtBRkcsR0FFTyxLQUFLeEgsS0FGWixDQUVId0gsS0FGRztBQUdYLFVBQUksQ0FBQ0EsS0FBTCxFQUFZLE9BQU8sRUFBUDs7QUFDWixVQUFJQSxLQUFLLENBQUNTLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsNEJBQ0Usb0JBQUMsTUFBRDtBQUNFLG1CQUFTLEVBQUMsY0FEWjtBQUVFLGlCQUFPLE1BRlQ7QUFHRSxrQkFBUTtBQUhWLFdBSUVULEtBQUssQ0FBQyxDQUFELENBSlAsQ0FERjtBQVFEOztBQUNELGFBQU9BLEtBQUssQ0FBQ2xHLEdBQU4sQ0FBVSxVQUFDNEcsSUFBRCxFQUFPM0csS0FBUCxFQUFpQjtBQUNoQyxZQUFNNEcsV0FBVyxHQUFHakIsaURBQVUsQ0FBQztBQUM3QmtCLGdCQUFNLEVBQUUvRyxJQUFJLENBQUNyQixLQUFMLENBQVdxSSxVQUFYLEtBQTBCSDtBQURMLFNBQUQsQ0FBOUI7QUFHQSw0QkFDRSxvQkFBQyxNQUFEO0FBQ0UsYUFBRyxFQUFFM0csS0FEUDtBQUVFLGlCQUFPLE1BRlQ7QUFHRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2JGLGdCQUFJLENBQUNyQixLQUFMLENBQVdzSSxZQUFYLENBQXdCSixJQUF4QjtBQUNELFdBTEg7QUFNRSxtQkFBUyxFQUFFQztBQU5iLFdBUUdELElBUkgsQ0FERjtBQVlELE9BaEJNLENBQVA7QUFpQkQ7Ozs7RUEvRHlCL0ksUzs7QUFrRTVCb0ksYUFBYSxDQUFDMUUsU0FBZCxHQUEwQjtBQUN4QmpCLE9BQUssRUFBRWtCLGlEQUFTLENBQUN1RSxNQURPO0FBRXhCcEgsT0FBSyxFQUFFNkMsaURBQVMsQ0FBQ3lGLFNBQVYsQ0FBb0IsQ0FBQ3pGLGlEQUFTLENBQUN1RSxNQUFYLEVBQW1CdkUsaURBQVMsQ0FBQzBGLE1BQTdCLENBQXBCLENBRmlCO0FBR3hCckIsVUFBUSxFQUFFckUsaURBQVMsQ0FBQ3dFLElBQVYsQ0FBZXRFLFVBSEQ7QUFJeEJnRixTQUFPLEVBQUVsRixpREFBUyxDQUFDd0UsSUFBVixDQUFldEUsVUFKQTtBQUt4QndFLE9BQUssRUFBRTFFLGlEQUFTLENBQUMyRixLQUFWLElBQW1CM0YsaURBQVMsQ0FBQzRGLElBTFo7QUFNeEIsYUFBUzVGLGlEQUFTLENBQUN5RixTQUFWLENBQW9CLENBQUN6RixpREFBUyxDQUFDdUUsTUFBWCxFQUFtQnZFLGlEQUFTLENBQUMwRixNQUE3QixDQUFwQixDQU5lO0FBT3hCWCxLQUFHLEVBQUUvRSxpREFBUyxDQUFDMEYsTUFQUztBQVF4QlYsS0FBRyxFQUFFaEYsaURBQVMsQ0FBQzBGLE1BUlM7QUFTeEJULE1BQUksRUFBRWpGLGlEQUFTLENBQUMwRixNQVRRO0FBVXhCZCxlQUFhLEVBQUU1RSxpREFBUyxDQUFDNEYsSUFWRDtBQVd4QmQsaUJBQWUsRUFBRTlFLGlEQUFTLENBQUN3RSxJQVhIO0FBWXhCRyxXQUFTLEVBQUUzRSxpREFBUyxDQUFDdUU7QUFaRyxDQUExQjtBQWVlRSw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7O0FBQ0E7QUFDQTtBQUNBO2tCQUtJdkksRUFBRSxDQUFDRSxPO0lBRkxDLFMsZUFBQUEsUztJQUNBQyxRLGVBQUFBLFE7cUJBT0VKLEVBQUUsQ0FBQ08sVTtJQUhMb0osTyxrQkFBQUEsTztJQUNBQyxVLGtCQUFBQSxVO0lBQ0FwSixNLGtCQUFBQSxNOztJQUdJcUosVTs7Ozs7QUFDSixzQkFBWTdJLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLSyxLQUFMLEdBQWE7QUFDWEosV0FBSyxFQUFFO0FBREksS0FBYjtBQUlBLFVBQUs0QixVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JpRCxJQUFoQiwrQkFBbEI7QUFQaUI7QUFRbEI7Ozs7NkJBRVE7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtqRCxVQUFMLEVBREgsQ0FERjtBQUtEOzs7aUNBRVk7QUFBQTs7QUFBQSxVQUNIaUgsT0FERyxHQUNTLEtBQUs5SSxLQURkLENBQ0g4SSxPQURHO0FBR1gsYUFBT2xELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaUQsT0FBWixFQUFxQnhILEdBQXJCLENBQXlCLFVBQUNoQixJQUFELEVBQU9pQixLQUFQLEVBQWlCO0FBQy9DLDRCQUNFLG9CQUFDLFFBQUQ7QUFBVSxhQUFHLEVBQUVBO0FBQWYsV0FDR3VILE9BQU8sQ0FBQ3hJLElBQUQsQ0FBUCxDQUFjMkYsSUFBZCxLQUF1QixNQUF2QixpQkFDQyxvQkFBQyxNQUFEO0FBQ0UsYUFBRyxFQUFFMUUsS0FEUDtBQUVFLG1CQUFTLEVBQUUyRixpREFBVSxDQUNuQixDQUFDO0FBQUVrQixrQkFBTSxFQUFFLE1BQUksQ0FBQ3BJLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQks7QUFBL0IsV0FBRCxFQUF3QyxTQUF4QyxDQURtQixDQUZ2QjtBQUlFLGlCQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBSSxDQUFDTixLQUFMLENBQVdtSCxRQUFYLENBQW9CN0csSUFBcEI7QUFDRDtBQU5ILFdBUUd3SSxPQUFPLENBQUN4SSxJQUFELENBQVAsQ0FBYzBGLE9BUmpCLENBRkosRUFZRzhDLE9BQU8sQ0FBQ3hJLElBQUQsQ0FBUCxDQUFjMkYsSUFBZCxLQUF1QixNQUF2QixpQkFDQyxvQkFBQyxPQUFEO0FBQVMsY0FBSSxFQUFFNkMsT0FBTyxDQUFDeEksSUFBRCxDQUFQLENBQWMwRixPQUE3QjtBQUFzQyxhQUFHLEVBQUV6RTtBQUEzQyx3QkFDRSxvQkFBQyxVQUFEO0FBQ0Usd0JBQVl1SCxPQUFPLENBQUN4SSxJQUFELENBQVAsQ0FBYzBGLE9BRDVCO0FBRUUsbUJBQVMsRUFBRWtCLGlEQUFVLENBQ25CO0FBQUVrQixrQkFBTSxFQUFFLE1BQUksQ0FBQ3BJLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQks7QUFBL0IsV0FEbUIsQ0FGdkI7QUFJRSxjQUFJLEVBQUV3SSxPQUFPLENBQUN4SSxJQUFELENBQVAsQ0FBYzJGLElBSnRCO0FBS0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGtCQUFJLENBQUNqRyxLQUFMLENBQVdtSCxRQUFYLENBQW9CN0csSUFBcEI7QUFDRDtBQVBILFVBREYsQ0FiSixDQURGO0FBMkJELE9BNUJNLENBQVA7QUE2QkQ7Ozs7RUFuRHNCbkIsUzs7QUFzRHpCMEosVUFBVSxDQUFDaEcsU0FBWCxHQUF1QjtBQUNyQmlHLFNBQU8sRUFBRWhHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREw7QUFFckJtRSxVQUFRLEVBQUVyRSxpREFBUyxDQUFDd0UsSUFBVixDQUFldEUsVUFGSjtBQUdyQi9DLE9BQUssRUFBRTZDLGlEQUFTLENBQUN1RSxNQUFWLENBQWlCckU7QUFISCxDQUF2QjtBQU1lNkYseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0lBRVE5SixFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO2tCQUlKQyxFQUFFLENBQUNFLE87SUFGTEMsUyxlQUFBQSxTO0lBQ0FDLFEsZUFBQUEsUTtxQkFPRUosRUFBRSxDQUFDTyxVO0lBSkxDLE0sa0JBQUFBLE07SUFDQUksUSxrQkFBQUEsUTtJQUNBK0ksTyxrQkFBQUEsTztJQUNBbEosVyxrQkFBQUEsVzs7SUFHSXNKLGlCOzs7OztBQUNKLDZCQUFZL0ksS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtLLEtBQUwsR0FBYTtBQUNYMkksVUFBSSxFQUFFO0FBREssS0FBYjs7QUFHQSxVQUFLQyxxQkFBTDs7QUFMaUI7QUFNbEI7Ozs7NkJBRVE7QUFBQSxVQUNDRCxJQURELEdBQ1UsS0FBSzNJLEtBRGYsQ0FDQzJJLElBREQ7QUFFUCxVQUFNRSxPQUFPLEdBQUc7QUFDZEMsZUFBTyxFQUFFO0FBQ1BuRCxpQkFBTyxFQUFFakgsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBREo7QUFFUGtILGNBQUksRUFBRTtBQUZDLFNBREs7QUFLZG1ELGNBQU0sRUFBRTtBQUNOcEQsaUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQURMO0FBRU5rSCxjQUFJLEVBQUU7QUFGQSxTQUxNO0FBU2RvRCxjQUFNLEVBQUU7QUFDTnJELGlCQUFPLEVBQUVqSCxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FETDtBQUVOa0gsY0FBSSxFQUFFO0FBRkE7QUFUTSxPQUFoQjtBQUZPLFVBZ0JDcUQsUUFoQkQsR0FnQmMsS0FBS3RKLEtBaEJuQixDQWdCQ3NKLFFBaEJEO0FBaUJQLFVBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBM0QsWUFBTSxDQUFDQyxJQUFQLENBQVlxRCxPQUFaLEVBQXFCNUgsR0FBckIsQ0FBeUIsVUFBQWtJLEdBQUcsRUFBSTtBQUM5QixZQUFJRixRQUFKLEVBQWM7QUFDWixjQUFJQSxRQUFRLENBQUNHLFFBQVQsQ0FBa0JELEdBQWxCLENBQUosRUFBNEI7QUFDMUIsbUJBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBQ0RELGlCQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQk4sT0FBTyxDQUFDTSxHQUFELENBQXhCO0FBQ0QsT0FQRDtBQWxCTyx3QkEyQmtDLEtBQUt4SixLQTNCdkM7QUFBQSxVQTJCQzBKLFlBM0JELGVBMkJDQSxZQTNCRDtBQUFBLFVBMkJlQyxjQTNCZixlQTJCZUEsY0EzQmY7QUE2QlAsMEJBQ0Usb0JBQUMsUUFBRCxxQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVJRCxZQUFZLGlCQUNWO0FBQ0UsaUJBQVMsRUFBQztBQURaLFNBR0dBLFlBSEgsQ0FITixFQVNHLENBQUNDLGNBQUQsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0Usb0JBQUMsV0FBRCxRQUNHL0QsTUFBTSxDQUFDQyxJQUFQLENBQVkwRCxTQUFaLEVBQXVCakksR0FBdkIsQ0FBMkIsVUFBQ3NJLE1BQUQsRUFBU3JJLEtBQVQsRUFBbUI7QUFBQSxnQ0FDbkJnSSxTQUFTLENBQUNLLE1BQUQsQ0FEVTtBQUFBLFlBQ3JDNUQsT0FEcUMscUJBQ3JDQSxPQURxQztBQUFBLFlBQzVCQyxJQUQ0QixxQkFDNUJBLElBRDRCO0FBRTdDLDRCQUNFLG9CQUFDLE9BQUQ7QUFBUyxjQUFJLEVBQUVELE9BQWY7QUFBd0IsYUFBRyxFQUFFekU7QUFBN0Isd0JBQ0Usb0JBQUMsTUFBRDtBQUNFLG1CQUFTLEVBQUUsQ0FBQ3FJLE1BQU0sS0FBS1osSUFBWCxHQUNSLGdCQURRLEdBRVIsRUFGTyxJQUVEWSxNQUhaO0FBSUUsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUNaLDhCQURZLEVBQ29CO0FBQzlCdEgsb0JBQU0sRUFBRW9IO0FBRHNCLGFBRHBCLENBQWQ7QUFJQXRILG9CQUFRLENBQUN5SCxhQUFULENBQXVCRixLQUF2QjtBQUNEO0FBVkgsd0JBWUUsb0JBQUMsUUFBRDtBQUFVLGNBQUksRUFBRTVEO0FBQWhCLFVBWkYsQ0FERixDQURGO0FBa0JELE9BcEJBLENBREgsQ0FERixDQVZKLENBREYsRUFxQ0csS0FBS2pHLEtBQUwsQ0FBV2dLLFFBQVgsaUJBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLaEssS0FBTCxDQUFXZ0ssUUFEZCxDQXRDSixDQURGO0FBNENEOzs7bUNBRWNKLE0sRUFBUTtBQUNyQixXQUFLakgsUUFBTCxDQUFjO0FBQUVxRyxZQUFJLEVBQUVZO0FBQVIsT0FBZDtBQUNBNUssUUFBRSxDQUFDbUUsU0FBSCxDQUFhOEcsZUFBYixDQUE2QkwsTUFBN0I7QUFDQSxXQUFLNUosS0FBTCxDQUFXbUgsUUFBWCxDQUFvQnlDLE1BQXBCO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBTXZJLElBQUksR0FBRyxJQUFiO0FBQ0FpQixjQUFRLENBQUNDLGdCQUFULENBQTBCLDhCQUExQixFQUEwRCxVQUFVZCxDQUFWLEVBQWE7QUFDckVKLFlBQUksQ0FBQzZJLGNBQUwsQ0FBb0J6SSxDQUFDLENBQUNlLE1BQXRCO0FBQ0QsT0FGRDtBQUdEOzs7O0VBL0Y2QnJELFM7O0FBa0doQzRKLGlCQUFpQixDQUFDbEcsU0FBbEIsR0FBOEI7QUFDNUJzRSxVQUFRLEVBQUVyRSxpREFBUyxDQUFDd0UsSUFEUTtBQUU1Qm9DLGNBQVksRUFBRTVHLGlEQUFTLENBQUN1RSxNQUZJO0FBRzVCc0MsZ0JBQWMsRUFBRTdHLGlEQUFTLENBQUM0RixJQUhFO0FBSTVCc0IsVUFBUSxFQUFFbEgsaURBQVMsQ0FBQ3FILEdBSlE7QUFLNUJiLFVBQVEsRUFBRXhHLGlEQUFTLENBQUMyRjtBQUxRLENBQTlCO0FBUWVNLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFDQTtJQUVRNUosUyxHQUFjSCxFQUFFLENBQUNFLE8sQ0FBakJDLFM7O0lBRUZpTCxpQjs7Ozs7QUFDSiw2QkFBWXBLLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFFQSxVQUFLSyxLQUFMLEdBQWE7QUFDWDJHLFlBQU0sRUFBRTtBQURHLEtBQWI7QUFIaUI7QUFNbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBRSxLQUFLaEgsS0FBTCxDQUFXTSxJQUFYLEdBQWtCLEtBQUtOLEtBQUwsQ0FBV00sSUFBWCxHQUFrQixRQUFwQyxHQUErQyxFQUY1RDtBQUdFLGFBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLEtBSHBCO0FBSUUsV0FBRyxFQUFFLEtBQUtELEtBQUwsQ0FBVzhILEdBSmxCO0FBS0UsV0FBRyxFQUFFLEtBQUs5SCxLQUFMLENBQVc2SCxHQUxsQjtBQU1FLFlBQUksRUFBRSxLQUFLN0gsS0FBTCxDQUFXK0gsSUFObkI7QUFPRSxnQkFBUSxFQUNOLGtCQUFBdEcsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ3pCLEtBQUwsQ0FBV21ILFFBQVgsQ0FBcUIsTUFBSSxDQUFDbkgsS0FBTCxDQUFXTSxJQUFoQyxFQUNIbUIsQ0FBQyxDQUFDNEksTUFBRixDQUFTcEssS0FBVCxLQUFtQixFQUFuQixHQUF3QixDQUF4QixHQUE0QndCLENBQUMsQ0FBQzRJLE1BQUYsQ0FBU3BLLEtBRGxDLENBQUo7QUFBQTtBQVJMLFFBREYsRUFhRyxLQUFLRCxLQUFMLENBQVdNLElBQVgsaUJBQ0M7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQXlCLGVBQU8sRUFBRSxLQUFLTixLQUFMLENBQVdNLElBQVgsR0FBa0I7QUFBcEQsU0FDRyxLQUFLTixLQUFMLENBQVdNLElBRGQsQ0FkSixDQURGO0FBcUJEOzs7O0VBL0I2Qm5CLFM7O0FBa0NoQ2lMLGlCQUFpQixDQUFDdkgsU0FBbEIsR0FBOEI7QUFDNUJ2QyxNQUFJLEVBQUV3QyxpREFBUyxDQUFDdUUsTUFEWTtBQUU1QnBILE9BQUssRUFBRTZDLGlEQUFTLENBQUN5RixTQUFWLENBQXFCLENBQUN6RixpREFBUyxDQUFDdUUsTUFBWCxFQUFtQnZFLGlEQUFTLENBQUMwRixNQUE3QixDQUFyQixDQUZxQjtBQUc1QlYsS0FBRyxFQUFFaEYsaURBQVMsQ0FBQzBGLE1BSGE7QUFJNUJYLEtBQUcsRUFBRS9FLGlEQUFTLENBQUMwRixNQUphO0FBSzVCVCxNQUFJLEVBQUVqRixpREFBUyxDQUFDMEYsTUFMWTtBQU01QnJCLFVBQVEsRUFBRXJFLGlEQUFTLENBQUN3RTtBQU5RLENBQTlCO0FBU2U4QyxnRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0lBRVFyTCxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO3FCQUlKQyxFQUFFLENBQUNPLFU7SUFGTHFKLFUsa0JBQUFBLFU7SUFDQUQsTyxrQkFBQUEsTztJQUVNeEosUyxHQUFjSCxFQUFFLENBQUNFLE8sQ0FBakJDLFM7O0lBRUZtTCxhOzs7OztBQUNKLHlCQUFZdEssS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUt1SyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0J6RixJQUFsQiwrQkFBcEI7QUFDQSxVQUFLMEYsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCMUYsSUFBaEIsK0JBQWxCO0FBSGlCO0FBSWxCOzs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBSSxLQUFLOUUsS0FBTCxDQUFXeUssU0FBZixFQUEwQjtBQUN4QixlQUFPLElBQVA7QUFDRDs7QUFDRCwwQkFDRSxvQkFBQyxPQUFEO0FBQ0UsV0FBRyxFQUFDLGNBRE47QUFFRSxZQUFJLEVBQUUsS0FBS3pLLEtBQUwsQ0FBVzBLLE1BQVgsR0FBb0IzTCxFQUFFLENBQUMsZUFBRCxFQUFrQixNQUFsQixDQUF0QixHQUFrREEsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEI7QUFGNUQsc0JBSUUsb0JBQUMsVUFBRDtBQUNFLFdBQUcsRUFBQyxXQUROO0FBRUUsWUFBSSxFQUFFLEtBQUtpQixLQUFMLENBQVcwSyxNQUFYLEdBQW9CLGFBQXBCLEdBQW9DLGVBRjVDO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDMUssS0FBTCxDQUFXMkssUUFBWCxFQUFOO0FBQUEsU0FIWDtBQUlFLGlCQUFTLEVBQUV6RCxpREFBVSxDQUNuQixDQUFDO0FBQUVrQixnQkFBTSxFQUFFLEtBQUtwSSxLQUFMLENBQVcwSztBQUFyQixTQUFELEVBQWdDLE1BQWhDLENBRG1CO0FBSnZCLFFBSkYsQ0FERjtBQWNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNRSxXQUFXLEdBQUcxRCxpREFBVSxDQUFDLENBQzdCLHdCQUQ2QixFQUU3QjtBQUFFLHdCQUFnQixLQUFLbEgsS0FBTCxDQUFXOEksT0FBWCxDQUFtQmIsTUFBbkIsS0FBOEI7QUFBaEQsT0FGNkIsQ0FBRCxDQUE5QjtBQUtBLDBCQUNFO0FBQUssaUJBQVMsRUFBRTJDO0FBQWhCLFNBQ0csS0FBS0osVUFBTCxFQURILEVBRUcsS0FBS3hLLEtBQUwsQ0FBVzhJLE9BQVgsQ0FBbUJ4SCxHQUFuQixDQUF1QixVQUFDdUosQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEMsNEJBQ0Usb0JBQUMsb0VBQUQ7QUFDRSxhQUFHLEVBQUVBLENBRFA7QUFFRSxrQkFBUSxFQUFFLGtCQUFDeEssSUFBRCxFQUFPTCxLQUFQO0FBQUEsbUJBQWlCLE1BQUksQ0FBQ0QsS0FBTCxDQUFXbUgsUUFBWCxDQUFvQjdHLElBQXBCLEVBQ3pCTCxLQUR5QixDQUFqQjtBQUFBLFdBRlo7QUFJRSxlQUFLLEVBQUU0SyxDQUFDLENBQUM1SyxLQUpYO0FBS0UsbUJBQVMsRUFBRTRLLENBQUMsQ0FBQ3ZLLElBQUYsR0FBU3VLLENBQUMsQ0FBQ3ZLLElBQUYsR0FBUyxRQUFsQixHQUE2QixFQUwxQztBQU1FLGNBQUksRUFBRXVLLENBQUMsQ0FBQ3ZLLElBTlY7QUFPRSxhQUFHLEVBQUUsTUFBSSxDQUFDTixLQUFMLENBQVc2SCxHQVBsQjtBQVFFLGFBQUcsRUFBRSxNQUFJLENBQUM3SCxLQUFMLENBQVc4SCxHQVJsQjtBQVNFLGNBQUksRUFBRSxNQUFJLENBQUM5SCxLQUFMLENBQVcrSDtBQVRuQixVQURGO0FBYUQsT0FkQSxDQUZILEVBaUJHLEtBQUt3QyxZQUFMLG1CQUNDLG9CQUFDLE9BQUQ7QUFDRSxXQUFHLEVBQUMsZUFETjtBQUVFLFlBQUksRUFDRixLQUFLdkssS0FBTCxDQUFXOEksT0FBWCxDQUFtQmIsTUFBbkIsR0FBNEIsQ0FBNUIsR0FDSWxKLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixNQUFyQixDQUROLEdBQ3FDQSxFQUFFLENBQUMsYUFBRCxFQUFnQixNQUFoQjtBQUozQyxzQkFPRSxvQkFBQyxVQUFEO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsY0FGUDtBQUdFLGlCQUFTLEVBQUMsT0FIWjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2lCLEtBQUwsQ0FBV2dJLE9BQVgsRUFBTjtBQUFBO0FBSlgsUUFQRixDQWxCSixDQURGO0FBbUNEOzs7bUNBRWM7QUFBQSx3QkFDaUIsS0FBS2hJLEtBRHRCO0FBQUEsVUFDTCtLLFFBREssZUFDTEEsUUFESztBQUFBLFVBQ0tqQyxPQURMLGVBQ0tBLE9BREw7O0FBRWIsVUFBSSxRQUFPaUMsUUFBUCxNQUFvQixRQUF4QixFQUFrQztBQUNoQztBQUNBLGVBQU8zSSxVQUFVLENBQUMySSxRQUFELENBQVYsSUFBd0IzSSxVQUFVLENBQUMwRyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVc3SSxLQUFaLENBQXpDO0FBQ0Q7O0FBQ0QsYUFBTzZJLE9BQU8sQ0FBQ2tDLE1BQVIsRUFDTDtBQUNBLGdCQUFBQyxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDaEwsS0FBUCxJQUFnQjhLLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDM0ssSUFBUixDQUE1QjtBQUFBLE9BRkQsRUFHTDJILE1BSEssR0FHSSxDQUhYO0FBSUQ7Ozs7RUFoRnlCOUksUzs7QUFtRjVCbUwsYUFBYSxDQUFDekgsU0FBZCxHQUEwQjtBQUN4QmlHLFNBQU8sRUFBRWhHLGlEQUFTLENBQUMyRixLQUFWLENBQWdCekYsVUFERDtBQUV4QitILFVBQVEsRUFBRWpJLGlEQUFTLENBQUN5RixTQUFWLENBQW9CLENBQUN6RixpREFBUyxDQUFDdUUsTUFBWCxFQUFtQnZFLGlEQUFTLENBQUMwRixNQUE3QixFQUFxQzFGLGlEQUFTLENBQUNDLE1BQS9DLENBQXBCLENBRmM7QUFHeEI0SCxVQUFRLEVBQUU3SCxpREFBUyxDQUFDd0UsSUFISTtBQUl4QkgsVUFBUSxFQUFFckUsaURBQVMsQ0FBQ3dFLElBQVYsQ0FBZXRFLFVBSkQ7QUFLeEIwSCxRQUFNLEVBQUU1SCxpREFBUyxDQUFDNEYsSUFMTTtBQU14QlYsU0FBTyxFQUFFbEYsaURBQVMsQ0FBQ3dFLElBTks7QUFPeEJtRCxXQUFTLEVBQUUzSCxpREFBUyxDQUFDNEYsSUFQRztBQVF4QlosS0FBRyxFQUFFaEYsaURBQVMsQ0FBQzBGLE1BUlM7QUFTeEJYLEtBQUcsRUFBRS9FLGlEQUFTLENBQUMwRixNQVRTO0FBVXhCVCxNQUFJLEVBQUVqRixpREFBUyxDQUFDMEY7QUFWUSxDQUExQjtBQWFlOEIsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdPLElBQU1ZLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZDLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixXQUFPQSxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGQyxRQUFJLENBQUNDLEtBQUwsQ0FBV0YsS0FBWDtBQUNELEdBRkQsQ0FFRSxPQUFPRyxLQUFQLEVBQWM7QUFDZCxXQUFPSCxLQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEtBQVgsQ0FBUDtBQUNELENBVk07QUFZUDs7Ozs7O0FBS08sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLFNBQVFBLElBQUksSUFBSSxRQUFPQSxJQUFQLE1BQWdCLFFBQXhCLElBQW9DLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQTdDO0FBQ0QsQ0FGTTtBQUlQOzs7O0FBR08sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3RCLE1BQUQsRUFBd0I7QUFBQSxvQ0FBWnVCLE9BQVk7QUFBWkEsV0FBWTtBQUFBOztBQUMvQyxNQUFJLENBQUNBLE9BQU8sQ0FBQzNELE1BQWIsRUFBcUIsT0FBT29DLE1BQVAsQ0FEMEIsQ0FFL0M7O0FBQ0EsTUFBTXdCLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxLQUFSLEVBQWY7O0FBRUEsTUFBSVAsUUFBUSxDQUFDbEIsTUFBRCxDQUFSLElBQW9Ca0IsUUFBUSxDQUFDTSxNQUFELENBQWhDLEVBQTBDO0FBQ3hDO0FBQ0EsU0FBSyxJQUFNckMsR0FBWCxJQUFrQnFDLE1BQWxCLEVBQTBCO0FBQ3hCLFVBQUlOLFFBQVEsQ0FBQ00sTUFBTSxDQUFDckMsR0FBRCxDQUFQLENBQVosRUFBMkI7QUFDekI7QUFDQSxZQUFJLENBQUNhLE1BQU0sQ0FBQ2IsR0FBRCxDQUFYLEVBQWtCNUQsTUFBTSxDQUFDbUcsTUFBUCxDQUFjMUIsTUFBZCxzQkFBeUJiLEdBQXpCLEVBQStCLEVBQS9CO0FBQ2xCbUMsaUJBQVMsQ0FBQ3RCLE1BQU0sQ0FBQ2IsR0FBRCxDQUFQLEVBQWNxQyxNQUFNLENBQUNyQyxHQUFELENBQXBCLENBQVQ7QUFDRCxPQUpELE1BSU87QUFDTDtBQUNBNUQsY0FBTSxDQUFDbUcsTUFBUCxDQUFjMUIsTUFBZCxzQkFBeUJiLEdBQXpCLEVBQStCcUMsTUFBTSxDQUFDckMsR0FBRCxDQUFyQztBQUNEO0FBQ0Y7QUFDRixHQWpCOEMsQ0FrQi9DOzs7QUFDQSxTQUFPbUMsU0FBUyxNQUFULFVBQVV0QixNQUFWLFNBQXFCdUIsT0FBckIsRUFBUDtBQUNELENBcEJNO0FBc0JBLElBQU1JLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQy9MLEtBQUQsRUFBVztBQUM5Q0EsT0FBSyxHQUFHaUwsY0FBYyxDQUFDakwsS0FBRCxDQUF0Qjs7QUFDQSxNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBakIsSUFDRjJGLE1BQU0sQ0FBQ3FHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2xNLEtBQXJDLEVBQTRDLFNBQTVDLENBREUsSUFFRjJGLE1BQU0sQ0FBQ3FHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2xNLEtBQXJDLEVBQTRDLFFBQTVDLENBRkUsSUFHRjJGLE1BQU0sQ0FBQ3FHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2xNLEtBQXJDLEVBQTRDLFFBQTVDLENBSEYsRUFHeUQ7QUFDdkQsV0FBT0EsS0FBUDtBQUNEOztBQUNELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkEsU0FBSyxHQUFHO0FBQ05rSixhQUFPLEVBQUVsSixLQURIO0FBRU5tSixZQUFNLEVBQUVuSixLQUZGO0FBR05vSixZQUFNLEVBQUVwSjtBQUhGLEtBQVI7QUFLQSxXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsS0FBUDtBQUNELENBbEJNLEM7Ozs7Ozs7Ozs7OztBQzlDUDtBQUFBO0FBQ0EsSUFBTW1NLEdBQUcsR0FBRztBQUNWQyxVQUFRLGVBQUU7QUFDUixTQUFLLEVBQUMsNEJBREU7QUFDMkIsU0FBSyxFQUFDLE9BRGpDO0FBRVIsVUFBTSxFQUFDLE9BRkM7QUFFTyxXQUFPLEVBQUM7QUFGZixrQkFJUjtBQUNFLEtBQUMsRUFBQztBQURKLElBSlEsQ0FEQTtBQVNWQyxjQUFZLGVBQUU7QUFDWixTQUFLLEVBQUMsNEJBRE07QUFDdUIsU0FBSyxFQUFDLE9BRDdCO0FBRVosVUFBTSxFQUFDLE9BRks7QUFFRyxXQUFPLEVBQUM7QUFGWCxrQkFJWjtBQUNFLEtBQUMsRUFBQztBQURKLElBSlksZUFPWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBUFksZUFRWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBUlksZUFTWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBVFksZUFVWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBVlksZUFXWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBWFksZUFZWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBWlksZUFhWjtBQUNFLEtBQUMsRUFBQztBQURKLElBYlksZUFnQlo7QUFDRSxLQUFDLEVBQUM7QUFESixJQWhCWSxlQW1CWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBbkJZLGVBb0JaO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFwQlksZUFxQlo7QUFDRSxLQUFDLEVBQUM7QUFESixJQXJCWSxlQXdCWjtBQUFNLEtBQUMsRUFBQztBQUFSLElBeEJZLENBVEo7QUFtQ1ZDLFdBQVMsZUFBRTtBQUNULFNBQUssRUFBQyw0QkFERztBQUMwQixTQUFLLEVBQUMsT0FEaEM7QUFFVCxVQUFNLEVBQUMsT0FGRTtBQUVNLFdBQU8sRUFBQztBQUZkLGtCQUlUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFKUyxlQU9UO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFQUyxlQVFUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFSUyxlQVNUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFUUyxlQVVUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFWUyxlQVdUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFYUyxlQWNUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFkUyxlQWVUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFmUyxlQWtCVDtBQUNFLEtBQUMsRUFBQztBQURKLElBbEJTLGVBcUJUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFyQlMsZUFzQlQ7QUFBTSxLQUFDLEVBQUM7QUFBUixJQXRCUyxlQXVCVDtBQUNFLEtBQUMsRUFBQztBQURKLElBdkJTLGVBMEJUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUExQlMsQ0FuQ0Q7QUErRFZDLFdBQVMsZUFBRTtBQUNULFNBQUssRUFBQyw0QkFERztBQUMwQixTQUFLLEVBQUMsT0FEaEM7QUFFVCxVQUFNLEVBQUMsT0FGRTtBQUVNLFdBQU8sRUFBQztBQUZkLGtCQUlUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFKUyxlQU9UO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFQUyxlQVFUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFSUyxlQVNUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFUUyxlQVVUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFWUyxlQVdUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFYUyxlQVlUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFaUyxlQWFUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFiUyxlQWdCVDtBQUNFLEtBQUMsRUFBQztBQURKLElBaEJTLGVBbUJUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFuQlMsZUFvQlQ7QUFBTSxLQUFDLEVBQUM7QUFBUixJQXBCUyxlQXFCVDtBQUNFLEtBQUMsRUFBQztBQURKLElBckJTLGVBd0JUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUF4QlMsQ0EvREQ7QUEyRlZDLElBQUUsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ0YsNENBQ0U7QUFDRSxLQUFDLEVBQUM7QUFESixJQURGLGVBSUU7QUFDRSxLQUFDLEVBQUM7QUFESixJQUpGLENBREUsQ0EzRk07QUFxR1ZDLElBQUUsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ0YsNENBQ0U7QUFDRSxLQUFDLEVBQUM7QUFESixJQURGLGVBSUU7QUFDRSxLQUFDLEVBQUM7QUFESixJQUpGLENBREUsQ0FyR007QUErR1ZDLFNBQU8sZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ1AsNENBQ0U7QUFDRSxLQUFDLEVBQUM7QUFESixJQURGLENBRE8sQ0EvR0M7QUFzSFZDLFlBQVUsZUFBRTtBQUNWLFNBQUssRUFBQyw0QkFESTtBQUN5QixXQUFPLEVBQUMsaUJBRGpDO0FBRVYsYUFBUyxFQUFDO0FBRkEsa0JBSVY7QUFBTSxTQUFLLEVBQUMsT0FBWjtBQUFvQixVQUFNLEVBQUMsT0FBM0I7QUFBbUMsTUFBRSxFQUFDO0FBQXRDLElBSlUsZUFLVjtBQUFNLEtBQUMsRUFBQztBQUFSLElBTFUsZUFNVjtBQUFNLEtBQUMsRUFBQztBQUFSLElBTlUsZUFPVjtBQUFNLEtBQUMsRUFBQztBQUFSLElBUFUsZUFRVjtBQUFNLEtBQUMsRUFBQztBQUFSLElBUlUsZUFTVjtBQUFNLEtBQUMsRUFBQztBQUFSLElBVFUsZUFVVjtBQUNFLEtBQUMsRUFBQztBQURKLElBVlUsQ0F0SEY7QUFvSVZDLGVBQWEsZUFBRTtBQUNiLFNBQUssRUFBQyw0QkFETztBQUViLFdBQU8sRUFBQyxpQkFGSztBQUdiLGFBQVMsRUFBQztBQUhHLGtCQUtiO0FBQ0UsYUFBUyxFQUFDLEdBRFo7QUFDZ0IsS0FBQyxFQUFDLEtBRGxCO0FBQ3dCLEtBQUMsRUFBQyxLQUQxQjtBQUNnQyxTQUFLLEVBQUMsT0FEdEM7QUFDOEMsVUFBTSxFQUFDLE9BRHJEO0FBRUUsTUFBRSxFQUFDO0FBRkwsSUFMYSxlQVNiO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFUYSxlQVliO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFaYSxlQWViO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFmYSxlQWdCYjtBQUFNLEtBQUMsRUFBQztBQUFSLElBaEJhLGVBaUJiO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFqQmEsZUFrQmI7QUFDRSxLQUFDLEVBQUM7QUFESixJQWxCYSxlQXFCYjtBQUNFLEtBQUMsRUFBQztBQURKLElBckJhLENBcElMO0FBNkpWQyxXQUFTLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUNUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFEUyxlQUlUO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFKUyxlQUtUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFMUyxlQVFUO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFSUyxDQTdKRDtBQXlLVkMsWUFBVSxlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxrQkFDVjtBQUFNLFNBQUssRUFBQyxPQUFaO0FBQW9CLFVBQU0sRUFBQztBQUEzQixJQURVLGVBRVY7QUFDRSxLQUFDLEVBQUM7QUFESixJQUZVLGVBS1Y7QUFBTSxLQUFDLEVBQUM7QUFBUixJQUxVLGVBTVY7QUFDRSxLQUFDLEVBQUM7QUFESixJQU5VLGVBU1Y7QUFDRSxLQUFDLEVBQUM7QUFESixJQVRVLGVBWVY7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLEtBQUMsRUFBQztBQUZKLElBWlUsZUFnQlY7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLEtBQUMsRUFBQztBQUZKLElBaEJVLGVBb0JWO0FBQ0UsYUFBUyxFQUFDLFVBRFo7QUFFRSxLQUFDLEVBQUM7QUFGSixJQXBCVSxlQXdCVjtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsS0FBQyxFQUFDO0FBRkosSUF4QlUsQ0F6S0Y7QUFzTVZDLGVBQWEsZUFBRTtBQUNiLFNBQUssRUFBQyw0QkFETztBQUViLFdBQU8sRUFBQztBQUZLLGtCQUliO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFKYSxlQU9iO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFQYSxlQVFiO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFSYSxlQVdiO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFYYSxlQWNiO0FBQU0sS0FBQyxFQUFDLE1BQVI7QUFBZSxTQUFLLEVBQUMsT0FBckI7QUFBNkIsVUFBTSxFQUFDO0FBQXBDLElBZGEsQ0F0TUw7QUFzTlZDLGNBQVksZUFBRTtBQUNaLFNBQUssRUFBQyw0QkFETTtBQUVaLFdBQU8sRUFBQztBQUZJLGtCQUlaO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFKWSxlQU9aO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFQWSxlQVFaO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFSWSxlQVdaO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFYWSxlQWNaO0FBQU0sU0FBSyxFQUFDLE9BQVo7QUFBb0IsVUFBTSxFQUFDO0FBQTNCLElBZFksQ0F0Tko7QUFzT1ZDLHFCQUFtQixlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxrQkFDbkI7QUFDRSxLQUFDLEVBQUM7QUFESixJQURtQixDQXRPWDtBQTJPVkMsNEJBQTBCLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUMxQjtBQUNFLEtBQUMsRUFBQztBQURKLElBRDBCLENBM09sQjtBQWdQVkMsb0JBQWtCLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUNsQjtBQUNFLEtBQUMsRUFBQztBQURKLElBRGtCLENBaFBWO0FBcVBWQyxzQkFBb0IsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ3BCO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFEb0IsQ0FyUFo7QUEwUFZDLHVCQUFxQixlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxrQkFDckI7QUFDRSxLQUFDLEVBQUM7QUFESixJQURxQixDQTFQYjtBQStQVkMsdUJBQXFCLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUNyQjtBQUNFLEtBQUMsRUFBQztBQURKLElBRHFCLENBL1BiO0FBb1FWQyxxQkFBbUIsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ25CO0FBQU0sS0FBQyxFQUFDO0FBQVIsSUFEbUIsQ0FwUVg7QUF1UVZDLGVBQWEsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ2I7QUFDRSxLQUFDLEVBQUM7QUFESixJQURhLENBdlFMO0FBNFFWQyxnQkFBYyxlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxrQkFDZDtBQUNFLEtBQUMsRUFBQztBQURKLElBRGMsQ0E1UU47QUFpUlZDLGdCQUFjLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUNkO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFEYyxDQWpSTjtBQXNSVkMsZ0JBQWMsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ2Q7QUFDRSxLQUFDLEVBQUM7QUFESixJQURjLENBdFJOO0FBMlJWQyxnQkFBYyxlQUFFO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQztBQUFoRCxrQkFDZDtBQUNFLEtBQUMsRUFBQztBQURKLElBRGMsQ0EzUk47QUFnU1ZDLGdCQUFjLGVBQUU7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDO0FBQWhELGtCQUNkO0FBQ0UsS0FBQyxFQUFDO0FBREosSUFEYyxDQWhTTjtBQXFTVkMsZ0JBQWMsZUFBRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUM7QUFBaEQsa0JBQ2Q7QUFDRSxLQUFDLEVBQUM7QUFESixJQURjO0FBclNOLENBQVo7QUE0U2UzQixrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1NBOztBQUNBO0FBQ0E7SUFFUXJOLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7a0JBQ3dCQyxFQUFFLENBQUNFLE87SUFBM0JDLFMsZUFBQUEsUztJQUFXQyxRLGVBQUFBLFE7cUJBQzJCSixFQUFFLENBQUNPLFU7SUFBekN5TyxZLGtCQUFBQSxZO0lBQWNDLFMsa0JBQUFBLFM7SUFBV0MsUSxrQkFBQUEsUTs7SUFFM0JDLG9COzs7OztBQUNKLGdDQUFZbk8sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtvTyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0J0SixJQUFoQiwrQkFBbEI7QUFGaUI7QUFHbEI7Ozs7aUNBRVk7QUFBQSx3QkFDK0IsS0FBSzlFLEtBRHBDO0FBQUEsVUFDSHFPLFFBREcsZUFDSEEsUUFERztBQUFBLFVBQ09DLG1CQURQLGVBQ09BLG1CQURQO0FBRVgsVUFBTUMsVUFBVSxHQUFHQyxrQkFBa0IsQ0FBQ0MsV0FBbkIsQ0FBK0IzRixPQUFsRDtBQUVBLFVBQU1BLE9BQU8sR0FBRyxFQUFoQjtBQUNBeUYsZ0JBQVUsQ0FBQ0csT0FBWCxDQUFtQixVQUFDQyxXQUFELEVBQWNwTixLQUFkLEVBQXdCO0FBQ3pDLFlBQU15SSxRQUFRLEdBQUcsRUFBakI7QUFDQXBFLGNBQU0sQ0FBQ0MsSUFBUCxDQUFZOEksV0FBVyxDQUFDbEosUUFBeEIsRUFDR2lKLE9BREgsQ0FDVyxVQUFDRSxJQUFELEVBQU9yTixLQUFQLEVBQWlCO0FBQ3hCLGNBQUksQ0FBQytNLG1CQUFtQixDQUFDN0UsUUFBcEIsQ0FDSGtGLFdBQVcsQ0FBQ2xKLFFBQVosQ0FBcUJtSixJQUFyQixFQUEyQnRPLElBRHhCLENBQUwsRUFDb0M7QUFDbEMsbUJBQU8sS0FBUDtBQUNEOztBQUNEMEosa0JBQVEsQ0FBQ3hJLElBQVQsZUFDRSxvQkFBQyxRQUFEO0FBQ0UsbUJBQU8sRUFBRSxtQkFBTTtBQUNiNk0sc0JBQVEsQ0FBQ08sSUFBRCxFQUFPRCxXQUFXLENBQUNsSixRQUFaLENBQXFCbUosSUFBckIsRUFBMkJ0TyxJQUFsQyxDQUFSO0FBQ0Q7QUFISCxhQUtHcU8sV0FBVyxDQUFDbEosUUFBWixDQUFxQm1KLElBQXJCLEVBQTJCaE4sS0FMOUIsQ0FERjtBQVFELFNBZEg7QUFpQkFrSCxlQUFPLENBQUN0SCxJQUFSLGVBQ0Usb0JBQUMsU0FBRDtBQUFXLGVBQUssRUFBRW1OLFdBQVcsQ0FBQy9NO0FBQTlCLFdBQ0dvSSxRQURILENBREY7QUFLRCxPQXhCRDtBQXlCQSxhQUFPbEIsT0FBUDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCwwQkFDRSxvQkFBQyxZQUFEO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFLLEVBQUUvSixFQUFFLENBQUMsb0JBQUQsRUFBdUIsTUFBdkI7QUFGWCxTQUlHO0FBQUEsNEJBQ0Msb0JBQUMsUUFBRCxRQUNHLE1BQUksQ0FBQ3FQLFVBQUwsRUFESCxDQUREO0FBQUEsT0FKSCxDQURGO0FBWUQ7Ozs7RUFwRGdDalAsUzs7QUF1RG5DZ1Asb0JBQW9CLENBQUN0TCxTQUFyQixHQUFpQztBQUMvQnlMLHFCQUFtQixFQUFFeEwsaURBQVMsQ0FBQzJGLEtBQVYsQ0FBZ0J6RixVQUROO0FBRS9CcUwsVUFBUSxFQUFFdkwsaURBQVMsQ0FBQ3dFLElBQVYsQ0FBZXRFO0FBRk0sQ0FBakM7QUFLZW1MLG1GQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0lBQ1FsTCxNLEdBQVdqRSxFQUFFLENBQUNFLE8sQ0FBZCtELE07QUFFUjs7Ozs7O0FBS08sSUFBTTRMLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVk7QUFDOUIsTUFBSSxDQUFDTCxrQkFBa0IsQ0FBQ0MsV0FBeEIsRUFBcUM7QUFDbkMsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTWhKLFFBQVEsR0FBRytJLGtCQUFrQixDQUFDQyxXQUFuQixDQUErQmhKLFFBQWhEO0FBQ0ErSSxvQkFBa0IsQ0FBQ00sY0FBbkIsR0FBb0MsRUFBcEM7QUFDQWxKLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZSixRQUFaLEVBQXNCaUosT0FBdEIsQ0FBOEIsVUFBVUssU0FBVixFQUFxQnhOLEtBQXJCLEVBQTRCO0FBQ3hELFFBQU1yQixPQUFPLEdBQUdsQixFQUFFLENBQUNtRSxTQUFILENBQWFqRCxPQUFiLENBQXFCNk8sU0FBckIsQ0FBaEI7QUFDQSxRQUFNeEwsU0FBUyxHQUFHckQsT0FBTyxDQUFDcUQsU0FBUixDQUFrQixDQUFsQixDQUFsQjtBQUNBLFFBQU15TCxrQkFBa0IsR0FBRzFNLFFBQVEsQ0FBQzJNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBM0I7QUFFQUQsc0JBQWtCLENBQUNFLFlBQW5CLENBQWdDLElBQWhDLG9CQUFpREgsU0FBakQ7QUFDQUMsc0JBQWtCLENBQUNHLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQywyQkFBakM7QUFDQTdMLGFBQVMsQ0FBQzRMLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLCtCQUF4QjtBQUNBN0wsYUFBUyxDQUFDOEwsV0FBVixDQUFzQkwsa0JBQXRCO0FBRUEsUUFBTTdELEtBQUssR0FBRzdJLFFBQVEsQ0FBQ2dOLGFBQVQsMENBQ3FCcFAsT0FBTyxDQUFDdUMsRUFEN0IsU0FBZDtBQUdBMEksU0FBSyxDQUFDNUksZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUMsVUFBVWQsQ0FBVixFQUFhO0FBQzlDK00sd0JBQWtCLENBQUNNLGNBQW5CLENBQWtDQyxTQUFsQyxJQUErQztBQUM3Q1EsYUFBSyxFQUFFOU4sQ0FBQyxDQUFDNEksTUFBRixDQUFTbUYsY0FENkI7QUFFN0NDLFdBQUcsRUFBRWhPLENBQUMsQ0FBQzRJLE1BQUYsQ0FBU3FGO0FBRitCLE9BQS9DO0FBSUQsS0FMRDtBQU9Bek0sVUFBTSxlQUNKLG9CQUFDLGtFQUFEO0FBQ0UseUJBQW1CLEVBQ2pCd0MsUUFBUSxDQUFDc0osU0FBRCxDQUZaO0FBSUUsY0FBUSxFQUNOLGtCQUFDWSxRQUFELEVBQVdDLEtBQVg7QUFBQSxlQUFxQkMsVUFBVSxDQUFDRixRQUFELEVBQVd6UCxPQUFYLEVBQW9CMFAsS0FBcEIsQ0FBL0I7QUFBQTtBQUxKLE1BREksRUFTSlosa0JBVEksQ0FBTjtBQVdELEdBL0JEO0FBZ0NELENBdENNO0FBd0NQOzs7Ozs7O0FBTUEsSUFBTWEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBVUYsUUFBVixFQUFvQnpQLE9BQXBCLEVBQTZCaUYsVUFBN0IsRUFBeUM7QUFDMUQsTUFBSTJLLEdBQUo7QUFDQSxNQUFNM0UsS0FBSyxHQUFHN0ksUUFBUSxDQUFDZ04sYUFBVCwwQ0FDcUJwUCxPQUFPLENBQUN1QyxFQUQ3QixTQUFkOztBQUdBLE1BQUkwQyxVQUFVLEtBQUssS0FBZixJQUF3QmpGLE9BQU8sQ0FBQ3lCLE1BQVIsQ0FBZXJCLElBQWYsS0FBd0IsVUFBcEQsRUFBZ0U7QUFDOUR3UCxPQUFHLHdCQUFnQkgsUUFBaEIsaUJBQUg7QUFDRCxHQUZELE1BRU87QUFDTEcsT0FBRyxjQUFPSCxRQUFQLE1BQUg7QUFDRDs7QUFFRCxNQUFJeEssVUFBVSxLQUFLLEtBQWYsSUFBd0JnRyxLQUFLLENBQUNsTCxLQUFOLEtBQWdCLEdBQTVDLEVBQWlEO0FBQy9Da0wsU0FBSyxDQUFDbEwsS0FBTixHQUFjNlAsR0FBZDtBQUNELEdBRkQsTUFFTyxJQUFJdEIsa0JBQWtCLENBQUNNLGNBQW5CLENBQWtDNU8sT0FBTyxDQUFDdUMsRUFBMUMsQ0FBSixFQUFtRDtBQUFBLGdDQUNqQytMLGtCQUFrQixDQUFDTSxjQUFuQixDQUFrQzVPLE9BQU8sQ0FBQ3VDLEVBQTFDLENBRGlDO0FBQUEsUUFDaEQ4TSxLQURnRCx5QkFDaERBLEtBRGdEO0FBQUEsUUFDekNFLEdBRHlDLHlCQUN6Q0EsR0FEeUM7QUFFeEQsUUFBTXhILE1BQU0sR0FBR2tELEtBQUssQ0FBQ2xMLEtBQU4sQ0FBWWdJLE1BQTNCO0FBQ0FrRCxTQUFLLENBQUNsTCxLQUFOLEdBQ0VrTCxLQUFLLENBQUNsTCxLQUFOLENBQVk4UCxTQUFaLENBQXNCLENBQXRCLEVBQXlCUixLQUF6QixJQUFrQ08sR0FBbEMsR0FDQTNFLEtBQUssQ0FBQ2xMLEtBQU4sQ0FBWThQLFNBQVosQ0FBc0JOLEdBQXRCLEVBQTJCeEgsTUFBM0IsQ0FGRjtBQUdELEdBTk0sTUFNQTtBQUNMa0QsU0FBSyxDQUFDbEwsS0FBTixJQUFlNlAsR0FBZjtBQUNEOztBQUNEdEIsb0JBQWtCLENBQUNNLGNBQW5CLENBQWtDNU8sT0FBTyxDQUFDdUMsRUFBMUMsSUFBZ0QsS0FBaEQ7QUFDQTBJLE9BQUssQ0FBQzZFLEtBQU47QUFDQTdFLE9BQUssQ0FBQ3BCLGFBQU4sQ0FBb0IsSUFBSWtHLEtBQUosQ0FBVSxRQUFWLENBQXBCO0FBQ0QsQ0F6QkQsQzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7SUFDUWhOLE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU1pTixpQkFBaUIsR0FBR2xSLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNEI7QUFDM0RDLGVBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFFBQU1wRCxPQUFPLEdBQUcsSUFBaEI7QUFDQStDLFVBQU0sZUFDSixvQkFBQywrREFBRDtBQUFxQixhQUFPLEVBQUUvQztBQUE5QixNQURJLEVBRUpBLE9BQU8sQ0FBQ3FELFNBQVIsQ0FBa0IsQ0FBbEIsQ0FGSSxDQUFOO0FBSUQ7QUFQMEQsQ0FBNUIsQ0FBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7O0FBQ0E7QUFDQTtBQUNBO2tCQUtJdkUsRUFBRSxDQUFDRSxPO0lBRkxDLFMsZUFBQUEsUztJQUNBQyxRLGVBQUFBLFE7QUFHSyxJQUFNK1EsaUJBQWI7QUFBQTs7QUFBQTs7QUFDRSw2QkFBWW5RLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFDQSxRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixFQUFkO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1grUCxnQkFBVSxFQUFFblEsS0FERDtBQUVYb1Esc0JBQWdCLEVBQUU7QUFGUCxLQUFiO0FBS0EsUUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyx3QkFBa0IsRUFBRTtBQURBLEtBQXRCO0FBSUEsVUFBS0MsYUFBTCxHQUFxQnhRLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQXJCLHFCQUNoQkgsYUFEZ0IsTUFFaEJsRixJQUFJLENBQUNDLEtBQUwsQ0FBWXJMLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQWpDLENBRmdCLElBR2pCSCxhQUhKO0FBWmlCO0FBZ0JsQjs7QUFqQkg7QUFBQTtBQUFBLDJDQW1CeUJJLElBbkJ6QixFQW1CK0I7QUFDM0IsVUFBSzlLLE1BQU0sQ0FBQ3FHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFzQ3FDLGtCQUF0QyxFQUEwRCxjQUExRCxNQUErRSxLQUFwRixFQUE0RjtBQUMxRixlQUFPa0MsSUFBUDtBQUNEOztBQUNELFVBQU1DLFlBQVksR0FBR25DLGtCQUFrQixDQUFDbUMsWUFBeEM7O0FBQ0EsVUFBSy9LLE1BQU0sQ0FBQ3FHLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFzQ3dFLFlBQXRDLEVBQW9ERCxJQUFwRCxDQUFMLEVBQWtFO0FBQ2hFLGVBQU9DLFlBQVksQ0FBQ0QsSUFBRCxDQUFuQjtBQUNEOztBQUNELGFBQU9BLElBQVA7QUFDRDtBQTVCSDtBQUFBO0FBQUEsNkJBOEJXO0FBQ1AsVUFBTXJQLElBQUksR0FBRyxJQUFiO0FBQ0EsMEJBQ0Usb0JBQUMsUUFBRCxRQUNHLEtBQUtyQixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQkMsS0FBMUIsaUJBQ0M7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0csS0FBSzVCLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCQyxLQUQ3QixDQUZKLGVBS0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0Usb0JBQUMsOERBQUQ7QUFDRSxnQkFBUSxFQUFFLEtBQUt2QixLQUFMLENBQVcrUCxVQUR2QjtBQUVFLG9CQUFZLEVBQUUsc0JBQUNDLGdCQUFELEVBQW1CRCxVQUFuQixFQUFrQztBQUM5Qy9PLGNBQUksQ0FBQ3NCLFFBQUwsQ0FBZTtBQUFFeU4sc0JBQVUsRUFBVkEsVUFBRjtBQUFjQyw0QkFBZ0IsRUFBaEJBO0FBQWQsV0FBZjtBQUNBaFAsY0FBSSxDQUFDdVAsYUFBTDtBQUNELFNBTEg7QUFNRSxzQkFBYyxFQUFFLEtBQUtKLGFBQUwsQ0FBbUJELGtCQU5yQztBQU9FLHVCQUFlLEVBQUUsS0FBS007QUFQeEIsUUFERixDQUxGLENBREY7QUFtQkQ7QUFuREg7QUFBQTtBQUFBLG9DQXFEa0I7QUFBQTs7QUFDZEMsZ0JBQVUsQ0FBRSxZQUFNO0FBQ2hCLGNBQUksQ0FBQzlRLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkJ5QyxHQUEzQixDQUFnQyxNQUFJLENBQUNpTyxzQkFBTCxDQUE0QixNQUFJLENBQUN4USxLQUFMLENBQVcrUCxVQUF2QyxDQUFoQzs7QUFDQXBSLFVBQUUsQ0FBQ21FLFNBQUgsQ0FBYTROLFNBQWIsQ0FBdUJDLElBQXZCLENBQTZCLGdCQUE3QixFQUErQztBQUM3Qy9RLGVBQUssRUFBRSxNQUFJLENBQUM0USxzQkFBTCxDQUE0QixNQUFJLENBQUN4USxLQUFMLENBQVcrUCxVQUF2QyxDQURzQztBQUU3Q3ZFLGdCQUFNLEVBQUUsTUFBSSxDQUFDeEwsS0FBTCxDQUFXZ1EsZ0JBRjBCO0FBRzdDdEIsbUJBQVMsRUFBRSxNQUFJLENBQUMvTyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ1QyxFQUhlO0FBSTdDbkMsY0FBSSxFQUFFLGtEQUp1QztBQUs3QzJRLGlCQUFPLEVBQUUsTUFBSSxDQUFDVCxhQUFMLENBQW1CRDtBQUxpQixTQUEvQztBQU9ELE9BVFMsRUFTUCxHQVRPLENBQVY7QUFVRDtBQWhFSDs7QUFBQTtBQUFBLEVBQXVDcFIsU0FBdkM7QUFtRUFnUixpQkFBaUIsQ0FBQ3ROLFNBQWxCLEdBQThCO0FBQzVCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERSxDQUE5QjtBQUllbU4sZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtJQUVRcFIsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtxQkFPSkMsRUFBRSxDQUFDTyxVO0lBSkwyUixPLGtCQUFBQSxPO0lBQ0ExUixNLGtCQUFBQSxNO0lBQ0EyUixXLGtCQUFBQSxXO0lBQ0F2UixRLGtCQUFBQSxRO2tCQU1FWixFQUFFLENBQUNFLE87SUFGTEMsUyxlQUFBQSxTO0lBQ0FDLFEsZUFBQUEsUTs7SUFHSWdTLGtCOzs7OztBQUNKLDhCQUFZcFIsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtLLEtBQUwsR0FBYTtBQUNYZ1IsV0FBSyxFQUFFN0Msa0JBQWtCLENBQUM2QyxLQURmO0FBRVhDLGVBQVMsRUFBRSxLQUZBO0FBR1hDLFlBQU0sRUFBRSxFQUhHO0FBSVhDLGVBQVMsRUFBRSxFQUpBO0FBS1hDLHdCQUFrQixFQUFFO0FBTFQsS0FBYjtBQUZpQjtBQVNsQjs7OzsrQkFFVTtBQUNULFVBQU1DLFVBQVUsR0FBRyxLQUFLclIsS0FBTCxDQUFXZ1IsS0FBOUI7QUFDQSxVQUFNaFEsSUFBSSxHQUFHLElBQWI7QUFDQSxVQUFNc1EsTUFBTSxHQUFHLEVBQWY7QUFFQS9MLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZNkwsVUFBWixFQUF3QnBRLEdBQXhCLENBQTRCLFVBQUNrSSxHQUFELEVBQVM7QUFDbkNtSSxjQUFNLENBQUNuSSxHQUFELENBQU4sR0FBY2tJLFVBQVUsQ0FBQ2xJLEdBQUQsQ0FBVixDQUFnQndCLE1BQWhCLENBQXVCLFVBQUEvSyxLQUFLO0FBQUEsaUJBQUlBLEtBQUssQ0FBQzJSLFdBQU4sR0FDM0NuSSxRQUQyQyxDQUNsQ3BJLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV2tSLE1BQVgsQ0FBa0JLLFdBQWxCLEVBRGtDLENBQUo7QUFBQSxTQUE1QixDQUFkO0FBRUQsT0FIRDtBQUlBLGFBQU9ELE1BQVA7QUFDRDs7O2tDQUVhO0FBQUE7O0FBQ1osVUFBTUQsVUFBVSxHQUFHLEtBQUtHLFFBQUwsRUFBbkI7QUFDQSxVQUFNL0ksT0FBTyxHQUFHLEVBQWhCO0FBQ0EsVUFBTXpILElBQUksR0FBRyxJQUFiO0FBRUF5SCxhQUFPLENBQUN0SCxJQUFSLGVBQ0U7QUFBSSxpQkFBUyxFQUFFLFFBQ1gsVUFEVyxHQUVYLFNBQUU7QUFGTixzQkFJRSxvQkFBQywyREFBRDtBQUNFLGdCQUFRLEVBQUMsU0FEWDtBQUVFLGlCQUFTLEVBQUUsS0FGYjtBQUdFLGFBQUssRUFBRSxLQUFLeEIsS0FBTCxDQUFXOFIsY0FBWCxHQUNIL1MsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBREMsR0FFSEEsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBTFI7QUFNRSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDNEQsUUFBTCxDQUFjO0FBQUUyTyxxQkFBUyxFQUFFO0FBQWIsV0FBZDs7QUFDQSxnQkFBSSxDQUFDdFIsS0FBTCxDQUFXK1IsWUFBWCxDQUF3QixRQUF4QixFQUFrQyxLQUFsQztBQUNEO0FBVEgsUUFKRixDQURGO0FBa0JBbk0sWUFBTSxDQUFDQyxJQUFQLENBQVk2TCxVQUFaLEVBQXdCcFEsR0FBeEIsQ0FBNEIsVUFBQ2tJLEdBQUQsRUFBUztBQUNuQ2tJLGtCQUFVLENBQUNsSSxHQUFELENBQVYsQ0FBZ0J2QixNQUFoQixHQUF5QixDQUF6QixJQUE4QmEsT0FBTyxDQUFDdEgsSUFBUixlQUM1QjtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUNHZ0ksR0FESCxDQUQ0QixDQUE5QjtBQUtBa0ksa0JBQVUsQ0FBQ2xJLEdBQUQsQ0FBVixDQUFnQmxJLEdBQWhCLENBQW9CLFVBQUNvUCxJQUFELEVBQU9uUCxLQUFQLEVBQWlCO0FBQ25DLGNBQUlBLEtBQUssR0FBR0YsSUFBSSxDQUFDaEIsS0FBTCxDQUFXbVIsU0FBdkIsRUFBa0M7QUFDaEMxSSxtQkFBTyxDQUFDdEgsSUFBUixlQUNFO0FBQUksdUJBQVMsRUFFVGtQLElBQUksS0FBSyxNQUFJLENBQUMxUSxLQUFMLENBQVdnUyxRQUR0QixHQUVJLFVBRkosR0FFaUI7QUFIbkIsNEJBTUUsb0JBQUMsMkRBQUQ7QUFDRSx1QkFBUyxFQUFFLE1BQUksQ0FBQzNSLEtBQUwsQ0FBV29SLGtCQUR4QjtBQUVFLG1CQUFLLEVBQUVmLElBRlQ7QUFHRSxzQkFBUSxFQUFFLE1BQUksQ0FBQzFRLEtBQUwsQ0FBV2lTLGVBQVgsQ0FBMkJ2QixJQUEzQixDQUhaO0FBRzhDLHFCQUFPLEVBQUUsbUJBQU07QUFDekQsc0JBQUksQ0FBQy9OLFFBQUwsQ0FBYztBQUFFMk8sMkJBQVMsRUFBRTtBQUFiLGlCQUFkOztBQUNBLHNCQUFJLENBQUN0UixLQUFMLENBQVcrUixZQUFYLENBQXdCdkksR0FBeEIsRUFBNkJrSCxJQUE3QjtBQUNEO0FBTkgsY0FORixDQURGO0FBaUJEO0FBQ0YsU0FwQkQ7QUFxQkQsT0EzQkQ7O0FBNEJBLFVBQUksS0FBS3JRLEtBQUwsQ0FBV21SLFNBQVgsR0FBdUIxSSxPQUFPLENBQUNiLE1BQS9CLElBQXlDLEtBQUs1SCxLQUFMLENBQVdrUixNQUFYLEtBQXNCLEVBQW5FLEVBQXVFO0FBQ3JFekksZUFBTyxDQUFDdEgsSUFBUixlQUNFO0FBQUksbUJBQVMsRUFBQztBQUFkLHdCQUNFLG9CQUFDLDhEQUFEO0FBQ0Usa0JBQVEsRUFBRSxrQkFBQzhQLFNBQUQsRUFBZTtBQUN2QixnQkFBSUEsU0FBSixFQUFlO0FBQ2Isb0JBQUksQ0FBQzNPLFFBQUwsQ0FBYztBQUNaNk8seUJBQVMsRUFBR25RLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV21SLFNBQVgsR0FBdUIsQ0FEdkI7QUFFWkMsa0NBQWtCLEVBQUU7QUFGUixlQUFkO0FBSUQ7QUFDRjtBQVJILHdCQVVFLG9CQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUM7QUFBZixVQVZGLENBREYsQ0FERjtBQWdCRDs7QUFFRCwwQkFDRSxvQkFBQyxRQUFELHFCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLFdBQUQ7QUFDRSxtQkFBVyxFQUFFMVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUYsR0FBdUIsS0FEdEM7QUFFRSxhQUFLLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV2tSLE1BRnBCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQTlQLENBQUMsRUFBSTtBQUNiLGdCQUFJLENBQUNrQixRQUFMLENBQWM7QUFDWjRPLGtCQUFNLEVBQUU5UCxDQURJO0FBRVorUCxxQkFBUyxFQUFFO0FBRkMsV0FBZDtBQUlEO0FBUkgsUUFERixlQVdFLG9CQUFDLE1BQUQ7QUFDRSxlQUFPLEVBQUUsaUJBQUMvUCxDQUFELEVBQU87QUFDZEEsV0FBQyxDQUFDeVEsZUFBRjs7QUFDQSxnQkFBSSxDQUFDdlAsUUFBTCxDQUFjO0FBQUUyTyxxQkFBUyxFQUFFO0FBQWIsV0FBZDtBQUNELFNBSkg7QUFLRSxjQUFNLE1BTFI7QUFNRSxxQkFBYTtBQU5mLHNCQU9DLG9CQUFDLFFBQUQ7QUFBVSxZQUFJLEVBQUM7QUFBZixRQVBELENBWEYsQ0FERixDQURGLGVBd0JFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0d4SSxPQUFPLENBQUNiLE1BQVIsR0FBaUJhLE9BQWpCLGdCQUNHO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQTJCL0osRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FBN0IsQ0FGTixDQXhCRixDQURGLENBREY7QUFpQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQO0FBQ0EsVUFBTW9ULGVBQWUsR0FBRyw2R0FBeEI7QUFDQSxVQUFNekIsSUFBSSxHQUFHLEtBQUsxUSxLQUFMLENBQVdpUyxlQUFYLENBQTRCLEtBQUtqUyxLQUFMLENBQVdnUyxRQUF2QyxDQUFiO0FBQ0EsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0dqVCxFQUFFLENBQUMsYUFBRCxFQUFnQixNQUFoQixDQURMLENBREYsZUFJRSxvQkFBQyxNQUFEO0FBQ0UsaUJBQVMsRUFBQyw2QkFEWjtBQUVFLGlCQUFTLE1BRlg7QUFHRSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDNEQsUUFBTCxDQUFjO0FBQUUyTyxxQkFBUyxFQUFFO0FBQWIsV0FBZDtBQUNEO0FBTEgsc0JBT0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0UsS0FBS3RSLEtBQUwsQ0FBV2dTLFFBQVgsS0FDQyxLQUFLaFMsS0FBTCxDQUFXOFIsY0FBWCxHQUNHL1MsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBREwsR0FFR0EsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBSE4sQ0FERixDQVBGLGVBY0U7QUFDRSxpQkFBUyxFQUFDLFlBRFo7QUFFRSxhQUFLLEVBQUU7QUFDTHFSLG9CQUFVLEVBQUVNLElBQUksSUFBSXlCO0FBRGY7QUFGVCxlQWRGLEVBcUJHLEtBQUs5UixLQUFMLENBQVdpUixTQUFYLGlCQUNDLG9CQUFDLE9BQUQ7QUFDRSxnQkFBUSxFQUFDLGFBRFg7QUFFRSxzQkFBYyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDM08sUUFBTCxDQUFjO0FBQUUyTyxxQkFBUyxFQUFFO0FBQWIsV0FBZCxDQUFOO0FBQUE7QUFGbEIsU0FJRyxLQUFLalIsS0FBTCxDQUFXZ1IsS0FBWCxHQUFtQixLQUFLZSxXQUFMLEVBQW5CLEdBQ0dyVCxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FMUixDQXRCSixDQUpGLENBREY7QUFzQ0Q7Ozs7RUEzSzhCSSxTOztBQThLakNpUyxrQkFBa0IsQ0FBQ3ZPLFNBQW5CLEdBQStCO0FBQzdCa1AsY0FBWSxFQUFFalAsaURBQVMsQ0FBQ3dFLElBQVYsQ0FBZXRFLFVBREE7QUFFN0JpUCxpQkFBZSxFQUFFblAsaURBQVMsQ0FBQ3dFLElBQVYsQ0FBZXRFLFVBRkg7QUFHN0I4TyxnQkFBYyxFQUFFaFAsaURBQVMsQ0FBQzRGLElBQVYsQ0FBZTFGLFVBSEY7QUFJN0JnUCxVQUFRLEVBQUVsUCxpREFBUyxDQUFDdUU7QUFKUyxDQUEvQjtBQU9lK0osaUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE1BO0FBRUE7QUFDQTtJQUdFalMsUyxHQUNFSCxFQUFFLENBQUNFLE8sQ0FETEMsUzs7SUFHSWtULGU7Ozs7O0FBQ0osMkJBQVlyUyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0ssS0FBTCxHQUFhO0FBQ1hpUyx3QkFBa0IsRUFBRTtBQURULEtBQWI7QUFIaUI7QUFNbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNQyxLQUFLLEdBQUc7QUFBRW5DLGtCQUFVLEVBQUUsS0FBS3BRLEtBQUwsQ0FBV3dTLFFBQVgsR0FBc0I7QUFBcEMsT0FBZDtBQUNBLDBCQUNFO0FBQUcsZUFBTyxFQUFFLGlCQUFDL1EsQ0FBRCxFQUFPO0FBQ2pCQSxXQUFDLENBQUN5USxlQUFGOztBQUNBLGdCQUFJLENBQUNsUyxLQUFMLENBQVd5UyxPQUFYO0FBQ0Q7QUFIRCxzQkFLRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBb0MsS0FBS3pTLEtBQUwsQ0FBVzRCLEtBQVgsSUFBb0IsS0FBSzVCLEtBQUwsQ0FBV3dTLFFBQW5FLENBTEYsZUFNRSxvQkFBQyw4REFBRDtBQUFrQixnQkFBUSxFQUFFLGtCQUFDbEIsU0FBRCxFQUFlO0FBQ3pDLGNBQUlBLFNBQUosRUFBZTtBQUNiLGtCQUFJLENBQUMzTyxRQUFMLENBQWM7QUFBRTJQLGdDQUFrQixFQUFFO0FBQXRCLGFBQWQ7QUFDRDtBQUNGO0FBSkQsU0FPSyxLQUFLalMsS0FBTCxDQUFXaVMsa0JBQVgsSUFBaUMsS0FBS3RTLEtBQUwsQ0FBVzBTLFNBQVgsS0FDaEMsS0FERixnQkFFSTtBQUFNLGlCQUFTLEVBQUMsbUJBQWhCO0FBQW9DLGFBQUssRUFBRUg7QUFBM0MsZUFGSixnQkFHSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsZUFWUixDQU5GLENBREY7QUFzQkQ7Ozs7RUFqQzJCcFQsUzs7QUFvQzlCa1QsZUFBZSxDQUFDeFAsU0FBaEIsR0FBNEI7QUFDMUIyUCxVQUFRLEVBQUUxUCxpREFBUyxDQUFDdUUsTUFBVixDQUFpQnJFLFVBREQ7QUFFMUIwUCxXQUFTLEVBQUU1UCxpREFBUyxDQUFDNEYsSUFBVixDQUFlMUYsVUFGQTtBQUcxQnlQLFNBQU8sRUFBRTNQLGlEQUFTLENBQUN3RSxJQUFWLENBQWV0RSxVQUhFO0FBSTFCcEIsT0FBSyxFQUFFa0IsaURBQVMsQ0FBQ3VFO0FBSlMsQ0FBNUI7QUFPZWdMLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFyVCxFQUFFLENBQUNtRSxTQUFILENBQWF3UCxrQkFBYixDQUFnQ0MsbUJBQWhDLEdBQXNEL1MsZ0VBQXREO0FBQ0FiLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDRSw4QkFBaEMsR0FBaUVDLHFGQUFqRTtBQUNBOVQsRUFBRSxDQUFDbUUsU0FBSCxDQUFhd1Asa0JBQWIsQ0FBZ0NJLHVCQUFoQyxHQUEwRDdQLHdFQUExRDtBQUNBbEUsRUFBRSxDQUFDbUUsU0FBSCxDQUFhd1Asa0JBQWIsQ0FBZ0NLLFlBQWhDLEdBQStDQyxrRUFBL0M7QUFDQWpVLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDTyxxQkFBaEMsR0FBd0RDLG9FQUF4RDtBQUNBblUsRUFBRSxDQUFDbUUsU0FBSCxDQUFhd1Asa0JBQWIsQ0FBZ0NTLHdCQUFoQyxHQUEyRGxELHlFQUEzRDtBQUNBbFIsRUFBRSxDQUFDbUUsU0FBSCxDQUFhd1Asa0JBQWIsQ0FBZ0NVLDBCQUFoQyxHQUE2REMsNkVBQTdEO0FBQ0F0VSxFQUFFLENBQUNtRSxTQUFILENBQWF3UCxrQkFBYixDQUFnQ1ksc0JBQWhDLEdBQXlEaE4scUZBQXpEO0FBQ0F2SCxFQUFFLENBQUNtRSxTQUFILENBQWF3UCxrQkFBYixDQUFnQ2Esa0JBQWhDLEdBQXFEOVQsOERBQXJEO0FBQ0FWLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDYyw2QkFBaEMsR0FBZ0VDLG9GQUFoRTtBQUNBMVUsRUFBRSxDQUFDbUUsU0FBSCxDQUFhd1Asa0JBQWIsQ0FBZ0NnQixrQkFBaEMsR0FBcURoTiwrREFBckQ7QUFDQTNILEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDaUIscUJBQWhDLEdBQXdEQyxvRkFBeEQ7QUFDQTdVLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDbUIsZ0JBQWhDLEdBQW1EQywyRUFBbkQ7QUFDQS9VLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYXdQLGtCQUFiLENBQWdDcUIscUNBQWhDLEdBQXdFQyxtR0FBeEU7QUFFQUMsTUFBTSxDQUFDM1IsZ0JBQVAsQ0FBeUIsTUFBekIsRUFBaUMsWUFBTTtBQUNyQyxNQUFNNFIsYUFBYSxHQUFHN1IsUUFBUSxDQUFDZ04sYUFBVCxDQUNwQiwyRUFEb0IsQ0FBdEI7QUFFQTZFLGVBQWEsQ0FBQzVSLGdCQUFkLENBQWdDLE9BQWhDLEVBQXlDLFVBQVNkLENBQVQsRUFBWTtBQUNuRCxRQUFNb0ksS0FBSyxHQUFHLElBQUlDLFdBQUosQ0FBaUIsOEJBQWpCLEVBQWlEO0FBQzdEdEgsWUFBTSxFQUFFZixDQUFDLENBQUM0SSxNQUFGLENBQVMrSixPQUFULENBQWlCeEs7QUFEb0MsS0FBakQsQ0FBZDtBQUdBdEgsWUFBUSxDQUFDeUgsYUFBVCxDQUF3QkYsS0FBeEI7QUFDRCxHQUxEO0FBTUF3Syx1RUFBaUI7QUFDbEIsQ0FWRDtBQVlBSCxNQUFNLENBQUNJLEdBQVAsR0FBYTtBQUNYQyxhQUFXLEVBQUUsdUJBQU07QUFDakIsUUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0FoRyxzQkFBa0IsQ0FBQ2lHLGNBQW5CLENBQWtDblQsR0FBbEMsQ0FBdUMsVUFBQ2tLLElBQUQsRUFBVTtBQUMvQyxVQUFLLENBQUN4TSxFQUFFLENBQUNtRSxTQUFILENBQWFqRCxPQUFiLENBQXNCc0wsSUFBdEIsQ0FBTixFQUFxQyxPQUFPLEtBQVA7QUFDckNnSixrQkFBWSxDQUFDaEosSUFBRCxDQUFaLEdBQXFCeE0sRUFBRSxDQUFDbUUsU0FBSCxDQUFhakQsT0FBYixDQUFzQnNMLElBQXRCLEVBQTZCckwsT0FBN0IsQ0FBcUNDLEdBQXJDLEVBQXJCO0FBQ0QsS0FIRDtBQUlBLFdBQU9nTCxJQUFJLENBQUNzSixTQUFMLENBQWdCRixZQUFoQixDQUFQO0FBQ0Q7QUFSVSxDQUFiLEM7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0lBRVF2UixNLEdBQVdqRSxFQUFFLENBQUNFLE8sQ0FBZCtELE07QUFDRCxJQUFNOFEsa0JBQWtCLEdBQUcvVSxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTRCO0FBQzVEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0Q0wsVUFBTSxlQUNKLG9CQUFDLG9EQUFEO0FBQWEsYUFBTyxFQUFFO0FBQXRCLE1BREksRUFFRixLQUFLTSxTQUFMLENBQWUsQ0FBZixDQUZFLENBQU47QUFHRDtBQUwyRCxDQUE1QixDQUEzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7cUJBRThCdkUsRUFBRSxDQUFDTyxVO0lBQXpCb0osTyxrQkFBQUEsTztJQUFTL0ksUSxrQkFBQUEsUTtJQUNUK1UsUSxHQUFhM1YsRUFBRSxDQUFDRSxPLENBQWhCeVYsUTtJQUNBNVYsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTs7QUFFUixJQUFNNlYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQSxNQUFkMVUsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDM0IyVSxPQUQyQixHQUNmM1UsT0FBTyxDQUFDeUIsTUFETyxDQUMzQmtULE9BRDJCOztBQUFBLGtCQUVURixRQUFRLENBQUN6VSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEdBQWhCLEVBQUQsQ0FGQztBQUFBO0FBQUEsTUFFNUJILEtBRjRCO0FBQUEsTUFFckI2VSxRQUZxQjs7QUFJbkMsTUFBTUMsT0FBTyxHQUFHblAsTUFBTSxDQUFDQyxJQUFQLENBQVlnUCxPQUFaLEVBQXFCN0osTUFBckIsQ0FBNEIsVUFBQWdLLE1BQU07QUFBQSxXQUFJLENBQUMvVSxLQUFLLENBQUN3SixRQUFOLENBQWV1TCxNQUFmLENBQUw7QUFBQSxHQUFsQyxFQUErRDFULEdBQS9ELENBQW1FLFVBQUFzTixJQUFJLEVBQUk7QUFDekYsd0JBQ0Usb0JBQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUEsSUFBZDtBQUFvQixVQUFJLEVBQUU3UCxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWI7QUFBNUIsb0JBQ0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGVBQVMsRUFBQyxPQUZaO0FBR0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IsWUFBTXNHLE1BQU0sZ0NBQU9wRixLQUFQLElBQWMyTyxJQUFkLEVBQVo7QUFDQWtHLGdCQUFRLENBQUN6UCxNQUFELENBQVI7QUFDQW5GLGVBQU8sQ0FBQ0MsT0FBUixDQUFnQnlDLEdBQWhCLENBQW9CeUMsTUFBcEI7QUFDRDtBQVBILG9CQVNFO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE9BQXlCd1AsT0FBTyxDQUFDakcsSUFBRCxDQUFoQyxDQVRGLGVBVUUsb0JBQUMsUUFBRDtBQUFVLFVBQUksRUFBQztBQUFmLE1BVkYsQ0FERixDQURGO0FBZ0JELEdBakJlLENBQWhCO0FBa0JBLE1BQU12SSxNQUFNLEdBQUdwRyxLQUFLLENBQUMrSyxNQUFOLENBQWEsVUFBQTRELElBQUk7QUFBQSxXQUFJaUcsT0FBTyxDQUFDakcsSUFBRCxDQUFYO0FBQUEsR0FBakIsRUFBb0N0TixHQUFwQyxDQUF3QyxVQUFBc04sSUFBSSxFQUFJO0FBQzdELHdCQUNFLG9CQUFDLE9BQUQ7QUFBUyxTQUFHLEVBQUVBLElBQWQ7QUFBb0IsVUFBSSxFQUFFN1AsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEI7QUFBNUIsb0JBQ0U7QUFDRSxlQUFTLEVBQUMsT0FEWjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2IsWUFBTXNHLE1BQU0sR0FBRyxtQkFBSXBGLEtBQUosRUFBVytLLE1BQVgsQ0FBa0IsVUFBQWlLLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLckcsSUFBVjtBQUFBLFNBQW5CLENBQWY7O0FBQ0FrRyxnQkFBUSxDQUFDelAsTUFBRCxDQUFSO0FBQ0FuRixlQUFPLENBQUNDLE9BQVIsQ0FBZ0J5QyxHQUFoQixDQUFvQnlDLE1BQXBCO0FBQ0Q7QUFQSCxvQkFTRTtBQUFNLGVBQVMsRUFBQztBQUFoQixPQUF5QndQLE9BQU8sQ0FBQ2pHLElBQUQsQ0FBaEMsQ0FURixlQVVFLG9CQUFDLFFBQUQ7QUFBVSxVQUFJLEVBQUM7QUFBZixNQVZGLENBREYsQ0FERjtBQWdCRCxHQWpCYyxDQUFmO0FBbUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBMkMxTyxPQUFPLENBQUN5QixNQUFSLENBQWVDLEtBQTFELENBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0d5RSxNQUFNLENBQUM0QixNQUFQLEdBQ0M1QixNQURELGdCQUVDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0d0SCxFQUFFLENBQUMsdUNBQUQsRUFBMEMsTUFBMUMsQ0FETCxDQUhKLENBRkYsZUFTRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dnVyxPQUFPLENBQUM5TSxNQUFSLEdBQWlCLENBQWpCLEdBQ0M4TSxPQURELGdCQUVDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0doVyxFQUFFLENBQUMsaUNBQUQsRUFBb0MsTUFBcEMsQ0FETCxDQUhKLENBVEYsQ0FERjtBQW1CRCxDQTVERDs7QUE4REE2VixXQUFXLENBQUMvUixTQUFaLEdBQXdCO0FBQ3RCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUF4QjtBQUllNFIsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7SUFDUTNSLE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUNELElBQU00USxzQkFBc0IsR0FBRzdVLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNkI7QUFDakVDLGVBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDTCxVQUFNLGVBQ0osb0JBQUMsd0RBQUQ7QUFBaUIsYUFBTyxFQUFFO0FBQTFCLE1BREksRUFFRixLQUFLTSxTQUFMLENBQWUsQ0FBZixDQUZFLENBQU47QUFHRDtBQUxnRSxDQUE3QixDQUEvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQOztBQUNBO0FBQ0E7QUFDQTtJQUVRcEUsUyxHQUFjSCxFQUFFLENBQUNFLE8sQ0FBakJDLFM7SUFDQXdKLE8sR0FBWTNKLEVBQUUsQ0FBQ08sVSxDQUFmb0osTztJQUNBNUosRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTs7SUFFRm1XLGU7Ozs7O0FBQ0osMkJBQVlsVixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBRUEsVUFBS0ssS0FBTCxHQUFhO0FBQ1hrUixZQUFNLEVBQUU7QUFERyxLQUFiO0FBSUEsVUFBSzRELGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQnJRLElBQXJCLCtCQUF2QjtBQVBpQjtBQVFsQjtBQUVEOzs7Ozs7Ozs7OztpQ0FPYTtBQUFBOztBQUFBLFVBQ0hzUSxPQURHLEdBQ1MsS0FBS3BWLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BRDVCLENBQ0h5VCxPQURHO0FBR1gsYUFBT0EsT0FBTyxDQUFDcEssTUFBUixDQUFnQixVQUFDcUssTUFBRCxFQUFZO0FBQ2pDLGVBQU9BLE1BQU0sQ0FBQ3pULEtBQVAsQ0FBYWdRLFdBQWIsR0FDSm5JLFFBREksQ0FDTSxNQUFJLENBQUNwSixLQUFMLENBQVdrUixNQUFYLENBQWtCSyxXQUFsQixFQUROLENBQVA7QUFFRCxPQUhNLENBQVA7QUFJRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTXdELE9BQU8sR0FBRyxLQUFLRSxVQUFMLEVBQWhCO0FBQ0EsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFXLEVBQUV2VyxFQUFFLENBQUUsMEJBQUYsQ0FGakI7QUFHRSxnQkFBUSxFQUFFLGtCQUFDMEMsQ0FBRCxFQUFPO0FBQUUsZ0JBQUksQ0FBQ2tCLFFBQUwsQ0FBZTtBQUFFNE8sa0JBQU0sRUFBRTlQLENBQUMsQ0FBQzRJLE1BQUYsQ0FBU3BLO0FBQW5CLFdBQWY7QUFBNkM7QUFIbEUsUUFERixDQURGLEVBU0ltVixPQUFPLENBQUNuTixNQUFSLEdBQWlCLENBQWpCLEdBQXFCbU4sT0FBTyxDQUFDOVQsR0FBUixDQUFhLFVBQUMrVCxNQUFELEVBQVM5VCxLQUFULEVBQW1CO0FBQ25ELDRCQUNFLG9CQUFDLE9BQUQ7QUFBUyxhQUFHLEVBQUVBLEtBQWQ7QUFBcUIsY0FBSSxFQUFFOFQsTUFBTSxDQUFDelQ7QUFBbEMsd0JBQ0U7QUFDRSxpQkFBTyxFQUFFLGlCQUFDSCxDQUFELEVBQU87QUFDZEEsYUFBQyxDQUFDOFQsY0FBRjs7QUFDQSxrQkFBSSxDQUFDSixlQUFMLENBQXNCRSxNQUFNLENBQUNHLEtBQTdCO0FBQ0Q7QUFKSCx3QkFNRTtBQUFLLGFBQUcsRUFBRUgsTUFBTSxDQUFDbFUsS0FBakI7QUFBd0IsYUFBRyxFQUFFa1UsTUFBTSxDQUFDelQ7QUFBcEMsVUFORixDQURGLENBREY7QUFZRCxPQWJvQixDQUFyQixnQkFjSSwrQkFBSTdDLEVBQUUsQ0FBRSx5QkFBRixFQUE2QixNQUE3QixDQUFOLENBdkJSLENBREY7QUE0QkQ7OztvQ0FFZXlXLEssRUFBTztBQUNyQkEsV0FBSyxHQUFHdEsscUVBQWMsQ0FBRXNLLEtBQUYsQ0FBdEI7O0FBQ0EsVUFBSyxPQUFPQyxxQkFBUCxLQUFpQyxXQUF0QyxFQUFvRDtBQUNsRDdQLGNBQU0sQ0FBQ0MsSUFBUCxDQUFhMlAsS0FBYixFQUFxQmxVLEdBQXJCLENBQTBCLFVBQUNvVSxRQUFELEVBQWM7QUFDdEMsY0FBS0EsUUFBUSxLQUFLLG1CQUFsQixFQUF3QztBQUN0QzFXLGNBQUUsQ0FBQ21FLFNBQUgsQ0FBYWpELE9BQWIsQ0FBc0J3VixRQUF0QixFQUNHdlYsT0FESCxDQUVHeUMsR0FGSCxDQUVRNFMsS0FBSyxDQUFDRSxRQUFELENBRmI7QUFHQXBULG9CQUFRLENBQUN5SCxhQUFULENBQ0UsSUFBSUQsV0FBSixDQUFpQiw0QkFBakIsRUFBK0M7QUFDN0N0SCxvQkFBTSxFQUFFO0FBQ052QyxxQkFBSyxFQUFFaUwscUVBQWMsQ0FBRXNLLEtBQUssQ0FBQ0UsUUFBRCxDQUFQLENBRGY7QUFFTmpULGtCQUFFLEVBQUU7QUFGRTtBQURxQyxhQUEvQyxDQURGO0FBT0EsbUJBQU8sS0FBUDtBQUNELFdBWkQsTUFZTztBQUNMLGdCQUFLLENBQUN6RCxFQUFFLENBQUNtRSxTQUFILENBQWFqRCxPQUFiLENBQXNCd1YsUUFBdEIsQ0FBTixFQUF5QyxPQUFPLEtBQVA7O0FBQ3pDLGdCQUFLLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsUUFBckIsRUFBK0JqTSxRQUEvQixDQUNIekssRUFBRSxDQUFDbUUsU0FBSCxDQUFhakQsT0FBYixDQUFzQndWLFFBQXRCLEVBQWlDL1QsTUFBakMsQ0FBd0NyQixJQURyQyxDQUFMLEVBQ21EO0FBQ2pEdEIsZ0JBQUUsQ0FBQ21FLFNBQUgsQ0FBYWpELE9BQWIsQ0FBc0J3VixRQUF0QixFQUFpQ3ZWLE9BQWpDLENBQXlDeUMsR0FBekMsQ0FBOEM0UyxLQUFLLENBQUNFLFFBQUQsQ0FBbkQ7QUFDQSxxQkFBTyxLQUFQO0FBQ0Q7O0FBRURwVCxvQkFBUSxDQUFDeUgsYUFBVCxDQUNFLElBQUlELFdBQUosQ0FBaUIsK0JBQWpCLEVBQWtEO0FBQ2hEdEgsb0JBQU0sRUFBRTtBQUNOdkMscUJBQUssRUFBRXVWLEtBQUssQ0FBQ0UsUUFBRCxDQUFMLElBQW1CLEVBRHBCO0FBRU5qVCxrQkFBRSxFQUFFaVQ7QUFGRTtBQUR3QyxhQUFsRCxDQURGO0FBT0Q7QUFDRixTQTdCRDtBQThCQSxlQUFPLEtBQVA7QUFDRDs7QUFDRHBULGNBQVEsQ0FBQ3lILGFBQVQsQ0FBd0IsSUFBSUQsV0FBSixDQUFpQixxQkFBakIsRUFBd0M7QUFDOUR0SCxjQUFNLEVBQUU7QUFDTm1ULG1CQUFTLEVBQUVIO0FBREw7QUFEc0QsT0FBeEMsQ0FBeEI7QUFLRDs7OztFQW5HMkJyVyxTOztBQXNHOUIrVixlQUFlLENBQUNyUyxTQUFoQixHQUE0QjtBQUMxQjNDLFNBQU8sRUFBRTRDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBNUI7QUFJZWtTLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0lBQ1FqUyxNLEdBQVdqRSxFQUFFLENBQUNFLE8sQ0FBZCtELE07QUFFRCxJQUFNcVEsbUJBQW1CLEdBQUd0VSxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTZCO0FBQzlEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMsaUVBQUQ7QUFBdUIsYUFBTyxFQUFFL0M7QUFBaEMsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUDZELENBQTdCLENBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVReEUsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUVOSSxTLEdBQ0VILEVBQUUsQ0FBQ0UsTyxDQURMQyxTOztJQUdJeVcscUI7Ozs7O0FBQ0osaUNBQVk1VixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0ssS0FBTCxHQUFhO0FBQ1hKLFdBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEdBQXRCO0FBREksS0FBYjtBQUdBLFVBQUt5VixVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0IvUSxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLZ1IsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCaFIsSUFBakIsK0JBQW5CO0FBTmlCO0FBT2xCOzs7O2lDQUVZO0FBQUEsa0NBQ2lCLEtBQUs5RSxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQURwQztBQUFBLFVBQ0hvVSxNQURHLHlCQUNIQSxNQURHO0FBQUEsVUFDS2xCLE9BREwseUJBQ0tBLE9BREw7O0FBR1gsVUFBSSxDQUFDa0IsTUFBTCxFQUFhO0FBQ1gsZUFBT2xCLE9BQVA7QUFDRDs7QUFFRCxVQUFJa0IsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckIsZUFBTztBQUNMLHFCQUFTO0FBQ1AvUCxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLENBREo7QUFFUGtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDQztBQUZILFdBREo7QUFLTEUsbUJBQVMsRUFBRTtBQUNUdkcsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyx3QkFBRCxFQUEyQixNQUEzQixDQURGO0FBRVRrSCxnQkFBSSxFQUFFbUcsc0RBQUcsQ0FBQ0c7QUFGRCxXQUxOO0FBU0xDLG1CQUFTLEVBQUU7QUFDVHhHLG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsd0JBQUQsRUFBMkIsTUFBM0IsQ0FERjtBQUVUa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNJO0FBRkQsV0FUTjtBQWFMRixzQkFBWSxFQUFFO0FBQ1p0RyxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FEQztBQUVaa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNFO0FBRkU7QUFiVCxTQUFQO0FBa0JEOztBQUVELFVBQUl5SixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQixlQUFPO0FBQ0wseUJBQWU7QUFDYi9QLG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FERTtBQUVia0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNVO0FBRkcsV0FEVjtBQUtMLCtCQUFxQjtBQUNuQjlHLG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FEUTtBQUVuQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDVztBQUZTLFdBTGhCO0FBU0wsaUNBQXVCO0FBQ3JCL0csbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBRFU7QUFFckJrSCxnQkFBSSxFQUFFbUcsc0RBQUcsQ0FBQ1k7QUFGVyxXQVRsQjtBQWFMLDhCQUFvQjtBQUNsQmhILG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FETztBQUVsQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDYTtBQUZRO0FBYmYsU0FBUDtBQWtCRDs7QUFFRCxVQUFJOEksTUFBTSxLQUFLLG1CQUFmLEVBQW9DO0FBQ2xDLGVBQU87QUFDTEMsMEJBQWdCLEVBQUU7QUFDaEJoUSxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FESztBQUVoQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDZ0I7QUFGTSxXQURiO0FBS0w2SSwwQkFBZ0IsRUFBRTtBQUNoQmpRLG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsY0FBRCxFQUFpQixNQUFqQixDQURLO0FBRWhCa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNpQjtBQUZNLFdBTGI7QUFTTDZJLDBCQUFnQixFQUFFO0FBQ2hCbFEsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBREs7QUFFaEJrSCxnQkFBSSxFQUFFbUcsc0RBQUcsQ0FBQ2tCO0FBRk0sV0FUYjtBQWFMNkksMEJBQWdCLEVBQUU7QUFDaEJuUSxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FESztBQUVoQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDbUI7QUFGTSxXQWJiO0FBaUJMNkksMEJBQWdCLEVBQUU7QUFDaEJwUSxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FESztBQUVoQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDYztBQUZNLFdBakJiO0FBcUJMbUosMEJBQWdCLEVBQUU7QUFDaEJyUSxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FESztBQUVoQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDZTtBQUZNLFdBckJiO0FBeUJMbUoscUJBQVcsRUFBRTtBQUNYdFEsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixNQUFyQixDQURBO0FBRVhrSCxnQkFBSSxFQUFFbUcsc0RBQUcsQ0FBQ29CO0FBRkMsV0F6QlI7QUE2QkwrSSxjQUFJLEVBQUU7QUFDSnZRLG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FEUDtBQUVKa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNxQjtBQUZOO0FBN0JELFNBQVA7QUFrQ0Q7O0FBRUQsVUFBSXNJLE1BQU0sS0FBSyxnQkFBZixFQUFpQztBQUMvQixlQUFPO0FBQ0wsOEJBQW9CO0FBQ2xCL1AsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixDQURPO0FBRWxCa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUNzQjtBQUZRLFdBRGY7QUFLTCw4QkFBb0I7QUFDbEIxSCxtQkFBTyxFQUFFakgsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBRE87QUFFbEJrSCxnQkFBSSxFQUFFbUcsc0RBQUcsQ0FBQ3VCO0FBRlEsV0FMZjtBQVNMLDhCQUFvQjtBQUNsQjNILG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FETztBQUVsQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDd0I7QUFGUSxXQVRmO0FBYUwsOEJBQW9CO0FBQ2xCNUgsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixDQURPO0FBRWxCa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUN5QjtBQUZRLFdBYmY7QUFpQkwsOEJBQW9CO0FBQ2xCN0gsbUJBQU8sRUFBRWpILEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixDQURPO0FBRWxCa0gsZ0JBQUksRUFBRW1HLHNEQUFHLENBQUMwQjtBQUZRLFdBakJmO0FBcUJMLDhCQUFvQjtBQUNsQjlILG1CQUFPLEVBQUVqSCxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FETztBQUVsQmtILGdCQUFJLEVBQUVtRyxzREFBRyxDQUFDMkI7QUFGUTtBQXJCZixTQUFQO0FBMEJEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUFBLG1DQUMwQixLQUFLL04sS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFEN0M7QUFBQSxVQUNDQyxLQURELDBCQUNDQSxLQUREO0FBQUEsVUFDUTRVLGFBRFIsMEJBQ1FBLGFBRFI7QUFBQSxVQUVDdlcsS0FGRCxHQUVXLEtBQUtJLEtBRmhCLENBRUNKLEtBRkQ7QUFHUCxVQUFNMkssV0FBVyxHQUFHMUQsaURBQVUsQ0FBQyxDQUM3QiwrQkFENkIsRUFFN0I7QUFBRSx5QkFBaUJzUCxhQUFhLEtBQUs7QUFBckMsT0FGNkIsQ0FBRCxDQUE5QjtBQUdBLDBCQUNFO0FBQUssaUJBQVMsRUFBRTVMO0FBQWhCLFNBQ0doSixLQUFLLGlCQUFJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUEyQ0EsS0FBM0MsQ0FEWixlQUVFLG9CQUFDLDBEQUFEO0FBQ0UsYUFBSyxFQUFFM0IsS0FEVDtBQUVFLGVBQU8sRUFBRSxLQUFLNFYsVUFBTCxFQUZYO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQzVWLEtBQUQsRUFBVztBQUNuQixnQkFBSSxDQUFDNlYsV0FBTCxDQUFpQjdWLEtBQWpCO0FBQ0Q7QUFMSCxRQUZGLENBREY7QUFZRDs7O3dDQUVtQjtBQUFBOztBQUFBLFVBQ1ZDLE9BRFUsR0FDRSxLQUFLRixLQURQLENBQ1ZFLE9BRFU7QUFHbEJvQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLCtCQUExQixFQUEyRCxVQUFDZCxDQUFELEVBQU87QUFDaEUsWUFBSSxDQUFDQSxDQUFDLENBQUNlLE1BQVAsRUFBZSxPQUFPLEtBQVA7QUFDZixZQUFJZixDQUFDLENBQUNlLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQnZDLE9BQU8sQ0FBQ3VDLEVBQTVCLEVBQWdDLE9BQU8sS0FBUDs7QUFDaEMsY0FBSSxDQUFDcVQsV0FBTCxDQUFpQnJVLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBMUI7QUFDRCxPQUpEO0FBS0Q7OztnQ0FFV29GLE0sRUFBUTtBQUNsQixXQUFLMUMsUUFBTCxDQUFjO0FBQUUxQyxhQUFLLEVBQUVvRjtBQUFULE9BQWQ7QUFDQSxXQUFLckYsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQnlDLEdBQTNCLENBQStCeUMsTUFBL0I7QUFDRDs7OztFQS9KaUNsRyxTOztBQWtLcEN5VyxxQkFBcUIsQ0FBQy9TLFNBQXRCLEdBQWtDO0FBQ2hDM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFETSxDQUFsQztBQUllNFMsb0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7SUFDUTNTLE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU12RCxZQUFZLEdBQUdWLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNkI7QUFDdkRDLGVBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFFBQU1wRCxPQUFPLEdBQUcsSUFBaEI7QUFDQStDLFVBQU0sZUFDSixvQkFBQywwREFBRDtBQUFnQixhQUFPLEVBQUUvQztBQUF6QixNQURJLEVBRUpBLE9BQU8sQ0FBQ3FELFNBQVIsQ0FBa0IsQ0FBbEIsQ0FGSSxDQUFOO0FBSUQ7QUFQc0QsQ0FBN0IsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QOztBQUNBO0FBQ0E7SUFFUXhFLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7cUJBRXNDQyxFQUFFLENBQUNPLFU7SUFBekNHLFksa0JBQUFBLFk7SUFBY2lKLE8sa0JBQUFBLE87SUFBU0MsVSxrQkFBQUEsVTtJQUc3QnpKLFMsR0FDRUgsRUFBRSxDQUFDRSxPLENBRExDLFM7O0lBR0lzWCxjOzs7OztBQUNKLDBCQUFZelcsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEdBQXRCLEVBQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEosV0FBSyxFQUFMQTtBQURXLEtBQWI7QUFHQSxRQUFNOEssUUFBUSxHQUFHO0FBQ2ZqRCxTQUFHLEVBQUUsQ0FEVTtBQUVmRCxTQUFHLEVBQUUsR0FGVTtBQUdmNk8sZ0JBQVUsRUFBRSxFQUhHO0FBSWYzTyxVQUFJLEVBQUU7QUFKUyxLQUFqQjtBQU9BLFVBQUs0TyxZQUFMLHFCQUNLNUwsUUFETCxNQUVNL0ssS0FBSyxDQUFDRSxPQUFOLENBQWN5QixNQUFkLENBQXFCOE8sV0FBckIsSUFBb0MsRUFGMUM7QUFLQSxVQUFLbkwsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCUixJQUFsQiwrQkFBcEI7QUFDQSxVQUFLOFIsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCOVIsSUFBakIsK0JBQW5CO0FBbkJpQjtBQW9CbEI7Ozs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDbEQsS0FERCxHQUNXLEtBQUs1QixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUQ5QixDQUNDQyxLQUREO0FBQUEsK0JBRWdDLEtBQUsrVSxZQUZyQztBQUFBLFVBRUNELFVBRkQsc0JBRUNBLFVBRkQ7QUFBQSxVQUVhNU8sR0FGYixzQkFFYUEsR0FGYjtBQUFBLFVBRWtCRCxHQUZsQixzQkFFa0JBLEdBRmxCO0FBQUEsVUFFdUJFLElBRnZCLHNCQUV1QkEsSUFGdkI7QUFBQSxVQUdDOUgsS0FIRCxHQUdXLEtBQUtJLEtBSGhCLENBR0NKLEtBSEQ7QUFJUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHMkIsS0FBSyxpQkFBSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBMkNBLEtBQTNDLENBRFosQ0FERixlQUlFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLFlBQUQ7QUFDRSxhQUFLLEVBQUUzQixLQURUO0FBRUUsdUJBQWUsRUFBRXlXLFVBRm5CO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ3pXLEtBQUQsRUFBVztBQUNuQixnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQnJGLEtBQWxCO0FBQ0QsU0FMSDtBQU1FLFdBQUcsRUFBRTZILEdBTlA7QUFPRSxXQUFHLEVBQUVELEdBUFA7QUFRRSxZQUFJLEVBQUVFO0FBUlIsUUFERixFQVdHLEtBQUs2TyxXQUFMLEVBWEgsQ0FKRixDQURGO0FBb0JEOzs7aUNBRVkzVyxLLEVBQU87QUFDbEIsV0FBSzBDLFFBQUwsQ0FBYztBQUFFMUMsYUFBSyxFQUFMQTtBQUFGLE9BQWQ7QUFDQSxXQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0IzQyxLQUEvQjtBQUNEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDVkMsT0FEVSxHQUNFLEtBQUtGLEtBRFAsQ0FDVkUsT0FEVTtBQUVsQm9DLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsK0JBQTFCLEVBQTJELFVBQUNkLENBQUQsRUFBTztBQUNoRSxZQUFJLENBQUNBLENBQUMsQ0FBQ2UsTUFBUCxFQUFlLE9BQU8sS0FBUDtBQUNmLFlBQUlmLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxFQUFULEtBQWdCdkMsT0FBTyxDQUFDdUMsRUFBNUIsRUFBZ0MsT0FBTyxLQUFQOztBQUNoQyxjQUFJLENBQUM2QyxZQUFMLENBQWtCN0QsQ0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUEzQjtBQUNELE9BSkQ7QUFLRDs7O2tDQUVhO0FBQUE7O0FBQUEsVUFDSnlXLFVBREksR0FDVyxLQUFLQyxZQURoQixDQUNKRCxVQURJO0FBQUEsVUFFSnpXLEtBRkksR0FFTSxLQUFLSSxLQUZYLENBRUpKLEtBRkk7O0FBR1osVUFBSSxDQUFDeVcsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkMsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUEsVUFBVSxLQUFLelcsS0FBbkIsRUFBMEI7QUFDeEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsMEJBQ0Usb0JBQUMsT0FBRDtBQUNFLFdBQUcsRUFBQyxlQUROO0FBRUUsWUFBSSxFQUFFbEIsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEI7QUFGVixzQkFJRSxvQkFBQyxVQUFEO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsY0FGUDtBQUdFLGlCQUFTLEVBQUMsT0FIWjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ3VHLFlBQUwsQ0FBa0JvUixVQUFsQixDQUFOO0FBQUE7QUFKWCxRQUpGLENBREY7QUFhRDs7OztFQXZGMEJ2WCxTOztBQTBGN0JzWCxjQUFjLENBQUM1VCxTQUFmLEdBQTJCO0FBQ3pCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERCxDQUEzQjtBQUlleVQsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7SUFDUXhULE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU1nUiw2QkFBNkIsR0FBR2pWLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNkI7QUFDeEVDLGVBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFFBQU1wRCxPQUFPLEdBQUcsSUFBaEI7QUFDQStDLFVBQU0sZUFDSixvQkFBQywyRUFBRDtBQUFpQyxhQUFPLEVBQUUvQztBQUExQyxNQURJLEVBRUpBLE9BQU8sQ0FBQ3FELFNBQVIsQ0FBa0IsQ0FBbEIsQ0FGSSxDQUFOO0FBSUQ7QUFQdUUsQ0FBN0IsQ0FBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUXhFLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7a0JBQ3dCQyxFQUFFLENBQUNFLE87SUFBM0J5VixRLGVBQUFBLFE7SUFBVWtDLFMsZUFBQUEsUzs7QUFFbEIsSUFBTUMsK0JBQStCLEdBQUcsU0FBbENBLCtCQUFrQyxPQUFpQjtBQUFBLE1BQWQ1VyxPQUFjLFFBQWRBLE9BQWM7QUFBQSx3QkFDNUJBLE9BQU8sQ0FBQ3lCLE1BRG9CO0FBQUEsTUFDL0NrVCxPQUQrQyxtQkFDL0NBLE9BRCtDO0FBQUEsTUFDdENqVCxLQURzQyxtQkFDdENBLEtBRHNDOztBQUFBLDZCQUU3QjFCLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsR0FBaEIsRUFGNkI7QUFBQTtBQUFBLE1BRWhESCxLQUZnRDtBQUFBLE1BRXpDNlUsUUFGeUM7O0FBQUEsa0JBRzNCSCxRQUFRLENBQUMsU0FBRCxDQUhtQjtBQUFBO0FBQUEsTUFHaEQvSyxNQUhnRDtBQUFBLE1BR3hDbU4sU0FId0M7O0FBS3ZELE1BQU1qQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDa0IsUUFBRCxFQUFjO0FBQ2hDbEMsWUFBUSxDQUFDa0MsUUFBRCxDQUFSO0FBQ0E5VyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0J5QyxHQUFoQixDQUFvQm9VLFFBQXBCO0FBQ0QsR0FIRDs7QUFLQUgsV0FBUyxDQUFDLFlBQU07QUFDZCxRQUFJLE9BQU81VyxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCZ1gsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQmpYLEtBQTFCO0FBQ0E2VSxjQUFRLENBQUM7QUFBQ3pMLGNBQU0sRUFBRXBKLEtBQVQ7QUFBZ0JrSixlQUFPLEVBQUVsSixLQUF6QjtBQUFnQ21KLGNBQU0sRUFBRW5KO0FBQXhDLE9BQUQsQ0FBUjtBQUNKOztBQUVFcUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwrQkFBMUIsRUFBMkQsVUFBQ2QsQ0FBRCxFQUFPO0FBQ2hFLFVBQUksQ0FBQ0EsQ0FBQyxDQUFDZSxNQUFQLEVBQWUsT0FBTyxLQUFQO0FBQ2YsVUFBSWYsQ0FBQyxDQUFDZSxNQUFGLENBQVNDLEVBQVQsS0FBZ0J2QyxPQUFPLENBQUN1QyxFQUE1QixFQUFnQyxPQUFPLEtBQVA7QUFDaENxVCxpQkFBVyxDQUFDclUsQ0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUFWLENBQVg7QUFDRCxLQUpEO0FBS0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHMkIsS0FBSyxpQkFBSTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUEyQ0EsS0FBM0MsQ0FEWixlQUVFLG9CQUFDLDBEQUFEO0FBQW1CLFlBQVEsRUFBRSxrQkFBQ2dJLE1BQUQ7QUFBQSxhQUFZbU4sU0FBUyxDQUFDbk4sTUFBRCxDQUFyQjtBQUFBO0FBQTdCLElBRkYsQ0FERixlQUtFLG9CQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFFM0osS0FBSyxDQUFDMkosTUFBRCxDQURkO0FBRUUsV0FBTyxFQUFFaUwsT0FGWDtBQUdFLFlBQVEsRUFBRSxrQkFBQzVVLEtBQUQsRUFBVztBQUNuQjZWLGlCQUFXLENBQUM3VixLQUFELENBQVg7QUFDRDtBQUxILElBTEYsQ0FERjtBQWVELENBdENEOztBQXdDQTZXLCtCQUErQixDQUFDalUsU0FBaEMsR0FBNEM7QUFDMUMzQyxTQUFPLEVBQUU0QyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURnQixDQUE1QztBQUllOFQsOEZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7SUFDUTdULE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU15USxzQkFBc0IsR0FBRzFVLEVBQUUsQ0FBQ21FLFNBQUgsQ0FBYUMsT0FBYixDQUFxQkMsTUFBckIsQ0FBNkI7QUFDakVDLGVBQWEsRUFBRSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFFBQU1wRCxPQUFPLEdBQUcsSUFBaEI7QUFDQStDLFVBQU0sZUFDSixvQkFBQyxvRUFBRDtBQUEwQixhQUFPLEVBQUUvQztBQUFuQyxNQURJLEVBRUpBLE9BQU8sQ0FBQ3FELFNBQVIsQ0FBa0IsQ0FBbEIsQ0FGSSxDQUFOO0FBSUQ7QUFQZ0UsQ0FBN0IsQ0FBL0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0lBRVF4RSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO3FCQUM4Q0MsRUFBRSxDQUFDTyxVO0lBQWpERyxZLGtCQUFBQSxZO0lBQWNGLE0sa0JBQUFBLE07SUFBUW1KLE8sa0JBQUFBLE87SUFBU0MsVSxrQkFBQUEsVTtJQUMvQnpKLFMsR0FBY0gsRUFBRSxDQUFDRSxPLENBQWpCQyxTOztJQUVGZ1ksd0I7Ozs7O0FBQ0osb0NBQVluWCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0ssS0FBTCxHQUFhO0FBQ1hKLFdBQUssRUFBRWlMLHFFQUFjLENBQUNsTCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsR0FBdEIsRUFBRCxDQURWO0FBRVh1SCxtQkFBYSxFQUFFO0FBRkosS0FBYjtBQUtBLFVBQUtyQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JSLElBQWxCLCtCQUFwQjtBQUNBLFVBQUtzUyxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QnRTLElBQXpCLCtCQUEzQjtBQUNBLFVBQUtqRCxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JpRCxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLOFIsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCOVIsSUFBakIsK0JBQW5CO0FBVmlCO0FBV2xCOzs7O2lDQUVZO0FBQUEsVUFDSDBDLEtBREcsR0FDTyxLQUFLeEgsS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEI4TyxXQURqQyxDQUNIakosS0FERzs7QUFFWCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlBLEtBQUssQ0FBQ1MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0Qiw0QkFBTyxvQkFBQyxNQUFEO0FBQVEsaUJBQU8sTUFBZjtBQUFnQixrQkFBUSxNQUF4QjtBQUF5QixtQkFBUyxFQUFDO0FBQW5DLFdBQW1EVCxLQUFLLENBQUMsQ0FBRCxDQUF4RCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBSyxDQUFDbEcsR0FBTixDQUFVLFVBQUM0RyxJQUFELEVBQU8zRyxLQUFQLEVBQWlCO0FBQ2hDLFlBQU00RyxXQUFXLEdBQUdqQixpREFBVSxDQUM1QjtBQUNFa0IsZ0JBQU0sRUFBRS9HLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV0osS0FBWCxDQUFpQm9CLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV3NILGFBQVgsR0FDekIsT0FEUSxNQUNLTztBQUZmLFNBRDRCLENBQTlCO0FBTUEsNEJBQ0Usb0JBQUMsTUFBRDtBQUNFLGFBQUcsRUFBRTNHLEtBRFA7QUFFRSxpQkFBTyxNQUZUO0FBR0UsbUJBQVMsRUFBRTRHLFdBSGI7QUFJRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQU1sSSxLQUFLLHFCQUFRb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXSixLQUFuQixDQUFYOztBQUNBQSxpQkFBSyxDQUFDb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXc0gsYUFBWCxHQUEyQixPQUE1QixDQUFMLEdBQTRDTyxJQUE1Qzs7QUFDQSxnQkFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJqSSxtQkFBSyxDQUFDb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXc0gsYUFBWixDQUFMLEdBQWtDL0QsU0FBUyxDQUN6QzNELEtBQUssQ0FBQ29CLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV3NILGFBQVosQ0FEb0MsRUFFekMsVUFBQzFILEtBQUQ7QUFBQSx1QkFBV0EsS0FBSyxHQUFHb1gsUUFBUSxDQUFDcFgsS0FBRCxDQUFYLEdBQXFCQSxLQUFyQztBQUFBLGVBRnlDLENBQTNDO0FBR0Q7O0FBQ0RvQixnQkFBSSxDQUFDc0IsUUFBTCxDQUFjO0FBQUUxQyxtQkFBSyxFQUFMQTtBQUFGLGFBQWQ7QUFDQW9CLGdCQUFJLENBQUNyQixLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0IzQyxLQUEvQjtBQUNEO0FBZEgsV0FnQkdpSSxJQWhCSCxDQURGO0FBb0JELE9BM0JNLENBQVA7QUE0QkQ7OzswQ0FFcUI7QUFBQTs7QUFBQSxVQUNadEcsS0FEWSxHQUNGLEtBQUs1QixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQURqQixDQUNaQyxLQURZO0FBQUEsVUFFWitILGNBRlksR0FFTyxLQUFLM0osS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEI4TyxXQUZqQyxDQUVaOUcsY0FGWTtBQUdwQiwwQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHL0gsS0FBSyxpQkFBSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBMkNBLEtBQTNDLENBRFosZUFFRSxvQkFBQywwREFBRDtBQUNFLGdCQUFRLEVBQUUsa0JBQUMrRixhQUFEO0FBQUEsaUJBQW1CLE1BQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFZ0YseUJBQWEsRUFBYkE7QUFBRixXQUFkLENBQW5CO0FBQUEsU0FEWjtBQUVFLHNCQUFjLEVBQUVnQyxjQUFjLElBQUk7QUFGcEMsUUFGRixlQU1FO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csS0FBSzlILFVBQUwsRUFESCxDQU5GLENBREY7QUFZRDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBQzBCLEtBQUt4QixLQUQvQjtBQUFBLFVBQ0NzSCxhQURELGVBQ0NBLGFBREQ7QUFBQSxVQUNnQjFILEtBRGhCLGVBQ2dCQSxLQURoQjtBQUFBLGtDQUVvQixLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQjhPLFdBRjlDO0FBQUEsVUFFQzFJLElBRkQseUJBRUNBLElBRkQ7QUFBQSxVQUVPRCxHQUZQLHlCQUVPQSxHQUZQO0FBQUEsVUFFWUQsR0FGWix5QkFFWUEsR0FGWjtBQUdQLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csS0FBS3VQLG1CQUFMLEVBREgsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxvQkFBQyxZQUFEO0FBQ0UsYUFBSyxFQUFFQyxRQUFRLENBQUNwWCxLQUFLLENBQUMwSCxhQUFELENBQU4sQ0FEakI7QUFFRSx1QkFBZSxFQUFFLENBRm5CO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQzFILEtBQUQsRUFBVztBQUNuQixnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQnJGLEtBQWxCO0FBQ0QsU0FMSDtBQU1FLFdBQUcsRUFBRTZILEdBQUcsSUFBSSxDQU5kO0FBT0UsWUFBSSxFQUFFQyxJQUFJLElBQUksQ0FQaEI7QUFRRSxXQUFHLEVBQUVGLEdBQUcsSUFBSTtBQVJkLFFBREYsRUFXRyxLQUFLK08sV0FBTCxFQVhILENBRkYsQ0FERjtBQWtCRDs7O2tDQUVhO0FBQUE7O0FBQUEsVUFDSkYsVUFESSxHQUNXLEtBQUsxVyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQjhPLFdBRHJDLENBQ0ppRyxVQURJO0FBQUEseUJBRXFCLEtBQUtyVyxLQUYxQjtBQUFBLFVBRUpzSCxhQUZJLGdCQUVKQSxhQUZJO0FBQUEsVUFFVzFILEtBRlgsZ0JBRVdBLEtBRlg7O0FBR1osVUFBSSxDQUFDeVcsVUFBTCxFQUFpQjtBQUNmLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlBLFVBQVUsQ0FBQy9PLGFBQUQsQ0FBVixLQUE4QjFILEtBQUssQ0FBQzBILGFBQUQsQ0FBdkMsRUFBd0Q7QUFDdEQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsMEJBQ0Usb0JBQUMsT0FBRDtBQUNFLFdBQUcsRUFBQyxlQUROO0FBRUUsWUFBSSxFQUFFNUksRUFBRSxDQUFDLGFBQUQsRUFBZ0IsTUFBaEI7QUFGVixzQkFJRSxvQkFBQyxVQUFEO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsY0FGUDtBQUdFLGlCQUFTLEVBQUMsT0FIWjtBQUlFLGVBQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ3VHLFlBQUwsQ0FBa0JvUixVQUFVLENBQUMvTyxhQUFELENBQTVCLENBQU47QUFBQTtBQUpYLFFBSkYsQ0FERjtBQWFEOzs7aUNBRVkxSCxLLEVBQU87QUFBQSxVQUNWMEgsYUFEVSxHQUNRLEtBQUt0SCxLQURiLENBQ1ZzSCxhQURVO0FBRWxCLFdBQUtoRixRQUFMLENBQWM7QUFDWjFDLGFBQUssb0JBQ0EsS0FBS0ksS0FBTCxDQUFXSixLQURYLHNCQUVGMEgsYUFGRSxFQUVjMUgsS0FGZDtBQURPLE9BQWQ7QUFNQSxXQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0J3SSxJQUFJLENBQUNzSixTQUFMLG1CQUMxQnhKLHFFQUFjLENBQUMsS0FBS2xMLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkJDLEdBQTNCLEVBQUQsQ0FEWSxzQkFFNUJ1SCxhQUY0QixFQUVaMUgsS0FGWSxHQUEvQjtBQUlEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDVkMsT0FEVSxHQUNFLEtBQUtGLEtBRFAsQ0FDVkUsT0FEVSxFQUVsQjs7QUFDQSxVQUFNRCxLQUFLLEdBQUcrTCw0RUFBcUIsQ0FBQzlMLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsR0FBaEIsRUFBRCxDQUFuQzs7QUFDQSxVQUFLLEtBQUtDLEtBQUwsQ0FBV0osS0FBWCxLQUFxQkEsS0FBMUIsRUFBa0M7QUFDaEMsYUFBSzBDLFFBQUwsQ0FBYztBQUFFMUMsZUFBSyxFQUFFQTtBQUFULFNBQWQ7QUFDRDs7QUFFRHFDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsK0JBQTFCLEVBQTJELFVBQUNkLENBQUQsRUFBTztBQUNoRSxZQUFJLENBQUNBLENBQUMsQ0FBQ2UsTUFBUCxFQUFlLE9BQU8sS0FBUDtBQUNmLFlBQUlmLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxFQUFULEtBQWdCdkMsT0FBTyxDQUFDdUMsRUFBNUIsRUFBZ0MsT0FBTyxLQUFQLENBRmdDLENBR2hFOztBQUNBLFlBQU02VSxhQUFhLEdBQUd0TCw0RUFBcUIsQ0FBQ3ZLLENBQUMsQ0FBQ2UsTUFBRixDQUFTdkMsS0FBVixDQUEzQzs7QUFFQSxjQUFJLENBQUMwQyxRQUFMLENBQWM7QUFBRTFDLGVBQUssRUFBRXFYO0FBQVQsU0FBZDs7QUFDQSxjQUFJLENBQUN0WCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0J3SSxJQUFJLENBQUNzSixTQUFMLENBQWU0QyxhQUFmLENBQS9CO0FBQ0QsT0FSRDtBQVNEOzs7O0VBdkpvQ25ZLFM7O0FBMEp2Q2dZLHdCQUF3QixDQUFDdFUsU0FBekIsR0FBcUM7QUFDbkMzQyxTQUFPLEVBQUU0QyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURTLENBQXJDO0FBSWVtVSx1RkFBZixFOzs7Ozs7Ozs7Ozs7QUMxS0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtJQUNRbFUsTSxHQUFXakUsRUFBRSxDQUFDRSxPLENBQWQrRCxNO0FBRUQsSUFBTTZQLHVCQUF1QixHQUFHOVQsRUFBRSxDQUFDbUUsU0FBSCxDQUFhQyxPQUFiLENBQXFCQyxNQUFyQixDQUE2QjtBQUNsRUMsZUFBYSxFQUFFLFNBQVNBLGFBQVQsR0FBeUI7QUFDdEMsUUFBTXBELE9BQU8sR0FBRyxJQUFoQjtBQUNBK0MsVUFBTSxlQUNKLG9CQUFDLHFFQUFEO0FBQTJCLGFBQU8sRUFBRS9DO0FBQXBDLE1BREksRUFFSkEsT0FBTyxDQUFDcUQsU0FBUixDQUFrQixDQUFsQixDQUZJLENBQU47QUFJRDtBQVBpRSxDQUE3QixDQUFoQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7O0FBQ0E7QUFDQTtBQUNBO0lBRVExRCxhLEdBQWtCYixFQUFFLENBQUNPLFUsQ0FBckJNLGE7a0JBQ3dCYixFQUFFLENBQUNFLE87SUFBM0J5VixRLGVBQUFBLFE7SUFBVWtDLFMsZUFBQUEsUzs7QUFFbEIsSUFBTVUseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixPQUFpQjtBQUFBLE1BQWRyWCxPQUFjLFFBQWRBLE9BQWM7QUFDakQyVyxXQUFTLENBQUMsWUFBTTtBQUNkdlUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwrQkFBMUIsRUFBMkQsVUFBQ2QsQ0FBRCxFQUFPO0FBQ2hFLFVBQUksQ0FBQ0EsQ0FBQyxDQUFDZSxNQUFQLEVBQWU7QUFDYixlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFJZixDQUFDLENBQUNlLE1BQUYsQ0FBU0MsRUFBVCxLQUFnQnZDLE9BQU8sQ0FBQ3VDLEVBQTVCLEVBQWdDO0FBQzlCLGVBQU8sS0FBUDtBQUNEOztBQUNEcVMsY0FBUSxDQUFDclQsQ0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUFWLENBQVI7QUFDRCxLQVJEO0FBU0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDs7QUFEaUQsa0JBYXZCMFUsUUFBUSxDQUFDelUsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxHQUFoQixFQUFELENBYmU7QUFBQTtBQUFBLE1BYTFDSCxLQWIwQztBQUFBLE1BYW5DNlUsUUFibUM7O0FBQUEsbUJBY3JCSCxRQUFRLENBQUMsU0FBRCxDQWRhO0FBQUE7QUFBQSxNQWMxQy9LLE1BZDBDO0FBQUEsTUFjbENtTixTQWRrQzs7QUFnQmpELHNCQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Usb0JBQUMsYUFBRDtBQUNFLGFBQVMsRUFBQyxxQkFEWjtBQUVFLFdBQU8sRUFBRTlXLEtBQUssQ0FBQzJKLE1BQUQsQ0FGaEI7QUFHRSxTQUFLLEVBQUUxSixPQUFPLENBQUN5QixNQUFSLENBQWVDLEtBSHhCO0FBSUUsWUFBUSxFQUFFLGtCQUFDb1YsUUFBRCxFQUFjO0FBQ3RCLFVBQU1RLFNBQVMscUJBQVF2WCxLQUFSLENBQWY7O0FBQ0F1WCxlQUFTLENBQUM1TixNQUFELENBQVQsR0FBb0JvTixRQUFwQjtBQUNBbEMsY0FBUSxDQUFDMEMsU0FBRCxDQUFSO0FBQ0F0WCxhQUFPLENBQUNDLE9BQVIsQ0FBZ0J5QyxHQUFoQixDQUFvQjRVLFNBQXBCO0FBQ0Q7QUFUSCxJQURGLGVBWUUsb0JBQUMsMERBQUQ7QUFDRSxZQUFRLEVBQUV0WCxPQUFPLENBQUN5QixNQUFSLENBQWUySCxRQUFmLElBQTJCLEVBRHZDO0FBRUUsWUFBUSxFQUFFLGtCQUFDTSxNQUFELEVBQVk7QUFDcEJtTixlQUFTLENBQUNuTixNQUFELENBQVQ7QUFDRDtBQUpILElBWkYsQ0FERjtBQXFCRCxDQXJDRDs7QUF1Q0EyTix5QkFBeUIsQ0FBQzFVLFNBQTFCLEdBQXNDO0FBQ3BDM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEVSxDQUF0QztBQUlldVUsd0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7SUFDUXRVLE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU1nUSxjQUFjLEdBQUdqVSxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTZCO0FBQ3pEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMsNERBQUQ7QUFBa0IsYUFBTyxFQUFFL0M7QUFBM0IsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUHdELENBQTdCLENBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRcEUsUyxHQUFjSCxFQUFFLENBQUNFLE8sQ0FBakJDLFM7SUFDQUssTSxHQUFXUixFQUFFLENBQUNPLFUsQ0FBZEMsTTtjQUNjbUUsTTtJQUFkQyxTLFdBQUFBLFM7O0lBRUY2VCxnQjs7Ozs7QUFDSiw0QkFBWXpYLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxRQUFNc1EsYUFBYSxHQUFHO0FBQ3BCeEksU0FBRyxFQUFFLENBQUMsR0FEYztBQUVwQkQsU0FBRyxFQUFFLEdBRmU7QUFHcEI2UCwyQkFBcUIsRUFBRSxLQUhIO0FBSXBCbFEsV0FBSyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxHQUFiO0FBSmEsS0FBdEI7QUFPQSxVQUFLZ0osYUFBTCxHQUFxQnhRLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQXJCLHFCQUNoQkgsYUFEZ0IsTUFFaEJ0USxLQUFLLENBQUNFLE9BQU4sQ0FBY3lCLE1BQWQsQ0FBcUI4TyxXQUZMLElBR2pCSCxhQUhKO0FBS0EsUUFBTXFILFdBQVcsR0FBRztBQUNsQnRPLFlBQU0sRUFBRTtBQUFFckYsV0FBRyxFQUFFLENBQVA7QUFBVUMsYUFBSyxFQUFFLENBQWpCO0FBQW9CQyxjQUFNLEVBQUUsQ0FBNUI7QUFBK0JDLFlBQUksRUFBRTtBQUFyQyxPQURVO0FBRWxCaUYsWUFBTSxFQUFFO0FBQUVwRixXQUFHLEVBQUUsQ0FBUDtBQUFVQyxhQUFLLEVBQUUsQ0FBakI7QUFBb0JDLGNBQU0sRUFBRSxDQUE1QjtBQUErQkMsWUFBSSxFQUFFO0FBQXJDLE9BRlU7QUFHbEJnRixhQUFPLEVBQUU7QUFBRW5GLFdBQUcsRUFBRSxDQUFQO0FBQVVDLGFBQUssRUFBRSxDQUFqQjtBQUFvQkMsY0FBTSxFQUFFLENBQTVCO0FBQStCQyxZQUFJLEVBQUU7QUFBckMsT0FIUztBQUlsQixxQkFBZSxJQUpHO0FBS2xCLHFCQUFlLElBTEc7QUFNbEIsc0JBQWdCO0FBTkUsS0FBcEI7QUFRQSxVQUFLdUMsWUFBTCxHQUFvQjFHLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxnQ0FDZmdXLFdBRGUsTUFFZjNYLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxXQUZlLElBR2hCZ1csV0FISjtBQUtBLFFBQU1DLEtBQUssR0FBRzVYLEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxHQUF0QixFQUFkO0FBQ0EsUUFBTUgsS0FBSyxHQUFHMEwsZ0VBQVMsQ0FBQyxNQUFLakYsWUFBTixFQUFvQmtSLEtBQXBCLENBQXZCO0FBRUEsVUFBS3ZYLEtBQUwsR0FBYTtBQUNYSixXQUFLLEVBQUxBLEtBRFc7QUFFWHlLLFlBQU0sRUFBRSxJQUZHO0FBR1gvQyxtQkFBYSxFQUFFO0FBSEosS0FBYjs7QUFNQSxRQUFJLENBQUMsTUFBS2tRLG9CQUFMLEVBQUwsRUFBa0M7QUFDaEMsWUFBS3hYLEtBQUwsQ0FBV3FLLE1BQVgsR0FBb0IsS0FBcEI7QUFDRDs7QUFFRCxVQUFLbU4sb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEIvUyxJQUExQiwrQkFBNUI7QUFDQSxVQUFLakQsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCaUQsSUFBaEIsK0JBQWxCO0FBQ0EsVUFBS2dSLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQmhSLElBQWpCLCtCQUFuQjtBQUNBLFVBQUtnUSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY2hRLElBQWQsK0JBQWhCO0FBNUNpQjtBQTZDbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNZ0UsT0FBTyxHQUFHLENBQ2Q7QUFDRXhJLFlBQUksRUFBRSxLQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVdKLEtBQVgsQ0FBaUIsS0FBS0ksS0FBTCxDQUFXc0gsYUFBNUIsRUFBMkMzRDtBQUZwRCxPQURjLEVBS2Q7QUFDRTFELFlBQUksRUFBRSxPQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVdKLEtBQVgsQ0FBaUIsS0FBS0ksS0FBTCxDQUFXc0gsYUFBNUIsRUFBMkMxRDtBQUZwRCxPQUxjLEVBU2Q7QUFDRTNELFlBQUksRUFBRSxRQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVdKLEtBQVgsQ0FBaUIsS0FBS0ksS0FBTCxDQUFXc0gsYUFBNUIsRUFBMkN6RDtBQUZwRCxPQVRjLEVBYWQ7QUFDRTVELFlBQUksRUFBRSxNQURSO0FBRUVMLGFBQUssRUFBRSxLQUFLSSxLQUFMLENBQVdKLEtBQVgsQ0FBaUIsS0FBS0ksS0FBTCxDQUFXc0gsYUFBNUIsRUFBMkN4RDtBQUZwRCxPQWJjLENBQWhCO0FBRE8sVUFtQkN1VCxxQkFuQkQsR0FtQjJCLEtBQUtsSCxhQW5CaEMsQ0FtQkNrSCxxQkFuQkQ7QUFxQlAsVUFBTTlNLFdBQVcsR0FBRzFELGlEQUFVLENBQUMsQ0FDN0IsK0JBRDZCLEVBRTdCLGFBRjZCLENBQUQsQ0FBOUI7QUFLQSwwQkFDRTtBQUFLLGlCQUFTLEVBQUUwRDtBQUFoQixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUs1SyxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQkMsS0FBMUIsaUJBQ0M7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0csS0FBSzVCLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCQyxLQUQ3QixDQUZKLGVBS0Usb0JBQUMsNkRBQUQ7QUFDRSxzQkFBYyxFQUFFOFYscUJBRGxCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQy9QLGFBQUQsRUFBbUI7QUFDM0IsZ0JBQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFZ0YseUJBQWEsRUFBYkE7QUFBRixXQUFkOztBQUNBLGdCQUFJLENBQUNoRixRQUFMLENBQWM7QUFBRStILGtCQUFNLEVBQUUsTUFBSSxDQUFDbU4sb0JBQUw7QUFBVixXQUFkO0FBQ0Q7QUFMSCxRQUxGLGVBWUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLaFcsVUFBTCxFQURILENBWkYsQ0FERixlQWlCRSxvQkFBQyx5REFBRDtBQUNFLFdBQUcsRUFBRSxLQUFLMk8sYUFBTCxDQUFtQjFJLEdBRDFCO0FBRUUsV0FBRyxFQUFFLEtBQUswSSxhQUFMLENBQW1CM0ksR0FGMUI7QUFHRSxZQUFJLEVBQUUsS0FBS3hILEtBQUwsQ0FBV0osS0FBWCxDQUFpQixLQUFLSSxLQUFMLENBQVdzSCxhQUFYLEdBQTJCLE9BQTVDLE1BQ04sSUFETSxHQUNDLEdBREQsR0FDTyxDQUpmO0FBS0UsZUFBTyxFQUFFbUIsT0FMWDtBQU1FLGdCQUFRLEVBQUUsS0FBS3BDLFlBQUwsQ0FBa0IsS0FBS3JHLEtBQUwsQ0FBV3NILGFBQTdCLENBTlo7QUFPRSxjQUFNLEVBQUUsS0FBS3RILEtBQUwsQ0FBV3FLLE1BUHJCO0FBUUUsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQy9ILFFBQUwsQ0FBYztBQUFFK0gsa0JBQU0sRUFBRSxDQUFDLE1BQUksQ0FBQ3JLLEtBQUwsQ0FBV3FLO0FBQXRCLFdBQWQsQ0FBTjtBQUFBLFNBUlo7QUFTRSxnQkFBUSxFQUFFLGtCQUFDdkYsVUFBRCxFQUFhQyxZQUFiLEVBQThCO0FBQ3RDLGdCQUFJLENBQUMwUCxRQUFMLENBQWMzUCxVQUFkLEVBQTBCQyxZQUExQjtBQUNELFNBWEg7QUFZRSxlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBSSxDQUFDekMsUUFBTCxDQUFjO0FBQUUxQyxpQkFBSyxFQUFFLE1BQUksQ0FBQ3lHO0FBQWQsV0FBZDs7QUFDQSxnQkFBSSxDQUFDMUcsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQnlDLEdBQTNCLENBQStCLE1BQUksQ0FBQzhELFlBQXBDO0FBQ0Q7QUFmSCxRQWpCRixDQURGO0FBcUNEOzs7aUNBRVk7QUFDWCxVQUFNckYsSUFBSSxHQUFHLElBQWI7QUFEVyxVQUVIbUcsS0FGRyxHQUVPLEtBQUtnSixhQUZaLENBRUhoSixLQUZHOztBQUlYLFVBQUlBLEtBQUssQ0FBQ1MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0Qiw0QkFBTyxvQkFBQyxNQUFEO0FBQVEsaUJBQU8sTUFBZjtBQUFnQixrQkFBUSxNQUF4QjtBQUF5QixtQkFBUyxFQUFDO0FBQW5DLFdBQW1EVCxLQUFLLENBQUMsQ0FBRCxDQUF4RCxDQUFQO0FBQ0Q7O0FBQ0QsYUFBT0EsS0FBSyxDQUFDbEcsR0FBTixDQUFVLFVBQUM0RyxJQUFELEVBQU8zRyxLQUFQLEVBQWlCO0FBQ2hDLFlBQU00RyxXQUFXLEdBQUdqQixpREFBVSxDQUM1QjtBQUNFa0IsZ0JBQU0sRUFBRS9HLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV0osS0FBWCxDQUFpQm9CLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV3NILGFBQVgsR0FDekIsT0FEUSxNQUNLTztBQUZmLFNBRDRCLENBQTlCO0FBTUEsNEJBQ0Usb0JBQUMsTUFBRDtBQUNFLGFBQUcsRUFBRTNHLEtBRFA7QUFFRSxpQkFBTyxNQUZUO0FBR0UsbUJBQVMsRUFBRTRHLFdBSGI7QUFJRSxpQkFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQU1sSSxLQUFLLHFCQUFRb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXSixLQUFuQixDQUFYOztBQUNBQSxpQkFBSyxDQUFDb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXc0gsYUFBWCxHQUEyQixPQUE1QixDQUFMLEdBQTRDTyxJQUE1Qzs7QUFDQSxnQkFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJqSSxtQkFBSyxDQUFDb0IsSUFBSSxDQUFDaEIsS0FBTCxDQUFXc0gsYUFBWixDQUFMLEdBQWtDL0QsU0FBUyxDQUN6QzNELEtBQUssQ0FBQ29CLElBQUksQ0FBQ2hCLEtBQUwsQ0FBV3NILGFBQVosQ0FEb0MsRUFFekMsVUFBQzFILEtBQUQ7QUFBQSx1QkFBV0EsS0FBSyxHQUFHb1gsUUFBUSxDQUFDcFgsS0FBRCxDQUFYLEdBQXFCQSxLQUFyQztBQUFBLGVBRnlDLENBQTNDO0FBR0Q7O0FBQ0RvQixnQkFBSSxDQUFDc0IsUUFBTCxDQUFjO0FBQUUxQyxtQkFBSyxFQUFMQTtBQUFGLGFBQWQ7QUFDQW9CLGdCQUFJLENBQUNyQixLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0IzQyxLQUEvQjtBQUNEO0FBZEgsV0FlRWlJLElBZkYsQ0FERjtBQW1CRCxPQTFCTSxDQUFQO0FBMkJEOzs7NkJBRVEvQyxVLEVBQVlDLFksRUFBYztBQUNqQyxVQUFNbkYsS0FBSyxxQkFBUSxLQUFLSSxLQUFMLENBQVdKLEtBQW5CLENBQVg7O0FBQ0EsVUFBSSxLQUFLSSxLQUFMLENBQVdxSyxNQUFmLEVBQXVCO0FBQ3JCekssYUFBSyxDQUFDLEtBQUtJLEtBQUwsQ0FBV3NILGFBQVosQ0FBTCxHQUFrQy9ELFNBQVMsQ0FDekMzRCxLQUFLLENBQUMsS0FBS0ksS0FBTCxDQUFXc0gsYUFBWixDQURvQyxFQUNSO0FBQUEsaUJBQU12QyxZQUFOO0FBQUEsU0FEUSxDQUEzQztBQUVELE9BSEQsTUFHTztBQUNMbkYsYUFBSyxDQUFDLEtBQUtJLEtBQUwsQ0FBV3NILGFBQVosQ0FBTCxxQkFDSzFILEtBQUssQ0FBQyxLQUFLSSxLQUFMLENBQVdzSCxhQUFaLENBRFYsc0JBRUd4QyxVQUZILEVBRWdCQyxZQUZoQjtBQUlEOztBQUVELFdBQUswUSxXQUFMLENBQWlCN1YsS0FBakI7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBSzBDLFFBQUwsQ0FBYztBQUFFMUMsYUFBSyxFQUFMQTtBQUFGLE9BQWQ7QUFDQSxXQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCeUMsR0FBM0IsQ0FBK0IzQyxLQUEvQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1vRyxNQUFNLEdBQUcsQ0FDYixLQUFLaEcsS0FBTCxDQUFXSixLQUFYLENBQWlCLEtBQUtJLEtBQUwsQ0FBV3NILGFBQTVCLEVBQTJDM0QsR0FEOUIsRUFFYixLQUFLM0QsS0FBTCxDQUFXSixLQUFYLENBQWlCLEtBQUtJLEtBQUwsQ0FBV3NILGFBQTVCLEVBQTJDMUQsS0FGOUIsRUFHYixLQUFLNUQsS0FBTCxDQUFXSixLQUFYLENBQWlCLEtBQUtJLEtBQUwsQ0FBV3NILGFBQTVCLEVBQTJDekQsTUFIOUIsRUFJYixLQUFLN0QsS0FBTCxDQUFXSixLQUFYLENBQWlCLEtBQUtJLEtBQUwsQ0FBV3NILGFBQTVCLEVBQTJDeEQsSUFKOUIsQ0FBZixDQURxQixDQU9yQjs7QUFDQSxhQUFPa0MsTUFBTSxDQUFDQyxLQUFQLENBQWEsVUFBQXJHLEtBQUs7QUFBQSxlQUFJQSxLQUFLLElBQUlvRyxNQUFNLENBQUMsQ0FBRCxDQUFuQjtBQUFBLE9BQWxCLENBQVA7QUFDRDs7O3dDQUVtQjtBQUFBOztBQUFBLFVBQ1ZuRyxPQURVLEdBQ0UsS0FBS0YsS0FEUCxDQUNWRSxPQURVO0FBR2xCb0MsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQiwrQkFBMUIsRUFBMkQsVUFBQ2QsQ0FBRCxFQUFPO0FBQ2hFLFlBQUksQ0FBQ0EsQ0FBQyxDQUFDZSxNQUFQLEVBQWUsT0FBTyxLQUFQO0FBQ2YsWUFBSWYsQ0FBQyxDQUFDZSxNQUFGLENBQVNDLEVBQVQsS0FBZ0J2QyxPQUFPLENBQUN1QyxFQUE1QixFQUFnQyxPQUFPLEtBQVA7O0FBRWhDLGNBQUksQ0FBQ3FULFdBQUwsQ0FBaUJyVSxDQUFDLENBQUNlLE1BQUYsQ0FBU3ZDLEtBQVQsSUFBa0IsTUFBSSxDQUFDeUcsWUFBeEM7QUFDRCxPQUxEO0FBTUQ7Ozs7RUE3TDRCdkgsUzs7QUFnTS9Cc1ksZ0JBQWdCLENBQUM1VSxTQUFqQixHQUE2QjtBQUMzQjNDLFNBQU8sRUFBRTRDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREMsQ0FBN0I7QUFJZXlVLCtFQUFmLEU7Ozs7Ozs7Ozs7O0FDaE5BLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0lBQ1F4VSxNLEdBQVdqRSxFQUFFLENBQUNFLE8sQ0FBZCtELE07QUFFRCxJQUFNcEQsYUFBYSxHQUFHYixFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTZCO0FBQ3hEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMsMkRBQUQ7QUFBaUIsYUFBTyxFQUFFL0M7QUFBMUIsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUHVELENBQTdCLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDs7QUFDQTtBQUNBO0lBR0VwRSxTLEdBQ0VILEVBQUUsQ0FBQ0UsTyxDQURMQyxTO0lBSUFVLGEsR0FDRWIsRUFBRSxDQUFDTyxVLENBRExNLGE7O0lBR0lpWSxlOzs7OztBQUNKLDJCQUFZOVgsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtLLEtBQUwsR0FBYTtBQUNYSixXQUFLLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxHQUF0QjtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7Z0NBRVc0VyxRLEVBQVU7QUFDcEIsV0FBS3JVLFFBQUwsQ0FBZTtBQUNiMUMsYUFBSyxFQUFFK1c7QUFETSxPQUFmO0FBR0EsV0FBS2hYLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkJ5QyxHQUEzQixDQUFnQ29VLFFBQWhDO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLG9CQUFDLGFBQUQ7QUFDRSxpQkFBUyxFQUFDLHFCQURaO0FBRUUsZUFBTyxFQUFFLEtBQUszVyxLQUFMLENBQVdKLEtBRnRCO0FBR0UsYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCQyxLQUhuQztBQUlFLGdCQUFRLEVBQUUsa0JBQUMzQixLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDOFgsV0FBTCxDQUFrQjlYLEtBQWxCLENBQVg7QUFBQTtBQUpaLFFBREYsRUFRSSxLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQnFXLFdBQTFCLGlCQUNFO0FBQ0UsaUJBQVMsRUFBQywrQkFEWjtBQUVFLCtCQUF1QixFQUFFO0FBQUVDLGdCQUFNLEVBQUUsS0FBS2pZLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCcVc7QUFBcEM7QUFGM0IsUUFUTixDQURGO0FBaUJEOzs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDVjlYLE9BRFUsR0FDRSxLQUFLRixLQURQLENBQ1ZFLE9BRFU7QUFFbEJvQyxjQUFRLENBQUNDLGdCQUFULENBQTJCLCtCQUEzQixFQUE0RCxVQUFDZCxDQUFELEVBQU87QUFDakUsWUFBSyxDQUFDQSxDQUFDLENBQUNlLE1BQVIsRUFBaUIsT0FBTyxLQUFQO0FBQ2pCLFlBQUtmLENBQUMsQ0FBQ2UsTUFBRixDQUFTQyxFQUFULEtBQWdCdkMsT0FBTyxDQUFDdUMsRUFBN0IsRUFBa0MsT0FBTyxLQUFQOztBQUNsQyxjQUFJLENBQUNzVixXQUFMLENBQWtCdFcsQ0FBQyxDQUFDZSxNQUFGLENBQVN2QyxLQUEzQjtBQUNELE9BSkQ7QUFLRDs7OztFQTFDMkJkLFM7O0FBNkM5QjJZLGVBQWUsQ0FBQ2pWLFNBQWhCLEdBQTRCO0FBQzFCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEQSxDQUE1QjtBQUllOFUsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7SUFFUTdVLE0sR0FBV2pFLEVBQUUsQ0FBQ0UsTyxDQUFkK0QsTTtBQUVELElBQU1rUSxlQUFlLEdBQUduVSxFQUFFLENBQUNtRSxTQUFILENBQWFDLE9BQWIsQ0FBcUJDLE1BQXJCLENBQTRCO0FBQ3pEQyxlQUFhLEVBQUUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxRQUFNcEQsT0FBTyxHQUFHLElBQWhCO0FBQ0ErQyxVQUFNLGVBQ0osb0JBQUMsNkRBQUQ7QUFBbUIsYUFBTyxFQUFFL0M7QUFBNUIsTUFESSxFQUVKQSxPQUFPLENBQUNxRCxTQUFSLENBQWtCLENBQWxCLENBRkksQ0FBTjtBQUlEO0FBUHdELENBQTVCLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7O0FBQ0E7QUFDQTtBQUNBO0lBRVF4RSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO2tCQUlKQyxFQUFFLENBQUNFLE87SUFGTEMsUyxlQUFBQSxTO0lBQ0FDLFEsZUFBQUEsUTtJQUlBOFksYSxHQUNFbFosRUFBRSxDQUFDTyxVLENBREwyWSxhOztJQUdJL0gsaUI7Ozs7O0FBQ0osNkJBQVluUSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsR0FBdEIsRUFBWjtBQUNBLFFBQUlrUSxhQUFhLEdBQUc7QUFDbEI2SCxnQkFBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FETTtBQUVsQkMsdUJBQWlCLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZEO0FBR2xCQyxvQkFBYyxFQUFFLEdBSEU7QUFJbEJDLG9CQUFjLEVBQUUsTUFKRTtBQUtsQkMsa0JBQVksRUFBRTtBQUNaQyxjQUFNLEVBQUU7QUFDTm5QLGdCQUFNLEVBQUUsSUFERjtBQUVORCxnQkFBTSxFQUFFLElBRkY7QUFHTkQsaUJBQU8sRUFBRTtBQUhILFNBREk7QUFNWkUsY0FBTSxFQUFFLEVBTkk7QUFPWkQsY0FBTSxFQUFFLEVBUEk7QUFRWkQsZUFBTyxFQUFFO0FBUkcsT0FMSTtBQWVsQnNQLHlCQUFtQixFQUFFO0FBQ25CRCxjQUFNLEVBQUU7QUFDTm5QLGdCQUFNLEVBQUUsSUFERjtBQUVORCxnQkFBTSxFQUFFLElBRkY7QUFHTkQsaUJBQU8sRUFBRTtBQUhILFNBRFc7QUFNbkJFLGNBQU0sRUFBRSxHQU5XO0FBT25CRCxjQUFNLEVBQUUsR0FQVztBQVFuQkQsZUFBTyxFQUFFO0FBUlUsT0FmSDtBQXlCbEJ1UCw0QkFBc0IsRUFBRTtBQUN0QnJQLGNBQU0sRUFBRSxDQURjO0FBRXRCRCxjQUFNLEVBQUUsQ0FGYztBQUd0QkQsZUFBTyxFQUFFO0FBSGE7QUF6Qk4sS0FBcEI7O0FBZ0NBLFFBQUssQ0FBQ2xKLEtBQU4sRUFBYztBQUNaQSxXQUFLLEdBQUcsTUFBSzBZLGFBQUwsRUFBUjtBQUNEOztBQUVELFFBQUszWSxLQUFLLENBQUNFLE9BQU4sQ0FBY3lCLE1BQWQsQ0FBcUI4TyxXQUFyQixDQUFpQ3hJLE1BQXRDLEVBQStDO0FBQzdDLFVBQU13SSxXQUFXLEdBQUdyRixJQUFJLENBQUNDLEtBQUwsQ0FBV3JMLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQWhDLENBQXBCOztBQUNBLFVBQUtBLFdBQVcsQ0FBQ21JLGdCQUFqQixFQUFvQztBQUNsQ3RJLHFCQUFhLEdBQUcsTUFBS3VJLGVBQUwsRUFBaEI7QUFDRDtBQUNGLEtBNUNnQixDQThDakI7OztBQUNBNVksU0FBSyxDQUFDNlksVUFBTixHQUFtQjdZLEtBQUssQ0FBQzZZLFVBQU4sSUFBb0J4SSxhQUFhLENBQUNtSSxtQkFBckQ7QUFDQXhZLFNBQUssQ0FBQzZZLFVBQU4sQ0FBaUJOLE1BQWpCLEdBQTBCdlksS0FBSyxDQUFDNlksVUFBTixDQUFpQk4sTUFBakIsSUFBMkJsSSxhQUFhLENBQUNtSSxtQkFBZCxDQUFrQ0QsTUFBdkY7QUFFQSxVQUFLaEksYUFBTCxHQUFxQnhRLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQXJCLHFCQUNoQkgsYUFEZ0IsTUFFaEJsRixJQUFJLENBQUNDLEtBQUwsQ0FBV3JMLEtBQUssQ0FBQ0UsT0FBTixDQUFjeUIsTUFBZCxDQUFxQjhPLFdBQWhDLENBRmdCLElBR2pCSCxhQUhKLENBbERpQixDQXVEakI7O0FBQ0EsVUFBS0UsYUFBTCxDQUFtQmlJLG1CQUFuQixDQUF1Q0QsTUFBdkMsR0FBZ0QsTUFBS2hJLGFBQUwsQ0FBbUJpSSxtQkFBbkIsQ0FBdUNELE1BQXZDLElBQzlDbEksYUFBYSxDQUFDbUksbUJBQWQsQ0FBa0NELE1BRHBDO0FBR0EsVUFBS25ZLEtBQUwsR0FBYTtBQUNYc0gsbUJBQWEsRUFBRSxTQURKO0FBRVhvUixjQUFRLEVBQUU5WSxLQUFLLENBQUM4WSxRQUZMO0FBR1hELGdCQUFVLEVBQUU3WSxLQUFLLENBQUM2WSxVQUhQO0FBSVhFLG1CQUFhLEVBQUUvWSxLQUFLLENBQUMrWSxhQUpWO0FBS1hDLGdCQUFVLEVBQUVoWixLQUFLLENBQUNnWixVQUxQO0FBTVhDLG1CQUFhLEVBQUVqWixLQUFLLENBQUNpWixhQU5WO0FBT1hDLFVBQUksRUFBRTtBQVBLLEtBQWI7QUFVQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQnRVLElBQXRCLCtCQUF4QjtBQUNBLFVBQUt1VSxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QnZVLElBQXpCLCtCQUEzQjtBQUNBLFVBQUt3VSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0J4VSxJQUFwQiwrQkFBdEI7QUFDQSxVQUFLeVUsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0J6VSxJQUF0QiwrQkFBeEI7QUFDQSxVQUFLMFUsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUIxVSxJQUF6QiwrQkFBM0I7QUFDQSxVQUFLUSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JSLElBQWxCLCtCQUFwQjtBQTFFaUI7QUEyRWxCOzs7O29DQUUwQjtBQUFBLFVBQVoyVSxJQUFZLHVFQUFMLEVBQUs7QUFDekIsVUFBTUMsVUFBVSxHQUFHO0FBQ2pCL1IscUJBQWEsRUFBRSxTQURFO0FBRWpCb1IsZ0JBQVEsRUFBRTtBQUNSUCxnQkFBTSxFQUFFO0FBQ05uUCxrQkFBTSxFQUFFLElBREY7QUFFTkQsa0JBQU0sRUFBRSxJQUZGO0FBR05ELG1CQUFPLEVBQUU7QUFISCxXQURBO0FBTVJFLGdCQUFNLEVBQUUsRUFOQTtBQU9SRCxnQkFBTSxFQUFFLEVBUEE7QUFRUkQsaUJBQU8sRUFBRTtBQVJELFNBRk87QUFZakIyUCxrQkFBVSxFQUFFO0FBQ1ZOLGdCQUFNLEVBQUU7QUFDTm5QLGtCQUFNLEVBQUUsSUFERjtBQUVORCxrQkFBTSxFQUFFLElBRkY7QUFHTkQsbUJBQU8sRUFBRTtBQUhILFdBREU7QUFNVkUsZ0JBQU0sRUFBRSxFQU5FO0FBT1ZELGdCQUFNLEVBQUUsRUFQRTtBQVFWRCxpQkFBTyxFQUFFO0FBUkMsU0FaSztBQXNCakI2UCxxQkFBYSxFQUFFO0FBQ2IzUCxnQkFBTSxFQUFFLEVBREs7QUFFYkQsZ0JBQU0sRUFBRSxFQUZLO0FBR2JELGlCQUFPLEVBQUU7QUFISSxTQXRCRTtBQTJCakI4UCxrQkFBVSxFQUFFLE1BM0JLO0FBNEJqQkMscUJBQWEsRUFBRSxNQTVCRTtBQTZCakJDLFlBQUksRUFBRTtBQTdCVyxPQUFuQjs7QUErQkEsVUFBS00sSUFBSSxJQUFJQyxVQUFVLENBQUNELElBQUQsQ0FBdkIsRUFBZ0M7QUFDOUIsZUFBT0MsVUFBVSxDQUFDRCxJQUFELENBQWpCO0FBQ0Q7O0FBQ0QsYUFBT0MsVUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU87QUFDTHZCLGtCQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQURQO0FBRUxDLHlCQUFpQixFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGZDtBQUdMQyxzQkFBYyxFQUFFLE1BSFg7QUFJTEMsc0JBQWMsRUFBRSxNQUpYO0FBS0xDLG9CQUFZLEVBQUU7QUFDWkMsZ0JBQU0sRUFBRTtBQUNOblAsa0JBQU0sRUFBRSxJQURGO0FBRU5ELGtCQUFNLEVBQUUsSUFGRjtBQUdORCxtQkFBTyxFQUFFO0FBSEgsV0FESTtBQU1aRSxnQkFBTSxFQUFFLEVBTkk7QUFPWkQsZ0JBQU0sRUFBRSxFQVBJO0FBUVpELGlCQUFPLEVBQUU7QUFSRyxTQUxUO0FBZUxzUCwyQkFBbUIsRUFBRTtBQUNuQkQsZ0JBQU0sRUFBRTtBQUNOblAsa0JBQU0sRUFBRSxJQURGO0FBRU5ELGtCQUFNLEVBQUUsSUFGRjtBQUdORCxtQkFBTyxFQUFFO0FBSEgsV0FEVztBQU1uQkUsZ0JBQU0sRUFBRSxFQU5XO0FBT25CRCxnQkFBTSxFQUFFLEVBUFc7QUFRbkJELGlCQUFPLEVBQUU7QUFSVSxTQWZoQjtBQXlCTHVQLDhCQUFzQixFQUFFO0FBQ3RCclAsZ0JBQU0sRUFBRSxFQURjO0FBRXRCRCxnQkFBTSxFQUFFLEVBRmM7QUFHdEJELGlCQUFPLEVBQUU7QUFIYTtBQXpCbkIsT0FBUDtBQStCRDs7OzZCQUVRO0FBQ1AsMEJBQ0Usb0JBQUMsUUFBRCxRQUNHLEtBQUtuSixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQkMsS0FBMUIsaUJBQ0M7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0csS0FBSzVCLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCQyxLQUQ3QixDQUZKLGVBS0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLeVgsbUJBQUwsRUFESCxFQUVHLEtBQUtELGdCQUFMLEVBRkgsRUFHRyxLQUFLRSxjQUFMLEVBSEgsRUFJRyxLQUFLQyxnQkFBTCxFQUpILEVBS0csS0FBS0MsbUJBQUwsRUFMSCxDQUxGLENBREY7QUFlRDs7O2lDQUVZdlosSyxFQUFPO0FBQ2xCLFdBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkJ5QyxHQUEzQixtQkFDSyxLQUFLNUMsS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsRUFETCxNQUVLSCxLQUZMO0FBR0VrWixZQUFJLEVBQUUsQ0FBQyxLQUFLblosS0FBTCxDQUFXRSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsR0FBaUMrWTtBQUgxQztBQUtEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUNHcGEsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBREwsQ0FERixlQUlFLG9CQUFDLGFBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS3NCLEtBQUwsQ0FBVzRZLFVBRHBCO0FBRUUsZUFBTyxFQUFFLENBQ1A7QUFBRWhaLGVBQUssRUFBRSxNQUFUO0FBQWlCMkIsZUFBSyxFQUFFN0MsRUFBRSxDQUFFLE1BQUYsRUFBVSxNQUFWO0FBQTFCLFNBRE8sRUFFUDtBQUFFa0IsZUFBSyxFQUFFLEdBQVQ7QUFBYzJCLGVBQUssRUFBRTtBQUFyQixTQUZPLEVBR1A7QUFBRTNCLGVBQUssRUFBRSxHQUFUO0FBQWMyQixlQUFLLEVBQUU7QUFBckIsU0FITyxFQUlQO0FBQUUzQixlQUFLLEVBQUUsR0FBVDtBQUFjMkIsZUFBSyxFQUFFO0FBQXJCLFNBSk8sRUFLUDtBQUFFM0IsZUFBSyxFQUFFLEdBQVQ7QUFBYzJCLGVBQUssRUFBRTtBQUFyQixTQUxPLEVBTVA7QUFBRTNCLGVBQUssRUFBRSxHQUFUO0FBQWMyQixlQUFLLEVBQUU7QUFBckIsU0FOTyxFQU9QO0FBQUUzQixlQUFLLEVBQUUsR0FBVDtBQUFjMkIsZUFBSyxFQUFFO0FBQXJCLFNBUE8sRUFRUDtBQUFFM0IsZUFBSyxFQUFFLEdBQVQ7QUFBYzJCLGVBQUssRUFBRTtBQUFyQixTQVJPLEVBU1A7QUFBRTNCLGVBQUssRUFBRSxHQUFUO0FBQWMyQixlQUFLLEVBQUU7QUFBckIsU0FUTyxFQVVQO0FBQUUzQixlQUFLLEVBQUUsR0FBVDtBQUFjMkIsZUFBSyxFQUFFO0FBQXJCLFNBVk8sQ0FGWDtBQWNFLGdCQUFRLEVBQUUsa0JBQUNxWCxVQUFELEVBQWdCO0FBQ3hCLGdCQUFJLENBQUN0VyxRQUFMLENBQWM7QUFBRXNXLHNCQUFVLEVBQVZBO0FBQUYsV0FBZDs7QUFDQSxnQkFBSSxDQUFDM1QsWUFBTCxDQUFrQjtBQUFFMlQsc0JBQVUsRUFBVkE7QUFBRixXQUFsQjs7QUFDQSxjQUFLQSxVQUFVLEtBQUssTUFBZixJQUF5QixNQUFJLENBQUNqWixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQmdZLGdCQUF4RCxFQUEyRTtBQUN6RTNhLGNBQUUsQ0FBQ21FLFNBQUgsQ0FBYTROLFNBQWIsQ0FBdUI2SSxPQUF2QjtBQUNEO0FBQ0Y7QUFwQkgsUUFKRixDQURGO0FBNkJEOzs7MENBRXFCO0FBQUE7O0FBQ3BCLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUNHN2EsRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLENBREwsQ0FERixlQUlFLG9CQUFDLGFBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS3NCLEtBQUwsQ0FBVzZZLGFBRHBCO0FBRUUsZUFBTyxFQUFFLENBQ1A7QUFBRWpaLGVBQUssRUFBRSxNQUFUO0FBQWlCMkIsZUFBSyxFQUFFN0MsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFUO0FBQTFCLFNBRE8sRUFFUDtBQUFFa0IsZUFBSyxFQUFFLFlBQVQ7QUFBdUIyQixlQUFLLEVBQUU3QyxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWY7QUFBaEMsU0FGTyxFQUdQO0FBQUVrQixlQUFLLEVBQUUsV0FBVDtBQUFzQjJCLGVBQUssRUFBRTdDLEVBQUUsQ0FBQyxXQUFELEVBQWMsTUFBZDtBQUEvQixTQUhPLEVBSVA7QUFBRWtCLGVBQUssRUFBRSxXQUFUO0FBQXNCMkIsZUFBSyxFQUFFN0MsRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkO0FBQS9CLFNBSk8sQ0FGWDtBQVFFLGdCQUFRLEVBQUUsa0JBQUNtYSxhQUFELEVBQW1CO0FBQzNCLGdCQUFJLENBQUN2VyxRQUFMLENBQWM7QUFBRXVXLHlCQUFhLEVBQWJBO0FBQUYsV0FBZDs7QUFDQSxnQkFBSSxDQUFDNVQsWUFBTCxDQUFrQjtBQUFFNFQseUJBQWEsRUFBYkE7QUFBRixXQUFsQjtBQUNEO0FBWEgsUUFKRixDQURGO0FBb0JEOzs7cUNBRWdCO0FBQUE7O0FBQUEsVUFDVEgsUUFEUyxHQUNJLEtBQUsxWSxLQURULENBQ1QwWSxRQURTO0FBQUEsVUFFUHBSLGFBRk8sR0FFVyxLQUFLdEgsS0FGaEIsQ0FFUHNILGFBRk87QUFBQSxnQ0FHc0IsS0FBSzZJLGFBSDNCO0FBQUEsVUFHUCtILFlBSE8sdUJBR1BBLFlBSE87QUFBQSxVQUdPSixVQUhQLHVCQUdPQSxVQUhQOztBQUlmLFVBQUssQ0FBQ1ksUUFBTixFQUFpQjtBQUNmQSxnQkFBUSxHQUFHLEtBQUtKLGFBQUwsQ0FBbUIsVUFBbkIsQ0FBWDtBQUNEOztBQUNELDBCQUNFLG9CQUFDLGdFQUFEO0FBQ0UsaUJBQVMsRUFBQyxXQURaO0FBRUUsYUFBSyxFQUFFNVosRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLENBRlg7QUFHRSxtQkFBU3daLFlBQVksQ0FBQzVRLGFBQUQsQ0FIdkI7QUFJRSxhQUFLLEVBQUVvUixRQUFRLENBQUNwUixhQUFELENBSmpCO0FBS0UsWUFBSSxFQUFFb1IsUUFBUSxDQUFDUCxNQUFULENBQWdCN1EsYUFBaEIsTUFBbUMsSUFBbkMsR0FBMEMsR0FBMUMsR0FBZ0QsQ0FMeEQ7QUFNRSxhQUFLLEVBQUV3USxVQU5UO0FBT0Usa0JBQVUsRUFBRVksUUFBUSxDQUFDUCxNQUFULENBQWdCN1EsYUFBaEIsQ0FQZDtBQVFFLHFCQUFhLE1BUmY7QUFTRSxnQkFBUSxFQUFFLGtCQUFDekYsR0FBRCxFQUFTO0FBQ2pCLGNBQU1qQyxLQUFLLEdBQUc4WSxRQUFkO0FBQ0E5WSxlQUFLLENBQUMwSCxhQUFELENBQUwsR0FBdUJ6RixHQUF2Qjs7QUFDQSxnQkFBSSxDQUFDUyxRQUFMLENBQWM7QUFBRW9XLG9CQUFRLEVBQUU5WTtBQUFaLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ3FGLFlBQUwsQ0FBa0I7QUFBRXlULG9CQUFRLEVBQUU5WTtBQUFaLFdBQWxCO0FBQ0QsU0FkSDtBQWVFLG9CQUFZLEVBQUUsc0JBQUNpQyxHQUFELEVBQVM7QUFDckIsY0FBTWpDLEtBQUssR0FBRzhZLFFBQWQ7QUFDQTlZLGVBQUssQ0FBQ3VZLE1BQU4sQ0FBYTdRLGFBQWIsSUFBOEJ6RixHQUE5Qjs7QUFDQSxnQkFBSSxDQUFDUyxRQUFMLENBQWM7QUFBRW9XLG9CQUFRLEVBQUU5WTtBQUFaLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ3FGLFlBQUwsQ0FBa0I7QUFBRXlULG9CQUFRLEVBQUU5WTtBQUFaLFdBQWxCO0FBQ0QsU0FwQkg7QUFxQkUsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsY0FBTUEsS0FBSyxHQUFHOFksUUFBZDtBQUNBOVksZUFBSyxDQUFDdVksTUFBTixDQUFhN1EsYUFBYixJQUE4QjRRLFlBQVksQ0FBQ0MsTUFBYixDQUFvQjdRLGFBQXBCLENBQTlCO0FBQ0ExSCxlQUFLLENBQUMwSCxhQUFELENBQUwsR0FBdUI0USxZQUFZLENBQUM1USxhQUFELENBQW5DOztBQUNBLGdCQUFJLENBQUNoRixRQUFMLENBQWM7QUFBRW9XLG9CQUFRLEVBQUU5WTtBQUFaLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ3FGLFlBQUwsQ0FBa0I7QUFBRXlULG9CQUFRLEVBQUU5WTtBQUFaLFdBQWxCOztBQUNBLGNBQUssTUFBSSxDQUFDRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQmdZLGdCQUEvQixFQUFrRDtBQUNoRDNhLGNBQUUsQ0FBQ21FLFNBQUgsQ0FBYTROLFNBQWIsQ0FBdUI2SSxPQUF2QjtBQUNEO0FBQ0YsU0E5Qkg7QUErQkUsdUJBQWUsRUFBRSx5QkFBQ2pTLGFBQUQ7QUFBQSxpQkFBbUIsTUFBSSxDQUFDaEYsUUFBTCxDQUFjO0FBQUVnRix5QkFBYSxFQUFiQTtBQUFGLFdBQWQsQ0FBbkI7QUFBQTtBQS9CbkIsUUFERjtBQW1DRDs7O3VDQUVrQjtBQUFBOztBQUFBLGlDQUNrQyxLQUFLNkksYUFEdkM7QUFBQSxVQUNUaUksbUJBRFMsd0JBQ1RBLG1CQURTO0FBQUEsVUFDWUwsaUJBRFosd0JBQ1lBLGlCQURaO0FBQUEsVUFFVHpRLGFBRlMsR0FFUyxLQUFLdEgsS0FGZCxDQUVUc0gsYUFGUztBQUFBLFVBR1htUixVQUhXLEdBR0ksS0FBS3pZLEtBSFQsQ0FHWHlZLFVBSFc7O0FBSWpCLFVBQUssQ0FBQ0EsVUFBTixFQUFtQjtBQUNqQkEsa0JBQVUsR0FBRyxLQUFLSCxhQUFMLENBQW1CLFlBQW5CLENBQWI7QUFDRDs7QUFDRCwwQkFDRSxvQkFBQyxnRUFBRDtBQUNFLGlCQUFTLEVBQUMsYUFEWjtBQUVFLGFBQUssRUFBRTVaLEVBQUUsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBRlg7QUFHRSxZQUFJLEVBQUUrWixVQUFVLENBQUNOLE1BQVgsQ0FBa0I3USxhQUFsQixNQUFxQyxJQUFyQyxHQUE0QyxHQUE1QyxHQUFrRCxDQUgxRDtBQUlFLG1CQUFTOFEsbUJBQW1CLENBQUM5USxhQUFELENBSjlCO0FBS0UsYUFBSyxFQUFFbVIsVUFBVSxDQUFDblIsYUFBRCxDQUxuQjtBQU1FLGFBQUssRUFBRXlRLGlCQU5UO0FBT0Usa0JBQVUsRUFBRVUsVUFBVSxDQUFDTixNQUFYLENBQWtCN1EsYUFBbEIsQ0FQZDtBQVFFLFdBQUcsRUFBRW1SLFVBQVUsQ0FBQ04sTUFBWCxDQUFrQjdRLGFBQWxCLE1BQXFDLElBQXJDLEdBQTRDLENBQTVDLEdBQWdELEdBUnZEO0FBU0UsV0FBRyxFQUFFbVIsVUFBVSxDQUFDTixNQUFYLENBQWtCN1EsYUFBbEIsTUFBcUMsSUFBckMsR0FBNEMsR0FBNUMsR0FBa0QsQ0FUekQ7QUFVRSxxQkFBYSxNQVZmO0FBV0UsZ0JBQVEsRUFBRSxrQkFBQ3pGLEdBQUQsRUFBUztBQUNqQixjQUFNakMsS0FBSyxHQUFHNlksVUFBZDtBQUNBN1ksZUFBSyxDQUFDMEgsYUFBRCxDQUFMLEdBQXVCekYsR0FBdkI7O0FBQ0EsZ0JBQUksQ0FBQ1MsUUFBTCxDQUFjO0FBQUVtVyxzQkFBVSxFQUFFN1k7QUFBZCxXQUFkOztBQUNBLGdCQUFJLENBQUNxRixZQUFMLENBQWtCO0FBQUV3VCxzQkFBVSxFQUFFN1k7QUFBZCxXQUFsQjtBQUNELFNBaEJIO0FBaUJFLGVBQU8sRUFBRSxtQkFBTTtBQUNiLGNBQU1BLEtBQUssR0FBRzZZLFVBQWQ7QUFDQTdZLGVBQUssQ0FBQ3VZLE1BQU4sR0FBZXZZLEtBQUssQ0FBQ3VZLE1BQU4sSUFBZ0JDLG1CQUFtQixDQUFDRCxNQUFuRDtBQUNBdlksZUFBSyxDQUFDdVksTUFBTixDQUFhN1EsYUFBYixJQUE4QjhRLG1CQUFtQixDQUFDRCxNQUFwQixDQUEyQjdRLGFBQTNCLENBQTlCO0FBQ0ExSCxlQUFLLENBQUMwSCxhQUFELENBQUwsR0FBdUI4USxtQkFBbUIsQ0FBQzlRLGFBQUQsQ0FBMUM7O0FBQ0EsZ0JBQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFbVcsc0JBQVUsRUFBRTdZO0FBQWQsV0FBZDs7QUFDQSxnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQjtBQUFFd1Qsc0JBQVUsRUFBRTdZO0FBQWQsV0FBbEI7O0FBQ0EsY0FBSyxNQUFJLENBQUNELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnlCLE1BQW5CLENBQTBCZ1ksZ0JBQS9CLEVBQWtEO0FBQ2hEM2EsY0FBRSxDQUFDbUUsU0FBSCxDQUFhNE4sU0FBYixDQUF1QjZJLE9BQXZCO0FBQ0Q7QUFDRixTQTNCSDtBQTRCRSxvQkFBWSxFQUFFLHNCQUFDMVgsR0FBRCxFQUFTO0FBQ3JCLGNBQU1qQyxLQUFLLEdBQUc2WSxVQUFkO0FBQ0E3WSxlQUFLLENBQUN1WSxNQUFOLENBQWE3USxhQUFiLElBQThCekYsR0FBOUI7O0FBQ0EsZ0JBQUksQ0FBQ1MsUUFBTCxDQUFjO0FBQUVtVyxzQkFBVSxFQUFFN1k7QUFBZCxXQUFkOztBQUNBLGdCQUFJLENBQUNxRixZQUFMLENBQWtCO0FBQUV3VCxzQkFBVSxFQUFFN1k7QUFBZCxXQUFsQjtBQUNELFNBakNIO0FBa0NFLHVCQUFlLEVBQUUseUJBQUMwSCxhQUFEO0FBQUEsaUJBQW1CLE1BQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFZ0YseUJBQWEsRUFBYkE7QUFBRixXQUFkLENBQW5CO0FBQUE7QUFsQ25CLFFBREY7QUFzQ0Q7OzswQ0FFcUI7QUFBQTs7QUFBQSxVQUNaK1Esc0JBRFksR0FDZSxLQUFLbEksYUFEcEIsQ0FDWmtJLHNCQURZO0FBQUEsVUFFWi9RLGFBRlksR0FFTSxLQUFLdEgsS0FGWCxDQUVac0gsYUFGWTtBQUFBLFVBR2RxUixhQUhjLEdBR0ksS0FBSzNZLEtBSFQsQ0FHZDJZLGFBSGM7O0FBSXBCLFVBQUssQ0FBQ0EsYUFBTixFQUFzQjtBQUNwQkEscUJBQWEsR0FBRyxLQUFLTCxhQUFMLENBQW1CLGVBQW5CLENBQWhCO0FBQ0Q7O0FBQ0QsMEJBQ0Usb0JBQUMsZ0VBQUQ7QUFDRSxpQkFBUyxFQUFDLGdCQURaO0FBRUUsYUFBSyxFQUFFNVosRUFBRSxDQUFDLGdCQUFELEVBQW1CLE1BQW5CLENBRlg7QUFHRSxZQUFJLEVBQUUsR0FIUjtBQUlFLG1CQUFTMlosc0JBQXNCLENBQUMvUSxhQUFELENBSmpDO0FBS0UsYUFBSyxFQUFFcVIsYUFBYSxJQUFJQSxhQUFhLENBQUNyUixhQUFELENBQTlCLEdBQWdEcVIsYUFBYSxDQUFDclIsYUFBRCxDQUE3RCxHQUErRSxFQUx4RjtBQU1FLFdBQUcsRUFBRSxFQU5QO0FBT0UsV0FBRyxFQUFFLENBQUMsQ0FQUjtBQVFFLGFBQUssRUFBRSxDQUFDLElBQUQsQ0FSVDtBQVNFLHFCQUFhLE1BVGY7QUFVRSxnQkFBUSxFQUFFLGtCQUFDekYsR0FBRCxFQUFTO0FBQ2pCLGNBQU1qQyxLQUFLLEdBQUcrWSxhQUFkO0FBQ0EvWSxlQUFLLENBQUMwSCxhQUFELENBQUwsR0FBdUJ6RixHQUF2Qjs7QUFDQSxnQkFBSSxDQUFDUyxRQUFMLENBQWM7QUFBRXFXLHlCQUFhLEVBQUUvWTtBQUFqQixXQUFkOztBQUNBLGdCQUFJLENBQUNxRixZQUFMLENBQWtCO0FBQUUwVCx5QkFBYSxFQUFFL1k7QUFBakIsV0FBbEI7QUFDRCxTQWZIO0FBZ0JFLGVBQU8sRUFBRSxtQkFBTTtBQUNiLGNBQU1BLEtBQUssR0FBRytZLGFBQWQ7QUFDQS9ZLGVBQUssQ0FBQzBILGFBQUQsQ0FBTCxHQUF1QitRLHNCQUFzQixDQUFDL1EsYUFBRCxDQUE3Qzs7QUFDQSxnQkFBSSxDQUFDaEYsUUFBTCxDQUFjO0FBQUVxVyx5QkFBYSxFQUFFL1k7QUFBakIsV0FBZDs7QUFDQSxnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQjtBQUFFMFQseUJBQWEsRUFBRS9ZO0FBQWpCLFdBQWxCOztBQUNBLGNBQUssTUFBSSxDQUFDRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQmdZLGdCQUEvQixFQUFrRDtBQUNoRDNhLGNBQUUsQ0FBQ21FLFNBQUgsQ0FBYTROLFNBQWIsQ0FBdUI2SSxPQUF2QjtBQUNEO0FBQ0YsU0F4Qkg7QUF5QkUsdUJBQWUsRUFBRSx5QkFBQ2pTLGFBQUQ7QUFBQSxpQkFBbUIsTUFBSSxDQUFDaEYsUUFBTCxDQUFjO0FBQUVnRix5QkFBYSxFQUFiQTtBQUFGLFdBQWQsQ0FBbkI7QUFBQTtBQXpCbkIsUUFERjtBQTZCRDs7OztFQXRXNkJ4SSxTOztBQXlXaENnUixpQkFBaUIsQ0FBQ3ROLFNBQWxCLEdBQThCO0FBQzVCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERSxDQUE5QjtBQUllbU4sZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVhBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChmYWxzZSkgeyB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcywgUmVhY3RJczsgfSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSkoKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRlbGwgd2hldGhlciB0aGUgcmVjdCBpcyB2aXNpYmxlLCBnaXZlbiBhbiBvZmZzZXRcbi8vXG4vLyByZXR1cm46IGJvb2xlYW5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KSB7XG4gIHZhciBvZmZzZXREaXIgPSBvZmZzZXQuZGlyZWN0aW9uO1xuICB2YXIgb2Zmc2V0VmFsID0gb2Zmc2V0LnZhbHVlOyAvLyBSdWxlcyBmb3IgY2hlY2tpbmcgZGlmZmVyZW50IGtpbmQgb2Ygb2Zmc2V0cy4gSW4gZXhhbXBsZSBpZiB0aGUgZWxlbWVudCBpc1xuICAvLyA5MHB4IGJlbG93IHZpZXdwb3J0IGFuZCBvZmZzZXRUb3AgaXMgMTAwLCBpdCBpcyBjb25zaWRlcmVkIHZpc2libGUuXG5cbiAgc3dpdGNoIChvZmZzZXREaXIpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC50b3AgKyBvZmZzZXRWYWwgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICsgb2Zmc2V0VmFsIDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIG9mZnNldFZhbCA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wO1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtIG9mZnNldFZhbCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBWaXNpYmlsaXR5U2Vuc29yOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjdChyZWN0KSB7XG4gIGlmIChyZWN0LndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChyZWN0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbnZhciBWaXNpYmlsaXR5U2Vuc29yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaXNpYmlsaXR5U2Vuc29yLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXNpYmlsaXR5U2Vuc29yKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTZW5zb3IpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVmlzaWJpbGl0eVNlbnNvcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuY29udGFpbm1lbnQgfHwgd2luZG93O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIGRlbGF5LCB0aHJvdHRsZSkge1xuICAgICAgaWYgKCFfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICB2YXIgZnVuYztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLmNoZWNrKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhyb3R0bGUgPiAtMSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB0aHJvdHRsZSB8fCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIGRlbGF5IHx8IDApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGZuOiBmdW5jLFxuICAgICAgICBnZXRMYXN0VGltZW91dDogZnVuY3Rpb24gZ2V0TGFzdFRpbWVvdXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaW5mby5mbik7XG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2V2ZW50XSA9IGluZm87XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjayB8fCBfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbnRlcnZhbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoX3RoaXMuY2hlY2ssIF90aGlzLnByb3BzLmludGVydmFsRGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihfdGhpcy5nZXRDb250YWluZXIoKSwgXCJzY3JvbGxcIiwgX3RoaXMucHJvcHMuc2Nyb2xsRGVsYXksIF90aGlzLnByb3BzLnNjcm9sbFRocm90dGxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnJlc2l6ZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBfdGhpcy5wcm9wcy5yZXNpemVEZWxheSwgX3RoaXMucHJvcHMucmVzaXplVGhyb3R0bGUpO1xuICAgICAgfSAvLyBpZiBkb250IG5lZWQgZGVsYXllZCBjYWxsLCBjaGVjayBvbiBsb2FkICggYmVmb3JlIHRoZSBmaXJzdCBpbnRlcnZhbCBmaXJlcyApXG5cblxuICAgICAgIV90aGlzLnByb3BzLmRlbGF5ZWRDYWxsICYmIF90aGlzLmNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgZGVib3VuY2UgY2FsbGVyc1xuICAgICAgICBmb3IgKHZhciBkZWJvdW5jZUV2ZW50IGluIF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjay5oYXNPd25Qcm9wZXJ0eShkZWJvdW5jZUV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGRlYm91bmNlSW5mbyA9IF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VJbmZvLmdldExhc3RUaW1lb3V0KCkpO1xuICAgICAgICAgICAgZGVib3VuY2VJbmZvLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGRlYm91bmNlRXZlbnQsIGRlYm91bmNlSW5mby5mbik7XG4gICAgICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IG51bGw7XG5cbiAgICAgIGlmIChfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoX3RoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLm5vZGU7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciBjb250YWlubWVudFJlY3Q7IC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIHJlbmRlcmVkIHRvIG51bGwsIGRvbnQgdXBkYXRlIHZpc2liaWxpdHlcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJlY3QgPSBub3JtYWxpemVSZWN0KF90aGlzLnJvdW5kUmVjdERvd24oZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIHZhciBjb250YWlubWVudERPTVJlY3QgPSBfdGhpcy5wcm9wcy5jb250YWlubWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiBjb250YWlubWVudERPTVJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IGNvbnRhaW5tZW50RE9NUmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbTogY29udGFpbm1lbnRET01SZWN0LmJvdHRvbSxcbiAgICAgICAgICByaWdodDogY29udGFpbm1lbnRET01SZWN0LnJpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9IC8vIENoZWNrIGlmIHZpc2liaWxpdHkgaXMgd2FudGVkIHZpYSBvZmZzZXQ/XG5cblxuICAgICAgdmFyIG9mZnNldCA9IF90aGlzLnByb3BzLm9mZnNldCB8fCB7fTtcbiAgICAgIHZhciBoYXNWYWxpZE9mZnNldCA9IF90eXBlb2Yob2Zmc2V0KSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgaWYgKGhhc1ZhbGlkT2Zmc2V0KSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC50b3AgKz0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QubGVmdCArPSBvZmZzZXQubGVmdCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QuYm90dG9tIC09IG9mZnNldC5ib3R0b20gfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnJpZ2h0IC09IG9mZnNldC5yaWdodCB8fCAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaWJpbGl0eVJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgPj0gY29udGFpbm1lbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20sXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodFxuICAgICAgfTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3bmovcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvcHVsbC8xMTRcblxuICAgICAgdmFyIGhhc1NpemUgPSByZWN0LmhlaWdodCA+IDAgJiYgcmVjdC53aWR0aCA+IDA7XG4gICAgICB2YXIgaXNWaXNpYmxlID0gaGFzU2l6ZSAmJiB2aXNpYmlsaXR5UmVjdC50b3AgJiYgdmlzaWJpbGl0eVJlY3QubGVmdCAmJiB2aXNpYmlsaXR5UmVjdC5ib3R0b20gJiYgdmlzaWJpbGl0eVJlY3QucmlnaHQ7IC8vIGNoZWNrIGZvciBwYXJ0aWFsIHZpc2liaWxpdHlcblxuICAgICAgaWYgKGhhc1NpemUgJiYgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxWaXNpYmxlID0gcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+PSBjb250YWlubWVudFJlY3QudG9wICYmIHJlY3QubGVmdCA8PSBjb250YWlubWVudFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+PSBjb250YWlubWVudFJlY3QubGVmdDsgLy8gYWNjb3VudCBmb3IgcGFydGlhbCB2aXNpYmlsaXR5IG9uIGEgc2luZ2xlIGVkZ2VcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcGFydGlhbFZpc2libGUgPSB2aXNpYmlsaXR5UmVjdFtfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eV07XG4gICAgICAgIH0gLy8gaWYgd2UgaGF2ZSBtaW5pbXVtIHRvcCB2aXNpYmlsaXR5IHNldCBieSBwcm9wcywgbGV0cyBjaGVjaywgaWYgaXQgbWVldHMgdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAvLyBzbyBpZiBmb3IgaW5zdGFuY2UgZWxlbWVudCBpcyBhdCBsZWFzdCAyMDBweCBpbiB2aWV3cG9ydCwgdGhlbiBzaG93IGl0LlxuXG5cbiAgICAgICAgaXNWaXNpYmxlID0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgPyBwYXJ0aWFsVmlzaWJsZSAmJiByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tIC0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgOiBwYXJ0aWFsVmlzaWJsZTtcbiAgICAgIH0gLy8gRGVwcmVjYXRlZCBvcHRpb25zIGZvciBjYWxjdWxhdGluZyBvZmZzZXQuXG5cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQuZGlyZWN0aW9uID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvZmZzZXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW25vdGljZV0gb2Zmc2V0LmRpcmVjdGlvbiBhbmQgb2Zmc2V0LnZhbHVlIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBUaGV5IHN0aWxsIHdvcmsgZm9yIG5vdywgYnV0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBuZXcgc3ludGF4OiB7ICVzOiAlZCB9XCIsIG9mZnNldC5kaXJlY3Rpb24sIG9mZnNldC52YWx1ZSk7XG4gICAgICAgIGlzVmlzaWJsZSA9IF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKShvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlOyAvLyBub3RpZnkgdGhlIHBhcmVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSBfdGhpcy5wcm9wcy5vbkNoYW5nZShpc1Zpc2libGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTZW5zb3IsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIC8vIHJlLXJlZ2lzdGVyIG5vZGUgaW4gY29tcG9uZW50RGlkVXBkYXRlIGlmIGNoaWxkcmVuIGRpZmZzIFsjMTAzXVxuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgIXByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3VuZFJlY3REb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kUmVjdERvd24ocmVjdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLmZsb29yKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5mbG9vcihyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5mbG9vcihyZWN0LnJpZ2h0KVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdGhpcy5zdGF0ZS52aXNpYmlsaXR5UmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7XG59KHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcGFydGlhbFZpc2liaWxpdHk6IGZhbHNlLFxuICBtaW5Ub3BWYWx1ZTogMCxcbiAgc2Nyb2xsQ2hlY2s6IGZhbHNlLFxuICBzY3JvbGxEZWxheTogMjUwLFxuICBzY3JvbGxUaHJvdHRsZTogLTEsXG4gIHJlc2l6ZUNoZWNrOiBmYWxzZSxcbiAgcmVzaXplRGVsYXk6IDI1MCxcbiAgcmVzaXplVGhyb3R0bGU6IC0xLFxuICBpbnRlcnZhbENoZWNrOiB0cnVlLFxuICBpbnRlcnZhbERlbGF5OiAxMDAsXG4gIGRlbGF5ZWRDYWxsOiBmYWxzZSxcbiAgb2Zmc2V0OiB7fSxcbiAgY29udGFpbm1lbnQ6IG51bGwsXG4gIGNoaWxkcmVuOiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcInByb3BUeXBlc1wiLCB7XG4gIG9uQ2hhbmdlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmMsXG4gIGFjdGl2ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pXSksXG4gIGRlbGF5ZWRDYWxsOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIG9mZnNldDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIHRvcDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgbGVmdDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgYm90dG9tOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICByaWdodDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSksIC8vIGRlcHJlY2F0ZWQgb2Zmc2V0IHByb3BlcnR5XG4gIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIGRpcmVjdGlvbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAgIHZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KV0pLFxuICBzY3JvbGxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBzY3JvbGxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHNjcm9sbFRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcmVzaXplRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGludGVydmFsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGNvbnRhaW5tZW50OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5pbnN0YW5jZU9mKHdpbmRvdy5FbGVtZW50KSA6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYW55LFxuICBjaGlsZHJlbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZWxlbWVudCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jXSksXG4gIG1pblRvcFZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxufSk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29sb3JDb250cm9sIGZyb20gJy4uL2NvbW1vbi9Db2xvckNvbnRyb2wnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcbmNvbnN0IHtcbiAgTWVkaWFVcGxvYWRcbn0gPSB3cC5ibG9ja0VkaXRvclxuXG5jb25zdCB7XG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIFJhbmdlQ29udHJvbCxcbiAgRm9jYWxQb2ludFBpY2tlcixcbiAgRGFzaGljb24sXG4gIFRvZ2dsZUNvbnRyb2wsXG4gIFBsYWNlaG9sZGVyXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBCYWNrZ3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2NvbG9yJyxcbiAgICAgIGltYWdlVXJsOiB2YWx1ZS5pbWFnZVVybCB8fCAnJyxcbiAgICAgIGZvY3VzUG9pbnQ6IHZhbHVlLmZvY3VzUG9pbnQgfHwgeyB4OiAwLjUsIHk6IDAuNSB9LFxuICAgICAgY29sb3JWYWx1ZTogdmFsdWUuY29sb3JWYWx1ZSB8fCAnI2ZmZmZmZicsXG4gICAgICBvdmVybGF5Q29sb3JWYWx1ZTogdmFsdWUub3ZlcmxheUNvbG9yVmFsdWUgfHwgJycsXG4gICAgICBvdmVybGF5T3BhY2l0eTogdmFsdWUub3ZlcmxheU9wYWNpdHkgfHwgNTAsXG4gICAgICBmaXhlZDogdmFsdWUuZml4ZWQgfHwgZmFsc2UsXG4gICAgICB1c2VGZWF0dXJlZDogdmFsdWUudXNlRmVhdHVyZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydjb2xvcicsICdpbWFnZSddXG4gICAgY29uc3QgbGFiZWxzID0ge1xuICAgICAgY29sb3I6IF9fKCdDb2xvcicsICduZXZlJyksXG4gICAgICBpbWFnZTogX18oJ0ltYWdlJywgJ25ldmUnKVxuICAgIH1cbiAgICBjb25zdCBidXR0b25zID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcbiAgICAgIGJ1dHRvbnMucHVzaChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNQcmltYXJ5PXtzZWxmLnN0YXRlLnR5cGUgPT09IHR5cGV9XG4gICAgICAgICAgaXNEZWZhdWx0PXtzZWxmLnN0YXRlLnR5cGUgIT09IHR5cGV9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlU2V0dGluZyh7IHR5cGU6IHR5cGUgfSlcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsc1t0eXBlXX1cbiAgICAgICAgPC9CdXR0b24+KVxuICAgIH0pXG5cbiAgICByZXR1cm4gYnV0dG9uc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtLXRvcC10b29sYmFyJz5cbiAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPSduZXZlLWJhY2tncm91bmQtdHlwZS1jb250cm9sJz5cbiAgICAgICAgICAgIHt0aGlzLmdldEJ1dHRvbnMoKX1cbiAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtLWJvZHknPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09ICdjb2xvcicgJiZcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgPENvbG9yQ29udHJvbFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY29sb3JWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTZXR0aW5nKHsgY29sb3JWYWx1ZTogY29sb3JWYWx1ZSB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17dGhpcy5zdGF0ZS5jb2xvclZhbHVlfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyggJ0NvbG9yJywgJ25ldmUnICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25ldmUtY29sb3ItcHJldmlldydcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuY29sb3JWYWx1ZSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GcmFnbWVudD59XG4gICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gJ2ltYWdlJyAmJlxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnVXNlIEZlYXR1cmVkIEltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodXNlRmVhdHVyZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IHVzZUZlYXR1cmVkOiB1c2VGZWF0dXJlZCB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5pbWFnZVVybCA/XG4gICAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICBpY29uPSdmb3JtYXQtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICBsYWJlbD17dGhpcy5zdGF0ZS51c2VGZWF0dXJlZFxuICAgICAgICAgICAgICAgICAgICA/IF9fKCdGYWxsYmFjayBJbWFnZScsICduZXZlJylcbiAgICAgICAgICAgICAgICAgICAgOiBfXygnSW1hZ2UnLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7X18oJ1NlbGVjdCBmcm9tIHRoZSBNZWRpYSBMaWJyYXJ5IG9yIHVwbG9hZCBhIG5ldyBpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGltYWdlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IGltYWdlVXJsOiBpbWFnZURhdGEudXJsIH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlcz17WydpbWFnZSddfVxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNEZWZhdWx0IG9uQ2xpY2s9e29wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAge19fKCdBZGQgSW1hZ2UnLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPiA6XG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JlbW92ZS1pbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgaXNEZXN0cnVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaW1hZ2VVcmw6ICcnIH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPSdubycgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXNlRmVhdHVyZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9fKCdSZW1vdmUgRmFsbGJhY2sgSW1hZ2UnLCAnbmV2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgOiBfXygnUmVtb3ZlIEltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEZvY2FsUG9pbnRQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgdXJsPXt0aGlzLnN0YXRlLmltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb2N1c1BvaW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcGFyc2VGbG9hdCh2YWwueCkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHBhcnNlRmxvYXQodmFsLnkpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgZm9jdXNQb2ludDogbmV3UG9pbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD59XG4gICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdGaXhlZCBCYWNrZ3JvdW5kJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZpeGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZml4ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IGZpeGVkOiBmaXhlZCB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvckNvbnRyb2xcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXt0aGlzLnN0YXRlLm92ZXJsYXlDb2xvclZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3ZlcmxheUNvbG9yVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2V0dGluZyhcbiAgICAgICAgICAgICAgICAgICAgeyBvdmVybGF5Q29sb3JWYWx1ZTogb3ZlcmxheUNvbG9yVmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnT3ZlcmxheSBDb2xvcicsICduZXZlJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25ldmUtY29sb3ItcHJldmlldydcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUub3ZlcmxheUNvbG9yVmFsdWUgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnT3ZlcmxheSBPcGFjaXR5JywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vdmVybGF5T3BhY2l0eX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG92ZXJsYXlPcGFjaXR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyBvdmVybGF5T3BhY2l0eTogb3ZlcmxheU9wYWNpdHkgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG1pbj0nMCdcbiAgICAgICAgICAgICAgICBtYXg9JzEwMCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb250cm9sIH0gPSB0aGlzLnByb3BzXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVNldHRpbmcobmV3VmFsdWVzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdWYWx1ZXMpXG4gICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpLFxuICAgICAgLi4ubmV3VmFsdWVzXG4gICAgfSlcbiAgfVxufVxuXG5CYWNrZ3JvdW5kQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuXG5pbXBvcnQgQmFja2dyb3VuZENvbXBvbmVudCBmcm9tICcuL0JhY2tncm91bmRDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZENvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoe1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPEJhY2tncm91bmRDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSlcbiIsIi8qIGdsb2JhbCB3cCwgbG9kYXNoICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmFkaW9JY29ucyBmcm9tICcuLi9jb21tb24vUmFkaW9JY29ucy5qcydcbmltcG9ydCBTaXppbmdDb250cm9sIGZyb20gJy4uL2NvbW1vbi9TaXppbmcuanMnXG5pbXBvcnQgQ29sb3JDb250cm9sIGZyb20gJy4uL2NvbW1vbi9Db2xvckNvbnRyb2wnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBQYW5lbCwgUGFuZWxCb2R5LCBQYW5lbFJvdyB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBtYXBWYWx1ZXMgfSA9IGxvZGFzaFxuXG5jbGFzcyBCdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIGNvbnN0IGRlZmF1bHRzRnJvbUNvbnRyb2wgPSB7XG4gICAgICBib3JkZXJSYWRpdXM6IHtcbiAgICAgICAgdG9wOiAzLFxuICAgICAgICByaWdodDogMyxcbiAgICAgICAgYm90dG9tOiAzLFxuICAgICAgICBsZWZ0OiAzXG4gICAgICB9LFxuICAgICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgICAgdG9wOiAxLFxuICAgICAgICByaWdodDogMSxcbiAgICAgICAgYm90dG9tOiAxLFxuICAgICAgICBsZWZ0OiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgb2xkLCBub24tYXJyYXkgdmVyc2lvbiBvZiByYWRpdXMsIHdlIGNvbnZlcnQuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZS5ib3JkZXJSYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZS5ib3JkZXJSYWRpdXMgPSB7XG4gICAgICAgIHRvcDogdmFsdWUuYm9yZGVyUmFkaXVzLFxuICAgICAgICByaWdodDogdmFsdWUuYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3R0b206IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgbGVmdDogdmFsdWUuYm9yZGVyUmFkaXVzXG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgdGhlIG9sZCwgbm9uLWFycmF5IHZlcnNpb24gb2YgcmFkaXVzLCB3ZSBjb252ZXJ0LlxuICAgIGlmICh0eXBlb2YgdmFsdWUuYm9yZGVyV2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZS5ib3JkZXJXaWR0aCA9IHtcbiAgICAgICAgdG9wOiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgcmlnaHQ6IHZhbHVlLmJvcmRlcldpZHRoLFxuICAgICAgICBib3R0b206IHZhbHVlLmJvcmRlcldpZHRoLFxuICAgICAgICBsZWZ0OiB2YWx1ZS5ib3JkZXJXaWR0aFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZGVmYXVsdFZhbHMgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0VmFscyA/IHtcbiAgICAgIC4uLnByb3BzLmNvbnRyb2wucGFyYW1zLmRlZmF1bHRWYWxzLFxuICAgICAgLi4uZGVmYXVsdHNGcm9tQ29udHJvbFxuICAgIH0gOiBkZWZhdWx0c0Zyb21Db250cm9sXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHlwZTogdmFsdWUudHlwZSB8fCAnZmlsbGVkJyxcbiAgICAgIGJhY2tncm91bmQ6IHZhbHVlLmJhY2tncm91bmQgfHwgJycsXG4gICAgICBiYWNrZ3JvdW5kSG92ZXI6IHZhbHVlLmJhY2tncm91bmRIb3ZlciB8fCAnJyxcbiAgICAgIHRleHQ6IHZhbHVlLnRleHQgfHwgJycsXG4gICAgICB0ZXh0SG92ZXI6IHZhbHVlLnRleHRIb3ZlciB8fCAnJyxcbiAgICAgIGJvcmRlclJhZGl1czogdmFsdWUuYm9yZGVyUmFkaXVzIHx8IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyUmFkaXVzLFxuICAgICAgYm9yZGVyV2lkdGg6IHZhbHVlLmJvcmRlcldpZHRoIHx8IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGgsXG4gICAgICByYWRpdXNMaW5rZWQ6IGZhbHNlLFxuICAgICAgd2lkdGhMaW5rZWQ6IGZhbHNlXG4gICAgfVxuICAgIC8vIFNldCBsaW5raW5nLlxuICAgIHRoaXMuc3RhdGUucmFkaXVzTGlua2VkID0gdGhpcy5pc0xpbmtlZCh0aGlzLnN0YXRlLmJvcmRlclJhZGl1cylcbiAgICB0aGlzLnN0YXRlLndpZHRoTGlua2VkID0gdGhpcy5pc0xpbmtlZCh0aGlzLnN0YXRlLmJvcmRlcldpZHRoKVxuXG4gICAgLy8gdGhpcy51cGRhdGVWYWx1ZXModGhpcy5zdGF0ZSlcblxuICAgIHRoaXMucmVuZGVyQm9yZGVyQ29udHJvbHMgPSB0aGlzLnJlbmRlckJvcmRlckNvbnRyb2xzLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclR5cGVDb250cm9scyA9IHRoaXMucmVuZGVyVHlwZUNvbnRyb2xzLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlckNvbG9ycyA9IHRoaXMucmVuZGVyQ29sb3JzLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlckJvcmRlckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IHJhZGl1c09wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0b3AnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMudG9wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmlnaHQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMucmlnaHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdib3R0b20nLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMuYm90dG9tXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGVmdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlclJhZGl1cy5sZWZ0XG4gICAgICB9XG4gICAgXVxuICAgIGNvbnN0IHdpZHRoT3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RvcCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLnRvcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3JpZ2h0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyV2lkdGgucmlnaHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdib3R0b20nLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJXaWR0aC5ib3R0b21cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsZWZ0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyV2lkdGgubGVmdFxuICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntfXygnQm9yZGVyIFJhZGl1cycsICduZXZlJyl9PC9zcGFuPlxuICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgIG9wdGlvbnM9e3JhZGl1c09wdGlvbnN9XG4gICAgICAgICAgZGVmYXVsdHM9e3RoaXMuZGVmYXVsdFZhbHMuYm9yZGVyUmFkaXVzfVxuICAgICAgICAgIGxpbmtlZD17dGhpcy5zdGF0ZS5yYWRpdXNMaW5rZWR9XG4gICAgICAgICAgb25MaW5rZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXNMaW5rZWQ6ICF0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1ZhbFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmFkaXVzTGlua2VkKSB7XG4gICAgICAgICAgICAgIG5ld1ZhbCA9IG1hcFZhbHVlcyh0aGlzLnN0YXRlLmJvcmRlclJhZGl1cywgKCkgPT4gbnVtZXJpY1ZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3VmFsID0geyAuLi50aGlzLnN0YXRlLmJvcmRlclJhZGl1cywgW29wdGlvblR5cGVdOiBudW1lcmljVmFsdWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvcmRlclJhZGl1czogbmV3VmFsIH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGJvcmRlclJhZGl1czogbmV3VmFsIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9yZGVyUmFkaXVzOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJSYWRpdXM6IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyUmFkaXVzIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gJ291dGxpbmUnICYmXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e19fKCdCb3JkZXIgV2lkdGgnLCAnbmV2ZScpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxTaXppbmdDb250cm9sXG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3dpZHRoT3B0aW9uc31cbiAgICAgICAgICAgICAgZGVmYXVsdHM9e3RoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGh9XG4gICAgICAgICAgICAgIGxpbmtlZD17dGhpcy5zdGF0ZS53aWR0aExpbmtlZH1cbiAgICAgICAgICAgICAgb25MaW5rZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aExpbmtlZDogIXRoaXMuc3RhdGUud2lkdGhMaW5rZWQgfSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uVHlwZSwgbnVtZXJpY1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLndpZHRoTGlua2VkKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWwgPSBtYXBWYWx1ZXModGhpcy5zdGF0ZS5ib3JkZXJXaWR0aCwgKCkgPT4gbnVtZXJpY1ZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWwgPSB7IC4uLnRoaXMuc3RhdGUuYm9yZGVyV2lkdGgsIFtvcHRpb25UeXBlXTogbnVtZXJpY1ZhbHVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvcmRlcldpZHRoOiBuZXdWYWwgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGJvcmRlcldpZHRoOiBuZXdWYWwgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJXaWR0aDogdGhpcy5kZWZhdWx0VmFscy5ib3JkZXJXaWR0aCB9KVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgYm9yZGVyV2lkdGg6IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGggfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GcmFnbWVudD59XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIG9sZEJvcmRlcigpIHtcbiAgfVxuXG4gIHJlbmRlckNvbG9ycygpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIG5vcm1hbDoge1xuICAgICAgICBsYWJlbDogX18oJ05vcm1hbCcsICduZXZlJyksXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgIHRleHQ6IHRoaXMuc3RhdGUudHlwZSA9PT0gJ2ZpbGwnID8gX18oJ1RleHQnLCAnbmV2ZScpIDogX18oJ1RleHQgYW5kIEJvcmRlcicsICduZXZlJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhvdmVyOiB7XG4gICAgICAgIGxhYmVsOiBfXygnSG92ZXInLCAnbmV2ZScpLFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgIGJhY2tncm91bmRIb3ZlcjogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgIHRleHRIb3ZlcjogdGhpcy5zdGF0ZS50eXBlID09PSAnZmlsbCcgPyBfXygnVGV4dCcsICduZXZlJykgOiBfXygnVGV4dCBhbmQgQm9yZGVyJywgJ25ldmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIGlmICh0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLm5vX2hvdmVyKSB7XG4gICAgICBkZWxldGUgc2V0dGluZ3MuaG92ZXJcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbD5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzKS5tYXAoKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5ub19ob3ZlciA/ICcnIDogc2V0dGluZ3NbdHlwZV0ubGFiZWx9XG4gICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49e3R5cGUgPT09ICdub3JtYWwnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2V0dGluZ3NbdHlwZV0uY29udHJvbHMpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbnRyb2xTbHVnLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17c2V0dGluZ3NbdHlwZV0uY29udHJvbHNbY29udHJvbFNsdWddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17c2VsZi5zdGF0ZVtjb250cm9sU2x1Z119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBbY29udHJvbFNsdWddOiB2YWx1ZSB8fCAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlVmFsdWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250cm9sU2x1Z106IHZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvUGFuZWw+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVHlwZUNvbnRyb2xzKCkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgZmlsbDoge1xuICAgICAgICBsYWJlbDogJ2ZpbGwnLFxuICAgICAgICB0b29sdGlwOiBfXygnRmlsbGVkJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ3RleHQnXG5cbiAgICAgIH0sXG4gICAgICBvdXRsaW5lOiB7XG4gICAgICAgIGxhYmVsOiAnb3V0bGluZScsXG4gICAgICAgIHRvb2x0aXA6IF9fKCdPdXRsaW5lJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ3RleHQnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSYWRpb0ljb25zXG4gICAgICAgIG9wdGlvbnM9e3R5cGVzfSBvbkNoYW5nZT17KHR5cGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdHlwZSB9LCB0aGlzLnVwZGF0ZVZhbHVlcyh7IHR5cGUgfSkpXG4gICAgICAgIH19IHZhbHVlPXt0aGlzLnN0YXRlLnR5cGV9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtYnV0dG9uLWFwcGVhcmFuY2UtY29udHJvbCc+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57XG4gICAgICAgICAgICBfXygnU3R5bGUnLCAnbmV2ZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUeXBlQ29udHJvbHMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJCb3JkZXJDb250cm9scygpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckNvbG9ycygpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgLy8gTWlncmF0ZSBib3JkZXItcmFkaXVzIGFuZCBib3JkZXItd2lkdGhcbiAgICAgIGNvbnN0IHIgPSBlLmRldGFpbC52YWx1ZS5ib3JkZXJSYWRpdXNcbiAgICAgIGlmICggciAmJiAoIHR5cGVvZiByID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgciA9PT0gJ251bWJlcicgKSApIHtcbiAgICAgICAgZS5kZXRhaWwudmFsdWUuYm9yZGVyUmFkaXVzID0ge1xuICAgICAgICAgIHRvcDogcixcbiAgICAgICAgICBib3R0b206IHIsXG4gICAgICAgICAgcmlnaHQ6IHIsXG4gICAgICAgICAgbGVmdDogclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHcgPSBlLmRldGFpbC52YWx1ZS5ib3JkZXJXaWR0aFxuICAgICAgaWYgKCB3ICYmICh0eXBlb2YgdyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHcgPT09ICdudW1iZXInKSApIHtcbiAgICAgICAgZS5kZXRhaWwudmFsdWUuYm9yZGVyV2lkdGggPSB7XG4gICAgICAgICAgdG9wOiB3LFxuICAgICAgICAgIGJvdHRvbTogdyxcbiAgICAgICAgICByaWdodDogdyxcbiAgICAgICAgICBsZWZ0OiB3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoIHsgLi4udGhpcy5zdGF0ZSwgLi4uZS5kZXRhaWwudmFsdWUgfSApXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyhlLmRldGFpbC52YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlVmFsdWVzKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KHtcbiAgICAgIC4uLnRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpLFxuICAgICAgLi4udmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaXNMaW5rZWQob2JqZWN0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9iamVjdCkuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT0gT2JqZWN0LnZhbHVlcyhvYmplY3QpWzBdKVxuICB9XG59XG5cbkJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBmcm9tICcuL0J1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgQnV0dG9uQXBwZWFyYW5jZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxCdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29sb3JDb250cm9sIGZyb20gJy4uL2NvbW1vbi9Db2xvckNvbnRyb2wuanMnXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIENvbG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcG9wb3Zlck9wZW46IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdCB8fCAnJ1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZXMgPSB0aGlzLnVwZGF0ZVZhbHVlcy5iaW5kKCB0aGlzIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICggIWUuZGV0YWlsICkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoIGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkICkgcmV0dXJuIGZhbHNlXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyggZS5kZXRhaWwudmFsdWUgKVxuICAgIH0gKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wgbmV2ZS1jb2xvci1jb250cm9sJz5cbiAgICAgICAgPENvbG9yQ29udHJvbFxuICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXModmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHsgdmFsdWU6IHZhbHVlIH0gKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCggdmFsdWUgKVxuICB9XG59XG5cbkNvbG9yQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IENvbG9yQ29tcG9uZW50IGZyb20gJy4vQ29sb3JDb21wb25lbnQnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgQ29sb3JDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8Q29sb3JDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgQ29sb3JQaWNrZXIsIEJ1dHRvbiwgRHJvcGRvd24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jbGFzcyBDb2xvckNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgc2VsZWN0ZWRDb2xvciB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCB0b2dnbGUgPSBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWNvbnRyb2wtaGVhZGVyIG5ldmUtY29sb3ItY29tcG9uZW50Jz5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsICYmXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9XG5cbiAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgcmVuZGVyVG9nZ2xlPXsoIHsgaXNPcGVuLCBvblRvZ2dsZSB9ICkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlID0gb25Ub2dnbGVcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydpcy1zZWNvbmRhcnkgaXMtYnV0dG9uJywgeyAnaXMtZW1wdHknOiAhc2VsZWN0ZWRDb2xvciB9XSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRDb2xvciB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVuZGVyQ29udGVudD17KCkgPT4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17c2VsZWN0ZWRDb2xvcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsoIHZhbHVlICkgPT4geyB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLmhleCkgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlQWxwaGFcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3NlbGVjdGVkQ29sb3IgJiZcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NsZWFyJ1xuICAgICAgICAgICAgICAgICAgaXNQcmltYXJ5XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoJycpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtfXyggJ0NsZWFyJywgJ25ldmUnICl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkNvbG9yQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yQ29udHJvbFxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU2l6aW5nQ29udHJvbCBmcm9tICcuLi9jb21tb24vU2l6aW5nLmpzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZXNwb25zaXZlQ29udHJvbCBmcm9tICcuLi9jb21tb24vUmVzcG9uc2l2ZS5qcydcblxuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIE51bWJlckNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdW5pdHMsIHZhbHVlLCBjbGFzc05hbWUsIGhhc1Jlc3BvbnNpdmUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSArICcgbmV2ZS1udW1iZXItY29udHJvbC13cmFwJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWNvbnRyb2wtaGVhZGVyJz5cbiAgICAgICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICAgICAge2hhc1Jlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udHJvbFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMucHJvcHMub25DaGFuZ2VkRGV2aWNlKGN1cnJlbnREZXZpY2UpfVxuICAgICAgICAgICAgLz59XG4gICAgICAgICAge3VuaXRzICYmIDxkaXYgY2xhc3NOYW1lPSduZXZlLXVuaXRzJz57dGhpcy5nZXRCdXR0b25zKCl9PC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNpemluZ0NvbnRyb2xcbiAgICAgICAgICBub0xpbmtpbmdcbiAgICAgICAgICBub1JhbmdlXG4gICAgICAgICAgb3B0aW9ucz17W3sgdmFsdWU6IHZhbHVlIH1dfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodHlwZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBtYXg9e3RoaXMucHJvcHMubWF4IHx8IDEwMH1cbiAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWluIHx8IDB9XG4gICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwIHx8IDF9XG4gICAgICAgICAgZGVmYXVsdHM9e3RoaXMucHJvcHMuZGVmYXVsdH1cbiAgICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXQoKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgeyB1bml0cyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghdW5pdHMpIHJldHVybiAnJ1xuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2Fsb25lIGFjdGl2ZSdcbiAgICAgICAgICBpc1NtYWxsXG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgPnt1bml0c1swXX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB1bml0cy5tYXAoKHVuaXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBidXR0b25DbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICBhY3RpdmU6IHNlbGYucHJvcHMuYWN0aXZlVW5pdCA9PT0gdW5pdFxuICAgICAgfSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnByb3BzLm9uVW5pdENoYW5nZSh1bml0KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIHt1bml0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG59XG5cbk51bWJlckNvbnRyb2wucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uUmVzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVuaXRzOiBQcm9wVHlwZXMuYXJyYXkgfHwgUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhhc1Jlc3BvbnNpdmU6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZWREZXZpY2U6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyQ29udHJvbFxuIiwiLyogZ2xvYmFsIHdwICovXG4vKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IHtcbiAgVG9vbHRpcCxcbiAgSWNvbkJ1dHRvbixcbiAgQnV0dG9uXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBSYWRpb0ljb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJ25vbmUnXG4gICAgfVxuXG4gICAgdGhpcy5nZXRCdXR0b25zID0gdGhpcy5nZXRCdXR0b25zLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtcmFkaW8taWNvbnMnPlxuICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7b3B0aW9uc1t0eXBlXS5pY29uID09PSAndGV4dCcgJiZcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgIFt7IGFjdGl2ZTogdGhpcy5wcm9wcy52YWx1ZSA9PT0gdHlwZSB9LCAnaXMtdGV4dCddKX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodHlwZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wdGlvbnNbdHlwZV0udG9vbHRpcH1cbiAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICB7b3B0aW9uc1t0eXBlXS5pY29uICE9PSAndGV4dCcgJiZcbiAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9e29wdGlvbnNbdHlwZV0udG9vbHRpcH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17b3B0aW9uc1t0eXBlXS50b29sdGlwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgIHsgYWN0aXZlOiB0aGlzLnByb3BzLnZhbHVlID09PSB0eXBlIH0pfVxuICAgICAgICAgICAgICAgIGljb249e29wdGlvbnNbdHlwZV0uaWNvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHR5cGUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD59XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApXG4gICAgfSlcbiAgfVxufVxuXG5SYWRpb0ljb25zLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ljb25zXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3Qge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50XG59ID0gd3AuZWxlbWVudFxuY29uc3Qge1xuICBCdXR0b24sXG4gIERhc2hpY29uLFxuICBUb29sdGlwLFxuICBCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgUmVzcG9uc2l2ZUNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3OiAnZGVza3RvcCdcbiAgICB9XG4gICAgdGhpcy5saW5rUmVzcG9uc2l2ZUJ1dHRvbnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGRldmljZXMgPSB7XG4gICAgICBkZXNrdG9wOiB7XG4gICAgICAgIHRvb2x0aXA6IF9fKCdEZXNrdG9wJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ2Rlc2t0b3AnXG4gICAgICB9LFxuICAgICAgdGFibGV0OiB7XG4gICAgICAgIHRvb2x0aXA6IF9fKCdUYWJsZXQnLCAnbmV2ZScpLFxuICAgICAgICBpY29uOiAndGFibGV0J1xuICAgICAgfSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICB0b29sdGlwOiBfXygnTW9iaWxlJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ3NtYXJ0cGhvbmUnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgZXhjbHVkZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkZXZpY2VNYXAgPSB7fVxuICAgIE9iamVjdC5rZXlzKGRldmljZXMpLm1hcChrZXkgPT4ge1xuICAgICAgaWYgKGV4Y2x1ZGVkKSB7XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRldmljZU1hcFtrZXldID0gZGV2aWNlc1trZXldXG4gICAgfSlcblxuICAgIGNvbnN0IHsgY29udHJvbExhYmVsLCBoaWRlUmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtcmVzcG9uc2l2ZS1jb250cm9sLWJhcic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udHJvbExhYmVsICYmXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250cm9sTGFiZWx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFoaWRlUmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb2F0aW5nLWNvbnRyb2xzJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkZXZpY2VNYXApLm1hcCgoZGV2aWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyB0b29sdGlwLCBpY29uIH0gPSBkZXZpY2VNYXBbZGV2aWNlXVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD17dG9vbHRpcH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZGV2aWNlID09PSB2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FjdGl2ZS1kZXZpY2UgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKSArIGRldmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGRldmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJlc3BvbnNpdmUtY29udHJvbHMtY29udGVudCc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNoYW5nZVZpZXdUeXBlKGRldmljZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aWV3OiBkZXZpY2UgfSlcbiAgICB3cC5jdXN0b21pemUucHJldmlld2VkRGV2aWNlKGRldmljZSlcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRldmljZSlcbiAgfVxuXG4gIGxpbmtSZXNwb25zaXZlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5jaGFuZ2VWaWV3VHlwZShlLmRldGFpbClcbiAgICB9KVxuICB9XG59XG5cblJlc3BvbnNpdmVDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjb250cm9sTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGVSZXNwb25zaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGV4Y2x1ZGVkOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZUNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBTaW5nbGVTaXppbmdJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbnYtc2l6aW5nLWl0ZW0nPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgKyAnLWlucHV0JyA6ICcnfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59XG4gICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heH1cbiAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XG4gICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKCB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSAnJyA/IDAgOiBlLnRhcmdldC52YWx1ZSApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5wcm9wcy50eXBlICYmIChcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj17dGhpcy5wcm9wcy50eXBlICsgJy1pbnB1dCd9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudHlwZX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNpbmdsZVNpemluZ0lucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoIFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSApLFxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNpemluZ0lucHV0XG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTaW5nbGVTaXppbmdJbnB1dCBmcm9tICcuLi9jb21tb24vU2luZ2xlU2l6aW5nSW5wdXQuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIEljb25CdXR0b24sXG4gIFRvb2x0aXBcbn0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBTaXppbmdDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhc1NldFZhbHVlcyA9IHRoaXMuaGFzU2V0VmFsdWVzLmJpbmQodGhpcylcbiAgICB0aGlzLmxpbmtCdXR0b24gPSB0aGlzLmxpbmtCdXR0b24uYmluZCh0aGlzKVxuICB9XG5cbiAgbGlua0J1dHRvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ub0xpbmtpbmcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBrZXk9J3Rvb2x0aXAtbGluaydcbiAgICAgICAgdGV4dD17dGhpcy5wcm9wcy5saW5rZWQgPyBfXygnVW5saW5rIFZhbHVlcycsICduZXZlJykgOiBfXygnTGluayBWYWx1ZXMnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT0nbGluay1pY29uJ1xuICAgICAgICAgIGljb249e3RoaXMucHJvcHMubGlua2VkID8gJ2FkbWluLWxpbmtzJyA6ICdlZGl0b3ItdW5saW5rJ31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uTGlua2VkKCl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgW3sgYWN0aXZlOiB0aGlzLnByb3BzLmxpbmtlZCB9LCAnbGluayddKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFtcbiAgICAgICduZXZlLXJlc3BvbnNpdmUtc2l6aW5nJyxcbiAgICAgIHsgJ3NpbmdsZS1pbnB1dCc6IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPT09IDEgfVxuICAgIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAge3RoaXMubGlua0J1dHRvbigpfVxuICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaSwgbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2luZ2xlU2l6aW5nSW5wdXRcbiAgICAgICAgICAgICAga2V5PXtufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHR5cGUsIHZhbHVlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKHR5cGUsXG4gICAgICAgICAgICAgICAgdmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17aS52YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpLnR5cGUgPyBpLnR5cGUgKyAnLWlucHV0JyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPXtpLnR5cGV9XG4gICAgICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXh9XG4gICAgICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59XG4gICAgICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAge3RoaXMuaGFzU2V0VmFsdWVzKCkgJiZcbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICAgICAgdGV4dD17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyBfXygnUmVzZXQgYWxsIFZhbHVlcycsICduZXZlJykgOiBfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAga2V5PSdyZXNldC1pY29uJ1xuICAgICAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVzZXQnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25SZXNldCgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaGFzU2V0VmFsdWVzKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdHMsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGVmYXVsdHMpICE9IHBhcnNlRmxvYXQob3B0aW9uc1swXS52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSAhPSBkZWZhdWx0c1tvcHRpb24udHlwZV1cbiAgICApLmxlbmd0aCA+IDBcbiAgfVxufVxuXG5TaXppbmdDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIG9uTGlua2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxpbmtlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uUmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBub0xpbmtpbmc6IFByb3BUeXBlcy5ib29sLFxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXppbmdDb250cm9sXG4iLCJleHBvcnQgY29uc3QgbWF5YmVQYXJzZUpzb24gPSAoaW5wdXQpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuICB0cnkge1xuICAgIEpTT04ucGFyc2UoaW5wdXQpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGlucHV0XG4gIH1cbiAgcmV0dXJuIEpTT04ucGFyc2UoaW5wdXQpXG59XG5cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSlcbn1cblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICovXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIC8vIFVzZSBmaXJzdCBvYmplY3Qgd2Ugd2FudCB0byBtZXJnZSB3aXRoIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgc3RhcnQuXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBrZXkgaW4gb25lIHNvdXJjZS5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgLy8gTWVyZ2UgaW5zaWRlIGtleXMgaWYgd2UgaGF2ZSBhbiBvYmplY3QuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVhc3NpZ24gd2l0aCBzb3VyY2UuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBSdW4gcmVjdXJzaXZlbHkgZm9yIG11bHRpcGxlLlxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldEludFZhbEFzUmVzcG9uc2l2ZSA9ICh2YWx1ZSkgPT4ge1xuICB2YWx1ZSA9IG1heWJlUGFyc2VKc29uKHZhbHVlKVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2Rlc2t0b3AnKSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ3RhYmxldCcpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnbW9iaWxlJykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0ge1xuICAgICAgZGVza3RvcDogdmFsdWUsXG4gICAgICB0YWJsZXQ6IHZhbHVlLFxuICAgICAgbW9iaWxlOiB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmNvbnN0IFNWRyA9IHtcbiAgbG9nb09ubHk6IDxzdmdcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNy4yOSdcbiAgICBoZWlnaHQ9JzE3LjI5JyB2aWV3Qm94PScwIDAgMTcuMjkgMTcuMjknXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD0nTTE0Ljc2LDE0Ljc2QTguNjEsOC42MSwwLDAsMSwxMiwxNi42YTguNDIsOC40MiwwLDAsMS0zLjM2LjY5LDguNjYsOC42NiwwLDAsMS0yLjcyLS40NCw4LjE0LDguMTQsMCwwLDEtMi4zOC0xLjIzLDkuNzQsOS43NCwwLDAsMS0xLjg3LTEuODdBOC4yNyw4LjI3LDAsMCwxLC40NCwxMS4zNyw4LjY3LDguNjcsMCwwLDEsMCw4LjY0LDguNTQsOC41NCwwLDAsMSwuNjgsNS4yOSw4LjcyLDguNzIsMCwwLDEsMi41MiwyLjUzLDguNzEsOC43MSwwLDAsMSw1LjI5LjY5LDguNSw4LjUsMCwwLDEsMTIsLjY5YTguNzgsOC43OCwwLDAsMSwyLjc2LDEuODRBOC43Miw4LjcyLDAsMCwxLDE2LjYsNS4yOWE4LjUsOC41LDAsMCwxLDAsNi43MUE4LjcyLDguNzIsMCwwLDEsMTQuNzYsMTQuNzZaTTEuNTgsNS41NEE3LjY2LDcuNjYsMCwwLDAsMSw4LjY0LDcuNjgsNy42OCwwLDAsMCwyLjE0LDEyLjhhNy41MSw3LjUxLDAsMCwwLDMuMTMsMi44NFpNOC4yOSw4LjI1LDcuMiw1LjNsLS43OS0uMDdjLS4xNCwwLS4yNC0uMS0uMjgtLjI4YS44NC44NCwwLDAsMSwwLS41MmMuMDctLjE4LjE3LS4yNi4zMS0uMjZsLjMzLDAsLjg0LDAsLjg0LDBjLjU0LDAsMS4yMywwLDIuMDYtLjExYS4zMS4zMSwwLDAsMSwuMy4yNS45Mi45MiwwLDAsMSwwLC41MmMwLC4xOC0uMTQuMjgtLjI4LjI5bC0uMDcsMGEuODUuODUsMCwwLDEtLjI1LjA3LDIuMywyLjMsMCwwLDEtLjM5LDBsMi42Miw3LjIzLjMtLjc5YTE5LDE5LDAsMCwwLC42MS0xLjg4LDYuNzMsNi43MywwLDAsMCwuMy0xLjY1LDQuMzMsNC4zMywwLDAsMC0uNDctMi4xMywyLjM4LDIuMzgsMCwwLDEtLjE5LS4zbC0uMi0uMzJzLS4wNy0uMTQtLjE0LS4yN0ExLjgyLDEuODIsMCwwLDEsMTIuNTYsNWEyLjgzLDIuODMsMCwwLDEtLjA3LS4yOCwxLjIyLDEuMjIsMCwwLDEsMC0uMzIsMS4zLDEuMywwLDAsMSwuNDYtMS4wOCwxLjIzLDEuMjMsMCwwLDEsMS0uMjksNy42Myw3LjYzLDAsMCwwLTIuNC0xLjQ5QTcuNDksNy40OSwwLDAsMCw4LjY0LDFhNy42MSw3LjYxLDAsMCwwLTMuNy45M0E3LjQ3LDcuNDcsMCwwLDAsMi4xOSw0LjQzaC41Yy41MywwLDEuMjEsMCwyLjA1LS4wOWEuMjkuMjksMCwwLDEsLjMuMjIuNzUuNzUsMCwwLDEsMCwuNDcuMzQuMzQsMCwwLDEtLjI4LjI3bC0xLC4wNywzLDcuOTFaTTcuNjQsMTMuMmMtLjQ5LDEuNDItLjgxLDIuMzYtMSwyLjg0YTYuNyw2LjcsMCwwLDAsMiwuMjlBNy4yOCw3LjI4LDAsMCwwLDExLDE1Ljk0bC0yLjIzLTZDOC41LDEwLjY4LDguMTIsMTEuNzcsNy42NCwxMy4yWm00Ljg5LDIuMTdhNy40LDcuNCwwLDAsMCwyLjc3LTIuODEsNy43MSw3LjcxLDAsMCwwLDEtMy45MkE3LjUxLDcuNTEsMCwwLDAsMTUuNDIsNSw5LDksMCwwLDEsMTUuNSw2LjFjMCwuMzYsMCwuNjUsMCwuODhhNC4xNyw0LjE3LDAsMCwxLS4xMy43M2MtLjA2LjI3LS4xMS40NC0uMTQuNTNsLS4xNS40UTE0LjY2LDkuNjYsMTIuNTMsMTUuMzdaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbG9nb1RvcFRpdGxlOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQuMDQnXG4gICAgaGVpZ2h0PScxNy4zMycgdmlld0JveD0nMCAwIDE0LjA0IDE3LjMzJ1xuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xMC4xMyw3LjUxYTQuMzksNC4zOSwwLDAsMS0xLjQuOTNBNC4zMiw0LjMyLDAsMCwxLDcsOC44YTQuNjQsNC42NCwwLDAsMS0xLjM5LS4yMkE0LjIyLDQuMjIsMCwwLDEsNC40Myw4YTQuNSw0LjUsMCwwLDEtLjk1LTEsMy43NywzLjc3LDAsMCwxLS42My0xLjIxQTQuMzcsNC4zNywwLDAsMSwzLDIuNyw0LjU4LDQuNTgsMCwwLDEsMy45LDEuMjksNC41OSw0LjU5LDAsMCwxLDUuMy4zNSw0LjMyLDQuMzIsMCwwLDEsNywwLDQuMjIsNC4yMiwwLDAsMSw4LjcyLjM1YTQuMzksNC4zOSwwLDAsMSwxLjQuOTMsNC4yNiw0LjI2LDAsMCwxLC45NCwxLjQsNC4yLDQuMiwwLDAsMSwuMzYsMS43MSw0LjQ4LDQuNDgsMCwwLDEtMS4yOSwzLjEyWk0zLjQyLDIuODNhMy44NCwzLjg0LDAsMCwwLS4zMSwxLjU4LDMuOTIsMy45MiwwLDAsMCwuNiwyLjExQTMuODMsMy44MywwLDAsMCw1LjMxLDhDNSw3LjI0LDQuNDEsNS41MiwzLjQyLDIuODNaTTYuODQsNC4yLDYuMjgsMi43bC0uNCwwYy0uMDcsMC0uMTItLjA1LS4xNS0uMTRhLjUuNSwwLDAsMSwwLS4yN2MwLS4wOC4wOC0uMTMuMTUtLjEyaC4xN2wuNDMsMCwuNDMsMGMuMjcsMCwuNjIsMCwxLS4wNi4wNywwLC4xMiwwLC4xNi4xM2EuNDYuNDYsMCwwLDEsMCwuMjZBLjE3LjE3LDAsMCwxLDgsMi42NmwwLDAtLjEyLDAtLjIsMEw5LDYuNDEsOS4xMyw2Yy4xLS4yNy4yMS0uNTkuMzEtMWEzLjM4LDMuMzgsMCwwLDAsLjE1LS44NCwyLjE2LDIuMTYsMCwwLDAtLjI0LTEuMDhMOS4yNSwzbC0uMS0uMTdhMS4xMSwxLjExLDAsMCwxLS4wNy0uMTNBLjg1Ljg1LDAsMCwxLDksMi41MmExLjU1LDEuNTUsMCwwLDEsMC0uMTUuODguODgsMCwwLDEsMC0uMTYuNjkuNjksMCwwLDEsLjIzLS41NS42Ni42NiwwLDAsMSwuNDktLjE1QTMuNzUsMy43NSwwLDAsMCw4LjQ1Ljc1LDQuMDgsNC4wOCwwLDAsMCw3LC40OSwzLjgxLDMuODEsMCwwLDAsNS4xMywxYTMuNzgsMy43OCwwLDAsMC0xLjQsMS4yOUg0Yy4yNywwLC42MiwwLDEuMDUsMCwuMDcsMCwuMTIsMCwuMTUuMTFhLjMzLjMzLDAsMCwxLDAsLjI0LjE1LjE1LDAsMCwxLS4xNC4xM2wtLjUxLDAsMS41MSw0Wk02LjUxLDYuNzEsNiw4LjE2YTMuMzMsMy4zMywwLDAsMCwxLC4xNSwzLjc2LDMuNzYsMCwwLDAsMS4xOS0uMkw3LjA4LDVDNyw1LjQzLDYuNzYsNiw2LjUxLDYuNzFaTTksNy44MmEzLjg3LDMuODcsMCwwLDAsMS40MS0xLjQzLDQsNCwwLDAsMCwuNTItMiwzLjg1LDMuODUsMCwwLDAtLjQ3LTEuODcsMy44NiwzLjg2LDAsMCwxLDAsLjU4YzAsLjE4LDAsLjMzLDAsLjQ0YTMsMywwLDAsMS0uMDYuMzhjMCwuMTMtLjA2LjIyLS4wOC4yNnMwLC4xMi0uMDcuMjFDMTAuMTUsNC43Myw5LjcyLDUuODgsOSw3LjgyWidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00zLjA2LDEwLjU0di43SDJ2Mi45NUgxLjE0VjExLjI0SDB2LS43WicgLz5cbiAgICA8cGF0aCBkPSdNMy41OSwxMC41NGguODJ2My42NUgzLjU5WicgLz5cbiAgICA8cGF0aCBkPSdNOCwxMC41NHYuN0g2Ljg2djIuOTVINlYxMS4yNEg0Ljk0di0uN1onIC8+XG4gICAgPHBhdGggZD0nTTEwLjkzLDEzLjQ4di43MUg4LjQ5VjEwLjU0aC44MnYyLjk0WicgLz5cbiAgICA8cGF0aCBkPSdNMTEuNDUsMTQuMTlWMTAuNTRoMi40N3YuNjlIMTIuMjd2LjcxaDEuNDZ2LjY4SDEyLjI3di44OEgxNHYuNjlaJyAvPlxuICAgIDxwYXRoIGQ9J00yLDE0Ljkzdi40NkgxLjI0djEuODlILjcxVjE1LjM5SDB2LS40NlonIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zLjU4LDE3LjI4YzAtLjA4LS4wNS0uMTYtLjA4LS4yNWwtLjA5LS4yNkgyLjQ5TDIuNCwxN2MwLC4wOS0uMDYuMTctLjA4LjI1SDEuNzdsLjI1LS43TDIuMjUsMTZsLjIzLS41NGMuMDctLjE3LjE1LS4zMy4yMy0uNWguNWwuMjMuNS4yMi41NGMuMDguMTkuMTYuNC4yNC42MWwuMjUuN1pNMywxNS40N2wtLjA2LjE0LS4wNy4yLS4xLjI1LS4xMS4yOWguNjdjMC0uMS0uMDctLjE5LS4xLS4yOXMtLjA3LS4xOC0uMS0uMjVTMywxNS42NiwzLDE1LjZaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J001LjUxLDE1LjM0YS42Mi42MiwwLDAsMC0uNTMuMjEuODUuODUsMCwwLDAtLjE3LjU2LDEuNDYsMS40NiwwLDAsMCwwLC4zMS43Ny43NywwLDAsMCwuMTIuMjQuNjUuNjUsMCwwLDAsLjIxLjE2LjYxLjYxLDAsMCwwLC4yOC4wNmguMjZWMTZoLjUzdjEuMTdhMS42OCwxLjY4LDAsMCwxLS4zLjA3LDIuNTQsMi41NCwwLDAsMS0uNTIsMEExLjQyLDEuNDIsMCwwLDEsNSwxNy4yNSwxLjE4LDEuMTgsMCwwLDEsNC41OCwxN2ExLDEsMCwwLDEtLjIzLS4zOCwxLjQ2LDEuNDYsMCwwLDEtLjA5LS41MiwxLjM4LDEuMzgsMCwwLDEsLjA5LS41MiwxLjIxLDEuMjEsMCwwLDEsLjI2LS4zOUExLjE4LDEuMTgsMCwwLDEsNSwxNWExLjM5LDEuMzksMCwwLDEsLjQ2LS4wOGwuMywwTDYsMTVsLjE2LjA2LjA5LjA1LS4xNS40Mi0uMjUtLjFBMS41NSwxLjU1LDAsMCwwLDUuNTEsMTUuMzRaJ1xuICAgIC8+XG4gICAgPHBhdGggZD0nTTguMzEsMTYuODN2LjQ1SDYuNzRWMTQuOTNoLjUzdjEuOVonIC8+XG4gICAgPHBhdGggZD0nTTguNjUsMTQuOTNoLjUzdjIuMzVIOC42NVonIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xMS4zLDE3LjI4Yy0uMTUtLjI3LS4zMi0uNTMtLjQ5LS43OWE4LjY5LDguNjksMCwwLDAtLjU3LS43NXYxLjU0SDkuNzJWMTQuOTNoLjQzbC4yNS4yOC4yOC4zNS4yOC4zOGMuMDkuMTMuMTcuMjYuMjYuMzhWMTQuOTNoLjUydjIuMzVaJ1xuICAgIC8+XG4gICAgPHBhdGggZD0nTTEyLjI4LDE3LjI4VjE0LjkzaDEuNTl2LjQ1SDEyLjgxdi40NmguOTR2LjQzaC0uOTR2LjU3SDE0di40NFonIC8+XG4gIDwvc3ZnPixcbiAgbG9nb1RpdGxlOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNTEuODMnXG4gICAgaGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDUxLjgzIDE3LjI5J1xuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xNC43NiwxNC43NkE4LjYxLDguNjEsMCwwLDEsMTIsMTYuNmE4LjQyLDguNDIsMCwwLDEtMy4zNi42OSw4LjY2LDguNjYsMCwwLDEtMi43Mi0uNDQsOC4xNCw4LjE0LDAsMCwxLTIuMzgtMS4yMyw5Ljc0LDkuNzQsMCwwLDEtMS44Ny0xLjg3QTguMjcsOC4yNywwLDAsMSwuNDQsMTEuMzcsOC42Nyw4LjY3LDAsMCwxLDAsOC42NCw4LjU0LDguNTQsMCwwLDEsLjY4LDUuMjksOC43Miw4LjcyLDAsMCwxLDIuNTIsMi41Myw4Ljg4LDguODgsMCwwLDEsNS4yOS42OSw4LjUsOC41LDAsMCwxLDEyLC42OWE5LDksMCwwLDEsMi43NiwxLjg0QTguNzIsOC43MiwwLDAsMSwxNi42LDUuMjlhOC41LDguNSwwLDAsMSwwLDYuNzFBOC43Miw4LjcyLDAsMCwxLDE0Ljc2LDE0Ljc2Wk0xLjU4LDUuNTRBNy42Niw3LjY2LDAsMCwwLDEsOC42NCw3LjY4LDcuNjgsMCwwLDAsMi4xNCwxMi44YTcuNTEsNy41MSwwLDAsMCwzLjEzLDIuODRaTTguMjksOC4yNSw3LjIsNS4zbC0uNzktLjA3Yy0uMTQsMC0uMjQtLjEtLjI4LS4yOGEuODQuODQsMCwwLDEsMC0uNTJjLjA3LS4xOC4xNy0uMjYuMzEtLjI2bC4zMywwLC44NCwwLC44NCwwYy41NCwwLDEuMjMsMCwyLjA2LS4xMWEuMzEuMzEsMCwwLDEsLjMuMjUuOTIuOTIsMCwwLDEsMCwuNTJjMCwuMTgtLjE0LjI4LS4yOC4yOWwtLjA3LDBhLjg1Ljg1LDAsMCwxLS4yNS4wNywyLjMsMi4zLDAsMCwxLS4zOSwwbDIuNjIsNy4yMy4zLS43OWExOSwxOSwwLDAsMCwuNjEtMS44OCw2LjczLDYuNzMsMCwwLDAsLjMtMS42NSw0LjM2LDQuMzYsMCwwLDAtLjQ3LTIuMTMsMi4zOCwyLjM4LDAsMCwxLS4xOS0uM2wtLjItLjMycy0uMDctLjE0LS4xNC0uMjdBMS44MiwxLjgyLDAsMCwxLDEyLjU2LDVhMi44MywyLjgzLDAsMCwxLS4wNy0uMjgsMS4yMiwxLjIyLDAsMCwxLDAtLjMyLDEuMywxLjMsMCwwLDEsLjQ2LTEuMDgsMS4yMywxLjIzLDAsMCwxLDEtLjI5QTcuNzQsNy43NCwwLDAsMCw4LjY0LDEsNy42NSw3LjY1LDAsMCwwLDIuMTksNC40M2guNWMuNTMsMCwxLjIxLDAsMi4wNS0uMDlhLjI5LjI5LDAsMCwxLC4zLjIyLjc1Ljc1LDAsMCwxLDAsLjQ3LjM0LjM0LDAsMCwxLS4yOC4yN2wtMSwuMDcsMyw3LjkxWk03LjY0LDEzLjJjLS40OSwxLjQyLS44MSwyLjM2LTEsMi44NGE2LjcsNi43LDAsMCwwLDIsLjI5QTcuMjgsNy4yOCwwLDAsMCwxMSwxNS45NGwtMi4yMy02QzguNSwxMC42OCw4LjEyLDExLjc3LDcuNjQsMTMuMlptNC44OSwyLjE3YTcuNCw3LjQsMCwwLDAsMi43Ny0yLjgxLDcuNzEsNy43MSwwLDAsMCwxLTMuOTJBNy41MSw3LjUxLDAsMCwwLDE1LjQyLDUsOSw5LDAsMCwxLDE1LjUsNi4xYzAsLjM2LDAsLjY1LDAsLjg4YTQuMTcsNC4xNywwLDAsMS0uMTMuNzNjLS4wNi4yNy0uMTEuNDQtLjE0LjUzbC0uMTUuNFExNC42Niw5LjY2LDEyLjUzLDE1LjM3WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00yNi44Mi45MXYxLjZoLTIuNVY5LjIzSDIyLjQ0VjIuNTFoLTIuNVYuOTFaJyAvPlxuICAgIDxwYXRoIGQ9J00yOCwuOTFIMjkuOVY5LjIzSDI4WicgLz5cbiAgICA8cGF0aCBkPSdNMzgsLjkxdjEuNmgtMi41VjkuMjNIMzMuNlYyLjUxSDMxLjFWLjkxWicgLz5cbiAgICA8cGF0aCBkPSdNNDQuNzQsNy42MlY5LjIzSDM5LjE4Vi45MWgxLjg4VjcuNjJaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNDUuOTQsOS4yM1YuOTFoNS42MlYyLjQ4SDQ3LjgxVjQuMTJoMy4zM1Y1LjY1SDQ3LjgxdjJoNFY5LjIzWidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00yNC4yOCwxMC45M3YxSDIyLjY3djQuMzNIMjEuNDZWMTJIMTkuODV2LTFaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjgsMTYuMjhjLS4wNi0uMTktLjEyLS4zOC0uMTktLjU4bC0uMjEtLjU4SDI1LjUyYy0uMDYuMTktLjEzLjM5LS4yLjU5cy0uMTMuMzgtLjE5LjU3SDIzLjg4Yy4yLS41OC4zOS0xLjExLjU3LTEuNnMuMzYtLjk1LjUzLTEuMzguMzUtLjg1LjUyLTEuMjMuMzQtLjc3LjUyLTEuMTRoMS4xNGMuMTcuMzcuMzUuNzUuNTIsMS4xNHMuMzQuNzkuNTIsMS4yMy4zNC44OS41MywxLjM4LjM3LDEsLjU3LDEuNlptLTEuNDUtNC4xNGMwLC4wOC0uMDYuMTgtLjExLjMyYTQuNDUsNC40NSwwLDAsMC0uMTguNDZjLS4wNy4xNy0uMTQuMzctLjIyLjU4cy0uMTcuNDMtLjI1LjY2aDEuNTNxLS4xMi0uMzUtLjI0LS42NmMtLjA4LS4yMi0uMTUtLjQxLS4yMi0uNThsLS4xOC0uNDdBMi42NSwyLjY1LDAsMCwwLDI2LjU2LDEyLjE0WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMzIuNCwxMS44NWExLjQ2LDEuNDYsMCwwLDAtMS4yMS40NywyLDIsMCwwLDAtLjM4LDEuMjgsMi4yNiwyLjI2LDAsMCwwLC4xLjcxLDEuNDksMS40OSwwLDAsMCwuMjcuNTUsMS4xOSwxLjE5LDAsMCwwLC40Ny4zNiwxLjQ1LDEuNDUsMCwwLDAsLjY1LjEzaC4zNGExLDEsMCwwLDAsLjI1LDBWMTMuNDVoMS4yVjE2LjFhMy42MSwzLjYxLDAsMCwxLS42OS4xOCw2LjQxLDYuNDEsMCwwLDEtMS4xOC4xLDMuMTEsMy4xMSwwLDAsMS0xLjA5LS4xOSwyLjE3LDIuMTcsMCwwLDEtLjg0LS41NCwyLjU2LDIuNTYsMCwwLDEtLjU0LS44NywzLjYsMy42LDAsMCwxLS4xOS0xLjE4LDMuMTIsMy4xMiwwLDAsMSwuMjEtMS4xOSwyLjU3LDIuNTcsMCwwLDEsLjU3LS44OEEyLjMzLDIuMzMsMCwwLDEsMzEuMiwxMWEyLjc1LDIuNzUsMCwwLDEsMS0uMTksNC42MSw0LjYxLDAsMCwxLC42OCwwbC41My4xMmEyLjM3LDIuMzcsMCwwLDEsLjM2LjEzbC4yMS4xMS0uMzUsMUEyLjcxLDIuNzEsMCwwLDAsMzMuMSwxMiwyLjUyLDIuNTIsMCwwLDAsMzIuNCwxMS44NVonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMzguNzksMTUuMjR2MUgzNS4yMVYxMC45M2gxLjIxdjQuMzFaJyAvPlxuICAgIDxwYXRoIGQ9J00zOS41NiwxMC45M2gxLjJ2NS4zNWgtMS4yWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTQ1LjU5LDE2LjI4Yy0uMzUtLjYyLS43Mi0xLjIyLTEuMTItMS44MmExOS43LDE5LjcsMCwwLDAtMS4yOC0xLjY5djMuNTFINDJWMTAuOTNoMWE3LjM5LDcuMzksMCwwLDEsLjU2LjYyYy4yMS4yNS40Mi41MS42My43OXMuNDMuNTcuNjQuODhsLjU5Ljg2VjEwLjkzaDEuMnY1LjM1WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J000Ny44MywxNi4yOFYxMC45M2gzLjYydjFINDlWMTNoMi4xNHYxSDQ5djEuMjloMi41OXYxWicgLz5cbiAgPC9zdmc+LFxuICB0aXRsZUxvZ286IDxzdmdcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MS42NSdcbiAgICBoZWlnaHQ9JzE3LjI5JyB2aWV3Qm94PScwIDAgNTEuNjUgMTcuMjknXG4gID5cbiAgICA8cGF0aFxuICAgICAgZD0nTTQ5LjEyLDE0Ljc2YTguNjksOC42OSwwLDAsMS0yLjc2LDEuODUsOC41Nyw4LjU3LDAsMCwxLTMuMzUuNjgsOC42Nyw4LjY3LDAsMCwxLTIuNzMtLjQ0LDguMjcsOC4yNywwLDAsMS0yLjM4LTEuMjNBOS43NCw5Ljc0LDAsMCwxLDM2LDEzLjc1YTguMjcsOC4yNywwLDAsMS0xLjIzLTIuMzgsOC42Nyw4LjY3LDAsMCwxLS40NC0yLjczLDguNjksOC42OSwwLDAsMSwyLjUzLTYuMTFBOC43Miw4LjcyLDAsMCwxLDM5LjY1LjY5YTguNSw4LjUsMCwwLDEsNi43MSwwLDguODMsOC44MywwLDAsMSwyLjc2LDEuODRBOC43Miw4LjcyLDAsMCwxLDUxLDUuMjksOC41LDguNSwwLDAsMSw1MSwxMiw4LjcyLDguNzIsMCwwLDEsNDkuMTIsMTQuNzZaTTM1Ljk0LDUuNTRhNy42Niw3LjY2LDAsMCwwLS42MiwzLjFBNy42OCw3LjY4LDAsMCwwLDM2LjUsMTIuOGE3LjUxLDcuNTEsMCwwLDAsMy4xMywyLjg0Wm02LjcxLDIuNzFMNDEuNTYsNS4zbC0uNzktLjA3Yy0uMTQsMC0uMjMtLjEtLjI4LS4yOGEuNzcuNzcsMCwwLDEsMC0uNTJjLjA2LS4xOC4xNi0uMjYuMy0uMjZsLjM0LDAsLjgzLDAsLjg0LDBjLjU0LDAsMS4yMywwLDIuMDYtLjExYS4zMS4zMSwwLDAsMSwuMy4yNS44NC44NCwwLDAsMSwwLC41MmMwLC4xOC0uMTQuMjgtLjI4LjI5bC0uMDcsMGEuNzcuNzcsMCwwLDEtLjI1LjA3LDIuMywyLjMsMCwwLDEtLjM5LDBsMi42Miw3LjIzLjMtLjc5YTE5LDE5LDAsMCwwLC42MS0xLjg4LDYuNzMsNi43MywwLDAsMCwuMy0xLjY1LDQuMzYsNC4zNiwwLDAsMC0uNDctMi4xMywyLjM4LDIuMzgsMCwwLDEtLjE5LS4zbC0uMTktLjMycy0uMDgtLjE0LS4xNS0uMjdBMS44MiwxLjgyLDAsMCwxLDQ2LjkyLDVhMi44MywyLjgzLDAsMCwxLS4wNy0uMjgsMS4yMiwxLjIyLDAsMCwxLDAtLjMyLDEuMywxLjMsMCwwLDEsLjQ2LTEuMDgsMS4yNCwxLjI0LDAsMCwxLDEtLjI5LDcuODYsNy44NiwwLDAsMC0yLjQtMS40OUE3LjczLDcuNzMsMCwwLDAsNDMsMWE3LjY1LDcuNjUsMCwwLDAtNi40NiwzLjQ3aC41Yy41MywwLDEuMjEsMCwyLjA1LS4wOWEuMjkuMjksMCwwLDEsLjMuMjIuNzUuNzUsMCwwLDEsMCwuNDcuMzQuMzQsMCwwLDEtLjI4LjI3bC0xLC4wNywzLDcuOTFaTTQyLDEzLjJjLS40OSwxLjQyLS44MSwyLjM3LTEsMi44NGE2LjcyLDYuNzIsMCwwLDAsMiwuMjksNy4yNyw3LjI3LDAsMCwwLDIuMzQtLjM5bC0yLjIzLTZabTQuODksMi4xN2E3LjMzLDcuMzMsMCwwLDAsMi43Ny0yLjgxLDcuNzEsNy43MSwwLDAsMCwxLTMuOTJBNy41MSw3LjUxLDAsMCwwLDQ5Ljc4LDVhOSw5LDAsMCwxLC4wOCwxLjEzYzAsLjM2LDAsLjY1LDAsLjg4YTQuMTcsNC4xNywwLDAsMS0uMTMuNzNjLS4wNi4yNy0uMTEuNDQtLjE0LjUzbC0uMTUuNFE0OSw5LjY2LDQ2Ljg5LDE1LjM3WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J003LC45MXYxLjZINC40N1Y5LjIzSDIuNTlWMi41MUguMDlWLjkxWicgLz5cbiAgICA8cGF0aCBkPSdNOC4xNy45MWgxLjg4VjkuMjNIOC4xN1onIC8+XG4gICAgPHBhdGggZD0nTTE4LjEzLjkxdjEuNmgtMi41VjkuMjNIMTMuNzVWMi41MWgtMi41Vi45MVonIC8+XG4gICAgPHBhdGggZD0nTTI0Ljg5LDcuNjJWOS4yM0gxOS4zM1YuOTFoMS44OFY3LjYyWicgLz5cbiAgICA8cGF0aCBkPSdNMjYuMDksOS4yM1YuOTFoNS42MlYyLjQ4SDI4VjQuMTJoMy4zM1Y1LjY1SDI4djJoNFY5LjIzWicgLz5cbiAgICA8cGF0aCBkPSdNNC40MywxMC45M3YxSDIuODJ2NC4zM0gxLjYxVjEySDB2LTFaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNOC4xNiwxNi4yOEM4LjEsMTYuMDksOCwxNS45LDgsMTUuN2wtLjIxLS41OEg1LjY3Yy0uMDYuMTktLjEzLjM5LS4yLjU5cy0uMTMuMzgtLjE5LjU3SDRjLjItLjU4LjM5LTEuMTEuNTctMS42cy4zNi0uOTUuNTMtMS4zOGwuNTEtMS4yM2MuMTctLjM5LjM1LS43Ny41My0xLjE0SDcuMzFjLjE3LjM3LjM1Ljc1LjUyLDEuMTRzLjM0Ljc5LjUxLDEuMjMuMzUuODkuNTQsMS4zOC4zNywxLC41NywxLjZaTTYuNzEsMTIuMTRhMi4zMiwyLjMyLDAsMCwxLS4xMi4zMmMwLC4xMy0uMTEuMjgtLjE3LjQ2cy0uMTQuMzctLjIyLjU4LS4xNy40My0uMjUuNjZINy40OGwtLjI0LS42NmMtLjA4LS4yMi0uMTUtLjQxLS4yMi0uNThsLS4xOC0uNDdBMi42NSwyLjY1LDAsMCwwLDYuNzEsMTIuMTRaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xMi41NSwxMS44NWExLjQ2LDEuNDYsMCwwLDAtMS4yMS40N0EyLDIsMCwwLDAsMTEsMTMuNmEyLjI2LDIuMjYsMCwwLDAsLjEuNzEsMS40OSwxLjQ5LDAsMCwwLC4yNy41NSwxLjE5LDEuMTksMCwwLDAsLjQ3LjM2LDEuNDUsMS40NSwwLDAsMCwuNjUuMTNoLjM0YTEsMSwwLDAsMCwuMjUsMFYxMy40NWgxLjJWMTYuMWEzLjYxLDMuNjEsMCwwLDEtLjY5LjE4LDYuNDEsNi40MSwwLDAsMS0xLjE4LjEsMy4xMSwzLjExLDAsMCwxLTEuMDktLjE5LDIuMTcsMi4xNywwLDAsMS0uODQtLjU0LDIuNTYsMi41NiwwLDAsMS0uNTQtLjg3LDMuNiwzLjYsMCwwLDEtLjE5LTEuMTgsMy4xMiwzLjEyLDAsMCwxLC4yMS0xLjE5LDIuNTcsMi41NywwLDAsMSwuNTctLjg4LDIuMzcsMi4zNywwLDAsMSwuODUtLjU0LDIuODQsMi44NCwwLDAsMSwxLjA1LS4xOSw0LjYxLDQuNjEsMCwwLDEsLjY4LDBsLjUzLjEyYTIuMzcsMi4zNywwLDAsMSwuMzYuMTNsLjIxLjExLS4zNSwxYTMsMywwLDAsMC0uNTctLjIzQTIuNTcsMi41NywwLDAsMCwxMi41NSwxMS44NVonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTguOTQsMTUuMjR2MUgxNS4zNlYxMC45M2gxLjIxdjQuMzFaJyAvPlxuICAgIDxwYXRoIGQ9J00xOS43MSwxMC45M2gxLjJ2NS4zNWgtMS4yWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI1Ljc0LDE2LjI4Yy0uMzUtLjYyLS43Mi0xLjIyLTEuMTItMS44MmExOS43LDE5LjcsMCwwLDAtMS4yOC0xLjY5djMuNTFIMjIuMTVWMTAuOTNoMWE3LjM5LDcuMzksMCwwLDEsLjU2LjYyYy4yMS4yNS40Mi41MS42My43OXMuNDMuNTcuNjQuODhsLjU5Ljg2VjEwLjkzaDEuMnY1LjM1WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjgsMTYuMjhWMTAuOTNIMzEuNnYxSDI5LjE5VjEzaDIuMTR2MUgyOS4xOXYxLjI5aDIuNTl2MVonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBweDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+XG4gICAgPGc+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTAsMTAuNzFhNS4zMiw1LjMyLDAsMCwxLS4yLDEuNDksMy41MywzLjUzLDAsMCwxLS41OSwxLjE2LDIuNjcsMi42NywwLDAsMS0xLC43NSwzLjEsMy4xLDAsMCwxLTEuMzMuMjcsMy44OSwzLjg5LDAsMCwxLS43OC0uMDgsNCw0LDAsMCwxLS42OS0uMjN2Mi42NmgtMlY3LjQybC42Mi0uMTUuNzMtLjEzLjc4LS4wOS43NiwwYTQuNDgsNC40OCwwLDAsMSwxLjU2LjI2QTMuMjYsMy4yNiwwLDAsMSw5LDhhMywzLDAsMCwxLC43MiwxLjE2QTQuMzksNC4zOSwwLDAsMSwxMCwxMC43MVptLTIsLjA2YTIuNDIsMi40MiwwLDAsMC0uNDItMS40OSwxLjQ0LDEuNDQsMCwwLDAtMS4yMy0uNTZsLS41LDAtLjM3LDBWMTIuNGExLjUxLDEuNTEsMCwwLDAsLjQ5LjIsMi4xLDIuMSwwLDAsMCwuNjEuMDlDNy40OCwxMi42OSw4LDEyLjA1LDgsMTAuNzdaJ1xuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00xNC4xLDkuMTZsMS40MS0yaDIuMDZsLTIuNDUsMy40M2EyMi40OCwyMi40OCwwLDAsMSwxLjUsMS45M2MuNDMuNjQuNzgsMS4yLDEuMDUsMS43SDE1LjUybC0uMjctLjUtLjM2LS42M2EzLjg4LDMuODgsMCwwLDAtLjQyLS41NkwxNCwxMi4xM2wtLjQyLjM5YTIuNDMsMi40MywwLDAsMC0uMzkuNTJjLS4xMy4yMS0uMjUuNDItLjM3LjYzcy0uMjMuMzktLjMzLjU3aC0yYy4xMS0uMjIuMjYtLjQ4LjQ0LS43OXMuMzktLjYyLjYxLS45NS40Ni0uNjQuNzEtLjk1LjUxLS41OS43Ni0uODZjLS40NC0uNjMtLjg2LTEuMjMtMS4yNy0xLjhsLTEuMi0xLjcxaDIuMTZaJ1xuICAgICAgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPixcbiAgZW06IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuICAgIDxnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTS45LDEwLjcyYTQuMTgsNC4xOCwwLDAsMSwuMjktMS42NEEzLjYyLDMuNjIsMCwwLDEsMS45NCw3LjksMy4yNiwzLjI2LDAsMCwxLDMsNy4xOSwzLjM1LDMuMzUsMCwwLDEsNC4yOCw3YTMuMTQsMy4xNCwwLDAsMSwyLjM4LjkyLDMuNzgsMy43OCwwLDAsMSwuODcsMi43YzAsLjEyLDAsLjI1LDAsLjM5czAsLjI2LDAsLjM3SDNhMS4zNywxLjM3LDAsMCwwLC41OCwxLDIuMzQsMi4zNCwwLDAsMCwxLjM3LjM2QTYuMzgsNi4zOCwwLDAsMCw2LDEyLjU3YTQuMzgsNC4zOCwwLDAsMCwuODctLjI1bC4yNiwxLjYyYTIuMzksMi4zOSwwLDAsMS0uNDMuMTdjLS4xOC4wNS0uMzcuMS0uNTkuMTRsLS43MS4xYy0uMjUsMC0uNSwwLS43NSwwQTQuNjEsNC42MSwwLDAsMSwzLDE0LjExYTMuMjUsMy4yNSwwLDAsMS0xLjE3LS43OCwzLDMsMCwwLDEtLjY4LTEuMTZBNC41NCw0LjU0LDAsMCwxLC45LDEwLjcyWk01LjYsMTBhMi4xLDIuMSwwLDAsMC0uMDktLjVBMS4zNywxLjM3LDAsMCwwLDUuMjgsOWExLjIyLDEuMjIsMCwwLDAtLjM5LS4zMSwxLjI4LDEuMjgsMCwwLDAtLjU4LS4xMiwxLjQzLDEuNDMsMCwwLDAtLjU4LjExLDEuMTMsMS4xMywwLDAsMC0uNC4zMSwxLjMxLDEuMzEsMCwwLDAtLjI1LjQzQTMuMTgsMy4xOCwwLDAsMCwzLDEwWidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTMsMTAuNDVhMi44NCwyLjg0LDAsMCwwLS4yNS0xLjM3LDEsMSwwLDAsMC0uODYtLjRsLS4zOSwwLS4zOC4wNVYxNC4yaC0yVjcuMzhjLjE3LDAsLjM3LS4wOS42LS4xNGwuNzMtLjE0cS4zOC0uMDYuNzgtLjA5TDEyLDdhMy4zNSwzLjM1LDAsMCwxLDEuMjUuMTksMywzLDAsMCwxLC43OC40NiwzLjc5LDMuNzksMCwwLDEsMS0uNDhBMy4zMSwzLjMxLDAsMCwxLDE2LDdhMy41MSwzLjUxLDAsMCwxLDEuMzkuMjMsMi4wNywyLjA3LDAsMCwxLC44Ni42NywyLjM3LDIuMzcsMCwwLDEsLjQ0LDEsNS44Nyw1Ljg3LDAsMCwxLC4xMywxLjMxdjRoLTJWMTAuNDVhMi44NiwyLjg2LDAsMCwwLS4yNC0xLjM3LDEsMSwwLDAsMC0uODYtLjQsMi4xMywyLjEzLDAsMCwwLS40NS4wOCwxLjg5LDEuODksMCwwLDAtLjQ3LjIsMy41NSwzLjU1LDAsMCwxLC4xMi42NWMwLC4yMywwLC40OCwwLC43NFYxNC4ySDEzWidcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz4sXG4gIHBlcmNlbnQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuICAgIDxnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTkuMSw3LjdjMCwwLjgtMC4yLDEuNS0wLjYsMS45cy0xLDAuNy0xLjcsMC43UzUuNCwxMC4xLDUsOS43UzQuMyw4LjYsNC4zLDcuN1M0LjUsNi4zLDUsNS44czEtMC43LDEuNy0wLjcgICAgIFM4LDUuNCw4LjQsNS44UzkuMSw2LjksOS4xLDcuN3ogTTcuNSw3LjdjMC0wLjUtMC4xLTAuOC0wLjItMUM3LjEsNi41LDYuOSw2LjQsNi43LDYuNGMtMC4zLDAtMC41LDAuMS0wLjYsMC4zcy0wLjIsMC41LTAuMiwxICAgICBzMC4xLDAuOCwwLjIsMUM2LjIsOSw2LjQsOS4xLDYuNyw5LjFjMC4yLDAsMC41LTAuMSwwLjYtMC4zQzcuNSw4LjUsNy41LDguMiw3LjUsNy43eiBNMTEuNyw1LjRoMS45bC01LjIsOS4zSDYuNEwxMS43LDUuNHogICAgICBNMTUuNywxMi4zYzAsMC44LTAuMiwxLjUtMC42LDEuOWMtMC40LDAuNC0xLDAuNy0xLjcsMC43cy0xLjMtMC4yLTEuNy0wLjdzLTAuNi0xLjEtMC42LTEuOWMwLTAuOCwwLjItMS41LDAuNi0xLjkgICAgIGMwLjQtMC40LDEtMC43LDEuNy0wLjdzMS4zLDAuMiwxLjcsMC43QzE1LjUsMTAuOCwxNS43LDExLjQsMTUuNywxMi4zeiBNMTQuMiwxMi4zYzAtMC41LTAuMS0wLjgtMC4yLTEgICAgIGMtMC4yLTAuMi0wLjQtMC4zLTAuNi0wLjNjLTAuMywwLTAuNSwwLjEtMC42LDAuM2MtMC4yLDAuMi0wLjIsMC41LTAuMiwxczAuMSwwLjgsMC4yLDFzMC40LDAuMywwLjYsMC4zYzAuMiwwLDAuNS0wLjEsMC42LTAuMyAgICAgQzE0LjEsMTMsMTQuMiwxMi43LDE0LjIsMTIuM3onXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+LFxuICBidXR0b25GaWxsOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIuNTggMTEuMDEnXG4gICAgY2xhc3NOYW1lPSdidXR0b24tZmlsbGVkLXN2ZydcbiAgPlxuICAgIDxyZWN0IHdpZHRoPSczMi41OCcgaGVpZ2h0PScxMS4wMScgcng9JzEnIC8+XG4gICAgPHBhdGggZD0nTTUsNy45M1YzLjA3SDguMjJWNEg2LjA2VjVIOHYuOTFINi4wNnYyWicgLz5cbiAgICA8cGF0aCBkPSdNOSwzLjA3aDEuMDlWNy45M0g5WicgLz5cbiAgICA8cGF0aCBkPSdNMTQuNDUsN3YuOTRIMTEuMjFWMy4wN0gxMi4zVjdaJyAvPlxuICAgIDxwYXRoIGQ9J00xOC40LDd2Ljk0SDE1LjE2VjMuMDdoMS4wOVY3WicgLz5cbiAgICA8cGF0aCBkPSdNMTkuMTEsNy45M1YzLjA3aDMuMjhWNEgyMC4ydjFoMS45NHYuOUgyMC4yVjdoMi4zNXYuOTJaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjcuNjIsNS41YTIuODgsMi44OCwwLDAsMS0uMiwxLjEsMi4xMSwyLjExLDAsMCwxLS41Ni43OCwyLjM4LDIuMzgsMCwwLDEtLjg4LjQ2QTQuMTMsNC4xMywwLDAsMSwyNC44Miw4Yy0uMiwwLS40MywwLS42OSwwYTYuNDgsNi40OCwwLDAsMS0uNzctLjFWMy4xM0E2LjM1LDYuMzUsMCwwLDEsMjQuMTUsM2wuNywwQTQuNDUsNC40NSwwLDAsMSwyNiwzLjE1YTIuMzIsMi4zMiwwLDAsMSwuODcuNDUsMS45MiwxLjkyLDAsMCwxLC41Ni43N0EyLjkzLDIuOTMsMCwwLDEsMjcuNjIsNS41Wk0yNC40NSw3aC40MmExLjU5LDEuNTksMCwwLDAsMS4yMi0uNDEsMS42MSwxLjYxLDAsMCwwLC40LTEuMTQsMS42MiwxLjYyLDAsMCwwLS4zOC0xLjE2QTEuNiwxLjYsMCwwLDAsMjQuOTEsNGgtLjIzbC0uMjMsMFonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBidXR0b25PdXRsaW5lOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgIHZpZXdCb3g9JzAgMCAzOS4wMSAxMi4wMSdcbiAgICBjbGFzc05hbWU9J2J1dHRvbi1vdXRsaW5lLXN2ZydcbiAgPlxuICAgIDxyZWN0XG4gICAgICBjbGFzc05hbWU9J2EnIHg9JzAuNScgeT0nMC41JyB3aWR0aD0nMzguMDEnIGhlaWdodD0nMTEuMDEnXG4gICAgICByeD0nMS4wOCdcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNOS4zOCw2QTIuODMsMi44MywwLDAsMSw5LjE5LDcuMWEyLjEyLDIuMTIsMCwwLDEtLjUxLjgsMi4xNCwyLjE0LDAsMCwxLS43Ni40OCwyLjc2LDIuNzYsMCwwLDEtMSwuMTZBMi42NSwyLjY1LDAsMCwxLDYsOC4zOGEyLjE4LDIuMTgsMCwwLDEtLjc3LS40OCwyLjE0LDIuMTQsMCwwLDEtLjUyLS44QTIuODMsMi44MywwLDAsMSw0LjU0LDZhMi44OCwyLjg4LDAsMCwxLC4xOS0xLjEsMi41NCwyLjU0LDAsMCwxLC41My0uOEEyLjMyLDIuMzIsMCwwLDEsNiwzLjYzLDIuNTgsMi41OCwwLDAsMSw3LDMuNDdhMi42OSwyLjY5LDAsMCwxLC45NC4xNiwyLjI3LDIuMjcsMCwwLDEsLjc3LjQ4LDIuMzYsMi4zNiwwLDAsMSwuNTIuOEEyLjg4LDIuODgsMCwwLDEsOS4zOCw2Wk01LjY3LDZhMi4xMSwyLjExLDAsMCwwLC4wOS42NCwxLjM4LDEuMzgsMCwwLDAsLjI1LjUsMS4xMywxLjEzLDAsMCwwLC40LjMyQTEuMzUsMS4zNSwwLDAsMCw3LDcuNThhMS4zMywxLjMzLDAsMCwwLC41NC0uMTEsMS4xNywxLjE3LDAsMCwwLC40MS0uMzIsMS41NiwxLjU2LDAsMCwwLC4yNS0uNUEyLjExLDIuMTEsMCwwLDAsOC4yNSw2YTIuMTcsMi4xNywwLDAsMC0uMDktLjY1LDEuNDcsMS40NywwLDAsMC0uMjUtLjUsMS4xNywxLjE3LDAsMCwwLS40MS0uMzJBMS4zMywxLjMzLDAsMCwwLDcsNC40M2ExLjM1LDEuMzUsMCwwLDAtLjU1LjExLDEuMTYsMS4xNiwwLDAsMC0uNC4zMywxLjMxLDEuMzEsMCwwLDAtLjI1LjVBMi4xMSwyLjExLDAsMCwwLDUuNjcsNlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTEyLjE5LDguNTRhMi41OCwyLjU4LDAsMCwxLS44OC0uMTQsMS43OSwxLjc5LDAsMCwxLS42Mi0uNCwxLjU1LDEuNTUsMCwwLDEtLjM1LS42MSwyLjQ3LDIuNDcsMCwwLDEtLjEyLS43OXYtM2gxLjFWNi41MWExLjc1LDEuNzUsMCwwLDAsLjA2LjUsMS4yLDEuMiwwLDAsMCwuMTguMzQuNzMuNzMsMCwwLDAsLjI4LjE5LDEuNDQsMS40NCwwLDAsMCwuMzcsMCwuOTIuOTIsMCwwLDAsLjY1LS4yNCwxLjE5LDEuMTksMCwwLDAsLjI0LS44NFYzLjU4aDEuMXYzYTIuNDcsMi40NywwLDAsMS0uMTIuNzksMS42MiwxLjYyLDAsMCwxLS4zNi42MSwxLjcsMS43LDAsMCwxLS42My40QTIuNjYsMi42NiwwLDAsMSwxMi4xOSw4LjU0WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00xOC44NiwzLjU4di45M0gxNy4zOVY4LjQ0SDE2LjNWNC41MUgxNC44M1YzLjU4WicgLz5cbiAgICA8cGF0aCBkPSdNMjIuODEsNy41di45NEgxOS41NlYzLjU4aDEuMDlWNy41WicgLz5cbiAgICA8cGF0aCBkPSdNMjMuNTEsMy41OEgyNC42VjguNDRIMjMuNTFaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjksOC40NHEtLjQ2LS44Mi0xLTEuNjVhMTYuMTYsMTYuMTYsMCwwLDAtMS4xNi0xLjUzVjguNDRIMjUuNzNWMy41OGguODlxLjIyLjIyLjUxLjU3dC41Ny43MmMuMi4yNS4zOS41Mi41OC43OWwuNTQuNzlWMy41OGgxLjA5VjguNDRaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zMSw4LjQ0VjMuNThoMy4yOFY0LjVIMzIuMTN2MWgxLjk0di45SDMyLjEzVjcuNTJoMi4zNXYuOTJaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbWVudVBsYWluOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM0LjAzIDguNDgnPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMi40NSwwYy4xNC4yNi4zMS41OS41LDFzLjM4LjgxLjU5LDEuMjYuNC45MS42LDEuMzhMNC43MSw1bC41Ny0xLjM0cS4zLS43LjYtMS4zOGMuMjEtLjQ1LjQtLjg3LjU5LTEuMjZTNi44My4yNiw3LDBIOC42OGMuMDguNTUuMTUsMS4xNy4yMiwxLjg1UzksMy4yNSw5LjA4LDRzLjEsMS40OC4xNCwyLjIzLjA4LDEuNDQuMTIsMi4xSDcuNTFxMC0xLjIyLS4wOS0yLjY0VDcuMjQsMi44TDYuNzUsMy45MSw2LjIzLDUuMTRsLS41LDEuMTctLjQxLDFINGMtLjExLS4yNi0uMjQtLjU4LS40MS0xTDMuMTEsNS4xNCwyLjU4LDMuOTFRMi4zMywzLjMsMi4xLDIuOCwyLDQuMjQsMS45Miw1LjY4YzAsMS0uMDcsMS44My0uMSwyLjY0SDBDMCw3LjY2LjA3LDcsLjExLDYuMjJMLjI2LDRjMC0uNzQuMTEtMS40NS4xOC0yLjE0Uy41OC41NS42NiwwWidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00xMSw4LjMyVjBoNS42MlYxLjU3SDEyLjg4VjMuMkgxNi4yVjQuNzRIMTIuODh2Mmg0VjguMzJaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjMuODYsOC4zMnEtLjgxLTEuNDQtMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M1Y4LjMySDE4LjI4VjBIMTkuOGMuMjYuMjYuNTYuNTkuODgsMXMuNjQuOCwxLDEuMjMuNjcuODksMSwxLjM2bC45MywxLjM1VjBoMS44NlY4LjMyWidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMzAuNiw4LjQ4YTQuMjcsNC4yNywwLDAsMS0xLjUxLS4yNEEyLjcxLDIuNzEsMCwwLDEsMjgsNy41NWEyLjY1LDIuNjUsMCwwLDEtLjYxLTEsNC4wNSw0LjA1LDAsMCwxLS4yLTEuMzRWMEgyOS4xVjVhMywzLDAsMCwwLC4xMS44NSwxLjU0LDEuNTQsMCwwLDAsLjMyLjU4LDEuMTMsMS4xMywwLDAsMCwuNDguMzIsMiwyLDAsMCwwLC42MS4wOSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyQTEuOTEsMS45MSwwLDAsMCwzMi4xNiw1VjBIMzRWNS4xN2E0LjQ1LDQuNDUsMCwwLDEtLjIsMS4zNSwzLDMsMCwwLDEtLjYzLDEuMDUsMi43OSwyLjc5LDAsMCwxLTEuMDYuNjdBNC40OSw0LjQ5LDAsMCwxLDMwLjYsOC40OFonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBtZW51RmlsbGVkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQyLjU2IDEzLjAxJz5cbiAgICA8cmVjdCB3aWR0aD0nNDIuNTYnIGhlaWdodD0nMTMuMDEnIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J002LjcxLDIuMjZjLjE1LjI3LjMxLjU5LjUsMXMuMzkuODEuNTksMS4yNi40MS45Mi42MSwxLjM5TDksNy4yMmMuMTgtLjQxLjM3LS44Ni41Ny0xLjMzcy40LS45NC42MS0xLjM5LjQtLjg3LjU5LTEuMjYuMzUtLjcxLjUtMWgxLjdjLjA4LjU2LjE1LDEuMTcuMjIsMS44NnMuMTMsMS4zOS4xOCwyLjEzbC4xNSwyLjIzYzAsLjc0LjA4LDEuNDUuMTEsMi4xSDExLjc4YzAtLjgxLS4wNi0xLjY5LS4xLTIuNjRTMTEuNTgsNiwxMS41LDUuMDZjLS4xNC4zNC0uMy43MS0uNDgsMS4xMnMtLjM1LjgxLS41MywxLjIyLS4zMy44LS41LDEuMTdsLS40Ljk1SDguMjhjLS4xMi0uMjYtLjI1LS41OC0uNDEtLjk1cy0uMzMtLjc2LS41LTEuMTdTNyw2LjU4LDYuODUsNi4xOEw2LjM2LDUuMDZxLS4xMiwxLjQ2LS4xOCwyLjg4dC0uMDksMi42NEg0LjI2YzAtLjY1LjA3LTEuMzYuMTItMi4xUzQuNDcsNyw0LjUyLDYuMjVzLjExLTEuNDUuMTgtMi4xMy4xNC0xLjMuMjItMS44NlonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTUuMjcsMTAuNThWMi4yNmg1LjYxVjMuODRIMTcuMTRWNS40N2gzLjMyVjdIMTcuMTRWOWg0djEuNTdaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjguMTIsMTAuNThxLS44MS0xLjQyLTEuNzQtMi44MmEyOS4yMywyOS4yMywwLDAsMC0yLTIuNjN2NS40NUgyMi41NFYyLjI2aDEuNTJjLjI3LjI3LjU2LjU5Ljg4LDFzLjY1Ljc5LDEsMS4yMy42Ni44OCwxLDEuMzUuNjMuOTIuOTIsMS4zNVYyLjI2aDEuODZ2OC4zMlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTM0Ljg2LDEwLjc1YTQuMDgsNC4wOCwwLDAsMS0xLjUxLS4yNSwyLjg1LDIuODUsMCwwLDEtMS4wNS0uNjgsMi43NCwyLjc0LDAsMCwxLS42MS0xLjA1LDQuMjcsNC4yNywwLDAsMS0uMi0xLjMzVjIuMjZoMS44N3Y1YTIuNywyLjcsMCwwLDAsLjEyLjg2LDEuNDgsMS40OCwwLDAsMCwuMzEuNTcsMSwxLDAsMCwwLC40OC4zMiwxLjc1LDEuNzUsMCwwLDAsLjYyLjFBMS41MywxLjUzLDAsMCwwLDM2LDguNzFhMiwyLDAsMCwwLC40Mi0xLjQzdi01aDEuODdWNy40NGE0LjEsNC4xLDAsMCwxLS4yLDEuMzQsMi43NiwyLjc2LDAsMCwxLS42MiwxLjA1LDIuODUsMi44NSwwLDAsMS0xLjA3LjY4QTQuNDUsNC40NSwwLDAsMSwzNC44NiwxMC43NVonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPSdzdmctdGV4dCdcbiAgICAgIGQ9J002LjcxLDIuMjZjLjE1LjI3LjMxLjU5LjUsMXMuMzkuODEuNTksMS4yNi40MS45Mi42MSwxLjM5UzguOCw2LjgsOSw3LjIybC41Ny0xLjMzYy4yLS40Ny40LS45NC42MS0xLjM5cy40LS44Ny41OS0xLjI2LjM1LS43MS41LTFoMS43Yy4wOC41Ni4xNSwxLjE3LjIyLDEuODZzLjEzLDEuMzkuMTgsMi4xM2wuMTUsMi4yM2MwLC43NC4wOCwxLjQ0LjExLDIuMUgxMS43OGMwLS44MS0uMDYtMS42OS0uMS0yLjY0UzExLjU4LDYsMTEuNSw1LjA2Yy0uMTQuMzQtLjMuNzEtLjQ4LDEuMTJzLS4zNS44MS0uNTMsMS4yMi0uMzMuOC0uNSwxLjE3bC0uNC45NUg4LjI4Yy0uMTItLjI2LS4yNS0uNTgtLjQxLS45NXMtLjMzLS43Ni0uNS0xLjE3UzcsNi41OCw2Ljg1LDYuMThMNi4zNiw1LjA2cS0uMTIsMS40Ni0uMTgsMi44OHQtLjA5LDIuNjRINC4yNmMwLS42Ni4wNy0xLjM2LjEyLTIuMVM0LjQ3LDcsNC41Miw2LjI1cy4xMS0xLjQ1LjE4LTIuMTMuMTQtMS4zLjIyLTEuODZaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT0nc3ZnLXRleHQnXG4gICAgICBkPSdNMTUuMjcsMTAuNThWMi4yNmg1LjYxVjMuODRIMTcuMTRWNS40N2gzLjMyVjdIMTcuMTRWOWg0djEuNTdaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT0nc3ZnLXRleHQnXG4gICAgICBkPSdNMjguMTIsMTAuNThxLS44MS0xLjQyLTEuNzQtMi44MmEyOS4yMywyOS4yMywwLDAsMC0yLTIuNjN2NS40NUgyMi41NFYyLjI2aDEuNTJjLjI3LjI3LjU2LjU5Ljg4LDFzLjY1Ljc5LDEsMS4yMy42Ni44OCwxLDEuMzUuNjMuOTIuOTIsMS4zNVYyLjI2aDEuODZ2OC4zMlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgY2xhc3NOYW1lPSdzdmctdGV4dCdcbiAgICAgIGQ9J00zNC44NiwxMC43NWE0LjA4LDQuMDgsMCwwLDEtMS41MS0uMjUsMi44NSwyLjg1LDAsMCwxLTEuMDUtLjY4LDIuNzQsMi43NCwwLDAsMS0uNjEtMS4wNSw0LjMxLDQuMzEsMCwwLDEtLjItMS4zM1YyLjI2aDEuODd2NWEyLjcsMi43LDAsMCwwLC4xMi44NiwxLjQ4LDEuNDgsMCwwLDAsLjMxLjU3LDEsMSwwLDAsMCwuNDguMzIsMS43NSwxLjc1LDAsMCwwLC42Mi4xQTEuNTMsMS41MywwLDAsMCwzNiw4LjcxYTIsMiwwLDAsMCwuNDItMS40M3YtNWgxLjg3VjcuNDRhNC4xNCw0LjE0LDAsMCwxLS4yLDEuMzQsMi43NiwyLjc2LDAsMCwxLS42MiwxLjA1LDIuODUsMi44NSwwLDAsMS0xLjA3LjY4QTQuNDUsNC40NSwwLDAsMSwzNC44NiwxMC43NVonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBtZW51VW5kZXJsaW5lOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgIHZpZXdCb3g9JzAgMCAzNC4wMyAxMC43NSdcbiAgICAgICAgICAgICAgICAgPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMi40NSwwYy4xNC4yNi4zMS41OS41LDFzLjM4LjgxLjU5LDEuMjYuNC45MS42LDEuMzhMNC43MSw1bC41Ny0xLjM0cS4zLS43LjYtMS4zOGMuMjEtLjQ1LjQtLjg3LjU5LTEuMjZTNi44My4yNiw3LDBIOC42OGMuMDguNTUuMTUsMS4xNy4yMiwxLjg1UzksMy4yNSw5LjA4LDRzLjEsMS40OC4xNCwyLjIzLjA4LDEuNDQuMTIsMi4xSDcuNTFxMC0xLjIyLS4wOS0yLjY0VDcuMjQsMi44TDYuNzUsMy45MSw2LjIzLDUuMTRsLS41LDEuMTctLjQxLDFINGMtLjExLS4yNi0uMjQtLjU4LS40MS0xTDMuMTEsNS4xNCwyLjU4LDMuOTFRMi4zMywzLjMsMi4xLDIuOCwyLDQuMjQsMS45Miw1LjY4YzAsMS0uMDcsMS44My0uMSwyLjY0SDBDMCw3LjY2LjA3LDcsLjExLDYuMjJMLjI2LDRjMC0uNzQuMTEtMS40NS4xOC0yLjE0Uy41OC41NS42NiwwWidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00xMSw4LjMyVjBoNS42MlYxLjU3SDEyLjg4VjMuMkgxNi4yVjQuNzRIMTIuODh2Mmg0VjguMzJaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjMuODYsOC4zMnEtLjgxLTEuNDQtMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M1Y4LjMySDE4LjI4VjBIMTkuOGMuMjYuMjYuNTYuNTkuODgsMXMuNjQuOCwxLDEuMjMuNjcuODksMSwxLjM2bC45MywxLjM1VjBoMS44NlY4LjMyWidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMzAuNiw4LjQ4YTQuMjcsNC4yNywwLDAsMS0xLjUxLS4yNEEyLjcxLDIuNzEsMCwwLDEsMjgsNy41NWEyLjY1LDIuNjUsMCwwLDEtLjYxLTEsNC4wNSw0LjA1LDAsMCwxLS4yLTEuMzRWMEgyOS4xVjVhMywzLDAsMCwwLC4xMS44NSwxLjU0LDEuNTQsMCwwLDAsLjMyLjU4LDEuMTMsMS4xMywwLDAsMCwuNDguMzIsMiwyLDAsMCwwLC42MS4wOSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyQTEuOTEsMS45MSwwLDAsMCwzMi4xNiw1VjBIMzRWNS4xN2E0LjQ1LDQuNDUsMCwwLDEtLjIsMS4zNSwzLDMsMCwwLDEtLjYzLDEuMDUsMi43OSwyLjc5LDAsMCwxLTEuMDYuNjdBNC40OSw0LjQ5LDAsMCwxLDMwLjYsOC40OFonXG4gICAgLz5cbiAgICA8cmVjdCB5PSc5LjMyJyB3aWR0aD0nMzQuMDMnIGhlaWdodD0nMS40MycgLz5cbiAgPC9zdmc+LFxuICBtZW51T3ZlcmxpbmU6IDxzdmdcbiAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgdmlld0JveD0nMCAwIDM0LjAzIDEwLjkyJ1xuICAgICAgICAgICAgICAgID5cbiAgICA8cGF0aFxuICAgICAgZD0nTTIuNDUsMi40M2MuMTQuMjcuMzEuNTkuNSwxcy4zOC44MS41OSwxLjI2LjQuOTEuNiwxLjM5bC41NywxLjMzLjU3LTEuMzNjLjItLjQ4LjQtLjk0LjYtMS4zOXMuNC0uODcuNTktMS4yNi4zNi0uNzEuNS0xSDguNjhjLjA4LjU2LjE1LDEuMTcuMjIsMS44NlM5LDUuNjgsOS4wOCw2LjQycy4xLDEuNDkuMTQsMi4yMy4wOCwxLjQ0LjEyLDIuMUg3LjUxcTAtMS4yMS0uMDktMi42NFQ3LjI0LDUuMjNMNi43NSw2LjM1Yy0uMTcuNC0uMzUuODEtLjUyLDEuMjJzLS4zNC44LS41LDEuMTdsLS40MS45NUg0Yy0uMTEtLjI2LS4yNC0uNTgtLjQxLS45NVMzLjI4LDgsMy4xMSw3LjU3cy0uMzUtLjgyLS41My0xLjIyLS4zMy0uNzgtLjQ4LTEuMTJRMiw2LjY5LDEuOTIsOC4xMWMwLDEtLjA3LDEuODMtLjEsMi42NEgwYzAtLjY2LjA3LTEuMzYuMTEtMi4xTC4yNiw2LjQyUS4zNCw1LjMxLjQ0LDQuMjlDLjUxLDMuNi41OCwzLC42NiwyLjQzWidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00xMSwxMC43NVYyLjQzaDUuNjJWNEgxMi44OFY1LjY0SDE2LjJWNy4xN0gxMi44OHYyaDR2MS41N1onIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yMy44NiwxMC43NXEtLjgxLTEuNDItMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M3Y1LjQ1SDE4LjI4VjIuNDNIMTkuOGMuMjYuMjcuNTYuNTkuODgsMXMuNjQuNzksMSwxLjIzLjY3Ljg4LDEsMS4zNWwuOTMsMS4zNVYyLjQzaDEuODZ2OC4zMlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTMwLjYsMTAuOTJhNC4yNiw0LjI2LDAsMCwxLTEuNTEtLjI1QTIuNjksMi42OSwwLDAsMSwyOCwxMGEyLjYyLDIuNjIsMCwwLDEtLjYxLTEuMDUsNCw0LDAsMCwxLS4yLTEuMzNWMi40M0gyOS4xdjVhMywzLDAsMCwwLC4xMS44NiwxLjQ5LDEuNDksMCwwLDAsLjMyLjU3QTEsMSwwLDAsMCwzMCw5LjJhMS43LDEuNywwLDAsMCwuNjEuMSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyLDEuOTQsMS45NCwwLDAsMCwuNDMtMS40M3YtNUgzNFY3LjYxQTQuNDMsNC40MywwLDAsMSwzMy44Myw5YTIuNzIsMi43MiwwLDAsMS0xLjY5LDEuNzNBNC40OSw0LjQ5LDAsMCwxLDMwLjYsMTAuOTJaJ1xuICAgIC8+XG4gICAgPHJlY3Qgd2lkdGg9JzM0LjAzJyBoZWlnaHQ9JzEuNDMnIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlcnNTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTk2IDIyNGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NC02NCAyOC43LTY0IDY0IDI4LjcgNjQgNjQgNjR6bTQ0OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0LTY0IDI4LjctNjQgNjQgMjguNyA2NCA2NCA2NHptMzIgMzJoLTY0Yy0xNy42IDAtMzMuNSA3LjEtNDUuMSAxOC42IDQwLjMgMjIuMSA2OC45IDYyIDc1LjEgMTA5LjRoNjZjMTcuNyAwIDMyLTE0LjMgMzItMzJ2LTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0em0tMjU2IDBjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMzgxLjkgMzIgMzIwIDMyIDIwOCA4Mi4xIDIwOCAxNDRzNTAuMSAxMTIgMTEyIDExMnptNzYuOCAzMmgtOC4zYy0yMC44IDEwLTQzLjkgMTYtNjguNSAxNnMtNDcuNi02LTY4LjUtMTZoLTguM0MxNzkuNiAyODggMTI4IDMzOS42IDEyOCA0MDMuMlY0MzJjMCAyNi41IDIxLjUgNDggNDggNDhoMjg4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yOC44YzAtNjMuNi01MS42LTExNS4yLTExNS4yLTExNS4yem0tMjIzLjctMTMuNEMxNjEuNSAyNjMuMSAxNDUuNiAyNTYgMTI4IDI1Nkg2NGMtMzUuMyAwLTY0IDI4LjctNjQgNjR2MzJjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjUuOWM2LjMtNDcuNCAzNC45LTg3LjMgNzUuMi0xMDkuNHonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTE5MiAyNTZjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMjUzLjkgMzIgMTkyIDMyIDgwIDgyLjEgODAgMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDNTEuNiAyODggMCAzMzkuNiAwIDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6TTQ4MCAyNTZjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTYtOTYgNDMtOTYgOTYgNDMgOTYgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmMyNi41IDAgNDgtMjEuNSA0OC00OCAwLTYxLjktNTAuMS0xMTItMTEyLTExMnonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yMjQgMjU2YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4UzI5NC43IDAgMjI0IDAgOTYgNTcuMyA5NiAxMjhzNTcuMyAxMjggMTI4IDEyOHptODkuNiAzMmgtMTYuN2MtMjIuMiAxMC4yLTQ2LjkgMTYtNzIuOSAxNnMtNTAuNi01LjgtNzIuOS0xNmgtMTYuN0M2MC4yIDI4OCAwIDM0OC4yIDAgNDIyLjRWNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OHYtNDEuNmMwLTc0LjItNjAuMi0xMzQuNC0xMzQuNC0xMzQuNHonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyUmVndWxhcjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTMxMy42IDMwNGMtMjguNyAwLTQyLjUgMTYtODkuNiAxNi00Ny4xIDAtNjAuOC0xNi04OS42LTE2QzYwLjIgMzA0IDAgMzY0LjIgMCA0MzguNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yNS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40ek00MDAgNDY0SDQ4di0yNS42YzAtNDcuNiAzOC44LTg2LjQgODYuNC04Ni40IDE0LjYgMCAzOC4zIDE2IDg5LjYgMTYgNTEuNyAwIDc0LjktMTYgODkuNi0xNiA0Ny42IDAgODYuNCAzOC44IDg2LjQgODYuNFY0NjR6TTIyNCAyODhjNzkuNSAwIDE0NC02NC41IDE0NC0xNDRTMzAzLjUgMCAyMjQgMCA4MCA2NC41IDgwIDE0NHM2NC41IDE0NCAxNDQgMTQ0em0wLTI0MGM1Mi45IDAgOTYgNDMuMSA5NiA5NnMtNDMuMSA5Ni05NiA5Ni05Ni00My4xLTk2LTk2IDQzLjEtOTYgOTYtOTZ6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclRhZ1NvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNjMwLjYgMzY0LjlsLTkwLjMtOTAuMmMtMTItMTItMjguMy0xOC43LTQ1LjMtMTguN2gtNzkuM2MtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NzkuMmMwIDE3IDYuNyAzMy4yIDE4LjcgNDUuMmw5MC4zIDkwLjJjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsOTIuNS05Mi41YzEyLjYtMTIuNSAxMi42LTMyLjcuMS00NS4yem0tMTgyLjgtMjFjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjQgMjQgMTAuNyAyNCAyNGMwIDEzLjItMTAuNyAyNC0yNCAyNHptLTIyMy44LTg4YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4QzM1MiA1Ny4zIDI5NC43IDAgMjI0IDBTOTYgNTcuMyA5NiAxMjhjMCA3MC42IDU3LjMgMTI3LjkgMTI4IDEyNy45em0xMjcuOCAxMTEuMlYyOTRjLTEyLjItMy42LTI0LjktNi4yLTM4LjItNi4yaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg3LjkgMCAzNDguMSAwIDQyMi4zdjQxLjZjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzE1LjUgMCAyOS4xLTcuNSAzNy45LTE4LjlsLTU4LTU4Yy0xOC4xLTE4LjEtMjguMS00Mi4yLTI4LjEtNjcuOXonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyQWx0U29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yNTYgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMzNS41IDAgMjU2IDAgMTEyIDY0LjUgMTEyIDE0NHM2NC41IDE0NCAxNDQgMTQ0em0xMjggMzJoLTU1LjFjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZIMTI4QzU3LjMgMzIwIDAgMzc3LjMgMCA0NDh2MTZjMCAyNi41IDIxLjUgNDggNDggNDhoNDE2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0xNmMwLTcwLjctNTcuMy0xMjgtMTI4LTEyOHonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBteUFjY291bnRVc2VyQXZhdGFyOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgIDxwYXRoIGQ9J00yNTYgOEMxMTkuMyA4IDggMTE5LjIgOCAyNTZjMCAxMzYuNyAxMTEuMyAyNDggMjQ4IDI0OHMyNDgtMTExLjMgMjQ4LTI0OEM1MDQgMTE5LjIgMzkyLjcgOCAyNTYgOHpNMzMgMjU2YzAtMzIuMyA2LjktNjMgMTkuMy05MC43bDEwNi40IDI5MS40Qzg0LjMgNDIwLjUgMzMgMzQ0LjIgMzMgMjU2em0yMjMgMjIzYy0yMS45IDAtNDMtMy4yLTYzLTkuMWw2Ni45LTE5NC40IDY4LjUgMTg3LjhjLjUgMS4xIDEgMi4xIDEuNiAzLjEtMjMuMSA4LjEtNDggMTIuNi03NCAxMi42em0zMC43LTMyNy41YzEzLjQtLjcgMjUuNS0yLjEgMjUuNS0yLjEgMTItMS40IDEwLjYtMTkuMS0xLjQtMTguNCAwIDAtMzYuMSAyLjgtNTkuNCAyLjgtMjEuOSAwLTU4LjctMi44LTU4LjctMi44LTEyLS43LTEzLjQgMTcuNy0xLjQgMTguNCAwIDAgMTEuNCAxLjQgMjMuNCAyLjFsMzQuNyA5NS4yTDIwMC42IDM5M2wtODEuMi0yNDEuNWMxMy40LS43IDI1LjUtMi4xIDI1LjUtMi4xIDEyLTEuNCAxMC42LTE5LjEtMS40LTE4LjQgMCAwLTM2LjEgMi44LTU5LjQgMi44LTQuMiAwLTkuMS0uMS0xNC40LS4zQzEwOS42IDczIDE3OC4xIDMzIDI1NiAzM2M1OCAwIDExMC45IDIyLjIgMTUwLjYgNTguNS0xLS4xLTEuOS0uMi0yLjktLjItMjEuOSAwLTM3LjQgMTkuMS0zNy40IDM5LjYgMCAxOC40IDEwLjYgMzMuOSAyMS45IDUyLjMgOC41IDE0LjggMTguNCAzMy45IDE4LjQgNjEuNSAwIDE5LjEtNy4zIDQxLjItMTcgNzIuMWwtMjIuMiA3NC4zLTgwLjctMjM5LjZ6bTgxLjQgMjk3LjJsNjguMS0xOTYuOWMxMi43LTMxLjggMTctNTcuMiAxNy03OS45IDAtOC4yLS41LTE1LjgtMS41LTIyLjkgMTcuNCAzMS44IDI3LjMgNjguMiAyNy4zIDEwNyAwIDgyLjMtNDQuNiAxNTQuMS0xMTAuOSAxOTIuN3onIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50Tm9uZTogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNTIgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI0Mi43MiAyNTZsMTAwLjA3LTEwMC4wN2MxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4bC0yMi4yNC0yMi4yNGMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEwxNzYgMTg5LjI4IDc1LjkzIDg5LjIxYy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDkuMjEgMTExLjQ1Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4TDEwOS4yOCAyNTYgOS4yMSAzNTYuMDdjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhsMjIuMjQgMjIuMjRjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwTDE3NiAzMjIuNzJsMTAwLjA3IDEwMC4wN2MxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBsMjIuMjQtMjIuMjRjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OEwyNDIuNzIgMjU2eidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGUxOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE3OTIgMTc5Mic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J003MDQgMTUzNnEwIDUyLTM4IDkwdC05MCAzOC05MC0zOC0zOC05MCAzOC05MCA5MC0zOCA5MCAzOCAzOCA5MHptODk2IDBxMCA1Mi0zOCA5MHQtOTAgMzgtOTAtMzgtMzgtOTAgMzgtOTAgOTAtMzggOTAgMzggMzggOTB6bTEyOC0xMDg4djUxMnEwIDI0LTE2LjUgNDIuNXQtNDAuNSAyMS41bC0xMDQ0IDEyMnExMyA2MCAxMyA3MCAwIDE2LTI0IDY0aDkyMHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1LTQ1IDE5aC0xMDI0cS0yNiAwLTQ1LTE5dC0xOS00NXEwLTExIDgtMzEuNXQxNi0zNiAyMS41LTQwIDE1LjUtMjkuNWwtMTc3LTgyM2gtMjA0cS0yNiAwLTQ1LTE5dC0xOS00NSAxOS00NSA0NS0xOWgyNTZxMTYgMCAyOC41IDYuNXQxOS41IDE1LjUgMTMgMjQuNSA4IDI2IDUuNSAyOS41IDQuNSAyNmgxMjAxcTI2IDAgNDUgMTl0MTkgNDV6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTI6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J001MDQuNzE3IDMyMEgyMTEuNTcybDYuNTQ1IDMyaDI2OC40MThjMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC01LjUxNyAyNC4yNzZDNTIzLjExMiA0MTQuNjY4IDUzNiA0MzMuODI4IDUzNiA0NTZjMCAzMS4yMDItMjUuNTE5IDU2LjQ0NC01Ni44MjQgNTUuOTk0LTI5LjgyMy0uNDI5LTU0LjM1LTI0LjYzMS01NS4xNTUtNTQuNDQ3LS40NC0xNi4yODcgNi4wODUtMzEuMDQ5IDE2LjgwMy00MS41NDhIMjMxLjE3NkMyNDEuNTUzIDQyNi4xNjUgMjQ4IDQ0MC4zMjYgMjQ4IDQ1NmMwIDMxLjgxMy0yNi41MjggNTcuNDMxLTU4LjY3IDU1LjkzOC0yOC41NC0xLjMyNS01MS43NTEtMjQuMzg1LTUzLjI1MS01Mi45MTctMS4xNTgtMjIuMDM0IDEwLjQzNi00MS40NTUgMjguMDUxLTUxLjU4Nkw5My44ODMgNjRIMjRDMTAuNzQ1IDY0IDAgNTMuMjU1IDAgNDBWMjRDMCAxMC43NDUgMTAuNzQ1IDAgMjQgMGgxMDIuNTI5YzExLjQwMSAwIDIxLjIyOCA4LjAyMSAyMy41MTMgMTkuMTlMMTU5LjIwOCA2NEg1NTEuOTljMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC00Ny4yNzMgMjA4QzUyNS42MzcgMzEyLjI0NiA1MTUuOTIzIDMyMCA1MDQuNzE3IDMyMHpNNDA4IDE2OGgtNDh2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZoLTE2Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djQwaC00OGMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnYxNmMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDQ4djQwYzAgOC44MzcgNy4xNjMgMTYgMTYgMTZoMTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBoNDhjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtMTZjMC04LjgzNy03LjE2My0xNi0xNi0xNnonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlMzogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTUwNC43MTcgMzIwSDIxMS41NzJsNi41NDUgMzJoMjY4LjQxOGMxNS40MDEgMCAyNi44MTYgMTQuMzAxIDIzLjQwMyAyOS4zMTlsLTUuNTE3IDI0LjI3NkM1MjMuMTEyIDQxNC42NjggNTM2IDQzMy44MjggNTM2IDQ1NmMwIDMxLjIwMi0yNS41MTkgNTYuNDQ0LTU2LjgyNCA1NS45OTQtMjkuODIzLS40MjktNTQuMzUtMjQuNjMxLTU1LjE1NS01NC40NDctLjQ0LTE2LjI4NyA2LjA4NS0zMS4wNDkgMTYuODAzLTQxLjU0OEgyMzEuMTc2QzI0MS41NTMgNDI2LjE2NSAyNDggNDQwLjMyNiAyNDggNDU2YzAgMzEuODEzLTI2LjUyOCA1Ny40MzEtNTguNjcgNTUuOTM4LTI4LjU0LTEuMzI1LTUxLjc1MS0yNC4zODUtNTMuMjUxLTUyLjkxNy0xLjE1OC0yMi4wMzQgMTAuNDM2LTQxLjQ1NSAyOC4wNTEtNTEuNTg2TDkzLjg4MyA2NEgyNEMxMC43NDUgNjQgMCA1My4yNTUgMCA0MFYyNEMwIDEwLjc0NSAxMC43NDUgMCAyNCAwaDEwMi41MjljMTEuNDAxIDAgMjEuMjI4IDguMDIxIDIzLjUxMyAxOS4xOUwxNTkuMjA4IDY0SDU1MS45OWMxNS40MDEgMCAyNi44MTYgMTQuMzAxIDIzLjQwMyAyOS4zMTlsLTQ3LjI3MyAyMDhDNTI1LjYzNyAzMTIuMjQ2IDUxNS45MjMgMzIwIDUwNC43MTcgMzIwek00MDMuMDI5IDE5MkgzNjB2LTYwYzAtNi42MjctNS4zNzMtMTItMTItMTJoLTI0Yy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjYwaC00My4wMjljLTEwLjY5MSAwLTE2LjA0NSAxMi45MjYtOC40ODUgMjAuNDg1bDY3LjAyOSA2Ny4wMjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDY3LjAyOS02Ny4wMjljNy41NTktNy41NTkgMi4yMDUtMjAuNDg1LTguNDg2LTIwLjQ4NXonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlNDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTU3NiAyMTZ2MTZjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0aC04bC0yNi4xMTMgMTgyLjc4OEM1MTQuNTA5IDQ2Mi40MzUgNDk0LjI1NyA0ODAgNDcwLjM3IDQ4MEgxMDUuNjNjLTIzLjg4NyAwLTQ0LjEzOS0xNy41NjUtNDcuNTE4LTQxLjIxMkwzMiAyNTZoLThjLTEzLjI1NSAwLTI0LTEwLjc0NS0yNC0yNHYtMTZjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0aDY3LjM0MWwxMDYuNzgtMTQ2LjgyMWMxMC4zOTUtMTQuMjkyIDMwLjQwNy0xNy40NTMgNDQuNzAxLTcuMDU4IDE0LjI5MyAxMC4zOTUgMTcuNDUzIDMwLjQwOCA3LjA1OCA0NC43MDFMMTcwLjQ3NyAxOTJoMjM1LjA0NkwzMjYuMTIgODIuODIxYy0xMC4zOTUtMTQuMjkyLTcuMjM0LTM0LjMwNiA3LjA1OS00NC43MDEgMTQuMjkxLTEwLjM5NSAzNC4zMDYtNy4yMzUgNDQuNzAxIDcuMDU4TDQ4NC42NTkgMTkySDU1MmMxMy4yNTUgMCAyNCAxMC43NDUgMjQgMjR6TTMxMiAzOTJWMjgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRzMjQtMTAuNzQ1IDI0LTI0em0xMTIgMFYyODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0cy0yNCAxMC43NDUtMjQgMjR2MTEyYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHMyNC0xMC43NDUgMjQtMjR6bS0yMjQgMFYyODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0cy0yNCAxMC43NDUtMjQgMjR2MTEyYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHMyNC0xMC43NDUgMjQtMjR6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTU6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zMjAgMzg0SDEyOFYyMjRINjR2MjU2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDI1NmMxNy43IDAgMzItMTQuMyAzMi0zMlYyMjRoLTY0djE2MHptMzE0LjYtMjQxLjhsLTg1LjMtMTI4Yy02LTguOS0xNi0xNC4yLTI2LjctMTQuMkgxMTcuNGMtMTAuNyAwLTIwLjcgNS4zLTI2LjYgMTQuMmwtODUuMyAxMjhjLTE0LjIgMjEuMyAxIDQ5LjggMjYuNiA0OS44SDYwOGMyNS41IDAgNDAuNy0yOC41IDI2LjYtNDkuOHpNNTEyIDQ5NmMwIDguOCA3LjIgMTYgMTYgMTZoMzJjOC44IDAgMTYtNy4yIDE2LTE2VjIyNGgtNjR2MjcyeidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGU2OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDYxNiA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNjAyIDExOC42TDUzNy4xIDE1QzUzMS4zIDUuNyA1MjEgMCA1MTAgMEgxMDZDOTUgMCA4NC43IDUuNyA3OC45IDE1TDE0IDExOC42Yy0zMy41IDUzLjUtMy44IDEyNy45IDU4LjggMTM2LjQgNC41LjYgOS4xLjkgMTMuNy45IDI5LjYgMCA1NS44LTEzIDczLjgtMzMuMSAxOCAyMC4xIDQ0LjMgMzMuMSA3My44IDMzLjEgMjkuNiAwIDU1LjgtMTMgNzMuOC0zMy4xIDE4IDIwLjEgNDQuMyAzMy4xIDczLjggMzMuMSAyOS42IDAgNTUuOC0xMyA3My44LTMzLjEgMTguMSAyMC4xIDQ0LjMgMzMuMSA3My44IDMzLjEgNC43IDAgOS4yLS4zIDEzLjctLjkgNjIuOC04LjQgOTIuNi04Mi44IDU5LTEzNi40ek01MjkuNSAyODhjLTEwIDAtMTkuOS0xLjUtMjkuNS0zLjhWMzg0SDExNnYtOTkuOGMtOS42IDIuMi0xOS41IDMuOC0yOS41IDMuOC02IDAtMTIuMS0uNC0xOC0xLjItNS42LS44LTExLjEtMi4xLTE2LjQtMy42VjQ4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg0NDhjMTcuNyAwIDMyLTE0LjMgMzItMzJWMjgzLjJjLTUuNCAxLjYtMTAuOCAyLjktMTYuNCAzLjYtNi4xLjgtMTIuMSAxLjItMTguMiAxLjJ6J1xuICAgIC8+XG4gIDwvc3ZnPlxufVxuXG5leHBvcnQgZGVmYXVsdCBTVkdcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgTmV2ZVJlYWN0Q3VzdG9taXplICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBEcm9wZG93bk1lbnUsIE1lbnVHcm91cCwgTWVudUl0ZW0gfSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgRHluYW1pY0ZpZWxkSW5zZXJ0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZ2V0T3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucy5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgb25TZWxlY3QsIGFsbG93ZWRPcHRpb25zVHlwZXMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhbGxPcHRpb25zID0gTmV2ZVJlYWN0Q3VzdG9taXplLmR5bmFtaWNUYWdzLm9wdGlvbnNcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgIGFsbE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uR3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdXG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25Hcm91cC5jb250cm9scylcbiAgICAgICAgLmZvckVhY2goKHNsdWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKCFhbGxvd2VkT3B0aW9uc1R5cGVzLmluY2x1ZGVzKFxuICAgICAgICAgICAgb3B0aW9uR3JvdXAuY29udHJvbHNbc2x1Z10udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKFxuICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdChzbHVnLCBvcHRpb25Hcm91cC5jb250cm9sc1tzbHVnXS50eXBlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b3B0aW9uR3JvdXAuY29udHJvbHNbc2x1Z10ubGFiZWx9XG4gICAgICAgICAgICA8L01lbnVJdGVtPilcbiAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgPE1lbnVHcm91cCBsYWJlbD17b3B0aW9uR3JvdXAubGFiZWx9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9NZW51R3JvdXA+XG4gICAgICApXG4gICAgfSlcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGljb249J2ltYWdlLWZpbHRlcidcbiAgICAgICAgbGFiZWw9e19fKCdJbnNlcnQgRHluYW1pYyBUYWcnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICB7KCkgPT4gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHt0aGlzLmdldE9wdGlvbnMoKX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgKVxuICB9XG59XG5cbkR5bmFtaWNGaWVsZEluc2VydGVyLnByb3BUeXBlcyA9IHtcbiAgYWxsb3dlZE9wdGlvbnNUeXBlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNGaWVsZEluc2VydGVyXG4iLCIvKiBnbG9iYWwgTmV2ZVJlYWN0Q3VzdG9taXplICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBEeW5hbWljRmllbGRJbnNlcnRlciBmcm9tICcuL2R5bmFtaWMtZmllbGQtaW5zZXJ0ZXIuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGR5bmFtaWMgdGFnIGJ1dHRvbnMuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59fHt2b2lkfVxuICovXG5leHBvcnQgY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFOZXZlUmVhY3RDdXN0b21pemUuZHluYW1pY1RhZ3MpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBjb250cm9scyA9IE5ldmVSZWFjdEN1c3RvbWl6ZS5keW5hbWljVGFncy5jb250cm9sc1xuICBOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb24gPSB7fVxuICBPYmplY3Qua2V5cyhjb250cm9scykuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbElkLCBpbmRleCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB3cC5jdXN0b21pemUuY29udHJvbChjb250cm9sSWQpXG4gICAgY29uc3QgY29udGFpbmVyID0gY29udHJvbC5jb250YWluZXJbMF1cbiAgICBjb25zdCBkeW5hbWljQ29udHJvbFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgZHluYW1pY0NvbnRyb2xXcmFwLnNldEF0dHJpYnV0ZSgnaWQnLCBgZHluYW1pYy0ke2NvbnRyb2xJZH1gKVxuICAgIGR5bmFtaWNDb250cm9sV3JhcC5jbGFzc0xpc3QuYWRkKCduZXZlLWR5bmFtaWMtdGFnLXNlbGVjdG9yJylcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV2ZS1oYXMtZHluYW1pYy10YWctc2VsZWN0b3InKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkeW5hbWljQ29udHJvbFdyYXApXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtY3VzdG9taXplLXNldHRpbmctbGluaz1cIiR7Y29udHJvbC5pZH1cIl1gKVxuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uW2NvbnRyb2xJZF0gPSB7XG4gICAgICAgIHN0YXJ0OiBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgZW5kOiBlLnRhcmdldC5zZWxlY3Rpb25FbmRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmVuZGVyKFxuICAgICAgPER5bmFtaWNGaWVsZEluc2VydGVyXG4gICAgICAgIGFsbG93ZWRPcHRpb25zVHlwZXM9e1xuICAgICAgICAgIGNvbnRyb2xzW2NvbnRyb2xJZF1cbiAgICAgICAgfVxuICAgICAgICBvblNlbGVjdD17XG4gICAgICAgICAgKG1hZ2ljVGFnLCBncm91cCkgPT4gYWRkVG9GaWVsZChtYWdpY1RhZywgY29udHJvbCwgZ3JvdXApXG4gICAgICAgIH1cbiAgICAgIC8+LFxuICAgICAgZHluYW1pY0NvbnRyb2xXcmFwXG4gICAgKVxuICB9KVxufVxuXG4vKipcbiAqIEFkZCBkeW5hbWljIHRhZyB0byBpbnB1dCBmaWVsZC5cbiAqIEBwYXJhbSBtYWdpY1RhZ1xuICogQHBhcmFtIGNvbnRyb2xcbiAqIEBwYXJhbSBvcHRpb25UeXBlXG4gKi9cbmNvbnN0IGFkZFRvRmllbGQgPSBmdW5jdGlvbiAobWFnaWNUYWcsIGNvbnRyb2wsIG9wdGlvblR5cGUpIHtcbiAgbGV0IHRhZ1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLWN1c3RvbWl6ZS1zZXR0aW5nLWxpbms9XCIke2NvbnRyb2wuaWR9XCJdYClcblxuICBpZiAob3B0aW9uVHlwZSA9PT0gJ3VybCcgJiYgY29udHJvbC5wYXJhbXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgIHRhZyA9IGA8YSBocmVmPVwieyR7bWFnaWNUYWd9fVwiPkxpbms8L2E+YFxuICB9IGVsc2Uge1xuICAgIHRhZyA9IGB7JHttYWdpY1RhZ319YFxuICB9XG5cbiAgaWYgKG9wdGlvblR5cGUgPT09ICd1cmwnICYmIGlucHV0LnZhbHVlID09PSAnIycpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHRhZ1xuICB9IGVsc2UgaWYgKE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sLmlkXSkge1xuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uW2NvbnRyb2wuaWRdXG4gICAgY29uc3QgbGVuZ3RoID0gaW5wdXQudmFsdWUubGVuZ3RoXG4gICAgaW5wdXQudmFsdWUgPVxuICAgICAgaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KSArIHRhZyArXG4gICAgICBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoZW5kLCBsZW5ndGgpXG4gIH0gZWxzZSB7XG4gICAgaW5wdXQudmFsdWUgKz0gdGFnXG4gIH1cbiAgTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uW2NvbnRyb2wuaWRdID0gZmFsc2VcbiAgaW5wdXQuZm9jdXMoKVxuICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpXG59XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IEZvbnRGYW1pbHlDb21wb25lbnQgZnJvbSAnLi9Gb250RmFtaWx5Q29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEZvbnRGYW1pbHlDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxGb250RmFtaWx5Q29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEZvbnRGYW1pbHlTZWxlY3RvciBmcm9tICcuL0ZvbnRGYW1pbHlTZWxlY3Rvci5qcydcblxuY29uc3Qge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50XG59ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY2xhc3MgVHlwZWZhY2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9udEZhbWlseTogdmFsdWUsXG4gICAgICBmb250RmFtaWx5U291cmNlOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgIGRlZmF1bHRfaXNfaW5oZXJpdDogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQYXJhbXMgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycyA/IHtcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXG4gICAgICAuLi5KU09OLnBhcnNlKCBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycyApXG4gICAgfSA6IGRlZmF1bHRQYXJhbXNcbiAgfVxuXG4gIG1heWJlX2dldF90eXBla2l0X2ZvbnQoZm9udCkge1xuICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBOZXZlUmVhY3RDdXN0b21pemUsICd0eXBla2l0U2x1Z3MnICkgPT09IGZhbHNlICkge1xuICAgICAgcmV0dXJuIGZvbnRcbiAgICB9XG4gICAgY29uc3QgdHlwZWtpdFNsdWdzID0gTmV2ZVJlYWN0Q3VzdG9taXplLnR5cGVraXRTbHVnc1xuICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCB0eXBla2l0U2x1Z3MsIGZvbnQgKSApIHtcbiAgICAgIHJldHVybiB0eXBla2l0U2x1Z3NbZm9udF1cbiAgICB9XG4gICAgcmV0dXJuIGZvbnRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS10eXBlZmFjZS1jb250cm9sIG5ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sJz5cbiAgICAgICAgICA8Rm9udEZhbWlseVNlbGVjdG9yXG4gICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mb250RmFtaWx5fVxuICAgICAgICAgICAgb25Gb250Q2hvaWNlPXsoZm9udEZhbWlseVNvdXJjZSwgZm9udEZhbWlseSkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKCB7IGZvbnRGYW1pbHksIGZvbnRGYW1pbHlTb3VyY2UgfSApXG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlQ29udHJvbCgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW5oZXJpdERlZmF1bHQ9e3RoaXMuY29udHJvbFBhcmFtcy5kZWZhdWx0X2lzX2luaGVyaXR9XG4gICAgICAgICAgICBtYXliZUdldFR5cGVraXQ9e3RoaXMubWF5YmVfZ2V0X3R5cGVraXRfZm9udH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgdXBkYXRlQ29udHJvbCgpIHtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoIHRoaXMubWF5YmVfZ2V0X3R5cGVraXRfZm9udCh0aGlzLnN0YXRlLmZvbnRGYW1pbHkpIClcbiAgICAgIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZXIuc2VuZCggJ2ZvbnQtc2VsZWN0aW9uJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5tYXliZV9nZXRfdHlwZWtpdF9mb250KHRoaXMuc3RhdGUuZm9udEZhbWlseSksXG4gICAgICAgIHNvdXJjZTogdGhpcy5zdGF0ZS5mb250RmFtaWx5U291cmNlLFxuICAgICAgICBjb250cm9sSWQ6IHRoaXMucHJvcHMuY29udHJvbC5pZCxcbiAgICAgICAgdHlwZTogJ1xcXFxOZXZlXFxcXEN1c3RvbWl6ZXJcXFxcQ29udHJvbHNcXFxcUmVhY3RcXFxcRm9udF9GYW1pbHknLFxuICAgICAgICBpbmhlcml0OiB0aGlzLmNvbnRyb2xQYXJhbXMuZGVmYXVsdF9pc19pbmhlcml0XG4gICAgICB9IClcbiAgICB9LCAxMDAgKVxuICB9XG59XG5cblR5cGVmYWNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVmYWNlQ29tcG9uZW50XG4iLCIvKiBnbG9iYWwgd3AsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuaW1wb3J0IEZvbnRQcmV2aWV3TGluayBmcm9tICcuL0ZvbnRQcmV2aWV3TGluay5qcydcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmNvbnN0IHtcbiAgUG9wb3ZlcixcbiAgQnV0dG9uLFxuICBUZXh0Q29udHJvbCxcbiAgRGFzaGljb25cbn0gPSB3cC5jb21wb25lbnRzXG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgRm9udEZhbWlseVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9udHM6IE5ldmVSZWFjdEN1c3RvbWl6ZS5mb250cyxcbiAgICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgbG9hZFVudGlsOiAyMCxcbiAgICAgIGRlbGF5Rm9udEluY2x1c2lvbjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGdldEZvbnRzKCkge1xuICAgIGNvbnN0IGZvbnRHcm91cHMgPSB0aGlzLnN0YXRlLmZvbnRzXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCByZXN1bHQgPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZm9udEdyb3VwcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJlc3VsdFtrZXldID0gZm9udEdyb3Vwc1trZXldLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyhzZWxmLnN0YXRlLnNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGdldEZvbnRMaXN0KCkge1xuICAgIGNvbnN0IGZvbnRHcm91cHMgPSB0aGlzLmdldEZvbnRzKClcbiAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgb3B0aW9ucy5wdXNoKFxuICAgICAgPGxpIGNsYXNzTmFtZT17J2RlZmF1bHQtdmFsdWUgJyArICF0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICAgID8gJ3NlbGVjdGVkJ1xuICAgICAgICA6ICcnfVxuICAgICAgPlxuICAgICAgICA8Rm9udFByZXZpZXdMaW5rXG4gICAgICAgICAgZm9udEZhY2U9J2RlZmF1bHQnXG4gICAgICAgICAgZGVsYXlMb2FkPXtmYWxzZX1cbiAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5pbmhlcml0RGVmYXVsdFxuICAgICAgICAgICAgPyBfXygnSW5oZXJpdCcsICduZXZlJylcbiAgICAgICAgICAgIDogX18oJ0RlZmF1bHQnLCAnbmV2ZScpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9udENob2ljZSgnc3lzdGVtJywgZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGk+XG4gICAgKVxuICAgIE9iamVjdC5rZXlzKGZvbnRHcm91cHMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBmb250R3JvdXBzW2tleV0ubGVuZ3RoID4gMCAmJiBvcHRpb25zLnB1c2goXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2ZvbnQtZ3JvdXAtaGVhZGVyJz5cbiAgICAgICAgICB7a2V5fVxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgICAgZm9udEdyb3Vwc1trZXldLm1hcCgoZm9udCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgc2VsZi5zdGF0ZS5sb2FkVW50aWwpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIGZvbnQgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgKSA/ICdzZWxlY3RlZCcgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udFByZXZpZXdMaW5rXG4gICAgICAgICAgICAgICAgZGVsYXlMb2FkPXt0aGlzLnN0YXRlLmRlbGF5Rm9udEluY2x1c2lvbn1cbiAgICAgICAgICAgICAgICBsYWJlbD17Zm9udH1cbiAgICAgICAgICAgICAgICBmb250RmFjZT17dGhpcy5wcm9wcy5tYXliZUdldFR5cGVraXQoZm9udCl9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9udENob2ljZShrZXksIGZvbnQpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZFVudGlsIDwgb3B0aW9ucy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5zZWFyY2ggPT09ICcnKSB7XG4gICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2xvYWQtbW9yZSc+XG4gICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3JcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGxvYWRVbnRpbDogKHNlbGYuc3RhdGUubG9hZFVudGlsICsgNSksXG4gICAgICAgICAgICAgICAgICBkZWxheUZvbnRJbmNsdXNpb246IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj0naW1hZ2UtZmlsdGVyJyAvPlxuICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wb3Zlci1jb250ZW50Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncG9wb3Zlci1oZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnU2VhcmNoJywgJ25ldmUnKSArICcuLi4nfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkVW50aWw6IDIwXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgICAgIGlzRGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgICAgPjxEYXNoaWNvbiBpY29uPSdubycgLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduZXZlLWZvbnRzLWxpc3QnPlxuICAgICAgICAgICAge29wdGlvbnMubGVuZ3RoID8gb3B0aW9uc1xuICAgICAgICAgICAgICA6IDxsaSBjbGFzc05hbWU9J25vLXJlc3VsdCc+e19fKCdObyByZXN1bHRzLicsICduZXZlJyl9PC9saT59XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgIGNvbnN0IGRlZmF1bHRGb250ZmFjZSA9ICctYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWYnXG4gICAgY29uc3QgZm9udCA9IHRoaXMucHJvcHMubWF5YmVHZXRUeXBla2l0KCB0aGlzLnByb3BzLnNlbGVjdGVkIClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtZm9udC1mYW1pbHktY29udHJvbCc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgIHtfXygnRm9udCBGYW1pbHknLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2ZvbnQtZmFtaWx5LXNlbGVjdG9yLXRvZ2dsZSdcbiAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmYtbmFtZSc+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgICAgICAgKHRoaXMucHJvcHMuaW5oZXJpdERlZmF1bHRcbiAgICAgICAgICAgICAgPyBfXygnSW5oZXJpdCcsICduZXZlJylcbiAgICAgICAgICAgICAgOiBfXygnRGVmYXVsdCcsICduZXZlJykpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmZi1wcmV2aWV3J1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogZm9udCB8fCBkZWZhdWx0Rm9udGZhY2VcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPkFiY1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249J2JvdHRvbSBsZWZ0J1xuICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvbnRzID8gdGhpcy5nZXRGb250TGlzdCgpXG4gICAgICAgICAgICAgICAgOiBfXygnTG9hZGluZy4uLicsICduZXZlJyl9XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRm9udEZhbWlseVNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgb25Gb250Q2hvaWNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtYXliZUdldFR5cGVraXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGluaGVyaXREZWZhdWx0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb250RmFtaWx5U2VsZWN0b3JcbiIsIi8qIGdsb2JhbCB3cCAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcidcblxuY29uc3Qge1xuICBDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIEZvbnRQcmV2aWV3TGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJldmlld1dhc1JlbmRlcmVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFjZSArICcsIHNhbnMtc2VyaWYnIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduZXZlLWZvbnQtZmFtaWx5Jz57dGhpcy5wcm9wcy5sYWJlbCB8fCB0aGlzLnByb3BzLmZvbnRGYWNlfTwvc3Bhbj5cbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHtcbiAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1dhc1JlbmRlcmVkOiB0cnVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHRoaXMuc3RhdGUucHJldmlld1dhc1JlbmRlcmVkIHx8IHRoaXMucHJvcHMuZGVsYXlMb2FkID09PVxuICAgICAgICAgICAgICBmYWxzZSlcbiAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9J25ldmUtZm9udC1wcmV2aWV3JyBzdHlsZT17c3R5bGV9PkFiYzwvc3Bhbj5cbiAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9J25ldmUtZm9udC1wcmV2aWV3ICc+Li4uPC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxufVxuXG5Gb250UHJldmlld0xpbmsucHJvcFR5cGVzID0ge1xuICBmb250RmFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZWxheUxvYWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRQcmV2aWV3TGlua1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIE5ldmVSZWFjdEN1c3RvbWl6ZSwgd3AgKi9cbmltcG9ydCB7IGluaXQgYXMgaW5pdER5bmFtaWNGaWVsZHMgfSBmcm9tICcuL2R5bmFtaWMtZmllbGRzL2luZGV4LmpzJ1xuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCB9IGZyb20gJy4vdG9nZ2xlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCB9IGZyb20gJy4vcmVzcG9uc2l2ZS10b2dnbGUvQ29udHJvbC5qcydcbmltcG9ydCB7IEJhY2tncm91bmRDb250cm9sIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBTcGFjaW5nQ29udHJvbCB9IGZyb20gJy4vc3BhY2luZy9Db250cm9sLmpzJ1xuaW1wb3J0IHsgVHlwZWZhY2VDb250cm9sIH0gZnJvbSAnLi90eXBlZmFjZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgRm9udEZhbWlseUNvbnRyb2wgfSBmcm9tICcuL2ZvbnQtZmFtaWx5L0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbnNDb250cm9sIH0gZnJvbSAnLi9yYWRpby1idXR0b25zL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBCdXR0b25BcHBlYXJhbmNlQ29udHJvbCB9IGZyb20gJy4vYnV0dG9uLWFwcGVhcmFuY2UvQ29udHJvbC5qcydcbmltcG9ydCB7IFJhbmdlQ29udHJvbCB9IGZyb20gJy4vcmFuZ2UvQ29udHJvbC5qcydcbmltcG9ydCB7IFJlc3BvbnNpdmVSYW5nZUNvbnRyb2wgfSBmcm9tICcuL3Jlc3BvbnNpdmUtcmFuZ2UvQ29udHJvbC5qcydcbmltcG9ydCB7IENvbG9yQ29udHJvbCB9IGZyb20gJy4vY29sb3IvQ29udHJvbC5qcydcbmltcG9ydCB7IFByZXNldHNTZWxlY3RvckNvbnRyb2wgfSBmcm9tICcuL3ByZXNldHMtc2VsZWN0b3IvQ29udHJvbC5qcydcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29udHJvbCB9IGZyb20gJy4vbXVsdGlzZWxlY3QvQ29udHJvbC5qcydcbmltcG9ydCB7IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb250cm9sIH0gZnJvbSAnLi9yZXNwb25zaXZlLXJhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcydcblxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3RvZ2dsZV9jb250cm9sID0gVG9nZ2xlQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3Jlc3BvbnNpdmVfdG9nZ2xlX2NvbnRyb2wgPSBSZXNwb25zaXZlVG9nZ2xlQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2JhY2tncm91bmRfY29udHJvbCA9IEJhY2tncm91bmRDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfc3BhY2luZyA9IFNwYWNpbmdDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfdHlwZWZhY2VfY29udHJvbCA9IFR5cGVmYWNlQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2ZvbnRfZmFtaWx5X2NvbnRyb2wgPSBGb250RmFtaWx5Q29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCA9IFJhZGlvQnV0dG9uc0NvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9idXR0b25fYXBwZWFyYW5jZSA9IEJ1dHRvbkFwcGVhcmFuY2VDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmFuZ2VfY29udHJvbCA9IFJhbmdlQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3Jlc3BvbnNpdmVfcmFuZ2VfY29udHJvbCA9IFJlc3BvbnNpdmVSYW5nZUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9jb2xvcl9jb250cm9sID0gQ29sb3JDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcHJlc2V0c19zZWxlY3RvciA9IFByZXNldHNTZWxlY3RvckNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9tdWx0aXNlbGVjdCA9IE11bHRpU2VsZWN0Q29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3Jlc3BvbnNpdmVfcmFkaW9fYnV0dG9uc19jb250cm9sID0gUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2xcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBkZXZpY2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2N1c3RvbWl6ZS1mb290ZXItYWN0aW9ucyAuZGV2aWNlcywgLmhmZy0tY2ItZGV2aWNlcy1zd2l0Y2hlciBhLnN3aXRjaC10bycgKVxuICBkZXZpY2VCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCggJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IGUudGFyZ2V0LmRhdGFzZXQuZGV2aWNlXG4gICAgfSApXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKVxuICB9IClcbiAgaW5pdER5bmFtaWNGaWVsZHMoKVxufSApXG5cbndpbmRvdy5IRkcgPSB7XG4gIGdldFNldHRpbmdzOiAoKSA9PiB7XG4gICAgY29uc3QgdXNlZFNldHRpbmdzID0ge31cbiAgICBOZXZlUmVhY3RDdXN0b21pemUuaGVhZGVyQ29udHJvbHMubWFwKCAoaXRlbSkgPT4ge1xuICAgICAgaWYgKCAhd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKSApIHJldHVybiBmYWxzZVxuICAgICAgdXNlZFNldHRpbmdzW2l0ZW1dID0gd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKS5zZXR0aW5nLmdldCgpXG4gICAgfSApXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCB1c2VkU2V0dGluZ3MgKVxuICB9XG59XG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuL011bHRpU2VsZWN0J1xuXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuZXhwb3J0IGNvbnN0IE11bHRpU2VsZWN0Q29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyKFxuICAgICAgPE11bHRpU2VsZWN0IGNvbnRyb2w9e3RoaXN9IC8+XG4gICAgICAsIHRoaXMuY29udGFpbmVyWzBdKVxuICB9XG59KVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgVG9vbHRpcCwgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY29uc3QgTXVsdGlTZWxlY3QgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcblxuICBjb25zdCBhZGRhYmxlID0gT2JqZWN0LmtleXMoY2hvaWNlcykuZmlsdGVyKGNob2ljZSA9PiAhdmFsdWUuaW5jbHVkZXMoY2hvaWNlKSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdBZGQgaXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndG9rZW4nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlLCBzbHVnXVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0ncGx1cy1hbHQnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgfSlcbiAgY29uc3QgdmFsdWVzID0gdmFsdWUuZmlsdGVyKHNsdWcgPT4gY2hvaWNlc1tzbHVnXSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdSZW1vdmUgSXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSd0b2tlbidcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlXS5maWx0ZXIodiA9PiB2ICE9PSBzbHVnKVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0nZGlzbWlzcycgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtbXVsdGlzZWxlY3QnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2NvbnRyb2wucGFyYW1zLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1vcHRpb25zJz5cbiAgICAgICAge3ZhbHVlcy5sZW5ndGggP1xuICAgICAgICAgIHZhbHVlcyA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+XG4gICAgICAgICAgICB7X18oJ0FkZCBpdGVtcyBieSBjbGlja2luZyB0aGUgb25lcyBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdmFpbGFibGUtb3B0aW9ucyc+XG4gICAgICAgIHthZGRhYmxlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgIGFkZGFibGUgOlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlxuICAgICAgICAgICAge19fKCdBbGwgaXRlbXMgYXJlIGFscmVhZHkgc2VsZWN0ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTXVsdGlTZWxlY3QucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3RcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByZXNldHNTZWxlY3RvciBmcm9tICcuL1ByZXNldHNTZWxlY3RvcidcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5leHBvcnQgY29uc3QgUHJlc2V0c1NlbGVjdG9yQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHJlbmRlcihcbiAgICAgIDxQcmVzZXRzU2VsZWN0b3IgY29udHJvbD17dGhpc30gLz5cbiAgICAgICwgdGhpcy5jb250YWluZXJbMF0gKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbWF5YmVQYXJzZUpzb24gfSBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBUb29sdGlwIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmNsYXNzIFByZXNldHNTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2g6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlU2V0dGluZ3MgPSB0aGlzLnJlcGxhY2VTZXR0aW5ncy5iaW5kKCB0aGlzIClcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGdldCB0aGUgdmFsdWUgaW4gdGhlIGNvbnNvbGUgd2l0aCB0aGlzIGNvbW1hbmQ6XG4gICAqXG4gICAqIGNvcHkoSEZHLmdldFNldHRpbmdzKCkpO1xuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldFByZXNldHMoKSB7XG4gICAgY29uc3QgeyBwcmVzZXRzIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG5cbiAgICByZXR1cm4gcHJlc2V0cy5maWx0ZXIoIChwcmVzZXQpID0+IHtcbiAgICAgIHJldHVybiBwcmVzZXQubGFiZWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5jbHVkZXMoIHRoaXMuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkgKVxuICAgIH0gKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByZXNldHMgPSB0aGlzLmdldFByZXNldHMoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1wcmVzZXQtc2VsZWN0b3InPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3NlYXJjaCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXyggJ1NlYXJjaCBIZWFkZXIgUHJlc2V0cy4uLicgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFN0YXRlKCB7IHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSApIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcmVzZXRzLmxlbmd0aCA+IDAgPyBwcmVzZXRzLm1hcCggKHByZXNldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRleHQ9e3ByZXNldC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVNldHRpbmdzKCBwcmVzZXQuc2V0dXAgKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJlc2V0LmltYWdlfSBhbHQ9e3ByZXNldC5sYWJlbH0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gKVxuICAgICAgICAgICAgOiA8cD57X18oICdObyBoZWFkZXIgcHJlc2V0cyBmb3VuZCcsICduZXZlJyApfTwvcD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVwbGFjZVNldHRpbmdzKHNldHVwKSB7XG4gICAgc2V0dXAgPSBtYXliZVBhcnNlSnNvbiggc2V0dXAgKVxuICAgIGlmICggdHlwZW9mIE5ldmVQcm9SZWFjdEN1c3RvbWl6ZSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICBPYmplY3Qua2V5cyggc2V0dXAgKS5tYXAoICh0aGVtZU1vZCkgPT4ge1xuICAgICAgICBpZiAoIHRoZW1lTW9kID09PSAnaGZnX2hlYWRlcl9sYXlvdXQnICkge1xuICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApXG4gICAgICAgICAgICAuc2V0dGluZ1xuICAgICAgICAgICAgLnNldCggc2V0dXBbdGhlbWVNb2RdIClcbiAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCAnbmV2ZS1jaGFuZ2VkLWJ1aWxkZXItdmFsdWUnLCB7XG4gICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtYXliZVBhcnNlSnNvbiggc2V0dXBbdGhlbWVNb2RdICksXG4gICAgICAgICAgICAgICAgaWQ6ICdoZWFkZXInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKSApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCAhd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kICkgKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAoIFsndGV4dCcsICd0ZXh0YXJlYScsICdzZWxlY3QnXS5pbmNsdWRlcyhcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApLnBhcmFtcy50eXBlICkgKSB7XG4gICAgICAgICAgICB3cC5jdXN0b21pemUuY29udHJvbCggdGhlbWVNb2QgKS5zZXR0aW5nLnNldCggc2V0dXBbdGhlbWVNb2RdIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHNldHVwW3RoZW1lTW9kXSB8fCAnJyxcbiAgICAgICAgICAgICAgICBpZDogdGhlbWVNb2RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApIClcbiAgICAgICAgfVxuICAgICAgfSApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCAnbmV2ZS1wcmVzZXQtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aGVtZU1vZHM6IHNldHVwXG4gICAgICB9XG4gICAgfSApIClcbiAgfVxufVxuXG5QcmVzZXRzU2VsZWN0b3IucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2V0c1NlbGVjdG9yXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBSYWRpb0J1dHRvbnNDb21wb25lbnQgZnJvbSAnLi9SYWRpb0J1dHRvbnNDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25zQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJhZGlvQnV0dG9uc0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMnXG5pbXBvcnQgU1ZHIGZyb20gJy4uL2NvbW1vbi9zdmcuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgUmFkaW9CdXR0b25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIH1cbiAgICB0aGlzLmdldENob2ljZXMgPSB0aGlzLmdldENob2ljZXMuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB0aGlzLnVwZGF0ZVZhbHVlLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldENob2ljZXMoKSB7XG4gICAgY29uc3QgeyBpc19mb3IsIGNob2ljZXMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcblxuICAgIGlmICghaXNfZm9yKSB7XG4gICAgICByZXR1cm4gY2hvaWNlc1xuICAgIH1cblxuICAgIGlmIChpc19mb3IgPT09ICdsb2dvJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdMb2dvIE9ubHknLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5sb2dvT25seVxuICAgICAgICB9LFxuICAgICAgICBsb2dvVGl0bGU6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnTG9nbyAtIFRpdGxlICYgVGFnbGluZScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmxvZ29UaXRsZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZUxvZ286IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnVGl0bGUgJiBUYWdsaW5lIC0gTG9nbycsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLnRpdGxlTG9nb1xuICAgICAgICB9LFxuICAgICAgICBsb2dvVG9wVGl0bGU6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnTG9nbyBvbiBUb3AnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5sb2dvVG9wVGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc19mb3IgPT09ICdtZW51Jykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0eWxlLXBsYWluJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdQbGFpbicsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm1lbnVQbGFpblxuICAgICAgICB9LFxuICAgICAgICAnc3R5bGUtZnVsbC1oZWlnaHQnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5tZW51RmlsbGVkXG4gICAgICAgIH0sXG4gICAgICAgICdzdHlsZS1ib3JkZXItYm90dG9tJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdCb3R0b20gQm9yZGVyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcubWVudVVuZGVybGluZVxuICAgICAgICB9LFxuICAgICAgICAnc3R5bGUtYm9yZGVyLXRvcCc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnVG9wIEJvcmRlcicsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm1lbnVPdmVybGluZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzX2ZvciA9PT0gJ2FjY291bnRfY29tcG9uZW50Jykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlMToge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDInLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyU29saWRcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlMjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDEnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyUmVndWxhclxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGUzOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgMycsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJUYWdTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGU0OiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJBbHRTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGU1OiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJzU29saWRcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlNjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDYnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2F2YXRhcjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdXb3JkUHJlc3MgQXZhdGFyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlckF2YXRhclxuICAgICAgICB9LFxuICAgICAgICBub25lOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ05vIEljb24nLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnROb25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNfZm9yID09PSAnY2FydF9jb21wb25lbnQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2FydC1pY29uLXN0eWxlMSc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgMScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGUxXG4gICAgICAgIH0sXG4gICAgICAgICdjYXJ0LWljb24tc3R5bGUyJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSAyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTJcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTMnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDMnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlM1xuICAgICAgICB9LFxuICAgICAgICAnY2FydC1pY29uLXN0eWxlNCc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGU0XG4gICAgICAgIH0sXG4gICAgICAgICdjYXJ0LWljb24tc3R5bGU1Jzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTVcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTYnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDYnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlNlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGxhcmdlX2J1dHRvbnMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFtcbiAgICAgICduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCcsXG4gICAgICB7ICdsYXJnZS1idXR0b25zJzogbGFyZ2VfYnV0dG9ucyA9PT0gdHJ1ZSB9XSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICA8UmFkaW9JY29uc1xuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldENob2ljZXMoKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKG5ld1ZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsIH0pXG4gICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxufVxuXG5SYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25zQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFJhbmdlQ29tcG9uZW50IGZyb20gJy4vUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFuZ2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFuZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCB7IFJhbmdlQ29udHJvbCwgVG9vbHRpcCwgSWNvbkJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBkZWZhdWx0VmFsOiAxNSxcbiAgICAgIHN0ZXA6IDFcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQcm9wcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgLi4uKHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzIHx8IHt9KVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyUmVzZXQgPSB0aGlzLnJlbmRlclJlc2V0LmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG4gICAgY29uc3QgeyBkZWZhdWx0VmFsLCBtaW4sIG1heCwgc3RlcCB9ID0gdGhpcy5jb250cm9sUHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCBuZXZlLXJhbmdlLWNvbnRyb2wnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbj17ZGVmYXVsdFZhbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXModmFsdWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJSZXNldCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh2YWx1ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJSZXNldCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWwgfSA9IHRoaXMuY29udHJvbFByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZGVmYXVsdFZhbCAmJiBkZWZhdWx0VmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0VmFsID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICB0ZXh0PXtfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT0ncmVzZXQtaWNvbidcbiAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgY2xhc3NOYW1lPSdyZXNldCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVZhbHVlcyhkZWZhdWx0VmFsKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cbn1cblxuUmFuZ2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQgZnJvbSAnLi9SZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5pbXBvcnQgU1ZHIGZyb20gJy4uL2NvbW1vbi9zdmcuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCB7IGNob2ljZXMsIGxhYmVsIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IGNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICBjb25zdCBbZGV2aWNlLCBzZXREZXZpY2VdID0gdXNlU3RhdGUoJ2Rlc2t0b3AnKVxuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWx1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPbGQgVmFsdWU6JywgdmFsdWUpXG4gICAgICBzZXRWYWx1ZSh7bW9iaWxlOiB2YWx1ZSwgZGVza3RvcDogdmFsdWUsIHRhYmxldDogdmFsdWV9KVxuXHR9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB1cGRhdGVWYWx1ZShlLmRldGFpbC52YWx1ZSlcbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgICAgPFJlc3BvbnNpdmVDb250cm9sIG9uQ2hhbmdlPXsoZGV2aWNlKSA9PiBzZXREZXZpY2UoZGV2aWNlKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJhZGlvSWNvbnNcbiAgICAgICAgdmFsdWU9e3ZhbHVlW2RldmljZV19XG4gICAgICAgIG9wdGlvbnM9e2Nob2ljZXN9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICB1cGRhdGVWYWx1ZSh2YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVSYW5nZUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlUmFuZ2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwLCBtYXBWYWx1ZXMgKi9cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlc3BvbnNpdmVDb250cm9sIGZyb20gJy4uL2NvbW1vbi9SZXNwb25zaXZlJ1xuaW1wb3J0IHsgbWF5YmVQYXJzZUpzb24sIGdldEludFZhbEFzUmVzcG9uc2l2ZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IFJhbmdlQ29udHJvbCwgQnV0dG9uLCBUb29sdGlwLCBJY29uQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogbWF5YmVQYXJzZUpzb24ocHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpKSxcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJ1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyQ29udHJvbEhlYWRlciA9IHRoaXMucmVuZGVyQ29udHJvbEhlYWRlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRCdXR0b25zID0gdGhpcy5nZXRCdXR0b25zLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclJlc2V0ID0gdGhpcy5yZW5kZXJSZXNldC5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHsgdW5pdHMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnNcbiAgICBpZiAoIXVuaXRzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aXZlOiBzZWxmLnN0YXRlLnZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArXG4gICAgICAgICAgJy11bml0J10gPT09IHVuaXRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB7IC4uLnNlbGYuc3RhdGUudmFsdWUgfVxuICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlICsgJy11bml0J10gPSB1bml0XG4gICAgICAgICAgICBpZiAodW5pdCAhPT0gJ2VtJykge1xuICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdID0gbWFwVmFsdWVzKFxuICAgICAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZV0sXG4gICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICAgICAgICBzZWxmLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt1bml0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyQ29udHJvbEhlYWRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG4gICAgY29uc3QgeyBoaWRlUmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRyc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgICAgICBoaWRlUmVzcG9uc2l2ZT17aGlkZVJlc3BvbnNpdmUgfHwgZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXVuaXRzJz5cbiAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSwgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHN0ZXAsIG1pbiwgbWF4IH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCBuZXZlLXJhbmdlLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9sSGVhZGVyKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYW5nZS13cmFwJz5cbiAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICB2YWx1ZT17cGFyc2VJbnQodmFsdWVbY3VycmVudERldmljZV0pfVxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uPXswfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh2YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBtaW49e21pbiB8fCAwfVxuICAgICAgICAgICAgc3RlcD17c3RlcCB8fCAxfVxuICAgICAgICAgICAgbWF4PXttYXggfHwgMTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMucmVuZGVyUmVzZXQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJSZXNldCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWwgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnNcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UsIHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFkZWZhdWx0VmFsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdID09PSB2YWx1ZVtjdXJyZW50RGV2aWNlXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICB0ZXh0PXtfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT0ncmVzZXQtaWNvbidcbiAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgY2xhc3NOYW1lPSdyZXNldCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVZhbHVlcyhkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgIFtjdXJyZW50RGV2aWNlXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5tYXliZVBhcnNlSnNvbih0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSksXG4gICAgICBbY3VycmVudERldmljZV06IHZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBJZiBhIHZhbHVlIGlzIGludCwgbWFrZSBpdCByZXNwb25zaXZlLlxuICAgIGNvbnN0IHZhbHVlID0gZ2V0SW50VmFsQXNSZXNwb25zaXZlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgICBpZiAoIHRoaXMuc3RhdGUudmFsdWUgIT09IHZhbHVlICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSB0cmFuc2xhdGUgaW50IHZhbHVlcyB0byByZXNwb25zaXZlIHZhbHVlcy5cbiAgICAgIGNvbnN0IGluY29taW5nVmFsdWUgPSBnZXRJbnRWYWxBc1Jlc3BvbnNpdmUoZS5kZXRhaWwudmFsdWUpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogaW5jb21pbmdWYWx1ZSB9KVxuICAgICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KEpTT04uc3RyaW5naWZ5KGluY29taW5nVmFsdWUpKVxuICAgIH0pXG4gIH1cbn1cblxuUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgc2V0VmFsdWUoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSgnZGVza3RvcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wgZmxleC1jb250ZW50cyc+XG4gICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9J25ldmUtdG9nZ2xlLWNvbnRyb2wnXG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlW2RldmljZV19XG4gICAgICAgIGxhYmVsPXtjb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHsgLi4udmFsdWUgfVxuICAgICAgICAgIG5leHRWYWx1ZVtkZXZpY2VdID0gbmV3VmFsdWVcbiAgICAgICAgICBzZXRWYWx1ZShuZXh0VmFsdWUpXG4gICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXh0VmFsdWUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgIGV4Y2x1ZGVkPXtjb250cm9sLnBhcmFtcy5leGNsdWRlZCB8fCBbXX1cbiAgICAgICAgb25DaGFuZ2U9eyhkZXZpY2UpID0+IHtcbiAgICAgICAgICBzZXREZXZpY2UoZGV2aWNlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFNwYWNpbmdDb21wb25lbnQgZnJvbSAnLi9TcGFjaW5nQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFNwYWNpbmdDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8U3BhY2luZ0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgbG9kYXNoICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlc3BvbnNpdmVDb250cm9sIGZyb20gJy4uL2NvbW1vbi9SZXNwb25zaXZlLmpzJ1xuaW1wb3J0IFNpemluZ0NvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1NpemluZy5qcydcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBtYXBWYWx1ZXMgfSA9IGxvZGFzaFxuXG5jbGFzcyBTcGFjaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBtaW46IC0zMDAsXG4gICAgICBtYXg6IDMwMCxcbiAgICAgIGhpZGVSZXNwb25zaXZlQnV0dG9uczogZmFsc2UsXG4gICAgICB1bml0czogWydweCcsICdlbScsICclJ11cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQYXJhbXMgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycyA/IHtcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRyc1xuICAgIH0gOiBkZWZhdWx0UGFyYW1zXG5cbiAgICBjb25zdCBiYXNlRGVmYXVsdCA9IHtcbiAgICAgIG1vYmlsZTogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIHRhYmxldDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIGRlc2t0b3A6IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAnbW9iaWxlLXVuaXQnOiAncHgnLFxuICAgICAgJ3RhYmxldC11bml0JzogJ3B4JyxcbiAgICAgICdkZXNrdG9wLXVuaXQnOiAncHgnXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdCA/IHtcbiAgICAgIC4uLmJhc2VEZWZhdWx0LFxuICAgICAgLi4ucHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFxuICAgIH0gOiBiYXNlRGVmYXVsdFxuXG4gICAgY29uc3QgZGJWYWwgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCB2YWx1ZSA9IG1lcmdlRGVlcCh0aGlzLmRlZmF1bHRWYWx1ZSwgZGJWYWwpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBsaW5rZWQ6IHRydWUsXG4gICAgICBjdXJyZW50RGV2aWNlOiAnZGVza3RvcCdcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQoKSkge1xuICAgICAgdGhpcy5zdGF0ZS5saW5rZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQgPSB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkLmJpbmQodGhpcylcbiAgICB0aGlzLmdldEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB0aGlzLnVwZGF0ZVZhbHVlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZS5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RvcCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmlnaHQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5ib3R0b21cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsZWZ0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgICB9XG4gICAgXVxuICAgIGNvbnN0IHsgaGlkZVJlc3BvbnNpdmVCdXR0b25zIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICAnbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnLFxuICAgICAgJ25ldmUtc2l6aW5nJ1xuICAgIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udHJvbFxuICAgICAgICAgICAgaGlkZVJlc3BvbnNpdmU9e2hpZGVSZXNwb25zaXZlQnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudERldmljZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlua2VkOiB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkKCkgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+XG4gICAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgIG1pbj17dGhpcy5jb250cm9sUGFyYW1zLm1pbn1cbiAgICAgICAgICBtYXg9e3RoaXMuY29udHJvbFBhcmFtcy5tYXh9XG4gICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2UgKyAnLXVuaXQnXSA9PT1cbiAgICAgICAgICAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdfVxuICAgICAgICAgIGxpbmtlZD17dGhpcy5zdGF0ZS5saW5rZWR9XG4gICAgICAgICAgb25MaW5rZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsaW5rZWQ6ICF0aGlzLnN0YXRlLmxpbmtlZCB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodGhpcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7IHVuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG4gICAgcmV0dXJuIHVuaXRzLm1hcCgodW5pdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZTogc2VsZi5zdGF0ZS52YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2UgK1xuICAgICAgICAgICctdW5pdCddID09PSB1bml0XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0geyAuLi5zZWxmLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArICctdW5pdCddID0gdW5pdFxuICAgICAgICAgICAgaWYgKHVuaXQgIT09ICdlbScpIHtcbiAgICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IG1hcFZhbHVlcyhcbiAgICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdLFxuICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgID57dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHNldFZhbHVlKG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0geyAuLi50aGlzLnN0YXRlLnZhbHVlIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5saW5rZWQpIHtcbiAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0gPSBtYXBWYWx1ZXMoXG4gICAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0sICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IHtcbiAgICAgICAgLi4udmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSxcbiAgICAgICAgW29wdGlvblR5cGVdOiBudW1lcmljVmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gIH1cblxuICBzaG91bGRWYWx1ZXNCZUxpbmtlZCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wLFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0LFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmJvdHRvbSxcbiAgICAgIHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgXVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IHZhbHVlc1swXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGUuZGV0YWlsLnZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuU3BhY2luZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGFjaW5nQ29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250cm9scy5jc3NcIjsiLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBUb2dnbGVDb21wb25lbnQgZnJvbSAnLi9Ub2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgVG9nZ2xlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFRvZ2dsZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY29uc3Qge1xuICBUb2dnbGVDb250cm9sXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgIH0gKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCggbmV3VmFsdWUgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgIGNsYXNzTmFtZT0nbmV2ZS10b2dnbGUtY29udHJvbCdcbiAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMudG9nZ2xlVmFsdWUoIHZhbHVlICl9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLWRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoICFlLmRldGFpbCApIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCBlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCApIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy50b2dnbGVWYWx1ZSggZS5kZXRhaWwudmFsdWUgKVxuICAgIH0gKVxuICB9XG59XG5cblRvZ2dsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFR5cGVmYWNlQ29tcG9uZW50IGZyb20gJy4vVHlwZWZhY2VDb21wb25lbnQuanMnXG5cbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBUeXBlZmFjZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoe1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFR5cGVmYWNlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOdW1iZXJDb250cm9sIGZyb20gJy4uL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IHtcbiAgU2VsZWN0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgVHlwZWZhY2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIGxldCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiA0MDAsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6IDE1LFxuICAgICAgICB0YWJsZXQ6IDE1LFxuICAgICAgICBkZXNrdG9wOiAxNVxuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogMS42LFxuICAgICAgICB0YWJsZXQ6IDEuNixcbiAgICAgICAgZGVza3RvcDogMS42XG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6IDAsXG4gICAgICAgIHRhYmxldDogMCxcbiAgICAgICAgZGVza3RvcDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIXZhbHVlICkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldEVtcHR5VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICggcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMubGVuZ3RoICkge1xuICAgICAgY29uc3QgaW5wdXRfYXR0cnMgPSBKU09OLnBhcnNlKHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzKVxuICAgICAgaWYgKCBpbnB1dF9hdHRycy5kZWZhdWx0X2lzX2VtcHR5ICkge1xuICAgICAgICBkZWZhdWx0UGFyYW1zID0gdGhpcy5nZXRFbXB0eURlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBpcyBzZWxlY3RlZC5cbiAgICB2YWx1ZS5saW5lSGVpZ2h0ID0gdmFsdWUubGluZUhlaWdodCB8fCBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHRcbiAgICB2YWx1ZS5saW5lSGVpZ2h0LnN1ZmZpeCA9IHZhbHVlLmxpbmVIZWlnaHQuc3VmZml4IHx8IGRlZmF1bHRQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhcblxuICAgIHRoaXMuY29udHJvbFBhcmFtcyA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzID8ge1xuICAgICAgLi4uZGVmYXVsdFBhcmFtcyxcbiAgICAgIC4uLkpTT04ucGFyc2UocHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMpXG4gICAgfSA6IGRlZmF1bHRQYXJhbXNcblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN1ZmZpeCBmb3IgbGluZSBoZWlnaHQuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4ID0gdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4IHx8XG4gICAgICBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudERldmljZTogJ2Rlc2t0b3AnLFxuICAgICAgZm9udFNpemU6IHZhbHVlLmZvbnRTaXplLFxuICAgICAgbGluZUhlaWdodDogdmFsdWUubGluZUhlaWdodCxcbiAgICAgIGxldHRlclNwYWNpbmc6IHZhbHVlLmxldHRlclNwYWNpbmcsXG4gICAgICBmb250V2VpZ2h0OiB2YWx1ZS5mb250V2VpZ2h0LFxuICAgICAgdGV4dFRyYW5zZm9ybTogdmFsdWUudGV4dFRyYW5zZm9ybSxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGb250V2VpZ2h0ID0gdGhpcy5yZW5kZXJGb250V2VpZ2h0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0gPSB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRm9udFNpemUgPSB0aGlzLnJlbmRlckZvbnRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlckxpbmVIZWlnaHQgPSB0aGlzLnJlbmRlckxpbmVIZWlnaHQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZyA9IHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZy5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVWYWx1ZXMgPSB0aGlzLnVwZGF0ZVZhbHVlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRFbXB0eVZhbHVlKCBwcm9wID0gJycgKSB7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9IHtcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJyxcbiAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVIZWlnaHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyU3BhY2luZzoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub25lJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuICAgIGlmICggcHJvcCAmJiBlbXB0eVZhbHVlW3Byb3BdICkge1xuICAgICAgcmV0dXJuIGVtcHR5VmFsdWVbcHJvcF1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VmFsdWVcbiAgfVxuXG4gIGdldEVtcHR5RGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiAnbm9uZScsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdHlwZWZhY2UtY29udHJvbCBuZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAge3RoaXMucmVuZGVyVGV4dFRyYW5zZm9ybSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvbnRXZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb250U2l6ZSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckxpbmVIZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMZXR0ZXJTcGFjaW5nKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoe1xuICAgICAgLi4udGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KCksXG4gICAgICAuLi52YWx1ZSxcbiAgICAgIGZsYWc6ICF0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKS5mbGFnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckZvbnRXZWlnaHQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtaW5saW5lIGZvbnQtd2VpZ2h0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAge19fKCdXZWlnaHQnLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9udFdlaWdodH1cbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnbm9uZScsIGxhYmVsOiBfXyggJ05vbmUnLCAnbmV2ZScgKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDIwMCwgbGFiZWw6ICcyMDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAzMDAsIGxhYmVsOiAnMzAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNDAwLCBsYWJlbDogJzQwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDUwMCwgbGFiZWw6ICc1MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA2MDAsIGxhYmVsOiAnNjAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNzAwLCBsYWJlbDogJzcwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDgwMCwgbGFiZWw6ICc4MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA5MDAsIGxhYmVsOiAnOTAwJyB9XG4gICAgICAgICAgXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGZvbnRXZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250V2VpZ2h0IH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRXZWlnaHQgfSlcbiAgICAgICAgICAgIGlmICggZm9udFdlaWdodCA9PT0gJ25vbmUnICYmIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMucmVmcmVzaF9vbl9yZXNldCApIHtcbiAgICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGV4dFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1pbmxpbmUgdGV4dC10cmFuc2Zvcm0nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ1RyYW5zZm9ybScsICduZXZlJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0VHJhbnNmb3JtfVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHsgdmFsdWU6ICdub25lJywgbGFiZWw6IF9fKCdOb25lJywgJ25ldmUnKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2NhcGl0YWxpemUnLCBsYWJlbDogX18oJ0NhcGl0YWxpemUnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnbG93ZXJjYXNlJywgbGFiZWw6IF9fKCdMb3dlcmNhc2UnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAndXBwZXJjYXNlJywgbGFiZWw6IF9fKCdVcHBlcmNhc2UnLCAnbmV2ZScpIH1cbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodGV4dFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRUcmFuc2Zvcm0gfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgdGV4dFRyYW5zZm9ybSB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb250U2l6ZSgpIHtcbiAgICBsZXQgeyBmb250U2l6ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgc2l6ZV9kZWZhdWx0LCBzaXplX3VuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcbiAgICBpZiAoICFmb250U2l6ZSApIHtcbiAgICAgIGZvbnRTaXplID0gdGhpcy5nZXRFbXB0eVZhbHVlKCdmb250U2l6ZScgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdmb250LXNpemUnXG4gICAgICAgIGxhYmVsPXtfXygnRm9udCBTaXplJywgJ25ldmUnKX1cbiAgICAgICAgZGVmYXVsdD17c2l6ZV9kZWZhdWx0W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICB2YWx1ZT17Zm9udFNpemVbY3VycmVudERldmljZV19XG4gICAgICAgIHN0ZXA9e2ZvbnRTaXplLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9PT0gJ2VtJyA/IDAuMSA6IDF9XG4gICAgICAgIHVuaXRzPXtzaXplX3VuaXRzfVxuICAgICAgICBhY3RpdmVVbml0PXtmb250U2l6ZS5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIGhhc1Jlc3BvbnNpdmVcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvbnRTaXplXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSB2YWxcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdFtjdXJyZW50RGV2aWNlXVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJMaW5lSGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgbGluZV9oZWlnaHRfZGVmYXVsdCwgbGluZV9oZWlnaHRfdW5pdHMgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxpbmVIZWlnaHQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsaW5lSGVpZ2h0ICkge1xuICAgICAgbGluZUhlaWdodCA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGluZUhlaWdodCcgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsaW5lLWhlaWdodCdcbiAgICAgICAgbGFiZWw9e19fKCdMaW5lIEhlaWdodCcsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgZGVmYXVsdD17bGluZV9oZWlnaHRfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xpbmVIZWlnaHRbY3VycmVudERldmljZV19XG4gICAgICAgIHVuaXRzPXtsaW5lX2hlaWdodF91bml0c31cbiAgICAgICAgYWN0aXZlVW5pdD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIG1heD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV0gPT09ICdlbScgPyA0IDogMjAwfVxuICAgICAgICBtaW49e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC41IDogMX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZUhlaWdodFxuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4ID0gdmFsdWUuc3VmZml4IHx8IGxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gbGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IGxpbmVfaGVpZ2h0X2RlZmF1bHRbY3VycmVudERldmljZV1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGluZUhlaWdodDogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgaWYgKCB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLnJlZnJlc2hfb25fcmVzZXQgKSB7XG4gICAgICAgICAgICB3cC5jdXN0b21pemUucHJldmlld2VyLnJlZnJlc2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZWREZXZpY2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTGV0dGVyU3BhY2luZygpIHtcbiAgICBjb25zdCB7IGxldHRlcl9zcGFjaW5nX2RlZmF1bHQgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxldHRlclNwYWNpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsZXR0ZXJTcGFjaW5nICkge1xuICAgICAgbGV0dGVyU3BhY2luZyA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGV0dGVyU3BhY2luZycgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsZXR0ZXItc3BhY2luZydcbiAgICAgICAgbGFiZWw9e19fKCdMZXR0ZXIgU3BhY2luZycsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgZGVmYXVsdD17bGV0dGVyX3NwYWNpbmdfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xldHRlclNwYWNpbmcgJiYgbGV0dGVyU3BhY2luZ1tjdXJyZW50RGV2aWNlXSA/IGxldHRlclNwYWNpbmdbY3VycmVudERldmljZV0gOiAnJ31cbiAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgbWluPXstNX1cbiAgICAgICAgdW5pdHM9e1sncHgnXX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGV0dGVyU3BhY2luZ1xuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsZXR0ZXJTcGFjaW5nXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuVHlwZWZhY2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZWZhY2VDb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9