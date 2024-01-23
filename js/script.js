const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const output = document.querySelector("#output");
const yourDisplay = document.querySelector("#yourscore");
const computerDisplay = document.querySelector("#computerscore");


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
    let result = determineResult(playerChoice, computerChoice);


}

function determineResult(playerChoice, computerChoice) {
    if (playerChoice != computerChoice) {
        switch (playerChoice) {
            case "ROCK":
                return computerChoice === "SCISSORS" ? "WIN" : "LOSS";
            case "PAPER":
                return computerChoice === "ROCK" ? "WIN" : "LOSS";
            case "SCISSORS":
                return computerChoice === "PAPER" ? "WIN" : "LOSS";
            default:
                console.error("Something went wrong with the second switch statement");
                return;
        }
    }
    return "TIE";
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore + computerScore) < 5) {
        let playerChoice = prompt("ROCK, PAPER, OR SCISSORS? ").toUpperCase();
        while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
            playerChoice = prompt("That is not a valid choice. Please choose between 'ROCK, PAPER, and SCISSORS'").toUpperCase();
        }
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        console.log("The computer went " + computerChoice + " and you went " + playerChoice + ", the result was a " + result);
        switch (result) {
            case "WIN":
                playerScore += 1;
                break;
            case "LOSS":
                computerScore += 1;
                break;
            default:
                break;
        }

        if ((playerScore + computerScore) != 5) {
            console.log("The score is " + playerScore + " to " + computerScore);
        }
    }

    if (playerScore > computerScore) {
        console.log("YOU WIN! The final score was " + playerScore + " to " + computerScore);
        alert("YOU WIN! The final score was " + playerScore + " to " + computerScore);
    } else {
        console.log("You lost, sad. The final score was " + playerScore + " to " + computerScore);
        alert("YOU WIN! The final score was " + playerScore + " to " + computerScore);
    }
}

playGame();

rockButton.addEventListener("click", () => {
    playRound()
})