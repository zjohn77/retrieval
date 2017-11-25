const docs = require("../demo/music-collection");
const Retrieval = require("../src/Retrieval.js");

let rt = new Retrieval();
rt.index(docs);
rt.search();
// console.log();
