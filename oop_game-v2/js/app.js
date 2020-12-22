/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.querySelector('#btn__reset');
const overlayDiv = document.querySelector('#overlay');
const title = document.querySelector('h2.header');
const phraseUl = document.querySelector('#phrase').querySelector('ul');
const mainDivKeyboard = document.querySelector('#qwerty');
const keyButtons = mainDivKeyboard.querySelectorAll('.key');
const keyDivs = document.querySelectorAll('.keyrow');
const heartList = document.querySelectorAll('img');

const game = new Game();

startGameButton.addEventListener('click', e => {
    game.startGame();
})



mainDivKeyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});





