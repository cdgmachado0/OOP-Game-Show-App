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
             'Paella'
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
         } else {
             element.className = 'key wrong';
             this.removeLife();
         }
     }

     removeLife() {
        const heartList = document.querySelectorAll('img');
        for (let i = 0; i < heartList.length; i++) {
            if (this.missed === i) {
                heartList[i].src = 'images/lostHeart.png';
                this.missed++
                break; //just finish with this method
            } 
        }
     }

    //  checkForWin() {

    //  }

    //  gameOver() {

    //  }
 }