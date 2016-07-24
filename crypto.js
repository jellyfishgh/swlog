const zlib = require('zlib');

function compressRouter(func, buf, cb){
    func(buf, {level: 9}, (err, result) => {
        if(err) cb(err, undefined);
        cb(undefined, result);
    });
}

function decompressRouter(func, buf, cb){
    func(buf, (err, result) => {
        if(err) cb(err, undefined);
        cb(undefined, result);
    });
}

module.exports = {
    encrypt: function(src, type, cb) {        
        let dist = '';
        for(let i = 0; i < src.length; i++){
            let t = src.charCodeAt(i);
            let m = i % 9;
            let a = Math.abs(m - 9) + 1;
            t = t + m * a;
            t = t % 256;
            dist += String.fromCharCode(t);
        }
        let buf = new Buffer(dist);
        switch(type){
        case 'deflate':
            compressRouter(zlib.deflate, buf, cb);
            break;
        case 'deflateRaw':
            compressRouter(zlib.deflateRaw, buf, cb);
            break;
        case 'gunzip':
            compressRouter(zlib.gunzip, buf, cb);
            break;
        default:
            compressRouter(zlib.gzip, buf, cb);
        }
    },
    decrypt: function(dist, type, cb) {
        let buf = new Buffer(dist);
        switch(type){
        case 'inflate':
            decompressRouter(zlib.inflate, buf, func);
            break;
        case 'inflateRaw':
            decompressRouter(zlib.inflateRaw, buf, func);
            break;
        default:
            decompressRouter(zlib.unzip, buf, func);
        }
        function func(err, dist){
            if(err)cb(err, undefined);
            let src = '';
            for(let i = 0; i < dist.length; i++){
                let t = dist.charCodeAt(i);
                let m = i % 9;
                let a = Math.abs(m - 9) + 1;
                t = t - m * a;
                if(t < 0) t += 256;
                src += String.fromCharCode(t);
            }            
            cb(undefined, src);
        }
    }
};