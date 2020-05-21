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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWV0YUZpZWxkc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9DaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250cm9scy9SYWRpb0ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1JhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3Iuc2Nzcz9iOWNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJ3cCIsImVsZW1lbnQiLCJQYW5lbEJvZHkiLCJjb21wb25lbnRzIiwiX18iLCJpMThuIiwiTWV0YUZpZWxkc01hbmFnZXIiLCJwcm9wcyIsInN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsInNlbGVjdCIsImdldEVkaXRlZFBvc3RBdHRyaWJ1dGUiLCJjb21wb25lbnRzR3JvdXAiLCJ1cGRhdGVWYWx1ZXMiLCJiaW5kIiwiaWQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaW5kZXgiLCJ0eXBlIiwic2V0dGluZ3MiLCJkZXBlbmRzT24iLCJjb250YWluZXJEZWZhdWx0IiwibWV0YVNpZGViYXIiLCJjb250cm9scyIsImZpbmQiLCJvYmoiLCJjb250YWluZXJUeXBlIiwiYWN0aW9ucyIsImNvbnRhaW5lciIsImNvbnRlbnRXaWR0aERlZmF1bHQiLCJjb250ZW50V2lkdGgiLCJibG9jS1dpZHRoIiwiTWF0aCIsInJvdW5kIiwiZWRpdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3R5bGUiLCJtYXhXaWR0aCIsInVwZGF0ZUJsb2NrV2lkdGgiLCJtYXAiLCJncm91cCIsInRpdGxlIiwiY29udHJvbCIsImNvbnRyb2xEYXRhIiwicmVuZGVyQ29udHJvbCIsImVkaXRQb3N0IiwiUGx1Z2luU2lkZWJhciIsIlBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0iLCJTaWRlYmFyIiwiY29tcG9zZSIsIndpdGhEaXNwYXRjaCIsIndpdGhTZWxlY3QiLCJDaGVja2JveENvbnRyb2wiLCJDaGVja0JveCIsImRpc3BhdGNoIiwic2V0TWV0YUZpZWxkVmFsdWUiLCJtZXRhIiwibWV0YUZpZWxkVmFsdWUiLCJzdGF0ZVVwZGF0ZSIsImlucHV0X2xhYmVsIiwiUmFkaW9Db250cm9sIiwiUmFkaW9JbWFnZSIsInNldE1ldGFWYWx1ZSIsIm1ldGFWYWx1ZSIsImdldE9wdGlvbnMiLCJjaG9pY2VzIiwiaWNvbnMiLCJjb250cm9sQ2hvaWNlcyIsImtleXMiLCJjaG9pY2UiLCJwdXNoIiwibGFiZWwiLCJvcHRpb25zIiwiUmFuZ2VDb250cm9sIiwiUmFuZ2UiLCJtaW4iLCJtYXgiLCJjb250ZW50IiwicmVnaXN0ZXJQbHVnaW4iLCJwbHVnaW5zIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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RVosU0FDQztBQUFLLE1BQUUsRUFBRTNFLEtBQUssQ0FBQ1UsRUFBZjtBQUFtQixhQUFTLEVBQUM7QUFBN0IsS0FDQyx5QkFBQyxZQUFEO0FBQ0MsU0FBSyxFQUFHVixLQUFLLENBQUN3RCxjQURmO0FBRUMsWUFBUSxFQUFHLGtCQUFDb0IsT0FBRDtBQUFBLGFBQWE1RSxLQUFLLENBQUNzRCxpQkFBTixDQUF3QnNCLE9BQXhCLENBQWI7QUFBQSxLQUZaO0FBR0MsT0FBRyxFQUFFRixHQUhOO0FBSUMsT0FBRyxFQUFFQyxHQUpOO0FBS0MsUUFBSSxFQUFDO0FBTE4sSUFERCxDQUREO0FBV0EsQ0EzQmEsQ0FBZDs7Ozs7Ozs7Ozs7O0FDTEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7O0lBR1FFLGMsR0FBbUJwRixFQUFFLENBQUNxRixPLENBQXRCRCxjO0FBQ1I7QUFFQUEsY0FBYyxDQUFFLGNBQUYsRUFBa0I7QUFDL0JFLFFBQU0sRUFBRWhDLDJEQUFPQTtBQURnQixDQUFsQixDQUFkLEMiLCJmaWxlIjoiLi9idWlsZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIGdsb2JhbCBtZXRhU2lkZWJhciAqL1xuaW1wb3J0IHsgUmFkaW9JbWFnZSB9IGZyb20gJy4vY29udHJvbHMvUmFkaW9JbWFnZSc7XG5pbXBvcnQgeyBDaGVja0JveCB9IGZyb20gJy4vY29udHJvbHMvQ2hlY2tCb3gnO1xuaW1wb3J0IHsgUmFuZ2UgfSBmcm9tICcuL2NvbnRyb2xzL1JhbmdlJztcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFBhbmVsQm9keSB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNsYXNzIE1ldGFGaWVsZHNNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbigge30sIHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgKTtcblx0XHR0aGlzLmNvbXBvbmVudHNHcm91cCA9IFtcblx0XHRcdHtcblx0XHRcdFx0J3RpdGxlJzogX18oICdMYXlvdXQnLCAnbmV2ZScgKSxcblx0XHRcdFx0J2NvbnRyb2xzJzogWyAnbmV2ZV9tZXRhX2NvbnRhaW5lcicsICduZXZlX21ldGFfc2lkZWJhcicgXVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0J3RpdGxlJzogX18oICdDb21wb25lbnRzJywgJ25ldmUnICksXG5cdFx0XHRcdCdjb250cm9scyc6IFsgJ25ldmVfbWV0YV9kaXNhYmxlX2hlYWRlcicsICduZXZlX21ldGFfZGlzYWJsZV90aXRsZScsICduZXZlX21ldGFfZGlzYWJsZV9mZWF0dXJlZF9pbWFnZScsICduZXZlX21ldGFfZGlzYWJsZV9mb290ZXInIF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdCd0aXRsZSc6IF9fKCAnQ29udGVudCB3aWR0aCcsICduZXZlJyApLFxuXHRcdFx0XHQnY29udHJvbHMnOiBbICduZXZlX21ldGFfZW5hYmxlX2NvbnRlbnRfd2lkdGgnLCAnbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnIF1cblx0XHRcdH1cblx0XHRdO1xuXHRcdHRoaXMudXBkYXRlVmFsdWVzID0gdGhpcy51cGRhdGVWYWx1ZXMuYmluZCggdGhpcyApO1xuXHR9XG5cblx0dXBkYXRlVmFsdWVzKGlkLCB2YWx1ZSkge1xuXHRcdGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0c3RhdGVbaWRdID0gdmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSggc3RhdGUgKTtcblx0fVxuXG5cdHJlbmRlckNvbnRyb2woIGRhdGEsIGluZGV4ICkge1xuXHRcdGNvbnN0IHt0eXBlLCBpZCwgc2V0dGluZ3N9ID0gZGF0YTtcblxuXHRcdGlmICggJ3JhZGlvJyA9PT0gdHlwZSApIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxSYWRpb0ltYWdlIHN0YXRlVXBkYXRlPXt0aGlzLnVwZGF0ZVZhbHVlc30ga2V5PXtpbmRleH0gaWQ9e2lkfSBkYXRhPXtzZXR0aW5nc30vPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCAnY2hlY2tib3gnID09PSB0eXBlICkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PENoZWNrQm94IHN0YXRlVXBkYXRlPXt0aGlzLnVwZGF0ZVZhbHVlc30ga2V5PXtpbmRleH0gaWQ9e2lkfSBkYXRhPXtzZXR0aW5nc30vPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKCAncmFuZ2UnID09PSB0eXBlICkge1xuXHRcdFx0Y29uc3QgZGVwZW5kc09uID0gc2V0dGluZ3NbJ2RlcGVuZHNfb24nXTtcblx0XHRcdGlmICggJ29uJyA9PT0gdGhpcy5zdGF0ZVtkZXBlbmRzT25dICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxSYW5nZSBzdGF0ZVVwZGF0ZT17dGhpcy51cGRhdGVWYWx1ZXN9IGtleT17aW5kZXh9IGlkPXtpZH0gZGF0YT17c2V0dGluZ3N9Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1cGRhdGVCbG9ja1dpZHRoKCkge1xuXHRcdGlmICggJ29uJyAhPT0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2VuYWJsZV9jb250ZW50X3dpZHRoJ10gKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGNvbnRhaW5lckRlZmF1bHQgPSBtZXRhU2lkZWJhci5jb250cm9scy5maW5kKG9iaiA9PiAnbmV2ZV9tZXRhX2NvbnRhaW5lcicgPT09IG9iai5pZCApLnNldHRpbmdzLmRlZmF1bHQ7XG5cdFx0bGV0IGNvbnRhaW5lclR5cGUgPSB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGFpbmVyJ10gPyB0aGlzLnN0YXRlWyduZXZlX21ldGFfY29udGFpbmVyJ10gOiBjb250YWluZXJEZWZhdWx0O1xuXHRcdGNvbnRhaW5lclR5cGUgPSAnZGVmYXVsdCcgIT09IGNvbnRhaW5lclR5cGUgPyBjb250YWluZXJUeXBlIDogbWV0YVNpZGViYXIuYWN0aW9uc1snbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXS5jb250YWluZXI7XG5cblx0XHRjb25zdCBjb250ZW50V2lkdGhEZWZhdWx0ID0gbWV0YVNpZGViYXIuY29udHJvbHMuZmluZCggb2JqID0+ICduZXZlX21ldGFfY29udGVudF93aWR0aCcgPT09IG9iai5pZCApLnNldHRpbmdzLmRlZmF1bHQ7XG5cdFx0Y29uc3QgY29udGVudFdpZHRoID0gdGhpcy5zdGF0ZVsnbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXSA/IHRoaXMuc3RhdGVbJ25ldmVfbWV0YV9jb250ZW50X3dpZHRoJ10gOiBjb250ZW50V2lkdGhEZWZhdWx0O1xuXG5cdFx0bGV0IGJsb2NLV2lkdGg7XG5cdFx0aWYgKCAnY29udGFpbmVkJyA9PT0gY29udGFpbmVyVHlwZSApIHtcblx0XHRcdGJsb2NLV2lkdGggPSBNYXRoLnJvdW5kKCAoIGNvbnRlbnRXaWR0aCAvIDEwMCApICogbWV0YVNpZGViYXIuYWN0aW9uc1snbmV2ZV9tZXRhX2NvbnRlbnRfd2lkdGgnXS5lZGl0b3IgKSArICdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJsb2NLV2lkdGggPSBjb250ZW50V2lkdGggKyAnJSc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2s6bm90KFtkYXRhLWFsaWduPVwiZnVsbFwiXSknKTtcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IGJsb2NLV2lkdGg7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdHt0aGlzLnVwZGF0ZUJsb2NrV2lkdGgoKX1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuY29tcG9uZW50c0dyb3VwLm1hcCggKCBncm91cCwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB7IHRpdGxlLCBjb250cm9scyB9ID0gZ3JvdXA7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj1cImFkbWluLXBvc3RcIlxuXHRcdFx0XHRcdFx0XHRcdGludGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xzLm1hcCggKGNvbnRyb2wsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBjb250cm9sRGF0YSA9IG1ldGFTaWRlYmFyLmNvbnRyb2xzLmZpbmQob2JqID0+IG9iai5pZCA9PT0gY29udHJvbCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJDb250cm9sKCBjb250cm9sRGF0YSwgaW5kZXggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCB7IE1ldGFGaWVsZHNNYW5hZ2VyIH07XG4iLCIvKiBnbG9iYWwgbWV0YVNpZGViYXIgKi9cbmNvbnN0IHsgUGx1Z2luU2lkZWJhciwgUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbSB9ID0gd3AuZWRpdFBvc3Q7XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgeyBNZXRhRmllbGRzTWFuYWdlciB9IGZyb20gJy4vTWV0YUZpZWxkc01hbmFnZXInO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbVxuXHRcdFx0XHRpY29uPVwiYWRtaW4tc2V0dGluZ3NcIlxuXHRcdFx0XHR0YXJnZXQ9XCJuZXZlLW1ldGEtc2lkZWJhclwiXG5cdFx0XHQ+XG5cdFx0XHRcdHtfXygnSW5kaXZpZHVhbCBzZXR0aW5ncycsICduZXZlJyl9XG5cdFx0XHQ8L1BsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0+XG5cdFx0XHQ8UGx1Z2luU2lkZWJhclxuXHRcdFx0XHRpY29uPVwiYWRtaW4tc2V0dGluZ3NcIlxuXHRcdFx0XHRuYW1lPVwibmV2ZS1tZXRhLXNpZGViYXJcIlxuXHRcdFx0XHR0aXRsZT17X18oJ0luZGl2aWR1YWwgc2V0dGluZ3MnLCAnbmV2ZScpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TWV0YUZpZWxkc01hbmFnZXIvPlxuXHRcdFx0PC9QbHVnaW5TaWRlYmFyPlxuXHRcdDwvPlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJjb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7IHdpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcbmNvbnN0IHsgQ2hlY2tib3hDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBDaGVja0JveCA9IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2V0TWV0YUZpZWxkVmFsdWU6IChpZCwgdmFsdWUpID0+IHtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3QoIHsgbWV0YTogeyBbaWRdOiB2YWx1ZSB9IH0gKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCB7aWR9KSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1ldGFGaWVsZFZhbHVlOiBzZWxlY3QoJ2NvcmUvZWRpdG9yJykuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpW2lkXVxuXHRcdH07XG5cdH0pXG4pKCh7aWQsIGRhdGEsIG1ldGFGaWVsZFZhbHVlLCBzZXRNZXRhRmllbGRWYWx1ZSwgc3RhdGVVcGRhdGV9KSA9PiB7XG5cdGNvbnN0IHtpbnB1dF9sYWJlbH0gPSBkYXRhO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibmV2ZS1tZXRhLWNvbnRyb2wgbmV2ZS1tZXRhLWNoZWNrYm94XCI+XG5cdFx0XHQ8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdGxhYmVsPXtpbnB1dF9sYWJlbH1cblx0XHRcdFx0Y2hlY2tlZD17ICggJ29uJyA9PT0gbWV0YUZpZWxkVmFsdWUgKSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0c3RhdGVVcGRhdGUoIGlkLCAoIHZhbHVlID8gJ29uJyA6ICdvZmYnICkgKTtcblx0XHRcdFx0XHRzZXRNZXRhRmllbGRWYWx1ZSggaWQsICggdmFsdWUgPyAnb24nIDogJ29mZicgKSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cblx0KTtcbn0pO1xuXG5leHBvcnQge0NoZWNrQm94fTtcbiIsImNvbnN0IHsgUmFkaW9Db250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3Qge2NvbXBvc2V9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHt3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3R9ID0gd3AuZGF0YTtcblxuZXhwb3J0IGNvbnN0IFJhZGlvSW1hZ2UgPSBjb21wb3NlKFxuXHR3aXRoRGlzcGF0Y2goKGRpc3BhdGNoLCBwcm9wcykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZXRNZXRhVmFsdWU6ICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRkaXNwYXRjaCgnY29yZS9lZGl0b3InKS5lZGl0UG9zdCh7bWV0YToge1twcm9wcy5pZF06IHZhbHVlfX0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gKSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCBwcm9wcykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZXRhVmFsdWU6IHNlbGVjdCgnY29yZS9lZGl0b3InKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbcHJvcHMuaWRdIHx8IHByb3BzLmRhdGEuZGVmYXVsdFxuXHRcdH07XG5cdH0gKSApKCBmdW5jdGlvbiggcHJvcHMgKSB7XG5cblx0XHRjb25zdCBnZXRPcHRpb25zID0gZnVuY3Rpb24ocHJvcHMpIHtcblx0XHRcdGNvbnN0IHtjaG9pY2VzLCBpY29uc30gPSBwcm9wcy5kYXRhO1xuXHRcdFx0bGV0IGNvbnRyb2xDaG9pY2VzID0gW107XG5cdFx0XHRPYmplY3Qua2V5cyhjaG9pY2VzKS5tYXAoKGNob2ljZSkgPT4ge1xuXHRcdFx0XHRjb250cm9sQ2hvaWNlcy5wdXNoKCB7bGFiZWw6IDxpbWcgc3JjPXtpY29uc1tjaG9pY2VdfS8+LCB2YWx1ZTogY2hvaWNlfSApO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gY29udHJvbENob2ljZXM7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRPcHRpb25zKHByb3BzKTtcblx0XHRjb25zdCB7IGxhYmVsIH0gPSBwcm9wcy5kYXRhO1xuXHRcdGNvbnN0IHsgaWQsIG1ldGFWYWx1ZSB9ID0gcHJvcHM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtcmFkaW8taW1hZ2VcIj5cblx0XHRcdFx0e2xhYmVsICYmIDxwIGNsYXNzTmFtZT1cInBvc3QtYXR0cmlidXRlcy1sYWJlbC13cmFwcGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwicG9zdC1hdHRyaWJ1dGVzLWxhYmVsXCI+e2xhYmVsfTwvc3Bhbj48L3A+fVxuXHRcdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdFx0c2VsZWN0ZWQ9e21ldGFWYWx1ZX1cblx0XHRcdFx0XHRvcHRpb25zPXtvcHRpb25zfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdHByb3BzLnNldE1ldGFWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRwcm9wcy5zdGF0ZVVwZGF0ZSggaWQsIHZhbHVlICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG4pO1xuIiwiLyogZ2xvYmFsIG1ldGFTaWRlYmFyICovXG5jb25zdCB7Y29tcG9zZX0gPSB3cC5jb21wb3NlO1xuY29uc3Qge3dpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdH0gPSB3cC5kYXRhO1xuY29uc3Qge1JhbmdlQ29udHJvbH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBSYW5nZSA9IGNvbXBvc2UoXG5cdHdpdGhEaXNwYXRjaCgoZGlzcGF0Y2gsIHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldE1ldGFGaWVsZFZhbHVlOiAodmFsdWUpID0+IHtcblx0XHRcdFx0cHJvcHMuc3RhdGVVcGRhdGUocHJvcHMuaWQsIHZhbHVlKTtcblx0XHRcdFx0ZGlzcGF0Y2goJ2NvcmUvZWRpdG9yJykuZWRpdFBvc3Qoe21ldGE6IHtbcHJvcHMuaWRdOiB2YWx1ZX19KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9KSxcblx0d2l0aFNlbGVjdCgoc2VsZWN0LCBwcm9wcykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtZXRhRmllbGRWYWx1ZTogc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVtwcm9wcy5pZF0gfHwgcHJvcHMuZGF0YS5kZWZhdWx0XG5cdFx0fTtcblx0fSlcbikoKHByb3BzKSA9PiB7XG5cdGNvbnN0IHttaW4sIG1heH0gPSBwcm9wcy5kYXRhO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9XCJuZXZlLW1ldGEtY29udHJvbCBuZXZlLW1ldGEtcmFuZ2VcIj5cblx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0dmFsdWU9eyBwcm9wcy5tZXRhRmllbGRWYWx1ZSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHByb3BzLnNldE1ldGFGaWVsZFZhbHVlKGNvbnRlbnQpIH1cblx0XHRcdFx0bWluPXttaW59XG5cdFx0XHRcdG1heD17bWF4fVxuXHRcdFx0XHRzdGVwPVwiMVwiXG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufSk7XG5cbmV4cG9ydCB7UmFuZ2V9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyByZWdpc3RlclBsdWdpbiB9ID0gd3AucGx1Z2lucztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vY29tcG9uZW50cy9TaWRlYmFyJztcblxucmVnaXN0ZXJQbHVnaW4oICdtZXRhLXNpZGViYXInLCB7XG5cdHJlbmRlcjogU2lkZWJhclxufSApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==