/*
* Vectorize the NLP/chunked/lemmatized texts to matrix of BM25 weights.
*/
const applyNLP = require("../lib/NLProc"); // fcn that applies NLP to a str
const Bm25 = require("../lib/bm25"); // class definition

module.exports = function(docs){
  // Applies NLProc to each document in an array of documents (a.k.a. corpus).
  let bagOfWords = [];
  for(let i = 0; i < docs.length; i++)
  {
    bagOfWords.push(applyNLP(docs[i]));
  }
  // APPLY LODASH'S _FOREACH HERE.

  Bm25(bagOfWords);
};

// console.log(nlprocess('John is a data scientist who happens to like coffee.'));
// titleUrls.map(chunkFilterStem);
// var docTermMatr = bm25(titleTokensMatr);// computes the matrix of BM25 weights
