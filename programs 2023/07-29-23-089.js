/*************************
 * Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
 * 
 */

//S1
function compare(str1, str2) {
  const isValidString = (str) => {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode < 65 || charCode > 90) {
        return false;
      }
    }
    return true;
  };

  const calculateAsciiSum = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;
  };

  const upperStr1 = str1 ? str1.toUpperCase() : "";
  const upperStr2 = str2 ? str2.toUpperCase() : "";

  if (!isValidString(upperStr1) || !isValidString(upperStr2)) {
    return true;
  }

  return calculateAsciiSum(upperStr1) === calculateAsciiSum(upperStr2);
}
