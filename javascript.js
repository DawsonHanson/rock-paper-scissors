console.log ('test!')

// input (prompt) from player to pick rock, paper, scissors 
function playerSelect () {
  let question = prompt ('Rock Paper or Scissors?')
  let answer = question.toUpperCase ()
  return answer;
}
console.log (playerSelect ())

// function for computer to pick rock, paper, scissors at random 

function computerSelect () {
  let array = ['ROCK', 'PAPER', 'SCISSORS']
  let randomArray = Math.floor((Math.random() *array.length));
  let randomAnswer = array[randomArray];
  return randomAnswer;
}
console.log (computerSelect())

// function (if...elseif) to determine victor
// output (message) if player won or lost round
// function/ loop to play a max of 5 rounds
// output (message) if player won or lost game
// function to restart game when finished