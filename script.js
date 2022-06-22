function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    /* random choice */
    let computerPlay = Math.floor(Math.random() * 3);
    return plays[computerPlay];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection==computerSelection) {
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

function game() {
    /*
    let results = new Array(5);
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Rock, paper, or scissors?");
        results[i] = playRound(choice, computerPlay());

        console.log(results[i]);

        if (results[i].includes("won")) {
            playerWins = playerWins + 1;
            
        }
        if (results[i].includes("lost")) {
            computerWins = computerWins + 1;
        }
        
    }
    if(playerWins > 2) {
        console.log("playerWins: " + playerWins);
        return "You won out of five times!";
    }
    if (computerWins > 2) {
        console.log("computerWins: " + computerWins);
        return "You lost out of five times!";
    }
    if (playerWins == computerWins) {
        console.log("playerWins: " + playerWins);
        console.log("computerWins: " + computerWins);
        return "You and the computer tied."
    }
    */
    
}
const batton = document.querySelectorAll(".on");
let results = new Array(5);
let playerWins = 0;
let computerWins = 0;
let iterations = 0;

function removeClass(e) {
    e.target.classList.remove("on");
}

function runGame(e) {
    if(iterations === 5) {
        if(playerWins > 2) {
            console.log("Game over, you won.");
            return;
        }
        if (computerWins > 2) {
            console.log("Game over, computer won.");
            return;
        }
        if (playerWins == computerWins) {
            console.log("Game over, you and computer tied.");
            return;
        }    
        
        
    }
    
    let content = this.textContent || this.innerText;
    content = content.toLowerCase();
    
    let result = playRound(content, computerPlay());
    console.log(result);
    
    if (result.includes("won")) {
        playerWins = playerWins + 1;
        
    }
    if (result.includes("lost")) {
        computerWins = computerWins + 1;
    }
    iterations = iterations + 1;
}




//batton.forEach(button => button.addEventListener('keydown', playRound(playerSelection, computerSelection)))
batton.forEach(button => button.addEventListener("click", runGame));



