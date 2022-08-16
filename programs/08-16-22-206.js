/**********************
 * 
 * Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
 * 
 */

//S1
const remove = (str) => {
  return str[str.length - 1] === "!"
    ? str
        .split("")
        .slice(0, str.length - 1)
        .join("")
    : str;
};

//S2
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}
