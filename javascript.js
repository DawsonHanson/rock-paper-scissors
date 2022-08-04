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
    playRoundButton.classList.add('button-click')
    setTimeout(() => {
      playRoundButton.classList.remove('button-click')
    }, 500)
})

const header = document.querySelector('.header')
const secondHeader = document.querySelector('.second-header')

function playRound() {
  let answer = ''
  if (player == 1 && computer == 3) {
    answer = 'win'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Victory!'
      secondHeader.textContent = 'Rock Beats Scissors'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else if (player == 1 && computer == 2) {
    answer = 'lose'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Defeat!'
      secondHeader.textContent = 'Paper Beats Rock'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else if (player == 2 && computer == 1) {
    answer = 'win'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Victory!'
      secondHeader.textContent = 'Paper Beats Rock'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else if (player == 2 && computer == 3) {
    answer = 'lose'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Defeat!'
      secondHeader.textContent = 'Scissors Beats Paper'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else if (player == 3 && computer == 2) {
    answer = 'win'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Victory!'
      secondHeader.textContent = 'Scissors Beats Paper'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else if (player == 3 && computer == 1) {
    answer = 'lose'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Defeat'
      secondHeader.textContent = 'Rock Beats Scissors'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
  } else {
    answer = 'tie'
    header.classList.add('hide-header')
    secondHeader.classList.add('hide-header')
    setTimeout(() => {
      header.textContent = 'Draw!'
      secondHeader.textContent = 'No One Wins'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
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
    setTimeout(() => {
      header.textContent = 'Congratulations!'
      secondHeader.textContent = 'You\'ve won!'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
    setTimeout(() => {
      location.reload()
    }, 2200)
    return;
  } 

  if (computerScore === 3) {
    setTimeout(() => {
      header.textContent = 'My Condolences'
      secondHeader.textContent = 'You\'ve Lost!'
    }, 300)
    setTimeout(() => {
      header.classList.remove('hide-header')
      secondHeader.classList.remove('hide-header')
    }, 300)
    setTimeout(() => {
      location.reload()
    }, 2200)
    return;
  } 
}
