/********************
 * Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1
 * 
 */

//S1
function solution(fullText, searchText) {
  let count = 0;
  let index = fullText.indexOf(searchText);

  while (index !== -1) {
    count++;
    index = fullText.indexOf(searchText, index + 1);
  }

  return count;
}

//S2
function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}
