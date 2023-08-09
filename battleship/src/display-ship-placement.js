const { placeCells } = require("./game-logic");

let playerId = 0;
let shipLength = 5;
let shipCount = 0;
let shipHorizontal = true;

function toggleShipPlacementOrientation() {
  shipHorizontal = !shipHorizontal;
}

function displayShipPlacement(gameBoard) {
  return;
}

function addShipMouseoverListeners() {
  const defenderBoard = document.querySelector(`#board-${playerId}`);
  const allCells = defenderBoard.querySelectorAll("span");

  allCells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      _addShipMouseover(e, "mouseover");
    });
    cell.addEventListener("click", (e) => {
      _addShipMouseover(e, "click");
    });
  });
}

function _getRowCol(e) {
  const col = Number(e.target.classList[1].slice(-1));
  const row = Number(e.target.parentNode.classList[1].slice(-1));

  return { row, col };
}

function _addShipMouseover(e, eventType) {
  const { row, col } = _getRowCol(e);

  _locateShipPositions(row, col, eventType);
}

function _locateShipPositions(row, col, eventType) {
  const divList = [];
  const coordinateList = [];

  if (shipHorizontal) {
    for (let i = 0; i < shipLength; i++) {
      const colElement = document.querySelector(
        `#board-${playerId} > .row-${row} > .col-${col + i}`
      );
      coordinateList.push([row, col + i]);
      divList.push(colElement);
    }
  } else {
    for (let i = 0; i < shipLength; i++) {
      const rowElement = document.querySelector(
        `#board-${playerId} > .row-${row + i} > .col-${col}`
      );
      coordinateList.push([row + i, col]);
      divList.push(rowElement);
    }
  }

  if (eventType === "mouseover") {
    _highlightCells(divList);
  } else if (eventType === "click") {
    const shipPlaced = placeCells(coordinateList, divList);
    if (shipPlaced) shipLength--;
  }
}

function _highlightCells(cellList) {
  const allColElements = document.querySelectorAll(
    `#board-${playerId} > .row > span.cell`
  );

  // Remove class from all cells
  allColElements.forEach((element) => {
    element.classList.remove("highlight");
  });

  // Add class to relevant cells
  cellList.forEach((element) => {
    if (element) element.classList.add("highlight");
  });
}

module.exports = {
  addShipMouseoverListeners,
};
