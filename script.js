const batton = document.querySelectorAll(".on");
let results = new Array(5);
let playerWins = 0;
let computerWins = 0;
let tieing = 0;
let iterations = 0;
const playerDisp = document.querySelector(".playerScore");
const ties = document.querySelector(".ties");
const compDisp = document.querySelector(".compScore");
const output = document.querySelector(".results");

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
        let gameResult = `You tied with computer, ${playerSelection} vs ${computerSelection}`;
        output.textContent = gameResult;
        return gameResult;
    }

    /* Losing Combos */
    if((playerSelection==="rock" && computerSelection ==="paper") || (playerSelection==="paper" && computerSelection ==="scissors") || (playerSelection==="scissors" && computerSelection ==="rock")) {
        let gameResult = `You lost LOL, the computer's ${computerSelection} beat your ${playerSelection}.`;
        output.textContent = gameResult;
        return gameResult;
    }

    /* Winning Combos */
    if((computerSelection==="rock" && playerSelection ==="paper") || (computerSelection==="paper" && playerSelection ==="scissors") || (computerSelection==="scissors" && playerSelection ==="rock")) {
        let gameResult = `You won, your ${playerSelection} beat the computer's ${computerSelection}`;
        output.textContent = gameResult;
        return gameResult;
    }
}

function removeClass(e) {
    e.target.classList.remove("on");
}

function runGame(e) {
    if(iterations >= 5) {
        output.classList.add("end");
        if(playerWins > 2) {
            output.textContent = "Game over, you won.";
            return;
        }
        if (computerWins > 2) {
            output.textContent = "Game over, computer won.";
            return;
        }
        if (playerWins == computerWins) {
            output.textContent = "Game over, you and computer tied.";
            return;
        }    
        
        
    }
    
    let content = this.textContent || this.innerText;
    content = content.toLowerCase();
    
    let result = playRound(content, computerPlay());
    console.log(result);
    
    if (result.includes("won")) {
        playerWins = playerWins + 1;
        playerDisp.textContent = `Player Score: ${playerWins}`;
        
    }
    else if (result.includes("lost")) {
        computerWins = computerWins + 1;
        compDisp.textContent = `Computer Score: ${computerWins}`;
    }
    else {
        tieing = tieing + 1;
        ties.textContent = `Ties: ${tieing}`;
    }
    iterations = iterations + 1;
}




//batton.forEach(button => button.addEventListener('keydown', playRound(playerSelection, computerSelection)))
batton.forEach(button => button.addEventListener("click", runGame));



