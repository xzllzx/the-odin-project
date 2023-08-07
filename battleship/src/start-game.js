const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");
const { Player } = require("./player");

function initGame(height, width) {
  // Create 2 Players with a Gameboard each
  const player0 = createPlayer(height, width, 0);
  const player1 = createPlayer(height, width, 1);

  return { player0, player1 };
}

function createPlayer(height, width, playerId) {
  const gameBoard = Gameboard();
  gameBoard.createBoard(height, width);

  const player = Player(gameBoard, playerId);

  return player;
}

function placeShipsPredetermined(player) {
  const coordinateList = [
    [[0, 0]],
    [
      [2, 0],
      [2, 1],
    ],
    [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
    [
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
    ],
  ];
  player.board.placeShips(coordinateList);
}

function attack(player, coordinates) {}

module.exports = {
  initGame,
  placeShipsPredetermined,
};
