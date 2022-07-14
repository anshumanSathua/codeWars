/******************
 *
 *Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 *
 */

//S1
const high = (x) => {
  const arrOfWords = x.split(" ");

  const calculateScore = (word) => {
    return word
      .split("")
      .reduce((counter, currWord) => counter + currWord.charCodeAt(0) - 96, 0);
  };
  const scoreArr = arrOfWords.map((word) => calculateScore(word));

  let highIndex = 0;
  let highScore = 0;
  scoreArr.forEach((score, i) => {
    if (score > highScore) {
      highIndex = i;
      highScore = score;
    }
  });

  return arrOfWords[highIndex];
};

//S2
function high(s) {
  let as = s
    .split(" ")
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

//S3
function high(x) {
  var arr = x.split(" ");
  var sum = 0;
  var holder = 0;
  var holder2 = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i].charCodeAt(j) - 96;
    }

    if (sum > holder) {
      holder = sum;
      holder2 = i;
    }
    sum = 0;
  }
  console.log(arr[holder2]);
  return arr[holder2];
}
