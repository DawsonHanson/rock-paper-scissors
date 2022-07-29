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
    answer = 'You won! Rock beats Scissors'
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    answer = 'You lost! Paper beats Rock'
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    answer = 'You won! Paper beats Rock'
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    answer = 'You lost! Scissors beats Paper'
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    answer = 'You lost! Scissors beats Paper'
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    answer = 'You lost! Scissors beats Paper'
  } else {
    answer = 'Tie! no one wins'
  }
  return answer;
}

// function/ loop to play a game until player/computer reach 3 points

function game () {
  for (let x = 0; x < 100; x++) {
    gameScore()
    console.log (playerScore)
    console.log (computerScore)
    console.log (tie)
    if (playerScore === 3 || computerScore === 3) {
      break;
    } 
  } 
}

console.log (game())

// function to keep score and display message once game is done

function gameScore () {
  let answer = playRound()
  if (answer === 'You won! Rock beats Scissors' || answer === 'You won! Paper beats Rock' || answer === 'You won! Scissors beats Paper') {
    playerScore++;
  } else if (answer === 'You lost! Paper beats Rock' || answer === 'You lost! Scissors beats Paper' || answer === 'You lost! Rock beats Scissors') {
    computerScore++;
  } else {
    tie++;
  } 

  if (playerScore === 3) {
    console.log ('Congratulations! You\'ve won!')
  } 

  if (computerScore === 3) {
    console.log ('Computer won the game! if only you were smarter')
  } 
}