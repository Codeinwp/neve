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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/gutenberg-preview/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/gutenberg-preview/app.js":
/*!********************************************!*\
  !*** ./assets/js/gutenberg-preview/app.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _integration_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-toggle.js */ \"./assets/js/gutenberg-preview/integration-toggle.js\");\n/* harmony import */ var _body_tweaks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body-tweaks.js */ \"./assets/js/gutenberg-preview/body-tweaks.js\");\n/* jshint esversion: 6 */\n\n\n\nvar init = function init() {\n  Object(_integration_toggle_js__WEBPACK_IMPORTED_MODULE_0__[\"initIntegrationToggle\"])();\n  Object(_body_tweaks_js__WEBPACK_IMPORTED_MODULE_1__[\"initBodyManipulation\"])();\n};\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  init();\n});\n\n//# sourceURL=webpack:///./assets/js/gutenberg-preview/app.js?");

/***/ }),

/***/ "./assets/js/gutenberg-preview/body-tweaks.js":
/*!****************************************************!*\
  !*** ./assets/js/gutenberg-preview/body-tweaks.js ***!
  \****************************************************/
/*! exports provided: initBodyManipulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBodyManipulation\", function() { return initBodyManipulation; });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./assets/js/gutenberg-preview/store.js\");\n/* jshint esversion: 6 */\n\n/* global neveGutenbergHelper */\n\nvar initBodyManipulation = function initBodyManipulation() {\n  addCssTag();\n  addClasses();\n  handleSidebar();\n  handleContainer();\n  handleMetaboxChanges();\n  handleContentWidth();\n};\n\nvar addCssTag = function addCssTag() {\n  var tag = document.createElement('style');\n  tag.classList.add('neve-live-css');\n  document.body.appendChild(tag);\n};\n\nvar addClasses = function addClasses() {\n  var editor = document.querySelector('.editor-styles-wrapper'),\n      contentWrap = document.querySelector('.editor-writing-flow > div:not(.wp-block)'),\n      blocksWrap = document.querySelector('.editor-writing-flow > div > div'),\n      titleState = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('titleMeta'),\n      metaState = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('postMeta'); // Add utilitary classes\n\n  if (_store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('integrationStatus') === 'enabled' && wp.data.select('core/editor').getEditedPostAttribute('template') === '') {\n    editor.classList.add('neve-gtb');\n  }\n\n  contentWrap.classList.add('neve-content-wrap');\n  blocksWrap.classList.add('neve-blocks-wrap'); // Hide or show meta based on data from php.\n\n  if (metaState === 'enabled') {\n    editor.classList.add('neve-has-meta');\n  } // Disable title if already hidden.\n\n\n  if (titleState === 'on') {\n    document.getElementsByClassName('editor-post-title')[0].style.display = 'none';\n  }\n};\n/**\n * Handle sidebar setup.\n */\n\n\nvar handleSidebar = function handleSidebar() {\n  var position = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('sidebarPosition');\n  handleSidebarChange(position);\n};\n/**\n * Handle sidebar change.\n */\n\n\nvar handleSidebarChange = function handleSidebarChange(position) {\n  var blocksWrap = document.querySelector('.editor-writing-flow > div:not(.wp-block)'),\n      editor = document.querySelector('.editor-styles-wrapper'),\n      sidebar = getSidebarMarkup(position);\n  editor.classList.remove('has-sidebar-left', 'has-sidebar-right', 'has-sidebar-full-width');\n  editor.classList.add('has-sidebar-' + position);\n\n  switch (position) {\n    case 'right':\n      blocksWrap.appendChild(sidebar);\n      break;\n\n    case 'left':\n      blocksWrap.insertBefore(sidebar, blocksWrap.firstChild);\n      break;\n\n    case 'full-width':\n      break;\n\n    default:\n      break;\n  }\n\n  return false;\n};\n/**\n * Get the sidebar markup.\n */\n\n\nvar getSidebarMarkup = function getSidebarMarkup(position) {\n  var sidebar = document.createElement('div');\n  sidebar.classList.add('neve-gtb-sidebar', position);\n  sidebar.innerHTML = '<p>' + neveGutenbergHelper.strings.sidebar + '</p>';\n  return sidebar;\n};\n/**\n * Handle container setup.\n */\n\n\nvar handleContainer = function handleContainer() {\n  var value = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('containerSetup');\n  handleContainerChange(value);\n};\n/**\n * Handle container change.\n */\n\n\nvar handleContainerChange = function handleContainerChange(value) {\n  var editor = document.querySelector('.editor-styles-wrapper');\n\n  switch (value) {\n    default:\n    case 'contained':\n      editor.classList.remove('container-fluid');\n      editor.classList.add('container');\n      break;\n\n    case 'full-width':\n      editor.classList.remove('container');\n      editor.classList.add('container-fluid');\n      break;\n  }\n\n  return false;\n};\n/**\n * Handle metabox changes.\n */\n\n\nvar handleMetaboxChanges = function handleMetaboxChanges() {\n  var editor = document.querySelector('.editor-styles-wrapper'); // Title toggle.\n\n  var disableTitle = document.querySelector('#neve-page-settings  #neve_meta_disable_title');\n\n  if (disableTitle !== null) {\n    disableTitle.addEventListener('change', function () {\n      var title = editor.querySelector('.editor-post-title');\n\n      if (title.style.display === 'none') {\n        title.style.display = 'block';\n        return false;\n      }\n\n      title.style.display = 'none';\n      return false;\n    });\n  } // Sidebar setting.\n\n\n  var sidebarRadios = document.querySelectorAll('#neve-page-settings input[name=neve_meta_sidebar]');\n  sidebarRadios.forEach(function (element) {\n    element.addEventListener('change', function (event) {\n      var value = event.target.value;\n\n      if (value === 'default') {\n        value = neveGutenbergHelper.sidebarSetup;\n      }\n\n      var sidebars = document.querySelectorAll('.neve-gtb-sidebar');\n      Array.prototype.forEach.call(sidebars, function (node) {\n        node.parentNode.removeChild(node);\n      });\n      handleSidebarChange(value);\n      return false;\n    });\n  }); // Container setting.\n\n  var containerRadios = document.querySelectorAll('#neve-page-settings input[name=neve_meta_container]');\n  containerRadios.forEach(function (element) {\n    element.addEventListener('change', function (event) {\n      var value = event.target.value;\n\n      if (value === 'default') {\n        value = neveGutenbergHelper.containerSetup;\n      }\n\n      handleContainerChange(value);\n      return false;\n    });\n  }); // Content width toggle.\n\n  document.querySelector('#neve-page-settings input[name=neve_meta_enable_content_width]').addEventListener('change', function (event) {\n    var value = event.target.checked;\n\n    if (value === true) {\n      handleContentWidthChange();\n      return false;\n    }\n\n    document.querySelector('.neve-live-css').innerHTML = '';\n  }); // Content width.\n\n  document.querySelector('#neve-page-settings #neve_meta_content_width').addEventListener('input', function (event) {\n    var value = event.target.value;\n    handleContentWidthChange(value);\n    return false;\n  });\n  document.querySelector('#neve-page-settings #neve_meta_content_width-range').addEventListener('input', function (event) {\n    var value = event.target.value;\n    handleContentWidthChange(value);\n    return false;\n  });\n};\n/**\n * Handle content width setup.\n */\n\n\nvar handleContentWidth = function handleContentWidth() {\n  if (neveGutenbergHelper.neve_meta_enable_content_width !== 'on') {\n    return false;\n  }\n\n  handleContentWidthChange();\n  return false;\n};\n/**\n * Handle Wide Alignments\n *\n * @param contentWidth\n * @returns {string}\n */\n\n\nvar getWideAlignmentStyle = function getWideAlignmentStyle(contentWidth) {\n  var windowWidth = window.getComputedStyle(document.querySelector('.neve-content-wrap')).width,\n      containerWidth = window.getComputedStyle(document.querySelector('.wp-block.editor-post-title__block')).width,\n      realContentWidth = contentWidth / 100 * containerWidth,\n      remainderSpace = (windowWidth - realContentWidth) / 5,\n      wideAlignWidth = Math.floor(realContentWidth + remainderSpace * 2);\n\n  if (wideAlignWidth !== 0) {\n    return '.wp-block[data-align=wide] { max-width:' + wideAlignWidth + 'px;}';\n  }\n\n  return '';\n};\n/**\n * Handle content width changes.\n * @param setValue\n * @returns {boolean}\n */\n\n\nvar handleContentWidthChange = function handleContentWidthChange(setValue) {\n  if (!setValue) {\n    setValue = document.querySelector('#neve-page-settings input[name=neve_meta_content_width]').value;\n  }\n\n  document.querySelector('.neve-live-css').innerHTML = '@media(min-width: 960px) { ' + '.neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]) > *,' + '.neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,' + '.neve-gtb.has-sidebar-left .neve-blocks-wrap,' + '.neve-gtb.has-sidebar-right .neve-blocks-wrap' + ' { max-width: ' + setValue + '% !important; } ' + getWideAlignmentStyle(setValue) + '}';\n  return false;\n};\n\n//# sourceURL=webpack:///./assets/js/gutenberg-preview/body-tweaks.js?");

/***/ }),

/***/ "./assets/js/gutenberg-preview/integration-toggle.js":
/*!***********************************************************!*\
  !*** ./assets/js/gutenberg-preview/integration-toggle.js ***!
  \***********************************************************/
/*! exports provided: initIntegrationToggle, toggleDomIntegraton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initIntegrationToggle\", function() { return initIntegrationToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleDomIntegraton\", function() { return toggleDomIntegraton; });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./assets/js/gutenberg-preview/store.js\");\n/* jshint esversion: 6 */\n\n/* global neveGutenbergHelper */\n\nvar integrationStatus, integrationToggle, pageTemplatePicker;\nvar initIntegrationToggle = function initIntegrationToggle() {\n  attachToTemplatePickerAndListen();\n  var observer = new MutationObserver(function (mutations) {\n    mutations.forEach(function (mutation) {\n      if (mutation.target.className === 'edit-post-more-menu') {\n        addMenuItem();\n      }\n\n      if (mutation.target.classList.contains('components-panel__body') || mutation.target.classList.contains('edit-post-meta-boxes-area__container')) {\n        attachToTemplatePickerAndListen();\n      }\n    });\n  });\n  var featuredControls = document.getElementsByClassName('edit-post-layout');\n  observer.observe(featuredControls[0], {\n    childList: true,\n    subtree: true\n  });\n};\n\nvar addMenuItem = function addMenuItem() {\n  var menu = document.getElementsByClassName('edit-post-more-menu__content');\n  if (menu.length <= 0) return false;\n  integrationStatus = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('integrationStatus');\n  var target = document.querySelector('.components-menu-group:first-of-type div:not(.components-menu-group__label) button:last-child');\n  integrationToggle = document.createElement('button');\n  integrationToggle.classList.add('components-button', 'components-icon-button', 'components-menu-item__button');\n  integrationToggle.innerHTML = '<svg style=\"display: none;\" aria-hidden=\"true\" role=\"img\" focusable=\"false\" class=\"dashicon dashicons-yes\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z\"></path></svg><span class=\"components-menu-item__info-wrapper\">' + neveGutenbergHelper.strings.menuItemTitle + '</span>';\n\n  if (integrationStatus === 'enabled') {\n    integrationToggle.classList.add('has-icon');\n    integrationToggle.querySelector('svg').style.display = 'block';\n  }\n\n  integrationToggle.addEventListener('click', function (event) {\n    _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].toggleState('integrationStatus');\n    new Promise(function (resolve, reject) {\n      var requestUrl = neveGutenbergHelper.integrationEndpoint;\n      var request = new XMLHttpRequest();\n      request.open('POST', requestUrl, true);\n      request.setRequestHeader('X-WP-Nonce', neveGutenbergHelper.nonce);\n      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\n\n      request.onload = function () {\n        if (request.status === 200 && request.readyState === 4) {\n          resolve(request.responseText);\n        } else {\n          reject({\n            status: this.status,\n            statusText: this.statusText\n          });\n        }\n      };\n\n      request.send(JSON.stringify({\n        neve_gutenberg_integration: _store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].state.integrationStatus\n      }));\n    }).then(function () {\n      var check = integrationToggle.querySelector('svg');\n\n      if (check.style.display === 'none') {\n        check.style.display = 'block';\n      } else {\n        check.style.display = 'none';\n      }\n\n      integrationToggle.classList.toggle('has-icon');\n\n      if (wp.data.select('core/editor').getEditedPostAttribute('template') !== '') {\n        return false;\n      }\n\n      toggleDomIntegraton();\n    });\n  });\n  target.parentNode.insertBefore(integrationToggle, target.nextSibling);\n};\n\nvar attachToTemplatePickerAndListen = function attachToTemplatePickerAndListen() {\n  pageTemplatePicker = document.querySelector('.editor-page-attributes__template select');\n\n  if (pageTemplatePicker === null) {\n    return false;\n  }\n\n  pageTemplatePicker.addEventListener('change', function (event) {\n    if (event.target.value === '') {\n      if (_store_js__WEBPACK_IMPORTED_MODULE_0__[\"store\"].getState('integrationStatus') === 'disabled') {\n        return false;\n      }\n\n      toggleDomIntegraton(true);\n      return false;\n    }\n\n    toggleDomIntegraton(false);\n  });\n};\n\nvar toggleDomIntegraton = function toggleDomIntegraton(remove) {\n  if (remove === null) {\n    remove = 'toggle';\n  }\n\n  var wrap = document.querySelector('.editor-styles-wrapper');\n\n  if (remove === false) {\n    wrap.classList.remove('neve-gtb');\n    return false;\n  } else if (remove === true) {\n    wrap.classList.add('neve-gtb');\n    return false;\n  }\n\n  wrap.classList.toggle('neve-gtb');\n};\n\n//# sourceURL=webpack:///./assets/js/gutenberg-preview/integration-toggle.js?");

/***/ }),

/***/ "./assets/js/gutenberg-preview/store.js":
/*!**********************************************!*\
  !*** ./assets/js/gutenberg-preview/store.js ***!
  \**********************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\n/* jshint esversion: 6 */\n\n/* global neveGutenbergHelper*/\nvar store = {\n  state: {\n    integrationStatus: neveGutenbergHelper.integrationStatus,\n    titleMeta: neveGutenbergHelper.neve_meta_disable_title,\n    postMeta: neveGutenbergHelper.metaStatus,\n    sidebarPosition: neveGutenbergHelper.neve_meta_sidebar || neveGutenbergHelper.sidebarSetup,\n    containerSetup: neveGutenbergHelper.neve_meta_container || neveGutenbergHelper.containerSetup\n  },\n  setState: function setState(stateItem, value) {\n    this.state[stateItem] = value;\n  },\n  getState: function getState(key) {\n    return this.state[key] || null;\n  },\n  toggleState: function toggleState(key) {\n    this.state[key] = this.state[key] === 'enabled' ? 'disabled' : 'enabled';\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/gutenberg-preview/store.js?");

/***/ })

/******/ });