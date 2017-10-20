/*DOCSTRING: Fcn to compute the inverse document frequency of some input term.*/
module.exports = (function()
{
  /**
   * Calc idf by looping over docs in corpus; tallying the number of docs the given term appears in.
   * @param  {String} term
   * @param  {Array} termFreqMaps
   * @return {Number} the inverse document frequency of the input term
   */
  return function(term, termFreqMaps)
         {
          var numDocs = termFreqMaps.length;
          var docsAppear = 0;
          for(let i in termFreqMaps)
          {
            // loop over docs in corpus, increment by 1 if term is seen in a given doc
            docsAppear += ( termFreqMaps[i].hasOwnProperty(term) ? 1 : 0 );
          }
          //Add 1 to log to shift log curve above 0 so that terms are guaranteed strictly positive weight.
          //Add 1 in denominator to prevent division by 0 when a term doesn't appear in a document.
          return 1 + Math.log(numDocs / (1 + docsAppear));
         };
})();
