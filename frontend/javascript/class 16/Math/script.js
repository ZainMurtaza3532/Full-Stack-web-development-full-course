// ====================
// MATH BASICS
// ====================
console.log("=== Math Basics ===");
console.log(Math.PI);        // π = 3.141592653589793
console.log(Math.E);         // Euler's number
console.log(Math.SQRT2);     // Square root of 2
console.log(Math.SQRT1_2);   // Square root of 1/2
console.log(Math.LN2);       // Natural log of 2
console.log(Math.LN10);      // Natural log of 10
console.log(Math.LOG2E);     // Log base 2 of E
console.log(Math.LOG10E);    // Log base 10 of E

// ====================
// ROUNDING METHODS
// ====================
console.log("\n=== Rounding ===");
console.log(Math.round(4.7));  // 5
console.log(Math.round(4.4));  // 4
console.log(Math.floor(4.7));  // 4 (down)
console.log(Math.ceil(4.2));   // 5 (up)
console.log(Math.trunc(4.9));  // 4 (remove decimal)

// ====================
// BASIC MATH FUNCTIONS
// ====================
console.log("\n=== Basic Math ===");
console.log(Math.abs(-5));       // 5
console.log(Math.pow(2, 3));     // 8
console.log(Math.sqrt(16));      // 4
console.log(Math.cbrt(27));      // 3
console.log(Math.sign(-5));      // -1
console.log(Math.sign(0));       // 0
console.log(Math.sign(7));       // 1

// ====================
// MIN / MAX
// ====================
console.log("\n=== Min / Max ===");
console.log(Math.min(1, 3, -2, 5)); // -2
console.log(Math.max(1, 3, -2, 5)); // 5

// ====================
// RANDOM NUMBERS
// ====================
console.log("\n=== Random Numbers ===");
console.log(Math.random()); // random between 0 and 1

// Random between 1 and 10
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random1to10);

// Random between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 50-100:", getRandomInt(50, 100));

// ====================
// TRIGONOMETRY
// ====================
console.log("\n=== Trigonometry ===");
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1

// Hyperbolic
console.log(Math.sinh(1));  // ~1.175
console.log(Math.cosh(1));  // ~1.543
console.log(Math.tanh(1));  // ~0.761

// ====================
// LOGARITHMS & EXPONENTIALS
// ====================
console.log("\n=== Logs & Exponentials ===");
console.log(Math.log(1));     // 0 (natural log)
console.log(Math.log10(100)); // 2
console.log(Math.log2(8));    // 3
console.log(Math.exp(1));     // e^1 = 2.718...

// ====================
// EXAMPLES OF USAGE
// ====================
console.log("\n=== Example Usages ===");

// Circle area
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log("Area of circle:", area.toFixed(2));

// Hypotenuse (Pythagoras)
let a = 3, b = 4;
let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Hypotenuse:", hypotenuse);

// Random password digit
let passwordDigit = getRandomInt(1000, 9999);
console.log("Password Digit:", passwordDigit);
