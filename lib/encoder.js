module.exports = function (unencoded) {
  var buffer = new Buffer(unencoded || '').toString('base64')

  return buffer
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/\=/g, '~')
}
