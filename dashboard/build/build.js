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
  return wp.element.createElement(Fragment, null, changelog.map(function (entry, index) {
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
  }, wp.element.createElement("div", {
    className: "card table"
  }, wp.element.createElement("div", {
    className: "table-header"
  }, wp.element.createElement("div", {
    className: "large"
  }), wp.element.createElement("div", {
    className: "indicator"
  }, __('Neve', 'neve')), wp.element.createElement("div", {
    className: "indicator"
  }, __('Neve Pro', 'neve'))), wp.element.createElement("div", {
    className: "table-body"
  }, featureData.map(function (item) {
    return wp.element.createElement(_FeatureRow__WEBPACK_IMPORTED_MODULE_0__["default"], {
      item: item
    });
  }))), wp.element.createElement("div", {
    className: "upsell"
  }, wp.element.createElement("p", null, __('Get access to all Pro features and power-up your website', 'neve')), wp.element.createElement(Button, {
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
    title: __('Contact Support', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve')
  }, wp.element.createElement(Button, {
    isDefault: true,
    isPrimary: true,
    href: "https://wordpress.org/support/theme/neve/"
  }, __('Contact Support', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'list.svg',
    title: __('Changelog', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    onClick: function onClick() {
      return setTab('changelog');
    }
  }, __('View Changelog', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'tachometer.svg',
    title: __('Speed up your site', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/63-speed-up-your-wordpress-site"
  }, __('Learn More', 'neve')))), wp.element.createElement("div", {
    className: "col col-last"
  }, wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'page.svg',
    title: __('Documentation', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('Need more details? Please check our full documentation for detailed information on how to use Neve.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "https://docs.themeisle.com/article/946-neve-doc"
  }, __('Go to docs', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'clone.svg',
    title: __('Create a child theme', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('If you want to make changes to the theme\'s files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true,
    href: "http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
  }, __('Learn More', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'arrows.svg',
    title: __('Build a landing page with a drag-and-drop content builder', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve')
  }, wp.element.createElement(Button, {
    isLink: true
    /* eslint-disable-next-line max-len */
    ,
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
    title: __('Starter Sites', 'neve')
    /* eslint-disable-next-line max-len */
    ,
    description: __('Neve now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve')
  }, wp.element.createElement(Button, {
    isDefault: true,
    isPrimary: true,
    onClick: function onClick() {
      setTab('starter-sites');
    }
  }, __('Go to Starter Sites', 'neve'))), wp.element.createElement(_Card__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: neveDash.assets + 'page.svg',
    title: __('Getting Started? Check help and docs', 'neve')
    /* eslint-disable-next-line max-len */
    ,
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
    title: __('Customizer quick links', 'neve')
    /* eslint-disable-next-line max-len */
    ,
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
/* global neveDash */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

var StarterSites = function StarterSites(props) {
  return wp.element.createElement(Fragment, null, "Starter Sites");
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

  return wp.element.createElement("div", {
    className: "feature-row"
  }, wp.element.createElement("div", {
    className: "large"
  }, wp.element.createElement("h4", null, title), wp.element.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      toggleTooltip(true);
    }
  }, wp.element.createElement(Dashicon, {
    icon: "info"
  })), tooltip && wp.element.createElement(_Utils_OnClickOutside__WEBPACK_IMPORTED_MODULE_0__["default"], {
    action: function action() {
      if (!tooltip) {
        return false;
      }

      toggleTooltip(false);
    }
  }, wp.element.createElement("div", {
    className: "tooltip-content"
  }, wp.element.createElement("p", null, description)))), wp.element.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['indicator', {
      'error': !inLite,
      'success': inLite
    }])
  }, wp.element.createElement(Dashicon, {
    icon: inLite ? 'yes' : 'no'
  })), wp.element.createElement("span", {
    className: "indicator success"
  }, wp.element.createElement(Dashicon, {
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
  });
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
  }, 'valid' === valid ? __('Valid', 'neve') : __('Expired', 'neve')), "-", wp.element.createElement("span", {
    className: "expires"
  }, ('valid' === valid ? __('Expires', 'neve') : __('Expired', 'neve')) + ' ' + expiration)))));
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

/***/ "./src/Components/ModuleCard.js":
/*!**************************************!*\
  !*** ./src/Components/ModuleCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/Components/Accordion.js");
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
/* global neveDash */


var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useCallback = _wp$element.useCallback;
var compose = wp.compose.compose;
var __ = wp.i18n.__;

var ModuleCard = function ModuleCard(_ref) {
  var slug = _ref.slug,
      toggleModule = _ref.toggleModule,
      getStatus = _ref.getStatus,
      tier = _ref.tier;
  var _neveDash$modules$slu = neveDash.modules[slug],
      nicename = _neveDash$modules$slu.nicename,
      description = _neveDash$modules$slu.description,
      order = _neveDash$modules$slu.order,
      availabilityLevel = _neveDash$modules$slu.availabilityLevel,
      settingsForm = _neveDash$modules$slu.settingsForm,
      documentation = _neveDash$modules$slu.documentation,
      required_actions = _neveDash$modules$slu.required_actions;
  var _neveDash = neveDash,
      upgradeLinks = _neveDash.upgradeLinks;
  return wp.element.createElement("div", {
    className: "card module-card"
  }, wp.element.createElement("div", {
    className: "card-header"
  }, tier, availabilityLevel, wp.element.createElement("h3", {
    className: "title"
  }, nicename), wp.element.createElement("div", {
    className: "toggle-wrap"
  }, tier < availabilityLevel ? wp.element.createElement(Button, {
    isPrimary: true,
    href: upgradeLinks[availabilityLevel]
  }, __('Upgrade', 'neve')) : wp.element.createElement(ToggleControl, {
    checked: getStatus(slug),
    onChange: function onChange(value) {
      toggleModule(slug, value);
    }
  }))), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "card-description"
  }, description + ' ', documentation && wp.element.createElement("a", {
    href: documentation
  }, __('Learn More', 'neve')))));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-dashboard'),
      getModuleStatus = _select.getModuleStatus,
      getLicenseTier = _select.getLicenseTier;

  return {
    getStatus: function getStatus(slug) {
      return getModuleStatus(slug);
    },
    tier: getLicenseTier()
  };
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      changeModuleStatus = _dispatch.changeModuleStatus;

  return {
    toggleModule: function toggleModule(slug, value) {
      changeModuleStatus(slug, value);
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
    isDefault: true,
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
    isDefault: true,
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

      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_1__["get"])(data[action]).then(function (r) {
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
          setToastType('error'); // eslint-disable-next-line max-len

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

var TabsContent = function TabsContent(props) {
  var currentTab = props.currentTab,
      setTab = props.setTab;
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
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Header */ "./src/Components/Header.js");
/* harmony import */ var _Components_TabsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/TabsContent */ "./src/Components/TabsContent.js");
/* harmony import */ var _Components_Notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Notifications */ "./src/Components/Notifications.js");
/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Sidebar */ "./src/Components/Sidebar.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducer */ "./src/store/reducer.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/selectors */ "./src/store/selectors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var registerStore = wp.data.registerStore;



registerStore('neve-dashboard', {
  reducer: _store_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  actions: _store_actions__WEBPACK_IMPORTED_MODULE_5__["default"],
  selectors: _store_selectors__WEBPACK_IMPORTED_MODULE_7__["default"]
});
var _wp$element = wp.element,
    render = _wp$element.render,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;

var App = function App() {
  var _useState = useState('start'),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setTab = _useState2[1];

  return wp.element.createElement(Fragment, null, wp.element.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currentTab: currentTab,
    setTab: setTab
  }), wp.element.createElement("div", {
    className: "container content"
  }, wp.element.createElement("div", {
    className: "main"
  }, wp.element.createElement(_Components_Notifications__WEBPACK_IMPORTED_MODULE_3__["default"], null), wp.element.createElement(_Components_TabsContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentTab: currentTab,
    setTab: setTab
  })), wp.element.createElement(_Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentTab: currentTab
  })));
};

render(wp.element.createElement(App, null), document.getElementById('neve-dashboard'));

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
  changeModuleStatus: function changeModuleStatus(slug, value) {
    return {
      type: 'TOGGLE_MODULE',
      payload: {
        slug: slug,
        value: value
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global wp, neveDash  */
var __ = wp.i18n.__;
var initialState = {
  modulesStatus: neveDash.pro ? neveDash.proOptions.modules_status : [],
  tier: neveDash.pro ? neveDash.license.tier : 0
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE_MODULE':
      var _action$payload = action.payload,
          slug = _action$payload.slug,
          value = _action$payload.value;

      var newModulesStatus = _objectSpread({}, state.modulesStatus, _defineProperty({}, slug, true === value ? 'enabled' : 'disabled'));

      return _objectSpread({}, state, {
        modulesStatus: newModulesStatus
      });

    case 'UPDATE_LICENSE_TIER':
      return _objectSpread({}, state, {
        tier: action.payload.tier
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
    return 'enabled' === state.modulesStatus[slug];
  },
  getLicenseTier: function getLicenseTier(state) {
    return state.tier;
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
    render: function render() {
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
    render: function render() {
      return wp.element.createElement(_Components_Content_Changelog__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }
  },
  'starter-sites': {
    label: 'Starter Sites',
    render: function render() {
      return wp.element.createElement(_Components_Content_StarterSites__WEBPACK_IMPORTED_MODULE_0__["default"], null);
    }
  },
  'free-pro': {
    label: 'Free vs Pro',
    render: function render() {
      return wp.element.createElement(_Components_Content_FreePro__WEBPACK_IMPORTED_MODULE_6__["default"], null);
    }
  }
};

if (neveDash.pro) {
  tabs.pro = {
    label: 'Neve Pro',
    render: function render() {
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
/*! exports provided: send, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var send = function send(route, data) {
  return requestData(route, data);
};
var get = function get(route) {
  return requestData(route, {}, 'GET');
};

var requestData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
    var data,
        method,
        options,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'POST';
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

            _context.next = 6;
            return fetch(route, options).then(function (response) {
              return response.json();
            });

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvSGVscC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9Qcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsIkNhcmQiLCJpY29uIiwiaWNvbkFsdCIsImRlc2NyaXB0aW9uIiwiY2xhc3NOYW1lcyIsIl9fIiwiaTE4biIsIkZyYWdtZW50IiwiQ2hhbmdlbG9nIiwibmV2ZURhc2giLCJjaGFuZ2Vsb2ciLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwiSGVscCIsInNldFRhYiIsImFzc2V0cyIsIkhlYWRlciIsInBsdWdpbnMiLCJPYmplY3QiLCJrZXlzIiwic2x1ZyIsIm1vZHVsZXMiLCJpZCIsIlN0YXJ0IiwicmVuZGVyQ3VzdG9taXplckxpbmtzIiwibGlua3MiLCJjdXN0b21pemVyU2hvcnRjdXRzIiwic3BsaXQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhcnRzIiwic2xpY2UiLCJjb2x1bW4iLCJsaW5rIiwidGV4dCIsIlN0YXJ0ZXJTaXRlcyIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkZlYXR1cmVSb3ciLCJpbkxpdGUiLCJ0b29sdGlwIiwidG9nZ2xlVG9vbHRpcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2giLCJnZXRUYWJIYXNoIiwicmVuZGVySGVhZCIsInJlbmRlck5hdmlnYXRpb24iLCJzdHJpbmdzIiwiaGVhZGVyIiwiY3VycmVudFRhYiIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJkYXRhIiwid2l0aFNlbGVjdCIsIndpdGhEaXNwYXRjaCIsIkxpY2Vuc2VDYXJkIiwiaXNWaXNpYmxlIiwiY2hhbmdlVGllciIsImxpY2Vuc2UiLCJwcm9BcGkiLCJ2YWxpZCIsImtleSIsInNldEtleSIsInN0YXR1cyIsInNldFN0YXR1cyIsInNldFZhbGlkIiwiZXhwaXJhdGlvbiIsInNldEV4cGlyYXRpb24iLCJ0b2FzdCIsInNldFRvYXN0IiwidG9hc3RUeXBlIiwic2V0VG9hc3RUeXBlIiwidG9nZ2xlTGljZW5zZSIsInRvRG8iLCJzZW5kIiwiYWN0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ0aWVyIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJkaXNwYXRjaCIsImNoYW5nZUxpY2Vuc2VUaWVyIiwibmV3VGllciIsIlRvZ2dsZUNvbnRyb2wiLCJ1c2VDYWxsYmFjayIsImNvbXBvc2UiLCJNb2R1bGVDYXJkIiwidG9nZ2xlTW9kdWxlIiwiZ2V0U3RhdHVzIiwibmljZW5hbWUiLCJvcmRlciIsImF2YWlsYWJpbGl0eUxldmVsIiwic2V0dGluZ3NGb3JtIiwiZG9jdW1lbnRhdGlvbiIsInJlcXVpcmVkX2FjdGlvbnMiLCJ1cGdyYWRlTGlua3MiLCJzZWxlY3QiLCJnZXRNb2R1bGVTdGF0dXMiLCJnZXRMaWNlbnNlVGllciIsImNoYW5nZU1vZHVsZVN0YXR1cyIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInR5cGUiLCJ1cGRhdGUiLCJpblByb2dyZXNzIiwic2V0SW5Qcm9ncmVzcyIsImRvbmUiLCJzZXREb25lIiwidXBkYXRlRW50aXR5IiwiYXJncyIsImV4ZWN1dGVBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVwZGF0ZXMiLCJhamF4IiwicGF0aCIsInBsdWdpbiIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiYmFubmVyIiwibmFtZSIsImF1dGhvciIsInNldEFjdGlvbiIsInN0cmluZ01hcCIsInByb2dyZXNzIiwiaW5zdGFsbFBsdWdpbiIsInIiLCJnZXQiLCJvayIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZXJyb3IiLCJlcnIiLCJTaWRlYmFyIiwib3B0aW9ucyIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJhcGkiLCJUYWJzQ29udGVudCIsInJlbmRlciIsIlRvYXN0IiwiZGlzbWlzcyIsInRpbWUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25NYXAiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJjYWxsYmFjayIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9uQ2xpY2tPdXRzaWRlIiwid3JhcHBlclJlZiIsInJlZ2lzdGVyU3RvcmUiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsInNlbGVjdG9ycyIsIkFwcCIsImdldEVsZW1lbnRCeUlkIiwicGF5bG9hZCIsImluaXRpYWxTdGF0ZSIsIm1vZHVsZXNTdGF0dXMiLCJwcm9PcHRpb25zIiwibW9kdWxlc19zdGF0dXMiLCJzdGF0ZSIsIm5ld01vZHVsZXNTdGF0dXMiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsInJvdXRlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUs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R0FBTSxDQUFDd0QsS0FBRCxFQUFXO0FBQzVCLFNBQU9DLFdBQVcsQ0FBQ0QsS0FBRCxFQUFRLEVBQVIsRUFBWSxLQUFaLENBQWxCO0FBQ0QsQ0FGTTs7QUFJUCxJQUFNQyxXQUFXO0FBQUEscUVBQUcsaUJBQU9ELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWMxSSxnQkFBZCwyREFBcUIsRUFBckI7QUFBeUI0SSxrQkFBekIsMkRBQWtDLE1BQWxDO0FBQ1puRCxtQkFEWSxHQUNGO0FBQ2RtRCxvQkFBTSxFQUFFQSxNQURNO0FBRWRDLHFCQUFPLEVBQUU7QUFDUCwwQkFBVSxrQkFESDtBQUVQLGdDQUFnQixrQkFGVDtBQUdQLDhCQUFjeE0sUUFBUSxDQUFDeU07QUFIaEI7QUFGSyxhQURFOztBQVVsQixnQkFBSSxXQUFXRixNQUFmLEVBQXVCO0FBQ3JCbkQscUJBQU8sQ0FBQ3NELElBQVIsR0FBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqSixJQUFmLENBQWY7QUFDRDs7QUFaaUI7QUFBQSxtQkFjTGtKLEtBQUssQ0FBQ1IsS0FBRCxFQUFRakQsT0FBUixDQUFMLENBQXNCakUsSUFBdEIsQ0FBNEIsVUFBQ0MsUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUMwSCxJQUFULEVBQWQ7QUFBQSxhQUE1QixDQWRLOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWFIsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjY29yZGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7aXNPcGVuLCB0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoaXNPcGVuKTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnYWNjb3JkaW9uJywgeydvcGVuJzogb3BlbiwgJ2Nsb3NlZCc6ICEgb3BlbiB9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0YXJpYS1leHBhbmRlZD17b3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oISBvcGVuKX1cblx0XHRcdD5cblx0XHRcdFx0XHR7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdGl0bGVcIj57dGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIiBzdHlsZT17e2hlaWdodDogb3BlbiA/ICdhdXRvJyA6ICcwcHgnfX0+XG5cdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENoYW5nZWxvZyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y2hhbmdlbG9nfSA9IG5ldmVEYXNoO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0e1xuXHRcdFx0XHRjaGFuZ2Vsb2cubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPVxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi99XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PjtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uIGlzT3Blbj17MCA9PT0gaW5kZXh9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHRcdHtmZWF0dXJlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgc3VjY2Vzc1wiPntfXygnRmVhdHVyZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gPGxpPntmZWF0dXJlfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7Zml4ZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidWdzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgZXJyb3JcIj57X18oJ0J1ZyBGaXhlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zml4ZXMubWFwKChmaXgpID0+IDxsaT57Zml4fTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7dHdlYWtzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdlYWtzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPntfXygnVHdlYWtzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0d2Vha3MubWFwKCh0d2VhaykgPT4gPGxpPnt0d2Vha308L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEZlYXR1cmVSb3cgZnJvbSAnLi4vRmVhdHVyZVJvdyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2ZlYXR1cmVEYXRhfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGFibGVcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhcmdlXCIvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlJywgJ25ldmUnKX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG5cdFx0XHRcdFx0e2ZlYXR1cmVEYXRhLm1hcCgoaXRlbSkgPT4gPEZlYXR1cmVSb3cgaXRlbT17aXRlbX0vPil9XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXBzZWxsXCI+XG5cdFx0XHRcdDxwPntfXygnR2V0IGFjY2VzcyB0byBhbGwgUHJvIGZlYXR1cmVzIGFuZCBwb3dlci11cCB5b3VyIHdlYnNpdGUnLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnk+e19fKCdHZXQgTmV2ZSBQcm8gTm93JywgJ25ldmUnKX08L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgSGVscCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2J1b3kuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dlIHdhbnQgdG8gbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdXNpbmcgTmV2ZSwgYW5kIHRoYXQgaXMgd2h5IHdlIGhhdmUgZ2F0aGVyZWQgYWxsIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gaGVyZSBmb3IgeW91LiBXZSBob3BlIHlvdSB3aWxsIGVuam95IHVzaW5nIE5ldmUgYXMgbXVjaCBhcyB3ZSBlbmpveSBjcmVhdGluZyBncmVhdCBwcm9kdWN0cy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICBpc1ByaW1hcnlcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd29yZHByZXNzLm9yZy9zdXBwb3J0L3RoZW1lL25ldmUvJ1xuICAgICAgICAgID57X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnbGlzdC5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2FudCB0byBnZXQgdGhlIGdpc3Qgb24gdGhlIGxhdGVzdCB0aGVtZSBjaGFuZ2VzPyBKdXN0IGNvbnN1bHQgb3VyIGNoYW5nZWxvZyBiZWxvdyB0byBnZXQgYSB0YXN0ZSBvZiB0aGUgcmVjZW50IGZpeGVzIGFuZCBmZWF0dXJlcyBpbXBsZW1lbnRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuICAgICAgICAgID57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICd0YWNob21ldGVyLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHNpdHVhdGlvbiB3aGVyZSBldmVyeXRoaW5nIG9uIHlvdXIgc2l0ZSBpcyBydW5uaW5nIHZlcnkgc2xvd2x5LCB5b3UgbWlnaHQgY29uc2lkZXIgaGF2aW5nIGEgbG9vayBhdCB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB3aGVyZSB5b3Ugd2lsbCBmaW5kIHRoZSBtb3N0IGNvbW1vbiBpc3N1ZXMgY2F1c2luZyB0aGlzIGFuZCBwb3NzaWJsZSBzb2x1dGlvbnMgZm9yIGVhY2ggb2YgdGhlIGlzc3Vlcy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnRG9jdW1lbnRhdGlvbicsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzk0Ni1uZXZlLWRvY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjbG9uZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xNC1ob3ctdG8tY3JlYXRlLWEtY2hpbGQtdGhlbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYXJyb3dzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJbiB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB5b3Ugd2lsbCBmaW5kIGFuIGVhc3kgd2F5IHRvIGJ1aWxkIGEgZ3JlYXQgbG9va2luZyBsYW5kaW5nIHBhZ2UgdXNpbmcgYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlciBwbHVnaW4uJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMjE5LWhvdy10by1idWlsZC1hLWxhbmRpbmctcGFnZS13aXRoLWEtZHJhZy1hbmQtZHJvcC1jb250ZW50LWJ1aWxkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7bW9kdWxlc30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhtb2R1bGVzKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb2R1bGVDYXJkIHNsdWc9e2lkfS8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmV2ZSBub3cgY29tZXMgd2l0aCBhIHNpdGVzIGxpYnJhcnkgd2l0aCB2YXJpb3VzIGRlc2lnbnMgdG8gcGljayBmcm9tLiBWaXNpdCBvdXIgY29sbGVjdGlvbiBvZiBkZW1vcyB0aGF0IGFyZSBjb25zdGFudGx5IGJlaW5nIGFkZGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnR2V0dGluZyBTdGFydGVkPyBDaGVjayBoZWxwIGFuZCBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG4gICAgICAgICAgPntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcbiAgY29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG4gIGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAge1xuICAgICAgICBwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICBTdGFydGVyIFNpdGVzXG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0ZXJTaXRlcztcbiIsImNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgT25DbGlja091dHNpZGUgZnJvbSAnLi9VdGlscy9PbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZVJvdyA9ICh7aXRlbX0pID0+IHtcblx0Y29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbiwgaW5MaXRlfSA9IGl0ZW07XG5cdGNvbnN0IFsgdG9vbHRpcCwgdG9nZ2xlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLXJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXJnZVwiPlxuXHRcdFx0XHQ8aDQ+e3RpdGxlfTwvaDQ+XG5cdFx0XHRcdDxhIG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiaW5mb1wiLz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHR7dG9vbHRpcCAmJlxuXHRcdFx0XHQ8T25DbGlja091dHNpZGUgYWN0aW9uPXsoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCEgdG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRlbnRcIj48cD57ZGVzY3JpcHRpb259PC9wPjwvZGl2PlxuXHRcdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdpbmRpY2F0b3InLCB7J2Vycm9yJzogISBpbkxpdGUsICdzdWNjZXNzJzogaW5MaXRlfSBdKX0+XG5cdFx0XHRcdDxEYXNoaWNvbiBpY29uPXtpbkxpdGUgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImluZGljYXRvciBzdWNjZXNzXCI+XG5cdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwieWVzXCIvPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVJvdztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCBnZXRUYWJIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuXHRcdGlmIChudWxsID09PSBoYXNoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHByb3BzLnNldFRhYihoYXNoKTtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0e3JlbmRlckhlYWQoKX1cblx0XHRcdFx0e3JlbmRlck5hdmlnYXRpb24ocHJvcHMpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntuZXZlRGFzaC5zdHJpbmdzLmhlYWRlcn08L2gxPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPntuZXZlRGFzaC52ZXJzaW9ufTwvc3Bhbj5cblx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL2xvZ28uc3ZnJ30gYWx0PXtfXygnTmV2ZSBUaGVtZSBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHRhYnMpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT48YVxuXHRcdFx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjdXJyZW50VGFiID09PSBpdGVtID8gJ2FjdGl2ZScgOiAnJ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0VGFiKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRhZGRVcmxIYXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+e3RhYnNbaXRlbV0ubGFiZWx9XG5cdFx0XHRcdFx0PC9hPjwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IExpY2Vuc2VDYXJkID0gKHtpc1Zpc2libGUsIGNoYW5nZVRpZXJ9KSA9PiB7XG5cdGNvbnN0IHtsaWNlbnNlLCBwcm9BcGl9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IFsga2V5LCBzZXRLZXkgXSA9IHVzZVN0YXRlKGxpY2Vuc2UgJiYgJ3ZhbGlkJyA9PT0gbGljZW5zZS52YWxpZCA/IGxpY2Vuc2Uua2V5IHx8ICcnIDogJycpO1xuXHRjb25zdCBbIHN0YXR1cywgc2V0U3RhdHVzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgdmFsaWQsIHNldFZhbGlkIF0gPSB1c2VTdGF0ZShsaWNlbnNlLnZhbGlkIHx8ICdpbnZhbGlkJyk7XG5cdGNvbnN0IFsgZXhwaXJhdGlvbiwgc2V0RXhwaXJhdGlvbiBdID0gdXNlU3RhdGUobGljZW5zZS5leHBpcmF0aW9uIHx8ICcnKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblxuXHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHRvZ2dsZUxpY2Vuc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9EbyA9ICd2YWxpZCcgPT09IHZhbGlkID8gJ2RlYWN0aXZhdGUnIDogJ2FjdGl2YXRlJztcblx0XHRzZXRTdGF0dXMoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICdhY3RpdmF0aW5nJyA6ICdkZWFjdGl2YXRpbmcnKTtcblx0XHRzZW5kKHByb0FwaSArICcvdG9nZ2xlX2xpY2Vuc2UnLCB7a2V5LCBhY3Rpb246IHRvRG99KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0c2V0VG9hc3RUeXBlKHJlc3BvbnNlLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcblx0XHRcdHNldEtleSgnYWN0aXZhdGUnID09PSB0b0RvID8ga2V5IDogJycpO1xuXHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRzZXRFeHBpcmF0aW9uKHJlc3BvbnNlLmV4cGlyYXRpb24pO1xuXHRcdFx0c2V0VmFsaWQocmVzcG9uc2Uuc3VjY2VzcyAmJiAnYWN0aXZhdGUnID09PSB0b0RvID8gJ3ZhbGlkJyA6ICdub3RfYWN0aXZlJyk7XG5cdFx0XHRzZXRTdGF0dXMoZmFsc2UpO1xuXHRcdFx0bmV2ZURhc2gubGljZW5zZS5leHBpcmF0aW9uID0gcmVzcG9uc2UuZXhwaXJhdGlvbjtcblx0XHRcdGNoYW5nZVRpZXIocmVzcG9uc2UudGllciB8fCAxKTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmQgbGljZW5zZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0PGg0PntfXygnTmV2ZSBQcm8gQWRkb24gbGljZW5zZScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovfVxuXHRcdFx0XHQ8cD5FbnRlciB5b3VyIGxpY2Vuc2UgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9zdG9yZS50aGVtZWlzbGUuY29tXCI+VGhlbWVJc2xlPC9hPiBwdXJjaGFzZSBoaXN0b3J5IGluIG9yZGVyIHRvIGdldFxuXHRcdFx0XHRcdHBsdWdpbiB1cGRhdGVzPC9wPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJsaWNlbnNlLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlTGljZW5zZSgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0S2V5KGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHQnKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyArIGtleS5zbGljZSgtNSkgOlxuXHRcdFx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdFbnRlciBMaWNlbnNlIEtleScsICduZXZlJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyd2YWxpZCcgIT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3N0YXR1cyB8fCAhIGtleX1cblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdHshIHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdCgndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0ZScsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRlJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHRcdFx0KCdhY3RpdmF0aW5nJyA9PT0gc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0e3RvYXN0ICYmIDxUb2FzdCB0eXBlPXt0b2FzdFR5cGV9IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0vPn1cblx0XHRcdFx0eyEgWyAnbm90X2FjdGl2ZScsICdpbnZhbGlkJyBdLmluY2x1ZGVzKHZhbGlkKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lcyhbICdzdGF0dXMtaWNvbicsICd2YWxpZCcgPT09IHZhbGlkID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyBdKVxuXHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXsndmFsaWQnID09PSB2YWxpZCA/ICd5ZXMnIDogJ25vJ30vPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmFsaWRpdHlcIj5cblx0XHRcdFx0XHRcdFx0eyd2YWxpZCcgPT09IHZhbGlkID8gX18oJ1ZhbGlkJywgJ25ldmUnKSA6IF9fKCdFeHBpcmVkJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdC1cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImV4cGlyZXNcIj5cblx0XHRcdFx0XHRcdHsoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlcycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlZCcsICduZXZlJykpICsgJyAnICsgZXhwaXJhdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FzaWRlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7Y2hhbmdlTGljZW5zZVRpZXJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlVGllcjogKG5ld1RpZXIpID0+IHtcblx0XHRcdGNoYW5nZUxpY2Vuc2VUaWVyKG5ld1RpZXIpO1xuXHRcdH1cblx0fTtcbn0pKExpY2Vuc2VDYXJkKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbic7XG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHRvZ2dsZU1vZHVsZSwgZ2V0U3RhdHVzLCB0aWVyfSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0bmljZW5hbWUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0b3JkZXIsXG5cdFx0YXZhaWxhYmlsaXR5TGV2ZWwsXG5cdFx0c2V0dGluZ3NGb3JtLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbW9kdWxlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0e3RpZXJ9XG5cdFx0XHRcdHthdmFpbGFiaWxpdHlMZXZlbH1cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e25pY2VuYW1lfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aWVyIDwgYXZhaWxhYmlsaXR5TGV2ZWwgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXt1cGdyYWRlTGlua3NbYXZhaWxhYmlsaXR5TGV2ZWxdfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dldFN0YXR1cyhzbHVnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0b2dnbGVNb2R1bGUoc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbiArICcgJ31cblx0XHRcdFx0XHR7ZG9jdW1lbnRhdGlvbiAmJlxuXHRcdFx0XHRcdDxhIGhyZWY9e2RvY3VtZW50YXRpb259PntfXygnTGVhcm4gTW9yZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0TW9kdWxlU3RhdHVzLCBnZXRMaWNlbnNlVGllcn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldFN0YXR1czogKHNsdWcpID0+IGdldE1vZHVsZVN0YXR1cyhzbHVnKSxcblx0XHRcdHRpZXI6IGdldExpY2Vuc2VUaWVyKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVTdGF0dXN9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvZ2dsZU1vZHVsZTogKHNsdWcsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSlcbikoTW9kdWxlQ2FyZCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RleHQsIGN0YSwgdHlwZSwgdXBkYXRlfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRvbmUsIHNldERvbmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgW1xuICAgICAgJ25vdGlmaWNhdGlvbicsXG4gICAgICBwcm9wcy5zbHVnLFxuICAgICAgdHlwZSA/IHR5cGUgOiAnJyxcbiAgICAgIHtcbiAgICAgICAgJ3N1Y2Nlc3MnOiBkb25lLFxuICAgICAgICAnaGlkZGVuJzogZG9uZVxuICAgICAgfVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIGRvbmUgPyA8cD57dGV4dH08L3A+IDogPHA+PERhc2hpY29uIGljb249XCJ5ZXNcIi8+e19fKCdEb25lIScsICduZXZlJyl9PC9wPn1cbiAgICAgIHsoY3RhICYmICEgZG9uZSkgJiZcbiAgICAgIDxCdXR0b25cbiAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2dldH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzbHVnLCBkYXRhfSA9IHByb3BzO1xuICBjb25zdCB7YmFubmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgdmVyc2lvbiwgYXV0aG9yfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgYWN0aW9uLCBzZXRBY3Rpb24gXSA9IHVzZVN0YXRlKGRhdGEuY3RhKTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RyaW5nTWFwID0ge1xuICAgICdpbnN0YWxsJzoge3N0YXRpYzogX18oJ0luc3RhbGwnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0luc3RhbGxpbmcnLCAnbmV2ZScpfSxcbiAgICAnYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnQWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpfSxcbiAgICAnZGVhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsICdwbHVnaW4nLCBzbHVnIF0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lcn0gYWx0PXtfXygnQmFubmVyIEltYWdlJywgJ25hbWUnKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGx1Z2luLWRhdGFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwbHVnaW4tYWN0aW9uXCJcbiAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICBpc1ByaW1hcnk9e1sgJ2luc3RhbGwnLCAnYWN0aXZhdGUnIF0uaW5jbHVkZXMoYWN0aW9uKX1cbiAgICAgICAgICBpc1NlY29uZGFyeT17J2RlYWN0aXZhdGUnID09PSBhY3Rpb259XG4gICAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgICAgICAgICAgIGlmICgnaW5zdGFsbCcgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICBpbnN0YWxsUGx1Z2luKHNsdWcpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISByLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0KGRhdGFbYWN0aW9uXSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICBpZiAoISByLm9rKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cbiAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJ2FjdGl2YXRlJyA9PT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdkZWFjdGl2YXRlJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHshIGluUHJvZ3Jlc3MgJiYgc3RyaW5nTWFwW2FjdGlvbl0uc3RhdGljfVxuICAgICAgICAgIHtpblByb2dyZXNzICYmIChcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+XG4gICAgICAgICAgICAgIHtzdHJpbmdNYXBbYWN0aW9uXS5wcm9ncmVzcyArICcuLi4nfVxuICAgICAgICAgICAgPC9zcGFuPil9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBpbnN0YWxsUGx1Z2luKHNsdWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdwLnVwZGF0ZXMuYWpheCgnaW5zdGFsbC1wbHVnaW4nLCB7XG4gICAgICBzbHVnLFxuICAgICAgc3VjY2VzczogKHIpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7c3VjY2VzczogdHJ1ZX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG5cbiAgICAgICAgLy8gZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UgYXJlIHBhcmFtcyBvZiBlcnIgaWYgd2UgdG9hc3QuXG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTGljZW5zZUNhcmQgZnJvbSAnLi9MaWNlbnNlQ2FyZCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge1RvZ2dsZUNvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFifSkgPT4ge1xuXHRjb25zdCBbIHRyYWNraW5nLCBzZXRUcmFja2luZyBdID0gdXNlU3RhdGUobmV2ZURhc2gub3B0aW9ucy5sb2dnZXIgfHwgZmFsc2UpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHR7bmV2ZURhc2gucHJvICYmIDxMaWNlbnNlQ2FyZCBpc1Zpc2libGU9eydwcm8nID09PSBjdXJyZW50VGFifS8+fVxuXHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ05ldmUgQ29tbXVuaXR5JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0FyZSB5b3UgYXJlIGVuam95aW5nIE5ldmU/IFdlIHdvdWxkIGxvdmUgdG8gaGVhciB5b3VyIGZlZWRiYWNrLicsICduZXZlJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnQ29udHJpYnV0aW5nJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0JlY29tZSBhIGNvbnRyaWJ1dG9yIGJ5IG9wdGluZyBpbiB0byBvdXIgYW5vbnltb3VzIGRhdGEgdHJhY2tpbmcuIFdlIGd1YXJhbnRlZSBubyBzZW5zaXRpdmUgZGF0YSBpcyBjb2xsZWN0ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzExMjItbmV2ZS11c2FnZS10cmFja2luZ1wiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RyYWNraW5nfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbGxvdyBBbm9ueW1vdXMgVHJhY2tpbmcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2guYXBpICsgJy90b2dnbGVfdHJhY2tpbmcnLCB7dmFsdWV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnZXJyb3InKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IHVwZGF0ZSBvcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyghIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0b2FzdCAmJlxuXHRcdFx0XHRcdDxUb2FzdCBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9IHR5cGU9e3RvYXN0VHlwZX0vPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHt0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBUYWJzQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RhYi1jb250ZW50JywgJ2NvbHVtbnMnLCBjdXJyZW50VGFiIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0YWJzW2N1cnJlbnRUYWJdLnJlbmRlcihzZXRUYWIpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFic0NvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFRvYXN0ID0gKHttZXNzYWdlLCBkaXNtaXNzLCB0aW1lLCB0eXBlID0gJ2luZm8nfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpc21pc3MoJycpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fSwgdGltZSB8fCAyMDAwKTtcblx0fSk7XG5cdGNvbnN0IGljb25NYXAgPSB7XG5cdFx0J2luZm8nOiAnaW5mbycsXG5cdFx0J2Vycm9yJzogJ25vJyxcblx0XHQnc3VjY2Vzcyc6ICd5ZXMnLFxuXHRcdCd3YXJuaW5nJzogJ3dhcm5pbmcnXG5cdH07XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RvYXN0JywgJ2NvbXBvbmVudHMtYW5pbWF0ZV9fYXBwZWFyJywgJ2lzLWZyb20tbWlkZGxlJywgdHlwZSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbk1hcFt0eXBlXX0vPlxuXHRcdFx0PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJjb25zdCB7dXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgdXNlT3V0c2lkZUNsaWNrID0gKHJlZiwgY2FsbGJhY2spID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcblx0XHRcdGlmIChyZWYuY3VycmVudCAmJiAhIHJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHR9O1xuXHR9LCBbIHJlZiBdKTtcbn07XG5cbmNvbnN0IE9uQ2xpY2tPdXRzaWRlID0gKHtjaGlsZHJlbiwgYWN0aW9ufSkgPT4ge1xuXHRjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuXHR1c2VPdXRzaWRlQ2xpY2sod3JhcHBlclJlZiwgYWN0aW9uKTtcblxuXHRyZXR1cm4gPGRpdiByZWY9e3dyYXBwZXJSZWZ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbkNsaWNrT3V0c2lkZTtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9Db21wb25lbnRzL1RhYnNDb250ZW50JztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vQ29tcG9uZW50cy9TaWRlYmFyJztcblxuY29uc3QgeyByZWdpc3RlclN0b3JlIH0gPSB3cC5kYXRhO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zdG9yZS9zZWxlY3RvcnMnO1xuXG5yZWdpc3RlclN0b3JlKCduZXZlLWRhc2hib2FyZCcsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzXG59KTtcblxuY29uc3Qge3JlbmRlciwgdXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgWyBjdXJyZW50VGFiLCBzZXRUYWIgXSA9IHVzZVN0YXRlKCdzdGFydCcpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWRlciBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9ucy8+XG4gICAgICAgICAgPFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxucmVuZGVyKFxuICA8QXBwLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7c2x1ZywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTGljZW5zZVRpZXIodGllcikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX0xJQ0VOU0VfVElFUicsXG5cdFx0XHRwYXlsb2FkOiB7dGllcn1cblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRtb2R1bGVzU3RhdHVzOiBuZXZlRGFzaC5wcm8gPyBuZXZlRGFzaC5wcm9PcHRpb25zLm1vZHVsZXNfc3RhdHVzIDogW10sXG5cdHRpZXI6IG5ldmVEYXNoLnBybyA/IG5ldmVEYXNoLmxpY2Vuc2UudGllciA6IDBcbn07XG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge3NsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0Y29uc3QgbmV3TW9kdWxlc1N0YXR1cyA9IHtcblx0XHRcdFx0Li4uc3RhdGUubW9kdWxlc1N0YXR1cyxcblx0XHRcdFx0W3NsdWddOiB0cnVlID09PSB2YWx1ZSA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCdcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0bW9kdWxlc1N0YXR1czogbmV3TW9kdWxlc1N0YXR1c1xuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfTElDRU5TRV9USUVSJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHR0aWVyOiBhY3Rpb24ucGF5bG9hZC50aWVyXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGdldE1vZHVsZVN0YXR1czogKHN0YXRlLCBzbHVnKSA9PiAnZW5hYmxlZCcgPT09IHN0YXRlLm1vZHVsZXNTdGF0dXNbc2x1Z10sXG5cdGdldExpY2Vuc2VUaWVyOiAoc3RhdGUpID0+IHN0YXRlLnRpZXJcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBTdGFydGVyU2l0ZXMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcyc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0JztcbmltcG9ydCBQcm8gZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1Bybyc7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUGx1Z2lucyc7XG5pbXBvcnQgSGVscCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvSGVscCc7XG5pbXBvcnQgQ2hhbmdlbG9nIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cnO1xuaW1wb3J0IEZyZWVQcm8gZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0ZyZWVQcm8nO1xuXG5jb25zdCBnZXRVcmxQYXJhbSA9IChwYXJhbSkgPT4ge1xuXHRjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cdGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG5cdHJldHVybiB1cmxQYXJhbXMuZ2V0KHBhcmFtKTtcbn07XG5cbmNvbnN0IGFkZFVybEhhc2ggPSAoaGFzaCkgPT4ge1xuXHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG59O1xuXG5jb25zdCBnZXRUYWJIYXNoID0gKCkgPT4ge1xuXHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG5cdGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRoYXNoID0gaGFzaC5zdWJzdHJpbmcoMSk7XG5cblx0aWYgKCEgT2JqZWN0LmtleXModGFicykuaW5jbHVkZXMoaGFzaCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufTtcblxuY29uc3QgdGFicyA9IHtcblx0J3N0YXJ0Jzoge2xhYmVsOiAnR2V0dGluZyBTdGFydGVkJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnQgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuXHQncGx1Z2lucyc6IHtsYWJlbDogJ1VzZWZ1bCBQbHVnaW5zJywgcmVuZGVyOiAoKSA9PiA8UGx1Z2lucy8+fSxcblx0J2hlbHAnOiB7bGFiZWw6ICdIZWxwICYgZG9jcycsIHJlbmRlcjogKHNldFRhYikgPT4gPEhlbHAgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuXHQnY2hhbmdlbG9nJzoge2xhYmVsOiAnQ2hhbmdlbG9nJywgcmVuZGVyOiAoKSA9PiA8Q2hhbmdlbG9nLz59LFxuXHQnc3RhcnRlci1zaXRlcyc6IHtsYWJlbDogJ1N0YXJ0ZXIgU2l0ZXMnLCByZW5kZXI6ICgpID0+IDxTdGFydGVyU2l0ZXMvPn0sXG5cdCdmcmVlLXBybyc6IHtsYWJlbDogJ0ZyZWUgdnMgUHJvJywgcmVuZGVyOiAoKSA9PiA8RnJlZVByby8+fVxufTtcblxuaWYgKG5ldmVEYXNoLnBybykge1xuXHR0YWJzLnBybyA9IHtsYWJlbDogJ05ldmUgUHJvJywgcmVuZGVyOiAoKSA9PiA8UHJvLz59O1xuXHRkZWxldGUgKHRhYnNbJ2ZyZWUtcHJvJ10pO1xufVxuXG5cbmV4cG9ydCB7XG5cdGdldFVybFBhcmFtLFxuXHRhZGRVcmxIYXNoLFxuXHRnZXRUYWJIYXNoLFxuXHR0YWJzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ1BPU1QnKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBtZXRob2QsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAneC13cC1ub25jZSc6IG5ldmVEYXNoLm5vbmNlXG4gICAgfVxuICB9O1xuXG4gIGlmICgnUE9TVCcgPT09IG1ldGhvZCkge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGZldGNoKHJvdXRlLCBvcHRpb25zKS50aGVuKCAocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=