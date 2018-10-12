[![Build Status](https://travis-ci.org/zjohn77/retrieval.svg?branch=master)](https://travis-ci.org/zjohn77/retrieval)

![alt text](diagram.png "Project Diagram")

## 1. The Goal of this Project:
Develop an Elasticsearch-comparable, full-text search engine using Node.js and making use of cutting-edge NLP concepts. And make it tunable to different types of texts (e.g. tweets, scientifc journals) via the use of [BM25](https://nlp.stanford.edu/IR-book/html/htmledition/okapi-bm25-a-non-binary-model-1.html)
 

## 2. Key Features and Benefits:
* Source code is on NPM and can be deployed to a large, growing ecosystem of Node.js apps such as Express, Meteor, etc.
* Tune it to specific types of documents (e.g. tweets, scientific journals, legal writing) for improved accuracy.
* It's the only current full-text search in JavaScript that uses the default BM25 similarity of [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-similarity.html)
* Separates offline indexing from the time-sensitive online search.
* Batteries included: comes with a function that asynchronously parses any text file into a document collection.
* Each individual NLP component, like the stemmer or the stopword list, is pluggable and carefully researched to keep at the bleeding edge. (For example, the stopword list is a confluence of the best words from three authoritative stopword lists: Stanford NLP, Journal of Machine Learning Research, and NLTK.)

## 3. The Design:
This function indexes an input array of texts using the Okapi BM25 similarity, and stores the resulting document-term matrix as an array of arrays. Function's main argument is a text document collection in the form of an array of strings, with each text document being a string.

## 4. Install:
```bash
npm install retrieval
```

## 5. Usage:

```js
const docs = require("./music-collection"); //load sample documents
const Retrieval = require("../../retrieval"); //import module

//1st step: construct an object, feeding two parameters for bm25.
let rt = new Retrieval(K=2, B=0.75);

//2nd step: index the document collection loaded above.
rt.index(docs);

//3rd step: search.
rt.search('theme and variations'); // default: top 10 results
rt.search('theme and variations', 5); // top 5 results
```
