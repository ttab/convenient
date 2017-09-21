
module.exports = function resolver (ctx, resolve, reject) {
  return function (err) {
    if (err) {
      reject(err)
    } else {
      resolve.apply(ctx, Array.prototype.slice.call(arguments, 1))
    }
  }
}
