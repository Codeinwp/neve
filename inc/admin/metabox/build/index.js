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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/components/MetaFieldsManager.js":
/*!*********************************************!*\
  !*** ./src/components/MetaFieldsManager.js ***!
  \*********************************************/
/*! exports provided: MetaFieldsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaFieldsManager", function() { return MetaFieldsManager; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_RadioImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/RadioImage */ "./src/components/controls/RadioImage.js");
/* harmony import */ var _controls_CheckBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/CheckBox */ "./src/components/controls/CheckBox.js");
/* harmony import */ var _controls_Range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/Range */ "./src/components/controls/Range.js");


/* global metaSidebar */




var __ = wp.i18n.__;
var componentsGroup = [{
  'title': __('Layout', 'neve'),
  'controls': ['neve_meta_container', 'neve_meta_sidebar']
}, {
  'title': __('Components', 'neve'),
  'controls': ['neve_meta_disable_header', 'neve_meta_disable_title', 'neve_meta_disable_featured_image', 'neve_meta_disable_footer']
}, {
  'title': __('Content width', 'neve'),
  'controls': ['neve_meta_enable_content_width', 'neve_meta_content_width']
}];

var renderControl = function renderControl(data, index) {
  if (data.type === 'radio') {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_RadioImage__WEBPACK_IMPORTED_MODULE_2__["RadioImage"], {
      key: index,
      id: data.id,
      data: data.settings
    });
  }

  if (data.type === 'checkbox') {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_CheckBox__WEBPACK_IMPORTED_MODULE_3__["CheckBox"], {
      key: index,
      id: data.id,
      data: data.settings
    });
  }

  if (data.type === 'range') {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_Range__WEBPACK_IMPORTED_MODULE_4__["Range"], {
      key: index,
      id: data.id,
      data: data.settings
    });
  }
};

var MetaFieldsManager = function MetaFieldsManager() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, componentsGroup.map(function (group, index) {
    var title = group.title,
        controls = group.controls;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      key: index,
      title: title,
      icon: "admin-post",
      intialOpen: true
    }, controls.map(function (control, index) {
      var controlData = metaSidebar.controls.find(function (obj) {
        return obj.id === control;
      });
      return renderControl(controlData, index);
    }));
  }));
};



/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MetaFieldsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetaFieldsManager */ "./src/components/MetaFieldsManager.js");


/* global metaSidebar */




var Sidebar = function Sidebar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__["PluginSidebarMoreMenuItem"], {
    icon: "admin-settings",
    target: "neve-meta-sidebar"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Individual settings', 'neve')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__["PluginSidebar"], {
    icon: "admin-settings",
    name: "neve-meta-sidebar",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Individual settings', 'neve')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_MetaFieldsManager__WEBPACK_IMPORTED_MODULE_3__["MetaFieldsManager"], null)));
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





var CheckBox = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value, dependent) {
      if (dependent) {
        var control = document.getElementById(dependent);

        if (value === true) {
          control.style.display = "block";
        } else {
          control.style.display = "none";
        }
      }

      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.id, value)
      });
    }
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
  };
}))(function (props) {
  var _props$data = props.data,
      input_label = _props$data.input_label,
      dependent = _props$data.dependent;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "neve-meta-control neve-meta-checkbox"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["CheckboxControl"], {
    label: input_label,
    checked: props.metaFieldValue,
    onChange: function onChange(content) {
      return props.setMetaFieldValue(content, dependent);
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var RadioControl = wp.components.RadioControl;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;

var getOptions = function getOptions(props) {
  var _props$data = props.data,
      choices = _props$data.choices,
      icons = _props$data.icons;
  var controlChoices = [];
  Object.keys(choices).map(function (choice) {
    controlChoices.push({
      label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: icons[choice]
      }),
      value: choice
    });
  });
  return controlChoices;
};

var RadioImage = compose(withDispatch(function (dispatch, props) {
  return {
    setMetaValue: function setMetaValue(value) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.id, value)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
  };
}))(function (props) {
  var label = props.data.label;
  var initial = props.data['default'];
  var options = getOptions(props);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "neve-meta-control neve-meta-radio-image"
  }, label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "post-attributes-label-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "post-attributes-label"
  }, label)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RadioControl, {
    selected: props.metaValue || initial,
    options: options,
    onChange: function onChange(value) {
      return props.setMetaValue(value);
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var RangeControl = wp.components.RangeControl;
var Range = compose(withDispatch(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value, controllingClass) {
      if (controllingClass) {
        var elements = document.querySelectorAll(controllingClass);
        elements.forEach(function (element) {
          element.style.maxWidth = value + '%';
        });
      }

      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.id, value)
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')[props.id]
  };
}))(function (props) {
  var _props$data = props.data,
      min = _props$data.min,
      max = _props$data.max,
      depends_on = _props$data.depends_on;
  var initial = props.data['default'];
  var style = {};

  if (depends_on) {
    style = wp.data.select('core/editor').getEditedPostAttribute('meta')[depends_on] ? {
      display: "block"
    } : {
      display: "none"
    };
  }

  var controllingClass = props.data['it_controls'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: style,
    id: props.id,
    className: "neve-meta-control neve-meta-range"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    value: props.metaFieldValue,
    initialPosition: initial,
    onChange: function onChange(content) {
      return props.setMetaFieldValue(content, controllingClass);
    },
    min: min,
    max: max,
    step: "1"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/**
 * Internal dependencies
 */


Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('meta-sidebar', {
  render: _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!******************************************!*\
  !*** external {"this":["wp","plugins"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map