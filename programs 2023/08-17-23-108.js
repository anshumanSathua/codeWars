/*******************************
 * You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order and two events can't occur in the same second.

Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
Good luck
 * 
 */

//S1
function checkLogs(log) {
  let prev = "99:99:99";
  let days = 0;
  log.forEach((t) => {
    if (t <= prev) days++;
    prev = t;
  });
  return days;
}

//S2
function checkLogs(log) {
  let g = 1;

  if (log.length <= 1) {
    return log.length;
  }

  for (let i = 1; i < log.length; i++) {
    let a = parseInt(log[i].slice(0, 2));
    let b = parseInt(log[i].slice(3, 5));
    let c = parseInt(log[i].slice(6, 8));

    let prevA = parseInt(log[i - 1].slice(0, 2));
    let prevB = parseInt(log[i - 1].slice(3, 5));
    let prevC = parseInt(log[i - 1].slice(6, 8));

    if (a < prevA) {
      g += 1;
    } else if (a === prevA && b < prevB) {
      g += 1;
    } else if (a === prevA && b === prevB && c <= prevC) {
      g += 1;
    }
  }

  return g;
}
