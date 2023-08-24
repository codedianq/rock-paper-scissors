/* Pseudocode
The user will input between 'Rock', 'Paper' and 'Scissors'.
Then the computer player will generate random selection between 'Rock', 'Paper' and 'Scissors'.
Compare the selection between the user and the computer player
If the user selects 'Rock' and computer player generates 'Scissors' then print 'You Win'. Vice Versa, print 'You Lose'.
If the user selects 'Paper' and computer player generates 'Rock' then print 'You win'. Vice Versa, print 'You lose'.
If the user selects 'Scissors' and computer player generates 'Paper' then print 'You win'. Vice Versa, print 'You lose'.
If the user and computer player pick the same then print 'Tie'.
Every win will increment the score by 1.
The game will end at first 5 rounds */

// Create a variable called numGenerator (generate whole numbers from 1 - 3) for the basis of randomly return 'ROCK, 'PAPER' or 'SCISSORS'
let numGenerator = Math.floor(Math.random() * 3 + 1)
let computerChoice;
let userChoice
// Create a function called getComputerChoice that will randomly return either 'ROCK, 'PAPER' or 'SCISSORS'
function getComputerChoice() {
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
    userChoice = prompt('TYPE AND CHOOSE ONE:', 'ROCK, PAPER, OR SCISSORS?').toUpperCase();
    return userChoice
}

let userScore = 0;
let computerScore = 0;
let tieScore = 0

// Create a function called playRound that plays a single round.
function playRound(userSelection, computerSelection) {
    
    if(userSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        userScore++;
        userScore;
        return(`You win! ${userSelection} beats ${computerSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else if (computerSelection === 'ROCK' && userSelection === 'SCISSORS') {
        computerScore++;
        computerScore;
        return(`You lose! ${computerSelection} beats ${userSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else if(userSelection === 'PAPER' && computerSelection === 'ROCK') {
        userScore++;
        userScore;
        return(`You win! ${userSelection} beats ${computerSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else if (computerSelection === 'PAPER' && userSelection === 'ROCK') {
        computerScore++;
        computerScore;
        return(`You lose! ${computerSelection} beats ${userSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else if(userSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        userScore++;
        userScore;
        return(`You win! ${userSelection} beats ${computerSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else if (computerSelection === 'SCISSORS' && userSelection === 'PAPER') {
        computerScore++;
        computerScore;
        return(`You lose! ${computerSelection} beats ${userSelection}. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    } else {
        ('Tie');
        tieScore++
        tieScore;
        return(`It's a Tie. User: ${userScore} || Computer: ${computerScore} || Tie: ${tieScore}`);
    }
}

//  Create a function called game to make a 5 rounds of game and announce the winner
function game() {
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(playRound(getUserChoice(), getComputerChoice()));
    console.log(playRound(getUserChoice(), getComputerChoice())); 
    
    if (userScore > computerScore) {
        console.log(`You win against the computer with the final score of ${userScore}.`);
    } else if (userScore < computerScore) {
        console.log(`You lose against the computer with the final score of ${userScore}.`);
    } else {
        console.log();(`It's a tie game.`);
    }
return true
}

game();



