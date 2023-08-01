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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const GIPHY_API_KEY = \"reL5IV4XuSvA84Pu73Vbr4bKolmQtAHh\";\r\n\r\nconst img = document.querySelector(\"img\");\r\n\r\nfunction fetchGif(searchTerm) {\r\n  fetch(\r\n    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm}`,\r\n    {\r\n      mode: \"cors\",\r\n    }\r\n  )\r\n    .then(function (response) {\r\n      return response.json();\r\n    })\r\n    .then(function (response) {\r\n      img.src = response.data.images.original.url;\r\n    });\r\n}\r\n\r\n// fetchGif(\"cats\");\r\n\r\nasync function asyncFetchGif(searchTerm) {\r\n  const response = await fetch(\r\n    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm}`,\r\n    { mode: \"cors\" }\r\n  );\r\n  const responseJson = await response.json();\r\n  img.src = responseJson.data.images.original.url;\r\n}\r\n\r\nasyncFetchGif(\"cats\");\r\n\n\n//# sourceURL=webpack://giphy-api/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;