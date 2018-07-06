console.log('Lifes a Garden Dig It')

class Word {         constructor(){               this.wordBank =
["phoenix", "toad", "omniocular", "parselmouth", "azkaban",
"fiendfyre", "dementor",     "patronus", "nimbus", "mandrake",
"gringotts", "occlumens",     "herbology", "transfiguration",
"sectumsempra", "mudblood", "aguamenti", "slytherin", "horcrux",
"ravenclaw", "hufflepuff", "expelliarmus", "arithmancy", "morsemorde",
"legilimens", "butterbeer", "goblin", "divination", "potions",
"veritaserum", "hogwarts", "gryffindoor", "elderwand", "cloak of invisibilty", 
"resurrection stone", "gaaunt shack", "dumbledore", "severus snape", "valdemort", ];
this.currentWord = ""; 
this.pickRandomWord();     //number of blank spaces 
this.displaySpaces = [];     //takes current word and gives back an array with #of blank spaces     
const arrayString =
this.currentWord.split("");     
const numSpaces =
("_").repeat(arrayString.length)     
this.displaySpaces = numSpaces.split("")     
this.updateDisplayedWord()   
} 
pickRandomWord () {     // pick random word from word bank and push to new array
const randNum = Math.floor((Math.random() * this.wordBank.length))
const newWord = this.wordBank.splice(randNum, 1);     
this.currentWord = newWord.toString();

  }
  updateDisplayedWord() {
    //want to have array with no commas
  
    // clear what was previously there in checkForLetter
    
    for (let i = 0; i < this.displaySpaces.length; i++){
      $('#blankSpace').append(this.displaySpaces[i] + " ")
    } 
    
    console.log(this.displaySpaces)
  } 


}

let word = new Word();

const game = {

  usedLetters: [],
  guessesLeft: 8,
  wins: 0,
  losses: 0,


  //see if letter user guessd is in the word
  checkForLetter(letter) {


      // declare if we found it boolean
      let correctLetter = true;      
      const splitString = word.currentWord.split(""); // get array of characters
      // loop through array of chars, if it matches, change letter in displaySpaces at that index

      // inputs letter if there are multiple of the same in a word
      for (i = 0; i < splitString.length; i++){ 
        if (letter === splitString[i]){
          //switch letter everywhere it occurs in displaySpaces
          word.displaySpaces[i] = letter;
        } 
      }
      //loops through word but breaks once correct letter confirmed
      for (i = 0; i < splitString.length; i++){
 
        if (letter === splitString[i]){
          //switch letter everywhere it occurs in displaySpaces
          correctLetter = true
          break;
        } else {
          correctLetter = false;
        }

        const win = (word.displaySpaces.join(''))
        console.log(win)
        if (win === word.currentWord){
          alert('you are a fucking genius! How much liquid luck have you had today?')
          alert = function() {};
          // word.currentWord.remove();
          this.newRound()
          this.wins += 1
          $('#blankSpace').append(word.displaySpaces)
          console.log(word.currentWord)
          console.log(word.displaySpaces)



        }
      }
      // if we didn't find it (see boolean)
      if (false === correctLetter){
        // subtract score
        this.guessesLeft -= 1;

      }

      console.log(correctLetter)
      console.log(word.currentWord)
      // console.log(thisword)

      if (this.guessesLeft === 7){
         $('.photo').attr('src', 'https://pa1.narvii.com/6313/6d1f8c1f6fbb3cb939225680fbd48b313d5a1d57_hq.gif')
      }
      if (this.guessesLeft === 6){
         $('.photo').attr('src', 'https://media1.popsugar-assets.com/files/thumbor/3ghC65Nc1Wt5pJ1RNzC2mTOrzxY/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2016/03/17/886/n/1922507/7ea54fec98cbee91_HP-7.1/i/Harry-Potter-Deathly-Hallows.gif')
      }
      
      if (this.guessesLeft === 5){
         $('.photo').attr('src', 'https://2.bp.blogspot.com/-i_ht4jS8DF0/VkjURoxdSrI/AAAAAAAAMqI/OuwFqsAe1hs/s1600/tumblr_mw10hjWmTV1qa3oruo3_500.gif')
      }
      if (this.guessesLeft === 4){
         $('.photo').attr('src', 'http://24.media.tumblr.com/tumblr_lnvgkj5ndt1qb0zfoo1_500.gif')
      }
      if (this.guessesLeft === 3){
         $('.photo').attr('src', 'https://media.giphy.com/media/kECgjyn98wivm/giphy.gif')
      }
      if (this.guessesLeft === 2){
         $('.photo').attr('src', 'https://78.media.tumblr.com/911c375e6af60aac05de9d4f75fbc7d8/tumblr_mz1w03QMpb1riv7lmo6_500.gif')
      }
      if (this.guessesLeft === 1){
         $('.photo').attr('src', 'https://media.giphy.com/media/gIfROMWSH3ndC/giphy.gif')
      }
      if (this.guessesLeft === 0){
        alert("Merlin's Beard, you suck!")
        this.newRound()
        this.losses += 1
      }
      // push letter to used letters
      this.usedLetters.push(" " + letter + " ");
      
      this.updateLetterBox();

      //.empty deletes the duplicates that are created everytime the button is clicked
      $('#blankSpace').empty()
      word.updateDisplayedWord();

  },

  updateLetterBox(){
    $('#attempts').text("Attempts Left: " + "( " + this.guessesLeft + " )")
    $('#wins').text("Games Won: " + this.wins)
    $('#losses').text("Games Lost: " + this.losses)
    $('#usedLetter').text(" " + this.usedLetters + " ") // note: usedLetters is an ARRAY

    // TODO: once you have guesses remaining going down for every guess, 
    // TODO: jQ update remaining guesses also 
  },

  newRound(){
    word = new Word()
    // word.pickRandomWord();
    // word.updateDisplayedWord();
    this.guessesLeft = 8;
    this.usedLetters = [];

  } 
  // reset() {
    // TODO: get new word (that will autoamtically update scoreboard)
    // TODO: reset guessesRemaining

    // for later: next player/switch turn

  // }
}

$('#name-form').on('submit', (e) => {
  console.log("listener");
  e.preventDefault();
  const guessLetter = $('#guess').val();
  game.checkForLetter(guessLetter);
  // reset input
  $('#guess').val("")

});   



