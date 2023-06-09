/************************
 *702892% of 1,1952,964 of 4,679PG1
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (2)
Discourse (38)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
 *
 */

//S1
function boredom(staff) {
  const departmentScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let cumulativeScore = 0;

  for (const member in staff) {
    const department = staff[member];
    if (departmentScores.hasOwnProperty(department)) {
      cumulativeScore += departmentScores[department];
    }
  }

  if (cumulativeScore <= 80) {
    return "kill me now";
  } else if (cumulativeScore < 100) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}
