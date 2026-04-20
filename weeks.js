let date = new Date();
let weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let today = weekdays[date.getDay()];
console.log("Today is " + today);
