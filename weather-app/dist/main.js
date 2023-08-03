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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  font-size: 24px;\r\n  overflow: hidden;\r\n}\r\n\r\nhtml,\r\nbody,\r\n.content {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr 2fr;\r\n  grid-template-rows: 3fr 2fr;\r\n}\r\n\r\n/* GENERAL */\r\n.fahrenheit {\r\n  display: none;\r\n}\r\n\r\n/* MAIN CONTAINERS */\r\n\r\n/* TOP LEFT */\r\n.top-left {\r\n  margin: 40px;\r\n  display: grid;\r\n  grid-template-rows: 2fr 1fr 1fr 1fr 2fr 1fr;\r\n}\r\n\r\n.toggle-temperature {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n/* TOP MIDDLE */\r\n.top-middle {\r\n  margin: 40px;\r\n}\r\n\r\nbutton.refresh {\r\n  display: none;\r\n}\r\n\r\n/* TOP RIGHT */\r\n.top-right {\r\n  margin: 40px;\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 1fr);\r\n}\r\n\r\n.top-right > .container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n}\r\n\r\n.top-right > .container > .icon-container {\r\n  grid-column: 1;\r\n  grid-row: 1/3;\r\n  display: grid;\r\n  justify-items: end;\r\n  align-items: center;\r\n}\r\n\r\nimg.icon {\r\n  height: 80%;\r\n  width: 80%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.top-right > .container > .title {\r\n  font-size: 16px;\r\n}\r\n\r\n.top-right > .container > .value {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* BOTTOM */\r\n.bottom {\r\n  grid-column: 1/4;\r\n  grid-row: 2;\r\n  margin: 40px;\r\n  display: grid;\r\n  grid-template-rows: 1fr 5fr;\r\n}\r\n\r\n.slider {\r\n  overflow-x: scroll;\r\n}\r\n\r\n.slider.daily {\r\n  display: grid;\r\n  grid-template-columns: repeat(25, 180px);\r\n}\r\n\r\n.hour-container {\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 80px);\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.slider.weekly {\r\n  display: none;\r\n  grid-template-columns: repeat(8, 180px);\r\n}\r\n\r\n.weekday-container {\r\n  display: grid;\r\n  grid-template-rows: repeat(4, 60px);\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.minTempC,\r\n.minTempF {\r\n  font-size: 12px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://giphy-api/./src/style.css?../node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ \"./src/fetch_weather.js\");\n/* harmony import */ var _parse_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse_weather */ \"./src/parse_weather.js\");\n\r\n\r\n\r\nasync function getWeather() {\r\n  let { location, current, forecast } = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.asyncFetchForecast)(\"Singapore\");\r\n\r\n  const locationData = (0,_parse_weather__WEBPACK_IMPORTED_MODULE_1__.parseLocation)(location);\r\n  const currentData = (0,_parse_weather__WEBPACK_IMPORTED_MODULE_1__.parseCurrent)(current);\r\n  const forecastData = (0,_parse_weather__WEBPACK_IMPORTED_MODULE_1__.parseForecast)(forecast);\r\n\r\n  return { locationData, currentData, forecastData };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://giphy-api/./src/controller.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToggleSliders: () => (/* binding */ addToggleSliders),\n/* harmony export */   addToggleTemperature: () => (/* binding */ addToggleTemperature),\n/* harmony export */   loadIcons: () => (/* binding */ loadIcons),\n/* harmony export */   loadImages: () => (/* binding */ loadImages),\n/* harmony export */   populateDailySlider: () => (/* binding */ populateDailySlider),\n/* harmony export */   populateTopLeft: () => (/* binding */ populateTopLeft),\n/* harmony export */   populateTopRight: () => (/* binding */ populateTopRight),\n/* harmony export */   populateWeeklySlider: () => (/* binding */ populateWeeklySlider)\n/* harmony export */ });\n/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\");\n/* harmony import */ var _images_feels_like_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/feels-like-icon.svg */ \"./src/images/feels-like-icon.svg\");\n/* harmony import */ var _images_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/humidity-icon.svg */ \"./src/images/humidity-icon.svg\");\n/* harmony import */ var _images_rain_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/rain-icon.svg */ \"./src/images/rain-icon.svg\");\n/* harmony import */ var _images_wind_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/wind-icon.svg */ \"./src/images/wind-icon.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadImages() {\r\n  const background = document.querySelector(\"img.background\");\r\n  background.src = _images_background_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n}\r\n\r\nfunction loadIcons() {\r\n  const iconContainers = document.querySelectorAll(\".icon-container\");\r\n  const iconList = [_images_feels_like_icon_svg__WEBPACK_IMPORTED_MODULE_1__, _images_humidity_icon_svg__WEBPACK_IMPORTED_MODULE_2__, _images_rain_icon_svg__WEBPACK_IMPORTED_MODULE_3__, _images_wind_icon_svg__WEBPACK_IMPORTED_MODULE_4__];\r\n\r\n  iconContainers.forEach((container, index) => {\r\n    const img = container.querySelector(\"img\");\r\n    img.src = iconList[index];\r\n  });\r\n}\r\n\r\nfunction addConditionIcon(parentElement, conditionData) {\r\n  const conditionImage = parentElement.querySelector(`img.condition-icon`);\r\n  conditionImage.alt = conditionData.conditionText;\r\n  conditionImage.src = conditionData.conditionIcon;\r\n\r\n  return conditionImage;\r\n}\r\n\r\nfunction populateTopLeft(data) {\r\n  const topLeftDiv = document.querySelector(\".top-left\");\r\n\r\n  const conditionTextDiv = topLeftDiv.querySelector(\".condition\");\r\n  const locationDiv = topLeftDiv.querySelector(\".location\");\r\n  const dateDiv = topLeftDiv.querySelector(\".date\");\r\n  // const timeDiv = topLeftDiv.querySelector(\".time\");\r\n  const celsiusDiv = topLeftDiv.querySelector(\".celsius\");\r\n  const fahrenheitDiv = topLeftDiv.querySelector(\".fahrenheit\");\r\n\r\n  conditionTextDiv.textContent = data.currentData.conditionText;\r\n  locationDiv.textContent = data.locationData.place;\r\n  dateDiv.textContent = new Date();\r\n  celsiusDiv.textContent = data.currentData.tempC;\r\n  fahrenheitDiv.textContent = data.currentData.tempF;\r\n\r\n  addConditionIcon(topLeftDiv, data.currentData);\r\n}\r\n\r\nfunction populateTopRight(data) {\r\n  console.log(data);\r\n  const topRightDiv = document.querySelector(\".top-right\");\r\n  const feelsLikeCelsiusDiv = topRightDiv.querySelector(\r\n    \".feels-like > .celsius\"\r\n  );\r\n  const feelsLikeFahrenheitDiv = topRightDiv.querySelector(\r\n    \".feels-like > .fahrenheit\"\r\n  );\r\n  const humidityDiv = topRightDiv.querySelector(\".humidity > .value\");\r\n  const rainChanceDiv = topRightDiv.querySelector(\".chance-of-rain > .value\");\r\n  const windSpeedDiv = topRightDiv.querySelector(\".wind-speed > .value\");\r\n\r\n  feelsLikeCelsiusDiv.textContent = data.currentData.feelsLikeC;\r\n  feelsLikeFahrenheitDiv.textContent = data.currentData.feelsLikeF;\r\n  humidityDiv.textContent = data.currentData.humidity;\r\n  rainChanceDiv.textContent = data.forecastData.weekData[0].rainChance;\r\n  windSpeedDiv.textContent = data.currentData.windSpeed;\r\n}\r\n\r\nfunction populateDailySlider(dayData) {\r\n  const imageSlider = document.querySelector(\".slider.daily\");\r\n\r\n  for (const [index, hour] of dayData.entries()) {\r\n    const hourContainer = imageSlider.querySelector(\r\n      `#hour-container-${index + 1}`\r\n    );\r\n\r\n    // hourContainer.textContent = JSON.stringify(hour);\r\n\r\n    for (const attribute in hour) {\r\n      const div = hourContainer.querySelector(`.${attribute}`);\r\n      if (div) {\r\n        div.textContent = hour[attribute];\r\n      }\r\n    }\r\n\r\n    addConditionIcon(hourContainer, hour);\r\n  }\r\n}\r\n\r\nfunction populateWeeklySlider(weekData) {\r\n  const imageSlider = document.querySelector(\".slider.weekly\");\r\n\r\n  for (const [index, day] of weekData.entries()) {\r\n    const weekdayContainer = imageSlider.querySelector(\r\n      `#weekday-container-${index + 1}`\r\n    );\r\n\r\n    for (const attribute in day) {\r\n      const div = weekdayContainer.querySelector(`.${attribute}`);\r\n      if (div) {\r\n        div.textContent = day[attribute];\r\n      }\r\n    }\r\n\r\n    addConditionIcon(weekdayContainer, day);\r\n  }\r\n}\r\n\r\nfunction addToggleTemperature() {\r\n  const toggleCelsius = document.querySelector(\"button.toggle-celsius\");\r\n  const toggleFahrenheit = document.querySelector(\"button.toggle-fahrenheit\");\r\n\r\n  const celsiusDivs = document.querySelectorAll(\".celsius\");\r\n  const fahrenheitDivs = document.querySelectorAll(\".fahrenheit\");\r\n\r\n  toggleCelsius.addEventListener(\"click\", function () {\r\n    for (const div of celsiusDivs) {\r\n      div.style.display = \"block\";\r\n    }\r\n\r\n    for (const div of fahrenheitDivs) {\r\n      div.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  toggleFahrenheit.addEventListener(\"click\", function () {\r\n    for (const div of celsiusDivs) {\r\n      div.style.display = \"none\";\r\n    }\r\n\r\n    for (const div of fahrenheitDivs) {\r\n      div.style.display = \"block\";\r\n    }\r\n  });\r\n}\r\n\r\nfunction addToggleSliders() {\r\n  const toggleSliderDaily = document.querySelector(\"button.daily\");\r\n  const toggleSliderWeekly = document.querySelector(\"button.weekly\");\r\n\r\n  const sliderDaily = document.querySelector(\".slider.daily\");\r\n  const sliderWeekly = document.querySelector(\".slider.weekly\");\r\n\r\n  toggleSliderDaily.addEventListener(\"click\", function () {\r\n    sliderDaily.style.display = \"grid\";\r\n    sliderWeekly.style.display = \"none\";\r\n  });\r\n\r\n  toggleSliderWeekly.addEventListener(\"click\", function () {\r\n    sliderDaily.style.display = \"none\";\r\n    sliderWeekly.style.display = \"grid\";\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://giphy-api/./src/dom.js?");

/***/ }),

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asyncFetchForecast: () => (/* binding */ asyncFetchForecast)\n/* harmony export */ });\nconst WEATHER_API_KEY = \"fae555df8ade413a8a6104143230108\";\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nasync function asyncFetchForecast(targetLocation) {\r\n  const response = await fetch(\r\n    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${targetLocation}&days=8`\r\n  );\r\n\r\n  let responseJson = await response.json();\r\n\r\n  return responseJson;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://giphy-api/./src/fetch_weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst refreshButton = document.querySelector(\"button.refresh\");\r\nrefreshButton.addEventListener(\"click\", loadEverythingElse);\r\n\r\nfunction loadOnce() {\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadIcons)();\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addToggleTemperature)();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addToggleSliders)();\r\n}\r\n\r\nasync function loadEverythingElse() {\r\n  const data = await (0,_controller__WEBPACK_IMPORTED_MODULE_2__.getWeather)(\"Singapore\");\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateTopLeft)(data);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateTopRight)(data);\r\n\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateDailySlider)(data.forecastData.dayData);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateWeeklySlider)(data.forecastData.weekData);\r\n}\r\n\r\nloadOnce();\r\nawait loadEverythingElse();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://giphy-api/./src/index.js?");

/***/ }),

/***/ "./src/parse_weather.js":
/*!******************************!*\
  !*** ./src/parse_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseCurrent: () => (/* binding */ parseCurrent),\n/* harmony export */   parseForecast: () => (/* binding */ parseForecast),\n/* harmony export */   parseLocation: () => (/* binding */ parseLocation)\n/* harmony export */ });\nfunction parseLocation(location) {\r\n  const place = location.name;\r\n  const date = new Date(location.localtime);\r\n  return { place, date };\r\n}\r\n\r\nfunction parseCurrent(current) {\r\n  const [\r\n    tempC,\r\n    tempF,\r\n    feelsLikeC,\r\n    feelsLikeF,\r\n    humidity,\r\n    conditionText,\r\n    conditionIcon,\r\n    windSpeed,\r\n  ] = [\r\n    current.temp_c + \" °C\",\r\n    current.temp_f + \" °F\",\r\n    current.feelslike_c + \" °C\",\r\n    current.feelslike_f + \" °F\",\r\n    current.humidity + \" %\",\r\n    current.condition.text,\r\n    \"https:\" + current.condition.icon,\r\n    current.wind_kph + \" km/h\",\r\n  ];\r\n\r\n  return {\r\n    tempC,\r\n    tempF,\r\n    feelsLikeC,\r\n    feelsLikeF,\r\n    humidity,\r\n    conditionText,\r\n    conditionIcon,\r\n    windSpeed,\r\n  };\r\n}\r\n\r\nfunction parseForecast(forecast) {\r\n  // Need daily for 8 days\r\n  // Need hourly for 24 hours (1 day)\r\n  const todayDate = new Date();\r\n  const dailyList = [];\r\n  const hourlyList = [];\r\n\r\n  for (const day of forecast.forecastday) {\r\n    dailyList.push(day);\r\n\r\n    for (const hour of day.hour) {\r\n      const hourWithin24Hours = within24Hours(\r\n        todayDate.getTime(),\r\n        hour.time_epoch * 1000\r\n      );\r\n      if (hourWithin24Hours) {\r\n        hourlyList.push(hour);\r\n      }\r\n    }\r\n  }\r\n\r\n  // console.log(dailyList);\r\n  // console.log(hourlyList);\r\n\r\n  const weekData = parseDays(dailyList);\r\n  const dayData = parseHours(hourlyList);\r\n\r\n  return { weekData, dayData };\r\n}\r\n\r\nfunction within24Hours(currentEpoch, targetEpoch) {\r\n  const timeDifference = targetEpoch - currentEpoch;\r\n  if (-3600000 <= timeDifference && timeDifference <= 86400000) return true;\r\n  else return false;\r\n}\r\n\r\nfunction parseDays(dayList) {\r\n  const weekdays = [\r\n    \"Sunday\",\r\n    \"Monday\",\r\n    \"Tuesday\",\r\n    \"Wednesday\",\r\n    \"Thursday\",\r\n    \"Friday\",\r\n    \"Saturday\",\r\n  ];\r\n  const weekData = [];\r\n\r\n  for (const day of dayList) {\r\n    const dateTime = new Date(day.date);\r\n    const weekday = weekdays[dateTime.getDay()];\r\n    const maxTempC = day.day.maxtemp_c + \" °C\";\r\n    const minTempC = day.day.mintemp_c + \" °C\";\r\n    const maxTempF = day.day.maxtemp_f + \" °F\";\r\n    const minTempF = day.day.mintemp_f + \" °F\";\r\n    const conditionText = day.day.condition.text;\r\n    const conditionIcon = \"https:\" + day.day.condition.icon;\r\n    const rainChance = day.day.daily_chance_of_rain + \" %\";\r\n    weekData.push({\r\n      weekday,\r\n      maxTempC,\r\n      minTempC,\r\n      maxTempF,\r\n      minTempF,\r\n      conditionText,\r\n      conditionIcon,\r\n      rainChance,\r\n    });\r\n  }\r\n\r\n  return weekData;\r\n}\r\n\r\nfunction parseHours(hourList) {\r\n  const dayData = [];\r\n\r\n  for (const hour of hourList) {\r\n    const dateTime = new Date(hour.time);\r\n    const timeHour = dateTime.getHours();\r\n    const time = `${timeHour % 12 || 12} ${timeHour < 12 ? \"am\" : \"pm\"}`;\r\n    const tempC = hour.temp_c + \" °C\";\r\n    const tempF = hour.temp_f + \" °F\";\r\n    const conditionText = hour.condition.text;\r\n    const conditionIcon = \"https:\" + hour.condition.icon;\r\n    dayData.push({ time, tempC, tempF, conditionText, conditionIcon });\r\n  }\r\n\r\n  return dayData;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://giphy-api/./src/parse_weather.js?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd2d56efbb2bb325c9d9.jpg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/feels-like-icon.svg":
/*!****************************************!*\
  !*** ./src/images/feels-like-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"405e6f076bd4be317761.svg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/feels-like-icon.svg?");

/***/ }),

/***/ "./src/images/humidity-icon.svg":
/*!**************************************!*\
  !*** ./src/images/humidity-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"303319376ae0250ca39f.svg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/humidity-icon.svg?");

/***/ }),

/***/ "./src/images/rain-icon.svg":
/*!**********************************!*\
  !*** ./src/images/rain-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0bd5fa03ba8d0574a282.svg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/rain-icon.svg?");

/***/ }),

/***/ "./src/images/wind-icon.svg":
/*!**********************************!*\
  !*** ./src/images/wind-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0866ba7edc80af545c77.svg\";\n\n//# sourceURL=webpack://giphy-api/./src/images/wind-icon.svg?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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