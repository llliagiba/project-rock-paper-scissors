/*
PESUDOCODE
- humanPick function will propmt the user for a choice and save it to a variable
- computerPick will use the random number generator to pick a move
- initialize humanScore and computerScore variables with 0 
- playRound will take humanPick and computerPick, compare them and display "You win/lose. __ beats __".
also, update humanScore and computerScore variables depending on who won the round
- playGame will allow user to play 5 rounds, keep track of the scores, and declare a final winner (compare humanScore and computerScore) at the end 

VERY FLAWED, I AM AWARE
*/

function getHumanPick() {
    const humanPick = prompt("What's it gonna be?");
    console.log(humanPick);
}

function getComputerPick() {
    const randomNumber = Math.random();
    // Math.random = [0, 1)
    // if randomNumber === [0, 1/3) computerPick = 'rock'
    // if randomNumber === [1/3, 2/3) compuerPick = 'paper'
    // if randomNumber === [2/3, 1) computerPick = 'scissors'
    // but JavaScript does not support chained comparison operators, so use boolean operators intead, or a single comparison statement
    let computerPick; 
    if (randomNumber < 1/3) {
        computerPick = 'rock';
    } else if (randomNumber < 2/3) {
        computerPick = 'paper';
    } else {
        computerPick = 'scissors';
    }
    console.log(randomNumber);
    console.log(computerPick);
}

getComputerPick();          

