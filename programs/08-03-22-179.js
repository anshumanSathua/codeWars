/************************
 * 
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Eiamples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
 * 
 */

//S1
const shortcut = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      str[i] = "";
    }
  }
  return str.join("");
};

//S2
function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}
