/**
 * Looks up a query (as a string) in a reverse index.
 */
const _ = require('lodash');
const chunkFilterStem = require('../../nlp/chunk_filter_stem.js');
const initArray = require('../../util/init_array.js');
const makeZeros = require('../../util/make_zeros.js');
const termLookup = require('../../util/term_lookup.js');

module.exports = function(query_, termIndex_) {
    let terms = chunkFilterStem(query_);

    // Get the value for each key in a reverse-index; save it in an array.
    // Then, initialize an array of 0's based on the array above.
    let indexPositions = termLookup(terms, termIndex_)
    let weightsAtPositions = initArray(indexPositions.length,
                                       1);
    return _.zipObject(indexPositions, weightsAtPositions);
};
