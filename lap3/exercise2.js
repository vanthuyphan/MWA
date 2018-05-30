const fs = require('fs');
const server = require('https').createServer({
    key: fs.readFileSync(__dirname + '/certs/key.pem'),
    cert: fs.readFileSync(__dirname + '/certs/cert.pem')
});
server.on('request', (req, res) => {
    /*fs.readFile(__dirname + '/big.file', (err, data) => {
        if (err) throw err;
        res.end(data);
    });*/

    const stream = fs.createReadStream(__dirname + '/input/big.file');
    stream.pipe(res);

});
server.listen(443);