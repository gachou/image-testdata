'use strict'

let pify = require('pify')
let mkdirp = pify(require('mkdirp'))
let cpFile = require('cp-file')
let path = require('path')

/**
 * Copy a file (e.g. 'no-xmp-identifier.jpg') to another folder an return a promise for the whole path
 * @param {string} sourceFile (relative to the data-directory)
 * @param {string} targetFolder the folder to store the file in
 * @param {object=} options optional parameters
 * @param {string=} options.renameTo if provided, the file will be renamed to this name during the copy process
 * @returns {Promise<String>}
 */
module.exports = async function (sourceFile, targetFolder, options) {
  const targetFileName = (options && options.renameTo) || sourceFile
  const targetFile = path.join(targetFolder, targetFileName)
  await mkdirp(targetFolder)
  await cpFile(require.resolve(`./data/${sourceFile}`), targetFile)
  return targetFile
}
