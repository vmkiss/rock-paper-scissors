//Get computer's move

function getComputerChoice(){
    computerChoice = Math.random()
    
    if (computerChoice < (1/3)) {
       computerChoice = "Rock"; 
    } else if (computerChoice > (2/3)) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice
}

for (i = 0; i < 11; ++i){
    console.log(getComputerChoice())
}
    
