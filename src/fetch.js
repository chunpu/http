const _ = require('min-util')
const Url = require('min-url')
const qs = require('min-qs')
const Queue = require('./queue')
const utils = require('./utils')
const adapters = require('./adapters')

const JSON_TYPE = 'application/json'
const URL_TYPE = 'application/x-www-form-urlencoded'
const CONTENT_TYPE_KEY = utils.CONTENT_TYPE_KEY
const simpleMethods = ['get', 'head', 'delete', 'options']
const dataMethods = ['post', 'put', 'patch']
const httpMethods = [...simpleMethods, ...dataMethods]

// TODO recognize timeout error type
function HttpClient (opt) {
  // has defaults, interceptors two key
  this.defaults = {
    baseURL: '',
    timeout: 0,
    headers: {
      common: {}
    },
    withCredentials: false
  }
  _.each(httpMethods, method => {
    var header = this.defaults.headers[method] = {}
    if (_.includes(dataMethods, 'method')) {
      header[method] = JSON_TYPE
    }
  })

  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }

  this.qs = qs

  this.init(opt)
}

HttpClient.qs = qs

var proto = HttpClient.prototype

proto.init = function (opt) {
  // not exist in axios
  opt = _.extend({}, opt)
  this.defaults.headers.common = opt.headers || {}
  delete opt.headers
  _.extend(this.defaults, opt)
}

proto.create = function (opt) {
  return new HttpClient(opt)
}

proto.request = function (arg1, arg2) {
  if (_.isString(arg1)) {
    return this.request(_.extend({url: arg1}, arg2))
  }
  var config = arg1 || {}
  config.headers = config.headers || {} // 必须有值
  config = _.extend({}, this.defaults, config)

  var url = config.baseURL + config.url
  url = Url.appendQuery(url, config.params)

  var method = _.toLower(config.method) || 'get'
  var defaultHeaders = this.defaults.headers
  var headers = _.extend({}, defaultHeaders.common, defaultHeaders[method], config.headers)
  var contentType = utils.getContentType(headers)
  var guessRequestType = contentType

  // 序列化 request data
  var data = config.data
  if (_.isPlainObject(data)) {
    // 只序列化 plain object, 其他直接发送, 比如字符串, FormData, Blob 之类的
    if (contentType === URL_TYPE) {
      data = qs.stringify(data)
    } else if (contentType === JSON_TYPE) {
      data = JSON.stringify(data)
    }
    if (!guessRequestType) {
      if (_.isString(data)) {
        guessRequestType = URL_TYPE
      }
    }
    if (!_.isString(data)) {
      data = JSON.stringify(data) // 默认用 json
      guessRequestType = guessRequestType || JSON_TYPE
    }
    if (!contentType && guessRequestType) {
      headers[CONTENT_TYPE_KEY] = guessRequestType
    }
  } else {
    if (utils.isFormData(data)) {
      // Let the browser set it
      delete headers[CONTENT_TYPE_KEY]
    }
  }

  var timeout = config.timeout

  // TODO auth...
  config = {
    url,
    data,
    headers,
    method: _.toUpper(method),
    withCredentials: config.withCredentials
  }

  if (timeout) {
    config.timeout = timeout
  }

  return Promise.resolve(config)
    .then(config => this.interceptors.request.exec(config)) // after get config
    .then(config => this.adapter.call(this, config))
    .then(response => {
      // 尝试解析 response.data, 总是尝试解析成 json(就像 axios 一样), 因为后端通常写不对 mime
      if (_.isString(response.data)) {
        if (!this.axios) {
          var rawResponse = response.data
          try {
            response.data = JSON.parse(response.data)
          } catch (err) {
            response.data = rawResponse
          }
        }
      }
      response.config = config
      response.headers = _.mapKeys(response.headers, (value, key) => {
        return _.toLower(key) // All header names are lower cased
      })
      return response
    })
    .then(response => this.interceptors.response.exec(response)) // after parse data
}

// axios adapter
proto.adapter = function (config) {
  var defaults = this.defaults
  if (defaults.wx) {
    return adapters.wx.call(this, config)
  } else if (defaults.axios) {
    return adapters.axios.call(this, config)
  } else if (defaults.jQuery) {
    return adapters.jquery.call(this, config)
  } else if (defaults.quickapp) {
    return adapters.quickapp.call(this, config)
  } else if (typeof XMLHttpRequest === 'function') {
    return adapters.xhr.call(this, config)
  }
}

_.each(simpleMethods, method => {
  proto[method] = function (url, config) {
    return this.request(_.extend({
      method,
      url
    }, config))
  }
})

_.each(dataMethods, method => {
  proto[method] = function (url, data, config) {
    return this.request(_.extend({
      url,
      method,
      data
    }, config))
  }
})

module.exports = exports = HttpClient
