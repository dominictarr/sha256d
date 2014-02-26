# sha256d

double sha256.

## Example

``` js
var sha256d = require('sha256d')

var hash = sha256d().update('hello', 'ascii').digest('hex')
console.log(hash)
//9595c9df90075148eb06860365df33584b75bff782a510c6cd4883a419833d50
```

## why

sha1 is no longer considered secure,
and should not be used in new cryptosystems.
recent attacks have been developed which weaken sha1 significantly,
from 2^80 to 2^69 attempts to find a [collision](https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html).

[Schiener estimates](https://www.schneier.com/blog/archives/2012/10/when_will_we_se.html)
that by 2021 it could cost as little at 41k usd
to generate a sha1 collision.

Also, Merkle–Damgård constructions, such as the sha1 and sha2
family of algorithms also are succeptable to a
[length-extension attack](https://en.wikipedia.org/wiki/Length_extension_attack).
this means that if you know `x = sha(y)` you can calculate
`x2 = sha(y + z)` without knowing `y`.

This may or may not be a problem in your system,
but there is no harm in being belt and suspenders safe.


## License

MIT
