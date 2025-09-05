const choiceContainer = document.querySelector(".choice-container");
const resultsContainer = document.querySelector(".results-container");
const finalWinnerContainer = document.querySelector(".final-winner-container");

let humanPick;
let computerPick;

choiceContainer.addEventListener("click", (event) => {
    humanPick = event.target.id;
    computerPick = getComputerPick();
    playGame();
}); 

function getComputerPick() {
    const randomNumber = Math.random    ();
    let computerPick; 
    if (randomNumber < 1/3) {
        computerPick = 'Rock';
    } else if (randomNumber < 2/3) {
        computerPick = 'Paper';
    } else {
        computerPick = 'Scissors';
    }
    return computerPick;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanPick, computerPick) {
    if (humanPick === computerPick) {
        resultsContainer.textContent = "Tie!"
    } else if (
        (humanPick === 'Rock' && computerPick === 'Paper') || 
        (humanPick === 'Paper' && computerPick === 'Scissors') || 
        (humanPick === 'Scissors' && computerPick === 'Rock')
    ) {
        resultsContainer.textContent = `You lose! ${computerPick} beats ${humanPick}.`;
        computerScore += 1;
    } else {
        resultsContainer.textContent = `You win! ${humanPick} beats ${computerPick}.`;
        humanScore += 1;
    }
}

function playGame() {
    playRound(humanPick, computerPick);

    if (humanScore === 5 || computerScore === 5) {
        resultsContainer.textContent = 'Human Score Total: ' + humanScore + ' | Computer Score Total: ' + computerScore;

        if (humanScore > computerScore) {
            finalWinnerContainer.textContent = 'Final winner: HUMAN';
        } else if (humanScore === computerScore) {
            finalWinnerContainer.textContent = '\'TIS A TIE.';
        } else {
            finalWinnerContainer.textContent = 'Final winner: COMPUTER';
        }
    }
}


