const assert = require('assert');
const locateKeywords = require('../src/query/lib/locate_keywords.js');
const query2vec = require('../src/query/query2vec.js');

describe("fcns that map query string to the corpus' vector space", function() {
    before(function() {
        query = 'bar food';
        index = {'food': 2,
                 'bar': 0,
                 'football': 1};
    });

    it('should make an object based on query locations', function(){
        assert.deepEqual({'2': 1, '0': 1}, locateKeywords(query, index));
    });

    it("should map term vector => indicator vector for query words", function(){
        assert.deepEqual('[[1], [0], [1]]', query2vec(query, index).toString());
    });

});
