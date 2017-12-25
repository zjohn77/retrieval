/**
 * Function applying the BM25 formula to key parameters.
 */
module.exports = (function() {
  return function(tf, idf, relDL, K=1.6, B=0.75)
          {
            let verbose = (B * relDL) + 1 - B;
            let tfSaturate = tf / (K * verbose + tf);
            return idf * tfSaturate; // computes the bm25 weight using its formula
          };
})();
