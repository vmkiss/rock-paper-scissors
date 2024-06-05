//Get computer's move
function getComputerChoice(){
    let computerChoice = Math.random()
    
    if (computerChoice < (1/3)) {
       computerChoice = "Rock"; 
    } else if (computerChoice > (2/3)) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

//Get human player's move
function getHumanChoice() {
    let humanChoice = "None";
    do {
        humanChoice = prompt("Rock, Paper, or Scissors?:");
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    }
    while (humanChoice != "Rock" && humanChoice != "Paper" &&
            humanChoice != "Scissors");
    
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
