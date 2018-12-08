/*
 * Chunk, filter, then stem, in that order.
 */
const chunker = require("./lib/chunk.js");
const removeStopwords = require("./lib/filter_stopwords.js");
const porter = require("./lib/stem_porter2.js");

module.exports = function(sentence) {
  var lower = sentence.toLowerCase();//maps a string to another string
  var tokens = chunker(lower);//maps a string to an array
  var noStopwords = removeStopwords(tokens);//maps an array to another array
  var stems = noStopwords.map(porter.stem, porter);
  return stems;
};
