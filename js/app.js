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
    this.currentWord = [];
  } 
  pickRandomWord (){
    const randNum = Math.floor(Math.random() * this.wordBank.length + 1)
    const newWord = this.wordBank.splice(randNum, 1);
    this.currentWord.push(newWord)
    console.log(this.wordBank.splice(randNum, 1))
  }
  checkForLetters(){
    // convert into array and check for matching letter
    for (let i = 0; i < currentWord.length; i++){
      // if (currentWord[i])
    }

  }
}

const word = new Word();
