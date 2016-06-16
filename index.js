var fs = require('fs');
var generate = require('./generate.js');

require.extensions['.html'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var markup = require('./_index.html');

generate(markup);
