/***********************
 * 
 * Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 * 
 */

//S1
const twiceAsOld = (dadAge, sonAge) => {
  let ageAtBirth = dadAge - sonAge;
  let doubleAge = ageAtBirth * 2;
  return Math.abs(dadAge - doubleAge);
};

//S2
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
