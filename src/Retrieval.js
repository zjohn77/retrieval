/*DOCSTRING Indexes an array of texts based on bm25 similarity.*/
const math = require('mathjs');
const Bm25 = require('./Bm25/Bm25.js');
const query2vec = require('./query/query2vec.js');
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const Heap = require('heap');

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
        // STEP 1: Maps a query string to the vector space of the document collection.
        let queryVector = query2vec(query, this.termIndex);

        // STEP 2: Multiply the term weighted matrix by the query vector.
        // The resulting product is the vector of document scores.
        let docScores = math.multiply(this.docIndex, queryVector);
        return docScores;
        // STEP 4: Extract the highest scores using the heap.

        // STEP 5: Retrieve the best match documents.
    };

    return Retrieval;
})();
