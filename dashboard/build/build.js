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
      toast = _ref.toast;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = useState('start'),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTab = _useState4[0],
      setTab = _useState4[1];

  useEffect(function () {
    // send('http://localhost:8080/wp-json/wp/v2/settings', {}).then((r)=>console.log(r));
    var hash = Object(_utils_common__WEBPACK_IMPORTED_MODULE_6__["getTabHash"])();

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
  })), toast() && wp.element.createElement(_Snackbar__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (compose(withDispatch(function (dispatch) {
  var _dispatch = dispatch('neve-dashboard'),
      _setSettings = _dispatch.setSettings;

  return {
    setSettings: function setSettings(object) {
      return _setSettings(object);
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
  }, __('Learn More', 'neve'))), 0 < options.length && true === getModuleStatus(slug) && wp.element.createElement("div", {
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

        setToast(false);
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
/* harmony import */ var _utils_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/rest */ "./src/utils/rest.js");

/* harmony default export */ __webpack_exports__["default"] = ({
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global wp, neveDash  */
var __ = wp.i18n.__;
var initialState = {
  settings: {},
  tier: neveDash.pro ? neveDash.license.tier : 0,
  toast: null
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

      resolve({
        success: true
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvQ2hhbmdlbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVByby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGljZW5zZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Nb2R1bGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvSW5wdXRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09wdGlvbnMvVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VdGlscy9PbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwid3AiLCJlbGVtZW50IiwiRGFzaGljb24iLCJjb21wb25lbnRzIiwiQWNjb3JkaW9uIiwicHJvcHMiLCJpc09wZW4iLCJ0aXRsZSIsImNoaWxkcmVuIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiY2xhc3NuYW1lcyIsImhlaWdodCIsImRhdGEiLCJ3aXRoRGlzcGF0Y2giLCJ3aXRoU2VsZWN0IiwiY29tcG9zZSIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwiQXBwIiwic2V0U2V0dGluZ3MiLCJ0b2FzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY3VycmVudFRhYiIsInNldFRhYiIsImhhc2giLCJnZXRUYWJIYXNoIiwic2V0dGluZ3MiLCJhcGkiLCJsb2FkUHJvbWlzZSIsInRoZW4iLCJtb2RlbHMiLCJTZXR0aW5ncyIsImZldGNoIiwiciIsImRpc3BhdGNoIiwib2JqZWN0Iiwic2VsZWN0IiwiZ2V0VG9hc3QiLCJDYXJkIiwiaWNvbiIsImljb25BbHQiLCJkZXNjcmlwdGlvbiIsImNsYXNzTmFtZXMiLCJfXyIsImkxOG4iLCJDaGFuZ2Vsb2ciLCJuZXZlRGFzaCIsImNoYW5nZWxvZyIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJkYXRlIiwidmVyc2lvbiIsInR3ZWFrcyIsImZpeGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZml4IiwidHdlYWsiLCJCdXR0b24iLCJQcm8iLCJmZWF0dXJlRGF0YSIsIml0ZW0iLCJ1cGdyYWRlVVJMIiwiSGVscCIsImFzc2V0cyIsIkhlYWRlciIsInBsdWdpbnMiLCJPYmplY3QiLCJrZXlzIiwic2x1ZyIsIm1vZHVsZXMiLCJpZCIsIlN0YXJ0IiwicmVuZGVyQ3VzdG9taXplckxpbmtzIiwibGlua3MiLCJjdXN0b21pemVyU2hvcnRjdXRzIiwic3BsaXQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhcnRzIiwic2xpY2UiLCJjb2x1bW4iLCJsaW5rIiwidGV4dCIsIlN0YXJ0ZXJTaXRlcyIsInVzZVJlZiIsIkZlYXR1cmVSb3ciLCJpbkxpdGUiLCJ0b29sdGlwIiwidG9nZ2xlVG9vbHRpcCIsImZvcmNlVG9vbFRpcCIsInRvZ2dsZUZvcmNlVG9vbHRpcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckhlYWQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwic3RyaW5ncyIsImhlYWRlciIsInRhYnMiLCJhZGRVcmxIYXNoIiwibGFiZWwiLCJMaWNlbnNlQ2FyZCIsImlzVmlzaWJsZSIsImNoYW5nZVRpZXIiLCJsaWNlbnNlIiwicHJvQXBpIiwidmFsaWQiLCJrZXkiLCJzZXRLZXkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzZXRWYWxpZCIsImV4cGlyYXRpb24iLCJzZXRFeHBpcmF0aW9uIiwic2V0VG9hc3QiLCJ0b2FzdFR5cGUiLCJzZXRUb2FzdFR5cGUiLCJ0b2dnbGVMaWNlbnNlIiwidG9EbyIsInNlbmQiLCJhY3Rpb24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidGllciIsInRhcmdldCIsInZhbHVlIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiY2hhbmdlTGljZW5zZVRpZXIiLCJuZXdUaWVyIiwiTG9hZGluZyIsIkFycmF5IiwiZnJvbSIsIm5vdGlmaWNhdGlvbnMiLCJUb2dnbGVDb250cm9sIiwiTW9kdWxlQ2FyZCIsImNoYW5nZU1vZHVsZVN0YXR1cyIsImdldE1vZHVsZVN0YXR1cyIsIm5pY2VuYW1lIiwiYXZhaWxhYmlsaXR5TGV2ZWwiLCJvcHRpb25zIiwib3JkZXIiLCJkb2N1bWVudGF0aW9uIiwicmVxdWlyZWRfYWN0aW9ucyIsInVwZ3JhZGVMaW5rcyIsInJlbmRlck9wdGlvbnNBY2NvcmRpb25zIiwiZ3JvdXAiLCJvcHRpb25TbHVnIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2hhbmdlT3B0aW9uIiwidXJsIiwiZ2V0TGljZW5zZVRpZXIiLCJOb3RpZmljYXRpb24iLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJjdGEiLCJ1cGRhdGUiLCJpblByb2dyZXNzIiwic2V0SW5Qcm9ncmVzcyIsImRvbmUiLCJzZXREb25lIiwidXBkYXRlRW50aXR5IiwiYXJncyIsImV4ZWN1dGVBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVwZGF0ZXMiLCJhamF4IiwicGF0aCIsInBsdWdpbiIsIk5vdGlmaWNhdGlvbnMiLCJJbnB1dEZvcm0iLCJnZXRPcHRpb24iLCJzZXRWYWx1ZSIsImNoYW5nZVNldHRpbmciLCJjaGFuZ2VNb2R1bGVPcHRpb24iLCJUb2dnbGUiLCJiYW5uZXIiLCJuYW1lIiwiYXV0aG9yIiwic2V0QWN0aW9uIiwic3RyaW5nTWFwIiwicHJvZ3Jlc3MiLCJpbnN0YWxsUGx1Z2luIiwiZ2V0Iiwib2siLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImVycm9yIiwiZXJyIiwiU2lkZWJhciIsImxvZ2dlciIsInRyYWNraW5nIiwic2V0VHJhY2tpbmciLCJwcm8iLCJTbmFja2JhciIsIkdsb2JhbFNuYWNrYmFyIiwic2V0VGltZW91dCIsInN0eWxlIiwib3BhY2l0eSIsIlRhYnNDb250ZW50IiwicmVuZGVyIiwiVG9hc3QiLCJkaXNtaXNzIiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpY29uTWFwIiwidXNlT3V0c2lkZUNsaWNrIiwicmVmIiwiY2FsbGJhY2siLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJPbkNsaWNrT3V0c2lkZSIsIndyYXBwZXJSZWYiLCJyZWdpc3RlclN0b3JlIiwicmVkdWNlciIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXlsb2FkIiwibW9kdWxlU2x1ZyIsIm9wdGlvblZhbHVlIiwib3B0aW9uU3RhdHVzIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsIm9wdGlvbiIsIm1vZHVsZSIsIm1vZGVsIiwic2F2ZSIsInJvdXRlIiwic2ltcGxlIiwicmVxdWVzdERhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwibm9uY2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLEtBQTZCO0FBQ2xDO0FBQ0E7QUFDQSxFQUFFLFVBQVUsSUFBNEU7QUFDeEY7QUFDQSxFQUFFLGlDQUFxQixFQUFFLG1DQUFFO0FBQzNCO0FBQ0EsR0FBRztBQUFBLG9HQUFDO0FBQ0osRUFBRSxNQUFNLEVBRU47QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREO0FBQ0E7SUFFT0EsUSxHQUFZQyxFQUFFLENBQUNDLE8sQ0FBZkYsUTtJQUNBRyxRLEdBQVlGLEVBQUUsQ0FBQ0csVSxDQUFmRCxROztBQUVQLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3JCQyxNQURxQixHQUNNRCxLQUROLENBQ3JCQyxNQURxQjtBQUFBLE1BQ2JDLEtBRGEsR0FDTUYsS0FETixDQUNiRSxLQURhO0FBQUEsTUFDTkMsUUFETSxHQUNNSCxLQUROLENBQ05HLFFBRE07O0FBQUEsa0JBRUZULFFBQVEsQ0FBQ08sTUFBRCxDQUZOO0FBQUE7QUFBQSxNQUVwQkcsSUFGb0I7QUFBQSxNQUVkQyxPQUZjOztBQUc1QixNQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUMsQ0FBRSxXQUFGLEVBQWU7QUFBQyxZQUFRSCxJQUFUO0FBQWUsY0FBVSxDQUFFQTtBQUEzQixHQUFmLENBQUQsQ0FBMUI7QUFDQSxTQUNDO0FBQUssYUFBUyxFQUFFRTtBQUFoQixLQUNDO0FBQ0MscUJBQWVGLElBRGhCO0FBRUMsYUFBUyxFQUFDLGtCQUZYO0FBR0MsV0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDLENBQUVELElBQUgsQ0FBYjtBQUFBO0FBSFYsS0FLR0YsS0FBSyxJQUFJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBa0NBLEtBQWxDLENBTFosRUFNRSx5QkFBQyxRQUFEO0FBQ0MsUUFBSSxFQUFFRSxJQUFJLEdBQUcsZUFBSCxHQUFxQjtBQURoQyxJQU5GLENBREQsRUFXQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFLLEVBQUU7QUFBQ0ksWUFBTSxFQUFFSixJQUFJLEdBQUcsTUFBSCxHQUFZO0FBQXpCO0FBQXZDLEtBQ0VELFFBQVEsSUFBSUEsUUFEZCxDQVhELENBREQ7QUFpQkEsQ0FyQkQ7O0FBdUJlSix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVtQ0osRUFBRSxDQUFDYyxJO0lBQS9CQyxZLFlBQUFBLFk7SUFBY0MsVSxZQUFBQSxVO0lBQ2RDLE8sR0FBV2pCLEVBQUUsQ0FBQ2lCLE8sQ0FBZEEsTztrQkFDaUNqQixFQUFFLENBQUNDLE87SUFBcENGLFEsZUFBQUEsUTtJQUFVbUIsUSxlQUFBQSxRO0lBQVVDLFMsZUFBQUEsUzs7QUFFM0IsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBMEI7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUFBLGtCQUNMdkIsUUFBUSxDQUFDLElBQUQsQ0FESDtBQUFBO0FBQUEsTUFDN0J3QixPQUQ2QjtBQUFBLE1BQ3BCQyxVQURvQjs7QUFBQSxtQkFFTnpCLFFBQVEsQ0FBQyxPQUFELENBRkY7QUFBQTtBQUFBLE1BRTdCMEIsVUFGNkI7QUFBQSxNQUVqQkMsTUFGaUI7O0FBR3JDUCxXQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0EsUUFBTVEsSUFBSSxHQUFHQyxnRUFBVSxFQUF2Qjs7QUFDQSxRQUFJLFNBQVNELElBQWIsRUFBbUI7QUFDbEJELFlBQU0sQ0FBQ0MsSUFBRCxDQUFOO0FBQ0E7O0FBRUQsUUFBSUUsUUFBSjtBQUNBN0IsTUFBRSxDQUFDOEIsR0FBSCxDQUFPQyxXQUFQLENBQW1CQyxJQUFuQixDQUF3QixZQUFNO0FBQzdCSCxjQUFRLEdBQUcsSUFBSTdCLEVBQUUsQ0FBQzhCLEdBQUgsQ0FBT0csTUFBUCxDQUFjQyxRQUFsQixFQUFYO0FBQ0FMLGNBQVEsQ0FBQ00sS0FBVCxHQUFpQkgsSUFBakIsQ0FBc0IsVUFBQUksQ0FBQyxFQUFJO0FBQzFCZixtQkFBVyxDQUFDZSxDQUFELENBQVg7QUFDQVosa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxPQUhEO0FBSUEsS0FORDtBQU9BLEdBZlEsRUFlTixFQWZNLENBQVQ7O0FBZ0JBLE1BQUlELE9BQUosRUFBYTtBQUNaLFdBQU8seUJBQUMsZ0RBQUQsT0FBUDtBQUNBOztBQUVELFNBQ0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLCtDQUFEO0FBQVEsY0FBVSxFQUFFRSxVQUFwQjtBQUFnQyxVQUFNLEVBQUVDO0FBQXhDLElBREQsRUFFQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDLHlCQUFDLHNEQUFELE9BREQsRUFFQyx5QkFBQyxvREFBRDtBQUFhLGNBQVUsRUFBRUQsVUFBekI7QUFBcUMsVUFBTSxFQUFFQztBQUE3QyxJQUZELENBREQsRUFLQyx5QkFBQyxnREFBRDtBQUFTLGNBQVUsRUFBRUQ7QUFBckIsSUFMRCxDQUZELEVBU0VILEtBQUssTUFBTSx5QkFBQyxpREFBRCxPQVRiLENBREQ7QUFhQSxDQXBDRDs7QUFzQ2VMLHNFQUFPLENBQ3JCRixZQUFZLENBQUMsVUFBQ3NCLFFBQUQsRUFBYztBQUFBLGtCQUNKQSxRQUFRLENBQUMsZ0JBQUQsQ0FESjtBQUFBLE1BQ25CaEIsWUFEbUIsYUFDbkJBLFdBRG1COztBQUUxQixTQUFPO0FBQ05BLGVBQVcsRUFBRSxxQkFBQ2lCLE1BQUQ7QUFBQSxhQUFZakIsWUFBVyxDQUFDaUIsTUFBRCxDQUF2QjtBQUFBO0FBRFAsR0FBUDtBQUdBLENBTFcsQ0FEUyxFQU9yQnRCLFVBQVUsQ0FBQyxVQUFDdUIsTUFBRCxFQUFZO0FBQUEsZ0JBQ0hBLE1BQU0sQ0FBQyxnQkFBRCxDQURIO0FBQUEsTUFDZkMsUUFEZSxXQUNmQSxRQURlOztBQUV0QixTQUFPO0FBQ05sQixTQUFLLEVBQUU7QUFBQSxhQUFNa0IsUUFBUSxFQUFkO0FBQUE7QUFERCxHQUFQO0FBR0EsQ0FMUyxDQVBXLENBQVAsQ0FhYnBCLEdBYmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxJQUFNcUIsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ3BDLEtBQUQsRUFBVztBQUFBLE1BQ2ZxQyxJQURlLEdBQzRDckMsS0FENUMsQ0FDZnFDLElBRGU7QUFBQSxNQUNUQyxPQURTLEdBQzRDdEMsS0FENUMsQ0FDVHNDLE9BRFM7QUFBQSxNQUNBcEMsS0FEQSxHQUM0Q0YsS0FENUMsQ0FDQUUsS0FEQTtBQUFBLE1BQ09xQyxXQURQLEdBQzRDdkMsS0FENUMsQ0FDT3VDLFdBRFA7QUFBQSxNQUNvQnBDLFFBRHBCLEdBQzRDSCxLQUQ1QyxDQUNvQkcsUUFEcEI7QUFBQSxNQUM4QnFDLFVBRDlCLEdBQzRDeEMsS0FENUMsQ0FDOEJ3QyxVQUQ5QjtBQUV0QixTQUNFO0FBQUssYUFBUyxFQUFFakMsaURBQVUsQ0FBQyxDQUFFLE1BQUYsRUFBVWlDLFVBQVYsQ0FBRDtBQUExQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0gsSUFBSSxJQUFJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsT0FBRyxFQUFFQSxJQUEzQjtBQUFpQyxPQUFHLEVBQUVDLE9BQU8sSUFBSTtBQUFqRCxJQURYLEVBRUdwQyxLQUFLLElBQUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUF1QkEsS0FBdkIsQ0FGWixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHcUMsV0FBVyxJQUFJO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBaUNBLFdBQWpDLENBRGxCLEVBRUdwQyxRQUZILENBTEYsQ0FERjtBQVlELENBZEQ7O0FBZ0JlaUMsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUNBO0lBRU9LLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTtJQUNBNUIsUSxHQUFZbEIsRUFBRSxDQUFDQyxPLENBQWZpQixROztBQUVQLElBQU04QixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDM0MsS0FBRCxFQUFXO0FBQUEsa0JBQ1I0QyxRQURRO0FBQUEsTUFDckJDLFNBRHFCLGFBQ3JCQSxTQURxQjtBQUc1QixTQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFRUEsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQUEsUUFDeEJDLElBRHdCLEdBQ2tCRixLQURsQixDQUN4QkUsSUFEd0I7QUFBQSxRQUNsQkMsT0FEa0IsR0FDa0JILEtBRGxCLENBQ2xCRyxPQURrQjtBQUFBLFFBQ1RDLE1BRFMsR0FDa0JKLEtBRGxCLENBQ1RJLE1BRFM7QUFBQSxRQUNEQyxLQURDLEdBQ2tCTCxLQURsQixDQUNESyxLQURDO0FBQUEsUUFDTUMsUUFETixHQUNrQk4sS0FEbEIsQ0FDTU0sUUFETjtBQUUvQixRQUFNbkQsS0FBSyxHQUNWLHlCQUFDLFFBQUQsUUFDQztBQUFNLGVBQVMsRUFBQztBQUFoQixZQUE0QmdELE9BQTVCLENBREQsU0FDK0M7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FBd0JELElBQXhCLENBRC9DLENBREQ7QUFLQSxXQUNDLHlCQUFDLGtEQUFEO0FBQVcsWUFBTSxFQUFFLE1BQU1ELEtBQXpCO0FBQWdDLFdBQUssRUFBRTlDO0FBQXZDLE9BQ0VtRCxRQUFRLElBQ1Q7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFNLGVBQVMsRUFBQztBQUFoQixPQUFpQ1osRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBQW5DLENBREQsQ0FERCxFQUlDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FDRVksUUFBUSxDQUFDUCxHQUFULENBQWEsVUFBQ1EsT0FBRDtBQUFBLGFBQWEscUNBQUtBLE9BQUwsQ0FBYjtBQUFBLEtBQWIsQ0FERixDQUpELENBRkQsRUFXRUYsS0FBSyxJQUNOO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0M7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FBK0JYLEVBQUUsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFqQyxDQURELENBREQsRUFJQztBQUFJLGVBQVMsRUFBQztBQUFkLE9BQ0VXLEtBQUssQ0FBQ04sR0FBTixDQUFVLFVBQUNTLEdBQUQ7QUFBQSxhQUFTLHFDQUFLQSxHQUFMLENBQVQ7QUFBQSxLQUFWLENBREYsQ0FKRCxDQVpELEVBcUJFSixNQUFNLElBQ1A7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQztBQUFNLGVBQVMsRUFBQztBQUFoQixPQUE4QlYsRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQWhDLENBREQsQ0FERCxFQUlDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FDRVUsTUFBTSxDQUFDTCxHQUFQLENBQVcsVUFBQ1UsS0FBRDtBQUFBLGFBQVcscUNBQUtBLEtBQUwsQ0FBWDtBQUFBLEtBQVgsQ0FERixDQUpELENBdEJELENBREQ7QUFrQ0EsR0F6Q0QsQ0FGRixDQUREO0FBZ0RBLENBbkREOztBQXFEZWIsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUNBO0lBRU9GLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTtJQUNBZ0IsTSxHQUFVOUQsRUFBRSxDQUFDRyxVLENBQWIyRCxNOztBQUVQLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUMxRCxLQUFELEVBQVc7QUFBQSxrQkFDQTRDLFFBREE7QUFBQSxNQUNmZSxXQURlLGFBQ2ZBLFdBRGU7QUFFdEIsU0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDQztBQUFPLGFBQVMsRUFBQztBQUFqQixLQUNBO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLElBREQsRUFFQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTJCbEIsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQTdCLENBRkQsRUFHQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTJCQSxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsQ0FBN0IsQ0FIRCxDQURBLEVBTUNrQixXQUFXLENBQUNiLEdBQVosQ0FBZ0IsVUFBQ2MsSUFBRDtBQUFBLFdBQVUseUJBQUMsbURBQUQ7QUFBWSxVQUFJLEVBQUVBO0FBQWxCLE1BQVY7QUFBQSxHQUFoQixDQU5ELENBREQsQ0FERCxFQVlDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxvQ0FBSW5CLEVBQUUsQ0FBQywwREFBRCxFQUE2RCxNQUE3RCxDQUFOLENBREQsRUFFQyx5QkFBQyxNQUFEO0FBQ0MsUUFBSSxFQUFFRyxRQUFRLENBQUNpQixVQURoQjtBQUVDLGFBQVM7QUFGVixLQUdFcEIsRUFBRSxDQUFDLGtCQUFELEVBQXFCLE1BQXJCLENBSEosQ0FGRCxDQVpELENBREQ7QUF1QkEsQ0F6QkQ7O0FBMkJlaUIsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUNBO0lBRU9qQixFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7SUFDQTVCLFEsR0FBWWxCLEVBQUUsQ0FBQ0MsTyxDQUFmaUIsUTtJQUNBNEMsTSxHQUFVOUQsRUFBRSxDQUFDRyxVLENBQWIyRCxNOztBQUVQLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUM5RCxLQUFELEVBQVc7QUFBQSxNQUNmcUIsTUFEZSxHQUNMckIsS0FESyxDQUNmcUIsTUFEZTtBQUV0QixTQUNFLHlCQUFDLFFBQUQsUUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UseUJBQUMsNkNBQUQ7QUFDRSxRQUFJLEVBQUV1QixRQUFRLENBQUNtQixNQUFULEdBQWtCLFVBRDFCO0FBRUUsU0FBSyxFQUFFdEIsRUFBRSxDQUFDLGlCQUFELEVBQW9CLE1BQXBCLENBRlg7QUFHRSxlQUFXLEVBQUVBLEVBQUUsQ0FBQywyTkFBRCxFQUE4TixNQUE5TjtBQUhqQixLQUtFLHlCQUFDLE1BQUQ7QUFDSixhQUFTLE1BREw7QUFFSixXQUFPLE1BRkg7QUFHRSxRQUFJLEVBQUM7QUFIUCxLQUlFQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsTUFBcEIsQ0FKSixDQUxGLENBREYsRUFZRSx5QkFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBRUcsUUFBUSxDQUFDbUIsTUFBVCxHQUFrQixVQUQxQjtBQUVFLFNBQUssRUFBRXRCLEVBQUUsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUZYO0FBR0UsZUFBVyxFQUFFQSxFQUFFLENBQUMsaUpBQUQsRUFBb0osTUFBcEo7QUFIakIsS0FLRSx5QkFBQyxNQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTXBCLE1BQU0sQ0FBQyxXQUFELENBQVo7QUFBQTtBQUZYLEtBR0VvQixFQUFFLENBQUMsZ0JBQUQsRUFBbUIsTUFBbkIsQ0FISixDQUxGLENBWkYsRUF1QkUseUJBQUMsNkNBQUQ7QUFDRSxRQUFJLEVBQUVHLFFBQVEsQ0FBQ21CLE1BQVQsR0FBa0IsZ0JBRDFCO0FBRUUsU0FBSyxFQUFFdEIsRUFBRSxDQUFDLG9CQUFELEVBQXVCLE1BQXZCLENBRlg7QUFHRSxlQUFXLEVBQUVBLEVBQUUsQ0FBQyw4UEFBRCxFQUFpUSxNQUFqUTtBQUhqQixLQUtFLHlCQUFDLE1BQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxRQUFJLEVBQUM7QUFGUCxLQUdHQSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FITCxDQUxGLENBdkJGLENBREYsRUFvQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLHlCQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFRyxRQUFRLENBQUNtQixNQUFULEdBQWtCLFVBRDFCO0FBRUUsU0FBSyxFQUFFdEIsRUFBRSxDQUFDLGVBQUQsRUFBa0IsTUFBbEIsQ0FGWDtBQUdFLGVBQVcsRUFBRUEsRUFBRSxDQUFDLHFHQUFELEVBQXdHLE1BQXhHO0FBSGpCLEtBS0UseUJBQUMsTUFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLFFBQUksRUFBQztBQUZQLEtBSUdBLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixDQUpMLENBTEYsQ0FERixFQWFFLHlCQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFRyxRQUFRLENBQUNtQixNQUFULEdBQWtCLFdBRDFCO0FBRUUsU0FBSyxFQUFFdEIsRUFBRSxDQUFDLHNCQUFELEVBQXlCLE1BQXpCLENBRlg7QUFHRSxlQUFXLEVBQUVBLEVBQUUsQ0FBQywyUEFBRCxFQUE4UCxNQUE5UDtBQUhqQixLQUtFLHlCQUFDLE1BQUQ7QUFDRSxVQUFNLE1BRFI7QUFFRSxRQUFJLEVBQUM7QUFGUCxLQUlHQSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FKTCxDQUxGLENBYkYsRUF5QkUseUJBQUMsNkNBQUQ7QUFDRSxRQUFJLEVBQUVHLFFBQVEsQ0FBQ21CLE1BQVQsR0FBa0IsWUFEMUI7QUFFRSxTQUFLLEVBQUV0QixFQUFFLENBQUMsMkRBQUQsRUFBOEQsTUFBOUQsQ0FGWDtBQUdFLGVBQVcsRUFBRUEsRUFBRSxDQUFDLDBJQUFELEVBQTZJLE1BQTdJO0FBSGpCLEtBS0UseUJBQUMsTUFBRDtBQUNFLFVBQU0sTUFEUjtBQUVFLFFBQUksRUFBQztBQUZQLEtBSUdBLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixDQUpMLENBTEYsQ0F6QkYsQ0FwQ0YsQ0FERjtBQTZFRCxDQS9FRDs7QUFpRmVxQixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQ0E7SUFFT2pELFEsR0FBWWxCLEVBQUUsQ0FBQ0MsTyxDQUFmaUIsUTs7QUFFUCxJQUFNbUQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBLGtCQUNEcEIsUUFEQztBQUFBLE1BQ1pxQixPQURZLGFBQ1pBLE9BRFk7O0FBR25CLE1BQUssQ0FBRUEsT0FBUCxFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQ0UseUJBQUMsUUFBRCxRQUVJQyxNQUFNLENBQUNDLElBQVAsQ0FBYUYsT0FBYixFQUF1Qm5CLEdBQXZCLENBQTRCLFVBQUNzQixJQUFELEVBQVU7QUFDcEMsV0FBTyx5QkFBQyxtREFBRDtBQUFZLFNBQUcsRUFBRUEsSUFBakI7QUFBdUIsVUFBSSxFQUFFQSxJQUE3QjtBQUFtQyxVQUFJLEVBQUVILE9BQU8sQ0FBQ0csSUFBRDtBQUFoRCxNQUFQO0FBQ0QsR0FGRCxDQUZKLENBREY7QUFTRCxDQWhCRDs7QUFrQmVKLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFDQTtJQUVPdkIsRSxHQUFNOUMsRUFBRSxDQUFDK0MsSSxDQUFURCxFO0lBQ0E1QixRLEdBQVlsQixFQUFFLENBQUNDLE8sQ0FBZmlCLFE7O0FBRVAsSUFBTTZDLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUMxRCxLQUFELEVBQVc7QUFBQSxrQkFDSjRDLFFBREk7QUFBQSxNQUNmeUIsT0FEZSxhQUNmQSxPQURlO0FBRXRCLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFSCxNQUFNLENBQUNDLElBQVAsQ0FBWUUsT0FBWixFQUFxQnZCLEdBQXJCLENBQXlCLFVBQUN3QixFQUFELEVBQVE7QUFDaEMsV0FDQyx5QkFBQyxtREFBRDtBQUFZLFVBQUksRUFBRUE7QUFBbEIsTUFERDtBQUdBLEdBSkQsQ0FGRixDQUREO0FBV0EsQ0FiRDs7QUFlZVosa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUNBO0lBRU9qQixFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7SUFDQTVCLFEsR0FBWWxCLEVBQUUsQ0FBQ0MsTyxDQUFmaUIsUTtJQUNBNEMsTSxHQUFVOUQsRUFBRSxDQUFDRyxVLENBQWIyRCxNOztBQUdQLElBQU1jLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUN2RSxLQUFELEVBQVc7QUFBQSxNQUNoQnFCLE1BRGdCLEdBQ05yQixLQURNLENBQ2hCcUIsTUFEZ0I7QUFFdkIsU0FDRSx5QkFBQyxRQUFELFFBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLHlCQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFdUIsUUFBUSxDQUFDbUIsTUFBVCxHQUFrQixhQUQxQjtBQUVFLFNBQUssRUFBRXRCLEVBQUUsQ0FBQyxlQUFELEVBQWtCLE1BQWxCLENBRlg7QUFHRSxlQUFXLEVBQUVBLEVBQUUsQ0FBQyx1SUFBRCxFQUEwSSxNQUExSTtBQUhqQixLQUtFLHlCQUFDLE1BQUQ7QUFDRSxhQUFTLE1BRFg7QUFFSixXQUFPLE1BRkg7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYnBCLFlBQU0sQ0FBQyxlQUFELENBQU47QUFDRDtBQUxILEtBTUVvQixFQUFFLENBQUMscUJBQUQsRUFBd0IsTUFBeEIsQ0FOSixDQUxGLENBREYsRUFjRSx5QkFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBRUcsUUFBUSxDQUFDbUIsTUFBVCxHQUFrQixVQUQxQjtBQUVFLFNBQUssRUFBRXRCLEVBQUUsQ0FBQyxzQ0FBRCxFQUF5QyxNQUF6QyxDQUZYO0FBR0UsZUFBVyxFQUFFQSxFQUFFLENBQUMscUdBQUQsRUFBd0csTUFBeEc7QUFIakIsS0FLRSx5QkFBQyxNQUFEO0FBQ0UsVUFBTSxNQURSO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTXBCLE1BQU0sQ0FBQyxNQUFELENBQVo7QUFBQTtBQUZYLEtBR0VvQixFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FISixDQUxGLENBZEYsQ0FERixFQTJCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UseUJBQUMsNkNBQUQ7QUFDRSxjQUFVLEVBQUMsd0JBRGI7QUFFRSxRQUFJLEVBQUVHLFFBQVEsQ0FBQ21CLE1BQVQsR0FBa0IsYUFGMUI7QUFHRSxTQUFLLEVBQUV0QixFQUFFLENBQUMsd0JBQUQsRUFBMkIsTUFBM0IsQ0FIWDtBQUlFLGVBQVcsRUFBRUEsRUFBRSxDQUFDLHFHQUFELEVBQXdHLE1BQXhHO0FBSmpCLEtBTUcrQixxQkFBcUIsRUFOeEIsQ0FERixDQTNCRixDQURGO0FBd0NELENBMUNEOztBQTZDQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsTUFBTUMsS0FBSyxHQUFHN0IsUUFBUSxDQUFDOEIsbUJBQXZCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBekIsQ0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUFFTixLQUFLLENBQUNPLEtBQU4sQ0FBWSxDQUFaLEVBQWVMLEtBQWYsQ0FBRixFQUF5QkYsS0FBSyxDQUFDTyxLQUFOLENBQVlMLEtBQVosQ0FBekIsQ0FBZDtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVJSSxLQUFLLENBQUNqQyxHQUFOLENBQVUsVUFBQ21DLE1BQUQsRUFBWTtBQUNwQixXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FFSUEsTUFBTSxDQUFDbkMsR0FBUCxDQUFXLFVBQUNjLElBQUQsRUFBT1osS0FBUCxFQUFpQjtBQUMxQixhQUNFLHlCQUFDLFFBQUQsUUFDRSx5QkFBQyxNQUFEO0FBQVEsY0FBTSxNQUFkO0FBQWUsWUFBSSxFQUFFWSxJQUFJLENBQUNzQjtBQUExQixTQUFpQ3RCLElBQUksQ0FBQ3VCLElBQXRDLENBREYsRUFFR25DLEtBQUssS0FBS2lDLE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQixDQUExQixJQUErQixvQ0FGbEMsQ0FERjtBQU1ELEtBUEQsQ0FGSixDQURGO0FBY0QsR0FmRCxDQUZKLENBREY7QUFzQkQsQ0ExQkQ7O0FBNEJlUCxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtJQUNPOUIsRSxHQUFNOUMsRUFBRSxDQUFDK0MsSSxDQUFURCxFO0lBQ0E1QixRLEdBQVlsQixFQUFFLENBQUNDLE8sQ0FBZmlCLFE7O0FBRVAsSUFBTXVFLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNwRixLQUFELEVBQVc7QUFDOUIsU0FDRSx5QkFBQyxRQUFELHdCQURGO0FBS0QsQ0FORDs7QUFRZW9GLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNaT3ZGLFEsR0FBWUYsRUFBRSxDQUFDRyxVLENBQWZELFE7a0JBQytCRixFQUFFLENBQUNDLE87SUFBbENGLFEsZUFBQUEsUTtJQUFVMkYsTSxlQUFBQSxNO0lBQVF2RSxTLGVBQUFBLFM7QUFFekI7QUFDQTs7QUFFQSxJQUFNd0UsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBWTtBQUFBLE1BQVYxQixJQUFVLFFBQVZBLElBQVU7QUFBQSxNQUN2QjFELEtBRHVCLEdBQ08wRCxJQURQLENBQ3ZCMUQsS0FEdUI7QUFBQSxNQUNoQnFDLFdBRGdCLEdBQ09xQixJQURQLENBQ2hCckIsV0FEZ0I7QUFBQSxNQUNIZ0QsTUFERyxHQUNPM0IsSUFEUCxDQUNIMkIsTUFERzs7QUFBQSxrQkFFSzdGLFFBQVEsQ0FBQyxLQUFELENBRmI7QUFBQTtBQUFBLE1BRXRCOEYsT0FGc0I7QUFBQSxNQUViQyxhQUZhOztBQUFBLG1CQUdlL0YsUUFBUSxDQUFDLEtBQUQsQ0FIdkI7QUFBQTtBQUFBLE1BR3RCZ0csWUFIc0I7QUFBQSxNQUdSQyxrQkFIUTs7QUFLOUIsU0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxxQ0FBS3pGLEtBQUwsQ0FERCxFQUVDLHlCQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRSxrQkFBTTtBQUM3QnlGLHdCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDQTtBQUZELFVBRUk7QUFDSCxnQkFBWSxFQUFFLHNCQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLEtBSkU7QUFLSCxnQkFBWSxFQUFFLHNCQUFDRyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBSixtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBLEtBUkU7QUFTSCxXQUFPLEVBQUUsaUJBQUNHLENBQUQsRUFBTztBQUNmQSxPQUFDLENBQUNDLGNBQUY7QUFDQUYsd0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBO0FBWkUsS0FhSCx5QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDO0FBQWYsSUFiRyxFQWNGLENBQUNILE9BQU8sSUFBSUUsWUFBWixLQUNEO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxvQ0FBSW5ELFdBQUosQ0FERCxDQWZHLENBRkosQ0FGRCxDQURELENBREQsRUE2QkM7QUFBSSxhQUFTLEVBQUVoQyxpREFBVSxDQUFDLENBQUUsV0FBRixFQUFlO0FBQUMsZUFBUyxDQUFFZ0YsTUFBWjtBQUFvQixpQkFBV0E7QUFBL0IsS0FBZixDQUFEO0FBQXpCLEtBQ0MseUJBQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxFQUFoQjtBQUFvQixRQUFJLEVBQUVBLE1BQU0sR0FBRyxLQUFILEdBQVc7QUFBM0MsSUFERCxDQTdCRCxFQWdDQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0MseUJBQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxFQUFoQjtBQUFvQixRQUFJLEVBQUM7QUFBekIsSUFERCxDQWhDRCxDQUREO0FBc0NBLENBM0NEOztBQTZDZUQseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNBO0lBRU83QyxFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7SUFDQTNCLFMsR0FBYW5CLEVBQUUsQ0FBQ0MsTyxDQUFoQmtCLFM7O0FBRVAsSUFBTWtELE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNoRSxLQUFELEVBQVc7QUFDekJjLFdBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTVEsSUFBSSxHQUFHQyxnRUFBVSxFQUF2Qjs7QUFDQSxRQUFJLFNBQVNELElBQWIsRUFBbUI7QUFDbEIsYUFBTyxLQUFQO0FBQ0E7O0FBQ0R0QixTQUFLLENBQUNxQixNQUFOLENBQWFDLElBQWI7QUFDQSxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDQyx5Q0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0V3RSxVQUFVLEVBRFosRUFFRUMsZ0JBQWdCLENBQUMvRixLQUFELENBRmxCLENBREQsQ0FERDtBQVFBLENBakJEOztBQW1CQSxJQUFNOEYsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixTQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXlCbEQsUUFBUSxDQUFDb0QsT0FBVCxDQUFpQkMsTUFBMUMsQ0FERCxFQUVDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQTJCckQsUUFBUSxDQUFDTSxPQUFwQyxDQUZELEVBR0M7QUFBSyxPQUFHLEVBQUVOLFFBQVEsQ0FBQ21CLE1BQVQsR0FBa0IsV0FBNUI7QUFBeUMsT0FBRyxFQUFFdEIsRUFBRSxDQUFDLGlCQUFELEVBQW9CLE1BQXBCO0FBQWhELElBSEQsQ0FERDtBQU9BLENBUkQ7O0FBVUEsSUFBTXNELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQy9GLEtBQUQsRUFBVztBQUFBLE1BQzVCb0IsVUFENEIsR0FDTnBCLEtBRE0sQ0FDNUJvQixVQUQ0QjtBQUFBLE1BQ2hCQyxNQURnQixHQUNOckIsS0FETSxDQUNoQnFCLE1BRGdCO0FBRW5DLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFNkMsTUFBTSxDQUFDQyxJQUFQLENBQVkrQixrREFBWixFQUFrQnBELEdBQWxCLENBQXNCLFVBQUNjLElBQUQsRUFBVTtBQUNoQyxXQUNDLHFDQUFJO0FBQ0gsVUFBSSxFQUFDLEdBREY7QUFFSCxlQUFTLEVBQUV4QyxVQUFVLEtBQUt3QyxJQUFmLEdBQXNCLFFBQXRCLEdBQWlDLEVBRnpDO0FBR0gsYUFBTyxFQUFFLGlCQUFDZ0MsQ0FBRCxFQUFPO0FBQ2ZBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBeEUsY0FBTSxDQUFDdUMsSUFBRCxDQUFOO0FBQ0F1Qyx3RUFBVSxDQUFDdkMsSUFBRCxDQUFWO0FBQ0E7QUFQRSxPQVFGc0Msa0RBQUksQ0FBQ3RDLElBQUQsQ0FBSixDQUFXd0MsS0FSVCxDQUFKLENBREQ7QUFZQSxHQWJBLENBREYsQ0FERDtBQWtCQSxDQXBCRDs7QUFzQmVwQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtJQUVPdkIsRSxHQUFNOUMsRUFBRSxDQUFDK0MsSSxDQUFURCxFO3FCQUNvQjlDLEVBQUUsQ0FBQ0csVTtJQUF2QjJELE0sa0JBQUFBLE07SUFBUTVELFEsa0JBQUFBLFE7a0JBQ2NGLEVBQUUsQ0FBQ0MsTztJQUF6QmlCLFEsZUFBQUEsUTtJQUFVbkIsUSxlQUFBQSxRO2VBQ2tCQyxFQUFFLENBQUNjLEk7SUFBL0JFLFUsWUFBQUEsVTtJQUFZRCxZLFlBQUFBLFk7O0FBRW5CLElBQU0yRixXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUE2QjtBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQUEsa0JBQ3RCM0QsUUFEc0I7QUFBQSxNQUN6QzRELE9BRHlDLGFBQ3pDQSxPQUR5QztBQUFBLE1BQ2hDQyxNQURnQyxhQUNoQ0EsTUFEZ0M7O0FBQUEsa0JBRXhCL0csUUFBUSxDQUFDOEcsT0FBTyxJQUFJLFlBQVlBLE9BQU8sQ0FBQ0UsS0FBL0IsR0FBdUNGLE9BQU8sQ0FBQ0csR0FBUixJQUFlLEVBQXRELEdBQTJELEVBQTVELENBRmdCO0FBQUE7QUFBQSxNQUV4Q0EsR0FGd0M7QUFBQSxNQUVuQ0MsTUFGbUM7O0FBQUEsbUJBR2xCbEgsUUFBUSxDQUFDLEtBQUQsQ0FIVTtBQUFBO0FBQUEsTUFHeENtSCxNQUh3QztBQUFBLE1BR2hDQyxTQUhnQzs7QUFBQSxtQkFJcEJwSCxRQUFRLENBQUM4RyxPQUFPLENBQUNFLEtBQVIsSUFBaUIsU0FBbEIsQ0FKWTtBQUFBO0FBQUEsTUFJeENBLEtBSndDO0FBQUEsTUFJakNLLFFBSmlDOztBQUFBLG1CQUtWckgsUUFBUSxDQUFDOEcsT0FBTyxDQUFDUSxVQUFSLElBQXNCLEVBQXZCLENBTEU7QUFBQTtBQUFBLE1BS3hDQSxVQUx3QztBQUFBLE1BSzVCQyxhQUw0Qjs7QUFBQSxtQkFNcEJ2SCxRQUFRLENBQUMsRUFBRCxDQU5ZO0FBQUE7QUFBQSxNQU14Q3VCLEtBTndDO0FBQUEsTUFNakNpRyxRQU5pQzs7QUFBQSxvQkFPWnhILFFBQVEsQ0FBQyxTQUFELENBUEk7QUFBQTtBQUFBLE1BT3hDeUgsU0FQd0M7QUFBQSxNQU83QkMsWUFQNkI7O0FBU2hELE1BQUksQ0FBRWQsU0FBTixFQUFpQjtBQUNoQixXQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFNZSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDM0IsUUFBTUMsSUFBSSxHQUFHLFlBQVlaLEtBQVosR0FBb0IsWUFBcEIsR0FBbUMsVUFBaEQ7QUFDQUksYUFBUyxDQUFDLGVBQWVRLElBQWYsR0FBc0IsWUFBdEIsR0FBcUMsY0FBdEMsQ0FBVDtBQUNBQyw0REFBSSxDQUFDZCxNQUFNLEdBQUcsaUJBQVYsRUFBNkI7QUFBQ0UsU0FBRyxFQUFIQSxHQUFEO0FBQU1hLFlBQU0sRUFBRUY7QUFBZCxLQUE3QixDQUFKLENBQXNEM0YsSUFBdEQsQ0FBMkQsVUFBQzhGLFFBQUQsRUFBYztBQUN4RUwsa0JBQVksQ0FBQ0ssUUFBUSxDQUFDQyxPQUFULEdBQW1CLFNBQW5CLEdBQStCLE9BQWhDLENBQVo7QUFDQWQsWUFBTSxDQUFDLGVBQWVVLElBQWYsR0FBc0JYLEdBQXRCLEdBQTRCLEVBQTdCLENBQU47QUFDQU8sY0FBUSxDQUFDTyxRQUFRLENBQUNFLE9BQVYsQ0FBUjtBQUNBVixtQkFBYSxDQUFDUSxRQUFRLENBQUNULFVBQVYsQ0FBYjtBQUNBRCxjQUFRLENBQUNVLFFBQVEsQ0FBQ0MsT0FBVCxJQUFvQixlQUFlSixJQUFuQyxHQUEwQyxPQUExQyxHQUFvRCxZQUFyRCxDQUFSO0FBQ0FSLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQWxFLGNBQVEsQ0FBQzRELE9BQVQsQ0FBaUJRLFVBQWpCLEdBQThCUyxRQUFRLENBQUNULFVBQXZDO0FBQ0FULGdCQUFVLENBQUNrQixRQUFRLENBQUNHLElBQVQsSUFBaUIsQ0FBbEIsQ0FBVjtBQUNBLEtBVEQ7QUFVQSxHQWJEOztBQWVBLFNBQ0M7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0MscUNBQUtuRixFQUFFLENBQUMsd0JBQUQsRUFBMkIsTUFBM0IsQ0FBUCxDQURELEVBRUMsZ0VBQTJCO0FBQUcsUUFBSSxFQUFDO0FBQVIsaUJBQTNCLHFEQUZELEVBSUM7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBK0IsWUFBUSxFQUFFLGtCQUFDbUQsQ0FBRCxFQUFPO0FBQy9DQSxPQUFDLENBQUNDLGNBQUY7QUFDQXdCLG1CQUFhO0FBQ2I7QUFIRCxLQUlDO0FBQ0MsUUFBSSxFQUFDLE1BRE47QUFFQyxNQUFFLEVBQUMsZUFGSjtBQUdDLFFBQUksRUFBQyxlQUhOO0FBSUMsWUFBUSxFQUFFLFlBQVlYLEtBSnZCO0FBS0MsWUFBUSxFQUFFLGtCQUFDZCxDQUFELEVBQU87QUFDaEJnQixZQUFNLENBQUNoQixDQUFDLENBQUNpQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsT0FBZixDQUF1QixNQUF2QixFQUErQixFQUEvQixDQUFELENBQU47QUFDQSxLQVBGO0FBUUMsU0FBSyxFQUNKLFlBQVlyQixLQUFaLEdBQ0MsbUNBQW1DQyxHQUFHLENBQUMzQixLQUFKLENBQVUsQ0FBQyxDQUFYLENBRHBDLEdBRUMyQixHQVhIO0FBYUMsZUFBVyxFQUFFbEUsRUFBRSxDQUFDLG1CQUFELEVBQXNCLE1BQXRCO0FBYmhCLElBSkQsRUFtQkMseUJBQUMsTUFBRDtBQUNDLGFBQVMsRUFBRSxZQUFZaUUsS0FEeEI7QUFFQyxlQUFXLEVBQUUsWUFBWUEsS0FGMUI7QUFHQyxXQUFPLE1BSFI7QUFJQyxZQUFRLEVBQUVHLE1BQU0sSUFBSSxDQUFFRixHQUp2QjtBQUtDLFFBQUksRUFBQztBQUxOLEtBTUUsQ0FBRUUsTUFBRixHQUNDLFlBQVlILEtBQVosR0FDQ2pFLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixDQURILEdBRUNBLEVBQUUsQ0FBQyxVQUFELEVBQWEsTUFBYixDQUhKLEdBS0MsaUJBQWlCb0UsTUFBakIsR0FDQ3BFLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixDQURILEdBRUNBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBYk4sQ0FuQkQsQ0FKRCxFQXlDRXhCLEtBQUssSUFBSSx5QkFBQyw4Q0FBRDtBQUFPLFFBQUksRUFBRWtHLFNBQWI7QUFBd0IsV0FBTyxFQUFFRCxRQUFqQztBQUEyQyxXQUFPLEVBQUVqRztBQUFwRCxJQXpDWCxFQTBDRSxDQUFFLENBQUUsWUFBRixFQUFnQixTQUFoQixFQUE0QitHLFFBQTVCLENBQXFDdEIsS0FBckMsQ0FBRixJQUNEO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyx5QkFBQyxRQUFELFFBQ0M7QUFBTSxhQUFTLEVBQ2RuRyxpREFBVSxDQUFDLENBQUUsYUFBRixFQUFpQixZQUFZbUcsS0FBWixHQUFvQixTQUFwQixHQUFnQyxPQUFqRCxDQUFEO0FBRFgsS0FHQyx5QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFFLEVBQWhCO0FBQW9CLFFBQUksRUFBRSxZQUFZQSxLQUFaLEdBQW9CLEtBQXBCLEdBQTRCO0FBQXRELElBSEQsQ0FERCxFQU1DO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0UsWUFBWUEsS0FBWixHQUFvQmpFLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUF0QixHQUEwQ0EsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLENBRDlDLENBTkQsRUFTRXVFLFVBQVUsSUFDWCx5QkFBQyxRQUFELFFBQ0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FERCxFQUVDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0EsQ0FBQyxZQUFZTixLQUFaLEdBQ0RqRSxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FERCxHQUVEQSxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FGRixJQUV5QixHQUZ6QixHQUUrQnVFLFVBSC9CLENBRkQsQ0FWRCxDQURELENBM0NELENBREQsQ0FERDtBQXdFQSxDQXBHRDs7QUFzR2V0RywyRUFBWSxDQUFDLFVBQUNzQixRQUFELEVBQWM7QUFBQSxrQkFDYkEsUUFBUSxDQUFDLGdCQUFELENBREs7QUFBQSxNQUNsQ2lHLGlCQURrQyxhQUNsQ0EsaUJBRGtDOztBQUV6QyxTQUFPO0FBQ04xQixjQUFVLEVBQUUsb0JBQUMyQixPQUFELEVBQWE7QUFDeEJELHVCQUFpQixDQUFDQyxPQUFELENBQWpCO0FBQ0E7QUFISyxHQUFQO0FBS0EsQ0FQMEIsQ0FBWixDQU9aN0IsV0FQWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUFBLElBQU04QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3JCLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDLHlDQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURELEVBRUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsY0FGRCxFQUdDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFIRCxDQURELEVBTUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVFQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLENBQUQsQ0FBaEIsRUFBcUJ0RixHQUFyQixDQUF5QixZQUFNO0FBQzlCLFdBQU8scUNBQUk7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUFKLENBQVA7QUFDQSxHQUZELENBRkYsQ0FORCxDQURELENBREQsRUFpQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFRUYsUUFBUSxDQUFDMEYsYUFBVCxJQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRXBFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkIsUUFBUSxDQUFDMEYsYUFBckIsRUFBb0N4RixHQUFwQyxDQUF3QyxZQUFNO0FBQzlDLFdBQU87QUFBSyxlQUFTLEVBQUM7QUFBZixNQUFQO0FBQ0EsR0FGQSxDQURGLENBSEYsRUFTQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBR0M7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsSUFIRCxDQUxELENBREQsRUFZQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERCxFQUVDO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFGRCxDQURELEVBS0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERCxFQUVDO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLElBRkQsQ0FMRCxDQVpELENBREQsRUF3QkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUZELENBREQsRUFLQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBSUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQURELEVBRUMsb0NBRkQsRUFHQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQUhELEVBSUMsb0NBSkQsRUFLQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQUxELEVBTUMsb0NBTkQsRUFPQztBQUFNLGFBQVMsRUFBQztBQUFoQixJQVBELENBREQsRUFVQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFERCxFQUVDLG9DQUZELEVBR0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFIRCxFQUlDLG9DQUpELEVBS0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFMRCxFQU1DLG9DQU5ELEVBT0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFQRCxDQVZELENBSkQsQ0FMRCxDQURELENBeEJELENBVEQsQ0FERCxFQXFFQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBR0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUhELEVBSUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFKRCxDQURELEVBT0Msb0NBUEQsRUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBR0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUhELEVBSUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFKRCxDQVJELEVBY0Msb0NBZEQsRUFlQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQURELEVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUZELEVBR0M7QUFBRyxhQUFTLEVBQUM7QUFBYixJQUhELEVBSUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsSUFKRCxDQWZELENBREQsQ0FyRUQsQ0FqQkQsQ0FERDtBQWtIQSxDQW5IRDs7QUFzSGVxRixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO3FCQUUwQ3hJLEVBQUUsQ0FBQ0csVTtJQUF0QzJELE0sa0JBQUFBLE07SUFBUThFLGEsa0JBQUFBLGE7SUFBZTFJLFEsa0JBQUFBLFE7ZUFDS0YsRUFBRSxDQUFDYyxJO0lBQS9CRSxVLFlBQUFBLFU7SUFBWUQsWSxZQUFBQSxZO2tCQUNVZixFQUFFLENBQUNDLE87SUFBekJpQixRLGVBQUFBLFE7SUFBVW5CLFEsZUFBQUEsUTtJQUNWa0IsTyxHQUFXakIsRUFBRSxDQUFDaUIsTyxDQUFkQSxPO0lBQ0E2QixFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7O0FBRVAsSUFBTStGLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWlFO0FBQUEsTUFBL0RwRSxJQUErRCxRQUEvREEsSUFBK0Q7QUFBQSxNQUF6RDhDLFFBQXlELFFBQXpEQSxRQUF5RDtBQUFBLE1BQS9DdUIsa0JBQStDLFFBQS9DQSxrQkFBK0M7QUFBQSxNQUEzQkMsZUFBMkIsUUFBM0JBLGVBQTJCO0FBQUEsTUFBVmQsSUFBVSxRQUFWQSxJQUFVOztBQUFBLGtCQUNuRGxJLFFBQVEsQ0FBQyxLQUFELENBRDJDO0FBQUE7QUFBQSxNQUMzRXdCLE9BRDJFO0FBQUEsTUFDbEVDLFVBRGtFOztBQUFBLDhCQVcvRXlCLFFBQVEsQ0FBQ3lCLE9BQVQsQ0FBaUJELElBQWpCLENBWCtFO0FBQUEsTUFHbEZ1RSxRQUhrRix5QkFHbEZBLFFBSGtGO0FBQUEsTUFJbEZwRyxXQUprRix5QkFJbEZBLFdBSmtGO0FBQUEsTUFLbEZxRyxpQkFMa0YseUJBS2xGQSxpQkFMa0Y7QUFBQSxNQU1sRkMsT0FOa0YseUJBTWxGQSxPQU5rRjtBQUFBLE1BT2xGQyxLQVBrRix5QkFPbEZBLEtBUGtGO0FBQUEsTUFRbEZDLGFBUmtGLHlCQVFsRkEsYUFSa0Y7QUFBQSxNQVVsRkMsZ0JBVmtGLHlCQVVsRkEsZ0JBVmtGO0FBQUEsa0JBWTVEcEcsUUFaNEQ7QUFBQSxNQVk1RXFHLFlBWjRFLGFBWTVFQSxZQVo0RTs7QUFjbkYsV0FBU0MsdUJBQVQsR0FBbUM7QUFDbEMsV0FBT0wsT0FBTyxDQUFDL0YsR0FBUixDQUFZLFVBQUNxRyxLQUFELEVBQVc7QUFBQSxVQUN0Qi9DLEtBRHNCLEdBQ0orQyxLQURJLENBQ3RCL0MsS0FEc0I7QUFBQSxVQUNmeUMsT0FEZSxHQUNKTSxLQURJLENBQ2ZOLE9BRGU7QUFFN0IsYUFDQyx5QkFBQyxrREFBRDtBQUFXLGFBQUssRUFBRXpDO0FBQWxCLFNBQ0Msc0NBQ0VsQyxNQUFNLENBQUNDLElBQVAsQ0FBWTBFLE9BQVosRUFBcUIvRixHQUFyQixDQUF5QixVQUFDc0csVUFBRCxFQUFnQjtBQUFBLGtDQUNOUCxPQUFPLENBQUNPLFVBQUQsQ0FERDtBQUFBLFlBQ2xDaEQsS0FEa0MsdUJBQ2xDQSxLQURrQztBQUFBLFlBQzNCaUQsSUFEMkIsdUJBQzNCQSxJQUQyQjtBQUFBLFlBQ3JCQyxXQURxQix1QkFDckJBLFdBRHFCO0FBRXpDLGVBQ0MseUJBQUMsUUFBRCxRQUNFLFdBQVdELElBQVgsSUFDRCx5QkFBQywwREFBRDtBQUNDLGVBQUssRUFBRWpELEtBRFI7QUFFQyxjQUFJLEVBQUVnRCxVQUZQO0FBR0MscUJBQVcsRUFBRUU7QUFIZCxVQUZELEVBUUUsYUFBYUQsSUFBYixJQUNELHlCQUFDLHVEQUFEO0FBQ0MsZUFBSyxFQUFFakQsS0FEUjtBQUVDLGNBQUksRUFBRWdEO0FBRlAsVUFURCxDQUREO0FBaUJBLE9BbkJBLENBREYsQ0FERCxDQUREO0FBMEJBLEtBNUJNLENBQVA7QUE2QkE7O0FBRUQsU0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBdUJULFFBQXZCLENBREQsRUFFQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUVmLElBQUksR0FBR2dCLGlCQUFQLEdBQ0MseUJBQUMsTUFBRDtBQUFRLGFBQVMsTUFBakI7QUFBa0IsUUFBSSxFQUFFSyxZQUFZLENBQUNMLGlCQUFEO0FBQXBDLEtBQ0VuRyxFQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FESixDQURELEdBSUMseUJBQUMsUUFBRCxRQUNFdkIsT0FBTyxJQUFJLHlCQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsRUFBaEI7QUFBb0IsUUFBSSxFQUFDLFFBQXpCO0FBQWtDLGFBQVMsRUFBQztBQUE1QyxJQURiLEVBRUMseUJBQUMsYUFBRDtBQUNDLFdBQU8sRUFBRXdILGVBQWUsQ0FBQ3RFLElBQUQsQ0FEekI7QUFFQyxZQUFRLEVBQUUsa0JBQUMwRCxLQUFELEVBQVc7QUFDcEIzRyxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBb0ksc0VBQVksQ0FBQ25GLElBQUQsRUFBTzBELEtBQVAsRUFBYyxJQUFkLENBQVosQ0FBZ0NuRyxJQUFoQyxDQUFxQyxVQUFDSSxDQUFELEVBQU87QUFDM0MsWUFBSUEsQ0FBQyxDQUFDMkYsT0FBTixFQUFlO0FBQ2RlLDRCQUFrQixDQUFDckUsSUFBRCxFQUFPMEQsS0FBUCxDQUFsQjtBQUNBM0csb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQStGLGtCQUFRLENBQ1AsQ0FBQ1ksS0FBSyxHQUNMckYsRUFBRSxDQUFDLGtCQUFELEVBQXFCLE1BQXJCLENBREcsR0FFTEEsRUFBRSxDQUFDLHFCQUFELEVBQXdCLE1BQXhCLENBRkgsZ0JBRTJDa0csUUFGM0MsTUFETyxDQUFSO0FBSUEsaUJBQU8sS0FBUDtBQUNBOztBQUNEeEgsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQStGLGdCQUFRLENBQUN6RSxFQUFFLENBQUMsOENBQUQsRUFBaUQsTUFBakQsQ0FBSCxDQUFSO0FBQ0EsT0FaRDtBQWFBO0FBakJGLElBRkQsQ0FOSCxDQUZELENBREQsRUFrQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FDRUYsV0FBVyxHQUFHLEdBRGhCLEVBRUV3RyxhQUFhLElBQ2Q7QUFBRyxRQUFJLEVBQUVBLGFBQWEsQ0FBQ1M7QUFBdkIsS0FBNkIvRyxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FBL0IsQ0FIRCxDQURELEVBT0csSUFBSW9HLE9BQU8sQ0FBQy9ELE1BQVosSUFBc0IsU0FBUzRELGVBQWUsQ0FBQ3RFLElBQUQsQ0FBL0MsSUFDRDtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U4RSx1QkFBdUIsRUFEekIsQ0FSRCxDQWxDRCxDQUREO0FBa0RBLENBaEdEOztBQWtHZXRJLHNFQUFPLENBQ3JCRCxVQUFVLENBQUMsVUFBQ3VCLE1BQUQsRUFBWTtBQUFBLGdCQUNvQkEsTUFBTSxDQUFDLGdCQUFELENBRDFCO0FBQUEsTUFDZndHLGdCQURlLFdBQ2ZBLGVBRGU7QUFBQSxNQUNFZSxjQURGLFdBQ0VBLGNBREY7O0FBRXRCLFNBQU87QUFDTmYsbUJBQWUsRUFBRSx5QkFBQ3RFLElBQUQ7QUFBQSxhQUFVc0UsZ0JBQWUsQ0FBQ3RFLElBQUQsQ0FBekI7QUFBQSxLQURYO0FBRU53RCxRQUFJLEVBQUU2QixjQUFjO0FBRmQsR0FBUDtBQUlBLENBTlMsQ0FEVyxFQVFyQi9JLFlBQVksQ0FBQyxVQUFDc0IsUUFBRCxFQUFjO0FBQUEsa0JBQ2FBLFFBQVEsQ0FBQyxnQkFBRCxDQURyQjtBQUFBLE1BQ25CeUcsbUJBRG1CLGFBQ25CQSxrQkFEbUI7QUFBQSxNQUNDdkIsU0FERCxhQUNDQSxRQUREOztBQUUxQixTQUFPO0FBQ051QixzQkFBa0IsRUFBRSw0QkFBQ3JFLElBQUQsRUFBTzBELEtBQVA7QUFBQSxhQUFpQlcsbUJBQWtCLENBQUNyRSxJQUFELEVBQU8wRCxLQUFQLENBQW5DO0FBQUEsS0FEZDtBQUVOWixZQUFRLEVBQUUsa0JBQUNTLE9BQUQ7QUFBQSxhQUFhVCxTQUFRLENBQUNTLE9BQUQsQ0FBckI7QUFBQTtBQUZKLEdBQVA7QUFJQSxDQU5XLENBUlMsQ0FBUCxDQWViYSxVQWZhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7SUFFTzlJLFEsR0FBWUMsRUFBRSxDQUFDQyxPLENBQWZGLFE7SUFDQStDLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTtxQkFDb0I5QyxFQUFFLENBQUNHLFU7SUFBdkIyRCxNLGtCQUFBQSxNO0lBQVE1RCxRLGtCQUFBQSxROztBQUVmLElBQU02SixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDMUosS0FBRCxFQUFXO0FBQUEsa0JBQ0FOLFFBQVEsQ0FBQyxLQUFELENBRFI7QUFBQTtBQUFBLE1BQ3RCaUssTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG9CQUVJNUosS0FBSyxDQUFDUyxJQUZWO0FBQUEsTUFFdkIwRSxJQUZ1QixlQUV2QkEsSUFGdUI7QUFBQSxNQUVqQjBFLEdBRmlCLGVBRWpCQSxHQUZpQjtBQUFBLE1BRVpSLElBRlksZUFFWkEsSUFGWTtBQUFBLE1BRU5TLE1BRk0sZUFFTkEsTUFGTTs7QUFBQSxtQkFHUXBLLFFBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUE7QUFBQSxNQUd0QnFLLFVBSHNCO0FBQUEsTUFHVkMsYUFIVTs7QUFBQSxtQkFJSnRLLFFBQVEsQ0FBQyxLQUFELENBSko7QUFBQTtBQUFBLE1BSXRCdUssSUFKc0I7QUFBQSxNQUloQkMsT0FKZ0I7O0FBSzlCLE1BQU01SixPQUFPLEdBQUdDLGlEQUFVLENBQ3hCLENBQ0UsY0FERixFQUVFUCxLQUFLLENBQUNvRSxJQUZSLEVBR0VpRixJQUFJLEdBQUdBLElBQUgsR0FBVSxFQUhoQixFQUlFO0FBQ0UsZUFBV1ksSUFEYjtBQUVFLGNBQVVBO0FBRlosR0FKRixDQUR3QixDQUExQjtBQVlBLFNBQ0U7QUFBSyxhQUFTLEVBQUUzSjtBQUFoQixLQUNHLENBQUUySixJQUFGLEdBQVMsb0NBQUk5RSxJQUFKLENBQVQsR0FBeUIsb0NBQUcseUJBQUMsUUFBRDtBQUFVLFFBQUksRUFBQztBQUFmLElBQUgsRUFBMEIxQyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBNUIsQ0FENUIsRUFFSW9ILEdBQUcsSUFBSSxDQUFFSSxJQUFWLElBQ0QseUJBQUMsTUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsRUFBRUYsVUFGWjtBQUdFLGFBQVMsRUFBRXhKLGlEQUFVLENBQUM7QUFBQyxvQkFBY3dKO0FBQWYsS0FBRCxDQUh2QjtBQUlFLFdBQU8sRUFDTCxtQkFBTTtBQUNKLFVBQUlELE1BQUosRUFBWTtBQUNWSyxvQkFBWSxDQUFDTCxNQUFELEVBQVNJLE9BQVQsRUFBa0JGLGFBQWxCLEVBQWlDSixTQUFqQyxDQUFaO0FBQ0Q7QUFDRjtBQVRMLEtBWUlHLFVBQVUsR0FDVix1Q0FBTSx5QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDO0FBQWYsSUFBTixPQUFpQ3RILEVBQUUsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBQUYsR0FBNEIsS0FBN0QsTUFEVSxHQUVSb0gsR0FkTixDQUhGLENBREY7QUF1QkQsQ0F4Q0Q7O0FBMENBLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0YsT0FBUCxFQUFnQkYsYUFBaEIsRUFBK0JKLFNBQS9CLEVBQTZDO0FBQ2hFLE1BQUksQ0FBRVEsSUFBSSxDQUFDZixJQUFYLEVBQWlCO0FBQ2YsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBTWdCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUIsVUFBSSxZQUFZSCxJQUFJLENBQUNmLElBQXJCLEVBQTJCO0FBQ3pCLFlBQUksQ0FBRWUsSUFBSSxDQUFDaEcsSUFBWCxFQUFpQjtBQUNmLGlCQUFPLEtBQVA7QUFDRDs7QUFDRHpFLFVBQUUsQ0FBQzZLLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQixjQUFoQixFQUFnQztBQUFDckcsY0FBSSxFQUFFZ0csSUFBSSxDQUFDaEc7QUFBWixTQUFoQyxFQUFtRHpDLElBQW5ELENBQXdELFlBQU07QUFDNUQ0SSxpQkFBTyxDQUFDLGVBQUQsQ0FBUDtBQUNELFNBRkQ7QUFHRDs7QUFFRCxVQUFJLGFBQWFILElBQUksQ0FBQ2YsSUFBdEIsRUFBNEI7QUFDMUIsWUFBSSxDQUFFZSxJQUFJLENBQUNoRyxJQUFQLElBQWUsQ0FBRWdHLElBQUksQ0FBQ00sSUFBMUIsRUFBZ0M7QUFDOUIsaUJBQU8sS0FBUDtBQUNEOztBQUNEL0ssVUFBRSxDQUFDNkssT0FBSCxDQUFXQyxJQUFYLENBQWdCLGVBQWhCLEVBQWlDO0FBQUNyRyxjQUFJLEVBQUVnRyxJQUFJLENBQUNoRyxJQUFaO0FBQWtCdUcsZ0JBQU0sRUFBRVAsSUFBSSxDQUFDTTtBQUEvQixTQUFqQyxFQUF1RS9JLElBQXZFLENBQTRFLFlBQU07QUFDaEY0SSxpQkFBTyxDQUFDLGdCQUFELENBQVA7QUFDRCxTQUZEO0FBR0Q7QUFDRixLQWxCTSxDQUFQO0FBbUJELEdBcEJEOztBQXNCQVAsZUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSyxlQUFhLEdBQUcxSSxJQUFoQixDQUFxQixZQUFNO0FBQ3pCdUksV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBSixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FKRDtBQUtELENBakNEOztBQW9DZUYsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1rQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsTUFBSSxDQUFFaEksUUFBUSxDQUFDMEYsYUFBZixFQUE4QjtBQUM1QixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFJLElBQUkxRixRQUFRLENBQUMwRixhQUFULENBQXVCeEQsTUFBL0IsRUFBdUM7QUFDckMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUlaLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkIsUUFBUSxDQUFDMEYsYUFBckIsRUFBb0N4RixHQUFwQyxDQUF3QyxVQUFDc0IsSUFBRCxFQUFVO0FBQ2hELFdBQ0UseUJBQUMscURBQUQ7QUFBYyxVQUFJLEVBQUV4QixRQUFRLENBQUMwRixhQUFULENBQXVCbEUsSUFBdkIsQ0FBcEI7QUFBa0QsVUFBSSxFQUFFQTtBQUF4RCxNQURGO0FBR0QsR0FKRCxDQUZKLENBREY7QUFXRCxDQW5CRDs7QUFxQmV3Ryw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtJQUVPbEwsUSxHQUFZQyxFQUFFLENBQUNDLE8sQ0FBZkYsUTtxQkFDb0JDLEVBQUUsQ0FBQ0csVTtJQUF2QjJELE0sa0JBQUFBLE07SUFBUTVELFEsa0JBQUFBLFE7ZUFDb0JGLEVBQUUsQ0FBQ2MsSTtJQUEvQkUsVSxZQUFBQSxVO0lBQVlELFksWUFBQUEsWTtJQUNaRSxPLEdBQVdqQixFQUFFLENBQUNpQixPLENBQWRBLE87SUFDQTZCLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTs7QUFFUCxJQUFNb0ksU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBbUU7QUFBQSxNQUFqRXpHLElBQWlFLFFBQWpFQSxJQUFpRTtBQUFBLE1BQTNEZ0MsS0FBMkQsUUFBM0RBLEtBQTJEO0FBQUEsTUFBcERrRCxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q3dCLFNBQXVDLFFBQXZDQSxTQUF1QztBQUFBLE1BQTVCNUQsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJxQyxZQUFrQixRQUFsQkEsWUFBa0I7O0FBQUEsa0JBQ3hEN0osUUFBUSxDQUFDb0wsU0FBUyxDQUFDMUcsSUFBRCxDQUFWLENBRGdEO0FBQUE7QUFBQSxNQUM1RTBELEtBRDRFO0FBQUEsTUFDckVpRCxRQURxRTs7QUFBQSxtQkFFcERyTCxRQUFRLENBQUMsS0FBRCxDQUY0QztBQUFBO0FBQUEsTUFFNUV3QixPQUY0RTtBQUFBLE1BRW5FQyxVQUZtRTs7QUFHcEYsU0FDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFBTSxZQUFRLEVBQ2Isa0JBQUN5RSxDQUFELEVBQU87QUFDTkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0ExRSxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBNkosc0VBQWEsQ0FBRTVHLElBQUYsRUFBUTBELEtBQVIsQ0FBYixDQUE2Qm5HLElBQTdCLENBQWtDLFVBQUNJLENBQUQsRUFBTztBQUN4QyxZQUFLQSxDQUFDLENBQUMyRixPQUFQLEVBQWlCO0FBQ2hCNkIsc0JBQVksQ0FBQ25GLElBQUQsRUFBTzBELEtBQVAsQ0FBWjtBQUNBWixrQkFBUSxDQUFFLElBQUYsQ0FBUjtBQUNBL0Ysb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxpQkFBTyxLQUFQO0FBQ0E7O0FBQ0QrRixnQkFBUSxDQUFFLEtBQUYsQ0FBUjtBQUNBL0Ysa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxPQVREO0FBVUE7QUFkRixLQWdCRWlGLEtBQUssSUFBSTtBQUFPLFdBQU8sRUFBRWhDO0FBQWhCLEtBQXVCZ0MsS0FBdkIsQ0FoQlgsRUFpQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQ0MsTUFBRSxFQUFFaEMsSUFETDtBQUVDLGVBQVcsRUFBRWtGLFdBRmQ7QUFHQyxTQUFLLEVBQUV4QixLQUhSO0FBSUMsWUFBUSxFQUNQLGtCQUFDbEMsQ0FBRCxFQUFPO0FBQ05tRixjQUFRLENBQUNuRixDQUFDLENBQUNpQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNBO0FBUEgsSUFERCxFQVdDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyx5QkFBQyxNQUFEO0FBQ0MsYUFBUyxFQUFFNUcsT0FBTyxHQUFHLFlBQUgsR0FBa0IsSUFEckM7QUFFQyxRQUFJLEVBQUMsUUFGTjtBQUdDLFlBQVEsRUFBRUEsT0FIWDtBQUlDLFNBQUssRUFBRXVCLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUpWO0FBS0MsUUFBSSxFQUFFdkIsT0FBTyxHQUFHLFFBQUgsR0FBYztBQUw1QixJQURELENBWEQsQ0FqQkQsQ0FERCxDQUREO0FBMkNBLENBOUNEOztBQWlEZU4sc0VBQU8sQ0FDckJELFVBQVUsQ0FBQyxVQUFDdUIsTUFBRCxFQUFZO0FBQUEsZ0JBR2xCQSxNQUFNLENBQUMsZ0JBQUQsQ0FIWTtBQUFBLE1BRXJCNEksVUFGcUIsV0FFckJBLFNBRnFCOztBQUl0QixTQUFPO0FBQ05BLGFBQVMsRUFBRSxtQkFBQzFHLElBQUQ7QUFBQSxhQUFVMEcsVUFBUyxDQUFDMUcsSUFBRCxDQUFuQjtBQUFBO0FBREwsR0FBUDtBQUdBLENBUFMsQ0FEVyxFQVNyQjFELFlBQVksQ0FBQyxVQUFDc0IsUUFBRCxFQUFjO0FBQUEsa0JBQ2FBLFFBQVEsQ0FBQyxnQkFBRCxDQURyQjtBQUFBLE1BQ25CaUosa0JBRG1CLGFBQ25CQSxrQkFEbUI7QUFBQSxNQUNDL0QsU0FERCxhQUNDQSxRQUREOztBQUUxQixTQUFPO0FBQ05xQyxnQkFBWSxFQUFFLHNCQUFDbkYsSUFBRCxFQUFPMEQsS0FBUDtBQUFBLGFBQWlCbUQsa0JBQWtCLENBQUM3RyxJQUFELEVBQU8wRCxLQUFQLENBQW5DO0FBQUEsS0FEUjtBQUVOWixZQUFRLEVBQUUsa0JBQUNTLE9BQUQ7QUFBQSxhQUFhVCxTQUFRLENBQUNTLE9BQUQsQ0FBckI7QUFBQTtBQUZKLEdBQVA7QUFJQSxDQU5XLENBVFMsQ0FBUCxDQWdCYmtELFNBaEJhLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7cUJBRWtDbEwsRUFBRSxDQUFDRyxVO0lBQTlCeUksYSxrQkFBQUEsYTtJQUFlMUksUSxrQkFBQUEsUTtlQUNhRixFQUFFLENBQUNjLEk7SUFBL0JFLFUsWUFBQUEsVTtJQUFZRCxZLFlBQUFBLFk7SUFDWkUsTyxHQUFXakIsRUFBRSxDQUFDaUIsTyxDQUFkQSxPO0lBQ0FsQixRLEdBQVlDLEVBQUUsQ0FBQ0MsTyxDQUFmRixRO0lBRUErQyxFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7O0FBRVAsSUFBTXlJLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNEO0FBQUEsTUFBcEQ5RyxJQUFvRCxRQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q2dDLEtBQThDLFFBQTlDQSxLQUE4QztBQUFBLE1BQXZDMEUsU0FBdUMsUUFBdkNBLFNBQXVDO0FBQUEsTUFBNUJ2QixZQUE0QixRQUE1QkEsWUFBNEI7QUFBQSxNQUFkckMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUNwQ3hILFFBQVEsQ0FBQyxLQUFELENBRDRCO0FBQUE7QUFBQSxNQUM1RHdCLE9BRDREO0FBQUEsTUFDbkRDLFVBRG1EOztBQUVwRSxTQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyx5QkFBQyxhQUFEO0FBQ0MsV0FBTyxFQUFFMkosU0FBUyxDQUFDMUcsSUFBRCxDQURuQjtBQUVDLFNBQUssRUFBRWdDLEtBRlI7QUFHQyxZQUFRLEVBQUUsa0JBQUMwQixLQUFELEVBQVc7QUFDcEIzRyxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBNkosc0VBQWEsQ0FBRTVHLElBQUYsRUFBUTBELEtBQVIsQ0FBYixDQUE2Qm5HLElBQTdCLENBQWtDLFVBQUNJLENBQUQsRUFBTztBQUN4QyxZQUFLQSxDQUFDLENBQUMyRixPQUFQLEVBQWlCO0FBQ2hCNkIsc0JBQVksQ0FBQ25GLElBQUQsRUFBTzBELEtBQVAsQ0FBWjtBQUNBWixrQkFBUSxDQUFFLElBQUYsQ0FBUjtBQUNBL0Ysb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxpQkFBTyxLQUFQO0FBQ0E7O0FBQ0QrRixnQkFBUSxDQUFFLEtBQUYsQ0FBUjtBQUNBL0Ysa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQSxPQVREO0FBVUE7QUFmRixJQURELEVBa0JFRCxPQUFPLElBQUkseUJBQUMsUUFBRDtBQUFVLFFBQUksRUFBRSxFQUFoQjtBQUFvQixRQUFJLEVBQUMsUUFBekI7QUFBa0MsYUFBUyxFQUFDO0FBQTVDLElBbEJiLENBREQ7QUFzQkEsQ0F4QkQ7O0FBMkJlTixzRUFBTyxDQUNyQkQsVUFBVSxDQUFDLFVBQUN1QixNQUFELEVBQVk7QUFBQSxnQkFHbEJBLE1BQU0sQ0FBQyxnQkFBRCxDQUhZO0FBQUEsTUFFckI0SSxVQUZxQixXQUVyQkEsU0FGcUI7O0FBSXRCLFNBQU87QUFDTkEsYUFBUyxFQUFFLG1CQUFDMUcsSUFBRDtBQUFBLGFBQVUwRyxVQUFTLENBQUMxRyxJQUFELENBQW5CO0FBQUE7QUFETCxHQUFQO0FBR0EsQ0FQUyxDQURXLEVBU3JCMUQsWUFBWSxDQUFDLFVBQUNzQixRQUFELEVBQWM7QUFBQSxrQkFDYUEsUUFBUSxDQUFDLGdCQUFELENBRHJCO0FBQUEsTUFDbkJpSixrQkFEbUIsYUFDbkJBLGtCQURtQjtBQUFBLE1BQ0MvRCxTQURELGFBQ0NBLFFBREQ7O0FBRTFCLFNBQU87QUFDTnFDLGdCQUFZLEVBQUUsc0JBQUNuRixJQUFELEVBQU8wRCxLQUFQO0FBQUEsYUFBaUJtRCxrQkFBa0IsQ0FBQzdHLElBQUQsRUFBTzBELEtBQVAsQ0FBbkM7QUFBQSxLQURSO0FBRU5aLFlBQVEsRUFBRSxrQkFBQ1MsT0FBRDtBQUFBLGFBQWFULFNBQVEsQ0FBQ1MsT0FBRCxDQUFyQjtBQUFBO0FBRkosR0FBUDtBQUlBLENBTlcsQ0FUUyxDQUFQLENBZ0JidUQsTUFoQmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtJQUVPekksRSxHQUFNOUMsRUFBRSxDQUFDK0MsSSxDQUFURCxFO3FCQUNvQjlDLEVBQUUsQ0FBQ0csVTtJQUF2QjJELE0sa0JBQUFBLE07SUFBUTVELFEsa0JBQUFBLFE7SUFDUkgsUSxHQUFZQyxFQUFFLENBQUNDLE8sQ0FBZkYsUTs7QUFFUCxJQUFNMEMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ3BDLEtBQUQsRUFBVztBQUFBLE1BQ2ZvRSxJQURlLEdBQ0RwRSxLQURDLENBQ2ZvRSxJQURlO0FBQUEsTUFDVDNELElBRFMsR0FDRFQsS0FEQyxDQUNUUyxJQURTO0FBQUEsb0JBRStCVCxLQUFLLENBQUNTLElBRnJDO0FBQUEsTUFFZjBLLE1BRmUsZUFFZkEsTUFGZTtBQUFBLE1BRVBDLElBRk8sZUFFUEEsSUFGTztBQUFBLE1BRUQ3SSxXQUZDLGVBRURBLFdBRkM7QUFBQSxNQUVZVyxPQUZaLGVBRVlBLE9BRlo7QUFBQSxNQUVxQm1JLE1BRnJCLGVBRXFCQSxNQUZyQjs7QUFBQSxrQkFHUTNMLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDb0osR0FBTixDQUhoQjtBQUFBO0FBQUEsTUFHZHJDLE1BSGM7QUFBQSxNQUdOOEQsU0FITTs7QUFBQSxtQkFJZ0I1TCxRQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFBO0FBQUEsTUFJZHFLLFVBSmM7QUFBQSxNQUlGQyxhQUpFOztBQU10QixNQUFNdUIsU0FBUyxHQUFHO0FBQ2hCLGVBQVc7QUFBQyxnQkFBUTlJLEVBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixDQUFYO0FBQWdDK0ksY0FBUSxFQUFFL0ksRUFBRSxDQUFDLFlBQUQsRUFBZSxNQUFmO0FBQTVDLEtBREs7QUFFaEIsZ0JBQVk7QUFBQyxnQkFBUUEsRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBQVg7QUFBaUMrSSxjQUFRLEVBQUUvSSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWY7QUFBN0MsS0FGSTtBQUdoQixrQkFBYztBQUFDLGdCQUFRQSxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsQ0FBWDtBQUFtQytJLGNBQVEsRUFBRS9JLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCO0FBQS9DO0FBSEUsR0FBbEI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFFbEMsaURBQVUsQ0FBQyxDQUFFLE1BQUYsRUFBVSxRQUFWLEVBQW9CNkQsSUFBcEIsQ0FBRDtBQUExQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLE9BQUcsRUFBRStHLE1BQVY7QUFBa0IsT0FBRyxFQUFFMUksRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakI7QUFBekIsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBNEIySSxJQUE1QixDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUFpQzdJLFdBQWpDLENBRkYsQ0FKRixFQVFFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTSxhQUFTLEVBQUM7QUFBaEIsVUFBNEJXLE9BQTVCLENBREYsU0FDZ0Q7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBMEJtSSxNQUExQixDQURoRCxDQURGLEVBSUUseUJBQUMsTUFBRDtBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsYUFBUyxFQUFFLENBQUUsU0FBRixFQUFhLFVBQWIsRUFBMEJyRCxRQUExQixDQUFtQ1IsTUFBbkMsQ0FGYjtBQUdFLGVBQVcsRUFBRSxpQkFBaUJBLE1BSGhDO0FBSUUsWUFBUSxFQUFFdUMsVUFKWjtBQUtFLFdBQU8sRUFBRSxtQkFBTTtBQUNiQyxtQkFBYSxDQUFDLElBQUQsQ0FBYjs7QUFDQSxVQUFJLGNBQWN4QyxNQUFsQixFQUEwQjtBQUN4QmlFLHFCQUFhLENBQUNySCxJQUFELENBQWIsQ0FBb0J6QyxJQUFwQixDQUF5QixVQUFDSSxDQUFELEVBQU87QUFDOUIsY0FBSSxDQUFFQSxDQUFDLENBQUMyRixPQUFSLEVBQWlCO0FBRWY7QUFDQXNDLHlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0EsbUJBQU8sS0FBUDtBQUNEOztBQUNEQSx1QkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBc0IsbUJBQVMsQ0FBQyxVQUFELENBQVQ7QUFDRCxTQVREO0FBVUEsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0RJLDZEQUFHLENBQUNqTCxJQUFJLENBQUMrRyxNQUFELENBQUwsRUFBZSxJQUFmLENBQUgsQ0FBd0I3RixJQUF4QixDQUE2QixVQUFDSSxDQUFELEVBQU87QUFDbEMsWUFBSSxDQUFFQSxDQUFDLENBQUM0SixFQUFSLEVBQVk7QUFFVjtBQUNBM0IsdUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBRUQsWUFBSSxlQUFleEMsTUFBbkIsRUFBMkI7QUFDekI4RCxtQkFBUyxDQUFDLFlBQUQsQ0FBVDtBQUNELFNBRkQsTUFFTztBQUNMQSxtQkFBUyxDQUFDLFVBQUQsQ0FBVDtBQUNEOztBQUNEdEIscUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxPQWREO0FBZUQ7QUFuQ0gsS0FxQ0csQ0FBRUQsVUFBRixJQUFnQndCLFNBQVMsQ0FBQy9ELE1BQUQsQ0FBVCxVQXJDbkIsRUFzQ0d1QyxVQUFVLElBQ1Q7QUFBTSxTQUFLLEVBQUU7QUFBQzZCLGFBQU8sRUFBRSxNQUFWO0FBQWtCQyxnQkFBVSxFQUFFO0FBQTlCO0FBQWIsS0FDQSx5QkFBQyxRQUFEO0FBQVUsUUFBSSxFQUFDO0FBQWYsSUFEQSxFQUVHTixTQUFTLENBQUMvRCxNQUFELENBQVQsQ0FBa0JnRSxRQUFsQixHQUE2QixLQUZoQyxDQXZDSixDQUpGLENBUkYsQ0FERjtBQTRERCxDQXhFRDs7QUEwRUEsU0FBU0MsYUFBVCxDQUF1QnJILElBQXZCLEVBQTZCO0FBQzNCLFNBQU8sSUFBSWtHLE9BQUosQ0FBWSxVQUFBQyxPQUFPLEVBQUk7QUFDNUI1SyxNQUFFLENBQUM2SyxPQUFILENBQVdDLElBQVgsQ0FBZ0IsZ0JBQWhCLEVBQWtDO0FBQ2hDckcsVUFBSSxFQUFKQSxJQURnQztBQUVoQ3NELGFBQU8sRUFBRSxpQkFBQzNGLENBQUQsRUFBTztBQUNkd0ksZUFBTyxDQUFDO0FBQUM3QyxpQkFBTyxFQUFFO0FBQVYsU0FBRCxDQUFQO0FBQ0QsT0FKK0I7QUFLaENvRSxXQUFLLEVBQUUsZUFBQ0MsR0FBRCxFQUFTO0FBRWQ7QUFDQXhCLGVBQU8sQ0FBQztBQUFDN0MsaUJBQU8sRUFBRTtBQUFWLFNBQUQsQ0FBUDtBQUNEO0FBVCtCLEtBQWxDO0FBV0QsR0FaTSxDQUFQO0FBYUQ7O0FBR2N0RixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0lBRU9LLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTtJQUNBOEYsYSxHQUFpQjVJLEVBQUUsQ0FBQ0csVSxDQUFwQnlJLGE7SUFDQTdJLFEsR0FBWUMsRUFBRSxDQUFDQyxPLENBQWZGLFE7O0FBRVAsSUFBTXNNLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWtCO0FBQUEsTUFBaEI1SyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsa0JBQ0MxQixRQUFRLENBQUNrRCxRQUFRLENBQUNpRyxPQUFULENBQWlCb0QsTUFBakIsSUFBMkIsS0FBNUIsQ0FEVDtBQUFBO0FBQUEsTUFDekJDLFFBRHlCO0FBQUEsTUFDZkMsV0FEZTs7QUFBQSxtQkFFTHpNLFFBQVEsQ0FBQyxFQUFELENBRkg7QUFBQTtBQUFBLE1BRXpCdUIsS0FGeUI7QUFBQSxNQUVsQmlHLFFBRmtCOztBQUFBLG1CQUdHeEgsUUFBUSxDQUFDLFNBQUQsQ0FIWDtBQUFBO0FBQUEsTUFHekJ5SCxTQUh5QjtBQUFBLE1BR2RDLFlBSGM7O0FBSWpDLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFeEUsUUFBUSxDQUFDd0osR0FBVCxJQUFnQix5QkFBQyxvREFBRDtBQUFhLGFBQVMsRUFBRSxVQUFVaEw7QUFBbEMsSUFEbEIsRUFFQztBQUFPLGFBQVMsRUFBQztBQUFqQixLQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDQyxxQ0FBS3FCLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQUFQLENBREQsRUFFQyxvQ0FBSUEsRUFBRSxDQUFDLHFHQUFELENBQU4sQ0FGRCxFQUdDO0FBQUcsUUFBSSxFQUFDO0FBQVIsS0FDRUEsRUFBRSxDQUFDLHlCQUFELEVBQTRCLE1BQTVCLENBREosQ0FIRCxDQURELEVBUUMsb0NBUkQsRUFTQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0MscUNBQUtBLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixNQUF0QixDQUFQLENBREQsRUFFQyxvQ0FBSUEsRUFBRSxDQUFDLGlFQUFELEVBQW9FLE1BQXBFLENBQU4sQ0FGRCxFQUdDO0FBQUcsUUFBSSxFQUFDO0FBQVIsS0FDRUEsRUFBRSxDQUFDLHlCQUFELEVBQTRCLE1BQTVCLENBREosQ0FIRCxDQVRELEVBZ0JDLG9DQWhCRCxFQWlCQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0MscUNBQUtBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLENBQVAsQ0FERCxFQUVDLG9DQUFJQSxFQUFFLENBQUMsZ0hBQUQsRUFBbUgsTUFBbkgsQ0FBTixVQUNPO0FBQUcsUUFBSSxFQUFDO0FBQVIsS0FDSkEsRUFBRSxDQUFDLG1CQUFELEVBQXNCLE1BQXRCLENBREUsQ0FEUCxDQUZELEVBT0MseUJBQUMsYUFBRDtBQUNDLFdBQU8sRUFBRXlKLFFBRFY7QUFFQyxTQUFLLEVBQUV6SixFQUFFLENBQUMsMEJBQUQsRUFBNkIsTUFBN0IsQ0FGVjtBQUdDLFlBQVEsRUFBRSxrQkFBQ3FGLEtBQUQsRUFBVztBQUNwQnFFLGlCQUFXLENBQUNyRSxLQUFELENBQVg7QUFDQVAsOERBQUksQ0FBQzNFLFFBQVEsQ0FBQ25CLEdBQVQsR0FBZSxrQkFBaEIsRUFBb0M7QUFBQ3FHLGFBQUssRUFBTEE7QUFBRCxPQUFwQyxDQUFKLENBQWlEbkcsSUFBakQsQ0FBc0QsVUFBQzhGLFFBQUQsRUFBYztBQUNuRSxZQUFJLENBQUVBLFFBQVEsQ0FBQ0MsT0FBZixFQUF3QjtBQUN2Qk4sc0JBQVksQ0FBQyxPQUFELENBQVo7QUFDQUYsa0JBQVEsQ0FBQ3pFLEVBQUUsQ0FBQyw0Q0FBRCxFQUErQyxNQUEvQyxDQUFILENBQVI7QUFDQTBKLHFCQUFXLENBQUMsQ0FBRXJFLEtBQUgsQ0FBWDtBQUNBLGlCQUFPLEtBQVA7QUFDQTs7QUFDRFYsb0JBQVksQ0FBQyxTQUFELENBQVo7QUFDQUYsZ0JBQVEsQ0FBQ08sUUFBUSxDQUFDRSxPQUFWLENBQVI7QUFDQSxPQVREO0FBVUE7QUFmRixJQVBELEVBd0JFMUcsS0FBSyxJQUNOLHlCQUFDLDhDQUFEO0FBQU8sV0FBTyxFQUFFaUcsUUFBaEI7QUFBMEIsV0FBTyxFQUFFakcsS0FBbkM7QUFBMEMsUUFBSSxFQUFFa0c7QUFBaEQsSUF6QkQsQ0FqQkQsQ0FGRCxDQUREO0FBbURBLENBdkREOztBQXlEZTZFLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7SUNsRU9LLFEsR0FBWTFNLEVBQUUsQ0FBQ0csVSxDQUFmdU0sUTtlQUM0QjFNLEVBQUUsQ0FBQ2MsSTtJQUEvQkMsWSxZQUFBQSxZO0lBQWNDLFUsWUFBQUEsVTtrQkFDU2hCLEVBQUUsQ0FBQ0MsTztJQUExQmtCLFMsZUFBQUEsUztJQUFXcEIsUSxlQUFBQSxRO0lBQ1hrQixPLEdBQVdqQixFQUFFLENBQUNpQixPLENBQWRBLE87SUFDQTZCLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTs7QUFDUCxJQUFNNkosY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF1QjtBQUFBLE1BQXJCckwsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZGlHLFFBQWMsUUFBZEEsUUFBYztBQUM3Q3BHLFdBQVMsQ0FBQyxZQUFNO0FBQ2Z5TCxjQUFVLENBQUMsWUFBTTtBQUNoQnJGLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQSxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1TLE9BQU8sR0FBRzFHLEtBQUssRUFBckI7QUFDQSxNQUFNdUwsS0FBSyxHQUFHO0FBQ2JDLFdBQU8sRUFBRSxTQUFTOUUsT0FBVCxHQUFtQixDQUFuQixHQUF1QjtBQURuQixHQUFkO0FBSUEsU0FDQztBQUFLLFNBQUssRUFBRTZFO0FBQVosS0FDQyx5QkFBQyxRQUFEO0FBQ0MsYUFBUyxFQUFDO0FBRFgsS0FHRSxjQUFjLE9BQU83RSxPQUFyQixHQUNDLFVBQVVBLE9BQVYsR0FDQWxGLEVBQUUsQ0FBQyw0Q0FBRCxFQUErQyxNQUEvQyxDQURGLEdBRUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixNQUFuQixDQUhILEdBSUF4QixLQUFLLEVBUFAsQ0FERCxDQUREO0FBY0EsQ0ExQkQ7O0FBNEJlTCxzRUFBTyxDQUNyQkYsWUFBWSxDQUFDLFVBQUNzQixRQUFELEVBQWM7QUFBQSxrQkFDUEEsUUFBUSxDQUFDLGdCQUFELENBREQ7QUFBQSxNQUNuQmtGLFNBRG1CLGFBQ25CQSxRQURtQjs7QUFFMUIsU0FBTztBQUNOQSxZQUFRLEVBQUUsa0JBQUNTLE9BQUQ7QUFBQSxhQUFhVCxTQUFRLENBQUNTLE9BQUQsQ0FBckI7QUFBQTtBQURKLEdBQVA7QUFHQSxDQUxXLENBRFMsRUFPckJoSCxVQUFVLENBQUMsVUFBQ3VCLE1BQUQsRUFBWTtBQUFBLGdCQUNIQSxNQUFNLENBQUMsZ0JBQUQsQ0FESDtBQUFBLE1BQ2ZDLFFBRGUsV0FDZkEsUUFEZTs7QUFFdEIsU0FBTztBQUNObEIsU0FBSyxFQUFFO0FBQUEsYUFBTWtCLFFBQVEsRUFBZDtBQUFBO0FBREQsR0FBUDtBQUdBLENBTFMsQ0FQVyxDQUFQLENBYWJtSyxjQWJhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0lBRU83SixFLEdBQU05QyxFQUFFLENBQUMrQyxJLENBQVRELEU7O0FBRVAsSUFBTWlLLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUMxTSxLQUFELEVBQVc7QUFBQSxNQUN0Qm9CLFVBRHNCLEdBQ0FwQixLQURBLENBQ3RCb0IsVUFEc0I7QUFBQSxNQUNWQyxNQURVLEdBQ0FyQixLQURBLENBQ1ZxQixNQURVO0FBRzdCLE1BQU1mLE9BQU8sR0FBR0MsaURBQVUsQ0FBQyxDQUFFLGFBQUYsRUFBaUIsU0FBakIsRUFBNEJhLFVBQTVCLENBQUQsQ0FBMUI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFZDtBQUFoQixLQUNHNEYsa0RBQUksQ0FBQzlFLFVBQUQsQ0FBSixDQUFpQnVMLE1BQWpCLENBQXdCdEwsTUFBeEIsQ0FESCxDQURGO0FBS0QsQ0FURDs7QUFXZXFMLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtJQUVPNUwsUyxHQUFhbkIsRUFBRSxDQUFDQyxPLENBQWhCa0IsUztJQUNBakIsUSxHQUFZRixFQUFFLENBQUNHLFUsQ0FBZkQsUTs7QUFFUCxJQUFNK00sS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNkM7QUFBQSxNQUEzQ2pGLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDa0YsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLHVCQUFuQnpELElBQW1CO0FBQUEsTUFBbkJBLElBQW1CLDBCQUFaLE1BQVk7QUFDMUR2SSxXQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1pTSxPQUFPLEdBQUdSLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDTSxhQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FHLGtCQUFZLENBQUVELE9BQUYsQ0FBWjtBQUNBLEtBSHlCLEVBR3ZCRCxJQUFJLElBQUksSUFIZSxDQUExQjtBQUlBLEdBTFEsQ0FBVDtBQU1BLE1BQU1HLE9BQU8sR0FBRztBQUNmLFlBQVEsTUFETztBQUVmLGFBQVMsSUFGTTtBQUdmLGVBQVcsS0FISTtBQUlmLGVBQVc7QUFKSSxHQUFoQjtBQU1BLE1BQU0zTSxPQUFPLEdBQUdDLGlEQUFVLENBQUMsQ0FBRSxPQUFGLEVBQVcsNEJBQVgsRUFBeUMsZ0JBQXpDLEVBQTJEOEksSUFBM0QsQ0FBRCxDQUExQjtBQUNBLFNBQ0M7QUFBSyxhQUFTLEVBQUUvSTtBQUFoQixLQUNDLHlCQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUyTSxPQUFPLENBQUM1RCxJQUFEO0FBQXZCLElBREQsRUFFQyx1Q0FBTzFCLE9BQVAsQ0FGRCxDQUREO0FBTUEsQ0FwQkQ7O0FBc0JlaUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7OztrQkMzQjRCak4sRUFBRSxDQUFDQyxPO0lBQXhCeUYsTSxlQUFBQSxNO0lBQVF2RSxTLGVBQUFBLFM7O0FBRWYsSUFBTW9NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzFDdE0sV0FBUyxDQUFDLFlBQU07QUFDZixhQUFTdU0sa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQ2xDLFVBQUlILEdBQUcsQ0FBQ0ksT0FBSixJQUFlLENBQUVKLEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxRQUFaLENBQXFCRixLQUFLLENBQUN6RixNQUEzQixDQUFyQixFQUF5RDtBQUN4RHVGLGdCQUFRO0FBQ1I7QUFDRDs7QUFDREssWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0wsa0JBQXZDO0FBQ0EsV0FBTyxZQUFNO0FBQ1pJLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENOLGtCQUExQztBQUNBLEtBRkQ7QUFHQSxHQVZRLEVBVU4sQ0FBRUYsR0FBRixDQVZNLENBQVQ7QUFXQSxDQVpEOztBQWNBLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBd0I7QUFBQSxNQUF0QnpOLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpxSCxNQUFZLFFBQVpBLE1BQVk7QUFDOUMsTUFBTXFHLFVBQVUsR0FBR3hJLE1BQU0sQ0FBQyxJQUFELENBQXpCO0FBQ0E2SCxpQkFBZSxDQUFDVyxVQUFELEVBQWFyRyxNQUFiLENBQWY7QUFFQSxTQUFPO0FBQUssT0FBRyxFQUFFcUc7QUFBVixLQUF1QjFOLFFBQXZCLENBQVA7QUFDQSxDQUxEOztBQU9leU4sNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtJQUNPRSxhLEdBQWlCbk8sRUFBRSxDQUFDYyxJLENBQXBCcU4sYTtJQUNBbkIsTSxHQUFVaE4sRUFBRSxDQUFDQyxPLENBQWIrTSxNO0FBRVA7QUFDQTtBQUNBO0FBRUFtQixhQUFhLENBQUMsZ0JBQUQsRUFBbUI7QUFDL0JDLFNBQU8sRUFBUEEsc0RBRCtCO0FBRS9CQyxTQUFPLEVBQVBBLHNEQUYrQjtBQUcvQkMsV0FBUyxFQUFUQSx3REFBU0E7QUFIc0IsQ0FBbkIsQ0FBYjs7QUFNQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0seUJBQUMsdURBQUQsT0FBTjtBQUFBLENBQWI7O0FBQ0F2QixNQUFNLENBQ0wseUJBQUMsSUFBRCxPQURLLEVBRUxjLFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixnQkFBeEIsQ0FGSyxDQUFOLEM7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFFZTtBQUNkbk4sYUFEYyx1QkFDRmlCLE1BREUsRUFDTTtBQUNuQixXQUFPO0FBQ05vSCxVQUFJLEVBQUUsY0FEQTtBQUVOK0UsYUFBTyxFQUFFO0FBQUNuTSxjQUFNLEVBQU5BO0FBQUQ7QUFGSCxLQUFQO0FBSUEsR0FOYTtBQU9kd0csb0JBUGMsOEJBT0s0RixVQVBMLEVBT2lCdkcsS0FQakIsRUFPd0I7QUFDckMsV0FBTztBQUNOdUIsVUFBSSxFQUFFLGVBREE7QUFFTitFLGFBQU8sRUFBRTtBQUFDQyxrQkFBVSxFQUFFLFlBQVlBLFVBQVosR0FBeUIsU0FBdEM7QUFBaUR2RyxhQUFLLEVBQUxBO0FBQWpEO0FBRkgsS0FBUDtBQUlBLEdBWmE7QUFhZG1ELG9CQWJjLDhCQWFLN0IsVUFiTCxFQWFpQmtGLFdBYmpCLEVBYThCO0FBQzNDLFdBQU87QUFDTmpGLFVBQUksRUFBRSxzQkFEQTtBQUVOK0UsYUFBTyxFQUFFO0FBQUNHLG9CQUFZLEVBQUUsWUFBWW5GLFVBQTNCO0FBQXVDa0YsbUJBQVcsRUFBWEE7QUFBdkM7QUFGSCxLQUFQO0FBSUEsR0FsQmE7QUFtQmRyRyxtQkFuQmMsNkJBbUJJTCxJQW5CSixFQW1CVTtBQUN2QixXQUFPO0FBQ055QixVQUFJLEVBQUUscUJBREE7QUFFTitFLGFBQU8sRUFBRTtBQUFDeEcsWUFBSSxFQUFKQTtBQUFEO0FBRkgsS0FBUDtBQUlBLEdBeEJhO0FBeUJkVixVQXpCYyxvQkF5QkxTLE9BekJLLEVBeUJJO0FBQ2pCLFdBQU87QUFDTjBCLFVBQUksRUFBRSxzQkFEQTtBQUVOK0UsYUFBTyxFQUFFekc7QUFGSCxLQUFQO0FBSUE7QUE5QmEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7SUFDT2xGLEUsR0FBTTlDLEVBQUUsQ0FBQytDLEksQ0FBVEQsRTtBQUVQLElBQU0rTCxZQUFZLEdBQUc7QUFDcEJoTixVQUFRLEVBQUUsRUFEVTtBQUVwQm9HLE1BQUksRUFBRWhGLFFBQVEsQ0FBQ3dKLEdBQVQsR0FBZXhKLFFBQVEsQ0FBQzRELE9BQVQsQ0FBaUJvQixJQUFoQyxHQUF1QyxDQUZ6QjtBQUdwQjNHLE9BQUssRUFBRTtBQUhhLENBQXJCOztBQUtBLElBQU04TSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDVSxLQUFpQyx1RUFBekJELFlBQXlCO0FBQUEsTUFBWGhILE1BQVc7O0FBQ2pELFVBQVFBLE1BQU0sQ0FBQzZCLElBQWY7QUFDQyxTQUFLLGNBQUw7QUFBQSxVQUNRcEgsTUFEUixHQUNrQnVGLE1BQU0sQ0FBQzRHLE9BRHpCLENBQ1FuTSxNQURSO0FBRUMsK0JBQ0l3TSxLQURKO0FBRUNqTixnQkFBUSxFQUFFUztBQUZYOztBQUlELFNBQUssZUFBTDtBQUFBLDRCQUM2QnVGLE1BQU0sQ0FBQzRHLE9BRHBDO0FBQUEsVUFDUUMsVUFEUixtQkFDUUEsVUFEUjtBQUFBLFVBQ29CdkcsS0FEcEIsbUJBQ29CQSxLQURwQjtBQUVDLCtCQUNJMkcsS0FESjtBQUVDak4sZ0JBQVEsb0JBQ0ppTixLQUFLLENBQUNqTixRQURGLHNCQUVONk0sVUFGTSxFQUVPdkcsS0FGUDtBQUZUOztBQU9BLFNBQUssc0JBQUw7QUFBQSw2QkFDbUNOLE1BQU0sQ0FBQzRHLE9BRDFDO0FBQUEsVUFDTUcsWUFETixvQkFDTUEsWUFETjtBQUFBLFVBQ29CRCxXQURwQixvQkFDb0JBLFdBRHBCO0FBRUMsK0JBQ0lHLEtBREo7QUFFQ2pOLGdCQUFRLG9CQUNKaU4sS0FBSyxDQUFDak4sUUFERixzQkFFTitNLFlBRk0sRUFFU0QsV0FGVDtBQUZUOztBQU9GLFNBQUsscUJBQUw7QUFDQywrQkFDSUcsS0FESjtBQUVDN0csWUFBSSxFQUFFSixNQUFNLENBQUM0RyxPQUFQLENBQWV4RztBQUZ0Qjs7QUFJRCxTQUFLLHNCQUFMO0FBQ0MsK0JBQ0k2RyxLQURKO0FBRUN4TixhQUFLLEVBQUV1RyxNQUFNLENBQUM0RztBQUZmO0FBL0JGOztBQW9DQSxTQUFPSyxLQUFQO0FBQ0EsQ0F0Q0Q7O0FBd0NlVixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoREE7QUFBZTtBQUNkckYsaUJBQWUsRUFBRSx5QkFBQytGLEtBQUQsRUFBUXJLLElBQVI7QUFBQSxXQUFpQnFLLEtBQUssQ0FBQ2pOLFFBQU4sQ0FBZSxZQUFZNEMsSUFBWixHQUFtQixTQUFsQyxDQUFqQjtBQUFBLEdBREg7QUFFZDBHLFdBQVMsRUFBRSxtQkFBQzJELEtBQUQsRUFBUXJLLElBQVI7QUFBQSxXQUFpQnFLLEtBQUssQ0FBQ2pOLFFBQU4sQ0FBZSxZQUFZNEMsSUFBM0IsQ0FBakI7QUFBQSxHQUZHO0FBR2RxRixnQkFBYyxFQUFFLHdCQUFDZ0YsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQzdHLElBQWpCO0FBQUEsR0FIRjtBQUlkekYsVUFBUSxFQUFFLGtCQUFDc00sS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ3hOLEtBQWpCO0FBQUE7QUFKSSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXlOLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM5QixNQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBcEM7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBSixDQUFvQkwsV0FBcEIsQ0FBbEI7QUFFQSxTQUFPSSxTQUFTLENBQUN0RCxHQUFWLENBQWNpRCxLQUFkLENBQVA7QUFDQSxDQUxEOztBQU9BLElBQU14SSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDN0UsSUFBRCxFQUFVO0FBQzVCdU4sUUFBTSxDQUFDQyxRQUFQLENBQWdCeE4sSUFBaEIsR0FBdUJBLElBQXZCO0FBQ0EsQ0FGRDs7QUFJQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLE1BQUlELElBQUksR0FBR3VOLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnhOLElBQTNCOztBQUVBLE1BQUksYUFBYSxPQUFPdU4sTUFBTSxDQUFDQyxRQUFQLENBQWdCeE4sSUFBeEMsRUFBOEM7QUFDN0MsV0FBTyxJQUFQO0FBQ0E7O0FBRURBLE1BQUksR0FBR0EsSUFBSSxDQUFDNE4sU0FBTCxDQUFlLENBQWYsQ0FBUDs7QUFFQSxNQUFJLENBQUVoTCxNQUFNLENBQUNDLElBQVAsQ0FBWStCLElBQVosRUFBa0I4QixRQUFsQixDQUEyQjFHLElBQTNCLENBQU4sRUFBd0M7QUFDdkMsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsU0FBT0EsSUFBUDtBQUNBLENBZEQ7O0FBZ0JBLElBQU00RSxJQUFJLEdBQUc7QUFDWixXQUFTO0FBQUNFLFNBQUssRUFBRSxpQkFBUjtBQUEyQnVHLFVBQU0sRUFBRSxnQkFBQ3RMLE1BQUQ7QUFBQSxhQUFZLHlCQUFDLGlFQUFEO0FBQU8sY0FBTSxFQUFFQTtBQUFmLFFBQVo7QUFBQTtBQUFuQyxHQURHO0FBRVosYUFBVztBQUFDK0UsU0FBSyxFQUFFLGdCQUFSO0FBQTBCdUcsVUFBTSxFQUFFO0FBQUEsYUFBTSx5QkFBQyxtRUFBRCxPQUFOO0FBQUE7QUFBbEMsR0FGQztBQUdaLFVBQVE7QUFBQ3ZHLFNBQUssRUFBRSxhQUFSO0FBQXVCdUcsVUFBTSxFQUFFLGdCQUFDdEwsTUFBRDtBQUFBLGFBQVkseUJBQUMsZ0VBQUQ7QUFBTSxjQUFNLEVBQUVBO0FBQWQsUUFBWjtBQUFBO0FBQS9CLEdBSEk7QUFJWixlQUFhO0FBQUMrRSxTQUFLLEVBQUUsV0FBUjtBQUFxQnVHLFVBQU0sRUFBRTtBQUFBLGFBQU0seUJBQUMscUVBQUQsT0FBTjtBQUFBO0FBQTdCLEdBSkQ7QUFLWixtQkFBaUI7QUFBQ3ZHLFNBQUssRUFBRSxlQUFSO0FBQXlCdUcsVUFBTSxFQUFFO0FBQUEsYUFBTSx5QkFBQyx3RUFBRCxPQUFOO0FBQUE7QUFBakMsR0FMTDtBQU1aLGNBQVk7QUFBQ3ZHLFNBQUssRUFBRSxhQUFSO0FBQXVCdUcsVUFBTSxFQUFFO0FBQUEsYUFBTSx5QkFBQyxtRUFBRCxPQUFOO0FBQUE7QUFBL0I7QUFOQSxDQUFiOztBQVNBLElBQUkvSixRQUFRLENBQUN3SixHQUFiLEVBQWtCO0FBQ2pCbEcsTUFBSSxDQUFDa0csR0FBTCxHQUFXO0FBQUNoRyxTQUFLLEVBQUUsVUFBUjtBQUFvQnVHLFVBQU0sRUFBRTtBQUFBLGFBQU0seUJBQUMsK0RBQUQsT0FBTjtBQUFBO0FBQTVCLEdBQVg7QUFDQSxTQUFRekcsSUFBSSxDQUFDLFVBQUQsQ0FBWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRE0sSUFBTXFELFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUM0RixNQUFELEVBQVNySCxLQUFULEVBQW1DO0FBQUEsTUFBbkJzSCxNQUFtQix1RUFBVixLQUFVO0FBQzlERCxRQUFNLEdBQUcsWUFBWUEsTUFBWixJQUFzQkMsTUFBTSxHQUFHLFNBQUgsR0FBZSxFQUEzQyxDQUFUO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUkxUCxFQUFFLENBQUM4QixHQUFILENBQU9HLE1BQVAsQ0FBY0MsUUFBbEIscUJBQ1pzTixNQURZLEVBQ0hySCxLQURHLEVBQWQ7QUFJQSxTQUFPLElBQUl3QyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQy9COEUsU0FBSyxDQUFDQyxJQUFOLEdBQWEzTixJQUFiLENBQWtCLFVBQUNJLENBQUQsRUFBTztBQUN4QixVQUFJLENBQUVBLENBQUYsSUFBTyxDQUFFQSxDQUFDLENBQUNvTixNQUFELENBQUgsS0FBZ0JySCxLQUEzQixFQUFrQztBQUNqQ3lDLGVBQU8sQ0FBQztBQUFDN0MsaUJBQU8sRUFBRTtBQUFWLFNBQUQsQ0FBUDtBQUNBOztBQUNENkMsYUFBTyxDQUFDO0FBQUM3QyxlQUFPLEVBQUU7QUFBVixPQUFELENBQVA7QUFDQSxLQUxEO0FBTUEsR0FQTSxDQUFQO0FBUUEsQ0FkTTtBQWdCQSxJQUFNSCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDZ0ksS0FBRCxFQUFROU8sSUFBUixFQUFpQztBQUFBLE1BQW5CK08sTUFBbUIsdUVBQVYsS0FBVTtBQUNwRCxTQUFPQyxXQUFXLENBQUNGLEtBQUQsRUFBUUMsTUFBUixFQUFnQi9PLElBQWhCLENBQWxCO0FBQ0EsQ0FGTTtBQUlBLElBQU1pTCxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDNkQsS0FBRCxFQUEyQjtBQUFBLE1BQW5CQyxNQUFtQix1RUFBVixLQUFVO0FBQzdDLFNBQU9DLFdBQVcsQ0FBQ0YsS0FBRCxFQUFRQyxNQUFSLEVBQWdCLEVBQWhCLEVBQW9CLEtBQXBCLENBQWxCO0FBQ0EsQ0FGTTs7QUFJUCxJQUFNQyxXQUFXO0FBQUEscUVBQUcsaUJBQU9GLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBY0Msa0JBQWQsMkRBQXVCLEtBQXZCO0FBQThCL08sZ0JBQTlCLDJEQUFxQyxFQUFyQztBQUF5Q2lQLGtCQUF6QywyREFBa0QsTUFBbEQ7QUFDYjdHLG1CQURhLEdBQ0g7QUFDZjZHLG9CQUFNLEVBQUVBLE1BRE87QUFFZkMscUJBQU8sRUFBRTtBQUNSLDBCQUFVLGtCQURGO0FBRVIsZ0NBQWdCLGtCQUZSO0FBR1IsOEJBQWMvTSxRQUFRLENBQUNnTjtBQUhmO0FBRk0sYUFERzs7QUFVbkIsZ0JBQUksV0FBV0YsTUFBZixFQUF1QjtBQUN0QjdHLHFCQUFPLENBQUNnSCxJQUFSLEdBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFldFAsSUFBZixDQUFmO0FBQ0E7O0FBWmtCO0FBQUEsbUJBY05xQixLQUFLLENBQUN5TixLQUFELEVBQVExRyxPQUFSLENBQUwsQ0FBc0JsSCxJQUF0QixDQUEyQixVQUFDOEYsUUFBRCxFQUFjO0FBQ3JELHFCQUFPK0gsTUFBTSxHQUFHL0gsUUFBSCxHQUFjQSxRQUFRLENBQUN1SSxJQUFULEVBQTNCO0FBQ0EsYUFGWSxDQWRNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWFAsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQixDIiwiZmlsZSI6Ii4vYnVpbGQvYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFjY29yZGlvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7aXNPcGVuLCB0aXRsZSwgY2hpbGRyZW59ID0gcHJvcHM7XG5cdGNvbnN0IFsgb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoaXNPcGVuKTtcblx0Y29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAnYWNjb3JkaW9uJywgeydvcGVuJzogb3BlbiwgJ2Nsb3NlZCc6ICEgb3BlbiB9IF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0YXJpYS1leHBhbmRlZD17b3Blbn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oISBvcGVuKX1cblx0XHRcdD5cblx0XHRcdFx0XHR7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdGl0bGVcIj57dGl0bGV9PC9kaXY+fVxuXHRcdFx0XHRcdDxEYXNoaWNvblxuXHRcdFx0XHRcdFx0aWNvbj17b3BlbiA/ICdhcnJvdy11cC1hbHQyJyA6ICdhcnJvdy1kb3duLWFsdDInfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIiBzdHlsZT17e2hlaWdodDogb3BlbiA/ICdhdXRvJyA6ICcwcHgnfX0+XG5cdFx0XHRcdHtjaGlsZHJlbiAmJiBjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IFRhYnNDb250ZW50IGZyb20gJy4vVGFic0NvbnRlbnQnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnLi9TbmFja2Jhcic7XG5pbXBvcnQge2dldFRhYkhhc2h9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQge2dldCwgc2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7dXNlU3RhdGUsIEZyYWdtZW50LCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgQXBwID0gKHtzZXRTZXR0aW5ncywgdG9hc3R9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFsgY3VycmVudFRhYiwgc2V0VGFiIF0gPSB1c2VTdGF0ZSgnc3RhcnQnKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBzZW5kKCdodHRwOi8vbG9jYWxob3N0OjgwODAvd3AtanNvbi93cC92Mi9zZXR0aW5ncycsIHt9KS50aGVuKChyKT0+Y29uc29sZS5sb2cocikpO1xuXHRcdGNvbnN0IGhhc2ggPSBnZXRUYWJIYXNoKCk7XG5cdFx0aWYgKG51bGwgIT09IGhhc2gpIHtcblx0XHRcdHNldFRhYihoYXNoKTtcblx0XHR9XG5cblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0d3AuYXBpLmxvYWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0dGluZ3MgPSBuZXcgd3AuYXBpLm1vZGVscy5TZXR0aW5ncygpO1xuXHRcdFx0c2V0dGluZ3MuZmV0Y2goKS50aGVuKHIgPT4ge1xuXHRcdFx0XHRzZXRTZXR0aW5ncyhyKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSwgW10pO1xuXHRpZiAobG9hZGluZykge1xuXHRcdHJldHVybiA8TG9hZGluZy8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8SGVhZGVyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9IHNldFRhYj17c2V0VGFifS8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdDxOb3RpZmljYXRpb25zLz5cblx0XHRcdFx0XHQ8VGFic0NvbnRlbnQgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxTaWRlYmFyIGN1cnJlbnRUYWI9e2N1cnJlbnRUYWJ9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e3RvYXN0KCkgJiYgPFNuYWNrYmFyLz59XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0U2V0dGluZ3N9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFNldHRpbmdzOiAob2JqZWN0KSA9PiBzZXRTZXR0aW5ncyhvYmplY3QpXG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRUb2FzdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvYXN0OiAoKSA9PiBnZXRUb2FzdCgpXG5cdFx0fTtcblx0fSlcbikoQXBwKTtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2ljb24sIGljb25BbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4sIGNsYXNzTmFtZXN9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsIGNsYXNzTmFtZXMgXSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICB7aWNvbiAmJiA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e2ljb259IGFsdD17aWNvbkFsdCB8fCAnaWNvbid9Lz59XG4gICAgICAgIHt0aXRsZSAmJiA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9BY2NvcmRpb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDaGFuZ2Vsb2cgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2NoYW5nZWxvZ30gPSBuZXZlRGFzaDtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRjaGFuZ2Vsb2cubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGF0ZSwgdmVyc2lvbiwgdHdlYWtzLCBmaXhlcywgZmVhdHVyZXN9ID0gZW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPVxuXHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9GcmFnbWVudD47XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEFjY29yZGlvbiBpc09wZW49ezAgPT09IGluZGV4fSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHRcdFx0XHR7ZmVhdHVyZXMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIHN1Y2Nlc3NcIj57X18oJ0ZlYXR1cmVzJywgJ25ldmUnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImVudHJpZXNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IDxsaT57ZmVhdHVyZX08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e2ZpeGVzICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnVncyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGVycm9yXCI+e19fKCdCdWcgRml4ZXMnLCAnbmV2ZScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZW50cmllc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZpeGVzLm1hcCgoZml4KSA9PiA8bGk+e2ZpeH08L2xpPil9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0e3R3ZWFrcyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR3ZWFrcyBjaGFuZ2Vsb2ctY2F0ZWdvcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj57X18oJ1R3ZWFrcycsICduZXZlJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJlbnRyaWVzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7dHdlYWtzLm1hcCgodHdlYWspID0+IDxsaT57dHdlYWt9PC9saT4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlbG9nO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgRmVhdHVyZVJvdyBmcm9tICcuLi9GZWF0dXJlUm93JztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7ZmVhdHVyZURhdGF9ID0gbmV2ZURhc2g7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjYXJkIHRhYmxlXCI+XG5cdFx0XHRcdDx0Ym9keSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkXCI+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImxhcmdlXCIvPlxuXHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIj57X18oJ05ldmUnLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImluZGljYXRvclwiPntfXygnTmV2ZSBQcm8nLCAnbmV2ZScpfTwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdHtmZWF0dXJlRGF0YS5tYXAoKGl0ZW0pID0+IDxGZWF0dXJlUm93IGl0ZW09e2l0ZW19Lz4pfVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIHVwc2VsbFwiPlxuXHRcdFx0XHQ8cD57X18oJ0dldCBhY2Nlc3MgdG8gYWxsIFBybyBmZWF0dXJlcyBhbmQgcG93ZXItdXAgeW91ciB3ZWJzaXRlJywgJ25ldmUnKX08L3A+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRocmVmPXtuZXZlRGFzaC51cGdyYWRlVVJMfVxuXHRcdFx0XHRcdGlzUHJpbWFyeT5cblx0XHRcdFx0XHR7X18oJ0dldCBOZXZlIFBybyBOb3cnLCAnbmV2ZScpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgSGVscCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2J1b3kuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdXZSB3YW50IHRvIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIHVzaW5nIE5ldmUsIGFuZCB0aGF0IGlzIHdoeSB3ZSBoYXZlIGdhdGhlcmVkIGFsbCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIGhlcmUgZm9yIHlvdS4gV2UgaG9wZSB5b3Ugd2lsbCBlbmpveSB1c2luZyBOZXZlIGFzIG11Y2ggYXMgd2UgZW5qb3kgY3JlYXRpbmcgZ3JlYXQgcHJvZHVjdHMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0aXNMYXJnZVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93b3JkcHJlc3Mub3JnL3N1cHBvcnQvdGhlbWUvbmV2ZS8nXG4gICAgICAgICAgPntfXygnQ29udGFjdCBTdXBwb3J0JywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdsaXN0LnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDaGFuZ2Vsb2cnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2FudCB0byBnZXQgdGhlIGdpc3Qgb24gdGhlIGxhdGVzdCB0aGVtZSBjaGFuZ2VzPyBKdXN0IGNvbnN1bHQgb3VyIGNoYW5nZWxvZyBiZWxvdyB0byBnZXQgYSB0YXN0ZSBvZiB0aGUgcmVjZW50IGZpeGVzIGFuZCBmZWF0dXJlcyBpbXBsZW1lbnRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuICAgICAgICAgID57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICd0YWNob21ldGVyLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSWYgeW91IGZpbmQgeW91cnNlbGYgaW4gYSBzaXR1YXRpb24gd2hlcmUgZXZlcnl0aGluZyBvbiB5b3VyIHNpdGUgaXMgcnVubmluZyB2ZXJ5IHNsb3dseSwgeW91IG1pZ2h0IGNvbnNpZGVyIGhhdmluZyBhIGxvb2sgYXQgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgd2hlcmUgeW91IHdpbGwgZmluZCB0aGUgbW9zdCBjb21tb24gaXNzdWVzIGNhdXNpbmcgdGhpcyBhbmQgcG9zc2libGUgc29sdXRpb25zIGZvciBlYWNoIG9mIHRoZSBpc3N1ZXMuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS82My1zcGVlZC11cC15b3VyLXdvcmRwcmVzcy1zaXRlXCI+XG4gICAgICAgICAgICB7X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGNvbC1sYXN0XCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ3BhZ2Uuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0RvY3VtZW50YXRpb24nLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvOTQ2LW5ldmUtZG9jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7X18oJ0dvIHRvIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2Nsb25lLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdDcmVhdGUgYSBjaGlsZCB0aGVtZScsICduZXZlJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xNC1ob3ctdG8tY3JlYXRlLWEtY2hpbGQtdGhlbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYXJyb3dzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSW4gdGhlIGRvY3VtZW50YXRpb24gYmVsb3cgeW91IHdpbGwgZmluZCBhbiBlYXN5IHdheSB0byBidWlsZCBhIGdyZWF0IGxvb2tpbmcgbGFuZGluZyBwYWdlIHVzaW5nIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXIgcGx1Z2luLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMjE5LWhvdy10by1idWlsZC1hLWxhbmRpbmctcGFnZS13aXRoLWEtZHJhZy1hbmQtZHJvcC1jb250ZW50LWJ1aWxkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IE1vZHVsZUNhcmQgZnJvbSAnLi4vTW9kdWxlQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IFBybyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7bW9kdWxlc30gPSBuZXZlRGFzaDtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRPYmplY3Qua2V5cyhtb2R1bGVzKS5tYXAoKGlkKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxNb2R1bGVDYXJkIHNsdWc9e2lkfS8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05ldmUgbm93IGNvbWVzIHdpdGggYSBzaXRlcyBsaWJyYXJ5IHdpdGggdmFyaW91cyBkZXNpZ25zIHRvIHBpY2sgZnJvbS4gVmlzaXQgb3VyIGNvbGxlY3Rpb24gb2YgZGVtb3MgdGhhdCBhcmUgY29uc3RhbnRseSBiZWluZyBhZGRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFRhYignc3RhcnRlci1zaXRlcycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+e19fKCdHbyB0byBTdGFydGVyIFNpdGVzJywgJ25ldmUnKX08L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdwYWdlLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdHZXR0aW5nIFN0YXJ0ZWQ/IENoZWNrIGhlbHAgYW5kIGRvY3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG4gICAgICAgICAgPntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJDdXN0b21pemVyTGlua3MoKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cblxuY29uc3QgcmVuZGVyQ3VzdG9taXplckxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IG5ldmVEYXNoLmN1c3RvbWl6ZXJTaG9ydGN1dHM7XG4gIGNvbnN0IHNwbGl0ID0gTWF0aC5jZWlsKGxpbmtzLmxlbmd0aCAvIDIpO1xuICBjb25zdCBwYXJ0cyA9IFsgbGlua3Muc2xpY2UoMCwgc3BsaXQpLCBsaW5rcy5zbGljZShzcGxpdCkgXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIHtcbiAgICAgICAgcGFydHMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc0xpbmsgaHJlZj17aXRlbS5saW5rfT57aXRlbS50ZXh0fTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAhPT0gY29sdW1uLmxlbmd0aCAtIDEgJiYgPGhyLz59XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydDtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU3RhcnRlclNpdGVzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgU3RhcnRlciBTaXRlc1xuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydGVyU2l0ZXM7XG4iLCJjb25zdCB7RGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuaW1wb3J0IE9uQ2xpY2tPdXRzaWRlIGZyb20gJy4vVXRpbHMvT25DbGlja091dHNpZGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEZlYXR1cmVSb3cgPSAoe2l0ZW19KSA9PiB7XG5cdGNvbnN0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGluTGl0ZX0gPSBpdGVtO1xuXHRjb25zdCBbIHRvb2x0aXAsIHRvZ2dsZVRvb2x0aXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgWyBmb3JjZVRvb2xUaXAsIHRvZ2dsZUZvcmNlVG9vbHRpcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PHRyIGNsYXNzTmFtZT1cImZlYXR1cmUtcm93XCI+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwibGFyZ2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmZWF0LXdyYXBcIj5cblx0XHRcdFx0XHQ8aDQ+e3RpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0PE9uQ2xpY2tPdXRzaWRlIGFjdGlvbj17KCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9nZ2xlRm9yY2VUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHR9fT4gPGFcblx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKHRydWUpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHR0b2dnbGVUb29sdGlwKGZhbHNlKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZUZvcmNlVG9vbHRpcCh0cnVlKTtcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PERhc2hpY29uIGljb249XCJpbmZvXCIvPlxuXHRcdFx0XHRcdFx0eyh0b29sdGlwIHx8IGZvcmNlVG9vbFRpcCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9PbkNsaWNrT3V0c2lkZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PHRkIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdpbmRpY2F0b3InLCB7J2Vycm9yJzogISBpbkxpdGUsICdzdWNjZXNzJzogaW5MaXRlfSBdKX0+XG5cdFx0XHRcdDxEYXNoaWNvbiBzaXplPXszMH0gaWNvbj17aW5MaXRlID8gJ3llcycgOiAnbm8tYWx0J30vPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJpbmRpY2F0b3Igc3VjY2Vzc1wiPlxuXHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MzB9IGljb249XCJ5ZXNcIi8+XG5cdFx0XHQ8L3RkPlxuXHRcdDwvdHI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlUm93O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge2FkZFVybEhhc2gsIGdldFRhYkhhc2gsIHRhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuXHRcdGlmIChudWxsID09PSBoYXNoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHByb3BzLnNldFRhYihoYXNoKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtyZW5kZXJIZWFkKCl9XG5cdFx0XHRcdHtyZW5kZXJOYXZpZ2F0aW9uKHByb3BzKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufTtcblxuY29uc3QgcmVuZGVySGVhZCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bmV2ZURhc2guc3RyaW5ncy5oZWFkZXJ9PC9oMT5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj57bmV2ZURhc2gudmVyc2lvbn08L3NwYW4+XG5cdFx0XHQ8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9sb2dvLnN2Zyd9IGFsdD17X18oJ05ldmUgVGhlbWUgTG9nbycsICduZXZlJyl9Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdHtPYmplY3Qua2V5cyh0YWJzKS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8bGk+PGFcblx0XHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gaXRlbSA/ICdhY3RpdmUnIDogJyd9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNldFRhYihpdGVtKTtcblx0XHRcdFx0XHRcdFx0YWRkVXJsSGFzaChpdGVtKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Pnt0YWJzW2l0ZW1dLmxhYmVsfVxuXHRcdFx0XHRcdDwvYT48L2xpPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7QnV0dG9uLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuXG5jb25zdCBMaWNlbnNlQ2FyZCA9ICh7aXNWaXNpYmxlLCBjaGFuZ2VUaWVyfSkgPT4ge1xuXHRjb25zdCB7bGljZW5zZSwgcHJvQXBpfSA9IG5ldmVEYXNoO1xuXHRjb25zdCBbIGtleSwgc2V0S2V5IF0gPSB1c2VTdGF0ZShsaWNlbnNlICYmICd2YWxpZCcgPT09IGxpY2Vuc2UudmFsaWQgPyBsaWNlbnNlLmtleSB8fCAnJyA6ICcnKTtcblx0Y29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbIHZhbGlkLCBzZXRWYWxpZCBdID0gdXNlU3RhdGUobGljZW5zZS52YWxpZCB8fCAnaW52YWxpZCcpO1xuXHRjb25zdCBbIGV4cGlyYXRpb24sIHNldEV4cGlyYXRpb24gXSA9IHVzZVN0YXRlKGxpY2Vuc2UuZXhwaXJhdGlvbiB8fCAnJyk7XG5cdGNvbnN0IFsgdG9hc3QsIHNldFRvYXN0IF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFsgdG9hc3RUeXBlLCBzZXRUb2FzdFR5cGUgXSA9IHVzZVN0YXRlKCdzdWNjZXNzJyk7XG5cblx0aWYgKCEgaXNWaXNpYmxlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB0b2dnbGVMaWNlbnNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvRG8gPSAndmFsaWQnID09PSB2YWxpZCA/ICdkZWFjdGl2YXRlJyA6ICdhY3RpdmF0ZSc7XG5cdFx0c2V0U3RhdHVzKCdhY3RpdmF0ZScgPT09IHRvRG8gPyAnYWN0aXZhdGluZycgOiAnZGVhY3RpdmF0aW5nJyk7XG5cdFx0c2VuZChwcm9BcGkgKyAnL3RvZ2dsZV9saWNlbnNlJywge2tleSwgYWN0aW9uOiB0b0RvfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHNldFRvYXN0VHlwZShyZXNwb25zZS5zdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyk7XG5cdFx0XHRzZXRLZXkoJ2FjdGl2YXRlJyA9PT0gdG9EbyA/IGtleSA6ICcnKTtcblx0XHRcdHNldFRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuXHRcdFx0c2V0RXhwaXJhdGlvbihyZXNwb25zZS5leHBpcmF0aW9uKTtcblx0XHRcdHNldFZhbGlkKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgJ2FjdGl2YXRlJyA9PT0gdG9EbyA/ICd2YWxpZCcgOiAnbm90X2FjdGl2ZScpO1xuXHRcdFx0c2V0U3RhdHVzKGZhbHNlKTtcblx0XHRcdG5ldmVEYXNoLmxpY2Vuc2UuZXhwaXJhdGlvbiA9IHJlc3BvbnNlLmV4cGlyYXRpb247XG5cdFx0XHRjaGFuZ2VUaWVyKHJlc3BvbnNlLnRpZXIgfHwgMSk7XG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkIGxpY2Vuc2VcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdDxoND57X18oJ05ldmUgUHJvIEFkZG9uIGxpY2Vuc2UnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdDxwPkVudGVyIHlvdXIgbGljZW5zZSBmcm9tIDxhIGhyZWY9XCJodHRwczovL3N0b3JlLnRoZW1laXNsZS5jb21cIj5UaGVtZUlzbGU8L2E+IHB1cmNoYXNlIGhpc3RvcnkgaW4gb3JkZXIgdG8gZ2V0XG5cdFx0XHRcdFx0cGx1Z2luIHVwZGF0ZXM8L3A+XG5cdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImxpY2Vuc2UtZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4ge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVMaWNlbnNlKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJsaWNlbnNlLWZpZWxkXCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsndmFsaWQnID09PSB2YWxpZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRLZXkoZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0J3ZhbGlkJyA9PT0gdmFsaWQgP1xuXHRcdFx0XHRcdFx0XHRcdCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionICsga2V5LnNsaWNlKC01KSA6XG5cdFx0XHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17X18oJ0VudGVyIExpY2Vuc2UgS2V5JywgJ25ldmUnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzUHJpbWFyeT17J3ZhbGlkJyAhPT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeT17J3ZhbGlkJyA9PT0gdmFsaWR9XG5cdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdHVzIHx8ICEga2V5fVxuXHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0eyEgc3RhdHVzID9cblx0XHRcdFx0XHRcdFx0KCd2YWxpZCcgPT09IHZhbGlkID9cblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRfXygnQWN0aXZhdGUnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdFx0XHQoJ2FjdGl2YXRpbmcnID09PSBzdGF0dXMgP1xuXHRcdFx0XHRcdFx0XHRcdFx0X18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpIDpcblx0XHRcdFx0XHRcdFx0XHRcdF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHR7dG9hc3QgJiYgPFRvYXN0IHR5cGU9e3RvYXN0VHlwZX0gZGlzbWlzcz17c2V0VG9hc3R9IG1lc3NhZ2U9e3RvYXN0fS8+fVxuXHRcdFx0XHR7ISBbICdub3RfYWN0aXZlJywgJ2ludmFsaWQnIF0uaW5jbHVkZXModmFsaWQpICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGljZW5zZS1mb290ZXJcIj5cblx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWVzKFsgJ3N0YXR1cy1pY29uJywgJ3ZhbGlkJyA9PT0gdmFsaWQgPyAnc3VjY2VzcycgOiAnZXJyb3InIF0pXG5cdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHQ8RGFzaGljb24gc2l6ZT17MTR9IGljb249eyd2YWxpZCcgPT09IHZhbGlkID8gJ3llcycgOiAnbm8nfS8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2YWxpZGl0eVwiPlxuXHRcdFx0XHRcdFx0XHR7J3ZhbGlkJyA9PT0gdmFsaWQgPyBfXygnVmFsaWQnLCAnbmV2ZScpIDogX18oJ0V4cGlyZWQnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2V4cGlyYXRpb24gJiZcblx0XHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+LTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZXhwaXJlc1wiPlxuXHRcdFx0XHRcdFx0eygndmFsaWQnID09PSB2YWxpZCA/XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVzJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdF9fKCdFeHBpcmVkJywgJ25ldmUnKSkgKyAnICcgKyBleHBpcmF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FzaWRlPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRjb25zdCB7Y2hhbmdlTGljZW5zZVRpZXJ9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdHJldHVybiB7XG5cdFx0Y2hhbmdlVGllcjogKG5ld1RpZXIpID0+IHtcblx0XHRcdGNoYW5nZUxpY2Vuc2VUaWVyKG5ld1RpZXIpO1xuXHRcdH1cblx0fTtcbn0pKExpY2Vuc2VDYXJkKTtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtb2NrLWRhc2hcIj5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nIGxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uIGxvYWRpbmdcIj52Mi42LjI8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgbG9nb1wiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbShBcnJheSg2KSkubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGxpPjxhIGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+PC9saT47XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9uYXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHR7T2JqZWN0LmtleXMobmV2ZURhc2gubm90aWZpY2F0aW9ucykubWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gbG9hZGluZyBwbGFjZWhvbGRlclwiLz47XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnQgY29sdW1ucyBzdGFydFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nIGljb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibG9hZGluZyB0aXRsZVwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9hZGluZyBjb21wb25lbnRzLWJ1dHRvbiBpcy1idXR0b24gaXMtZGVmYXVsdCBpcy1wcmltYXJ5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbWl6ZXItcXVpY2stbGlua3NcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgaWNvblwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJsb2FkaW5nIHRpdGxlXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoci8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBcIj5cblx0XHRcdFx0XHQ8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibG9hZGluZ1wiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbGlua1wiLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJsb2FkaW5nXCIvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2FkaW5nIGNhcmQtZGVzY3JpcHRpb25cIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsaW5rXCIvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImxvYWRpbmdcIi8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvYWRpbmcgY2FyZC1kZXNjcmlwdGlvblwiLz5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9hZGluZyBjYXJkLWRlc2NyaXB0aW9uXCIvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxpbmtcIi8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2FzaWRlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4vQWNjb3JkaW9uJztcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSAnLi9PcHRpb25zL0lucHV0Rm9ybSc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vT3B0aW9ucy9Ub2dnbGUnO1xuaW1wb3J0IHtjaGFuZ2VPcHRpb259IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7QnV0dG9uLCBUb2dnbGVDb250cm9sLCBEYXNoaWNvbn0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge3dpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaH0gPSB3cC5kYXRhO1xuY29uc3Qge0ZyYWdtZW50LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBNb2R1bGVDYXJkID0gKHtzbHVnLCBzZXRUb2FzdCwgY2hhbmdlTW9kdWxlU3RhdHVzLCBnZXRNb2R1bGVTdGF0dXMsIHRpZXJ9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB7XG5cdFx0bmljZW5hbWUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0YXZhaWxhYmlsaXR5TGV2ZWwsXG5cdFx0b3B0aW9ucyxcblx0XHRvcmRlcixcblx0XHRkb2N1bWVudGF0aW9uLFxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRyZXF1aXJlZF9hY3Rpb25zXG5cdH0gPSBuZXZlRGFzaC5tb2R1bGVzW3NsdWddO1xuXHRjb25zdCB7dXBncmFkZUxpbmtzfSA9IG5ldmVEYXNoO1xuXG5cdGZ1bmN0aW9uIHJlbmRlck9wdGlvbnNBY2NvcmRpb25zKCkge1xuXHRcdHJldHVybiBvcHRpb25zLm1hcCgoZ3JvdXApID0+IHtcblx0XHRcdGNvbnN0IHtsYWJlbCwgb3B0aW9uc30gPSBncm91cDtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxBY2NvcmRpb24gdGl0bGU9e2xhYmVsfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgob3B0aW9uU2x1ZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB7bGFiZWwsIHR5cGUsIHBsYWNlaG9sZGVyfSA9IG9wdGlvbnNbb3B0aW9uU2x1Z107XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyd0ZXh0JyA9PT0gdHlwZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PElucHV0Rm9ybVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17bGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsdWc9e29wdGlvblNsdWd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7J3RvZ2dsZScgPT09IHR5cGUgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbHVnPXtvcHRpb25TbHVnfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQWNjb3JkaW9uPlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkIG1vZHVsZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntuaWNlbmFtZX08L2gzPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwXCI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGllciA8IGF2YWlsYWJpbGl0eUxldmVsID9cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1ByaW1hcnkgaHJlZj17dXBncmFkZUxpbmtzW2F2YWlsYWJpbGl0eUxldmVsXX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdVcGdyYWRlJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+IDpcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdHtsb2FkaW5nICYmIDxEYXNoaWNvbiBzaXplPXsxOH0gaWNvbj1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cImlzLWxvYWRpbmdcIi8+fVxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtnZXRNb2R1bGVTdGF0dXMoc2x1Zyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU9wdGlvbihzbHVnLCB2YWx1ZSwgdHJ1ZSkudGhlbigocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1cyhzbHVnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodmFsdWUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9fKCdNb2R1bGUgQWN0aXZhdGVkJywgJ25ldmUnKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X18oJ01vZHVsZSBEZWFjdGl2YXRlZC4nLCAnbmV2ZScpKSArIGAgKCR7bmljZW5hbWV9KWApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChfXygnQ291bGQgbm90IGFjdGl2YXRlIG1vZHVsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdHtkZXNjcmlwdGlvbiArICcgJ31cblx0XHRcdFx0XHR7ZG9jdW1lbnRhdGlvbiAmJlxuXHRcdFx0XHRcdDxhIGhyZWY9e2RvY3VtZW50YXRpb24udXJsfT57X18oJ0xlYXJuIE1vcmUnLCAnbmV2ZScpfTwvYT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvcD5cblx0XHRcdFx0eygwIDwgb3B0aW9ucy5sZW5ndGggJiYgdHJ1ZSA9PT0gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpKSAmJlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZHVsZS1vcHRpb25zXCI+XG5cdFx0XHRcdFx0e3JlbmRlck9wdGlvbnNBY2NvcmRpb25zKCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtnZXRNb2R1bGVTdGF0dXMsIGdldExpY2Vuc2VUaWVyfSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0TW9kdWxlU3RhdHVzOiAoc2x1ZykgPT4gZ2V0TW9kdWxlU3RhdHVzKHNsdWcpLFxuXHRcdFx0dGllcjogZ2V0TGljZW5zZVRpZXIoKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZVN0YXR1cywgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU1vZHVsZVN0YXR1czogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVTdGF0dXMoc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKE1vZHVsZUNhcmQpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbIGhpZGRlbiwgc2V0SGlkZGVuIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHt0ZXh0LCBjdGEsIHR5cGUsIHVwZGF0ZX0gPSBwcm9wcy5kYXRhO1xuICBjb25zdCBbIGluUHJvZ3Jlc3MsIHNldEluUHJvZ3Jlc3MgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBkb25lLCBzZXREb25lIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuICAgIFtcbiAgICAgICdub3RpZmljYXRpb24nLFxuICAgICAgcHJvcHMuc2x1ZyxcbiAgICAgIHR5cGUgPyB0eXBlIDogJycsXG4gICAgICB7XG4gICAgICAgICdzdWNjZXNzJzogZG9uZSxcbiAgICAgICAgJ2hpZGRlbic6IGRvbmVcbiAgICAgIH1cbiAgICBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISBkb25lID8gPHA+e3RleHR9PC9wPiA6IDxwPjxEYXNoaWNvbiBpY29uPVwieWVzXCIvPntfXygnRG9uZSEnLCAnbmV2ZScpfTwvcD59XG4gICAgICB7KGN0YSAmJiAhIGRvbmUpICYmXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9uIGFzIGNoYW5nZVNldHRpbmd9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b24sIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IElucHV0Rm9ybSA9ICh7c2x1ZywgbGFiZWwsIHBsYWNlaG9sZGVyLCBnZXRPcHRpb24sIHNldFRvYXN0LCBjaGFuZ2VPcHRpb259KSA9PiB7XG5cdGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZShnZXRPcHRpb24oc2x1ZykpO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9kdWxlLW9wdGlvbiB0ZXh0Jz5cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtcblx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdFx0XHRjaGFuZ2VTZXR0aW5nKCBzbHVnLCB2YWx1ZSApLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICggci5zdWNjZXNzICkge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VPcHRpb24oc2x1ZywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRUb2FzdCggdHJ1ZSApO1xuXHRcdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VG9hc3QoIGZhbHNlICk7XG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fT5cblx0XHRcdFx0e2xhYmVsICYmIDxsYWJlbCBodG1sRm9yPXtzbHVnfT57bGFiZWx9PC9sYWJlbD59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcFwiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0aWQ9e3NsdWd9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17XG5cdFx0XHRcdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtsb2FkaW5nID8gJ2lzLWxvYWRpbmcnIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtsb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NhdmUnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0XHRpY29uPXtsb2FkaW5nID8gJ3VwZGF0ZScgOiAnZWRpdG9yLWJyZWFrJ31cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRnZXRPcHRpb25cblx0XHR9ID0gc2VsZWN0KCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRPcHRpb246IChzbHVnKSA9PiBnZXRPcHRpb24oc2x1Zylcblx0XHR9O1xuXHR9KSxcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdGNvbnN0IHtjaGFuZ2VNb2R1bGVPcHRpb24sIHNldFRvYXN0fSA9IGRpc3BhdGNoKCduZXZlLWRhc2hib2FyZCcpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFuZ2VPcHRpb246IChzbHVnLCB2YWx1ZSkgPT4gY2hhbmdlTW9kdWxlT3B0aW9uKHNsdWcsIHZhbHVlKSxcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KVxuKShJbnB1dEZvcm0pO1xuXG4iLCJpbXBvcnQge2NoYW5nZU9wdGlvbiBhcyBjaGFuZ2VTZXR0aW5nfSBmcm9tICcuLi8uLi91dGlscy9yZXN0JztcblxuY29uc3Qge1RvZ2dsZUNvbnRyb2wsIERhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aFNlbGVjdCwgd2l0aERpc3BhdGNofSA9IHdwLmRhdGE7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3VzZVN0YXRlfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBUb2dnbGUgPSAoe3NsdWcsIGxhYmVsLCBnZXRPcHRpb24sIGNoYW5nZU9wdGlvbiwgc2V0VG9hc3R9KSA9PiB7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtb2R1bGUtb3B0aW9uIHRvZ2dsZSc+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRjaGVja2VkPXtnZXRPcHRpb24oc2x1Zyl9XG5cdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0Y2hhbmdlU2V0dGluZyggc2x1ZywgdmFsdWUgKS50aGVuKChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIHIuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlT3B0aW9uKHNsdWcsIHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0c2V0VG9hc3QoIHRydWUgKTtcblx0XHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRvYXN0KCBmYWxzZSApO1xuXHRcdFx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0e2xvYWRpbmcgJiYgPERhc2hpY29uIHNpemU9ezE4fSBpY29uPVwidXBkYXRlXCIgY2xhc3NOYW1lPVwiaXMtbG9hZGluZ1wiLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGdldE9wdGlvblxuXHRcdH0gPSBzZWxlY3QoJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdldE9wdGlvbjogKHNsdWcpID0+IGdldE9wdGlvbihzbHVnKVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0Y29uc3Qge2NoYW5nZU1vZHVsZU9wdGlvbiwgc2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYW5nZU9wdGlvbjogKHNsdWcsIHZhbHVlKSA9PiBjaGFuZ2VNb2R1bGVPcHRpb24oc2x1ZywgdmFsdWUpLFxuXHRcdFx0c2V0VG9hc3Q6IChtZXNzYWdlKSA9PiBzZXRUb2FzdChtZXNzYWdlKVxuXHRcdH07XG5cdH0pXG4pKFRvZ2dsZSk7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2dldH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzbHVnLCBkYXRhfSA9IHByb3BzO1xuICBjb25zdCB7YmFubmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgdmVyc2lvbiwgYXV0aG9yfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgYWN0aW9uLCBzZXRBY3Rpb24gXSA9IHVzZVN0YXRlKGRhdGEuY3RhKTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RyaW5nTWFwID0ge1xuICAgICdpbnN0YWxsJzoge3N0YXRpYzogX18oJ0luc3RhbGwnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0luc3RhbGxpbmcnLCAnbmV2ZScpfSxcbiAgICAnYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnQWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpfSxcbiAgICAnZGVhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsICdwbHVnaW4nLCBzbHVnIF0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lcn0gYWx0PXtfXygnQmFubmVyIEltYWdlJywgJ25hbWUnKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGx1Z2luLWRhdGFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwbHVnaW4tYWN0aW9uXCJcbiAgICAgICAgICBpc1ByaW1hcnk9e1sgJ2luc3RhbGwnLCAnYWN0aXZhdGUnIF0uaW5jbHVkZXMoYWN0aW9uKX1cbiAgICAgICAgICBpc1NlY29uZGFyeT17J2RlYWN0aXZhdGUnID09PSBhY3Rpb259XG4gICAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgICAgICAgICAgIGlmICgnaW5zdGFsbCcgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICBpbnN0YWxsUGx1Z2luKHNsdWcpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISByLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0KGRhdGFbYWN0aW9uXSwgdHJ1ZSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICBpZiAoISByLm9rKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUb2RvIGhhbmRsZSBlcnJvciB3aXRoIHRvYXN0cz9cbiAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJ2FjdGl2YXRlJyA9PT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdkZWFjdGl2YXRlJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldEluUHJvZ3Jlc3MoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHshIGluUHJvZ3Jlc3MgJiYgc3RyaW5nTWFwW2FjdGlvbl0uc3RhdGljfVxuICAgICAgICAgIHtpblByb2dyZXNzICYmIChcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPERhc2hpY29uIGljb249XCJ1cGRhdGVcIi8+XG4gICAgICAgICAgICAgIHtzdHJpbmdNYXBbYWN0aW9uXS5wcm9ncmVzcyArICcuLi4nfVxuICAgICAgICAgICAgPC9zcGFuPil9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBpbnN0YWxsUGx1Z2luKHNsdWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdwLnVwZGF0ZXMuYWpheCgnaW5zdGFsbC1wbHVnaW4nLCB7XG4gICAgICBzbHVnLFxuICAgICAgc3VjY2VzczogKHIpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7c3VjY2VzczogdHJ1ZX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XG5cbiAgICAgICAgLy8gZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UgYXJlIHBhcmFtcyBvZiBlcnIgaWYgd2UgdG9hc3QuXG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCB7c2VuZH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5pbXBvcnQgTGljZW5zZUNhcmQgZnJvbSAnLi9MaWNlbnNlQ2FyZCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge1RvZ2dsZUNvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjdXJyZW50VGFifSkgPT4ge1xuXHRjb25zdCBbIHRyYWNraW5nLCBzZXRUcmFja2luZyBdID0gdXNlU3RhdGUobmV2ZURhc2gub3B0aW9ucy5sb2dnZXIgfHwgZmFsc2UpO1xuXHRjb25zdCBbIHRvYXN0LCBzZXRUb2FzdCBdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbIHRvYXN0VHlwZSwgc2V0VG9hc3RUeXBlIF0gPSB1c2VTdGF0ZSgnc3VjY2VzcycpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwXCI+XG5cdFx0XHR7bmV2ZURhc2gucHJvICYmIDxMaWNlbnNlQ2FyZCBpc1Zpc2libGU9eydwcm8nID09PSBjdXJyZW50VGFifS8+fVxuXHRcdFx0PGFzaWRlIGNsYXNzTmFtZT1cInNpZGViYXIgY2FyZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ05ldmUgQ29tbXVuaXR5JywgJ25ldmUnKX08L2g0PlxuXHRcdFx0XHRcdDxwPntfXygnSm9pbiB0aGUgY29tbXVuaXR5IG9mIE5ldmUgdXNlcnMuIEdldCBjb25uZWN0ZWQsIHNoYXJlIG9waW5pb25zLCBhc2sgcXVlc3Rpb25zIGFuZCBoZWxwIGVhY2ggb3RoZXIhJyl9PC9wPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0ODY0NjQzNTUzNzI2Ni9cIj5cblx0XHRcdFx0XHRcdHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0PGg0PntfXygnTGVhdmUgdXMgYSByZXZpZXcnLCAnbmV2ZScpfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e19fKCdBcmUgeW91IGFyZSBlbmpveWluZyBOZXZlPyBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgeW91ciBmZWVkYmFjay4nLCAnbmV2ZScpfTwvcD5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDg2NDY0MzU1MzcyNjYvXCI+XG5cdFx0XHRcdFx0XHR7X18oJ0pvaW4gb3VyIEZhY2Vib29rIEdyb3VwJywgJ25ldmUnKX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuXHRcdFx0XHRcdDxoND57X18oJ0NvbnRyaWJ1dGluZycsICduZXZlJyl9PC9oND5cblx0XHRcdFx0XHQ8cD57X18oJ0JlY29tZSBhIGNvbnRyaWJ1dG9yIGJ5IG9wdGluZyBpbiB0byBvdXIgYW5vbnltb3VzIGRhdGEgdHJhY2tpbmcuIFdlIGd1YXJhbnRlZSBubyBzZW5zaXRpdmUgZGF0YSBpcyBjb2xsZWN0ZWQuJywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzExMjItbmV2ZS11c2FnZS10cmFja2luZ1wiPlxuXHRcdFx0XHRcdFx0XHR7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RyYWNraW5nfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbGxvdyBBbm9ueW1vdXMgVHJhY2tpbmcnLCAnbmV2ZScpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUcmFja2luZyh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHNlbmQobmV2ZURhc2guYXBpICsgJy90b2dnbGVfdHJhY2tpbmcnLCB7dmFsdWV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmICghIHJlc3BvbnNlLnN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0VHlwZSgnZXJyb3InKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRvYXN0KF9fKCdDb3VsZCBub3QgdXBkYXRlIG9wdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCAnbmV2ZScpKTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFRyYWNraW5nKCEgdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdFR5cGUoJ3N1Y2Nlc3MnKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RvYXN0ICYmXG5cdFx0XHRcdFx0PFRvYXN0IGRpc21pc3M9e3NldFRvYXN0fSBtZXNzYWdlPXt0b2FzdH0gdHlwZT17dG9hc3RUeXBlfS8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYXNpZGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiY29uc3Qge1NuYWNrYmFyfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3QgR2xvYmFsU25hY2tiYXIgPSAoe3RvYXN0LCBzZXRUb2FzdH0pID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFRvYXN0KG51bGwpO1xuXHRcdH0sIDMwMDApO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWVzc2FnZSA9IHRvYXN0KCk7XG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdG9wYWNpdHk6IG51bGwgPT09IG1lc3NhZ2UgPyAwIDogMVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBzdHlsZT17c3R5bGV9PlxuXHRcdFx0PFNuYWNrYmFyXG5cdFx0XHRcdGNsYXNzTmFtZT0nZGFzaC1ub3RpY2UnXG5cdFx0XHQ+XG5cdFx0XHRcdHsnYm9vbGVhbicgPT09IHR5cGVvZiBtZXNzYWdlID9cblx0XHRcdFx0XHQoZmFsc2UgPT09IG1lc3NhZ2UgP1xuXHRcdFx0XHRcdFx0X18oJ0NvdWxkIG5vdCBVcGRhdGUgT3B0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicsICduZXZlJykgOlxuXHRcdFx0XHRcdFx0X18oJ09wdGlvbiBVcGRhdGVkJywgJ25ldmUnKSkgOlxuXHRcdFx0XHRcdHRvYXN0KClcblx0XHRcdFx0fVxuXHRcdFx0PC9TbmFja2Jhcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRjb25zdCB7c2V0VG9hc3R9ID0gZGlzcGF0Y2goJ25ldmUtZGFzaGJvYXJkJyk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldFRvYXN0OiAobWVzc2FnZSkgPT4gc2V0VG9hc3QobWVzc2FnZSlcblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qge2dldFRvYXN0fSA9IHNlbGVjdCgnbmV2ZS1kYXNoYm9hcmQnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9hc3Q6ICgpID0+IGdldFRvYXN0KClcblx0XHR9O1xuXHR9KVxuKShHbG9iYWxTbmFja2Jhcik7XG5cbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHt0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBUYWJzQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y3VycmVudFRhYiwgc2V0VGFifSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RhYi1jb250ZW50JywgJ2NvbHVtbnMnLCBjdXJyZW50VGFiIF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0YWJzW2N1cnJlbnRUYWJdLnJlbmRlcihzZXRUYWIpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFic0NvbnRlbnQ7XG4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge3VzZUVmZmVjdH0gPSB3cC5lbGVtZW50O1xuY29uc3Qge0Rhc2hpY29ufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFRvYXN0ID0gKHttZXNzYWdlLCBkaXNtaXNzLCB0aW1lLCB0eXBlID0gJ2luZm8nfSkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpc21pc3MoJycpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fSwgdGltZSB8fCAyMDAwKTtcblx0fSk7XG5cdGNvbnN0IGljb25NYXAgPSB7XG5cdFx0J2luZm8nOiAnaW5mbycsXG5cdFx0J2Vycm9yJzogJ25vJyxcblx0XHQnc3VjY2Vzcyc6ICd5ZXMnLFxuXHRcdCd3YXJuaW5nJzogJ3dhcm5pbmcnXG5cdH07XG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFsgJ3RvYXN0JywgJ2NvbXBvbmVudHMtYW5pbWF0ZV9fYXBwZWFyJywgJ2lzLWZyb20tbWlkZGxlJywgdHlwZSBdKTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8RGFzaGljb24gaWNvbj17aWNvbk1hcFt0eXBlXX0vPlxuXHRcdFx0PHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJjb25zdCB7dXNlUmVmLCB1c2VFZmZlY3R9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgdXNlT3V0c2lkZUNsaWNrID0gKHJlZiwgY2FsbGJhY2spID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcblx0XHRcdGlmIChyZWYuY3VycmVudCAmJiAhIHJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcblx0XHR9O1xuXHR9LCBbIHJlZiBdKTtcbn07XG5cbmNvbnN0IE9uQ2xpY2tPdXRzaWRlID0gKHtjaGlsZHJlbiwgYWN0aW9ufSkgPT4ge1xuXHRjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuXHR1c2VPdXRzaWRlQ2xpY2sod3JhcHBlclJlZiwgYWN0aW9uKTtcblxuXHRyZXR1cm4gPGRpdiByZWY9e3dyYXBwZXJSZWZ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPbkNsaWNrT3V0c2lkZTtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9Db21wb25lbnRzL0FwcCc7XG5jb25zdCB7cmVnaXN0ZXJTdG9yZX0gPSB3cC5kYXRhO1xuY29uc3Qge3JlbmRlcn0gPSB3cC5lbGVtZW50O1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9zdG9yZS9yZWR1Y2VyJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi9zdG9yZS9zZWxlY3RvcnMnO1xuXG5yZWdpc3RlclN0b3JlKCduZXZlLWRhc2hib2FyZCcsIHtcblx0cmVkdWNlcixcblx0YWN0aW9ucyxcblx0c2VsZWN0b3JzXG59KTtcblxuY29uc3QgUm9vdCA9ICgpID0+IDxBcHAvPjtcbnJlbmRlcihcblx0PFJvb3QvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldmUtZGFzaGJvYXJkJylcbik7XG5cbiIsImltcG9ydCB7Y2hhbmdlT3B0aW9ufSBmcm9tICcuLi91dGlscy9yZXN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRzZXRTZXR0aW5ncyhvYmplY3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1NFVF9TRVRUSU5HUycsXG5cdFx0XHRwYXlsb2FkOiB7b2JqZWN0fVxuXHRcdH07XG5cdH0sXG5cdGNoYW5nZU1vZHVsZVN0YXR1cyhtb2R1bGVTbHVnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiAnVE9HR0xFX01PRFVMRScsXG5cdFx0XHRwYXlsb2FkOiB7bW9kdWxlU2x1ZzogJ252X3Byb18nICsgbW9kdWxlU2x1ZyArICdfc3RhdHVzJywgdmFsdWV9XG5cdFx0fTtcblx0fSxcblx0Y2hhbmdlTW9kdWxlT3B0aW9uKG9wdGlvblNsdWcsIG9wdGlvblZhbHVlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdDSEFOR0VfTU9EVUxFX09QVElPTicsXG5cdFx0XHRwYXlsb2FkOiB7b3B0aW9uU3RhdHVzOiAnbnZfcHJvXycgKyBvcHRpb25TbHVnLCBvcHRpb25WYWx1ZX1cblx0XHR9O1xuXHR9LFxuXHRjaGFuZ2VMaWNlbnNlVGllcih0aWVyKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdVUERBVEVfTElDRU5TRV9USUVSJyxcblx0XHRcdHBheWxvYWQ6IHt0aWVyfVxuXHRcdH07XG5cdH0sXG5cdHNldFRvYXN0KG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogJ1VQREFURV9UT0FTVF9NRVNTQUdFJyxcblx0XHRcdHBheWxvYWQ6IG1lc3NhZ2Vcblx0XHR9O1xuXHR9XG59O1xuIiwiLyogZ2xvYmFsIHdwLCBuZXZlRGFzaCAgKi9cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdHNldHRpbmdzOiB7fSxcblx0dGllcjogbmV2ZURhc2gucHJvID8gbmV2ZURhc2gubGljZW5zZS50aWVyIDogMCxcblx0dG9hc3Q6IG51bGxcbn07XG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ1NFVF9TRVRUSU5HUyc6XG5cdFx0XHRjb25zdCB7b2JqZWN0fSA9IGFjdGlvbi5wYXlsb2FkO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdHNldHRpbmdzOiBvYmplY3Rcblx0XHRcdH07XG5cdFx0Y2FzZSAnVE9HR0xFX01PRFVMRSc6XG5cdFx0XHRjb25zdCB7bW9kdWxlU2x1ZywgdmFsdWV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHQuLi5zdGF0ZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRbbW9kdWxlU2x1Z106IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRjYXNlICdDSEFOR0VfTU9EVUxFX09QVElPTic6XG5cdFx0XHRcdGxldCB7b3B0aW9uU3RhdHVzLCBvcHRpb25WYWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0Li4uc3RhdGUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRbb3B0aW9uU3RhdHVzXTogb3B0aW9uVmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0Y2FzZSAnVVBEQVRFX0xJQ0VOU0VfVElFUic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dGllcjogYWN0aW9uLnBheWxvYWQudGllclxuXHRcdFx0fTtcblx0XHRjYXNlICdVUERBVEVfVE9BU1RfTUVTU0FHRSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dG9hc3Q6IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdGdldE1vZHVsZVN0YXR1czogKHN0YXRlLCBzbHVnKSA9PiBzdGF0ZS5zZXR0aW5nc1snbnZfcHJvXycgKyBzbHVnICsgJ19zdGF0dXMnXSxcblx0Z2V0T3B0aW9uOiAoc3RhdGUsIHNsdWcpID0+IHN0YXRlLnNldHRpbmdzWydudl9wcm9fJyArIHNsdWddLFxuXHRnZXRMaWNlbnNlVGllcjogKHN0YXRlKSA9PiBzdGF0ZS50aWVyLFxuXHRnZXRUb2FzdDogKHN0YXRlKSA9PiBzdGF0ZS50b2FzdFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5pbXBvcnQgRnJlZVBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvRnJlZVBybyc7XG5cbmNvbnN0IGdldFVybFBhcmFtID0gKHBhcmFtKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cblx0cmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xufTtcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG5cdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG5cdGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cblx0aWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuXHRpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuXHQnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6ICgpID0+IDxQbHVnaW5zLz59LFxuXHQnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG5cdCdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6ICgpID0+IDxDaGFuZ2Vsb2cvPn0sXG5cdCdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKCkgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcblx0J2ZyZWUtcHJvJzoge2xhYmVsOiAnRnJlZSB2cyBQcm8nLCByZW5kZXI6ICgpID0+IDxGcmVlUHJvLz59XG59O1xuXG5pZiAobmV2ZURhc2gucHJvKSB7XG5cdHRhYnMucHJvID0ge2xhYmVsOiAnTmV2ZSBQcm8nLCByZW5kZXI6ICgpID0+IDxQcm8vPn07XG5cdGRlbGV0ZSAodGFic1snZnJlZS1wcm8nXSk7XG59XG5cblxuZXhwb3J0IHtcblx0Z2V0VXJsUGFyYW0sXG5cdGFkZFVybEhhc2gsXG5cdGdldFRhYkhhc2gsXG5cdHRhYnNcbn07XG4iLCJleHBvcnQgY29uc3QgY2hhbmdlT3B0aW9uID0gKG9wdGlvbiwgdmFsdWUsIG1vZHVsZSA9IGZhbHNlKSA9PiB7XG5cdG9wdGlvbiA9ICdudl9wcm9fJyArIG9wdGlvbiArIChtb2R1bGUgPyAnX3N0YXR1cycgOiAnJyk7XG5cdGNvbnN0IG1vZGVsID0gbmV3IHdwLmFwaS5tb2RlbHMuU2V0dGluZ3Moe1xuXHRcdFtvcHRpb25dOiB2YWx1ZVxuXHR9KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRtb2RlbC5zYXZlKCkudGhlbigocikgPT4ge1xuXHRcdFx0aWYgKCEgciB8fCAhIHJbb3B0aW9uXSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmVzb2x2ZSh7c3VjY2VzczogZmFsc2V9KTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZCA9IChyb3V0ZSwgZGF0YSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldCA9IChyb3V0ZSwgc2ltcGxlID0gZmFsc2UpID0+IHtcblx0cmV0dXJuIHJlcXVlc3REYXRhKHJvdXRlLCBzaW1wbGUsIHt9LCAnR0VUJyk7XG59O1xuXG5jb25zdCByZXF1ZXN0RGF0YSA9IGFzeW5jIChyb3V0ZSwgc2ltcGxlID0gZmFsc2UsIGRhdGEgPSB7fSwgbWV0aG9kID0gJ1BPU1QnKSA9PiB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0bWV0aG9kOiBtZXRob2QsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQneC13cC1ub25jZSc6IG5ldmVEYXNoLm5vbmNlXG5cdFx0fVxuXHR9O1xuXG5cdGlmICgnUE9TVCcgPT09IG1ldGhvZCkge1xuXHRcdG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0cmV0dXJuIGF3YWl0IGZldGNoKHJvdXRlLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdHJldHVybiBzaW1wbGUgPyByZXNwb25zZSA6IHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==