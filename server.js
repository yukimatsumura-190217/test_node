const http = require('http');

const port = 3000;
const host = '127.0.0.1';
const message = "TEST SERVER!\n";

const app = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(message);

    response.end();

});

app.listen(port, host);
console.log(`Server listen: ${host}:${port}`);