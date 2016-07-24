const crypto = require('./crypto');

crypto.encrypt('hello', 'gz', (err, result) => {
    if(err) throw err;
    console.log(result.toString());
    crypto.decrypt(result.toString(), 'gz', (err, result) => {
        if(err) throw err;
        console.log(result);
    });
});