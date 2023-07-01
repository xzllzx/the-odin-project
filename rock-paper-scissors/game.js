const finalResultDiv = document.querySelector("#final");
const resultDiv = document.querySelector("#current");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", sendSelection);
});

let playerScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

let playRound = (playerSelection, computerSelection) => {
  let playerSelectionUpper = playerSelection.toUpperCase();
  let computerSelectionUpper = computerSelection.toUpperCase();
  if (playerSelectionUpper == computerSelectionUpper) {
    resultDiv.textContent = `You tied! Both of you picked ${playerSelection}`;
    return 0;
  } else if (
    (playerSelectionUpper === "ROCK" &&
      computerSelectionUpper === "SCISSORS") ||
    (playerSelectionUpper === "SCISSORS" &&
      computerSelectionUpper === "PAPER") ||
    (playerSelectionUpper === "PAPER" && computerSelectionUpper === "ROCK")
  ) {
    resultDiv.textContent = `You won! ${playerSelectionUpper} beats ${computerSelectionUpper}`;
    return 1;
  } else {
    resultDiv.textContent = `You lost! ${playerSelectionUpper} loses to ${computerSelectionUpper}`;
    return -1;
  }
};

function score(playerScore, computerScore, gameResult) {
  if (gameResult == 1) {
    playerScore++;
    console.log([playerScore, computerScore]);
  } else if (gameResult == -1) {
    computerScore++;
  }
  return [playerScore, computerScore];
}

function gameEnds() {
  if (playerScore > computerScore) finalResultDiv.textContent = `Player wins!`;
  else finalResultDiv.textContent = `Computer wins!`;
  btns.forEach((btn) => {
    btn.removeEventListener("click", sendSelection);
  });
}

function sendSelection(e) {
  const playerSelectionUpper = e.target.id.toUpperCase();
  let gameResult = playRound(playerSelectionUpper, getComputerChoice());
  console.log(gameResult);
  [playerScore, computerScore] = score(playerScore, computerScore, gameResult);
  console.log(playerScore, computerScore);
  if (playerScore < 5 && computerScore < 5) {
    finalResultDiv.textContent = `Current Score: Player ${playerScore} - Computer ${computerScore}`;
  } else gameEnds();
}
