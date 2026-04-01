// ====================
// CREATING DATES
// ====================
console.log("=== Creating Dates ===");

let now = new Date();                        // Current date & time
let fromString = new Date("2025-08-12");     // From string (YYYY-MM-DD)
let fromNumbers = new Date(2025, 7, 12, 14, 30, 0); // year, month(0-11), day, hour, min, sec
let fromTimestamp = new Date(1690000000000); // From milliseconds since Jan 1, 1970

console.log("Now:", now);
console.log("From String:", fromString);
console.log("From Numbers:", fromNumbers);
console.log("From Timestamp:", fromTimestamp);

// ====================
// GETTING DATE VALUES
// ====================
console.log("\n=== Getting Values ===");

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()); // 0 = January
console.log("Date (day of month):", now.getDate());
console.log("Day of week:", now.getDay()); // 0 = Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp (ms since 1970):", now.getTime());

// UTC versions
console.log("UTC Hours:", now.getUTCHours());
console.log("UTC Date:", now.getUTCDate());

// ====================
// SETTING DATE VALUES
// ====================
console.log("\n=== Setting Values ===");
let d = new Date();
d.setFullYear(2030);
d.setMonth(5); // June
d.setDate(15);
d.setHours(10);
d.setMinutes(45);
d.setSeconds(30);
console.log("Updated Date:", d);

// ====================
// DATE FORMATTING
// ====================
console.log("\n=== Formatting Dates ===");

console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toUTCString():", now.toUTCString());
console.log("toISOString():", now.toISOString()); // Best for APIs
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toLocaleString():", now.toLocaleString());

// ====================
// DATE CALCULATIONS
// ====================
console.log("\n=== Date Calculations ===");

// Adding 7 days
let future = new Date();
future.setDate(future.getDate() + 7);
console.log("7 days later:", future.toDateString());

// Difference between two dates
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-12-31");
let diffMs = date2 - date1; // milliseconds difference
let diffDays = diffMs / (1000 * 60 * 60 * 24); // Convert to days
console.log("Days between:", diffDays);

// Age calculator example
function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log("Age:", calculateAge(new Date("2003-11-15")));

// ====================
// TIMER EXAMPLE
// ====================
console.log("\n=== Timer Example ===");

setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);
