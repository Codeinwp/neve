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



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
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
      if ('on' !== this.state['neve_meta_enable_content_width']) {
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

      var elements = document.querySelectorAll('.wp-block:not([data-align="full"])');
      elements.forEach(function (element) {
        element.style.maxWidth = blocKWidth;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement(Fragment, null, this.updateBlockWidth(), this.componentsGroup.map(function (group, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YUZpZWxkc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9DaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9SYWRpb0ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Iuc2Nzcz9iOWNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3cCIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlBhbmVsQm9keSIsImNvbXBvbmVudHMiLCJfXyIsImkxOG4iLCJNZXRhRmllbGRzTWFuYWdlciIsInByb3BzIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwic2VsZWN0IiwiZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSIsImNvbXBvbmVudHNHcm91cCIsInVwZGF0ZVZhbHVlcyIsImJpbmQiLCJpZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpbmRleCIsInR5cGUiLCJzZXR0aW5ncyIsImRlcGVuZHNPbiIsImNvbnRhaW5lckRlZmF1bHQiLCJtZXRhU2lkZWJhciIsImNvbnRyb2xzIiwiZmluZCIsIm9iaiIsImNvbnRhaW5lclR5cGUiLCJhY3Rpb25zIiwiY29udGFpbmVyIiwiY29udGVudFdpZHRoRGVmYXVsdCIsImNvbnRlbnRXaWR0aCIsImJsb2NLV2lkdGgiLCJNYXRoIiwicm91bmQiLCJlZGl0b3IiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdHlsZSIsIm1heFdpZHRoIiwidXBkYXRlQmxvY2tXaWR0aCIsIm1hcCIsImdyb3VwIiwidGl0bGUiLCJjb250cm9sIiwiY29udHJvbERhdGEiLCJyZW5kZXJDb250cm9sIiwiZWRpdFBvc3QiLCJQbHVnaW5TaWRlYmFyIiwiUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSIsIlNpZGViYXIiLCJjb21wb3NlIiwid2l0aERpc3BhdGNoIiwid2l0aFNlbGVjdCIsIkNoZWNrYm94Q29udHJvbCIsIkNoZWNrQm94IiwiZGlzcGF0Y2giLCJzZXRNZXRhRmllbGRWYWx1ZSIsIm1ldGEiLCJtZXRhRmllbGRWYWx1ZSIsInN0YXRlVXBkYXRlIiwiaW5wdXRfbGFiZWwiLCJSYWRpb0NvbnRyb2wiLCJSYWRpb0ltYWdlIiwic2V0TWV0YVZhbHVlIiwibWV0YVZhbHVlIiwiZ2V0T3B0aW9ucyIsImNob2ljZXMiLCJpY29ucyIsImNvbnRyb2xDaG9pY2VzIiwia2V5cyIsImNob2ljZSIsInB1c2giLCJsYWJlbCIsIm9wdGlvbnMiLCJSYW5nZUNvbnRyb2wiLCJSYW5nZSIsIm1pbiIsIm1heCIsImNvbnRlbnQiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbnMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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QUNMQSxHQURLO0FBQUEsTUFDQUMsR0FEQSxlQUNBQSxHQURBO0FBRVosU0FDQztBQUFLLE1BQUUsRUFBRTNFLEtBQUssQ0FBQ1UsRUFBZjtBQUFtQixhQUFTLEVBQUM7QUFBN0IsS0FDQyx5QkFBQyxZQUFEO0FBQ0MsU0FBSyxFQUFHVixLQUFLLENBQUN3RCxjQURmO0FBRUMsWUFBUSxFQUFHLGtCQUFDb0IsT0FBRDtBQUFBLGFBQWE1RSxLQUFLLENBQUNzRCxpQkFBTixDQUF3QnNCLE9BQXhCLENBQWI7QUFBQSxLQUZaO0FBR0MsT0FBRyxFQUFFRixHQUhOO0FBSUMsT0FBRyxFQUFFQyxHQUpOO0FBS0MsUUFBSSxFQUFDO0FBTE4sSUFERCxDQUREO0FBV0EsQ0EzQmEsQ0FBZDs7Ozs7Ozs7Ozs7O0FDTEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7O0lBR1FFLGMsR0FBbUJ0RixFQUFFLENBQUN1RixPLENBQXRCRCxjO0FBQ1I7QUFFQUEsY0FBYyxDQUFFLGNBQUYsRUFBa0I7QUFDL0JFLFFBQU0sRUFBRWhDLDJEQUFPQTtBQURnQixDQUFsQixDQUFkLEMiLCJmaWxlIjoiLi9idWlsZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuaW1wb3J0IHsgUmFkaW9JbWFnZSB9IGZyb20gJy4vY29udHJvbHMvUmFkaW9JbWFnZSc7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJy4vY29udHJvbHMvQ2hlY2tCb3gnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuL2NvbnRyb2xzL1JhbmdlJztcblxuY29uc3QgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBQYW5lbEJvZHkgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jbGFzcyBNZXRhRmllbGRzTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oIHt9LCB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApICk7XG5cdFx0dGhpcy5jb21wb25lbnRzR3JvdXAgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdCd0aXRsZSc6IF9fKCAnTGF5b3V0JywgJ25ldmUnICksXG5cdFx0XHRcdCdjb250cm9scyc6IFsgJ25ldmVfbWV0YV9jb250YWluZXInLCAnbmV2ZV9tZXRhX3NpZGViYXInIF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdCd0aXRsZSc6IF9fKCAnQ29tcG9uZW50cycsICduZXZlJyApLFxuXHRcdFx0XHQnY29udHJvbHMnOiBbICduZXZlX21ldGFfZGlzYWJsZV9oZWFkZXInLCAnbmV2ZV9tZXRhX2Rpc2FibGVfdGl0bGUnLCAnbmV2ZV9tZXRhX2Rpc2FibGVfZmVhdHVyZWRfaW1hZ2UnLCAnbmV2ZV9tZXRhX2Rpc2FibGVfZm9vdGVyJyBdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQndGl0bGUnOiBfXyggJ0NvbnRlbnQgd2lkdGgnLCAnbmV2ZScgKSxcblx0XHRcdFx0J2NvbnRyb2xzJzogWyAnbmV2ZV9tZXRhX2VuYWJsZV9jb250ZW50X3dpZHRoJywgJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJyBdXG5cdFx0XHR9XG5cdFx0XTtcblx0XHR0aGlzLnVwZGF0ZVZhbHVlcyA9IHRoaXMudXBkYXRlVmFsdWVzLmJpbmQoIHRoaXMgKTtcblx0fVxuXG5cdHVwZGF0ZVZhbHVlcyhpZCwgdmFsdWUpIHtcblx0XHRsZXQgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdHN0YXRlW2lkXSA9IHZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoIHN0YXRlICk7XG5cdH1cblxuXHRyZW5kZXJDb250cm9sKCBkYXRhLCBpbmRleCApIHtcblx0XHRjb25zdCB7dHlwZSwgaWQsIHNldHRpbmdzfSA9IGRhdGE7XG5cblx0XHRpZiAoICdyYWRpbycgPT09IHR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8UmFkaW9JbWFnZSBzdGF0ZVVwZGF0ZT17dGhpcy51cGRhdGVWYWx1ZXN9IGtleT17aW5kZXh9IGlkPXtpZH0gZGF0YT17c2V0dGluZ3N9Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICggJ2NoZWNrYm94JyA9PT0gdHlwZSApIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxDaGVja0JveCBzdGF0ZVVwZGF0ZT17dGhpcy51cGRhdGVWYWx1ZXN9IGtleT17aW5kZXh9IGlkPXtpZH0gZGF0YT17c2V0dGluZ3N9Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICggJ3JhbmdlJyA9PT0gdHlwZSApIHtcblx0XHRcdGNvbnN0IGRlcGVuZHNPbiA9IHNldHRpbmdzWydkZXBlbmRzX29uJ107XG5cdFx0XHRpZiAoICdvbicgPT09IHRoaXMuc3RhdGVbZGVwZW5kc09uXSApIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8UmFuZ2Ugc3RhdGVVcGRhdGU9e3RoaXMudXBkYXRlVmFsdWVzfSBrZXk9e2luZGV4fSBpZD17aWR9IGRhdGE9e3NldHRpbmdzfS8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQmxvY2tXaWR0aCgpIHtcblx0XHRpZiAoICdvbicgIT09IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9lbmFibGVfY29udGVudF93aWR0aCddICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBjb250YWluZXJEZWZhdWx0ID0gbWV0YVNpZGViYXIuY29udHJvbHMuZmluZChvYmogPT4gJ25ldmVfbWV0YV9jb250YWluZXInID09PSBvYmouaWQgKS5zZXR0aW5ncy5kZWZhdWx0O1xuXHRcdGxldCBjb250YWluZXJUeXBlID0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2NvbnRhaW5lciddID8gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2NvbnRhaW5lciddIDogY29udGFpbmVyRGVmYXVsdDtcblx0XHRjb250YWluZXJUeXBlID0gJ2RlZmF1bHQnICE9PSBjb250YWluZXJUeXBlID8gY29udGFpbmVyVHlwZSA6IG1ldGFTaWRlYmFyLmFjdGlvbnNbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10uY29udGFpbmVyO1xuXG5cdFx0Y29uc3QgY29udGVudFdpZHRoRGVmYXVsdCA9IG1ldGFTaWRlYmFyLmNvbnRyb2xzLmZpbmQoIG9iaiA9PiAnbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnID09PSBvYmouaWQgKS5zZXR0aW5ncy5kZWZhdWx0O1xuXHRcdGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10gPyB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGVudF93aWR0aCddIDogY29udGVudFdpZHRoRGVmYXVsdDtcblxuXHRcdGxldCBibG9jS1dpZHRoO1xuXHRcdGlmICggJ2NvbnRhaW5lZCcgPT09IGNvbnRhaW5lclR5cGUgKSB7XG5cdFx0XHRibG9jS1dpZHRoID0gTWF0aC5yb3VuZCggKCBjb250ZW50V2lkdGggLyAxMDAgKSAqIG1ldGFTaWRlYmFyLmFjdGlvbnNbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10uZWRpdG9yICkgKyAncHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRibG9jS1dpZHRoID0gY29udGVudFdpZHRoICsgJyUnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwLWJsb2NrOm5vdChbZGF0YS1hbGlnbj1cImZ1bGxcIl0pJyk7XG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSBibG9jS1dpZHRoO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdHt0aGlzLnVwZGF0ZUJsb2NrV2lkdGgoKX1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuY29tcG9uZW50c0dyb3VwLm1hcCggKCBncm91cCwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHRpdGxlLCBjb250cm9scyB9ID0gZ3JvdXA7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj1cImFkbWluLXBvc3RcIlxuXHRcdFx0XHRcdFx0XHRcdGludGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xzLm1hcCggKGNvbnRyb2wsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBjb250cm9sRGF0YSA9IG1ldGFTaWRlYmFyLmNvbnRyb2xzLmZpbmQob2JqID0+IG9iai5pZCA9PT0gY29udHJvbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJDb250cm9sKCBjb250cm9sRGF0YSwgaW5kZXggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgTWV0YUZpZWxkc01hbmFnZXIgfTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuY29uc3QgeyBQbHVnaW5TaWRlYmFyLCBQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtIH0gPSB3cC5lZGl0UG9zdDtcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCB7IE1ldGFGaWVsZHNNYW5hZ2VyIH0gZnJvbSAnLi9NZXRhRmllbGRzTWFuYWdlcic7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxQbHVnaW5TaWRlYmFyTW9yZU1lbnVJdGVtXG5cdFx0XHRcdGljb249XCJhZG1pbi1zZXR0aW5nc1wiXG5cdFx0XHRcdHRhcmdldD1cIm5ldmUtbWV0YS1zaWRlYmFyXCJcblx0XHRcdD5cblx0XHRcdFx0e19fKCdJbmRpdmlkdWFsIHNldHRpbmdzJywgJ25ldmUnKX1cblx0XHRcdDwvUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbT5cblx0XHRcdDxQbHVnaW5TaWRlYmFyXG5cdFx0XHRcdGljb249XCJhZG1pbi1zZXR0aW5nc1wiXG5cdFx0XHRcdG5hbWU9XCJuZXZlLW1ldGEtc2lkZWJhclwiXG5cdFx0XHRcdHRpdGxlPXtfXygnSW5kaXZpZHVhbCBzZXR0aW5ncycsICduZXZlJyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNZXRhRmllbGRzTWFuYWdlci8+XG5cdFx0XHQ8L1BsdWdpblNpZGViYXI+XG5cdFx0PC8+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsImNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBDaGVja2JveENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IENoZWNrQm94ID0gY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNZXRhRmllbGRWYWx1ZTogKGlkLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaCgnY29yZS9lZGl0b3InKS5lZGl0UG9zdCggeyBtZXRhOiB7IFtpZF06IHZhbHVlIH0gfSApO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QsIHtpZH0pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bWV0YUZpZWxkVmFsdWU6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbaWRdXG5cdFx0fTtcblx0fSlcbikoKHtpZCwgZGF0YSwgbWV0YUZpZWxkVmFsdWUsIHNldE1ldGFGaWVsZFZhbHVlLCBzdGF0ZVVwZGF0ZX0pID0+IHtcblx0Y29uc3Qge2lucHV0X2xhYmVsfSA9IGRhdGE7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtY2hlY2tib3hcIj5cblx0XHRcdDxDaGVja2JveENvbnRyb2xcblx0XHRcdFx0bGFiZWw9e2lucHV0X2xhYmVsfVxuXHRcdFx0XHRjaGVja2VkPXsgKCAnb24nID09PSBtZXRhRmllbGRWYWx1ZSApIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRzdGF0ZVVwZGF0ZSggaWQsICggdmFsdWUgPyAnb24nIDogJ29mZicgKSApO1xuXHRcdFx0XHRcdHNldE1ldGFGaWVsZFZhbHVlKCBpZCwgKCB2YWx1ZSA/ICdvbicgOiAnb2ZmJyApICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblxuXHQpO1xufSk7XG5cbmV4cG9ydCB7Q2hlY2tCb3h9O1xuIiwiY29uc3QgeyBSYWRpb0NvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuXG5leHBvcnQgY29uc3QgUmFkaW9JbWFnZSA9IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gsIHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldE1ldGFWYWx1ZTogKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGRpc3BhdGNoKCdjb3JlL2VkaXRvcicpLmVkaXRQb3N0KHttZXRhOiB7W3Byb3BzLmlkXTogdmFsdWV9fSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSApLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QsIHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1ldGFWYWx1ZTogc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVtwcm9wcy5pZF0gfHwgcHJvcHMuZGF0YS5kZWZhdWx0XG5cdFx0fTtcblx0fSApICkoIGZ1bmN0aW9uKCBwcm9wcyApIHtcblxuXHRcdGNvbnN0IGdldE9wdGlvbnMgPSBmdW5jdGlvbihwcm9wcykge1xuXHRcdFx0Y29uc3Qge2Nob2ljZXMsIGljb25zfSA9IHByb3BzLmRhdGE7XG5cdFx0XHRsZXQgY29udHJvbENob2ljZXMgPSBbXTtcblx0XHRcdE9iamVjdC5rZXlzKGNob2ljZXMpLm1hcCgoY2hvaWNlKSA9PiB7XG5cdFx0XHRcdGNvbnRyb2xDaG9pY2VzLnB1c2goIHtsYWJlbDogPGltZyBzcmM9e2ljb25zW2Nob2ljZV19Lz4sIHZhbHVlOiBjaG9pY2V9ICk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBjb250cm9sQ2hvaWNlcztcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnMocHJvcHMpO1xuXHRcdGNvbnN0IHsgbGFiZWwgfSA9IHByb3BzLmRhdGE7XG5cdFx0Y29uc3QgeyBpZCwgbWV0YVZhbHVlIH0gPSBwcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1yYWRpby1pbWFnZVwiPlxuXHRcdFx0XHR7bGFiZWwgJiYgPHAgY2xhc3NOYW1lPVwicG9zdC1hdHRyaWJ1dGVzLWxhYmVsLXdyYXBwZXJcIj48c3BhbiBjbGFzc05hbWU9XCJwb3N0LWF0dHJpYnV0ZXMtbGFiZWxcIj57bGFiZWx9PC9zcGFuPjwvcD59XG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdFx0XHRzZWxlY3RlZD17bWV0YVZhbHVlfVxuXHRcdFx0XHRcdG9wdGlvbnM9e29wdGlvbnN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0TWV0YVZhbHVlKHZhbHVlKTtcblx0XHRcdFx0XHRcdHByb3BzLnN0YXRlVXBkYXRlKCBpZCwgdmFsdWUgKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbik7XG4iLCIvKiBnbG9iYWwgbWV0YVNpZGViYXIgKi9cbmNvbnN0IHtjb21wb3NlfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7d2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0fSA9IHdwLmRhdGE7XG5jb25zdCB7UmFuZ2VDb250cm9sfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IFJhbmdlID0gY29tcG9zZShcblx0d2l0aERpc3BhdGNoKChkaXNwYXRjaCwgcHJvcHMpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0TWV0YUZpZWxkVmFsdWU6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRwcm9wcy5zdGF0ZVVwZGF0ZShwcm9wcy5pZCwgdmFsdWUpO1xuXHRcdFx0XHRkaXNwYXRjaCgnY29yZS9lZGl0b3InKS5lZGl0UG9zdCh7bWV0YToge1twcm9wcy5pZF06IHZhbHVlfX0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pLFxuXHR3aXRoU2VsZWN0KChzZWxlY3QsIHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1ldGFGaWVsZFZhbHVlOiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpW3Byb3BzLmlkXSB8fCBwcm9wcy5kYXRhLmRlZmF1bHRcblx0XHR9O1xuXHR9KVxuKSgocHJvcHMpID0+IHtcblx0Y29uc3Qge21pbiwgbWF4fSA9IHByb3BzLmRhdGE7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17cHJvcHMuaWR9IGNsYXNzTmFtZT1cIm5ldmUtbWV0YS1jb250cm9sIG5ldmUtbWV0YS1yYW5nZVwiPlxuXHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHR2YWx1ZT17IHByb3BzLm1ldGFGaWVsZFZhbHVlIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoY29udGVudCkgPT4gcHJvcHMuc2V0TWV0YUZpZWxkVmFsdWUoY29udGVudCkgfVxuXHRcdFx0XHRtaW49e21pbn1cblx0XHRcdFx0bWF4PXttYXh9XG5cdFx0XHRcdHN0ZXA9XCIxXCJcblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59KTtcblxuZXhwb3J0IHtSYW5nZX07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7IHJlZ2lzdGVyUGx1Z2luIH0gPSB3cC5wbHVnaW5zO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xuXG5yZWdpc3RlclBsdWdpbiggJ21ldGEtc2lkZWJhcicsIHtcblx0cmVuZGVyOiBTaWRlYmFyXG59ICk7XG4iXSwic291cmNlUm9vdCI6IiJ9