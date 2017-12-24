/**
 * Use the heap to select the indices for the 10 highest bm25 scores in
 * O(N * log(10)) computations.
 */
const nArgmax = require('./lib/n_argmax.js');
const sortKeys = require('sort-keys');
const asInt = require('../util/as_int.js');

module.exports = function(arr, n=10, asStr=false) {
    let sortedObj = sortKeys(nArgmax(arr, n));
    let indices = [].concat(...Object.values(sortedObj).reverse()
                    );
    if(asStr)
        return indices;
    return asInt(indices);
};
