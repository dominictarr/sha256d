var sha256d = require('../')

var tape = require('tape')


//echo -n hello |openssl dgst -sha256 -binary |openssl dgst -sha256
//9595c9df90075148eb06860365df33584b75bff782a510c6cd4883a419833d50

tape('test', function (t) {

  var hex = sha256d().update('hello').digest('hex')

  t.equal(hex, '9595c9df90075148eb06860365df33584b75bff782a510c6cd4883a419833d50')

  t.equal(
    sha256d().digest('hex'), 
    '5df6e0e2761359d30a8275058e299fcc0381534545f55cf43e41983f5d4c9456'
  )

  t.end()
})
