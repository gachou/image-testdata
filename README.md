# image-testdata 

[![NPM version](https://img.shields.io/npm/v/image-testdata.svg)](https://npmjs.com/package/image-testdata)
[![Travis Build Status](https://travis-ci.org/gachou/image-testdata.svg?branch=master)](https://travis-ci.org/gachou/image-testdata)
[![Coverage Status](https://img.shields.io/coveralls/gachou/image-testdata.svg)](https://coveralls.io/r/gachou/image-testdata)

> Images for use in test-cases


# Installation

```
npm install image-testdata
```

 
# Usage

The following example demonstrates how to use this module:

```js
const imageTestdata = require('image-testdata')
const fs = require('fs')

Promise.all([
  // Image without XMP:Identifier
  imageTestdata('no-xmp-identifier.jpg', 'tmp'),

  // Image with XMP:Identifier
  imageTestdata('with-xmp-identifier.jpg', 'tmp'),

  // Save by another name
  imageTestdata('with-xmp-identifier.jpg', 'tmp', {renameTo: 'img.jpg'})

])
  .then((files) => console.log('Return value', files))
  .then((files) => console.log('Directory listing', fs.readdirSync('tmp')))
```

This will generate the following output

```
Return value [ 'tmp/no-xmp-identifier.jpg',
  'tmp/with-xmp-identifier.jpg',
  'tmp/img.jpg' ]
Directory listing [ 'img.jpg', 'no-xmp-identifier.jpg', 'with-xmp-identifier.jpg' ]
```



# License

`image-testdata` is published under the MIT-license.

See [LICENSE.md](LICENSE.md) for details.


# Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
# Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).