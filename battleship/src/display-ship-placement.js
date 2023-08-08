let playerId = 0;
let shipLength = 5;
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
    cell.addEventListener("mouseover", addShipMouseover);
  });
}

function addShipMouseover(e) {
  const col = Number(e.target.classList[1].slice(-1));
  const row = Number(e.target.parentNode.classList[1].slice(-1));

  highlightShipPlacement(row, col);
}

function highlightShipPlacement(row, col) {
  if (shipHorizontal) {
    const colList = [];
    for (let i = 0; i < shipLength; i++) {
      //   colList.push(col + i);
      const colElement = document.querySelector(
        `#board-${playerId} > .row-${row} > .col-${col + i}`
      );
      colList.push(colElement);
    }
    highlightCells(colList);
  } else {
    const rowList = [];
    for (let i = 0; i < shipLength; i++) {
      const rowElement = document.querySelector(
        `#board-${playerId} > .row-${row + i} > .col-${col}`
      );
      rowList.push(rowElement);
    }
    highlightCells(rowList);
  }
}

function highlightCells(cellList) {
  const allColElements = document.querySelectorAll(
    `#board-${playerId} > .row > span.cell`
  );
  allColElements.forEach((element) => {
    element.classList.remove("highlight");
  });
  cellList.forEach((element) => {
    if (element) element.classList.add("highlight");
  });
}

module.exports = {
  addShipMouseoverListeners,
};
