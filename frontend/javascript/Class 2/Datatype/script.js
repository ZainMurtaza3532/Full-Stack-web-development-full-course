// Primitive Data Types

// string
let name = "Zain";
console.log(name);

// number
let age = 21;
console.log(age);

// boolean
let isOnline = true;
console.log(isOnline);

// null
let score = null;
console.log(score);

// undefind
let test;
console.log(test); // undefined

// symbol
let id = Symbol("id");
console.log(id); // Symbol(id)

// bigint
let big = 1234567890123456789012345678901234567890n;
console.log(big);



// 🔹 2. Reference Data Types

// object
let person ={
    name: "Zain",
    age: 21,
}
console.log(person);


// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function greet() {
  console.log("Hello!");
}



// 🔹 3. Type Conversion

// String to Number
let a = "5";
let b = Number(a);
console.log(b + 2); // Output: 7


// Number to String
let num = 100;
let str = String(num);
console.log(str); // "100"



// Boolean Conversion
let value1 = Boolean(1); // true
let value2 = Boolean(0); // false
console.log(value1);
console.log(value2);


// 🔹 4. typeof Operator
console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (quirk)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function
