const Gameboard = (allCoordinates) => {
  let board = [];
  const shipList = [];

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

  // For 10*10 board: 4*1, 3*2, 2*3, 1*4 ships - all straight lines
  const placeShips = (allCoordinates) => {
    for (const [index, coordinateList] of allCoordinates.entries()) {
      console.log(coordinateList);
      for (const c of coordinateList) {
        console.log(c);
      }
      // const [row, col] = coordinate;
      // board[row][col] = index;
      const ship = Ship(coordinateList);
      shipList.push(ship);
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
