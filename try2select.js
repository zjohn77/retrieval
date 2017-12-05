var Heap = require('heap');
var _ = require('lodash');

let arr = [7, 6, 6, 5];
let invObj = _.invertBy(arr);

let K = Object.keys(invObj);
let highest = Heap.nlargest(K, 2);
console.log(invObj[highest[1]])
