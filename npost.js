var resolver = require('./lib/resolver');

module.exports = function npost(obj, fn) {
    var args = arguments[2];
    return new Promise(function (resolve, reject) {
        args.push(resolver(obj, resolve, reject));
        obj[fn].apply(obj, args);
    });
};
