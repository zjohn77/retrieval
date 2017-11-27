/*DOCSTRING Indexes an array of texts based on bm25 similarity.*/
const chunkFilterStem = require('./nlp/chunk_filter_stem.js');
const Bm25 = require('./Bm25/Bm25.js');
const math = require('mathjs');
const reverseIndex = require('./util/reverse_index.js');

module.exports = (function(){
  	//CONSTRUCTOR
  	var Retrieval = function(K=1.6, B=0.75)	{
    		this.K = K;
    		this.B = B;
        this.docIndex = {};
        this.termIndex = {};
  	};

  	//METHODS
  	Retrieval.prototype.index = function(docArray) {
        // Convert the document list to a sparse matrix index.
        let bm25 = new Bm25(corpusMatr = docArray.map(chunkFilterStem),
                                K = this.K,
                                B = this.B);
        // creates a sparse matrix with initial data, number datatype.
        // this.docIndex = math.sparse(bm25.buildMatr(), 'number');

        // this.termIndex = reverseIndex(bm25.getTerms());
        // console.log(this.termIndex['mozart']);
   	};

  	Retrieval.prototype.search = function(query = 'Piano Concerto')	{
        // let stems = chunkFilterStem(query);
        var m1 = math.eye(2, 2, 'sparse');
        var m2 = math.zeros(2, 3, 'sparse');
        m2.set([0, 1], 5);
        var b = math.multiply(m1, m2);
        console.log(b);

        // console.log(  m.get([1, 0]));
        // var b = math.multiply(a, a);
  	};

    return Retrieval;
})();
