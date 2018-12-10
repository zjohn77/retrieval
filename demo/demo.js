const docs = require("./music-collection"); //load sample documents
const Retrieval = require("../../retrieval"); //import module

// 1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

// 2nd step: index the document collection loaded above.
rt.index(docs);

// 3rd step: search.
console.log("------------------------------------------------------------");
console.log("Top 5 search results for the query 'theme and variations':\n");
let results = rt.search("theme and variations", 5);
results.map(result => console.log(result));
// 04 - Theme & Variations In G Minor.flac
// 17 - Rhapsody On A Theme of Paganini - Variation 18.flac
// 01 - Diabelli Variations - Theme Vivace & Variation 1 Alla Marcia Maestoso.flac
// 07 - Rhapsody On A Theme of Paganini (Introduction and 24 Variations).flac
// 10 - Diabelli Variations - Variation 10 Presto.flac

console.log("\n\n----------------------------------------------------------");
console.log("Top 5 search results for the query 'opera browser':\n")
results = rt.search('opera browser', 5);
results.map(result => console.log(result));
// 01 - Così Fan Tutte, Opera, K. 588- Overture.flac
// 09 - Il Trovatore, Opera- Act 4. Scene 1. Miserere.flac
// 04 - Der Rosenkavalier, Opera, Op. 59 (TrV 227)- Unidentified Excerpt.flac
// 07 - Così Fan Tutte, Opera, K. 588- Act 1. Scene 3. In Uomini, In Soldati.flac
// 11 - Così Fan Tutte, Opera, K. 588- Act 1. Scene 3. E Voi Ridete.flac

console.log("\n\n----------------------------------------------------------");
console.log("Top 5 search results for the query 'does not exist':\n")
results = rt.search('does not exist', 5);
results.map(result => console.log(result));

console.log("\n\n----------------------------------------------------------");
console.log("Top 5 search results for the query 'blue':\n")
results = rt.search('blue', 5);
results.map(result => console.log(result));
// 09 - Weary Blues.flac
// 09 - Weary Blues.flac
// 11 - The Blue Danube Op. 314.flac
// 06 - Wild Man Blues.flac
// 08 - Potato Head Blues.flac