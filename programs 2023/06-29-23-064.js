/******************
 * let longestSubstring = 0;
  let currentSubstring = 0;

  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
      currentSubstring++;
    } else {
      longestSubstring = Math.max(longestSubstring, currentSubstring);
      currentSubstring = 0;
    }
  }

  return Math.max(longestSubstring, currentSubstring);
 * 
 */

//S1
function solve(str) {
  let longestSubstring = 0;
  let currentSubstring = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      currentSubstring++;
    } else {
      longestSubstring = Math.max(longestSubstring, currentSubstring);
      currentSubstring = 0;
    }
  }

  return Math.max(longestSubstring, currentSubstring);
}
