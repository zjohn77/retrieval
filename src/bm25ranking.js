/*
* Vectorize the NLP/chunked/lemmatized texts to matrix of BM25 weights.
*/
const chunkFilterStem = require("./nlp/chunk_filter_stem.js"); // class definition
const Bm25 = require("./Bm25/Bm25.js"); // class definition

module.exports = function(docArray){
  // Convert the document list to a list of word stems.
  let stemsArray = docArray.map(chunkFilterStem)
                           .filter(function(arr){
                                    return arr.length > 0;
                                  });
  let bm25 = new Bm25(stemsArray);
  return bm25.buildMatr();
};

// module.exports = function(docs){
//   // Applies NLProc to each document in an array of documents (a.k.a. corpus).
//   let bagOfWords = [];
//   for(let i = 0; i < docs.length; i++)
//   {
//     bagOfWords.push(applyNLP(docs[i]));
//   }
//   // APPLY LODASH'S _FOREACH HERE.
//
//   Bm25(bagOfWords);
// };

// console.log(nlprocess('John is a data scientist who happens to like coffee.'));
// titleUrls.map(chunkFilterStem);
// var docTermMatr = bm25(titleTokensMatr);// computes the matrix of BM25 weights
