const bm25ranking = require("./bm25ranking.js");
const corpus = require("../demo/corpus_creator/make_corpus.js");
// console.log(corpus);
console.log(bm25ranking(corpus));
