const index = require("./index");

// SHIP
describe("Ship factory function", () => {
  it("Ship sinks after sufficient hits, but not before", () => {
    const ship = index.Ship([
      [2, 1],
      [3, 1],
    ]);
    expect(ship).toBeDefined();

    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});

// GAME BOARD
describe("Game Board factory function", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = index.Gameboard();
  });

  it("Create 2x3 game board", () => {
    expect(gameBoard).toBeDefined();
    gameBoard.createBoard(2, 3);
    expect(gameBoard.getBoard()).toEqual([
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
  });

  it("Non-numerical game board dimensions", () => {
    expect(() => {
      gameBoard.createBoard("A", 3);
    }).toThrow(TypeError);
  });

  it("Invalid (less than 1) game board dimensions", () => {
    expect(() => {
      gameBoard.createBoard(-1, 3);
    }).toThrow(Error("Dimensions cannot be less than 1"));
  });
});
