/*********************
 *
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 *
 */

//S1
const isPalindrome = (x) => {
  x = x.toLowerCase();
  return x === x.split("").reverse().join("");
};

//S2
function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}
