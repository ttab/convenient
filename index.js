var ninvoke = require('./ninvoke');
var npost   = require('./npost');
var nfcall  = require('./nfcall');
var nfapply = require('./nfapply');

module.exports = {
    nsend   : ninvoke,
    ninvoke : ninvoke,
    npost   : npost,
    nmapply : npost,
    nfcall  : nfcall,
    nfapply : nfapply
};
