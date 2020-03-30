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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var withDispatch = wp.data.withDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;

var App = function App(_ref) {
  var setSettings = _ref.setSettings;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState('start'),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTab = _useState4[0],
      setTab = _useState4[1];

  useEffect(function () {
    var hash = Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTabHash"])();

    if (null !== hash) {
      setTab(hash);
    }

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
  }, wp.element.createElement(_Notifications__WEBPACK_IMPORTED_MODULE_1__["default"], null), wp.element.createElement(_TabsContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentTab: currentTab,
    setTab: setTab
  })), wp.element.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentTab: currentTab
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _setSettings = _dispatch.setSettings;

  return {
    setSettings: function setSettings(object) {
      return _setSettings(object);
    }
  };
})(App));

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
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");
/* global neveDash */


var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Button = _wp$components.Button;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var Fragment = wp.element.Fragment;
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
      availabilityLevel = _neveDash$modules$slu.availabilityLevel,
      options = _neveDash$modules$slu.options,
      order = _neveDash$modules$slu.order,
      documentation = _neveDash$modules$slu.documentation,
      required_actions = _neveDash$modules$slu.required_actions;
  var _neveDash = neveDash,
      upgradeLinks = _neveDash.upgradeLinks;
  var _neveDash2 = neveDash,
      proApi = _neveDash2.proApi;

  function renderOptionsAccordions() {
    return options.map(function (group) {
      var label = group.label,
          options = group.options;
      return wp.element.createElement(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: label
      }, wp.element.createElement("form", null, Object.keys(options).map(function (optionSlug) {
        var _options$optionSlug = options[optionSlug],
            label = _options$optionSlug.label,
            type = _options$optionSlug.type;
        return wp.element.createElement("div", {
          className: "field-wrap text"
        }, 'text' === type && wp.element.createElement(Fragment, null, label && wp.element.createElement("label", {
          "for": optionSlug
        }, label), wp.element.createElement("input", {
          type: "text",
          name: optionSlug
        })), 'toggle' === type && wp.element.createElement(ToggleControl, null));
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
  }, __('Upgrade', 'neve')) : wp.element.createElement(ToggleControl, {
    checked: getStatus(slug),
    onChange: function onChange(value) {
      toggleModule(slug, value);
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_1__["changeOption"])('nv_pro_' + slug + '_status', value);
    }
  }))), wp.element.createElement("div", {
    className: "card-content"
  }, wp.element.createElement("p", {
    className: "card-description"
  }, description + ' ', documentation && wp.element.createElement("a", {
    href: documentation
  }, __('Learn More', 'neve'))), 0 < options.length && true === getStatus(slug) && wp.element.createElement("div", {
    className: "module-options"
  }, renderOptionsAccordions())));
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
/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/App */ "./src/Components/App.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/actions */ "./src/store/actions.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducer */ "./src/store/reducer.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors */ "./src/store/selectors.js");


var registerStore = wp.data.registerStore;
var render = wp.element.render;



registerStore('neve-dashboard', {
  reducer: _store_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _store_actions__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectors: _store_selectors__WEBPACK_IMPORTED_MODULE_4__["default"]
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
  setSettings: function setSettings(object) {
    return {
      type: 'SET_SETTINGS',
      payload: {
        object: object
      }
    };
  },
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
  settings: {},
  tier: neveDash.pro ? neveDash.license.tier : 0
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_SETTINGS':
      var object = action.payload.object;
      return _objectSpread({}, state, {
        settings: object
      });

    case 'TOGGLE_MODULE':
      var _action$payload = action.payload,
          slug = _action$payload.slug,
          value = _action$payload.value;
      return _objectSpread({}, state, {
        settings: _objectSpread({}, state.settings, _defineProperty({}, 'nv_pro_' + slug + '_status', value))
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
    return state.settings['nv_pro_' + slug + '_status'];
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

var changeOption = function changeOption(option, value) {
  var model = new wp.api.models.Settings(_defineProperty({}, option, value));
  model.save().then(function (response) {
    console.log(response[option]);
    console.log(response); // [option]: response[option],
    // isAPISaving: false
    // });
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVByby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGljZW5zZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsIndpdGhEaXNwYXRjaCIsImRhdGEiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsIkFwcCIsInNldFNldHRpbmdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50VGFiIiwic2V0VGFiIiwiaGFzaCIsImdldFRhYkhhc2giLCJzZXR0aW5ncyIsImFwaSIsImxvYWRQcm9taXNlIiwidGhlbiIsIm1vZGVscyIsIlNldHRpbmdzIiwiZmV0Y2giLCJyIiwiZGlzcGF0Y2giLCJvYmplY3QiLCJDYXJkIiwiaWNvbiIsImljb25BbHQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZXMiLCJfXyIsImkxOG4iLCJDaGFuZ2Vsb2ciLCJuZXZlRGFzaCIsImNoYW5nZWxvZyIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJkYXRlIiwidmVyc2lvbiIsInR3ZWFrcyIsImZpeGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZml4IiwidHdlYWsiLCJCdXR0b24iLCJQcm8iLCJmZWF0dXJlRGF0YSIsIml0ZW0iLCJ1cGdyYWRlVVJMIiwiSGVscCIsImFzc2V0cyIsIkhlYWRlciIsInBsdWdpbnMiLCJPYmplY3QiLCJrZXlzIiwic2x1ZyIsIm1vZHVsZXMiLCJpZCIsIlN0YXJ0IiwicmVuZGVyQ3VzdG9taXplckxpbmtzIiwibGlua3MiLCJjdXN0b21pemVyU2hvcnRjdXRzIiwic3BsaXQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhcnRzIiwic2xpY2UiLCJjb2x1bW4iLCJsaW5rIiwidGV4dCIsIlN0YXJ0ZXJTaXRlcyIsInVzZVJlZiIsIkZlYXR1cmVSb3ciLCJpbkxpdGUiLCJ0b29sdGlwIiwidG9nZ2xlVG9vbHRpcCIsImZvcmNlVG9vbFRpcCIsInRvZ2dsZUZvcmNlVG9vbHRpcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJ3aXRoU2VsZWN0IiwiTGljZW5zZUNhcmQiLCJpc1Zpc2libGUiLCJjaGFuZ2VUaWVyIiwibGljZW5zZSIsInByb0FwaSIsInZhbGlkIiwia2V5Iiwic2V0S2V5Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwic2V0VmFsaWQiLCJleHBpcmF0aW9uIiwic2V0RXhwaXJhdGlvbiIsInRvYXN0Iiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidGllciIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiY2hhbmdlTGljZW5zZVRpZXIiLCJuZXdUaWVyIiwiTG9hZGluZyIsIkFycmF5IiwiZnJvbSIsIm5vdGlmaWNhdGlvbnMiLCJUb2dnbGVDb250cm9sIiwiY29tcG9zZSIsIk1vZHVsZUNhcmQiLCJ0b2dnbGVNb2R1bGUiLCJnZXRTdGF0dXMiLCJuaWNlbmFtZSIsImF2YWlsYWJpbGl0eUxldmVsIiwib3B0aW9ucyIsIm9yZGVyIiwiZG9jdW1lbnRhdGlvbiIsInJlcXVpcmVkX2FjdGlvbnMiLCJ1cGdyYWRlTGlua3MiLCJyZW5kZXJPcHRpb25zQWNjb3JkaW9ucyIsImdyb3VwIiwib3B0aW9uU2x1ZyIsInR5cGUiLCJjaGFuZ2VPcHRpb24iLCJzZWxlY3QiLCJnZXRNb2R1bGVTdGF0dXMiLCJnZXRMaWNlbnNlVGllciIsImNoYW5nZU1vZHVsZVN0YXR1cyIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJwcm9ncmVzcyIsImluc3RhbGxQbHVnaW4iLCJnZXQiLCJvayIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZXJyb3IiLCJlcnIiLCJTaWRlYmFyIiwibG9nZ2VyIiwidHJhY2tpbmciLCJzZXRUcmFja2luZyIsInBybyIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaWNvbk1hcCIsInVzZU91dHNpZGVDbGljayIsInJlZiIsImNhbGxiYWNrIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiT25DbGlja091dHNpZGUiLCJ3cmFwcGVyUmVmIiwicmVnaXN0ZXJTdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIiwic2VsZWN0b3JzIiwiUm9vdCIsImdldEVsZW1lbnRCeUlkIiwicGF5bG9hZCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiZ2V0VXJsUGFyYW0iLCJwYXJhbSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzdWJzdHJpbmciLCJvcHRpb24iLCJtb2RlbCIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwicm91dGUiLCJzaW1wbGUiLCJyZXF1ZXN0RGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJub25jZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7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QUFYUCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCLEMiLCJmaWxlIjoiLi9idWlsZC9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWNjb3JkaW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtpc09wZW4sIHRpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShpc09wZW4pO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICdhY2NvcmRpb24nLCB7J29wZW4nOiBvcGVuLCAnY2xvc2VkJzogISBvcGVuIH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtvcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0T3BlbighIG9wZW4pfVxuXHRcdFx0PlxuXHRcdFx0XHRcdHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPnt0aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0PERhc2hpY29uXG5cdFx0XHRcdFx0XHRpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiBvcGVuID8gJ2F1dG8nIDogJzBweCd9fT5cblx0XHRcdFx0e2NoaWxkcmVuICYmIGNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9UYWJzQ29udGVudCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge3dpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudCwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICh7c2V0U2V0dGluZ3N9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFsgY3VycmVudFRhYiwgc2V0VGFiIF0gPSB1c2VTdGF0ZSgnc3RhcnQnKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgIT09IGhhc2gpIHtcblx0XHRcdHNldFRhYihoYXNoKTtcblx0XHR9XG5cblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdFx0c2V0dGluZ3MuZmV0Y2goKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRzZXRTZXR0aW5ncyhyKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8TG9hZGluZy8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZGVyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdDxOb3RpZmljYXRpb25zLz5cblx0XHRcdFx0XHQ8VGFic0NvbnRlbnQgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxTaWRlYmFyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtzZXRTZXR0aW5nc30gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtzZXRTZXR0aW5nczogKG9iamVjdCkgPT4gc2V0U2V0dGluZ3Mob2JqZWN0KX07XG59KShBcHApO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENoYW5nZWxvZyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y2hhbmdlbG9nfSA9IG5ldmVEYXNoO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWxvZy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkYXRlLCB2ZXJzaW9uLCB0d2Vha3MsIGZpeGVzLCBmZWF0dXJlc30gPSBlbnRyeTtcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+O1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxBY2NvcmRpb24gaXNPcGVuPXswID09PSBpbmRleH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBzdWNjZXNzXCI+e19fKCdGZWF0dXJlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiA8bGk+e2ZlYXR1cmV9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtmaXhlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1Z3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBlcnJvclwiPntfXygnQnVnIEZpeGVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmaXhlcy5tYXAoKGZpeCkgPT4gPGxpPntmaXh9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHt0d2Vha3MgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2Vha3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+e19fKCdUd2Vha3MnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3R3ZWFrcy5tYXAoKHR3ZWFrKSA9PiA8bGk+e3R3ZWFrfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEZlYXR1cmVSb3cgZnJvbSAnLi4vRmVhdHVyZVJvdyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2ZlYXR1cmVEYXRhfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY2FyZCB0YWJsZVwiPlxuXHRcdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZFwiPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJsYXJnZVwiLz5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHR7ZmVhdHVyZURhdGEubWFwKChpdGVtKSA9PiA8RmVhdHVyZVJvdyBpdGVtPXtpdGVtfS8+KX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB1cHNlbGxcIj5cblx0XHRcdFx0PHA+e19fKCdHZXQgYWNjZXNzIHRvIGFsbCBQcm8gZmVhdHVyZXMgYW5kIHBvd2VyLXVwIHlvdXIgd2Vic2l0ZScsICduZXZlJyl9PC9wPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gudXBncmFkZVVSTH1cblx0XHRcdFx0XHRpc1ByaW1hcnk+XG5cdFx0XHRcdFx0e19fKCdHZXQgTmV2ZSBQcm8gTm93JywgJ25ldmUnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEhlbHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdidW95LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXZSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIHVzaW5nIE5ldmUsIGFuZCB0aGF0IGlzIHdoeSB3ZSBoYXZlIGdhdGhlcmVkIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGhlcmUgZm9yIHlvdS4gV2UgaG9wZSB5b3Ugd2lsbCBlbmpveSB1c2luZyBOZXZlIGFzIG11Y2ggYXMgd2UgZW5qb3kgY3JlYXRpbmcgZ3JlYXQgcHJvZHVjdHMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgaXNQcmltYXJ5XG4gICAgICAgICAgICBocmVmPSdodHRwczovL3dvcmRwcmVzcy5vcmcvc3VwcG9ydC90aGVtZS9uZXZlLydcbiAgICAgICAgICA+e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2xpc3Quc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dhbnQgdG8gZ2V0IHRoZSBnaXN0IG9uIHRoZSBsYXRlc3QgdGhlbWUgY2hhbmdlcz8gSnVzdCBjb25zdWx0IG91ciBjaGFuZ2Vsb2cgYmVsb3cgdG8gZ2V0IGEgdGFzdGUgb2YgdGhlIHJlY2VudCBmaXhlcyBhbmQgZmVhdHVyZXMgaW1wbGVtZW50ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdjaGFuZ2Vsb2cnKX1cbiAgICAgICAgICA+e19fKCdWaWV3IENoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAndGFjaG9tZXRlci5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3BlZWQgdXAgeW91ciBzaXRlJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS82My1zcGVlZC11cC15b3VyLXdvcmRwcmVzcy1zaXRlXCI+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0RvY3VtZW50YXRpb24nLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS85NDYtbmV2ZS1kb2NcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY2xvbmUuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NyZWF0ZSBhIGNoaWxkIHRoZW1lJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IHdhbnQgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSB0aGVtZVxcJ3MgZmlsZXMsIHRob3NlIGNoYW5nZXMgYXJlIGxpa2VseSB0byBiZSBvdmVyd3JpdHRlbiB3aGVuIHlvdSBuZXh0IHVwZGF0ZSB0aGUgdGhlbWUuIEluIG9yZGVyIHRvIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZywgeW91IG5lZWQgdG8gY3JlYXRlIGEgY2hpbGQgdGhlbWUuIEZvciB0aGlzLCBwbGVhc2UgZm9sbG93IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93LicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTQtaG93LXRvLWNyZWF0ZS1hLWNoaWxkLXRoZW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Fycm93cy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQnVpbGQgYSBsYW5kaW5nIHBhZ2Ugd2l0aCBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzIxOS1ob3ctdG8tYnVpbGQtYS1sYW5kaW5nLXBhZ2Utd2l0aC1hLWRyYWctYW5kLWRyb3AtY29udGVudC1idWlsZGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFBsdWdpbkNhcmQgZnJvbSAnLi4vUGx1Z2luQ2FyZCc7XG5cbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtwbHVnaW5zfSA9IG5ldmVEYXNoO1xuXG4gIGlmICggISBwbHVnaW5zICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKCBwbHVnaW5zICkubWFwKCAoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiA8UGx1Z2luQ2FyZCBrZXk9e3NsdWd9IHNsdWc9e3NsdWd9IGRhdGE9e3BsdWdpbnNbc2x1Z119Lz47XG4gICAgICAgIH0gKVxuICAgICAgfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBNb2R1bGVDYXJkIGZyb20gJy4uL01vZHVsZUNhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge21vZHVsZXN9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdHtcblx0XHRcdFx0T2JqZWN0LmtleXMobW9kdWxlcykubWFwKChpZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TW9kdWxlQ2FyZCBzbHVnPXtpZH0vPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNvbnN0IFN0YXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnc3F1YXJlcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3RhcnRlciBTaXRlcycsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05ldmUgbm93IGNvbWVzIHdpdGggYSBzaXRlcyBsaWJyYXJ5IHdpdGggdmFyaW91cyBkZXNpZ25zIHRvIHBpY2sgZnJvbS4gVmlzaXQgb3VyIGNvbGxlY3Rpb24gb2YgZGVtb3MgdGhhdCBhcmUgY29uc3RhbnRseSBiZWluZyBhZGRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICBpc1ByaW1hcnlcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGFiKCdzdGFydGVyLXNpdGVzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID57X18oJ0dvIHRvIFN0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0dldHRpbmcgU3RhcnRlZD8gQ2hlY2sgaGVscCBhbmQgZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignaGVscCcpfVxuICAgICAgICAgID57X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImN1c3RvbWl6ZXItcXVpY2stbGlua3NcIlxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjb21wYXNzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDdXN0b21pemVyIHF1aWNrIGxpbmtzJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDdXN0b21pemVyTGlua3MoKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cblxuY29uc3QgcmVuZGVyQ3VzdG9taXplckxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IG5ldmVEYXNoLmN1c3RvbWl6ZXJTaG9ydGN1dHM7XG4gIGNvbnN0IHNwbGl0ID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIDIpO1xuICBjb25zdCBwYXJ0cyA9IFsgbGlua3Muc2xpY2UoMCwgc3BsaXQpLCBsaW5rcy5zbGljZShzcGxpdCkgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIHtcbiAgICAgICAgcGFydHMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc0xpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS50ZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gY29sdW1uLmxlbmd0aCAtIDEgJiYgPGhyLz59XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU3RhcnRlclNpdGVzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgU3RhcnRlciBTaXRlc1xuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydGVyU2l0ZXM7XG4iLCJjb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IE9uQ2xpY2tPdXRzaWRlIGZyb20gJy4vVXRpbHMvT25DbGlja091dHNpZGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG5cdGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuXHRjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBmb3JjZVRvb2xUaXAsIHRvZ2dsZUZvcmNlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PHRyIGNsYXNzTmFtZT1cImZlYXR1cmUtcm93XCI+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwibGFyZ2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aDQ+e3RpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0PE9uQ2xpY2tPdXRzaWRlIGFjdGlvbj17KCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9nZ2xlRm9yY2VUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHR9fT4gPGFcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUZvcmNlVG9vbHRpcCh0cnVlKTtcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHRcdFx0eyh0b29sdGlwIHx8IGZvcmNlVG9vbFRpcCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9PbkNsaWNrT3V0c2lkZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdpbmRpY2F0b3InLCB7J2Vycm9yJzogISBpbkxpdGUsICdzdWNjZXNzJzogaW5MaXRlfSBdKX0+XG5cdFx0XHRcdDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj17aW5MaXRlID8gJ3llcycgOiAnbm8tYWx0J30vPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJpbmRpY2F0b3Igc3VjY2Vzc1wiPlxuXHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MzB9IGljb249XCJ5ZXNcIi8+XG5cdFx0XHQ8L3RkPlxuXHRcdDwvdHI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlUm93O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2FkZFVybEhhc2gsIGdldFRhYkhhc2gsIHRhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuXHRcdGlmIChudWxsID09PSBoYXNoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHByb3BzLnNldFRhYihoYXNoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtyZW5kZXJIZWFkKCl9XG5cdFx0XHRcdHtyZW5kZXJOYXZpZ2F0aW9uKHByb3BzKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVySGVhZCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bmV2ZURhc2guc3RyaW5ncy5oZWFkZXJ9PC9oMT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj57bmV2ZURhc2gudmVyc2lvbn08L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9sb2dvLnN2Zyd9IGFsdD17X18oJ05ldmUgVGhlbWUgTG9nbycsICduZXZlJyl9Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdHtPYmplY3Qua2V5cyh0YWJzKS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGk+PGFcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gaXRlbSA/ICdhY3RpdmUnIDogJyd9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFRhYihpdGVtKTtcblx0XHRcdFx0XHRcdFx0YWRkVXJsSGFzaChpdGVtKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Pnt0YWJzW2l0ZW1dLmxhYmVsfVxuXHRcdFx0XHRcdDwvYT48L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMaWNlbnNlQ2FyZCA9ICh7aXNWaXNpYmxlLCBjaGFuZ2VUaWVyfSkgPT4ge1xuXHRjb25zdCB7bGljZW5zZSwgcHJvQXBpfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIGtleSwgc2V0S2V5IF0gPSB1c2VTdGF0ZShsaWNlbnNlICYmICd2YWxpZCcgPT09IGxpY2Vuc2UudmFsaWQgPyBsaWNlbnNlLmtleSB8fCAnJyA6ICcnKTtcblx0Y29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIHZhbGlkLCBzZXRWYWxpZCBdID0gdXNlU3RhdGUobGljZW5zZS52YWxpZCB8fCAnaW52YWxpZCcpO1xuXHRjb25zdCBbIGV4cGlyYXRpb24sIHNldEV4cGlyYXRpb24gXSA9IHVzZVN0YXRlKGxpY2Vuc2UuZXhwaXJhdGlvbiB8fCAnJyk7XG5cdGNvbnN0IFsgdG9hc3QsIHNldFRvYXN0IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgdG9hc3RUeXBlLCBzZXRUb2FzdFR5cGUgXSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG5cblx0aWYgKCEgaXNWaXNpYmxlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB0b2dnbGVMaWNlbnNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvRG8gPSAndmFsaWQnID09PSB2YWxpZCA/ICdkZWFjdGl2YXRlJyA6ICdhY3RpdmF0ZSc7XG5cdFx0c2V0U3RhdHVzKCdhY3RpdmF0ZScgPT09IHRvRG8gPyAnYWN0aXZhdGluZycgOiAnZGVhY3RpdmF0aW5nJyk7XG5cdFx0c2VuZChwcm9BcGkgKyAnL3RvZ2dsZV9saWNlbnNlJywge2tleSwgYWN0aW9uOiB0b0RvfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHNldFRvYXN0VHlwZShyZXNwb25zZS5zdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyk7XG5cdFx0XHRzZXRLZXkoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/IGtleSA6ICcnKTtcblx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0c2V0RXhwaXJhdGlvbihyZXNwb25zZS5leHBpcmF0aW9uKTtcblx0XHRcdHNldFZhbGlkKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICd2YWxpZCcgOiAnbm90X2FjdGl2ZScpO1xuXHRcdFx0c2V0U3RhdHVzKGZhbHNlKTtcblx0XHRcdG5ldmVEYXNoLmxpY2Vuc2UuZXhwaXJhdGlvbiA9IHJlc3BvbnNlLmV4cGlyYXRpb247XG5cdFx0XHRjaGFuZ2VUaWVyKHJlc3BvbnNlLnRpZXIgfHwgMSk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkIGxpY2Vuc2VcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdDxoND57X18oJ05ldmUgUHJvIEFkZG9uIGxpY2Vuc2UnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0PHA+RW50ZXIgeW91ciBsaWNlbnNlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vc3RvcmUudGhlbWVpc2xlLmNvbVwiPlRoZW1lSXNsZTwvYT4gcHVyY2hhc2UgaGlzdG9yeSBpbiBvcmRlciB0byBnZXRcblx0XHRcdFx0XHRwbHVnaW4gdXBkYXRlczwvcD5cblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibGljZW5zZS1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZUxpY2Vuc2UoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEtleShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHQndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0JyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicgKyBrZXkuc2xpY2UoLTUpIDpcblx0XHRcdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0ZScsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGluZycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGluZycsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0b2FzdCAmJiA8VG9hc3QgdHlwZT17dG9hc3RUeXBlfSBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9Lz59XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZXMoWyAnc3RhdHVzLWljb24nLCAndmFsaWQnID09PSB2YWxpZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicgXSlcblx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ZXhwaXJhdGlvbiAmJlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4tPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGV4cGlyYXRpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2VMaWNlbnNlVGllcn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VUaWVyOiAobmV3VGllcikgPT4ge1xuXHRcdFx0Y2hhbmdlTGljZW5zZVRpZXIobmV3VGllcik7XG5cdFx0fVxuXHR9O1xufSkoTGljZW5zZUNhcmQpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2stZGFzaFwiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb24gbG9hZGluZ1wiPnYyLjYuMjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBsb2dvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKEFycmF5KDYpKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGk+PGEgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz48L2xpPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmV2ZURhc2gubm90aWZpY2F0aW9ucyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBsb2FkaW5nIHBsYWNlaG9sZGVyXCIvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2x1bW5zIHN0YXJ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9taXplci1xdWljay1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYXNpZGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7VG9nZ2xlQ29udHJvbCwgQnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgTW9kdWxlQ2FyZCA9ICh7c2x1ZywgdG9nZ2xlTW9kdWxlLCBnZXRTdGF0dXMsIHRpZXJ9KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IHtwcm9BcGl9ID0gbmV2ZURhc2g7XG5cblx0ZnVuY3Rpb24gcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgob3B0aW9uU2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB7bGFiZWwsIHR5cGV9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyAndGV4dCcgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtsYWJlbCAmJiA8bGFiZWwgZm9yPXtvcHRpb25TbHVnfT57bGFiZWx9PC9sYWJlbD59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIG5hbWU9e29wdGlvblNsdWd9Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2wvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdHsvKnt0aWVyfSovfVxuXHRcdFx0XHR7Lyp7YXZhaWxhYmlsaXR5TGV2ZWx9Ki99XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZXRTdGF0dXMoc2x1Zyl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dG9nZ2xlTW9kdWxlKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbignbnZfcHJvXycgKyBzbHVnICsgJ19zdGF0dXMnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtkb2N1bWVudGF0aW9uICYmXG5cdFx0XHRcdFx0PGEgaHJlZj17ZG9jdW1lbnRhdGlvbn0+e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX08L2E+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdHsoMCA8IG9wdGlvbnMubGVuZ3RoICYmIHRydWUgPT09IGdldFN0YXR1cyhzbHVnKSApICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kdWxlLW9wdGlvbnNcIj5cblx0XHRcdFx0XHR7cmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldE1vZHVsZVN0YXR1cywgZ2V0TGljZW5zZVRpZXJ9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRTdGF0dXM6IChzbHVnKSA9PiBnZXRNb2R1bGVTdGF0dXMoc2x1ZyksXG5cdFx0XHR0aWVyOiBnZXRMaWNlbnNlVGllcigpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlU3RhdHVzfSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2dnbGVNb2R1bGU6IChzbHVnLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pXG4pKE1vZHVsZUNhcmQpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlzRGVmYXVsdFxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2lzLWxvYWRpbmcnOiBpblByb2dyZXNzfSl9XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlRW50aXR5KHVwZGF0ZSwgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpblByb2dyZXNzID9cbiAgICAgICAgICA8c3Bhbj48RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz4ge19fKCdJbiBQcm9ncmVzcycsICduZXZlJykgKyAnLi4uJ30gPC9zcGFuPiA6XG4gICAgICAgICAgICBjdGFcbiAgICAgICAgfVxuICAgICAgPC9CdXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRW50aXR5ID0gKGFyZ3MsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbikgPT4ge1xuICBpZiAoISBhcmdzLnR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICgndGhlbWUnID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXRoZW1lJywge3NsdWc6IGFyZ3Muc2x1Z30pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3RoZW1lLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgncGx1Z2luJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1ZyB8fCAhIGFyZ3MucGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS1wbHVnaW4nLCB7c2x1ZzogYXJncy5zbHVnLCBwbHVnaW46IGFyZ3MucGF0aH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3BsdWdpbi11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gIGV4ZWN1dGVBY3Rpb24oKS50aGVuKCgpID0+IHtcbiAgICBzZXREb25lKHRydWUpO1xuICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghIG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoMSA+IG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBkYXRhPXtuZXZlRGFzaC5ub3RpZmljYXRpb25zW3NsdWddfSBzbHVnPXtzbHVnfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcbiAgY29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0cmluZ01hcCA9IHtcbiAgICAnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG4gICAgJ2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG4gICAgJ2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG4gICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgaXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuICAgICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgci5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldChkYXRhW2FjdGlvbl0sIHRydWUpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICh7Y3VycmVudFRhYn0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi99XG5cdFx0XHRcdFx0PHA+e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdMZWF2ZSB1cyBhIHJldmlldycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi99XG5cdFx0XHRcdFx0PHA+e19fKCdBcmUgeW91IGFyZSBlbmpveWluZyBOZXZlPyBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgeW91ciBmZWVkYmFjay4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0NvbnRyaWJ1dGluZycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi99XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZW5kKG5ldmVEYXNoLmFwaSArICcvdG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCB1cGRhdGUgb3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcoISB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnc3VjY2VzcycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7dG9hc3QgJiZcblx0XHRcdFx0XHQ8VG9hc3QgZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fSB0eXBlPXt0b2FzdFR5cGV9Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hc2lkZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVGFic0NvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0YWItY29udGVudCcsICdjb2x1bW5zJywgY3VycmVudFRhYiBdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7dGFic1tjdXJyZW50VGFiXS5yZW5kZXIoc2V0VGFiKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNDb250ZW50O1xuIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBUb2FzdCA9ICh7bWVzc2FnZSwgZGlzbWlzcywgdGltZSwgdHlwZSA9ICdpbmZvJ30pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkaXNtaXNzKCcnKTtcblx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH0sIHRpbWUgfHwgMjAwMCk7XG5cdH0pO1xuXHRjb25zdCBpY29uTWFwID0ge1xuXHRcdCdpbmZvJzogJ2luZm8nLFxuXHRcdCdlcnJvcic6ICdubycsXG5cdFx0J3N1Y2Nlc3MnOiAneWVzJyxcblx0XHQnd2FybmluZyc6ICd3YXJuaW5nJ1xuXHR9O1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICd0b2FzdCcsICdjb21wb25lbnRzLWFuaW1hdGVfX2FwcGVhcicsICdpcy1mcm9tLW1pZGRsZScsIHR5cGUgXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PERhc2hpY29uIGljb249e2ljb25NYXBbdHlwZV19Lz5cblx0XHRcdDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0O1xuIiwiY29uc3Qge3VzZVJlZiwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHVzZU91dHNpZGVDbGljayA9IChyZWYsIGNhbGxiYWNrKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG5cdFx0XHRpZiAocmVmLmN1cnJlbnQgJiYgISByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cdFx0fTtcblx0fSwgWyByZWYgXSk7XG59O1xuXG5jb25zdCBPbkNsaWNrT3V0c2lkZSA9ICh7Y2hpbGRyZW4sIGFjdGlvbn0pID0+IHtcblx0Y29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcblx0dXNlT3V0c2lkZUNsaWNrKHdyYXBwZXJSZWYsIGFjdGlvbik7XG5cblx0cmV0dXJuIDxkaXYgcmVmPXt3cmFwcGVyUmVmfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT25DbGlja091dHNpZGU7XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQ29tcG9uZW50cy9BcHAnO1xuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcblxucmVnaXN0ZXJTdG9yZSgnbmV2ZS1kYXNoYm9hcmQnLCB7XG5cdHJlZHVjZXIsXG5cdGFjdGlvbnMsXG5cdHNlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdHNldFNldHRpbmdzKG9iamVjdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NFVFRJTkdTJyxcblx0XHRcdHBheWxvYWQ6IHtvYmplY3R9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdUT0dHTEVfTU9EVUxFJyxcblx0XHRcdHBheWxvYWQ6IHtzbHVnLCB2YWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VMaWNlbnNlVGllcih0aWVyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfTElDRU5TRV9USUVSJyxcblx0XHRcdHBheWxvYWQ6IHt0aWVyfVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2V0dGluZ3M6IHt9LFxuXHR0aWVyOiBuZXZlRGFzaC5wcm8gPyBuZXZlRGFzaC5saWNlbnNlLnRpZXIgOiAwXG59O1xuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfU0VUVElOR1MnOlxuXHRcdFx0Y29uc3Qge29iamVjdH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczogb2JqZWN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge3NsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0Wydudl9wcm9fJyArIHNsdWcgKyAnX3N0YXR1cyddOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9MSUNFTlNFX1RJRVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRpZXI6IGFjdGlvbi5wYXlsb2FkLnRpZXJcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0TW9kdWxlU3RhdHVzOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWcgKyAnX3N0YXR1cyddLFxuXHRnZXRMaWNlbnNlVGllcjogKHN0YXRlKSA9PiBzdGF0ZS50aWVyXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgU3RhcnRlclNpdGVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydCc7XG5pbXBvcnQgUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9Qcm8nO1xuaW1wb3J0IFBsdWdpbnMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMnO1xuaW1wb3J0IEhlbHAgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0hlbHAnO1xuaW1wb3J0IENoYW5nZWxvZyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nJztcbmltcG9ydCBGcmVlUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvJztcblxuY29uc3QgZ2V0VXJsUGFyYW0gPSAocGFyYW0pID0+IHtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuXHRyZXR1cm4gdXJsUGFyYW1zLmdldChwYXJhbSk7XG59O1xuXG5jb25zdCBhZGRVcmxIYXNoID0gKGhhc2gpID0+IHtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xufTtcblxuY29uc3QgZ2V0VGFiSGFzaCA9ICgpID0+IHtcblx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdGlmICghIE9iamVjdC5rZXlzKHRhYnMpLmluY2x1ZGVzKGhhc2gpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IHRhYnMgPSB7XG5cdCdzdGFydCc6IHtsYWJlbDogJ0dldHRpbmcgU3RhcnRlZCcsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0IHNldFRhYj17c2V0VGFifS8+fSxcblx0J3BsdWdpbnMnOiB7bGFiZWw6ICdVc2VmdWwgUGx1Z2lucycsIHJlbmRlcjogKCkgPT4gPFBsdWdpbnMvPn0sXG5cdCdoZWxwJzoge2xhYmVsOiAnSGVscCAmIGRvY3MnLCByZW5kZXI6IChzZXRUYWIpID0+IDxIZWxwIHNldFRhYj17c2V0VGFifS8+fSxcblx0J2NoYW5nZWxvZyc6IHtsYWJlbDogJ0NoYW5nZWxvZycsIHJlbmRlcjogKCkgPT4gPENoYW5nZWxvZy8+fSxcblx0J3N0YXJ0ZXItc2l0ZXMnOiB7bGFiZWw6ICdTdGFydGVyIFNpdGVzJywgcmVuZGVyOiAoKSA9PiA8U3RhcnRlclNpdGVzLz59LFxuXHQnZnJlZS1wcm8nOiB7bGFiZWw6ICdGcmVlIHZzIFBybycsIHJlbmRlcjogKCkgPT4gPEZyZWVQcm8vPn1cbn07XG5cbmlmIChuZXZlRGFzaC5wcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6ICdOZXZlIFBybycsIHJlbmRlcjogKCkgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuXG5leHBvcnQge1xuXHRnZXRVcmxQYXJhbSxcblx0YWRkVXJsSGFzaCxcblx0Z2V0VGFiSGFzaCxcblx0dGFic1xufTtcbiIsImV4cG9ydCBjb25zdCBjaGFuZ2VPcHRpb24gPSAob3B0aW9uLCB2YWx1ZSkgPT4ge1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0W29wdGlvbl06IHZhbHVlXG5cdH0pO1xuXG5cdG1vZGVsLnNhdmUoKS50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2Vbb3B0aW9uXSk7XG5cdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0Ly8gW29wdGlvbl06IHJlc3BvbnNlW29wdGlvbl0sXG5cdFx0XHQvLyBpc0FQSVNhdmluZzogZmFsc2Vcblx0XHQvLyB9KTtcblx0fSk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzZW5kID0gKHJvdXRlLCBkYXRhLCBzaW1wbGUgPSBmYWxzZSkgPT4ge1xuXHRyZXR1cm4gcmVxdWVzdERhdGEocm91dGUsIHNpbXBsZSwgZGF0YSApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IChyb3V0ZSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIHt9LCAnR0VUJyk7XG59O1xuXG5jb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jIChyb3V0ZSwgc2ltcGxlID0gZmFsc2UsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ1BPU1QnKSA9PiB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQneC13cC1ub25jZSc6IG5ldmVEYXNoLm5vbmNlXG5cdFx0fVxuXHR9O1xuXG5cdGlmICgnUE9TVCcgPT09IG1ldGhvZCkge1xuXHRcdG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0cmV0dXJuIGF3YWl0IGZldGNoKHJvdXRlLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdHJldHVybiBzaW1wbGUgPyByZXNwb25zZSA6IHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==