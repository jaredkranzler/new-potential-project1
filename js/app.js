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
    ["abounding", "dispensable", "fallacious", "psychotic", "thinkable",
    "classy", "tendency", "toothpaste", "derive", "observation",
    "nebulous", "adjoining", "immense", "noxious", "function"];  
    this.currentWord = "";
    this.pickRandomWord();
    //number of blank spaces
    this.displaySpaces = []
    //takes current word and gives back an array with #of blank spaces
    const arrayString = this.currentWord.split("");
    const numSpaces= ("_").repeat(arrayString.length)
    this.displaySpaces.push(numSpaces.split(""))


  } 
  pickRandomWord (){
    // pick random word from word bank and push to new array
    const randNum = Math.floor(Math.random() * this.wordBank.length + 1)
    const newWord = this.wordBank.splice(randNum, 1);
    this.currentWord = newWord.toString();
  }
  
}

const word = new Word();


const game = {
  guessedLetter: [],
  usedLetters: [],
  sortWord: [],
  //see if letter user guessd is in the word
  checkForLetter(letter){
   // convert into array and check for matching letter
    const splitString = word.currentWord.split("");
    for (var i = 0; i < splitString.length; i++){
      if (letter === splitString[i]){
        //
      console.log("you fucking rock, correct") //print to dom in appropriat place of word
      }else {
      console.log("guess again")
      }
    }
  }

 
}










