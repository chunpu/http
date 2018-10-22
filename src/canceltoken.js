module.exports = Deferred

function Deferred() {
  this.promise = new Promise((resolve, reject) => {
    this.resolve = resolve
    this.reject = reject
  })
}

Deferred.source = () => {
  var deferred = new Deferred()
  return {
    token: deferred,
    cancel (reason) {
      deferred.resolve(new Error(reason))
    }
  }
}

Deferred.prototype.throwIfRequested = function() {
  // 兼容 axios
}
