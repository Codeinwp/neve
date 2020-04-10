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
      setTab = _ref.setTab;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState(neveDash.onboarding.onboarding === 'yes'),
      _useState4 = _slicedToArray(_useState3, 2),
      isOnboarding = _useState4[0],
      setIsOnboarding = _useState4[1];

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
    className: "content"
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

  return {
    toast: getToast(),
    currentTab: getTab()
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
/* global neveDash */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

var Changelog = function Changelog(props) {
  var _neveDash = neveDash,
      changelog = _neveDash.changelog;
  return wp.element.createElement("div", {
    className: "card"
  }, changelog.map(function (entry, index) {
    var date = entry.date,
        version = entry.version,
        tweaks = entry.tweaks,
        fixes = entry.fixes,
        features = entry.features;
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
      setUpsells = _ref.setUpsells;

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
          var _r$data = r.data,
              remote = _r$data.remote,
              upsell = _r$data.upsell;
          setSites(remote);
          setUpsells(upsell);
          setLoading(false);
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
      _setUpsells = _dispatch.setUpsells;

  return {
    setSites: function setSites(sites) {
      return _setSites(sites);
    },
    setUpsells: function setUpsells(upsells) {
      return _setUpsells(upsells);
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

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      forceToolTip = _useState4[0],
      toggleForceTooltip = _useState4[1];

  return wp.element.createElement("tr", {
    className: "feature-row"
  }, wp.element.createElement("td", {
    className: "large"
  }, wp.element.createElement("div", {
    className: "feat-wrap"
  }, wp.element.createElement("h4", null, title), wp.element.createElement("a", {
    onMouseEnter: function onMouseEnter(e) {
      e.preventDefault();
      toggleTooltip(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      e.preventDefault();
      toggleTooltip(false);
    },
    onClick: function onClick(e) {
      e.preventDefault();
      toggleForceTooltip(true);
    }
  }, wp.element.createElement(Dashicon, {
    icon: "info"
  }), (tooltip || forceToolTip) && wp.element.createElement("div", {
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
    console.log(importing);

    if (importing) {
      return false;
    } else {
      setModal(false);
      setSite(null);
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
  }), error.code && wp.element.createElement("li", null, __('Error code', 'neve'), ": ", wp.element.createElement("code", null, error.code)), wp.element.createElement("li", null, __('Error log', 'neve'), ": ", wp.element.createElement(Button, {
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
    onClick: closeModal
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
var Loading = function Loading() {
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
  })), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement("div", {
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
  })))), wp.element.createElement("div", {
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
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

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
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
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
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;

var Onboarding = function Onboarding(_ref) {
  var sites = _ref.sites,
      upsells = _ref.upsells,
      editor = _ref.editor,
      previewOpen = _ref.previewOpen,
      currentSiteData = _ref.currentSiteData,
      importModal = _ref.importModal;

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

    var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_5__["default"](sites, {
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

  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "ob"
  }, wp.element.createElement("div", {
    className: "ob-head"
  }, wp.element.createElement("h2", null, __('Ready to use pre-built websites with 1-click installation', 'neve')), wp.element.createElement("p", null, __('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve')), wp.element.createElement(_EditorSelector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onSearch: function onSearch(query) {
      setSearchQuery(query);
      setMaxShown(9);
    },
    query: searchQuery
  })), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement("div", {
    className: "ob-sites"
  }, (sites || upsells) && renderSites()), wp.element.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: function onChange(isVisible) {
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

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites,
      getUpsells = _select.getUpsells,
      getCurrentEditor = _select.getCurrentEditor,
      getPreviewStatus = _select.getPreviewStatus,
      getCurrentSite = _select.getCurrentSite,
      getImportModalStatus = _select.getImportModalStatus;

  return {
    sites: getSites(),
    upsells: getUpsells(),
    editor: getCurrentEditor(),
    previewOpen: getPreviewStatus(),
    currentSiteData: getCurrentSite(),
    importModal: getImportModalStatus()
  };
})(Onboarding));

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
  importing: false
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


var __ = wp.i18n.__;

var TabsContent = function TabsContent(_ref) {
  var currentTab = _ref.currentTab,
      setTab = _ref.setTab;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['container', 'tab-content', 'columns', currentTab]);
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
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvSW1wb3J0U3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvUHJldmlld0ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvU3RhcnRlclNpdGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9JbnB1dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGx1Z2luQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RhYnNDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NpdGUtaW1wb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIndwIiwiZWxlbWVudCIsIkRhc2hpY29uIiwiY29tcG9uZW50cyIsIkFjY29yZGlvbiIsInByb3BzIiwiaXNPcGVuIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImNsYXNzbmFtZXMiLCJoZWlnaHQiLCJkYXRhIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkFwcCIsInNldFNldHRpbmdzIiwidG9hc3QiLCJjdXJyZW50VGFiIiwic2V0VGFiIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuZXZlRGFzaCIsIm9uYm9hcmRpbmciLCJpc09uYm9hcmRpbmciLCJzZXRJc09uYm9hcmRpbmciLCJzZXR0aW5ncyIsImFwaSIsImxvYWRQcm9taXNlIiwidGhlbiIsIm1vZGVscyIsIlNldHRpbmdzIiwiZmV0Y2giLCJyIiwid3JhcENsYXNzZXMiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiQ2FyZCIsImljb24iLCJpY29uQWx0IiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWVzIiwiX18iLCJpMThuIiwiQ2hhbmdlbG9nIiwiY2hhbmdlbG9nIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImRhdGUiLCJ2ZXJzaW9uIiwidHdlYWtzIiwiZml4ZXMiLCJmZWF0dXJlcyIsImZlYXR1cmUiLCJmaXgiLCJ0d2VhayIsIkJ1dHRvbiIsIlBybyIsImZlYXR1cmVEYXRhIiwiaXRlbSIsInVwZ3JhZGVVUkwiLCJIZWxwIiwiYXNzZXRzIiwiSGVhZGVyIiwicGx1Z2lucyIsIk9iamVjdCIsImtleXMiLCJzbHVnIiwibW9kdWxlcyIsImlkIiwiU3RhcnQiLCJyZW5kZXJDdXN0b21pemVyTGlua3MiLCJsaW5rcyIsImN1c3RvbWl6ZXJTaG9ydGN1dHMiLCJzcGxpdCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFydHMiLCJzbGljZSIsImNvbHVtbiIsImxpbmsiLCJ0ZXh0IiwiU3RhcnRlclNpdGVzIiwic2l0ZXMiLCJzZXRTaXRlcyIsInNldFVwc2VsbHMiLCJlcnJvciIsInNldEVycm9yIiwiZ2V0Iiwicm9vdCIsInN1Y2Nlc3MiLCJyZW1vdGUiLCJ1cHNlbGwiLCJ1cHNlbGxzIiwiZ2V0U2l0ZXMiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJmb3JjZVRvb2xUaXAiLCJ0b2dnbGVGb3JjZVRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiZ2V0VGFiSGFzaCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsImNoYW5nZVRpZXIiLCJsaWNlbnNlIiwicHJvQXBpIiwidmFsaWQiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzZXRWYWxpZCIsImV4cGlyYXRpb24iLCJzZXRFeHBpcmF0aW9uIiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0aWVyIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJjaGFuZ2VMaWNlbnNlVGllciIsIm5ld1RpZXIiLCJMb2FkaW5nIiwiQXJyYXkiLCJmcm9tIiwibm90aWZpY2F0aW9ucyIsIlRvZ2dsZUNvbnRyb2wiLCJNb2R1bGVDYXJkIiwiY2hhbmdlTW9kdWxlU3RhdHVzIiwiZ2V0TW9kdWxlU3RhdHVzIiwibmljZW5hbWUiLCJhdmFpbGFiaWxpdHlMZXZlbCIsIm9wdGlvbnMiLCJvcmRlciIsImRvY3VtZW50YXRpb24iLCJyZXF1aXJlZF9hY3Rpb25zIiwidXBncmFkZUxpbmtzIiwicmVuZGVyT3B0aW9uc0FjY29yZGlvbnMiLCJncm91cCIsIm9wdGlvblNsdWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VPcHRpb24iLCJ1cmwiLCJnZXRMaWNlbnNlVGllciIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsIlBvcG92ZXIiLCJFZGl0b3JTZWxlY3RvciIsIm9uU2VhcmNoIiwiZWRpdG9yIiwic2V0Q3VycmVudEVkaXRvciIsIm5pY2VOYW1lIiwidG9nZ2xlRHJvcGRvd24iLCJnZXRDdXJyZW50RWRpdG9yIiwiTW9kYWwiLCJJbXBvcnRNb2RhbCIsInNldE1vZGFsIiwic2V0U2l0ZSIsInNpdGVEYXRhIiwiY29udGVudCIsImN1c3RvbWl6ZXIiLCJ3aWRnZXRzIiwiZ2VuZXJhbCIsInNldEdlbmVyYWwiLCJwbHVnaW5zUHJvZ3Jlc3MiLCJzZXRQbHVnaW5zUHJvZ3Jlc3MiLCJjb250ZW50UHJvZ3Jlc3MiLCJzZXRDb250ZW50UHJvZ3Jlc3MiLCJjdXN0b21pemVyUHJvZ3Jlc3MiLCJzZXRDdXN0b21pemVyUHJvZ3Jlc3MiLCJ3aWRnZXRzUHJvZ3Jlc3MiLCJzZXRXaWRnZXRzUHJvZ3Jlc3MiLCJmcm9udFBhZ2VJRCIsInNldEZyb250UGFnZUlEIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsImltcG9ydGluZyIsInNldEltcG9ydGluZyIsInBsdWdpbk9wdGlvbnMiLCJzZXRQbHVnaW5PcHRpb25zIiwiZ2V0UGx1Z2luT3B0aW9ucyIsIm1hbmRhdG9yeSIsIm9wdGlvbmFsIiwiZGVmYXVsdE9mZiIsInJlbmRlck5vdGUiLCJleHRlcm5hbCIsInJlbmRlck9wdGlvbnMiLCJyZW5kZXJQbHVnaW5zIiwiYWxsUGx1Z2lucyIsIl9faHRtbCIsInJ1bkltcG9ydCIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsInJ1bkltcG9ydENvbnRlbnQiLCJpbnN0YWxsUGx1Z2lucyIsImhhbmRsZUVycm9yIiwicnVuSW1wb3J0Q3VzdG9taXplciIsImltcG9ydENvbnRlbnQiLCJjb250ZW50RmlsZSIsInNvdXJjZSIsImZyb250UGFnZSIsInNob3BQYWdlcyIsImRlbW9TbHVnIiwicnVuSW1wb3J0V2lkZ2V0cyIsImltcG9ydE1vZHMiLCJpbXBvcnREb25lIiwiaW1wb3J0V2lkZ2V0cyIsInN0ZXAiLCJjb2RlIiwiY2xvc2VNb2RhbCIsImFsbE9wdGlvbnNPZmYiLCJldmVyeSIsImsiLCJlZGl0TGlua01hcCIsImhvbWVVcmwiLCJlZGl0TGluayIsInRyb3VibGVzaG9vdGluZyIsInN1cHBvcnQiLCJsb2dVcmwiLCJnZXRDdXJyZW50U2l0ZSIsInNldEltcG9ydE1vZGFsU3RhdHVzIiwic2V0Q3VycmVudFNpdGUiLCJJbXBvcnRTdGVwcGVyIiwicHJvZ3Jlc3MiLCJ3aWxsRG8iLCJzdGVwc01hcCIsIk9uYm9hcmRpbmciLCJwcmV2aWV3T3BlbiIsImN1cnJlbnRTaXRlRGF0YSIsImltcG9ydE1vZGFsIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm1heFNob3duIiwic2V0TWF4U2hvd24iLCJmaWx0ZXJTaXRlcyIsInZhbHVlcyIsImZ1c2UiLCJGdXNlIiwiaW5jbHVkZVNjb3JlIiwic2VhcmNoIiwiZ2V0QWxsU2l0ZXMiLCJzaXRlc0RhdGEiLCJ1cHNlbGxzRGF0YSIsInJlbmRlclNpdGVzIiwiYWxsRGF0YSIsInNpdGUiLCJnZXRTaXRlTmF2IiwicHJldiIsImFsbFNpdGVzIiwicG9zaXRpb24iLCJpbmRleE9mIiwicXVlcnkiLCJ3aWR0aCIsImRpc3BsYXkiLCJnZXRVcHNlbGxzIiwiZ2V0UHJldmlld1N0YXR1cyIsImdldEltcG9ydE1vZGFsU3RhdHVzIiwiUHJldmlld0ZyYW1lIiwibmV4dCIsInNldFByZXZpZXciLCJzZXRQcmV2aWV3U3RhdHVzIiwiU3RhcnRlclNpdGVDYXJkIiwic2NyZWVuc2hvdCIsInBheWxvYWQiLCJwcmV2aWV3U3RhdHVzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW1wb3J0TW9kYWxTdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50U2l0ZSIsInN0YXRlIiwiSW5wdXRGb3JtIiwiZ2V0T3B0aW9uIiwic2V0VmFsdWUiLCJjaGFuZ2VTZXR0aW5nIiwiY2hhbmdlTW9kdWxlT3B0aW9uIiwiVG9nZ2xlIiwiYmFubmVyIiwibmFtZSIsImF1dGhvciIsInNldEFjdGlvbiIsInN0cmluZ01hcCIsImluc3RhbGxQbHVnaW4iLCJvayIsImFsaWduSXRlbXMiLCJlcnIiLCJTaWRlYmFyIiwibG9nZ2VyIiwidHJhY2tpbmciLCJzZXRUcmFja2luZyIsInBybyIsIlNuYWNrYmFyIiwiR2xvYmFsU25hY2tiYXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiVGFic0NvbnRlbnQiLCJyZW5kZXIiLCJUb2FzdCIsImRpc21pc3MiLCJ0aW1lIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25NYXAiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJvbmJvYXJkaW5nUmVkdWNlciIsIm9uYm9hcmRpbmdBY3Rpb25zIiwib25ib2FyZGluZ1NlbGVjdG9ycyIsIlJvb3QiLCJnZXRFbGVtZW50QnlJZCIsIm1vZHVsZVNsdWciLCJvcHRpb25WYWx1ZSIsIm9wdGlvblN0YXR1cyIsImdldFVybFBhcmFtIiwicGFyYW0iLCJxdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic3Vic3RyaW5nIiwib3B0aW9uIiwibW9kdWxlIiwibW9kZWwiLCJzYXZlIiwiaXNWYWxpZCIsInJvdXRlIiwic2ltcGxlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9wdGlvbnNBcnJheSIsInBsdWdpbkFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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LHVEQUF1RCxTQUFTO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0NBQWtDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFPK0gsa0RBQUksQ0FBQ2xILFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQndFLElBQXBCLEdBQTJCLGlCQUE1QixFQUErQ3RGLElBQS9DLENBQVg7QUFDQSxDQUZNO0FBSUEsSUFBTStPLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUMvTyxJQUFELEVBQVU7QUFDbkMsU0FBTytILGtEQUFJLENBQUNsSCxRQUFRLENBQUNDLFVBQVQsQ0FBb0J3RSxJQUFwQixHQUEyQixvQkFBNUIsRUFBa0R0RixJQUFsRCxDQUFYO0FBQ0EsQ0FGTTtBQUlBLElBQU1xTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNvSixXQUFELEVBQWlCO0FBQzlDLFNBQU8xUCxrREFBSSxDQUFDbEgsUUFBUSxDQUFDQyxVQUFULENBQW9Cd0UsSUFBcEIsR0FBMkIsa0JBQTVCLEVBQWdEbVMsV0FBaEQsQ0FBWDtBQUNBLENBRk07QUFJQSxJQUFNakosYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDeE8sSUFBRCxFQUFVO0FBQ3RDLFNBQU8rSCxrREFBSSxDQUFDbEgsUUFBUSxDQUFDQyxVQUFULENBQW9Cd0UsSUFBcEIsR0FBMkIsaUJBQTVCLEVBQStDdEYsSUFBL0MsQ0FBWDtBQUNBLENBRk0sQzs7Ozs7Ozs7Ozs7QUNmUCx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiIuL2J1aWxkL2J1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIEZ1c2UuanMgdjUuMS4wIC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMCBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gYml0YXBTY29yZShcbiAgcGF0dGVybixcbiAgeyBlcnJvcnMgPSAwLCBjdXJyZW50TG9jYXRpb24gPSAwLCBleHBlY3RlZExvY2F0aW9uID0gMCwgZGlzdGFuY2UgPSAxMDAgfVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG4gIGNvbnN0IHByb3hpbWl0eSA9IE1hdGguYWJzKGV4cGVjdGVkTG9jYXRpb24gLSBjdXJyZW50TG9jYXRpb24pO1xuXG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3lcbiAgfVxuXG4gIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlXG59XG5cbmZ1bmN0aW9uIG1hdGNoZWRJbmRpY2VkKG1hdGNobWFzayA9IFtdLCBtaW5NYXRjaENoYXJMZW5ndGggPSAxKSB7XG4gIGxldCBtYXRjaGVkSW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBpIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRJbmRpY2VzXG59XG5cbmZ1bmN0aW9uIGJpdGFwU2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IDAsXG4gICAgZGlzdGFuY2UgPSAxMDAsXG4gICAgdGhyZXNob2xkID0gMC42LFxuICAgIGZpbmRBbGxNYXRjaGVzID0gZmFsc2UsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IGZhbHNlXG4gIH1cbikge1xuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIGNvbnN0IHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuICBjb25zdCBleHBlY3RlZExvY2F0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9jYXRpb24sIHRleHRMZW4pKTtcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcbiAgbGV0IGJlc3RMb2NhdGlvbiA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBleHBlY3RlZExvY2F0aW9uKTtcblxuICAvLyBhIG1hc2sgb2YgdGhlIG1hdGNoZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dExlbjsgaSArPSAxKSB7XG4gICAgbWF0Y2hNYXNrW2ldID0gMDtcbiAgfVxuXG4gIGlmIChiZXN0TG9jYXRpb24gIT09IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IDAsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGJlc3RMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZVxuICAgIH0pO1xuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG5cbiAgICAvLyBXaGF0IGFib3V0IGluIHRoZSBvdGhlciBkaXJlY3Rpb24/IChzcGVlZCB1cClcbiAgICBiZXN0TG9jYXRpb24gPSB0ZXh0Lmxhc3RJbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24gKyBwYXR0ZXJuTGVuKTtcblxuICAgIGlmIChiZXN0TG9jYXRpb24gIT09IC0xKSB7XG4gICAgICBsZXQgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiAwLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGJlc3RMb2NhdGlvbixcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2VcbiAgICAgIH0pO1xuICAgICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiA8PSAzMSA/IHBhdHRlcm5MZW4gLSAxIDogMzApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgbGV0IGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzXG4gICAgICA/IHRleHRMZW5cbiAgICAgIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgaSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDE7XG4gICAgICBsZXQgY2hhck1hdGNoID0gcGF0dGVybkFscGhhYmV0W3RleHQuY2hhckF0KGN1cnJlbnRMb2NhdGlvbildO1xuXG4gICAgICBpZiAoY2hhck1hdGNoKSB7XG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGJpdEFycltqXSB8PVxuICAgICAgICAgICgobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxKSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KTtcblxuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogIWZpbmFsU2NvcmUgPyAwLjAwMSA6IGZpbmFsU2NvcmVcbiAgfTtcblxuICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICByZXN1bHQubWF0Y2hlZEluZGljZXMgPSBtYXRjaGVkSW5kaWNlZChtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG4gIGxldCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gPSAwO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldIHw9IDEgPDwgKGxlbiAtIGkgLSAxKTtcbiAgfVxuXG4gIHJldHVybiBtYXNrXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgICAgIGxvY2F0aW9uID0gMCxcbiAgICAgIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgICAgIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAgICAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gICAgICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgICAgIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICAgICAgZGlzdGFuY2UgPSAxMDAsXG4gICAgICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgICAgIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gICAgICB0aHJlc2hvbGQgPSAwLjYsXG4gICAgICAvLyBJbmRpY2F0ZXMgd2hldGhlciBjb21wYXJpc29ucyBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmUuXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBmYWxzZSxcbiAgICAgIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gICAgICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gZmFsc2UsXG4gICAgICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEsXG5cbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gZmFsc2VcbiAgICB9XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoXG4gICAgfTtcblxuICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7TUFYX0JJVFN9LmApXG4gICAgfVxuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnBhdHRlcm5BbHBoYWJldCA9IHBhdHRlcm5BbHBoYWJldCh0aGlzLnBhdHRlcm4pO1xuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoSW5TdHJpbmcodGV4dClcbiAgfVxuXG4gIHNlYXJjaEluU3RyaW5nKHRleHQpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSwgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICByZXN1bHQubWF0Y2hlZEluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gYml0YXBTZWFyY2godGV4dCwgdGhpcy5wYXR0ZXJuLCB0aGlzLnBhdHRlcm5BbHBoYWJldCwge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaW5jbHVkZU1hdGNoZXNcbiAgICB9KVxuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuLy8gTWF0Y2ggdHlwZTogZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGluY2x1ZGUgYGZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSBcIidcIjtcblxuY29uc3Qgc2FuaXRpemUgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplKHBhdHRlcm4pO1xuICBjb25zdCBpbmRleCA9IHRleHQuaW5kZXhPZihzYW5pdGl6ZWRQYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IGluZGV4ID4gLTE7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBleGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufTtcblxuLy8gVG9rZW46ICFmaXJlXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgZmlyZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDEgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnO1xuXG5jb25zdCBzYW5pdGl6ZSQxID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCQxID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDEocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmluZGV4T2Yoc2FuaXRpemVkUGF0dGVybikgPT09IC0xO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZUV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDEsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQxLFxuICBtYXRjaDogbWF0Y2gkMVxufTtcblxuLy8gVG9rZW46IF5maWxlXG4vLyBNYXRjaCB0eXBlOiBwcmVmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQyID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09ICdeJztcblxuY29uc3Qgc2FuaXRpemUkMiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2gkMiA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQyKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5zdGFydHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgcHJlZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMixcbiAgc2FuaXRpemU6IHNhbml0aXplJDIsXG4gIG1hdGNoOiBtYXRjaCQyXG59O1xuXG4vLyBUb2tlbjogIV5maXJlXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGZpcmVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQzID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uY2hhckF0KDApID09ICchJyAmJiBwYXR0ZXJuLmNoYXJBdCgxKSA9PSAnXic7XG5cbmNvbnN0IHNhbml0aXplJDMgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMik7XG5cbmNvbnN0IG1hdGNoJDMgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMyhwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LnN0YXJ0c1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlUHJlZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMyxcbiAgc2FuaXRpemU6IHNhbml0aXplJDMsXG4gIG1hdGNoOiBtYXRjaCQzXG59O1xuXG4vLyBUb2tlbjogLmZpbGUkXG4vLyBNYXRjaCB0eXBlOiBzdWZmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDQgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQocGF0dGVybi5sZW5ndGggLSAxKSA9PSAnJCc7XG5cbmNvbnN0IHNhbml0aXplJDQgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMCwgcGF0dGVybi5sZW5ndGggLSAxKTtcblxuY29uc3QgbWF0Y2gkNCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQ0KHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5lbmRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIHN1ZmZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDQsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQ0LFxuICBtYXRjaDogbWF0Y2gkNFxufTtcblxuLy8gVG9rZW46ICEuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kNSA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnIScgJiYgcGF0dGVybi5jaGFyQXQocGF0dGVybi5sZW5ndGggLSAxKSA9PSAnJCc7XG5cbmNvbnN0IHNhbml0aXplJDUgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHJpbmcoMSwgcGF0dGVybi5sZW5ndGggLSAxKTtcblxuY29uc3QgbWF0Y2gkNSA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQ1KHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlU3VmZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kNSxcbiAgc2FuaXRpemU6IHNhbml0aXplJDUsXG4gIG1hdGNoOiBtYXRjaCQ1XG59O1xuXG5jb25zdCBJTkZJTklUWSA9IDEgLyAwO1xuXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PlxuICAhQXJyYXkuaXNBcnJheVxuICAgID8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbi8vIEFkYXB0ZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvZjRjYTM5NmE3OTY0MzU0MjJiZDRmZDQxZmFkYmQyMjVlZGRkZjE3NS8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBiYXNlVG9TdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufTtcblxuY29uc3QgdG9TdHJpbmcgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpKTtcblxuY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG5cbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuXG5jb25zdCBpc0RlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG5cbi8vIFJldHVybiBhIDJEIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeSwgZm9yIHNpbXBsZXIgcGFyc2luZy5cbi8vIEV4YW1wbGU6XG4vLyBcIl5jb3JlIGdvJCB8IHJiJCB8IHB5JCB4eSRcIiA9PiBbW1wiXmNvcmVcIiwgXCJnbyRcIl0sIFtcInJiJFwiXSwgW1wicHkkXCIsIFwieHkkXCJdXVxuY29uc3QgcXVlcnlmeSA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLnNwbGl0KCd8JykubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKS5zcGxpdCgvICsvZykpO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IG1hdGNoIGBqc2NyaXB0YCAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBBIDxwYXR0ZXJuPjo8Qml0YXBTZWFyY2g+IGtleS12YWx1ZSBwYWlyIGZvciBvcHRpbWl6aW5nIHNlYXJjaGluZ1xuICAgIHRoaXMuX2Z1enp5Q2FjaGUgPSB7fTtcblxuICAgIGlmIChpc1N0cmluZyhwYXR0ZXJuKSAmJiBwYXR0ZXJuLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5ZnkodGhpcy5wYXR0ZXJuKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcblxuICAgIGlmICghdGhpcy5xdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuXG4gICAgdGV4dCA9IHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG1hdGNoRm91bmQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHF1ZXJ5W2ldO1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBtYXRjaEZvdW5kID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBwYXJ0cy5sZW5ndGg7IGogPCBwTGVuOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IHRva2VuID0gcGFydHNbal07XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX3NlYXJjaCh0b2tlbiwgdGV4dCk7XG4gICAgICAgIGlmICghcmVzdWx0LmlzTWF0Y2gpIHtcbiAgICAgICAgICAvLyBBTkQgY29uZGl0aW9uLCBzaG9ydC1jaXJjdWl0IGFuZCBtb3ZlIG9uIHRvIG5leHQgcGFydFxuICAgICAgICAgIG1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobWF0Y2hGb3VuZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfVxuICB9XG5cbiAgX3NlYXJjaChwYXR0ZXJuLCB0ZXh0KSB7XG4gICAgaWYgKGV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gZXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAocHJlZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwcmVmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlUHJlZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlUHJlZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKHN1ZmZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gc3VmZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZUV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZUV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNlYXJjaGVyID0gdGhpcy5fZnV6enlDYWNoZVtwYXR0ZXJuXTtcbiAgICAgIGlmICghc2VhcmNoZXIpIHtcbiAgICAgICAgc2VhcmNoZXIgPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZnV6enlDYWNoZVtwYXR0ZXJuXSA9IHNlYXJjaGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlYXJjaGVyLnNlYXJjaEluU3RyaW5nKHRleHQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IE5HUkFNX0xFTiA9IDM7XG5cbmZ1bmN0aW9uIG5ncmFtKFxuICB0ZXh0LFxuICB7IG4gPSBOR1JBTV9MRU4sIHBhZCA9IHRydWUsIHNvcnQgPSBmYWxzZSB9XG4pIHtcbiAgbGV0IG5HcmFtcyA9IFtdO1xuXG4gIGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuR3JhbXNcbiAgfVxuXG4gIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gIGlmIChwYWQpIHtcbiAgICB0ZXh0ID0gYCAke3RleHR9IGA7XG4gIH1cblxuICBsZXQgaW5kZXggPSB0ZXh0Lmxlbmd0aCAtIG4gKyAxO1xuICBpZiAoaW5kZXggPCAxKSB7XG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBuR3JhbXNbaW5kZXhdID0gdGV4dC5zdWJzdHIoaW5kZXgsIG4pO1xuICB9XG5cbiAgaWYgKHNvcnQpIHtcbiAgICBuR3JhbXMuc29ydCgoYSwgYikgPT4gKGEgPT0gYiA/IDAgOiBhIDwgYiA/IC0xIDogMSkpO1xuICB9XG5cbiAgcmV0dXJuIG5HcmFtc1xufVxuXG4vLyBBc3N1bWVzIGFycmF5cyBhcmUgc29ydGVkXG5mdW5jdGlvbiB1bmlvbiAoYXJyMSwgYXJyMikge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXTtcbiAgICBsZXQgaXRlbTIgPSBhcnIyW2pdO1xuXG4gICAgaWYgKGl0ZW0xIDwgaXRlbTIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0xKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0yIDwgaXRlbTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0yKTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnIxW2ldKTtcbiAgICBpICs9IDE7XG4gIH1cblxuICB3aGlsZSAoaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goYXJyMltqXSk7XG4gICAgaiArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBBc3N1bWVzIGFycmF5cyBhcmUgc29ydGVkXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb24oYXJyMSwgYXJyMikge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXTtcbiAgICBsZXQgaXRlbTIgPSBhcnIyW2pdO1xuXG4gICAgaWYgKGl0ZW0xID09IGl0ZW0yKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMSk7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMSA8IGl0ZW0yKSB7XG4gICAgICBpICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMSA+IGl0ZW0yKSB7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGphY2NhcmREaXN0YW5jZShuR3JhbTEsIG5HcmFtMikge1xuICBsZXQgbkdyYW1VbmlvbiA9IHVuaW9uKG5HcmFtMSwgbkdyYW0yKTtcbiAgbGV0IG5HcmFtSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uKG5HcmFtMSwgbkdyYW0yKTtcblxuICByZXR1cm4gMSAtIG5HcmFtSW50ZXJzZWN0aW9uLmxlbmd0aCAvIG5HcmFtVW5pb24ubGVuZ3RoXG59XG5cbmNsYXNzIE5HcmFtU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiAwLjYgfSkge1xuICAgIC8vIENyZWF0ZSB0aGUgbmdyYW0sIGFuZCBzb3J0IGl0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnBhdHRlcm5OZ3JhbSA9IG5ncmFtKHBhdHRlcm4sIHsgc29ydDogdHJ1ZSB9KTtcbiAgfVxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGxldCB0ZXh0TmdyYW0gPSB2YWx1ZS5uZztcbiAgICBpZiAoIXRleHROZ3JhbSkge1xuICAgICAgdGV4dE5ncmFtID0gbmdyYW0odmFsdWUuJCwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgdmFsdWUubmcgPSB0ZXh0TmdyYW07XG4gICAgfVxuXG4gICAgbGV0IGphY2FyZFJlc3VsdCA9IGphY2NhcmREaXN0YW5jZSh0aGlzLnBhdHRlcm5OZ3JhbSwgdGV4dE5ncmFtKTtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBqYWNhcmRSZXN1bHQgPCB0aGlzLm9wdGlvbnMudGhyZXNob2xkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gamFjYXJkUmVzdWx0IDogMSxcbiAgICAgIGlzTWF0Y2hcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG5cbiAgY29uc3QgX2dldCA9IChvYmosIHBhdGgpID0+IHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBnb3R0ZW4gdG8gdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvdEluZGV4ID0gcGF0aC5pbmRleE9mKCcuJyk7XG5cbiAgICAgIGxldCBrZXkgPSBwYXRoO1xuICAgICAgbGV0IHJlbWFpbmluZyA9IG51bGw7XG5cbiAgICAgIGlmIChkb3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAga2V5ID0gcGF0aC5zbGljZSgwLCBkb3RJbmRleCk7XG4gICAgICAgIHJlbWFpbmluZyA9IHBhdGguc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCFyZW1haW5pbmcgJiYgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBhcnIgPSB0cnVlO1xuICAgICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgX2dldCh2YWx1ZVtpXSwgcmVtYWluaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVtYWluaW5nKSB7XG4gICAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgICAgX2dldCh2YWx1ZSwgcmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfZ2V0KG9iaiwgcGF0aCk7XG5cbiAgaWYgKGFycikge1xuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICByZXR1cm4gbGlzdFswXVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChcbiAga2V5cyxcbiAgbGlzdCxcbiAgeyBnZXRGbiA9IGdldCwgbmdyYW1zID0gZmFsc2UgfSA9IHt9XG4pIHtcbiAgbGV0IGluZGV4ZWRMaXN0ID0gW107XG5cbiAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gIGlmIChpc1N0cmluZyhsaXN0WzBdKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAvLyAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY29yZCA9IHtcbiAgICAgICAgICAkOiB2YWx1ZSxcbiAgICAgICAgICBpZHg6IGlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgcmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ZWRMaXN0LnB1c2gocmVjb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgY29uc3Qga2V5c0xlbiA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGxldCBpdGVtID0gbGlzdFtpXTtcblxuICAgICAgbGV0IHJlY29yZCA9IHsgaWR4OiBpLCAkOiB7fSB9O1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXNMZW47IGogKz0gMSkge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0Rm4oaXRlbSwga2V5KTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgICBjb25zdCBzdGFjayA9IFt7IGFycmF5SW5kZXg6IC0xLCB2YWx1ZSB9XTtcblxuICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXJyYXlJbmRleCwgdmFsdWUgfSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgICAvLyAgIHYgPSB2LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7ICQ6IHZhbHVlLCBpZHg6IGFycmF5SW5kZXggfTtcblxuICAgICAgICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgICAgICAgc3ViUmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXJyTGVuID0gdmFsdWUubGVuZ3RoOyBrIDwgYXJyTGVuOyBrICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGFycmF5SW5kZXg6IGssXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVba11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWNvcmQuJFtrZXldID0gc3ViUmVjb3JkcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgIC8vICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUgfTtcblxuICAgICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICAgIHN1YlJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVjb3JkLiRba2V5XSA9IHN1YlJlY29yZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4ZWRMaXN0XG59XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICB0aGlzLl9rZXlOYW1lcyA9IFtdO1xuICAgIHRoaXMuX2xlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleVxuICAgIGlmIChrZXlzLmxlbmd0aCAmJiBpc1N0cmluZyhrZXlzWzBdKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB0aGlzLl9rZXlzW2tleV0gPSB7XG4gICAgICAgICAgd2VpZ2h0OiAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2tleU5hbWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcIm5hbWVcIiBwcm9wZXJ0eSBpbiBrZXkgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleU5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXlOYW1lKTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrZXksICd3ZWlnaHQnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcIndlaWdodFwiIHByb3BlcnR5IGluIGtleSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5LndlaWdodDtcblxuICAgICAgICBpZiAod2VpZ2h0IDw9IDAgfHwgd2VpZ2h0ID49IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnXCJ3ZWlnaHRcIiBwcm9wZXJ0eSBpbiBrZXkgbXVzdCBiZSBpbiB0aGUgcmFuZ2Ugb2YgKDAsIDEpJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tleXNba2V5TmFtZV0gPSB7XG4gICAgICAgICAgd2VpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgdG90YWxXZWlnaHQgKz0gd2VpZ2h0O1xuICAgICAgfVxuXG4gICAgICAvLyBOb3JtYWxpemUgd2VpZ2h0cyBzbyB0aGF0IHRoZWlyIHN1bSBpcyBlcXVhbCB0byAxXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleU5hbWUgPSB0aGlzLl9rZXlOYW1lc1tpXTtcbiAgICAgICAgY29uc3Qga2V5V2VpZ2h0ID0gdGhpcy5fa2V5c1trZXlOYW1lXS53ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2tleXNba2V5TmFtZV0ud2VpZ2h0ID0ga2V5V2VpZ2h0IC8gdG90YWxXZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldChrZXksIG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldID8gdGhpcy5fa2V5c1trZXldW25hbWVdIDogLTFcbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lc1xuICB9XG4gIGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGhcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWF0Y2hlcyhyZXN1bHQsIGRhdGEpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICBkYXRhLm1hdGNoZXMgPSBbXTtcblxuICBpZiAoIWlzRGVmaW5lZChtYXRjaGVzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1hdGNoZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuXG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgbWF0Y2guaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXM6IG1hdGNoLmluZGljZXMsXG4gICAgICB2YWx1ZTogbWF0Y2gudmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgc2VhcmNoZWQuIFRoaXMgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcy5cbiAga2V5czogW10sXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvblxuICBzb3J0Rm46IChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZVxufTtcblxuY29uc3QgRnV6enlPcHRpb25zID0ge1xuICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICBsb2NhdGlvbjogMCxcbiAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gIHRocmVzaG9sZDogMC42LFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwXG59O1xuXG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIEVuYWJsZWQgZXh0ZW5kZWQtc2VhcmNoaW5nXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gVGhlIGdldCBmdW5jdGlvbiB0byB1c2Ugd2hlbiBmZXRjaGluZyBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICBnZXRGbjogZ2V0XG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufTtcblxuY2xhc3MgRnVzZSB7XG4gIGNvbnN0cnVjdG9yKGxpc3QsIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucywgaW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIC8vIGBjYXNlU2Vuc2l0aXZlYCBpcyBkZXByZWNhdGVkLCB1c2UgYGlzQ2FzZVNlbnNpdGl2ZWAgaW5zdGVhZFxuICAgIHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUgPSBvcHRpb25zLmNhc2VTZW5zaXRpdmU7XG4gICAgZGVsZXRlIHRoaXMub3B0aW9ucy5jYXNlU2Vuc2l0aXZlO1xuXG4gICAgdGhpcy5fcHJvY2Vzc0tleXModGhpcy5vcHRpb25zLmtleXMpO1xuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihsaXN0LCBpbmRleCk7XG4gIH1cblxuICBzZXRDb2xsZWN0aW9uKGxpc3QsIGluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5saXN0SXNTdHJpbmdBcnJheSA9IGlzU3RyaW5nKGxpc3RbMF0pO1xuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLl9jcmVhdGVJbmRleCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleChsaXN0SW5kZXgpIHtcbiAgICB0aGlzLl9pbmRleGVkTGlzdCA9IGxpc3RJbmRleDtcbiAgfVxuXG4gIF9wcm9jZXNzS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUoa2V5cyk7XG4gIH1cblxuICBfY3JlYXRlSW5kZXgoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluZGV4KHRoaXMuX2tleVN0b3JlLmtleXMoKSwgdGhpcy5saXN0LCB7XG4gICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuXG4gICAgfSlcbiAgfVxuXG4gIHNlYXJjaChwYXR0ZXJuLCBvcHRzID0geyBsaW1pdDogZmFsc2UgfSkge1xuICAgIGNvbnN0IHsgdXNlRXh0ZW5kZWRTZWFyY2gsIHNob3VsZFNvcnQgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBzZWFyY2hlciA9IG51bGw7XG5cbiAgICBpZiAodXNlRXh0ZW5kZWRTZWFyY2gpIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IEV4dGVuZGVkU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBOR3JhbVNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gdGhpcy5fc2VhcmNoVXNpbmcoc2VhcmNoZXIpO1xuXG4gICAgdGhpcy5fY29tcHV0ZVNjb3JlKHJlc3VsdHMpO1xuXG4gICAgaWYgKHNob3VsZFNvcnQpIHtcbiAgICAgIHRoaXMuX3NvcnQocmVzdWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubGltaXQgJiYgaXNOdW1iZXIob3B0cy5saW1pdCkpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG9wdHMubGltaXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQocmVzdWx0cylcbiAgfVxuXG4gIF9zZWFyY2hVc2luZyhzZWFyY2hlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLl9pbmRleGVkTGlzdDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKHRoaXMubGlzdElzU3RyaW5nQXJyYXkpIHtcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGxpc3RcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3RbaV07XG4gICAgICAgIGxldCB7ICQ6IHRleHQsIGlkeCB9ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKHZhbHVlKTtcblxuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIHZhbHVlOiB0ZXh0IH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW21hdGNoXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICBjb25zdCBrZXlOYW1lcyA9IHRoaXMuX2tleVN0b3JlLmtleXMoKTtcbiAgICAgIGNvbnN0IGtleXNMZW4gPSB0aGlzLl9rZXlTdG9yZS5jb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsZXQgeyAkOiBpdGVtLCBpZHggfSA9IGxpc3RbaV07XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGtleU5hbWVzW2pdO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW1ba2V5XTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGsgPCBsZW47IGsgKz0gMSkge1xuICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IHZhbHVlW2tdO1xuICAgICAgICAgICAgICBsZXQgdGV4dCA9IGFyckl0ZW0uJDtcbiAgICAgICAgICAgICAgbGV0IGlkeCA9IGFyckl0ZW0uaWR4O1xuXG4gICAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbihhcnJJdGVtKTtcblxuICAgICAgICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIGlkeCB9O1xuXG4gICAgICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG4gICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4odmFsdWUpO1xuXG4gICAgICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0IH07XG5cbiAgICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9jb21wdXRlU2NvcmUocmVzdWx0cykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICAgICAgY29uc3Qgc2NvcmVMZW4gPSBtYXRjaGVzLmxlbmd0aDtcblxuICAgICAgbGV0IHRvdGFsV2VpZ2h0ZWRTY29yZSA9IDE7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2NvcmVMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBpdGVtID0gbWF0Y2hlc1tqXTtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICAgIGNvbnN0IGtleVdlaWdodCA9IHRoaXMuX2tleVN0b3JlLmdldChrZXksICd3ZWlnaHQnKTtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5V2VpZ2h0ID4gLTEgPyBrZXlXZWlnaHQgOiAxO1xuICAgICAgICBjb25zdCBzY29yZSA9XG4gICAgICAgICAgaXRlbS5zY29yZSA9PT0gMCAmJiBrZXlXZWlnaHQgPiAtMSA/IE51bWJlci5FUFNJTE9OIDogaXRlbS5zY29yZTtcblxuICAgICAgICB0b3RhbFdlaWdodGVkU2NvcmUgKj0gTWF0aC5wb3coc2NvcmUsIHdlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsV2VpZ2h0ZWRTY29yZTtcbiAgICB9XG4gIH1cblxuICBfc29ydChyZXN1bHRzKSB7XG4gICAgcmVzdWx0cy5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pO1xuICB9XG5cbiAgX2Zvcm1hdChyZXN1bHRzKSB7XG4gICAgY29uc3QgZmluYWxPdXRwdXQgPSBbXTtcblxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMsIGluY2x1ZGVTY29yZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgICBpZiAoaW5jbHVkZVNjb3JlKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1TY29yZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGl0ZW06IHRoaXMubGlzdFtpZHhdLFxuICAgICAgICByZWZJbmRleDogaWR4XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdHJhbnNmb3JtZXJzLmxlbmd0aDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXJzW2pdKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmluYWxPdXRwdXQucHVzaChkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxPdXRwdXRcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNS4xLjAnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBGdXNlO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChmYWxzZSkgeyB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcywgUmVhY3RJczsgfSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSkoKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRlbGwgd2hldGhlciB0aGUgcmVjdCBpcyB2aXNpYmxlLCBnaXZlbiBhbiBvZmZzZXRcbi8vXG4vLyByZXR1cm46IGJvb2xlYW5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KSB7XG4gIHZhciBvZmZzZXREaXIgPSBvZmZzZXQuZGlyZWN0aW9uO1xuICB2YXIgb2Zmc2V0VmFsID0gb2Zmc2V0LnZhbHVlOyAvLyBSdWxlcyBmb3IgY2hlY2tpbmcgZGlmZmVyZW50IGtpbmQgb2Ygb2Zmc2V0cy4gSW4gZXhhbXBsZSBpZiB0aGUgZWxlbWVudCBpc1xuICAvLyA5MHB4IGJlbG93IHZpZXdwb3J0IGFuZCBvZmZzZXRUb3AgaXMgMTAwLCBpdCBpcyBjb25zaWRlcmVkIHZpc2libGUuXG5cbiAgc3dpdGNoIChvZmZzZXREaXIpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC50b3AgKyBvZmZzZXRWYWwgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICsgb2Zmc2V0VmFsIDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIG9mZnNldFZhbCA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wO1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtIG9mZnNldFZhbCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBWaXNpYmlsaXR5U2Vuc29yOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjdChyZWN0KSB7XG4gIGlmIChyZWN0LndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChyZWN0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbnZhciBWaXNpYmlsaXR5U2Vuc29yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaXNpYmlsaXR5U2Vuc29yLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXNpYmlsaXR5U2Vuc29yKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTZW5zb3IpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVmlzaWJpbGl0eVNlbnNvcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuY29udGFpbm1lbnQgfHwgd2luZG93O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIGRlbGF5LCB0aHJvdHRsZSkge1xuICAgICAgaWYgKCFfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICB2YXIgZnVuYztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLmNoZWNrKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhyb3R0bGUgPiAtMSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB0aHJvdHRsZSB8fCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIGRlbGF5IHx8IDApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGZuOiBmdW5jLFxuICAgICAgICBnZXRMYXN0VGltZW91dDogZnVuY3Rpb24gZ2V0TGFzdFRpbWVvdXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaW5mby5mbik7XG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2V2ZW50XSA9IGluZm87XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjayB8fCBfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbnRlcnZhbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoX3RoaXMuY2hlY2ssIF90aGlzLnByb3BzLmludGVydmFsRGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihfdGhpcy5nZXRDb250YWluZXIoKSwgXCJzY3JvbGxcIiwgX3RoaXMucHJvcHMuc2Nyb2xsRGVsYXksIF90aGlzLnByb3BzLnNjcm9sbFRocm90dGxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnJlc2l6ZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBfdGhpcy5wcm9wcy5yZXNpemVEZWxheSwgX3RoaXMucHJvcHMucmVzaXplVGhyb3R0bGUpO1xuICAgICAgfSAvLyBpZiBkb250IG5lZWQgZGVsYXllZCBjYWxsLCBjaGVjayBvbiBsb2FkICggYmVmb3JlIHRoZSBmaXJzdCBpbnRlcnZhbCBmaXJlcyApXG5cblxuICAgICAgIV90aGlzLnByb3BzLmRlbGF5ZWRDYWxsICYmIF90aGlzLmNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgZGVib3VuY2UgY2FsbGVyc1xuICAgICAgICBmb3IgKHZhciBkZWJvdW5jZUV2ZW50IGluIF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjay5oYXNPd25Qcm9wZXJ0eShkZWJvdW5jZUV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGRlYm91bmNlSW5mbyA9IF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VJbmZvLmdldExhc3RUaW1lb3V0KCkpO1xuICAgICAgICAgICAgZGVib3VuY2VJbmZvLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGRlYm91bmNlRXZlbnQsIGRlYm91bmNlSW5mby5mbik7XG4gICAgICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IG51bGw7XG5cbiAgICAgIGlmIChfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoX3RoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLm5vZGU7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciBjb250YWlubWVudFJlY3Q7IC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIHJlbmRlcmVkIHRvIG51bGwsIGRvbnQgdXBkYXRlIHZpc2liaWxpdHlcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJlY3QgPSBub3JtYWxpemVSZWN0KF90aGlzLnJvdW5kUmVjdERvd24oZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIHZhciBjb250YWlubWVudERPTVJlY3QgPSBfdGhpcy5wcm9wcy5jb250YWlubWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiBjb250YWlubWVudERPTVJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IGNvbnRhaW5tZW50RE9NUmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbTogY29udGFpbm1lbnRET01SZWN0LmJvdHRvbSxcbiAgICAgICAgICByaWdodDogY29udGFpbm1lbnRET01SZWN0LnJpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9IC8vIENoZWNrIGlmIHZpc2liaWxpdHkgaXMgd2FudGVkIHZpYSBvZmZzZXQ/XG5cblxuICAgICAgdmFyIG9mZnNldCA9IF90aGlzLnByb3BzLm9mZnNldCB8fCB7fTtcbiAgICAgIHZhciBoYXNWYWxpZE9mZnNldCA9IF90eXBlb2Yob2Zmc2V0KSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgaWYgKGhhc1ZhbGlkT2Zmc2V0KSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC50b3AgKz0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QubGVmdCArPSBvZmZzZXQubGVmdCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QuYm90dG9tIC09IG9mZnNldC5ib3R0b20gfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnJpZ2h0IC09IG9mZnNldC5yaWdodCB8fCAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaWJpbGl0eVJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgPj0gY29udGFpbm1lbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20sXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodFxuICAgICAgfTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3bmovcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvcHVsbC8xMTRcblxuICAgICAgdmFyIGhhc1NpemUgPSByZWN0LmhlaWdodCA+IDAgJiYgcmVjdC53aWR0aCA+IDA7XG4gICAgICB2YXIgaXNWaXNpYmxlID0gaGFzU2l6ZSAmJiB2aXNpYmlsaXR5UmVjdC50b3AgJiYgdmlzaWJpbGl0eVJlY3QubGVmdCAmJiB2aXNpYmlsaXR5UmVjdC5ib3R0b20gJiYgdmlzaWJpbGl0eVJlY3QucmlnaHQ7IC8vIGNoZWNrIGZvciBwYXJ0aWFsIHZpc2liaWxpdHlcblxuICAgICAgaWYgKGhhc1NpemUgJiYgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxWaXNpYmxlID0gcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+PSBjb250YWlubWVudFJlY3QudG9wICYmIHJlY3QubGVmdCA8PSBjb250YWlubWVudFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+PSBjb250YWlubWVudFJlY3QubGVmdDsgLy8gYWNjb3VudCBmb3IgcGFydGlhbCB2aXNpYmlsaXR5IG9uIGEgc2luZ2xlIGVkZ2VcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcGFydGlhbFZpc2libGUgPSB2aXNpYmlsaXR5UmVjdFtfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eV07XG4gICAgICAgIH0gLy8gaWYgd2UgaGF2ZSBtaW5pbXVtIHRvcCB2aXNpYmlsaXR5IHNldCBieSBwcm9wcywgbGV0cyBjaGVjaywgaWYgaXQgbWVldHMgdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAvLyBzbyBpZiBmb3IgaW5zdGFuY2UgZWxlbWVudCBpcyBhdCBsZWFzdCAyMDBweCBpbiB2aWV3cG9ydCwgdGhlbiBzaG93IGl0LlxuXG5cbiAgICAgICAgaXNWaXNpYmxlID0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgPyBwYXJ0aWFsVmlzaWJsZSAmJiByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tIC0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgOiBwYXJ0aWFsVmlzaWJsZTtcbiAgICAgIH0gLy8gRGVwcmVjYXRlZCBvcHRpb25zIGZvciBjYWxjdWxhdGluZyBvZmZzZXQuXG5cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQuZGlyZWN0aW9uID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvZmZzZXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW25vdGljZV0gb2Zmc2V0LmRpcmVjdGlvbiBhbmQgb2Zmc2V0LnZhbHVlIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBUaGV5IHN0aWxsIHdvcmsgZm9yIG5vdywgYnV0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBuZXcgc3ludGF4OiB7ICVzOiAlZCB9XCIsIG9mZnNldC5kaXJlY3Rpb24sIG9mZnNldC52YWx1ZSk7XG4gICAgICAgIGlzVmlzaWJsZSA9IF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKShvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlOyAvLyBub3RpZnkgdGhlIHBhcmVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSBfdGhpcy5wcm9wcy5vbkNoYW5nZShpc1Zpc2libGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTZW5zb3IsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIC8vIHJlLXJlZ2lzdGVyIG5vZGUgaW4gY29tcG9uZW50RGlkVXBkYXRlIGlmIGNoaWxkcmVuIGRpZmZzIFsjMTAzXVxuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgIXByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3VuZFJlY3REb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kUmVjdERvd24ocmVjdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLmZsb29yKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5mbG9vcihyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5mbG9vcihyZWN0LnJpZ2h0KVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdGhpcy5zdGF0ZS52aXNpYmlsaXR5UmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7XG59KHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcGFydGlhbFZpc2liaWxpdHk6IGZhbHNlLFxuICBtaW5Ub3BWYWx1ZTogMCxcbiAgc2Nyb2xsQ2hlY2s6IGZhbHNlLFxuICBzY3JvbGxEZWxheTogMjUwLFxuICBzY3JvbGxUaHJvdHRsZTogLTEsXG4gIHJlc2l6ZUNoZWNrOiBmYWxzZSxcbiAgcmVzaXplRGVsYXk6IDI1MCxcbiAgcmVzaXplVGhyb3R0bGU6IC0xLFxuICBpbnRlcnZhbENoZWNrOiB0cnVlLFxuICBpbnRlcnZhbERlbGF5OiAxMDAsXG4gIGRlbGF5ZWRDYWxsOiBmYWxzZSxcbiAgb2Zmc2V0OiB7fSxcbiAgY29udGFpbm1lbnQ6IG51bGwsXG4gIGNoaWxkcmVuOiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcInByb3BUeXBlc1wiLCB7XG4gIG9uQ2hhbmdlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmMsXG4gIGFjdGl2ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pXSksXG4gIGRlbGF5ZWRDYWxsOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIG9mZnNldDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIHRvcDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgbGVmdDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgYm90dG9tOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICByaWdodDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSksIC8vIGRlcHJlY2F0ZWQgb2Zmc2V0IHByb3BlcnR5XG4gIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIGRpcmVjdGlvbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAgIHZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KV0pLFxuICBzY3JvbGxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBzY3JvbGxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHNjcm9sbFRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcmVzaXplRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGludGVydmFsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGNvbnRhaW5tZW50OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5pbnN0YW5jZU9mKHdpbmRvdy5FbGVtZW50KSA6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYW55LFxuICBjaGlsZHJlbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZWxlbWVudCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jXSksXG4gIG1pblRvcFZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxufSk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWNjb3JkaW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtpc09wZW4sIHRpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShpc09wZW4pO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICdhY2NvcmRpb24nLCB7J29wZW4nOiBvcGVuLCAnY2xvc2VkJzogISBvcGVuIH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtvcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0T3BlbighIG9wZW4pfVxuXHRcdFx0PlxuXHRcdFx0XHRcdHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPnt0aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0PERhc2hpY29uXG5cdFx0XHRcdFx0XHRpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiBvcGVuID8gJ2F1dG8nIDogJzBweCd9fT5cblx0XHRcdFx0e2NoaWxkcmVuICYmIGNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBUYWJzQ29udGVudCBmcm9tICcuL1RhYnNDb250ZW50JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4vU25hY2tiYXInO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBcHAgPSAoe3NldFNldHRpbmdzLCB0b2FzdCwgY3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbaXNPbmJvYXJkaW5nLCBzZXRJc09uYm9hcmRpbmddID0gdXNlU3RhdGUobmV2ZURhc2gub25ib2FyZGluZy5vbmJvYXJkaW5nID09PSAneWVzJyk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHdwLmFwaS5sb2FkUHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHNldHRpbmdzID0gbmV3IHdwLmFwaS5tb2RlbHMuU2V0dGluZ3MoKTtcblx0XHRcdHNldHRpbmdzLmZldGNoKCkudGhlbihyID0+IHtcblx0XHRcdFx0c2V0U2V0dGluZ3Mocik7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sIFtdKTtcblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gPExvYWRpbmcvPjtcblx0fVxuXHRjb25zdCB3cmFwQ2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnY29udGVudC13cmFwJywge1xuXHRcdCdpcy1vbmJvYXJkaW5nJzogaXNPbmJvYXJkaW5nICYmICdzdGFydGVyLXNpdGVzJyA9PT0gY3VycmVudFRhYixcblx0XHQnc3RhcnRlci1zaXRlcyc6ICdzdGFydGVyLXNpdGVzJyA9PT0gY3VycmVudFRhYlxuXHR9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxIZWFkZXIgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt3cmFwQ2xhc3Nlc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8Tm90aWZpY2F0aW9ucy8+fVxuXHRcdFx0XHRcdFx0PFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e3RvYXN0ICYmIDxTbmFja2Jhci8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNldHRpbmdzLCBzZXRUYWJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNldHRpbmdzOiAob2JqZWN0KSA9PiBzZXRTZXR0aW5ncyhvYmplY3QpLFxuXHRcdFx0c2V0VGFiOiAodGFiKSA9PiBzZXRUYWIodGFiKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0VG9hc3QsIGdldFRhYn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiBnZXRUb2FzdCgpLFxuXHRcdFx0Y3VycmVudFRhYjogZ2V0VGFiKClcblx0XHR9O1xuXHR9KVxuKShBcHApO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENoYW5nZWxvZyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y2hhbmdlbG9nfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRjaGFuZ2Vsb2cubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPVxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD47XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbiBpc09wZW49ezAgPT09IGluZGV4fSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIHN1Y2Nlc3NcIj57X18oJ0ZlYXR1cmVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IDxsaT57ZmVhdHVyZX08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e2ZpeGVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnVncyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGVycm9yXCI+e19fKCdCdWcgRml4ZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZpeGVzLm1hcCgoZml4KSA9PiA8bGk+e2ZpeH08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e3R3ZWFrcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3ZWFrcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj57X18oJ1R3ZWFrcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHdlYWtzLm1hcCgodHdlYWspID0+IDxsaT57dHdlYWt9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlbG9nO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgRmVhdHVyZVJvdyBmcm9tICcuLi9GZWF0dXJlUm93JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7ZmVhdHVyZURhdGF9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjYXJkIHRhYmxlXCI+XG5cdFx0XHRcdDx0Ym9keSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkXCI+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImxhcmdlXCIvPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUnLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdHtmZWF0dXJlRGF0YS5tYXAoKGl0ZW0pID0+IDxGZWF0dXJlUm93IGl0ZW09e2l0ZW19Lz4pfVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHVwc2VsbFwiPlxuXHRcdFx0XHQ8cD57X18oJ0dldCBhY2Nlc3MgdG8gYWxsIFBybyBmZWF0dXJlcyBhbmQgcG93ZXItdXAgeW91ciB3ZWJzaXRlJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC51cGdyYWRlVVJMfVxuXHRcdFx0XHRcdGlzUHJpbWFyeT5cblx0XHRcdFx0XHR7X18oJ0dldCBOZXZlIFBybyBOb3cnLCAnbmV2ZScpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgSGVscCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2J1b3kuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXZSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIHVzaW5nIE5ldmUsIGFuZCB0aGF0IGlzIHdoeSB3ZSBoYXZlIGdhdGhlcmVkIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGhlcmUgZm9yIHlvdS4gV2UgaG9wZSB5b3Ugd2lsbCBlbmpveSB1c2luZyBOZXZlIGFzIG11Y2ggYXMgd2UgZW5qb3kgY3JlYXRpbmcgZ3JlYXQgcHJvZHVjdHMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93b3JkcHJlc3Mub3JnL3N1cHBvcnQvdGhlbWUvbmV2ZS8nXG4gICAgICAgICAgPntfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdsaXN0LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2FudCB0byBnZXQgdGhlIGdpc3Qgb24gdGhlIGxhdGVzdCB0aGVtZSBjaGFuZ2VzPyBKdXN0IGNvbnN1bHQgb3VyIGNoYW5nZWxvZyBiZWxvdyB0byBnZXQgYSB0YXN0ZSBvZiB0aGUgcmVjZW50IGZpeGVzIGFuZCBmZWF0dXJlcyBpbXBsZW1lbnRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuICAgICAgICAgID57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICd0YWNob21ldGVyLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS82My1zcGVlZC11cC15b3VyLXdvcmRwcmVzcy1zaXRlXCI+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0RvY3VtZW50YXRpb24nLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvOTQ2LW5ldmUtZG9jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Nsb25lLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDcmVhdGUgYSBjaGlsZCB0aGVtZScsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xNC1ob3ctdG8tY3JlYXRlLWEtY2hpbGQtdGhlbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYXJyb3dzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMjE5LWhvdy10by1idWlsZC1hLWxhbmRpbmctcGFnZS13aXRoLWEtZHJhZy1hbmQtZHJvcC1jb250ZW50LWJ1aWxkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7bW9kdWxlc30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhtb2R1bGVzKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb2R1bGVDYXJkIHNsdWc9e2lkfS8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05ldmUgbm93IGNvbWVzIHdpdGggYSBzaXRlcyBsaWJyYXJ5IHdpdGggdmFyaW91cyBkZXNpZ25zIHRvIHBpY2sgZnJvbS4gVmlzaXQgb3VyIGNvbGxlY3Rpb24gb2YgZGVtb3MgdGhhdCBhcmUgY29uc3RhbnRseSBiZWluZyBhZGRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRhYignc3RhcnRlci1zaXRlcycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+e19fKCdHbyB0byBTdGFydGVyIFNpdGVzJywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdHZXR0aW5nIFN0YXJ0ZWQ/IENoZWNrIGhlbHAgYW5kIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG4gICAgICAgICAgPntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDdXN0b21pemVyTGlua3MoKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cblxuY29uc3QgcmVuZGVyQ3VzdG9taXplckxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IG5ldmVEYXNoLmN1c3RvbWl6ZXJTaG9ydGN1dHM7XG4gIGNvbnN0IHNwbGl0ID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIDIpO1xuICBjb25zdCBwYXJ0cyA9IFsgbGlua3Muc2xpY2UoMCwgc3BsaXQpLCBsaW5rcy5zbGljZShzcGxpdCkgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIHtcbiAgICAgICAgcGFydHMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc0xpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS50ZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gY29sdW1uLmxlbmd0aCAtIDEgJiYgPGhyLz59XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9Mb2FkaW5nJztcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gJy4uL09uYm9hcmRpbmcvTWFpbic7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAoe3NpdGVzLCBzZXRTaXRlcywgc2V0VXBzZWxsc30pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc2l0ZXMpIHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbml0aWFsaXplX3NpdGVzX2xpYnJhcnknKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRzZXRFcnJvcih0cnVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB7cmVtb3RlLCB1cHNlbGx9ID0gci5kYXRhO1xuXHRcdFx0XHRcdHNldFNpdGVzKHJlbW90ZSk7XG5cdFx0XHRcdFx0c2V0VXBzZWxscyh1cHNlbGwpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRyZXR1cm4gPGgxPkVycm9yLjwvaDE+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHRsb2FkaW5nID8gPExvYWRpbmcvPiA6IDxPbmJvYXJkaW5nLz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2l0ZXMsIHNldFVwc2VsbHN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlczogKHNpdGVzKSA9PiBzZXRTaXRlcyhzaXRlcyksXG5cdFx0XHRzZXRVcHNlbGxzOiAodXBzZWxscykgPT4gc2V0VXBzZWxscyh1cHNlbGxzKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0U2l0ZXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l0ZXM6IGdldFNpdGVzKClcblx0XHR9O1xuXHR9KVxuKShTdGFydGVyU2l0ZXMpO1xuIiwiY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG5cdGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuXHRjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBmb3JjZVRvb2xUaXAsIHRvZ2dsZUZvcmNlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PHRyIGNsYXNzTmFtZT1cImZlYXR1cmUtcm93XCI+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwibGFyZ2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aDQ+e3RpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUZvcmNlVG9vbHRpcCh0cnVlKTtcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHRcdFx0eyh0b29sdGlwIHx8IGZvcmNlVG9vbFRpcCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnaW5kaWNhdG9yJywgeydlcnJvcic6ICEgaW5MaXRlLCAnc3VjY2Vzcyc6IGluTGl0ZX0gXSl9PlxuXHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MzB9IGljb249e2luTGl0ZSA/ICd5ZXMnIDogJ25vLWFsdCd9Lz5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIHN1Y2Nlc3NcIj5cblx0XHRcdFx0PERhc2hpY29uIHNpemU9ezMwfSBpY29uPVwieWVzXCIvPlxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVJvdztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCBnZXRUYWJIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcblx0XHRpZiAobnVsbCA9PT0gaGFzaCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRwcm9wcy5zZXRUYWIoaGFzaCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cmVuZGVySGVhZCgpfVxuXHRcdFx0XHR7cmVuZGVyTmF2aWdhdGlvbihwcm9wcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlckhlYWQgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e25ldmVEYXNoLnN0cmluZ3MuaGVhZGVyfTwvaDE+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+e25ldmVEYXNoLnZlcnNpb259PC9zcGFuPlxuXHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvbG9nby5zdmcnfSBhbHQ9e19fKCdOZXZlIFRoZW1lIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHR7T2JqZWN0LmtleXModGFicykubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPjxhXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdGFkZFVybEhhc2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57dGFic1tpdGVtXS5sYWJlbH1cblx0XHRcdFx0XHQ8L2E+PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgTGljZW5zZUNhcmQgPSAoe2lzVmlzaWJsZSwgY2hhbmdlVGllcn0pID0+IHtcblx0Y29uc3Qge2xpY2Vuc2UsIHByb0FwaX0gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBrZXksIHNldEtleSBdID0gdXNlU3RhdGUobGljZW5zZSAmJiAndmFsaWQnID09PSBsaWNlbnNlLnZhbGlkID8gbGljZW5zZS5rZXkgfHwgJycgOiAnJyk7XG5cdGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyB2YWxpZCwgc2V0VmFsaWQgXSA9IHVzZVN0YXRlKGxpY2Vuc2UudmFsaWQgfHwgJ2ludmFsaWQnKTtcblx0Y29uc3QgWyBleHBpcmF0aW9uLCBzZXRFeHBpcmF0aW9uIF0gPSB1c2VTdGF0ZShsaWNlbnNlLmV4cGlyYXRpb24gfHwgJycpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXG5cdGlmICghIGlzVmlzaWJsZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgdG9nZ2xlTGljZW5zZSA9ICgpID0+IHtcblx0XHRjb25zdCB0b0RvID0gJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnZGVhY3RpdmF0ZScgOiAnYWN0aXZhdGUnO1xuXHRcdHNldFN0YXR1cygnYWN0aXZhdGUnID09PSB0b0RvID8gJ2FjdGl2YXRpbmcnIDogJ2RlYWN0aXZhdGluZycpO1xuXHRcdHNlbmQocHJvQXBpICsgJy90b2dnbGVfbGljZW5zZScsIHtrZXksIGFjdGlvbjogdG9Eb30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRzZXRUb2FzdFR5cGUocmVzcG9uc2Uuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicpO1xuXHRcdFx0c2V0S2V5KCdhY3RpdmF0ZScgPT09IHRvRG8gPyBrZXkgOiAnJyk7XG5cdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdHNldEV4cGlyYXRpb24ocmVzcG9uc2UuZXhwaXJhdGlvbik7XG5cdFx0XHRzZXRWYWxpZChyZXNwb25zZS5zdWNjZXNzICYmICdhY3RpdmF0ZScgPT09IHRvRG8gPyAndmFsaWQnIDogJ25vdF9hY3RpdmUnKTtcblx0XHRcdHNldFN0YXR1cyhmYWxzZSk7XG5cdFx0XHRuZXZlRGFzaC5saWNlbnNlLmV4cGlyYXRpb24gPSByZXNwb25zZS5leHBpcmF0aW9uO1xuXHRcdFx0Y2hhbmdlVGllcihyZXNwb25zZS50aWVyIHx8IDEpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZCBsaWNlbnNlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHQ8aDQ+e19fKCdOZXZlIFBybyBBZGRvbiBsaWNlbnNlJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHQ8cD5FbnRlciB5b3VyIGxpY2Vuc2UgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9zdG9yZS50aGVtZWlzbGUuY29tXCI+VGhlbWVJc2xlPC9hPiBwdXJjaGFzZSBoaXN0b3J5IGluIG9yZGVyIHRvIGdldFxuXHRcdFx0XHRcdHBsdWdpbiB1cGRhdGVzPC9wPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJsaWNlbnNlLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlTGljZW5zZSgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0S2V5KGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHQnKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyArIGtleS5zbGljZSgtNSkgOlxuXHRcdFx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdFbnRlciBMaWNlbnNlIEtleScsICduZXZlJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyd2YWxpZCcgIT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3N0YXR1cyB8fCAhIGtleX1cblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdHshIHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdCgndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0ZScsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRlJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHRcdFx0KCdhY3RpdmF0aW5nJyA9PT0gc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0e3RvYXN0ICYmIDxUb2FzdCB0eXBlPXt0b2FzdFR5cGV9IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0vPn1cblx0XHRcdFx0eyEgWyAnbm90X2FjdGl2ZScsICdpbnZhbGlkJyBdLmluY2x1ZGVzKHZhbGlkKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lcyhbICdzdGF0dXMtaWNvbicsICd2YWxpZCcgPT09IHZhbGlkID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyBdKVxuXHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXsndmFsaWQnID09PSB2YWxpZCA/ICd5ZXMnIDogJ25vJ30vPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmFsaWRpdHlcIj5cblx0XHRcdFx0XHRcdFx0eyd2YWxpZCcgPT09IHZhbGlkID8gX18oJ1ZhbGlkJywgJ25ldmUnKSA6IF9fKCdFeHBpcmVkJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHtleHBpcmF0aW9uICYmXG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPi08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImV4cGlyZXNcIj5cblx0XHRcdFx0XHRcdHsoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlcycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlZCcsICduZXZlJykpICsgJyAnICsgZXhwaXJhdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hc2lkZT5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0Y29uc3Qge2NoYW5nZUxpY2Vuc2VUaWVyfSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRyZXR1cm4ge1xuXHRcdGNoYW5nZVRpZXI6IChuZXdUaWVyKSA9PiB7XG5cdFx0XHRjaGFuZ2VMaWNlbnNlVGllcihuZXdUaWVyKTtcblx0XHR9XG5cdH07XG59KShMaWNlbnNlQ2FyZCk7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9jay1kYXNoXCI+XG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvbiBsb2FkaW5nXCI+djIuNi4yPC9zcGFuPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvZ29cIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oQXJyYXkoNikpLm1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxsaT48YSBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPjwvbGk+O1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuZXZlRGFzaC5ub3RpZmljYXRpb25zICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uIGxvYWRpbmcgcGxhY2Vob2xkZXJcIi8+O1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IGNvbHVtbnMgc3RhcnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxvYWRpbmcgY29tcG9uZW50cy1idXR0b24gaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtcHJpbWFyeVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxvYWRpbmcgY29tcG9uZW50cy1idXR0b24gaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtcHJpbWFyeVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjdXN0b21pemVyLXF1aWNrLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hc2lkZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbic7XG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gJy4vT3B0aW9ucy9JbnB1dEZvcm0nO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL09wdGlvbnMvVG9nZ2xlJztcbmltcG9ydCB7Y2hhbmdlT3B0aW9ufSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge0J1dHRvbiwgVG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgTW9kdWxlQ2FyZCA9ICh7c2x1Zywgc2V0VG9hc3QsIGNoYW5nZU1vZHVsZVN0YXR1cywgZ2V0TW9kdWxlU3RhdHVzLCB0aWVyfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qge1xuXHRcdG5pY2VuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGF2YWlsYWJpbGl0eUxldmVsLFxuXHRcdG9wdGlvbnMsXG5cdFx0b3JkZXIsXG5cdFx0bGlua3MsXG5cdFx0ZG9jdW1lbnRhdGlvbixcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0cmVxdWlyZWRfYWN0aW9uc1xuXHR9ID0gbmV2ZURhc2gubW9kdWxlc1tzbHVnXTtcblx0Y29uc3Qge3VwZ3JhZGVMaW5rc30gPSBuZXZlRGFzaDtcblxuXHRjb25zdCByZW5kZXJPcHRpb25zQWNjb3JkaW9ucyA9ICgpID0+IHtcblx0XHRyZXR1cm4gb3B0aW9ucy5tYXAoKGdyb3VwKSA9PiB7XG5cdFx0XHRjb25zdCB7bGFiZWwsIG9wdGlvbnN9ID0gZ3JvdXA7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QWNjb3JkaW9uIHRpdGxlPXtsYWJlbH0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKG9wdGlvblNsdWcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qge2xhYmVsLCB0eXBlLCBwbGFjZWhvbGRlcn0gPSBvcHRpb25zW29wdGlvblNsdWddO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdHsndGV4dCcgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dEZvcm1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbHVnPXtvcHRpb25TbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0eyd0b2dnbGUnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbW9kdWxlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e25pY2VuYW1lfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aWVyIDwgYXZhaWxhYmlsaXR5TGV2ZWwgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXt1cGdyYWRlTGlua3NbYXZhaWxhYmlsaXR5TGV2ZWxdfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dldE1vZHVsZVN0YXR1cyhzbHVnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCh2YWx1ZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBBY3RpdmF0ZWQnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIERlYWN0aXZhdGVkLicsICduZXZlJykpICsgYCAoJHtuaWNlbmFtZX0pYCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgYWN0aXZhdGUgbW9kdWxlLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtkb2N1bWVudGF0aW9uICYmXG5cdFx0XHRcdFx0PGEgaHJlZj17ZG9jdW1lbnRhdGlvbi51cmx9PntfXygnTGVhcm4gTW9yZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHR7bGlua3MgJiYgZ2V0TW9kdWxlU3RhdHVzKHNsdWcpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtsaW5rcy5tYXAoKGxpbmspID0+IDxCdXR0b24gaXNTZWNvbmRhcnkgaHJlZj17bGluay51cmx9PntsaW5rLmxhYmVsfTwvQnV0dG9uPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsoMCA8IG9wdGlvbnMubGVuZ3RoICYmIHRydWUgPT09IGdldE1vZHVsZVN0YXR1cyhzbHVnKSkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtb3B0aW9uc1wiPlxuXHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zQWNjb3JkaW9ucygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0TW9kdWxlU3RhdHVzLCBnZXRMaWNlbnNlVGllcn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE1vZHVsZVN0YXR1czogKHNsdWcpID0+IGdldE1vZHVsZVN0YXR1cyhzbHVnKSxcblx0XHRcdHRpZXI6IGdldExpY2Vuc2VUaWVyKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVTdGF0dXMsIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXM6IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShNb2R1bGVDYXJkKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBOb3RpZmljYXRpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7dGV4dCwgY3RhLCB0eXBlLCB1cGRhdGV9ID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZG9uZSwgc2V0RG9uZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcbiAgICBbXG4gICAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAgIHByb3BzLnNsdWcsXG4gICAgICB0eXBlID8gdHlwZSA6ICcnLFxuICAgICAge1xuICAgICAgICAnc3VjY2Vzcyc6IGRvbmUsXG4gICAgICAgICdoaWRkZW4nOiBkb25lXG4gICAgICB9XG4gICAgXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgeyEgZG9uZSA/IDxwPnt0ZXh0fTwvcD4gOiA8cD48RGFzaGljb24gaWNvbj1cInllc1wiLz57X18oJ0RvbmUhJywgJ25ldmUnKX08L3A+fVxuICAgICAgeyhjdGEgJiYgISBkb25lKSAmJlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2lzLWxvYWRpbmcnOiBpblByb2dyZXNzfSl9XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlRW50aXR5KHVwZGF0ZSwgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpblByb2dyZXNzID9cbiAgICAgICAgICA8c3Bhbj48RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz4ge19fKCdJbiBQcm9ncmVzcycsICduZXZlJykgKyAnLi4uJ30gPC9zcGFuPiA6XG4gICAgICAgICAgICBjdGFcbiAgICAgICAgfVxuICAgICAgPC9CdXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRW50aXR5ID0gKGFyZ3MsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbikgPT4ge1xuICBpZiAoISBhcmdzLnR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICgndGhlbWUnID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXRoZW1lJywge3NsdWc6IGFyZ3Muc2x1Z30pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3RoZW1lLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgncGx1Z2luJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1ZyB8fCAhIGFyZ3MucGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS1wbHVnaW4nLCB7c2x1ZzogYXJncy5zbHVnLCBwbHVnaW46IGFyZ3MucGF0aH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3BsdWdpbi11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gIGV4ZWN1dGVBY3Rpb24oKS50aGVuKCgpID0+IHtcbiAgICBzZXREb25lKHRydWUpO1xuICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghIG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoMSA+IG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBkYXRhPXtuZXZlRGFzaC5ub3RpZmljYXRpb25zW3NsdWddfSBzbHVnPXtzbHVnfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iLCJjb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb24sIFBvcG92ZXJ9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IEVkaXRvclNlbGVjdG9yID0gKHtvblNlYXJjaCwgZWRpdG9yLCBzZXRDdXJyZW50RWRpdG9yfSkgPT4ge1xuXHRjb25zdCBtYXAgPSB7XG5cdFx0J2VsZW1lbnRvcic6IHtcblx0XHRcdGljb246ICdlbGVtZW50b3IucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRWxlbWVudG9yJylcblx0XHR9LFxuXHRcdCdicml6eSc6IHtcblx0XHRcdGljb246ICdicml6eS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCcml6eScpXG5cdFx0fSxcblx0XHQnYmVhdmVyIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnYmVhdmVyLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0JlYXZlciBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCd0aHJpdmUgYXJjaGl0ZWN0Jzoge1xuXHRcdFx0aWNvbjogJ3Rocml2ZS5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdUaHJpdmUgQXJjaGl0ZWN0Jylcblx0XHR9LFxuXHRcdCdkaXZpIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnZGl2aS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdEaXZpIEJ1aWxkZXInKVxuXHRcdH0sXG5cdFx0J2d1dGVuYmVyZyc6IHtcblx0XHRcdGljb246ICdndXRlbmJlcmcucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnR3V0ZW5iZXJnJylcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gc2V0T3BlbighIG9wZW4pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItZHJvcGRvd25cIj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdCBvYi1kcm9wZG93blwiPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yLWljb24nXG5cdFx0XHRcdFx0XHRzcmM9e25ldmVEYXNoLmFzc2V0cyArICdlZGl0b3ItaWNvbnMvJyArIG1hcFtlZGl0b3JdLmljb259XG5cdFx0XHRcdFx0XHRhbHQ9e19fKCdCdWlsZGVyIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHRcdFx0PHNwYW4+e21hcFtlZGl0b3JdLm5pY2VOYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ30vPlxuXHRcdFx0XHRcdHtvcGVuICYmIChcblx0XHRcdFx0XHRcdDxQb3BvdmVyIHBvc2l0aW9uPVwiYm90dG9tIHJpZ2h0XCIgb25DbG9zZT17dG9nZ2xlRHJvcGRvd259IG5vQXJyb3c+XG5cdFx0XHRcdFx0XHRcdHtvcGVuICYmXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG1hcCkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IGVkaXRvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRDdXJyZW50RWRpdG9yKGtleSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRPcGVuKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3ItaWNvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBba2V5XS5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e19fKCdCdWlsZGVyIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bWFwW2tleV0ubmljZU5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdWw+fVxuXHRcdFx0XHRcdFx0PC9Qb3BvdmVyPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdG9uU2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdHR5cGU9XCJzZWFyY2hcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnU2VhcmNoIGZvciBhIHN0YXJ0ZXIgc2l0ZScsICduZXZlJykgKyAnLi4uJ30vPlxuXHRcdFx0XHQ8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9zZWFyY2guc3ZnJ30gYWx0PXtfXygnU2VhcmNoIEljb24nKX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0Q3VycmVudEVkaXRvcn0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRlZGl0b3I6IGdldEN1cnJlbnRFZGl0b3IoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldEN1cnJlbnRFZGl0b3J9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRDdXJyZW50RWRpdG9yOiAoZWRpdG9yKSA9PiBzZXRDdXJyZW50RWRpdG9yKGVkaXRvcilcblx0XHR9O1xuXHR9KVxuKShFZGl0b3JTZWxlY3Rvcik7XG4iLCIvKmdsb2JhbCBuZXZlRGFzaCovXG5pbXBvcnQge2ltcG9ydENvbnRlbnQsIGltcG9ydE1vZHMsIGltcG9ydFdpZGdldHMsIGluc3RhbGxQbHVnaW5zfSBmcm9tICcuLi8uLi91dGlscy9zaXRlLWltcG9ydCc7XG5pbXBvcnQgSW1wb3J0U3RlcHBlciBmcm9tICcuL0ltcG9ydFN0ZXBwZXInO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbiwgVG9nZ2xlQ29udHJvbCwgTW9kYWx9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IEltcG9ydE1vZGFsID0gKHtzZXRNb2RhbCwgc2V0U2l0ZSwgZWRpdG9yLCBzaXRlRGF0YX0pID0+IHtcblx0XHRjb25zdCBbIGdlbmVyYWwsIHNldEdlbmVyYWwgXSA9IHVzZVN0YXRlKHtcblx0XHRcdGNvbnRlbnQ6IHRydWUsXG5cdFx0XHRjdXN0b21pemVyOiB0cnVlLFxuXHRcdFx0d2lkZ2V0czogdHJ1ZVxuXHRcdH0pO1xuXHRcdGNvbnN0IFsgcGx1Z2luc1Byb2dyZXNzLCBzZXRQbHVnaW5zUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIGNvbnRlbnRQcm9ncmVzcywgc2V0Q29udGVudFByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBjdXN0b21pemVyUHJvZ3Jlc3MsIHNldEN1c3RvbWl6ZXJQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgd2lkZ2V0c1Byb2dyZXNzLCBzZXRXaWRnZXRzUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIGZyb250UGFnZUlELCBzZXRGcm9udFBhZ2VJRCBdID0gdXNlU3RhdGUobnVsbCk7XG5cdFx0Y29uc3QgWyBjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXAgXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRcdGNvbnN0IFsgaW1wb3J0aW5nLCBzZXRJbXBvcnRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIHBsdWdpbk9wdGlvbnMsIHNldFBsdWdpbk9wdGlvbnMgXSA9IHVzZVN0YXRlKHt9KTtcblx0XHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdID0gdXNlU3RhdGUobnVsbCk7XG5cblx0XHR1c2VFZmZlY3QoZnVuY3Rpb24gZ2V0UGx1Z2luT3B0aW9ucygpIHtcblx0XHRcdGNvbnN0IG1hbmRhdG9yeSA9IHsuLi4oc2l0ZURhdGFbJ21hbmRhdG9yeV9wbHVnaW5zJ10gfHwge30pfTtcblx0XHRcdGNvbnN0IG9wdGlvbmFsID0gey4uLihzaXRlRGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IHt9KX07XG5cdFx0XHRjb25zdCBkZWZhdWx0T2ZmID0gc2l0ZURhdGFbJ2RlZmF1bHRfb2ZmX3JlY29tbWVuZGVkX3BsdWdpbnMnXSB8fCBbXTtcblxuXHRcdFx0T2JqZWN0LmtleXMobWFuZGF0b3J5KS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRtYW5kYXRvcnlba2V5XSA9IHRydWU7XG5cdFx0XHR9KTtcblx0XHRcdE9iamVjdC5rZXlzKG9wdGlvbmFsKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRvcHRpb25hbFtrZXldID0gISBkZWZhdWx0T2ZmLmluY2x1ZGVzKGtleSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2V0UGx1Z2luT3B0aW9ucyh7XG5cdFx0XHRcdC4uLm9wdGlvbmFsLFxuXHRcdFx0XHQuLi5tYW5kYXRvcnlcblx0XHRcdH0pO1xuXHRcdH0sIFtdKTtcblxuXHRcdGNvbnN0IHJlbmRlck5vdGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBleHRlcm5hbCA9IHNpdGVEYXRhWydleHRlcm5hbF9wbHVnaW5zJ10gfHwgbnVsbDtcblx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3dlbGwnLCB7J3dhcm5pbmcnOiBleHRlcm5hbH0gXSk7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHRcdFx0PHNwYW4+e2V4dGVybmFsID9cblx0XHRcdFx0XHRcdFx0X18oJ1RvIGltcG9ydCB0aGlzIGRlbW8geW91IGhhdmUgdG8gaW5zdGFsbCB0aGUgZm9sbG93aW5nIHBsdWdpbnMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ05vdGUnLCAnbmV2ZScpfTpcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdDxvbD5cblx0XHRcdFx0XHRcdHtleHRlcm5hbCA/XG5cdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKGV4dGVybmFsKS5tYXAoc2x1ZyA9PiA8bGk+PEJ1dHRvbiBpc0xpbmsgaHJlZj17ZXh0ZXJuYWxbc2x1Z10udXJsfT57c2x1Z308L0J1dHRvbj48L2xpPikgOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPntfXygnV2UgcmVjb21tZW5kIHlvdSBiYWNrdXAgeW91ciB3ZWJzaXRlIGNvbnRlbnQgYmVmb3JlIGF0dGVtcHRpbmcgYSBmdWxsIHNpdGUgaW1wb3J0LicsICduZXZlJyl9PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+e19fKCdTb21lIG9mIHRoZSBkZW1vIGltYWdlcyB3aWxsIG5vdCBiZSBpbXBvcnRlZCBhbmQgd2lsbCBiZSByZXBsYWNlZCBieSBwbGFjZWhvbGRlciBpbWFnZXMuJywgJ25ldmUnKX08L2xpPlxuXHRcdFx0XHRcdFx0XHRcdHtzaXRlRGF0YVsndW5zcGxhc2hfZ2FsbGVyeSddICYmXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17c2l0ZURhdGFbJ3Vuc3BsYXNoX2dhbGxlcnknXX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnSGVyZSBpcyBvdXIgb3duIGNvbGxlY3Rpb24gb2YgcmVsYXRlZCBpbWFnZXMgeW91IGNhbiB1c2UgZm9yIHlvdXIgc2l0ZS4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvb2w+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNvbnN0IHJlbmRlck9wdGlvbnMgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBtYXAgPSB7XG5cdFx0XHRcdGNvbnRlbnQ6IHtcblx0XHRcdFx0XHR0aXRsZTogX18oJ0NvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0XHRcdGljb246ICdhZG1pbi1wb3N0J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjdXN0b21pemVyOiB7XG5cdFx0XHRcdFx0dGl0bGU6IF9fKCdDdXN0b21pemVyJywgJ25ldmUnKSxcblx0XHRcdFx0XHRpY29uOiAnYWRtaW4tY3VzdG9taXplcidcblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0czoge1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnV2lkZ2V0cycsICduZXZlJyksXG5cdFx0XHRcdFx0aWNvbjogJ2FkbWluLWdlbmVyaWMnXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgZ2VuZXJhbFwiPlxuXHRcdFx0XHRcdDxoMz57X18oJ0dlbmVyYWwnLCAnbmV2ZScpfTo8L2gzPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhtYXApLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnYWN0aXZlJzogZ2VuZXJhbFtpZF19KX0gaWNvbj17bWFwW2lkXS5pY29ufS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bWFwW2lkXS50aXRsZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z2VuZXJhbFtpZF19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEdlbmVyYWwoey4uLmdlbmVyYWwsIFtpZF06ICEgZ2VuZXJhbFtpZF19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNvbnN0IHJlbmRlclBsdWdpbnMgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBhbGxQbHVnaW5zID0gey4uLihzaXRlRGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IHt9KSwgLi4uKHNpdGVEYXRhWydtYW5kYXRvcnlfcGx1Z2lucyddIHx8IHt9KX07XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucyBwbHVnaW5zXCI+XG5cblx0XHRcdFx0XHQ8aDM+e19fKCdQbHVnaW5zJywgJ25ldmUnKX06PC9oMz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMoYWxsUGx1Z2lucykubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJhZG1pbi1wbHVnaW5zXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnYWN0aXZlJzogcGx1Z2luT3B0aW9uc1tzbHVnXX0pfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYWxsUGx1Z2luc1tzbHVnXX19Lz5cblx0XHRcdFx0XHRcdFx0XHRcdHtzbHVnIGluIHNpdGVEYXRhWydyZWNvbW1lbmRlZF9wbHVnaW5zJ10gJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwbHVnaW5PcHRpb25zW3NsdWddfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRQbHVnaW5PcHRpb25zKHsuLi5wbHVnaW5PcHRpb25zLCBbc2x1Z106ICEgcGx1Z2luT3B0aW9uc1tzbHVnXX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnQoKSB7XG5cdFx0XHRjb25zb2xlLmNsZWFyKCk7XG5cdFx0XHRpZiAoISBwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gUGx1Z2lucy4nKTtcblx0XHRcdFx0cnVuSW1wb3J0Q29udGVudCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgncGx1Z2lucycpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBQbHVnaW5zLicpO1xuXHRcdFx0aW5zdGFsbFBsdWdpbnMocGx1Z2luT3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ3BsdWdpbnMnKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ1tEXSBQbHVnaW5zLicpO1xuXHRcdFx0XHRzZXRQbHVnaW5zUHJvZ3Jlc3MoJ2RvbmUnKTtcblx0XHRcdFx0cnVuSW1wb3J0Q29udGVudCgpO1xuXHRcdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ3BsdWdpbnMnKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcnVuSW1wb3J0Q29udGVudCgpIHtcblx0XHRcdGlmICghIGdlbmVyYWwuY29udGVudCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnW1NdIENvbnRlbnQuJyk7XG5cdFx0XHRcdHJ1bkltcG9ydEN1c3RvbWl6ZXIoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ2NvbnRlbnQnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gQ29udGVudC4nKTtcblx0XHRcdGltcG9ydENvbnRlbnQoe1xuXHRcdFx0XHRjb250ZW50RmlsZTogc2l0ZURhdGFbJ2NvbnRlbnRfZmlsZSddLFxuXHRcdFx0XHRzb3VyY2U6IHNpdGVEYXRhLnNvdXJjZSxcblx0XHRcdFx0ZnJvbnRQYWdlOiBzaXRlRGF0YVsnZnJvbnRfcGFnZSddLFxuXHRcdFx0XHRzaG9wUGFnZXM6IHNpdGVEYXRhWydzaG9wX3BhZ2VzJ10sXG5cdFx0XHRcdGRlbW9TbHVnOiBzaXRlRGF0YS5zbHVnLFxuXHRcdFx0XHRlZGl0b3Jcblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdjb250ZW50Jyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gQ29udGVudC4nKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydmcm9udHBhZ2VfaWQnXSkge1xuXHRcdFx0XHRcdHNldEZyb250UGFnZUlEKHJlc3BvbnNlWydmcm9udHBhZ2VfaWQnXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydEN1c3RvbWl6ZXIoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdjb250ZW50JykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydEN1c3RvbWl6ZXIoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLmN1c3RvbWl6ZXIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDdXN0b21pemVyLicpO1xuXHRcdFx0XHRydW5JbXBvcnRXaWRnZXRzKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHNldEN1cnJlbnRTdGVwKCdjdXN0b21pemVyJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnW1BdIEN1c3RvbWl6ZXIuJyk7XG5cdFx0XHRpbXBvcnRNb2RzKHtcblx0XHRcdFx0J3NvdXJjZV91cmwnOiBzaXRlRGF0YVsnZGVtb191cmwnXSxcblx0XHRcdFx0J3RoZW1lX21vZHMnOiBzaXRlRGF0YVsndGhlbWVfbW9kcyddLFxuXHRcdFx0XHQnd3Bfb3B0aW9ucyc6IHNpdGVEYXRhWyd3cF9vcHRpb25zJ11cblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdjdXN0b21pemVyJyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gQ3VzdG9taXplci4nKTtcblx0XHRcdFx0c2V0Q3VzdG9taXplclByb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydFdpZGdldHMoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdjdXN0b21pemVyJykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydFdpZGdldHMoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLndpZGdldHMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBXaWRnZXRzLicpO1xuXHRcdFx0XHRpbXBvcnREb25lKCk7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgnd2lkZ2V0cycpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBXaWRnZXRzLicpO1xuXHRcdFx0aW1wb3J0V2lkZ2V0cyhzaXRlRGF0YS53aWRnZXRzKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnd2lkZ2V0cycpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIFdpZGdldHMuJyk7XG5cdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRpbXBvcnREb25lKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnd2lkZ2V0cycpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbXBvcnREb25lKCkge1xuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ2RvbmUnKTtcblx0XHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IsIHN0ZXApIHtcblx0XHRcdGNvbnNvbGUubG9nKHN0ZXApO1xuXHRcdFx0c2V0SW1wb3J0aW5nKGZhbHNlKTtcblx0XHRcdHNldEN1cnJlbnRTdGVwKG51bGwpO1xuXHRcdFx0aWYgKCdwbHVnaW5zJyA9PT0gc3RlcCkge1xuXHRcdFx0XHRzZXRDb250ZW50UHJvZ3Jlc3MoJ3NraXAnKTtcblx0XHRcdH1cblx0XHRcdGlmIChbICdjb250ZW50JywgJ3BsdWdpbnMnIF0uaW5jbHVkZXMoc3RlcCkpIHtcblx0XHRcdFx0c2V0Q3VzdG9taXplclByb2dyZXNzKCdza2lwJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWyAnY29udGVudCcsICdwbHVnaW5zJywgJ2N1c3RvbWl6ZXInIF0uaW5jbHVkZXMoc3RlcCkpIHtcblx0XHRcdFx0c2V0V2lkZ2V0c1Byb2dyZXNzKCdza2lwJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1hcCA9IHtcblx0XHRcdFx0J3BsdWdpbnMnOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW5zdGFsbGluZyB0aGUgbmVjZXNzYXJ5IHBsdWdpbnMuJywgJ25ldmUnKSxcblx0XHRcdFx0J2NvbnRlbnQnOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW1wb3J0aW5nIHRoZSB3ZWJzaXRlIGNvbnRlbnQuJywgJ25ldmUnKSxcblx0XHRcdFx0J2N1c3RvbWl6ZXInOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgdXBkYXRpbmcgdGhlIGN1c3RvbWl6ZXIgc2V0dGluZ3MuJywgJ25ldmUnKSxcblx0XHRcdFx0J3dpZGdldHMnOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW1wb3J0aW5nIHRoZSB3aWRnZXRzLicsICduZXZlJylcblx0XHRcdH07XG5cblx0XHRcdHN3aXRjaCAoc3RlcCkge1xuXHRcdFx0XHRjYXNlICdwbHVnaW5zJzpcblx0XHRcdFx0XHRzZXRQbHVnaW5zUHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvbnRlbnQnOlxuXHRcdFx0XHRcdHNldENvbnRlbnRQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3VzdG9taXplcic6XG5cdFx0XHRcdFx0c2V0Q3VzdG9taXplclByb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3aWRnZXRzJzpcblx0XHRcdFx0XHRzZXRXaWRnZXRzUHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzZXRFcnJvcihlcnJvci5kYXRhID8ge21lc3NhZ2U6IG1hcFtzdGVwXSwgY29kZTogZXJyb3IuZGF0YX0gOiB7bWVzc2FnZTogbWFwW3N0ZXBdfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGltcG9ydGluZyk7XG5cdFx0XHRpZiAoaW1wb3J0aW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldE1vZGFsKGZhbHNlKTtcblx0XHRcdFx0c2V0U2l0ZShudWxsKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgYWxsT3B0aW9uc09mZiA9IE9iamVjdC5rZXlzKGdlbmVyYWwpLmV2ZXJ5KGsgPT4gZmFsc2UgPT09IGdlbmVyYWxba10pO1xuXHRcdGNvbnN0IGVkaXRMaW5rTWFwID0ge1xuXHRcdFx0J2VsZW1lbnRvcic6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWxlbWVudG9yYCxcblx0XHRcdCdicml6eSc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vP2JyaXp5LWVkaXRgLFxuXHRcdFx0J2JlYXZlciBidWlsZGVyJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS8/ZmxfYnVpbGRlcmAsXG5cdFx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249YXJjaGl0ZWN0JnR2ZT10cnVlYCxcblx0XHRcdCdkaXZpIGJ1aWxkZXInOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9ldF9mYj0xJlBhZ2VTcGVlZD1vZmZgLFxuXHRcdFx0J2d1dGVuYmVyZyc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWRpdGBcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRMaW5rID0gZWRpdExpbmtNYXBbZWRpdG9yXTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm9iLWltcG9ydC1tb2RhbFwiXG5cdFx0XHRcdHRpdGxlPXtzaXRlRGF0YS50aXRsZX1cblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG5cdFx0XHRcdHNob3VsZENsb3NlT25DbGlja091dHNpZGU9eyEgaW1wb3J0aW5nfVxuXHRcdFx0XHRpc0Rpc21pc3NpYmxlPXshIGltcG9ydGluZ31cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0eyEgaW1wb3J0aW5nICYmICdkb25lJyAhPT0gY3VycmVudFN0ZXAgJiYgISBlcnJvciA/XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJOb3RlKCl9XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zKCl9XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJQbHVnaW5zKCl9XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiA6XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdHtlcnJvciAmJlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWxsIGVycm9yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IubWVzc2FnZSAmJiA8aDM+PERhc2hpY29uIGljb249XCJ3YXJuaW5nXCIvPjxzcGFuPntlcnJvci5tZXNzYWdlfTwvc3Bhbj48L2gzPn1cblx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBuZXZlRGFzaC5vbmJvYXJkaW5nLnN0cmluZ3MudHJvdWJsZXNob290aW5nfX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5ldmVEYXNoLm9uYm9hcmRpbmcuc3RyaW5ncy5zdXBwb3J0fX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IuY29kZSAmJiA8bGk+e19fKCdFcnJvciBjb2RlJywgJ25ldmUnKX06IDxjb2RlPntlcnJvci5jb2RlfTwvY29kZT48L2xpPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPntfXygnRXJyb3IgbG9nJywgJ25ldmUnKX06IDxCdXR0b24gaXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGhyZWY9e25ldmVEYXNoLm9uYm9hcmRpbmcubG9nVXJsfT57bmV2ZURhc2gub25ib2FyZGluZy5sb2dVcmx9PERhc2hpY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj1cImV4dGVybmFsXCIvPjwvQnV0dG9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PEltcG9ydFN0ZXBwZXIgcHJvZ3Jlc3M9e3tcblx0XHRcdFx0XHRcdFx0XHRwbHVnaW5zOiBwbHVnaW5zUHJvZ3Jlc3MsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudFByb2dyZXNzLFxuXHRcdFx0XHRcdFx0XHRcdGN1c3RvbWl6ZXI6IGN1c3RvbWl6ZXJQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHR3aWRnZXRzOiB3aWRnZXRzUHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0fX0gY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfSB3aWxsRG89e2dlbmVyYWx9Lz5cblx0XHRcdFx0XHRcdFx0eydkb25lJyA9PT0gY3VycmVudFN0ZXAgJiZcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW1wb3J0LXJlc3VsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdDb250ZW50IHdhcyBzdWNjZXNzZnVsbHkgaW1wb3J0ZWQuIEVuam95IHlvdXIgbmV3IHNpdGUhJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7ISBpbXBvcnRpbmcgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHR7J2RvbmUnICE9PSBjdXJyZW50U3RlcCA/XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnQ2xvc2UnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0eyEgZXJyb3IgJiZcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthbGxPcHRpb25zT2ZmIHx8IHNpdGVEYXRhWydleHRlcm5hbF9wbHVnaW5zJ119XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW1wb3J0aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cnVuSW1wb3J0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdJbXBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gOlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzTGluayBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PntfXygnQmFjayB0byBTaXRlcyBMaWJyYXJ5JywgJ25ldmUnKX08L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfVxuXHRcdFx0XHRcdFx0XHQ+e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXtlZGl0TGlua30+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdBZGQgeW91ciBvd24gY29udGVudCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3IsIGdldEN1cnJlbnRTaXRlfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpLFxuXHRcdFx0c2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRJbXBvcnRNb2RhbFN0YXR1cywgc2V0Q3VycmVudFNpdGV9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKSxcblx0XHRcdHNldFNpdGU6IChkYXRhKSA9PiBzZXRDdXJyZW50U2l0ZShkYXRhKVxuXHRcdH07XG5cdH0pXG4pKEltcG9ydE1vZGFsKTtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgSW1wb3J0U3RlcHBlciA9ICh7Y3VycmVudFN0ZXAsIHByb2dyZXNzLCB3aWxsRG99KSA9PiB7XG5cblx0Y29uc3Qgc3RlcHNNYXAgPSB7XG5cdFx0cGx1Z2luczoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbnN0YWxsaW5nIFBsdWdpbnMnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5wbHVnaW5zLFxuXHRcdFx0d2lsbERvOiB0cnVlXG5cdFx0fSxcblx0XHRjb250ZW50OiB7XG5cdFx0XHRsYWJlbDogX18oJ0ltcG9ydGluZyBDb250ZW50JywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3MuY29udGVudCxcblx0XHRcdHdpbGxEbzogd2lsbERvLmNvbnRlbnRcblx0XHR9LFxuXHRcdGN1c3RvbWl6ZXI6IHtcblx0XHRcdGxhYmVsOiBfXygnSW1wb3J0aW5nIEN1c3RvbWl6ZXIgU2V0dGluZ3MnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5jdXN0b21pemVyLFxuXHRcdFx0d2lsbERvOiB3aWxsRG8uY3VzdG9taXplclxuXHRcdH0sXG5cdFx0d2lkZ2V0czoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbXBvcnRpbmcgV2lkZ2V0cycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLndpZGdldHMsXG5cdFx0XHR3aWxsRG86IHdpbGxEby53aWRnZXRzXG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cInN0ZXBwZXJcIj5cblx0XHRcdHtPYmplY3Qua2V5cyhzdGVwc01hcCkubWFwKGtleSA9PiB7XG5cdFx0XHRcdGNvbnN0IHtsYWJlbCwgc3RhdHVzLCB3aWxsRG99ID0gc3RlcHNNYXBba2V5XTtcblxuXHRcdFx0XHRpZiAoISB3aWxsRG8pIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFtcblx0XHRcdFx0XHQnaWNvbicsIHtcblx0XHRcdFx0XHRcdCdsb2FkaW5nJzogY3VycmVudFN0ZXAgPT09IGtleSxcblx0XHRcdFx0XHRcdCd3YXJuaW5nJzogY3VycmVudFN0ZXAgPT09IGtleSxcblx0XHRcdFx0XHRcdCdzdWNjZXNzJzogJ2RvbmUnID09PSBzdGF0dXMsXG5cdFx0XHRcdFx0XHQnZXJyb3InOiAnZXJyb3InID09PSBzdGF0dXMsXG5cdFx0XHRcdFx0XHQnc2tpcCc6ICdza2lwJyA9PT0gc3RhdHVzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdKTtcblxuXHRcdFx0XHRsZXQgaWNvbiA9ICdjbG9jayc7XG5cdFx0XHRcdGlmIChjdXJyZW50U3RlcCA9PT0ga2V5KSB7XG5cdFx0XHRcdFx0aWNvbiA9ICd1cGRhdGUnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCdkb25lJyA9PT0gc3RhdHVzKSB7XG5cdFx0XHRcdFx0aWNvbiA9ICd5ZXMnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCdlcnJvcicgPT09IHN0YXR1cyApIHtcblx0XHRcdFx0XHRpY29uID0gJ25vLWFsdCc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249e2ljb259IGNsYXNzTmFtZT17Y3VycmVudFN0ZXAgPT09IGtleSA/ICdsb2FkaW5nJyA6ICcnfS8+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+e2xhYmVsfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC91bD4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0U3RlcHBlcjtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYiBtb2NrLWRhc2hcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItaGVhZFwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1kcm9wZG93blwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWljb24gbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2Itc2l0ZXNcIj5cblx0XHRcdFx0XHR7WyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5IF0ubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBFZGl0b3JTZWxlY3RvciBmcm9tICcuL0VkaXRvclNlbGVjdG9yJztcbmltcG9ydCBTdGFydGVyU2l0ZUNhcmQgZnJvbSAnLi9TdGFydGVyU2l0ZUNhcmQnO1xuaW1wb3J0IFByZXZpZXdGcmFtZSBmcm9tICcuL1ByZXZpZXdGcmFtZSc7XG5pbXBvcnQgSW1wb3J0TW9kYWwgZnJvbSAnLi9JbXBvcnRNb2RhbCc7XG5pbXBvcnQgVml6U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuXG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbmNvbnN0IE9uYm9hcmRpbmcgPSAoe3NpdGVzLCB1cHNlbGxzLCBlZGl0b3IsIHByZXZpZXdPcGVuLCBjdXJyZW50U2l0ZURhdGEsIGltcG9ydE1vZGFsfSkgPT4ge1xuXHRjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIG1heFNob3duLCBzZXRNYXhTaG93biBdID0gdXNlU3RhdGUoOSk7XG5cblx0Y29uc3QgZmlsdGVyU2l0ZXMgPSAoc2l0ZXMpID0+IHtcblx0XHRPYmplY3Qua2V5cyhzaXRlcykubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRzaXRlc1tzbHVnXS5zbHVnID0gc2x1Zztcblx0XHR9KTtcblxuXHRcdHNpdGVzID0gT2JqZWN0LnZhbHVlcyhzaXRlcyk7XG5cblx0XHRpZiAoISBzZWFyY2hRdWVyeSkge1xuXHRcdFx0cmV0dXJuIHNpdGVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShzaXRlcywge1xuXHRcdFx0aW5jbHVkZVNjb3JlOiB0cnVlLFxuXHRcdFx0a2V5czogWyAndGl0bGUnLCAnc2x1ZycsICdrZXl3b3JkcycgXVxuXHRcdH0pO1xuXHRcdGNvbnN0IHNlYXJjaCA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFF1ZXJ5KTtcblx0XHRyZXR1cm4gc2VhcmNoLm1hcChpdGVtID0+IGl0ZW0uaXRlbSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0QWxsU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2l0ZXNEYXRhID0gc2l0ZXMgJiYgc2l0ZXNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHNpdGVzW2VkaXRvcl0pIDogW107XG5cdFx0Y29uc3QgdXBzZWxsc0RhdGEgPSB1cHNlbGxzICYmIHVwc2VsbHNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHVwc2VsbHNbZWRpdG9yXSkgOiBbXTtcblx0XHRyZXR1cm4gWyAuLi5zaXRlc0RhdGEsIC4uLnVwc2VsbHNEYXRhIF07XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYWxsRGF0YSA9IGdldEFsbFNpdGVzKCk7XG5cblx0XHRyZXR1cm4gYWxsRGF0YS5zbGljZSgwLCBtYXhTaG93bikubWFwKHNpdGUgPT4ge1xuXHRcdFx0cmV0dXJuIDxTdGFydGVyU2l0ZUNhcmQgdXBzZWxsPXtzaXRlWydpbl9wcm8nXX0gZGF0YT17c2l0ZX0vPjtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBnZXRTaXRlTmF2ID0gKHByZXYgPSBmYWxzZSkgPT4ge1xuXHRcdGlmIChudWxsID09PSBjdXJyZW50U2l0ZURhdGEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBhbGxTaXRlcyA9IGdldEFsbFNpdGVzKCk7XG5cdFx0Y29uc3QgcG9zaXRpb24gPSBhbGxTaXRlcy5pbmRleE9mKGN1cnJlbnRTaXRlRGF0YSk7XG5cblx0XHRpZiAoLTEgPT09IHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoMSA9PT0gYWxsU2l0ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAocHJldiAmJiAwID09PSBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIGFsbFNpdGVzW2FsbFNpdGVzLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdGlmICghIHByZXYgJiYgcG9zaXRpb24gPT09IGFsbFNpdGVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJldHVybiBhbGxTaXRlc1swXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWxsU2l0ZXNbcHJldiA/IHBvc2l0aW9uIC0gMSA6IHBvc2l0aW9uICsgMV07XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItaGVhZFwiPlxuXHRcdFx0XHRcdDxoMj57X18oJ1JlYWR5IHRvIHVzZSBwcmUtYnVpbHQgd2Vic2l0ZXMgd2l0aCAxLWNsaWNrIGluc3RhbGxhdGlvbicsICduZXZlJyl9PC9oMj5cblx0XHRcdFx0XHQ8cD57X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4gWW91IGp1c3QgbmVlZCB0byBjaG9vc2UgeW91ciBmYXZvcml0ZSwgYW5kIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmcgZWxzZS4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0XHQ8RWRpdG9yU2VsZWN0b3Jcblx0XHRcdFx0XHRcdG9uU2VhcmNoPXsocXVlcnkpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoUXVlcnkocXVlcnkpO1xuXHRcdFx0XHRcdFx0XHRzZXRNYXhTaG93big5KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRxdWVyeT17c2VhcmNoUXVlcnl9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItYm9keVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2Itc2l0ZXNcIj5cblx0XHRcdFx0XHRcdHsoc2l0ZXMgfHwgdXBzZWxscykgJiYgcmVuZGVyU2l0ZXMoKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Vml6U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNYXhTaG93bihtYXhTaG93biArIDkpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3toZWlnaHQ6IDEwLCB3aWR0aDogMTAsIGRpc3BsYXk6ICdibG9jayd9fS8+XG5cdFx0XHRcdFx0PC9WaXpTZW5zb3I+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7KHByZXZpZXdPcGVuICYmIGN1cnJlbnRTaXRlRGF0YSkgJiYgPFByZXZpZXdGcmFtZSBuZXh0PXtnZXRTaXRlTmF2KCl9IHByZXY9e2dldFNpdGVOYXYodHJ1ZSl9Lz59XG5cdFx0XHR7KGltcG9ydE1vZGFsICYmIGN1cnJlbnRTaXRlRGF0YSkgJiYgPEltcG9ydE1vZGFsLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRnZXRTaXRlcyxcblx0XHRnZXRVcHNlbGxzLFxuXHRcdGdldEN1cnJlbnRFZGl0b3IsXG5cdFx0Z2V0UHJldmlld1N0YXR1cyxcblx0XHRnZXRDdXJyZW50U2l0ZSxcblx0XHRnZXRJbXBvcnRNb2RhbFN0YXR1c1xuXHR9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0cmV0dXJuIHtcblx0XHRzaXRlczogZ2V0U2l0ZXMoKSxcblx0XHR1cHNlbGxzOiBnZXRVcHNlbGxzKCksXG5cdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKCksXG5cdFx0cHJldmlld09wZW46IGdldFByZXZpZXdTdGF0dXMoKSxcblx0XHRjdXJyZW50U2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKCksXG5cdFx0aW1wb3J0TW9kYWw6IGdldEltcG9ydE1vZGFsU3RhdHVzKClcblx0fTtcbn0pKE9uYm9hcmRpbmcpO1xuIiwiY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgUHJldmlld0ZyYW1lID0gKHtuZXh0LCBwcmV2LCBzaXRlRGF0YSwgc2V0U2l0ZSwgc2V0UHJldmlldywgc2V0TW9kYWx9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1wcmV2aWV3XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdcIj5cblx0XHRcdFx0PGlmcmFtZSBzcmM9e3NpdGVEYXRhWydkZW1vX3VybCddfSBmcmFtZWJvcmRlcj1cIjBcIi8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuXHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIgc2l6ZT17NTB9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJhclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRvclwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0UHJldmlldyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUobnVsbCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xvc2VcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDbG9zZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRpY29uPVwibm9cIi8+XG5cblx0XHRcdFx0XHR7cHJldiAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUocHJldik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJldlwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1ByZXZpb3VzJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1sZWZ0LWFsdDJcIlxuXHRcdFx0XHRcdC8+fVxuXG5cdFx0XHRcdFx0e25leHQgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKG5leHQpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdOZXh0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1yaWdodC1hbHQyXCJcblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtzaXRlRGF0YVsnaW5fcHJvJ10gP1xuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1cGdyYWRlXCJcblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9e3NpdGVEYXRhWydvdXRib3VuZF9saW5rJ119XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50U2l0ZX0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50U2l0ZSwgc2V0UHJldmlld1N0YXR1cywgc2V0SW1wb3J0TW9kYWxTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlOiAoZGF0YSkgPT4gc2V0Q3VycmVudFNpdGUoZGF0YSksXG5cdFx0XHRzZXRQcmV2aWV3OiAoc3RhdHVzKSA9PiBzZXRQcmV2aWV3U3RhdHVzKHN0YXR1cyksXG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHRcdH07XG5cdH0pXG4pKFByZXZpZXdGcmFtZSk7XG4iLCJjb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgU3RhcnRlclNpdGVDYXJkID0gKHtkYXRhLCB1cHNlbGwsIHNldFNpdGUsIHNldFByZXZpZXcsIHNldE1vZGFsfSkgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImZhdlwiPlxuXHRcdFx0XHRcdDxCdXR0b24gaWNvbj1cInN0YXItZmlsbGVkXCIvPlxuXHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJldmlld1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdHNldFByZXZpZXcodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnUHJldmlldycsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0eyEgdXBzZWxsICYmXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1wb3J0XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShkYXRhKTtcblx0XHRcdFx0XHRcdFx0c2V0TW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7ZGF0YS5zY3JlZW5zaG90ICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YS5zY3JlZW5zaG90fSBhbHQ9e2RhdGEudGl0bGV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS50aXRsZX08L3A+XG5cdFx0XHRcdHt1cHNlbGwgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHJvLWJhZGdlXCI+e19fKCdQcm8nLCAnbmV2ZScpfTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0Y29uc3Qge3NldEN1cnJlbnRTaXRlLCBzZXRQcmV2aWV3U3RhdHVzLCBzZXRJbXBvcnRNb2RhbFN0YXR1c30gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7XG5cdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpLFxuXHRcdHNldFByZXZpZXc6IChzdGF0dXMpID0+IHNldFByZXZpZXdTdGF0dXMoc3RhdHVzKSxcblx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHR9O1xufSlcbihTdGFydGVyU2l0ZUNhcmQpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTaXRlcyhzaXRlcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NJVEVTJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlc31cblx0XHR9O1xuXHR9LFxuXHRzZXRVcHNlbGxzKHVwc2VsbHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9VUFNFTExTJyxcblx0XHRcdHBheWxvYWQ6IHt1cHNlbGxzfVxuXHRcdH07XG5cdH0sXG5cdHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9FRElUT1InLFxuXHRcdFx0cGF5bG9hZDoge2VkaXRvcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50U2l0ZShzaXRlRGF0YSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0ZPQ1VTRURfU0lURScsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZURhdGF9XG5cdFx0fTtcblx0fSxcblx0c2V0UHJldmlld1N0YXR1cyhwcmV2aWV3U3RhdHVzKSB7XG5cdFx0aWYgKHByZXZpZXdTdGF0dXMpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1BSRVZJRVdfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtwcmV2aWV3U3RhdHVzfVxuXHRcdH07XG5cdH0sXG5cdHNldEltcG9ydE1vZGFsU3RhdHVzKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0aWYgKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9JTVBPUlRfTU9EQUxfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtpbXBvcnRNb2RhbFN0YXR1c31cblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2l0ZXM6IG51bGwsXG5cdHVwc2VsbHM6IG51bGwsXG5cdGVkaXRvcjogJ2VsZW1lbnRvcicsXG5cdHByZXZpZXdTdGF0dXM6IGZhbHNlLFxuXHRpbXBvcnRNb2RhbFN0YXR1czogZmFsc2UsXG5cdGN1cnJlbnRTaXRlOiBudWxsLFxuXHRpbXBvcnRpbmc6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9TSVRFUyc6XG5cdFx0XHRjb25zdCB7c2l0ZXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2l0ZXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1VQU0VMTFMnOlxuXHRcdFx0Y29uc3Qge3Vwc2VsbHN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBzZWxsc1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfQ1VSUkVOVF9FRElUT1InOlxuXHRcdFx0Y29uc3Qge2VkaXRvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlZGl0b3Jcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0ZPQ1VTRURfU0lURSc6XG5cdFx0XHRjb25zdCB7c2l0ZURhdGF9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudFNpdGU6IHNpdGVEYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9QUkVWSUVXX1NUQVRVUyc6XG5cdFx0XHRjb25zdCB7cHJldmlld1N0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwcmV2aWV3U3RhdHVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9JTVBPUlRfTU9EQUxfU1RBVFVTJzpcblx0XHRcdGNvbnN0IHtpbXBvcnRNb2RhbFN0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpbXBvcnRNb2RhbFN0YXR1c1xuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRTaXRlczogKHN0YXRlKSA9PiBzdGF0ZS5zaXRlcyxcblx0Z2V0VXBzZWxsczogKHN0YXRlKSA9PiBzdGF0ZS51cHNlbGxzLFxuXHRnZXRDdXJyZW50RWRpdG9yOiAoc3RhdGUpID0+IHN0YXRlLmVkaXRvcixcblx0Z2V0Q3VycmVudFNpdGU6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFNpdGUsXG5cdGdldFByZXZpZXdTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUucHJldmlld1N0YXR1cyxcblx0Z2V0SW1wb3J0TW9kYWxTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUuaW1wb3J0TW9kYWxTdGF0dXNcbn07XG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbnB1dEZvcm0gPSAoe3NsdWcsIGxhYmVsLCBwbGFjZWhvbGRlciwgZ2V0T3B0aW9uLCBzZXRUb2FzdCwgY2hhbmdlT3B0aW9ufSkgPT4ge1xuXHRjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoZ2V0T3B0aW9uKHNsdWcpKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdGV4dCc+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17XG5cdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyhzbHVnLCB2YWx1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KHIubWVzc2FnZSA/IHIubWVzc2FnZSA6IGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9PlxuXHRcdFx0XHR7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e3NsdWd9PntsYWJlbH08L2xhYmVsPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD17c2x1Z31cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtcblx0XHRcdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2xvYWRpbmcgPyAnaXMtbG9hZGluZycgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2F2ZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdGljb249e2xvYWRpbmcgPyAndXBkYXRlJyA6ICdlZGl0b3ItYnJlYWsnfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldE9wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldE9wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKElucHV0Rm9ybSk7XG5cbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRvZ2dsZSA9ICh7c2x1ZywgbGFiZWwsIGdldE9wdGlvbiwgY2hhbmdlT3B0aW9uLCBzZXRUb2FzdH0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdG9nZ2xlJz5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGNoZWNrZWQ9e2dldE9wdGlvbihzbHVnKX1cblx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKCBzbHVnLCB2YWx1ZSApLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICggci5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3QoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7bG9hZGluZyAmJiA8RGFzaGljb24gc2l6ZT17MTh9IGljb249XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoVG9nZ2xlKTtcblxuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Z2V0fSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge3NsdWcsIGRhdGF9ID0gcHJvcHM7XG5cdGNvbnN0IHtiYW5uZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCB2ZXJzaW9uLCBhdXRob3J9ID0gcHJvcHMuZGF0YTtcblx0Y29uc3QgWyBhY3Rpb24sIHNldEFjdGlvbiBdID0gdXNlU3RhdGUoZGF0YS5jdGEpO1xuXHRjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBzdHJpbmdNYXAgPSB7XG5cdFx0J2luc3RhbGwnOiB7c3RhdGljOiBfXygnSW5zdGFsbCcsICduZXZlJyksIHByb2dyZXNzOiBfXygnSW5zdGFsbGluZycsICduZXZlJyl9LFxuXHRcdCdhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdBY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnQWN0aXZhdGluZycsICduZXZlJyl9LFxuXHRcdCdkZWFjdGl2YXRlJzoge3N0YXRpYzogX18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0RlYWN0aXZhdGluZycsICduZXZlJyl9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgJ3BsdWdpbicsIHNsdWcgXSl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YmFubmVyfSBhbHQ9e19fKCdCYW5uZXIgSW1hZ2UnLCAnbmFtZScpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbHVnaW4tZGF0YVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1hY3Rpb25cIlxuXHRcdFx0XHRcdGlzUHJpbWFyeT17WyAnaW5zdGFsbCcsICdhY3RpdmF0ZScgXS5pbmNsdWRlcyhhY3Rpb24pfVxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsnZGVhY3RpdmF0ZScgPT09IGFjdGlvbn1cblx0XHRcdFx0XHRkaXNhYmxlZD17aW5Qcm9ncmVzc31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKHRydWUpO1xuXHRcdFx0XHRcdFx0aWYgKCdpbnN0YWxsJyA9PT0gYWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxQbHVnaW4oc2x1ZykudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cblx0XHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRnZXQoZGF0YVthY3Rpb25dLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICghIHIub2spIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuXHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmICgnYWN0aXZhdGUnID09PSBhY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2RlYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyEgaW5Qcm9ncmVzcyAmJiBzdHJpbmdNYXBbYWN0aW9uXS5zdGF0aWN9XG5cdFx0XHRcdFx0e2luUHJvZ3Jlc3MgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz5cblx0XHRcdFx0XHRcdFx0e3N0cmluZ01hcFthY3Rpb25dLnByb2dyZXNzICsgJy4uLid9XG4gICAgICAgICAgICA8L3NwYW4+KX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IGluc3RhbGxQbHVnaW4gPSAoc2x1ZykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0d3AudXBkYXRlcy5hamF4KCdpbnN0YWxsLXBsdWdpbicsIHtcblx0XHRcdHNsdWcsXG5cdFx0XHRzdWNjZXNzOiAocikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHtzdWNjZXNzOiB0cnVlfSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnIpID0+IHtcblxuXHRcdFx0XHQvLyBlcnJvckNvZGUsIGVycm9yTWVzc2FnZSBhcmUgcGFyYW1zIG9mIGVyciBpZiB3ZSB0b2FzdC5cblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTGljZW5zZUNhcmQgZnJvbSAnLi9MaWNlbnNlQ2FyZCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge1RvZ2dsZUNvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFifSkgPT4ge1xuXHRjb25zdCBbIHRyYWNraW5nLCBzZXRUcmFja2luZyBdID0gdXNlU3RhdGUobmV2ZURhc2gub3B0aW9ucy5sb2dnZXIgfHwgZmFsc2UpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHR7bmV2ZURhc2gucHJvICYmIDxMaWNlbnNlQ2FyZCBpc1Zpc2libGU9eydwcm8nID09PSBjdXJyZW50VGFifS8+fVxuXHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ05ldmUgQ29tbXVuaXR5JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnTGVhdmUgdXMgYSByZXZpZXcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdBcmUgeW91IGFyZSBlbmpveWluZyBOZXZlPyBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgeW91ciBmZWVkYmFjay4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0NvbnRyaWJ1dGluZycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0JlY29tZSBhIGNvbnRyaWJ1dG9yIGJ5IG9wdGluZyBpbiB0byBvdXIgYW5vbnltb3VzIGRhdGEgdHJhY2tpbmcuIFdlIGd1YXJhbnRlZSBubyBzZW5zaXRpdmUgZGF0YSBpcyBjb2xsZWN0ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzExMjItbmV2ZS11c2FnZS10cmFja2luZ1wiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RyYWNraW5nfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbGxvdyBBbm9ueW1vdXMgVHJhY2tpbmcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2guYXBpICsgJy90b2dnbGVfdHJhY2tpbmcnLCB7dmFsdWV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnZXJyb3InKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgdXBkYXRlIG9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKCEgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ3N1Y2Nlc3MnKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RvYXN0ICYmXG5cdFx0XHRcdFx0PFRvYXN0IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0gdHlwZT17dG9hc3RUeXBlfS8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYXNpZGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiY29uc3Qge1NuYWNrYmFyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3QgR2xvYmFsU25hY2tiYXIgPSAoe3RvYXN0LCBzZXRUb2FzdH0pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFRvYXN0KG51bGwpO1xuXHRcdH0sIDMwMDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWVzc2FnZSA9IHRvYXN0KCk7XG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdG9wYWNpdHk6IG51bGwgPT09IG1lc3NhZ2UgPyAwIDogMVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0PFNuYWNrYmFyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZGFzaC1ub3RpY2UnXG5cdFx0XHQ+XG5cdFx0XHRcdHsnYm9vbGVhbicgPT09IHR5cGVvZiBtZXNzYWdlID9cblx0XHRcdFx0XHQoZmFsc2UgPT09IG1lc3NhZ2UgP1xuXHRcdFx0XHRcdFx0X18oJ0NvdWxkIG5vdCBVcGRhdGUgT3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0X18oJ09wdGlvbiBVcGRhdGVkJywgJ25ldmUnKSkgOlxuXHRcdFx0XHRcdHRvYXN0KClcblx0XHRcdFx0fVxuXHRcdFx0PC9TbmFja2Jhcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFRvYXN0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6ICgpID0+IGdldFRvYXN0KClcblx0XHR9O1xuXHR9KVxuKShHbG9iYWxTbmFja2Jhcik7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHt0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBUYWJzQ29udGVudCA9ICh7Y3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICdjb250YWluZXInLCAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG5cdFx0PC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgVG9hc3QgPSAoe21lc3NhZ2UsIGRpc21pc3MsIHRpbWUsIHR5cGUgPSAnaW5mbyd9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGlzbWlzcygnJyk7XG5cdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9LCB0aW1lIHx8IDIwMDApO1xuXHR9KTtcblx0Y29uc3QgaWNvbk1hcCA9IHtcblx0XHQnaW5mbyc6ICdpbmZvJyxcblx0XHQnZXJyb3InOiAnbm8nLFxuXHRcdCdzdWNjZXNzJzogJ3llcycsXG5cdFx0J3dhcm5pbmcnOiAnd2FybmluZydcblx0fTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndG9hc3QnLCAnY29tcG9uZW50cy1hbmltYXRlX19hcHBlYXInLCAnaXMtZnJvbS1taWRkbGUnLCB0eXBlIF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxEYXNoaWNvbiBpY29uPXtpY29uTWFwW3R5cGVdfS8+XG5cdFx0XHQ8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9Db21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IHtyZWdpc3RlclN0b3JlfSA9IHdwLmRhdGE7XG5jb25zdCB7cmVuZGVyfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3N0b3JlL3JlZHVjZXInO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3N0b3JlL3NlbGVjdG9ycyc7XG5yZWdpc3RlclN0b3JlKCduZXZlLWRhc2hib2FyZCcsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzXG59KTtcblxuaW1wb3J0IG9uYm9hcmRpbmdSZWR1Y2VyIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXInO1xuaW1wb3J0IG9uYm9hcmRpbmdBY3Rpb25zIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IG9uYm9hcmRpbmdTZWxlY3RvcnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtb25ib2FyZGluZycsIHtcblx0cmVkdWNlcjogb25ib2FyZGluZ1JlZHVjZXIsXG5cdGFjdGlvbnM6IG9uYm9hcmRpbmdBY3Rpb25zLFxuXHRzZWxlY3RvcnM6IG9uYm9hcmRpbmdTZWxlY3RvcnNcbn0pO1xuXG5jb25zdCBSb290ID0gKCkgPT4gPEFwcC8+O1xucmVuZGVyKFxuXHQ8Um9vdC8+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV2ZS1kYXNoYm9hcmQnKVxuKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldFRhYih0YWIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9UQUInLFxuXHRcdFx0cGF5bG9hZDoge3RhYn1cblx0XHR9O1xuXHR9LFxuXHRzZXRTZXR0aW5ncyhvYmplY3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TRVRUSU5HUycsXG5cdFx0XHRwYXlsb2FkOiB7b2JqZWN0fVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhtb2R1bGVTbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7bW9kdWxlU2x1ZzogJ252X3Byb18nICsgbW9kdWxlU2x1ZyArICdfc3RhdHVzJywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlT3B0aW9uKG9wdGlvblNsdWcsIG9wdGlvblZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdDSEFOR0VfTU9EVUxFX09QVElPTicsXG5cdFx0XHRwYXlsb2FkOiB7b3B0aW9uU3RhdHVzOiAnbnZfcHJvXycgKyBvcHRpb25TbHVnLCBvcHRpb25WYWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VMaWNlbnNlVGllcih0aWVyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfTElDRU5TRV9USUVSJyxcblx0XHRcdHBheWxvYWQ6IHt0aWVyfVxuXHRcdH07XG5cdH0sXG5cdHNldFRvYXN0KG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9UT0FTVF9NRVNTQUdFJyxcblx0XHRcdHBheWxvYWQ6IG1lc3NhZ2Vcblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzZXR0aW5nczoge30sXG5cdHRpZXI6IG5ldmVEYXNoLnBybyA/IG5ldmVEYXNoLmxpY2Vuc2UudGllciA6IDAsXG5cdHRvYXN0OiBudWxsLFxuXHRjdXJyZW50VGFiOiAnc3RhcnQnXG59O1xuXG5jb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuaWYgKG51bGwgIT09IGhhc2gpIHtcblx0aW5pdGlhbFN0YXRlLmN1cnJlbnRUYWIgPSBoYXNoO1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9UQUInOlxuXHRcdFx0Y29uc3Qge3RhYn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjdXJyZW50VGFiOiB0YWJcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1NFVFRJTkdTJzpcblx0XHRcdGNvbnN0IHtvYmplY3R9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IG9iamVjdFxuXHRcdFx0fTtcblx0XHRjYXNlICdUT0dHTEVfTU9EVUxFJzpcblx0XHRcdGNvbnN0IHttb2R1bGVTbHVnLCB2YWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFttb2R1bGVTbHVnXTogdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdDSEFOR0VfTU9EVUxFX09QVElPTic6XG5cdFx0XHRsZXQge29wdGlvblN0YXR1cywgb3B0aW9uVmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbb3B0aW9uU3RhdHVzXTogb3B0aW9uVmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfTElDRU5TRV9USUVSJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0aWVyOiBhY3Rpb24ucGF5bG9hZC50aWVyXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9UT0FTVF9NRVNTQUdFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2FzdDogYWN0aW9uLnBheWxvYWRcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0TW9kdWxlU3RhdHVzOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWcgKyAnX3N0YXR1cyddLFxuXHRnZXRPcHRpb246IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1Z10sXG5cdGdldExpY2Vuc2VUaWVyOiAoc3RhdGUpID0+IHN0YXRlLnRpZXIsXG5cdGdldFRvYXN0OiAoc3RhdGUpID0+IHN0YXRlLnRvYXN0LFxuXHRnZXRUYWI6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFRhYlxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5pbXBvcnQgRnJlZVBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVBybyc7XG5cbmNvbnN0IGdldFVybFBhcmFtID0gKHBhcmFtKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cblx0cmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xufTtcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG5cdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0aWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuXHRpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuXHQnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6IChzZXRUYWIpID0+IDxQbHVnaW5zLz59LFxuXHQnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6IChzZXRUYWIpID0+IDxDaGFuZ2Vsb2cvPn0sXG5cdCdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcblx0J2ZyZWUtcHJvJzoge2xhYmVsOiAnRnJlZSB2cyBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxGcmVlUHJvLz59XG59O1xuXG5pZiAobmV2ZURhc2gucHJvKSB7XG5cdHRhYnMucHJvID0ge2xhYmVsOiAnTmV2ZSBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxQcm8vPn07XG5cdGRlbGV0ZSAodGFic1snZnJlZS1wcm8nXSk7XG59XG5cblxuZXhwb3J0IHtcblx0Z2V0VXJsUGFyYW0sXG5cdGFkZFVybEhhc2gsXG5cdGdldFRhYkhhc2gsXG5cdHRhYnNcbn07XG4iLCJjb25zdCB7X199ID0gd3AuaTE4bjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuY29uc3QgaXNWYWxpZCA9IChvcHRpb24sIG9wdGlvbnNBcnJheSkgPT4ge1xuXHRpZiAoJ252X3Byb190eXBla2l0X2lkJyA9PT0gb3B0aW9uKSB7XG5cdFx0aWYgKCEgb3B0aW9uc0FycmF5WyduZXZlX3Byb190eXBla2l0X2RhdGEnXSkge1xuXHRcdFx0cmV0dXJuIHttZXNzYWdlOiBfXygnVHlwZWtpdCBQcm9qZWN0IElEIGlzIGludmFsaWQnLCAnbmV2ZScpLCBzdWNjZXNzOiBmYWxzZX07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4vcmVzdCc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRXaWRnZXRzID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbXBvcnRfd2lkZ2V0cycsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydE1vZHMgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2ltcG9ydF90aGVtZV9tb2RzJywgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zdGFsbFBsdWdpbnMgPSAocGx1Z2luQXJyYXkpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbnN0YWxsX3BsdWdpbnMnLCBwbHVnaW5BcnJheSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0Q29udGVudCA9IChkYXRhKSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW1wb3J0X2NvbnRlbnQnLCBkYXRhKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==