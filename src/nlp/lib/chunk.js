/*
 * Functions that chunk text in 2 steps: strip non-letters first, 
 * then chunk into unigrams.
 */

module.exports = (function(){
	/**
	 * 1. Clean up sentences: all non-letters replaced with a whitespace.
	 */
	function keepOnlyLetters(sentence){
	  return sentence.replace(/[^a-z]/gi, ' ');
	};

	/**
	 * 2. Chunk text using whitespace as the separator
	 */
	function getChunks(sentence){
	  var camelCaseSplit = sentence.replace(/([a-z](?=[A-Z]))/g, '$1 ');
	  return camelCaseSplit.match(/\S+/g) || [];
	};

	return function(sentence) {
            var onlyLetters = keepOnlyLetters(sentence);
            var tokens = getChunks(onlyLetters);
            return tokens;
           };

})();
