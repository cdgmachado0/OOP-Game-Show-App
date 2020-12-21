/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     addPhraseDisplay() {
        const phraseUl = document.querySelector('#phrase').querySelector('ul');
        const lettersOfPhrase = Array.from(this.phrase);
        lettersOfPhrase.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if (letter !== ' ') {
                li.className = `hide letter ${letter}`;
            } else {
                li.className = 'space';
            }
            phraseUl.appendChild(li);
        });
     }

     checkLetter(userLetter) {
        const lettersOfPhrase = Array.from(this.phrase);
        lettersOfPhrase.forEach(letter => {
            if (userLetter === letter) {
                this.showMatchedLetter(userLetter);
            }
        });
     }

     showMatchedLetter(userLetter) {
        const liLetters = document.querySelector('#phrase').querySelector('ul').children;
        liLetters.forEach(li => {
            if (li.textContent === userLetter) {
                li.className = `show letter ${userLetter}`;
            }
        });
     }
 }