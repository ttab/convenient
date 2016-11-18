var ninvoke = require('./ninvoke');
var npost   = require('./npost');
var nfcall  = require('./nfcall');
var nfapply = require('./nfapply');
var nfbind  = require('./nfbind');
var nbind   = require('./nbind');
var defer   = require('./defer');

module.exports = {
    nsend     : ninvoke,
    ninvoke   : ninvoke,
    npost     : npost,
    nfcall    : nfcall,
    nfapply   : nfapply,
    nfbind    : nfbind,
    denodeify : nfbind,
    nbind     : nbind,
    defer     : defer
};
