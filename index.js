const http = require('http');
const port = process.env.PORT || 3000;

// requestListener call back arrow function is defined inside  http.createServer
// Two positional arguments req and res passed into callback function.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

const server2 = http.createServer()

