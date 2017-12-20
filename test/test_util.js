const assert = require('assert');
const asInt = require('../src/util/as_int.js');
const initArray = require('../src/util/init_array.js');
const makeZeros = require('../src/util/make_zeros.js');
const setEntries = require('../src/util/set_entries.js');
const nArgmax = require('../src/util/n_argmax.js');
const reverseIndex = require('../src/util/reverse_index.js');
const termLookup = require('../src/util/term_lookup.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
        casted2int = [0, 3, 6, -71, 9];
    });

    it('1. asInt should cast strings to integers', function(){
        let testArr = ['0', 3, '6,000.45', '-71.8', '009'];
        assert.equal(casted2int.toString(), asInt(testArr).toString());
    });

    it('2. initArray should create an array based on the length & initial value passed in', function(){
        assert.deepEqual([1, 1, 1, 1], initArray(4, 1));
    });

    it('3. makeZeros should create an array of zeros', function(){
        assert.deepEqual('[[0], [0], [0]]', makeZeros(3).toString());
    });

    it('4. reverseIndex should invert an array & handle non-unique keys', function(){
        let invertedIndex = { '0': [ 0 ],
                              '3': [ 1 ],
                              '6': [ 2 ],
                              '9': [ 4 ],
                              '-71': [ 3 ] };
        assert.deepEqual(invertedIndex, reverseIndex(casted2int, asInt));
    });

    it('5. setEntries should set the entries of a mathjs vector to given values', function(){
        setEntryTester = makeZeros(3);
        setEntries(setEntryTester, {'0': 99, '2': 111});
        assert.equal('[[99], [0], [111]]', setEntryTester.toString());
    });

    // to add unit test for util/term_lookup.js
    it('6. termLookup should ', function(){
        let queryArr = ['a', 'b'];
        let index = {'a': 3,
                     'b': 5,
                     'c': 7};
        assert.deepEqual([3, 5], termLookup(queryArr, index));
    });
});
