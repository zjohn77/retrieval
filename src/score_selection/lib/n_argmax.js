/*
 * Find a given array's n-biggest values and their indexes (argmax).
 */
const _ = require('lodash');
const Heap = require('heap');

module.exports = function(arr, n=10) {
    // Subset the reverse index so that both the largest elements
    // and the indices where they occur are returned.
    return _.pick(_.invertBy(arr),
                  Heap.nlargest(arr, n)
                 );
};
