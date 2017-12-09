/**
 * Create an array based on the length & initial value passed in.
 */
const _ = require('lodash');

module.exports = function(len, value = 0) {
    return _.fill(Array(len), value);
};
