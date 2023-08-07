const { displayGameboard } = require("./display-gameboard");
const { initGame, placeShipsPredetermined } = require("./start-game");

function initialDisplay() {
  const { player0, player1 } = initGame(10, 10);
  placeShipsPredetermined(player0);
  placeShipsPredetermined(player1);

  displayGameboard(player0.board);
}

module.exports = {
  initialDisplay,
};
