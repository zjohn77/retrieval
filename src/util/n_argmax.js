/**
 * Find a given array's n-biggest values and their indexes (argmax).
 */
const _ = require('lodash');
const Heap = require('heap');

module.exports = function(arr=[70, 6, 6, 4], n=10) {
    let _invObj = _.invertBy(arr);

    // Subset the reverse index so that both the largest elements
    // and the indices where they occur are returned.
    return _.pick(_invObj,
                  Heap.nlargest(Object.keys(_invObj), n)
                 );
};
