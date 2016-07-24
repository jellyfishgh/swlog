const zlib = require('zlib');

const txt = 'hello';
zlib.gzip(new Buffer(txt), {level: 9}, (err, result) => {
    if(err) throw err;
    console.log(result.toString('utf-8'));
});