/**************************
 *Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
 *
 */

//S1
function fireFight(s) {
  const items = s.split(" ");
  for (let i = 0; i < items.length; i++) {
    if (items[i] === "Fire") {
      items[i] = "~~";
    }
  }
  return items.join(" ");
}
