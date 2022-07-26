/*****************
 *
 *Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
 *
 */

//S1
const replace = (s) => {
  let str = "";
  let vowel = "aeiouAEIOU";
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      str += "!";
    } else {
      str += s[i];
    }
  }
  return str;
};

//S2
function replace(s) {
  return s.replace(/[aeoiu]/gi, "!");
}
