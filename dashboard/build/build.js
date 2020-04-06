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
              upsells = _r$data.upsells;
          setSites(remote ? remote : null);
          setUpsells(upsells ? upsells : null);
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

var EditorSelector = function EditorSelector(_ref) {
  var onChange = _ref.onChange,
      selected = _ref.selected;
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
    src: neveDash.assets + 'editor-icons/' + map[selected].icon,
    alt: __('Builder Logo', 'neve')
  }), wp.element.createElement("span", null, map[selected].niceName), wp.element.createElement(Dashicon, {
    size: 14,
    icon: open ? 'arrow-up-alt2' : 'arrow-down-alt2'
  })), open && wp.element.createElement("div", {
    className: "options"
  }, wp.element.createElement("ul", null, Object.keys(map).map(function (key) {
    return wp.element.createElement("li", null, wp.element.createElement("a", {
      onClick: function onClick() {
        onChange(key);
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
    type: "search",
    placeholder: __('Search for a starter site', 'neve') + '...'
  }), wp.element.createElement("img", {
    src: neveDash.assets + '/search.svg',
    alt: __('Search Icon')
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorSelector);

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
  return wp.element.createElement("h1", null, "Loading...");
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useState = wp.element.useState;
var __ = wp.i18n.__;

var Onboarding = function Onboarding(_ref) {
  var sites = _ref.sites,
      upsells = _ref.upsells;

  var _useState = useState('elementor'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedEditor = _useState2[0],
      selectEditor = _useState2[1];

  function renderSites() {
    if (!sites) {
      return null;
    }

    return Object.keys(sites[selectedEditor]).map(function (slug) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        slug: slug,
        data: sites[selectedEditor][slug]
      });
    });
  }

  return wp.element.createElement("div", {
    className: "ob"
  }, wp.element.createElement("div", {
    className: "ob-head"
  }, wp.element.createElement("h2", null, __('Ready to use pre-built websites with 1-click installation', 'neve')), wp.element.createElement("p", null, __('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve'))), wp.element.createElement("div", {
    className: "ob-body"
  }, wp.element.createElement(_EditorSelector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    selected: selectedEditor,
    onChange: function onChange(editor) {
      selectEditor(editor);
    }
  }), wp.element.createElement("div", {
    className: "ob-sites"
  }, renderSites())));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites,
      getUpsells = _select.getUpsells;

  return {
    sites: getSites(),
    upsells: getUpsells()
  };
}))(Onboarding));

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
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var compose = wp.compose.compose;

var StarterSiteCard = function StarterSiteCard(_ref) {
  var slug = _ref.slug,
      data = _ref.data;
  return wp.element.createElement("div", {
    className: "card starter-site-card"
  }, wp.element.createElement("div", {
    className: "top"
  }, wp.element.createElement("div", {
    className: "fav"
  }, wp.element.createElement(Button, {
    icon: "star"
  })), wp.element.createElement("div", {
    className: "actions"
  }, wp.element.createElement(Button, null, __('Preview', 'neve')), wp.element.createElement(Button, null, __('Import', 'neve'))), data.screenshot && wp.element.createElement("div", {
    className: "image"
  }, wp.element.createElement("img", {
    src: data.screenshot,
    alt: data.title
  }))), wp.element.createElement("div", {
    className: "bottom"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StarterSiteCard);

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
  upsells: null
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
        sites: upsells
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVByby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGljZW5zZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvRWRpdG9yU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1N0YXJ0ZXJTaXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsImRhdGEiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY29tcG9zZSIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwiQXBwIiwic2V0U2V0dGluZ3MiLCJ0b2FzdCIsImN1cnJlbnRUYWIiLCJzZXRUYWIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldHRpbmdzIiwiYXBpIiwibG9hZFByb21pc2UiLCJ0aGVuIiwibW9kZWxzIiwiU2V0dGluZ3MiLCJmZXRjaCIsInIiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiQ2FyZCIsImljb24iLCJpY29uQWx0IiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWVzIiwiX18iLCJpMThuIiwiQ2hhbmdlbG9nIiwibmV2ZURhc2giLCJjaGFuZ2Vsb2ciLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJhc3NldHMiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaWQiLCJTdGFydCIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJzaXRlcyIsInNldFNpdGVzIiwic2V0VXBzZWxscyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXQiLCJvbmJvYXJkaW5nIiwicm9vdCIsInN1Y2Nlc3MiLCJyZW1vdGUiLCJ1cHNlbGxzIiwiZ2V0U2l0ZXMiLCJ1c2VSZWYiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJmb3JjZVRvb2xUaXAiLCJ0b2dnbGVGb3JjZVRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiZ2V0VGFiSGFzaCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsImNoYW5nZVRpZXIiLCJsaWNlbnNlIiwicHJvQXBpIiwidmFsaWQiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzZXRWYWxpZCIsImV4cGlyYXRpb24iLCJzZXRFeHBpcmF0aW9uIiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0aWVyIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJjaGFuZ2VMaWNlbnNlVGllciIsIm5ld1RpZXIiLCJMb2FkaW5nIiwiQXJyYXkiLCJmcm9tIiwibm90aWZpY2F0aW9ucyIsIlRvZ2dsZUNvbnRyb2wiLCJNb2R1bGVDYXJkIiwiY2hhbmdlTW9kdWxlU3RhdHVzIiwiZ2V0TW9kdWxlU3RhdHVzIiwibmljZW5hbWUiLCJhdmFpbGFiaWxpdHlMZXZlbCIsIm9wdGlvbnMiLCJvcmRlciIsImRvY3VtZW50YXRpb24iLCJyZXF1aXJlZF9hY3Rpb25zIiwidXBncmFkZUxpbmtzIiwicmVuZGVyT3B0aW9uc0FjY29yZGlvbnMiLCJncm91cCIsIm9wdGlvblNsdWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VPcHRpb24iLCJ1cmwiLCJnZXRMaWNlbnNlVGllciIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsIkVkaXRvclNlbGVjdG9yIiwib25DaGFuZ2UiLCJzZWxlY3RlZCIsIm5pY2VOYW1lIiwiT25ib2FyZGluZyIsInNlbGVjdGVkRWRpdG9yIiwic2VsZWN0RWRpdG9yIiwicmVuZGVyU2l0ZXMiLCJlZGl0b3IiLCJnZXRVcHNlbGxzIiwiU3RhcnRlclNpdGVDYXJkIiwic2NyZWVuc2hvdCIsInBheWxvYWQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsIklucHV0Rm9ybSIsImdldE9wdGlvbiIsInNldFZhbHVlIiwiY2hhbmdlU2V0dGluZyIsImNoYW5nZU1vZHVsZU9wdGlvbiIsIlRvZ2dsZSIsImJhbm5lciIsIm5hbWUiLCJhdXRob3IiLCJzZXRBY3Rpb24iLCJzdHJpbmdNYXAiLCJwcm9ncmVzcyIsImluc3RhbGxQbHVnaW4iLCJvayIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZXJyIiwiU2lkZWJhciIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwidXNlT3V0c2lkZUNsaWNrIiwicmVmIiwiY2FsbGJhY2siLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJPbkNsaWNrT3V0c2lkZSIsIndyYXBwZXJSZWYiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJvbmJvYXJkaW5nUmVkdWNlciIsIm9uYm9hcmRpbmdBY3Rpb25zIiwib25ib2FyZGluZ1NlbGVjdG9ycyIsIlJvb3QiLCJnZXRFbGVtZW50QnlJZCIsIm1vZHVsZVNsdWciLCJvcHRpb25WYWx1ZSIsIm9wdGlvblN0YXR1cyIsImdldFVybFBhcmFtIiwicGFyYW0iLCJxdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic3Vic3RyaW5nIiwiaXNWYWxpZCIsIm9wdGlvbiIsIm9wdGlvbnNBcnJheSIsIm1vZHVsZSIsIm1vZGVsIiwic2F2ZSIsInJvdXRlIiwic2ltcGxlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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RyxpQkFBT0YsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFjQyxrQkFBZCwyREFBdUIsS0FBdkI7QUFBOEIzUSxnQkFBOUIsMkRBQXFDLEVBQXJDO0FBQXlDNlEsa0JBQXpDLDJEQUFrRCxNQUFsRDtBQUNiNUgsbUJBRGEsR0FDSDtBQUNmNEgsb0JBQU0sRUFBRUEsTUFETztBQUVmQyxxQkFBTyxFQUFFO0FBQ1IsMEJBQVUsa0JBREY7QUFFUixnQ0FBZ0Isa0JBRlI7QUFHUiw4QkFBYzNPLFFBQVEsQ0FBQzRPO0FBSGY7QUFGTSxhQURHOztBQVVuQixnQkFBSSxXQUFXRixNQUFmLEVBQXVCO0FBQ3RCNUgscUJBQU8sQ0FBQytILElBQVIsR0FBZUMsSUFBSSxDQUFDQyxTQUFMLENBQWVsUixJQUFmLENBQWY7QUFDQTs7QUFaa0I7QUFBQSxtQkFjTm1CLEtBQUssQ0FBQ3VQLEtBQUQsRUFBUXpILE9BQVIsQ0FBTCxDQUFzQmpJLElBQXRCLENBQTJCLFVBQUM4RyxRQUFELEVBQWM7QUFDckQscUJBQU82SSxNQUFNLEdBQUc3SSxRQUFILEdBQWNBLFFBQVEsQ0FBQ3FKLElBQVQsRUFBM0I7QUFDQSxhQUZZLENBZE07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYUCxXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCLEMiLCJmaWxlIjoiLi9idWlsZC9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQWNjb3JkaW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtpc09wZW4sIHRpdGxlLCBjaGlsZHJlbn0gPSBwcm9wcztcblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShpc09wZW4pO1xuXHRjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbICdhY2NvcmRpb24nLCB7J29wZW4nOiBvcGVuLCAnY2xvc2VkJzogISBvcGVuIH0gXSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRhcmlhLWV4cGFuZGVkPXtvcGVufVxuXHRcdFx0XHRjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0T3BlbighIG9wZW4pfVxuXHRcdFx0PlxuXHRcdFx0XHRcdHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10aXRsZVwiPnt0aXRsZX08L2Rpdj59XG5cdFx0XHRcdFx0PERhc2hpY29uXG5cdFx0XHRcdFx0XHRpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiIHN0eWxlPXt7aGVpZ2h0OiBvcGVuID8gJ2F1dG8nIDogJzBweCd9fT5cblx0XHRcdFx0e2NoaWxkcmVuICYmIGNoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9UYWJzQ29udGVudCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBTbmFja2JhciBmcm9tICcuL1NuYWNrYmFyJztcbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCB7Z2V0LCBzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZSwgRnJhZ21lbnQsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBcHAgPSAoe3NldFNldHRpbmdzLCB0b2FzdCwgY3VycmVudFRhYiwgc2V0VGFifSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR3cC5hcGkubG9hZFByb21pc2UudGhlbigoKSA9PiB7XG5cdFx0XHRzZXR0aW5ncyA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKCk7XG5cdFx0XHRzZXR0aW5ncy5mZXRjaCgpLnRoZW4ociA9PiB7XG5cdFx0XHRcdHNldFNldHRpbmdzKHIpO1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cdGlmIChsb2FkaW5nKSB7XG5cdFx0cmV0dXJuIDxMb2FkaW5nLz47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxIZWFkZXIgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8Tm90aWZpY2F0aW9ucy8+fVxuXHRcdFx0XHRcdDxUYWJzQ29udGVudCBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eydzdGFydGVyLXNpdGVzJyAhPT0gY3VycmVudFRhYiAmJiA8U2lkZWJhciBjdXJyZW50VGFiPXtjdXJyZW50VGFifS8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7dG9hc3QgJiYgPFNuYWNrYmFyLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2V0dGluZ3MsIHNldFRhYn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2V0dGluZ3M6IChvYmplY3QpID0+IHNldFNldHRpbmdzKG9iamVjdCksXG5cdFx0XHRzZXRUYWI6ICh0YWIpID0+IHNldFRhYih0YWIpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdCwgZ2V0VGFifSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6IGdldFRvYXN0KCksXG5cdFx0XHRjdXJyZW50VGFiOiBnZXRUYWIoKVxuXHRcdH07XG5cdH0pXG4pKEFwcCk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpY29uLCBpY29uQWx0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBjbGFzc05hbWVzfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCBjbGFzc05hbWVzIF0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAge2ljb24gJiYgPGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtpY29ufSBhbHQ9e2ljb25BbHQgfHwgJ2ljb24nfS8+fVxuICAgICAgICB7dGl0bGUgJiYgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDM+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vQWNjb3JkaW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2hhbmdlbG9nID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2Vsb2d9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWxvZy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHtkYXRlLCB2ZXJzaW9uLCB0d2Vha3MsIGZpeGVzLCBmZWF0dXJlc30gPSBlbnRyeTtcblx0XHRcdFx0XHRjb25zdCB0aXRsZSA9XG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj52e3ZlcnNpb259PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cImRhdGVcIj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PjtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8QWNjb3JkaW9uIGlzT3Blbj17MCA9PT0gaW5kZXh9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdFx0XHRcdHtmZWF0dXJlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgc3VjY2Vzc1wiPntfXygnRmVhdHVyZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gPGxpPntmZWF0dXJlfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7Zml4ZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidWdzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgZXJyb3JcIj57X18oJ0J1ZyBGaXhlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zml4ZXMubWFwKChmaXgpID0+IDxsaT57Zml4fTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7dHdlYWtzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdlYWtzIGNoYW5nZWxvZy1jYXRlZ29yeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgaW5mb1wiPntfXygnVHdlYWtzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt0d2Vha3MubWFwKCh0d2VhaykgPT4gPGxpPnt0d2Vha308L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2Vsb2c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBGZWF0dXJlUm93IGZyb20gJy4uL0ZlYXR1cmVSb3cnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtmZWF0dXJlRGF0YX0gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNhcmQgdGFibGVcIj5cblx0XHRcdFx0PHRib2R5IGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRcIj5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwibGFyZ2VcIi8+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZScsICduZXZlJyl9PC90aD5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlIFBybycsICduZXZlJyl9PC90aD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0e2ZlYXR1cmVEYXRhLm1hcCgoaXRlbSkgPT4gPEZlYXR1cmVSb3cgaXRlbT17aXRlbX0vPil9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdXBzZWxsXCI+XG5cdFx0XHRcdDxwPntfXygnR2V0IGFjY2VzcyB0byBhbGwgUHJvIGZlYXR1cmVzIGFuZCBwb3dlci11cCB5b3VyIHdlYnNpdGUnLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGhyZWY9e25ldmVEYXNoLnVwZ3JhZGVVUkx9XG5cdFx0XHRcdFx0aXNQcmltYXJ5PlxuXHRcdFx0XHRcdHtfXygnR2V0IE5ldmUgUHJvIE5vdycsICduZXZlJyl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBIZWxwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYnVveS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dlIHdhbnQgdG8gbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdXNpbmcgTmV2ZSwgYW5kIHRoYXQgaXMgd2h5IHdlIGhhdmUgZ2F0aGVyZWQgYWxsIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gaGVyZSBmb3IgeW91LiBXZSBob3BlIHlvdSB3aWxsIGVuam95IHVzaW5nIE5ldmUgYXMgbXVjaCBhcyB3ZSBlbmpveSBjcmVhdGluZyBncmVhdCBwcm9kdWN0cy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG4gICAgICAgICAgICBocmVmPSdodHRwczovL3dvcmRwcmVzcy5vcmcvc3VwcG9ydC90aGVtZS9uZXZlLydcbiAgICAgICAgICA+e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2xpc3Quc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXYW50IHRvIGdldCB0aGUgZ2lzdCBvbiB0aGUgbGF0ZXN0IHRoZW1lIGNoYW5nZXM/IEp1c3QgY29uc3VsdCBvdXIgY2hhbmdlbG9nIGJlbG93IHRvIGdldCBhIHRhc3RlIG9mIHRoZSByZWNlbnQgZml4ZXMgYW5kIGZlYXR1cmVzIGltcGxlbWVudGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignY2hhbmdlbG9nJyl9XG4gICAgICAgICAgPntfXygnVmlldyBDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3RhY2hvbWV0ZXIuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1NwZWVkIHVwIHlvdXIgc2l0ZScsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHNpdHVhdGlvbiB3aGVyZSBldmVyeXRoaW5nIG9uIHlvdXIgc2l0ZSBpcyBydW5uaW5nIHZlcnkgc2xvd2x5LCB5b3UgbWlnaHQgY29uc2lkZXIgaGF2aW5nIGEgbG9vayBhdCB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB3aGVyZSB5b3Ugd2lsbCBmaW5kIHRoZSBtb3N0IGNvbW1vbiBpc3N1ZXMgY2F1c2luZyB0aGlzIGFuZCBwb3NzaWJsZSBzb2x1dGlvbnMgZm9yIGVhY2ggb2YgdGhlIGlzc3Vlcy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnRG9jdW1lbnRhdGlvbicsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS85NDYtbmV2ZS1kb2NcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY2xvbmUuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NyZWF0ZSBhIGNoaWxkIHRoZW1lJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSB3YW50IHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgdGhlbWVcXCdzIGZpbGVzLCB0aG9zZSBjaGFuZ2VzIGFyZSBsaWtlbHkgdG8gYmUgb3ZlcndyaXR0ZW4gd2hlbiB5b3UgbmV4dCB1cGRhdGUgdGhlIHRoZW1lLiBJbiBvcmRlciB0byBwcmV2ZW50IHRoYXQgZnJvbSBoYXBwZW5pbmcsIHlvdSBuZWVkIHRvIGNyZWF0ZSBhIGNoaWxkIHRoZW1lLiBGb3IgdGhpcywgcGxlYXNlIGZvbGxvdyB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzE0LWhvdy10by1jcmVhdGUtYS1jaGlsZC10aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdhcnJvd3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0J1aWxkIGEgbGFuZGluZyBwYWdlIHdpdGggYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlcicsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJbiB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB5b3Ugd2lsbCBmaW5kIGFuIGVhc3kgd2F5IHRvIGJ1aWxkIGEgZ3JlYXQgbG9va2luZyBsYW5kaW5nIHBhZ2UgdXNpbmcgYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlciBwbHVnaW4uJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8yMTktaG93LXRvLWJ1aWxkLWEtbGFuZGluZy1wYWdlLXdpdGgtYS1kcmFnLWFuZC1kcm9wLWNvbnRlbnQtYnVpbGRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBQbHVnaW5DYXJkIGZyb20gJy4uL1BsdWdpbkNhcmQnO1xuXG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7cGx1Z2luc30gPSBuZXZlRGFzaDtcblxuICBpZiAoICEgcGx1Z2lucyApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyggcGx1Z2lucyApLm1hcCggKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBsdWdpbkNhcmQga2V5PXtzbHVnfSBzbHVnPXtzbHVnfSBkYXRhPXtwbHVnaW5zW3NsdWddfS8+O1xuICAgICAgICB9IClcbiAgICAgIH1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTW9kdWxlQ2FyZCBmcm9tICcuLi9Nb2R1bGVDYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHttb2R1bGVzfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHR7XG5cdFx0XHRcdE9iamVjdC5rZXlzKG1vZHVsZXMpLm1hcCgoaWQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PE1vZHVsZUNhcmQgc2x1Zz17aWR9Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBTdGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3NxdWFyZXMuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ1N0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmV2ZSBub3cgY29tZXMgd2l0aCBhIHNpdGVzIGxpYnJhcnkgd2l0aCB2YXJpb3VzIGRlc2lnbnMgdG8gcGljayBmcm9tLiBWaXNpdCBvdXIgY29sbGVjdGlvbiBvZiBkZW1vcyB0aGF0IGFyZSBjb25zdGFudGx5IGJlaW5nIGFkZGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc1ByaW1hcnlcblx0XHRcdFx0XHRcdGlzTGFyZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGFiKCdzdGFydGVyLXNpdGVzJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID57X18oJ0dvIHRvIFN0YXJ0ZXIgU2l0ZXMnLCAnbmV2ZScpfTwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0dldHRpbmcgU3RhcnRlZD8gQ2hlY2sgaGVscCBhbmQgZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZWVkIG1vcmUgZGV0YWlscz8gUGxlYXNlIGNoZWNrIG91ciBmdWxsIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIGhvdyB0byB1c2UgTmV2ZS4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2hlbHAnKX1cbiAgICAgICAgICA+e19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJjdXN0b21pemVyLXF1aWNrLWxpbmtzXCJcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnY29tcGFzcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3VzdG9taXplciBxdWljayBsaW5rcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcbiAgY29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG4gIGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAge1xuICAgICAgICBwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2dldH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL0xvYWRpbmcnO1xuaW1wb3J0IE9uYm9hcmRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9NYWluJztcblxuY29uc3Qge3VzZVN0YXRlLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IFN0YXJ0ZXJTaXRlcyA9ICh7c2l0ZXMsIHNldFNpdGVzLCBzZXRVcHNlbGxzfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChzaXRlcykge1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldChuZXZlRGFzaC5vbmJvYXJkaW5nLnJvb3QgKyAnL2luaXRpYWxpemVfc2l0ZXNfbGlicmFyeScpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdGlmICghIHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdHNldEVycm9yKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IHtyZW1vdGUsIHVwc2VsbHN9ID0gci5kYXRhO1xuXHRcdFx0XHRcdHNldFNpdGVzKHJlbW90ZSA/IHJlbW90ZSA6IG51bGwpO1xuXHRcdFx0XHRcdHNldFVwc2VsbHModXBzZWxscyA/IHVwc2VsbHMgOiBudWxsKTtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0aWYgKGVycm9yKSB7XG5cdFx0cmV0dXJuIDxoMT5FcnJvci48L2gxPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0bG9hZGluZyA/IDxMb2FkaW5nLz4gOiA8T25ib2FyZGluZy8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNpdGVzLCBzZXRVcHNlbGxzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2l0ZXM6IChzaXRlcykgPT4gc2V0U2l0ZXMoc2l0ZXMpLFxuXHRcdFx0c2V0VXBzZWxsczogKHVwc2VsbHMpID0+IHNldFVwc2VsbHModXBzZWxscylcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFNpdGVzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVzOiBnZXRTaXRlcygpXG5cdFx0fTtcblx0fSlcbikoU3RhcnRlclNpdGVzKTtcbiIsImNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgT25DbGlja091dHNpZGUgZnJvbSAnLi9VdGlscy9PbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZVJvdyA9ICh7aXRlbX0pID0+IHtcblx0Y29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbiwgaW5MaXRlfSA9IGl0ZW07XG5cdGNvbnN0IFsgdG9vbHRpcCwgdG9nZ2xlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIGZvcmNlVG9vbFRpcCwgdG9nZ2xlRm9yY2VUb29sdGlwIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8dHIgY2xhc3NOYW1lPVwiZmVhdHVyZS1yb3dcIj5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJsYXJnZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXQtd3JhcFwiPlxuXHRcdFx0XHRcdDxoND57dGl0bGV9PC9oND5cblx0XHRcdFx0XHQ8T25DbGlja091dHNpZGUgYWN0aW9uPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2dnbGVGb3JjZVRvb2x0aXAoZmFsc2UpO1xuXHRcdFx0XHRcdH19PiA8YVxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlRm9yY2VUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImluZm9cIi8+XG5cdFx0XHRcdFx0XHR7KHRvb2x0aXAgfHwgZm9yY2VUb29sVGlwKSAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2luZGljYXRvcicsIHsnZXJyb3InOiAhIGluTGl0ZSwgJ3N1Y2Nlc3MnOiBpbkxpdGV9IF0pfT5cblx0XHRcdFx0PERhc2hpY29uIHNpemU9ezMwfSBpY29uPXtpbkxpdGUgPyAneWVzJyA6ICduby1hbHQnfS8+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cImluZGljYXRvciBzdWNjZXNzXCI+XG5cdFx0XHRcdDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj1cInllc1wiLz5cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7YWRkVXJsSGFzaCwgZ2V0VGFiSGFzaCwgdGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgPT09IGhhc2gpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cHJvcHMuc2V0VGFiKGhhc2gpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0e3JlbmRlckhlYWQoKX1cblx0XHRcdFx0e3JlbmRlck5hdmlnYXRpb24ocHJvcHMpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntuZXZlRGFzaC5zdHJpbmdzLmhlYWRlcn08L2gxPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPntuZXZlRGFzaC52ZXJzaW9ufTwvc3Bhbj5cblx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL2xvZ28uc3ZnJ30gYWx0PXtfXygnTmV2ZSBUaGVtZSBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHRhYnMpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT48YVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjdXJyZW50VGFiID09PSBpdGVtID8gJ2FjdGl2ZScgOiAnJ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0VGFiKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRhZGRVcmxIYXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+e3RhYnNbaXRlbV0ubGFiZWx9XG5cdFx0XHRcdFx0PC9hPjwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IExpY2Vuc2VDYXJkID0gKHtpc1Zpc2libGUsIGNoYW5nZVRpZXJ9KSA9PiB7XG5cdGNvbnN0IHtsaWNlbnNlLCBwcm9BcGl9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IFsga2V5LCBzZXRLZXkgXSA9IHVzZVN0YXRlKGxpY2Vuc2UgJiYgJ3ZhbGlkJyA9PT0gbGljZW5zZS52YWxpZCA/IGxpY2Vuc2Uua2V5IHx8ICcnIDogJycpO1xuXHRjb25zdCBbIHN0YXR1cywgc2V0U3RhdHVzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgdmFsaWQsIHNldFZhbGlkIF0gPSB1c2VTdGF0ZShsaWNlbnNlLnZhbGlkIHx8ICdpbnZhbGlkJyk7XG5cdGNvbnN0IFsgZXhwaXJhdGlvbiwgc2V0RXhwaXJhdGlvbiBdID0gdXNlU3RhdGUobGljZW5zZS5leHBpcmF0aW9uIHx8ICcnKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblxuXHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHRvZ2dsZUxpY2Vuc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9EbyA9ICd2YWxpZCcgPT09IHZhbGlkID8gJ2RlYWN0aXZhdGUnIDogJ2FjdGl2YXRlJztcblx0XHRzZXRTdGF0dXMoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICdhY3RpdmF0aW5nJyA6ICdkZWFjdGl2YXRpbmcnKTtcblx0XHRzZW5kKHByb0FwaSArICcvdG9nZ2xlX2xpY2Vuc2UnLCB7a2V5LCBhY3Rpb246IHRvRG99KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0c2V0VG9hc3RUeXBlKHJlc3BvbnNlLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcblx0XHRcdHNldEtleSgnYWN0aXZhdGUnID09PSB0b0RvID8ga2V5IDogJycpO1xuXHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRzZXRFeHBpcmF0aW9uKHJlc3BvbnNlLmV4cGlyYXRpb24pO1xuXHRcdFx0c2V0VmFsaWQocmVzcG9uc2Uuc3VjY2VzcyAmJiAnYWN0aXZhdGUnID09PSB0b0RvID8gJ3ZhbGlkJyA6ICdub3RfYWN0aXZlJyk7XG5cdFx0XHRzZXRTdGF0dXMoZmFsc2UpO1xuXHRcdFx0bmV2ZURhc2gubGljZW5zZS5leHBpcmF0aW9uID0gcmVzcG9uc2UuZXhwaXJhdGlvbjtcblx0XHRcdGNoYW5nZVRpZXIocmVzcG9uc2UudGllciB8fCAxKTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmQgbGljZW5zZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0PGg0PntfXygnTmV2ZSBQcm8gQWRkb24gbGljZW5zZScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0PHA+RW50ZXIgeW91ciBsaWNlbnNlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vc3RvcmUudGhlbWVpc2xlLmNvbVwiPlRoZW1lSXNsZTwvYT4gcHVyY2hhc2UgaGlzdG9yeSBpbiBvcmRlciB0byBnZXRcblx0XHRcdFx0XHRwbHVnaW4gdXBkYXRlczwvcD5cblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibGljZW5zZS1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZUxpY2Vuc2UoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEtleShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHQndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0JyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicgKyBrZXkuc2xpY2UoLTUpIDpcblx0XHRcdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0ZScsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGluZycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGluZycsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0b2FzdCAmJiA8VG9hc3QgdHlwZT17dG9hc3RUeXBlfSBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9Lz59XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZXMoWyAnc3RhdHVzLWljb24nLCAndmFsaWQnID09PSB2YWxpZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicgXSlcblx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ZXhwaXJhdGlvbiAmJlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4tPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGV4cGlyYXRpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2VMaWNlbnNlVGllcn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VUaWVyOiAobmV3VGllcikgPT4ge1xuXHRcdFx0Y2hhbmdlTGljZW5zZVRpZXIobmV3VGllcik7XG5cdFx0fVxuXHR9O1xufSkoTGljZW5zZUNhcmQpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2stZGFzaFwiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb24gbG9hZGluZ1wiPnYyLjYuMjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBsb2dvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKEFycmF5KDYpKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGk+PGEgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz48L2xpPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmV2ZURhc2gubm90aWZpY2F0aW9ucyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBsb2FkaW5nIHBsYWNlaG9sZGVyXCIvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2x1bW5zIHN0YXJ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9taXplci1xdWljay1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYXNpZGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tICcuL09wdGlvbnMvSW5wdXRGb3JtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9PcHRpb25zL1RvZ2dsZSc7XG5pbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtCdXR0b24sIFRvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHNldFRvYXN0LCBjaGFuZ2VNb2R1bGVTdGF0dXMsIGdldE1vZHVsZVN0YXR1cywgdGllcn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGxpbmtzLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0ZnVuY3Rpb24gcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChvcHRpb25TbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtsYWJlbCwgdHlwZSwgcGxhY2Vob2xkZXJ9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RleHQnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRGb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbW9kdWxlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e25pY2VuYW1lfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aWVyIDwgYXZhaWxhYmlsaXR5TGV2ZWwgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXt1cGdyYWRlTGlua3NbYXZhaWxhYmlsaXR5TGV2ZWxdfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dldE1vZHVsZVN0YXR1cyhzbHVnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCh2YWx1ZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBBY3RpdmF0ZWQnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIERlYWN0aXZhdGVkLicsICduZXZlJykpICsgYCAoJHtuaWNlbmFtZX0pYCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgYWN0aXZhdGUgbW9kdWxlLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtkb2N1bWVudGF0aW9uICYmXG5cdFx0XHRcdFx0PGEgaHJlZj17ZG9jdW1lbnRhdGlvbi51cmx9PntfXygnTGVhcm4gTW9yZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHR7bGlua3MgJiYgZ2V0TW9kdWxlU3RhdHVzKHNsdWcpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtsaW5rcy5tYXAoKGxpbmspID0+IDxCdXR0b24gaXNTZWNvbmRhcnkgaHJlZj17bGluay51cmx9PntsaW5rLmxhYmVsfTwvQnV0dG9uPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsoMCA8IG9wdGlvbnMubGVuZ3RoICYmIHRydWUgPT09IGdldE1vZHVsZVN0YXR1cyhzbHVnKSkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtb3B0aW9uc1wiPlxuXHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zQWNjb3JkaW9ucygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0TW9kdWxlU3RhdHVzLCBnZXRMaWNlbnNlVGllcn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE1vZHVsZVN0YXR1czogKHNsdWcpID0+IGdldE1vZHVsZVN0YXR1cyhzbHVnKSxcblx0XHRcdHRpZXI6IGdldExpY2Vuc2VUaWVyKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVTdGF0dXMsIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXM6IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShNb2R1bGVDYXJkKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBOb3RpZmljYXRpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7dGV4dCwgY3RhLCB0eXBlLCB1cGRhdGV9ID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZG9uZSwgc2V0RG9uZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcbiAgICBbXG4gICAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAgIHByb3BzLnNsdWcsXG4gICAgICB0eXBlID8gdHlwZSA6ICcnLFxuICAgICAge1xuICAgICAgICAnc3VjY2Vzcyc6IGRvbmUsXG4gICAgICAgICdoaWRkZW4nOiBkb25lXG4gICAgICB9XG4gICAgXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgeyEgZG9uZSA/IDxwPnt0ZXh0fTwvcD4gOiA8cD48RGFzaGljb24gaWNvbj1cInllc1wiLz57X18oJ0RvbmUhJywgJ25ldmUnKX08L3A+fVxuICAgICAgeyhjdGEgJiYgISBkb25lKSAmJlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2lzLWxvYWRpbmcnOiBpblByb2dyZXNzfSl9XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlRW50aXR5KHVwZGF0ZSwgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpblByb2dyZXNzID9cbiAgICAgICAgICA8c3Bhbj48RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz4ge19fKCdJbiBQcm9ncmVzcycsICduZXZlJykgKyAnLi4uJ30gPC9zcGFuPiA6XG4gICAgICAgICAgICBjdGFcbiAgICAgICAgfVxuICAgICAgPC9CdXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRW50aXR5ID0gKGFyZ3MsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbikgPT4ge1xuICBpZiAoISBhcmdzLnR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICgndGhlbWUnID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXRoZW1lJywge3NsdWc6IGFyZ3Muc2x1Z30pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3RoZW1lLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgncGx1Z2luJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1ZyB8fCAhIGFyZ3MucGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS1wbHVnaW4nLCB7c2x1ZzogYXJncy5zbHVnLCBwbHVnaW46IGFyZ3MucGF0aH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3BsdWdpbi11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gIGV4ZWN1dGVBY3Rpb24oKS50aGVuKCgpID0+IHtcbiAgICBzZXREb25lKHRydWUpO1xuICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghIG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoMSA+IG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBkYXRhPXtuZXZlRGFzaC5ub3RpZmljYXRpb25zW3NsdWddfSBzbHVnPXtzbHVnfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iLCJpbXBvcnQgT25DbGlja091dHNpZGUgZnJvbSAnLi4vVXRpbHMvT25DbGlja091dHNpZGUnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBFZGl0b3JTZWxlY3RvciA9ICh7b25DaGFuZ2UsIHNlbGVjdGVkfSkgPT4ge1xuXHRjb25zdCBtYXAgPSB7XG5cdFx0J2VsZW1lbnRvcic6IHtcblx0XHRcdGljb246ICdlbGVtZW50b3IucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRWxlbWVudG9yJylcblx0XHR9LFxuXHRcdCdicml6eSc6IHtcblx0XHRcdGljb246ICdicml6eS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCcml6eScpXG5cdFx0fSxcblx0XHQnYmVhdmVyIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnYmVhdmVyLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0JlYXZlciBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCd0aHJpdmUgYXJjaGl0ZWN0Jzoge1xuXHRcdFx0aWNvbjogJ3Rocml2ZS5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdUaHJpdmUgQXJjaGl0ZWN0Jylcblx0XHR9LFxuXHRcdCdkaXZpIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnZGl2aS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdEaXZpIEJ1aWxkZXInKVxuXHRcdH0sXG5cdFx0J2d1dGVuYmVyZyc6IHtcblx0XHRcdGljb246ICdndXRlbmJlcmcucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnR3V0ZW5iZXJnJylcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb3JtXCI+XG5cdFx0XHQ8T25DbGlja091dHNpZGUgYWN0aW9uPXsoKSA9PiB7XG5cdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItZHJvcGRvd25cIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldE9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0XCI+XG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yLWljb24nXG5cdFx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW3NlbGVjdGVkXS5pY29ufVxuXHRcdFx0XHRcdFx0XHRhbHQ9e19fKCdCdWlsZGVyIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bWFwW3NlbGVjdGVkXS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ30vPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHtvcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZShrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBba2V5XS5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU2VsZWN0b3I7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBFZGl0b3JTZWxlY3RvciBmcm9tICcuL0VkaXRvclNlbGVjdG9yJztcbmltcG9ydCBTdGFydGVyU2l0ZUNhcmQgZnJvbSAnLi9TdGFydGVyU2l0ZUNhcmQnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBPbmJvYXJkaW5nID0gKHtzaXRlcywgdXBzZWxsc30pID0+IHtcblx0Y29uc3QgWyBzZWxlY3RlZEVkaXRvciwgc2VsZWN0RWRpdG9yIF0gPSB1c2VTdGF0ZSgnZWxlbWVudG9yJyk7XG5cblx0ZnVuY3Rpb24gcmVuZGVyU2l0ZXMoKSB7XG5cblx0XHRpZiAoISBzaXRlcykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhzaXRlc1tzZWxlY3RlZEVkaXRvcl0pLm1hcCgoc2x1ZykgPT4ge1xuXHRcdFx0cmV0dXJuIDxTdGFydGVyU2l0ZUNhcmQgc2x1Zz17c2x1Z30gZGF0YT17c2l0ZXNbc2VsZWN0ZWRFZGl0b3JdW3NsdWddfS8+O1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWhlYWRcIj5cblx0XHRcdFx0PGgyPntfXygnUmVhZHkgdG8gdXNlIHByZS1idWlsdCB3ZWJzaXRlcyB3aXRoIDEtY2xpY2sgaW5zdGFsbGF0aW9uJywgJ25ldmUnKX08L2gyPlxuXHRcdFx0XHQ8cD57X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4gWW91IGp1c3QgbmVlZCB0byBjaG9vc2UgeW91ciBmYXZvcml0ZSwgYW5kIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmcgZWxzZS4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0b3JTZWxlY3RvciBzZWxlY3RlZD17c2VsZWN0ZWRFZGl0b3J9IG9uQ2hhbmdlPXsoZWRpdG9yKSA9PiB7XG5cdFx0XHRcdFx0c2VsZWN0RWRpdG9yKGVkaXRvcik7XG5cdFx0XHRcdH19Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXNpdGVzXCI+XG5cdFx0XHRcdFx0e3JlbmRlclNpdGVzKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRTaXRlcywgZ2V0VXBzZWxsc30gPSBzZWxlY3QoJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaXRlczogZ2V0U2l0ZXMoKSxcblx0XHRcdHVwc2VsbHM6IGdldFVwc2VsbHMoKVxuXHRcdH07XG5cdH0pXG4pKE9uYm9hcmRpbmcpO1xuIiwiY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgU3RhcnRlclNpdGVDYXJkID0gKHtzbHVnLCBkYXRhfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzdGFydGVyLXNpdGUtY2FyZFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmYXZcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIGljb249XCJzdGFyXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbj57X18oJ1ByZXZpZXcnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24+e19fKCdJbXBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0ZXJTaXRlQ2FyZDtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0c2V0U2l0ZXMoc2l0ZXMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TSVRFUycsXG5cdFx0XHRwYXlsb2FkOiB7c2l0ZXN9XG5cdFx0fTtcblx0fSxcblx0c2V0VXBzZWxscyh1cHNlbGxzKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdTRVRfVVBTRUxMUycsXG5cdFx0XHRwYXlsb2FkOiB7dXBzZWxsc31cblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2l0ZXM6IG51bGwsXG5cdHVwc2VsbHM6IG51bGxcbn07XG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1NJVEVTJzpcblx0XHRcdGNvbnN0IHtzaXRlc30gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzaXRlczogc2l0ZXNcblx0XHRcdH07XG5cdFx0Y2FzZSAnU0VUX1VQU0VMTFMnOlxuXHRcdFx0Y29uc3Qge3Vwc2VsbHN9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2l0ZXM6IHVwc2VsbHNcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0U2l0ZXM6IChzdGF0ZSkgPT4gc3RhdGUuc2l0ZXMsXG5cdGdldFVwc2VsbHM6IChzdGF0ZSkgPT4gc3RhdGUudXBzZWxsc1xufTtcbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IElucHV0Rm9ybSA9ICh7c2x1ZywgbGFiZWwsIHBsYWNlaG9sZGVyLCBnZXRPcHRpb24sIHNldFRvYXN0LCBjaGFuZ2VPcHRpb259KSA9PiB7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShnZXRPcHRpb24oc2x1ZykpO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0ZXh0Jz5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtcblx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKHNsdWcsIHZhbHVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KHRydWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3Qoci5tZXNzYWdlID8gci5tZXNzYWdlIDogZmFsc2UpO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0+XG5cdFx0XHRcdHtsYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj17c2x1Z30+e2xhYmVsfTwvbGFiZWw+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGlkPXtzbHVnfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e1xuXHRcdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bG9hZGluZyA/ICdpcy1sb2FkaW5nJyA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17bG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTYXZlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0aWNvbj17bG9hZGluZyA/ICd1cGRhdGUnIDogJ2VkaXRvci1icmVhayd9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoSW5wdXRGb3JtKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb24gYXMgY2hhbmdlU2V0dGluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVG9nZ2xlID0gKHtzbHVnLCBsYWJlbCwgZ2V0T3B0aW9uLCBjaGFuZ2VPcHRpb24sIHNldFRvYXN0fSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0b2dnbGUnPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2hlY2tlZD17Z2V0T3B0aW9uKHNsdWcpfVxuXHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdGNoYW5nZVNldHRpbmcoIHNsdWcsIHZhbHVlICkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCByLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUb2FzdCggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRPcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRPcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShUb2dnbGUpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcbiAgY29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0cmluZ01hcCA9IHtcbiAgICAnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG4gICAgJ2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG4gICAgJ2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG4gICAgICAgICAgaXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuICAgICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgci5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldChkYXRhW2FjdGlvbl0sIHRydWUpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICh7Y3VycmVudFRhYn0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQXJlIHlvdSBhcmUgZW5qb3lpbmcgTmV2ZT8gV2Ugd291bGQgbG92ZSB0byBoZWFyIHlvdXIgZmVlZGJhY2suJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZW5kKG5ldmVEYXNoLmFwaSArICcvdG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IHVwZGF0ZSBvcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyghIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0b2FzdCAmJlxuXHRcdFx0XHRcdDxUb2FzdCBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9IHR5cGU9e3RvYXN0VHlwZX0vPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImNvbnN0IHtTbmFja2Jhcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZUVmZmVjdCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IEdsb2JhbFNuYWNrYmFyID0gKHt0b2FzdCwgc2V0VG9hc3R9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRUb2FzdChudWxsKTtcblx0XHR9LCAzMDAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSB0b2FzdCgpO1xuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRvcGFjaXR5OiBudWxsID09PSBtZXNzYWdlID8gMCA6IDFcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxTbmFja2JhclxuXHRcdFx0XHRjbGFzc05hbWU9J2Rhc2gtbm90aWNlJ1xuXHRcdFx0PlxuXHRcdFx0XHR7J2Jvb2xlYW4nID09PSB0eXBlb2YgbWVzc2FnZSA/XG5cdFx0XHRcdFx0KGZhbHNlID09PSBtZXNzYWdlID9cblx0XHRcdFx0XHRcdF9fKCdDb3VsZCBub3QgVXBkYXRlIE9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpIDpcblx0XHRcdFx0XHR0b2FzdCgpXG5cdFx0XHRcdH1cblx0XHRcdDwvU25hY2tiYXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoR2xvYmFsU25hY2tiYXIpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVGFic0NvbnRlbnQgPSAoe2N1cnJlbnRUYWIsIHNldFRhYn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG5cdFx0PC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgVG9hc3QgPSAoe21lc3NhZ2UsIGRpc21pc3MsIHRpbWUsIHR5cGUgPSAnaW5mbyd9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGlzbWlzcygnJyk7XG5cdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9LCB0aW1lIHx8IDIwMDApO1xuXHR9KTtcblx0Y29uc3QgaWNvbk1hcCA9IHtcblx0XHQnaW5mbyc6ICdpbmZvJyxcblx0XHQnZXJyb3InOiAnbm8nLFxuXHRcdCdzdWNjZXNzJzogJ3llcycsXG5cdFx0J3dhcm5pbmcnOiAnd2FybmluZydcblx0fTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndG9hc3QnLCAnY29tcG9uZW50cy1hbmltYXRlX19hcHBlYXInLCAnaXMtZnJvbS1taWRkbGUnLCB0eXBlIF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxEYXNoaWNvbiBpY29uPXtpY29uTWFwW3R5cGVdfS8+XG5cdFx0XHQ8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcbiIsImNvbnN0IHt1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBjYWxsYmFjaykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuXHRcdFx0aWYgKHJlZi5jdXJyZW50ICYmICEgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdH07XG5cdH0sIFsgcmVmIF0pO1xufTtcblxuY29uc3QgT25DbGlja091dHNpZGUgPSAoe2NoaWxkcmVuLCBhY3Rpb259KSA9PiB7XG5cdGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cdHVzZU91dHNpZGVDbGljayh3cmFwcGVyUmVmLCBhY3Rpb24pO1xuXG5cdHJldHVybiA8ZGl2IHJlZj17d3JhcHBlclJlZn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uQ2xpY2tPdXRzaWRlO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtZGFzaGJvYXJkJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnNcbn0pO1xuXG5pbXBvcnQgb25ib2FyZGluZ1JlZHVjZXIgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgb25ib2FyZGluZ0FjdGlvbnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgb25ib2FyZGluZ1NlbGVjdG9ycyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1vbmJvYXJkaW5nJywge1xuXHRyZWR1Y2VyOiBvbmJvYXJkaW5nUmVkdWNlcixcblx0YWN0aW9uczogb25ib2FyZGluZ0FjdGlvbnMsXG5cdHNlbGVjdG9yczogb25ib2FyZGluZ1NlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0VGFiKHRhYikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1RBQicsXG5cdFx0XHRwYXlsb2FkOiB7dGFifVxuXHRcdH07XG5cdH0sXG5cdHNldFNldHRpbmdzKG9iamVjdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NFVFRJTkdTJyxcblx0XHRcdHBheWxvYWQ6IHtvYmplY3R9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlU3RhdHVzKG1vZHVsZVNsdWcsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdUT0dHTEVfTU9EVUxFJyxcblx0XHRcdHBheWxvYWQ6IHttb2R1bGVTbHVnOiAnbnZfcHJvXycgKyBtb2R1bGVTbHVnICsgJ19zdGF0dXMnLCB2YWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VNb2R1bGVPcHRpb24ob3B0aW9uU2x1Zywgb3B0aW9uVmFsdWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJyxcblx0XHRcdHBheWxvYWQ6IHtvcHRpb25TdGF0dXM6ICdudl9wcm9fJyArIG9wdGlvblNsdWcsIG9wdGlvblZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZUxpY2Vuc2VUaWVyKHRpZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9MSUNFTlNFX1RJRVInLFxuXHRcdFx0cGF5bG9hZDoge3RpZXJ9XG5cdFx0fTtcblx0fSxcblx0c2V0VG9hc3QobWVzc2FnZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX1RPQVNUX01FU1NBR0UnLFxuXHRcdFx0cGF5bG9hZDogbWVzc2FnZVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuaW1wb3J0IHtnZXRUYWJIYXNofSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNldHRpbmdzOiB7fSxcblx0dGllcjogbmV2ZURhc2gucHJvID8gbmV2ZURhc2gubGljZW5zZS50aWVyIDogMCxcblx0dG9hc3Q6IG51bGwsXG5cdGN1cnJlbnRUYWI6ICdzdGFydCdcbn07XG5cbmNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5pZiAobnVsbCAhPT0gaGFzaCkge1xuXHRpbml0aWFsU3RhdGUuY3VycmVudFRhYiA9IGhhc2g7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1RBQic6XG5cdFx0XHRjb25zdCB7dGFifSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRUYWI6IHRhYlxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfU0VUVElOR1MnOlxuXHRcdFx0Y29uc3Qge29iamVjdH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczogb2JqZWN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge21vZHVsZVNsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W21vZHVsZVNsdWddOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJzpcblx0XHRcdGxldCB7b3B0aW9uU3RhdHVzLCBvcHRpb25WYWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFtvcHRpb25TdGF0dXNdOiBvcHRpb25WYWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9MSUNFTlNFX1RJRVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRpZXI6IGFjdGlvbi5wYXlsb2FkLnRpZXJcblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX1RPQVNUX01FU1NBR0UnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvYXN0OiBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRNb2R1bGVTdGF0dXM6IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1ZyArICdfc3RhdHVzJ10sXG5cdGdldE9wdGlvbjogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnXSxcblx0Z2V0TGljZW5zZVRpZXI6IChzdGF0ZSkgPT4gc3RhdGUudGllcixcblx0Z2V0VG9hc3Q6IChzdGF0ZSkgPT4gc3RhdGUudG9hc3QsXG5cdGdldFRhYjogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50VGFiXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgU3RhcnRlclNpdGVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydCc7XG5pbXBvcnQgUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9Qcm8nO1xuaW1wb3J0IFBsdWdpbnMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMnO1xuaW1wb3J0IEhlbHAgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0hlbHAnO1xuaW1wb3J0IENoYW5nZWxvZyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nJztcbmltcG9ydCBGcmVlUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvJztcblxuY29uc3QgZ2V0VXJsUGFyYW0gPSAocGFyYW0pID0+IHtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuXHRyZXR1cm4gdXJsUGFyYW1zLmdldChwYXJhbSk7XG59O1xuXG5jb25zdCBhZGRVcmxIYXNoID0gKGhhc2gpID0+IHtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xufTtcblxuY29uc3QgZ2V0VGFiSGFzaCA9ICgpID0+IHtcblx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdGlmICghIE9iamVjdC5rZXlzKHRhYnMpLmluY2x1ZGVzKGhhc2gpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IHRhYnMgPSB7XG5cdCdzdGFydCc6IHtsYWJlbDogJ0dldHRpbmcgU3RhcnRlZCcsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0IHNldFRhYj17c2V0VGFifS8+fSxcblx0J3BsdWdpbnMnOiB7bGFiZWw6ICdVc2VmdWwgUGx1Z2lucycsIHJlbmRlcjogKHNldFRhYikgPT4gPFBsdWdpbnMvPn0sXG5cdCdoZWxwJzoge2xhYmVsOiAnSGVscCAmIGRvY3MnLCByZW5kZXI6IChzZXRUYWIpID0+IDxIZWxwIHNldFRhYj17c2V0VGFifS8+fSxcblx0J2NoYW5nZWxvZyc6IHtsYWJlbDogJ0NoYW5nZWxvZycsIHJlbmRlcjogKHNldFRhYikgPT4gPENoYW5nZWxvZy8+fSxcblx0J3N0YXJ0ZXItc2l0ZXMnOiB7bGFiZWw6ICdTdGFydGVyIFNpdGVzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnRlclNpdGVzLz59LFxuXHQnZnJlZS1wcm8nOiB7bGFiZWw6ICdGcmVlIHZzIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPEZyZWVQcm8vPn1cbn07XG5cbmlmIChuZXZlRGFzaC5wcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6ICdOZXZlIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuXG5leHBvcnQge1xuXHRnZXRVcmxQYXJhbSxcblx0YWRkVXJsSGFzaCxcblx0Z2V0VGFiSGFzaCxcblx0dGFic1xufTtcbiIsImNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBpc1ZhbGlkKG9wdGlvbiwgb3B0aW9uc0FycmF5KSB7XG5cdGlmICgnbnZfcHJvX3R5cGVraXRfaWQnID09PSBvcHRpb24pIHtcblx0XHRpZiAoISBvcHRpb25zQXJyYXlbJ25ldmVfcHJvX3R5cGVraXRfZGF0YSddKSB7XG5cdFx0XHRyZXR1cm4ge21lc3NhZ2U6IF9fKCdUeXBla2l0IFByb2plY3QgSUQgaXMgaW52YWxpZCcsICduZXZlJyksIHN1Y2Nlc3M6IGZhbHNlfTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=