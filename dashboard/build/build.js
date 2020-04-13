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

/***/ "./node_modules/fuse.js/dist/fuse.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Fuse.js v5.1.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function bitapScore(
  pattern,
  { errors = 0, currentLocation = 0, expectedLocation = 0, distance = 100 }
) {
  const accuracy = errors / pattern.length;
  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function matchedIndiced(matchmask = [], minMatchCharLength = 1) {
  let matchedIndices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices
}

function bitapSearch(
  text,
  pattern,
  patternAlphabet,
  {
    location = 0,
    distance = 100,
    threshold = 0.6,
    findAllMatches = false,
    minMatchCharLength = 1,
    includeMatches = false
  }
) {
  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = text.indexOf(pattern, expectedLocation);

  // a mask of the matches
  const matchMask = [];
  for (let i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    let score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation,
      distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      let score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation,
        distance
      });
      currentThreshold = Math.min(score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen <= 31 ? patternLen - 1 : 30);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = bitapScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i !== 0) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = bitapScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  let result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: !finalScore ? 0.001 : finalScore
  };

  if (includeMatches) {
    result.matchedIndices = matchedIndiced(matchMask, minMatchCharLength);
  }

  return result
}

function patternAlphabet(pattern) {
  let mask = {};
  let len = pattern.length;

  for (let i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (let i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] |= 1 << (len - i - 1);
  }

  return mask
}

// Machine word size
const MAX_BITS = 32;

class BitapSearch {
  constructor(
    pattern,
    {
      // Approximately where in the text is the pattern expected to be found?
      location = 0,
      // Determines how close the match must be to the fuzzy location (specified above).
      // An exact letter match which is 'distance' characters away from the fuzzy location
      // would score as a complete mismatch. A distance of '0' requires the match be at
      // the exact location specified, a threshold of '1000' would require a perfect match
      // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
      distance = 100,
      // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
      // (of both letters and location), a threshold of '1.0' would match anything.
      threshold = 0.6,
      // Indicates whether comparisons should be case sensitive.
      isCaseSensitive = false,
      // When true, the algorithm continues searching to the end of the input even if a perfect
      // match is found before the end of the same input.
      findAllMatches = false,
      // Minimum number of characters that must be matched before a result is considered a match
      minMatchCharLength = 1,

      includeMatches = false
    }
  ) {
    this.options = {
      location,
      distance,
      threshold,
      isCaseSensitive,
      findAllMatches,
      includeMatches,
      minMatchCharLength
    };

    if (pattern.length > MAX_BITS) {
      throw new Error(`Pattern length exceeds max of ${MAX_BITS}.`)
    }

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.patternAlphabet = patternAlphabet(this.pattern);
  }

  searchIn(value) {
    let text = value.$;
    return this.searchInString(text)
  }

  searchInString(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.matchedIndices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength
    } = this.options;
    return bitapSearch(text, this.pattern, this.patternAlphabet, {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      includeMatches
    })
  }
}

// Token: 'file
// Match type: exact-match
// Description: Items that include `file`

const isForPattern = (pattern) => pattern.charAt(0) == "'";

const sanitize = (pattern) => pattern.substr(1);

const match = (pattern, text) => {
  const sanitizedPattern = sanitize(pattern);
  const index = text.indexOf(sanitizedPattern);
  const isMatch = index > -1;

  return {
    isMatch,
    score: 0
  }
};

var exactMatch = {
  isForPattern,
  sanitize,
  match
};

// Token: !fire
// Match type: inverse-exact-match
// Description: Items that do not include `fire`

const isForPattern$1 = (pattern) => pattern.charAt(0) == '!';

const sanitize$1 = (pattern) => pattern.substr(1);

const match$1 = (pattern, text) => {
  const sanitizedPattern = sanitize$1(pattern);
  const isMatch = text.indexOf(sanitizedPattern) === -1;

  return {
    isMatch,
    score: 0
  }
};

var inverseExactMatch = {
  isForPattern: isForPattern$1,
  sanitize: sanitize$1,
  match: match$1
};

// Token: ^file
// Match type: prefix-exact-match
// Description: Items that start with `file`

const isForPattern$2 = (pattern) => pattern.charAt(0) == '^';

const sanitize$2 = (pattern) => pattern.substr(1);

const match$2 = (pattern, text) => {
  const sanitizedPattern = sanitize$2(pattern);
  const isMatch = text.startsWith(sanitizedPattern);

  return {
    isMatch,
    score: 0
  }
};

var prefixExactMatch = {
  isForPattern: isForPattern$2,
  sanitize: sanitize$2,
  match: match$2
};

// Token: !^fire
// Match type: inverse-prefix-exact-match
// Description: Items that do not start with `fire`

const isForPattern$3 = (pattern) =>
  pattern.charAt(0) == '!' && pattern.charAt(1) == '^';

const sanitize$3 = (pattern) => pattern.substr(2);

const match$3 = (pattern, text) => {
  const sanitizedPattern = sanitize$3(pattern);
  const isMatch = !text.startsWith(sanitizedPattern);

  return {
    isMatch,
    score: 0
  }
};

var inversePrefixExactMatch = {
  isForPattern: isForPattern$3,
  sanitize: sanitize$3,
  match: match$3
};

// Token: .file$
// Match type: suffix-exact-match
// Description: Items that end with `.file`

const isForPattern$4 = (pattern) => pattern.charAt(pattern.length - 1) == '$';

const sanitize$4 = (pattern) => pattern.substr(0, pattern.length - 1);

const match$4 = (pattern, text) => {
  const sanitizedPattern = sanitize$4(pattern);
  const isMatch = text.endsWith(sanitizedPattern);

  return {
    isMatch,
    score: 0
  }
};

var suffixExactMatch = {
  isForPattern: isForPattern$4,
  sanitize: sanitize$4,
  match: match$4
};

// Token: !.file$
// Match type: inverse-suffix-exact-match
// Description: Items that do not end with `.file`

const isForPattern$5 = (pattern) =>
  pattern.charAt(0) == '!' && pattern.charAt(pattern.length - 1) == '$';

const sanitize$5 = (pattern) => pattern.substring(1, pattern.length - 1);

const match$5 = (pattern, text) => {
  const sanitizedPattern = sanitize$5(pattern);
  const isMatch = !text.endsWith(sanitizedPattern);

  return {
    isMatch,
    score: 0
  }
};

var inverseSuffixExactMatch = {
  isForPattern: isForPattern$5,
  sanitize: sanitize$5,
  match: match$5
};

const INFINITY = 1 / 0;

const isArray = (value) =>
  !Array.isArray
    ? Object.prototype.toString.call(value) === '[object Array]'
    : Array.isArray(value);

// Adapted from:
// https://github.com/lodash/lodash/blob/f4ca396a796435422bd4fd41fadbd225edddf175/.internal/baseToString.js
const baseToString = (value) => {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
};

const toString = (value) => (value == null ? '' : baseToString(value));

const isString = (value) => typeof value === 'string';

const isNumber = (value) => typeof value === 'number';

const isDefined = (value) => value !== undefined && value !== null;

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
const queryfy = (pattern) =>
  pattern.split('|').map((item) => item.trim().split(/ +/g));

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that match `jscript`             |
 * | `'python`   | exact-match                | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(pattern, options) {
    const { isCaseSensitive } = options;
    this.query = null;
    this.options = options;
    // A <pattern>:<BitapSearch> key-value pair for optimizing searching
    this._fuzzyCache = {};

    if (isString(pattern) && pattern.trim().length > 0) {
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = queryfy(this.pattern);
    }
  }

  searchIn(value) {
    const query = this.query;

    if (!this.query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    let text = value.$;

    text = this.options.isCaseSensitive ? text : text.toLowerCase();

    let matchFound = false;

    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const parts = query[i];
      let result = null;
      matchFound = true;

      for (let j = 0, pLen = parts.length; j < pLen; j += 1) {
        let token = parts[j];
        result = this._search(token, text);
        if (!result.isMatch) {
          // AND condition, short-circuit and move on to next part
          matchFound = false;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (matchFound) {
        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }

  _search(pattern, text) {
    if (exactMatch.isForPattern(pattern)) {
      return exactMatch.match(pattern, text)
    } else if (prefixExactMatch.isForPattern(pattern)) {
      return prefixExactMatch.match(pattern, text)
    } else if (inversePrefixExactMatch.isForPattern(pattern)) {
      return inversePrefixExactMatch.match(pattern, text)
    } else if (inverseSuffixExactMatch.isForPattern(pattern)) {
      return inverseSuffixExactMatch.match(pattern, text)
    } else if (suffixExactMatch.isForPattern(pattern)) {
      return suffixExactMatch.match(pattern, text)
    } else if (inverseExactMatch.isForPattern(pattern)) {
      return inverseExactMatch.match(pattern, text)
    } else {
      let searcher = this._fuzzyCache[pattern];
      if (!searcher) {
        searcher = new BitapSearch(pattern, this.options);
        this._fuzzyCache[pattern] = searcher;
      }
      return searcher.searchInString(text)
    }
  }
}

const NGRAM_LEN = 3;

function ngram(
  text,
  { n = NGRAM_LEN, pad = true, sort = false }
) {
  let nGrams = [];

  if (text === null || text === undefined) {
    return nGrams
  }

  text = text.toLowerCase();
  if (pad) {
    text = ` ${text} `;
  }

  let index = text.length - n + 1;
  if (index < 1) {
    return nGrams
  }

  while (index--) {
    nGrams[index] = text.substr(index, n);
  }

  if (sort) {
    nGrams.sort((a, b) => (a == b ? 0 : a < b ? -1 : 1));
  }

  return nGrams
}

// Assumes arrays are sorted
function union (arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let item1 = arr1[i];
    let item2 = arr2[j];

    if (item1 < item2) {
      result.push(item1);
      i += 1;
    } else if (item2 < item1) {
      result.push(item2);
      j += 1;
    } else {
      result.push(item2);
      i += 1;
      j += 1;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }

  return result
}

// Assumes arrays are sorted
function intersection(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    let item1 = arr1[i];
    let item2 = arr2[j];

    if (item1 == item2) {
      result.push(item1);
      i += 1;
      j += 1;
    } else if (item1 < item2) {
      i += 1;
    } else if (item1 > item2) {
      j += 1;
    } else {
      i += 1;
      j += 1;
    }
  }

  return result
}

function jaccardDistance(nGram1, nGram2) {
  let nGramUnion = union(nGram1, nGram2);
  let nGramIntersection = intersection(nGram1, nGram2);

  return 1 - nGramIntersection.length / nGramUnion.length
}

class NGramSearch {
  constructor(pattern, options = { threshold: 0.6 }) {
    // Create the ngram, and sort it
    this.options = options;
    this.patternNgram = ngram(pattern, { sort: true });
  }
  searchIn(value) {
    let textNgram = value.ng;
    if (!textNgram) {
      textNgram = ngram(value.$, { sort: true });
      value.ng = textNgram;
    }

    let jacardResult = jaccardDistance(this.patternNgram, textNgram);

    const isMatch = jacardResult < this.options.threshold;

    return {
      score: isMatch ? jacardResult : 1,
      isMatch
    }
  }
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const _get = (obj, path) => {
    if (!path) {
      // If there's no path left, we've gotten to the object we care about.
      list.push(obj);
    } else {
      const dotIndex = path.indexOf('.');

      let key = path;
      let remaining = null;

      if (dotIndex !== -1) {
        key = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      }

      const value = obj[key];

      if (isDefined(value)) {
        if (!remaining && (isString(value) || isNumber(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          // Search each item in the array.
          for (let i = 0, len = value.length; i < len; i += 1) {
            _get(value[i], remaining);
          }
        } else if (remaining) {
          // An object. Recurse further.
          _get(value, remaining);
        }
      }
    }
  };

  _get(obj, path);

  if (arr) {
    return list
  }

  return list[0]
}

function createIndex(
  keys,
  list,
  { getFn = get, ngrams = false } = {}
) {
  let indexedList = [];

  // List is Array<String>
  if (isString(list[0])) {
    // Iterate over every string in the list
    for (let i = 0, len = list.length; i < len; i += 1) {
      const value = list[i];

      if (isDefined(value)) {
        // if (!isCaseSensitive) {
        //   value = value.toLowerCase()
        // }

        let record = {
          $: value,
          idx: i
        };

        if (ngrams) {
          record.ng = ngram(value, { sort: true });
        }

        indexedList.push(record);
      }
    }
  } else {
    // List is Array<Object>
    const keysLen = keys.length;

    for (let i = 0, len = list.length; i < len; i += 1) {
      let item = list[i];

      let record = { idx: i, $: {} };

      // Iterate over every key (i.e, path), and fetch the value at that key
      for (let j = 0; j < keysLen; j += 1) {
        let key = keys[j];
        let value = getFn(item, key);

        if (!isDefined(value)) {
          continue
        }

        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ arrayIndex: -1, value }];

          while (stack.length) {
            const { arrayIndex, value } = stack.pop();

            if (!isDefined(value)) {
              continue
            }

            if (isString(value)) {
              // if (!isCaseSensitive) {
              //   v = v.toLowerCase()
              // }

              let subRecord = { $: value, idx: arrayIndex };

              if (ngrams) {
                subRecord.ng = ngram(value, { sort: true });
              }

              subRecords.push(subRecord);
            } else if (isArray(value)) {
              for (let k = 0, arrLen = value.length; k < arrLen; k += 1) {
                stack.push({
                  arrayIndex: k,
                  value: value[k]
                });
              }
            }
          }
          record.$[key] = subRecords;
        } else {
          // if (!isCaseSensitive) {
          //   value = value.toLowerCase()
          // }

          let subRecord = { $: value };

          if (ngrams) {
            subRecord.ng = ngram(value, { sort: true });
          }

          record.$[key] = subRecord;
        }
      }

      indexedList.push(record);
    }
  }

  return indexedList
}

class KeyStore {
  constructor(keys) {
    this._keys = {};
    this._keyNames = [];
    this._length = keys.length;

    // Iterate over every key
    if (keys.length && isString(keys[0])) {
      for (let i = 0; i < this._length; i += 1) {
        const key = keys[i];
        this._keys[key] = {
          weight: 1
        };
        this._keyNames.push(key);
      }
    } else {
      let totalWeight = 0;

      for (let i = 0; i < this._length; i += 1) {
        const key = keys[i];

        if (!Object.prototype.hasOwnProperty.call(key, 'name')) {
          throw new Error('Missing "name" property in key object')
        }

        const keyName = key.name;
        this._keyNames.push(keyName);

        if (!Object.prototype.hasOwnProperty.call(key, 'weight')) {
          throw new Error('Missing "weight" property in key object')
        }

        const weight = key.weight;

        if (weight <= 0 || weight >= 1) {
          throw new Error(
            '"weight" property in key must be in the range of (0, 1)'
          )
        }

        this._keys[keyName] = {
          weight
        };

        totalWeight += weight;
      }

      // Normalize weights so that their sum is equal to 1
      for (let i = 0; i < this._length; i += 1) {
        const keyName = this._keyNames[i];
        const keyWeight = this._keys[keyName].weight;
        this._keys[keyName].weight = keyWeight / totalWeight;
      }
    }
  }
  get(key, name) {
    return this._keys[key] ? this._keys[key][name] : -1
  }
  keys() {
    return this._keyNames
  }
  count() {
    return this._length
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  for (let i = 0, len = matches.length; i < len; i += 1) {
    let match = matches[i];

    if (!isDefined(match.indices) || match.indices.length === 0) {
      continue
    }

    let obj = {
      indices: match.indices,
      value: match.value
    };

    if (match.key) {
      obj.key = match.key;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  }
}

function transformScore(result, data) {
  data.score = result.score;
}

const BasicOptions = {
  // When true, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // Minimum number of characters that must be matched before a result is considered a match
  findAllMatches: false,
  includeMatches: false,
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1,
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function
  sortFn: (a, b) => a.score - b.score
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // Enabled extended-searching
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get
};

const defaultOptions = {
  ...BasicOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

class Fuse {
  constructor(list, options = defaultOptions, index = null) {
    this.options = { ...defaultOptions, ...options };
    // `caseSensitive` is deprecated, use `isCaseSensitive` instead
    this.options.isCaseSensitive = options.caseSensitive;
    delete this.options.caseSensitive;

    this._processKeys(this.options.keys);
    this.setCollection(list, index);
  }

  setCollection(list, index = null) {
    this.list = list;
    this.listIsStringArray = isString(list[0]);

    if (index) {
      this.setIndex(index);
    } else {
      this.setIndex(this._createIndex());
    }
  }

  setIndex(listIndex) {
    this._indexedList = listIndex;
  }

  _processKeys(keys) {
    this._keyStore = new KeyStore(keys);
  }

  _createIndex() {
    return createIndex(this._keyStore.keys(), this.list, {
      getFn: this.options.getFn
    })
  }

  search(pattern, opts = { limit: false }) {
    const { useExtendedSearch, shouldSort } = this.options;

    let searcher = null;

    if (useExtendedSearch) {
      searcher = new ExtendedSearch(pattern, this.options);
    } else if (pattern.length > MAX_BITS) {
      searcher = new NGramSearch(pattern, this.options);
    } else {
      searcher = new BitapSearch(pattern, this.options);
    }

    let results = this._searchUsing(searcher);

    this._computeScore(results);

    if (shouldSort) {
      this._sort(results);
    }

    if (opts.limit && isNumber(opts.limit)) {
      results = results.slice(0, opts.limit);
    }

    return this._format(results)
  }

  _searchUsing(searcher) {
    const list = this._indexedList;
    const results = [];
    const { includeMatches } = this.options;

    // List is Array<String>
    if (this.listIsStringArray) {
      // Iterate over every string in the list
      for (let i = 0, len = list.length; i < len; i += 1) {
        let value = list[i];
        let { $: text, idx } = value;

        if (!isDefined(text)) {
          continue
        }

        let searchResult = searcher.searchIn(value);

        const { isMatch, score } = searchResult;

        if (!isMatch) {
          continue
        }

        let match = { score, value: text };

        if (includeMatches) {
          match.indices = searchResult.matchedIndices;
        }

        results.push({
          item: text,
          idx,
          matches: [match]
        });
      }
    } else {
      // List is Array<Object>
      const keyNames = this._keyStore.keys();
      const keysLen = this._keyStore.count();

      for (let i = 0, len = list.length; i < len; i += 1) {
        let { $: item, idx } = list[i];

        if (!isDefined(item)) {
          continue
        }

        let matches = [];

        // Iterate over every key (i.e, path), and fetch the value at that key
        for (let j = 0; j < keysLen; j += 1) {
          let key = keyNames[j];
          let value = item[key];

          if (!isDefined(value)) {
            continue
          }

          if (isArray(value)) {
            for (let k = 0, len = value.length; k < len; k += 1) {
              let arrItem = value[k];
              let text = arrItem.$;
              let idx = arrItem.idx;

              if (!isDefined(text)) {
                continue
              }

              let searchResult = searcher.searchIn(arrItem);

              const { isMatch, score } = searchResult;

              if (!isMatch) {
                continue
              }

              let match = { score, key, value: text, idx };

              if (includeMatches) {
                match.indices = searchResult.matchedIndices;
              }

              matches.push(match);
            }
          } else {
            let text = value.$;
            let searchResult = searcher.searchIn(value);

            const { isMatch, score } = searchResult;

            if (!isMatch) {
              continue
            }

            let match = { score, key, value: text };

            if (includeMatches) {
              match.indices = searchResult.matchedIndices;
            }

            matches.push(match);
          }
        }

        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      }
    }

    return results
  }

  _computeScore(results) {
    for (let i = 0, len = results.length; i < len; i += 1) {
      const result = results[i];
      const matches = result.matches;
      const scoreLen = matches.length;

      let totalWeightedScore = 1;

      for (let j = 0; j < scoreLen; j += 1) {
        const item = matches[j];
        const key = item.key;
        const keyWeight = this._keyStore.get(key, 'weight');
        const weight = keyWeight > -1 ? keyWeight : 1;
        const score =
          item.score === 0 && keyWeight > -1 ? Number.EPSILON : item.score;

        totalWeightedScore *= Math.pow(score, weight);
      }

      result.score = totalWeightedScore;
    }
  }

  _sort(results) {
    results.sort(this.options.sortFn);
  }

  _format(results) {
    const finalOutput = [];

    const { includeMatches, includeScore } = this.options;

    let transformers = [];

    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);

    for (let i = 0, len = results.length; i < len; i += 1) {
      const result = results[i];
      const { idx } = result;

      const data = {
        item: this.list[idx],
        refIndex: idx
      };

      if (transformers.length) {
        for (let j = 0, len = transformers.length; j < len; j += 1) {
          transformers[j](result, data);
        }
      }

      finalOutput.push(data);
    }

    return finalOutput
  }
}

Fuse.version = '5.1.0';
Fuse.createIndex = createIndex;
Fuse.defaultOptions = defaultOptions;

/* harmony default export */ __webpack_exports__["default"] = (Fuse);


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

/***/ "./src/Components/Accordion.js":
/*!*************************************!*\
  !*** ./src/Components/Accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */

var useState = wp.element.useState;
var Dashicon = wp.components.Dashicon;

var Accordion = function Accordion(props) {
  var isOpen = props.isOpen,
      title = props.title,
      children = props.children;

  var _useState = useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(['accordion', {
    'open': open,
    'closed': !open
  }]);
  return wp.element.createElement("div", {
    className: classes
  }, wp.element.createElement("button", {
    "aria-expanded": open,
    className: "accordion-header",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, title && wp.element.createElement("div", {
    className: "accordion-title"
  }, title), wp.element.createElement(Dashicon, {
    icon: open ? 'arrow-up-alt2' : 'arrow-down-alt2'
  })), wp.element.createElement("div", {
    className: "accordion-body",
    style: {
      height: open ? 'auto' : '0px'
    }
  }, children && children));
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/Components/App.js":
/*!*******************************!*\
  !*** ./src/Components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/Components/Header.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications */ "./src/Components/Notifications.js");
/* harmony import */ var _TabsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabsContent */ "./src/Components/TabsContent.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/Components/Sidebar.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./src/Components/Loading.js");
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Snackbar */ "./src/Components/Snackbar.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */







var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;

var App = function App(_ref) {
  var setSettings = _ref.setSettings,
      toast = _ref.toast,
      currentTab = _ref.currentTab,
      setTab = _ref.setTab,
      isOnboarding = _ref.isOnboarding;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  useEffect(function () {
    var settings;
    wp.api.loadPromise.then(function () {
      settings = new wp.api.models.Settings();
      settings.fetch().then(function (r) {
        setSettings(r);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return wp.element.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  var wrapClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()(['content-wrap', {
    'is-onboarding': isOnboarding && 'starter-sites' === currentTab,
    'starter-sites': 'starter-sites' === currentTab
  }]);
  return wp.element.createElement(Fragment, null, wp.element.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
    currentTab: currentTab,
    setTab: setTab
  }), wp.element.createElement("div", {
    className: wrapClasses
  }, wp.element.createElement("div", {
    className: "container content"
  }, wp.element.createElement("div", {
    className: "main"
  }, 'starter-sites' !== currentTab && wp.element.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_1__["default"], null), wp.element.createElement(_TabsContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentTab: currentTab,
    setTab: setTab
  })), 'starter-sites' !== currentTab && wp.element.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: currentTab
  }))), toast && wp.element.createElement(_Snackbar__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _setSettings = _dispatch.setSettings,
      _setTab = _dispatch.setTab;

  return {
    setSettings: function setSettings(object) {
      return _setSettings(object);
    },
    setTab: function setTab(tab) {
      return _setTab(tab);
    }
  };
}), withSelect(function (select) {
  var _select = select('neve-dashboard'),
      getToast = _select.getToast,
      getTab = _select.getTab;

  var _select2 = select('neve-onboarding'),
      getOnboardingStatus = _select2.getOnboardingStatus;

  return {
    toast: getToast(),
    currentTab: getTab(),
    isOnboarding: getOnboardingStatus()
  };
}))(App));

/***/ }),

/***/ "./src/Components/Card.js":
/*!********************************!*\
  !*** ./src/Components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* global neveDash */


var Card = function Card(props) {
  var icon = props.icon,
      iconAlt = props.iconAlt,
      title = props.title,
      description = props.description,
      children = props.children,
      classNames = props.classNames;
  return wp.element.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['card', classNames])
  }, wp.element.createElement("div", {
    className: "card-header"
  }, icon && wp.element.createElement("img", {
    className: "icon",
    src: icon,
    alt: iconAlt || 'icon'
  }), title && wp.element.createElement("h3", {
    className: "title"
  }, title)), wp.element.createElement("div", {
    className: "card-content"
  }, description && wp.element.createElement("p", {
    className: "card-description"
  }, description), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Components/Content/Changelog.js":
/*!*********************************************!*\
  !*** ./src/Components/Content/Changelog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Accordion */ "./src/Components/Accordion.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;

var Changelog = function Changelog(props) {
  var _neveDash = neveDash,
      changelog = _neveDash.changelog,
      changelogPro = _neveDash.changelogPro;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showForPro = _useState2[0],
      setShowForPro = _useState2[1];

  return wp.element.createElement("div", {
    className: "card"
  }, changelogPro && wp.element.createElement("div", {
    className: "changelog-tabs"
  }, wp.element.createElement("span", null, __('Show changelog for', 'neve')), wp.element.createElement("a", {
    className: !showForPro && 'active',
    onClick: function onClick() {
      setShowForPro(false);
    }
  }, __('Neve', 'neve')), wp.element.createElement("a", {
    className: showForPro && 'active',
    onClick: function onClick() {
      setShowForPro(true);
    }
  }, __('Neve Pro', 'neve'))), (showForPro ? changelogPro : changelog).map(function (entry, index) {
    var date = entry.date,
        version = entry.version,
        tweaks = entry.tweaks,
        fixes = entry.fixes,
        features = entry.features;

    if (!tweaks && !fixes && !features) {
      return null;
    }

    var title = wp.element.createElement(Fragment, null, wp.element.createElement("span", {
      className: "version"
    }, "v", version), " - ", wp.element.createElement("span", {
      className: "date"
    }, date));
    return wp.element.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
      isOpen: 0 === index,
      title: title
    }, features && wp.element.createElement("div", {
      className: "features changelog-category"
    }, wp.element.createElement("div", {
      className: "label-wrap"
    }, wp.element.createElement("span", {
      className: "label success"
    }, __('Features', 'neve'))), wp.element.createElement("ul", {
      className: "entries"
    }, features.map(function (feature) {
      return wp.element.createElement("li", null, feature);
    }))), fixes && wp.element.createElement("div", {
      className: "bugs changelog-category"
    }, wp.element.createElement("div", {
      className: "label-wrap"
    }, wp.element.createElement("span", {
      className: "label error"
    }, __('Bug Fixes', 'neve'))), wp.element.createElement("ul", {
      className: "entries"
    }, fixes.map(function (fix) {
      return wp.element.createElement("li", null, fix);
    }))), tweaks && wp.element.createElement("div", {
      className: "tweaks changelog-category"
    }, wp.element.createElement("div", {
      className: "label-wrap"
    }, wp.element.createElement("span", {
      className: "label info"
    }, __('Tweaks', 'neve'))), wp.element.createElement("ul", {
      className: "entries"
    }, tweaks.map(function (tweak) {
      return wp.element.createElement("li", null, tweak);
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Changelog);

/***/ }),

/***/ "./src/Components/Content/FreePro.js":
/*!*******************************************!*\
  !*** ./src/Components/Content/FreePro.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatureRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FeatureRow */ "./src/Components/FeatureRow.js");
/* global neveDash */

var __ = wp.i18n.__;
var Button = wp.components.Button;

var Pro = function Pro(props) {
  var _neveDash = neveDash,
      featureData = _neveDash.featureData;
  return wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement("table", {
    className: "card table"
  }, wp.element.createElement("tbody", {
    className: "table-body"
  }, wp.element.createElement("tr", {
    className: "table-head"
  }, wp.element.createElement("th", {
    className: "large"
  }), wp.element.createElement("th", {
    className: "indicator"
  }, __('Neve', 'neve')), wp.element.createElement("th", {
    className: "indicator"
  }, __('Neve Pro', 'neve'))), featureData.map(function (item) {
    return wp.element.createElement(_FeatureRow__WEBPACK_IMPORTED_MODULE_0__["default"], {
      item: item
    });
  }))), wp.element.createElement("div", {
    className: "card upsell"
  }, wp.element.createElement("p", null, __('Get access to all Pro features and power-up your website', 'neve')), wp.element.createElement(Button, {
    href: neveDash.upgradeURL,
    isPrimary: true
  }, __('Get Neve Pro Now', 'neve'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pro);

/***/ }),

/***/ "./src/Components/Content/Help.js":
/*!****************************************!*\
  !*** ./src/Components/Content/Help.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card */ "./src/Components/Card.js");
/* global neveDash */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var Button = wp.components.Button;

var Help = function Help(props) {
  var setTab = props.setTab;
  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'buoy.svg',
    title: __('Contact Support', 'neve'),
    description: __('We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve')
  }, wp.element.createElement(Button, {
    isPrimary: true,
    isLarge: true,
    href: "https://wordpress.org/support/theme/neve/"
  }, __('Contact Support', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'list.svg',
    title: __('Changelog', 'neve'),
    description: __('Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return setTab('changelog');
    }
  }, __('View Changelog', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'tachometer.svg',
    title: __('Speed up your site', 'neve'),
    description: __('If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/63-speed-up-your-wordpress-site"
  }, __('Learn More', 'neve')))), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'page.svg',
    title: __('Documentation', 'neve'),
    description: __('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "https://docs.themeisle.com/article/946-neve-doc"
  }, __('Go to docs', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'clone.svg',
    title: __('Create a child theme', 'neve'),
    description: __('If you want to make changes to the theme\'s files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
  }, __('Learn More', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'arrows.svg',
    title: __('Build a landing page with a drag-and-drop content builder', 'neve'),
    description: __('In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder"
  }, __('Learn More', 'neve')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "./src/Components/Content/Plugins.js":
/*!*******************************************!*\
  !*** ./src/Components/Content/Plugins.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PluginCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PluginCard */ "./src/Components/PluginCard.js");
/* global neveDash */

var Fragment = wp.element.Fragment;

var Header = function Header() {
  var _neveDash = neveDash,
      plugins = _neveDash.plugins;

  if (!plugins) {
    return null;
  }

  return wp.element.createElement(Fragment, null, Object.keys(plugins).map(function (slug) {
    return wp.element.createElement(_PluginCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: slug,
      slug: slug,
      data: plugins[slug]
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Components/Content/Pro.js":
/*!***************************************!*\
  !*** ./src/Components/Content/Pro.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModuleCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ModuleCard */ "./src/Components/ModuleCard.js");
/* global neveDash */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

var Pro = function Pro(props) {
  var _neveDash = neveDash,
      modules = _neveDash.modules;
  return wp.element.createElement("div", {
    className: "col"
  }, Object.keys(modules).map(function (id) {
    return wp.element.createElement(_ModuleCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
      slug: id
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pro);

/***/ }),

/***/ "./src/Components/Content/Start.js":
/*!*****************************************!*\
  !*** ./src/Components/Content/Start.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card */ "./src/Components/Card.js");
/* global neveDash */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var Button = wp.components.Button;

var Start = function Start(props) {
  var setTab = props.setTab;
  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'squares.svg',
    title: __('Starter Sites', 'neve'),
    description: __('Neve now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve')
  }, wp.element.createElement(Button, {
    isPrimary: true,
    isLarge: true,
    onClick: function onClick() {
      setTab('starter-sites');
    }
  }, __('Go to Starter Sites', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'page.svg',
    title: __('Getting Started? Check help and docs', 'neve'),
    description: __('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return setTab('help');
    }
  }, __('Go to docs', 'neve')))), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    classNames: "customizer-quick-links",
    icon: neveDash.assets + 'compass.svg',
    title: __('Customizer quick links', 'neve'),
    description: __('Join the community of Neve users. Get connected, share opinions, ask questions and help each other!', 'neve')
  }, renderCustomizerLinks())));
};

var renderCustomizerLinks = function renderCustomizerLinks() {
  var links = neveDash.customizerShortcuts;
  var split = Math.ceil(links.length / 2);
  var parts = [links.slice(0, split), links.slice(split)];
  return wp.element.createElement("div", {
    className: "columns"
  }, parts.map(function (column) {
    return wp.element.createElement("div", {
      className: "col"
    }, column.map(function (item, index) {
      return wp.element.createElement(Fragment, null, wp.element.createElement(Button, {
        isLink: true,
        href: item.link
      }, item.text), index !== column.length - 1 && wp.element.createElement("hr", null));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Start);

/***/ }),

/***/ "./src/Components/Content/StarterSites.js":
/*!************************************************!*\
  !*** ./src/Components/Content/StarterSites.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/rest */ "./src/utils/rest.js");
/* harmony import */ var _Onboarding_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Onboarding/Loading */ "./src/Components/Onboarding/Loading.js");
/* harmony import */ var _Onboarding_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Onboarding/Main */ "./src/Components/Onboarding/Main.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */



var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;

var StarterSites = function StarterSites(_ref) {
  var sites = _ref.sites,
      setSites = _ref.setSites,
      setUpsells = _ref.setUpsells,
      setMigrationData = _ref.setMigrationData;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  useEffect(function () {
    if (sites) {
      setLoading(false);
    } else {
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["get"])(neveDash.onboarding.root + '/initialize_sites_library').then(function (r) {
        setLoading(false);

        if (!r.success) {
          setError(true);
        } else {
          console.log(r);
          var _r$data = r.data,
              remote = _r$data.remote,
              upsell = _r$data.upsell,
              migrate_data = _r$data.migrate_data;
          setSites(remote);
          setUpsells(upsell);
          setMigrationData(migrate_data);
        }
      });
    }
  }, []);

  if (error) {
    return wp.element.createElement("h1", null, "Error.");
  }

  return loading ? wp.element.createElement(_Onboarding_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], null) : wp.element.createElement(_Onboarding_Main__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      _setSites = _dispatch.setSites,
      _setUpsells = _dispatch.setUpsells,
      _setMigrationData = _dispatch.setMigrationData;

  return {
    setSites: function setSites(sites) {
      return _setSites(sites);
    },
    setUpsells: function setUpsells(upsells) {
      return _setUpsells(upsells);
    },
    setMigrationData: function setMigrationData(migrationData) {
      return _setMigrationData(migrationData);
    }
  };
}), withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites;

  return {
    sites: getSites()
  };
}))(StarterSites));

/***/ }),

/***/ "./src/Components/FeatureRow.js":
/*!**************************************!*\
  !*** ./src/Components/FeatureRow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dashicon = wp.components.Dashicon;
var useState = wp.element.useState;


var FeatureRow = function FeatureRow(_ref) {
  var item = _ref.item;
  var title = item.title,
      description = item.description,
      inLite = item.inLite;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      tooltip = _useState2[0],
      toggleTooltip = _useState2[1];

  var showTooltip = function showTooltip() {
    return toggleTooltip(true);
  };

  var hideTooltip = function hideTooltip() {
    return toggleTooltip(false);
  };

  return wp.element.createElement("tr", {
    className: "feature-row"
  }, wp.element.createElement("td", {
    className: "large"
  }, wp.element.createElement("div", {
    className: "feat-wrap"
  }, wp.element.createElement("h4", null, title), wp.element.createElement("a", {
    href: "#",
    onMouseEnter: function onMouseEnter(e) {
      e.preventDefault();
      showTooltip();
    },
    onMouseLeave: function onMouseLeave(e) {
      e.preventDefault();
      hideTooltip();
    },
    onFocus: function onFocus(e) {
      e.preventDefault();
      showTooltip();
    },
    onBlur: function onBlur(e) {
      e.preventDefault();
      hideTooltip();
    },
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, wp.element.createElement(Dashicon, {
    icon: "info"
  }), tooltip && wp.element.createElement("div", {
    className: "tooltip-content"
  }, wp.element.createElement("p", null, description))))), wp.element.createElement("td", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['indicator', {
      'error': !inLite,
      'success': inLite
    }])
  }, wp.element.createElement(Dashicon, {
    size: 30,
    icon: inLite ? 'yes' : 'no-alt'
  })), wp.element.createElement("td", {
    className: "indicator success"
  }, wp.element.createElement(Dashicon, {
    size: 30,
    icon: "yes"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureRow);

/***/ }),

/***/ "./src/Components/Header.js":
/*!**********************************!*\
  !*** ./src/Components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* global neveDash */

var __ = wp.i18n.__;
var useEffect = wp.element.useEffect;

var Header = function Header(props) {
  useEffect(function () {
    var hash = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getTabHash"])();

    if (null === hash) {
      return false;
    }

    props.setTab(hash);
  }, []);
  return wp.element.createElement("header", null, wp.element.createElement("div", {
    className: "container"
  }, renderHead(), renderNavigation(props)));
};

var renderHead = function renderHead() {
  return wp.element.createElement("div", {
    className: "top"
  }, wp.element.createElement("h1", {
    className: "heading"
  }, neveDash.strings.header), wp.element.createElement("span", {
    className: "version"
  }, neveDash.version), wp.element.createElement("img", {
    src: neveDash.assets + '/logo.svg',
    alt: __('Neve Theme Logo', 'neve')
  }));
};

var renderNavigation = function renderNavigation(props) {
  var currentTab = props.currentTab,
      setTab = props.setTab;
  return wp.element.createElement("nav", {
    className: "navigation"
  }, Object.keys(_utils_common__WEBPACK_IMPORTED_MODULE_0__["tabs"]).map(function (item) {
    return wp.element.createElement("li", null, wp.element.createElement("a", {
      href: "#",
      className: currentTab === item ? 'active' : '',
      onClick: function onClick(e) {
        e.preventDefault();
        setTab(item);
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["addUrlHash"])(item);
      }
    }, _utils_common__WEBPACK_IMPORTED_MODULE_0__["tabs"][item].label));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Components/LicenseCard.js":
/*!***************************************!*\
  !*** ./src/Components/LicenseCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toast */ "./src/Components/Toast.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */



var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

var LicenseCard = function LicenseCard(_ref) {
  var isVisible = _ref.isVisible,
      changeTier = _ref.changeTier;
  var _neveDash = neveDash,
      license = _neveDash.license,
      proApi = _neveDash.proApi;

  var _useState = useState(license && 'valid' === license.valid ? license.key || '' : ''),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useState(license.valid || 'invalid'),
      _useState6 = _slicedToArray(_useState5, 2),
      valid = _useState6[0],
      setValid = _useState6[1];

  var _useState7 = useState(license.expiration || ''),
      _useState8 = _slicedToArray(_useState7, 2),
      expiration = _useState8[0],
      setExpiration = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      toast = _useState10[0],
      setToast = _useState10[1];

  var _useState11 = useState('success'),
      _useState12 = _slicedToArray(_useState11, 2),
      toastType = _useState12[0],
      setToastType = _useState12[1];

  if (!isVisible) {
    return null;
  }

  var toggleLicense = function toggleLicense() {
    var toDo = 'valid' === valid ? 'deactivate' : 'activate';
    setStatus('activate' === toDo ? 'activating' : 'deactivating');
    Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(proApi + '/toggle_license', {
      key: key,
      action: toDo
    }).then(function (response) {
      setToastType(response.success ? 'success' : 'error');
      setKey('activate' === toDo ? key : '');
      setToast(response.message);
      setExpiration(response.expiration);
      setValid(response.success && 'activate' === toDo ? 'valid' : 'not_active');
      setStatus(false);
      neveDash.license.expiration = response.expiration;
      changeTier(response.tier || 1);
    });
  };

  return wp.element.createElement("aside", {
    className: "sidebar card license"
  }, wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", null, __('Neve Pro Addon license', 'neve')), wp.element.createElement("p", null, "Enter your license from ", wp.element.createElement("a", {
    href: "https://store.themeisle.com"
  }, "ThemeIsle"), " purchase history in order to get plugin updates"), wp.element.createElement("form", {
    className: "license-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      toggleLicense();
    }
  }, wp.element.createElement("input", {
    type: "text",
    id: "license-field",
    name: "license-field",
    disabled: 'valid' === valid,
    onChange: function onChange(e) {
      setKey(e.target.value.replace(/\s+/g, ''));
    },
    value: 'valid' === valid ? '******************************' + key.slice(-5) : key,
    placeholder: __('Enter License Key', 'neve')
  }), wp.element.createElement(Button, {
    isPrimary: 'valid' !== valid,
    isSecondary: 'valid' === valid,
    isLarge: true,
    disabled: status || !key,
    type: "submit"
  }, !status ? 'valid' === valid ? __('Deactivate', 'neve') : __('Activate', 'neve') : 'activating' === status ? __('Activating', 'neve') : __('Deactivating', 'neve'))), toast && wp.element.createElement(_Toast__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: toastType,
    dismiss: setToast,
    message: toast
  }), !['not_active', 'invalid'].includes(valid) && wp.element.createElement("div", {
    className: "license-footer"
  }, wp.element.createElement(Fragment, null, wp.element.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(['status-icon', 'valid' === valid ? 'success' : 'error'])
  }, wp.element.createElement(Dashicon, {
    size: 14,
    icon: 'valid' === valid ? 'yes' : 'no'
  })), wp.element.createElement("span", {
    className: "validity"
  }, 'valid' === valid ? __('Valid', 'neve') : __('Expired', 'neve')), expiration && wp.element.createElement(Fragment, null, wp.element.createElement("span", {
    className: "separator"
  }, "-"), wp.element.createElement("span", {
    className: "expires"
  }, ('valid' === valid ? __('Expires', 'neve') : __('Expired', 'neve')) + ' ' + expiration))))));
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      changeLicenseTier = _dispatch.changeLicenseTier;

  return {
    changeTier: function changeTier(newTier) {
      changeLicenseTier(newTier);
    }
  };
})(LicenseCard));

/***/ }),

/***/ "./src/Components/Loading.js":
/*!***********************************!*\
  !*** ./src/Components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Loading = function Loading() {
  return wp.element.createElement("div", {
    className: "mock-dash"
  }, wp.element.createElement("header", null, wp.element.createElement("div", {
    className: "container"
  }, wp.element.createElement("div", {
    className: "top"
  }, wp.element.createElement("h1", {
    className: "heading loading"
  }), wp.element.createElement("span", {
    className: "version loading"
  }, "v2.6.2"), wp.element.createElement("div", {
    className: "loading logo"
  })), wp.element.createElement("nav", {
    className: "navigation"
  }, Array.from(Array(6)).map(function () {
    return wp.element.createElement("li", null, wp.element.createElement("a", {
      className: "loading"
    }));
  })))), wp.element.createElement("div", {
    className: "container content"
  }, wp.element.createElement("div", {
    className: "main"
  }, neveDash.notifications && wp.element.createElement("div", {
    className: "notifications"
  }, Object.keys(neveDash.notifications).map(function () {
    return wp.element.createElement("div", {
      className: "notification loading placeholder"
    });
  })), wp.element.createElement("div", {
    className: "tab-content columns start"
  }, wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement("div", {
    className: "card"
  }, wp.element.createElement("div", {
    className: "card-header"
  }, wp.element.createElement("div", {
    className: "loading icon"
  }), wp.element.createElement("h3", {
    className: "loading title"
  })), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("button", {
    type: "button",
    className: "loading components-button is-button is-default is-primary"
  }))), wp.element.createElement("div", {
    className: "card"
  }, wp.element.createElement("div", {
    className: "card-header"
  }, wp.element.createElement("div", {
    className: "loading icon"
  }), wp.element.createElement("h3", {
    className: "loading title"
  })), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("button", {
    type: "button",
    className: "loading components-button is-button is-default is-primary"
  })))), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement("div", {
    className: "card customizer-quick-links"
  }, wp.element.createElement("div", {
    className: "card-header"
  }, wp.element.createElement("div", {
    className: "loading icon"
  }), wp.element.createElement("h3", {
    className: "loading title"
  })), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("div", {
    className: "columns"
  }, wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  })), wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  }), wp.element.createElement("hr", null), wp.element.createElement("span", {
    className: "loading link"
  })))))))), wp.element.createElement("div", {
    className: "sidebar-wrap"
  }, wp.element.createElement("aside", {
    className: "sidebar card"
  }, wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", {
    className: "loading"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("span", {
    className: "loading link"
  })), wp.element.createElement("hr", null), wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", {
    className: "loading"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("span", {
    className: "loading link"
  })), wp.element.createElement("hr", null), wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", {
    className: "loading"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("p", {
    className: "loading card-description"
  }), wp.element.createElement("span", {
    className: "loading link"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/Components/ModuleCard.js":
/*!**************************************!*\
  !*** ./src/Components/ModuleCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/Components/Accordion.js");
/* harmony import */ var _Options_InputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options/InputForm */ "./src/Components/Options/InputForm.js");
/* harmony import */ var _Options_Toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options/Toggle */ "./src/Components/Options/Toggle.js");
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */




var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
var compose = wp.compose.compose;
var __ = wp.i18n.__;

var ModuleCard = function ModuleCard(_ref) {
  var slug = _ref.slug,
      setToast = _ref.setToast,
      changeModuleStatus = _ref.changeModuleStatus,
      getModuleStatus = _ref.getModuleStatus,
      tier = _ref.tier;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _neveDash$modules$slu = neveDash.modules[slug],
      nicename = _neveDash$modules$slu.nicename,
      description = _neveDash$modules$slu.description,
      availabilityLevel = _neveDash$modules$slu.availabilityLevel,
      options = _neveDash$modules$slu.options,
      order = _neveDash$modules$slu.order,
      links = _neveDash$modules$slu.links,
      documentation = _neveDash$modules$slu.documentation,
      required_actions = _neveDash$modules$slu.required_actions;
  var _neveDash = neveDash,
      upgradeLinks = _neveDash.upgradeLinks;

  var renderOptionsAccordions = function renderOptionsAccordions() {
    return options.map(function (group) {
      var label = group.label,
          options = group.options;
      return wp.element.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: label
      }, wp.element.createElement("div", null, Object.keys(options).map(function (optionSlug) {
        var _options$optionSlug = options[optionSlug],
            label = _options$optionSlug.label,
            type = _options$optionSlug.type,
            placeholder = _options$optionSlug.placeholder;
        return wp.element.createElement(Fragment, null, 'text' === type && wp.element.createElement(_Options_InputForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
          label: label,
          slug: optionSlug,
          placeholder: placeholder
        }), 'toggle' === type && wp.element.createElement(_Options_Toggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: label,
          slug: optionSlug
        }));
      })));
    });
  };

  return wp.element.createElement("div", {
    className: "card module-card"
  }, wp.element.createElement("div", {
    className: "card-header"
  }, wp.element.createElement("h3", {
    className: "title"
  }, nicename), wp.element.createElement("div", {
    className: "toggle-wrap"
  }, tier < availabilityLevel ? wp.element.createElement(Button, {
    isPrimary: true,
    href: upgradeLinks[availabilityLevel]
  }, __('Upgrade', 'neve')) : wp.element.createElement(Fragment, null, loading && wp.element.createElement(Dashicon, {
    size: 18,
    icon: "update",
    className: "is-loading"
  }), wp.element.createElement(ToggleControl, {
    checked: getModuleStatus(slug),
    onChange: function onChange(value) {
      setLoading(true);
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_3__["changeOption"])(slug, value, true).then(function (r) {
        if (r.success) {
          changeModuleStatus(slug, value);
          setLoading(false);
          setToast((value ? __('Module Activated', 'neve') : __('Module Deactivated.', 'neve')) + " (".concat(nicename, ")"));
          return false;
        }

        setLoading(false);
        setToast(__('Could not activate module. Please try again.', 'neve'));
      });
    }
  })))), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "card-description"
  }, description + ' ', documentation && wp.element.createElement("a", {
    href: documentation.url
  }, __('Learn More', 'neve'))), links && getModuleStatus(slug) && wp.element.createElement("div", {
    className: "actions"
  }, links.map(function (link) {
    return wp.element.createElement(Button, {
      isSecondary: true,
      href: link.url
    }, link.label);
  })), 0 < options.length && true === getModuleStatus(slug) && wp.element.createElement("div", {
    className: "module-options"
  }, renderOptionsAccordions())));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-dashboard'),
      _getModuleStatus = _select.getModuleStatus,
      getLicenseTier = _select.getLicenseTier;

  return {
    getModuleStatus: function getModuleStatus(slug) {
      return _getModuleStatus(slug);
    },
    tier: getLicenseTier()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _changeModuleStatus = _dispatch.changeModuleStatus,
      _setToast = _dispatch.setToast;

  return {
    changeModuleStatus: function changeModuleStatus(slug, value) {
      return _changeModuleStatus(slug, value);
    },
    setToast: function setToast(message) {
      return _setToast(message);
    }
  };
}))(ModuleCard));

/***/ }),

/***/ "./src/Components/Notification.js":
/*!****************************************!*\
  !*** ./src/Components/Notification.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */

var useState = wp.element.useState;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;

var Notification = function Notification(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hidden = _useState2[0],
      setHidden = _useState2[1];

  var _props$data = props.data,
      text = _props$data.text,
      cta = _props$data.cta,
      type = _props$data.type,
      update = _props$data.update;

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inProgress = _useState4[0],
      setInProgress = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      done = _useState6[0],
      setDone = _useState6[1];

  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(['notification', props.slug, type ? type : '', {
    'success': done,
    'hidden': done
  }]);
  return wp.element.createElement("div", {
    className: classes
  }, !done ? wp.element.createElement("p", null, text) : wp.element.createElement("p", null, wp.element.createElement(Dashicon, {
    icon: "yes"
  }), __('Done!', 'neve')), cta && !done && wp.element.createElement(Button, {
    secondary: true,
    disabled: inProgress,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'is-loading': inProgress
    }),
    onClick: function onClick() {
      if (update) {
        updateEntity(update, setDone, setInProgress, setHidden);
      }
    }
  }, inProgress ? wp.element.createElement("span", null, wp.element.createElement(Dashicon, {
    icon: "update"
  }), " ", __('In Progress', 'neve') + '...', " ") : cta));
};

var updateEntity = function updateEntity(args, setDone, setInProgress, setHidden) {
  if (!args.type) {
    return false;
  }

  var executeAction = function executeAction() {
    return new Promise(function (resolve) {
      if ('theme' === args.type) {
        if (!args.slug) {
          return false;
        }

        wp.updates.ajax('update-theme', {
          slug: args.slug
        }).then(function () {
          resolve('theme-updated');
        });
      }

      if ('plugin' === args.type) {
        if (!args.slug || !args.path) {
          return false;
        }

        wp.updates.ajax('update-plugin', {
          slug: args.slug,
          plugin: args.path
        }).then(function () {
          resolve('plugin-updated');
        });
      }
    });
  };

  setInProgress(true);
  executeAction().then(function () {
    setDone(true);
    setInProgress(false);
    setHidden(true);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/Components/Notifications.js":
/*!*****************************************!*\
  !*** ./src/Components/Notifications.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./src/Components/Notification.js");
/* global neveDash */


var Notifications = function Notifications() {
  if (!neveDash.notifications) {
    return null;
  }

  if (1 > neveDash.notifications.length) {
    return null;
  }

  return wp.element.createElement("div", {
    className: "notifications"
  }, Object.keys(neveDash.notifications).map(function (slug) {
    return wp.element.createElement(_Notification__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: neveDash.notifications[slug],
      slug: slug
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./src/Components/Onboarding/EditorSelector.js":
/*!*****************************************************!*\
  !*** ./src/Components/Onboarding/EditorSelector.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var useState = wp.element.useState;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    Popover = _wp$components.Popover;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;

var EditorSelector = function EditorSelector(_ref) {
  var onSearch = _ref.onSearch,
      editor = _ref.editor,
      setCurrentEditor = _ref.setCurrentEditor;
  var map = {
    'elementor': {
      icon: 'elementor.png',
      niceName: __('Elementor')
    },
    'brizy': {
      icon: 'brizy.svg',
      niceName: __('Brizy')
    },
    'beaver builder': {
      icon: 'beaver.png',
      niceName: __('Beaver Builder')
    },
    'thrive architect': {
      icon: 'thrive.png',
      niceName: __('Thrive Architect')
    },
    'divi builder': {
      icon: 'divi.svg',
      niceName: __('Divi Builder')
    },
    'gutenberg': {
      icon: 'gutenberg.png',
      niceName: __('Gutenberg')
    }
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggleDropdown = function toggleDropdown() {
    return setOpen(!open);
  };

  return wp.element.createElement("div", {
    className: "header-form"
  }, wp.element.createElement("div", {
    className: "ob-dropdown"
  }, wp.element.createElement(Button, {
    onClick: toggleDropdown,
    className: "select ob-dropdown"
  }, wp.element.createElement("img", {
    className: "editor-icon",
    src: neveDash.assets + 'editor-icons/' + map[editor].icon,
    alt: __('Builder Logo', 'neve')
  }), wp.element.createElement("span", null, map[editor].niceName), wp.element.createElement(Dashicon, {
    size: 14,
    icon: open ? 'arrow-up-alt2' : 'arrow-down-alt2'
  }), open && wp.element.createElement(Popover, {
    position: "bottom right",
    onClose: toggleDropdown,
    noArrow: true
  }, open && wp.element.createElement("ul", {
    className: "options"
  }, Object.keys(map).map(function (key) {
    if (key === editor) {
      return null;
    }

    return wp.element.createElement("li", null, wp.element.createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        setCurrentEditor(key);
        setOpen(false);
      }
    }, wp.element.createElement("img", {
      className: "editor-icon",
      src: neveDash.assets + 'editor-icons/' + map[key].icon,
      alt: __('Builder Logo', 'neve')
    }), wp.element.createElement("span", null, map[key].niceName)));
  }))))), wp.element.createElement("div", {
    className: "search"
  }, wp.element.createElement("input", {
    onChange: function onChange(e) {
      onSearch(e.target.value);
    },
    type: "search",
    placeholder: __('Search for a starter site', 'neve') + '...'
  }), wp.element.createElement("img", {
    src: neveDash.assets + '/search.svg',
    alt: __('Search Icon')
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getCurrentEditor = _select.getCurrentEditor;

  return {
    editor: getCurrentEditor()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      _setCurrentEditor = _dispatch.setCurrentEditor;

  return {
    setCurrentEditor: function setCurrentEditor(editor) {
      return _setCurrentEditor(editor);
    }
  };
}))(EditorSelector));

/***/ }),

/***/ "./src/Components/Onboarding/ImportModal.js":
/*!**************************************************!*\
  !*** ./src/Components/Onboarding/ImportModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_site_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/site-import */ "./src/utils/site-import.js");
/* harmony import */ var _ImportStepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportStepper */ "./src/Components/Onboarding/ImportStepper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*global neveDash*/



var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    Modal = _wp$components.Modal;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;

var ImportModal = function ImportModal(_ref) {
  var setModal = _ref.setModal,
      setSite = _ref.setSite,
      editor = _ref.editor,
      siteData = _ref.siteData;

  var _useState = useState({
    content: true,
    customizer: true,
    widgets: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      general = _useState2[0],
      setGeneral = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      pluginsProgress = _useState4[0],
      setPluginsProgress = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      contentProgress = _useState6[0],
      setContentProgress = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      customizerProgress = _useState8[0],
      setCustomizerProgress = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      widgetsProgress = _useState10[0],
      setWidgetsProgress = _useState10[1];

  var _useState11 = useState(null),
      _useState12 = _slicedToArray(_useState11, 2),
      frontPageID = _useState12[0],
      setFrontPageID = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      currentStep = _useState14[0],
      setCurrentStep = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      importing = _useState16[0],
      setImporting = _useState16[1];

  var _useState17 = useState({}),
      _useState18 = _slicedToArray(_useState17, 2),
      pluginOptions = _useState18[0],
      setPluginOptions = _useState18[1];

  var _useState19 = useState(null),
      _useState20 = _slicedToArray(_useState19, 2),
      error = _useState20[0],
      setError = _useState20[1];

  useEffect(function getPluginOptions() {
    var mandatory = _objectSpread({}, siteData['mandatory_plugins'] || {});

    var optional = _objectSpread({}, siteData['recommended_plugins'] || {});

    var defaultOff = siteData['default_off_recommended_plugins'] || [];
    Object.keys(mandatory).map(function (key) {
      mandatory[key] = true;
    });
    Object.keys(optional).map(function (key) {
      optional[key] = !defaultOff.includes(key);
    });
    setPluginOptions(_objectSpread({}, optional, {}, mandatory));
  }, []);

  var renderNote = function renderNote() {
    var external = siteData['external_plugins'] || null;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['well', {
      'warning': external
    }]);
    return wp.element.createElement("div", {
      className: classes
    }, wp.element.createElement("h3", null, wp.element.createElement(Dashicon, {
      icon: "info"
    }), wp.element.createElement("span", null, external ? __('To import this demo you have to install the following plugins', 'neve') : __('Note', 'neve'), ":")), wp.element.createElement("ol", null, external ? Object.keys(external).map(function (slug) {
      return wp.element.createElement("li", null, wp.element.createElement(Button, {
        isLink: true,
        href: external[slug].url
      }, slug));
    }) : wp.element.createElement(Fragment, null, wp.element.createElement("li", null, __('We recommend you backup your website content before attempting a full site import.', 'neve')), wp.element.createElement("li", null, __('Some of the demo images will not be imported and will be replaced by placeholder images.', 'neve')), siteData['unsplash_gallery'] && wp.element.createElement("li", null, wp.element.createElement("a", {
      href: siteData['unsplash_gallery']
    }, __('Here is our own collection of related images you can use for your site.', 'neve'))))));
  };

  var renderOptions = function renderOptions() {
    var map = {
      content: {
        title: __('Content', 'neve'),
        icon: 'admin-post'
      },
      customizer: {
        title: __('Customizer', 'neve'),
        icon: 'admin-customizer'
      },
      widgets: {
        title: __('Widgets', 'neve'),
        icon: 'admin-generic'
      }
    };
    return wp.element.createElement("div", {
      className: "options general"
    }, wp.element.createElement("h3", null, __('General', 'neve'), ":"), wp.element.createElement("ul", null, Object.keys(map).map(function (id) {
      return wp.element.createElement("li", null, wp.element.createElement(Dashicon, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          'active': general[id]
        }),
        icon: map[id].icon
      }), wp.element.createElement("span", null, map[id].title), wp.element.createElement("div", {
        className: "toggle-wrapper"
      }, wp.element.createElement(ToggleControl, {
        checked: general[id],
        onChange: function onChange() {
          setGeneral(_objectSpread({}, general, _defineProperty({}, id, !general[id])));
        }
      })));
    })));
  };

  var renderPlugins = function renderPlugins() {
    var allPlugins = _objectSpread({}, siteData['recommended_plugins'] || {}, {}, siteData['mandatory_plugins'] || {});

    return wp.element.createElement("div", {
      className: "options plugins"
    }, wp.element.createElement("h3", null, __('Plugins', 'neve'), ":"), wp.element.createElement("ul", null, Object.keys(allPlugins).map(function (slug) {
      return wp.element.createElement("li", null, wp.element.createElement(Dashicon, {
        icon: "admin-plugins",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          'active': pluginOptions[slug]
        })
      }), wp.element.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: allPlugins[slug]
        }
      }), slug in siteData['recommended_plugins'] && wp.element.createElement("div", {
        className: "toggle-wrapper"
      }, wp.element.createElement(ToggleControl, {
        checked: pluginOptions[slug],
        onChange: function onChange() {
          setPluginOptions(_objectSpread({}, pluginOptions, _defineProperty({}, slug, !pluginOptions[slug])));
        }
      })));
    })));
  };

  function runImport() {
    console.clear();

    if (!pluginOptions) {
      console.log('[S] Plugins.');
      runImportContent();
      return false;
    }

    setCurrentStep('plugins');
    console.log('[P] Plugins.');
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_0__["installPlugins"])(pluginOptions).then(function (response) {
      if (!response.success) {
        handleError(response, 'plugins');
        return false;
      }

      console.log('[D] Plugins.');
      setPluginsProgress('done');
      runImportContent();
    })["catch"](function (error) {
      return handleError(error, 'plugins');
    });
  }

  function runImportContent() {
    if (!general.content) {
      console.log('[S] Content.');
      runImportCustomizer();
      return false;
    }

    setCurrentStep('content');
    console.log('[P] Content.');
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_0__["importContent"])({
      contentFile: siteData['content_file'],
      source: siteData.source,
      frontPage: siteData['front_page'],
      shopPages: siteData['shop_pages'],
      demoSlug: siteData.slug,
      editor: editor
    }).then(function (response) {
      if (!response.success) {
        handleError(response, 'content');
        return false;
      }

      console.log('[D] Content.');

      if (response['frontpage_id']) {
        setFrontPageID(response['frontpage_id']);
      }

      setContentProgress('done');
      runImportCustomizer();
    })["catch"](function (error) {
      return handleError(error, 'content');
    });
  }

  function runImportCustomizer() {
    if (!general.customizer) {
      console.log('[S] Customizer.');
      runImportWidgets();
      return false;
    }

    setCurrentStep('customizer');
    console.log('[P] Customizer.');
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_0__["importMods"])({
      'source_url': siteData['demo_url'],
      'theme_mods': siteData['theme_mods'],
      'wp_options': siteData['wp_options']
    }).then(function (response) {
      if (!response.success) {
        handleError(response, 'customizer');
        return false;
      }

      console.log('[D] Customizer.');
      setCustomizerProgress('done');
      runImportWidgets();
    })["catch"](function (error) {
      return handleError(error, 'customizer');
    });
  }

  function runImportWidgets() {
    if (!general.widgets) {
      console.log('[S] Widgets.');
      importDone();
    }

    setCurrentStep('widgets');
    console.log('[P] Widgets.');
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_0__["importWidgets"])(siteData.widgets).then(function (response) {
      if (!response.success) {
        handleError(response, 'widgets');
        return false;
      }

      console.log('[D] Widgets.');
      setWidgetsProgress('done');
      importDone();
    })["catch"](function (error) {
      return handleError(error, 'widgets');
    });
  }

  function importDone() {
    setCurrentStep('done');
    setImporting(false);
  }

  function handleError(error, step) {
    console.log(step);
    setImporting(false);
    setCurrentStep(null);

    if ('plugins' === step) {
      setContentProgress('skip');
    }

    if (['content', 'plugins'].includes(step)) {
      setCustomizerProgress('skip');
    }

    if (['content', 'plugins', 'customizer'].includes(step)) {
      setWidgetsProgress('skip');
    }

    var map = {
      'plugins': __('Something went wrong while installing the necessary plugins.', 'neve'),
      'content': __('Something went wrong while importing the website content.', 'neve'),
      'customizer': __('Something went wrong while updating the customizer settings.', 'neve'),
      'widgets': __('Something went wrong while importing the widgets.', 'neve')
    };

    switch (step) {
      case 'plugins':
        setPluginsProgress('error');
        break;

      case 'content':
        setContentProgress('error');
        break;

      case 'customizer':
        setCustomizerProgress('error');
        break;

      case 'widgets':
        setWidgetsProgress('error');
        break;
    }

    setError(error.data ? {
      message: map[step],
      code: error.data
    } : {
      message: map[step]
    });
  }

  var closeModal = function closeModal() {
    var dismissSiteData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (importing) {
      return false;
    } else {
      setModal(false);

      if (dismissSiteData) {
        setSite(null);
      }
    }
  };

  var allOptionsOff = Object.keys(general).every(function (k) {
    return false === general[k];
  });
  var editLinkMap = {
    'elementor': "".concat(neveDash.onboarding.homeUrl, "/wp-admin/post.php?post=").concat(frontPageID, "&action=elementor"),
    'brizy': "".concat(neveDash.onboarding.homeUrl, "/?brizy-edit"),
    'beaver builder': "".concat(neveDash.onboarding.homeUrl, "/?fl_builder"),
    'thrive architect': "".concat(neveDash.onboarding.homeUrl, "/wp-admin/post.php?post=").concat(frontPageID, "&action=architect&tve=true"),
    'divi builder': "".concat(neveDash.onboarding.homeUrl, "/?et_fb=1&PageSpeed=off"),
    'gutenberg': "".concat(neveDash.onboarding.homeUrl, "/wp-admin/post.php?post=").concat(frontPageID, "&action=edit")
  };
  var editLink = editLinkMap[editor];
  return wp.element.createElement(Modal, {
    className: "ob-import-modal",
    title: siteData.title,
    onRequestClose: closeModal,
    shouldCloseOnClickOutside: !importing,
    isDismissible: !importing
  }, wp.element.createElement("div", {
    className: "modal-body"
  }, !importing && 'done' !== currentStep && !error ? wp.element.createElement(Fragment, null, renderNote(), wp.element.createElement("hr", null), renderOptions(), wp.element.createElement("hr", null), renderPlugins()) : wp.element.createElement(Fragment, null, error && wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "well error"
  }, error.message && wp.element.createElement("h3", null, wp.element.createElement(Dashicon, {
    icon: "warning"
  }), wp.element.createElement("span", null, error.message)), wp.element.createElement("ul", null, wp.element.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: neveDash.onboarding.strings.troubleshooting
    }
  }), wp.element.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: neveDash.onboarding.strings.support
    }
  }), error.code && wp.element.createElement("li", null, __('Error code', 'neve'), ": ", wp.element.createElement("code", null, error.code)), wp.element.createElement("li", null, __('Error log', 'neve'), ":", wp.element.createElement(Button, {
    isLink: true,
    href: neveDash.onboarding.logUrl
  }, neveDash.onboarding.logUrl, wp.element.createElement(Dashicon, {
    icon: "external"
  }))))), wp.element.createElement("hr", null)), wp.element.createElement(_ImportStepper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    progress: {
      plugins: pluginsProgress,
      content: contentProgress,
      customizer: customizerProgress,
      widgets: widgetsProgress
    },
    currentStep: currentStep,
    willDo: general
  }), 'done' === currentStep && wp.element.createElement(Fragment, null, wp.element.createElement("hr", null), wp.element.createElement("p", {
    className: "import-result"
  }, __('Content was successfully imported. Enjoy your new site!', 'neve')), wp.element.createElement("hr", null)))), !importing && wp.element.createElement("div", {
    className: "modal-footer"
  }, 'done' !== currentStep ? wp.element.createElement(Fragment, null, wp.element.createElement(Button, {
    isSecondary: true,
    onClick: closeModal
  }, __('Close', 'neve')), !error && wp.element.createElement(Button, {
    isPrimary: true,
    disabled: allOptionsOff || siteData['external_plugins'],
    onClick: function onClick() {
      setImporting(true);
      runImport();
    }
  }, __('Import', 'neve'))) : wp.element.createElement(Fragment, null, wp.element.createElement(Button, {
    isLink: true,
    className: "close",
    onClick: function onClick() {
      closeModal(true);
    }
  }, __('Back to Sites Library', 'neve')), wp.element.createElement(Button, {
    isSecondary: true,
    href: neveDash.onboarding.homeUrl
  }, __('View Website', 'neve')), wp.element.createElement(Button, {
    isPrimary: true,
    href: editLink
  }, __('Add your own content', 'neve')))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getCurrentEditor = _select.getCurrentEditor,
      getCurrentSite = _select.getCurrentSite;

  return {
    editor: getCurrentEditor(),
    siteData: getCurrentSite()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      setImportModalStatus = _dispatch.setImportModalStatus,
      setCurrentSite = _dispatch.setCurrentSite;

  return {
    setModal: function setModal(status) {
      return setImportModalStatus(status);
    },
    setSite: function setSite(data) {
      return setCurrentSite(data);
    }
  };
}))(ImportModal));

/***/ }),

/***/ "./src/Components/Onboarding/ImportStepper.js":
/*!****************************************************!*\
  !*** ./src/Components/Onboarding/ImportStepper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var Dashicon = wp.components.Dashicon;

var ImportStepper = function ImportStepper(_ref) {
  var currentStep = _ref.currentStep,
      progress = _ref.progress,
      willDo = _ref.willDo;
  var stepsMap = {
    plugins: {
      label: __('Installing Plugins', 'neve'),
      status: progress.plugins,
      willDo: true
    },
    content: {
      label: __('Importing Content', 'neve'),
      status: progress.content,
      willDo: willDo.content
    },
    customizer: {
      label: __('Importing Customizer Settings', 'neve'),
      status: progress.customizer,
      willDo: willDo.customizer
    },
    widgets: {
      label: __('Importing Widgets', 'neve'),
      status: progress.widgets,
      willDo: willDo.widgets
    }
  };
  return wp.element.createElement("ul", {
    className: "stepper"
  }, Object.keys(stepsMap).map(function (key) {
    var _stepsMap$key = stepsMap[key],
        label = _stepsMap$key.label,
        status = _stepsMap$key.status,
        willDo = _stepsMap$key.willDo;

    if (!willDo) {
      return null;
    }

    var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(['icon', {
      'loading': currentStep === key,
      'warning': currentStep === key,
      'success': 'done' === status,
      'error': 'error' === status,
      'skip': 'skip' === status
    }]);
    var icon = 'clock';

    if (currentStep === key) {
      icon = 'update';
    }

    if ('done' === status) {
      icon = 'yes';
    }

    if ('error' === status) {
      icon = 'no-alt';
    }

    return wp.element.createElement("li", null, wp.element.createElement("span", {
      className: classes
    }, wp.element.createElement(Dashicon, {
      icon: icon,
      className: currentStep === key ? 'loading' : ''
    })), wp.element.createElement("span", null, label));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImportStepper);

/***/ }),

/***/ "./src/Components/Onboarding/Loading.js":
/*!**********************************************!*\
  !*** ./src/Components/Onboarding/Loading.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var withSelect = wp.data.withSelect;

var Loading = function Loading(_ref) {
  var isOnboarding = _ref.isOnboarding;
  return wp.element.createElement("div", {
    className: "ob mock-dash"
  }, wp.element.createElement("div", {
    className: "ob-head"
  }, wp.element.createElement("h2", {
    className: "loading"
  }), wp.element.createElement("p", {
    className: "loading"
  }), wp.element.createElement("p", {
    className: "loading"
  }), isOnboarding && wp.element.createElement("button", {
    className: "loading components-button is-primary"
  }), wp.element.createElement("div", {
    className: "header-form"
  }, wp.element.createElement("div", null, wp.element.createElement("div", {
    className: "ob-dropdown"
  }, wp.element.createElement("button", null, wp.element.createElement("div", {
    className: "editor-icon loading"
  }), wp.element.createElement("span", {
    className: "loading"
  })))), wp.element.createElement("div", {
    className: "search"
  }, wp.element.createElement("button", null, wp.element.createElement("span", {
    className: "loading"
  }))))), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement("div", {
    className: "ob-sites"
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function () {
    return wp.element.createElement("div", {
      className: "card starter-site-card"
    }, wp.element.createElement("div", {
      className: "top"
    }, wp.element.createElement("div", {
      className: "image loading"
    })), wp.element.createElement("div", {
      className: "bottom"
    }, wp.element.createElement("p", {
      className: "title loading"
    })));
  }))), isOnboarding && wp.element.createElement("div", {
    className: "ob-footer"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getOnboardingStatus = _select.getOnboardingStatus;

  return {
    isOnboarding: getOnboardingStatus()
  };
})(Loading));

/***/ }),

/***/ "./src/Components/Onboarding/Main.js":
/*!*******************************************!*\
  !*** ./src/Components/Onboarding/Main.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorSelector */ "./src/Components/Onboarding/EditorSelector.js");
/* harmony import */ var _StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarterSiteCard */ "./src/Components/Onboarding/StarterSiteCard.js");
/* harmony import */ var _PreviewFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewFrame */ "./src/Components/Onboarding/PreviewFrame.js");
/* harmony import */ var _ImportModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportModal */ "./src/Components/Onboarding/ImportModal.js");
/* harmony import */ var _Migration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Migration */ "./src/Components/Onboarding/Migration.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
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








var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;
var Button = wp.components.Button;
var __ = wp.i18n.__;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;

var Onboarding = function Onboarding(_ref) {
  var sites = _ref.sites,
      upsells = _ref.upsells,
      editor = _ref.editor,
      previewOpen = _ref.previewOpen,
      currentSiteData = _ref.currentSiteData,
      importModal = _ref.importModal,
      isOnboarding = _ref.isOnboarding,
      cancelOnboarding = _ref.cancelOnboarding,
      migration = _ref.migration;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useState3 = useState(9),
      _useState4 = _slicedToArray(_useState3, 2),
      maxShown = _useState4[0],
      setMaxShown = _useState4[1];

  var filterSites = function filterSites(sites) {
    Object.keys(sites).map(function (slug) {
      sites[slug].slug = slug;
    });
    sites = Object.values(sites);

    if (!searchQuery) {
      return sites;
    }

    var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_6__["default"](sites, {
      includeScore: true,
      keys: ['title', 'slug', 'keywords']
    });
    var search = fuse.search(searchQuery);
    return search.map(function (item) {
      return item.item;
    });
  };

  var getAllSites = function getAllSites() {
    var sitesData = sites && sites[editor] ? filterSites(sites[editor]) : [];
    var upsellsData = upsells && upsells[editor] ? filterSites(upsells[editor]) : [];
    return [].concat(_toConsumableArray(sitesData), _toConsumableArray(upsellsData));
  };

  var renderSites = function renderSites() {
    var allData = getAllSites();
    return allData.slice(0, maxShown).map(function (site) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        upsell: site['in_pro'],
        data: site
      });
    });
  };

  var getSiteNav = function getSiteNav() {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (null === currentSiteData) {
      return null;
    }

    var allSites = getAllSites();
    var position = allSites.indexOf(currentSiteData);

    if (-1 === position) {
      return null;
    }

    if (1 === allSites.length) {
      return null;
    }

    if (prev && 0 === position) {
      return allSites[allSites.length - 1];
    }

    if (!prev && position === allSites.length - 1) {
      return allSites[0];
    }

    return allSites[prev ? position - 1 : position + 1];
  };

  function renderMigration() {
    if (!migration) {
      return null;
    }

    return wp.element.createElement(_Migration__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: migration
    });
  }

  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "ob"
  }, renderMigration(), wp.element.createElement("div", {
    className: "ob-head"
  }, wp.element.createElement("h2", null, __('Ready to use pre-built websites with 1-click installation', 'neve')), wp.element.createElement("p", null, isOnboarding ? __('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click.', 'neve') : __('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve')), isOnboarding && wp.element.createElement(Button, {
    isPrimary: true,
    onClick: cancelOnboarding
  }, __('Keep the Current Layout', 'neve'))), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement(_EditorSelector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onSearch: function onSearch(query) {
      setSearchQuery(query);
      setMaxShown(9);
    },
    query: searchQuery
  }), wp.element.createElement("div", {
    className: "ob-sites"
  }, (sites || upsells) && renderSites()), wp.element.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onChange: function onChange(isVisible) {
      if (!isVisible) {
        return false;
      }

      setMaxShown(maxShown + 9);
    }
  }, wp.element.createElement("span", {
    style: {
      height: 10,
      width: 10,
      display: 'block'
    }
  })))), previewOpen && currentSiteData && wp.element.createElement(_PreviewFrame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    next: getSiteNav(),
    prev: getSiteNav(true)
  }), importModal && currentSiteData && wp.element.createElement(_ImportModal__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      setOnboardingState = _dispatch.setOnboardingState;

  return {
    cancelOnboarding: function cancelOnboarding() {
      return setOnboardingState(false);
    }
  };
}), withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites,
      getUpsells = _select.getUpsells,
      getCurrentEditor = _select.getCurrentEditor,
      getPreviewStatus = _select.getPreviewStatus,
      getCurrentSite = _select.getCurrentSite,
      getImportModalStatus = _select.getImportModalStatus,
      getOnboardingStatus = _select.getOnboardingStatus,
      getMigrationData = _select.getMigrationData;

  return {
    sites: getSites(),
    upsells: getUpsells(),
    editor: getCurrentEditor(),
    previewOpen: getPreviewStatus(),
    currentSiteData: getCurrentSite(),
    importModal: getImportModalStatus(),
    isOnboarding: getOnboardingStatus(),
    migration: getMigrationData()
  };
}))(Onboarding));

/***/ }),

/***/ "./src/Components/Onboarding/Migration.js":
/*!************************************************!*\
  !*** ./src/Components/Onboarding/Migration.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/rest */ "./src/utils/rest.js");
/*global neveDash*/

var __ = wp.i18n.__;
var Button = wp.components.Button;

var Migration = function Migration(_ref) {
  var data = _ref.data;
  return wp.element.createElement("div", {
    className: "ob-head ob-migration"
  }, wp.element.createElement("h2", null, data.heading), wp.element.createElement("p", null, data.description), wp.element.createElement("div", {
    className: "card starter-site-card"
  }, wp.element.createElement("div", {
    className: "top"
  }, data.screenshot && wp.element.createElement("div", {
    className: "image"
  }, wp.element.createElement("img", {
    src: data.screenshot,
    alt: data.theme_name
  }))), wp.element.createElement("div", {
    className: "bottom"
  }, wp.element.createElement("p", {
    className: "title"
  }, data.theme_name))), wp.element.createElement(Button, {
    isSecondary: true,
    onClick: function onClick() {
      var template = data.template,
          template_name = data.template_name;
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/migrate_frontpage', {
        template: template,
        template_name: template_name
      }).then(function (r) {
        console.log(r);
      });
    }
  }, __('Migrate', 'neve') + ' ' + data.theme_name));
};

/* harmony default export */ __webpack_exports__["default"] = (Migration);

/***/ }),

/***/ "./src/Components/Onboarding/PreviewFrame.js":
/*!***************************************************!*\
  !*** ./src/Components/Onboarding/PreviewFrame.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var __ = wp.i18n.__;

var PreviewFrame = function PreviewFrame(_ref) {
  var next = _ref.next,
      prev = _ref.prev,
      siteData = _ref.siteData,
      setSite = _ref.setSite,
      setPreview = _ref.setPreview,
      setModal = _ref.setModal;
  return wp.element.createElement("div", {
    className: "ob-preview"
  }, wp.element.createElement("div", {
    className: "preview"
  }, wp.element.createElement("iframe", {
    src: siteData['demo_url'],
    frameborder: "0"
  }), wp.element.createElement("div", {
    className: "loading"
  }, wp.element.createElement(Dashicon, {
    icon: "update",
    size: 50
  }))), wp.element.createElement("div", {
    className: "bottom-bar"
  }, wp.element.createElement("div", {
    className: "navigator"
  }, wp.element.createElement(Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      setPreview(false);
      setSite(null);
    },
    className: "close",
    label: __('Close', 'neve'),
    icon: "no"
  }), prev && wp.element.createElement(Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      setSite(prev);
    },
    className: "prev",
    label: __('Previous', 'neve'),
    icon: "arrow-left-alt2"
  }), next && wp.element.createElement(Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      setSite(next);
    },
    className: "next",
    label: __('Next', 'neve'),
    icon: "arrow-right-alt2"
  })), wp.element.createElement("div", {
    className: "actions"
  }, siteData['in_pro'] ? wp.element.createElement(Button, {
    className: "upgrade",
    isLink: true,
    href: siteData['outbound_link']
  }, __('Upgrade', 'neve')) : wp.element.createElement(Button, {
    className: "import",
    isPrimary: true,
    onClick: function onClick(e) {
      e.preventDefault();
      setModal(true);
    }
  }, __('Import', 'neve')))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getCurrentSite = _select.getCurrentSite;

  return {
    siteData: getCurrentSite()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      setCurrentSite = _dispatch.setCurrentSite,
      setPreviewStatus = _dispatch.setPreviewStatus,
      setImportModalStatus = _dispatch.setImportModalStatus;

  return {
    setSite: function setSite(data) {
      return setCurrentSite(data);
    },
    setPreview: function setPreview(status) {
      return setPreviewStatus(status);
    },
    setModal: function setModal(status) {
      return setImportModalStatus(status);
    }
  };
}))(PreviewFrame));

/***/ }),

/***/ "./src/Components/Onboarding/StarterSiteCard.js":
/*!******************************************************!*\
  !*** ./src/Components/Onboarding/StarterSiteCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Button = wp.components.Button;
var __ = wp.i18n.__;
var withDispatch = wp.data.withDispatch;

var StarterSiteCard = function StarterSiteCard(_ref) {
  var data = _ref.data,
      upsell = _ref.upsell,
      setSite = _ref.setSite,
      setPreview = _ref.setPreview,
      setModal = _ref.setModal;
  return wp.element.createElement("div", {
    className: "card starter-site-card"
  }, wp.element.createElement("div", {
    className: "top"
  }, wp.element.createElement("div", {
    className: "actions"
  }, wp.element.createElement(Button, {
    className: "preview",
    onClick: function onClick(e) {
      e.preventDefault();
      setSite(data);
      setPreview(true);
    }
  }, __('Preview', 'neve')), !upsell && wp.element.createElement(Button, {
    className: "import",
    onClick: function onClick(e) {
      e.preventDefault();
      setSite(data);
      setModal(true);
    }
  }, __('Import', 'neve'))), data.screenshot && wp.element.createElement("div", {
    className: "image"
  }, wp.element.createElement("img", {
    src: data.screenshot,
    alt: data.title
  }))), wp.element.createElement("div", {
    className: "bottom"
  }, wp.element.createElement("p", {
    className: "title"
  }, data.title), upsell && wp.element.createElement("span", {
    className: "pro-badge"
  }, __('Pro', 'neve'))));
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      setCurrentSite = _dispatch.setCurrentSite,
      setPreviewStatus = _dispatch.setPreviewStatus,
      setImportModalStatus = _dispatch.setImportModalStatus;

  return {
    setSite: function setSite(data) {
      return setCurrentSite(data);
    },
    setPreview: function setPreview(status) {
      return setPreviewStatus(status);
    },
    setModal: function setModal(status) {
      return setImportModalStatus(status);
    }
  };
})(StarterSiteCard));

/***/ }),

/***/ "./src/Components/Onboarding/store/actions.js":
/*!****************************************************!*\
  !*** ./src/Components/Onboarding/store/actions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  setSites: function setSites(sites) {
    return {
      type: 'SET_SITES',
      payload: {
        sites: sites
      }
    };
  },
  setUpsells: function setUpsells(upsells) {
    return {
      type: 'SET_UPSELLS',
      payload: {
        upsells: upsells
      }
    };
  },
  setMigrationData: function setMigrationData(migrationData) {
    return {
      type: 'SET_MIGRATION_DATA',
      payload: {
        migrationData: migrationData
      }
    };
  },
  setCurrentEditor: function setCurrentEditor(editor) {
    return {
      type: 'SET_CURRENT_EDITOR',
      payload: {
        editor: editor
      }
    };
  },
  setCurrentSite: function setCurrentSite(siteData) {
    return {
      type: 'SET_FOCUSED_SITE',
      payload: {
        siteData: siteData
      }
    };
  },
  setPreviewStatus: function setPreviewStatus(previewStatus) {
    if (previewStatus) {
      document.body.classList.add('ob-overflow-off');
    } else {
      document.body.classList.remove('ob-overflow-off');
    }

    return {
      type: 'SET_PREVIEW_STATUS',
      payload: {
        previewStatus: previewStatus
      }
    };
  },
  setImportModalStatus: function setImportModalStatus(importModalStatus) {
    if (importModalStatus) {
      document.body.classList.add('ob-overflow-off');
    } else {
      document.body.classList.remove('ob-overflow-off');
    }

    return {
      type: 'SET_IMPORT_MODAL_STATUS',
      payload: {
        importModalStatus: importModalStatus
      }
    };
  },
  setOnboardingState: function setOnboardingState(state) {
    return {
      type: 'SET_ONBOARDING',
      payload: {
        state: state
      }
    };
  }
});

/***/ }),

/***/ "./src/Components/Onboarding/store/reducer.js":
/*!****************************************************!*\
  !*** ./src/Components/Onboarding/store/reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global wp, neveDash  */
var initialState = {
  sites: null,
  upsells: null,
  editor: 'elementor',
  previewStatus: false,
  importModalStatus: false,
  currentSite: null,
  importing: false,
  isOnboarding: neveDash.onboarding.onboarding || false,
  migrationData: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_SITES':
      var sites = action.payload.sites;
      return _objectSpread({}, state, {
        sites: sites
      });

    case 'SET_UPSELLS':
      var upsells = action.payload.upsells;
      return _objectSpread({}, state, {
        upsells: upsells
      });

    case 'SET_MIGRATION_DATA':
      var migrationData = action.payload.migrationData;
      return _objectSpread({}, state, {
        migrationData: migrationData
      });

    case 'SET_CURRENT_EDITOR':
      var editor = action.payload.editor;
      return _objectSpread({}, state, {
        editor: editor
      });

    case 'SET_FOCUSED_SITE':
      var siteData = action.payload.siteData;
      return _objectSpread({}, state, {
        currentSite: siteData
      });

    case 'SET_PREVIEW_STATUS':
      var previewStatus = action.payload.previewStatus;
      return _objectSpread({}, state, {
        previewStatus: previewStatus
      });

    case 'SET_IMPORT_MODAL_STATUS':
      var importModalStatus = action.payload.importModalStatus;
      return _objectSpread({}, state, {
        importModalStatus: importModalStatus
      });

    case 'SET_ONBOARDING':
      var status = action.payload.status;
      return _objectSpread({}, state, {
        isOnboarding: status
      });
  }

  return state;
});

/***/ }),

/***/ "./src/Components/Onboarding/store/selectors.js":
/*!******************************************************!*\
  !*** ./src/Components/Onboarding/store/selectors.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getSites: function getSites(state) {
    return state.sites;
  },
  getUpsells: function getUpsells(state) {
    return state.upsells;
  },
  getMigrationData: function getMigrationData(state) {
    return state.migrationData;
  },
  getCurrentEditor: function getCurrentEditor(state) {
    return state.editor;
  },
  getCurrentSite: function getCurrentSite(state) {
    return state.currentSite;
  },
  getPreviewStatus: function getPreviewStatus(state) {
    return state.previewStatus;
  },
  getImportModalStatus: function getImportModalStatus(state) {
    return state.importModalStatus;
  },
  getOnboardingStatus: function getOnboardingStatus(state) {
    return state.isOnboarding;
  }
});

/***/ }),

/***/ "./src/Components/Options/InputForm.js":
/*!*********************************************!*\
  !*** ./src/Components/Options/InputForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/rest */ "./src/utils/rest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var useState = wp.element.useState;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var __ = wp.i18n.__;

var InputForm = function InputForm(_ref) {
  var slug = _ref.slug,
      label = _ref.label,
      placeholder = _ref.placeholder,
      getOption = _ref.getOption,
      setToast = _ref.setToast,
      changeOption = _ref.changeOption;

  var _useState = useState(getOption(slug)),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  return wp.element.createElement("div", {
    className: "module-option text"
  }, wp.element.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setLoading(true);
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["changeOption"])(slug, value).then(function (r) {
        if (r.success) {
          changeOption(slug, value);
          setToast(true);
          setLoading(false);
          return false;
        }

        setToast(r.message ? r.message : false);
        setLoading(false);
      });
    }
  }, label && wp.element.createElement("label", {
    htmlFor: slug
  }, label), wp.element.createElement("div", {
    className: "input-wrap"
  }, wp.element.createElement("input", {
    id: slug,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
    }
  }), wp.element.createElement("div", {
    className: "actions"
  }, wp.element.createElement(Button, {
    className: loading ? 'is-loading' : null,
    type: "submit",
    disabled: loading,
    label: __('Save', 'neve'),
    icon: loading ? 'update' : 'editor-break'
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-dashboard'),
      _getOption = _select.getOption;

  return {
    getOption: function getOption(slug) {
      return _getOption(slug);
    }
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      changeModuleOption = _dispatch.changeModuleOption,
      _setToast = _dispatch.setToast;

  return {
    changeOption: function changeOption(slug, value) {
      return changeModuleOption(slug, value);
    },
    setToast: function setToast(message) {
      return _setToast(message);
    }
  };
}))(InputForm));

/***/ }),

/***/ "./src/Components/Options/Toggle.js":
/*!******************************************!*\
  !*** ./src/Components/Options/Toggle.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/rest */ "./src/utils/rest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var useState = wp.element.useState;
var __ = wp.i18n.__;

var Toggle = function Toggle(_ref) {
  var slug = _ref.slug,
      label = _ref.label,
      getOption = _ref.getOption,
      changeOption = _ref.changeOption,
      setToast = _ref.setToast;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  return wp.element.createElement("div", {
    className: "module-option toggle"
  }, wp.element.createElement(ToggleControl, {
    checked: getOption(slug),
    label: label,
    onChange: function onChange(value) {
      setLoading(true);
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["changeOption"])(slug, value).then(function (r) {
        if (r.success) {
          changeOption(slug, value);
          setToast(true);
          setLoading(false);
          return false;
        }

        setToast(false);
        setLoading(false);
      });
    }
  }), loading && wp.element.createElement(Dashicon, {
    size: 18,
    icon: "update",
    className: "is-loading"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-dashboard'),
      _getOption = _select.getOption;

  return {
    getOption: function getOption(slug) {
      return _getOption(slug);
    }
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      changeModuleOption = _dispatch.changeModuleOption,
      _setToast = _dispatch.setToast;

  return {
    changeOption: function changeOption(slug, value) {
      return changeModuleOption(slug, value);
    },
    setToast: function setToast(message) {
      return _setToast(message);
    }
  };
}))(Toggle));

/***/ }),

/***/ "./src/Components/PluginCard.js":
/*!**************************************!*\
  !*** ./src/Components/PluginCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */


var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var useState = wp.element.useState;

var Card = function Card(props) {
  var slug = props.slug,
      data = props.data;
  var _props$data = props.data,
      banner = _props$data.banner,
      name = _props$data.name,
      description = _props$data.description,
      version = _props$data.version,
      author = _props$data.author;

  var _useState = useState(data.cta),
      _useState2 = _slicedToArray(_useState, 2),
      action = _useState2[0],
      setAction = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inProgress = _useState4[0],
      setInProgress = _useState4[1];

  var stringMap = {
    'install': {
      "static": __('Install', 'neve'),
      progress: __('Installing', 'neve')
    },
    'activate': {
      "static": __('Activate', 'neve'),
      progress: __('Activating', 'neve')
    },
    'deactivate': {
      "static": __('Deactivate', 'neve'),
      progress: __('Deactivating', 'neve')
    }
  };
  return wp.element.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['card', 'plugin', slug])
  }, wp.element.createElement("div", {
    className: "card-header"
  }, wp.element.createElement("img", {
    src: banner,
    alt: __('Banner Image', 'name')
  })), wp.element.createElement("div", {
    className: "card-body"
  }, wp.element.createElement("h3", {
    className: "card-title"
  }, name), wp.element.createElement("p", {
    className: "card-description"
  }, description)), wp.element.createElement("div", {
    className: "card-footer"
  }, wp.element.createElement("div", {
    className: "plugin-data"
  }, wp.element.createElement("span", {
    className: "version"
  }, "v", version), " | ", wp.element.createElement("span", {
    className: "author"
  }, author)), wp.element.createElement(Button, {
    className: "plugin-action",
    isPrimary: ['install', 'activate'].includes(action),
    isSecondary: 'deactivate' === action,
    disabled: inProgress,
    onClick: function onClick() {
      setInProgress(true);

      if ('install' === action) {
        installPlugin(slug).then(function (r) {
          if (!r.success) {
            // Todo handle error with toasts?
            setInProgress(false);
            return false;
          }

          setInProgress(false);
          setAction('activate');
        });
        return false;
      }

      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_1__["get"])(data[action], true).then(function (r) {
        if (!r.ok) {
          // Todo handle error with toasts?
          setInProgress(false);
          return false;
        }

        if ('activate' === action) {
          setAction('deactivate');
        } else {
          setAction('activate');
        }

        setInProgress(false);
      });
    }
  }, !inProgress && stringMap[action]["static"], inProgress && wp.element.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, wp.element.createElement(Dashicon, {
    icon: "update"
  }), stringMap[action].progress + '...'))));
};

var installPlugin = function installPlugin(slug) {
  return new Promise(function (resolve) {
    wp.updates.ajax('install-plugin', {
      slug: slug,
      success: function success(r) {
        resolve({
          success: true
        });
      },
      error: function error(err) {
        // errorCode, errorMessage are params of err if we toast.
        resolve({
          success: false
        });
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/Components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
/* harmony import */ var _LicenseCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LicenseCard */ "./src/Components/LicenseCard.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast */ "./src/Components/Toast.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */



var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
var useState = wp.element.useState;

var Sidebar = function Sidebar(_ref) {
  var currentTab = _ref.currentTab;

  var _useState = useState(neveDash.options.logger || false),
      _useState2 = _slicedToArray(_useState, 2),
      tracking = _useState2[0],
      setTracking = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      toast = _useState4[0],
      setToast = _useState4[1];

  var _useState5 = useState('success'),
      _useState6 = _slicedToArray(_useState5, 2),
      toastType = _useState6[0],
      setToastType = _useState6[1];

  return wp.element.createElement("div", {
    className: "sidebar-wrap"
  }, neveDash.pro && wp.element.createElement(_LicenseCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isVisible: 'pro' === currentTab
  }), wp.element.createElement("aside", {
    className: "sidebar card"
  }, wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", null, __('Neve Community', 'neve')), wp.element.createElement("p", null, __('Join the community of Neve users. Get connected, share opinions, ask questions and help each other!')), wp.element.createElement("a", {
    href: "https://www.facebook.com/groups/648646435537266/"
  }, __('Join our Facebook Group', 'neve'))), wp.element.createElement("hr", null), wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", null, __('Leave us a review', 'neve')), wp.element.createElement("p", null, __('Are you are enjoying Neve? We would love to hear your feedback.', 'neve')), wp.element.createElement("a", {
    href: "https://www.facebook.com/groups/648646435537266/"
  }, __('Join our Facebook Group', 'neve'))), wp.element.createElement("hr", null), wp.element.createElement("div", {
    className: "sidebar-section"
  }, wp.element.createElement("h4", null, __('Contributing', 'neve')), wp.element.createElement("p", null, __('Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.', 'neve'), "\xA0", wp.element.createElement("a", {
    href: "https://docs.themeisle.com/article/1122-neve-usage-tracking"
  }, __('What do we track?', 'neve'))), wp.element.createElement(ToggleControl, {
    checked: tracking,
    label: __('Allow Anonymous Tracking', 'neve'),
    onChange: function onChange(value) {
      setTracking(value);
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.api + '/toggle_tracking', {
        value: value
      }).then(function (response) {
        if (!response.success) {
          setToastType('error');
          setToast(__('Could not update option. Please try again.', 'neve'));
          setTracking(!value);
          return false;
        }

        setToastType('success');
        setToast(response.message);
      });
    }
  }), toast && wp.element.createElement(_Toast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dismiss: setToast,
    message: toast,
    type: toastType
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/Components/Snackbar.js":
/*!************************************!*\
  !*** ./src/Components/Snackbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Snackbar = wp.components.Snackbar;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
var compose = wp.compose.compose;
var __ = wp.i18n.__;

var GlobalSnackbar = function GlobalSnackbar(_ref) {
  var toast = _ref.toast,
      setToast = _ref.setToast;
  useEffect(function () {
    setTimeout(function () {
      setToast(null);
    }, 3000);
  }, []);
  var message = toast();
  var style = {
    opacity: null === message ? 0 : 1
  };
  return wp.element.createElement("div", {
    style: style
  }, wp.element.createElement(Snackbar, {
    className: "dash-notice"
  }, 'boolean' === typeof message ? false === message ? __('Could not Update Option. Please try again.', 'neve') : __('Option Updated', 'neve') : toast()));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _setToast = _dispatch.setToast;

  return {
    setToast: function setToast(message) {
      return _setToast(message);
    }
  };
}), withSelect(function (select) {
  var _select = select('neve-dashboard'),
      getToast = _select.getToast;

  return {
    toast: function toast() {
      return getToast();
    }
  };
}))(GlobalSnackbar));

/***/ }),

/***/ "./src/Components/TabsContent.js":
/*!***************************************!*\
  !*** ./src/Components/TabsContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* global neveDash */



var TabsContent = function TabsContent(_ref) {
  var currentTab = _ref.currentTab,
      setTab = _ref.setTab;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['tab-content', 'columns', currentTab]);
  return wp.element.createElement("div", {
    className: classes
  }, _utils_common__WEBPACK_IMPORTED_MODULE_0__["tabs"][currentTab].render(setTab));
};

/* harmony default export */ __webpack_exports__["default"] = (TabsContent);

/***/ }),

/***/ "./src/Components/Toast.js":
/*!*********************************!*\
  !*** ./src/Components/Toast.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var useEffect = wp.element.useEffect;
var Dashicon = wp.components.Dashicon;

var Toast = function Toast(_ref) {
  var message = _ref.message,
      dismiss = _ref.dismiss,
      time = _ref.time,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type;
  useEffect(function () {
    var timeout = setTimeout(function () {
      dismiss('');
      clearTimeout(timeout);
    }, time || 2000);
  });
  var iconMap = {
    'info': 'info',
    'error': 'no',
    'success': 'yes',
    'warning': 'warning'
  };
  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(['toast', 'components-animate__appear', 'is-from-middle', type]);
  return wp.element.createElement("div", {
    className: classes
  }, wp.element.createElement(Dashicon, {
    icon: iconMap[type]
  }), wp.element.createElement("span", null, message));
};

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/App */ "./src/Components/App.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducer */ "./src/store/reducer.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors */ "./src/store/selectors.js");
/* harmony import */ var _Components_Onboarding_store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Onboarding/store/reducer */ "./src/Components/Onboarding/store/reducer.js");
/* harmony import */ var _Components_Onboarding_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Onboarding/store/actions */ "./src/Components/Onboarding/store/actions.js");
/* harmony import */ var _Components_Onboarding_store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Onboarding/store/selectors */ "./src/Components/Onboarding/store/selectors.js");


var registerStore = wp.data.registerStore;
var render = wp.element.render;



registerStore('neve-dashboard', {
  reducer: _store_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _store_actions__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _store_selectors__WEBPACK_IMPORTED_MODULE_4__["default"]
});



registerStore('neve-onboarding', {
  reducer: _Components_Onboarding_store_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  actions: _Components_Onboarding_store_actions__WEBPACK_IMPORTED_MODULE_6__["default"],
  selectors: _Components_Onboarding_store_selectors__WEBPACK_IMPORTED_MODULE_7__["default"]
});

var Root = function Root() {
  return wp.element.createElement(_Components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

render(wp.element.createElement(Root, null), document.getElementById('neve-dashboard'));

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  setTab: function setTab(tab) {
    return {
      type: 'SET_TAB',
      payload: {
        tab: tab
      }
    };
  },
  setSettings: function setSettings(object) {
    return {
      type: 'SET_SETTINGS',
      payload: {
        object: object
      }
    };
  },
  changeModuleStatus: function changeModuleStatus(moduleSlug, value) {
    return {
      type: 'TOGGLE_MODULE',
      payload: {
        moduleSlug: 'nv_pro_' + moduleSlug + '_status',
        value: value
      }
    };
  },
  changeModuleOption: function changeModuleOption(optionSlug, optionValue) {
    return {
      type: 'CHANGE_MODULE_OPTION',
      payload: {
        optionStatus: 'nv_pro_' + optionSlug,
        optionValue: optionValue
      }
    };
  },
  changeLicenseTier: function changeLicenseTier(tier) {
    return {
      type: 'UPDATE_LICENSE_TIER',
      payload: {
        tier: tier
      }
    };
  },
  setToast: function setToast(message) {
    return {
      type: 'UPDATE_TOAST_MESSAGE',
      payload: message
    };
  }
});

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global wp, neveDash  */

var initialState = {
  settings: {},
  tier: neveDash.pro ? neveDash.license.tier : 0,
  toast: null,
  currentTab: 'start'
};
var hash = Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__["getTabHash"])();

if (null !== hash) {
  initialState.currentTab = hash;
}

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TAB':
      var tab = action.payload.tab;
      return _objectSpread({}, state, {
        currentTab: tab
      });

    case 'SET_SETTINGS':
      var object = action.payload.object;
      return _objectSpread({}, state, {
        settings: object
      });

    case 'TOGGLE_MODULE':
      var _action$payload = action.payload,
          moduleSlug = _action$payload.moduleSlug,
          value = _action$payload.value;
      return _objectSpread({}, state, {
        settings: _objectSpread({}, state.settings, _defineProperty({}, moduleSlug, value))
      });

    case 'CHANGE_MODULE_OPTION':
      var _action$payload2 = action.payload,
          optionStatus = _action$payload2.optionStatus,
          optionValue = _action$payload2.optionValue;
      return _objectSpread({}, state, {
        settings: _objectSpread({}, state.settings, _defineProperty({}, optionStatus, optionValue))
      });

    case 'UPDATE_LICENSE_TIER':
      return _objectSpread({}, state, {
        tier: action.payload.tier
      });

    case 'UPDATE_TOAST_MESSAGE':
      return _objectSpread({}, state, {
        toast: action.payload
      });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/store/selectors.js":
/*!********************************!*\
  !*** ./src/store/selectors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getModuleStatus: function getModuleStatus(state, slug) {
    return state.settings['nv_pro_' + slug + '_status'];
  },
  getOption: function getOption(state, slug) {
    return state.settings['nv_pro_' + slug];
  },
  getLicenseTier: function getLicenseTier(state) {
    return state.tier;
  },
  getToast: function getToast(state) {
    return state.toast;
  },
  getTab: function getTab(state) {
    return state.currentTab;
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getUrlParam, addUrlHash, getTabHash, tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParam", function() { return getUrlParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUrlHash", function() { return addUrlHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabHash", function() { return getTabHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
/* harmony import */ var _Components_Content_StarterSites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Content/StarterSites */ "./src/Components/Content/StarterSites.js");
/* harmony import */ var _Components_Content_Start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Content/Start */ "./src/Components/Content/Start.js");
/* harmony import */ var _Components_Content_Pro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Content/Pro */ "./src/Components/Content/Pro.js");
/* harmony import */ var _Components_Content_Plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Content/Plugins */ "./src/Components/Content/Plugins.js");
/* harmony import */ var _Components_Content_Help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Content/Help */ "./src/Components/Content/Help.js");
/* harmony import */ var _Components_Content_Changelog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Content/Changelog */ "./src/Components/Content/Changelog.js");
/* harmony import */ var _Components_Content_FreePro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Content/FreePro */ "./src/Components/Content/FreePro.js");
/* global neveDash */








var getUrlParam = function getUrlParam(param) {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
};

var addUrlHash = function addUrlHash(hash) {
  window.location.hash = hash;
};

var getTabHash = function getTabHash() {
  var hash = window.location.hash;

  if ('string' !== typeof window.location.hash) {
    return null;
  }

  hash = hash.substring(1);

  if (!Object.keys(tabs).includes(hash)) {
    return null;
  }

  return hash;
};

var tabs = {
  'start': {
    label: 'Getting Started',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Start__WEBPACK_IMPORTED_MODULE_1__["default"], {
        setTab: setTab
      });
    }
  },
  'plugins': {
    label: 'Useful Plugins',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Plugins__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  },
  'help': {
    label: 'Help & docs',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Help__WEBPACK_IMPORTED_MODULE_4__["default"], {
        setTab: setTab
      });
    }
  },
  'changelog': {
    label: 'Changelog',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Changelog__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }
  },
  'starter-sites': {
    label: 'Starter Sites',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_StarterSites__WEBPACK_IMPORTED_MODULE_0__["default"], null);
    }
  },
  'free-pro': {
    label: 'Free vs Pro',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_FreePro__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    }
  }
};

if (neveDash.pro) {
  tabs.pro = {
    label: 'Neve Pro',
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Pro__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  };
  delete tabs['free-pro'];
}



/***/ }),

/***/ "./src/utils/rest.js":
/*!***************************!*\
  !*** ./src/utils/rest.js ***!
  \***************************/
/*! exports provided: changeOption, send, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOption", function() { return changeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var changeOption = function changeOption(option, value) {
  var module = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  option = 'nv_pro_' + option + (module ? '_status' : '');
  var model = new wp.api.models.Settings(_defineProperty({}, option, value));
  return new Promise(function (resolve) {
    model.save().then(function (r) {
      if (!r || !r[option] === value) {
        resolve({
          success: false
        });
      }

      resolve(isValid(option, r));
    });
  });
};
var send = function send(route, data) {
  var simple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return requestData(route, simple, data);
};
var get = function get(route) {
  var simple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return requestData(route, simple, {}, 'GET');
};

var requestData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
    var simple,
        data,
        method,
        options,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            simple = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            method = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'POST';
            options = {
              method: method,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-wp-nonce': neveDash.nonce
              }
            };

            if ('POST' === method) {
              options.body = JSON.stringify(data);
            }

            _context.next = 7;
            return fetch(route, options).then(function (response) {
              return simple ? response : response.json();
            });

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var isValid = function isValid(option, optionsArray) {
  if ('nv_pro_typekit_id' === option) {
    if (!optionsArray['neve_pro_typekit_data']) {
      return {
        message: __('Typekit Project ID is invalid', 'neve'),
        success: false
      };
    }
  }

  return {
    success: true
  };
};

/***/ }),

/***/ "./src/utils/site-import.js":
/*!**********************************!*\
  !*** ./src/utils/site-import.js ***!
  \**********************************/
/*! exports provided: importWidgets, importMods, installPlugins, importContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importWidgets", function() { return importWidgets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importMods", function() { return importMods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installPlugins", function() { return installPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importContent", function() { return importContent; });
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest */ "./src/utils/rest.js");
/* global neveDash */

var importWidgets = function importWidgets(data) {
  return Object(_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/import_widgets', data);
};
var importMods = function importMods(data) {
  return Object(_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/import_theme_mods', data);
};
var installPlugins = function installPlugins(pluginArray) {
  return Object(_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/install_plugins', pluginArray);
};
var importContent = function importContent(data) {
  return Object(_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/import_content', data);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvSW1wb3J0U3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWlncmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvUHJldmlld0ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvU3RhcnRlclNpdGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9JbnB1dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGx1Z2luQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RhYnNDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NpdGUtaW1wb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIndwIiwiZWxlbWVudCIsIkRhc2hpY29uIiwiY29tcG9uZW50cyIsIkFjY29yZGlvbiIsInByb3BzIiwiaXNPcGVuIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImNsYXNzbmFtZXMiLCJoZWlnaHQiLCJkYXRhIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkFwcCIsInNldFNldHRpbmdzIiwidG9hc3QiLCJjdXJyZW50VGFiIiwic2V0VGFiIiwiaXNPbmJvYXJkaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXR0aW5ncyIsImFwaSIsImxvYWRQcm9taXNlIiwidGhlbiIsIm1vZGVscyIsIlNldHRpbmdzIiwiZmV0Y2giLCJyIiwid3JhcENsYXNzZXMiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiZ2V0T25ib2FyZGluZ1N0YXR1cyIsIkNhcmQiLCJpY29uIiwiaWNvbkFsdCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lcyIsIl9fIiwiaTE4biIsIkNoYW5nZWxvZyIsIm5ldmVEYXNoIiwiY2hhbmdlbG9nIiwiY2hhbmdlbG9nUHJvIiwic2hvd0ZvclBybyIsInNldFNob3dGb3JQcm8iLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJhc3NldHMiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaWQiLCJTdGFydCIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJzaXRlcyIsInNldFNpdGVzIiwic2V0VXBzZWxscyIsInNldE1pZ3JhdGlvbkRhdGEiLCJlcnJvciIsInNldEVycm9yIiwiZ2V0Iiwib25ib2FyZGluZyIsInJvb3QiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlbW90ZSIsInVwc2VsbCIsIm1pZ3JhdGVfZGF0YSIsInVwc2VsbHMiLCJtaWdyYXRpb25EYXRhIiwiZ2V0U2l0ZXMiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJzaG93VG9vbHRpcCIsImhpZGVUb29sdGlwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzaCIsImdldFRhYkhhc2giLCJyZW5kZXJIZWFkIiwicmVuZGVyTmF2aWdhdGlvbiIsInN0cmluZ3MiLCJoZWFkZXIiLCJ0YWJzIiwiYWRkVXJsSGFzaCIsImxhYmVsIiwiTGljZW5zZUNhcmQiLCJpc1Zpc2libGUiLCJjaGFuZ2VUaWVyIiwibGljZW5zZSIsInByb0FwaSIsInZhbGlkIiwia2V5Iiwic2V0S2V5Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwic2V0VmFsaWQiLCJleHBpcmF0aW9uIiwic2V0RXhwaXJhdGlvbiIsInNldFRvYXN0IiwidG9hc3RUeXBlIiwic2V0VG9hc3RUeXBlIiwidG9nZ2xlTGljZW5zZSIsInRvRG8iLCJzZW5kIiwiYWN0aW9uIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidGllciIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiY2hhbmdlTGljZW5zZVRpZXIiLCJuZXdUaWVyIiwiTG9hZGluZyIsIkFycmF5IiwiZnJvbSIsIm5vdGlmaWNhdGlvbnMiLCJUb2dnbGVDb250cm9sIiwiTW9kdWxlQ2FyZCIsImNoYW5nZU1vZHVsZVN0YXR1cyIsImdldE1vZHVsZVN0YXR1cyIsIm5pY2VuYW1lIiwiYXZhaWxhYmlsaXR5TGV2ZWwiLCJvcHRpb25zIiwib3JkZXIiLCJkb2N1bWVudGF0aW9uIiwicmVxdWlyZWRfYWN0aW9ucyIsInVwZ3JhZGVMaW5rcyIsInJlbmRlck9wdGlvbnNBY2NvcmRpb25zIiwiZ3JvdXAiLCJvcHRpb25TbHVnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2hhbmdlT3B0aW9uIiwidXJsIiwiZ2V0TGljZW5zZVRpZXIiLCJOb3RpZmljYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjdGEiLCJ1cGRhdGUiLCJpblByb2dyZXNzIiwic2V0SW5Qcm9ncmVzcyIsImRvbmUiLCJzZXREb25lIiwidXBkYXRlRW50aXR5IiwiYXJncyIsImV4ZWN1dGVBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVwZGF0ZXMiLCJhamF4IiwicGF0aCIsInBsdWdpbiIsIk5vdGlmaWNhdGlvbnMiLCJQb3BvdmVyIiwiRWRpdG9yU2VsZWN0b3IiLCJvblNlYXJjaCIsImVkaXRvciIsInNldEN1cnJlbnRFZGl0b3IiLCJuaWNlTmFtZSIsInRvZ2dsZURyb3Bkb3duIiwiZ2V0Q3VycmVudEVkaXRvciIsIk1vZGFsIiwiSW1wb3J0TW9kYWwiLCJzZXRNb2RhbCIsInNldFNpdGUiLCJzaXRlRGF0YSIsImNvbnRlbnQiLCJjdXN0b21pemVyIiwid2lkZ2V0cyIsImdlbmVyYWwiLCJzZXRHZW5lcmFsIiwicGx1Z2luc1Byb2dyZXNzIiwic2V0UGx1Z2luc1Byb2dyZXNzIiwiY29udGVudFByb2dyZXNzIiwic2V0Q29udGVudFByb2dyZXNzIiwiY3VzdG9taXplclByb2dyZXNzIiwic2V0Q3VzdG9taXplclByb2dyZXNzIiwid2lkZ2V0c1Byb2dyZXNzIiwic2V0V2lkZ2V0c1Byb2dyZXNzIiwiZnJvbnRQYWdlSUQiLCJzZXRGcm9udFBhZ2VJRCIsImN1cnJlbnRTdGVwIiwic2V0Q3VycmVudFN0ZXAiLCJpbXBvcnRpbmciLCJzZXRJbXBvcnRpbmciLCJwbHVnaW5PcHRpb25zIiwic2V0UGx1Z2luT3B0aW9ucyIsImdldFBsdWdpbk9wdGlvbnMiLCJtYW5kYXRvcnkiLCJvcHRpb25hbCIsImRlZmF1bHRPZmYiLCJyZW5kZXJOb3RlIiwiZXh0ZXJuYWwiLCJyZW5kZXJPcHRpb25zIiwicmVuZGVyUGx1Z2lucyIsImFsbFBsdWdpbnMiLCJfX2h0bWwiLCJydW5JbXBvcnQiLCJjbGVhciIsInJ1bkltcG9ydENvbnRlbnQiLCJpbnN0YWxsUGx1Z2lucyIsImhhbmRsZUVycm9yIiwicnVuSW1wb3J0Q3VzdG9taXplciIsImltcG9ydENvbnRlbnQiLCJjb250ZW50RmlsZSIsInNvdXJjZSIsImZyb250UGFnZSIsInNob3BQYWdlcyIsImRlbW9TbHVnIiwicnVuSW1wb3J0V2lkZ2V0cyIsImltcG9ydE1vZHMiLCJpbXBvcnREb25lIiwiaW1wb3J0V2lkZ2V0cyIsInN0ZXAiLCJjb2RlIiwiY2xvc2VNb2RhbCIsImRpc21pc3NTaXRlRGF0YSIsImFsbE9wdGlvbnNPZmYiLCJldmVyeSIsImsiLCJlZGl0TGlua01hcCIsImhvbWVVcmwiLCJlZGl0TGluayIsInRyb3VibGVzaG9vdGluZyIsInN1cHBvcnQiLCJsb2dVcmwiLCJnZXRDdXJyZW50U2l0ZSIsInNldEltcG9ydE1vZGFsU3RhdHVzIiwic2V0Q3VycmVudFNpdGUiLCJJbXBvcnRTdGVwcGVyIiwicHJvZ3Jlc3MiLCJ3aWxsRG8iLCJzdGVwc01hcCIsIk9uYm9hcmRpbmciLCJwcmV2aWV3T3BlbiIsImN1cnJlbnRTaXRlRGF0YSIsImltcG9ydE1vZGFsIiwiY2FuY2VsT25ib2FyZGluZyIsIm1pZ3JhdGlvbiIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJtYXhTaG93biIsInNldE1heFNob3duIiwiZmlsdGVyU2l0ZXMiLCJ2YWx1ZXMiLCJmdXNlIiwiRnVzZSIsImluY2x1ZGVTY29yZSIsInNlYXJjaCIsImdldEFsbFNpdGVzIiwic2l0ZXNEYXRhIiwidXBzZWxsc0RhdGEiLCJyZW5kZXJTaXRlcyIsImFsbERhdGEiLCJzaXRlIiwiZ2V0U2l0ZU5hdiIsInByZXYiLCJhbGxTaXRlcyIsInBvc2l0aW9uIiwiaW5kZXhPZiIsInJlbmRlck1pZ3JhdGlvbiIsInF1ZXJ5Iiwid2lkdGgiLCJkaXNwbGF5Iiwic2V0T25ib2FyZGluZ1N0YXRlIiwiZ2V0VXBzZWxscyIsImdldFByZXZpZXdTdGF0dXMiLCJnZXRJbXBvcnRNb2RhbFN0YXR1cyIsImdldE1pZ3JhdGlvbkRhdGEiLCJNaWdyYXRpb24iLCJoZWFkaW5nIiwic2NyZWVuc2hvdCIsInRoZW1lX25hbWUiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlX25hbWUiLCJQcmV2aWV3RnJhbWUiLCJuZXh0Iiwic2V0UHJldmlldyIsInNldFByZXZpZXdTdGF0dXMiLCJTdGFydGVyU2l0ZUNhcmQiLCJwYXlsb2FkIiwicHJldmlld1N0YXR1cyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImltcG9ydE1vZGFsU3RhdHVzIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50U2l0ZSIsIklucHV0Rm9ybSIsImdldE9wdGlvbiIsInNldFZhbHVlIiwiY2hhbmdlU2V0dGluZyIsImNoYW5nZU1vZHVsZU9wdGlvbiIsIlRvZ2dsZSIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJpbnN0YWxsUGx1Z2luIiwib2siLCJhbGlnbkl0ZW1zIiwiZXJyIiwiU2lkZWJhciIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwib25ib2FyZGluZ1JlZHVjZXIiLCJvbmJvYXJkaW5nQWN0aW9ucyIsIm9uYm9hcmRpbmdTZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGVTbHVnIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TdGF0dXMiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsIm9wdGlvbiIsIm1vZHVsZSIsIm1vZGVsIiwic2F2ZSIsImlzVmFsaWQiLCJyb3V0ZSIsInNpbXBsZSIsInJlcXVlc3REYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsIm5vbmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJvcHRpb25zQXJyYXkiLCJwbHVnaW5BcnJheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsU0FBUztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGtDQUFrQzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FB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OztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLDRIQUE0SDs7QUFFNUg7QUFDQSxrTEFBa0w7O0FBRWxMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSw4TEFBOEwsU0FBUztBQUN2TTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VCxDQUFvQkMsSUFBcEIsR0FBMkIsb0JBQTVCLEVBQWtEMUYsSUFBbEQsQ0FBWDtBQUNBLENBRk07QUFJQSxJQUFNMk8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDK0osV0FBRCxFQUFpQjtBQUM5QyxTQUFPblEsa0RBQUksQ0FBQ2pHLFFBQVEsQ0FBQ21ELFVBQVQsQ0FBb0JDLElBQXBCLEdBQTJCLGtCQUE1QixFQUFnRGdULFdBQWhELENBQVg7QUFDQSxDQUZNO0FBSUEsSUFBTTVKLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzlPLElBQUQsRUFBVTtBQUN0QyxTQUFPdUksa0RBQUksQ0FBQ2pHLFFBQVEsQ0FBQ21ELFVBQVQsQ0FBb0JDLElBQXBCLEdBQTJCLGlCQUE1QixFQUErQzFGLElBQS9DLENBQVg7QUFDQSxDQUZNLEM7Ozs7Ozs7Ozs7O0FDZlAsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiLi9idWlsZC9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBGdXNlLmpzIHY1LjEuMCAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGJpdGFwU2NvcmUoXG4gIHBhdHRlcm4sXG4gIHsgZXJyb3JzID0gMCwgY3VycmVudExvY2F0aW9uID0gMCwgZXhwZWN0ZWRMb2NhdGlvbiA9IDAsIGRpc3RhbmNlID0gMTAwIH1cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBtYXRjaGVkSW5kaWNlZChtYXRjaG1hc2sgPSBbXSwgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSkge1xuICBsZXQgbWF0Y2hlZEluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBlbmRdKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG4gIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkSW5kaWNlc1xufVxuXG5mdW5jdGlvbiBiaXRhcFNlYXJjaChcbiAgdGV4dCxcbiAgcGF0dGVybixcbiAgcGF0dGVybkFscGhhYmV0LFxuICB7XG4gICAgbG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gMTAwLFxuICAgIHRocmVzaG9sZCA9IDAuNixcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IGZhbHNlLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBmYWxzZVxuICB9XG4pIHtcbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbik7XG5cbiAgLy8gYSBtYXNrIG9mIHRoZSBtYXRjaGVzXG4gIGNvbnN0IG1hdGNoTWFzayA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRMZW47IGkgKz0gMSkge1xuICAgIG1hdGNoTWFza1tpXSA9IDA7XG4gIH1cblxuICBpZiAoYmVzdExvY2F0aW9uICE9PSAtMSkge1xuICAgIGxldCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiAwLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KTtcbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuXG4gICAgLy8gV2hhdCBhYm91dCBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uPyAoc3BlZWQgdXApXG4gICAgYmVzdExvY2F0aW9uID0gdGV4dC5sYXN0SW5kZXhPZihwYXR0ZXJuLCBleHBlY3RlZExvY2F0aW9uICsgcGF0dGVybkxlbik7XG5cbiAgICBpZiAoYmVzdExvY2F0aW9uICE9PSAtMSkge1xuICAgICAgbGV0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogMCxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlXG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG5cbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG5cbiAgY29uc3QgbWFzayA9IDEgPDwgKHBhdHRlcm5MZW4gPD0gMzEgPyBwYXR0ZXJuTGVuIC0gMSA6IDMwKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMDtcbiAgICBsZXQgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNoYXJNYXRjaCkge1xuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoKGJpdEFycltqICsgMV0gPDwgMSkgfCAxKSAmIGNoYXJNYXRjaDtcblxuICAgICAgLy8gU3Vic2VxdWVudCBwYXNzZXM6IGZ1enp5IG1hdGNoXG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBiaXRBcnJbal0gfD1cbiAgICAgICAgICAoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IGkgKyAxLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6ICFmaW5hbFNjb3JlID8gMC4wMDEgOiBmaW5hbFNjb3JlXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgcmVzdWx0Lm1hdGNoZWRJbmRpY2VzID0gbWF0Y2hlZEluZGljZWQobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBwYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBsZXQgbWFzayA9IHt9O1xuICBsZXQgbGVuID0gcGF0dGVybi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldID0gMDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtYXNrW3BhdHRlcm4uY2hhckF0KGkpXSB8PSAxIDw8IChsZW4gLSBpIC0gMSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gICAgICBsb2NhdGlvbiA9IDAsXG4gICAgICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gICAgICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgICAgIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAgICAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gICAgICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgICAgIGRpc3RhbmNlID0gMTAwLFxuICAgICAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gICAgICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICAgICAgdGhyZXNob2xkID0gMC42LFxuICAgICAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgY29tcGFyaXNvbnMgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgICAvLyBXaGVuIHRydWUsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAgICAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IGZhbHNlLFxuICAgICAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSAxLFxuXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IGZhbHNlXG4gICAgfVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH07XG5cbiAgICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiAke01BWF9CSVRTfS5gKVxuICAgIH1cblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wYXR0ZXJuQWxwaGFiZXQgPSBwYXR0ZXJuQWxwaGFiZXQodGhpcy5wYXR0ZXJuKTtcbiAgfVxuXG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuICAgIHJldHVybiB0aGlzLnNlYXJjaEluU3RyaW5nKHRleHQpXG4gIH1cblxuICBzZWFyY2hJblN0cmluZyh0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0Lm1hdGNoZWRJbmRpY2VzID0gW1swLCB0ZXh0Lmxlbmd0aCAtIDFdXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIGJpdGFwU2VhcmNoKHRleHQsIHRoaXMucGF0dGVybiwgdGhpcy5wYXR0ZXJuQWxwaGFiZXQsIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGluY2x1ZGVNYXRjaGVzXG4gICAgfSlcbiAgfVxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcbi8vIE1hdGNoIHR5cGU6IGV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBpbmNsdWRlIGBmaWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4gPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gXCInXCI7XG5cbmNvbnN0IHNhbml0aXplID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZShwYXR0ZXJuKTtcbiAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2Yoc2FuaXRpemVkUGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA+IC0xO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgZXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuLFxuICBzYW5pdGl6ZSxcbiAgbWF0Y2hcbn07XG5cbi8vIFRva2VuOiAhZmlyZVxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYGZpcmVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQxID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09ICchJztcblxuY29uc3Qgc2FuaXRpemUkMSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2gkMSA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQxKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pID09PSAtMTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQxLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMSxcbiAgbWF0Y2g6IG1hdGNoJDFcbn07XG5cbi8vIFRva2VuOiBeZmlsZVxuLy8gTWF0Y2ggdHlwZTogcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBmaWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnXic7XG5cbmNvbnN0IHNhbml0aXplJDIgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoJDIgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMihwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIHByZWZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDIsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQyLFxuICBtYXRjaDogbWF0Y2gkMlxufTtcblxuLy8gVG9rZW46ICFeZmlyZVxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBmaXJlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMyA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnIScgJiYgcGF0dGVybi5jaGFyQXQoMSkgPT0gJ14nO1xuXG5jb25zdCBzYW5pdGl6ZSQzID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDIpO1xuXG5jb25zdCBtYXRjaCQzID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDMocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDMsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQzLFxuICBtYXRjaDogbWF0Y2gkM1xufTtcblxuLy8gVG9rZW46IC5maWxlJFxuLy8gTWF0Y2ggdHlwZTogc3VmZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQ0ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgPT0gJyQnO1xuXG5jb25zdCBzYW5pdGl6ZSQ0ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDAsIHBhdHRlcm4ubGVuZ3RoIC0gMSk7XG5cbmNvbnN0IG1hdGNoJDQgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkNChwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBzdWZmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQ0LFxuICBzYW5pdGl6ZTogc2FuaXRpemUkNCxcbiAgbWF0Y2g6IG1hdGNoJDRcbn07XG5cbi8vIFRva2VuOiAhLmZpbGUkXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDUgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnICYmIHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgPT0gJyQnO1xuXG5jb25zdCBzYW5pdGl6ZSQ1ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyaW5nKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMSk7XG5cbmNvbnN0IG1hdGNoJDUgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkNShwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDUsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQ1LFxuICBtYXRjaDogbWF0Y2gkNVxufTtcblxuY29uc3QgSU5GSU5JVFkgPSAxIC8gMDtcblxuY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT5cbiAgIUFycmF5LmlzQXJyYXlcbiAgICA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4vLyBBZGFwdGVkIGZyb206XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL2Y0Y2EzOTZhNzk2NDM1NDIyYmQ0ZmQ0MWZhZGJkMjI1ZWRkZGYxNzUvLmludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuY29uc3QgYmFzZVRvU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKyAnJztcbiAgcmV0dXJuIHJlc3VsdCA9PSAnMCcgJiYgMSAvIHZhbHVlID09IC1JTkZJTklUWSA/ICctMCcgOiByZXN1bHRcbn07XG5cbmNvbnN0IHRvU3RyaW5nID0gKHZhbHVlKSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKSk7XG5cbmNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG5jb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcblxuY29uc3QgaXNEZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmNvbnN0IHF1ZXJ5ZnkgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5zcGxpdCgnfCcpLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkuc3BsaXQoLyArL2cpKTtcblxuLyoqXG4gKiBDb21tYW5kLWxpa2Ugc2VhcmNoaW5nXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogR2l2ZW4gbXVsdGlwbGUgc2VhcmNoIHRlcm1zIGRlbGltaXRlZCBieSBzcGFjZXMuZS5nLiBgXmpzY3JpcHQgLnB5dGhvbiQgcnVieSAhamF2YWAsXG4gKiBzZWFyY2ggaW4gYSBnaXZlbiB0ZXh0LlxuICpcbiAqIFNlYXJjaCBzeW50YXg6XG4gKlxuICogfCBUb2tlbiAgICAgICB8IE1hdGNoIHR5cGUgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBganNjcmlwdGAgICB8IGZ1enp5LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBtYXRjaCBganNjcmlwdGAgICAgICAgICAgICAgfFxuICogfCBgJ3B5dGhvbmAgICB8IGV4YWN0LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBpbmNsdWRlIGBweXRob25gICAgICAgICAgICAgfFxuICogfCBgIXJ1YnlgICAgICB8IGludmVyc2UtZXhhY3QtbWF0Y2ggICAgICAgIHwgSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgcnVieWAgICAgICAgfFxuICogfCBgXmphdmFgICAgICB8IHByZWZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBqYXZhYCAgICAgICAgICAgfFxuICogfCBgIV5lYXJsYW5nYCB8IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZWFybGFuZ2AgfFxuICogfCBgLmpzJGAgICAgICB8IHN1ZmZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmpzYCAgICAgICAgICAgICAgfFxuICogfCBgIS5nbyRgICAgICB8IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5nb2AgICAgICAgfFxuICpcbiAqIEEgc2luZ2xlIHBpcGUgY2hhcmFjdGVyIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nXG4gKiBxdWVyeSBtYXRjaGVzIGVudHJpZXMgdGhhdCBzdGFydCB3aXRoIGBjb3JlYCBhbmQgZW5kIHdpdGggZWl0aGVyYGdvYCwgYHJiYCxcbiAqIG9yYHB5YC5cbiAqXG4gKiBgYGBcbiAqIF5jb3JlIGdvJCB8IHJiJCB8IHB5JFxuICogYGBgXG4gKi9cbmNsYXNzIEV4dGVuZGVkU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlIH0gPSBvcHRpb25zO1xuICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gQSA8cGF0dGVybj46PEJpdGFwU2VhcmNoPiBrZXktdmFsdWUgcGFpciBmb3Igb3B0aW1pemluZyBzZWFyY2hpbmdcbiAgICB0aGlzLl9mdXp6eUNhY2hlID0ge307XG5cbiAgICBpZiAoaXNTdHJpbmcocGF0dGVybikgJiYgcGF0dGVybi50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeWZ5KHRoaXMucGF0dGVybik7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXRoaXMucXVlcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcblxuICAgIHRleHQgPSB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBtYXRjaEZvdW5kID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgcUxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IHFMZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBxdWVyeVtpXTtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgbWF0Y2hGb3VuZCA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gcGFydHMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHBhcnRzW2pdO1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9zZWFyY2godG9rZW4sIHRleHQpO1xuICAgICAgICBpZiAoIXJlc3VsdC5pc01hdGNoKSB7XG4gICAgICAgICAgLy8gQU5EIGNvbmRpdGlvbiwgc2hvcnQtY2lyY3VpdCBhbmQgbW92ZSBvbiB0byBuZXh0IHBhcnRcbiAgICAgICAgICBtYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG1hdGNoRm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxuXG4gIF9zZWFyY2gocGF0dGVybiwgdGV4dCkge1xuICAgIGlmIChleGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKHByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gcHJlZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChzdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHN1ZmZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWFyY2hlciA9IHRoaXMuX2Z1enp5Q2FjaGVbcGF0dGVybl07XG4gICAgICBpZiAoIXNlYXJjaGVyKSB7XG4gICAgICAgIHNlYXJjaGVyID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2Z1enp5Q2FjaGVbcGF0dGVybl0gPSBzZWFyY2hlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWFyY2hlci5zZWFyY2hJblN0cmluZyh0ZXh0KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBOR1JBTV9MRU4gPSAzO1xuXG5mdW5jdGlvbiBuZ3JhbShcbiAgdGV4dCxcbiAgeyBuID0gTkdSQU1fTEVOLCBwYWQgPSB0cnVlLCBzb3J0ID0gZmFsc2UgfVxuKSB7XG4gIGxldCBuR3JhbXMgPSBbXTtcblxuICBpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cblxuICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICBpZiAocGFkKSB7XG4gICAgdGV4dCA9IGAgJHt0ZXh0fSBgO1xuICB9XG5cbiAgbGV0IGluZGV4ID0gdGV4dC5sZW5ndGggLSBuICsgMTtcbiAgaWYgKGluZGV4IDwgMSkge1xuICAgIHJldHVybiBuR3JhbXNcbiAgfVxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgbkdyYW1zW2luZGV4XSA9IHRleHQuc3Vic3RyKGluZGV4LCBuKTtcbiAgfVxuXG4gIGlmIChzb3J0KSB7XG4gICAgbkdyYW1zLnNvcnQoKGEsIGIpID0+IChhID09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDEpKTtcbiAgfVxuXG4gIHJldHVybiBuR3JhbXNcbn1cblxuLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxuZnVuY3Rpb24gdW5pb24gKGFycjEsIGFycjIpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoICYmIGogPCBhcnIyLmxlbmd0aCkge1xuICAgIGxldCBpdGVtMSA9IGFycjFbaV07XG4gICAgbGV0IGl0ZW0yID0gYXJyMltqXTtcblxuICAgIGlmIChpdGVtMSA8IGl0ZW0yKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMSk7XG4gICAgICBpICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMiA8IGl0ZW0xKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMik7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0yKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goYXJyMVtpXSk7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgd2hpbGUgKGogPCBhcnIyLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGFycjJbal0pO1xuICAgIGogKz0gMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxuZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGFycjEsIGFycjIpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoICYmIGogPCBhcnIyLmxlbmd0aCkge1xuICAgIGxldCBpdGVtMSA9IGFycjFbaV07XG4gICAgbGV0IGl0ZW0yID0gYXJyMltqXTtcblxuICAgIGlmIChpdGVtMSA9PSBpdGVtMikge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTEpO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTEgPCBpdGVtMikge1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTEgPiBpdGVtMikge1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBqYWNjYXJkRGlzdGFuY2UobkdyYW0xLCBuR3JhbTIpIHtcbiAgbGV0IG5HcmFtVW5pb24gPSB1bmlvbihuR3JhbTEsIG5HcmFtMik7XG4gIGxldCBuR3JhbUludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbihuR3JhbTEsIG5HcmFtMik7XG5cbiAgcmV0dXJuIDEgLSBuR3JhbUludGVyc2VjdGlvbi5sZW5ndGggLyBuR3JhbVVuaW9uLmxlbmd0aFxufVxuXG5jbGFzcyBOR3JhbVNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIG9wdGlvbnMgPSB7IHRocmVzaG9sZDogMC42IH0pIHtcbiAgICAvLyBDcmVhdGUgdGhlIG5ncmFtLCBhbmQgc29ydCBpdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wYXR0ZXJuTmdyYW0gPSBuZ3JhbShwYXR0ZXJuLCB7IHNvcnQ6IHRydWUgfSk7XG4gIH1cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dE5ncmFtID0gdmFsdWUubmc7XG4gICAgaWYgKCF0ZXh0TmdyYW0pIHtcbiAgICAgIHRleHROZ3JhbSA9IG5ncmFtKHZhbHVlLiQsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgIHZhbHVlLm5nID0gdGV4dE5ncmFtO1xuICAgIH1cblxuICAgIGxldCBqYWNhcmRSZXN1bHQgPSBqYWNjYXJkRGlzdGFuY2UodGhpcy5wYXR0ZXJuTmdyYW0sIHRleHROZ3JhbSk7XG5cbiAgICBjb25zdCBpc01hdGNoID0gamFjYXJkUmVzdWx0IDwgdGhpcy5vcHRpb25zLnRocmVzaG9sZDtcblxuICAgIHJldHVybiB7XG4gICAgICBzY29yZTogaXNNYXRjaCA/IGphY2FyZFJlc3VsdCA6IDEsXG4gICAgICBpc01hdGNoXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IF9nZXQgPSAob2JqLCBwYXRoKSA9PiB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgZ290dGVuIHRvIHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuXG4gICAgICBsZXQga2V5ID0gcGF0aDtcbiAgICAgIGxldCByZW1haW5pbmcgPSBudWxsO1xuXG4gICAgICBpZiAoZG90SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGtleSA9IHBhdGguc2xpY2UoMCwgZG90SW5kZXgpO1xuICAgICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIGlmICghcmVtYWluaW5nICYmIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgIGxpc3QucHVzaCh0b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIF9nZXQodmFsdWVbaV0sIHJlbWFpbmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlbWFpbmluZykge1xuICAgICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICAgIF9nZXQodmFsdWUsIHJlbWFpbmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX2dldChvYmosIHBhdGgpO1xuXG4gIGlmIChhcnIpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbMF1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kZXgoXG4gIGtleXMsXG4gIGxpc3QsXG4gIHsgZ2V0Rm4gPSBnZXQsIG5ncmFtcyA9IGZhbHNlIH0gPSB7fVxuKSB7XG4gIGxldCBpbmRleGVkTGlzdCA9IFtdO1xuXG4gIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICBpZiAoaXNTdHJpbmcobGlzdFswXSkpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBsaXN0XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgLy8gICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCByZWNvcmQgPSB7XG4gICAgICAgICAgJDogdmFsdWUsXG4gICAgICAgICAgaWR4OiBpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgIHJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIGNvbnN0IGtleXNMZW4gPSBrZXlzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBsZXQgaXRlbSA9IGxpc3RbaV07XG5cbiAgICAgIGxldCByZWNvcmQgPSB7IGlkeDogaSwgJDoge30gfTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzTGVuOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbal07XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldEZuKGl0ZW0sIGtleSk7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGxldCBzdWJSZWNvcmRzID0gW107XG4gICAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBhcnJheUluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFycmF5SW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgICAgICAgLy8gICB2ID0gdi50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICBsZXQgc3ViUmVjb3JkID0geyAkOiB2YWx1ZSwgaWR4OiBhcnJheUluZGV4IH07XG5cbiAgICAgICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgICAgIHN1YlJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdWJSZWNvcmRzLnB1c2goc3ViUmVjb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGFyckxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGFyckxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgICBhcnJheUluZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlW2tdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjb3JkLiRba2V5XSA9IHN1YlJlY29yZHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgICAvLyAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7ICQ6IHZhbHVlIH07XG5cbiAgICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgICBzdWJSZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlY29yZC4kW2tleV0gPSBzdWJSZWNvcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXhlZExpc3QucHVzaChyZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleGVkTGlzdFxufVxuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0ge307XG4gICAgdGhpcy5fa2V5TmFtZXMgPSBbXTtcbiAgICB0aGlzLl9sZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXlcbiAgICBpZiAoa2V5cy5sZW5ndGggJiYgaXNTdHJpbmcoa2V5c1swXSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdGhpcy5fa2V5c1trZXldID0ge1xuICAgICAgICAgIHdlaWdodDogMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9rZXlOYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJuYW1lXCIgcHJvcGVydHkgaW4ga2V5IG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlOYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgIHRoaXMuX2tleU5hbWVzLnB1c2goa2V5TmFtZSk7XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJ3ZWlnaHRcIiBwcm9wZXJ0eSBpbiBrZXkgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdlaWdodCA8PSAwIHx8IHdlaWdodCA+PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1wid2VpZ2h0XCIgcHJvcGVydHkgaW4ga2V5IG11c3QgYmUgaW4gdGhlIHJhbmdlIG9mICgwLCAxKSdcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9rZXlzW2tleU5hbWVdID0ge1xuICAgICAgICAgIHdlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvdGFsV2VpZ2h0ICs9IHdlaWdodDtcbiAgICAgIH1cblxuICAgICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXlOYW1lID0gdGhpcy5fa2V5TmFtZXNbaV07XG4gICAgICAgIGNvbnN0IGtleVdlaWdodCA9IHRoaXMuX2tleXNba2V5TmFtZV0ud2VpZ2h0O1xuICAgICAgICB0aGlzLl9rZXlzW2tleU5hbWVdLndlaWdodCA9IGtleVdlaWdodCAvIHRvdGFsV2VpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQoa2V5LCBuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XSA/IHRoaXMuX2tleXNba2V5XVtuYW1lXSA6IC0xXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TmFtZXNcbiAgfVxuICBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoXG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9rZXlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtYXRjaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1tpXTtcblxuICAgIGlmICghaXNEZWZpbmVkKG1hdGNoLmluZGljZXMpIHx8IG1hdGNoLmluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzOiBtYXRjaC5pbmRpY2VzLFxuICAgICAgdmFsdWU6IG1hdGNoLnZhbHVlXG4gICAgfTtcblxuICAgIGlmIChtYXRjaC5rZXkpIHtcbiAgICAgIG9iai5rZXkgPSBtYXRjaC5rZXk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TY29yZShyZXN1bHQsIGRhdGEpIHtcbiAgZGF0YS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbn1cblxuY29uc3QgQmFzaWNPcHRpb25zID0ge1xuICAvLyBXaGVuIHRydWUsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb25cbiAgc29ydEZuOiAoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmVcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBFbmFibGVkIGV4dGVuZGVkLXNlYXJjaGluZ1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3RvcihsaXN0LCBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMsIGluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICAvLyBgY2FzZVNlbnNpdGl2ZWAgaXMgZGVwcmVjYXRlZCwgdXNlIGBpc0Nhc2VTZW5zaXRpdmVgIGluc3RlYWRcbiAgICB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID0gb3B0aW9ucy5jYXNlU2Vuc2l0aXZlO1xuICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuY2FzZVNlbnNpdGl2ZTtcblxuICAgIHRoaXMuX3Byb2Nlc3NLZXlzKHRoaXMub3B0aW9ucy5rZXlzKTtcbiAgICB0aGlzLnNldENvbGxlY3Rpb24obGlzdCwgaW5kZXgpO1xuICB9XG5cbiAgc2V0Q29sbGVjdGlvbihsaXN0LCBpbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIHRoaXMubGlzdElzU3RyaW5nQXJyYXkgPSBpc1N0cmluZyhsaXN0WzBdKTtcblxuICAgIGlmIChpbmRleCkge1xuICAgICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0SW5kZXgodGhpcy5fY3JlYXRlSW5kZXgoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgobGlzdEluZGV4KSB7XG4gICAgdGhpcy5faW5kZXhlZExpc3QgPSBsaXN0SW5kZXg7XG4gIH1cblxuICBfcHJvY2Vzc0tleXMoa2V5cykge1xuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKGtleXMpO1xuICB9XG5cbiAgX2NyZWF0ZUluZGV4KCkge1xuICAgIHJldHVybiBjcmVhdGVJbmRleCh0aGlzLl9rZXlTdG9yZS5rZXlzKCksIHRoaXMubGlzdCwge1xuICAgICAgZ2V0Rm46IHRoaXMub3B0aW9ucy5nZXRGblxuICAgIH0pXG4gIH1cblxuICBzZWFyY2gocGF0dGVybiwgb3B0cyA9IHsgbGltaXQ6IGZhbHNlIH0pIHtcbiAgICBjb25zdCB7IHVzZUV4dGVuZGVkU2VhcmNoLCBzaG91bGRTb3J0IH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgc2VhcmNoZXIgPSBudWxsO1xuXG4gICAgaWYgKHVzZUV4dGVuZGVkU2VhcmNoKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBFeHRlbmRlZFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgTkdyYW1TZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHRoaXMuX3NlYXJjaFVzaW5nKHNlYXJjaGVyKTtcblxuICAgIHRoaXMuX2NvbXB1dGVTY29yZShyZXN1bHRzKTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICB0aGlzLl9zb3J0KHJlc3VsdHMpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxpbWl0ICYmIGlzTnVtYmVyKG9wdHMubGltaXQpKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBvcHRzLmxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0KHJlc3VsdHMpXG4gIH1cblxuICBfc2VhcmNoVXNpbmcoc2VhcmNoZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5faW5kZXhlZExpc3Q7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICAgIGlmICh0aGlzLmxpc3RJc1N0cmluZ0FycmF5KSB7XG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBsaXN0XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgICBsZXQgeyAkOiB0ZXh0LCBpZHggfSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSk7XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCB2YWx1ZTogdGV4dCB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHRleHQsXG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIG1hdGNoZXM6IFttYXRjaF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgY29uc3Qga2V5TmFtZXMgPSB0aGlzLl9rZXlTdG9yZS5rZXlzKCk7XG4gICAgICBjb25zdCBrZXlzTGVuID0gdGhpcy5fa2V5U3RvcmUuY291bnQoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHsgJDogaXRlbSwgaWR4IH0gPSBsaXN0W2ldO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXNMZW47IGogKz0gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBrZXlOYW1lc1tqXTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtW2tleV07XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBrIDwgbGVuOyBrICs9IDEpIHtcbiAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSBhcnJJdGVtLiQ7XG4gICAgICAgICAgICAgIGxldCBpZHggPSBhcnJJdGVtLmlkeDtcblxuICAgICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4oYXJySXRlbSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0LCBpZHggfTtcblxuICAgICAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKHZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCB9O1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfY29tcHV0ZVNjb3JlKHJlc3VsdHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgICAgIGNvbnN0IHNjb3JlTGVuID0gbWF0Y2hlcy5sZW5ndGg7XG5cbiAgICAgIGxldCB0b3RhbFdlaWdodGVkU2NvcmUgPSAxO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjb3JlTGVuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG1hdGNoZXNbal07XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0ua2V5O1xuICAgICAgICBjb25zdCBrZXlXZWlnaHQgPSB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5LCAnd2VpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHdlaWdodCA9IGtleVdlaWdodCA+IC0xID8ga2V5V2VpZ2h0IDogMTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPVxuICAgICAgICAgIGl0ZW0uc2NvcmUgPT09IDAgJiYga2V5V2VpZ2h0ID4gLTEgPyBOdW1iZXIuRVBTSUxPTiA6IGl0ZW0uc2NvcmU7XG5cbiAgICAgICAgdG90YWxXZWlnaHRlZFNjb3JlICo9IE1hdGgucG93KHNjb3JlLCB3ZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQuc2NvcmUgPSB0b3RhbFdlaWdodGVkU2NvcmU7XG4gICAgfVxuICB9XG5cbiAgX3NvcnQocmVzdWx0cykge1xuICAgIHJlc3VsdHMuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKTtcbiAgfVxuXG4gIF9mb3JtYXQocmVzdWx0cykge1xuICAgIGNvbnN0IGZpbmFsT3V0cHV0ID0gW107XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpbmNsdWRlU2NvcmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCB0cmFuc2Zvcm1lcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gICAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICBjb25zdCB7IGlkeCB9ID0gcmVzdWx0O1xuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpdGVtOiB0aGlzLmxpc3RbaWR4XSxcbiAgICAgICAgcmVmSW5kZXg6IGlkeFxuICAgICAgfTtcblxuICAgICAgaWYgKHRyYW5zZm9ybWVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHRyYW5zZm9ybWVycy5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyc1tqXShyZXN1bHQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbmFsT3V0cHV0LnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmFsT3V0cHV0XG4gIH1cbn1cblxuRnVzZS52ZXJzaW9uID0gJzUuMS4wJztcbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbkZ1c2UuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgRnVzZTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMl9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAoZmFsc2UpIHsgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MsIFJlYWN0SXM7IH0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKCk7XG59XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX187XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBUZWxsIHdoZXRoZXIgdGhlIHJlY3QgaXMgdmlzaWJsZSwgZ2l2ZW4gYW4gb2Zmc2V0XG4vL1xuLy8gcmV0dXJuOiBib29sZWFuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCkge1xuICB2YXIgb2Zmc2V0RGlyID0gb2Zmc2V0LmRpcmVjdGlvbjtcbiAgdmFyIG9mZnNldFZhbCA9IG9mZnNldC52YWx1ZTsgLy8gUnVsZXMgZm9yIGNoZWNraW5nIGRpZmZlcmVudCBraW5kIG9mIG9mZnNldHMuIEluIGV4YW1wbGUgaWYgdGhlIGVsZW1lbnQgaXNcbiAgLy8gOTBweCBiZWxvdyB2aWV3cG9ydCBhbmQgb2Zmc2V0VG9wIGlzIDEwMCwgaXQgaXMgY29uc2lkZXJlZCB2aXNpYmxlLlxuXG4gIHN3aXRjaCAob2Zmc2V0RGlyKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QudG9wICsgb2Zmc2V0VmFsIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QubGVmdCArIG9mZnNldFZhbCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLSBvZmZzZXRWYWwgPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcDtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QucmlnaHQgLSBvZmZzZXRWYWwgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b207XG4gIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gVmlzaWJpbGl0eVNlbnNvcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY3QocmVjdCkge1xuICBpZiAocmVjdC53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gIH1cblxuICBpZiAocmVjdC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlY3QuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcbiAgfVxuXG4gIHJldHVybiByZWN0O1xufVxuXG52YXIgVmlzaWJpbGl0eVNlbnNvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVmlzaWJpbGl0eVNlbnNvciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmlzaWJpbGl0eVNlbnNvcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWaXNpYmlsaXR5U2Vuc29yKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFZpc2liaWxpdHlTZW5zb3IpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRDb250YWluZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmNvbnRhaW5tZW50IHx8IHdpbmRvdztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhZGRFdmVudExpc3RlbmVyXCIsIGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50LCBkZWxheSwgdGhyb3R0bGUpIHtcbiAgICAgIGlmICghX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgdmFyIGZ1bmM7XG5cbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5jaGVjaygpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRocm90dGxlID4gLTEpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgdGhyb3R0bGUgfHwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCBkZWxheSB8fCAwKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBmbjogZnVuYyxcbiAgICAgICAgZ2V0TGFzdFRpbWVvdXQ6IGZ1bmN0aW9uIGdldExhc3RUaW1lb3V0KCkge1xuICAgICAgICAgIHJldHVybiB0aW1lb3V0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGluZm8uZm4pO1xuICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tldmVudF0gPSBpbmZvO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXJ0V2F0Y2hpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2sgfHwgX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaW50ZXJ2YWxDaGVjaykge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKF90aGlzLmNoZWNrLCBfdGhpcy5wcm9wcy5pbnRlcnZhbERlbGF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNjcm9sbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoX3RoaXMuZ2V0Q29udGFpbmVyKCksIFwic2Nyb2xsXCIsIF90aGlzLnByb3BzLnNjcm9sbERlbGF5LCBfdGhpcy5wcm9wcy5zY3JvbGxUaHJvdHRsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5yZXNpemVDaGVjaykge1xuICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgX3RoaXMucHJvcHMucmVzaXplRGVsYXksIF90aGlzLnByb3BzLnJlc2l6ZVRocm90dGxlKTtcbiAgICAgIH0gLy8gaWYgZG9udCBuZWVkIGRlbGF5ZWQgY2FsbCwgY2hlY2sgb24gbG9hZCAoIGJlZm9yZSB0aGUgZmlyc3QgaW50ZXJ2YWwgZmlyZXMgKVxuXG5cbiAgICAgICFfdGhpcy5wcm9wcy5kZWxheWVkQ2FsbCAmJiBfdGhpcy5jaGVjaygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0b3BXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICAvLyBjbGVhbiB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIGRlYm91bmNlIGNhbGxlcnNcbiAgICAgICAgZm9yICh2YXIgZGVib3VuY2VFdmVudCBpbiBfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2suaGFzT3duUHJvcGVydHkoZGVib3VuY2VFdmVudCkpIHtcbiAgICAgICAgICAgIHZhciBkZWJvdW5jZUluZm8gPSBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlSW5mby5nZXRMYXN0VGltZW91dCgpKTtcbiAgICAgICAgICAgIGRlYm91bmNlSW5mby50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihkZWJvdW5jZUV2ZW50LCBkZWJvdW5jZUluZm8uZm4pO1xuICAgICAgICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tkZWJvdW5jZUV2ZW50XSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKF90aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGVja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5ub2RlO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICB2YXIgY29udGFpbm1lbnRSZWN0OyAvLyBpZiB0aGUgY29tcG9uZW50IGhhcyByZW5kZXJlZCB0byBudWxsLCBkb250IHVwZGF0ZSB2aXNpYmlsaXR5XG5cbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZWN0ID0gbm9ybWFsaXplUmVjdChfdGhpcy5yb3VuZFJlY3REb3duKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jb250YWlubWVudCkge1xuICAgICAgICB2YXIgY29udGFpbm1lbnRET01SZWN0ID0gX3RoaXMucHJvcHMuY29udGFpbm1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogY29udGFpbm1lbnRET01SZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiBjb250YWlubWVudERPTVJlY3QubGVmdCxcbiAgICAgICAgICBib3R0b206IGNvbnRhaW5tZW50RE9NUmVjdC5ib3R0b20sXG4gICAgICAgICAgcmlnaHQ6IGNvbnRhaW5tZW50RE9NUmVjdC5yaWdodFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfSAvLyBDaGVjayBpZiB2aXNpYmlsaXR5IGlzIHdhbnRlZCB2aWEgb2Zmc2V0P1xuXG5cbiAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5wcm9wcy5vZmZzZXQgfHwge307XG4gICAgICB2YXIgaGFzVmFsaWRPZmZzZXQgPSBfdHlwZW9mKG9mZnNldCkgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgIGlmIChoYXNWYWxpZE9mZnNldCkge1xuICAgICAgICBjb250YWlubWVudFJlY3QudG9wICs9IG9mZnNldC50b3AgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmxlZnQgKz0gb2Zmc2V0LmxlZnQgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtPSBvZmZzZXQuYm90dG9tIHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtPSBvZmZzZXQucmlnaHQgfHwgMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZpc2liaWxpdHlSZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wID49IGNvbnRhaW5tZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCA+PSBjb250YWlubWVudFJlY3QubGVmdCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSA8PSBjb250YWlubWVudFJlY3QuYm90dG9tLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCA8PSBjb250YWlubWVudFJlY3QucmlnaHRcbiAgICAgIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Nod25qL3JlYWN0LXZpc2liaWxpdHktc2Vuc29yL3B1bGwvMTE0XG5cbiAgICAgIHZhciBoYXNTaXplID0gcmVjdC5oZWlnaHQgPiAwICYmIHJlY3Qud2lkdGggPiAwO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IGhhc1NpemUgJiYgdmlzaWJpbGl0eVJlY3QudG9wICYmIHZpc2liaWxpdHlSZWN0LmxlZnQgJiYgdmlzaWJpbGl0eVJlY3QuYm90dG9tICYmIHZpc2liaWxpdHlSZWN0LnJpZ2h0OyAvLyBjaGVjayBmb3IgcGFydGlhbCB2aXNpYmlsaXR5XG5cbiAgICAgIGlmIChoYXNTaXplICYmIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBwYXJ0aWFsVmlzaWJsZSA9IHJlY3QudG9wIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPj0gY29udGFpbm1lbnRSZWN0LnRvcCAmJiByZWN0LmxlZnQgPD0gY29udGFpbm1lbnRSZWN0LnJpZ2h0ICYmIHJlY3QucmlnaHQgPj0gY29udGFpbm1lbnRSZWN0LmxlZnQ7IC8vIGFjY291bnQgZm9yIHBhcnRpYWwgdmlzaWJpbGl0eSBvbiBhIHNpbmdsZSBlZGdlXG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHBhcnRpYWxWaXNpYmxlID0gdmlzaWJpbGl0eVJlY3RbX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHldO1xuICAgICAgICB9IC8vIGlmIHdlIGhhdmUgbWluaW11bSB0b3AgdmlzaWJpbGl0eSBzZXQgYnkgcHJvcHMsIGxldHMgY2hlY2ssIGlmIGl0IG1lZXRzIHRoZSBwYXNzZWQgdmFsdWVcbiAgICAgICAgLy8gc28gaWYgZm9yIGluc3RhbmNlIGVsZW1lbnQgaXMgYXQgbGVhc3QgMjAwcHggaW4gdmlld3BvcnQsIHRoZW4gc2hvdyBpdC5cblxuXG4gICAgICAgIGlzVmlzaWJsZSA9IF90aGlzLnByb3BzLm1pblRvcFZhbHVlID8gcGFydGlhbFZpc2libGUgJiYgcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIF90aGlzLnByb3BzLm1pblRvcFZhbHVlIDogcGFydGlhbFZpc2libGU7XG4gICAgICB9IC8vIERlcHJlY2F0ZWQgb3B0aW9ucyBmb3IgY2FsY3VsYXRpbmcgb2Zmc2V0LlxuXG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0LmRpcmVjdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygb2Zmc2V0LnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltub3RpY2VdIG9mZnNldC5kaXJlY3Rpb24gYW5kIG9mZnNldC52YWx1ZSBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gVGhleSBzdGlsbCB3b3JrIGZvciBub3csIGJ1dCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLiBQbGVhc2UgdXBncmFkZSB0byB0aGUgbmV3IHN5bnRheDogeyAlczogJWQgfVwiLCBvZmZzZXQuZGlyZWN0aW9uLCBvZmZzZXQudmFsdWUpO1xuICAgICAgICBpc1Zpc2libGUgPSBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkob2Zmc2V0LCByZWN0LCBjb250YWlubWVudFJlY3QpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdGF0ZTsgLy8gbm90aWZ5IHRoZSBwYXJlbnQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHZpc2liaWxpdHlSZWN0XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkgX3RoaXMucHJvcHMub25DaGFuZ2UoaXNWaXNpYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpYmlsaXR5U2Vuc29yLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcFdhdGNoaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyByZS1yZWdpc3RlciBub2RlIGluIGNvbXBvbmVudERpZFVwZGF0ZSBpZiBjaGlsZHJlbiBkaWZmcyBbIzEwM11cbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICYmICFwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm91bmRSZWN0RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3VuZFJlY3REb3duKHJlY3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogTWF0aC5mbG9vcihyZWN0LnRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGguZmxvb3IocmVjdC5sZWZ0KSxcbiAgICAgICAgYm90dG9tOiBNYXRoLmZsb29yKHJlY3QuYm90dG9tKSxcbiAgICAgICAgcmlnaHQ6IE1hdGguZmxvb3IocmVjdC5yaWdodClcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIHdpdGhpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgICAgIGlzVmlzaWJsZTogdGhpcy5zdGF0ZS5pc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHRoaXMuc3RhdGUudmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXNpYmlsaXR5U2Vuc29yO1xufShyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhY3RpdmU6IHRydWUsXG4gIHBhcnRpYWxWaXNpYmlsaXR5OiBmYWxzZSxcbiAgbWluVG9wVmFsdWU6IDAsXG4gIHNjcm9sbENoZWNrOiBmYWxzZSxcbiAgc2Nyb2xsRGVsYXk6IDI1MCxcbiAgc2Nyb2xsVGhyb3R0bGU6IC0xLFxuICByZXNpemVDaGVjazogZmFsc2UsXG4gIHJlc2l6ZURlbGF5OiAyNTAsXG4gIHJlc2l6ZVRocm90dGxlOiAtMSxcbiAgaW50ZXJ2YWxDaGVjazogdHJ1ZSxcbiAgaW50ZXJ2YWxEZWxheTogMTAwLFxuICBkZWxheWVkQ2FsbDogZmFsc2UsXG4gIG9mZnNldDoge30sXG4gIGNvbnRhaW5tZW50OiBudWxsLFxuICBjaGlsZHJlbjogcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbClcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJwcm9wVHlwZXNcIiwge1xuICBvbkNoYW5nZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jLFxuICBhY3RpdmU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcGFydGlhbFZpc2liaWxpdHk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKV0pLFxuICBkZWxheWVkQ2FsbDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBvZmZzZXQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICB0b3A6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGxlZnQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGJvdHRvbTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgcmlnaHQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG4gIH0pLCAvLyBkZXByZWNhdGVkIG9mZnNldCBwcm9wZXJ0eVxuICBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICBkaXJlY3Rpb246IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKSxcbiAgICB2YWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSldKSxcbiAgc2Nyb2xsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgc2Nyb2xsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBzY3JvbGxUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHJlc2l6ZUNoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHJlc2l6ZURlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplVGhyb3R0bGU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBpbnRlcnZhbENoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIGludGVydmFsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBjb250YWlubWVudDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuaW5zdGFuY2VPZih3aW5kb3cuRWxlbWVudCkgOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmFueSxcbiAgY2hpbGRyZW46IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmVsZW1lbnQsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZnVuY10pLFxuICBtaW5Ub3BWYWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbn0pO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjY29yZGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7aXNPcGVuLCB0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoaXNPcGVuKTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnYWNjb3JkaW9uJywgeydvcGVuJzogb3BlbiwgJ2Nsb3NlZCc6ICEgb3BlbiB9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0YXJpYS1leHBhbmRlZD17b3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oISBvcGVuKX1cblx0XHRcdD5cblx0XHRcdFx0XHR7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdGl0bGVcIj57dGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIiBzdHlsZT17e2hlaWdodDogb3BlbiA/ICdhdXRvJyA6ICcwcHgnfX0+XG5cdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9UYWJzQ29udGVudCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL1NuYWNrYmFyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQXBwID0gKHtzZXRTZXR0aW5ncywgdG9hc3QsIGN1cnJlbnRUYWIsIHNldFRhYiwgaXNPbmJvYXJkaW5nfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR3cC5hcGkubG9hZFByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRzZXR0aW5ncyA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKCk7XG5cdFx0XHRzZXR0aW5ncy5mZXRjaCgpLnRoZW4ociA9PiB7XG5cdFx0XHRcdHNldFNldHRpbmdzKHIpO1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIDxMb2FkaW5nLz47XG5cdH1cblx0Y29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2NvbnRlbnQtd3JhcCcsIHtcblx0XHQnaXMtb25ib2FyZGluZyc6IGlzT25ib2FyZGluZyAmJiAnc3RhcnRlci1zaXRlcycgPT09IGN1cnJlbnRUYWIsXG5cdFx0J3N0YXJ0ZXItc2l0ZXMnOiAnc3RhcnRlci1zaXRlcycgPT09IGN1cnJlbnRUYWJcblx0fSBdKTtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZGVyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17d3JhcENsYXNzZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxOb3RpZmljYXRpb25zLz59XG5cdFx0XHRcdFx0XHQ8VGFic0NvbnRlbnQgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxTaWRlYmFyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9Lz59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7dG9hc3QgJiYgPFNuYWNrYmFyLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2V0dGluZ3MsIHNldFRhYn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2V0dGluZ3M6IChvYmplY3QpID0+IHNldFNldHRpbmdzKG9iamVjdCksXG5cdFx0XHRzZXRUYWI6ICh0YWIpID0+IHNldFRhYih0YWIpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdCwgZ2V0VGFifSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRjb25zdCB7Z2V0T25ib2FyZGluZ1N0YXR1c30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2FzdDogZ2V0VG9hc3QoKSxcblx0XHRcdGN1cnJlbnRUYWI6IGdldFRhYigpLFxuXHRcdFx0aXNPbmJvYXJkaW5nOiBnZXRPbmJvYXJkaW5nU3RhdHVzKClcblx0XHR9O1xuXHR9KVxuKShBcHApO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaGFuZ2Vsb2cgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2NoYW5nZWxvZywgY2hhbmdlbG9nUHJvfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIHNob3dGb3JQcm8sIHNldFNob3dGb3JQcm8gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0e2NoYW5nZWxvZ1BybyAmJlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFuZ2Vsb2ctdGFic1wiPlxuXHRcdFx0XHQ8c3Bhbj57X18oJ1Nob3cgY2hhbmdlbG9nIGZvcicsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ISBzaG93Rm9yUHJvICYmICdhY3RpdmUnfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNldFNob3dGb3JQcm8oZmFsc2UpO1xuXHRcdFx0XHRcdH19PntfXygnTmV2ZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c2hvd0ZvclBybyAmJiAnYWN0aXZlJ31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRTaG93Rm9yUHJvKHRydWUpO1xuXHRcdFx0XHRcdH19PntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0e1xuXHRcdFx0XHQoc2hvd0ZvclBybyA/IGNoYW5nZWxvZ1BybyA6IGNoYW5nZWxvZykubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0aWYgKCEgdHdlYWtzICYmICEgZml4ZXMgJiYgISBmZWF0dXJlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID1cblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+O1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxBY2NvcmRpb24gaXNPcGVuPXswID09PSBpbmRleH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBzdWNjZXNzXCI+e19fKCdGZWF0dXJlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiA8bGk+e2ZlYXR1cmV9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtmaXhlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1Z3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBlcnJvclwiPntfXygnQnVnIEZpeGVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmaXhlcy5tYXAoKGZpeCkgPT4gPGxpPntmaXh9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHt0d2Vha3MgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2Vha3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+e19fKCdUd2Vha3MnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3R3ZWFrcy5tYXAoKHR3ZWFrKSA9PiA8bGk+e3R3ZWFrfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEZlYXR1cmVSb3cgZnJvbSAnLi4vRmVhdHVyZVJvdyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2ZlYXR1cmVEYXRhfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY2FyZCB0YWJsZVwiPlxuXHRcdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZFwiPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJsYXJnZVwiLz5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHR7ZmVhdHVyZURhdGEubWFwKChpdGVtKSA9PiA8RmVhdHVyZVJvdyBpdGVtPXtpdGVtfS8+KX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB1cHNlbGxcIj5cblx0XHRcdFx0PHA+e19fKCdHZXQgYWNjZXNzIHRvIGFsbCBQcm8gZmVhdHVyZXMgYW5kIHBvd2VyLXVwIHlvdXIgd2Vic2l0ZScsICduZXZlJyl9PC9wPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gudXBncmFkZVVSTH1cblx0XHRcdFx0XHRpc1ByaW1hcnk+XG5cdFx0XHRcdFx0e19fKCdHZXQgTmV2ZSBQcm8gTm93JywgJ25ldmUnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEhlbHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdidW95LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2Ugd2FudCB0byBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIGJlc3QgZXhwZXJpZW5jZSB1c2luZyBOZXZlLCBhbmQgdGhhdCBpcyB3aHkgd2UgaGF2ZSBnYXRoZXJlZCBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBoZXJlIGZvciB5b3UuIFdlIGhvcGUgeW91IHdpbGwgZW5qb3kgdXNpbmcgTmV2ZSBhcyBtdWNoIGFzIHdlIGVuam95IGNyZWF0aW5nIGdyZWF0IHByb2R1Y3RzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdGlzTGFyZ2VcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd29yZHByZXNzLm9yZy9zdXBwb3J0L3RoZW1lL25ldmUvJ1xuICAgICAgICAgID57X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnbGlzdC5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dhbnQgdG8gZ2V0IHRoZSBnaXN0IG9uIHRoZSBsYXRlc3QgdGhlbWUgY2hhbmdlcz8gSnVzdCBjb25zdWx0IG91ciBjaGFuZ2Vsb2cgYmVsb3cgdG8gZ2V0IGEgdGFzdGUgb2YgdGhlIHJlY2VudCBmaXhlcyBhbmQgZmVhdHVyZXMgaW1wbGVtZW50ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdjaGFuZ2Vsb2cnKX1cbiAgICAgICAgICA+e19fKCdWaWV3IENoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAndGFjaG9tZXRlci5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3BlZWQgdXAgeW91ciBzaXRlJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSBmaW5kIHlvdXJzZWxmIGluIGEgc2l0dWF0aW9uIHdoZXJlIGV2ZXJ5dGhpbmcgb24geW91ciBzaXRlIGlzIHJ1bm5pbmcgdmVyeSBzbG93bHksIHlvdSBtaWdodCBjb25zaWRlciBoYXZpbmcgYSBsb29rIGF0IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHdoZXJlIHlvdSB3aWxsIGZpbmQgdGhlIG1vc3QgY29tbW9uIGlzc3VlcyBjYXVzaW5nIHRoaXMgYW5kIHBvc3NpYmxlIHNvbHV0aW9ucyBmb3IgZWFjaCBvZiB0aGUgaXNzdWVzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvNjMtc3BlZWQtdXAteW91ci13b3JkcHJlc3Mtc2l0ZVwiPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdEb2N1bWVudGF0aW9uJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzk0Ni1uZXZlLWRvY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjbG9uZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IHdhbnQgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSB0aGVtZVxcJ3MgZmlsZXMsIHRob3NlIGNoYW5nZXMgYXJlIGxpa2VseSB0byBiZSBvdmVyd3JpdHRlbiB3aGVuIHlvdSBuZXh0IHVwZGF0ZSB0aGUgdGhlbWUuIEluIG9yZGVyIHRvIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZywgeW91IG5lZWQgdG8gY3JlYXRlIGEgY2hpbGQgdGhlbWUuIEZvciB0aGlzLCBwbGVhc2UgZm9sbG93IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93LicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTQtaG93LXRvLWNyZWF0ZS1hLWNoaWxkLXRoZW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Fycm93cy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQnVpbGQgYSBsYW5kaW5nIHBhZ2Ugd2l0aCBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0luIHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHlvdSB3aWxsIGZpbmQgYW4gZWFzeSB3YXkgdG8gYnVpbGQgYSBncmVhdCBsb29raW5nIGxhbmRpbmcgcGFnZSB1c2luZyBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyIHBsdWdpbi4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzIxOS1ob3ctdG8tYnVpbGQtYS1sYW5kaW5nLXBhZ2Utd2l0aC1hLWRyYWctYW5kLWRyb3AtY29udGVudC1idWlsZGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFBsdWdpbkNhcmQgZnJvbSAnLi4vUGx1Z2luQ2FyZCc7XG5cbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtwbHVnaW5zfSA9IG5ldmVEYXNoO1xuXG4gIGlmICggISBwbHVnaW5zICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKCBwbHVnaW5zICkubWFwKCAoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiA8UGx1Z2luQ2FyZCBrZXk9e3NsdWd9IHNsdWc9e3NsdWd9IGRhdGE9e3BsdWdpbnNbc2x1Z119Lz47XG4gICAgICAgIH0gKVxuICAgICAgfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBNb2R1bGVDYXJkIGZyb20gJy4uL01vZHVsZUNhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge21vZHVsZXN9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdHtcblx0XHRcdFx0T2JqZWN0LmtleXMobW9kdWxlcykubWFwKChpZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TW9kdWxlQ2FyZCBzbHVnPXtpZH0vPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNvbnN0IFN0YXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnc3F1YXJlcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3RhcnRlciBTaXRlcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZXZlIG5vdyBjb21lcyB3aXRoIGEgc2l0ZXMgbGlicmFyeSB3aXRoIHZhcmlvdXMgZGVzaWducyB0byBwaWNrIGZyb20uIFZpc2l0IG91ciBjb2xsZWN0aW9uIG9mIGRlbW9zIHRoYXQgYXJlIGNvbnN0YW50bHkgYmVpbmcgYWRkZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnR2V0dGluZyBTdGFydGVkPyBDaGVjayBoZWxwIGFuZCBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignaGVscCcpfVxuICAgICAgICAgID57X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImN1c3RvbWl6ZXItcXVpY2stbGlua3NcIlxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjb21wYXNzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDdXN0b21pemVyIHF1aWNrIGxpbmtzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3VzdG9taXplckxpbmtzKCl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5cbmNvbnN0IHJlbmRlckN1c3RvbWl6ZXJMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBuZXZlRGFzaC5jdXN0b21pemVyU2hvcnRjdXRzO1xuICBjb25zdCBzcGxpdCA9IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyAyKTtcbiAgY29uc3QgcGFydHMgPSBbIGxpbmtzLnNsaWNlKDAsIHNwbGl0KSwgbGlua3Muc2xpY2Uoc3BsaXQpIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7XG4gICAgICAgIHBhcnRzLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNMaW5rIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0udGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IGNvbHVtbi5sZW5ndGggLSAxICYmIDxoci8+fVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7Z2V0fSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL09uYm9hcmRpbmcvTG9hZGluZyc7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL01haW4nO1xuXG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgU3RhcnRlclNpdGVzID0gKHtzaXRlcywgc2V0U2l0ZXMsIHNldFVwc2VsbHMsIHNldE1pZ3JhdGlvbkRhdGF9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNpdGVzKSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2V0KG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW5pdGlhbGl6ZV9zaXRlc19saWJyYXJ5JykudGhlbigocikgPT4ge1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0c2V0RXJyb3IodHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHRcdFx0Y29uc3Qge3JlbW90ZSwgdXBzZWxsLCBtaWdyYXRlX2RhdGF9ID0gci5kYXRhO1xuXHRcdFx0XHRcdHNldFNpdGVzKHJlbW90ZSk7XG5cdFx0XHRcdFx0c2V0VXBzZWxscyh1cHNlbGwpO1xuXHRcdFx0XHRcdHNldE1pZ3JhdGlvbkRhdGEobWlncmF0ZV9kYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0aWYgKGVycm9yKSB7XG5cdFx0cmV0dXJuIDxoMT5FcnJvci48L2gxPjtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdGxvYWRpbmcgPyA8TG9hZGluZy8+IDogPE9uYm9hcmRpbmcvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRTaXRlcywgc2V0VXBzZWxscywgc2V0TWlncmF0aW9uRGF0YX0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNpdGVzOiAoc2l0ZXMpID0+IHNldFNpdGVzKHNpdGVzKSxcblx0XHRcdHNldFVwc2VsbHM6ICh1cHNlbGxzKSA9PiBzZXRVcHNlbGxzKHVwc2VsbHMpLFxuXHRcdFx0c2V0TWlncmF0aW9uRGF0YTogKG1pZ3JhdGlvbkRhdGEpID0+IHNldE1pZ3JhdGlvbkRhdGEobWlncmF0aW9uRGF0YSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFNpdGVzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVzOiBnZXRTaXRlcygpXG5cdFx0fTtcblx0fSlcbikoU3RhcnRlclNpdGVzKTtcbiIsImNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBGZWF0dXJlUm93ID0gKHtpdGVtfSkgPT4ge1xuICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbkxpdGV9ID0gaXRlbTtcbiAgY29uc3QgWyB0b29sdGlwLCB0b2dnbGVUb29sdGlwIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB0b2dnbGVUb29sdGlwKHRydWUpO1xuICBjb25zdCBoaWRlVG9vbHRpcCA9ICgpID0+IHRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPHRyIGNsYXNzTmFtZT1cImZlYXR1cmUtcm93XCI+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwibGFyZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0LXdyYXBcIj5cbiAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgb25Gb2N1cz17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwiaW5mb1wiLz5cbiAgICAgICAgICAgIHt0b29sdGlwICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2luZGljYXRvcicsIHsnZXJyb3InOiAhIGluTGl0ZSwgJ3N1Y2Nlc3MnOiBpbkxpdGV9IF0pfT5cbiAgICAgICAgPERhc2hpY29uIHNpemU9ezMwfSBpY29uPXtpbkxpdGUgPyAneWVzJyA6ICduby1hbHQnfS8+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImluZGljYXRvciBzdWNjZXNzXCI+XG4gICAgICAgIDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj1cInllc1wiLz5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7YWRkVXJsSGFzaCwgZ2V0VGFiSGFzaCwgdGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgPT09IGhhc2gpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cHJvcHMuc2V0VGFiKGhhc2gpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0e3JlbmRlckhlYWQoKX1cblx0XHRcdFx0e3JlbmRlck5hdmlnYXRpb24ocHJvcHMpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntuZXZlRGFzaC5zdHJpbmdzLmhlYWRlcn08L2gxPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPntuZXZlRGFzaC52ZXJzaW9ufTwvc3Bhbj5cblx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL2xvZ28uc3ZnJ30gYWx0PXtfXygnTmV2ZSBUaGVtZSBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHRhYnMpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT48YVxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjdXJyZW50VGFiID09PSBpdGVtID8gJ2FjdGl2ZScgOiAnJ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0VGFiKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRhZGRVcmxIYXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+e3RhYnNbaXRlbV0ubGFiZWx9XG5cdFx0XHRcdFx0PC9hPjwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IExpY2Vuc2VDYXJkID0gKHtpc1Zpc2libGUsIGNoYW5nZVRpZXJ9KSA9PiB7XG5cdGNvbnN0IHtsaWNlbnNlLCBwcm9BcGl9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IFsga2V5LCBzZXRLZXkgXSA9IHVzZVN0YXRlKGxpY2Vuc2UgJiYgJ3ZhbGlkJyA9PT0gbGljZW5zZS52YWxpZCA/IGxpY2Vuc2Uua2V5IHx8ICcnIDogJycpO1xuXHRjb25zdCBbIHN0YXR1cywgc2V0U3RhdHVzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgdmFsaWQsIHNldFZhbGlkIF0gPSB1c2VTdGF0ZShsaWNlbnNlLnZhbGlkIHx8ICdpbnZhbGlkJyk7XG5cdGNvbnN0IFsgZXhwaXJhdGlvbiwgc2V0RXhwaXJhdGlvbiBdID0gdXNlU3RhdGUobGljZW5zZS5leHBpcmF0aW9uIHx8ICcnKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblxuXHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHRvZ2dsZUxpY2Vuc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9EbyA9ICd2YWxpZCcgPT09IHZhbGlkID8gJ2RlYWN0aXZhdGUnIDogJ2FjdGl2YXRlJztcblx0XHRzZXRTdGF0dXMoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICdhY3RpdmF0aW5nJyA6ICdkZWFjdGl2YXRpbmcnKTtcblx0XHRzZW5kKHByb0FwaSArICcvdG9nZ2xlX2xpY2Vuc2UnLCB7a2V5LCBhY3Rpb246IHRvRG99KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0c2V0VG9hc3RUeXBlKHJlc3BvbnNlLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcblx0XHRcdHNldEtleSgnYWN0aXZhdGUnID09PSB0b0RvID8ga2V5IDogJycpO1xuXHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRzZXRFeHBpcmF0aW9uKHJlc3BvbnNlLmV4cGlyYXRpb24pO1xuXHRcdFx0c2V0VmFsaWQocmVzcG9uc2Uuc3VjY2VzcyAmJiAnYWN0aXZhdGUnID09PSB0b0RvID8gJ3ZhbGlkJyA6ICdub3RfYWN0aXZlJyk7XG5cdFx0XHRzZXRTdGF0dXMoZmFsc2UpO1xuXHRcdFx0bmV2ZURhc2gubGljZW5zZS5leHBpcmF0aW9uID0gcmVzcG9uc2UuZXhwaXJhdGlvbjtcblx0XHRcdGNoYW5nZVRpZXIocmVzcG9uc2UudGllciB8fCAxKTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmQgbGljZW5zZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0PGg0PntfXygnTmV2ZSBQcm8gQWRkb24gbGljZW5zZScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0PHA+RW50ZXIgeW91ciBsaWNlbnNlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vc3RvcmUudGhlbWVpc2xlLmNvbVwiPlRoZW1lSXNsZTwvYT4gcHVyY2hhc2UgaGlzdG9yeSBpbiBvcmRlciB0byBnZXRcblx0XHRcdFx0XHRwbHVnaW4gdXBkYXRlczwvcD5cblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibGljZW5zZS1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZUxpY2Vuc2UoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEtleShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHQndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0JyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicgKyBrZXkuc2xpY2UoLTUpIDpcblx0XHRcdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0ZScsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGluZycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGluZycsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0b2FzdCAmJiA8VG9hc3QgdHlwZT17dG9hc3RUeXBlfSBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9Lz59XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZXMoWyAnc3RhdHVzLWljb24nLCAndmFsaWQnID09PSB2YWxpZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicgXSlcblx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ZXhwaXJhdGlvbiAmJlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4tPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGV4cGlyYXRpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2VMaWNlbnNlVGllcn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VUaWVyOiAobmV3VGllcikgPT4ge1xuXHRcdFx0Y2hhbmdlTGljZW5zZVRpZXIobmV3VGllcik7XG5cdFx0fVxuXHR9O1xufSkoTGljZW5zZUNhcmQpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2stZGFzaFwiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb24gbG9hZGluZ1wiPnYyLjYuMjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBsb2dvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKEFycmF5KDYpKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGk+PGEgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz48L2xpPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmV2ZURhc2gubm90aWZpY2F0aW9ucyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBsb2FkaW5nIHBsYWNlaG9sZGVyXCIvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2x1bW5zIHN0YXJ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9taXplci1xdWljay1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYXNpZGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tICcuL09wdGlvbnMvSW5wdXRGb3JtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9PcHRpb25zL1RvZ2dsZSc7XG5pbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtCdXR0b24sIFRvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHNldFRvYXN0LCBjaGFuZ2VNb2R1bGVTdGF0dXMsIGdldE1vZHVsZVN0YXR1cywgdGllcn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGxpbmtzLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0Y29uc3QgcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChvcHRpb25TbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtsYWJlbCwgdHlwZSwgcGxhY2Vob2xkZXJ9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RleHQnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRGb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZXRNb2R1bGVTdGF0dXMoc2x1Zyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSwgdHJ1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodmFsdWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgQWN0aXZhdGVkJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBEZWFjdGl2YXRlZC4nLCAnbmV2ZScpKSArIGAgKCR7bmljZW5hbWV9KWApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IGFjdGl2YXRlIG1vZHVsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbiArICcgJ31cblx0XHRcdFx0XHR7ZG9jdW1lbnRhdGlvbiAmJlxuXHRcdFx0XHRcdDxhIGhyZWY9e2RvY3VtZW50YXRpb24udXJsfT57X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0e2xpbmtzICYmIGdldE1vZHVsZVN0YXR1cyhzbHVnKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHR7bGlua3MubWFwKChsaW5rKSA9PiA8QnV0dG9uIGlzU2Vjb25kYXJ5IGhyZWY9e2xpbmsudXJsfT57bGluay5sYWJlbH08L0J1dHRvbj4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7KDAgPCBvcHRpb25zLmxlbmd0aCAmJiB0cnVlID09PSBnZXRNb2R1bGVTdGF0dXMoc2x1ZykpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLW9wdGlvbnNcIj5cblx0XHRcdFx0XHR7cmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldE1vZHVsZVN0YXR1cywgZ2V0TGljZW5zZVRpZXJ9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRNb2R1bGVTdGF0dXM6IChzbHVnKSA9PiBnZXRNb2R1bGVTdGF0dXMoc2x1ZyksXG5cdFx0XHR0aWVyOiBnZXRMaWNlbnNlVGllcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlU3RhdHVzLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoTW9kdWxlQ2FyZCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RleHQsIGN0YSwgdHlwZSwgdXBkYXRlfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRvbmUsIHNldERvbmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgW1xuICAgICAgJ25vdGlmaWNhdGlvbicsXG4gICAgICBwcm9wcy5zbHVnLFxuICAgICAgdHlwZSA/IHR5cGUgOiAnJyxcbiAgICAgIHtcbiAgICAgICAgJ3N1Y2Nlc3MnOiBkb25lLFxuICAgICAgICAnaGlkZGVuJzogZG9uZVxuICAgICAgfVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIGRvbmUgPyA8cD57dGV4dH08L3A+IDogPHA+PERhc2hpY29uIGljb249XCJ5ZXNcIi8+e19fKCdEb25lIScsICduZXZlJyl9PC9wPn1cbiAgICAgIHsoY3RhICYmICEgZG9uZSkgJiZcbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpcy1sb2FkaW5nJzogaW5Qcm9ncmVzc30pfVxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZUVudGl0eSh1cGRhdGUsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9PlxuICAgICAgICB7XG4gICAgICAgICAgaW5Qcm9ncmVzcyA/XG4gICAgICAgICAgPHNwYW4+PERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+IHtfXygnSW4gUHJvZ3Jlc3MnLCAnbmV2ZScpICsgJy4uLid9IDwvc3Bhbj4gOlxuICAgICAgICAgICAgY3RhXG4gICAgICAgIH1cbiAgICAgIDwvQnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUVudGl0eSA9IChhcmdzLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pID0+IHtcbiAgaWYgKCEgYXJncy50eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhlY3V0ZUFjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoJ3RoZW1lJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1Zykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS10aGVtZScsIHtzbHVnOiBhcmdzLnNsdWd9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCd0aGVtZS11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3BsdWdpbicgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcgfHwgISBhcmdzLnBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtcGx1Z2luJywge3NsdWc6IGFyZ3Muc2x1ZywgcGx1Z2luOiBhcmdzLnBhdGh9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwbHVnaW4tdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzZXRJblByb2dyZXNzKHRydWUpO1xuICBleGVjdXRlQWN0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgc2V0RG9uZSh0cnVlKTtcbiAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICBzZXRIaWRkZW4odHJ1ZSk7XG4gIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBpZiAoISBuZXZlRGFzaC5ub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKDEgPiBuZXZlRGFzaC5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24gZGF0YT17bmV2ZURhc2gubm90aWZpY2F0aW9uc1tzbHVnXX0gc2x1Zz17c2x1Z30vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xuIiwiY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29uLCBQb3BvdmVyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBFZGl0b3JTZWxlY3RvciA9ICh7b25TZWFyY2gsIGVkaXRvciwgc2V0Q3VycmVudEVkaXRvcn0pID0+IHtcblx0Y29uc3QgbWFwID0ge1xuXHRcdCdlbGVtZW50b3InOiB7XG5cdFx0XHRpY29uOiAnZWxlbWVudG9yLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0VsZW1lbnRvcicpXG5cdFx0fSxcblx0XHQnYnJpenknOiB7XG5cdFx0XHRpY29uOiAnYnJpenkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQnJpenknKVxuXHRcdH0sXG5cdFx0J2JlYXZlciBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2JlYXZlci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCZWF2ZXIgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IHtcblx0XHRcdGljb246ICd0aHJpdmUucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnVGhyaXZlIEFyY2hpdGVjdCcpXG5cdFx0fSxcblx0XHQnZGl2aSBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2Rpdmkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRGl2aSBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCdndXRlbmJlcmcnOiB7XG5cdFx0XHRpY29uOiAnZ3V0ZW5iZXJnLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0d1dGVuYmVyZycpXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHNldE9wZW4oISBvcGVuKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3Qgb2ItZHJvcGRvd25cIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBbZWRpdG9yXS5pY29ufVxuXHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdDxzcGFuPnttYXBbZWRpdG9yXS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9Lz5cblx0XHRcdFx0XHR7b3BlbiAmJiAoXG5cdFx0XHRcdFx0XHQ8UG9wb3ZlciBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiIG9uQ2xvc2U9e3RvZ2dsZURyb3Bkb3dufSBub0Fycm93PlxuXHRcdFx0XHRcdFx0XHR7b3BlbiAmJlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhtYXApLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBlZGl0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0Q3VycmVudEVkaXRvcihrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yLWljb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW2tleV0uaWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e21hcFtrZXldLm5pY2VOYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3VsPn1cblx0XHRcdFx0XHRcdDwvUG9wb3Zlcj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0eXBlPVwic2VhcmNoXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3J9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50RWRpdG9yfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0Q3VycmVudEVkaXRvcjogKGVkaXRvcikgPT4gc2V0Q3VycmVudEVkaXRvcihlZGl0b3IpXG5cdFx0fTtcblx0fSlcbikoRWRpdG9yU2VsZWN0b3IpO1xuIiwiLypnbG9iYWwgbmV2ZURhc2gqL1xuaW1wb3J0IHtpbXBvcnRDb250ZW50LCBpbXBvcnRNb2RzLCBpbXBvcnRXaWRnZXRzLCBpbnN0YWxsUGx1Z2luc30gZnJvbSAnLi4vLi4vdXRpbHMvc2l0ZS1pbXBvcnQnO1xuaW1wb3J0IEltcG9ydFN0ZXBwZXIgZnJvbSAnLi9JbXBvcnRTdGVwcGVyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb24sIFRvZ2dsZUNvbnRyb2wsIE1vZGFsfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbXBvcnRNb2RhbCA9ICh7c2V0TW9kYWwsIHNldFNpdGUsIGVkaXRvciwgc2l0ZURhdGF9KSA9PiB7XG5cdFx0Y29uc3QgWyBnZW5lcmFsLCBzZXRHZW5lcmFsIF0gPSB1c2VTdGF0ZSh7XG5cdFx0XHRjb250ZW50OiB0cnVlLFxuXHRcdFx0Y3VzdG9taXplcjogdHJ1ZSxcblx0XHRcdHdpZGdldHM6IHRydWVcblx0XHR9KTtcblx0XHRjb25zdCBbIHBsdWdpbnNQcm9ncmVzcywgc2V0UGx1Z2luc1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBjb250ZW50UHJvZ3Jlc3MsIHNldENvbnRlbnRQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgY3VzdG9taXplclByb2dyZXNzLCBzZXRDdXN0b21pemVyUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIHdpZGdldHNQcm9ncmVzcywgc2V0V2lkZ2V0c1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBmcm9udFBhZ2VJRCwgc2V0RnJvbnRQYWdlSUQgXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRcdGNvbnN0IFsgY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0XHRjb25zdCBbIGltcG9ydGluZywgc2V0SW1wb3J0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBwbHVnaW5PcHRpb25zLCBzZXRQbHVnaW5PcHRpb25zIF0gPSB1c2VTdGF0ZSh7fSk7XG5cdFx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdFx0dXNlRWZmZWN0KGZ1bmN0aW9uIGdldFBsdWdpbk9wdGlvbnMoKSB7XG5cdFx0XHRjb25zdCBtYW5kYXRvcnkgPSB7Li4uKHNpdGVEYXRhWydtYW5kYXRvcnlfcGx1Z2lucyddIHx8IHt9KX07XG5cdFx0XHRjb25zdCBvcHRpb25hbCA9IHsuLi4oc2l0ZURhdGFbJ3JlY29tbWVuZGVkX3BsdWdpbnMnXSB8fCB7fSl9O1xuXHRcdFx0Y29uc3QgZGVmYXVsdE9mZiA9IHNpdGVEYXRhWydkZWZhdWx0X29mZl9yZWNvbW1lbmRlZF9wbHVnaW5zJ10gfHwgW107XG5cblx0XHRcdE9iamVjdC5rZXlzKG1hbmRhdG9yeSkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0bWFuZGF0b3J5W2tleV0gPSB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0XHRPYmplY3Qua2V5cyhvcHRpb25hbCkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0b3B0aW9uYWxba2V5XSA9ICEgZGVmYXVsdE9mZi5pbmNsdWRlcyhrZXkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNldFBsdWdpbk9wdGlvbnMoe1xuXHRcdFx0XHQuLi5vcHRpb25hbCxcblx0XHRcdFx0Li4ubWFuZGF0b3J5XG5cdFx0XHR9KTtcblx0XHR9LCBbXSk7XG5cblx0XHRjb25zdCByZW5kZXJOb3RlID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgZXh0ZXJuYWwgPSBzaXRlRGF0YVsnZXh0ZXJuYWxfcGx1Z2lucyddIHx8IG51bGw7XG5cdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd3ZWxsJywgeyd3YXJuaW5nJzogZXh0ZXJuYWx9IF0pO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiaW5mb1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuPntleHRlcm5hbCA/XG5cdFx0XHRcdFx0XHRcdF9fKCdUbyBpbXBvcnQgdGhpcyBkZW1vIHlvdSBoYXZlIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW5zJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdF9fKCdOb3RlJywgJ25ldmUnKX06XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHQ8b2w+XG5cdFx0XHRcdFx0XHR7ZXh0ZXJuYWwgP1xuXHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhleHRlcm5hbCkubWFwKHNsdWcgPT4gPGxpPjxCdXR0b24gaXNMaW5rIGhyZWY9e2V4dGVybmFsW3NsdWddLnVybH0+e3NsdWd9PC9CdXR0b24+PC9saT4pIDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT57X18oJ1dlIHJlY29tbWVuZCB5b3UgYmFja3VwIHlvdXIgd2Vic2l0ZSBjb250ZW50IGJlZm9yZSBhdHRlbXB0aW5nIGEgZnVsbCBzaXRlIGltcG9ydC4nLCAnbmV2ZScpfTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPntfXygnU29tZSBvZiB0aGUgZGVtbyBpbWFnZXMgd2lsbCBub3QgYmUgaW1wb3J0ZWQgYW5kIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXIgaW1hZ2VzLicsICduZXZlJyl9PC9saT5cblx0XHRcdFx0XHRcdFx0XHR7c2l0ZURhdGFbJ3Vuc3BsYXNoX2dhbGxlcnknXSAmJlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e3NpdGVEYXRhWyd1bnNwbGFzaF9nYWxsZXJ5J119PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0hlcmUgaXMgb3VyIG93biBjb2xsZWN0aW9uIG9mIHJlbGF0ZWQgaW1hZ2VzIHlvdSBjYW4gdXNlIGZvciB5b3VyIHNpdGUuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L29sPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblx0XHRjb25zdCByZW5kZXJPcHRpb25zID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgbWFwID0ge1xuXHRcdFx0XHRjb250ZW50OiB7XG5cdFx0XHRcdFx0dGl0bGU6IF9fKCdDb250ZW50JywgJ25ldmUnKSxcblx0XHRcdFx0XHRpY29uOiAnYWRtaW4tcG9zdCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Y3VzdG9taXplcjoge1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnQ3VzdG9taXplcicsICduZXZlJyksXG5cdFx0XHRcdFx0aWNvbjogJ2FkbWluLWN1c3RvbWl6ZXInXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldHM6IHtcblx0XHRcdFx0XHR0aXRsZTogX18oJ1dpZGdldHMnLCAnbmV2ZScpLFxuXHRcdFx0XHRcdGljb246ICdhZG1pbi1nZW5lcmljJ1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25zIGdlbmVyYWxcIj5cblx0XHRcdFx0XHQ8aDM+e19fKCdHZW5lcmFsJywgJ25ldmUnKX06PC9oMz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IGdlbmVyYWxbaWRdfSl9IGljb249e21hcFtpZF0uaWNvbn0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e21hcFtpZF0udGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dlbmVyYWxbaWRdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRHZW5lcmFsKHsuLi5nZW5lcmFsLCBbaWRdOiAhIGdlbmVyYWxbaWRdfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblx0XHRjb25zdCByZW5kZXJQbHVnaW5zID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYWxsUGx1Z2lucyA9IHsuLi4oc2l0ZURhdGFbJ3JlY29tbWVuZGVkX3BsdWdpbnMnXSB8fCB7fSksIC4uLihzaXRlRGF0YVsnbWFuZGF0b3J5X3BsdWdpbnMnXSB8fCB7fSl9O1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgcGx1Z2luc1wiPlxuXG5cdFx0XHRcdFx0PGgzPntfXygnUGx1Z2lucycsICduZXZlJyl9OjwvaDM+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKGFsbFBsdWdpbnMpLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiYWRtaW4tcGx1Z2luc1wiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IHBsdWdpbk9wdGlvbnNbc2x1Z119KX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGFsbFBsdWdpbnNbc2x1Z119fS8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2x1ZyBpbiBzaXRlRGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cGx1Z2luT3B0aW9uc1tzbHVnXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UGx1Z2luT3B0aW9ucyh7Li4ucGx1Z2luT3B0aW9ucywgW3NsdWddOiAhIHBsdWdpbk9wdGlvbnNbc2x1Z119KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcnVuSW1wb3J0KCkge1xuXHRcdFx0Y29uc29sZS5jbGVhcigpO1xuXHRcdFx0aWYgKCEgcGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnW1NdIFBsdWdpbnMuJyk7XG5cdFx0XHRcdHJ1bkltcG9ydENvbnRlbnQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ3BsdWdpbnMnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gUGx1Z2lucy4nKTtcblx0XHRcdGluc3RhbGxQbHVnaW5zKHBsdWdpbk9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdwbHVnaW5zJyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gUGx1Z2lucy4nKTtcblx0XHRcdFx0c2V0UGx1Z2luc1Byb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydENvbnRlbnQoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdwbHVnaW5zJykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydENvbnRlbnQoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLmNvbnRlbnQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDb250ZW50LicpO1xuXHRcdFx0XHRydW5JbXBvcnRDdXN0b21pemVyKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHNldEN1cnJlbnRTdGVwKCdjb250ZW50Jyk7XG5cdFx0XHRjb25zb2xlLmxvZygnW1BdIENvbnRlbnQuJyk7XG5cdFx0XHRpbXBvcnRDb250ZW50KHtcblx0XHRcdFx0Y29udGVudEZpbGU6IHNpdGVEYXRhWydjb250ZW50X2ZpbGUnXSxcblx0XHRcdFx0c291cmNlOiBzaXRlRGF0YS5zb3VyY2UsXG5cdFx0XHRcdGZyb250UGFnZTogc2l0ZURhdGFbJ2Zyb250X3BhZ2UnXSxcblx0XHRcdFx0c2hvcFBhZ2VzOiBzaXRlRGF0YVsnc2hvcF9wYWdlcyddLFxuXHRcdFx0XHRkZW1vU2x1Zzogc2l0ZURhdGEuc2x1Zyxcblx0XHRcdFx0ZWRpdG9yXG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnY29udGVudCcpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIENvbnRlbnQuJyk7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsnZnJvbnRwYWdlX2lkJ10pIHtcblx0XHRcdFx0XHRzZXRGcm9udFBhZ2VJRChyZXNwb25zZVsnZnJvbnRwYWdlX2lkJ10pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldENvbnRlbnRQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRydW5JbXBvcnRDdXN0b21pemVyKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnY29udGVudCcpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnRDdXN0b21pemVyKCkge1xuXHRcdFx0aWYgKCEgZ2VuZXJhbC5jdXN0b21pemVyKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gQ3VzdG9taXplci4nKTtcblx0XHRcdFx0cnVuSW1wb3J0V2lkZ2V0cygpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgnY3VzdG9taXplcicpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBDdXN0b21pemVyLicpO1xuXHRcdFx0aW1wb3J0TW9kcyh7XG5cdFx0XHRcdCdzb3VyY2VfdXJsJzogc2l0ZURhdGFbJ2RlbW9fdXJsJ10sXG5cdFx0XHRcdCd0aGVtZV9tb2RzJzogc2l0ZURhdGFbJ3RoZW1lX21vZHMnXSxcblx0XHRcdFx0J3dwX29wdGlvbnMnOiBzaXRlRGF0YVsnd3Bfb3B0aW9ucyddXG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnY3VzdG9taXplcicpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIEN1c3RvbWl6ZXIuJyk7XG5cdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRydW5JbXBvcnRXaWRnZXRzKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnY3VzdG9taXplcicpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnRXaWRnZXRzKCkge1xuXHRcdFx0aWYgKCEgZ2VuZXJhbC53aWRnZXRzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gV2lkZ2V0cy4nKTtcblx0XHRcdFx0aW1wb3J0RG9uZSgpO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ3dpZGdldHMnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gV2lkZ2V0cy4nKTtcblx0XHRcdGltcG9ydFdpZGdldHMoc2l0ZURhdGEud2lkZ2V0cykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ3dpZGdldHMnKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ1tEXSBXaWRnZXRzLicpO1xuXHRcdFx0XHRzZXRXaWRnZXRzUHJvZ3Jlc3MoJ2RvbmUnKTtcblx0XHRcdFx0aW1wb3J0RG9uZSgpO1xuXHRcdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ3dpZGdldHMnKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW1wb3J0RG9uZSgpIHtcblx0XHRcdHNldEN1cnJlbnRTdGVwKCdkb25lJyk7XG5cdFx0XHRzZXRJbXBvcnRpbmcoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBzdGVwKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhzdGVwKTtcblx0XHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdFx0XHRzZXRDdXJyZW50U3RlcChudWxsKTtcblx0XHRcdGlmICgncGx1Z2lucycgPT09IHN0ZXApIHtcblx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdza2lwJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWyAnY29udGVudCcsICdwbHVnaW5zJyBdLmluY2x1ZGVzKHN0ZXApKSB7XG5cdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnc2tpcCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsgJ2NvbnRlbnQnLCAncGx1Z2lucycsICdjdXN0b21pemVyJyBdLmluY2x1ZGVzKHN0ZXApKSB7XG5cdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnc2tpcCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYXAgPSB7XG5cdFx0XHRcdCdwbHVnaW5zJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGluc3RhbGxpbmcgdGhlIG5lY2Vzc2FyeSBwbHVnaW5zLicsICduZXZlJyksXG5cdFx0XHRcdCdjb250ZW50JzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2Vic2l0ZSBjb250ZW50LicsICduZXZlJyksXG5cdFx0XHRcdCdjdXN0b21pemVyJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIHVwZGF0aW5nIHRoZSBjdXN0b21pemVyIHNldHRpbmdzLicsICduZXZlJyksXG5cdFx0XHRcdCd3aWRnZXRzJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2lkZ2V0cy4nLCAnbmV2ZScpXG5cdFx0XHR9O1xuXG5cdFx0XHRzd2l0Y2ggKHN0ZXApIHtcblx0XHRcdFx0Y2FzZSAncGx1Z2lucyc6XG5cdFx0XHRcdFx0c2V0UGx1Z2luc1Byb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb250ZW50Jzpcblx0XHRcdFx0XHRzZXRDb250ZW50UHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2N1c3RvbWl6ZXInOlxuXHRcdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2lkZ2V0cyc6XG5cdFx0XHRcdFx0c2V0V2lkZ2V0c1Byb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0c2V0RXJyb3IoZXJyb3IuZGF0YSA/IHttZXNzYWdlOiBtYXBbc3RlcF0sIGNvZGU6IGVycm9yLmRhdGF9IDoge21lc3NhZ2U6IG1hcFtzdGVwXX0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsb3NlTW9kYWwgPSAoZGlzbWlzc1NpdGVEYXRhID0gZmFsc2UpID0+IHtcblx0XHRcdGlmIChpbXBvcnRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0TW9kYWwoZmFsc2UpO1xuXHRcdFx0XHRpZiAoZGlzbWlzc1NpdGVEYXRhKSB7XG5cdFx0XHRcdFx0c2V0U2l0ZShudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHRcdGNvbnN0IGFsbE9wdGlvbnNPZmYgPSBPYmplY3Qua2V5cyhnZW5lcmFsKS5ldmVyeShrID0+IGZhbHNlID09PSBnZW5lcmFsW2tdKTtcblx0XHRjb25zdCBlZGl0TGlua01hcCA9IHtcblx0XHRcdCdlbGVtZW50b3InOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9L3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9JHtmcm9udFBhZ2VJRH0mYWN0aW9uPWVsZW1lbnRvcmAsXG5cdFx0XHQnYnJpenknOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9icml6eS1lZGl0YCxcblx0XHRcdCdiZWF2ZXIgYnVpbGRlcic6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vP2ZsX2J1aWxkZXJgLFxuXHRcdFx0J3Rocml2ZSBhcmNoaXRlY3QnOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9L3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9JHtmcm9udFBhZ2VJRH0mYWN0aW9uPWFyY2hpdGVjdCZ0dmU9dHJ1ZWAsXG5cdFx0XHQnZGl2aSBidWlsZGVyJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS8/ZXRfZmI9MSZQYWdlU3BlZWQ9b2ZmYCxcblx0XHRcdCdndXRlbmJlcmcnOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9L3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9JHtmcm9udFBhZ2VJRH0mYWN0aW9uPWVkaXRgXG5cdFx0fTtcblx0XHRjb25zdCBlZGl0TGluayA9IGVkaXRMaW5rTWFwW2VkaXRvcl07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRjbGFzc05hbWU9XCJvYi1pbXBvcnQtbW9kYWxcIlxuXHRcdFx0XHR0aXRsZT17c2l0ZURhdGEudGl0bGV9XG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuXHRcdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXshIGltcG9ydGluZ31cblx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ISBpbXBvcnRpbmd9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuXHRcdFx0XHRcdHshIGltcG9ydGluZyAmJiAnZG9uZScgIT09IGN1cnJlbnRTdGVwICYmICEgZXJyb3IgP1xuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR7cmVuZGVyTm90ZSgpfVxuXHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHR7cmVuZGVyT3B0aW9ucygpfVxuXHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHR7cmVuZGVyUGx1Z2lucygpfVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gOlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3IgJiZcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2VsbCBlcnJvclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yLm1lc3NhZ2UgJiYgPGgzPjxEYXNoaWNvbiBpY29uPVwid2FybmluZ1wiLz48c3Bhbj57ZXJyb3IubWVzc2FnZX08L3NwYW4+PC9oMz59XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2gub25ib2FyZGluZy5zdHJpbmdzLnRyb3VibGVzaG9vdGluZ319Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBuZXZlRGFzaC5vbmJvYXJkaW5nLnN0cmluZ3Muc3VwcG9ydH19Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yLmNvZGUgJiYgPGxpPntfXygnRXJyb3IgY29kZScsICduZXZlJyl9OiA8Y29kZT57ZXJyb3IuY29kZX08L2NvZGU+PC9saT59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT57X18oJ0Vycm9yIGxvZycsICduZXZlJyl9OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gub25ib2FyZGluZy5sb2dVcmx9PntuZXZlRGFzaC5vbmJvYXJkaW5nLmxvZ1VybH08RGFzaGljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJleHRlcm5hbFwiLz48L0J1dHRvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxJbXBvcnRTdGVwcGVyIHByb2dyZXNzPXt7XG5cdFx0XHRcdFx0XHRcdFx0cGx1Z2luczogcGx1Z2luc1Byb2dyZXNzLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21pemVyOiBjdXN0b21pemVyUHJvZ3Jlc3MsXG5cdFx0XHRcdFx0XHRcdFx0d2lkZ2V0czogd2lkZ2V0c1Byb2dyZXNzXG5cdFx0XHRcdFx0XHRcdH19IGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH0gd2lsbERvPXtnZW5lcmFsfS8+XG5cdFx0XHRcdFx0XHRcdHsnZG9uZScgPT09IGN1cnJlbnRTdGVwICYmXG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImltcG9ydC1yZXN1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQ29udGVudCB3YXMgc3VjY2Vzc2Z1bGx5IGltcG9ydGVkLiBFbmpveSB5b3VyIG5ldyBzaXRlIScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyEgaW1wb3J0aW5nICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG5cdFx0XHRcdFx0eydkb25lJyAhPT0gY3VycmVudFN0ZXAgP1xuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjbG9zZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0Nsb3NlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdHshIGVycm9yICYmXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWxsT3B0aW9uc09mZiB8fCBzaXRlRGF0YVsnZXh0ZXJuYWxfcGx1Z2lucyddfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEltcG9ydGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJ1bkltcG9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IDpcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsb3NlXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZU1vZGFsKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdH19PntfXygnQmFjayB0byBTaXRlcyBMaWJyYXJ5JywgJ25ldmUnKX08L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfVxuXHRcdFx0XHRcdFx0XHQ+e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXtlZGl0TGlua30+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdBZGQgeW91ciBvd24gY29udGVudCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3IsIGdldEN1cnJlbnRTaXRlfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpLFxuXHRcdFx0c2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRJbXBvcnRNb2RhbFN0YXR1cywgc2V0Q3VycmVudFNpdGV9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKSxcblx0XHRcdHNldFNpdGU6IChkYXRhKSA9PiBzZXRDdXJyZW50U2l0ZShkYXRhKVxuXHRcdH07XG5cdH0pXG4pKEltcG9ydE1vZGFsKTtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgSW1wb3J0U3RlcHBlciA9ICh7Y3VycmVudFN0ZXAsIHByb2dyZXNzLCB3aWxsRG99KSA9PiB7XG5cblx0Y29uc3Qgc3RlcHNNYXAgPSB7XG5cdFx0cGx1Z2luczoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbnN0YWxsaW5nIFBsdWdpbnMnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5wbHVnaW5zLFxuXHRcdFx0d2lsbERvOiB0cnVlXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHRsYWJlbDogX18oJ0ltcG9ydGluZyBDb250ZW50JywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3MuY29udGVudCxcblx0XHRcdHdpbGxEbzogd2lsbERvLmNvbnRlbnRcblx0XHR9LFxuXHRcdGN1c3RvbWl6ZXI6IHtcblx0XHRcdGxhYmVsOiBfXygnSW1wb3J0aW5nIEN1c3RvbWl6ZXIgU2V0dGluZ3MnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5jdXN0b21pemVyLFxuXHRcdFx0d2lsbERvOiB3aWxsRG8uY3VzdG9taXplclxuXHRcdH0sXG5cdFx0d2lkZ2V0czoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbXBvcnRpbmcgV2lkZ2V0cycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLndpZGdldHMsXG5cdFx0XHR3aWxsRG86IHdpbGxEby53aWRnZXRzXG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cInN0ZXBwZXJcIj5cblx0XHRcdHtPYmplY3Qua2V5cyhzdGVwc01hcCkubWFwKGtleSA9PiB7XG5cdFx0XHRcdGNvbnN0IHtsYWJlbCwgc3RhdHVzLCB3aWxsRG99ID0gc3RlcHNNYXBba2V5XTtcblxuXHRcdFx0XHRpZiAoISB3aWxsRG8pIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFtcblx0XHRcdFx0XHQnaWNvbicsIHtcblx0XHRcdFx0XHRcdCdsb2FkaW5nJzogY3VycmVudFN0ZXAgPT09IGtleSxcblx0XHRcdFx0XHRcdCd3YXJuaW5nJzogY3VycmVudFN0ZXAgPT09IGtleSxcblx0XHRcdFx0XHRcdCdzdWNjZXNzJzogJ2RvbmUnID09PSBzdGF0dXMsXG5cdFx0XHRcdFx0XHQnZXJyb3InOiAnZXJyb3InID09PSBzdGF0dXMsXG5cdFx0XHRcdFx0XHQnc2tpcCc6ICdza2lwJyA9PT0gc3RhdHVzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdKTtcblxuXHRcdFx0XHRsZXQgaWNvbiA9ICdjbG9jayc7XG5cdFx0XHRcdGlmIChjdXJyZW50U3RlcCA9PT0ga2V5KSB7XG5cdFx0XHRcdFx0aWNvbiA9ICd1cGRhdGUnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCdkb25lJyA9PT0gc3RhdHVzKSB7XG5cdFx0XHRcdFx0aWNvbiA9ICd5ZXMnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCdlcnJvcicgPT09IHN0YXR1cyApIHtcblx0XHRcdFx0XHRpY29uID0gJ25vLWFsdCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249e2ljb259IGNsYXNzTmFtZT17Y3VycmVudFN0ZXAgPT09IGtleSA/ICdsb2FkaW5nJyA6ICcnfS8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+e2xhYmVsfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC91bD4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U3RlcHBlcjtcbiIsImNvbnN0IHt3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbmNvbnN0IExvYWRpbmcgPSAoe2lzT25ib2FyZGluZ30pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iIG1vY2stZGFzaFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1oZWFkXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHR7aXNPbmJvYXJkaW5nICYmIDxidXR0b24gY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1wcmltYXJ5XCIvPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaWNvbiBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0XHRcdDxidXR0b24+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItYm9keVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXNpdGVzXCI+XG5cdFx0XHRcdFx0e1sgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSBdLm1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZSBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZSBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7aXNPbmJvYXJkaW5nICYmIDxkaXYgY2xhc3NOYW1lPVwib2ItZm9vdGVyXCIvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRjb25zdCB7Z2V0T25ib2FyZGluZ1N0YXR1c30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRyZXR1cm4ge2lzT25ib2FyZGluZzogZ2V0T25ib2FyZGluZ1N0YXR1cygpfTtcbn0pKExvYWRpbmcpO1xuIiwiaW1wb3J0IEVkaXRvclNlbGVjdG9yIGZyb20gJy4vRWRpdG9yU2VsZWN0b3InO1xuaW1wb3J0IFN0YXJ0ZXJTaXRlQ2FyZCBmcm9tICcuL1N0YXJ0ZXJTaXRlQ2FyZCc7XG5pbXBvcnQgUHJldmlld0ZyYW1lIGZyb20gJy4vUHJldmlld0ZyYW1lJztcbmltcG9ydCBJbXBvcnRNb2RhbCBmcm9tICcuL0ltcG9ydE1vZGFsJztcbmltcG9ydCBNaWdyYXRpb24gZnJvbSAnLi9NaWdyYXRpb24nO1xuaW1wb3J0IFZpelNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcblxuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBPbmJvYXJkaW5nID0gKHtzaXRlcywgdXBzZWxscywgZWRpdG9yLCBwcmV2aWV3T3BlbiwgY3VycmVudFNpdGVEYXRhLCBpbXBvcnRNb2RhbCwgaXNPbmJvYXJkaW5nLCBjYW5jZWxPbmJvYXJkaW5nLCBtaWdyYXRpb259KSA9PiB7XG5cdGNvbnN0IFsgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgbWF4U2hvd24sIHNldE1heFNob3duIF0gPSB1c2VTdGF0ZSg5KTtcblxuXHRjb25zdCBmaWx0ZXJTaXRlcyA9IChzaXRlcykgPT4ge1xuXHRcdE9iamVjdC5rZXlzKHNpdGVzKS5tYXAoKHNsdWcpID0+IHtcblx0XHRcdHNpdGVzW3NsdWddLnNsdWcgPSBzbHVnO1xuXHRcdH0pO1xuXG5cdFx0c2l0ZXMgPSBPYmplY3QudmFsdWVzKHNpdGVzKTtcblxuXHRcdGlmICghIHNlYXJjaFF1ZXJ5KSB7XG5cdFx0XHRyZXR1cm4gc2l0ZXM7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZnVzZSA9IG5ldyBGdXNlKHNpdGVzLCB7XG5cdFx0XHRpbmNsdWRlU2NvcmU6IHRydWUsXG5cdFx0XHRrZXlzOiBbICd0aXRsZScsICdzbHVnJywgJ2tleXdvcmRzJyBdXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc2VhcmNoID0gZnVzZS5zZWFyY2goc2VhcmNoUXVlcnkpO1xuXHRcdHJldHVybiBzZWFyY2gubWFwKGl0ZW0gPT4gaXRlbS5pdGVtKTtcblx0fTtcblxuXHRjb25zdCBnZXRBbGxTaXRlcyA9ICgpID0+IHtcblx0XHRjb25zdCBzaXRlc0RhdGEgPSBzaXRlcyAmJiBzaXRlc1tlZGl0b3JdID8gZmlsdGVyU2l0ZXMoc2l0ZXNbZWRpdG9yXSkgOiBbXTtcblx0XHRjb25zdCB1cHNlbGxzRGF0YSA9IHVwc2VsbHMgJiYgdXBzZWxsc1tlZGl0b3JdID8gZmlsdGVyU2l0ZXModXBzZWxsc1tlZGl0b3JdKSA6IFtdO1xuXHRcdHJldHVybiBbIC4uLnNpdGVzRGF0YSwgLi4udXBzZWxsc0RhdGEgXTtcblx0fTtcblxuXHRjb25zdCByZW5kZXJTaXRlcyA9ICgpID0+IHtcblx0XHRjb25zdCBhbGxEYXRhID0gZ2V0QWxsU2l0ZXMoKTtcblxuXHRcdHJldHVybiBhbGxEYXRhLnNsaWNlKDAsIG1heFNob3duKS5tYXAoc2l0ZSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCB1cHNlbGw9e3NpdGVbJ2luX3BybyddfSBkYXRhPXtzaXRlfS8+O1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGdldFNpdGVOYXYgPSAocHJldiA9IGZhbHNlKSA9PiB7XG5cdFx0aWYgKG51bGwgPT09IGN1cnJlbnRTaXRlRGF0YSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGFsbFNpdGVzID0gZ2V0QWxsU2l0ZXMoKTtcblx0XHRjb25zdCBwb3NpdGlvbiA9IGFsbFNpdGVzLmluZGV4T2YoY3VycmVudFNpdGVEYXRhKTtcblxuXHRcdGlmICgtMSA9PT0gcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICgxID09PSBhbGxTaXRlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChwcmV2ICYmIDAgPT09IHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gYWxsU2l0ZXNbYWxsU2l0ZXMubGVuZ3RoIC0gMV07XG5cdFx0fVxuXG5cdFx0aWYgKCEgcHJldiAmJiBwb3NpdGlvbiA9PT0gYWxsU2l0ZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0cmV0dXJuIGFsbFNpdGVzWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBhbGxTaXRlc1twcmV2ID8gcG9zaXRpb24gLSAxIDogcG9zaXRpb24gKyAxXTtcblx0fTtcblxuXHRmdW5jdGlvbiByZW5kZXJNaWdyYXRpb24oKSB7XG5cdFx0aWYgKCEgbWlncmF0aW9uKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIDxNaWdyYXRpb24gZGF0YT17bWlncmF0aW9ufS8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHRcdHtyZW5kZXJNaWdyYXRpb24oKX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1oZWFkXCI+XG5cdFx0XHRcdFx0PGgyPntfXygnUmVhZHkgdG8gdXNlIHByZS1idWlsdCB3ZWJzaXRlcyB3aXRoIDEtY2xpY2sgaW5zdGFsbGF0aW9uJywgJ25ldmUnKX08L2gyPlxuXHRcdFx0XHRcdDxwPntpc09uYm9hcmRpbmcgP1xuXHRcdFx0XHRcdFx0X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdXaXRoIE5ldmUsIHlvdSBjYW4gY2hvb3NlIGZyb20gbXVsdGlwbGUgdW5pcXVlIGRlbW9zLCBzcGVjaWFsbHkgZGVzaWduZWQgZm9yIHlvdSwgdGhhdCBjYW4gYmUgaW5zdGFsbGVkIHdpdGggYSBzaW5nbGUgY2xpY2suIFlvdSBqdXN0IG5lZWQgdG8gY2hvb3NlIHlvdXIgZmF2b3JpdGUsIGFuZCB3ZSB3aWxsIHRha2UgY2FyZSBvZiBldmVyeXRoaW5nIGVsc2UuJywgJ25ldmUnKVxuXHRcdFx0XHRcdH08L3A+XG5cdFx0XHRcdFx0e2lzT25ib2FyZGluZyAmJlxuXHRcdFx0XHRcdDxCdXR0b24gaXNQcmltYXJ5IG9uQ2xpY2s9e2NhbmNlbE9uYm9hcmRpbmd9PntfXygnS2VlcCB0aGUgQ3VycmVudCBMYXlvdXQnLCAnbmV2ZScpfTwvQnV0dG9uPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItYm9keVwiPlxuXHRcdFx0XHRcdDxFZGl0b3JTZWxlY3RvclxuXHRcdFx0XHRcdFx0b25TZWFyY2g9eyhxdWVyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2hRdWVyeShxdWVyeSk7XG5cdFx0XHRcdFx0XHRcdHNldE1heFNob3duKDkpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHF1ZXJ5PXtzZWFyY2hRdWVyeX0vPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2Itc2l0ZXNcIj5cblx0XHRcdFx0XHRcdHsoc2l0ZXMgfHwgdXBzZWxscykgJiYgcmVuZGVyU2l0ZXMoKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Vml6U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0TWF4U2hvd24obWF4U2hvd24gKyA5KTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7aGVpZ2h0OiAxMCwgd2lkdGg6IDEwLCBkaXNwbGF5OiAnYmxvY2snfX0vPlxuXHRcdFx0XHRcdDwvVml6U2Vuc29yPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyhwcmV2aWV3T3BlbiAmJiBjdXJyZW50U2l0ZURhdGEpICYmIDxQcmV2aWV3RnJhbWUgbmV4dD17Z2V0U2l0ZU5hdigpfSBwcmV2PXtnZXRTaXRlTmF2KHRydWUpfS8+fVxuXHRcdFx0eyhpbXBvcnRNb2RhbCAmJiBjdXJyZW50U2l0ZURhdGEpICYmIDxJbXBvcnRNb2RhbC8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3Qge3NldE9uYm9hcmRpbmdTdGF0ZX0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNhbmNlbE9uYm9hcmRpbmc6ICgpID0+IHNldE9uYm9hcmRpbmdTdGF0ZShmYWxzZSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldFNpdGVzLFxuXHRcdFx0Z2V0VXBzZWxscyxcblx0XHRcdGdldEN1cnJlbnRFZGl0b3IsXG5cdFx0XHRnZXRQcmV2aWV3U3RhdHVzLFxuXHRcdFx0Z2V0Q3VycmVudFNpdGUsXG5cdFx0XHRnZXRJbXBvcnRNb2RhbFN0YXR1cyxcblx0XHRcdGdldE9uYm9hcmRpbmdTdGF0dXMsXG5cdFx0XHRnZXRNaWdyYXRpb25EYXRhXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVzOiBnZXRTaXRlcygpLFxuXHRcdFx0dXBzZWxsczogZ2V0VXBzZWxscygpLFxuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKCksXG5cdFx0XHRwcmV2aWV3T3BlbjogZ2V0UHJldmlld1N0YXR1cygpLFxuXHRcdFx0Y3VycmVudFNpdGVEYXRhOiBnZXRDdXJyZW50U2l0ZSgpLFxuXHRcdFx0aW1wb3J0TW9kYWw6IGdldEltcG9ydE1vZGFsU3RhdHVzKCksXG5cdFx0XHRpc09uYm9hcmRpbmc6IGdldE9uYm9hcmRpbmdTdGF0dXMoKSxcblx0XHRcdG1pZ3JhdGlvbjogZ2V0TWlncmF0aW9uRGF0YSgpXG5cdFx0fTtcblx0fSlcbikoT25ib2FyZGluZyk7XG4iLCIvKmdsb2JhbCBuZXZlRGFzaCovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBNaWdyYXRpb24gPSAoe2RhdGF9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1oZWFkIG9iLW1pZ3JhdGlvblwiPlxuXHRcdFx0PGgyPntkYXRhLmhlYWRpbmd9PC9oMj5cblx0XHRcdDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdHtkYXRhLnNjcmVlbnNob3QgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YS5zY3JlZW5zaG90fSBhbHQ9e2RhdGEudGhlbWVfbmFtZX0vPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS50aGVtZV9uYW1lfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHt0ZW1wbGF0ZSwgdGVtcGxhdGVfbmFtZX0gPSBkYXRhO1xuXHRcdFx0XHRcdHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9taWdyYXRlX2Zyb250cGFnZScsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlLFxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZV9uYW1lXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KS50aGVuKHIgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH19XG5cdFx0XHQ+e19fKCAnTWlncmF0ZScsICduZXZlJyApICsgJyAnICsgZGF0YS50aGVtZV9uYW1lfTwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaWdyYXRpb247XG4iLCJjb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBQcmV2aWV3RnJhbWUgPSAoe25leHQsIHByZXYsIHNpdGVEYXRhLCBzZXRTaXRlLCBzZXRQcmV2aWV3LCBzZXRNb2RhbH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXByZXZpZXdcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiPlxuXHRcdFx0XHQ8aWZyYW1lIHNyYz17c2l0ZURhdGFbJ2RlbW9fdXJsJ119IGZyYW1lYm9yZGVyPVwiMFwiLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJ1cGRhdGVcIiBzaXplPXs1MH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b20tYmFyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdG9yXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRQcmV2aWV3KGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShudWxsKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbG9zZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Nsb3NlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJub1wiLz5cblxuXHRcdFx0XHRcdHtwcmV2ICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShwcmV2KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmV2XCJcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUHJldmlvdXMnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cImFycm93LWxlZnQtYWx0MlwiXG5cdFx0XHRcdFx0Lz59XG5cblx0XHRcdFx0XHR7bmV4dCAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUobmV4dCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ05leHQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cImFycm93LXJpZ2h0LWFsdDJcIlxuXHRcdFx0XHRcdC8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3NpdGVEYXRhWydpbl9wcm8nXSA/XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVwZ3JhZGVcIlxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0aHJlZj17c2l0ZURhdGFbJ291dGJvdW5kX2xpbmsnXX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPiA6XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltcG9ydFwiXG5cdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRNb2RhbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdJbXBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRTaXRlfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVEYXRhOiBnZXRDdXJyZW50U2l0ZSgpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3Qge3NldEN1cnJlbnRTaXRlLCBzZXRQcmV2aWV3U3RhdHVzLCBzZXRJbXBvcnRNb2RhbFN0YXR1c30gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNpdGU6IChkYXRhKSA9PiBzZXRDdXJyZW50U2l0ZShkYXRhKSxcblx0XHRcdHNldFByZXZpZXc6IChzdGF0dXMpID0+IHNldFByZXZpZXdTdGF0dXMoc3RhdHVzKSxcblx0XHRcdHNldE1vZGFsOiAoc3RhdHVzKSA9PiBzZXRJbXBvcnRNb2RhbFN0YXR1cyhzdGF0dXMpXG5cdFx0fTtcblx0fSlcbikoUHJldmlld0ZyYW1lKTtcbiIsImNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3dpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBTdGFydGVyU2l0ZUNhcmQgPSAoe2RhdGEsIHVwc2VsbCwgc2V0U2l0ZSwgc2V0UHJldmlldywgc2V0TW9kYWx9KSA9PiB7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiZmF2XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpY29uPVwic3Rhci1maWxsZWRcIi8+XG5cdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmV2aWV3XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShkYXRhKTtcblx0XHRcdFx0XHRcdFx0c2V0UHJldmlldyh0cnVlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdQcmV2aWV3JywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR7ISB1cHNlbGwgJiZcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRzZXRNb2RhbCh0cnVlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdJbXBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtkYXRhLnNjcmVlbnNob3QgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdDxpbWcgc3JjPXtkYXRhLnNjcmVlbnNob3R9IGFsdD17ZGF0YS50aXRsZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnRpdGxlfTwvcD5cblx0XHRcdFx0e3Vwc2VsbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJwcm8tYmFkZ2VcIj57X18oJ1BybycsICduZXZlJyl9PC9zcGFuPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgIHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0Y29uc3Qge3NldEN1cnJlbnRTaXRlLCBzZXRQcmV2aWV3U3RhdHVzLCBzZXRJbXBvcnRNb2RhbFN0YXR1c30gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7XG5cdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpLFxuXHRcdHNldFByZXZpZXc6IChzdGF0dXMpID0+IHNldFByZXZpZXdTdGF0dXMoc3RhdHVzKSxcblx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHR9O1xufSlcbihTdGFydGVyU2l0ZUNhcmQpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTaXRlcyhzaXRlcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NJVEVTJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlc31cblx0XHR9O1xuXHR9LFxuXHRzZXRVcHNlbGxzKHVwc2VsbHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9VUFNFTExTJyxcblx0XHRcdHBheWxvYWQ6IHt1cHNlbGxzfVxuXHRcdH07XG5cdH0sXG5cdHNldE1pZ3JhdGlvbkRhdGEobWlncmF0aW9uRGF0YSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX01JR1JBVElPTl9EQVRBJyxcblx0XHRcdHBheWxvYWQ6IHttaWdyYXRpb25EYXRhfVxuXHRcdH07XG5cdH0sXG5cdHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9FRElUT1InLFxuXHRcdFx0cGF5bG9hZDoge2VkaXRvcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50U2l0ZShzaXRlRGF0YSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0ZPQ1VTRURfU0lURScsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZURhdGF9XG5cdFx0fTtcblx0fSxcblx0c2V0UHJldmlld1N0YXR1cyhwcmV2aWV3U3RhdHVzKSB7XG5cdFx0aWYgKHByZXZpZXdTdGF0dXMpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1BSRVZJRVdfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtwcmV2aWV3U3RhdHVzfVxuXHRcdH07XG5cdH0sXG5cdHNldEltcG9ydE1vZGFsU3RhdHVzKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0aWYgKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9JTVBPUlRfTU9EQUxfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtpbXBvcnRNb2RhbFN0YXR1c31cblx0XHR9O1xuXHR9LFxuXHRzZXRPbmJvYXJkaW5nU3RhdGUoc3RhdGUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9PTkJPQVJESU5HJyxcblx0XHRcdHBheWxvYWQ6IHtzdGF0ZX1cblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2l0ZXM6IG51bGwsXG5cdHVwc2VsbHM6IG51bGwsXG5cdGVkaXRvcjogJ2VsZW1lbnRvcicsXG5cdHByZXZpZXdTdGF0dXM6IGZhbHNlLFxuXHRpbXBvcnRNb2RhbFN0YXR1czogZmFsc2UsXG5cdGN1cnJlbnRTaXRlOiBudWxsLFxuXHRpbXBvcnRpbmc6IGZhbHNlLFxuXHRpc09uYm9hcmRpbmc6IG5ldmVEYXNoLm9uYm9hcmRpbmcub25ib2FyZGluZyB8fCBmYWxzZSxcblx0bWlncmF0aW9uRGF0YTogbnVsbFxufTtcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfU0lURVMnOlxuXHRcdFx0Y29uc3Qge3NpdGVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNpdGVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9VUFNFTExTJzpcblx0XHRcdGNvbnN0IHt1cHNlbGxzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwc2VsbHNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX01JR1JBVElPTl9EQVRBJzpcblx0XHRcdGNvbnN0IHttaWdyYXRpb25EYXRhfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1pZ3JhdGlvbkRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0NVUlJFTlRfRURJVE9SJzpcblx0XHRcdGNvbnN0IHtlZGl0b3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0ZWRpdG9yXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9GT0NVU0VEX1NJVEUnOlxuXHRcdFx0Y29uc3Qge3NpdGVEYXRhfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRTaXRlOiBzaXRlRGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfUFJFVklFV19TVEFUVVMnOlxuXHRcdFx0Y29uc3Qge3ByZXZpZXdTdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cHJldmlld1N0YXR1c1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfSU1QT1JUX01PREFMX1NUQVRVUyc6XG5cdFx0XHRjb25zdCB7aW1wb3J0TW9kYWxTdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aW1wb3J0TW9kYWxTdGF0dXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX09OQk9BUkRJTkcnOlxuXHRcdFx0Y29uc3Qge3N0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpc09uYm9hcmRpbmc6IHN0YXR1c1xuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRTaXRlczogKHN0YXRlKSA9PiBzdGF0ZS5zaXRlcyxcblx0Z2V0VXBzZWxsczogKHN0YXRlKSA9PiBzdGF0ZS51cHNlbGxzLFxuXHRnZXRNaWdyYXRpb25EYXRhOiAoc3RhdGUpID0+IHN0YXRlLm1pZ3JhdGlvbkRhdGEsXG5cdGdldEN1cnJlbnRFZGl0b3I6IChzdGF0ZSkgPT4gc3RhdGUuZWRpdG9yLFxuXHRnZXRDdXJyZW50U2l0ZTogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50U2l0ZSxcblx0Z2V0UHJldmlld1N0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5wcmV2aWV3U3RhdHVzLFxuXHRnZXRJbXBvcnRNb2RhbFN0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5pbXBvcnRNb2RhbFN0YXR1cyxcblx0Z2V0T25ib2FyZGluZ1N0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5pc09uYm9hcmRpbmdcbn07XG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbnB1dEZvcm0gPSAoe3NsdWcsIGxhYmVsLCBwbGFjZWhvbGRlciwgZ2V0T3B0aW9uLCBzZXRUb2FzdCwgY2hhbmdlT3B0aW9ufSkgPT4ge1xuXHRjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoZ2V0T3B0aW9uKHNsdWcpKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdGV4dCc+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17XG5cdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyhzbHVnLCB2YWx1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KHIubWVzc2FnZSA/IHIubWVzc2FnZSA6IGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9PlxuXHRcdFx0XHR7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e3NsdWd9PntsYWJlbH08L2xhYmVsPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD17c2x1Z31cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtcblx0XHRcdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2xvYWRpbmcgPyAnaXMtbG9hZGluZycgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2F2ZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdGljb249e2xvYWRpbmcgPyAndXBkYXRlJyA6ICdlZGl0b3ItYnJlYWsnfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldE9wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldE9wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKElucHV0Rm9ybSk7XG5cbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRvZ2dsZSA9ICh7c2x1ZywgbGFiZWwsIGdldE9wdGlvbiwgY2hhbmdlT3B0aW9uLCBzZXRUb2FzdH0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdG9nZ2xlJz5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGNoZWNrZWQ9e2dldE9wdGlvbihzbHVnKX1cblx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKCBzbHVnLCB2YWx1ZSApLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICggci5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3QoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7bG9hZGluZyAmJiA8RGFzaGljb24gc2l6ZT17MTh9IGljb249XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoVG9nZ2xlKTtcblxuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Z2V0fSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge3NsdWcsIGRhdGF9ID0gcHJvcHM7XG5cdGNvbnN0IHtiYW5uZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCB2ZXJzaW9uLCBhdXRob3J9ID0gcHJvcHMuZGF0YTtcblx0Y29uc3QgWyBhY3Rpb24sIHNldEFjdGlvbiBdID0gdXNlU3RhdGUoZGF0YS5jdGEpO1xuXHRjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBzdHJpbmdNYXAgPSB7XG5cdFx0J2luc3RhbGwnOiB7c3RhdGljOiBfXygnSW5zdGFsbCcsICduZXZlJyksIHByb2dyZXNzOiBfXygnSW5zdGFsbGluZycsICduZXZlJyl9LFxuXHRcdCdhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdBY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnQWN0aXZhdGluZycsICduZXZlJyl9LFxuXHRcdCdkZWFjdGl2YXRlJzoge3N0YXRpYzogX18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0RlYWN0aXZhdGluZycsICduZXZlJyl9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgJ3BsdWdpbicsIHNsdWcgXSl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YmFubmVyfSBhbHQ9e19fKCdCYW5uZXIgSW1hZ2UnLCAnbmFtZScpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbHVnaW4tZGF0YVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1hY3Rpb25cIlxuXHRcdFx0XHRcdGlzUHJpbWFyeT17WyAnaW5zdGFsbCcsICdhY3RpdmF0ZScgXS5pbmNsdWRlcyhhY3Rpb24pfVxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsnZGVhY3RpdmF0ZScgPT09IGFjdGlvbn1cblx0XHRcdFx0XHRkaXNhYmxlZD17aW5Qcm9ncmVzc31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKHRydWUpO1xuXHRcdFx0XHRcdFx0aWYgKCdpbnN0YWxsJyA9PT0gYWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxQbHVnaW4oc2x1ZykudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cblx0XHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRnZXQoZGF0YVthY3Rpb25dLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICghIHIub2spIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuXHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmICgnYWN0aXZhdGUnID09PSBhY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2RlYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyEgaW5Qcm9ncmVzcyAmJiBzdHJpbmdNYXBbYWN0aW9uXS5zdGF0aWN9XG5cdFx0XHRcdFx0e2luUHJvZ3Jlc3MgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz5cblx0XHRcdFx0XHRcdFx0e3N0cmluZ01hcFthY3Rpb25dLnByb2dyZXNzICsgJy4uLid9XG4gICAgICAgICAgICA8L3NwYW4+KX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IGluc3RhbGxQbHVnaW4gPSAoc2x1ZykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0d3AudXBkYXRlcy5hamF4KCdpbnN0YWxsLXBsdWdpbicsIHtcblx0XHRcdHNsdWcsXG5cdFx0XHRzdWNjZXNzOiAocikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHtzdWNjZXNzOiB0cnVlfSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnIpID0+IHtcblxuXHRcdFx0XHQvLyBlcnJvckNvZGUsIGVycm9yTWVzc2FnZSBhcmUgcGFyYW1zIG9mIGVyciBpZiB3ZSB0b2FzdC5cblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTGljZW5zZUNhcmQgZnJvbSAnLi9MaWNlbnNlQ2FyZCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge1RvZ2dsZUNvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFifSkgPT4ge1xuXHRjb25zdCBbIHRyYWNraW5nLCBzZXRUcmFja2luZyBdID0gdXNlU3RhdGUobmV2ZURhc2gub3B0aW9ucy5sb2dnZXIgfHwgZmFsc2UpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHR7bmV2ZURhc2gucHJvICYmIDxMaWNlbnNlQ2FyZCBpc1Zpc2libGU9eydwcm8nID09PSBjdXJyZW50VGFifS8+fVxuXHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ05ldmUgQ29tbXVuaXR5JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnTGVhdmUgdXMgYSByZXZpZXcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdBcmUgeW91IGFyZSBlbmpveWluZyBOZXZlPyBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgeW91ciBmZWVkYmFjay4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0NvbnRyaWJ1dGluZycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0JlY29tZSBhIGNvbnRyaWJ1dG9yIGJ5IG9wdGluZyBpbiB0byBvdXIgYW5vbnltb3VzIGRhdGEgdHJhY2tpbmcuIFdlIGd1YXJhbnRlZSBubyBzZW5zaXRpdmUgZGF0YSBpcyBjb2xsZWN0ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzExMjItbmV2ZS11c2FnZS10cmFja2luZ1wiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RyYWNraW5nfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbGxvdyBBbm9ueW1vdXMgVHJhY2tpbmcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2guYXBpICsgJy90b2dnbGVfdHJhY2tpbmcnLCB7dmFsdWV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnZXJyb3InKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgdXBkYXRlIG9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKCEgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ3N1Y2Nlc3MnKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RvYXN0ICYmXG5cdFx0XHRcdFx0PFRvYXN0IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0gdHlwZT17dG9hc3RUeXBlfS8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYXNpZGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiY29uc3Qge1NuYWNrYmFyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3QgR2xvYmFsU25hY2tiYXIgPSAoe3RvYXN0LCBzZXRUb2FzdH0pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFRvYXN0KG51bGwpO1xuXHRcdH0sIDMwMDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWVzc2FnZSA9IHRvYXN0KCk7XG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdG9wYWNpdHk6IG51bGwgPT09IG1lc3NhZ2UgPyAwIDogMVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0PFNuYWNrYmFyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZGFzaC1ub3RpY2UnXG5cdFx0XHQ+XG5cdFx0XHRcdHsnYm9vbGVhbicgPT09IHR5cGVvZiBtZXNzYWdlID9cblx0XHRcdFx0XHQoZmFsc2UgPT09IG1lc3NhZ2UgP1xuXHRcdFx0XHRcdFx0X18oJ0NvdWxkIG5vdCBVcGRhdGUgT3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0X18oJ09wdGlvbiBVcGRhdGVkJywgJ25ldmUnKSkgOlxuXHRcdFx0XHRcdHRvYXN0KClcblx0XHRcdFx0fVxuXHRcdFx0PC9TbmFja2Jhcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFRvYXN0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6ICgpID0+IGdldFRvYXN0KClcblx0XHR9O1xuXHR9KVxuKShHbG9iYWxTbmFja2Jhcik7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHt0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFRhYnNDb250ZW50ID0gKHtjdXJyZW50VGFiLCBzZXRUYWJ9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RhYi1jb250ZW50JywgJ2NvbHVtbnMnLCBjdXJyZW50VGFiIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0YWJzW2N1cnJlbnRUYWJdLnJlbmRlcihzZXRUYWIpfVxuXHRcdDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFic0NvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFRvYXN0ID0gKHttZXNzYWdlLCBkaXNtaXNzLCB0aW1lLCB0eXBlID0gJ2luZm8nfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpc21pc3MoJycpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fSwgdGltZSB8fCAyMDAwKTtcblx0fSk7XG5cdGNvbnN0IGljb25NYXAgPSB7XG5cdFx0J2luZm8nOiAnaW5mbycsXG5cdFx0J2Vycm9yJzogJ25vJyxcblx0XHQnc3VjY2Vzcyc6ICd5ZXMnLFxuXHRcdCd3YXJuaW5nJzogJ3dhcm5pbmcnXG5cdH07XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RvYXN0JywgJ2NvbXBvbmVudHMtYW5pbWF0ZV9fYXBwZWFyJywgJ2lzLWZyb20tbWlkZGxlJywgdHlwZSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbk1hcFt0eXBlXX0vPlxuXHRcdFx0PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQ29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCB7cmVnaXN0ZXJTdG9yZX0gPSB3cC5kYXRhO1xuY29uc3Qge3JlbmRlcn0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1kYXNoYm9hcmQnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9yc1xufSk7XG5cbmltcG9ydCBvbmJvYXJkaW5nUmVkdWNlciBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBvbmJvYXJkaW5nQWN0aW9ucyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBvbmJvYXJkaW5nU2VsZWN0b3JzIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3NlbGVjdG9ycyc7XG5yZWdpc3RlclN0b3JlKCduZXZlLW9uYm9hcmRpbmcnLCB7XG5cdHJlZHVjZXI6IG9uYm9hcmRpbmdSZWR1Y2VyLFxuXHRhY3Rpb25zOiBvbmJvYXJkaW5nQWN0aW9ucyxcblx0c2VsZWN0b3JzOiBvbmJvYXJkaW5nU2VsZWN0b3JzXG59KTtcblxuY29uc3QgUm9vdCA9ICgpID0+IDxBcHAvPjtcbnJlbmRlcihcblx0PFJvb3QvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldmUtZGFzaGJvYXJkJylcbik7XG5cbiIsIiBleHBvcnQgZGVmYXVsdCB7XG5cdHNldFRhYih0YWIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9UQUInLFxuXHRcdFx0cGF5bG9hZDoge3RhYn1cblx0XHR9O1xuXHR9LFxuXHRzZXRTZXR0aW5ncyhvYmplY3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TRVRUSU5HUycsXG5cdFx0XHRwYXlsb2FkOiB7b2JqZWN0fVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhtb2R1bGVTbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7bW9kdWxlU2x1ZzogJ252X3Byb18nICsgbW9kdWxlU2x1ZyArICdfc3RhdHVzJywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlT3B0aW9uKG9wdGlvblNsdWcsIG9wdGlvblZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdDSEFOR0VfTU9EVUxFX09QVElPTicsXG5cdFx0XHRwYXlsb2FkOiB7b3B0aW9uU3RhdHVzOiAnbnZfcHJvXycgKyBvcHRpb25TbHVnLCBvcHRpb25WYWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VMaWNlbnNlVGllcih0aWVyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfTElDRU5TRV9USUVSJyxcblx0XHRcdHBheWxvYWQ6IHt0aWVyfVxuXHRcdH07XG5cdH0sXG5cdHNldFRvYXN0KG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9UT0FTVF9NRVNTQUdFJyxcblx0XHRcdHBheWxvYWQ6IG1lc3NhZ2Vcblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzZXR0aW5nczoge30sXG5cdHRpZXI6IG5ldmVEYXNoLnBybyA/IG5ldmVEYXNoLmxpY2Vuc2UudGllciA6IDAsXG5cdHRvYXN0OiBudWxsLFxuXHRjdXJyZW50VGFiOiAnc3RhcnQnXG59O1xuXG5jb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuaWYgKG51bGwgIT09IGhhc2gpIHtcblx0aW5pdGlhbFN0YXRlLmN1cnJlbnRUYWIgPSBoYXNoO1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9UQUInOlxuXHRcdFx0Y29uc3Qge3RhYn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjdXJyZW50VGFiOiB0YWJcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1NFVFRJTkdTJzpcblx0XHRcdGNvbnN0IHtvYmplY3R9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IG9iamVjdFxuXHRcdFx0fTtcblx0XHRjYXNlICdUT0dHTEVfTU9EVUxFJzpcblx0XHRcdGNvbnN0IHttb2R1bGVTbHVnLCB2YWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFttb2R1bGVTbHVnXTogdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdDSEFOR0VfTU9EVUxFX09QVElPTic6XG5cdFx0XHRsZXQge29wdGlvblN0YXR1cywgb3B0aW9uVmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbb3B0aW9uU3RhdHVzXTogb3B0aW9uVmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfTElDRU5TRV9USUVSJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0aWVyOiBhY3Rpb24ucGF5bG9hZC50aWVyXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9UT0FTVF9NRVNTQUdFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2FzdDogYWN0aW9uLnBheWxvYWRcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0TW9kdWxlU3RhdHVzOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWcgKyAnX3N0YXR1cyddLFxuXHRnZXRPcHRpb246IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1Z10sXG5cdGdldExpY2Vuc2VUaWVyOiAoc3RhdGUpID0+IHN0YXRlLnRpZXIsXG5cdGdldFRvYXN0OiAoc3RhdGUpID0+IHN0YXRlLnRvYXN0LFxuXHRnZXRUYWI6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFRhYlxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5pbXBvcnQgRnJlZVBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVBybyc7XG5cbmNvbnN0IGdldFVybFBhcmFtID0gKHBhcmFtKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cblx0cmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xufTtcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG5cdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0aWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuXHRpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuXHQnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6IChzZXRUYWIpID0+IDxQbHVnaW5zLz59LFxuXHQnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6IChzZXRUYWIpID0+IDxDaGFuZ2Vsb2cvPn0sXG5cdCdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcblx0J2ZyZWUtcHJvJzoge2xhYmVsOiAnRnJlZSB2cyBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxGcmVlUHJvLz59XG59O1xuXG5pZiAobmV2ZURhc2gucHJvKSB7XG5cdHRhYnMucHJvID0ge2xhYmVsOiAnTmV2ZSBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxQcm8vPn07XG5cdGRlbGV0ZSAodGFic1snZnJlZS1wcm8nXSk7XG59XG5cblxuZXhwb3J0IHtcblx0Z2V0VXJsUGFyYW0sXG5cdGFkZFVybEhhc2gsXG5cdGdldFRhYkhhc2gsXG5cdHRhYnNcbn07XG4iLCJjb25zdCB7X199ID0gd3AuaTE4bjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuY29uc3QgaXNWYWxpZCA9IChvcHRpb24sIG9wdGlvbnNBcnJheSkgPT4ge1xuXHRpZiAoJ252X3Byb190eXBla2l0X2lkJyA9PT0gb3B0aW9uKSB7XG5cdFx0aWYgKCEgb3B0aW9uc0FycmF5WyduZXZlX3Byb190eXBla2l0X2RhdGEnXSkge1xuXHRcdFx0cmV0dXJuIHttZXNzYWdlOiBfXygnVHlwZWtpdCBQcm9qZWN0IElEIGlzIGludmFsaWQnLCAnbmV2ZScpLCBzdWNjZXNzOiBmYWxzZX07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4vcmVzdCc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRXaWRnZXRzID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbXBvcnRfd2lkZ2V0cycsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydE1vZHMgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2ltcG9ydF90aGVtZV9tb2RzJywgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zdGFsbFBsdWdpbnMgPSAocGx1Z2luQXJyYXkpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbnN0YWxsX3BsdWdpbnMnLCBwbHVnaW5BcnJheSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0Q29udGVudCA9IChkYXRhKSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW1wb3J0X2NvbnRlbnQnLCBkYXRhKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==