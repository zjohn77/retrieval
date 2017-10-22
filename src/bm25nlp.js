/*
* Defines a function that takes an array of texts; chunks and lemmatizes it;
* compute a Okapi-BM25 vector representation of this collection of documents.
*/
const chunkFilterStem = require("./nlp/chunk_filter_stem.js"); // class definition
const Bm25 = require("./Bm25/Bm25.js"); // class definition

module.exports = function(docArray){
  // Convert the document list to a list of word stems.
  let stemsArray = docArray.map(chunkFilterStem)
                           .filter(function(arr){
                                    return arr.length > 0;
                                  });
  let bm25 = new Bm25(corpusMatr=stemsArray, K=1.6, B=0.75);
  return bm25.buildMatr();
};
