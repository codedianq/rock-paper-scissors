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
console.log(numGenerator);

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



