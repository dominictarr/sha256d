var createHash = require('crypto').createHash

module.exports = function (alg) {
  alg = alg || 'sha256'
  var hash = createHash(alg)
  return {
    update: function (data, enc) {
      hash.update(data, enc)
      return this
    },
    digest: function (enc) {
      return createHash(alg).update(hash.digest()).digest(enc)
    }
  }
}
