var fs     = require('fs');
var parser = require('./parser.js');
var tidy   = require('htmltidy').tidy;

var stream = fs.createWriteStream(`index.html`);

var optionsForTidy = { doctype: `html4`,
                       hideComments: false,
                       verticalSpace: false,
                       indent: true };

var optionsForHtml = { title: `Email`,
                       fontColor: `#FFFFFF` }; // will be dynamic

this.generate = markup => {
    var html = parser(markup);
    this.createHtmlFile(html);
}

this.createHtmlFile = finalHtml => {
    stream.once(`open`, () => {
        tidy(finalHtml, optionsForTidy, (err, html) => {
            // TODO: Properly handle err
            // stream.write(html.replace(/(\r\n|\n|\r)/gm, ''));
            stream.write(html);
            stream.end(console.log(`done`));
            // TODO: Success message, port open for dev, paste to clipboard, open vs
        });
    });
}

module.exports = this.generate;
