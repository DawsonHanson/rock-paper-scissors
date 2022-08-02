let computer;
let player;
let playerScore = 0
let computerScore = 0
let tie = 0

// player input through buttons
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', () => {
  player = Number(button.accessKey);
}))

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
    answer = 'Victory! Rock Beats Scissors'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Rock Beats Scissors'
  } else if (player == 1 && computer == 2) {
    answer = 'Defeat! Paper Beats Rock'
    header.textContent = 'Defeat!'
    secondHeader.textContent = 'Paper Beats Rock'
  } else if (player == 2 && computer == 1) {
    answer = 'Victory! Paper Beats Rock'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Paper Beats Rock'
  } else if (player == 2 && computer == 3) {
    answer = 'Defeat! Scissors Beats Paper'
    header.textContent = 'Defeat!'
    secondHeader.textContent = 'Scissors Beats Paper'
  } else if (player == 3 && computer == 2) {
    answer = 'Victory! Scissors Beats Paper'
    header.textContent = 'Victory!'
    secondHeader.textContent = 'Scissors Beats Paper'
  } else if (player == 3 && computer == 1) {
    answer = 'Defeat! Rock Beats Scissors'
    header.textContent = 'Defeat'
    secondHeader.textContent = 'Rock Beats Scissors'
  } else {
    answer = 'Draw!'
    header.textContent = 'Draw!'
    secondHeader.textContent = 'No One Wins'
  }
  return answer;
}

function playGame(answer) {

  const playerCounter = document.querySelector('.score-counter-box-player')
  const computerCounter = document.querySelector('.score-counter-box-computer')
  const addImage = document.createElement('div')

  if (answer === 'Victory! Rock Beats Scissors' || answer === 'Victory! Paper Beats Rock' || answer === 'Victory! Scissors Beats Paper') {
    playerScore++;
    addImage.classList.add('score-counter-image')
    computerCounter.appendChild(addImage)
  } else if (answer === 'Defeat! Paper Beats Rock' || answer === 'Defeat! Scissors Beats Paper' || answer === 'Defeat! Rock Beats Scissors') {
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
