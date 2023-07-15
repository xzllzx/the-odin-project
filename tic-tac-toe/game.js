const cellElements = document.querySelectorAll(".cell");
const headerDiv = document.querySelector(".turn-header");
const score0 = document.querySelector(".scoreboard > #score-0");
const score1 = document.querySelector(".scoreboard > #score-1");
const errorMessage = document.querySelector(".message#error");
const newGameButton = document.querySelector("button.new-game");
const resetButton = document.querySelector("button.reset-scores");

// Creates game board to store state
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

// Controls game logic
const GameController = (function () {
  const rows = 3,
    cols = 3;
  const player0 = playerFactory(0, 0);
  const player1 = playerFactory(1, 0);
  const players = [player0, player1];

  let activePlayer = 0;
  let gameEnd = 0;

  const getScoreBoard = () => {
    score0.textContent = player0.score;
    score1.textContent = player1.score;
  };

  const triggerWin = (player) => {
    gameEnd = 1;

    headerDiv.textContent = `Player ${player.playerToken} wins!`;

    player.score++;

    getScoreBoard();
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
    errorMessage.classList.add("hidden");

    if (!gameEnd && e.target.textContent == "") {
      const cell = e.target.id.split("-")[1];
      const row = Math.floor(cell / 3);
      const col = cell % 3;
      console.log(cell, row, col);

      Gameboard.setGameBoard(row, col, activePlayer);

      e.target.textContent = players[activePlayer].playerToken;

      toggleActivePlayer();
      checkGameEnd();
    } else if (gameEnd)
      headerDiv.textContent = "Game has already ended - start a new game!";
    else errorMessage.classList.remove("hidden");

    e.stopPropagation();
  };

  const newGame = () => {
    errorMessage.classList.add("hidden");

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
    getScoreBoard();
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
