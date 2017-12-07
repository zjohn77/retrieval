/*DOCSTRING Indexes an array of texts based on bm25 similarity.*/
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const Bm25 = require('./Bm25/Bm25.js');
const math = require('mathjs');
var _ = require('lodash');

module.exports = (function() {
  	//CONSTRUCTOR
  	var Retrieval = function(K=1.6, B=0.75)	{
    		this.K = K;
    		this.B = B;
        this.docIndex = {};
        this.termIndex = {};
        this.queryVector = {};
  	};

  	//METHODS
  	Retrieval.prototype.index = function(docArray) {
        // Convert the document list to a sparse matrix index.
        let bm25 = new Bm25(corpusMatr = docArray.map(chunkFilterStem),
                            K = this.K,
                            B = this.B);

        // Creates a sparse matrix with initial data; number datatype.
        this.docIndex = math.sparse(bm25.buildMatr(), 'number');

        // Creates a reverse index for fast keyword search.
        this.termIndex = bm25.getTerms();
   	};

  	Retrieval.prototype.search = function(query = 'Piano Concerto')	{
        // STEP 1: Creates a binary vector based on termIndex.
        // This vector is 1 when element = query keyword, and 0 otherwise.
        this.queryVector = math.zeros(_.size(this.termIndex), 1, 'sparse');//Initialize sparse vector.

        chunkFilterStem(query)
          .map(function(word){
              return this.termIndex[word];
          }, this)
          .forEach(function(position){
              this.queryVector.set([position, 0], 1);
          }, this);

        // STEP 2: Multiply the term weighted matrix by the query vector.
        // The resulting product is the vector of document scores.
        let prod = math.multiply(this.docIndex, this.queryVector);

        console.log(prod);
  	};

    return Retrieval;
})();
