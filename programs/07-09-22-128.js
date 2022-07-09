/**********************
 * 
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 * 
 */

//S1
const rot13 = (message) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let cipherdLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipher = "";
  message.split("").forEach((str) => {
    if (letters.indexOf(str) !== -1 || cipherdLetters.indexOf(str) !== -1) {
      let keyStr = "";
      if (str === str.toUpperCase()) {
        keyStr =
          cipherdLetters.slice(
            cipherdLetters.indexOf(str, cipherdLetters[-1])
          ) + cipherdLetters.slice(0, cipherdLetters.indexOf(str));
        cipher += keyStr[keyStr.indexOf(str) + 13];
      } else {
        keyStr =
          letters.slice(letters.indexOf(str, letters[-1])) +
          letters.slice(0, letters.indexOf(str));
        cipher += keyStr[keyStr.indexOf(str) + 13];
      }
    } else {
      cipher += str;
    }
  });
  return cipher;
};

//S2
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message) {
  return message
    .split("")
    .map(function (c) {
      var i = alphabet.indexOf(c);
      if (i < 0) {
        return c;
      }

      return cipher[i];
    })
    .join("");
}
