const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const path = require('path');


const input = fs.createReadStream(__dirname + '/input/big.file');
const out = fs.createWriteStream(__dirname + '/output/big.file.gz');
input.pipe(gzip).pipe(out);

const outputFolder = __dirname + '/output';
fs.createReadStream(__dirname + '/output/big.file.gz')
    .pipe(zlib.Unzip())
    .on('entry', function (entry) {
        var isDir = 'Directory' === entry.type;
        var fullpath = path.join(outputFolder, entry.path);
        entry.pipe(fs.createWriteStream(fullpath));
    });
