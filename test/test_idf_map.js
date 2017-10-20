var assert = require('assert');
var uniqTerms = require("../src/Bm25/idf_map/lib/vocab.js");
var idfMap = require("../src/Bm25/idf_map/idf_map.js");

describe('Build a small test corpus, and test the IDF fcn. Also test its helper fcn.', function() {
    before(function() {
      // Make a test corpus.
      var doc1 = {"over":1,
                  "great":1,
                  "Buck":1,
                  "ruled":1};
      var doc2 = {"Buck":1,
                  "house":1,
                  "dog":2,
                  "kennel":1};
      corpus = [doc1, doc2];
      vocabulary = new Set(['over', 'great', 'Buck', 'ruled', 'house', 'dog', 'kennel']);
      idf = {'over':1,
             'great':1,
             'Buck':0.5945348918918356,
             'ruled':1,
             'house':1,
             'dog':1,
             'kennel':1};
    });

    it('should compute the unique vocabulary set of the corpus', function(){
      assert.deepStrictEqual(vocabulary, uniqTerms(corpus.map(Object.keys, Object)));
    });

    it('should compute the IDF of each word in that vocabulary', function(){
      assert.deepStrictEqual(idf, idfMap(corpus));
    });
});
