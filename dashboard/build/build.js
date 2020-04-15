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
  var _neveDash = neveDash,
      docsURL = _neveDash.docsURL,
      supportURL = _neveDash.supportURL,
      whiteLabel = _neveDash.whiteLabel,
      assets = _neveDash.assets;
  var _neveDash$strings = neveDash.strings,
      supportCardDescription = _neveDash$strings.supportCardDescription,
      docsCardDescription = _neveDash$strings.docsCardDescription;

  if (whiteLabel && whiteLabel.agencyURL) {
    supportURL = whiteLabel.agencyURL;
    docsURL = whiteLabel.agencyURL;
  }

  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "col"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'buoy.svg',
    title: __('Contact Support', 'neve'),
    description: supportCardDescription
  }, wp.element.createElement(Button, {
    isPrimary: true,
    isLarge: true,
    href: supportURL
  }, __('Contact Support', 'neve'))), !whiteLabel && wp.element.createElement(Fragment, null, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: assets + 'list.svg',
    title: __('Changelog', 'neve'),
    description: __('Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return setTab('changelog');
    }
  }, __('View Changelog', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: assets + 'tachometer.svg',
    title: __('Speed up your site', 'neve'),
    description: __('If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/63-speed-up-your-wordpress-site"
  }, __('Learn More', 'neve'))))), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: assets + 'page.svg',
    title: __('Documentation', 'neve'),
    description: docsCardDescription
  }, wp.element.createElement(Button, {
    isLink: true,
    href: docsURL
  }, __('Go to docs', 'neve'))), !whiteLabel && wp.element.createElement(Fragment, null, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: assets + 'clone.svg',
    title: __('Create a child theme', 'neve'),
    description: __('If you want to make changes to the theme\'s files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
  }, __('Learn More', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: assets + 'arrows.svg',
    title: __('Build a landing page with a drag-and-drop content builder', 'neve'),
    description: __('In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder"
  }, __('Learn More', 'neve'))))));
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* global neveDash */


var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var Button = wp.components.Button;

var Start = function Start(props) {
  function renderLeftCol() {
    if (neveDash.whiteLabel && neveDash.whiteLabel.hideStarterSites) {
      return null;
    }

    return wp.element.createElement("div", {
      className: "col"
    }, _utils_common__WEBPACK_IMPORTED_MODULE_1__["tabs"]['starter-sites'] && wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      icon: neveDash.assets + 'squares.svg',
      title: __('Starter Sites', 'neve'),
      description: neveDash.strings.starterSitesCardDescription
    }, wp.element.createElement(Button, {
      isPrimary: true,
      isLarge: true,
      onClick: function onClick() {
        setTab('starter-sites');
      }
    }, __('Go to Starter Sites', 'neve'))), !neveDash.whiteLabel && wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
      icon: neveDash.assets + 'page.svg',
      title: __('Getting Started? Check help and docs', 'neve'),
      description: __('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        return setTab('help');
      }
    }, __('Go to docs', 'neve'))));
  }

  var setTab = props.setTab;
  return wp.element.createElement(Fragment, null, renderLeftCol(), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    classNames: "customizer-quick-links",
    icon: neveDash.assets + 'compass.svg',
    title: __('Customizer quick links', 'neve')
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
  }, neveDash.version), !neveDash.whiteLabel && wp.element.createElement("img", {
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
var withDispatch = wp.data.withDispatch;

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

  if (neveDash.whiteLabel && neveDash.whiteLabel.hideLicense) {
    return null;
  }

  return wp.element.createElement("aside", {
    className: "sidebar card license"
  }, wp.element.createElement("div", {
    className: "sidebar-section"
  }, neveDash.strings.licenseCardHeading && wp.element.createElement("h4", null, neveDash.strings.licenseCardHeading), !neveDash.whiteLabel && neveDash.strings.licenseCardDescription && wp.element.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: neveDash.strings.licenseCardDescription
    }
  }), wp.element.createElement("form", {
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
  }, "v2.6.2"), !neveDash.whiteLabel && wp.element.createElement("div", {
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
  }, !neveDash.whiteLabel && wp.element.createElement("aside", {
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
  }, __('Upgrade', 'neve')) : wp.element.createElement(Fragment, null, required_actions && wp.element.createElement("span", {
    className: "required",
    dangerouslySetInnerHTML: {
      __html: required_actions
    }
  }), loading && wp.element.createElement(Dashicon, {
    size: 18,
    icon: "update",
    className: "is-loading"
  }), !required_actions && wp.element.createElement(ToggleControl, {
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
  }, description + ' ', documentation.url && wp.element.createElement("a", {
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
/* harmony import */ var _ImportModalNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImportModalNote */ "./src/Components/Onboarding/ImportModalNote.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImportModalError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImportModalError */ "./src/Components/Onboarding/ImportModalError.js");
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
    return wp.element.createElement(_ImportModalNote__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: siteData
    });
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
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
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
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
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
  }, !importing && 'done' !== currentStep && !error ? wp.element.createElement(Fragment, null, renderNote(), wp.element.createElement("hr", null), renderOptions(), wp.element.createElement("hr", null), renderPlugins()) : wp.element.createElement(Fragment, null, error && wp.element.createElement(Fragment, null, wp.element.createElement(_ImportModalError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: error.message || null,
    code: error.code || null
  }), wp.element.createElement("hr", null)), wp.element.createElement(_ImportStepper__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./src/Components/Onboarding/ImportModalError.js":
/*!*******************************************************!*\
  !*** ./src/Components/Onboarding/ImportModalError.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button;
var __ = wp.i18n.__;

var ImportModalError = function ImportModalError(_ref) {
  var message = _ref.message,
      code = _ref.code;
  return wp.element.createElement("div", {
    className: "well error"
  }, message && wp.element.createElement("h3", null, wp.element.createElement(Dashicon, {
    icon: "warning"
  }), wp.element.createElement("span", null, message)), wp.element.createElement("ul", null, wp.element.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: neveDash.onboarding.strings.troubleshooting
    }
  }), wp.element.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: neveDash.onboarding.strings.support
    }
  }), code && wp.element.createElement("li", null, __('Error code', 'neve'), ": ", wp.element.createElement("code", null, code)), wp.element.createElement("li", null, __('Error log', 'neve'), ": ", wp.element.createElement(Button, {
    isLink: true,
    href: neveDash.onboarding.logUrl
  }, neveDash.onboarding.logUrl, wp.element.createElement(Dashicon, {
    icon: "external"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImportModalError);

/***/ }),

/***/ "./src/Components/Onboarding/ImportModalNote.js":
/*!******************************************************!*\
  !*** ./src/Components/Onboarding/ImportModalNote.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button;
var __ = wp.i18n.__;

var ImportModalNote = function ImportModalNote(_ref) {
  var data = _ref.data;
  var external = data['external_plugins'] || null;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(['well', {
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
  }) : wp.element.createElement(Fragment, null, wp.element.createElement("li", null, __('We recommend you backup your website content before attempting a full site import.', 'neve')), wp.element.createElement("li", null, __('Some of the demo images will not be imported and will be replaced by placeholder images.', 'neve')), data['unsplash_gallery'] && wp.element.createElement("li", null, wp.element.createElement("a", {
    href: data['unsplash_gallery']
  }, __('Here is our own collection of related images you can use for your site.', 'neve'))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImportModalNote);

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
  }, wp.element.createElement("h2", null, __('Ready to use pre-built websites with 1-click installation', 'neve')), wp.element.createElement("p", null, neveDash.strings.starterSitesTabDescription), isOnboarding && wp.element.createElement(Button, {
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
      setOnboardingState(false);
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
/* harmony import */ var _utils_site_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/site-import */ "./src/utils/site-import.js");
/* harmony import */ var _ImportModalNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImportModalNote */ "./src/Components/Onboarding/ImportModalNote.js");
/* harmony import */ var _ImportModalError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportModalError */ "./src/Components/Onboarding/ImportModalError.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */




var __ = wp.i18n.__;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;
var withDispatch = wp.data.withDispatch;

var Migration = function Migration(_ref) {
  var data = _ref.data,
      dismissMigration = _ref.dismissMigration,
      setToast = _ref.setToast;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      migrating = _useState4[0],
      setMigrating = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      frontPageID = _useState8[0],
      setFrontPageID = _useState8[1];

  var closeModal = function closeModal() {
    if ('done' === migrating) {
      dismissMigration();
    }

    setModalOpen(false);
    setError(null);
    setMigrating(false);
  };

  function startMigration() {
    var plugins = Object.keys(data.mandatory_plugins).reduce(function (p, key) {
      p[key] = true;
      return p;
    }, {});
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_1__["installPlugins"])(plugins).then(function (r) {
      setMigrating(true);

      if (!r.success) {
        setError({
          code: r.data || null,
          message: __('Something went wrong while installing the necessary plugins.', 'neve')
        });
        setMigrating(false);
        return false;
      }

      var template = data.template,
          template_name = data.template_name;
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/migrate_frontpage', {
        template: template,
        template_name: template_name
      }).then(function (r) {
        if (!r.success) {
          setError({
            code: r.data || null,
            message: __('Something went wrong while importing the website content.', 'neve')
          });
          setMigrating(false);
          return false;
        }

        setFrontPageID(r.data);
        setMigrating('done');
      });
    });
  }

  var renderModal = function renderModal() {
    return wp.element.createElement(Modal, {
      className: "ob-import-modal migration",
      title: __('Migrate', 'neve') + ' ' + data.theme_name,
      onRequestClose: closeModal,
      shouldCloseOnClickOutside: !migrating,
      isDismissible: !migrating
    }, wp.element.createElement(Fragment, null, wp.element.createElement("div", {
      className: "modal-body"
    }, error && wp.element.createElement(_ImportModalError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: error.message || null,
      code: error.code || null
    }), false === migrating && !error && wp.element.createElement(Fragment, null, wp.element.createElement(_ImportModalNote__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data
    }), data.mandatory_plugins && wp.element.createElement(Fragment, null, wp.element.createElement("hr", null), wp.element.createElement("h3", null, __('The following plugins will be installed', 'neve'), ":"), wp.element.createElement("ul", null, Object.keys(data.mandatory_plugins).map(function (k) {
      return wp.element.createElement("li", null, "- ", data.mandatory_plugins[k]);
    })))), 'done' === migrating && wp.element.createElement("p", {
      className: "import-result"
    }, __('Content was successfully imported. Enjoy your new site!', 'neve')), true === migrating && wp.element.createElement("div", {
      className: "loading"
    }, wp.element.createElement(Dashicon, {
      icon: "update",
      size: 50
    }), wp.element.createElement("h3", null, __('Migrating', 'neve'), "..."))), (!migrating || 'done' === migrating) && wp.element.createElement("div", {
      className: "modal-footer"
    }, wp.element.createElement(Button, {
      isSecondary: 'done' !== migrating,
      isLink: 'done' === migrating,
      className: 'done' === migrating ? 'close' : null,
      onClick: closeModal
    }, 'done' === migrating ? __('Close', 'neve') : __('Cancel', 'neve')), !error && 'done' !== migrating ? wp.element.createElement(Button, {
      isPrimary: true,
      onClick: function onClick() {
        startMigration();
      }
    }, __('Start Migration', 'neve')) : wp.element.createElement(Fragment, null, wp.element.createElement(Button, {
      isSecondary: true,
      href: "".concat(neveDash.onboarding.homeUrl, "/wp-admin/post.php?post=").concat(frontPageID, "&action=elementor")
    }, __('Edit Content', 'neve')), wp.element.createElement(Button, {
      isPrimary: true,
      href: neveDash.onboarding.homeUrl
    }, __('View Website', 'neve'))))));
  };

  return wp.element.createElement("div", {
    className: "ob-migration"
  }, modalOpen && renderModal(), wp.element.createElement("h2", null, data.heading), wp.element.createElement("p", null, data.description), wp.element.createElement("div", {
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
  }, data.theme_name))), wp.element.createElement("div", {
    className: "actions"
  }, wp.element.createElement(Button, {
    isPrimary: true,
    onClick: function onClick() {
      setModalOpen(true);
      return false;
    }
  }, __('Migrate', 'neve') + ' ' + data.theme_name), wp.element.createElement(Button, {
    isSecondary: true,
    onClick: function onClick() {
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(neveDash.onboarding.root + '/dismiss_migration', {
        theme_mod: data.theme_mod
      }).then(function (r) {
        if (!r.success) {
          setToast(__('Something went wrong. Please reload the page and try again.', 'neve'));
          return false;
        }

        setToast(__('Dismissed', 'neve'));
        dismissMigration();
      });
    }
  }, __('Dismiss', 'neve'))));
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-onboarding'),
      setMigrationData = _dispatch.setMigrationData;

  var _dispatch2 = dispatch('neve-dashboard'),
      _setToast = _dispatch2.setToast;

  return {
    dismissMigration: function dismissMigration() {
      setMigrationData(null);
    },
    setToast: function setToast(message) {
      _setToast(message);
    }
  };
})(Migration)); // export default Migration;

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
  }), !neveDash.whiteLabel && wp.element.createElement("aside", {
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
/*! exports provided: addUrlHash, getTabHash, tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    label: neveDash.strings.proTabTitle,
    render: function render(setTab) {
      return wp.element.createElement(_Components_Content_Pro__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  };
  delete tabs['free-pro'];
}

if (neveDash.whiteLabel) {
  delete tabs.changelog;
  delete tabs.plugins;

  if (neveDash.whiteLabel.hideStarterSites) {
    delete tabs['starter-sites'];
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvSW1wb3J0TW9kYWxFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsTm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL01pZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1ByZXZpZXdGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1N0YXJ0ZXJTaXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz9lYzdjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NpdGUtaW1wb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIndwIiwiZWxlbWVudCIsIkRhc2hpY29uIiwiY29tcG9uZW50cyIsIkFjY29yZGlvbiIsInByb3BzIiwiaXNPcGVuIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImNsYXNzbmFtZXMiLCJoZWlnaHQiLCJkYXRhIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkFwcCIsInNldFNldHRpbmdzIiwidG9hc3QiLCJjdXJyZW50VGFiIiwic2V0VGFiIiwiaXNPbmJvYXJkaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXR0aW5ncyIsImFwaSIsImxvYWRQcm9taXNlIiwidGhlbiIsIm1vZGVscyIsIlNldHRpbmdzIiwiZmV0Y2giLCJyIiwid3JhcENsYXNzZXMiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiZ2V0T25ib2FyZGluZ1N0YXR1cyIsIkNhcmQiLCJpY29uIiwiaWNvbkFsdCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lcyIsIl9fIiwiaTE4biIsIkNoYW5nZWxvZyIsIm5ldmVEYXNoIiwiY2hhbmdlbG9nIiwiY2hhbmdlbG9nUHJvIiwic2hvd0ZvclBybyIsInNldFNob3dGb3JQcm8iLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJkb2NzVVJMIiwic3VwcG9ydFVSTCIsIndoaXRlTGFiZWwiLCJhc3NldHMiLCJzdHJpbmdzIiwic3VwcG9ydENhcmREZXNjcmlwdGlvbiIsImRvY3NDYXJkRGVzY3JpcHRpb24iLCJhZ2VuY3lVUkwiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaWQiLCJTdGFydCIsInJlbmRlckxlZnRDb2wiLCJoaWRlU3RhcnRlclNpdGVzIiwidGFicyIsInN0YXJ0ZXJTaXRlc0NhcmREZXNjcmlwdGlvbiIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJzaXRlcyIsInNldFNpdGVzIiwic2V0VXBzZWxscyIsInNldE1pZ3JhdGlvbkRhdGEiLCJlcnJvciIsInNldEVycm9yIiwiZ2V0Iiwib25ib2FyZGluZyIsInJvb3QiLCJzdWNjZXNzIiwicmVtb3RlIiwidXBzZWxsIiwibWlncmF0ZV9kYXRhIiwidXBzZWxscyIsIm1pZ3JhdGlvbkRhdGEiLCJnZXRTaXRlcyIsIkZlYXR1cmVSb3ciLCJpbkxpdGUiLCJ0b29sdGlwIiwidG9nZ2xlVG9vbHRpcCIsInNob3dUb29sdGlwIiwiaGlkZVRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiZ2V0VGFiSGFzaCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiaGVhZGVyIiwiYWRkVXJsSGFzaCIsImxhYmVsIiwiTGljZW5zZUNhcmQiLCJpc1Zpc2libGUiLCJjaGFuZ2VUaWVyIiwibGljZW5zZSIsInByb0FwaSIsInZhbGlkIiwia2V5Iiwic2V0S2V5Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwic2V0VmFsaWQiLCJleHBpcmF0aW9uIiwic2V0RXhwaXJhdGlvbiIsInNldFRvYXN0IiwidG9hc3RUeXBlIiwic2V0VG9hc3RUeXBlIiwidG9nZ2xlTGljZW5zZSIsInRvRG8iLCJzZW5kIiwiYWN0aW9uIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidGllciIsImhpZGVMaWNlbnNlIiwibGljZW5zZUNhcmRIZWFkaW5nIiwibGljZW5zZUNhcmREZXNjcmlwdGlvbiIsIl9faHRtbCIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiY2hhbmdlTGljZW5zZVRpZXIiLCJuZXdUaWVyIiwiTG9hZGluZyIsIkFycmF5IiwiZnJvbSIsIm5vdGlmaWNhdGlvbnMiLCJUb2dnbGVDb250cm9sIiwiTW9kdWxlQ2FyZCIsImNoYW5nZU1vZHVsZVN0YXR1cyIsImdldE1vZHVsZVN0YXR1cyIsIm5pY2VuYW1lIiwiYXZhaWxhYmlsaXR5TGV2ZWwiLCJvcHRpb25zIiwib3JkZXIiLCJkb2N1bWVudGF0aW9uIiwicmVxdWlyZWRfYWN0aW9ucyIsInVwZ3JhZGVMaW5rcyIsInJlbmRlck9wdGlvbnNBY2NvcmRpb25zIiwiZ3JvdXAiLCJvcHRpb25TbHVnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2hhbmdlT3B0aW9uIiwidXJsIiwiZ2V0TGljZW5zZVRpZXIiLCJOb3RpZmljYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjdGEiLCJ1cGRhdGUiLCJpblByb2dyZXNzIiwic2V0SW5Qcm9ncmVzcyIsImRvbmUiLCJzZXREb25lIiwidXBkYXRlRW50aXR5IiwiYXJncyIsImV4ZWN1dGVBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVwZGF0ZXMiLCJhamF4IiwicGF0aCIsInBsdWdpbiIsIk5vdGlmaWNhdGlvbnMiLCJQb3BvdmVyIiwiRWRpdG9yU2VsZWN0b3IiLCJvblNlYXJjaCIsImVkaXRvciIsInNldEN1cnJlbnRFZGl0b3IiLCJuaWNlTmFtZSIsInRvZ2dsZURyb3Bkb3duIiwiZ2V0Q3VycmVudEVkaXRvciIsIk1vZGFsIiwiSW1wb3J0TW9kYWwiLCJzZXRNb2RhbCIsInNldFNpdGUiLCJzaXRlRGF0YSIsImNvbnRlbnQiLCJjdXN0b21pemVyIiwid2lkZ2V0cyIsImdlbmVyYWwiLCJzZXRHZW5lcmFsIiwicGx1Z2luc1Byb2dyZXNzIiwic2V0UGx1Z2luc1Byb2dyZXNzIiwiY29udGVudFByb2dyZXNzIiwic2V0Q29udGVudFByb2dyZXNzIiwiY3VzdG9taXplclByb2dyZXNzIiwic2V0Q3VzdG9taXplclByb2dyZXNzIiwid2lkZ2V0c1Byb2dyZXNzIiwic2V0V2lkZ2V0c1Byb2dyZXNzIiwiZnJvbnRQYWdlSUQiLCJzZXRGcm9udFBhZ2VJRCIsImN1cnJlbnRTdGVwIiwic2V0Q3VycmVudFN0ZXAiLCJpbXBvcnRpbmciLCJzZXRJbXBvcnRpbmciLCJwbHVnaW5PcHRpb25zIiwic2V0UGx1Z2luT3B0aW9ucyIsImdldFBsdWdpbk9wdGlvbnMiLCJtYW5kYXRvcnkiLCJvcHRpb25hbCIsImRlZmF1bHRPZmYiLCJyZW5kZXJOb3RlIiwicmVuZGVyT3B0aW9ucyIsInJlbmRlclBsdWdpbnMiLCJhbGxQbHVnaW5zIiwicnVuSW1wb3J0IiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwicnVuSW1wb3J0Q29udGVudCIsImluc3RhbGxQbHVnaW5zIiwiaGFuZGxlRXJyb3IiLCJydW5JbXBvcnRDdXN0b21pemVyIiwiaW1wb3J0Q29udGVudCIsImNvbnRlbnRGaWxlIiwic291cmNlIiwiZnJvbnRQYWdlIiwic2hvcFBhZ2VzIiwiZGVtb1NsdWciLCJydW5JbXBvcnRXaWRnZXRzIiwiaW1wb3J0TW9kcyIsImltcG9ydERvbmUiLCJpbXBvcnRXaWRnZXRzIiwic3RlcCIsImNvZGUiLCJjbG9zZU1vZGFsIiwiZGlzbWlzc1NpdGVEYXRhIiwiYWxsT3B0aW9uc09mZiIsImV2ZXJ5IiwiayIsImVkaXRMaW5rTWFwIiwiaG9tZVVybCIsImVkaXRMaW5rIiwiZ2V0Q3VycmVudFNpdGUiLCJzZXRJbXBvcnRNb2RhbFN0YXR1cyIsInNldEN1cnJlbnRTaXRlIiwiSW1wb3J0TW9kYWxFcnJvciIsInRyb3VibGVzaG9vdGluZyIsInN1cHBvcnQiLCJsb2dVcmwiLCJJbXBvcnRNb2RhbE5vdGUiLCJleHRlcm5hbCIsIkltcG9ydFN0ZXBwZXIiLCJwcm9ncmVzcyIsIndpbGxEbyIsInN0ZXBzTWFwIiwiT25ib2FyZGluZyIsInByZXZpZXdPcGVuIiwiY3VycmVudFNpdGVEYXRhIiwiaW1wb3J0TW9kYWwiLCJjYW5jZWxPbmJvYXJkaW5nIiwibWlncmF0aW9uIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm1heFNob3duIiwic2V0TWF4U2hvd24iLCJmaWx0ZXJTaXRlcyIsInZhbHVlcyIsImZ1c2UiLCJGdXNlIiwiaW5jbHVkZVNjb3JlIiwic2VhcmNoIiwiZ2V0QWxsU2l0ZXMiLCJzaXRlc0RhdGEiLCJ1cHNlbGxzRGF0YSIsInJlbmRlclNpdGVzIiwiYWxsRGF0YSIsInNpdGUiLCJnZXRTaXRlTmF2IiwicHJldiIsImFsbFNpdGVzIiwicG9zaXRpb24iLCJpbmRleE9mIiwicmVuZGVyTWlncmF0aW9uIiwic3RhcnRlclNpdGVzVGFiRGVzY3JpcHRpb24iLCJxdWVyeSIsIndpZHRoIiwiZGlzcGxheSIsInNldE9uYm9hcmRpbmdTdGF0ZSIsImdldFVwc2VsbHMiLCJnZXRQcmV2aWV3U3RhdHVzIiwiZ2V0SW1wb3J0TW9kYWxTdGF0dXMiLCJnZXRNaWdyYXRpb25EYXRhIiwiTWlncmF0aW9uIiwiZGlzbWlzc01pZ3JhdGlvbiIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsIm1pZ3JhdGluZyIsInNldE1pZ3JhdGluZyIsInN0YXJ0TWlncmF0aW9uIiwibWFuZGF0b3J5X3BsdWdpbnMiLCJyZWR1Y2UiLCJwIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZV9uYW1lIiwicmVuZGVyTW9kYWwiLCJ0aGVtZV9uYW1lIiwiaGVhZGluZyIsInNjcmVlbnNob3QiLCJ0aGVtZV9tb2QiLCJQcmV2aWV3RnJhbWUiLCJuZXh0Iiwic2V0UHJldmlldyIsInNldFByZXZpZXdTdGF0dXMiLCJTdGFydGVyU2l0ZUNhcmQiLCJwYXlsb2FkIiwicHJldmlld1N0YXR1cyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImltcG9ydE1vZGFsU3RhdHVzIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJjdXJyZW50U2l0ZSIsIklucHV0Rm9ybSIsImdldE9wdGlvbiIsInNldFZhbHVlIiwiY2hhbmdlU2V0dGluZyIsImNoYW5nZU1vZHVsZU9wdGlvbiIsIlRvZ2dsZSIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJpbnN0YWxsUGx1Z2luIiwib2siLCJhbGlnbkl0ZW1zIiwiZXJyIiwiU2lkZWJhciIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwib25ib2FyZGluZ1JlZHVjZXIiLCJvbmJvYXJkaW5nQWN0aW9ucyIsIm9uYm9hcmRpbmdTZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGVTbHVnIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInByb1RhYlRpdGxlIiwib3B0aW9uIiwibW9kdWxlIiwibW9kZWwiLCJzYXZlIiwiaXNWYWxpZCIsInJvdXRlIiwic2ltcGxlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9wdGlvbnNBcnJheSIsInBsdWdpbkFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0NBQWtDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxjQUFpQixDQUFDMEssV0FBRCxFQUFpQjtBQUM5QyxTQUFPbFIsa0RBQUksQ0FBQ3hHLFFBQVEsQ0FBQzhELFVBQVQsQ0FBb0JDLElBQXBCLEdBQTJCLGtCQUE1QixFQUFnRDJULFdBQWhELENBQVg7QUFDQSxDQUZNO0FBSUEsSUFBTXZLLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3pQLElBQUQsRUFBVTtBQUN0QyxTQUFPOEksa0RBQUksQ0FBQ3hHLFFBQVEsQ0FBQzhELFVBQVQsQ0FBb0JDLElBQXBCLEdBQTJCLGlCQUE1QixFQUErQ3JHLElBQS9DLENBQVg7QUFDQSxDQUZNLEM7Ozs7Ozs7Ozs7O0FDZlAsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiLi9idWlsZC9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyoqXG4gKiBGdXNlLmpzIHY1LjEuMCAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGJpdGFwU2NvcmUoXG4gIHBhdHRlcm4sXG4gIHsgZXJyb3JzID0gMCwgY3VycmVudExvY2F0aW9uID0gMCwgZXhwZWN0ZWRMb2NhdGlvbiA9IDAsIGRpc3RhbmNlID0gMTAwIH1cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBtYXRjaGVkSW5kaWNlZChtYXRjaG1hc2sgPSBbXSwgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSkge1xuICBsZXQgbWF0Y2hlZEluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBlbmRdKTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gKGktMSAtIHN0YXJ0KSArIDEgPT4gaSAtIHN0YXJ0XG4gIGlmIChtYXRjaG1hc2tbaSAtIDFdICYmIGkgLSBzdGFydCA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkSW5kaWNlc1xufVxuXG5mdW5jdGlvbiBiaXRhcFNlYXJjaChcbiAgdGV4dCxcbiAgcGF0dGVybixcbiAgcGF0dGVybkFscGhhYmV0LFxuICB7XG4gICAgbG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gMTAwLFxuICAgIHRocmVzaG9sZCA9IDAuNixcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IGZhbHNlLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBmYWxzZVxuICB9XG4pIHtcbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbik7XG5cbiAgLy8gYSBtYXNrIG9mIHRoZSBtYXRjaGVzXG4gIGNvbnN0IG1hdGNoTWFzayA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRMZW47IGkgKz0gMSkge1xuICAgIG1hdGNoTWFza1tpXSA9IDA7XG4gIH1cblxuICBpZiAoYmVzdExvY2F0aW9uICE9PSAtMSkge1xuICAgIGxldCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiAwLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KTtcbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuXG4gICAgLy8gV2hhdCBhYm91dCBpbiB0aGUgb3RoZXIgZGlyZWN0aW9uPyAoc3BlZWQgdXApXG4gICAgYmVzdExvY2F0aW9uID0gdGV4dC5sYXN0SW5kZXhPZihwYXR0ZXJuLCBleHBlY3RlZExvY2F0aW9uICsgcGF0dGVybkxlbik7XG5cbiAgICBpZiAoYmVzdExvY2F0aW9uICE9PSAtMSkge1xuICAgICAgbGV0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogMCxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBiZXN0TG9jYXRpb24sXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlXG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG5cbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG5cbiAgY29uc3QgbWFzayA9IDEgPDwgKHBhdHRlcm5MZW4gPD0gMzEgPyBwYXR0ZXJuTGVuIC0gMSA6IDMwKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMDtcbiAgICBsZXQgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNoYXJNYXRjaCkge1xuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoKGJpdEFycltqICsgMV0gPDwgMSkgfCAxKSAmIGNoYXJNYXRjaDtcblxuICAgICAgLy8gU3Vic2VxdWVudCBwYXNzZXM6IGZ1enp5IG1hdGNoXG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICBiaXRBcnJbal0gfD1cbiAgICAgICAgICAoKGxhc3RCaXRBcnJbaiArIDFdIHwgbGFzdEJpdEFycltqXSkgPDwgMSkgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChiaXRBcnJbal0gJiBtYXNrKSB7XG4gICAgICAgIGZpbmFsU2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IGkgKyAxLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6ICFmaW5hbFNjb3JlID8gMC4wMDEgOiBmaW5hbFNjb3JlXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgcmVzdWx0Lm1hdGNoZWRJbmRpY2VzID0gbWF0Y2hlZEluZGljZWQobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBwYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBsZXQgbWFzayA9IHt9O1xuICBsZXQgbGVuID0gcGF0dGVybi5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldID0gMDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtYXNrW3BhdHRlcm4uY2hhckF0KGkpXSB8PSAxIDw8IChsZW4gLSBpIC0gMSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gICAgICBsb2NhdGlvbiA9IDAsXG4gICAgICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gICAgICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgICAgIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAgICAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gICAgICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgICAgIGRpc3RhbmNlID0gMTAwLFxuICAgICAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gICAgICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICAgICAgdGhyZXNob2xkID0gMC42LFxuICAgICAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgY29tcGFyaXNvbnMgc2hvdWxkIGJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgICAvLyBXaGVuIHRydWUsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAgICAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IGZhbHNlLFxuICAgICAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSAxLFxuXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IGZhbHNlXG4gICAgfVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH07XG5cbiAgICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXR0ZXJuIGxlbmd0aCBleGNlZWRzIG1heCBvZiAke01BWF9CSVRTfS5gKVxuICAgIH1cblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5wYXR0ZXJuQWxwaGFiZXQgPSBwYXR0ZXJuQWxwaGFiZXQodGhpcy5wYXR0ZXJuKTtcbiAgfVxuXG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuICAgIHJldHVybiB0aGlzLnNlYXJjaEluU3RyaW5nKHRleHQpXG4gIH1cblxuICBzZWFyY2hJblN0cmluZyh0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0Lm1hdGNoZWRJbmRpY2VzID0gW1swLCB0ZXh0Lmxlbmd0aCAtIDFdXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aFxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIGJpdGFwU2VhcmNoKHRleHQsIHRoaXMucGF0dGVybiwgdGhpcy5wYXR0ZXJuQWxwaGFiZXQsIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGluY2x1ZGVNYXRjaGVzXG4gICAgfSlcbiAgfVxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcbi8vIE1hdGNoIHR5cGU6IGV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBpbmNsdWRlIGBmaWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4gPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gXCInXCI7XG5cbmNvbnN0IHNhbml0aXplID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZShwYXR0ZXJuKTtcbiAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2Yoc2FuaXRpemVkUGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA+IC0xO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgZXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuLFxuICBzYW5pdGl6ZSxcbiAgbWF0Y2hcbn07XG5cbi8vIFRva2VuOiAhZmlyZVxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYGZpcmVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQxID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09ICchJztcblxuY29uc3Qgc2FuaXRpemUkMSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2gkMSA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQxKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pID09PSAtMTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQxLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMSxcbiAgbWF0Y2g6IG1hdGNoJDFcbn07XG5cbi8vIFRva2VuOiBeZmlsZVxuLy8gTWF0Y2ggdHlwZTogcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBmaWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnXic7XG5cbmNvbnN0IHNhbml0aXplJDIgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoJDIgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMihwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIHByZWZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDIsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQyLFxuICBtYXRjaDogbWF0Y2gkMlxufTtcblxuLy8gVG9rZW46ICFeZmlyZVxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBmaXJlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMyA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnIScgJiYgcGF0dGVybi5jaGFyQXQoMSkgPT0gJ14nO1xuXG5jb25zdCBzYW5pdGl6ZSQzID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDIpO1xuXG5jb25zdCBtYXRjaCQzID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDMocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDMsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQzLFxuICBtYXRjaDogbWF0Y2gkM1xufTtcblxuLy8gVG9rZW46IC5maWxlJFxuLy8gTWF0Y2ggdHlwZTogc3VmZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQ0ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgPT0gJyQnO1xuXG5jb25zdCBzYW5pdGl6ZSQ0ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDAsIHBhdHRlcm4ubGVuZ3RoIC0gMSk7XG5cbmNvbnN0IG1hdGNoJDQgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkNChwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBzdWZmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQ0LFxuICBzYW5pdGl6ZTogc2FuaXRpemUkNCxcbiAgbWF0Y2g6IG1hdGNoJDRcbn07XG5cbi8vIFRva2VuOiAhLmZpbGUkXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDUgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnICYmIHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgPT0gJyQnO1xuXG5jb25zdCBzYW5pdGl6ZSQ1ID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyaW5nKDEsIHBhdHRlcm4ubGVuZ3RoIC0gMSk7XG5cbmNvbnN0IG1hdGNoJDUgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkNShwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDUsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQ1LFxuICBtYXRjaDogbWF0Y2gkNVxufTtcblxuY29uc3QgSU5GSU5JVFkgPSAxIC8gMDtcblxuY29uc3QgaXNBcnJheSA9ICh2YWx1ZSkgPT5cbiAgIUFycmF5LmlzQXJyYXlcbiAgICA/IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4vLyBBZGFwdGVkIGZyb206XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL2Y0Y2EzOTZhNzk2NDM1NDIyYmQ0ZmQ0MWZhZGJkMjI1ZWRkZGYxNzUvLmludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuY29uc3QgYmFzZVRvU3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKyAnJztcbiAgcmV0dXJuIHJlc3VsdCA9PSAnMCcgJiYgMSAvIHZhbHVlID09IC1JTkZJTklUWSA/ICctMCcgOiByZXN1bHRcbn07XG5cbmNvbnN0IHRvU3RyaW5nID0gKHZhbHVlKSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKSk7XG5cbmNvbnN0IGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG5jb25zdCBpc051bWJlciA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcblxuY29uc3QgaXNEZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmNvbnN0IHF1ZXJ5ZnkgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5zcGxpdCgnfCcpLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkuc3BsaXQoLyArL2cpKTtcblxuLyoqXG4gKiBDb21tYW5kLWxpa2Ugc2VhcmNoaW5nXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogR2l2ZW4gbXVsdGlwbGUgc2VhcmNoIHRlcm1zIGRlbGltaXRlZCBieSBzcGFjZXMuZS5nLiBgXmpzY3JpcHQgLnB5dGhvbiQgcnVieSAhamF2YWAsXG4gKiBzZWFyY2ggaW4gYSBnaXZlbiB0ZXh0LlxuICpcbiAqIFNlYXJjaCBzeW50YXg6XG4gKlxuICogfCBUb2tlbiAgICAgICB8IE1hdGNoIHR5cGUgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBganNjcmlwdGAgICB8IGZ1enp5LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBtYXRjaCBganNjcmlwdGAgICAgICAgICAgICAgfFxuICogfCBgJ3B5dGhvbmAgICB8IGV4YWN0LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBpbmNsdWRlIGBweXRob25gICAgICAgICAgICAgfFxuICogfCBgIXJ1YnlgICAgICB8IGludmVyc2UtZXhhY3QtbWF0Y2ggICAgICAgIHwgSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgcnVieWAgICAgICAgfFxuICogfCBgXmphdmFgICAgICB8IHByZWZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBqYXZhYCAgICAgICAgICAgfFxuICogfCBgIV5lYXJsYW5nYCB8IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZWFybGFuZ2AgfFxuICogfCBgLmpzJGAgICAgICB8IHN1ZmZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmpzYCAgICAgICAgICAgICAgfFxuICogfCBgIS5nbyRgICAgICB8IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5nb2AgICAgICAgfFxuICpcbiAqIEEgc2luZ2xlIHBpcGUgY2hhcmFjdGVyIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nXG4gKiBxdWVyeSBtYXRjaGVzIGVudHJpZXMgdGhhdCBzdGFydCB3aXRoIGBjb3JlYCBhbmQgZW5kIHdpdGggZWl0aGVyYGdvYCwgYHJiYCxcbiAqIG9yYHB5YC5cbiAqXG4gKiBgYGBcbiAqIF5jb3JlIGdvJCB8IHJiJCB8IHB5JFxuICogYGBgXG4gKi9cbmNsYXNzIEV4dGVuZGVkU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlIH0gPSBvcHRpb25zO1xuICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gQSA8cGF0dGVybj46PEJpdGFwU2VhcmNoPiBrZXktdmFsdWUgcGFpciBmb3Igb3B0aW1pemluZyBzZWFyY2hpbmdcbiAgICB0aGlzLl9mdXp6eUNhY2hlID0ge307XG5cbiAgICBpZiAoaXNTdHJpbmcocGF0dGVybikgJiYgcGF0dGVybi50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeWZ5KHRoaXMucGF0dGVybik7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXRoaXMucXVlcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcblxuICAgIHRleHQgPSB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBtYXRjaEZvdW5kID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgcUxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IHFMZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGFydHMgPSBxdWVyeVtpXTtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgbWF0Y2hGb3VuZCA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gcGFydHMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHBhcnRzW2pdO1xuICAgICAgICByZXN1bHQgPSB0aGlzLl9zZWFyY2godG9rZW4sIHRleHQpO1xuICAgICAgICBpZiAoIXJlc3VsdC5pc01hdGNoKSB7XG4gICAgICAgICAgLy8gQU5EIGNvbmRpdGlvbiwgc2hvcnQtY2lyY3VpdCBhbmQgbW92ZSBvbiB0byBuZXh0IHBhcnRcbiAgICAgICAgICBtYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG1hdGNoRm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxuXG4gIF9zZWFyY2gocGF0dGVybiwgdGV4dCkge1xuICAgIGlmIChleGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKHByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gcHJlZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VTdWZmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChzdWZmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHN1ZmZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWFyY2hlciA9IHRoaXMuX2Z1enp5Q2FjaGVbcGF0dGVybl07XG4gICAgICBpZiAoIXNlYXJjaGVyKSB7XG4gICAgICAgIHNlYXJjaGVyID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2Z1enp5Q2FjaGVbcGF0dGVybl0gPSBzZWFyY2hlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWFyY2hlci5zZWFyY2hJblN0cmluZyh0ZXh0KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBOR1JBTV9MRU4gPSAzO1xuXG5mdW5jdGlvbiBuZ3JhbShcbiAgdGV4dCxcbiAgeyBuID0gTkdSQU1fTEVOLCBwYWQgPSB0cnVlLCBzb3J0ID0gZmFsc2UgfVxuKSB7XG4gIGxldCBuR3JhbXMgPSBbXTtcblxuICBpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cblxuICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICBpZiAocGFkKSB7XG4gICAgdGV4dCA9IGAgJHt0ZXh0fSBgO1xuICB9XG5cbiAgbGV0IGluZGV4ID0gdGV4dC5sZW5ndGggLSBuICsgMTtcbiAgaWYgKGluZGV4IDwgMSkge1xuICAgIHJldHVybiBuR3JhbXNcbiAgfVxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgbkdyYW1zW2luZGV4XSA9IHRleHQuc3Vic3RyKGluZGV4LCBuKTtcbiAgfVxuXG4gIGlmIChzb3J0KSB7XG4gICAgbkdyYW1zLnNvcnQoKGEsIGIpID0+IChhID09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDEpKTtcbiAgfVxuXG4gIHJldHVybiBuR3JhbXNcbn1cblxuLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxuZnVuY3Rpb24gdW5pb24gKGFycjEsIGFycjIpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoICYmIGogPCBhcnIyLmxlbmd0aCkge1xuICAgIGxldCBpdGVtMSA9IGFycjFbaV07XG4gICAgbGV0IGl0ZW0yID0gYXJyMltqXTtcblxuICAgIGlmIChpdGVtMSA8IGl0ZW0yKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMSk7XG4gICAgICBpICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMiA8IGl0ZW0xKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMik7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0yKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goYXJyMVtpXSk7XG4gICAgaSArPSAxO1xuICB9XG5cbiAgd2hpbGUgKGogPCBhcnIyLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGFycjJbal0pO1xuICAgIGogKz0gMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gQXNzdW1lcyBhcnJheXMgYXJlIHNvcnRlZFxuZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGFycjEsIGFycjIpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBqID0gMDtcblxuICB3aGlsZSAoaSA8IGFycjEubGVuZ3RoICYmIGogPCBhcnIyLmxlbmd0aCkge1xuICAgIGxldCBpdGVtMSA9IGFycjFbaV07XG4gICAgbGV0IGl0ZW0yID0gYXJyMltqXTtcblxuICAgIGlmIChpdGVtMSA9PSBpdGVtMikge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTEpO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTEgPCBpdGVtMikge1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTEgPiBpdGVtMikge1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBqYWNjYXJkRGlzdGFuY2UobkdyYW0xLCBuR3JhbTIpIHtcbiAgbGV0IG5HcmFtVW5pb24gPSB1bmlvbihuR3JhbTEsIG5HcmFtMik7XG4gIGxldCBuR3JhbUludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbihuR3JhbTEsIG5HcmFtMik7XG5cbiAgcmV0dXJuIDEgLSBuR3JhbUludGVyc2VjdGlvbi5sZW5ndGggLyBuR3JhbVVuaW9uLmxlbmd0aFxufVxuXG5jbGFzcyBOR3JhbVNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIG9wdGlvbnMgPSB7IHRocmVzaG9sZDogMC42IH0pIHtcbiAgICAvLyBDcmVhdGUgdGhlIG5ncmFtLCBhbmQgc29ydCBpdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5wYXR0ZXJuTmdyYW0gPSBuZ3JhbShwYXR0ZXJuLCB7IHNvcnQ6IHRydWUgfSk7XG4gIH1cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dE5ncmFtID0gdmFsdWUubmc7XG4gICAgaWYgKCF0ZXh0TmdyYW0pIHtcbiAgICAgIHRleHROZ3JhbSA9IG5ncmFtKHZhbHVlLiQsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgIHZhbHVlLm5nID0gdGV4dE5ncmFtO1xuICAgIH1cblxuICAgIGxldCBqYWNhcmRSZXN1bHQgPSBqYWNjYXJkRGlzdGFuY2UodGhpcy5wYXR0ZXJuTmdyYW0sIHRleHROZ3JhbSk7XG5cbiAgICBjb25zdCBpc01hdGNoID0gamFjYXJkUmVzdWx0IDwgdGhpcy5vcHRpb25zLnRocmVzaG9sZDtcblxuICAgIHJldHVybiB7XG4gICAgICBzY29yZTogaXNNYXRjaCA/IGphY2FyZFJlc3VsdCA6IDEsXG4gICAgICBpc01hdGNoXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IF9nZXQgPSAob2JqLCBwYXRoKSA9PiB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgZ290dGVuIHRvIHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkb3RJbmRleCA9IHBhdGguaW5kZXhPZignLicpO1xuXG4gICAgICBsZXQga2V5ID0gcGF0aDtcbiAgICAgIGxldCByZW1haW5pbmcgPSBudWxsO1xuXG4gICAgICBpZiAoZG90SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGtleSA9IHBhdGguc2xpY2UoMCwgZG90SW5kZXgpO1xuICAgICAgICByZW1haW5pbmcgPSBwYXRoLnNsaWNlKGRvdEluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIGlmICghcmVtYWluaW5nICYmIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgIGxpc3QucHVzaCh0b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIF9nZXQodmFsdWVbaV0sIHJlbWFpbmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlbWFpbmluZykge1xuICAgICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICAgIF9nZXQodmFsdWUsIHJlbWFpbmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX2dldChvYmosIHBhdGgpO1xuXG4gIGlmIChhcnIpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbMF1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5kZXgoXG4gIGtleXMsXG4gIGxpc3QsXG4gIHsgZ2V0Rm4gPSBnZXQsIG5ncmFtcyA9IGZhbHNlIH0gPSB7fVxuKSB7XG4gIGxldCBpbmRleGVkTGlzdCA9IFtdO1xuXG4gIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICBpZiAoaXNTdHJpbmcobGlzdFswXSkpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBsaXN0XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbGlzdFtpXTtcblxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgLy8gICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCByZWNvcmQgPSB7XG4gICAgICAgICAgJDogdmFsdWUsXG4gICAgICAgICAgaWR4OiBpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgIHJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIGNvbnN0IGtleXNMZW4gPSBrZXlzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBsZXQgaXRlbSA9IGxpc3RbaV07XG5cbiAgICAgIGxldCByZWNvcmQgPSB7IGlkeDogaSwgJDoge30gfTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzTGVuOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbal07XG4gICAgICAgIGxldCB2YWx1ZSA9IGdldEZuKGl0ZW0sIGtleSk7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGxldCBzdWJSZWNvcmRzID0gW107XG4gICAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBhcnJheUluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGFycmF5SW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgICAgICAgLy8gICB2ID0gdi50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICBsZXQgc3ViUmVjb3JkID0geyAkOiB2YWx1ZSwgaWR4OiBhcnJheUluZGV4IH07XG5cbiAgICAgICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgICAgIHN1YlJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdWJSZWNvcmRzLnB1c2goc3ViUmVjb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGFyckxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGFyckxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgICBhcnJheUluZGV4OiBrLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlW2tdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjb3JkLiRba2V5XSA9IHN1YlJlY29yZHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgICAvLyAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC8vIH1cblxuICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7ICQ6IHZhbHVlIH07XG5cbiAgICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgICBzdWJSZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlY29yZC4kW2tleV0gPSBzdWJSZWNvcmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5kZXhlZExpc3QucHVzaChyZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleGVkTGlzdFxufVxuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0ge307XG4gICAgdGhpcy5fa2V5TmFtZXMgPSBbXTtcbiAgICB0aGlzLl9sZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXlcbiAgICBpZiAoa2V5cy5sZW5ndGggJiYgaXNTdHJpbmcoa2V5c1swXSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdGhpcy5fa2V5c1trZXldID0ge1xuICAgICAgICAgIHdlaWdodDogMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9rZXlOYW1lcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJuYW1lXCIgcHJvcGVydHkgaW4ga2V5IG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXlOYW1lID0ga2V5Lm5hbWU7XG4gICAgICAgIHRoaXMuX2tleU5hbWVzLnB1c2goa2V5TmFtZSk7XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgXCJ3ZWlnaHRcIiBwcm9wZXJ0eSBpbiBrZXkgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdlaWdodCA8PSAwIHx8IHdlaWdodCA+PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1wid2VpZ2h0XCIgcHJvcGVydHkgaW4ga2V5IG11c3QgYmUgaW4gdGhlIHJhbmdlIG9mICgwLCAxKSdcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9rZXlzW2tleU5hbWVdID0ge1xuICAgICAgICAgIHdlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvdGFsV2VpZ2h0ICs9IHdlaWdodDtcbiAgICAgIH1cblxuICAgICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXlOYW1lID0gdGhpcy5fa2V5TmFtZXNbaV07XG4gICAgICAgIGNvbnN0IGtleVdlaWdodCA9IHRoaXMuX2tleXNba2V5TmFtZV0ud2VpZ2h0O1xuICAgICAgICB0aGlzLl9rZXlzW2tleU5hbWVdLndlaWdodCA9IGtleVdlaWdodCAvIHRvdGFsV2VpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQoa2V5LCBuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XSA/IHRoaXMuX2tleXNba2V5XVtuYW1lXSA6IC0xXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TmFtZXNcbiAgfVxuICBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoXG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9rZXlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBtYXRjaGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1tpXTtcblxuICAgIGlmICghaXNEZWZpbmVkKG1hdGNoLmluZGljZXMpIHx8IG1hdGNoLmluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzOiBtYXRjaC5pbmRpY2VzLFxuICAgICAgdmFsdWU6IG1hdGNoLnZhbHVlXG4gICAgfTtcblxuICAgIGlmIChtYXRjaC5rZXkpIHtcbiAgICAgIG9iai5rZXkgPSBtYXRjaC5rZXk7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TY29yZShyZXN1bHQsIGRhdGEpIHtcbiAgZGF0YS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbn1cblxuY29uc3QgQmFzaWNPcHRpb25zID0ge1xuICAvLyBXaGVuIHRydWUsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb25cbiAgc29ydEZuOiAoYSwgYikgPT4gYS5zY29yZSAtIGIuc2NvcmVcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBFbmFibGVkIGV4dGVuZGVkLXNlYXJjaGluZ1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldFxufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3RvcihsaXN0LCBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnMsIGluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICAvLyBgY2FzZVNlbnNpdGl2ZWAgaXMgZGVwcmVjYXRlZCwgdXNlIGBpc0Nhc2VTZW5zaXRpdmVgIGluc3RlYWRcbiAgICB0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlID0gb3B0aW9ucy5jYXNlU2Vuc2l0aXZlO1xuICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuY2FzZVNlbnNpdGl2ZTtcblxuICAgIHRoaXMuX3Byb2Nlc3NLZXlzKHRoaXMub3B0aW9ucy5rZXlzKTtcbiAgICB0aGlzLnNldENvbGxlY3Rpb24obGlzdCwgaW5kZXgpO1xuICB9XG5cbiAgc2V0Q29sbGVjdGlvbihsaXN0LCBpbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIHRoaXMubGlzdElzU3RyaW5nQXJyYXkgPSBpc1N0cmluZyhsaXN0WzBdKTtcblxuICAgIGlmIChpbmRleCkge1xuICAgICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0SW5kZXgodGhpcy5fY3JlYXRlSW5kZXgoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5kZXgobGlzdEluZGV4KSB7XG4gICAgdGhpcy5faW5kZXhlZExpc3QgPSBsaXN0SW5kZXg7XG4gIH1cblxuICBfcHJvY2Vzc0tleXMoa2V5cykge1xuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKGtleXMpO1xuICB9XG5cbiAgX2NyZWF0ZUluZGV4KCkge1xuICAgIHJldHVybiBjcmVhdGVJbmRleCh0aGlzLl9rZXlTdG9yZS5rZXlzKCksIHRoaXMubGlzdCwge1xuICAgICAgZ2V0Rm46IHRoaXMub3B0aW9ucy5nZXRGblxuICAgIH0pXG4gIH1cblxuICBzZWFyY2gocGF0dGVybiwgb3B0cyA9IHsgbGltaXQ6IGZhbHNlIH0pIHtcbiAgICBjb25zdCB7IHVzZUV4dGVuZGVkU2VhcmNoLCBzaG91bGRTb3J0IH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgc2VhcmNoZXIgPSBudWxsO1xuXG4gICAgaWYgKHVzZUV4dGVuZGVkU2VhcmNoKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBFeHRlbmRlZFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgTkdyYW1TZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHRoaXMuX3NlYXJjaFVzaW5nKHNlYXJjaGVyKTtcblxuICAgIHRoaXMuX2NvbXB1dGVTY29yZShyZXN1bHRzKTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICB0aGlzLl9zb3J0KHJlc3VsdHMpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxpbWl0ICYmIGlzTnVtYmVyKG9wdHMubGltaXQpKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBvcHRzLmxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0KHJlc3VsdHMpXG4gIH1cblxuICBfc2VhcmNoVXNpbmcoc2VhcmNoZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5faW5kZXhlZExpc3Q7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICAgIGlmICh0aGlzLmxpc3RJc1N0cmluZ0FycmF5KSB7XG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkgc3RyaW5nIGluIHRoZSBsaXN0XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgICBsZXQgeyAkOiB0ZXh0LCBpZHggfSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSk7XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCB2YWx1ZTogdGV4dCB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHRleHQsXG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIG1hdGNoZXM6IFttYXRjaF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgY29uc3Qga2V5TmFtZXMgPSB0aGlzLl9rZXlTdG9yZS5rZXlzKCk7XG4gICAgICBjb25zdCBrZXlzTGVuID0gdGhpcy5fa2V5U3RvcmUuY291bnQoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHsgJDogaXRlbSwgaWR4IH0gPSBsaXN0W2ldO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXNMZW47IGogKz0gMSkge1xuICAgICAgICAgIGxldCBrZXkgPSBrZXlOYW1lc1tqXTtcbiAgICAgICAgICBsZXQgdmFsdWUgPSBpdGVtW2tleV07XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBrIDwgbGVuOyBrICs9IDEpIHtcbiAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSBhcnJJdGVtLiQ7XG4gICAgICAgICAgICAgIGxldCBpZHggPSBhcnJJdGVtLmlkeDtcblxuICAgICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4oYXJySXRlbSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0LCBpZHggfTtcblxuICAgICAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKHZhbHVlKTtcblxuICAgICAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSB9ID0gc2VhcmNoUmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCB9O1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfY29tcHV0ZVNjb3JlKHJlc3VsdHMpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgICAgIGNvbnN0IHNjb3JlTGVuID0gbWF0Y2hlcy5sZW5ndGg7XG5cbiAgICAgIGxldCB0b3RhbFdlaWdodGVkU2NvcmUgPSAxO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNjb3JlTGVuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG1hdGNoZXNbal07XG4gICAgICAgIGNvbnN0IGtleSA9IGl0ZW0ua2V5O1xuICAgICAgICBjb25zdCBrZXlXZWlnaHQgPSB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5LCAnd2VpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHdlaWdodCA9IGtleVdlaWdodCA+IC0xID8ga2V5V2VpZ2h0IDogMTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPVxuICAgICAgICAgIGl0ZW0uc2NvcmUgPT09IDAgJiYga2V5V2VpZ2h0ID4gLTEgPyBOdW1iZXIuRVBTSUxPTiA6IGl0ZW0uc2NvcmU7XG5cbiAgICAgICAgdG90YWxXZWlnaHRlZFNjb3JlICo9IE1hdGgucG93KHNjb3JlLCB3ZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQuc2NvcmUgPSB0b3RhbFdlaWdodGVkU2NvcmU7XG4gICAgfVxuICB9XG5cbiAgX3NvcnQocmVzdWx0cykge1xuICAgIHJlc3VsdHMuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKTtcbiAgfVxuXG4gIF9mb3JtYXQocmVzdWx0cykge1xuICAgIGNvbnN0IGZpbmFsT3V0cHV0ID0gW107XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpbmNsdWRlU2NvcmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCB0cmFuc2Zvcm1lcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gICAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICBjb25zdCB7IGlkeCB9ID0gcmVzdWx0O1xuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBpdGVtOiB0aGlzLmxpc3RbaWR4XSxcbiAgICAgICAgcmVmSW5kZXg6IGlkeFxuICAgICAgfTtcblxuICAgICAgaWYgKHRyYW5zZm9ybWVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHRyYW5zZm9ybWVycy5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xuICAgICAgICAgIHRyYW5zZm9ybWVyc1tqXShyZXN1bHQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbmFsT3V0cHV0LnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmFsT3V0cHV0XG4gIH1cbn1cblxuRnVzZS52ZXJzaW9uID0gJzUuMS4wJztcbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbkZ1c2UuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgRnVzZTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMl9fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAoZmFsc2UpIHsgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MsIFJlYWN0SXM7IH0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKCk7XG59XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX187XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBUZWxsIHdoZXRoZXIgdGhlIHJlY3QgaXMgdmlzaWJsZSwgZ2l2ZW4gYW4gb2Zmc2V0XG4vL1xuLy8gcmV0dXJuOiBib29sZWFuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCkge1xuICB2YXIgb2Zmc2V0RGlyID0gb2Zmc2V0LmRpcmVjdGlvbjtcbiAgdmFyIG9mZnNldFZhbCA9IG9mZnNldC52YWx1ZTsgLy8gUnVsZXMgZm9yIGNoZWNraW5nIGRpZmZlcmVudCBraW5kIG9mIG9mZnNldHMuIEluIGV4YW1wbGUgaWYgdGhlIGVsZW1lbnQgaXNcbiAgLy8gOTBweCBiZWxvdyB2aWV3cG9ydCBhbmQgb2Zmc2V0VG9wIGlzIDEwMCwgaXQgaXMgY29uc2lkZXJlZCB2aXNpYmxlLlxuXG4gIHN3aXRjaCAob2Zmc2V0RGlyKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QudG9wICsgb2Zmc2V0VmFsIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QubGVmdCArIG9mZnNldFZhbCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQ7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLSBvZmZzZXRWYWwgPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcDtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QucmlnaHQgLSBvZmZzZXRWYWwgPiByZWN0LnJpZ2h0ICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b207XG4gIH1cbn07XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gVmlzaWJpbGl0eVNlbnNvcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVJlY3QocmVjdCkge1xuICBpZiAocmVjdC53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC53aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gIH1cblxuICBpZiAocmVjdC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlY3QuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcDtcbiAgfVxuXG4gIHJldHVybiByZWN0O1xufVxuXG52YXIgVmlzaWJpbGl0eVNlbnNvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVmlzaWJpbGl0eVNlbnNvciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmlzaWJpbGl0eVNlbnNvcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWaXNpYmlsaXR5U2Vuc29yKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFZpc2liaWxpdHlTZW5zb3IpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRDb250YWluZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmNvbnRhaW5tZW50IHx8IHdpbmRvdztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhZGRFdmVudExpc3RlbmVyXCIsIGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50LCBkZWxheSwgdGhyb3R0bGUpIHtcbiAgICAgIGlmICghX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lb3V0O1xuICAgICAgdmFyIGZ1bmM7XG5cbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgICBfdGhpcy5jaGVjaygpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRocm90dGxlID4gLTEpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgdGhyb3R0bGUgfHwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCBkZWxheSB8fCAwKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBmbjogZnVuYyxcbiAgICAgICAgZ2V0TGFzdFRpbWVvdXQ6IGZ1bmN0aW9uIGdldExhc3RUaW1lb3V0KCkge1xuICAgICAgICAgIHJldHVybiB0aW1lb3V0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGluZm8uZm4pO1xuICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tldmVudF0gPSBpbmZvO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXJ0V2F0Y2hpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2sgfHwgX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaW50ZXJ2YWxDaGVjaykge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKF90aGlzLmNoZWNrLCBfdGhpcy5wcm9wcy5pbnRlcnZhbERlbGF5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnNjcm9sbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoX3RoaXMuZ2V0Q29udGFpbmVyKCksIFwic2Nyb2xsXCIsIF90aGlzLnByb3BzLnNjcm9sbERlbGF5LCBfdGhpcy5wcm9wcy5zY3JvbGxUaHJvdHRsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5yZXNpemVDaGVjaykge1xuICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgX3RoaXMucHJvcHMucmVzaXplRGVsYXksIF90aGlzLnByb3BzLnJlc2l6ZVRocm90dGxlKTtcbiAgICAgIH0gLy8gaWYgZG9udCBuZWVkIGRlbGF5ZWQgY2FsbCwgY2hlY2sgb24gbG9hZCAoIGJlZm9yZSB0aGUgZmlyc3QgaW50ZXJ2YWwgZmlyZXMgKVxuXG5cbiAgICAgICFfdGhpcy5wcm9wcy5kZWxheWVkQ2FsbCAmJiBfdGhpcy5jaGVjaygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0b3BXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICAvLyBjbGVhbiB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZWlyIGRlYm91bmNlIGNhbGxlcnNcbiAgICAgICAgZm9yICh2YXIgZGVib3VuY2VFdmVudCBpbiBfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2suaGFzT3duUHJvcGVydHkoZGVib3VuY2VFdmVudCkpIHtcbiAgICAgICAgICAgIHZhciBkZWJvdW5jZUluZm8gPSBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlSW5mby5nZXRMYXN0VGltZW91dCgpKTtcbiAgICAgICAgICAgIGRlYm91bmNlSW5mby50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihkZWJvdW5jZUV2ZW50LCBkZWJvdW5jZUluZm8uZm4pO1xuICAgICAgICAgICAgX3RoaXMuZGVib3VuY2VDaGVja1tkZWJvdW5jZUV2ZW50XSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKF90aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGVja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5ub2RlO1xuICAgICAgdmFyIHJlY3Q7XG4gICAgICB2YXIgY29udGFpbm1lbnRSZWN0OyAvLyBpZiB0aGUgY29tcG9uZW50IGhhcyByZW5kZXJlZCB0byBudWxsLCBkb250IHVwZGF0ZSB2aXNpYmlsaXR5XG5cbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZWN0ID0gbm9ybWFsaXplUmVjdChfdGhpcy5yb3VuZFJlY3REb3duKGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jb250YWlubWVudCkge1xuICAgICAgICB2YXIgY29udGFpbm1lbnRET01SZWN0ID0gX3RoaXMucHJvcHMuY29udGFpbm1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogY29udGFpbm1lbnRET01SZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiBjb250YWlubWVudERPTVJlY3QubGVmdCxcbiAgICAgICAgICBib3R0b206IGNvbnRhaW5tZW50RE9NUmVjdC5ib3R0b20sXG4gICAgICAgICAgcmlnaHQ6IGNvbnRhaW5tZW50RE9NUmVjdC5yaWdodFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0ID0ge1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICB9O1xuICAgICAgfSAvLyBDaGVjayBpZiB2aXNpYmlsaXR5IGlzIHdhbnRlZCB2aWEgb2Zmc2V0P1xuXG5cbiAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5wcm9wcy5vZmZzZXQgfHwge307XG4gICAgICB2YXIgaGFzVmFsaWRPZmZzZXQgPSBfdHlwZW9mKG9mZnNldCkgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgIGlmIChoYXNWYWxpZE9mZnNldCkge1xuICAgICAgICBjb250YWlubWVudFJlY3QudG9wICs9IG9mZnNldC50b3AgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmxlZnQgKz0gb2Zmc2V0LmxlZnQgfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtPSBvZmZzZXQuYm90dG9tIHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtPSBvZmZzZXQucmlnaHQgfHwgMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZpc2liaWxpdHlSZWN0ID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wID49IGNvbnRhaW5tZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCA+PSBjb250YWlubWVudFJlY3QubGVmdCxcbiAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSA8PSBjb250YWlubWVudFJlY3QuYm90dG9tLFxuICAgICAgICByaWdodDogcmVjdC5yaWdodCA8PSBjb250YWlubWVudFJlY3QucmlnaHRcbiAgICAgIH07IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Nod25qL3JlYWN0LXZpc2liaWxpdHktc2Vuc29yL3B1bGwvMTE0XG5cbiAgICAgIHZhciBoYXNTaXplID0gcmVjdC5oZWlnaHQgPiAwICYmIHJlY3Qud2lkdGggPiAwO1xuICAgICAgdmFyIGlzVmlzaWJsZSA9IGhhc1NpemUgJiYgdmlzaWJpbGl0eVJlY3QudG9wICYmIHZpc2liaWxpdHlSZWN0LmxlZnQgJiYgdmlzaWJpbGl0eVJlY3QuYm90dG9tICYmIHZpc2liaWxpdHlSZWN0LnJpZ2h0OyAvLyBjaGVjayBmb3IgcGFydGlhbCB2aXNpYmlsaXR5XG5cbiAgICAgIGlmIChoYXNTaXplICYmIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5KSB7XG4gICAgICAgIHZhciBwYXJ0aWFsVmlzaWJsZSA9IHJlY3QudG9wIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPj0gY29udGFpbm1lbnRSZWN0LnRvcCAmJiByZWN0LmxlZnQgPD0gY29udGFpbm1lbnRSZWN0LnJpZ2h0ICYmIHJlY3QucmlnaHQgPj0gY29udGFpbm1lbnRSZWN0LmxlZnQ7IC8vIGFjY291bnQgZm9yIHBhcnRpYWwgdmlzaWJpbGl0eSBvbiBhIHNpbmdsZSBlZGdlXG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHBhcnRpYWxWaXNpYmxlID0gdmlzaWJpbGl0eVJlY3RbX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHldO1xuICAgICAgICB9IC8vIGlmIHdlIGhhdmUgbWluaW11bSB0b3AgdmlzaWJpbGl0eSBzZXQgYnkgcHJvcHMsIGxldHMgY2hlY2ssIGlmIGl0IG1lZXRzIHRoZSBwYXNzZWQgdmFsdWVcbiAgICAgICAgLy8gc28gaWYgZm9yIGluc3RhbmNlIGVsZW1lbnQgaXMgYXQgbGVhc3QgMjAwcHggaW4gdmlld3BvcnQsIHRoZW4gc2hvdyBpdC5cblxuXG4gICAgICAgIGlzVmlzaWJsZSA9IF90aGlzLnByb3BzLm1pblRvcFZhbHVlID8gcGFydGlhbFZpc2libGUgJiYgcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIF90aGlzLnByb3BzLm1pblRvcFZhbHVlIDogcGFydGlhbFZpc2libGU7XG4gICAgICB9IC8vIERlcHJlY2F0ZWQgb3B0aW9ucyBmb3IgY2FsY3VsYXRpbmcgb2Zmc2V0LlxuXG5cbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0LmRpcmVjdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygb2Zmc2V0LnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIltub3RpY2VdIG9mZnNldC5kaXJlY3Rpb24gYW5kIG9mZnNldC52YWx1ZSBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gVGhleSBzdGlsbCB3b3JrIGZvciBub3csIGJ1dCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLiBQbGVhc2UgdXBncmFkZSB0byB0aGUgbmV3IHN5bnRheDogeyAlczogJWQgfVwiLCBvZmZzZXQuZGlyZWN0aW9uLCBvZmZzZXQudmFsdWUpO1xuICAgICAgICBpc1Zpc2libGUgPSBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0KCkob2Zmc2V0LCByZWN0LCBjb250YWlubWVudFJlY3QpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdGF0ZTsgLy8gbm90aWZ5IHRoZSBwYXJlbnQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaXNWaXNpYmxlICE9PSBpc1Zpc2libGUpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHZpc2liaWxpdHlSZWN0XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkgX3RoaXMucHJvcHMub25DaGFuZ2UoaXNWaXNpYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWaXNpYmlsaXR5U2Vuc29yLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcFdhdGNoaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyByZS1yZWdpc3RlciBub2RlIGluIGNvbXBvbmVudERpZFVwZGF0ZSBpZiBjaGlsZHJlbiBkaWZmcyBbIzEwM11cbiAgICAgIHRoaXMubm9kZSA9IHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQuYS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlICYmICFwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDoge31cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhcnRXYXRjaGluZygpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicm91bmRSZWN0RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByb3VuZFJlY3REb3duKHJlY3QpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogTWF0aC5mbG9vcihyZWN0LnRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGguZmxvb3IocmVjdC5sZWZ0KSxcbiAgICAgICAgYm90dG9tOiBNYXRoLmZsb29yKHJlY3QuYm90dG9tKSxcbiAgICAgICAgcmlnaHQ6IE1hdGguZmxvb3IocmVjdC5yaWdodClcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIHdpdGhpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgICAgIGlzVmlzaWJsZTogdGhpcy5zdGF0ZS5pc1Zpc2libGUsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHRoaXMuc3RhdGUudmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaXNpYmlsaXR5U2Vuc29yO1xufShyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhY3RpdmU6IHRydWUsXG4gIHBhcnRpYWxWaXNpYmlsaXR5OiBmYWxzZSxcbiAgbWluVG9wVmFsdWU6IDAsXG4gIHNjcm9sbENoZWNrOiBmYWxzZSxcbiAgc2Nyb2xsRGVsYXk6IDI1MCxcbiAgc2Nyb2xsVGhyb3R0bGU6IC0xLFxuICByZXNpemVDaGVjazogZmFsc2UsXG4gIHJlc2l6ZURlbGF5OiAyNTAsXG4gIHJlc2l6ZVRocm90dGxlOiAtMSxcbiAgaW50ZXJ2YWxDaGVjazogdHJ1ZSxcbiAgaW50ZXJ2YWxEZWxheTogMTAwLFxuICBkZWxheWVkQ2FsbDogZmFsc2UsXG4gIG9mZnNldDoge30sXG4gIGNvbnRhaW5tZW50OiBudWxsLFxuICBjaGlsZHJlbjogcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbClcbn0pO1xuXG5fZGVmaW5lUHJvcGVydHkoVmlzaWJpbGl0eVNlbnNvciwgXCJwcm9wVHlwZXNcIiwge1xuICBvbkNoYW5nZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jLFxuICBhY3RpdmU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcGFydGlhbFZpc2liaWxpdHk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKV0pLFxuICBkZWxheWVkQ2FsbDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBvZmZzZXQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICB0b3A6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGxlZnQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIGJvdHRvbTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgcmlnaHQ6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG4gIH0pLCAvLyBkZXByZWNhdGVkIG9mZnNldCBwcm9wZXJ0eVxuICBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLnNoYXBlKHtcbiAgICBkaXJlY3Rpb246IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2YoW1widG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCJdKSxcbiAgICB2YWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSldKSxcbiAgc2Nyb2xsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgc2Nyb2xsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBzY3JvbGxUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHJlc2l6ZUNoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHJlc2l6ZURlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplVGhyb3R0bGU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBpbnRlcnZhbENoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIGludGVydmFsRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICBjb250YWlubWVudDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuaW5zdGFuY2VPZih3aW5kb3cuRWxlbWVudCkgOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmFueSxcbiAgY2hpbGRyZW46IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEub25lT2ZUeXBlKFtwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmVsZW1lbnQsIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZnVuY10pLFxuICBtaW5Ub3BWYWx1ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbn0pO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjY29yZGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7aXNPcGVuLCB0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoaXNPcGVuKTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnYWNjb3JkaW9uJywgeydvcGVuJzogb3BlbiwgJ2Nsb3NlZCc6ICEgb3BlbiB9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0YXJpYS1leHBhbmRlZD17b3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oISBvcGVuKX1cblx0XHRcdD5cblx0XHRcdFx0XHR7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdGl0bGVcIj57dGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIiBzdHlsZT17e2hlaWdodDogb3BlbiA/ICdhdXRvJyA6ICcwcHgnfX0+XG5cdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9UYWJzQ29udGVudCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL1NuYWNrYmFyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQXBwID0gKHtzZXRTZXR0aW5ncywgdG9hc3QsIGN1cnJlbnRUYWIsIHNldFRhYiwgaXNPbmJvYXJkaW5nfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR3cC5hcGkubG9hZFByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRzZXR0aW5ncyA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKCk7XG5cdFx0XHRzZXR0aW5ncy5mZXRjaCgpLnRoZW4ociA9PiB7XG5cdFx0XHRcdHNldFNldHRpbmdzKHIpO1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIDxMb2FkaW5nLz47XG5cdH1cblx0Y29uc3Qgd3JhcENsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2NvbnRlbnQtd3JhcCcsIHtcblx0XHQnaXMtb25ib2FyZGluZyc6IGlzT25ib2FyZGluZyAmJiAnc3RhcnRlci1zaXRlcycgPT09IGN1cnJlbnRUYWIsXG5cdFx0J3N0YXJ0ZXItc2l0ZXMnOiAnc3RhcnRlci1zaXRlcycgPT09IGN1cnJlbnRUYWJcblx0fSBdKTtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZGVyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17d3JhcENsYXNzZXN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxOb3RpZmljYXRpb25zLz59XG5cdFx0XHRcdFx0XHQ8VGFic0NvbnRlbnQgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxTaWRlYmFyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9Lz59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7dG9hc3QgJiYgPFNuYWNrYmFyLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2V0dGluZ3MsIHNldFRhYn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2V0dGluZ3M6IChvYmplY3QpID0+IHNldFNldHRpbmdzKG9iamVjdCksXG5cdFx0XHRzZXRUYWI6ICh0YWIpID0+IHNldFRhYih0YWIpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdCwgZ2V0VGFifSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRjb25zdCB7Z2V0T25ib2FyZGluZ1N0YXR1c30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2FzdDogZ2V0VG9hc3QoKSxcblx0XHRcdGN1cnJlbnRUYWI6IGdldFRhYigpLFxuXHRcdFx0aXNPbmJvYXJkaW5nOiBnZXRPbmJvYXJkaW5nU3RhdHVzKClcblx0XHR9O1xuXHR9KVxuKShBcHApO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaGFuZ2Vsb2cgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2NoYW5nZWxvZywgY2hhbmdlbG9nUHJvfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIHNob3dGb3JQcm8sIHNldFNob3dGb3JQcm8gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0e2NoYW5nZWxvZ1BybyAmJlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGFuZ2Vsb2ctdGFic1wiPlxuXHRcdFx0XHQ8c3Bhbj57X18oJ1Nob3cgY2hhbmdlbG9nIGZvcicsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ISBzaG93Rm9yUHJvICYmICdhY3RpdmUnfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNldFNob3dGb3JQcm8oZmFsc2UpO1xuXHRcdFx0XHRcdH19PntfXygnTmV2ZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c2hvd0ZvclBybyAmJiAnYWN0aXZlJ31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRTaG93Rm9yUHJvKHRydWUpO1xuXHRcdFx0XHRcdH19PntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdFx0e1xuXHRcdFx0XHQoc2hvd0ZvclBybyA/IGNoYW5nZWxvZ1BybyA6IGNoYW5nZWxvZykubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0aWYgKCEgdHdlYWtzICYmICEgZml4ZXMgJiYgISBmZWF0dXJlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID1cblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+O1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxBY2NvcmRpb24gaXNPcGVuPXswID09PSBpbmRleH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBzdWNjZXNzXCI+e19fKCdGZWF0dXJlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiA8bGk+e2ZlYXR1cmV9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtmaXhlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1Z3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBlcnJvclwiPntfXygnQnVnIEZpeGVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmaXhlcy5tYXAoKGZpeCkgPT4gPGxpPntmaXh9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHt0d2Vha3MgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2Vha3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+e19fKCdUd2Vha3MnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3R3ZWFrcy5tYXAoKHR3ZWFrKSA9PiA8bGk+e3R3ZWFrfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEZlYXR1cmVSb3cgZnJvbSAnLi4vRmVhdHVyZVJvdyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2ZlYXR1cmVEYXRhfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY2FyZCB0YWJsZVwiPlxuXHRcdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZFwiPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJsYXJnZVwiLz5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHR7ZmVhdHVyZURhdGEubWFwKChpdGVtKSA9PiA8RmVhdHVyZVJvdyBpdGVtPXtpdGVtfS8+KX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB1cHNlbGxcIj5cblx0XHRcdFx0PHA+e19fKCdHZXQgYWNjZXNzIHRvIGFsbCBQcm8gZmVhdHVyZXMgYW5kIHBvd2VyLXVwIHlvdXIgd2Vic2l0ZScsICduZXZlJyl9PC9wPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gudXBncmFkZVVSTH1cblx0XHRcdFx0XHRpc1ByaW1hcnk+XG5cdFx0XHRcdFx0e19fKCdHZXQgTmV2ZSBQcm8gTm93JywgJ25ldmUnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEhlbHAgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge3NldFRhYn0gPSBwcm9wcztcblxuXHRsZXQge2RvY3NVUkwsIHN1cHBvcnRVUkwsIHdoaXRlTGFiZWwsIGFzc2V0c30gPSBuZXZlRGFzaDtcblx0bGV0IHtzdXBwb3J0Q2FyZERlc2NyaXB0aW9uLCBkb2NzQ2FyZERlc2NyaXB0aW9ufSA9IG5ldmVEYXNoLnN0cmluZ3M7XG5cblx0aWYgKHdoaXRlTGFiZWwgJiYgd2hpdGVMYWJlbC5hZ2VuY3lVUkwpIHtcblx0XHRzdXBwb3J0VVJMID0gd2hpdGVMYWJlbC5hZ2VuY3lVUkw7XG5cdFx0ZG9jc1VSTCA9IHdoaXRlTGFiZWwuYWdlbmN5VVJMO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdGljb249e25ldmVEYXNoLmFzc2V0cyArICdidW95LnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtzdXBwb3J0Q2FyZERlc2NyaXB0aW9ufVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRocmVmPXtzdXBwb3J0VVJMfVxuXHRcdFx0XHRcdD57X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0eyEgd2hpdGVMYWJlbCAmJlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdsaXN0LnN2Zyd9XG5cdFx0XHRcdFx0XHR0aXRsZT17X18oJ0NoYW5nZWxvZycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17X18oJ1dhbnQgdG8gZ2V0IHRoZSBnaXN0IG9uIHRoZSBsYXRlc3QgdGhlbWUgY2hhbmdlcz8gSnVzdCBjb25zdWx0IG91ciBjaGFuZ2Vsb2cgYmVsb3cgdG8gZ2V0IGEgdGFzdGUgb2YgdGhlIHJlY2VudCBmaXhlcyBhbmQgZmVhdHVyZXMgaW1wbGVtZW50ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuXHRcdFx0XHRcdFx0PntfXygnVmlldyBDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRpY29uPXthc3NldHMgKyAndGFjaG9tZXRlci5zdmcnfVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHNpdHVhdGlvbiB3aGVyZSBldmVyeXRoaW5nIG9uIHlvdXIgc2l0ZSBpcyBydW5uaW5nIHZlcnkgc2xvd2x5LCB5b3UgbWlnaHQgY29uc2lkZXIgaGF2aW5nIGEgbG9vayBhdCB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB3aGVyZSB5b3Ugd2lsbCBmaW5kIHRoZSBtb3N0IGNvbW1vbiBpc3N1ZXMgY2F1c2luZyB0aGlzIGFuZCBwb3NzaWJsZSBzb2x1dGlvbnMgZm9yIGVhY2ggb2YgdGhlIGlzc3Vlcy4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvNjMtc3BlZWQtdXAteW91ci13b3JkcHJlc3Mtc2l0ZVwiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0aWNvbj17YXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ0RvY3VtZW50YXRpb24nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtkb2NzQ2FyZERlc2NyaXB0aW9ufVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRocmVmPXtkb2NzVVJMfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0eyEgd2hpdGVMYWJlbCAmJlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdjbG9uZS5zdmcnfVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdDcmVhdGUgYSBjaGlsZCB0aGVtZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSB3YW50IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgdGhlbWVcXCdzIGZpbGVzLCB0aG9zZSBjaGFuZ2VzIGFyZSBsaWtlbHkgdG8gYmUgb3ZlcndyaXR0ZW4gd2hlbiB5b3UgbmV4dCB1cGRhdGUgdGhlIHRoZW1lLiBJbiBvcmRlciB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcsIHlvdSBuZWVkIHRvIGNyZWF0ZSBhIGNoaWxkIHRoZW1lLiBGb3IgdGhpcywgcGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdy4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTQtaG93LXRvLWNyZWF0ZS1hLWNoaWxkLXRoZW1lXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdFx0aWNvbj17YXNzZXRzICsgJ2Fycm93cy5zdmcnfVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdJbiB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB5b3Ugd2lsbCBmaW5kIGFuIGVhc3kgd2F5IHRvIGJ1aWxkIGEgZ3JlYXQgbG9va2luZyBsYW5kaW5nIHBhZ2UgdXNpbmcgYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlciBwbHVnaW4uJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzIxOS1ob3ctdG8tYnVpbGQtYS1sYW5kaW5nLXBhZ2Utd2l0aC1hLWRyYWctYW5kLWRyb3AtY29udGVudC1idWlsZGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBQbHVnaW5DYXJkIGZyb20gJy4uL1BsdWdpbkNhcmQnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7cGx1Z2luc30gPSBuZXZlRGFzaDtcblxuICBpZiAoICEgcGx1Z2lucyApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyggcGx1Z2lucyApLm1hcCggKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBsdWdpbkNhcmQga2V5PXtzbHVnfSBzbHVnPXtzbHVnfSBkYXRhPXtwbHVnaW5zW3NsdWddfS8+O1xuICAgICAgICB9IClcbiAgICAgIH1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTW9kdWxlQ2FyZCBmcm9tICcuLi9Nb2R1bGVDYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHttb2R1bGVzfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHR7XG5cdFx0XHRcdE9iamVjdC5rZXlzKG1vZHVsZXMpLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PE1vZHVsZUNhcmQgc2x1Zz17aWR9Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcbmltcG9ydCB7dGFic30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcblx0ZnVuY3Rpb24gcmVuZGVyTGVmdENvbCgpIHtcblx0XHRpZiAobmV2ZURhc2gud2hpdGVMYWJlbCAmJiBuZXZlRGFzaC53aGl0ZUxhYmVsLmhpZGVTdGFydGVyU2l0ZXMpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHR7dGFic1snc3RhcnRlci1zaXRlcyddICYmXG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3NxdWFyZXMuc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ1N0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtuZXZlRGFzaC5zdHJpbmdzLnN0YXJ0ZXJTaXRlc0NhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0fVxuXHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ0dldHRpbmcgU3RhcnRlZD8gQ2hlY2sgaGVscCBhbmQgZG9jcycsICduZXZlJyl9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2hlbHAnKX1cblx0XHRcdFx0XHQ+e19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qge3NldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHR7cmVuZGVyTGVmdENvbCgpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG5cdGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcblx0Y29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG5cdGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0e1xuXHRcdFx0XHRwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2dldH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL0xvYWRpbmcnO1xuaW1wb3J0IE9uYm9hcmRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9NYWluJztcblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IFN0YXJ0ZXJTaXRlcyA9ICh7c2l0ZXMsIHNldFNpdGVzLCBzZXRVcHNlbGxzLCBzZXRNaWdyYXRpb25EYXRhfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChzaXRlcykge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2luaXRpYWxpemVfc2l0ZXNfbGlicmFyeScpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHNldEVycm9yKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHtyZW1vdGUsIHVwc2VsbCwgbWlncmF0ZV9kYXRhfSA9IHIuZGF0YTtcblx0XHRcdFx0XHRzZXRTaXRlcyhyZW1vdGUpO1xuXHRcdFx0XHRcdHNldFVwc2VsbHModXBzZWxsKTtcblx0XHRcdFx0XHRzZXRNaWdyYXRpb25EYXRhKG1pZ3JhdGVfZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdGlmIChlcnJvcikge1xuXHRcdHJldHVybiA8aDE+RXJyb3IuPC9oMT47XG5cdH1cblx0cmV0dXJuIChcblx0XHRsb2FkaW5nID8gPExvYWRpbmcvPiA6IDxPbmJvYXJkaW5nLz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2l0ZXMsIHNldFVwc2VsbHMsIHNldE1pZ3JhdGlvbkRhdGF9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlczogKHNpdGVzKSA9PiBzZXRTaXRlcyhzaXRlcyksXG5cdFx0XHRzZXRVcHNlbGxzOiAodXBzZWxscykgPT4gc2V0VXBzZWxscyh1cHNlbGxzKSxcblx0XHRcdHNldE1pZ3JhdGlvbkRhdGE6IChtaWdyYXRpb25EYXRhKSA9PiBzZXRNaWdyYXRpb25EYXRhKG1pZ3JhdGlvbkRhdGEpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRTaXRlc30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlczogZ2V0U2l0ZXMoKVxuXHRcdH07XG5cdH0pXG4pKFN0YXJ0ZXJTaXRlcyk7XG4iLCJjb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZVJvdyA9ICh7aXRlbX0pID0+IHtcbiAgY29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbiwgaW5MaXRlfSA9IGl0ZW07XG4gIGNvbnN0IFsgdG9vbHRpcCwgdG9nZ2xlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4gdG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgY29uc3QgaGlkZVRvb2x0aXAgPSAoKSA9PiB0b2dnbGVUb29sdGlwKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDx0ciBjbGFzc05hbWU9XCJmZWF0dXJlLXJvd1wiPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdC13cmFwXCI+XG4gICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICBzaG93VG9vbHRpcCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICBzaG93VG9vbHRpcCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cImluZm9cIi8+XG4gICAgICAgICAgICB7dG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdpbmRpY2F0b3InLCB7J2Vycm9yJzogISBpbkxpdGUsICdzdWNjZXNzJzogaW5MaXRlfSBdKX0+XG4gICAgICAgIDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj17aW5MaXRlID8gJ3llcycgOiAnbm8tYWx0J30vPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJpbmRpY2F0b3Igc3VjY2Vzc1wiPlxuICAgICAgICA8RGFzaGljb24gc2l6ZT17MzB9IGljb249XCJ5ZXNcIi8+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlUm93O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2FkZFVybEhhc2gsIGdldFRhYkhhc2gsIHRhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuXHRcdGlmIChudWxsID09PSBoYXNoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHByb3BzLnNldFRhYihoYXNoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtyZW5kZXJIZWFkKCl9XG5cdFx0XHRcdHtyZW5kZXJOYXZpZ2F0aW9uKHByb3BzKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVySGVhZCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bmV2ZURhc2guc3RyaW5ncy5oZWFkZXJ9PC9oMT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj57bmV2ZURhc2gudmVyc2lvbn08L3NwYW4+XG5cdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHQ8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9sb2dvLnN2Zyd9IGFsdD17X18oJ05ldmUgVGhlbWUgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdHtPYmplY3Qua2V5cyh0YWJzKS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGk+PGFcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gaXRlbSA/ICdhY3RpdmUnIDogJyd9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFRhYihpdGVtKTtcblx0XHRcdFx0XHRcdFx0YWRkVXJsSGFzaChpdGVtKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Pnt0YWJzW2l0ZW1dLmxhYmVsfVxuXHRcdFx0XHRcdDwvYT48L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMaWNlbnNlQ2FyZCA9ICh7aXNWaXNpYmxlLCBjaGFuZ2VUaWVyfSkgPT4ge1xuXHRjb25zdCB7bGljZW5zZSwgcHJvQXBpfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIGtleSwgc2V0S2V5IF0gPSB1c2VTdGF0ZShsaWNlbnNlICYmICd2YWxpZCcgPT09IGxpY2Vuc2UudmFsaWQgPyBsaWNlbnNlLmtleSB8fCAnJyA6ICcnKTtcblx0Y29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIHZhbGlkLCBzZXRWYWxpZCBdID0gdXNlU3RhdGUobGljZW5zZS52YWxpZCB8fCAnaW52YWxpZCcpO1xuXHRjb25zdCBbIGV4cGlyYXRpb24sIHNldEV4cGlyYXRpb24gXSA9IHVzZVN0YXRlKGxpY2Vuc2UuZXhwaXJhdGlvbiB8fCAnJyk7XG5cdGNvbnN0IFsgdG9hc3QsIHNldFRvYXN0IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgdG9hc3RUeXBlLCBzZXRUb2FzdFR5cGUgXSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG5cblx0aWYgKCEgaXNWaXNpYmxlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB0b2dnbGVMaWNlbnNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvRG8gPSAndmFsaWQnID09PSB2YWxpZCA/ICdkZWFjdGl2YXRlJyA6ICdhY3RpdmF0ZSc7XG5cdFx0c2V0U3RhdHVzKCdhY3RpdmF0ZScgPT09IHRvRG8gPyAnYWN0aXZhdGluZycgOiAnZGVhY3RpdmF0aW5nJyk7XG5cdFx0c2VuZChwcm9BcGkgKyAnL3RvZ2dsZV9saWNlbnNlJywge2tleSwgYWN0aW9uOiB0b0RvfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHNldFRvYXN0VHlwZShyZXNwb25zZS5zdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyk7XG5cdFx0XHRzZXRLZXkoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/IGtleSA6ICcnKTtcblx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0c2V0RXhwaXJhdGlvbihyZXNwb25zZS5leHBpcmF0aW9uKTtcblx0XHRcdHNldFZhbGlkKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICd2YWxpZCcgOiAnbm90X2FjdGl2ZScpO1xuXHRcdFx0c2V0U3RhdHVzKGZhbHNlKTtcblx0XHRcdG5ldmVEYXNoLmxpY2Vuc2UuZXhwaXJhdGlvbiA9IHJlc3BvbnNlLmV4cGlyYXRpb247XG5cdFx0XHRjaGFuZ2VUaWVyKHJlc3BvbnNlLnRpZXIgfHwgMSk7XG5cdFx0fSk7XG5cdH07XG5cblx0aWYgKG5ldmVEYXNoLndoaXRlTGFiZWwgJiYgbmV2ZURhc2gud2hpdGVMYWJlbC5oaWRlTGljZW5zZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkIGxpY2Vuc2VcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdHtuZXZlRGFzaC5zdHJpbmdzLmxpY2Vuc2VDYXJkSGVhZGluZyAmJiA8aDQ+e25ldmVEYXNoLnN0cmluZ3MubGljZW5zZUNhcmRIZWFkaW5nfTwvaDQ+fVxuXHRcdFx0XHR7KCEgbmV2ZURhc2gud2hpdGVMYWJlbCAmJiBuZXZlRGFzaC5zdHJpbmdzLmxpY2Vuc2VDYXJkRGVzY3JpcHRpb24pICYmXG5cdFx0XHRcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBuZXZlRGFzaC5zdHJpbmdzLmxpY2Vuc2VDYXJkRGVzY3JpcHRpb259fS8+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibGljZW5zZS1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZUxpY2Vuc2UoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEtleShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHQndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0JyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicgKyBrZXkuc2xpY2UoLTUpIDpcblx0XHRcdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0ZScsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGluZycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGluZycsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0b2FzdCAmJiA8VG9hc3QgdHlwZT17dG9hc3RUeXBlfSBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9Lz59XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZXMoWyAnc3RhdHVzLWljb24nLCAndmFsaWQnID09PSB2YWxpZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicgXSlcblx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ZXhwaXJhdGlvbiAmJlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4tPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGV4cGlyYXRpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2VMaWNlbnNlVGllcn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VUaWVyOiAobmV3VGllcikgPT4ge1xuXHRcdFx0Y2hhbmdlTGljZW5zZVRpZXIobmV3VGllcik7XG5cdFx0fVxuXHR9O1xufSkoTGljZW5zZUNhcmQpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2stZGFzaFwiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb24gbG9hZGluZ1wiPnYyLjYuMjwvc3Bhbj5cblx0XHRcdFx0XHRcdHshIG5ldmVEYXNoLndoaXRlTGFiZWwgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBsb2dvXCIvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKEFycmF5KDYpKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGk+PGEgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz48L2xpPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmV2ZURhc2gubm90aWZpY2F0aW9ucyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBsb2FkaW5nIHBsYWNlaG9sZGVyXCIvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2x1bW5zIHN0YXJ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9taXplci1xdWljay1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0XHRcdHshIG5ldmVEYXNoLndoaXRlTGFiZWwgJiZcblx0XHRcdFx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2FzaWRlPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbic7XG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gJy4vT3B0aW9ucy9JbnB1dEZvcm0nO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL09wdGlvbnMvVG9nZ2xlJztcbmltcG9ydCB7Y2hhbmdlT3B0aW9ufSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge0J1dHRvbiwgVG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgTW9kdWxlQ2FyZCA9ICh7c2x1Zywgc2V0VG9hc3QsIGNoYW5nZU1vZHVsZVN0YXR1cywgZ2V0TW9kdWxlU3RhdHVzLCB0aWVyfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qge1xuXHRcdG5pY2VuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGF2YWlsYWJpbGl0eUxldmVsLFxuXHRcdG9wdGlvbnMsXG5cdFx0b3JkZXIsXG5cdFx0bGlua3MsXG5cdFx0ZG9jdW1lbnRhdGlvbixcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0cmVxdWlyZWRfYWN0aW9uc1xuXHR9ID0gbmV2ZURhc2gubW9kdWxlc1tzbHVnXTtcblx0Y29uc3Qge3VwZ3JhZGVMaW5rc30gPSBuZXZlRGFzaDtcblxuXHRjb25zdCByZW5kZXJPcHRpb25zQWNjb3JkaW9ucyA9ICgpID0+IHtcblx0XHRyZXR1cm4gb3B0aW9ucy5tYXAoKGdyb3VwKSA9PiB7XG5cdFx0XHRjb25zdCB7bGFiZWwsIG9wdGlvbnN9ID0gZ3JvdXA7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QWNjb3JkaW9uIHRpdGxlPXtsYWJlbH0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKG9wdGlvblNsdWcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qge2xhYmVsLCB0eXBlLCBwbGFjZWhvbGRlcn0gPSBvcHRpb25zW29wdGlvblNsdWddO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdHsndGV4dCcgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dEZvcm1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbHVnPXtvcHRpb25TbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0eyd0b2dnbGUnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdCk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbW9kdWxlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e25pY2VuYW1lfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aWVyIDwgYXZhaWxhYmlsaXR5TGV2ZWwgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXt1cGdyYWRlTGlua3NbYXZhaWxhYmlsaXR5TGV2ZWxdfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0e3JlcXVpcmVkX2FjdGlvbnMgJiYgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcmVxdWlyZWRfYWN0aW9uc319Lz59XG5cdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0XHRcdFx0XHRcdFx0eyEgcmVxdWlyZWRfYWN0aW9ucyAmJlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZXRNb2R1bGVTdGF0dXMoc2x1Zyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSwgdHJ1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodmFsdWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgQWN0aXZhdGVkJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBEZWFjdGl2YXRlZC4nLCAnbmV2ZScpKSArIGAgKCR7bmljZW5hbWV9KWApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IGFjdGl2YXRlIG1vZHVsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gKyAnICd9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnRhdGlvbi51cmwgJiZcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2RvY3VtZW50YXRpb24udXJsfT57X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0e2xpbmtzICYmIGdldE1vZHVsZVN0YXR1cyhzbHVnKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHR7bGlua3MubWFwKChsaW5rKSA9PiA8QnV0dG9uIGlzU2Vjb25kYXJ5IGhyZWY9e2xpbmsudXJsfT57bGluay5sYWJlbH08L0J1dHRvbj4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7KDAgPCBvcHRpb25zLmxlbmd0aCAmJiB0cnVlID09PSBnZXRNb2R1bGVTdGF0dXMoc2x1ZykpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLW9wdGlvbnNcIj5cblx0XHRcdFx0XHR7cmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldE1vZHVsZVN0YXR1cywgZ2V0TGljZW5zZVRpZXJ9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRNb2R1bGVTdGF0dXM6IChzbHVnKSA9PiBnZXRNb2R1bGVTdGF0dXMoc2x1ZyksXG5cdFx0XHR0aWVyOiBnZXRMaWNlbnNlVGllcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlU3RhdHVzLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoTW9kdWxlQ2FyZCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RleHQsIGN0YSwgdHlwZSwgdXBkYXRlfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRvbmUsIHNldERvbmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgW1xuICAgICAgJ25vdGlmaWNhdGlvbicsXG4gICAgICBwcm9wcy5zbHVnLFxuICAgICAgdHlwZSA/IHR5cGUgOiAnJyxcbiAgICAgIHtcbiAgICAgICAgJ3N1Y2Nlc3MnOiBkb25lLFxuICAgICAgICAnaGlkZGVuJzogZG9uZVxuICAgICAgfVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIGRvbmUgPyA8cD57dGV4dH08L3A+IDogPHA+PERhc2hpY29uIGljb249XCJ5ZXNcIi8+e19fKCdEb25lIScsICduZXZlJyl9PC9wPn1cbiAgICAgIHsoY3RhICYmICEgZG9uZSkgJiZcbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpcy1sb2FkaW5nJzogaW5Qcm9ncmVzc30pfVxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZUVudGl0eSh1cGRhdGUsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9PlxuICAgICAgICB7XG4gICAgICAgICAgaW5Qcm9ncmVzcyA/XG4gICAgICAgICAgPHNwYW4+PERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+IHtfXygnSW4gUHJvZ3Jlc3MnLCAnbmV2ZScpICsgJy4uLid9IDwvc3Bhbj4gOlxuICAgICAgICAgICAgY3RhXG4gICAgICAgIH1cbiAgICAgIDwvQnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUVudGl0eSA9IChhcmdzLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pID0+IHtcbiAgaWYgKCEgYXJncy50eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhlY3V0ZUFjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoJ3RoZW1lJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1Zykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS10aGVtZScsIHtzbHVnOiBhcmdzLnNsdWd9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCd0aGVtZS11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3BsdWdpbicgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcgfHwgISBhcmdzLnBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtcGx1Z2luJywge3NsdWc6IGFyZ3Muc2x1ZywgcGx1Z2luOiBhcmdzLnBhdGh9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwbHVnaW4tdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzZXRJblByb2dyZXNzKHRydWUpO1xuICBleGVjdXRlQWN0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgc2V0RG9uZSh0cnVlKTtcbiAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICBzZXRIaWRkZW4odHJ1ZSk7XG4gIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBpZiAoISBuZXZlRGFzaC5ub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKDEgPiBuZXZlRGFzaC5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24gZGF0YT17bmV2ZURhc2gubm90aWZpY2F0aW9uc1tzbHVnXX0gc2x1Zz17c2x1Z30vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xuIiwiY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29uLCBQb3BvdmVyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBFZGl0b3JTZWxlY3RvciA9ICh7b25TZWFyY2gsIGVkaXRvciwgc2V0Q3VycmVudEVkaXRvcn0pID0+IHtcblx0Y29uc3QgbWFwID0ge1xuXHRcdCdlbGVtZW50b3InOiB7XG5cdFx0XHRpY29uOiAnZWxlbWVudG9yLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0VsZW1lbnRvcicpXG5cdFx0fSxcblx0XHQnYnJpenknOiB7XG5cdFx0XHRpY29uOiAnYnJpenkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQnJpenknKVxuXHRcdH0sXG5cdFx0J2JlYXZlciBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2JlYXZlci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCZWF2ZXIgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IHtcblx0XHRcdGljb246ICd0aHJpdmUucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnVGhyaXZlIEFyY2hpdGVjdCcpXG5cdFx0fSxcblx0XHQnZGl2aSBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2Rpdmkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRGl2aSBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCdndXRlbmJlcmcnOiB7XG5cdFx0XHRpY29uOiAnZ3V0ZW5iZXJnLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0d1dGVuYmVyZycpXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHNldE9wZW4oISBvcGVuKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJzZWxlY3Qgb2ItZHJvcGRvd25cIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBbZWRpdG9yXS5pY29ufVxuXHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdDxzcGFuPnttYXBbZWRpdG9yXS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9Lz5cblx0XHRcdFx0XHR7b3BlbiAmJiAoXG5cdFx0XHRcdFx0XHQ8UG9wb3ZlciBwb3NpdGlvbj1cImJvdHRvbSByaWdodFwiIG9uQ2xvc2U9e3RvZ2dsZURyb3Bkb3dufSBub0Fycm93PlxuXHRcdFx0XHRcdFx0XHR7b3BlbiAmJlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhtYXApLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBlZGl0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0Q3VycmVudEVkaXRvcihrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0T3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yLWljb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW2tleV0uaWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e21hcFtrZXldLm5pY2VOYW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3VsPn1cblx0XHRcdFx0XHRcdDwvUG9wb3Zlcj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0eXBlPVwic2VhcmNoXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3J9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50RWRpdG9yfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0Q3VycmVudEVkaXRvcjogKGVkaXRvcikgPT4gc2V0Q3VycmVudEVkaXRvcihlZGl0b3IpXG5cdFx0fTtcblx0fSlcbikoRWRpdG9yU2VsZWN0b3IpO1xuIiwiLypnbG9iYWwgbmV2ZURhc2gqL1xuaW1wb3J0IHtpbXBvcnRDb250ZW50LCBpbXBvcnRNb2RzLCBpbXBvcnRXaWRnZXRzLCBpbnN0YWxsUGx1Z2luc30gZnJvbSAnLi4vLi4vdXRpbHMvc2l0ZS1pbXBvcnQnO1xuaW1wb3J0IEltcG9ydFN0ZXBwZXIgZnJvbSAnLi9JbXBvcnRTdGVwcGVyJztcbmltcG9ydCBJbXBvcnRNb2RhbE5vdGUgZnJvbSAnLi9JbXBvcnRNb2RhbE5vdGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1wb3J0TW9kYWxFcnJvciBmcm9tICcuL0ltcG9ydE1vZGFsRXJyb3InO1xuXG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb24sIFRvZ2dsZUNvbnRyb2wsIE1vZGFsfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbXBvcnRNb2RhbCA9ICh7c2V0TW9kYWwsIHNldFNpdGUsIGVkaXRvciwgc2l0ZURhdGF9KSA9PiB7XG5cdFx0Y29uc3QgWyBnZW5lcmFsLCBzZXRHZW5lcmFsIF0gPSB1c2VTdGF0ZSh7XG5cdFx0XHRjb250ZW50OiB0cnVlLFxuXHRcdFx0Y3VzdG9taXplcjogdHJ1ZSxcblx0XHRcdHdpZGdldHM6IHRydWVcblx0XHR9KTtcblx0XHRjb25zdCBbIHBsdWdpbnNQcm9ncmVzcywgc2V0UGx1Z2luc1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBjb250ZW50UHJvZ3Jlc3MsIHNldENvbnRlbnRQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgY3VzdG9taXplclByb2dyZXNzLCBzZXRDdXN0b21pemVyUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIHdpZGdldHNQcm9ncmVzcywgc2V0V2lkZ2V0c1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBmcm9udFBhZ2VJRCwgc2V0RnJvbnRQYWdlSUQgXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRcdGNvbnN0IFsgY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0XHRjb25zdCBbIGltcG9ydGluZywgc2V0SW1wb3J0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyBwbHVnaW5PcHRpb25zLCBzZXRQbHVnaW5PcHRpb25zIF0gPSB1c2VTdGF0ZSh7fSk7XG5cdFx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdFx0dXNlRWZmZWN0KGZ1bmN0aW9uIGdldFBsdWdpbk9wdGlvbnMoKSB7XG5cdFx0XHRjb25zdCBtYW5kYXRvcnkgPSB7Li4uKHNpdGVEYXRhWydtYW5kYXRvcnlfcGx1Z2lucyddIHx8IHt9KX07XG5cdFx0XHRjb25zdCBvcHRpb25hbCA9IHsuLi4oc2l0ZURhdGFbJ3JlY29tbWVuZGVkX3BsdWdpbnMnXSB8fCB7fSl9O1xuXHRcdFx0Y29uc3QgZGVmYXVsdE9mZiA9IHNpdGVEYXRhWydkZWZhdWx0X29mZl9yZWNvbW1lbmRlZF9wbHVnaW5zJ10gfHwgW107XG5cblx0XHRcdE9iamVjdC5rZXlzKG1hbmRhdG9yeSkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0bWFuZGF0b3J5W2tleV0gPSB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0XHRPYmplY3Qua2V5cyhvcHRpb25hbCkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0b3B0aW9uYWxba2V5XSA9ICEgZGVmYXVsdE9mZi5pbmNsdWRlcyhrZXkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHNldFBsdWdpbk9wdGlvbnMoe1xuXHRcdFx0XHQuLi5vcHRpb25hbCxcblx0XHRcdFx0Li4ubWFuZGF0b3J5XG5cdFx0XHR9KTtcblx0XHR9LCBbXSk7XG5cblx0XHRjb25zdCByZW5kZXJOb3RlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIDxJbXBvcnRNb2RhbE5vdGUgZGF0YT17c2l0ZURhdGF9Lz47XG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlbmRlck9wdGlvbnMgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBtYXAgPSB7XG5cdFx0XHRcdGNvbnRlbnQ6IHtcblx0XHRcdFx0XHR0aXRsZTogX18oJ0NvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0XHRcdGljb246ICdhZG1pbi1wb3N0J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjdXN0b21pemVyOiB7XG5cdFx0XHRcdFx0dGl0bGU6IF9fKCdDdXN0b21pemVyJywgJ25ldmUnKSxcblx0XHRcdFx0XHRpY29uOiAnYWRtaW4tY3VzdG9taXplcidcblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0czoge1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnV2lkZ2V0cycsICduZXZlJyksXG5cdFx0XHRcdFx0aWNvbjogJ2FkbWluLWdlbmVyaWMnXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgZ2VuZXJhbFwiPlxuXHRcdFx0XHRcdDxoMz57X18oJ0dlbmVyYWwnLCAnbmV2ZScpfTo8L2gzPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhtYXApLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnYWN0aXZlJzogZ2VuZXJhbFtpZF19KX0gaWNvbj17bWFwW2lkXS5pY29ufS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57bWFwW2lkXS50aXRsZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z2VuZXJhbFtpZF19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEdlbmVyYWwoey4uLmdlbmVyYWwsIFtpZF06ICEgZ2VuZXJhbFtpZF19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNvbnN0IHJlbmRlclBsdWdpbnMgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBhbGxQbHVnaW5zID0gey4uLihzaXRlRGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IHt9KSwgLi4uKHNpdGVEYXRhWydtYW5kYXRvcnlfcGx1Z2lucyddIHx8IHt9KX07XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucyBwbHVnaW5zXCI+XG5cblx0XHRcdFx0XHQ8aDM+e19fKCdQbHVnaW5zJywgJ25ldmUnKX06PC9oMz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMoYWxsUGx1Z2lucykubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJhZG1pbi1wbHVnaW5zXCIgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnYWN0aXZlJzogcGx1Z2luT3B0aW9uc1tzbHVnXX0pfS8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYWxsUGx1Z2luc1tzbHVnXX19Lz5cblx0XHRcdFx0XHRcdFx0XHRcdHtzbHVnIGluIHNpdGVEYXRhWydyZWNvbW1lbmRlZF9wbHVnaW5zJ10gJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwbHVnaW5PcHRpb25zW3NsdWddfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRQbHVnaW5PcHRpb25zKHsuLi5wbHVnaW5PcHRpb25zLCBbc2x1Z106ICEgcGx1Z2luT3B0aW9uc1tzbHVnXX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnQoKSB7XG5cdFx0XHRjb25zb2xlLmNsZWFyKCk7XG5cdFx0XHRpZiAoISBwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gUGx1Z2lucy4nKTtcblx0XHRcdFx0cnVuSW1wb3J0Q29udGVudCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgncGx1Z2lucycpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBQbHVnaW5zLicpO1xuXHRcdFx0aW5zdGFsbFBsdWdpbnMocGx1Z2luT3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ3BsdWdpbnMnKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ1tEXSBQbHVnaW5zLicpO1xuXHRcdFx0XHRzZXRQbHVnaW5zUHJvZ3Jlc3MoJ2RvbmUnKTtcblx0XHRcdFx0cnVuSW1wb3J0Q29udGVudCgpO1xuXHRcdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ3BsdWdpbnMnKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcnVuSW1wb3J0Q29udGVudCgpIHtcblx0XHRcdGlmICghIGdlbmVyYWwuY29udGVudCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnW1NdIENvbnRlbnQuJyk7XG5cdFx0XHRcdHJ1bkltcG9ydEN1c3RvbWl6ZXIoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ2NvbnRlbnQnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gQ29udGVudC4nKTtcblx0XHRcdGltcG9ydENvbnRlbnQoe1xuXHRcdFx0XHRjb250ZW50RmlsZTogc2l0ZURhdGFbJ2NvbnRlbnRfZmlsZSddLFxuXHRcdFx0XHRzb3VyY2U6IHNpdGVEYXRhLnNvdXJjZSxcblx0XHRcdFx0ZnJvbnRQYWdlOiBzaXRlRGF0YVsnZnJvbnRfcGFnZSddLFxuXHRcdFx0XHRzaG9wUGFnZXM6IHNpdGVEYXRhWydzaG9wX3BhZ2VzJ10sXG5cdFx0XHRcdGRlbW9TbHVnOiBzaXRlRGF0YS5zbHVnLFxuXHRcdFx0XHRlZGl0b3Jcblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdjb250ZW50Jyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gQ29udGVudC4nKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydmcm9udHBhZ2VfaWQnXSkge1xuXHRcdFx0XHRcdHNldEZyb250UGFnZUlEKHJlc3BvbnNlWydmcm9udHBhZ2VfaWQnXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydEN1c3RvbWl6ZXIoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdjb250ZW50JykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydEN1c3RvbWl6ZXIoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLmN1c3RvbWl6ZXIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDdXN0b21pemVyLicpO1xuXHRcdFx0XHRydW5JbXBvcnRXaWRnZXRzKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHNldEN1cnJlbnRTdGVwKCdjdXN0b21pemVyJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnW1BdIEN1c3RvbWl6ZXIuJyk7XG5cdFx0XHRpbXBvcnRNb2RzKHtcblx0XHRcdFx0J3NvdXJjZV91cmwnOiBzaXRlRGF0YVsnZGVtb191cmwnXSxcblx0XHRcdFx0J3RoZW1lX21vZHMnOiBzaXRlRGF0YVsndGhlbWVfbW9kcyddLFxuXHRcdFx0XHQnd3Bfb3B0aW9ucyc6IHNpdGVEYXRhWyd3cF9vcHRpb25zJ11cblx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdjdXN0b21pemVyJyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gQ3VzdG9taXplci4nKTtcblx0XHRcdFx0c2V0Q3VzdG9taXplclByb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydFdpZGdldHMoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdjdXN0b21pemVyJykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydFdpZGdldHMoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLndpZGdldHMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBXaWRnZXRzLicpO1xuXHRcdFx0XHRpbXBvcnREb25lKCk7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgnd2lkZ2V0cycpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBXaWRnZXRzLicpO1xuXHRcdFx0aW1wb3J0V2lkZ2V0cyhzaXRlRGF0YS53aWRnZXRzKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnd2lkZ2V0cycpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIFdpZGdldHMuJyk7XG5cdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRpbXBvcnREb25lKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnd2lkZ2V0cycpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbXBvcnREb25lKCkge1xuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ2RvbmUnKTtcblx0XHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IsIHN0ZXApIHtcblx0XHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdFx0XHRzZXRDdXJyZW50U3RlcChudWxsKTtcblx0XHRcdGlmICgncGx1Z2lucycgPT09IHN0ZXApIHtcblx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdza2lwJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWyAnY29udGVudCcsICdwbHVnaW5zJyBdLmluY2x1ZGVzKHN0ZXApKSB7XG5cdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnc2tpcCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsgJ2NvbnRlbnQnLCAncGx1Z2lucycsICdjdXN0b21pemVyJyBdLmluY2x1ZGVzKHN0ZXApKSB7XG5cdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnc2tpcCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYXAgPSB7XG5cdFx0XHRcdCdwbHVnaW5zJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGluc3RhbGxpbmcgdGhlIG5lY2Vzc2FyeSBwbHVnaW5zLicsICduZXZlJyksXG5cdFx0XHRcdCdjb250ZW50JzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2Vic2l0ZSBjb250ZW50LicsICduZXZlJyksXG5cdFx0XHRcdCdjdXN0b21pemVyJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIHVwZGF0aW5nIHRoZSBjdXN0b21pemVyIHNldHRpbmdzLicsICduZXZlJyksXG5cdFx0XHRcdCd3aWRnZXRzJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2lkZ2V0cy4nLCAnbmV2ZScpXG5cdFx0XHR9O1xuXG5cdFx0XHRzd2l0Y2ggKHN0ZXApIHtcblx0XHRcdFx0Y2FzZSAncGx1Z2lucyc6XG5cdFx0XHRcdFx0c2V0UGx1Z2luc1Byb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb250ZW50Jzpcblx0XHRcdFx0XHRzZXRDb250ZW50UHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2N1c3RvbWl6ZXInOlxuXHRcdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2lkZ2V0cyc6XG5cdFx0XHRcdFx0c2V0V2lkZ2V0c1Byb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0c2V0RXJyb3IoZXJyb3IuZGF0YSA/IHttZXNzYWdlOiBtYXBbc3RlcF0sIGNvZGU6IGVycm9yLmRhdGF9IDoge21lc3NhZ2U6IG1hcFtzdGVwXX0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsb3NlTW9kYWwgPSAoZGlzbWlzc1NpdGVEYXRhID0gZmFsc2UpID0+IHtcblx0XHRcdGlmIChpbXBvcnRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0TW9kYWwoZmFsc2UpO1xuXHRcdFx0XHRpZiAoZGlzbWlzc1NpdGVEYXRhKSB7XG5cdFx0XHRcdFx0c2V0U2l0ZShudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBhbGxPcHRpb25zT2ZmID0gT2JqZWN0LmtleXMoZ2VuZXJhbCkuZXZlcnkoayA9PiBmYWxzZSA9PT0gZ2VuZXJhbFtrXSk7XG5cdFx0Y29uc3QgZWRpdExpbmtNYXAgPSB7XG5cdFx0XHQnZWxlbWVudG9yJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS93cC1hZG1pbi9wb3N0LnBocD9wb3N0PSR7ZnJvbnRQYWdlSUR9JmFjdGlvbj1lbGVtZW50b3JgLFxuXHRcdFx0J2JyaXp5JzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS8/YnJpenktZWRpdGAsXG5cdFx0XHQnYmVhdmVyIGJ1aWxkZXInOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9mbF9idWlsZGVyYCxcblx0XHRcdCd0aHJpdmUgYXJjaGl0ZWN0JzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS93cC1hZG1pbi9wb3N0LnBocD9wb3N0PSR7ZnJvbnRQYWdlSUR9JmFjdGlvbj1hcmNoaXRlY3QmdHZlPXRydWVgLFxuXHRcdFx0J2RpdmkgYnVpbGRlcic6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vP2V0X2ZiPTEmUGFnZVNwZWVkPW9mZmAsXG5cdFx0XHQnZ3V0ZW5iZXJnJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS93cC1hZG1pbi9wb3N0LnBocD9wb3N0PSR7ZnJvbnRQYWdlSUR9JmFjdGlvbj1lZGl0YFxuXHRcdH07XG5cdFx0Y29uc3QgZWRpdExpbmsgPSBlZGl0TGlua01hcFtlZGl0b3JdO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0Y2xhc3NOYW1lPVwib2ItaW1wb3J0LW1vZGFsXCJcblx0XHRcdFx0dGl0bGU9e3NpdGVEYXRhLnRpdGxlfVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cblx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ISBpbXBvcnRpbmd9XG5cdFx0XHRcdGlzRGlzbWlzc2libGU9eyEgaW1wb3J0aW5nfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0XHR7ISBpbXBvcnRpbmcgJiYgJ2RvbmUnICE9PSBjdXJyZW50U3RlcCAmJiAhIGVycm9yID9cblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0e3JlbmRlck5vdGUoKX1cblx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0e3JlbmRlck9wdGlvbnMoKX1cblx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0e3JlbmRlclBsdWdpbnMoKX1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IDpcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0e2Vycm9yICYmXG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8SW1wb3J0TW9kYWxFcnJvciBtZXNzYWdlPXtlcnJvci5tZXNzYWdlIHx8IG51bGx9IGNvZGU9e2Vycm9yLmNvZGUgfHwgbnVsbH0vPlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PEltcG9ydFN0ZXBwZXIgcHJvZ3Jlc3M9e3tcblx0XHRcdFx0XHRcdFx0XHRwbHVnaW5zOiBwbHVnaW5zUHJvZ3Jlc3MsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudFByb2dyZXNzLFxuXHRcdFx0XHRcdFx0XHRcdGN1c3RvbWl6ZXI6IGN1c3RvbWl6ZXJQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHR3aWRnZXRzOiB3aWRnZXRzUHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0fX0gY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfSB3aWxsRG89e2dlbmVyYWx9Lz5cblx0XHRcdFx0XHRcdFx0eydkb25lJyA9PT0gY3VycmVudFN0ZXAgJiZcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW1wb3J0LXJlc3VsdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdDb250ZW50IHdhcyBzdWNjZXNzZnVsbHkgaW1wb3J0ZWQuIEVuam95IHlvdXIgbmV3IHNpdGUhJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7ISBpbXBvcnRpbmcgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHR7J2RvbmUnICE9PSBjdXJyZW50U3RlcCA/XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnQ2xvc2UnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0eyEgZXJyb3IgJiZcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXthbGxPcHRpb25zT2ZmIHx8IHNpdGVEYXRhWydleHRlcm5hbF9wbHVnaW5zJ119XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW1wb3J0aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cnVuSW1wb3J0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdJbXBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD4gOlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xvc2VcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNsb3NlTW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+e19fKCdCYWNrIHRvIFNpdGVzIExpYnJhcnknLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9XG5cdFx0XHRcdFx0XHRcdD57X18oJ1ZpZXcgV2Vic2l0ZScsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gaXNQcmltYXJ5IGhyZWY9e2VkaXRMaW5rfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0FkZCB5b3VyIG93biBjb250ZW50JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxuO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0Q3VycmVudEVkaXRvciwgZ2V0Q3VycmVudFNpdGV9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKCksXG5cdFx0XHRzaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldEltcG9ydE1vZGFsU3RhdHVzLCBzZXRDdXJyZW50U2l0ZX0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldE1vZGFsOiAoc3RhdHVzKSA9PiBzZXRJbXBvcnRNb2RhbFN0YXR1cyhzdGF0dXMpLFxuXHRcdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpXG5cdFx0fTtcblx0fSlcbikoSW1wb3J0TW9kYWwpO1xuIiwiY29uc3Qge0Rhc2hpY29uLCBCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbXBvcnRNb2RhbEVycm9yID0gKHttZXNzYWdlLCBjb2RlfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwid2VsbCBlcnJvclwiPlxuXHRcdFx0e21lc3NhZ2UgJiYgPGgzPjxEYXNoaWNvbiBpY29uPVwid2FybmluZ1wiLz48c3Bhbj57bWVzc2FnZX08L3NwYW4+PC9oMz59XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2gub25ib2FyZGluZy5zdHJpbmdzLnRyb3VibGVzaG9vdGluZ319Lz5cblx0XHRcdFx0PGxpIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBuZXZlRGFzaC5vbmJvYXJkaW5nLnN0cmluZ3Muc3VwcG9ydH19Lz5cblx0XHRcdFx0e2NvZGUgJiYgPGxpPntfXygnRXJyb3IgY29kZScsICduZXZlJyl9OiA8Y29kZT57Y29kZX08L2NvZGU+PC9saT59XG5cdFx0XHRcdDxsaT57X18oJ0Vycm9yIGxvZycsICduZXZlJyl9OiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLm9uYm9hcmRpbmcubG9nVXJsfT57bmV2ZURhc2gub25ib2FyZGluZy5sb2dVcmx9PERhc2hpY29uXG5cdFx0XHRcdFx0XHRpY29uPVwiZXh0ZXJuYWxcIi8+PC9CdXR0b24+PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRNb2RhbEVycm9yO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29uLCBCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbXBvcnRNb2RhbE5vdGUgPSAoe2RhdGF9KSA9PiB7XG5cdGNvbnN0IGV4dGVybmFsID0gZGF0YVsnZXh0ZXJuYWxfcGx1Z2lucyddIHx8IG51bGw7XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3dlbGwnLCB7J3dhcm5pbmcnOiBleHRlcm5hbH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PGgzPlxuXHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImluZm9cIi8+XG5cdFx0XHRcdDxzcGFuPntleHRlcm5hbCA/XG5cdFx0XHRcdFx0X18oJ1RvIGltcG9ydCB0aGlzIGRlbW8geW91IGhhdmUgdG8gaW5zdGFsbCB0aGUgZm9sbG93aW5nIHBsdWdpbnMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRfXygnTm90ZScsICduZXZlJyl9OlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9oMz5cblx0XHRcdDxvbD5cblx0XHRcdFx0e2V4dGVybmFsID9cblx0XHRcdFx0XHRPYmplY3Qua2V5cyhleHRlcm5hbCkubWFwKHNsdWcgPT4gPGxpPjxCdXR0b24gaXNMaW5rIGhyZWY9e2V4dGVybmFsW3NsdWddLnVybH0+e3NsdWd9PC9CdXR0b24+PC9saT4pIDpcblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8bGk+e19fKCdXZSByZWNvbW1lbmQgeW91IGJhY2t1cCB5b3VyIHdlYnNpdGUgY29udGVudCBiZWZvcmUgYXR0ZW1wdGluZyBhIGZ1bGwgc2l0ZSBpbXBvcnQuJywgJ25ldmUnKX08L2xpPlxuXHRcdFx0XHRcdFx0PGxpPntfXygnU29tZSBvZiB0aGUgZGVtbyBpbWFnZXMgd2lsbCBub3QgYmUgaW1wb3J0ZWQgYW5kIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXIgaW1hZ2VzLicsICduZXZlJyl9PC9saT5cblx0XHRcdFx0XHRcdHtkYXRhWyd1bnNwbGFzaF9nYWxsZXJ5J10gJiZcblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtkYXRhWyd1bnNwbGFzaF9nYWxsZXJ5J119PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnSGVyZSBpcyBvdXIgb3duIGNvbGxlY3Rpb24gb2YgcmVsYXRlZCBpbWFnZXMgeW91IGNhbiB1c2UgZm9yIHlvdXIgc2l0ZS4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdDwvb2w+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRNb2RhbE5vdGU7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IEltcG9ydFN0ZXBwZXIgPSAoe2N1cnJlbnRTdGVwLCBwcm9ncmVzcywgd2lsbERvfSkgPT4ge1xuXG5cdGNvbnN0IHN0ZXBzTWFwID0ge1xuXHRcdHBsdWdpbnM6IHtcblx0XHRcdGxhYmVsOiBfXygnSW5zdGFsbGluZyBQbHVnaW5zJywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3MucGx1Z2lucyxcblx0XHRcdHdpbGxEbzogdHJ1ZVxuXHRcdH0sXG5cdFx0Y29udGVudDoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbXBvcnRpbmcgQ29udGVudCcsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLmNvbnRlbnQsXG5cdFx0XHR3aWxsRG86IHdpbGxEby5jb250ZW50XG5cdFx0fSxcblx0XHRjdXN0b21pemVyOiB7XG5cdFx0XHRsYWJlbDogX18oJ0ltcG9ydGluZyBDdXN0b21pemVyIFNldHRpbmdzJywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3MuY3VzdG9taXplcixcblx0XHRcdHdpbGxEbzogd2lsbERvLmN1c3RvbWl6ZXJcblx0XHR9LFxuXHRcdHdpZGdldHM6IHtcblx0XHRcdGxhYmVsOiBfXygnSW1wb3J0aW5nIFdpZGdldHMnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy53aWRnZXRzLFxuXHRcdFx0d2lsbERvOiB3aWxsRG8ud2lkZ2V0c1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDx1bCBjbGFzc05hbWU9XCJzdGVwcGVyXCI+XG5cdFx0XHR7T2JqZWN0LmtleXMoc3RlcHNNYXApLm1hcChrZXkgPT4ge1xuXHRcdFx0XHRjb25zdCB7bGFiZWwsIHN0YXR1cywgd2lsbERvfSA9IHN0ZXBzTWFwW2tleV07XG5cblx0XHRcdFx0aWYgKCEgd2lsbERvKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbXG5cdFx0XHRcdFx0J2ljb24nLCB7XG5cdFx0XHRcdFx0XHQnbG9hZGluZyc6IGN1cnJlbnRTdGVwID09PSBrZXksXG5cdFx0XHRcdFx0XHQnd2FybmluZyc6IGN1cnJlbnRTdGVwID09PSBrZXksXG5cdFx0XHRcdFx0XHQnc3VjY2Vzcyc6ICdkb25lJyA9PT0gc3RhdHVzLFxuXHRcdFx0XHRcdFx0J2Vycm9yJzogJ2Vycm9yJyA9PT0gc3RhdHVzLFxuXHRcdFx0XHRcdFx0J3NraXAnOiAnc2tpcCcgPT09IHN0YXR1c1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSk7XG5cblx0XHRcdFx0bGV0IGljb24gPSAnY2xvY2snO1xuXHRcdFx0XHRpZiAoY3VycmVudFN0ZXAgPT09IGtleSkge1xuXHRcdFx0XHRcdGljb24gPSAndXBkYXRlJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgnZG9uZScgPT09IHN0YXR1cykge1xuXHRcdFx0XHRcdGljb24gPSAneWVzJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgnZXJyb3InID09PSBzdGF0dXMgKSB7XG5cdFx0XHRcdFx0aWNvbiA9ICduby1hbHQnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPXtpY29ufSBjbGFzc05hbWU9e2N1cnJlbnRTdGVwID09PSBrZXkgPyAnbG9hZGluZycgOiAnJ30vPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuPntsYWJlbH08L3NwYW4+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvdWw+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydFN0ZXBwZXI7XG4iLCJjb25zdCB7d2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMb2FkaW5nID0gKHtpc09uYm9hcmRpbmd9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYiBtb2NrLWRhc2hcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItaGVhZFwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0e2lzT25ib2FyZGluZyAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cImxvYWRpbmcgY29tcG9uZW50cy1idXR0b24gaXMtcHJpbWFyeVwiLz59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWZvcm1cIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1kcm9wZG93blwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLWljb24gbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1zaXRlc1wiPlxuXHRcdFx0XHRcdHtbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkgXS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGUgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2lzT25ib2FyZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT1cIm9iLWZvb3RlclwiLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0Y29uc3Qge2dldE9uYm9hcmRpbmdTdGF0dXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0cmV0dXJuIHtpc09uYm9hcmRpbmc6IGdldE9uYm9hcmRpbmdTdGF0dXMoKX1cblx0XHQ7XG59KShMb2FkaW5nKTtcbiIsImltcG9ydCBFZGl0b3JTZWxlY3RvciBmcm9tICcuL0VkaXRvclNlbGVjdG9yJztcbmltcG9ydCBTdGFydGVyU2l0ZUNhcmQgZnJvbSAnLi9TdGFydGVyU2l0ZUNhcmQnO1xuaW1wb3J0IFByZXZpZXdGcmFtZSBmcm9tICcuL1ByZXZpZXdGcmFtZSc7XG5pbXBvcnQgSW1wb3J0TW9kYWwgZnJvbSAnLi9JbXBvcnRNb2RhbCc7XG5pbXBvcnQgTWlncmF0aW9uIGZyb20gJy4vTWlncmF0aW9uJztcbmltcG9ydCBWaXpTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgRnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgT25ib2FyZGluZyA9ICh7c2l0ZXMsIHVwc2VsbHMsIGVkaXRvciwgcHJldmlld09wZW4sIGN1cnJlbnRTaXRlRGF0YSwgaW1wb3J0TW9kYWwsIGlzT25ib2FyZGluZywgY2FuY2VsT25ib2FyZGluZywgbWlncmF0aW9ufSkgPT4ge1xuXHRjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIG1heFNob3duLCBzZXRNYXhTaG93biBdID0gdXNlU3RhdGUoOSk7XG5cblx0Y29uc3QgZmlsdGVyU2l0ZXMgPSAoc2l0ZXMpID0+IHtcblx0XHRPYmplY3Qua2V5cyhzaXRlcykubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRzaXRlc1tzbHVnXS5zbHVnID0gc2x1Zztcblx0XHR9KTtcblxuXHRcdHNpdGVzID0gT2JqZWN0LnZhbHVlcyhzaXRlcyk7XG5cblx0XHRpZiAoISBzZWFyY2hRdWVyeSkge1xuXHRcdFx0cmV0dXJuIHNpdGVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShzaXRlcywge1xuXHRcdFx0aW5jbHVkZVNjb3JlOiB0cnVlLFxuXHRcdFx0a2V5czogWyAndGl0bGUnLCAnc2x1ZycsICdrZXl3b3JkcycgXVxuXHRcdH0pO1xuXHRcdGNvbnN0IHNlYXJjaCA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFF1ZXJ5KTtcblx0XHRyZXR1cm4gc2VhcmNoLm1hcChpdGVtID0+IGl0ZW0uaXRlbSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0QWxsU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2l0ZXNEYXRhID0gc2l0ZXMgJiYgc2l0ZXNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHNpdGVzW2VkaXRvcl0pIDogW107XG5cdFx0Y29uc3QgdXBzZWxsc0RhdGEgPSB1cHNlbGxzICYmIHVwc2VsbHNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHVwc2VsbHNbZWRpdG9yXSkgOiBbXTtcblx0XHRyZXR1cm4gWyAuLi5zaXRlc0RhdGEsIC4uLnVwc2VsbHNEYXRhIF07XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYWxsRGF0YSA9IGdldEFsbFNpdGVzKCk7XG5cblx0XHRyZXR1cm4gYWxsRGF0YS5zbGljZSgwLCBtYXhTaG93bikubWFwKHNpdGUgPT4ge1xuXHRcdFx0cmV0dXJuIDxTdGFydGVyU2l0ZUNhcmQgdXBzZWxsPXtzaXRlWydpbl9wcm8nXX0gZGF0YT17c2l0ZX0vPjtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBnZXRTaXRlTmF2ID0gKHByZXYgPSBmYWxzZSkgPT4ge1xuXHRcdGlmIChudWxsID09PSBjdXJyZW50U2l0ZURhdGEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBhbGxTaXRlcyA9IGdldEFsbFNpdGVzKCk7XG5cdFx0Y29uc3QgcG9zaXRpb24gPSBhbGxTaXRlcy5pbmRleE9mKGN1cnJlbnRTaXRlRGF0YSk7XG5cblx0XHRpZiAoLTEgPT09IHBvc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoMSA9PT0gYWxsU2l0ZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAocHJldiAmJiAwID09PSBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIGFsbFNpdGVzW2FsbFNpdGVzLmxlbmd0aCAtIDFdO1xuXHRcdH1cblxuXHRcdGlmICghIHByZXYgJiYgcG9zaXRpb24gPT09IGFsbFNpdGVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHJldHVybiBhbGxTaXRlc1swXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWxsU2l0ZXNbcHJldiA/IHBvc2l0aW9uIC0gMSA6IHBvc2l0aW9uICsgMV07XG5cdH07XG5cblx0ZnVuY3Rpb24gcmVuZGVyTWlncmF0aW9uKCkge1xuXHRcdGlmICghIG1pZ3JhdGlvbikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiA8TWlncmF0aW9uIGRhdGE9e21pZ3JhdGlvbn0vPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYlwiPlxuXHRcdFx0XHR7cmVuZGVyTWlncmF0aW9uKCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItaGVhZFwiPlxuXHRcdFx0XHRcdDxoMj57X18oJ1JlYWR5IHRvIHVzZSBwcmUtYnVpbHQgd2Vic2l0ZXMgd2l0aCAxLWNsaWNrIGluc3RhbGxhdGlvbicsICduZXZlJyl9PC9oMj5cblx0XHRcdFx0XHQ8cD57bmV2ZURhc2guc3RyaW5ncy5zdGFydGVyU2l0ZXNUYWJEZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0e2lzT25ib2FyZGluZyAmJlxuXHRcdFx0XHRcdDxCdXR0b24gaXNQcmltYXJ5IG9uQ2xpY2s9e2NhbmNlbE9uYm9hcmRpbmd9PntfXygnS2VlcCB0aGUgQ3VycmVudCBMYXlvdXQnLCAnbmV2ZScpfTwvQnV0dG9uPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItYm9keVwiPlxuXHRcdFx0XHRcdDxFZGl0b3JTZWxlY3RvclxuXHRcdFx0XHRcdFx0b25TZWFyY2g9eyhxdWVyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2hRdWVyeShxdWVyeSk7XG5cdFx0XHRcdFx0XHRcdHNldE1heFNob3duKDkpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHF1ZXJ5PXtzZWFyY2hRdWVyeX0vPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2Itc2l0ZXNcIj5cblx0XHRcdFx0XHRcdHsoc2l0ZXMgfHwgdXBzZWxscykgJiYgcmVuZGVyU2l0ZXMoKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Vml6U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0TWF4U2hvd24obWF4U2hvd24gKyA5KTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7aGVpZ2h0OiAxMCwgd2lkdGg6IDEwLCBkaXNwbGF5OiAnYmxvY2snfX0vPlxuXHRcdFx0XHRcdDwvVml6U2Vuc29yPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyhwcmV2aWV3T3BlbiAmJiBjdXJyZW50U2l0ZURhdGEpICYmIDxQcmV2aWV3RnJhbWUgbmV4dD17Z2V0U2l0ZU5hdigpfSBwcmV2PXtnZXRTaXRlTmF2KHRydWUpfS8+fVxuXHRcdFx0eyhpbXBvcnRNb2RhbCAmJiBjdXJyZW50U2l0ZURhdGEpICYmIDxJbXBvcnRNb2RhbC8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3Qge3NldE9uYm9hcmRpbmdTdGF0ZX0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNhbmNlbE9uYm9hcmRpbmc6ICgpID0+IHtcblx0XHRcdFx0c2V0T25ib2FyZGluZ1N0YXRlKGZhbHNlKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldFNpdGVzLFxuXHRcdFx0Z2V0VXBzZWxscyxcblx0XHRcdGdldEN1cnJlbnRFZGl0b3IsXG5cdFx0XHRnZXRQcmV2aWV3U3RhdHVzLFxuXHRcdFx0Z2V0Q3VycmVudFNpdGUsXG5cdFx0XHRnZXRJbXBvcnRNb2RhbFN0YXR1cyxcblx0XHRcdGdldE9uYm9hcmRpbmdTdGF0dXMsXG5cdFx0XHRnZXRNaWdyYXRpb25EYXRhXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVzOiBnZXRTaXRlcygpLFxuXHRcdFx0dXBzZWxsczogZ2V0VXBzZWxscygpLFxuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKCksXG5cdFx0XHRwcmV2aWV3T3BlbjogZ2V0UHJldmlld1N0YXR1cygpLFxuXHRcdFx0Y3VycmVudFNpdGVEYXRhOiBnZXRDdXJyZW50U2l0ZSgpLFxuXHRcdFx0aW1wb3J0TW9kYWw6IGdldEltcG9ydE1vZGFsU3RhdHVzKCksXG5cdFx0XHRpc09uYm9hcmRpbmc6IGdldE9uYm9hcmRpbmdTdGF0dXMoKSxcblx0XHRcdG1pZ3JhdGlvbjogZ2V0TWlncmF0aW9uRGF0YSgpXG5cdFx0fTtcblx0fSlcbikoT25ib2FyZGluZyk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQge2luc3RhbGxQbHVnaW5zfSBmcm9tICcuLi8uLi91dGlscy9zaXRlLWltcG9ydCc7XG5pbXBvcnQgSW1wb3J0TW9kYWxOb3RlIGZyb20gJy4vSW1wb3J0TW9kYWxOb3RlJztcbmltcG9ydCBJbXBvcnRNb2RhbEVycm9yIGZyb20gJy4vSW1wb3J0TW9kYWxFcnJvcic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0Rhc2hpY29uLCBCdXR0b24sIE1vZGFsfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IE1pZ3JhdGlvbiA9ICh7ZGF0YSwgZGlzbWlzc01pZ3JhdGlvbiwgc2V0VG9hc3R9KSA9PiB7XG5cdGNvbnN0IFsgbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBtaWdyYXRpbmcsIHNldE1pZ3JhdGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFsgZnJvbnRQYWdlSUQsIHNldEZyb250UGFnZUlEIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRpZiAoJ2RvbmUnID09PSBtaWdyYXRpbmcpIHtcblx0XHRcdGRpc21pc3NNaWdyYXRpb24oKTtcblx0XHR9XG5cdFx0c2V0TW9kYWxPcGVuKGZhbHNlKTtcblx0XHRzZXRFcnJvcihudWxsKTtcblx0XHRzZXRNaWdyYXRpbmcoZmFsc2UpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHN0YXJ0TWlncmF0aW9uKCkge1xuXHRcdGNvbnN0IHBsdWdpbnMgPSBPYmplY3Qua2V5cyhkYXRhLm1hbmRhdG9yeV9wbHVnaW5zKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGtleSkge1xuXHRcdFx0cFtrZXldID0gdHJ1ZTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH0sIHt9KTtcblxuXHRcdGluc3RhbGxQbHVnaW5zKHBsdWdpbnMpLnRoZW4ociA9PiB7XG5cdFx0XHRzZXRNaWdyYXRpbmcodHJ1ZSk7XG5cdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0c2V0RXJyb3Ioe1xuXHRcdFx0XHRcdGNvZGU6IHIuZGF0YSB8fCBudWxsLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBpbnN0YWxsaW5nIHRoZSBuZWNlc3NhcnkgcGx1Z2lucy4nLCAnbmV2ZScpXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzZXRNaWdyYXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7dGVtcGxhdGUsIHRlbXBsYXRlX25hbWV9ID0gZGF0YTtcblx0XHRcdHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9taWdyYXRlX2Zyb250cGFnZScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZW1wbGF0ZSxcblx0XHRcdFx0XHR0ZW1wbGF0ZV9uYW1lXG5cdFx0XHRcdH1cblx0XHRcdCkudGhlbihyID0+IHtcblx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0c2V0RXJyb3Ioe1xuXHRcdFx0XHRcdFx0Y29kZTogci5kYXRhIHx8IG51bGwsXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW1wb3J0aW5nIHRoZSB3ZWJzaXRlIGNvbnRlbnQuJywgJ25ldmUnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldE1pZ3JhdGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEZyb250UGFnZUlEKHIuZGF0YSk7XG5cdFx0XHRcdHNldE1pZ3JhdGluZygnZG9uZScpO1xuXHRcdFx0fSk7XG5cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHJlbmRlck1vZGFsID0gKCkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0Y2xhc3NOYW1lPVwib2ItaW1wb3J0LW1vZGFsIG1pZ3JhdGlvblwiXG5cdFx0XHRcdHRpdGxlPXtfXygnTWlncmF0ZScsICduZXZlJykgKyAnICcgKyBkYXRhLnRoZW1lX25hbWV9XG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuXHRcdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXshIG1pZ3JhdGluZ31cblx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ISBtaWdyYXRpbmd9XG5cdFx0XHQ+XG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cblx0XHRcdFx0XHRcdHtlcnJvciAmJiA8SW1wb3J0TW9kYWxFcnJvciBtZXNzYWdlPXtlcnJvci5tZXNzYWdlIHx8IG51bGx9IGNvZGU9e2Vycm9yLmNvZGUgfHwgbnVsbH0vPn1cblx0XHRcdFx0XHRcdHtmYWxzZSA9PT0gbWlncmF0aW5nICYmICEgZXJyb3IgJiZcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PEltcG9ydE1vZGFsTm90ZSBkYXRhPXtkYXRhfS8+XG5cdFx0XHRcdFx0XHRcdHtkYXRhLm1hbmRhdG9yeV9wbHVnaW5zICYmXG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57X18oJ1RoZSBmb2xsb3dpbmcgcGx1Z2lucyB3aWxsIGJlIGluc3RhbGxlZCcsICduZXZlJyl9OjwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLm1hbmRhdG9yeV9wbHVnaW5zKS5tYXAoayA9PiA8bGk+LSB7ZGF0YS5tYW5kYXRvcnlfcGx1Z2luc1trXX08L2xpPilcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0eydkb25lJyA9PT0gbWlncmF0aW5nICYmXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpbXBvcnQtcmVzdWx0XCI+XG5cdFx0XHRcdFx0XHRcdHtfXygnQ29udGVudCB3YXMgc3VjY2Vzc2Z1bGx5IGltcG9ydGVkLiBFbmpveSB5b3VyIG5ldyBzaXRlIScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRydWUgPT09IG1pZ3JhdGluZyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiIHNpemU9ezUwfS8+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPntfXygnTWlncmF0aW5nJywgJ25ldmUnKX0uLi48L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7KCEgbWlncmF0aW5nIHx8ICdkb25lJyA9PT0gbWlncmF0aW5nKSAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsnZG9uZScgIT09IG1pZ3JhdGluZ31cblx0XHRcdFx0XHRcdFx0aXNMaW5rPXsnZG9uZScgPT09IG1pZ3JhdGluZ31cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsnZG9uZScgPT09IG1pZ3JhdGluZyA/ICdjbG9zZScgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjbG9zZU1vZGFsfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7J2RvbmUnID09PSBtaWdyYXRpbmcgPyBfXygnQ2xvc2UnLCAnbmV2ZScpIDogX18oJ0NhbmNlbCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdHsoISBlcnJvciAmJiAnZG9uZScgIT09IG1pZ3JhdGluZykgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRNaWdyYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1N0YXJ0IE1pZ3JhdGlvbicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPiA6XG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS93cC1hZG1pbi9wb3N0LnBocD9wb3N0PSR7ZnJvbnRQYWdlSUR9JmFjdGlvbj1lbGVtZW50b3JgfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBDb250ZW50JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1ZpZXcgV2Vic2l0ZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1taWdyYXRpb25cIj5cblx0XHRcdHttb2RhbE9wZW4gJiYgcmVuZGVyTW9kYWwoKX1cblx0XHRcdDxoMj57ZGF0YS5oZWFkaW5nfTwvaDI+XG5cdFx0XHQ8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHR7ZGF0YS5zY3JlZW5zaG90ICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRoZW1lX25hbWV9Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGhlbWVfbmFtZX08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNldE1vZGFsT3Blbih0cnVlKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+e19fKCdNaWdyYXRlJywgJ25ldmUnKSArICcgJyArIGRhdGEudGhlbWVfbmFtZX08L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2Rpc21pc3NfbWlncmF0aW9uJywge1xuXHRcdFx0XHRcdFx0XHR0aGVtZV9tb2Q6IGRhdGEudGhlbWVfbW9kXG5cdFx0XHRcdFx0XHR9KS50aGVuKHIgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSByZWxvYWQgdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0Rpc21pc3NlZCcsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRkaXNtaXNzTWlncmF0aW9uKCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+e19fKCdEaXNtaXNzJywgJ25ldmUnKX08L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xuXG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0Y29uc3Qge3NldE1pZ3JhdGlvbkRhdGF9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0ZGlzbWlzc01pZ3JhdGlvbjogKCkgPT4ge1xuXHRcdFx0c2V0TWlncmF0aW9uRGF0YShudWxsKTtcblx0XHR9LFxuXHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4ge1xuXHRcdFx0c2V0VG9hc3QobWVzc2FnZSk7XG5cdFx0fVxuXHR9O1xufSkoTWlncmF0aW9uKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTWlncmF0aW9uO1xuIiwiY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgUHJldmlld0ZyYW1lID0gKHtuZXh0LCBwcmV2LCBzaXRlRGF0YSwgc2V0U2l0ZSwgc2V0UHJldmlldywgc2V0TW9kYWx9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1wcmV2aWV3XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdcIj5cblx0XHRcdFx0PGlmcmFtZSBzcmM9e3NpdGVEYXRhWydkZW1vX3VybCddfSBmcmFtZWJvcmRlcj1cIjBcIi8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuXHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIgc2l6ZT17NTB9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWJhclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRvclwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0UHJldmlldyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUobnVsbCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xvc2VcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDbG9zZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRpY29uPVwibm9cIi8+XG5cblx0XHRcdFx0XHR7cHJldiAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUocHJldik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJldlwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1ByZXZpb3VzJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1sZWZ0LWFsdDJcIlxuXHRcdFx0XHRcdC8+fVxuXG5cdFx0XHRcdFx0e25leHQgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKG5leHQpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdOZXh0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1yaWdodC1hbHQyXCJcblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtzaXRlRGF0YVsnaW5fcHJvJ10gP1xuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1cGdyYWRlXCJcblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9e3NpdGVEYXRhWydvdXRib3VuZF9saW5rJ119XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50U2l0ZX0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50U2l0ZSwgc2V0UHJldmlld1N0YXR1cywgc2V0SW1wb3J0TW9kYWxTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlOiAoZGF0YSkgPT4gc2V0Q3VycmVudFNpdGUoZGF0YSksXG5cdFx0XHRzZXRQcmV2aWV3OiAoc3RhdHVzKSA9PiBzZXRQcmV2aWV3U3RhdHVzKHN0YXR1cyksXG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHRcdH07XG5cdH0pXG4pKFByZXZpZXdGcmFtZSk7XG4iLCJjb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgU3RhcnRlclNpdGVDYXJkID0gKHtkYXRhLCB1cHNlbGwsIHNldFNpdGUsIHNldFByZXZpZXcsIHNldE1vZGFsfSkgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cImZhdlwiPlxuXHRcdFx0XHRcdDxCdXR0b24gaWNvbj1cInN0YXItZmlsbGVkXCIvPlxuXHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJldmlld1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdHNldFByZXZpZXcodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnUHJldmlldycsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0eyEgdXBzZWxsICYmXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1wb3J0XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShkYXRhKTtcblx0XHRcdFx0XHRcdFx0c2V0TW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7ZGF0YS5zY3JlZW5zaG90ICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YS5zY3JlZW5zaG90fSBhbHQ9e2RhdGEudGl0bGV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS50aXRsZX08L3A+XG5cdFx0XHRcdHt1cHNlbGwgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHJvLWJhZGdlXCI+e19fKCdQcm8nLCAnbmV2ZScpfTwvc3Bhbj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtzZXRDdXJyZW50U2l0ZSwgc2V0UHJldmlld1N0YXR1cywgc2V0SW1wb3J0TW9kYWxTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRyZXR1cm4ge1xuXHRcdHNldFNpdGU6IChkYXRhKSA9PiBzZXRDdXJyZW50U2l0ZShkYXRhKSxcblx0XHRzZXRQcmV2aWV3OiAoc3RhdHVzKSA9PiBzZXRQcmV2aWV3U3RhdHVzKHN0YXR1cyksXG5cdFx0c2V0TW9kYWw6IChzdGF0dXMpID0+IHNldEltcG9ydE1vZGFsU3RhdHVzKHN0YXR1cylcblx0fTtcbn0pXG4oU3RhcnRlclNpdGVDYXJkKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0c2V0U2l0ZXMoc2l0ZXMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TSVRFUycsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZXN9XG5cdFx0fTtcblx0fSxcblx0c2V0VXBzZWxscyh1cHNlbGxzKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfVVBTRUxMUycsXG5cdFx0XHRwYXlsb2FkOiB7dXBzZWxsc31cblx0XHR9O1xuXHR9LFxuXHRzZXRNaWdyYXRpb25EYXRhKG1pZ3JhdGlvbkRhdGEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9NSUdSQVRJT05fREFUQScsXG5cdFx0XHRwYXlsb2FkOiB7bWlncmF0aW9uRGF0YX1cblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50RWRpdG9yKGVkaXRvcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0NVUlJFTlRfRURJVE9SJyxcblx0XHRcdHBheWxvYWQ6IHtlZGl0b3J9XG5cdFx0fTtcblx0fSxcblx0c2V0Q3VycmVudFNpdGUoc2l0ZURhdGEpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9GT0NVU0VEX1NJVEUnLFxuXHRcdFx0cGF5bG9hZDoge3NpdGVEYXRhfVxuXHRcdH07XG5cdH0sXG5cdHNldFByZXZpZXdTdGF0dXMocHJldmlld1N0YXR1cykge1xuXHRcdGlmIChwcmV2aWV3U3RhdHVzKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9QUkVWSUVXX1NUQVRVUycsXG5cdFx0XHRwYXlsb2FkOiB7cHJldmlld1N0YXR1c31cblx0XHR9O1xuXHR9LFxuXHRzZXRJbXBvcnRNb2RhbFN0YXR1cyhpbXBvcnRNb2RhbFN0YXR1cykge1xuXHRcdGlmIChpbXBvcnRNb2RhbFN0YXR1cykge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvYi1vdmVyZmxvdy1vZmYnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvYi1vdmVyZmxvdy1vZmYnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfSU1QT1JUX01PREFMX1NUQVRVUycsXG5cdFx0XHRwYXlsb2FkOiB7aW1wb3J0TW9kYWxTdGF0dXN9XG5cdFx0fTtcblx0fSxcblx0c2V0T25ib2FyZGluZ1N0YXRlKHN0YXRlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfT05CT0FSRElORycsXG5cdFx0XHRwYXlsb2FkOiB7c3RhdGV9XG5cdFx0fTtcblx0fVxufTtcbiIsIi8qIGdsb2JhbCB3cCwgbmV2ZURhc2ggICovXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNpdGVzOiBudWxsLFxuXHR1cHNlbGxzOiBudWxsLFxuXHRlZGl0b3I6ICdlbGVtZW50b3InLFxuXHRwcmV2aWV3U3RhdHVzOiBmYWxzZSxcblx0aW1wb3J0TW9kYWxTdGF0dXM6IGZhbHNlLFxuXHRjdXJyZW50U2l0ZTogbnVsbCxcblx0aW1wb3J0aW5nOiBmYWxzZSxcblx0aXNPbmJvYXJkaW5nOiBuZXZlRGFzaC5vbmJvYXJkaW5nLm9uYm9hcmRpbmcgfHwgZmFsc2UsXG5cdG1pZ3JhdGlvbkRhdGE6IG51bGxcbn07XG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1NJVEVTJzpcblx0XHRcdGNvbnN0IHtzaXRlc30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaXRlc1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfVVBTRUxMUyc6XG5cdFx0XHRjb25zdCB7dXBzZWxsc30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR1cHNlbGxzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9NSUdSQVRJT05fREFUQSc6XG5cdFx0XHRjb25zdCB7bWlncmF0aW9uRGF0YX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtaWdyYXRpb25EYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9DVVJSRU5UX0VESVRPUic6XG5cdFx0XHRjb25zdCB7ZWRpdG9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGVkaXRvclxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfRk9DVVNFRF9TSVRFJzpcblx0XHRcdGNvbnN0IHtzaXRlRGF0YX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjdXJyZW50U2l0ZTogc2l0ZURhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1BSRVZJRVdfU1RBVFVTJzpcblx0XHRcdGNvbnN0IHtwcmV2aWV3U3RhdHVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHByZXZpZXdTdGF0dXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0lNUE9SVF9NT0RBTF9TVEFUVVMnOlxuXHRcdFx0Y29uc3Qge2ltcG9ydE1vZGFsU3RhdHVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGltcG9ydE1vZGFsU3RhdHVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9PTkJPQVJESU5HJzpcblx0XHRcdGNvbnN0IHtzdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aXNPbmJvYXJkaW5nOiBzdGF0dXNcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0U2l0ZXM6IChzdGF0ZSkgPT4gc3RhdGUuc2l0ZXMsXG5cdGdldFVwc2VsbHM6IChzdGF0ZSkgPT4gc3RhdGUudXBzZWxscyxcblx0Z2V0TWlncmF0aW9uRGF0YTogKHN0YXRlKSA9PiBzdGF0ZS5taWdyYXRpb25EYXRhLFxuXHRnZXRDdXJyZW50RWRpdG9yOiAoc3RhdGUpID0+IHN0YXRlLmVkaXRvcixcblx0Z2V0Q3VycmVudFNpdGU6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFNpdGUsXG5cdGdldFByZXZpZXdTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUucHJldmlld1N0YXR1cyxcblx0Z2V0SW1wb3J0TW9kYWxTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUuaW1wb3J0TW9kYWxTdGF0dXMsXG5cdGdldE9uYm9hcmRpbmdTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUuaXNPbmJvYXJkaW5nXG59O1xuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb24gYXMgY2hhbmdlU2V0dGluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW5wdXRGb3JtID0gKHtzbHVnLCBsYWJlbCwgcGxhY2Vob2xkZXIsIGdldE9wdGlvbiwgc2V0VG9hc3QsIGNoYW5nZU9wdGlvbn0pID0+IHtcblx0Y29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKGdldE9wdGlvbihzbHVnKSk7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtb2R1bGUtb3B0aW9uIHRleHQnPlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e1xuXHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdGNoYW5nZVNldHRpbmcoc2x1ZywgdmFsdWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmIChyLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0c2V0VG9hc3QodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUb2FzdChyLm1lc3NhZ2UgPyByLm1lc3NhZ2UgOiBmYWxzZSk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fT5cblx0XHRcdFx0e2xhYmVsICYmIDxsYWJlbCBodG1sRm9yPXtzbHVnfT57bGFiZWx9PC9sYWJlbD59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcFwiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0aWQ9e3NsdWd9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtsb2FkaW5nID8gJ2lzLWxvYWRpbmcnIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtsb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NhdmUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRpY29uPXtsb2FkaW5nID8gJ3VwZGF0ZScgOiAnZWRpdG9yLWJyZWFrJ31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRPcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRPcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShJbnB1dEZvcm0pO1xuXG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge1RvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBUb2dnbGUgPSAoe3NsdWcsIGxhYmVsLCBnZXRPcHRpb24sIGNoYW5nZU9wdGlvbiwgc2V0VG9hc3R9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtb2R1bGUtb3B0aW9uIHRvZ2dsZSc+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRjaGVja2VkPXtnZXRPcHRpb24oc2x1Zyl9XG5cdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyggc2x1ZywgdmFsdWUgKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIHIuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoIHRydWUgKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KCBmYWxzZSApO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldE9wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldE9wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKFRvZ2dsZSk7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2dldH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtzbHVnLCBkYXRhfSA9IHByb3BzO1xuXHRjb25zdCB7YmFubmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgdmVyc2lvbiwgYXV0aG9yfSA9IHByb3BzLmRhdGE7XG5cdGNvbnN0IFsgYWN0aW9uLCBzZXRBY3Rpb24gXSA9IHVzZVN0YXRlKGRhdGEuY3RhKTtcblx0Y29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3Qgc3RyaW5nTWFwID0ge1xuXHRcdCdpbnN0YWxsJzoge3N0YXRpYzogX18oJ0luc3RhbGwnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0luc3RhbGxpbmcnLCAnbmV2ZScpfSxcblx0XHQnYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnQWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpfSxcblx0XHQnZGVhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpfVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsICdwbHVnaW4nLCBzbHVnIF0pfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0PGltZyBzcmM9e2Jhbm5lcn0gYWx0PXtfXygnQmFubmVyIEltYWdlJywgJ25hbWUnKX0vPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lfTwvaDM+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGx1Z2luLWRhdGFcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJwbHVnaW4tYWN0aW9uXCJcblx0XHRcdFx0XHRpc1ByaW1hcnk9e1sgJ2luc3RhbGwnLCAnYWN0aXZhdGUnIF0uaW5jbHVkZXMoYWN0aW9uKX1cblx0XHRcdFx0XHRpc1NlY29uZGFyeT17J2RlYWN0aXZhdGUnID09PSBhY3Rpb259XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyh0cnVlKTtcblx0XHRcdFx0XHRcdGlmICgnaW5zdGFsbCcgPT09IGFjdGlvbikge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsUGx1Z2luKHNsdWcpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Z2V0KGRhdGFbYWN0aW9uXSwgdHJ1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoISByLm9rKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cblx0XHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoJ2FjdGl2YXRlJyA9PT0gYWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aW9uKCdkZWFjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHshIGluUHJvZ3Jlc3MgJiYgc3RyaW5nTWFwW2FjdGlvbl0uc3RhdGljfVxuXHRcdFx0XHRcdHtpblByb2dyZXNzICYmIChcblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+XG5cdFx0XHRcdFx0XHRcdHtzdHJpbmdNYXBbYWN0aW9uXS5wcm9ncmVzcyArICcuLi4nfVxuICAgICAgICAgICAgPC9zcGFuPil9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBpbnN0YWxsUGx1Z2luID0gKHNsdWcpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdHdwLnVwZGF0ZXMuYWpheCgnaW5zdGFsbC1wbHVnaW4nLCB7XG5cdFx0XHRzbHVnLFxuXHRcdFx0c3VjY2VzczogKHIpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogdHJ1ZX0pO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOiAoZXJyKSA9PiB7XG5cblx0XHRcdFx0Ly8gZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UgYXJlIHBhcmFtcyBvZiBlcnIgaWYgd2UgdG9hc3QuXG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICh7Y3VycmVudFRhYn0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdHshIG5ldmVEYXNoLndoaXRlTGFiZWwgJiZcblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQXJlIHlvdSBhcmUgZW5qb3lpbmcgTmV2ZT8gV2Ugd291bGQgbG92ZSB0byBoZWFyIHlvdXIgZmVlZGJhY2suJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZW5kKG5ldmVEYXNoLmFwaSArICcvdG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IHVwZGF0ZSBvcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyghIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0b2FzdCAmJlxuXHRcdFx0XHRcdDxUb2FzdCBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9IHR5cGU9e3RvYXN0VHlwZX0vPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImNvbnN0IHtTbmFja2Jhcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZUVmZmVjdCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IEdsb2JhbFNuYWNrYmFyID0gKHt0b2FzdCwgc2V0VG9hc3R9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRUb2FzdChudWxsKTtcblx0XHR9LCAzMDAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSB0b2FzdCgpO1xuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRvcGFjaXR5OiBudWxsID09PSBtZXNzYWdlID8gMCA6IDFcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxTbmFja2JhclxuXHRcdFx0XHRjbGFzc05hbWU9J2Rhc2gtbm90aWNlJ1xuXHRcdFx0PlxuXHRcdFx0XHR7J2Jvb2xlYW4nID09PSB0eXBlb2YgbWVzc2FnZSA/XG5cdFx0XHRcdFx0KGZhbHNlID09PSBtZXNzYWdlID9cblx0XHRcdFx0XHRcdF9fKCdDb3VsZCBub3QgVXBkYXRlIE9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpIDpcblx0XHRcdFx0XHR0b2FzdCgpXG5cdFx0XHRcdH1cblx0XHRcdDwvU25hY2tiYXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoR2xvYmFsU25hY2tiYXIpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBUYWJzQ29udGVudCA9ICh7Y3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0YWItY29udGVudCcsICdjb2x1bW5zJywgY3VycmVudFRhYiBdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7dGFic1tjdXJyZW50VGFiXS5yZW5kZXIoc2V0VGFiKX1cblx0XHQ8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBUb2FzdCA9ICh7bWVzc2FnZSwgZGlzbWlzcywgdGltZSwgdHlwZSA9ICdpbmZvJ30pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkaXNtaXNzKCcnKTtcblx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH0sIHRpbWUgfHwgMjAwMCk7XG5cdH0pO1xuXHRjb25zdCBpY29uTWFwID0ge1xuXHRcdCdpbmZvJzogJ2luZm8nLFxuXHRcdCdlcnJvcic6ICdubycsXG5cdFx0J3N1Y2Nlc3MnOiAneWVzJyxcblx0XHQnd2FybmluZyc6ICd3YXJuaW5nJ1xuXHR9O1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0b2FzdCcsICdjb21wb25lbnRzLWFuaW1hdGVfX2FwcGVhcicsICdpcy1mcm9tLW1pZGRsZScsIHR5cGUgXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PERhc2hpY29uIGljb249e2ljb25NYXBbdHlwZV19Lz5cblx0XHRcdDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtZGFzaGJvYXJkJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnNcbn0pO1xuXG5pbXBvcnQgb25ib2FyZGluZ1JlZHVjZXIgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgb25ib2FyZGluZ0FjdGlvbnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgb25ib2FyZGluZ1NlbGVjdG9ycyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1vbmJvYXJkaW5nJywge1xuXHRyZWR1Y2VyOiBvbmJvYXJkaW5nUmVkdWNlcixcblx0YWN0aW9uczogb25ib2FyZGluZ0FjdGlvbnMsXG5cdHNlbGVjdG9yczogb25ib2FyZGluZ1NlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCIgZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRUYWIodGFiKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfVEFCJyxcblx0XHRcdHBheWxvYWQ6IHt0YWJ9XG5cdFx0fTtcblx0fSxcblx0c2V0U2V0dGluZ3Mob2JqZWN0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfU0VUVElOR1MnLFxuXHRcdFx0cGF5bG9hZDoge29iamVjdH1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VNb2R1bGVTdGF0dXMobW9kdWxlU2x1ZywgdmFsdWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1RPR0dMRV9NT0RVTEUnLFxuXHRcdFx0cGF5bG9hZDoge21vZHVsZVNsdWc6ICdudl9wcm9fJyArIG1vZHVsZVNsdWcgKyAnX3N0YXR1cycsIHZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZU9wdGlvbihvcHRpb25TbHVnLCBvcHRpb25WYWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnQ0hBTkdFX01PRFVMRV9PUFRJT04nLFxuXHRcdFx0cGF5bG9hZDoge29wdGlvblN0YXR1czogJ252X3Byb18nICsgb3B0aW9uU2x1Zywgb3B0aW9uVmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTGljZW5zZVRpZXIodGllcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX0xJQ0VOU0VfVElFUicsXG5cdFx0XHRwYXlsb2FkOiB7dGllcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRUb2FzdChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfVE9BU1RfTUVTU0FHRScsXG5cdFx0XHRwYXlsb2FkOiBtZXNzYWdlXG5cdFx0fTtcblx0fVxufTtcbiIsIi8qIGdsb2JhbCB3cCwgbmV2ZURhc2ggICovXG5pbXBvcnQge2dldFRhYkhhc2h9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2V0dGluZ3M6IHt9LFxuXHR0aWVyOiBuZXZlRGFzaC5wcm8gPyBuZXZlRGFzaC5saWNlbnNlLnRpZXIgOiAwLFxuXHR0b2FzdDogbnVsbCxcblx0Y3VycmVudFRhYjogJ3N0YXJ0J1xufTtcblxuY29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcbmlmIChudWxsICE9PSBoYXNoKSB7XG5cdGluaXRpYWxTdGF0ZS5jdXJyZW50VGFiID0gaGFzaDtcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfVEFCJzpcblx0XHRcdGNvbnN0IHt0YWJ9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudFRhYjogdGFiXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9TRVRUSU5HUyc6XG5cdFx0XHRjb25zdCB7b2JqZWN0fSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiBvYmplY3Rcblx0XHRcdH07XG5cdFx0Y2FzZSAnVE9HR0xFX01PRFVMRSc6XG5cdFx0XHRjb25zdCB7bW9kdWxlU2x1ZywgdmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbbW9kdWxlU2x1Z106IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0Y2FzZSAnQ0hBTkdFX01PRFVMRV9PUFRJT04nOlxuXHRcdFx0bGV0IHtvcHRpb25TdGF0dXMsIG9wdGlvblZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W29wdGlvblN0YXR1c106IG9wdGlvblZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX0xJQ0VOU0VfVElFUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dGllcjogYWN0aW9uLnBheWxvYWQudGllclxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfVE9BU1RfTUVTU0FHRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9hc3Q6IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGdldE1vZHVsZVN0YXR1czogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnICsgJ19zdGF0dXMnXSxcblx0Z2V0T3B0aW9uOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWddLFxuXHRnZXRMaWNlbnNlVGllcjogKHN0YXRlKSA9PiBzdGF0ZS50aWVyLFxuXHRnZXRUb2FzdDogKHN0YXRlKSA9PiBzdGF0ZS50b2FzdCxcblx0Z2V0VGFiOiAoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRUYWJcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBTdGFydGVyU2l0ZXMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcyc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0JztcbmltcG9ydCBQcm8gZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1Bybyc7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUGx1Z2lucyc7XG5pbXBvcnQgSGVscCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvSGVscCc7XG5pbXBvcnQgQ2hhbmdlbG9nIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cnO1xuaW1wb3J0IEZyZWVQcm8gZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0ZyZWVQcm8nO1xuXG5jb25zdCBhZGRVcmxIYXNoID0gKGhhc2gpID0+IHtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xufTtcblxuY29uc3QgZ2V0VGFiSGFzaCA9ICgpID0+IHtcblx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdGlmICghIE9iamVjdC5rZXlzKHRhYnMpLmluY2x1ZGVzKGhhc2gpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IHRhYnMgPSB7XG5cdCdzdGFydCc6IHtsYWJlbDogJ0dldHRpbmcgU3RhcnRlZCcsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0IHNldFRhYj17c2V0VGFifS8+fSxcblx0J3BsdWdpbnMnOiB7bGFiZWw6ICdVc2VmdWwgUGx1Z2lucycsIHJlbmRlcjogKHNldFRhYikgPT4gPFBsdWdpbnMvPn0sXG5cdCdoZWxwJzoge2xhYmVsOiAnSGVscCAmIGRvY3MnLCByZW5kZXI6IChzZXRUYWIpID0+IDxIZWxwIHNldFRhYj17c2V0VGFifS8+fSxcblx0J2NoYW5nZWxvZyc6IHtsYWJlbDogJ0NoYW5nZWxvZycsIHJlbmRlcjogKHNldFRhYikgPT4gPENoYW5nZWxvZy8+fSxcblx0J3N0YXJ0ZXItc2l0ZXMnOiB7bGFiZWw6ICdTdGFydGVyIFNpdGVzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnRlclNpdGVzLz59LFxuXHQnZnJlZS1wcm8nOiB7bGFiZWw6ICdGcmVlIHZzIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPEZyZWVQcm8vPn1cbn07XG5cbmlmIChuZXZlRGFzaC5wcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6IG5ldmVEYXNoLnN0cmluZ3MucHJvVGFiVGl0bGUsIHJlbmRlcjogKHNldFRhYikgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuaWYgKG5ldmVEYXNoLndoaXRlTGFiZWwpIHtcblx0ZGVsZXRlICh0YWJzLmNoYW5nZWxvZyk7XG5cdGRlbGV0ZSAodGFicy5wbHVnaW5zKTtcblx0aWYgKG5ldmVEYXNoLndoaXRlTGFiZWwuaGlkZVN0YXJ0ZXJTaXRlcykge1xuXHRcdGRlbGV0ZSAodGFic1snc3RhcnRlci1zaXRlcyddKTtcblx0fVxufVxuXG5cbmV4cG9ydCB7XG5cdGFkZFVybEhhc2gsXG5cdGdldFRhYkhhc2gsXG5cdHRhYnNcbn07XG4iLCJjb25zdCB7X199ID0gd3AuaTE4bjtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuY29uc3QgaXNWYWxpZCA9IChvcHRpb24sIG9wdGlvbnNBcnJheSkgPT4ge1xuXHRpZiAoJ252X3Byb190eXBla2l0X2lkJyA9PT0gb3B0aW9uKSB7XG5cdFx0aWYgKCEgb3B0aW9uc0FycmF5WyduZXZlX3Byb190eXBla2l0X2RhdGEnXSkge1xuXHRcdFx0cmV0dXJuIHttZXNzYWdlOiBfXygnVHlwZWtpdCBQcm9qZWN0IElEIGlzIGludmFsaWQnLCAnbmV2ZScpLCBzdWNjZXNzOiBmYWxzZX07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4vcmVzdCc7XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRXaWRnZXRzID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbXBvcnRfd2lkZ2V0cycsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydE1vZHMgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2ltcG9ydF90aGVtZV9tb2RzJywgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5zdGFsbFBsdWdpbnMgPSAocGx1Z2luQXJyYXkpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbnN0YWxsX3BsdWdpbnMnLCBwbHVnaW5BcnJheSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0Q29udGVudCA9IChkYXRhKSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW1wb3J0X2NvbnRlbnQnLCBkYXRhKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==