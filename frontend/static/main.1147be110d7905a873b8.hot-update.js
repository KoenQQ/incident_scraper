/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./components/AppRoute.js":
/*!********************************!*\
  !*** ./components/AppRoute.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _components_Application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Application.js */ \"./components/Application.js\");\n/* harmony import */ var _components_Login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login.js */ \"./components/Login.js\");\n/* harmony import */ var _components_ErrorMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorMessage.js */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrivateRoute */ \"./components/PrivateRoute.js\");\n/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ \"./node_modules/console-browserify/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Dit wordt de automatische routing file die kijkt of de gebruiker \n// naar home (index.js) of login (login.js) gaat \n// \n\n\n\n\n\n // const isAuthenticated = (e) => {\n// }\n\nvar AppRoute = /*#__PURE__*/function (_Component) {\n  _inherits(AppRoute, _Component);\n\n  var _super = _createSuper(AppRoute);\n\n  function AppRoute(props) {\n    var _this;\n\n    _classCallCheck(this, AppRoute);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"handle_signup\", function (e, data) {\n      e.preventDefault();\n      fetch('http://localhost:8000/scraper/api/UserList/', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        localStorage.setItem('token', json.token);\n\n        _this.setState({\n          logged_in: true,\n          displayed_form: '',\n          username: json.username\n        });\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handle_logout\", function () {\n      localStorage.removeItem('token');\n\n      _this.setState({\n        logged_in: false,\n        username: ''\n      });\n    });\n\n    _this.state = {\n      displayed_form: '',\n      logged_in: localStorage.getItem('token') ? true : false,\n      username: ''\n    };\n    _this.handleLoginChange = _this.handleLoginChange.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(AppRoute, [{\n    key: \"ComponentDidMount\",\n    value: function ComponentDidMount() {\n      var _this2 = this;\n\n      //if logged in, change username in state\n      if (this.state.logged_in) {\n        fetch('http://localhost:8000/scraper/api/current_user/', {\n          //wat is de API uitgang hiervoor?\n          headers: {\n            Authorization: \"JWT \".concat(localStorage.getItem('token'))\n          }\n        }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          _this2.setState({\n            username: json.username\n          });\n\n          console.log('hallo');\n        });\n      }\n    } // signup not yet implemented\n\n  }, {\n    key: \"handleLoginChange\",\n    value: function handleLoginChange(value) {\n      this.setState({\n        logged_in: value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"navbarStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, null, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        to: \"/login\"\n      }, \"Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        onClick: this.handle_logout\n      }, \"Logout\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__.default, {\n        authed: this.state.logged_in,\n        exact: true,\n        path: \"/\",\n        component: _components_Application_js__WEBPACK_IMPORTED_MODULE_1__.default\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n        handleLoginChange: this.handleLoginChange,\n        path: \"/login\",\n        component: _components_Login_js__WEBPACK_IMPORTED_MODULE_2__.default\n      })));\n    }\n  }]);\n\n  return AppRoute;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoute);\n\n//# sourceURL=webpack://frontend/./components/AppRoute.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("258f6bd7dfc979dbd9ad")
/******/ 	})();
/******/ 	
/******/ }
);