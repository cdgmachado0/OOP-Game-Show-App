/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseDisplay() {
        const lettersOfPhrase = Array.from(this.phrase);
        lettersOfPhrase.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if (letter !== '') {
                li.className = `hide letter ${letter}`;
            } else {
                li.className = 'space'; //test this on app.js
            }
        });
     }

     checkLetter() {

     }

     showMatchedLetter() {

     }
 }