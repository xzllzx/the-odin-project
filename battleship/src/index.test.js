const { Ship } = require("./ship");
const { Gameboard } = require("./gameboard");
const { Player } = require("./player");

// SHIP
describe("Ship", () => {
  it("Ship sinks after sufficient hits, but not before", () => {
    const ship = Ship([
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
describe("Game Board", () => {
  let gameBoard;

  beforeAll(() => {
    gameBoard = Gameboard();
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

  describe("Placing Ships on 4x4 Game Board", () => {
    beforeAll(() => {
      gameBoard.createBoard(4, 4);
    });

    it("Place 1 ship on game board", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
      ]);

      expect(gameBoard.getBoard()).toEqual([
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [0, -1, -1, -1],
        [0, -1, -1, -1],
      ]);

      expect(gameBoard.getShipList().length).toEqual(1);
    });

    it("Place 2 ships on game board", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
        [
          [2, 1],
          [2, 2],
          [2, 3],
        ],
      ]);

      expect(gameBoard.getBoard()).toEqual([
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [0, 1, 1, 1],
        [0, -1, -1, -1],
      ]);

      expect(gameBoard.getShipList().length).toEqual(2);
    });

    it("Reject ships beyond box boundaries", () => {
      expect(() => {
        gameBoard.placeShips([[[3, 9]]]);
      }).toThrow();
    });

    it("Reject ships beyond box boundaries 2", () => {
      expect(() => {
        gameBoard.placeShips([
          [
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
          ],
        ]);
      }).toThrow();
    });

    it("Reject non-straight ships", () => {
      expect(() => {
        gameBoard.placeShips([
          [
            [2, 1],
            [2, 2],
            [3, 2],
          ],
        ]);
      }).toThrow();
    });

    it("Reject ships with gap", () => {
      expect(() => {
        gameBoard.placeShips([
          [
            [2, 1],
            [2, 2],
            [3, 2],
          ],
        ]);
      }).toThrow();
    });

    it("Reject ships in already occupied spots", () => {
      expect(() => {
        gameBoard.placeShips([
          [
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        ]);

        gameBoard.placeShips([
          [
            [1, 2],
            [2, 2],
            [3, 2],
          ],
        ]);
      }).toThrow();
    });
  });

  describe("Receiving ship attacks", () => {
    beforeAll(() => {
      gameBoard.createBoard(4, 4);
    });

    it("Register a hit / miss", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
      ]);

      expect(gameBoard.receiveAttack(2, 0).hit).toEqual(true);
      expect(gameBoard.receiveAttack(1, 0).hit).toEqual(false);
    });

    it("Reject attacks at previously selected coordinates", () => {
      expect(() => {
        gameBoard.receiveAttack(2, 0);
        gameBoard.receiveAttack(2, 0);
      }).toThrow();
    });

    it("Reject attacks at previously selected coordinates 2", () => {
      expect(() => {
        gameBoard.receiveAttack(1, 0);
        gameBoard.receiveAttack(1, 0);
      }).toThrow();
    });

    it("Reject attacks at non-numerical coordinates", () => {
      expect(() => {
        gameBoard.receiveAttack("A", 3);
      }).toThrow(TypeError);
    });

    it("Reject attacks outside of board area", () => {
      expect(() => {
        gameBoard.receiveAttack(4, 5);
      }).toThrow();
    });

    it("Ship does not sink before sufficient hits", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
      ]);

      gameBoard.receiveAttack(2, 0);

      expect(gameBoard.getAllShipsSunk()).toEqual(false);
    });

    it("Ship sinks after sufficient hits", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
      ]);

      gameBoard.receiveAttack(2, 0);
      gameBoard.receiveAttack(3, 0);

      expect(gameBoard.getAllShipsSunk()).toEqual(true);
    });

    it("One ship sunk, but not all", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
        [
          [2, 1],
          [2, 2],
          [2, 3],
        ],
      ]);

      gameBoard.receiveAttack(2, 0);
      gameBoard.receiveAttack(3, 0);

      expect(gameBoard.getAllShipsSunk()).toEqual(false);
    });

    it("All ships sunk", () => {
      gameBoard.placeShips([
        [
          [2, 0],
          [3, 0],
        ],
        [
          [2, 1],
          [2, 2],
          [2, 3],
        ],
      ]);

      gameBoard.receiveAttack(2, 0);
      gameBoard.receiveAttack(3, 0);

      gameBoard.receiveAttack(2, 1);
      gameBoard.receiveAttack(2, 2);
      gameBoard.receiveAttack(2, 3);

      expect(gameBoard.getAllShipsSunk()).toEqual(true);
    });
  });

  describe("filler", () => {});
});

// GAME BOARD
describe("Player", () => {});
