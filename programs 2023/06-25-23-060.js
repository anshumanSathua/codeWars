/*********************
 *Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
 *
 */

//S1
const last = (str) => {
  const words = str.split(" ");

  words.sort((a, b) => {
    const lastCharA = a[a.length - 1];
    const lastCharB = b[b.length - 1];

    if (lastCharA === lastCharB) {
      return 0;
    }

    return lastCharA < lastCharB ? -1 : 1;
  });

  return words;
};

//S2
function last(str) {
  const words = str.split(" ");

  const sortedWords = words
    .map((word, index) => ({ word, index }))
    .sort((a, b) => {
      const lastCharA = a.word[a.word.length - 1];
      const lastCharB = b.word[b.word.length - 1];

      if (lastCharA === lastCharB) {
        return a.index - b.index;
      }

      return lastCharA.localeCompare(lastCharB);
    });

  return sortedWords.map(({ word }) => word);
}
