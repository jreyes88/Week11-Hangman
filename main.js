var prompt = require('prompt');
// var Word = require('./word.js');
// var Letter = require('./letter.js');

prompt.start();

//////will become letter.js//////
//letter.js - use this to grab what the letter is; should control whether or not a letter appears as a "_" or as itself on screen

var Letter = function(let) {
	//make a charac property and set it to what you think makes sense
	this.charac = "";

	//make an appear property and set it to what makes sense
	this.appear = function() {
		for (var i = 0; i < let.length; i++)
	}

	//make a letterRender property and set it to a function that does what you think makes sense

};

//export the Letter constructor here
// exports.Letter = Letter();
//////end of letter.js//////


//////will become word.js//////
function Word(wrd) {
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;
	console.log(this.word);
	console.log(this.word.length);

	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets = [];

	//set a property called found to false
	this.found = false;

	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getLets = function() {
		for (var i = 0; i < this.word.length; i++) {
			this.lets.push(this.word[i]);
		};
	};

	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not

		//return the found property
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0;

		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (var i=0; i < lets.length; i++){
			if (lets[i] === guessLetter) {
				<<letterTHING>>.appear = true;
				whatToReturn++;
			}
		}

		//return whatToReturn
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i = 0; i < lets.length; i++) {
			str.append
		}

		//return str
	};
	this.getLets();
	console.log(this.lets);
	checkIfLetterFound();
}
///////

game = {
	wordBank : ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word (this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

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
		    //console.log(result);
		    
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
			    	console.log('You Won!!!');
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
		    	console.log('Game over bro it was ', self.currentWrd.word);
		    	console.log('Get with the program man');
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}
};

game.startGame();