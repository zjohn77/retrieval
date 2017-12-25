const docs = require("../demo/music-collection");
const Retrieval = require("../src/Retrieval.js");
const math = require('mathjs');

let rt = new Retrieval();
rt.index(docs);
console.log(rt.search());
