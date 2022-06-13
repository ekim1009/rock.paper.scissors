function computerPlay(){ 
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if (randomNumber === 1){
        return 'rock';
    }
    else if (randomNumber === 2){
        return 'paper';
    }
    else if (randomNumber === 3){
        return 'scissor';
    }
}
console.log(computerPlay());

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
        if ((playerSelection === 'rock') && (computerSelection === 'scissor')) {
            playerScore++;
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }     
        else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if ((playerSelection === 'scissor') && (computerSelection === 'paper')) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (playerSelection === computerSelection) {
            playerScore++;
            computerScore++;
            return 'It\s a tie!';
        }
        else {
            computerScore++;
            return `You lost! ${computerSelection} beats ${playerSelection}`;
        }
    }

function game(selection){
    if ((selection !== 'rock') && (selection !== 'paper') && (selection !== 'scissor')){
        alert ('Invalid entry! Try again!');
    }
    else {
        return playRound(selection, computerPlay());
    }
}

let i = 0;

    
while (i<5) {
    let result = prompt ('Let\'s play a game.  Take your pick: Rock, Paper, Scissor...')
    result = result.toLowerCase();
    console.log(game(result));
    console.log(`Player score:${playerScore} : Computer Score:${computerScore}`);
    i++;  
    }
        if (playerScore > computerScore){
            console.log('You win!');
        }
        else if (playerScore < computerScore){
            console.log('You lose!');
        }
        else {
            console.log(`It\'s a tie!`);
        }
    