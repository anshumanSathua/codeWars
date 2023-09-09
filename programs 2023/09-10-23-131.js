/************************
 * This Kata is intended as a small challenge for my students

Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

Example (Input --> Output)

"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""

 * 
 */

//S1
function removeVowels(s) {
  const vowels = "aeiouAEIOU"; // List of vowels in both lowercase and uppercase
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      result += s[i];
    }
  }

  return result;
}
