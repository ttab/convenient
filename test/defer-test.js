/* global describe,it */

var defer = require('../defer')

describe('defer', function () {
  it('returns a deferred that can be resolved', function () {
    var def = defer()
    def.promise.should.have.property('then')
    process.nextTick(function () { def.resolve('panda') })
    return def.promise.should.eventually.equal('panda')
  })

  it('returns a deferred that can be rejected', function () {
    var def = defer()
    def.promise.should.have.property('then')
    process.nextTick(function () { def.reject('panda') })
    return def.promise.should.eventually.be.rejectedWith('panda')
  })
})
