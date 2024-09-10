// Dns Lookup Example

import dns, { Resolver } from 'node:dns';
export const simpleDnaLookup = dns.lookup("google.com", (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
  console.log(address)
  console.log(family)
})

export const simpleDnaNameResolution = dns.resolve4("google.com", (err, addresses) => {
  if (err) { throw err; }
  console.log("Addresses : ", JSON.stringify(addresses));
  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) { throw err; }
      console.log("Hostnames : ", JSON.stringify(hostnames));
    })
  })
})


//DNS Resolver Class An independent resolver for DNS requests.

//Creating a new resolver uses the default server settings. Setting the servers used for a resolver using resolver.setServers() does not 
//affect other resolvers:
//
const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '8.8.4.4']);
// This request will use the server at 4.4.4.4, independent of global settings.
resolver.resolve4('example.org', (err, addresses) => {
  // ...
  console.log(addresses)
});


//For more Methods And Examples See : https://nodejs.org/api/dns.html
