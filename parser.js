var fs = require('fs');

require.extensions['.html'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var template = require('./template.html');

module.exports = (function(markup) {
    console.log(`before ${markup}`);

    return template.replace('${{EmailContent}}$', markup);

});
