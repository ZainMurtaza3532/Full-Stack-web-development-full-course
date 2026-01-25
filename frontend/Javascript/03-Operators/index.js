// Operators in JS

// 1️⃣ Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Power → 1000


// 2️⃣ Assignment Operators

let x = 5;

x += 3; // x = x + 3 → 8
x -= 2; // x = x - 2 → 6
x *= 2; // x = x * 2 → 12
x /= 3; // x = x / 3 → 4


// 3️⃣ Comparison Operators
let p = 10;
let q = "10";

console.log(p == q);   // true (value only)
console.log(p === q);  // false (value + type)
console.log(p != q);   // false
console.log(p !== q);  // true
console.log(p > 5);    // true
console.log(p <= 10);  // true
console.log(p < 15);   // true


// 4️⃣ Logical Operators
let age = 22;

console.log(age > 18 && age < 30); // AND → true
console.log(age < 18 || age > 21); // OR → true
console.log(!(age > 18));          // NOT → false


// 5️⃣ Increment and Decrement Operators
let count = 5;

console.log(++count); // Pre-increment → 6
console.log(count++); // Post-increment → 6 (then count becomes 7)
console.log(--count); // Pre-decrement → 6
console.log(count--); // Post-decrement → 6 (then count becomes 5)


// 6️⃣ Ternary Operator
let marks = 85;
let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result); // Output: Pass


// 7️⃣ Typeof Operator
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof {});
console.log(typeof undefined);


