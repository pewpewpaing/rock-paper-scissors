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
    let humanChoice = prompt("Rock, Paper, Scissors?");
    return humanChoice.toLowerCase();
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// console.log(`Human Score: ${humanScore}`);
// console.log(`computer Score: ${computerScore}`);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const capitalisedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        const capitalisedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        if (
            humanChoice === "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"
        ) {
            humanScore++;
            console.log(`You win! ${capitalisedHumanChoice} beats ${capitalisedComputerChoice}`);
        } else if (
            humanChoice === "rock" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock"
        ) {
            computerScore++;
            console.log(`You lose! ${capitalisedComputerChoice} beats ${capitalisedHumanChoice}`);
        } else {
            console.log(`You draw! Both choose ${capitalisedComputerChoice}`);
        }
    }

    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!!");
    } else {
        console.log("You draw the game!!");
    }
}

playGame();