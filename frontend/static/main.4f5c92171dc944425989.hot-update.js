/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./components/Application.js":
/*!***********************************!*\
  !*** ./components/Application.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _templates_site_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../templates/site.css */ \"./templates/site.css\");\n/* harmony import */ var _Elements_FilterSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Elements/FilterSelector.js */ \"./components/Elements/FilterSelector.js\");\n/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ \"./node_modules/console-browserify/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = 'pk.eyJ1Ijoia2RlYnJhdXciLCJhIjoiY2p4ZnhyaTUzMDB1eTQxbnVwOG9jbHBwdSJ9.L5RCSfMVV7RYpq1a45E68g';\n\nvar Application = /*#__PURE__*/function (_React$Component) {\n  _inherits(Application, _React$Component);\n\n  var _super = _createSuper(Application);\n\n  function Application(props) {\n    var _this;\n\n    _classCallCheck(this, Application);\n\n    _this = _super.call(this, props); // this.handleSearchRangeChange = this.handleSearchRangeChange.bind(this);\n    // this.handleDateRangehange = this.handleDateRangeChange.bind(this)\n\n    _this.state = {\n      lng: 5.8,\n      lat: 52,\n      zoom: 7,\n      searchRange: 1,\n      dateRange: 30,\n      array: 0,\n      wordSearch: \"\",\n      includePolice: true,\n      includeFire: true,\n      includeAmbu: true\n    };\n    _this.handleDateRangeChange = _this.handleDateRangeChange.bind(_assertThisInitialized(_this));\n    _this.handleSearchRangeChange = _this.handleSearchRangeChange.bind(_assertThisInitialized(_this));\n    _this.handleWordSearchChange = _this.handleWordSearchChange.bind(_assertThisInitialized(_this));\n    _this.handleIncludePoliceChange = _this.handleIncludePoliceChange.bind(_assertThisInitialized(_this));\n    _this.handleIncludeAmbuChange = _this.handleIncludeAmbuChange.bind(_assertThisInitialized(_this));\n    _this.handleIncludeAmbuChange = _this.handleIncludeAmbuChange.bind(_assertThisInitialized(_this));\n    return _this;\n  } //functions to handle changes in filter sliders \n\n\n  _createClass(Application, [{\n    key: \"handleDateRangeChange\",\n    value: function handleDateRangeChange(value) {\n      this.setState({\n        dateRange: value\n      });\n    }\n  }, {\n    key: \"handleSearchRangeChange\",\n    value: function handleSearchRangeChange(value) {\n      this.setState({\n        searchRange: value\n      });\n    }\n  }, {\n    key: \"handleWordSearchChange\",\n    value: function handleWordSearchChange(value) {\n      this.setState({\n        wordSearch: value\n      });\n      console.log(value);\n    }\n  }, {\n    key: \"handleIncludePoliceChange\",\n    value: function handleIncludePoliceChange(value) {\n      this.setState({\n        includePolice: value\n      });\n    }\n  }, {\n    key: \"handleIncludeFireChange\",\n    value: function handleIncludeFireChange(value) {\n      this.setState({\n        includeFire: value\n      });\n    }\n  }, {\n    key: \"handleIncludeAmbuChange\",\n    value: function handleIncludeAmbuChange(value) {\n      this.setState({\n        includeAmbu: value\n      });\n      console.log(this.state.includeAmbu);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n        container: this.mapContainer,\n        style: 'mapbox://styles/kdebrauw/ckaxjbuh50ohl1ioo470azefc',\n        center: [this.state.lng, this.state.lat],\n        zoom: this.state.zoom\n      });\n      map.on('move', function () {\n        _this2.setState({\n          lng: map.getCenter().lng.toFixed(4),\n          lat: map.getCenter().lat.toFixed(4),\n          zoom: map.getZoom().toFixed(2)\n        });\n      });\n      map.on('click', function (event) {\n        var _event$lngLat = event.lngLat,\n            lat = _event$lngLat.lat,\n            lng = _event$lngLat.lng;\n        new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Popup)({\n          color: \"#2A3C47\"\n        }).setLngLat(event.lngLat).setText('What happened here in the last ' + _this2.state.dateRange + ' days?').addTo(map); // localhost: 'http://127.0.0.1:8000/scraper/api/location/'\n        // production: 'https://incident-monitor-nl.herokuapp.com/scraper/api/location/'\n\n        axios__WEBPACK_IMPORTED_MODULE_3__.get('https://incident-monitor-nl.herokuapp.com/scraper/api/location/', {\n          params: {\n            'dateRange': _this2.state.dateRange,\n            'location-list': \"SRID=4326;POINT(\".concat(lng, \" \").concat(lat, \")\"),\n            'searchRange': _this2.state.searchRange,\n            'wordSearch': _this2.state.wordSearch,\n            'includePolice': _this2.state.includePolice,\n            'includeFire': _this2.state.includeFire,\n            'includeAmbu': _this2.state.includeAmbu\n          }\n        }).then(function (results) {\n          _this2.results = results.data;\n          console.log(jsonToGeoJson(results.data)); //update this.state.array with query number results\n\n          _this2.state.array = _this2.results.length; // if layer exists remove old one\n\n          if (map.getSource('locaties')) {\n            map.removeLayer('locaties_waddan');\n            map.removeSource('locaties');\n          }\n\n          ;\n          map.addSource('locaties', {\n            type: 'geojson',\n            data: jsonToGeoJson(results.data)\n          });\n          map.addLayer({\n            'id': 'locaties_waddan',\n            'type': 'circle',\n            'source': 'locaties',\n            'paint': {\n              'circle-radius': 5,\n              'circle-stroke-color': '#2A3C47',\n              'circle-stroke-width': 1,\n              'circle-color': ['match', ['get', 'emergency_service'], 'ambu', '#EFDC23', 'br', '#D13620', 'pol', '#2134BE', 'unknown', '#3bb2d0',\n              /* other */\n              '#3C3C3D']\n            }\n          });\n          map.on('mouseenter', 'locaties_waddan', function (e) {\n            map.getCanvas().style.cursor = 'pointer';\n            var coordinates = e.features[0].geometry.coordinates.slice();\n            var monitorcode = e.features[0].properties.monitorcode;\n            var comment = e.features[0].properties.comment;\n            var emergency_service = e.features[0].properties.emergency_service;\n            var priority_code = e.features[0].properties.priority_code;\n            var pub_date = e.features[0].properties.pub_date; // console.log(coordinates);\n\n            console.log(monitorcode); // Ensure that if the map is zoomed out such that multiple\n            // copies of the feature are visible, the popup appears\n            // over the copy being pointed to.\n            // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n            // coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n            // }\n\n            popup_extra.setLngLat(coordinates).setHTML('<H3> Incident </H3>' + pub_date + '<br> <br> Priority: ' + priority_code + '<br> <br> Message: ' + comment).addTo(map);\n          });\n          map.on('mouseleave', 'locaties_waddan', function () {\n            map.getCanvas().style.cursor = '';\n            popup_extra.remove();\n          });\n        });\n      }); // test \n\n      function jsonToGeoJson(e) {\n        var geojson = {\n          type: \"FeatureCollection\",\n          features: []\n        };\n        var length = Object.keys(e).length;\n\n        for (var i = 0; i < length; i++) {\n          // if (window.CP.shouldStopExecution(1)) {\n          //   break;\n          // }\n          geojson.features.push({\n            \"type\": \"Feature\",\n            \"geometry\": {\n              \"type\": \"Point\",\n              \"coordinates\": [e[i].fields.longitude, e[i].fields.latitude]\n            },\n            \"properties\": {\n              \"monitorcode\": e[i].fields.monitorcode,\n              \"comment\": e[i].fields.comment,\n              \"emergency_service\": e[i].fields.emergency_service,\n              \"priority_code\": e[i].fields.priority_code,\n              \"region\": e[i].fields.region,\n              \"pub_date\": e[i].fields.pub_date\n            }\n          });\n        } //hallo\n        // window.CP.exitedLoop(1); test\n        // var parsed = GeoJSON.parse(file, {Point: ['fields.latitude', 'fields.longitude']})\n\n\n        return geojson;\n      }\n\n      ;\n      var popup_extra = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Popup)({\n        closeButton: false,\n        closeOnClick: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"dataHolder\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"headerStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Incidentradar\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"introbarStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Click on the map to explore recent incidents in an area \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"hline\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"filterStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Elements_FilterSelector_js__WEBPACK_IMPORTED_MODULE_5__.default, {\n        searchRanged: this.state.searchRange,\n        dateRanged: this.state.dateRange,\n        searchRangeChange: this.handleSearchRangeChange,\n        dateRangeChange: this.handleDateRangeChange,\n        wordSearchChange: this.handleWordSearchChange,\n        includePoliceChange: this.handleIncludePoliceChange,\n        includeFireChange: this.handleIncludeFireChange,\n        includeAmbuChange: this.handleIncludeAmbuChange\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"sidebarStyle\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Longitude: \", this.state.lng, \" | Latitude: \", this.state.lat, \" | Zoom: \", this.state.zoom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \" Your click returned \", this.state.array, \" results \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"carthaBar\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Designed and powered by Cartha\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        ref: function ref(el) {\n          return _this3.mapContainer = el;\n        },\n        className: \"mapContainer\"\n      }));\n    }\n  }]);\n\n  return Application;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application); // ReactDOM.render(<Application />, document.getElementById('App'));\n\n//# sourceURL=webpack://frontend/./components/Application.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("a3cdd607ee86ae329c46")
/******/ 	})();
/******/ 	
/******/ }
);