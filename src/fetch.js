var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

function HttpClient () {
  this.baseUrl = ''
  this.timeout = null // default no timeout, TODO
  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }
}

HttpClient.qs = qs

var proto = HttpClient.prototype

proto.init = function (opt) {
  _.extend(this, opt)
}

proto.request = function (arg1, arg2) {
  if (_.isString(arg1)) {
    return this.request(_.extend({url: arg1}, arg2))
  }
  var config = arg1 || {}
  var url = config.url
  if (this.baseUrl) {
    url = this.baseUrl + url
  }
  url = Url.appendQuery(url, config.params)
  var method = _.upper(config.method) || 'GET'
  var headers = config.headers || config.header || {}
  var contentType = getContentType(headers)
  var data = config.data
  var timeout = config.timeout
  if (timeout == null) {
    timeout = this.timeout
  }

  if (config.data) {
    if (contentType === 'application/x-www-form-urlencoded') {
      data = qs.stringify(data)
    } else if (_.isObject(data)) {
      data = JSON.stringify(data)
      if (!contentType) {
        headers = _.extend({
          'content-type': 'application/json'
        }, headers)
      }
    }
  }

  // TODO withCredentials auth...
  config = {
    url,
    data,
    headers,
    method
  }

  if (timeout != null) {
    config.timeout = timeout
  }

  return Promise.resolve(config)
    .then(config => this.interceptors.request.exec(config)) // after get config
    .then(config => this.innerFetch(config))
    .then(response => {
      if (_.isString(response.data)) {
        var contentType = getContentType(response.headers)
        if (_.includes(contentType, 'application/json')) {
          response.data = JSON.parse(response.data)
        }
      }
      return response
    })
    .then(response => this.interceptors.response.exec(response)) // after parse data
}

proto.innerFetch = function (config) {
  if (this.wx) {
    return wxappPromisify('request', this.wx)({
      url: config.url,
      data: config.data,
      header: config.headers,
      method: config.method,
      timeout: config.timeout
    })
  } else if (this.axios) {
    return this.axios.request(config).then(response => {
      return _.extend(response, {config})
    })
  } else if (this.jQuery) {
    // TODO 优化 jquery 结果
    return this.jQuery.ajax(config).then((data, textStatus, jqXHR) => {
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
  } else if (this.quickapp) {
    return new Promise((resolve, reject) => {
      this.quickapp.fetch({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        timeout: config.timeout,
        success (response) {
          resolve(response)
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

_.each('get head delete options'.split(' '), method => {
  proto[method] = function (url, config) {
    return this.request(_.extend({
      method,
      url
    }, config))
  }
})

_.each('post put patch'.split(' '), method => {
  proto[method] = function (url, data, config) {
    return this.request(_.extend({
      url,
      method,
      data
    }, config))
  }
})

function wxappPromisify(funcName, wxCtx) {
  return function (opt) {
    return new Promise((resolve, reject) => {
      opt = _.extend({
        success: resolve,
        fail: reject
      }, opt)
      var ctx = wxCtx
      ctx[funcName](opt)
    })
  }
}

function getContentType(headers) {
  var headerKeys = _.keys(headers)
  var typeKey = _.find(headerKeys, key => {
    return /content-type/i.test(key)
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
