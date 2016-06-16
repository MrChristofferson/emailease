#!/usr/bin/env node
'use strict';
var meow = require('meow');
var emailease = require('./');

var cli = meow([
	'Usage',
	'  $ emailease [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ emailease',
	'  unicorns & rainbows',
	'  $ emailease ponies',
	'  ponies & rainbows'
]);

console.log(emailease(cli.input[0] || 'unicorns'));
