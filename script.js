let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // generte random number between 0 and 2 (inclusive)
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

// Assumes the user will always enter a valid choice 
// i.e. either "rock" or "paper" or "scissors"
function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?");
}

console.log(getHumanChoice());