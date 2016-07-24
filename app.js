const compressor = require('./compressor');

compressor.compress('./testdata/test.json', (err, gzFile) => {
    if(err) throw err;
    compressor.decompress(gzFile, (err, out) => {
        if(err) throw err;
        console.log(out.path);
    });
});