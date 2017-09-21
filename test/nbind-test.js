/* global describe,it,stub,beforeEach,expect */
/* eslint-disable no-unused-expressions */

var nbind = require('../nbind')

describe('nbind', function () {
  var obj
  beforeEach(function () {
    obj = {
      method: stub()
    }
  })

  it('returns a promise version of a callback function', function () {
    obj.method.callsArgWith(2, undefined, 'hello', 'world')
    var fn = nbind(obj.method, obj)
    return fn(1, 2).then(function (result) {
      obj.method.should.have.been.calledOnce
      obj.method.should.have.been.calledWith(1, 2)
      result.should.equal('hello')
    })
  })

  it('binds this', function (done) {
    obj.method = function () {
      expect(this).to.equal(obj)
      done()
    }
    var fn = nbind(obj.method, obj)
    fn(1, 2)
  })

  it('accepts additional arguments to be bound', function () {
    obj.method.callsArgWith(4, undefined, 'hello', 'world')
    var fn = nbind(obj.method, obj, 3, 4)
    return fn(1, 2).then(function (result) {
      obj.method.should.have.been.calledOnce
      obj.method.should.have.been.calledWith(3, 4, 1, 2)
      result.should.equal('hello')
    })
  })
})
