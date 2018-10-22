const _ = require('min-util')
const HttpClient = require('./http')

const instance = new HttpClient()

module.exports = instance

// TODO sth wrong with quickapp, to be verified
// module.exports = exports = http // always export a function

// function http(...args) {
//   return instance.request(...args)
// }

// for (var key in instance) {
//   var val = instance[key]
//   if (_.isFunction(val)) {
//     val = _.bind(val, instance) //
//   }
//   http[key] = val
// }
