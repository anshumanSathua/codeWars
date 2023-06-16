/***************************
 *In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
 *
 */

//S1
const solve = (s) => {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numberCount = 0;
  let specialCount = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "A" && char <= "Z") {
      uppercaseCount++;
    } else if (char >= "a" && char <= "z") {
      lowercaseCount++;
    } else if (char >= "0" && char <= "9") {
      numberCount++;
    } else {
      specialCount++;
    }
  }

  return [uppercaseCount, lowercaseCount, numberCount, specialCount];
};
