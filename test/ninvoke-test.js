/*global describe,it,stub,beforeEach,expect */

var ninvoke = require('../lib/ninvoke');

describe('ninvoke', function () {
    var obj;
    beforeEach(function () {
        obj = {
            method: stub()
        };
    });

    it('returns a fulfilled promise on success', function () {
        obj.method.callsArgWith(2, undefined, 'hello', 'world');
        return ninvoke(obj, 'method', 1, 2).then(function (result) {
            obj.method.should.have.been.calledOnce;
            obj.method.should.have.been.calledWith(1, 2);
            result.should.equal('hello');
        });
    });

    it('binds this', function (done) {
        obj.method = function () {
            expect(this).to.equal(obj);
            done();
        };
        ninvoke(obj, 'method', 1, 2);
    });

    it('returns a rejected promise on failure', function () {
        obj.method.callsArgWith(2, 'panda attack!');
        return ninvoke(obj, 'method', 1, 2)
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
                obj.method.should.have.been.calledOnce;
            });
    });

    it('returns a rejected promise on exceptions', function () {
        obj.method.throws(new Error('panda attack!'));
        return ninvoke(obj, 'method', 1, 2)
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
                obj.method.should.have.been.calledOnce;
            });
    });

});
