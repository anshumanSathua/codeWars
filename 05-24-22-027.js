/**************
 * 
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
 * 
 */

//s1
function getMiddle(s) {
  const l = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return `${s[l - 1]}${s[l]}`;
  } else {
    return s[l];
  }
}

//s2
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
