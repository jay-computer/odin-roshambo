function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    /* random choice */
    let computerPlay = Math.floor(Math.random() * 3);
    return plays[computerPlay];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection===computerSelection) {
        return `You tied with computer, ${playerSelection} vs ${computerSelection}`;
    }

    /* Losing Combos */
    if((playerSelection==="rock" && computerSelection ==="paper") || (playerSelection==="paper" && computerSelection ==="scissors") || (playerSelection==="scissors" && computerSelection ==="rock")) {
        return `You lost LOL, the computer's ${computerSelection} beat your ${playerSelection}.`;
    }

    /* Winning Combos */
    if((computerSelection==="rock" && playerSelection ==="paper") || (computerSelection==="paper" && playerSelection ==="scissors") || (computerSelection==="scissors" && playerSelection ==="rock")) {
        return `You won, your ${playerSelection} beat the computer's ${computerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));