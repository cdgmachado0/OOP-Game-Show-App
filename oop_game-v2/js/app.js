/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlayDiv = document.querySelector('#overlay');
const mainDivKeyboard = document.querySelector('#qwerty');
const keyDivs = document.querySelectorAll('.keyrow');
const startGameButton = document.querySelector('#btn__reset');

startGameButton.addEventListener('click', e => {
    overlayDiv.style.display = 'none';
})


// const lettersOfKeyboard = [];
// for (let i = 0; i < keyDivs.length; i++) {
//     let buttonsForLetters = keyDivs[i].children;
//     for (let j = 0; j < buttonsForLetters.length; j++) {
//         lettersOfKeyboard.push(buttonsForLetters[j].textContent);
//     }
// }


// mainDivKeyboard.addEventListener('click', e => {
//     if (e.target.tagName === 'BUTTON') {
//         e.target.textContent
//     }
// });




const newPhrase = new Phrase('Mucho gusto!');
newPhrase.addPhraseDisplay();
// newPhrase.checkLetter();
