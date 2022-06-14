/**********************
 * 
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
 * 
 */

//S1
function removeEveryOther(arr) {
  return arr.filter((el, idx) => idx % 2 === 0);
}

//S2
function removeEveryOther(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//S3
function removeEveryOther(arr) {
  //your code here
  for (var i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

//S4
function removeEveryOther(arr) {
  return arr.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      acc.push(item);
    }

    return acc;
  }, []);
}

//S5
function removeEveryOther(arr) {
  let res = [];
  arr.map((el, i) => (i % 2 == 0 ? res.push(el) : ""));
  return res;
}
