/********************
 *Task
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

[output] an integer
 *
 */

//S1
function stringsConstruction(A, B) {
  const countA = {};
  const countB = {};

  for (const letter of A) {
    countA[letter] = (countA[letter] || 0) + 1;
  }

  for (const letter of B) {
    countB[letter] = (countB[letter] || 0) + 1;
  }

  let maxStrings = Infinity;

  for (const letter in countA) {
    if (!countB[letter]) {
      return 0;
    }
    maxStrings = Math.min(
      maxStrings,
      Math.floor(countB[letter] / countA[letter])
    );
  }

  return maxStrings;
}

//S2
function stringsConstruction(str, target) {
  for (let i = 0; ; i++) {
    for (let c of str) {
      if (target.includes(c)) target = target.replace(c, "-");
      else return i;
    }
  }
}
