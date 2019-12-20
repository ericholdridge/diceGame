let scores, roundScore, activePlayer;

// Sets the score, activePlayer, and roundScore to 0 
init();

document.querySelector('.roll-dice').addEventListener('click', () => {
    // Get random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // Display the result
    let diceDOM = document.querySelector('img');
    // Display the dice image on the page
    diceDOM.style.display = 'block';
    // Change the source of the image depening on the random number rolled 
    diceDOM.src = 'images/dice-' + dice + '.png';

    // Update the round score
    if(dice !== 1 ){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextPlayer()
    }
})

// When a user clicks on the hold button
document.querySelector('.hold').addEventListener('click', () => {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if(scores[activePlayer] >= 20) {
        document.querySelector('.player-' + activePlayer).textContent = 'WINNER!!!!!!';
    }

    // Next player
    nextPlayer();
})

// Changes the current player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

// When the user clicks on the new game but, call the init function to set variables to 0
document.querySelector('.new-game').addEventListener('click', init)

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('img').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0').textContent = 'Player 1';
    document.querySelector('.player-1').textContent = 'Player 2';
}