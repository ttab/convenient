var nfapply = require('./nfapply');

module.exports = function nfbind(fn) {
    return function() {
        return nfapply(fn, Array.prototype.slice.call(arguments, 0));
    };
};
