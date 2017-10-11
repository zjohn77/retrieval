const corpus = require("../lib/corpus_creator"); // an array of documents
const applyNLP = require("../lib/NLProc"); // fcn that applies NLP to a str

// Applies NLProc to each document in an array of documents (a.k.a. corpus).
let bagOfWords = [];
for(let i = 0; i < corpus.length; i++)
{
  bagOfWords.push(applyNLP(corpus[i]));
}

module.exports = bagOfWords;
