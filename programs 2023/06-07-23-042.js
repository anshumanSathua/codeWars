/***********************
 *Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
 *
 */

//S1
const spacify = (str) => {
  return [...str].join(" ");
};

//S2
const spacify1 = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + (i === str.length - 1 ? "" : " ");
  }
  return result;
};
