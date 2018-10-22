const utils = require('../utils')
const _ = require('min-util')

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
      reject(utils.createError('timeout'))
    }
    xhr.onerror = ev => {
      reject(utils.createError('error'))
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

    if (config.cancelToken) {
      config.cancelToken.promise.then(function onCancel(reason) {
        if (xhr) {
          xhr.abort()
          reject(reason)
          xhr = null
        }
      })
    }

    xhr.send(config.data)
  })
}