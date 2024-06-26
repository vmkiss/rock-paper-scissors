let humanScore = 0; //tracks human player's total score
let computerScore = 0; //tracks computer's total score
let humanScoreDiv = document.querySelector(".human");
let computerScoreDiv = document.querySelector(".computer")


//Create div to hold results message and append to results div
let resultMsg = document.createElement("div");
let resultDiv = document.querySelector(".results");
resultDiv.appendChild(resultMsg);

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

//Display human and computer scores
function displayScores() {
    humanScoreDiv.textContent = `Human Score: ${humanScore.toString()}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore.toString()}`;
}

//Print tie
function printTie(choice) {
    //console.log(`You tie! ${choice} equals ${choice}.`);
    resultMsg.textContent = `You tie! ${choice} equals ${choice}.`;
    displayScores();
    displayWinner();
}

//Print loss
function printLoss(winnerChoice, loserChoice) {
    //console.log(`You lose! ${winnerChoice} beats ${loserChoice}.`);
    resultMsg.textContent = `You lose! ${winnerChoice} beats ${loserChoice}.`;
    displayScores();
    displayWinner();
}

//Print win
function printWin(winnerChoice, loserChoice) {
    //console.log(`You win! ${winnerChoice} beats ${loserChoice}.`);
    resultMsg.textContent = `You win! ${winnerChoice} beats ${loserChoice}.`;
    displayScores();
    displayWinner();
}

//Display winner if either player has a score of 5
function displayWinner() {
    if (computerScore === 5 || humanScore === 5) {
        winnerDiv = document.createElement("div");
        resultDiv.appendChild(winnerDiv);
        winnerDiv.style.color = "red";
        winnerDiv.style.fontWeight = "bold";

        if (computerScore === 5) {
            winnerDiv.textContent = "Computer Won! Click the New Game button to play again."
        } else {
            winnerDiv.textContent = "You won! Click the New Game button to play again."
        }
    }
}

//Play RPS if player selects rock
rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
    let cC = getComputerChoice();
    playRound("Rock", cC);
})

//Play RPS if player selects paper
paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
    let cC = getComputerChoice();
    playRound("Paper", cC);
})

//Play RPS if player selects scissors
scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
    let cC = getComputerChoice();
    playRound("Scissors", cC);
})

//Reset scores and results div if player clicks new game button
newGameBtn = document.querySelector("#new-game-btn");
newGameBtn.addEventListener("click", () => {
    humanScore = 0;
    humanScoreDiv.textContent = "Human Score: 0";
    computerScore = 0;
    computerScoreDiv.textContent = "Computer Score: 0";
    winnerDiv.remove();
    resultMsg.textContent = "";
})