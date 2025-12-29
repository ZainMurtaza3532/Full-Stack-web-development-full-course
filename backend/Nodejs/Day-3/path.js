const path = require('path');

console.log("Directory Name:", path.dirname(__filename));
console.log("File Name:", path.basename(__filename));
console.log("File Extension:", path.extname(__filename));
console.log("Parsed Path:", path.parse(__filename));
console.log("Joined Path:", path.join(__dirname, 'test', 'hello.html'));
console.log("Resolved Path:", path.resolve(__dirname, 'test', 'hello.html'));
console.log("Normalized Path:", path.normalize('/test//hello.html'));
console.log("Is Absolute Path:", path.isAbsolute(__filename));
console.log("Relative Path:", path.relative(__dirname, __filename));
console.log("Path Separator:", path.sep);
console.log("Path Delimiter:", path.delimiter);
console.log("Format Path:", path.format({
    dir: __dirname,
    base: 'index.js'
}));