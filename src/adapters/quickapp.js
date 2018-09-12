const utils = require('../utils')

module.exports = function(config) {
  var defaults = this.defaults
  if (defaults && defaults.quickapp) {
    // https://doc.quickapp.cn/features/system/fetch.html
    return new Promise((resolve, reject) => {
      defaults.quickapp.fetch({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        success (response) {
          utils.clearTimer(timer)
          var {data, code, headers} = response
          resolve({
            data,
            status: code,
            headers
          })
        },
        fail (data, code) {
          utils.clearTimer(timer)
          reject({data, code})
        }
      })

      if (config.timeout) {
        timer = setTimeout(() => {
          reject(utils.createError('timeout'))
        }, config.timeout)
      }
    })
  }
}
