/**
 * Inverts an array into an object. This new object's keys are the array,
 * and its values are the indexes of that array.
 */
const _ = require('lodash');

module.exports = function(arr_, transform_) {
    return _.mapValues(_.invertBy(arr_),
                      function(value){
                          return transform_(value);
                      });
};
