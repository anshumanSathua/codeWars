/***********************
 * 
 * This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 * 
 */

//S1
const accum = (s) => {
  return [...s]
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
};

//S2
function accum(s) {
  const result = [];
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerStr[i];
    }
    result.push(str);
  }

  return result.join("-");
}

//S3
function accum(s) {
  return [...s.toUpperCase()].reduce(
    (acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index)
  );
}

//S4
function accum(s) {
  return [...s.toLowerCase()].reduce(
    (acc, cur, index) =>
      acc + (index != 0 ? "-" : "") + cur.toUpperCase() + cur.repeat(index),
    ""
  );
}
