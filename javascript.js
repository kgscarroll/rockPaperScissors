let computerSelection = 'nothing';

function getComputerChoice () {
let choices = ['Rock', 'Paper', 'Scissors'];
let random = Math.floor(Math.random() * choices.length);
let computerSelection = choices[random];
return computerSelection;
}


function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
    (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
    (playerSelection == 'PAPER' && computerSelection == 'ROCK')
  ) {
    return message = ('YOU WIN! ' + playerSelection + ' beats ' + computerSelection + '!');
    
    
  } else if (playerSelection == computerSelection) {
    return message = 'YOU TIED!'
    
  } else {
    return message = ('YOU LOSE! ' + playerSelection + ' loses to ' + computerSelection + '!');
    
  }
}

function game() {
    for(let i = 0; i < 5; i++; let x=0; let y=0;) {
        let playerSelection = prompt('Choose Rock, Paper, or Scissors').toUpperCase();
        if ((playerSelection) == 'ROCK' ||playerSelection == 'SCISSORS' || playerSelection == 'PAPER') {
            let message = playRound(playerSelection, computerSelection);
            console.log(message);
            if (message.includes("WIN")) {
                x++;
            }  else if (message.includes("LOSE")) {
                y++
            } 
            score = x + '-' + y;
            console.log(score);
             

    
        } else {
            let playerSelection = parseInt(prompt('Try again! Choose Rock, Paper, or Scissors'));
        }
    }
    
}