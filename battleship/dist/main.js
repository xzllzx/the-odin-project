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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n  displayGameboard,\r\n  addAllAttackListeners,\r\n} = __webpack_require__(/*! ./display-gameboard */ \"./src/display-gameboard.js\");\r\nconst { addShipMouseoverListeners } = __webpack_require__(/*! ./display-ship-placement */ \"./src/display-ship-placement.js\");\r\nconst { initGame, placeShipsPredetermined } = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\r\n\r\nfunction initialDisplay() {\r\n  const { player0, player1 } = initGame(10, 10);\r\n  // placeShipsPredetermined(player0);\r\n  placeShipsPredetermined(player1);\r\n\r\n  displayGameboard(player0.board, 0);\r\n  displayGameboard(player1.board, 1);\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  // Your code using document.querySelector() here\r\n  addAllAttackListeners(1);\r\n  addShipMouseoverListeners(1);\r\n});\r\n\r\nmodule.exports = {\r\n  initialDisplay,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/controller.js?");

/***/ }),

/***/ "./src/display-gameboard.js":
/*!**********************************!*\
  !*** ./src/display-gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { attackPlayer } = __webpack_require__(/*! ./game-logic */ \"./src/game-logic.js\");\r\nconst { playerList } = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\r\n\r\nfunction displayGameboard(gameBoard, defenderId) {\r\n  const gameContainer = document.querySelector(\".game-container\");\r\n\r\n  const boardHeader = document.createElement(\"div\");\r\n  boardHeader.classList.add(\"board-header\");\r\n  boardHeader.textContent = playerList[defenderId].playerName;\r\n  // boardHeader.textContent = `Player ${defenderId + 1}`;\r\n\r\n  const boardElement = document.createElement(\"div\");\r\n  boardElement.classList.add(\"board\");\r\n  boardElement.id = `board-${defenderId}`;\r\n\r\n  gameContainer.appendChild(boardHeader);\r\n  gameContainer.appendChild(boardElement);\r\n\r\n  gameBoard.getBoard().forEach((row, index) => {\r\n    const rowElement = document.createElement(\"div\");\r\n    rowElement.classList.add(\"row\");\r\n    rowElement.classList.add(`row-${index}`);\r\n    row.forEach((cell, index) => {\r\n      const cellElement = document.createElement(\"span\");\r\n      cellElement.classList.add(\"cell\");\r\n      cellElement.classList.add(`col-${index}`);\r\n      cellElement.textContent = cell === -1 ? \"\" : cell;\r\n\r\n      rowElement.appendChild(cellElement);\r\n    });\r\n    boardElement.appendChild(rowElement);\r\n  });\r\n}\r\n\r\nfunction attackListener(e, defenderId) {\r\n  e.target.classList.add(\"attacked\");\r\n\r\n  const attackCol = e.target.classList[1].slice(-1);\r\n  const attackRow = e.target.parentNode.classList[1].slice(-1);\r\n  console.log(attackRow, attackCol);\r\n\r\n  attackPlayer(defenderId, attackRow, attackCol);\r\n}\r\n\r\nfunction addAllAttackListeners(defenderId) {\r\n  const defenderBoard = document.querySelector(`#board-${defenderId}`);\r\n  const allCells = defenderBoard.querySelectorAll(\"span\");\r\n\r\n  allCells.forEach((cell) => {\r\n    cell.addEventListener(\"click\", (e) => {\r\n      attackListener(e, defenderId);\r\n    });\r\n  });\r\n}\r\n\r\nmodule.exports = {\r\n  displayGameboard,\r\n  addAllAttackListeners,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/display-gameboard.js?");

/***/ }),

/***/ "./src/display-ship-placement.js":
/*!***************************************!*\
  !*** ./src/display-ship-placement.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { placeCells } = __webpack_require__(/*! ./game-logic */ \"./src/game-logic.js\");\r\n\r\nlet playerId = 0;\r\nlet shipLength = 5;\r\nlet shipCount = 0;\r\nlet shipHorizontal = true;\r\n\r\nfunction toggleShipPlacementOrientation() {\r\n  shipHorizontal = !shipHorizontal;\r\n}\r\n\r\nfunction displayShipPlacement(gameBoard) {\r\n  return;\r\n}\r\n\r\nfunction addShipMouseoverListeners() {\r\n  const defenderBoard = document.querySelector(`#board-${playerId}`);\r\n  const allCells = defenderBoard.querySelectorAll(\"span\");\r\n\r\n  allCells.forEach((cell) => {\r\n    cell.addEventListener(\"mouseover\", (e) => {\r\n      _addShipMouseover(e, \"mouseover\");\r\n    });\r\n    cell.addEventListener(\"click\", (e) => {\r\n      _addShipMouseover(e, \"click\");\r\n    });\r\n  });\r\n}\r\n\r\nfunction _getRowCol(e) {\r\n  const col = Number(e.target.classList[1].slice(-1));\r\n  const row = Number(e.target.parentNode.classList[1].slice(-1));\r\n\r\n  return { row, col };\r\n}\r\n\r\nfunction _addShipMouseover(e, eventType) {\r\n  const { row, col } = _getRowCol(e);\r\n\r\n  _locateShipPositions(row, col, eventType);\r\n}\r\n\r\nfunction _locateShipPositions(row, col, eventType) {\r\n  const divList = [];\r\n  const coordinateList = [];\r\n\r\n  if (shipHorizontal) {\r\n    for (let i = 0; i < shipLength; i++) {\r\n      const colElement = document.querySelector(\r\n        `#board-${playerId} > .row-${row} > .col-${col + i}`\r\n      );\r\n      coordinateList.push([row, col + i]);\r\n      divList.push(colElement);\r\n    }\r\n  } else {\r\n    for (let i = 0; i < shipLength; i++) {\r\n      const rowElement = document.querySelector(\r\n        `#board-${playerId} > .row-${row + i} > .col-${col}`\r\n      );\r\n      coordinateList.push([row + i, col]);\r\n      divList.push(rowElement);\r\n    }\r\n  }\r\n\r\n  if (eventType === \"mouseover\") {\r\n    _highlightCells(divList);\r\n  } else if (eventType === \"click\") {\r\n    const shipPlaced = placeCells(coordinateList, divList);\r\n    if (shipPlaced) shipLength--;\r\n  }\r\n}\r\n\r\nfunction _highlightCells(cellList) {\r\n  const allColElements = document.querySelectorAll(\r\n    `#board-${playerId} > .row > span.cell`\r\n  );\r\n\r\n  // Remove class from all cells\r\n  allColElements.forEach((element) => {\r\n    element.classList.remove(\"highlight\");\r\n  });\r\n\r\n  // Add class to relevant cells\r\n  cellList.forEach((element) => {\r\n    if (element) element.classList.add(\"highlight\");\r\n  });\r\n}\r\n\r\nmodule.exports = {\r\n  addShipMouseoverListeners,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/display-ship-placement.js?");

/***/ }),

/***/ "./src/game-logic.js":
/*!***************************!*\
  !*** ./src/game-logic.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { playerList } = __webpack_require__(/*! ./start-game */ \"./src/start-game.js\");\r\n\r\nlet shipCount = 0;\r\nlet currentPlayerId = 0;\r\n\r\nfunction attackPlayer(defenderId, row, col) {\r\n  const gameStateDiv = document.querySelector(\".game-state\");\r\n  const defenderBoard = playerList[defenderId].board;\r\n  let gameStateText = \"\";\r\n  const { hit, ship } = defenderBoard.receiveAttack(row, col);\r\n  if (hit) {\r\n    gameStateText += `${ship.shipType()} has been hit! `;\r\n    if (ship.isSunk()) gameStateText += \"Ship has been sunk! \";\r\n  } else gameStateText += \"Attack missed! \";\r\n\r\n  gameStateDiv.textContent = gameStateText;\r\n\r\n  if (defenderBoard.getAllShipsSunk()) {\r\n    gameStateText = triggerGameEnd();\r\n    gameStateDiv.textContent = gameStateText;\r\n  } else {\r\n    switchTurn();\r\n    return true;\r\n  }\r\n}\r\n\r\nfunction computerAttack() {\r\n  let row = Math.floor(Math.random() * 10);\r\n  let col = Math.floor(Math.random() * 10);\r\n\r\n  while (!attackPlayer(0, row, col)) {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let col = Math.floor(Math.random() * 10);\r\n    attackPlayer(0, row, col);\r\n  }\r\n\r\n  const targetCell = document.querySelector(`.row-${row} > .col-${col}`);\r\n  targetCell.classList.add(\"attacked\");\r\n\r\n  console.log(`Computer turn over: Attacked ${row}, ${col}`);\r\n}\r\n\r\nfunction switchTurn() {\r\n  const turnDiv = document.querySelector(\".turn\");\r\n  currentPlayerId = currentPlayerId ? 0 : 1;\r\n  turnDiv.textContent = `${playerList[currentPlayerId].playerName}'s turn`;\r\n\r\n  if (currentPlayerId === 1) {\r\n    setTimeout(() => {\r\n      turnDiv.textContent = `Computer is thinking...`;\r\n    }, 500);\r\n    setTimeout(computerAttack, 3000);\r\n  }\r\n}\r\n\r\nfunction triggerGameEnd() {\r\n  return `Congratulations, all ships have been sunk! ${playerList[defenderId].playerName} has won!`;\r\n}\r\n\r\nfunction placeCells(coordinateList, divList) {\r\n  const validPlacement = _validatePlacement(coordinateList);\r\n\r\n  if (validPlacement) {\r\n    // Add class to relevant cells\r\n    divList.forEach((element) => {\r\n      if (element) element.classList.add(\"player-ship\");\r\n    });\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\r\nfunction _validatePlacement(coordinateList) {\r\n  const board = playerList[0].board;\r\n  const validPlacement = board.placeOneShip(shipCount, coordinateList);\r\n  shipCount++;\r\n  console.log(board.getBoard());\r\n  return true;\r\n}\r\n\r\nmodule.exports = {\r\n  attackPlayer,\r\n  placeCells,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/game-logic.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Ship } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\n\r\nconst Gameboard = () => {\r\n  let board;\r\n  let shipList = [];\r\n\r\n  // GET functions\r\n  const getBoard = () => {\r\n    return board;\r\n  };\r\n\r\n  const getShipList = () => {\r\n    return shipList;\r\n  };\r\n\r\n  const getAllShipsSunk = () => {\r\n    return shipList.reduce((allSunk, ship) => allSunk && ship.isSunk(), true);\r\n  };\r\n\r\n  const createBoard = (height, width) => {\r\n    board = [];\r\n    height = Number(height);\r\n    width = Number(width);\r\n    if (height >= 1 && width >= 1) {\r\n      for (let i = 0; i < height; i++) {\r\n        const row = [];\r\n\r\n        for (let j = 0; j < width; j++) {\r\n          row.push(-1);\r\n        }\r\n        board.push(row);\r\n      }\r\n      return board;\r\n    } else if (isNaN(height) || isNaN(width))\r\n      throw new TypeError(\"Not a number\");\r\n    else if (height < 1 || width < 1) {\r\n      throw new Error(\"Dimensions cannot be less than 1\");\r\n    }\r\n  };\r\n\r\n  // Total 5 ships for 10*10 board: 1*1, 2*2, 1*3, 1*4 ships - all straight lines\r\n  const placeMultipleShips = (allCoordinates) => {\r\n    for (const [index, coordinateList] of allCoordinates.entries()) {\r\n      try {\r\n        placeOneShip(index, coordinateList);\r\n      } catch (error) {\r\n        throw error;\r\n      }\r\n    }\r\n  };\r\n\r\n  const placeOneShip = (index, coordinateList) => {\r\n    try {\r\n      if (\r\n        _validateShipCoordinates(coordinateList, board.length, board[0].length)\r\n      ) {\r\n        for (const [row, col] of coordinateList) {\r\n          board[row][col] = index;\r\n        }\r\n        const newShip = Ship(index, coordinateList);\r\n        shipList.push(newShip);\r\n      }\r\n    } catch (error) {\r\n      throw error;\r\n    }\r\n  };\r\n\r\n  const _validateShipCoordinates = (coordinateList, height, width) => {\r\n    // All coordinates in list must share either a row or a column\r\n    // Whichever is unshared, must be consecutive\r\n    // Cannot be out of range\r\n    coordinateList.sort();\r\n\r\n    // Ship is 1x1 only\r\n    if (coordinateList.length <= 1)\r\n      if (_shipCoordinatesWithinBoundary(coordinateList[0], height, width))\r\n        return true;\r\n      else throw new Error(\"Coordinates are out of bounds\");\r\n\r\n    // Check if ship is a straight line\r\n    const { isHorizontal, isVertical } = _shipOrientation(coordinateList);\r\n    // If both vertical and horizontal, or neither, then it is not a straight line\r\n    if (isHorizontal === isVertical)\r\n      throw new Error(\"Coordinates provided are not in a straight line\");\r\n\r\n    // Check that the columns are consecutive\r\n    const isConsecutive = _shipIsConsecutive(coordinateList, isHorizontal);\r\n    if (!isConsecutive)\r\n      throw new Error(\"Coordinates provided are not consecutive\");\r\n\r\n    // Check that ship does not occupy an already occupied spot\r\n    const isOccupied = _shipCellsOccupied(coordinateList);\r\n    if (isOccupied)\r\n      throw new Error(\"Coordinates have been occupied by another ship\");\r\n\r\n    // Check if within box boundaries\r\n    if (\r\n      !_shipCoordinatesWithinBoundary(coordinateList[0], height, width) ||\r\n      !_shipCoordinatesWithinBoundary(coordinateList.at(-1), height, width)\r\n    )\r\n      throw new Error(\"Coordinates are out of bounds\");\r\n    else return true;\r\n  };\r\n\r\n  const _shipCoordinatesWithinBoundary = (coordinates, height, width) => {\r\n    return (\r\n      coordinates[0] >= 0 &&\r\n      coordinates[0] < height &&\r\n      coordinates[1] >= 0 &&\r\n      coordinates[1] < width\r\n    );\r\n  };\r\n\r\n  const _shipOrientation = (coordinateList) => {\r\n    const isHorizontal = coordinateList.every(\r\n      ([row, col]) => row === coordinateList[0][0]\r\n    );\r\n    const isVertical = coordinateList.every(\r\n      ([row, col]) => col === coordinateList[0][1]\r\n    );\r\n    return { isHorizontal, isVertical };\r\n  };\r\n\r\n  const _shipIsConsecutive = (coordinateList, isHorizontal) => {\r\n    const rowOrCol = isHorizontal ? 1 : 0;\r\n\r\n    coordinateList.sort();\r\n\r\n    for (let i = 0; i < coordinateList.length; i++) {\r\n      if (coordinateList[i][rowOrCol] !== coordinateList[0][rowOrCol] + i) {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  };\r\n\r\n  const _shipCellsOccupied = (coordinateList) => {\r\n    const noneOccupied = coordinateList.reduce(\r\n      (noneOccupied, coordinates) =>\r\n        noneOccupied && board[coordinates[0]][coordinates[1]] === -1,\r\n      true\r\n    );\r\n\r\n    return !noneOccupied;\r\n  };\r\n\r\n  const receiveAttack = (row, col) => {\r\n    row = Number(row);\r\n    col = Number(col);\r\n\r\n    try {\r\n      const validAttack = validateAttackCoordinates(\r\n        row,\r\n        col,\r\n        board.length,\r\n        board[0].length\r\n      );\r\n      if (validAttack) {\r\n        const shipId = board[row][col];\r\n        board[row][col] = -2;\r\n        if (shipId !== -1) {\r\n          shipList[shipId].hit();\r\n          return { hit: true, ship: shipList[shipId] };\r\n        }\r\n      }\r\n    } catch (error) {\r\n      throw error;\r\n    }\r\n\r\n    return { hit: false, ship: \"None\" };\r\n  };\r\n\r\n  const validateAttackCoordinates = (row, col, height, width) => {\r\n    if (row < 0 || row >= height || col < 0 || col >= width)\r\n      throw new Error(\"This spot is out-of-bounds\");\r\n    if (isNaN(row) || isNaN(col))\r\n      throw new TypeError(\"Non-numerical input not accepted\");\r\n    if (board[row][col] === -2)\r\n      throw new Error(\"This spot has already been attacked\");\r\n\r\n    return true;\r\n  };\r\n\r\n  return {\r\n    getBoard,\r\n    getShipList,\r\n    getAllShipsSunk,\r\n    createBoard,\r\n    placeMultipleShips,\r\n    placeOneShip,\r\n    receiveAttack,\r\n  };\r\n};\r\n\r\nmodule.exports = {\r\n  Gameboard,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nconst { initialDisplay } = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\r\n\r\ninitialDisplay();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("const Player = (board, playerId, playerName) => {\r\n  return { board, playerId, playerName };\r\n};\r\n\r\nmodule.exports = {\r\n  Player,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("const Ship = (shipId, coordinateList) => {\r\n  const shipTypeList = [\"Destroyer\", \"Submarine\", \"Battleship\", \"Carrier\"];\r\n\r\n  let length = coordinateList.length;\r\n  let timesHit = 0;\r\n\r\n  const shipType = () => {\r\n    return shipTypeList[shipId];\r\n  };\r\n  const hit = () => {\r\n    timesHit++;\r\n    return timesHit;\r\n  };\r\n  const isSunk = () => {\r\n    return timesHit >= length;\r\n  };\r\n  return { shipId, shipType, hit, isSunk };\r\n};\r\n\r\nmodule.exports = {\r\n  Ship,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Ship } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\nconst { Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\nconst { Player } = __webpack_require__(/*! ./player */ \"./src/player.js\");\r\n\r\n// GLOBAL ?\r\nconst playerList = [];\r\n\r\nfunction initGame(height, width) {\r\n  // Create 2 Players with a Gameboard each\r\n  const player0 = createPlayer(height, width, 0, \"Player\");\r\n  const player1 = createPlayer(height, width, 1, \"Computer\");\r\n\r\n  playerList.push(player0);\r\n  playerList.push(player1);\r\n\r\n  return { player0, player1 };\r\n}\r\n\r\nfunction createPlayer(height, width, playerId, playerName) {\r\n  const gameBoard = Gameboard();\r\n  gameBoard.createBoard(height, width);\r\n\r\n  const player = Player(gameBoard, playerId, playerName);\r\n\r\n  return player;\r\n}\r\n\r\nfunction placeShipsPredetermined(player) {\r\n  const coordinateList = [\r\n    [[0, 0]],\r\n    [\r\n      [2, 0],\r\n      [2, 1],\r\n    ],\r\n    [\r\n      [3, 0],\r\n      [3, 1],\r\n      [3, 2],\r\n    ],\r\n    [\r\n      [7, 0],\r\n      [7, 1],\r\n      [7, 2],\r\n      [7, 3],\r\n    ],\r\n  ];\r\n  player.board.placeMultipleShips(coordinateList);\r\n}\r\n\r\nfunction attack(player, coordinates) {}\r\n\r\nmodule.exports = {\r\n  playerList,\r\n  initGame,\r\n  placeShipsPredetermined,\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/start-game.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  color: rgb(255, 255, 255);\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n  font-size: 24px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n}\r\n\r\n/* ABOVE */\r\n.turn {\r\n  font-size: 48px;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.game-state {\r\n  font-size: 36px;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n/* GAME BOARD */\r\n.game-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 10% 90%;\r\n}\r\n\r\n.board-header {\r\n  grid-row: 1;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.board {\r\n  grid-row: 2;\r\n  height: 50vh;\r\n  width: 40vw;\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 1fr);\r\n  margin: 50px;\r\n}\r\n\r\n.board-1 {\r\n  grid-column: 1;\r\n}\r\n\r\n.board-2 {\r\n  grid-column: 2;\r\n}\r\n\r\n.row {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: repeat(10, 1fr);\r\n}\r\n\r\nspan.cell {\r\n  border-collapse: collapse;\r\n  border: 1px solid purple;\r\n  color: transparent;\r\n}\r\n\r\nspan.cell.attacked {\r\n  background-color: grey;\r\n  color: white;\r\n}\r\n\r\n#board-1 > .row > span.cell:hover {\r\n  background-color: green;\r\n  cursor: pointer;\r\n}\r\n\r\n#board-1 > .row > span.cell.attacked:hover {\r\n  background-color: red;\r\n  cursor: not-allowed;\r\n}\r\n\r\nspan.cell.highlight {\r\n  background-color: blue;\r\n}\r\n\r\nspan.cell.player-ship {\r\n  background-color: goldenrod;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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