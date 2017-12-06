const _ = require('lodash');

/**
 * Inverts an array into an object. This new object's keys are the array,
 * and its values are the indexes of that array.
 */
// module.exports = function(arr) {
//   return _.zipObject(arr, _.range(arr.length));
// };

module.exports = function(arr, unique = false) {
    let inverted = unique ? _.invert(arr) : _.invertBy(arr);

    return _.mapValues(inverted, function(value) {
        return parseInt(value, 10);
      });
};
