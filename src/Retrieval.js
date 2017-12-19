/*DOCSTRING Indexes an array of texts based on bm25 similarity.*/
const math = require('mathjs');
const Bm25 = require('./Bm25/Bm25.js');
const query2vec = require('./query/query2vec.js');
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const nArgmax = require('./util/n_argmax.js');

module.exports = (function() {
  	//CONSTRUCTOR
  	var Retrieval = function(K=1.6, B=0.75)	{
        this.docArray = [];
    		this.K = K;
    		this.B = B;
        this.docIndex = {};
        this.termIndex = {};
  	};

  	//METHODS
  	Retrieval.prototype.index = function(docArray) {
        this.docArray = docArray;

        // Convert the document list to a sparse matrix index.
        let bm25 = new Bm25(corpusMatr = this.docArray.map(chunkFilterStem),
                            K = this.K,
                            B = this.B);

        // Creates a sparse matrix with initial data; number datatype.
        this.docIndex = math.sparse(bm25.buildMatr(), 'number');

        // Creates a reverse index for fast keyword search.
        this.termIndex = bm25.getTerms();
   	};

  	Retrieval.prototype.search = function(query = 'Piano Concerto')	{
        // STEP 1: Maps a query string to the vector space of the document collection.
        let _queryVector = query2vec(query, this.termIndex);

        // STEP 2: Multiply the term weighted matrix by the query vector.
        // The resulting product is the vector of document scores.
        let _docScores = math.multiply(this.docIndex, _queryVector);
        // return docScores;

        // STEP 4: Extract the highest scores using the heap.
        nArgmax(_docScores)



        // STEP 5: Retrieve the best match documents.
        this.docArray
    };

    return Retrieval;
})();
