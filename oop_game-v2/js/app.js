
const startGameButton = document.querySelector('#btn__reset');
const overlayDiv = document.querySelector('#overlay');
const gameOverMessage = document.querySelector('#game-over-message');
const phraseUl = document.querySelector('#phrase').querySelector('ul');
const liLetters = phraseUl.children;
const mainDivKeyboard = document.querySelector('#qwerty');
const keyButtons = mainDivKeyboard.querySelectorAll('.key');
const keyDivs = document.querySelectorAll('.keyrow');
const heartList = document.querySelectorAll('img');
let globalGame;


/** 
 * Listens to user's click on the Start Game button and
 * initiates a new Game object
 * */ 
startGameButton.addEventListener('click', e => {
    const game = new Game();
    game.startGame();
    globalGame = game;
})

// Listens to user's input on their keyboard
document.addEventListener('keydown', e => {
    if (overlayDiv.style.display !== 'none') {
        e.preventDefault();
    } else if (/^[a-zA-Z]$/.test(e.key)) {
        globalGame.handleInteraction(e.key.toLowerCase());
    }
});

// Listens to user's click on onscreen keyboard
mainDivKeyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        globalGame.handleInteraction(e.target);
    }
});










