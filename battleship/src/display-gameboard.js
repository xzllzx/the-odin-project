function displayGameboard(gameBoard) {
  const body = document.querySelector("body");
  const boardElement = document.createElement("div");
  boardElement.classList.add("board");

  gameBoard.getBoard().forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    row.forEach((cell) => {
      const cellElement = document.createElement("span");
      cellElement.classList.add("cell");
      cellElement.textContent = cell === -1 ? "" : cell;
      rowElement.appendChild(cellElement);
    });
    boardElement.appendChild(rowElement);
  });

  body.appendChild(boardElement);
}

module.exports = {
  displayGameboard,
};
