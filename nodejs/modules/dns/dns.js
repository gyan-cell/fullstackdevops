// Dns Lookup Example

import dns from 'node:dns';
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
