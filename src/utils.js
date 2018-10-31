var _ = require('min-util')

var CONTENT_TYPE_KEY = 'Content-Type'
var reContentType = new RegExp(CONTENT_TYPE_KEY, 'i')

function getContentType(headers) {
  var headerKeys = _.keys(headers)
  var typeKey = _.find(headerKeys, function(key) {
    return reContentType.test(key)
  })
  return headers[typeKey]
}

function parseHeadersFromXhr(xhr) {
  return _.chain(xhr.getAllResponseHeaders())
    .trim()
    .split('\n')
    .reduce(function(ret, header) {
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
  return new Promise(function(resolve, reject) {
    if (timeout) {
      setTimeout(function() {
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

function createError(message, obj) {
  var err = new Error(message)
  _.extend(err, obj)
  return err
}

exports.CONTENT_TYPE_KEY = CONTENT_TYPE_KEY
exports.getContentType = getContentType
exports.parseHeadersFromXhr = parseHeadersFromXhr
exports.isFormData = isFormData
exports.timeout = timeout
exports.clearTimer = clearTimer
exports.createError = createError
