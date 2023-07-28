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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  color: rgb(255, 255, 255);\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template: 10% 90% / 20% 80%;\r\n}\r\n\r\n/* ----- HEADER ----- */\r\n\r\n#header {\r\n  grid-row: 1;\r\n  grid-column: 1 / 3;\r\n  background-color: rgb(200, 0, 100);\r\n  display: grid;\r\n  grid-template-columns: 80% 20%;\r\n}\r\n\r\n#website-name {\r\n  font-weight: bolder;\r\n  font-size: 48px;\r\n  padding-left: 20px;\r\n}\r\n\r\n/* ----- SIDEBAR ----- */\r\nnav#sidebar {\r\n  grid-row: 2;\r\n  grid-column: 1;\r\n  background-color: rgb(150, 100, 0);\r\n  padding: 20px;\r\n}\r\n\r\nnav#sidebar ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.page-group {\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n.page-group button {\r\n  border: none;\r\n  background-color: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  color: #333;\r\n  text-align: left;\r\n}\r\n\r\nbutton.selected-page {\r\n  font-weight: bold;\r\n}\r\n\r\nbutton.selected-page::before {\r\n  content: \"// \";\r\n}\r\n\r\nul.projects > li > * > * {\r\n  font-size: 20px;\r\n}\r\n\r\nul.projects > li > * {\r\n  padding-left: 15px;\r\n}\r\n\r\n/* ----- MAIN CONTENT ----- */\r\n#main-content {\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n  background-color: rgb(50, 50, 50);\r\n  padding: 20px;\r\n}\r\n\r\n#page-name {\r\n  font-size: 36px;\r\n}\r\n\r\n/* ----- SHOW TASKS ----- */\r\n.display-tasks {\r\n  display: grid;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  border: 3px solid purple;\r\n}\r\n\r\nthead th:nth-child(1) {\r\n  width: 20%;\r\n}\r\n\r\nthead th:nth-child(2) {\r\n  width: 50%;\r\n}\r\n\r\nthead th:nth-child(3) {\r\n  width: 15%;\r\n}\r\n\r\nthead th:nth-child(4) {\r\n  width: 15%;\r\n}\r\n\r\nth,\r\ntd {\r\n  text-align: left;\r\n  padding: 5px 10px;\r\n}\r\n\r\ntbody > tr > td {\r\n  font-size: 20px;\r\n}\r\n\r\n/* ----- CREATE TODO FORM ----- */\r\nform {\r\n  display: grid;\r\n  width: 80%;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n}\r\n\r\n.switch-field {\r\n  display: flex;\r\n  overflow: hidden;\r\n}\r\n\r\n.switch-field label {\r\n  background-color: #e4e4e4;\r\n  color: rgba(0, 0, 0, 0.6);\r\n  line-height: 1;\r\n  text-align: center;\r\n  padding: 8px 16px;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.switch-field label:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.switch-field input:checked + label {\r\n  background-color: #a5dc86;\r\n  box-shadow: none;\r\n}\r\n\r\n/* Rounded edges for switch-field */\r\n.switch-field label:nth-of-type(1) {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.switch-field label:nth-of-type(3) {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.switch-field input:checked + label:nth-of-type(1) {\r\n  background-color: rgb(0, 200, 0);\r\n}\r\n.switch-field input:checked + label:nth-of-type(2) {\r\n  background-color: rgb(200, 200, 0);\r\n}\r\n.switch-field input:checked + label:nth-of-type(3) {\r\n  background-color: rgb(200, 0, 0);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  background-color: navy;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n  margin-top: 20px;\r\n  grid-column: 1 / 3;\r\n  width: 120px;\r\n  justify-self: center;\r\n}\r\n\r\n/* Project Page */\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitProject: () => (/* binding */ submitProject),\n/* harmony export */   submitTask: () => (/* binding */ submitTask)\n/* harmony export */ });\n/* harmony import */ var _project_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-task */ \"./src/project-task.js\");\n/* harmony import */ var _dom_project_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-project-task */ \"./src/dom-project-task.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\r\n\r\n\r\n\r\nconst submitTask = (e) => {\r\n  const taskAndProject = (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.createTaskFromForm)(e);\r\n  const task = taskAndProject[0];\r\n  const project = taskAndProject[1];\r\n  (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(project, task);\r\n  if (project != _initialize__WEBPACK_IMPORTED_MODULE_2__.defaultProject) (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(_initialize__WEBPACK_IMPORTED_MODULE_2__.defaultProject, task);\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.hideForms)(e);\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)((0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.getCurrentPage)());\r\n};\r\n\r\nconst submitProject = (e) => {\r\n  const newProject = (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.createProjectFromDom)(e);\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.hideForms)(e);\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.addProjectToSidebar)(newProject);\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.addProjectToTaskDropdown)(newProject);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/dom-project-task.js":
/*!*********************************!*\
  !*** ./src/dom-project-task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToSidebar: () => (/* binding */ addProjectToSidebar),\n/* harmony export */   addProjectToTaskDropdown: () => (/* binding */ addProjectToTaskDropdown),\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   getCurrentPage: () => (/* binding */ getCurrentPage),\n/* harmony export */   hideForms: () => (/* binding */ hideForms),\n/* harmony export */   setCurrentPage: () => (/* binding */ setCurrentPage),\n/* harmony export */   showForm: () => (/* binding */ showForm)\n/* harmony export */ });\n/* harmony import */ var _project_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-task */ \"./src/project-task.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\r\n\r\n\r\n\r\nconst createForms = document.querySelectorAll(\"form.create-form\");\r\nlet currentProject = _initialize__WEBPACK_IMPORTED_MODULE_1__.defaultProject;\r\n\r\nconst showForm = (e) => {\r\n  hideForms(e);\r\n  const targetForm = document.querySelector(`form#${e.target.classList}`);\r\n  targetForm.classList.remove(\"hidden\");\r\n};\r\n\r\nconst hideForms = (e) => {\r\n  createForms.forEach((form) => {\r\n    form.classList.add(\"hidden\");\r\n  });\r\n  e.preventDefault();\r\n};\r\n\r\nconst getCurrentPage = () => {\r\n  return currentProject;\r\n};\r\n\r\nconst setCurrentPage = (e) => {\r\n  const allButtons = document.querySelectorAll(\"button.page-link\");\r\n  const pageName = document.querySelector(\"#page-name\");\r\n\r\n  for (const button of allButtons) {\r\n    button.classList.remove(\"selected-page\");\r\n  }\r\n  e.target.classList.add(\"selected-page\");\r\n\r\n  const currentProjectId = e.target.parentNode.id.slice(7);\r\n  // Default pages: All, Today, Week\r\n  currentProject = (0,_initialize__WEBPACK_IMPORTED_MODULE_1__.getProjectById)(currentProjectId);\r\n\r\n  pageName.innerHTML = currentProject.projectName;\r\n  return currentProject;\r\n};\r\n\r\nconst displayAllTasks = (project) => {\r\n  // Remove all rows and re-populate?\r\n  const allTasksTable = document.querySelector(\"#all-tasks > table\");\r\n  const oldtbody = allTasksTable.querySelector(\"tbody\");\r\n  const newtbody = document.createElement(\"tbody\");\r\n\r\n  if (oldtbody) oldtbody.remove();\r\n\r\n  for (const task of project.taskList) {\r\n    const newRow = document.createElement(\"tr\");\r\n\r\n    for (const property of [\r\n      task.title,\r\n      task.description,\r\n      task.dueDate,\r\n      task.priority,\r\n    ]) {\r\n      const newCell = document.createElement(\"td\");\r\n      newCell.innerHTML = property;\r\n      newRow.appendChild(newCell);\r\n    }\r\n\r\n    newtbody.appendChild(newRow);\r\n  }\r\n\r\n  allTasksTable.appendChild(newtbody);\r\n};\r\n\r\nconst addProjectToSidebar = (project) => {\r\n  console.log(project);\r\n  const sidebarProjects = document.querySelector(\"nav#sidebar > ul.projects\");\r\n\r\n  const newProjectElement = document.createElement(\"li\");\r\n  const newSidebarGroup = document.createElement(\"div\");\r\n  newSidebarGroup.classList.add(\"page-group\");\r\n  newSidebarGroup.id = `button-${_project_task__WEBPACK_IMPORTED_MODULE_0__.allProjects.length}`;\r\n  const newProjectLink = document.createElement(\"button\");\r\n  newProjectLink.classList.add(\"page-link\");\r\n  newProjectLink.innerHTML = project.projectName;\r\n\r\n  newProjectLink.addEventListener(\"click\", function (e) {\r\n    setCurrentPage(e);\r\n    displayAllTasks(project);\r\n  });\r\n\r\n  newSidebarGroup.appendChild(newProjectLink);\r\n  newProjectElement.appendChild(newSidebarGroup);\r\n  sidebarProjects.appendChild(newProjectElement);\r\n};\r\n\r\nconst addProjectToTaskDropdown = (project) => {\r\n  const projectsDropdown = document.querySelector(\"#project\");\r\n\r\n  const projectOption = document.createElement(\"option\");\r\n  projectOption.value = _project_task__WEBPACK_IMPORTED_MODULE_0__.allProjects.length - 1;\r\n  projectOption.innerHTML = project.projectName;\r\n\r\n  projectsDropdown.appendChild(projectOption);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom-project-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_project_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-project-task */ \"./src/dom-project-task.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n\r\n\r\n\r\n\r\n\r\n// Main DOM Elements\r\nconst headerDiv = document.querySelector(\"#header\");\r\nconst sidebarDiv = document.querySelector(\"#sidebar\");\r\nconst mainContentDiv = document.querySelector(\"#main-content\");\r\n\r\n// Sidebar\r\n\r\nconst allProjectsButton = document.querySelector(\"#button-all-projects\");\r\nconst todayButton = document.querySelector(\"#button-today\");\r\nconst weekButton = document.querySelector(\"#button-week\");\r\n\r\nconst createTaskFromFormButton = document.querySelector(\"button.create-task\");\r\nconst createTaskFromFormForm = document.querySelector(\"form#create-task\");\r\nconst submitTaskForm = document.querySelector(\r\n  `form#create-task button[type='submit']`\r\n);\r\n\r\nconst createProjectFromDomButton = document.querySelector(\r\n  \"button.create-project\"\r\n);\r\nconst createProjectFromDomForm = document.querySelector(\"form#create-project\");\r\nconst submitProjectForm = document.querySelector(\r\n  `form#create-project button[type='submit']`\r\n);\r\n\r\n// EVENT LISTENERS\r\ncreateTaskFromFormButton.addEventListener(\"click\", _dom_project_task__WEBPACK_IMPORTED_MODULE_1__.showForm);\r\ncreateProjectFromDomButton.addEventListener(\"click\", _dom_project_task__WEBPACK_IMPORTED_MODULE_1__.showForm);\r\n\r\nsubmitTaskForm.addEventListener(\"click\", _controller__WEBPACK_IMPORTED_MODULE_2__.submitTask);\r\nsubmitProjectForm.addEventListener(\"click\", _controller__WEBPACK_IMPORTED_MODULE_2__.submitProject);\r\n\r\n// Display projects\r\nallProjectsButton.addEventListener(\"click\", function (e) {\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)((0,_initialize__WEBPACK_IMPORTED_MODULE_3__.getAllTasks)());\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.setCurrentPage)(e);\r\n});\r\n\r\ntodayButton.addEventListener(\"click\", function (e) {\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)((0,_initialize__WEBPACK_IMPORTED_MODULE_3__.getTodayTasks)());\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.setCurrentPage)(e);\r\n});\r\n\r\nweekButton.addEventListener(\"click\", function (e) {\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)((0,_initialize__WEBPACK_IMPORTED_MODULE_3__.getWeekTasks)());\r\n  (0,_dom_project_task__WEBPACK_IMPORTED_MODULE_1__.setCurrentPage)(e);\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),\n/* harmony export */   getProjectById: () => (/* binding */ getProjectById),\n/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks),\n/* harmony export */   getWeekTasks: () => (/* binding */ getWeekTasks),\n/* harmony export */   todayProject: () => (/* binding */ todayProject),\n/* harmony export */   weekProject: () => (/* binding */ weekProject)\n/* harmony export */ });\n/* harmony import */ var _project_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-task */ \"./src/project-task.js\");\n\r\n\r\n// Projects\r\nconst defaultProject = (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Default\");\r\nconst todayProject = (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Today\");\r\nconst weekProject = (0,_project_task__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Week\");\r\n\r\nconst getProjectById = (id) => {\r\n  if (isNaN(id)) {\r\n    if (id === \"all-projects\") return defaultProject;\r\n    else if (id === \"today\") return todayProject;\r\n    else if (id === \"week\") return weekProject;\r\n  } else {\r\n    return _project_task__WEBPACK_IMPORTED_MODULE_0__.allProjects[parseInt(id) - 1];\r\n  }\r\n};\r\n\r\n// Get sub-set of tasks?\r\nconst getAllTasks = () => {\r\n  return defaultProject;\r\n};\r\n\r\nconst getTodayTasks = () => {\r\n  todayProject.taskList = [];\r\n\r\n  const today = new Date().toLocaleDateString();\r\n\r\n  for (const Task of defaultProject.taskList) {\r\n    let taskDate = new Date(Task.dueDate).toLocaleDateString();\r\n    if (today === taskDate) {\r\n      todayProject.taskList.push(Task);\r\n    }\r\n  }\r\n\r\n  return todayProject;\r\n};\r\n\r\nconst getWeekTasks = () => {\r\n  weekProject.taskList = [];\r\n\r\n  const today = new Date();\r\n  let sevenDaysLater = new Date();\r\n  sevenDaysLater.setDate(today.getDate() + 7);\r\n\r\n  for (const Task of defaultProject.taskList) {\r\n    let taskDate = new Date(Task.dueDate);\r\n    if (today <= taskDate && taskDate <= sevenDaysLater) {\r\n      weekProject.taskList.push(Task);\r\n    }\r\n  }\r\n\r\n  return weekProject;\r\n};\r\n\r\nconst setAllTasks = () => {\r\n  return defaultProject;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/initialize.js?");

/***/ }),

/***/ "./src/project-task.js":
/*!*****************************!*\
  !*** ./src/project-task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToProjectsList: () => (/* binding */ addProjectToProjectsList),\n/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),\n/* harmony export */   allProjects: () => (/* binding */ allProjects),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createProjectFromDom: () => (/* binding */ createProjectFromDom),\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   createTaskFromForm: () => (/* binding */ createTaskFromForm)\n/* harmony export */ });\n// CONSTRUCTORS\r\nconst Task = (title, description, dueDate, priority) => {\r\n  return { title, description, dueDate, priority };\r\n};\r\n\r\nconst Project = (projectName) => {\r\n  const taskList = [];\r\n  return { projectName, taskList };\r\n};\r\n\r\n// FUNCTIONS\r\n// Create a new task\r\nconst createTask = (title, description, dueDate, priority) => {\r\n  const newTask = Task(title, description, dueDate, priority);\r\n  return newTask;\r\n};\r\n\r\nconst createTaskFromForm = (e) => {\r\n  const formdata = new FormData(e.target.parentNode);\r\n\r\n  const newTask = createTask(\r\n    formdata.get(\"title\"),\r\n    formdata.get(\"description\"),\r\n    formdata.get(\"due-date\"),\r\n    formdata.get(\"priority\")\r\n  );\r\n\r\n  return [newTask, allProjects[parseInt(formdata.get(\"project\"))]];\r\n};\r\n\r\n// Create a new project\r\nconst createProject = (projectName) => {\r\n  const newProject = Project(projectName);\r\n  addProjectToProjectsList(newProject);\r\n  return newProject;\r\n};\r\n\r\nconst createProjectFromDom = (e) => {\r\n  const formdata = new FormData(e.target.parentNode);\r\n  const newProject = createProject(formdata.get(\"project-name\"));\r\n  return newProject;\r\n};\r\n\r\n// Add new tasks to a project's task list\r\nconst addTaskToProject = (project, task) => {\r\n  project.taskList.push(task);\r\n};\r\n\r\n// Add new projects to a list containing all projects except [default, today, week]\r\nconst addProjectToProjectsList = (project) => {\r\n  allProjects.push(project);\r\n};\r\n\r\n// INITIALIZE\r\n// List of all projects\r\nconst allProjects = [];\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project-task.js?");

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