const corpus = require("../demo/corpus_creator/make_corpus.js");
const bm25ranking = require("../src/bm25nlp.js");
// console.log(corpus);
console.log(bm25ranking(corpus));
