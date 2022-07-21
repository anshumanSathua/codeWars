/****************
 *
 *Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
 *
 */

//S1
const peopleWithAgeDrink = (old) => {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18 && old >= 14) {
    return "drink coke";
  } else if (old < 21 && old >= 18) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
};

//S2
var peopleWithAgeDrink1 = function (old) {
  var result = "";

  if (old < 0) {
    throw new Error("Age cant be negative.");
    return 0;
  }

  switch (true) {
    case old < 14:
      result = "drink toddy";
      break;
    case old < 18:
      result = "drink coke";
      break;
    case old < 21:
      result = "drink beer";
      break;
    default:
      result = "drink whisky";
      break;
  }

  return result;
};
