const docs = require("./music-collection"); //load sample documents
const Retrieval = require("../../retrieval"); //import module

//1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

//2nd step: index the document collection loaded above.
rt.index(docs);

//3rd step: search.
rt.search('theme and variations');
