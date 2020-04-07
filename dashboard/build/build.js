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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









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

  return wp.element.createElement(Fragment, null, wp.element.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
    currentTab: currentTab,
    setTab: setTab
  }), wp.element.createElement("div", {
    className: "container content"
  }, wp.element.createElement("div", {
    className: "main"
  }, 'starter-sites' !== currentTab && wp.element.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_1__["default"], null), wp.element.createElement(_TabsContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentTab: currentTab,
    setTab: setTab
  })), 'starter-sites' !== currentTab && wp.element.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: currentTab
  })), toast && wp.element.createElement(_Snackbar__WEBPACK_IMPORTED_MODULE_5__["default"], null));
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
/* harmony import */ var _Utils_OnClickOutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/OnClickOutside */ "./src/Components/Utils/OnClickOutside.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dashicon = wp.components.Dashicon;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef,
    useEffect = _wp$element.useEffect;



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
  }, wp.element.createElement("h4", null, title), wp.element.createElement(_Utils_OnClickOutside__WEBPACK_IMPORTED_MODULE_0__["default"], {
    action: function action() {
      toggleForceTooltip(false);
    }
  }, " ", wp.element.createElement("a", {
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
  }, wp.element.createElement("p", null, description)))))), wp.element.createElement("td", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['indicator', {
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

  function renderOptionsAccordions() {
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
  }

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
/* harmony import */ var _Utils_OnClickOutside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/OnClickOutside */ "./src/Components/Utils/OnClickOutside.js");
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
    Dashicon = _wp$components.Dashicon;
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

  return wp.element.createElement("div", {
    className: "header-form"
  }, wp.element.createElement(_Utils_OnClickOutside__WEBPACK_IMPORTED_MODULE_0__["default"], {
    action: function action() {
      setOpen(false);
    }
  }, wp.element.createElement("div", {
    className: "ob-dropdown"
  }, wp.element.createElement(Button, {
    onClick: function onClick() {
      setOpen(true);
    },
    className: "select"
  }, wp.element.createElement("img", {
    className: "editor-icon",
    src: neveDash.assets + 'editor-icons/' + map[editor].icon,
    alt: __('Builder Logo', 'neve')
  }), wp.element.createElement("span", null, map[editor].niceName), wp.element.createElement(Dashicon, {
    size: 14,
    icon: open ? 'arrow-up-alt2' : 'arrow-down-alt2'
  })), open && wp.element.createElement("div", {
    className: "options"
  }, wp.element.createElement("ul", null, Object.keys(map).map(function (key) {
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
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
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
      currentSiteData = _ref.currentSiteData;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  var _useState3 = useState(9),
      _useState4 = _slicedToArray(_useState3, 2),
      maxShown = _useState4[0],
      setMaxShown = _useState4[1];

  function filterSites(sites) {
    Object.keys(sites).map(function (slug) {
      sites[slug].slug = slug;
    });
    sites = Object.values(sites);

    if (!searchQuery) {
      return sites;
    }

    var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_4__["default"](sites, {
      includeScore: true,
      keys: ['title', 'slug', 'keywords']
    });
    var search = fuse.search(searchQuery);
    return search.map(function (item) {
      return item.item;
    });
  }

  function getAllSites() {
    var sitesData = sites && sites[editor] ? filterSites(sites[editor]) : [];
    var upsellsData = upsells && upsells[editor] ? filterSites(upsells[editor]) : [];
    return [].concat(_toConsumableArray(sitesData), _toConsumableArray(upsellsData));
  }

  function renderSites() {
    var allData = getAllSites();
    return allData.slice(0, maxShown).map(function (site) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        upsell: site['in_pro'],
        data: site
      });
    });
  }

  function getSiteNav() {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (null === currentSiteData) {
      return null;
    }

    var allSites = getAllSites();
    var position = allSites.indexOf(currentSiteData);
    console.log(position);

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
  }

  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    className: "ob"
  }, wp.element.createElement("div", {
    className: "ob-head"
  }, wp.element.createElement("h2", null, __('Ready to use pre-built websites with 1-click installation', 'neve')), wp.element.createElement("p", null, __('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve'))), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement(_EditorSelector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onSearch: function onSearch(query) {
      setSearchQuery(query);
      setMaxShown(9);
    },
    query: searchQuery
  }), wp.element.createElement("div", {
    className: "ob-sites"
  }, (sites || upsells) && renderSites()), wp.element.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites,
      getUpsells = _select.getUpsells,
      getCurrentEditor = _select.getCurrentEditor,
      getPreviewStatus = _select.getPreviewStatus,
      getCurrentSite = _select.getCurrentSite;

  return {
    sites: getSites(),
    upsells: getUpsells(),
    editor: getCurrentEditor(),
    previewOpen: getPreviewStatus(),
    currentSiteData: getCurrentSite()
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
      setPreview = _ref.setPreview;
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
  }, siteData.in_pro ? wp.element.createElement(Button, {
    className: "upgrade",
    isLink: true,
    href: siteData.outbound_link
  }, __('Upgrade', 'neve')) : wp.element.createElement(Button, {
    className: "import",
    isPrimary: true,
    onClick: function onClick(e) {
      e.preventDefault();
      console.log('Open Modal');
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
      setPreviewStatus = _dispatch.setPreviewStatus;

  return {
    setSite: function setSite(data) {
      return setCurrentSite(data);
    },
    setPreview: function setPreview(status) {
      return setPreviewStatus(status);
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
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;

var StarterSiteCard = function StarterSiteCard(_ref) {
  var data = _ref.data,
      upsell = _ref.upsell,
      setSite = _ref.setSite,
      setPreview = _ref.setPreview;
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
      setPreviewStatus = _dispatch.setPreviewStatus;

  return {
    setSite: function setSite(data) {
      return setCurrentSite(data);
    },
    setPreview: function setPreview(status) {
      return setPreviewStatus(status);
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
  currentSite: null
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

function installPlugin(slug) {
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
}

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

/***/ "./src/Components/Utils/OnClickOutside.js":
/*!************************************************!*\
  !*** ./src/Components/Utils/OnClickOutside.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _wp$element = wp.element,
    useRef = _wp$element.useRef,
    useEffect = _wp$element.useEffect;

var useOutsideClick = function useOutsideClick(ref, callback) {
  useEffect(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

var OnClickOutside = function OnClickOutside(_ref) {
  var children = _ref.children,
      action = _ref.action;
  var wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, action);
  return wp.element.createElement("div", {
    ref: wrapperRef
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (OnClickOutside);

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

function isValid(option, optionsArray) {
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvUHJldmlld0ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvU3RhcnRlclNpdGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9JbnB1dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3B0aW9ucy9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGx1Z2luQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RhYnNDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RvYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1V0aWxzL09uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsImRhdGEiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY29tcG9zZSIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwiQXBwIiwic2V0U2V0dGluZ3MiLCJ0b2FzdCIsImN1cnJlbnRUYWIiLCJzZXRUYWIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldHRpbmdzIiwiYXBpIiwibG9hZFByb21pc2UiLCJ0aGVuIiwibW9kZWxzIiwiU2V0dGluZ3MiLCJmZXRjaCIsInIiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiQ2FyZCIsImljb24iLCJpY29uQWx0IiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWVzIiwiX18iLCJpMThuIiwiQ2hhbmdlbG9nIiwibmV2ZURhc2giLCJjaGFuZ2Vsb2ciLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJhc3NldHMiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaWQiLCJTdGFydCIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJzaXRlcyIsInNldFNpdGVzIiwic2V0VXBzZWxscyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXQiLCJvbmJvYXJkaW5nIiwicm9vdCIsInN1Y2Nlc3MiLCJyZW1vdGUiLCJ1cHNlbGwiLCJ1cHNlbGxzIiwiZ2V0U2l0ZXMiLCJ1c2VSZWYiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJmb3JjZVRvb2xUaXAiLCJ0b2dnbGVGb3JjZVRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiZ2V0VGFiSGFzaCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsImNoYW5nZVRpZXIiLCJsaWNlbnNlIiwicHJvQXBpIiwidmFsaWQiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzZXRWYWxpZCIsImV4cGlyYXRpb24iLCJzZXRFeHBpcmF0aW9uIiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0aWVyIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJjaGFuZ2VMaWNlbnNlVGllciIsIm5ld1RpZXIiLCJMb2FkaW5nIiwiQXJyYXkiLCJmcm9tIiwibm90aWZpY2F0aW9ucyIsIlRvZ2dsZUNvbnRyb2wiLCJNb2R1bGVDYXJkIiwiY2hhbmdlTW9kdWxlU3RhdHVzIiwiZ2V0TW9kdWxlU3RhdHVzIiwibmljZW5hbWUiLCJhdmFpbGFiaWxpdHlMZXZlbCIsIm9wdGlvbnMiLCJvcmRlciIsImRvY3VtZW50YXRpb24iLCJyZXF1aXJlZF9hY3Rpb25zIiwidXBncmFkZUxpbmtzIiwicmVuZGVyT3B0aW9uc0FjY29yZGlvbnMiLCJncm91cCIsIm9wdGlvblNsdWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VPcHRpb24iLCJ1cmwiLCJnZXRMaWNlbnNlVGllciIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsIkVkaXRvclNlbGVjdG9yIiwib25TZWFyY2giLCJlZGl0b3IiLCJzZXRDdXJyZW50RWRpdG9yIiwibmljZU5hbWUiLCJnZXRDdXJyZW50RWRpdG9yIiwiT25ib2FyZGluZyIsInByZXZpZXdPcGVuIiwiY3VycmVudFNpdGVEYXRhIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm1heFNob3duIiwic2V0TWF4U2hvd24iLCJmaWx0ZXJTaXRlcyIsInZhbHVlcyIsImZ1c2UiLCJGdXNlIiwiaW5jbHVkZVNjb3JlIiwic2VhcmNoIiwiZ2V0QWxsU2l0ZXMiLCJzaXRlc0RhdGEiLCJ1cHNlbGxzRGF0YSIsInJlbmRlclNpdGVzIiwiYWxsRGF0YSIsInNpdGUiLCJnZXRTaXRlTmF2IiwicHJldiIsImFsbFNpdGVzIiwicG9zaXRpb24iLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwid2lkdGgiLCJkaXNwbGF5IiwiZ2V0VXBzZWxscyIsImdldFByZXZpZXdTdGF0dXMiLCJnZXRDdXJyZW50U2l0ZSIsIlByZXZpZXdGcmFtZSIsIm5leHQiLCJzaXRlRGF0YSIsInNldFNpdGUiLCJzZXRQcmV2aWV3IiwiaW5fcHJvIiwib3V0Ym91bmRfbGluayIsInNldEN1cnJlbnRTaXRlIiwic2V0UHJldmlld1N0YXR1cyIsIlN0YXJ0ZXJTaXRlQ2FyZCIsInNjcmVlbnNob3QiLCJwYXlsb2FkIiwicHJldmlld1N0YXR1cyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnRTaXRlIiwic3RhdGUiLCJJbnB1dEZvcm0iLCJnZXRPcHRpb24iLCJzZXRWYWx1ZSIsImNoYW5nZVNldHRpbmciLCJjaGFuZ2VNb2R1bGVPcHRpb24iLCJUb2dnbGUiLCJiYW5uZXIiLCJuYW1lIiwiYXV0aG9yIiwic2V0QWN0aW9uIiwic3RyaW5nTWFwIiwicHJvZ3Jlc3MiLCJpbnN0YWxsUGx1Z2luIiwib2siLCJhbGlnbkl0ZW1zIiwiZXJyIiwiU2lkZWJhciIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwidXNlT3V0c2lkZUNsaWNrIiwicmVmIiwiY2FsbGJhY2siLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiT25DbGlja091dHNpZGUiLCJ3cmFwcGVyUmVmIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwib25ib2FyZGluZ1JlZHVjZXIiLCJvbmJvYXJkaW5nQWN0aW9ucyIsIm9uYm9hcmRpbmdTZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGVTbHVnIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TdGF0dXMiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsImlzVmFsaWQiLCJvcHRpb24iLCJvcHRpb25zQXJyYXkiLCJtb2R1bGUiLCJtb2RlbCIsInNhdmUiLCJyb3V0ZSIsInNpbXBsZSIsInJlcXVlc3REYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsIm5vbmNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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a0M7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSw0SEFBNEg7O0FBRTVIO0FBQ0Esa0xBQWtMOztBQUVsTDtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBLE9BQU87OztBQUdQO0FBQ0EsOExBQThMLFNBQVM7QUFDdk07QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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SyxPQUFSLENBQUwsQ0FBc0JsSSxJQUF0QixDQUEyQixVQUFDK0csUUFBRCxFQUFjO0FBQ3JELHFCQUFPc0wsTUFBTSxHQUFHdEwsUUFBSCxHQUFjQSxRQUFRLENBQUM2TCxJQUFULEVBQTNCO0FBQ0EsYUFGWSxDQWRNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWE4sV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQixDOzs7Ozs7Ozs7OztBQ25DQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiIuL2J1aWxkL2J1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIEZ1c2UuanMgdjUuMS4wIC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMCBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gYml0YXBTY29yZShcbiAgcGF0dGVybixcbiAgeyBlcnJvcnMgPSAwLCBjdXJyZW50TG9jYXRpb24gPSAwLCBleHBlY3RlZExvY2F0aW9uID0gMCwgZGlzdGFuY2UgPSAxMDAgfVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG4gIGNvbnN0IHByb3hpbWl0eSA9IE1hdGguYWJzKGV4cGVjdGVkTG9jYXRpb24gLSBjdXJyZW50TG9jYXRpb24pO1xuXG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3lcbiAgfVxuXG4gIHJldHVybiBhY2N1cmFjeSArIHByb3hpbWl0eSAvIGRpc3RhbmNlXG59XG5cbmZ1bmN0aW9uIG1hdGNoZWRJbmRpY2VkKG1hdGNobWFzayA9IFtdLCBtaW5NYXRjaENoYXJMZW5ndGggPSAxKSB7XG4gIGxldCBtYXRjaGVkSW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIG1hdGNoZWRJbmRpY2VzLnB1c2goW3N0YXJ0LCBpIC0gMV0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRJbmRpY2VzXG59XG5cbmZ1bmN0aW9uIGJpdGFwU2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IDAsXG4gICAgZGlzdGFuY2UgPSAxMDAsXG4gICAgdGhyZXNob2xkID0gMC42LFxuICAgIGZpbmRBbGxNYXRjaGVzID0gZmFsc2UsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IGZhbHNlXG4gIH1cbikge1xuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIGNvbnN0IHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuICBjb25zdCBleHBlY3RlZExvY2F0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9jYXRpb24sIHRleHRMZW4pKTtcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcbiAgbGV0IGJlc3RMb2NhdGlvbiA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBleHBlY3RlZExvY2F0aW9uKTtcblxuICAvLyBhIG1hc2sgb2YgdGhlIG1hdGNoZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dExlbjsgaSArPSAxKSB7XG4gICAgbWF0Y2hNYXNrW2ldID0gMDtcbiAgfVxuXG4gIGlmIChiZXN0TG9jYXRpb24gIT09IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IDAsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGJlc3RMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZVxuICAgIH0pO1xuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG5cbiAgICAvLyBXaGF0IGFib3V0IGluIHRoZSBvdGhlciBkaXJlY3Rpb24/IChzcGVlZCB1cClcbiAgICBiZXN0TG9jYXRpb24gPSB0ZXh0Lmxhc3RJbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24gKyBwYXR0ZXJuTGVuKTtcblxuICAgIGlmIChiZXN0TG9jYXRpb24gIT09IC0xKSB7XG4gICAgICBsZXQgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiAwLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGJlc3RMb2NhdGlvbixcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2VcbiAgICAgIH0pO1xuICAgICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiA8PSAzMSA/IHBhdHRlcm5MZW4gLSAxIDogMzApO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG5cbiAgICAgIGJpbk1pZCA9IE1hdGguZmxvb3IoKGJpbk1heCAtIGJpbk1pbikgLyAyICsgYmluTWluKTtcbiAgICB9XG5cbiAgICAvLyBVc2UgdGhlIHJlc3VsdCBmcm9tIHRoaXMgaXRlcmF0aW9uIGFzIHRoZSBtYXhpbXVtIGZvciB0aGUgbmV4dC5cbiAgICBiaW5NYXggPSBiaW5NaWQ7XG5cbiAgICBsZXQgc3RhcnQgPSBNYXRoLm1heCgxLCBleHBlY3RlZExvY2F0aW9uIC0gYmluTWlkICsgMSk7XG4gICAgbGV0IGZpbmlzaCA9IGZpbmRBbGxNYXRjaGVzXG4gICAgICA/IHRleHRMZW5cbiAgICAgIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuXG4gICAgYml0QXJyW2ZpbmlzaCArIDFdID0gKDEgPDwgaSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaiA9IGZpbmlzaDsgaiA+PSBzdGFydDsgaiAtPSAxKSB7XG4gICAgICBsZXQgY3VycmVudExvY2F0aW9uID0gaiAtIDE7XG4gICAgICBsZXQgY2hhck1hdGNoID0gcGF0dGVybkFscGhhYmV0W3RleHQuY2hhckF0KGN1cnJlbnRMb2NhdGlvbildO1xuXG4gICAgICBpZiAoY2hhck1hdGNoKSB7XG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIGJpdEFycltqXSB8PVxuICAgICAgICAgICgobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxKSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2VcbiAgICB9KTtcblxuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogIWZpbmFsU2NvcmUgPyAwLjAwMSA6IGZpbmFsU2NvcmVcbiAgfTtcblxuICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICByZXN1bHQubWF0Y2hlZEluZGljZXMgPSBtYXRjaGVkSW5kaWNlZChtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG4gIGxldCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gPSAwO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1hc2tbcGF0dGVybi5jaGFyQXQoaSldIHw9IDEgPDwgKGxlbiAtIGkgLSAxKTtcbiAgfVxuXG4gIHJldHVybiBtYXNrXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgICAgIGxvY2F0aW9uID0gMCxcbiAgICAgIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgICAgIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAgICAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gICAgICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgICAgIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICAgICAgZGlzdGFuY2UgPSAxMDAsXG4gICAgICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgICAgIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gICAgICB0aHJlc2hvbGQgPSAwLjYsXG4gICAgICAvLyBJbmRpY2F0ZXMgd2hldGhlciBjb21wYXJpc29ucyBzaG91bGQgYmUgY2FzZSBzZW5zaXRpdmUuXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBmYWxzZSxcbiAgICAgIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gICAgICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gZmFsc2UsXG4gICAgICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEsXG5cbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gZmFsc2VcbiAgICB9XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoXG4gICAgfTtcblxuICAgIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7TUFYX0JJVFN9LmApXG4gICAgfVxuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnBhdHRlcm5BbHBoYWJldCA9IHBhdHRlcm5BbHBoYWJldCh0aGlzLnBhdHRlcm4pO1xuICB9XG5cbiAgc2VhcmNoSW4odmFsdWUpIHtcbiAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoSW5TdHJpbmcodGV4dClcbiAgfVxuXG4gIHNlYXJjaEluU3RyaW5nKHRleHQpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSwgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICByZXN1bHQubWF0Y2hlZEluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gYml0YXBTZWFyY2godGV4dCwgdGhpcy5wYXR0ZXJuLCB0aGlzLnBhdHRlcm5BbHBoYWJldCwge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaW5jbHVkZU1hdGNoZXNcbiAgICB9KVxuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuLy8gTWF0Y2ggdHlwZTogZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGluY2x1ZGUgYGZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSBcIidcIjtcblxuY29uc3Qgc2FuaXRpemUgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplKHBhdHRlcm4pO1xuICBjb25zdCBpbmRleCA9IHRleHQuaW5kZXhPZihzYW5pdGl6ZWRQYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IGluZGV4ID4gLTE7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBleGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm4sXG4gIHNhbml0aXplLFxuICBtYXRjaFxufTtcblxuLy8gVG9rZW46ICFmaXJlXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgZmlyZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDEgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnO1xuXG5jb25zdCBzYW5pdGl6ZSQxID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCQxID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDEocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmluZGV4T2Yoc2FuaXRpemVkUGF0dGVybikgPT09IC0xO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgaW52ZXJzZUV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDEsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQxLFxuICBtYXRjaDogbWF0Y2gkMVxufTtcblxuLy8gVG9rZW46IF5maWxlXG4vLyBNYXRjaCB0eXBlOiBwcmVmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQyID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09ICdeJztcblxuY29uc3Qgc2FuaXRpemUkMiA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2gkMiA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQyKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5zdGFydHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgcHJlZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMixcbiAgc2FuaXRpemU6IHNhbml0aXplJDIsXG4gIG1hdGNoOiBtYXRjaCQyXG59O1xuXG4vLyBUb2tlbjogIV5maXJlXG4vLyBNYXRjaCB0eXBlOiBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGZpcmVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQzID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uY2hhckF0KDApID09ICchJyAmJiBwYXR0ZXJuLmNoYXJBdCgxKSA9PSAnXic7XG5cbmNvbnN0IHNhbml0aXplJDMgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMik7XG5cbmNvbnN0IG1hdGNoJDMgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMyhwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LnN0YXJ0c1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlUHJlZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMyxcbiAgc2FuaXRpemU6IHNhbml0aXplJDMsXG4gIG1hdGNoOiBtYXRjaCQzXG59O1xuXG4vLyBUb2tlbjogLmZpbGUkXG4vLyBNYXRjaCB0eXBlOiBzdWZmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDQgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQocGF0dGVybi5sZW5ndGggLSAxKSA9PSAnJCc7XG5cbmNvbnN0IHNhbml0aXplJDQgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMCwgcGF0dGVybi5sZW5ndGggLSAxKTtcblxuY29uc3QgbWF0Y2gkNCA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQ0KHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gdGV4dC5lbmRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIHN1ZmZpeEV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybjogaXNGb3JQYXR0ZXJuJDQsXG4gIHNhbml0aXplOiBzYW5pdGl6ZSQ0LFxuICBtYXRjaDogbWF0Y2gkNFxufTtcblxuLy8gVG9rZW46ICEuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kNSA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnIScgJiYgcGF0dGVybi5jaGFyQXQocGF0dGVybi5sZW5ndGggLSAxKSA9PSAnJCc7XG5cbmNvbnN0IHNhbml0aXplJDUgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHJpbmcoMSwgcGF0dGVybi5sZW5ndGggLSAxKTtcblxuY29uc3QgbWF0Y2gkNSA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQ1KHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlU3VmZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kNSxcbiAgc2FuaXRpemU6IHNhbml0aXplJDUsXG4gIG1hdGNoOiBtYXRjaCQ1XG59O1xuXG5jb25zdCBJTkZJTklUWSA9IDEgLyAwO1xuXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PlxuICAhQXJyYXkuaXNBcnJheVxuICAgID8gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbi8vIEFkYXB0ZWQgZnJvbTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvZjRjYTM5NmE3OTY0MzU0MjJiZDRmZDQxZmFkYmQyMjVlZGRkZjE3NS8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBiYXNlVG9TdHJpbmcgPSAodmFsdWUpID0+IHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufTtcblxuY29uc3QgdG9TdHJpbmcgPSAodmFsdWUpID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpKTtcblxuY29uc3QgaXNTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG5cbmNvbnN0IGlzTnVtYmVyID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuXG5jb25zdCBpc0RlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG5cbi8vIFJldHVybiBhIDJEIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeSwgZm9yIHNpbXBsZXIgcGFyc2luZy5cbi8vIEV4YW1wbGU6XG4vLyBcIl5jb3JlIGdvJCB8IHJiJCB8IHB5JCB4eSRcIiA9PiBbW1wiXmNvcmVcIiwgXCJnbyRcIl0sIFtcInJiJFwiXSwgW1wicHkkXCIsIFwieHkkXCJdXVxuY29uc3QgcXVlcnlmeSA9IChwYXR0ZXJuKSA9PlxuICBwYXR0ZXJuLnNwbGl0KCd8JykubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKS5zcGxpdCgvICsvZykpO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IG1hdGNoIGBqc2NyaXB0YCAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBBIDxwYXR0ZXJuPjo8Qml0YXBTZWFyY2g+IGtleS12YWx1ZSBwYWlyIGZvciBvcHRpbWl6aW5nIHNlYXJjaGluZ1xuICAgIHRoaXMuX2Z1enp5Q2FjaGUgPSB7fTtcblxuICAgIGlmIChpc1N0cmluZyhwYXR0ZXJuKSAmJiBwYXR0ZXJuLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5ZnkodGhpcy5wYXR0ZXJuKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcblxuICAgIGlmICghdGhpcy5xdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRleHQgPSB2YWx1ZS4kO1xuXG4gICAgdGV4dCA9IHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG1hdGNoRm91bmQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHF1ZXJ5W2ldO1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBtYXRjaEZvdW5kID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBwYXJ0cy5sZW5ndGg7IGogPCBwTGVuOyBqICs9IDEpIHtcbiAgICAgICAgbGV0IHRva2VuID0gcGFydHNbal07XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuX3NlYXJjaCh0b2tlbiwgdGV4dCk7XG4gICAgICAgIGlmICghcmVzdWx0LmlzTWF0Y2gpIHtcbiAgICAgICAgICAvLyBBTkQgY29uZGl0aW9uLCBzaG9ydC1jaXJjdWl0IGFuZCBtb3ZlIG9uIHRvIG5leHQgcGFydFxuICAgICAgICAgIG1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobWF0Y2hGb3VuZCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfVxuICB9XG5cbiAgX3NlYXJjaChwYXR0ZXJuLCB0ZXh0KSB7XG4gICAgaWYgKGV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gZXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAocHJlZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBwcmVmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlUHJlZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlUHJlZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKHN1ZmZpeEV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gc3VmZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoaW52ZXJzZUV4YWN0TWF0Y2guaXNGb3JQYXR0ZXJuKHBhdHRlcm4pKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZUV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNlYXJjaGVyID0gdGhpcy5fZnV6enlDYWNoZVtwYXR0ZXJuXTtcbiAgICAgIGlmICghc2VhcmNoZXIpIHtcbiAgICAgICAgc2VhcmNoZXIgPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZnV6enlDYWNoZVtwYXR0ZXJuXSA9IHNlYXJjaGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlYXJjaGVyLnNlYXJjaEluU3RyaW5nKHRleHQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IE5HUkFNX0xFTiA9IDM7XG5cbmZ1bmN0aW9uIG5ncmFtKFxuICB0ZXh0LFxuICB7IG4gPSBOR1JBTV9MRU4sIHBhZCA9IHRydWUsIHNvcnQgPSBmYWxzZSB9XG4pIHtcbiAgbGV0IG5HcmFtcyA9IFtdO1xuXG4gIGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuR3JhbXNcbiAgfVxuXG4gIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gIGlmIChwYWQpIHtcbiAgICB0ZXh0ID0gYCAke3RleHR9IGA7XG4gIH1cblxuICBsZXQgaW5kZXggPSB0ZXh0Lmxlbmd0aCAtIG4gKyAxO1xuICBpZiAoaW5kZXggPCAxKSB7XG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBuR3JhbXNbaW5kZXhdID0gdGV4dC5zdWJzdHIoaW5kZXgsIG4pO1xuICB9XG5cbiAgaWYgKHNvcnQpIHtcbiAgICBuR3JhbXMuc29ydCgoYSwgYikgPT4gKGEgPT0gYiA/IDAgOiBhIDwgYiA/IC0xIDogMSkpO1xuICB9XG5cbiAgcmV0dXJuIG5HcmFtc1xufVxuXG4vLyBBc3N1bWVzIGFycmF5cyBhcmUgc29ydGVkXG5mdW5jdGlvbiB1bmlvbiAoYXJyMSwgYXJyMikge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXTtcbiAgICBsZXQgaXRlbTIgPSBhcnIyW2pdO1xuXG4gICAgaWYgKGl0ZW0xIDwgaXRlbTIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0xKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0yIDwgaXRlbTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0yKTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnIxW2ldKTtcbiAgICBpICs9IDE7XG4gIH1cblxuICB3aGlsZSAoaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnB1c2goYXJyMltqXSk7XG4gICAgaiArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBBc3N1bWVzIGFycmF5cyBhcmUgc29ydGVkXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb24oYXJyMSwgYXJyMikge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuXG4gIHdoaWxlIChpIDwgYXJyMS5sZW5ndGggJiYgaiA8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGl0ZW0xID0gYXJyMVtpXTtcbiAgICBsZXQgaXRlbTIgPSBhcnIyW2pdO1xuXG4gICAgaWYgKGl0ZW0xID09IGl0ZW0yKSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMSk7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMSA8IGl0ZW0yKSB7XG4gICAgICBpICs9IDE7XG4gICAgfSBlbHNlIGlmIChpdGVtMSA+IGl0ZW0yKSB7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGphY2NhcmREaXN0YW5jZShuR3JhbTEsIG5HcmFtMikge1xuICBsZXQgbkdyYW1VbmlvbiA9IHVuaW9uKG5HcmFtMSwgbkdyYW0yKTtcbiAgbGV0IG5HcmFtSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uKG5HcmFtMSwgbkdyYW0yKTtcblxuICByZXR1cm4gMSAtIG5HcmFtSW50ZXJzZWN0aW9uLmxlbmd0aCAvIG5HcmFtVW5pb24ubGVuZ3RoXG59XG5cbmNsYXNzIE5HcmFtU2VhcmNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybiwgb3B0aW9ucyA9IHsgdGhyZXNob2xkOiAwLjYgfSkge1xuICAgIC8vIENyZWF0ZSB0aGUgbmdyYW0sIGFuZCBzb3J0IGl0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnBhdHRlcm5OZ3JhbSA9IG5ncmFtKHBhdHRlcm4sIHsgc29ydDogdHJ1ZSB9KTtcbiAgfVxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGxldCB0ZXh0TmdyYW0gPSB2YWx1ZS5uZztcbiAgICBpZiAoIXRleHROZ3JhbSkge1xuICAgICAgdGV4dE5ncmFtID0gbmdyYW0odmFsdWUuJCwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgdmFsdWUubmcgPSB0ZXh0TmdyYW07XG4gICAgfVxuXG4gICAgbGV0IGphY2FyZFJlc3VsdCA9IGphY2NhcmREaXN0YW5jZSh0aGlzLnBhdHRlcm5OZ3JhbSwgdGV4dE5ncmFtKTtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBqYWNhcmRSZXN1bHQgPCB0aGlzLm9wdGlvbnMudGhyZXNob2xkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gamFjYXJkUmVzdWx0IDogMSxcbiAgICAgIGlzTWF0Y2hcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KG9iaiwgcGF0aCkge1xuICBsZXQgbGlzdCA9IFtdO1xuICBsZXQgYXJyID0gZmFsc2U7XG5cbiAgY29uc3QgX2dldCA9IChvYmosIHBhdGgpID0+IHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBnb3R0ZW4gdG8gdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRvdEluZGV4ID0gcGF0aC5pbmRleE9mKCcuJyk7XG5cbiAgICAgIGxldCBrZXkgPSBwYXRoO1xuICAgICAgbGV0IHJlbWFpbmluZyA9IG51bGw7XG5cbiAgICAgIGlmIChkb3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAga2V5ID0gcGF0aC5zbGljZSgwLCBkb3RJbmRleCk7XG4gICAgICAgIHJlbWFpbmluZyA9IHBhdGguc2xpY2UoZG90SW5kZXggKyAxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCFyZW1haW5pbmcgJiYgKGlzU3RyaW5nKHZhbHVlKSB8fCBpc051bWJlcih2YWx1ZSkpKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBhcnIgPSB0cnVlO1xuICAgICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgX2dldCh2YWx1ZVtpXSwgcmVtYWluaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVtYWluaW5nKSB7XG4gICAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgICAgX2dldCh2YWx1ZSwgcmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfZ2V0KG9iaiwgcGF0aCk7XG5cbiAgaWYgKGFycikge1xuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICByZXR1cm4gbGlzdFswXVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChcbiAga2V5cyxcbiAgbGlzdCxcbiAgeyBnZXRGbiA9IGdldCwgbmdyYW1zID0gZmFsc2UgfSA9IHt9XG4pIHtcbiAgbGV0IGluZGV4ZWRMaXN0ID0gW107XG5cbiAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gIGlmIChpc1N0cmluZyhsaXN0WzBdKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBsaXN0W2ldO1xuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAvLyAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJlY29yZCA9IHtcbiAgICAgICAgICAkOiB2YWx1ZSxcbiAgICAgICAgICBpZHg6IGlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgcmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ZWRMaXN0LnB1c2gocmVjb3JkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgY29uc3Qga2V5c0xlbiA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGxldCBpdGVtID0gbGlzdFtpXTtcblxuICAgICAgbGV0IHJlY29yZCA9IHsgaWR4OiBpLCAkOiB7fSB9O1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXNMZW47IGogKz0gMSkge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgbGV0IHZhbHVlID0gZ2V0Rm4oaXRlbSwga2V5KTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgICBjb25zdCBzdGFjayA9IFt7IGFycmF5SW5kZXg6IC0xLCB2YWx1ZSB9XTtcblxuICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXJyYXlJbmRleCwgdmFsdWUgfSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgICAvLyAgIHYgPSB2LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7ICQ6IHZhbHVlLCBpZHg6IGFycmF5SW5kZXggfTtcblxuICAgICAgICAgICAgICBpZiAobmdyYW1zKSB7XG4gICAgICAgICAgICAgICAgc3ViUmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXJyTGVuID0gdmFsdWUubGVuZ3RoOyBrIDwgYXJyTGVuOyBrICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGFycmF5SW5kZXg6IGssXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVba11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWNvcmQuJFtrZXldID0gc3ViUmVjb3JkcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICAgIC8vICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUgfTtcblxuICAgICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICAgIHN1YlJlY29yZC5uZyA9IG5ncmFtKHZhbHVlLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVjb3JkLiRba2V5XSA9IHN1YlJlY29yZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbmRleGVkTGlzdC5wdXNoKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4ZWRMaXN0XG59XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICB0aGlzLl9rZXlOYW1lcyA9IFtdO1xuICAgIHRoaXMuX2xlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleVxuICAgIGlmIChrZXlzLmxlbmd0aCAmJiBpc1N0cmluZyhrZXlzWzBdKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB0aGlzLl9rZXlzW2tleV0gPSB7XG4gICAgICAgICAgd2VpZ2h0OiAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2tleU5hbWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcIm5hbWVcIiBwcm9wZXJ0eSBpbiBrZXkgb2JqZWN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleU5hbWUgPSBrZXkubmFtZTtcbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXlOYW1lKTtcblxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrZXksICd3ZWlnaHQnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBcIndlaWdodFwiIHByb3BlcnR5IGluIGtleSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5LndlaWdodDtcblxuICAgICAgICBpZiAod2VpZ2h0IDw9IDAgfHwgd2VpZ2h0ID49IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnXCJ3ZWlnaHRcIiBwcm9wZXJ0eSBpbiBrZXkgbXVzdCBiZSBpbiB0aGUgcmFuZ2Ugb2YgKDAsIDEpJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tleXNba2V5TmFtZV0gPSB7XG4gICAgICAgICAgd2VpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgdG90YWxXZWlnaHQgKz0gd2VpZ2h0O1xuICAgICAgfVxuXG4gICAgICAvLyBOb3JtYWxpemUgd2VpZ2h0cyBzbyB0aGF0IHRoZWlyIHN1bSBpcyBlcXVhbCB0byAxXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleU5hbWUgPSB0aGlzLl9rZXlOYW1lc1tpXTtcbiAgICAgICAgY29uc3Qga2V5V2VpZ2h0ID0gdGhpcy5fa2V5c1trZXlOYW1lXS53ZWlnaHQ7XG4gICAgICAgIHRoaXMuX2tleXNba2V5TmFtZV0ud2VpZ2h0ID0ga2V5V2VpZ2h0IC8gdG90YWxXZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldChrZXksIG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldID8gdGhpcy5fa2V5c1trZXldW25hbWVdIDogLTFcbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlOYW1lc1xuICB9XG4gIGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGhcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWF0Y2hlcyhyZXN1bHQsIGRhdGEpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICBkYXRhLm1hdGNoZXMgPSBbXTtcblxuICBpZiAoIWlzRGVmaW5lZChtYXRjaGVzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG1hdGNoZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzW2ldO1xuXG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgbWF0Y2guaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXM6IG1hdGNoLmluZGljZXMsXG4gICAgICB2YWx1ZTogbWF0Y2gudmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIGFsZ29yaXRobSBjb250aW51ZXMgc2VhcmNoaW5nIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IGV2ZW4gaWYgYSBwZXJmZWN0XG4gIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgc2VhcmNoZWQuIFRoaXMgYWxzbyBzdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcy5cbiAga2V5czogW10sXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXG4gIC8vIFdoZXRoZXIgdG8gc29ydCB0aGUgcmVzdWx0IGxpc3QsIGJ5IHNjb3JlXG4gIHNob3VsZFNvcnQ6IHRydWUsXG4gIC8vIERlZmF1bHQgc29ydCBmdW5jdGlvblxuICBzb3J0Rm46IChhLCBiKSA9PiBhLnNjb3JlIC0gYi5zY29yZVxufTtcblxuY29uc3QgRnV6enlPcHRpb25zID0ge1xuICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICBsb2NhdGlvbjogMCxcbiAgLy8gQXQgd2hhdCBwb2ludCBkb2VzIHRoZSBtYXRjaCBhbGdvcml0aG0gZ2l2ZSB1cC4gQSB0aHJlc2hvbGQgb2YgJzAuMCcgcmVxdWlyZXMgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIChvZiBib3RoIGxldHRlcnMgYW5kIGxvY2F0aW9uKSwgYSB0aHJlc2hvbGQgb2YgJzEuMCcgd291bGQgbWF0Y2ggYW55dGhpbmcuXG4gIHRocmVzaG9sZDogMC42LFxuICAvLyBEZXRlcm1pbmVzIGhvdyBjbG9zZSB0aGUgbWF0Y2ggbXVzdCBiZSB0byB0aGUgZnV6enkgbG9jYXRpb24gKHNwZWNpZmllZCBhYm92ZSkuXG4gIC8vIEFuIGV4YWN0IGxldHRlciBtYXRjaCB3aGljaCBpcyAnZGlzdGFuY2UnIGNoYXJhY3RlcnMgYXdheSBmcm9tIHRoZSBmdXp6eSBsb2NhdGlvblxuICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgLy8gdGhlIGV4YWN0IGxvY2F0aW9uIHNwZWNpZmllZCwgYSB0aHJlc2hvbGQgb2YgJzEwMDAnIHdvdWxkIHJlcXVpcmUgYSBwZXJmZWN0IG1hdGNoXG4gIC8vIHRvIGJlIHdpdGhpbiA4MDAgY2hhcmFjdGVycyBvZiB0aGUgZnV6enkgbG9jYXRpb24gdG8gYmUgZm91bmQgdXNpbmcgYSAwLjggdGhyZXNob2xkLlxuICBkaXN0YW5jZTogMTAwXG59O1xuXG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIEVuYWJsZWQgZXh0ZW5kZWQtc2VhcmNoaW5nXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gVGhlIGdldCBmdW5jdGlvbiB0byB1c2Ugd2hlbiBmZXRjaGluZyBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICBnZXRGbjogZ2V0XG59O1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufTtcblxuY2xhc3MgRnVzZSB7XG4gIGNvbnN0cnVjdG9yKGxpc3QsIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucywgaW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIC8vIGBjYXNlU2Vuc2l0aXZlYCBpcyBkZXByZWNhdGVkLCB1c2UgYGlzQ2FzZVNlbnNpdGl2ZWAgaW5zdGVhZFxuICAgIHRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmUgPSBvcHRpb25zLmNhc2VTZW5zaXRpdmU7XG4gICAgZGVsZXRlIHRoaXMub3B0aW9ucy5jYXNlU2Vuc2l0aXZlO1xuXG4gICAgdGhpcy5fcHJvY2Vzc0tleXModGhpcy5vcHRpb25zLmtleXMpO1xuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihsaXN0LCBpbmRleCk7XG4gIH1cblxuICBzZXRDb2xsZWN0aW9uKGxpc3QsIGluZGV4ID0gbnVsbCkge1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5saXN0SXNTdHJpbmdBcnJheSA9IGlzU3RyaW5nKGxpc3RbMF0pO1xuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRJbmRleCh0aGlzLl9jcmVhdGVJbmRleCgpKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmRleChsaXN0SW5kZXgpIHtcbiAgICB0aGlzLl9pbmRleGVkTGlzdCA9IGxpc3RJbmRleDtcbiAgfVxuXG4gIF9wcm9jZXNzS2V5cyhrZXlzKSB7XG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUoa2V5cyk7XG4gIH1cblxuICBfY3JlYXRlSW5kZXgoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUluZGV4KHRoaXMuX2tleVN0b3JlLmtleXMoKSwgdGhpcy5saXN0LCB7XG4gICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuXG4gICAgfSlcbiAgfVxuXG4gIHNlYXJjaChwYXR0ZXJuLCBvcHRzID0geyBsaW1pdDogZmFsc2UgfSkge1xuICAgIGNvbnN0IHsgdXNlRXh0ZW5kZWRTZWFyY2gsIHNob3VsZFNvcnQgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBzZWFyY2hlciA9IG51bGw7XG5cbiAgICBpZiAodXNlRXh0ZW5kZWRTZWFyY2gpIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IEV4dGVuZGVkU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuLmxlbmd0aCA+IE1BWF9CSVRTKSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBOR3JhbVNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWFyY2hlciA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gdGhpcy5fc2VhcmNoVXNpbmcoc2VhcmNoZXIpO1xuXG4gICAgdGhpcy5fY29tcHV0ZVNjb3JlKHJlc3VsdHMpO1xuXG4gICAgaWYgKHNob3VsZFNvcnQpIHtcbiAgICAgIHRoaXMuX3NvcnQocmVzdWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubGltaXQgJiYgaXNOdW1iZXIob3B0cy5saW1pdCkpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG9wdHMubGltaXQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQocmVzdWx0cylcbiAgfVxuXG4gIF9zZWFyY2hVc2luZyhzZWFyY2hlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLl9pbmRleGVkTGlzdDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKHRoaXMubGlzdElzU3RyaW5nQXJyYXkpIHtcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGxpc3RcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxpc3RbaV07XG4gICAgICAgIGxldCB7ICQ6IHRleHQsIGlkeCB9ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKHZhbHVlKTtcblxuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIHZhbHVlOiB0ZXh0IH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW21hdGNoXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICBjb25zdCBrZXlOYW1lcyA9IHRoaXMuX2tleVN0b3JlLmtleXMoKTtcbiAgICAgIGNvbnN0IGtleXNMZW4gPSB0aGlzLl9rZXlTdG9yZS5jb3VudCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBsZXQgeyAkOiBpdGVtLCBpZHggfSA9IGxpc3RbaV07XG5cbiAgICAgICAgaWYgKCFpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGtleU5hbWVzW2pdO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IGl0ZW1ba2V5XTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGsgPCBsZW47IGsgKz0gMSkge1xuICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IHZhbHVlW2tdO1xuICAgICAgICAgICAgICBsZXQgdGV4dCA9IGFyckl0ZW0uJDtcbiAgICAgICAgICAgICAgbGV0IGlkeCA9IGFyckl0ZW0uaWR4O1xuXG4gICAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbihhcnJJdGVtKTtcblxuICAgICAgICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIGlkeCB9O1xuXG4gICAgICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG4gICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4odmFsdWUpO1xuXG4gICAgICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlIH0gPSBzZWFyY2hSZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSB7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0IH07XG5cbiAgICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9jb21wdXRlU2NvcmUocmVzdWx0cykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHJlc3VsdC5tYXRjaGVzO1xuICAgICAgY29uc3Qgc2NvcmVMZW4gPSBtYXRjaGVzLmxlbmd0aDtcblxuICAgICAgbGV0IHRvdGFsV2VpZ2h0ZWRTY29yZSA9IDE7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2NvcmVMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBpdGVtID0gbWF0Y2hlc1tqXTtcbiAgICAgICAgY29uc3Qga2V5ID0gaXRlbS5rZXk7XG4gICAgICAgIGNvbnN0IGtleVdlaWdodCA9IHRoaXMuX2tleVN0b3JlLmdldChrZXksICd3ZWlnaHQnKTtcbiAgICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5V2VpZ2h0ID4gLTEgPyBrZXlXZWlnaHQgOiAxO1xuICAgICAgICBjb25zdCBzY29yZSA9XG4gICAgICAgICAgaXRlbS5zY29yZSA9PT0gMCAmJiBrZXlXZWlnaHQgPiAtMSA/IE51bWJlci5FUFNJTE9OIDogaXRlbS5zY29yZTtcblxuICAgICAgICB0b3RhbFdlaWdodGVkU2NvcmUgKj0gTWF0aC5wb3coc2NvcmUsIHdlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsV2VpZ2h0ZWRTY29yZTtcbiAgICB9XG4gIH1cblxuICBfc29ydChyZXN1bHRzKSB7XG4gICAgcmVzdWx0cy5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pO1xuICB9XG5cbiAgX2Zvcm1hdChyZXN1bHRzKSB7XG4gICAgY29uc3QgZmluYWxPdXRwdXQgPSBbXTtcblxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMsIGluY2x1ZGVTY29yZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgICBpZiAoaW5jbHVkZVNjb3JlKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1TY29yZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0cy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGl0ZW06IHRoaXMubGlzdFtpZHhdLFxuICAgICAgICByZWZJbmRleDogaWR4XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdHJhbnNmb3JtZXJzLmxlbmd0aDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZXJzW2pdKHJlc3VsdCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmluYWxPdXRwdXQucHVzaChkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmluYWxPdXRwdXRcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNS4xLjAnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBGdXNlO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiUmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18yX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChmYWxzZSkgeyB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcywgUmVhY3RJczsgfSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSkoKTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX187XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXztcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIFRlbGwgd2hldGhlciB0aGUgcmVjdCBpcyB2aXNpYmxlLCBnaXZlbiBhbiBvZmZzZXRcbi8vXG4vLyByZXR1cm46IGJvb2xlYW5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KSB7XG4gIHZhciBvZmZzZXREaXIgPSBvZmZzZXQuZGlyZWN0aW9uO1xuICB2YXIgb2Zmc2V0VmFsID0gb2Zmc2V0LnZhbHVlOyAvLyBSdWxlcyBmb3IgY2hlY2tpbmcgZGlmZmVyZW50IGtpbmQgb2Ygb2Zmc2V0cy4gSW4gZXhhbXBsZSBpZiB0aGUgZWxlbWVudCBpc1xuICAvLyA5MHB4IGJlbG93IHZpZXdwb3J0IGFuZCBvZmZzZXRUb3AgaXMgMTAwLCBpdCBpcyBjb25zaWRlcmVkIHZpc2libGUuXG5cbiAgc3dpdGNoIChvZmZzZXREaXIpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC50b3AgKyBvZmZzZXRWYWwgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QuYm90dG9tID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICsgb2Zmc2V0VmFsIDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAtIG9mZnNldFZhbCA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC5sZWZ0IDwgcmVjdC5sZWZ0ICYmIGNvbnRhaW5tZW50UmVjdC5yaWdodCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wO1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGNvbnRhaW5tZW50UmVjdC5yaWdodCAtIG9mZnNldFZhbCA+IHJlY3QucmlnaHQgJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnRvcCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbTtcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBWaXNpYmlsaXR5U2Vuc29yOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplUmVjdChyZWN0KSB7XG4gIGlmIChyZWN0LndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgfVxuXG4gIGlmIChyZWN0LmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICB9XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG5cbnZhciBWaXNpYmlsaXR5U2Vuc29yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaXNpYmlsaXR5U2Vuc29yLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBWaXNpYmlsaXR5U2Vuc29yKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpc2liaWxpdHlTZW5zb3IpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVmlzaWJpbGl0eVNlbnNvcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuY29udGFpbm1lbnQgfHwgd2luZG93O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIGRlbGF5LCB0aHJvdHRsZSkge1xuICAgICAgaWYgKCFfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2sgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICB2YXIgZnVuYztcblxuICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLmNoZWNrKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhyb3R0bGUgPiAtMSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB0aHJvdHRsZSB8fCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYygpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIGRlbGF5IHx8IDApO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgIGZuOiBmdW5jLFxuICAgICAgICBnZXRMYXN0VGltZW91dDogZnVuY3Rpb24gZ2V0TGFzdFRpbWVvdXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaW5mby5mbik7XG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2V2ZW50XSA9IGluZm87XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRXYXRjaGluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjayB8fCBfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbnRlcnZhbENoZWNrKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoX3RoaXMuY2hlY2ssIF90aGlzLnByb3BzLmludGVydmFsRGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihfdGhpcy5nZXRDb250YWluZXIoKSwgXCJzY3JvbGxcIiwgX3RoaXMucHJvcHMuc2Nyb2xsRGVsYXksIF90aGlzLnByb3BzLnNjcm9sbFRocm90dGxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLnJlc2l6ZUNoZWNrKSB7XG4gICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCBcInJlc2l6ZVwiLCBfdGhpcy5wcm9wcy5yZXNpemVEZWxheSwgX3RoaXMucHJvcHMucmVzaXplVGhyb3R0bGUpO1xuICAgICAgfSAvLyBpZiBkb250IG5lZWQgZGVsYXllZCBjYWxsLCBjaGVjayBvbiBsb2FkICggYmVmb3JlIHRoZSBmaXJzdCBpbnRlcnZhbCBmaXJlcyApXG5cblxuICAgICAgIV90aGlzLnByb3BzLmRlbGF5ZWRDYWxsICYmIF90aGlzLmNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrKSB7XG4gICAgICAgIC8vIGNsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgZGVib3VuY2UgY2FsbGVyc1xuICAgICAgICBmb3IgKHZhciBkZWJvdW5jZUV2ZW50IGluIF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgICBpZiAoX3RoaXMuZGVib3VuY2VDaGVjay5oYXNPd25Qcm9wZXJ0eShkZWJvdW5jZUV2ZW50KSkge1xuICAgICAgICAgICAgdmFyIGRlYm91bmNlSW5mbyA9IF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF07XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VJbmZvLmdldExhc3RUaW1lb3V0KCkpO1xuICAgICAgICAgICAgZGVib3VuY2VJbmZvLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGRlYm91bmNlRXZlbnQsIGRlYm91bmNlSW5mby5mbik7XG4gICAgICAgICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrW2RlYm91bmNlRXZlbnRdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IG51bGw7XG5cbiAgICAgIGlmIChfdGhpcy5pbnRlcnZhbCkge1xuICAgICAgICBfdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwoX3RoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoZWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLm5vZGU7XG4gICAgICB2YXIgcmVjdDtcbiAgICAgIHZhciBjb250YWlubWVudFJlY3Q7IC8vIGlmIHRoZSBjb21wb25lbnQgaGFzIHJlbmRlcmVkIHRvIG51bGwsIGRvbnQgdXBkYXRlIHZpc2liaWxpdHlcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJlY3QgPSBub3JtYWxpemVSZWN0KF90aGlzLnJvdW5kUmVjdERvd24oZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNvbnRhaW5tZW50KSB7XG4gICAgICAgIHZhciBjb250YWlubWVudERPTVJlY3QgPSBfdGhpcy5wcm9wcy5jb250YWlubWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiBjb250YWlubWVudERPTVJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IGNvbnRhaW5tZW50RE9NUmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbTogY29udGFpbm1lbnRET01SZWN0LmJvdHRvbSxcbiAgICAgICAgICByaWdodDogY29udGFpbm1lbnRET01SZWN0LnJpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWlubWVudFJlY3QgPSB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICByaWdodDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9IC8vIENoZWNrIGlmIHZpc2liaWxpdHkgaXMgd2FudGVkIHZpYSBvZmZzZXQ/XG5cblxuICAgICAgdmFyIG9mZnNldCA9IF90aGlzLnByb3BzLm9mZnNldCB8fCB7fTtcbiAgICAgIHZhciBoYXNWYWxpZE9mZnNldCA9IF90eXBlb2Yob2Zmc2V0KSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgaWYgKGhhc1ZhbGlkT2Zmc2V0KSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC50b3AgKz0gb2Zmc2V0LnRvcCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QubGVmdCArPSBvZmZzZXQubGVmdCB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QuYm90dG9tIC09IG9mZnNldC5ib3R0b20gfHwgMDtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnJpZ2h0IC09IG9mZnNldC5yaWdodCB8fCAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlzaWJpbGl0eVJlY3QgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgPj0gY29udGFpbm1lbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0LFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20sXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodFxuICAgICAgfTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3bmovcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvcHVsbC8xMTRcblxuICAgICAgdmFyIGhhc1NpemUgPSByZWN0LmhlaWdodCA+IDAgJiYgcmVjdC53aWR0aCA+IDA7XG4gICAgICB2YXIgaXNWaXNpYmxlID0gaGFzU2l6ZSAmJiB2aXNpYmlsaXR5UmVjdC50b3AgJiYgdmlzaWJpbGl0eVJlY3QubGVmdCAmJiB2aXNpYmlsaXR5UmVjdC5ib3R0b20gJiYgdmlzaWJpbGl0eVJlY3QucmlnaHQ7IC8vIGNoZWNrIGZvciBwYXJ0aWFsIHZpc2liaWxpdHlcblxuICAgICAgaWYgKGhhc1NpemUgJiYgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxWaXNpYmxlID0gcmVjdC50b3AgPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSAmJiByZWN0LmJvdHRvbSA+PSBjb250YWlubWVudFJlY3QudG9wICYmIHJlY3QubGVmdCA8PSBjb250YWlubWVudFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+PSBjb250YWlubWVudFJlY3QubGVmdDsgLy8gYWNjb3VudCBmb3IgcGFydGlhbCB2aXNpYmlsaXR5IG9uIGEgc2luZ2xlIGVkZ2VcblxuICAgICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgcGFydGlhbFZpc2libGUgPSB2aXNpYmlsaXR5UmVjdFtfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eV07XG4gICAgICAgIH0gLy8gaWYgd2UgaGF2ZSBtaW5pbXVtIHRvcCB2aXNpYmlsaXR5IHNldCBieSBwcm9wcywgbGV0cyBjaGVjaywgaWYgaXQgbWVldHMgdGhlIHBhc3NlZCB2YWx1ZVxuICAgICAgICAvLyBzbyBpZiBmb3IgaW5zdGFuY2UgZWxlbWVudCBpcyBhdCBsZWFzdCAyMDBweCBpbiB2aWV3cG9ydCwgdGhlbiBzaG93IGl0LlxuXG5cbiAgICAgICAgaXNWaXNpYmxlID0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgPyBwYXJ0aWFsVmlzaWJsZSAmJiByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tIC0gX3RoaXMucHJvcHMubWluVG9wVmFsdWUgOiBwYXJ0aWFsVmlzaWJsZTtcbiAgICAgIH0gLy8gRGVwcmVjYXRlZCBvcHRpb25zIGZvciBjYWxjdWxhdGluZyBvZmZzZXQuXG5cblxuICAgICAgaWYgKHR5cGVvZiBvZmZzZXQuZGlyZWN0aW9uID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvZmZzZXQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW25vdGljZV0gb2Zmc2V0LmRpcmVjdGlvbiBhbmQgb2Zmc2V0LnZhbHVlIGhhdmUgYmVlbiBkZXByZWNhdGVkLiBUaGV5IHN0aWxsIHdvcmsgZm9yIG5vdywgYnV0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1cGdyYWRlIHRvIHRoZSBuZXcgc3ludGF4OiB7ICVzOiAlZCB9XCIsIG9mZnNldC5kaXJlY3Rpb24sIG9mZnNldC52YWx1ZSk7XG4gICAgICAgIGlzVmlzaWJsZSA9IF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQoKShvZmZzZXQsIHJlY3QsIGNvbnRhaW5tZW50UmVjdCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlOyAvLyBub3RpZnkgdGhlIHBhcmVudCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc1Zpc2libGUgIT09IGlzVmlzaWJsZSkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdmlzaWJpbGl0eVJlY3RcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSBfdGhpcy5wcm9wcy5vbkNoYW5nZShpc1Zpc2libGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFZpc2liaWxpdHlTZW5zb3IsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wV2F0Y2hpbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIC8vIHJlLXJlZ2lzdGVyIG5vZGUgaW4gY29tcG9uZW50RGlkVXBkYXRlIGlmIGNoaWxkcmVuIGRpZmZzIFsjMTAzXVxuICAgICAgdGhpcy5ub2RlID0gcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdC5hLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgJiYgIXByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB7fVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFydFdhdGNoaW5nKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb3VuZFJlY3REb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJvdW5kUmVjdERvd24ocmVjdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLmZsb29yKHJlY3QudG9wKSxcbiAgICAgICAgbGVmdDogTWF0aC5mbG9vcihyZWN0LmxlZnQpLFxuICAgICAgICBib3R0b206IE1hdGguZmxvb3IocmVjdC5ib3R0b20pLFxuICAgICAgICByaWdodDogTWF0aC5mbG9vcihyZWN0LnJpZ2h0KVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0aGlzLnN0YXRlLmlzVmlzaWJsZSxcbiAgICAgICAgICB2aXNpYmlsaXR5UmVjdDogdGhpcy5zdGF0ZS52aXNpYmlsaXR5UmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7XG59KHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgcGFydGlhbFZpc2liaWxpdHk6IGZhbHNlLFxuICBtaW5Ub3BWYWx1ZTogMCxcbiAgc2Nyb2xsQ2hlY2s6IGZhbHNlLFxuICBzY3JvbGxEZWxheTogMjUwLFxuICBzY3JvbGxUaHJvdHRsZTogLTEsXG4gIHJlc2l6ZUNoZWNrOiBmYWxzZSxcbiAgcmVzaXplRGVsYXk6IDI1MCxcbiAgcmVzaXplVGhyb3R0bGU6IC0xLFxuICBpbnRlcnZhbENoZWNrOiB0cnVlLFxuICBpbnRlcnZhbERlbGF5OiAxMDAsXG4gIGRlbGF5ZWRDYWxsOiBmYWxzZSxcbiAgb2Zmc2V0OiB7fSxcbiAgY29udGFpbm1lbnQ6IG51bGwsXG4gIGNoaWxkcmVuOiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKVxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShWaXNpYmlsaXR5U2Vuc29yLCBcInByb3BUeXBlc1wiLCB7XG4gIG9uQ2hhbmdlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmMsXG4gIGFjdGl2ZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pXSksXG4gIGRlbGF5ZWRDYWxsOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIG9mZnNldDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIHRvcDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgbGVmdDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgYm90dG9tOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICByaWdodDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXJcbiAgfSksIC8vIGRlcHJlY2F0ZWQgb2Zmc2V0IHByb3BlcnR5XG4gIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuc2hhcGUoe1xuICAgIGRpcmVjdGlvbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZihbXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIl0pLFxuICAgIHZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KV0pLFxuICBzY3JvbGxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBzY3JvbGxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHNjcm9sbFRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgcmVzaXplQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgcmVzaXplRGVsYXk6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVUaHJvdHRsZTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGludGVydmFsQ2hlY2s6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgaW50ZXJ2YWxEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIGNvbnRhaW5tZW50OiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5pbnN0YW5jZU9mKHdpbmRvdy5FbGVtZW50KSA6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYW55LFxuICBjaGlsZHJlbjogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5vbmVPZlR5cGUoW3Byb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZWxlbWVudCwgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5mdW5jXSksXG4gIG1pblRvcFZhbHVlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxufSk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWNjb3JkaW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtpc09wZW4sIHRpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShpc09wZW4pO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICdhY2NvcmRpb24nLCB7J29wZW4nOiBvcGVuLCAnY2xvc2VkJzogISBvcGVuIH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtvcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0T3BlbighIG9wZW4pfVxuXHRcdFx0PlxuXHRcdFx0XHRcdHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPnt0aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0PERhc2hpY29uXG5cdFx0XHRcdFx0XHRpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiBvcGVuID8gJ2F1dG8nIDogJzBweCd9fT5cblx0XHRcdFx0e2NoaWxkcmVuICYmIGNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9UYWJzQ29udGVudCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL1NuYWNrYmFyJztcbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCB7Z2V0LCBzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBcHAgPSAoe3NldFNldHRpbmdzLCB0b2FzdCwgY3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR3cC5hcGkubG9hZFByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRzZXR0aW5ncyA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKCk7XG5cdFx0XHRzZXR0aW5ncy5mZXRjaCgpLnRoZW4ociA9PiB7XG5cdFx0XHRcdHNldFNldHRpbmdzKHIpO1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIDxMb2FkaW5nLz47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxIZWFkZXIgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8Tm90aWZpY2F0aW9ucy8+fVxuXHRcdFx0XHRcdDxUYWJzQ29udGVudCBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7dG9hc3QgJiYgPFNuYWNrYmFyLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2V0dGluZ3MsIHNldFRhYn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2V0dGluZ3M6IChvYmplY3QpID0+IHNldFNldHRpbmdzKG9iamVjdCksXG5cdFx0XHRzZXRUYWI6ICh0YWIpID0+IHNldFRhYih0YWIpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdCwgZ2V0VGFifSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6IGdldFRvYXN0KCksXG5cdFx0XHRjdXJyZW50VGFiOiBnZXRUYWIoKVxuXHRcdH07XG5cdH0pXG4pKEFwcCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpY29uLCBpY29uQWx0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBjbGFzc05hbWVzfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCBjbGFzc05hbWVzIF0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAge2ljb24gJiYgPGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtpY29ufSBhbHQ9e2ljb25BbHQgfHwgJ2ljb24nfS8+fVxuICAgICAgICB7dGl0bGUgJiYgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDM+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vQWNjb3JkaW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2hhbmdlbG9nID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2Vsb2d9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWxvZy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkYXRlLCB2ZXJzaW9uLCB0d2Vha3MsIGZpeGVzLCBmZWF0dXJlc30gPSBlbnRyeTtcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PjtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uIGlzT3Blbj17MCA9PT0gaW5kZXh9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHRcdHtmZWF0dXJlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgc3VjY2Vzc1wiPntfXygnRmVhdHVyZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gPGxpPntmZWF0dXJlfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7Zml4ZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidWdzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgZXJyb3JcIj57X18oJ0J1ZyBGaXhlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zml4ZXMubWFwKChmaXgpID0+IDxsaT57Zml4fTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7dHdlYWtzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdlYWtzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPntfXygnVHdlYWtzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0d2Vha3MubWFwKCh0d2VhaykgPT4gPGxpPnt0d2Vha308L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2Vsb2c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBGZWF0dXJlUm93IGZyb20gJy4uL0ZlYXR1cmVSb3cnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtmZWF0dXJlRGF0YX0gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNhcmQgdGFibGVcIj5cblx0XHRcdFx0PHRib2R5IGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRcIj5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwibGFyZ2VcIi8+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZScsICduZXZlJyl9PC90aD5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlIFBybycsICduZXZlJyl9PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0e2ZlYXR1cmVEYXRhLm1hcCgoaXRlbSkgPT4gPEZlYXR1cmVSb3cgaXRlbT17aXRlbX0vPil9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdXBzZWxsXCI+XG5cdFx0XHRcdDxwPntfXygnR2V0IGFjY2VzcyB0byBhbGwgUHJvIGZlYXR1cmVzIGFuZCBwb3dlci11cCB5b3VyIHdlYnNpdGUnLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLnVwZ3JhZGVVUkx9XG5cdFx0XHRcdFx0aXNQcmltYXJ5PlxuXHRcdFx0XHRcdHtfXygnR2V0IE5ldmUgUHJvIE5vdycsICduZXZlJyl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBIZWxwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYnVveS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dlIHdhbnQgdG8gbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdXNpbmcgTmV2ZSwgYW5kIHRoYXQgaXMgd2h5IHdlIGhhdmUgZ2F0aGVyZWQgYWxsIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gaGVyZSBmb3IgeW91LiBXZSBob3BlIHlvdSB3aWxsIGVuam95IHVzaW5nIE5ldmUgYXMgbXVjaCBhcyB3ZSBlbmpveSBjcmVhdGluZyBncmVhdCBwcm9kdWN0cy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG4gICAgICAgICAgICBocmVmPSdodHRwczovL3dvcmRwcmVzcy5vcmcvc3VwcG9ydC90aGVtZS9uZXZlLydcbiAgICAgICAgICA+e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2xpc3Quc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXYW50IHRvIGdldCB0aGUgZ2lzdCBvbiB0aGUgbGF0ZXN0IHRoZW1lIGNoYW5nZXM/IEp1c3QgY29uc3VsdCBvdXIgY2hhbmdlbG9nIGJlbG93IHRvIGdldCBhIHRhc3RlIG9mIHRoZSByZWNlbnQgZml4ZXMgYW5kIGZlYXR1cmVzIGltcGxlbWVudGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignY2hhbmdlbG9nJyl9XG4gICAgICAgICAgPntfXygnVmlldyBDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3RhY2hvbWV0ZXIuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1NwZWVkIHVwIHlvdXIgc2l0ZScsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHNpdHVhdGlvbiB3aGVyZSBldmVyeXRoaW5nIG9uIHlvdXIgc2l0ZSBpcyBydW5uaW5nIHZlcnkgc2xvd2x5LCB5b3UgbWlnaHQgY29uc2lkZXIgaGF2aW5nIGEgbG9vayBhdCB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB3aGVyZSB5b3Ugd2lsbCBmaW5kIHRoZSBtb3N0IGNvbW1vbiBpc3N1ZXMgY2F1c2luZyB0aGlzIGFuZCBwb3NzaWJsZSBzb2x1dGlvbnMgZm9yIGVhY2ggb2YgdGhlIGlzc3Vlcy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnRG9jdW1lbnRhdGlvbicsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS85NDYtbmV2ZS1kb2NcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY2xvbmUuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NyZWF0ZSBhIGNoaWxkIHRoZW1lJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSB3YW50IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgdGhlbWVcXCdzIGZpbGVzLCB0aG9zZSBjaGFuZ2VzIGFyZSBsaWtlbHkgdG8gYmUgb3ZlcndyaXR0ZW4gd2hlbiB5b3UgbmV4dCB1cGRhdGUgdGhlIHRoZW1lLiBJbiBvcmRlciB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcsIHlvdSBuZWVkIHRvIGNyZWF0ZSBhIGNoaWxkIHRoZW1lLiBGb3IgdGhpcywgcGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzE0LWhvdy10by1jcmVhdGUtYS1jaGlsZC10aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdhcnJvd3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0J1aWxkIGEgbGFuZGluZyBwYWdlIHdpdGggYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlcicsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJbiB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB5b3Ugd2lsbCBmaW5kIGFuIGVhc3kgd2F5IHRvIGJ1aWxkIGEgZ3JlYXQgbG9va2luZyBsYW5kaW5nIHBhZ2UgdXNpbmcgYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlciBwbHVnaW4uJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8yMTktaG93LXRvLWJ1aWxkLWEtbGFuZGluZy1wYWdlLXdpdGgtYS1kcmFnLWFuZC1kcm9wLWNvbnRlbnQtYnVpbGRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBQbHVnaW5DYXJkIGZyb20gJy4uL1BsdWdpbkNhcmQnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7cGx1Z2luc30gPSBuZXZlRGFzaDtcblxuICBpZiAoICEgcGx1Z2lucyApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyggcGx1Z2lucyApLm1hcCggKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBsdWdpbkNhcmQga2V5PXtzbHVnfSBzbHVnPXtzbHVnfSBkYXRhPXtwbHVnaW5zW3NsdWddfS8+O1xuICAgICAgICB9IClcbiAgICAgIH1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTW9kdWxlQ2FyZCBmcm9tICcuLi9Nb2R1bGVDYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHttb2R1bGVzfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHR7XG5cdFx0XHRcdE9iamVjdC5rZXlzKG1vZHVsZXMpLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PE1vZHVsZUNhcmQgc2x1Zz17aWR9Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBTdGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3NxdWFyZXMuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1N0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmV2ZSBub3cgY29tZXMgd2l0aCBhIHNpdGVzIGxpYnJhcnkgd2l0aCB2YXJpb3VzIGRlc2lnbnMgdG8gcGljayBmcm9tLiBWaXNpdCBvdXIgY29sbGVjdGlvbiBvZiBkZW1vcyB0aGF0IGFyZSBjb25zdGFudGx5IGJlaW5nIGFkZGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc1ByaW1hcnlcblx0XHRcdFx0XHRcdGlzTGFyZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGFiKCdzdGFydGVyLXNpdGVzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID57X18oJ0dvIHRvIFN0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0dldHRpbmcgU3RhcnRlZD8gQ2hlY2sgaGVscCBhbmQgZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2hlbHAnKX1cbiAgICAgICAgICA+e19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJjdXN0b21pemVyLXF1aWNrLWxpbmtzXCJcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY29tcGFzcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3VzdG9taXplciBxdWljayBsaW5rcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcbiAgY29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG4gIGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAge1xuICAgICAgICBwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2dldH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL0xvYWRpbmcnO1xuaW1wb3J0IE9uYm9hcmRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9NYWluJztcblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IFN0YXJ0ZXJTaXRlcyA9ICh7c2l0ZXMsIHNldFNpdGVzLCBzZXRVcHNlbGxzfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChzaXRlcykge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2luaXRpYWxpemVfc2l0ZXNfbGlicmFyeScpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHNldEVycm9yKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHtyZW1vdGUsIHVwc2VsbH0gPSByLmRhdGE7XG5cdFx0XHRcdFx0c2V0U2l0ZXMocmVtb3RlKTtcblx0XHRcdFx0XHRzZXRVcHNlbGxzKHVwc2VsbCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdGlmIChlcnJvcikge1xuXHRcdHJldHVybiA8aDE+RXJyb3IuPC9oMT47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdGxvYWRpbmcgPyA8TG9hZGluZy8+IDogPE9uYm9hcmRpbmcvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRTaXRlcywgc2V0VXBzZWxsc30gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNpdGVzOiAoc2l0ZXMpID0+IHNldFNpdGVzKHNpdGVzKSxcblx0XHRcdHNldFVwc2VsbHM6ICh1cHNlbGxzKSA9PiBzZXRVcHNlbGxzKHVwc2VsbHMpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRTaXRlc30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlczogZ2V0U2l0ZXMoKVxuXHRcdH07XG5cdH0pXG4pKFN0YXJ0ZXJTaXRlcyk7XG4iLCJjb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IE9uQ2xpY2tPdXRzaWRlIGZyb20gJy4vVXRpbHMvT25DbGlja091dHNpZGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG5cdGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuXHRjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBmb3JjZVRvb2xUaXAsIHRvZ2dsZUZvcmNlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PHRyIGNsYXNzTmFtZT1cImZlYXR1cmUtcm93XCI+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwibGFyZ2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aDQ+e3RpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0PE9uQ2xpY2tPdXRzaWRlIGFjdGlvbj17KCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9nZ2xlRm9yY2VUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHR9fT4gPGFcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUZvcmNlVG9vbHRpcCh0cnVlKTtcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHRcdFx0eyh0b29sdGlwIHx8IGZvcmNlVG9vbFRpcCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9PbkNsaWNrT3V0c2lkZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdpbmRpY2F0b3InLCB7J2Vycm9yJzogISBpbkxpdGUsICdzdWNjZXNzJzogaW5MaXRlfSBdKX0+XG5cdFx0XHRcdDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj17aW5MaXRlID8gJ3llcycgOiAnbm8tYWx0J30vPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJpbmRpY2F0b3Igc3VjY2Vzc1wiPlxuXHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MzB9IGljb249XCJ5ZXNcIi8+XG5cdFx0XHQ8L3RkPlxuXHRcdDwvdHI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlUm93O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2FkZFVybEhhc2gsIGdldFRhYkhhc2gsIHRhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuXHRcdGlmIChudWxsID09PSBoYXNoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHByb3BzLnNldFRhYihoYXNoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtyZW5kZXJIZWFkKCl9XG5cdFx0XHRcdHtyZW5kZXJOYXZpZ2F0aW9uKHByb3BzKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVySGVhZCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bmV2ZURhc2guc3RyaW5ncy5oZWFkZXJ9PC9oMT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj57bmV2ZURhc2gudmVyc2lvbn08L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9sb2dvLnN2Zyd9IGFsdD17X18oJ05ldmUgVGhlbWUgTG9nbycsICduZXZlJyl9Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdHtPYmplY3Qua2V5cyh0YWJzKS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGk+PGFcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gaXRlbSA/ICdhY3RpdmUnIDogJyd9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFRhYihpdGVtKTtcblx0XHRcdFx0XHRcdFx0YWRkVXJsSGFzaChpdGVtKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Pnt0YWJzW2l0ZW1dLmxhYmVsfVxuXHRcdFx0XHRcdDwvYT48L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMaWNlbnNlQ2FyZCA9ICh7aXNWaXNpYmxlLCBjaGFuZ2VUaWVyfSkgPT4ge1xuXHRjb25zdCB7bGljZW5zZSwgcHJvQXBpfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIGtleSwgc2V0S2V5IF0gPSB1c2VTdGF0ZShsaWNlbnNlICYmICd2YWxpZCcgPT09IGxpY2Vuc2UudmFsaWQgPyBsaWNlbnNlLmtleSB8fCAnJyA6ICcnKTtcblx0Y29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIHZhbGlkLCBzZXRWYWxpZCBdID0gdXNlU3RhdGUobGljZW5zZS52YWxpZCB8fCAnaW52YWxpZCcpO1xuXHRjb25zdCBbIGV4cGlyYXRpb24sIHNldEV4cGlyYXRpb24gXSA9IHVzZVN0YXRlKGxpY2Vuc2UuZXhwaXJhdGlvbiB8fCAnJyk7XG5cdGNvbnN0IFsgdG9hc3QsIHNldFRvYXN0IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgdG9hc3RUeXBlLCBzZXRUb2FzdFR5cGUgXSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG5cblx0aWYgKCEgaXNWaXNpYmxlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB0b2dnbGVMaWNlbnNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvRG8gPSAndmFsaWQnID09PSB2YWxpZCA/ICdkZWFjdGl2YXRlJyA6ICdhY3RpdmF0ZSc7XG5cdFx0c2V0U3RhdHVzKCdhY3RpdmF0ZScgPT09IHRvRG8gPyAnYWN0aXZhdGluZycgOiAnZGVhY3RpdmF0aW5nJyk7XG5cdFx0c2VuZChwcm9BcGkgKyAnL3RvZ2dsZV9saWNlbnNlJywge2tleSwgYWN0aW9uOiB0b0RvfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHNldFRvYXN0VHlwZShyZXNwb25zZS5zdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyk7XG5cdFx0XHRzZXRLZXkoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/IGtleSA6ICcnKTtcblx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0c2V0RXhwaXJhdGlvbihyZXNwb25zZS5leHBpcmF0aW9uKTtcblx0XHRcdHNldFZhbGlkKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICd2YWxpZCcgOiAnbm90X2FjdGl2ZScpO1xuXHRcdFx0c2V0U3RhdHVzKGZhbHNlKTtcblx0XHRcdG5ldmVEYXNoLmxpY2Vuc2UuZXhwaXJhdGlvbiA9IHJlc3BvbnNlLmV4cGlyYXRpb247XG5cdFx0XHRjaGFuZ2VUaWVyKHJlc3BvbnNlLnRpZXIgfHwgMSk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkIGxpY2Vuc2VcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdDxoND57X18oJ05ldmUgUHJvIEFkZG9uIGxpY2Vuc2UnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdDxwPkVudGVyIHlvdXIgbGljZW5zZSBmcm9tIDxhIGhyZWY9XCJodHRwczovL3N0b3JlLnRoZW1laXNsZS5jb21cIj5UaGVtZUlzbGU8L2E+IHB1cmNoYXNlIGhpc3RvcnkgaW4gb3JkZXIgdG8gZ2V0XG5cdFx0XHRcdFx0cGx1Z2luIHVwZGF0ZXM8L3A+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVMaWNlbnNlKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRLZXkoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0J3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionICsga2V5LnNsaWNlKC01KSA6XG5cdFx0XHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ0VudGVyIExpY2Vuc2UgS2V5JywgJ25ldmUnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeT17J3ZhbGlkJyAhPT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdHVzIHx8ICEga2V5fVxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0eyEgc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGUnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdFx0XHQoJ2FjdGl2YXRpbmcnID09PSBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHR7dG9hc3QgJiYgPFRvYXN0IHR5cGU9e3RvYXN0VHlwZX0gZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fS8+fVxuXHRcdFx0XHR7ISBbICdub3RfYWN0aXZlJywgJ2ludmFsaWQnIF0uaW5jbHVkZXModmFsaWQpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGljZW5zZS1mb290ZXJcIj5cblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWVzKFsgJ3N0YXR1cy1pY29uJywgJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnc3VjY2VzcycgOiAnZXJyb3InIF0pXG5cdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249eyd2YWxpZCcgPT09IHZhbGlkID8gJ3llcycgOiAnbm8nfS8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWxpZGl0eVwiPlxuXHRcdFx0XHRcdFx0XHR7J3ZhbGlkJyA9PT0gdmFsaWQgPyBfXygnVmFsaWQnLCAnbmV2ZScpIDogX18oJ0V4cGlyZWQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2V4cGlyYXRpb24gJiZcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+LTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXhwaXJlc1wiPlxuXHRcdFx0XHRcdFx0eygndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVzJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVkJywgJ25ldmUnKSkgKyAnICcgKyBleHBpcmF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FzaWRlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7Y2hhbmdlTGljZW5zZVRpZXJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlVGllcjogKG5ld1RpZXIpID0+IHtcblx0XHRcdGNoYW5nZUxpY2Vuc2VUaWVyKG5ld1RpZXIpO1xuXHRcdH1cblx0fTtcbn0pKExpY2Vuc2VDYXJkKTtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWRhc2hcIj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uIGxvYWRpbmdcIj52Mi42LjI8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgbG9nb1wiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShBcnJheSg2KSkubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpPjxhIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+PC9saT47XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gbG9hZGluZyBwbGFjZWhvbGRlclwiLz47XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQgY29sdW1ucyBzdGFydFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbWl6ZXItcXVpY2stbGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdFx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2FzaWRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJztcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSAnLi9PcHRpb25zL0lucHV0Rm9ybSc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vT3B0aW9ucy9Ub2dnbGUnO1xuaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7QnV0dG9uLCBUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBNb2R1bGVDYXJkID0gKHtzbHVnLCBzZXRUb2FzdCwgY2hhbmdlTW9kdWxlU3RhdHVzLCBnZXRNb2R1bGVTdGF0dXMsIHRpZXJ9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB7XG5cdFx0bmljZW5hbWUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0YXZhaWxhYmlsaXR5TGV2ZWwsXG5cdFx0b3B0aW9ucyxcblx0XHRvcmRlcixcblx0XHRsaW5rcyxcblx0XHRkb2N1bWVudGF0aW9uLFxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRyZXF1aXJlZF9hY3Rpb25zXG5cdH0gPSBuZXZlRGFzaC5tb2R1bGVzW3NsdWddO1xuXHRjb25zdCB7dXBncmFkZUxpbmtzfSA9IG5ldmVEYXNoO1xuXG5cdGZ1bmN0aW9uIHJlbmRlck9wdGlvbnNBY2NvcmRpb25zKCkge1xuXHRcdHJldHVybiBvcHRpb25zLm1hcCgoZ3JvdXApID0+IHtcblx0XHRcdGNvbnN0IHtsYWJlbCwgb3B0aW9uc30gPSBncm91cDtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxBY2NvcmRpb24gdGl0bGU9e2xhYmVsfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgob3B0aW9uU2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB7bGFiZWwsIHR5cGUsIHBsYWNlaG9sZGVyfSA9IG9wdGlvbnNbb3B0aW9uU2x1Z107XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyd0ZXh0JyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0Rm9ybVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RvZ2dsZScgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbHVnPXtvcHRpb25TbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZXRNb2R1bGVTdGF0dXMoc2x1Zyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSwgdHJ1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodmFsdWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgQWN0aXZhdGVkJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBEZWFjdGl2YXRlZC4nLCAnbmV2ZScpKSArIGAgKCR7bmljZW5hbWV9KWApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IGFjdGl2YXRlIG1vZHVsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbiArICcgJ31cblx0XHRcdFx0XHR7ZG9jdW1lbnRhdGlvbiAmJlxuXHRcdFx0XHRcdDxhIGhyZWY9e2RvY3VtZW50YXRpb24udXJsfT57X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0e2xpbmtzICYmIGdldE1vZHVsZVN0YXR1cyhzbHVnKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHR7bGlua3MubWFwKChsaW5rKSA9PiA8QnV0dG9uIGlzU2Vjb25kYXJ5IGhyZWY9e2xpbmsudXJsfT57bGluay5sYWJlbH08L0J1dHRvbj4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7KDAgPCBvcHRpb25zLmxlbmd0aCAmJiB0cnVlID09PSBnZXRNb2R1bGVTdGF0dXMoc2x1ZykpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLW9wdGlvbnNcIj5cblx0XHRcdFx0XHR7cmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldE1vZHVsZVN0YXR1cywgZ2V0TGljZW5zZVRpZXJ9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRNb2R1bGVTdGF0dXM6IChzbHVnKSA9PiBnZXRNb2R1bGVTdGF0dXMoc2x1ZyksXG5cdFx0XHR0aWVyOiBnZXRMaWNlbnNlVGllcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlU3RhdHVzLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoTW9kdWxlQ2FyZCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RleHQsIGN0YSwgdHlwZSwgdXBkYXRlfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRvbmUsIHNldERvbmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgW1xuICAgICAgJ25vdGlmaWNhdGlvbicsXG4gICAgICBwcm9wcy5zbHVnLFxuICAgICAgdHlwZSA/IHR5cGUgOiAnJyxcbiAgICAgIHtcbiAgICAgICAgJ3N1Y2Nlc3MnOiBkb25lLFxuICAgICAgICAnaGlkZGVuJzogZG9uZVxuICAgICAgfVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIGRvbmUgPyA8cD57dGV4dH08L3A+IDogPHA+PERhc2hpY29uIGljb249XCJ5ZXNcIi8+e19fKCdEb25lIScsICduZXZlJyl9PC9wPn1cbiAgICAgIHsoY3RhICYmICEgZG9uZSkgJiZcbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpcy1sb2FkaW5nJzogaW5Qcm9ncmVzc30pfVxuICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZUVudGl0eSh1cGRhdGUsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9PlxuICAgICAgICB7XG4gICAgICAgICAgaW5Qcm9ncmVzcyA/XG4gICAgICAgICAgPHNwYW4+PERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+IHtfXygnSW4gUHJvZ3Jlc3MnLCAnbmV2ZScpICsgJy4uLid9IDwvc3Bhbj4gOlxuICAgICAgICAgICAgY3RhXG4gICAgICAgIH1cbiAgICAgIDwvQnV0dG9uPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUVudGl0eSA9IChhcmdzLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pID0+IHtcbiAgaWYgKCEgYXJncy50eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhlY3V0ZUFjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoJ3RoZW1lJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1Zykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS10aGVtZScsIHtzbHVnOiBhcmdzLnNsdWd9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCd0aGVtZS11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3BsdWdpbicgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcgfHwgISBhcmdzLnBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtcGx1Z2luJywge3NsdWc6IGFyZ3Muc2x1ZywgcGx1Z2luOiBhcmdzLnBhdGh9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwbHVnaW4tdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBzZXRJblByb2dyZXNzKHRydWUpO1xuICBleGVjdXRlQWN0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgc2V0RG9uZSh0cnVlKTtcbiAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICBzZXRIaWRkZW4odHJ1ZSk7XG4gIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xuXG5jb25zdCBOb3RpZmljYXRpb25zID0gKCkgPT4ge1xuICBpZiAoISBuZXZlRGFzaC5ub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKDEgPiBuZXZlRGFzaC5ub3RpZmljYXRpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb24gZGF0YT17bmV2ZURhc2gubm90aWZpY2F0aW9uc1tzbHVnXX0gc2x1Zz17c2x1Z30vPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xuIiwiaW1wb3J0IE9uQ2xpY2tPdXRzaWRlIGZyb20gJy4uL1V0aWxzL09uQ2xpY2tPdXRzaWRlJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBFZGl0b3JTZWxlY3RvciA9ICh7b25TZWFyY2gsIGVkaXRvciwgc2V0Q3VycmVudEVkaXRvcn0pID0+IHtcblx0Y29uc3QgbWFwID0ge1xuXHRcdCdlbGVtZW50b3InOiB7XG5cdFx0XHRpY29uOiAnZWxlbWVudG9yLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0VsZW1lbnRvcicpXG5cdFx0fSxcblx0XHQnYnJpenknOiB7XG5cdFx0XHRpY29uOiAnYnJpenkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQnJpenknKVxuXHRcdH0sXG5cdFx0J2JlYXZlciBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2JlYXZlci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCZWF2ZXIgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IHtcblx0XHRcdGljb246ICd0aHJpdmUucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnVGhyaXZlIEFyY2hpdGVjdCcpXG5cdFx0fSxcblx0XHQnZGl2aSBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2Rpdmkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRGl2aSBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCdndXRlbmJlcmcnOiB7XG5cdFx0XHRpY29uOiAnZ3V0ZW5iZXJnLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0d1dGVuYmVyZycpXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0PE9uQ2xpY2tPdXRzaWRlIGFjdGlvbj17KCkgPT4ge1xuXHRcdFx0XHRzZXRPcGVuKGZhbHNlKTtcblx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRPcGVuKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRzcmM9e25ldmVEYXNoLmFzc2V0cyArICdlZGl0b3ItaWNvbnMvJyArIG1hcFtlZGl0b3JdLmljb259XG5cdFx0XHRcdFx0XHRcdGFsdD17X18oJ0J1aWxkZXIgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdFx0XHRcdDxzcGFuPnttYXBbZWRpdG9yXS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ30vPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHtvcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IGVkaXRvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0Q3VycmVudEVkaXRvcihrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBba2V5XS5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0eXBlPVwic2VhcmNoXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3J9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZWRpdG9yOiBnZXRDdXJyZW50RWRpdG9yKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRDdXJyZW50RWRpdG9yfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0Q3VycmVudEVkaXRvcjogKGVkaXRvcikgPT4gc2V0Q3VycmVudEVkaXRvcihlZGl0b3IpXG5cdFx0fTtcblx0fSlcbikoRWRpdG9yU2VsZWN0b3IpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iIG1vY2stZGFzaFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1oZWFkXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItaWNvbiBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0XHRcdDxidXR0b24+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1zaXRlc1wiPlxuXHRcdFx0XHRcdHtbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkgXS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGl0bGUgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiaW1wb3J0IEVkaXRvclNlbGVjdG9yIGZyb20gJy4vRWRpdG9yU2VsZWN0b3InO1xuaW1wb3J0IFN0YXJ0ZXJTaXRlQ2FyZCBmcm9tICcuL1N0YXJ0ZXJTaXRlQ2FyZCc7XG5pbXBvcnQgUHJldmlld0ZyYW1lIGZyb20gJy4vUHJldmlld0ZyYW1lJztcbmltcG9ydCBWaXpTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgRnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuY29uc3QgT25ib2FyZGluZyA9ICh7c2l0ZXMsIHVwc2VsbHMsIGVkaXRvciwgcHJldmlld09wZW4sIGN1cnJlbnRTaXRlRGF0YX0pID0+IHtcblx0Y29uc3QgWyBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnkgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyBtYXhTaG93biwgc2V0TWF4U2hvd24gXSA9IHVzZVN0YXRlKDkpO1xuXG5cdGZ1bmN0aW9uIGZpbHRlclNpdGVzKHNpdGVzKSB7XG5cdFx0T2JqZWN0LmtleXMoc2l0ZXMpLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0c2l0ZXNbc2x1Z10uc2x1ZyA9IHNsdWc7XG5cdFx0fSk7XG5cblx0XHRzaXRlcyA9IE9iamVjdC52YWx1ZXMoc2l0ZXMpO1xuXG5cdFx0aWYgKCEgc2VhcmNoUXVlcnkpIHtcblx0XHRcdHJldHVybiBzaXRlcztcblx0XHR9XG5cblx0XHRjb25zdCBmdXNlID0gbmV3IEZ1c2Uoc2l0ZXMsIHtcblx0XHRcdGluY2x1ZGVTY29yZTogdHJ1ZSxcblx0XHRcdGtleXM6IFsgJ3RpdGxlJywgJ3NsdWcnLCAna2V5d29yZHMnIF1cblx0XHR9KTtcblx0XHRjb25zdCBzZWFyY2ggPSBmdXNlLnNlYXJjaChzZWFyY2hRdWVyeSk7XG5cdFx0cmV0dXJuIHNlYXJjaC5tYXAoaXRlbSA9PiBpdGVtLml0ZW0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QWxsU2l0ZXMoKSB7XG5cdFx0Y29uc3Qgc2l0ZXNEYXRhID0gc2l0ZXMgJiYgc2l0ZXNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHNpdGVzW2VkaXRvcl0pIDogW107XG5cdFx0Y29uc3QgdXBzZWxsc0RhdGEgPSB1cHNlbGxzICYmIHVwc2VsbHNbZWRpdG9yXSA/IGZpbHRlclNpdGVzKHVwc2VsbHNbZWRpdG9yXSkgOiBbXTtcblx0XHRyZXR1cm4gWyAuLi5zaXRlc0RhdGEsIC4uLnVwc2VsbHNEYXRhIF07XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJTaXRlcygpIHtcblx0XHRjb25zdCBhbGxEYXRhID0gZ2V0QWxsU2l0ZXMoKTtcblxuXHRcdHJldHVybiBhbGxEYXRhLnNsaWNlKDAsIG1heFNob3duKS5tYXAoc2l0ZSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCB1cHNlbGw9e3NpdGVbJ2luX3BybyddfSBkYXRhPXtzaXRlfS8+O1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U2l0ZU5hdihwcmV2ID0gZmFsc2UpIHtcblx0XHRpZiAobnVsbCA9PT0gY3VycmVudFNpdGVEYXRhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYWxsU2l0ZXMgPSBnZXRBbGxTaXRlcygpO1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gYWxsU2l0ZXMuaW5kZXhPZihjdXJyZW50U2l0ZURhdGEpO1xuXG5cdFx0Y29uc29sZS5sb2cocG9zaXRpb24pO1xuXG5cdFx0aWYgKC0xID09PSBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCAxID09PSBhbGxTaXRlcy5sZW5ndGggICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHByZXYgJiYgMCA9PT0gcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiBhbGxTaXRlc1thbGxTaXRlcy5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRpZiAoISBwcmV2ICYmIHBvc2l0aW9uID09PSBhbGxTaXRlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gYWxsU2l0ZXNbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbFNpdGVzW3ByZXYgPyBwb3NpdGlvbiAtIDEgOiBwb3NpdGlvbiArIDFdO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItaGVhZFwiPlxuXHRcdFx0XHRcdDxoMj57X18oJ1JlYWR5IHRvIHVzZSBwcmUtYnVpbHQgd2Vic2l0ZXMgd2l0aCAxLWNsaWNrIGluc3RhbGxhdGlvbicsICduZXZlJyl9PC9oMj5cblx0XHRcdFx0XHQ8cD57X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4gWW91IGp1c3QgbmVlZCB0byBjaG9vc2UgeW91ciBmYXZvcml0ZSwgYW5kIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmcgZWxzZS4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItYm9keVwiPlxuXHRcdFx0XHRcdDxFZGl0b3JTZWxlY3RvclxuXHRcdFx0XHRcdFx0b25TZWFyY2g9eyhxdWVyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2hRdWVyeShxdWVyeSk7XG5cdFx0XHRcdFx0XHRcdHNldE1heFNob3duKDkpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHF1ZXJ5PXtzZWFyY2hRdWVyeX0vPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1zaXRlc1wiPlxuXHRcdFx0XHRcdFx0eyhzaXRlcyB8fCB1cHNlbGxzKSAmJiByZW5kZXJTaXRlcygpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxWaXpTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHtcblx0XHRcdFx0XHRcdHNldE1heFNob3duKG1heFNob3duICsgOSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2hlaWdodDogMTAsIHdpZHRoOiAxMCwgZGlzcGxheTogJ2Jsb2NrJ319Lz5cblx0XHRcdFx0XHQ8L1ZpelNlbnNvcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsocHJldmlld09wZW4gJiYgY3VycmVudFNpdGVEYXRhKSAmJiA8UHJldmlld0ZyYW1lIG5leHQ9e2dldFNpdGVOYXYoKX0gcHJldj17Z2V0U2l0ZU5hdih0cnVlKX0vPn1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0Y29uc3Qge1xuXHRcdGdldFNpdGVzLFxuXHRcdGdldFVwc2VsbHMsXG5cdFx0Z2V0Q3VycmVudEVkaXRvcixcblx0XHRnZXRQcmV2aWV3U3RhdHVzLFxuXHRcdGdldEN1cnJlbnRTaXRlXG5cdH0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRyZXR1cm4ge1xuXHRcdHNpdGVzOiBnZXRTaXRlcygpLFxuXHRcdHVwc2VsbHM6IGdldFVwc2VsbHMoKSxcblx0XHRlZGl0b3I6IGdldEN1cnJlbnRFZGl0b3IoKSxcblx0XHRwcmV2aWV3T3BlbjogZ2V0UHJldmlld1N0YXR1cygpLFxuXHRcdGN1cnJlbnRTaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKVxuXHR9O1xufSkoT25ib2FyZGluZyk7XG4iLCJjb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBQcmV2aWV3RnJhbWUgPSAoe25leHQsIHByZXYsIHNpdGVEYXRhLCBzZXRTaXRlLCBzZXRQcmV2aWV3fSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItcHJldmlld1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG5cdFx0XHRcdDxpZnJhbWUgc3JjPXtzaXRlRGF0YVsnZGVtb191cmwnXX0gZnJhbWVib3JkZXI9XCIwXCIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cblx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiIHNpemU9ezUwfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1iYXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0b3JcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFByZXZpZXcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKG51bGwpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsb3NlXCJcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2xvc2UnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cIm5vXCIvPlxuXG5cdFx0XHRcdFx0XHR7cHJldiAmJiA8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUocHJldik7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHJldlwiXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1ByZXZpb3VzJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1sZWZ0LWFsdDJcIlxuXHRcdFx0XHRcdC8+fVxuXG5cdFx0XHRcdFx0e25leHQgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKG5leHQpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdOZXh0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGljb249XCJhcnJvdy1yaWdodC1hbHQyXCJcblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtzaXRlRGF0YS5pbl9wcm8gP1xuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1cGdyYWRlXCJcblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdGhyZWY9e3NpdGVEYXRhLm91dGJvdW5kX2xpbmt9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ09wZW4gTW9kYWwnKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdJbXBvcnQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRTaXRlfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVEYXRhOiBnZXRDdXJyZW50U2l0ZSgpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdFx0Y29uc3Qge3NldEN1cnJlbnRTaXRlLCBzZXRQcmV2aWV3U3RhdHVzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpLFxuXHRcdFx0c2V0UHJldmlldzogKHN0YXR1cykgPT4gc2V0UHJldmlld1N0YXR1cyhzdGF0dXMpXG5cdFx0fTtcblx0fSlcbikoUHJldmlld0ZyYW1lKTtcbiIsImNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgU3RhcnRlclNpdGVDYXJkID0gKHtkYXRhLCB1cHNlbGwsIHNldFNpdGUsIHNldFByZXZpZXd9KSA9PiB7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwiZmF2XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpY29uPVwic3Rhci1maWxsZWRcIi8+XG5cdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcmV2aWV3XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShkYXRhKTtcblx0XHRcdFx0XHRcdFx0c2V0UHJldmlldyh0cnVlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdQcmV2aWV3JywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR7ISB1cHNlbGwgJiZcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbXBvcnRcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKGRhdGEpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0ltcG9ydCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuXHRcdFx0XHR7dXBzZWxsICYmIDxzcGFuIGNsYXNzTmFtZT1cInByby1iYWRnZVwiPntfXygnUHJvJywgJ25ldmUnKX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtzZXRDdXJyZW50U2l0ZSwgc2V0UHJldmlld1N0YXR1c30gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7XG5cdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpLFxuXHRcdHNldFByZXZpZXc6IChzdGF0dXMpID0+IHNldFByZXZpZXdTdGF0dXMoc3RhdHVzKVxuXHR9O1xufSlcbihTdGFydGVyU2l0ZUNhcmQpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTaXRlcyhzaXRlcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NJVEVTJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlc31cblx0XHR9O1xuXHR9LFxuXHRzZXRVcHNlbGxzKHVwc2VsbHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9VUFNFTExTJyxcblx0XHRcdHBheWxvYWQ6IHt1cHNlbGxzfVxuXHRcdH07XG5cdH0sXG5cdHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfQ1VSUkVOVF9FRElUT1InLFxuXHRcdFx0cGF5bG9hZDoge2VkaXRvcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRDdXJyZW50U2l0ZShzaXRlRGF0YSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0ZPQ1VTRURfU0lURScsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZURhdGF9XG5cdFx0fTtcblx0fSxcblx0c2V0UHJldmlld1N0YXR1cyhwcmV2aWV3U3RhdHVzKSB7XG5cdFx0aWYgKHByZXZpZXdTdGF0dXMpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1BSRVZJRVdfU1RBVFVTJyxcblx0XHRcdHBheWxvYWQ6IHtwcmV2aWV3U3RhdHVzfVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzaXRlczogbnVsbCxcblx0dXBzZWxsczogbnVsbCxcblx0ZWRpdG9yOiAnZWxlbWVudG9yJyxcblx0cHJldmlld1N0YXR1czogZmFsc2UsXG5cdGN1cnJlbnRTaXRlOiBudWxsXG59O1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9TSVRFUyc6XG5cdFx0XHRjb25zdCB7c2l0ZXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2l0ZXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1VQU0VMTFMnOlxuXHRcdFx0Y29uc3Qge3Vwc2VsbHN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBzZWxsc1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfQ1VSUkVOVF9FRElUT1InOlxuXHRcdFx0Y29uc3Qge2VkaXRvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlZGl0b3Jcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0ZPQ1VTRURfU0lURSc6XG5cdFx0XHRjb25zdCB7c2l0ZURhdGF9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudFNpdGU6IHNpdGVEYXRhXG5cdFx0XHR9O1xuXHRjYXNlICdTRVRfUFJFVklFV19TVEFUVVMnOlxuXHRcdFx0Y29uc3Qge3ByZXZpZXdTdGF0dXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0cHJldmlld1N0YXR1c1xuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRTaXRlczogKHN0YXRlKSA9PiBzdGF0ZS5zaXRlcyxcblx0Z2V0VXBzZWxsczogKHN0YXRlKSA9PiBzdGF0ZS51cHNlbGxzLFxuXHRnZXRDdXJyZW50RWRpdG9yOiAoc3RhdGUpID0+IHN0YXRlLmVkaXRvcixcblx0Z2V0Q3VycmVudFNpdGU6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFNpdGUsXG5cdGdldFByZXZpZXdTdGF0dXM6IChzdGF0ZSkgPT4gc3RhdGUucHJldmlld1N0YXR1cyxcbn07XG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBJbnB1dEZvcm0gPSAoe3NsdWcsIGxhYmVsLCBwbGFjZWhvbGRlciwgZ2V0T3B0aW9uLCBzZXRUb2FzdCwgY2hhbmdlT3B0aW9ufSkgPT4ge1xuXHRjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoZ2V0T3B0aW9uKHNsdWcpKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdGV4dCc+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17XG5cdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyhzbHVnLCB2YWx1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KHIubWVzc2FnZSA/IHIubWVzc2FnZSA6IGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9PlxuXHRcdFx0XHR7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e3NsdWd9PntsYWJlbH08L2xhYmVsPn1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRpZD17c2x1Z31cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtcblx0XHRcdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2xvYWRpbmcgPyAnaXMtbG9hZGluZycgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2F2ZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdGljb249e2xvYWRpbmcgPyAndXBkYXRlJyA6ICdlZGl0b3ItYnJlYWsnfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldE9wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldE9wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKElucHV0Rm9ybSk7XG5cbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRvZ2dsZSA9ICh7c2x1ZywgbGFiZWwsIGdldE9wdGlvbiwgY2hhbmdlT3B0aW9uLCBzZXRUb2FzdH0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J21vZHVsZS1vcHRpb24gdG9nZ2xlJz5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGNoZWNrZWQ9e2dldE9wdGlvbihzbHVnKX1cblx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKCBzbHVnLCB2YWx1ZSApLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICggci5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3QoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7bG9hZGluZyAmJiA8RGFzaGljb24gc2l6ZT17MTh9IGljb249XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoVG9nZ2xlKTtcblxuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Z2V0fSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NsdWcsIGRhdGF9ID0gcHJvcHM7XG4gIGNvbnN0IHtiYW5uZXIsIG5hbWUsIGRlc2NyaXB0aW9uLCB2ZXJzaW9uLCBhdXRob3J9ID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgWyBhY3Rpb24sIHNldEFjdGlvbiBdID0gdXNlU3RhdGUoZGF0YS5jdGEpO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzdHJpbmdNYXAgPSB7XG4gICAgJ2luc3RhbGwnOiB7c3RhdGljOiBfXygnSW5zdGFsbCcsICduZXZlJyksIHByb2dyZXNzOiBfXygnSW5zdGFsbGluZycsICduZXZlJyl9LFxuICAgICdhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdBY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnQWN0aXZhdGluZycsICduZXZlJyl9LFxuICAgICdkZWFjdGl2YXRlJzoge3N0YXRpYzogX18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0RlYWN0aXZhdGluZycsICduZXZlJyl9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgJ3BsdWdpbicsIHNsdWcgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICA8aW1nIHNyYz17YmFubmVyfSBhbHQ9e19fKCdCYW5uZXIgSW1hZ2UnLCAnbmFtZScpfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e25hbWV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbHVnaW4tZGF0YVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPnthdXRob3J9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBsdWdpbi1hY3Rpb25cIlxuICAgICAgICAgIGlzUHJpbWFyeT17WyAnaW5zdGFsbCcsICdhY3RpdmF0ZScgXS5pbmNsdWRlcyhhY3Rpb24pfVxuICAgICAgICAgIGlzU2Vjb25kYXJ5PXsnZGVhY3RpdmF0ZScgPT09IGFjdGlvbn1cbiAgICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRJblByb2dyZXNzKHRydWUpO1xuICAgICAgICAgICAgaWYgKCdpbnN0YWxsJyA9PT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGluc3RhbGxQbHVnaW4oc2x1ZykudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIHIuc3VjY2Vzcykge1xuXG4gICAgICAgICAgICAgICAgICAvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cbiAgICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXQoZGF0YVthY3Rpb25dLCB0cnVlKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghIHIub2spIHtcblxuICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgnYWN0aXZhdGUnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb24oJ2RlYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBY3Rpb24oJ2FjdGl2YXRlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeyEgaW5Qcm9ncmVzcyAmJiBzdHJpbmdNYXBbYWN0aW9uXS5zdGF0aWN9XG4gICAgICAgICAge2luUHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz5cbiAgICAgICAgICAgICAge3N0cmluZ01hcFthY3Rpb25dLnByb2dyZXNzICsgJy4uLid9XG4gICAgICAgICAgICA8L3NwYW4+KX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGluc3RhbGxQbHVnaW4oc2x1Zykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgd3AudXBkYXRlcy5hamF4KCdpbnN0YWxsLXBsdWdpbicsIHtcbiAgICAgIHNsdWcsXG4gICAgICBzdWNjZXNzOiAocikgPT4ge1xuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiB0cnVlfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcblxuICAgICAgICAvLyBlcnJvckNvZGUsIGVycm9yTWVzc2FnZSBhcmUgcGFyYW1zIG9mIGVyciBpZiB3ZSB0b2FzdC5cbiAgICAgICAgcmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBMaWNlbnNlQ2FyZCBmcm9tICcuL0xpY2Vuc2VDYXJkJztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7VG9nZ2xlQ29udHJvbH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFNpZGViYXIgPSAoe2N1cnJlbnRUYWJ9KSA9PiB7XG5cdGNvbnN0IFsgdHJhY2tpbmcsIHNldFRyYWNraW5nIF0gPSB1c2VTdGF0ZShuZXZlRGFzaC5vcHRpb25zLmxvZ2dlciB8fCBmYWxzZSk7XG5cdGNvbnN0IFsgdG9hc3QsIHNldFRvYXN0IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgdG9hc3RUeXBlLCBzZXRUb2FzdFR5cGUgXSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdHtuZXZlRGFzaC5wcm8gJiYgPExpY2Vuc2VDYXJkIGlzVmlzaWJsZT17J3BybycgPT09IGN1cnJlbnRUYWJ9Lz59XG5cdFx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnTmV2ZSBDb21tdW5pdHknLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdMZWF2ZSB1cyBhIHJldmlldycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0FyZSB5b3UgYXJlIGVuam95aW5nIE5ldmU/IFdlIHdvdWxkIGxvdmUgdG8gaGVhciB5b3VyIGZlZWRiYWNrLicsICduZXZlJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnQ29udHJpYnV0aW5nJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQmVjb21lIGEgY29udHJpYnV0b3IgYnkgb3B0aW5nIGluIHRvIG91ciBhbm9ueW1vdXMgZGF0YSB0cmFja2luZy4gV2UgZ3VhcmFudGVlIG5vIHNlbnNpdGl2ZSBkYXRhIGlzIGNvbGxlY3RlZC4nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTEyMi1uZXZlLXVzYWdlLXRyYWNraW5nXCI+XG5cdFx0XHRcdFx0XHRcdHtfXygnV2hhdCBkbyB3ZSB0cmFjaz8nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dHJhY2tpbmd9XG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FsbG93IEFub255bW91cyBUcmFja2luZycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0c2VuZChuZXZlRGFzaC5hcGkgKyAnL3RvZ2dsZV90cmFja2luZycsIHt2YWx1ZX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdlcnJvcicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCB1cGRhdGUgb3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcoISB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnc3VjY2VzcycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7dG9hc3QgJiZcblx0XHRcdFx0XHQ8VG9hc3QgZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fSB0eXBlPXt0b2FzdFR5cGV9Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hc2lkZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJjb25zdCB7U25hY2tiYXJ9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCBHbG9iYWxTbmFja2JhciA9ICh7dG9hc3QsIHNldFRvYXN0fSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0VG9hc3QobnVsbCk7XG5cdFx0fSwgMzAwMCk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBtZXNzYWdlID0gdG9hc3QoKTtcblx0Y29uc3Qgc3R5bGUgPSB7XG5cdFx0b3BhY2l0eTogbnVsbCA9PT0gbWVzc2FnZSA/IDAgOiAxXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8U25hY2tiYXJcblx0XHRcdFx0Y2xhc3NOYW1lPSdkYXNoLW5vdGljZSdcblx0XHRcdD5cblx0XHRcdFx0eydib29sZWFuJyA9PT0gdHlwZW9mIG1lc3NhZ2UgP1xuXHRcdFx0XHRcdChmYWxzZSA9PT0gbWVzc2FnZSA/XG5cdFx0XHRcdFx0XHRfXygnQ291bGQgbm90IFVwZGF0ZSBPcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRfXygnT3B0aW9uIFVwZGF0ZWQnLCAnbmV2ZScpKSA6XG5cdFx0XHRcdFx0dG9hc3QoKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L1NuYWNrYmFyPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0VG9hc3R9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2FzdDogKCkgPT4gZ2V0VG9hc3QoKVxuXHRcdH07XG5cdH0pXG4pKEdsb2JhbFNuYWNrYmFyKTtcblxuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3RhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRhYnNDb250ZW50ID0gKHtjdXJyZW50VGFiLCBzZXRUYWJ9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RhYi1jb250ZW50JywgJ2NvbHVtbnMnLCBjdXJyZW50VGFiIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0YWJzW2N1cnJlbnRUYWJdLnJlbmRlcihzZXRUYWIpfVxuXHRcdDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFic0NvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFRvYXN0ID0gKHttZXNzYWdlLCBkaXNtaXNzLCB0aW1lLCB0eXBlID0gJ2luZm8nfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpc21pc3MoJycpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fSwgdGltZSB8fCAyMDAwKTtcblx0fSk7XG5cdGNvbnN0IGljb25NYXAgPSB7XG5cdFx0J2luZm8nOiAnaW5mbycsXG5cdFx0J2Vycm9yJzogJ25vJyxcblx0XHQnc3VjY2Vzcyc6ICd5ZXMnLFxuXHRcdCd3YXJuaW5nJzogJ3dhcm5pbmcnXG5cdH07XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RvYXN0JywgJ2NvbXBvbmVudHMtYW5pbWF0ZV9fYXBwZWFyJywgJ2lzLWZyb20tbWlkZGxlJywgdHlwZSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbk1hcFt0eXBlXX0vPlxuXHRcdFx0PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJjb25zdCB7dXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgdXNlT3V0c2lkZUNsaWNrID0gKHJlZiwgY2FsbGJhY2spID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcblx0XHRcdGlmIChyZWYuY3VycmVudCAmJiAhIHJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHR9O1xuXHR9LCBbIHJlZiBdKTtcbn07XG5cbmNvbnN0IE9uQ2xpY2tPdXRzaWRlID0gKHtjaGlsZHJlbiwgYWN0aW9ufSkgPT4ge1xuXHRjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuXHR1c2VPdXRzaWRlQ2xpY2sod3JhcHBlclJlZiwgYWN0aW9uKTtcblxuXHRyZXR1cm4gPGRpdiByZWY9e3dyYXBwZXJSZWZ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbkNsaWNrT3V0c2lkZTtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9Db21wb25lbnRzL0FwcCc7XG5cbmNvbnN0IHtyZWdpc3RlclN0b3JlfSA9IHdwLmRhdGE7XG5jb25zdCB7cmVuZGVyfSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3N0b3JlL3JlZHVjZXInO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuL3N0b3JlL3NlbGVjdG9ycyc7XG5yZWdpc3RlclN0b3JlKCduZXZlLWRhc2hib2FyZCcsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzXG59KTtcblxuaW1wb3J0IG9uYm9hcmRpbmdSZWR1Y2VyIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3JlZHVjZXInO1xuaW1wb3J0IG9uYm9hcmRpbmdBY3Rpb25zIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IG9uYm9hcmRpbmdTZWxlY3RvcnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtb25ib2FyZGluZycsIHtcblx0cmVkdWNlcjogb25ib2FyZGluZ1JlZHVjZXIsXG5cdGFjdGlvbnM6IG9uYm9hcmRpbmdBY3Rpb25zLFxuXHRzZWxlY3RvcnM6IG9uYm9hcmRpbmdTZWxlY3RvcnNcbn0pO1xuXG5jb25zdCBSb290ID0gKCkgPT4gPEFwcC8+O1xucmVuZGVyKFxuXHQ8Um9vdC8+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV2ZS1kYXNoYm9hcmQnKVxuKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHNldFRhYih0YWIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9UQUInLFxuXHRcdFx0cGF5bG9hZDoge3RhYn1cblx0XHR9O1xuXHR9LFxuXHRzZXRTZXR0aW5ncyhvYmplY3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TRVRUSU5HUycsXG5cdFx0XHRwYXlsb2FkOiB7b2JqZWN0fVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhtb2R1bGVTbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7bW9kdWxlU2x1ZzogJ252X3Byb18nICsgbW9kdWxlU2x1ZyArICdfc3RhdHVzJywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlT3B0aW9uKG9wdGlvblNsdWcsIG9wdGlvblZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdDSEFOR0VfTU9EVUxFX09QVElPTicsXG5cdFx0XHRwYXlsb2FkOiB7b3B0aW9uU3RhdHVzOiAnbnZfcHJvXycgKyBvcHRpb25TbHVnLCBvcHRpb25WYWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VMaWNlbnNlVGllcih0aWVyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfTElDRU5TRV9USUVSJyxcblx0XHRcdHBheWxvYWQ6IHt0aWVyfVxuXHRcdH07XG5cdH0sXG5cdHNldFRvYXN0KG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9UT0FTVF9NRVNTQUdFJyxcblx0XHRcdHBheWxvYWQ6IG1lc3NhZ2Vcblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzZXR0aW5nczoge30sXG5cdHRpZXI6IG5ldmVEYXNoLnBybyA/IG5ldmVEYXNoLmxpY2Vuc2UudGllciA6IDAsXG5cdHRvYXN0OiBudWxsLFxuXHRjdXJyZW50VGFiOiAnc3RhcnQnXG59O1xuXG5jb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuaWYgKG51bGwgIT09IGhhc2gpIHtcblx0aW5pdGlhbFN0YXRlLmN1cnJlbnRUYWIgPSBoYXNoO1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9UQUInOlxuXHRcdFx0Y29uc3Qge3RhYn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRjdXJyZW50VGFiOiB0YWJcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1NFVFRJTkdTJzpcblx0XHRcdGNvbnN0IHtvYmplY3R9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IG9iamVjdFxuXHRcdFx0fTtcblx0XHRjYXNlICdUT0dHTEVfTU9EVUxFJzpcblx0XHRcdGNvbnN0IHttb2R1bGVTbHVnLCB2YWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFttb2R1bGVTbHVnXTogdmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdDSEFOR0VfTU9EVUxFX09QVElPTic6XG5cdFx0XHRsZXQge29wdGlvblN0YXR1cywgb3B0aW9uVmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbb3B0aW9uU3RhdHVzXTogb3B0aW9uVmFsdWVcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfTElDRU5TRV9USUVSJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0aWVyOiBhY3Rpb24ucGF5bG9hZC50aWVyXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9UT0FTVF9NRVNTQUdFJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0b2FzdDogYWN0aW9uLnBheWxvYWRcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0TW9kdWxlU3RhdHVzOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWcgKyAnX3N0YXR1cyddLFxuXHRnZXRPcHRpb246IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1Z10sXG5cdGdldExpY2Vuc2VUaWVyOiAoc3RhdGUpID0+IHN0YXRlLnRpZXIsXG5cdGdldFRvYXN0OiAoc3RhdGUpID0+IHN0YXRlLnRvYXN0LFxuXHRnZXRUYWI6IChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFRhYlxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5pbXBvcnQgRnJlZVBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVBybyc7XG5cbmNvbnN0IGdldFVybFBhcmFtID0gKHBhcmFtKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cblx0cmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xufTtcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG5cdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0aWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuXHRpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuXHQnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6IChzZXRUYWIpID0+IDxQbHVnaW5zLz59LFxuXHQnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6IChzZXRUYWIpID0+IDxDaGFuZ2Vsb2cvPn0sXG5cdCdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcblx0J2ZyZWUtcHJvJzoge2xhYmVsOiAnRnJlZSB2cyBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxGcmVlUHJvLz59XG59O1xuXG5pZiAobmV2ZURhc2gucHJvKSB7XG5cdHRhYnMucHJvID0ge2xhYmVsOiAnTmV2ZSBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxQcm8vPn07XG5cdGRlbGV0ZSAodGFic1snZnJlZS1wcm8nXSk7XG59XG5cblxuZXhwb3J0IHtcblx0Z2V0VXJsUGFyYW0sXG5cdGFkZFVybEhhc2gsXG5cdGdldFRhYkhhc2gsXG5cdHRhYnNcbn07XG4iLCJjb25zdCB7X199ID0gd3AuaTE4bjtcblxuZnVuY3Rpb24gaXNWYWxpZChvcHRpb24sIG9wdGlvbnNBcnJheSkge1xuXHRpZiAoJ252X3Byb190eXBla2l0X2lkJyA9PT0gb3B0aW9uKSB7XG5cdFx0aWYgKCEgb3B0aW9uc0FycmF5WyduZXZlX3Byb190eXBla2l0X2RhdGEnXSkge1xuXHRcdFx0cmV0dXJuIHttZXNzYWdlOiBfXygnVHlwZWtpdCBQcm9qZWN0IElEIGlzIGludmFsaWQnLCAnbmV2ZScpLCBzdWNjZXNzOiBmYWxzZX07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcHRpb24gPSAob3B0aW9uLCB2YWx1ZSwgbW9kdWxlID0gZmFsc2UpID0+IHtcblx0b3B0aW9uID0gJ252X3Byb18nICsgb3B0aW9uICsgKG1vZHVsZSA/ICdfc3RhdHVzJyA6ICcnKTtcblx0Y29uc3QgbW9kZWwgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncyh7XG5cdFx0W29wdGlvbl06IHZhbHVlXG5cdH0pO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdG1vZGVsLnNhdmUoKS50aGVuKChyKSA9PiB7XG5cdFx0XHRpZiAoISByIHx8ICEgcltvcHRpb25dID09PSB2YWx1ZSkge1xuXHRcdFx0XHRyZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZShpc1ZhbGlkKG9wdGlvbiwgcikpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kID0gKHJvdXRlLCBkYXRhLCBzaW1wbGUgPSBmYWxzZSkgPT4ge1xuXHRyZXR1cm4gcmVxdWVzdERhdGEocm91dGUsIHNpbXBsZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHJvdXRlLCBzaW1wbGUgPSBmYWxzZSkgPT4ge1xuXHRyZXR1cm4gcmVxdWVzdERhdGEocm91dGUsIHNpbXBsZSwge30sICdHRVQnKTtcbn07XG5cbmNvbnN0IHJlcXVlc3REYXRhID0gYXN5bmMgKHJvdXRlLCBzaW1wbGUgPSBmYWxzZSwgZGF0YSA9IHt9LCBtZXRob2QgPSAnUE9TVCcpID0+IHtcblx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRtZXRob2Q6IG1ldGhvZCxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdCd4LXdwLW5vbmNlJzogbmV2ZURhc2gubm9uY2Vcblx0XHR9XG5cdH07XG5cblx0aWYgKCdQT1NUJyA9PT0gbWV0aG9kKSB7XG5cdFx0b3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdH1cblxuXHRyZXR1cm4gYXdhaXQgZmV0Y2gocm91dGUsIG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0cmV0dXJuIHNpbXBsZSA/IHJlc3BvbnNlIDogcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==