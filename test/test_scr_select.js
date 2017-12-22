const assert = require('assert');
const nArgmax = require('../src/score_selection/lib/n_argmax.js');
const topIndices = require('../src/score_selection/top_indices.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
        ARR = [70, 6, 6, 4];
        TOP_N = 2;
    });

    it('nArgmax should find the n-biggest elements & their indices',
      function() {
        let argmaxObj = { '6': ['1', '2'],
                         '70': ['0'] };
        assert.deepEqual(argmaxObj, nArgmax(ARR, TOP_N));
    });

    it('topIndices should find the indices of the n-biggest elements',
      function() {
        assert.deepEqual(['0', '1', '2'], topIndices(ARR, TOP_N));
    });
});
