console.log('js works')


//word class
// word bank
// check word function take current word thats eing play and takes in a letter
// turn word into array and check if letter is in array 
// const randomWord == wordBank[i]

// use splice

// measure length of array 


// game that keeps track of player and player scores


// anytime someone goes scan the array and find the index of where te letter are and 
// display on screen
// have a render board function.

// check array of what ever letter is chosen and render letter on page




class Word {      
  constructor(){          
    this.wordBank =
    ["dude", "asson", "abounding", "dispensable", "fallacious", "psychotic", "thinkable",
    "classy", "tendency", "toothpaste", "derive", "observation",
    "nebulous", "adjoining", "immense", "noxious", "function"];  
    this.currentWord = "";
    this.pickRandomWord();
    //number of blank spaces
    this.displaySpaces = [];
    //takes current word and gives back an array with #of blank spaces
    const arrayString = this.currentWord.split("");
    const numSpaces = ("_").repeat(arrayString.length)
    this.displaySpaces = numSpaces.split("")

    this.updateDisplayedWord()
  } 
  pickRandomWord () {
    // pick random word from word bank and push to new array
    const randNum = Math.floor((Math.random() * this.wordBank.length))
    const newWord = this.wordBank.splice(randNum, 1);
    this.currentWord = newWord.toString();

  }
  updateDisplayedWord() {
    //want to have array with no commas
    // DONE: fix comma problem: iterate over displaySpaces, append each letter, and maybe a space, to theDOM
    for (let i = 0; i < this.displaySpaces.length; i++){
    $('#blankSpace').append(this.displaySpaces[i] + " ")
    }
    console.log(this.displaySpaces)
  }
  
}

const word = new Word();

const game = {

  usedLetters: [],
  guessesLeft: "",
  // TODO: add property to kep track of number of guesses? guesses remaining -- it can count down 
  

  //see if letter user guessd is in the word
  checkForLetter(letter) {

    // TODO if the letter apperas in guessed letters 
      // TODO say nah -- jQ

    //TODO otherwise/else
      // convert into array and check for matching letter
      const splitString = word.currentWord.split(""); // get array of characters
      // loop through array of chars, if it matches, change letter in displaySpaces at that index
      for (i = 0; i < splitString.length; i++){ 
        if (letter === splitString[i]){
          //switch letter everywhere it occurs in displaySpaces
          word.displaySpaces[i] = letter;

        } else {


            // TODO: track wrong guesses -- reduce the geussesRemaing property
            // TODO: if it is then 0, game over

            // TODO: write and call call reset function (see below)

            console.log("guess again")
        }
      }

      this.usedLetters.push(" " + letter + " ")
      // push letter to used letters
      this.updateLetterBox()
      word.updateDisplayedWord()
  },

  // this should iterate over game.usedLetters,
  // rebuild the output string
  // and replace in html
  updateLetterBox(){
    
    $('#usedLetter').text(" " + this.usedLetters + " ") // note: usedLetters is an ARRAY

    // TODO: once you have guesses remaining going down for every guess, 
    // TODO: jQ update remaining guesses also 
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
});   






















 // Hangman
//   canvas =  function(){

//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
  
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
    
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
   
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
  
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
  
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
  
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
  
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
  
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
  
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
  
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
  
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


//   // OnClick Function
//    check = function () {
//     list.onclick = function () {
//       var geuss = (this.innerHTML);
//       this.setAttribute("class", "active");
//       this.onclick = null;
//       for (var i = 0; i < word.length; i++) {
//         if (word[i] === geuss) {
//           geusses[i].innerHTML = geuss;
//           counter += 1;
//         } 
//       }
//       var j = (word.indexOf(geuss));
//       if (j === -1) {
//         lives -= 1;
//         comments();
//         animate();
//       } else {
//         comments();
//       }
//     }
//   }
  
    
  // // Play
  // play = function () {
  //   categories = [
  //       ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
  //       ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
  //       ["manchester", "milan", "madrid", "amsterdam", "prague"]
  //   ];

  //   chosenCategory = categories[Math.floor(Math.random() * categories.length)];
  //   word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
  //   word = word.replace(/\s/g, "-");
  //   console.log(word);
  //   buttons();

  //   geusses = [ ];
  //   lives = 10;
  //   counter = 0;
  //   space = 0;
  //   result();
  //   comments();
  //   selectCat();
  //   canvas();
  // }

  // play();

