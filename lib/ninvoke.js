
module.exports = function invoke(obj, fn) {
    var args = Array.prototype.slice.call(arguments, 2);
    return new Promise(function (resolve, reject) {
        args.push(function (err) {
            if (err) {
                reject(err);
            } else {
                resolve.apply(undefined, Array.prototype.slice.call(arguments, 1));
            }
        });
        obj[fn].apply(obj, args);
    });
};
