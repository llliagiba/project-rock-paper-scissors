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

let humanPick;
function getHumanPick() {
    const choiceContainer = document.querySelector(".choice-container");
    choiceContainer.addEventListener("click", (event) => {
        humanPick = event.target.id;
        getComputerPick();
        playGame();
    }); 
}

function getComputerPick() {
    const randomNumber = Math.random    ();
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

const resultsContainer = document.querySelector(".results-container");
function playRound(humanPick, computerPick) {
    if (humanPick === 'rock' && computerPick === 'rock') {
        resultsContainer.textContent = 'Tie!';
    } else if (humanPick === 'rock' && computerPick === 'paper') {
        resultsContainer.textContent = 'You lose! Paper beats Rock.';
        computerScore += 1;
    } else if (humanPick === 'rock' && computerPick === 'scissors') {
        resultsContainer.textContent = 'You win! Rock beats Scissors.';
        humanScore += 1;
    } else if (humanPick === 'paper' && computerPick === 'rock') {
        resultsContainer.textContent = 'You win! Paper beats Rock.';
        humanScore += 1;
    } else if (humanPick === 'paper' && computerPick === 'paper') {
        resultsContainer.textContent = 'Tie!';
    } else if (humanPick === 'paper' && computerPick === 'scissors') {
        resultsContainer.textContent = 'You lose! Scissors beat Paper.';
        computerScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'rock') {
        resultsContainer.textContent = 'You lose! Rock beats Scissors.';
        computerScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'paper') {
        resultsContainer.textContent = 'You win! Scissors beat Paper.';
        humanScore += 1;
    } else if (humanPick === 'scissors' && computerPick === 'scissors') {
        resultsContainer.textContent = 'Tie!';
    }
}

const finalWinnerContainer = document.querySelector(".final-winner-container");

function playGame() {
    const computerPick = getComputerPick();
    playRound(humanPick, computerPick);

    if (humanScore === 5 || computerScore === 5) {
        resultsContainer.textContent = 'Human Score Total: ' + humanScore + ' | Computer Score Total: ' + computerScore;

        if (humanScore > computerScore) {
            finalWinnerContainer.textContent = 'Final winner: HUMAN';
        } else if (humanScore === computerScore) {
            finalWinnerContainer.textContent = 'TIS A TIE.';
        } else {
            finalWinnerContainer.textContent = 'Final winner: COMPUTER';
        }
    }
}

getHumanPick();


