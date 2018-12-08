/*
 * Computes a hashtable that maps the unique terms of a corpus to their
 * IDF's.
 */
const vocab = require("./lib/vocab.js");
const idf = require("./lib/idf.js");

module.exports = (function() {
  return function(tfMaps) {
          // Object.keys pulls just the unique terms; vocab() takes the 
          // set union over all these arrays.
          var uniqTerms = vocab(tfMaps.map(Object.keys, Object)
                               );

          var idfMap = new Object(); // Initialize the Map object to hold 
          // the vocabulary set along with each term's corresponding 
          // idf weight.

          uniqTerms.forEach(function(term) {
            idfMap[term] = idf(term, tfMaps);
          });

          return idfMap;
        };
})();