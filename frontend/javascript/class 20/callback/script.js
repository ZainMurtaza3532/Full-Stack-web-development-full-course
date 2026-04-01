// A simple function that takes another function as a parameter
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Pass function as callback
greetUser("Zain", sayGoodbye);




// 

function processNumber(num, callback) {
  console.log("Number is: " + num);
  callback(num); // execute the callback
}

processNumber(5, function(n) {
  console.log("Square is: " + (n * n));
});




// Example of using setTimeout as a callback
console.log("Start");

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
