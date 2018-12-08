/*
 * Build an array of the relative length of each document in a corpus.
 */
var _ = require('lodash');

module.exports = (function() {
	/*
	 * For a given matrix, find each row's length, and return these lengths 
	 * as an array.
	 */
	return function(matr) {
		    	let docLengths = matr.map(row => row.length);

				// Compute avg length of the corpus from an array of doc lengths.
		    	let avDocLength = _.sum(docLengths) / matr.length;
		    	return docLengths.map(docLength => docLength / avDocLength);
		    };
})();
