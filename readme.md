# emailease [![Build Status](https://travis-ci.org/mrchristofferson/emailease.svg?branch=master)](https://travis-ci.org/mrchristofferson/emailease)

> My finest module


## Install

```
$ npm install --save emailease
```


## Usage

```js
const emailease = require('emailease');

emailease('unicorns');
//=> 'unicorns & rainbows'
```


## API

### emailease(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global emailease
```

```
$ emailease --help

  Usage
    emailease [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ emailease
    unicorns & rainbows
    $ emailease ponies
    ponies & rainbows
```


## License

MIT © [Chris Vandenberg](http://typeofchris.com)
