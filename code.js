function getComputerChoice() {
    let randomInt = Math.random();
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
    let humanChoice = prompt();
    console.log(humanChoice);
    
}


