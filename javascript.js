let computerSelection = 'nothing';

function getComputerChoice () {
let choices = ['Rock', 'Paper', 'Scissors'];
let random = Math.floor(Math.random() * choices.length);
let computerSelection = choices[random];
return computerSelection;
}

computerSelection = getComputerChoice();

let playerSelection = prompt('Choose Rock, Paper, or Scissors');
if (playerSelection.toUpperCase(playerSelection) == 'ROCK' ||playerSelection.toUpperCase() == 'SCISSORS' || playerSelection.toUpperCase() == 'PAPER') {
    game(computerSelection, playerSelection);
} else {
    let playerSelection = parseInt(prompt('Try again! Choose Rock, Paper, or Scissors'));
}

function game() {
    console.log('working');
}