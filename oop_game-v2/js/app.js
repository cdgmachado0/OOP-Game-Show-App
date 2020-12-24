/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector('#btn__reset');
const overlayDiv = document.querySelector('#overlay');
const gameOverMessage = document.querySelector('#game-over-message');
const phraseUl = document.querySelector('#phrase').querySelector('ul');
const mainDivKeyboard = document.querySelector('#qwerty');
const keyButtons = mainDivKeyboard.querySelectorAll('.key');
const keyDivs = document.querySelectorAll('.keyrow');
const heartList = document.querySelectorAll('img');


let globalGame;
startGameButton.addEventListener('click', e => {
    const game = new Game();
    game.startGame();
    globalGame = game;
})

document.addEventListener('keydown', e => {
    if (/^[a-zA-Z]$/.test(e.key)) {
        globalGame.handleInteraction(e.key.toLowerCase());
    }
});
mainDivKeyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        globalGame.handleInteraction(e.target);
    }
});










