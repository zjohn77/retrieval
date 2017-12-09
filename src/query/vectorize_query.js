// STEP 1: Creates a binary vector based on termIndex.
// This vector is 1 when element = query keyword, and 0 otherwise.
const math = require('mathjs');

vector.prototype.setSeveral = function(locatValueDict) {

    for(const [location, value] of Object.entries(locatValueDict)) {
        this.set([location, 0], value);
    }

};
