function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    /* random choice */
    let computerPlay = Math.floor(Math.random() * 3);
    return computerPlay;
}

function oneRoundSim(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection===computerSelection) {
        return "You tied";
    }

    if(playerSelection==="rock") {
        if(computerSelection ==="paper") {
            return `You lost LOL, ${}`
        }
    }
}