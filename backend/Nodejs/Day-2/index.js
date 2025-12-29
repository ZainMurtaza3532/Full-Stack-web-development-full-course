const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
   const log = `${Date.now()}: & From ${req.url} New Request Received\n`;

    fs.appendFile('server.log', log, (err) => {
        if (err) {
            console.log('Error writing to log file', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }
        res.end('Request logged successfully');
    })
})


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});