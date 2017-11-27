const _ = require('lodash');

/**
 * Inverts an array into an object. This new object's keys are the array,
 * and its values are the indexes of that array.
 */
module.exports = function(arr) {
  return _.zipObject(arr, _.range(arr.length));
};
