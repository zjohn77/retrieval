/*
 * Specifies a class whose primary functionality is taking an array of texts,
 * parses it using natural language processing, indexes it via Okapi-BM25 
 * representation, and enables natural language search of this collection of 
 * documents.
 */
const express = require('express');
const path = require('path');
var quotes = require("./data/quotes"); // load sample documents
const Retrieval = require("../../../retrieval"); // import the search engine

// 1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

// 2nd step: index the document collection loaded above.
rt.index(docs);

// 3rd step: search.

const app = express();

// Configure Pug templating.
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Get HTML Form input.
app.use(express.urlencoded())

app.get("/", (req, res) => {
	res.render("form", {
		data: quotes
   });
});

app.post('/', (req, res) => {
	res.render("results", {
		user: req.body,
		data: quotes
   });
});

app.listen(8080);	// Listen to port 8080.