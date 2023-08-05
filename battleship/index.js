const Ship = (coordinateList) => {
  let length = coordinateList.length;
  let timesHit = 0;

  const hit = () => {
    timesHit++;
  };
  const isSunk = () => {
    return timesHit >= length;
  };
  return { hit, isSunk };
};

const Gameboard = (allCoordinates) => {
  const board = [];
  const shipList = [];

  const createBoard = (height, width) => {
    for (let i = 0; i < height; i++) {
      const row = [];

      for (let j = 0; j < width; j++) {
        row.push(-1);
      }
      board.push(row);
    }
  };

  // 4*1, 3*2, 2*3, 1*4 ships - all straight lines
  const placeShips = (allCoordinates) => {
    for (const [index, coordinateList] of allCoordinates.entries()) {
      coordinateList.forEach(([row, col]) => {
        board[row][col] = index;
      });
      const ship = new Ship(coordinateList);
      shipList.push(ship);
    }
  };

  const receiveAttack = (row, col) => {
    if (coordinatesInShip) return true;
  };

  return { board, createBoard, placeShips, receiveAttack };
};

const Player = () => {};

module.exports = {
  Ship,
  Gameboard,
  Player,
};
