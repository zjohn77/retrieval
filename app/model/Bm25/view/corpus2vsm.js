/*DOCSTRING convert raw data to vector space attributes*/

const tfMaps = require("./lib/tf.js");
const relDocLengths = require("./lib/doc_len.js");

module.exports = (function()
{
  return function(corpusMatr)
		{
			return {docLens: relDocLengths(corpusMatr),
					    docs: tfMaps(corpusMatr)};
		};
})();
