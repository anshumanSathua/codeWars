/***********************
 * Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
 * 
 */

//S1
function spacey(array) {
  let result = [];
  let currentString = "";

  for (const word of array) {
    currentString += word;
    result.push(currentString);
  }

  return result;
}

//S2
function spacey(array) {
  let string = "";
  return array.map((e) => (string += e));
}
