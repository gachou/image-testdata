'use strict'

var qfs = require('q-io/fs')
var path = require('path')

/**
 * Copy a file (e.g. 'no-xmp-identifier.jpg') to another folder an return a promise for the whole path
 * @param sourceFile (relative to the data-directory)
 * @param targetFolder
 * @returns {Promise<String>}
 */
module.exports = function (sourceFile, targetFolder) {
  var targetFile = path.join(targetFolder, sourceFile)
  return qfs.makeTree(targetFolder)
    .then(() => qfs.copy(require.resolve(`./data/${sourceFile}`), targetFile))
    .then(() => targetFile)
}
