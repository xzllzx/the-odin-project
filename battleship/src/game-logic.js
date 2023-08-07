const { playerList } = require("./start-game");

function attackPlayer(defenderId, row, col) {
  const defenderBoard = playerList[defenderId].board;
  const { hit, ship } = defenderBoard.receiveAttack(row, col);
  if (hit) {
    console.log("Ship hit!");
    console.log(`Ship type is ${ship.shipType()}`);
    if (ship.isSunk()) console.log("Ship has been sunk!");
  } else console.log("Attack missed!");
}

module.exports = {
  attackPlayer,
};
