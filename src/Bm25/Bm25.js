/*DOCSTRING Compute bm25*/
const bm25formula = require("./bm25formula/bm25formula.js");
const idfMap = require("./idf_map/idf_map.js");
const vecSpace = require("./vec_space/vec_space.js");

module.exports = (function() {
		//CONSTRUCTOR
		let Bm25 = function(corpusMatr, K = 1.6, B = 0.75) {
				let vecSpaceObj = vecSpace(corpusMatr);
				this.docLens = vecSpaceObj.docLens;
				this.docs = vecSpaceObj.docs;

				this.idfMap = idfMap(vecSpaceObj.docs);
				this.terms = Object.keys(this.idfMap);
				this.K = K;
				this.B = B;
		};

		//METHODS
		Bm25.prototype.buildRow = function(docIdx) {
				return this.terms.map(function(term) {
																let docLen = this.docLens[docIdx];
																let tf = this.docs[docIdx][term] || 0;
																let idf = this.idfMap[term];
																return bm25formula(tf, idf, docLen, this.K, this.B);
															}, this);
			};

		Bm25.prototype.buildMatr = function()	{
				let bmMatr = new Array(this.docs.length);
				for(let i = 0; i < this.docs.length; i++) {
					bmMatr[i] = this.buildRow(i);
				}
				return bmMatr;
		};

		Bm25.prototype.getTerms = function() {
			//return the inverted index obj based on the array of unique terms
				return this.terms;
		};

		return Bm25;
})();
