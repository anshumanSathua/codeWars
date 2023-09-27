/*****************************************
 * Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
 * 
 */

//s1
function elapsedSeconds(startDate, endDate) {
  const millisecondsDifference = endDate - startDate;
  const secondsDifference = millisecondsDifference / 1000;
  return Math.floor(secondsDifference);
}
