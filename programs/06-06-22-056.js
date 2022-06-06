/***********************
 * 
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 * 
 */

//S1
function solution(string) {
  string = string.split("");
  let newstr = "";
  string.forEach((a) => {
    if (a === a.toUpperCase()) {
      newstr += " ";
      newstr += a;
    } else {
      newstr += a;
    }
  });
  return newstr;
}

//S2
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

//S3
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

//S4
const solution = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};
