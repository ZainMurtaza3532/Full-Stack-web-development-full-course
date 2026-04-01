// ====================
// NUMBER BASICS
// ====================
console.log("=== Number Basics ===");
let num1 = 25;                   // integer
let num2 = 3.14159;               // floating-point
let num3 = new Number(50);        // Number object

console.log(num1, num2, num3.valueOf()); // valueOf() to get primitive value

// ====================
// CONVERT TO STRING
// ====================
console.log("\n=== Conversion ===");
console.log(num1.toString());        // "25"
console.log(num2.toString());        // "3.14159"

// ====================
// DECIMAL CONTROL
// ====================
console.log("\n=== Decimal Control ===");
console.log(num2.toFixed(2));        // "3.14" (2 decimal places)
console.log(num2.toPrecision(3));    // "3.14" (3 total digits)

// ====================
// CHECK NUMBER TYPE
// ====================
console.log("\n=== Checking Numbers ===");
console.log(Number.isInteger(num1));          // true
console.log(Number.isInteger(num2));          // false
console.log(Number.isNaN(NaN));               // true
console.log(Number.isFinite(100));            // true
console.log(Number.isFinite(Infinity));       // false

// ====================
// PARSING STRINGS TO NUMBERS
// ====================
console.log("\n=== Parsing Strings ===");
console.log(Number.parseInt("25.6"));         // 25
console.log(Number.parseFloat("25.6"));       // 25.6
console.log(Number("123"));                   // 123 (type conversion)
console.log(+"456");                          // 456 (unary plus)

// ====================
// SPECIAL NUMBER VALUES
// ====================
console.log("\n=== Special Values ===");
console.log(Number.MAX_VALUE);      // Largest positive number
console.log(Number.MIN_VALUE);      // Smallest positive number > 0
console.log(Number.MAX_SAFE_INTEGER); // Max safe integer in JS
console.log(Number.MIN_SAFE_INTEGER); // Min safe integer in JS
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN

// ====================
// EXAMPLES OF USAGE
// ====================
console.log("\n=== Example Usages ===");
// Rounding a price
let price = 19.987;
console.log("Rounded price:", price.toFixed(2)); // "19.99"

// Validating user input
let userInput = "123abc";
let converted = Number.parseInt(userInput);
if (!Number.isNaN(converted)) {
    console.log("Valid number:", converted);
} else {
    console.log("Invalid number");
}
