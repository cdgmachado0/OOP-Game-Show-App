/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
             'Natalia por favor',
             'Te amo mucho',
             'Pizdietz',
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

     handleInteraction(element) {
         const userLetter = element.textContent;
         if (this.activePhrase.checkLetter(userLetter)) {
             this.activePhrase.showMatchedLetter(userLetter);
             this.activePhrase.correctLetter(userLetter);
             this.checkForWin();
         } else {
             element.className = 'key wrong';
             element.disabled = 'true';
             this.removeLife();
             this.gameOver();
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
                    title.textContent = 'YOU WON!!';
                    this.disableOrEnableKeyboard(true);
                    setTimeout(this.reset, 3000);
                }
            }
        }
     }

     gameOver() {
        if (this.missed === 5) {
            title.textContent = 'You lost! Game Over';
            setTimeout(this.reset, 3000);
        }
     }

     disableOrEnableKeyboard(bool) {
        keyButtons.forEach(button => button.disabled = bool);
     }

     reset() {
         phraseUl.innerHTML = ' ';
         this.disableOrEnableKeyboard(false);
         keyButtons.forEach(button => button.className = 'key');
         heartList.forEach(heart => heart.src = 'images/liveHeart.png');
         title.textContent = 'Phrase Hunter';
         overlayDiv.style.display = 'block';
     } //finishing the reset of the game. trying to get the start game back
 }