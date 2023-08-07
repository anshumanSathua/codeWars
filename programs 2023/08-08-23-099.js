/********************
 * Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
 * 
 */

//S1
function mostFrequentItemCount(collection) {
  if (collection.length === 0) {
    return 0;
  }

  const frequencyMap = {};
  let maxFrequency = 0;

  for (const num of collection) {
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
    maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
  }

  return maxFrequency;
}

//S2
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  var count = Object.create(null);

  collection.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}
