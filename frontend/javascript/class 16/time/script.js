// ====================
// CURRENT TIME BASICS
// ====================
console.log("=== Current Time ===");

let now = new Date();
console.log("Full Date & Time:", now.toString());

// Extracting time parts
console.log("Hours:", now.getHours());         // 0-23
console.log("Minutes:", now.getMinutes());     // 0-59
console.log("Seconds:", now.getSeconds());     // 0-59
console.log("Milliseconds:", now.getMilliseconds()); // 0-999

// UTC versions
console.log("UTC Hours:", now.getUTCHours());
console.log("UTC Minutes:", now.getUTCMinutes());

// ====================
// FORMATTING TIME
// ====================
console.log("\n=== Formatting Time ===");

// 24-hour format
let time24 = now.getHours().toString().padStart(2, "0") + ":" +
             now.getMinutes().toString().padStart(2, "0") + ":" +
             now.getSeconds().toString().padStart(2, "0");
console.log("24-hour format:", time24);

// 12-hour format with AM/PM
let hours12 = now.getHours() % 12 || 12;
let ampm = now.getHours() >= 12 ? "PM" : "AM";
let time12 = hours12.toString().padStart(2, "0") + ":" +
             now.getMinutes().toString().padStart(2, "0") + ":" +
             now.getSeconds().toString().padStart(2, "0") + " " + ampm;
console.log("12-hour format:", time12);

// Using toLocaleTimeString()
console.log("Locale Time:", now.toLocaleTimeString());

// ====================
// TIMERS (setTimeout, setInterval)
// ====================
console.log("\n=== Timers ===");

// setTimeout → runs once after delay
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

// setInterval → runs repeatedly
let count = 0;
let interval = setInterval(() => {
    count++;
    console.log("Repeating every 1 sec:", count);
    if (count === 3) clearInterval(interval); // stop after 3 repeats
}, 1000);

// ====================
// TIME CALCULATIONS
// ====================
console.log("\n=== Time Calculations ===");

// Add hours to current time
let plus3Hours = new Date(now);
plus3Hours.setHours(now.getHours() + 3);
console.log("After 3 hours:", plus3Hours.toLocaleTimeString());

// Difference between two times (in minutes & seconds)
let startTime = new Date();
setTimeout(() => {
    let endTime = new Date();
    let diffMs = endTime - startTime; // milliseconds
    let diffSec = Math.floor(diffMs / 1000);
    console.log(`Elapsed Time: ${diffSec} seconds`);
}, 1500);

// ====================
// STOPWATCH EXAMPLE
// ====================
console.log("\n=== Stopwatch Example ===");

let stopwatchStart = Date.now();
setTimeout(() => {
    let stopwatchEnd = Date.now();
    let elapsed = (stopwatchEnd - stopwatchStart) / 1000; // in seconds
    console.log(`Stopwatch Time: ${elapsed.toFixed(2)} seconds`);
}, 2200);
