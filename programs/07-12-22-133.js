/************
 *
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 *
 */

//S1
const removeExclamationMarks = (s) => {
  return s
    .split("")
    .map((a) => (a === "!" ? "" : a))
    .join("");
};

//S2
function removeExclamationMarks(s) {
  return s.split("!").join("");
}
