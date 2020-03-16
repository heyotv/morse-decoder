const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArr = [];
    let morseCoded = [];
    let decodedPhrase = '';
    for (let i = 0; i < expr.length / 10; i++) {
        exprArr.push(expr.slice(i * 10, i * 10 + 10));
    }
    for (let i = 0; i < exprArr.length; i++) {
        morseCoded[i] = [];
        for (let j = 0; j < exprArr[i].length / 2; j++) {
            let temp = exprArr[i].slice(j * 2, j * 2 + 2);
            if (temp == '10') {
                morseCoded[i].push('.');
            }
            if (temp == '11') {
                morseCoded[i].push('-')
            }
        }
        if (morseCoded[i].length == 0) {
            decodedPhrase += ' ';
        } else {
            decodedPhrase += MORSE_TABLE[morseCoded[i].join('')];
        }
    }
    return decodedPhrase;
}

module.exports = {
    decode
}