const _ = require('min-util')

module.exports = Queue

function Queue() {
  this.queue = []
}

_.extend(Queue.prototype, {
  use (...middleware) {
    this.queue.push(middleware)
    return this
  },
  intercept (promise) {
    return _.reduce(this.queue, (prev, middleware) => {
      return prev.then(...middleware)
    }, promise)
  }
})
