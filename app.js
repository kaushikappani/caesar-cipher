const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z']

const encrypt = (text, shift) => {
    let encrpted_text = "";
    for (let i = 0; i < text.length; i++) {
        if (!alphabet.includes(text[i])) {
            encrpted_text += text[i]
        } else {
            let position = alphabet.indexOf(text[i])
            new_position = position + shift;
            while (new_position >= 26) {
                new_position = new_position - 26;
            }
            let new_letter = alphabet[new_position];
            encrpted_text += new_letter
        }
    }
    return encrpted_text
}

const decode = (text, shift) => {
    let decoded_text = "";
    for (let i = 0; i < text.length; i++) {
        if (!alphabet.includes(text[i])) {
            decoded_text += text[i]
        } else {
            let position = alphabet.indexOf(text[i])
            new_position = position - shift;
            while (new_position < 0) {
                new_position = new_position + 26;
            }
            let new_letter = alphabet[new_position];
            decoded_text += new_letter
        }
    }
    return decoded_text
}

module.exports = { encrypt, decode }