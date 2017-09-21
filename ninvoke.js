var resolver = require('./lib/resolver')

module.exports = function invoke (obj, fn) {
  var args = Array.prototype.slice.call(arguments, 2)
  return new Promise(function (resolve, reject) {
    args.push(resolver(obj, resolve, reject))
    obj[fn].apply(obj, args)
  })
}
