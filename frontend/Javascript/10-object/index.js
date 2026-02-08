/************************
 * JavaScript Objects
 ************************/

// ----------------------
// Create Object
// ----------------------
let user = {
  name: "Zain",
  age: 22,
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript"],

  greet() {
    return `Hello, I am ${this.name}`;
  }
};

console.log("User Object:", user);

// ----------------------
// Access Properties
// ----------------------
console.log("Dot notation:", user.name);
console.log("Bracket notation:", user["role"]);

// ----------------------
// Add / Update / Delete
// ----------------------
user.country = "Pakistan";
user.age = 23;
delete user.role;

console.log("Updated User:", user);

// ----------------------
// Object Methods
// ----------------------
console.log("Greeting:", user.greet());

// ----------------------
// Check Property
// ----------------------
console.log("hasOwnProperty:", user.hasOwnProperty("name"));
console.log("in operator:", "skills" in user);

// ----------------------
// Loop Object
// ----------------------
for (let key in user) {
  console.log(key, ":", user[key]);
}

// ----------------------
// Object.keys / values / entries
// ----------------------
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// ----------------------
// Object.assign (Copy / Merge)
// ----------------------
let extra = { experience: "1 year", remote: true };
let mergedUser = Object.assign({}, user, extra);

console.log("Merged User:", mergedUser);

// ----------------------
// Spread Operator
// ----------------------
let clonedUser = { ...user };
console.log("Cloned User:", clonedUser);

// ----------------------
// Object.freeze
// ----------------------
let frozenObj = { a: 1 };
Object.freeze(frozenObj);
frozenObj.a = 100; // won't change

console.log("Frozen Object:", frozenObj);

// ----------------------
// Object.seal
// ----------------------
let sealedObj = { x: 10 };
Object.seal(sealedObj);
sealedObj.x = 20;     // allowed
sealedObj.y = 30;     // not allowed

console.log("Sealed Object:", sealedObj);

// ----------------------
// Destructuring
// ----------------------
let { name, age, skills } = user;
console.log("Destructured:", name, age, skills);

// ----------------------
// Nested Objects
// ----------------------
let company = {
  name: "TechSoft",
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
};

console.log("City:", company.address.city);

// ----------------------
// Optional Chaining
// ----------------------
console.log("Zip:", company.address?.zip);

// ----------------------
// Object Constructor
// ----------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Ali", 25);
console.log("Constructor Object:", p1);

// ----------------------
// Object.create
// ----------------------
let proto = { greet() { return "Hello"; } };
let obj = Object.create(proto);
obj.name = "Ahmed";

console.log("Object.create:", obj.greet(), obj.name);

// ----------------------
// JSON Methods
// ----------------------
let jsonStr = JSON.stringify(user);
console.log("JSON String:", jsonStr);

let parsedObj = JSON.parse(jsonStr);
console.log("Parsed Object:", parsedObj);

// ----------------------
// Real-World Examples
// ----------------------

// Profile Formatter
function formatProfile(u) {
  return `${u.name} (${u.age}) - ${u.skills.join(", ")}`;
}
console.log("Profile:", formatProfile(user));

// Count Object Properties
function countProps(obj) {
  return Object.keys(obj).length;
}
console.log("Property Count:", countProps(user));

// Check Empty Object
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log("Is Empty:", isEmpty({}));

// Deep Clone (Simple)
let deepClone = JSON.parse(JSON.stringify(user));
console.log("Deep Clone:", deepClone);
