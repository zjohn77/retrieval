/**
 * Reads sample_corpus.txt and makes it available for NLP as a corpus.
 */
const fs = require("fs");
const sentence_parser = require('./lib/tokenize_sentence.js');

let txtInput = fs.readFileSync(__dirname + '/data/sample_corpus.txt', 'utf8');
let corpus = sentence_parser(txtInput);
module.exports = corpus;
