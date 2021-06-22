# encrypt-caesar
encrypt and decrypt messages npm module
## Install with npm 
```console
 npm i encrypt-caesar
```
## Usage 

```js
const { encrypt, decode } = require('encrypt-caesar');

let encoded_text = encrypt("hello world!", 2811)
console.log(encoded_text)  // returns khoor zruog!

let decode_text = decode("khoor zruog!", 2811)
console.log(decode_text) // returns hello world!

```
