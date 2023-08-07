const { playerList } = require("./start-game");

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
  } else switchTurn();
}

function switchTurn() {
  const turnDiv = document.querySelector(".turn");
  currentPlayerId = currentPlayerId ? 0 : 1;
  turnDiv.textContent = `${playerList[currentPlayerId].playerName}'s turn`;
}

function triggerGameEnd() {
  return `Congratulations, all ships have been sunk! ${playerList[defenderId].playerName} has won!`;
}

module.exports = {
  attackPlayer,
};
