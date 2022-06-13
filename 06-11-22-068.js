/*****************
 * 
 * Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 * 
 */

//S1
function correct(string) {
  return string
    .split("")
    .map((el) =>
      el == " " ? " " : el == 5 ? "S" : el == 0 ? "O" : el == 1 ? "I" : el
    )
    .join("");
}

//S2
correct = (s) => s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

//S3
const corrections = {
  5: "S",
  0: "O",
  1: "I",
};

const correct = (string) =>
  string.replace(/[501]/g, (character) => corrections[character]);

//S4
function correct(string) {
  const map = {
    0: "O",
    1: "I",
    5: "S",
  };

  return string
    .split("")
    .map((c) => (map.hasOwnProperty(c) ? map[c] : c))
    .join("");
}

//S5
function correct(string) {
  return [...string].map((a) => ({ 0: "O", 5: "S", 1: "I" }[a] || a)).join("");
}
