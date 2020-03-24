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
/* global neveDash */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

var Pro = function Pro(props) {
  return wp.element.createElement(Fragment, null, "Pro");
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

var LicenseCard = function LicenseCard(_ref) {
  var isVisible = _ref.isVisible;
  var _neveDash = neveDash,
      pro = _neveDash.pro,
      license = _neveDash.license;

  var _useState = useState(license ? license.key || '' : ''),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var valid = license.valid || 'invalid';
  var shownKey = license.key && 'valid' === valid ? '******************************' + key.slice(-5) : '';

  if (!isVisible) {
    return null;
  }

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

      if ('valid' === valid) {
        toggleLicense(key, 'deactivate');
        return false;
      }

      toggleLicense(key, 'activate');
    }
  }, wp.element.createElement("input", {
    type: "text",
    id: "license-field",
    name: "license-field",
    disabled: 'valid' === valid,
    onChange: function onChange(e) {
      return setKey(e.target.value);
    },
    value: shownKey || null,
    placeholder: __('Enter License Key', 'neve')
  }), wp.element.createElement(Button, {
    isPrimary: 'valid' !== valid,
    isLarge: true,
    disabled: status || !key,
    type: "submit"
  }, !status ? 'valid' === valid ? __('Deactivate', 'neve') : __('Activate', 'neve') : 'activating' === status ? __('Activating', 'neve') : __('Deactivating', 'neve'))), !['not_active', 'invalid'].includes(valid) && wp.element.createElement("div", {
    className: "license-footer"
  }, wp.element.createElement(Fragment, null, wp.element.createElement("span", {
    className: "status-icon"
  }, wp.element.createElement(Dashicon, {
    size: 14,
    icon: 'valid' === valid ? 'yes' : 'no'
  })), wp.element.createElement("span", {
    className: "validity"
  }, 'valid' === valid ? __('Valid', 'neve') : __('Expired', 'neve')), "-", wp.element.createElement("span", {
    className: "expires"
  }, ('valid' === valid ? __('Expires', 'neve') : __('Expired', 'neve')) + ' ' + license.expiration)))));
};

var toggleLicense = function toggleLicense(key, action) {
  var _neveDash2 = neveDash,
      proApi = _neveDash2.proApi;
  Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])(proApi + '/toggle_license', {
    key: key,
    action: action
  }).then(function (r) {
    console.log(r);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LicenseCard);

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */


var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button;
var useState = wp.element.useState;

var Sidebar = function Sidebar(_ref) {
  var currentTab = _ref.currentTab;

  var _useState = useState(neveDash.options.logger || false),
      _useState2 = _slicedToArray(_useState, 2),
      tracking = _useState2[0],
      setTracking = _useState2[1];

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
      }).then(function (x) {
        console.log(x);
      });
    }
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






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
  }
};

if (neveDash.pro) {
  tabs.pro = {
    label: 'Neve Pro',
    render: function render() {
      return wp.element.createElement(_Components_Content_Pro__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  };
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
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return requestData(route, data, 'GET');
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
            return fetch(route, options);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9IZWxwLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1Byby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaWNlbnNlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9QbHVnaW5DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVGFic0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ3cCIsImVsZW1lbnQiLCJEYXNoaWNvbiIsImNvbXBvbmVudHMiLCJBY2NvcmRpb24iLCJwcm9wcyIsImlzT3BlbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsImNsYXNzZXMiLCJjbGFzc25hbWVzIiwiaGVpZ2h0IiwiQ2FyZCIsImljb24iLCJpY29uQWx0IiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWVzIiwiX18iLCJpMThuIiwiRnJhZ21lbnQiLCJDaGFuZ2Vsb2ciLCJuZXZlRGFzaCIsImNoYW5nZWxvZyIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJkYXRlIiwidmVyc2lvbiIsInR3ZWFrcyIsImZpeGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZml4IiwidHdlYWsiLCJCdXR0b24iLCJIZWxwIiwic2V0VGFiIiwiYXNzZXRzIiwiSGVhZGVyIiwicGx1Z2lucyIsIk9iamVjdCIsImtleXMiLCJzbHVnIiwiUHJvIiwiU3RhcnQiLCJyZW5kZXJDdXN0b21pemVyTGlua3MiLCJsaW5rcyIsImN1c3RvbWl6ZXJTaG9ydGN1dHMiLCJzcGxpdCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFydHMiLCJzbGljZSIsImNvbHVtbiIsIml0ZW0iLCJsaW5rIiwidGV4dCIsIlN0YXJ0ZXJTaXRlcyIsInVzZUVmZmVjdCIsImhhc2giLCJnZXRUYWJIYXNoIiwicmVuZGVySGVhZCIsInJlbmRlck5hdmlnYXRpb24iLCJzdHJpbmdzIiwiaGVhZGVyIiwiY3VycmVudFRhYiIsInRhYnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsInBybyIsImxpY2Vuc2UiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ2YWxpZCIsInNob3duS2V5IiwidG9nZ2xlTGljZW5zZSIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJleHBpcmF0aW9uIiwiYWN0aW9uIiwicHJvQXBpIiwic2VuZCIsInRoZW4iLCJyIiwiY29uc29sZSIsImxvZyIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImRhdGEiLCJjdGEiLCJ0eXBlIiwidXBkYXRlIiwiaW5Qcm9ncmVzcyIsInNldEluUHJvZ3Jlc3MiLCJkb25lIiwic2V0RG9uZSIsInVwZGF0ZUVudGl0eSIsImFyZ3MiLCJleGVjdXRlQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGVzIiwiYWpheCIsInBhdGgiLCJwbHVnaW4iLCJOb3RpZmljYXRpb25zIiwibm90aWZpY2F0aW9ucyIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJwcm9ncmVzcyIsImluc3RhbGxQbHVnaW4iLCJzdWNjZXNzIiwiZ2V0Iiwib2siLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImVycm9yIiwiZXJyIiwiVG9nZ2xlQ29udHJvbCIsIlNpZGViYXIiLCJvcHRpb25zIiwibG9nZ2VyIiwidHJhY2tpbmciLCJzZXRUcmFja2luZyIsImFwaSIsIngiLCJUYWJzQ29udGVudCIsInJlbmRlciIsIkFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsInJvdXRlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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UixFQUFjLEtBQWQsQ0FBbEI7QUFDRCxDQUZNOztBQUlQLElBQU13RCxXQUFXO0FBQUEscUVBQUcsaUJBQU9ELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWN2RCxnQkFBZCwyREFBcUIsRUFBckI7QUFBeUJ5RCxrQkFBekIsMkRBQWtDLE1BQWxDO0FBQ1p0QixtQkFEWSxHQUNGO0FBQ2RzQixvQkFBTSxFQUFFQSxNQURNO0FBRWRDLHFCQUFPLEVBQUU7QUFDUCwwQkFBVSxrQkFESDtBQUVQLGdDQUFnQixrQkFGVDtBQUdQLDhCQUFjdEksUUFBUSxDQUFDdUk7QUFIaEI7QUFGSyxhQURFOztBQVVsQixnQkFBSSxXQUFXRixNQUFmLEVBQXVCO0FBQ3JCdEIscUJBQU8sQ0FBQ3lCLElBQVIsR0FBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWU5RCxJQUFmLENBQWY7QUFDRDs7QUFaaUI7QUFBQSxtQkFjTCtELEtBQUssQ0FBQ1IsS0FBRCxFQUFRcEIsT0FBUixDQWRBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWHFCLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIsQyIsImZpbGUiOiIuL2J1aWxkL2J1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBY2NvcmRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2lzT3BlbiwgdGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGlzT3Blbik7XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2FjY29yZGlvbicsIHsnb3Blbic6IG9wZW4sICdjbG9zZWQnOiAhIG9wZW4gfSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e29wZW59XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCEgb3Blbil9XG5cdFx0XHQ+XG5cdFx0XHRcdFx0e3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRpdGxlXCI+e3RpdGxlfTwvZGl2Pn1cblx0XHRcdFx0XHQ8RGFzaGljb25cblx0XHRcdFx0XHRcdGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IG9wZW4gPyAnYXV0bycgOiAnMHB4J319PlxuXHRcdFx0XHR7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2ljb24sIGljb25BbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIGNsYXNzTmFtZXN9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsIGNsYXNzTmFtZXMgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IGFsdD17aWNvbkFsdCB8fCAnaWNvbid9Lz59XG4gICAgICAgIHt0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9BY2NvcmRpb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaGFuZ2Vsb2cgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2NoYW5nZWxvZ30gPSBuZXZlRGFzaDtcblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdHtcblx0XHRcdFx0Y2hhbmdlbG9nLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2RhdGUsIHZlcnNpb24sIHR3ZWFrcywgZml4ZXMsIGZlYXR1cmVzfSA9IGVudHJ5O1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID1cblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0ey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovfVxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD47XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbiBpc09wZW49ezAgPT09IGluZGV4fSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIHN1Y2Nlc3NcIj57X18oJ0ZlYXR1cmVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IDxsaT57ZmVhdHVyZX08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e2ZpeGVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnVncyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGVycm9yXCI+e19fKCdCdWcgRml4ZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZpeGVzLm1hcCgoZml4KSA9PiA8bGk+e2ZpeH08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e3R3ZWFrcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3ZWFrcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj57X18oJ1R3ZWFrcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHdlYWtzLm1hcCgodHdlYWspID0+IDxsaT57dHdlYWt9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2Vsb2c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBIZWxwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYnVveS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2Ugd2FudCB0byBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIGJlc3QgZXhwZXJpZW5jZSB1c2luZyBOZXZlLCBhbmQgdGhhdCBpcyB3aHkgd2UgaGF2ZSBnYXRoZXJlZCBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBoZXJlIGZvciB5b3UuIFdlIGhvcGUgeW91IHdpbGwgZW5qb3kgdXNpbmcgTmV2ZSBhcyBtdWNoIGFzIHdlIGVuam95IGNyZWF0aW5nIGdyZWF0IHByb2R1Y3RzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93b3JkcHJlc3Mub3JnL3N1cHBvcnQvdGhlbWUvbmV2ZS8nXG4gICAgICAgICAgPntfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdsaXN0LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXYW50IHRvIGdldCB0aGUgZ2lzdCBvbiB0aGUgbGF0ZXN0IHRoZW1lIGNoYW5nZXM/IEp1c3QgY29uc3VsdCBvdXIgY2hhbmdlbG9nIGJlbG93IHRvIGdldCBhIHRhc3RlIG9mIHRoZSByZWNlbnQgZml4ZXMgYW5kIGZlYXR1cmVzIGltcGxlbWVudGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignY2hhbmdlbG9nJyl9XG4gICAgICAgICAgPntfXygnVmlldyBDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3RhY2hvbWV0ZXIuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1NwZWVkIHVwIHlvdXIgc2l0ZScsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSBmaW5kIHlvdXJzZWxmIGluIGEgc2l0dWF0aW9uIHdoZXJlIGV2ZXJ5dGhpbmcgb24geW91ciBzaXRlIGlzIHJ1bm5pbmcgdmVyeSBzbG93bHksIHlvdSBtaWdodCBjb25zaWRlciBoYXZpbmcgYSBsb29rIGF0IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHdoZXJlIHlvdSB3aWxsIGZpbmQgdGhlIG1vc3QgY29tbW9uIGlzc3VlcyBjYXVzaW5nIHRoaXMgYW5kIHBvc3NpYmxlIHNvbHV0aW9ucyBmb3IgZWFjaCBvZiB0aGUgaXNzdWVzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvNjMtc3BlZWQtdXAteW91ci13b3JkcHJlc3Mtc2l0ZVwiPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdEb2N1bWVudGF0aW9uJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvOTQ2LW5ldmUtZG9jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Nsb25lLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDcmVhdGUgYSBjaGlsZCB0aGVtZScsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSB3YW50IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgdGhlbWVcXCdzIGZpbGVzLCB0aG9zZSBjaGFuZ2VzIGFyZSBsaWtlbHkgdG8gYmUgb3ZlcndyaXR0ZW4gd2hlbiB5b3UgbmV4dCB1cGRhdGUgdGhlIHRoZW1lLiBJbiBvcmRlciB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcsIHlvdSBuZWVkIHRvIGNyZWF0ZSBhIGNoaWxkIHRoZW1lLiBGb3IgdGhpcywgcGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzE0LWhvdy10by1jcmVhdGUtYS1jaGlsZC10aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdhcnJvd3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0J1aWxkIGEgbGFuZGluZyBwYWdlIHdpdGggYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlcicsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0luIHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHlvdSB3aWxsIGZpbmQgYW4gZWFzeSB3YXkgdG8gYnVpbGQgYSBncmVhdCBsb29raW5nIGxhbmRpbmcgcGFnZSB1c2luZyBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyIHBsdWdpbi4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8yMTktaG93LXRvLWJ1aWxkLWEtbGFuZGluZy1wYWdlLXdpdGgtYS1kcmFnLWFuZC1kcm9wLWNvbnRlbnQtYnVpbGRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBQbHVnaW5DYXJkIGZyb20gJy4uL1BsdWdpbkNhcmQnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7cGx1Z2luc30gPSBuZXZlRGFzaDtcblxuICBpZiAoICEgcGx1Z2lucyApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyggcGx1Z2lucyApLm1hcCggKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBsdWdpbkNhcmQga2V5PXtzbHVnfSBzbHVnPXtzbHVnfSBkYXRhPXtwbHVnaW5zW3NsdWddfS8+O1xuICAgICAgICB9IClcbiAgICAgIH1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICBQcm9cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBTdGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3NxdWFyZXMuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1N0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZXZlIG5vdyBjb21lcyB3aXRoIGEgc2l0ZXMgbGlicmFyeSB3aXRoIHZhcmlvdXMgZGVzaWducyB0byBwaWNrIGZyb20uIFZpc2l0IG91ciBjb2xsZWN0aW9uIG9mIGRlbW9zIHRoYXQgYXJlIGNvbnN0YW50bHkgYmVpbmcgYWRkZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgaXNQcmltYXJ5XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRhYignc3RhcnRlci1zaXRlcycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+e19fKCdHbyB0byBTdGFydGVyIFNpdGVzJywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdHZXR0aW5nIFN0YXJ0ZWQ/IENoZWNrIGhlbHAgYW5kIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2hlbHAnKX1cbiAgICAgICAgICA+e19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJjdXN0b21pemVyLXF1aWNrLWxpbmtzXCJcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY29tcGFzcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3VzdG9taXplciBxdWljayBsaW5rcycsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3VzdG9taXplckxpbmtzKCl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5cbmNvbnN0IHJlbmRlckN1c3RvbWl6ZXJMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBuZXZlRGFzaC5jdXN0b21pemVyU2hvcnRjdXRzO1xuICBjb25zdCBzcGxpdCA9IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyAyKTtcbiAgY29uc3QgcGFydHMgPSBbIGxpbmtzLnNsaWNlKDAsIHNwbGl0KSwgbGlua3Muc2xpY2Uoc3BsaXQpIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7XG4gICAgICAgIHBhcnRzLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNMaW5rIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0udGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IGNvbHVtbi5sZW5ndGggLSAxICYmIDxoci8+fVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFN0YXJ0ZXJTaXRlcyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIFN0YXJ0ZXIgU2l0ZXNcbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRlclNpdGVzO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2FkZFVybEhhc2gsIGdldFRhYkhhc2gsIHRhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgPT09IGhhc2gpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cHJvcHMuc2V0VGFiKGhhc2gpO1xuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cmVuZGVySGVhZCgpfVxuXHRcdFx0XHR7cmVuZGVyTmF2aWdhdGlvbihwcm9wcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlckhlYWQgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e25ldmVEYXNoLnN0cmluZ3MuaGVhZGVyfTwvaDE+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+e25ldmVEYXNoLnZlcnNpb259PC9zcGFuPlxuXHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvbG9nby5zdmcnfSBhbHQ9e19fKCdOZXZlIFRoZW1lIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHR7T2JqZWN0LmtleXModGFicykubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPjxhXG5cdFx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdGFkZFVybEhhc2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57dGFic1tpdGVtXS5sYWJlbH1cblx0XHRcdFx0XHQ8L2E+PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IExpY2Vuc2VDYXJkID0gKHtpc1Zpc2libGV9KSA9PiB7XG5cdGNvbnN0IHtwcm8sIGxpY2Vuc2V9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IFsga2V5LCBzZXRLZXkgXSA9IHVzZVN0YXRlKGxpY2Vuc2UgPyBsaWNlbnNlLmtleSB8fCAnJyA6ICcnICk7XG5cdGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdmFsaWQgPSBsaWNlbnNlLnZhbGlkIHx8ICdpbnZhbGlkJztcblx0Y29uc3Qgc2hvd25LZXkgPSBsaWNlbnNlLmtleSAmJiAndmFsaWQnID09PSB2YWxpZCA/ICcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionICsga2V5LnNsaWNlKC01KSA6ICcnO1xuXHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZCBsaWNlbnNlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHQ8aDQ+e19fKCdOZXZlIFBybyBBZGRvbiBsaWNlbnNlJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHQ8cD5FbnRlciB5b3VyIGxpY2Vuc2UgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9zdG9yZS50aGVtZWlzbGUuY29tXCI+VGhlbWVJc2xlPC9hPiBwdXJjaGFzZSBoaXN0b3J5IGluIG9yZGVyIHRvIGdldFxuXHRcdFx0XHRcdHBsdWdpbiB1cGRhdGVzPC9wPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJsaWNlbnNlLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKCd2YWxpZCcgPT09IHZhbGlkKSB7XG5cdFx0XHRcdFx0XHR0b2dnbGVMaWNlbnNlKGtleSwgJ2RlYWN0aXZhdGUnKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG9nZ2xlTGljZW5zZShrZXksICdhY3RpdmF0ZScpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEtleShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c2hvd25LZXkgfHwgbnVsbH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgPyBfXygnRGVhY3RpdmF0ZScsICduZXZlJykgOiBfXygnQWN0aXZhdGUnLCAnbmV2ZScpKSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKSA6IF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInN0YXR1cy1pY29uXCI+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQtXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGxpY2Vuc2UuZXhwaXJhdGlvbn1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hc2lkZT5cblx0KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpY2Vuc2UgPSAoa2V5LCBhY3Rpb24pID0+IHtcblx0Y29uc3Qge3Byb0FwaX0gPSBuZXZlRGFzaDtcblx0c2VuZChwcm9BcGkgKyAnL3RvZ2dsZV9saWNlbnNlJywge2tleSwgYWN0aW9ufSkudGhlbigocikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHIpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpY2Vuc2VDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlzRGVmYXVsdFxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2lzLWxvYWRpbmcnOiBpblByb2dyZXNzfSl9XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlRW50aXR5KHVwZGF0ZSwgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpblByb2dyZXNzID9cbiAgICAgICAgICA8c3Bhbj48RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz4ge19fKCdJbiBQcm9ncmVzcycsICduZXZlJykgKyAnLi4uJ30gPC9zcGFuPiA6XG4gICAgICAgICAgICBjdGFcbiAgICAgICAgfVxuICAgICAgPC9CdXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRW50aXR5ID0gKGFyZ3MsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbikgPT4ge1xuICBpZiAoISBhcmdzLnR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICgndGhlbWUnID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXRoZW1lJywge3NsdWc6IGFyZ3Muc2x1Z30pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3RoZW1lLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgncGx1Z2luJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1ZyB8fCAhIGFyZ3MucGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS1wbHVnaW4nLCB7c2x1ZzogYXJncy5zbHVnLCBwbHVnaW46IGFyZ3MucGF0aH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3BsdWdpbi11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gIGV4ZWN1dGVBY3Rpb24oKS50aGVuKCgpID0+IHtcbiAgICBzZXREb25lKHRydWUpO1xuICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghIG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoMSA+IG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBkYXRhPXtuZXZlRGFzaC5ub3RpZmljYXRpb25zW3NsdWddfSBzbHVnPXtzbHVnfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcbiAgY29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0cmluZ01hcCA9IHtcbiAgICAnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG4gICAgJ2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG4gICAgJ2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG4gICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgaXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuICAgICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgci5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldChkYXRhW2FjdGlvbl0pLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sLCBCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFifSkgPT4ge1xuXHRjb25zdCBbIHRyYWNraW5nLCBzZXRUcmFja2luZyBdID0gdXNlU3RhdGUobmV2ZURhc2gub3B0aW9ucy5sb2dnZXIgfHwgZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHR7bmV2ZURhc2gucHJvICYmIDxMaWNlbnNlQ2FyZCBpc1Zpc2libGU9eydwcm8nID09PSBjdXJyZW50VGFifS8+fVxuXHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ05ldmUgQ29tbXVuaXR5JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0FyZSB5b3UgYXJlIGVuam95aW5nIE5ldmU/IFdlIHdvdWxkIGxvdmUgdG8gaGVhciB5b3VyIGZlZWRiYWNrLicsICduZXZlJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnQ29udHJpYnV0aW5nJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHQ8cD57X18oJ0JlY29tZSBhIGNvbnRyaWJ1dG9yIGJ5IG9wdGluZyBpbiB0byBvdXIgYW5vbnltb3VzIGRhdGEgdHJhY2tpbmcuIFdlIGd1YXJhbnRlZSBubyBzZW5zaXRpdmUgZGF0YSBpcyBjb2xsZWN0ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzExMjItbmV2ZS11c2FnZS10cmFja2luZ1wiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RyYWNraW5nfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbGxvdyBBbm9ueW1vdXMgVHJhY2tpbmcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2guYXBpICsgJy90b2dnbGVfdHJhY2tpbmcnLCB7dmFsdWV9KS50aGVuKCh4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYXNpZGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3RhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRhYnNDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9Db21wb25lbnRzL1RhYnNDb250ZW50JztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vQ29tcG9uZW50cy9TaWRlYmFyJztcblxuY29uc3Qge3JlbmRlciwgdXNlU3RhdGUsIEZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgWyBjdXJyZW50VGFiLCBzZXRUYWIgXSA9IHVzZVN0YXRlKCdzdGFydCcpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWRlciBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9ucy8+XG4gICAgICAgICAgPFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxucmVuZGVyKFxuICA8QXBwLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBTdGFydGVyU2l0ZXMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0ZXJTaXRlcyc7XG5pbXBvcnQgU3RhcnQgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1N0YXJ0JztcbmltcG9ydCBQcm8gZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1Bybyc7XG5pbXBvcnQgUGx1Z2lucyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUGx1Z2lucyc7XG5pbXBvcnQgSGVscCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvSGVscCc7XG5pbXBvcnQgQ2hhbmdlbG9nIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9DaGFuZ2Vsb2cnO1xuXG5jb25zdCBnZXRVcmxQYXJhbSA9IChwYXJhbSkgPT4ge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuXG4gIHJldHVybiB1cmxQYXJhbXMuZ2V0KHBhcmFtKTtcbn07XG5cbmNvbnN0IGFkZFVybEhhc2ggPSAoaGFzaCkgPT4ge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG59O1xuXG5jb25zdCBnZXRUYWJIYXNoID0gKCkgPT4ge1xuICBsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYXNoID0gaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgaWYgKCEgT2JqZWN0LmtleXModGFicykuaW5jbHVkZXMoaGFzaCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufTtcblxuY29uc3QgdGFicyA9IHtcbiAgJ3N0YXJ0Jzoge2xhYmVsOiAnR2V0dGluZyBTdGFydGVkJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnQgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuICAncGx1Z2lucyc6IHtsYWJlbDogJ1VzZWZ1bCBQbHVnaW5zJywgcmVuZGVyOiAoKSA9PiA8UGx1Z2lucy8+fSxcbiAgJ2hlbHAnOiB7bGFiZWw6ICdIZWxwICYgZG9jcycsIHJlbmRlcjogKHNldFRhYikgPT4gPEhlbHAgc2V0VGFiPXtzZXRUYWJ9Lz59LFxuICAnY2hhbmdlbG9nJzoge2xhYmVsOiAnQ2hhbmdlbG9nJywgcmVuZGVyOiAoKSA9PiA8Q2hhbmdlbG9nLz59LFxuICAnc3RhcnRlci1zaXRlcyc6IHtsYWJlbDogJ1N0YXJ0ZXIgU2l0ZXMnLCByZW5kZXI6ICgpID0+IDxTdGFydGVyU2l0ZXMvPn1cbn07XG5cbmlmICggbmV2ZURhc2gucHJvICkge1xuXHR0YWJzLnBybyA9IHtsYWJlbDogJ05ldmUgUHJvJywgcmVuZGVyOiAoKSA9PiA8UHJvLz59O1xufVxuXG5cbmV4cG9ydCB7XG4gIGdldFVybFBhcmFtLFxuICBhZGRVcmxIYXNoLFxuICBnZXRUYWJIYXNoLFxuICB0YWJzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEpID0+IHtcbiAgcmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIGRhdGEgPSB7fSApID0+IHtcbiAgcmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBkYXRhLCAnR0VUJyk7XG59O1xuXG5jb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jIChyb3V0ZSwgZGF0YSA9IHt9LCBtZXRob2QgPSAnUE9TVCcpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICd4LXdwLW5vbmNlJzogbmV2ZURhc2gubm9uY2VcbiAgICB9XG4gIH07XG5cbiAgaWYgKCdQT1NUJyA9PT0gbWV0aG9kKSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gYXdhaXQgZmV0Y2gocm91dGUsIG9wdGlvbnMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=