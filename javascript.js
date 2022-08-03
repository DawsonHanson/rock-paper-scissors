let computer;
let player;
let playerScore = 0
let computerScore = 0
let tie = 0

// player input through buttons
const buttonRock = document.querySelector('.button-rock')
const buttonPaper = document.querySelector('.button-paper')
const buttonScissors = document.querySelector('.button-scissors')

buttonRock.addEventListener('click', () => {
  player = 1
  buttonRock.classList.add('button-click')
  buttonPaper.classList.remove('button-click')
  buttonScissors.classList.remove('button-click')
})

buttonPaper.addEventListener('click', () => {
  player = 2
  buttonPaper.classList.add('button-click')
  buttonRock.classList.remove('button-click')
  buttonScissors.classList.remove('button-click')
})

buttonScissors.addEventListener('click', () => {
  player = 3
  buttonScissors.classList.add('button-click')
  buttonRock.classList.remove('button-click')
  buttonPaper.classList.remove('button-click')
})

function computerInput() {
  let randNum = Math.floor((Math.random() * 3) + 1)
  
  switch(randNum) {
    case 1:
      computer = 1
      break;
    case 2:
      computer = 2
      break;
    case 3:
      computer = 3
      break;
  }
}

const playRoundButton = document.querySelector('.play-round-button')

playRoundButton.addEventListener('click', () => {
    computerInput()
    playGame(playRound())
})

const header = document.querySelector('.header')
const secondHeader = document.querySelector('.second-header')

function playRound() {
  let answer = ''
  if (player == 1 && computer == 3) {
    answer = 'win'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Rock Beats Scissors'
  } else if (player == 1 && computer == 2) {
    answer = 'lose'
    header.textContent = 'Defeat!'
    secondHeader.textContent = 'Paper Beats Rock'
  } else if (player == 2 && computer == 1) {
    answer = 'win'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Paper Beats Rock'
  } else if (player == 2 && computer == 3) {
    answer = 'lose'
    header.textContent = 'Defeat!'
    secondHeader.textContent = 'Scissors Beats Paper'
  } else if (player == 3 && computer == 2) {
    answer = 'win'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Scissors Beats Paper'
  } else if (player == 3 && computer == 1) {
    answer = 'lose'
    header.textContent = 'Defeat'
    secondHeader.textContent = 'Rock Beats Scissors'
  } else {
    answer = 'tie'
    header.textContent = 'Draw!'
    secondHeader.textContent = 'No One Wins'
  }
  return answer;
}

function playGame(answer) {

  const playerCounter = document.querySelector('.score-counter-box-player')
  const computerCounter = document.querySelector('.score-counter-box-computer')
  const addImage = document.createElement('div')

  if (answer === 'win') {
    playerScore++;
    addImage.classList.add('score-counter-image')
    computerCounter.appendChild(addImage)
  } else if (answer === 'lose') {
    computerScore++;
    addImage.classList.add('score-counter-image')
    playerCounter.appendChild(addImage)
  } else {
    tie++;
  } 

  if (playerScore === 3) {
    header.textContent = 'Congratulations!'
    secondHeader.textContent = 'You\'ve won!'
    return;
  } 

  if (computerScore === 3) {
    header.textContent = 'My Condolences'
    secondHeader.textContent = 'You\'ve Lost!'
    return;
  } 
}
