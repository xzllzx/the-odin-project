const { Ship } = require("./ship");

const Gameboard = () => {
  let board;
  let shipList = [];

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

  // Total 5 ships for 10*10 board: 1*1, 2*2, 1*3, 1*4 ships - all straight lines
  const placeMultipleShips = (allCoordinates) => {
    for (const [index, coordinateList] of allCoordinates.entries()) {
      try {
        placeOneShip(index, coordinateList);
      } catch (error) {
        throw error;
      }
    }
  };

  const placeOneShip = (index, coordinateList) => {
    try {
      if (
        _validateShipCoordinates(coordinateList, board.length, board[0].length)
      ) {
        for (const [row, col] of coordinateList) {
          board[row][col] = index;
        }
        const newShip = Ship(coordinateList);
        shipList.push(newShip);
      }
    } catch (error) {
      throw error;
    }
  };

  const _validateShipCoordinates = (coordinateList, height, width) => {
    // All coordinates in list must share either a row or a column
    // Whichever is unshared, must be consecutive
    // Cannot be out of range
    coordinateList.sort();

    // Ship is 1x1 only
    if (coordinateList.length <= 1)
      if (_shipCoordinatesWithinBoundary(coordinateList[0], height, width))
        return true;
      else throw new Error("Coordinates are out of bounds");

    // Check if ship is a straight line
    const { isHorizontal, isVertical } = _shipOrientation(coordinateList);
    // If both vertical and horizontal, or neither, then it is not a straight line
    if (isHorizontal === isVertical)
      throw new Error("Coordinates provided are not in a straight line");

    // Check that the columns are consecutive
    const isConsecutive = _shipIsConsecutive(coordinateList, isHorizontal);
    if (!isConsecutive)
      throw new Error("Coordinates provided are not consecutive");

    // Check that ship does not occupy an already occupied spot
    const isOccupied = _shipCellsOccupied(coordinateList);
    if (isOccupied)
      throw new Error("Coordinates have been occupied by another ship");

    // Check if within box boundaries
    if (
      !_shipCoordinatesWithinBoundary(coordinateList[0], height, width) ||
      !_shipCoordinatesWithinBoundary(coordinateList.at(-1), height, width)
    )
      throw new Error("Coordinates are out of bounds");
    else return true;
  };

  const _shipCoordinatesWithinBoundary = (coordinates, height, width) => {
    return (
      coordinates[0] >= 0 &&
      coordinates[0] < height &&
      coordinates[1] >= 0 &&
      coordinates[1] < width
    );
  };

  const _shipOrientation = (coordinateList) => {
    const isHorizontal = coordinateList.every(
      ([row, col]) => row === coordinateList[0][0]
    );
    const isVertical = coordinateList.every(
      ([row, col]) => col === coordinateList[0][1]
    );
    return { isHorizontal, isVertical };
  };

  const _shipIsConsecutive = (coordinateList, isHorizontal) => {
    const rowOrCol = isHorizontal ? 1 : 0;

    coordinateList.sort();

    for (let i = 0; i < coordinateList.length; i++) {
      if (coordinateList[i][rowOrCol] !== coordinateList[0][rowOrCol] + i) {
        return false;
      }
    }
    return true;
  };

  const _shipCellsOccupied = (coordinateList) => {
    const noneOccupied = coordinateList.reduce(
      (noneOccupied, coordinates) =>
        noneOccupied && board[coordinates[0]][coordinates[1]] === -1,
      true
    );

    return !noneOccupied;
  };

  const receiveAttack = (row, col) => {
    row = Number(row);
    col = Number(col);

    try {
      const validAttack = validateAttackCoordinates(
        row,
        col,
        board.length,
        board[0].length
      );
      if (validAttack) {
        const shipId = board[row][col];
        board[row][col] = -2;
        if (shipId !== -1) {
          shipList[shipId].hit();
          return { hit: true, ship: shipList[shipId] };
        }
      }
    } catch (error) {
      throw error;
    }

    return { hit: false, ship: "None" };
  };

  const validateAttackCoordinates = (row, col, height, width) => {
    if (row < 0 || row >= height || col < 0 || col >= width)
      throw new Error("This spot is out-of-bounds");
    if (isNaN(row) || isNaN(col))
      throw new TypeError("Non-numerical input not accepted");
    if (board[row][col] === -2)
      throw new Error("This spot has already been attacked");

    return true;
  };

  return {
    getBoard,
    getShipList,
    getAllShipsSunk,
    createBoard,
    placeMultipleShips,
    placeOneShip,
    receiveAttack,
  };
};

module.exports = {
  Gameboard,
};
