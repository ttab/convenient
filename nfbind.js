var nfapply = require('./nfapply');

module.exports = function nfbind(fn) {
    var baseArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
        var args = baseArgs.concat(Array.prototype.slice.call(arguments, 0));
        return nfapply(fn, args);
    };
};
