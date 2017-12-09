const _ = require('lodash');

module.exports = function(terms, termIndex) {
    return _.map(terms, _.propertyOf(termIndex));
};
