
module.exports = function nfcall(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (resolve, reject) {
        args.push(function(err) {
            if (err) {
                reject(err);
            } else {
                resolve.apply(undefined, Array.prototype.slice.call(arguments, 1));
            }
        });
        fn.apply(undefined, args);
    });

};
