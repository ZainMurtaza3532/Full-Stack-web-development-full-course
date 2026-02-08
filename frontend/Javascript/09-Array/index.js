/************************
 * JavaScript Arrays
 ************************/

// Create Arrays
let arr = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original Array:", arr);

// ----------------------
// Length
// ----------------------
console.log("Length:", arr.length);

// ----------------------
// Add / Remove Elements
// ----------------------
arr.push(60);
console.log("push:", arr);

arr.pop();
console.log("pop:", arr);

arr.unshift(5);
console.log("unshift:", arr);

arr.shift();
console.log("shift:", arr);

// ----------------------
// Access Elements
// ----------------------
console.log("Index 0:", arr[0]);
console.log("Last Element:", arr[arr.length - 1]);

// ----------------------
// Splice (Add / Remove)
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1, 99);
console.log("splice:", nums);

// ----------------------
// Slice
let sliced = nums.slice(1, 4);
console.log("slice:", sliced);

// ----------------------
// Concat
let merged = arr.concat(nums);
console.log("concat:", merged);

// ----------------------
// Join
console.log("join:", fruits.join(", "));

// ----------------------
// Reverse
let reversed = [...arr].reverse();
console.log("reverse:", reversed);

// ----------------------
// Sort
let randomNums = [40, 10, 100, 5, 25];
randomNums.sort((a, b) => a - b);
console.log("sort asc:", randomNums);

randomNums.sort((a, b) => b - a);
console.log("sort desc:", randomNums);

// ----------------------
// Includes
console.log("includes 30:", arr.includes(30));

// ----------------------
// Index Of
console.log("indexOf 40:", arr.indexOf(40));

// ----------------------
// Find
let found = arr.find(n => n > 25);
console.log("find >25:", found);

// ----------------------
// Find Index
console.log("findIndex >25:", arr.findIndex(n => n > 25));

// ----------------------
// Filter
let filtered = arr.filter(n => n > 25);
console.log("filter >25:", filtered);

// ----------------------
// Map
let doubled = arr.map(n => n * 2);
console.log("map *2:", doubled);

// ----------------------
// Reduce
let sum = arr.reduce((total, n) => total + n, 0);
console.log("reduce sum:", sum);

// ----------------------
// Some & Every
console.log("some >40:", arr.some(n => n > 40));
console.log("every >5:", arr.every(n => n > 5));

// ----------------------
// forEach
arr.forEach((value, index) => {
  console.log(`Index ${index}: ${value}`);
});

// ----------------------
// Flat
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat:", nested.flat(2));

// ----------------------
// FlatMap
let flatMapped = [1, 2, 3].flatMap(n => [n, n * 2]);
console.log("flatMap:", flatMapped);

// ----------------------
// Fill
let filled = new Array(5).fill(0);
console.log("fill:", filled);

// ----------------------
// From
let fromString = Array.from("HELLO");
console.log("Array.from:", fromString);

// ----------------------
// isArray
console.log("isArray:", Array.isArray(arr));

// ----------------------
// Copy Within
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("copyWithin:", copyArr);

// ----------------------
// Entries / Keys / Values
for (let [i, v] of arr.entries()) {
  console.log("entries:", i, v);
}

for (let k of arr.keys()) {
  console.log("keys:", k);
}

for (let v of arr.values()) {
  console.log("values:", v);
}

// ----------------------
// Real-World Examples
// ----------------------

// Remove Duplicates
let dup = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(dup)];
console.log("Unique:", unique);

// Max & Min
let numbers = [10, 5, 25, 100];
console.log("Max:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

// Shopping Cart Total
let prices = [100, 250, 75];
let total = prices.reduce((sum, p) => sum + p, 0);
console.log("Cart Total:", total);

// Search Product
let products = ["Laptop", "Mobile", "Tablet"];
function searchProduct(name) {
  return products.includes(name);
}
console.log("Product exists:", searchProduct("Mobile"));
