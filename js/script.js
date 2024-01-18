// //Create global variable computerChoice
// let computerChoice = "";
// //Create global vairable playerChoice
// let playerChoice = "";

//Create a function "getComputerChoice" that returns the computer's choice
function getComputerChoice() {
    let initialComputerChoice = Math.floor(Math.random() * 3) + 1;
    switch (initialComputerChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            console.error("Something went wrong with the switch statmenet");
            break;
    }
}

//Create function "playRound" which takes two parameters of the player's choice and the computer's choice
function playRound(playerChoice, computerChoice) {
    if (playerChoice != computerChoice) {
        switch (playerChoice) {
            case "ROCK":
                return computerChoice === "SCISSORS" ? "WIN" : "LOSE";
            case "PAPER":
                return computerChoice === "ROCK" ? "WIN" : "LOSE";
            case "SCISSORS":
                return computerChoice === "PAPER" ? "WIN" : "LOSE";
            default:
                console.error("Something went wrong with the second switch statement");
                return;
        }
    }
    return "TIE";
}

playGame() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore + computerScore) < 5) {
        let playerChoice = prompt("Rock, paper, or scissors? ");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerScore);

        console.log("The computer went " + computerChoice + "and you went " + playerChoice + ", the result was a " + result + "\n");
    }
}

playGame();