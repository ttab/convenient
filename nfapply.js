var resolver = require('./lib/resolver');

module.exports = function nfapply(fn) {
    var args = arguments[1];
    return new Promise(function (resolve, reject) {
        args.push(resolver(undefined, resolve, reject));
        fn.apply(undefined, args);
    });

};
