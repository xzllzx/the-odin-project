/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**********************************************************!*\
  !*** ./images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Rein and bridgette.jpg\": \"./images/Rein and bridgette.jpg\",\n\t\"./Roselia.png\": \"./images/Roselia.png\",\n\t\"./adrian-marc-amarc-cyberoom-v3.jpg\": \"./images/adrian-marc-amarc-cyberoom-v3.jpg\",\n\t\"./aenigma___jonada_has_you_by_w_e_z-d9413cr.jpg\": \"./images/aenigma___jonada_has_you_by_w_e_z-d9413cr.jpg\",\n\t\"./bones.png\": \"./images/bones.png\",\n\t\"./c_o_t__quiet_town_by_wang2dog-d7h60ov.jpg\": \"./images/c_o_t__quiet_town_by_wang2dog-d7h60ov.jpg\",\n\t\"./caiyuanba bridge.jpg\": \"./images/caiyuanba bridge.jpg\",\n\t\"./cyberpunk.jpg\": \"./images/cyberpunk.jpg\",\n\t\"./cyberpunk_city_by_artursadlos-dbb7hcs.jpg\": \"./images/cyberpunk_city_by_artursadlos-dbb7hcs.jpg\",\n\t\"./donglu-yu-cyberpunk-rooftop-view-small.jpg\": \"./images/donglu-yu-cyberpunk-rooftop-view-small.jpg\",\n\t\"./eddie-del-rio-underground-final-b.jpg\": \"./images/eddie-del-rio-underground-final-b.jpg\",\n\t\"./egor-blintsov-rox-to-eden.jpg\": \"./images/egor-blintsov-rox-to-eden.jpg\",\n\t\"./future_city_by_dongkyuni-d5tidbu.jpg\": \"./images/future_city_by_dongkyuni-d5tidbu.jpg\",\n\t\"./jessica-woulfe-sxe-cyberpunk-render-v5.jpg\": \"./images/jessica-woulfe-sxe-cyberpunk-render-v5.jpg\",\n\t\"./jet_futura_by_vladimirpetkovic-d91wnhg.jpg\": \"./images/jet_futura_by_vladimirpetkovic-d91wnhg.jpg\",\n\t\"./mark-makovey-a-trap-for-the-heroes.jpg\": \"./images/mark-makovey-a-trap-for-the-heroes.jpg\",\n\t\"./neon zelda.jpg\": \"./images/neon zelda.jpg\",\n\t\"./pcmasterrace.jpg\": \"./images/pcmasterrace.jpg\",\n\t\"./romullo-laia-silva-cenario-12.jpg\": \"./images/romullo-laia-silva-cenario-12.jpg\",\n\t\"./speed_cyberpunk_by_maronski.jpg\": \"./images/speed_cyberpunk_by_maronski.jpg\",\n\t\"./steampunk_by_cuber-d64id42.jpg\": \"./images/steampunk_by_cuber-d64id42.jpg\",\n\t\"./street_by_arsenixc-dbolumj.jpg\": \"./images/street_by_arsenixc-dbolumj.jpg\",\n\t\"./sunset-6-1920×1080.jpg\": \"./images/sunset-6-1920×1080.jpg\",\n\t\"./wallpaper-4k-pc.jpg\": \"./images/wallpaper-4k-pc.jpg\",\n\t\"./worldmap_final_by_klauspillon-d83vk2t.jpg\": \"./images/worldmap_final_by_klauspillon-d83vk2t.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack:///./images/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_bones_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/bones.png */ \"./images/bones.png\");\n/* harmony import */ var _images_cyberpunk_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cyberpunk.jpg */ \"./images/cyberpunk.jpg\");\n\r\n\r\n\r\n\r\nconst previousArrow = document.querySelector(\".arrow.previous\");\r\nconst nextArrow = document.querySelector(\".arrow.next\");\r\nconst pictureImage = document.querySelector(\".picture-container > img\");\r\nconst pictureSlider = document.querySelector(\".picture-slider\");\r\n\r\n// Create a function to import all images from a directory\r\nfunction importAllImages() {\r\n  const imageList = [];\r\n  // Use `require.context` to dynamically import all images from `images` folder\r\n  const r = __webpack_require__(\"./images sync \\\\.(png%7Cjpe?g%7Csvg)$\");\r\n  r.keys().forEach((filename) => imageList.push(r(filename)));\r\n  return imageList;\r\n}\r\n\r\n// INITIALIZE DOM ELEMENTS\r\nfunction showPreviousPicture() {\r\n  if (count <= 0) count += imageCount;\r\n  pictureImage.src = imageList[--count];\r\n}\r\n\r\nfunction showNextPicture() {\r\n  if (count >= imageCount - 1) count -= imageCount;\r\n  pictureImage.src = imageList[++count];\r\n}\r\n\r\n// INITIALIZE VALUES\r\nconst imageList = importAllImages();\r\n\r\nlet count = 0;\r\nconst imageCount = imageList.length;\r\n\r\n// ADD EVENT LISTENERS\r\npreviousArrow.addEventListener(\"click\", showPreviousPicture);\r\nnextArrow.addEventListener(\"click\", showNextPicture);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  color: rgb(255, 255, 255);\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 80% 20%;\r\n}\r\n\r\n/* PICTURE FRAME */\r\n.picture-frame {\r\n  grid-row: 1;\r\n  display: grid;\r\n  grid-template-columns: 10% 80% 10%;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.arrow-container,\r\n.arrow-container > button {\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 30%;\r\n  border: none;\r\n  background-color: #04aa6d;\r\n  padding: 14px 28px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  /* height: 100%;\r\n  width: 100%; */\r\n}\r\n\r\n.picture-container {\r\n  grid-column: 2;\r\n  width: 80%;\r\n  height: auto;\r\n}\r\n\r\n.picture-container > img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* PICTURE SLIDER */\r\n.picture-slider {\r\n  opacity: 30%;\r\n  background-color: rgb(5, 0, 255);\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\nspan.circle {\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color: rgb(255, 0, 255);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./images/Rein and bridgette.jpg":
/*!***************************************!*\
  !*** ./images/Rein and bridgette.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c509d6f272949b132541.jpg\";\n\n//# sourceURL=webpack:///./images/Rein_and_bridgette.jpg?");

/***/ }),

/***/ "./images/Roselia.png":
/*!****************************!*\
  !*** ./images/Roselia.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f8a3b5722cdf76f9e6c5.png\";\n\n//# sourceURL=webpack:///./images/Roselia.png?");

/***/ }),

/***/ "./images/adrian-marc-amarc-cyberoom-v3.jpg":
/*!**************************************************!*\
  !*** ./images/adrian-marc-amarc-cyberoom-v3.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"49212ff3c7002ffd6650.jpg\";\n\n//# sourceURL=webpack:///./images/adrian-marc-amarc-cyberoom-v3.jpg?");

/***/ }),

/***/ "./images/aenigma___jonada_has_you_by_w_e_z-d9413cr.jpg":
/*!**************************************************************!*\
  !*** ./images/aenigma___jonada_has_you_by_w_e_z-d9413cr.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"be8833b5d509bca7264e.jpg\";\n\n//# sourceURL=webpack:///./images/aenigma___jonada_has_you_by_w_e_z-d9413cr.jpg?");

/***/ }),

/***/ "./images/bones.png":
/*!**************************!*\
  !*** ./images/bones.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"305e68725fe2a998fa86.png\";\n\n//# sourceURL=webpack:///./images/bones.png?");

/***/ }),

/***/ "./images/c_o_t__quiet_town_by_wang2dog-d7h60ov.jpg":
/*!**********************************************************!*\
  !*** ./images/c_o_t__quiet_town_by_wang2dog-d7h60ov.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"04f9734e84938ac7b664.jpg\";\n\n//# sourceURL=webpack:///./images/c_o_t__quiet_town_by_wang2dog-d7h60ov.jpg?");

/***/ }),

/***/ "./images/caiyuanba bridge.jpg":
/*!*************************************!*\
  !*** ./images/caiyuanba bridge.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2da4b3d57e4965c2e418.jpg\";\n\n//# sourceURL=webpack:///./images/caiyuanba_bridge.jpg?");

/***/ }),

/***/ "./images/cyberpunk.jpg":
/*!******************************!*\
  !*** ./images/cyberpunk.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"81f1026c505cc93a32fa.jpg\";\n\n//# sourceURL=webpack:///./images/cyberpunk.jpg?");

/***/ }),

/***/ "./images/cyberpunk_city_by_artursadlos-dbb7hcs.jpg":
/*!**********************************************************!*\
  !*** ./images/cyberpunk_city_by_artursadlos-dbb7hcs.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"255ec88311571fd47161.jpg\";\n\n//# sourceURL=webpack:///./images/cyberpunk_city_by_artursadlos-dbb7hcs.jpg?");

/***/ }),

/***/ "./images/donglu-yu-cyberpunk-rooftop-view-small.jpg":
/*!***********************************************************!*\
  !*** ./images/donglu-yu-cyberpunk-rooftop-view-small.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"56bc692ec0dba223f49b.jpg\";\n\n//# sourceURL=webpack:///./images/donglu-yu-cyberpunk-rooftop-view-small.jpg?");

/***/ }),

/***/ "./images/eddie-del-rio-underground-final-b.jpg":
/*!******************************************************!*\
  !*** ./images/eddie-del-rio-underground-final-b.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c40d79bb5d61b085cd8a.jpg\";\n\n//# sourceURL=webpack:///./images/eddie-del-rio-underground-final-b.jpg?");

/***/ }),

/***/ "./images/egor-blintsov-rox-to-eden.jpg":
/*!**********************************************!*\
  !*** ./images/egor-blintsov-rox-to-eden.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"df16f5b849aee5f249d9.jpg\";\n\n//# sourceURL=webpack:///./images/egor-blintsov-rox-to-eden.jpg?");

/***/ }),

/***/ "./images/future_city_by_dongkyuni-d5tidbu.jpg":
/*!*****************************************************!*\
  !*** ./images/future_city_by_dongkyuni-d5tidbu.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cdeeffcd272124bb4390.jpg\";\n\n//# sourceURL=webpack:///./images/future_city_by_dongkyuni-d5tidbu.jpg?");

/***/ }),

/***/ "./images/jessica-woulfe-sxe-cyberpunk-render-v5.jpg":
/*!***********************************************************!*\
  !*** ./images/jessica-woulfe-sxe-cyberpunk-render-v5.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"994cfb5a1428efe6941c.jpg\";\n\n//# sourceURL=webpack:///./images/jessica-woulfe-sxe-cyberpunk-render-v5.jpg?");

/***/ }),

/***/ "./images/jet_futura_by_vladimirpetkovic-d91wnhg.jpg":
/*!***********************************************************!*\
  !*** ./images/jet_futura_by_vladimirpetkovic-d91wnhg.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4d17021e7e409299fa9e.jpg\";\n\n//# sourceURL=webpack:///./images/jet_futura_by_vladimirpetkovic-d91wnhg.jpg?");

/***/ }),

/***/ "./images/mark-makovey-a-trap-for-the-heroes.jpg":
/*!*******************************************************!*\
  !*** ./images/mark-makovey-a-trap-for-the-heroes.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"87e7566bed7fa0c8c1ac.jpg\";\n\n//# sourceURL=webpack:///./images/mark-makovey-a-trap-for-the-heroes.jpg?");

/***/ }),

/***/ "./images/neon zelda.jpg":
/*!*******************************!*\
  !*** ./images/neon zelda.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1a6b1366b74ed08602a4.jpg\";\n\n//# sourceURL=webpack:///./images/neon_zelda.jpg?");

/***/ }),

/***/ "./images/pcmasterrace.jpg":
/*!*********************************!*\
  !*** ./images/pcmasterrace.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0d4f10fb0f58523787cd.jpg\";\n\n//# sourceURL=webpack:///./images/pcmasterrace.jpg?");

/***/ }),

/***/ "./images/romullo-laia-silva-cenario-12.jpg":
/*!**************************************************!*\
  !*** ./images/romullo-laia-silva-cenario-12.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e26abcb5068dff9abe3d.jpg\";\n\n//# sourceURL=webpack:///./images/romullo-laia-silva-cenario-12.jpg?");

/***/ }),

/***/ "./images/speed_cyberpunk_by_maronski.jpg":
/*!************************************************!*\
  !*** ./images/speed_cyberpunk_by_maronski.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0c2652ad71de68a46e5c.jpg\";\n\n//# sourceURL=webpack:///./images/speed_cyberpunk_by_maronski.jpg?");

/***/ }),

/***/ "./images/steampunk_by_cuber-d64id42.jpg":
/*!***********************************************!*\
  !*** ./images/steampunk_by_cuber-d64id42.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"618256fb5d187db05c78.jpg\";\n\n//# sourceURL=webpack:///./images/steampunk_by_cuber-d64id42.jpg?");

/***/ }),

/***/ "./images/street_by_arsenixc-dbolumj.jpg":
/*!***********************************************!*\
  !*** ./images/street_by_arsenixc-dbolumj.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ca447c91c704c2872a0c.jpg\";\n\n//# sourceURL=webpack:///./images/street_by_arsenixc-dbolumj.jpg?");

/***/ }),

/***/ "./images/sunset-6-1920×1080.jpg":
/*!***************************************!*\
  !*** ./images/sunset-6-1920×1080.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dd2d56efbb2bb325c9d9.jpg\";\n\n//# sourceURL=webpack:///./images/sunset-6-1920%C3%971080.jpg?");

/***/ }),

/***/ "./images/wallpaper-4k-pc.jpg":
/*!************************************!*\
  !*** ./images/wallpaper-4k-pc.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"5d6dbc497f602589fcae.jpg\";\n\n//# sourceURL=webpack:///./images/wallpaper-4k-pc.jpg?");

/***/ }),

/***/ "./images/worldmap_final_by_klauspillon-d83vk2t.jpg":
/*!**********************************************************!*\
  !*** ./images/worldmap_final_by_klauspillon-d83vk2t.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f376ab375b0e0d05f2cd.jpg\";\n\n//# sourceURL=webpack:///./images/worldmap_final_by_klauspillon-d83vk2t.jpg?");

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