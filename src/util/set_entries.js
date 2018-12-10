/**
 * @exports {Function} that uses a reverse-index of the terms to
 * create a binary vector (1 if is keyword, and 0 otherwise).
 */
const makeZeros = require('./make_zeros.js');

module.exports = function(vector, locatValueDict) {
    for(const [location, value] of Object.entries(locatValueDict)) {
        vector.set([parseInt(location, 10), 0], value);
    }
    return vector;
}