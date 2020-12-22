/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlayDiv = document.querySelector('#overlay');
const mainDivKeyboard = document.querySelector('#qwerty');
const keyDivs = document.querySelectorAll('.keyrow');
const startGameButton = document.querySelector('#btn__reset');

const game = new Game();

startGameButton.addEventListener('click', e => {
    game.startGame();
})



mainDivKeyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});





