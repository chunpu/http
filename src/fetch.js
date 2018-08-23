var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

function HttpClient () {
  this.mode = 'axios' // default is axios
  this.baseUrl = ''
  this.timeout = null // default no timeout, TODO
  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }
}

HttpClient.modes = ['axios', 'jquery', 'wxapp'] // may have fetch in future

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
  var contentType = headers['content-type'] // all lowercase
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
    .then(config => this.interceptors.request.exec(config))
    .then(config => this.innerFetch(config))
    .then(response => this.interceptors.response.exec(response))
}

proto.innerFetch = function (config) {
  if (this.mode === 'wxapp') {
    return wxappPromisify('request')({
      url: config.url,
      data: config.data,
      header: config.headers,
      method: config.method
    })
  } else if (this.axios) {
    return this.axios.request(config).then(response => {
      return _.extend(response, {config})
    })
  } else if (/jquery/i.test(this.mode)) {
    /* eslint-disable */
    // TODO 优化 jquery 结果
    return $.ajax(config).then((data, textStatus, jqXHR) => {
    /* eslint-enable */
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

function wxappPromisify (funcName, wxCtx) {
  return function (opt) {
    return new Promise((resolve, reject) => {
      opt = _.extend({
        success: resolve,
        fail: reject
      }, opt)
      /* eslint-disable */
      var ctx = wxCtx || wx
      /* eslint-enable */
      ctx[funcName](opt)
    })
  }
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
