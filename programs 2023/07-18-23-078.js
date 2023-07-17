/***********************
 * When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
 * 
 */

//S1
function swap(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.includes(char.toLowerCase())) {
      result += char.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}

//S2
const vowels = ["a", "e", "i", "o", "u"];
const swap = (s) =>
  s
    .split("")
    .map((x) => (vowels.includes(x) ? x.toUpperCase() : x))
    .join("");
