/*******************
 * Instructions
Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

Examples
      0  =>  should return 'Sunday 00:00'
     -3  =>  should return 'Saturday 23:57'
     45  =>  should return 'Sunday 00:45'
    759  =>  should return 'Sunday 12:39'
   1236  =>  should return 'Sunday 20:36'
   1447  =>  should return 'Monday 00:07'
   7832  =>  should return 'Friday 10:32'
  18876  =>  should return 'Saturday 02:36'
 259180  =>  should return 'Thursday 23:40' 
-349000  =>  should return 'Tuesday 15:20'
 * 
 */

//S1
function dayAndTime(minutes) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const totalMinutesInWeek = 7 * 24 * 60; // Total minutes in a week
  const adjustedMinutes =
    ((minutes % totalMinutesInWeek) + totalMinutesInWeek) % totalMinutesInWeek; // Ensure positive and within a week

  const dayIndex = Math.floor(adjustedMinutes / (24 * 60)); // Calculate the day index
  const timeInMinutes = adjustedMinutes % (24 * 60); // Calculate the time in minutes

  const dayOfWeek = daysOfWeek[dayIndex];
  const hours = Math.floor(timeInMinutes / 60)
    .toString()
    .padStart(2, "0"); // Format hours
  const minutesFormatted = (timeInMinutes % 60).toString().padStart(2, "0"); // Format minutes

  return `${dayOfWeek} ${hours}:${minutesFormatted}`;
}

//S2
function dayAndTime(n) {
  const date = new Date("March 17, 2019 00:00:00");
  date.setTime(date.getTime() + n * 60 * 1000);
  return date.toLocaleDateString("en", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
}
