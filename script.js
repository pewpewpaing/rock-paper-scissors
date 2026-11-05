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