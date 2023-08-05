const { Ship } = require("./ship");

const Gameboard = (allCoordinates) => {
  let board;
  let shipList;

  // GET functions
  const getBoard = () => {
    return board;
  };

  const getShipList = () => {
    return shipList;
  };

  const getAllShipsSunk = () => {
    return shipList.reduce((allSunk, ship) => allSunk && ship.isSunk(), true);
  };

  const createBoard = (height, width) => {
    board = [];
    height = Number(height);
    width = Number(width);
    if (height >= 1 && width >= 1) {
      for (let i = 0; i < height; i++) {
        const row = [];

        for (let j = 0; j < width; j++) {
          row.push(-1);
        }
        board.push(row);
      }
      return board;
    } else if (isNaN(height) || isNaN(width))
      throw new TypeError("Not a number");
    else if (height < 1 || width < 1) {
      throw new Error("Dimensions cannot be less than 1");
    }
  };

  const checkValidCoordinates = (coordinateList, height, width) => {
    // All coordinates in list must share either a row or a column
    // Whichever is unshared, must be consecutive
    // Cannot be out of range
    let sortedList;

    if (coordinateList.length <= 1) return true;

    // If it is both vertical and horizontal, or neither, then it is not a straight line
    const isHorizontal = coordinateList.every(
      (row) => row === coordinateList[0][0]
    );
    const isVertical = coordinateList.every(
      (col) => col === coordinateList[0][1]
    );
    if (isHorizontal === isVertical)
      throw new Error("Coordinates provided are not in a straight line");

    // Check that the columns are consecutive
    if (isHorizontal) sortedList = coordinateList.map(([row, col]) => col);
    else if (isVertical) sortedList = coordinateList.map(([row, col]) => row);

    sortedList.sort();

    for (let i = 0; i < sortedList.length; i++) {
      if (sortedList[i] !== sortedList[0] + i) {
        throw new Error("Coordinates provided are not consecutive");
      }
    }

    return true;
  };

  // For 10*10 board: 4*1, 3*2, 2*3, 1*4 ships - all straight lines
  const placeShips = (allCoordinates) => {
    shipList = [];
    for (const [index, coordinateList] of allCoordinates.entries()) {
      try {
        if (checkValidCoordinates(coordinateList, height, width)) {
          for (const [row, col] of coordinateList) {
            board[row][col] = index;
          }
          const newShip = Ship(coordinateList);
          shipList.push(newShip);
        }
      } catch (error) {
        throw error;
      }
    }
  };

  const receiveAttack = (row, col) => {
    if (coordinatesInShip) return true;
  };

  return {
    getBoard,
    getShipList,
    getAllShipsSunk,
    createBoard,
    placeShips,
    receiveAttack,
  };
};

module.exports = {
  Gameboard,
};
