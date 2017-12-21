/**
 * Use the heap to select the indices for the 10 highest bm25 scores in
 * O(N * log(10)) computations.
 */
const nArgmax = require('./lib/n_argmax.js');
const sortKeys = require('sort-keys');

module.exports = function(arr, n=10) {
    let sortedObj = sortKeys(nArgmax(arr, n));
    return [].concat(...Object.values(sortedObj).reverse()
                    );
};
