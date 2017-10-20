const assert = require('assert');
const chunker = require("../src/nlp/lib/chunk.js");
const removeStopwords = require("../src/nlp/lib/filter_stopwords.js");
const porter = require("../src/nlp/lib/stem_porter2.js");
const chunkFilterStem = require("../src/nlp/chunk_filter_stem.js");

describe('', function() {
    before(function() {
      // A sentence string to test NL functionality with.
      sentence = "'The marvelous thing is that it's painless,' he said.";
      words = ["The","marvelous","thing","is","that","it","s","painless","he","said"];
      stems = ["the","marvel","thing","is","that","it","s","painless","he","said"];
    });

    it('should chunk a sentence string into alphabetical tokens', function(){
      assert.deepStrictEqual(words, chunker(sentence));
    });

    it('should strip stopwords from an input array of strings', function(){
      assert.deepStrictEqual(["The","marvelous","thing","painless"], removeStopwords(words));
    });

    it('should stem', function(){
      assert.deepStrictEqual(stems, words.map(porter.stem, porter));
    });

    it('should chunk, filter, then stem, in that order', function(){
      assert.deepStrictEqual(["marvel","thing","painless"], chunkFilterStem(sentence));
    });
});
