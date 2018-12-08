/*
 * Maps a query string input to the vector space spanned by the words of the
 * collection of documents we're searching on.
 */
const _ = require('lodash');
const makeZeros = require('../util/make_zeros.js');
const locateKeywords = require('./lib/locate_keywords.js');
const setEntries = require('../util/set_entries.js');

module.exports = function(query_, termIndex_) {
    return setEntries(makeZeros(_.size(termIndex_)),
                      locateKeywords(query_, termIndex_));
};
