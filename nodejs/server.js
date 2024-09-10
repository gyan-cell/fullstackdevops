import { createServer } from "node:http";
import { simpleDnaLookup, simpleDnaNameResolution } from "./modules/dns/dns.js";
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
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Dns Lookup Example")
  simpleDnaLookup;
  console.log("Simple Dna Name Resolution");
  simpleDnaNameResolution;
})


