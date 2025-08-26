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

