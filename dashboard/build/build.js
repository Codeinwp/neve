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


var Pro = function Pro() {
  var _neveDash = neveDash,
      modules = _neveDash.modules;

  if (neveDash.hasOldPro) {
    return wp.element.createElement("div", {
      className: "col"
    }, wp.element.createElement("div", {
      className: "card"
    }, wp.element.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: neveDash.strings.updateOldPro
      }
    })));
  }

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
/* harmony import */ var _Onboarding_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Onboarding/Main */ "./src/Components/Onboarding/Main.js");
/* global neveDash */


var StarterSites = function StarterSites() {
  return wp.element.createElement(_Onboarding_Main__WEBPACK_IMPORTED_MODULE_0__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (StarterSites);

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
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/rest */ "./src/utils/rest.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./src/utils/common.js");
/* harmony import */ var _ImportStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportStepper */ "./src/Components/Onboarding/ImportStepper.js");
/* harmony import */ var _ImportModalNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImportModalNote */ "./src/Components/Onboarding/ImportModalNote.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImportModalError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImportModalError */ "./src/Components/Onboarding/ImportModalError.js");
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

  var _useState17 = useState(null),
      _useState18 = _slicedToArray(_useState17, 2),
      pluginOptions = _useState18[0],
      setPluginOptions = _useState18[1];

  var _useState19 = useState(null),
      _useState20 = _slicedToArray(_useState19, 2),
      error = _useState20[0],
      setError = _useState20[1];

  var _useState21 = useState(null),
      _useState22 = _slicedToArray(_useState21, 2),
      importData = _useState22[0],
      setImportData = _useState22[1];

  var _useState23 = useState(true),
      _useState24 = _slicedToArray(_useState23, 2),
      fetching = _useState24[0],
      setFetching = _useState24[1];

  useEffect(function getImportData() {
    // const fetchAddress = siteData['remote_url'] || siteData.url;
    var fetchAddress = siteData.url;
    Object(_utils_rest__WEBPACK_IMPORTED_MODULE_1__["get"])("".concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["trailingSlashIt"])(fetchAddress), "wp-json/ti-demo-data/data"), true, false).then(function (response) {
      if (!response.ok) {
        setError({
          message: __('Something went wrong while loading the site data. Please refresh the page and try again.', 'neve'),
          code: 'ti__ob_failed_fetch_response'
        });
        setFetching(false);
      }

      response.json().then(function (result) {
        setImportData(_objectSpread({}, result, {}, siteData));

        var mandatory = _objectSpread({}, result['mandatory_plugins'] || {});

        var optional = _objectSpread({}, result['recommended_plugins'] || {});

        var defaultOff = result['default_off_recommended_plugins'] || [];
        Object.keys(mandatory).map(function (key) {
          mandatory[key] = true;
        });
        Object.keys(optional).map(function (key) {
          optional[key] = !defaultOff.includes(key);
        });
        setPluginOptions(_objectSpread({}, optional, {}, mandatory));
        setFetching(false);
      });
    })["catch"](function (error) {
      setError({
        message: __('Something went wrong while loading the site data. Please refresh the page and try again.', 'neve'),
        code: 'ti__ob_failed_fetch_catch'
      });
      setFetching(false);
    });
  }, []);

  var renderMock = function renderMock() {
    return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
      className: "modal-body"
    }, wp.element.createElement("div", {
      className: "well is-loading"
    }, wp.element.createElement("h3", null, wp.element.createElement("div", {
      className: "mock-icon is-loading"
    }), wp.element.createElement("span", {
      className: "is-loading"
    })), wp.element.createElement("ol", null, [1, 2, 3].map(function () {
      return wp.element.createElement("li", null);
    }))), wp.element.createElement("hr", null), wp.element.createElement("div", {
      className: "options general"
    }, wp.element.createElement("h3", {
      className: "is-loading"
    }), wp.element.createElement("ul", null, [1, 2, 3].map(function () {
      return wp.element.createElement("li", null, wp.element.createElement("div", {
        className: "mock-icon is-loading"
      }), wp.element.createElement("span", {
        className: "is-loading"
      }), wp.element.createElement("div", {
        className: "toggle is-loading"
      }));
    }))), wp.element.createElement("hr", null), wp.element.createElement("div", {
      className: "options plugins"
    }, wp.element.createElement("h3", {
      className: "is-loading"
    }), wp.element.createElement("ul", null, [1, 2].map(function () {
      return wp.element.createElement("li", null, wp.element.createElement("div", {
        className: "mock-icon is-loading"
      }), wp.element.createElement("span", {
        className: "is-loading"
      }), wp.element.createElement("div", {
        className: "toggle is-loading"
      }));
    })))), wp.element.createElement("div", {
      className: "modal-footer"
    }, wp.element.createElement(Button, {
      isSecondary: true,
      className: "is-loading"
    }), wp.element.createElement(Button, {
      isPrimary: true,
      className: "is-loading"
    })));
  };

  var renderNote = function renderNote() {
    return wp.element.createElement(_ImportModalNote__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: importData
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
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
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
    if (fetching) {
      return null;
    }

    var allPlugins = _objectSpread({}, importData['recommended_plugins'] || {}, {}, importData['mandatory_plugins'] || {});

    return wp.element.createElement("div", {
      className: "options plugins"
    }, wp.element.createElement("h3", null, __('Plugins', 'neve'), ":"), wp.element.createElement("ul", null, Object.keys(allPlugins).map(function (slug) {
      return wp.element.createElement("li", null, wp.element.createElement(Dashicon, {
        icon: "admin-plugins",
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
          'active': pluginOptions[slug]
        })
      }), wp.element.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: allPlugins[slug]
        }
      }), slug in importData['recommended_plugins'] && wp.element.createElement("div", {
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
      contentFile: importData['content_file'],
      source: 'remote',
      frontPage: importData['front_page'],
      shopPages: importData['shop_pages'],
      demoSlug: importData.slug,
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
      'source_url': importData.url,
      'theme_mods': importData['theme_mods'],
      'wp_options': importData['wp_options']
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
    Object(_utils_site_import__WEBPACK_IMPORTED_MODULE_0__["importWidgets"])(importData.widgets).then(function (response) {
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
    if (importing) {
      return false;
    } else {
      setModal(false);
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
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(['ob-import-modal', {
      'fetching': fetching
    }]),
    title: importData && !fetching ? importData.title : wp.element.createElement("span", {
      className: "is-loading title"
    }),
    onRequestClose: closeModal,
    shouldCloseOnClickOutside: !importing && !fetching,
    isDismissible: !importing && !fetching
  }, fetching ? renderMock() : wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "modal-body"
  }, !importing && 'done' !== currentStep && !error ? wp.element.createElement(Fragment, null, renderNote(), wp.element.createElement("hr", null), renderOptions(), wp.element.createElement("hr", null), renderPlugins()) : wp.element.createElement(Fragment, null, error && wp.element.createElement(Fragment, null, wp.element.createElement(_ImportModalError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: error.message || null,
    code: error.code || null
  }), wp.element.createElement("hr", null)), null !== currentStep && wp.element.createElement(_ImportStepper__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    disabled: allOptionsOff || importData['external_plugins'],
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
  }, __('Add your own content', 'neve'))))));
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
      setImportModalStatus = _dispatch.setImportModalStatus;

  return {
    setModal: function setModal(status) {
      return setImportModalStatus(status);
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
  var editor = _ref.editor,
      previewOpen = _ref.previewOpen,
      currentSiteData = _ref.currentSiteData,
      importModal = _ref.importModal,
      isOnboarding = _ref.isOnboarding,
      cancelOnboarding = _ref.cancelOnboarding;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useState3 = useState(9),
      _useState4 = _slicedToArray(_useState3, 2),
      maxShown = _useState4[0],
      setMaxShown = _useState4[1];

  var _ref2 = neveDash.onboarding.sites || null,
      sites = _ref2.sites,
      upsells = _ref2.upsells,
      migration = _ref2.migration;

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
    var upsellsData = upsells && upsells[editor] ? filterSites(upsells[editor]).map(function (i) {
      i.upsell = true;
      return i;
    }) : [];
    return [].concat(_toConsumableArray(sitesData), _toConsumableArray(upsellsData));
  };

  var renderSites = function renderSites() {
    var allData = getAllSites();
    return allData.slice(0, maxShown).map(function (site) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      getCurrentEditor = _select.getCurrentEditor,
      getPreviewStatus = _select.getPreviewStatus,
      getCurrentSite = _select.getCurrentSite,
      getImportModalStatus = _select.getImportModalStatus,
      getOnboardingStatus = _select.getOnboardingStatus;

  return {
    editor: getCurrentEditor(),
    previewOpen: getPreviewStatus(),
    currentSiteData: getCurrentSite(),
    importModal: getImportModalStatus(),
    isOnboarding: getOnboardingStatus()
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
      setToast = _ref.setToast;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dismissed = _useState2[0],
      setDismissed = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalOpen = _useState4[0],
      setModalOpen = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      migrating = _useState6[0],
      setMigrating = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      frontPageID = _useState10[0],
      setFrontPageID = _useState10[1];

  if (dismissed) {
    return null;
  }

  var closeModal = function closeModal() {
    if ('done' === migrating) {
      setDismissed(true);
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
        setDismissed(true);
      });
    }
  }, __('Dismiss', 'neve'))));
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _setToast = _dispatch.setToast;

  return {
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
    src: siteData.url,
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
  }, siteData.upsell ? wp.element.createElement(Button, {
    className: "upgrade",
    isLink: true,
    href: siteData.utmOutboundLink || neveDash.upgradeURL
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
      setSite = _ref.setSite,
      setPreview = _ref.setPreview,
      setModal = _ref.setModal;
  var upsell = data.upsell;
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
      getProOption = _select.getProOption;

  return {
    getOption: function getOption(slug) {
      return getProOption(slug);
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
      getProOption = _select.getProOption;

  return {
    getOption: function getOption(slug) {
      return getProOption(slug);
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
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;

var Sidebar = function Sidebar(_ref) {
  var currentTab = _ref.currentTab,
      setToast = _ref.setToast,
      loggerValue = _ref.loggerValue;

  var _useState = useState('yes' === loggerValue),
      _useState2 = _slicedToArray(_useState, 2),
      tracking = _useState2[0],
      setTracking = _useState2[1];

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
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["changeOption"])('neve_logger_flag', value ? 'yes' : 'no', false, false).then(function (r) {
        if (!r.success) {
          setToast(__('Could not update option. Please try again.', 'neve'));
          setTracking(!value);
          return false;
        }

        setToast(__('Option Updated', 'neve'));
      });
    }
  }))));
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
      getOption = _select.getOption;

  return {
    loggerValue: getOption('neve_logger_flag')
  };
}))(Sidebar));

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
    var pro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return {
      type: 'CHANGE_MODULE_OPTION',
      payload: {
        optionStatus: (pro ? 'nv_pro_' : '') + optionSlug,
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
    return state.settings[slug];
  },
  getProOption: function getProOption(state, slug) {
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
/*! exports provided: addUrlHash, getTabHash, trailingSlashIt, tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUrlHash", function() { return addUrlHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabHash", function() { return getTabHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailingSlashIt", function() { return trailingSlashIt; });
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

if (neveDash.pro || neveDash.hasOldPro) {
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

var untrailingSlashIt = function untrailingSlashIt(str) {
  return str.replace(/\/$/, '');
};

var trailingSlashIt = function trailingSlashIt(str) {
  return untrailingSlashIt(str) + '/';
};



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
  var pro = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  option = (pro ? 'nv_pro_' : '') + option + (module ? '_status' : '');
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
  var useNonce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return requestData(route, simple, {}, 'GET', useNonce);
};

var requestData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
    var simple,
        data,
        method,
        useNonce,
        options,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            simple = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            method = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'POST';
            useNonce = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
            options = {
              method: method,
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            };

            if (useNonce) {
              options.headers['x-wp-nonce'] = neveDash.nonce;
            }

            if ('POST' === method) {
              options.body = JSON.stringify(data);
            }

            _context.next = 9;
            return fetch(route, options).then(function (response) {
              return simple ? response : response.json();
            });

          case 9:
            return _context.abrupt("return", _context.sent);

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvSW1wb3J0TW9kYWxFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsTm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWlncmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvUHJldmlld0ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvU3RhcnRlclNpdGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9JbnB1dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGx1Z2luQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RhYnNDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NpdGUtaW1wb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIndwIiwiZWxlbWVudCIsIkRhc2hpY29uIiwiY29tcG9uZW50cyIsIkFjY29yZGlvbiIsInByb3BzIiwiaXNPcGVuIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImNsYXNzbmFtZXMiLCJoZWlnaHQiLCJkYXRhIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsImNvbXBvc2UiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkFwcCIsInNldFNldHRpbmdzIiwidG9hc3QiLCJjdXJyZW50VGFiIiwic2V0VGFiIiwiaXNPbmJvYXJkaW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXR0aW5ncyIsImFwaSIsImxvYWRQcm9taXNlIiwidGhlbiIsIm1vZGVscyIsIlNldHRpbmdzIiwiZmV0Y2giLCJyIiwid3JhcENsYXNzZXMiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiZ2V0T25ib2FyZGluZ1N0YXR1cyIsIkNhcmQiLCJpY29uIiwiaWNvbkFsdCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lcyIsIl9fIiwiaTE4biIsIkNoYW5nZWxvZyIsIm5ldmVEYXNoIiwiY2hhbmdlbG9nIiwiY2hhbmdlbG9nUHJvIiwic2hvd0ZvclBybyIsInNldFNob3dGb3JQcm8iLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJkb2NzVVJMIiwic3VwcG9ydFVSTCIsIndoaXRlTGFiZWwiLCJhc3NldHMiLCJzdHJpbmdzIiwic3VwcG9ydENhcmREZXNjcmlwdGlvbiIsImRvY3NDYXJkRGVzY3JpcHRpb24iLCJhZ2VuY3lVUkwiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaGFzT2xkUHJvIiwiX19odG1sIiwidXBkYXRlT2xkUHJvIiwiaWQiLCJTdGFydCIsInJlbmRlckxlZnRDb2wiLCJoaWRlU3RhcnRlclNpdGVzIiwidGFicyIsInN0YXJ0ZXJTaXRlc0NhcmREZXNjcmlwdGlvbiIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJzaG93VG9vbHRpcCIsImhpZGVUb29sdGlwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzaCIsImdldFRhYkhhc2giLCJyZW5kZXJIZWFkIiwicmVuZGVyTmF2aWdhdGlvbiIsImhlYWRlciIsImFkZFVybEhhc2giLCJsYWJlbCIsIkxpY2Vuc2VDYXJkIiwiaXNWaXNpYmxlIiwiY2hhbmdlVGllciIsImxpY2Vuc2UiLCJwcm9BcGkiLCJ2YWxpZCIsImtleSIsInNldEtleSIsInN0YXR1cyIsInNldFN0YXR1cyIsInNldFZhbGlkIiwiZXhwaXJhdGlvbiIsInNldEV4cGlyYXRpb24iLCJzZXRUb2FzdCIsInRvYXN0VHlwZSIsInNldFRvYXN0VHlwZSIsInRvZ2dsZUxpY2Vuc2UiLCJ0b0RvIiwic2VuZCIsImFjdGlvbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ0aWVyIiwiaGlkZUxpY2Vuc2UiLCJsaWNlbnNlQ2FyZEhlYWRpbmciLCJsaWNlbnNlQ2FyZERlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJjaGFuZ2VMaWNlbnNlVGllciIsIm5ld1RpZXIiLCJMb2FkaW5nIiwiQXJyYXkiLCJmcm9tIiwibm90aWZpY2F0aW9ucyIsIlRvZ2dsZUNvbnRyb2wiLCJNb2R1bGVDYXJkIiwiY2hhbmdlTW9kdWxlU3RhdHVzIiwiZ2V0TW9kdWxlU3RhdHVzIiwibmljZW5hbWUiLCJhdmFpbGFiaWxpdHlMZXZlbCIsIm9wdGlvbnMiLCJvcmRlciIsImRvY3VtZW50YXRpb24iLCJyZXF1aXJlZF9hY3Rpb25zIiwidXBncmFkZUxpbmtzIiwicmVuZGVyT3B0aW9uc0FjY29yZGlvbnMiLCJncm91cCIsIm9wdGlvblNsdWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VPcHRpb24iLCJ1cmwiLCJnZXRMaWNlbnNlVGllciIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsIlBvcG92ZXIiLCJFZGl0b3JTZWxlY3RvciIsIm9uU2VhcmNoIiwiZWRpdG9yIiwic2V0Q3VycmVudEVkaXRvciIsIm5pY2VOYW1lIiwidG9nZ2xlRHJvcGRvd24iLCJnZXRDdXJyZW50RWRpdG9yIiwiTW9kYWwiLCJJbXBvcnRNb2RhbCIsInNldE1vZGFsIiwic2l0ZURhdGEiLCJjb250ZW50IiwiY3VzdG9taXplciIsIndpZGdldHMiLCJnZW5lcmFsIiwic2V0R2VuZXJhbCIsInBsdWdpbnNQcm9ncmVzcyIsInNldFBsdWdpbnNQcm9ncmVzcyIsImNvbnRlbnRQcm9ncmVzcyIsInNldENvbnRlbnRQcm9ncmVzcyIsImN1c3RvbWl6ZXJQcm9ncmVzcyIsInNldEN1c3RvbWl6ZXJQcm9ncmVzcyIsIndpZGdldHNQcm9ncmVzcyIsInNldFdpZGdldHNQcm9ncmVzcyIsImZyb250UGFnZUlEIiwic2V0RnJvbnRQYWdlSUQiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiaW1wb3J0aW5nIiwic2V0SW1wb3J0aW5nIiwicGx1Z2luT3B0aW9ucyIsInNldFBsdWdpbk9wdGlvbnMiLCJlcnJvciIsInNldEVycm9yIiwiaW1wb3J0RGF0YSIsInNldEltcG9ydERhdGEiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZ2V0SW1wb3J0RGF0YSIsImZldGNoQWRkcmVzcyIsImdldCIsInRyYWlsaW5nU2xhc2hJdCIsIm9rIiwiY29kZSIsImpzb24iLCJyZXN1bHQiLCJtYW5kYXRvcnkiLCJvcHRpb25hbCIsImRlZmF1bHRPZmYiLCJyZW5kZXJNb2NrIiwicmVuZGVyTm90ZSIsInJlbmRlck9wdGlvbnMiLCJyZW5kZXJQbHVnaW5zIiwiYWxsUGx1Z2lucyIsInJ1bkltcG9ydCIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsInJ1bkltcG9ydENvbnRlbnQiLCJpbnN0YWxsUGx1Z2lucyIsImhhbmRsZUVycm9yIiwicnVuSW1wb3J0Q3VzdG9taXplciIsImltcG9ydENvbnRlbnQiLCJjb250ZW50RmlsZSIsInNvdXJjZSIsImZyb250UGFnZSIsInNob3BQYWdlcyIsImRlbW9TbHVnIiwicnVuSW1wb3J0V2lkZ2V0cyIsImltcG9ydE1vZHMiLCJpbXBvcnREb25lIiwiaW1wb3J0V2lkZ2V0cyIsInN0ZXAiLCJjbG9zZU1vZGFsIiwiYWxsT3B0aW9uc09mZiIsImV2ZXJ5IiwiayIsImVkaXRMaW5rTWFwIiwib25ib2FyZGluZyIsImhvbWVVcmwiLCJlZGl0TGluayIsImdldEN1cnJlbnRTaXRlIiwic2V0SW1wb3J0TW9kYWxTdGF0dXMiLCJJbXBvcnRNb2RhbEVycm9yIiwidHJvdWJsZXNob290aW5nIiwic3VwcG9ydCIsImxvZ1VybCIsIkltcG9ydE1vZGFsTm90ZSIsImV4dGVybmFsIiwiSW1wb3J0U3RlcHBlciIsInByb2dyZXNzIiwid2lsbERvIiwic3RlcHNNYXAiLCJPbmJvYXJkaW5nIiwicHJldmlld09wZW4iLCJjdXJyZW50U2l0ZURhdGEiLCJpbXBvcnRNb2RhbCIsImNhbmNlbE9uYm9hcmRpbmciLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwibWF4U2hvd24iLCJzZXRNYXhTaG93biIsInNpdGVzIiwidXBzZWxscyIsIm1pZ3JhdGlvbiIsImZpbHRlclNpdGVzIiwidmFsdWVzIiwiZnVzZSIsIkZ1c2UiLCJpbmNsdWRlU2NvcmUiLCJzZWFyY2giLCJnZXRBbGxTaXRlcyIsInNpdGVzRGF0YSIsInVwc2VsbHNEYXRhIiwiaSIsInVwc2VsbCIsInJlbmRlclNpdGVzIiwiYWxsRGF0YSIsInNpdGUiLCJnZXRTaXRlTmF2IiwicHJldiIsImFsbFNpdGVzIiwicG9zaXRpb24iLCJpbmRleE9mIiwicmVuZGVyTWlncmF0aW9uIiwic3RhcnRlclNpdGVzVGFiRGVzY3JpcHRpb24iLCJxdWVyeSIsIndpZHRoIiwiZGlzcGxheSIsInNldE9uYm9hcmRpbmdTdGF0ZSIsImdldFByZXZpZXdTdGF0dXMiLCJnZXRJbXBvcnRNb2RhbFN0YXR1cyIsIk1pZ3JhdGlvbiIsImRpc21pc3NlZCIsInNldERpc21pc3NlZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsIm1pZ3JhdGluZyIsInNldE1pZ3JhdGluZyIsInN0YXJ0TWlncmF0aW9uIiwibWFuZGF0b3J5X3BsdWdpbnMiLCJyZWR1Y2UiLCJwIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZV9uYW1lIiwicm9vdCIsInJlbmRlck1vZGFsIiwidGhlbWVfbmFtZSIsImhlYWRpbmciLCJzY3JlZW5zaG90IiwidGhlbWVfbW9kIiwiUHJldmlld0ZyYW1lIiwibmV4dCIsInNldFNpdGUiLCJzZXRQcmV2aWV3IiwidXRtT3V0Ym91bmRMaW5rIiwic2V0Q3VycmVudFNpdGUiLCJzZXRQcmV2aWV3U3RhdHVzIiwiU3RhcnRlclNpdGVDYXJkIiwicGF5bG9hZCIsInByZXZpZXdTdGF0dXMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbXBvcnRNb2RhbFN0YXR1cyIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFNpdGUiLCJtaWdyYXRpb25EYXRhIiwiZ2V0U2l0ZXMiLCJnZXRVcHNlbGxzIiwiZ2V0TWlncmF0aW9uRGF0YSIsIklucHV0Rm9ybSIsImdldE9wdGlvbiIsInNldFZhbHVlIiwiY2hhbmdlU2V0dGluZyIsImdldFByb09wdGlvbiIsImNoYW5nZU1vZHVsZU9wdGlvbiIsIlRvZ2dsZSIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJpbnN0YWxsUGx1Z2luIiwiYWxpZ25JdGVtcyIsImVyciIsIlNpZGViYXIiLCJsb2dnZXJWYWx1ZSIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwib25ib2FyZGluZ1JlZHVjZXIiLCJvbmJvYXJkaW5nQWN0aW9ucyIsIm9uYm9hcmRpbmdTZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGVTbHVnIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInByb1RhYlRpdGxlIiwidW50cmFpbGluZ1NsYXNoSXQiLCJzdHIiLCJvcHRpb24iLCJtb2R1bGUiLCJtb2RlbCIsInNhdmUiLCJpc1ZhbGlkIiwicm91dGUiLCJzaW1wbGUiLCJyZXF1ZXN0RGF0YSIsInVzZU5vbmNlIiwibWV0aG9kIiwiaGVhZGVycyIsIm5vbmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wdGlvbnNBcnJheSIsInBsdWdpbkFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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LHVEQUF1RCxTQUFTO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsa0NBQWtDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QUU7QUFBVixHQUFQO0FBQ0EsQ0FQRCxDOzs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU04SCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNsUSxJQUFELEVBQVU7QUFDdEMsU0FBT2lJLGtEQUFJLENBQUMzRixRQUFRLENBQUNtTyxVQUFULENBQW9CbUUsSUFBcEIsR0FBMkIsaUJBQTVCLEVBQStDNVUsSUFBL0MsQ0FBWDtBQUNBLENBRk07QUFJQSxJQUFNZ1EsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2hRLElBQUQsRUFBVTtBQUNuQyxTQUFPaUksa0RBQUksQ0FBQzNGLFFBQVEsQ0FBQ21PLFVBQVQsQ0FBb0JtRSxJQUFwQixHQUEyQixvQkFBNUIsRUFBa0Q1VSxJQUFsRCxDQUFYO0FBQ0EsQ0FGTTtBQUlBLElBQU1zUCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNxTCxXQUFELEVBQWlCO0FBQzlDLFNBQU8xUyxrREFBSSxDQUFDM0YsUUFBUSxDQUFDbU8sVUFBVCxDQUFvQm1FLElBQXBCLEdBQTJCLGtCQUE1QixFQUFnRCtGLFdBQWhELENBQVg7QUFDQSxDQUZNO0FBSUEsSUFBTWxMLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3pQLElBQUQsRUFBVTtBQUN0QyxTQUFPaUksa0RBQUksQ0FBQzNGLFFBQVEsQ0FBQ21PLFVBQVQsQ0FBb0JtRSxJQUFwQixHQUEyQixpQkFBNUIsRUFBK0M1VSxJQUEvQyxDQUFYO0FBQ0EsQ0FGTSxDOzs7Ozs7Ozs7OztBQ2ZQLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6Ii4vYnVpbGQvYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogRnVzZS5qcyB2NS4xLjAgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBiaXRhcFNjb3JlKFxuICBwYXR0ZXJuLFxuICB7IGVycm9ycyA9IDAsIGN1cnJlbnRMb2NhdGlvbiA9IDAsIGV4cGVjdGVkTG9jYXRpb24gPSAwLCBkaXN0YW5jZSA9IDEwMCB9XG4pIHtcbiAgY29uc3QgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gbWF0Y2hlZEluZGljZWQobWF0Y2htYXNrID0gW10sIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEpIHtcbiAgbGV0IG1hdGNoZWRJbmRpY2VzID0gW107XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGxldCBsZW4gPSBtYXRjaG1hc2subGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaG1hc2tbaV07XG4gICAgaWYgKG1hdGNoICYmIHN0YXJ0ID09PSAtMSkge1xuICAgICAgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgZW5kID0gaSAtIDE7XG4gICAgICBpZiAoZW5kIC0gc3RhcnQgKyAxID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgICAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZEluZGljZXNcbn1cblxuZnVuY3Rpb24gYml0YXBTZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IDEwMCxcbiAgICB0aHJlc2hvbGQgPSAwLjYsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBmYWxzZSxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSAxLFxuICAgIGluY2x1ZGVNYXRjaGVzID0gZmFsc2VcbiAgfVxuKSB7XG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24pO1xuXG4gIC8vIGEgbWFzayBvZiB0aGUgbWF0Y2hlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0TGVuOyBpICs9IDEpIHtcbiAgICBtYXRjaE1hc2tbaV0gPSAwO1xuICB9XG5cbiAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICBsZXQgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogMCxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlXG4gICAgfSk7XG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcblxuICAgIC8vIFdoYXQgYWJvdXQgaW4gdGhlIG90aGVyIGRpcmVjdGlvbj8gKHNwZWVkIHVwKVxuICAgIGJlc3RMb2NhdGlvbiA9IHRleHQubGFzdEluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbiArIHBhdHRlcm5MZW4pO1xuXG4gICAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgIGxldCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IDAsXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSk7XG4gICAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIDw9IDMxID8gcGF0dGVybkxlbiAtIDEgOiAzMCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXNcbiAgICAgID8gdGV4dExlblxuICAgICAgOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG5cbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG5cbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjaGFyTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSAxO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2ggd2lsbCBhbG1vc3QgY2VydGFpbmx5IGJlIGJldHRlciB0aGFuIGFueSBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cbiAgICAgICAgaWYgKGZpbmFsU2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBmaW5hbFNjb3JlO1xuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG4gICAgICAgICAgaWYgKGJlc3RMb2NhdGlvbiA8PSBleHBlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gcGFzc2luZyBgYmVzdExvY2F0aW9uYCwgZG9uJ3QgZXhjZWVkIG91ciBjdXJyZW50IGRpc3RhbmNlIGZyb20gYGV4cGVjdGVkTG9jYXRpb25gLlxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgMiAqIGV4cGVjdGVkTG9jYXRpb24gLSBiZXN0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gaG9wZSBmb3IgYSAoYmV0dGVyKSBtYXRjaCBhdCBncmVhdGVyIGVycm9yIGxldmVscy5cbiAgICBjb25zdCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZVxuICAgIH0pO1xuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc01hdGNoOiBiZXN0TG9jYXRpb24gPj0gMCxcbiAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgIHNjb3JlOiAhZmluYWxTY29yZSA/IDAuMDAxIDogZmluYWxTY29yZVxuICB9O1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgIHJlc3VsdC5tYXRjaGVkSW5kaWNlcyA9IG1hdGNoZWRJbmRpY2VkKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcbiAgbGV0IGxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtYXNrW3BhdHRlcm4uY2hhckF0KGkpXSA9IDA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gfD0gMSA8PCAobGVuIC0gaSAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn1cblxuLy8gTWFjaGluZSB3b3JkIHNpemVcbmNvbnN0IE1BWF9CSVRTID0gMzI7XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICAgICAgbG9jYXRpb24gPSAwLFxuICAgICAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAgICAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gICAgICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgICAgIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAgICAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gICAgICBkaXN0YW5jZSA9IDEwMCxcbiAgICAgIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAgICAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgICAgIHRocmVzaG9sZCA9IDAuNixcbiAgICAgIC8vIEluZGljYXRlcyB3aGV0aGVyIGNvbXBhcmlzb25zIHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgICAgLy8gV2hlbiB0cnVlLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgICAgIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBmYWxzZSxcbiAgICAgIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSxcblxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBmYWxzZVxuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICB9O1xuXG4gICAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHtNQVhfQklUU30uYClcbiAgICB9XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucGF0dGVybkFscGhhYmV0ID0gcGF0dGVybkFscGhhYmV0KHRoaXMucGF0dGVybik7XG4gIH1cblxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hJblN0cmluZyh0ZXh0KVxuICB9XG5cbiAgc2VhcmNoSW5TdHJpbmcodGV4dCkge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhhY3QgbWF0Y2hcbiAgICBpZiAodGhpcy5wYXR0ZXJuID09PSB0ZXh0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICBzY29yZTogMFxuICAgICAgfTtcblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5tYXRjaGVkSW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBiaXRhcFNlYXJjaCh0ZXh0LCB0aGlzLnBhdHRlcm4sIHRoaXMucGF0dGVybkFscGhhYmV0LCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpbmNsdWRlTWF0Y2hlc1xuICAgIH0pXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG4vLyBNYXRjaCB0eXBlOiBleGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgaW5jbHVkZSBgZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09IFwiJ1wiO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2ggPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUocGF0dGVybik7XG4gIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gaW5kZXggPiAtMTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybixcbiAgc2FuaXRpemUsXG4gIG1hdGNoXG59O1xuXG4vLyBUb2tlbjogIWZpcmVcbi8vIE1hdGNoIHR5cGU6IGludmVyc2UtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBmaXJlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnISc7XG5cbmNvbnN0IHNhbml0aXplJDEgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoJDEgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMShwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuaW5kZXhPZihzYW5pdGl6ZWRQYXR0ZXJuKSA9PT0gLTE7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlRXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMSxcbiAgc2FuaXRpemU6IHNhbml0aXplJDEsXG4gIG1hdGNoOiBtYXRjaCQxXG59O1xuXG4vLyBUb2tlbjogXmZpbGVcbi8vIE1hdGNoIHR5cGU6IHByZWZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDIgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gJ14nO1xuXG5jb25zdCBzYW5pdGl6ZSQyID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCQyID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDIocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBwcmVmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQyLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMixcbiAgbWF0Y2g6IG1hdGNoJDJcbn07XG5cbi8vIFRva2VuOiAhXmZpcmVcbi8vIE1hdGNoIHR5cGU6IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZmlyZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDMgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnICYmIHBhdHRlcm4uY2hhckF0KDEpID09ICdeJztcblxuY29uc3Qgc2FuaXRpemUkMyA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigyKTtcblxuY29uc3QgbWF0Y2gkMyA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQzKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VQcmVmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQzLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMyxcbiAgbWF0Y2g6IG1hdGNoJDNcbn07XG5cbi8vIFRva2VuOiAuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IHN1ZmZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kNCA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuLmxlbmd0aCAtIDEpID09ICckJztcblxuY29uc3Qgc2FuaXRpemUkNCA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigwLCBwYXR0ZXJuLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBtYXRjaCQ0ID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDQocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgc3VmZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kNCxcbiAgc2FuaXRpemU6IHNhbml0aXplJDQsXG4gIG1hdGNoOiBtYXRjaCQ0XG59O1xuXG4vLyBUb2tlbjogIS5maWxlJFxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQ1ID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uY2hhckF0KDApID09ICchJyAmJiBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuLmxlbmd0aCAtIDEpID09ICckJztcblxuY29uc3Qgc2FuaXRpemUkNSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cmluZygxLCBwYXR0ZXJuLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBtYXRjaCQ1ID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDUocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5lbmRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VTdWZmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQ1LFxuICBzYW5pdGl6ZTogc2FuaXRpemUkNSxcbiAgbWF0Y2g6IG1hdGNoJDVcbn07XG5cbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+XG4gICFBcnJheS5pc0FycmF5XG4gICAgPyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuLy8gQWRhcHRlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9mNGNhMzk2YTc5NjQzNTQyMmJkNGZkNDFmYWRiZDIyNWVkZGRmMTc1Ly5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IGJhc2VUb1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICsgJyc7XG4gIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSU5GSU5JVFkgPyAnLTAnIDogcmVzdWx0XG59O1xuXG5jb25zdCB0b1N0cmluZyA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSkpO1xuXG5jb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxuY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG5cbmNvbnN0IGlzRGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5jb25zdCBxdWVyeWZ5ID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uc3BsaXQoJ3wnKS5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpLnNwbGl0KC8gKy9nKSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgbWF0Y2ggYGpzY3JpcHRgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSB9ID0gb3B0aW9ucztcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIEEgPHBhdHRlcm4+OjxCaXRhcFNlYXJjaD4ga2V5LXZhbHVlIHBhaXIgZm9yIG9wdGltaXppbmcgc2VhcmNoaW5nXG4gICAgdGhpcy5fZnV6enlDYWNoZSA9IHt9O1xuXG4gICAgaWYgKGlzU3RyaW5nKHBhdHRlcm4pICYmIHBhdHRlcm4udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlmeSh0aGlzLnBhdHRlcm4pO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCF0aGlzLnF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG5cbiAgICB0ZXh0ID0gdGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSA/IHRleHQgOiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcXVlcnlbaV07XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIG1hdGNoRm91bmQgPSB0cnVlO1xuXG4gICAgICBmb3IgKGxldCBqID0gMCwgcExlbiA9IHBhcnRzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBsZXQgdG9rZW4gPSBwYXJ0c1tqXTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fc2VhcmNoKHRva2VuLCB0ZXh0KTtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNNYXRjaCkge1xuICAgICAgICAgIC8vIEFORCBjb25kaXRpb24sIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb24gdG8gbmV4dCBwYXJ0XG4gICAgICAgICAgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cbiAgICAgIGlmIChtYXRjaEZvdW5kKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cblxuICBfc2VhcmNoKHBhdHRlcm4sIHRleHQpIHtcbiAgICBpZiAoZXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBleGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChwcmVmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHByZWZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VQcmVmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VQcmVmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlU3VmZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlU3VmZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoc3VmZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBzdWZmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlRXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlRXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2VhcmNoZXIgPSB0aGlzLl9mdXp6eUNhY2hlW3BhdHRlcm5dO1xuICAgICAgaWYgKCFzZWFyY2hlcikge1xuICAgICAgICBzZWFyY2hlciA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9mdXp6eUNhY2hlW3BhdHRlcm5dID0gc2VhcmNoZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VhcmNoZXIuc2VhcmNoSW5TdHJpbmcodGV4dClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTkdSQU1fTEVOID0gMztcblxuZnVuY3Rpb24gbmdyYW0oXG4gIHRleHQsXG4gIHsgbiA9IE5HUkFNX0xFTiwgcGFkID0gdHJ1ZSwgc29ydCA9IGZhbHNlIH1cbikge1xuICBsZXQgbkdyYW1zID0gW107XG5cbiAgaWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG5cbiAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHBhZCkge1xuICAgIHRleHQgPSBgICR7dGV4dH0gYDtcbiAgfVxuXG4gIGxldCBpbmRleCA9IHRleHQubGVuZ3RoIC0gbiArIDE7XG4gIGlmIChpbmRleCA8IDEpIHtcbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIG5HcmFtc1tpbmRleF0gPSB0ZXh0LnN1YnN0cihpbmRleCwgbik7XG4gIH1cblxuICBpZiAoc29ydCkge1xuICAgIG5HcmFtcy5zb3J0KChhLCBiKSA9PiAoYSA9PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxKSk7XG4gIH1cblxuICByZXR1cm4gbkdyYW1zXG59XG5cbi8vIEFzc3VtZXMgYXJyYXlzIGFyZSBzb3J0ZWRcbmZ1bmN0aW9uIHVuaW9uIChhcnIxLCBhcnIyKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCAmJiBqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICBsZXQgaXRlbTEgPSBhcnIxW2ldO1xuICAgIGxldCBpdGVtMiA9IGFycjJbal07XG5cbiAgICBpZiAoaXRlbTEgPCBpdGVtMikge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTEpO1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTIgPCBpdGVtMSkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMik7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGFycjFbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnIyW2pdKTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIEFzc3VtZXMgYXJyYXlzIGFyZSBzb3J0ZWRcbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnIxLCBhcnIyKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCAmJiBqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICBsZXQgaXRlbTEgPSBhcnIxW2ldO1xuICAgIGxldCBpdGVtMiA9IGFycjJbal07XG5cbiAgICBpZiAoaXRlbTEgPT0gaXRlbTIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0xKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0xIDwgaXRlbTIpIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0xID4gaXRlbTIpIHtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gamFjY2FyZERpc3RhbmNlKG5HcmFtMSwgbkdyYW0yKSB7XG4gIGxldCBuR3JhbVVuaW9uID0gdW5pb24obkdyYW0xLCBuR3JhbTIpO1xuICBsZXQgbkdyYW1JbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb24obkdyYW0xLCBuR3JhbTIpO1xuXG4gIHJldHVybiAxIC0gbkdyYW1JbnRlcnNlY3Rpb24ubGVuZ3RoIC8gbkdyYW1Vbmlvbi5sZW5ndGhcbn1cblxuY2xhc3MgTkdyYW1TZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCBvcHRpb25zID0geyB0aHJlc2hvbGQ6IDAuNiB9KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZ3JhbSwgYW5kIHNvcnQgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucGF0dGVybk5ncmFtID0gbmdyYW0ocGF0dGVybiwgeyBzb3J0OiB0cnVlIH0pO1xuICB9XG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgbGV0IHRleHROZ3JhbSA9IHZhbHVlLm5nO1xuICAgIGlmICghdGV4dE5ncmFtKSB7XG4gICAgICB0ZXh0TmdyYW0gPSBuZ3JhbSh2YWx1ZS4kLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICB2YWx1ZS5uZyA9IHRleHROZ3JhbTtcbiAgICB9XG5cbiAgICBsZXQgamFjYXJkUmVzdWx0ID0gamFjY2FyZERpc3RhbmNlKHRoaXMucGF0dGVybk5ncmFtLCB0ZXh0TmdyYW0pO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGphY2FyZFJlc3VsdCA8IHRoaXMub3B0aW9ucy50aHJlc2hvbGQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyBqYWNhcmRSZXN1bHQgOiAxLFxuICAgICAgaXNNYXRjaFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhcnIgPSBmYWxzZTtcblxuICBjb25zdCBfZ2V0ID0gKG9iaiwgcGF0aCkgPT4ge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGdvdHRlbiB0byB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcblxuICAgICAgbGV0IGtleSA9IHBhdGg7XG4gICAgICBsZXQgcmVtYWluaW5nID0gbnVsbDtcblxuICAgICAgaWYgKGRvdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBrZXkgPSBwYXRoLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgICAgICAgcmVtYWluaW5nID0gcGF0aC5zbGljZShkb3RJbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICBpZiAoIXJlbWFpbmluZyAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBfZ2V0KHZhbHVlW2ldLCByZW1haW5pbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcpIHtcbiAgICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgICBfZ2V0KHZhbHVlLCByZW1haW5pbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9nZXQob2JqLCBwYXRoKTtcblxuICBpZiAoYXJyKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHJldHVybiBsaXN0WzBdXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KFxuICBrZXlzLFxuICBsaXN0LFxuICB7IGdldEZuID0gZ2V0LCBuZ3JhbXMgPSBmYWxzZSB9ID0ge31cbikge1xuICBsZXQgaW5kZXhlZExpc3QgPSBbXTtcblxuICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgaWYgKGlzU3RyaW5nKGxpc3RbMF0pKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxpc3RbaV07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIC8vICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgICAgICQ6IHZhbHVlLFxuICAgICAgICAgIGlkeDogaVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICByZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhlZExpc3QucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICBjb25zdCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgbGV0IGl0ZW0gPSBsaXN0W2ldO1xuXG4gICAgICBsZXQgcmVjb3JkID0geyBpZHg6IGksICQ6IHt9IH07XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXRGbihpdGVtLCBrZXkpO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHN0YWNrID0gW3sgYXJyYXlJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgeyBhcnJheUluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICAgIC8vICAgdiA9IHYudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUsIGlkeDogYXJyYXlJbmRleCB9O1xuXG4gICAgICAgICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICAgICAgICBzdWJSZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhcnJMZW4gPSB2YWx1ZS5sZW5ndGg7IGsgPCBhcnJMZW47IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgICAgYXJyYXlJbmRleDogayxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVtrXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY29yZC4kW2tleV0gPSBzdWJSZWNvcmRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgLy8gICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICBsZXQgc3ViUmVjb3JkID0geyAkOiB2YWx1ZSB9O1xuXG4gICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgc3ViUmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWNvcmQuJFtrZXldID0gc3ViUmVjb3JkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZGV4ZWRMaXN0LnB1c2gocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXhlZExpc3Rcbn1cblxuY2xhc3MgS2V5U3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlzKSB7XG4gICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgIHRoaXMuX2tleU5hbWVzID0gW107XG4gICAgdGhpcy5fbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5XG4gICAgaWYgKGtleXMubGVuZ3RoICYmIGlzU3RyaW5nKGtleXNbMF0pKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHRoaXMuX2tleXNba2V5XSA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa2V5LCAnbmFtZScpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwibmFtZVwiIHByb3BlcnR5IGluIGtleSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5TmFtZSA9IGtleS5uYW1lO1xuICAgICAgICB0aGlzLl9rZXlOYW1lcy5wdXNoKGtleU5hbWUpO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtleSwgJ3dlaWdodCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwid2VpZ2h0XCIgcHJvcGVydHkgaW4ga2V5IG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuXG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMCB8fCB3ZWlnaHQgPj0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdcIndlaWdodFwiIHByb3BlcnR5IGluIGtleSBtdXN0IGJlIGluIHRoZSByYW5nZSBvZiAoMCwgMSknXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fa2V5c1trZXlOYW1lXSA9IHtcbiAgICAgICAgICB3ZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSB3ZWlnaHRzIHNvIHRoYXQgdGhlaXIgc3VtIGlzIGVxdWFsIHRvIDFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5TmFtZSA9IHRoaXMuX2tleU5hbWVzW2ldO1xuICAgICAgICBjb25zdCBrZXlXZWlnaHQgPSB0aGlzLl9rZXlzW2tleU5hbWVdLndlaWdodDtcbiAgICAgICAgdGhpcy5fa2V5c1trZXlOYW1lXS53ZWlnaHQgPSBrZXlXZWlnaHQgLyB0b3RhbFdlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0KGtleSwgbmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0gPyB0aGlzLl9rZXlzW2tleV1bbmFtZV0gOiAtMVxuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleU5hbWVzXG4gIH1cbiAgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aFxuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaV07XG5cbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCBtYXRjaC5pbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgaW5kaWNlczogbWF0Y2guaW5kaWNlcyxcbiAgICAgIHZhbHVlOiBtYXRjaC52YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5O1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5pZHggPiAtMSkge1xuICAgICAgb2JqLnJlZkluZGV4ID0gbWF0Y2guaWR4O1xuICAgIH1cblxuICAgIGRhdGEubWF0Y2hlcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiB0cnVlLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uXG4gIHNvcnRGbjogKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlXG59O1xuXG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5cbmNvbnN0IEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgLy8gRW5hYmxlZCBleHRlbmRlZC1zZWFyY2hpbmdcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXRcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IobGlzdCwgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zLCBpbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgLy8gYGNhc2VTZW5zaXRpdmVgIGlzIGRlcHJlY2F0ZWQsIHVzZSBgaXNDYXNlU2Vuc2l0aXZlYCBpbnN0ZWFkXG4gICAgdGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSA9IG9wdGlvbnMuY2FzZVNlbnNpdGl2ZTtcbiAgICBkZWxldGUgdGhpcy5vcHRpb25zLmNhc2VTZW5zaXRpdmU7XG5cbiAgICB0aGlzLl9wcm9jZXNzS2V5cyh0aGlzLm9wdGlvbnMua2V5cyk7XG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGxpc3QsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24obGlzdCwgaW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB0aGlzLmxpc3RJc1N0cmluZ0FycmF5ID0gaXNTdHJpbmcobGlzdFswXSk7XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEluZGV4KHRoaXMuX2NyZWF0ZUluZGV4KCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KGxpc3RJbmRleCkge1xuICAgIHRoaXMuX2luZGV4ZWRMaXN0ID0gbGlzdEluZGV4O1xuICB9XG5cbiAgX3Byb2Nlc3NLZXlzKGtleXMpIHtcbiAgICB0aGlzLl9rZXlTdG9yZSA9IG5ldyBLZXlTdG9yZShrZXlzKTtcbiAgfVxuXG4gIF9jcmVhdGVJbmRleCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5kZXgodGhpcy5fa2V5U3RvcmUua2V5cygpLCB0aGlzLmxpc3QsIHtcbiAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm5cbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoKHBhdHRlcm4sIG9wdHMgPSB7IGxpbWl0OiBmYWxzZSB9KSB7XG4gICAgY29uc3QgeyB1c2VFeHRlbmRlZFNlYXJjaCwgc2hvdWxkU29ydCB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHNlYXJjaGVyID0gbnVsbDtcblxuICAgIGlmICh1c2VFeHRlbmRlZFNlYXJjaCkge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgRXh0ZW5kZWRTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IE5HcmFtU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSB0aGlzLl9zZWFyY2hVc2luZyhzZWFyY2hlcik7XG5cbiAgICB0aGlzLl9jb21wdXRlU2NvcmUocmVzdWx0cyk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgdGhpcy5fc29ydChyZXN1bHRzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5saW1pdCAmJiBpc051bWJlcihvcHRzLmxpbWl0KSkge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgb3B0cy5saW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdChyZXN1bHRzKVxuICB9XG5cbiAgX3NlYXJjaFVzaW5nKHNlYXJjaGVyKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuX2luZGV4ZWRMaXN0O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAodGhpcy5saXN0SXNTdHJpbmdBcnJheSkge1xuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgbGlzdFxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdFtpXTtcbiAgICAgICAgbGV0IHsgJDogdGV4dCwgaWR4IH0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4odmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwgdmFsdWU6IHRleHQgfTtcblxuICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbbWF0Y2hdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIGNvbnN0IGtleU5hbWVzID0gdGhpcy5fa2V5U3RvcmUua2V5cygpO1xuICAgICAgY29uc3Qga2V5c0xlbiA9IHRoaXMuX2tleVN0b3JlLmNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB7ICQ6IGl0ZW0sIGlkeCB9ID0gbGlzdFtpXTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzTGVuOyBqICs9IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0ga2V5TmFtZXNbal07XG4gICAgICAgICAgbGV0IHZhbHVlID0gaXRlbVtrZXldO1xuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gdmFsdWVba107XG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gYXJySXRlbS4kO1xuICAgICAgICAgICAgICBsZXQgaWR4ID0gYXJySXRlbS5pZHg7XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKGFyckl0ZW0pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCwgaWR4IH07XG5cbiAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcbiAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQgfTtcblxuICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX2NvbXB1dGVTY29yZShyZXN1bHRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gICAgICBjb25zdCBzY29yZUxlbiA9IG1hdGNoZXMubGVuZ3RoO1xuXG4gICAgICBsZXQgdG90YWxXZWlnaHRlZFNjb3JlID0gMTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY29yZUxlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBtYXRjaGVzW2pdO1xuICAgICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgICAgY29uc3Qga2V5V2VpZ2h0ID0gdGhpcy5fa2V5U3RvcmUuZ2V0KGtleSwgJ3dlaWdodCcpO1xuICAgICAgICBjb25zdCB3ZWlnaHQgPSBrZXlXZWlnaHQgPiAtMSA/IGtleVdlaWdodCA6IDE7XG4gICAgICAgIGNvbnN0IHNjb3JlID1cbiAgICAgICAgICBpdGVtLnNjb3JlID09PSAwICYmIGtleVdlaWdodCA+IC0xID8gTnVtYmVyLkVQU0lMT04gOiBpdGVtLnNjb3JlO1xuXG4gICAgICAgIHRvdGFsV2VpZ2h0ZWRTY29yZSAqPSBNYXRoLnBvdyhzY29yZSwgd2VpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnNjb3JlID0gdG90YWxXZWlnaHRlZFNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIF9zb3J0KHJlc3VsdHMpIHtcbiAgICByZXN1bHRzLnNvcnQodGhpcy5vcHRpb25zLnNvcnRGbik7XG4gIH1cblxuICBfZm9ybWF0KHJlc3VsdHMpIHtcbiAgICBjb25zdCBmaW5hbE91dHB1dCA9IFtdO1xuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaW5jbHVkZVNjb3JlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybU1hdGNoZXMpO1xuICAgIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaXRlbTogdGhpcy5saXN0W2lkeF0sXG4gICAgICAgIHJlZkluZGV4OiBpZHhcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0cmFuc2Zvcm1lcnMubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lcnNbal0ocmVzdWx0LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaW5hbE91dHB1dC5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5hbE91dHB1dFxuICB9XG59XG5cbkZ1c2UudmVyc2lvbiA9ICc1LjEuMCc7XG5GdXNlLmNyZWF0ZUluZGV4ID0gY3JlYXRlSW5kZXg7XG5GdXNlLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1c2U7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiLCBcIlJlYWN0RE9NXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKGZhbHNlKSB7IHZhciB0aHJvd09uRGlyZWN0QWNjZXNzLCBSZWFjdElzOyB9IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSgpO1xufVxuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMl9fO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gVGVsbCB3aGV0aGVyIHRoZSByZWN0IGlzIHZpc2libGUsIGdpdmVuIGFuIG9mZnNldFxuLy9cbi8vIHJldHVybjogYm9vbGVhblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2Zmc2V0LCByZWN0LCBjb250YWlubWVudFJlY3QpIHtcbiAgdmFyIG9mZnNldERpciA9IG9mZnNldC5kaXJlY3Rpb247XG4gIHZhciBvZmZzZXRWYWwgPSBvZmZzZXQudmFsdWU7IC8vIFJ1bGVzIGZvciBjaGVja2luZyBkaWZmZXJlbnQga2luZCBvZiBvZmZzZXRzLiBJbiBleGFtcGxlIGlmIHRoZSBlbGVtZW50IGlzXG4gIC8vIDkwcHggYmVsb3cgdmlld3BvcnQgYW5kIG9mZnNldFRvcCBpcyAxMDAsIGl0IGlzIGNvbnNpZGVyZWQgdmlzaWJsZS5cblxuICBzd2l0Y2ggKG9mZnNldERpcikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LnRvcCArIG9mZnNldFZhbCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0O1xuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmxlZnQgKyBvZmZzZXRWYWwgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0O1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QuYm90dG9tIC0gb2Zmc2V0VmFsID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodCAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3A7XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LnJpZ2h0IC0gb2Zmc2V0VmFsID4gcmVjdC5yaWdodCAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tO1xuICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyk7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cblxuXG5cblxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWN0KHJlY3QpIHtcbiAgaWYgKHJlY3Qud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICB9XG5cbiAgaWYgKHJlY3QuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIH1cblxuICByZXR1cm4gcmVjdDtcbn1cblxudmFyIFZpc2liaWxpdHlTZW5zb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFZpc2liaWxpdHlTZW5zb3IsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFZpc2liaWxpdHlTZW5zb3IocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlzaWJpbGl0eVNlbnNvcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihWaXNpYmlsaXR5U2Vuc29yKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0Q29udGFpbmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5jb250YWlubWVudCB8fCB3aW5kb3c7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWRkRXZlbnRMaXN0ZW5lclwiLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgZGVsYXksIHRocm90dGxlKSB7XG4gICAgICBpZiAoIV90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZW91dDtcbiAgICAgIHZhciBmdW5jO1xuXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuY2hlY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aHJvdHRsZSA+IC0xKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHRocm90dGxlIHx8IDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgZGVsYXkgfHwgMCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgZm46IGZ1bmMsXG4gICAgICAgIGdldExhc3RUaW1lb3V0OiBmdW5jdGlvbiBnZXRMYXN0VGltZW91dCgpIHtcbiAgICAgICAgICByZXR1cm4gdGltZW91dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBpbmZvLmZuKTtcbiAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2tbZXZlbnRdID0gaW5mbztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGFydFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrIHx8IF90aGlzLmludGVydmFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmludGVydmFsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChfdGhpcy5jaGVjaywgX3RoaXMucHJvcHMuaW50ZXJ2YWxEZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zY3JvbGxDaGVjaykge1xuICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKF90aGlzLmdldENvbnRhaW5lcigpLCBcInNjcm9sbFwiLCBfdGhpcy5wcm9wcy5zY3JvbGxEZWxheSwgX3RoaXMucHJvcHMuc2Nyb2xsVGhyb3R0bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucmVzaXplQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwicmVzaXplXCIsIF90aGlzLnByb3BzLnJlc2l6ZURlbGF5LCBfdGhpcy5wcm9wcy5yZXNpemVUaHJvdHRsZSk7XG4gICAgICB9IC8vIGlmIGRvbnQgbmVlZCBkZWxheWVkIGNhbGwsIGNoZWNrIG9uIGxvYWQgKCBiZWZvcmUgdGhlIGZpcnN0IGludGVydmFsIGZpcmVzIClcblxuXG4gICAgICAhX3RoaXMucHJvcHMuZGVsYXllZENhbGwgJiYgX3RoaXMuY2hlY2soKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdG9wV2F0Y2hpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgLy8gY2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVpciBkZWJvdW5jZSBjYWxsZXJzXG4gICAgICAgIGZvciAodmFyIGRlYm91bmNlRXZlbnQgaW4gX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrLmhhc093blByb3BlcnR5KGRlYm91bmNlRXZlbnQpKSB7XG4gICAgICAgICAgICB2YXIgZGVib3VuY2VJbmZvID0gX3RoaXMuZGVib3VuY2VDaGVja1tkZWJvdW5jZUV2ZW50XTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZUluZm8uZ2V0TGFzdFRpbWVvdXQoKSk7XG4gICAgICAgICAgICBkZWJvdW5jZUluZm8udGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZGVib3VuY2VFdmVudCwgZGVib3VuY2VJbmZvLmZuKTtcbiAgICAgICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrID0gbnVsbDtcblxuICAgICAgaWYgKF90aGlzLmludGVydmFsKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbChfdGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hlY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gX3RoaXMubm9kZTtcbiAgICAgIHZhciByZWN0O1xuICAgICAgdmFyIGNvbnRhaW5tZW50UmVjdDsgLy8gaWYgdGhlIGNvbXBvbmVudCBoYXMgcmVuZGVyZWQgdG8gbnVsbCwgZG9udCB1cGRhdGUgdmlzaWJpbGl0eVxuXG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmVjdCA9IG5vcm1hbGl6ZVJlY3QoX3RoaXMucm91bmRSZWN0RG93bihlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuY29udGFpbm1lbnQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5tZW50RE9NUmVjdCA9IF90aGlzLnByb3BzLmNvbnRhaW5tZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnRhaW5tZW50UmVjdCA9IHtcbiAgICAgICAgICB0b3A6IGNvbnRhaW5tZW50RE9NUmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogY29udGFpbm1lbnRET01SZWN0LmxlZnQsXG4gICAgICAgICAgYm90dG9tOiBjb250YWlubWVudERPTVJlY3QuYm90dG9tLFxuICAgICAgICAgIHJpZ2h0OiBjb250YWlubWVudERPTVJlY3QucmlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdCA9IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQ2hlY2sgaWYgdmlzaWJpbGl0eSBpcyB3YW50ZWQgdmlhIG9mZnNldD9cblxuXG4gICAgICB2YXIgb2Zmc2V0ID0gX3RoaXMucHJvcHMub2Zmc2V0IHx8IHt9O1xuICAgICAgdmFyIGhhc1ZhbGlkT2Zmc2V0ID0gX3R5cGVvZihvZmZzZXQpID09PSBcIm9iamVjdFwiO1xuXG4gICAgICBpZiAoaGFzVmFsaWRPZmZzZXQpIHtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnRvcCArPSBvZmZzZXQudG9wIHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICs9IG9mZnNldC5sZWZ0IHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLT0gb2Zmc2V0LmJvdHRvbSB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QucmlnaHQgLT0gb2Zmc2V0LnJpZ2h0IHx8IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aXNpYmlsaXR5UmVjdCA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCA+PSBjb250YWlubWVudFJlY3QudG9wLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgPj0gY29udGFpbm1lbnRSZWN0LmxlZnQsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgPD0gY29udGFpbm1lbnRSZWN0LnJpZ2h0XG4gICAgICB9OyAvLyBodHRwczovL2dpdGh1Yi5jb20vam9zaHduai9yZWFjdC12aXNpYmlsaXR5LXNlbnNvci9wdWxsLzExNFxuXG4gICAgICB2YXIgaGFzU2l6ZSA9IHJlY3QuaGVpZ2h0ID4gMCAmJiByZWN0LndpZHRoID4gMDtcbiAgICAgIHZhciBpc1Zpc2libGUgPSBoYXNTaXplICYmIHZpc2liaWxpdHlSZWN0LnRvcCAmJiB2aXNpYmlsaXR5UmVjdC5sZWZ0ICYmIHZpc2liaWxpdHlSZWN0LmJvdHRvbSAmJiB2aXNpYmlsaXR5UmVjdC5yaWdodDsgLy8gY2hlY2sgZm9yIHBhcnRpYWwgdmlzaWJpbGl0eVxuXG4gICAgICBpZiAoaGFzU2l6ZSAmJiBfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgcGFydGlhbFZpc2libGUgPSByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tICYmIHJlY3QuYm90dG9tID49IGNvbnRhaW5tZW50UmVjdC50b3AgJiYgcmVjdC5sZWZ0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodCAmJiByZWN0LnJpZ2h0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0OyAvLyBhY2NvdW50IGZvciBwYXJ0aWFsIHZpc2liaWxpdHkgb24gYSBzaW5nbGUgZWRnZVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBwYXJ0aWFsVmlzaWJsZSA9IHZpc2liaWxpdHlSZWN0W190aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5XTtcbiAgICAgICAgfSAvLyBpZiB3ZSBoYXZlIG1pbmltdW0gdG9wIHZpc2liaWxpdHkgc2V0IGJ5IHByb3BzLCBsZXRzIGNoZWNrLCBpZiBpdCBtZWV0cyB0aGUgcGFzc2VkIHZhbHVlXG4gICAgICAgIC8vIHNvIGlmIGZvciBpbnN0YW5jZSBlbGVtZW50IGlzIGF0IGxlYXN0IDIwMHB4IGluIHZpZXdwb3J0LCB0aGVuIHNob3cgaXQuXG5cblxuICAgICAgICBpc1Zpc2libGUgPSBfdGhpcy5wcm9wcy5taW5Ub3BWYWx1ZSA/IHBhcnRpYWxWaXNpYmxlICYmIHJlY3QudG9wIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLSBfdGhpcy5wcm9wcy5taW5Ub3BWYWx1ZSA6IHBhcnRpYWxWaXNpYmxlO1xuICAgICAgfSAvLyBEZXByZWNhdGVkIG9wdGlvbnMgZm9yIGNhbGN1bGF0aW5nIG9mZnNldC5cblxuXG4gICAgICBpZiAodHlwZW9mIG9mZnNldC5kaXJlY3Rpb24gPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG9mZnNldC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbm90aWNlXSBvZmZzZXQuZGlyZWN0aW9uIGFuZCBvZmZzZXQudmFsdWUgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuIFRoZXkgc3RpbGwgd29yayBmb3Igbm93LCBidXQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVwZ3JhZGUgdG8gdGhlIG5ldyBzeW50YXg6IHsgJXM6ICVkIH1cIiwgb2Zmc2V0LmRpcmVjdGlvbiwgb2Zmc2V0LnZhbHVlKTtcbiAgICAgICAgaXNWaXNpYmxlID0gX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCgpKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RhdGU7IC8vIG5vdGlmeSB0aGUgcGFyZW50IHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmlzVmlzaWJsZSAhPT0gaXNWaXNpYmxlKSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB2aXNpYmlsaXR5UmVjdFxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIF90aGlzLnByb3BzLm9uQ2hhbmdlKGlzVmlzaWJsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgdmlzaWJpbGl0eVJlY3Q6IHt9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmlzaWJpbGl0eVNlbnNvciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLm5vZGUgPSByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0LmEuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0YXJ0V2F0Y2hpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gcmUtcmVnaXN0ZXIgbm9kZSBpbiBjb21wb25lbnREaWRVcGRhdGUgaWYgY2hpbGRyZW4gZGlmZnMgWyMxMDNdXG4gICAgICB0aGlzLm5vZGUgPSByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0LmEuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAmJiAhcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0V2F0Y2hpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc3RvcFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdW5kUmVjdERvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91bmRSZWN0RG93bihyZWN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IE1hdGguZmxvb3IocmVjdC50b3ApLFxuICAgICAgICBsZWZ0OiBNYXRoLmZsb29yKHJlY3QubGVmdCksXG4gICAgICAgIGJvdHRvbTogTWF0aC5mbG9vcihyZWN0LmJvdHRvbSksXG4gICAgICAgIHJpZ2h0OiBNYXRoLmZsb29yKHJlY3QucmlnaHQpXG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyB3aXRoaW4gdGhlIHZpc2libGUgdmlld3BvcnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgICAgICBpc1Zpc2libGU6IHRoaXMuc3RhdGUuaXNWaXNpYmxlLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB0aGlzLnN0YXRlLnZpc2liaWxpdHlSZWN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlzaWJpbGl0eVNlbnNvcjtcbn0ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFZpc2liaWxpdHlTZW5zb3IsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgYWN0aXZlOiB0cnVlLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogZmFsc2UsXG4gIG1pblRvcFZhbHVlOiAwLFxuICBzY3JvbGxDaGVjazogZmFsc2UsXG4gIHNjcm9sbERlbGF5OiAyNTAsXG4gIHNjcm9sbFRocm90dGxlOiAtMSxcbiAgcmVzaXplQ2hlY2s6IGZhbHNlLFxuICByZXNpemVEZWxheTogMjUwLFxuICByZXNpemVUaHJvdHRsZTogLTEsXG4gIGludGVydmFsQ2hlY2s6IHRydWUsXG4gIGludGVydmFsRGVsYXk6IDEwMCxcbiAgZGVsYXllZENhbGw6IGZhbHNlLFxuICBvZmZzZXQ6IHt9LFxuICBjb250YWlubWVudDogbnVsbCxcbiAgY2hpbGRyZW46IHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwpXG59KTtcblxuX2RlZmluZVByb3BlcnR5KFZpc2liaWxpdHlTZW5zb3IsIFwicHJvcFR5cGVzXCIsIHtcbiAgb25DaGFuZ2U6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZnVuYyxcbiAgYWN0aXZlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHBhcnRpYWxWaXNpYmlsaXR5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLCBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSldKSxcbiAgZGVsYXllZENhbGw6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgb2Zmc2V0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5zaGFwZSh7XG4gICAgdG9wOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICBsZWZ0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICBib3R0b206IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIHJpZ2h0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KSwgLy8gZGVwcmVjYXRlZCBvZmZzZXQgcHJvcGVydHlcbiAgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5zaGFwZSh7XG4gICAgZGlyZWN0aW9uOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gICAgdmFsdWU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG4gIH0pXSksXG4gIHNjcm9sbENoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHNjcm9sbERlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgc2Nyb2xsVGhyb3R0bGU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICByZXNpemVEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHJlc2l6ZVRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgaW50ZXJ2YWxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBpbnRlcnZhbERlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgY29udGFpbm1lbnQ6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmluc3RhbmNlT2Yod2luZG93LkVsZW1lbnQpIDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5hbnksXG4gIGNoaWxkcmVuOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5lbGVtZW50LCBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmNdKSxcbiAgbWluVG9wVmFsdWU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG59KTtcblxuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBY2NvcmRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2lzT3BlbiwgdGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGlzT3Blbik7XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2FjY29yZGlvbicsIHsnb3Blbic6IG9wZW4sICdjbG9zZWQnOiAhIG9wZW4gfSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e29wZW59XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCEgb3Blbil9XG5cdFx0XHQ+XG5cdFx0XHRcdFx0e3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRpdGxlXCI+e3RpdGxlfTwvZGl2Pn1cblx0XHRcdFx0XHQ8RGFzaGljb25cblx0XHRcdFx0XHRcdGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IG9wZW4gPyAnYXV0bycgOiAnMHB4J319PlxuXHRcdFx0XHR7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IFRhYnNDb250ZW50IGZyb20gJy4vVGFic0NvbnRlbnQnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi9TbmFja2Jhcic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudCwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICh7c2V0U2V0dGluZ3MsIHRvYXN0LCBjdXJyZW50VGFiLCBzZXRUYWIsIGlzT25ib2FyZGluZ30pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdFx0c2V0dGluZ3MuZmV0Y2goKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRzZXRTZXR0aW5ncyhyKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8TG9hZGluZy8+O1xuXHR9XG5cdGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbICdjb250ZW50LXdyYXAnLCB7XG5cdFx0J2lzLW9uYm9hcmRpbmcnOiBpc09uYm9hcmRpbmcgJiYgJ3N0YXJ0ZXItc2l0ZXMnID09PSBjdXJyZW50VGFiLFxuXHRcdCdzdGFydGVyLXNpdGVzJzogJ3N0YXJ0ZXItc2l0ZXMnID09PSBjdXJyZW50VGFiXG5cdH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEhlYWRlciBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8Tm90aWZpY2F0aW9ucy8+fVxuXHRcdFx0XHRcdFx0PFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e3RvYXN0ICYmIDxTbmFja2Jhci8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNldHRpbmdzLCBzZXRUYWJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNldHRpbmdzOiAob2JqZWN0KSA9PiBzZXRTZXR0aW5ncyhvYmplY3QpLFxuXHRcdFx0c2V0VGFiOiAodGFiKSA9PiBzZXRUYWIodGFiKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0VG9hc3QsIGdldFRhYn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0Y29uc3Qge2dldE9uYm9hcmRpbmdTdGF0dXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6IGdldFRvYXN0KCksXG5cdFx0XHRjdXJyZW50VGFiOiBnZXRUYWIoKSxcblx0XHRcdGlzT25ib2FyZGluZzogZ2V0T25ib2FyZGluZ1N0YXR1cygpXG5cdFx0fTtcblx0fSlcbikoQXBwKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2ljb24sIGljb25BbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIGNsYXNzTmFtZXN9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsIGNsYXNzTmFtZXMgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IGFsdD17aWNvbkFsdCB8fCAnaWNvbid9Lz59XG4gICAgICAgIHt0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9BY2NvcmRpb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2hhbmdlbG9nID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2Vsb2csIGNoYW5nZWxvZ1Byb30gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBzaG93Rm9yUHJvLCBzZXRTaG93Rm9yUHJvIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdHtjaGFuZ2Vsb2dQcm8gJiZcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlbG9nLXRhYnNcIj5cblx0XHRcdFx0PHNwYW4+e19fKCdTaG93IGNoYW5nZWxvZyBmb3InLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9eyEgc2hvd0ZvclBybyAmJiAnYWN0aXZlJ31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRTaG93Rm9yUHJvKGZhbHNlKTtcblx0XHRcdFx0XHR9fT57X18oJ05ldmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9e3Nob3dGb3JQcm8gJiYgJ2FjdGl2ZSd9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0U2hvd0ZvclBybyh0cnVlKTtcblx0XHRcdFx0XHR9fT57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0KHNob3dGb3JQcm8gPyBjaGFuZ2Vsb2dQcm8gOiBjaGFuZ2Vsb2cpLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2RhdGUsIHZlcnNpb24sIHR3ZWFrcywgZml4ZXMsIGZlYXR1cmVzfSA9IGVudHJ5O1xuXHRcdFx0XHRcdGlmICghIHR3ZWFrcyAmJiAhIGZpeGVzICYmICEgZmVhdHVyZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PjtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uIGlzT3Blbj17MCA9PT0gaW5kZXh9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHRcdHtmZWF0dXJlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgc3VjY2Vzc1wiPntfXygnRmVhdHVyZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gPGxpPntmZWF0dXJlfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7Zml4ZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidWdzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgZXJyb3JcIj57X18oJ0J1ZyBGaXhlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zml4ZXMubWFwKChmaXgpID0+IDxsaT57Zml4fTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7dHdlYWtzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdlYWtzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPntfXygnVHdlYWtzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0d2Vha3MubWFwKCh0d2VhaykgPT4gPGxpPnt0d2Vha308L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2Vsb2c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBGZWF0dXJlUm93IGZyb20gJy4uL0ZlYXR1cmVSb3cnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtmZWF0dXJlRGF0YX0gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNhcmQgdGFibGVcIj5cblx0XHRcdFx0PHRib2R5IGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRcIj5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwibGFyZ2VcIi8+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZScsICduZXZlJyl9PC90aD5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlIFBybycsICduZXZlJyl9PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0e2ZlYXR1cmVEYXRhLm1hcCgoaXRlbSkgPT4gPEZlYXR1cmVSb3cgaXRlbT17aXRlbX0vPil9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdXBzZWxsXCI+XG5cdFx0XHRcdDxwPntfXygnR2V0IGFjY2VzcyB0byBhbGwgUHJvIGZlYXR1cmVzIGFuZCBwb3dlci11cCB5b3VyIHdlYnNpdGUnLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLnVwZ3JhZGVVUkx9XG5cdFx0XHRcdFx0aXNQcmltYXJ5PlxuXHRcdFx0XHRcdHtfXygnR2V0IE5ldmUgUHJvIE5vdycsICduZXZlJyl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBIZWxwID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG5cblx0bGV0IHtkb2NzVVJMLCBzdXBwb3J0VVJMLCB3aGl0ZUxhYmVsLCBhc3NldHN9ID0gbmV2ZURhc2g7XG5cdGxldCB7c3VwcG9ydENhcmREZXNjcmlwdGlvbiwgZG9jc0NhcmREZXNjcmlwdGlvbn0gPSBuZXZlRGFzaC5zdHJpbmdzO1xuXG5cdGlmICh3aGl0ZUxhYmVsICYmIHdoaXRlTGFiZWwuYWdlbmN5VVJMKSB7XG5cdFx0c3VwcG9ydFVSTCA9IHdoaXRlTGFiZWwuYWdlbmN5VVJMO1xuXHRcdGRvY3NVUkwgPSB3aGl0ZUxhYmVsLmFnZW5jeVVSTDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYnVveS5zdmcnfVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17c3VwcG9ydENhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0aHJlZj17c3VwcG9ydFVSTH1cblx0XHRcdFx0XHQ+e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdHshIHdoaXRlTGFiZWwgJiZcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRpY29uPXthc3NldHMgKyAnbGlzdC5zdmcnfVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdXYW50IHRvIGdldCB0aGUgZ2lzdCBvbiB0aGUgbGF0ZXN0IHRoZW1lIGNoYW5nZXM/IEp1c3QgY29uc3VsdCBvdXIgY2hhbmdlbG9nIGJlbG93IHRvIGdldCBhIHRhc3RlIG9mIHRoZSByZWNlbnQgZml4ZXMgYW5kIGZlYXR1cmVzIGltcGxlbWVudGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKCdjaGFuZ2Vsb2cnKX1cblx0XHRcdFx0XHRcdD57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdFx0aWNvbj17YXNzZXRzICsgJ3RhY2hvbWV0ZXIuc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnU3BlZWQgdXAgeW91ciBzaXRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdwYWdlLnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdEb2N1bWVudGF0aW9uJywgJ25ldmUnKX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17ZG9jc0NhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0aHJlZj17ZG9jc1VSTH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdHshIHdoaXRlTGFiZWwgJiZcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRpY29uPXthc3NldHMgKyAnY2xvbmUuc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzE0LWhvdy10by1jcmVhdGUtYS1jaGlsZC10aGVtZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdhcnJvd3Muc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQnVpbGQgYSBsYW5kaW5nIHBhZ2Ugd2l0aCBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8yMTktaG93LXRvLWJ1aWxkLWEtbGFuZGluZy1wYWdlLXdpdGgtYS1kcmFnLWFuZC1kcm9wLWNvbnRlbnQtYnVpbGRlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IFBybyA9ICgpID0+IHtcblx0Y29uc3Qge21vZHVsZXN9ID0gbmV2ZURhc2g7XG5cblx0aWYgKG5ldmVEYXNoLmhhc09sZFBybykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHQ8aDIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5ldmVEYXNoLnN0cmluZ3MudXBkYXRlT2xkUHJvfX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHR7XG5cdFx0XHRcdE9iamVjdC5rZXlzKG1vZHVsZXMpLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PE1vZHVsZUNhcmQgc2x1Zz17aWR9Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcbmltcG9ydCB7dGFic30gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcblx0ZnVuY3Rpb24gcmVuZGVyTGVmdENvbCgpIHtcblx0XHRpZiAobmV2ZURhc2gud2hpdGVMYWJlbCAmJiBuZXZlRGFzaC53aGl0ZUxhYmVsLmhpZGVTdGFydGVyU2l0ZXMpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHR7dGFic1snc3RhcnRlci1zaXRlcyddICYmXG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3NxdWFyZXMuc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ1N0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtuZXZlRGFzaC5zdHJpbmdzLnN0YXJ0ZXJTaXRlc0NhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0fVxuXHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ0dldHRpbmcgU3RhcnRlZD8gQ2hlY2sgaGVscCBhbmQgZG9jcycsICduZXZlJyl9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2hlbHAnKX1cblx0XHRcdFx0XHQ+e19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Y29uc3Qge3NldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHR7cmVuZGVyTGVmdENvbCgpfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG5cdFx0XHRcdFx0aWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cblx0XHRcdFx0XHR0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG5cdGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcblx0Y29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG5cdGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0e1xuXHRcdFx0XHRwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgT25ib2FyZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL01haW4nO1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAoKSA9PiB7XG5cdHJldHVybiA8T25ib2FyZGluZy8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRlclNpdGVzO1xuIiwiY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG4gIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuICBjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gIGNvbnN0IGhpZGVUb29sdGlwID0gKCkgPT4gdG9nZ2xlVG9vbHRpcChmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwiZmVhdHVyZS1yb3dcIj5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYXJnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXQtd3JhcFwiPlxuICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuICAgICAgICAgICAge3Rvb2x0aXAgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnaW5kaWNhdG9yJywgeydlcnJvcic6ICEgaW5MaXRlLCAnc3VjY2Vzcyc6IGluTGl0ZX0gXSl9PlxuICAgICAgICA8RGFzaGljb24gc2l6ZT17MzB9IGljb249e2luTGl0ZSA/ICd5ZXMnIDogJ25vLWFsdCd9Lz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIHN1Y2Nlc3NcIj5cbiAgICAgICAgPERhc2hpY29uIHNpemU9ezMwfSBpY29uPVwieWVzXCIvPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVJvdztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCBnZXRUYWJIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcblx0XHRpZiAobnVsbCA9PT0gaGFzaCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRwcm9wcy5zZXRUYWIoaGFzaCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cmVuZGVySGVhZCgpfVxuXHRcdFx0XHR7cmVuZGVyTmF2aWdhdGlvbihwcm9wcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlckhlYWQgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e25ldmVEYXNoLnN0cmluZ3MuaGVhZGVyfTwvaDE+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+e25ldmVEYXNoLnZlcnNpb259PC9zcGFuPlxuXHRcdFx0eyEgbmV2ZURhc2gud2hpdGVMYWJlbCAmJlxuXHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvbG9nby5zdmcnfSBhbHQ9e19fKCdOZXZlIFRoZW1lIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHR7T2JqZWN0LmtleXModGFicykubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPjxhXG5cdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdGFkZFVybEhhc2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57dGFic1tpdGVtXS5sYWJlbH1cblx0XHRcdFx0XHQ8L2E+PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgTGljZW5zZUNhcmQgPSAoe2lzVmlzaWJsZSwgY2hhbmdlVGllcn0pID0+IHtcblx0Y29uc3Qge2xpY2Vuc2UsIHByb0FwaX0gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBrZXksIHNldEtleSBdID0gdXNlU3RhdGUobGljZW5zZSAmJiAndmFsaWQnID09PSBsaWNlbnNlLnZhbGlkID8gbGljZW5zZS5rZXkgfHwgJycgOiAnJyk7XG5cdGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyB2YWxpZCwgc2V0VmFsaWQgXSA9IHVzZVN0YXRlKGxpY2Vuc2UudmFsaWQgfHwgJ2ludmFsaWQnKTtcblx0Y29uc3QgWyBleHBpcmF0aW9uLCBzZXRFeHBpcmF0aW9uIF0gPSB1c2VTdGF0ZShsaWNlbnNlLmV4cGlyYXRpb24gfHwgJycpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXG5cdGlmICghIGlzVmlzaWJsZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgdG9nZ2xlTGljZW5zZSA9ICgpID0+IHtcblx0XHRjb25zdCB0b0RvID0gJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnZGVhY3RpdmF0ZScgOiAnYWN0aXZhdGUnO1xuXHRcdHNldFN0YXR1cygnYWN0aXZhdGUnID09PSB0b0RvID8gJ2FjdGl2YXRpbmcnIDogJ2RlYWN0aXZhdGluZycpO1xuXHRcdHNlbmQocHJvQXBpICsgJy90b2dnbGVfbGljZW5zZScsIHtrZXksIGFjdGlvbjogdG9Eb30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRzZXRUb2FzdFR5cGUocmVzcG9uc2Uuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicpO1xuXHRcdFx0c2V0S2V5KCdhY3RpdmF0ZScgPT09IHRvRG8gPyBrZXkgOiAnJyk7XG5cdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdHNldEV4cGlyYXRpb24ocmVzcG9uc2UuZXhwaXJhdGlvbik7XG5cdFx0XHRzZXRWYWxpZChyZXNwb25zZS5zdWNjZXNzICYmICdhY3RpdmF0ZScgPT09IHRvRG8gPyAndmFsaWQnIDogJ25vdF9hY3RpdmUnKTtcblx0XHRcdHNldFN0YXR1cyhmYWxzZSk7XG5cdFx0XHRuZXZlRGFzaC5saWNlbnNlLmV4cGlyYXRpb24gPSByZXNwb25zZS5leHBpcmF0aW9uO1xuXHRcdFx0Y2hhbmdlVGllcihyZXNwb25zZS50aWVyIHx8IDEpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGlmIChuZXZlRGFzaC53aGl0ZUxhYmVsICYmIG5ldmVEYXNoLndoaXRlTGFiZWwuaGlkZUxpY2Vuc2UpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZCBsaWNlbnNlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHR7bmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZEhlYWRpbmcgJiYgPGg0PntuZXZlRGFzaC5zdHJpbmdzLmxpY2Vuc2VDYXJkSGVhZGluZ308L2g0Pn1cblx0XHRcdFx0eyghIG5ldmVEYXNoLndoaXRlTGFiZWwgJiYgbmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZERlc2NyaXB0aW9uKSAmJlxuXHRcdFx0XHQ8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZERlc2NyaXB0aW9ufX0vPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVMaWNlbnNlKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRLZXkoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0J3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionICsga2V5LnNsaWNlKC01KSA6XG5cdFx0XHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ0VudGVyIExpY2Vuc2UgS2V5JywgJ25ldmUnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeT17J3ZhbGlkJyAhPT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdHVzIHx8ICEga2V5fVxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0eyEgc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGUnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdFx0XHQoJ2FjdGl2YXRpbmcnID09PSBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHR7dG9hc3QgJiYgPFRvYXN0IHR5cGU9e3RvYXN0VHlwZX0gZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fS8+fVxuXHRcdFx0XHR7ISBbICdub3RfYWN0aXZlJywgJ2ludmFsaWQnIF0uaW5jbHVkZXModmFsaWQpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGljZW5zZS1mb290ZXJcIj5cblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWVzKFsgJ3N0YXR1cy1pY29uJywgJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnc3VjY2VzcycgOiAnZXJyb3InIF0pXG5cdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249eyd2YWxpZCcgPT09IHZhbGlkID8gJ3llcycgOiAnbm8nfS8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWxpZGl0eVwiPlxuXHRcdFx0XHRcdFx0XHR7J3ZhbGlkJyA9PT0gdmFsaWQgPyBfXygnVmFsaWQnLCAnbmV2ZScpIDogX18oJ0V4cGlyZWQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2V4cGlyYXRpb24gJiZcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+LTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXhwaXJlc1wiPlxuXHRcdFx0XHRcdFx0eygndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVzJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVkJywgJ25ldmUnKSkgKyAnICcgKyBleHBpcmF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FzaWRlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7Y2hhbmdlTGljZW5zZVRpZXJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlVGllcjogKG5ld1RpZXIpID0+IHtcblx0XHRcdGNoYW5nZUxpY2Vuc2VUaWVyKG5ld1RpZXIpO1xuXHRcdH1cblx0fTtcbn0pKExpY2Vuc2VDYXJkKTtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWRhc2hcIj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uIGxvYWRpbmdcIj52Mi42LjI8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgbG9nb1wiLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShBcnJheSg2KSkubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpPjxhIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+PC9saT47XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gbG9hZGluZyBwbGFjZWhvbGRlclwiLz47XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQgY29sdW1ucyBzdGFydFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbWl6ZXItcXVpY2stbGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hc2lkZT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tICcuL09wdGlvbnMvSW5wdXRGb3JtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9PcHRpb25zL1RvZ2dsZSc7XG5pbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtCdXR0b24sIFRvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHNldFRvYXN0LCBjaGFuZ2VNb2R1bGVTdGF0dXMsIGdldE1vZHVsZVN0YXR1cywgdGllcn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGxpbmtzLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0Y29uc3QgcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChvcHRpb25TbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtsYWJlbCwgdHlwZSwgcGxhY2Vob2xkZXJ9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RleHQnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRGb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdHtyZXF1aXJlZF9hY3Rpb25zICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJlcXVpcmVkX2FjdGlvbnN9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdFx0XHRcdFx0XHRcdHshIHJlcXVpcmVkX2FjdGlvbnMgJiZcblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z2V0TW9kdWxlU3RhdHVzKHNsdWcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUsIHRydWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIEFjdGl2YXRlZCcsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgRGVhY3RpdmF0ZWQuJywgJ25ldmUnKSkgKyBgICgke25pY2VuYW1lfSlgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCBhY3RpdmF0ZSBtb2R1bGUuIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRvY3VtZW50YXRpb24udXJsICYmXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtkb2N1bWVudGF0aW9uLnVybH0+e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX08L2E+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdHtsaW5rcyAmJiBnZXRNb2R1bGVTdGF0dXMoc2x1ZykgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0e2xpbmtzLm1hcCgobGluaykgPT4gPEJ1dHRvbiBpc1NlY29uZGFyeSBocmVmPXtsaW5rLnVybH0+e2xpbmsubGFiZWx9PC9CdXR0b24+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0eygwIDwgb3B0aW9ucy5sZW5ndGggJiYgdHJ1ZSA9PT0gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1vcHRpb25zXCI+XG5cdFx0XHRcdFx0e3JlbmRlck9wdGlvbnNBY2NvcmRpb25zKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRNb2R1bGVTdGF0dXMsIGdldExpY2Vuc2VUaWVyfSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0TW9kdWxlU3RhdHVzOiAoc2x1ZykgPT4gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpLFxuXHRcdFx0dGllcjogZ2V0TGljZW5zZVRpZXIoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZVN0YXR1cywgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1czogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKE1vZHVsZUNhcmQpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsImNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbiwgUG9wb3Zlcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgRWRpdG9yU2VsZWN0b3IgPSAoe29uU2VhcmNoLCBlZGl0b3IsIHNldEN1cnJlbnRFZGl0b3J9KSA9PiB7XG5cdGNvbnN0IG1hcCA9IHtcblx0XHQnZWxlbWVudG9yJzoge1xuXHRcdFx0aWNvbjogJ2VsZW1lbnRvci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdFbGVtZW50b3InKVxuXHRcdH0sXG5cdFx0J2JyaXp5Jzoge1xuXHRcdFx0aWNvbjogJ2JyaXp5LnN2ZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0JyaXp5Jylcblx0XHR9LFxuXHRcdCdiZWF2ZXIgYnVpbGRlcic6IHtcblx0XHRcdGljb246ICdiZWF2ZXIucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQmVhdmVyIEJ1aWxkZXInKVxuXHRcdH0sXG5cdFx0J3Rocml2ZSBhcmNoaXRlY3QnOiB7XG5cdFx0XHRpY29uOiAndGhyaXZlLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ1Rocml2ZSBBcmNoaXRlY3QnKVxuXHRcdH0sXG5cdFx0J2RpdmkgYnVpbGRlcic6IHtcblx0XHRcdGljb246ICdkaXZpLnN2ZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0RpdmkgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQnZ3V0ZW5iZXJnJzoge1xuXHRcdFx0aWNvbjogJ2d1dGVuYmVyZy5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdHdXRlbmJlcmcnKVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiBzZXRPcGVuKCEgb3Blbik7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1kcm9wZG93blwiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlRHJvcGRvd259XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0IG9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3ItaWNvbidcblx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW2VkaXRvcl0uaWNvbn1cblx0XHRcdFx0XHRcdGFsdD17X18oJ0J1aWxkZXIgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdFx0XHQ8c3Bhbj57bWFwW2VkaXRvcl0ubmljZU5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfS8+XG5cdFx0XHRcdFx0e29wZW4gJiYgKFxuXHRcdFx0XHRcdFx0PFBvcG92ZXIgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIiBvbkNsb3NlPXt0b2dnbGVEcm9wZG93bn0gbm9BcnJvdz5cblx0XHRcdFx0XHRcdFx0e29wZW4gJiZcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gZWRpdG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEN1cnJlbnRFZGl0b3Ioa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e25ldmVEYXNoLmFzc2V0cyArICdlZGl0b3ItaWNvbnMvJyArIG1hcFtrZXldLmljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17X18oJ0J1aWxkZXIgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC91bD59XG5cdFx0XHRcdFx0XHQ8L1BvcG92ZXI+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0b25TZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdTZWFyY2ggZm9yIGEgc3RhcnRlciBzaXRlJywgJ25ldmUnKSArICcuLi4nfS8+XG5cdFx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL3NlYXJjaC5zdmcnfSBhbHQ9e19fKCdTZWFyY2ggSWNvbicpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50RWRpdG9yfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0Q3VycmVudEVkaXRvcn0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldEN1cnJlbnRFZGl0b3I6IChlZGl0b3IpID0+IHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKVxuXHRcdH07XG5cdH0pXG4pKEVkaXRvclNlbGVjdG9yKTtcbiIsIi8qZ2xvYmFsIG5ldmVEYXNoKi9cbmltcG9ydCB7aW1wb3J0Q29udGVudCwgaW1wb3J0TW9kcywgaW1wb3J0V2lkZ2V0cywgaW5zdGFsbFBsdWdpbnN9IGZyb20gJy4uLy4uL3V0aWxzL3NpdGUtaW1wb3J0JztcbmltcG9ydCB7Z2V0fSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcbmltcG9ydCB7dHJhaWxpbmdTbGFzaEl0fSBmcm9tICcuLi8uLi91dGlscy9jb21tb24nO1xuaW1wb3J0IEltcG9ydFN0ZXBwZXIgZnJvbSAnLi9JbXBvcnRTdGVwcGVyJztcbmltcG9ydCBJbXBvcnRNb2RhbE5vdGUgZnJvbSAnLi9JbXBvcnRNb2RhbE5vdGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW1wb3J0TW9kYWxFcnJvciBmcm9tICcuL0ltcG9ydE1vZGFsRXJyb3InO1xuXG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb24sIFRvZ2dsZUNvbnRyb2wsIE1vZGFsfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbXBvcnRNb2RhbCA9ICh7c2V0TW9kYWwsIGVkaXRvciwgc2l0ZURhdGF9KSA9PiB7XG5cdGNvbnN0IFsgZ2VuZXJhbCwgc2V0R2VuZXJhbCBdID0gdXNlU3RhdGUoe1xuXHRcdGNvbnRlbnQ6IHRydWUsXG5cdFx0Y3VzdG9taXplcjogdHJ1ZSxcblx0XHR3aWRnZXRzOiB0cnVlXG5cdH0pO1xuXHRjb25zdCBbIHBsdWdpbnNQcm9ncmVzcywgc2V0UGx1Z2luc1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgY29udGVudFByb2dyZXNzLCBzZXRDb250ZW50UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBjdXN0b21pemVyUHJvZ3Jlc3MsIHNldEN1c3RvbWl6ZXJQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIHdpZGdldHNQcm9ncmVzcywgc2V0V2lkZ2V0c1Byb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgZnJvbnRQYWdlSUQsIHNldEZyb250UGFnZUlEIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgWyBjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXAgXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbIGltcG9ydGluZywgc2V0SW1wb3J0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgcGx1Z2luT3B0aW9ucywgc2V0UGx1Z2luT3B0aW9ucyBdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgWyBpbXBvcnREYXRhLCBzZXRJbXBvcnREYXRhIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgWyBmZXRjaGluZywgc2V0RmV0Y2hpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cdHVzZUVmZmVjdChmdW5jdGlvbiBnZXRJbXBvcnREYXRhKCkge1xuXG5cdFx0Ly8gY29uc3QgZmV0Y2hBZGRyZXNzID0gc2l0ZURhdGFbJ3JlbW90ZV91cmwnXSB8fCBzaXRlRGF0YS51cmw7XG5cdFx0Y29uc3QgZmV0Y2hBZGRyZXNzID0gc2l0ZURhdGEudXJsO1xuXHRcdGdldChgJHt0cmFpbGluZ1NsYXNoSXQoZmV0Y2hBZGRyZXNzKX13cC1qc29uL3RpLWRlbW8tZGF0YS9kYXRhYCwgdHJ1ZSwgZmFsc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0aWYgKCAhIHJlc3BvbnNlLm9rICkge1xuXHRcdFx0XHRzZXRFcnJvcih7bWVzc2FnZTogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGxvYWRpbmcgdGhlIHNpdGUgZGF0YS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpLCBjb2RlOiAndGlfX29iX2ZhaWxlZF9mZXRjaF9yZXNwb25zZSd9KTtcblx0XHRcdFx0c2V0RmV0Y2hpbmcoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0c2V0SW1wb3J0RGF0YSh7Li4ucmVzdWx0LCAuLi5zaXRlRGF0YX0pO1xuXHRcdFx0XHRjb25zdCBtYW5kYXRvcnkgPSB7Li4uKHJlc3VsdFsnbWFuZGF0b3J5X3BsdWdpbnMnXSB8fCB7fSl9O1xuXHRcdFx0XHRjb25zdCBvcHRpb25hbCA9IHsuLi4ocmVzdWx0WydyZWNvbW1lbmRlZF9wbHVnaW5zJ10gfHwge30pfTtcblx0XHRcdFx0Y29uc3QgZGVmYXVsdE9mZiA9IHJlc3VsdFsnZGVmYXVsdF9vZmZfcmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IFtdO1xuXG5cdFx0XHRcdE9iamVjdC5rZXlzKG1hbmRhdG9yeSkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRtYW5kYXRvcnlba2V5XSA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRPYmplY3Qua2V5cyhvcHRpb25hbCkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRvcHRpb25hbFtrZXldID0gISBkZWZhdWx0T2ZmLmluY2x1ZGVzKGtleSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHNldFBsdWdpbk9wdGlvbnMoe1xuXHRcdFx0XHRcdC4uLm9wdGlvbmFsLFxuXHRcdFx0XHRcdC4uLm1hbmRhdG9yeVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzZXRGZXRjaGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KS5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRzZXRFcnJvcih7bWVzc2FnZTogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGxvYWRpbmcgdGhlIHNpdGUgZGF0YS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpLCBjb2RlOiAndGlfX29iX2ZhaWxlZF9mZXRjaF9jYXRjaCd9KTtcblx0XHRcdHNldEZldGNoaW5nKGZhbHNlKTtcblx0XHR9KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IHJlbmRlck1vY2sgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWxsIGlzLWxvYWRpbmdcIj5cblx0XHRcdFx0XHRcdDxoMz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWljb24gaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8b2w+XG5cdFx0XHRcdFx0XHRcdHtbIDEsIDIsIDMgXS5tYXAoKCkgPT4gPGxpLz4pfVxuXHRcdFx0XHRcdFx0PC9vbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucyBnZW5lcmFsXCI+XG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0e1sgMSwgMiwgMyBdLm1hcCgoKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWljb24gaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZSBpcy1sb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+KSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25zIHBsdWdpbnNcIj5cblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHR7WyAxLCAyIF0ubWFwKCgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2staWNvbiBpcy1sb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlIGlzLWxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT4pKX1cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxCdXR0b24gaXNTZWNvbmRhcnkgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz5cblx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fTtcblx0Y29uc3QgcmVuZGVyTm90ZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gPEltcG9ydE1vZGFsTm90ZSBkYXRhPXtpbXBvcnREYXRhfS8+O1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlck9wdGlvbnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0ge1xuXHRcdFx0Y29udGVudDoge1xuXHRcdFx0XHR0aXRsZTogX18oJ0NvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0XHRpY29uOiAnYWRtaW4tcG9zdCdcblx0XHRcdH0sXG5cdFx0XHRjdXN0b21pemVyOiB7XG5cdFx0XHRcdHRpdGxlOiBfXygnQ3VzdG9taXplcicsICduZXZlJyksXG5cdFx0XHRcdGljb246ICdhZG1pbi1jdXN0b21pemVyJ1xuXHRcdFx0fSxcblx0XHRcdHdpZGdldHM6IHtcblx0XHRcdFx0dGl0bGU6IF9fKCdXaWRnZXRzJywgJ25ldmUnKSxcblx0XHRcdFx0aWNvbjogJ2FkbWluLWdlbmVyaWMnXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25zIGdlbmVyYWxcIj5cblx0XHRcdFx0PGgzPntfXygnR2VuZXJhbCcsICduZXZlJyl9OjwvaDM+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IGdlbmVyYWxbaWRdfSl9IGljb249e21hcFtpZF0uaWNvbn0vPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBbaWRdLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZW5lcmFsW2lkXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRHZW5lcmFsKHsuLi5nZW5lcmFsLCBbaWRdOiAhIGdlbmVyYWxbaWRdfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHJlbmRlclBsdWdpbnMgPSAoKSA9PiB7XG5cdFx0aWYgKGZldGNoaW5nKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYWxsUGx1Z2lucyA9IHsuLi4oaW1wb3J0RGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IHt9KSwgLi4uKGltcG9ydERhdGFbJ21hbmRhdG9yeV9wbHVnaW5zJ10gfHwge30pfTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgcGx1Z2luc1wiPlxuXG5cdFx0XHRcdDxoMz57X18oJ1BsdWdpbnMnLCAnbmV2ZScpfTo8L2gzPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKGFsbFBsdWdpbnMpLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiYWRtaW4tcGx1Z2luc1wiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IHBsdWdpbk9wdGlvbnNbc2x1Z119KX0vPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBhbGxQbHVnaW5zW3NsdWddfX0vPlxuXHRcdFx0XHRcdFx0XHRcdHtzbHVnIGluIGltcG9ydERhdGFbJ3JlY29tbWVuZGVkX3BsdWdpbnMnXSAmJlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3BsdWdpbk9wdGlvbnNbc2x1Z119XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UGx1Z2luT3B0aW9ucyh7Li4ucGx1Z2luT3B0aW9ucywgW3NsdWddOiAhIHBsdWdpbk9wdGlvbnNbc2x1Z119KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH07XG5cblx0ZnVuY3Rpb24gcnVuSW1wb3J0KCkge1xuXHRcdGNvbnNvbGUuY2xlYXIoKTtcblx0XHRpZiAoISBwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnW1NdIFBsdWdpbnMuJyk7XG5cdFx0XHRydW5JbXBvcnRDb250ZW50KCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHNldEN1cnJlbnRTdGVwKCdwbHVnaW5zJyk7XG5cdFx0Y29uc29sZS5sb2coJ1tQXSBQbHVnaW5zLicpO1xuXHRcdGluc3RhbGxQbHVnaW5zKHBsdWdpbk9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ3BsdWdpbnMnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coJ1tEXSBQbHVnaW5zLicpO1xuXHRcdFx0c2V0UGx1Z2luc1Byb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRydW5JbXBvcnRDb250ZW50KCk7XG5cdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ3BsdWdpbnMnKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBydW5JbXBvcnRDb250ZW50KCkge1xuXHRcdGlmICghIGdlbmVyYWwuY29udGVudCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDb250ZW50LicpO1xuXHRcdFx0cnVuSW1wb3J0Q3VzdG9taXplcigpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRzZXRDdXJyZW50U3RlcCgnY29udGVudCcpO1xuXHRcdGNvbnNvbGUubG9nKCdbUF0gQ29udGVudC4nKTtcblx0XHRpbXBvcnRDb250ZW50KHtcblx0XHRcdGNvbnRlbnRGaWxlOiBpbXBvcnREYXRhWydjb250ZW50X2ZpbGUnXSxcblx0XHRcdHNvdXJjZTogJ3JlbW90ZScsXG5cdFx0XHRmcm9udFBhZ2U6IGltcG9ydERhdGFbJ2Zyb250X3BhZ2UnXSxcblx0XHRcdHNob3BQYWdlczogaW1wb3J0RGF0YVsnc2hvcF9wYWdlcyddLFxuXHRcdFx0ZGVtb1NsdWc6IGltcG9ydERhdGEuc2x1Zyxcblx0XHRcdGVkaXRvclxuXHRcdH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ2NvbnRlbnQnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coJ1tEXSBDb250ZW50LicpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydmcm9udHBhZ2VfaWQnXSkge1xuXHRcdFx0XHRzZXRGcm9udFBhZ2VJRChyZXNwb25zZVsnZnJvbnRwYWdlX2lkJ10pO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRydW5JbXBvcnRDdXN0b21pemVyKCk7XG5cdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ2NvbnRlbnQnKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBydW5JbXBvcnRDdXN0b21pemVyKCkge1xuXHRcdGlmICghIGdlbmVyYWwuY3VzdG9taXplcikge1xuXHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDdXN0b21pemVyLicpO1xuXHRcdFx0cnVuSW1wb3J0V2lkZ2V0cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRzZXRDdXJyZW50U3RlcCgnY3VzdG9taXplcicpO1xuXHRcdGNvbnNvbGUubG9nKCdbUF0gQ3VzdG9taXplci4nKTtcblx0XHRpbXBvcnRNb2RzKHtcblx0XHRcdCdzb3VyY2VfdXJsJzogaW1wb3J0RGF0YS51cmwsXG5cdFx0XHQndGhlbWVfbW9kcyc6IGltcG9ydERhdGFbJ3RoZW1lX21vZHMnXSxcblx0XHRcdCd3cF9vcHRpb25zJzogaW1wb3J0RGF0YVsnd3Bfb3B0aW9ucyddXG5cdFx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnY3VzdG9taXplcicpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zb2xlLmxvZygnW0RdIEN1c3RvbWl6ZXIuJyk7XG5cdFx0XHRzZXRDdXN0b21pemVyUHJvZ3Jlc3MoJ2RvbmUnKTtcblx0XHRcdHJ1bkltcG9ydFdpZGdldHMoKTtcblx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnY3VzdG9taXplcicpKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJ1bkltcG9ydFdpZGdldHMoKSB7XG5cdFx0aWYgKCEgZ2VuZXJhbC53aWRnZXRzKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnW1NdIFdpZGdldHMuJyk7XG5cdFx0XHRpbXBvcnREb25lKCk7XG5cdFx0fVxuXHRcdHNldEN1cnJlbnRTdGVwKCd3aWRnZXRzJyk7XG5cdFx0Y29uc29sZS5sb2coJ1tQXSBXaWRnZXRzLicpO1xuXHRcdGltcG9ydFdpZGdldHMoaW1wb3J0RGF0YS53aWRnZXRzKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICd3aWRnZXRzJyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKCdbRF0gV2lkZ2V0cy4nKTtcblx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0aW1wb3J0RG9uZSgpO1xuXHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICd3aWRnZXRzJykpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW1wb3J0RG9uZSgpIHtcblx0XHRzZXRDdXJyZW50U3RlcCgnZG9uZScpO1xuXHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgc3RlcCkge1xuXHRcdHNldEltcG9ydGluZyhmYWxzZSk7XG5cdFx0c2V0Q3VycmVudFN0ZXAobnVsbCk7XG5cdFx0aWYgKCdwbHVnaW5zJyA9PT0gc3RlcCkge1xuXHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdza2lwJyk7XG5cdFx0fVxuXHRcdGlmIChbICdjb250ZW50JywgJ3BsdWdpbnMnIF0uaW5jbHVkZXMoc3RlcCkpIHtcblx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnc2tpcCcpO1xuXHRcdH1cblx0XHRpZiAoWyAnY29udGVudCcsICdwbHVnaW5zJywgJ2N1c3RvbWl6ZXInIF0uaW5jbHVkZXMoc3RlcCkpIHtcblx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnc2tpcCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hcCA9IHtcblx0XHRcdCdwbHVnaW5zJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGluc3RhbGxpbmcgdGhlIG5lY2Vzc2FyeSBwbHVnaW5zLicsICduZXZlJyksXG5cdFx0XHQnY29udGVudCc6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBpbXBvcnRpbmcgdGhlIHdlYnNpdGUgY29udGVudC4nLCAnbmV2ZScpLFxuXHRcdFx0J2N1c3RvbWl6ZXInOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgdXBkYXRpbmcgdGhlIGN1c3RvbWl6ZXIgc2V0dGluZ3MuJywgJ25ldmUnKSxcblx0XHRcdCd3aWRnZXRzJzogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2lkZ2V0cy4nLCAnbmV2ZScpXG5cdFx0fTtcblxuXHRcdHN3aXRjaCAoc3RlcCkge1xuXHRcdFx0Y2FzZSAncGx1Z2lucyc6XG5cdFx0XHRcdHNldFBsdWdpbnNQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjb250ZW50Jzpcblx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2N1c3RvbWl6ZXInOlxuXHRcdFx0XHRzZXRDdXN0b21pemVyUHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2lkZ2V0cyc6XG5cdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHNldEVycm9yKGVycm9yLmRhdGEgPyB7bWVzc2FnZTogbWFwW3N0ZXBdLCBjb2RlOiBlcnJvci5kYXRhfSA6IHttZXNzYWdlOiBtYXBbc3RlcF19KTtcblx0fVxuXG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG5cdFx0aWYgKGltcG9ydGluZykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRNb2RhbChmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGFsbE9wdGlvbnNPZmYgPSBPYmplY3Qua2V5cyhnZW5lcmFsKS5ldmVyeShrID0+IGZhbHNlID09PSBnZW5lcmFsW2tdKTtcblx0Y29uc3QgZWRpdExpbmtNYXAgPSB7XG5cdFx0J2VsZW1lbnRvcic6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWxlbWVudG9yYCxcblx0XHQnYnJpenknOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9icml6eS1lZGl0YCxcblx0XHQnYmVhdmVyIGJ1aWxkZXInOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9mbF9idWlsZGVyYCxcblx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249YXJjaGl0ZWN0JnR2ZT10cnVlYCxcblx0XHQnZGl2aSBidWlsZGVyJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS8/ZXRfZmI9MSZQYWdlU3BlZWQ9b2ZmYCxcblx0XHQnZ3V0ZW5iZXJnJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS93cC1hZG1pbi9wb3N0LnBocD9wb3N0PSR7ZnJvbnRQYWdlSUR9JmFjdGlvbj1lZGl0YFxuXHR9O1xuXHRjb25zdCBlZGl0TGluayA9IGVkaXRMaW5rTWFwW2VkaXRvcl07XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdvYi1pbXBvcnQtbW9kYWwnLCB7J2ZldGNoaW5nJzogZmV0Y2hpbmd9IF0pfVxuXHRcdFx0dGl0bGU9eyhpbXBvcnREYXRhICYmICEgZmV0Y2hpbmcpID8gaW1wb3J0RGF0YS50aXRsZSA6IDxzcGFuIGNsYXNzTmFtZT1cImlzLWxvYWRpbmcgdGl0bGVcIi8+fVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG5cdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXshIGltcG9ydGluZyAmJiAhIGZldGNoaW5nfVxuXHRcdFx0aXNEaXNtaXNzaWJsZT17ISBpbXBvcnRpbmcgJiYgISBmZXRjaGluZ31cblx0XHQ+XG5cdFx0XHR7ZmV0Y2hpbmcgP1xuXHRcdFx0XHRyZW5kZXJNb2NrKCkgOlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0XHR7KCEgaW1wb3J0aW5nICYmICdkb25lJyAhPT0gY3VycmVudFN0ZXAgJiYgISBlcnJvcikgP1xuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlck5vdGUoKX1cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zKCl9XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyUGx1Z2lucygpfVxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiA6XG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IgJiZcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1wb3J0TW9kYWxFcnJvciBtZXNzYWdlPXtlcnJvci5tZXNzYWdlIHx8IG51bGx9IGNvZGU9e2Vycm9yLmNvZGUgfHwgbnVsbH0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7bnVsbCAhPT0gY3VycmVudFN0ZXAgJiYgPEltcG9ydFN0ZXBwZXIgcHJvZ3Jlc3M9e3tcblx0XHRcdFx0XHRcdFx0XHRcdHBsdWdpbnM6IHBsdWdpbnNQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbWl6ZXI6IGN1c3RvbWl6ZXJQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHRcdHdpZGdldHM6IHdpZGdldHNQcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdH19IGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH0gd2lsbERvPXtnZW5lcmFsfS8+fVxuXHRcdFx0XHRcdFx0XHRcdHsnZG9uZScgPT09IGN1cnJlbnRTdGVwICYmXG5cdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImltcG9ydC1yZXN1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdDb250ZW50IHdhcyBzdWNjZXNzZnVsbHkgaW1wb3J0ZWQuIEVuam95IHlvdXIgbmV3IHNpdGUhJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyEgaW1wb3J0aW5nICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cblx0XHRcdFx0XHRcdHsnZG9uZScgIT09IGN1cnJlbnRTdGVwID9cblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjbG9zZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQ2xvc2UnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdHshIGVycm9yICYmXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWxsT3B0aW9uc09mZiB8fCBpbXBvcnREYXRhWydleHRlcm5hbF9wbHVnaW5zJ119XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEltcG9ydGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cnVuSW1wb3J0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2xvc2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17Y2xvc2VNb2RhbH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0JhY2sgdG8gU2l0ZXMgTGlicmFyeScsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH1cblx0XHRcdFx0XHRcdFx0XHQ+e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaXNQcmltYXJ5IGhyZWY9e2VkaXRMaW5rfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQWRkIHlvdXIgb3duIGNvbnRlbnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9GcmFnbWVudD59XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50RWRpdG9yLCBnZXRDdXJyZW50U2l0ZX0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRlZGl0b3I6IGdldEN1cnJlbnRFZGl0b3IoKSxcblx0XHRcdHNpdGVEYXRhOiBnZXRDdXJyZW50U2l0ZSgpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0SW1wb3J0TW9kYWxTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHRcdH07XG5cdH0pXG4pKEltcG9ydE1vZGFsKTtcbiIsImNvbnN0IHtEYXNoaWNvbiwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW1wb3J0TW9kYWxFcnJvciA9ICh7bWVzc2FnZSwgY29kZX0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlbGwgZXJyb3JcIj5cblx0XHRcdHttZXNzYWdlICYmIDxoMz48RGFzaGljb24gaWNvbj1cIndhcm5pbmdcIi8+PHNwYW4+e21lc3NhZ2V9PC9zcGFuPjwvaDM+fVxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGkgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5ldmVEYXNoLm9uYm9hcmRpbmcuc3RyaW5ncy50cm91Ymxlc2hvb3Rpbmd9fS8+XG5cdFx0XHRcdDxsaSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2gub25ib2FyZGluZy5zdHJpbmdzLnN1cHBvcnR9fS8+XG5cdFx0XHRcdHtjb2RlICYmIDxsaT57X18oJ0Vycm9yIGNvZGUnLCAnbmV2ZScpfTogPGNvZGU+e2NvZGV9PC9jb2RlPjwvbGk+fVxuXHRcdFx0XHQ8bGk+e19fKCdFcnJvciBsb2cnLCAnbmV2ZScpfTogPEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC5vbmJvYXJkaW5nLmxvZ1VybH0+e25ldmVEYXNoLm9uYm9hcmRpbmcubG9nVXJsfTxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj1cImV4dGVybmFsXCIvPjwvQnV0dG9uPjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0TW9kYWxFcnJvcjtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbiwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW1wb3J0TW9kYWxOb3RlID0gKHtkYXRhfSkgPT4ge1xuXHRjb25zdCBleHRlcm5hbCA9IGRhdGFbJ2V4dGVybmFsX3BsdWdpbnMnXSB8fCBudWxsO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd3ZWxsJywgeyd3YXJuaW5nJzogZXh0ZXJuYWx9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxoMz5cblx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHQ8c3Bhbj57ZXh0ZXJuYWwgP1xuXHRcdFx0XHRcdF9fKCdUbyBpbXBvcnQgdGhpcyBkZW1vIHlvdSBoYXZlIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW5zJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0X18oJ05vdGUnLCAnbmV2ZScpfTpcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvaDM+XG5cdFx0XHQ8b2w+XG5cdFx0XHRcdHtleHRlcm5hbCA/XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZXh0ZXJuYWwpLm1hcChzbHVnID0+IDxsaT48QnV0dG9uIGlzTGluayBocmVmPXtleHRlcm5hbFtzbHVnXS51cmx9PntzbHVnfTwvQnV0dG9uPjwvbGk+KSA6XG5cdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGxpPntfXygnV2UgcmVjb21tZW5kIHlvdSBiYWNrdXAgeW91ciB3ZWJzaXRlIGNvbnRlbnQgYmVmb3JlIGF0dGVtcHRpbmcgYSBmdWxsIHNpdGUgaW1wb3J0LicsICduZXZlJyl9PC9saT5cblx0XHRcdFx0XHRcdDxsaT57X18oJ1NvbWUgb2YgdGhlIGRlbW8gaW1hZ2VzIHdpbGwgbm90IGJlIGltcG9ydGVkIGFuZCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVyIGltYWdlcy4nLCAnbmV2ZScpfTwvbGk+XG5cdFx0XHRcdFx0XHR7ZGF0YVsndW5zcGxhc2hfZ2FsbGVyeSddICYmXG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17ZGF0YVsndW5zcGxhc2hfZ2FsbGVyeSddfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0hlcmUgaXMgb3VyIG93biBjb2xsZWN0aW9uIG9mIHJlbGF0ZWQgaW1hZ2VzIHlvdSBjYW4gdXNlIGZvciB5b3VyIHNpdGUuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L29sPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0TW9kYWxOb3RlO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCBJbXBvcnRTdGVwcGVyID0gKHtjdXJyZW50U3RlcCwgcHJvZ3Jlc3MsIHdpbGxEb30pID0+IHtcblxuXHRjb25zdCBzdGVwc01hcCA9IHtcblx0XHRwbHVnaW5zOiB7XG5cdFx0XHRsYWJlbDogX18oJ0luc3RhbGxpbmcgUGx1Z2lucycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLnBsdWdpbnMsXG5cdFx0XHR3aWxsRG86IHRydWVcblx0XHR9LFxuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdGxhYmVsOiBfXygnSW1wb3J0aW5nIENvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5jb250ZW50LFxuXHRcdFx0d2lsbERvOiB3aWxsRG8uY29udGVudFxuXHRcdH0sXG5cdFx0Y3VzdG9taXplcjoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbXBvcnRpbmcgQ3VzdG9taXplciBTZXR0aW5ncycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLmN1c3RvbWl6ZXIsXG5cdFx0XHR3aWxsRG86IHdpbGxEby5jdXN0b21pemVyXG5cdFx0fSxcblx0XHR3aWRnZXRzOiB7XG5cdFx0XHRsYWJlbDogX18oJ0ltcG9ydGluZyBXaWRnZXRzJywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3Mud2lkZ2V0cyxcblx0XHRcdHdpbGxEbzogd2lsbERvLndpZGdldHNcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8dWwgY2xhc3NOYW1lPVwic3RlcHBlclwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHN0ZXBzTWFwKS5tYXAoa2V5ID0+IHtcblx0XHRcdFx0Y29uc3Qge2xhYmVsLCBzdGF0dXMsIHdpbGxEb30gPSBzdGVwc01hcFtrZXldO1xuXG5cdFx0XHRcdGlmICghIHdpbGxEbykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoW1xuXHRcdFx0XHRcdCdpY29uJywge1xuXHRcdFx0XHRcdFx0J2xvYWRpbmcnOiBjdXJyZW50U3RlcCA9PT0ga2V5LFxuXHRcdFx0XHRcdFx0J3dhcm5pbmcnOiBjdXJyZW50U3RlcCA9PT0ga2V5LFxuXHRcdFx0XHRcdFx0J3N1Y2Nlc3MnOiAnZG9uZScgPT09IHN0YXR1cyxcblx0XHRcdFx0XHRcdCdlcnJvcic6ICdlcnJvcicgPT09IHN0YXR1cyxcblx0XHRcdFx0XHRcdCdza2lwJzogJ3NraXAnID09PSBzdGF0dXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0pO1xuXG5cdFx0XHRcdGxldCBpY29uID0gJ2Nsb2NrJztcblx0XHRcdFx0aWYgKGN1cnJlbnRTdGVwID09PSBrZXkpIHtcblx0XHRcdFx0XHRpY29uID0gJ3VwZGF0ZSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJ2RvbmUnID09PSBzdGF0dXMpIHtcblx0XHRcdFx0XHRpY29uID0gJ3llcyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJ2Vycm9yJyA9PT0gc3RhdHVzICkge1xuXHRcdFx0XHRcdGljb24gPSAnbm8tYWx0Jztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtjdXJyZW50U3RlcCA9PT0ga2V5ID8gJ2xvYWRpbmcnIDogJyd9Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L3VsPik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRTdGVwcGVyO1xuIiwiaW1wb3J0IEVkaXRvclNlbGVjdG9yIGZyb20gJy4vRWRpdG9yU2VsZWN0b3InO1xuaW1wb3J0IFN0YXJ0ZXJTaXRlQ2FyZCBmcm9tICcuL1N0YXJ0ZXJTaXRlQ2FyZCc7XG5pbXBvcnQgUHJldmlld0ZyYW1lIGZyb20gJy4vUHJldmlld0ZyYW1lJztcbmltcG9ydCBJbXBvcnRNb2RhbCBmcm9tICcuL0ltcG9ydE1vZGFsJztcbmltcG9ydCBNaWdyYXRpb24gZnJvbSAnLi9NaWdyYXRpb24nO1xuaW1wb3J0IFZpelNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcblxuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBPbmJvYXJkaW5nID0gKHtlZGl0b3IsIHByZXZpZXdPcGVuLCBjdXJyZW50U2l0ZURhdGEsIGltcG9ydE1vZGFsLCBpc09uYm9hcmRpbmcsIGNhbmNlbE9uYm9hcmRpbmd9KSA9PiB7XG5cdGNvbnN0IFsgc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgbWF4U2hvd24sIHNldE1heFNob3duIF0gPSB1c2VTdGF0ZSg5KTtcblx0Y29uc3Qge3NpdGVzLCB1cHNlbGxzLCBtaWdyYXRpb259ID0gbmV2ZURhc2gub25ib2FyZGluZy5zaXRlcyB8fCBudWxsO1xuXG5cblx0Y29uc3QgZmlsdGVyU2l0ZXMgPSAoc2l0ZXMpID0+IHtcblx0XHRPYmplY3Qua2V5cyhzaXRlcykubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRzaXRlc1tzbHVnXS5zbHVnID0gc2x1Zztcblx0XHR9KTtcblxuXHRcdHNpdGVzID0gT2JqZWN0LnZhbHVlcyhzaXRlcyk7XG5cblx0XHRpZiAoISBzZWFyY2hRdWVyeSkge1xuXHRcdFx0cmV0dXJuIHNpdGVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShzaXRlcywge1xuXHRcdFx0aW5jbHVkZVNjb3JlOiB0cnVlLFxuXHRcdFx0a2V5czogWyAndGl0bGUnLCAnc2x1ZycsICdrZXl3b3JkcycgXVxuXHRcdH0pO1xuXHRcdGNvbnN0IHNlYXJjaCA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFF1ZXJ5KTtcblx0XHRyZXR1cm4gc2VhcmNoLm1hcChpdGVtID0+IGl0ZW0uaXRlbSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0QWxsU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2l0ZXNEYXRhID0gc2l0ZXMgJiYgc2l0ZXNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHNpdGVzW2VkaXRvcl0pIDogW107XG5cdFx0Y29uc3QgdXBzZWxsc0RhdGEgPSB1cHNlbGxzICYmIHVwc2VsbHNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHVwc2VsbHNbZWRpdG9yXSkubWFwKGkgPT4ge1xuXHRcdFx0aS51cHNlbGwgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fSkgOiBbXTtcblx0XHRyZXR1cm4gWyAuLi5zaXRlc0RhdGEsIC4uLnVwc2VsbHNEYXRhIF07XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyU2l0ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYWxsRGF0YSA9IGdldEFsbFNpdGVzKCk7XG5cdFx0cmV0dXJuIGFsbERhdGEuc2xpY2UoMCwgbWF4U2hvd24pLm1hcChzaXRlID0+IHtcblx0XHRcdHJldHVybiA8U3RhcnRlclNpdGVDYXJkIGRhdGE9e3NpdGV9Lz47XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0U2l0ZU5hdiA9IChwcmV2ID0gZmFsc2UpID0+IHtcblx0XHRpZiAobnVsbCA9PT0gY3VycmVudFNpdGVEYXRhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYWxsU2l0ZXMgPSBnZXRBbGxTaXRlcygpO1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gYWxsU2l0ZXMuaW5kZXhPZihjdXJyZW50U2l0ZURhdGEpO1xuXG5cdFx0aWYgKC0xID09PSBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKDEgPT09IGFsbFNpdGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHByZXYgJiYgMCA9PT0gcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiBhbGxTaXRlc1thbGxTaXRlcy5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRpZiAoISBwcmV2ICYmIHBvc2l0aW9uID09PSBhbGxTaXRlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gYWxsU2l0ZXNbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbFNpdGVzW3ByZXYgPyBwb3NpdGlvbiAtIDEgOiBwb3NpdGlvbiArIDFdO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlbmRlck1pZ3JhdGlvbigpIHtcblx0XHRpZiAoISBtaWdyYXRpb24gKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIDxNaWdyYXRpb24gZGF0YT17bWlncmF0aW9ufS8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHRcdHtyZW5kZXJNaWdyYXRpb24oKX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1oZWFkXCI+XG5cdFx0XHRcdFx0PGgyPntfXygnUmVhZHkgdG8gdXNlIHByZS1idWlsdCB3ZWJzaXRlcyB3aXRoIDEtY2xpY2sgaW5zdGFsbGF0aW9uJywgJ25ldmUnKX08L2gyPlxuXHRcdFx0XHRcdDxwPntuZXZlRGFzaC5zdHJpbmdzLnN0YXJ0ZXJTaXRlc1RhYkRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHR7aXNPbmJvYXJkaW5nICYmXG5cdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgb25DbGljaz17Y2FuY2VsT25ib2FyZGluZ30+e19fKCdLZWVwIHRoZSBDdXJyZW50IExheW91dCcsICduZXZlJyl9PC9CdXR0b24+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdFx0PEVkaXRvclNlbGVjdG9yXG5cdFx0XHRcdFx0XHRvblNlYXJjaD17KHF1ZXJ5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcblx0XHRcdFx0XHRcdFx0c2V0TWF4U2hvd24oOSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0cXVlcnk9e3NlYXJjaFF1ZXJ5fS8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1zaXRlc1wiPlxuXHRcdFx0XHRcdFx0eyhzaXRlcyB8fCB1cHNlbGxzKSAmJiByZW5kZXJTaXRlcygpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxWaXpTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHtcblx0XHRcdFx0XHRcdGlmICghIGlzVmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRNYXhTaG93bihtYXhTaG93biArIDkpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3toZWlnaHQ6IDEwLCB3aWR0aDogMTAsIGRpc3BsYXk6ICdibG9jayd9fS8+XG5cdFx0XHRcdFx0PC9WaXpTZW5zb3I+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7KHByZXZpZXdPcGVuICYmIGN1cnJlbnRTaXRlRGF0YSkgJiYgPFByZXZpZXdGcmFtZSBuZXh0PXtnZXRTaXRlTmF2KCl9IHByZXY9e2dldFNpdGVOYXYodHJ1ZSl9Lz59XG5cdFx0XHR7KGltcG9ydE1vZGFsICYmIGN1cnJlbnRTaXRlRGF0YSkgJiYgPEltcG9ydE1vZGFsLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7c2V0T25ib2FyZGluZ1N0YXRlfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2FuY2VsT25ib2FyZGluZzogKCkgPT4ge1xuXHRcdFx0XHRzZXRPbmJvYXJkaW5nU3RhdGUoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0Q3VycmVudEVkaXRvcixcblx0XHRcdGdldFByZXZpZXdTdGF0dXMsXG5cdFx0XHRnZXRDdXJyZW50U2l0ZSxcblx0XHRcdGdldEltcG9ydE1vZGFsU3RhdHVzLFxuXHRcdFx0Z2V0T25ib2FyZGluZ1N0YXR1c1xuXHRcdH0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRlZGl0b3I6IGdldEN1cnJlbnRFZGl0b3IoKSxcblx0XHRcdHByZXZpZXdPcGVuOiBnZXRQcmV2aWV3U3RhdHVzKCksXG5cdFx0XHRjdXJyZW50U2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKCksXG5cdFx0XHRpbXBvcnRNb2RhbDogZ2V0SW1wb3J0TW9kYWxTdGF0dXMoKSxcblx0XHRcdGlzT25ib2FyZGluZzogZ2V0T25ib2FyZGluZ1N0YXR1cygpXG5cdFx0fTtcblx0fSlcbikoT25ib2FyZGluZyk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQge2luc3RhbGxQbHVnaW5zfSBmcm9tICcuLi8uLi91dGlscy9zaXRlLWltcG9ydCc7XG5pbXBvcnQgSW1wb3J0TW9kYWxOb3RlIGZyb20gJy4vSW1wb3J0TW9kYWxOb3RlJztcbmltcG9ydCBJbXBvcnRNb2RhbEVycm9yIGZyb20gJy4vSW1wb3J0TW9kYWxFcnJvcic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0Rhc2hpY29uLCBCdXR0b24sIE1vZGFsfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IE1pZ3JhdGlvbiA9ICh7ZGF0YSwgc2V0VG9hc3R9KSA9PiB7XG5cdGNvbnN0IFsgZGlzbWlzc2VkLCBzZXREaXNtaXNzZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBtb2RhbE9wZW4sIHNldE1vZGFsT3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIG1pZ3JhdGluZywgc2V0TWlncmF0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgWyBmcm9udFBhZ2VJRCwgc2V0RnJvbnRQYWdlSUQgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdGlmIChkaXNtaXNzZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG5cdFx0aWYgKCdkb25lJyA9PT0gbWlncmF0aW5nKSB7XG5cdFx0XHRzZXREaXNtaXNzZWQodHJ1ZSk7XG5cdFx0fVxuXHRcdHNldE1vZGFsT3BlbihmYWxzZSk7XG5cdFx0c2V0RXJyb3IobnVsbCk7XG5cdFx0c2V0TWlncmF0aW5nKGZhbHNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdGFydE1pZ3JhdGlvbigpIHtcblx0XHRjb25zdCBwbHVnaW5zID0gT2JqZWN0LmtleXMoZGF0YS5tYW5kYXRvcnlfcGx1Z2lucykucmVkdWNlKGZ1bmN0aW9uIChwLCBrZXkpIHtcblx0XHRcdHBba2V5XSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9LCB7fSk7XG5cblx0XHRpbnN0YWxsUGx1Z2lucyhwbHVnaW5zKS50aGVuKHIgPT4ge1xuXHRcdFx0c2V0TWlncmF0aW5nKHRydWUpO1xuXHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdHNldEVycm9yKHtcblx0XHRcdFx0XHRjb2RlOiByLmRhdGEgfHwgbnVsbCxcblx0XHRcdFx0XHRtZXNzYWdlOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW5zdGFsbGluZyB0aGUgbmVjZXNzYXJ5IHBsdWdpbnMuJywgJ25ldmUnKVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2V0TWlncmF0aW5nKGZhbHNlKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge3RlbXBsYXRlLCB0ZW1wbGF0ZV9uYW1lfSA9IGRhdGE7XG5cdFx0XHRzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvbWlncmF0ZV9mcm9udHBhZ2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGVtcGxhdGUsXG5cdFx0XHRcdFx0dGVtcGxhdGVfbmFtZVxuXHRcdFx0XHR9XG5cdFx0XHQpLnRoZW4ociA9PiB7XG5cdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHNldEVycm9yKHtcblx0XHRcdFx0XHRcdGNvZGU6IHIuZGF0YSB8fCBudWxsLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2Vic2l0ZSBjb250ZW50LicsICduZXZlJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRNaWdyYXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRGcm9udFBhZ2VJRChyLmRhdGEpO1xuXHRcdFx0XHRzZXRNaWdyYXRpbmcoJ2RvbmUnKTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCByZW5kZXJNb2RhbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm9iLWltcG9ydC1tb2RhbCBtaWdyYXRpb25cIlxuXHRcdFx0XHR0aXRsZT17X18oJ01pZ3JhdGUnLCAnbmV2ZScpICsgJyAnICsgZGF0YS50aGVtZV9uYW1lfVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cblx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ISBtaWdyYXRpbmd9XG5cdFx0XHRcdGlzRGlzbWlzc2libGU9eyEgbWlncmF0aW5nfVxuXHRcdFx0PlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0XHR7ZXJyb3IgJiYgPEltcG9ydE1vZGFsRXJyb3IgbWVzc2FnZT17ZXJyb3IubWVzc2FnZSB8fCBudWxsfSBjb2RlPXtlcnJvci5jb2RlIHx8IG51bGx9Lz59XG5cdFx0XHRcdFx0XHR7ZmFsc2UgPT09IG1pZ3JhdGluZyAmJiAhIGVycm9yICYmXG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxJbXBvcnRNb2RhbE5vdGUgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5tYW5kYXRvcnlfcGx1Z2lucyAmJlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+e19fKCdUaGUgZm9sbG93aW5nIHBsdWdpbnMgd2lsbCBiZSBpbnN0YWxsZWQnLCAnbmV2ZScpfTo8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5tYW5kYXRvcnlfcGx1Z2lucykubWFwKGsgPT4gPGxpPi0ge2RhdGEubWFuZGF0b3J5X3BsdWdpbnNba119PC9saT4pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHsnZG9uZScgPT09IG1pZ3JhdGluZyAmJlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW1wb3J0LXJlc3VsdFwiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ0NvbnRlbnQgd2FzIHN1Y2Nlc3NmdWxseSBpbXBvcnRlZC4gRW5qb3kgeW91ciBuZXcgc2l0ZSEnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0cnVlID09PSBtaWdyYXRpbmcgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJ1cGRhdGVcIiBzaXplPXs1MH0vPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57X18oJ01pZ3JhdGluZycsICduZXZlJyl9Li4uPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyghIG1pZ3JhdGluZyB8fCAnZG9uZScgPT09IG1pZ3JhdGluZykgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J2RvbmUnICE9PSBtaWdyYXRpbmd9XG5cdFx0XHRcdFx0XHRcdGlzTGluaz17J2RvbmUnID09PSBtaWdyYXRpbmd9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J2RvbmUnID09PSBtaWdyYXRpbmcgPyAnY2xvc2UnIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17Y2xvc2VNb2RhbH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0eydkb25lJyA9PT0gbWlncmF0aW5nID8gX18oJ0Nsb3NlJywgJ25ldmUnKSA6IF9fKCdDYW5jZWwnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHR7KCEgZXJyb3IgJiYgJ2RvbmUnICE9PSBtaWdyYXRpbmcpID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0TWlncmF0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdTdGFydCBNaWdyYXRpb24nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2Ake25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWxlbWVudG9yYH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgQ29udGVudCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItbWlncmF0aW9uXCI+XG5cdFx0XHR7bW9kYWxPcGVuICYmIHJlbmRlck1vZGFsKCl9XG5cdFx0XHQ8aDI+e2RhdGEuaGVhZGluZ308L2gyPlxuXHRcdFx0PHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtkYXRhLnNjcmVlbnNob3R9IGFsdD17ZGF0YS50aGVtZV9uYW1lfS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnRoZW1lX25hbWV9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNb2RhbE9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PntfXygnTWlncmF0ZScsICduZXZlJykgKyAnICcgKyBkYXRhLnRoZW1lX25hbWV9PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9kaXNtaXNzX21pZ3JhdGlvbicsIHtcblx0XHRcdFx0XHRcdFx0dGhlbWVfbW9kOiBkYXRhLnRoZW1lX21vZFxuXHRcdFx0XHRcdFx0fSkudGhlbihyID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdEaXNtaXNzZWQnLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0c2V0RGlzbWlzc2VkKHRydWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PntfXygnRGlzbWlzcycsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdGNvbnN0IHtzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHtcblx0XHRcdHNldFRvYXN0KG1lc3NhZ2UpO1xuXHRcdH1cblx0fTtcbn0pKE1pZ3JhdGlvbik7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1pZ3JhdGlvbjtcbiIsImNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFByZXZpZXdGcmFtZSA9ICh7bmV4dCwgcHJldiwgc2l0ZURhdGEsIHNldFNpdGUsIHNldFByZXZpZXcsIHNldE1vZGFsfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItcHJldmlld1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG5cdFx0XHRcdDxpZnJhbWUgc3JjPXtzaXRlRGF0YS51cmx9IGZyYW1lYm9yZGVyPVwiMFwiLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJ1cGRhdGVcIiBzaXplPXs1MH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b20tYmFyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdG9yXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRQcmV2aWV3KGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShudWxsKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbG9zZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Nsb3NlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJub1wiLz5cblxuXHRcdFx0XHRcdHtwcmV2ICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShwcmV2KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmV2XCJcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUHJldmlvdXMnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cImFycm93LWxlZnQtYWx0MlwiXG5cdFx0XHRcdFx0Lz59XG5cblx0XHRcdFx0XHR7bmV4dCAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUobmV4dCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dFwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ05leHQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cImFycm93LXJpZ2h0LWFsdDJcIlxuXHRcdFx0XHRcdC8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3NpdGVEYXRhLnVwc2VsbCA/XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVwZ3JhZGVcIlxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0aHJlZj17c2l0ZURhdGEudXRtT3V0Ym91bmRMaW5rIHx8IG5ldmVEYXNoLnVwZ3JhZGVVUkx9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TW9kYWwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50U2l0ZX0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50U2l0ZSwgc2V0UHJldmlld1N0YXR1cywgc2V0SW1wb3J0TW9kYWxTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlOiAoZGF0YSkgPT4gc2V0Q3VycmVudFNpdGUoZGF0YSksXG5cdFx0XHRzZXRQcmV2aWV3OiAoc3RhdHVzKSA9PiBzZXRQcmV2aWV3U3RhdHVzKHN0YXR1cyksXG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKVxuXHRcdH07XG5cdH0pXG4pKFByZXZpZXdGcmFtZSk7XG4iLCJjb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgU3RhcnRlclNpdGVDYXJkID0gKHtkYXRhLCBzZXRTaXRlLCBzZXRQcmV2aWV3LCBzZXRNb2RhbH0pID0+IHtcblx0Y29uc3Qge3Vwc2VsbH0gPSBkYXRhO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJmYXZcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIGljb249XCJzdGFyLWZpbGxlZFwiLz5cblx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInByZXZpZXdcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRzZXRQcmV2aWV3KHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ1ByZXZpZXcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHshIHVwc2VsbCAmJlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltcG9ydFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdHNldE1vZGFsKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0ltcG9ydCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuXHRcdFx0XHR7dXBzZWxsICYmIDxzcGFuIGNsYXNzTmFtZT1cInByby1iYWRnZVwiPntfXygnUHJvJywgJ25ldmUnKX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7c2V0Q3VycmVudFNpdGUsIHNldFByZXZpZXdTdGF0dXMsIHNldEltcG9ydE1vZGFsU3RhdHVzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0cmV0dXJuIHtcblx0XHRzZXRTaXRlOiAoZGF0YSkgPT4gc2V0Q3VycmVudFNpdGUoZGF0YSksXG5cdFx0c2V0UHJldmlldzogKHN0YXR1cykgPT4gc2V0UHJldmlld1N0YXR1cyhzdGF0dXMpLFxuXHRcdHNldE1vZGFsOiAoc3RhdHVzKSA9PiBzZXRJbXBvcnRNb2RhbFN0YXR1cyhzdGF0dXMpXG5cdH07XG59KVxuKFN0YXJ0ZXJTaXRlQ2FyZCk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9FRElUT1InLFxuXHRcdFx0cGF5bG9hZDoge2VkaXRvcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50U2l0ZShzaXRlRGF0YSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0ZPQ1VTRURfU0lURScsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZURhdGF9XG5cdFx0fTtcblx0fSxcblx0c2V0UHJldmlld1N0YXR1cyhwcmV2aWV3U3RhdHVzKSB7XG5cdFx0aWYgKHByZXZpZXdTdGF0dXMpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1BSRVZJRVdfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtwcmV2aWV3U3RhdHVzfVxuXHRcdH07XG5cdH0sXG5cdHNldEltcG9ydE1vZGFsU3RhdHVzKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0aWYgKGltcG9ydE1vZGFsU3RhdHVzKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29iLW92ZXJmbG93LW9mZicpO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9JTVBPUlRfTU9EQUxfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtpbXBvcnRNb2RhbFN0YXR1c31cblx0XHR9O1xuXHR9LFxuXHRzZXRPbmJvYXJkaW5nU3RhdGUoc3RhdGUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9PTkJPQVJESU5HJyxcblx0XHRcdHBheWxvYWQ6IHtzdGF0ZX1cblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2l0ZXM6IG51bGwsXG5cdHVwc2VsbHM6IG51bGwsXG5cdGVkaXRvcjogJ2VsZW1lbnRvcicsXG5cdHByZXZpZXdTdGF0dXM6IGZhbHNlLFxuXHRpbXBvcnRNb2RhbFN0YXR1czogZmFsc2UsXG5cdGN1cnJlbnRTaXRlOiBudWxsLFxuXHRpbXBvcnRpbmc6IGZhbHNlLFxuXHRpc09uYm9hcmRpbmc6IG5ldmVEYXNoLm9uYm9hcmRpbmcub25ib2FyZGluZyB8fCBmYWxzZSxcblx0bWlncmF0aW9uRGF0YTogbnVsbFxufTtcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfU0lURVMnOlxuXHRcdFx0Y29uc3Qge3NpdGVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNpdGVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9VUFNFTExTJzpcblx0XHRcdGNvbnN0IHt1cHNlbGxzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwc2VsbHNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX01JR1JBVElPTl9EQVRBJzpcblx0XHRcdGNvbnN0IHttaWdyYXRpb25EYXRhfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdG1pZ3JhdGlvbkRhdGFcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0NVUlJFTlRfRURJVE9SJzpcblx0XHRcdGNvbnN0IHtlZGl0b3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0ZWRpdG9yXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9GT0NVU0VEX1NJVEUnOlxuXHRcdFx0Y29uc3Qge3NpdGVEYXRhfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRTaXRlOiBzaXRlRGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfUFJFVklFV19TVEFUVVMnOlxuXHRcdFx0Y29uc3Qge3ByZXZpZXdTdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cHJldmlld1N0YXR1c1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfSU1QT1JUX01PREFMX1NUQVRVUyc6XG5cdFx0XHRjb25zdCB7aW1wb3J0TW9kYWxTdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0aW1wb3J0TW9kYWxTdGF0dXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX09OQk9BUkRJTkcnOlxuXHRcdFx0Y29uc3Qge3N0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpc09uYm9hcmRpbmc6IHN0YXR1c1xuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRTaXRlczogKHN0YXRlKSA9PiBzdGF0ZS5zaXRlcyxcblx0Z2V0VXBzZWxsczogKHN0YXRlKSA9PiBzdGF0ZS51cHNlbGxzLFxuXHRnZXRNaWdyYXRpb25EYXRhOiAoc3RhdGUpID0+IHN0YXRlLm1pZ3JhdGlvbkRhdGEsXG5cdGdldEN1cnJlbnRFZGl0b3I6IChzdGF0ZSkgPT4gc3RhdGUuZWRpdG9yLFxuXHRnZXRDdXJyZW50U2l0ZTogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50U2l0ZSxcblx0Z2V0UHJldmlld1N0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5wcmV2aWV3U3RhdHVzLFxuXHRnZXRJbXBvcnRNb2RhbFN0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5pbXBvcnRNb2RhbFN0YXR1cyxcblx0Z2V0T25ib2FyZGluZ1N0YXR1czogKHN0YXRlKSA9PiBzdGF0ZS5pc09uYm9hcmRpbmdcbn07XG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbnB1dEZvcm0gPSAoe3NsdWcsIGxhYmVsLCBwbGFjZWhvbGRlciwgZ2V0T3B0aW9uLCBzZXRUb2FzdCwgY2hhbmdlT3B0aW9ufSkgPT4ge1xuXHRjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoZ2V0T3B0aW9uKHNsdWcpKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdGV4dCc+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17XG5cdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyhzbHVnLCB2YWx1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KHIubWVzc2FnZSA/IHIubWVzc2FnZSA6IGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9PlxuXHRcdFx0XHR7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e3NsdWd9PntsYWJlbH08L2xhYmVsPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD17c2x1Z31cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtcblx0XHRcdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2xvYWRpbmcgPyAnaXMtbG9hZGluZycgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2F2ZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdGljb249e2xvYWRpbmcgPyAndXBkYXRlJyA6ICdlZGl0b3ItYnJlYWsnfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldFByb09wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldFByb09wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKElucHV0Rm9ybSk7XG5cbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRvZ2dsZSA9ICh7c2x1ZywgbGFiZWwsIGdldE9wdGlvbiwgY2hhbmdlT3B0aW9uLCBzZXRUb2FzdH0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdG9nZ2xlJz5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGNoZWNrZWQ9e2dldE9wdGlvbihzbHVnKX1cblx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKCBzbHVnLCB2YWx1ZSApLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICggci5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3QoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7bG9hZGluZyAmJiA8RGFzaGljb24gc2l6ZT17MTh9IGljb249XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0UHJvT3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0UHJvT3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoVG9nZ2xlKTtcblxuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Z2V0fSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge3NsdWcsIGRhdGF9ID0gcHJvcHM7XG5cdGNvbnN0IHtiYW5uZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCB2ZXJzaW9uLCBhdXRob3J9ID0gcHJvcHMuZGF0YTtcblx0Y29uc3QgWyBhY3Rpb24sIHNldEFjdGlvbiBdID0gdXNlU3RhdGUoZGF0YS5jdGEpO1xuXHRjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBzdHJpbmdNYXAgPSB7XG5cdFx0J2luc3RhbGwnOiB7c3RhdGljOiBfXygnSW5zdGFsbCcsICduZXZlJyksIHByb2dyZXNzOiBfXygnSW5zdGFsbGluZycsICduZXZlJyl9LFxuXHRcdCdhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdBY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnQWN0aXZhdGluZycsICduZXZlJyl9LFxuXHRcdCdkZWFjdGl2YXRlJzoge3N0YXRpYzogX18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0RlYWN0aXZhdGluZycsICduZXZlJyl9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgJ3BsdWdpbicsIHNsdWcgXSl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YmFubmVyfSBhbHQ9e19fKCdCYW5uZXIgSW1hZ2UnLCAnbmFtZScpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMz5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwbHVnaW4tZGF0YVwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInBsdWdpbi1hY3Rpb25cIlxuXHRcdFx0XHRcdGlzUHJpbWFyeT17WyAnaW5zdGFsbCcsICdhY3RpdmF0ZScgXS5pbmNsdWRlcyhhY3Rpb24pfVxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsnZGVhY3RpdmF0ZScgPT09IGFjdGlvbn1cblx0XHRcdFx0XHRkaXNhYmxlZD17aW5Qcm9ncmVzc31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKHRydWUpO1xuXHRcdFx0XHRcdFx0aWYgKCdpbnN0YWxsJyA9PT0gYWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxQbHVnaW4oc2x1ZykudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cblx0XHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRnZXQoZGF0YVthY3Rpb25dLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICghIHIub2spIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuXHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmICgnYWN0aXZhdGUnID09PSBhY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2RlYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyEgaW5Qcm9ncmVzcyAmJiBzdHJpbmdNYXBbYWN0aW9uXS5zdGF0aWN9XG5cdFx0XHRcdFx0e2luUHJvZ3Jlc3MgJiYgKFxuXHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz5cblx0XHRcdFx0XHRcdFx0e3N0cmluZ01hcFthY3Rpb25dLnByb2dyZXNzICsgJy4uLid9XG4gICAgICAgICAgICA8L3NwYW4+KX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IGluc3RhbGxQbHVnaW4gPSAoc2x1ZykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0d3AudXBkYXRlcy5hamF4KCdpbnN0YWxsLXBsdWdpbicsIHtcblx0XHRcdHNsdWcsXG5cdFx0XHRzdWNjZXNzOiAocikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHtzdWNjZXNzOiB0cnVlfSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6IChlcnIpID0+IHtcblxuXHRcdFx0XHQvLyBlcnJvckNvZGUsIGVycm9yTWVzc2FnZSBhcmUgcGFyYW1zIG9mIGVyciBpZiB3ZSB0b2FzdC5cblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7Y2hhbmdlT3B0aW9ufSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBMaWNlbnNlQ2FyZCBmcm9tICcuL0xpY2Vuc2VDYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7VG9nZ2xlQ29udHJvbH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFiLCBzZXRUb2FzdCwgbG9nZ2VyVmFsdWV9KSA9PiB7XG5cdGNvbnN0IFsgdHJhY2tpbmcsIHNldFRyYWNraW5nIF0gPSB1c2VTdGF0ZSgneWVzJyA9PT0gbG9nZ2VyVmFsdWUpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdHtuZXZlRGFzaC5wcm8gJiYgPExpY2Vuc2VDYXJkIGlzVmlzaWJsZT17J3BybycgPT09IGN1cnJlbnRUYWJ9Lz59XG5cdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnTmV2ZSBDb21tdW5pdHknLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdMZWF2ZSB1cyBhIHJldmlldycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0FyZSB5b3UgYXJlIGVuam95aW5nIE5ldmU/IFdlIHdvdWxkIGxvdmUgdG8gaGVhciB5b3VyIGZlZWRiYWNrLicsICduZXZlJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnQ29udHJpYnV0aW5nJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQmVjb21lIGEgY29udHJpYnV0b3IgYnkgb3B0aW5nIGluIHRvIG91ciBhbm9ueW1vdXMgZGF0YSB0cmFja2luZy4gV2UgZ3VhcmFudGVlIG5vIHNlbnNpdGl2ZSBkYXRhIGlzIGNvbGxlY3RlZC4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTEyMi1uZXZlLXVzYWdlLXRyYWNraW5nXCI+XG5cdFx0XHRcdFx0XHRcdHtfXygnV2hhdCBkbyB3ZSB0cmFjaz8nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dHJhY2tpbmd9XG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FsbG93IEFub255bW91cyBUcmFja2luZycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKCduZXZlX2xvZ2dlcl9mbGFnJywgdmFsdWUgPyAneWVzJyA6ICdubycsIGZhbHNlLCBmYWxzZSkudGhlbihyID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgdXBkYXRlIG9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKCEgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnT3B0aW9uIFVwZGF0ZWQnLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hc2lkZT5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2Uod2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KSwgd2l0aFNlbGVjdChzZWxlY3QgPT4ge1xuXHRcdGNvbnN0IHtnZXRPcHRpb259ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2dnZXJWYWx1ZTogZ2V0T3B0aW9uKCduZXZlX2xvZ2dlcl9mbGFnJylcblx0XHR9O1xuXHR9KVxuKShTaWRlYmFyKTtcbiIsImNvbnN0IHtTbmFja2Jhcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZUVmZmVjdCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IEdsb2JhbFNuYWNrYmFyID0gKHt0b2FzdCwgc2V0VG9hc3R9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRUb2FzdChudWxsKTtcblx0XHR9LCAzMDAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSB0b2FzdCgpO1xuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRvcGFjaXR5OiBudWxsID09PSBtZXNzYWdlID8gMCA6IDFcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxTbmFja2JhclxuXHRcdFx0XHRjbGFzc05hbWU9J2Rhc2gtbm90aWNlJ1xuXHRcdFx0PlxuXHRcdFx0XHR7J2Jvb2xlYW4nID09PSB0eXBlb2YgbWVzc2FnZSA/XG5cdFx0XHRcdFx0KGZhbHNlID09PSBtZXNzYWdlID9cblx0XHRcdFx0XHRcdF9fKCdDb3VsZCBub3QgVXBkYXRlIE9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpIDpcblx0XHRcdFx0XHR0b2FzdCgpXG5cdFx0XHRcdH1cblx0XHRcdDwvU25hY2tiYXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoR2xvYmFsU25hY2tiYXIpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBUYWJzQ29udGVudCA9ICh7Y3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0YWItY29udGVudCcsICdjb2x1bW5zJywgY3VycmVudFRhYiBdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7dGFic1tjdXJyZW50VGFiXS5yZW5kZXIoc2V0VGFiKX1cblx0XHQ8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBUb2FzdCA9ICh7bWVzc2FnZSwgZGlzbWlzcywgdGltZSwgdHlwZSA9ICdpbmZvJ30pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkaXNtaXNzKCcnKTtcblx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH0sIHRpbWUgfHwgMjAwMCk7XG5cdH0pO1xuXHRjb25zdCBpY29uTWFwID0ge1xuXHRcdCdpbmZvJzogJ2luZm8nLFxuXHRcdCdlcnJvcic6ICdubycsXG5cdFx0J3N1Y2Nlc3MnOiAneWVzJyxcblx0XHQnd2FybmluZyc6ICd3YXJuaW5nJ1xuXHR9O1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0b2FzdCcsICdjb21wb25lbnRzLWFuaW1hdGVfX2FwcGVhcicsICdpcy1mcm9tLW1pZGRsZScsIHR5cGUgXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PERhc2hpY29uIGljb249e2ljb25NYXBbdHlwZV19Lz5cblx0XHRcdDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtZGFzaGJvYXJkJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnNcbn0pO1xuXG5pbXBvcnQgb25ib2FyZGluZ1JlZHVjZXIgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgb25ib2FyZGluZ0FjdGlvbnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgb25ib2FyZGluZ1NlbGVjdG9ycyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1vbmJvYXJkaW5nJywge1xuXHRyZWR1Y2VyOiBvbmJvYXJkaW5nUmVkdWNlcixcblx0YWN0aW9uczogb25ib2FyZGluZ0FjdGlvbnMsXG5cdHNlbGVjdG9yczogb25ib2FyZGluZ1NlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCIgZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRUYWIodGFiKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfVEFCJyxcblx0XHRcdHBheWxvYWQ6IHt0YWJ9XG5cdFx0fTtcblx0fSxcblx0c2V0U2V0dGluZ3Mob2JqZWN0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfU0VUVElOR1MnLFxuXHRcdFx0cGF5bG9hZDoge29iamVjdH1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VNb2R1bGVTdGF0dXMobW9kdWxlU2x1ZywgdmFsdWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1RPR0dMRV9NT0RVTEUnLFxuXHRcdFx0cGF5bG9hZDoge21vZHVsZVNsdWc6ICdudl9wcm9fJyArIG1vZHVsZVNsdWcgKyAnX3N0YXR1cycsIHZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZU9wdGlvbihvcHRpb25TbHVnLCBvcHRpb25WYWx1ZSwgcHJvID0gdHJ1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnQ0hBTkdFX01PRFVMRV9PUFRJT04nLFxuXHRcdFx0cGF5bG9hZDoge29wdGlvblN0YXR1czogKHBybyA/ICdudl9wcm9fJyA6ICcnKSArIG9wdGlvblNsdWcsIG9wdGlvblZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZUxpY2Vuc2VUaWVyKHRpZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9MSUNFTlNFX1RJRVInLFxuXHRcdFx0cGF5bG9hZDoge3RpZXJ9XG5cdFx0fTtcblx0fSxcblx0c2V0VG9hc3QobWVzc2FnZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX1RPQVNUX01FU1NBR0UnLFxuXHRcdFx0cGF5bG9hZDogbWVzc2FnZVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuaW1wb3J0IHtnZXRUYWJIYXNofSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNldHRpbmdzOiB7fSxcblx0dGllcjogbmV2ZURhc2gucHJvID8gbmV2ZURhc2gubGljZW5zZS50aWVyIDogMCxcblx0dG9hc3Q6IG51bGwsXG5cdGN1cnJlbnRUYWI6ICdzdGFydCdcbn07XG5cbmNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5pZiAobnVsbCAhPT0gaGFzaCkge1xuXHRpbml0aWFsU3RhdGUuY3VycmVudFRhYiA9IGhhc2g7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1RBQic6XG5cdFx0XHRjb25zdCB7dGFifSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRUYWI6IHRhYlxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfU0VUVElOR1MnOlxuXHRcdFx0Y29uc3Qge29iamVjdH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczogb2JqZWN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge21vZHVsZVNsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W21vZHVsZVNsdWddOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJzpcblx0XHRcdGxldCB7b3B0aW9uU3RhdHVzLCBvcHRpb25WYWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFtvcHRpb25TdGF0dXNdOiBvcHRpb25WYWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9MSUNFTlNFX1RJRVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRpZXI6IGFjdGlvbi5wYXlsb2FkLnRpZXJcblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX1RPQVNUX01FU1NBR0UnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvYXN0OiBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRNb2R1bGVTdGF0dXM6IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1ZyArICdfc3RhdHVzJ10sXG5cdGdldE9wdGlvbjogKHN0YXRlLCBzbHVnICkgPT4gc3RhdGUuc2V0dGluZ3Nbc2x1Z10sXG5cdGdldFByb09wdGlvbjogKHN0YXRlLCBzbHVnICkgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1Z10sXG5cdGdldExpY2Vuc2VUaWVyOiAoc3RhdGUpID0+IHN0YXRlLnRpZXIsXG5cdGdldFRvYXN0OiAoc3RhdGUpID0+IHN0YXRlLnRvYXN0LFxuXHRnZXRUYWI6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFRhYlxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5pbXBvcnQgRnJlZVBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVBybyc7XG5cbmNvbnN0IGFkZFVybEhhc2ggPSAoaGFzaCkgPT4ge1xuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG59O1xuXG5jb25zdCBnZXRUYWJIYXNoID0gKCkgPT4ge1xuXHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG5cdGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRoYXNoID0gaGFzaC5zdWJzdHJpbmcoMSk7XG5cblx0aWYgKCEgT2JqZWN0LmtleXModGFicykuaW5jbHVkZXMoaGFzaCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufTtcblxuY29uc3QgdGFicyA9IHtcblx0J3N0YXJ0Jzoge2xhYmVsOiAnR2V0dGluZyBTdGFydGVkJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnQgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuXHQncGx1Z2lucyc6IHtsYWJlbDogJ1VzZWZ1bCBQbHVnaW5zJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8UGx1Z2lucy8+fSxcblx0J2hlbHAnOiB7bGFiZWw6ICdIZWxwICYgZG9jcycsIHJlbmRlcjogKHNldFRhYikgPT4gPEhlbHAgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuXHQnY2hhbmdlbG9nJzoge2xhYmVsOiAnQ2hhbmdlbG9nJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8Q2hhbmdlbG9nLz59LFxuXHQnc3RhcnRlci1zaXRlcyc6IHtsYWJlbDogJ1N0YXJ0ZXIgU2l0ZXMnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydGVyU2l0ZXMvPn0sXG5cdCdmcmVlLXBybyc6IHtsYWJlbDogJ0ZyZWUgdnMgUHJvJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8RnJlZVByby8+fVxufTtcblxuaWYgKG5ldmVEYXNoLnBybyB8fCBuZXZlRGFzaC5oYXNPbGRQcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6IG5ldmVEYXNoLnN0cmluZ3MucHJvVGFiVGl0bGUsIHJlbmRlcjogKHNldFRhYikgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuaWYgKG5ldmVEYXNoLndoaXRlTGFiZWwpIHtcblx0ZGVsZXRlICh0YWJzLmNoYW5nZWxvZyk7XG5cdGRlbGV0ZSAodGFicy5wbHVnaW5zKTtcblx0aWYgKG5ldmVEYXNoLndoaXRlTGFiZWwuaGlkZVN0YXJ0ZXJTaXRlcykge1xuXHRcdGRlbGV0ZSAodGFic1snc3RhcnRlci1zaXRlcyddKTtcblx0fVxufVxuXG5jb25zdCB1bnRyYWlsaW5nU2xhc2hJdCA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC9cXC8kLywgJycpO1xuY29uc3QgdHJhaWxpbmdTbGFzaEl0ID0gKHN0cikgPT4gdW50cmFpbGluZ1NsYXNoSXQoc3RyKSArICcvJztcblxuZXhwb3J0IHtcblx0YWRkVXJsSGFzaCxcblx0Z2V0VGFiSGFzaCxcblx0dHJhaWxpbmdTbGFzaEl0LFxuXHR0YWJzXG59O1xuIiwiY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcHRpb24gPSAob3B0aW9uLCB2YWx1ZSwgbW9kdWxlID0gZmFsc2UsIHBybyA9IHRydWUpID0+IHtcblx0b3B0aW9uID0gKHBybyA/ICdudl9wcm9fJyA6ICcnKSArIG9wdGlvbiArIChtb2R1bGUgPyAnX3N0YXR1cycgOiAnJyk7XG5cdGNvbnN0IG1vZGVsID0gbmV3IHdwLmFwaS5tb2RlbHMuU2V0dGluZ3Moe1xuXHRcdFtvcHRpb25dOiB2YWx1ZVxuXHR9KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRtb2RlbC5zYXZlKCkudGhlbigocikgPT4ge1xuXHRcdFx0aWYgKCEgciB8fCAhIHJbb3B0aW9uXSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmUoaXNWYWxpZChvcHRpb24sIHIpKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZCA9IChyb3V0ZSwgZGF0YSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IChyb3V0ZSwgc2ltcGxlID0gZmFsc2UsIHVzZU5vbmNlID0gdHJ1ZSkgPT4ge1xuXHRyZXR1cm4gcmVxdWVzdERhdGEocm91dGUsIHNpbXBsZSwge30sICdHRVQnLCB1c2VOb25jZSk7XG59O1xuXG5jb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jIChyb3V0ZSwgc2ltcGxlID0gZmFsc2UsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ1BPU1QnLCB1c2VOb25jZSA9IHRydWUpID0+IHtcblx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRtZXRob2Q6IG1ldGhvZCxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH1cblx0fTtcblxuXHRpZiAodXNlTm9uY2UpIHtcblx0XHRvcHRpb25zLmhlYWRlcnNbJ3gtd3Atbm9uY2UnXSA9IG5ldmVEYXNoLm5vbmNlO1xuXHR9XG5cblx0aWYgKCdQT1NUJyA9PT0gbWV0aG9kKSB7XG5cdFx0b3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdH1cblxuXHRyZXR1cm4gYXdhaXQgZmV0Y2gocm91dGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0cmV0dXJuIHNpbXBsZSA/IHJlc3BvbnNlIDogcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbmNvbnN0IGlzVmFsaWQgPSAob3B0aW9uLCBvcHRpb25zQXJyYXkpID0+IHtcblx0aWYgKCdudl9wcm9fdHlwZWtpdF9pZCcgPT09IG9wdGlvbikge1xuXHRcdGlmICghIG9wdGlvbnNBcnJheVsnbmV2ZV9wcm9fdHlwZWtpdF9kYXRhJ10pIHtcblx0XHRcdHJldHVybiB7bWVzc2FnZTogX18oJ1R5cGVraXQgUHJvamVjdCBJRCBpcyBpbnZhbGlkJywgJ25ldmUnKSwgc3VjY2VzczogZmFsc2V9O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4ge3N1Y2Nlc3M6IHRydWV9O1xufTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuL3Jlc3QnO1xuXG5leHBvcnQgY29uc3QgaW1wb3J0V2lkZ2V0cyA9IChkYXRhKSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW1wb3J0X3dpZGdldHMnLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRNb2RzID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbXBvcnRfdGhlbWVfbW9kcycsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbGxQbHVnaW5zID0gKHBsdWdpbkFycmF5KSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW5zdGFsbF9wbHVnaW5zJywgcGx1Z2luQXJyYXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydENvbnRlbnQgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2ltcG9ydF9jb250ZW50JywgZGF0YSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=