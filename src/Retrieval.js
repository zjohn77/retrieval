/*
* Specifies a class whose primary functionality is taking an array of texts,
* parses it using natural language processing, indexes it via Okapi-BM25 representation,
* and enables natural language search of this collection of documents.
*/
const _ = require('lodash');
const math = require('mathjs');
const Bm25 = require('./Bm25/Bm25.js');
const query2vec = require('./query/query2vec.js');
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const topIndices = require('./score_selection/top_indices.js');

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

  	Retrieval.prototype.search = function(query_, N=10)	{
        // STEP 1: Maps a query string to the vector space of the document collection.
        let queryVector = query2vec(query_, this.termIndex);

        // STEP 2: The bm25 matrix X the query vector => vector of IR scores for this query.
        // concat & valueOf turns mathjs vector object into an array of document scores.
        let docScores = [].concat(...math.multiply(this.docIndex,
                                                   queryVector
                                                  ).valueOf()
                                 );

        // STEP 3: Retrieve the 10 highest scoring document indices.
        let topNIndices = topIndices(docScores).slice(0, N);

        // STEP 4: Retrieve the documents best matching the query.
        return topNIndices.map((idx) => this.docArray[idx])
    };

    return Retrieval;
})();
