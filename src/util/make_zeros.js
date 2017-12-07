/**
 * Initialize sparse vector.
 */
module.exports = function(obj) {
    return math.zeros(_.size(obj), 1, 'sparse');
};
