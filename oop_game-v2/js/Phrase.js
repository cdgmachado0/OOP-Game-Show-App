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
        for (let i = 0; i < lettersOfPhrase.length; i++) {
            let letter = lettersOfPhrase[i];
            if (userLetter === letter) {
                return true;
            } 
        }
     }

     showMatchedLetter(userLetter) {
        const liLetters = phraseUl.children;
        for (let i = 0; i < liLetters.length; i++) {
            let li = liLetters[i];
            if (li.textContent === userLetter) {
                li.className = `show letter ${userLetter}`;
            }  
        }
     }

     correctLetter(userLetter) {
        keyButtons.forEach(button => {
            if (userLetter === button.textContent) {
                button.disabled = true;
                button.className = `key chosen`;
            }
        });
     }
 }