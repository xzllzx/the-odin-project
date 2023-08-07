const { attackPlayer } = require("./game-logic");
const { playerList } = require("./start-game");

function displayGameboard(gameBoard, defenderId) {
  const gameContainer = document.querySelector(".game-container");

  const boardHeader = document.createElement("div");
  boardHeader.classList.add("board-header");
  boardHeader.textContent = playerList[defenderId].playerName;
  // boardHeader.textContent = `Player ${defenderId + 1}`;

  const boardElement = document.createElement("div");
  boardElement.classList.add("board");
  boardElement.id = `board-${defenderId}`;

  gameContainer.appendChild(boardHeader);
  gameContainer.appendChild(boardElement);

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
}

function attackListener(e, defenderId) {
  e.target.classList.add("attacked");

  const attackCol = e.target.classList[1].slice(-1);
  const attackRow = e.target.parentNode.classList[1].slice(-1);
  console.log(attackRow, attackCol);

  attackPlayer(defenderId, attackRow, attackCol);
}

function addAllAttackListeners(defenderId) {
  const defenderBoard = document.querySelector(`#board-${defenderId}`);
  const allCells = defenderBoard.querySelectorAll("span");

  allCells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      attackListener(e, defenderId);
    });
  });
}

module.exports = {
  displayGameboard,
  addAllAttackListeners,
};
