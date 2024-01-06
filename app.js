const options = ["rock", "paper", "scissors"];

let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It is a Tie";
  } else if (result == "Player") {
    scorePlayer++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    scoreComputer++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  document.getElementById(
    "score"
  ).innerText = `Player: ${scorePlayer} | Computer: ${scoreComputer}`;
}

function updateResult(message) {
  document.getElementById("result").innerText = message;
}

function handleButtonClick(choice) {
  const computerSelection = getComputerChoice();
  const resultMessage = playRound(choice, computerSelection);

  updateResult(resultMessage);
  updateScore();

  if (scorePlayer == 5 || scoreComputer == 5) {
    endGame();
  }
}

function endGame() {
  let gameElementStatus = document.getElementById("game-status");
  if (scorePlayer > scoreComputer) {
    gameElementStatus.innerText = "You win the game ⚡";
  } else {
    gameElementStatus.innerText = "You lose the game 😭";
  }
  scorePlayer = 0;
  scoreComputer = 0;
  updateScore();
}

document
  .getElementById("rock")
  .addEventListener("click", () => handleButtonClick("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => handleButtonClick("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => handleButtonClick("scissors"));
```
```;
