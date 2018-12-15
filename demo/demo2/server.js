/*
 * Specifies a class whose primary functionality is taking an array of texts,
 * parses it using natural language processing, indexes it via Okapi-BM25 
 * representation, and enables natural language search of this collection of 
 * documents.
 */
const path = require("path");

// Import the search engine.
const Retrieval = require(path.join(__dirname, "..", "..", "src", "Retrieval.js"));
let quotes = require("./data/quotes"); // Load the texts to search.
const express = require("express");

// 1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

// 2nd step: index the texts loaded above.
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

app.post("/", (req, res) => {
	res.render("results", {
		found: rt.search(req.body.query, 5),
		data: quotes
   });
});

app.listen(8080);	// Listen to port 8080.
console.log("The demo2 app is running on localhost");