const docs = require("./music-collection"); //load sample documents
const Retrieval = require("../../retrieval"); //import module

//1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

//2nd step: index the document collection loaded above.
rt.index(docs);

//3rd step: search.
let results0 = rt.search("theme and variations", 5);
let results1 = rt.search("computer symphony", 5);
let results2 = rt.search("does not exist", 5);
let results3 = rt.search("blue", 5);

console.log("Top 5 search results for the query 'theme and variations':")
results0.map((result) => console.log(result));

console.log("\nTop 5 search results for the query 'computer symphony':")
results1.map((result) => console.log(result));

console.log("\nTop 5 search results for the query 'does not exist':")
results2.map((result) => console.log(result));

console.log("\nTop 5 search results for the query 'blue':")
results3.map((result) => console.log(result));