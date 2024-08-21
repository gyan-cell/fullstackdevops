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

