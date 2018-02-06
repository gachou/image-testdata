const imageTestdata = require('../')
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
