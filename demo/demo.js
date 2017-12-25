const docs = require("./music-collection");
const Retrieval = require("../src/Retrieval.js");

let rt = new Retrieval();
rt.index(docs);
console.log(rt.search());
