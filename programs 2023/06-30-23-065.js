/***********************
 *Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
 *
 */

//S1
function switcher(arr) {
  const lookup = "0zyxwvutsrqponmlkjihgfedcba!? ";

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const number = parseInt(arr[i]);
    result += lookup[number];
  }

  return result;
}

//S2
const alpha = " zyxwvutsrqponmlkjihgfedcba!? ";
const switcher = (x) => x.map((item) => alpha[item]).join("");
