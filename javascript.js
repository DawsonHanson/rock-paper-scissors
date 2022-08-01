console.log ('test!')

let computer;
let player;

// player input through buttons
const buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click', () => {
  player = Number(button.accessKey);
  console.log(player)
  console.log(typeof player)
}))

// function for computer input
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

// play a round and use result in another function
const playRoundButton = document.querySelector('.play-round-button')

playRoundButton.addEventListener('click', () => {
  computerInput()
  console.log(computer)
  console.log(typeof computer)
  result();
})

function result() {
  let answer = ''
  if (player == 1 && computer == 3) {
    answer = 'Victory! Rock Beats Scissors'
  } else if (player == 1 && computer == 2) {
    answer = 'Defeat! Paper Beats Rock'
  } else if (player == 2 && computer == 1) {
    answer = 'Victory! Paper Beats Rock'
  } else if (player == 2 && computer == 3) {
    answer = 'Defeat! Scissors Beats Paper'
  } else if (player == 3 && computer == 2) {
    answer = 'Victory! Scissors Beats Paper'
  } else if (player == 3 && computer == 1) {
    answer = 'Defeat! Rock Beats Scissors'
  } else {
    answer = 'Draw!'
  }
  console.log(answer)
  return answer;
}