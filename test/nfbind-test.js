/*global describe,it,stub,beforeEach */

var nfbind = require('../nfbind');

describe('nfbind', function () {
    var mod;
    beforeEach(function () {
        mod = {
            fun: stub()
        };
    });

    it('returns a promise version of a callback function', function () {
        mod.fun.callsArgWith(2, undefined, 'hello', 'world');
        var fn = nfbind(mod.fun);
        return fn(1, 2).then(function (result) {
            mod.fun.should.have.been.calledOnce;
            mod.fun.should.have.been.calledWith(1, 2);
            result.should.equal('hello');
        });
    });

    it('accepts additional arguments to be bound', function () {
        mod.fun.callsArgWith(4, undefined, 'hello', 'world');
        var fn = nfbind(mod.fun, 3, 4);
        return fn(1, 2).then(function (result) {
            mod.fun.should.have.been.calledOnce;
            mod.fun.should.have.been.calledWith(3, 4, 1, 2);
            result.should.equal('hello');
        });
    });

});
