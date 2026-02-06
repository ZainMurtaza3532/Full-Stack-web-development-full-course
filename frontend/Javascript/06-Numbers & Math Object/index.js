/***********************
 * JavaScript Numbers
 ***********************/

// Basic Numbers
let a = 10;
let b = 3.5;
let c = -20;

console.log("Type of a:", typeof a);

// Arithmetic
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Remainder:", a % 3);
console.log("Power:", a ** 2);

// Special Values
console.log("Infinity:", 10 / 0);
console.log("NaN Example:", "abc" / 2);

// isNaN
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(10):", isNaN(10));

// Conversion
console.log("Number():", Number("10.5"));
console.log("parseInt():", parseInt("10.99px"));
console.log("parseFloat():", parseFloat("10.99px"));

// Number Methods
let num = 12.6789;

console.log("toFixed(2):", num.toFixed(2));
console.log("toString():", num.toString());
console.log("isInteger:", Number.isInteger(num));
console.log("isInteger(10):", Number.isInteger(10));
console.log("isFinite(100):", Number.isFinite(100));
console.log("isFinite(Infinity):", Number.isFinite(Infinity));

/***********************
 * JavaScript Math Object
 ***********************/

// Constants
console.log("PI:", Math.PI);
console.log("E:", Math.E);

// Rounding
console.log("round(4.6):", Math.round(4.6));
console.log("floor(4.9):", Math.floor(4.9));
console.log("ceil(4.1):", Math.ceil(4.1));
console.log("trunc(4.9):", Math.trunc(4.9));

// Power & Roots
console.log("pow(2,3):", Math.pow(2, 3));
console.log("sqrt(16):", Math.sqrt(16));
console.log("cbrt(27):", Math.cbrt(27));

// Min & Max
console.log("min:", Math.min(10, 5, 20, 2));
console.log("max:", Math.max(10, 5, 20, 2));

// Absolute
console.log("abs(-50):", Math.abs(-50));

// Random
console.log("Random 0-1:", Math.random());

let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1 to 10:", random1to10);

// OTP Generator
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("OTP:", otp);

// Trigonometry
console.log("sin 90°:", Math.sin(90 * Math.PI / 180));
console.log("cos 0°:", Math.cos(0));
console.log("tan 45°:", Math.tan(45 * Math.PI / 180));

/***********************
 * Real-World Functions
 ***********************/

// Price Calculator
function calculateTotal(price, tax) {
  return (price + price * tax).toFixed(2);
}
console.log("Total Price:", calculateTotal(100, 0.16));

// Percentage
function percentage(obtained, total) {
  return ((obtained / total) * 100).toFixed(2) + "%";
}
console.log("Percentage:", percentage(450, 500));

// Dice Roll
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("Dice Roll:", rollDice());
