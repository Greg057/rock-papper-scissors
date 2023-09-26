const items = ["rock", "papper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;

function getComputerChoice() {
    item = items[Math.floor(Math.random()*items.length)];
    return item;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie!"
    } 
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "papper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "papper")) {
        scorePlayer++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } 
    else {
        scoreComputer++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }

}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(prompt("Choose your item: ").toLowerCase(), getComputerChoice()));
//     }
//     if (scoreComputer > scorePlayer) {
//         console.log(`You lost with a score of ${scorePlayer} to ${scoreComputer}.`);
//     }
//     else if (scoreComputer < scorePlayer) {
//         console.log(`You won with a score of ${scorePlayer} to ${scoreComputer}.`);
//     }
//     else {
//         console.log(`It is a tie! Both with a score of ${scorePlayer}.`);
//     }
    
// }

// game();

const rock = document.getElementById("rock");
const papper = document.getElementById("papper");
const scissors = document.getElementById("scissors");
buttons = [rock, papper, scissors];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        console.log(playRound(buttons[i].getAttribute('id'), getComputerChoice()))
    });
}


// rock.addEventListener("click", function() {
//     console.log(playRound("rock", getComputerChoice()))
// });


// delete line below to go back to full game logic
//console.log(playRound(prompt("Choose your item: ").toLowerCase(), getComputerChoice()));