'use strict'

let pify = require('pify')
let mkdirp = pify(require('mkdirp'))
let cpFile = require('cp-file')
let path = require('path')

/**
 * Copy a file (e.g. 'no-xmp-identifier.jpg') to another folder an return a promise for the whole path
 * @param sourceFile (relative to the data-directory)
 * @param targetFolder the folder to store the file in
 * @returns {Promise<String>}
 */
module.exports = async function (sourceFile, targetFolder) {
  const targetFile = path.join(targetFolder, sourceFile)
  await mkdirp(targetFolder)
  await cpFile(require.resolve(`./data/${sourceFile}`), targetFile)
  return targetFile
}
