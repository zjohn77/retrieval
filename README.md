[![Build Status](https://travis-ci.org/zjohn77/retrieval.svg?branch=master)](https://travis-ci.org/zjohn77/retrieval)

![alt text](diagram.png "Project Diagram")

# 1. The Goal of this Project:
Implements full text search by indexing an input array of texts using the Okapi BM25 similarity.

# 2. The Design:
This function computes a BM25 document-term matrix, and stores this matrix as an array of arrays. Function's main parameter is a text document collection in the form of an array of strings--each text document here is a string.

# 3. Install:
npm install retrieval

# 4. Usage:
Please see the demo folder.
