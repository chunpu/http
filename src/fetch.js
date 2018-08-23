var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

function Client() {
  this.baseUrl = ''
  this.interceptors = {
    request: new Queue(),
    response: new Queue()
  }
  this.mode = 'axios' // default is axios
}

Client.modes = ['axios', 'jquery', 'wxapp'] // may have fetch in future

var proto = Client.prototype

module.exports = new Client()

proto.init = function(opt) {
  _.extend(this, opt)
}

proto.fetch = function(config) {
  config = config || {}
  var url = config.url
  if (this.baseUrl) {
    url = this.baseUrl + url
  }
  url = Url.appendQuery(url, config.params)
  var method = _.upper(config.method)
  var headers = config.headers || config.header || {}
  var contentType = headers['content-type']
  var data = config.data

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
  var config = {
    url,
    data,
    header: headers,
    method
  }

  var ret = Promise.resolve(config)
    .then(this.interceptors.request.exec)
    .then(this.innerFetch)
    .then(this.interceptors.response.exec)
}

proto.innerFetch = function(ret) {
  if (this.mode === 'wxapp') {
    return ret.then(config => {
      return {
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method
      }
    }).then(wxappPromisify('request'))
  } else if (this.mode === 'axios') {
    return axios.request(config)
  }
  return ret
}

_.each('get head delete options'.split(' '), method => {
  proto[method] = function(url, config) {
    return this.fetch(_.extend({
      method,
      url
    }, config))
  }
})

_.each('post put patch'.split(' '), method => {
  proto[method] = function(url, data, config) {
    return this.fetch(_.extend({
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
      var ctx = wxCtx || wx
      ctx[funcName](opt)
    })
  }
}

//---------------------

function Queue() {
  this.queue = []
}

var proto = Queue.prototype

proto.use = function(middleware) {
  this.queue.push(middleware)
}

proto.exec = function(value) {
  return _.reduce(this.queue, (prev, middleware) => {
    return prev.then(middleware)
  }, Promise.resolve(value))
}
