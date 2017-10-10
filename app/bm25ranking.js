/*
* Vectorize the NLP/chunked/lemmatized texts to matrix of BM25 weights.
*/

const Bm25 = require("../lib/bm25");

console.log(nlprocess('John is a data scientist who happens to like coffee.'));

// titleUrls.map(chunkFilterStem);
// var docTermMatr = bm25(titleTokensMatr);// computes the matrix of BM25 weights
