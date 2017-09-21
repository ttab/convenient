var resolver = require('./lib/resolver')

module.exports = function nbind (fn, obj) {
  var baseArgs = Array.prototype.slice.call(arguments, 2)
  return function () {
    var args = baseArgs.concat(Array.prototype.slice.call(arguments, 0))
    return new Promise(function (resolve, reject) {
      args.push(resolver(obj, resolve, reject))
      fn.apply(obj, args)
    })
  }
}
