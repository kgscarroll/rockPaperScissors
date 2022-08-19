function getComputerChoice () {
let choices = ['Rock', 'Paper', 'Sciccors'];
let random = Math.floor(Math.random() * choices.length);
let computerChoice = choices[random]
console.log (random, choices[random])   
}

getComputerChoice();
