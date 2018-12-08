var termCountVectorizerModule = (function() {
  /**
   * 1. Callback fcn taking an array (i.e. document) element; 
   * tallies how many times each term (element) is found in document.
   */
  function tallyTermFreq(runningCountTable, curTerm) {
    if(curTerm in runningCountTable){
      runningCountTable[curTerm]++;// current term is found in collection of previous terms.
    }
    else{
      runningCountTable[curTerm] = 1;
    }
    return runningCountTable;
  }
  //convert an input corpus to an array of term-freq dicts
  return function(corpus) {
          return corpus.map(function(document) {
            return document.reduce(tallyTermFreq, {});
          });
        };
})();

module.exports = termCountVectorizerModule;