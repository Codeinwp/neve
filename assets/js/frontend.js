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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/frontend/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/frontend/app.js":
/*!***********************************!*\
  !*** ./assets/js/frontend/app.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.js */ \"./assets/js/frontend/shop.js\");\n/* harmony import */ var _blog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.js */ \"./assets/js/frontend/blog.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ \"./assets/js/frontend/navigation.js\");\n/* jshint esversion: 6 */\n\n\n\n\nfunction run() {\n  Object(_shop_js__WEBPACK_IMPORTED_MODULE_0__[\"initShop\"])();\n  Object(_blog_js__WEBPACK_IMPORTED_MODULE_1__[\"initBlog\"])();\n  Object(_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"initNavigation\"])();\n}\n\nfunction onResizeDebouncedRun() {\n  Object(_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"repositionDropdowns\"])();\n}\n/**\n * Run JS on load.\n */\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  run();\n});\n/**\n * Do resize events debounced.\n */\n\nvar neveResizeTimeout;\nwindow.addEventListener('resize', function () {\n  clearTimeout(neveResizeTimeout);\n  neveResizeTimeout = setTimeout(onResizeDebouncedRun, 500);\n});\n\n//# sourceURL=webpack:///./assets/js/frontend/app.js?");

/***/ }),

/***/ "./assets/js/frontend/blog.js":
/*!************************************!*\
  !*** ./assets/js/frontend/blog.js ***!
  \************************************/
/*! exports provided: initBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBlog\", function() { return initBlog; });\n/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! in-view */ \"./node_modules/in-view/dist/in-view.min.js\");\n/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./assets/js/frontend/utils.js\");\n/* jshint esversion: 6 */\n\n/* global NeveProperties */\n\n\nvar masonryInstance = null,\n    masonryContainer = null,\n    page = 2;\n/**\n * Iniitialize blog JS.\n */\n\nvar initBlog = function initBlog() {\n  if (document.querySelector('.blog.nv-index-posts') === null) {\n    return false;\n  }\n\n  masonry();\n  infiniteScroll();\n};\n/**\n * Handles masonry\n *\n * @returns {boolean}\n */\n\nvar masonry = function masonry() {\n  if (NeveProperties.masonry !== 'enabled' || NeveProperties.masonryColumns < 2) {\n    return false;\n  }\n\n  masonryContainer = document.querySelector('.nv-index-posts .posts-wrapper');\n  masonryInstance = new Masonry(masonryContainer, {\n    itemSelector: 'article.layout-grid',\n    columnWidth: 'article.layout-grid',\n    percentPosition: true\n  });\n};\n/**\n * Infinite scroll\n *\n * @returns {boolean}\n */\n\n\nvar infiniteScroll = function infiniteScroll() {\n  if (NeveProperties.infiniteScroll !== 'enabled') {\n    return false;\n  }\n\n  in_view__WEBPACK_IMPORTED_MODULE_0___default()('.infinite-scroll-trigger').on('enter', function () {\n    if (typeof parent.wp.customize !== 'undefined') {\n      parent.wp.customize.requestChangesetUpdate().then(function () {\n        requestMorePosts();\n      });\n      return false;\n    }\n\n    requestMorePosts();\n  });\n};\n/**\n * Request more posts\n * @returns {boolean}\n */\n\n\nvar requestMorePosts = function requestMorePosts() {\n  var trigger = document.querySelector('.infinite-scroll-trigger');\n\n  if (trigger === null) {\n    return false;\n  }\n\n  document.querySelector('.nv-loader').style.display = 'block';\n\n  if (page > NeveProperties.infiniteScrollMaxPages) {\n    trigger.parentNode.removeChild(trigger);\n    document.querySelector('.nv-loader').style.display = 'none';\n    return false;\n  }\n\n  var blog = document.querySelector('.nv-index-posts .posts-wrapper');\n  var requestUrl = maybeParseUrlForCustomizer(NeveProperties.infiniteScrollEndpoint + page);\n  page++;\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"httpGetAsync\"])(requestUrl, function (response) {\n    blog.innerHTML += JSON.parse(response);\n    refreshMasonry();\n\n    if (in_view__WEBPACK_IMPORTED_MODULE_0___default.a.is(trigger)) {\n      requestMorePosts();\n    }\n  });\n};\n/**\n * Refresh masonry\n */\n\n\nvar refreshMasonry = function refreshMasonry() {\n  if (masonryInstance === null) {\n    return;\n  }\n\n  imagesLoaded(masonryContainer).on('progress', function (e) {\n    masonryInstance.layout();\n    masonryInstance.reloadItems();\n  });\n};\n/**\n * Parse in the customizer context.\n * @param url\n * @returns {*}\n */\n\n\nvar maybeParseUrlForCustomizer = function maybeParseUrlForCustomizer(url) {\n  //Add change-set uuid.\n  if (typeof wp.customize === 'undefined') return url;\n  url += '?customize_changeset_uuid=' + wp.customize.settings.changeset.uuid + '&customize_autosaved=on'; //Add preview nonce.\n\n  if (typeof _wpCustomizeSettings === 'undefined') return url;\n  url += '&customize_preview_nonce=' + _wpCustomizeSettings.nonce.preview;\n  return url;\n};\n\n//# sourceURL=webpack:///./assets/js/frontend/blog.js?");

/***/ }),

/***/ "./assets/js/frontend/navigation.js":
/*!******************************************!*\
  !*** ./assets/js/frontend/navigation.js ***!
  \******************************************/
/*! exports provided: initNavigation, repositionDropdowns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNavigation\", function() { return initNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repositionDropdowns\", function() { return repositionDropdowns; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./assets/js/frontend/utils.js\");\n/* jshint esversion: 6 */\n\nvar pageUrl;\n/**\n * Initialize nav logic.\n */\n\nvar initNavigation = function initNavigation() {\n  pageUrl = window.location.href;\n  repositionDropdowns();\n  handleScrollLinks();\n  handleMobileDropdowns();\n  handleSearch();\n\n  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"isBestBrowserEver\"])() === true) {\n    handleIeDropdowns();\n  }\n};\n/**\n * Reposition drop downs in case they go off screen.\n * @returns {boolean}\n */\n\nvar repositionDropdowns = function repositionDropdowns() {\n  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) return false;\n  var dropDowns = document.querySelectorAll('.sub-menu .sub-menu');\n  if (dropDowns.length === 0) return false;\n  var windowWidth = window.innerWidth;\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(dropDowns, function (dropDown) {\n    var bounding = dropDown.getBoundingClientRect(),\n        rightDist = bounding.left;\n\n    if (/webkit.*mobile/i.test(navigator.userAgent)) {\n      bounding -= window.scrollX;\n    }\n\n    if (rightDist + bounding.width >= windowWidth) {\n      dropDown.style.right = '100%';\n      dropDown.style.left = 'auto';\n    }\n  });\n};\n/**\n * Handle links that link to the current page.\n * @returns {boolean}\n */\n\nfunction handleScrollLinks() {\n  var links = document.querySelectorAll('.nv-nav-wrap a');\n  if (links.length === 0) return false;\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(links, function (link) {\n    link.addEventListener('click', function (event) {\n      var href = event.target.getAttribute('href');\n      if (href === null) return false;\n      console.log(href);\n      console.log(pageUrl);\n\n      if (href.indexOf(pageUrl) > -1) {\n        document.body.classList.remove('is-menu-sidebar');\n        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(document.querySelectorAll('.dropdown-open'), function (element) {\n          element.classList.remove('dropdown-open');\n        });\n      }\n    });\n  });\n}\n/**\n * Handle dropdowns on mobile devices.\n */\n\n\nfunction handleMobileDropdowns() {\n  var carets = document.querySelectorAll('.caret-wrap');\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(carets, function (caret) {\n    caret.addEventListener('click', function (event) {\n      event.preventDefault();\n      var subMenu = this.parentNode.parentNode.querySelector('.sub-menu');\n      this.classList.toggle('dropdown-open');\n      subMenu.classList.toggle('dropdown-open');\n    });\n  });\n}\n/**\n * Handle searches.\n */\n\n\nfunction handleSearch() {\n  var navSearch = document.querySelectorAll('.nv-nav-search'),\n      navItem = document.querySelectorAll('.menu-item-nav-search'),\n      close = document.querySelectorAll('.close-responsive-search'),\n      html = document.querySelector('html'); // Handle search opening.\n\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(navItem, function (searchItem) {\n    searchItem.addEventListener('click', function (e) {\n      e.stopPropagation();\n      searchItem.classList.toggle('active');\n      html.classList.add('menu-opened');\n\n      if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n        createNavOverlay(searchItem, 'active');\n      }\n    });\n  }); // Don't close thee search if interacted with.\n\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(navSearch, function (item) {\n    item.addEventListener('click', function (e) {\n      e.stopPropagation();\n    });\n  }); // Mobile search close buttons.\n\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(close, function (button) {\n    button.addEventListener('click', function (e) {\n      e.preventDefault();\n      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(navItem, function (search) {\n        search.classList.remove('active');\n      });\n      var overlay = document.querySelector('.nav-clickaway-overlay');\n      overlay.parentNode.removeChild(overlay);\n      html.classList.remove('menu-opened');\n    });\n  });\n}\n/**\n * Create an overlay to allow closing.\n *\n * @param item\n * @param classToRemove\n * @param multiple\n * @returns {boolean}\n */\n\n\nfunction createNavOverlay(item, classToRemove) {\n  var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var navClickaway = document.querySelector('.nav-clickaway-overlay');\n\n  if (navClickaway !== null) {\n    return false;\n  }\n\n  navClickaway = document.createElement('div');\n  navClickaway.classList.add('nav-clickaway-overlay');\n  var primaryNav = document.querySelector('#nv-primary-navigation');\n  primaryNav.parentNode.insertBefore(navClickaway, primaryNav.nextSibling);\n  navClickaway.addEventListener('click', function () {\n    if (multiple === true) {\n      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(item, function (singleItem) {\n        singleItem.classList.remove(classToRemove);\n      });\n    } else {\n      item.classList.remove(classToRemove);\n    }\n\n    navClickaway.parentNode.removeChild(navClickaway);\n  });\n}\n/**\n * Handle dropdowns for special browsers that...\n * have trouble understanding what hover is.\n */\n\n\nfunction handleIeDropdowns() {\n  var dropdowns = document.querySelectorAll('.header--row[data-show-on=\"desktop\"] .sub-menu');\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(dropdowns, function (dropdown) {\n    var parentItem = dropdown.parentNode;\n    parentItem.addEventListener('mouseenter', function () {\n      dropdown.classList.add('dropdown-open');\n    });\n    parentItem.addEventListener('mouseleave', function () {\n      dropdown.classList.remove('dropdown-open');\n    });\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/frontend/navigation.js?");

/***/ }),

/***/ "./assets/js/frontend/shop.js":
/*!************************************!*\
  !*** ./assets/js/frontend/shop.js ***!
  \************************************/
/*! exports provided: initShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initShop\", function() { return initShop; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./assets/js/frontend/utils.js\");\n/* jshint esversion: 6 */\n\n/**\n * Init shop.\n * @returns {boolean}\n */\n\nvar initShop = function initShop() {\n  if (!document.body.classList.contains('woocommerce')) {\n    return false;\n  }\n\n  handleShopSidebar();\n};\n/**\n * Handle the shop sidebar.\n *\n * @returns {boolean}\n */\n\nvar handleShopSidebar = function handleShopSidebar() {\n  var sidebar, toggles, html;\n  sidebar = document.querySelector('.shop-sidebar');\n\n  if (sidebar === null) {\n    return false;\n  }\n\n  html = document.querySelector('html');\n  toggles = document.querySelectorAll('.nv-sidebar-toggle');\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"neveEach\"])(toggles, function (toggle) {\n    toggle.addEventListener('click', function () {\n      sidebar.classList.toggle('sidebar-open');\n      html.classList.toggle('menu-openend');\n    });\n  });\n};\n\n//# sourceURL=webpack:///./assets/js/frontend/shop.js?");

/***/ }),

/***/ "./assets/js/frontend/utils.js":
/*!*************************************!*\
  !*** ./assets/js/frontend/utils.js ***!
  \*************************************/
/*! exports provided: isMobile, httpGetAsync, neveEach, isBestBrowserEver, nv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMobile\", function() { return isMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpGetAsync\", function() { return httpGetAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"neveEach\", function() { return neveEach; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBestBrowserEver\", function() { return isBestBrowserEver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nv\", function() { return nv; });\n/* jshint esversion: 6 */\n\n/**\n * Check if we're on mobile resolution.\n *\n * @returns {boolean}\n */\nvar isMobile = function isMobile() {\n  var windowWidth = window.innerWidth;\n  return windowWidth <= 960;\n};\nvar httpGetAsync = function httpGetAsync(theUrl, callback) {\n  var xmlHttp = new XMLHttpRequest();\n\n  xmlHttp.onload = function () {\n    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) callback(xmlHttp.response);\n  };\n\n  xmlHttp.onerror = function (error) {\n    console.error(error);\n  };\n\n  xmlHttp.open('GET', theUrl, true);\n  xmlHttp.send(null);\n};\nvar neveEach = function neveEach(iterable, callback) {\n  for (var i = 0; i < iterable.length; i++) {\n    callback(iterable[i]);\n  }\n};\n/**\n * Check if user is viewing on the best browser ever.\n */\n\nvar isBestBrowserEver = function isBestBrowserEver() {\n  var ua = window.navigator.userAgent;\n  var msie = ua.indexOf('MSIE '),\n      edge = ua.indexOf('Edge/'),\n      trident = ua.indexOf('Trident/');\n  return msie > 0 || trident > 0 || edge > 0;\n};\nvar nv = {\n  httpGetAsync: httpGetAsync,\n  isMobile: isMobile,\n  neveEach: neveEach,\n  isBestBrowserEver: isBestBrowserEver\n};\n\n//# sourceURL=webpack:///./assets/js/frontend/utils.js?");

/***/ }),

/***/ "./node_modules/in-view/dist/in-view.min.js":
/*!**************************************************!*\
  !*** ./node_modules/in-view/dist/in-view.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.\n * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view\n * License: MIT\n */\n!function (t, e) {\n   true ? module.exports = e() : undefined;\n}(this, function () {\n  return function (t) {\n    function e(r) {\n      if (n[r]) return n[r].exports;\n      var i = n[r] = {\n        exports: {},\n        id: r,\n        loaded: !1\n      };\n      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;\n    }\n\n    var n = {};\n    return e.m = t, e.c = n, e.p = \"\", e(0);\n  }([function (t, e, n) {\n    \"use strict\";\n\n    function r(t) {\n      return t && t.__esModule ? t : {\n        \"default\": t\n      };\n    }\n\n    var i = n(2),\n        o = r(i);\n    t.exports = o[\"default\"];\n  }, function (t, e) {\n    function n(t) {\n      var e = typeof t;\n      return null != t && (\"object\" == e || \"function\" == e);\n    }\n\n    t.exports = n;\n  }, function (t, e, n) {\n    \"use strict\";\n\n    function r(t) {\n      return t && t.__esModule ? t : {\n        \"default\": t\n      };\n    }\n\n    Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    });\n\n    var i = n(9),\n        o = r(i),\n        u = n(3),\n        f = r(u),\n        s = n(4),\n        c = function () {\n      if (\"undefined\" != typeof window) {\n        var t = 100,\n            e = [\"scroll\", \"resize\", \"load\"],\n            n = {\n          history: []\n        },\n            r = {\n          offset: {},\n          threshold: 0,\n          test: s.inViewport\n        },\n            i = (0, o[\"default\"])(function () {\n          n.history.forEach(function (t) {\n            n[t].check();\n          });\n        }, t);\n        e.forEach(function (t) {\n          return addEventListener(t, i);\n        }), window.MutationObserver && addEventListener(\"DOMContentLoaded\", function () {\n          new MutationObserver(i).observe(document.body, {\n            attributes: !0,\n            childList: !0,\n            subtree: !0\n          });\n        });\n\n        var u = function (t) {\n          if (\"string\" == typeof t) {\n            var e = [].slice.call(document.querySelectorAll(t));\n            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f[\"default\"])(e, r), n.history.push(t)), n[t];\n          }\n        };\n\n        return u.offset = function (t) {\n          if (void 0 === t) return r.offset;\n\n          var e = function (t) {\n            return \"number\" == typeof t;\n          };\n\n          return [\"top\", \"right\", \"bottom\", \"left\"].forEach(e(t) ? function (e) {\n            return r.offset[e] = t;\n          } : function (n) {\n            return e(t[n]) ? r.offset[n] = t[n] : null;\n          }), r.offset;\n        }, u.threshold = function (t) {\n          return \"number\" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;\n        }, u.test = function (t) {\n          return \"function\" == typeof t ? r.test = t : r.test;\n        }, u.is = function (t) {\n          return r.test(t, r);\n        }, u.offset(0), u;\n      }\n    };\n\n    e[\"default\"] = c();\n  }, function (t, e) {\n    \"use strict\";\n\n    function n(t, e) {\n      if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n\n    Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    });\n\n    var r = function () {\n      function t(t, e) {\n        for (var n = 0; n < e.length; n++) {\n          var r = e[n];\n          r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);\n        }\n      }\n\n      return function (e, n, r) {\n        return n && t(e.prototype, n), r && t(e, r), e;\n      };\n    }(),\n        i = function () {\n      function t(e, r) {\n        n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {\n          enter: [],\n          exit: []\n        }, this.singles = {\n          enter: [],\n          exit: []\n        };\n      }\n\n      return r(t, [{\n        key: \"check\",\n        value: function () {\n          var t = this;\n          return this.elements.forEach(function (e) {\n            var n = t.options.test(e, t.options),\n                r = t.current.indexOf(e),\n                i = r > -1,\n                o = n && !i,\n                u = !n && i;\n            o && (t.current.push(e), t.emit(\"enter\", e)), u && (t.current.splice(r, 1), t.emit(\"exit\", e));\n          }), this;\n        }\n      }, {\n        key: \"on\",\n        value: function (t, e) {\n          return this.handlers[t].push(e), this;\n        }\n      }, {\n        key: \"once\",\n        value: function (t, e) {\n          return this.singles[t].unshift(e), this;\n        }\n      }, {\n        key: \"emit\",\n        value: function (t, e) {\n          for (; this.singles[t].length;) this.singles[t].pop()(e);\n\n          for (var n = this.handlers[t].length; --n > -1;) this.handlers[t][n](e);\n\n          return this;\n        }\n      }]), t;\n    }();\n\n    e[\"default\"] = function (t, e) {\n      return new i(t, e);\n    };\n  }, function (t, e) {\n    \"use strict\";\n\n    function n(t, e) {\n      var n = t.getBoundingClientRect(),\n          r = n.top,\n          i = n.right,\n          o = n.bottom,\n          u = n.left,\n          f = n.width,\n          s = n.height,\n          c = {\n        t: o,\n        r: window.innerWidth - u,\n        b: window.innerHeight - r,\n        l: i\n      },\n          a = {\n        x: e.threshold * f,\n        y: e.threshold * s\n      };\n      return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;\n    }\n\n    Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    }), e.inViewport = n;\n  }, function (t, e) {\n    (function (e) {\n      var n = \"object\" == typeof e && e && e.Object === Object && e;\n      t.exports = n;\n    }).call(e, function () {\n      return this;\n    }());\n  }, function (t, e, n) {\n    var r = n(5),\n        i = \"object\" == typeof self && self && self.Object === Object && self,\n        o = r || i || Function(\"return this\")();\n    t.exports = o;\n  }, function (t, e, n) {\n    function r(t, e, n) {\n      function r(e) {\n        var n = x,\n            r = m;\n        return x = m = void 0, E = e, w = t.apply(r, n);\n      }\n\n      function a(t) {\n        return E = t, j = setTimeout(h, e), M ? r(t) : w;\n      }\n\n      function l(t) {\n        var n = t - O,\n            r = t - E,\n            i = e - n;\n        return _ ? c(i, g - r) : i;\n      }\n\n      function d(t) {\n        var n = t - O,\n            r = t - E;\n        return void 0 === O || n >= e || n < 0 || _ && r >= g;\n      }\n\n      function h() {\n        var t = o();\n        return d(t) ? p(t) : void (j = setTimeout(h, l(t)));\n      }\n\n      function p(t) {\n        return j = void 0, T && x ? r(t) : (x = m = void 0, w);\n      }\n\n      function v() {\n        void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;\n      }\n\n      function y() {\n        return void 0 === j ? w : p(o());\n      }\n\n      function b() {\n        var t = o(),\n            n = d(t);\n\n        if (x = arguments, m = this, O = t, n) {\n          if (void 0 === j) return a(O);\n          if (_) return j = setTimeout(h, e), r(O);\n        }\n\n        return void 0 === j && (j = setTimeout(h, e)), w;\n      }\n\n      var x,\n          m,\n          g,\n          w,\n          j,\n          O,\n          E = 0,\n          M = !1,\n          _ = !1,\n          T = !0;\n\n      if (\"function\" != typeof t) throw new TypeError(f);\n      return e = u(e) || 0, i(n) && (M = !!n.leading, _ = \"maxWait\" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = \"trailing\" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;\n    }\n\n    var i = n(1),\n        o = n(8),\n        u = n(10),\n        f = \"Expected a function\",\n        s = Math.max,\n        c = Math.min;\n    t.exports = r;\n  }, function (t, e, n) {\n    var r = n(6),\n        i = function () {\n      return r.Date.now();\n    };\n\n    t.exports = i;\n  }, function (t, e, n) {\n    function r(t, e, n) {\n      var r = !0,\n          f = !0;\n      if (\"function\" != typeof t) throw new TypeError(u);\n      return o(n) && (r = \"leading\" in n ? !!n.leading : r, f = \"trailing\" in n ? !!n.trailing : f), i(t, e, {\n        leading: r,\n        maxWait: e,\n        trailing: f\n      });\n    }\n\n    var i = n(7),\n        o = n(1),\n        u = \"Expected a function\";\n    t.exports = r;\n  }, function (t, e) {\n    function n(t) {\n      return t;\n    }\n\n    t.exports = n;\n  }]);\n});\n\n//# sourceURL=webpack:///./node_modules/in-view/dist/in-view.min.js?");

/***/ })

/******/ });