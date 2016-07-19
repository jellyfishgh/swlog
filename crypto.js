const fs = require('fs');
const zlib = require('zlib');

module.exports = {
    decryption: function () {
        const unzip = zlib.createInflateRaw();
        const inp = fs.createReadStream('zlib-1.2.8.tar.gz');
        const out = fs.createWriteStream('zlib');
        inp.pipe(unzip).pipe(out);
    },
    encryption: function () {
        const gzip = zlib.createGzip();
        const inp = fs.createReadStream('input.txt');
        const out = fs.createWriteStream('input.txt.gz');
        inp.pipe(gzip).pipe(out);
    }
}