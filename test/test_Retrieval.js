const docs = require("../demo/music-collection");
const Retrieval = require("../src/Retrieval.js");
const math = require('mathjs');

let rt = new Retrieval();
rt.index(docs);
console.log(rt.search());


// let rng = math.range(0, 30);
// let idx = math.index(rng, 0);
// console.log(rt.search().subset(idx).toString());
