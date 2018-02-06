/* eslint-env mocha */

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const pify = require('pify')
const readFile = pify(require('fs').readFile)
const rimraf = pify(require('rimraf'))

const imageTestData = require('../index')

describe('the image-testdata-module', function () {
  beforeEach(() => rimraf('test-tmp'))

  it('should copy an image to a target directory, creating the target dir', async function () {
    await imageTestData('no-xmp-identifier.jpg', 'test-tmp')
    const [source, target] = await Promise.all([
      readFile('data/no-xmp-identifier.jpg'),
      readFile('test-tmp/no-xmp-identifier.jpg')
    ])
    expect(target).to.deep.equal(source)
  })
})
