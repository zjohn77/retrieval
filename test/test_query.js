const assert = require('assert');
const locateKeywords = require('../src/query/locate_keywords.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
        que = 'bar food';
        invIndex = {'food': 5,
                    'bar': 8,
                    'football': 7};
    });

    it('should cast strings to integers', function(){
        assert.deepEqual({'5': 1, '8': 1}, locateKeywords(que, invIndex));
    });
});
