/************************
 * JavaScript Functions
 ************************/

// ----------------------
// 1. Function Declaration
// ----------------------
function add(a, b) {
  return a + b;
}
console.log("Function Declaration:", add(5, 3));

// ----------------------
// 2. Function Expression
// ----------------------
const subtract = function (a, b) {
  return a - b;
};
console.log("Function Expression:", subtract(10, 4));

// ----------------------
// 3. Arrow Function
// ----------------------
const multiply = (a, b) => a * b;
console.log("Arrow Function:", multiply(4, 5));

// ----------------------
// 4. Single Parameter Arrow
// ----------------------
const square = x => x * x;
console.log("Square:", square(6));

// ----------------------
// 5. Default Parameters
// ----------------------
function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet());
console.log(greet("Zain"));

// ----------------------
// 6. Rest Parameters
// ----------------------
function sumAll(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}
console.log("Rest Sum:", sumAll(1, 2, 3, 4));

// ----------------------
// 7. Callback Function
// ----------------------
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log("Callback:", calculate(10, 5, multiply));

// ----------------------
// 8. IIFE (Immediately Invoked)
// ----------------------
(function () {
  console.log("IIFE executed");
})();

// ----------------------
// 9. Return Function
// ----------------------
function outer() {
  return function inner() {
    return "Inner Function";
  };
}
console.log("Return Function:", outer()());

// ----------------------
// 10. Closure
// ----------------------
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let myCounter = counter();
console.log("Closure:", myCounter());
console.log("Closure:", myCounter());

// ----------------------
// 11. Higher-Order Function
// ----------------------
function higher(fn) {
  return fn();
}
console.log("Higher Order:", higher(() => "Hello HOF"));

// ----------------------
// 12. Recursion
// ----------------------
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5));

// ----------------------
// 13. Anonymous Function
// ----------------------
setTimeout(function () {
  console.log("Anonymous Function");
}, 100);

// ----------------------
// 14. Named Function Expression
// ----------------------
const divide = function div(a, b) {
  return a / b;
};
console.log("Named Function:", divide(10, 2));

// ----------------------
// 15. this Keyword (Normal vs Arrow)
// ----------------------
const obj = {
  name: "Zain",
  normalFunc() {
    return this.name;
  },
  arrowFunc: () => this.name
};

console.log("Normal this:", obj.normalFunc());
console.log("Arrow this:", obj.arrowFunc());

// ----------------------
// 16. Arguments Object
// ----------------------
function showArgs() {
  return arguments;
}
console.log("Arguments:", showArgs(1, 2, 3));

// ----------------------
// 17. Function Constructor (Not Recommended)
// ----------------------
const fn = new Function("a", "b", "return a + b");
console.log("Function Constructor:", fn(3, 4));

// ----------------------
// 18. Currying
// ----------------------
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Currying:", curry(1)(2)(3));

// ----------------------
// 19. Bind / Call / Apply
// ----------------------
function intro(city) {
  return `${this.name} from ${city}`;
}

const person = { name: "Zain" };

console.log("call:", intro.call(person, "Lahore"));
console.log("apply:", intro.apply(person, ["Karachi"]));

const boundFunc = intro.bind(person);
console.log("bind:", boundFunc("Islamabad"));

// ----------------------
// 20. Real-World Examples
// ----------------------

// Debounce
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

const sayHello = () => console.log("Hello!");
const debouncedHello = debounce(sayHello, 500);
debouncedHello();

// Calculator
function calculator(a, b, operator) {
  const ops = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    mul: (x, y) => x * y,
    div: (x, y) => x / y
  };
  return ops[operator](a, b);
}

console.log("Calculator:", calculator(10, 5, "mul"));
