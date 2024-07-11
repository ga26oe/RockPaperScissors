let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomInt = Math.random();
    console.log(randomInt);
    let choice = String;
    if (randomInt >= 0 && randomInt < .33) {
        choice = "rock";
    }
    else if (randomInt >= .33 && randomInt < .67) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;

}


function getHumanChoice() {
    userChoice = prompt();
    return userChoice;

}

function playRound(humanChoice, computerChoice) {
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let lowercaseChoice = humanChoice.toLowerCase();
    if (lowercaseChoice == "rock" && computerChoice == "paper") {
        console.log("you lose");
        computerScore++;
    }
    else if (lowercaseChoice == "scissors" && computerChoice == "paper") {
        console.log("you win");
        humanScore++;
    }
    else if (lowercaseChoice == "paper" && computerChoice == "paper") {
        console.log("tie");
    }


    else if (lowercaseChoice == "rock" && computerChoice == "rock") {
        console.log("tie");

    }

    else if (lowercaseChoice == "scissors" && computerChoice == "rock") {
        console.log("you lose");
        computerScore++;
    }

    else if (lowercaseChoice == "paper" && computerChoice == "rock") {
        console.log("you win");
        humanScore++;
    }

    else if (lowercaseChoice == "scissors" && computerChoice == "scissors") {
        console.log("tie");
    }

    else if (lowercaseChoice == "rock" && computerChoice == "scissors") {
        console.log("you win");
        humanScore++;
    }

    else if (lowercaseChoice == "paper" && computerChoice == "scissors") {
        console.log("you lose");
        computerScore++;
    }

    return { computerScore, humanScore };

}

playRound();