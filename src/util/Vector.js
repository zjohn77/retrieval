// STEP 1: Creates a binary vector based on termIndex.
// This vector is 1 when element = query keyword, and 0 otherwise.
const math = require('mathjs');
const makeZeros = require('./make_zeros.js');

function Vector(nrow) {
    makeZeros.call(this, len, 1, 'sparse');
}

Vector.prototype = makeZeros.prototype;
Vector.prototype.setSeveral = function(locatValueDict) {
    for(const [location, value] of Object.entries(locatValueDict)) {
        this.set([location, 0], value);
    }
};
