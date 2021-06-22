const { encrypt, decode } = require('./app');

let encoded_text = encrypt("hello world!", 2811)
console.log(encoded_text)
let decode_text = decode("khoor zruog!", 2811)
console.log(decode_text)