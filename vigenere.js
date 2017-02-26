// Vigenere cipher: Takes a message and a key and encrypts message.
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encryptAlgebraic = (message, keyPhrase) => {
  var result = "";

  for (var i = 0; i < message.length; i++) {
    if(alphabet.indexOf(message[i]) == -1){
      result += message[i];
    } else {
      result += alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(keyPhrase[i%keyPhrase.length]))%alphabet.length];  
    }
  }
  return result;
};

module.exports.encrypt = encryptAlgebraic;

const decryptAlgebraic = (cipherText, keyPhrase) => {
  var decrypt = '';

  for (var j = 0; j < cipherText.length; j++) {
    if(alphabet.indexOf(cipherText[j]) == -1){
      decrypt += cipherText[j];
    } else {
      decrypt += alphabet[(alphabet.indexOf(cipherText[j]) - alphabet.indexOf(keyPhrase[j%keyPhrase.length])+alphabet.length)%alphabet.length];  
    }
  }

  return decrypt;
};

module.exports.decrypt = decryptAlgebraic;

//Vigenere square used for encryption
//abcdefghijklmnopqrstuvwxyz
//bcdefghijklmnopqrstuvwxyza
//cdefghijklmnopqrstuvwxyzab
//defghijklmnopqrstuvwxyzabc
//efghijklmnopqrstuvwxyzabcd
//fghijklmnopqrstuvwxyzabcde
//ghijklmnopqrstuvwxyzabcdef
//hijklmnopqrstuvwxyzabcdefg
//ijklmnopqrstuvwxyzabcdefgh
//jklmnopqrstuvwxyzabcdefghi
//klmnopqrstuvwxyzabcdefghij
//lmnopqrstuvwxyzabcdefghijk
//mnopqrstuvwxyzabcdefghijkl
//nopqrstuvwxyzabcdefghijklm
//opqrstuvwxyzabcdefghijklmn
//pqrstuvwxyzabcdefghijklmno
//qrstuvwxyzabcdefghijklmnop
//rstuvwxyzabcdefghijklmnopq
//stuvwxyzabcdefghijklmnopqr
//tuvwxyzabcdefghijklmnopqrs
//uvwxyzabcdefghijklmnopqrst
//vwxyzabcdefghijklmnopqrstu
//wxyzabcdefghijklmnopqrstuv
//xyzabcdefghijklmnopqrstuvw
//yzabcdefghijklmnopqrstuvwx
//zabcdefghijklmnopqrstuvwxy
