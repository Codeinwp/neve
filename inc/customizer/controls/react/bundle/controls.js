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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
/*! exports provided: maybeParseJson, isObject, mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeParseJson", function() { return maybeParseJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    _this.controlProps = _objectSpread(_objectSpread({}, defaults), props.control.params.input_attrs || {});
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
        value: _objectSpread(_objectSpread({}, this.state.value), {}, _defineProperty({}, currentDevice, value))
      });
      this.props.control.setting.set(JSON.stringify(_objectSpread(_objectSpread({}, Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["maybeParseJson"])(this.props.control.setting.get())), {}, _defineProperty({}, currentDevice, value))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      var control = this.props.control;
      document.addEventListener('neve-changed-customizer-value', function (e) {
        if (!e.detail) return false;
        if (e.detail.id !== control.id) return false;

        _this5.setState({
          value: Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["maybeParseJson"])(e.detail.value)
        });

        _this5.props.control.setting.set(JSON.stringify(e.detail.value));
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

          if (fontWeight === 'none') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC12aXNpYmlsaXR5LXNlbnNvci9kaXN0L3Zpc2liaWxpdHktc2Vuc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL0JhY2tncm91bmRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IvQ29sb3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvckNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUmFkaW9JY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9TaW5nbGVTaXppbmdJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZC1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC1mYW1pbHkvRm9udFByZXZpZXdMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvTXVsdGlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMtc2VsZWN0b3IvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy1zZWxlY3Rvci9QcmVzZXRzU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9ucy9SYWRpb0J1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL1JhbmdlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXJhbmdlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtcmFuZ2UvUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXRvZ2dsZS9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXRvZ2dsZS9SZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGFjaW5nL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYWNpbmcvU3BhY2luZ0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZ2dsZS9Ub2dnbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVmYWNlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGVmYWNlL1R5cGVmYWNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIk1lZGlhVXBsb2FkIiwiYmxvY2tFZGl0b3IiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJSYW5nZUNvbnRyb2wiLCJGb2NhbFBvaW50UGlja2VyIiwiRGFzaGljb24iLCJUb2dnbGVDb250cm9sIiwiUGxhY2Vob2xkZXIiLCJCYWNrZ3JvdW5kQ29tcG9uZW50IiwicHJvcHMiLCJ2YWx1ZSIsImNvbnRyb2wiLCJzZXR0aW5nIiwiZ2V0Iiwic3RhdGUiLCJ0eXBlIiwiaW1hZ2VVcmwiLCJmb2N1c1BvaW50IiwieCIsInkiLCJjb2xvclZhbHVlIiwib3ZlcmxheUNvbG9yVmFsdWUiLCJvdmVybGF5T3BhY2l0eSIsImZpeGVkIiwidXNlRmVhdHVyZWQiLCJ0eXBlcyIsImxhYmVscyIsImNvbG9yIiwiaW1hZ2UiLCJidXR0b25zIiwic2VsZiIsIm1hcCIsImluZGV4IiwicHVzaCIsImUiLCJ1cGRhdGVTZXR0aW5nIiwicGFyYW1zIiwibGFiZWwiLCJnZXRCdXR0b25zIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2VEYXRhIiwidXJsIiwib3BlbiIsInZhbCIsIm5ld1BvaW50IiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhaWwiLCJpZCIsIm5ld1ZhbHVlcyIsInNldFN0YXRlIiwic2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInJlbmRlciIsIkJhY2tncm91bmRDb250cm9sIiwiY3VzdG9taXplIiwiQ29udHJvbCIsImV4dGVuZCIsInJlbmRlckNvbnRlbnQiLCJjb250YWluZXIiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwibG9kYXNoIiwibWFwVmFsdWVzIiwiQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCIsImRlZmF1bHRzRnJvbUNvbnRyb2wiLCJib3JkZXJSYWRpdXMiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJib3JkZXJXaWR0aCIsImRlZmF1bHRWYWxzIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRIb3ZlciIsInRleHQiLCJ0ZXh0SG92ZXIiLCJyYWRpdXNMaW5rZWQiLCJ3aWR0aExpbmtlZCIsImlzTGlua2VkIiwicmVuZGVyQm9yZGVyQ29udHJvbHMiLCJiaW5kIiwicmVuZGVyVHlwZUNvbnRyb2xzIiwicmVuZGVyQ29sb3JzIiwicmFkaXVzT3B0aW9ucyIsIndpZHRoT3B0aW9ucyIsIm9wdGlvblR5cGUiLCJudW1lcmljVmFsdWUiLCJuZXdWYWwiLCJ1cGRhdGVWYWx1ZXMiLCJzZXR0aW5ncyIsIm5vcm1hbCIsImNvbnRyb2xzIiwiaG92ZXIiLCJub19ob3ZlciIsIk9iamVjdCIsImtleXMiLCJjb250cm9sU2x1ZyIsImZpbGwiLCJ0b29sdGlwIiwiaWNvbiIsIm91dGxpbmUiLCJyIiwidyIsInZhbHVlcyIsImV2ZXJ5IiwiQnV0dG9uQXBwZWFyYW5jZUNvbnRyb2wiLCJDb2xvckNvbXBvbmVudCIsInBvcG92ZXJPcGVuIiwiZGVmYXVsdFZhbHVlIiwiQ29sb3JDb250cm9sIiwiQ29sb3JQaWNrZXIiLCJEcm9wZG93biIsInNlbGVjdGVkQ29sb3IiLCJ0b2dnbGUiLCJpc09wZW4iLCJvblRvZ2dsZSIsImNsYXNzbmFtZXMiLCJvbkNoYW5nZSIsImhleCIsInN0cmluZyIsImZ1bmMiLCJOdW1iZXJDb250cm9sIiwidW5pdHMiLCJjbGFzc05hbWUiLCJoYXNSZXNwb25zaXZlIiwiY3VycmVudERldmljZSIsIm9uQ2hhbmdlZERldmljZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJvblJlc2V0IiwibGVuZ3RoIiwidW5pdCIsImJ1dHRvbkNsYXNzIiwiYWN0aXZlIiwiYWN0aXZlVW5pdCIsIm9uVW5pdENoYW5nZSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5IiwiYm9vbCIsIlRvb2x0aXAiLCJJY29uQnV0dG9uIiwiUmFkaW9JY29ucyIsIm9wdGlvbnMiLCJSZXNwb25zaXZlQ29udHJvbCIsInZpZXciLCJsaW5rUmVzcG9uc2l2ZUJ1dHRvbnMiLCJkZXZpY2VzIiwiZGVza3RvcCIsInRhYmxldCIsIm1vYmlsZSIsImV4Y2x1ZGVkIiwiZGV2aWNlTWFwIiwia2V5IiwiaW5jbHVkZXMiLCJjb250cm9sTGFiZWwiLCJoaWRlUmVzcG9uc2l2ZSIsImRldmljZSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY2hpbGRyZW4iLCJwcmV2aWV3ZWREZXZpY2UiLCJjaGFuZ2VWaWV3VHlwZSIsImFueSIsIlNpbmdsZVNpemluZ0lucHV0IiwidGFyZ2V0IiwiU2l6aW5nQ29udHJvbCIsImhhc1NldFZhbHVlcyIsImxpbmtCdXR0b24iLCJub0xpbmtpbmciLCJsaW5rZWQiLCJvbkxpbmtlZCIsIndyYXBDbGFzc2VzIiwiaSIsIm4iLCJkZWZhdWx0cyIsImZpbHRlciIsIm9wdGlvbiIsIm1heWJlUGFyc2VKc29uIiwiaW5wdXQiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImlzT2JqZWN0IiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsIm1lcmdlRGVlcCIsInNvdXJjZXMiLCJzb3VyY2UiLCJzaGlmdCIsImFzc2lnbiIsIlNWRyIsImxvZ29Pbmx5IiwibG9nb1RvcFRpdGxlIiwibG9nb1RpdGxlIiwidGl0bGVMb2dvIiwicHgiLCJlbSIsInBlcmNlbnQiLCJidXR0b25GaWxsIiwiYnV0dG9uT3V0bGluZSIsIm1lbnVQbGFpbiIsIm1lbnVGaWxsZWQiLCJtZW51VW5kZXJsaW5lIiwibWVudU92ZXJsaW5lIiwibXlBY2NvdW50VXNlcnNTb2xpZCIsIm15QWNjb3VudFVzZXJzRmlyZW5kc1NvbGlkIiwibXlBY2NvdW50VXNlclNvbGlkIiwibXlBY2NvdW50VXNlclJlZ3VsYXIiLCJteUFjY291bnRVc2VyVGFnU29saWQiLCJteUFjY291bnRVc2VyQWx0U29saWQiLCJteUFjY291bnRVc2VyQXZhdGFyIiwibXlBY2NvdW50Tm9uZSIsImNhcnRJY29uU3R5bGUxIiwiY2FydEljb25TdHlsZTIiLCJjYXJ0SWNvblN0eWxlMyIsImNhcnRJY29uU3R5bGU0IiwiY2FydEljb25TdHlsZTUiLCJjYXJ0SWNvblN0eWxlNiIsIkRyb3Bkb3duTWVudSIsIk1lbnVHcm91cCIsIk1lbnVJdGVtIiwiRHluYW1pY0ZpZWxkSW5zZXJ0ZXIiLCJnZXRPcHRpb25zIiwib25TZWxlY3QiLCJhbGxvd2VkT3B0aW9uc1R5cGVzIiwiYWxsT3B0aW9ucyIsIk5ldmVSZWFjdEN1c3RvbWl6ZSIsImR5bmFtaWNUYWdzIiwiZm9yRWFjaCIsIm9wdGlvbkdyb3VwIiwic2x1ZyIsImluaXQiLCJmaWVsZFNlbGVjdGlvbiIsImNvbnRyb2xJZCIsImR5bmFtaWNDb250cm9sV3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwibWFnaWNUYWciLCJncm91cCIsImFkZFRvRmllbGQiLCJ0YWciLCJzdWJzdHJpbmciLCJmb2N1cyIsIkV2ZW50IiwiRm9udEZhbWlseUNvbnRyb2wiLCJUeXBlZmFjZUNvbXBvbmVudCIsImZvbnRGYW1pbHkiLCJmb250RmFtaWx5U291cmNlIiwiZGVmYXVsdFBhcmFtcyIsImRlZmF1bHRfaXNfaW5oZXJpdCIsImNvbnRyb2xQYXJhbXMiLCJpbnB1dF9hdHRycyIsImZvbnQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ0eXBla2l0U2x1Z3MiLCJ1cGRhdGVDb250cm9sIiwibWF5YmVfZ2V0X3R5cGVraXRfZm9udCIsInNldFRpbWVvdXQiLCJwcmV2aWV3ZXIiLCJzZW5kIiwiaW5oZXJpdCIsIlBvcG92ZXIiLCJUZXh0Q29udHJvbCIsIkZvbnRGYW1pbHlTZWxlY3RvciIsImZvbnRzIiwiaXNWaXNpYmxlIiwic2VhcmNoIiwibG9hZFVudGlsIiwiZGVsYXlGb250SW5jbHVzaW9uIiwiZm9udEdyb3VwcyIsInJlc3VsdCIsInRvTG93ZXJDYXNlIiwiZ2V0Rm9udHMiLCJpbmhlcml0RGVmYXVsdCIsIm9uRm9udENob2ljZSIsInNlbGVjdGVkIiwibWF5YmVHZXRUeXBla2l0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdEZvbnRmYWNlIiwiZ2V0Rm9udExpc3QiLCJGb250UHJldmlld0xpbmsiLCJwcmV2aWV3V2FzUmVuZGVyZWQiLCJzdHlsZSIsImZvbnRGYWNlIiwib25DbGljayIsImRlbGF5TG9hZCIsImNvbnRyb2xDb25zdHJ1Y3RvciIsIm5ldmVfdG9nZ2xlX2NvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfdG9nZ2xlX2NvbnRyb2wiLCJSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCIsIm5ldmVfYmFja2dyb3VuZF9jb250cm9sIiwibmV2ZV9zcGFjaW5nIiwiU3BhY2luZ0NvbnRyb2wiLCJuZXZlX3R5cGVmYWNlX2NvbnRyb2wiLCJUeXBlZmFjZUNvbnRyb2wiLCJuZXZlX2ZvbnRfZmFtaWx5X2NvbnRyb2wiLCJuZXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCIsIlJhZGlvQnV0dG9uc0NvbnRyb2wiLCJuZXZlX2J1dHRvbl9hcHBlYXJhbmNlIiwibmV2ZV9yYW5nZV9jb250cm9sIiwibmV2ZV9yZXNwb25zaXZlX3JhbmdlX2NvbnRyb2wiLCJSZXNwb25zaXZlUmFuZ2VDb250cm9sIiwibmV2ZV9jb2xvcl9jb250cm9sIiwibmV2ZV9wcmVzZXRzX3NlbGVjdG9yIiwiUHJlc2V0c1NlbGVjdG9yQ29udHJvbCIsIm5ldmVfbXVsdGlzZWxlY3QiLCJNdWx0aVNlbGVjdENvbnRyb2wiLCJ3aW5kb3ciLCJkZXZpY2VCdXR0b25zIiwiZGF0YXNldCIsImluaXREeW5hbWljRmllbGRzIiwiSEZHIiwiZ2V0U2V0dGluZ3MiLCJ1c2VkU2V0dGluZ3MiLCJoZWFkZXJDb250cm9scyIsInN0cmluZ2lmeSIsInVzZVN0YXRlIiwiTXVsdGlTZWxlY3QiLCJjaG9pY2VzIiwic2V0VmFsdWUiLCJhZGRhYmxlIiwiY2hvaWNlIiwidiIsIlByZXNldHNTZWxlY3RvciIsInJlcGxhY2VTZXR0aW5ncyIsInByZXNldHMiLCJwcmVzZXQiLCJnZXRQcmVzZXRzIiwicHJldmVudERlZmF1bHQiLCJzZXR1cCIsIk5ldmVQcm9SZWFjdEN1c3RvbWl6ZSIsInRoZW1lTW9kIiwidGhlbWVNb2RzIiwiUmFkaW9CdXR0b25zQ29tcG9uZW50IiwiZ2V0Q2hvaWNlcyIsInVwZGF0ZVZhbHVlIiwiaXNfZm9yIiwidXNlcl9pY29uX3N0eWxlMSIsInVzZXJfaWNvbl9zdHlsZTIiLCJ1c2VyX2ljb25fc3R5bGUzIiwidXNlcl9pY29uX3N0eWxlNCIsInVzZXJfaWNvbl9zdHlsZTUiLCJ1c2VyX2ljb25fc3R5bGU2IiwidXNlcl9hdmF0YXIiLCJub25lIiwibGFyZ2VfYnV0dG9ucyIsIlJhbmdlQ29tcG9uZW50IiwiZGVmYXVsdFZhbCIsImNvbnRyb2xQcm9wcyIsInJlbmRlclJlc2V0IiwiUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50IiwicmVuZGVyQ29udHJvbEhlYWRlciIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudCIsInNldERldmljZSIsIm5ld1ZhbHVlIiwibmV4dFZhbHVlIiwiU3BhY2luZ0NvbXBvbmVudCIsImhpZGVSZXNwb25zaXZlQnV0dG9ucyIsImJhc2VEZWZhdWx0IiwiZGJWYWwiLCJzaG91bGRWYWx1ZXNCZUxpbmtlZCIsIlRvZ2dsZUNvbXBvbmVudCIsInRvZ2dsZVZhbHVlIiwiZGVzY3JpcHRpb24iLCJfX2h0bWwiLCJTZWxlY3RDb250cm9sIiwic2l6ZV91bml0cyIsImxpbmVfaGVpZ2h0X3VuaXRzIiwid2VpZ2h0X2RlZmF1bHQiLCJ0ZXh0X3RyYW5zZm9ybSIsInNpemVfZGVmYXVsdCIsInN1ZmZpeCIsImxpbmVfaGVpZ2h0X2RlZmF1bHQiLCJsZXR0ZXJfc3BhY2luZ19kZWZhdWx0IiwiZ2V0RW1wdHlWYWx1ZSIsImRlZmF1bHRfaXNfZW1wdHkiLCJnZXRFbXB0eURlZmF1bHQiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJmbGFnIiwicmVuZGVyRm9udFdlaWdodCIsInJlbmRlclRleHRUcmFuc2Zvcm0iLCJyZW5kZXJGb250U2l6ZSIsInJlbmRlckxpbmVIZWlnaHQiLCJyZW5kZXJMZXR0ZXJTcGFjaW5nIiwicHJvcCIsImVtcHR5VmFsdWUiLCJy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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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ekM7QUFDQTs7QUFFQSw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QSxLQUFLLEdBQUd3WSxhQUFkO0FBQ0F4WSxlQUFLLENBQUMwSCxhQUFELENBQUwsR0FBdUJ3USxzQkFBc0IsQ0FBQ3hRLGFBQUQsQ0FBN0M7O0FBQ0EsZ0JBQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFOFYseUJBQWEsRUFBRXhZO0FBQWpCLFdBQWQ7O0FBQ0EsZ0JBQUksQ0FBQ3FGLFlBQUwsQ0FBa0I7QUFBRW1ULHlCQUFhLEVBQUV4WTtBQUFqQixXQUFsQjs7QUFDQSxjQUFLLE1BQUksQ0FBQ0QsS0FBTCxDQUFXRSxPQUFYLENBQW1CeUIsTUFBbkIsQ0FBMEIwWCxnQkFBL0IsRUFBa0Q7QUFDaERyYSxjQUFFLENBQUNtRSxTQUFILENBQWEyTixTQUFiLENBQXVCc0ksT0FBdkI7QUFDRDtBQUNGLFNBeEJIO0FBeUJFLHVCQUFlLEVBQUUseUJBQUN6UixhQUFEO0FBQUEsaUJBQW1CLE1BQUksQ0FBQ2hGLFFBQUwsQ0FBYztBQUFFZ0YseUJBQWEsRUFBYkE7QUFBRixXQUFkLENBQW5CO0FBQUE7QUF6Qm5CLFFBREY7QUE2QkQ7Ozs7RUF0VzZCeEksUzs7QUF5V2hDNFEsaUJBQWlCLENBQUNsTixTQUFsQixHQUE4QjtBQUM1QjNDLFNBQU8sRUFBRTRDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREUsQ0FBOUI7QUFJZStNLGdGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVYQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJjb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOS4wXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbi8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMl9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAoZmFsc2UpIHsgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MsIFJlYWN0SXM7IH0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKCk7XG59XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX187XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBUZWxsIHdoZXRoZXIgdGhlIHJlY3QgaXMgdmlzaWJsZSwgZ2l2ZW4gYW4gb2Zmc2V0XG4vL1xuLy8gcmV0dXJuOiBib29sZWFuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCkge1xuICB2YXIgb2Zmc2V0RGlyID0gb2Zmc2V0LmRpcmVjdGlvbjtcbiAgdmFyIG9mZnNldFZhbCA9IG9mZnNldC52YWx1ZTsgLy8gUnVsZXMgZm9yIGNoZWNraW5nIGRpZmZlcmVudCBraW5kIG9mIG9mZnNldHMuIEluIGV4YW1wbGUgaWYgdGhlIGVsZW1lbnQgaXNcbiAgLy8gOTBweCBiZWxvdyB2aWV3cG9ydCBhbmQgb2Zmc2V0VG9wIGlzIDEwMCwgaXQgaXMgY29uc2lkZXJlZCB2aXNpYmxlLlxuXG4gIHN3aXRjaCAob2Zmc2V0RGlyKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QudG9wICsgb2Zmc2V0VmFsIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QubGVmdCArIG9mZnNldFZhbCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLSBvZmZzZXRWYWwgPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcDtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QucmlnaHQgLSBvZmZzZXRWYWwgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b207XG4gIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gVmlzaWJpbGl0eVNlbnNvcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY3QocmVjdCkge1xuICBpZiAocmVjdC53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gIH1cblxuICBpZiAocmVjdC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlY3QuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcbiAgfVxuXG4gIHJldHVybiByZWN0O1xufVxuXG52YXIgVmlzaWJpbGl0eVNlbnNvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVmlzaWJpbGl0eVNlbnNvciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmlzaWJpbGl0eVNlbnNvcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWaXNpYmlsaXR5U2Vuc29yKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFZpc2liaWxpdHlTZW5zb3IpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRDb250YWluZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmNvbnRhaW5tZW50IHx8IHdpbmRvdztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhZGRFdmVudExpc3RlbmVyXCIsIGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50LCBkZWxheSwgdGhyb3R0bGUpIHtcbiAgICAgIGlmICghX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgdmFyIGZ1bmM7XG5cbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5jaGVjaygpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRocm90dGxlID4gLTEpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgdGhyb3R0bGUgfHwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCBkZWxheSB8fCAwKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBmbjogZnVuYyxcbiAgICAgICAgZ2V0TGFzdFRpbWVvdXQ6IGZ1bmN0aW9uIGdldExhc3RUaW1lb3V0KCkge1xuICAgICAgICAgIHJldHVybiB0aW1lb3V0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGluZm8uZm4pO1xuICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tldmVudF0gPSBpbmZvO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXJ0V2F0Y2hpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2sgfHwgX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaW50ZXJ2YWxDaGVjaykge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKF90aGlzLmNoZWNrLCBfdGhpcy5wcm9wcy5pbnRlcnZhbERlbGF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNjcm9sbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoX3RoaXMuZ2V0Q29udGFpbmVyKCksIFwic2Nyb2xsXCIsIF90aGlzLnByb3BzLnNjcm9sbERlbGF5LCBfdGhpcy5wcm9wcy5zY3JvbGxUaHJvdHRsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5yZXNpemVDaGVjaykge1xuICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgX3RoaXMucHJvcHMucmVzaXplRGVsYXksIF90aGlzLnByb3BzLnJlc2l6ZVRocm90dGxlKTtcbiAgICAgIH0gLy8gaWYgZG9udCBuZWVkIGRlbGF5ZWQgY2FsbCwgY2hlY2sgb24gbG9hZCAoIGJlZm9yZSB0aGUgZmlyc3QgaW50ZXJ2YWwgZmlyZXMgKVxuXG5cbiAgICAgICFfdGhpcy5wcm9wcy5kZWxheWVkQ2FsbCAmJiBfdGhpcy5jaGVjaygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0b3BXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICAvLyBjbGVhbiB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIGRlYm91bmNlIGNhbGxlcnNcbiAgICAgICAgZm9yICh2YXIgZGVib3VuY2VFdmVudCBpbiBfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2suaGFzT3duUHJvcGVydHkoZGVib3VuY2VFdmVudCkpIHtcbiAgICAgICAgICAgIHZhciBkZWJvdW5jZUluZm8gPSBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlSW5mby5nZXRMYXN0VGltZW91dCgpKTtcbiAgICAgICAgICAgIGRlYm91bmNlSW5mby50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihkZWJvdW5jZUV2ZW50LCBkZWJvdW5jZUluZm8uZm4pO1xuICAgICAgICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tkZWJvdW5jZUV2ZW50XSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKF90aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGVja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5ub2RlO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICB2YXIgY29udGFpbm1lbnRSZWN0OyAvLyBpZiB0aGUgY29tcG9uZW50IGhhcyByZW5kZXJlZCB0byBudWxsLCBkb250IHVwZGF0ZSB2aXNpYmlsaXR5XG5cbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZWN0ID0gbm9ybWFsaXplUmVjdChfdGhpcy5yb3VuZFJlY3REb3duKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jb250YWlubWVudCkge1xuICAgICAgICB2YXIgY29udGFpbm1lbnRET01SZWN0ID0gX3RoaXMucHJvcHMuY29udGFpbm1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogY29udGFpbm1lbnRET01SZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiBjb250YWlubWVudERPTVJlY3QubGVmdCxcbiAgICAgICAgICBib3R0b206IGNvbnRhaW5tZW50RE9NUmVjdC5ib3R0b20sXG4gICAgICAgICAgcmlnaHQ6IGNvbnRhaW5tZW50RE9NUmVjdC5yaWdodFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfSAvLyBDaGVjayBpZiB2aXNpYmlsaXR5IGlzIHdhbnRlZCB2aWEgb2Zmc2V0P1xuXG5cbiAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5wcm9wcy5vZmZzZXQgfHwge307XG4gICAgICB2YXIgaGFzVmFsaWRPZmZzZXQgPSBfdHlwZW9mKG9mZnNldCkgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgIGlmIChoYXNWYWxpZE9mZnNldCkge1xuICAgICAgICBjb250YWlubWVudFJlY3QudG9wICs9IG9mZnNldC50b3AgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmxlZnQgKz0gb2Zmc2V0LmxlZnQgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtPSBvZmZzZXQuYm90dG9tIHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtPSBvZmZzZXQucmlnaHQgfHwgMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZpc2liaWxpdHlSZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wID49IGNvbnRhaW5tZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCA+PSBjb250YWlubWVudFJlY3QubGVmdCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSA8PSBjb250YWlubWVudFJlY3QuYm90dG9tLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCA8PSBjb250YWlubWVudFJlY3QucmlnaHRcbiAgICAgIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Nod25qL3JlYWN0LXZpc2liaWxpdHktc2Vuc29yL3B1bGwvMTE0XG5cbiAgICAgIHZhciBoYXNTaXplID0gcmVjdC5oZWlnaHQgPiAwICYmIHJlY3Qud2lkdGggPiAwO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IGhhc1NpemUgJiYgdmlzaWJpbGl0eVJlY3QudG9wICYmIHZpc2liaWxpdHlSZWN0LmxlZnQgJiYgdmlzaWJpbGl0eVJlY3QuYm90dG9tICYmIHZpc2liaWxpdHlSZWN0LnJpZ2h0OyAvLyBjaGVjayBmb3IgcGFydGlhbCB2aXNpYmlsaXR5XG5cbiAgICAgIGlmIChoYXNTaXplICYmIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBwYXJ0aWFsVmlzaWJsZSA9IHJlY3QudG9wIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPj0gY29udGFpbm1lbnRSZWN0LnRvcCAmJiByZWN0LmxlZnQgPD0gY29udGFpbm1lbnRSZWN0LnJpZ2h0ICYmIHJlY3QucmlnaHQgPj0gY29udGFpbm1lbnRSZWN0LmxlZnQ7IC8vIGFjY291bnQgZm9yIHBhcnRpYWwgdmlzaWJpbGl0eSBvbiBhIHNpbmdsZSBlZGdlXG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHBhcnRpYWxWaXNpYmxlID0gdmlzaWJpbGl0eVJlY3RbX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHldO1xuICAgICAgICB9IC8vIGlmIHdlIGhhdmUgbWluaW11bSB0b3AgdmlzaWJpbGl0eSBzZXQgYnkgcHJvcHMsIGxldHMgY2hlY2ssIGlmIGl0IG1lZXRzIHRoZSBwYXNzZWQgdmFsdWVcbiAgICAgICAgLy8gc28gaWYgZm9yIGluc3RhbmNlIGVsZW1lbnQgaXMgYXQgbGVhc3QgMjAwcHggaW4gdmlld3BvcnQsIHRoZW4gc2hvdyBpdC5cblxuXG4gICAgICAgIGlzVmlzaWJsZSA9IF90aGlzLnByb3BzLm1pblRvcFZhbHVlID8gcGFydGlhbFZpc2libGUgJiYgcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIF90aGlzLnByb3BzLm1pblRvcFZhbHVlIDogcGFydGlhbFZpc2libGU7XG4gICAgICB9IC8vIERlcHJlY2F0ZWQgb3B0aW9ucyBmb3IgY2FsY3VsYXRpbmcgb2Zmc2V0LlxuXG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0LmRpcmVjdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygb2Zmc2V0LnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltub3RpY2VdIG9mZnNldC5kaXJlY3Rpb24gYW5kIG9mZnNldC52YWx1ZSBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gVGhleSBzdGlsbCB3b3JrIGZvciBub3csIGJ1dCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLiBQbGVhc2UgdXBncmFkZSB0byB0aGUgbmV3IHN5bnRheDogeyAlczogJWQgfVwiLCBvZmZzZXQuZGlyZWN0aW9uLCBvZmZzZXQudmFsdWUpO1xuICAgICAgICBpc1Zpc2libGUgPSBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkob2Zmc2V0LCByZWN0LCBjb250YWlubWVudFJlY3QpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdGF0ZTsgLy8gbm90aWZ5IHRoZSBwYXJlbnQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHZpc2liaWxpdHlSZWN0XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkgX3RoaXMucHJvcHMub25DaGFuZ2UoaXNWaXNpYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpYmlsaXR5U2Vuc29yLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcFdhdGNoaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyByZS1yZWdpc3RlciBub2RlIGluIGNvbXBvbmVudERpZFVwZGF0ZSBpZiBjaGlsZHJlbiBkaWZmcyBbIzEwM11cbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICYmICFwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm91bmRSZWN0RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3VuZFJlY3REb3duKHJlY3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogTWF0aC5mbG9vcihyZWN0LnRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGguZmxvb3IocmVjdC5sZWZ0KSxcbiAgICAgICAgYm90dG9tOiBNYXRoLmZsb29yKHJlY3QuYm90dG9tKSxcbiAgICAgICAgcmlnaHQ6IE1hdGguZmxvb3IocmVjdC5yaWdodClcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIHdpdGhpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgICAgIGlzVmlzaWJsZTogdGhpcy5zdGF0ZS5pc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHRoaXMuc3RhdGUudmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXNpYmlsaXR5U2Vuc29yO1xufShyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhY3RpdmU6IHRydWUsXG4gIHBhcnRpYWxWaXNpYmlsaXR5OiBmYWxzZSxcbiAgbWluVG9wVmFsdWU6IDAsXG4gIHNjcm9sbENoZWNrOiBmYWxzZSxcbiAgc2Nyb2xsRGVsYXk6IDI1MCxcbiAgc2Nyb2xsVGhyb3R0bGU6IC0xLFxuICByZXNpemVDaGVjazogZmFsc2UsXG4gIHJlc2l6ZURlbGF5OiAyNTAsXG4gIHJlc2l6ZVRocm90dGxlOiAtMSxcbiAgaW50ZXJ2YWxDaGVjazogdHJ1ZSxcbiAgaW50ZXJ2YWxEZWxheTogMTAwLFxuICBkZWxheWVkQ2FsbDogZmFsc2UsXG4gIG9mZnNldDoge30sXG4gIGNvbnRhaW5tZW50OiBudWxsLFxuICBjaGlsZHJlbjogcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbClcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJwcm9wVHlwZXNcIiwge1xuICBvbkNoYW5nZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jLFxuICBhY3RpdmU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcGFydGlhbFZpc2liaWxpdHk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKV0pLFxuICBkZWxheWVkQ2FsbDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBvZmZzZXQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICB0b3A6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGxlZnQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGJvdHRvbTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgcmlnaHQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG4gIH0pLCAvLyBkZXByZWNhdGVkIG9mZnNldCBwcm9wZXJ0eVxuICBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICBkaXJlY3Rpb246IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKSxcbiAgICB2YWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSldKSxcbiAgc2Nyb2xsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgc2Nyb2xsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBzY3JvbGxUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHJlc2l6ZUNoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHJlc2l6ZURlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplVGhyb3R0bGU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBpbnRlcnZhbENoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIGludGVydmFsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBjb250YWlubWVudDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuaW5zdGFuY2VPZih3aW5kb3cuRWxlbWVudCkgOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmFueSxcbiAgY2hpbGRyZW46IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmVsZW1lbnQsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZnVuY10pLFxuICBtaW5Ub3BWYWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbn0pO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5jb25zdCB7XG4gIE1lZGlhVXBsb2FkXG59ID0gd3AuYmxvY2tFZGl0b3JcblxuY29uc3Qge1xuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBSYW5nZUNvbnRyb2wsXG4gIEZvY2FsUG9pbnRQaWNrZXIsXG4gIERhc2hpY29uLFxuICBUb2dnbGVDb250cm9sLFxuICBQbGFjZWhvbGRlclxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgQmFja2dyb3VuZENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0eXBlOiB2YWx1ZS50eXBlIHx8ICdjb2xvcicsXG4gICAgICBpbWFnZVVybDogdmFsdWUuaW1hZ2VVcmwgfHwgJycsXG4gICAgICBmb2N1c1BvaW50OiB2YWx1ZS5mb2N1c1BvaW50IHx8IHsgeDogMC41LCB5OiAwLjUgfSxcbiAgICAgIGNvbG9yVmFsdWU6IHZhbHVlLmNvbG9yVmFsdWUgfHwgJyNmZmZmZmYnLFxuICAgICAgb3ZlcmxheUNvbG9yVmFsdWU6IHZhbHVlLm92ZXJsYXlDb2xvclZhbHVlIHx8ICcnLFxuICAgICAgb3ZlcmxheU9wYWNpdHk6IHZhbHVlLm92ZXJsYXlPcGFjaXR5IHx8IDUwLFxuICAgICAgZml4ZWQ6IHZhbHVlLmZpeGVkIHx8IGZhbHNlLFxuICAgICAgdXNlRmVhdHVyZWQ6IHZhbHVlLnVzZUZlYXR1cmVkIHx8IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCB0eXBlcyA9IFsnY29sb3InLCAnaW1hZ2UnXVxuICAgIGNvbnN0IGxhYmVscyA9IHtcbiAgICAgIGNvbG9yOiBfXygnQ29sb3InLCAnbmV2ZScpLFxuICAgICAgaW1hZ2U6IF9fKCdJbWFnZScsICduZXZlJylcbiAgICB9XG4gICAgY29uc3QgYnV0dG9ucyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB0eXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG4gICAgICBidXR0b25zLnB1c2goXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzUHJpbWFyeT17c2VsZi5zdGF0ZS50eXBlID09PSB0eXBlfVxuICAgICAgICAgIGlzRGVmYXVsdD17c2VsZi5zdGF0ZS50eXBlICE9PSB0eXBlfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoeyB0eXBlOiB0eXBlIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbHNbdHlwZV19XG4gICAgICAgIDwvQnV0dG9uPilcbiAgICB9KVxuXG4gICAgcmV0dXJuIGJ1dHRvbnNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWwgJiZcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLS10b3AtdG9vbGJhcic+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT0nbmV2ZS1iYWNrZ3JvdW5kLXR5cGUtY29udHJvbCc+XG4gICAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLS1ib2R5Jz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlID09PSAnY29sb3InICYmXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxDb2xvckNvbnRyb2xcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNvbG9yVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlU2V0dGluZyh7IGNvbG9yVmFsdWU6IGNvbG9yVmFsdWUgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3RoaXMuc3RhdGUuY29sb3JWYWx1ZX1cbiAgICAgICAgICAgICAgICBsYWJlbD17X18oICdDb2xvcicsICduZXZlJyApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSduZXZlLWNvbG9yLXByZXZpZXcnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLmNvbG9yVmFsdWUgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09ICdpbWFnZScgJiZcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1VzZSBGZWF0dXJlZCBJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS51c2VGZWF0dXJlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHVzZUZlYXR1cmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyB1c2VGZWF0dXJlZDogdXNlRmVhdHVyZWQgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaW1hZ2VVcmwgP1xuICAgICAgICAgICAgICAgIDxQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgaWNvbj0nZm9ybWF0LWltYWdlJ1xuICAgICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuc3RhdGUudXNlRmVhdHVyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfXygnRmFsbGJhY2sgSW1hZ2UnLCAnbmV2ZScpXG4gICAgICAgICAgICAgICAgICAgIDogX18oJ0ltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge19fKCdTZWxlY3QgZnJvbSB0aGUgTWVkaWEgTGlicmFyeSBvciB1cGxvYWQgYSBuZXcgaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICduZXZlJyl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbWFnZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyBpbWFnZVVybDogaW1hZ2VEYXRhLnVybCB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvcGVuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzRGVmYXVsdCBvbkNsaWNrPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnQWRkIEltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj4gOlxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZW1vdmUtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgIGlzRGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlVXJsOiAnJyB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj0nbm8nIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfXygnUmVtb3ZlIEZhbGxiYWNrIEltYWdlJywgJ25ldmUnKVxuICAgICAgICAgICAgICAgICAgICAgIDogX18oJ1JlbW92ZSBJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxGb2NhbFBvaW50UGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9jdXNQb2ludH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBhcnNlRmxvYXQodmFsLngpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBwYXJzZUZsb2F0KHZhbC55KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IGZvY3VzUG9pbnQ6IG5ld1BvaW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRml4ZWQgQmFja2dyb3VuZCcsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5maXhlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpeGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyBmaXhlZDogZml4ZWQgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17dGhpcy5zdGF0ZS5vdmVybGF5Q29sb3JWYWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG92ZXJsYXlDb2xvclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgIHsgb3ZlcmxheUNvbG9yVmFsdWU6IG92ZXJsYXlDb2xvclZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgQ29sb3InLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSduZXZlLWNvbG9yLXByZXZpZXcnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLm92ZXJsYXlDb2xvclZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgT3BhY2l0eScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3ZlcmxheU9wYWNpdHl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdmVybGF5T3BhY2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgb3ZlcmxheU9wYWNpdHk6IG92ZXJsYXlPcGFjaXR5IH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtaW49JzAnXG4gICAgICAgICAgICAgICAgbWF4PScxMDAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTZXR0aW5nKG5ld1ZhbHVlcykge1xuICAgIHRoaXMuc2V0U3RhdGUobmV3VmFsdWVzKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLm5ld1ZhbHVlc1xuICAgIH0pXG4gIH1cbn1cblxuQmFja2dyb3VuZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi9CYWNrZ3JvdW5kQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxCYWNrZ3JvdW5kQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBnbG9iYWwgd3AsIGxvZGFzaCAqL1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMuanMnXG5pbXBvcnQgU2l6aW5nQ29udHJvbCBmcm9tICcuLi9jb21tb24vU2l6aW5nLmpzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgUGFuZWwsIFBhbmVsQm9keSwgUGFuZWxSb3cgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgbWFwVmFsdWVzIH0gPSBsb2Rhc2hcblxuY2xhc3MgQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCBkZWZhdWx0c0Zyb21Db250cm9sID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIHRvcDogMyxcbiAgICAgICAgcmlnaHQ6IDMsXG4gICAgICAgIGJvdHRvbTogMyxcbiAgICAgICAgbGVmdDogM1xuICAgICAgfSxcbiAgICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICAgIHRvcDogMSxcbiAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgbGVmdDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgdGhlIG9sZCwgbm9uLWFycmF5IHZlcnNpb24gb2YgcmFkaXVzLCB3ZSBjb252ZXJ0LlxuICAgIGlmICh0eXBlb2YgdmFsdWUuYm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyUmFkaXVzID0ge1xuICAgICAgICB0b3A6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgcmlnaHQ6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGxlZnQ6IHZhbHVlLmJvcmRlclJhZGl1c1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBvbGQsIG5vbi1hcnJheSB2ZXJzaW9uIG9mIHJhZGl1cywgd2UgY29udmVydC5cbiAgICBpZiAodHlwZW9mIHZhbHVlLmJvcmRlcldpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyV2lkdGggPSB7XG4gICAgICAgIHRvcDogdmFsdWUuYm9yZGVyV2lkdGgsXG4gICAgICAgIHJpZ2h0OiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgbGVmdDogdmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRWYWxzID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFZhbHMgPyB7XG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0VmFscyxcbiAgICAgIC4uLmRlZmF1bHRzRnJvbUNvbnRyb2xcbiAgICB9IDogZGVmYXVsdHNGcm9tQ29udHJvbFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2ZpbGxlZCcsXG4gICAgICBiYWNrZ3JvdW5kOiB2YWx1ZS5iYWNrZ3JvdW5kIHx8ICcnLFxuICAgICAgYmFja2dyb3VuZEhvdmVyOiB2YWx1ZS5iYWNrZ3JvdW5kSG92ZXIgfHwgJycsXG4gICAgICB0ZXh0OiB2YWx1ZS50ZXh0IHx8ICcnLFxuICAgICAgdGV4dEhvdmVyOiB2YWx1ZS50ZXh0SG92ZXIgfHwgJycsXG4gICAgICBib3JkZXJSYWRpdXM6IHZhbHVlLmJvcmRlclJhZGl1cyB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyxcbiAgICAgIGJvcmRlcldpZHRoOiB2YWx1ZS5ib3JkZXJXaWR0aCB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoLFxuICAgICAgcmFkaXVzTGlua2VkOiBmYWxzZSxcbiAgICAgIHdpZHRoTGlua2VkOiBmYWxzZVxuICAgIH1cbiAgICAvLyBTZXQgbGlua2luZy5cbiAgICB0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMpXG4gICAgdGhpcy5zdGF0ZS53aWR0aExpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJXaWR0aClcblxuICAgIC8vIHRoaXMudXBkYXRlVmFsdWVzKHRoaXMuc3RhdGUpXG5cbiAgICB0aGlzLnJlbmRlckJvcmRlckNvbnRyb2xzID0gdGhpcy5yZW5kZXJCb3JkZXJDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJUeXBlQ29udHJvbHMgPSB0aGlzLnJlbmRlclR5cGVDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJDb2xvcnMgPSB0aGlzLnJlbmRlckNvbG9ycy5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXJCb3JkZXJDb250cm9scygpIHtcbiAgICBjb25zdCByYWRpdXNPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndG9wJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnRvcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3JpZ2h0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLmJvdHRvbVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xlZnQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMubGVmdFxuICAgICAgfVxuICAgIF1cbiAgICBjb25zdCB3aWR0aE9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0b3AnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJXaWR0aC50b3BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyaWdodCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyV2lkdGguYm90dG9tXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGVmdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLmxlZnRcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57X18oJ0JvcmRlciBSYWRpdXMnLCAnbmV2ZScpfTwvc3Bhbj5cbiAgICAgICAgPFNpemluZ0NvbnRyb2xcbiAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICBvcHRpb25zPXtyYWRpdXNPcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1c31cbiAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUucmFkaXVzTGlua2VkfVxuICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzTGlua2VkOiAhdGhpcy5zdGF0ZS5yYWRpdXNMaW5rZWQgfSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCkge1xuICAgICAgICAgICAgICBuZXdWYWwgPSBtYXBWYWx1ZXModGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1ZhbCA9IHsgLi4udGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsIFtvcHRpb25UeXBlXTogbnVtZXJpY1ZhbHVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvcmRlclJhZGl1czogdGhpcy5kZWZhdWx0VmFscy5ib3JkZXJSYWRpdXMgfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgYm9yZGVyUmFkaXVzOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09ICdvdXRsaW5lJyAmJlxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntfXygnQm9yZGVyIFdpZHRoJywgJ25ldmUnKX08L3NwYW4+XG4gICAgICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICBvcHRpb25zPXt3aWR0aE9wdGlvbnN9XG4gICAgICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRofVxuICAgICAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUud2lkdGhMaW5rZWR9XG4gICAgICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGhMaW5rZWQ6ICF0aGlzLnN0YXRlLndpZHRoTGlua2VkIH0pfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aExpbmtlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0gbWFwVmFsdWVzKHRoaXMuc3RhdGUuYm9yZGVyV2lkdGgsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0geyAuLi50aGlzLnN0YXRlLmJvcmRlcldpZHRoLCBbb3B0aW9uVHlwZV06IG51bWVyaWNWYWx1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uUmVzZXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9yZGVyV2lkdGg6IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGggfSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGJvcmRlcldpZHRoOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBvbGRCb3JkZXIoKSB7XG4gIH1cblxuICByZW5kZXJDb2xvcnMoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBub3JtYWw6IHtcbiAgICAgICAgbGFiZWw6IF9fKCdOb3JtYWwnLCAnbmV2ZScpLFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnR5cGUgPT09ICdmaWxsJyA/IF9fKCdUZXh0JywgJ25ldmUnKSA6IF9fKCdUZXh0IGFuZCBCb3JkZXInLCAnbmV2ZScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBsYWJlbDogX18oJ0hvdmVyJywgJ25ldmUnKSxcbiAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSG92ZXI6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0SG92ZXI6IHRoaXMuc3RhdGUudHlwZSA9PT0gJ2ZpbGwnID8gX18oJ1RleHQnLCAnbmV2ZScpIDogX18oJ1RleHQgYW5kIEJvcmRlcicsICduZXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5ub19ob3Zlcikge1xuICAgICAgZGVsZXRlIHNldHRpbmdzLmhvdmVyXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWw+XG4gICAgICAgIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykubWFwKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubm9faG92ZXIgPyAnJyA6IHNldHRpbmdzW3R5cGVdLmxhYmVsfVxuICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXt0eXBlID09PSAnbm9ybWFsJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzW3R5cGVdLmNvbnRyb2xzKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChjb250cm9sU2x1ZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NldHRpbmdzW3R5cGVdLmNvbnRyb2xzW2NvbnRyb2xTbHVnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3NlbGYuc3RhdGVbY29udHJvbFNsdWddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2NvbnRyb2xTbHVnXTogdmFsdWUgfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udHJvbFNsdWddOiB2YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1BhbmVsPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclR5cGVDb250cm9scygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgbGFiZWw6ICdmaWxsJyxcbiAgICAgICAgdG9vbHRpcDogX18oJ0ZpbGxlZCcsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuXG4gICAgICB9LFxuICAgICAgb3V0bGluZToge1xuICAgICAgICBsYWJlbDogJ291dGxpbmUnLFxuICAgICAgICB0b29sdGlwOiBfXygnT3V0bGluZScsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmFkaW9JY29uc1xuICAgICAgICBvcHRpb25zPXt0eXBlc30gb25DaGFuZ2U9eyh0eXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGUgfSwgdGhpcy51cGRhdGVWYWx1ZXMoeyB0eXBlIH0pKVxuICAgICAgICB9fSB2YWx1ZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWJ1dHRvbi1hcHBlYXJhbmNlLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e1xuICAgICAgICAgICAgX18oJ1N0eWxlJywgJ25ldmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3RoaXMucmVuZGVyVHlwZUNvbnRyb2xzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyQm9yZGVyQ29udHJvbHMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xvcnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIC8vIE1pZ3JhdGUgYm9yZGVyLXJhZGl1cyBhbmQgYm9yZGVyLXdpZHRoXG4gICAgICBjb25zdCByID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyUmFkaXVzXG4gICAgICBpZiAoIHIgJiYgKCB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInICkgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlclJhZGl1cyA9IHtcbiAgICAgICAgICB0b3A6IHIsXG4gICAgICAgICAgYm90dG9tOiByLFxuICAgICAgICAgIHJpZ2h0OiByLFxuICAgICAgICAgIGxlZnQ6IHJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3ID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIGlmICggdyAmJiAodHlwZW9mIHcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB3ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlcldpZHRoID0ge1xuICAgICAgICAgIHRvcDogdyxcbiAgICAgICAgICBib3R0b206IHcsXG4gICAgICAgICAgcmlnaHQ6IHcsXG4gICAgICAgICAgbGVmdDogd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IC4uLnRoaXMuc3RhdGUsIC4uLmUuZGV0YWlsLnZhbHVlIH0gKVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGlzTGlua2VkKG9iamVjdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvYmplY3QpLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IE9iamVjdC52YWx1ZXMob2JqZWN0KVswXSlcbiAgfVxufVxuXG5CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQgZnJvbSAnLi9CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkFwcGVhcmFuY2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8QnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sLmpzJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBDb2xvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHBvcG92ZXJPcGVuOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmRlZmF1bHQgfHwgJydcblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCggdGhpcyApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoICFlLmRldGFpbCApIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCBlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCApIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoIGUuZGV0YWlsLnZhbHVlIClcbiAgICB9IClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtY29sb3ItY29udHJvbCc+XG4gICAgICAgIDxDb2xvckNvbnRyb2xcbiAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICBzZWxlY3RlZENvbG9yPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHZhbHVlOiB2YWx1ZSB9IClcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoIHZhbHVlIClcbiAgfVxufVxuXG5Db2xvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBDb2xvckNvbXBvbmVudCBmcm9tICcuL0NvbG9yQ29tcG9uZW50J1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IENvbG9yQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPENvbG9yQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IENvbG9yUGlja2VyLCBCdXR0b24sIERyb3Bkb3duIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY2xhc3MgQ29sb3JDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHNlbGVjdGVkQ29sb3IgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgdG9nZ2xlID0gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlciBuZXZlLWNvbG9yLWNvbXBvbmVudCc+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCAmJlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIHJlbmRlclRvZ2dsZT17KCB7IGlzT3Blbiwgb25Ub2dnbGUgfSApID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZSA9IG9uVG9nZ2xlXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnaXMtc2Vjb25kYXJ5IGlzLWJ1dHRvbicsIHsgJ2lzLWVtcHR5JzogIXNlbGVjdGVkQ29sb3IgfV0pfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkQ29sb3IgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlbmRlckNvbnRlbnQ9eygpID0+IChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9e3NlbGVjdGVkQ29sb3J9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17KCB2YWx1ZSApID0+IHsgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZS5oZXgpIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZUFscGhhXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZENvbG9yICYmXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbGVhcidcbiAgICAgICAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7X18oICdDbGVhcicsICduZXZlJyApfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPn1cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Db2xvckNvbnRyb2wucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFNpemluZ0NvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1NpemluZy5qcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUuanMnXG5cbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBOdW1iZXJDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHVuaXRzLCB2YWx1ZSwgY2xhc3NOYW1lLCBoYXNSZXNwb25zaXZlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgKyAnIG5ldmUtbnVtYmVyLWNvbnRyb2wtd3JhcCd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICAgIHtoYXNSZXNwb25zaXZlICYmXG4gICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRyb2xcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlZERldmljZShjdXJyZW50RGV2aWNlKX1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIHt1bml0cyAmJiA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+e3RoaXMuZ2V0QnV0dG9ucygpfTwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaXppbmdDb250cm9sXG4gICAgICAgICAgbm9MaW5raW5nXG4gICAgICAgICAgbm9SYW5nZVxuICAgICAgICAgIG9wdGlvbnM9e1t7IHZhbHVlOiB2YWx1ZSB9XX1cbiAgICAgICAgICBvbkNoYW5nZT17KHR5cGUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heCB8fCAxMDB9XG4gICAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbiB8fCAwfVxuICAgICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcCB8fCAxfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLnByb3BzLmRlZmF1bHR9XG4gICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHsgdW5pdHMgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIXVuaXRzKSByZXR1cm4gJydcbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdhbG9uZSBhY3RpdmUnXG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgID57dW5pdHNbMF19XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgYWN0aXZlOiBzZWxmLnByb3BzLmFjdGl2ZVVuaXQgPT09IHVuaXRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpc1NtYWxsXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5wcm9wcy5vblVuaXRDaGFuZ2UodW5pdClcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxufVxuXG5OdW1iZXJDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblJlc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1bml0czogUHJvcFR5cGVzLmFycmF5IHx8IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGVwOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoYXNSZXNwb25zaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2VkRGV2aWNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3Qge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50XG59ID0gd3AuZWxlbWVudFxuXG5jb25zdCB7XG4gIFRvb2x0aXAsXG4gIEljb25CdXR0b24sXG4gIEJ1dHRvblxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgUmFkaW9JY29ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICdub25lJ1xuICAgIH1cblxuICAgIHRoaXMuZ2V0QnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucy5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJhZGlvLWljb25zJz5cbiAgICAgICAge3RoaXMuZ2V0QnV0dG9ucygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAge29wdGlvbnNbdHlwZV0uaWNvbiA9PT0gJ3RleHQnICYmXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICBbeyBhY3RpdmU6IHRoaXMucHJvcHMudmFsdWUgPT09IHR5cGUgfSwgJ2lzLXRleHQnXSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHR5cGUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcHRpb25zW3R5cGVdLnRvb2x0aXB9XG4gICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAge29wdGlvbnNbdHlwZV0uaWNvbiAhPT0gJ3RleHQnICYmXG4gICAgICAgICAgICA8VG9vbHRpcCB0ZXh0PXtvcHRpb25zW3R5cGVdLnRvb2x0aXB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e29wdGlvbnNbdHlwZV0udG9vbHRpcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICB7IGFjdGl2ZTogdGhpcy5wcm9wcy52YWx1ZSA9PT0gdHlwZSB9KX1cbiAgICAgICAgICAgICAgICBpY29uPXtvcHRpb25zW3R5cGVdLmljb259XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0eXBlKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+fVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuUmFkaW9JY29ucy5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9JY29uc1xuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcbmNvbnN0IHtcbiAgQnV0dG9uLFxuICBEYXNoaWNvbixcbiAgVG9vbHRpcCxcbiAgQnV0dG9uR3JvdXBcbn0gPSB3cC5jb21wb25lbnRzXG5cbmNsYXNzIFJlc3BvbnNpdmVDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlldzogJ2Rlc2t0b3AnXG4gICAgfVxuICAgIHRoaXMubGlua1Jlc3BvbnNpdmVCdXR0b25zKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBkZXZpY2VzID0ge1xuICAgICAgZGVza3RvcDoge1xuICAgICAgICB0b29sdGlwOiBfXygnRGVza3RvcCcsICduZXZlJyksXG4gICAgICAgIGljb246ICdkZXNrdG9wJ1xuICAgICAgfSxcbiAgICAgIHRhYmxldDoge1xuICAgICAgICB0b29sdGlwOiBfXygnVGFibGV0JywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ3RhYmxldCdcbiAgICAgIH0sXG4gICAgICBtb2JpbGU6IHtcbiAgICAgICAgdG9vbHRpcDogX18oJ01vYmlsZScsICduZXZlJyksXG4gICAgICAgIGljb246ICdzbWFydHBob25lJ1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IGV4Y2x1ZGVkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZGV2aWNlTWFwID0ge31cbiAgICBPYmplY3Qua2V5cyhkZXZpY2VzKS5tYXAoa2V5ID0+IHtcbiAgICAgIGlmIChleGNsdWRlZCkge1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZXZpY2VNYXBba2V5XSA9IGRldmljZXNba2V5XVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGNvbnRyb2xMYWJlbCwgaGlkZVJlc3BvbnNpdmUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJlc3BvbnNpdmUtY29udHJvbC1iYXInPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRyb2xMYWJlbCAmJlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29udHJvbExhYmVsfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICAgIHshaGlkZVJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbG9hdGluZy1jb250cm9scyc+XG4gICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGV2aWNlTWFwKS5tYXAoKGRldmljZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdG9vbHRpcCwgaWNvbiB9ID0gZGV2aWNlTWFwW2RldmljZV1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRleHQ9e3Rvb2x0aXB9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KGRldmljZSA9PT0gdmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdhY3RpdmUtZGV2aWNlICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJykgKyBkZXZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICduZXZlQ2hhbmdlZFJlcHNvbnNpdmVQcmV2aWV3Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBkZXZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj17aWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1yZXNwb25zaXZlLWNvbnRyb2xzLWNvbnRlbnQnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBjaGFuZ2VWaWV3VHlwZShkZXZpY2UpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlldzogZGV2aWNlIH0pXG4gICAgd3AuY3VzdG9taXplLnByZXZpZXdlZERldmljZShkZXZpY2UpXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkZXZpY2UpXG4gIH1cblxuICBsaW5rUmVzcG9uc2l2ZUJ1dHRvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlQ2hhbmdlZFJlcHNvbnNpdmVQcmV2aWV3JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYuY2hhbmdlVmlld1R5cGUoZS5kZXRhaWwpXG4gICAgfSlcbiAgfVxufVxuXG5SZXNwb25zaXZlQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29udHJvbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRlUmVzcG9uc2l2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBleGNsdWRlZDogUHJvcFR5cGVzLmFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVDb250cm9sXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgU2luZ2xlU2l6aW5nSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J252LXNpemluZy1pdGVtJz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy50eXBlID8gdGhpcy5wcm9wcy50eXBlICsgJy1pbnB1dCcgOiAnJ31cbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufVxuICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXh9XG4gICAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwfVxuICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgIGUgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSggdGhpcy5wcm9wcy50eXBlLFxuICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gJycgPyAwIDogZS50YXJnZXQudmFsdWUgKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMudHlwZSAmJiAoXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnIGh0bWxGb3I9e3RoaXMucHJvcHMudHlwZSArICctaW5wdXQnfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5TaW5nbGVTaXppbmdJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKCBbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0gKSxcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVTaXppbmdJbnB1dFxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU2luZ2xlU2l6aW5nSW5wdXQgZnJvbSAnLi4vY29tbW9uL1NpbmdsZVNpemluZ0lucHV0LmpzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3Qge1xuICBJY29uQnV0dG9uLFxuICBUb29sdGlwXG59ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgU2l6aW5nQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYXNTZXRWYWx1ZXMgPSB0aGlzLmhhc1NldFZhbHVlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5saW5rQnV0dG9uID0gdGhpcy5saW5rQnV0dG9uLmJpbmQodGhpcylcbiAgfVxuXG4gIGxpbmtCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubm9MaW5raW5nKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLWxpbmsnXG4gICAgICAgIHRleHQ9e3RoaXMucHJvcHMubGlua2VkID8gX18oJ1VubGluayBWYWx1ZXMnLCAnbmV2ZScpIDogX18oJ0xpbmsgVmFsdWVzJywgJ25ldmUnKX1cbiAgICAgID5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBrZXk9J2xpbmstaWNvbidcbiAgICAgICAgICBpY29uPXt0aGlzLnByb3BzLmxpbmtlZCA/ICdhZG1pbi1saW5rcycgOiAnZWRpdG9yLXVubGluayd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkxpbmtlZCgpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIFt7IGFjdGl2ZTogdGhpcy5wcm9wcy5saW5rZWQgfSwgJ2xpbmsnXSl9XG4gICAgICAgIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICAnbmV2ZS1yZXNwb25zaXZlLXNpemluZycsXG4gICAgICB7ICdzaW5nbGUtaW5wdXQnOiB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID09PSAxIH1cbiAgICBdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwQ2xhc3Nlc30+XG4gICAgICAgIHt0aGlzLmxpbmtCdXR0b24oKX1cbiAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKGksIG4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpbmdsZVNpemluZ0lucHV0XG4gICAgICAgICAgICAgIGtleT17bn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0eXBlLCB2YWx1ZSkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSh0eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2kudmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aS50eXBlID8gaS50eXBlICsgJy1pbnB1dCcgOiAnJ31cbiAgICAgICAgICAgICAgdHlwZT17aS50eXBlfVxuICAgICAgICAgICAgICBtYXg9e3RoaXMucHJvcHMubWF4fVxuICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufVxuICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIHt0aGlzLmhhc1NldFZhbHVlcygpICYmXG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGtleT0ndG9vbHRpcC1yZXNldCdcbiAgICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gX18oJ1Jlc2V0IGFsbCBWYWx1ZXMnLCAnbmV2ZScpIDogX18oJ1Jlc2V0IFZhbHVlJywgJ25ldmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIGtleT0ncmVzZXQtaWNvbidcbiAgICAgICAgICAgICAgaWNvbj0naW1hZ2Utcm90YXRlJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2V0J1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uUmVzZXQoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGhhc1NldFZhbHVlcygpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRzLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRlZmF1bHRzKSAhPSBwYXJzZUZsb2F0KG9wdGlvbnNbMF0udmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgIT0gZGVmYXVsdHNbb3B0aW9uLnR5cGVdXG4gICAgKS5sZW5ndGggPiAwXG4gIH1cbn1cblxuU2l6aW5nQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkZWZhdWx0czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBvbkxpbmtlZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsaW5rZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvblJlc2V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgbm9MaW5raW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWluOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0ZXA6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l6aW5nQ29udHJvbFxuIiwiZXhwb3J0IGNvbnN0IG1heWJlUGFyc2VKc29uID0gKGlucHV0KSA9PiB7XG4gIGlmICggdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuICB0cnkge1xuICAgIEpTT04ucGFyc2UoIGlucHV0IClcbiAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgIHJldHVybiBpbnB1dFxuICB9XG4gIHJldHVybiBKU09OLnBhcnNlKCBpbnB1dCApXG59XG5cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSlcbn1cblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICovXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIC8vIFVzZSBmaXJzdCBvYmplY3Qgd2Ugd2FudCB0byBtZXJnZSB3aXRoIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgc3RhcnQuXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBrZXkgaW4gb25lIHNvdXJjZS5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgLy8gTWVyZ2UgaW5zaWRlIGtleXMgaWYgd2UgaGF2ZSBhbiBvYmplY3QuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVhc3NpZ24gd2l0aCBzb3VyY2UuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBSdW4gcmVjdXJzaXZlbHkgZm9yIG11bHRpcGxlLlxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBTVkcgPSB7XG4gIGxvZ29Pbmx5OiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTcuMjknXG4gICAgaGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDE3LjI5IDE3LjI5J1xuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xNC43NiwxNC43NkE4LjYxLDguNjEsMCwwLDEsMTIsMTYuNmE4LjQyLDguNDIsMCwwLDEtMy4zNi42OSw4LjY2LDguNjYsMCwwLDEtMi43Mi0uNDQsOC4xNCw4LjE0LDAsMCwxLTIuMzgtMS4yMyw5Ljc0LDkuNzQsMCwwLDEtMS44Ny0xLjg3QTguMjcsOC4yNywwLDAsMSwuNDQsMTEuMzcsOC42Nyw4LjY3LDAsMCwxLDAsOC42NCw4LjU0LDguNTQsMCwwLDEsLjY4LDUuMjksOC43Miw4LjcyLDAsMCwxLDIuNTIsMi41Myw4LjcxLDguNzEsMCwwLDEsNS4yOS42OSw4LjUsOC41LDAsMCwxLDEyLC42OWE4Ljc4LDguNzgsMCwwLDEsMi43NiwxLjg0QTguNzIsOC43MiwwLDAsMSwxNi42LDUuMjlhOC41LDguNSwwLDAsMSwwLDYuNzFBOC43Miw4LjcyLDAsMCwxLDE0Ljc2LDE0Ljc2Wk0xLjU4LDUuNTRBNy42Niw3LjY2LDAsMCwwLDEsOC42NCw3LjY4LDcuNjgsMCwwLDAsMi4xNCwxMi44YTcuNTEsNy41MSwwLDAsMCwzLjEzLDIuODRaTTguMjksOC4yNSw3LjIsNS4zbC0uNzktLjA3Yy0uMTQsMC0uMjQtLjEtLjI4LS4yOGEuODQuODQsMCwwLDEsMC0uNTJjLjA3LS4xOC4xNy0uMjYuMzEtLjI2bC4zMywwLC44NCwwLC44NCwwYy41NCwwLDEuMjMsMCwyLjA2LS4xMWEuMzEuMzEsMCwwLDEsLjMuMjUuOTIuOTIsMCwwLDEsMCwuNTJjMCwuMTgtLjE0LjI4LS4yOC4yOWwtLjA3LDBhLjg1Ljg1LDAsMCwxLS4yNS4wNywyLjMsMi4zLDAsMCwxLS4zOSwwbDIuNjIsNy4yMy4zLS43OWExOSwxOSwwLDAsMCwuNjEtMS44OCw2LjczLDYuNzMsMCwwLDAsLjMtMS42NSw0LjMzLDQuMzMsMCwwLDAtLjQ3LTIuMTMsMi4zOCwyLjM4LDAsMCwxLS4xOS0uM2wtLjItLjMycy0uMDctLjE0LS4xNC0uMjdBMS44MiwxLjgyLDAsMCwxLDEyLjU2LDVhMi44MywyLjgzLDAsMCwxLS4wNy0uMjgsMS4yMiwxLjIyLDAsMCwxLDAtLjMyLDEuMywxLjMsMCwwLDEsLjQ2LTEuMDgsMS4yMywxLjIzLDAsMCwxLDEtLjI5LDcuNjMsNy42MywwLDAsMC0yLjQtMS40OUE3LjQ5LDcuNDksMCwwLDAsOC42NCwxYTcuNjEsNy42MSwwLDAsMC0zLjcuOTNBNy40Nyw3LjQ3LDAsMCwwLDIuMTksNC40M2guNWMuNTMsMCwxLjIxLDAsMi4wNS0uMDlhLjI5LjI5LDAsMCwxLC4zLjIyLjc1Ljc1LDAsMCwxLDAsLjQ3LjM0LjM0LDAsMCwxLS4yOC4yN2wtMSwuMDcsMyw3LjkxWk03LjY0LDEzLjJjLS40OSwxLjQyLS44MSwyLjM2LTEsMi44NGE2LjcsNi43LDAsMCwwLDIsLjI5QTcuMjgsNy4yOCwwLDAsMCwxMSwxNS45NGwtMi4yMy02QzguNSwxMC42OCw4LjEyLDExLjc3LDcuNjQsMTMuMlptNC44OSwyLjE3YTcuNCw3LjQsMCwwLDAsMi43Ny0yLjgxLDcuNzEsNy43MSwwLDAsMCwxLTMuOTJBNy41MSw3LjUxLDAsMCwwLDE1LjQyLDUsOSw5LDAsMCwxLDE1LjUsNi4xYzAsLjM2LDAsLjY1LDAsLjg4YTQuMTcsNC4xNywwLDAsMS0uMTMuNzNjLS4wNi4yNy0uMTEuNDQtLjE0LjUzbC0uMTUuNFExNC42Niw5LjY2LDEyLjUzLDE1LjM3WidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIGxvZ29Ub3BUaXRsZTogPHN2Z1xuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE0LjA0J1xuICAgIGhlaWdodD0nMTcuMzMnIHZpZXdCb3g9JzAgMCAxNC4wNCAxNy4zMydcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMTAuMTMsNy41MWE0LjM5LDQuMzksMCwwLDEtMS40LjkzQTQuMzIsNC4zMiwwLDAsMSw3LDguOGE0LjY0LDQuNjQsMCwwLDEtMS4zOS0uMjJBNC4yMiw0LjIyLDAsMCwxLDQuNDMsOGE0LjUsNC41LDAsMCwxLS45NS0xLDMuNzcsMy43NywwLDAsMS0uNjMtMS4yMUE0LjM3LDQuMzcsMCwwLDEsMywyLjcsNC41OCw0LjU4LDAsMCwxLDMuOSwxLjI5LDQuNTksNC41OSwwLDAsMSw1LjMuMzUsNC4zMiw0LjMyLDAsMCwxLDcsMCw0LjIyLDQuMjIsMCwwLDEsOC43Mi4zNWE0LjM5LDQuMzksMCwwLDEsMS40LjkzLDQuMjYsNC4yNiwwLDAsMSwuOTQsMS40LDQuMiw0LjIsMCwwLDEsLjM2LDEuNzEsNC40OCw0LjQ4LDAsMCwxLTEuMjksMy4xMlpNMy40MiwyLjgzYTMuODQsMy44NCwwLDAsMC0uMzEsMS41OCwzLjkyLDMuOTIsMCwwLDAsLjYsMi4xMUEzLjgzLDMuODMsMCwwLDAsNS4zMSw4QzUsNy4yNCw0LjQxLDUuNTIsMy40MiwyLjgzWk02Ljg0LDQuMiw2LjI4LDIuN2wtLjQsMGMtLjA3LDAtLjEyLS4wNS0uMTUtLjE0YS41LjUsMCwwLDEsMC0uMjdjMC0uMDguMDgtLjEzLjE1LS4xMmguMTdsLjQzLDAsLjQzLDBjLjI3LDAsLjYyLDAsMS0uMDYuMDcsMCwuMTIsMCwuMTYuMTNhLjQ2LjQ2LDAsMCwxLDAsLjI2QS4xNy4xNywwLDAsMSw4LDIuNjZsMCwwLS4xMiwwLS4yLDBMOSw2LjQxLDkuMTMsNmMuMS0uMjcuMjEtLjU5LjMxLTFhMy4zOCwzLjM4LDAsMCwwLC4xNS0uODQsMi4xNiwyLjE2LDAsMCwwLS4yNC0xLjA4TDkuMjUsM2wtLjEtLjE3YTEuMTEsMS4xMSwwLDAsMS0uMDctLjEzQS44NS44NSwwLDAsMSw5LDIuNTJhMS41NSwxLjU1LDAsMCwxLDAtLjE1Ljg4Ljg4LDAsMCwxLDAtLjE2LjY5LjY5LDAsMCwxLC4yMy0uNTUuNjYuNjYsMCwwLDEsLjQ5LS4xNUEzLjc1LDMuNzUsMCwwLDAsOC40NS43NSw0LjA4LDQuMDgsMCwwLDAsNywuNDksMy44MSwzLjgxLDAsMCwwLDUuMTMsMWEzLjc4LDMuNzgsMCwwLDAtMS40LDEuMjlINGMuMjcsMCwuNjIsMCwxLjA1LDAsLjA3LDAsLjEyLDAsLjE1LjExYS4zMy4zMywwLDAsMSwwLC4yNC4xNS4xNSwwLDAsMS0uMTQuMTNsLS41MSwwLDEuNTEsNFpNNi41MSw2LjcxLDYsOC4xNmEzLjMzLDMuMzMsMCwwLDAsMSwuMTUsMy43NiwzLjc2LDAsMCwwLDEuMTktLjJMNy4wOCw1QzcsNS40Myw2Ljc2LDYsNi41MSw2LjcxWk05LDcuODJhMy44NywzLjg3LDAsMCwwLDEuNDEtMS40Myw0LDQsMCwwLDAsLjUyLTIsMy44NSwzLjg1LDAsMCwwLS40Ny0xLjg3LDMuODYsMy44NiwwLDAsMSwwLC41OGMwLC4xOCwwLC4zMywwLC40NGEzLDMsMCwwLDEtLjA2LjM4YzAsLjEzLS4wNi4yMi0uMDguMjZzMCwuMTItLjA3LjIxQzEwLjE1LDQuNzMsOS43Miw1Ljg4LDksNy44MlonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMy4wNiwxMC41NHYuN0gydjIuOTVIMS4xNFYxMS4yNEgwdi0uN1onIC8+XG4gICAgPHBhdGggZD0nTTMuNTksMTAuNTRoLjgydjMuNjVIMy41OVonIC8+XG4gICAgPHBhdGggZD0nTTgsMTAuNTR2LjdINi44NnYyLjk1SDZWMTEuMjRINC45NHYtLjdaJyAvPlxuICAgIDxwYXRoIGQ9J00xMC45MywxMy40OHYuNzFIOC40OVYxMC41NGguODJ2Mi45NFonIC8+XG4gICAgPHBhdGggZD0nTTExLjQ1LDE0LjE5VjEwLjU0aDIuNDd2LjY5SDEyLjI3di43MWgxLjQ2di42OEgxMi4yN3YuODhIMTR2LjY5WicgLz5cbiAgICA8cGF0aCBkPSdNMiwxNC45M3YuNDZIMS4yNHYxLjg5SC43MVYxNS4zOUgwdi0uNDZaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMy41OCwxNy4yOGMwLS4wOC0uMDUtLjE2LS4wOC0uMjVsLS4wOS0uMjZIMi40OUwyLjQsMTdjMCwuMDktLjA2LjE3LS4wOC4yNUgxLjc3bC4yNS0uN0wyLjI1LDE2bC4yMy0uNTRjLjA3LS4xNy4xNS0uMzMuMjMtLjVoLjVsLjIzLjUuMjIuNTRjLjA4LjE5LjE2LjQuMjQuNjFsLjI1LjdaTTMsMTUuNDdsLS4wNi4xNC0uMDcuMi0uMS4yNS0uMTEuMjloLjY3YzAtLjEtLjA3LS4xOS0uMS0uMjlzLS4wNy0uMTgtLjEtLjI1UzMsMTUuNjYsMywxNS42WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNS41MSwxNS4zNGEuNjIuNjIsMCwwLDAtLjUzLjIxLjg1Ljg1LDAsMCwwLS4xNy41NiwxLjQ2LDEuNDYsMCwwLDAsMCwuMzEuNzcuNzcsMCwwLDAsLjEyLjI0LjY1LjY1LDAsMCwwLC4yMS4xNi42MS42MSwwLDAsMCwuMjguMDZoLjI2VjE2aC41M3YxLjE3YTEuNjgsMS42OCwwLDAsMS0uMy4wNywyLjU0LDIuNTQsMCwwLDEtLjUyLDBBMS40MiwxLjQyLDAsMCwxLDUsMTcuMjUsMS4xOCwxLjE4LDAsMCwxLDQuNTgsMTdhMSwxLDAsMCwxLS4yMy0uMzgsMS40NiwxLjQ2LDAsMCwxLS4wOS0uNTIsMS4zOCwxLjM4LDAsMCwxLC4wOS0uNTIsMS4yMSwxLjIxLDAsMCwxLC4yNi0uMzlBMS4xOCwxLjE4LDAsMCwxLDUsMTVhMS4zOSwxLjM5LDAsMCwxLC40Ni0uMDhsLjMsMEw2LDE1bC4xNi4wNi4wOS4wNS0uMTUuNDItLjI1LS4xQTEuNTUsMS41NSwwLDAsMCw1LjUxLDE1LjM0WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J004LjMxLDE2Ljgzdi40NUg2Ljc0VjE0LjkzaC41M3YxLjlaJyAvPlxuICAgIDxwYXRoIGQ9J004LjY1LDE0LjkzaC41M3YyLjM1SDguNjVaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMTEuMywxNy4yOGMtLjE1LS4yNy0uMzItLjUzLS40OS0uNzlhOC42OSw4LjY5LDAsMCwwLS41Ny0uNzV2MS41NEg5LjcyVjE0LjkzaC40M2wuMjUuMjguMjguMzUuMjguMzhjLjA5LjEzLjE3LjI2LjI2LjM4VjE0LjkzaC41MnYyLjM1WidcbiAgICAvPlxuICAgIDxwYXRoIGQ9J00xMi4yOCwxNy4yOFYxNC45M2gxLjU5di40NUgxMi44MXYuNDZoLjk0di40M2gtLjk0di41N0gxNHYuNDRaJyAvPlxuICA8L3N2Zz4sXG4gIGxvZ29UaXRsZTogPHN2Z1xuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzUxLjgzJ1xuICAgIGhlaWdodD0nMTcuMjknIHZpZXdCb3g9JzAgMCA1MS44MyAxNy4yOSdcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMTQuNzYsMTQuNzZBOC42MSw4LjYxLDAsMCwxLDEyLDE2LjZhOC40Miw4LjQyLDAsMCwxLTMuMzYuNjksOC42Niw4LjY2LDAsMCwxLTIuNzItLjQ0LDguMTQsOC4xNCwwLDAsMS0yLjM4LTEuMjMsOS43NCw5Ljc0LDAsMCwxLTEuODctMS44N0E4LjI3LDguMjcsMCwwLDEsLjQ0LDExLjM3LDguNjcsOC42NywwLDAsMSwwLDguNjQsOC41NCw4LjU0LDAsMCwxLC42OCw1LjI5LDguNzIsOC43MiwwLDAsMSwyLjUyLDIuNTMsOC44OCw4Ljg4LDAsMCwxLDUuMjkuNjksOC41LDguNSwwLDAsMSwxMiwuNjlhOSw5LDAsMCwxLDIuNzYsMS44NEE4LjcyLDguNzIsMCwwLDEsMTYuNiw1LjI5YTguNSw4LjUsMCwwLDEsMCw2LjcxQTguNzIsOC43MiwwLDAsMSwxNC43NiwxNC43NlpNMS41OCw1LjU0QTcuNjYsNy42NiwwLDAsMCwxLDguNjQsNy42OCw3LjY4LDAsMCwwLDIuMTQsMTIuOGE3LjUxLDcuNTEsMCwwLDAsMy4xMywyLjg0Wk04LjI5LDguMjUsNy4yLDUuM2wtLjc5LS4wN2MtLjE0LDAtLjI0LS4xLS4yOC0uMjhhLjg0Ljg0LDAsMCwxLDAtLjUyYy4wNy0uMTguMTctLjI2LjMxLS4yNmwuMzMsMCwuODQsMCwuODQsMGMuNTQsMCwxLjIzLDAsMi4wNi0uMTFhLjMxLjMxLDAsMCwxLC4zLjI1LjkyLjkyLDAsMCwxLDAsLjUyYzAsLjE4LS4xNC4yOC0uMjguMjlsLS4wNywwYS44NS44NSwwLDAsMS0uMjUuMDcsMi4zLDIuMywwLDAsMS0uMzksMGwyLjYyLDcuMjMuMy0uNzlhMTksMTksMCwwLDAsLjYxLTEuODgsNi43Myw2LjczLDAsMCwwLC4zLTEuNjUsNC4zNiw0LjM2LDAsMCwwLS40Ny0yLjEzLDIuMzgsMi4zOCwwLDAsMS0uMTktLjNsLS4yLS4zMnMtLjA3LS4xNC0uMTQtLjI3QTEuODIsMS44MiwwLDAsMSwxMi41Niw1YTIuODMsMi44MywwLDAsMS0uMDctLjI4LDEuMjIsMS4yMiwwLDAsMSwwLS4zMiwxLjMsMS4zLDAsMCwxLC40Ni0xLjA4LDEuMjMsMS4yMywwLDAsMSwxLS4yOUE3Ljc0LDcuNzQsMCwwLDAsOC42NCwxLDcuNjUsNy42NSwwLDAsMCwyLjE5LDQuNDNoLjVjLjUzLDAsMS4yMSwwLDIuMDUtLjA5YS4yOS4yOSwwLDAsMSwuMy4yMi43NS43NSwwLDAsMSwwLC40Ny4zNC4zNCwwLDAsMS0uMjguMjdsLTEsLjA3LDMsNy45MVpNNy42NCwxMy4yYy0uNDksMS40Mi0uODEsMi4zNi0xLDIuODRhNi43LDYuNywwLDAsMCwyLC4yOUE3LjI4LDcuMjgsMCwwLDAsMTEsMTUuOTRsLTIuMjMtNkM4LjUsMTAuNjgsOC4xMiwxMS43Nyw3LjY0LDEzLjJabTQuODksMi4xN2E3LjQsNy40LDAsMCwwLDIuNzctMi44MSw3LjcxLDcuNzEsMCwwLDAsMS0zLjkyQTcuNTEsNy41MSwwLDAsMCwxNS40Miw1LDksOSwwLDAsMSwxNS41LDYuMWMwLC4zNiwwLC42NSwwLC44OGE0LjE3LDQuMTcsMCwwLDEtLjEzLjczYy0uMDYuMjctLjExLjQ0LS4xNC41M2wtLjE1LjRRMTQuNjYsOS42NiwxMi41MywxNS4zN1onXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMjYuODIuOTF2MS42aC0yLjVWOS4yM0gyMi40NFYyLjUxaC0yLjVWLjkxWicgLz5cbiAgICA8cGF0aCBkPSdNMjgsLjkxSDI5LjlWOS4yM0gyOFonIC8+XG4gICAgPHBhdGggZD0nTTM4LC45MXYxLjZoLTIuNVY5LjIzSDMzLjZWMi41MUgzMS4xVi45MVonIC8+XG4gICAgPHBhdGggZD0nTTQ0Ljc0LDcuNjJWOS4yM0gzOS4xOFYuOTFoMS44OFY3LjYyWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTQ1Ljk0LDkuMjNWLjkxaDUuNjJWMi40OEg0Ny44MVY0LjEyaDMuMzNWNS42NUg0Ny44MXYyaDRWOS4yM1onXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMjQuMjgsMTAuOTN2MUgyMi42N3Y0LjMzSDIxLjQ2VjEySDE5Ljg1di0xWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI4LDE2LjI4Yy0uMDYtLjE5LS4xMi0uMzgtLjE5LS41OGwtLjIxLS41OEgyNS41MmMtLjA2LjE5LS4xMy4zOS0uMi41OXMtLjEzLjM4LS4xOS41N0gyMy44OGMuMi0uNTguMzktMS4xMS41Ny0xLjZzLjM2LS45NS41My0xLjM4LjM1LS44NS41Mi0xLjIzLjM0LS43Ny41Mi0xLjE0aDEuMTRjLjE3LjM3LjM1Ljc1LjUyLDEuMTRzLjM0Ljc5LjUyLDEuMjMuMzQuODkuNTMsMS4zOC4zNywxLC41NywxLjZabS0xLjQ1LTQuMTRjMCwuMDgtLjA2LjE4LS4xMS4zMmE0LjQ1LDQuNDUsMCwwLDAtLjE4LjQ2Yy0uMDcuMTctLjE0LjM3LS4yMi41OHMtLjE3LjQzLS4yNS42NmgxLjUzcS0uMTItLjM1LS4yNC0uNjZjLS4wOC0uMjItLjE1LS40MS0uMjItLjU4bC0uMTgtLjQ3QTIuNjUsMi42NSwwLDAsMCwyNi41NiwxMi4xNFonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTMyLjQsMTEuODVhMS40NiwxLjQ2LDAsMCwwLTEuMjEuNDcsMiwyLDAsMCwwLS4zOCwxLjI4LDIuMjYsMi4yNiwwLDAsMCwuMS43MSwxLjQ5LDEuNDksMCwwLDAsLjI3LjU1LDEuMTksMS4xOSwwLDAsMCwuNDcuMzYsMS40NSwxLjQ1LDAsMCwwLC42NS4xM2guMzRhMSwxLDAsMCwwLC4yNSwwVjEzLjQ1aDEuMlYxNi4xYTMuNjEsMy42MSwwLDAsMS0uNjkuMTgsNi40MSw2LjQxLDAsMCwxLTEuMTguMSwzLjExLDMuMTEsMCwwLDEtMS4wOS0uMTksMi4xNywyLjE3LDAsMCwxLS44NC0uNTQsMi41NiwyLjU2LDAsMCwxLS41NC0uODcsMy42LDMuNiwwLDAsMS0uMTktMS4xOCwzLjEyLDMuMTIsMCwwLDEsLjIxLTEuMTksMi41NywyLjU3LDAsMCwxLC41Ny0uODhBMi4zMywyLjMzLDAsMCwxLDMxLjIsMTFhMi43NSwyLjc1LDAsMCwxLDEtLjE5LDQuNjEsNC42MSwwLDAsMSwuNjgsMGwuNTMuMTJhMi4zNywyLjM3LDAsMCwxLC4zNi4xM2wuMjEuMTEtLjM1LDFBMi43MSwyLjcxLDAsMCwwLDMzLjEsMTIsMi41MiwyLjUyLDAsMCwwLDMyLjQsMTEuODVaJ1xuICAgIC8+XG4gICAgPHBhdGggZD0nTTM4Ljc5LDE1LjI0djFIMzUuMjFWMTAuOTNoMS4yMXY0LjMxWicgLz5cbiAgICA8cGF0aCBkPSdNMzkuNTYsMTAuOTNoMS4ydjUuMzVoLTEuMlonIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J000NS41OSwxNi4yOGMtLjM1LS42Mi0uNzItMS4yMi0xLjEyLTEuODJhMTkuNywxOS43LDAsMCwwLTEuMjgtMS42OXYzLjUxSDQyVjEwLjkzaDFhNy4zOSw3LjM5LDAsMCwxLC41Ni42MmMuMjEuMjUuNDIuNTEuNjMuNzlzLjQzLjU3LjY0Ljg4bC41OS44NlYxMC45M2gxLjJ2NS4zNVonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNNDcuODMsMTYuMjhWMTAuOTNoMy42MnYxSDQ5VjEzaDIuMTR2MUg0OXYxLjI5aDIuNTl2MVonIC8+XG4gIDwvc3ZnPixcbiAgdGl0bGVMb2dvOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNTEuNjUnXG4gICAgaGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDUxLjY1IDE3LjI5J1xuICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9J000OS4xMiwxNC43NmE4LjY5LDguNjksMCwwLDEtMi43NiwxLjg1LDguNTcsOC41NywwLDAsMS0zLjM1LjY4LDguNjcsOC42NywwLDAsMS0yLjczLS40NCw4LjI3LDguMjcsMCwwLDEtMi4zOC0xLjIzQTkuNzQsOS43NCwwLDAsMSwzNiwxMy43NWE4LjI3LDguMjcsMCwwLDEtMS4yMy0yLjM4LDguNjcsOC42NywwLDAsMS0uNDQtMi43Myw4LjY5LDguNjksMCwwLDEsMi41My02LjExQTguNzIsOC43MiwwLDAsMSwzOS42NS42OWE4LjUsOC41LDAsMCwxLDYuNzEsMCw4LjgzLDguODMsMCwwLDEsMi43NiwxLjg0QTguNzIsOC43MiwwLDAsMSw1MSw1LjI5LDguNSw4LjUsMCwwLDEsNTEsMTIsOC43Miw4LjcyLDAsMCwxLDQ5LjEyLDE0Ljc2Wk0zNS45NCw1LjU0YTcuNjYsNy42NiwwLDAsMC0uNjIsMy4xQTcuNjgsNy42OCwwLDAsMCwzNi41LDEyLjhhNy41MSw3LjUxLDAsMCwwLDMuMTMsMi44NFptNi43MSwyLjcxTDQxLjU2LDUuM2wtLjc5LS4wN2MtLjE0LDAtLjIzLS4xLS4yOC0uMjhhLjc3Ljc3LDAsMCwxLDAtLjUyYy4wNi0uMTguMTYtLjI2LjMtLjI2bC4zNCwwLC44MywwLC44NCwwYy41NCwwLDEuMjMsMCwyLjA2LS4xMWEuMzEuMzEsMCwwLDEsLjMuMjUuODQuODQsMCwwLDEsMCwuNTJjMCwuMTgtLjE0LjI4LS4yOC4yOWwtLjA3LDBhLjc3Ljc3LDAsMCwxLS4yNS4wNywyLjMsMi4zLDAsMCwxLS4zOSwwbDIuNjIsNy4yMy4zLS43OWExOSwxOSwwLDAsMCwuNjEtMS44OCw2LjczLDYuNzMsMCwwLDAsLjMtMS42NSw0LjM2LDQuMzYsMCwwLDAtLjQ3LTIuMTMsMi4zOCwyLjM4LDAsMCwxLS4xOS0uM2wtLjE5LS4zMnMtLjA4LS4xNC0uMTUtLjI3QTEuODIsMS44MiwwLDAsMSw0Ni45Miw1YTIuODMsMi44MywwLDAsMS0uMDctLjI4LDEuMjIsMS4yMiwwLDAsMSwwLS4zMiwxLjMsMS4zLDAsMCwxLC40Ni0xLjA4LDEuMjQsMS4yNCwwLDAsMSwxLS4yOSw3Ljg2LDcuODYsMCwwLDAtMi40LTEuNDlBNy43Myw3LjczLDAsMCwwLDQzLDFhNy42NSw3LjY1LDAsMCwwLTYuNDYsMy40N2guNWMuNTMsMCwxLjIxLDAsMi4wNS0uMDlhLjI5LjI5LDAsMCwxLC4zLjIyLjc1Ljc1LDAsMCwxLDAsLjQ3LjM0LjM0LDAsMCwxLS4yOC4yN2wtMSwuMDcsMyw3LjkxWk00MiwxMy4yYy0uNDksMS40Mi0uODEsMi4zNy0xLDIuODRhNi43Miw2LjcyLDAsMCwwLDIsLjI5LDcuMjcsNy4yNywwLDAsMCwyLjM0LS4zOWwtMi4yMy02Wm00Ljg5LDIuMTdhNy4zMyw3LjMzLDAsMCwwLDIuNzctMi44MSw3LjcxLDcuNzEsMCwwLDAsMS0zLjkyQTcuNTEsNy41MSwwLDAsMCw0OS43OCw1YTksOSwwLDAsMSwuMDgsMS4xM2MwLC4zNiwwLC42NSwwLC44OGE0LjE3LDQuMTcsMCwwLDEtLjEzLjczYy0uMDYuMjctLjExLjQ0LS4xNC41M2wtLjE1LjRRNDksOS42Niw0Ni44OSwxNS4zN1onXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNNywuOTF2MS42SDQuNDdWOS4yM0gyLjU5VjIuNTFILjA5Vi45MVonIC8+XG4gICAgPHBhdGggZD0nTTguMTcuOTFoMS44OFY5LjIzSDguMTdaJyAvPlxuICAgIDxwYXRoIGQ9J00xOC4xMy45MXYxLjZoLTIuNVY5LjIzSDEzLjc1VjIuNTFoLTIuNVYuOTFaJyAvPlxuICAgIDxwYXRoIGQ9J00yNC44OSw3LjYyVjkuMjNIMTkuMzNWLjkxaDEuODhWNy42MlonIC8+XG4gICAgPHBhdGggZD0nTTI2LjA5LDkuMjNWLjkxaDUuNjJWMi40OEgyOFY0LjEyaDMuMzNWNS42NUgyOHYyaDRWOS4yM1onIC8+XG4gICAgPHBhdGggZD0nTTQuNDMsMTAuOTN2MUgyLjgydjQuMzNIMS42MVYxMkgwdi0xWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTguMTYsMTYuMjhDOC4xLDE2LjA5LDgsMTUuOSw4LDE1LjdsLS4yMS0uNThINS42N2MtLjA2LjE5LS4xMy4zOS0uMi41OXMtLjEzLjM4LS4xOS41N0g0Yy4yLS41OC4zOS0xLjExLjU3LTEuNnMuMzYtLjk1LjUzLTEuMzhsLjUxLTEuMjNjLjE3LS4zOS4zNS0uNzcuNTMtMS4xNEg3LjMxYy4xNy4zNy4zNS43NS41MiwxLjE0cy4zNC43OS41MSwxLjIzLjM1Ljg5LjU0LDEuMzguMzcsMSwuNTcsMS42Wk02LjcxLDEyLjE0YTIuMzIsMi4zMiwwLDAsMS0uMTIuMzJjMCwuMTMtLjExLjI4LS4xNy40NnMtLjE0LjM3LS4yMi41OC0uMTcuNDMtLjI1LjY2SDcuNDhsLS4yNC0uNjZjLS4wOC0uMjItLjE1LS40MS0uMjItLjU4bC0uMTgtLjQ3QTIuNjUsMi42NSwwLDAsMCw2LjcxLDEyLjE0WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMTIuNTUsMTEuODVhMS40NiwxLjQ2LDAsMCwwLTEuMjEuNDdBMiwyLDAsMCwwLDExLDEzLjZhMi4yNiwyLjI2LDAsMCwwLC4xLjcxLDEuNDksMS40OSwwLDAsMCwuMjcuNTUsMS4xOSwxLjE5LDAsMCwwLC40Ny4zNiwxLjQ1LDEuNDUsMCwwLDAsLjY1LjEzaC4zNGExLDEsMCwwLDAsLjI1LDBWMTMuNDVoMS4yVjE2LjFhMy42MSwzLjYxLDAsMCwxLS42OS4xOCw2LjQxLDYuNDEsMCwwLDEtMS4xOC4xLDMuMTEsMy4xMSwwLDAsMS0xLjA5LS4xOSwyLjE3LDIuMTcsMCwwLDEtLjg0LS41NCwyLjU2LDIuNTYsMCwwLDEtLjU0LS44NywzLjYsMy42LDAsMCwxLS4xOS0xLjE4LDMuMTIsMy4xMiwwLDAsMSwuMjEtMS4xOSwyLjU3LDIuNTcsMCwwLDEsLjU3LS44OCwyLjM3LDIuMzcsMCwwLDEsLjg1LS41NCwyLjg0LDIuODQsMCwwLDEsMS4wNS0uMTksNC42MSw0LjYxLDAsMCwxLC42OCwwbC41My4xMmEyLjM3LDIuMzcsMCwwLDEsLjM2LjEzbC4yMS4xMS0uMzUsMWEzLDMsMCwwLDAtLjU3LS4yM0EyLjU3LDIuNTcsMCwwLDAsMTIuNTUsMTEuODVaJ1xuICAgIC8+XG4gICAgPHBhdGggZD0nTTE4Ljk0LDE1LjI0djFIMTUuMzZWMTAuOTNoMS4yMXY0LjMxWicgLz5cbiAgICA8cGF0aCBkPSdNMTkuNzEsMTAuOTNoMS4ydjUuMzVoLTEuMlonIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yNS43NCwxNi4yOGMtLjM1LS42Mi0uNzItMS4yMi0xLjEyLTEuODJhMTkuNywxOS43LDAsMCwwLTEuMjgtMS42OXYzLjUxSDIyLjE1VjEwLjkzaDFhNy4zOSw3LjM5LDAsMCwxLC41Ni42MmMuMjEuMjUuNDIuNTEuNjMuNzlzLjQzLjU3LjY0Ljg4bC41OS44NlYxMC45M2gxLjJ2NS4zNVonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI4LDE2LjI4VjEwLjkzSDMxLjZ2MUgyOS4xOVYxM2gyLjE0djFIMjkuMTl2MS4yOWgyLjU5djFaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgcHg6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuICAgIDxnPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEwLDEwLjcxYTUuMzIsNS4zMiwwLDAsMS0uMiwxLjQ5LDMuNTMsMy41MywwLDAsMS0uNTksMS4xNiwyLjY3LDIuNjcsMCwwLDEtMSwuNzUsMy4xLDMuMSwwLDAsMS0xLjMzLjI3LDMuODksMy44OSwwLDAsMS0uNzgtLjA4LDQsNCwwLDAsMS0uNjktLjIzdjIuNjZoLTJWNy40MmwuNjItLjE1LjczLS4xMy43OC0uMDkuNzYsMGE0LjQ4LDQuNDgsMCwwLDEsMS41Ni4yNkEzLjI2LDMuMjYsMCwwLDEsOSw4YTMsMywwLDAsMSwuNzIsMS4xNkE0LjM5LDQuMzksMCwwLDEsMTAsMTAuNzFabS0yLC4wNmEyLjQyLDIuNDIsMCwwLDAtLjQyLTEuNDksMS40NCwxLjQ0LDAsMCwwLTEuMjMtLjU2bC0uNSwwLS4zNywwVjEyLjRhMS41MSwxLjUxLDAsMCwwLC40OS4yLDIuMSwyLjEsMCwwLDAsLjYxLjA5QzcuNDgsMTIuNjksOCwxMi4wNSw4LDEwLjc3WidcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPSdNMTQuMSw5LjE2bDEuNDEtMmgyLjA2bC0yLjQ1LDMuNDNhMjIuNDgsMjIuNDgsMCwwLDEsMS41LDEuOTNjLjQzLjY0Ljc4LDEuMiwxLjA1LDEuN0gxNS41MmwtLjI3LS41LS4zNi0uNjNhMy44OCwzLjg4LDAsMCwwLS40Mi0uNTZMMTQsMTIuMTNsLS40Mi4zOWEyLjQzLDIuNDMsMCwwLDAtLjM5LjUyYy0uMTMuMjEtLjI1LjQyLS4zNy42M3MtLjIzLjM5LS4zMy41N2gtMmMuMTEtLjIyLjI2LS40OC40NC0uNzlzLjM5LS42Mi42MS0uOTUuNDYtLjY0LjcxLS45NS41MS0uNTkuNzYtLjg2Yy0uNDQtLjYzLS44Ni0xLjIzLTEuMjctMS44bC0xLjItMS43MWgyLjE2WidcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz4sXG4gIGVtOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz5cbiAgICA8Zz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J00uOSwxMC43MmE0LjE4LDQuMTgsMCwwLDEsLjI5LTEuNjRBMy42MiwzLjYyLDAsMCwxLDEuOTQsNy45LDMuMjYsMy4yNiwwLDAsMSwzLDcuMTksMy4zNSwzLjM1LDAsMCwxLDQuMjgsN2EzLjE0LDMuMTQsMCwwLDEsMi4zOC45MiwzLjc4LDMuNzgsMCwwLDEsLjg3LDIuN2MwLC4xMiwwLC4yNSwwLC4zOXMwLC4yNiwwLC4zN0gzYTEuMzcsMS4zNywwLDAsMCwuNTgsMSwyLjM0LDIuMzQsMCwwLDAsMS4zNy4zNkE2LjM4LDYuMzgsMCwwLDAsNiwxMi41N2E0LjM4LDQuMzgsMCwwLDAsLjg3LS4yNWwuMjYsMS42MmEyLjM5LDIuMzksMCwwLDEtLjQzLjE3Yy0uMTguMDUtLjM3LjEtLjU5LjE0bC0uNzEuMWMtLjI1LDAtLjUsMC0uNzUsMEE0LjYxLDQuNjEsMCwwLDEsMywxNC4xMWEzLjI1LDMuMjUsMCwwLDEtMS4xNy0uNzgsMywzLDAsMCwxLS42OC0xLjE2QTQuNTQsNC41NCwwLDAsMSwuOSwxMC43MlpNNS42LDEwYTIuMSwyLjEsMCwwLDAtLjA5LS41QTEuMzcsMS4zNywwLDAsMCw1LjI4LDlhMS4yMiwxLjIyLDAsMCwwLS4zOS0uMzEsMS4yOCwxLjI4LDAsMCwwLS41OC0uMTIsMS40MywxLjQzLDAsMCwwLS41OC4xMSwxLjEzLDEuMTMsMCwwLDAtLjQuMzEsMS4zMSwxLjMxLDAsMCwwLS4yNS40M0EzLjE4LDMuMTgsMCwwLDAsMywxMFonXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD0nTTEzLDEwLjQ1YTIuODQsMi44NCwwLDAsMC0uMjUtMS4zNywxLDEsMCwwLDAtLjg2LS40bC0uMzksMC0uMzguMDVWMTQuMmgtMlY3LjM4Yy4xNywwLC4zNy0uMDkuNi0uMTRsLjczLS4xNHEuMzgtLjA2Ljc4LS4wOUwxMiw3YTMuMzUsMy4zNSwwLDAsMSwxLjI1LjE5LDMsMywwLDAsMSwuNzguNDYsMy43OSwzLjc5LDAsMCwxLDEtLjQ4QTMuMzEsMy4zMSwwLDAsMSwxNiw3YTMuNTEsMy41MSwwLDAsMSwxLjM5LjIzLDIuMDcsMi4wNywwLDAsMSwuODYuNjcsMi4zNywyLjM3LDAsMCwxLC40NCwxLDUuODcsNS44NywwLDAsMSwuMTMsMS4zMXY0aC0yVjEwLjQ1YTIuODYsMi44NiwwLDAsMC0uMjQtMS4zNywxLDEsMCwwLDAtLjg2LS40LDIuMTMsMi4xMywwLDAsMC0uNDUuMDgsMS44OSwxLjg5LDAsMCwwLS40Ny4yLDMuNTUsMy41NSwwLDAsMSwuMTIuNjVjMCwuMjMsMCwuNDgsMCwuNzRWMTQuMkgxM1onXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+LFxuICBwZXJjZW50OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz5cbiAgICA8Zz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9J005LjEsNy43YzAsMC44LTAuMiwxLjUtMC42LDEuOXMtMSwwLjctMS43LDAuN1M1LjQsMTAuMSw1LDkuN1M0LjMsOC42LDQuMyw3LjdTNC41LDYuMyw1LDUuOHMxLTAuNywxLjctMC43ICAgICBTOCw1LjQsOC40LDUuOFM5LjEsNi45LDkuMSw3Ljd6IE03LjUsNy43YzAtMC41LTAuMS0wLjgtMC4yLTFDNy4xLDYuNSw2LjksNi40LDYuNyw2LjRjLTAuMywwLTAuNSwwLjEtMC42LDAuM3MtMC4yLDAuNS0wLjIsMSAgICAgczAuMSwwLjgsMC4yLDFDNi4yLDksNi40LDkuMSw2LjcsOS4xYzAuMiwwLDAuNS0wLjEsMC42LTAuM0M3LjUsOC41LDcuNSw4LjIsNy41LDcuN3ogTTExLjcsNS40aDEuOWwtNS4yLDkuM0g2LjRMMTEuNyw1LjR6ICAgICAgTTE1LjcsMTIuM2MwLDAuOC0wLjIsMS41LTAuNiwxLjljLTAuNCwwLjQtMSwwLjctMS43LDAuN3MtMS4zLTAuMi0xLjctMC43cy0wLjYtMS4xLTAuNi0xLjljMC0wLjgsMC4yLTEuNSwwLjYtMS45ICAgICBjMC40LTAuNCwxLTAuNywxLjctMC43czEuMywwLjIsMS43LDAuN0MxNS41LDEwLjgsMTUuNywxMS40LDE1LjcsMTIuM3ogTTE0LjIsMTIuM2MwLTAuNS0wLjEtMC44LTAuMi0xICAgICBjLTAuMi0wLjItMC40LTAuMy0wLjYtMC4zYy0wLjMsMC0wLjUsMC4xLTAuNiwwLjNjLTAuMiwwLjItMC4yLDAuNS0wLjIsMXMwLjEsMC44LDAuMiwxczAuNCwwLjMsMC42LDAuM2MwLjIsMCwwLjUtMC4xLDAuNi0wLjMgICAgIEMxNC4xLDEzLDE0LjIsMTIuNywxNC4yLDEyLjN6J1xuICAgICAgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPixcbiAgYnV0dG9uRmlsbDogPHN2Z1xuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyLjU4IDExLjAxJ1xuICAgIGNsYXNzTmFtZT0nYnV0dG9uLWZpbGxlZC1zdmcnXG4gID5cbiAgICA8cmVjdCB3aWR0aD0nMzIuNTgnIGhlaWdodD0nMTEuMDEnIHJ4PScxJyAvPlxuICAgIDxwYXRoIGQ9J001LDcuOTNWMy4wN0g4LjIyVjRINi4wNlY1SDh2LjkxSDYuMDZ2MlonIC8+XG4gICAgPHBhdGggZD0nTTksMy4wN2gxLjA5VjcuOTNIOVonIC8+XG4gICAgPHBhdGggZD0nTTE0LjQ1LDd2Ljk0SDExLjIxVjMuMDdIMTIuM1Y3WicgLz5cbiAgICA8cGF0aCBkPSdNMTguNCw3di45NEgxNS4xNlYzLjA3aDEuMDlWN1onIC8+XG4gICAgPHBhdGggZD0nTTE5LjExLDcuOTNWMy4wN2gzLjI4VjRIMjAuMnYxaDEuOTR2LjlIMjAuMlY3aDIuMzV2LjkyWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI3LjYyLDUuNWEyLjg4LDIuODgsMCwwLDEtLjIsMS4xLDIuMTEsMi4xMSwwLDAsMS0uNTYuNzgsMi4zOCwyLjM4LDAsMCwxLS44OC40NkE0LjEzLDQuMTMsMCwwLDEsMjQuODIsOGMtLjIsMC0uNDMsMC0uNjksMGE2LjQ4LDYuNDgsMCwwLDEtLjc3LS4xVjMuMTNBNi4zNSw2LjM1LDAsMCwxLDI0LjE1LDNsLjcsMEE0LjQ1LDQuNDUsMCwwLDEsMjYsMy4xNWEyLjMyLDIuMzIsMCwwLDEsLjg3LjQ1LDEuOTIsMS45MiwwLDAsMSwuNTYuNzdBMi45MywyLjkzLDAsMCwxLDI3LjYyLDUuNVpNMjQuNDUsN2guNDJhMS41OSwxLjU5LDAsMCwwLDEuMjItLjQxLDEuNjEsMS42MSwwLDAsMCwuNC0xLjE0LDEuNjIsMS42MiwwLDAsMC0uMzgtMS4xNkExLjYsMS42LDAsMCwwLDI0LjkxLDRoLS4yM2wtLjIzLDBaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgYnV0dG9uT3V0bGluZTogPHN2Z1xuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB2aWV3Qm94PScwIDAgMzkuMDEgMTIuMDEnXG4gICAgY2xhc3NOYW1lPSdidXR0b24tb3V0bGluZS1zdmcnXG4gID5cbiAgICA8cmVjdFxuICAgICAgY2xhc3NOYW1lPSdhJyB4PScwLjUnIHk9JzAuNScgd2lkdGg9JzM4LjAxJyBoZWlnaHQ9JzExLjAxJ1xuICAgICAgcng9JzEuMDgnXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTkuMzgsNkEyLjgzLDIuODMsMCwwLDEsOS4xOSw3LjFhMi4xMiwyLjEyLDAsMCwxLS41MS44LDIuMTQsMi4xNCwwLDAsMS0uNzYuNDgsMi43NiwyLjc2LDAsMCwxLTEsLjE2QTIuNjUsMi42NSwwLDAsMSw2LDguMzhhMi4xOCwyLjE4LDAsMCwxLS43Ny0uNDgsMi4xNCwyLjE0LDAsMCwxLS41Mi0uOEEyLjgzLDIuODMsMCwwLDEsNC41NCw2YTIuODgsMi44OCwwLDAsMSwuMTktMS4xLDIuNTQsMi41NCwwLDAsMSwuNTMtLjhBMi4zMiwyLjMyLDAsMCwxLDYsMy42MywyLjU4LDIuNTgsMCwwLDEsNywzLjQ3YTIuNjksMi42OSwwLDAsMSwuOTQuMTYsMi4yNywyLjI3LDAsMCwxLC43Ny40OCwyLjM2LDIuMzYsMCwwLDEsLjUyLjhBMi44OCwyLjg4LDAsMCwxLDkuMzgsNlpNNS42Nyw2YTIuMTEsMi4xMSwwLDAsMCwuMDkuNjQsMS4zOCwxLjM4LDAsMCwwLC4yNS41LDEuMTMsMS4xMywwLDAsMCwuNC4zMkExLjM1LDEuMzUsMCwwLDAsNyw3LjU4YTEuMzMsMS4zMywwLDAsMCwuNTQtLjExLDEuMTcsMS4xNywwLDAsMCwuNDEtLjMyLDEuNTYsMS41NiwwLDAsMCwuMjUtLjVBMi4xMSwyLjExLDAsMCwwLDguMjUsNmEyLjE3LDIuMTcsMCwwLDAtLjA5LS42NSwxLjQ3LDEuNDcsMCwwLDAtLjI1LS41LDEuMTcsMS4xNywwLDAsMC0uNDEtLjMyQTEuMzMsMS4zMywwLDAsMCw3LDQuNDNhMS4zNSwxLjM1LDAsMCwwLS41NS4xMSwxLjE2LDEuMTYsMCwwLDAtLjQuMzMsMS4zMSwxLjMxLDAsMCwwLS4yNS41QTIuMTEsMi4xMSwwLDAsMCw1LjY3LDZaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xMi4xOSw4LjU0YTIuNTgsMi41OCwwLDAsMS0uODgtLjE0LDEuNzksMS43OSwwLDAsMS0uNjItLjQsMS41NSwxLjU1LDAsMCwxLS4zNS0uNjEsMi40NywyLjQ3LDAsMCwxLS4xMi0uNzl2LTNoMS4xVjYuNTFhMS43NSwxLjc1LDAsMCwwLC4wNi41LDEuMiwxLjIsMCwwLDAsLjE4LjM0LjczLjczLDAsMCwwLC4yOC4xOSwxLjQ0LDEuNDQsMCwwLDAsLjM3LDAsLjkyLjkyLDAsMCwwLC42NS0uMjQsMS4xOSwxLjE5LDAsMCwwLC4yNC0uODRWMy41OGgxLjF2M2EyLjQ3LDIuNDcsMCwwLDEtLjEyLjc5LDEuNjIsMS42MiwwLDAsMS0uMzYuNjEsMS43LDEuNywwLDAsMS0uNjMuNEEyLjY2LDIuNjYsMCwwLDEsMTIuMTksOC41NFonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTguODYsMy41OHYuOTNIMTcuMzlWOC40NEgxNi4zVjQuNTFIMTQuODNWMy41OFonIC8+XG4gICAgPHBhdGggZD0nTTIyLjgxLDcuNXYuOTRIMTkuNTZWMy41OGgxLjA5VjcuNVonIC8+XG4gICAgPHBhdGggZD0nTTIzLjUxLDMuNThIMjQuNlY4LjQ0SDIzLjUxWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI5LDguNDRxLS40Ni0uODItMS0xLjY1YTE2LjE2LDE2LjE2LDAsMCwwLTEuMTYtMS41M1Y4LjQ0SDI1LjczVjMuNThoLjg5cS4yMi4yMi41MS41N3QuNTcuNzJjLjIuMjUuMzkuNTIuNTguNzlsLjU0Ljc5VjMuNThoMS4wOVY4LjQ0WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMzEsOC40NFYzLjU4aDMuMjhWNC41SDMyLjEzdjFoMS45NHYuOUgzMi4xM1Y3LjUyaDIuMzV2LjkyWidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIG1lbnVQbGFpbjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNC4wMyA4LjQ4Jz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTIuNDUsMGMuMTQuMjYuMzEuNTkuNSwxcy4zOC44MS41OSwxLjI2LjQuOTEuNiwxLjM4TDQuNzEsNWwuNTctMS4zNHEuMy0uNy42LTEuMzhjLjIxLS40NS40LS44Ny41OS0xLjI2UzYuODMuMjYsNywwSDguNjhjLjA4LjU1LjE1LDEuMTcuMjIsMS44NVM5LDMuMjUsOS4wOCw0cy4xLDEuNDguMTQsMi4yMy4wOCwxLjQ0LjEyLDIuMUg3LjUxcTAtMS4yMi0uMDktMi42NFQ3LjI0LDIuOEw2Ljc1LDMuOTEsNi4yMyw1LjE0bC0uNSwxLjE3LS40MSwxSDRjLS4xMS0uMjYtLjI0LS41OC0uNDEtMUwzLjExLDUuMTQsMi41OCwzLjkxUTIuMzMsMy4zLDIuMSwyLjgsMiw0LjI0LDEuOTIsNS42OGMwLDEtLjA3LDEuODMtLjEsMi42NEgwQzAsNy42Ni4wNyw3LC4xMSw2LjIyTC4yNiw0YzAtLjc0LjExLTEuNDUuMTgtMi4xNFMuNTguNTUuNjYsMFonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTEsOC4zMlYwaDUuNjJWMS41N0gxMi44OFYzLjJIMTYuMlY0Ljc0SDEyLjg4djJoNFY4LjMyWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTIzLjg2LDguMzJxLS44MS0xLjQ0LTEuNzQtMi44MmEyOCwyOCwwLDAsMC0yLTIuNjNWOC4zMkgxOC4yOFYwSDE5LjhjLjI2LjI2LjU2LjU5Ljg4LDFzLjY0LjgsMSwxLjIzLjY3Ljg5LDEsMS4zNmwuOTMsMS4zNVYwaDEuODZWOC4zMlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTMwLjYsOC40OGE0LjI3LDQuMjcsMCwwLDEtMS41MS0uMjRBMi43MSwyLjcxLDAsMCwxLDI4LDcuNTVhMi42NSwyLjY1LDAsMCwxLS42MS0xLDQuMDUsNC4wNSwwLDAsMS0uMi0xLjM0VjBIMjkuMVY1YTMsMywwLDAsMCwuMTEuODUsMS41NCwxLjU0LDAsMCwwLC4zMi41OCwxLjEzLDEuMTMsMCwwLDAsLjQ4LjMyLDIsMiwwLDAsMCwuNjEuMDksMS41LDEuNSwwLDAsMCwxLjExLS40MkExLjkxLDEuOTEsMCwwLDAsMzIuMTYsNVYwSDM0VjUuMTdhNC40NSw0LjQ1LDAsMCwxLS4yLDEuMzUsMywzLDAsMCwxLS42MywxLjA1LDIuNzksMi43OSwwLDAsMS0xLjA2LjY3QTQuNDksNC40OSwwLDAsMSwzMC42LDguNDhaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbWVudUZpbGxlZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0Mi41NiAxMy4wMSc+XG4gICAgPHJlY3Qgd2lkdGg9JzQyLjU2JyBoZWlnaHQ9JzEzLjAxJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNi43MSwyLjI2Yy4xNS4yNy4zMS41OS41LDFzLjM5LjgxLjU5LDEuMjYuNDEuOTIuNjEsMS4zOUw5LDcuMjJjLjE4LS40MS4zNy0uODYuNTctMS4zM3MuNC0uOTQuNjEtMS4zOS40LS44Ny41OS0xLjI2LjM1LS43MS41LTFoMS43Yy4wOC41Ni4xNSwxLjE3LjIyLDEuODZzLjEzLDEuMzkuMTgsMi4xM2wuMTUsMi4yM2MwLC43NC4wOCwxLjQ1LjExLDIuMUgxMS43OGMwLS44MS0uMDYtMS42OS0uMS0yLjY0UzExLjU4LDYsMTEuNSw1LjA2Yy0uMTQuMzQtLjMuNzEtLjQ4LDEuMTJzLS4zNS44MS0uNTMsMS4yMi0uMzMuOC0uNSwxLjE3bC0uNC45NUg4LjI4Yy0uMTItLjI2LS4yNS0uNTgtLjQxLS45NXMtLjMzLS43Ni0uNS0xLjE3UzcsNi41OCw2Ljg1LDYuMThMNi4zNiw1LjA2cS0uMTIsMS40Ni0uMTgsMi44OHQtLjA5LDIuNjRINC4yNmMwLS42NS4wNy0xLjM2LjEyLTIuMVM0LjQ3LDcsNC41Miw2LjI1cy4xMS0xLjQ1LjE4LTIuMTMuMTQtMS4zLjIyLTEuODZaJ1xuICAgIC8+XG4gICAgPHBhdGggZD0nTTE1LjI3LDEwLjU4VjIuMjZoNS42MVYzLjg0SDE3LjE0VjUuNDdoMy4zMlY3SDE3LjE0VjloNHYxLjU3WicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTI4LjEyLDEwLjU4cS0uODEtMS40Mi0xLjc0LTIuODJhMjkuMjMsMjkuMjMsMCwwLDAtMi0yLjYzdjUuNDVIMjIuNTRWMi4yNmgxLjUyYy4yNy4yNy41Ni41OS44OCwxcy42NS43OSwxLDEuMjMuNjYuODgsMSwxLjM1LjYzLjkyLjkyLDEuMzVWMi4yNmgxLjg2djguMzJaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zNC44NiwxMC43NWE0LjA4LDQuMDgsMCwwLDEtMS41MS0uMjUsMi44NSwyLjg1LDAsMCwxLTEuMDUtLjY4LDIuNzQsMi43NCwwLDAsMS0uNjEtMS4wNSw0LjI3LDQuMjcsMCwwLDEtLjItMS4zM1YyLjI2aDEuODd2NWEyLjcsMi43LDAsMCwwLC4xMi44NiwxLjQ4LDEuNDgsMCwwLDAsLjMxLjU3LDEsMSwwLDAsMCwuNDguMzIsMS43NSwxLjc1LDAsMCwwLC42Mi4xQTEuNTMsMS41MywwLDAsMCwzNiw4LjcxYTIsMiwwLDAsMCwuNDItMS40M3YtNWgxLjg3VjcuNDRhNC4xLDQuMSwwLDAsMS0uMiwxLjM0LDIuNzYsMi43NiwwLDAsMS0uNjIsMS4wNSwyLjg1LDIuODUsMCwwLDEtMS4wNy42OEE0LjQ1LDQuNDUsMCwwLDEsMzQuODYsMTAuNzVaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT0nc3ZnLXRleHQnXG4gICAgICBkPSdNNi43MSwyLjI2Yy4xNS4yNy4zMS41OS41LDFzLjM5LjgxLjU5LDEuMjYuNDEuOTIuNjEsMS4zOVM4LjgsNi44LDksNy4yMmwuNTctMS4zM2MuMi0uNDcuNC0uOTQuNjEtMS4zOXMuNC0uODcuNTktMS4yNi4zNS0uNzEuNS0xaDEuN2MuMDguNTYuMTUsMS4xNy4yMiwxLjg2cy4xMywxLjM5LjE4LDIuMTNsLjE1LDIuMjNjMCwuNzQuMDgsMS40NC4xMSwyLjFIMTEuNzhjMC0uODEtLjA2LTEuNjktLjEtMi42NFMxMS41OCw2LDExLjUsNS4wNmMtLjE0LjM0LS4zLjcxLS40OCwxLjEycy0uMzUuODEtLjUzLDEuMjItLjMzLjgtLjUsMS4xN2wtLjQuOTVIOC4yOGMtLjEyLS4yNi0uMjUtLjU4LS40MS0uOTVzLS4zMy0uNzYtLjUtMS4xN1M3LDYuNTgsNi44NSw2LjE4TDYuMzYsNS4wNnEtLjEyLDEuNDYtLjE4LDIuODh0LS4wOSwyLjY0SDQuMjZjMC0uNjYuMDctMS4zNi4xMi0yLjFTNC40Nyw3LDQuNTIsNi4yNXMuMTEtMS40NS4xOC0yLjEzLjE0LTEuMy4yMi0xLjg2WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuICAgICAgZD0nTTE1LjI3LDEwLjU4VjIuMjZoNS42MVYzLjg0SDE3LjE0VjUuNDdoMy4zMlY3SDE3LjE0VjloNHYxLjU3WidcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuICAgICAgZD0nTTI4LjEyLDEwLjU4cS0uODEtMS40Mi0xLjc0LTIuODJhMjkuMjMsMjkuMjMsMCwwLDAtMi0yLjYzdjUuNDVIMjIuNTRWMi4yNmgxLjUyYy4yNy4yNy41Ni41OS44OCwxcy42NS43OSwxLDEuMjMuNjYuODgsMSwxLjM1LjYzLjkyLjkyLDEuMzVWMi4yNmgxLjg2djguMzJaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGNsYXNzTmFtZT0nc3ZnLXRleHQnXG4gICAgICBkPSdNMzQuODYsMTAuNzVhNC4wOCw0LjA4LDAsMCwxLTEuNTEtLjI1LDIuODUsMi44NSwwLDAsMS0xLjA1LS42OCwyLjc0LDIuNzQsMCwwLDEtLjYxLTEuMDUsNC4zMSw0LjMxLDAsMCwxLS4yLTEuMzNWMi4yNmgxLjg3djVhMi43LDIuNywwLDAsMCwuMTIuODYsMS40OCwxLjQ4LDAsMCwwLC4zMS41NywxLDEsMCwwLDAsLjQ4LjMyLDEuNzUsMS43NSwwLDAsMCwuNjIuMUExLjUzLDEuNTMsMCwwLDAsMzYsOC43MWEyLDIsMCwwLDAsLjQyLTEuNDN2LTVoMS44N1Y3LjQ0YTQuMTQsNC4xNCwwLDAsMS0uMiwxLjM0LDIuNzYsMi43NiwwLDAsMS0uNjIsMS4wNSwyLjg1LDIuODUsMCwwLDEtMS4wNy42OEE0LjQ1LDQuNDUsMCwwLDEsMzQuODYsMTAuNzVaJ1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbWVudVVuZGVybGluZTogPHN2Z1xuICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB2aWV3Qm94PScwIDAgMzQuMDMgMTAuNzUnXG4gICAgICAgICAgICAgICAgID5cbiAgICA8cGF0aFxuICAgICAgZD0nTTIuNDUsMGMuMTQuMjYuMzEuNTkuNSwxcy4zOC44MS41OSwxLjI2LjQuOTEuNiwxLjM4TDQuNzEsNWwuNTctMS4zNHEuMy0uNy42LTEuMzhjLjIxLS40NS40LS44Ny41OS0xLjI2UzYuODMuMjYsNywwSDguNjhjLjA4LjU1LjE1LDEuMTcuMjIsMS44NVM5LDMuMjUsOS4wOCw0cy4xLDEuNDguMTQsMi4yMy4wOCwxLjQ0LjEyLDIuMUg3LjUxcTAtMS4yMi0uMDktMi42NFQ3LjI0LDIuOEw2Ljc1LDMuOTEsNi4yMyw1LjE0bC0uNSwxLjE3LS40MSwxSDRjLS4xMS0uMjYtLjI0LS41OC0uNDEtMUwzLjExLDUuMTQsMi41OCwzLjkxUTIuMzMsMy4zLDIuMSwyLjgsMiw0LjI0LDEuOTIsNS42OGMwLDEtLjA3LDEuODMtLjEsMi42NEgwQzAsNy42Ni4wNyw3LC4xMSw2LjIyTC4yNiw0YzAtLjc0LjExLTEuNDUuMTgtMi4xNFMuNTguNTUuNjYsMFonXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTEsOC4zMlYwaDUuNjJWMS41N0gxMi44OFYzLjJIMTYuMlY0Ljc0SDEyLjg4djJoNFY4LjMyWicgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTIzLjg2LDguMzJxLS44MS0xLjQ0LTEuNzQtMi44MmEyOCwyOCwwLDAsMC0yLTIuNjNWOC4zMkgxOC4yOFYwSDE5LjhjLjI2LjI2LjU2LjU5Ljg4LDFzLjY0LjgsMSwxLjIzLjY3Ljg5LDEsMS4zNmwuOTMsMS4zNVYwaDEuODZWOC4zMlonXG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTMwLjYsOC40OGE0LjI3LDQuMjcsMCwwLDEtMS41MS0uMjRBMi43MSwyLjcxLDAsMCwxLDI4LDcuNTVhMi42NSwyLjY1LDAsMCwxLS42MS0xLDQuMDUsNC4wNSwwLDAsMS0uMi0xLjM0VjBIMjkuMVY1YTMsMywwLDAsMCwuMTEuODUsMS41NCwxLjU0LDAsMCwwLC4zMi41OCwxLjEzLDEuMTMsMCwwLDAsLjQ4LjMyLDIsMiwwLDAsMCwuNjEuMDksMS41LDEuNSwwLDAsMCwxLjExLS40MkExLjkxLDEuOTEsMCwwLDAsMzIuMTYsNVYwSDM0VjUuMTdhNC40NSw0LjQ1LDAsMCwxLS4yLDEuMzUsMywzLDAsMCwxLS42MywxLjA1LDIuNzksMi43OSwwLDAsMS0xLjA2LjY3QTQuNDksNC40OSwwLDAsMSwzMC42LDguNDhaJ1xuICAgIC8+XG4gICAgPHJlY3QgeT0nOS4zMicgd2lkdGg9JzM0LjAzJyBoZWlnaHQ9JzEuNDMnIC8+XG4gIDwvc3ZnPixcbiAgbWVudU92ZXJsaW5lOiA8c3ZnXG4gICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgIHZpZXdCb3g9JzAgMCAzNC4wMyAxMC45MidcbiAgICAgICAgICAgICAgICA+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yLjQ1LDIuNDNjLjE0LjI3LjMxLjU5LjUsMXMuMzguODEuNTksMS4yNi40LjkxLjYsMS4zOWwuNTcsMS4zMy41Ny0xLjMzYy4yLS40OC40LS45NC42LTEuMzlzLjQtLjg3LjU5LTEuMjYuMzYtLjcxLjUtMUg4LjY4Yy4wOC41Ni4xNSwxLjE3LjIyLDEuODZTOSw1LjY4LDkuMDgsNi40MnMuMSwxLjQ5LjE0LDIuMjMuMDgsMS40NC4xMiwyLjFINy41MXEwLTEuMjEtLjA5LTIuNjRUNy4yNCw1LjIzTDYuNzUsNi4zNWMtLjE3LjQtLjM1LjgxLS41MiwxLjIycy0uMzQuOC0uNSwxLjE3bC0uNDEuOTVINGMtLjExLS4yNi0uMjQtLjU4LS40MS0uOTVTMy4yOCw4LDMuMTEsNy41N3MtLjM1LS44Mi0uNTMtMS4yMi0uMzMtLjc4LS40OC0xLjEyUTIsNi42OSwxLjkyLDguMTFjMCwxLS4wNywxLjgzLS4xLDIuNjRIMGMwLS42Ni4wNy0xLjM2LjExLTIuMUwuMjYsNi40MlEuMzQsNS4zMS40NCw0LjI5Qy41MSwzLjYuNTgsMywuNjYsMi40M1onXG4gICAgLz5cbiAgICA8cGF0aCBkPSdNMTEsMTAuNzVWMi40M2g1LjYyVjRIMTIuODhWNS42NEgxNi4yVjcuMTdIMTIuODh2Mmg0djEuNTdaJyAvPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjMuODYsMTAuNzVxLS44MS0xLjQyLTEuNzQtMi44MmEyOCwyOCwwLDAsMC0yLTIuNjN2NS40NUgxOC4yOFYyLjQzSDE5LjhjLjI2LjI3LjU2LjU5Ljg4LDFzLjY0Ljc5LDEsMS4yMy42Ny44OCwxLDEuMzVsLjkzLDEuMzVWMi40M2gxLjg2djguMzJaJ1xuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zMC42LDEwLjkyYTQuMjYsNC4yNiwwLDAsMS0xLjUxLS4yNUEyLjY5LDIuNjksMCwwLDEsMjgsMTBhMi42MiwyLjYyLDAsMCwxLS42MS0xLjA1LDQsNCwwLDAsMS0uMi0xLjMzVjIuNDNIMjkuMXY1YTMsMywwLDAsMCwuMTEuODYsMS40OSwxLjQ5LDAsMCwwLC4zMi41N0ExLDEsMCwwLDAsMzAsOS4yYTEuNywxLjcsMCwwLDAsLjYxLjEsMS41LDEuNSwwLDAsMCwxLjExLS40MiwxLjk0LDEuOTQsMCwwLDAsLjQzLTEuNDN2LTVIMzRWNy42MUE0LjQzLDQuNDMsMCwwLDEsMzMuODMsOWEyLjcyLDIuNzIsMCwwLDEtMS42OSwxLjczQTQuNDksNC40OSwwLDAsMSwzMC42LDEwLjkyWidcbiAgICAvPlxuICAgIDxyZWN0IHdpZHRoPSczNC4wMycgaGVpZ2h0PScxLjQzJyAvPlxuICA8L3N2Zz4sXG4gIG15QWNjb3VudFVzZXJzU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J005NiAyMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRzLTI4LjctNjQtNjQtNjQtNjQgMjguNy02NCA2NCAyOC43IDY0IDY0IDY0em00NDggMGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NC02NCAyOC43LTY0IDY0IDI4LjcgNjQgNjQgNjR6bTMyIDMyaC02NGMtMTcuNiAwLTMzLjUgNy4xLTQ1LjEgMTguNiA0MC4zIDIyLjEgNjguOSA2MiA3NS4xIDEwOS40aDY2YzE3LjcgMCAzMi0xNC4zIDMyLTMydi0zMmMwLTM1LjMtMjguNy02NC02NC02NHptLTI1NiAwYzYxLjkgMCAxMTItNTAuMSAxMTItMTEyUzM4MS45IDMyIDMyMCAzMiAyMDggODIuMSAyMDggMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDMTc5LjYgMjg4IDEyOCAzMzkuNiAxMjggNDAzLjJWNDMyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDI4OGMyNi41IDAgNDgtMjEuNSA0OC00OHYtMjguOGMwLTYzLjYtNTEuNi0xMTUuMi0xMTUuMi0xMTUuMnptLTIyMy43LTEzLjRDMTYxLjUgMjYzLjEgMTQ1LjYgMjU2IDEyOCAyNTZINjRjLTM1LjMgMC02NCAyOC43LTY0IDY0djMyYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY1LjljNi4zLTQ3LjQgMzQuOS04Ny4zIDc1LjItMTA5LjR6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlcnNGaXJlbmRzU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00xOTIgMjU2YzYxLjkgMCAxMTItNTAuMSAxMTItMTEyUzI1My45IDMyIDE5MiAzMiA4MCA4Mi4xIDgwIDE0NHM1MC4xIDExMiAxMTIgMTEyem03Ni44IDMyaC04LjNjLTIwLjggMTAtNDMuOSAxNi02OC41IDE2cy00Ny42LTYtNjguNS0xNmgtOC4zQzUxLjYgMjg4IDAgMzM5LjYgMCA0MDMuMlY0MzJjMCAyNi41IDIxLjUgNDggNDggNDhoMjg4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yOC44YzAtNjMuNi01MS42LTExNS4yLTExNS4yLTExNS4yek00ODAgMjU2YzUzIDAgOTYtNDMgOTYtOTZzLTQzLTk2LTk2LTk2LTk2IDQzLTk2IDk2IDQzIDk2IDk2IDk2em00OCAzMmgtMy44Yy0xMy45IDQuOC0yOC42IDgtNDQuMiA4cy0zMC4zLTMuMi00NC4yLThINDMyYy0yMC40IDAtMzkuMiA1LjktNTUuNyAxNS40IDI0LjQgMjYuMyAzOS43IDYxLjIgMzkuNyA5OS44djM4LjRjMCAyLjItLjUgNC4zLS42IDYuNEg1OTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDggMC02MS45LTUwLjEtMTEyLTExMi0xMTJ6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclNvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjI0IDI1NmM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOFMyOTQuNyAwIDIyNCAwIDk2IDU3LjMgOTYgMTI4czU3LjMgMTI4IDEyOCAxMjh6bTg5LjYgMzJoLTE2LjdjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZoLTE2LjdDNjAuMiAyODggMCAzNDguMiAwIDQyMi40VjQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTQxLjZjMC03NC4yLTYwLjItMTM0LjQtMTM0LjQtMTM0LjR6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclJlZ3VsYXI6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00zMTMuNiAzMDRjLTI4LjcgMC00Mi41IDE2LTg5LjYgMTYtNDcuMSAwLTYwLjgtMTYtODkuNi0xNkM2MC4yIDMwNCAwIDM2NC4yIDAgNDM4LjRWNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OHYtMjUuNmMwLTc0LjItNjAuMi0xMzQuNC0xMzQuNC0xMzQuNHpNNDAwIDQ2NEg0OHYtMjUuNmMwLTQ3LjYgMzguOC04Ni40IDg2LjQtODYuNCAxNC42IDAgMzguMyAxNiA4OS42IDE2IDUxLjcgMCA3NC45LTE2IDg5LjYtMTYgNDcuNiAwIDg2LjQgMzguOCA4Ni40IDg2LjRWNDY0ek0yMjQgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMwMy41IDAgMjI0IDAgODAgNjQuNSA4MCAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMC0yNDBjNTIuOSAwIDk2IDQzLjEgOTYgOTZzLTQzLjEgOTYtOTYgOTYtOTYtNDMuMS05Ni05NiA0My4xLTk2IDk2LTk2eidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIG15QWNjb3VudFVzZXJUYWdTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTYzMC42IDM2NC45bC05MC4zLTkwLjJjLTEyLTEyLTI4LjMtMTguNy00NS4zLTE4LjdoLTc5LjNjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjc5LjJjMCAxNyA2LjcgMzMuMiAxOC43IDQ1LjJsOTAuMyA5MC4yYzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDkyLjUtOTIuNWMxMi42LTEyLjUgMTIuNi0zMi43LjEtNDUuMnptLTE4Mi44LTIxYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0IDI0IDEwLjcgMjQgMjRjMCAxMy4yLTEwLjcgMjQtMjQgMjR6bS0yMjMuOC04OGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOEMzNTIgNTcuMyAyOTQuNyAwIDIyNCAwUzk2IDU3LjMgOTYgMTI4YzAgNzAuNiA1Ny4zIDEyNy45IDEyOCAxMjcuOXptMTI3LjggMTExLjJWMjk0Yy0xMi4yLTMuNi0yNC45LTYuMi0zOC4yLTYuMmgtMTYuN2MtMjIuMiAxMC4yLTQ2LjkgMTYtNzIuOSAxNnMtNTAuNi01LjgtNzIuOS0xNmgtMTYuN0M2MC4yIDI4Ny45IDAgMzQ4LjEgMCA0MjIuM3Y0MS42YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMxNS41IDAgMjkuMS03LjUgMzcuOS0xOC45bC01OC01OGMtMTguMS0xOC4xLTI4LjEtNDIuMi0yOC4xLTY3Ljl6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlckFsdFNvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMjU2IDI4OGM3OS41IDAgMTQ0LTY0LjUgMTQ0LTE0NFMzMzUuNSAwIDI1NiAwIDExMiA2NC41IDExMiAxNDRzNjQuNSAxNDQgMTQ0IDE0NHptMTI4IDMyaC01NS4xYy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2SDEyOEM1Ny4zIDMyMCAwIDM3Ny4zIDAgNDQ4djE2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQxNmMyNi41IDAgNDgtMjEuNSA0OC00OHYtMTZjMC03MC43LTU3LjMtMTI4LTEyOC0xMjh6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlckF2YXRhcjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cbiAgICA8cGF0aCBkPSdNMjU2IDhDMTE5LjMgOCA4IDExOS4yIDggMjU2YzAgMTM2LjcgMTExLjMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4zIDI0OC0yNDhDNTA0IDExOS4yIDM5Mi43IDggMjU2IDh6TTMzIDI1NmMwLTMyLjMgNi45LTYzIDE5LjMtOTAuN2wxMDYuNCAyOTEuNEM4NC4zIDQyMC41IDMzIDM0NC4yIDMzIDI1NnptMjIzIDIyM2MtMjEuOSAwLTQzLTMuMi02My05LjFsNjYuOS0xOTQuNCA2OC41IDE4Ny44Yy41IDEuMSAxIDIuMSAxLjYgMy4xLTIzLjEgOC4xLTQ4IDEyLjYtNzQgMTIuNnptMzAuNy0zMjcuNWMxMy40LS43IDI1LjUtMi4xIDI1LjUtMi4xIDEyLTEuNCAxMC42LTE5LjEtMS40LTE4LjQgMCAwLTM2LjEgMi44LTU5LjQgMi44LTIxLjkgMC01OC43LTIuOC01OC43LTIuOC0xMi0uNy0xMy40IDE3LjctMS40IDE4LjQgMCAwIDExLjQgMS40IDIzLjQgMi4xbDM0LjcgOTUuMkwyMDAuNiAzOTNsLTgxLjItMjQxLjVjMTMuNC0uNyAyNS41LTIuMSAyNS41LTIuMSAxMi0xLjQgMTAuNi0xOS4xLTEuNC0xOC40IDAgMC0zNi4xIDIuOC01OS40IDIuOC00LjIgMC05LjEtLjEtMTQuNC0uM0MxMDkuNiA3MyAxNzguMSAzMyAyNTYgMzNjNTggMCAxMTAuOSAyMi4yIDE1MC42IDU4LjUtMS0uMS0xLjktLjItMi45LS4yLTIxLjkgMC0zNy40IDE5LjEtMzcuNCAzOS42IDAgMTguNCAxMC42IDMzLjkgMjEuOSA1Mi4zIDguNSAxNC44IDE4LjQgMzMuOSAxOC40IDYxLjUgMCAxOS4xLTcuMyA0MS4yLTE3IDcyLjFsLTIyLjIgNzQuMy04MC43LTIzOS42em04MS40IDI5Ny4ybDY4LjEtMTk2LjljMTIuNy0zMS44IDE3LTU3LjIgMTctNzkuOSAwLTguMi0uNS0xNS44LTEuNS0yMi45IDE3LjQgMzEuOCAyNy4zIDY4LjIgMjcuMyAxMDcgMCA4Mi4zLTQ0LjYgMTU0LjEtMTEwLjkgMTkyLjd6JyAvPlxuICA8L3N2Zz4sXG4gIG15QWNjb3VudE5vbmU6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzUyIDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlMTogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNzkyIDE3OTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNzA0IDE1MzZxMCA1Mi0zOCA5MHQtOTAgMzgtOTAtMzgtMzgtOTAgMzgtOTAgOTAtMzggOTAgMzggMzggOTB6bTg5NiAwcTAgNTItMzggOTB0LTkwIDM4LTkwLTM4LTM4LTkwIDM4LTkwIDkwLTM4IDkwIDM4IDM4IDkwem0xMjgtMTA4OHY1MTJxMCAyNC0xNi41IDQyLjV0LTQwLjUgMjEuNWwtMTA0NCAxMjJxMTMgNjAgMTMgNzAgMCAxNi0yNCA2NGg5MjBxMjYgMCA0NSAxOXQxOSA0NS0xOSA0NS00NSAxOWgtMTAyNHEtMjYgMC00NS0xOXQtMTktNDVxMC0xMSA4LTMxLjV0MTYtMzYgMjEuNS00MCAxNS41LTI5LjVsLTE3Ny04MjNoLTIwNHEtMjYgMC00NS0xOXQtMTktNDUgMTktNDUgNDUtMTloMjU2cTE2IDAgMjguNSA2LjV0MTkuNSAxNS41IDEzIDI0LjUgOCAyNiA1LjUgMjkuNSA0LjUgMjZoMTIwMXEyNiAwIDQ1IDE5dDE5IDQ1eidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGUyOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNNTA0LjcxNyAzMjBIMjExLjU3Mmw2LjU0NSAzMmgyNjguNDE4YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNS41MTcgMjQuMjc2QzUyMy4xMTIgNDE0LjY2OCA1MzYgNDMzLjgyOCA1MzYgNDU2YzAgMzEuMjAyLTI1LjUxOSA1Ni40NDQtNTYuODI0IDU1Ljk5NC0yOS44MjMtLjQyOS01NC4zNS0yNC42MzEtNTUuMTU1LTU0LjQ0Ny0uNDQtMTYuMjg3IDYuMDg1LTMxLjA0OSAxNi44MDMtNDEuNTQ4SDIzMS4xNzZDMjQxLjU1MyA0MjYuMTY1IDI0OCA0NDAuMzI2IDI0OCA0NTZjMCAzMS44MTMtMjYuNTI4IDU3LjQzMS01OC42NyA1NS45MzgtMjguNTQtMS4zMjUtNTEuNzUxLTI0LjM4NS01My4yNTEtNTIuOTE3LTEuMTU4LTIyLjAzNCAxMC40MzYtNDEuNDU1IDI4LjA1MS01MS41ODZMOTMuODgzIDY0SDI0QzEwLjc0NSA2NCAwIDUzLjI1NSAwIDQwVjI0QzAgMTAuNzQ1IDEwLjc0NSAwIDI0IDBoMTAyLjUyOWMxMS40MDEgMCAyMS4yMjggOC4wMjEgMjMuNTEzIDE5LjE5TDE1OS4yMDggNjRINTUxLjk5YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNDcuMjczIDIwOEM1MjUuNjM3IDMxMi4yNDYgNTE1LjkyMyAzMjAgNTA0LjcxNyAzMjB6TTQwOCAxNjhoLTQ4di00MGMwLTguODM3LTcuMTYzLTE2LTE2LTE2aC0xNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGgtNDhjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2MTZjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmg0OHY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwaDQ4YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTE2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZ6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTM6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J001MDQuNzE3IDMyMEgyMTEuNTcybDYuNTQ1IDMyaDI2OC40MThjMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC01LjUxNyAyNC4yNzZDNTIzLjExMiA0MTQuNjY4IDUzNiA0MzMuODI4IDUzNiA0NTZjMCAzMS4yMDItMjUuNTE5IDU2LjQ0NC01Ni44MjQgNTUuOTk0LTI5LjgyMy0uNDI5LTU0LjM1LTI0LjYzMS01NS4xNTUtNTQuNDQ3LS40NC0xNi4yODcgNi4wODUtMzEuMDQ5IDE2LjgwMy00MS41NDhIMjMxLjE3NkMyNDEuNTUzIDQyNi4xNjUgMjQ4IDQ0MC4zMjYgMjQ4IDQ1NmMwIDMxLjgxMy0yNi41MjggNTcuNDMxLTU4LjY3IDU1LjkzOC0yOC41NC0xLjMyNS01MS43NTEtMjQuMzg1LTUzLjI1MS01Mi45MTctMS4xNTgtMjIuMDM0IDEwLjQzNi00MS40NTUgMjguMDUxLTUxLjU4Nkw5My44ODMgNjRIMjRDMTAuNzQ1IDY0IDAgNTMuMjU1IDAgNDBWMjRDMCAxMC43NDUgMTAuNzQ1IDAgMjQgMGgxMDIuNTI5YzExLjQwMSAwIDIxLjIyOCA4LjAyMSAyMy41MTMgMTkuMTlMMTU5LjIwOCA2NEg1NTEuOTljMTUuNDAxIDAgMjYuODE2IDE0LjMwMSAyMy40MDMgMjkuMzE5bC00Ny4yNzMgMjA4QzUyNS42MzcgMzEyLjI0NiA1MTUuOTIzIDMyMCA1MDQuNzE3IDMyMHpNNDAzLjAyOSAxOTJIMzYwdi02MGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyaC0yNGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnY2MGgtNDMuMDI5Yy0xMC42OTEgMC0xNi4wNDUgMTIuOTI2LTguNDg1IDIwLjQ4NWw2Ny4wMjkgNjcuMDI5YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGw2Ny4wMjktNjcuMDI5YzcuNTU5LTcuNTU5IDIuMjA1LTIwLjQ4NS04LjQ4Ni0yMC40ODV6J1xuICAgIC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG4gICAgPHBhdGhcbiAgICAgIGQ9J001NzYgMjE2djE2YzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNGgtOGwtMjYuMTEzIDE4Mi43ODhDNTE0LjUwOSA0NjIuNDM1IDQ5NC4yNTcgNDgwIDQ3MC4zNyA0ODBIMTA1LjYzYy0yMy44ODcgMC00NC4xMzktMTcuNTY1LTQ3LjUxOC00MS4yMTJMMzIgMjU2aC04Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjR2LTE2YzAtMTMuMjU1IDEwLjc0NS0yNCAyNC0yNGg2Ny4zNDFsMTA2Ljc4LTE0Ni44MjFjMTAuMzk1LTE0LjI5MiAzMC40MDctMTcuNDUzIDQ0LjcwMS03LjA1OCAxNC4yOTMgMTAuMzk1IDE3LjQ1MyAzMC40MDggNy4wNTggNDQuNzAxTDE3MC40NzcgMTkyaDIzNS4wNDZMMzI2LjEyIDgyLjgyMWMtMTAuMzk1LTE0LjI5Mi03LjIzNC0zNC4zMDYgNy4wNTktNDQuNzAxIDE0LjI5MS0xMC4zOTUgMzQuMzA2LTcuMjM1IDQ0LjcwMSA3LjA1OEw0ODQuNjU5IDE5Mkg1NTJjMTMuMjU1IDAgMjQgMTAuNzQ1IDI0IDI0ek0zMTIgMzkyVjI4MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRzLTI0IDEwLjc0NS0yNCAyNHYxMTJjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0czI0LTEwLjc0NSAyNC0yNHptMTEyIDBWMjgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRzMjQtMTAuNzQ1IDI0LTI0em0tMjI0IDBWMjgwYzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHMtMjQgMTAuNzQ1LTI0IDI0djExMmMwIDEzLjI1NSAxMC43NDUgMjQgMjQgMjRzMjQtMTAuNzQ1IDI0LTI0eidcbiAgICAvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGU1OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInPlxuICAgIDxwYXRoXG4gICAgICBkPSdNMzIwIDM4NEgxMjhWMjI0SDY0djI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMmgyNTZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMjI0aC02NHYxNjB6bTMxNC42LTI0MS44bC04NS4zLTEyOGMtNi04LjktMTYtMTQuMi0yNi43LTE0LjJIMTE3LjRjLTEwLjcgMC0yMC43IDUuMy0yNi42IDE0LjJsLTg1LjMgMTI4Yy0xNC4yIDIxLjMgMSA0OS44IDI2LjYgNDkuOEg2MDhjMjUuNSAwIDQwLjctMjguNSAyNi42LTQ5Ljh6TTUxMiA0OTZjMCA4LjggNy4yIDE2IDE2IDE2aDMyYzguOCAwIDE2LTcuMiAxNi0xNlYyMjRoLTY0djI3MnonXG4gICAgLz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlNjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2MTYgNTEyJz5cbiAgICA8cGF0aFxuICAgICAgZD0nTTYwMiAxMTguNkw1MzcuMSAxNUM1MzEuMyA1LjcgNTIxIDAgNTEwIDBIMTA2Qzk1IDAgODQuNyA1LjcgNzguOSAxNUwxNCAxMTguNmMtMzMuNSA1My41LTMuOCAxMjcuOSA1OC44IDEzNi40IDQuNS42IDkuMS45IDEzLjcuOSAyOS42IDAgNTUuOC0xMyA3My44LTMzLjEgMTggMjAuMSA0NC4zIDMzLjEgNzMuOCAzMy4xIDI5LjYgMCA1NS44LTEzIDczLjgtMzMuMSAxOCAyMC4xIDQ0LjMgMzMuMSA3My44IDMzLjEgMjkuNiAwIDU1LjgtMTMgNzMuOC0zMy4xIDE4LjEgMjAuMSA0NC4zIDMzLjEgNzMuOCAzMy4xIDQuNyAwIDkuMi0uMyAxMy43LS45IDYyLjgtOC40IDkyLjYtODIuOCA1OS0xMzYuNHpNNTI5LjUgMjg4Yy0xMCAwLTE5LjktMS41LTI5LjUtMy44VjM4NEgxMTZ2LTk5LjhjLTkuNiAyLjItMTkuNSAzLjgtMjkuNSAzLjgtNiAwLTEyLjEtLjQtMTgtMS4yLTUuNi0uOC0xMS4xLTIuMS0xNi40LTMuNlY0ODBjMCAxNy43IDE0LjMgMzIgMzIgMzJoNDQ4YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjI4My4yYy01LjQgMS42LTEwLjggMi45LTE2LjQgMy42LTYuMS44LTEyLjEgMS4yLTE4LjIgMS4yeidcbiAgICAvPlxuICA8L3N2Zz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU1ZHXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgRHJvcGRvd25NZW51LCBNZW51R3JvdXAsIE1lbnVJdGVtIH0gPSB3cC5jb21wb25lbnRzXG5cbmNsYXNzIER5bmFtaWNGaWVsZEluc2VydGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmdldE9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMuYmluZCh0aGlzKVxuICB9XG5cbiAgZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCBhbGxvd2VkT3B0aW9uc1R5cGVzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IE5ldmVSZWFjdEN1c3RvbWl6ZS5keW5hbWljVGFncy5vcHRpb25zXG5cbiAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICBhbGxPcHRpb25zLmZvckVhY2goKG9wdGlvbkdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICAgICAgT2JqZWN0LmtleXMob3B0aW9uR3JvdXAuY29udHJvbHMpXG4gICAgICAgIC5mb3JFYWNoKChzbHVnLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICghYWxsb3dlZE9wdGlvbnNUeXBlcy5pbmNsdWRlcyhcbiAgICAgICAgICAgIG9wdGlvbkdyb3VwLmNvbnRyb2xzW3NsdWddLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3Qoc2x1Zywgb3B0aW9uR3JvdXAuY29udHJvbHNbc2x1Z10udHlwZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29wdGlvbkdyb3VwLmNvbnRyb2xzW3NsdWddLmxhYmVsfVxuICAgICAgICAgICAgPC9NZW51SXRlbT4pXG4gICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgIDxNZW51R3JvdXAgbGFiZWw9e29wdGlvbkdyb3VwLmxhYmVsfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTWVudUdyb3VwPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICBpY29uPSdpbWFnZS1maWx0ZXInXG4gICAgICAgIGxhYmVsPXtfXygnSW5zZXJ0IER5bmFtaWMgVGFnJywgJ25ldmUnKX1cbiAgICAgID5cbiAgICAgICAgeygpID0+IChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGhpcy5nZXRPcHRpb25zKCl9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgIClcbiAgfVxufVxuXG5EeW5hbWljRmllbGRJbnNlcnRlci5wcm9wVHlwZXMgPSB7XG4gIGFsbG93ZWRPcHRpb25zVHlwZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljRmllbGRJbnNlcnRlclxuIiwiLyogZ2xvYmFsIE5ldmVSZWFjdEN1c3RvbWl6ZSAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgRHluYW1pY0ZpZWxkSW5zZXJ0ZXIgZnJvbSAnLi9keW5hbWljLWZpZWxkLWluc2VydGVyLmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBkeW5hbWljIHRhZyBidXR0b25zLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufXx7dm9pZH1cbiAqL1xuZXhwb3J0IGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghTmV2ZVJlYWN0Q3VzdG9taXplLmR5bmFtaWNUYWdzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgY29udHJvbHMgPSBOZXZlUmVhY3RDdXN0b21pemUuZHluYW1pY1RhZ3MuY29udHJvbHNcbiAgTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uID0ge31cbiAgT2JqZWN0LmtleXMoY29udHJvbHMpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xJZCwgaW5kZXgpIHtcbiAgICBjb25zdCBjb250cm9sID0gd3AuY3VzdG9taXplLmNvbnRyb2woY29udHJvbElkKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgY29uc3QgZHluYW1pY0NvbnRyb2xXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGR5bmFtaWNDb250cm9sV3JhcC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGR5bmFtaWMtJHtjb250cm9sSWR9YClcbiAgICBkeW5hbWljQ29udHJvbFdyYXAuY2xhc3NMaXN0LmFkZCgnbmV2ZS1keW5hbWljLXRhZy1zZWxlY3RvcicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldmUtaGFzLWR5bmFtaWMtdGFnLXNlbGVjdG9yJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHluYW1pY0NvbnRyb2xXcmFwKVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWN1c3RvbWl6ZS1zZXR0aW5nLWxpbms9XCIke2NvbnRyb2wuaWR9XCJdYClcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sSWRdID0ge1xuICAgICAgICBzdGFydDogZS50YXJnZXQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogZS50YXJnZXQuc2VsZWN0aW9uRW5kXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJlbmRlcihcbiAgICAgIDxEeW5hbWljRmllbGRJbnNlcnRlclxuICAgICAgICBhbGxvd2VkT3B0aW9uc1R5cGVzPXtcbiAgICAgICAgICBjb250cm9sc1tjb250cm9sSWRdXG4gICAgICAgIH1cbiAgICAgICAgb25TZWxlY3Q9e1xuICAgICAgICAgIChtYWdpY1RhZywgZ3JvdXApID0+IGFkZFRvRmllbGQobWFnaWNUYWcsIGNvbnRyb2wsIGdyb3VwKVxuICAgICAgICB9XG4gICAgICAvPixcbiAgICAgIGR5bmFtaWNDb250cm9sV3JhcFxuICAgIClcbiAgfSlcbn1cblxuLyoqXG4gKiBBZGQgZHluYW1pYyB0YWcgdG8gaW5wdXQgZmllbGQuXG4gKiBAcGFyYW0gbWFnaWNUYWdcbiAqIEBwYXJhbSBjb250cm9sXG4gKiBAcGFyYW0gb3B0aW9uVHlwZVxuICovXG5jb25zdCBhZGRUb0ZpZWxkID0gZnVuY3Rpb24gKG1hZ2ljVGFnLCBjb250cm9sLCBvcHRpb25UeXBlKSB7XG4gIGxldCB0YWdcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS1jdXN0b21pemUtc2V0dGluZy1saW5rPVwiJHtjb250cm9sLmlkfVwiXWApXG5cbiAgaWYgKG9wdGlvblR5cGUgPT09ICd1cmwnICYmIGNvbnRyb2wucGFyYW1zLnR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICB0YWcgPSBgPGEgaHJlZj1cInske21hZ2ljVGFnfX1cIj5MaW5rPC9hPmBcbiAgfSBlbHNlIHtcbiAgICB0YWcgPSBgeyR7bWFnaWNUYWd9fWBcbiAgfVxuXG4gIGlmIChvcHRpb25UeXBlID09PSAndXJsJyAmJiBpbnB1dC52YWx1ZSA9PT0gJyMnKSB7XG4gICAgaW5wdXQudmFsdWUgPSB0YWdcbiAgfSBlbHNlIGlmIChOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb25bY29udHJvbC5pZF0pIHtcbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sLmlkXVxuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0LnZhbHVlLmxlbmd0aFxuICAgIGlucHV0LnZhbHVlID1cbiAgICAgIGlucHV0LnZhbHVlLnN1YnN0cmluZygwLCBzdGFydCkgKyB0YWcgK1xuICAgICAgaW5wdXQudmFsdWUuc3Vic3RyaW5nKGVuZCwgbGVuZ3RoKVxuICB9IGVsc2Uge1xuICAgIGlucHV0LnZhbHVlICs9IHRhZ1xuICB9XG4gIE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbltjb250cm9sLmlkXSA9IGZhbHNlXG4gIGlucHV0LmZvY3VzKClcbiAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKVxufVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBGb250RmFtaWx5Q29tcG9uZW50IGZyb20gJy4vRm9udEZhbWlseUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBGb250RmFtaWx5Q29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8Rm9udEZhbWlseUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59KVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwLCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBGb250RmFtaWx5U2VsZWN0b3IgZnJvbSAnLi9Gb250RmFtaWx5U2VsZWN0b3IuanMnXG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNsYXNzIFR5cGVmYWNlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvbnRGYW1pbHk6IHZhbHVlLFxuICAgICAgZm9udEZhbWlseVNvdXJjZTogbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBkZWZhdWx0X2lzX2luaGVyaXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zID0gcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgPyB7XG4gICAgICAuLi5kZWZhdWx0UGFyYW1zLFxuICAgICAgLi4uSlNPTi5wYXJzZSggcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgKVxuICAgIH0gOiBkZWZhdWx0UGFyYW1zXG4gIH1cblxuICBtYXliZV9nZXRfdHlwZWtpdF9mb250KGZvbnQpIHtcbiAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggTmV2ZVJlYWN0Q3VzdG9taXplLCAndHlwZWtpdFNsdWdzJyApID09PSBmYWxzZSApIHtcbiAgICAgIHJldHVybiBmb250XG4gICAgfVxuICAgIGNvbnN0IHR5cGVraXRTbHVncyA9IE5ldmVSZWFjdEN1c3RvbWl6ZS50eXBla2l0U2x1Z3NcbiAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggdHlwZWtpdFNsdWdzLCBmb250ICkgKSB7XG4gICAgICByZXR1cm4gdHlwZWtpdFNsdWdzW2ZvbnRdXG4gICAgfVxuICAgIHJldHVybiBmb250XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdHlwZWZhY2UtY29udHJvbCBuZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAgPEZvbnRGYW1pbHlTZWxlY3RvclxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZm9udEZhbWlseX1cbiAgICAgICAgICAgIG9uRm9udENob2ljZT17KGZvbnRGYW1pbHlTb3VyY2UsIGZvbnRGYW1pbHkpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSggeyBmb250RmFtaWx5LCBmb250RmFtaWx5U291cmNlIH0gKVxuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2woKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGluaGVyaXREZWZhdWx0PXt0aGlzLmNvbnRyb2xQYXJhbXMuZGVmYXVsdF9pc19pbmhlcml0fVxuICAgICAgICAgICAgbWF5YmVHZXRUeXBla2l0PXt0aGlzLm1heWJlX2dldF90eXBla2l0X2ZvbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2woKSB7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KCB0aGlzLm1heWJlX2dldF90eXBla2l0X2ZvbnQodGhpcy5zdGF0ZS5mb250RmFtaWx5KSApXG4gICAgICB3cC5jdXN0b21pemUucHJldmlld2VyLnNlbmQoICdmb250LXNlbGVjdGlvbicsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMubWF5YmVfZ2V0X3R5cGVraXRfZm9udCh0aGlzLnN0YXRlLmZvbnRGYW1pbHkpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuZm9udEZhbWlseVNvdXJjZSxcbiAgICAgICAgY29udHJvbElkOiB0aGlzLnByb3BzLmNvbnRyb2wuaWQsXG4gICAgICAgIHR5cGU6ICdcXFxcTmV2ZVxcXFxDdXN0b21pemVyXFxcXENvbnRyb2xzXFxcXFJlYWN0XFxcXEZvbnRfRmFtaWx5JyxcbiAgICAgICAgaW5oZXJpdDogdGhpcy5jb250cm9sUGFyYW1zLmRlZmF1bHRfaXNfaW5oZXJpdFxuICAgICAgfSApXG4gICAgfSwgMTAwIClcbiAgfVxufVxuXG5UeXBlZmFjZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlZmFjZUNvbXBvbmVudFxuIiwiLyogZ2xvYmFsIHdwLCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbmltcG9ydCBGb250UHJldmlld0xpbmsgZnJvbSAnLi9Gb250UHJldmlld0xpbmsuanMnXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCB7XG4gIFBvcG92ZXIsXG4gIEJ1dHRvbixcbiAgVGV4dENvbnRyb2wsXG4gIERhc2hpY29uXG59ID0gd3AuY29tcG9uZW50c1xuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIEZvbnRGYW1pbHlTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvbnRzOiBOZXZlUmVhY3RDdXN0b21pemUuZm9udHMsXG4gICAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIGxvYWRVbnRpbDogMjAsXG4gICAgICBkZWxheUZvbnRJbmNsdXNpb246IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXRGb250cygpIHtcbiAgICBjb25zdCBmb250R3JvdXBzID0gdGhpcy5zdGF0ZS5mb250c1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgcmVzdWx0ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGZvbnRHcm91cHMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXN1bHRba2V5XSA9IGZvbnRHcm91cHNba2V5XS5maWx0ZXIodmFsdWUgPT4gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5jbHVkZXMoc2VsZi5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBnZXRGb250TGlzdCgpIHtcbiAgICBjb25zdCBmb250R3JvdXBzID0gdGhpcy5nZXRGb250cygpXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIG9wdGlvbnMucHVzaChcbiAgICAgIDxsaSBjbGFzc05hbWU9eydkZWZhdWx0LXZhbHVlICcgKyAhdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgICAgICA/ICdzZWxlY3RlZCdcbiAgICAgICAgOiAnJ31cbiAgICAgID5cbiAgICAgICAgPEZvbnRQcmV2aWV3TGlua1xuICAgICAgICAgIGZvbnRGYWNlPSdkZWZhdWx0J1xuICAgICAgICAgIGRlbGF5TG9hZD17ZmFsc2V9XG4gICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMuaW5oZXJpdERlZmF1bHRcbiAgICAgICAgICAgID8gX18oJ0luaGVyaXQnLCAnbmV2ZScpXG4gICAgICAgICAgICA6IF9fKCdEZWZhdWx0JywgJ25ldmUnKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvbnRDaG9pY2UoJ3N5c3RlbScsIGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2xpPlxuICAgIClcbiAgICBPYmplY3Qua2V5cyhmb250R3JvdXBzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgZm9udEdyb3Vwc1trZXldLmxlbmd0aCA+IDAgJiYgb3B0aW9ucy5wdXNoKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdmb250LWdyb3VwLWhlYWRlcic+XG4gICAgICAgICAge2tleX1cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICAgIGZvbnRHcm91cHNba2V5XS5tYXAoKGZvbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA8IHNlbGYuc3RhdGUubG9hZFVudGlsKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICBmb250ID09PSB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICAgICAgICAgICkgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRQcmV2aWV3TGlua1xuICAgICAgICAgICAgICAgIGRlbGF5TG9hZD17dGhpcy5zdGF0ZS5kZWxheUZvbnRJbmNsdXNpb259XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZvbnR9XG4gICAgICAgICAgICAgICAgZm9udEZhY2U9e3RoaXMucHJvcHMubWF5YmVHZXRUeXBla2l0KGZvbnQpfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvbnRDaG9pY2Uoa2V5LCBmb250KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRVbnRpbCA8IG9wdGlvbnMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc2VhcmNoID09PSAnJykge1xuICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdsb2FkLW1vcmUnPlxuICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXG4gICAgICAgICAgICBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBsb2FkVW50aWw6IChzZWxmLnN0YXRlLmxvYWRVbnRpbCArIDUpLFxuICAgICAgICAgICAgICAgICAgZGVsYXlGb250SW5jbHVzaW9uOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249J2ltYWdlLWZpbHRlcicgLz5cbiAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG4gICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcG92ZXItY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcG92ZXItaGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCcsICduZXZlJykgKyAnLi4uJ31cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVudGlsOiAyMFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICBpc0Rlc3RydWN0aXZlXG4gICAgICAgICAgICAgID48RGFzaGljb24gaWNvbj0nbm8nIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmV2ZS1mb250cy1saXN0Jz5cbiAgICAgICAgICAgIHtvcHRpb25zLmxlbmd0aCA/IG9wdGlvbnNcbiAgICAgICAgICAgICAgOiA8bGkgY2xhc3NOYW1lPSduby1yZXN1bHQnPntfXygnTm8gcmVzdWx0cy4nLCAnbmV2ZScpfTwvbGk+fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBjb25zdCBkZWZhdWx0Rm9udGZhY2UgPSAnLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmJ1xuICAgIGNvbnN0IGZvbnQgPSB0aGlzLnByb3BzLm1heWJlR2V0VHlwZWtpdCggdGhpcy5wcm9wcy5zZWxlY3RlZCApXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWZvbnQtZmFtaWx5LWNvbnRyb2wnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ0ZvbnQgRmFtaWx5JywgJ25ldmUnKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb250LWZhbWlseS1zZWxlY3Rvci10b2dnbGUnXG4gICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZmLW5hbWUnPntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgICAgICAgICh0aGlzLnByb3BzLmluaGVyaXREZWZhdWx0XG4gICAgICAgICAgICAgID8gX18oJ0luaGVyaXQnLCAnbmV2ZScpXG4gICAgICAgICAgICAgIDogX18oJ0RlZmF1bHQnLCAnbmV2ZScpKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmYtcHJldmlldydcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZvbnQgfHwgZGVmYXVsdEZvbnRmYWNlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5BYmNcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3RoaXMuc3RhdGUuaXNWaXNpYmxlICYmIChcbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPSdib3R0b20gbGVmdCdcbiAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6IGZhbHNlIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb250cyA/IHRoaXMuZ2V0Rm9udExpc3QoKVxuICAgICAgICAgICAgICAgIDogX18oJ0xvYWRpbmcuLi4nLCAnbmV2ZScpfVxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkZvbnRGYW1pbHlTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gIG9uRm9udENob2ljZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWF5YmVHZXRUeXBla2l0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpbmhlcml0RGVmYXVsdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9udEZhbWlseVNlbGVjdG9yXG4iLCIvKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InXG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50XG59ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBGb250UHJldmlld0xpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByZXZpZXdXYXNSZW5kZXJlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7IGZvbnRGYW1pbHk6IHRoaXMucHJvcHMuZm9udEZhY2UgKyAnLCBzYW5zLXNlcmlmJyB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbmV2ZS1mb250LWZhbWlseSc+e3RoaXMucHJvcHMubGFiZWwgfHwgdGhpcy5wcm9wcy5mb250RmFjZX08L3NwYW4+XG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdXYXNSZW5kZXJlZDogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLnByZXZpZXdXYXNSZW5kZXJlZCB8fCB0aGlzLnByb3BzLmRlbGF5TG9hZCA9PT1cbiAgICAgICAgICAgICAgZmFsc2UpXG4gICAgICAgICAgICAgID8gPHNwYW4gY2xhc3NOYW1lPSduZXZlLWZvbnQtcHJldmlldycgc3R5bGU9e3N0eWxlfT5BYmM8L3NwYW4+XG4gICAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPSduZXZlLWZvbnQtcHJldmlldyAnPi4uLjwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgIDwvYT5cbiAgICApXG4gIH1cbn1cblxuRm9udFByZXZpZXdMaW5rLnByb3BUeXBlcyA9IHtcbiAgZm9udEZhY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVsYXlMb2FkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb250UHJldmlld0xpbmtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCBOZXZlUmVhY3RDdXN0b21pemUsIHdwICovXG5pbXBvcnQgeyBpbml0IGFzIGluaXREeW5hbWljRmllbGRzIH0gZnJvbSAnLi9keW5hbWljLWZpZWxkcy9pbmRleC5qcydcbmltcG9ydCB7IFRvZ2dsZUNvbnRyb2wgfSBmcm9tICcuL3RvZ2dsZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2wgfSBmcm9tICcuL3Jlc3BvbnNpdmUtdG9nZ2xlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBCYWNrZ3JvdW5kQ29udHJvbCB9IGZyb20gJy4vYmFja2dyb3VuZC9Db250cm9sLmpzJ1xuaW1wb3J0IHsgU3BhY2luZ0NvbnRyb2wgfSBmcm9tICcuL3NwYWNpbmcvQ29udHJvbC5qcydcbmltcG9ydCB7IFR5cGVmYWNlQ29udHJvbCB9IGZyb20gJy4vdHlwZWZhY2UvQ29udHJvbC5qcydcbmltcG9ydCB7IEZvbnRGYW1pbHlDb250cm9sIH0gZnJvbSAnLi9mb250LWZhbWlseS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b25zQ29udHJvbCB9IGZyb20gJy4vcmFkaW8tYnV0dG9ucy9Db250cm9sLmpzJ1xuaW1wb3J0IHsgQnV0dG9uQXBwZWFyYW5jZUNvbnRyb2wgfSBmcm9tICcuL2J1dHRvbi1hcHBlYXJhbmNlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSYW5nZUNvbnRyb2wgfSBmcm9tICcuL3JhbmdlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSZXNwb25zaXZlUmFuZ2VDb250cm9sIH0gZnJvbSAnLi9yZXNwb25zaXZlLXJhbmdlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBDb2xvckNvbnRyb2wgfSBmcm9tICcuL2NvbG9yL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBQcmVzZXRzU2VsZWN0b3JDb250cm9sIH0gZnJvbSAnLi9wcmVzZXRzLXNlbGVjdG9yL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBNdWx0aVNlbGVjdENvbnRyb2wgfSBmcm9tICcuL211bHRpc2VsZWN0L0NvbnRyb2wuanMnXG5cbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV90b2dnbGVfY29udHJvbCA9IFRvZ2dsZUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yZXNwb25zaXZlX3RvZ2dsZV9jb250cm9sID0gUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9iYWNrZ3JvdW5kX2NvbnRyb2wgPSBCYWNrZ3JvdW5kQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3NwYWNpbmcgPSBTcGFjaW5nQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3R5cGVmYWNlX2NvbnRyb2wgPSBUeXBlZmFjZUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9mb250X2ZhbWlseV9jb250cm9sID0gRm9udEZhbWlseUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yYWRpb19idXR0b25zX2NvbnRyb2wgPSBSYWRpb0J1dHRvbnNDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfYnV0dG9uX2FwcGVhcmFuY2UgPSBCdXR0b25BcHBlYXJhbmNlQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3JhbmdlX2NvbnRyb2wgPSBSYW5nZUNvbnRyb2xcbndwLmN1c3RvbWl6ZS5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9yZXNwb25zaXZlX3JhbmdlX2NvbnRyb2wgPSBSZXNwb25zaXZlUmFuZ2VDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfY29sb3JfY29udHJvbCA9IENvbG9yQ29udHJvbFxud3AuY3VzdG9taXplLmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3ByZXNldHNfc2VsZWN0b3IgPSBQcmVzZXRzU2VsZWN0b3JDb250cm9sXG53cC5jdXN0b21pemUuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfbXVsdGlzZWxlY3QgPSBNdWx0aVNlbGVjdENvbnRyb2xcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBkZXZpY2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2N1c3RvbWl6ZS1mb290ZXItYWN0aW9ucyAuZGV2aWNlcywgLmhmZy0tY2ItZGV2aWNlcy1zd2l0Y2hlciBhLnN3aXRjaC10bycgKVxuICBkZXZpY2VCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCggJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCB7XG4gICAgICBkZXRhaWw6IGUudGFyZ2V0LmRhdGFzZXQuZGV2aWNlXG4gICAgfSApXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKVxuICB9IClcbiAgaW5pdER5bmFtaWNGaWVsZHMoKVxufSApXG5cbndpbmRvdy5IRkcgPSB7XG4gIGdldFNldHRpbmdzOiAoKSA9PiB7XG4gICAgY29uc3QgdXNlZFNldHRpbmdzID0ge31cbiAgICBOZXZlUmVhY3RDdXN0b21pemUuaGVhZGVyQ29udHJvbHMubWFwKCAoaXRlbSkgPT4ge1xuICAgICAgaWYgKCAhd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKSApIHJldHVybiBmYWxzZVxuICAgICAgdXNlZFNldHRpbmdzW2l0ZW1dID0gd3AuY3VzdG9taXplLmNvbnRyb2woIGl0ZW0gKS5zZXR0aW5nLmdldCgpXG4gICAgfSApXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KCB1c2VkU2V0dGluZ3MgKVxuICB9XG59XG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBNdWx0aVNlbGVjdCBmcm9tICcuL011bHRpU2VsZWN0J1xuXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuZXhwb3J0IGNvbnN0IE11bHRpU2VsZWN0Q29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyKFxuICAgICAgPE11bHRpU2VsZWN0IGNvbnRyb2w9e3RoaXN9IC8+XG4gICAgICAsIHRoaXMuY29udGFpbmVyWzBdKVxuICB9XG59KVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgVG9vbHRpcCwgRGFzaGljb24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY29uc3QgTXVsdGlTZWxlY3QgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcblxuICBjb25zdCBhZGRhYmxlID0gT2JqZWN0LmtleXMoY2hvaWNlcykuZmlsdGVyKGNob2ljZSA9PiAhdmFsdWUuaW5jbHVkZXMoY2hvaWNlKSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdBZGQgaXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndG9rZW4nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlLCBzbHVnXVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0ncGx1cy1hbHQnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgfSlcbiAgY29uc3QgdmFsdWVzID0gdmFsdWUuZmlsdGVyKHNsdWcgPT4gY2hvaWNlc1tzbHVnXSkubWFwKHNsdWcgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBrZXk9e3NsdWd9IHRleHQ9e19fKCdSZW1vdmUgSXRlbScsICduZXZlJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSd0b2tlbidcbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnZhbHVlXS5maWx0ZXIodiA9PiB2ICE9PSBzbHVnKVxuICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWwpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntjaG9pY2VzW3NsdWddfTwvc3Bhbj5cbiAgICAgICAgICA8RGFzaGljb24gaWNvbj0nZGlzbWlzcycgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtbXVsdGlzZWxlY3QnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2NvbnRyb2wucGFyYW1zLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RlZC1vcHRpb25zJz5cbiAgICAgICAge3ZhbHVlcy5sZW5ndGggP1xuICAgICAgICAgIHZhbHVlcyA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+XG4gICAgICAgICAgICB7X18oJ0FkZCBpdGVtcyBieSBjbGlja2luZyB0aGUgb25lcyBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdmFpbGFibGUtb3B0aW9ucyc+XG4gICAgICAgIHthZGRhYmxlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgIGFkZGFibGUgOlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGxhY2Vob2xkZXInPlxuICAgICAgICAgICAge19fKCdBbGwgaXRlbXMgYXJlIGFscmVhZHkgc2VsZWN0ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTXVsdGlTZWxlY3QucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3RcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByZXNldHNTZWxlY3RvciBmcm9tICcuL1ByZXNldHNTZWxlY3RvcidcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5leHBvcnQgY29uc3QgUHJlc2V0c1NlbGVjdG9yQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIHJlbmRlcihcbiAgICAgIDxQcmVzZXRzU2VsZWN0b3IgY29udHJvbD17dGhpc30gLz5cbiAgICAgICwgdGhpcy5jb250YWluZXJbMF0gKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbWF5YmVQYXJzZUpzb24gfSBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBUb29sdGlwIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmNsYXNzIFByZXNldHNTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2g6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlU2V0dGluZ3MgPSB0aGlzLnJlcGxhY2VTZXR0aW5ncy5iaW5kKCB0aGlzIClcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGdldCB0aGUgdmFsdWUgaW4gdGhlIGNvbnNvbGUgd2l0aCB0aGlzIGNvbW1hbmQ6XG4gICAqXG4gICAqIGNvcHkoSEZHLmdldFNldHRpbmdzKCkpO1xuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldFByZXNldHMoKSB7XG4gICAgY29uc3QgeyBwcmVzZXRzIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG5cbiAgICByZXR1cm4gcHJlc2V0cy5maWx0ZXIoIChwcmVzZXQpID0+IHtcbiAgICAgIHJldHVybiBwcmVzZXQubGFiZWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5jbHVkZXMoIHRoaXMuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkgKVxuICAgIH0gKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByZXNldHMgPSB0aGlzLmdldFByZXNldHMoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1wcmVzZXQtc2VsZWN0b3InPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3NlYXJjaCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXyggJ1NlYXJjaCBIZWFkZXIgUHJlc2V0cy4uLicgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnNldFN0YXRlKCB7IHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSApIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBwcmVzZXRzLmxlbmd0aCA+IDAgPyBwcmVzZXRzLm1hcCggKHByZXNldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRleHQ9e3ByZXNldC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVNldHRpbmdzKCBwcmVzZXQuc2V0dXAgKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJlc2V0LmltYWdlfSBhbHQ9e3ByZXNldC5sYWJlbH0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gKVxuICAgICAgICAgICAgOiA8cD57X18oICdObyBoZWFkZXIgcHJlc2V0cyBmb3VuZCcsICduZXZlJyApfTwvcD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVwbGFjZVNldHRpbmdzKHNldHVwKSB7XG4gICAgc2V0dXAgPSBtYXliZVBhcnNlSnNvbiggc2V0dXAgKVxuICAgIGlmICggdHlwZW9mIE5ldmVQcm9SZWFjdEN1c3RvbWl6ZSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICBPYmplY3Qua2V5cyggc2V0dXAgKS5tYXAoICh0aGVtZU1vZCkgPT4ge1xuICAgICAgICBpZiAoIHRoZW1lTW9kID09PSAnaGZnX2hlYWRlcl9sYXlvdXQnICkge1xuICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApXG4gICAgICAgICAgICAuc2V0dGluZ1xuICAgICAgICAgICAgLnNldCggc2V0dXBbdGhlbWVNb2RdIClcbiAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCAnbmV2ZS1jaGFuZ2VkLWJ1aWxkZXItdmFsdWUnLCB7XG4gICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtYXliZVBhcnNlSnNvbiggc2V0dXBbdGhlbWVNb2RdICksXG4gICAgICAgICAgICAgICAgaWQ6ICdoZWFkZXInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKSApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCAhd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kICkgKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBpZiAoIFsndGV4dCcsICd0ZXh0YXJlYScsICdzZWxlY3QnXS5pbmNsdWRlcyhcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApLnBhcmFtcy50eXBlICkgKSB7XG4gICAgICAgICAgICB3cC5jdXN0b21pemUuY29udHJvbCggdGhlbWVNb2QgKS5zZXR0aW5nLnNldCggc2V0dXBbdGhlbWVNb2RdIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHNldHVwW3RoZW1lTW9kXSB8fCAnJyxcbiAgICAgICAgICAgICAgICBpZDogdGhlbWVNb2RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApIClcbiAgICAgICAgfVxuICAgICAgfSApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggbmV3IEN1c3RvbUV2ZW50KCAnbmV2ZS1wcmVzZXQtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aGVtZU1vZHM6IHNldHVwXG4gICAgICB9XG4gICAgfSApIClcbiAgfVxufVxuXG5QcmVzZXRzU2VsZWN0b3IucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlc2V0c1NlbGVjdG9yXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBSYWRpb0J1dHRvbnNDb21wb25lbnQgZnJvbSAnLi9SYWRpb0J1dHRvbnNDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25zQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJhZGlvQnV0dG9uc0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMnXG5pbXBvcnQgU1ZHIGZyb20gJy4uL2NvbW1vbi9zdmcuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgUmFkaW9CdXR0b25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIH1cbiAgICB0aGlzLmdldENob2ljZXMgPSB0aGlzLmdldENob2ljZXMuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB0aGlzLnVwZGF0ZVZhbHVlLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldENob2ljZXMoKSB7XG4gICAgY29uc3QgeyBpc19mb3IsIGNob2ljZXMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcblxuICAgIGlmICghaXNfZm9yKSB7XG4gICAgICByZXR1cm4gY2hvaWNlc1xuICAgIH1cblxuICAgIGlmIChpc19mb3IgPT09ICdsb2dvJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdMb2dvIE9ubHknLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5sb2dvT25seVxuICAgICAgICB9LFxuICAgICAgICBsb2dvVGl0bGU6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnTG9nbyAtIFRpdGxlICYgVGFnbGluZScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmxvZ29UaXRsZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZUxvZ286IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnVGl0bGUgJiBUYWdsaW5lIC0gTG9nbycsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLnRpdGxlTG9nb1xuICAgICAgICB9LFxuICAgICAgICBsb2dvVG9wVGl0bGU6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnTG9nbyBvbiBUb3AnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5sb2dvVG9wVGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc19mb3IgPT09ICdtZW51Jykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ3N0eWxlLXBsYWluJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdQbGFpbicsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm1lbnVQbGFpblxuICAgICAgICB9LFxuICAgICAgICAnc3R5bGUtZnVsbC1oZWlnaHQnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5tZW51RmlsbGVkXG4gICAgICAgIH0sXG4gICAgICAgICdzdHlsZS1ib3JkZXItYm90dG9tJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdCb3R0b20gQm9yZGVyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcubWVudVVuZGVybGluZVxuICAgICAgICB9LFxuICAgICAgICAnc3R5bGUtYm9yZGVyLXRvcCc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnVG9wIEJvcmRlcicsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm1lbnVPdmVybGluZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzX2ZvciA9PT0gJ2FjY291bnRfY29tcG9uZW50Jykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlMToge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDInLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyU29saWRcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlMjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDEnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyUmVndWxhclxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGUzOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgMycsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJUYWdTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGU0OiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJBbHRTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ljb25fc3R5bGU1OiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJzU29saWRcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcl9pY29uX3N0eWxlNjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDYnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2F2YXRhcjoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdXb3JkUHJlc3MgQXZhdGFyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlckF2YXRhclxuICAgICAgICB9LFxuICAgICAgICBub25lOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ05vIEljb24nLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5teUFjY291bnROb25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNfZm9yID09PSAnY2FydF9jb21wb25lbnQnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnY2FydC1pY29uLXN0eWxlMSc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgMScsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGUxXG4gICAgICAgIH0sXG4gICAgICAgICdjYXJ0LWljb24tc3R5bGUyJzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSAyJywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTJcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTMnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDMnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlM1xuICAgICAgICB9LFxuICAgICAgICAnY2FydC1pY29uLXN0eWxlNCc6IHtcbiAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGU0XG4gICAgICAgIH0sXG4gICAgICAgICdjYXJ0LWljb24tc3R5bGU1Jzoge1xuICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTVcbiAgICAgICAgfSxcbiAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTYnOiB7XG4gICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDYnLCAnbmV2ZScpLFxuICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlNlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGxhcmdlX2J1dHRvbnMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFtcbiAgICAgICduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCcsXG4gICAgICB7ICdsYXJnZS1idXR0b25zJzogbGFyZ2VfYnV0dG9ucyA9PT0gdHJ1ZSB9XSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICA8UmFkaW9JY29uc1xuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldENob2ljZXMoKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKG5ld1ZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsIH0pXG4gICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxufVxuXG5SYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25zQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFJhbmdlQ29tcG9uZW50IGZyb20gJy4vUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFuZ2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFuZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCB7IFJhbmdlQ29udHJvbCwgVG9vbHRpcCwgSWNvbkJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBkZWZhdWx0VmFsOiAxNSxcbiAgICAgIHN0ZXA6IDFcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQcm9wcyA9IHtcbiAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgLi4uKHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzIHx8IHt9KVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyUmVzZXQgPSB0aGlzLnJlbmRlclJlc2V0LmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG4gICAgY29uc3QgeyBkZWZhdWx0VmFsLCBtaW4sIG1heCwgc3RlcCB9ID0gdGhpcy5jb250cm9sUHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCBuZXZlLXJhbmdlLWNvbnRyb2wnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgICAge2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntsYWJlbH08L3NwYW4+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGluaXRpYWxQb3NpdGlvbj17ZGVmYXVsdFZhbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXModmFsdWUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJSZXNldCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh2YWx1ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJSZXNldCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWwgfSA9IHRoaXMuY29udHJvbFByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZGVmYXVsdFZhbCAmJiBkZWZhdWx0VmFsICE9PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0VmFsID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICB0ZXh0PXtfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT0ncmVzZXQtaWNvbidcbiAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgY2xhc3NOYW1lPSdyZXNldCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVZhbHVlcyhkZWZhdWx0VmFsKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cbn1cblxuUmFuZ2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuXG5pbXBvcnQgUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50IGZyb20gJy4vUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFJlc3BvbnNpdmVSYW5nZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AsIG1hcFZhbHVlcyAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5pbXBvcnQgeyBtYXliZVBhcnNlSnNvbiB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IFJhbmdlQ29udHJvbCwgQnV0dG9uLCBUb29sdGlwLCBJY29uQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogbWF5YmVQYXJzZUpzb24ocHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpKSxcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJ1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyQ29udHJvbEhlYWRlciA9IHRoaXMucmVuZGVyQ29udHJvbEhlYWRlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRCdXR0b25zID0gdGhpcy5nZXRCdXR0b25zLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclJlc2V0ID0gdGhpcy5yZW5kZXJSZXNldC5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHsgdW5pdHMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnNcbiAgICBpZiAoIXVuaXRzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aXZlOiBzZWxmLnN0YXRlLnZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArXG4gICAgICAgICAgJy11bml0J10gPT09IHVuaXRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB7IC4uLnNlbGYuc3RhdGUudmFsdWUgfVxuICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlICsgJy11bml0J10gPSB1bml0XG4gICAgICAgICAgICBpZiAodW5pdCAhPT0gJ2VtJykge1xuICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdID0gbWFwVmFsdWVzKFxuICAgICAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZV0sXG4gICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICAgICAgICBzZWxmLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt1bml0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyQ29udHJvbEhlYWRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zXG4gICAgY29uc3QgeyBoaWRlUmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRyc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgICAgICBoaWRlUmVzcG9uc2l2ZT17aGlkZVJlc3BvbnNpdmUgfHwgZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXVuaXRzJz5cbiAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSwgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHN0ZXAsIG1pbiwgbWF4IH0gPSB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCBuZXZlLXJhbmdlLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9sSGVhZGVyKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYW5nZS13cmFwJz5cbiAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICB2YWx1ZT17cGFyc2VJbnQodmFsdWVbY3VycmVudERldmljZV0pfVxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uPXswfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh2YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBtaW49e21pbiB8fCAwfVxuICAgICAgICAgICAgc3RlcD17c3RlcCB8fCAxfVxuICAgICAgICAgICAgbWF4PXttYXggfHwgMTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMucmVuZGVyUmVzZXQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJSZXNldCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWwgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnNcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UsIHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFkZWZhdWx0VmFsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdID09PSB2YWx1ZVtjdXJyZW50RGV2aWNlXSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBcbiAgICAgICAga2V5PSd0b29sdGlwLXJlc2V0J1xuICAgICAgICB0ZXh0PXtfXygnUmVzZXQgVmFsdWUnLCAnbmV2ZScpfVxuICAgICAgPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGtleT0ncmVzZXQtaWNvbidcbiAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgY2xhc3NOYW1lPSdyZXNldCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVZhbHVlcyhkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdKX1cbiAgICAgICAgLz5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgIFtjdXJyZW50RGV2aWNlXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAuLi5tYXliZVBhcnNlSnNvbih0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSksXG4gICAgICBbY3VycmVudERldmljZV06IHZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBtYXliZVBhcnNlSnNvbihlLmRldGFpbC52YWx1ZSkgfSlcbiAgICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldChKU09OLnN0cmluZ2lmeShlLmRldGFpbC52YWx1ZSkpXG4gICAgfSlcbiAgfVxufVxuXG5SZXNwb25zaXZlUmFuZ2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBSZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50IGZyb20gJy4vUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZXNwb25zaXZlQ29udHJvbCBmcm9tICcuLi9jb21tb24vUmVzcG9uc2l2ZSdcblxuY29uc3QgeyBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBzZXRWYWx1ZShlLmRldGFpbC52YWx1ZSlcbiAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgY29uc3QgW2RldmljZSwgc2V0RGV2aWNlXSA9IHVzZVN0YXRlKCdkZXNrdG9wJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCBmbGV4LWNvbnRlbnRzJz5cbiAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgIGNsYXNzTmFtZT0nbmV2ZS10b2dnbGUtY29udHJvbCdcbiAgICAgICAgY2hlY2tlZD17dmFsdWVbZGV2aWNlXX1cbiAgICAgICAgbGFiZWw9e2NvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0geyAuLi52YWx1ZSB9XG4gICAgICAgICAgbmV4dFZhbHVlW2RldmljZV0gPSBuZXdWYWx1ZVxuICAgICAgICAgIHNldFZhbHVlKG5leHRWYWx1ZSlcbiAgICAgICAgICBjb250cm9sLnNldHRpbmcuc2V0KG5leHRWYWx1ZSlcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8UmVzcG9uc2l2ZUNvbnRyb2xcbiAgICAgICAgZXhjbHVkZWQ9e2NvbnRyb2wucGFyYW1zLmV4Y2x1ZGVkIHx8IFtdfVxuICAgICAgICBvbkNoYW5nZT17KGRldmljZSkgPT4ge1xuICAgICAgICAgIHNldERldmljZShkZXZpY2UpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgU3BhY2luZ0NvbXBvbmVudCBmcm9tICcuL1NwYWNpbmdDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgU3BhY2luZ0NvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxTcGFjaW5nQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwLCBsb2Rhc2ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUuanMnXG5pbXBvcnQgU2l6aW5nQ29udHJvbCBmcm9tICcuLi9jb21tb24vU2l6aW5nLmpzJ1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbidcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IG1hcFZhbHVlcyB9ID0gbG9kYXNoXG5cbmNsYXNzIFNwYWNpbmdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgIG1pbjogLTMwMCxcbiAgICAgIG1heDogMzAwLFxuICAgICAgaGlkZVJlc3BvbnNpdmVCdXR0b25zOiBmYWxzZSxcbiAgICAgIHVuaXRzOiBbJ3B4JywgJ2VtJywgJyUnXVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFBhcmFtcyA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzID8ge1xuICAgICAgLi4uZGVmYXVsdFBhcmFtcyxcbiAgICAgIC4uLnByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzXG4gICAgfSA6IGRlZmF1bHRQYXJhbXNcblxuICAgIGNvbnN0IGJhc2VEZWZhdWx0ID0ge1xuICAgICAgbW9iaWxlOiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgdGFibGV0OiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICAgICAgZGVza3RvcDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgICdtb2JpbGUtdW5pdCc6ICdweCcsXG4gICAgICAndGFibGV0LXVuaXQnOiAncHgnLFxuICAgICAgJ2Rlc2t0b3AtdW5pdCc6ICdweCdcbiAgICB9XG4gICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0ID8ge1xuICAgICAgLi4uYmFzZURlZmF1bHQsXG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0XG4gICAgfSA6IGJhc2VEZWZhdWx0XG5cbiAgICBjb25zdCBkYlZhbCA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIGNvbnN0IHZhbHVlID0gbWVyZ2VEZWVwKHRoaXMuZGVmYXVsdFZhbHVlLCBkYlZhbClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGxpbmtlZDogdHJ1ZSxcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJ1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zaG91bGRWYWx1ZXNCZUxpbmtlZCgpKSB7XG4gICAgICB0aGlzLnN0YXRlLmxpbmtlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5zaG91bGRWYWx1ZXNCZUxpbmtlZCA9IHRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0QnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucy5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVWYWx1ZSA9IHRoaXMudXBkYXRlVmFsdWUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLmJpbmQodGhpcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndG9wJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS50b3BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyaWdodCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0ucmlnaHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdib3R0b20nLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmJvdHRvbVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xlZnQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmxlZnRcbiAgICAgIH1cbiAgICBdXG4gICAgY29uc3QgeyBoaWRlUmVzcG9uc2l2ZUJ1dHRvbnMgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuXG4gICAgY29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFtcbiAgICAgICduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCcsXG4gICAgICAnbmV2ZS1zaXppbmcnXG4gICAgXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcENsYXNzZXN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWwgJiZcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgICAgICBoaWRlUmVzcG9uc2l2ZT17aGlkZVJlc3BvbnNpdmVCdXR0b25zfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhjdXJyZW50RGV2aWNlKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaW5rZWQ6IHRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQoKSB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXVuaXRzJz5cbiAgICAgICAgICAgIHt0aGlzLmdldEJ1dHRvbnMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTaXppbmdDb250cm9sXG4gICAgICAgICAgbWluPXt0aGlzLmNvbnRyb2xQYXJhbXMubWlufVxuICAgICAgICAgIG1heD17dGhpcy5jb250cm9sUGFyYW1zLm1heH1cbiAgICAgICAgICBzdGVwPXt0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZSArICctdW5pdCddID09PVxuICAgICAgICAgICdlbScgPyAwLjEgOiAxfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgZGVmYXVsdHM9e3RoaXMuZGVmYXVsdFZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV19XG4gICAgICAgICAgbGlua2VkPXt0aGlzLnN0YXRlLmxpbmtlZH1cbiAgICAgICAgICBvbkxpbmtlZD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxpbmtlZDogIXRoaXMuc3RhdGUubGlua2VkIH0pfVxuICAgICAgICAgIG9uQ2hhbmdlPXsob3B0aW9uVHlwZSwgbnVtZXJpY1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUmVzZXQ9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5kZWZhdWx0VmFsdWUgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh0aGlzLmRlZmF1bHRWYWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHsgdW5pdHMgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxCdXR0b24gaXNTbWFsbCBkaXNhYmxlZCBjbGFzc05hbWU9J2FjdGl2ZSBhbG9uZSc+e3VuaXRzWzBdfTwvQnV0dG9uPlxuICAgIH1cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aXZlOiBzZWxmLnN0YXRlLnZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArXG4gICAgICAgICAgJy11bml0J10gPT09IHVuaXRcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB7IC4uLnNlbGYuc3RhdGUudmFsdWUgfVxuICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlICsgJy11bml0J10gPSB1bml0XG4gICAgICAgICAgICBpZiAodW5pdCAhPT0gJ2VtJykge1xuICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdID0gbWFwVmFsdWVzKFxuICAgICAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZV0sXG4gICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICAgICAgICBzZWxmLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgPnt1bml0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgc2V0VmFsdWUob3B0aW9uVHlwZSwgbnVtZXJpY1ZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB7IC4uLnRoaXMuc3RhdGUudmFsdWUgfVxuICAgIGlmICh0aGlzLnN0YXRlLmxpbmtlZCkge1xuICAgICAgdmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IG1hcFZhbHVlcyhcbiAgICAgICAgdmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSwgKCkgPT4gbnVtZXJpY1ZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdID0ge1xuICAgICAgICAuLi52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLFxuICAgICAgICBbb3B0aW9uVHlwZV06IG51bWVyaWNWYWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpXG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh2YWx1ZSlcbiAgfVxuXG4gIHNob3VsZFZhbHVlc0JlTGlua2VkKCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtcbiAgICAgIHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS50b3AsXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0ucmlnaHQsXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0uYm90dG9tLFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmxlZnRcbiAgICBdXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIHJldHVybiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT0gdmFsdWVzWzBdKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb250cm9sIH0gPSB0aGlzLnByb3BzXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoZS5kZXRhaWwudmFsdWUgfHwgdGhpcy5kZWZhdWx0VmFsdWUpXG4gICAgfSlcbiAgfVxufVxuXG5TcGFjaW5nQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwYWNpbmdDb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNvbnRyb2xzLmNzc1wiOyIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFRvZ2dsZUNvbXBvbmVudCBmcm9tICcuL1RvZ2dsZUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8VG9nZ2xlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50XG59ID0gd3AuZWxlbWVudFxuXG5jb25zdCB7XG4gIFRvZ2dsZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzXG5cbmNsYXNzIFRvZ2dsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgge1xuICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgfSApXG4gICAgdGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KCBuZXdWYWx1ZSApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgY2xhc3NOYW1lPSduZXZlLXRvZ2dsZS1jb250cm9sJ1xuICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy50b2dnbGVWYWx1ZSggdmFsdWUgKX1cbiAgICAgICAgLz5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjb250cm9sIH0gPSB0aGlzLnByb3BzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICggIWUuZGV0YWlsICkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoIGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkICkgcmV0dXJuIGZhbHNlXG4gICAgICB0aGlzLnRvZ2dsZVZhbHVlKCBlLmRldGFpbC52YWx1ZSApXG4gICAgfSApXG4gIH1cbn1cblxuVG9nZ2xlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgVHlwZWZhY2VDb21wb25lbnQgZnJvbSAnLi9UeXBlZmFjZUNvbXBvbmVudC5qcydcblxuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFR5cGVmYWNlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCh7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8VHlwZWZhY2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSlcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE51bWJlckNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL051bWJlckNvbnRyb2wuanMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcblxuY29uc3Qge1xuICBTZWxlY3RDb250cm9sXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBUeXBlZmFjZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgbGV0IHZhbHVlID0gcHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpXG4gICAgbGV0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBzaXplX3VuaXRzOiBbJ2VtJywgJ3B4J10sXG4gICAgICBsaW5lX2hlaWdodF91bml0czogWydlbScsICdweCddLFxuICAgICAgd2VpZ2h0X2RlZmF1bHQ6IDQwMCxcbiAgICAgIHRleHRfdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICBzaXplX2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAncHgnLFxuICAgICAgICAgIHRhYmxldDogJ3B4JyxcbiAgICAgICAgICBkZXNrdG9wOiAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogMTUsXG4gICAgICAgIHRhYmxldDogMTUsXG4gICAgICAgIGRlc2t0b3A6IDE1XG4gICAgICB9LFxuICAgICAgbGluZV9oZWlnaHRfZGVmYXVsdDoge1xuICAgICAgICBzdWZmaXg6IHtcbiAgICAgICAgICBtb2JpbGU6ICdlbScsXG4gICAgICAgICAgdGFibGV0OiAnZW0nLFxuICAgICAgICAgIGRlc2t0b3A6ICdlbSdcbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiAxLjYsXG4gICAgICAgIHRhYmxldDogMS42LFxuICAgICAgICBkZXNrdG9wOiAxLjZcbiAgICAgIH0sXG4gICAgICBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0OiB7XG4gICAgICAgIG1vYmlsZTogMCxcbiAgICAgICAgdGFibGV0OiAwLFxuICAgICAgICBkZXNrdG9wOiAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCAhdmFsdWUgKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgpXG4gICAgfVxuXG4gICAgaWYgKCBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycy5sZW5ndGggKSB7XG4gICAgICBjb25zdCBpbnB1dF9hdHRycyA9IEpTT04ucGFyc2UocHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMpXG4gICAgICBpZiAoIGlucHV0X2F0dHJzLmRlZmF1bHRfaXNfZW1wdHkgKSB7XG4gICAgICAgIGRlZmF1bHRQYXJhbXMgPSB0aGlzLmdldEVtcHR5RGVmYXVsdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkZWQgTGF0ZXIuIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgZGVmYXVsdCB2YWx1ZSBpZiBub25lIGlzIHNlbGVjdGVkLlxuICAgIHZhbHVlLmxpbmVIZWlnaHQgPSB2YWx1ZS5saW5lSGVpZ2h0IHx8IGRlZmF1bHRQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdFxuICAgIHZhbHVlLmxpbmVIZWlnaHQuc3VmZml4ID0gdmFsdWUubGluZUhlaWdodC5zdWZmaXggfHwgZGVmYXVsdFBhcmFtcy5saW5lX2hlaWdodF9kZWZhdWx0LnN1ZmZpeFxuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zID0gcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgPyB7XG4gICAgICAuLi5kZWZhdWx0UGFyYW1zLFxuICAgICAgLi4uSlNPTi5wYXJzZShwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycylcbiAgICB9IDogZGVmYXVsdFBhcmFtc1xuXG4gICAgLy8gQWRkZWQgTGF0ZXIuIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgc3VmZml4IGZvciBsaW5lIGhlaWdodC5cbiAgICB0aGlzLmNvbnRyb2xQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXggPSB0aGlzLmNvbnRyb2xQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXggfHxcbiAgICAgIGRlZmF1bHRQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50RGV2aWNlOiAnZGVza3RvcCcsXG4gICAgICBmb250U2l6ZTogdmFsdWUuZm9udFNpemUsXG4gICAgICBsaW5lSGVpZ2h0OiB2YWx1ZS5saW5lSGVpZ2h0LFxuICAgICAgbGV0dGVyU3BhY2luZzogdmFsdWUubGV0dGVyU3BhY2luZyxcbiAgICAgIGZvbnRXZWlnaHQ6IHZhbHVlLmZvbnRXZWlnaHQsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiB2YWx1ZS50ZXh0VHJhbnNmb3JtLFxuICAgICAgZmxhZzogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckZvbnRXZWlnaHQgPSB0aGlzLnJlbmRlckZvbnRXZWlnaHQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyVGV4dFRyYW5zZm9ybSA9IHRoaXMucmVuZGVyVGV4dFRyYW5zZm9ybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJGb250U2l6ZSA9IHRoaXMucmVuZGVyRm9udFNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyTGluZUhlaWdodCA9IHRoaXMucmVuZGVyTGluZUhlaWdodC5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJMZXR0ZXJTcGFjaW5nID0gdGhpcy5yZW5kZXJMZXR0ZXJTcGFjaW5nLmJpbmQodGhpcylcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcyA9IHRoaXMudXBkYXRlVmFsdWVzLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldEVtcHR5VmFsdWUoIHByb3AgPSAnJyApIHtcbiAgICBjb25zdCBlbXB0eVZhbHVlID0ge1xuICAgICAgY3VycmVudERldmljZTogJ2Rlc2t0b3AnLFxuICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAncHgnLFxuICAgICAgICAgIHRhYmxldDogJ3B4JyxcbiAgICAgICAgICBkZXNrdG9wOiAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICBzdWZmaXg6IHtcbiAgICAgICAgICBtb2JpbGU6ICdlbScsXG4gICAgICAgICAgdGFibGV0OiAnZW0nLFxuICAgICAgICAgIGRlc2t0b3A6ICdlbSdcbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiAnJyxcbiAgICAgICAgdGFibGV0OiAnJyxcbiAgICAgICAgZGVza3RvcDogJydcbiAgICAgIH0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgZm9udFdlaWdodDogJ25vbmUnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgZmxhZzogZmFsc2VcbiAgICB9XG4gICAgaWYgKCBwcm9wICYmIGVtcHR5VmFsdWVbcHJvcF0gKSB7XG4gICAgICByZXR1cm4gZW1wdHlWYWx1ZVtwcm9wXVxuICAgIH1cbiAgICByZXR1cm4gZW1wdHlWYWx1ZVxuICB9XG5cbiAgZ2V0RW1wdHlEZWZhdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaXplX3VuaXRzOiBbJ2VtJywgJ3B4J10sXG4gICAgICBsaW5lX2hlaWdodF91bml0czogWydlbScsICdweCddLFxuICAgICAgd2VpZ2h0X2RlZmF1bHQ6ICdub25lJyxcbiAgICAgIHRleHRfdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICBzaXplX2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAncHgnLFxuICAgICAgICAgIHRhYmxldDogJ3B4JyxcbiAgICAgICAgICBkZXNrdG9wOiAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGluZV9oZWlnaHRfZGVmYXVsdDoge1xuICAgICAgICBzdWZmaXg6IHtcbiAgICAgICAgICBtb2JpbGU6ICdlbScsXG4gICAgICAgICAgdGFibGV0OiAnZW0nLFxuICAgICAgICAgIGRlc2t0b3A6ICdlbSdcbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiAnJyxcbiAgICAgICAgdGFibGV0OiAnJyxcbiAgICAgICAgZGVza3RvcDogJydcbiAgICAgIH0sXG4gICAgICBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0OiB7XG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS10eXBlZmFjZS1jb250cm9sIG5ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sJz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUZXh0VHJhbnNmb3JtKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyRm9udFdlaWdodCgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvbnRTaXplKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyTGluZUhlaWdodCgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckxldHRlclNwYWNpbmcoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLnZhbHVlLFxuICAgICAgZmxhZzogIXRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLmdldCgpLmZsYWdcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyRm9udFdlaWdodCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1pbmxpbmUgZm9udC13ZWlnaHQnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ1dlaWdodCcsICduZXZlJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb250V2VpZ2h0fVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHsgdmFsdWU6ICdub25lJywgbGFiZWw6IF9fKCAnTm9uZScsICduZXZlJyApIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAxMDAsIGxhYmVsOiAnMTAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMjAwLCBsYWJlbDogJzIwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDMwMCwgbGFiZWw6ICczMDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA0MDAsIGxhYmVsOiAnNDAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNTAwLCBsYWJlbDogJzUwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDYwMCwgbGFiZWw6ICc2MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA3MDAsIGxhYmVsOiAnNzAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogODAwLCBsYWJlbDogJzgwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDkwMCwgbGFiZWw6ICc5MDAnIH1cbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZm9udFdlaWdodCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvbnRXZWlnaHQgfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgZm9udFdlaWdodCB9KVxuICAgICAgICAgICAgaWYgKCBmb250V2VpZ2h0ID09PSAnbm9uZScgKSB7XG4gICAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZXIucmVmcmVzaCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclRleHRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtaW5saW5lIHRleHQtdHJhbnNmb3JtJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAge19fKCdUcmFuc2Zvcm0nLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dFRyYW5zZm9ybX1cbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnbm9uZScsIGxhYmVsOiBfXygnTm9uZScsICduZXZlJykgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6ICdjYXBpdGFsaXplJywgbGFiZWw6IF9fKCdDYXBpdGFsaXplJywgJ25ldmUnKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2xvd2VyY2FzZScsIGxhYmVsOiBfXygnTG93ZXJjYXNlJywgJ25ldmUnKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ3VwcGVyY2FzZScsIGxhYmVsOiBfXygnVXBwZXJjYXNlJywgJ25ldmUnKSB9XG4gICAgICAgICAgXX1cbiAgICAgICAgICBvbkNoYW5nZT17KHRleHRUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0VHJhbnNmb3JtIH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IHRleHRUcmFuc2Zvcm0gfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRm9udFNpemUoKSB7XG4gICAgbGV0IHsgZm9udFNpemUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHNpemVfZGVmYXVsdCwgc2l6ZV91bml0cyB9ID0gdGhpcy5jb250cm9sUGFyYW1zXG4gICAgaWYgKCAhZm9udFNpemUgKSB7XG4gICAgICBmb250U2l6ZSA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnZm9udFNpemUnIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxOdW1iZXJDb250cm9sXG4gICAgICAgIGNsYXNzTmFtZT0nZm9udC1zaXplJ1xuICAgICAgICBsYWJlbD17X18oJ0ZvbnQgU2l6ZScsICduZXZlJyl9XG4gICAgICAgIGRlZmF1bHQ9e3NpemVfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2ZvbnRTaXplW2N1cnJlbnREZXZpY2VdfVxuICAgICAgICBzdGVwPXtmb250U2l6ZS5zdWZmaXhbY3VycmVudERldmljZV0gPT09ICdlbScgPyAwLjEgOiAxfVxuICAgICAgICB1bml0cz17c2l6ZV91bml0c31cbiAgICAgICAgYWN0aXZlVW5pdD17Zm9udFNpemUuc3VmZml4W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICBoYXNSZXNwb25zaXZlXG4gICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgIH19XG4gICAgICAgIG9uVW5pdENoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZm9udFNpemVcbiAgICAgICAgICB2YWx1ZS5zdWZmaXhbY3VycmVudERldmljZV0gPSB2YWxcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZm9udFNpemVcbiAgICAgICAgICB2YWx1ZS5zdWZmaXhbY3VycmVudERldmljZV0gPSBzaXplX2RlZmF1bHQuc3VmZml4W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSBzaXplX2RlZmF1bHRbY3VycmVudERldmljZV1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICBpZiAoIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMucmVmcmVzaF9vbl9yZXNldCApIHtcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZXIucmVmcmVzaCgpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZWREZXZpY2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTGluZUhlaWdodCgpIHtcbiAgICBjb25zdCB7IGxpbmVfaGVpZ2h0X2RlZmF1bHQsIGxpbmVfaGVpZ2h0X3VuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBsaW5lSGVpZ2h0IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCAhbGluZUhlaWdodCApIHtcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmdldEVtcHR5VmFsdWUoJ2xpbmVIZWlnaHQnIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxOdW1iZXJDb250cm9sXG4gICAgICAgIGNsYXNzTmFtZT0nbGluZS1oZWlnaHQnXG4gICAgICAgIGxhYmVsPXtfXygnTGluZSBIZWlnaHQnLCAnbmV2ZScpfVxuICAgICAgICBzdGVwPXtsaW5lSGVpZ2h0LnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9PT0gJ2VtJyA/IDAuMSA6IDF9XG4gICAgICAgIGRlZmF1bHQ9e2xpbmVfaGVpZ2h0X2RlZmF1bHRbY3VycmVudERldmljZV19XG4gICAgICAgIHZhbHVlPXtsaW5lSGVpZ2h0W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICB1bml0cz17bGluZV9oZWlnaHRfdW5pdHN9XG4gICAgICAgIGFjdGl2ZVVuaXQ9e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICBtYXg9e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gNCA6IDIwMH1cbiAgICAgICAgbWluPXtsaW5lSGVpZ2h0LnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9PT0gJ2VtJyA/IDAuNSA6IDF9XG4gICAgICAgIGhhc1Jlc3BvbnNpdmVcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxpbmVIZWlnaHRcbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgbGluZUhlaWdodDogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZUhlaWdodFxuICAgICAgICAgIHZhbHVlLnN1ZmZpeCA9IHZhbHVlLnN1ZmZpeCB8fCBsaW5lX2hlaWdodF9kZWZhdWx0LnN1ZmZpeFxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IGxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSBsaW5lX2hlaWdodF9kZWZhdWx0W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uVW5pdENoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZUhlaWdodFxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgbGluZUhlaWdodDogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25DaGFuZ2VkRGV2aWNlPXsoY3VycmVudERldmljZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnREZXZpY2UgfSl9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckxldHRlclNwYWNpbmcoKSB7XG4gICAgY29uc3QgeyBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0IH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcbiAgICBjb25zdCB7IGN1cnJlbnREZXZpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgeyBsZXR0ZXJTcGFjaW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCAhbGV0dGVyU3BhY2luZyApIHtcbiAgICAgIGxldHRlclNwYWNpbmcgPSB0aGlzLmdldEVtcHR5VmFsdWUoJ2xldHRlclNwYWNpbmcnIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxOdW1iZXJDb250cm9sXG4gICAgICAgIGNsYXNzTmFtZT0nbGV0dGVyLXNwYWNpbmcnXG4gICAgICAgIGxhYmVsPXtfXygnTGV0dGVyIFNwYWNpbmcnLCAnbmV2ZScpfVxuICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgIGRlZmF1bHQ9e2xldHRlcl9zcGFjaW5nX2RlZmF1bHRbY3VycmVudERldmljZV19XG4gICAgICAgIHZhbHVlPXtsZXR0ZXJTcGFjaW5nICYmIGxldHRlclNwYWNpbmdbY3VycmVudERldmljZV0gPyBsZXR0ZXJTcGFjaW5nW2N1cnJlbnREZXZpY2VdIDogJyd9XG4gICAgICAgIG1heD17MjB9XG4gICAgICAgIG1pbj17LTV9XG4gICAgICAgIHVuaXRzPXtbJ3B4J119XG4gICAgICAgIGhhc1Jlc3BvbnNpdmVcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxldHRlclNwYWNpbmdcbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgbGV0dGVyU3BhY2luZzogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGV0dGVyU3BhY2luZ1xuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gbGV0dGVyX3NwYWNpbmdfZGVmYXVsdFtjdXJyZW50RGV2aWNlXVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgbGV0dGVyU3BhY2luZzogdmFsdWUgfSlcbiAgICAgICAgICBpZiAoIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMucmVmcmVzaF9vbl9yZXNldCApIHtcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5wcmV2aWV3ZXIucmVmcmVzaCgpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZWREZXZpY2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cblR5cGVmYWNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVmYWNlQ29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==