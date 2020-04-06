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

var EditorSelector = function EditorSelector(_ref) {
  var onChange = _ref.onChange,
      onSearch = _ref.onSearch,
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
    if (key === selected) {
      return null;
    }

    return wp.element.createElement("li", null, wp.element.createElement("a", {
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useState = wp.element.useState;
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;

var Onboarding = function Onboarding(_ref) {
  var sites = _ref.sites,
      upsells = _ref.upsells;

  var _useState = useState('elementor'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedEditor = _useState2[0],
      selectEditor = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchQuery = _useState4[0],
      setSearchQuery = _useState4[1];

  function filterSites(sites) {
    if (!searchQuery) {
      return sites;
    }

    return Object.keys(sites).reduce(function (results, slug) {
      return -1 === sites[slug].title.toLowerCase().indexOf(searchQuery.toLowerCase()) ? results : _objectSpread({}, results, _defineProperty({}, slug, sites[slug]));
    }, {});
  }

  function renderSites() {
    if (!sites[selectedEditor]) {
      return null;
    }

    var filtered = filterSites(sites[selectedEditor]);
    return Object.keys(filtered).map(function (slug) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        slug: slug,
        data: filtered[slug]
      });
    });
  }

  function renderUpsells() {
    if (!upsells[selectedEditor]) {
      return null;
    }

    var filtered = filterSites(upsells[selectedEditor]);
    return Object.keys(filtered).map(function (slug) {
      return wp.element.createElement(_StarterSiteCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        upsell: true,
        slug: slug,
        data: filtered[slug]
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
    onSearch: function onSearch(query) {
      setSearchQuery(query);
    },
    query: searchQuery,
    selected: selectedEditor,
    onChange: function onChange(editor) {
      selectEditor(editor);
    }
  }), wp.element.createElement("div", {
    className: "ob-sites"
  }, sites && renderSites(), upsells && renderUpsells())));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select) {
  var _select = select('neve-onboarding'),
      getSites = _select.getSites,
      getUpsells = _select.getUpsells;

  return {
    sites: getSites(),
    upsells: getUpsells()
  };
})(Onboarding));

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

var StarterSiteCard = function StarterSiteCard(_ref) {
  var slug = _ref.slug,
      data = _ref.data,
      upsell = _ref.upsell;
  return wp.element.createElement("div", {
    className: "card starter-site-card"
  }, wp.element.createElement("div", {
    className: "top"
  }, wp.element.createElement("div", {
    className: "fav"
  }, wp.element.createElement(Button, {
    icon: "star-filled"
  })), wp.element.createElement("div", {
    className: "actions"
  }, wp.element.createElement(Button, {
    className: "preview"
  }, __('Preview', 'neve')), wp.element.createElement(Button, {
    className: "import"
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
        upsells: upsells
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVByby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGljZW5zZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvRWRpdG9yU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1N0YXJ0ZXJTaXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsImRhdGEiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY29tcG9zZSIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwiQXBwIiwic2V0U2V0dGluZ3MiLCJ0b2FzdCIsImN1cnJlbnRUYWIiLCJzZXRUYWIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldHRpbmdzIiwiYXBpIiwibG9hZFByb21pc2UiLCJ0aGVuIiwibW9kZWxzIiwiU2V0dGluZ3MiLCJmZXRjaCIsInIiLCJkaXNwYXRjaCIsIm9iamVjdCIsInRhYiIsInNlbGVjdCIsImdldFRvYXN0IiwiZ2V0VGFiIiwiQ2FyZCIsImljb24iLCJpY29uQWx0IiwiZGVzY3JpcHRpb24iLCJjbGFzc05hbWVzIiwiX18iLCJpMThuIiwiQ2hhbmdlbG9nIiwibmV2ZURhc2giLCJjaGFuZ2Vsb2ciLCJtYXAiLCJlbnRyeSIsImluZGV4IiwiZGF0ZSIsInZlcnNpb24iLCJ0d2Vha3MiLCJmaXhlcyIsImZlYXR1cmVzIiwiZmVhdHVyZSIsImZpeCIsInR3ZWFrIiwiQnV0dG9uIiwiUHJvIiwiZmVhdHVyZURhdGEiLCJpdGVtIiwidXBncmFkZVVSTCIsIkhlbHAiLCJhc3NldHMiLCJIZWFkZXIiLCJwbHVnaW5zIiwiT2JqZWN0Iiwia2V5cyIsInNsdWciLCJtb2R1bGVzIiwiaWQiLCJTdGFydCIsInJlbmRlckN1c3RvbWl6ZXJMaW5rcyIsImxpbmtzIiwiY3VzdG9taXplclNob3J0Y3V0cyIsInNwbGl0IiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYXJ0cyIsInNsaWNlIiwiY29sdW1uIiwibGluayIsInRleHQiLCJTdGFydGVyU2l0ZXMiLCJzaXRlcyIsInNldFNpdGVzIiwic2V0VXBzZWxscyIsImVycm9yIiwic2V0RXJyb3IiLCJnZXQiLCJvbmJvYXJkaW5nIiwicm9vdCIsInN1Y2Nlc3MiLCJyZW1vdGUiLCJ1cHNlbGwiLCJ1cHNlbGxzIiwiZ2V0U2l0ZXMiLCJ1c2VSZWYiLCJGZWF0dXJlUm93IiwiaW5MaXRlIiwidG9vbHRpcCIsInRvZ2dsZVRvb2x0aXAiLCJmb3JjZVRvb2xUaXAiLCJ0b2dnbGVGb3JjZVRvb2x0aXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwiZ2V0VGFiSGFzaCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsImNoYW5nZVRpZXIiLCJsaWNlbnNlIiwicHJvQXBpIiwidmFsaWQiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzZXRWYWxpZCIsImV4cGlyYXRpb24iLCJzZXRFeHBpcmF0aW9uIiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0aWVyIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwiaW5jbHVkZXMiLCJjaGFuZ2VMaWNlbnNlVGllciIsIm5ld1RpZXIiLCJMb2FkaW5nIiwiQXJyYXkiLCJmcm9tIiwibm90aWZpY2F0aW9ucyIsIlRvZ2dsZUNvbnRyb2wiLCJNb2R1bGVDYXJkIiwiY2hhbmdlTW9kdWxlU3RhdHVzIiwiZ2V0TW9kdWxlU3RhdHVzIiwibmljZW5hbWUiLCJhdmFpbGFiaWxpdHlMZXZlbCIsIm9wdGlvbnMiLCJvcmRlciIsImRvY3VtZW50YXRpb24iLCJyZXF1aXJlZF9hY3Rpb25zIiwidXBncmFkZUxpbmtzIiwicmVuZGVyT3B0aW9uc0FjY29yZGlvbnMiLCJncm91cCIsIm9wdGlvblNsdWciLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjaGFuZ2VPcHRpb24iLCJ1cmwiLCJnZXRMaWNlbnNlVGllciIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImN0YSIsInVwZGF0ZSIsImluUHJvZ3Jlc3MiLCJzZXRJblByb2dyZXNzIiwiZG9uZSIsInNldERvbmUiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJwYXRoIiwicGx1Z2luIiwiTm90aWZpY2F0aW9ucyIsIkVkaXRvclNlbGVjdG9yIiwib25DaGFuZ2UiLCJvblNlYXJjaCIsInNlbGVjdGVkIiwibmljZU5hbWUiLCJPbmJvYXJkaW5nIiwic2VsZWN0ZWRFZGl0b3IiLCJzZWxlY3RFZGl0b3IiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmlsdGVyU2l0ZXMiLCJyZWR1Y2UiLCJyZXN1bHRzIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicmVuZGVyU2l0ZXMiLCJmaWx0ZXJlZCIsInJlbmRlclVwc2VsbHMiLCJxdWVyeSIsImVkaXRvciIsImdldFVwc2VsbHMiLCJTdGFydGVyU2l0ZUNhcmQiLCJzY3JlZW5zaG90IiwicGF5bG9hZCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiSW5wdXRGb3JtIiwiZ2V0T3B0aW9uIiwic2V0VmFsdWUiLCJjaGFuZ2VTZXR0aW5nIiwiY2hhbmdlTW9kdWxlT3B0aW9uIiwiVG9nZ2xlIiwiYmFubmVyIiwibmFtZSIsImF1dGhvciIsInNldEFjdGlvbiIsInN0cmluZ01hcCIsInByb2dyZXNzIiwiaW5zdGFsbFBsdWdpbiIsIm9rIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJlcnIiLCJTaWRlYmFyIiwibG9nZ2VyIiwidHJhY2tpbmciLCJzZXRUcmFja2luZyIsInBybyIsIlNuYWNrYmFyIiwiR2xvYmFsU25hY2tiYXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiVGFic0NvbnRlbnQiLCJyZW5kZXIiLCJUb2FzdCIsImRpc21pc3MiLCJ0aW1lIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25NYXAiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJjYWxsYmFjayIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9uQ2xpY2tPdXRzaWRlIiwid3JhcHBlclJlZiIsInJlZ2lzdGVyU3RvcmUiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsInNlbGVjdG9ycyIsIm9uYm9hcmRpbmdSZWR1Y2VyIiwib25ib2FyZGluZ0FjdGlvbnMiLCJvbmJvYXJkaW5nU2VsZWN0b3JzIiwiUm9vdCIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlU2x1ZyIsIm9wdGlvblZhbHVlIiwib3B0aW9uU3RhdHVzIiwiZ2V0VXJsUGFyYW0iLCJwYXJhbSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzdWJzdHJpbmciLCJpc1ZhbGlkIiwib3B0aW9uIiwib3B0aW9uc0FycmF5IiwibW9kdWxlIiwibW9kZWwiLCJzYXZlIiwicm91dGUiLCJzaW1wbGUiLCJyZXF1ZXN0RGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJub25jZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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SyxlQUFTLEVBQUM7QUFBZixNQUFQO0FBQ0EsR0FGQSxDQURGLENBSEYsRUFTQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBR0M7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsSUFIRCxDQUxELENBREQsRUFZQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERCxFQUVDO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFGRCxDQURELEVBS0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERCxFQUVDO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLElBRkQsQ0FMRCxDQVpELENBREQsRUF3QkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBSUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQURELEVB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UCxRQUFRLENBQUN3UDtBQUhmO0FBRk0sYUFERzs7QUFVbkIsZ0JBQUksV0FBV0YsTUFBZixFQUF1QjtBQUN0QnZJLHFCQUFPLENBQUMwSSxJQUFSLEdBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlOVIsSUFBZixDQUFmO0FBQ0E7O0FBWmtCO0FBQUEsbUJBY05tQixLQUFLLENBQUNtUSxLQUFELEVBQVFwSSxPQUFSLENBQUwsQ0FBc0JsSSxJQUF0QixDQUEyQixVQUFDK0csUUFBRCxFQUFjO0FBQ3JELHFCQUFPd0osTUFBTSxHQUFHeEosUUFBSCxHQUFjQSxRQUFRLENBQUNnSyxJQUFULEVBQTNCO0FBQ0EsYUFGWSxDQWRNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWFAsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjY29yZGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7aXNPcGVuLCB0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoaXNPcGVuKTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnYWNjb3JkaW9uJywgeydvcGVuJzogb3BlbiwgJ2Nsb3NlZCc6ICEgb3BlbiB9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0YXJpYS1leHBhbmRlZD17b3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oISBvcGVuKX1cblx0XHRcdD5cblx0XHRcdFx0XHR7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdGl0bGVcIj57dGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIiBzdHlsZT17e2hlaWdodDogb3BlbiA/ICdhdXRvJyA6ICcwcHgnfX0+XG5cdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IFRhYnNDb250ZW50IGZyb20gJy4vVGFic0NvbnRlbnQnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi9TbmFja2Jhcic7XG5pbXBvcnQge2dldFRhYkhhc2h9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQge2dldCwgc2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQXBwID0gKHtzZXRTZXR0aW5ncywgdG9hc3QsIGN1cnJlbnRUYWIsIHNldFRhYn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdFx0c2V0dGluZ3MuZmV0Y2goKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRzZXRTZXR0aW5ncyhyKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8TG9hZGluZy8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZGVyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdHsnc3RhcnRlci1zaXRlcycgIT09IGN1cnJlbnRUYWIgJiYgPE5vdGlmaWNhdGlvbnMvPn1cblx0XHRcdFx0XHQ8VGFic0NvbnRlbnQgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsnc3RhcnRlci1zaXRlcycgIT09IGN1cnJlbnRUYWIgJiYgPFNpZGViYXIgY3VycmVudFRhYj17Y3VycmVudFRhYn0vPn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0e3RvYXN0ICYmIDxTbmFja2Jhci8+fVxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNldHRpbmdzLCBzZXRUYWJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNldHRpbmdzOiAob2JqZWN0KSA9PiBzZXRTZXR0aW5ncyhvYmplY3QpLFxuXHRcdFx0c2V0VGFiOiAodGFiKSA9PiBzZXRUYWIodGFiKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0VG9hc3QsIGdldFRhYn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiBnZXRUb2FzdCgpLFxuXHRcdFx0Y3VycmVudFRhYjogZ2V0VGFiKClcblx0XHR9O1xuXHR9KVxuKShBcHApO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL0FjY29yZGlvbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IENoYW5nZWxvZyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y2hhbmdlbG9nfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRjaGFuZ2Vsb2cubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPVxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD47XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbiBpc09wZW49ezAgPT09IGluZGV4fSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIHN1Y2Nlc3NcIj57X18oJ0ZlYXR1cmVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IDxsaT57ZmVhdHVyZX08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e2ZpeGVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnVncyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGVycm9yXCI+e19fKCdCdWcgRml4ZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZpeGVzLm1hcCgoZml4KSA9PiA8bGk+e2ZpeH08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e3R3ZWFrcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3ZWFrcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj57X18oJ1R3ZWFrcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHdlYWtzLm1hcCgodHdlYWspID0+IDxsaT57dHdlYWt9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlbG9nO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgRmVhdHVyZVJvdyBmcm9tICcuLi9GZWF0dXJlUm93JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7ZmVhdHVyZURhdGF9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjYXJkIHRhYmxlXCI+XG5cdFx0XHRcdDx0Ym9keSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkXCI+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImxhcmdlXCIvPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUnLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdHtmZWF0dXJlRGF0YS5tYXAoKGl0ZW0pID0+IDxGZWF0dXJlUm93IGl0ZW09e2l0ZW19Lz4pfVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHVwc2VsbFwiPlxuXHRcdFx0XHQ8cD57X18oJ0dldCBhY2Nlc3MgdG8gYWxsIFBybyBmZWF0dXJlcyBhbmQgcG93ZXItdXAgeW91ciB3ZWJzaXRlJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC51cGdyYWRlVVJMfVxuXHRcdFx0XHRcdGlzUHJpbWFyeT5cblx0XHRcdFx0XHR7X18oJ0dldCBOZXZlIFBybyBOb3cnLCAnbmV2ZScpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgSGVscCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2J1b3kuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXZSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIHVzaW5nIE5ldmUsIGFuZCB0aGF0IGlzIHdoeSB3ZSBoYXZlIGdhdGhlcmVkIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGhlcmUgZm9yIHlvdS4gV2UgaG9wZSB5b3Ugd2lsbCBlbmpveSB1c2luZyBOZXZlIGFzIG11Y2ggYXMgd2UgZW5qb3kgY3JlYXRpbmcgZ3JlYXQgcHJvZHVjdHMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93b3JkcHJlc3Mub3JnL3N1cHBvcnQvdGhlbWUvbmV2ZS8nXG4gICAgICAgICAgPntfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdsaXN0LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2FudCB0byBnZXQgdGhlIGdpc3Qgb24gdGhlIGxhdGVzdCB0aGVtZSBjaGFuZ2VzPyBKdXN0IGNvbnN1bHQgb3VyIGNoYW5nZWxvZyBiZWxvdyB0byBnZXQgYSB0YXN0ZSBvZiB0aGUgcmVjZW50IGZpeGVzIGFuZCBmZWF0dXJlcyBpbXBsZW1lbnRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuICAgICAgICAgID57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICd0YWNob21ldGVyLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS82My1zcGVlZC11cC15b3VyLXdvcmRwcmVzcy1zaXRlXCI+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0RvY3VtZW50YXRpb24nLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvOTQ2LW5ldmUtZG9jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Nsb25lLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDcmVhdGUgYSBjaGlsZCB0aGVtZScsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xNC1ob3ctdG8tY3JlYXRlLWEtY2hpbGQtdGhlbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYXJyb3dzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMjE5LWhvdy10by1idWlsZC1hLWxhbmRpbmctcGFnZS13aXRoLWEtZHJhZy1hbmQtZHJvcC1jb250ZW50LWJ1aWxkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7bW9kdWxlc30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhtb2R1bGVzKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb2R1bGVDYXJkIHNsdWc9e2lkfS8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05ldmUgbm93IGNvbWVzIHdpdGggYSBzaXRlcyBsaWJyYXJ5IHdpdGggdmFyaW91cyBkZXNpZ25zIHRvIHBpY2sgZnJvbS4gVmlzaXQgb3VyIGNvbGxlY3Rpb24gb2YgZGVtb3MgdGhhdCBhcmUgY29uc3RhbnRseSBiZWluZyBhZGRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRhYignc3RhcnRlci1zaXRlcycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+e19fKCdHbyB0byBTdGFydGVyIFNpdGVzJywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdHZXR0aW5nIFN0YXJ0ZWQ/IENoZWNrIGhlbHAgYW5kIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG4gICAgICAgICAgPntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDdXN0b21pemVyTGlua3MoKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cblxuY29uc3QgcmVuZGVyQ3VzdG9taXplckxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IG5ldmVEYXNoLmN1c3RvbWl6ZXJTaG9ydGN1dHM7XG4gIGNvbnN0IHNwbGl0ID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIDIpO1xuICBjb25zdCBwYXJ0cyA9IFsgbGlua3Muc2xpY2UoMCwgc3BsaXQpLCBsaW5rcy5zbGljZShzcGxpdCkgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIHtcbiAgICAgICAgcGFydHMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc0xpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS50ZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gY29sdW1uLmxlbmd0aCAtIDEgJiYgPGhyLz59XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vT25ib2FyZGluZy9Mb2FkaW5nJztcbmltcG9ydCBPbmJvYXJkaW5nIGZyb20gJy4uL09uYm9hcmRpbmcvTWFpbic7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAoe3NpdGVzLCBzZXRTaXRlcywgc2V0VXBzZWxsc30pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc2l0ZXMpIHtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXQobmV2ZURhc2gub25ib2FyZGluZy5yb290ICsgJy9pbml0aWFsaXplX3NpdGVzX2xpYnJhcnknKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRpZiAoISByLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRzZXRFcnJvcih0cnVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCB7cmVtb3RlLCB1cHNlbGx9ID0gci5kYXRhO1xuXHRcdFx0XHRcdHNldFNpdGVzKHJlbW90ZSk7XG5cdFx0XHRcdFx0c2V0VXBzZWxscyh1cHNlbGwpO1xuXHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRpZiAoZXJyb3IpIHtcblx0XHRyZXR1cm4gPGgxPkVycm9yLjwvaDE+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHRsb2FkaW5nID8gPExvYWRpbmcvPiA6IDxPbmJvYXJkaW5nLz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2l0ZXMsIHNldFVwc2VsbHN9ID0gZGlzcGF0Y2goJ25ldmUtb25ib2FyZGluZycpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTaXRlczogKHNpdGVzKSA9PiBzZXRTaXRlcyhzaXRlcyksXG5cdFx0XHRzZXRVcHNlbGxzOiAodXBzZWxscykgPT4gc2V0VXBzZWxscyh1cHNlbGxzKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0U2l0ZXN9ID0gc2VsZWN0KCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2l0ZXM6IGdldFNpdGVzKClcblx0XHR9O1xuXHR9KVxuKShTdGFydGVyU2l0ZXMpO1xuIiwiY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmltcG9ydCBPbkNsaWNrT3V0c2lkZSBmcm9tICcuL1V0aWxzL09uQ2xpY2tPdXRzaWRlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBGZWF0dXJlUm93ID0gKHtpdGVtfSkgPT4ge1xuXHRjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBpbkxpdGV9ID0gaXRlbTtcblx0Y29uc3QgWyB0b29sdGlwLCB0b2dnbGVUb29sdGlwIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgZm9yY2VUb29sVGlwLCB0b2dnbGVGb3JjZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRyZXR1cm4gKFxuXHRcdDx0ciBjbGFzc05hbWU9XCJmZWF0dXJlLXJvd1wiPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cImxhcmdlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdC13cmFwXCI+XG5cdFx0XHRcdFx0PGg0Pnt0aXRsZX08L2g0PlxuXHRcdFx0XHRcdDxPbkNsaWNrT3V0c2lkZSBhY3Rpb249eygpID0+IHtcblx0XHRcdFx0XHRcdHRvZ2dsZUZvcmNlVG9vbHRpcChmYWxzZSk7XG5cdFx0XHRcdFx0fX0+IDxhXG5cdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlVG9vbHRpcCh0cnVlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlVG9vbHRpcChmYWxzZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVGb3JjZVRvb2x0aXAodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxEYXNoaWNvbiBpY29uPVwiaW5mb1wiLz5cblx0XHRcdFx0XHRcdHsodG9vbHRpcCB8fCBmb3JjZVRvb2xUaXApICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8cD57ZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvT25DbGlja091dHNpZGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnaW5kaWNhdG9yJywgeydlcnJvcic6ICEgaW5MaXRlLCAnc3VjY2Vzcyc6IGluTGl0ZX0gXSl9PlxuXHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MzB9IGljb249e2luTGl0ZSA/ICd5ZXMnIDogJ25vLWFsdCd9Lz5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwiaW5kaWNhdG9yIHN1Y2Nlc3NcIj5cblx0XHRcdFx0PERhc2hpY29uIHNpemU9ezMwfSBpY29uPVwieWVzXCIvPlxuXHRcdFx0PC90ZD5cblx0XHQ8L3RyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVJvdztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCBnZXRUYWJIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFzaCA9IGdldFRhYkhhc2goKTtcblx0XHRpZiAobnVsbCA9PT0gaGFzaCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRwcm9wcy5zZXRUYWIoaGFzaCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7cmVuZGVySGVhZCgpfVxuXHRcdFx0XHR7cmVuZGVyTmF2aWdhdGlvbihwcm9wcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlckhlYWQgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e25ldmVEYXNoLnN0cmluZ3MuaGVhZGVyfTwvaDE+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+e25ldmVEYXNoLnZlcnNpb259PC9zcGFuPlxuXHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvbG9nby5zdmcnfSBhbHQ9e19fKCdOZXZlIFRoZW1lIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHR7T2JqZWN0LmtleXModGFicykubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGxpPjxhXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6ICcnfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZXRUYWIoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdGFkZFVybEhhc2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD57dGFic1tpdGVtXS5sYWJlbH1cblx0XHRcdFx0XHQ8L2E+PC9saT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcblxuY29uc3QgTGljZW5zZUNhcmQgPSAoe2lzVmlzaWJsZSwgY2hhbmdlVGllcn0pID0+IHtcblx0Y29uc3Qge2xpY2Vuc2UsIHByb0FwaX0gPSBuZXZlRGFzaDtcblx0Y29uc3QgWyBrZXksIHNldEtleSBdID0gdXNlU3RhdGUobGljZW5zZSAmJiAndmFsaWQnID09PSBsaWNlbnNlLnZhbGlkID8gbGljZW5zZS5rZXkgfHwgJycgOiAnJyk7XG5cdGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyB2YWxpZCwgc2V0VmFsaWQgXSA9IHVzZVN0YXRlKGxpY2Vuc2UudmFsaWQgfHwgJ2ludmFsaWQnKTtcblx0Y29uc3QgWyBleHBpcmF0aW9uLCBzZXRFeHBpcmF0aW9uIF0gPSB1c2VTdGF0ZShsaWNlbnNlLmV4cGlyYXRpb24gfHwgJycpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXG5cdGlmICghIGlzVmlzaWJsZSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgdG9nZ2xlTGljZW5zZSA9ICgpID0+IHtcblx0XHRjb25zdCB0b0RvID0gJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnZGVhY3RpdmF0ZScgOiAnYWN0aXZhdGUnO1xuXHRcdHNldFN0YXR1cygnYWN0aXZhdGUnID09PSB0b0RvID8gJ2FjdGl2YXRpbmcnIDogJ2RlYWN0aXZhdGluZycpO1xuXHRcdHNlbmQocHJvQXBpICsgJy90b2dnbGVfbGljZW5zZScsIHtrZXksIGFjdGlvbjogdG9Eb30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRzZXRUb2FzdFR5cGUocmVzcG9uc2Uuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicpO1xuXHRcdFx0c2V0S2V5KCdhY3RpdmF0ZScgPT09IHRvRG8gPyBrZXkgOiAnJyk7XG5cdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdHNldEV4cGlyYXRpb24ocmVzcG9uc2UuZXhwaXJhdGlvbik7XG5cdFx0XHRzZXRWYWxpZChyZXNwb25zZS5zdWNjZXNzICYmICdhY3RpdmF0ZScgPT09IHRvRG8gPyAndmFsaWQnIDogJ25vdF9hY3RpdmUnKTtcblx0XHRcdHNldFN0YXR1cyhmYWxzZSk7XG5cdFx0XHRuZXZlRGFzaC5saWNlbnNlLmV4cGlyYXRpb24gPSByZXNwb25zZS5leHBpcmF0aW9uO1xuXHRcdFx0Y2hhbmdlVGllcihyZXNwb25zZS50aWVyIHx8IDEpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZCBsaWNlbnNlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHQ8aDQ+e19fKCdOZXZlIFBybyBBZGRvbiBsaWNlbnNlJywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHQ8cD5FbnRlciB5b3VyIGxpY2Vuc2UgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9zdG9yZS50aGVtZWlzbGUuY29tXCI+VGhlbWVJc2xlPC9hPiBwdXJjaGFzZSBoaXN0b3J5IGluIG9yZGVyIHRvIGdldFxuXHRcdFx0XHRcdHBsdWdpbiB1cGRhdGVzPC9wPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJsaWNlbnNlLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlTGljZW5zZSgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwibGljZW5zZS1maWVsZFwiXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0S2V5KGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHQnKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyArIGtleS5zbGljZSgtNSkgOlxuXHRcdFx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdFbnRlciBMaWNlbnNlIEtleScsICduZXZlJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnk9eyd2YWxpZCcgIT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnk9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3N0YXR1cyB8fCAhIGtleX1cblx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHRcdHshIHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdCgndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0ZScsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRlJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHRcdFx0KCdhY3RpdmF0aW5nJyA9PT0gc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0e3RvYXN0ICYmIDxUb2FzdCB0eXBlPXt0b2FzdFR5cGV9IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0vPn1cblx0XHRcdFx0eyEgWyAnbm90X2FjdGl2ZScsICdpbnZhbGlkJyBdLmluY2x1ZGVzKHZhbGlkKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9vdGVyXCI+XG5cdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0Y2xhc3NuYW1lcyhbICdzdGF0dXMtaWNvbicsICd2YWxpZCcgPT09IHZhbGlkID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyBdKVxuXHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXsndmFsaWQnID09PSB2YWxpZCA/ICd5ZXMnIDogJ25vJ30vPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmFsaWRpdHlcIj5cblx0XHRcdFx0XHRcdFx0eyd2YWxpZCcgPT09IHZhbGlkID8gX18oJ1ZhbGlkJywgJ25ldmUnKSA6IF9fKCdFeHBpcmVkJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHtleHBpcmF0aW9uICYmXG5cdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPi08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImV4cGlyZXNcIj5cblx0XHRcdFx0XHRcdHsoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlcycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnRXhwaXJlZCcsICduZXZlJykpICsgJyAnICsgZXhwaXJhdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hc2lkZT5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0Y29uc3Qge2NoYW5nZUxpY2Vuc2VUaWVyfSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRyZXR1cm4ge1xuXHRcdGNoYW5nZVRpZXI6IChuZXdUaWVyKSA9PiB7XG5cdFx0XHRjaGFuZ2VMaWNlbnNlVGllcihuZXdUaWVyKTtcblx0XHR9XG5cdH07XG59KShMaWNlbnNlQ2FyZCk7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibW9jay1kYXNoXCI+XG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZyBsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvbiBsb2FkaW5nXCI+djIuNi4yPC9zcGFuPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvZ29cIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oQXJyYXkoNikpLm1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxsaT48YSBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPjwvbGk+O1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvbmF2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRuZXZlRGFzaC5ub3RpZmljYXRpb25zICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uIGxvYWRpbmcgcGxhY2Vob2xkZXJcIi8+O1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50IGNvbHVtbnMgc3RhcnRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxvYWRpbmcgY29tcG9uZW50cy1idXR0b24gaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtcHJpbWFyeVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxvYWRpbmcgY29tcG9uZW50cy1idXR0b24gaXMtYnV0dG9uIGlzLWRlZmF1bHQgaXMtcHJpbWFyeVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjdXN0b21pemVyLXF1aWNrLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9hc2lkZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuL0FjY29yZGlvbic7XG5pbXBvcnQgSW5wdXRGb3JtIGZyb20gJy4vT3B0aW9ucy9JbnB1dEZvcm0nO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL09wdGlvbnMvVG9nZ2xlJztcbmltcG9ydCB7Y2hhbmdlT3B0aW9ufSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuY29uc3Qge0J1dHRvbiwgVG9nZ2xlQ29udHJvbCwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt3aXRoU2VsZWN0LCB3aXRoRGlzcGF0Y2h9ID0gd3AuZGF0YTtcbmNvbnN0IHtGcmFnbWVudCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgTW9kdWxlQ2FyZCA9ICh7c2x1Zywgc2V0VG9hc3QsIGNoYW5nZU1vZHVsZVN0YXR1cywgZ2V0TW9kdWxlU3RhdHVzLCB0aWVyfSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qge1xuXHRcdG5pY2VuYW1lLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGF2YWlsYWJpbGl0eUxldmVsLFxuXHRcdG9wdGlvbnMsXG5cdFx0b3JkZXIsXG5cdFx0bGlua3MsXG5cdFx0ZG9jdW1lbnRhdGlvbixcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0cmVxdWlyZWRfYWN0aW9uc1xuXHR9ID0gbmV2ZURhc2gubW9kdWxlc1tzbHVnXTtcblx0Y29uc3Qge3VwZ3JhZGVMaW5rc30gPSBuZXZlRGFzaDtcblxuXHRmdW5jdGlvbiByZW5kZXJPcHRpb25zQWNjb3JkaW9ucygpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5tYXAoKGdyb3VwKSA9PiB7XG5cdFx0XHRjb25zdCB7bGFiZWwsIG9wdGlvbnN9ID0gZ3JvdXA7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8QWNjb3JkaW9uIHRpdGxlPXtsYWJlbH0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKG9wdGlvblNsdWcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qge2xhYmVsLCB0eXBlLCBwbGFjZWhvbGRlcn0gPSBvcHRpb25zW29wdGlvblNsdWddO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdHsndGV4dCcgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dEZvcm1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbHVnPXtvcHRpb25TbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0eyd0b2dnbGUnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtb2R1bGUtY2FyZFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57bmljZW5hbWV9PC9oMz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRpZXIgPCBhdmFpbGFiaWxpdHlMZXZlbCA/XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gaXNQcmltYXJ5IGhyZWY9e3VwZ3JhZGVMaW5rc1thdmFpbGFiaWxpdHlMZXZlbF19PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZScsICduZXZlJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPiA6XG5cdFx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyAmJiA8RGFzaGljb24gc2l6ZT17MTh9IGljb249XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJpcy1sb2FkaW5nXCIvPn1cblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Z2V0TW9kdWxlU3RhdHVzKHNsdWcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUsIHRydWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHZhbHVlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIEFjdGl2YXRlZCcsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgRGVhY3RpdmF0ZWQuJywgJ25ldmUnKSkgKyBgICgke25pY2VuYW1lfSlgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoX18oJ0NvdWxkIG5vdCBhY3RpdmF0ZSBtb2R1bGUuIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gKyAnICd9XG5cdFx0XHRcdFx0e2RvY3VtZW50YXRpb24gJiZcblx0XHRcdFx0XHQ8YSBocmVmPXtkb2N1bWVudGF0aW9uLnVybH0+e19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX08L2E+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdHtsaW5rcyAmJiBnZXRNb2R1bGVTdGF0dXMoc2x1ZykgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0e2xpbmtzLm1hcCgobGluaykgPT4gPEJ1dHRvbiBpc1NlY29uZGFyeSBocmVmPXtsaW5rLnVybH0+e2xpbmsubGFiZWx9PC9CdXR0b24+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0eygwIDwgb3B0aW9ucy5sZW5ndGggJiYgdHJ1ZSA9PT0gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1vcHRpb25zXCI+XG5cdFx0XHRcdFx0e3JlbmRlck9wdGlvbnNBY2NvcmRpb25zKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRNb2R1bGVTdGF0dXMsIGdldExpY2Vuc2VUaWVyfSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0TW9kdWxlU3RhdHVzOiAoc2x1ZykgPT4gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpLFxuXHRcdFx0dGllcjogZ2V0TGljZW5zZVRpZXIoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZVN0YXR1cywgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1czogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKE1vZHVsZUNhcmQpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsImltcG9ydCBPbkNsaWNrT3V0c2lkZSBmcm9tICcuLi9VdGlscy9PbkNsaWNrT3V0c2lkZSc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNvbnN0IEVkaXRvclNlbGVjdG9yID0gKHtvbkNoYW5nZSwgb25TZWFyY2gsIHNlbGVjdGVkfSkgPT4ge1xuXHRjb25zdCBtYXAgPSB7XG5cdFx0J2VsZW1lbnRvcic6IHtcblx0XHRcdGljb246ICdlbGVtZW50b3IucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRWxlbWVudG9yJylcblx0XHR9LFxuXHRcdCdicml6eSc6IHtcblx0XHRcdGljb246ICdicml6eS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCcml6eScpXG5cdFx0fSxcblx0XHQnYmVhdmVyIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnYmVhdmVyLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0JlYXZlciBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCd0aHJpdmUgYXJjaGl0ZWN0Jzoge1xuXHRcdFx0aWNvbjogJ3Rocml2ZS5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdUaHJpdmUgQXJjaGl0ZWN0Jylcblx0XHR9LFxuXHRcdCdkaXZpIGJ1aWxkZXInOiB7XG5cdFx0XHRpY29uOiAnZGl2aS5zdmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdEaXZpIEJ1aWxkZXInKVxuXHRcdH0sXG5cdFx0J2d1dGVuYmVyZyc6IHtcblx0XHRcdGljb246ICdndXRlbmJlcmcucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnR3V0ZW5iZXJnJylcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1mb3JtXCI+XG5cdFx0XHQ8T25DbGlja091dHNpZGUgYWN0aW9uPXsoKSA9PiB7XG5cdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib2ItZHJvcGRvd25cIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldE9wZW4odHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VsZWN0XCI+XG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZWRpdG9yLWljb24nXG5cdFx0XHRcdFx0XHRcdHNyYz17bmV2ZURhc2guYXNzZXRzICsgJ2VkaXRvci1pY29ucy8nICsgbWFwW3NlbGVjdGVkXS5pY29ufVxuXHRcdFx0XHRcdFx0XHRhbHQ9e19fKCdCdWlsZGVyIExvZ28nLCAnbmV2ZScpfS8+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bWFwW3NlbGVjdGVkXS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ30vPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdHtvcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobWFwKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZShrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBba2V5XS5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0eXBlPVwic2VhcmNoXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU2VsZWN0b3I7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBFZGl0b3JTZWxlY3RvciBmcm9tICcuL0VkaXRvclNlbGVjdG9yJztcbmltcG9ydCBTdGFydGVyU2l0ZUNhcmQgZnJvbSAnLi9TdGFydGVyU2l0ZUNhcmQnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuY29uc3QgT25ib2FyZGluZyA9ICh7c2l0ZXMsIHVwc2VsbHN9KSA9PiB7XG5cdGNvbnN0IFsgc2VsZWN0ZWRFZGl0b3IsIHNlbGVjdEVkaXRvciBdID0gdXNlU3RhdGUoJ2VsZW1lbnRvcicpO1xuXHRjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xuXG5cdGZ1bmN0aW9uIGZpbHRlclNpdGVzKHNpdGVzKSB7XG5cblx0XHRpZiAoISBzZWFyY2hRdWVyeSkge1xuXHRcdFx0cmV0dXJuIHNpdGVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhzaXRlcykucmVkdWNlKChyZXN1bHRzLCBzbHVnKSA9PiB7XG5cdFx0XHRyZXR1cm4gLTEgPT09IHNpdGVzW3NsdWddLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSA/XG5cdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucmVzdWx0cyxcblx0XHRcdFx0XHRbc2x1Z106IHNpdGVzW3NsdWddXG5cdFx0XHRcdH07XG5cdFx0fSwge30pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyU2l0ZXMoKSB7XG5cdFx0aWYgKCEgc2l0ZXNbc2VsZWN0ZWRFZGl0b3JdKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJTaXRlcyhzaXRlc1tzZWxlY3RlZEVkaXRvcl0pO1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJlZCkubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCBzbHVnPXtzbHVnfSBkYXRhPXtmaWx0ZXJlZFtzbHVnXX0vPjtcblx0XHR9KTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyVXBzZWxscygpIHtcblx0XHRpZiAoISB1cHNlbGxzW3NlbGVjdGVkRWRpdG9yXSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyU2l0ZXModXBzZWxsc1tzZWxlY3RlZEVkaXRvcl0pO1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJlZCkubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCB1cHNlbGw9e3RydWV9IHNsdWc9e3NsdWd9IGRhdGE9e2ZpbHRlcmVkW3NsdWddfS8+O1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWhlYWRcIj5cblx0XHRcdFx0PGgyPntfXygnUmVhZHkgdG8gdXNlIHByZS1idWlsdCB3ZWJzaXRlcyB3aXRoIDEtY2xpY2sgaW5zdGFsbGF0aW9uJywgJ25ldmUnKX08L2gyPlxuXHRcdFx0XHQ8cD57X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4gWW91IGp1c3QgbmVlZCB0byBjaG9vc2UgeW91ciBmYXZvcml0ZSwgYW5kIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmcgZWxzZS4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0b3JTZWxlY3RvclxuXHRcdFx0XHRcdG9uU2VhcmNoPXsocXVlcnkpID0+IHtcblx0XHRcdFx0XHRcdHNldFNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdHF1ZXJ5PXtzZWFyY2hRdWVyeX1cblx0XHRcdFx0XHRzZWxlY3RlZD17c2VsZWN0ZWRFZGl0b3J9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlZGl0b3IpID0+IHtcblx0XHRcdFx0XHRcdHNlbGVjdEVkaXRvcihlZGl0b3IpO1xuXHRcdFx0XHRcdH19Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXNpdGVzXCI+XG5cdFx0XHRcdFx0e3NpdGVzICYmIHJlbmRlclNpdGVzKCl9XG5cdFx0XHRcdFx0e3Vwc2VsbHMgJiYgcmVuZGVyVXBzZWxscygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0Y29uc3Qge2dldFNpdGVzLCBnZXRVcHNlbGxzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7XG5cdFx0c2l0ZXM6IGdldFNpdGVzKCksXG5cdFx0dXBzZWxsczogZ2V0VXBzZWxscygpXG5cdH07XG59KShPbmJvYXJkaW5nKTtcbiIsImNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBTdGFydGVyU2l0ZUNhcmQgPSAoe3NsdWcsIGRhdGEsIHVwc2VsbH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmF2XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpY29uPVwic3Rhci1maWxsZWRcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj57X18oJ1ByZXZpZXcnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiaW1wb3J0XCI+e19fKCdJbXBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuXHRcdFx0XHR7dXBzZWxsICYmIDxzcGFuIGNsYXNzTmFtZT1cInByby1iYWRnZVwiPntfXygnUHJvJywgJ25ldmUnKX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3RhcnRlclNpdGVDYXJkO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTaXRlcyhzaXRlcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NJVEVTJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlc31cblx0XHR9O1xuXHR9LFxuXHRzZXRVcHNlbGxzKHVwc2VsbHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9VUFNFTExTJyxcblx0XHRcdHBheWxvYWQ6IHt1cHNlbGxzfVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzaXRlczogbnVsbCxcblx0dXBzZWxsczogbnVsbFxufTtcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfU0lURVMnOlxuXHRcdFx0Y29uc3Qge3NpdGVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNpdGVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9VUFNFTExTJzpcblx0XHRcdGNvbnN0IHt1cHNlbGxzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwc2VsbHNcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0U2l0ZXM6IChzdGF0ZSkgPT4gc3RhdGUuc2l0ZXMsXG5cdGdldFVwc2VsbHM6IChzdGF0ZSkgPT4gc3RhdGUudXBzZWxsc1xufTtcbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IElucHV0Rm9ybSA9ICh7c2x1ZywgbGFiZWwsIHBsYWNlaG9sZGVyLCBnZXRPcHRpb24sIHNldFRvYXN0LCBjaGFuZ2VPcHRpb259KSA9PiB7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShnZXRPcHRpb24oc2x1ZykpO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0ZXh0Jz5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtcblx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKHNsdWcsIHZhbHVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KHRydWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3Qoci5tZXNzYWdlID8gci5tZXNzYWdlIDogZmFsc2UpO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0+XG5cdFx0XHRcdHtsYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj17c2x1Z30+e2xhYmVsfTwvbGFiZWw+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGlkPXtzbHVnfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e1xuXHRcdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bG9hZGluZyA/ICdpcy1sb2FkaW5nJyA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17bG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTYXZlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0aWNvbj17bG9hZGluZyA/ICd1cGRhdGUnIDogJ2VkaXRvci1icmVhayd9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoSW5wdXRGb3JtKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb24gYXMgY2hhbmdlU2V0dGluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVG9nZ2xlID0gKHtzbHVnLCBsYWJlbCwgZ2V0T3B0aW9uLCBjaGFuZ2VPcHRpb24sIHNldFRvYXN0fSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0b2dnbGUnPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2hlY2tlZD17Z2V0T3B0aW9uKHNsdWcpfVxuXHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdGNoYW5nZVNldHRpbmcoIHNsdWcsIHZhbHVlICkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCByLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUb2FzdCggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRPcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRPcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShUb2dnbGUpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcbiAgY29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0cmluZ01hcCA9IHtcbiAgICAnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG4gICAgJ2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG4gICAgJ2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG4gICAgICAgICAgaXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuICAgICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgci5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldChkYXRhW2FjdGlvbl0sIHRydWUpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICh7Y3VycmVudFRhYn0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQXJlIHlvdSBhcmUgZW5qb3lpbmcgTmV2ZT8gV2Ugd291bGQgbG92ZSB0byBoZWFyIHlvdXIgZmVlZGJhY2suJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZW5kKG5ldmVEYXNoLmFwaSArICcvdG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IHVwZGF0ZSBvcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyghIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0b2FzdCAmJlxuXHRcdFx0XHRcdDxUb2FzdCBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9IHR5cGU9e3RvYXN0VHlwZX0vPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImNvbnN0IHtTbmFja2Jhcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZUVmZmVjdCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IEdsb2JhbFNuYWNrYmFyID0gKHt0b2FzdCwgc2V0VG9hc3R9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRUb2FzdChudWxsKTtcblx0XHR9LCAzMDAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSB0b2FzdCgpO1xuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRvcGFjaXR5OiBudWxsID09PSBtZXNzYWdlID8gMCA6IDFcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxTbmFja2JhclxuXHRcdFx0XHRjbGFzc05hbWU9J2Rhc2gtbm90aWNlJ1xuXHRcdFx0PlxuXHRcdFx0XHR7J2Jvb2xlYW4nID09PSB0eXBlb2YgbWVzc2FnZSA/XG5cdFx0XHRcdFx0KGZhbHNlID09PSBtZXNzYWdlID9cblx0XHRcdFx0XHRcdF9fKCdDb3VsZCBub3QgVXBkYXRlIE9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpIDpcblx0XHRcdFx0XHR0b2FzdCgpXG5cdFx0XHRcdH1cblx0XHRcdDwvU25hY2tiYXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoR2xvYmFsU25hY2tiYXIpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVGFic0NvbnRlbnQgPSAoe2N1cnJlbnRUYWIsIHNldFRhYn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG5cdFx0PC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgVG9hc3QgPSAoe21lc3NhZ2UsIGRpc21pc3MsIHRpbWUsIHR5cGUgPSAnaW5mbyd9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGlzbWlzcygnJyk7XG5cdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9LCB0aW1lIHx8IDIwMDApO1xuXHR9KTtcblx0Y29uc3QgaWNvbk1hcCA9IHtcblx0XHQnaW5mbyc6ICdpbmZvJyxcblx0XHQnZXJyb3InOiAnbm8nLFxuXHRcdCdzdWNjZXNzJzogJ3llcycsXG5cdFx0J3dhcm5pbmcnOiAnd2FybmluZydcblx0fTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndG9hc3QnLCAnY29tcG9uZW50cy1hbmltYXRlX19hcHBlYXInLCAnaXMtZnJvbS1taWRkbGUnLCB0eXBlIF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxEYXNoaWNvbiBpY29uPXtpY29uTWFwW3R5cGVdfS8+XG5cdFx0XHQ8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcbiIsImNvbnN0IHt1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBjYWxsYmFjaykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuXHRcdFx0aWYgKHJlZi5jdXJyZW50ICYmICEgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdH07XG5cdH0sIFsgcmVmIF0pO1xufTtcblxuY29uc3QgT25DbGlja091dHNpZGUgPSAoe2NoaWxkcmVuLCBhY3Rpb259KSA9PiB7XG5cdGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cdHVzZU91dHNpZGVDbGljayh3cmFwcGVyUmVmLCBhY3Rpb24pO1xuXG5cdHJldHVybiA8ZGl2IHJlZj17d3JhcHBlclJlZn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uQ2xpY2tPdXRzaWRlO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtZGFzaGJvYXJkJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnNcbn0pO1xuXG5pbXBvcnQgb25ib2FyZGluZ1JlZHVjZXIgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgb25ib2FyZGluZ0FjdGlvbnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgb25ib2FyZGluZ1NlbGVjdG9ycyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1vbmJvYXJkaW5nJywge1xuXHRyZWR1Y2VyOiBvbmJvYXJkaW5nUmVkdWNlcixcblx0YWN0aW9uczogb25ib2FyZGluZ0FjdGlvbnMsXG5cdHNlbGVjdG9yczogb25ib2FyZGluZ1NlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0VGFiKHRhYikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1RBQicsXG5cdFx0XHRwYXlsb2FkOiB7dGFifVxuXHRcdH07XG5cdH0sXG5cdHNldFNldHRpbmdzKG9iamVjdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NFVFRJTkdTJyxcblx0XHRcdHBheWxvYWQ6IHtvYmplY3R9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlU3RhdHVzKG1vZHVsZVNsdWcsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdUT0dHTEVfTU9EVUxFJyxcblx0XHRcdHBheWxvYWQ6IHttb2R1bGVTbHVnOiAnbnZfcHJvXycgKyBtb2R1bGVTbHVnICsgJ19zdGF0dXMnLCB2YWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VNb2R1bGVPcHRpb24ob3B0aW9uU2x1Zywgb3B0aW9uVmFsdWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJyxcblx0XHRcdHBheWxvYWQ6IHtvcHRpb25TdGF0dXM6ICdudl9wcm9fJyArIG9wdGlvblNsdWcsIG9wdGlvblZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZUxpY2Vuc2VUaWVyKHRpZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9MSUNFTlNFX1RJRVInLFxuXHRcdFx0cGF5bG9hZDoge3RpZXJ9XG5cdFx0fTtcblx0fSxcblx0c2V0VG9hc3QobWVzc2FnZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX1RPQVNUX01FU1NBR0UnLFxuXHRcdFx0cGF5bG9hZDogbWVzc2FnZVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuaW1wb3J0IHtnZXRUYWJIYXNofSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNldHRpbmdzOiB7fSxcblx0dGllcjogbmV2ZURhc2gucHJvID8gbmV2ZURhc2gubGljZW5zZS50aWVyIDogMCxcblx0dG9hc3Q6IG51bGwsXG5cdGN1cnJlbnRUYWI6ICdzdGFydCdcbn07XG5cbmNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5pZiAobnVsbCAhPT0gaGFzaCkge1xuXHRpbml0aWFsU3RhdGUuY3VycmVudFRhYiA9IGhhc2g7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1RBQic6XG5cdFx0XHRjb25zdCB7dGFifSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRUYWI6IHRhYlxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfU0VUVElOR1MnOlxuXHRcdFx0Y29uc3Qge29iamVjdH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczogb2JqZWN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge21vZHVsZVNsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W21vZHVsZVNsdWddOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJzpcblx0XHRcdGxldCB7b3B0aW9uU3RhdHVzLCBvcHRpb25WYWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFtvcHRpb25TdGF0dXNdOiBvcHRpb25WYWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9MSUNFTlNFX1RJRVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRpZXI6IGFjdGlvbi5wYXlsb2FkLnRpZXJcblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX1RPQVNUX01FU1NBR0UnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvYXN0OiBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRNb2R1bGVTdGF0dXM6IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1ZyArICdfc3RhdHVzJ10sXG5cdGdldE9wdGlvbjogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnXSxcblx0Z2V0TGljZW5zZVRpZXI6IChzdGF0ZSkgPT4gc3RhdGUudGllcixcblx0Z2V0VG9hc3Q6IChzdGF0ZSkgPT4gc3RhdGUudG9hc3QsXG5cdGdldFRhYjogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50VGFiXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgU3RhcnRlclNpdGVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydCc7XG5pbXBvcnQgUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9Qcm8nO1xuaW1wb3J0IFBsdWdpbnMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMnO1xuaW1wb3J0IEhlbHAgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0hlbHAnO1xuaW1wb3J0IENoYW5nZWxvZyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nJztcbmltcG9ydCBGcmVlUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvJztcblxuY29uc3QgZ2V0VXJsUGFyYW0gPSAocGFyYW0pID0+IHtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuXHRyZXR1cm4gdXJsUGFyYW1zLmdldChwYXJhbSk7XG59O1xuXG5jb25zdCBhZGRVcmxIYXNoID0gKGhhc2gpID0+IHtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xufTtcblxuY29uc3QgZ2V0VGFiSGFzaCA9ICgpID0+IHtcblx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdGlmICghIE9iamVjdC5rZXlzKHRhYnMpLmluY2x1ZGVzKGhhc2gpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IHRhYnMgPSB7XG5cdCdzdGFydCc6IHtsYWJlbDogJ0dldHRpbmcgU3RhcnRlZCcsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0IHNldFRhYj17c2V0VGFifS8+fSxcblx0J3BsdWdpbnMnOiB7bGFiZWw6ICdVc2VmdWwgUGx1Z2lucycsIHJlbmRlcjogKHNldFRhYikgPT4gPFBsdWdpbnMvPn0sXG5cdCdoZWxwJzoge2xhYmVsOiAnSGVscCAmIGRvY3MnLCByZW5kZXI6IChzZXRUYWIpID0+IDxIZWxwIHNldFRhYj17c2V0VGFifS8+fSxcblx0J2NoYW5nZWxvZyc6IHtsYWJlbDogJ0NoYW5nZWxvZycsIHJlbmRlcjogKHNldFRhYikgPT4gPENoYW5nZWxvZy8+fSxcblx0J3N0YXJ0ZXItc2l0ZXMnOiB7bGFiZWw6ICdTdGFydGVyIFNpdGVzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnRlclNpdGVzLz59LFxuXHQnZnJlZS1wcm8nOiB7bGFiZWw6ICdGcmVlIHZzIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPEZyZWVQcm8vPn1cbn07XG5cbmlmIChuZXZlRGFzaC5wcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6ICdOZXZlIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuXG5leHBvcnQge1xuXHRnZXRVcmxQYXJhbSxcblx0YWRkVXJsSGFzaCxcblx0Z2V0VGFiSGFzaCxcblx0dGFic1xufTtcbiIsImNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBpc1ZhbGlkKG9wdGlvbiwgb3B0aW9uc0FycmF5KSB7XG5cdGlmICgnbnZfcHJvX3R5cGVraXRfaWQnID09PSBvcHRpb24pIHtcblx0XHRpZiAoISBvcHRpb25zQXJyYXlbJ25ldmVfcHJvX3R5cGVraXRfZGF0YSddKSB7XG5cdFx0XHRyZXR1cm4ge21lc3NhZ2U6IF9fKCdUeXBla2l0IFByb2plY3QgSUQgaXMgaW52YWxpZCcsICduZXZlJyksIHN1Y2Nlc3M6IGZhbHNlfTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=