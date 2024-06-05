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

//Play a round of RPS
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            return printTie(humanChoice);
        }
        if (computerChoice === "Paper") {
            return printLoss(computerChoice, humanChoice);
        }
        if (computerChoice === "Scissors") {
            return printWin(humanChoice, computerChoice);
        }
    }
}

//Print tie
function printTie(choice) {
    console.log(`You tie! ${choice} equals ${choice}.`);
}

//Print loss
function printLoss(winnerChoice, loserChoice) {
    console.log(`You lose! ${winnerChoice} beats ${loserChoice}.`);
}

//Print win
function printWin(winnerChoice, loserChoice) {
    console.log(`You win! ${winnerChoice} beats ${loserChoice}.`);
}


//Play single round of RPS
let hC = getHumanChoice();
let cC = getComputerChoice();
playRound(hC, cC);

