function getComputerChoice() {
    let randomInt = Math.random();
    console.log(randomInt);
    let choice = String;
    if (randomInt >=0 && randomInt < .33) {
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

let computerChoice = getComputerChoice();

function getHumanChoice() {
    userChoice = prompt();
    return userChoice;

}

let humanChoice = getHumanChoice();

console.log(computerChoice);
console.log(humanChoice);

