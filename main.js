var prompt = require('prompt');
// found
prompt.start();

//////letter.js//////
var Letter = function(let) {
	//make a charac property and set it to what you think makes
	this.charac = let;

	//make an appear property and set it to what makes sense
	this.appear = false;

	//make a letterRender property and set it to a function that does what you think makes sense
	this.letterRender = function() {
		if (this.appear == true) {
			return(this.charac);
		} else {
			return " _ ";
		}
	}
};
//////end of letter.js//////

//////word.js//////
function Word(wrd) {
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;
	// console.log(this.word);
	// console.log(this.word.length);

	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets = [];

	//set a property called found to false
	this.found = false;

	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getLets = function() {
		for (var i = 0; i < this.word.length; i++) {
			this.lets.push(new Letter(this.word.charAt(i)));
		};
	};

	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		// console.log("Did We Find The Word?");
		var wordFoundCounter = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].appear == true) {
				wordFoundCounter++;
			};
		};

		if (wordFoundCounter === this.lets.length) {
			this.found = true;
		} else {
			this.found =false;
		};

		//return the found property
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0;

		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (var i=0; i < this.lets.length; i++){
			if (this.lets[i].charac === guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}

		//return whatToReturn
		return whatToReturn;
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		// console.log(this.lets);
		for (var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		}

		//return str
		return str;
		// console.log(str);
	};
	this.getLets();
	// console.log(this.lets);
	this.checkIfLetterFound();
}
//////end of word.js///////

game = {
	wordBank : ["aabcc", "def", "ghi"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word (this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		console.log(this.currentWrd);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    console.log(result);
		    
		    console.log('  The letter or space you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
		    	console.log('You guessed wrong!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You guessed right!');

		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()){
			    	// console.log('You Won!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log('here are the letters you guessed already: ');

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	// console.log('Game over bro it was ', self.currentWrd.word);
		    	// console.log('Get with the program man');
		    }else{
		    	// console.log(self.currentWrd.wordRender());
		    }
		});
	}
};
game.startGame();