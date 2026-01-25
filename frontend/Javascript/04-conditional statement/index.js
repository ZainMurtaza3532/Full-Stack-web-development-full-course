// Conditional Statement Practice

// 1️⃣ if Statement
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}
// Output: You are eligible to vote


// 2️⃣ if...else Statement
let marks = 35;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
// Output: Fail


// 3️⃣ if...else if...else Statement
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Output: Grade B


// 4️⃣ Nested if Statement
let Age = 22;
let hasCNIC = true;

if (Age >= 18) {
  if (hasCNIC) {
    console.log("You can vote");
  } else {
    console.log("CNIC required");
  }
}
// Output: You can vote


// 5️⃣ Switch Statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday


// 6️⃣ Ternary Operator
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);
// Output: Even


// 7️⃣ Logical Operators in Conditionals
let temp = 25;
if (temp > 20 && temp < 30) {
  console.log("Perfect weather");
}
// Output: Perfect weather


// 8️⃣ Truthy and Falsy Values
let input = "";
if (input) {
  console.log("Input provided");
} else {
  console.log("No input");
}
// Output: No input

