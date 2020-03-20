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
/* global neveDash */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;

var Header = function Header(props) {
  return wp.element.createElement(Fragment, null, "Changelog");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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

var Header = function Header(props) {
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_1__["get"])(data[action], false).then(function (r) {
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global neveDash */

var __ = wp.i18n.__;
var ToggleControl = wp.components.ToggleControl;
var useState = wp.element.useState;

var Sidebar = function Sidebar() {
  var _useState = useState(neveDash.options.logger || false),
      _useState2 = _slicedToArray(_useState, 2),
      tracking = _useState2[0],
      setTracking = _useState2[1];

  return wp.element.createElement("aside", {
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
      Object(_utils_rest__WEBPACK_IMPORTED_MODULE_0__["send"])('toggle_tracking', {
        value: value
      }).then(function (x) {
        console.log(x);
      });
    }
  })));
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
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common */ "./src/utils/common.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var _wp$element = wp.element,
    render = _wp$element.render,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;

var App = function App() {
  var _useState = useState('start'),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setTab = _useState2[1];

  useEffect(function () {
    document.addEventListener('DOMContentLoaded', function () {
      var hash = Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__["getTabHash"])();

      if (null !== hash) {
        setTab(hash);
      }
    });
  });
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
  })), wp.element.createElement(_Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
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
  'pro': {
    label: 'Neve Pro',
    render: function render() {
      return wp.element.createElement(_Components_Content_Pro__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }
  }
};


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
  var rest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return requestData(route, data, rest);
};
var get = function get(route) {
  var rest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return requestData(route, data, rest, 'GET');
};

var requestData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
    var data,
        rest,
        method,
        options,
        url,
        rawResponse,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            rest = _args.length > 2 ? _args[2] : undefined;
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

            url = rest ? "".concat(neveDash.api, "/").concat(route) : route;
            _context.next = 8;
            return fetch(url, options);

          case 8:
            rawResponse = _context.sent;
            _context.next = 11;
            return rest;

          case 11:
            if (!_context.sent) {
              _context.next = 15;
              break;
            }

            _context.t0 = rawResponse.json();
            _context.next = 16;
            break;

          case 15:
            _context.t0 = rawResponse;

          case 16:
            return _context.abrupt("return", _context.t0);

          case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250ZW50L0hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvUHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29udGVudC9TdGFydGVyU2l0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BsdWdpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UYWJzQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVzdC5qcyJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJpY29uIiwiaWNvbkFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjaGlsZHJlbiIsImNsYXNzTmFtZXMiLCJjbGFzc25hbWVzIiwiX18iLCJ3cCIsImkxOG4iLCJGcmFnbWVudCIsImVsZW1lbnQiLCJIZWFkZXIiLCJCdXR0b24iLCJjb21wb25lbnRzIiwiSGVscCIsInNldFRhYiIsIm5ldmVEYXNoIiwiYXNzZXRzIiwicGx1Z2lucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJzbHVnIiwiUHJvIiwiU3RhcnQiLCJyZW5kZXJDdXN0b21pemVyTGlua3MiLCJsaW5rcyIsImN1c3RvbWl6ZXJTaG9ydGN1dHMiLCJzcGxpdCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFydHMiLCJzbGljZSIsImNvbHVtbiIsIml0ZW0iLCJpbmRleCIsImxpbmsiLCJ0ZXh0IiwiU3RhcnRlclNpdGVzIiwicmVuZGVySGVhZCIsInJlbmRlck5hdmlnYXRpb24iLCJzdHJpbmdzIiwiaGVhZGVyIiwidmVyc2lvbiIsImN1cnJlbnRUYWIiLCJ0YWJzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVXJsSGFzaCIsImxhYmVsIiwidXNlU3RhdGUiLCJEYXNoaWNvbiIsIk5vdGlmaWNhdGlvbiIsImhpZGRlbiIsInNldEhpZGRlbiIsImRhdGEiLCJjdGEiLCJ0eXBlIiwidXBkYXRlIiwiaW5Qcm9ncmVzcyIsInNldEluUHJvZ3Jlc3MiLCJkb25lIiwic2V0RG9uZSIsImNsYXNzZXMiLCJ1cGRhdGVFbnRpdHkiLCJhcmdzIiwiZXhlY3V0ZUFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidXBkYXRlcyIsImFqYXgiLCJ0aGVuIiwicGF0aCIsInBsdWdpbiIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiYmFubmVyIiwibmFtZSIsImF1dGhvciIsImFjdGlvbiIsInNldEFjdGlvbiIsInN0cmluZ01hcCIsInByb2dyZXNzIiwiaW5jbHVkZXMiLCJpbnN0YWxsUGx1Z2luIiwiciIsInN1Y2Nlc3MiLCJnZXQiLCJvayIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZXJyb3IiLCJlcnIiLCJUb2dnbGVDb250cm9sIiwiU2lkZWJhciIsIm9wdGlvbnMiLCJsb2dnZXIiLCJ0cmFja2luZyIsInNldFRyYWNraW5nIiwidmFsdWUiLCJzZW5kIiwieCIsImNvbnNvbGUiLCJsb2ciLCJUYWJzQ29udGVudCIsInJlbmRlciIsInVzZUVmZmVjdCIsIkFwcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc2giLCJnZXRUYWJIYXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRVcmxQYXJhbSIsInBhcmFtIiwicXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsInJvdXRlIiwicmVzdCIsInJlcXVlc3REYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsIm5vbmNlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJhcGkiLCJmZXRjaCIsInJhd1Jlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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QWQsRUFBb0IsS0FBcEIsQ0FBbEI7QUFDRCxDQUZNOztBQUlQLElBQU1DLFdBQVc7QUFBQSxxRUFBRyxpQkFBT0YsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBY25FLGdCQUFkLDJEQUFxQixFQUFyQjtBQUF5Qm9FLGdCQUF6QjtBQUErQkUsa0JBQS9CLDJEQUF3QyxNQUF4QztBQUNaOUIsbUJBRFksR0FDRjtBQUNkOEIsb0JBQU0sRUFBRUEsTUFETTtBQUVkQyxxQkFBTyxFQUFFO0FBQ1AsMEJBQVUsa0JBREg7QUFFUCxnQ0FBZ0Isa0JBRlQ7QUFHUCw4QkFBYy9HLFFBQVEsQ0FBQ2dIO0FBSGhCO0FBRkssYUFERTs7QUFVbEIsZ0JBQUksV0FBV0YsTUFBZixFQUF1QjtBQUNyQjlCLHFCQUFPLENBQUNpQyxJQUFSLEdBQWVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlM0UsSUFBZixDQUFmO0FBQ0Q7O0FBRUs0RSxlQWRZLEdBY05SLElBQUksYUFBTTVHLFFBQVEsQ0FBQ3FILEdBQWYsY0FBc0JWLEtBQXRCLElBQWdDQSxLQWQ5QjtBQUFBO0FBQUEsbUJBZ0JRVyxLQUFLLENBQUNGLEdBQUQsRUFBTXBDLE9BQU4sQ0FoQmI7O0FBQUE7QUFnQlp1Qyx1QkFoQlk7QUFBQTtBQUFBLG1CQWlCTFgsSUFqQks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwwQkFpQkVXLFdBQVcsQ0FBQ0MsSUFBWixFQWpCRjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwQkFpQnVCRCxXQWpCdkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFYVixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCLEMiLCJmaWxlIjoiLi9idWlsZC9idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aWNvbiwgaWNvbkFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lc30gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbICdjYXJkJywgY2xhc3NOYW1lcyBdKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHtpY29uICYmIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17aWNvbn0gYWx0PXtpY29uQWx0IHx8ICdpY29uJ30vPn1cbiAgICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICBDaGFuZ2Vsb2dcbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtCdXR0b259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgSGVscCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7c2V0VGFifSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2J1b3kuc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ1dlIHdhbnQgdG8gbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdXNpbmcgTmV2ZSwgYW5kIHRoYXQgaXMgd2h5IHdlIGhhdmUgZ2F0aGVyZWQgYWxsIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gaGVyZSBmb3IgeW91LiBXZSBob3BlIHlvdSB3aWxsIGVuam95IHVzaW5nIE5ldmUgYXMgbXVjaCBhcyB3ZSBlbmpveSBjcmVhdGluZyBncmVhdCBwcm9kdWN0cy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICBpc1ByaW1hcnlcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd29yZHByZXNzLm9yZy9zdXBwb3J0L3RoZW1lL25ldmUvJ1xuICAgICAgICAgID57X18oJ0NvbnRhY3QgU3VwcG9ydCcsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnbGlzdC5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnV2FudCB0byBnZXQgdGhlIGdpc3Qgb24gdGhlIGxhdGVzdCB0aGVtZSBjaGFuZ2VzPyBKdXN0IGNvbnN1bHQgb3VyIGNoYW5nZWxvZyBiZWxvdyB0byBnZXQgYSB0YXN0ZSBvZiB0aGUgcmVjZW50IGZpeGVzIGFuZCBmZWF0dXJlcyBpbXBsZW1lbnRlZC4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ2NoYW5nZWxvZycpfVxuICAgICAgICAgID57X18oJ1ZpZXcgQ2hhbmdlbG9nJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICd0YWNob21ldGVyLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTcGVlZCB1cCB5b3VyIHNpdGUnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3UgZmluZCB5b3Vyc2VsZiBpbiBhIHNpdHVhdGlvbiB3aGVyZSBldmVyeXRoaW5nIG9uIHlvdXIgc2l0ZSBpcyBydW5uaW5nIHZlcnkgc2xvd2x5LCB5b3UgbWlnaHQgY29uc2lkZXIgaGF2aW5nIGEgbG9vayBhdCB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB3aGVyZSB5b3Ugd2lsbCBmaW5kIHRoZSBtb3N0IGNvbW1vbiBpc3N1ZXMgY2F1c2luZyB0aGlzIGFuZCBwb3NzaWJsZSBzb2x1dGlvbnMgZm9yIGVhY2ggb2YgdGhlIGlzc3Vlcy4nLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaXNMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cDovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzYzLXNwZWVkLXVwLXlvdXItd29yZHByZXNzLXNpdGVcIj5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnRG9jdW1lbnRhdGlvbicsICduZXZlJyl9XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICBkZXNjcmlwdGlvbj17X18oJ05lZWQgbW9yZSBkZXRhaWxzPyBQbGVhc2UgY2hlY2sgb3VyIGZ1bGwgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gaG93IHRvIHVzZSBOZXZlLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MudGhlbWVpc2xlLmNvbS9hcnRpY2xlLzk0Ni1uZXZlLWRvY1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge19fKCdHbyB0byBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdjbG9uZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnQ3JlYXRlIGEgY2hpbGQgdGhlbWUnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJZiB5b3Ugd2FudCB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIHRoZW1lXFwncyBmaWxlcywgdGhvc2UgY2hhbmdlcyBhcmUgbGlrZWx5IHRvIGJlIG92ZXJ3cml0dGVuIHdoZW4geW91IG5leHQgdXBkYXRlIHRoZSB0aGVtZS4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nLCB5b3UgbmVlZCB0byBjcmVhdGUgYSBjaGlsZCB0aGVtZS4gRm9yIHRoaXMsIHBsZWFzZSBmb2xsb3cgdGhlIGRvY3VtZW50YXRpb24gYmVsb3cuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9kb2NzLnRoZW1laXNsZS5jb20vYXJ0aWNsZS8xNC1ob3ctdG8tY3JlYXRlLWEtY2hpbGQtdGhlbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAnYXJyb3dzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdCdWlsZCBhIGxhbmRpbmcgcGFnZSB3aXRoIGEgZHJhZy1hbmQtZHJvcCBjb250ZW50IGJ1aWxkZXInLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdJbiB0aGUgZG9jdW1lbnRhdGlvbiBiZWxvdyB5b3Ugd2lsbCBmaW5kIGFuIGVhc3kgd2F5IHRvIGJ1aWxkIGEgZ3JlYXQgbG9va2luZyBsYW5kaW5nIHBhZ2UgdXNpbmcgYSBkcmFnLWFuZC1kcm9wIGNvbnRlbnQgYnVpbGRlciBwbHVnaW4uJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW4gKi9cbiAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMjE5LWhvdy10by1idWlsZC1hLWxhbmRpbmctcGFnZS13aXRoLWEtZHJhZy1hbmQtZHJvcC1jb250ZW50LWJ1aWxkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtfXygnTGVhcm4gTW9yZScsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgUGx1Z2luQ2FyZCBmcm9tICcuLi9QbHVnaW5DYXJkJztcblxuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge3BsdWdpbnN9ID0gbmV2ZURhc2g7XG5cbiAgaWYgKCAhIHBsdWdpbnMgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXMoIHBsdWdpbnMgKS5tYXAoIChzbHVnKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5DYXJkIGtleT17c2x1Z30gc2x1Zz17c2x1Z30gZGF0YT17cGx1Z2luc1tzbHVnXX0vPjtcbiAgICAgICAgfSApXG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuY29uc3Qge19ffSA9IHdwLmkxOG47XG5jb25zdCB7RnJhZ21lbnR9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgUHJvID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgUHJvXG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBybztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0ZyYWdtZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgU3RhcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGljb249e25ldmVEYXNoLmFzc2V0cyArICdzcXVhcmVzLnN2Zyd9XG4gICAgICAgICAgdGl0bGU9e19fKCdTdGFydGVyIFNpdGVzJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmV2ZSBub3cgY29tZXMgd2l0aCBhIHNpdGVzIGxpYnJhcnkgd2l0aCB2YXJpb3VzIGRlc2lnbnMgdG8gcGljayBmcm9tLiBWaXNpdCBvdXIgY29sbGVjdGlvbiBvZiBkZW1vcyB0aGF0IGFyZSBjb25zdGFudGx5IGJlaW5nIGFkZGVkLicsICduZXZlJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgIGlzUHJpbWFyeVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUYWIoJ3N0YXJ0ZXItc2l0ZXMnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPntfXygnR28gdG8gU3RhcnRlciBTaXRlcycsICduZXZlJyl9PC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpY29uPXtuZXZlRGFzaC5hc3NldHMgKyAncGFnZS5zdmcnfVxuICAgICAgICAgIHRpdGxlPXtfXygnR2V0dGluZyBTdGFydGVkPyBDaGVjayBoZWxwIGFuZCBkb2NzJywgJ25ldmUnKX1cbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtfXygnTmVlZCBtb3JlIGRldGFpbHM/IFBsZWFzZSBjaGVjayBvdXIgZnVsbCBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiBob3cgdG8gdXNlIE5ldmUuJywgJ25ldmUnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlzTGlua1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiKCdoZWxwJyl9XG4gICAgICAgICAgPntfXygnR28gdG8gZG9jcycsICduZXZlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgY29sLWxhc3RcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplci1xdWljay1saW5rc1wiXG4gICAgICAgICAgaWNvbj17bmV2ZURhc2guYXNzZXRzICsgJ2NvbXBhc3Muc3ZnJ31cbiAgICAgICAgICB0aXRsZT17X18oJ0N1c3RvbWl6ZXIgcXVpY2sgbGlua3MnLCAnbmV2ZScpfVxuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovXG4gICAgICAgICAgZGVzY3JpcHRpb249e19fKCdKb2luIHRoZSBjb21tdW5pdHkgb2YgTmV2ZSB1c2Vycy4gR2V0IGNvbm5lY3RlZCwgc2hhcmUgb3BpbmlvbnMsIGFzayBxdWVzdGlvbnMgYW5kIGhlbHAgZWFjaCBvdGhlciEnLCAnbmV2ZScpfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlckN1c3RvbWl6ZXJMaW5rcygpfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuXG5jb25zdCByZW5kZXJDdXN0b21pemVyTGlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gbmV2ZURhc2guY3VzdG9taXplclNob3J0Y3V0cztcbiAgY29uc3Qgc3BsaXQgPSBNYXRoLmNlaWwobGlua3MubGVuZ3RoIC8gMik7XG4gIGNvbnN0IHBhcnRzID0gWyBsaW5rcy5zbGljZSgwLCBzcGxpdCksIGxpbmtzLnNsaWNlKHNwbGl0KSBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAge1xuICAgICAgICBwYXJ0cy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzTGluayBocmVmPXtpdGVtLmxpbmt9PntpdGVtLnRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9PSBjb2x1bW4ubGVuZ3RoIC0gMSAmJiA8aHIvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0O1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBTdGFydGVyU2l0ZXMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICBTdGFydGVyIFNpdGVzXG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0ZXJTaXRlcztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IHthZGRVcmxIYXNoLCB0YWJzfSBmcm9tICcuLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtyZW5kZXJIZWFkKCl9XG4gICAgICAgIHtyZW5kZXJOYXZpZ2F0aW9uKHByb3BzKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuY29uc3QgcmVuZGVySGVhZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bmV2ZURhc2guc3RyaW5ncy5oZWFkZXJ9PC9oMT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZlcnNpb25cIj57bmV2ZURhc2gudmVyc2lvbn08L3NwYW4+XG4gICAgICA8aW1nIHNyYz17bmV2ZURhc2guYXNzZXRzICsgJy9sb2dvLnN2Zyd9IGFsdD17X18oJ05ldmUgVGhlbWUgTG9nbycsICduZXZlJyl9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHJlbmRlck5hdmlnYXRpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2N1cnJlbnRUYWIsIHNldFRhYn0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgIHtPYmplY3Qua2V5cyh0YWJzKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGk+PGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gaXRlbSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldFRhYihpdGVtKTtcbiAgICAgICAgICAgICAgYWRkVXJsSGFzaChpdGVtKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPnt0YWJzW2l0ZW1dLmxhYmVsfVxuICAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCIvKiBnbG9iYWwgbmV2ZURhc2ggKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFsgaGlkZGVuLCBzZXRIaWRkZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge3RleHQsIGN0YSwgdHlwZSwgdXBkYXRlfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgaW5Qcm9ncmVzcywgc2V0SW5Qcm9ncmVzcyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGRvbmUsIHNldERvbmUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoXG4gICAgW1xuICAgICAgJ25vdGlmaWNhdGlvbicsXG4gICAgICBwcm9wcy5zbHVnLFxuICAgICAgdHlwZSA/IHR5cGUgOiAnJyxcbiAgICAgIHtcbiAgICAgICAgJ3N1Y2Nlc3MnOiBkb25lLFxuICAgICAgICAnaGlkZGVuJzogZG9uZVxuICAgICAgfVxuICAgIF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHshIGRvbmUgPyA8cD57dGV4dH08L3A+IDogPHA+PERhc2hpY29uIGljb249XCJ5ZXNcIi8+e19fKCdEb25lIScsICduZXZlJyl9PC9wPn1cbiAgICAgIHsoY3RhICYmICEgZG9uZSkgJiZcbiAgICAgIDxCdXR0b25cbiAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgIHNlY29uZGFyeVxuICAgICAgICBkaXNhYmxlZD17aW5Qcm9ncmVzc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHsnaXMtbG9hZGluZyc6IGluUHJvZ3Jlc3N9KX1cbiAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICB1cGRhdGVFbnRpdHkodXBkYXRlLCBzZXREb25lLCBzZXRJblByb2dyZXNzLCBzZXRIaWRkZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfT5cbiAgICAgICAge1xuICAgICAgICAgIGluUHJvZ3Jlc3MgP1xuICAgICAgICAgIDxzcGFuPjxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPiB7X18oJ0luIFByb2dyZXNzJywgJ25ldmUnKSArICcuLi4nfSA8L3NwYW4+IDpcbiAgICAgICAgICAgIGN0YVxuICAgICAgICB9XG4gICAgICA8L0J1dHRvbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1cGRhdGVFbnRpdHkgPSAoYXJncywgc2V0RG9uZSwgc2V0SW5Qcm9ncmVzcywgc2V0SGlkZGVuKSA9PiB7XG4gIGlmICghIGFyZ3MudHlwZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKCd0aGVtZScgPT09IGFyZ3MudHlwZSkge1xuICAgICAgICBpZiAoISBhcmdzLnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd3AudXBkYXRlcy5hamF4KCd1cGRhdGUtdGhlbWUnLCB7c2x1ZzogYXJncy5zbHVnfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgndGhlbWUtdXBkYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdwbHVnaW4nID09PSBhcmdzLnR5cGUpIHtcbiAgICAgICAgaWYgKCEgYXJncy5zbHVnIHx8ICEgYXJncy5wYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHdwLnVwZGF0ZXMuYWpheCgndXBkYXRlLXBsdWdpbicsIHtzbHVnOiBhcmdzLnNsdWcsIHBsdWdpbjogYXJncy5wYXRofSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgncGx1Z2luLXVwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgZXhlY3V0ZUFjdGlvbigpLnRoZW4oKCkgPT4ge1xuICAgIHNldERvbmUodHJ1ZSk7XG4gICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgc2V0SGlkZGVuKHRydWUpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uJztcblxuY29uc3QgTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcbiAgaWYgKCEgbmV2ZURhc2gubm90aWZpY2F0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICgxID4gbmV2ZURhc2gubm90aWZpY2F0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5ldmVEYXNoLm5vdGlmaWNhdGlvbnMpLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uIGRhdGE9e25ldmVEYXNoLm5vdGlmaWNhdGlvbnNbc2x1Z119IHNsdWc9e3NsdWd9Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsIi8qIGdsb2JhbCBuZXZlRGFzaCAqL1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2dldH0gZnJvbSAnLi4vdXRpbHMvcmVzdCc7XG5cbmNvbnN0IHtfX30gPSB3cC5pMThuO1xuY29uc3Qge0J1dHRvbiwgRGFzaGljb259ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHt1c2VTdGF0ZX0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzbHVnLCBkYXRhfSA9IHByb3BzO1xuICBjb25zdCB7YmFubmVyLCBuYW1lLCBkZXNjcmlwdGlvbiwgdmVyc2lvbiwgYXV0aG9yfSA9IHByb3BzLmRhdGE7XG4gIGNvbnN0IFsgYWN0aW9uLCBzZXRBY3Rpb24gXSA9IHVzZVN0YXRlKGRhdGEuY3RhKTtcbiAgY29uc3QgWyBpblByb2dyZXNzLCBzZXRJblByb2dyZXNzIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RyaW5nTWFwID0ge1xuICAgICdpbnN0YWxsJzoge3N0YXRpYzogX18oJ0luc3RhbGwnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0luc3RhbGxpbmcnLCAnbmV2ZScpfSxcbiAgICAnYWN0aXZhdGUnOiB7c3RhdGljOiBfXygnQWN0aXZhdGUnLCAnbmV2ZScpLCBwcm9ncmVzczogX18oJ0FjdGl2YXRpbmcnLCAnbmV2ZScpfSxcbiAgICAnZGVhY3RpdmF0ZSc6IHtzdGF0aWM6IF9fKCdEZWFjdGl2YXRlJywgJ25ldmUnKSwgcHJvZ3Jlc3M6IF9fKCdEZWFjdGl2YXRpbmcnLCAnbmV2ZScpfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWyAnY2FyZCcsICdwbHVnaW4nLCBzbHVnIF0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lcn0gYWx0PXtfXygnQmFubmVyIEltYWdlJywgJ25hbWUnKX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntuYW1lfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGx1Z2luLWRhdGFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+dnt2ZXJzaW9ufTwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj57YXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwbHVnaW4tYWN0aW9uXCJcbiAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICBpc1ByaW1hcnk9e1sgJ2luc3RhbGwnLCAnYWN0aXZhdGUnIF0uaW5jbHVkZXMoYWN0aW9uKX1cbiAgICAgICAgICBpc1NlY29uZGFyeT17J2RlYWN0aXZhdGUnID09PSBhY3Rpb259XG4gICAgICAgICAgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyh0cnVlKTtcbiAgICAgICAgICAgIGlmICgnaW5zdGFsbCcgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICBpbnN0YWxsUGx1Z2luKHNsdWcpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISByLnN1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0QWN0aW9uKCdhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2V0KGRhdGFbYWN0aW9uXSwgZmFsc2UpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCEgci5vaykge1xuXG4gICAgICAgICAgICAgICAgLy8gVG9kbyBoYW5kbGUgZXJyb3Igd2l0aCB0b2FzdHM/XG4gICAgICAgICAgICAgICAgc2V0SW5Qcm9ncmVzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCdhY3RpdmF0ZScgPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignZGVhY3RpdmF0ZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEFjdGlvbignYWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZXRJblByb2dyZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ISBpblByb2dyZXNzICYmIHN0cmluZ01hcFthY3Rpb25dLnN0YXRpY31cbiAgICAgICAgICB7aW5Qcm9ncmVzcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxEYXNoaWNvbiBpY29uPVwidXBkYXRlXCIvPlxuICAgICAgICAgICAgICB7c3RyaW5nTWFwW2FjdGlvbl0ucHJvZ3Jlc3MgKyAnLi4uJ31cbiAgICAgICAgICAgIDwvc3Bhbj4pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gaW5zdGFsbFBsdWdpbihzbHVnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB3cC51cGRhdGVzLmFqYXgoJ2luc3RhbGwtcGx1Z2luJywge1xuICAgICAgc2x1ZyxcbiAgICAgIHN1Y2Nlc3M6IChyKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuXG4gICAgICAgIC8vIGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlIGFyZSBwYXJhbXMgb2YgZXJyIGlmIHdlIHRvYXN0LlxuICAgICAgICByZXNvbHZlKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3NlbmR9IGZyb20gJy4uL3V0aWxzL3Jlc3QnO1xuXG5jb25zdCB7X199ID0gd3AuaTE4bjtcbmNvbnN0IHtUb2dnbGVDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7dXNlU3RhdGV9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3QgWyB0cmFja2luZywgc2V0VHJhY2tpbmcgXSA9IHVzZVN0YXRlKG5ldmVEYXNoLm9wdGlvbnMubG9nZ2VyIHx8IGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZWJhciBjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICA8aDQ+e19fKCdOZXZlIENvbW11bml0eScsICduZXZlJyl9PC9oND5cbiAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuICovfVxuICAgICAgICA8cD57X18oJ0pvaW4gdGhlIGNvbW11bml0eSBvZiBOZXZlIHVzZXJzLiBHZXQgY29ubmVjdGVkLCBzaGFyZSBvcGluaW9ucywgYXNrIHF1ZXN0aW9ucyBhbmQgaGVscCBlYWNoIG90aGVyIScpfTwvcD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuICAgICAgICAgIHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoci8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICA8aDQ+e19fKCdMZWF2ZSB1cyBhIHJldmlldycsICduZXZlJyl9PC9oND5cbiAgICAgICAgPHA+e19fKCdBcmUgeW91IGFyZSBlbmpveWluZyBOZXZlPyBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgeW91ciBmZWVkYmFjay4nLCAnbmV2ZScpfTwvcD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQ4NjQ2NDM1NTM3MjY2L1wiPlxuICAgICAgICAgIHtfXygnSm9pbiBvdXIgRmFjZWJvb2sgR3JvdXAnLCAnbmV2ZScpfVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoci8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VjdGlvblwiPlxuICAgICAgICA8aDQ+e19fKCdDb250cmlidXRpbmcnLCAnbmV2ZScpfTwvaDQ+XG4gICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiAqL31cbiAgICAgICAgPHA+e19fKCdCZWNvbWUgYSBjb250cmlidXRvciBieSBvcHRpbmcgaW4gdG8gb3VyIGFub255bW91cyBkYXRhIHRyYWNraW5nLiBXZSBndWFyYW50ZWUgbm8gc2Vuc2l0aXZlIGRhdGEgaXMgY29sbGVjdGVkLicsICduZXZlJyl9XG4gICAgICAgICAgJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZG9jcy50aGVtZWlzbGUuY29tL2FydGljbGUvMTEyMi1uZXZlLXVzYWdlLXRyYWNraW5nXCI+XG4gICAgICAgICAgICB7X18oJ1doYXQgZG8gd2UgdHJhY2s/JywgJ25ldmUnKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICBjaGVja2VkPXt0cmFja2luZ31cbiAgICAgICAgICBsYWJlbD17X18oJ0FsbG93IEFub255bW91cyBUcmFja2luZycsICduZXZlJyl9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VHJhY2tpbmcodmFsdWUpO1xuICAgICAgICAgICAgc2VuZCgndG9nZ2xlX3RyYWNraW5nJywge3ZhbHVlfSkudGhlbigoeCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiLyogZ2xvYmFsIG5ldmVEYXNoICovXG5pbXBvcnQge3RhYnN9IGZyb20gJy4uL3V0aWxzL2NvbW1vbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3Qge19ffSA9IHdwLmkxOG47XG5cbmNvbnN0IFRhYnNDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjdXJyZW50VGFiLCBzZXRUYWJ9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzbmFtZXMoWyAndGFiLWNvbnRlbnQnLCAnY29sdW1ucycsIGN1cnJlbnRUYWIgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge3RhYnNbY3VycmVudFRhYl0ucmVuZGVyKHNldFRhYil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzQ29udGVudDtcbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVGFic0NvbnRlbnQgZnJvbSAnLi9Db21wb25lbnRzL1RhYnNDb250ZW50JztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vQ29tcG9uZW50cy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vQ29tcG9uZW50cy9TaWRlYmFyJztcbmltcG9ydCB7Z2V0VGFiSGFzaH0gZnJvbSAnLi91dGlscy9jb21tb24nO1xuXG5jb25zdCB7cmVuZGVyLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFsgY3VycmVudFRhYiwgc2V0VGFiIF0gPSB1c2VTdGF0ZSgnc3RhcnQnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNoID0gZ2V0VGFiSGFzaCgpO1xuICAgICAgaWYgKG51bGwgIT09IGhhc2gpIHtcbiAgICAgICAgc2V0VGFiKGhhc2gpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkZXIgY3VycmVudFRhYj17Y3VycmVudFRhYn0gc2V0VGFiPXtzZXRUYWJ9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnMvPlxuICAgICAgICAgIDxUYWJzQ29udGVudCBjdXJyZW50VGFiPXtjdXJyZW50VGFifSBzZXRUYWI9e3NldFRhYn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNpZGViYXIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbnJlbmRlcihcbiAgPEFwcC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV2ZS1kYXNoYm9hcmQnKVxuKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFN0YXJ0ZXJTaXRlcyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnRlclNpdGVzJztcbmltcG9ydCBTdGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvU3RhcnQnO1xuaW1wb3J0IFBybyBmcm9tICcuLi9Db21wb25lbnRzL0NvbnRlbnQvUHJvJztcbmltcG9ydCBQbHVnaW5zIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9QbHVnaW5zJztcbmltcG9ydCBIZWxwIGZyb20gJy4uL0NvbXBvbmVudHMvQ29udGVudC9IZWxwJztcbmltcG9ydCBDaGFuZ2Vsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9Db250ZW50L0NoYW5nZWxvZyc7XG5cbmNvbnN0IGdldFVybFBhcmFtID0gKHBhcmFtKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG5cbiAgcmV0dXJuIHVybFBhcmFtcy5nZXQocGFyYW0pO1xufTtcblxuY29uc3QgYWRkVXJsSGFzaCA9IChoYXNoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbn07XG5cbmNvbnN0IGdldFRhYkhhc2ggPSAoKSA9PiB7XG4gIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblxuICBpZiAoISBPYmplY3Qua2V5cyh0YWJzKS5pbmNsdWRlcyhoYXNoKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59O1xuXG5jb25zdCB0YWJzID0ge1xuICAnc3RhcnQnOiB7bGFiZWw6ICdHZXR0aW5nIFN0YXJ0ZWQnLCByZW5kZXI6IChzZXRUYWIpID0+IDxTdGFydCBzZXRUYWI9e3NldFRhYn0vPn0sXG4gICdwbHVnaW5zJzoge2xhYmVsOiAnVXNlZnVsIFBsdWdpbnMnLCByZW5kZXI6ICgpID0+IDxQbHVnaW5zLz59LFxuICAnaGVscCc6IHtsYWJlbDogJ0hlbHAgJiBkb2NzJywgcmVuZGVyOiAoc2V0VGFiKSA9PiA8SGVscCBzZXRUYWI9e3NldFRhYn0vPn0sXG4gICdjaGFuZ2Vsb2cnOiB7bGFiZWw6ICdDaGFuZ2Vsb2cnLCByZW5kZXI6ICgpID0+IDxDaGFuZ2Vsb2cvPn0sXG4gICdzdGFydGVyLXNpdGVzJzoge2xhYmVsOiAnU3RhcnRlciBTaXRlcycsIHJlbmRlcjogKCkgPT4gPFN0YXJ0ZXJTaXRlcy8+fSxcbiAgJ3Bybyc6IHtsYWJlbDogJ05ldmUgUHJvJywgcmVuZGVyOiAoKSA9PiA8UHJvLz59XG59O1xuXG5cbmV4cG9ydCB7XG4gIGdldFVybFBhcmFtLFxuICBhZGRVcmxIYXNoLFxuICBnZXRUYWJIYXNoLFxuICB0YWJzXG59O1xuIiwiZXhwb3J0IGNvbnN0IHNlbmQgPSAocm91dGUsIGRhdGEsIHJlc3QgPSB0cnVlKSA9PiB7XG4gIHJldHVybiByZXF1ZXN0RGF0YShyb3V0ZSwgZGF0YSwgcmVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHJvdXRlLCByZXN0ID0gdHJ1ZSwgZGF0YSA9IHt9ICkgPT4ge1xuICByZXR1cm4gcmVxdWVzdERhdGEocm91dGUsIGRhdGEsIHJlc3QsICdHRVQnKTtcbn07XG5cbmNvbnN0IHJlcXVlc3REYXRhID0gYXN5bmMgKHJvdXRlLCBkYXRhID0ge30sIHJlc3QsIG1ldGhvZCA9ICdQT1NUJykgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ3gtd3Atbm9uY2UnOiBuZXZlRGFzaC5ub25jZVxuICAgIH1cbiAgfTtcblxuICBpZiAoJ1BPU1QnID09PSBtZXRob2QpIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgfVxuXG4gIGNvbnN0IHVybCA9IHJlc3QgPyBgJHtuZXZlRGFzaC5hcGl9LyR7cm91dGV9YCA6IHJvdXRlO1xuXG4gIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgcmV0dXJuIGF3YWl0IHJlc3QgPyByYXdSZXNwb25zZS5qc29uKCkgOiByYXdSZXNwb25zZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9