let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomInt = Math.random();
    let choice = String;
    if (randomInt >= 0 && randomInt < .33) {
        return "rock";
    }
    else if (randomInt >= .33 && randomInt < .67) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

function getHumanChoice() {
    return prompt("Enter your choice (rock/paper/scissors):").toLowerCase();

}

function playRound(humanChoice, computerChoice) {


    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("you lose");
        computerScore++;
        result = "computer";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("you win");
        humanScore++;
        result = "human";
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("tie");
    }

    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("tie");

    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("you lose");
        computerScore++;
        result = "computer";

    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("you win");
        humanScore++;
        result = "human";

    }

    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("tie");
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("you win");
        humanScore++;
        result = "human";

    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("you lose");
        computerScore++;
        result = "computer";

    }

}

function playGame() {
    for (let i=0; i<=5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

    }
}

playGame();