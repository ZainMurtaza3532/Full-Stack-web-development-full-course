/************************
 * JavaScript Date & Time
 ************************/

// Create Date Object
let now = new Date();
console.log("Current Date & Time:", now);

// ----------------------
// Create Date in Different Ways
// ----------------------
let date1 = new Date("2026-02-06");
let date2 = new Date(2026, 1, 6); // year, month(0-based), day
let date3 = new Date(2026, 1, 6, 10, 30, 15);

console.log("Date from string:", date1);
console.log("Date from numbers:", date2);
console.log("Full custom date:", date3);

// ----------------------
// Get Methods
// ----------------------
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0-Sun):", now.getDay());

console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

console.log("Time (ms since 1970):", now.getTime());

// ----------------------
// Set Methods
// ----------------------
let customDate = new Date();

customDate.setFullYear(2030);
customDate.setMonth(5);
customDate.setDate(15);
customDate.setHours(10);
customDate.setMinutes(45);
customDate.setSeconds(30);

console.log("Modified Date:", customDate);

// ----------------------
// Date Formatting
// ----------------------
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toISOString():", now.toISOString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toLocaleString():", now.toLocaleString());

// ----------------------
// UTC Methods
// ----------------------
console.log("UTC Year:", now.getUTCFullYear());
console.log("UTC Month:", now.getUTCMonth());
console.log("UTC Date:", now.getUTCDate());
console.log("UTC Hours:", now.getUTCHours());

// ----------------------
// Date Comparison
// ----------------------
let d1 = new Date("2026-01-01");
let d2 = new Date("2026-12-31");

console.log("d1 < d2:", d1 < d2);
console.log("Difference in ms:", d2 - d1);

// ----------------------
// Difference in Days
// ----------------------
function daysBetween(dateA, dateB) {
  let diff = Math.abs(dateB - dateA);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log("Days Between:", daysBetween(d1, d2));

// ----------------------
// Real-World Examples
// ----------------------

// Digital Clock
function digitalClock() {
  let d = new Date();
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
console.log("Digital Clock:", digitalClock());

// Age Calculator
function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
console.log("Age:", calculateAge(2004));

// Countdown Timer (Days Left)
function daysLeft(targetDate) {
  let today = new Date();
  return daysBetween(today, new Date(targetDate));
}
console.log("Days left till Eid:", daysLeft("2026-04-22"));

// ----------------------
// Timestamp Example
// ----------------------
let timestamp = Date.now();
console.log("Current Timestamp:", timestamp);

// Convert timestamp to date
console.log("Timestamp to Date:", new Date(timestamp));
