const _ = require('lodash');
const chunkFilterStem = require('../nlp/chunk_filter_stem.js');
const initArray = require('../util/init_array.js');
const makeZeros = require('../util/make_zeros.js');
const termLookup = require('../util/term_lookup.js');

module.exports = function(query, termIndex) {
    let _terms = chunkFilterStem(query);
    let _indexPositions = termLookup(_terms, termIndex);
    let _weightsAtPositions = initArray(_indexPositions.length, 1);
    return _.zipObject(_indexPositions, _weightsAtPositions);
};
