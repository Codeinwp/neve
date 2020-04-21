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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdmlzaWJpbGl0eS1zZW5zb3IvZGlzdC92aXNpYmlsaXR5LXNlbnNvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL01vZHVsZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9FZGl0b3JTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvSW1wb3J0TW9kYWxFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydE1vZGFsTm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL0ltcG9ydFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL01pZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1ByZXZpZXdGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1N0YXJ0ZXJTaXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zaXRlLWltcG9ydC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ3cCIsImVsZW1lbnQiLCJEYXNoaWNvbiIsImNvbXBvbmVudHMiLCJBY2NvcmRpb24iLCJwcm9wcyIsImlzT3BlbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsImNsYXNzZXMiLCJjbGFzc25hbWVzIiwiaGVpZ2h0IiwiZGF0YSIsIndpdGhEaXNwYXRjaCIsIndpdGhTZWxlY3QiLCJjb21wb3NlIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJBcHAiLCJzZXRTZXR0aW5ncyIsInRvYXN0IiwiY3VycmVudFRhYiIsInNldFRhYiIsImlzT25ib2FyZGluZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0dGluZ3MiLCJhcGkiLCJsb2FkUHJvbWlzZSIsInRoZW4iLCJtb2RlbHMiLCJTZXR0aW5ncyIsImZldGNoIiwiciIsIndyYXBDbGFzc2VzIiwiZGlzcGF0Y2giLCJvYmplY3QiLCJ0YWIiLCJzZWxlY3QiLCJnZXRUb2FzdCIsImdldFRhYiIsImdldE9uYm9hcmRpbmdTdGF0dXMiLCJDYXJkIiwiaWNvbiIsImljb25BbHQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZXMiLCJfXyIsImkxOG4iLCJDaGFuZ2Vsb2ciLCJuZXZlRGFzaCIsImNoYW5nZWxvZyIsImNoYW5nZWxvZ1BybyIsInNob3dGb3JQcm8iLCJzZXRTaG93Rm9yUHJvIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImRhdGUiLCJ2ZXJzaW9uIiwidHdlYWtzIiwiZml4ZXMiLCJmZWF0dXJlcyIsImZlYXR1cmUiLCJmaXgiLCJ0d2VhayIsIkJ1dHRvbiIsIlBybyIsImZlYXR1cmVEYXRhIiwiaXRlbSIsInVwZ3JhZGVVUkwiLCJIZWxwIiwiZG9jc1VSTCIsInN1cHBvcnRVUkwiLCJ3aGl0ZUxhYmVsIiwiYXNzZXRzIiwic3RyaW5ncyIsInN1cHBvcnRDYXJkRGVzY3JpcHRpb24iLCJkb2NzQ2FyZERlc2NyaXB0aW9uIiwiYWdlbmN5VVJMIiwiSGVhZGVyIiwicGx1Z2lucyIsIk9iamVjdCIsImtleXMiLCJzbHVnIiwibW9kdWxlcyIsImlkIiwiU3RhcnQiLCJyZW5kZXJMZWZ0Q29sIiwiaGlkZVN0YXJ0ZXJTaXRlcyIsInRhYnMiLCJzdGFydGVyU2l0ZXNDYXJkRGVzY3JpcHRpb24iLCJyZW5kZXJDdXN0b21pemVyTGlua3MiLCJsaW5rcyIsImN1c3RvbWl6ZXJTaG9ydGN1dHMiLCJzcGxpdCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFydHMiLCJzbGljZSIsImNvbHVtbiIsImxpbmsiLCJ0ZXh0IiwiU3RhcnRlclNpdGVzIiwic2l0ZXMiLCJzZXRTaXRlcyIsInNldFVwc2VsbHMiLCJzZXRNaWdyYXRpb25EYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldCIsIm9uYm9hcmRpbmciLCJyb290Iiwic3VjY2VzcyIsInJlbW90ZSIsInVwc2VsbCIsIm1pZ3JhdGVfZGF0YSIsInVwc2VsbHMiLCJtaWdyYXRpb25EYXRhIiwiZ2V0U2l0ZXMiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJzaG93VG9vbHRpcCIsImhpZGVUb29sdGlwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzaCIsImdldFRhYkhhc2giLCJyZW5kZXJIZWFkIiwicmVuZGVyTmF2aWdhdGlvbiIsImhlYWRlciIsImFkZFVybEhhc2giLCJsYWJlbCIsIkxpY2Vuc2VDYXJkIiwiaXNWaXNpYmxlIiwiY2hhbmdlVGllciIsImxpY2Vuc2UiLCJwcm9BcGkiLCJ2YWxpZCIsImtleSIsInNldEtleSIsInN0YXR1cyIsInNldFN0YXR1cyIsInNldFZhbGlkIiwiZXhwaXJhdGlvbiIsInNldEV4cGlyYXRpb24iLCJzZXRUb2FzdCIsInRvYXN0VHlwZSIsInNldFRvYXN0VHlwZSIsInRvZ2dsZUxpY2Vuc2UiLCJ0b0RvIiwic2VuZCIsImFjdGlvbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsInRpZXIiLCJoaWRlTGljZW5zZSIsImxpY2Vuc2VDYXJkSGVhZGluZyIsImxpY2Vuc2VDYXJkRGVzY3JpcHRpb24iLCJfX2h0bWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcGxhY2UiLCJpbmNsdWRlcyIsImNoYW5nZUxpY2Vuc2VUaWVyIiwibmV3VGllciIsIkxvYWRpbmciLCJBcnJheSIsImZyb20iLCJub3RpZmljYXRpb25zIiwiVG9nZ2xlQ29udHJvbCIsIk1vZHVsZUNhcmQiLCJjaGFuZ2VNb2R1bGVTdGF0dXMiLCJnZXRNb2R1bGVTdGF0dXMiLCJuaWNlbmFtZSIsImF2YWlsYWJpbGl0eUxldmVsIiwib3B0aW9ucyIsIm9yZGVyIiwiZG9jdW1lbnRhdGlvbiIsInJlcXVpcmVkX2FjdGlvbnMiLCJ1cGdyYWRlTGlua3MiLCJyZW5kZXJPcHRpb25zQWNjb3JkaW9ucyIsImdyb3VwIiwib3B0aW9uU2x1ZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNoYW5nZU9wdGlvbiIsInVybCIsImdldExpY2Vuc2VUaWVyIiwiTm90aWZpY2F0aW9uIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwiY3RhIiwidXBkYXRlIiwiaW5Qcm9ncmVzcyIsInNldEluUHJvZ3Jlc3MiLCJkb25lIiwic2V0RG9uZSIsInVwZGF0ZUVudGl0eSIsImFyZ3MiLCJleGVjdXRlQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGVzIiwiYWpheCIsInBhdGgiLCJwbHVnaW4iLCJOb3RpZmljYXRpb25zIiwiUG9wb3ZlciIsIkVkaXRvclNlbGVjdG9yIiwib25TZWFyY2giLCJlZGl0b3IiLCJzZXRDdXJyZW50RWRpdG9yIiwibmljZU5hbWUiLCJ0b2dnbGVEcm9wZG93biIsImdldEN1cnJlbnRFZGl0b3IiLCJNb2RhbCIsIkltcG9ydE1vZGFsIiwic2V0TW9kYWwiLCJzZXRTaXRlIiwic2l0ZURhdGEiLCJjb250ZW50IiwiY3VzdG9taXplciIsIndpZGdldHMiLCJnZW5lcmFsIiwic2V0R2VuZXJhbCIsInBsdWdpbnNQcm9ncmVzcyIsInNldFBsdWdpbnNQcm9ncmVzcyIsImNvbnRlbnRQcm9ncmVzcyIsInNldENvbnRlbnRQcm9ncmVzcyIsImN1c3RvbWl6ZXJQcm9ncmVzcyIsInNldEN1c3RvbWl6ZXJQcm9ncmVzcyIsIndpZGdldHNQcm9ncmVzcyIsInNldFdpZGdldHNQcm9ncmVzcyIsImZyb250UGFnZUlEIiwic2V0RnJvbnRQYWdlSUQiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiaW1wb3J0aW5nIiwic2V0SW1wb3J0aW5nIiwicGx1Z2luT3B0aW9ucyIsInNldFBsdWdpbk9wdGlvbnMiLCJnZXRQbHVnaW5PcHRpb25zIiwibWFuZGF0b3J5Iiwib3B0aW9uYWwiLCJkZWZhdWx0T2ZmIiwicmVuZGVyTm90ZSIsInJlbmRlck9wdGlvbnMiLCJyZW5kZXJQbHVnaW5zIiwiYWxsUGx1Z2lucyIsInJ1bkltcG9ydCIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsInJ1bkltcG9ydENvbnRlbnQiLCJpbnN0YWxsUGx1Z2lucyIsImhhbmRsZUVycm9yIiwicnVuSW1wb3J0Q3VzdG9taXplciIsImltcG9ydENvbnRlbnQiLCJjb250ZW50RmlsZSIsInNvdXJjZSIsImZyb250UGFnZSIsInNob3BQYWdlcyIsImRlbW9TbHVnIiwicnVuSW1wb3J0V2lkZ2V0cyIsImltcG9ydE1vZHMiLCJpbXBvcnREb25lIiwiaW1wb3J0V2lkZ2V0cyIsInN0ZXAiLCJjb2RlIiwiY2xvc2VNb2RhbCIsImRpc21pc3NTaXRlRGF0YSIsImFsbE9wdGlvbnNPZmYiLCJldmVyeSIsImsiLCJlZGl0TGlua01hcCIsImhvbWVVcmwiLCJlZGl0TGluayIsImdldEN1cnJlbnRTaXRlIiwic2V0SW1wb3J0TW9kYWxTdGF0dXMiLCJzZXRDdXJyZW50U2l0ZSIsIkltcG9ydE1vZGFsRXJyb3IiLCJ0cm91Ymxlc2hvb3RpbmciLCJzdXBwb3J0IiwibG9nVXJsIiwiSW1wb3J0TW9kYWxOb3RlIiwiZXh0ZXJuYWwiLCJJbXBvcnRTdGVwcGVyIiwicHJvZ3Jlc3MiLCJ3aWxsRG8iLCJzdGVwc01hcCIsIk9uYm9hcmRpbmciLCJwcmV2aWV3T3BlbiIsImN1cnJlbnRTaXRlRGF0YSIsImltcG9ydE1vZGFsIiwiY2FuY2VsT25ib2FyZGluZyIsIm1pZ3JhdGlvbiIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJtYXhTaG93biIsInNldE1heFNob3duIiwiZmlsdGVyU2l0ZXMiLCJ2YWx1ZXMiLCJmdXNlIiwiRnVzZSIsImluY2x1ZGVTY29yZSIsInNlYXJjaCIsImdldEFsbFNpdGVzIiwic2l0ZXNEYXRhIiwidXBzZWxsc0RhdGEiLCJyZW5kZXJTaXRlcyIsImFsbERhdGEiLCJzaXRlIiwiZ2V0U2l0ZU5hdiIsInByZXYiLCJhbGxTaXRlcyIsInBvc2l0aW9uIiwiaW5kZXhPZiIsInJlbmRlck1pZ3JhdGlvbiIsInN0YXJ0ZXJTaXRlc1RhYkRlc2NyaXB0aW9uIiwicXVlcnkiLCJ3aWR0aCIsImRpc3BsYXkiLCJzZXRPbmJvYXJkaW5nU3RhdGUiLCJnZXRVcHNlbGxzIiwiZ2V0UHJldmlld1N0YXR1cyIsImdldEltcG9ydE1vZGFsU3RhdHVzIiwiZ2V0TWlncmF0aW9uRGF0YSIsIk1pZ3JhdGlvbiIsImRpc21pc3NNaWdyYXRpb24iLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJtaWdyYXRpbmciLCJzZXRNaWdyYXRpbmciLCJzdGFydE1pZ3JhdGlvbiIsIm1hbmRhdG9yeV9wbHVnaW5zIiwicmVkdWNlIiwicCIsInRlbXBsYXRlIiwidGVtcGxhdGVfbmFtZSIsInJlbmRlck1vZGFsIiwidGhlbWVfbmFtZSIsImhlYWRpbmciLCJzY3JlZW5zaG90IiwidGhlbWVfbW9kIiwiUHJldmlld0ZyYW1lIiwibmV4dCIsInNldFByZXZpZXciLCJzZXRQcmV2aWV3U3RhdHVzIiwiU3RhcnRlclNpdGVDYXJkIiwicGF5bG9hZCIsInByZXZpZXdTdGF0dXMiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpbXBvcnRNb2RhbFN0YXR1cyIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFNpdGUiLCJJbnB1dEZvcm0iLCJnZXRPcHRpb24iLCJzZXRWYWx1ZSIsImNoYW5nZVNldHRpbmciLCJnZXRQcm9PcHRpb24iLCJjaGFuZ2VNb2R1bGVPcHRpb24iLCJUb2dnbGUiLCJiYW5uZXIiLCJuYW1lIiwiYXV0aG9yIiwic2V0QWN0aW9uIiwic3RyaW5nTWFwIiwiaW5zdGFsbFBsdWdpbiIsIm9rIiwiYWxpZ25JdGVtcyIsImVyciIsIlNpZGViYXIiLCJsb2dnZXJWYWx1ZSIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwib25ib2FyZGluZ1JlZHVjZXIiLCJvbmJvYXJkaW5nQWN0aW9ucyIsIm9uYm9hcmRpbmdTZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGVTbHVnIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInByb1RhYlRpdGxlIiwib3B0aW9uIiwibW9kdWxlIiwibW9kZWwiLCJzYXZlIiwiaXNWYWxpZCIsInJvdXRlIiwic2ltcGxlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9wdGlvbnNBcnJheSIsInBsdWdpbkFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUNBLFdBQVcsa0NBQWtDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBd0MsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QXVEbUUsZUFBTyxFQUFFO0FBQWhFLE9BQVA7QUFDQTtBQUNEOztBQUNELFNBQU87QUFBQ0EsV0FBTyxFQUFFO0FBQVYsR0FBUDtBQUNBLENBUEQsQzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNNEosYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDbFEsSUFBRCxFQUFVO0FBQ3RDLFNBQU84SSxrREFBSSxDQUFDeEcsUUFBUSxDQUFDOEQsVUFBVCxDQUFvQkMsSUFBcEIsR0FBMkIsaUJBQTVCLEVBQStDckcsSUFBL0MsQ0FBWDtBQUNBLENBRk07QUFJQSxJQUFNZ1EsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2hRLElBQUQsRUFBVTtBQUNuQyxTQUFPOEksa0RBQUksQ0FBQ3hHLFFBQVEsQ0FBQzhELFVBQVQsQ0FBb0JDLElBQXBCLEdBQTJCLG9CQUE1QixFQUFrRHJHLElBQWxELENBQVg7QUFDQSxDQUZNO0FBSUEsSUFBTXNQLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzJLLFdBQUQsRUFBaUI7QUFDOUMsU0FBT25SLGtEQUFJLENBQUN4RyxRQUFRLENBQUM4RCxVQUFULENBQW9CQyxJQUFwQixHQUEyQixrQkFBNUIsRUFBZ0Q0VCxXQUFoRCxDQUFYO0FBQ0EsQ0FGTTtBQUlBLElBQU14SyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUN6UCxJQUFELEVBQVU7QUFDdEMsU0FBTzhJLGtEQUFJLENBQUN4RyxRQUFRLENBQUM4RCxVQUFULENBQW9CQyxJQUFwQixHQUEyQixpQkFBNUIsRUFBK0NyRyxJQUEvQyxDQUFYO0FBQ0EsQ0FGTSxDOzs7Ozs7Ozs7OztBQ2ZQLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6Ii4vYnVpbGQvYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogRnVzZS5qcyB2NS4xLjAgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBiaXRhcFNjb3JlKFxuICBwYXR0ZXJuLFxuICB7IGVycm9ycyA9IDAsIGN1cnJlbnRMb2NhdGlvbiA9IDAsIGV4cGVjdGVkTG9jYXRpb24gPSAwLCBkaXN0YW5jZSA9IDEwMCB9XG4pIHtcbiAgY29uc3QgYWNjdXJhY3kgPSBlcnJvcnMgLyBwYXR0ZXJuLmxlbmd0aDtcbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gbWF0Y2hlZEluZGljZWQobWF0Y2htYXNrID0gW10sIG1pbk1hdGNoQ2hhckxlbmd0aCA9IDEpIHtcbiAgbGV0IG1hdGNoZWRJbmRpY2VzID0gW107XG4gIGxldCBzdGFydCA9IC0xO1xuICBsZXQgZW5kID0gLTE7XG4gIGxldCBpID0gMDtcblxuICBmb3IgKGxldCBsZW4gPSBtYXRjaG1hc2subGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaG1hc2tbaV07XG4gICAgaWYgKG1hdGNoICYmIHN0YXJ0ID09PSAtMSkge1xuICAgICAgc3RhcnQgPSBpO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoICYmIHN0YXJ0ICE9PSAtMSkge1xuICAgICAgZW5kID0gaSAtIDE7XG4gICAgICBpZiAoZW5kIC0gc3RhcnQgKyAxID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgICAgICBtYXRjaGVkSW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgbWF0Y2hlZEluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZEluZGljZXNcbn1cblxuZnVuY3Rpb24gYml0YXBTZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IDEwMCxcbiAgICB0aHJlc2hvbGQgPSAwLjYsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBmYWxzZSxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSAxLFxuICAgIGluY2x1ZGVNYXRjaGVzID0gZmFsc2VcbiAgfVxuKSB7XG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gdGV4dC5pbmRleE9mKHBhdHRlcm4sIGV4cGVjdGVkTG9jYXRpb24pO1xuXG4gIC8vIGEgbWFzayBvZiB0aGUgbWF0Y2hlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0TGVuOyBpICs9IDEpIHtcbiAgICBtYXRjaE1hc2tbaV0gPSAwO1xuICB9XG5cbiAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICBsZXQgc2NvcmUgPSBiaXRhcFNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogMCxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlXG4gICAgfSk7XG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcblxuICAgIC8vIFdoYXQgYWJvdXQgaW4gdGhlIG90aGVyIGRpcmVjdGlvbj8gKHNwZWVkIHVwKVxuICAgIGJlc3RMb2NhdGlvbiA9IHRleHQubGFzdEluZGV4T2YocGF0dGVybiwgZXhwZWN0ZWRMb2NhdGlvbiArIHBhdHRlcm5MZW4pO1xuXG4gICAgaWYgKGJlc3RMb2NhdGlvbiAhPT0gLTEpIHtcbiAgICAgIGxldCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IDAsXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogYmVzdExvY2F0aW9uLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSk7XG4gICAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIDw9IDMxID8gcGF0dGVybkxlbiAtIDEgOiAzMCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgIGVycm9yczogaSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLFxuICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICBkaXN0YW5jZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXNcbiAgICAgID8gdGV4dExlblxuICAgICAgOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG5cbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG5cbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjaGFyTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSAxO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gYml0YXBTY29yZShwYXR0ZXJuLCB7XG4gICAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRoaXMgbWF0Y2ggd2lsbCBhbG1vc3QgY2VydGFpbmx5IGJlIGJldHRlciB0aGFuIGFueSBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgLy8gQnV0IGNoZWNrIGFueXdheS5cbiAgICAgICAgaWYgKGZpbmFsU2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICAgIC8vIEluZGVlZCBpdCBpc1xuICAgICAgICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBmaW5hbFNjb3JlO1xuICAgICAgICAgIGJlc3RMb2NhdGlvbiA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIEFscmVhZHkgcGFzc2VkIGBsb2NgLCBkb3duaGlsbCBmcm9tIGhlcmUgb24gaW4uXG4gICAgICAgICAgaWYgKGJlc3RMb2NhdGlvbiA8PSBleHBlY3RlZExvY2F0aW9uKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gcGFzc2luZyBgYmVzdExvY2F0aW9uYCwgZG9uJ3QgZXhjZWVkIG91ciBjdXJyZW50IGRpc3RhbmNlIGZyb20gYGV4cGVjdGVkTG9jYXRpb25gLlxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgMiAqIGV4cGVjdGVkTG9jYXRpb24gLSBiZXN0TG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm8gaG9wZSBmb3IgYSAoYmV0dGVyKSBtYXRjaCBhdCBncmVhdGVyIGVycm9yIGxldmVscy5cbiAgICBjb25zdCBzY29yZSA9IGJpdGFwU2NvcmUocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZVxuICAgIH0pO1xuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc01hdGNoOiBiZXN0TG9jYXRpb24gPj0gMCxcbiAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgIHNjb3JlOiAhZmluYWxTY29yZSA/IDAuMDAxIDogZmluYWxTY29yZVxuICB9O1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgIHJlc3VsdC5tYXRjaGVkSW5kaWNlcyA9IG1hdGNoZWRJbmRpY2VkKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcbiAgbGV0IGxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtYXNrW3BhdHRlcm4uY2hhckF0KGkpXSA9IDA7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbWFza1twYXR0ZXJuLmNoYXJBdChpKV0gfD0gMSA8PCAobGVuIC0gaSAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn1cblxuLy8gTWFjaGluZSB3b3JkIHNpemVcbmNvbnN0IE1BWF9CSVRTID0gMzI7XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICAvLyBBcHByb3hpbWF0ZWx5IHdoZXJlIGluIHRoZSB0ZXh0IGlzIHRoZSBwYXR0ZXJuIGV4cGVjdGVkIHRvIGJlIGZvdW5kP1xuICAgICAgbG9jYXRpb24gPSAwLFxuICAgICAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAgICAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gICAgICAvLyB3b3VsZCBzY29yZSBhcyBhIGNvbXBsZXRlIG1pc21hdGNoLiBBIGRpc3RhbmNlIG9mICcwJyByZXF1aXJlcyB0aGUgbWF0Y2ggYmUgYXRcbiAgICAgIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAgICAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gICAgICBkaXN0YW5jZSA9IDEwMCxcbiAgICAgIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAgICAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgICAgIHRocmVzaG9sZCA9IDAuNixcbiAgICAgIC8vIEluZGljYXRlcyB3aGV0aGVyIGNvbXBhcmlzb25zIHNob3VsZCBiZSBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgICAgLy8gV2hlbiB0cnVlLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgICAgIC8vIG1hdGNoIGlzIGZvdW5kIGJlZm9yZSB0aGUgZW5kIG9mIHRoZSBzYW1lIGlucHV0LlxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBmYWxzZSxcbiAgICAgIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gMSxcblxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBmYWxzZVxuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICB9O1xuXG4gICAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHtNQVhfQklUU30uYClcbiAgICB9XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucGF0dGVybkFscGhhYmV0ID0gcGF0dGVybkFscGhhYmV0KHRoaXMucGF0dGVybik7XG4gIH1cblxuICBzZWFyY2hJbih2YWx1ZSkge1xuICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hJblN0cmluZyh0ZXh0KVxuICB9XG5cbiAgc2VhcmNoSW5TdHJpbmcodGV4dCkge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhhY3QgbWF0Y2hcbiAgICBpZiAodGhpcy5wYXR0ZXJuID09PSB0ZXh0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICBzY29yZTogMFxuICAgICAgfTtcblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5tYXRjaGVkSW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGhcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBiaXRhcFNlYXJjaCh0ZXh0LCB0aGlzLnBhdHRlcm4sIHRoaXMucGF0dGVybkFscGhhYmV0LCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpbmNsdWRlTWF0Y2hlc1xuICAgIH0pXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG4vLyBNYXRjaCB0eXBlOiBleGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgaW5jbHVkZSBgZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uY2hhckF0KDApID09IFwiJ1wiO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigxKTtcblxuY29uc3QgbWF0Y2ggPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUocGF0dGVybik7XG4gIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHNhbml0aXplZFBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gaW5kZXggPiAtMTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGV4YWN0TWF0Y2ggPSB7XG4gIGlzRm9yUGF0dGVybixcbiAgc2FuaXRpemUsXG4gIG1hdGNoXG59O1xuXG4vLyBUb2tlbjogIWZpcmVcbi8vIE1hdGNoIHR5cGU6IGludmVyc2UtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBmaXJlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kMSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdCgwKSA9PSAnISc7XG5cbmNvbnN0IHNhbml0aXplJDEgPSAocGF0dGVybikgPT4gcGF0dGVybi5zdWJzdHIoMSk7XG5cbmNvbnN0IG1hdGNoJDEgPSAocGF0dGVybiwgdGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRQYXR0ZXJuID0gc2FuaXRpemUkMShwYXR0ZXJuKTtcbiAgY29uc3QgaXNNYXRjaCA9IHRleHQuaW5kZXhPZihzYW5pdGl6ZWRQYXR0ZXJuKSA9PT0gLTE7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBpbnZlcnNlRXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kMSxcbiAgc2FuaXRpemU6IHNhbml0aXplJDEsXG4gIG1hdGNoOiBtYXRjaCQxXG59O1xuXG4vLyBUb2tlbjogXmZpbGVcbi8vIE1hdGNoIHR5cGU6IHByZWZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgZmlsZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDIgPSAocGF0dGVybikgPT4gcGF0dGVybi5jaGFyQXQoMCkgPT0gJ14nO1xuXG5jb25zdCBzYW5pdGl6ZSQyID0gKHBhdHRlcm4pID0+IHBhdHRlcm4uc3Vic3RyKDEpO1xuXG5jb25zdCBtYXRjaCQyID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDIocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgoc2FuaXRpemVkUGF0dGVybik7XG5cbiAgcmV0dXJuIHtcbiAgICBpc01hdGNoLFxuICAgIHNjb3JlOiAwXG4gIH1cbn07XG5cbnZhciBwcmVmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQyLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMixcbiAgbWF0Y2g6IG1hdGNoJDJcbn07XG5cbi8vIFRva2VuOiAhXmZpcmVcbi8vIE1hdGNoIHR5cGU6IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoXG4vLyBEZXNjcmlwdGlvbjogSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZmlyZWBcblxuY29uc3QgaXNGb3JQYXR0ZXJuJDMgPSAocGF0dGVybikgPT5cbiAgcGF0dGVybi5jaGFyQXQoMCkgPT0gJyEnICYmIHBhdHRlcm4uY2hhckF0KDEpID09ICdeJztcblxuY29uc3Qgc2FuaXRpemUkMyA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigyKTtcblxuY29uc3QgbWF0Y2gkMyA9IChwYXR0ZXJuLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFBhdHRlcm4gPSBzYW5pdGl6ZSQzKHBhdHRlcm4pO1xuICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VQcmVmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQzLFxuICBzYW5pdGl6ZTogc2FuaXRpemUkMyxcbiAgbWF0Y2g6IG1hdGNoJDNcbn07XG5cbi8vIFRva2VuOiAuZmlsZSRcbi8vIE1hdGNoIHR5cGU6IHN1ZmZpeC1leGFjdC1tYXRjaFxuLy8gRGVzY3JpcHRpb246IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5maWxlYFxuXG5jb25zdCBpc0ZvclBhdHRlcm4kNCA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuLmxlbmd0aCAtIDEpID09ICckJztcblxuY29uc3Qgc2FuaXRpemUkNCA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cigwLCBwYXR0ZXJuLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBtYXRjaCQ0ID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDQocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHNhbml0aXplZFBhdHRlcm4pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNYXRjaCxcbiAgICBzY29yZTogMFxuICB9XG59O1xuXG52YXIgc3VmZml4RXhhY3RNYXRjaCA9IHtcbiAgaXNGb3JQYXR0ZXJuOiBpc0ZvclBhdHRlcm4kNCxcbiAgc2FuaXRpemU6IHNhbml0aXplJDQsXG4gIG1hdGNoOiBtYXRjaCQ0XG59O1xuXG4vLyBUb2tlbjogIS5maWxlJFxuLy8gTWF0Y2ggdHlwZTogaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2hcbi8vIERlc2NyaXB0aW9uOiBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmZpbGVgXG5cbmNvbnN0IGlzRm9yUGF0dGVybiQ1ID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uY2hhckF0KDApID09ICchJyAmJiBwYXR0ZXJuLmNoYXJBdChwYXR0ZXJuLmxlbmd0aCAtIDEpID09ICckJztcblxuY29uc3Qgc2FuaXRpemUkNSA9IChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnN1YnN0cmluZygxLCBwYXR0ZXJuLmxlbmd0aCAtIDEpO1xuXG5jb25zdCBtYXRjaCQ1ID0gKHBhdHRlcm4sIHRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkUGF0dGVybiA9IHNhbml0aXplJDUocGF0dGVybik7XG4gIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5lbmRzV2l0aChzYW5pdGl6ZWRQYXR0ZXJuKTtcblxuICByZXR1cm4ge1xuICAgIGlzTWF0Y2gsXG4gICAgc2NvcmU6IDBcbiAgfVxufTtcblxudmFyIGludmVyc2VTdWZmaXhFeGFjdE1hdGNoID0ge1xuICBpc0ZvclBhdHRlcm46IGlzRm9yUGF0dGVybiQ1LFxuICBzYW5pdGl6ZTogc2FuaXRpemUkNSxcbiAgbWF0Y2g6IG1hdGNoJDVcbn07XG5cbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWUpID0+XG4gICFBcnJheS5pc0FycmF5XG4gICAgPyBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuLy8gQWRhcHRlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9mNGNhMzk2YTc5NjQzNTQyMmJkNGZkNDFmYWRiZDIyNWVkZGRmMTc1Ly5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IGJhc2VUb1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgbGV0IHJlc3VsdCA9IHZhbHVlICsgJyc7XG4gIHJldHVybiByZXN1bHQgPT0gJzAnICYmIDEgLyB2YWx1ZSA9PSAtSU5GSU5JVFkgPyAnLTAnIDogcmVzdWx0XG59O1xuXG5jb25zdCB0b1N0cmluZyA9ICh2YWx1ZSkgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSkpO1xuXG5jb25zdCBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxuY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG5cbmNvbnN0IGlzRGVmaW5lZCA9ICh2YWx1ZSkgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5jb25zdCBxdWVyeWZ5ID0gKHBhdHRlcm4pID0+XG4gIHBhdHRlcm4uc3BsaXQoJ3wnKS5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpLnNwbGl0KC8gKy9nKSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgbWF0Y2ggYGpzY3JpcHRgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSB9ID0gb3B0aW9ucztcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIEEgPHBhdHRlcm4+OjxCaXRhcFNlYXJjaD4ga2V5LXZhbHVlIHBhaXIgZm9yIG9wdGltaXppbmcgc2VhcmNoaW5nXG4gICAgdGhpcy5fZnV6enlDYWNoZSA9IHt9O1xuXG4gICAgaWYgKGlzU3RyaW5nKHBhdHRlcm4pICYmIHBhdHRlcm4udHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlmeSh0aGlzLnBhdHRlcm4pO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCF0aGlzLnF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGV4dCA9IHZhbHVlLiQ7XG5cbiAgICB0ZXh0ID0gdGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSA/IHRleHQgOiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcXVlcnlbaV07XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIG1hdGNoRm91bmQgPSB0cnVlO1xuXG4gICAgICBmb3IgKGxldCBqID0gMCwgcExlbiA9IHBhcnRzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBsZXQgdG9rZW4gPSBwYXJ0c1tqXTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5fc2VhcmNoKHRva2VuLCB0ZXh0KTtcbiAgICAgICAgaWYgKCFyZXN1bHQuaXNNYXRjaCkge1xuICAgICAgICAgIC8vIEFORCBjb25kaXRpb24sIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb24gdG8gbmV4dCBwYXJ0XG4gICAgICAgICAgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cbiAgICAgIGlmIChtYXRjaEZvdW5kKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cblxuICBfc2VhcmNoKHBhdHRlcm4sIHRleHQpIHtcbiAgICBpZiAoZXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBleGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChwcmVmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIHByZWZpeEV4YWN0TWF0Y2gubWF0Y2gocGF0dGVybiwgdGV4dClcbiAgICB9IGVsc2UgaWYgKGludmVyc2VQcmVmaXhFeGFjdE1hdGNoLmlzRm9yUGF0dGVybihwYXR0ZXJuKSkge1xuICAgICAgcmV0dXJuIGludmVyc2VQcmVmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlU3VmZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlU3VmZml4RXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSBpZiAoc3VmZml4RXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBzdWZmaXhFeGFjdE1hdGNoLm1hdGNoKHBhdHRlcm4sIHRleHQpXG4gICAgfSBlbHNlIGlmIChpbnZlcnNlRXhhY3RNYXRjaC5pc0ZvclBhdHRlcm4ocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlRXhhY3RNYXRjaC5tYXRjaChwYXR0ZXJuLCB0ZXh0KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2VhcmNoZXIgPSB0aGlzLl9mdXp6eUNhY2hlW3BhdHRlcm5dO1xuICAgICAgaWYgKCFzZWFyY2hlcikge1xuICAgICAgICBzZWFyY2hlciA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9mdXp6eUNhY2hlW3BhdHRlcm5dID0gc2VhcmNoZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VhcmNoZXIuc2VhcmNoSW5TdHJpbmcodGV4dClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTkdSQU1fTEVOID0gMztcblxuZnVuY3Rpb24gbmdyYW0oXG4gIHRleHQsXG4gIHsgbiA9IE5HUkFNX0xFTiwgcGFkID0gdHJ1ZSwgc29ydCA9IGZhbHNlIH1cbikge1xuICBsZXQgbkdyYW1zID0gW107XG5cbiAgaWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5HcmFtc1xuICB9XG5cbiAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHBhZCkge1xuICAgIHRleHQgPSBgICR7dGV4dH0gYDtcbiAgfVxuXG4gIGxldCBpbmRleCA9IHRleHQubGVuZ3RoIC0gbiArIDE7XG4gIGlmIChpbmRleCA8IDEpIHtcbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIG5HcmFtc1tpbmRleF0gPSB0ZXh0LnN1YnN0cihpbmRleCwgbik7XG4gIH1cblxuICBpZiAoc29ydCkge1xuICAgIG5HcmFtcy5zb3J0KChhLCBiKSA9PiAoYSA9PSBiID8gMCA6IGEgPCBiID8gLTEgOiAxKSk7XG4gIH1cblxuICByZXR1cm4gbkdyYW1zXG59XG5cbi8vIEFzc3VtZXMgYXJyYXlzIGFyZSBzb3J0ZWRcbmZ1bmN0aW9uIHVuaW9uIChhcnIxLCBhcnIyKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCAmJiBqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICBsZXQgaXRlbTEgPSBhcnIxW2ldO1xuICAgIGxldCBpdGVtMiA9IGFycjJbal07XG5cbiAgICBpZiAoaXRlbTEgPCBpdGVtMikge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTEpO1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSBpZiAoaXRlbTIgPCBpdGVtMSkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbTIpO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaChpdGVtMik7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKGFycjFbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnIyW2pdKTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIEFzc3VtZXMgYXJyYXlzIGFyZSBzb3J0ZWRcbmZ1bmN0aW9uIGludGVyc2VjdGlvbihhcnIxLCBhcnIyKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG5cbiAgd2hpbGUgKGkgPCBhcnIxLmxlbmd0aCAmJiBqIDwgYXJyMi5sZW5ndGgpIHtcbiAgICBsZXQgaXRlbTEgPSBhcnIxW2ldO1xuICAgIGxldCBpdGVtMiA9IGFycjJbal07XG5cbiAgICBpZiAoaXRlbTEgPT0gaXRlbTIpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0xKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0xIDwgaXRlbTIpIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0xID4gaXRlbTIpIHtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gamFjY2FyZERpc3RhbmNlKG5HcmFtMSwgbkdyYW0yKSB7XG4gIGxldCBuR3JhbVVuaW9uID0gdW5pb24obkdyYW0xLCBuR3JhbTIpO1xuICBsZXQgbkdyYW1JbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb24obkdyYW0xLCBuR3JhbTIpO1xuXG4gIHJldHVybiAxIC0gbkdyYW1JbnRlcnNlY3Rpb24ubGVuZ3RoIC8gbkdyYW1Vbmlvbi5sZW5ndGhcbn1cblxuY2xhc3MgTkdyYW1TZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCBvcHRpb25zID0geyB0aHJlc2hvbGQ6IDAuNiB9KSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZ3JhbSwgYW5kIHNvcnQgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucGF0dGVybk5ncmFtID0gbmdyYW0ocGF0dGVybiwgeyBzb3J0OiB0cnVlIH0pO1xuICB9XG4gIHNlYXJjaEluKHZhbHVlKSB7XG4gICAgbGV0IHRleHROZ3JhbSA9IHZhbHVlLm5nO1xuICAgIGlmICghdGV4dE5ncmFtKSB7XG4gICAgICB0ZXh0TmdyYW0gPSBuZ3JhbSh2YWx1ZS4kLCB7IHNvcnQ6IHRydWUgfSk7XG4gICAgICB2YWx1ZS5uZyA9IHRleHROZ3JhbTtcbiAgICB9XG5cbiAgICBsZXQgamFjYXJkUmVzdWx0ID0gamFjY2FyZERpc3RhbmNlKHRoaXMucGF0dGVybk5ncmFtLCB0ZXh0TmdyYW0pO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGphY2FyZFJlc3VsdCA8IHRoaXMub3B0aW9ucy50aHJlc2hvbGQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyBqYWNhcmRSZXN1bHQgOiAxLFxuICAgICAgaXNNYXRjaFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhcnIgPSBmYWxzZTtcblxuICBjb25zdCBfZ2V0ID0gKG9iaiwgcGF0aCkgPT4ge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGdvdHRlbiB0byB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG90SW5kZXggPSBwYXRoLmluZGV4T2YoJy4nKTtcblxuICAgICAgbGV0IGtleSA9IHBhdGg7XG4gICAgICBsZXQgcmVtYWluaW5nID0gbnVsbDtcblxuICAgICAgaWYgKGRvdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBrZXkgPSBwYXRoLnNsaWNlKDAsIGRvdEluZGV4KTtcbiAgICAgICAgcmVtYWluaW5nID0gcGF0aC5zbGljZShkb3RJbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICBpZiAoIXJlbWFpbmluZyAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBfZ2V0KHZhbHVlW2ldLCByZW1haW5pbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcpIHtcbiAgICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgICBfZ2V0KHZhbHVlLCByZW1haW5pbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9nZXQob2JqLCBwYXRoKTtcblxuICBpZiAoYXJyKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuXG4gIHJldHVybiBsaXN0WzBdXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KFxuICBrZXlzLFxuICBsaXN0LFxuICB7IGdldEZuID0gZ2V0LCBuZ3JhbXMgPSBmYWxzZSB9ID0ge31cbikge1xuICBsZXQgaW5kZXhlZExpc3QgPSBbXTtcblxuICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgaWYgKGlzU3RyaW5nKGxpc3RbMF0pKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGxpc3RbaV07XG5cbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIC8vICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgICAgICQ6IHZhbHVlLFxuICAgICAgICAgIGlkeDogaVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICByZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhlZExpc3QucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICBjb25zdCBrZXlzTGVuID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgbGV0IGl0ZW0gPSBsaXN0W2ldO1xuXG4gICAgICBsZXQgcmVjb3JkID0geyBpZHg6IGksICQ6IHt9IH07XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5c0xlbjsgaiArPSAxKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBsZXQgdmFsdWUgPSBnZXRGbihpdGVtLCBrZXkpO1xuXG4gICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICAgIGNvbnN0IHN0YWNrID0gW3sgYXJyYXlJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgeyBhcnJheUluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgICAgIC8vICAgdiA9IHYudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHsgJDogdmFsdWUsIGlkeDogYXJyYXlJbmRleCB9O1xuXG4gICAgICAgICAgICAgIGlmIChuZ3JhbXMpIHtcbiAgICAgICAgICAgICAgICBzdWJSZWNvcmQubmcgPSBuZ3JhbSh2YWx1ZSwgeyBzb3J0OiB0cnVlIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhcnJMZW4gPSB2YWx1ZS5sZW5ndGg7IGsgPCBhcnJMZW47IGsgKz0gMSkge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgICAgYXJyYXlJbmRleDogayxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVtrXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY29yZC4kW2tleV0gPSBzdWJSZWNvcmRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgICAgLy8gICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICBsZXQgc3ViUmVjb3JkID0geyAkOiB2YWx1ZSB9O1xuXG4gICAgICAgICAgaWYgKG5ncmFtcykge1xuICAgICAgICAgICAgc3ViUmVjb3JkLm5nID0gbmdyYW0odmFsdWUsIHsgc29ydDogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWNvcmQuJFtrZXldID0gc3ViUmVjb3JkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGluZGV4ZWRMaXN0LnB1c2gocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXhlZExpc3Rcbn1cblxuY2xhc3MgS2V5U3RvcmUge1xuICBjb25zdHJ1Y3RvcihrZXlzKSB7XG4gICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgIHRoaXMuX2tleU5hbWVzID0gW107XG4gICAgdGhpcy5fbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5XG4gICAgaWYgKGtleXMubGVuZ3RoICYmIGlzU3RyaW5nKGtleXNbMF0pKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIHRoaXMuX2tleXNba2V5XSA9IHtcbiAgICAgICAgICB3ZWlnaHQ6IDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fa2V5TmFtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoa2V5LCAnbmFtZScpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwibmFtZVwiIHByb3BlcnR5IGluIGtleSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5TmFtZSA9IGtleS5uYW1lO1xuICAgICAgICB0aGlzLl9rZXlOYW1lcy5wdXNoKGtleU5hbWUpO1xuXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtleSwgJ3dlaWdodCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFwid2VpZ2h0XCIgcHJvcGVydHkgaW4ga2V5IG9iamVjdCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuXG4gICAgICAgIGlmICh3ZWlnaHQgPD0gMCB8fCB3ZWlnaHQgPj0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdcIndlaWdodFwiIHByb3BlcnR5IGluIGtleSBtdXN0IGJlIGluIHRoZSByYW5nZSBvZiAoMCwgMSknXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fa2V5c1trZXlOYW1lXSA9IHtcbiAgICAgICAgICB3ZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICB0b3RhbFdlaWdodCArPSB3ZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vcm1hbGl6ZSB3ZWlnaHRzIHNvIHRoYXQgdGhlaXIgc3VtIGlzIGVxdWFsIHRvIDFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5TmFtZSA9IHRoaXMuX2tleU5hbWVzW2ldO1xuICAgICAgICBjb25zdCBrZXlXZWlnaHQgPSB0aGlzLl9rZXlzW2tleU5hbWVdLndlaWdodDtcbiAgICAgICAgdGhpcy5fa2V5c1trZXlOYW1lXS53ZWlnaHQgPSBrZXlXZWlnaHQgLyB0b3RhbFdlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0KGtleSwgbmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0gPyB0aGlzLl9rZXlzW2tleV1bbmFtZV0gOiAtMVxuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleU5hbWVzXG4gIH1cbiAgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aFxuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNoZXNbaV07XG5cbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCBtYXRjaC5pbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBsZXQgb2JqID0ge1xuICAgICAgaW5kaWNlczogbWF0Y2guaW5kaWNlcyxcbiAgICAgIHZhbHVlOiBtYXRjaC52YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5O1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5pZHggPiAtMSkge1xuICAgICAgb2JqLnJlZkluZGV4ID0gbWF0Y2guaWR4O1xuICAgIH1cblxuICAgIGRhdGEubWF0Y2hlcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiB0cnVlLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uXG4gIHNvcnRGbjogKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlXG59O1xuXG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5cbmNvbnN0IEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgLy8gRW5hYmxlZCBleHRlbmRlZC1zZWFyY2hpbmdcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXRcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IobGlzdCwgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zLCBpbmRleCA9IG51bGwpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgLy8gYGNhc2VTZW5zaXRpdmVgIGlzIGRlcHJlY2F0ZWQsIHVzZSBgaXNDYXNlU2Vuc2l0aXZlYCBpbnN0ZWFkXG4gICAgdGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZSA9IG9wdGlvbnMuY2FzZVNlbnNpdGl2ZTtcbiAgICBkZWxldGUgdGhpcy5vcHRpb25zLmNhc2VTZW5zaXRpdmU7XG5cbiAgICB0aGlzLl9wcm9jZXNzS2V5cyh0aGlzLm9wdGlvbnMua2V5cyk7XG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGxpc3QsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24obGlzdCwgaW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB0aGlzLmxpc3RJc1N0cmluZ0FycmF5ID0gaXNTdHJpbmcobGlzdFswXSk7XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuc2V0SW5kZXgoaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEluZGV4KHRoaXMuX2NyZWF0ZUluZGV4KCkpO1xuICAgIH1cbiAgfVxuXG4gIHNldEluZGV4KGxpc3RJbmRleCkge1xuICAgIHRoaXMuX2luZGV4ZWRMaXN0ID0gbGlzdEluZGV4O1xuICB9XG5cbiAgX3Byb2Nlc3NLZXlzKGtleXMpIHtcbiAgICB0aGlzLl9rZXlTdG9yZSA9IG5ldyBLZXlTdG9yZShrZXlzKTtcbiAgfVxuXG4gIF9jcmVhdGVJbmRleCgpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5kZXgodGhpcy5fa2V5U3RvcmUua2V5cygpLCB0aGlzLmxpc3QsIHtcbiAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm5cbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoKHBhdHRlcm4sIG9wdHMgPSB7IGxpbWl0OiBmYWxzZSB9KSB7XG4gICAgY29uc3QgeyB1c2VFeHRlbmRlZFNlYXJjaCwgc2hvdWxkU29ydCB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHNlYXJjaGVyID0gbnVsbDtcblxuICAgIGlmICh1c2VFeHRlbmRlZFNlYXJjaCkge1xuICAgICAgc2VhcmNoZXIgPSBuZXcgRXh0ZW5kZWRTZWFyY2gocGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IE5HcmFtU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlYXJjaGVyID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSB0aGlzLl9zZWFyY2hVc2luZyhzZWFyY2hlcik7XG5cbiAgICB0aGlzLl9jb21wdXRlU2NvcmUocmVzdWx0cyk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgdGhpcy5fc29ydChyZXN1bHRzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5saW1pdCAmJiBpc051bWJlcihvcHRzLmxpbWl0KSkge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgb3B0cy5saW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdChyZXN1bHRzKVxuICB9XG5cbiAgX3NlYXJjaFVzaW5nKHNlYXJjaGVyKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuX2luZGV4ZWRMaXN0O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAodGhpcy5saXN0SXNTdHJpbmdBcnJheSkge1xuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgbGlzdFxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbGlzdFtpXTtcbiAgICAgICAgbGV0IHsgJDogdGV4dCwgaWR4IH0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoZXIuc2VhcmNoSW4odmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwgdmFsdWU6IHRleHQgfTtcblxuICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICBtYXRjaC5pbmRpY2VzID0gc2VhcmNoUmVzdWx0Lm1hdGNoZWRJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbbWF0Y2hdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIGNvbnN0IGtleU5hbWVzID0gdGhpcy5fa2V5U3RvcmUua2V5cygpO1xuICAgICAgY29uc3Qga2V5c0xlbiA9IHRoaXMuX2tleVN0b3JlLmNvdW50KCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGxldCB7ICQ6IGl0ZW0sIGlkeCB9ID0gbGlzdFtpXTtcblxuICAgICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlzTGVuOyBqICs9IDEpIHtcbiAgICAgICAgICBsZXQga2V5ID0ga2V5TmFtZXNbal07XG4gICAgICAgICAgbGV0IHZhbHVlID0gaXRlbVtrZXldO1xuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgayA8IGxlbjsgayArPSAxKSB7XG4gICAgICAgICAgICAgIGxldCBhcnJJdGVtID0gdmFsdWVba107XG4gICAgICAgICAgICAgIGxldCB0ZXh0ID0gYXJySXRlbS4kO1xuICAgICAgICAgICAgICBsZXQgaWR4ID0gYXJySXRlbS5pZHg7XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaGVyLnNlYXJjaEluKGFyckl0ZW0pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICAgICAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IG1hdGNoID0geyBzY29yZSwga2V5LCB2YWx1ZTogdGV4dCwgaWR4IH07XG5cbiAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kaWNlcyA9IHNlYXJjaFJlc3VsdC5tYXRjaGVkSW5kaWNlcztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gdmFsdWUuJDtcbiAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSBzZWFyY2hlci5zZWFyY2hJbih2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUgfSA9IHNlYXJjaFJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBtYXRjaCA9IHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQgfTtcblxuICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIG1hdGNoLmluZGljZXMgPSBzZWFyY2hSZXN1bHQubWF0Y2hlZEluZGljZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX2NvbXB1dGVTY29yZShyZXN1bHRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlc3VsdHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gICAgICBjb25zdCBzY29yZUxlbiA9IG1hdGNoZXMubGVuZ3RoO1xuXG4gICAgICBsZXQgdG90YWxXZWlnaHRlZFNjb3JlID0gMTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzY29yZUxlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBtYXRjaGVzW2pdO1xuICAgICAgICBjb25zdCBrZXkgPSBpdGVtLmtleTtcbiAgICAgICAgY29uc3Qga2V5V2VpZ2h0ID0gdGhpcy5fa2V5U3RvcmUuZ2V0KGtleSwgJ3dlaWdodCcpO1xuICAgICAgICBjb25zdCB3ZWlnaHQgPSBrZXlXZWlnaHQgPiAtMSA/IGtleVdlaWdodCA6IDE7XG4gICAgICAgIGNvbnN0IHNjb3JlID1cbiAgICAgICAgICBpdGVtLnNjb3JlID09PSAwICYmIGtleVdlaWdodCA+IC0xID8gTnVtYmVyLkVQU0lMT04gOiBpdGVtLnNjb3JlO1xuXG4gICAgICAgIHRvdGFsV2VpZ2h0ZWRTY29yZSAqPSBNYXRoLnBvdyhzY29yZSwgd2VpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnNjb3JlID0gdG90YWxXZWlnaHRlZFNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIF9zb3J0KHJlc3VsdHMpIHtcbiAgICByZXN1bHRzLnNvcnQodGhpcy5vcHRpb25zLnNvcnRGbik7XG4gIH1cblxuICBfZm9ybWF0KHJlc3VsdHMpIHtcbiAgICBjb25zdCBmaW5hbE91dHB1dCA9IFtdO1xuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaW5jbHVkZVNjb3JlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybU1hdGNoZXMpO1xuICAgIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZXN1bHRzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgaXRlbTogdGhpcy5saXN0W2lkeF0sXG4gICAgICAgIHJlZkluZGV4OiBpZHhcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0cmFuc2Zvcm1lcnMubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lcnNbal0ocmVzdWx0LCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmaW5hbE91dHB1dC5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmaW5hbE91dHB1dFxuICB9XG59XG5cbkZ1c2UudmVyc2lvbiA9ICc1LjEuMCc7XG5GdXNlLmNyZWF0ZUluZGV4ID0gY3JlYXRlSW5kZXg7XG5GdXNlLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1c2U7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJSZWFjdFwiLCBcIlJlYWN0RE9NXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKGZhbHNlKSB7IHZhciB0aHJvd09uRGlyZWN0QWNjZXNzLCBSZWFjdElzOyB9IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSgpO1xufVxuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXztcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMl9fO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gVGVsbCB3aGV0aGVyIHRoZSByZWN0IGlzIHZpc2libGUsIGdpdmVuIGFuIG9mZnNldFxuLy9cbi8vIHJldHVybjogYm9vbGVhblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2Zmc2V0LCByZWN0LCBjb250YWlubWVudFJlY3QpIHtcbiAgdmFyIG9mZnNldERpciA9IG9mZnNldC5kaXJlY3Rpb247XG4gIHZhciBvZmZzZXRWYWwgPSBvZmZzZXQudmFsdWU7IC8vIFJ1bGVzIGZvciBjaGVja2luZyBkaWZmZXJlbnQga2luZCBvZiBvZmZzZXRzLiBJbiBleGFtcGxlIGlmIHRoZSBlbGVtZW50IGlzXG4gIC8vIDkwcHggYmVsb3cgdmlld3BvcnQgYW5kIG9mZnNldFRvcCBpcyAxMDAsIGl0IGlzIGNvbnNpZGVyZWQgdmlzaWJsZS5cblxuICBzd2l0Y2ggKG9mZnNldERpcikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LnRvcCArIG9mZnNldFZhbCA8IHJlY3QudG9wICYmIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gPiByZWN0LmJvdHRvbSAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0O1xuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LmxlZnQgKyBvZmZzZXRWYWwgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tICYmIGNvbnRhaW5tZW50UmVjdC50b3AgPCByZWN0LnRvcCAmJiBjb250YWlubWVudFJlY3QucmlnaHQgPiByZWN0LnJpZ2h0O1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBjb250YWlubWVudFJlY3QuYm90dG9tIC0gb2Zmc2V0VmFsID4gcmVjdC5ib3R0b20gJiYgY29udGFpbm1lbnRSZWN0LmxlZnQgPCByZWN0LmxlZnQgJiYgY29udGFpbm1lbnRSZWN0LnJpZ2h0ID4gcmVjdC5yaWdodCAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3A7XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gY29udGFpbm1lbnRSZWN0LnJpZ2h0IC0gb2Zmc2V0VmFsID4gcmVjdC5yaWdodCAmJiBjb250YWlubWVudFJlY3QubGVmdCA8IHJlY3QubGVmdCAmJiBjb250YWlubWVudFJlY3QudG9wIDwgcmVjdC50b3AgJiYgY29udGFpbm1lbnRSZWN0LmJvdHRvbSA+IHJlY3QuYm90dG9tO1xuICB9XG59O1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFZpc2liaWxpdHlTZW5zb3I7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfZG9tX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X2RvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9saWJfaXNfdmlzaWJsZV93aXRoX29mZnNldF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfbGliX2lzX3Zpc2libGVfd2l0aF9vZmZzZXRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyk7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cblxuXG5cblxuXG5mdW5jdGlvbiBub3JtYWxpemVSZWN0KHJlY3QpIHtcbiAgaWYgKHJlY3Qud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICB9XG5cbiAgaWYgKHJlY3QuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIH1cblxuICByZXR1cm4gcmVjdDtcbn1cblxudmFyIFZpc2liaWxpdHlTZW5zb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFZpc2liaWxpdHlTZW5zb3IsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFZpc2liaWxpdHlTZW5zb3IocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlzaWJpbGl0eVNlbnNvcik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihWaXNpYmlsaXR5U2Vuc29yKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0Q29udGFpbmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5jb250YWlubWVudCB8fCB3aW5kb3c7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWRkRXZlbnRMaXN0ZW5lclwiLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgZGVsYXksIHRocm90dGxlKSB7XG4gICAgICBpZiAoIV90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuZGVib3VuY2VDaGVjayA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZW91dDtcbiAgICAgIHZhciBmdW5jO1xuXG4gICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuY2hlY2soKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aHJvdHRsZSA+IC0xKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHRocm90dGxlIHx8IDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgZGVsYXkgfHwgMCk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgZm46IGZ1bmMsXG4gICAgICAgIGdldExhc3RUaW1lb3V0OiBmdW5jdGlvbiBnZXRMYXN0VGltZW91dCgpIHtcbiAgICAgICAgICByZXR1cm4gdGltZW91dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBpbmZvLmZuKTtcbiAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2tbZXZlbnRdID0gaW5mbztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGFydFdhdGNoaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrIHx8IF90aGlzLmludGVydmFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmludGVydmFsQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChfdGhpcy5jaGVjaywgX3RoaXMucHJvcHMuaW50ZXJ2YWxEZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5zY3JvbGxDaGVjaykge1xuICAgICAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKF90aGlzLmdldENvbnRhaW5lcigpLCBcInNjcm9sbFwiLCBfdGhpcy5wcm9wcy5zY3JvbGxEZWxheSwgX3RoaXMucHJvcHMuc2Nyb2xsVGhyb3R0bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucmVzaXplQ2hlY2spIHtcbiAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csIFwicmVzaXplXCIsIF90aGlzLnByb3BzLnJlc2l6ZURlbGF5LCBfdGhpcy5wcm9wcy5yZXNpemVUaHJvdHRsZSk7XG4gICAgICB9IC8vIGlmIGRvbnQgbmVlZCBkZWxheWVkIGNhbGwsIGNoZWNrIG9uIGxvYWQgKCBiZWZvcmUgdGhlIGZpcnN0IGludGVydmFsIGZpcmVzIClcblxuXG4gICAgICAhX3RoaXMucHJvcHMuZGVsYXllZENhbGwgJiYgX3RoaXMuY2hlY2soKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdG9wV2F0Y2hpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmRlYm91bmNlQ2hlY2spIHtcbiAgICAgICAgLy8gY2xlYW4gdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVpciBkZWJvdW5jZSBjYWxsZXJzXG4gICAgICAgIGZvciAodmFyIGRlYm91bmNlRXZlbnQgaW4gX3RoaXMuZGVib3VuY2VDaGVjaykge1xuICAgICAgICAgIGlmIChfdGhpcy5kZWJvdW5jZUNoZWNrLmhhc093blByb3BlcnR5KGRlYm91bmNlRXZlbnQpKSB7XG4gICAgICAgICAgICB2YXIgZGVib3VuY2VJbmZvID0gX3RoaXMuZGVib3VuY2VDaGVja1tkZWJvdW5jZUV2ZW50XTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZUluZm8uZ2V0TGFzdFRpbWVvdXQoKSk7XG4gICAgICAgICAgICBkZWJvdW5jZUluZm8udGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZGVib3VuY2VFdmVudCwgZGVib3VuY2VJbmZvLmZuKTtcbiAgICAgICAgICAgIF90aGlzLmRlYm91bmNlQ2hlY2tbZGVib3VuY2VFdmVudF0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5kZWJvdW5jZUNoZWNrID0gbnVsbDtcblxuICAgICAgaWYgKF90aGlzLmludGVydmFsKSB7XG4gICAgICAgIF90aGlzLmludGVydmFsID0gY2xlYXJJbnRlcnZhbChfdGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2hlY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gX3RoaXMubm9kZTtcbiAgICAgIHZhciByZWN0O1xuICAgICAgdmFyIGNvbnRhaW5tZW50UmVjdDsgLy8gaWYgdGhlIGNvbXBvbmVudCBoYXMgcmVuZGVyZWQgdG8gbnVsbCwgZG9udCB1cGRhdGUgdmlzaWJpbGl0eVxuXG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmVjdCA9IG5vcm1hbGl6ZVJlY3QoX3RoaXMucm91bmRSZWN0RG93bihlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuY29udGFpbm1lbnQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5tZW50RE9NUmVjdCA9IF90aGlzLnByb3BzLmNvbnRhaW5tZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnRhaW5tZW50UmVjdCA9IHtcbiAgICAgICAgICB0b3A6IGNvbnRhaW5tZW50RE9NUmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogY29udGFpbm1lbnRET01SZWN0LmxlZnQsXG4gICAgICAgICAgYm90dG9tOiBjb250YWlubWVudERPTVJlY3QuYm90dG9tLFxuICAgICAgICAgIHJpZ2h0OiBjb250YWlubWVudERPTVJlY3QucmlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdCA9IHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQ2hlY2sgaWYgdmlzaWJpbGl0eSBpcyB3YW50ZWQgdmlhIG9mZnNldD9cblxuXG4gICAgICB2YXIgb2Zmc2V0ID0gX3RoaXMucHJvcHMub2Zmc2V0IHx8IHt9O1xuICAgICAgdmFyIGhhc1ZhbGlkT2Zmc2V0ID0gX3R5cGVvZihvZmZzZXQpID09PSBcIm9iamVjdFwiO1xuXG4gICAgICBpZiAoaGFzVmFsaWRPZmZzZXQpIHtcbiAgICAgICAgY29udGFpbm1lbnRSZWN0LnRvcCArPSBvZmZzZXQudG9wIHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5sZWZ0ICs9IG9mZnNldC5sZWZ0IHx8IDA7XG4gICAgICAgIGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLT0gb2Zmc2V0LmJvdHRvbSB8fCAwO1xuICAgICAgICBjb250YWlubWVudFJlY3QucmlnaHQgLT0gb2Zmc2V0LnJpZ2h0IHx8IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aXNpYmlsaXR5UmVjdCA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCA+PSBjb250YWlubWVudFJlY3QudG9wLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgPj0gY29udGFpbm1lbnRSZWN0LmxlZnQsXG4gICAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20gPD0gY29udGFpbm1lbnRSZWN0LmJvdHRvbSxcbiAgICAgICAgcmlnaHQ6IHJlY3QucmlnaHQgPD0gY29udGFpbm1lbnRSZWN0LnJpZ2h0XG4gICAgICB9OyAvLyBodHRwczovL2dpdGh1Yi5jb20vam9zaHduai9yZWFjdC12aXNpYmlsaXR5LXNlbnNvci9wdWxsLzExNFxuXG4gICAgICB2YXIgaGFzU2l6ZSA9IHJlY3QuaGVpZ2h0ID4gMCAmJiByZWN0LndpZHRoID4gMDtcbiAgICAgIHZhciBpc1Zpc2libGUgPSBoYXNTaXplICYmIHZpc2liaWxpdHlSZWN0LnRvcCAmJiB2aXNpYmlsaXR5UmVjdC5sZWZ0ICYmIHZpc2liaWxpdHlSZWN0LmJvdHRvbSAmJiB2aXNpYmlsaXR5UmVjdC5yaWdodDsgLy8gY2hlY2sgZm9yIHBhcnRpYWwgdmlzaWJpbGl0eVxuXG4gICAgICBpZiAoaGFzU2l6ZSAmJiBfdGhpcy5wcm9wcy5wYXJ0aWFsVmlzaWJpbGl0eSkge1xuICAgICAgICB2YXIgcGFydGlhbFZpc2libGUgPSByZWN0LnRvcCA8PSBjb250YWlubWVudFJlY3QuYm90dG9tICYmIHJlY3QuYm90dG9tID49IGNvbnRhaW5tZW50UmVjdC50b3AgJiYgcmVjdC5sZWZ0IDw9IGNvbnRhaW5tZW50UmVjdC5yaWdodCAmJiByZWN0LnJpZ2h0ID49IGNvbnRhaW5tZW50UmVjdC5sZWZ0OyAvLyBhY2NvdW50IGZvciBwYXJ0aWFsIHZpc2liaWxpdHkgb24gYSBzaW5nbGUgZWRnZVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMucGFydGlhbFZpc2liaWxpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBwYXJ0aWFsVmlzaWJsZSA9IHZpc2liaWxpdHlSZWN0W190aGlzLnByb3BzLnBhcnRpYWxWaXNpYmlsaXR5XTtcbiAgICAgICAgfSAvLyBpZiB3ZSBoYXZlIG1pbmltdW0gdG9wIHZpc2liaWxpdHkgc2V0IGJ5IHByb3BzLCBsZXRzIGNoZWNrLCBpZiBpdCBtZWV0cyB0aGUgcGFzc2VkIHZhbHVlXG4gICAgICAgIC8vIHNvIGlmIGZvciBpbnN0YW5jZSBlbGVtZW50IGlzIGF0IGxlYXN0IDIwMHB4IGluIHZpZXdwb3J0LCB0aGVuIHNob3cgaXQuXG5cblxuICAgICAgICBpc1Zpc2libGUgPSBfdGhpcy5wcm9wcy5taW5Ub3BWYWx1ZSA/IHBhcnRpYWxWaXNpYmxlICYmIHJlY3QudG9wIDw9IGNvbnRhaW5tZW50UmVjdC5ib3R0b20gLSBfdGhpcy5wcm9wcy5taW5Ub3BWYWx1ZSA6IHBhcnRpYWxWaXNpYmxlO1xuICAgICAgfSAvLyBEZXByZWNhdGVkIG9wdGlvbnMgZm9yIGNhbGN1bGF0aW5nIG9mZnNldC5cblxuXG4gICAgICBpZiAodHlwZW9mIG9mZnNldC5kaXJlY3Rpb24gPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG9mZnNldC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbm90aWNlXSBvZmZzZXQuZGlyZWN0aW9uIGFuZCBvZmZzZXQudmFsdWUgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuIFRoZXkgc3RpbGwgd29yayBmb3Igbm93LCBidXQgd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVwZ3JhZGUgdG8gdGhlIG5ldyBzeW50YXg6IHsgJXM6ICVkIH1cIiwgb2Zmc2V0LmRpcmVjdGlvbiwgb2Zmc2V0LnZhbHVlKTtcbiAgICAgICAgaXNWaXNpYmxlID0gX2xpYl9pc192aXNpYmxlX3dpdGhfb2Zmc2V0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCgpKG9mZnNldCwgcmVjdCwgY29udGFpbm1lbnRSZWN0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RhdGU7IC8vIG5vdGlmeSB0aGUgcGFyZW50IHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmlzVmlzaWJsZSAhPT0gaXNWaXNpYmxlKSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB2aXNpYmlsaXR5UmVjdFxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlKTtcblxuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIF90aGlzLnByb3BzLm9uQ2hhbmdlKGlzVmlzaWJsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNWaXNpYmxlOiBudWxsLFxuICAgICAgdmlzaWJpbGl0eVJlY3Q6IHt9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmlzaWJpbGl0eVNlbnNvciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLm5vZGUgPSByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0LmEuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnN0YXJ0V2F0Y2hpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BXYXRjaGluZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gcmUtcmVnaXN0ZXIgbm9kZSBpbiBjb21wb25lbnREaWRVcGRhdGUgaWYgY2hpbGRyZW4gZGlmZnMgWyMxMDNdXG4gICAgICB0aGlzLm5vZGUgPSByZWFjdF9kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0LmEuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSAmJiAhcHJldlByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICAgICAgdmlzaWJpbGl0eVJlY3Q6IHt9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXJ0V2F0Y2hpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc3RvcFdhdGNoaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdW5kUmVjdERvd25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91bmRSZWN0RG93bihyZWN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IE1hdGguZmxvb3IocmVjdC50b3ApLFxuICAgICAgICBsZWZ0OiBNYXRoLmZsb29yKHJlY3QubGVmdCksXG4gICAgICAgIGJvdHRvbTogTWF0aC5mbG9vcihyZWN0LmJvdHRvbSksXG4gICAgICAgIHJpZ2h0OiBNYXRoLmZsb29yKHJlY3QucmlnaHQpXG4gICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyB3aXRoaW4gdGhlIHZpc2libGUgdmlld3BvcnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgICAgICBpc1Zpc2libGU6IHRoaXMuc3RhdGUuaXNWaXNpYmxlLFxuICAgICAgICAgIHZpc2liaWxpdHlSZWN0OiB0aGlzLnN0YXRlLnZpc2liaWxpdHlSZWN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlzaWJpbGl0eVNlbnNvcjtcbn0ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFZpc2liaWxpdHlTZW5zb3IsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgYWN0aXZlOiB0cnVlLFxuICBwYXJ0aWFsVmlzaWJpbGl0eTogZmFsc2UsXG4gIG1pblRvcFZhbHVlOiAwLFxuICBzY3JvbGxDaGVjazogZmFsc2UsXG4gIHNjcm9sbERlbGF5OiAyNTAsXG4gIHNjcm9sbFRocm90dGxlOiAtMSxcbiAgcmVzaXplQ2hlY2s6IGZhbHNlLFxuICByZXNpemVEZWxheTogMjUwLFxuICByZXNpemVUaHJvdHRsZTogLTEsXG4gIGludGVydmFsQ2hlY2s6IHRydWUsXG4gIGludGVydmFsRGVsYXk6IDEwMCxcbiAgZGVsYXllZENhbGw6IGZhbHNlLFxuICBvZmZzZXQ6IHt9LFxuICBjb250YWlubWVudDogbnVsbCxcbiAgY2hpbGRyZW46IHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwpXG59KTtcblxuX2RlZmluZVByb3BlcnR5KFZpc2liaWxpdHlTZW5zb3IsIFwicHJvcFR5cGVzXCIsIHtcbiAgb25DaGFuZ2U6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuZnVuYyxcbiAgYWN0aXZlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHBhcnRpYWxWaXNpYmlsaXR5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLCBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSldKSxcbiAgZGVsYXllZENhbGw6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuYm9vbCxcbiAgb2Zmc2V0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5zaGFwZSh7XG4gICAgdG9wOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICBsZWZ0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICBib3R0b206IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgIHJpZ2h0OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlclxuICB9KSwgLy8gZGVwcmVjYXRlZCBvZmZzZXQgcHJvcGVydHlcbiAgcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5zaGFwZSh7XG4gICAgZGlyZWN0aW9uOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mKFtcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXSksXG4gICAgdmFsdWU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG4gIH0pXSksXG4gIHNjcm9sbENoZWNrOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmJvb2wsXG4gIHNjcm9sbERlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgc2Nyb2xsVGhyb3R0bGU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyLFxuICByZXNpemVDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICByZXNpemVEZWxheTogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5udW1iZXIsXG4gIHJlc2l6ZVRocm90dGxlOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgaW50ZXJ2YWxDaGVjazogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5ib29sLFxuICBpbnRlcnZhbERlbGF5OiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm51bWJlcixcbiAgY29udGFpbm1lbnQ6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmluc3RhbmNlT2Yod2luZG93LkVsZW1lbnQpIDogcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5hbnksXG4gIGNoaWxkcmVuOiBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbcHJvcF90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYS5lbGVtZW50LCBwcm9wX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmZ1bmNdKSxcbiAgbWluVG9wVmFsdWU6IHByb3BfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEubnVtYmVyXG59KTtcblxuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBY2NvcmRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2lzT3BlbiwgdGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGlzT3Blbik7XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2FjY29yZGlvbicsIHsnb3Blbic6IG9wZW4sICdjbG9zZWQnOiAhIG9wZW4gfSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e29wZW59XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCEgb3Blbil9XG5cdFx0XHQ+XG5cdFx0XHRcdFx0e3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRpdGxlXCI+e3RpdGxlfTwvZGl2Pn1cblx0XHRcdFx0XHQ8RGFzaGljb25cblx0XHRcdFx0XHRcdGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IG9wZW4gPyAnYXV0bycgOiAnMHB4J319PlxuXHRcdFx0XHR7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IFRhYnNDb250ZW50IGZyb20gJy4vVGFic0NvbnRlbnQnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi9TbmFja2Jhcic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudCwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICh7c2V0U2V0dGluZ3MsIHRvYXN0LCBjdXJyZW50VGFiLCBzZXRUYWIsIGlzT25ib2FyZGluZ30pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdFx0c2V0dGluZ3MuZmV0Y2goKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRzZXRTZXR0aW5ncyhyKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8TG9hZGluZy8+O1xuXHR9XG5cdGNvbnN0IHdyYXBDbGFzc2VzID0gY2xhc3NuYW1lcyhbICdjb250ZW50LXdyYXAnLCB7XG5cdFx0J2lzLW9uYm9hcmRpbmcnOiBpc09uYm9hcmRpbmcgJiYgJ3N0YXJ0ZXItc2l0ZXMnID09PSBjdXJyZW50VGFiLFxuXHRcdCdzdGFydGVyLXNpdGVzJzogJ3N0YXJ0ZXItc2l0ZXMnID09PSBjdXJyZW50VGFiXG5cdH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEhlYWRlciBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3dyYXBDbGFzc2VzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8Tm90aWZpY2F0aW9ucy8+fVxuXHRcdFx0XHRcdFx0PFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e3RvYXN0ICYmIDxTbmFja2Jhci8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNldHRpbmdzLCBzZXRUYWJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNldHRpbmdzOiAob2JqZWN0KSA9PiBzZXRTZXR0aW5ncyhvYmplY3QpLFxuXHRcdFx0c2V0VGFiOiAodGFiKSA9PiBzZXRUYWIodGFiKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0VG9hc3QsIGdldFRhYn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0Y29uc3Qge2dldE9uYm9hcmRpbmdTdGF0dXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6IGdldFRvYXN0KCksXG5cdFx0XHRjdXJyZW50VGFiOiBnZXRUYWIoKSxcblx0XHRcdGlzT25ib2FyZGluZzogZ2V0T25ib2FyZGluZ1N0YXR1cygpXG5cdFx0fTtcblx0fSlcbikoQXBwKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2ljb24sIGljb25BbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIGNsYXNzTmFtZXN9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsIGNsYXNzTmFtZXMgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IGFsdD17aWNvbkFsdCB8fCAnaWNvbid9Lz59XG4gICAgICAgIHt0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9BY2NvcmRpb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2hhbmdlbG9nID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2Vsb2csIGNoYW5nZWxvZ1Byb30gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBzaG93Rm9yUHJvLCBzZXRTaG93Rm9yUHJvIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdHtjaGFuZ2Vsb2dQcm8gJiZcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlbG9nLXRhYnNcIj5cblx0XHRcdFx0PHNwYW4+e19fKCdTaG93IGNoYW5nZWxvZyBmb3InLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9eyEgc2hvd0ZvclBybyAmJiAnYWN0aXZlJ31cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRTaG93Rm9yUHJvKGZhbHNlKTtcblx0XHRcdFx0XHR9fT57X18oJ05ldmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRjbGFzc05hbWU9e3Nob3dGb3JQcm8gJiYgJ2FjdGl2ZSd9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0U2hvd0ZvclBybyh0cnVlKTtcblx0XHRcdFx0XHR9fT57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0KHNob3dGb3JQcm8gPyBjaGFuZ2Vsb2dQcm8gOiBjaGFuZ2Vsb2cpLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2RhdGUsIHZlcnNpb24sIHR3ZWFrcywgZml4ZXMsIGZlYXR1cmVzfSA9IGVudHJ5O1xuXHRcdFx0XHRcdGlmICghIHR3ZWFrcyAmJiAhIGZpeGVzICYmICEgZmVhdHVyZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PjtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uIGlzT3Blbj17MCA9PT0gaW5kZXh9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHRcdHtmZWF0dXJlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgc3VjY2Vzc1wiPntfXygnRmVhdHVyZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gPGxpPntmZWF0dXJlfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7Zml4ZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidWdzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgZXJyb3JcIj57X18oJ0J1ZyBGaXhlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zml4ZXMubWFwKChmaXgpID0+IDxsaT57Zml4fTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7dHdlYWtzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdlYWtzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPntfXygnVHdlYWtzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0d2Vha3MubWFwKCh0d2VhaykgPT4gPGxpPnt0d2Vha308L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2Vsb2c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBGZWF0dXJlUm93IGZyb20gJy4uL0ZlYXR1cmVSb3cnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtmZWF0dXJlRGF0YX0gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNhcmQgdGFibGVcIj5cblx0XHRcdFx0PHRib2R5IGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRcIj5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwibGFyZ2VcIi8+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZScsICduZXZlJyl9PC90aD5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlIFBybycsICduZXZlJyl9PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0e2ZlYXR1cmVEYXRhLm1hcCgoaXRlbSkgPT4gPEZlYXR1cmVSb3cgaXRlbT17aXRlbX0vPil9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdXBzZWxsXCI+XG5cdFx0XHRcdDxwPntfXygnR2V0IGFjY2VzcyB0byBhbGwgUHJvIGZlYXR1cmVzIGFuZCBwb3dlci11cCB5b3VyIHdlYnNpdGUnLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLnVwZ3JhZGVVUkx9XG5cdFx0XHRcdFx0aXNQcmltYXJ5PlxuXHRcdFx0XHRcdHtfXygnR2V0IE5ldmUgUHJvIE5vdycsICduZXZlJyl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBIZWxwID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG5cblx0bGV0IHtkb2NzVVJMLCBzdXBwb3J0VVJMLCB3aGl0ZUxhYmVsLCBhc3NldHN9ID0gbmV2ZURhc2g7XG5cdGxldCB7c3VwcG9ydENhcmREZXNjcmlwdGlvbiwgZG9jc0NhcmREZXNjcmlwdGlvbn0gPSBuZXZlRGFzaC5zdHJpbmdzO1xuXG5cdGlmICh3aGl0ZUxhYmVsICYmIHdoaXRlTGFiZWwuYWdlbmN5VVJMKSB7XG5cdFx0c3VwcG9ydFVSTCA9IHdoaXRlTGFiZWwuYWdlbmN5VVJMO1xuXHRcdGRvY3NVUkwgPSB3aGl0ZUxhYmVsLmFnZW5jeVVSTDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYnVveS5zdmcnfVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17c3VwcG9ydENhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0aHJlZj17c3VwcG9ydFVSTH1cblx0XHRcdFx0XHQ+e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdHshIHdoaXRlTGFiZWwgJiZcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRpY29uPXthc3NldHMgKyAnbGlzdC5zdmcnfVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdXYW50IHRvIGdldCB0aGUgZ2lzdCBvbiB0aGUgbGF0ZXN0IHRoZW1lIGNoYW5nZXM/IEp1c3QgY29uc3VsdCBvdXIgY2hhbmdlbG9nIGJlbG93IHRvIGdldCBhIHRhc3RlIG9mIHRoZSByZWNlbnQgZml4ZXMgYW5kIGZlYXR1cmVzIGltcGxlbWVudGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKCdjaGFuZ2Vsb2cnKX1cblx0XHRcdFx0XHRcdD57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdFx0aWNvbj17YXNzZXRzICsgJ3RhY2hvbWV0ZXIuc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnU3BlZWQgdXAgeW91ciBzaXRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdwYWdlLnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdEb2N1bWVudGF0aW9uJywgJ25ldmUnKX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17ZG9jc0NhcmREZXNjcmlwdGlvbn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0aHJlZj17ZG9jc1VSTH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdHshIHdoaXRlTGFiZWwgJiZcblx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRpY29uPXthc3NldHMgKyAnY2xvbmUuc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzE0LWhvdy10by1jcmVhdGUtYS1jaGlsZC10aGVtZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdGljb249e2Fzc2V0cyArICdhcnJvd3Muc3ZnJ31cblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQnVpbGQgYSBsYW5kaW5nIHBhZ2Ugd2l0aCBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8yMTktaG93LXRvLWJ1aWxkLWEtbGFuZGluZy1wYWdlLXdpdGgtYS1kcmFnLWFuZC1kcm9wLWNvbnRlbnQtYnVpbGRlclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7bW9kdWxlc30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhtb2R1bGVzKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb2R1bGVDYXJkIHNsdWc9e2lkfS8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5pbXBvcnQge3RhYnN9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFN0YXJ0ID0gKHByb3BzKSA9PiB7XG5cdGZ1bmN0aW9uIHJlbmRlckxlZnRDb2woKSB7XG5cdFx0aWYgKG5ldmVEYXNoLndoaXRlTGFiZWwgJiYgbmV2ZURhc2gud2hpdGVMYWJlbC5oaWRlU3RhcnRlclNpdGVzKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0e3RhYnNbJ3N0YXJ0ZXItc2l0ZXMnXSAmJlxuXHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17bmV2ZURhc2guc3RyaW5ncy5zdGFydGVyU2l0ZXNDYXJkRGVzY3JpcHRpb259XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VGFiKCdzdGFydGVyLXNpdGVzJyk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57X18oJ0dvIHRvIFN0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdH1cblx0XHRcdFx0eyEgbmV2ZURhc2gud2hpdGVMYWJlbCAmJlxuXHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdHZXR0aW5nIFN0YXJ0ZWQ/IENoZWNrIGhlbHAgYW5kIGRvY3MnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG5cdFx0XHRcdFx0PntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0e3JlbmRlckxlZnRDb2woKX1cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG5cdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz1cImN1c3RvbWl6ZXItcXVpY2stbGlua3NcIlxuXHRcdFx0XHRcdGljb249e25ldmVEYXNoLmFzc2V0cyArICdjb21wYXNzLnN2Zyd9XG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDdXN0b21pemVyIHF1aWNrIGxpbmtzJywgJ25ldmUnKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtyZW5kZXJDdXN0b21pemVyTGlua3MoKX1cblx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cblxuY29uc3QgcmVuZGVyQ3VzdG9taXplckxpbmtzID0gKCkgPT4ge1xuXHRjb25zdCBsaW5rcyA9IG5ldmVEYXNoLmN1c3RvbWl6ZXJTaG9ydGN1dHM7XG5cdGNvbnN0IHNwbGl0ID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIDIpO1xuXHRjb25zdCBwYXJ0cyA9IFsgbGlua3Muc2xpY2UoMCwgc3BsaXQpLCBsaW5rcy5zbGljZShzcGxpdCkgXTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblx0XHRcdHtcblx0XHRcdFx0cGFydHMubWFwKChjb2x1bW4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNvbHVtbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc0xpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS50ZXh0fTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbmRleCAhPT0gY29sdW1uLmxlbmd0aCAtIDEgJiYgPGhyLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9Mb2FkaW5nJztcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gJy4uL09uYm9hcmRpbmcvTWFpbic7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAoe3NpdGVzLCBzZXRTaXRlcywgc2V0VXBzZWxscywgc2V0TWlncmF0aW9uRGF0YX0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc2l0ZXMpIHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbml0aWFsaXplX3NpdGVzX2xpYnJhcnknKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRzZXRFcnJvcih0cnVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB7cmVtb3RlLCB1cHNlbGwsIG1pZ3JhdGVfZGF0YX0gPSByLmRhdGE7XG5cdFx0XHRcdFx0c2V0U2l0ZXMocmVtb3RlKTtcblx0XHRcdFx0XHRzZXRVcHNlbGxzKHVwc2VsbCk7XG5cdFx0XHRcdFx0c2V0TWlncmF0aW9uRGF0YShtaWdyYXRlX2RhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRyZXR1cm4gPGgxPkVycm9yLjwvaDE+O1xuXHR9XG5cdHJldHVybiAoXG5cdFx0bG9hZGluZyA/IDxMb2FkaW5nLz4gOiA8T25ib2FyZGluZy8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNpdGVzLCBzZXRVcHNlbGxzLCBzZXRNaWdyYXRpb25EYXRhfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2l0ZXM6IChzaXRlcykgPT4gc2V0U2l0ZXMoc2l0ZXMpLFxuXHRcdFx0c2V0VXBzZWxsczogKHVwc2VsbHMpID0+IHNldFVwc2VsbHModXBzZWxscyksXG5cdFx0XHRzZXRNaWdyYXRpb25EYXRhOiAobWlncmF0aW9uRGF0YSkgPT4gc2V0TWlncmF0aW9uRGF0YShtaWdyYXRpb25EYXRhKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0U2l0ZXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l0ZXM6IGdldFNpdGVzKClcblx0XHR9O1xuXHR9KVxuKShTdGFydGVyU2l0ZXMpO1xuIiwiY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG4gIGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuICBjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG4gIGNvbnN0IGhpZGVUb29sdGlwID0gKCkgPT4gdG9nZ2xlVG9vbHRpcChmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwiZmVhdHVyZS1yb3dcIj5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJsYXJnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXQtd3JhcFwiPlxuICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuICAgICAgICAgICAge3Rvb2x0aXAgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnaW5kaWNhdG9yJywgeydlcnJvcic6ICEgaW5MaXRlLCAnc3VjY2Vzcyc6IGluTGl0ZX0gXSl9PlxuICAgICAgICA8RGFzaGljb24gc2l6ZT17MzB9IGljb249e2luTGl0ZSA/ICd5ZXMnIDogJ25vLWFsdCd9Lz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIHN1Y2Nlc3NcIj5cbiAgICAgICAgPERhc2hpY29uIHNpemU9ezMwfSBpY29uPVwieWVzXCIvPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVJvdztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCBnZXRUYWJIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcblx0XHRpZiAobnVsbCA9PT0gaGFzaCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRwcm9wcy5zZXRUYWIoaGFzaCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cmVuZGVySGVhZCgpfVxuXHRcdFx0XHR7cmVuZGVyTmF2aWdhdGlvbihwcm9wcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlckhlYWQgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e25ldmVEYXNoLnN0cmluZ3MuaGVhZGVyfTwvaDE+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+e25ldmVEYXNoLnZlcnNpb259PC9zcGFuPlxuXHRcdFx0eyEgbmV2ZURhc2gud2hpdGVMYWJlbCAmJlxuXHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvbG9nby5zdmcnfSBhbHQ9e19fKCdOZXZlIFRoZW1lIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHR7T2JqZWN0LmtleXModGFicykubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPjxhXG5cdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdGFkZFVybEhhc2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57dGFic1tpdGVtXS5sYWJlbH1cblx0XHRcdFx0XHQ8L2E+PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgTGljZW5zZUNhcmQgPSAoe2lzVmlzaWJsZSwgY2hhbmdlVGllcn0pID0+IHtcblx0Y29uc3Qge2xpY2Vuc2UsIHByb0FwaX0gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBrZXksIHNldEtleSBdID0gdXNlU3RhdGUobGljZW5zZSAmJiAndmFsaWQnID09PSBsaWNlbnNlLnZhbGlkID8gbGljZW5zZS5rZXkgfHwgJycgOiAnJyk7XG5cdGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyB2YWxpZCwgc2V0VmFsaWQgXSA9IHVzZVN0YXRlKGxpY2Vuc2UudmFsaWQgfHwgJ2ludmFsaWQnKTtcblx0Y29uc3QgWyBleHBpcmF0aW9uLCBzZXRFeHBpcmF0aW9uIF0gPSB1c2VTdGF0ZShsaWNlbnNlLmV4cGlyYXRpb24gfHwgJycpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXG5cdGlmICghIGlzVmlzaWJsZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgdG9nZ2xlTGljZW5zZSA9ICgpID0+IHtcblx0XHRjb25zdCB0b0RvID0gJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnZGVhY3RpdmF0ZScgOiAnYWN0aXZhdGUnO1xuXHRcdHNldFN0YXR1cygnYWN0aXZhdGUnID09PSB0b0RvID8gJ2FjdGl2YXRpbmcnIDogJ2RlYWN0aXZhdGluZycpO1xuXHRcdHNlbmQocHJvQXBpICsgJy90b2dnbGVfbGljZW5zZScsIHtrZXksIGFjdGlvbjogdG9Eb30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRzZXRUb2FzdFR5cGUocmVzcG9uc2Uuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicpO1xuXHRcdFx0c2V0S2V5KCdhY3RpdmF0ZScgPT09IHRvRG8gPyBrZXkgOiAnJyk7XG5cdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdHNldEV4cGlyYXRpb24ocmVzcG9uc2UuZXhwaXJhdGlvbik7XG5cdFx0XHRzZXRWYWxpZChyZXNwb25zZS5zdWNjZXNzICYmICdhY3RpdmF0ZScgPT09IHRvRG8gPyAndmFsaWQnIDogJ25vdF9hY3RpdmUnKTtcblx0XHRcdHNldFN0YXR1cyhmYWxzZSk7XG5cdFx0XHRuZXZlRGFzaC5saWNlbnNlLmV4cGlyYXRpb24gPSByZXNwb25zZS5leHBpcmF0aW9uO1xuXHRcdFx0Y2hhbmdlVGllcihyZXNwb25zZS50aWVyIHx8IDEpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGlmIChuZXZlRGFzaC53aGl0ZUxhYmVsICYmIG5ldmVEYXNoLndoaXRlTGFiZWwuaGlkZUxpY2Vuc2UpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZCBsaWNlbnNlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHR7bmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZEhlYWRpbmcgJiYgPGg0PntuZXZlRGFzaC5zdHJpbmdzLmxpY2Vuc2VDYXJkSGVhZGluZ308L2g0Pn1cblx0XHRcdFx0eyghIG5ldmVEYXNoLndoaXRlTGFiZWwgJiYgbmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZERlc2NyaXB0aW9uKSAmJlxuXHRcdFx0XHQ8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2guc3RyaW5ncy5saWNlbnNlQ2FyZERlc2NyaXB0aW9ufX0vPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVMaWNlbnNlKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRLZXkoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0J3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionICsga2V5LnNsaWNlKC01KSA6XG5cdFx0XHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ0VudGVyIExpY2Vuc2UgS2V5JywgJ25ldmUnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeT17J3ZhbGlkJyAhPT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdHVzIHx8ICEga2V5fVxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0eyEgc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGUnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdFx0XHQoJ2FjdGl2YXRpbmcnID09PSBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHR7dG9hc3QgJiYgPFRvYXN0IHR5cGU9e3RvYXN0VHlwZX0gZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fS8+fVxuXHRcdFx0XHR7ISBbICdub3RfYWN0aXZlJywgJ2ludmFsaWQnIF0uaW5jbHVkZXModmFsaWQpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGljZW5zZS1mb290ZXJcIj5cblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWVzKFsgJ3N0YXR1cy1pY29uJywgJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnc3VjY2VzcycgOiAnZXJyb3InIF0pXG5cdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249eyd2YWxpZCcgPT09IHZhbGlkID8gJ3llcycgOiAnbm8nfS8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWxpZGl0eVwiPlxuXHRcdFx0XHRcdFx0XHR7J3ZhbGlkJyA9PT0gdmFsaWQgPyBfXygnVmFsaWQnLCAnbmV2ZScpIDogX18oJ0V4cGlyZWQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2V4cGlyYXRpb24gJiZcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+LTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXhwaXJlc1wiPlxuXHRcdFx0XHRcdFx0eygndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVzJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVkJywgJ25ldmUnKSkgKyAnICcgKyBleHBpcmF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FzaWRlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7Y2hhbmdlTGljZW5zZVRpZXJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlVGllcjogKG5ld1RpZXIpID0+IHtcblx0XHRcdGNoYW5nZUxpY2Vuc2VUaWVyKG5ld1RpZXIpO1xuXHRcdH1cblx0fTtcbn0pKExpY2Vuc2VDYXJkKTtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWRhc2hcIj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uIGxvYWRpbmdcIj52Mi42LjI8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgbG9nb1wiLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShBcnJheSg2KSkubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpPjxhIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+PC9saT47XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gbG9hZGluZyBwbGFjZWhvbGRlclwiLz47XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQgY29sdW1ucyBzdGFydFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbWl6ZXItcXVpY2stbGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdFx0XHR7ISBuZXZlRGFzaC53aGl0ZUxhYmVsICYmXG5cdFx0XHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hc2lkZT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tICcuL09wdGlvbnMvSW5wdXRGb3JtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9PcHRpb25zL1RvZ2dsZSc7XG5pbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtCdXR0b24sIFRvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHNldFRvYXN0LCBjaGFuZ2VNb2R1bGVTdGF0dXMsIGdldE1vZHVsZVN0YXR1cywgdGllcn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGxpbmtzLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0Y29uc3QgcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChvcHRpb25TbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtsYWJlbCwgdHlwZSwgcGxhY2Vob2xkZXJ9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RleHQnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRGb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdHtyZXF1aXJlZF9hY3Rpb25zICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHJlcXVpcmVkX2FjdGlvbnN9fS8+fVxuXHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdFx0XHRcdFx0XHRcdHshIHJlcXVpcmVkX2FjdGlvbnMgJiZcblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z2V0TW9kdWxlU3RhdHVzKHNsdWcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUsIHRydWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIEFjdGl2YXRlZCcsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgRGVhY3RpdmF0ZWQuJywgJ25ldmUnKSkgKyBgICgke25pY2VuYW1lfSlgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCBhY3RpdmF0ZSBtb2R1bGUuIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRvY3VtZW50YXRpb24udXJsICYmXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtkb2N1bWVudGF0aW9uLnVybH0+e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX08L2E+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdHtsaW5rcyAmJiBnZXRNb2R1bGVTdGF0dXMoc2x1ZykgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0e2xpbmtzLm1hcCgobGluaykgPT4gPEJ1dHRvbiBpc1NlY29uZGFyeSBocmVmPXtsaW5rLnVybH0+e2xpbmsubGFiZWx9PC9CdXR0b24+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0eygwIDwgb3B0aW9ucy5sZW5ndGggJiYgdHJ1ZSA9PT0gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1vcHRpb25zXCI+XG5cdFx0XHRcdFx0e3JlbmRlck9wdGlvbnNBY2NvcmRpb25zKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRNb2R1bGVTdGF0dXMsIGdldExpY2Vuc2VUaWVyfSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0TW9kdWxlU3RhdHVzOiAoc2x1ZykgPT4gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpLFxuXHRcdFx0dGllcjogZ2V0TGljZW5zZVRpZXIoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZVN0YXR1cywgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1czogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKE1vZHVsZUNhcmQpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsImNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbiwgUG9wb3Zlcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgRWRpdG9yU2VsZWN0b3IgPSAoe29uU2VhcmNoLCBlZGl0b3IsIHNldEN1cnJlbnRFZGl0b3J9KSA9PiB7XG5cdGNvbnN0IG1hcCA9IHtcblx0XHQnZWxlbWVudG9yJzoge1xuXHRcdFx0aWNvbjogJ2VsZW1lbnRvci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdFbGVtZW50b3InKVxuXHRcdH0sXG5cdFx0J2JyaXp5Jzoge1xuXHRcdFx0aWNvbjogJ2JyaXp5LnN2ZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0JyaXp5Jylcblx0XHR9LFxuXHRcdCdiZWF2ZXIgYnVpbGRlcic6IHtcblx0XHRcdGljb246ICdiZWF2ZXIucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQmVhdmVyIEJ1aWxkZXInKVxuXHRcdH0sXG5cdFx0J3Rocml2ZSBhcmNoaXRlY3QnOiB7XG5cdFx0XHRpY29uOiAndGhyaXZlLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ1Rocml2ZSBBcmNoaXRlY3QnKVxuXHRcdH0sXG5cdFx0J2RpdmkgYnVpbGRlcic6IHtcblx0XHRcdGljb246ICdkaXZpLnN2ZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0RpdmkgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQnZ3V0ZW5iZXJnJzoge1xuXHRcdFx0aWNvbjogJ2d1dGVuYmVyZy5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdHdXRlbmJlcmcnKVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiBzZXRPcGVuKCEgb3Blbik7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1kcm9wZG93blwiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlRHJvcGRvd259XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0IG9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdlZGl0b3ItaWNvbidcblx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW2VkaXRvcl0uaWNvbn1cblx0XHRcdFx0XHRcdGFsdD17X18oJ0J1aWxkZXIgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdFx0XHQ8c3Bhbj57bWFwW2VkaXRvcl0ubmljZU5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfS8+XG5cdFx0XHRcdFx0e29wZW4gJiYgKFxuXHRcdFx0XHRcdFx0PFBvcG92ZXIgcG9zaXRpb249XCJib3R0b20gcmlnaHRcIiBvbkNsb3NlPXt0b2dnbGVEcm9wZG93bn0gbm9BcnJvdz5cblx0XHRcdFx0XHRcdFx0e29wZW4gJiZcblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gZWRpdG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgb25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEN1cnJlbnRFZGl0b3Ioa2V5KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e25ldmVEYXNoLmFzc2V0cyArICdlZGl0b3ItaWNvbnMvJyArIG1hcFtrZXldLmljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17X18oJ0J1aWxkZXIgTG9nbycsICduZXZlJyl9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC91bD59XG5cdFx0XHRcdFx0XHQ8L1BvcG92ZXI+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0b25TZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdTZWFyY2ggZm9yIGEgc3RhcnRlciBzaXRlJywgJ25ldmUnKSArICcuLi4nfS8+XG5cdFx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL3NlYXJjaC5zdmcnfSBhbHQ9e19fKCdTZWFyY2ggSWNvbicpfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRDdXJyZW50RWRpdG9yfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0Q3VycmVudEVkaXRvcn0gPSBkaXNwYXRjaCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldEN1cnJlbnRFZGl0b3I6IChlZGl0b3IpID0+IHNldEN1cnJlbnRFZGl0b3IoZWRpdG9yKVxuXHRcdH07XG5cdH0pXG4pKEVkaXRvclNlbGVjdG9yKTtcbiIsIi8qZ2xvYmFsIG5ldmVEYXNoKi9cbmltcG9ydCB7aW1wb3J0Q29udGVudCwgaW1wb3J0TW9kcywgaW1wb3J0V2lkZ2V0cywgaW5zdGFsbFBsdWdpbnN9IGZyb20gJy4uLy4uL3V0aWxzL3NpdGUtaW1wb3J0JztcbmltcG9ydCBJbXBvcnRTdGVwcGVyIGZyb20gJy4vSW1wb3J0U3RlcHBlcic7XG5pbXBvcnQgSW1wb3J0TW9kYWxOb3RlIGZyb20gJy4vSW1wb3J0TW9kYWxOb3RlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEltcG9ydE1vZGFsRXJyb3IgZnJvbSAnLi9JbXBvcnRNb2RhbEVycm9yJztcblxuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29uLCBUb2dnbGVDb250cm9sLCBNb2RhbH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW1wb3J0TW9kYWwgPSAoe3NldE1vZGFsLCBzZXRTaXRlLCBlZGl0b3IsIHNpdGVEYXRhfSkgPT4ge1xuXHRcdGNvbnN0IFsgZ2VuZXJhbCwgc2V0R2VuZXJhbCBdID0gdXNlU3RhdGUoe1xuXHRcdFx0Y29udGVudDogdHJ1ZSxcblx0XHRcdGN1c3RvbWl6ZXI6IHRydWUsXG5cdFx0XHR3aWRnZXRzOiB0cnVlXG5cdFx0fSk7XG5cdFx0Y29uc3QgWyBwbHVnaW5zUHJvZ3Jlc3MsIHNldFBsdWdpbnNQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgY29udGVudFByb2dyZXNzLCBzZXRDb250ZW50UHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0XHRjb25zdCBbIGN1c3RvbWl6ZXJQcm9ncmVzcywgc2V0Q3VzdG9taXplclByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdFx0Y29uc3QgWyB3aWRnZXRzUHJvZ3Jlc3MsIHNldFdpZGdldHNQcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgZnJvbnRQYWdlSUQsIHNldEZyb250UGFnZUlEIF0gPSB1c2VTdGF0ZShudWxsKTtcblx0XHRjb25zdCBbIGN1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcCBdID0gdXNlU3RhdGUobnVsbCk7XG5cdFx0Y29uc3QgWyBpbXBvcnRpbmcsIHNldEltcG9ydGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRcdGNvbnN0IFsgcGx1Z2luT3B0aW9ucywgc2V0UGx1Z2luT3B0aW9ucyBdID0gdXNlU3RhdGUoe30pO1xuXHRcdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXHRcdHVzZUVmZmVjdChmdW5jdGlvbiBnZXRQbHVnaW5PcHRpb25zKCkge1xuXHRcdFx0Y29uc3QgbWFuZGF0b3J5ID0gey4uLihzaXRlRGF0YVsnbWFuZGF0b3J5X3BsdWdpbnMnXSB8fCB7fSl9O1xuXHRcdFx0Y29uc3Qgb3B0aW9uYWwgPSB7Li4uKHNpdGVEYXRhWydyZWNvbW1lbmRlZF9wbHVnaW5zJ10gfHwge30pfTtcblx0XHRcdGNvbnN0IGRlZmF1bHRPZmYgPSBzaXRlRGF0YVsnZGVmYXVsdF9vZmZfcmVjb21tZW5kZWRfcGx1Z2lucyddIHx8IFtdO1xuXG5cdFx0XHRPYmplY3Qua2V5cyhtYW5kYXRvcnkpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdG1hbmRhdG9yeVtrZXldID0gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdFx0T2JqZWN0LmtleXMob3B0aW9uYWwpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdG9wdGlvbmFsW2tleV0gPSAhIGRlZmF1bHRPZmYuaW5jbHVkZXMoa2V5KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRzZXRQbHVnaW5PcHRpb25zKHtcblx0XHRcdFx0Li4ub3B0aW9uYWwsXG5cdFx0XHRcdC4uLm1hbmRhdG9yeVxuXHRcdFx0fSk7XG5cdFx0fSwgW10pO1xuXG5cdFx0Y29uc3QgcmVuZGVyTm90ZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiA8SW1wb3J0TW9kYWxOb3RlIGRhdGE9e3NpdGVEYXRhfS8+O1xuXHRcdH07XG5cblx0XHRjb25zdCByZW5kZXJPcHRpb25zID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgbWFwID0ge1xuXHRcdFx0XHRjb250ZW50OiB7XG5cdFx0XHRcdFx0dGl0bGU6IF9fKCdDb250ZW50JywgJ25ldmUnKSxcblx0XHRcdFx0XHRpY29uOiAnYWRtaW4tcG9zdCdcblx0XHRcdFx0fSxcblx0XHRcdFx0Y3VzdG9taXplcjoge1xuXHRcdFx0XHRcdHRpdGxlOiBfXygnQ3VzdG9taXplcicsICduZXZlJyksXG5cdFx0XHRcdFx0aWNvbjogJ2FkbWluLWN1c3RvbWl6ZXInXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldHM6IHtcblx0XHRcdFx0XHR0aXRsZTogX18oJ1dpZGdldHMnLCAnbmV2ZScpLFxuXHRcdFx0XHRcdGljb246ICdhZG1pbi1nZW5lcmljJ1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvcHRpb25zIGdlbmVyYWxcIj5cblx0XHRcdFx0XHQ8aDM+e19fKCdHZW5lcmFsJywgJ25ldmUnKX06PC9oMz5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IGdlbmVyYWxbaWRdfSl9IGljb249e21hcFtpZF0uaWNvbn0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e21hcFtpZF0udGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dlbmVyYWxbaWRdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRHZW5lcmFsKHsuLi5nZW5lcmFsLCBbaWRdOiAhIGdlbmVyYWxbaWRdfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fTtcblx0XHRjb25zdCByZW5kZXJQbHVnaW5zID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgYWxsUGx1Z2lucyA9IHsuLi4oc2l0ZURhdGFbJ3JlY29tbWVuZGVkX3BsdWdpbnMnXSB8fCB7fSksIC4uLihzaXRlRGF0YVsnbWFuZGF0b3J5X3BsdWdpbnMnXSB8fCB7fSl9O1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMgcGx1Z2luc1wiPlxuXG5cdFx0XHRcdFx0PGgzPntfXygnUGx1Z2lucycsICduZXZlJyl9OjwvaDM+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKGFsbFBsdWdpbnMpLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiYWRtaW4tcGx1Z2luc1wiIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2FjdGl2ZSc6IHBsdWdpbk9wdGlvbnNbc2x1Z119KX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGFsbFBsdWdpbnNbc2x1Z119fS8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2x1ZyBpbiBzaXRlRGF0YVsncmVjb21tZW5kZWRfcGx1Z2lucyddICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cGx1Z2luT3B0aW9uc1tzbHVnXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UGx1Z2luT3B0aW9ucyh7Li4ucGx1Z2luT3B0aW9ucywgW3NsdWddOiAhIHBsdWdpbk9wdGlvbnNbc2x1Z119KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcnVuSW1wb3J0KCkge1xuXHRcdFx0Y29uc29sZS5jbGVhcigpO1xuXHRcdFx0aWYgKCEgcGx1Z2luT3B0aW9ucykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnW1NdIFBsdWdpbnMuJyk7XG5cdFx0XHRcdHJ1bkltcG9ydENvbnRlbnQoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ3BsdWdpbnMnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gUGx1Z2lucy4nKTtcblx0XHRcdGluc3RhbGxQbHVnaW5zKHBsdWdpbk9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0aGFuZGxlRXJyb3IocmVzcG9uc2UsICdwbHVnaW5zJyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbRF0gUGx1Z2lucy4nKTtcblx0XHRcdFx0c2V0UGx1Z2luc1Byb2dyZXNzKCdkb25lJyk7XG5cdFx0XHRcdHJ1bkltcG9ydENvbnRlbnQoKTtcblx0XHRcdH0pLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlRXJyb3IoZXJyb3IsICdwbHVnaW5zJykpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1bkltcG9ydENvbnRlbnQoKSB7XG5cdFx0XHRpZiAoISBnZW5lcmFsLmNvbnRlbnQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1tTXSBDb250ZW50LicpO1xuXHRcdFx0XHRydW5JbXBvcnRDdXN0b21pemVyKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHNldEN1cnJlbnRTdGVwKCdjb250ZW50Jyk7XG5cdFx0XHRjb25zb2xlLmxvZygnW1BdIENvbnRlbnQuJyk7XG5cdFx0XHRpbXBvcnRDb250ZW50KHtcblx0XHRcdFx0Y29udGVudEZpbGU6IHNpdGVEYXRhWydjb250ZW50X2ZpbGUnXSxcblx0XHRcdFx0c291cmNlOiBzaXRlRGF0YS5zb3VyY2UsXG5cdFx0XHRcdGZyb250UGFnZTogc2l0ZURhdGFbJ2Zyb250X3BhZ2UnXSxcblx0XHRcdFx0c2hvcFBhZ2VzOiBzaXRlRGF0YVsnc2hvcF9wYWdlcyddLFxuXHRcdFx0XHRkZW1vU2x1Zzogc2l0ZURhdGEuc2x1Zyxcblx0XHRcdFx0ZWRpdG9yXG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnY29udGVudCcpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIENvbnRlbnQuJyk7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsnZnJvbnRwYWdlX2lkJ10pIHtcblx0XHRcdFx0XHRzZXRGcm9udFBhZ2VJRChyZXNwb25zZVsnZnJvbnRwYWdlX2lkJ10pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldENvbnRlbnRQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRydW5JbXBvcnRDdXN0b21pemVyKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnY29udGVudCcpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnRDdXN0b21pemVyKCkge1xuXHRcdFx0aWYgKCEgZ2VuZXJhbC5jdXN0b21pemVyKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gQ3VzdG9taXplci4nKTtcblx0XHRcdFx0cnVuSW1wb3J0V2lkZ2V0cygpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRzZXRDdXJyZW50U3RlcCgnY3VzdG9taXplcicpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1tQXSBDdXN0b21pemVyLicpO1xuXHRcdFx0aW1wb3J0TW9kcyh7XG5cdFx0XHRcdCdzb3VyY2VfdXJsJzogc2l0ZURhdGFbJ2RlbW9fdXJsJ10sXG5cdFx0XHRcdCd0aGVtZV9tb2RzJzogc2l0ZURhdGFbJ3RoZW1lX21vZHMnXSxcblx0XHRcdFx0J3dwX29wdGlvbnMnOiBzaXRlRGF0YVsnd3Bfb3B0aW9ucyddXG5cdFx0XHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0aWYgKCEgcmVzcG9uc2Uuc3VjY2Vzcykge1xuXHRcdFx0XHRcdGhhbmRsZUVycm9yKHJlc3BvbnNlLCAnY3VzdG9taXplcicpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLmxvZygnW0RdIEN1c3RvbWl6ZXIuJyk7XG5cdFx0XHRcdHNldEN1c3RvbWl6ZXJQcm9ncmVzcygnZG9uZScpO1xuXHRcdFx0XHRydW5JbXBvcnRXaWRnZXRzKCk7XG5cdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUVycm9yKGVycm9yLCAnY3VzdG9taXplcicpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5JbXBvcnRXaWRnZXRzKCkge1xuXHRcdFx0aWYgKCEgZ2VuZXJhbC53aWRnZXRzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdbU10gV2lkZ2V0cy4nKTtcblx0XHRcdFx0aW1wb3J0RG9uZSgpO1xuXHRcdFx0fVxuXHRcdFx0c2V0Q3VycmVudFN0ZXAoJ3dpZGdldHMnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdbUF0gV2lkZ2V0cy4nKTtcblx0XHRcdGltcG9ydFdpZGdldHMoc2l0ZURhdGEud2lkZ2V0cykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRoYW5kbGVFcnJvcihyZXNwb25zZSwgJ3dpZGdldHMnKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coJ1tEXSBXaWRnZXRzLicpO1xuXHRcdFx0XHRzZXRXaWRnZXRzUHJvZ3Jlc3MoJ2RvbmUnKTtcblx0XHRcdFx0aW1wb3J0RG9uZSgpO1xuXHRcdFx0fSkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVFcnJvcihlcnJvciwgJ3dpZGdldHMnKSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW1wb3J0RG9uZSgpIHtcblx0XHRcdHNldEN1cnJlbnRTdGVwKCdkb25lJyk7XG5cdFx0XHRzZXRJbXBvcnRpbmcoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yLCBzdGVwKSB7XG5cdFx0XHRzZXRJbXBvcnRpbmcoZmFsc2UpO1xuXHRcdFx0c2V0Q3VycmVudFN0ZXAobnVsbCk7XG5cdFx0XHRpZiAoJ3BsdWdpbnMnID09PSBzdGVwKSB7XG5cdFx0XHRcdHNldENvbnRlbnRQcm9ncmVzcygnc2tpcCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsgJ2NvbnRlbnQnLCAncGx1Z2lucycgXS5pbmNsdWRlcyhzdGVwKSkge1xuXHRcdFx0XHRzZXRDdXN0b21pemVyUHJvZ3Jlc3MoJ3NraXAnKTtcblx0XHRcdH1cblx0XHRcdGlmIChbICdjb250ZW50JywgJ3BsdWdpbnMnLCAnY3VzdG9taXplcicgXS5pbmNsdWRlcyhzdGVwKSkge1xuXHRcdFx0XHRzZXRXaWRnZXRzUHJvZ3Jlc3MoJ3NraXAnKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWFwID0ge1xuXHRcdFx0XHQncGx1Z2lucyc6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBpbnN0YWxsaW5nIHRoZSBuZWNlc3NhcnkgcGx1Z2lucy4nLCAnbmV2ZScpLFxuXHRcdFx0XHQnY29udGVudCc6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBpbXBvcnRpbmcgdGhlIHdlYnNpdGUgY29udGVudC4nLCAnbmV2ZScpLFxuXHRcdFx0XHQnY3VzdG9taXplcic6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSB1cGRhdGluZyB0aGUgY3VzdG9taXplciBzZXR0aW5ncy4nLCAnbmV2ZScpLFxuXHRcdFx0XHQnd2lkZ2V0cyc6IF9fKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBpbXBvcnRpbmcgdGhlIHdpZGdldHMuJywgJ25ldmUnKVxuXHRcdFx0fTtcblxuXHRcdFx0c3dpdGNoIChzdGVwKSB7XG5cdFx0XHRcdGNhc2UgJ3BsdWdpbnMnOlxuXHRcdFx0XHRcdHNldFBsdWdpbnNQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29udGVudCc6XG5cdFx0XHRcdFx0c2V0Q29udGVudFByb2dyZXNzKCdlcnJvcicpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjdXN0b21pemVyJzpcblx0XHRcdFx0XHRzZXRDdXN0b21pemVyUHJvZ3Jlc3MoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dpZGdldHMnOlxuXHRcdFx0XHRcdHNldFdpZGdldHNQcm9ncmVzcygnZXJyb3InKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHNldEVycm9yKGVycm9yLmRhdGEgPyB7bWVzc2FnZTogbWFwW3N0ZXBdLCBjb2RlOiBlcnJvci5kYXRhfSA6IHttZXNzYWdlOiBtYXBbc3RlcF19KTtcblx0XHR9XG5cblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKGRpc21pc3NTaXRlRGF0YSA9IGZhbHNlKSA9PiB7XG5cdFx0XHRpZiAoaW1wb3J0aW5nKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldE1vZGFsKGZhbHNlKTtcblx0XHRcdFx0aWYgKGRpc21pc3NTaXRlRGF0YSkge1xuXHRcdFx0XHRcdHNldFNpdGUobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgYWxsT3B0aW9uc09mZiA9IE9iamVjdC5rZXlzKGdlbmVyYWwpLmV2ZXJ5KGsgPT4gZmFsc2UgPT09IGdlbmVyYWxba10pO1xuXHRcdGNvbnN0IGVkaXRMaW5rTWFwID0ge1xuXHRcdFx0J2VsZW1lbnRvcic6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWxlbWVudG9yYCxcblx0XHRcdCdicml6eSc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vP2JyaXp5LWVkaXRgLFxuXHRcdFx0J2JlYXZlciBidWlsZGVyJzogYCR7bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfS8/ZmxfYnVpbGRlcmAsXG5cdFx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249YXJjaGl0ZWN0JnR2ZT10cnVlYCxcblx0XHRcdCdkaXZpIGJ1aWxkZXInOiBgJHtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9Lz9ldF9mYj0xJlBhZ2VTcGVlZD1vZmZgLFxuXHRcdFx0J2d1dGVuYmVyZyc6IGAke25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWRpdGBcblx0XHR9O1xuXHRcdGNvbnN0IGVkaXRMaW5rID0gZWRpdExpbmtNYXBbZWRpdG9yXTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm9iLWltcG9ydC1tb2RhbFwiXG5cdFx0XHRcdHRpdGxlPXtzaXRlRGF0YS50aXRsZX1cblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG5cdFx0XHRcdHNob3VsZENsb3NlT25DbGlja091dHNpZGU9eyEgaW1wb3J0aW5nfVxuXHRcdFx0XHRpc0Rpc21pc3NpYmxlPXshIGltcG9ydGluZ31cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0eyEgaW1wb3J0aW5nICYmICdkb25lJyAhPT0gY3VycmVudFN0ZXAgJiYgISBlcnJvciA/XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJOb3RlKCl9XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zKCl9XG5cdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdHtyZW5kZXJQbHVnaW5zKCl9XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PiA6XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdHtlcnJvciAmJlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PEltcG9ydE1vZGFsRXJyb3IgbWVzc2FnZT17ZXJyb3IubWVzc2FnZSB8fCBudWxsfSBjb2RlPXtlcnJvci5jb2RlIHx8IG51bGx9Lz5cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxJbXBvcnRTdGVwcGVyIHByb2dyZXNzPXt7XG5cdFx0XHRcdFx0XHRcdFx0cGx1Z2luczogcGx1Z2luc1Byb2dyZXNzLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnRQcm9ncmVzcyxcblx0XHRcdFx0XHRcdFx0XHRjdXN0b21pemVyOiBjdXN0b21pemVyUHJvZ3Jlc3MsXG5cdFx0XHRcdFx0XHRcdFx0d2lkZ2V0czogd2lkZ2V0c1Byb2dyZXNzXG5cdFx0XHRcdFx0XHRcdH19IGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH0gd2lsbERvPXtnZW5lcmFsfS8+XG5cdFx0XHRcdFx0XHRcdHsnZG9uZScgPT09IGN1cnJlbnRTdGVwICYmXG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImltcG9ydC1yZXN1bHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQ29udGVudCB3YXMgc3VjY2Vzc2Z1bGx5IGltcG9ydGVkLiBFbmpveSB5b3VyIG5ldyBzaXRlIScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyEgaW1wb3J0aW5nICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG5cdFx0XHRcdFx0eydkb25lJyAhPT0gY3VycmVudFN0ZXAgP1xuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjbG9zZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0Nsb3NlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdHshIGVycm9yICYmXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17YWxsT3B0aW9uc09mZiB8fCBzaXRlRGF0YVsnZXh0ZXJuYWxfcGx1Z2lucyddfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEltcG9ydGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJ1bkltcG9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnSW1wb3J0JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+IDpcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsb3NlXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZU1vZGFsKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdH19PntfXygnQmFjayB0byBTaXRlcyBMaWJyYXJ5JywgJ25ldmUnKX08L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gub25ib2FyZGluZy5ob21lVXJsfVxuXHRcdFx0XHRcdFx0XHQ+e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXtlZGl0TGlua30+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdBZGQgeW91ciBvd24gY29udGVudCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbjtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldEN1cnJlbnRFZGl0b3IsIGdldEN1cnJlbnRTaXRlfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpLFxuXHRcdFx0c2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRJbXBvcnRNb2RhbFN0YXR1cywgc2V0Q3VycmVudFNpdGV9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNb2RhbDogKHN0YXR1cykgPT4gc2V0SW1wb3J0TW9kYWxTdGF0dXMoc3RhdHVzKSxcblx0XHRcdHNldFNpdGU6IChkYXRhKSA9PiBzZXRDdXJyZW50U2l0ZShkYXRhKVxuXHRcdH07XG5cdH0pXG4pKEltcG9ydE1vZGFsKTtcbiIsImNvbnN0IHtEYXNoaWNvbiwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW1wb3J0TW9kYWxFcnJvciA9ICh7bWVzc2FnZSwgY29kZX0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlbGwgZXJyb3JcIj5cblx0XHRcdHttZXNzYWdlICYmIDxoMz48RGFzaGljb24gaWNvbj1cIndhcm5pbmdcIi8+PHNwYW4+e21lc3NhZ2V9PC9zcGFuPjwvaDM+fVxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGkgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG5ldmVEYXNoLm9uYm9hcmRpbmcuc3RyaW5ncy50cm91Ymxlc2hvb3Rpbmd9fS8+XG5cdFx0XHRcdDxsaSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogbmV2ZURhc2gub25ib2FyZGluZy5zdHJpbmdzLnN1cHBvcnR9fS8+XG5cdFx0XHRcdHtjb2RlICYmIDxsaT57X18oJ0Vycm9yIGNvZGUnLCAnbmV2ZScpfTogPGNvZGU+e2NvZGV9PC9jb2RlPjwvbGk+fVxuXHRcdFx0XHQ8bGk+e19fKCdFcnJvciBsb2cnLCAnbmV2ZScpfTogPEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC5vbmJvYXJkaW5nLmxvZ1VybH0+e25ldmVEYXNoLm9uYm9hcmRpbmcubG9nVXJsfTxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj1cImV4dGVybmFsXCIvPjwvQnV0dG9uPjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0TW9kYWxFcnJvcjtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbiwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSW1wb3J0TW9kYWxOb3RlID0gKHtkYXRhfSkgPT4ge1xuXHRjb25zdCBleHRlcm5hbCA9IGRhdGFbJ2V4dGVybmFsX3BsdWdpbnMnXSB8fCBudWxsO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd3ZWxsJywgeyd3YXJuaW5nJzogZXh0ZXJuYWx9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxoMz5cblx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHQ8c3Bhbj57ZXh0ZXJuYWwgP1xuXHRcdFx0XHRcdF9fKCdUbyBpbXBvcnQgdGhpcyBkZW1vIHlvdSBoYXZlIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW5zJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0X18oJ05vdGUnLCAnbmV2ZScpfTpcblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvaDM+XG5cdFx0XHQ8b2w+XG5cdFx0XHRcdHtleHRlcm5hbCA/XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZXh0ZXJuYWwpLm1hcChzbHVnID0+IDxsaT48QnV0dG9uIGlzTGluayBocmVmPXtleHRlcm5hbFtzbHVnXS51cmx9PntzbHVnfTwvQnV0dG9uPjwvbGk+KSA6XG5cdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGxpPntfXygnV2UgcmVjb21tZW5kIHlvdSBiYWNrdXAgeW91ciB3ZWJzaXRlIGNvbnRlbnQgYmVmb3JlIGF0dGVtcHRpbmcgYSBmdWxsIHNpdGUgaW1wb3J0LicsICduZXZlJyl9PC9saT5cblx0XHRcdFx0XHRcdDxsaT57X18oJ1NvbWUgb2YgdGhlIGRlbW8gaW1hZ2VzIHdpbGwgbm90IGJlIGltcG9ydGVkIGFuZCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVyIGltYWdlcy4nLCAnbmV2ZScpfTwvbGk+XG5cdFx0XHRcdFx0XHR7ZGF0YVsndW5zcGxhc2hfZ2FsbGVyeSddICYmXG5cdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17ZGF0YVsndW5zcGxhc2hfZ2FsbGVyeSddfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0hlcmUgaXMgb3VyIG93biBjb2xsZWN0aW9uIG9mIHJlbGF0ZWQgaW1hZ2VzIHlvdSBjYW4gdXNlIGZvciB5b3VyIHNpdGUuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L29sPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0TW9kYWxOb3RlO1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCBJbXBvcnRTdGVwcGVyID0gKHtjdXJyZW50U3RlcCwgcHJvZ3Jlc3MsIHdpbGxEb30pID0+IHtcblxuXHRjb25zdCBzdGVwc01hcCA9IHtcblx0XHRwbHVnaW5zOiB7XG5cdFx0XHRsYWJlbDogX18oJ0luc3RhbGxpbmcgUGx1Z2lucycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLnBsdWdpbnMsXG5cdFx0XHR3aWxsRG86IHRydWVcblx0XHR9LFxuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdGxhYmVsOiBfXygnSW1wb3J0aW5nIENvbnRlbnQnLCAnbmV2ZScpLFxuXHRcdFx0c3RhdHVzOiBwcm9ncmVzcy5jb250ZW50LFxuXHRcdFx0d2lsbERvOiB3aWxsRG8uY29udGVudFxuXHRcdH0sXG5cdFx0Y3VzdG9taXplcjoge1xuXHRcdFx0bGFiZWw6IF9fKCdJbXBvcnRpbmcgQ3VzdG9taXplciBTZXR0aW5ncycsICduZXZlJyksXG5cdFx0XHRzdGF0dXM6IHByb2dyZXNzLmN1c3RvbWl6ZXIsXG5cdFx0XHR3aWxsRG86IHdpbGxEby5jdXN0b21pemVyXG5cdFx0fSxcblx0XHR3aWRnZXRzOiB7XG5cdFx0XHRsYWJlbDogX18oJ0ltcG9ydGluZyBXaWRnZXRzJywgJ25ldmUnKSxcblx0XHRcdHN0YXR1czogcHJvZ3Jlc3Mud2lkZ2V0cyxcblx0XHRcdHdpbGxEbzogd2lsbERvLndpZGdldHNcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8dWwgY2xhc3NOYW1lPVwic3RlcHBlclwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHN0ZXBzTWFwKS5tYXAoa2V5ID0+IHtcblx0XHRcdFx0Y29uc3Qge2xhYmVsLCBzdGF0dXMsIHdpbGxEb30gPSBzdGVwc01hcFtrZXldO1xuXG5cdFx0XHRcdGlmICghIHdpbGxEbykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoW1xuXHRcdFx0XHRcdCdpY29uJywge1xuXHRcdFx0XHRcdFx0J2xvYWRpbmcnOiBjdXJyZW50U3RlcCA9PT0ga2V5LFxuXHRcdFx0XHRcdFx0J3dhcm5pbmcnOiBjdXJyZW50U3RlcCA9PT0ga2V5LFxuXHRcdFx0XHRcdFx0J3N1Y2Nlc3MnOiAnZG9uZScgPT09IHN0YXR1cyxcblx0XHRcdFx0XHRcdCdlcnJvcic6ICdlcnJvcicgPT09IHN0YXR1cyxcblx0XHRcdFx0XHRcdCdza2lwJzogJ3NraXAnID09PSBzdGF0dXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0pO1xuXG5cdFx0XHRcdGxldCBpY29uID0gJ2Nsb2NrJztcblx0XHRcdFx0aWYgKGN1cnJlbnRTdGVwID09PSBrZXkpIHtcblx0XHRcdFx0XHRpY29uID0gJ3VwZGF0ZSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJ2RvbmUnID09PSBzdGF0dXMpIHtcblx0XHRcdFx0XHRpY29uID0gJ3llcyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJ2Vycm9yJyA9PT0gc3RhdHVzICkge1xuXHRcdFx0XHRcdGljb24gPSAnbm8tYWx0Jztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtjdXJyZW50U3RlcCA9PT0ga2V5ID8gJ2xvYWRpbmcnIDogJyd9Lz5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L3VsPik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRTdGVwcGVyO1xuIiwiY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuY29uc3QgTG9hZGluZyA9ICh7aXNPbmJvYXJkaW5nfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2IgbW9jay1kYXNoXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWhlYWRcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdHtpc09uYm9hcmRpbmcgJiYgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLXByaW1hcnlcIi8+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb3JtXCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItZHJvcGRvd25cIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1pY29uIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2Itc2l0ZXNcIj5cblx0XHRcdFx0XHR7WyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5IF0ubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtpc09uYm9hcmRpbmcgJiYgPGRpdiBjbGFzc05hbWU9XCJvYi1mb290ZXJcIi8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdGNvbnN0IHtnZXRPbmJvYXJkaW5nU3RhdHVzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7aXNPbmJvYXJkaW5nOiBnZXRPbmJvYXJkaW5nU3RhdHVzKCl9XG5cdFx0O1xufSkoTG9hZGluZyk7XG4iLCJpbXBvcnQgRWRpdG9yU2VsZWN0b3IgZnJvbSAnLi9FZGl0b3JTZWxlY3Rvcic7XG5pbXBvcnQgU3RhcnRlclNpdGVDYXJkIGZyb20gJy4vU3RhcnRlclNpdGVDYXJkJztcbmltcG9ydCBQcmV2aWV3RnJhbWUgZnJvbSAnLi9QcmV2aWV3RnJhbWUnO1xuaW1wb3J0IEltcG9ydE1vZGFsIGZyb20gJy4vSW1wb3J0TW9kYWwnO1xuaW1wb3J0IE1pZ3JhdGlvbiBmcm9tICcuL01pZ3JhdGlvbic7XG5pbXBvcnQgVml6U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuXG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IE9uYm9hcmRpbmcgPSAoe3NpdGVzLCB1cHNlbGxzLCBlZGl0b3IsIHByZXZpZXdPcGVuLCBjdXJyZW50U2l0ZURhdGEsIGltcG9ydE1vZGFsLCBpc09uYm9hcmRpbmcsIGNhbmNlbE9uYm9hcmRpbmcsIG1pZ3JhdGlvbn0pID0+IHtcblx0Y29uc3QgWyBzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnkgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyBtYXhTaG93biwgc2V0TWF4U2hvd24gXSA9IHVzZVN0YXRlKDkpO1xuXG5cdGNvbnN0IGZpbHRlclNpdGVzID0gKHNpdGVzKSA9PiB7XG5cdFx0T2JqZWN0LmtleXMoc2l0ZXMpLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0c2l0ZXNbc2x1Z10uc2x1ZyA9IHNsdWc7XG5cdFx0fSk7XG5cblx0XHRzaXRlcyA9IE9iamVjdC52YWx1ZXMoc2l0ZXMpO1xuXG5cdFx0aWYgKCEgc2VhcmNoUXVlcnkpIHtcblx0XHRcdHJldHVybiBzaXRlcztcblx0XHR9XG5cblx0XHRjb25zdCBmdXNlID0gbmV3IEZ1c2Uoc2l0ZXMsIHtcblx0XHRcdGluY2x1ZGVTY29yZTogdHJ1ZSxcblx0XHRcdGtleXM6IFsgJ3RpdGxlJywgJ3NsdWcnLCAna2V5d29yZHMnIF1cblx0XHR9KTtcblx0XHRjb25zdCBzZWFyY2ggPSBmdXNlLnNlYXJjaChzZWFyY2hRdWVyeSk7XG5cdFx0cmV0dXJuIHNlYXJjaC5tYXAoaXRlbSA9PiBpdGVtLml0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IGdldEFsbFNpdGVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNpdGVzRGF0YSA9IHNpdGVzICYmIHNpdGVzW2VkaXRvcl0gPyBmaWx0ZXJTaXRlcyhzaXRlc1tlZGl0b3JdKSA6IFtdO1xuXHRcdGNvbnN0IHVwc2VsbHNEYXRhID0gdXBzZWxscyAmJiB1cHNlbGxzW2VkaXRvcl0gPyBmaWx0ZXJTaXRlcyh1cHNlbGxzW2VkaXRvcl0pIDogW107XG5cdFx0cmV0dXJuIFsgLi4uc2l0ZXNEYXRhLCAuLi51cHNlbGxzRGF0YSBdO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlclNpdGVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IGFsbERhdGEgPSBnZXRBbGxTaXRlcygpO1xuXG5cdFx0cmV0dXJuIGFsbERhdGEuc2xpY2UoMCwgbWF4U2hvd24pLm1hcChzaXRlID0+IHtcblx0XHRcdHJldHVybiA8U3RhcnRlclNpdGVDYXJkIHVwc2VsbD17c2l0ZVsnaW5fcHJvJ119IGRhdGE9e3NpdGV9Lz47XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0U2l0ZU5hdiA9IChwcmV2ID0gZmFsc2UpID0+IHtcblx0XHRpZiAobnVsbCA9PT0gY3VycmVudFNpdGVEYXRhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYWxsU2l0ZXMgPSBnZXRBbGxTaXRlcygpO1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gYWxsU2l0ZXMuaW5kZXhPZihjdXJyZW50U2l0ZURhdGEpO1xuXG5cdFx0aWYgKC0xID09PSBwb3NpdGlvbikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKDEgPT09IGFsbFNpdGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKHByZXYgJiYgMCA9PT0gcG9zaXRpb24pIHtcblx0XHRcdHJldHVybiBhbGxTaXRlc1thbGxTaXRlcy5sZW5ndGggLSAxXTtcblx0XHR9XG5cblx0XHRpZiAoISBwcmV2ICYmIHBvc2l0aW9uID09PSBhbGxTaXRlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRyZXR1cm4gYWxsU2l0ZXNbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbFNpdGVzW3ByZXYgPyBwb3NpdGlvbiAtIDEgOiBwb3NpdGlvbiArIDFdO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlbmRlck1pZ3JhdGlvbigpIHtcblx0XHRpZiAoISBtaWdyYXRpb24pIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gPE1pZ3JhdGlvbiBkYXRhPXttaWdyYXRpb259Lz47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2JcIj5cblx0XHRcdFx0e3JlbmRlck1pZ3JhdGlvbigpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWhlYWRcIj5cblx0XHRcdFx0XHQ8aDI+e19fKCdSZWFkeSB0byB1c2UgcHJlLWJ1aWx0IHdlYnNpdGVzIHdpdGggMS1jbGljayBpbnN0YWxsYXRpb24nLCAnbmV2ZScpfTwvaDI+XG5cdFx0XHRcdFx0PHA+e25ldmVEYXNoLnN0cmluZ3Muc3RhcnRlclNpdGVzVGFiRGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdHtpc09uYm9hcmRpbmcgJiZcblx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBvbkNsaWNrPXtjYW5jZWxPbmJvYXJkaW5nfT57X18oJ0tlZXAgdGhlIEN1cnJlbnQgTGF5b3V0JywgJ25ldmUnKX08L0J1dHRvbj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWJvZHlcIj5cblx0XHRcdFx0XHQ8RWRpdG9yU2VsZWN0b3Jcblx0XHRcdFx0XHRcdG9uU2VhcmNoPXsocXVlcnkpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoUXVlcnkocXVlcnkpO1xuXHRcdFx0XHRcdFx0XHRzZXRNYXhTaG93big5KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRxdWVyeT17c2VhcmNoUXVlcnl9Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXNpdGVzXCI+XG5cdFx0XHRcdFx0XHR7KHNpdGVzIHx8IHVwc2VsbHMpICYmIHJlbmRlclNpdGVzKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PFZpelNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCEgaXNWaXNpYmxlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldE1heFNob3duKG1heFNob3duICsgOSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2hlaWdodDogMTAsIHdpZHRoOiAxMCwgZGlzcGxheTogJ2Jsb2NrJ319Lz5cblx0XHRcdFx0XHQ8L1ZpelNlbnNvcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsocHJldmlld09wZW4gJiYgY3VycmVudFNpdGVEYXRhKSAmJiA8UHJldmlld0ZyYW1lIG5leHQ9e2dldFNpdGVOYXYoKX0gcHJldj17Z2V0U2l0ZU5hdih0cnVlKX0vPn1cblx0XHRcdHsoaW1wb3J0TW9kYWwgJiYgY3VycmVudFNpdGVEYXRhKSAmJiA8SW1wb3J0TW9kYWwvPn1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHtzZXRPbmJvYXJkaW5nU3RhdGV9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjYW5jZWxPbmJvYXJkaW5nOiAoKSA9PiB7XG5cdFx0XHRcdHNldE9uYm9hcmRpbmdTdGF0ZShmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3Qoc2VsZWN0ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRTaXRlcyxcblx0XHRcdGdldFVwc2VsbHMsXG5cdFx0XHRnZXRDdXJyZW50RWRpdG9yLFxuXHRcdFx0Z2V0UHJldmlld1N0YXR1cyxcblx0XHRcdGdldEN1cnJlbnRTaXRlLFxuXHRcdFx0Z2V0SW1wb3J0TW9kYWxTdGF0dXMsXG5cdFx0XHRnZXRPbmJvYXJkaW5nU3RhdHVzLFxuXHRcdFx0Z2V0TWlncmF0aW9uRGF0YVxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlczogZ2V0U2l0ZXMoKSxcblx0XHRcdHVwc2VsbHM6IGdldFVwc2VsbHMoKSxcblx0XHRcdGVkaXRvcjogZ2V0Q3VycmVudEVkaXRvcigpLFxuXHRcdFx0cHJldmlld09wZW46IGdldFByZXZpZXdTdGF0dXMoKSxcblx0XHRcdGN1cnJlbnRTaXRlRGF0YTogZ2V0Q3VycmVudFNpdGUoKSxcblx0XHRcdGltcG9ydE1vZGFsOiBnZXRJbXBvcnRNb2RhbFN0YXR1cygpLFxuXHRcdFx0aXNPbmJvYXJkaW5nOiBnZXRPbmJvYXJkaW5nU3RhdHVzKCksXG5cdFx0XHRtaWdyYXRpb246IGdldE1pZ3JhdGlvbkRhdGEoKVxuXHRcdH07XG5cdH0pXG4pKE9uYm9hcmRpbmcpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IHtpbnN0YWxsUGx1Z2luc30gZnJvbSAnLi4vLi4vdXRpbHMvc2l0ZS1pbXBvcnQnO1xuaW1wb3J0IEltcG9ydE1vZGFsTm90ZSBmcm9tICcuL0ltcG9ydE1vZGFsTm90ZSc7XG5pbXBvcnQgSW1wb3J0TW9kYWxFcnJvciBmcm9tICcuL0ltcG9ydE1vZGFsRXJyb3InO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtEYXNoaWNvbiwgQnV0dG9uLCBNb2RhbH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBNaWdyYXRpb24gPSAoe2RhdGEsIGRpc21pc3NNaWdyYXRpb24sIHNldFRvYXN0fSkgPT4ge1xuXHRjb25zdCBbIG1vZGFsT3Blbiwgc2V0TW9kYWxPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgbWlncmF0aW5nLCBzZXRNaWdyYXRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbIGZyb250UGFnZUlELCBzZXRGcm9udFBhZ2VJRCBdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG5cdFx0aWYgKCdkb25lJyA9PT0gbWlncmF0aW5nKSB7XG5cdFx0XHRkaXNtaXNzTWlncmF0aW9uKCk7XG5cdFx0fVxuXHRcdHNldE1vZGFsT3BlbihmYWxzZSk7XG5cdFx0c2V0RXJyb3IobnVsbCk7XG5cdFx0c2V0TWlncmF0aW5nKGZhbHNlKTtcblx0fTtcblxuXHRmdW5jdGlvbiBzdGFydE1pZ3JhdGlvbigpIHtcblx0XHRjb25zdCBwbHVnaW5zID0gT2JqZWN0LmtleXMoZGF0YS5tYW5kYXRvcnlfcGx1Z2lucykucmVkdWNlKGZ1bmN0aW9uIChwLCBrZXkpIHtcblx0XHRcdHBba2V5XSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9LCB7fSk7XG5cblx0XHRpbnN0YWxsUGx1Z2lucyhwbHVnaW5zKS50aGVuKHIgPT4ge1xuXHRcdFx0c2V0TWlncmF0aW5nKHRydWUpO1xuXHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdHNldEVycm9yKHtcblx0XHRcdFx0XHRjb2RlOiByLmRhdGEgfHwgbnVsbCxcblx0XHRcdFx0XHRtZXNzYWdlOiBfXygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgaW5zdGFsbGluZyB0aGUgbmVjZXNzYXJ5IHBsdWdpbnMuJywgJ25ldmUnKVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2V0TWlncmF0aW5nKGZhbHNlKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge3RlbXBsYXRlLCB0ZW1wbGF0ZV9uYW1lfSA9IGRhdGE7XG5cdFx0XHRzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvbWlncmF0ZV9mcm9udHBhZ2UnLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGVtcGxhdGUsXG5cdFx0XHRcdFx0dGVtcGxhdGVfbmFtZVxuXHRcdFx0XHR9XG5cdFx0XHQpLnRoZW4ociA9PiB7XG5cdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHNldEVycm9yKHtcblx0XHRcdFx0XHRcdGNvZGU6IHIuZGF0YSB8fCBudWxsLFxuXHRcdFx0XHRcdFx0bWVzc2FnZTogX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGltcG9ydGluZyB0aGUgd2Vic2l0ZSBjb250ZW50LicsICduZXZlJylcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRNaWdyYXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRGcm9udFBhZ2VJRChyLmRhdGEpO1xuXHRcdFx0XHRzZXRNaWdyYXRpbmcoJ2RvbmUnKTtcblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCByZW5kZXJNb2RhbCA9ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm9iLWltcG9ydC1tb2RhbCBtaWdyYXRpb25cIlxuXHRcdFx0XHR0aXRsZT17X18oJ01pZ3JhdGUnLCAnbmV2ZScpICsgJyAnICsgZGF0YS50aGVtZV9uYW1lfVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cblx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ISBtaWdyYXRpbmd9XG5cdFx0XHRcdGlzRGlzbWlzc2libGU9eyEgbWlncmF0aW5nfVxuXHRcdFx0PlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG5cdFx0XHRcdFx0XHR7ZXJyb3IgJiYgPEltcG9ydE1vZGFsRXJyb3IgbWVzc2FnZT17ZXJyb3IubWVzc2FnZSB8fCBudWxsfSBjb2RlPXtlcnJvci5jb2RlIHx8IG51bGx9Lz59XG5cdFx0XHRcdFx0XHR7ZmFsc2UgPT09IG1pZ3JhdGluZyAmJiAhIGVycm9yICYmXG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxJbXBvcnRNb2RhbE5vdGUgZGF0YT17ZGF0YX0vPlxuXHRcdFx0XHRcdFx0XHR7ZGF0YS5tYW5kYXRvcnlfcGx1Z2lucyAmJlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHQ8aDM+e19fKCdUaGUgZm9sbG93aW5nIHBsdWdpbnMgd2lsbCBiZSBpbnN0YWxsZWQnLCAnbmV2ZScpfTo8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5tYW5kYXRvcnlfcGx1Z2lucykubWFwKGsgPT4gPGxpPi0ge2RhdGEubWFuZGF0b3J5X3BsdWdpbnNba119PC9saT4pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHsnZG9uZScgPT09IG1pZ3JhdGluZyAmJlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaW1wb3J0LXJlc3VsdFwiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ0NvbnRlbnQgd2FzIHN1Y2Nlc3NmdWxseSBpbXBvcnRlZC4gRW5qb3kgeW91ciBuZXcgc2l0ZSEnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0cnVlID09PSBtaWdyYXRpbmcgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJ1cGRhdGVcIiBzaXplPXs1MH0vPlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57X18oJ01pZ3JhdGluZycsICduZXZlJyl9Li4uPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyghIG1pZ3JhdGluZyB8fCAnZG9uZScgPT09IG1pZ3JhdGluZykgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J2RvbmUnICE9PSBtaWdyYXRpbmd9XG5cdFx0XHRcdFx0XHRcdGlzTGluaz17J2RvbmUnID09PSBtaWdyYXRpbmd9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J2RvbmUnID09PSBtaWdyYXRpbmcgPyAnY2xvc2UnIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17Y2xvc2VNb2RhbH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0eydkb25lJyA9PT0gbWlncmF0aW5nID8gX18oJ0Nsb3NlJywgJ25ldmUnKSA6IF9fKCdDYW5jZWwnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHR7KCEgZXJyb3IgJiYgJ2RvbmUnICE9PSBtaWdyYXRpbmcpID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0TWlncmF0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdTdGFydCBNaWdyYXRpb24nLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2Ake25ldmVEYXNoLm9uYm9hcmRpbmcuaG9tZVVybH0vd3AtYWRtaW4vcG9zdC5waHA/cG9zdD0ke2Zyb250UGFnZUlEfSZhY3Rpb249ZWxlbWVudG9yYH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgQ29udGVudCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC5vbmJvYXJkaW5nLmhvbWVVcmx9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdWaWV3IFdlYnNpdGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItbWlncmF0aW9uXCI+XG5cdFx0XHR7bW9kYWxPcGVuICYmIHJlbmRlck1vZGFsKCl9XG5cdFx0XHQ8aDI+e2RhdGEuaGVhZGluZ308L2gyPlxuXHRcdFx0PHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHN0YXJ0ZXItc2l0ZS1jYXJkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtkYXRhLnNjcmVlbnNob3R9IGFsdD17ZGF0YS50aGVtZV9uYW1lfS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnRoZW1lX25hbWV9PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRNb2RhbE9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PntfXygnTWlncmF0ZScsICduZXZlJykgKyAnICcgKyBkYXRhLnRoZW1lX25hbWV9PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9kaXNtaXNzX21pZ3JhdGlvbicsIHtcblx0XHRcdFx0XHRcdFx0dGhlbWVfbW9kOiBkYXRhLnRoZW1lX21vZFxuXHRcdFx0XHRcdFx0fSkudGhlbihyID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdEaXNtaXNzZWQnLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0ZGlzbWlzc01pZ3JhdGlvbigpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PntfXygnRGlzbWlzcycsICduZXZlJyl9PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaChkaXNwYXRjaCA9PiB7XG5cdGNvbnN0IHtzZXRNaWdyYXRpb25EYXRhfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRyZXR1cm4ge1xuXHRcdGRpc21pc3NNaWdyYXRpb246ICgpID0+IHtcblx0XHRcdHNldE1pZ3JhdGlvbkRhdGEobnVsbCk7XG5cdFx0fSxcblx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHtcblx0XHRcdHNldFRvYXN0KG1lc3NhZ2UpO1xuXHRcdH1cblx0fTtcbn0pKE1pZ3JhdGlvbik7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1pZ3JhdGlvbjtcbiIsImNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFByZXZpZXdGcmFtZSA9ICh7bmV4dCwgcHJldiwgc2l0ZURhdGEsIHNldFNpdGUsIHNldFByZXZpZXcsIHNldE1vZGFsfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItcHJldmlld1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCI+XG5cdFx0XHRcdDxpZnJhbWUgc3JjPXtzaXRlRGF0YVsnZGVtb191cmwnXX0gZnJhbWVib3JkZXI9XCIwXCIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cblx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiIHNpemU9ezUwfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1iYXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0b3JcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFByZXZpZXcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKG51bGwpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsb3NlXCJcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2xvc2UnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0aWNvbj1cIm5vXCIvPlxuXG5cdFx0XHRcdFx0e3ByZXYgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKHByZXYpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInByZXZcIlxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdQcmV2aW91cycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRpY29uPVwiYXJyb3ctbGVmdC1hbHQyXCJcblx0XHRcdFx0XHQvPn1cblxuXHRcdFx0XHRcdHtuZXh0ICYmIDxCdXR0b25cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0U2l0ZShuZXh0KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0XCJcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTmV4dCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRpY29uPVwiYXJyb3ctcmlnaHQtYWx0MlwiXG5cdFx0XHRcdFx0Lz59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHR7c2l0ZURhdGFbJ2luX3BybyddID9cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXBncmFkZVwiXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRocmVmPXtzaXRlRGF0YVsnb3V0Ym91bmRfbGluayddfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW1wb3J0XCJcblx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNldE1vZGFsKHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7X18oJ0ltcG9ydCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3Qoc2VsZWN0ID0+IHtcblx0XHRjb25zdCB7Z2V0Q3VycmVudFNpdGV9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l0ZURhdGE6IGdldEN1cnJlbnRTaXRlKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKGRpc3BhdGNoID0+IHtcblx0XHRjb25zdCB7c2V0Q3VycmVudFNpdGUsIHNldFByZXZpZXdTdGF0dXMsIHNldEltcG9ydE1vZGFsU3RhdHVzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2l0ZTogKGRhdGEpID0+IHNldEN1cnJlbnRTaXRlKGRhdGEpLFxuXHRcdFx0c2V0UHJldmlldzogKHN0YXR1cykgPT4gc2V0UHJldmlld1N0YXR1cyhzdGF0dXMpLFxuXHRcdFx0c2V0TW9kYWw6IChzdGF0dXMpID0+IHNldEltcG9ydE1vZGFsU3RhdHVzKHN0YXR1cylcblx0XHR9O1xuXHR9KVxuKShQcmV2aWV3RnJhbWUpO1xuIiwiY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7d2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IFN0YXJ0ZXJTaXRlQ2FyZCA9ICh7ZGF0YSwgdXBzZWxsLCBzZXRTaXRlLCBzZXRQcmV2aWV3LCBzZXRNb2RhbH0pID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJmYXZcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIGljb249XCJzdGFyLWZpbGxlZFwiLz5cblx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInByZXZpZXdcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRTaXRlKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHRzZXRQcmV2aWV3KHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ1ByZXZpZXcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHshIHVwc2VsbCAmJlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImltcG9ydFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFNpdGUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdHNldE1vZGFsKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0ltcG9ydCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuXHRcdFx0XHR7dXBzZWxsICYmIDxzcGFuIGNsYXNzTmFtZT1cInByby1iYWRnZVwiPntfXygnUHJvJywgJ25ldmUnKX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7c2V0Q3VycmVudFNpdGUsIHNldFByZXZpZXdTdGF0dXMsIHNldEltcG9ydE1vZGFsU3RhdHVzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0cmV0dXJuIHtcblx0XHRzZXRTaXRlOiAoZGF0YSkgPT4gc2V0Q3VycmVudFNpdGUoZGF0YSksXG5cdFx0c2V0UHJldmlldzogKHN0YXR1cykgPT4gc2V0UHJldmlld1N0YXR1cyhzdGF0dXMpLFxuXHRcdHNldE1vZGFsOiAoc3RhdHVzKSA9PiBzZXRJbXBvcnRNb2RhbFN0YXR1cyhzdGF0dXMpXG5cdH07XG59KVxuKFN0YXJ0ZXJTaXRlQ2FyZCk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdHNldFNpdGVzKHNpdGVzKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfU0lURVMnLFxuXHRcdFx0cGF5bG9hZDoge3NpdGVzfVxuXHRcdH07XG5cdH0sXG5cdHNldFVwc2VsbHModXBzZWxscykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1VQU0VMTFMnLFxuXHRcdFx0cGF5bG9hZDoge3Vwc2VsbHN9XG5cdFx0fTtcblx0fSxcblx0c2V0TWlncmF0aW9uRGF0YShtaWdyYXRpb25EYXRhKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfTUlHUkFUSU9OX0RBVEEnLFxuXHRcdFx0cGF5bG9hZDoge21pZ3JhdGlvbkRhdGF9XG5cdFx0fTtcblx0fSxcblx0c2V0Q3VycmVudEVkaXRvcihlZGl0b3IpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9DVVJSRU5UX0VESVRPUicsXG5cdFx0XHRwYXlsb2FkOiB7ZWRpdG9yfVxuXHRcdH07XG5cdH0sXG5cdHNldEN1cnJlbnRTaXRlKHNpdGVEYXRhKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfRk9DVVNFRF9TSVRFJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlRGF0YX1cblx0XHR9O1xuXHR9LFxuXHRzZXRQcmV2aWV3U3RhdHVzKHByZXZpZXdTdGF0dXMpIHtcblx0XHRpZiAocHJldmlld1N0YXR1cykge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvYi1vdmVyZmxvdy1vZmYnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvYi1vdmVyZmxvdy1vZmYnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfUFJFVklFV19TVEFUVVMnLFxuXHRcdFx0cGF5bG9hZDoge3ByZXZpZXdTdGF0dXN9XG5cdFx0fTtcblx0fSxcblx0c2V0SW1wb3J0TW9kYWxTdGF0dXMoaW1wb3J0TW9kYWxTdGF0dXMpIHtcblx0XHRpZiAoaW1wb3J0TW9kYWxTdGF0dXMpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb2Itb3ZlcmZsb3ctb2ZmJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX0lNUE9SVF9NT0RBTF9TVEFUVVMnLFxuXHRcdFx0cGF5bG9hZDoge2ltcG9ydE1vZGFsU3RhdHVzfVxuXHRcdH07XG5cdH0sXG5cdHNldE9uYm9hcmRpbmdTdGF0ZShzdGF0ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX09OQk9BUkRJTkcnLFxuXHRcdFx0cGF5bG9hZDoge3N0YXRlfVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzaXRlczogbnVsbCxcblx0dXBzZWxsczogbnVsbCxcblx0ZWRpdG9yOiAnZWxlbWVudG9yJyxcblx0cHJldmlld1N0YXR1czogZmFsc2UsXG5cdGltcG9ydE1vZGFsU3RhdHVzOiBmYWxzZSxcblx0Y3VycmVudFNpdGU6IG51bGwsXG5cdGltcG9ydGluZzogZmFsc2UsXG5cdGlzT25ib2FyZGluZzogbmV2ZURhc2gub25ib2FyZGluZy5vbmJvYXJkaW5nIHx8IGZhbHNlLFxuXHRtaWdyYXRpb25EYXRhOiBudWxsXG59O1xuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9TSVRFUyc6XG5cdFx0XHRjb25zdCB7c2l0ZXN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2l0ZXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1VQU0VMTFMnOlxuXHRcdFx0Y29uc3Qge3Vwc2VsbHN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXBzZWxsc1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfTUlHUkFUSU9OX0RBVEEnOlxuXHRcdFx0Y29uc3Qge21pZ3JhdGlvbkRhdGF9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bWlncmF0aW9uRGF0YVxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfQ1VSUkVOVF9FRElUT1InOlxuXHRcdFx0Y29uc3Qge2VkaXRvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlZGl0b3Jcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX0ZPQ1VTRURfU0lURSc6XG5cdFx0XHRjb25zdCB7c2l0ZURhdGF9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudFNpdGU6IHNpdGVEYXRhXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9QUkVWSUVXX1NUQVRVUyc6XG5cdFx0XHRjb25zdCB7cHJldmlld1N0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRwcmV2aWV3U3RhdHVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9JTVBPUlRfTU9EQUxfU1RBVFVTJzpcblx0XHRcdGNvbnN0IHtpbXBvcnRNb2RhbFN0YXR1c30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpbXBvcnRNb2RhbFN0YXR1c1xuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfT05CT0FSRElORyc6XG5cdFx0XHRjb25zdCB7c3RhdHVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGlzT25ib2FyZGluZzogc3RhdHVzXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGdldFNpdGVzOiAoc3RhdGUpID0+IHN0YXRlLnNpdGVzLFxuXHRnZXRVcHNlbGxzOiAoc3RhdGUpID0+IHN0YXRlLnVwc2VsbHMsXG5cdGdldE1pZ3JhdGlvbkRhdGE6IChzdGF0ZSkgPT4gc3RhdGUubWlncmF0aW9uRGF0YSxcblx0Z2V0Q3VycmVudEVkaXRvcjogKHN0YXRlKSA9PiBzdGF0ZS5lZGl0b3IsXG5cdGdldEN1cnJlbnRTaXRlOiAoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRTaXRlLFxuXHRnZXRQcmV2aWV3U3RhdHVzOiAoc3RhdGUpID0+IHN0YXRlLnByZXZpZXdTdGF0dXMsXG5cdGdldEltcG9ydE1vZGFsU3RhdHVzOiAoc3RhdGUpID0+IHN0YXRlLmltcG9ydE1vZGFsU3RhdHVzLFxuXHRnZXRPbmJvYXJkaW5nU3RhdHVzOiAoc3RhdGUpID0+IHN0YXRlLmlzT25ib2FyZGluZ1xufTtcbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IElucHV0Rm9ybSA9ICh7c2x1ZywgbGFiZWwsIHBsYWNlaG9sZGVyLCBnZXRPcHRpb24sIHNldFRvYXN0LCBjaGFuZ2VPcHRpb259KSA9PiB7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShnZXRPcHRpb24oc2x1ZykpO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0ZXh0Jz5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtcblx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKHNsdWcsIHZhbHVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KHRydWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3Qoci5tZXNzYWdlID8gci5tZXNzYWdlIDogZmFsc2UpO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0+XG5cdFx0XHRcdHtsYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj17c2x1Z30+e2xhYmVsfTwvbGFiZWw+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGlkPXtzbHVnfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e1xuXHRcdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bG9hZGluZyA/ICdpcy1sb2FkaW5nJyA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17bG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTYXZlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0aWNvbj17bG9hZGluZyA/ICd1cGRhdGUnIDogJ2VkaXRvci1icmVhayd9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0UHJvT3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0UHJvT3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoSW5wdXRGb3JtKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb24gYXMgY2hhbmdlU2V0dGluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVG9nZ2xlID0gKHtzbHVnLCBsYWJlbCwgZ2V0T3B0aW9uLCBjaGFuZ2VPcHRpb24sIHNldFRvYXN0fSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0b2dnbGUnPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2hlY2tlZD17Z2V0T3B0aW9uKHNsdWcpfVxuXHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdGNoYW5nZVNldHRpbmcoIHNsdWcsIHZhbHVlICkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCByLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUb2FzdCggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRQcm9PcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRQcm9PcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShUb2dnbGUpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcblx0Y29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuXHRjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG5cdGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IHN0cmluZ01hcCA9IHtcblx0XHQnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG5cdFx0J2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG5cdFx0J2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG5cdFx0XHRcdFx0aXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG5cdFx0XHRcdFx0aXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuXHRcdFx0XHRcdGRpc2FibGVkPXtpblByb2dyZXNzfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG5cdFx0XHRcdFx0XHRpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGlvbignYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGdldChkYXRhW2FjdGlvbl0sIHRydWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKCEgci5vaykge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG5cdFx0XHRcdFx0XHRcdFx0c2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHNldEFjdGlvbignYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZXRJblByb2dyZXNzKGZhbHNlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cblx0XHRcdFx0XHR7aW5Qcm9ncmVzcyAmJiAoXG5cdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuXHRcdFx0XHRcdFx0XHR7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgaW5zdGFsbFBsdWdpbiA9IChzbHVnKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHR3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuXHRcdFx0c2x1Zyxcblx0XHRcdHN1Y2Nlc3M6IChyKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKGVycikgPT4ge1xuXG5cdFx0XHRcdC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuXHRcdFx0XHRyZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IFNpZGViYXIgPSAoe2N1cnJlbnRUYWIsIHNldFRvYXN0LCBsb2dnZXJWYWx1ZX0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKCd5ZXMnID09PSBsb2dnZXJWYWx1ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdHshIG5ldmVEYXNoLndoaXRlTGFiZWwgJiZcblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQXJlIHlvdSBhcmUgZW5qb3lpbmcgTmV2ZT8gV2Ugd291bGQgbG92ZSB0byBoZWFyIHlvdXIgZmVlZGJhY2suJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oJ25ldmVfbG9nZ2VyX2ZsYWcnLCB2YWx1ZSA/ICd5ZXMnIDogJ25vJywgZmFsc2UsIGZhbHNlKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCB1cGRhdGUgb3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcoISB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoRGlzcGF0Y2goZGlzcGF0Y2ggPT4ge1xuXHRcdGNvbnN0IHtzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pLCB3aXRoU2VsZWN0KHNlbGVjdCA9PiB7XG5cdFx0Y29uc3Qge2dldE9wdGlvbn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxvZ2dlclZhbHVlOiBnZXRPcHRpb24oJ25ldmVfbG9nZ2VyX2ZsYWcnKVxuXHRcdH07XG5cdH0pXG4pKFNpZGViYXIpO1xuIiwiY29uc3Qge1NuYWNrYmFyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3QgR2xvYmFsU25hY2tiYXIgPSAoe3RvYXN0LCBzZXRUb2FzdH0pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFRvYXN0KG51bGwpO1xuXHRcdH0sIDMwMDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWVzc2FnZSA9IHRvYXN0KCk7XG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdG9wYWNpdHk6IG51bGwgPT09IG1lc3NhZ2UgPyAwIDogMVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0PFNuYWNrYmFyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZGFzaC1ub3RpY2UnXG5cdFx0XHQ+XG5cdFx0XHRcdHsnYm9vbGVhbicgPT09IHR5cGVvZiBtZXNzYWdlID9cblx0XHRcdFx0XHQoZmFsc2UgPT09IG1lc3NhZ2UgP1xuXHRcdFx0XHRcdFx0X18oJ0NvdWxkIG5vdCBVcGRhdGUgT3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0X18oJ09wdGlvbiBVcGRhdGVkJywgJ25ldmUnKSkgOlxuXHRcdFx0XHRcdHRvYXN0KClcblx0XHRcdFx0fVxuXHRcdFx0PC9TbmFja2Jhcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFRvYXN0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6ICgpID0+IGdldFRvYXN0KClcblx0XHR9O1xuXHR9KVxuKShHbG9iYWxTbmFja2Jhcik7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHt0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFRhYnNDb250ZW50ID0gKHtjdXJyZW50VGFiLCBzZXRUYWJ9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RhYi1jb250ZW50JywgJ2NvbHVtbnMnLCBjdXJyZW50VGFiIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0YWJzW2N1cnJlbnRUYWJdLnJlbmRlcihzZXRUYWIpfVxuXHRcdDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFic0NvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFRvYXN0ID0gKHttZXNzYWdlLCBkaXNtaXNzLCB0aW1lLCB0eXBlID0gJ2luZm8nfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpc21pc3MoJycpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fSwgdGltZSB8fCAyMDAwKTtcblx0fSk7XG5cdGNvbnN0IGljb25NYXAgPSB7XG5cdFx0J2luZm8nOiAnaW5mbycsXG5cdFx0J2Vycm9yJzogJ25vJyxcblx0XHQnc3VjY2Vzcyc6ICd5ZXMnLFxuXHRcdCd3YXJuaW5nJzogJ3dhcm5pbmcnXG5cdH07XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RvYXN0JywgJ2NvbXBvbmVudHMtYW5pbWF0ZV9fYXBwZWFyJywgJ2lzLWZyb20tbWlkZGxlJywgdHlwZSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbk1hcFt0eXBlXX0vPlxuXHRcdFx0PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQ29tcG9uZW50cy9BcHAnO1xuXG5jb25zdCB7cmVnaXN0ZXJTdG9yZX0gPSB3cC5kYXRhO1xuY29uc3Qge3JlbmRlcn0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1kYXNoYm9hcmQnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9yc1xufSk7XG5cbmltcG9ydCBvbmJvYXJkaW5nUmVkdWNlciBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBvbmJvYXJkaW5nQWN0aW9ucyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBvbmJvYXJkaW5nU2VsZWN0b3JzIGZyb20gJy4vQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL3NlbGVjdG9ycyc7XG5yZWdpc3RlclN0b3JlKCduZXZlLW9uYm9hcmRpbmcnLCB7XG5cdHJlZHVjZXI6IG9uYm9hcmRpbmdSZWR1Y2VyLFxuXHRhY3Rpb25zOiBvbmJvYXJkaW5nQWN0aW9ucyxcblx0c2VsZWN0b3JzOiBvbmJvYXJkaW5nU2VsZWN0b3JzXG59KTtcblxuY29uc3QgUm9vdCA9ICgpID0+IDxBcHAvPjtcbnJlbmRlcihcblx0PFJvb3QvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldmUtZGFzaGJvYXJkJylcbik7XG5cbiIsIiBleHBvcnQgZGVmYXVsdCB7XG5cdHNldFRhYih0YWIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9UQUInLFxuXHRcdFx0cGF5bG9hZDoge3RhYn1cblx0XHR9O1xuXHR9LFxuXHRzZXRTZXR0aW5ncyhvYmplY3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TRVRUSU5HUycsXG5cdFx0XHRwYXlsb2FkOiB7b2JqZWN0fVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhtb2R1bGVTbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7bW9kdWxlU2x1ZzogJ252X3Byb18nICsgbW9kdWxlU2x1ZyArICdfc3RhdHVzJywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlT3B0aW9uKG9wdGlvblNsdWcsIG9wdGlvblZhbHVlLCBwcm8gPSB0cnVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdDSEFOR0VfTU9EVUxFX09QVElPTicsXG5cdFx0XHRwYXlsb2FkOiB7b3B0aW9uU3RhdHVzOiAocHJvID8gJ252X3Byb18nIDogJycpICsgb3B0aW9uU2x1Zywgb3B0aW9uVmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTGljZW5zZVRpZXIodGllcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX0xJQ0VOU0VfVElFUicsXG5cdFx0XHRwYXlsb2FkOiB7dGllcn1cblx0XHR9O1xuXHR9LFxuXHRzZXRUb2FzdChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfVE9BU1RfTUVTU0FHRScsXG5cdFx0XHRwYXlsb2FkOiBtZXNzYWdlXG5cdFx0fTtcblx0fVxufTtcbiIsIi8qIGdsb2JhbCB3cCwgbmV2ZURhc2ggICovXG5pbXBvcnQge2dldFRhYkhhc2h9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2V0dGluZ3M6IHt9LFxuXHR0aWVyOiBuZXZlRGFzaC5wcm8gPyBuZXZlRGFzaC5saWNlbnNlLnRpZXIgOiAwLFxuXHR0b2FzdDogbnVsbCxcblx0Y3VycmVudFRhYjogJ3N0YXJ0J1xufTtcblxuY29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcbmlmIChudWxsICE9PSBoYXNoKSB7XG5cdGluaXRpYWxTdGF0ZS5jdXJyZW50VGFiID0gaGFzaDtcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfVEFCJzpcblx0XHRcdGNvbnN0IHt0YWJ9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0Y3VycmVudFRhYjogdGFiXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9TRVRUSU5HUyc6XG5cdFx0XHRjb25zdCB7b2JqZWN0fSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiBvYmplY3Rcblx0XHRcdH07XG5cdFx0Y2FzZSAnVE9HR0xFX01PRFVMRSc6XG5cdFx0XHRjb25zdCB7bW9kdWxlU2x1ZywgdmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbbW9kdWxlU2x1Z106IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0Y2FzZSAnQ0hBTkdFX01PRFVMRV9PUFRJT04nOlxuXHRcdFx0bGV0IHtvcHRpb25TdGF0dXMsIG9wdGlvblZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W29wdGlvblN0YXR1c106IG9wdGlvblZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX0xJQ0VOU0VfVElFUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dGllcjogYWN0aW9uLnBheWxvYWQudGllclxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfVE9BU1RfTUVTU0FHRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9hc3Q6IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGdldE1vZHVsZVN0YXR1czogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnICsgJ19zdGF0dXMnXSxcblx0Z2V0T3B0aW9uOiAoc3RhdGUsIHNsdWcgKSA9PiBzdGF0ZS5zZXR0aW5nc1tzbHVnXSxcblx0Z2V0UHJvT3B0aW9uOiAoc3RhdGUsIHNsdWcgKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnXSxcblx0Z2V0TGljZW5zZVRpZXI6IChzdGF0ZSkgPT4gc3RhdGUudGllcixcblx0Z2V0VG9hc3Q6IChzdGF0ZSkgPT4gc3RhdGUudG9hc3QsXG5cdGdldFRhYjogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50VGFiXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgU3RhcnRlclNpdGVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydCc7XG5pbXBvcnQgUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9Qcm8nO1xuaW1wb3J0IFBsdWdpbnMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMnO1xuaW1wb3J0IEhlbHAgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0hlbHAnO1xuaW1wb3J0IENoYW5nZWxvZyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nJztcbmltcG9ydCBGcmVlUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvJztcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG5cdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0aWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuXHRpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuXHQnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6IChzZXRUYWIpID0+IDxQbHVnaW5zLz59LFxuXHQnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6IChzZXRUYWIpID0+IDxDaGFuZ2Vsb2cvPn0sXG5cdCdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcblx0J2ZyZWUtcHJvJzoge2xhYmVsOiAnRnJlZSB2cyBQcm8nLCByZW5kZXI6IChzZXRUYWIpID0+IDxGcmVlUHJvLz59XG59O1xuXG5pZiAobmV2ZURhc2gucHJvKSB7XG5cdHRhYnMucHJvID0ge2xhYmVsOiBuZXZlRGFzaC5zdHJpbmdzLnByb1RhYlRpdGxlLCByZW5kZXI6IChzZXRUYWIpID0+IDxQcm8vPn07XG5cdGRlbGV0ZSAodGFic1snZnJlZS1wcm8nXSk7XG59XG5cbmlmIChuZXZlRGFzaC53aGl0ZUxhYmVsKSB7XG5cdGRlbGV0ZSAodGFicy5jaGFuZ2Vsb2cpO1xuXHRkZWxldGUgKHRhYnMucGx1Z2lucyk7XG5cdGlmIChuZXZlRGFzaC53aGl0ZUxhYmVsLmhpZGVTdGFydGVyU2l0ZXMpIHtcblx0XHRkZWxldGUgKHRhYnNbJ3N0YXJ0ZXItc2l0ZXMnXSk7XG5cdH1cbn1cblxuXG5leHBvcnQge1xuXHRhZGRVcmxIYXNoLFxuXHRnZXRUYWJIYXNoLFxuXHR0YWJzXG59O1xuIiwiY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VPcHRpb24gPSAob3B0aW9uLCB2YWx1ZSwgbW9kdWxlID0gZmFsc2UsIHBybyA9IHRydWUpID0+IHtcblx0b3B0aW9uID0gKHBybyA/ICdudl9wcm9fJyA6ICcnKSArIG9wdGlvbiArIChtb2R1bGUgPyAnX3N0YXR1cycgOiAnJyk7XG5cdGNvbnN0IG1vZGVsID0gbmV3IHdwLmFwaS5tb2RlbHMuU2V0dGluZ3Moe1xuXHRcdFtvcHRpb25dOiB2YWx1ZVxuXHR9KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRtb2RlbC5zYXZlKCkudGhlbigocikgPT4ge1xuXHRcdFx0aWYgKCEgciB8fCAhIHJbb3B0aW9uXSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmUoaXNWYWxpZChvcHRpb24sIHIpKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZCA9IChyb3V0ZSwgZGF0YSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IChyb3V0ZSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIHt9LCAnR0VUJyk7XG59O1xuXG5jb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jIChyb3V0ZSwgc2ltcGxlID0gZmFsc2UsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ1BPU1QnKSA9PiB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQneC13cC1ub25jZSc6IG5ldmVEYXNoLm5vbmNlXG5cdFx0fVxuXHR9O1xuXG5cdGlmICgnUE9TVCcgPT09IG1ldGhvZCkge1xuXHRcdG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0cmV0dXJuIGF3YWl0IGZldGNoKHJvdXRlLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdHJldHVybiBzaW1wbGUgPyByZXNwb25zZSA6IHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG5jb25zdCBpc1ZhbGlkID0gKG9wdGlvbiwgb3B0aW9uc0FycmF5KSA9PiB7XG5cdGlmICgnbnZfcHJvX3R5cGVraXRfaWQnID09PSBvcHRpb24pIHtcblx0XHRpZiAoISBvcHRpb25zQXJyYXlbJ25ldmVfcHJvX3R5cGVraXRfZGF0YSddKSB7XG5cdFx0XHRyZXR1cm4ge21lc3NhZ2U6IF9fKCdUeXBla2l0IFByb2plY3QgSUQgaXMgaW52YWxpZCcsICduZXZlJyksIHN1Y2Nlc3M6IGZhbHNlfTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn07XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi9yZXN0JztcblxuZXhwb3J0IGNvbnN0IGltcG9ydFdpZGdldHMgPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2ltcG9ydF93aWRnZXRzJywgZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0TW9kcyA9IChkYXRhKSA9PiB7XG5cdHJldHVybiBzZW5kKG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW1wb3J0X3RoZW1lX21vZHMnLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnN0YWxsUGx1Z2lucyA9IChwbHVnaW5BcnJheSkgPT4ge1xuXHRyZXR1cm4gc2VuZChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2luc3RhbGxfcGx1Z2lucycsIHBsdWdpbkFycmF5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbXBvcnRDb250ZW50ID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHNlbmQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbXBvcnRfY29udGVudCcsIGRhdGEpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9