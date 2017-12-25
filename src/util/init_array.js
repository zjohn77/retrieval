/**
 * Create an array based on the length & initial value passed in.
 * @exports {Function} that takes a length parameter as well as the value with
 * which you want to fill the array, and it creates such an array.
 */
const _ = require('lodash');

module.exports = function(len_, value_=0) {
    return _.fill(Array(len_), value_);
};
