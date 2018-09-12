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
        timeout: config.timeout,
        success (response) {
          // {data, code, headers}
          var {data, code, headers} = response
          resolve({
            data,
            status: code,
            headers
          })
        },
        fail (data, code) {
          reject({data, code})
        }
      })
    })
  }
}
