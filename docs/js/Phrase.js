

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase;
     }

     /**
      * Displays a random phrase on index.html
      */
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

     /**
      * Checks if user's letter is included on the random phrase
      * @param {string} userLetter letter chosen by the user
      * @returns  {boolean}  if the userLetter is found or not
      */
     checkLetter(userLetter) {
        const lettersOfPhrase = Array.from(this.phrase);
        for (let i = 0; i < lettersOfPhrase.length; i++) {
            if (userLetter === lettersOfPhrase[i]) {
                return true;
            } 
        }
     }

     /**
      * Displays user's letter on index.html
      * @param {string} userLetter letter chosen by the user
      */
     showMatchedLetter(userLetter) {
        for (let i = 0; i < liLetters.length; i++) {
            let li = liLetters[i];
            if (li.textContent === userLetter) {
                li.className = `show letter ${userLetter}`;
            }  
        }
     }

     /**
      * Emphasizes user's letter on onscreen keyboard
      * @param {string} userLetter letter chosen by the user
      */
     chosenLetterOnKeyboard(userLetter) {
        keyButtons.forEach(button => {
            if (userLetter === button.textContent) {
                button.disabled = true;
                button.className = `key chosen`;
            }
        });
     }
 }