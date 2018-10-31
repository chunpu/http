var _ = require('min-util')

module.exports = Queue

function Queue() {
  this.queue = []
}

_.extend(Queue.prototype, {
  use: function() {
    this.queue.push(arguments)
    return this
  },
  intercept: function(promise) {
    return _.reduce(this.queue, function(prev, middlewares) {
      return prev.then.apply(prev, middlewares)
    }, promise)
  }
})
