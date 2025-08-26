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
    let humanPick = prompt("WHAT'S IT GOING TUH BE?");
    humanPick = humanPick.toLowerCase();
    return humanPick;
}

function getComputerPick() {
    const randomNumber = Math.random();
    let computerPick; 
    if (randomNumber < 1/3) {
        computerPick = 'rock';
    } else if (randomNumber < 2/3) {
        computerPick = 'paper';
    } else {
        computerPick = 'scissors';
    }
    return computerPick;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanPick, computerPick) {
    if (humanPick === 'rock' && computerPick === 'rock') {
        console.log('Tie!')
    } else if (humanPick === 'rock' && computerPick === 'paper') {
        console.log('You lose! Paper beats Rock.');
        computerScore += 1;
    } else if (humanPick === 'rock' && computerPick === 'scissors') {
        console.log('You win! Rock beats Scissors.');
        humanScore += 1;
    } else if (humanPick === 'paper' && computerPick === 'rock') {
        console.log('You win! Paper beats Rock.');
        humanScore += 1;
    } else if (humanPick === 'paper' && computerPick === 'paper') {
        console.log('Tie!');
    } else if (humanPick === 'paper' && computerPick === 'scissors') {
        console.log('You lose! Scissors beat Paper.')
        computerScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'rock') {
        console.log('You lose! Rock beats Scissors.');
        computerScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'paper') {
        console.log('You win! Scissors beat Paper.');
        humanScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'scissors') {
        console.log('Tie!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanPick = getHumanPick();
        const computerPick = getComputerPick();
        playRound(humanPick, computerPick);
    }
    console.log('Human Score Total: ' + humanScore);
    console.log('Computer Score Total: ' + computerScore);

    if (humanScore > computerScore) {
        console.log('Final winner: HUMAN');
    } else if (humanScore === computerScore) {
        console.log('TIS A TIE.')
    } else {
        console.log('Final winner: COMPUTER');
    }
}

playGame();



