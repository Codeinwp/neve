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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/MetaFieldsManager.js":
/*!*********************************************!*\
  !*** ./src/components/MetaFieldsManager.js ***!
  \*********************************************/
/*! exports provided: MetaFieldsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaFieldsManager", function() { return MetaFieldsManager; });
/* harmony import */ var _controls_RadioImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/RadioImage */ "./src/components/controls/RadioImage.js");
/* harmony import */ var _controls_CheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/CheckBox */ "./src/components/controls/CheckBox.js");
/* harmony import */ var _controls_Range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/Range */ "./src/components/controls/Range.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* global metaSidebar */



var Component = wp.element.Component;
var PanelBody = wp.components.PanelBody;
var __ = wp.i18n.__;

var MetaFieldsManager = /*#__PURE__*/function (_Component) {
  _inherits(MetaFieldsManager, _Component);

  var _super = _createSuper(MetaFieldsManager);

  function MetaFieldsManager(props) {
    var _this;

    _classCallCheck(this, MetaFieldsManager);

    _this = _super.call(this, props);
    _this.state = Object.assign({}, wp.data.select('core/editor').getEditedPostAttribute('meta'));
    _this.componentsGroup = [{
      'title': __('Layout', 'neve'),
      'controls': ['neve_meta_container', 'neve_meta_sidebar']
    }, {
      'title': __('Components', 'neve'),
      'controls': ['neve_meta_disable_header', 'neve_meta_disable_title', 'neve_meta_disable_featured_image', 'neve_meta_disable_footer']
    }, {
      'title': __('Content width', 'neve'),
      'controls': ['neve_meta_enable_content_width', 'neve_meta_content_width']
    }];
    _this.updateValues = _this.updateValues.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MetaFieldsManager, [{
    key: "updateValues",
    value: function updateValues(id, value) {
      var state = this.state;
      state[id] = value;
      this.setState(state);
    }
  }, {
    key: "renderControl",
    value: function renderControl(data, index) {
      var type = data.type,
          id = data.id,
          settings = data.settings;

      if ('radio' === type) {
        return wp.element.createElement(_controls_RadioImage__WEBPACK_IMPORTED_MODULE_0__["RadioImage"], {
          stateUpdate: this.updateValues,
          key: index,
          id: id,
          data: settings
        });
      }

      if ('checkbox' === type) {
        return wp.element.createElement(_controls_CheckBox__WEBPACK_IMPORTED_MODULE_1__["CheckBox"], {
          stateUpdate: this.updateValues,
          key: index,
          id: id,
          data: settings
        });
      }

      if ('range' === type) {
        var dependsOn = settings['depends_on'];

        if ('on' === this.state[dependsOn]) {
          return wp.element.createElement(_controls_Range__WEBPACK_IMPORTED_MODULE_2__["Range"], {
            stateUpdate: this.updateValues,
            key: index,
            id: id,
            data: settings
          });
        }
      }
    }
  }, {
    key: "updateBlockWidth",
    value: function updateBlockWidth() {
      var elements = document.querySelectorAll('.wp-block:not([data-align="full"])');

      if ('on' !== this.state['neve_meta_enable_content_width']) {
        elements.forEach(function (element) {
          element.style.removeProperty('max-width');
        });
        return false;
      }

      var containerDefault = metaSidebar.controls.find(function (obj) {
        return 'neve_meta_container' === obj.id;
      }).settings["default"];
      var containerType = this.state['neve_meta_container'] ? this.state['neve_meta_container'] : containerDefault;
      containerType = 'default' !== containerType ? containerType : metaSidebar.actions['neve_meta_content_width'].container;
      var contentWidthDefault = metaSidebar.controls.find(function (obj) {
        return 'neve_meta_content_width' === obj.id;
      }).settings["default"];
      var contentWidth = this.state['neve_meta_content_width'] ? this.state['neve_meta_content_width'] : contentWidthDefault;
      var blocKWidth;

      if ('contained' === containerType) {
        blocKWidth = Math.round(contentWidth / 100 * metaSidebar.actions['neve_meta_content_width'].editor) + 'px';
      } else {
        blocKWidth = contentWidth + '%';
      }

      elements.forEach(function (element) {
        element.style.maxWidth = blocKWidth;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement(React.Fragment, null, this.updateBlockWidth(), this.componentsGroup.map(function (group, index) {
        var title = group.title,
            controls = group.controls;
        return wp.element.createElement(PanelBody, {
          key: index,
          title: title,
          icon: "admin-post",
          intialOpen: true
        }, controls.map(function (control, index) {
          var controlData = metaSidebar.controls.find(function (obj) {
            return obj.id === control;
          });
          return _this2.renderControl(controlData, index);
        }));
      }));
    }
  }]);

  return MetaFieldsManager;
}(Component);



/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MetaFieldsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaFieldsManager */ "./src/components/MetaFieldsManager.js");
/* global metaSidebar */
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var __ = wp.i18n.__;


var Sidebar = function Sidebar() {
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(PluginSidebarMoreMenuItem, {
    icon: "admin-settings",
    target: "neve-meta-sidebar"
  }, __('Individual settings', 'neve')), wp.element.createElement(PluginSidebar, {
    icon: "admin-settings",
    name: "neve-meta-sidebar",
    title: __('Individual settings', 'neve')
  }, wp.element.createElement(_MetaFieldsManager__WEBPACK_IMPORTED_MODULE_0__["MetaFieldsManager"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/controls/CheckBox.js":
/*!*********************************************!*\
  !*** ./src/components/controls/CheckBox.js ***!
  \*********************************************/
/*! exports provided: CheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return CheckBox; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var CheckboxControl = wp.components.CheckboxControl;
var CheckBox = compose(withDispatch(function (dispatch) {
  return {
    setMetaFieldValue: function setMetaFieldValue(id, value) {
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, id, value)
      });
    }
  };
}), withSelect(function (select, _ref) {
  var id = _ref.id;
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[id]
  };
}))(function (_ref2) {
  var id = _ref2.id,
      data = _ref2.data,
      metaFieldValue = _ref2.metaFieldValue,
      setMetaFieldValue = _ref2.setMetaFieldValue,
      stateUpdate = _ref2.stateUpdate;
  var input_label = data.input_label;
  return wp.element.createElement("div", {
    className: "neve-meta-control neve-meta-checkbox"
  }, wp.element.createElement(CheckboxControl, {
    label: input_label,
    checked: 'on' === metaFieldValue,
    onChange: function onChange(value) {
      stateUpdate(id, value ? 'on' : 'off');
      setMetaFieldValue(id, value ? 'on' : 'off');
    }
  }));
});


/***/ }),

/***/ "./src/components/controls/RadioImage.js":
/*!***********************************************!*\
  !*** ./src/components/controls/RadioImage.js ***!
  \***********************************************/
/*! exports provided: RadioImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioImage", function() { return RadioImage; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RadioControl = wp.components.RadioControl;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var RadioImage = compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(value) {
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, props.id, value)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data["default"]
  };
}))(function (props) {
  var getOptions = function getOptions(props) {
    var _props$data = props.data,
        choices = _props$data.choices,
        icons = _props$data.icons;
    var controlChoices = [];
    Object.keys(choices).map(function (choice) {
      controlChoices.push({
        label: wp.element.createElement("img", {
          src: icons[choice]
        }),
        value: choice
      });
    });
    return controlChoices;
  };

  var options = getOptions(props);
  var label = props.data.label;
  var id = props.id,
      metaValue = props.metaValue;
  return wp.element.createElement("div", {
    className: "neve-meta-control neve-meta-radio-image"
  }, label && wp.element.createElement("p", {
    className: "post-attributes-label-wrapper"
  }, wp.element.createElement("span", {
    className: "post-attributes-label"
  }, label)), wp.element.createElement(RadioControl, {
    selected: metaValue,
    options: options,
    onChange: function onChange(value) {
      props.setMetaValue(value);
      props.stateUpdate(id, value);
    }
  }));
});

/***/ }),

/***/ "./src/components/controls/Range.js":
/*!******************************************!*\
  !*** ./src/components/controls/Range.js ***!
  \******************************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global metaSidebar */
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var RangeControl = wp.components.RangeControl;
var Range = compose(withDispatch(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      props.stateUpdate(props.id, value);
      dispatch('core/editor').editPost({
        meta: _defineProperty({}, props.id, value)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id] || props.data["default"]
  };
}))(function (props) {
  var _props$data = props.data,
      min = _props$data.min,
      max = _props$data.max;
  return wp.element.createElement("div", {
    id: props.id,
    className: "neve-meta-control neve-meta-range"
  }, wp.element.createElement(RangeControl, {
    value: props.metaFieldValue,
    onChange: function onChange(content) {
      return props.setMetaFieldValue(content);
    },
    min: min,
    max: max,
    step: "1"
  }));
});


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/**
 * Internal dependencies
 */
var registerPlugin = wp.plugins.registerPlugin;

registerPlugin('meta-sidebar', {
  render: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/index.js ./src/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/editor.scss */"./src/editor.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YUZpZWxkc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9DaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9SYWRpb0ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Iuc2Nzcz9iOWNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJ3cCIsImVsZW1lbnQiLCJQYW5lbEJvZHkiLCJjb21wb25lbnRzIiwiX18iLCJpMThuIiwiTWV0YUZpZWxkc01hbmFnZXIiLCJwcm9wcyIsInN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsInNlbGVjdCIsImdldEVkaXRlZFBvc3RBdHRyaWJ1dGUiLCJjb21wb25lbnRzR3JvdXAiLCJ1cGRhdGVWYWx1ZXMiLCJiaW5kIiwiaWQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaW5kZXgiLCJ0eXBlIiwic2V0dGluZ3MiLCJkZXBlbmRzT24iLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdHlsZSIsInJlbW92ZVByb3BlcnR5IiwiY29udGFpbmVyRGVmYXVsdCIsIm1ldGFTaWRlYmFyIiwiY29udHJvbHMiLCJmaW5kIiwib2JqIiwiY29udGFpbmVyVHlwZSIsImFjdGlvbnMiLCJjb250YWluZXIiLCJjb250ZW50V2lkdGhEZWZhdWx0IiwiY29udGVudFdpZHRoIiwiYmxvY0tXaWR0aCIsIk1hdGgiLCJyb3VuZCIsImVkaXRvciIsIm1heFdpZHRoIiwidXBkYXRlQmxvY2tXaWR0aCIsIm1hcCIsImdyb3VwIiwidGl0bGUiLCJjb250cm9sIiwiY29udHJvbERhdGEiLCJyZW5kZXJDb250cm9sIiwiZWRpdFBvc3QiLCJQbHVnaW5TaWRlYmFyIiwiUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSIsIlNpZGViYXIiLCJjb21wb3NlIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsIkNoZWNrYm94Q29udHJvbCIsIkNoZWNrQm94IiwiZGlzcGF0Y2giLCJzZXRNZXRhRmllbGRWYWx1ZSIsIm1ldGEiLCJtZXRhRmllbGRWYWx1ZSIsInN0YXRlVXBkYXRlIiwiaW5wdXRfbGFiZWwiLCJSYWRpb0NvbnRyb2wiLCJSYWRpb0ltYWdlIiwic2V0TWV0YVZhbHVlIiwibWV0YVZhbHVlIiwiZ2V0T3B0aW9ucyIsImNob2ljZXMiLCJpY29ucyIsImNvbnRyb2xDaG9pY2VzIiwia2V5cyIsImNob2ljZSIsInB1c2giLCJsYWJlbCIsIm9wdGlvbnMiLCJSYW5nZUNvbnRyb2wiLCJSYW5nZSIsIm1pbiIsIm1heCIsImNvbnRlbnQiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFHQSxDQUpTLENBVFUsQ0FBUCxDQWNaLFVBQUNKLEtBQUQsRUFBVztBQUFBLG9CQUNPQSxLQUFLLENBQUNJLElBRGI7QUFBQSxNQUNMdUUsR0FESyxlQUNMQSxHQURLO0FBQUEsTUFDQUMsR0FEQSxlQUNBQSxHQURBO0FBRVosU0FDQztBQUFLLE1BQUUsRUFBRTVFLEtBQUssQ0FBQ1UsRUFBZjtBQUFtQixhQUFTLEVBQUM7QUFBN0IsS0FDQyx5QkFBQyxZQUFEO0FBQ0MsU0FBSyxFQUFHVixLQUFLLENBQUN5RCxjQURmO0FBRUMsWUFBUSxFQUFHLGtCQUFDb0IsT0FBRDtBQUFBLGFBQWE3RSxLQUFLLENBQUN1RCxpQkFBTixDQUF3QnNCLE9BQXhCLENBQWI7QUFBQSxLQUZaO0FBR0MsT0FBRyxFQUFFRixHQUhOO0FBSUMsT0FBRyxFQUFFQyxHQUpOO0FBS0MsUUFBSSxFQUFDO0FBTE4sSUFERCxDQUREO0FBV0EsQ0EzQmEsQ0FBZDs7Ozs7Ozs7Ozs7O0FDTEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7O0lBR1FFLGMsR0FBbUJyRixFQUFFLENBQUNzRixPLENBQXRCRCxjO0FBQ1I7QUFFQUEsY0FBYyxDQUFFLGNBQUYsRUFBa0I7QUFDL0JFLFFBQU0sRUFBRWhDLDJEQUFPQTtBQURnQixDQUFsQixDQUFkLEMiLCJmaWxlIjoiLi9idWlsZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuaW1wb3J0IHsgUmFkaW9JbWFnZSB9IGZyb20gJy4vY29udHJvbHMvUmFkaW9JbWFnZSc7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJy4vY29udHJvbHMvQ2hlY2tCb3gnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuL2NvbnRyb2xzL1JhbmdlJztcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFBhbmVsQm9keSB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNsYXNzIE1ldGFGaWVsZHNNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbigge30sIHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgKTtcblx0XHR0aGlzLmNvbXBvbmVudHNHcm91cCA9IFtcblx0XHRcdHtcblx0XHRcdFx0J3RpdGxlJzogX18oICdMYXlvdXQnLCAnbmV2ZScgKSxcblx0XHRcdFx0J2NvbnRyb2xzJzogWyAnbmV2ZV9tZXRhX2NvbnRhaW5lcicsICduZXZlX21ldGFfc2lkZWJhcicgXVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0J3RpdGxlJzogX18oICdDb21wb25lbnRzJywgJ25ldmUnICksXG5cdFx0XHRcdCdjb250cm9scyc6IFsgJ25ldmVfbWV0YV9kaXNhYmxlX2hlYWRlcicsICduZXZlX21ldGFfZGlzYWJsZV90aXRsZScsICduZXZlX21ldGFfZGlzYWJsZV9mZWF0dXJlZF9pbWFnZScsICduZXZlX21ldGFfZGlzYWJsZV9mb290ZXInIF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdCd0aXRsZSc6IF9fKCAnQ29udGVudCB3aWR0aCcsICduZXZlJyApLFxuXHRcdFx0XHQnY29udHJvbHMnOiBbICduZXZlX21ldGFfZW5hYmxlX2NvbnRlbnRfd2lkdGgnLCAnbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnIF1cblx0XHRcdH1cblx0XHRdO1xuXHRcdHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCggdGhpcyApO1xuXHR9XG5cblx0dXBkYXRlVmFsdWVzKGlkLCB2YWx1ZSkge1xuXHRcdGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0c3RhdGVbaWRdID0gdmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSggc3RhdGUgKTtcblx0fVxuXG5cdHJlbmRlckNvbnRyb2woIGRhdGEsIGluZGV4ICkge1xuXHRcdGNvbnN0IHt0eXBlLCBpZCwgc2V0dGluZ3N9ID0gZGF0YTtcblxuXHRcdGlmICggJ3JhZGlvJyA9PT0gdHlwZSApIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxSYWRpb0ltYWdlIHN0YXRlVXBkYXRlPXt0aGlzLnVwZGF0ZVZhbHVlc30ga2V5PXtpbmRleH0gaWQ9e2lkfSBkYXRhPXtzZXR0aW5nc30vPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCAnY2hlY2tib3gnID09PSB0eXBlICkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PENoZWNrQm94IHN0YXRlVXBkYXRlPXt0aGlzLnVwZGF0ZVZhbHVlc30ga2V5PXtpbmRleH0gaWQ9e2lkfSBkYXRhPXtzZXR0aW5nc30vPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCAncmFuZ2UnID09PSB0eXBlICkge1xuXHRcdFx0Y29uc3QgZGVwZW5kc09uID0gc2V0dGluZ3NbJ2RlcGVuZHNfb24nXTtcblx0XHRcdGlmICggJ29uJyA9PT0gdGhpcy5zdGF0ZVtkZXBlbmRzT25dICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxSYW5nZSBzdGF0ZVVwZGF0ZT17dGhpcy51cGRhdGVWYWx1ZXN9IGtleT17aW5kZXh9IGlkPXtpZH0gZGF0YT17c2V0dGluZ3N9Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVCbG9ja1dpZHRoKCkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwLWJsb2NrOm5vdChbZGF0YS1hbGlnbj1cImZ1bGxcIl0pJyk7XG5cdFx0aWYgKCAnb24nICE9PSB0aGlzLnN0YXRlWyduZXZlX21ldGFfZW5hYmxlX2NvbnRlbnRfd2lkdGgnXSApIHtcblx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21heC13aWR0aCcpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGNvbnRhaW5lckRlZmF1bHQgPSBtZXRhU2lkZWJhci5jb250cm9scy5maW5kKG9iaiA9PiAnbmV2ZV9tZXRhX2NvbnRhaW5lcicgPT09IG9iai5pZCApLnNldHRpbmdzLmRlZmF1bHQ7XG5cdFx0bGV0IGNvbnRhaW5lclR5cGUgPSB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGFpbmVyJ10gPyB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGFpbmVyJ10gOiBjb250YWluZXJEZWZhdWx0O1xuXHRcdGNvbnRhaW5lclR5cGUgPSAnZGVmYXVsdCcgIT09IGNvbnRhaW5lclR5cGUgPyBjb250YWluZXJUeXBlIDogbWV0YVNpZGViYXIuYWN0aW9uc1snbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXS5jb250YWluZXI7XG5cblx0XHRjb25zdCBjb250ZW50V2lkdGhEZWZhdWx0ID0gbWV0YVNpZGViYXIuY29udHJvbHMuZmluZCggb2JqID0+ICduZXZlX21ldGFfY29udGVudF93aWR0aCcgPT09IG9iai5pZCApLnNldHRpbmdzLmRlZmF1bHQ7XG5cdFx0Y29uc3QgY29udGVudFdpZHRoID0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXSA/IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10gOiBjb250ZW50V2lkdGhEZWZhdWx0O1xuXG5cdFx0bGV0IGJsb2NLV2lkdGg7XG5cdFx0aWYgKCAnY29udGFpbmVkJyA9PT0gY29udGFpbmVyVHlwZSApIHtcblx0XHRcdGJsb2NLV2lkdGggPSBNYXRoLnJvdW5kKCAoIGNvbnRlbnRXaWR0aCAvIDEwMCApICogbWV0YVNpZGViYXIuYWN0aW9uc1snbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXS5lZGl0b3IgKSArICdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJsb2NLV2lkdGggPSBjb250ZW50V2lkdGggKyAnJSc7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBibG9jS1dpZHRoO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7dGhpcy51cGRhdGVCbG9ja1dpZHRoKCl9XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLmNvbXBvbmVudHNHcm91cC5tYXAoICggZ3JvdXAsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgeyB0aXRsZSwgY29udHJvbHMgfSA9IGdyb3VwO1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdGljb249XCJhZG1pbi1wb3N0XCJcblx0XHRcdFx0XHRcdFx0XHRpbnRpYWxPcGVuPXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250cm9scy5tYXAoIChjb250cm9sLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgY29udHJvbERhdGEgPSBtZXRhU2lkZWJhci5jb250cm9scy5maW5kKG9iaiA9PiBvYmouaWQgPT09IGNvbnRyb2wpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucmVuZGVyQ29udHJvbCggY29udHJvbERhdGEsIGluZGV4IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgeyBNZXRhRmllbGRzTWFuYWdlciB9O1xuIiwiLyogZ2xvYmFsIG1ldGFTaWRlYmFyICovXG5jb25zdCB7IFBsdWdpblNpZGViYXIsIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gfSA9IHdwLmVkaXRQb3N0O1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IHsgTWV0YUZpZWxkc01hbmFnZXIgfSBmcm9tICcuL01ldGFGaWVsZHNNYW5hZ2VyJztcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW1cblx0XHRcdFx0aWNvbj1cImFkbWluLXNldHRpbmdzXCJcblx0XHRcdFx0dGFyZ2V0PVwibmV2ZS1tZXRhLXNpZGViYXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR7X18oJ0luZGl2aWR1YWwgc2V0dGluZ3MnLCAnbmV2ZScpfVxuXHRcdFx0PC9QbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtPlxuXHRcdFx0PFBsdWdpblNpZGViYXJcblx0XHRcdFx0aWNvbj1cImFkbWluLXNldHRpbmdzXCJcblx0XHRcdFx0bmFtZT1cIm5ldmUtbWV0YS1zaWRlYmFyXCJcblx0XHRcdFx0dGl0bGU9e19fKCdJbmRpdmlkdWFsIHNldHRpbmdzJywgJ25ldmUnKX1cblx0XHRcdD5cblx0XHRcdFx0PE1ldGFGaWVsZHNNYW5hZ2VyLz5cblx0XHRcdDwvUGx1Z2luU2lkZWJhcj5cblx0XHQ8Lz5cblx0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IENoZWNrYm94Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQ2hlY2tCb3ggPSBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldE1ldGFGaWVsZFZhbHVlOiAoaWQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KCB7IG1ldGE6IHsgW2lkXTogdmFsdWUgfSB9ICk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCwge2lkfSkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZXRhRmllbGRWYWx1ZTogc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVtpZF1cblx0XHR9O1xuXHR9KVxuKSgoe2lkLCBkYXRhLCBtZXRhRmllbGRWYWx1ZSwgc2V0TWV0YUZpZWxkVmFsdWUsIHN0YXRlVXBkYXRlfSkgPT4ge1xuXHRjb25zdCB7aW5wdXRfbGFiZWx9ID0gZGF0YTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1jaGVja2JveFwiPlxuXHRcdFx0PENoZWNrYm94Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17aW5wdXRfbGFiZWx9XG5cdFx0XHRcdGNoZWNrZWQ9eyAoICdvbicgPT09IG1ldGFGaWVsZFZhbHVlICkgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHN0YXRlVXBkYXRlKCBpZCwgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdFx0c2V0TWV0YUZpZWxkVmFsdWUoIGlkLCAoIHZhbHVlID8gJ29uJyA6ICdvZmYnICkgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXG5cdCk7XG59KTtcblxuZXhwb3J0IHtDaGVja0JveH07XG4iLCJjb25zdCB7IFJhZGlvQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBjb25zdCBSYWRpb0ltYWdlID0gY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCwgcHJvcHMpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0TWV0YVZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe21ldGE6IHtbcHJvcHMuaWRdOiB2YWx1ZX19KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9ICksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCwgcHJvcHMpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWV0YVZhbHVlOiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpW3Byb3BzLmlkXSB8fCBwcm9wcy5kYXRhLmRlZmF1bHRcblx0XHR9O1xuXHR9ICkgKSggZnVuY3Rpb24oIHByb3BzICkge1xuXG5cdFx0Y29uc3QgZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0XHRjb25zdCB7Y2hvaWNlcywgaWNvbnN9ID0gcHJvcHMuZGF0YTtcblx0XHRcdGxldCBjb250cm9sQ2hvaWNlcyA9IFtdO1xuXHRcdFx0T2JqZWN0LmtleXMoY2hvaWNlcykubWFwKChjaG9pY2UpID0+IHtcblx0XHRcdFx0Y29udHJvbENob2ljZXMucHVzaCgge2xhYmVsOiA8aW1nIHNyYz17aWNvbnNbY2hvaWNlXX0vPiwgdmFsdWU6IGNob2ljZX0gKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGNvbnRyb2xDaG9pY2VzO1xuXHRcdH07XG5cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0T3B0aW9ucyhwcm9wcyk7XG5cdFx0Y29uc3QgeyBsYWJlbCB9ID0gcHJvcHMuZGF0YTtcblx0XHRjb25zdCB7IGlkLCBtZXRhVmFsdWUgfSA9IHByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLXJhZGlvLWltYWdlXCI+XG5cdFx0XHRcdHtsYWJlbCAmJiA8cCBjbGFzc05hbWU9XCJwb3N0LWF0dHJpYnV0ZXMtbGFiZWwtd3JhcHBlclwiPjxzcGFuIGNsYXNzTmFtZT1cInBvc3QtYXR0cmlidXRlcy1sYWJlbFwiPntsYWJlbH08L3NwYW4+PC9wPn1cblx0XHRcdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0XHRcdHNlbGVjdGVkPXttZXRhVmFsdWV9XG5cdFx0XHRcdFx0b3B0aW9ucz17b3B0aW9uc31cblx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRNZXRhVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdFx0cHJvcHMuc3RhdGVVcGRhdGUoIGlkLCB2YWx1ZSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuKTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcbmNvbnN0IHtSYW5nZUNvbnRyb2x9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgUmFuZ2UgPSBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoLCBwcm9wcykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNZXRhRmllbGRWYWx1ZTogKHZhbHVlKSA9PiB7XG5cdFx0XHRcdHByb3BzLnN0YXRlVXBkYXRlKHByb3BzLmlkLCB2YWx1ZSk7XG5cdFx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHttZXRhOiB7W3Byb3BzLmlkXTogdmFsdWV9fSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSksXG5cdHdpdGhTZWxlY3QoKHNlbGVjdCwgcHJvcHMpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWV0YUZpZWxkVmFsdWU6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbcHJvcHMuaWRdIHx8IHByb3BzLmRhdGEuZGVmYXVsdFxuXHRcdH07XG5cdH0pXG4pKChwcm9wcykgPT4ge1xuXHRjb25zdCB7bWluLCBtYXh9ID0gcHJvcHMuZGF0YTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtwcm9wcy5pZH0gY2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLXJhbmdlXCI+XG5cdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdHZhbHVlPXsgcHJvcHMubWV0YUZpZWxkVmFsdWUgfVxuXHRcdFx0XHRvbkNoYW5nZT17IChjb250ZW50KSA9PiBwcm9wcy5zZXRNZXRhRmllbGRWYWx1ZShjb250ZW50KSB9XG5cdFx0XHRcdG1pbj17bWlufVxuXHRcdFx0XHRtYXg9e21heH1cblx0XHRcdFx0c3RlcD1cIjFcIlxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn0pO1xuXG5leHBvcnQge1JhbmdlfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgcmVnaXN0ZXJQbHVnaW4gfSA9IHdwLnBsdWdpbnM7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZWJhcic7XG5cbnJlZ2lzdGVyUGx1Z2luKCAnbWV0YS1zaWRlYmFyJywge1xuXHRyZW5kZXI6IFNpZGViYXJcbn0gKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=