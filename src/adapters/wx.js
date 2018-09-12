module.exports = function(config) {
  var defaults = this.defaults
  if (defaults && defaults.wx) {
    // https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html#wxrequestobject
    return new Promise((resolve, reject) => {
      defaults.wx.request({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        timeout: config.timeout,
        success (response) {
          var {data, statusCode, header} = response
          resolve({
            data,
            status: statusCode,
            headers: header
          })
        },
        fail (err) {
          reject(err)
        }
      })
    })
  }
}
