var ninvoke = require('./ninvoke');
var nfcall  = require('./nfcall');
var nfapply = require('./nfapply');

module.exports = {
    nsend   : ninvoke,
    ninvoke : ninvoke,
    nfcall  : nfcall,
    nfapply : nfapply
};
