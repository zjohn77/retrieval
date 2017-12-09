const assert = require('assert');
const asInt = require('../src/util/as_int.js');
const reverseIndex = require('../src/util/reverse_index.js');
const initArray = require('../src/util/init_array.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
        testArr = ['0', 3, '6,000.45', '-71.8', '009'];
        casted2int = [0, 3, 6, -71, 9];
        invertedIndex = { '0': [ 0 ],
                          '3': [ 1 ],
                          '6': [ 2 ],
                          '9': [ 4 ],
                          '-71': [ 3 ] };
    });

    it('should cast strings to integers', function(){
        assert.equal(casted2int.toString(), asInt(testArr).toString());
    });

    it('should invert an array & handle non-unique keys', function(){
        assert.deepStrictEqual(invertedIndex, reverseIndex(casted2int, asInt));
    });

    it('should create an array based on the length & initial value passed in', function(){
        assert.deepStrictEqual([1, 1, 1, 1], initArray(4, 1));
    });

    // Add the test for util/make_zeros.js
});
