var invoke = require('../lib/invoke');

describe('invoke', function () {
    var obj;
    beforeEach(function () {
        obj = {
            method: stub()
        };
    });

    it('returns a fulfilled promise on success', function () {
        obj.method.callsArgWith(2, undefined, 'hello', 'world');
        return invoke(obj, 'method', 1, 2).then(function (result) {
            obj.method.should.have.been.calledOnce;
            obj.method.should.have.been.calledWith(1, 2);
            result.should.equal('hello');
        });
    });

    it('returns a rejected promise on failure', function () {
        obj.method.callsArgWith(2, 'panda attack!');
        return invoke(obj, 'method', 1, 2)
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
                obj.method.should.have.been.calledOnce;
            });
    });

    it('returns a rejected promise on exceptions', function () {
        obj.method.throws(new Error('panda attack!'));
        return invoke(obj, 'method', 1, 2)
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
                obj.method.should.have.been.calledOnce;
            });
    });

});
