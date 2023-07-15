const cellElements = document.querySelectorAll(".cell");
const headerDiv = document.querySelector(".turn-header");
const scoreboardDiv = document.querySelector(".scoreboard");
const newGameButton = document.querySelector("button.new-game");
const resetButton = document.querySelector("button.reset-scores");

const Gameboard = (function () {
  let gameBoard = [];

  const createGameBoard = (rows, cols) => {
    gameBoard = [];
    for (let i = 0; i < rows; i++) {
      gameBoard.push([]);
      for (let j = 0; j < cols; j++) gameBoard[i].push("");
    }
  };

  const getGameBoard = () => gameBoard;

  const setGameBoard = (row, col, player) => {
    if (gameBoard[row][col] == "") gameBoard[row][col] = player;
  };

  return {
    createGameBoard,
    getGameBoard,
    setGameBoard,
  };
})();

const playerFactory = (playerId, score) => {
  const playerToken = playerId ? "O" : "X";
  return { playerId, playerToken, score };
};

const GameController = (function () {
  const rows = 3,
    cols = 3;
  const player0 = playerFactory(0, 0);
  const player1 = playerFactory(1, 0);
  const players = [player0, player1];

  let activePlayer = 0;
  let gameEnd = 0;

  const getScoreBoard = () => {
    console.log(
      `${player0.playerToken} ${player0.score} - ${player1.playerToken} ${player1.score}`
    );
  };

  const triggerWin = (player) => {
    gameEnd = 1;

    headerDiv.textContent = `Player ${player.playerToken} wins!`;
    scoreboardDiv.textContent = `${
      player.playerToken
    } now has ${++player.score} point${player.score > 1 ? "s" : ""}`;
  };

  const checkGameEnd = () => {
    const currentBoard = Gameboard.getGameBoard();

    // Check both diagonals
    const middle = currentBoard[1][1];
    if (
      (middle === currentBoard[0][0] && middle === currentBoard[2][2]) ||
      (middle === currentBoard[0][2] && middle === currentBoard[2][0])
    )
      if (middle === 0) triggerWin(player0);
      else if (middle === 1) triggerWin(player1);

    // Check every column
    for (let i = 0; i < rows; i++) {
      if (
        currentBoard[0][i] === currentBoard[1][i] &&
        currentBoard[0][i] === currentBoard[2][i]
      ) {
        if (currentBoard[0][i] === 0) triggerWin(player0);
        else if (currentBoard[0][i] === 1) triggerWin(player1);
      }
    }

    // Check every row
    const isZero = (cellValue) => cellValue === 0;
    const isOne = (cellValue) => cellValue === 1;

    currentBoard.forEach((row) => {
      if (row.every(isZero)) triggerWin(player0);
      else if (row.every(isOne)) triggerWin(player1);
    });

    // Check if grid is full
    if (gameEnd === 0)
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (currentBoard[i][j] === "") {
            return;
          }
        }
      }
  };

  const toggleActivePlayer = () => {
    activePlayer = 1 - activePlayer;
    headerDiv.textContent = `Player ${players[activePlayer].playerToken}'s turn`;
  };

  const playMove = (e) => {
    if (!gameEnd && e.target.textContent == "") {
      const cell = e.target.id.split("-")[1];
      const row = Math.floor(cell / 3);
      const col = cell % 3;
      console.log(cell, row, col);

      Gameboard.setGameBoard(row, col, activePlayer);

      e.target.textContent = players[activePlayer].playerToken;

      checkGameEnd();
      toggleActivePlayer();
    } else if (gameEnd) console.log("Game has already ended");
    else console.log("Cell has already been selected");

    e.stopPropagation();
  };

  const newGame = () => {
    Gameboard.createGameBoard(rows, cols);

    headerDiv.textContent = `Player ${players[activePlayer].playerToken}'s turn`;

    gameEnd = 0;

    cellElements.forEach((element) => {
      element.textContent = "";
    });
  };

  const resetScore = () => {
    player0.score = 0;
    player1.score = 0;
  };

  return { playMove, getScoreBoard, newGame, resetScore };
})();

const initialSetup = (function () {
  GameController.newGame();

  cellElements.forEach((element) => {
    element.addEventListener("click", GameController.playMove);
  });

  newGameButton.addEventListener("click", GameController.newGame);

  resetButton.addEventListener("click", GameController.resetScore);
})();
