var resolver = require('./lib/resolver')

module.exports = function nfcall (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  return new Promise(function (resolve, reject) {
    args.push(resolver(undefined, resolve, reject))
    fn.apply(undefined, args)
  })
}
