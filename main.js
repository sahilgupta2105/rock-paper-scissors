const outcomes = ["rock", "paper", "scissors"]

function computerPlay() {
  return outcomes[Math.floor(Math.random() * 3)]
}

let precedence = new Map();
precedence.set("rock", "paper")
precedence.set("scissors", "rock")
precedence.set("paper", "scissors")

function play(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a Tie!"
  }

  winningSelection = precedence.get(playerSelection.toLowerCase())
  if (winningSelection === computerSelection.toLowerCase()) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }

  return `You Win! ${playerSelection} beats ${computerSelection}`
}

function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    roundResult = play(window.prompt("Enter your move", "rock"), computerPlay())
    console.log(roundResult)
    if (roundResult.includes("Win")) {
      playerScore += 1
    } else if (roundResult.includes("Lose")) {
      computerScore += 1
    }
  }

  console.log(`Game summary: Computer" ${computerScore}, Player: ${playerScore}`)
}

game()
