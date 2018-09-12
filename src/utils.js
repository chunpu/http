const _ = require('min-util')

const CONTENT_TYPE_KEY = 'Content-Type'
const reContentType = new RegExp(CONTENT_TYPE_KEY, 'i')

function getContentType(headers) {
  var headerKeys = _.keys(headers)
  var typeKey = _.find(headerKeys, key => {
    return reContentType.test(key)
  })
  return headers[typeKey]
}

function parseHeadersFromXhr(xhr) {
  return _.chain(xhr.getAllResponseHeaders())
    .trim()
    .split('\n')
    .reduce((ret, header) => {
      var i = _.indexOf(header, ':')
      var key = _.toLower(_.trim(_.slice(header, 0, i)))
      var value = _.trim(_.slice(header, i + 1))
      if (ret[key]) {
        ret[key] = ',' + value // 多个 cookie 用 `,` 分隔, 无空格
      } else {
        ret[key] = value
      }
      return ret
    }, {})
    .value()
}

function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

function timeout(time) {
  return new Promise((resolve, reject) => {
    if (timeout) {
      setTimeout(() => {
        reject(new Error('timeout'))
      }, time)
    }
  })
}

function clearTimer(timer) {
  if (timer) {
    clearTimeout(timer)
  }
}

exports.CONTENT_TYPE_KEY = CONTENT_TYPE_KEY
exports.getContentType = getContentType
exports.parseHeadersFromXhr = parseHeadersFromXhr
exports.isFormData = isFormData
exports.timeout = timeout
exports.clearTimer = clearTimer
