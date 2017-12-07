// STEP 1: Creates a binary vector based on termIndex.
// This vector is 1 when element = query keyword, and 0 otherwise.
const _ = require('lodash');
const math = require('mathjs');
const chunkFilterStem = require('../nlp/chunk_filter_stem.js');
const makeZeros = require('../util/make_zeros.js');

let words = chunkFilterStem(query);

function locations(words, termIndex) {
    return _.map(words, _.propertyOf(termIndex));
}

let locatValueDict = locations(words, termIndex);

vector.prototype.setSeveral = function(locatValueDict) {

    for(const [location, value] of Object.entries(locatValueDict)) {
        this.set([location, 0], value);
    }

};

// var array = ['a', 'c'],
//     object = { 'a': 4, 'b': 7, 'c': 9 };

module.exports = function(query, termIndex) {
};
