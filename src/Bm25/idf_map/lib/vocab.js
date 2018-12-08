/*
 * HELPER FUNCTION to compute the unique vocabulary set of a corpus.
 */
module.exports = (function() {
  
  Set.prototype.__arrUnion = function(arr) {
    arr.forEach(this.add, this); //'this' refers to the Set that called the method here.
  }

  // For a given 2D array, returns the set union of its elements.
  return function(matr) {
          var unionOfVector = new Set();
          matr.forEach(unionOfVector.__arrUnion, unionOfVector); 
          //union in-place
          
          return unionOfVector;
         };
})();
