const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const message = "Hello Node Server!\n";
const app = http.createServer(function (request, resonse) {
response.writeHead(200, {'Content-Type': 'text/html'});

response.write(message);

response.end();
console.log(`Method: ${reqquest.method}`);
console.log(`Response: ${message}`);
});

app.listen(port, host);
console.log(`Server listen: ${host}:${port}`);