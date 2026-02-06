/************************
 * JavaScript String
 ************************/

// Create Strings
let str = "Hello JavaScript World";
let str2 = "   Learn JS Fast   ";

console.log("Original String:", str);

// ----------------------
// Length
// ----------------------
console.log("Length:", str.length);

// ----------------------
// Access Characters
// ----------------------
console.log("charAt(1):", str.charAt(1));
console.log("charCodeAt(1):", str.charCodeAt(1));
console.log("Using []:", str[10]);

// ----------------------
// Case Conversion
// ----------------------
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// ----------------------
// Searching
// ----------------------
console.log("indexOf('JavaScript'):", str.indexOf("JavaScript"));
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));
console.log("includes('World'):", str.includes("World"));
console.log("startsWith('Hello'):", str.startsWith("Hello"));
console.log("endsWith('World'):", str.endsWith("World"));

// ----------------------
// Extracting Parts
// ----------------------
console.log("slice(6,16):", str.slice(6, 16));
console.log("substring(6,16):", str.substring(6, 16));
console.log("substr(6,10):", str.substr(6, 10)); // deprecated but asked in exams

// ----------------------
// Replace
// ----------------------
console.log("replace:", str.replace("World", "Developer"));
console.log(
  "replaceAll:",
  str.replaceAll("o", "0")
);

// ----------------------
// Trim
// ----------------------
console.log("trim:", str2.trim());
console.log("trimStart:", str2.trimStart());
console.log("trimEnd:", str2.trimEnd());

// ----------------------
// Split
// ----------------------
console.log("split by space:", str.split(" "));
console.log("split by char:", str.split(""));

// ----------------------
// Join (Array → String)
let words = ["Learn", "JavaScript", "Today"];
console.log("join:", words.join(" "));

// ----------------------
// Concatenation
// ----------------------
console.log("concat:", str.concat(" 🚀"));
console.log("Using +:", str + " 🚀");

// ----------------------
// Repeat
// ----------------------
console.log("repeat:", "JS ".repeat(3));

// ----------------------
// Padding
// ----------------------
let num = "5";
console.log("padStart:", num.padStart(3, "0"));
console.log("padEnd:", num.padEnd(3, "0"));

// ----------------------
// Match (Regex)
// ----------------------
let text = "I love JavaScript and JavaScript loves me";
console.log("match:", text.match(/JavaScript/g));

// ----------------------
// Search (Regex)
console.log("search:", text.search(/JavaScript/));

// ----------------------
// Locale Compare
// ----------------------
console.log("localeCompare:", "a".localeCompare("b"));

// ----------------------
// Conversion
// ----------------------
let number = 100;
console.log("Number to String:", number.toString());

// ----------------------
// Real-World Examples
// ----------------------

// Username Formatter
function formatUsername(name) {
  return name.trim().toLowerCase().replaceAll(" ", "_");
}
console.log("Username:", formatUsername("  Zain Murtaza  "));

// Word Counter
function wordCount(sentence) {
  return sentence.trim().split(" ").length;
}
console.log("Word Count:", wordCount("JavaScript is awesome language"));

// Email Masking
function maskEmail(email) {
  let [user, domain] = email.split("@");
  return user.slice(0, 2) + "***@" + domain;
}
console.log("Masked Email:", maskEmail("zain@gmail.com"));

// Capitalize First Letter
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
console.log("Capitalized:", capitalize("javascript"));
