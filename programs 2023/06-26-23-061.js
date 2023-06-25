/******************************
 *Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
 *
 */

//S1
function sumOfIntegersInString(s) {
  let sum = 0;
  let currentNumber = "";

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      currentNumber += s[i];
    } else {
      if (currentNumber !== "") {
        sum += parseInt(currentNumber, 10);
        currentNumber = "";
      }
    }
  }

  if (currentNumber !== "") {
    sum += parseInt(currentNumber, 10);
  }

  return sum;
}

//S2
const sumOfIntegersInString = (s) => {
  let sum = 0;
  let currentNumber = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/[0-9]/.test(char)) {
      currentNumber += char;
    } else {
      if (currentNumber !== "") {
        sum += Number(currentNumber);
        currentNumber = "";
      }
    }
  }

  if (currentNumber !== "") {
    sum += Number(currentNumber);
  }

  return sum;
};

//S3
function sumOfIntegersInString(s) {
  const numbers = "1234567890";
  let res = "";
  let sum = 0;
  for (let i = 0; i <= s.length; i += 1) {
    if (numbers.includes(s[i])) {
      res += s[i];
    } else {
      if (res !== "") {
        sum = sum + parseInt(res);
        res = "";
      }
    }
  }
  return sum;
}
