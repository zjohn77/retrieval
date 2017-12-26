var assert = require('assert');
var uniqTerms = require("../src/Bm25/idf_map/lib/vocab.js");
var idfMap = require("../src/Bm25/idf_map/idf_map.js");
var docLen = require("../src/Bm25/vec_space/lib/doc_len.js");
var vsm = require("../src/Bm25/vec_space/vec_space.js");
var Bm25 = require("../src/Bm25/Bm25.js");

describe('Using the same corpus, test all essential fcns of the BM25 app.',
  function() {
    before(function() {
        // A two-document corpus to test idf_map functions.
        corpus = [ {"over":1,
                    "great":1,
                    "Buck":1,
                    "ruled":1},
                   {"Buck":1,
                    "house":1,
                    "dog":2,
                    "kennel":1} ];

        // A two-document corpus to test vec_space functions.
        sampMatr = [['uk','gramophone','gramophone','discussion'],
        				    ['gramophone','into','general','discussion','into','into']];
        let _doc1 = {'uk': 1,
                     'gramophone': 2,
                     'discussion': 1};
        let _doc2 = {'gramophone': 1,
                     'into': 3,
                     'general': 1,
                     'discussion': 1};
        vsmObj = {'docLens': [0.8, 1.2],
                  'docs': [_doc1, _doc2]};
    });

    it('1. should compute the vocabulary set of a document collection',
      function() {
        let vocabulary = new Set(['over', 'great', 'Buck', 'ruled', 'house', 'dog', 'kennel']);
        assert.deepStrictEqual(vocabulary,
                               uniqTerms(corpus.map(Object.keys, Object)));
    });

    it('2. should compute the IDF of each word in that vocabulary',
      function() {
        let idf = {'over':1,
                   'great':1,
                   'Buck':0.5945348918918356,
                   'ruled':1,
                   'house':1,
                   'dog':1,
                   'kennel':1};
        assert.deepStrictEqual(idf, idfMap(corpus));
    });

    it('3. should compute vector of relative document lengths for each doc in corpus',
      function() {
        assert.deepStrictEqual([0.8, 1.2], docLen(sampMatr));
    });

    it('4. should compute a Vector Space Object from a document collection',
      function() {
        assert.deepStrictEqual(vsmObj, vsm(sampMatr));
    });

    it('5. should build the BM25 matrix based on a document collection',
      function() {
        // The resulting BM25 weighted doc-term matrix for the above sample corpus.
        let bm = new Bm25(sampMatr);
        let bm25matr = [ [  0.42372881355932196,
                            0.3538898166022831,
                            0.25192156436094726,
                            0,
                            0 ],
                          [ 0,
                            0.20934327179289988,
                            0.20934327179289988,
                            0.6198347107438017,
                            0.35211267605633806 ] ];
        assert.deepStrictEqual(bm25matr, bm.buildMatr());
    });
});
