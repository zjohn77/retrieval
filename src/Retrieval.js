/*
 * Specifies a class whose primary functionality is taking an array of texts,
 * parsing it using natural language processing, indexes it via Okapi-BM25 
 * representation, and enabling full-text search on this collection of 
 * documents.
 */
const _ = require('lodash');
const math = require('mathjs');
const Bm25 = require('./Bm25/Bm25.js');
const query2vec = require('./query/query2vec.js');
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const topIndices = require('./score_selection/top_indices.js');

module.exports = (function() {
	//CONSTRUCTOR
  	var Retrieval = function(K=1.6, B=0.75) {
		this.docArray = [];
		this.K = K;
		this.B = B;
		this.docIndex = {};
		this.termIndex = {};
  	};

     
  	//METHODS
  	Retrieval.prototype.index = function(docArray) {
		this.docArray = docArray;

		// Convert the document list to a sparse matrix search index.
		let bm25 = new Bm25(corpusMatr = this.docArray.map(chunkFilterStem),
								  K = this.K,
                          B = this.B
                         );

		// Create a sparse matrix with initial data and the 'number' datatype.
		this.docIndex = math.sparse(bm25.buildMatr(), 
											 'number'
											);

		// Create a reverse index for fast keyword search.
		this.termIndex = bm25.getTerms();
	};


  	Retrieval.prototype.search = function(query_, N=10) {
		// Project query to vector space spanned by the indexed documents.
      		
      // STEP 1: Vectorize the query string and then multiply it by the bm25 matrix, which equals
      // a vector of bm25 scores for this query. Finally, concat & valueOf turns mathjs vector object 
      // into an array of document scores.
      try {
			var queryVector = query2vec(query_, 
												 this.termIndex
												);
		}
		catch(error) {
			return [];
		}
      
      let docScores = [].concat(...math.multiply(this.docIndex,
																 queryVector
																)
													.valueOf()
										 );


		// STEP 2: Retrieve the 10 highest scoring document indices.
		let topNIndices = topIndices(docScores).slice(0, N);


		// STEP 3: Retrieve the documents best matching the query.
		return topNIndices.map((idx) => this.docArray[idx])
	};


   return Retrieval;
})();