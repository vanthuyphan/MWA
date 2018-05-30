const dns = require('dns');

dns.resolve4('www.mum.edu', (error, addresses) => {
    if (error) console.log("Error", error)
    else {
        addresses.forEach((address) => {
            console.log("Address " + address);
        })
    }
})
