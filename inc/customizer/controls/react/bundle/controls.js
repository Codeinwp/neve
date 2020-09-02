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
          return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("a", {
            href: "#"
          }), /*#__PURE__*/React.createElement(ColorPicker, {
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
    value: value || '',
    min: min < 0 ? min : 0,
    max: max || 100,
    step: step || 1,
    allowReset: true,
    onChange: function onChange(nextValue) {
      updateValues(nextValue);
    }
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
  return /*#__PURE__*/React.createElement("div", {
    className: "neve-white-background-control neve-range-control"
  }, controlHeader(), /*#__PURE__*/React.createElement("div", {
    className: "range-wrap"
  }, /*#__PURE__*/React.createElement(RangeControl, {
    resetFallbackValue: defaultVal[currentDevice],
    value: displayValue || '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC12aXNpYmlsaXR5LXNlbnNvci9kaXN0L3Zpc2liaWxpdHktc2Vuc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL0JhY2tncm91bmRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLWFwcGVhcmFuY2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IvQ29sb3JDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9Db2xvckNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vUmFkaW9JY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9TaW5nbGVTaXppbmdJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvZHluYW1pYy1maWVsZC1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHluYW1pYy1maWVsZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQtZmFtaWx5L0ZvbnRGYW1pbHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC1mYW1pbHkvRm9udFByZXZpZXdMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlzZWxlY3QvTXVsdGlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMtc2VsZWN0b3IvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy1zZWxlY3Rvci9QcmVzZXRzU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9ucy9SYWRpb0J1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvLWltYWdlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhZGlvLWltYWdlL1JhZGlvSW1hZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmdlL1JhbmdlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLXJhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS1yYWRpby1idXR0b25zL1Jlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtcmFuZ2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS1yYW5nZS9SZXNwb25zaXZlUmFuZ2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtdG9nZ2xlL0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUtdG9nZ2xlL1Jlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYWNpbmcvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BhY2luZy9TcGFjaW5nQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy90b2dnbGUvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9nZ2xlL1RvZ2dsZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZWZhY2UvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZWZhY2UvVHlwZWZhY2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiTWVkaWFVcGxvYWQiLCJibG9ja0VkaXRvciIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIlJhbmdlQ29udHJvbCIsIkZvY2FsUG9pbnRQaWNrZXIiLCJEYXNoaWNvbiIsIlRvZ2dsZUNvbnRyb2wiLCJQbGFjZWhvbGRlciIsIkJhY2tncm91bmRDb21wb25lbnQiLCJwcm9wcyIsInZhbHVlIiwiY29udHJvbCIsInNldHRpbmciLCJnZXQiLCJzdGF0ZSIsInR5cGUiLCJpbWFnZVVybCIsImZvY3VzUG9pbnQiLCJ4IiwieSIsImNvbG9yVmFsdWUiLCJvdmVybGF5Q29sb3JWYWx1ZSIsIm92ZXJsYXlPcGFjaXR5IiwiZml4ZWQiLCJ1c2VGZWF0dXJlZCIsInR5cGVzIiwibGFiZWxzIiwiY29sb3IiLCJpbWFnZSIsImJ1dHRvbnMiLCJzZWxmIiwibWFwIiwiaW5kZXgiLCJwdXNoIiwiZSIsInVwZGF0ZVNldHRpbmciLCJwYXJhbXMiLCJsYWJlbCIsImdldEJ1dHRvbnMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZURhdGEiLCJ1cmwiLCJvcGVuIiwidmFsIiwibmV3UG9pbnQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRldGFpbCIsImlkIiwibmV3VmFsdWVzIiwic2V0U3RhdGUiLCJzZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicmVuZGVyIiwiQmFja2dyb3VuZENvbnRyb2wiLCJjdXN0b21pemUiLCJDb250cm9sIiwiZXh0ZW5kIiwicmVuZGVyQ29udGVudCIsImNvbnRhaW5lciIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJsb2Rhc2giLCJtYXBWYWx1ZXMiLCJCdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50IiwiZGVmYXVsdHNGcm9tQ29udHJvbCIsImJvcmRlclJhZGl1cyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImJvcmRlcldpZHRoIiwiZGVmYXVsdFZhbHMiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEhvdmVyIiwidGV4dCIsInRleHRIb3ZlciIsInJhZGl1c0xpbmtlZCIsIndpZHRoTGlua2VkIiwiaXNMaW5rZWQiLCJyZW5kZXJCb3JkZXJDb250cm9scyIsImJpbmQiLCJyZW5kZXJUeXBlQ29udHJvbHMiLCJyZW5kZXJDb2xvcnMiLCJyYWRpdXNPcHRpb25zIiwid2lkdGhPcHRpb25zIiwib3B0aW9uVHlwZSIsIm51bWVyaWNWYWx1ZSIsIm5ld1ZhbCIsInVwZGF0ZVZhbHVlcyIsInNldHRpbmdzIiwibm9ybWFsIiwiY29udHJvbHMiLCJob3ZlciIsIm5vX2hvdmVyIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xTbHVnIiwiZmlsbCIsInRvb2x0aXAiLCJpY29uIiwib3V0bGluZSIsInIiLCJ3IiwidmFsdWVzIiwiZXZlcnkiLCJCdXR0b25BcHBlYXJhbmNlQ29udHJvbCIsIkNvbG9yQ29tcG9uZW50IiwicG9wb3Zlck9wZW4iLCJkZWZhdWx0VmFsdWUiLCJDb2xvckNvbnRyb2wiLCJDb2xvclBpY2tlciIsIkRyb3Bkb3duIiwic2VsZWN0ZWRDb2xvciIsInRvZ2dsZSIsImlzT3BlbiIsIm9uVG9nZ2xlIiwiY2xhc3NuYW1lcyIsIm9uQ2hhbmdlIiwiaGV4Iiwic3RyaW5nIiwiZnVuYyIsIk51bWJlckNvbnRyb2wiLCJ1bml0cyIsImNsYXNzTmFtZSIsImhhc1Jlc3BvbnNpdmUiLCJjdXJyZW50RGV2aWNlIiwib25DaGFuZ2VkRGV2aWNlIiwibWF4IiwibWluIiwic3RlcCIsIm9uUmVzZXQiLCJsZW5ndGgiLCJ1bml0IiwiYnV0dG9uQ2xhc3MiLCJhY3RpdmUiLCJhY3RpdmVVbml0Iiwib25Vbml0Q2hhbmdlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJib29sIiwiUmFkaW9JY29ucyIsIm9wdGlvbnMiLCJzaG93TGFiZWxzIiwiVG9vbHRpcCIsIlJlc3BvbnNpdmVDb250cm9sIiwidmlldyIsImxpbmtSZXNwb25zaXZlQnV0dG9ucyIsImRldmljZXMiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiZXhjbHVkZWQiLCJkZXZpY2VNYXAiLCJrZXkiLCJpbmNsdWRlcyIsImNvbnRyb2xMYWJlbCIsImhpZGVSZXNwb25zaXZlIiwiZGV2aWNlIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjaGlsZHJlbiIsInByZXZpZXdlZERldmljZSIsImNoYW5nZVZpZXdUeXBlIiwiYW55IiwiU2luZ2xlU2l6aW5nSW5wdXQiLCJ0YXJnZXQiLCJTaXppbmdDb250cm9sIiwiaGFzU2V0VmFsdWVzIiwibGlua0J1dHRvbiIsIm5vTGlua2luZyIsImxpbmtlZCIsIm9uTGlua2VkIiwid3JhcENsYXNzZXMiLCJpIiwibiIsImRlZmF1bHRzIiwiZmlsdGVyIiwib3B0aW9uIiwibWF5YmVQYXJzZUpzb24iLCJpbnB1dCIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiaXNPYmplY3QiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWVyZ2VEZWVwIiwic291cmNlcyIsInNvdXJjZSIsInNoaWZ0IiwiYXNzaWduIiwiZ2V0SW50VmFsQXNSZXNwb25zaXZlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU1ZHIiwibG9nb09ubHkiLCJsb2dvVG9wVGl0bGUiLCJsb2dvVGl0bGUiLCJ0aXRsZUxvZ28iLCJweCIsImVtIiwicGVyY2VudCIsImJ1dHRvbkZpbGwiLCJidXR0b25PdXRsaW5lIiwibWVudVBsYWluIiwibWVudUZpbGxlZCIsIm1lbnVVbmRlcmxpbmUiLCJtZW51T3ZlcmxpbmUiLCJteUFjY291bnRVc2Vyc1NvbGlkIiwibXlBY2NvdW50VXNlcnNGaXJlbmRzU29saWQiLCJteUFjY291bnRVc2VyU29saWQiLCJteUFjY291bnRVc2VyUmVndWxhciIsIm15QWNjb3VudFVzZXJUYWdTb2xpZCIsIm15QWNjb3VudFVzZXJBbHRTb2xpZCIsIm15QWNjb3VudFVzZXJBdmF0YXIiLCJteUFjY291bnROb25lIiwiY2FydEljb25TdHlsZTEiLCJjYXJ0SWNvblN0eWxlMiIsImNhcnRJY29uU3R5bGUzIiwiY2FydEljb25TdHlsZTQiLCJjYXJ0SWNvblN0eWxlNSIsImNhcnRJY29uU3R5bGU2IiwibWVkaWFBbGlnbkxlZnQiLCJtZWRpYUFsaWduUmlnaHQiLCJEcm9wZG93bk1lbnUiLCJNZW51R3JvdXAiLCJNZW51SXRlbSIsIkR5bmFtaWNGaWVsZEluc2VydGVyIiwiZ2V0T3B0aW9ucyIsIm9uU2VsZWN0IiwiYWxsb3dlZE9wdGlvbnNUeXBlcyIsImFsbE9wdGlvbnMiLCJOZXZlUmVhY3RDdXN0b21pemUiLCJkeW5hbWljVGFncyIsImZvckVhY2giLCJvcHRpb25Hcm91cCIsInNsdWciLCJpbml0IiwiZmllbGRTZWxlY3Rpb24iLCJjb250cm9sSWQiLCJkeW5hbWljQ29udHJvbFdyYXAiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnQiLCJzZWxlY3Rpb25TdGFydCIsImVuZCIsInNlbGVjdGlvbkVuZCIsIm1hZ2ljVGFnIiwiZ3JvdXAiLCJhZGRUb0ZpZWxkIiwidGFnIiwic3Vic3RyaW5nIiwiZm9jdXMiLCJFdmVudCIsIkZvbnRGYW1pbHlDb250cm9sIiwiVHlwZWZhY2VDb21wb25lbnQiLCJmb250RmFtaWx5IiwiZm9udEZhbWlseVNvdXJjZSIsImRlZmF1bHRQYXJhbXMiLCJkZWZhdWx0X2lzX2luaGVyaXQiLCJjb250cm9sUGFyYW1zIiwiaW5wdXRfYXR0cnMiLCJmb250IiwidHlwZWtpdFNsdWdzIiwidXBkYXRlQ29udHJvbCIsIm1heWJlX2dldF90eXBla2l0X2ZvbnQiLCJzZXRUaW1lb3V0IiwicHJldmlld2VyIiwic2VuZCIsImluaGVyaXQiLCJQb3BvdmVyIiwiVGV4dENvbnRyb2wiLCJGb250RmFtaWx5U2VsZWN0b3IiLCJmb250cyIsImlzVmlzaWJsZSIsInNlYXJjaCIsImxvYWRVbnRpbCIsImRlbGF5Rm9udEluY2x1c2lvbiIsImZvbnRHcm91cHMiLCJyZXN1bHQiLCJ0b0xvd2VyQ2FzZSIsImdldEZvbnRzIiwiaW5oZXJpdERlZmF1bHQiLCJvbkZvbnRDaG9pY2UiLCJzZWxlY3RlZCIsIm1heWJlR2V0VHlwZWtpdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdEZvbnRmYWNlIiwiZ2V0Rm9udExpc3QiLCJGb250UHJldmlld0xpbmsiLCJwcmV2aWV3V2FzUmVuZGVyZWQiLCJzdHlsZSIsImZvbnRGYWNlIiwib25DbGljayIsImRlbGF5TG9hZCIsImNvbnRyb2xDb25zdHJ1Y3RvciIsIm5ldmVfdG9nZ2xlX2NvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfdG9nZ2xlX2NvbnRyb2wiLCJSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCIsIm5ldmVfYmFja2dyb3VuZF9jb250cm9sIiwibmV2ZV9zcGFjaW5nIiwiU3BhY2luZ0NvbnRyb2wiLCJuZXZlX3R5cGVmYWNlX2NvbnRyb2wiLCJUeXBlZmFjZUNvbnRyb2wiLCJuZXZlX2ZvbnRfZmFtaWx5X2NvbnRyb2wiLCJuZXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCIsIlJhZGlvQnV0dG9uc0NvbnRyb2wiLCJuZXZlX2J1dHRvbl9hcHBlYXJhbmNlIiwibmV2ZV9yYW5nZV9jb250cm9sIiwibmV2ZV9yZXNwb25zaXZlX3JhbmdlX2NvbnRyb2wiLCJSZXNwb25zaXZlUmFuZ2VDb250cm9sIiwibmV2ZV9jb2xvcl9jb250cm9sIiwibmV2ZV9wcmVzZXRzX3NlbGVjdG9yIiwiUHJlc2V0c1NlbGVjdG9yQ29udHJvbCIsIm5ldmVfbXVsdGlzZWxlY3QiLCJNdWx0aVNlbGVjdENvbnRyb2wiLCJuZXZlX3Jlc3BvbnNpdmVfcmFkaW9fYnV0dG9uc19jb250cm9sIiwiUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2wiLCJuZXZlX3JhZGlvX2ltYWdlX2NvbnRyb2wiLCJSYWRpb0ltYWdlQ29udHJvbCIsIndpbmRvdyIsInNlY3Rpb24iLCJkZXZpY2VCdXR0b25zIiwiZGF0YXNldCIsImluaXREeW5hbWljRmllbGRzIiwiSEZHIiwiZ2V0U2V0dGluZ3MiLCJ1c2VkU2V0dGluZ3MiLCJoZWFkZXJDb250cm9scyIsInN0cmluZ2lmeSIsInVzZVN0YXRlIiwiTXVsdGlTZWxlY3QiLCJjaG9pY2VzIiwic2V0VmFsdWUiLCJhZGRhYmxlIiwiY2hvaWNlIiwidiIsIlByZXNldHNTZWxlY3RvciIsInJlcGxhY2VTZXR0aW5ncyIsInByZXNldHMiLCJwcmVzZXQiLCJnZXRQcmVzZXRzIiwic2V0dXAiLCJOZXZlUHJvUmVhY3RDdXN0b21pemUiLCJ0aGVtZU1vZCIsInRoZW1lTW9kcyIsInVzZUVmZmVjdCIsIlJhZGlvQnV0dG9uc0NvbXBvbmVudCIsInVwZGF0ZVZhbHVlIiwiZ2V0Q2hvaWNlcyIsImlzX2ZvciIsInVzZXJfaWNvbl9zdHlsZTEiLCJ1c2VyX2ljb25fc3R5bGUyIiwidXNlcl9pY29uX3N0eWxlMyIsInVzZXJfaWNvbl9zdHlsZTQiLCJ1c2VyX2ljb25fc3R5bGU1IiwidXNlcl9pY29uX3N0eWxlNiIsInVzZXJfYXZhdGFyIiwibm9uZSIsIm5vIiwibGFyZ2VfYnV0dG9ucyIsIlJhZGlvSW1hZ2VDb21wb25lbnQiLCJyZW5kZXJPcHRpb25zIiwibmFtZSIsIlJhbmdlQ29tcG9uZW50IiwiZGVmYXVsdFZhbCIsImNvbnRyb2xQcm9wcyIsIm5leHRWYWx1ZSIsIlJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQiLCJzZXREZXZpY2UiLCJuZXdWYWx1ZSIsImlzTWVudUFsaWdubWVudCIsImluZGV4T2YiLCJyZWNpZXZlZFZhbHVlIiwiUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50IiwicGFyc2VkVmFsdWUiLCJzZXRDdXJyZW50RGV2aWNlIiwicmVzcG9uc2l2ZUNvbnZlcnRlZCIsImluY29taW5nVmFsdWUiLCJ1bml0QnV0dG9ucyIsInBhcnNlSW50IiwiY29udHJvbEhlYWRlciIsImRpc3BsYXlWYWx1ZSIsIlJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQiLCJTcGFjaW5nQ29tcG9uZW50IiwiaGlkZVJlc3BvbnNpdmVCdXR0b25zIiwiYmFzZURlZmF1bHQiLCJkYlZhbCIsInNob3VsZFZhbHVlc0JlTGlua2VkIiwiVG9nZ2xlQ29tcG9uZW50IiwidG9nZ2xlVmFsdWUiLCJkZXNjcmlwdGlvbiIsIl9faHRtbCIsIlNlbGVjdENvbnRyb2wiLCJzaXplX3VuaXRzIiwibGluZV9oZWlnaHRfdW5pdHMiLCJ3ZWlnaHRfZGVmYXVsdCIsInRleHRfdHJhbnNmb3JtIiwic2l6ZV9kZWZhdWx0Iiwic3VmZml4IiwibGluZV9oZWlnaHRfZGVmYXVsdCIsImxldHRlcl9zcGFjaW5nX2RlZmF1bHQiLCJnZXRFbXB0eVZhbHVlIiwiZGVmYXVsdF9pc19lbXB0eSIsImdldEVtcHR5RGVmYXVsdCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImZsYWciLCJyZW5kZXJGb250V2VpZ2h0IiwicmVuZGVyVGV4dFRyYW5zZm9ybSIsInJlbmRlckZvbnRTaXplIiwicmVuZGVyTGluZUhlaWdodCIsInJlbmRlckxldHRlclNwYWNpbmciLCJwcm9wIiwiZW1wdHlWYWx1ZSIsInJlZnJlc2hfb25fcmVzZXQiLCJyZWZyZXNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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Q0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixTQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekMsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQVU7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHVGQUEyQjtBQUN0RCxDQUFDLE1BQU0sRUFJTjs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixlQUFlO0FBQzNHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN2T2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsb0JBQU8sR0FBRyxtQkFBTyxDQUFDLDRCQUFXO0FBQ2hFLE1BQU0sRUFLdUU7QUFDN0UsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHFDQUFxQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcseUJBQXlCLEVBQUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFN1YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyw2QkFBNkIsZ0dBQWdHLGdEQUFnRCxHQUFHLDJCQUEyQjs7QUFFM00sdUNBQXVDLHVCQUF1Qix1RkFBdUYsRUFBRSxhQUFhOztBQUVwSywwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUV4SywyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7Ozs7OztBQU8vTTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsNEhBQTRIOztBQUU1SDtBQUNBLGtMQUFrTDs7QUFFbEw7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDhMQUE4TCxTQUFTO0FBQ3ZNO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7OztBQUdBLE9BQU87QUFDUDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsbEJEOztBQUNBO0FBQ0E7QUFDQTtJQUVRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO2tCQUlKQyxFQUFFLENBQUNFLE87SUFGTEMsUyxlQUFBQSxTO0lBQ0FDLFEsZUFBQUEsUTtJQUdB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R0FBRzZaLGFBQWQ7QUFDQTdaLGVBQUssQ0FBQzBILGFBQUQsQ0FBTCxHQUF1QjZSLHNCQUFzQixDQUFDN1IsYUFBRCxDQUE3Qzs7QUFDQSxnQkFBSSxDQUFDaEYsUUFBTCxDQUFjO0FBQUVtWCx5QkFBYSxFQUFFN1o7QUFBakIsV0FBZDs7QUFDQSxnQkFBSSxDQUFDcUYsWUFBTCxDQUFrQjtBQUFFd1UseUJBQWEsRUFBRTdaO0FBQWpCLFdBQWxCOztBQUNBLGNBQUssTUFBSSxDQUFDRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJ5QixNQUFuQixDQUEwQjhZLGdCQUEvQixFQUFrRDtBQUNoRHpiLGNBQUUsQ0FBQ21FLFNBQUgsQ0FBYThOLFNBQWIsQ0FBdUJ5SixPQUF2QjtBQUNEO0FBQ0YsU0F4Qkg7QUF5QkUsdUJBQWUsRUFBRSx5QkFBQy9TLGFBQUQ7QUFBQSxpQkFBbUIsTUFBSSxDQUFDaEYsUUFBTCxDQUFjO0FBQUVnRix5QkFBYSxFQUFiQTtBQUFGLFdBQWQsQ0FBbkI7QUFBQTtBQXpCbkIsUUFERjtBQTZCRDs7OztFQXRXNkJ4SSxTOztBQXlXaENrUixpQkFBaUIsQ0FBQ3hOLFNBQWxCLEdBQThCO0FBQzVCM0MsU0FBTyxFQUFFNEMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERSxDQUE5QjtBQUllcU4sZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVhBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi45LjBcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xuLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChmYWxzZSkgeyB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcywgUmVhY3RJczsgfSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSkoKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRlbGwgd2hldGhlciB0aGUgcmVjdCBpcyB2aXNpYmxlLCBnaXZlbiBhbiBvZmZzZXRcbi8vXG4vLyByZXR1cm46IGJvb2xlYW5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KSB7XG4gIHZhciBvZmZzZXREaXIgPSBvZmZzZXQuZGlyZWN0aW9uO1xuICB2YXIgb2Zmc2V0VmFsID0gb2Zmc2V0LnZhbHVlOyAvLyBSdWxlcyBmb3IgY2hlY2tpbmcgZGlmZmVyZW50IGtpbmQgb2Ygb2Zmc2V0cy4gSW4gZXhhbXBsZSBpZiB0aGUgZWxlbWVudCBpc1xuICAvLyA5MHB4IGJlbG93IHZpZXdwb3J0IGFuZCBvZmZzZXRUb3AgaXMgMTAwLCBpdCBpcyBjb25zaWRlcmVkIHZpc2libGUuXG5cbiAgc3dpdGNoIChvZmZzZXREaXIpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC50b3AgKyBvZmZzZXRWYWwgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICsgb2Zmc2V0VmFsIDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIG9mZnNldFZhbCA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wO1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtIG9mZnNldFZhbCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBWaXNpYmlsaXR5U2Vuc29yOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjdChyZWN0KSB7XG4gIGlmIChyZWN0LndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChyZWN0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbnZhciBWaXNpYmlsaXR5U2Vuc29yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaXNpYmlsaXR5U2Vuc29yLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXNpYmlsaXR5U2Vuc29yKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTZW5zb3IpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVmlzaWJpbGl0eVNlbnNvcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuY29udGFpbm1lbnQgfHwgd2luZG93O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIGRlbGF5LCB0aHJvdHRsZSkge1xuICAgICAgaWYgKCFfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICB2YXIgZnVuYztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLmNoZWNrKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhyb3R0bGUgPiAtMSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB0aHJvdHRsZSB8fCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIGRlbGF5IHx8IDApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGZuOiBmdW5jLFxuICAgICAgICBnZXRMYXN0VGltZW91dDogZnVuY3Rpb24gZ2V0TGFzdFRpbWVvdXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaW5mby5mbik7XG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2V2ZW50XSA9IGluZm87XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjayB8fCBfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbnRlcnZhbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoX3RoaXMuY2hlY2ssIF90aGlzLnByb3BzLmludGVydmFsRGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihfdGhpcy5nZXRDb250YWluZXIoKSwgXCJzY3JvbGxcIiwgX3RoaXMucHJvcHMuc2Nyb2xsRGVsYXksIF90aGlzLnByb3BzLnNjcm9sbFRocm90dGxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnJlc2l6ZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBfdGhpcy5wcm9wcy5yZXNpemVEZWxheSwgX3RoaXMucHJvcHMucmVzaXplVGhyb3R0bGUpO1xuICAgICAgfSAvLyBpZiBkb250IG5lZWQgZGVsYXllZCBjYWxsLCBjaGVjayBvbiBsb2FkICggYmVmb3JlIHRoZSBmaXJzdCBpbnRlcnZhbCBmaXJlcyApXG5cblxuICAgICAgIV90aGlzLnByb3BzLmRlbGF5ZWRDYWxsICYmIF90aGlzLmNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgZGVib3VuY2UgY2FsbGVyc1xuICAgICAgICBmb3IgKHZhciBkZWJvdW5jZUV2ZW50IGluIF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjay5oYXNPd25Qcm9wZXJ0eShkZWJvdW5jZUV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGRlYm91bmNlSW5mbyA9IF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VJbmZvLmdldExhc3RUaW1lb3V0KCkpO1xuICAgICAgICAgICAgZGVib3VuY2VJbmZvLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGRlYm91bmNlRXZlbnQsIGRlYm91bmNlSW5mby5mbik7XG4gICAgICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IG51bGw7XG5cbiAgICAgIGlmIChfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoX3RoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLm5vZGU7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciBjb250YWlubWVudFJlY3Q7IC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIHJlbmRlcmVkIHRvIG51bGwsIGRvbnQgdXBkYXRlIHZpc2liaWxpdHlcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJlY3QgPSBub3JtYWxpemVSZWN0KF90aGlzLnJvdW5kUmVjdERvd24oZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIHZhciBjb250YWlubWVudERPTVJlY3QgPSBfdGhpcy5wcm9wcy5jb250YWlubWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiBjb250YWlubWVudERPTVJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IGNvbnRhaW5tZW50RE9NUmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbTogY29udGFpbm1lbnRET01SZWN0LmJvdHRvbSxcbiAgICAgICAgICByaWdodDogY29udGFpbm1lbnRET01SZWN0LnJpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9IC8vIENoZWNrIGlmIHZpc2liaWxpdHkgaXMgd2FudGVkIHZpYSBvZmZzZXQ/XG5cblxuICAgICAgdmFyIG9mZnNldCA9IF90aGlzLnByb3BzLm9mZnNldCB8fCB7fTtcbiAgICAgIHZhciBoYXNWYWxpZE9mZnNldCA9IF90eXBlb2Yob2Zmc2V0KSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgaWYgKGhhc1ZhbGlkT2Zmc2V0KSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC50b3AgKz0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QubGVmdCArPSBvZmZzZXQubGVmdCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QuYm90dG9tIC09IG9mZnNldC5ib3R0b20gfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnJpZ2h0IC09IG9mZnNldC5yaWdodCB8fCAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaWJpbGl0eVJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgPj0gY29udGFpbm1lbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20sXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodFxuICAgICAgfTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3bmovcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvcHVsbC8xMTRcblxuICAgICAgdmFyIGhhc1NpemUgPSByZWN0LmhlaWdodCA+IDAgJiYgcmVjdC53aWR0aCA+IDA7XG4gICAgICB2YXIgaXNWaXNpYmxlID0gaGFzU2l6ZSAmJiB2aXNpYmlsaXR5UmVjdC50b3AgJiYgdmlzaWJpbGl0eVJlY3QubGVmdCAmJiB2aXNpYmlsaXR5UmVjdC5ib3R0b20gJiYgdmlzaWJpbGl0eVJlY3QucmlnaHQ7IC8vIGNoZWNrIGZvciBwYXJ0aWFsIHZpc2liaWxpdHlcblxuICAgICAgaWYgKGhhc1NpemUgJiYgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxWaXNpYmxlID0gcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+PSBjb250YWlubWVudFJlY3QudG9wICYmIHJlY3QubGVmdCA8PSBjb250YWlubWVudFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+PSBjb250YWlubWVudFJlY3QubGVmdDsgLy8gYWNjb3VudCBmb3IgcGFydGlhbCB2aXNpYmlsaXR5IG9uIGEgc2luZ2xlIGVkZ2VcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcGFydGlhbFZpc2libGUgPSB2aXNpYmlsaXR5UmVjdFtfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eV07XG4gICAgICAgIH0gLy8gaWYgd2UgaGF2ZSBtaW5pbXVtIHRvcCB2aXNpYmlsaXR5IHNldCBieSBwcm9wcywgbGV0cyBjaGVjaywgaWYgaXQgbWVldHMgdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAvLyBzbyBpZiBmb3IgaW5zdGFuY2UgZWxlbWVudCBpcyBhdCBsZWFzdCAyMDBweCBpbiB2aWV3cG9ydCwgdGhlbiBzaG93IGl0LlxuXG5cbiAgICAgICAgaXNWaXNpYmxlID0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgPyBwYXJ0aWFsVmlzaWJsZSAmJiByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tIC0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgOiBwYXJ0aWFsVmlzaWJsZTtcbiAgICAgIH0gLy8gRGVwcmVjYXRlZCBvcHRpb25zIGZvciBjYWxjdWxhdGluZyBvZmZzZXQuXG5cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQuZGlyZWN0aW9uID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvZmZzZXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW25vdGljZV0gb2Zmc2V0LmRpcmVjdGlvbiBhbmQgb2Zmc2V0LnZhbHVlIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBUaGV5IHN0aWxsIHdvcmsgZm9yIG5vdywgYnV0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBuZXcgc3ludGF4OiB7ICVzOiAlZCB9XCIsIG9mZnNldC5kaXJlY3Rpb24sIG9mZnNldC52YWx1ZSk7XG4gICAgICAgIGlzVmlzaWJsZSA9IF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKShvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlOyAvLyBub3RpZnkgdGhlIHBhcmVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSBfdGhpcy5wcm9wcy5vbkNoYW5nZShpc1Zpc2libGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTZW5zb3IsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIC8vIHJlLXJlZ2lzdGVyIG5vZGUgaW4gY29tcG9uZW50RGlkVXBkYXRlIGlmIGNoaWxkcmVuIGRpZmZzIFsjMTAzXVxuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgIXByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3VuZFJlY3REb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kUmVjdERvd24ocmVjdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLmZsb29yKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5mbG9vcihyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5mbG9vcihyZWN0LnJpZ2h0KVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdGhpcy5zdGF0ZS52aXNpYmlsaXR5UmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7XG59KHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcGFydGlhbFZpc2liaWxpdHk6IGZhbHNlLFxuICBtaW5Ub3BWYWx1ZTogMCxcbiAgc2Nyb2xsQ2hlY2s6IGZhbHNlLFxuICBzY3JvbGxEZWxheTogMjUwLFxuICBzY3JvbGxUaHJvdHRsZTogLTEsXG4gIHJlc2l6ZUNoZWNrOiBmYWxzZSxcbiAgcmVzaXplRGVsYXk6IDI1MCxcbiAgcmVzaXplVGhyb3R0bGU6IC0xLFxuICBpbnRlcnZhbENoZWNrOiB0cnVlLFxuICBpbnRlcnZhbERlbGF5OiAxMDAsXG4gIGRlbGF5ZWRDYWxsOiBmYWxzZSxcbiAgb2Zmc2V0OiB7fSxcbiAgY29udGFpbm1lbnQ6IG51bGwsXG4gIGNoaWxkcmVuOiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcInByb3BUeXBlc1wiLCB7XG4gIG9uQ2hhbmdlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmMsXG4gIGFjdGl2ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pXSksXG4gIGRlbGF5ZWRDYWxsOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIG9mZnNldDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIHRvcDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgbGVmdDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgYm90dG9tOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICByaWdodDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSksIC8vIGRlcHJlY2F0ZWQgb2Zmc2V0IHByb3BlcnR5XG4gIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIGRpcmVjdGlvbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAgIHZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KV0pLFxuICBzY3JvbGxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBzY3JvbGxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHNjcm9sbFRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcmVzaXplRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGludGVydmFsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGNvbnRhaW5tZW50OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5pbnN0YW5jZU9mKHdpbmRvdy5FbGVtZW50KSA6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYW55LFxuICBjaGlsZHJlbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZWxlbWVudCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jXSksXG4gIG1pblRvcFZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxufSk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29sb3JDb250cm9sIGZyb20gJy4uL2NvbW1vbi9Db2xvckNvbnRyb2wnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudFxufSA9IHdwLmVsZW1lbnRcbmNvbnN0IHtcbiAgTWVkaWFVcGxvYWRcbn0gPSB3cC5ibG9ja0VkaXRvclxuXG5jb25zdCB7XG4gIEJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIFJhbmdlQ29udHJvbCxcbiAgRm9jYWxQb2ludFBpY2tlcixcbiAgRGFzaGljb24sXG4gIFRvZ2dsZUNvbnRyb2wsXG4gIFBsYWNlaG9sZGVyXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBCYWNrZ3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2NvbG9yJyxcbiAgICAgIGltYWdlVXJsOiB2YWx1ZS5pbWFnZVVybCB8fCAnJyxcbiAgICAgIGZvY3VzUG9pbnQ6IHZhbHVlLmZvY3VzUG9pbnQgfHwgeyB4OiAwLjUsIHk6IDAuNSB9LFxuICAgICAgY29sb3JWYWx1ZTogdmFsdWUuY29sb3JWYWx1ZSB8fCAnI2ZmZmZmZicsXG4gICAgICBvdmVybGF5Q29sb3JWYWx1ZTogdmFsdWUub3ZlcmxheUNvbG9yVmFsdWUgfHwgJycsXG4gICAgICBvdmVybGF5T3BhY2l0eTogdmFsdWUub3ZlcmxheU9wYWNpdHkgfHwgNTAsXG4gICAgICBmaXhlZDogdmFsdWUuZml4ZWQgfHwgZmFsc2UsXG4gICAgICB1c2VGZWF0dXJlZDogdmFsdWUudXNlRmVhdHVyZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRCdXR0b25zKCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydjb2xvcicsICdpbWFnZSddXG4gICAgY29uc3QgbGFiZWxzID0ge1xuICAgICAgY29sb3I6IF9fKCdDb2xvcicsICduZXZlJyksXG4gICAgICBpbWFnZTogX18oJ0ltYWdlJywgJ25ldmUnKVxuICAgIH1cbiAgICBjb25zdCBidXR0b25zID0gW11cbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcbiAgICAgIGJ1dHRvbnMucHVzaChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNQcmltYXJ5PXtzZWxmLnN0YXRlLnR5cGUgPT09IHR5cGV9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9e3NlbGYuc3RhdGUudHlwZSAhPT0gdHlwZX1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi51cGRhdGVTZXR0aW5nKHsgdHlwZTogdHlwZSB9KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxzW3R5cGVdfVxuICAgICAgICA8L0J1dHRvbj4pXG4gICAgfSlcblxuICAgIHJldHVybiBidXR0b25zXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC0tdG9wLXRvb2xiYXInPlxuICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9J25ldmUtYmFja2dyb3VuZC10eXBlLWNvbnRyb2wnPlxuICAgICAgICAgICAge3RoaXMuZ2V0QnV0dG9ucygpfVxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbC0tYm9keSc+XG4gICAgICAgICAge3RoaXMuc3RhdGUudHlwZSA9PT0gJ2NvbG9yJyAmJlxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjb2xvclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoeyBjb2xvclZhbHVlOiBjb2xvclZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXt0aGlzLnN0YXRlLmNvbG9yVmFsdWV9XG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCAnQ29sb3InLCAnbmV2ZScgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmV2ZS1jb2xvci1wcmV2aWV3J1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jb2xvclZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50Pn1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlID09PSAnaW1hZ2UnICYmXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdVc2UgRmVhdHVyZWQgSW1hZ2UnLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudXNlRmVhdHVyZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh1c2VGZWF0dXJlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgdXNlRmVhdHVyZWQ6IHVzZUZlYXR1cmVkIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmltYWdlVXJsID9cbiAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgIGljb249J2Zvcm1hdC1pbWFnZSdcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgID8gX18oJ0ZhbGxiYWNrIEltYWdlJywgJ25ldmUnKVxuICAgICAgICAgICAgICAgICAgICA6IF9fKCdJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHtfXygnU2VsZWN0IGZyb20gdGhlIE1lZGlhIExpYnJhcnkgb3IgdXBsb2FkIGEgbmV3IGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnbmV2ZScpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoaW1hZ2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgaW1hZ2VVcmw6IGltYWdlRGF0YS51cmwgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc1NlY29uZGFyeSBvbkNsaWNrPXtvcGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnQWRkIEltYWdlJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9QbGFjZWhvbGRlcj4gOlxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZW1vdmUtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgIGlzRGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlVXJsOiAnJyB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGFzaGljb24gaWNvbj0nbm8nIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZUZlYXR1cmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfXygnUmVtb3ZlIEZhbGxiYWNrIEltYWdlJywgJ25ldmUnKVxuICAgICAgICAgICAgICAgICAgICAgIDogX18oJ1JlbW92ZSBJbWFnZScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxGb2NhbFBvaW50UGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9jdXNQb2ludH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHBhcnNlRmxvYXQodmFsLngpLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBwYXJzZUZsb2F0KHZhbC55KS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2V0dGluZyh7IGZvY3VzUG9pbnQ6IG5ld1BvaW50IH0pXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRml4ZWQgQmFja2dyb3VuZCcsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5maXhlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpeGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNldHRpbmcoeyBmaXhlZDogZml4ZWQgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JDb250cm9sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17dGhpcy5zdGF0ZS5vdmVybGF5Q29sb3JWYWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG92ZXJsYXlDb2xvclZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNldHRpbmcoXG4gICAgICAgICAgICAgICAgICAgIHsgb3ZlcmxheUNvbG9yVmFsdWU6IG92ZXJsYXlDb2xvclZhbHVlIH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgQ29sb3InLCAnbmV2ZScpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSduZXZlLWNvbG9yLXByZXZpZXcnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB0aGlzLnN0YXRlLm92ZXJsYXlDb2xvclZhbHVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgT3BhY2l0eScsICduZXZlJyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUub3ZlcmxheU9wYWNpdHl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdmVybGF5T3BhY2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKHsgb3ZlcmxheU9wYWNpdHk6IG92ZXJsYXlPcGFjaXR5IH0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBtaW49JzAnXG4gICAgICAgICAgICAgICAgbWF4PScxMDAnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZyYWdtZW50Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy51cGRhdGVTZXR0aW5nKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTZXR0aW5nKG5ld1ZhbHVlcykge1xuICAgIHRoaXMuc2V0U3RhdGUobmV3VmFsdWVzKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLm5ld1ZhbHVlc1xuICAgIH0pXG4gIH1cbn1cblxuQmFja2dyb3VuZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IEJhY2tncm91bmRDb21wb25lbnQgZnJvbSAnLi9CYWNrZ3JvdW5kQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxCYWNrZ3JvdW5kQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBnbG9iYWwgd3AsIGxvZGFzaCAqL1xuLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJhZGlvSWNvbnMgZnJvbSAnLi4vY29tbW9uL1JhZGlvSWNvbnMuanMnXG5pbXBvcnQgU2l6aW5nQ29udHJvbCBmcm9tICcuLi9jb21tb24vU2l6aW5nLmpzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgUGFuZWwsIFBhbmVsQm9keSwgUGFuZWxSb3cgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgbWFwVmFsdWVzIH0gPSBsb2Rhc2hcblxuY2xhc3MgQnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCBkZWZhdWx0c0Zyb21Db250cm9sID0ge1xuICAgICAgYm9yZGVyUmFkaXVzOiB7XG4gICAgICAgIHRvcDogMyxcbiAgICAgICAgcmlnaHQ6IDMsXG4gICAgICAgIGJvdHRvbTogMyxcbiAgICAgICAgbGVmdDogM1xuICAgICAgfSxcbiAgICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICAgIHRvcDogMSxcbiAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgIGJvdHRvbTogMSxcbiAgICAgICAgbGVmdDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgdGhlIG9sZCwgbm9uLWFycmF5IHZlcnNpb24gb2YgcmFkaXVzLCB3ZSBjb252ZXJ0LlxuICAgIGlmICh0eXBlb2YgdmFsdWUuYm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyUmFkaXVzID0ge1xuICAgICAgICB0b3A6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgcmlnaHQ6IHZhbHVlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgIGxlZnQ6IHZhbHVlLmJvcmRlclJhZGl1c1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBvbGQsIG5vbi1hcnJheSB2ZXJzaW9uIG9mIHJhZGl1cywgd2UgY29udmVydC5cbiAgICBpZiAodHlwZW9mIHZhbHVlLmJvcmRlcldpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuYm9yZGVyV2lkdGggPSB7XG4gICAgICAgIHRvcDogdmFsdWUuYm9yZGVyV2lkdGgsXG4gICAgICAgIHJpZ2h0OiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgYm90dG9tOiB2YWx1ZS5ib3JkZXJXaWR0aCxcbiAgICAgICAgbGVmdDogdmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRWYWxzID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFZhbHMgPyB7XG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5kZWZhdWx0VmFscyxcbiAgICAgIC4uLmRlZmF1bHRzRnJvbUNvbnRyb2xcbiAgICB9IDogZGVmYXVsdHNGcm9tQ29udHJvbFxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR5cGU6IHZhbHVlLnR5cGUgfHwgJ2ZpbGxlZCcsXG4gICAgICBiYWNrZ3JvdW5kOiB2YWx1ZS5iYWNrZ3JvdW5kIHx8ICcnLFxuICAgICAgYmFja2dyb3VuZEhvdmVyOiB2YWx1ZS5iYWNrZ3JvdW5kSG92ZXIgfHwgJycsXG4gICAgICB0ZXh0OiB2YWx1ZS50ZXh0IHx8ICcnLFxuICAgICAgdGV4dEhvdmVyOiB2YWx1ZS50ZXh0SG92ZXIgfHwgJycsXG4gICAgICBib3JkZXJSYWRpdXM6IHZhbHVlLmJvcmRlclJhZGl1cyB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyxcbiAgICAgIGJvcmRlcldpZHRoOiB2YWx1ZS5ib3JkZXJXaWR0aCB8fCB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoLFxuICAgICAgcmFkaXVzTGlua2VkOiBmYWxzZSxcbiAgICAgIHdpZHRoTGlua2VkOiBmYWxzZVxuICAgIH1cbiAgICAvLyBTZXQgbGlua2luZy5cbiAgICB0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMpXG4gICAgdGhpcy5zdGF0ZS53aWR0aExpbmtlZCA9IHRoaXMuaXNMaW5rZWQodGhpcy5zdGF0ZS5ib3JkZXJXaWR0aClcblxuICAgIC8vIHRoaXMudXBkYXRlVmFsdWVzKHRoaXMuc3RhdGUpXG5cbiAgICB0aGlzLnJlbmRlckJvcmRlckNvbnRyb2xzID0gdGhpcy5yZW5kZXJCb3JkZXJDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJUeXBlQ29udHJvbHMgPSB0aGlzLnJlbmRlclR5cGVDb250cm9scy5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZW5kZXJDb2xvcnMgPSB0aGlzLnJlbmRlckNvbG9ycy5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXJCb3JkZXJDb250cm9scygpIHtcbiAgICBjb25zdCByYWRpdXNPcHRpb25zID0gW1xuICAgICAge1xuICAgICAgICB0eXBlOiAndG9wJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnRvcFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3JpZ2h0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyUmFkaXVzLmJvdHRvbVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2xlZnQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMubGVmdFxuICAgICAgfVxuICAgIF1cbiAgICBjb25zdCB3aWR0aE9wdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICd0b3AnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5ib3JkZXJXaWR0aC50b3BcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyaWdodCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYm9yZGVyV2lkdGguYm90dG9tXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGVmdCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJvcmRlcldpZHRoLmxlZnRcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57X18oJ0JvcmRlciBSYWRpdXMnLCAnbmV2ZScpfTwvc3Bhbj5cbiAgICAgICAgPFNpemluZ0NvbnRyb2xcbiAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICBvcHRpb25zPXtyYWRpdXNPcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1c31cbiAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUucmFkaXVzTGlua2VkfVxuICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzTGlua2VkOiAhdGhpcy5zdGF0ZS5yYWRpdXNMaW5rZWQgfSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJhZGl1c0xpbmtlZCkge1xuICAgICAgICAgICAgICBuZXdWYWwgPSBtYXBWYWx1ZXModGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld1ZhbCA9IHsgLi4udGhpcy5zdGF0ZS5ib3JkZXJSYWRpdXMsIFtvcHRpb25UeXBlXTogbnVtZXJpY1ZhbHVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJSYWRpdXM6IG5ld1ZhbCB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXNldD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvcmRlclJhZGl1czogdGhpcy5kZWZhdWx0VmFscy5ib3JkZXJSYWRpdXMgfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgYm9yZGVyUmFkaXVzOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlclJhZGl1cyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnR5cGUgPT09ICdvdXRsaW5lJyAmJlxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPntfXygnQm9yZGVyIFdpZHRoJywgJ25ldmUnKX08L3NwYW4+XG4gICAgICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgICBvcHRpb25zPXt3aWR0aE9wdGlvbnN9XG4gICAgICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRofVxuICAgICAgICAgICAgICBsaW5rZWQ9e3RoaXMuc3RhdGUud2lkdGhMaW5rZWR9XG4gICAgICAgICAgICAgIG9uTGlua2VkPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgd2lkdGhMaW5rZWQ6ICF0aGlzLnN0YXRlLndpZHRoTGlua2VkIH0pfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS53aWR0aExpbmtlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0gbWFwVmFsdWVzKHRoaXMuc3RhdGUuYm9yZGVyV2lkdGgsICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsID0geyAuLi50aGlzLnN0YXRlLmJvcmRlcldpZHRoLCBbb3B0aW9uVHlwZV06IG51bWVyaWNWYWx1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBib3JkZXJXaWR0aDogbmV3VmFsIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uUmVzZXQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYm9yZGVyV2lkdGg6IHRoaXMuZGVmYXVsdFZhbHMuYm9yZGVyV2lkdGggfSlcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGJvcmRlcldpZHRoOiB0aGlzLmRlZmF1bHRWYWxzLmJvcmRlcldpZHRoIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+fVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBvbGRCb3JkZXIoKSB7XG4gIH1cblxuICByZW5kZXJDb2xvcnMoKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBub3JtYWw6IHtcbiAgICAgICAgbGFiZWw6IF9fKCdOb3JtYWwnLCAnbmV2ZScpLFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLnR5cGUgPT09ICdmaWxsJyA/IF9fKCdUZXh0JywgJ25ldmUnKSA6IF9fKCdUZXh0IGFuZCBCb3JkZXInLCAnbmV2ZScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBsYWJlbDogX18oJ0hvdmVyJywgJ25ldmUnKSxcbiAgICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSG92ZXI6IF9fKCdCYWNrZ3JvdW5kJywgJ25ldmUnKSxcbiAgICAgICAgICB0ZXh0SG92ZXI6IHRoaXMuc3RhdGUudHlwZSA9PT0gJ2ZpbGwnID8gX18oJ1RleHQnLCAnbmV2ZScpIDogX18oJ1RleHQgYW5kIEJvcmRlcicsICduZXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBpZiAodGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5ub19ob3Zlcikge1xuICAgICAgZGVsZXRlIHNldHRpbmdzLmhvdmVyXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWw+XG4gICAgICAgIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzZXR0aW5ncykubWFwKCh0eXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubm9faG92ZXIgPyAnJyA6IHNldHRpbmdzW3R5cGVdLmxhYmVsfVxuICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXt0eXBlID09PSAnbm9ybWFsJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNldHRpbmdzW3R5cGVdLmNvbnRyb2xzKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChjb250cm9sU2x1ZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3NldHRpbmdzW3R5cGVdLmNvbnRyb2xzW2NvbnRyb2xTbHVnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3NlbGYuc3RhdGVbY29udHJvbFNsdWddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgW2NvbnRyb2xTbHVnXTogdmFsdWUgfHwgJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udHJvbFNsdWddOiB2YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1BhbmVsPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlclR5cGVDb250cm9scygpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgbGFiZWw6ICdmaWxsJyxcbiAgICAgICAgdG9vbHRpcDogX18oJ0ZpbGxlZCcsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuXG4gICAgICB9LFxuICAgICAgb3V0bGluZToge1xuICAgICAgICBsYWJlbDogJ291dGxpbmUnLFxuICAgICAgICB0b29sdGlwOiBfXygnT3V0bGluZScsICduZXZlJyksXG4gICAgICAgIGljb246ICd0ZXh0J1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmFkaW9JY29uc1xuICAgICAgICBvcHRpb25zPXt0eXBlc30gb25DaGFuZ2U9eyh0eXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHR5cGUgfSwgdGhpcy51cGRhdGVWYWx1ZXMoeyB0eXBlIH0pKVxuICAgICAgICB9fSB2YWx1ZT17dGhpcy5zdGF0ZS50eXBlfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWJ1dHRvbi1hcHBlYXJhbmNlLWNvbnRyb2wnPlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e1xuICAgICAgICAgICAgX18oJ1N0eWxlJywgJ25ldmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3RoaXMucmVuZGVyVHlwZUNvbnRyb2xzKCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyQm9yZGVyQ29udHJvbHMoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xvcnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywgKGUpID0+IHtcbiAgICAgIGlmICghZS5kZXRhaWwpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSByZXR1cm4gZmFsc2VcbiAgICAgIC8vIE1pZ3JhdGUgYm9yZGVyLXJhZGl1cyBhbmQgYm9yZGVyLXdpZHRoXG4gICAgICBjb25zdCByID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyUmFkaXVzXG4gICAgICBpZiAoIHIgJiYgKCB0eXBlb2YgciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHIgPT09ICdudW1iZXInICkgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlclJhZGl1cyA9IHtcbiAgICAgICAgICB0b3A6IHIsXG4gICAgICAgICAgYm90dG9tOiByLFxuICAgICAgICAgIHJpZ2h0OiByLFxuICAgICAgICAgIGxlZnQ6IHJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3ID0gZS5kZXRhaWwudmFsdWUuYm9yZGVyV2lkdGhcbiAgICAgIGlmICggdyAmJiAodHlwZW9mIHcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB3ID09PSAnbnVtYmVyJykgKSB7XG4gICAgICAgIGUuZGV0YWlsLnZhbHVlLmJvcmRlcldpZHRoID0ge1xuICAgICAgICAgIHRvcDogdyxcbiAgICAgICAgICBib3R0b206IHcsXG4gICAgICAgICAgcmlnaHQ6IHcsXG4gICAgICAgICAgbGVmdDogd1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCB7IC4uLnRoaXMuc3RhdGUsIC4uLmUuZGV0YWlsLnZhbHVlIH0gKVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlcyh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCh7XG4gICAgICAuLi50aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKSxcbiAgICAgIC4uLnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGlzTGlua2VkKG9iamVjdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhvYmplY3QpLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IE9iamVjdC52YWx1ZXMob2JqZWN0KVswXSlcbiAgfVxufVxuXG5CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IEJ1dHRvbkFwcGVhcmFuY2VDb21wb25lbnQgZnJvbSAnLi9CdXR0b25BcHBlYXJhbmNlQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkFwcGVhcmFuY2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8QnV0dG9uQXBwZWFyYW5jZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbG9yQ29udHJvbCBmcm9tICcuLi9jb21tb24vQ29sb3JDb250cm9sLmpzJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBDb2xvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHBvcG92ZXJPcGVuOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmRlZmF1bHQgfHwgJydcblxuICAgIHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCggdGhpcyApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbnRyb2wgfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoICFlLmRldGFpbCApIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCBlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCApIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoIGUuZGV0YWlsLnZhbHVlIClcbiAgICB9IClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtY29sb3ItY29udHJvbCc+XG4gICAgICAgIDxDb2xvckNvbnRyb2xcbiAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgICBzZWxlY3RlZENvbG9yPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IHZhbHVlOiB2YWx1ZSB9IClcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoIHZhbHVlIClcbiAgfVxufVxuXG5Db2xvckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvckNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBDb2xvckNvbXBvbmVudCBmcm9tICcuL0NvbG9yQ29tcG9uZW50J1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IENvbG9yQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPENvbG9yQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IENvbG9yUGlja2VyLCBCdXR0b24sIERyb3Bkb3duIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY2xhc3MgQ29sb3JDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBzZWxlY3RlZENvbG9yIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHRvZ2dsZSA9IG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXIgbmV2ZS1jb2xvci1jb21wb25lbnQnPlxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWwgJiZcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cblxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICByZW5kZXJUb2dnbGU9eyh7IGlzT3Blbiwgb25Ub2dnbGUgfSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlID0gb25Ub2dnbGVcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoW1xuICAgICAgICAgICAgICAgICAgJ2lzLXNlY29uZGFyeSBpcy1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgeyAnaXMtZW1wdHknOiAhc2VsZWN0ZWRDb2xvciB9XSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRDb2xvciB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVuZGVyQ29udGVudD17KCkgPT4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyAvPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17c2VsZWN0ZWRDb2xvcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUuaGV4KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZUFscGhhXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzZWxlY3RlZENvbG9yICYmXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbGVhcidcbiAgICAgICAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7X18oJ0NsZWFyJywgJ25ldmUnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQ29sb3JDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JDb250cm9sXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTaXppbmdDb250cm9sIGZyb20gJy4uL2NvbW1vbi9TaXppbmcuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlc3BvbnNpdmVDb250cm9sIGZyb20gJy4uL2NvbW1vbi9SZXNwb25zaXZlLmpzJ1xuXG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcblxuY2xhc3MgTnVtYmVyQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCB1bml0cywgdmFsdWUsIGNsYXNzTmFtZSwgaGFzUmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgJyBuZXZlLW51bWJlci1jb250cm9sLXdyYXAnfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgICAgICB7aGFzUmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudERldmljZSkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZWREZXZpY2UoY3VycmVudERldmljZSl9XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgICB7dW5pdHMgJiYgPGRpdiBjbGFzc05hbWU9J25ldmUtdW5pdHMnPnt0aGlzLmdldEJ1dHRvbnMoKX08L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgIG5vTGlua2luZ1xuICAgICAgICAgIG5vUmFuZ2VcbiAgICAgICAgICBvcHRpb25zPXtbeyB2YWx1ZTogdmFsdWUgfV19XG4gICAgICAgICAgb25DaGFuZ2U9eyh0eXBlLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIG1heD17dGhpcy5wcm9wcy5tYXggfHwgMTAwfVxuICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW4gfHwgMH1cbiAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXAgfHwgMX1cbiAgICAgICAgICBkZWZhdWx0cz17dGhpcy5wcm9wcy5kZWZhdWx0fVxuICAgICAgICAgIG9uUmVzZXQ9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNldCgpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7IHVuaXRzIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCF1bml0cykgcmV0dXJuICcnXG4gICAgaWYgKHVuaXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nYWxvbmUgYWN0aXZlJ1xuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICA+e3VuaXRzWzBdfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRzLm1hcCgodW5pdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgIGFjdGl2ZTogc2VsZi5wcm9wcy5hY3RpdmVVbml0ID09PSB1bml0XG4gICAgICB9KVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNlbGYucHJvcHMub25Vbml0Q2hhbmdlKHVuaXQpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAge3VuaXR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuTnVtYmVyQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25SZXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdW5pdHM6IFByb3BUeXBlcy5hcnJheSB8fCBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBtYXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1pbjogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgaGFzUmVzcG9uc2l2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2hhbmdlZERldmljZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJDb250cm9sXG4iLCIvKiBnbG9iYWwgd3AgKi9cbi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5cbmNvbnN0IFJhZGlvSWNvbnMgPSAoeyBvcHRpb25zLCBvbkNoYW5nZSwgdmFsdWUsIHNob3dMYWJlbHMgfSkgPT4ge1xuICBjb25zdCBnZXRCdXR0b25zID0gKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAob3B0aW9uc1t0eXBlXS5pY29uID09PSAndGV4dCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFt7IGFjdGl2ZTogdmFsdWUgPT09IHR5cGUgfSwgJ2lzLXRleHQnXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHR5cGUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb25zW3R5cGVdLnRvb2x0aXB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e29wdGlvbnNbdHlwZV0udG9vbHRpcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZTogdmFsdWUgPT09IHR5cGUgfSl9XG4gICAgICAgICAgICBpY29uPXtvcHRpb25zW3R5cGVdLmljb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHR5cGUpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dMYWJlbHMgJiYgPGxhYmVsPntvcHRpb25zW3R5cGVdLnRvb2x0aXB9PC9sYWJlbD59XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1yYWRpby1pY29ucyc+XG4gICAgICB7Z2V0QnV0dG9ucygpfVxuICAgIDwvZGl2PlxuICApXG59XG5cblJhZGlvSWNvbnMucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzaG93TGFiZWxzOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ljb25zXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3Qge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50XG59ID0gd3AuZWxlbWVudFxuY29uc3Qge1xuICBCdXR0b24sXG4gIERhc2hpY29uLFxuICBUb29sdGlwLFxuICBCdXR0b25Hcm91cFxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgUmVzcG9uc2l2ZUNvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWV3OiAnZGVza3RvcCdcbiAgICB9XG4gICAgdGhpcy5saW5rUmVzcG9uc2l2ZUJ1dHRvbnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGRldmljZXMgPSB7XG4gICAgICBkZXNrdG9wOiB7XG4gICAgICAgIHRvb2x0aXA6IF9fKCdEZXNrdG9wJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ2Rlc2t0b3AnXG4gICAgICB9LFxuICAgICAgdGFibGV0OiB7XG4gICAgICAgIHRvb2x0aXA6IF9fKCdUYWJsZXQnLCAnbmV2ZScpLFxuICAgICAgICBpY29uOiAndGFibGV0J1xuICAgICAgfSxcbiAgICAgIG1vYmlsZToge1xuICAgICAgICB0b29sdGlwOiBfXygnTW9iaWxlJywgJ25ldmUnKSxcbiAgICAgICAgaWNvbjogJ3NtYXJ0cGhvbmUnXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgZXhjbHVkZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBkZXZpY2VNYXAgPSB7fVxuICAgIE9iamVjdC5rZXlzKGRldmljZXMpLm1hcChrZXkgPT4ge1xuICAgICAgaWYgKGV4Y2x1ZGVkKSB7XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRldmljZU1hcFtrZXldID0gZGV2aWNlc1trZXldXG4gICAgfSlcblxuICAgIGNvbnN0IHsgY29udHJvbExhYmVsLCBoaWRlUmVzcG9uc2l2ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtcmVzcG9uc2l2ZS1jb250cm9sLWJhcic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29udHJvbExhYmVsICYmXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb250cm9sTGFiZWx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyFoaWRlUmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb2F0aW5nLWNvbnRyb2xzJz5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkZXZpY2VNYXApLm1hcCgoZGV2aWNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyB0b29sdGlwLCBpY29uIH0gPSBkZXZpY2VNYXBbZGV2aWNlXVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGV4dD17dG9vbHRpcH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsoZGV2aWNlID09PSB2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FjdGl2ZS1kZXZpY2UgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKSArIGRldmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGRldmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJlc3BvbnNpdmUtY29udHJvbHMtY29udGVudCc+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxuXG4gIGNoYW5nZVZpZXdUeXBlKGRldmljZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2aWV3OiBkZXZpY2UgfSlcbiAgICB3cC5jdXN0b21pemUucHJldmlld2VkRGV2aWNlKGRldmljZSlcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRldmljZSlcbiAgfVxuXG4gIGxpbmtSZXNwb25zaXZlQnV0dG9ucygpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25ldmVDaGFuZ2VkUmVwc29uc2l2ZVByZXZpZXcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5jaGFuZ2VWaWV3VHlwZShlLmRldGFpbClcbiAgICB9KVxuICB9XG59XG5cblJlc3BvbnNpdmVDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjb250cm9sTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGVSZXNwb25zaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGV4Y2x1ZGVkOiBQcm9wVHlwZXMuYXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZUNvbnRyb2xcbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBTaW5nbGVTaXppbmdJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbnYtc2l6aW5nLWl0ZW0nPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnR5cGUgPyB0aGlzLnByb3BzLnR5cGUgKyAnLWlucHV0JyA6ICcnfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59XG4gICAgICAgICAgbWF4PXt0aGlzLnByb3BzLm1heH1cbiAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XG4gICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgZSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKCB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSAnJyA/IDAgOiBlLnRhcmdldC52YWx1ZSApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5wcm9wcy50eXBlICYmIChcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj17dGhpcy5wcm9wcy50eXBlICsgJy1pbnB1dCd9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMudHlwZX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblNpbmdsZVNpemluZ0lucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoIFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSApLFxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNpemluZ0lucHV0XG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBTaW5nbGVTaXppbmdJbnB1dCBmcm9tICcuLi9jb21tb24vU2luZ2xlU2l6aW5nSW5wdXQuanMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIEJ1dHRvbixcbiAgVG9vbHRpcFxufSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIFNpemluZ0NvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFzU2V0VmFsdWVzID0gdGhpcy5oYXNTZXRWYWx1ZXMuYmluZCh0aGlzKVxuICAgIHRoaXMubGlua0J1dHRvbiA9IHRoaXMubGlua0J1dHRvbi5iaW5kKHRoaXMpXG4gIH1cblxuICBsaW5rQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm5vTGlua2luZykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGtleT0ndG9vbHRpcC1saW5rJ1xuICAgICAgICB0ZXh0PXt0aGlzLnByb3BzLmxpbmtlZCA/IF9fKCdVbmxpbmsgVmFsdWVzJywgJ25ldmUnKSA6IF9fKCdMaW5rIFZhbHVlcycsICduZXZlJyl9XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9J2xpbmstaWNvbidcbiAgICAgICAgICBpY29uPXt0aGlzLnByb3BzLmxpbmtlZCA/ICdhZG1pbi1saW5rcycgOiAnZWRpdG9yLXVubGluayd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkxpbmtlZCgpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIFt7IGFjdGl2ZTogdGhpcy5wcm9wcy5saW5rZWQgfSwgJ2xpbmsnXSl9XG4gICAgICAgIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICAnbmV2ZS1yZXNwb25zaXZlLXNpemluZycsXG4gICAgICB7ICdzaW5nbGUtaW5wdXQnOiB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID09PSAxIH1cbiAgICBdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwQ2xhc3Nlc30+XG4gICAgICAgIHt0aGlzLmxpbmtCdXR0b24oKX1cbiAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKGksIG4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpbmdsZVNpemluZ0lucHV0XG4gICAgICAgICAgICAgIGtleT17bn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0eXBlLCB2YWx1ZSkgPT4gdGhpcy5wcm9wcy5vbkNoYW5nZSh0eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2kudmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aS50eXBlID8gaS50eXBlICsgJy1pbnB1dCcgOiAnJ31cbiAgICAgICAgICAgICAgdHlwZT17aS50eXBlfVxuICAgICAgICAgICAgICBtYXg9e3RoaXMucHJvcHMubWF4fVxuICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufVxuICAgICAgICAgICAgICBzdGVwPXt0aGlzLnByb3BzLnN0ZXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIHt0aGlzLmhhc1NldFZhbHVlcygpICYmXG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGtleT0ndG9vbHRpcC1yZXNldCdcbiAgICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gX18oJ1Jlc2V0IGFsbCBWYWx1ZXMnLCAnbmV2ZScpIDogX18oJ1Jlc2V0IFZhbHVlJywgJ25ldmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PSdyZXNldC1pY29uJ1xuICAgICAgICAgICAgICBpY29uPSdpbWFnZS1yb3RhdGUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVzZXQnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25SZXNldCgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgaGFzU2V0VmFsdWVzKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdHMsIG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGVmYXVsdHMpICE9IHBhcnNlRmxvYXQob3B0aW9uc1swXS52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgb3B0aW9uID0+IG9wdGlvbi52YWx1ZSAhPSBkZWZhdWx0c1tvcHRpb24udHlwZV1cbiAgICApLmxlbmd0aCA+IDBcbiAgfVxufVxuXG5TaXppbmdDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIG9uTGlua2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxpbmtlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uUmVzZXQ6IFByb3BUeXBlcy5mdW5jLFxuICBub0xpbmtpbmc6IFByb3BUeXBlcy5ib29sLFxuICBtaW46IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heDogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RlcDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXppbmdDb250cm9sXG4iLCJleHBvcnQgY29uc3QgbWF5YmVQYXJzZUpzb24gPSAoaW5wdXQpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuICB0cnkge1xuICAgIEpTT04ucGFyc2UoaW5wdXQpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGlucHV0XG4gIH1cbiAgcmV0dXJuIEpTT04ucGFyc2UoaW5wdXQpXG59XG5cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKGl0ZW0pID0+IHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSlcbn1cblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICovXG5leHBvcnQgY29uc3QgbWVyZ2VEZWVwID0gKHRhcmdldCwgLi4uc291cmNlcykgPT4ge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0XG4gIC8vIFVzZSBmaXJzdCBvYmplY3Qgd2Ugd2FudCB0byBtZXJnZSB3aXRoIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgc3RhcnQuXG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKVxuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBrZXkgaW4gb25lIHNvdXJjZS5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgLy8gTWVyZ2UgaW5zaWRlIGtleXMgaWYgd2UgaGF2ZSBhbiBvYmplY3QuXG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVhc3NpZ24gd2l0aCBzb3VyY2UuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBSdW4gcmVjdXJzaXZlbHkgZm9yIG11bHRpcGxlLlxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcylcbn1cblxuZXhwb3J0IGNvbnN0IGdldEludFZhbEFzUmVzcG9uc2l2ZSA9ICh2YWx1ZSkgPT4ge1xuICB2YWx1ZSA9IG1heWJlUGFyc2VKc29uKHZhbHVlKVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2Rlc2t0b3AnKSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ3RhYmxldCcpICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnbW9iaWxlJykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0ge1xuICAgICAgZGVza3RvcDogdmFsdWUsXG4gICAgICB0YWJsZXQ6IHZhbHVlLFxuICAgICAgbW9iaWxlOiB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmNvbnN0IFNWRyA9IHtcbiAgbG9nb09ubHk6IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTcuMjknXG5cdGhlaWdodD0nMTcuMjknIHZpZXdCb3g9JzAgMCAxNy4yOSAxNy4yOSdcbiAgPlxuXHQ8cGF0aFxuXHQgIGQ9J00xNC43NiwxNC43NkE4LjYxLDguNjEsMCwwLDEsMTIsMTYuNmE4LjQyLDguNDIsMCwwLDEtMy4zNi42OSw4LjY2LDguNjYsMCwwLDEtMi43Mi0uNDQsOC4xNCw4LjE0LDAsMCwxLTIuMzgtMS4yMyw5Ljc0LDkuNzQsMCwwLDEtMS44Ny0xLjg3QTguMjcsOC4yNywwLDAsMSwuNDQsMTEuMzcsOC42Nyw4LjY3LDAsMCwxLDAsOC42NCw4LjU0LDguNTQsMCwwLDEsLjY4LDUuMjksOC43Miw4LjcyLDAsMCwxLDIuNTIsMi41Myw4LjcxLDguNzEsMCwwLDEsNS4yOS42OSw4LjUsOC41LDAsMCwxLDEyLC42OWE4Ljc4LDguNzgsMCwwLDEsMi43NiwxLjg0QTguNzIsOC43MiwwLDAsMSwxNi42LDUuMjlhOC41LDguNSwwLDAsMSwwLDYuNzFBOC43Miw4LjcyLDAsMCwxLDE0Ljc2LDE0Ljc2Wk0xLjU4LDUuNTRBNy42Niw3LjY2LDAsMCwwLDEsOC42NCw3LjY4LDcuNjgsMCwwLDAsMi4xNCwxMi44YTcuNTEsNy41MSwwLDAsMCwzLjEzLDIuODRaTTguMjksOC4yNSw3LjIsNS4zbC0uNzktLjA3Yy0uMTQsMC0uMjQtLjEtLjI4LS4yOGEuODQuODQsMCwwLDEsMC0uNTJjLjA3LS4xOC4xNy0uMjYuMzEtLjI2bC4zMywwLC44NCwwLC44NCwwYy41NCwwLDEuMjMsMCwyLjA2LS4xMWEuMzEuMzEsMCwwLDEsLjMuMjUuOTIuOTIsMCwwLDEsMCwuNTJjMCwuMTgtLjE0LjI4LS4yOC4yOWwtLjA3LDBhLjg1Ljg1LDAsMCwxLS4yNS4wNywyLjMsMi4zLDAsMCwxLS4zOSwwbDIuNjIsNy4yMy4zLS43OWExOSwxOSwwLDAsMCwuNjEtMS44OCw2LjczLDYuNzMsMCwwLDAsLjMtMS42NSw0LjMzLDQuMzMsMCwwLDAtLjQ3LTIuMTMsMi4zOCwyLjM4LDAsMCwxLS4xOS0uM2wtLjItLjMycy0uMDctLjE0LS4xNC0uMjdBMS44MiwxLjgyLDAsMCwxLDEyLjU2LDVhMi44MywyLjgzLDAsMCwxLS4wNy0uMjgsMS4yMiwxLjIyLDAsMCwxLDAtLjMyLDEuMywxLjMsMCwwLDEsLjQ2LTEuMDgsMS4yMywxLjIzLDAsMCwxLDEtLjI5LDcuNjMsNy42MywwLDAsMC0yLjQtMS40OUE3LjQ5LDcuNDksMCwwLDAsOC42NCwxYTcuNjEsNy42MSwwLDAsMC0zLjcuOTNBNy40Nyw3LjQ3LDAsMCwwLDIuMTksNC40M2guNWMuNTMsMCwxLjIxLDAsMi4wNS0uMDlhLjI5LjI5LDAsMCwxLC4zLjIyLjc1Ljc1LDAsMCwxLDAsLjQ3LjM0LjM0LDAsMCwxLS4yOC4yN2wtMSwuMDcsMyw3LjkxWk03LjY0LDEzLjJjLS40OSwxLjQyLS44MSwyLjM2LTEsMi44NGE2LjcsNi43LDAsMCwwLDIsLjI5QTcuMjgsNy4yOCwwLDAsMCwxMSwxNS45NGwtMi4yMy02QzguNSwxMC42OCw4LjEyLDExLjc3LDcuNjQsMTMuMlptNC44OSwyLjE3YTcuNCw3LjQsMCwwLDAsMi43Ny0yLjgxLDcuNzEsNy43MSwwLDAsMCwxLTMuOTJBNy41MSw3LjUxLDAsMCwwLDE1LjQyLDUsOSw5LDAsMCwxLDE1LjUsNi4xYzAsLjM2LDAsLjY1LDAsLjg4YTQuMTcsNC4xNywwLDAsMS0uMTMuNzNjLS4wNi4yNy0uMTEuNDQtLjE0LjUzbC0uMTUuNFExNC42Niw5LjY2LDEyLjUzLDE1LjM3Widcblx0Lz5cbiAgPC9zdmc+LFxuICBsb2dvVG9wVGl0bGU6IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQuMDQnXG5cdGhlaWdodD0nMTcuMzMnIHZpZXdCb3g9JzAgMCAxNC4wNCAxNy4zMydcbiAgPlxuXHQ8cGF0aFxuXHQgIGQ9J00xMC4xMyw3LjUxYTQuMzksNC4zOSwwLDAsMS0xLjQuOTNBNC4zMiw0LjMyLDAsMCwxLDcsOC44YTQuNjQsNC42NCwwLDAsMS0xLjM5LS4yMkE0LjIyLDQuMjIsMCwwLDEsNC40Myw4YTQuNSw0LjUsMCwwLDEtLjk1LTEsMy43NywzLjc3LDAsMCwxLS42My0xLjIxQTQuMzcsNC4zNywwLDAsMSwzLDIuNyw0LjU4LDQuNTgsMCwwLDEsMy45LDEuMjksNC41OSw0LjU5LDAsMCwxLDUuMy4zNSw0LjMyLDQuMzIsMCwwLDEsNywwLDQuMjIsNC4yMiwwLDAsMSw4LjcyLjM1YTQuMzksNC4zOSwwLDAsMSwxLjQuOTMsNC4yNiw0LjI2LDAsMCwxLC45NCwxLjQsNC4yLDQuMiwwLDAsMSwuMzYsMS43MSw0LjQ4LDQuNDgsMCwwLDEtMS4yOSwzLjEyWk0zLjQyLDIuODNhMy44NCwzLjg0LDAsMCwwLS4zMSwxLjU4LDMuOTIsMy45MiwwLDAsMCwuNiwyLjExQTMuODMsMy44MywwLDAsMCw1LjMxLDhDNSw3LjI0LDQuNDEsNS41MiwzLjQyLDIuODNaTTYuODQsNC4yLDYuMjgsMi43bC0uNCwwYy0uMDcsMC0uMTItLjA1LS4xNS0uMTRhLjUuNSwwLDAsMSwwLS4yN2MwLS4wOC4wOC0uMTMuMTUtLjEyaC4xN2wuNDMsMCwuNDMsMGMuMjcsMCwuNjIsMCwxLS4wNi4wNywwLC4xMiwwLC4xNi4xM2EuNDYuNDYsMCwwLDEsMCwuMjZBLjE3LjE3LDAsMCwxLDgsMi42NmwwLDAtLjEyLDAtLjIsMEw5LDYuNDEsOS4xMyw2Yy4xLS4yNy4yMS0uNTkuMzEtMWEzLjM4LDMuMzgsMCwwLDAsLjE1LS44NCwyLjE2LDIuMTYsMCwwLDAtLjI0LTEuMDhMOS4yNSwzbC0uMS0uMTdhMS4xMSwxLjExLDAsMCwxLS4wNy0uMTNBLjg1Ljg1LDAsMCwxLDksMi41MmExLjU1LDEuNTUsMCwwLDEsMC0uMTUuODguODgsMCwwLDEsMC0uMTYuNjkuNjksMCwwLDEsLjIzLS41NS42Ni42NiwwLDAsMSwuNDktLjE1QTMuNzUsMy43NSwwLDAsMCw4LjQ1Ljc1LDQuMDgsNC4wOCwwLDAsMCw3LC40OSwzLjgxLDMuODEsMCwwLDAsNS4xMywxYTMuNzgsMy43OCwwLDAsMC0xLjQsMS4yOUg0Yy4yNywwLC42MiwwLDEuMDUsMCwuMDcsMCwuMTIsMCwuMTUuMTFhLjMzLjMzLDAsMCwxLDAsLjI0LjE1LjE1LDAsMCwxLS4xNC4xM2wtLjUxLDAsMS41MSw0Wk02LjUxLDYuNzEsNiw4LjE2YTMuMzMsMy4zMywwLDAsMCwxLC4xNSwzLjc2LDMuNzYsMCwwLDAsMS4xOS0uMkw3LjA4LDVDNyw1LjQzLDYuNzYsNiw2LjUxLDYuNzFaTTksNy44MmEzLjg3LDMuODcsMCwwLDAsMS40MS0xLjQzLDQsNCwwLDAsMCwuNTItMiwzLjg1LDMuODUsMCwwLDAtLjQ3LTEuODcsMy44NiwzLjg2LDAsMCwxLDAsLjU4YzAsLjE4LDAsLjMzLDAsLjQ0YTMsMywwLDAsMS0uMDYuMzhjMCwuMTMtLjA2LjIyLS4wOC4yNnMwLC4xMi0uMDcuMjFDMTAuMTUsNC43Myw5LjcyLDUuODgsOSw3LjgyWidcblx0Lz5cblx0PHBhdGggZD0nTTMuMDYsMTAuNTR2LjdIMnYyLjk1SDEuMTRWMTEuMjRIMHYtLjdaJy8+XG5cdDxwYXRoIGQ9J00zLjU5LDEwLjU0aC44MnYzLjY1SDMuNTlaJy8+XG5cdDxwYXRoIGQ9J004LDEwLjU0di43SDYuODZ2Mi45NUg2VjExLjI0SDQuOTR2LS43WicvPlxuXHQ8cGF0aCBkPSdNMTAuOTMsMTMuNDh2LjcxSDguNDlWMTAuNTRoLjgydjIuOTRaJy8+XG5cdDxwYXRoIGQ9J00xMS40NSwxNC4xOVYxMC41NGgyLjQ3di42OUgxMi4yN3YuNzFoMS40NnYuNjhIMTIuMjd2Ljg4SDE0di42OVonLz5cblx0PHBhdGggZD0nTTIsMTQuOTN2LjQ2SDEuMjR2MS44OUguNzFWMTUuMzlIMHYtLjQ2WicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00zLjU4LDE3LjI4YzAtLjA4LS4wNS0uMTYtLjA4LS4yNWwtLjA5LS4yNkgyLjQ5TDIuNCwxN2MwLC4wOS0uMDYuMTctLjA4LjI1SDEuNzdsLjI1LS43TDIuMjUsMTZsLjIzLS41NGMuMDctLjE3LjE1LS4zMy4yMy0uNWguNWwuMjMuNS4yMi41NGMuMDguMTkuMTYuNC4yNC42MWwuMjUuN1pNMywxNS40N2wtLjA2LjE0LS4wNy4yLS4xLjI1LS4xMS4yOWguNjdjMC0uMS0uMDctLjE5LS4xLS4yOXMtLjA3LS4xOC0uMS0uMjVTMywxNS42NiwzLDE1LjZaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J001LjUxLDE1LjM0YS42Mi42MiwwLDAsMC0uNTMuMjEuODUuODUsMCwwLDAtLjE3LjU2LDEuNDYsMS40NiwwLDAsMCwwLC4zMS43Ny43NywwLDAsMCwuMTIuMjQuNjUuNjUsMCwwLDAsLjIxLjE2LjYxLjYxLDAsMCwwLC4yOC4wNmguMjZWMTZoLjUzdjEuMTdhMS42OCwxLjY4LDAsMCwxLS4zLjA3LDIuNTQsMi41NCwwLDAsMS0uNTIsMEExLjQyLDEuNDIsMCwwLDEsNSwxNy4yNSwxLjE4LDEuMTgsMCwwLDEsNC41OCwxN2ExLDEsMCwwLDEtLjIzLS4zOCwxLjQ2LDEuNDYsMCwwLDEtLjA5LS41MiwxLjM4LDEuMzgsMCwwLDEsLjA5LS41MiwxLjIxLDEuMjEsMCwwLDEsLjI2LS4zOUExLjE4LDEuMTgsMCwwLDEsNSwxNWExLjM5LDEuMzksMCwwLDEsLjQ2LS4wOGwuMywwTDYsMTVsLjE2LjA2LjA5LjA1LS4xNS40Mi0uMjUtLjFBMS41NSwxLjU1LDAsMCwwLDUuNTEsMTUuMzRaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNOC4zMSwxNi44M3YuNDVINi43NFYxNC45M2guNTN2MS45WicvPlxuXHQ8cGF0aCBkPSdNOC42NSwxNC45M2guNTN2Mi4zNUg4LjY1WicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00xMS4zLDE3LjI4Yy0uMTUtLjI3LS4zMi0uNTMtLjQ5LS43OWE4LjY5LDguNjksMCwwLDAtLjU3LS43NXYxLjU0SDkuNzJWMTQuOTNoLjQzbC4yNS4yOC4yOC4zNS4yOC4zOGMuMDkuMTMuMTcuMjYuMjYuMzhWMTQuOTNoLjUydjIuMzVaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTIuMjgsMTcuMjhWMTQuOTNoMS41OXYuNDVIMTIuODF2LjQ2aC45NHYuNDNoLS45NHYuNTdIMTR2LjQ0WicvPlxuICA8L3N2Zz4sXG4gIGxvZ29UaXRsZTogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MS44Mydcblx0aGVpZ2h0PScxNy4yOScgdmlld0JveD0nMCAwIDUxLjgzIDE3LjI5J1xuICA+XG5cdDxwYXRoXG5cdCAgZD0nTTE0Ljc2LDE0Ljc2QTguNjEsOC42MSwwLDAsMSwxMiwxNi42YTguNDIsOC40MiwwLDAsMS0zLjM2LjY5LDguNjYsOC42NiwwLDAsMS0yLjcyLS40NCw4LjE0LDguMTQsMCwwLDEtMi4zOC0xLjIzLDkuNzQsOS43NCwwLDAsMS0xLjg3LTEuODdBOC4yNyw4LjI3LDAsMCwxLC40NCwxMS4zNyw4LjY3LDguNjcsMCwwLDEsMCw4LjY0LDguNTQsOC41NCwwLDAsMSwuNjgsNS4yOSw4LjcyLDguNzIsMCwwLDEsMi41MiwyLjUzLDguODgsOC44OCwwLDAsMSw1LjI5LjY5LDguNSw4LjUsMCwwLDEsMTIsLjY5YTksOSwwLDAsMSwyLjc2LDEuODRBOC43Miw4LjcyLDAsMCwxLDE2LjYsNS4yOWE4LjUsOC41LDAsMCwxLDAsNi43MUE4LjcyLDguNzIsMCwwLDEsMTQuNzYsMTQuNzZaTTEuNTgsNS41NEE3LjY2LDcuNjYsMCwwLDAsMSw4LjY0LDcuNjgsNy42OCwwLDAsMCwyLjE0LDEyLjhhNy41MSw3LjUxLDAsMCwwLDMuMTMsMi44NFpNOC4yOSw4LjI1LDcuMiw1LjNsLS43OS0uMDdjLS4xNCwwLS4yNC0uMS0uMjgtLjI4YS44NC44NCwwLDAsMSwwLS41MmMuMDctLjE4LjE3LS4yNi4zMS0uMjZsLjMzLDAsLjg0LDAsLjg0LDBjLjU0LDAsMS4yMywwLDIuMDYtLjExYS4zMS4zMSwwLDAsMSwuMy4yNS45Mi45MiwwLDAsMSwwLC41MmMwLC4xOC0uMTQuMjgtLjI4LjI5bC0uMDcsMGEuODUuODUsMCwwLDEtLjI1LjA3LDIuMywyLjMsMCwwLDEtLjM5LDBsMi42Miw3LjIzLjMtLjc5YTE5LDE5LDAsMCwwLC42MS0xLjg4LDYuNzMsNi43MywwLDAsMCwuMy0xLjY1LDQuMzYsNC4zNiwwLDAsMC0uNDctMi4xMywyLjM4LDIuMzgsMCwwLDEtLjE5LS4zbC0uMi0uMzJzLS4wNy0uMTQtLjE0LS4yN0ExLjgyLDEuODIsMCwwLDEsMTIuNTYsNWEyLjgzLDIuODMsMCwwLDEtLjA3LS4yOCwxLjIyLDEuMjIsMCwwLDEsMC0uMzIsMS4zLDEuMywwLDAsMSwuNDYtMS4wOCwxLjIzLDEuMjMsMCwwLDEsMS0uMjlBNy43NCw3Ljc0LDAsMCwwLDguNjQsMSw3LjY1LDcuNjUsMCwwLDAsMi4xOSw0LjQzaC41Yy41MywwLDEuMjEsMCwyLjA1LS4wOWEuMjkuMjksMCwwLDEsLjMuMjIuNzUuNzUsMCwwLDEsMCwuNDcuMzQuMzQsMCwwLDEtLjI4LjI3bC0xLC4wNywzLDcuOTFaTTcuNjQsMTMuMmMtLjQ5LDEuNDItLjgxLDIuMzYtMSwyLjg0YTYuNyw2LjcsMCwwLDAsMiwuMjlBNy4yOCw3LjI4LDAsMCwwLDExLDE1Ljk0bC0yLjIzLTZDOC41LDEwLjY4LDguMTIsMTEuNzcsNy42NCwxMy4yWm00Ljg5LDIuMTdhNy40LDcuNCwwLDAsMCwyLjc3LTIuODEsNy43MSw3LjcxLDAsMCwwLDEtMy45MkE3LjUxLDcuNTEsMCwwLDAsMTUuNDIsNSw5LDksMCwwLDEsMTUuNSw2LjFjMCwuMzYsMCwuNjUsMCwuODhhNC4xNyw0LjE3LDAsMCwxLS4xMy43M2MtLjA2LjI3LS4xMS40NC0uMTQuNTNsLS4xNS40UTE0LjY2LDkuNjYsMTIuNTMsMTUuMzdaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMjYuODIuOTF2MS42aC0yLjVWOS4yM0gyMi40NFYyLjUxaC0yLjVWLjkxWicvPlxuXHQ8cGF0aCBkPSdNMjgsLjkxSDI5LjlWOS4yM0gyOFonLz5cblx0PHBhdGggZD0nTTM4LC45MXYxLjZoLTIuNVY5LjIzSDMzLjZWMi41MUgzMS4xVi45MVonLz5cblx0PHBhdGggZD0nTTQ0Ljc0LDcuNjJWOS4yM0gzOS4xOFYuOTFoMS44OFY3LjYyWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J000NS45NCw5LjIzVi45MWg1LjYyVjIuNDhINDcuODFWNC4xMmgzLjMzVjUuNjVINDcuODF2Mmg0VjkuMjNaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMjQuMjgsMTAuOTN2MUgyMi42N3Y0LjMzSDIxLjQ2VjEySDE5Ljg1di0xWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yOCwxNi4yOGMtLjA2LS4xOS0uMTItLjM4LS4xOS0uNThsLS4yMS0uNThIMjUuNTJjLS4wNi4xOS0uMTMuMzktLjIuNTlzLS4xMy4zOC0uMTkuNTdIMjMuODhjLjItLjU4LjM5LTEuMTEuNTctMS42cy4zNi0uOTUuNTMtMS4zOC4zNS0uODUuNTItMS4yMy4zNC0uNzcuNTItMS4xNGgxLjE0Yy4xNy4zNy4zNS43NS41MiwxLjE0cy4zNC43OS41MiwxLjIzLjM0Ljg5LjUzLDEuMzguMzcsMSwuNTcsMS42Wm0tMS40NS00LjE0YzAsLjA4LS4wNi4xOC0uMTEuMzJhNC40NSw0LjQ1LDAsMCwwLS4xOC40NmMtLjA3LjE3LS4xNC4zNy0uMjIuNThzLS4xNy40My0uMjUuNjZoMS41M3EtLjEyLS4zNS0uMjQtLjY2Yy0uMDgtLjIyLS4xNS0uNDEtLjIyLS41OGwtLjE4LS40N0EyLjY1LDIuNjUsMCwwLDAsMjYuNTYsMTIuMTRaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J00zMi40LDExLjg1YTEuNDYsMS40NiwwLDAsMC0xLjIxLjQ3LDIsMiwwLDAsMC0uMzgsMS4yOCwyLjI2LDIuMjYsMCwwLDAsLjEuNzEsMS40OSwxLjQ5LDAsMCwwLC4yNy41NSwxLjE5LDEuMTksMCwwLDAsLjQ3LjM2LDEuNDUsMS40NSwwLDAsMCwuNjUuMTNoLjM0YTEsMSwwLDAsMCwuMjUsMFYxMy40NWgxLjJWMTYuMWEzLjYxLDMuNjEsMCwwLDEtLjY5LjE4LDYuNDEsNi40MSwwLDAsMS0xLjE4LjEsMy4xMSwzLjExLDAsMCwxLTEuMDktLjE5LDIuMTcsMi4xNywwLDAsMS0uODQtLjU0LDIuNTYsMi41NiwwLDAsMS0uNTQtLjg3LDMuNiwzLjYsMCwwLDEtLjE5LTEuMTgsMy4xMiwzLjEyLDAsMCwxLC4yMS0xLjE5LDIuNTcsMi41NywwLDAsMSwuNTctLjg4QTIuMzMsMi4zMywwLDAsMSwzMS4yLDExYTIuNzUsMi43NSwwLDAsMSwxLS4xOSw0LjYxLDQuNjEsMCwwLDEsLjY4LDBsLjUzLjEyYTIuMzcsMi4zNywwLDAsMSwuMzYuMTNsLjIxLjExLS4zNSwxQTIuNzEsMi43MSwwLDAsMCwzMy4xLDEyLDIuNTIsMi41MiwwLDAsMCwzMi40LDExLjg1Widcblx0Lz5cblx0PHBhdGggZD0nTTM4Ljc5LDE1LjI0djFIMzUuMjFWMTAuOTNoMS4yMXY0LjMxWicvPlxuXHQ8cGF0aCBkPSdNMzkuNTYsMTAuOTNoMS4ydjUuMzVoLTEuMlonLz5cblx0PHBhdGhcblx0ICBkPSdNNDUuNTksMTYuMjhjLS4zNS0uNjItLjcyLTEuMjItMS4xMi0xLjgyYTE5LjcsMTkuNywwLDAsMC0xLjI4LTEuNjl2My41MUg0MlYxMC45M2gxYTcuMzksNy4zOSwwLDAsMSwuNTYuNjJjLjIxLjI1LjQyLjUxLjYzLjc5cy40My41Ny42NC44OGwuNTkuODZWMTAuOTNoMS4ydjUuMzVaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNNDcuODMsMTYuMjhWMTAuOTNoMy42MnYxSDQ5VjEzaDIuMTR2MUg0OXYxLjI5aDIuNTl2MVonLz5cbiAgPC9zdmc+LFxuICB0aXRsZUxvZ286IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNTEuNjUnXG5cdGhlaWdodD0nMTcuMjknIHZpZXdCb3g9JzAgMCA1MS42NSAxNy4yOSdcbiAgPlxuXHQ8cGF0aFxuXHQgIGQ9J000OS4xMiwxNC43NmE4LjY5LDguNjksMCwwLDEtMi43NiwxLjg1LDguNTcsOC41NywwLDAsMS0zLjM1LjY4LDguNjcsOC42NywwLDAsMS0yLjczLS40NCw4LjI3LDguMjcsMCwwLDEtMi4zOC0xLjIzQTkuNzQsOS43NCwwLDAsMSwzNiwxMy43NWE4LjI3LDguMjcsMCwwLDEtMS4yMy0yLjM4LDguNjcsOC42NywwLDAsMS0uNDQtMi43Myw4LjY5LDguNjksMCwwLDEsMi41My02LjExQTguNzIsOC43MiwwLDAsMSwzOS42NS42OWE4LjUsOC41LDAsMCwxLDYuNzEsMCw4LjgzLDguODMsMCwwLDEsMi43NiwxLjg0QTguNzIsOC43MiwwLDAsMSw1MSw1LjI5LDguNSw4LjUsMCwwLDEsNTEsMTIsOC43Miw4LjcyLDAsMCwxLDQ5LjEyLDE0Ljc2Wk0zNS45NCw1LjU0YTcuNjYsNy42NiwwLDAsMC0uNjIsMy4xQTcuNjgsNy42OCwwLDAsMCwzNi41LDEyLjhhNy41MSw3LjUxLDAsMCwwLDMuMTMsMi44NFptNi43MSwyLjcxTDQxLjU2LDUuM2wtLjc5LS4wN2MtLjE0LDAtLjIzLS4xLS4yOC0uMjhhLjc3Ljc3LDAsMCwxLDAtLjUyYy4wNi0uMTguMTYtLjI2LjMtLjI2bC4zNCwwLC44MywwLC44NCwwYy41NCwwLDEuMjMsMCwyLjA2LS4xMWEuMzEuMzEsMCwwLDEsLjMuMjUuODQuODQsMCwwLDEsMCwuNTJjMCwuMTgtLjE0LjI4LS4yOC4yOWwtLjA3LDBhLjc3Ljc3LDAsMCwxLS4yNS4wNywyLjMsMi4zLDAsMCwxLS4zOSwwbDIuNjIsNy4yMy4zLS43OWExOSwxOSwwLDAsMCwuNjEtMS44OCw2LjczLDYuNzMsMCwwLDAsLjMtMS42NSw0LjM2LDQuMzYsMCwwLDAtLjQ3LTIuMTMsMi4zOCwyLjM4LDAsMCwxLS4xOS0uM2wtLjE5LS4zMnMtLjA4LS4xNC0uMTUtLjI3QTEuODIsMS44MiwwLDAsMSw0Ni45Miw1YTIuODMsMi44MywwLDAsMS0uMDctLjI4LDEuMjIsMS4yMiwwLDAsMSwwLS4zMiwxLjMsMS4zLDAsMCwxLC40Ni0xLjA4LDEuMjQsMS4yNCwwLDAsMSwxLS4yOSw3Ljg2LDcuODYsMCwwLDAtMi40LTEuNDlBNy43Myw3LjczLDAsMCwwLDQzLDFhNy42NSw3LjY1LDAsMCwwLTYuNDYsMy40N2guNWMuNTMsMCwxLjIxLDAsMi4wNS0uMDlhLjI5LjI5LDAsMCwxLC4zLjIyLjc1Ljc1LDAsMCwxLDAsLjQ3LjM0LjM0LDAsMCwxLS4yOC4yN2wtMSwuMDcsMyw3LjkxWk00MiwxMy4yYy0uNDksMS40Mi0uODEsMi4zNy0xLDIuODRhNi43Miw2LjcyLDAsMCwwLDIsLjI5LDcuMjcsNy4yNywwLDAsMCwyLjM0LS4zOWwtMi4yMy02Wm00Ljg5LDIuMTdhNy4zMyw3LjMzLDAsMCwwLDIuNzctMi44MSw3LjcxLDcuNzEsMCwwLDAsMS0zLjkyQTcuNTEsNy41MSwwLDAsMCw0OS43OCw1YTksOSwwLDAsMSwuMDgsMS4xM2MwLC4zNiwwLC42NSwwLC44OGE0LjE3LDQuMTcsMCwwLDEtLjEzLjczYy0uMDYuMjctLjExLjQ0LS4xNC41M2wtLjE1LjRRNDksOS42Niw0Ni44OSwxNS4zN1onXG5cdC8+XG5cdDxwYXRoIGQ9J003LC45MXYxLjZINC40N1Y5LjIzSDIuNTlWMi41MUguMDlWLjkxWicvPlxuXHQ8cGF0aCBkPSdNOC4xNy45MWgxLjg4VjkuMjNIOC4xN1onLz5cblx0PHBhdGggZD0nTTE4LjEzLjkxdjEuNmgtMi41VjkuMjNIMTMuNzVWMi41MWgtMi41Vi45MVonLz5cblx0PHBhdGggZD0nTTI0Ljg5LDcuNjJWOS4yM0gxOS4zM1YuOTFoMS44OFY3LjYyWicvPlxuXHQ8cGF0aCBkPSdNMjYuMDksOS4yM1YuOTFoNS42MlYyLjQ4SDI4VjQuMTJoMy4zM1Y1LjY1SDI4djJoNFY5LjIzWicvPlxuXHQ8cGF0aCBkPSdNNC40MywxMC45M3YxSDIuODJ2NC4zM0gxLjYxVjEySDB2LTFaJy8+XG5cdDxwYXRoXG5cdCAgZD0nTTguMTYsMTYuMjhDOC4xLDE2LjA5LDgsMTUuOSw4LDE1LjdsLS4yMS0uNThINS42N2MtLjA2LjE5LS4xMy4zOS0uMi41OXMtLjEzLjM4LS4xOS41N0g0Yy4yLS41OC4zOS0xLjExLjU3LTEuNnMuMzYtLjk1LjUzLTEuMzhsLjUxLTEuMjNjLjE3LS4zOS4zNS0uNzcuNTMtMS4xNEg3LjMxYy4xNy4zNy4zNS43NS41MiwxLjE0cy4zNC43OS41MSwxLjIzLjM1Ljg5LjU0LDEuMzguMzcsMSwuNTcsMS42Wk02LjcxLDEyLjE0YTIuMzIsMi4zMiwwLDAsMS0uMTIuMzJjMCwuMTMtLjExLjI4LS4xNy40NnMtLjE0LjM3LS4yMi41OC0uMTcuNDMtLjI1LjY2SDcuNDhsLS4yNC0uNjZjLS4wOC0uMjItLjE1LS40MS0uMjItLjU4bC0uMTgtLjQ3QTIuNjUsMi42NSwwLDAsMCw2LjcxLDEyLjE0Widcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMTIuNTUsMTEuODVhMS40NiwxLjQ2LDAsMCwwLTEuMjEuNDdBMiwyLDAsMCwwLDExLDEzLjZhMi4yNiwyLjI2LDAsMCwwLC4xLjcxLDEuNDksMS40OSwwLDAsMCwuMjcuNTUsMS4xOSwxLjE5LDAsMCwwLC40Ny4zNiwxLjQ1LDEuNDUsMCwwLDAsLjY1LjEzaC4zNGExLDEsMCwwLDAsLjI1LDBWMTMuNDVoMS4yVjE2LjFhMy42MSwzLjYxLDAsMCwxLS42OS4xOCw2LjQxLDYuNDEsMCwwLDEtMS4xOC4xLDMuMTEsMy4xMSwwLDAsMS0xLjA5LS4xOSwyLjE3LDIuMTcsMCwwLDEtLjg0LS41NCwyLjU2LDIuNTYsMCwwLDEtLjU0LS44NywzLjYsMy42LDAsMCwxLS4xOS0xLjE4LDMuMTIsMy4xMiwwLDAsMSwuMjEtMS4xOSwyLjU3LDIuNTcsMCwwLDEsLjU3LS44OCwyLjM3LDIuMzcsMCwwLDEsLjg1LS41NCwyLjg0LDIuODQsMCwwLDEsMS4wNS0uMTksNC42MSw0LjYxLDAsMCwxLC42OCwwbC41My4xMmEyLjM3LDIuMzcsMCwwLDEsLjM2LjEzbC4yMS4xMS0uMzUsMWEzLDMsMCwwLDAtLjU3LS4yM0EyLjU3LDIuNTcsMCwwLDAsMTIuNTUsMTEuODVaJ1xuXHQvPlxuXHQ8cGF0aCBkPSdNMTguOTQsMTUuMjR2MUgxNS4zNlYxMC45M2gxLjIxdjQuMzFaJy8+XG5cdDxwYXRoIGQ9J00xOS43MSwxMC45M2gxLjJ2NS4zNWgtMS4yWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yNS43NCwxNi4yOGMtLjM1LS42Mi0uNzItMS4yMi0xLjEyLTEuODJhMTkuNywxOS43LDAsMCwwLTEuMjgtMS42OXYzLjUxSDIyLjE1VjEwLjkzaDFhNy4zOSw3LjM5LDAsMCwxLC41Ni42MmMuMjEuMjUuNDIuNTEuNjMuNzlzLjQzLjU3LjY0Ljg4bC41OS44NlYxMC45M2gxLjJ2NS4zNVonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTI4LDE2LjI4VjEwLjkzSDMxLjZ2MUgyOS4xOVYxM2gyLjE0djFIMjkuMTl2MS4yOWgyLjU5djFaJ1xuXHQvPlxuICA8L3N2Zz4sXG4gIHB4OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz5cblx0PGc+XG5cdCAgPHBhdGhcblx0XHRkPSdNMTAsMTAuNzFhNS4zMiw1LjMyLDAsMCwxLS4yLDEuNDksMy41MywzLjUzLDAsMCwxLS41OSwxLjE2LDIuNjcsMi42NywwLDAsMS0xLC43NSwzLjEsMy4xLDAsMCwxLTEuMzMuMjcsMy44OSwzLjg5LDAsMCwxLS43OC0uMDgsNCw0LDAsMCwxLS42OS0uMjN2Mi42NmgtMlY3LjQybC42Mi0uMTUuNzMtLjEzLjc4LS4wOS43NiwwYTQuNDgsNC40OCwwLDAsMSwxLjU2LjI2QTMuMjYsMy4yNiwwLDAsMSw5LDhhMywzLDAsMCwxLC43MiwxLjE2QTQuMzksNC4zOSwwLDAsMSwxMCwxMC43MVptLTIsLjA2YTIuNDIsMi40MiwwLDAsMC0uNDItMS40OSwxLjQ0LDEuNDQsMCwwLDAtMS4yMy0uNTZsLS41LDAtLjM3LDBWMTIuNGExLjUxLDEuNTEsMCwwLDAsLjQ5LjIsMi4xLDIuMSwwLDAsMCwuNjEuMDlDNy40OCwxMi42OSw4LDEyLjA1LDgsMTAuNzdaJ1xuXHQgIC8+XG5cdCAgPHBhdGhcblx0XHRkPSdNMTQuMSw5LjE2bDEuNDEtMmgyLjA2bC0yLjQ1LDMuNDNhMjIuNDgsMjIuNDgsMCwwLDEsMS41LDEuOTNjLjQzLjY0Ljc4LDEuMiwxLjA1LDEuN0gxNS41MmwtLjI3LS41LS4zNi0uNjNhMy44OCwzLjg4LDAsMCwwLS40Mi0uNTZMMTQsMTIuMTNsLS40Mi4zOWEyLjQzLDIuNDMsMCwwLDAtLjM5LjUyYy0uMTMuMjEtLjI1LjQyLS4zNy42M3MtLjIzLjM5LS4zMy41N2gtMmMuMTEtLjIyLjI2LS40OC40NC0uNzlzLjM5LS42Mi42MS0uOTUuNDYtLjY0LjcxLS45NS41MS0uNTkuNzYtLjg2Yy0uNDQtLjYzLS44Ni0xLjIzLTEuMjctMS44bC0xLjItMS43MWgyLjE2Widcblx0ICAvPlxuXHQ8L2c+XG4gIDwvc3ZnPixcbiAgZW06IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPlxuXHQ8Zz5cblx0ICA8cGF0aFxuXHRcdGQ9J00uOSwxMC43MmE0LjE4LDQuMTgsMCwwLDEsLjI5LTEuNjRBMy42MiwzLjYyLDAsMCwxLDEuOTQsNy45LDMuMjYsMy4yNiwwLDAsMSwzLDcuMTksMy4zNSwzLjM1LDAsMCwxLDQuMjgsN2EzLjE0LDMuMTQsMCwwLDEsMi4zOC45MiwzLjc4LDMuNzgsMCwwLDEsLjg3LDIuN2MwLC4xMiwwLC4yNSwwLC4zOXMwLC4yNiwwLC4zN0gzYTEuMzcsMS4zNywwLDAsMCwuNTgsMSwyLjM0LDIuMzQsMCwwLDAsMS4zNy4zNkE2LjM4LDYuMzgsMCwwLDAsNiwxMi41N2E0LjM4LDQuMzgsMCwwLDAsLjg3LS4yNWwuMjYsMS42MmEyLjM5LDIuMzksMCwwLDEtLjQzLjE3Yy0uMTguMDUtLjM3LjEtLjU5LjE0bC0uNzEuMWMtLjI1LDAtLjUsMC0uNzUsMEE0LjYxLDQuNjEsMCwwLDEsMywxNC4xMWEzLjI1LDMuMjUsMCwwLDEtMS4xNy0uNzgsMywzLDAsMCwxLS42OC0xLjE2QTQuNTQsNC41NCwwLDAsMSwuOSwxMC43MlpNNS42LDEwYTIuMSwyLjEsMCwwLDAtLjA5LS41QTEuMzcsMS4zNywwLDAsMCw1LjI4LDlhMS4yMiwxLjIyLDAsMCwwLS4zOS0uMzEsMS4yOCwxLjI4LDAsMCwwLS41OC0uMTIsMS40MywxLjQzLDAsMCwwLS41OC4xMSwxLjEzLDEuMTMsMCwwLDAtLjQuMzEsMS4zMSwxLjMxLDAsMCwwLS4yNS40M0EzLjE4LDMuMTgsMCwwLDAsMywxMFonXG5cdCAgLz5cblx0ICA8cGF0aFxuXHRcdGQ9J00xMywxMC40NWEyLjg0LDIuODQsMCwwLDAtLjI1LTEuMzcsMSwxLDAsMCwwLS44Ni0uNGwtLjM5LDAtLjM4LjA1VjE0LjJoLTJWNy4zOGMuMTcsMCwuMzctLjA5LjYtLjE0bC43My0uMTRxLjM4LS4wNi43OC0uMDlMMTIsN2EzLjM1LDMuMzUsMCwwLDEsMS4yNS4xOSwzLDMsMCwwLDEsLjc4LjQ2LDMuNzksMy43OSwwLDAsMSwxLS40OEEzLjMxLDMuMzEsMCwwLDEsMTYsN2EzLjUxLDMuNTEsMCwwLDEsMS4zOS4yMywyLjA3LDIuMDcsMCwwLDEsLjg2LjY3LDIuMzcsMi4zNywwLDAsMSwuNDQsMSw1Ljg3LDUuODcsMCwwLDEsLjEzLDEuMzF2NGgtMlYxMC40NWEyLjg2LDIuODYsMCwwLDAtLjI0LTEuMzcsMSwxLDAsMCwwLS44Ni0uNCwyLjEzLDIuMTMsMCwwLDAtLjQ1LjA4LDEuODksMS44OSwwLDAsMC0uNDcuMiwzLjU1LDMuNTUsMCwwLDEsLjEyLjY1YzAsLjIzLDAsLjQ4LDAsLjc0VjE0LjJIMTNaJ1xuXHQgIC8+XG5cdDwvZz5cbiAgPC9zdmc+LFxuICBwZXJjZW50OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz5cblx0PGc+XG5cdCAgPHBhdGhcblx0XHRkPSdNOS4xLDcuN2MwLDAuOC0wLjIsMS41LTAuNiwxLjlzLTEsMC43LTEuNywwLjdTNS40LDEwLjEsNSw5LjdTNC4zLDguNiw0LjMsNy43UzQuNSw2LjMsNSw1LjhzMS0wLjcsMS43LTAuNyAgICAgUzgsNS40LDguNCw1LjhTOS4xLDYuOSw5LjEsNy43eiBNNy41LDcuN2MwLTAuNS0wLjEtMC44LTAuMi0xQzcuMSw2LjUsNi45LDYuNCw2LjcsNi40Yy0wLjMsMC0wLjUsMC4xLTAuNiwwLjNzLTAuMiwwLjUtMC4yLDEgICAgIHMwLjEsMC44LDAuMiwxQzYuMiw5LDYuNCw5LjEsNi43LDkuMWMwLjIsMCwwLjUtMC4xLDAuNi0wLjNDNy41LDguNSw3LjUsOC4yLDcuNSw3Ljd6IE0xMS43LDUuNGgxLjlsLTUuMiw5LjNINi40TDExLjcsNS40eiAgICAgIE0xNS43LDEyLjNjMCwwLjgtMC4yLDEuNS0wLjYsMS45Yy0wLjQsMC40LTEsMC43LTEuNywwLjdzLTEuMy0wLjItMS43LTAuN3MtMC42LTEuMS0wLjYtMS45YzAtMC44LDAuMi0xLjUsMC42LTEuOSAgICAgYzAuNC0wLjQsMS0wLjcsMS43LTAuN3MxLjMsMC4yLDEuNywwLjdDMTUuNSwxMC44LDE1LjcsMTEuNCwxNS43LDEyLjN6IE0xNC4yLDEyLjNjMC0wLjUtMC4xLTAuOC0wLjItMSAgICAgYy0wLjItMC4yLTAuNC0wLjMtMC42LTAuM2MtMC4zLDAtMC41LDAuMS0wLjYsMC4zYy0wLjIsMC4yLTAuMiwwLjUtMC4yLDFzMC4xLDAuOCwwLjIsMXMwLjQsMC4zLDAuNiwwLjNjMC4yLDAsMC41LTAuMSwwLjYtMC4zICAgICBDMTQuMSwxMywxNC4yLDEyLjcsMTQuMiwxMi4zeidcblx0ICAvPlxuXHQ8L2c+XG4gIDwvc3ZnPixcbiAgYnV0dG9uRmlsbDogPHN2Z1xuXHR4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMi41OCAxMS4wMSdcblx0Y2xhc3NOYW1lPSdidXR0b24tZmlsbGVkLXN2ZydcbiAgPlxuXHQ8cmVjdCB3aWR0aD0nMzIuNTgnIGhlaWdodD0nMTEuMDEnIHJ4PScxJy8+XG5cdDxwYXRoIGQ9J001LDcuOTNWMy4wN0g4LjIyVjRINi4wNlY1SDh2LjkxSDYuMDZ2MlonLz5cblx0PHBhdGggZD0nTTksMy4wN2gxLjA5VjcuOTNIOVonLz5cblx0PHBhdGggZD0nTTE0LjQ1LDd2Ljk0SDExLjIxVjMuMDdIMTIuM1Y3WicvPlxuXHQ8cGF0aCBkPSdNMTguNCw3di45NEgxNS4xNlYzLjA3aDEuMDlWN1onLz5cblx0PHBhdGggZD0nTTE5LjExLDcuOTNWMy4wN2gzLjI4VjRIMjAuMnYxaDEuOTR2LjlIMjAuMlY3aDIuMzV2LjkyWicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yNy42Miw1LjVhMi44OCwyLjg4LDAsMCwxLS4yLDEuMSwyLjExLDIuMTEsMCwwLDEtLjU2Ljc4LDIuMzgsMi4zOCwwLDAsMS0uODguNDZBNC4xMyw0LjEzLDAsMCwxLDI0LjgyLDhjLS4yLDAtLjQzLDAtLjY5LDBhNi40OCw2LjQ4LDAsMCwxLS43Ny0uMVYzLjEzQTYuMzUsNi4zNSwwLDAsMSwyNC4xNSwzbC43LDBBNC40NSw0LjQ1LDAsMCwxLDI2LDMuMTVhMi4zMiwyLjMyLDAsMCwxLC44Ny40NSwxLjkyLDEuOTIsMCwwLDEsLjU2Ljc3QTIuOTMsMi45MywwLDAsMSwyNy42Miw1LjVaTTI0LjQ1LDdoLjQyYTEuNTksMS41OSwwLDAsMCwxLjIyLS40MSwxLjYxLDEuNjEsMCwwLDAsLjQtMS4xNCwxLjYyLDEuNjIsMCwwLDAtLjM4LTEuMTZBMS42LDEuNiwwLDAsMCwyNC45MSw0aC0uMjNsLS4yMywwWidcblx0Lz5cbiAgPC9zdmc+LFxuICBidXR0b25PdXRsaW5lOiA8c3ZnXG5cdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0dmlld0JveD0nMCAwIDM5LjAxIDEyLjAxJ1xuXHRjbGFzc05hbWU9J2J1dHRvbi1vdXRsaW5lLXN2ZydcbiAgPlxuXHQ8cmVjdFxuXHQgIGNsYXNzTmFtZT0nYScgeD0nMC41JyB5PScwLjUnIHdpZHRoPSczOC4wMScgaGVpZ2h0PScxMS4wMSdcblx0ICByeD0nMS4wOCdcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNOS4zOCw2QTIuODMsMi44MywwLDAsMSw5LjE5LDcuMWEyLjEyLDIuMTIsMCwwLDEtLjUxLjgsMi4xNCwyLjE0LDAsMCwxLS43Ni40OCwyLjc2LDIuNzYsMCwwLDEtMSwuMTZBMi42NSwyLjY1LDAsMCwxLDYsOC4zOGEyLjE4LDIuMTgsMCwwLDEtLjc3LS40OCwyLjE0LDIuMTQsMCwwLDEtLjUyLS44QTIuODMsMi44MywwLDAsMSw0LjU0LDZhMi44OCwyLjg4LDAsMCwxLC4xOS0xLjEsMi41NCwyLjU0LDAsMCwxLC41My0uOEEyLjMyLDIuMzIsMCwwLDEsNiwzLjYzLDIuNTgsMi41OCwwLDAsMSw3LDMuNDdhMi42OSwyLjY5LDAsMCwxLC45NC4xNiwyLjI3LDIuMjcsMCwwLDEsLjc3LjQ4LDIuMzYsMi4zNiwwLDAsMSwuNTIuOEEyLjg4LDIuODgsMCwwLDEsOS4zOCw2Wk01LjY3LDZhMi4xMSwyLjExLDAsMCwwLC4wOS42NCwxLjM4LDEuMzgsMCwwLDAsLjI1LjUsMS4xMywxLjEzLDAsMCwwLC40LjMyQTEuMzUsMS4zNSwwLDAsMCw3LDcuNThhMS4zMywxLjMzLDAsMCwwLC41NC0uMTEsMS4xNywxLjE3LDAsMCwwLC40MS0uMzIsMS41NiwxLjU2LDAsMCwwLC4yNS0uNUEyLjExLDIuMTEsMCwwLDAsOC4yNSw2YTIuMTcsMi4xNywwLDAsMC0uMDktLjY1LDEuNDcsMS40NywwLDAsMC0uMjUtLjUsMS4xNywxLjE3LDAsMCwwLS40MS0uMzJBMS4zMywxLjMzLDAsMCwwLDcsNC40M2ExLjM1LDEuMzUsMCwwLDAtLjU1LjExLDEuMTYsMS4xNiwwLDAsMC0uNC4zMywxLjMxLDEuMzEsMCwwLDAtLjI1LjVBMi4xMSwyLjExLDAsMCwwLDUuNjcsNlonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTEyLjE5LDguNTRhMi41OCwyLjU4LDAsMCwxLS44OC0uMTQsMS43OSwxLjc5LDAsMCwxLS42Mi0uNCwxLjU1LDEuNTUsMCwwLDEtLjM1LS42MSwyLjQ3LDIuNDcsMCwwLDEtLjEyLS43OXYtM2gxLjFWNi41MWExLjc1LDEuNzUsMCwwLDAsLjA2LjUsMS4yLDEuMiwwLDAsMCwuMTguMzQuNzMuNzMsMCwwLDAsLjI4LjE5LDEuNDQsMS40NCwwLDAsMCwuMzcsMCwuOTIuOTIsMCwwLDAsLjY1LS4yNCwxLjE5LDEuMTksMCwwLDAsLjI0LS44NFYzLjU4aDEuMXYzYTIuNDcsMi40NywwLDAsMS0uMTIuNzksMS42MiwxLjYyLDAsMCwxLS4zNi42MSwxLjcsMS43LDAsMCwxLS42My40QTIuNjYsMi42NiwwLDAsMSwxMi4xOSw4LjU0Widcblx0Lz5cblx0PHBhdGggZD0nTTE4Ljg2LDMuNTh2LjkzSDE3LjM5VjguNDRIMTYuM1Y0LjUxSDE0LjgzVjMuNThaJy8+XG5cdDxwYXRoIGQ9J00yMi44MSw3LjV2Ljk0SDE5LjU2VjMuNThoMS4wOVY3LjVaJy8+XG5cdDxwYXRoIGQ9J00yMy41MSwzLjU4SDI0LjZWOC40NEgyMy41MVonLz5cblx0PHBhdGhcblx0ICBkPSdNMjksOC40NHEtLjQ2LS44Mi0xLTEuNjVhMTYuMTYsMTYuMTYsMCwwLDAtMS4xNi0xLjUzVjguNDRIMjUuNzNWMy41OGguODlxLjIyLjIyLjUxLjU3dC41Ny43MmMuMi4yNS4zOS41Mi41OC43OWwuNTQuNzlWMy41OGgxLjA5VjguNDRaJ1xuXHQvPlxuXHQ8cGF0aFxuXHQgIGQ9J00zMSw4LjQ0VjMuNThoMy4yOFY0LjVIMzIuMTN2MWgxLjk0di45SDMyLjEzVjcuNTJoMi4zNXYuOTJaJ1xuXHQvPlxuICA8L3N2Zz4sXG4gIG1lbnVQbGFpbjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNC4wMyA4LjQ4Jz5cblx0PHBhdGhcblx0ICBkPSdNMi40NSwwYy4xNC4yNi4zMS41OS41LDFzLjM4LjgxLjU5LDEuMjYuNC45MS42LDEuMzhMNC43MSw1bC41Ny0xLjM0cS4zLS43LjYtMS4zOGMuMjEtLjQ1LjQtLjg3LjU5LTEuMjZTNi44My4yNiw3LDBIOC42OGMuMDguNTUuMTUsMS4xNy4yMiwxLjg1UzksMy4yNSw5LjA4LDRzLjEsMS40OC4xNCwyLjIzLjA4LDEuNDQuMTIsMi4xSDcuNTFxMC0xLjIyLS4wOS0yLjY0VDcuMjQsMi44TDYuNzUsMy45MSw2LjIzLDUuMTRsLS41LDEuMTctLjQxLDFINGMtLjExLS4yNi0uMjQtLjU4LS40MS0xTDMuMTEsNS4xNCwyLjU4LDMuOTFRMi4zMywzLjMsMi4xLDIuOCwyLDQuMjQsMS45Miw1LjY4YzAsMS0uMDcsMS44My0uMSwyLjY0SDBDMCw3LjY2LjA3LDcsLjExLDYuMjJMLjI2LDRjMC0uNzQuMTEtMS40NS4xOC0yLjE0Uy41OC41NS42NiwwWidcblx0Lz5cblx0PHBhdGggZD0nTTExLDguMzJWMGg1LjYyVjEuNTdIMTIuODhWMy4ySDE2LjJWNC43NEgxMi44OHYyaDRWOC4zMlonLz5cblx0PHBhdGhcblx0ICBkPSdNMjMuODYsOC4zMnEtLjgxLTEuNDQtMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M1Y4LjMySDE4LjI4VjBIMTkuOGMuMjYuMjYuNTYuNTkuODgsMXMuNjQuOCwxLDEuMjMuNjcuODksMSwxLjM2bC45MywxLjM1VjBoMS44NlY4LjMyWidcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMzAuNiw4LjQ4YTQuMjcsNC4yNywwLDAsMS0xLjUxLS4yNEEyLjcxLDIuNzEsMCwwLDEsMjgsNy41NWEyLjY1LDIuNjUsMCwwLDEtLjYxLTEsNC4wNSw0LjA1LDAsMCwxLS4yLTEuMzRWMEgyOS4xVjVhMywzLDAsMCwwLC4xMS44NSwxLjU0LDEuNTQsMCwwLDAsLjMyLjU4LDEuMTMsMS4xMywwLDAsMCwuNDguMzIsMiwyLDAsMCwwLC42MS4wOSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyQTEuOTEsMS45MSwwLDAsMCwzMi4xNiw1VjBIMzRWNS4xN2E0LjQ1LDQuNDUsMCwwLDEtLjIsMS4zNSwzLDMsMCwwLDEtLjYzLDEuMDUsMi43OSwyLjc5LDAsMCwxLTEuMDYuNjdBNC40OSw0LjQ5LDAsMCwxLDMwLjYsOC40OFonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbWVudUZpbGxlZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0Mi41NiAxMy4wMSc+XG5cdDxyZWN0IHdpZHRoPSc0Mi41NicgaGVpZ2h0PScxMy4wMScvPlxuXHQ8cGF0aFxuXHQgIGQ9J002LjcxLDIuMjZjLjE1LjI3LjMxLjU5LjUsMXMuMzkuODEuNTksMS4yNi40MS45Mi42MSwxLjM5TDksNy4yMmMuMTgtLjQxLjM3LS44Ni41Ny0xLjMzcy40LS45NC42MS0xLjM5LjQtLjg3LjU5LTEuMjYuMzUtLjcxLjUtMWgxLjdjLjA4LjU2LjE1LDEuMTcuMjIsMS44NnMuMTMsMS4zOS4xOCwyLjEzbC4xNSwyLjIzYzAsLjc0LjA4LDEuNDUuMTEsMi4xSDExLjc4YzAtLjgxLS4wNi0xLjY5LS4xLTIuNjRTMTEuNTgsNiwxMS41LDUuMDZjLS4xNC4zNC0uMy43MS0uNDgsMS4xMnMtLjM1LjgxLS41MywxLjIyLS4zMy44LS41LDEuMTdsLS40Ljk1SDguMjhjLS4xMi0uMjYtLjI1LS41OC0uNDEtLjk1cy0uMzMtLjc2LS41LTEuMTdTNyw2LjU4LDYuODUsNi4xOEw2LjM2LDUuMDZxLS4xMiwxLjQ2LS4xOCwyLjg4dC0uMDksMi42NEg0LjI2YzAtLjY1LjA3LTEuMzYuMTItMi4xUzQuNDcsNyw0LjUyLDYuMjVzLjExLTEuNDUuMTgtMi4xMy4xNC0xLjMuMjItMS44NlonXG5cdC8+XG5cdDxwYXRoIGQ9J00xNS4yNywxMC41OFYyLjI2aDUuNjFWMy44NEgxNy4xNFY1LjQ3aDMuMzJWN0gxNy4xNFY5aDR2MS41N1onLz5cblx0PHBhdGhcblx0ICBkPSdNMjguMTIsMTAuNThxLS44MS0xLjQyLTEuNzQtMi44MmEyOS4yMywyOS4yMywwLDAsMC0yLTIuNjN2NS40NUgyMi41NFYyLjI2aDEuNTJjLjI3LjI3LjU2LjU5Ljg4LDFzLjY1Ljc5LDEsMS4yMy42Ni44OCwxLDEuMzUuNjMuOTIuOTIsMS4zNVYyLjI2aDEuODZ2OC4zMlonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTM0Ljg2LDEwLjc1YTQuMDgsNC4wOCwwLDAsMS0xLjUxLS4yNSwyLjg1LDIuODUsMCwwLDEtMS4wNS0uNjgsMi43NCwyLjc0LDAsMCwxLS42MS0xLjA1LDQuMjcsNC4yNywwLDAsMS0uMi0xLjMzVjIuMjZoMS44N3Y1YTIuNywyLjcsMCwwLDAsLjEyLjg2LDEuNDgsMS40OCwwLDAsMCwuMzEuNTcsMSwxLDAsMCwwLC40OC4zMiwxLjc1LDEuNzUsMCwwLDAsLjYyLjFBMS41MywxLjUzLDAsMCwwLDM2LDguNzFhMiwyLDAsMCwwLC40Mi0xLjQzdi01aDEuODdWNy40NGE0LjEsNC4xLDAsMCwxLS4yLDEuMzQsMi43NiwyLjc2LDAsMCwxLS42MiwxLjA1LDIuODUsMi44NSwwLDAsMS0xLjA3LjY4QTQuNDUsNC40NSwwLDAsMSwzNC44NiwxMC43NVonXG5cdC8+XG5cdDxwYXRoXG5cdCAgY2xhc3NOYW1lPSdzdmctdGV4dCdcblx0ICBkPSdNNi43MSwyLjI2Yy4xNS4yNy4zMS41OS41LDFzLjM5LjgxLjU5LDEuMjYuNDEuOTIuNjEsMS4zOVM4LjgsNi44LDksNy4yMmwuNTctMS4zM2MuMi0uNDcuNC0uOTQuNjEtMS4zOXMuNC0uODcuNTktMS4yNi4zNS0uNzEuNS0xaDEuN2MuMDguNTYuMTUsMS4xNy4yMiwxLjg2cy4xMywxLjM5LjE4LDIuMTNsLjE1LDIuMjNjMCwuNzQuMDgsMS40NC4xMSwyLjFIMTEuNzhjMC0uODEtLjA2LTEuNjktLjEtMi42NFMxMS41OCw2LDExLjUsNS4wNmMtLjE0LjM0LS4zLjcxLS40OCwxLjEycy0uMzUuODEtLjUzLDEuMjItLjMzLjgtLjUsMS4xN2wtLjQuOTVIOC4yOGMtLjEyLS4yNi0uMjUtLjU4LS40MS0uOTVzLS4zMy0uNzYtLjUtMS4xN1M3LDYuNTgsNi44NSw2LjE4TDYuMzYsNS4wNnEtLjEyLDEuNDYtLjE4LDIuODh0LS4wOSwyLjY0SDQuMjZjMC0uNjYuMDctMS4zNi4xMi0yLjFTNC40Nyw3LDQuNTIsNi4yNXMuMTEtMS40NS4xOC0yLjEzLjE0LTEuMy4yMi0xLjg2Widcblx0Lz5cblx0PHBhdGhcblx0ICBjbGFzc05hbWU9J3N2Zy10ZXh0J1xuXHQgIGQ9J00xNS4yNywxMC41OFYyLjI2aDUuNjFWMy44NEgxNy4xNFY1LjQ3aDMuMzJWN0gxNy4xNFY5aDR2MS41N1onXG5cdC8+XG5cdDxwYXRoXG5cdCAgY2xhc3NOYW1lPSdzdmctdGV4dCdcblx0ICBkPSdNMjguMTIsMTAuNThxLS44MS0xLjQyLTEuNzQtMi44MmEyOS4yMywyOS4yMywwLDAsMC0yLTIuNjN2NS40NUgyMi41NFYyLjI2aDEuNTJjLjI3LjI3LjU2LjU5Ljg4LDFzLjY1Ljc5LDEsMS4yMy42Ni44OCwxLDEuMzUuNjMuOTIuOTIsMS4zNVYyLjI2aDEuODZ2OC4zMlonXG5cdC8+XG5cdDxwYXRoXG5cdCAgY2xhc3NOYW1lPSdzdmctdGV4dCdcblx0ICBkPSdNMzQuODYsMTAuNzVhNC4wOCw0LjA4LDAsMCwxLTEuNTEtLjI1LDIuODUsMi44NSwwLDAsMS0xLjA1LS42OCwyLjc0LDIuNzQsMCwwLDEtLjYxLTEuMDUsNC4zMSw0LjMxLDAsMCwxLS4yLTEuMzNWMi4yNmgxLjg3djVhMi43LDIuNywwLDAsMCwuMTIuODYsMS40OCwxLjQ4LDAsMCwwLC4zMS41NywxLDEsMCwwLDAsLjQ4LjMyLDEuNzUsMS43NSwwLDAsMCwuNjIuMUExLjUzLDEuNTMsMCwwLDAsMzYsOC43MWEyLDIsMCwwLDAsLjQyLTEuNDN2LTVoMS44N1Y3LjQ0YTQuMTQsNC4xNCwwLDAsMS0uMiwxLjM0LDIuNzYsMi43NiwwLDAsMS0uNjIsMS4wNSwyLjg1LDIuODUsMCwwLDEtMS4wNy42OEE0LjQ1LDQuNDUsMCwwLDEsMzQuODYsMTAuNzVaJ1xuXHQvPlxuICA8L3N2Zz4sXG4gIG1lbnVVbmRlcmxpbmU6IDxzdmdcblx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHR2aWV3Qm94PScwIDAgMzQuMDMgMTAuNzUnXG4gID5cblx0PHBhdGhcblx0ICBkPSdNMi40NSwwYy4xNC4yNi4zMS41OS41LDFzLjM4LjgxLjU5LDEuMjYuNC45MS42LDEuMzhMNC43MSw1bC41Ny0xLjM0cS4zLS43LjYtMS4zOGMuMjEtLjQ1LjQtLjg3LjU5LTEuMjZTNi44My4yNiw3LDBIOC42OGMuMDguNTUuMTUsMS4xNy4yMiwxLjg1UzksMy4yNSw5LjA4LDRzLjEsMS40OC4xNCwyLjIzLjA4LDEuNDQuMTIsMi4xSDcuNTFxMC0xLjIyLS4wOS0yLjY0VDcuMjQsMi44TDYuNzUsMy45MSw2LjIzLDUuMTRsLS41LDEuMTctLjQxLDFINGMtLjExLS4yNi0uMjQtLjU4LS40MS0xTDMuMTEsNS4xNCwyLjU4LDMuOTFRMi4zMywzLjMsMi4xLDIuOCwyLDQuMjQsMS45Miw1LjY4YzAsMS0uMDcsMS44My0uMSwyLjY0SDBDMCw3LjY2LjA3LDcsLjExLDYuMjJMLjI2LDRjMC0uNzQuMTEtMS40NS4xOC0yLjE0Uy41OC41NS42NiwwWidcblx0Lz5cblx0PHBhdGggZD0nTTExLDguMzJWMGg1LjYyVjEuNTdIMTIuODhWMy4ySDE2LjJWNC43NEgxMi44OHYyaDRWOC4zMlonLz5cblx0PHBhdGhcblx0ICBkPSdNMjMuODYsOC4zMnEtLjgxLTEuNDQtMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M1Y4LjMySDE4LjI4VjBIMTkuOGMuMjYuMjYuNTYuNTkuODgsMXMuNjQuOCwxLDEuMjMuNjcuODksMSwxLjM2bC45MywxLjM1VjBoMS44NlY4LjMyWidcblx0Lz5cblx0PHBhdGhcblx0ICBkPSdNMzAuNiw4LjQ4YTQuMjcsNC4yNywwLDAsMS0xLjUxLS4yNEEyLjcxLDIuNzEsMCwwLDEsMjgsNy41NWEyLjY1LDIuNjUsMCwwLDEtLjYxLTEsNC4wNSw0LjA1LDAsMCwxLS4yLTEuMzRWMEgyOS4xVjVhMywzLDAsMCwwLC4xMS44NSwxLjU0LDEuNTQsMCwwLDAsLjMyLjU4LDEuMTMsMS4xMywwLDAsMCwuNDguMzIsMiwyLDAsMCwwLC42MS4wOSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyQTEuOTEsMS45MSwwLDAsMCwzMi4xNiw1VjBIMzRWNS4xN2E0LjQ1LDQuNDUsMCwwLDEtLjIsMS4zNSwzLDMsMCwwLDEtLjYzLDEuMDUsMi43OSwyLjc5LDAsMCwxLTEuMDYuNjdBNC40OSw0LjQ5LDAsMCwxLDMwLjYsOC40OFonXG5cdC8+XG5cdDxyZWN0IHk9JzkuMzInIHdpZHRoPSczNC4wMycgaGVpZ2h0PScxLjQzJy8+XG4gIDwvc3ZnPixcbiAgbWVudU92ZXJsaW5lOiA8c3ZnXG5cdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0dmlld0JveD0nMCAwIDM0LjAzIDEwLjkyJ1xuICA+XG5cdDxwYXRoXG5cdCAgZD0nTTIuNDUsMi40M2MuMTQuMjcuMzEuNTkuNSwxcy4zOC44MS41OSwxLjI2LjQuOTEuNiwxLjM5bC41NywxLjMzLjU3LTEuMzNjLjItLjQ4LjQtLjk0LjYtMS4zOXMuNC0uODcuNTktMS4yNi4zNi0uNzEuNS0xSDguNjhjLjA4LjU2LjE1LDEuMTcuMjIsMS44NlM5LDUuNjgsOS4wOCw2LjQycy4xLDEuNDkuMTQsMi4yMy4wOCwxLjQ0LjEyLDIuMUg3LjUxcTAtMS4yMS0uMDktMi42NFQ3LjI0LDUuMjNMNi43NSw2LjM1Yy0uMTcuNC0uMzUuODEtLjUyLDEuMjJzLS4zNC44LS41LDEuMTdsLS40MS45NUg0Yy0uMTEtLjI2LS4yNC0uNTgtLjQxLS45NVMzLjI4LDgsMy4xMSw3LjU3cy0uMzUtLjgyLS41My0xLjIyLS4zMy0uNzgtLjQ4LTEuMTJRMiw2LjY5LDEuOTIsOC4xMWMwLDEtLjA3LDEuODMtLjEsMi42NEgwYzAtLjY2LjA3LTEuMzYuMTEtMi4xTC4yNiw2LjQyUS4zNCw1LjMxLjQ0LDQuMjlDLjUxLDMuNi41OCwzLC42NiwyLjQzWidcblx0Lz5cblx0PHBhdGggZD0nTTExLDEwLjc1VjIuNDNoNS42MlY0SDEyLjg4VjUuNjRIMTYuMlY3LjE3SDEyLjg4djJoNHYxLjU3WicvPlxuXHQ8cGF0aFxuXHQgIGQ9J00yMy44NiwxMC43NXEtLjgxLTEuNDItMS43NC0yLjgyYTI4LDI4LDAsMCwwLTItMi42M3Y1LjQ1SDE4LjI4VjIuNDNIMTkuOGMuMjYuMjcuNTYuNTkuODgsMXMuNjQuNzksMSwxLjIzLjY3Ljg4LDEsMS4zNWwuOTMsMS4zNVYyLjQzaDEuODZ2OC4zMlonXG5cdC8+XG5cdDxwYXRoXG5cdCAgZD0nTTMwLjYsMTAuOTJhNC4yNiw0LjI2LDAsMCwxLTEuNTEtLjI1QTIuNjksMi42OSwwLDAsMSwyOCwxMGEyLjYyLDIuNjIsMCwwLDEtLjYxLTEuMDUsNCw0LDAsMCwxLS4yLTEuMzNWMi40M0gyOS4xdjVhMywzLDAsMCwwLC4xMS44NiwxLjQ5LDEuNDksMCwwLDAsLjMyLjU3QTEsMSwwLDAsMCwzMCw5LjJhMS43LDEuNywwLDAsMCwuNjEuMSwxLjUsMS41LDAsMCwwLDEuMTEtLjQyLDEuOTQsMS45NCwwLDAsMCwuNDMtMS40M3YtNUgzNFY3LjYxQTQuNDMsNC40MywwLDAsMSwzMy44Myw5YTIuNzIsMi43MiwwLDAsMS0xLjY5LDEuNzNBNC40OSw0LjQ5LDAsMCwxLDMwLjYsMTAuOTJaJ1xuXHQvPlxuXHQ8cmVjdCB3aWR0aD0nMzQuMDMnIGhlaWdodD0nMS40MycvPlxuICA8L3N2Zz4sXG4gIG15QWNjb3VudFVzZXJzU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTk2IDIyNGMzNS4zIDAgNjQtMjguNyA2NC02NHMtMjguNy02NC02NC02NC02NCAyOC43LTY0IDY0IDI4LjcgNjQgNjQgNjR6bTQ0OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0cy0yOC43LTY0LTY0LTY0LTY0IDI4LjctNjQgNjQgMjguNyA2NCA2NCA2NHptMzIgMzJoLTY0Yy0xNy42IDAtMzMuNSA3LjEtNDUuMSAxOC42IDQwLjMgMjIuMSA2OC45IDYyIDc1LjEgMTA5LjRoNjZjMTcuNyAwIDMyLTE0LjMgMzItMzJ2LTMyYzAtMzUuMy0yOC43LTY0LTY0LTY0em0tMjU2IDBjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMzgxLjkgMzIgMzIwIDMyIDIwOCA4Mi4xIDIwOCAxNDRzNTAuMSAxMTIgMTEyIDExMnptNzYuOCAzMmgtOC4zYy0yMC44IDEwLTQzLjkgMTYtNjguNSAxNnMtNDcuNi02LTY4LjUtMTZoLTguM0MxNzkuNiAyODggMTI4IDMzOS42IDEyOCA0MDMuMlY0MzJjMCAyNi41IDIxLjUgNDggNDggNDhoMjg4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yOC44YzAtNjMuNi01MS42LTExNS4yLTExNS4yLTExNS4yem0tMjIzLjctMTMuNEMxNjEuNSAyNjMuMSAxNDUuNiAyNTYgMTI4IDI1Nkg2NGMtMzUuMyAwLTY0IDI4LjctNjQgNjR2MzJjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjUuOWM2LjMtNDcuNCAzNC45LTg3LjMgNzUuMi0xMDkuNHonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlcnNGaXJlbmRzU29saWQ6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTE5MiAyNTZjNjEuOSAwIDExMi01MC4xIDExMi0xMTJTMjUzLjkgMzIgMTkyIDMyIDgwIDgyLjEgODAgMTQ0czUwLjEgMTEyIDExMiAxMTJ6bTc2LjggMzJoLTguM2MtMjAuOCAxMC00My45IDE2LTY4LjUgMTZzLTQ3LjYtNi02OC41LTE2aC04LjNDNTEuNiAyODggMCAzMzkuNiAwIDQwMy4yVjQzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgyODhjMjYuNSAwIDQ4LTIxLjUgNDgtNDh2LTI4LjhjMC02My42LTUxLjYtMTE1LjItMTE1LjItMTE1LjJ6TTQ4MCAyNTZjNTMgMCA5Ni00MyA5Ni05NnMtNDMtOTYtOTYtOTYtOTYgNDMtOTYgOTYgNDMgOTYgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmMyNi41IDAgNDgtMjEuNSA0OC00OCAwLTYxLjktNTAuMS0xMTItMTEyLTExMnonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclNvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J00yMjQgMjU2YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4UzI5NC43IDAgMjI0IDAgOTYgNTcuMyA5NiAxMjhzNTcuMyAxMjggMTI4IDEyOHptODkuNiAzMmgtMTYuN2MtMjIuMiAxMC4yLTQ2LjkgMTYtNzIuOSAxNnMtNTAuNi01LjgtNzIuOS0xNmgtMTYuN0M2MC4yIDI4OCAwIDM0OC4yIDAgNDIyLjRWNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OHYtNDEuNmMwLTc0LjItNjAuMi0xMzQuNC0xMzQuNC0xMzQuNHonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlclJlZ3VsYXI6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTMxMy42IDMwNGMtMjguNyAwLTQyLjUgMTYtODkuNiAxNi00Ny4xIDAtNjAuOC0xNi04OS42LTE2QzYwLjIgMzA0IDAgMzY0LjIgMCA0MzguNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0yNS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40ek00MDAgNDY0SDQ4di0yNS42YzAtNDcuNiAzOC44LTg2LjQgODYuNC04Ni40IDE0LjYgMCAzOC4zIDE2IDg5LjYgMTYgNTEuNyAwIDc0LjktMTYgODkuNi0xNiA0Ny42IDAgODYuNCAzOC44IDg2LjQgODYuNFY0NjR6TTIyNCAyODhjNzkuNSAwIDE0NC02NC41IDE0NC0xNDRTMzAzLjUgMCAyMjQgMCA4MCA2NC41IDgwIDE0NHM2NC41IDE0NCAxNDQgMTQ0em0wLTI0MGM1Mi45IDAgOTYgNDMuMSA5NiA5NnMtNDMuMSA5Ni05NiA5Ni05Ni00My4xLTk2LTk2IDQzLjEtOTYgOTYtOTZ6J1xuXHQvPlxuICA8L3N2Zz4sXG4gIG15QWNjb3VudFVzZXJUYWdTb2xpZDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA2NDAgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNNjMwLjYgMzY0LjlsLTkwLjMtOTAuMmMtMTItMTItMjguMy0xOC43LTQ1LjMtMTguN2gtNzkuM2MtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NzkuMmMwIDE3IDYuNyAzMy4yIDE4LjcgNDUuMmw5MC4zIDkwLjJjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsOTIuNS05Mi41YzEyLjYtMTIuNSAxMi42LTMyLjcuMS00NS4yem0tMTgyLjgtMjFjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjQgMjQgMTAuNyAyNCAyNGMwIDEzLjItMTAuNyAyNC0yNCAyNHptLTIyMy44LTg4YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4QzM1MiA1Ny4zIDI5NC43IDAgMjI0IDBTOTYgNTcuMyA5NiAxMjhjMCA3MC42IDU3LjMgMTI3LjkgMTI4IDEyNy45em0xMjcuOCAxMTEuMlYyOTRjLTEyLjItMy42LTI0LjktNi4yLTM4LjItNi4yaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg3LjkgMCAzNDguMSAwIDQyMi4zdjQxLjZjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzE1LjUgMCAyOS4xLTcuNSAzNy45LTE4LjlsLTU4LTU4Yy0xOC4xLTE4LjEtMjguMS00Mi4yLTI4LjEtNjcuOXonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlckFsdFNvbGlkOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J00yNTYgMjg4Yzc5LjUgMCAxNDQtNjQuNSAxNDQtMTQ0UzMzNS41IDAgMjU2IDAgMTEyIDY0LjUgMTEyIDE0NHM2NC41IDE0NCAxNDQgMTQ0em0xMjggMzJoLTU1LjFjLTIyLjIgMTAuMi00Ni45IDE2LTcyLjkgMTZzLTUwLjYtNS44LTcyLjktMTZIMTI4QzU3LjMgMzIwIDAgMzc3LjMgMCA0NDh2MTZjMCAyNi41IDIxLjUgNDggNDggNDhoNDE2YzI2LjUgMCA0OC0yMS41IDQ4LTQ4di0xNmMwLTcwLjctNTcuMy0xMjgtMTI4LTEyOHonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50VXNlckF2YXRhcjogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNMjU2IDhDMTE5LjMgOCA4IDExOS4yIDggMjU2YzAgMTM2LjcgMTExLjMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4zIDI0OC0yNDhDNTA0IDExOS4yIDM5Mi43IDggMjU2IDh6TTMzIDI1NmMwLTMyLjMgNi45LTYzIDE5LjMtOTAuN2wxMDYuNCAyOTEuNEM4NC4zIDQyMC41IDMzIDM0NC4yIDMzIDI1NnptMjIzIDIyM2MtMjEuOSAwLTQzLTMuMi02My05LjFsNjYuOS0xOTQuNCA2OC41IDE4Ny44Yy41IDEuMSAxIDIuMSAxLjYgMy4xLTIzLjEgOC4xLTQ4IDEyLjYtNzQgMTIuNnptMzAuNy0zMjcuNWMxMy40LS43IDI1LjUtMi4xIDI1LjUtMi4xIDEyLTEuNCAxMC42LTE5LjEtMS40LTE4LjQgMCAwLTM2LjEgMi44LTU5LjQgMi44LTIxLjkgMC01OC43LTIuOC01OC43LTIuOC0xMi0uNy0xMy40IDE3LjctMS40IDE4LjQgMCAwIDExLjQgMS40IDIzLjQgMi4xbDM0LjcgOTUuMkwyMDAuNiAzOTNsLTgxLjItMjQxLjVjMTMuNC0uNyAyNS41LTIuMSAyNS41LTIuMSAxMi0xLjQgMTAuNi0xOS4xLTEuNC0xOC40IDAgMC0zNi4xIDIuOC01OS40IDIuOC00LjIgMC05LjEtLjEtMTQuNC0uM0MxMDkuNiA3MyAxNzguMSAzMyAyNTYgMzNjNTggMCAxMTAuOSAyMi4yIDE1MC42IDU4LjUtMS0uMS0xLjktLjItMi45LS4yLTIxLjkgMC0zNy40IDE5LjEtMzcuNCAzOS42IDAgMTguNCAxMC42IDMzLjkgMjEuOSA1Mi4zIDguNSAxNC44IDE4LjQgMzMuOSAxOC40IDYxLjUgMCAxOS4xLTcuMyA0MS4yLTE3IDcyLjFsLTIyLjIgNzQuMy04MC43LTIzOS42em04MS40IDI5Ny4ybDY4LjEtMTk2LjljMTIuNy0zMS44IDE3LTU3LjIgMTctNzkuOSAwLTguMi0uNS0xNS44LTEuNS0yMi45IDE3LjQgMzEuOCAyNy4zIDY4LjIgMjcuMyAxMDcgMCA4Mi4zLTQ0LjYgMTU0LjEtMTEwLjkgMTkyLjd6Jy8+XG4gIDwvc3ZnPixcbiAgbXlBY2NvdW50Tm9uZTogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNTIgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6J1xuXHQvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGUxOiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE3OTIgMTc5Mic+XG5cdDxwYXRoXG5cdCAgZD0nTTcwNCAxNTM2cTAgNTItMzggOTB0LTkwIDM4LTkwLTM4LTM4LTkwIDM4LTkwIDkwLTM4IDkwIDM4IDM4IDkwem04OTYgMHEwIDUyLTM4IDkwdC05MCAzOC05MC0zOC0zOC05MCAzOC05MCA5MC0zOCA5MCAzOCAzOCA5MHptMTI4LTEwODh2NTEycTAgMjQtMTYuNSA0Mi41dC00MC41IDIxLjVsLTEwNDQgMTIycTEzIDYwIDEzIDcwIDAgMTYtMjQgNjRoOTIwcTI2IDAgNDUgMTl0MTkgNDUtMTkgNDUtNDUgMTloLTEwMjRxLTI2IDAtNDUtMTl0LTE5LTQ1cTAtMTEgOC0zMS41dDE2LTM2IDIxLjUtNDAgMTUuNS0yOS41bC0xNzctODIzaC0yMDRxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1IDQ1LTE5aDI1NnExNiAwIDI4LjUgNi41dDE5LjUgMTUuNSAxMyAyNC41IDggMjYgNS41IDI5LjUgNC41IDI2aDEyMDFxMjYgMCA0NSAxOXQxOSA0NXonXG5cdC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTI6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTUwNC43MTcgMzIwSDIxMS41NzJsNi41NDUgMzJoMjY4LjQxOGMxNS40MDEgMCAyNi44MTYgMTQuMzAxIDIzLjQwMyAyOS4zMTlsLTUuNTE3IDI0LjI3NkM1MjMuMTEyIDQxNC42NjggNTM2IDQzMy44MjggNTM2IDQ1NmMwIDMxLjIwMi0yNS41MTkgNTYuNDQ0LTU2LjgyNCA1NS45OTQtMjkuODIzLS40MjktNTQuMzUtMjQuNjMxLTU1LjE1NS01NC40NDctLjQ0LTE2LjI4NyA2LjA4NS0zMS4wNDkgMTYuODAzLTQxLjU0OEgyMzEuMTc2QzI0MS41NTMgNDI2LjE2NSAyNDggNDQwLjMyNiAyNDggNDU2YzAgMzEuODEzLTI2LjUyOCA1Ny40MzEtNTguNjcgNTUuOTM4LTI4LjU0LTEuMzI1LTUxLjc1MS0yNC4zODUtNTMuMjUxLTUyLjkxNy0xLjE1OC0yMi4wMzQgMTAuNDM2LTQxLjQ1NSAyOC4wNTEtNTEuNTg2TDkzLjg4MyA2NEgyNEMxMC43NDUgNjQgMCA1My4yNTUgMCA0MFYyNEMwIDEwLjc0NSAxMC43NDUgMCAyNCAwaDEwMi41MjljMTEuNDAxIDAgMjEuMjI4IDguMDIxIDIzLjUxMyAxOS4xOUwxNTkuMjA4IDY0SDU1MS45OWMxNS40MDEgMCAyNi44MTYgMTQuMzAxIDIzLjQwMyAyOS4zMTlsLTQ3LjI3MyAyMDhDNTI1LjYzNyAzMTIuMjQ2IDUxNS45MjMgMzIwIDUwNC43MTcgMzIwek00MDggMTY4aC00OHYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNmgtMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBoLTQ4Yy04LjgzNyAwLTE2IDcuMTYzLTE2IDE2djE2YzAgOC44MzcgNy4xNjMgMTYgMTYgMTZoNDh2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNmgxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di00MGg0OGM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di0xNmMwLTguODM3LTcuMTYzLTE2LTE2LTE2eidcblx0Lz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlMzogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNNTA0LjcxNyAzMjBIMjExLjU3Mmw2LjU0NSAzMmgyNjguNDE4YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNS41MTcgMjQuMjc2QzUyMy4xMTIgNDE0LjY2OCA1MzYgNDMzLjgyOCA1MzYgNDU2YzAgMzEuMjAyLTI1LjUxOSA1Ni40NDQtNTYuODI0IDU1Ljk5NC0yOS44MjMtLjQyOS01NC4zNS0yNC42MzEtNTUuMTU1LTU0LjQ0Ny0uNDQtMTYuMjg3IDYuMDg1LTMxLjA0OSAxNi44MDMtNDEuNTQ4SDIzMS4xNzZDMjQxLjU1MyA0MjYuMTY1IDI0OCA0NDAuMzI2IDI0OCA0NTZjMCAzMS44MTMtMjYuNTI4IDU3LjQzMS01OC42NyA1NS45MzgtMjguNTQtMS4zMjUtNTEuNzUxLTI0LjM4NS01My4yNTEtNTIuOTE3LTEuMTU4LTIyLjAzNCAxMC40MzYtNDEuNDU1IDI4LjA1MS01MS41ODZMOTMuODgzIDY0SDI0QzEwLjc0NSA2NCAwIDUzLjI1NSAwIDQwVjI0QzAgMTAuNzQ1IDEwLjc0NSAwIDI0IDBoMTAyLjUyOWMxMS40MDEgMCAyMS4yMjggOC4wMjEgMjMuNTEzIDE5LjE5TDE1OS4yMDggNjRINTUxLjk5YzE1LjQwMSAwIDI2LjgxNiAxNC4zMDEgMjMuNDAzIDI5LjMxOWwtNDcuMjczIDIwOEM1MjUuNjM3IDMxMi4yNDYgNTE1LjkyMyAzMjAgNTA0LjcxNyAzMjB6TTQwMy4wMjkgMTkySDM2MHYtNjBjMC02LjYyNy01LjM3My0xMi0xMi0xMmgtMjRjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2NjBoLTQzLjAyOWMtMTAuNjkxIDAtMTYuMDQ1IDEyLjkyNi04LjQ4NSAyMC40ODVsNjcuMDI5IDY3LjAyOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsNjcuMDI5LTY3LjAyOWM3LjU1OS03LjU1OSAyLjIwNS0yMC40ODUtOC40ODYtMjAuNDg1eidcblx0Lz5cbiAgPC9zdmc+LFxuICBjYXJ0SWNvblN0eWxlNDogPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJz5cblx0PHBhdGhcblx0ICBkPSdNNTc2IDIxNnYxNmMwIDEzLjI1NS0xMC43NDUgMjQtMjQgMjRoLThsLTI2LjExMyAxODIuNzg4QzUxNC41MDkgNDYyLjQzNSA0OTQuMjU3IDQ4MCA0NzAuMzcgNDgwSDEwNS42M2MtMjMuODg3IDAtNDQuMTM5LTE3LjU2NS00Ny41MTgtNDEuMjEyTDMyIDI1NmgtOGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0di0xNmMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoNjcuMzQxbDEwNi43OC0xNDYuODIxYzEwLjM5NS0xNC4yOTIgMzAuNDA3LTE3LjQ1MyA0NC43MDEtNy4wNTggMTQuMjkzIDEwLjM5NSAxNy40NTMgMzAuNDA4IDcuMDU4IDQ0LjcwMUwxNzAuNDc3IDE5MmgyMzUuMDQ2TDMyNi4xMiA4Mi44MjFjLTEwLjM5NS0xNC4yOTItNy4yMzQtMzQuMzA2IDcuMDU5LTQ0LjcwMSAxNC4yOTEtMTAuMzk1IDM0LjMwNi03LjIzNSA0NC43MDEgNy4wNThMNDg0LjY1OSAxOTJINTUyYzEzLjI1NSAwIDI0IDEwLjc0NSAyNCAyNHpNMzEyIDM5MlYyODBjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0cy0yNCAxMC43NDUtMjQgMjR2MTEyYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHMyNC0xMC43NDUgMjQtMjR6bTExMiAwVjI4MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRzLTI0IDEwLjc0NS0yNCAyNHYxMTJjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0czI0LTEwLjc0NSAyNC0yNHptLTIyNCAwVjI4MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRzLTI0IDEwLjc0NS0yNCAyNHYxMTJjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0czI0LTEwLjc0NSAyNC0yNHonXG5cdC8+XG4gIDwvc3ZnPixcbiAgY2FydEljb25TdHlsZTU6IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNjQwIDUxMic+XG5cdDxwYXRoXG5cdCAgZD0nTTMyMCAzODRIMTI4VjIyNEg2NHYyNTZjMCAxNy43IDE0LjMgMzIgMzIgMzJoMjU2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNGgtNjR2MTYwem0zMTQuNi0yNDEuOGwtODUuMy0xMjhjLTYtOC45LTE2LTE0LjItMjYuNy0xNC4ySDExNy40Yy0xMC43IDAtMjAuNyA1LjMtMjYuNiAxNC4ybC04NS4zIDEyOGMtMTQuMiAyMS4zIDEgNDkuOCAyNi42IDQ5LjhINjA4YzI1LjUgMCA0MC43LTI4LjUgMjYuNi00OS44ek01MTIgNDk2YzAgOC44IDcuMiAxNiAxNiAxNmgzMmM4LjggMCAxNi03LjIgMTYtMTZWMjI0aC02NHYyNzJ6J1xuXHQvPlxuICA8L3N2Zz4sXG4gIGNhcnRJY29uU3R5bGU2OiA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDYxNiA1MTInPlxuXHQ8cGF0aFxuXHQgIGQ9J002MDIgMTE4LjZMNTM3LjEgMTVDNTMxLjMgNS43IDUyMSAwIDUxMCAwSDEwNkM5NSAwIDg0LjcgNS43IDc4LjkgMTVMMTQgMTE4LjZjLTMzLjUgNTMuNS0zLjggMTI3LjkgNTguOCAxMzYuNCA0LjUuNiA5LjEuOSAxMy43LjkgMjkuNiAwIDU1LjgtMTMgNzMuOC0zMy4xIDE4IDIwLjEgNDQuMyAzMy4xIDczLjggMzMuMSAyOS42IDAgNTUuOC0xMyA3My44LTMzLjEgMTggMjAuMSA0NC4zIDMzLjEgNzMuOCAzMy4xIDI5LjYgMCA1NS44LTEzIDczLjgtMzMuMSAxOC4xIDIwLjEgNDQuMyAzMy4xIDczLjggMzMuMSA0LjcgMCA5LjItLjMgMTMuNy0uOSA2Mi44LTguNCA5Mi42LTgyLjggNTktMTM2LjR6TTUyOS41IDI4OGMtMTAgMC0xOS45LTEuNS0yOS41LTMuOFYzODRIMTE2di05OS44Yy05LjYgMi4yLTE5LjUgMy44LTI5LjUgMy44LTYgMC0xMi4xLS40LTE4LTEuMi01LjYtLjgtMTEuMS0yLjEtMTYuNC0zLjZWNDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyaDQ0OGMxNy43IDAgMzItMTQuMyAzMi0zMlYyODMuMmMtNS40IDEuNi0xMC44IDIuOS0xNi40IDMuNi02LjEuOC0xMi4xIDEuMi0xOC4yIDEuMnonXG5cdC8+XG4gIDwvc3ZnPixcbiAgbWVkaWFBbGlnbkxlZnQ6IDxzdmcgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHQ8cmVjdCB4PVwiNVwiIHk9XCIxNi43NVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCI2XCIgdHJhbnNmb3JtPVwicm90YXRlKC05MCA1IDE2Ljc1KVwiLz5cblx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMC41IDguNzVMMTMuNSA4Ljc1TDEzLjUgNy4yNUwyMC41IDcuMjVMMjAuNSA4Ljc1WlwiLz5cblx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk0yMC41IDEyLjc1TDEzLjUgMTIuNzVMMTMuNSAxMS4yNUwyMC41IDExLjI1TDIwLjUgMTIuNzVaXCIvPlxuXHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwLjUgMTYuNzVMMTMuNSAxNi43NUwxMy41IDE1LjI1TDIwLjUgMTUuMjVMMjAuNSAxNi43NVpcIi8+XG4gIDwvc3ZnPixcbiAgbWVkaWFBbGlnblJpZ2h0OiA8c3ZnIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0PHJlY3QgeD1cIjIwXCIgeT1cIjcuNzVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiNlwiIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCAyMCA3Ljc1KVwiLz5cblx0PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjUgMTUuNzVIMTEuNVYxNy4yNUg0LjVWMTUuNzVaXCIvPlxuXHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuNSAxMS43NUgxMS41VjEzLjI1SDQuNVYxMS43NVpcIi8+XG5cdDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC41IDcuNzVIMTEuNVY5LjI1SDQuNVY3Ljc1WlwiLz5cbiAgPC9zdmc+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwLCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IERyb3Bkb3duTWVudSwgTWVudUdyb3VwLCBNZW51SXRlbSB9ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBEeW5hbWljRmllbGRJbnNlcnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5nZXRPcHRpb25zID0gdGhpcy5nZXRPcHRpb25zLmJpbmQodGhpcylcbiAgfVxuXG4gIGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBvblNlbGVjdCwgYWxsb3dlZE9wdGlvbnNUeXBlcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBOZXZlUmVhY3RDdXN0b21pemUuZHluYW1pY1RhZ3Mub3B0aW9uc1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgYWxsT3B0aW9ucy5mb3JFYWNoKChvcHRpb25Hcm91cCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbkdyb3VwLmNvbnRyb2xzKVxuICAgICAgICAuZm9yRWFjaCgoc2x1ZywgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoIWFsbG93ZWRPcHRpb25zVHlwZXMuaW5jbHVkZXMoXG4gICAgICAgICAgICBvcHRpb25Hcm91cC5jb250cm9sc1tzbHVnXS50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkcmVuLnB1c2goXG4gICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0KHNsdWcsIG9wdGlvbkdyb3VwLmNvbnRyb2xzW3NsdWddLnR5cGUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvcHRpb25Hcm91cC5jb250cm9sc1tzbHVnXS5sYWJlbH1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+KVxuICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICA8TWVudUdyb3VwIGxhYmVsPXtvcHRpb25Hcm91cC5sYWJlbH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lbnVHcm91cD5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWNvbj0naW1hZ2UtZmlsdGVyJ1xuICAgICAgICBsYWJlbD17X18oJ0luc2VydCBEeW5hbWljIFRhZycsICduZXZlJyl9XG4gICAgICA+XG4gICAgICAgIHsoKSA9PiAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICApXG4gIH1cbn1cblxuRHluYW1pY0ZpZWxkSW5zZXJ0ZXIucHJvcFR5cGVzID0ge1xuICBhbGxvd2VkT3B0aW9uc1R5cGVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ZpZWxkSW5zZXJ0ZXJcbiIsIi8qIGdsb2JhbCBOZXZlUmVhY3RDdXN0b21pemUgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IER5bmFtaWNGaWVsZEluc2VydGVyIGZyb20gJy4vZHluYW1pYy1maWVsZC1pbnNlcnRlci5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZHluYW1pYyB0YWcgYnV0dG9ucy5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn18e3ZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIU5ldmVSZWFjdEN1c3RvbWl6ZS5keW5hbWljVGFncykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGNvbnRyb2xzID0gTmV2ZVJlYWN0Q3VzdG9taXplLmR5bmFtaWNUYWdzLmNvbnRyb2xzXG4gIE5ldmVSZWFjdEN1c3RvbWl6ZS5maWVsZFNlbGVjdGlvbiA9IHt9XG4gIE9iamVjdC5rZXlzKGNvbnRyb2xzKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sSWQsIGluZGV4KSB7XG4gICAgY29uc3QgY29udHJvbCA9IHdwLmN1c3RvbWl6ZS5jb250cm9sKGNvbnRyb2xJZClcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIGNvbnN0IGR5bmFtaWNDb250cm9sV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBkeW5hbWljQ29udHJvbFdyYXAuc2V0QXR0cmlidXRlKCdpZCcsIGBkeW5hbWljLSR7Y29udHJvbElkfWApXG4gICAgZHluYW1pY0NvbnRyb2xXcmFwLmNsYXNzTGlzdC5hZGQoJ25ldmUtZHluYW1pYy10YWctc2VsZWN0b3InKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXZlLWhhcy1keW5hbWljLXRhZy1zZWxlY3RvcicpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR5bmFtaWNDb250cm9sV3JhcClcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1jdXN0b21pemUtc2V0dGluZy1saW5rPVwiJHtjb250cm9sLmlkfVwiXWApXG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb25bY29udHJvbElkXSA9IHtcbiAgICAgICAgc3RhcnQ6IGUudGFyZ2V0LnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IGUudGFyZ2V0LnNlbGVjdGlvbkVuZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZW5kZXIoXG4gICAgICA8RHluYW1pY0ZpZWxkSW5zZXJ0ZXJcbiAgICAgICAgYWxsb3dlZE9wdGlvbnNUeXBlcz17XG4gICAgICAgICAgY29udHJvbHNbY29udHJvbElkXVxuICAgICAgICB9XG4gICAgICAgIG9uU2VsZWN0PXtcbiAgICAgICAgICAobWFnaWNUYWcsIGdyb3VwKSA9PiBhZGRUb0ZpZWxkKG1hZ2ljVGFnLCBjb250cm9sLCBncm91cClcbiAgICAgICAgfVxuICAgICAgLz4sXG4gICAgICBkeW5hbWljQ29udHJvbFdyYXBcbiAgICApXG4gIH0pXG59XG5cbi8qKlxuICogQWRkIGR5bmFtaWMgdGFnIHRvIGlucHV0IGZpZWxkLlxuICogQHBhcmFtIG1hZ2ljVGFnXG4gKiBAcGFyYW0gY29udHJvbFxuICogQHBhcmFtIG9wdGlvblR5cGVcbiAqL1xuY29uc3QgYWRkVG9GaWVsZCA9IGZ1bmN0aW9uIChtYWdpY1RhZywgY29udHJvbCwgb3B0aW9uVHlwZSkge1xuICBsZXQgdGFnXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtY3VzdG9taXplLXNldHRpbmctbGluaz1cIiR7Y29udHJvbC5pZH1cIl1gKVxuXG4gIGlmIChvcHRpb25UeXBlID09PSAndXJsJyAmJiBjb250cm9sLnBhcmFtcy50eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgdGFnID0gYDxhIGhyZWY9XCJ7JHttYWdpY1RhZ319XCI+TGluazwvYT5gXG4gIH0gZWxzZSB7XG4gICAgdGFnID0gYHske21hZ2ljVGFnfX1gXG4gIH1cblxuICBpZiAob3B0aW9uVHlwZSA9PT0gJ3VybCcgJiYgaW5wdXQudmFsdWUgPT09ICcjJykge1xuICAgIGlucHV0LnZhbHVlID0gdGFnXG4gIH0gZWxzZSBpZiAoTmV2ZVJlYWN0Q3VzdG9taXplLmZpZWxkU2VsZWN0aW9uW2NvbnRyb2wuaWRdKSB7XG4gICAgY29uc3QgeyBzdGFydCwgZW5kIH0gPSBOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb25bY29udHJvbC5pZF1cbiAgICBjb25zdCBsZW5ndGggPSBpbnB1dC52YWx1ZS5sZW5ndGhcbiAgICBpbnB1dC52YWx1ZSA9XG4gICAgICBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgdGFnICtcbiAgICAgIGlucHV0LnZhbHVlLnN1YnN0cmluZyhlbmQsIGxlbmd0aClcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC52YWx1ZSArPSB0YWdcbiAgfVxuICBOZXZlUmVhY3RDdXN0b21pemUuZmllbGRTZWxlY3Rpb25bY29udHJvbC5pZF0gPSBmYWxzZVxuICBpbnB1dC5mb2N1cygpXG4gIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSlcbn1cbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuXG5pbXBvcnQgRm9udEZhbWlseUNvbXBvbmVudCBmcm9tICcuL0ZvbnRGYW1pbHlDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgRm9udEZhbWlseUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoe1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPEZvbnRGYW1pbHlDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSlcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgTmV2ZVJlYWN0Q3VzdG9taXplICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRm9udEZhbWlseVNlbGVjdG9yIGZyb20gJy4vRm9udEZhbWlseVNlbGVjdG9yLmpzJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjbGFzcyBUeXBlZmFjZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoIHByb3BzIClcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb250RmFtaWx5OiB2YWx1ZSxcbiAgICAgIGZvbnRGYW1pbHlTb3VyY2U6IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgZGVmYXVsdF9pc19pbmhlcml0OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuY29udHJvbFBhcmFtcyA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzID8ge1xuICAgICAgLi4uZGVmYXVsdFBhcmFtcyxcbiAgICAgIC4uLkpTT04ucGFyc2UoIHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzIClcbiAgICB9IDogZGVmYXVsdFBhcmFtc1xuICB9XG5cbiAgbWF5YmVfZ2V0X3R5cGVraXRfZm9udChmb250KSB7XG4gICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIE5ldmVSZWFjdEN1c3RvbWl6ZSwgJ3R5cGVraXRTbHVncycgKSA9PT0gZmFsc2UgKSB7XG4gICAgICByZXR1cm4gZm9udFxuICAgIH1cbiAgICBjb25zdCB0eXBla2l0U2x1Z3MgPSBOZXZlUmVhY3RDdXN0b21pemUudHlwZWtpdFNsdWdzXG4gICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHR5cGVraXRTbHVncywgZm9udCApICkge1xuICAgICAgcmV0dXJuIHR5cGVraXRTbHVnc1tmb250XVxuICAgIH1cbiAgICByZXR1cm4gZm9udFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWwgJiZcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXR5cGVmYWNlLWNvbnRyb2wgbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgICAgIDxGb250RmFtaWx5U2VsZWN0b3JcbiAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmZvbnRGYW1pbHl9XG4gICAgICAgICAgICBvbkZvbnRDaG9pY2U9eyhmb250RmFtaWx5U291cmNlLCBmb250RmFtaWx5KSA9PiB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoIHsgZm9udEZhbWlseSwgZm9udEZhbWlseVNvdXJjZSB9IClcbiAgICAgICAgICAgICAgc2VsZi51cGRhdGVDb250cm9sKClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbmhlcml0RGVmYXVsdD17dGhpcy5jb250cm9sUGFyYW1zLmRlZmF1bHRfaXNfaW5oZXJpdH1cbiAgICAgICAgICAgIG1heWJlR2V0VHlwZWtpdD17dGhpcy5tYXliZV9nZXRfdHlwZWtpdF9mb250fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVDb250cm9sKCkge1xuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCggdGhpcy5tYXliZV9nZXRfdHlwZWtpdF9mb250KHRoaXMuc3RhdGUuZm9udEZhbWlseSkgKVxuICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5zZW5kKCAnZm9udC1zZWxlY3Rpb24nLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLm1heWJlX2dldF90eXBla2l0X2ZvbnQodGhpcy5zdGF0ZS5mb250RmFtaWx5KSxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLmZvbnRGYW1pbHlTb3VyY2UsXG4gICAgICAgIGNvbnRyb2xJZDogdGhpcy5wcm9wcy5jb250cm9sLmlkLFxuICAgICAgICB0eXBlOiAnXFxcXE5ldmVcXFxcQ3VzdG9taXplclxcXFxDb250cm9sc1xcXFxSZWFjdFxcXFxGb250X0ZhbWlseScsXG4gICAgICAgIGluaGVyaXQ6IHRoaXMuY29udHJvbFBhcmFtcy5kZWZhdWx0X2lzX2luaGVyaXRcbiAgICAgIH0gKVxuICAgIH0sIDEwMCApXG4gIH1cbn1cblxuVHlwZWZhY2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZWZhY2VDb21wb25lbnRcbiIsIi8qIGdsb2JhbCB3cCwgTmV2ZVJlYWN0Q3VzdG9taXplICovXG5pbXBvcnQgRm9udFByZXZpZXdMaW5rIGZyb20gJy4vRm9udFByZXZpZXdMaW5rLmpzJ1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY29uc3Qge1xuICBQb3BvdmVyLFxuICBCdXR0b24sXG4gIFRleHRDb250cm9sLFxuICBEYXNoaWNvblxufSA9IHdwLmNvbXBvbmVudHNcblxuY29uc3Qge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50XG59ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBGb250RmFtaWx5U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb250czogTmV2ZVJlYWN0Q3VzdG9taXplLmZvbnRzLFxuICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBsb2FkVW50aWw6IDIwLFxuICAgICAgZGVsYXlGb250SW5jbHVzaW9uOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9udHMoKSB7XG4gICAgY29uc3QgZm9udEdyb3VwcyA9IHRoaXMuc3RhdGUuZm9udHNcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhmb250R3JvdXBzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmVzdWx0W2tleV0gPSBmb250R3JvdXBzW2tleV0uZmlsdGVyKHZhbHVlID0+IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLmluY2x1ZGVzKHNlbGYuc3RhdGUuc2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZ2V0Rm9udExpc3QoKSB7XG4gICAgY29uc3QgZm9udEdyb3VwcyA9IHRoaXMuZ2V0Rm9udHMoKVxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICBvcHRpb25zLnB1c2goXG4gICAgICA8bGlcbiAgICAgICAga2V5PSdkZWZhdWx0JyBjbGFzc05hbWU9eydkZWZhdWx0LXZhbHVlICcgKyAhdGhpcy5wcm9wcy5zZWxlY3RlZFxuICAgICAgICAgID8gJ3NlbGVjdGVkJ1xuICAgICAgICAgIDogJyd9XG4gICAgICA+XG4gICAgICAgIDxGb250UHJldmlld0xpbmtcbiAgICAgICAgICBmb250RmFjZT0nZGVmYXVsdCdcbiAgICAgICAgICBkZWxheUxvYWQ9e2ZhbHNlfVxuICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmluaGVyaXREZWZhdWx0XG4gICAgICAgICAgICA/IF9fKCdJbmhlcml0JywgJ25ldmUnKVxuICAgICAgICAgICAgOiBfXygnRGVmYXVsdCcsICduZXZlJyl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb250Q2hvaWNlKCdzeXN0ZW0nLCBmYWxzZSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICApXG4gICAgT2JqZWN0LmtleXMoZm9udEdyb3VwcykubWFwKChrZXkpID0+IHtcbiAgICAgIGZvbnRHcm91cHNba2V5XS5sZW5ndGggPiAwICYmIG9wdGlvbnMucHVzaChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nZm9udC1ncm91cC1oZWFkZXInIGtleT17a2V5fT5cbiAgICAgICAgICB7a2V5fVxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgICAgZm9udEdyb3Vwc1trZXldLm1hcCgoZm9udCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgc2VsZi5zdGF0ZS5sb2FkVW50aWwpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtmb250fSBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIGZvbnQgPT09IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICApID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRQcmV2aWV3TGlua1xuICAgICAgICAgICAgICAgIGRlbGF5TG9hZD17dGhpcy5zdGF0ZS5kZWxheUZvbnRJbmNsdXNpb259XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZvbnR9XG4gICAgICAgICAgICAgICAgZm9udEZhY2U9e3RoaXMucHJvcHMubWF5YmVHZXRUeXBla2l0KGZvbnQpfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvbnRDaG9pY2Uoa2V5LCBmb250KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRVbnRpbCA8IG9wdGlvbnMubGVuZ3RoICYmIHRoaXMuc3RhdGUuc2VhcmNoID09PSAnJykge1xuICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvclxuICAgICAgICAgIGtleT0nbG9hZC1tb3JlJ1xuICAgICAgICAgIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvYWRVbnRpbDogKHNlbGYuc3RhdGUubG9hZFVudGlsICsgNSksXG4gICAgICAgICAgICAgICAgZGVsYXlGb250SW5jbHVzaW9uOiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsb2FkLW1vcmUnPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249J2ltYWdlLWZpbHRlcicgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcG92ZXItY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcG92ZXItaGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCcsICduZXZlJykgKyAnLi4uJ31cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZFVudGlsOiAyMFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2xvc2UtZm9udC1zZWxlY3RvcidcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48RGFzaGljb24gaWNvbj0nbm8nIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25ldmUtZm9udHMtbGlzdCc+XG4gICAgICAgICAgICB7b3B0aW9ucy5sZW5ndGggPyBvcHRpb25zXG4gICAgICAgICAgICAgIDogPGxpIGNsYXNzTmFtZT0nbm8tcmVzdWx0JyBrZXk9J25vLXJlc3VsdHMnPntfXygnTm8gcmVzdWx0cy4nLCAnbmV2ZScpfTwvbGk+fVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBjb25zdCBkZWZhdWx0Rm9udGZhY2UgPSAnLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmJ1xuICAgIGNvbnN0IGZvbnQgPSB0aGlzLnByb3BzLm1heWJlR2V0VHlwZWtpdCggdGhpcy5wcm9wcy5zZWxlY3RlZCApXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLWZvbnQtZmFtaWx5LWNvbnRyb2wnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ0ZvbnQgRmFtaWx5JywgJ25ldmUnKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb250LWZhbWlseS1zZWxlY3Rvci10b2dnbGUnXG4gICAgICAgICAgaXNTZWNvbmRhcnlcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmYtbmFtZSc+e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgICAgICAgKHRoaXMucHJvcHMuaW5oZXJpdERlZmF1bHRcbiAgICAgICAgICAgICAgPyBfXygnSW5oZXJpdCcsICduZXZlJylcbiAgICAgICAgICAgICAgOiBfXygnRGVmYXVsdCcsICduZXZlJykpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmZi1wcmV2aWV3J1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogZm9udCB8fCBkZWZhdWx0Rm9udGZhY2VcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPkFiY1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1Zpc2libGUgJiYgKFxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249J2JvdHRvbSBsZWZ0J1xuICAgICAgICAgICAgICBvbkZvY3VzT3V0c2lkZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzVmlzaWJsZTogZmFsc2UgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvbnRzID8gdGhpcy5nZXRGb250TGlzdCgpXG4gICAgICAgICAgICAgICAgOiBfXygnTG9hZGluZy4uLicsICduZXZlJyl9XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuRm9udEZhbWlseVNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgb25Gb250Q2hvaWNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtYXliZUdldFR5cGVraXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGluaGVyaXREZWZhdWx0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb250RmFtaWx5U2VsZWN0b3JcbiIsIi8qIGdsb2JhbCB3cCAqL1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcidcblxuY29uc3Qge1xuICBDb21wb25lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNsYXNzIEZvbnRQcmV2aWV3TGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJldmlld1dhc1JlbmRlcmVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udEZhbWlseTogdGhpcy5wcm9wcy5mb250RmFjZSArICcsIHNhbnMtc2VyaWYnIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGEgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKVxuICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSduZXZlLWZvbnQtZmFtaWx5Jz57dGhpcy5wcm9wcy5sYWJlbCB8fCB0aGlzLnByb3BzLmZvbnRGYWNlfTwvc3Bhbj5cbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHtcbiAgICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJldmlld1dhc1JlbmRlcmVkOiB0cnVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgKHRoaXMuc3RhdGUucHJldmlld1dhc1JlbmRlcmVkIHx8IHRoaXMucHJvcHMuZGVsYXlMb2FkID09PVxuICAgICAgICAgICAgICBmYWxzZSlcbiAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9J25ldmUtZm9udC1wcmV2aWV3JyBzdHlsZT17c3R5bGV9PkFiYzwvc3Bhbj5cbiAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9J25ldmUtZm9udC1wcmV2aWV3ICc+Li4uPC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgPC9hPlxuICAgIClcbiAgfVxufVxuXG5Gb250UHJldmlld0xpbmsucHJvcFR5cGVzID0ge1xuICBmb250RmFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkZWxheUxvYWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRQcmV2aWV3TGlua1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIE5ldmVSZWFjdEN1c3RvbWl6ZSwgd3AgKi9cbmltcG9ydCB7IGluaXQgYXMgaW5pdER5bmFtaWNGaWVsZHMgfSBmcm9tICcuL2R5bmFtaWMtZmllbGRzL2luZGV4LmpzJ1xuaW1wb3J0IHsgVG9nZ2xlQ29udHJvbCB9IGZyb20gJy4vdG9nZ2xlL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSZXNwb25zaXZlVG9nZ2xlQ29udHJvbCB9IGZyb20gJy4vcmVzcG9uc2l2ZS10b2dnbGUvQ29udHJvbC5qcydcbmltcG9ydCB7IEJhY2tncm91bmRDb250cm9sIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBTcGFjaW5nQ29udHJvbCB9IGZyb20gJy4vc3BhY2luZy9Db250cm9sLmpzJ1xuaW1wb3J0IHsgVHlwZWZhY2VDb250cm9sIH0gZnJvbSAnLi90eXBlZmFjZS9Db250cm9sLmpzJ1xuaW1wb3J0IHsgRm9udEZhbWlseUNvbnRyb2wgfSBmcm9tICcuL2ZvbnQtZmFtaWx5L0NvbnRyb2wuanMnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbnNDb250cm9sIH0gZnJvbSAnLi9yYWRpby1idXR0b25zL0NvbnRyb2wuanMnXG5pbXBvcnQgeyBCdXR0b25BcHBlYXJhbmNlQ29udHJvbCB9IGZyb20gJy4vYnV0dG9uLWFwcGVhcmFuY2UvQ29udHJvbC5qcydcbmltcG9ydCB7IFJhbmdlQ29udHJvbCB9IGZyb20gJy4vcmFuZ2UvQ29udHJvbC5qcydcbmltcG9ydCB7IFJlc3BvbnNpdmVSYW5nZUNvbnRyb2wgfSBmcm9tICcuL3Jlc3BvbnNpdmUtcmFuZ2UvQ29udHJvbC5qcydcbmltcG9ydCB7IENvbG9yQ29udHJvbCB9IGZyb20gJy4vY29sb3IvQ29udHJvbC5qcydcbmltcG9ydCB7IFByZXNldHNTZWxlY3RvckNvbnRyb2wgfSBmcm9tICcuL3ByZXNldHMtc2VsZWN0b3IvQ29udHJvbC5qcydcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29udHJvbCB9IGZyb20gJy4vbXVsdGlzZWxlY3QvQ29udHJvbC5qcydcbmltcG9ydCB7IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb250cm9sIH0gZnJvbSAnLi9yZXNwb25zaXZlLXJhZGlvLWJ1dHRvbnMvQ29udHJvbC5qcydcbmltcG9ydCB7IFJhZGlvSW1hZ2VDb250cm9sIH0gZnJvbSAnLi9yYWRpby1pbWFnZS9Db250cm9sLmpzJ1xuXG5jb25zdCB7IGNvbnRyb2xDb25zdHJ1Y3RvciB9ID0gd3AuY3VzdG9taXplXG5cbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3RvZ2dsZV9jb250cm9sID0gVG9nZ2xlQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmVzcG9uc2l2ZV90b2dnbGVfY29udHJvbCA9IFJlc3BvbnNpdmVUb2dnbGVDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9iYWNrZ3JvdW5kX2NvbnRyb2wgPSBCYWNrZ3JvdW5kQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfc3BhY2luZyA9IFNwYWNpbmdDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV90eXBlZmFjZV9jb250cm9sID0gVHlwZWZhY2VDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9mb250X2ZhbWlseV9jb250cm9sID0gRm9udEZhbWlseUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3JhZGlvX2J1dHRvbnNfY29udHJvbCA9IFJhZGlvQnV0dG9uc0NvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2J1dHRvbl9hcHBlYXJhbmNlID0gQnV0dG9uQXBwZWFyYW5jZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3JhbmdlX2NvbnRyb2wgPSBSYW5nZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3Jlc3BvbnNpdmVfcmFuZ2VfY29udHJvbCA9IFJlc3BvbnNpdmVSYW5nZUNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX2NvbG9yX2NvbnRyb2wgPSBDb2xvckNvbnRyb2xcbmNvbnRyb2xDb25zdHJ1Y3Rvci5uZXZlX3ByZXNldHNfc2VsZWN0b3IgPSBQcmVzZXRzU2VsZWN0b3JDb250cm9sXG5jb250cm9sQ29uc3RydWN0b3IubmV2ZV9tdWx0aXNlbGVjdCA9IE11bHRpU2VsZWN0Q29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmVzcG9uc2l2ZV9yYWRpb19idXR0b25zX2NvbnRyb2wgPSBSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29udHJvbFxuY29udHJvbENvbnN0cnVjdG9yLm5ldmVfcmFkaW9faW1hZ2VfY29udHJvbCA9IFJhZGlvSW1hZ2VDb250cm9sXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG4gIC8vIFRvZG86IGRlbGV0ZSB0aGlzLlxuICB3cC5jdXN0b21pemUuc2VjdGlvbignbmV2ZV9ibG9nX2FyY2hpdmVfbGF5b3V0JykuZm9jdXMoKVxuXG4gIGNvbnN0IGRldmljZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjY3VzdG9taXplLWZvb3Rlci1hY3Rpb25zIC5kZXZpY2VzLCAuaGZnLS1jYi1kZXZpY2VzLXN3aXRjaGVyIGEuc3dpdGNoLXRvJyApXG4gIGRldmljZUJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCAnbmV2ZUNoYW5nZWRSZXBzb25zaXZlUHJldmlldycsIHtcbiAgICAgIGRldGFpbDogZS50YXJnZXQuZGF0YXNldC5kZXZpY2VcbiAgICB9IClcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBldmVudCApXG4gIH0gKVxuICBpbml0RHluYW1pY0ZpZWxkcygpXG59IClcblxud2luZG93LkhGRyA9IHtcbiAgZ2V0U2V0dGluZ3M6ICgpID0+IHtcbiAgICBjb25zdCB1c2VkU2V0dGluZ3MgPSB7fVxuICAgIE5ldmVSZWFjdEN1c3RvbWl6ZS5oZWFkZXJDb250cm9scy5tYXAoIChpdGVtKSA9PiB7XG4gICAgICBpZiAoICF3cC5jdXN0b21pemUuY29udHJvbCggaXRlbSApICkgcmV0dXJuIGZhbHNlXG4gICAgICB1c2VkU2V0dGluZ3NbaXRlbV0gPSB3cC5jdXN0b21pemUuY29udHJvbCggaXRlbSApLnNldHRpbmcuZ2V0KClcbiAgICB9IClcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHVzZWRTZXR0aW5ncyApXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IE11bHRpU2VsZWN0IGZyb20gJy4vTXVsdGlTZWxlY3QnXG5cbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5leHBvcnQgY29uc3QgTXVsdGlTZWxlY3RDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICByZW5kZXIoXG4gICAgICA8TXVsdGlTZWxlY3QgY29udHJvbD17dGhpc30gLz5cbiAgICAgICwgdGhpcy5jb250YWluZXJbMF0pXG4gIH1cbn0pXG4iLCIvKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgeyBUb29sdGlwLCBEYXNoaWNvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCBNdWx0aVNlbGVjdCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCB7IGNob2ljZXMgfSA9IGNvbnRyb2wucGFyYW1zXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29udHJvbC5zZXR0aW5nLmdldCgpKVxuXG4gIGNvbnN0IGFkZGFibGUgPSBPYmplY3Qua2V5cyhjaG9pY2VzKS5maWx0ZXIoY2hvaWNlID0+ICF2YWx1ZS5pbmNsdWRlcyhjaG9pY2UpKS5tYXAoc2x1ZyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIGtleT17c2x1Z30gdGV4dD17X18oJ0FkZCBpdGVtJywgJ25ldmUnKX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgY2xhc3NOYW1lPSd0b2tlbidcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBbLi4udmFsdWUsIHNsdWddXG4gICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZSc+e2Nob2ljZXNbc2x1Z119PC9zcGFuPlxuICAgICAgICAgIDxEYXNoaWNvbiBpY29uPSdwbHVzLWFsdCcgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9KVxuICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5maWx0ZXIoc2x1ZyA9PiBjaG9pY2VzW3NsdWddKS5tYXAoc2x1ZyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIGtleT17c2x1Z30gdGV4dD17X18oJ1JlbW92ZSBJdGVtJywgJ25ldmUnKX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J3Rva2VuJ1xuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBbLi4udmFsdWVdLmZpbHRlcih2ID0+IHYgIT09IHNsdWcpXG4gICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWwpXG4gICAgICAgICAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0aXRsZSc+e2Nob2ljZXNbc2x1Z119PC9zcGFuPlxuICAgICAgICAgIDxEYXNoaWNvbiBpY29uPSdkaXNtaXNzJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wgbmV2ZS1tdWx0aXNlbGVjdCc+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57Y29udHJvbC5wYXJhbXMubGFiZWx9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdGVkLW9wdGlvbnMnPlxuICAgICAgICB7dmFsdWVzLmxlbmd0aCA/XG4gICAgICAgICAgdmFsdWVzIDpcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsYWNlaG9sZGVyJz5cbiAgICAgICAgICAgIHtfXygnQWRkIGl0ZW1zIGJ5IGNsaWNraW5nIHRoZSBvbmVzIGJlbG93LicsICduZXZlJyl9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YWlsYWJsZS1vcHRpb25zJz5cbiAgICAgICAge2FkZGFibGUubGVuZ3RoID4gMCA/XG4gICAgICAgICAgYWRkYWJsZSA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGFjZWhvbGRlcic+XG4gICAgICAgICAgICB7X18oJ0FsbCBpdGVtcyBhcmUgYWxyZWFkeSBzZWxlY3RlZC4nLCAnbmV2ZScpfVxuICAgICAgICAgIDwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5NdWx0aVNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aVNlbGVjdFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJlc2V0c1NlbGVjdG9yIGZyb20gJy4vUHJlc2V0c1NlbGVjdG9yJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcbmV4cG9ydCBjb25zdCBQcmVzZXRzU2VsZWN0b3JDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyKFxuICAgICAgPFByZXNldHNTZWxlY3RvciBjb250cm9sPXt0aGlzfSAvPlxuICAgICAgLCB0aGlzLmNvbnRhaW5lclswXSApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBtYXliZVBhcnNlSnNvbiB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IFRvb2x0aXAgfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuY2xhc3MgUHJlc2V0c1NlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciggcHJvcHMgKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogJydcbiAgICB9XG5cbiAgICB0aGlzLnJlcGxhY2VTZXR0aW5ncyA9IHRoaXMucmVwbGFjZVNldHRpbmdzLmJpbmQoIHRoaXMgKVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSB2YWx1ZSBpbiB0aGUgY29uc29sZSB3aXRoIHRoaXMgY29tbWFuZDpcbiAgICpcbiAgICogY29weShIRkcuZ2V0U2V0dGluZ3MoKSk7XG4gICAqXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0UHJlc2V0cygpIHtcbiAgICBjb25zdCB7IHByZXNldHMgfSA9IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXNcblxuICAgIHJldHVybiBwcmVzZXRzLmZpbHRlciggKHByZXNldCkgPT4ge1xuICAgICAgcmV0dXJuIHByZXNldC5sYWJlbC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyggdGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSApXG4gICAgfSApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJlc2V0cyA9IHRoaXMuZ2V0UHJlc2V0cygpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXByZXNldC1zZWxlY3Rvcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nc2VhcmNoJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCAnU2VhcmNoIEhlYWRlciBQcmVzZXRzLi4uJyApfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoIHsgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSB9ICkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHByZXNldHMubGVuZ3RoID4gMCA/IHByZXNldHMubWFwKCAocHJlc2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGV4dD17cHJlc2V0LmxhYmVsfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlU2V0dGluZ3MoIHByZXNldC5zZXR1cCApXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcmVzZXQuaW1hZ2V9IGFsdD17cHJlc2V0LmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSApXG4gICAgICAgICAgICA6IDxwPntfXyggJ05vIGhlYWRlciBwcmVzZXRzIGZvdW5kJywgJ25ldmUnICl9PC9wPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXBsYWNlU2V0dGluZ3Moc2V0dXApIHtcbiAgICBzZXR1cCA9IG1heWJlUGFyc2VKc29uKCBzZXR1cCApXG4gICAgaWYgKCB0eXBlb2YgTmV2ZVByb1JlYWN0Q3VzdG9taXplID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgIE9iamVjdC5rZXlzKCBzZXR1cCApLm1hcCggKHRoZW1lTW9kKSA9PiB7XG4gICAgICAgIGlmICggdGhlbWVNb2QgPT09ICdoZmdfaGVhZGVyX2xheW91dCcgKSB7XG4gICAgICAgICAgd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kIClcbiAgICAgICAgICAgIC5zZXR0aW5nXG4gICAgICAgICAgICAuc2V0KCBzZXR1cFt0aGVtZU1vZF0gKVxuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLWNoYW5nZWQtYnVpbGRlci12YWx1ZScsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG1heWJlUGFyc2VKc29uKCBzZXR1cFt0aGVtZU1vZF0gKSxcbiAgICAgICAgICAgICAgICBpZDogJ2hlYWRlcidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApIClcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoICF3cC5jdXN0b21pemUuY29udHJvbCggdGhlbWVNb2QgKSApIHJldHVybiBmYWxzZVxuICAgICAgICAgIGlmICggWyd0ZXh0JywgJ3RleHRhcmVhJywgJ3NlbGVjdCddLmluY2x1ZGVzKFxuICAgICAgICAgICAgd3AuY3VzdG9taXplLmNvbnRyb2woIHRoZW1lTW9kICkucGFyYW1zLnR5cGUgKSApIHtcbiAgICAgICAgICAgIHdwLmN1c3RvbWl6ZS5jb250cm9sKCB0aGVtZU1vZCApLnNldHRpbmcuc2V0KCBzZXR1cFt0aGVtZU1vZF0gKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudCggJ25ldmUtY2hhbmdlZC1jdXN0b21pemVyLXZhbHVlJywge1xuICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2V0dXBbdGhlbWVNb2RdIHx8ICcnLFxuICAgICAgICAgICAgICAgIGlkOiB0aGVtZU1vZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICkgKVxuICAgICAgICB9XG4gICAgICB9IClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBuZXcgQ3VzdG9tRXZlbnQoICduZXZlLXByZXNldC1jaGFuZ2VkJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHRoZW1lTW9kczogc2V0dXBcbiAgICAgIH1cbiAgICB9ICkgKVxuICB9XG59XG5cblByZXNldHNTZWxlY3Rvci5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVzZXRzU2VsZWN0b3JcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFJhZGlvQnV0dG9uc0NvbXBvbmVudCBmcm9tICcuL1JhZGlvQnV0dG9uc0NvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbnNDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFkaW9CdXR0b25zQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmFkaW9JY29ucyBmcm9tICcuLi9jb21tb24vUmFkaW9JY29ucydcbmltcG9ydCBTVkcgZnJvbSAnLi4vY29tbW9uL3N2Zy5qcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudFxuXG5jb25zdCBSYWRpb0J1dHRvbnNDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGUuZGV0YWlsLnZhbHVlKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIGNvbnN0IGdldENob2ljZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc19mb3IsIGNob2ljZXMgfSA9IGNvbnRyb2wucGFyYW1zXG5cbiAgICBpZiAoIWlzX2Zvcikge1xuICAgICAgcmV0dXJuIGNob2ljZXNcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGlzX2Zvcikge1xuICAgICAgY2FzZSAnbG9nbyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0xvZ28gT25seScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubG9nb09ubHlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvZ29UaXRsZToge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0xvZ28gLSBUaXRsZSAmIFRhZ2xpbmUnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmxvZ29UaXRsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGl0bGVMb2dvOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnVGl0bGUgJiBUYWdsaW5lIC0gTG9nbycsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcudGl0bGVMb2dvXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2dvVG9wVGl0bGU6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdMb2dvIG9uIFRvcCcsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubG9nb1RvcFRpdGxlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnc3R5bGUtcGxhaW4nOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnUGxhaW4nLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVQbGFpblxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ3N0eWxlLWZ1bGwtaGVpZ2h0Jzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0JhY2tncm91bmQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVGaWxsZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgICdzdHlsZS1ib3JkZXItYm90dG9tJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0JvdHRvbSBCb3JkZXInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVVbmRlcmxpbmVcbiAgICAgICAgICB9LFxuICAgICAgICAgICdzdHlsZS1ib3JkZXItdG9wJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1RvcCBCb3JkZXInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lbnVPdmVybGluZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAnYWNjb3VudF9jb21wb25lbnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXJfaWNvbl9zdHlsZTE6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDInLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9pY29uX3N0eWxlMjoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgMScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlclJlZ3VsYXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXJfaWNvbl9zdHlsZTM6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdJY29uIFN0eWxlIDMnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm15QWNjb3VudFVzZXJUYWdTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9pY29uX3N0eWxlNDoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ0ljb24gU3R5bGUgNCcsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50VXNlckFsdFNvbGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyX2ljb25fc3R5bGU1OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnSWNvbiBTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc1NvbGlkXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyX2ljb25fc3R5bGU2OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnSWNvbiBTdHlsZSA2JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2Vyc0ZpcmVuZHNTb2xpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcl9hdmF0YXI6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdXb3JkUHJlc3MgQXZhdGFyJywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5teUFjY291bnRVc2VyQXZhdGFyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBub25lOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnTm8gSWNvbicsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcubXlBY2NvdW50Tm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSAnY2FydF9jb21wb25lbnQnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICdjYXJ0LWljb24tc3R5bGUxJzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDEnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGUxXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnY2FydC1pY29uLXN0eWxlMic6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSAyJywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTMnOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgMycsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTNcbiAgICAgICAgICB9LFxuICAgICAgICAgICdjYXJ0LWljb24tc3R5bGU0Jzoge1xuICAgICAgICAgICAgdG9vbHRpcDogX18oJ1N0eWxlIDQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLmNhcnRJY29uU3R5bGU0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnY2FydC1pY29uLXN0eWxlNSc6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdTdHlsZSA1JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5jYXJ0SWNvblN0eWxlNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NhcnQtaWNvbi1zdHlsZTYnOiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnU3R5bGUgNicsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTZcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2Jsb2dfaW1hZ2VfcG9zaXRpb24nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdMZWZ0JywgJ25ldmUnKSxcbiAgICAgICAgICAgIGljb246IFNWRy5tZWRpYUFsaWduTGVmdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbm86IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IF9fKCdObyBpbWFnZScsICduZXZlJyksXG4gICAgICAgICAgICBpY29uOiBTVkcuY2FydEljb25TdHlsZTVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICB0b29sdGlwOiBfXygnUmlnaHQnLCAnbmV2ZScpLFxuICAgICAgICAgICAgaWNvbjogU1ZHLm1lZGlhQWxpZ25SaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCB7IGxhYmVsLCBsYXJnZV9idXR0b25zLCBzaG93TGFiZWxzIH0gPSBjb250cm9sLnBhcmFtc1xuICBjb25zdCB3cmFwQ2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgWyduZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCcsIHsgJ2xhcmdlLWJ1dHRvbnMnOiBsYXJnZV9idXR0b25zID09PSB0cnVlIH1dXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwQ2xhc3Nlc30+XG4gICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICA8UmFkaW9JY29uc1xuICAgICAgICBzaG93TGFiZWxzPXtzaG93TGFiZWxzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9wdGlvbnM9e2dldENob2ljZXMoKX1cbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b25zQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBSYWRpb0ltYWdlQ29tcG9uZW50IGZyb20gJy4vUmFkaW9JbWFnZUNvbXBvbmVudC5qcydcbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBSYWRpb0ltYWdlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJhZGlvSW1hZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmFkaW9JbWFnZUNvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBjb250cm9sLnBhcmFtc1xuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlck9wdGlvbnMgPSAoKSA9PiBPYmplY3Qua2V5cyhjaG9pY2VzKS5tYXAoKGNob2ljZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIGltYWdlIH0gPSBjaG9pY2VzW2Nob2ljZV1cbiAgICBjb25zdCBidXR0b25DbGFzcyA9IGNsYXNzbmFtZXMoW3sgYWN0aXZlOiBjaG9pY2UgPT09IHZhbHVlIH1dKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0aW9uJyBrZXk9e2luZGV4fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoY2hvaWNlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17bmFtZSB8fCBgT3B0aW9uICR7Y2hvaWNlfWB9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge25hbWUgJiYgPHNwYW4+e25hbWV9PC9zcGFuPn1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSduZXZlLXJhZGlvLWltYWdlJz5cbiAgICAgIHtyZW5kZXJPcHRpb25zKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmFkaW9JbWFnZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ltYWdlQ29tcG9uZW50XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cblxuaW1wb3J0IFJhbmdlQ29tcG9uZW50IGZyb20gJy4vUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmFuZ2VDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8UmFuZ2VDb21wb25lbnQgY29udHJvbD17Y29udHJvbH0gLz4sXG4gICAgICBjb250cm9sLmNvbnRhaW5lclswXVxuICAgIClcbiAgfVxufSApXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmNvbnN0IHsgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgUmFuZ2VDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG4gICAgICB1cGRhdGVWYWx1ZXMoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSggY29udHJvbC5zZXR0aW5nLmdldCgpIClcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIGRlZmF1bHRWYWw6IDE1LFxuICAgIHN0ZXA6IDFcbiAgfVxuICBjb25zdCBjb250cm9sUHJvcHMgPSB7IC4uLmRlZmF1bHRzLCAuLi4oY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMgfHwge30pIH1cbiAgY29uc3QgeyBsYWJlbCB9ID0gY29udHJvbC5wYXJhbXNcbiAgY29uc3QgeyBkZWZhdWx0VmFsLCBtaW4sIG1heCwgc3RlcCB9ID0gY29udHJvbFByb3BzXG5cbiAgY29uc3QgdXBkYXRlVmFsdWVzID0gKG5ld1ZhbCkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbClcbiAgICBjb250cm9sLnNldHRpbmcuc2V0KG5ld1ZhbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtcmFuZ2UtY29udHJvbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS1jb250cm9sLWhlYWRlcic+XG4gICAgICAgIHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz57bGFiZWx9PC9zcGFuPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgcmVzZXRGYWxsYmFja1ZhbHVlPXtkZWZhdWx0VmFsIHx8ICcnfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgICBtaW49e21pbiA8IDAgPyBtaW4gOiAwfVxuICAgICAgICAgIG1heD17bWF4IHx8IDEwMH1cbiAgICAgICAgICBzdGVwPXtzdGVwIHx8IDF9XG4gICAgICAgICAgYWxsb3dSZXNldFxuICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dFZhbHVlKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVWYWx1ZXMobmV4dFZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SYW5nZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYW5nZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlUmFkaW9CdXR0b25zQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmFkaW9JY29ucyBmcm9tICcuLi9jb21tb24vUmFkaW9JY29ucydcbmltcG9ydCBSZXNwb25zaXZlQ29udHJvbCBmcm9tICcuLi9jb21tb24vUmVzcG9uc2l2ZSdcblxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgY29uc3QgeyBjaG9pY2VzLCBsYWJlbCB9ID0gY29udHJvbC5wYXJhbXNcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSgnZGVza3RvcCcpXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgY29udHJvbC5zZXR0aW5nLnNldChuZXdWYWx1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNNZW51QWxpZ25tZW50ID1cbiAgICAgIGNvbnRyb2wuaWQuaW5kZXhPZigncHJpbWFyeS1tZW51JykgPiAtMSB8fFxuICAgICAgY29udHJvbC5pZC5pbmRleE9mKCdzZWNvbmRhcnktbWVudScpID4gLTFcbiAgICAvLyBNaWdyYXRlIHByZXZpb3VzbHkgc3RyaW5nIHZhbHVlIGludG8gcmVzcG9uc2l2ZS5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgc2V0VmFsdWUoe1xuICAgICAgICBtb2JpbGU6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHZhbHVlLFxuICAgICAgICB0YWJsZXQ6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHZhbHVlLFxuICAgICAgICBkZXNrdG9wOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGxldCByZWNpZXZlZFZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vIE1pZ3JhdGUgcHJldmlvdXNseSBzdHJpbmcgdmFsdWUgaW50byByZXNwb25zaXZlLlxuICAgICAgaWYgKHR5cGVvZiByZWNpZXZlZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZWNpZXZlZFZhbHVlID0ge1xuICAgICAgICAgIG1vYmlsZTogaXNNZW51QWxpZ25tZW50ID8gJ2xlZnQnIDogcmVjaWV2ZWRWYWx1ZSxcbiAgICAgICAgICB0YWJsZXQ6IGlzTWVudUFsaWdubWVudCA/ICdsZWZ0JyA6IHJlY2lldmVkVmFsdWUsXG4gICAgICAgICAgZGVza3RvcDogcmVjaWV2ZWRWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIHNldFZhbHVlKHJlY2lldmVkVmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICAgIDxSZXNwb25zaXZlQ29udHJvbCBvbkNoYW5nZT17KGRldmljZSkgPT4gc2V0RGV2aWNlKGRldmljZSl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSYWRpb0ljb25zXG4gICAgICAgIHZhbHVlPXt2YWx1ZVtkZXZpY2VdfVxuICAgICAgICBvcHRpb25zPXtjaG9pY2VzfVxuICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICAgIC4uLnZhbHVlLFxuICAgICAgICAgICAgW2RldmljZV06IG5ld1ZhbFxuICAgICAgICAgIH0pXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblJlc3BvbnNpdmVSYWRpb0J1dHRvbnNDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVJhZGlvQnV0dG9uc0NvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5cbmltcG9ydCBSZXNwb25zaXZlUmFuZ2VDb21wb25lbnQgZnJvbSAnLi9SZXNwb25zaXZlUmFuZ2VDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVJhbmdlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgbWFwVmFsdWVzICovXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5pbXBvcnQgeyBtYXliZVBhcnNlSnNvbiwgZ2V0SW50VmFsQXNSZXNwb25zaXZlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbidcblxuY29uc3QgeyBSYW5nZUNvbnRyb2wsIEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudCA9ICh7IGNvbnRyb2wgfSkgPT4ge1xuICBjb25zdCBwYXJzZWRWYWx1ZSA9IG1heWJlUGFyc2VKc29uKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgY29uc3QgW2N1cnJlbnREZXZpY2UsIHNldEN1cnJlbnREZXZpY2VdID0gdXNlU3RhdGUoJ2Rlc2t0b3AnKVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHBhcnNlZFZhbHVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSWYgYSB2YWx1ZSBpcyBpbnQsIG1ha2UgaXQgcmVzcG9uc2l2ZS5cbiAgICBjb25zdCByZXNwb25zaXZlQ29udmVydGVkID0gZ2V0SW50VmFsQXNSZXNwb25zaXZlKGNvbnRyb2wuc2V0dGluZy5nZXQoKSlcbiAgICBpZiAodmFsdWUgIT09IHJlc3BvbnNpdmVDb252ZXJ0ZWQpIHtcbiAgICAgIHNldFZhbHVlKCByZXNwb25zaXZlQ29udmVydGVkIClcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHRyYW5zbGF0ZSBpbnQgdmFsdWVzIHRvIHJlc3BvbnNpdmUgdmFsdWVzLlxuICAgICAgY29uc3QgaW5jb21pbmdWYWx1ZSA9IGdldEludFZhbEFzUmVzcG9uc2l2ZShlLmRldGFpbC52YWx1ZSlcblxuICAgICAgc2V0VmFsdWUobWF5YmVQYXJzZUpzb24oaW5jb21pbmdWYWx1ZSkpXG4gICAgICBjb250cm9sLnNldHRpbmcuc2V0KEpTT04uc3RyaW5naWZ5KGluY29taW5nVmFsdWUpKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHsgbGFiZWwgfSA9IGNvbnRyb2wucGFyYW1zXG4gIGNvbnN0IHsgaGlkZVJlc3BvbnNpdmUsIHVuaXRzLCBkZWZhdWx0VmFsLCBzdGVwLCBtaW4sIG1heCB9ID0gY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnNcblxuICBjb25zdCB1bml0QnV0dG9ucyA9ICgpID0+IHtcbiAgICBpZiAoIXVuaXRzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdHMubWFwKCh1bml0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uQ2xhc3MgPSBjbGFzc25hbWVzKHsgYWN0aXZlOiB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2UgKyAnLXVuaXQnXSA9PT0gdW5pdCB9KVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaXNTbWFsbFxuICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0geyAuLi52YWx1ZSB9XG4gICAgICAgICAgICBuZXh0VmFsdWVbY3VycmVudERldmljZSArICctdW5pdCddID0gdW5pdFxuICAgICAgICAgICAgaWYgKHVuaXQgIT09ICdlbScpIHtcbiAgICAgICAgICAgICAgbmV4dFZhbHVlW2N1cnJlbnREZXZpY2VdID0gbWFwVmFsdWVzKFxuICAgICAgICAgICAgICAgIG5leHRWYWx1ZVtjdXJyZW50RGV2aWNlXSxcbiAgICAgICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogdmFsdWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VmFsdWUobmV4dFZhbHVlKVxuICAgICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXh0VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt1bml0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY29udHJvbEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICB7bGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+e2xhYmVsfTwvc3Bhbj59XG4gICAgICAgIDxSZXNwb25zaXZlQ29udHJvbFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZGV2aWNlKSA9PiBzZXRDdXJyZW50RGV2aWNlKGRldmljZSl9XG4gICAgICAgICAgaGlkZVJlc3BvbnNpdmU9e2hpZGVSZXNwb25zaXZlIHx8IGZhbHNlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+XG4gICAgICAgICAge3VuaXRCdXR0b25zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVmFsdWVzID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0geyAuLi52YWx1ZSB9XG4gICAgbmV4dFZhbHVlW2N1cnJlbnREZXZpY2VdID0gbmV3VmFsdWVcbiAgICBzZXRWYWx1ZShuZXh0VmFsdWUpXG4gICAgY29udHJvbC5zZXR0aW5nLnNldChKU09OLnN0cmluZ2lmeShuZXh0VmFsdWUpKVxuICB9XG5cbiAgY29uc3QgZGlzcGxheVZhbHVlID0gcGFyc2VJbnQodmFsdWVbY3VycmVudERldmljZV0pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25ldmUtd2hpdGUtYmFja2dyb3VuZC1jb250cm9sIG5ldmUtcmFuZ2UtY29udHJvbCc+XG4gICAgICB7Y29udHJvbEhlYWRlcigpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLXdyYXAnPlxuICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgcmVzZXRGYWxsYmFja1ZhbHVlPXtkZWZhdWx0VmFsW2N1cnJlbnREZXZpY2VdfVxuICAgICAgICAgIHZhbHVlPXtkaXNwbGF5VmFsdWUgfHwgJyd9XG4gICAgICAgICAgbWluPXttaW4gPCAwID8gbWluIDogMH1cbiAgICAgICAgICBtYXg9e21heCB8fCAxMDB9XG4gICAgICAgICAgc3RlcD17c3RlcCB8fCAxfVxuICAgICAgICAgIGFsbG93UmVzZXRcbiAgICAgICAgICBvbkNoYW5nZT17KG5leHRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVmFsdWVzKG5leHRWYWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVzcG9uc2l2ZVJhbmdlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVSYW5nZUNvbXBvbmVudFxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUmVzcG9uc2l2ZVRvZ2dsZUNvbXBvbmVudCBmcm9tICcuL1Jlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgUmVzcG9uc2l2ZVRvZ2dsZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoIHtcbiAgcmVuZGVyQ29udGVudDogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpc1xuICAgIHJlbmRlcihcbiAgICAgIDxSZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0gKVxuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuLyogZ2xvYmFsIHdwICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1Jlc3BvbnNpdmUnXG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnQgPSAoeyBjb250cm9sIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoIWUuZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKGUuZGV0YWlsLmlkICE9PSBjb250cm9sLmlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgc2V0VmFsdWUoZS5kZXRhaWwudmFsdWUpXG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250cm9sLnNldHRpbmcuZ2V0KCkpXG4gIGNvbnN0IFtkZXZpY2UsIHNldERldmljZV0gPSB1c2VTdGF0ZSgnZGVza3RvcCcpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wgZmxleC1jb250ZW50cyc+XG4gICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICBjbGFzc05hbWU9J25ldmUtdG9nZ2xlLWNvbnRyb2wnXG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlW2RldmljZV19XG4gICAgICAgIGxhYmVsPXtjb250cm9sLnBhcmFtcy5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHsgLi4udmFsdWUgfVxuICAgICAgICAgIG5leHRWYWx1ZVtkZXZpY2VdID0gbmV3VmFsdWVcbiAgICAgICAgICBzZXRWYWx1ZShuZXh0VmFsdWUpXG4gICAgICAgICAgY29udHJvbC5zZXR0aW5nLnNldChuZXh0VmFsdWUpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFJlc3BvbnNpdmVDb250cm9sXG4gICAgICAgIGV4Y2x1ZGVkPXtjb250cm9sLnBhcmFtcy5leGNsdWRlZCB8fCBbXX1cbiAgICAgICAgb25DaGFuZ2U9eyhkZXZpY2UpID0+IHtcbiAgICAgICAgICBzZXREZXZpY2UoZGV2aWNlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5SZXNwb25zaXZlVG9nZ2xlQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgY29udHJvbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFNwYWNpbmdDb21wb25lbnQgZnJvbSAnLi9TcGFjaW5nQ29tcG9uZW50LmpzJ1xuY29uc3QgeyByZW5kZXIgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGNvbnN0IFNwYWNpbmdDb250cm9sID0gd3AuY3VzdG9taXplLkNvbnRyb2wuZXh0ZW5kKCB7XG4gIHJlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXNcbiAgICByZW5kZXIoXG4gICAgICA8U3BhY2luZ0NvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCwgbG9kYXNoICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlc3BvbnNpdmVDb250cm9sIGZyb20gJy4uL2NvbW1vbi9SZXNwb25zaXZlLmpzJ1xuaW1wb3J0IFNpemluZ0NvbnRyb2wgZnJvbSAnLi4vY29tbW9uL1NpemluZy5qcydcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24nXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgeyBtYXBWYWx1ZXMgfSA9IGxvZGFzaFxuXG5jbGFzcyBTcGFjaW5nQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICBtaW46IC0zMDAsXG4gICAgICBtYXg6IDMwMCxcbiAgICAgIGhpZGVSZXNwb25zaXZlQnV0dG9uczogZmFsc2UsXG4gICAgICB1bml0czogWydweCcsICdlbScsICclJ11cbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xQYXJhbXMgPSBwcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRycyA/IHtcbiAgICAgIC4uLmRlZmF1bHRQYXJhbXMsXG4gICAgICAuLi5wcm9wcy5jb250cm9sLnBhcmFtcy5pbnB1dF9hdHRyc1xuICAgIH0gOiBkZWZhdWx0UGFyYW1zXG5cbiAgICBjb25zdCBiYXNlRGVmYXVsdCA9IHtcbiAgICAgIG1vYmlsZTogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIHRhYmxldDogeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfSxcbiAgICAgIGRlc2t0b3A6IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICAgICAnbW9iaWxlLXVuaXQnOiAncHgnLFxuICAgICAgJ3RhYmxldC11bml0JzogJ3B4JyxcbiAgICAgICdkZXNrdG9wLXVuaXQnOiAncHgnXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gcHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdCA/IHtcbiAgICAgIC4uLmJhc2VEZWZhdWx0LFxuICAgICAgLi4ucHJvcHMuY29udHJvbC5wYXJhbXMuZGVmYXVsdFxuICAgIH0gOiBiYXNlRGVmYXVsdFxuXG4gICAgY29uc3QgZGJWYWwgPSBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICBjb25zdCB2YWx1ZSA9IG1lcmdlRGVlcCh0aGlzLmRlZmF1bHRWYWx1ZSwgZGJWYWwpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBsaW5rZWQ6IHRydWUsXG4gICAgICBjdXJyZW50RGV2aWNlOiAnZGVza3RvcCdcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQoKSkge1xuICAgICAgdGhpcy5zdGF0ZS5saW5rZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuc2hvdWxkVmFsdWVzQmVMaW5rZWQgPSB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkLmJpbmQodGhpcylcbiAgICB0aGlzLmdldEJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlVmFsdWUgPSB0aGlzLnVwZGF0ZVZhbHVlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZS5iaW5kKHRoaXMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RvcCcsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmlnaHQnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnYm90dG9tJyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5ib3R0b21cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdsZWZ0JyxcbiAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgICB9XG4gICAgXVxuICAgIGNvbnN0IHsgaGlkZVJlc3BvbnNpdmVCdXR0b25zIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICAnbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnLFxuICAgICAgJ25ldmUtc2l6aW5nJ1xuICAgIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtY29udHJvbC1oZWFkZXInPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsICYmXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgIDxSZXNwb25zaXZlQ29udHJvbFxuICAgICAgICAgICAgaGlkZVJlc3BvbnNpdmU9e2hpZGVSZXNwb25zaXZlQnV0dG9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3VycmVudERldmljZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGlua2VkOiB0aGlzLnNob3VsZFZhbHVlc0JlTGlua2VkKCkgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS11bml0cyc+XG4gICAgICAgICAgICB7dGhpcy5nZXRCdXR0b25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l6aW5nQ29udHJvbFxuICAgICAgICAgIG1pbj17dGhpcy5jb250cm9sUGFyYW1zLm1pbn1cbiAgICAgICAgICBtYXg9e3RoaXMuY29udHJvbFBhcmFtcy5tYXh9XG4gICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2UgKyAnLXVuaXQnXSA9PT1cbiAgICAgICAgICAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRzPXt0aGlzLmRlZmF1bHRWYWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdfVxuICAgICAgICAgIGxpbmtlZD17dGhpcy5zdGF0ZS5saW5rZWR9XG4gICAgICAgICAgb25MaW5rZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsaW5rZWQ6ICF0aGlzLnN0YXRlLmxpbmtlZCB9KX1cbiAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShvcHRpb25UeXBlLCBudW1lcmljVmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMuZGVmYXVsdFZhbHVlIH0pXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodGhpcy5kZWZhdWx0VmFsdWUpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCB7IHVuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8QnV0dG9uIGlzU21hbGwgZGlzYWJsZWQgY2xhc3NOYW1lPSdhY3RpdmUgYWxvbmUnPnt1bml0c1swXX08L0J1dHRvbj5cbiAgICB9XG4gICAgcmV0dXJuIHVuaXRzLm1hcCgodW5pdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZTogc2VsZi5zdGF0ZS52YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2UgK1xuICAgICAgICAgICctdW5pdCddID09PSB1bml0XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlzU21hbGxcbiAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbkNsYXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0geyAuLi5zZWxmLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgICAgIHZhbHVlW3NlbGYuc3RhdGUuY3VycmVudERldmljZSArICctdW5pdCddID0gdW5pdFxuICAgICAgICAgICAgaWYgKHVuaXQgIT09ICdlbScpIHtcbiAgICAgICAgICAgICAgdmFsdWVbc2VsZi5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IG1hcFZhbHVlcyhcbiAgICAgICAgICAgICAgICB2YWx1ZVtzZWxmLnN0YXRlLmN1cnJlbnREZXZpY2VdLFxuICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgICAgICAgc2VsZi5wcm9wcy5jb250cm9sLnNldHRpbmcuc2V0KHZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgID57dW5pdH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHNldFZhbHVlKG9wdGlvblR5cGUsIG51bWVyaWNWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0geyAuLi50aGlzLnN0YXRlLnZhbHVlIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5saW5rZWQpIHtcbiAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0gPSBtYXBWYWx1ZXMoXG4gICAgICAgIHZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0sICgpID0+IG51bWVyaWNWYWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSA9IHtcbiAgICAgICAgLi4udmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXSxcbiAgICAgICAgW29wdGlvblR5cGVdOiBudW1lcmljVmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQodmFsdWUpXG4gIH1cblxuICBzaG91bGRWYWx1ZXNCZUxpbmtlZCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlW3RoaXMuc3RhdGUuY3VycmVudERldmljZV0udG9wLFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLnJpZ2h0LFxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZVt0aGlzLnN0YXRlLmN1cnJlbnREZXZpY2VdLmJvdHRvbSxcbiAgICAgIHRoaXMuc3RhdGUudmFsdWVbdGhpcy5zdGF0ZS5jdXJyZW50RGV2aWNlXS5sZWZ0XG4gICAgXVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICByZXR1cm4gdmFsdWVzLmV2ZXJ5KHZhbHVlID0+IHZhbHVlID09IHZhbHVlc1swXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmV2ZS1jaGFuZ2VkLWN1c3RvbWl6ZXItdmFsdWUnLCAoZSkgPT4ge1xuICAgICAgaWYgKCFlLmRldGFpbCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZS5kZXRhaWwuaWQgIT09IGNvbnRyb2wuaWQpIHJldHVybiBmYWxzZVxuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGUuZGV0YWlsLnZhbHVlIHx8IHRoaXMuZGVmYXVsdFZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuU3BhY2luZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGFjaW5nQ29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjb250cm9scy5jc3NcIjsiLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBUb2dnbGVDb21wb25lbnQgZnJvbSAnLi9Ub2dnbGVDb21wb25lbnQuanMnXG5jb25zdCB7IHJlbmRlciB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgY29uc3QgVG9nZ2xlQ29udHJvbCA9IHdwLmN1c3RvbWl6ZS5Db250cm9sLmV4dGVuZCgge1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFRvZ2dsZUNvbXBvbmVudCBjb250cm9sPXtjb250cm9sfSAvPixcbiAgICAgIGNvbnRyb2wuY29udGFpbmVyWzBdXG4gICAgKVxuICB9XG59IClcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCB7XG4gIENvbXBvbmVudFxufSA9IHdwLmVsZW1lbnRcblxuY29uc3Qge1xuICBUb2dnbGVDb250cm9sXG59ID0gd3AuY29tcG9uZW50c1xuXG5jbGFzcyBUb2dnbGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KClcbiAgICB9XG4gIH1cblxuICB0b2dnbGVWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgIH0gKVxuICAgIHRoaXMucHJvcHMuY29udHJvbC5zZXR0aW5nLnNldCggbmV3VmFsdWUgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV2ZS13aGl0ZS1iYWNrZ3JvdW5kLWNvbnRyb2wnPlxuICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgIGNsYXNzTmFtZT0nbmV2ZS10b2dnbGUtY29udHJvbCdcbiAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmxhYmVsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMudG9nZ2xlVmFsdWUoIHZhbHVlICl9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLWRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29udHJvbCB9ID0gdGhpcy5wcm9wc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICduZXZlLWNoYW5nZWQtY3VzdG9taXplci12YWx1ZScsIChlKSA9PiB7XG4gICAgICBpZiAoICFlLmRldGFpbCApIHJldHVybiBmYWxzZVxuICAgICAgaWYgKCBlLmRldGFpbC5pZCAhPT0gY29udHJvbC5pZCApIHJldHVybiBmYWxzZVxuICAgICAgdGhpcy50b2dnbGVWYWx1ZSggZS5kZXRhaWwudmFsdWUgKVxuICAgIH0gKVxuICB9XG59XG5cblRvZ2dsZUNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVDb21wb25lbnRcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbi8qIGdsb2JhbCB3cCAqL1xuaW1wb3J0IFR5cGVmYWNlQ29tcG9uZW50IGZyb20gJy4vVHlwZWZhY2VDb21wb25lbnQuanMnXG5cbmNvbnN0IHsgcmVuZGVyIH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBjb25zdCBUeXBlZmFjZUNvbnRyb2wgPSB3cC5jdXN0b21pemUuQ29udHJvbC5leHRlbmQoe1xuICByZW5kZXJDb250ZW50OiBmdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzXG4gICAgcmVuZGVyKFxuICAgICAgPFR5cGVmYWNlQ29tcG9uZW50IGNvbnRyb2w9e2NvbnRyb2x9IC8+LFxuICAgICAgY29udHJvbC5jb250YWluZXJbMF1cbiAgICApXG4gIH1cbn0pXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG4vKiBnbG9iYWwgd3AgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOdW1iZXJDb250cm9sIGZyb20gJy4uL2NvbW1vbi9OdW1iZXJDb250cm9sLmpzJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50XG5cbmNvbnN0IHtcbiAgU2VsZWN0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHNcblxuY2xhc3MgVHlwZWZhY2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCB2YWx1ZSA9IHByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKVxuICAgIGxldCBkZWZhdWx0UGFyYW1zID0ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiA0MDAsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6IDE1LFxuICAgICAgICB0YWJsZXQ6IDE1LFxuICAgICAgICBkZXNrdG9wOiAxNVxuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogMS42LFxuICAgICAgICB0YWJsZXQ6IDEuNixcbiAgICAgICAgZGVza3RvcDogMS42XG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6IDAsXG4gICAgICAgIHRhYmxldDogMCxcbiAgICAgICAgZGVza3RvcDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIXZhbHVlICkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldEVtcHR5VmFsdWUoKVxuICAgIH1cblxuICAgIGlmICggcHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMubGVuZ3RoICkge1xuICAgICAgY29uc3QgaW5wdXRfYXR0cnMgPSBKU09OLnBhcnNlKHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzKVxuICAgICAgaWYgKCBpbnB1dF9hdHRycy5kZWZhdWx0X2lzX2VtcHR5ICkge1xuICAgICAgICBkZWZhdWx0UGFyYW1zID0gdGhpcy5nZXRFbXB0eURlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBpcyBzZWxlY3RlZC5cbiAgICB2YWx1ZS5saW5lSGVpZ2h0ID0gdmFsdWUubGluZUhlaWdodCB8fCBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHRcbiAgICB2YWx1ZS5saW5lSGVpZ2h0LnN1ZmZpeCA9IHZhbHVlLmxpbmVIZWlnaHQuc3VmZml4IHx8IGRlZmF1bHRQYXJhbXMubGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhcblxuICAgIHRoaXMuY29udHJvbFBhcmFtcyA9IHByb3BzLmNvbnRyb2wucGFyYW1zLmlucHV0X2F0dHJzID8ge1xuICAgICAgLi4uZGVmYXVsdFBhcmFtcyxcbiAgICAgIC4uLkpTT04ucGFyc2UocHJvcHMuY29udHJvbC5wYXJhbXMuaW5wdXRfYXR0cnMpXG4gICAgfSA6IGRlZmF1bHRQYXJhbXNcblxuICAgIC8vIEFkZGVkIExhdGVyLiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN1ZmZpeCBmb3IgbGluZSBoZWlnaHQuXG4gICAgdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4ID0gdGhpcy5jb250cm9sUGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4IHx8XG4gICAgICBkZWZhdWx0UGFyYW1zLmxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudERldmljZTogJ2Rlc2t0b3AnLFxuICAgICAgZm9udFNpemU6IHZhbHVlLmZvbnRTaXplLFxuICAgICAgbGluZUhlaWdodDogdmFsdWUubGluZUhlaWdodCxcbiAgICAgIGxldHRlclNwYWNpbmc6IHZhbHVlLmxldHRlclNwYWNpbmcsXG4gICAgICBmb250V2VpZ2h0OiB2YWx1ZS5mb250V2VpZ2h0LFxuICAgICAgdGV4dFRyYW5zZm9ybTogdmFsdWUudGV4dFRyYW5zZm9ybSxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJGb250V2VpZ2h0ID0gdGhpcy5yZW5kZXJGb250V2VpZ2h0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0gPSB0aGlzLnJlbmRlclRleHRUcmFuc2Zvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyRm9udFNpemUgPSB0aGlzLnJlbmRlckZvbnRTaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbmRlckxpbmVIZWlnaHQgPSB0aGlzLnJlbmRlckxpbmVIZWlnaHQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZyA9IHRoaXMucmVuZGVyTGV0dGVyU3BhY2luZy5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGVWYWx1ZXMgPSB0aGlzLnVwZGF0ZVZhbHVlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBnZXRFbXB0eVZhbHVlKCBwcm9wID0gJycgKSB7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9IHtcbiAgICAgIGN1cnJlbnREZXZpY2U6ICdkZXNrdG9wJyxcbiAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVIZWlnaHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyU3BhY2luZzoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub25lJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZsYWc6IGZhbHNlXG4gICAgfVxuICAgIGlmICggcHJvcCAmJiBlbXB0eVZhbHVlW3Byb3BdICkge1xuICAgICAgcmV0dXJuIGVtcHR5VmFsdWVbcHJvcF1cbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5VmFsdWVcbiAgfVxuXG4gIGdldEVtcHR5RGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2l6ZV91bml0czogWydlbScsICdweCddLFxuICAgICAgbGluZV9oZWlnaHRfdW5pdHM6IFsnZW0nLCAncHgnXSxcbiAgICAgIHdlaWdodF9kZWZhdWx0OiAnbm9uZScsXG4gICAgICB0ZXh0X3RyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgc2l6ZV9kZWZhdWx0OiB7XG4gICAgICAgIHN1ZmZpeDoge1xuICAgICAgICAgIG1vYmlsZTogJ3B4JyxcbiAgICAgICAgICB0YWJsZXQ6ICdweCcsXG4gICAgICAgICAgZGVza3RvcDogJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfSxcbiAgICAgIGxpbmVfaGVpZ2h0X2RlZmF1bHQ6IHtcbiAgICAgICAgc3VmZml4OiB7XG4gICAgICAgICAgbW9iaWxlOiAnZW0nLFxuICAgICAgICAgIHRhYmxldDogJ2VtJyxcbiAgICAgICAgICBkZXNrdG9wOiAnZW0nXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZTogJycsXG4gICAgICAgIHRhYmxldDogJycsXG4gICAgICAgIGRlc2t0b3A6ICcnXG4gICAgICB9LFxuICAgICAgbGV0dGVyX3NwYWNpbmdfZGVmYXVsdDoge1xuICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICB0YWJsZXQ6ICcnLFxuICAgICAgICBkZXNrdG9wOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5sYWJlbCAmJlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3VzdG9taXplLWNvbnRyb2wtdGl0bGUnPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29udHJvbC5wYXJhbXMubGFiZWx9XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25ldmUtdHlwZWZhY2UtY29udHJvbCBuZXZlLXdoaXRlLWJhY2tncm91bmQtY29udHJvbCc+XG4gICAgICAgICAge3RoaXMucmVuZGVyVGV4dFRyYW5zZm9ybSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckZvbnRXZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJGb250U2l6ZSgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckxpbmVIZWlnaHQoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMZXR0ZXJTcGFjaW5nKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICB1cGRhdGVWYWx1ZXModmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5zZXQoe1xuICAgICAgLi4udGhpcy5wcm9wcy5jb250cm9sLnNldHRpbmcuZ2V0KCksXG4gICAgICAuLi52YWx1ZSxcbiAgICAgIGZsYWc6ICF0aGlzLnByb3BzLmNvbnRyb2wuc2V0dGluZy5nZXQoKS5mbGFnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlckZvbnRXZWlnaHQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtaW5saW5lIGZvbnQtd2VpZ2h0Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXN0b21pemUtY29udHJvbC10aXRsZSc+XG4gICAgICAgICAge19fKCdXZWlnaHQnLCAnbmV2ZScpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9udFdlaWdodH1cbiAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICB7IHZhbHVlOiAnbm9uZScsIGxhYmVsOiBfXyggJ05vbmUnLCAnbmV2ZScgKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMTAwLCBsYWJlbDogJzEwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDIwMCwgbGFiZWw6ICcyMDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAzMDAsIGxhYmVsOiAnMzAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNDAwLCBsYWJlbDogJzQwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDUwMCwgbGFiZWw6ICc1MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA2MDAsIGxhYmVsOiAnNjAwJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogNzAwLCBsYWJlbDogJzcwMCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDgwMCwgbGFiZWw6ICc4MDAnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiA5MDAsIGxhYmVsOiAnOTAwJyB9XG4gICAgICAgICAgXX1cbiAgICAgICAgICBvbkNoYW5nZT17KGZvbnRXZWlnaHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250V2VpZ2h0IH0pXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRXZWlnaHQgfSlcbiAgICAgICAgICAgIGlmICggZm9udFdlaWdodCA9PT0gJ25vbmUnICYmIHRoaXMucHJvcHMuY29udHJvbC5wYXJhbXMucmVmcmVzaF9vbl9yZXNldCApIHtcbiAgICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyVGV4dFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1pbmxpbmUgdGV4dC10cmFuc2Zvcm0nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2N1c3RvbWl6ZS1jb250cm9sLXRpdGxlJz5cbiAgICAgICAgICB7X18oJ1RyYW5zZm9ybScsICduZXZlJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0VHJhbnNmb3JtfVxuICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgIHsgdmFsdWU6ICdub25lJywgbGFiZWw6IF9fKCdOb25lJywgJ25ldmUnKSB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2NhcGl0YWxpemUnLCBsYWJlbDogX18oJ0NhcGl0YWxpemUnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAnbG93ZXJjYXNlJywgbGFiZWw6IF9fKCdMb3dlcmNhc2UnLCAnbmV2ZScpIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAndXBwZXJjYXNlJywgbGFiZWw6IF9fKCdVcHBlcmNhc2UnLCAnbmV2ZScpIH1cbiAgICAgICAgICBdfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodGV4dFRyYW5zZm9ybSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRUcmFuc2Zvcm0gfSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHsgdGV4dFRyYW5zZm9ybSB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJGb250U2l6ZSgpIHtcbiAgICBsZXQgeyBmb250U2l6ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgc2l6ZV9kZWZhdWx0LCBzaXplX3VuaXRzIH0gPSB0aGlzLmNvbnRyb2xQYXJhbXNcbiAgICBpZiAoICFmb250U2l6ZSApIHtcbiAgICAgIGZvbnRTaXplID0gdGhpcy5nZXRFbXB0eVZhbHVlKCdmb250U2l6ZScgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdmb250LXNpemUnXG4gICAgICAgIGxhYmVsPXtfXygnRm9udCBTaXplJywgJ25ldmUnKX1cbiAgICAgICAgZGVmYXVsdD17c2l6ZV9kZWZhdWx0W2N1cnJlbnREZXZpY2VdfVxuICAgICAgICB2YWx1ZT17Zm9udFNpemVbY3VycmVudERldmljZV19XG4gICAgICAgIHN0ZXA9e2ZvbnRTaXplLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9PT0gJ2VtJyA/IDAuMSA6IDF9XG4gICAgICAgIHVuaXRzPXtzaXplX3VuaXRzfVxuICAgICAgICBhY3RpdmVVbml0PXtmb250U2l6ZS5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIGhhc1Jlc3BvbnNpdmVcbiAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvbnRTaXplXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSB2YWxcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9udFNpemU6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHZhbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBmb250U2l6ZVxuICAgICAgICAgIHZhbHVlLnN1ZmZpeFtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IHNpemVfZGVmYXVsdFtjdXJyZW50RGV2aWNlXVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb250U2l6ZTogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGZvbnRTaXplOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJMaW5lSGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgbGluZV9oZWlnaHRfZGVmYXVsdCwgbGluZV9oZWlnaHRfdW5pdHMgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxpbmVIZWlnaHQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsaW5lSGVpZ2h0ICkge1xuICAgICAgbGluZUhlaWdodCA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGluZUhlaWdodCcgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsaW5lLWhlaWdodCdcbiAgICAgICAgbGFiZWw9e19fKCdMaW5lIEhlaWdodCcsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC4xIDogMX1cbiAgICAgICAgZGVmYXVsdD17bGluZV9oZWlnaHRfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xpbmVIZWlnaHRbY3VycmVudERldmljZV19XG4gICAgICAgIHVuaXRzPXtsaW5lX2hlaWdodF91bml0c31cbiAgICAgICAgYWN0aXZlVW5pdD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV19XG4gICAgICAgIG1heD17bGluZUhlaWdodC5zdWZmaXhbY3VycmVudERldmljZV0gPT09ICdlbScgPyA0IDogMjAwfVxuICAgICAgICBtaW49e2xpbmVIZWlnaHQuc3VmZml4W2N1cnJlbnREZXZpY2VdID09PSAnZW0nID8gMC41IDogMX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZUhlaWdodFxuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4ID0gdmFsdWUuc3VmZml4IHx8IGxpbmVfaGVpZ2h0X2RlZmF1bHQuc3VmZml4XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gbGluZV9oZWlnaHRfZGVmYXVsdC5zdWZmaXhbY3VycmVudERldmljZV1cbiAgICAgICAgICB2YWx1ZVtjdXJyZW50RGV2aWNlXSA9IGxpbmVfaGVpZ2h0X2RlZmF1bHRbY3VycmVudERldmljZV1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGluZUhlaWdodDogdmFsdWUgfSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgaWYgKCB0aGlzLnByb3BzLmNvbnRyb2wucGFyYW1zLnJlZnJlc2hfb25fcmVzZXQgKSB7XG4gICAgICAgICAgICB3cC5jdXN0b21pemUucHJldmlld2VyLnJlZnJlc2goKVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25Vbml0Q2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lSGVpZ2h0XG4gICAgICAgICAgdmFsdWUuc3VmZml4W2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmVIZWlnaHQ6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsaW5lSGVpZ2h0OiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZWREZXZpY2U9eyhjdXJyZW50RGV2aWNlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVudERldmljZSB9KX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyTGV0dGVyU3BhY2luZygpIHtcbiAgICBjb25zdCB7IGxldHRlcl9zcGFjaW5nX2RlZmF1bHQgfSA9IHRoaXMuY29udHJvbFBhcmFtc1xuICAgIGNvbnN0IHsgY3VycmVudERldmljZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCB7IGxldHRlclNwYWNpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoICFsZXR0ZXJTcGFjaW5nICkge1xuICAgICAgbGV0dGVyU3BhY2luZyA9IHRoaXMuZ2V0RW1wdHlWYWx1ZSgnbGV0dGVyU3BhY2luZycgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE51bWJlckNvbnRyb2xcbiAgICAgICAgY2xhc3NOYW1lPSdsZXR0ZXItc3BhY2luZydcbiAgICAgICAgbGFiZWw9e19fKCdMZXR0ZXIgU3BhY2luZycsICduZXZlJyl9XG4gICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgZGVmYXVsdD17bGV0dGVyX3NwYWNpbmdfZGVmYXVsdFtjdXJyZW50RGV2aWNlXX1cbiAgICAgICAgdmFsdWU9e2xldHRlclNwYWNpbmcgJiYgbGV0dGVyU3BhY2luZ1tjdXJyZW50RGV2aWNlXSA/IGxldHRlclNwYWNpbmdbY3VycmVudERldmljZV0gOiAnJ31cbiAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgbWluPXstNX1cbiAgICAgICAgdW5pdHM9e1sncHgnXX1cbiAgICAgICAgaGFzUmVzcG9uc2l2ZVxuICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGV0dGVyU3BhY2luZ1xuICAgICAgICAgIHZhbHVlW2N1cnJlbnREZXZpY2VdID0gdmFsXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICB9fVxuICAgICAgICBvblJlc2V0PXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBsZXR0ZXJTcGFjaW5nXG4gICAgICAgICAgdmFsdWVbY3VycmVudERldmljZV0gPSBsZXR0ZXJfc3BhY2luZ19kZWZhdWx0W2N1cnJlbnREZXZpY2VdXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxldHRlclNwYWNpbmc6IHZhbHVlIH0pXG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoeyBsZXR0ZXJTcGFjaW5nOiB2YWx1ZSB9KVxuICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5jb250cm9sLnBhcmFtcy5yZWZyZXNoX29uX3Jlc2V0ICkge1xuICAgICAgICAgICAgd3AuY3VzdG9taXplLnByZXZpZXdlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2hhbmdlZERldmljZT17KGN1cnJlbnREZXZpY2UpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50RGV2aWNlIH0pfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuVHlwZWZhY2VDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBjb250cm9sOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHlwZWZhY2VDb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9