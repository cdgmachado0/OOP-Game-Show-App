/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
             'hola',
             'sapo',
             'papa',
             'Piscina'
         ];
         this.activePhrase = null;
     }

     startGame() {
        overlayDiv.style.display = 'none';
        const newPhrase = new Phrase(this.getRandomPhrase());
        newPhrase.addPhraseDisplay();
        this.activePhrase = newPhrase;
     }

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 4)];
     }

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

     checkForWin() {
        const liLetters = phraseUl.children;
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

     gameOver(bool) {
        if (!bool) {
            gameOverMessage.textContent = 'You lost! Game Over';
            overlayDiv.className = 'start lose';
        } else if (bool) {
            gameOverMessage.textContent = 'YOU WON!!';
            overlayDiv.className = 'start win';
            this.manipulateButtons('disabled', true);
            // this.disableOrEnableKeyboard(true);
        }
        overlayDiv.style.display = '';
        this.reset();
     }

    //  disableOrEnableKeyboard(bool) {
    //     keyButtons.forEach(button => button.disabled = bool);
    //  }

     manipulateButtons(prop, value) {
         keyButtons.forEach(button => button[prop] = value);
     }

     reset() {
         phraseUl.innerHTML = '';
        //  this.disableOrEnableKeyboard(false); //why can't I use this function instead. Console says it's not a function
        this.manipulateButtons('disabled', false);
        this.manipulateButtons('className', 'key');
        // keyButtons.forEach(button => button.disabled = false); 
        // keyButtons.forEach(button => button.className = 'key');
        heartList.forEach(heart => heart.src = 'images/liveHeart.png');
        this.missed = 0;
     } 
 }