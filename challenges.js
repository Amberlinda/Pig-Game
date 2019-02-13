var score, roundScore, activePlayer, gamePlaying;

init();
//document.querySelector('#current-'+activePlayer).textContent = dice;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var diceDOM = document.querySelector('.dice');
        var secondDiceDOM = document.querySelector('.second-dice');
        var dice = Math.floor(Math.random() * 6) + 1;
        var secondDice = Math.floor(Math.random() * 6) + 1;
        diceDOM.style.display = 'block';
        secondDiceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.PNG';
        secondDiceDOM.src = 'dice-'+ secondDice + '.PNG';

        if (dice !== 1 && secondDice !== 1) {
            roundScore += dice + secondDice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        var input = document.querySelector('.final-score').value;
        var winningScore;
        if(input)
            {
                winningScore = input;
            }
        else{
            winningScore = 100;
        }
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.second-dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }


});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';
}

function init() {
    gamePlaying = true;
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function onload() {
    winningScore = document.getElementById('winningScore');
}
