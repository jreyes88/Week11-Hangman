//word.js - method to check if a letter is inside of a word, should contain all of the methods which check the letters guessed versus the random word selected

//import Letter above with requiring the letter.js file

function Word(wrd) {
	//set a property called word and set it equal to what you think it should be
	this.word = wrd;

	//set a property called lets to an empty array. We will eventually push letter objects in here
	this.lets = [];

	//set a property called found to false
	this.found = false;

	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	this.getLets = function() {
		for (var i = 0; i < this.words.length; i++) {
			this.lets.push(this.words[i]);
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

		//return whatToReturn
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = "";

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str

		//return str
	};
}

//export the Word constructor here at the end
exports.Word = {
	
};