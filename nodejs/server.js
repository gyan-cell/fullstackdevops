import { createServer } from "node:http";
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
})

server.on('error', (err) => {
  console.log(err);
})

// Dns Lookup Example
import dns from 'node:dns';
dns.lookup("google.com", (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
  console.log(address)
  console.log(family)
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
