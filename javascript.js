console.log ('test!')

let playerScore = 0
let computerScore = 0
let tie = 0

// input (prompt) from player to pick rock, paper, scissors 

function playerSelect () {
  let question = prompt ('Rock Paper or Scissors?')
  let answer = question.toUpperCase ()
  return answer;
}

// function for computer to pick rock, paper, scissors at random 

function computerSelect () {
  let array = ['ROCK', 'PAPER', 'SCISSORS']
  let randomArray = Math.floor((Math.random() *array.length));
  let randomAnswer = array[randomArray];
  return randomAnswer;
}

// function (if...elseif) to determine victor

function playRound () {
  const playerSelection = playerSelect()
  const computerSelection = computerSelect()
  console.log(computerSelection)
  let answer = ''
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log ('You won! Rock beats Scissors')
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    console.log ('You lost! Paper beats Rock')
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    console.log ('You won! Paper beats Rock')
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log ('You lost! Scissors beats Paper')
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log ('You won! Scissors beats Paper')
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log ('You lost! Rock beats Scissors')
  } else {
    console.log ('Tie! no one wins')
  }
  return answer;
}

// function/ loop to play a max of 5 rounds

function game () {
  for (let x = 0; x < 5; x++) {
    gameScore()
    console.log (playerScore)
    console.log (computerScore)
    console.log (tie)
  }
}

console.log (game())

// function to keep score and display message once game is done

function gameScore () {
  let answer = (playRound());
  if (answer === 'You won! Rock beats Scissors' || answer === 'You won! Paper beats Rock' || answer === 'You won! Scissors beats Paper') {
    playerScore++;
  } else if (answer === 'You lost! Paper beats Rock' || answer === 'You lost! Scissors beats Paper' || answer === 'You lost! Rock beats Scissors') {
    computerScore++;
  } else {
    tie++;
  } 
}