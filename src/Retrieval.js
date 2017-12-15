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
        // STEP 1: Parse the query string.
        chunkFilterStem(query);
        // STEP 2: Find the keyword locations in the index.
        queryVector = setEntry(locateKeywords(keywords));
        // STEP 3: Multiply the term weighted matrix by the query vector.
        // The resulting product is the vector of document scores.
        let prod = math.multiply(this.docIndex, queryVector);
        // STEP 4: Extract the highest scores using the heap.
        // STEP 5: Retrieve the best match documents.

    return Retrieval;
})();
