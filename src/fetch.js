var _ = require('min-util')
var Url = require('min-url')
var qs = require('min-qs')

function Client() {
  this.baseUrl = ''
  this.beforeRequest = _.identity
  this.afterResponse = _.identity
  this.mode = 'axios' // default is axios
}

Client.modes = ['axios', 'jquery', 'wxapp'] // may have fetch in future

var client = Client.prototype

module.exports = new Client()

client.init = function(opt) {
  _.extend(this, opt)
}

client.fetch = function(config) {
  config = config || {}
  var query = config.query || config.params
  var url = config.url
  if (this.baseUrl) {
    url = this.baseUrl + url
  }
  url = Url.appendQuery(url, query)
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

  var realConfig = {
    url,
    data,
    header: headers,
    method
  }

  return Promise.resolve(realConfig)
    .then(this.beforeRequest)
    .then(promisify('request'))
    .then(this.afterResponse)
}

_.each('get head delete options'.split(' '), method => {
  client[method] = function(url, config) {
    return this.fetch(_.extend({
      method,
      url
    }, config))
  }
})

_.each('post put patch'.split(' '), method => {
  client[method] = function(url, data, config) {
    return this.fetch(_.extend({
      url,
      method,
      data
    }, config))
  }
})

function promisify(funcName, wxCtx) {
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
