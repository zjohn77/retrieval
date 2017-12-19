/**
 * Initialize sparse vector.
 */
const math = require('mathjs');

module.exports = function(len) {
    return math.zeros(len, 1, 'sparse');
};
