const assert = require('assert');
const asInt = require('../src/util/as_int.js');
const reverseIndex = require('../src/util/reverse_index.js');

casted2int = [0, 3, 6, -71, 9];
console.log(reverseIndex(casted2int));

// describe('Test all fcns in the util folder', function() {
//     before(function() {
//         testArr = ['0', 3, '6,000.45', '-71.8', '009'];
//         casted2int = [0, 3, 6, -71, 9];
//     });
//
//     it('should cast strings to integers', function(){
//         assert.equal(casted2int.toString(), asInt(testArr).toString());
//     });
//
//     it('should ', function(){
//         assert.deepStrictEqual(, reverseIndex(casted2int));
//     });
// });
