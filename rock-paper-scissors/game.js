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
    alert(`You tied! Both of you picked ${playerSelection}`);
    return 0;
  } else if (
    (playerSelectionUpper === "ROCK" &&
      computerSelectionUpper === "SCISSORS") ||
    (playerSelectionUpper === "SCISSORS" &&
      computerSelectionUpper === "PAPER") ||
    (playerSelectionUpper === "PAPER" && computerSelectionUpper === "ROCK")
  ) {
    alert(`You won! ${playerSelectionUpper} beats ${computerSelectionUpper}`);
    return 1;
  } else {
    alert(
      `You lost! ${playerSelectionUpper} loses to ${computerSelectionUpper}`
    );
    return -1;
  }
};

function score(playerScore, computerScore, gameResult) {
  if (gameResult == 1) {
    playerScore++;
  } else if (gameResult == -1) {
    computerScore++;
  }
  return [playerScore, computerScore];
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelectionUpper = prompt(
      "Choose Rock, Paper, or Scissors"
    ).toUpperCase();
    while (!["ROCK", "PAPER", "SCISSORS"].includes(playerSelectionUpper)) {
      playerSelectionUpper = prompt(
        "Not a valid choice - please try again"
      ).toUpperCase();
    }
    let gameResult = playRound(playerSelectionUpper, getComputerChoice());
    [playerScore, computerScore] = score(
      playerScore,
      computerScore,
      gameResult
    );
  }
  alert(`Final score: Player ${playerScore} - Computer ${computerScore}`);
}
