// STEP 1: Creates a binary vector based on termIndex.
// This vector is 1 when element = query keyword, and 0 otherwise.
const makeZeros = require('./make_zeros.js');
require("babel-polyfill");

module.exports = function(vector, locatValueDict) {
    for(const [location, value] of Object.entries(locatValueDict)) {
        vector.set([parseInt(location, 10), 0], value);
    }
    return vector;
}
