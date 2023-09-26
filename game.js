const items = ["rock", "papper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;

const score = document.querySelector("#score");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.getAttribute('id'), getComputerChoice())
    })
})


function getComputerChoice() {
    item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        result.textContent = "Tie!";
    } 
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "papper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "papper")) {
        scorePlayer++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } 
    else {
        scoreComputer++;
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }

    score.textContent = `Your score: ${scorePlayer} | Computer's score: ${scoreComputer}`;

    checkIfGameDone();
    
}

function checkIfGameDone () {
    if (scoreComputer === 5 || scorePlayer === 5) {
        if (scoreComputer === 5) {
            alert("Game Done! Computer Won!")
        }
        else {
            alert("Game Done! You Won!")
        }
        scoreComputer = 0;
        scorePlayer = 0;
        result.textContent = "";
        
    }

}





