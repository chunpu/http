var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')
var Queue = require('./queue')
var utils = require('./utils')
var adapters = require('./adapters')
var CancelToken = require('./canceltoken')

var JSON_TYPE = 'application/json'
var URL_TYPE = 'application/x-www-form-urlencoded'
var CONTENT_TYPE_KEY = utils.CONTENT_TYPE_KEY
var simpleMethods = ['get', 'head', 'delete', 'options']
var dataMethods = ['post', 'put', 'patch']
var httpMethods = [].concat(simpleMethods, dataMethods)

function HttpClient (opt) {
  var me = this
  this.defaults = {
    baseURL: '',
    timeout: 0,
    headers: {
      common: {}
    },
    withCredentials: false
  }
  _.each(httpMethods, function(method) {
    var header = me.defaults.headers[method] = {}
    if (_.includes(dataMethods, 'method')) {
      header[method] = JSON_TYPE
    }
  })

  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }

  this.qs = qs
  this.CancelToken = CancelToken
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
  var me = this
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

  // TODO auth
  config = {
    url: url,
    data: data,
    headers: headers,
    method: _.toUpper(method),
    cancelToken: config.cancelToken,
    withCredentials: config.withCredentials
  }

  if (timeout) {
    config.timeout = timeout
  }

  var ret = Promise.resolve(config)
  ret = me.interceptors.request.intercept(ret) // after get config
    .then(function(config) {return me.adapter.call(me, config)})
    .then(function(response) {
      // 尝试解析 response.data, 总是尝试解析成 json(就像 axios 一样), 因为后端通常写不对 mime
      if (_.isString(response.data)) {
        if (!me.axios) {
          var rawResponse = response.data
          try {
            response.data = JSON.parse(response.data)
          } catch (err) {
            response.data = rawResponse
          }
        }
      }
      response.config = config
      response.headers = _.mapKeys(response.headers, function(value, key) {
        return _.toLower(key) // All header names are lower cased
      })
      return response
    })
  ret = me.interceptors.response.intercept(ret) // after parse data
  return ret
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

// TODO add http.all http.spread like axios

_.each(simpleMethods, function(method) {
  proto[method] = function (url, config) {
    return this.request(_.extend({
      method: method,
      url: url
    }, config))
  }
})

_.each(dataMethods, function(method) {
  proto[method] = function (url, data, config) {
    return this.request(_.extend({
      url: url,
      method: method,
      data: data
    }, config))
  }
})

module.exports = exports = HttpClient
