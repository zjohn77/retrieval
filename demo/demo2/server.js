/*
 * Specifies a class whose primary functionality is taking an array of texts,
 * parses it using natural language processing, indexes it via Okapi-BM25 
 * representation, and enables natural language search of this collection of 
 * documents.
 */
const Retrieval = require("../../../retrieval"); // Import the search engine.
let quotes = require("./data/quotes"); // Load sample documents.
const express = require('express');
const path = require('path');

// 1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

// 2nd step: index the document collection loaded above.
rt.index(quotes);

// 3rd step: integrate search engine into a web app.
const app = express();
app.set("view engine", "pug"); // Configure Pug templating.
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded()) // Get HTML Form input.

app.get("/", (req, res) => {
	res.render("form", {
		data: quotes
   });
});

app.post('/', (req, res) => {
	res.render("results", {
		found: rt.search(req.body.query, 5),
		data: quotes
   });
});

app.listen(8080);	// Listen to port 8080.