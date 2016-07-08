////// letter.js //////
var Letter = function(let) {
	// charac property defined as the Letter parameter
	this.charac = let;

	// appear property that is set to false by default. when this.appear is false, the letter will appear as "_", when this.appear is true, the letter will appear as the letter
	this.appear = false;

	// letterRender function determines how this.appear switches from false to true
	this.letterRender = function() {
		if (this.appear == true) {
			return(this.charac);
		} else {
			return " _ ";
		}
	};
};

module.exports = Letter;