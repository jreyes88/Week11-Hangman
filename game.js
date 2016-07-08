//game.js - word bank in this file, start with something small like "abc"; inquirer questions

var prompt = require('prompt');
var lettersGuessed = [];

prompt.start();

prompt.get(['letter'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('Letter: ' + result.letter);
    lettersGuessed.push(result.letter);
    console.log(lettersGuessed);
});


//https://youtu.be/GVNuJLfVCNU last ten minutes or so
//NPM: inquirer
//use regex to validate user input

//from rob's lecture:

//game.js
exports.wordBank = ['a', 'b'].


exports.game = {
	//this.wordChoices = ["heart and soul", "relax", "burning up", "manic monday", "into the groove", "invisible touch", "rebel yell"];
	wordBank : ["relax"]
};