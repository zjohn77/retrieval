/**
 * Cast all strings to ints in an array.
 */
module.exports = function(arr) {
    return arr.map(function(elem) {
        return parseInt(elem, 10);
    });
};
