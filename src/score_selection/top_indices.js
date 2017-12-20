/**
 * Use the heap to select the indices for the 10 highest bm25 scores in
 * O(N * log(10)) computations.
 */
const sortKeys = require('sort-keys');
const nArgmax = require('./lib/n_argmax.js');

module.exports = function(arr) {
    let getTopIndices = _.flow([nArgmax, sortKeys, Object.values]);
    return [].concat(...getTopIndices(arr)
                        .reverse()
                    );
};
