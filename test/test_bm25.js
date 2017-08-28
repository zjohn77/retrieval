var assert = require('assert');
var docLen = require("../app/view/lib/doc_len.js");
var vsm = require("../app/view/corpus2vsm.js");
var Bm25 = require("../app/controller/bm25.js");

describe('Using the same corpus, test all essential fcns of the BM25 app.', function() {
    before(function() {
      // Define a two-document sample corpus.
      sampMatr = [['uk','gramophone','gramophone','discussion'],
      				    ['gramophone','into','general','discussion','into','into']];

      // What the outcome document dicts will look like for this sample corpus.
      var doc1 = {'uk': 1,
                  'gramophone': 2,
                  'discussion': 1};
      var doc2 = {'gramophone': 1,
                  'into': 3,
                  'general': 1,
                  'discussion': 1};
      vsmObj = {'docLens': [0.8, 1.2],
                'docs': [doc1, doc2]};

      // The resulting BM25 weighted doc-term matrix for the above sample corpus.
      bm = new Bm25(sampMatr);
      bm25matr = [ [  0.42372881355932196,
                      0.3538898166022831,
                      0.25192156436094726,
                      0,
                      0 ],
                    [ 0,
                      0.20934327179289988,
                      0.20934327179289988,
                      0.6198347107438017,
                      0.35211267605633806 ] ];
    });//closing parenthesis of the before fcn

    it('should compute vector of relative document lengths for each doc in corpus', function(){
      assert.deepStrictEqual([0.8, 1.2], docLen(sampMatr));
    });

    it('should compute a Vector Space Object from a corpus', function(){
      assert.deepStrictEqual(vsmObj, vsm(sampMatr));
    });

    it('should build the BM25 doc-term matrix of that corpus', function(){
      assert.deepStrictEqual(bm25matr, bm.buildMatr());
    });
});
