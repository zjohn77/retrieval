var Heap = require('heap');
var _ = require('lodash');

let arr = ['c', 'b', 'a'];
let arr2 = [70, 6, 6, 4];
let inverted = _.invertBy(arr2);
// console.log(inverted);

let K = Object.keys(inverted);
console.log(K);
let highest = Heap.nlargest(K, 1);
console.log(highest);
// console.log(inverted[highest[1]]);
