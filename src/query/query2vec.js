/*
* STEP 1: Parse the query string.
* STEP 2: Find the keyword locations in the index.
*/
const _ = require('lodash');
const locateKeywords = require('./lib/locate_keywords.js');
const makeZeros = require('../util/make_zeros.js');
const setEntries = require('../util/set_entries.js');

module.exports = function(query, termIndex) {
    let indexPositions = locateKeywords(query, termIndex);

    let zerosVector = makeZeros(_.size(termIndex));

    return setEntries(zerosVector, indexPositions);
};
