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
      console.log(results);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVByby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGljZW5zZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvRWRpdG9yU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL1N0YXJ0ZXJTaXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9PbmJvYXJkaW5nL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvc2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz9lYzdjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Jlc3QuanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ3cCIsImVsZW1lbnQiLCJEYXNoaWNvbiIsImNvbXBvbmVudHMiLCJBY2NvcmRpb24iLCJwcm9wcyIsImlzT3BlbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsImNsYXNzZXMiLCJjbGFzc25hbWVzIiwiaGVpZ2h0IiwiZGF0YSIsIndpdGhEaXNwYXRjaCIsIndpdGhTZWxlY3QiLCJjb21wb3NlIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJBcHAiLCJzZXRTZXR0aW5ncyIsInRvYXN0IiwiY3VycmVudFRhYiIsInNldFRhYiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0dGluZ3MiLCJhcGkiLCJsb2FkUHJvbWlzZSIsInRoZW4iLCJtb2RlbHMiLCJTZXR0aW5ncyIsImZldGNoIiwiciIsImRpc3BhdGNoIiwib2JqZWN0IiwidGFiIiwic2VsZWN0IiwiZ2V0VG9hc3QiLCJnZXRUYWIiLCJDYXJkIiwiaWNvbiIsImljb25BbHQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZXMiLCJfXyIsImkxOG4iLCJDaGFuZ2Vsb2ciLCJuZXZlRGFzaCIsImNoYW5nZWxvZyIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJkYXRlIiwidmVyc2lvbiIsInR3ZWFrcyIsImZpeGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZml4IiwidHdlYWsiLCJCdXR0b24iLCJQcm8iLCJmZWF0dXJlRGF0YSIsIml0ZW0iLCJ1cGdyYWRlVVJMIiwiSGVscCIsImFzc2V0cyIsIkhlYWRlciIsInBsdWdpbnMiLCJPYmplY3QiLCJrZXlzIiwic2x1ZyIsIm1vZHVsZXMiLCJpZCIsIlN0YXJ0IiwicmVuZGVyQ3VzdG9taXplckxpbmtzIiwibGlua3MiLCJjdXN0b21pemVyU2hvcnRjdXRzIiwic3BsaXQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhcnRzIiwic2xpY2UiLCJjb2x1bW4iLCJsaW5rIiwidGV4dCIsIlN0YXJ0ZXJTaXRlcyIsInNpdGVzIiwic2V0U2l0ZXMiLCJzZXRVcHNlbGxzIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldCIsIm9uYm9hcmRpbmciLCJyb290Iiwic3VjY2VzcyIsInJlbW90ZSIsInVwc2VsbCIsInVwc2VsbHMiLCJnZXRTaXRlcyIsInVzZVJlZiIsIkZlYXR1cmVSb3ciLCJpbkxpdGUiLCJ0b29sdGlwIiwidG9nZ2xlVG9vbHRpcCIsImZvcmNlVG9vbFRpcCIsInRvZ2dsZUZvcmNlVG9vbHRpcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc2giLCJnZXRUYWJIYXNoIiwicmVuZGVySGVhZCIsInJlbmRlck5hdmlnYXRpb24iLCJzdHJpbmdzIiwiaGVhZGVyIiwidGFicyIsImFkZFVybEhhc2giLCJsYWJlbCIsIkxpY2Vuc2VDYXJkIiwiaXNWaXNpYmxlIiwiY2hhbmdlVGllciIsImxpY2Vuc2UiLCJwcm9BcGkiLCJ2YWxpZCIsImtleSIsInNldEtleSIsInN0YXR1cyIsInNldFN0YXR1cyIsInNldFZhbGlkIiwiZXhwaXJhdGlvbiIsInNldEV4cGlyYXRpb24iLCJzZXRUb2FzdCIsInRvYXN0VHlwZSIsInNldFRvYXN0VHlwZSIsInRvZ2dsZUxpY2Vuc2UiLCJ0b0RvIiwic2VuZCIsImFjdGlvbiIsInJlc3BvbnNlIiwibWVzc2FnZSIsInRpZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcGxhY2UiLCJpbmNsdWRlcyIsImNoYW5nZUxpY2Vuc2VUaWVyIiwibmV3VGllciIsIkxvYWRpbmciLCJBcnJheSIsImZyb20iLCJub3RpZmljYXRpb25zIiwiVG9nZ2xlQ29udHJvbCIsIk1vZHVsZUNhcmQiLCJjaGFuZ2VNb2R1bGVTdGF0dXMiLCJnZXRNb2R1bGVTdGF0dXMiLCJuaWNlbmFtZSIsImF2YWlsYWJpbGl0eUxldmVsIiwib3B0aW9ucyIsIm9yZGVyIiwiZG9jdW1lbnRhdGlvbiIsInJlcXVpcmVkX2FjdGlvbnMiLCJ1cGdyYWRlTGlua3MiLCJyZW5kZXJPcHRpb25zQWNjb3JkaW9ucyIsImdyb3VwIiwib3B0aW9uU2x1ZyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNoYW5nZU9wdGlvbiIsInVybCIsImdldExpY2Vuc2VUaWVyIiwiTm90aWZpY2F0aW9uIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwiY3RhIiwidXBkYXRlIiwiaW5Qcm9ncmVzcyIsInNldEluUHJvZ3Jlc3MiLCJkb25lIiwic2V0RG9uZSIsInVwZGF0ZUVudGl0eSIsImFyZ3MiLCJleGVjdXRlQWN0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGVzIiwiYWpheCIsInBhdGgiLCJwbHVnaW4iLCJOb3RpZmljYXRpb25zIiwiRWRpdG9yU2VsZWN0b3IiLCJvbkNoYW5nZSIsIm9uU2VhcmNoIiwic2VsZWN0ZWQiLCJuaWNlTmFtZSIsIk9uYm9hcmRpbmciLCJzZWxlY3RlZEVkaXRvciIsInNlbGVjdEVkaXRvciIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmaWx0ZXJTaXRlcyIsInJlZHVjZSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicmVuZGVyU2l0ZXMiLCJmaWx0ZXJlZCIsInJlbmRlclVwc2VsbHMiLCJxdWVyeSIsImVkaXRvciIsImdldFVwc2VsbHMiLCJTdGFydGVyU2l0ZUNhcmQiLCJzY3JlZW5zaG90IiwicGF5bG9hZCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiSW5wdXRGb3JtIiwiZ2V0T3B0aW9uIiwic2V0VmFsdWUiLCJjaGFuZ2VTZXR0aW5nIiwiY2hhbmdlTW9kdWxlT3B0aW9uIiwiVG9nZ2xlIiwiYmFubmVyIiwibmFtZSIsImF1dGhvciIsInNldEFjdGlvbiIsInN0cmluZ01hcCIsInByb2dyZXNzIiwiaW5zdGFsbFBsdWdpbiIsIm9rIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJlcnIiLCJTaWRlYmFyIiwibG9nZ2VyIiwidHJhY2tpbmciLCJzZXRUcmFja2luZyIsInBybyIsIlNuYWNrYmFyIiwiR2xvYmFsU25hY2tiYXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJvcGFjaXR5IiwiVGFic0NvbnRlbnQiLCJyZW5kZXIiLCJUb2FzdCIsImRpc21pc3MiLCJ0aW1lIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsImljb25NYXAiLCJ1c2VPdXRzaWRlQ2xpY2siLCJyZWYiLCJjYWxsYmFjayIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9uQ2xpY2tPdXRzaWRlIiwid3JhcHBlclJlZiIsInJlZ2lzdGVyU3RvcmUiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsInNlbGVjdG9ycyIsIm9uYm9hcmRpbmdSZWR1Y2VyIiwib25ib2FyZGluZ0FjdGlvbnMiLCJvbmJvYXJkaW5nU2VsZWN0b3JzIiwiUm9vdCIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlU2x1ZyIsIm9wdGlvblZhbHVlIiwib3B0aW9uU3RhdHVzIiwiZ2V0VXJsUGFyYW0iLCJwYXJhbSIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzdWJzdHJpbmciLCJpc1ZhbGlkIiwib3B0aW9uIiwib3B0aW9uc0FycmF5IiwibW9kdWxlIiwibW9kZWwiLCJzYXZlIiwicm91dGUiLCJzaW1wbGUiLCJyZXF1ZXN0RGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJub25jZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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elAsUUFBUSxDQUFDMFA7QUFIZjtBQUZNLGFBREc7O0FBVW5CLGdCQUFJLFdBQVdGLE1BQWYsRUFBdUI7QUFDdEJ6SSxxQkFBTyxDQUFDNEksSUFBUixHQUFlQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWhTLElBQWYsQ0FBZjtBQUNBOztBQVprQjtBQUFBLG1CQWNObUIsS0FBSyxDQUFDcVEsS0FBRCxFQUFRdEksT0FBUixDQUFMLENBQXNCbEksSUFBdEIsQ0FBMkIsVUFBQytHLFFBQUQsRUFBYztBQUNyRCxxQkFBTzBKLE1BQU0sR0FBRzFKLFFBQUgsR0FBY0EsUUFBUSxDQUFDa0ssSUFBVCxFQUEzQjtBQUNBLGFBRlksQ0FkTTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhQLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIsQyIsImZpbGUiOiIuL2J1aWxkL2J1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBY2NvcmRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2lzT3BlbiwgdGl0bGUsIGNoaWxkcmVufSA9IHByb3BzO1xuXHRjb25zdCBbIG9wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGlzT3Blbik7XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ2FjY29yZGlvbicsIHsnb3Blbic6IG9wZW4sICdjbG9zZWQnOiAhIG9wZW4gfSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGFyaWEtZXhwYW5kZWQ9e29wZW59XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCEgb3Blbil9XG5cdFx0XHQ+XG5cdFx0XHRcdFx0e3RpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRpdGxlXCI+e3RpdGxlfTwvZGl2Pn1cblx0XHRcdFx0XHQ8RGFzaGljb25cblx0XHRcdFx0XHRcdGljb249e29wZW4gPyAnYXJyb3ctdXAtYWx0MicgOiAnYXJyb3ctZG93bi1hbHQyJ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5XCIgc3R5bGU9e3toZWlnaHQ6IG9wZW4gPyAnYXV0bycgOiAnMHB4J319PlxuXHRcdFx0XHR7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBUYWJzQ29udGVudCBmcm9tICcuL1RhYnNDb250ZW50JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gJy4vU25hY2tiYXInO1xuaW1wb3J0IHtnZXRUYWJIYXNofSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IHtnZXQsIHNlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3VzZVN0YXRlLCBGcmFnbWVudCwgdXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEFwcCA9ICh7c2V0U2V0dGluZ3MsIHRvYXN0LCBjdXJyZW50VGFiLCBzZXRUYWJ9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHdwLmFwaS5sb2FkUHJvbWlzZS50aGVuKCgpID0+IHtcblx0XHRcdHNldHRpbmdzID0gbmV3IHdwLmFwaS5tb2RlbHMuU2V0dGluZ3MoKTtcblx0XHRcdHNldHRpbmdzLmZldGNoKCkudGhlbihyID0+IHtcblx0XHRcdFx0c2V0U2V0dGluZ3Mocik7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sIFtdKTtcblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gPExvYWRpbmcvPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PEhlYWRlciBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblx0XHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxOb3RpZmljYXRpb25zLz59XG5cdFx0XHRcdFx0PFRhYnNDb250ZW50IGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7J3N0YXJ0ZXItc2l0ZXMnICE9PSBjdXJyZW50VGFiICYmIDxTaWRlYmFyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9Lz59XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHt0b2FzdCAmJiA8U25hY2tiYXIvPn1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtzZXRTZXR0aW5ncywgc2V0VGFifSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRTZXR0aW5nczogKG9iamVjdCkgPT4gc2V0U2V0dGluZ3Mob2JqZWN0KSxcblx0XHRcdHNldFRhYjogKHRhYikgPT4gc2V0VGFiKHRhYilcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFRvYXN0LCBnZXRUYWJ9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b2FzdDogZ2V0VG9hc3QoKSxcblx0XHRcdGN1cnJlbnRUYWI6IGdldFRhYigpXG5cdFx0fTtcblx0fSlcbikoQXBwKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2ljb24sIGljb25BbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIGNsYXNzTmFtZXN9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsIGNsYXNzTmFtZXMgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IGFsdD17aWNvbkFsdCB8fCAnaWNvbid9Lz59XG4gICAgICAgIHt0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9BY2NvcmRpb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaGFuZ2Vsb2cgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2NoYW5nZWxvZ30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdHtcblx0XHRcdFx0Y2hhbmdlbG9nLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2RhdGUsIHZlcnNpb24sIHR3ZWFrcywgZml4ZXMsIGZlYXR1cmVzfSA9IGVudHJ5O1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID1cblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPntkYXRlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+O1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxBY2NvcmRpb24gaXNPcGVuPXswID09PSBpbmRleH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0XHRcdFx0e2ZlYXR1cmVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXMgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBzdWNjZXNzXCI+e19fKCdGZWF0dXJlcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiA8bGk+e2ZlYXR1cmV9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHtmaXhlcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1Z3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBlcnJvclwiPntfXygnQnVnIEZpeGVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmaXhlcy5tYXAoKGZpeCkgPT4gPGxpPntmaXh9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHt0d2Vha3MgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0d2Vha3MgY2hhbmdlbG9nLWNhdGVnb3J5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+e19fKCdUd2Vha3MnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3R3ZWFrcy5tYXAoKHR3ZWFrKSA9PiA8bGk+e3R3ZWFrfTwvbGk+KX1cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZWxvZztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEZlYXR1cmVSb3cgZnJvbSAnLi4vRmVhdHVyZVJvdyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2ZlYXR1cmVEYXRhfSA9IG5ldmVEYXNoO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY2FyZCB0YWJsZVwiPlxuXHRcdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwidGFibGUtaGVhZFwiPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJsYXJnZVwiLz5cblx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCI+e19fKCdOZXZlJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUgUHJvJywgJ25ldmUnKX08L3RoPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHR7ZmVhdHVyZURhdGEubWFwKChpdGVtKSA9PiA8RmVhdHVyZVJvdyBpdGVtPXtpdGVtfS8+KX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB1cHNlbGxcIj5cblx0XHRcdFx0PHA+e19fKCdHZXQgYWNjZXNzIHRvIGFsbCBQcm8gZmVhdHVyZXMgYW5kIHBvd2VyLXVwIHlvdXIgd2Vic2l0ZScsICduZXZlJyl9PC9wPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aHJlZj17bmV2ZURhc2gudXBncmFkZVVSTH1cblx0XHRcdFx0XHRpc1ByaW1hcnk+XG5cdFx0XHRcdFx0e19fKCdHZXQgTmV2ZSBQcm8gTm93JywgJ25ldmUnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEhlbHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdidW95LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDb250YWN0IFN1cHBvcnQnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2Ugd2FudCB0byBtYWtlIHN1cmUgeW91IGhhdmUgdGhlIGJlc3QgZXhwZXJpZW5jZSB1c2luZyBOZXZlLCBhbmQgdGhhdCBpcyB3aHkgd2UgaGF2ZSBnYXRoZXJlZCBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBoZXJlIGZvciB5b3UuIFdlIGhvcGUgeW91IHdpbGwgZW5qb3kgdXNpbmcgTmV2ZSBhcyBtdWNoIGFzIHdlIGVuam95IGNyZWF0aW5nIGdyZWF0IHByb2R1Y3RzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRcdGlzTGFyZ2VcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd29yZHByZXNzLm9yZy9zdXBwb3J0L3RoZW1lL25ldmUvJ1xuICAgICAgICAgID57X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnbGlzdC5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dhbnQgdG8gZ2V0IHRoZSBnaXN0IG9uIHRoZSBsYXRlc3QgdGhlbWUgY2hhbmdlcz8gSnVzdCBjb25zdWx0IG91ciBjaGFuZ2Vsb2cgYmVsb3cgdG8gZ2V0IGEgdGFzdGUgb2YgdGhlIHJlY2VudCBmaXhlcyBhbmQgZmVhdHVyZXMgaW1wbGVtZW50ZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdjaGFuZ2Vsb2cnKX1cbiAgICAgICAgICA+e19fKCdWaWV3IENoYW5nZWxvZycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAndGFjaG9tZXRlci5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3BlZWQgdXAgeW91ciBzaXRlJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0lmIHlvdSBmaW5kIHlvdXJzZWxmIGluIGEgc2l0dWF0aW9uIHdoZXJlIGV2ZXJ5dGhpbmcgb24geW91ciBzaXRlIGlzIHJ1bm5pbmcgdmVyeSBzbG93bHksIHlvdSBtaWdodCBjb25zaWRlciBoYXZpbmcgYSBsb29rIGF0IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHdoZXJlIHlvdSB3aWxsIGZpbmQgdGhlIG1vc3QgY29tbW9uIGlzc3VlcyBjYXVzaW5nIHRoaXMgYW5kIHBvc3NpYmxlIHNvbHV0aW9ucyBmb3IgZWFjaCBvZiB0aGUgaXNzdWVzLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvNjMtc3BlZWQtdXAteW91ci13b3JkcHJlc3Mtc2l0ZVwiPlxuICAgICAgICAgICAge19fKCdMZWFybiBNb3JlJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdEb2N1bWVudGF0aW9uJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzk0Ni1uZXZlLWRvY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjbG9uZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IHdhbnQgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSB0aGVtZVxcJ3MgZmlsZXMsIHRob3NlIGNoYW5nZXMgYXJlIGxpa2VseSB0byBiZSBvdmVyd3JpdHRlbiB3aGVuIHlvdSBuZXh0IHVwZGF0ZSB0aGUgdGhlbWUuIEluIG9yZGVyIHRvIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZywgeW91IG5lZWQgdG8gY3JlYXRlIGEgY2hpbGQgdGhlbWUuIEZvciB0aGlzLCBwbGVhc2UgZm9sbG93IHRoZSBkb2N1bWVudGF0aW9uIGJlbG93LicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTQtaG93LXRvLWNyZWF0ZS1hLWNoaWxkLXRoZW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Fycm93cy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQnVpbGQgYSBsYW5kaW5nIHBhZ2Ugd2l0aCBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0luIHRoZSBkb2N1bWVudGF0aW9uIGJlbG93IHlvdSB3aWxsIGZpbmQgYW4gZWFzeSB3YXkgdG8gYnVpbGQgYSBncmVhdCBsb29raW5nIGxhbmRpbmcgcGFnZSB1c2luZyBhIGRyYWctYW5kLWRyb3AgY29udGVudCBidWlsZGVyIHBsdWdpbi4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzIxOS1ob3ctdG8tYnVpbGQtYS1sYW5kaW5nLXBhZ2Utd2l0aC1hLWRyYWctYW5kLWRyb3AtY29udGVudC1idWlsZGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFBsdWdpbkNhcmQgZnJvbSAnLi4vUGx1Z2luQ2FyZCc7XG5cbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtwbHVnaW5zfSA9IG5ldmVEYXNoO1xuXG4gIGlmICggISBwbHVnaW5zICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKCBwbHVnaW5zICkubWFwKCAoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiA8UGx1Z2luQ2FyZCBrZXk9e3NsdWd9IHNsdWc9e3NsdWd9IGRhdGE9e3BsdWdpbnNbc2x1Z119Lz47XG4gICAgICAgIH0gKVxuICAgICAgfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBNb2R1bGVDYXJkIGZyb20gJy4uL01vZHVsZUNhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBQcm8gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge21vZHVsZXN9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdHtcblx0XHRcdFx0T2JqZWN0LmtleXMobW9kdWxlcykubWFwKChpZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8TW9kdWxlQ2FyZCBzbHVnPXtpZH0vPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm87XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmNvbnN0IFN0YXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRUYWJ9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnc3F1YXJlcy5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnU3RhcnRlciBTaXRlcycsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdOZXZlIG5vdyBjb21lcyB3aXRoIGEgc2l0ZXMgbGlicmFyeSB3aXRoIHZhcmlvdXMgZGVzaWducyB0byBwaWNrIGZyb20uIFZpc2l0IG91ciBjb2xsZWN0aW9uIG9mIGRlbW9zIHRoYXQgYXJlIGNvbnN0YW50bHkgYmVpbmcgYWRkZWQuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnR2V0dGluZyBTdGFydGVkPyBDaGVjayBoZWxwIGFuZCBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYignaGVscCcpfVxuICAgICAgICAgID57X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImN1c3RvbWl6ZXItcXVpY2stbGlua3NcIlxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjb21wYXNzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDdXN0b21pemVyIHF1aWNrIGxpbmtzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyQ3VzdG9taXplckxpbmtzKCl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5cbmNvbnN0IHJlbmRlckN1c3RvbWl6ZXJMaW5rcyA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSBuZXZlRGFzaC5jdXN0b21pemVyU2hvcnRjdXRzO1xuICBjb25zdCBzcGxpdCA9IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyAyKTtcbiAgY29uc3QgcGFydHMgPSBbIGxpbmtzLnNsaWNlKDAsIHNwbGl0KSwgbGlua3Muc2xpY2Uoc3BsaXQpIF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICB7XG4gICAgICAgIHBhcnRzLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNMaW5rIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0udGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggIT09IGNvbHVtbi5sZW5ndGggLSAxICYmIDxoci8+fVxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7Z2V0fSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL09uYm9hcmRpbmcvTG9hZGluZyc7XG5pbXBvcnQgT25ib2FyZGluZyBmcm9tICcuLi9PbmJvYXJkaW5nL01haW4nO1xuXG5jb25zdCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcblxuY29uc3QgU3RhcnRlclNpdGVzID0gKHtzaXRlcywgc2V0U2l0ZXMsIHNldFVwc2VsbHN9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNpdGVzKSB7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2V0KG5ldmVEYXNoLm9uYm9hcmRpbmcucm9vdCArICcvaW5pdGlhbGl6ZV9zaXRlc19saWJyYXJ5JykudGhlbigocikgPT4ge1xuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0aWYgKCEgci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0c2V0RXJyb3IodHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3Qge3JlbW90ZSwgdXBzZWxsfSA9IHIuZGF0YTtcblx0XHRcdFx0XHRzZXRTaXRlcyhyZW1vdGUpO1xuXHRcdFx0XHRcdHNldFVwc2VsbHModXBzZWxsKTtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0aWYgKGVycm9yKSB7XG5cdFx0cmV0dXJuIDxoMT5FcnJvci48L2gxPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0bG9hZGluZyA/IDxMb2FkaW5nLz4gOiA8T25ib2FyZGluZy8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFNpdGVzLCBzZXRVcHNlbGxzfSA9IGRpc3BhdGNoKCduZXZlLW9uYm9hcmRpbmcnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0U2l0ZXM6IChzaXRlcykgPT4gc2V0U2l0ZXMoc2l0ZXMpLFxuXHRcdFx0c2V0VXBzZWxsczogKHVwc2VsbHMpID0+IHNldFVwc2VsbHModXBzZWxscylcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFNpdGVzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNpdGVzOiBnZXRTaXRlcygpXG5cdFx0fTtcblx0fSlcbikoU3RhcnRlclNpdGVzKTtcbiIsImNvbnN0IHtEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3VzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgT25DbGlja091dHNpZGUgZnJvbSAnLi9VdGlscy9PbkNsaWNrT3V0c2lkZSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgRmVhdHVyZVJvdyA9ICh7aXRlbX0pID0+IHtcblx0Y29uc3Qge3RpdGxlLCBkZXNjcmlwdGlvbiwgaW5MaXRlfSA9IGl0ZW07XG5cdGNvbnN0IFsgdG9vbHRpcCwgdG9nZ2xlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIGZvcmNlVG9vbFRpcCwgdG9nZ2xlRm9yY2VUb29sdGlwIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8dHIgY2xhc3NOYW1lPVwiZmVhdHVyZS1yb3dcIj5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJsYXJnZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZlYXQtd3JhcFwiPlxuXHRcdFx0XHRcdDxoND57dGl0bGV9PC9oND5cblx0XHRcdFx0XHQ8T25DbGlja091dHNpZGUgYWN0aW9uPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2dnbGVGb3JjZVRvb2x0aXAoZmFsc2UpO1xuXHRcdFx0XHRcdH19PiA8YVxuXHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVRvb2x0aXAodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0dG9nZ2xlRm9yY2VUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8RGFzaGljb24gaWNvbj1cImluZm9cIi8+XG5cdFx0XHRcdFx0XHR7KHRvb2x0aXAgfHwgZm9yY2VUb29sVGlwKSAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2luZGljYXRvcicsIHsnZXJyb3InOiAhIGluTGl0ZSwgJ3N1Y2Nlc3MnOiBpbkxpdGV9IF0pfT5cblx0XHRcdFx0PERhc2hpY29uIHNpemU9ezMwfSBpY29uPXtpbkxpdGUgPyAneWVzJyA6ICduby1hbHQnfS8+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cImluZGljYXRvciBzdWNjZXNzXCI+XG5cdFx0XHRcdDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj1cInllc1wiLz5cblx0XHRcdDwvdGQ+XG5cdFx0PC90cj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVSb3c7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7YWRkVXJsSGFzaCwgZ2V0VGFiSGFzaCwgdGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgPT09IGhhc2gpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cHJvcHMuc2V0VGFiKGhhc2gpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0e3JlbmRlckhlYWQoKX1cblx0XHRcdFx0e3JlbmRlck5hdmlnYXRpb24ocHJvcHMpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5jb25zdCByZW5kZXJIZWFkID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntuZXZlRGFzaC5zdHJpbmdzLmhlYWRlcn08L2gxPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPntuZXZlRGFzaC52ZXJzaW9ufTwvc3Bhbj5cblx0XHRcdDxpbWcgc3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnL2xvZ28uc3ZnJ30gYWx0PXtfXygnTmV2ZSBUaGVtZSBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0e09iamVjdC5rZXlzKHRhYnMpLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxsaT48YVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjdXJyZW50VGFiID09PSBpdGVtID8gJ2FjdGl2ZScgOiAnJ31cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0c2V0VGFiKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRhZGRVcmxIYXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+e3RhYnNbaXRlbV0ubGFiZWx9XG5cdFx0XHRcdFx0PC9hPjwvbGk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9KX1cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHtzZW5kfSBmcm9tICcuLi91dGlscy9yZXN0JztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5cbmNvbnN0IExpY2Vuc2VDYXJkID0gKHtpc1Zpc2libGUsIGNoYW5nZVRpZXJ9KSA9PiB7XG5cdGNvbnN0IHtsaWNlbnNlLCBwcm9BcGl9ID0gbmV2ZURhc2g7XG5cdGNvbnN0IFsga2V5LCBzZXRLZXkgXSA9IHVzZVN0YXRlKGxpY2Vuc2UgJiYgJ3ZhbGlkJyA9PT0gbGljZW5zZS52YWxpZCA/IGxpY2Vuc2Uua2V5IHx8ICcnIDogJycpO1xuXHRjb25zdCBbIHN0YXR1cywgc2V0U3RhdHVzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFsgdmFsaWQsIHNldFZhbGlkIF0gPSB1c2VTdGF0ZShsaWNlbnNlLnZhbGlkIHx8ICdpbnZhbGlkJyk7XG5cdGNvbnN0IFsgZXhwaXJhdGlvbiwgc2V0RXhwaXJhdGlvbiBdID0gdXNlU3RhdGUobGljZW5zZS5leHBpcmF0aW9uIHx8ICcnKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblxuXHRpZiAoISBpc1Zpc2libGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHRvZ2dsZUxpY2Vuc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9EbyA9ICd2YWxpZCcgPT09IHZhbGlkID8gJ2RlYWN0aXZhdGUnIDogJ2FjdGl2YXRlJztcblx0XHRzZXRTdGF0dXMoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICdhY3RpdmF0aW5nJyA6ICdkZWFjdGl2YXRpbmcnKTtcblx0XHRzZW5kKHByb0FwaSArICcvdG9nZ2xlX2xpY2Vuc2UnLCB7a2V5LCBhY3Rpb246IHRvRG99KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0c2V0VG9hc3RUeXBlKHJlc3BvbnNlLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InKTtcblx0XHRcdHNldEtleSgnYWN0aXZhdGUnID09PSB0b0RvID8ga2V5IDogJycpO1xuXHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRzZXRFeHBpcmF0aW9uKHJlc3BvbnNlLmV4cGlyYXRpb24pO1xuXHRcdFx0c2V0VmFsaWQocmVzcG9uc2Uuc3VjY2VzcyAmJiAnYWN0aXZhdGUnID09PSB0b0RvID8gJ3ZhbGlkJyA6ICdub3RfYWN0aXZlJyk7XG5cdFx0XHRzZXRTdGF0dXMoZmFsc2UpO1xuXHRcdFx0bmV2ZURhc2gubGljZW5zZS5leHBpcmF0aW9uID0gcmVzcG9uc2UuZXhwaXJhdGlvbjtcblx0XHRcdGNoYW5nZVRpZXIocmVzcG9uc2UudGllciB8fCAxKTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmQgbGljZW5zZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0PGg0PntfXygnTmV2ZSBQcm8gQWRkb24gbGljZW5zZScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0PHA+RW50ZXIgeW91ciBsaWNlbnNlIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vc3RvcmUudGhlbWVpc2xlLmNvbVwiPlRoZW1lSXNsZTwvYT4gcHVyY2hhc2UgaGlzdG9yeSBpbiBvcmRlciB0byBnZXRcblx0XHRcdFx0XHRwbHVnaW4gdXBkYXRlczwvcD5cblx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwibGljZW5zZS1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZUxpY2Vuc2UoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImxpY2Vuc2UtZmllbGRcIlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyd2YWxpZCcgPT09IHZhbGlkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEtleShlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHQndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdFx0JyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicgKyBrZXkuc2xpY2UoLTUpIDpcblx0XHRcdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnRW50ZXIgTGljZW5zZSBLZXknLCAnbmV2ZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5PXsndmFsaWQnICE9PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5PXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdGF0dXMgfHwgISBrZXl9XG5cdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHR7ISBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHQoJ3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGUnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdBY3RpdmF0ZScsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0XHRcdCgnYWN0aXZhdGluZycgPT09IHN0YXR1cyA/XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGluZycsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0RlYWN0aXZhdGluZycsICduZXZlJylcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdHt0b2FzdCAmJiA8VG9hc3QgdHlwZT17dG9hc3RUeXBlfSBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9Lz59XG5cdFx0XHRcdHshIFsgJ25vdF9hY3RpdmUnLCAnaW52YWxpZCcgXS5pbmNsdWRlcyh2YWxpZCkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaWNlbnNlLWZvb3RlclwiPlxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZXMoWyAnc3RhdHVzLWljb24nLCAndmFsaWQnID09PSB2YWxpZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicgXSlcblx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdDxEYXNoaWNvbiBzaXplPXsxNH0gaWNvbj17J3ZhbGlkJyA9PT0gdmFsaWQgPyAneWVzJyA6ICdubyd9Lz5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZhbGlkaXR5XCI+XG5cdFx0XHRcdFx0XHRcdHsndmFsaWQnID09PSB2YWxpZCA/IF9fKCdWYWxpZCcsICduZXZlJykgOiBfXygnRXhwaXJlZCcsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7ZXhwaXJhdGlvbiAmJlxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4tPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJleHBpcmVzXCI+XG5cdFx0XHRcdFx0XHR7KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZXMnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0V4cGlyZWQnLCAnbmV2ZScpKSArICcgJyArIGV4cGlyYXRpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdGNvbnN0IHtjaGFuZ2VMaWNlbnNlVGllcn0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VUaWVyOiAobmV3VGllcikgPT4ge1xuXHRcdFx0Y2hhbmdlTGljZW5zZVRpZXIobmV3VGllcik7XG5cdFx0fVxuXHR9O1xufSkoTGljZW5zZUNhcmQpO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vY2stZGFzaFwiPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmcgbG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb24gbG9hZGluZ1wiPnYyLjYuMjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBsb2dvXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKEFycmF5KDYpKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8bGk+PGEgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz48L2xpPjtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L25hdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bmV2ZURhc2gubm90aWZpY2F0aW9ucyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG5cdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBsb2FkaW5nIHBsYWNlaG9sZGVyXCIvPjtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudCBjb2x1bW5zIHN0YXJ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJsb2FkaW5nIGNvbXBvbmVudHMtYnV0dG9uIGlzLWJ1dHRvbiBpcy1kZWZhdWx0IGlzLXByaW1hcnlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBjb2wtbGFzdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9taXplci1xdWljay1saW5rc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZyBpY29uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cImxvYWRpbmcgdGl0bGVcIi8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvYXNpZGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi9BY2NvcmRpb24nO1xuaW1wb3J0IElucHV0Rm9ybSBmcm9tICcuL09wdGlvbnMvSW5wdXRGb3JtJztcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi9PcHRpb25zL1RvZ2dsZSc7XG5pbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtCdXR0b24sIFRvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7RnJhZ21lbnQsIHVzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IE1vZHVsZUNhcmQgPSAoe3NsdWcsIHNldFRvYXN0LCBjaGFuZ2VNb2R1bGVTdGF0dXMsIGdldE1vZHVsZVN0YXR1cywgdGllcn0pID0+IHtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHtcblx0XHRuaWNlbmFtZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRhdmFpbGFiaWxpdHlMZXZlbCxcblx0XHRvcHRpb25zLFxuXHRcdG9yZGVyLFxuXHRcdGxpbmtzLFxuXHRcdGRvY3VtZW50YXRpb24sXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdHJlcXVpcmVkX2FjdGlvbnNcblx0fSA9IG5ldmVEYXNoLm1vZHVsZXNbc2x1Z107XG5cdGNvbnN0IHt1cGdyYWRlTGlua3N9ID0gbmV2ZURhc2g7XG5cblx0ZnVuY3Rpb24gcmVuZGVyT3B0aW9uc0FjY29yZGlvbnMoKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMubWFwKChncm91cCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsLCBvcHRpb25zfSA9IGdyb3VwO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEFjY29yZGlvbiB0aXRsZT17bGFiZWx9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMob3B0aW9ucykubWFwKChvcHRpb25TbHVnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHtsYWJlbCwgdHlwZSwgcGxhY2Vob2xkZXJ9ID0gb3B0aW9uc1tvcHRpb25TbHVnXTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RleHQnID09PSB0eXBlICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRGb3JtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2x1Zz17b3B0aW9uU2x1Z31cblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHsndG9nZ2xlJyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9BY2NvcmRpb24+XG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbW9kdWxlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e25pY2VuYW1lfTwvaDM+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aWVyIDwgYXZhaWxhYmlsaXR5TGV2ZWwgP1xuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBocmVmPXt1cGdyYWRlTGlua3NbYXZhaWxhYmlsaXR5TGV2ZWxdfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwZ3JhZGUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4gOlxuXHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dldE1vZHVsZVN0YXR1cyhzbHVnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlLCB0cnVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHIuc3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCh2YWx1ZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBBY3RpdmF0ZWQnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnTW9kdWxlIERlYWN0aXZhdGVkLicsICduZXZlJykpICsgYCAoJHtuaWNlbmFtZX0pYCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgYWN0aXZhdGUgbW9kdWxlLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0e2Rlc2NyaXB0aW9uICsgJyAnfVxuXHRcdFx0XHRcdHtkb2N1bWVudGF0aW9uICYmXG5cdFx0XHRcdFx0PGEgaHJlZj17ZG9jdW1lbnRhdGlvbi51cmx9PntfXygnTGVhcm4gTW9yZScsICduZXZlJyl9PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHR7bGlua3MgJiYgZ2V0TW9kdWxlU3RhdHVzKHNsdWcpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuXHRcdFx0XHRcdHtsaW5rcy5tYXAoKGxpbmspID0+IDxCdXR0b24gaXNTZWNvbmRhcnkgaHJlZj17bGluay51cmx9PntsaW5rLmxhYmVsfTwvQnV0dG9uPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHsoMCA8IG9wdGlvbnMubGVuZ3RoICYmIHRydWUgPT09IGdldE1vZHVsZVN0YXR1cyhzbHVnKSkgJiZcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtb3B0aW9uc1wiPlxuXHRcdFx0XHRcdHtyZW5kZXJPcHRpb25zQWNjb3JkaW9ucygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7Z2V0TW9kdWxlU3RhdHVzLCBnZXRMaWNlbnNlVGllcn0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE1vZHVsZVN0YXR1czogKHNsdWcpID0+IGdldE1vZHVsZVN0YXR1cyhzbHVnKSxcblx0XHRcdHRpZXI6IGdldExpY2Vuc2VUaWVyKClcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVTdGF0dXMsIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VNb2R1bGVTdGF0dXM6IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlU3RhdHVzKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShNb2R1bGVDYXJkKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBOb3RpZmljYXRpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgWyBoaWRkZW4sIHNldEhpZGRlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7dGV4dCwgY3RhLCB0eXBlLCB1cGRhdGV9ID0gcHJvcHMuZGF0YTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFsgZG9uZSwgc2V0RG9uZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NuYW1lcyhcbiAgICBbXG4gICAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAgIHByb3BzLnNsdWcsXG4gICAgICB0eXBlID8gdHlwZSA6ICcnLFxuICAgICAge1xuICAgICAgICAnc3VjY2Vzcyc6IGRvbmUsXG4gICAgICAgICdoaWRkZW4nOiBkb25lXG4gICAgICB9XG4gICAgXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgeyEgZG9uZSA/IDxwPnt0ZXh0fTwvcD4gOiA8cD48RGFzaGljb24gaWNvbj1cInllc1wiLz57X18oJ0RvbmUhJywgJ25ldmUnKX08L3A+fVxuICAgICAgeyhjdGEgJiYgISBkb25lKSAmJlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7J2lzLWxvYWRpbmcnOiBpblByb2dyZXNzfSl9XG4gICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlRW50aXR5KHVwZGF0ZSwgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBpblByb2dyZXNzID9cbiAgICAgICAgICA8c3Bhbj48RGFzaGljb24gaWNvbj1cInVwZGF0ZVwiLz4ge19fKCdJbiBQcm9ncmVzcycsICduZXZlJykgKyAnLi4uJ30gPC9zcGFuPiA6XG4gICAgICAgICAgICBjdGFcbiAgICAgICAgfVxuICAgICAgPC9CdXR0b24+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdXBkYXRlRW50aXR5ID0gKGFyZ3MsIHNldERvbmUsIHNldEluUHJvZ3Jlc3MsIHNldEhpZGRlbikgPT4ge1xuICBpZiAoISBhcmdzLnR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBleGVjdXRlQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICgndGhlbWUnID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXRoZW1lJywge3NsdWc6IGFyZ3Muc2x1Z30pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3RoZW1lLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgncGx1Z2luJyA9PT0gYXJncy50eXBlKSB7XG4gICAgICAgIGlmICghIGFyZ3Muc2x1ZyB8fCAhIGFyZ3MucGF0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB3cC51cGRhdGVzLmFqYXgoJ3VwZGF0ZS1wbHVnaW4nLCB7c2x1ZzogYXJncy5zbHVnLCBwbHVnaW46IGFyZ3MucGF0aH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoJ3BsdWdpbi11cGRhdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gIGV4ZWN1dGVBY3Rpb24oKS50aGVuKCgpID0+IHtcbiAgICBzZXREb25lKHRydWUpO1xuICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgIHNldEhpZGRlbih0cnVlKTtcbiAgfSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gIGlmICghIG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoMSA+IG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAge1xuICAgICAgICBPYmplY3Qua2V5cyhuZXZlRGFzaC5ub3RpZmljYXRpb25zKS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbiBkYXRhPXtuZXZlRGFzaC5ub3RpZmljYXRpb25zW3NsdWddfSBzbHVnPXtzbHVnfS8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XG4iLCJpbXBvcnQgT25DbGlja091dHNpZGUgZnJvbSAnLi4vVXRpbHMvT25DbGlja091dHNpZGUnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuXG5jb25zdCBFZGl0b3JTZWxlY3RvciA9ICh7b25DaGFuZ2UsIG9uU2VhcmNoLCBzZWxlY3RlZH0pID0+IHtcblx0Y29uc3QgbWFwID0ge1xuXHRcdCdlbGVtZW50b3InOiB7XG5cdFx0XHRpY29uOiAnZWxlbWVudG9yLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0VsZW1lbnRvcicpXG5cdFx0fSxcblx0XHQnYnJpenknOiB7XG5cdFx0XHRpY29uOiAnYnJpenkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnQnJpenknKVxuXHRcdH0sXG5cdFx0J2JlYXZlciBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2JlYXZlci5wbmcnLFxuXHRcdFx0bmljZU5hbWU6IF9fKCdCZWF2ZXIgQnVpbGRlcicpXG5cdFx0fSxcblx0XHQndGhyaXZlIGFyY2hpdGVjdCc6IHtcblx0XHRcdGljb246ICd0aHJpdmUucG5nJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnVGhyaXZlIEFyY2hpdGVjdCcpXG5cdFx0fSxcblx0XHQnZGl2aSBidWlsZGVyJzoge1xuXHRcdFx0aWNvbjogJ2Rpdmkuc3ZnJyxcblx0XHRcdG5pY2VOYW1lOiBfXygnRGl2aSBCdWlsZGVyJylcblx0XHR9LFxuXHRcdCdndXRlbmJlcmcnOiB7XG5cdFx0XHRpY29uOiAnZ3V0ZW5iZXJnLnBuZycsXG5cdFx0XHRuaWNlTmFtZTogX18oJ0d1dGVuYmVyZycpXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZm9ybVwiPlxuXHRcdFx0PE9uQ2xpY2tPdXRzaWRlIGFjdGlvbj17KCkgPT4ge1xuXHRcdFx0XHRzZXRPcGVuKGZhbHNlKTtcblx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWRyb3Bkb3duXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRPcGVuKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRzcmM9e25ldmVEYXNoLmFzc2V0cyArICdlZGl0b3ItaWNvbnMvJyArIG1hcFtzZWxlY3RlZF0uaWNvbn1cblx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0PHNwYW4+e21hcFtzZWxlY3RlZF0ubmljZU5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIHNpemU9ezE0fSBpY29uPXtvcGVuID8gJ2Fycm93LXVwLWFsdDInIDogJ2Fycm93LWRvd24tYWx0Mid9Lz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHR7b3BlbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG1hcCkubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBzZWxlY3RlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZShrZXkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2VkaXRvci1pY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtuZXZlRGFzaC5hc3NldHMgKyAnZWRpdG9yLWljb25zLycgKyBtYXBba2V5XS5pY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtfXygnQnVpbGRlciBMb2dvJywgJ25ldmUnKX0vPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttYXBba2V5XS5uaWNlTmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L09uQ2xpY2tPdXRzaWRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRvblNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHR0eXBlPVwic2VhcmNoXCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ1NlYXJjaCBmb3IgYSBzdGFydGVyIHNpdGUnLCAnbmV2ZScpICsgJy4uLid9Lz5cblx0XHRcdFx0PGltZyBzcmM9e25ldmVEYXNoLmFzc2V0cyArICcvc2VhcmNoLnN2Zyd9IGFsdD17X18oJ1NlYXJjaCBJY29uJyl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yU2VsZWN0b3I7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBFZGl0b3JTZWxlY3RvciBmcm9tICcuL0VkaXRvclNlbGVjdG9yJztcbmltcG9ydCBTdGFydGVyU2l0ZUNhcmQgZnJvbSAnLi9TdGFydGVyU2l0ZUNhcmQnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3dpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuY29uc3QgT25ib2FyZGluZyA9ICh7c2l0ZXMsIHVwc2VsbHN9KSA9PiB7XG5cdGNvbnN0IFsgc2VsZWN0ZWRFZGl0b3IsIHNlbGVjdEVkaXRvciBdID0gdXNlU3RhdGUoJ2VsZW1lbnRvcicpO1xuXHRjb25zdCBbIHNlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xuXG5cdGZ1bmN0aW9uIGZpbHRlclNpdGVzKHNpdGVzKSB7XG5cblx0XHRpZiAoISBzZWFyY2hRdWVyeSkge1xuXHRcdFx0cmV0dXJuIHNpdGVzO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoc2l0ZXMpLnJlZHVjZSgocmVzdWx0cywgc2x1ZykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0cyk7XG5cdFx0XHRyZXR1cm4gLTEgPT09IHNpdGVzW3NsdWddLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSA/XG5cdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Li4ucmVzdWx0cyxcblx0XHRcdFx0XHRbc2x1Z106IHNpdGVzW3NsdWddXG5cdFx0XHRcdH07XG5cdFx0fSwge30pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyU2l0ZXMoKSB7XG5cdFx0aWYgKCEgc2l0ZXNbc2VsZWN0ZWRFZGl0b3JdKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJTaXRlcyhzaXRlc1tzZWxlY3RlZEVkaXRvcl0pO1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJlZCkubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCBzbHVnPXtzbHVnfSBkYXRhPXtmaWx0ZXJlZFtzbHVnXX0vPjtcblx0XHR9KTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyVXBzZWxscygpIHtcblx0XHRpZiAoISB1cHNlbGxzW3NlbGVjdGVkRWRpdG9yXSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyU2l0ZXModXBzZWxsc1tzZWxlY3RlZEVkaXRvcl0pO1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhmaWx0ZXJlZCkubWFwKChzbHVnKSA9PiB7XG5cdFx0XHRyZXR1cm4gPFN0YXJ0ZXJTaXRlQ2FyZCB1cHNlbGw9e3RydWV9IHNsdWc9e3NsdWd9IGRhdGE9e2ZpbHRlcmVkW3NsdWddfS8+O1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLWhlYWRcIj5cblx0XHRcdFx0PGgyPntfXygnUmVhZHkgdG8gdXNlIHByZS1idWlsdCB3ZWJzaXRlcyB3aXRoIDEtY2xpY2sgaW5zdGFsbGF0aW9uJywgJ25ldmUnKX08L2gyPlxuXHRcdFx0XHQ8cD57X18oJ1dpdGggTmV2ZSwgeW91IGNhbiBjaG9vc2UgZnJvbSBtdWx0aXBsZSB1bmlxdWUgZGVtb3MsIHNwZWNpYWxseSBkZXNpZ25lZCBmb3IgeW91LCB0aGF0IGNhbiBiZSBpbnN0YWxsZWQgd2l0aCBhIHNpbmdsZSBjbGljay4gWW91IGp1c3QgbmVlZCB0byBjaG9vc2UgeW91ciBmYXZvcml0ZSwgYW5kIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmcgZWxzZS4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvYi1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0b3JTZWxlY3RvclxuXHRcdFx0XHRcdG9uU2VhcmNoPXsocXVlcnkpID0+IHtcblx0XHRcdFx0XHRcdHNldFNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdHF1ZXJ5PXtzZWFyY2hRdWVyeX1cblx0XHRcdFx0XHRzZWxlY3RlZD17c2VsZWN0ZWRFZGl0b3J9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlZGl0b3IpID0+IHtcblx0XHRcdFx0XHRcdHNlbGVjdEVkaXRvcihlZGl0b3IpO1xuXHRcdFx0XHRcdH19Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9iLXNpdGVzXCI+XG5cdFx0XHRcdFx0e3NpdGVzICYmIHJlbmRlclNpdGVzKCl9XG5cdFx0XHRcdFx0e3Vwc2VsbHMgJiYgcmVuZGVyVXBzZWxscygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0Y29uc3Qge2dldFNpdGVzLCBnZXRVcHNlbGxzfSA9IHNlbGVjdCgnbmV2ZS1vbmJvYXJkaW5nJyk7XG5cdHJldHVybiB7XG5cdFx0c2l0ZXM6IGdldFNpdGVzKCksXG5cdFx0dXBzZWxsczogZ2V0VXBzZWxscygpXG5cdH07XG59KShPbmJvYXJkaW5nKTtcbiIsImNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBTdGFydGVyU2l0ZUNhcmQgPSAoe3NsdWcsIGRhdGEsIHVwc2VsbH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc3RhcnRlci1zaXRlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmF2XCI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBpY29uPVwic3Rhci1maWxsZWRcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cInByZXZpZXdcIj57X18oJ1ByZXZpZXcnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiaW1wb3J0XCI+e19fKCdJbXBvcnQnLCAnbmV2ZScpfTwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2RhdGEuc2NyZWVuc2hvdCAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e2RhdGEuc2NyZWVuc2hvdH0gYWx0PXtkYXRhLnRpdGxlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuXHRcdFx0XHR7dXBzZWxsICYmIDxzcGFuIGNsYXNzTmFtZT1cInByby1iYWRnZVwiPntfXygnUHJvJywgJ25ldmUnKX08L3NwYW4+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3RhcnRlclNpdGVDYXJkO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTaXRlcyhzaXRlcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NJVEVTJyxcblx0XHRcdHBheWxvYWQ6IHtzaXRlc31cblx0XHR9O1xuXHR9LFxuXHRzZXRVcHNlbGxzKHVwc2VsbHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9VUFNFTExTJyxcblx0XHRcdHBheWxvYWQ6IHt1cHNlbGxzfVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzaXRlczogbnVsbCxcblx0dXBzZWxsczogbnVsbFxufTtcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdTRVRfU0lURVMnOlxuXHRcdFx0Y29uc3Qge3NpdGVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNpdGVzXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1NFVF9VUFNFTExTJzpcblx0XHRcdGNvbnN0IHt1cHNlbGxzfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHVwc2VsbHNcblx0XHRcdH07XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0U2l0ZXM6IChzdGF0ZSkgPT4gc3RhdGUuc2l0ZXMsXG5cdGdldFVwc2VsbHM6IChzdGF0ZSkgPT4gc3RhdGUudXBzZWxsc1xufTtcbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IElucHV0Rm9ybSA9ICh7c2x1ZywgbGFiZWwsIHBsYWNlaG9sZGVyLCBnZXRPcHRpb24sIHNldFRvYXN0LCBjaGFuZ2VPcHRpb259KSA9PiB7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShnZXRPcHRpb24oc2x1ZykpO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0ZXh0Jz5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtcblx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKHNsdWcsIHZhbHVlKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoci5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KHRydWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3Qoci5tZXNzYWdlID8gci5tZXNzYWdlIDogZmFsc2UpO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0+XG5cdFx0XHRcdHtsYWJlbCAmJiA8bGFiZWwgaHRtbEZvcj17c2x1Z30+e2xhYmVsfTwvbGFiZWw+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdGlkPXtzbHVnfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e1xuXHRcdFx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bG9hZGluZyA/ICdpcy1sb2FkaW5nJyA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17bG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTYXZlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0aWNvbj17bG9hZGluZyA/ICd1cGRhdGUnIDogJ2VkaXRvci1icmVhayd9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Z2V0T3B0aW9uXG5cdFx0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0T3B0aW9uOiAoc2x1ZykgPT4gZ2V0T3B0aW9uKHNsdWcpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7Y2hhbmdlTW9kdWxlT3B0aW9uLCBzZXRUb2FzdH0gPSBkaXNwYXRjaCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbmdlT3B0aW9uOiAoc2x1ZywgdmFsdWUpID0+IGNoYW5nZU1vZHVsZU9wdGlvbihzbHVnLCB2YWx1ZSksXG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSlcbikoSW5wdXRGb3JtKTtcblxuIiwiaW1wb3J0IHtjaGFuZ2VPcHRpb24gYXMgY2hhbmdlU2V0dGluZ30gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVG9nZ2xlID0gKHtzbHVnLCBsYWJlbCwgZ2V0T3B0aW9uLCBjaGFuZ2VPcHRpb24sIHNldFRvYXN0fSkgPT4ge1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0b2dnbGUnPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0Y2hlY2tlZD17Z2V0T3B0aW9uKHNsdWcpfVxuXHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXHRcdFx0XHRcdGNoYW5nZVNldHRpbmcoIHNsdWcsIHZhbHVlICkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCByLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNldFRvYXN0KCB0cnVlICk7XG5cdFx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUb2FzdCggZmFsc2UgKTtcblx0XHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRPcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRPcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShUb2dnbGUpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2x1ZywgZGF0YX0gPSBwcm9wcztcbiAgY29uc3Qge2Jhbm5lciwgbmFtZSwgZGVzY3JpcHRpb24sIHZlcnNpb24sIGF1dGhvcn0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGFjdGlvbiwgc2V0QWN0aW9uIF0gPSB1c2VTdGF0ZShkYXRhLmN0YSk7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN0cmluZ01hcCA9IHtcbiAgICAnaW5zdGFsbCc6IHtzdGF0aWM6IF9fKCdJbnN0YWxsJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdJbnN0YWxsaW5nJywgJ25ldmUnKX0sXG4gICAgJ2FjdGl2YXRlJzoge3N0YXRpYzogX18oJ0FjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdBY3RpdmF0aW5nJywgJ25ldmUnKX0sXG4gICAgJ2RlYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnRGVhY3RpdmF0ZScsICduZXZlJyksIHByb2dyZXNzOiBfXygnRGVhY3RpdmF0aW5nJywgJ25ldmUnKX1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsgJ2NhcmQnLCAncGx1Z2luJywgc2x1ZyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtiYW5uZXJ9IGFsdD17X18oJ0Jhbm5lciBJbWFnZScsICduYW1lJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57bmFtZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdWdpbi1kYXRhXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmVyc2lvblwiPnZ7dmVyc2lvbn08L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGx1Z2luLWFjdGlvblwiXG4gICAgICAgICAgaXNQcmltYXJ5PXtbICdpbnN0YWxsJywgJ2FjdGl2YXRlJyBdLmluY2x1ZGVzKGFjdGlvbil9XG4gICAgICAgICAgaXNTZWNvbmRhcnk9eydkZWFjdGl2YXRlJyA9PT0gYWN0aW9ufVxuICAgICAgICAgIGRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEluUHJvZ3Jlc3ModHJ1ZSk7XG4gICAgICAgICAgICBpZiAoJ2luc3RhbGwnID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaW5zdGFsbFBsdWdpbihzbHVnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgci5zdWNjZXNzKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFRvZG8gaGFuZGxlIGVycm9yIHdpdGggdG9hc3RzP1xuICAgICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdldChkYXRhW2FjdGlvbl0sIHRydWUpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuaW1wb3J0IExpY2Vuc2VDYXJkIGZyb20gJy4vTGljZW5zZUNhcmQnO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICh7Y3VycmVudFRhYn0pID0+IHtcblx0Y29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcblx0Y29uc3QgWyB0b2FzdCwgc2V0VG9hc3QgXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgWyB0b2FzdFR5cGUsIHNldFRvYXN0VHlwZSBdID0gdXNlU3RhdGUoJ3N1Y2Nlc3MnKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcFwiPlxuXHRcdFx0e25ldmVEYXNoLnBybyAmJiA8TGljZW5zZUNhcmQgaXNWaXNpYmxlPXsncHJvJyA9PT0gY3VycmVudFRhYn0vPn1cblx0XHRcdDxhc2lkZSBjbGFzc05hbWU9XCJzaWRlYmFyIGNhcmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0xlYXZlIHVzIGEgcmV2aWV3JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnQXJlIHlvdSBhcmUgZW5qb3lpbmcgTmV2ZT8gV2Ugd291bGQgbG92ZSB0byBoZWFyIHlvdXIgZmVlZGJhY2suJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuXHRcdFx0XHRcdFx0e19fKCdKb2luIG91ciBGYWNlYm9vayBHcm91cCcsICduZXZlJyl9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xMTIyLW5ldmUtdXNhZ2UtdHJhY2tpbmdcIj5cblx0XHRcdFx0XHRcdFx0e19fKCdXaGF0IGRvIHdlIHRyYWNrPycsICduZXZlJyl9XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0cmFja2luZ31cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWxsb3cgQW5vbnltb3VzIFRyYWNraW5nJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0VHJhY2tpbmcodmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZW5kKG5ldmVEYXNoLmFwaSArICcvdG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoISByZXNwb25zZS5zdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ2Vycm9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IHVwZGF0ZSBvcHRpb24uIFBsZWFzZSB0cnkgYWdhaW4uJywgJ25ldmUnKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyghIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3RUeXBlKCdzdWNjZXNzJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0b2FzdCAmJlxuXHRcdFx0XHRcdDxUb2FzdCBkaXNtaXNzPXtzZXRUb2FzdH0gbWVzc2FnZT17dG9hc3R9IHR5cGU9e3RvYXN0VHlwZX0vPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FzaWRlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImNvbnN0IHtTbmFja2Jhcn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge3VzZUVmZmVjdCwgdXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IEdsb2JhbFNuYWNrYmFyID0gKHt0b2FzdCwgc2V0VG9hc3R9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRUb2FzdChudWxsKTtcblx0XHR9LCAzMDAwKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSB0b2FzdCgpO1xuXHRjb25zdCBzdHlsZSA9IHtcblx0XHRvcGFjaXR5OiBudWxsID09PSBtZXNzYWdlID8gMCA6IDFcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxTbmFja2JhclxuXHRcdFx0XHRjbGFzc05hbWU9J2Rhc2gtbm90aWNlJ1xuXHRcdFx0PlxuXHRcdFx0XHR7J2Jvb2xlYW4nID09PSB0eXBlb2YgbWVzc2FnZSA/XG5cdFx0XHRcdFx0KGZhbHNlID09PSBtZXNzYWdlID9cblx0XHRcdFx0XHRcdF9fKCdDb3VsZCBub3QgVXBkYXRlIE9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdF9fKCdPcHRpb24gVXBkYXRlZCcsICduZXZlJykpIDpcblx0XHRcdFx0XHR0b2FzdCgpXG5cdFx0XHRcdH1cblx0XHRcdDwvU25hY2tiYXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge3NldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRUb2FzdDogKG1lc3NhZ2UpID0+IHNldFRvYXN0KG1lc3NhZ2UpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoR2xvYmFsU25hY2tiYXIpO1xuXG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7dGFic30gZnJvbSAnLi4vdXRpbHMvY29tbW9uJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgVGFic0NvbnRlbnQgPSAoe2N1cnJlbnRUYWIsIHNldFRhYn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG5cdFx0PC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlRWZmZWN0fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgVG9hc3QgPSAoe21lc3NhZ2UsIGRpc21pc3MsIHRpbWUsIHR5cGUgPSAnaW5mbyd9KSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGlzbWlzcygnJyk7XG5cdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9LCB0aW1lIHx8IDIwMDApO1xuXHR9KTtcblx0Y29uc3QgaWNvbk1hcCA9IHtcblx0XHQnaW5mbyc6ICdpbmZvJyxcblx0XHQnZXJyb3InOiAnbm8nLFxuXHRcdCdzdWNjZXNzJzogJ3llcycsXG5cdFx0J3dhcm5pbmcnOiAnd2FybmluZydcblx0fTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndG9hc3QnLCAnY29tcG9uZW50cy1hbmltYXRlX19hcHBlYXInLCAnaXMtZnJvbS1taWRkbGUnLCB0eXBlIF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxEYXNoaWNvbiBpY29uPXtpY29uTWFwW3R5cGVdfS8+XG5cdFx0XHQ8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2FzdDtcbiIsImNvbnN0IHt1c2VSZWYsIHVzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB1c2VPdXRzaWRlQ2xpY2sgPSAocmVmLCBjYWxsYmFjaykgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuXHRcdFx0aWYgKHJlZi5jdXJyZW50ICYmICEgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXHRcdH07XG5cdH0sIFsgcmVmIF0pO1xufTtcblxuY29uc3QgT25DbGlja091dHNpZGUgPSAoe2NoaWxkcmVuLCBhY3Rpb259KSA9PiB7XG5cdGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cdHVzZU91dHNpZGVDbGljayh3cmFwcGVyUmVmLCBhY3Rpb24pO1xuXG5cdHJldHVybiA8ZGl2IHJlZj17d3JhcHBlclJlZn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uQ2xpY2tPdXRzaWRlO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0NvbXBvbmVudHMvQXBwJztcblxuY29uc3Qge3JlZ2lzdGVyU3RvcmV9ID0gd3AuZGF0YTtcbmNvbnN0IHtyZW5kZXJ9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc3RvcmUvc2VsZWN0b3JzJztcbnJlZ2lzdGVyU3RvcmUoJ25ldmUtZGFzaGJvYXJkJywge1xuXHRyZWR1Y2VyLFxuXHRhY3Rpb25zLFxuXHRzZWxlY3RvcnNcbn0pO1xuXG5pbXBvcnQgb25ib2FyZGluZ1JlZHVjZXIgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvcmVkdWNlcic7XG5pbXBvcnQgb25ib2FyZGluZ0FjdGlvbnMgZnJvbSAnLi9Db21wb25lbnRzL09uYm9hcmRpbmcvc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgb25ib2FyZGluZ1NlbGVjdG9ycyBmcm9tICcuL0NvbXBvbmVudHMvT25ib2FyZGluZy9zdG9yZS9zZWxlY3RvcnMnO1xucmVnaXN0ZXJTdG9yZSgnbmV2ZS1vbmJvYXJkaW5nJywge1xuXHRyZWR1Y2VyOiBvbmJvYXJkaW5nUmVkdWNlcixcblx0YWN0aW9uczogb25ib2FyZGluZ0FjdGlvbnMsXG5cdHNlbGVjdG9yczogb25ib2FyZGluZ1NlbGVjdG9yc1xufSk7XG5cbmNvbnN0IFJvb3QgPSAoKSA9PiA8QXBwLz47XG5yZW5kZXIoXG5cdDxSb290Lz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXZlLWRhc2hib2FyZCcpXG4pO1xuXG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbn0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2V0VGFiKHRhYikge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1RBQicsXG5cdFx0XHRwYXlsb2FkOiB7dGFifVxuXHRcdH07XG5cdH0sXG5cdHNldFNldHRpbmdzKG9iamVjdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnU0VUX1NFVFRJTkdTJyxcblx0XHRcdHBheWxvYWQ6IHtvYmplY3R9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlU3RhdHVzKG1vZHVsZVNsdWcsIHZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdUT0dHTEVfTU9EVUxFJyxcblx0XHRcdHBheWxvYWQ6IHttb2R1bGVTbHVnOiAnbnZfcHJvXycgKyBtb2R1bGVTbHVnICsgJ19zdGF0dXMnLCB2YWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VNb2R1bGVPcHRpb24ob3B0aW9uU2x1Zywgb3B0aW9uVmFsdWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJyxcblx0XHRcdHBheWxvYWQ6IHtvcHRpb25TdGF0dXM6ICdudl9wcm9fJyArIG9wdGlvblNsdWcsIG9wdGlvblZhbHVlfVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZUxpY2Vuc2VUaWVyKHRpZXIpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9MSUNFTlNFX1RJRVInLFxuXHRcdFx0cGF5bG9hZDoge3RpZXJ9XG5cdFx0fTtcblx0fSxcblx0c2V0VG9hc3QobWVzc2FnZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVVBEQVRFX1RPQVNUX01FU1NBR0UnLFxuXHRcdFx0cGF5bG9hZDogbWVzc2FnZVxuXHRcdH07XG5cdH1cbn07XG4iLCIvKiBnbG9iYWwgd3AsIG5ldmVEYXNoICAqL1xuaW1wb3J0IHtnZXRUYWJIYXNofSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNldHRpbmdzOiB7fSxcblx0dGllcjogbmV2ZURhc2gucHJvID8gbmV2ZURhc2gubGljZW5zZS50aWVyIDogMCxcblx0dG9hc3Q6IG51bGwsXG5cdGN1cnJlbnRUYWI6ICdzdGFydCdcbn07XG5cbmNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5pZiAobnVsbCAhPT0gaGFzaCkge1xuXHRpbml0aWFsU3RhdGUuY3VycmVudFRhYiA9IGhhc2g7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnU0VUX1RBQic6XG5cdFx0XHRjb25zdCB7dGFifSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGN1cnJlbnRUYWI6IHRhYlxuXHRcdFx0fTtcblx0XHRjYXNlICdTRVRfU0VUVElOR1MnOlxuXHRcdFx0Y29uc3Qge29iamVjdH0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczogb2JqZWN0XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1RPR0dMRV9NT0RVTEUnOlxuXHRcdFx0Y29uc3Qge21vZHVsZVNsdWcsIHZhbHVlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0W21vZHVsZVNsdWddOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0NIQU5HRV9NT0RVTEVfT1BUSU9OJzpcblx0XHRcdGxldCB7b3B0aW9uU3RhdHVzLCBvcHRpb25WYWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnNldHRpbmdzLFxuXHRcdFx0XHRcdFtvcHRpb25TdGF0dXNdOiBvcHRpb25WYWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ1VQREFURV9MSUNFTlNFX1RJRVInOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRpZXI6IGFjdGlvbi5wYXlsb2FkLnRpZXJcblx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX1RPQVNUX01FU1NBR0UnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHRvYXN0OiBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0fTtcblx0fVxuXHRyZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRNb2R1bGVTdGF0dXM6IChzdGF0ZSwgc2x1ZykgPT4gc3RhdGUuc2V0dGluZ3NbJ252X3Byb18nICsgc2x1ZyArICdfc3RhdHVzJ10sXG5cdGdldE9wdGlvbjogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnXSxcblx0Z2V0TGljZW5zZVRpZXI6IChzdGF0ZSkgPT4gc3RhdGUudGllcixcblx0Z2V0VG9hc3Q6IChzdGF0ZSkgPT4gc3RhdGUudG9hc3QsXG5cdGdldFRhYjogKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50VGFiXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgU3RhcnRlclNpdGVzIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMnO1xuaW1wb3J0IFN0YXJ0IGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9TdGFydCc7XG5pbXBvcnQgUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9Qcm8nO1xuaW1wb3J0IFBsdWdpbnMgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L1BsdWdpbnMnO1xuaW1wb3J0IEhlbHAgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0hlbHAnO1xuaW1wb3J0IENoYW5nZWxvZyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nJztcbmltcG9ydCBGcmVlUHJvIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9GcmVlUHJvJztcblxuY29uc3QgZ2V0VXJsUGFyYW0gPSAocGFyYW0pID0+IHtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcblxuXHRyZXR1cm4gdXJsUGFyYW1zLmdldChwYXJhbSk7XG59O1xuXG5jb25zdCBhZGRVcmxIYXNoID0gKGhhc2gpID0+IHtcblx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xufTtcblxuY29uc3QgZ2V0VGFiSGFzaCA9ICgpID0+IHtcblx0bGV0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xuXG5cdGlmICghIE9iamVjdC5rZXlzKHRhYnMpLmluY2x1ZGVzKGhhc2gpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn07XG5cbmNvbnN0IHRhYnMgPSB7XG5cdCdzdGFydCc6IHtsYWJlbDogJ0dldHRpbmcgU3RhcnRlZCcsIHJlbmRlcjogKHNldFRhYikgPT4gPFN0YXJ0IHNldFRhYj17c2V0VGFifS8+fSxcblx0J3BsdWdpbnMnOiB7bGFiZWw6ICdVc2VmdWwgUGx1Z2lucycsIHJlbmRlcjogKHNldFRhYikgPT4gPFBsdWdpbnMvPn0sXG5cdCdoZWxwJzoge2xhYmVsOiAnSGVscCAmIGRvY3MnLCByZW5kZXI6IChzZXRUYWIpID0+IDxIZWxwIHNldFRhYj17c2V0VGFifS8+fSxcblx0J2NoYW5nZWxvZyc6IHtsYWJlbDogJ0NoYW5nZWxvZycsIHJlbmRlcjogKHNldFRhYikgPT4gPENoYW5nZWxvZy8+fSxcblx0J3N0YXJ0ZXItc2l0ZXMnOiB7bGFiZWw6ICdTdGFydGVyIFNpdGVzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8U3RhcnRlclNpdGVzLz59LFxuXHQnZnJlZS1wcm8nOiB7bGFiZWw6ICdGcmVlIHZzIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPEZyZWVQcm8vPn1cbn07XG5cbmlmIChuZXZlRGFzaC5wcm8pIHtcblx0dGFicy5wcm8gPSB7bGFiZWw6ICdOZXZlIFBybycsIHJlbmRlcjogKHNldFRhYikgPT4gPFByby8+fTtcblx0ZGVsZXRlICh0YWJzWydmcmVlLXBybyddKTtcbn1cblxuXG5leHBvcnQge1xuXHRnZXRVcmxQYXJhbSxcblx0YWRkVXJsSGFzaCxcblx0Z2V0VGFiSGFzaCxcblx0dGFic1xufTtcbiIsImNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBpc1ZhbGlkKG9wdGlvbiwgb3B0aW9uc0FycmF5KSB7XG5cdGlmICgnbnZfcHJvX3R5cGVraXRfaWQnID09PSBvcHRpb24pIHtcblx0XHRpZiAoISBvcHRpb25zQXJyYXlbJ25ldmVfcHJvX3R5cGVraXRfZGF0YSddKSB7XG5cdFx0XHRyZXR1cm4ge21lc3NhZ2U6IF9fKCdUeXBla2l0IFByb2plY3QgSUQgaXMgaW52YWxpZCcsICduZXZlJyksIHN1Y2Nlc3M6IGZhbHNlfTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZU9wdGlvbiA9IChvcHRpb24sIHZhbHVlLCBtb2R1bGUgPSBmYWxzZSkgPT4ge1xuXHRvcHRpb24gPSAnbnZfcHJvXycgKyBvcHRpb24gKyAobW9kdWxlID8gJ19zdGF0dXMnIDogJycpO1xuXHRjb25zdCBtb2RlbCA9IG5ldyB3cC5hcGkubW9kZWxzLlNldHRpbmdzKHtcblx0XHRbb3B0aW9uXTogdmFsdWVcblx0fSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0bW9kZWwuc2F2ZSgpLnRoZW4oKHIpID0+IHtcblx0XHRcdGlmICghIHIgfHwgISByW29wdGlvbl0gPT09IHZhbHVlKSB7XG5cdFx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlKGlzVmFsaWQob3B0aW9uLCByKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAocm91dGUsIHNpbXBsZSA9IGZhbHNlKSA9PiB7XG5cdHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgc2ltcGxlLCB7fSwgJ0dFVCcpO1xufTtcblxuY29uc3QgcmVxdWVzdERhdGEgPSBhc3luYyAocm91dGUsIHNpbXBsZSA9IGZhbHNlLCBkYXRhID0ge30sIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0J3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuXHRcdH1cblx0fTtcblxuXHRpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcblx0XHRvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdHJldHVybiBhd2FpdCBmZXRjaChyb3V0ZSwgb3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlID8gcmVzcG9uc2UgOiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=