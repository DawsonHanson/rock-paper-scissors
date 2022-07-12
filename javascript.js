console.log ('test!')

const playerSelection = playerSelect()
const computerSelection = computerSelect()
console.log (typeof playerSelection)
console.log (typeof computerSelection)

// input (prompt) from player to pick rock, paper, scissors 

function playerSelect () {
  let question = prompt ('Rock Paper or Scissors?')
  let answer = question.toUpperCase ()
  return answer;
}
console.log (typeof playerSelect)


// function for computer to pick rock, paper, scissors at random 

function computerSelect () {
  let array = ['ROCK', 'PAPER', 'SCISSORS']
  let randomArray = Math.floor((Math.random() *array.length));
  let randomAnswer = array[randomArray];
  return randomAnswer;
}
console.log (typeof computerSelect)

// function (if...elseif) to determine victor

function playRound () {
  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    alert ('You won! Rock beats Scissors')
  } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    alert ('You lost! Paper beats Rock')
  } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    alert ('You won! Paper beats Rock')
  } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    alert ('You lost! Scissors beats Paper')
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    alert ('You won! Scissors beats Paper')
  } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    alert ('You lose! Rock beats Scissors')
  } else {
    alert ('Tie! no one wins')
  }
}
console.log (playRound())
console.log (playerSelection)
console.log (computerSelection)

// function/ loop to play a max of 5 rounds

function game () {
  for (let score = 1; score < 5; score++) {

  }
}
console.log (game())

// output (message) if player won or lost game
// function to restart game when finished