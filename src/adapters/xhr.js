const utils = require('../utils')

module.exports = function(config) {
  // default use XMLHttpRequest
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.onload = ev => {
      resolve({
        status: xhr.status,
        data: xhr.responseText,
        headers: utils.parseHeadersFromXhr(xhr)
      })
    }
    xhr.ontimeout = ev => {
      reject(new Error('timeout'))
    }
    xhr.onerror = ev => {
      reject(new Error('error'))
    }
    xhr.open(config.method, config.url, true)
    if (config.timeout) {
      xhr.timeout = config.timeout
    }
    if (config.withCredentials) {
      xhr.withCredentials = config.withCredentials
    }
    _.forIn(config.headers, (value, key) => {
      xhr.setRequestHeader(key, value)
    })
    xhr.send(config.data)
  })
}
