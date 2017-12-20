const assert = require('assert');
const nArgmax = require('../src/util/n_argmax.js');
const topIndices = require('./score_selection/top_indices.js');

describe('Test all fcns in the util folder', function() {
    before(function() {
    });

    it('1. nArgmax should find the n-biggest elements & their indices', function(){
        let argmaxObj = { '6': ['1', '2'],
                         '70': ['0'] };
        assert.deepEqual(argmaxObj, nArgmax([70, 6, 6, 4], n=2));
    });

    it('2. topIndices should find the n-biggest elements & their indices', function(){
        let argmaxObj = { '6': ['1', '2'],
                         '70': ['0'] };
        assert.deepEqual(argmaxObj, nArgmax([70, 6, 6, 4], n=2));
    });

});
