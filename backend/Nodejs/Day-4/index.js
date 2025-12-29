const http = require('http');
const fs = require('fs');

const port = 8000;

const server = http.createServer((req, res) => {

    // Downloading file in a bad way ❌
    const file = fs.readFileSync("sample.txt");

    res.end(file);
});

server.listen(port, () => {
    console.log('Server is listening on port 8000');
});