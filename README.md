[![Build Status](https://travis-ci.org/zjohn77/retrieval.svg?branch=master)](https://travis-ci.org/zjohn77/retrieval)

# Table of Contents
1. [The Basic Concept and Key Benefits](#1-the-basic-concept-and-key-benefits)
2. [Install](#2-install)
3. [Usage](#3-usage)
4. [Integrate Full-Text Search into Your Application](#4-integrate-full-text-search-into-your-application)

![alt text](diagram.png "Project Diagram")
## 1. The Basic Concept and Key Benefits:
An Elasticsearch-comparable, full-text search engine using JavaScript and leveraging advanced Natural Language Processing. The [BM25](https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html) ranking function at the core of this project is tunable to different types of texts (e.g. tweets, scientifc journals). **The key features**: 

* Source code is on NPM and can be deployed to a large, growing ecosystem of Node.js apps such as Express, Meteor, etc.
* Tune it to specific types of documents (e.g. tweets, scientific journals, legal writing) for improved accuracy.
* By default, it uses the BM25 similarity, just like [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html)
* Separates offline indexing from the time-sensitive online search.
* Each individual NLP component, like the stemmer or the stopword list, is pluggable and carefully researched to keep at the bleeding edge. (For example, the stopword list is a confluence of the best words from three authoritative stopword lists: the Stanford CoreNLP, Journal of Machine Learning Research, and NLTK.)
* Dockerfile and [Docker image](https://hub.docker.com/r/jj232/retrieval) are available. Conveniently tryout the module.
* Reasonable unit test coverage, continuous integration, and separation of concerns for each functionality.

## 2. Install:
```bash
npm install retrieval
```

Clone it to your computer:
```bash
git clone https://github.com/zjohn77/retrieval.git
cd retrieval
npm install
```

Docker Demo Tryout

## 3. Usage:
The example right below is from "demo/demo1/scenarios.js".
```js
const path = require("path");

// Import the search engine.
const Retrieval = require(path.join(__dirname, "..", "..", "src", "Retrieval.js"));
const docs = require("./data/music-collection"); // Load the texts to search.

// 1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

// 2nd step: index the array of texts (strings), and store the resulting document-term matrix as an array of arrays.
rt.index(docs);

// 3rd step: search. In other words, multiply the document-term matrix and the indicator vector representing the query.
console.log("Top 5 search results for the query 'theme and variations':\n");
rt.search("theme and variations", 5)
  .map(result => console.log(result));
// 04 - Theme & Variations In G Minor.flac
// 17 - Rhapsody On A Theme of Paganini - Variation 18.flac
// 01 - Diabelli Variations - Theme Vivace & Variation 1 Alla Marcia Maestoso.flac
// 07 - Rhapsody On A Theme of Paganini (Introduction and 24 Variations).flac
// 10 - Diabelli Variations - Variation 10 Presto.flac

## 4. Integrate Full-Text Search into Your Application:
![demo2](demo2.gif "demo2")


Right above is a web app with full-text search capability added. Try it! Enter: 
```bash
npm run demo2
```
Then, point browser to **localhost:8080** . Source code is "demo/demo2/scenarios.js".