/**
 * Inverts an array into an object. This new object's keys are the array,
 * and its values are the indexes of that array.
 */
const _ = require('lodash');

module.exports = function(arr, transform) {
    let invObj = _.invertBy(arr);
    return _.mapValues(invObj, function(value){
        return transform(value);
    });
};
