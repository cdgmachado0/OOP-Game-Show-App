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
        //in the process..change active phrase to the selected phrase
     }

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 4)];
     }

     handleInteraction() {

     }

     removeLife() {

     }

     checkForWin() {

     }

     gameOver() {

     }
 }