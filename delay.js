module.exports = function (timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout)
  })
}
