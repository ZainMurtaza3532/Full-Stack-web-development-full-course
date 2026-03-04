// variable 
// var , let , const


// var is a old way and function \ grobal scope ,  
// let and const is a new way and block scope

// var
var Age = 25;
if(true){
    console.log(Age)  //output: 25
}

var name = "Ali";
var name = "Zain";  // ✅ Allowed
console.log(name); // Output: Zain

console.log(Age)    //output: 25




// let       ( is a modern and block scope)

let age = 35;
age = 46;         // ✅ Allowed
// let age = 27;  // ❌ Error: already declared
console.log(age);

{
    let a = 10;
console.log(a);   // ✅ Allowed
}
// console.log(a);    // ❌ Error: let is block scope 




// const          (constant – block scope)

const city = "Lahore";
// city = "Karachi"; // ❌ Error: Cannot change const
console.log(city);

const a = 28;
// a = 29; // ❌ Error: Cannot change const
 console.log(a);





//  ✅ Scope Example
function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // ✅ 10 (function scoped)
  // console.log(b); // ❌ Error
  // console.log(c); // ❌ Error
}
test();




/* 2. Naming Conventions

Must start with a letter, _, or $

Can’t start with a number

Use camelCase for variables */

// ✅ Good Examples:
let userName = "Ali";
let $price = 100;
let _discount = 10;
console.log(userName,$price,_discount);
