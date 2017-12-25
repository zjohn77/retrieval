/**
 * Initialize sparse vector.
 * @exports {Function} that takes a length parameter, and then
 * makes a mathjs sparse zero vector of the specified length.
 */
const math = require('mathjs');

module.exports = function(len_) {
    return math.zeros(len_, 1, 'sparse');
};
