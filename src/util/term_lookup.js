/**
 * Reverse index lookup given an array of query terms and a reverse index object.
 */
const _ = require('lodash');

module.exports = function(terms, termIndex) {
    return _.map(terms, _.propertyOf(termIndex));
};
