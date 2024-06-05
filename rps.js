let humanScore = 0; //tracks human player's total score
let computerScore = 0; //tracks computer's total score

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
            ++humanScore;
            ++computerScore;
            return printTie(humanChoice);
        }
        if (computerChoice === "Paper") {
            ++computerScore;
            return printLoss(computerChoice, humanChoice);
        }
        if (computerChoice === "Scissors") {
            ++humanScore;
            return printWin(humanChoice, computerChoice);
        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            ++humanScore;
            return printWin(humanChoice, computerChoice);
        }
        if (computerChoice == "Paper") {
            ++humanScore;
            ++computerScore;
            return printTie(humanChoice);
        }
        if (computerChoice == "Scissors") {
            ++computerScore;
            return printLoss(computerChoice, humanChoice);
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            ++computerScore;
            return printLoss(computerChoice, humanChoice);
        }
        if (computerChoice == "Paper") {
            ++humanScore;
            return printWin(humanChoice, computerChoice);
        }
        if (computerChoice == "Scissors") {
            ++humanScore;
            ++computerScore;
            return printTie(humanChoice);
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
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

