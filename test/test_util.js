const assert = require('assert');
const asInt = require('../src/util/as_int.js');
const reverseIndex = require('../src/util/reverse_index.js');
const initArray = require('../src/util/init_array.js');
const makeZeros = require('../src/util/make_zeros.js');
const setEntry = require('../src/util/set_entry.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
        casted2int = [0, 3, 6, -71, 9];
    });

    it('1. should cast strings to integers', function(){
        let testArr = ['0', 3, '6,000.45', '-71.8', '009'];
        assert.equal(casted2int.toString(), asInt(testArr).toString());
    });

    it('2. should invert an array & handle non-unique keys', function(){
        let invertedIndex = { '0': [ 0 ],
                              '3': [ 1 ],
                              '6': [ 2 ],
                              '9': [ 4 ],
                              '-71': [ 3 ] };
        assert.deepEqual(invertedIndex, reverseIndex(casted2int, asInt));
    });

    it('3. should create an array based on the length & initial value passed in', function(){
        assert.deepEqual([1, 1, 1, 1], initArray(4, 1));
    });

    it('4. should set the entries of a mathjs vector to given values', function(){
        setEntryTester = makeZeros(3);
        setEntry(setEntryTester, {'0': 99, '2': 111});
        assert.equal('[[99], [0], [111]]', setEntryTester.toString());
    });
    // to add unit test for util/term_lookup.js
});
