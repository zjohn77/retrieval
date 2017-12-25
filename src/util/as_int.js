/**
 * Cast all strings to ints in an array.
 * @exports {Function} that takes a string array and then casts
 * all its entries to integers (base 10) using the parseInt function.
 */
module.exports = function(arr) {
    return arr.map(function(elem) {
        return parseInt(elem, 10);
    });
};
