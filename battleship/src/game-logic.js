const { playerList } = require("./start-game");

let shipCount = 0;
let currentPlayerId = 0;

function attackPlayer(defenderId, row, col) {
  const gameStateDiv = document.querySelector(".game-state");
  const defenderBoard = playerList[defenderId].board;
  let gameStateText = "";
  const { hit, ship } = defenderBoard.receiveAttack(row, col);
  if (hit) {
    gameStateText += `${ship.shipType()} has been hit! `;
    if (ship.isSunk()) gameStateText += "Ship has been sunk! ";
  } else gameStateText += "Attack missed! ";

  gameStateDiv.textContent = gameStateText;

  if (defenderBoard.getAllShipsSunk()) {
    gameStateText = triggerGameEnd();
    gameStateDiv.textContent = gameStateText;
  } else {
    switchTurn();
    return true;
  }
}

function computerAttack() {
  let row = Math.floor(Math.random() * 10);
  let col = Math.floor(Math.random() * 10);

  while (!attackPlayer(0, row, col)) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    attackPlayer(0, row, col);
  }

  const targetCell = document.querySelector(`.row-${row} > .col-${col}`);
  targetCell.classList.add("attacked");

  console.log(`Computer turn over: Attacked ${row}, ${col}`);
}

function switchTurn() {
  const turnDiv = document.querySelector(".turn");
  currentPlayerId = currentPlayerId ? 0 : 1;
  turnDiv.textContent = `${playerList[currentPlayerId].playerName}'s turn`;

  if (currentPlayerId === 1) {
    setTimeout(() => {
      turnDiv.textContent = `Computer is thinking...`;
    }, 500);
    setTimeout(computerAttack, 3000);
  }
}

function triggerGameEnd() {
  return `Congratulations, all ships have been sunk! ${playerList[defenderId].playerName} has won!`;
}

function placeCells(coordinateList, divList) {
  const validPlacement = _validatePlacement(coordinateList);

  if (validPlacement) {
    // Add class to relevant cells
    divList.forEach((element) => {
      if (element) element.classList.add("player-ship");
    });
    return true;
  } else {
    return false;
  }
}

function _validatePlacement(coordinateList) {
  const board = playerList[0].board;
  const validPlacement = board.placeOneShip(shipCount, coordinateList);
  shipCount++;
  console.log(board.getBoard());
  return true;
}

module.exports = {
  attackPlayer,
  placeCells,
};
