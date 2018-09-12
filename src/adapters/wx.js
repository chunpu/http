const utils = require('../utils')

module.exports = function(config) {
  var defaults = this.defaults
  if (defaults && defaults.wx) {
    // https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html#wxrequestobject
    var timer
    return new Promise((resolve, reject) => {
      var task = defaults.wx.request({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        success (response) {
          utils.clearTimer(timer)
          var {data, statusCode, header} = response
          resolve({
            data,
            status: statusCode,
            headers: header
          })
        },
        fail (err) {
          utils.clearTimer(timer)
          reject(err)
        }
      })

      if (config.timeout) {
        timer = setTimeout(() => {
          if (task && task.abort) {
            task.abort
          }
          reject(utils.createError('timeout'))
        }, config.timeout)
      }
    })
  }
}
