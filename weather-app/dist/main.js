/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  font-size: 24px;\r\n  overflow: hidden;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://giphy-api/./src/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://giphy-api/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://giphy-api/../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://giphy-api/../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://giphy-api/./src/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://giphy-api/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asyncFetchForecast: () => (/* binding */ asyncFetchForecast)\n/* harmony export */ });\nconst WEATHER_API_KEY = \"fae555df8ade413a8a6104143230108\";\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nfunction asyncFetchForecast(targetLocation) {\r\n  // const response = await fetch(\r\n  //   `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${targetLocation}`\r\n  // );\r\n  // const responseJson = await response.json();\r\n  // console.log(responseJson);\r\n\r\n  const responseJson = `{\r\n    \"location\": {\r\n      \"name\": \"Paris\",\r\n      \"region\": \"Ile-de-France\",\r\n      \"country\": \"France\",\r\n      \"lat\": 48.86,\r\n      \"lon\": 2.35,\r\n      \"tz_id\": \"Europe/Paris\",\r\n      \"localtime_epoch\": 1690904881,\r\n      \"localtime\": \"2023-08-01 17:48\"\r\n    },\r\n    \"current\": {\r\n      \"last_updated_epoch\": 1690904700,\r\n      \"last_updated\": \"2023-08-01 17:45\",\r\n      \"temp_c\": 19,\r\n      \"temp_f\": 66.2,\r\n      \"is_day\": 1,\r\n      \"condition\": {\r\n        \"text\": \"Partly cloudy\",\r\n        \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/116.png\",\r\n        \"code\": 1003\r\n      },\r\n      \"wind_mph\": 11.9,\r\n      \"wind_kph\": 19.1,\r\n      \"wind_degree\": 240,\r\n      \"wind_dir\": \"WSW\",\r\n      \"pressure_mb\": 1007,\r\n      \"pressure_in\": 29.74,\r\n      \"precip_mm\": 0.1,\r\n      \"precip_in\": 0,\r\n      \"humidity\": 83,\r\n      \"cloud\": 75,\r\n      \"feelslike_c\": 19,\r\n      \"feelslike_f\": 66.2,\r\n      \"vis_km\": 10,\r\n      \"vis_miles\": 6,\r\n      \"uv\": 5,\r\n      \"gust_mph\": 12.8,\r\n      \"gust_kph\": 20.5\r\n    },\r\n    \"forecast\": {\r\n      \"forecastday\": [\r\n        {\r\n          \"date\": \"2023-08-01\",\r\n          \"date_epoch\": 1690848000,\r\n          \"day\": {\r\n            \"maxtemp_c\": 21.8,\r\n            \"maxtemp_f\": 71.2,\r\n            \"mintemp_c\": 15.2,\r\n            \"mintemp_f\": 59.4,\r\n            \"avgtemp_c\": 18.8,\r\n            \"avgtemp_f\": 65.9,\r\n            \"maxwind_mph\": 16.3,\r\n            \"maxwind_kph\": 26.3,\r\n            \"totalprecip_mm\": 18.8,\r\n            \"totalprecip_in\": 0.74,\r\n            \"totalsnow_cm\": 0,\r\n            \"avgvis_km\": 9,\r\n            \"avgvis_miles\": 5,\r\n            \"avghumidity\": 74,\r\n            \"daily_will_it_rain\": 1,\r\n            \"daily_chance_of_rain\": 98,\r\n            \"daily_will_it_snow\": 0,\r\n            \"daily_chance_of_snow\": 0,\r\n            \"condition\": {\r\n              \"text\": \"Moderate rain\",\r\n              \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/302.png\",\r\n              \"code\": 1189\r\n            },\r\n            \"uv\": 4\r\n          },\r\n          \"astro\": {\r\n            \"sunrise\": \"06:23 AM\",\r\n            \"sunset\": \"09:30 PM\",\r\n            \"moonrise\": \"10:00 PM\",\r\n            \"moonset\": \"05:13 AM\",\r\n            \"moon_phase\": \"Full Moon\",\r\n            \"moon_illumination\": \"99\",\r\n            \"is_moon_up\": 1,\r\n            \"is_sun_up\": 0\r\n          },\r\n          \"hour\": [\r\n            {\r\n              \"time_epoch\": 1690840800,\r\n              \"time\": \"2023-08-01 00:00\",\r\n              \"temp_c\": 18.3,\r\n              \"temp_f\": 64.9,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Light rain shower\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/353.png\",\r\n                \"code\": 1240\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690844400,\r\n              \"time\": \"2023-08-01 01:00\",\r\n              \"temp_c\": 18.1,\r\n              \"temp_f\": 64.6,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Moderate or heavy rain with thunder\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/389.png\",\r\n                \"code\": 1276\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690848000,\r\n              \"time\": \"2023-08-01 02:00\",\r\n              \"temp_c\": 18.1,\r\n              \"temp_f\": 64.6,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Light drizzle\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/266.png\",\r\n                \"code\": 1153\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690851600,\r\n              \"time\": \"2023-08-01 03:00\",\r\n              \"temp_c\": 17.5,\r\n              \"temp_f\": 63.5,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Moderate or heavy rain with thunder\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/389.png\",\r\n                \"code\": 1276\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690855200,\r\n              \"time\": \"2023-08-01 04:00\",\r\n              \"temp_c\": 16.5,\r\n              \"temp_f\": 61.7,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Moderate rain at times\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/299.png\",\r\n                \"code\": 1186\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690858800,\r\n              \"time\": \"2023-08-01 05:00\",\r\n              \"temp_c\": 15.6,\r\n              \"temp_f\": 60.1,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Patchy light drizzle\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/263.png\",\r\n                \"code\": 1150\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690862400,\r\n              \"time\": \"2023-08-01 06:00\",\r\n              \"temp_c\": 15,\r\n              \"temp_f\": 59,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Light rain shower\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/353.png\",\r\n                \"code\": 1240\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690866000,\r\n              \"time\": \"2023-08-01 07:00\",\r\n              \"temp_c\": 15.4,\r\n              \"temp_f\": 59.7,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Light rain\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/296.png\",\r\n                \"code\": 1183\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690869600,\r\n              \"time\": \"2023-08-01 08:00\",\r\n              \"temp_c\": 15.8,\r\n              \"temp_f\": 60.4,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Overcast\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/122.png\",\r\n                \"code\": 1009\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690873200,\r\n              \"time\": \"2023-08-01 09:00\",\r\n              \"temp_c\": 16.3,\r\n              \"temp_f\": 61.3,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Overcast\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/122.png\",\r\n                \"code\": 1009\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690876800,\r\n              \"time\": \"2023-08-01 10:00\",\r\n              \"temp_c\": 17.4,\r\n              \"temp_f\": 63.3,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Overcast\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/122.png\",\r\n                \"code\": 1009\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690880400,\r\n              \"time\": \"2023-08-01 11:00\",\r\n              \"temp_c\": 18.6,\r\n              \"temp_f\": 65.5,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Cloudy\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/119.png\",\r\n                \"code\": 1006\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690884000,\r\n              \"time\": \"2023-08-01 12:00\",\r\n              \"temp_c\": 19.8,\r\n              \"temp_f\": 67.6,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Overcast\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/122.png\",\r\n                \"code\": 1009\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690887600,\r\n              \"time\": \"2023-08-01 13:00\",\r\n              \"temp_c\": 21.1,\r\n              \"temp_f\": 70,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Patchy rain possible\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/176.png\",\r\n                \"code\": 1063\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690891200,\r\n              \"time\": \"2023-08-01 14:00\",\r\n              \"temp_c\": 20.7,\r\n              \"temp_f\": 69.3,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Patchy rain possible\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/176.png\",\r\n                \"code\": 1063\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690894800,\r\n              \"time\": \"2023-08-01 15:00\",\r\n              \"temp_c\": 21.9,\r\n              \"temp_f\": 71.4,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Light rain shower\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/353.png\",\r\n                \"code\": 1240\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690898400,\r\n              \"time\": \"2023-08-01 16:00\",\r\n              \"temp_c\": 21.7,\r\n              \"temp_f\": 71.1,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Light rain shower\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/353.png\",\r\n                \"code\": 1240\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690902000,\r\n              \"time\": \"2023-08-01 17:00\",\r\n              \"temp_c\": 21.9,\r\n              \"temp_f\": 71.4,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Patchy rain possible\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/176.png\",\r\n                \"code\": 1063\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690905600,\r\n              \"time\": \"2023-08-01 18:00\",\r\n              \"temp_c\": 21.7,\r\n              \"temp_f\": 71.1,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Patchy rain possible\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/176.png\",\r\n                \"code\": 1063\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690909200,\r\n              \"time\": \"2023-08-01 19:00\",\r\n              \"temp_c\": 21.4,\r\n              \"temp_f\": 70.5,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Light rain shower\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/353.png\",\r\n                \"code\": 1240\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690912800,\r\n              \"time\": \"2023-08-01 20:00\",\r\n              \"temp_c\": 19.8,\r\n              \"temp_f\": 67.6,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Partly cloudy\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/116.png\",\r\n                \"code\": 1003\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690916400,\r\n              \"time\": \"2023-08-01 21:00\",\r\n              \"temp_c\": 19.4,\r\n              \"temp_f\": 66.9,\r\n              \"is_day\": 1,\r\n              \"condition\": {\r\n                \"text\": \"Partly cloudy\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/day/116.png\",\r\n                \"code\": 1003\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690920000,\r\n              \"time\": \"2023-08-01 22:00\",\r\n              \"temp_c\": 19.4,\r\n              \"temp_f\": 66.9,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Partly cloudy\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/116.png\",\r\n                \"code\": 1003\r\n              }\r\n            },\r\n            {\r\n              \"time_epoch\": 1690923600,\r\n              \"time\": \"2023-08-01 23:00\",\r\n              \"temp_c\": 18.6,\r\n              \"temp_f\": 65.5,\r\n              \"is_day\": 0,\r\n              \"condition\": {\r\n                \"text\": \"Cloudy\",\r\n                \"icon\": \"//cdn.weatherapi.com/weather/64x64/night/119.png\",\r\n                \"code\": 1006\r\n              }\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  }\r\n`;\r\n\r\n  console.log(JSON.parse(responseJson));\r\n\r\n  let { location, current, forecast } = JSON.parse(responseJson);\r\n\r\n  console.log(current);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://giphy-api/./src/fetch_weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n\r\n\r\n\r\n\r\nconst clickBtn = document.querySelector(\"button.temp\");\r\n\r\nclickBtn.addEventListener(\"click\", function () {\r\n  (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_1__.asyncFetchForecast)(\"48.8567,2.3508\");\r\n});\r\n\n\n//# sourceURL=webpack://giphy-api/./src/index.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd2d56efbb2bb325c9d9.jpg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;