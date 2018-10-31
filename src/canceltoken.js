module.exports = Deferred

function Deferred() {
  var me = this
  me.promise = new Promise(function(resolve, reject) {
    me.resolve = resolve
    me.reject = reject
  })
}

Deferred.source = function() {
  var deferred = new Deferred()
  return {
    token: deferred,
    cancel: function(reason) {
      deferred.resolve(new Error(reason))
    }
  }
}

Deferred.prototype.throwIfRequested = function() {
  // 兼容 axios
}
