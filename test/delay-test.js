/*global describe,it,expect */

var delay = require('../delay');

describe('delay', function() {

    it('returns a promise that is eventually resolved', function() {
        var d = delay(1000);
        expect(d.then).to.be.a('function');
        return d;
    });

});
