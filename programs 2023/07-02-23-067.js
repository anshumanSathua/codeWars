/***************************
 * You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
 * 
 */

//S1
function catMouse(x) {
  const distance = x.indexOf("m") - x.indexOf("C");
  return distance <= 4 ? "Caught!" : "Escaped!";
}

//S2
function catMouse(x) {
  var count = 0;
  for (var i in x) {
    if (x[i] === ".") {
      count++;
    }
  }
  if (count <= 3) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

//S3
function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
}
