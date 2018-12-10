/**
 * Reverse index lookup given an array of query terms and a
 * reverse index object. Filter the undefined elements, 
 * which indicate that the term is not found within the Index.
 */
const _ = require('lodash');

module.exports = function(terms, termIndex) {
    return _.map(terms, _.propertyOf(termIndex))
            .filter(elem => elem !== undefined);
};