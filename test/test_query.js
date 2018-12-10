const assert = require('assert');
const locateKeywords = require('../src/query/lib/locate_keywords.js');
const query2vec = require('../src/query/query2vec.js');

describe("fcns that map query string to the corpus' vector space", function() {
    before(function() {
        query = 'bar food';
        searchIndex = {'food': 2,
                       'bar': 0,
                       'football': 1};
    });

    it('should make an object based on query locations', function(){
        assert.deepEqual({'2': 1, '0': 1}, locateKeywords(query, searchIndex));
        // The keys in {'2': 1, '0': 1} come from lookup of query words in searchIndex.keys; 
        // the values in {'2': 1, '0': 1} are always set to 1 because they are used to build
        // an indicator vector later in "set_entries.js".
    });

    it("should map term vector => indicator vector for query words", function(){
        assert.deepEqual('[[1], [0], [1]]', query2vec(query, searchIndex).toString());
        // The 0th and the 2nd element are set to 1 (to indicate presence in query).
        // The 1st element is set to 0 (to indicate absence from query).
    });
});