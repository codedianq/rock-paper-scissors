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

let playerScore = 0
let computerScore = 0
let tieScore = 0

//Reference the buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Reference to the div that shows the result
const divResult = document.querySelector('.result');
const para = document.createElement('p');
// Create a function called getComputerChoice() that will return either 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    let genIntNum = Math.floor((Math.random() * 3) + 1)
    if(genIntNum === 1) {
        return computerSelection = 'rock';
    }else if(genIntNum === 2) {
        return computerSelection = 'paper';
    }else if(genIntNum === 3) {
        return computerSelection = 'scissors'
    }
}

// Create a function called playRound() that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    console.log(`User: ${playerSelection} || Computer: ${computerSelection}`);
    if(playerSelection === 'rock' && computerSelection === 'rock') {
        tieScore++;
        para.textContent = `Tied! Nothing happens between ${playerSelection} and ${computerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        tieScore++;
        para.textContent = `Tied! Nothing happens between ${playerSelection} and ${computerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
        tieScore++;
        para.textContent = `Tied! Nothing happens between ${playerSelection} and ${computerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        para.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        divResult.appendChild(para);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        para.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        divResult.appendChild(para);
    }
}

// Create a function called game() to play 5 round and also reports the score and the winner/loser at the end.
// function game() {
    
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt('Rock? Paper? or Scissors?').toLowerCase();
        
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`Your score: ${playerScore} || Computer Score: ${computerScore} || Tie Score: ${tieScore}`);
//     }
//     if(playerScore > computerScore) {
//         return console.log('Y O U  B E A T  T H E  C O M P U T E R ! ! !');
//     } else if(computerScore > playerScore) {
//         return console.log('Y O U  A R E  B E A T E N  B Y  T H E  C O M P U T E R ? ? ? ? ?');
//     } else {
//         return console.log('H M M M !  N O T  B A D . . .');
//     }
// }

// game();
//Create three buttons, one for each selection
rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// Add a div for displaying results and change all of your console.logs into DOM methods.


