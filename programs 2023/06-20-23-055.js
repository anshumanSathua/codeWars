/**********************
 *Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999" 
 * 
 */

//S1
function explode(s) {
  const arr = [];
  [...s].map((a) => {
    const b = Number(a);
    for (let i = 0; i < b; i++) arr.push(a);
  });

  return arr.join("");
}

//S2
function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i];
    }
  }
  return newStr;
}
