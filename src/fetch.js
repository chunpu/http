var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

const JSON_TYPE = 'application/json'
const URL_TYPE = 'application/x-www-form-urlencoded'
const CONTENT_TYPE_KEY = 'Content-Type'
const reContentType = new RegExp(CONTENT_TYPE_KEY, 'i')
const simpleMethods = ['get', 'head', 'delete', 'options']
const dataMethods = ['post', 'put', 'patch']
const httpMethods = [...simpleMethods, ...dataMethods]

function HttpClient (opt) {
  // has defaults, interceptors two key
  this.defaults = {
    baseURL: '',
    timeout: 0,
    headers: {
      common: {}
    }
  }
  _.each(httpMethods, method => {
    var header = this.defaults.headers[method] = {}
    if (_.includes(dataMethods, 'method')) {
      header[method] = URL_TYPE
    }
  })

  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }

  this.init(opt)
}

HttpClient.qs = qs

var proto = HttpClient.prototype

proto.init = function (opt) {
  // not exist in axios
  _.extend(this.defaults, opt)
}

proto.create = function (opt) {
  return new HttpClient(opt)
}

proto.request = function (arg1, arg2) {
  if (_.isString(arg1)) {
    return this.request(_.extend({url: arg1}, arg2))
  }
  // TODO 使用 extend, 单独处理 extend
  var config = arg1 || {}
  config = _.extend({}, this.defaults, config)

  var url = config.baseURL + config.url
  url = Url.appendQuery(url, config.params)

  var method = _.toLower(config.method) || 'get'
  var defaultHeaders = this.defaults.headers
  var headers = _.extend({}, defaultHeaders.common, defaultHeaders[method], config.headers)

  var contentType = getContentType(headers)
  var guessRequestType = contentType

  // 序列化 data
  var data = config.data
  if (data) {
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
  }

  config.method = _.toUpper(method)

  // TODO withCredentials auth...
  config = {
    url,
    data,
    headers,
    method
  }

  return Promise.resolve(config)
    .then(config => this.interceptors.request.exec(config)) // after get config
    .then(config => this.innerFetch(config))
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
      return response
    })
    .then(response => this.interceptors.response.exec(response)) // after parse data
}

proto.innerFetch = function (config) {
  var defaults = this.defaults
  if (defaults.wx) {
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
  } else if (defaults.axios) {
    return defaults.axios.request(config).then(response => {
      return _.extend(response, {config})
    })
  } else if (defaults.jQuery) {
    // TODO 优化 jquery 结果
    return defaults.jQuery.ajax(config).then((data, textStatus, jqXHR) => {
      return {
        data,
        textStatus,
        jqXHR
      }
    }, (jqXHR, textStatus, errorThrown) => {
      return {
        errorThrown,
        textStatus,
        jqXHR
      }
    })
  } else if (defaults.quickapp) {
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
  } else if (typeof XMLHttpRequest === 'function') {
    // TODO timeout, reject
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve({
            status: xhr.status,
            data: xhr.responseText,
            headers: xhr.headers
          })
        }
      }
      xhr.open(config.method, config.url, true)
      xhr.send(config.data)
    })
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

function getContentType(headers) {
  var headerKeys = _.keys(headers)
  var typeKey = _.find(headerKeys, key => {
    return reContentType.test(key)
  })
  return headers[typeKey]
}

export default new HttpClient()

// Queue ---------------------

function Queue () {
  this.queue = []
}

_.extend(Queue.prototype, {
  use (middleware) {
    this.queue.push(middleware)
    return this
  },
  exec (value) {
    return _.reduce(this.queue, (prev, middleware) => {
      return prev.then(middleware)
    }, Promise.resolve(value))
  }
})
