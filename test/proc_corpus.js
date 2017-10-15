const corpus = require("../node_modules/corpus_creator"); // an array of documents
const applyNLP = require("../node_modules/NLProc"); // fcn that applies NLP to a str
const Bm25 = require("../node_modules/Bm25"); // fcn that applies NLP to a str

console.log(corpus.map(applyNLP));
// bm25 = Bm25(corpus.map(applyNLP));
// console.log(bm25.buildMatr());

// Applies NLProc to each document in an array of documents (a.k.a. corpus).
// let bagOfWords = [];
// for(let i = 0; i < corpus.length; i++)
// {
//   bagOfWords.push(applyNLP(corpus[i]));
// }
// module.exports = bagOfWords;

// module.exports = _.each(corpus, applyNLP);
