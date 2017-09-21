/* global describe,it,stub,beforeEach */
/* eslint-disable no-unused-expressions */

var nfapply = require('../nfapply')

describe('nfapply', function () {
  var mod
  beforeEach(function () {
    mod = {
      fun: stub()
    }
  })

  it('returns a fulfilled promise on success', function () {
    mod.fun.callsArgWith(2, undefined, 'hello', 'world')
    return nfapply(mod.fun, [1, 2]).then(function (result) {
      mod.fun.should.have.been.calledOnce
      mod.fun.should.have.been.calledWith(1, 2)
      result.should.equal('hello')
    })
  })

  it('returns a rejected promise on failure', function () {
    mod.fun.callsArgWith(2, 'panda attack!')
    return nfapply(mod.fun, [1, 2])
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
              mod.fun.should.have.been.calledOnce
            })
  })

  it('returns a rejected promise on exceptions', function () {
    mod.fun.throws(new Error('panda attack!'))
    return nfapply(mod.fun, [1, 2])
            .should.eventually.be.rejectedWith('panda attack!')
            .and.then(function () {
              mod.fun.should.have.been.calledOnce
            })
  })
})
