/*DOCSTRING Indexes an array of texts based on bm25 similarity.*/
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const Bm25 = require('./Bm25/Bm25.js');
const math = require('mathjs');

module.exports = (function(){
  	//CONSTRUCTOR
  	var Retrieval = function(K=1.6, B=0.75)	{
  		this.K = K;
  		this.B = B;
      this.docIndex = {};
  	};

  	//METHODS
  	Retrieval.prototype.index = function(docArray)	{
      // Convert the document list to a sparse matrix index.
      let bm25 = new Bm25(corpusMatr = docArray.map(chunkFilterStem),
                              K = this.K,
                              B = this.B);
      // creates a sparse matrix with initial data, number datatype.
      this.docIndex = math.sparse(bm25.buildMatr(), 'number');
   	};

  	Retrieval.prototype.search = function(query={})	{
      console.log(this.docIndex);
  	};

    return Retrieval;
})();
