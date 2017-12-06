module.exports = function(arr) {
  //cast all strings to ints in an array
    return arr.map(function(elem) {
        return parseInt(elem, 10);
    });
};
