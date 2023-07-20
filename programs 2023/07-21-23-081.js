/*******************
 * Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
 *
 */

//S1
sortme = function (names) {
  for (let i = 0; i < names.length - 1; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] > names[j]) {
        let temp = names[i];
        names[i] = names[j];
        names[j] = temp;
      }
    }
  }
  return names;
};

//S2
sortme = function (names) {
  return names.sort();
};
