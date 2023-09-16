/******************************
 * Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
 * 
 */

//S1
function solution(value) {
  return "Value is " + ("00000" + value).slice(-5);
}

//S2
function solution(value) {
  const formattedValue = String(value).padStart(5, "0");
  const result = `Value is ${formattedValue}`;
  return result;
}
