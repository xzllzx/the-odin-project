const {
  displayGameboard,
  addAllAttackListeners,
} = require("./display-gameboard");
const { addShipMouseoverListeners } = require("./display-ship-placement");
const { initGame, placeShipsPredetermined } = require("./start-game");

function initialDisplay() {
  const { player0, player1 } = initGame(10, 10);
  // placeShipsPredetermined(player0);
  placeShipsPredetermined(player1);

  displayGameboard(player0.board, 0);
  displayGameboard(player1.board, 1);
}

document.addEventListener("DOMContentLoaded", function () {
  // Your code using document.querySelector() here
  addAllAttackListeners(1);
  addShipMouseoverListeners(1);
});

module.exports = {
  initialDisplay,
};
