const { attackPlayer } = require("./game-logic");

function displayGameboard(gameBoard) {
  const body = document.querySelector("body");
  const boardElement = document.createElement("div");
  boardElement.classList.add("board");

  gameBoard.getBoard().forEach((row, index) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    rowElement.classList.add(`row-${index}`);
    row.forEach((cell, index) => {
      const cellElement = document.createElement("span");
      cellElement.classList.add("cell");
      cellElement.classList.add(`col-${index}`);
      cellElement.textContent = cell === -1 ? "" : cell;

      rowElement.appendChild(cellElement);
    });
    boardElement.appendChild(rowElement);
  });
  body.appendChild(boardElement);
}

function attackListener(e, defenderId) {
  const attackCol = e.target.classList[1].slice(-1);
  const attackRow = e.target.parentNode.classList[1].slice(-1);
  console.log(attackRow, attackCol);

  attackPlayer(defenderId, attackRow, attackCol);
}

function addAllAttackListeners() {
  const allCells = document.querySelectorAll("span");

  allCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      attackListener(e, 1);
    });
  });
}

module.exports = {
  displayGameboard,
  addAllAttackListeners,
};
