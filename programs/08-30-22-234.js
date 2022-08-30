/************************
 * 
 * Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
 * 
 */

//S1
const reverseLetter = (str) => {
  var res = "";
  for (i = str.length; i >= 0; i--) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      res += str[i];
    }
  }
  return res;
};

//S2
function reverseLetter(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === str[i].toUpperCase()) {
      continue;
    }
    reversedString += str[i];
  }
  return reversedString;
}
