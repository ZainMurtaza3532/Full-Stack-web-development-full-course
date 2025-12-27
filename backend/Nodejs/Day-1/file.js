const fs = require('fs');

// Write some data to a file

fs.writeFile("file.txt", "Hello Node.js File Handling", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created and data written successfully");
    }
});


// Read the contents of the 

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File Content:\n", data);
    }
});


// update the contents of the file

fs.appendFile("file.txt", "\nThis is appended text.", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully");
    }
});

// Rename the file

fs.rename("file.txt", "newFile.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});


// Delete the file

fs.unlink("newFile.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});



