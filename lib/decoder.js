
module.exports = function(encoded) {
  encoded = (encoded || '')
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .replace(/~/g, '=');

  while (encoded.length % 4)
    encoded += '=';

  var buffer = new Buffer(encoded, 'base64').toString('utf8');

  return buffer;
};
