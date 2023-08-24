/* Pseudocode
The user will input between 'Rock', 'Paper' and 'Scissors'.
Then the computer player will generate random selection between 'Rock', 'Paper' and 'Scissors'.
Compare the selection between the user and the computer player
If the user selects 'Rock' and computer player generates 'Scissors' then print 'You Win'. Vice Versa, print 'You Lose'.
If the user selects 'Paper' and computer player generates 'Rock' then print 'You win'. Vice Versa, print 'You lose'.
If the user selects 'Scissors' and computer player generates 'Paper' then print 'You win'. Vice Versa, print 'You lose'.
If the user and computer player pick the same then print 'Tie'.
Every win will increment the score by 1.
The first who will score 5 points will win. Print 'You beat the computer' else 'You have been beaten by computer. */

// Create a variable called numGenerator (generate whole numbers from 1 - 3) for the basis of randomly return 'ROCK, 'PAPER' or 'SCISSORS'
let numGenerator = Math.floor(Math.random() * 3 + 1)

// Create a function called getComputerChoice that will randomly return either 'ROCK, 'PAPER' or 'SCISSORS'
function getComputerChoice() {
    
    let computerChoice;
    if (numGenerator === 1) {
        computerChoice = 'ROCK';
    } else if (numGenerator === 2) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    }
    return (computerChoice);
}

//Create a function called getUserChoice. Will get the user choice either 'ROCK, 'PAPER' or 'SCISSORS'
function getUserChoice() {

    let userChoice = prompt('TYPE AND CHOOSE ONE:', 'ROCK, PAPER, OR SCISSORS?').toUpperCase();
    return userChoice
}



// Create a function called playRound that plays a single round.
function playRound(userSelection, computerSelection) {
    if(userSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return('You win');
    } else if (computerSelection === 'ROCK' && userSelection === 'SCISSORS') {
        return('You lose');
    } else if(userSelection === 'PAPER' && computerSelection === 'ROCK') {
        return('You win');
    } else if (computerSelection === 'PAPER' && userSelection === 'ROCK') {
        return('You lose');
    } else if(userSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return('You win');
    } else if (computerSelection === 'SCISSORS' && userSelection === 'PAPER') {
        return('You lose');
    } else {
        return('Tie');
    }
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log(playRound(userSelection, computerSelection));



