var chai = require('chai')
global.chai = chai
global.expect = chai.expect

var sinon = require('sinon')
global.sinon = sinon
global.spy = sinon.spy
global.stub = sinon.stub
global.match = sinon.match
global.mock = sinon.mock

chai.use(require('sinon-chai'))
chai.use(require('chai-as-promised'))
chai.should()
