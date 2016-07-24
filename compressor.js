const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

module.exports = {
    compress: function (file, cb) {
        const gzip = zlib.createGzip();
        const inp = fs.createReadStream(file);
        const gzFile = path.join(path.dirname(file), `${path.basename(file, path.extname(file))}.gz`);
        const out = fs.createWriteStream(gzFile);
        inp.pipe(gzip).pipe(out)
        .on('error', (err) => {
            cb(err, undefined);
        })
        .on('finish', () => {
            cb(undefined, gzFile);
        });
    },
    decompress: function (gzFile, cb) {
        const unzip = zlib.createUnzip();
        const inp = fs.createReadStream(gzFile);
        const file = path.join(path.dirname(gzFile), `${path.basename(gzFile, '.gz')}.txt`);
        const out = fs.createWriteStream(file);
        inp.pipe(unzip).pipe(out)
        .on('error', (err) => {
            cb(err, undefined);
        })
        .on('finish', () => {
            cb(undefined, out);
        });
    },
};