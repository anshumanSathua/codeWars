/*****************
 * 
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 * 
 */

//S1
const reverseWords = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};

//S2
function reverseWords(str) {
  let reversedWord = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + " ";
      reversedWord = "";
    }
  }
  return reversedStr + reversedWord;
}
