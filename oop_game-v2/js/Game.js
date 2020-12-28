/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
            new Phrase('life is good'),
            new Phrase('treehouse'),
            new Phrase('javascript'),
            new Phrase('the great joy of food')
         ];
         this.activePhrase = null;
     }

     /**
      * Starts a new game 
      */
     startGame() {
        overlayDiv.style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        newPhrase.addPhraseDisplay();
        this.activePhrase = newPhrase;
     }

     /**
      * Gets a new random phrase
      */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 4)];
     }

     /**
      * Handles the logic of the game if the player won, lost or if the correct letter was selected
      * @param {string||node element} userLetter letter or HTML button chosen by the user
      */
     handleInteraction(userLetter) {
         if (typeof userLetter !== 'string') {
            userLetter = userLetter.textContent;
         } 
         if (this.activePhrase.checkLetter(userLetter)) {
             this.activePhrase.showMatchedLetter(userLetter);
             this.activePhrase.chosenLetterOnKeyboard(userLetter);
             if (this.checkForWin()) {
                 this.gameOver(true);
             } 
         } else {
             if (typeof userLetter !== 'string') {
                userLetter.className = 'key wrong';
                userLetter.disabled = 'true';
             } else {
                 keyButtons.forEach(button => {
                     if (button.textContent === userLetter) {
                        button.className = 'key wrong';
                        button.disabled = 'true';
                     }
                 });
             }
             this.removeLife();
         }
     }

     /**
      * Remove a life from the user and calls gameOver() is case the game is finished
      */
     removeLife() {
        for (let i = 0; i < heartList.length; i++) {
            if (this.missed === i) {
                heartList[i].src = 'images/lostHeart.png';
                this.missed++
                break;
            } 
        }
        if (this.missed === 5) {
            this.gameOver(false);
        }
     }

     /**
      * Checks to see if the player have won
      */
     checkForWin() {
        let winFlag = 0;
        let spaces = 0;
        for (let li of liLetters) {
            if (li.textContent == ' ') {
                spaces++;
            }
            if (li.className === `show letter ${li.textContent}` && li.className !== 'space') {
                winFlag++;
                if(winFlag === liLetters.length - spaces) {
                    return true;
                }
            }
        }
     }

     /**
      * Checks if the player won or lost
      * @param {boolean} bool true is the player won and vice versa
      */
     gameOver(bool) {
        if (!bool) {
            gameOverMessage.textContent = 'You lost! Game Over';
            overlayDiv.className = 'start lose';
        } else if (bool) {
            gameOverMessage.textContent = 'YOU WON!!';
            overlayDiv.className = 'start win';
            this.manipulateButtons('disabled', true);
        }
        overlayDiv.style.display = '';
        this.reset();
     }

     /**
      * Assigns key/value pairs to the online keyboard buttons
      * @param {string} prop property to be assigned
      * @param {string} value value of the property
      */
     manipulateButtons(prop, value) {
         keyButtons.forEach(button => button[prop] = value);
     }

     /**
      * Resets the game after the player has won or lost
      */
     reset() {
        phraseUl.innerHTML = '';
        this.manipulateButtons('disabled', false);
        this.manipulateButtons('className', 'key');
        heartList.forEach(heart => heart.src = 'images/liveHeart.png');
        this.missed = 0;
     } 
 }