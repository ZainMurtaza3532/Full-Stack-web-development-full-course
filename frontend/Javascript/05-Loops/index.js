// Loops In JavaScript

// 1. For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// 2. While Loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}


// 3. Do...While Loop
let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 5);


// 4. For...In Loop (for objects)
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}


// 5. For...Of Loop (for arrays)
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log("Color:", color);
}


// 6. Nested Loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}


// 7. Break and Continue
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Exit loop when i is 6
  }
    if (i % 2 === 0) {
    continue; // Skip even numbers
  }
    console.log("Odd Number:", i);
}


// 8. Labeled Statements
outerLoop: for (let i = 1; i <= 3; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // Exit both loops
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}


